import { Fragment as DE, h as lu, reactive as AT, getCurrentInstance as UT, Teleport as zT, createApp as PT, Comment as IT, Text as FT, defineComponent as VT, createBlock as HT, openBlock as $T, unref as BT } from "vue";
function NE(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var gy = { exports: {} }, _v = {}, _y = { exports: {} }, Mt = {};
var YC;
function qT() {
  if (YC) return Mt;
  YC = 1;
  var c = /* @__PURE__ */ Symbol.for("react.element"), v = /* @__PURE__ */ Symbol.for("react.portal"), p = /* @__PURE__ */ Symbol.for("react.fragment"), _ = /* @__PURE__ */ Symbol.for("react.strict_mode"), w = /* @__PURE__ */ Symbol.for("react.profiler"), E = /* @__PURE__ */ Symbol.for("react.provider"), h = /* @__PURE__ */ Symbol.for("react.context"), R = /* @__PURE__ */ Symbol.for("react.forward_ref"), k = /* @__PURE__ */ Symbol.for("react.suspense"), x = /* @__PURE__ */ Symbol.for("react.memo"), O = /* @__PURE__ */ Symbol.for("react.lazy"), A = Symbol.iterator;
  function F(I) {
    return I === null || typeof I != "object" ? null : (I = A && I[A] || I["@@iterator"], typeof I == "function" ? I : null);
  }
  var $ = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ie = Object.assign, oe = {};
  function Ce(I, ee, Xe) {
    this.props = I, this.context = ee, this.refs = oe, this.updater = Xe || $;
  }
  Ce.prototype.isReactComponent = {}, Ce.prototype.setState = function(I, ee) {
    if (typeof I != "object" && typeof I != "function" && I != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, I, ee, "setState");
  }, Ce.prototype.forceUpdate = function(I) {
    this.updater.enqueueForceUpdate(this, I, "forceUpdate");
  };
  function Re() {
  }
  Re.prototype = Ce.prototype;
  function ge(I, ee, Xe) {
    this.props = I, this.context = ee, this.refs = oe, this.updater = Xe || $;
  }
  var le = ge.prototype = new Re();
  le.constructor = ge, ie(le, Ce.prototype), le.isPureReactComponent = !0;
  var we = Array.isArray, ve = Object.prototype.hasOwnProperty, Ke = { current: null }, Ve = { key: !0, ref: !0, __self: !0, __source: !0 };
  function We(I, ee, Xe) {
    var Pe, mt = {}, rt = null, Le = null;
    if (ee != null) for (Pe in ee.ref !== void 0 && (Le = ee.ref), ee.key !== void 0 && (rt = "" + ee.key), ee) ve.call(ee, Pe) && !Ve.hasOwnProperty(Pe) && (mt[Pe] = ee[Pe]);
    var ct = arguments.length - 2;
    if (ct === 1) mt.children = Xe;
    else if (1 < ct) {
      for (var vt = Array(ct), Xt = 0; Xt < ct; Xt++) vt[Xt] = arguments[Xt + 2];
      mt.children = vt;
    }
    if (I && I.defaultProps) for (Pe in ct = I.defaultProps, ct) mt[Pe] === void 0 && (mt[Pe] = ct[Pe]);
    return { $$typeof: c, type: I, key: rt, ref: Le, props: mt, _owner: Ke.current };
  }
  function nt(I, ee) {
    return { $$typeof: c, type: I.type, key: ee, ref: I.ref, props: I.props, _owner: I._owner };
  }
  function ot(I) {
    return typeof I == "object" && I !== null && I.$$typeof === c;
  }
  function X(I) {
    var ee = { "=": "=0", ":": "=2" };
    return "$" + I.replace(/[=:]/g, function(Xe) {
      return ee[Xe];
    });
  }
  var V = /\/+/g;
  function J(I, ee) {
    return typeof I == "object" && I !== null && I.key != null ? X("" + I.key) : ee.toString(36);
  }
  function Ee(I, ee, Xe, Pe, mt) {
    var rt = typeof I;
    (rt === "undefined" || rt === "boolean") && (I = null);
    var Le = !1;
    if (I === null) Le = !0;
    else switch (rt) {
      case "string":
      case "number":
        Le = !0;
        break;
      case "object":
        switch (I.$$typeof) {
          case c:
          case v:
            Le = !0;
        }
    }
    if (Le) return Le = I, mt = mt(Le), I = Pe === "" ? "." + J(Le, 0) : Pe, we(mt) ? (Xe = "", I != null && (Xe = I.replace(V, "$&/") + "/"), Ee(mt, ee, Xe, "", function(Xt) {
      return Xt;
    })) : mt != null && (ot(mt) && (mt = nt(mt, Xe + (!mt.key || Le && Le.key === mt.key ? "" : ("" + mt.key).replace(V, "$&/") + "/") + I)), ee.push(mt)), 1;
    if (Le = 0, Pe = Pe === "" ? "." : Pe + ":", we(I)) for (var ct = 0; ct < I.length; ct++) {
      rt = I[ct];
      var vt = Pe + J(rt, ct);
      Le += Ee(rt, ee, Xe, vt, mt);
    }
    else if (vt = F(I), typeof vt == "function") for (I = vt.call(I), ct = 0; !(rt = I.next()).done; ) rt = rt.value, vt = Pe + J(rt, ct++), Le += Ee(rt, ee, Xe, vt, mt);
    else if (rt === "object") throw ee = String(I), Error("Objects are not valid as a React child (found: " + (ee === "[object Object]" ? "object with keys {" + Object.keys(I).join(", ") + "}" : ee) + "). If you meant to render a collection of children, use an array instead.");
    return Le;
  }
  function He(I, ee, Xe) {
    if (I == null) return I;
    var Pe = [], mt = 0;
    return Ee(I, Pe, "", "", function(rt) {
      return ee.call(Xe, rt, mt++);
    }), Pe;
  }
  function De(I) {
    if (I._status === -1) {
      var ee = I._result;
      ee = ee(), ee.then(function(Xe) {
        (I._status === 0 || I._status === -1) && (I._status = 1, I._result = Xe);
      }, function(Xe) {
        (I._status === 0 || I._status === -1) && (I._status = 2, I._result = Xe);
      }), I._status === -1 && (I._status = 0, I._result = ee);
    }
    if (I._status === 1) return I._result.default;
    throw I._result;
  }
  var xe = { current: null }, re = { transition: null }, Oe = { ReactCurrentDispatcher: xe, ReactCurrentBatchConfig: re, ReactCurrentOwner: Ke };
  function he() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Mt.Children = { map: He, forEach: function(I, ee, Xe) {
    He(I, function() {
      ee.apply(this, arguments);
    }, Xe);
  }, count: function(I) {
    var ee = 0;
    return He(I, function() {
      ee++;
    }), ee;
  }, toArray: function(I) {
    return He(I, function(ee) {
      return ee;
    }) || [];
  }, only: function(I) {
    if (!ot(I)) throw Error("React.Children.only expected to receive a single React element child.");
    return I;
  } }, Mt.Component = Ce, Mt.Fragment = p, Mt.Profiler = w, Mt.PureComponent = ge, Mt.StrictMode = _, Mt.Suspense = k, Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oe, Mt.act = he, Mt.cloneElement = function(I, ee, Xe) {
    if (I == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + I + ".");
    var Pe = ie({}, I.props), mt = I.key, rt = I.ref, Le = I._owner;
    if (ee != null) {
      if (ee.ref !== void 0 && (rt = ee.ref, Le = Ke.current), ee.key !== void 0 && (mt = "" + ee.key), I.type && I.type.defaultProps) var ct = I.type.defaultProps;
      for (vt in ee) ve.call(ee, vt) && !Ve.hasOwnProperty(vt) && (Pe[vt] = ee[vt] === void 0 && ct !== void 0 ? ct[vt] : ee[vt]);
    }
    var vt = arguments.length - 2;
    if (vt === 1) Pe.children = Xe;
    else if (1 < vt) {
      ct = Array(vt);
      for (var Xt = 0; Xt < vt; Xt++) ct[Xt] = arguments[Xt + 2];
      Pe.children = ct;
    }
    return { $$typeof: c, type: I.type, key: mt, ref: rt, props: Pe, _owner: Le };
  }, Mt.createContext = function(I) {
    return I = { $$typeof: h, _currentValue: I, _currentValue2: I, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, I.Provider = { $$typeof: E, _context: I }, I.Consumer = I;
  }, Mt.createElement = We, Mt.createFactory = function(I) {
    var ee = We.bind(null, I);
    return ee.type = I, ee;
  }, Mt.createRef = function() {
    return { current: null };
  }, Mt.forwardRef = function(I) {
    return { $$typeof: R, render: I };
  }, Mt.isValidElement = ot, Mt.lazy = function(I) {
    return { $$typeof: O, _payload: { _status: -1, _result: I }, _init: De };
  }, Mt.memo = function(I, ee) {
    return { $$typeof: x, type: I, compare: ee === void 0 ? null : ee };
  }, Mt.startTransition = function(I) {
    var ee = re.transition;
    re.transition = {};
    try {
      I();
    } finally {
      re.transition = ee;
    }
  }, Mt.unstable_act = he, Mt.useCallback = function(I, ee) {
    return xe.current.useCallback(I, ee);
  }, Mt.useContext = function(I) {
    return xe.current.useContext(I);
  }, Mt.useDebugValue = function() {
  }, Mt.useDeferredValue = function(I) {
    return xe.current.useDeferredValue(I);
  }, Mt.useEffect = function(I, ee) {
    return xe.current.useEffect(I, ee);
  }, Mt.useId = function() {
    return xe.current.useId();
  }, Mt.useImperativeHandle = function(I, ee, Xe) {
    return xe.current.useImperativeHandle(I, ee, Xe);
  }, Mt.useInsertionEffect = function(I, ee) {
    return xe.current.useInsertionEffect(I, ee);
  }, Mt.useLayoutEffect = function(I, ee) {
    return xe.current.useLayoutEffect(I, ee);
  }, Mt.useMemo = function(I, ee) {
    return xe.current.useMemo(I, ee);
  }, Mt.useReducer = function(I, ee, Xe) {
    return xe.current.useReducer(I, ee, Xe);
  }, Mt.useRef = function(I) {
    return xe.current.useRef(I);
  }, Mt.useState = function(I) {
    return xe.current.useState(I);
  }, Mt.useSyncExternalStore = function(I, ee, Xe) {
    return xe.current.useSyncExternalStore(I, ee, Xe);
  }, Mt.useTransition = function() {
    return xe.current.useTransition();
  }, Mt.version = "18.3.1", Mt;
}
var Ev = { exports: {} };
Ev.exports;
var GC;
function WT() {
  return GC || (GC = 1, (function(c, v) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = "18.3.1", _ = /* @__PURE__ */ Symbol.for("react.element"), w = /* @__PURE__ */ Symbol.for("react.portal"), E = /* @__PURE__ */ Symbol.for("react.fragment"), h = /* @__PURE__ */ Symbol.for("react.strict_mode"), R = /* @__PURE__ */ Symbol.for("react.profiler"), k = /* @__PURE__ */ Symbol.for("react.provider"), x = /* @__PURE__ */ Symbol.for("react.context"), O = /* @__PURE__ */ Symbol.for("react.forward_ref"), A = /* @__PURE__ */ Symbol.for("react.suspense"), F = /* @__PURE__ */ Symbol.for("react.suspense_list"), $ = /* @__PURE__ */ Symbol.for("react.memo"), ie = /* @__PURE__ */ Symbol.for("react.lazy"), oe = /* @__PURE__ */ Symbol.for("react.offscreen"), Ce = Symbol.iterator, Re = "@@iterator";
      function ge(S) {
        if (S === null || typeof S != "object")
          return null;
        var L = Ce && S[Ce] || S[Re];
        return typeof L == "function" ? L : null;
      }
      var le = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, we = {
        transition: null
      }, ve = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Ke = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ve = {}, We = null;
      function nt(S) {
        We = S;
      }
      Ve.setExtraStackFrame = function(S) {
        We = S;
      }, Ve.getCurrentStack = null, Ve.getStackAddendum = function() {
        var S = "";
        We && (S += We);
        var L = Ve.getCurrentStack;
        return L && (S += L() || ""), S;
      };
      var ot = !1, X = !1, V = !1, J = !1, Ee = !1, He = {
        ReactCurrentDispatcher: le,
        ReactCurrentBatchConfig: we,
        ReactCurrentOwner: Ke
      };
      He.ReactDebugCurrentFrame = Ve, He.ReactCurrentActQueue = ve;
      function De(S) {
        {
          for (var L = arguments.length, G = new Array(L > 1 ? L - 1 : 0), Z = 1; Z < L; Z++)
            G[Z - 1] = arguments[Z];
          re("warn", S, G);
        }
      }
      function xe(S) {
        {
          for (var L = arguments.length, G = new Array(L > 1 ? L - 1 : 0), Z = 1; Z < L; Z++)
            G[Z - 1] = arguments[Z];
          re("error", S, G);
        }
      }
      function re(S, L, G) {
        {
          var Z = He.ReactDebugCurrentFrame, _e = Z.getStackAddendum();
          _e !== "" && (L += "%s", G = G.concat([_e]));
          var lt = G.map(function(Te) {
            return String(Te);
          });
          lt.unshift("Warning: " + L), Function.prototype.apply.call(console[S], console, lt);
        }
      }
      var Oe = {};
      function he(S, L) {
        {
          var G = S.constructor, Z = G && (G.displayName || G.name) || "ReactClass", _e = Z + "." + L;
          if (Oe[_e])
            return;
          xe("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", L, Z), Oe[_e] = !0;
        }
      }
      var I = {
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
          he(S, "forceUpdate");
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
        enqueueReplaceState: function(S, L, G, Z) {
          he(S, "replaceState");
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
        enqueueSetState: function(S, L, G, Z) {
          he(S, "setState");
        }
      }, ee = Object.assign, Xe = {};
      Object.freeze(Xe);
      function Pe(S, L, G) {
        this.props = S, this.context = L, this.refs = Xe, this.updater = G || I;
      }
      Pe.prototype.isReactComponent = {}, Pe.prototype.setState = function(S, L) {
        if (typeof S != "object" && typeof S != "function" && S != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, L, "setState");
      }, Pe.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate");
      };
      {
        var mt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, rt = function(S, L) {
          Object.defineProperty(Pe.prototype, S, {
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
      ct.prototype = Pe.prototype;
      function vt(S, L, G) {
        this.props = S, this.context = L, this.refs = Xe, this.updater = G || I;
      }
      var Xt = vt.prototype = new ct();
      Xt.constructor = vt, ee(Xt, Pe.prototype), Xt.isPureReactComponent = !0;
      function Un() {
        var S = {
          current: null
        };
        return Object.seal(S), S;
      }
      var Or = Array.isArray;
      function kn(S) {
        return Or(S);
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
      function Xr(S) {
        if (Yn(S))
          return xe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ur(S)), Gn(S);
      }
      function _i(S, L, G) {
        var Z = S.displayName;
        if (Z)
          return Z;
        var _e = L.displayName || L.name || "";
        return _e !== "" ? G + "(" + _e + ")" : G;
      }
      function ha(S) {
        return S.displayName || "Context";
      }
      function tr(S) {
        if (S == null)
          return null;
        if (typeof S.tag == "number" && xe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
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
          case F:
            return "SuspenseList";
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case x:
              var L = S;
              return ha(L) + ".Consumer";
            case k:
              var G = S;
              return ha(G._context) + ".Provider";
            case O:
              return _i(S, S.render, "ForwardRef");
            case $:
              var Z = S.displayName || null;
              return Z !== null ? Z : tr(S.type) || "Memo";
            case ie: {
              var _e = S, lt = _e._payload, Te = _e._init;
              try {
                return tr(Te(lt));
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
      }, wr, Ja, zn;
      zn = {};
      function br(S) {
        if (Tn.call(S, "ref")) {
          var L = Object.getOwnPropertyDescriptor(S, "ref").get;
          if (L && L.isReactWarning)
            return !1;
        }
        return S.ref !== void 0;
      }
      function ma(S) {
        if (Tn.call(S, "key")) {
          var L = Object.getOwnPropertyDescriptor(S, "key").get;
          if (L && L.isReactWarning)
            return !1;
        }
        return S.key !== void 0;
      }
      function Za(S, L) {
        var G = function() {
          wr || (wr = !0, xe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        G.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: G,
          configurable: !0
        });
      }
      function Si(S, L) {
        var G = function() {
          Ja || (Ja = !0, xe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        G.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: G,
          configurable: !0
        });
      }
      function be(S) {
        if (typeof S.ref == "string" && Ke.current && S.__self && Ke.current.stateNode !== S.__self) {
          var L = tr(Ke.current.type);
          zn[L] || (xe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L, S.ref), zn[L] = !0);
        }
      }
      var Ze = function(S, L, G, Z, _e, lt, Te) {
        var ft = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: _,
          // Built-in properties that belong on the element
          type: S,
          key: L,
          ref: G,
          props: Te,
          // Record the component responsible for creating this element.
          _owner: lt
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
          value: Z
        }), Object.defineProperty(ft, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: _e
        }), Object.freeze && (Object.freeze(ft.props), Object.freeze(ft)), ft;
      };
      function Rt(S, L, G) {
        var Z, _e = {}, lt = null, Te = null, ft = null, Ot = null;
        if (L != null) {
          br(L) && (Te = L.ref, be(L)), ma(L) && (Xr(L.key), lt = "" + L.key), ft = L.__self === void 0 ? null : L.__self, Ot = L.__source === void 0 ? null : L.__source;
          for (Z in L)
            Tn.call(L, Z) && !Qn.hasOwnProperty(Z) && (_e[Z] = L[Z]);
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
          for (Z in kt)
            _e[Z] === void 0 && (_e[Z] = kt[Z]);
        }
        if (lt || Te) {
          var nn = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          lt && Za(_e, nn), Te && Si(_e, nn);
        }
        return Ze(S, lt, Te, ft, Ot, Ke.current, _e);
      }
      function Gt(S, L) {
        var G = Ze(S.type, L, S.ref, S._self, S._source, S._owner, S.props);
        return G;
      }
      function un(S, L, G) {
        if (S == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
        var Z, _e = ee({}, S.props), lt = S.key, Te = S.ref, ft = S._self, Ot = S._source, Ft = S._owner;
        if (L != null) {
          br(L) && (Te = L.ref, Ft = Ke.current), ma(L) && (Xr(L.key), lt = "" + L.key);
          var fn;
          S.type && S.type.defaultProps && (fn = S.type.defaultProps);
          for (Z in L)
            Tn.call(L, Z) && !Qn.hasOwnProperty(Z) && (L[Z] === void 0 && fn !== void 0 ? _e[Z] = fn[Z] : _e[Z] = L[Z]);
        }
        var tn = arguments.length - 2;
        if (tn === 1)
          _e.children = G;
        else if (tn > 1) {
          for (var kt = Array(tn), nn = 0; nn < tn; nn++)
            kt[nn] = arguments[nn + 2];
          _e.children = kt;
        }
        return Ze(S.type, lt, Te, ft, Ot, Ft, _e);
      }
      function _n(S) {
        return typeof S == "object" && S !== null && S.$$typeof === _;
      }
      var pn = ".", nr = ":";
      function sn(S) {
        var L = /[=:]/g, G = {
          "=": "=0",
          ":": "=2"
        }, Z = S.replace(L, function(_e) {
          return G[_e];
        });
        return "$" + Z;
      }
      var Jt = !1, Zt = /\/+/g;
      function ya(S) {
        return S.replace(Zt, "$&/");
      }
      function Rr(S, L) {
        return typeof S == "object" && S !== null && S.key != null ? (Xr(S.key), sn("" + S.key)) : L.toString(36);
      }
      function Na(S, L, G, Z, _e) {
        var lt = typeof S;
        (lt === "undefined" || lt === "boolean") && (S = null);
        var Te = !1;
        if (S === null)
          Te = !0;
        else
          switch (lt) {
            case "string":
            case "number":
              Te = !0;
              break;
            case "object":
              switch (S.$$typeof) {
                case _:
                case w:
                  Te = !0;
              }
          }
        if (Te) {
          var ft = S, Ot = _e(ft), Ft = Z === "" ? pn + Rr(ft, 0) : Z;
          if (kn(Ot)) {
            var fn = "";
            Ft != null && (fn = ya(Ft) + "/"), Na(Ot, L, fn, "", function(yd) {
              return yd;
            });
          } else Ot != null && (_n(Ot) && (Ot.key && (!ft || ft.key !== Ot.key) && Xr(Ot.key), Ot = Gt(
            Ot,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            G + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Ot.key && (!ft || ft.key !== Ot.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ya("" + Ot.key) + "/"
            ) : "") + Ft
          )), L.push(Ot));
          return 1;
        }
        var tn, kt, nn = 0, Sn = Z === "" ? pn : Z + nr;
        if (kn(S))
          for (var jo = 0; jo < S.length; jo++)
            tn = S[jo], kt = Sn + Rr(tn, jo), nn += Na(tn, L, G, kt, _e);
        else {
          var cs = ge(S);
          if (typeof cs == "function") {
            var Zi = S;
            cs === Zi.entries && (Jt || De("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Jt = !0);
            for (var fs = cs.call(Zi), Sl, md = 0; !(Sl = fs.next()).done; )
              tn = Sl.value, kt = Sn + Rr(tn, md++), nn += Na(tn, L, G, kt, _e);
          } else if (lt === "object") {
            var bc = String(S);
            throw new Error("Objects are not valid as a React child (found: " + (bc === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : bc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return nn;
      }
      function Ki(S, L, G) {
        if (S == null)
          return S;
        var Z = [], _e = 0;
        return Na(S, Z, "", "", function(lt) {
          return L.call(G, lt, _e++);
        }), Z;
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
        var G = !1, Z = !1, _e = !1;
        {
          var lt = {
            $$typeof: x,
            _context: L
          };
          Object.defineProperties(lt, {
            Provider: {
              get: function() {
                return Z || (Z = !0, xe("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), L.Provider;
              },
              set: function(Te) {
                L.Provider = Te;
              }
            },
            _currentValue: {
              get: function() {
                return L._currentValue;
              },
              set: function(Te) {
                L._currentValue = Te;
              }
            },
            _currentValue2: {
              get: function() {
                return L._currentValue2;
              },
              set: function(Te) {
                L._currentValue2 = Te;
              }
            },
            _threadCount: {
              get: function() {
                return L._threadCount;
              },
              set: function(Te) {
                L._threadCount = Te;
              }
            },
            Consumer: {
              get: function() {
                return G || (G = !0, xe("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), L.Consumer;
              }
            },
            displayName: {
              get: function() {
                return L.displayName;
              },
              set: function(Te) {
                _e || (De("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Te), _e = !0);
              }
            }
          }), L.Consumer = lt;
        }
        return L._currentRenderer = null, L._currentRenderer2 = null, L;
      }
      var Lr = -1, Mr = 0, sr = 1, Ci = 2;
      function ei(S) {
        if (S._status === Lr) {
          var L = S._result, G = L();
          if (G.then(function(lt) {
            if (S._status === Mr || S._status === Lr) {
              var Te = S;
              Te._status = sr, Te._result = lt;
            }
          }, function(lt) {
            if (S._status === Mr || S._status === Lr) {
              var Te = S;
              Te._status = Ci, Te._result = lt;
            }
          }), S._status === Lr) {
            var Z = S;
            Z._status = Mr, Z._result = G;
          }
        }
        if (S._status === sr) {
          var _e = S._result;
          return _e === void 0 && xe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, _e), "default" in _e || xe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, _e), _e.default;
        } else
          throw S._result;
      }
      function Ei(S) {
        var L = {
          // We use these fields to store the result.
          _status: Lr,
          _result: S
        }, G = {
          $$typeof: ie,
          _payload: L,
          _init: ei
        };
        {
          var Z, _e;
          Object.defineProperties(G, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return Z;
              },
              set: function(lt) {
                xe("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Z = lt, Object.defineProperty(G, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return _e;
              },
              set: function(lt) {
                xe("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), _e = lt, Object.defineProperty(G, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return G;
      }
      function xi(S) {
        S != null && S.$$typeof === $ ? xe("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof S != "function" ? xe("forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S) : S.length !== 0 && S.length !== 2 && xe("forwardRef render functions accept exactly two parameters: props and ref. %s", S.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), S != null && (S.defaultProps != null || S.propTypes != null) && xe("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var L = {
          $$typeof: O,
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
            set: function(Z) {
              G = Z, !S.name && !S.displayName && (S.displayName = Z);
            }
          });
        }
        return L;
      }
      var M;
      M = /* @__PURE__ */ Symbol.for("react.module.reference");
      function ue(S) {
        return !!(typeof S == "string" || typeof S == "function" || S === E || S === R || Ee || S === h || S === A || S === F || J || S === oe || ot || X || V || typeof S == "object" && S !== null && (S.$$typeof === ie || S.$$typeof === $ || S.$$typeof === k || S.$$typeof === x || S.$$typeof === O || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        S.$$typeof === M || S.getModuleId !== void 0));
      }
      function Ne(S, L) {
        ue(S) || xe("memo: The first argument must be a component. Instead received: %s", S === null ? "null" : typeof S);
        var G = {
          $$typeof: $,
          type: S,
          compare: L === void 0 ? null : L
        };
        {
          var Z;
          Object.defineProperty(G, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return Z;
            },
            set: function(_e) {
              Z = _e, !S.name && !S.displayName && (S.displayName = _e);
            }
          });
        }
        return G;
      }
      function qe() {
        var S = le.current;
        return S === null && xe(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), S;
      }
      function Et(S) {
        var L = qe();
        if (S._context !== void 0) {
          var G = S._context;
          G.Consumer === S ? xe("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : G.Provider === S && xe("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return L.useContext(S);
      }
      function _t(S) {
        var L = qe();
        return L.useState(S);
      }
      function Nt(S, L, G) {
        var Z = qe();
        return Z.useReducer(S, L, G);
      }
      function Tt(S) {
        var L = qe();
        return L.useRef(S);
      }
      function Dn(S, L) {
        var G = qe();
        return G.useEffect(S, L);
      }
      function cn(S, L) {
        var G = qe();
        return G.useInsertionEffect(S, L);
      }
      function vn(S, L) {
        var G = qe();
        return G.useLayoutEffect(S, L);
      }
      function cr(S, L) {
        var G = qe();
        return G.useCallback(S, L);
      }
      function ti(S, L) {
        var G = qe();
        return G.useMemo(S, L);
      }
      function ni(S, L, G) {
        var Z = qe();
        return Z.useImperativeHandle(S, L, G);
      }
      function xt(S, L) {
        {
          var G = qe();
          return G.useDebugValue(S, L);
        }
      }
      function bt() {
        var S = qe();
        return S.useTransition();
      }
      function ri(S) {
        var L = qe();
        return L.useDeferredValue(S);
      }
      function vl() {
        var S = qe();
        return S.useId();
      }
      function hl(S, L, G) {
        var Z = qe();
        return Z.useSyncExternalStore(S, L, G);
      }
      var ko = 0, uu, To, Jr, os, jr, xc, wc;
      function su() {
      }
      su.__reactDisabledLog = !0;
      function Do() {
        {
          if (ko === 0) {
            uu = console.log, To = console.info, Jr = console.warn, os = console.error, jr = console.group, xc = console.groupCollapsed, wc = console.groupEnd;
            var S = {
              configurable: !0,
              enumerable: !0,
              value: su,
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
      function ga() {
        {
          if (ko--, ko === 0) {
            var S = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: ee({}, S, {
                value: uu
              }),
              info: ee({}, S, {
                value: To
              }),
              warn: ee({}, S, {
                value: Jr
              }),
              error: ee({}, S, {
                value: os
              }),
              group: ee({}, S, {
                value: jr
              }),
              groupCollapsed: ee({}, S, {
                value: xc
              }),
              groupEnd: ee({}, S, {
                value: wc
              })
            });
          }
          ko < 0 && xe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ai = He.ReactCurrentDispatcher, ii;
      function cu(S, L, G) {
        {
          if (ii === void 0)
            try {
              throw Error();
            } catch (_e) {
              var Z = _e.stack.trim().match(/\n( *(at )?)/);
              ii = Z && Z[1] || "";
            }
          return `
` + ii + S;
        }
      }
      var ml = !1, No;
      {
        var fu = typeof WeakMap == "function" ? WeakMap : Map;
        No = new fu();
      }
      function du(S, L) {
        if (!S || ml)
          return "";
        {
          var G = No.get(S);
          if (G !== void 0)
            return G;
        }
        var Z;
        ml = !0;
        var _e = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var lt;
        lt = ai.current, ai.current = null, Do();
        try {
          if (L) {
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
              } catch (Sn) {
                Z = Sn;
              }
              Reflect.construct(S, [], Te);
            } else {
              try {
                Te.call();
              } catch (Sn) {
                Z = Sn;
              }
              S.call(Te.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Sn) {
              Z = Sn;
            }
            S();
          }
        } catch (Sn) {
          if (Sn && Z && typeof Sn.stack == "string") {
            for (var ft = Sn.stack.split(`
`), Ot = Z.stack.split(`
`), Ft = ft.length - 1, fn = Ot.length - 1; Ft >= 1 && fn >= 0 && ft[Ft] !== Ot[fn]; )
              fn--;
            for (; Ft >= 1 && fn >= 0; Ft--, fn--)
              if (ft[Ft] !== Ot[fn]) {
                if (Ft !== 1 || fn !== 1)
                  do
                    if (Ft--, fn--, fn < 0 || ft[Ft] !== Ot[fn]) {
                      var tn = `
` + ft[Ft].replace(" at new ", " at ");
                      return S.displayName && tn.includes("<anonymous>") && (tn = tn.replace("<anonymous>", S.displayName)), typeof S == "function" && No.set(S, tn), tn;
                    }
                  while (Ft >= 1 && fn >= 0);
                break;
              }
          }
        } finally {
          ml = !1, ai.current = lt, ga(), Error.prepareStackTrace = _e;
        }
        var kt = S ? S.displayName || S.name : "", nn = kt ? cu(kt) : "";
        return typeof S == "function" && No.set(S, nn), nn;
      }
      function Xi(S, L, G) {
        return du(S, !1);
      }
      function vd(S) {
        var L = S.prototype;
        return !!(L && L.isReactComponent);
      }
      function Ji(S, L, G) {
        if (S == null)
          return "";
        if (typeof S == "function")
          return du(S, vd(S));
        if (typeof S == "string")
          return cu(S);
        switch (S) {
          case A:
            return cu("Suspense");
          case F:
            return cu("SuspenseList");
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case O:
              return Xi(S.render);
            case $:
              return Ji(S.type, L, G);
            case ie: {
              var Z = S, _e = Z._payload, lt = Z._init;
              try {
                return Ji(lt(_e), L, G);
              } catch {
              }
            }
          }
        return "";
      }
      var Ht = {}, pu = He.ReactDebugCurrentFrame;
      function It(S) {
        if (S) {
          var L = S._owner, G = Ji(S.type, S._source, L ? L.type : null);
          pu.setExtraStackFrame(G);
        } else
          pu.setExtraStackFrame(null);
      }
      function ls(S, L, G, Z, _e) {
        {
          var lt = Function.call.bind(Tn);
          for (var Te in S)
            if (lt(S, Te)) {
              var ft = void 0;
              try {
                if (typeof S[Te] != "function") {
                  var Ot = Error((Z || "React class") + ": " + G + " type `" + Te + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[Te] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Ot.name = "Invariant Violation", Ot;
                }
                ft = S[Te](L, Te, Z, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ft) {
                ft = Ft;
              }
              ft && !(ft instanceof Error) && (It(_e), xe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Z || "React class", G, Te, typeof ft), It(null)), ft instanceof Error && !(ft.message in Ht) && (Ht[ft.message] = !0, It(_e), xe("Failed %s type: %s", G, ft.message), It(null));
            }
        }
      }
      function wi(S) {
        if (S) {
          var L = S._owner, G = Ji(S.type, S._source, L ? L.type : null);
          nt(G);
        } else
          nt(null);
      }
      var gt;
      gt = !1;
      function vu() {
        if (Ke.current) {
          var S = tr(Ke.current.type);
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
      var Ar = {};
      function Ri(S) {
        var L = vu();
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
          if (!Ar[G]) {
            Ar[G] = !0;
            var Z = "";
            S && S._owner && S._owner !== Ke.current && (Z = " It was passed a child from " + tr(S._owner.type) + "."), wi(S), xe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, Z), wi(null);
          }
        }
      }
      function en(S, L) {
        if (typeof S == "object") {
          if (kn(S))
            for (var G = 0; G < S.length; G++) {
              var Z = S[G];
              _n(Z) && hn(Z, L);
            }
          else if (_n(S))
            S._store && (S._store.validated = !0);
          else if (S) {
            var _e = ge(S);
            if (typeof _e == "function" && _e !== S.entries)
              for (var lt = _e.call(S), Te; !(Te = lt.next()).done; )
                _n(Te.value) && hn(Te.value, L);
          }
        }
      }
      function Oo(S) {
        {
          var L = S.type;
          if (L == null || typeof L == "string")
            return;
          var G;
          if (typeof L == "function")
            G = L.propTypes;
          else if (typeof L == "object" && (L.$$typeof === O || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          L.$$typeof === $))
            G = L.propTypes;
          else
            return;
          if (G) {
            var Z = tr(L);
            ls(G, S.props, "prop", Z, S);
          } else if (L.PropTypes !== void 0 && !gt) {
            gt = !0;
            var _e = tr(L);
            xe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _e || "Unknown");
          }
          typeof L.getDefaultProps == "function" && !L.getDefaultProps.isReactClassApproved && xe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Kn(S) {
        {
          for (var L = Object.keys(S.props), G = 0; G < L.length; G++) {
            var Z = L[G];
            if (Z !== "children" && Z !== "key") {
              wi(S), xe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Z), wi(null);
              break;
            }
          }
          S.ref !== null && (wi(S), xe("Invalid attribute `ref` supplied to `React.Fragment`."), wi(null));
        }
      }
      function Ur(S, L, G) {
        var Z = ue(S);
        if (!Z) {
          var _e = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (_e += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var lt = bi(L);
          lt ? _e += lt : _e += vu();
          var Te;
          S === null ? Te = "null" : kn(S) ? Te = "array" : S !== void 0 && S.$$typeof === _ ? (Te = "<" + (tr(S.type) || "Unknown") + " />", _e = " Did you accidentally export a JSX literal instead of a component?") : Te = typeof S, xe("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Te, _e);
        }
        var ft = Rt.apply(this, arguments);
        if (ft == null)
          return ft;
        if (Z)
          for (var Ot = 2; Ot < arguments.length; Ot++)
            en(arguments[Ot], S);
        return S === E ? Kn(ft) : Oo(ft), ft;
      }
      var Oa = !1;
      function yl(S) {
        var L = Ur.bind(null, S);
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
        for (var Z = un.apply(this, arguments), _e = 2; _e < arguments.length; _e++)
          en(arguments[_e], Z.type);
        return Oo(Z), Z;
      }
      function ss(S, L) {
        var G = we.transition;
        we.transition = {};
        var Z = we.transition;
        we.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          S();
        } finally {
          if (we.transition = G, G === null && Z._updatedFibers) {
            var _e = Z._updatedFibers.size;
            _e > 10 && De("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), Z._updatedFibers.clear();
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
              Lo === !1 && (Lo = !0, typeof MessageChannel > "u" && xe("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var lt = new MessageChannel();
              lt.port1.onmessage = _e, lt.port2.postMessage(void 0);
            };
          }
        return gl(S);
      }
      var La = 0, oi = !1;
      function ki(S) {
        {
          var L = La;
          La++, ve.current === null && (ve.current = []);
          var G = ve.isBatchingLegacy, Z;
          try {
            if (ve.isBatchingLegacy = !0, Z = S(), !G && ve.didScheduleLegacyUpdate) {
              var _e = ve.current;
              _e !== null && (ve.didScheduleLegacyUpdate = !1, Mo(_e));
            }
          } catch (kt) {
            throw Ma(L), kt;
          } finally {
            ve.isBatchingLegacy = G;
          }
          if (Z !== null && typeof Z == "object" && typeof Z.then == "function") {
            var lt = Z, Te = !1, ft = {
              then: function(kt, nn) {
                Te = !0, lt.then(function(Sn) {
                  Ma(L), La === 0 ? hu(Sn, kt, nn) : kt(Sn);
                }, function(Sn) {
                  Ma(L), nn(Sn);
                });
              }
            };
            return !oi && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Te || (oi = !0, xe("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), ft;
          } else {
            var Ot = Z;
            if (Ma(L), La === 0) {
              var Ft = ve.current;
              Ft !== null && (Mo(Ft), ve.current = null);
              var fn = {
                then: function(kt, nn) {
                  ve.current === null ? (ve.current = [], hu(Ot, kt, nn)) : kt(Ot);
                }
              };
              return fn;
            } else {
              var tn = {
                then: function(kt, nn) {
                  kt(Ot);
                }
              };
              return tn;
            }
          }
        }
      }
      function Ma(S) {
        S !== La - 1 && xe("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), La = S;
      }
      function hu(S, L, G) {
        {
          var Z = ve.current;
          if (Z !== null)
            try {
              Mo(Z), hd(function() {
                Z.length === 0 ? (ve.current = null, L(S)) : hu(S, L, G);
              });
            } catch (_e) {
              G(_e);
            }
          else
            L(S);
        }
      }
      var mu = !1;
      function Mo(S) {
        if (!mu) {
          mu = !0;
          var L = 0;
          try {
            for (; L < S.length; L++) {
              var G = S[L];
              do
                G = G(!0);
              while (G !== null);
            }
            S.length = 0;
          } catch (Z) {
            throw S = S.slice(L + 1), Z;
          } finally {
            mu = !1;
          }
        }
      }
      var _l = Ur, yu = us, gu = yl, li = {
        map: Ki,
        forEach: dl,
        count: fl,
        toArray: bo,
        only: Ro
      };
      v.Children = li, v.Component = Pe, v.Fragment = E, v.Profiler = R, v.PureComponent = vt, v.StrictMode = h, v.Suspense = A, v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = He, v.act = ki, v.cloneElement = yu, v.createContext = pl, v.createElement = _l, v.createFactory = gu, v.createRef = Un, v.forwardRef = xi, v.isValidElement = _n, v.lazy = Ei, v.memo = Ne, v.startTransition = ss, v.unstable_act = ki, v.useCallback = cr, v.useContext = Et, v.useDebugValue = xt, v.useDeferredValue = ri, v.useEffect = Dn, v.useId = vl, v.useImperativeHandle = ni, v.useInsertionEffect = cn, v.useLayoutEffect = vn, v.useMemo = ti, v.useReducer = Nt, v.useRef = Tt, v.useState = _t, v.useSyncExternalStore = hl, v.useTransition = bt, v.version = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(Ev, Ev.exports)), Ev.exports;
}
var QC;
function wv() {
  return QC || (QC = 1, process.env.NODE_ENV === "production" ? _y.exports = qT() : _y.exports = WT()), _y.exports;
}
var KC;
function YT() {
  if (KC) return _v;
  KC = 1;
  var c = wv(), v = /* @__PURE__ */ Symbol.for("react.element"), p = /* @__PURE__ */ Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, w = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(R, k, x) {
    var O, A = {}, F = null, $ = null;
    x !== void 0 && (F = "" + x), k.key !== void 0 && (F = "" + k.key), k.ref !== void 0 && ($ = k.ref);
    for (O in k) _.call(k, O) && !E.hasOwnProperty(O) && (A[O] = k[O]);
    if (R && R.defaultProps) for (O in k = R.defaultProps, k) A[O] === void 0 && (A[O] = k[O]);
    return { $$typeof: v, type: R, key: F, ref: $, props: A, _owner: w.current };
  }
  return _v.Fragment = p, _v.jsx = h, _v.jsxs = h, _v;
}
var Sv = {};
var XC;
function GT() {
  return XC || (XC = 1, process.env.NODE_ENV !== "production" && (function() {
    var c = wv(), v = /* @__PURE__ */ Symbol.for("react.element"), p = /* @__PURE__ */ Symbol.for("react.portal"), _ = /* @__PURE__ */ Symbol.for("react.fragment"), w = /* @__PURE__ */ Symbol.for("react.strict_mode"), E = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), R = /* @__PURE__ */ Symbol.for("react.context"), k = /* @__PURE__ */ Symbol.for("react.forward_ref"), x = /* @__PURE__ */ Symbol.for("react.suspense"), O = /* @__PURE__ */ Symbol.for("react.suspense_list"), A = /* @__PURE__ */ Symbol.for("react.memo"), F = /* @__PURE__ */ Symbol.for("react.lazy"), $ = /* @__PURE__ */ Symbol.for("react.offscreen"), ie = Symbol.iterator, oe = "@@iterator";
    function Ce(M) {
      if (M === null || typeof M != "object")
        return null;
      var ue = ie && M[ie] || M[oe];
      return typeof ue == "function" ? ue : null;
    }
    var Re = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ge(M) {
      {
        for (var ue = arguments.length, Ne = new Array(ue > 1 ? ue - 1 : 0), qe = 1; qe < ue; qe++)
          Ne[qe - 1] = arguments[qe];
        le("error", M, Ne);
      }
    }
    function le(M, ue, Ne) {
      {
        var qe = Re.ReactDebugCurrentFrame, Et = qe.getStackAddendum();
        Et !== "" && (ue += "%s", Ne = Ne.concat([Et]));
        var _t = Ne.map(function(Nt) {
          return String(Nt);
        });
        _t.unshift("Warning: " + ue), Function.prototype.apply.call(console[M], console, _t);
      }
    }
    var we = !1, ve = !1, Ke = !1, Ve = !1, We = !1, nt;
    nt = /* @__PURE__ */ Symbol.for("react.module.reference");
    function ot(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === _ || M === E || We || M === w || M === x || M === O || Ve || M === $ || we || ve || Ke || typeof M == "object" && M !== null && (M.$$typeof === F || M.$$typeof === A || M.$$typeof === h || M.$$typeof === R || M.$$typeof === k || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === nt || M.getModuleId !== void 0));
    }
    function X(M, ue, Ne) {
      var qe = M.displayName;
      if (qe)
        return qe;
      var Et = ue.displayName || ue.name || "";
      return Et !== "" ? Ne + "(" + Et + ")" : Ne;
    }
    function V(M) {
      return M.displayName || "Context";
    }
    function J(M) {
      if (M == null)
        return null;
      if (typeof M.tag == "number" && ge("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof M == "function")
        return M.displayName || M.name || null;
      if (typeof M == "string")
        return M;
      switch (M) {
        case _:
          return "Fragment";
        case p:
          return "Portal";
        case E:
          return "Profiler";
        case w:
          return "StrictMode";
        case x:
          return "Suspense";
        case O:
          return "SuspenseList";
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case R:
            var ue = M;
            return V(ue) + ".Consumer";
          case h:
            var Ne = M;
            return V(Ne._context) + ".Provider";
          case k:
            return X(M, M.render, "ForwardRef");
          case A:
            var qe = M.displayName || null;
            return qe !== null ? qe : J(M.type) || "Memo";
          case F: {
            var Et = M, _t = Et._payload, Nt = Et._init;
            try {
              return J(Nt(_t));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ee = Object.assign, He = 0, De, xe, re, Oe, he, I, ee;
    function Xe() {
    }
    Xe.__reactDisabledLog = !0;
    function Pe() {
      {
        if (He === 0) {
          De = console.log, xe = console.info, re = console.warn, Oe = console.error, he = console.group, I = console.groupCollapsed, ee = console.groupEnd;
          var M = {
            configurable: !0,
            enumerable: !0,
            value: Xe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: M,
            log: M,
            warn: M,
            error: M,
            group: M,
            groupCollapsed: M,
            groupEnd: M
          });
        }
        He++;
      }
    }
    function mt() {
      {
        if (He--, He === 0) {
          var M = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ee({}, M, {
              value: De
            }),
            info: Ee({}, M, {
              value: xe
            }),
            warn: Ee({}, M, {
              value: re
            }),
            error: Ee({}, M, {
              value: Oe
            }),
            group: Ee({}, M, {
              value: he
            }),
            groupCollapsed: Ee({}, M, {
              value: I
            }),
            groupEnd: Ee({}, M, {
              value: ee
            })
          });
        }
        He < 0 && ge("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var rt = Re.ReactCurrentDispatcher, Le;
    function ct(M, ue, Ne) {
      {
        if (Le === void 0)
          try {
            throw Error();
          } catch (Et) {
            var qe = Et.stack.trim().match(/\n( *(at )?)/);
            Le = qe && qe[1] || "";
          }
        return `
` + Le + M;
      }
    }
    var vt = !1, Xt;
    {
      var Un = typeof WeakMap == "function" ? WeakMap : Map;
      Xt = new Un();
    }
    function Or(M, ue) {
      if (!M || vt)
        return "";
      {
        var Ne = Xt.get(M);
        if (Ne !== void 0)
          return Ne;
      }
      var qe;
      vt = !0;
      var Et = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _t;
      _t = rt.current, rt.current = null, Pe();
      try {
        if (ue) {
          var Nt = function() {
            throw Error();
          };
          if (Object.defineProperty(Nt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Nt, []);
            } catch (xt) {
              qe = xt;
            }
            Reflect.construct(M, [], Nt);
          } else {
            try {
              Nt.call();
            } catch (xt) {
              qe = xt;
            }
            M.call(Nt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xt) {
            qe = xt;
          }
          M();
        }
      } catch (xt) {
        if (xt && qe && typeof xt.stack == "string") {
          for (var Tt = xt.stack.split(`
`), Dn = qe.stack.split(`
`), cn = Tt.length - 1, vn = Dn.length - 1; cn >= 1 && vn >= 0 && Tt[cn] !== Dn[vn]; )
            vn--;
          for (; cn >= 1 && vn >= 0; cn--, vn--)
            if (Tt[cn] !== Dn[vn]) {
              if (cn !== 1 || vn !== 1)
                do
                  if (cn--, vn--, vn < 0 || Tt[cn] !== Dn[vn]) {
                    var cr = `
` + Tt[cn].replace(" at new ", " at ");
                    return M.displayName && cr.includes("<anonymous>") && (cr = cr.replace("<anonymous>", M.displayName)), typeof M == "function" && Xt.set(M, cr), cr;
                  }
                while (cn >= 1 && vn >= 0);
              break;
            }
        }
      } finally {
        vt = !1, rt.current = _t, mt(), Error.prepareStackTrace = Et;
      }
      var ti = M ? M.displayName || M.name : "", ni = ti ? ct(ti) : "";
      return typeof M == "function" && Xt.set(M, ni), ni;
    }
    function kn(M, ue, Ne) {
      return Or(M, !1);
    }
    function ur(M) {
      var ue = M.prototype;
      return !!(ue && ue.isReactComponent);
    }
    function Yn(M, ue, Ne) {
      if (M == null)
        return "";
      if (typeof M == "function")
        return Or(M, ur(M));
      if (typeof M == "string")
        return ct(M);
      switch (M) {
        case x:
          return ct("Suspense");
        case O:
          return ct("SuspenseList");
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case k:
            return kn(M.render);
          case A:
            return Yn(M.type, ue, Ne);
          case F: {
            var qe = M, Et = qe._payload, _t = qe._init;
            try {
              return Yn(_t(Et), ue, Ne);
            } catch {
            }
          }
        }
      return "";
    }
    var Gn = Object.prototype.hasOwnProperty, Xr = {}, _i = Re.ReactDebugCurrentFrame;
    function ha(M) {
      if (M) {
        var ue = M._owner, Ne = Yn(M.type, M._source, ue ? ue.type : null);
        _i.setExtraStackFrame(Ne);
      } else
        _i.setExtraStackFrame(null);
    }
    function tr(M, ue, Ne, qe, Et) {
      {
        var _t = Function.call.bind(Gn);
        for (var Nt in M)
          if (_t(M, Nt)) {
            var Tt = void 0;
            try {
              if (typeof M[Nt] != "function") {
                var Dn = Error((qe || "React class") + ": " + Ne + " type `" + Nt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof M[Nt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Dn.name = "Invariant Violation", Dn;
              }
              Tt = M[Nt](ue, Nt, qe, Ne, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (cn) {
              Tt = cn;
            }
            Tt && !(Tt instanceof Error) && (ha(Et), ge("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", qe || "React class", Ne, Nt, typeof Tt), ha(null)), Tt instanceof Error && !(Tt.message in Xr) && (Xr[Tt.message] = !0, ha(Et), ge("Failed %s type: %s", Ne, Tt.message), ha(null));
          }
      }
    }
    var Tn = Array.isArray;
    function Qn(M) {
      return Tn(M);
    }
    function wr(M) {
      {
        var ue = typeof Symbol == "function" && Symbol.toStringTag, Ne = ue && M[Symbol.toStringTag] || M.constructor.name || "Object";
        return Ne;
      }
    }
    function Ja(M) {
      try {
        return zn(M), !1;
      } catch {
        return !0;
      }
    }
    function zn(M) {
      return "" + M;
    }
    function br(M) {
      if (Ja(M))
        return ge("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wr(M)), zn(M);
    }
    var ma = Re.ReactCurrentOwner, Za = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Si, be;
    function Ze(M) {
      if (Gn.call(M, "ref")) {
        var ue = Object.getOwnPropertyDescriptor(M, "ref").get;
        if (ue && ue.isReactWarning)
          return !1;
      }
      return M.ref !== void 0;
    }
    function Rt(M) {
      if (Gn.call(M, "key")) {
        var ue = Object.getOwnPropertyDescriptor(M, "key").get;
        if (ue && ue.isReactWarning)
          return !1;
      }
      return M.key !== void 0;
    }
    function Gt(M, ue) {
      typeof M.ref == "string" && ma.current;
    }
    function un(M, ue) {
      {
        var Ne = function() {
          Si || (Si = !0, ge("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ue));
        };
        Ne.isReactWarning = !0, Object.defineProperty(M, "key", {
          get: Ne,
          configurable: !0
        });
      }
    }
    function _n(M, ue) {
      {
        var Ne = function() {
          be || (be = !0, ge("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ue));
        };
        Ne.isReactWarning = !0, Object.defineProperty(M, "ref", {
          get: Ne,
          configurable: !0
        });
      }
    }
    var pn = function(M, ue, Ne, qe, Et, _t, Nt) {
      var Tt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: M,
        key: ue,
        ref: Ne,
        props: Nt,
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
        value: qe
      }), Object.defineProperty(Tt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Et
      }), Object.freeze && (Object.freeze(Tt.props), Object.freeze(Tt)), Tt;
    };
    function nr(M, ue, Ne, qe, Et) {
      {
        var _t, Nt = {}, Tt = null, Dn = null;
        Ne !== void 0 && (br(Ne), Tt = "" + Ne), Rt(ue) && (br(ue.key), Tt = "" + ue.key), Ze(ue) && (Dn = ue.ref, Gt(ue, Et));
        for (_t in ue)
          Gn.call(ue, _t) && !Za.hasOwnProperty(_t) && (Nt[_t] = ue[_t]);
        if (M && M.defaultProps) {
          var cn = M.defaultProps;
          for (_t in cn)
            Nt[_t] === void 0 && (Nt[_t] = cn[_t]);
        }
        if (Tt || Dn) {
          var vn = typeof M == "function" ? M.displayName || M.name || "Unknown" : M;
          Tt && un(Nt, vn), Dn && _n(Nt, vn);
        }
        return pn(M, Tt, Dn, Et, qe, ma.current, Nt);
      }
    }
    var sn = Re.ReactCurrentOwner, Jt = Re.ReactDebugCurrentFrame;
    function Zt(M) {
      if (M) {
        var ue = M._owner, Ne = Yn(M.type, M._source, ue ? ue.type : null);
        Jt.setExtraStackFrame(Ne);
      } else
        Jt.setExtraStackFrame(null);
    }
    var ya;
    ya = !1;
    function Rr(M) {
      return typeof M == "object" && M !== null && M.$$typeof === v;
    }
    function Na() {
      {
        if (sn.current) {
          var M = J(sn.current.type);
          if (M)
            return `

Check the render method of \`` + M + "`.";
        }
        return "";
      }
    }
    function Ki(M) {
      return "";
    }
    var fl = {};
    function dl(M) {
      {
        var ue = Na();
        if (!ue) {
          var Ne = typeof M == "string" ? M : M.displayName || M.name;
          Ne && (ue = `

Check the top-level render call using <` + Ne + ">.");
        }
        return ue;
      }
    }
    function bo(M, ue) {
      {
        if (!M._store || M._store.validated || M.key != null)
          return;
        M._store.validated = !0;
        var Ne = dl(ue);
        if (fl[Ne])
          return;
        fl[Ne] = !0;
        var qe = "";
        M && M._owner && M._owner !== sn.current && (qe = " It was passed a child from " + J(M._owner.type) + "."), Zt(M), ge('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Ne, qe), Zt(null);
      }
    }
    function Ro(M, ue) {
      {
        if (typeof M != "object")
          return;
        if (Qn(M))
          for (var Ne = 0; Ne < M.length; Ne++) {
            var qe = M[Ne];
            Rr(qe) && bo(qe, ue);
          }
        else if (Rr(M))
          M._store && (M._store.validated = !0);
        else if (M) {
          var Et = Ce(M);
          if (typeof Et == "function" && Et !== M.entries)
            for (var _t = Et.call(M), Nt; !(Nt = _t.next()).done; )
              Rr(Nt.value) && bo(Nt.value, ue);
        }
      }
    }
    function pl(M) {
      {
        var ue = M.type;
        if (ue == null || typeof ue == "string")
          return;
        var Ne;
        if (typeof ue == "function")
          Ne = ue.propTypes;
        else if (typeof ue == "object" && (ue.$$typeof === k || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ue.$$typeof === A))
          Ne = ue.propTypes;
        else
          return;
        if (Ne) {
          var qe = J(ue);
          tr(Ne, M.props, "prop", qe, M);
        } else if (ue.PropTypes !== void 0 && !ya) {
          ya = !0;
          var Et = J(ue);
          ge("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Et || "Unknown");
        }
        typeof ue.getDefaultProps == "function" && !ue.getDefaultProps.isReactClassApproved && ge("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Lr(M) {
      {
        for (var ue = Object.keys(M.props), Ne = 0; Ne < ue.length; Ne++) {
          var qe = ue[Ne];
          if (qe !== "children" && qe !== "key") {
            Zt(M), ge("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", qe), Zt(null);
            break;
          }
        }
        M.ref !== null && (Zt(M), ge("Invalid attribute `ref` supplied to `React.Fragment`."), Zt(null));
      }
    }
    var Mr = {};
    function sr(M, ue, Ne, qe, Et, _t) {
      {
        var Nt = ot(M);
        if (!Nt) {
          var Tt = "";
          (M === void 0 || typeof M == "object" && M !== null && Object.keys(M).length === 0) && (Tt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Dn = Ki();
          Dn ? Tt += Dn : Tt += Na();
          var cn;
          M === null ? cn = "null" : Qn(M) ? cn = "array" : M !== void 0 && M.$$typeof === v ? (cn = "<" + (J(M.type) || "Unknown") + " />", Tt = " Did you accidentally export a JSX literal instead of a component?") : cn = typeof M, ge("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", cn, Tt);
        }
        var vn = nr(M, ue, Ne, Et, _t);
        if (vn == null)
          return vn;
        if (Nt) {
          var cr = ue.children;
          if (cr !== void 0)
            if (qe)
              if (Qn(cr)) {
                for (var ti = 0; ti < cr.length; ti++)
                  Ro(cr[ti], M);
                Object.freeze && Object.freeze(cr);
              } else
                ge("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ro(cr, M);
        }
        if (Gn.call(ue, "key")) {
          var ni = J(M), xt = Object.keys(ue).filter(function(vl) {
            return vl !== "key";
          }), bt = xt.length > 0 ? "{key: someKey, " + xt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Mr[ni + bt]) {
            var ri = xt.length > 0 ? "{" + xt.join(": ..., ") + ": ...}" : "{}";
            ge(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, bt, ni, ri, ni), Mr[ni + bt] = !0;
          }
        }
        return M === _ ? Lr(vn) : pl(vn), vn;
      }
    }
    function Ci(M, ue, Ne) {
      return sr(M, ue, Ne, !0);
    }
    function ei(M, ue, Ne) {
      return sr(M, ue, Ne, !1);
    }
    var Ei = ei, xi = Ci;
    Sv.Fragment = _, Sv.jsx = Ei, Sv.jsxs = xi;
  })()), Sv;
}
var JC;
function QT() {
  return JC || (JC = 1, process.env.NODE_ENV === "production" ? gy.exports = YT() : gy.exports = GT()), gy.exports;
}
var D = QT(), ze = wv();
const Xa = /* @__PURE__ */ NE(ze), ZC = (c) => Symbol.iterator in c, eE = (c) => (
  // HACK: avoid checking entries type
  "entries" in c
), tE = (c, v) => {
  const p = c instanceof Map ? c : new Map(c.entries()), _ = v instanceof Map ? v : new Map(v.entries());
  if (p.size !== _.size)
    return !1;
  for (const [w, E] of p)
    if (!_.has(w) || !Object.is(E, _.get(w)))
      return !1;
  return !0;
}, KT = (c, v) => {
  const p = c[Symbol.iterator](), _ = v[Symbol.iterator]();
  let w = p.next(), E = _.next();
  for (; !w.done && !E.done; ) {
    if (!Object.is(w.value, E.value))
      return !1;
    w = p.next(), E = _.next();
  }
  return !!w.done && !!E.done;
};
function XT(c, v) {
  return Object.is(c, v) ? !0 : typeof c != "object" || c === null || typeof v != "object" || v === null || Object.getPrototypeOf(c) !== Object.getPrototypeOf(v) ? !1 : ZC(c) && ZC(v) ? eE(c) && eE(v) ? tE(c, v) : KT(c, v) : tE(
    { entries: () => Object.entries(c) },
    { entries: () => Object.entries(v) }
  );
}
function is(c) {
  const v = Xa.useRef(void 0);
  return (p) => {
    const _ = c(p);
    return XT(v.current, _) ? v.current : v.current = _;
  };
}
const JT = "_sidebar_or261_1", ZT = "_sidebarNav_or261_24", e3 = "_sectionWrapper_or261_32", t3 = "_sectionHeader_or261_37", n3 = "_active_or261_48", r3 = "_sidebarItemInHeader_or261_68", a3 = "_plusButton_or261_71", i3 = "_sidebarItem_or261_68", o3 = "_sidebarIcon_or261_138", l3 = "_sidebarLabel_or261_148", u3 = "_plusIcon_or261_173", s3 = "_rotated_or261_178", Rn = {
  sidebar: JT,
  sidebarNav: ZT,
  sectionWrapper: e3,
  sectionHeader: t3,
  active: n3,
  sidebarItemInHeader: r3,
  plusButton: a3,
  sidebarItem: i3,
  sidebarIcon: o3,
  sidebarLabel: l3,
  plusIcon: u3,
  rotated: s3
}, c3 = "_expandedContent_pymls_2", f3 = "_searchWrapper_pymls_17", d3 = "_searchContainer_pymls_23", p3 = "_searchDropdown_pymls_33", v3 = "_dropdownItem_pymls_69", h3 = "_selected_pymls_84", m3 = "_personAvatar_pymls_97", y3 = "_avatarPlaceholder_pymls_111", g3 = "_personInfo_pymls_123", _3 = "_personName_pymls_131", S3 = "_personTitle_pymls_140", C3 = "_dropdownEmpty_pymls_148", E3 = "_searchIcon_pymls_155", x3 = "_searchInput_pymls_160", w3 = "_suggestionsList_pymls_172", b3 = "_suggestionItemWrapper_pymls_191", R3 = "_suggestionItem_pymls_191", k3 = "_statusIcon_pymls_219", T3 = "_moreButton_pymls_222", D3 = "_childItem_pymls_225", N3 = "_loadingState_pymls_299", O3 = "_loadingSpinner_pymls_309", L3 = "_emptyState_pymls_323", M3 = "_errorState_pymls_330", Pt = {
  expandedContent: c3,
  searchWrapper: f3,
  searchContainer: d3,
  searchDropdown: p3,
  dropdownItem: v3,
  selected: h3,
  personAvatar: m3,
  avatarPlaceholder: y3,
  personInfo: g3,
  personName: _3,
  personTitle: S3,
  dropdownEmpty: C3,
  searchIcon: E3,
  searchInput: x3,
  suggestionsList: w3,
  suggestionItemWrapper: b3,
  suggestionItem: R3,
  statusIcon: k3,
  moreButton: T3,
  childItem: D3,
  loadingState: N3,
  loadingSpinner: O3,
  emptyState: L3,
  errorState: M3
}, nE = (c) => {
  let v;
  const p = /* @__PURE__ */ new Set(), _ = (x, O) => {
    const A = typeof x == "function" ? x(v) : x;
    if (!Object.is(A, v)) {
      const F = v;
      v = O ?? (typeof A != "object" || A === null) ? A : Object.assign({}, v, A), p.forEach(($) => $(v, F));
    }
  }, w = () => v, R = { setState: _, getState: w, getInitialState: () => k, subscribe: (x) => (p.add(x), () => p.delete(x)) }, k = v = c(_, w, R);
  return R;
}, j3 = ((c) => c ? nE(c) : nE), A3 = (c) => c;
function U3(c, v = A3) {
  const p = Xa.useSyncExternalStore(
    c.subscribe,
    Xa.useCallback(() => v(c.getState()), [c, v]),
    Xa.useCallback(() => v(c.getInitialState()), [c, v])
  );
  return Xa.useDebugValue(p), p;
}
const rE = (c) => {
  const v = j3(c), p = (_) => U3(v, _);
  return Object.assign(p, v), p;
}, u_ = ((c) => c ? rE(c) : rE), aE = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_API_TOKEN: "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.c-lnqanU55Zj18TnRc0GwokKWVT_5DYTGB7421BMgiVS44AF1lWLtBnCI38BalI_soZPgcG3dQ1epqdFGlyFrtvZi9OJooQk.eruexPDbSnmAwKRH-FatYg.QUiDoNgqYmUhS3o4EtQVhQhnRRaCdLzvImMIwKhgIf6AFAG5w3fDgb99fB9moTtOa5AhNGmgY-FQ7figaeevXl6Fizicpa8gq7-7dU5WA63pZNj2zTJiivtzLfXqq0bYkjhXVD7DspBqaffeSZkFgRoqhemQx9LR-EwJ0JTuRX8.IIPV8yFhxv8U3WtHqNYek54ufxcXBbRt68vKD_EgOuo", VITE_API_URL: "https://xh2o-yths-38lt.n7c.xano.io/api", VITE_DATA_SOURCE: "staging", VITE_LLM_ENDPOINT: "http://localhost:3001", VITE_USER_ID: "3", VITE_USER_NAME: "Dynamo Denis" }, xv = /* @__PURE__ */ new Map(), Sy = (c) => {
  const v = xv.get(c);
  return v ? Object.fromEntries(
    Object.entries(v.stores).map(([p, _]) => [p, _.getState()])
  ) : {};
}, z3 = (c, v, p) => {
  if (c === void 0)
    return {
      type: "untracked",
      connection: v.connect(p)
    };
  const _ = xv.get(p.name);
  if (_)
    return { type: "tracked", store: c, ..._ };
  const w = {
    connection: v.connect(p),
    stores: {}
  };
  return xv.set(p.name, w), { type: "tracked", store: c, ...w };
}, P3 = (c, v) => {
  if (v === void 0) return;
  const p = xv.get(c);
  p && (delete p.stores[v], Object.keys(p.stores).length === 0 && xv.delete(c));
}, I3 = (c) => {
  var v, p;
  if (!c) return;
  const _ = c.split(`
`), w = _.findIndex(
    (h) => h.includes("api.setState")
  );
  if (w < 0) return;
  const E = ((v = _[w + 1]) == null ? void 0 : v.trim()) || "";
  return (p = /.+ (.+) .+/.exec(E)) == null ? void 0 : p[1];
}, F3 = (c, v = {}) => (p, _, w) => {
  const { enabled: E, anonymousActionType: h, store: R, ...k } = v;
  let x;
  try {
    x = (E ?? (aE ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch {
  }
  if (!x)
    return c(p, _, w);
  const { connection: O, ...A } = z3(R, x, k);
  let F = !0;
  w.setState = ((oe, Ce, Re) => {
    const ge = p(oe, Ce);
    if (!F) return ge;
    const le = Re === void 0 ? {
      type: h || I3(new Error().stack) || "anonymous"
    } : typeof Re == "string" ? { type: Re } : Re;
    return R === void 0 ? (O?.send(le, _()), ge) : (O?.send(
      {
        ...le,
        type: `${R}/${le.type}`
      },
      {
        ...Sy(k.name),
        [R]: w.getState()
      }
    ), ge);
  }), w.devtools = {
    cleanup: () => {
      O && typeof O.unsubscribe == "function" && O.unsubscribe(), P3(k.name, R);
    }
  };
  const $ = (...oe) => {
    const Ce = F;
    F = !1, p(...oe), F = Ce;
  }, ie = c(w.setState, _, w);
  if (A.type === "untracked" ? O?.init(ie) : (A.stores[A.store] = w, O?.init(
    Object.fromEntries(
      Object.entries(A.stores).map(([oe, Ce]) => [
        oe,
        oe === A.store ? ie : Ce.getState()
      ])
    )
  )), w.dispatchFromDevtools && typeof w.dispatch == "function") {
    let oe = !1;
    const Ce = w.dispatch;
    w.dispatch = (...Re) => {
      (aE ? "production" : void 0) !== "production" && Re[0].type === "__setState" && !oe && (console.warn(
        '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
      ), oe = !0), Ce(...Re);
    };
  }
  return O.subscribe((oe) => {
    var Ce;
    switch (oe.type) {
      case "ACTION":
        if (typeof oe.payload != "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return K1(
          oe.payload,
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
        switch (oe.payload.type) {
          case "RESET":
            return $(ie), R === void 0 ? O?.init(w.getState()) : O?.init(Sy(k.name));
          case "COMMIT":
            if (R === void 0) {
              O?.init(w.getState());
              return;
            }
            return O?.init(Sy(k.name));
          case "ROLLBACK":
            return K1(oe.state, (Re) => {
              if (R === void 0) {
                $(Re), O?.init(w.getState());
                return;
              }
              $(Re[R]), O?.init(Sy(k.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return K1(oe.state, (Re) => {
              if (R === void 0) {
                $(Re);
                return;
              }
              JSON.stringify(w.getState()) !== JSON.stringify(Re[R]) && $(Re[R]);
            });
          case "IMPORT_STATE": {
            const { nextLiftedState: Re } = oe.payload, ge = (Ce = Re.computedStates.slice(-1)[0]) == null ? void 0 : Ce.state;
            if (!ge) return;
            $(R === void 0 ? ge : ge[R]), O?.send(
              null,
              // FIXME no-any
              Re
            );
            return;
          }
          case "PAUSE_RECORDING":
            return F = !F;
        }
        return;
    }
  }), ie;
}, s_ = F3, K1 = (c, v) => {
  let p;
  try {
    p = JSON.parse(c);
  } catch (_) {
    console.error(
      "[zustand devtools middleware] Could not parse the received json",
      _
    );
  }
  p !== void 0 && v(p);
}, yi = u_()(
  s_(
    (c) => ({
      token: null,
      baseUrl: null,
      dataSource: null,
      user_id: 0,
      copilot_llm_endpoint: "",
      user_name: "",
      setVariables: (v) => c((p) => ({
        token: v.token !== void 0 ? v.token : p.token,
        baseUrl: v.baseUrl !== void 0 ? v.baseUrl : p.baseUrl,
        dataSource: v.dataSource !== void 0 ? v.dataSource : p.dataSource,
        user_id: v.user_id !== void 0 ? v.user_id : p.user_id,
        copilot_llm_endpoint: v.copilot_llm_endpoint !== void 0 ? v.copilot_llm_endpoint : p.copilot_llm_endpoint,
        user_name: v.user_name !== void 0 ? v.user_name : p.user_name
      }))
    }),
    { name: "VariablesStore" }
  )
), by = u_()(
  s_(
    (c, v) => ({
      leverageLoops: [],
      suggestionRequests: [],
      // Separate loading states
      isLoadingPersons: !1,
      isLoadingSuggestionRequests: !1,
      isCreatingSuggestionRequest: !1,
      // Separate error states
      personsError: null,
      suggestionRequestsError: null,
      createSuggestionRequestError: null,
      fetchNetworkPersons: async () => {
        c({ isLoadingPersons: !0, personsError: null });
        try {
          const { token: p, baseUrl: _, dataSource: w } = yi.getState();
          if (!_ || typeof _ == "string" && _.trim() === "")
            throw console.error("VariablesStore state:", yi.getState()), new Error("Base URL is not defined. Please provide it as a prop to CopilotApp.");
          if (!p || typeof p == "string" && p.trim() === "")
            throw console.error("VariablesStore state:", yi.getState()), new Error("Token is not defined. Please provide it as a prop to CopilotApp.");
          const E = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${p}`,
            "x-data-source": w || ""
          }, h = await fetch(`${_}:Et3oQAtI/my-persons`, { headers: E }), R = await h.json();
          if (!h.ok) {
            const k = R?.message || R?.error || "Failed to fetch loops", x = `HTTP ${h.status}: ${k}`;
            throw new Error(x);
          }
          c({ leverageLoops: R, isLoadingPersons: !1 });
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
          const { token: p, baseUrl: _, dataSource: w } = yi.getState();
          if (!_ || typeof _ == "string" && _.trim() === "")
            throw console.error("VariablesStore state:", yi.getState()), new Error("Base URL is not defined. Please provide it as a prop to CopilotApp.");
          if (!p || typeof p == "string" && p.trim() === "")
            throw console.error("VariablesStore state:", yi.getState()), new Error("Token is not defined. Please provide it as a prop to CopilotApp.");
          const E = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${p}`,
            "x-data-source": w || ""
          }, h = await fetch(`${_}:MkA4QsNh/suggestion-requests?copilot_mode=loop`, { headers: E }), R = await h.json();
          if (!h.ok) {
            const k = R?.message || R?.error || "Failed to fetch suggestion requests", x = `HTTP ${h.status}: ${k}`;
            throw new Error(x);
          }
          c({ suggestionRequests: R?.items ?? [], isLoadingSuggestionRequests: !1 });
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
          const { token: _, baseUrl: w, dataSource: E } = yi.getState();
          if (!w || typeof w == "string" && w.trim() === "")
            throw console.error("VariablesStore state:", yi.getState()), new Error("Base URL is not defined. Please provide it as a prop to CopilotApp.");
          if (!_ || typeof _ == "string" && _.trim() === "")
            throw console.error("VariablesStore state:", yi.getState()), new Error("Token is not defined. Please provide it as a prop to CopilotApp.");
          const h = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${_}`,
            "x-data-source": E || ""
          }, R = await fetch(
            `${w}:MkA4QsNh/suggestion-requests`,
            { headers: h, method: "POST", body: JSON.stringify(p) }
          ), k = await R.json();
          if (!R.ok) {
            const x = k?.message || k?.error || "Failed to create suggestion request";
            throw new Error(`HTTP ${R.status}: ${x}`);
          }
          c({ suggestionRequests: [...v().suggestionRequests, k], isCreatingSuggestionRequest: !1 });
        } catch (_) {
          c({
            createSuggestionRequestError: _ instanceof Error ? _.message : "Unknown error",
            isCreatingSuggestionRequest: !1
          });
        }
      },
      setLeverageLoops: (p) => c({ leverageLoops: p }),
      addLeverageLoops: (p) => c((_) => ({ leverageLoops: [..._.leverageLoops, ...p] }))
    }),
    { name: "LeverageLoopsStore" }
  )
), V3 = ({ status: c }) => {
  switch (c) {
    case "draft":
      return /* @__PURE__ */ D.jsx("span", { className: Pt.statusIcon, "data-status": "draft" });
    case "suggestion":
      return /* @__PURE__ */ D.jsx("span", { className: Pt.statusIcon, "data-status": "suggestion" });
    case "processing":
      return /* @__PURE__ */ D.jsx("span", { className: Pt.statusIcon, "data-status": "processing" });
    case "archived":
      return /* @__PURE__ */ D.jsx("span", { className: Pt.statusIcon, "data-status": "archived" });
    default:
      return /* @__PURE__ */ D.jsx("span", { className: Pt.statusIcon, "data-status": "unknown" });
  }
}, H3 = ({
  contentType: c,
  items: v,
  selectedItem: p,
  onItemSelect: _,
  emptyMessage: w = "No items found",
  selectedSuggestionRequest: E,
  onSuggestionRequestSelect: h
}) => {
  const [R, k] = ze.useState(/* @__PURE__ */ new Set()), [x, O] = ze.useState(""), [A, F] = ze.useState(!1), $ = ze.useRef(null), { suggestionRequests: ie, leverageLoops: oe, isLoadingPersons: Ce, isLoadingSuggestionRequests: Re, personsError: ge, suggestionRequestsError: le } = by(
    is((X) => ({
      suggestionRequests: X.suggestionRequests,
      leverageLoops: X.leverageLoops,
      isLoadingPersons: X.isLoadingPersons,
      isLoadingSuggestionRequests: X.isLoadingSuggestionRequests,
      personsError: X.personsError,
      suggestionRequestsError: X.suggestionRequestsError
    }))
  );
  ze.useEffect(() => {
    const X = (V) => {
      $.current && !$.current.contains(V.target) && F(!1);
    };
    return document.addEventListener("mousedown", X), () => document.removeEventListener("mousedown", X);
  }, []);
  const we = (X) => {
    k((V) => {
      const J = new Set(V);
      return J.has(X) ? J.delete(X) : J.add(X), J;
    });
  }, ve = (X, V) => V ? X.filter(
    (J) => J.full_name?.toLowerCase().includes(V.toLowerCase()) || J.master_person.name?.toLowerCase().includes(V.toLowerCase()) || J.master_person.current_title?.toLowerCase().includes(V.toLowerCase()) || J.master_person.bio?.toLowerCase().includes(V.toLowerCase()) || J.master_person.master_company?.company_name?.toLowerCase().includes(V.toLowerCase())
  ) : [], Ke = (X) => {
    const V = X.target.value;
    O(V), F(V.length > 0);
  }, Ve = (X) => {
    _(X), O(""), F(!1);
  }, We = (X) => {
    const V = p?.id === X.id;
    return /* @__PURE__ */ D.jsxs(
      "button",
      {
        className: `${Pt.dropdownItem} ${V ? Pt.selected : ""}`,
        onClick: () => Ve(X),
        children: [
          /* @__PURE__ */ D.jsx("div", { className: Pt.personAvatar, children: X.master_person.avatar ? /* @__PURE__ */ D.jsx("img", { src: X.master_person.avatar, alt: X.full_name }) : /* @__PURE__ */ D.jsx("span", { className: Pt.avatarPlaceholder, children: X.full_name?.charAt(0) || "?" }) }),
          /* @__PURE__ */ D.jsxs("div", { className: Pt.personInfo, children: [
            /* @__PURE__ */ D.jsx("span", { className: Pt.personName, children: X.full_name || X.master_person.name }),
            X.master_person.current_title && /* @__PURE__ */ D.jsxs("span", { className: Pt.personTitle, children: [
              X.master_person.current_title,
              X.master_person.master_company?.company_name && /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
                " at ",
                X.master_person.master_company.company_name
              ] })
            ] })
          ] })
        ]
      },
      X.id
    );
  }, nt = (X, V = !1) => {
    const J = E?.id === X.id;
    return /* @__PURE__ */ D.jsx("div", { className: Pt.suggestionItemWrapper, children: /* @__PURE__ */ D.jsxs(
      "button",
      {
        className: `${Pt.suggestionItem} ${V ? Pt.childItem : ""} ${J ? Pt.selected : ""}`,
        onClick: () => {
          we(X.request_header_title), h(X);
        },
        children: [
          /* @__PURE__ */ D.jsx("div", { className: Pt.personAvatar, children: X.master_person?.avatar ? /* @__PURE__ */ D.jsx("img", { src: X.master_person.avatar, alt: X.master_person.name || "Person" }) : /* @__PURE__ */ D.jsx("span", { className: Pt.avatarPlaceholder, children: X.master_person?.name?.charAt(0) || "?" }) }),
          /* @__PURE__ */ D.jsxs("div", { className: Pt.personInfo, children: [
            /* @__PURE__ */ D.jsx("span", { className: Pt.personName, children: X.master_person?.name || X.request_header_title }),
            (X.master_person?.current_title || X.master_person?.company_name) && /* @__PURE__ */ D.jsxs("span", { className: Pt.personTitle, children: [
              X.master_person?.current_title,
              X.master_person?.current_title && X.master_person?.company_name && " at ",
              X.master_person?.company_name
            ] })
          ] }),
          /* @__PURE__ */ D.jsx(V3, { status: X.status }),
          /* @__PURE__ */ D.jsx(
            "span",
            {
              className: Pt.moreButton,
              role: "button",
              tabIndex: 0,
              onClick: (Ee) => Ee.stopPropagation(),
              onKeyDown: (Ee) => Ee.key === "Enter" && Ee.stopPropagation(),
              children: "⋮"
            }
          )
        ]
      }
    ) }, X.id);
  }, ot = ve(oe.length > 0 ? oe : v, x);
  return /* @__PURE__ */ D.jsxs("div", { className: Pt.expandedContent, children: [
    /* @__PURE__ */ D.jsxs("div", { className: Pt.searchWrapper, ref: $, children: [
      /* @__PURE__ */ D.jsxs("div", { className: Pt.searchContainer, children: [
        /* @__PURE__ */ D.jsx("span", { className: Pt.searchIcon, children: "🔍" }),
        /* @__PURE__ */ D.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search persons...",
            className: Pt.searchInput,
            value: x,
            onChange: Ke,
            onFocus: () => x.length > 0 && F(!0)
          }
        )
      ] }),
      A && /* @__PURE__ */ D.jsx("div", { className: Pt.searchDropdown, children: Ce ? /* @__PURE__ */ D.jsxs("div", { className: Pt.dropdownLoading, children: [
        /* @__PURE__ */ D.jsx("span", { className: Pt.loadingSpinner }),
        "Loading persons..."
      ] }) : ge ? /* @__PURE__ */ D.jsx("div", { className: Pt.dropdownError, children: ge }) : ot.length === 0 ? /* @__PURE__ */ D.jsxs("div", { className: Pt.dropdownEmpty, children: [
        'No persons found for "',
        x,
        '"'
      ] }) : ot.map((X) => We(X)) })
    ] }),
    /* @__PURE__ */ D.jsx("div", { className: Pt.suggestionsList, children: Re ? /* @__PURE__ */ D.jsxs("div", { className: Pt.loadingState, children: [
      /* @__PURE__ */ D.jsx("span", { className: Pt.loadingSpinner }),
      "Loading suggestion requests..."
    ] }) : le ? /* @__PURE__ */ D.jsx("div", { className: Pt.errorState, children: le }) : ie.length === 0 ? /* @__PURE__ */ D.jsx("div", { className: Pt.emptyState, children: w }) : ie.map((X) => nt(X)) })
  ] });
}, sd = (c) => ({
  messages: [],
  threadId: `thread-${c}-${Date.now()}`,
  isLoading: !1
}), $3 = {
  messages: [],
  threadId: "thread-empty",
  isLoading: !1
}, dd = u_()(
  s_((c, v) => ({
    activeContext: "copilot",
    selectedPerson: null,
    selectedSuggestionRequest: null,
    leverageLoopSummaries: [],
    copilotChat: sd("copilot"),
    outcomesChat: sd("outcomes"),
    leverageLoopChats: {},
    setActiveContext: (p) => c({ activeContext: p }),
    setSelectedPerson: (p) => c((_) => ({
      selectedPerson: p,
      selectedSuggestionRequest: p ? null : _.selectedSuggestionRequest,
      activeContext: "leverage-loops"
    })),
    setSelectedSuggestionRequest: (p) => c((_) => ({
      selectedSuggestionRequest: p,
      selectedPerson: p ? null : _.selectedPerson,
      activeContext: "leverage-loops"
    })),
    // Helper to get current leverage loop chat key based on selection
    getCurrentLeverageLoopKey: () => {
      const p = v();
      return p.selectedPerson ? p.selectedPerson.full_name : p.selectedSuggestionRequest ? p.selectedSuggestionRequest.request_panel_title : "leverage-loop-default";
    },
    // Helper to get current leverage loop chat state
    getCurrentLeverageLoopChat: () => {
      const p = v(), _ = p.getCurrentLeverageLoopKey();
      return _ && p.leverageLoopChats[_] ? p.leverageLoopChats[_] : $3;
    },
    addMessage: (p, _, w) => c((E) => {
      if (p === "leverage-loops") {
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
      const h = Cy(p);
      return {
        [h]: {
          ...E[h],
          messages: [...E[h].messages, _]
        }
      };
    }),
    updateMessage: (p, _, w, E, h) => c((R) => {
      if (p === "leverage-loops") {
        const x = h || R.getCurrentLeverageLoopKey();
        if (!x) return R;
        const O = R.leverageLoopChats[x];
        return O ? {
          leverageLoopChats: {
            ...R.leverageLoopChats,
            [x]: {
              ...O,
              messages: O.messages.map(
                (A) => A.id === _ ? { ...A, content: w, isStreaming: E ?? A.isStreaming } : A
              )
            }
          }
        } : R;
      }
      const k = Cy(p);
      return {
        [k]: {
          ...R[k],
          messages: R[k].messages.map(
            (x) => x.id === _ ? { ...x, content: w, isStreaming: E ?? x.isStreaming } : x
          )
        }
      };
    }),
    setIsLoading: (p, _, w) => c((E) => {
      if (p === "leverage-loops") {
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
      const h = Cy(p);
      return {
        [h]: {
          ...E[h],
          isLoading: _
        }
      };
    }),
    clearChat: (p, _) => c((w) => {
      if (p === "leverage-loops") {
        const h = _ || w.getCurrentLeverageLoopKey();
        return h ? {
          leverageLoopChats: {
            ...w.leverageLoopChats,
            [h]: sd(`leverage-loop-${h}`)
          }
        } : w;
      }
      return {
        [Cy(p)]: sd(p)
      };
    }),
    upsertLeverageLoopSummary: (p) => c((_) => _.leverageLoopSummaries.findIndex((E) => E.id === p.id) >= 0 ? {
      leverageLoopSummaries: _.leverageLoopSummaries.map((E) => E.id === p.id ? p : E)
    } : {
      leverageLoopSummaries: [..._.leverageLoopSummaries, p]
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
const B3 = "_composerContainer_1dqbd_1", q3 = "_composer_1dqbd_1", W3 = "_inputWrapper_1dqbd_15", Y3 = "_input_1dqbd_15", G3 = "_actions_1dqbd_40", Q3 = "_leftActions_1dqbd_47", K3 = "_rightActions_1dqbd_48", X3 = "_actionButton_1dqbd_54", J3 = "_sendButton_1dqbd_75", Z3 = "_active_1dqbd_92", Gi = {
  composerContainer: B3,
  composer: q3,
  inputWrapper: W3,
  input: Y3,
  actions: G3,
  leftActions: Q3,
  rightActions: K3,
  actionButton: X3,
  sendButton: J3,
  active: Z3
}, e4 = ({
  onSend: c,
  disabled: v = !1,
  placeholder: p = "Ask anything..",
  initialValue: _ = ""
}) => {
  const [w, E] = ze.useState(_), h = ze.useRef(null);
  ze.useEffect(() => {
    _ && (E(_), setTimeout(() => h.current?.focus(), 0));
  }, [_]), ze.useEffect(() => {
    const x = h.current;
    x && (x.style.height = "auto", x.style.height = `${Math.min(x.scrollHeight, 200)}px`);
  }, [w]);
  const R = (x) => {
    x?.preventDefault(), w.trim() && !v && (c(w.trim()), E(""));
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
        placeholder: p,
        disabled: v,
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
            className: `${Gi.sendButton} ${w.trim() && !v ? Gi.active : ""}`,
            disabled: !w.trim() || v,
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
}, t4 = "_messageContainer_1t8ij_1", n4 = "_user_1t8ij_6", r4 = "_assistant_1t8ij_9", a4 = "_userMessage_1t8ij_23", i4 = "_assistantMessage_1t8ij_38", o4 = "_textContent_1t8ij_45", l4 = "_streamingIndicator_1t8ij_50", iu = {
  messageContainer: t4,
  user: n4,
  assistant: r4,
  userMessage: a4,
  assistantMessage: i4,
  textContent: o4,
  streamingIndicator: l4
};
const u4 = (c) => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), s4 = (c) => c.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (v, p, _) => _ ? _.toUpperCase() : p.toLowerCase()
), iE = (c) => {
  const v = s4(c);
  return v.charAt(0).toUpperCase() + v.slice(1);
}, OE = (...c) => c.filter((v, p, _) => !!v && v.trim() !== "" && _.indexOf(v) === p).join(" ").trim(), c4 = (c) => {
  for (const v in c)
    if (v.startsWith("aria-") || v === "role" || v === "title")
      return !0;
};
var f4 = {
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
const d4 = ze.forwardRef(
  ({
    color: c = "currentColor",
    size: v = 24,
    strokeWidth: p = 2,
    absoluteStrokeWidth: _,
    className: w = "",
    children: E,
    iconNode: h,
    ...R
  }, k) => ze.createElement(
    "svg",
    {
      ref: k,
      ...f4,
      width: v,
      height: v,
      stroke: c,
      strokeWidth: _ ? Number(p) * 24 / Number(v) : p,
      className: OE("lucide", w),
      ...!E && !c4(R) && { "aria-hidden": "true" },
      ...R
    },
    [
      ...h.map(([x, O]) => ze.createElement(x, O)),
      ...Array.isArray(E) ? E : [E]
    ]
  )
);
const Se = (c, v) => {
  const p = ze.forwardRef(
    ({ className: _, ...w }, E) => ze.createElement(d4, {
      ref: E,
      iconNode: v,
      className: OE(
        `lucide-${u4(iE(c))}`,
        `lucide-${c}`,
        _
      ),
      ...w
    })
  );
  return p.displayName = iE(c), p;
};
const p4 = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
], v4 = Se("activity", p4);
const h4 = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], m4 = Se("arrow-down", h4);
const y4 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], g4 = Se("arrow-left", y4);
const _4 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], S4 = Se("arrow-right", _4);
const C4 = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], E4 = Se("arrow-up", C4);
const x4 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
], w4 = Se("award", x4);
const b4 = [
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
], R4 = Se("bell-off", b4);
const k4 = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], T4 = Se("bell", k4);
const D4 = [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }]
], N4 = Se("bookmark", D4);
const O4 = [
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
], L4 = Se("boxes", O4);
const M4 = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
], j4 = Se("briefcase", M4);
const A4 = [
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
], U4 = Se("building", A4);
const z4 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], P4 = Se("calendar", z4);
const I4 = [
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
], F4 = Se("car", I4);
const V4 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }]
], H4 = Se("chart-line", V4);
const $4 = [
  ["path", { d: "M5 21v-6", key: "1hz6c0" }],
  ["path", { d: "M12 21V9", key: "uvy0l4" }],
  ["path", { d: "M19 21V3", key: "11j9sm" }]
], B4 = Se("chart-no-axes-column-increasing", $4);
const q4 = [
  [
    "path",
    {
      d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",
      key: "pzmjnu"
    }
  ],
  ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83", key: "k2fpak" }]
], W4 = Se("chart-pie", q4);
const Y4 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], G4 = Se("check", Y4);
const Q4 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], LE = Se("chevron-down", Q4);
const K4 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], X4 = Se("chevron-left", K4);
const J4 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Z4 = Se("chevron-right", J4);
const e5 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], t5 = Se("chevron-up", e5);
const n5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], r5 = Se("circle-alert", n5);
const a5 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], i5 = Se("circle-check-big", a5);
const o5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], l5 = Se("circle-question-mark", o5);
const u5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], s5 = Se("circle-x", u5);
const c5 = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], f5 = Se("clock", c5);
const d5 = [
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
], p5 = Se("coffee", d5);
const v5 = [
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], h5 = Se("compass", v5);
const m5 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], y5 = Se("copy", m5);
const g5 = [
  [
    "path",
    {
      d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
      key: "1vdc57"
    }
  ],
  ["path", { d: "M5 21h14", key: "11awu3" }]
], _5 = Se("crown", g5);
const S5 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], C5 = Se("download", S5);
const E5 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], x5 = Se("external-link", E5);
const w5 = [
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
], b5 = Se("eye-off", w5);
const R5 = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], k5 = Se("eye", R5);
const T5 = [
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
], D5 = Se("file-text", T5);
const N5 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]
], O5 = Se("file", N5);
const L5 = [
  [
    "path",
    {
      d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
      key: "1jaruq"
    }
  ]
], M5 = Se("flag", L5);
const j5 = [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
], A5 = Se("folder-open", j5);
const U5 = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
], z5 = Se("folder", U5);
const P5 = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
], I5 = Se("funnel", P5);
const F5 = [
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
], V5 = Se("gift", F5);
const H5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], $5 = Se("globe", H5);
const B5 = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
], q5 = Se("heart", B5);
const W5 = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], Y5 = Se("house", W5);
const G5 = [
  ["path", { d: "M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8", key: "18ogeb" }]
], Q5 = Se("infinity", G5);
const K5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], X5 = Se("info", K5);
const J5 = [
  ["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }],
  ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
  ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }]
], Z5 = Se("key", J5);
const eD = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
], tD = Se("lightbulb", eD);
const nD = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], rD = Se("link", nD);
const aD = [
  ["path", { d: "M13 5h8", key: "a7qcls" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 19h8", key: "c3s6r1" }],
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }]
], iD = Se("list-checks", aD);
const oD = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
], lD = Se("lock-open", oD);
const uD = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], sD = Se("lock", uD);
const cD = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], fD = Se("mail", cD);
const dD = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], pD = Se("map-pin", dD);
const vD = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
], hD = Se("message-circle", vD);
const mD = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
], yD = Se("message-square", mD);
const gD = [["path", { d: "M5 12h14", key: "1ays0h" }]], _D = Se("minus", gD);
const SD = [
  ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]
], CD = Se("navigation", SD);
const ED = [
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
      key: "1miecu"
    }
  ]
], xD = Se("paperclip", ED);
const wD = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], bD = Se("pause", wD);
const RD = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], kD = Se("phone", RD);
const TD = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], DD = Se("play", TD);
const ND = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], OD = Se("plus", ND);
const LD = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], MD = Se("refresh-cw", LD);
const jD = [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }]
], AD = Se("repeat", jD);
const UD = [
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
], zD = Se("rocket", UD);
const PD = [
  ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
], ID = Se("rotate-cw", PD);
const FD = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], VD = Se("search", FD);
const HD = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], $D = Se("send", HD);
const BD = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], qD = Se("settings", BD);
const WD = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
], YD = Se("share-2", WD);
const GD = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], QD = Se("shield-check", GD);
const KD = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
], XD = Se("shield", KD);
const JD = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
], ZD = Se("square-pen", JD);
const eN = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], tN = Se("star", eN);
const nN = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], rN = Se("target", nN);
const aN = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], iN = Se("timer", aN);
const oN = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], lN = Se("trash-2", oN);
const uN = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
], sN = Se("trending-down", uN);
const cN = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
], fN = Se("trending-up", cN);
const dN = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], pN = Se("triangle-alert", dN);
const vN = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], hN = Se("upload", vN);
const mN = [
  ["path", { d: "m16 11 2 2 4-4", key: "9rsbq5" }],
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
], yN = Se("user-check", mN);
const gN = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
], _N = Se("user-plus", gN);
const SN = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], CN = Se("user", SN);
const EN = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
], xN = Se("users", EN);
const wN = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
], bN = Se("workflow", wN);
const RN = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], kN = Se("x", RN);
const TN = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
], DN = Se("zap", TN), NN = "_card_rp8wf_1", ON = "_sources_rp8wf_11", LN = "_sourcesHeader_rp8wf_17", MN = "_sourcesList_rp8wf_26", jN = "_sourceItem_rp8wf_32", AN = "_sourceIndex_rp8wf_45", UN = "_sourceTitle_rp8wf_51", zN = "_sourceName_rp8wf_55", PN = "_header_rp8wf_60", IN = "_headerTitle_rp8wf_60", FN = "_headerSubtitle_rp8wf_65", VN = "_textContent_rp8wf_70", HN = "_button_rp8wf_93", $N = "_primary_rp8wf_106", BN = "_secondary_rp8wf_117", qN = "_ghost_rp8wf_125", WN = "_buttonGroup_rp8wf_137", YN = "_horizontal_rp8wf_141", GN = "_vertical_rp8wf_144", QN = "_form_rp8wf_148", KN = "_formField_rp8wf_154", XN = "_fieldLabel_rp8wf_159", JN = "_fieldHint_rp8wf_164", ZN = "_input_rp8wf_169", eO = "_textarea_rp8wf_170", tO = "_select_rp8wf_171", nO = "_error_rp8wf_193", rO = "_checkboxWrapper_rp8wf_213", aO = "_radioWrapper_rp8wf_214", iO = "_radioGroup_rp8wf_234", oO = "_checkboxGroup_rp8wf_240", lO = "_list_rp8wf_246", uO = "_listHeading_rp8wf_246", sO = "_listItems_rp8wf_254", cO = "_listItem_rp8wf_254", fO = "_listItemIcon_rp8wf_274", dO = "_listItemContent_rp8wf_284", pO = "_listItemTitle_rp8wf_287", vO = "_listItemSubtitle_rp8wf_293", hO = "_listItemAction_rp8wf_298", mO = "_actionButton_rp8wf_298", yO = "_stats_rp8wf_317", gO = "_statsNumber_rp8wf_320", _O = "_statsLabel_rp8wf_326", SO = "_profileTile_rp8wf_332", CO = "_profileIcon_rp8wf_337", EO = "_profileContent_rp8wf_347", xO = "_profileTitle_rp8wf_347", wO = "_profileLabel_rp8wf_353", bO = "_miniCard_rp8wf_359", RO = "_miniCardBlock_rp8wf_369", kO = "_steps_rp8wf_375", TO = "_stepsItem_rp8wf_392", DO = "_stepsTitle_rp8wf_407", NO = "_stepsDetails_rp8wf_413", OO = "_sectionBlock_rp8wf_418", LO = "_section_rp8wf_418", MO = "_expanded_rp8wf_429", jO = "_sectionTrigger_rp8wf_429", AO = "_triggerIcon_rp8wf_450", UO = "_rotated_rp8wf_453", zO = "_sectionContent_rp8wf_457", PO = "_icon_rp8wf_464", IO = "_streamingContainer_rp8wf_470", FO = "_streamingIndicator_rp8wf_475", VO = "_pulse_rp8wf_1", HO = "_skeletonLoader_rp8wf_487", $O = "_skeletonShimmer_rp8wf_502", BO = "_shimmer_rp8wf_1", Ae = {
  card: NN,
  sources: ON,
  sourcesHeader: LN,
  sourcesList: MN,
  sourceItem: jN,
  sourceIndex: AN,
  sourceTitle: UN,
  sourceName: zN,
  header: PN,
  headerTitle: IN,
  headerSubtitle: FN,
  textContent: VN,
  button: HN,
  primary: $N,
  secondary: BN,
  ghost: qN,
  buttonGroup: WN,
  horizontal: YN,
  vertical: GN,
  form: QN,
  formField: KN,
  fieldLabel: XN,
  fieldHint: JN,
  input: ZN,
  textarea: eO,
  select: tO,
  error: nO,
  checkboxWrapper: rO,
  radioWrapper: aO,
  radioGroup: iO,
  checkboxGroup: oO,
  list: lO,
  listHeading: uO,
  listItems: sO,
  listItem: cO,
  listItemIcon: fO,
  listItemContent: dO,
  listItemTitle: pO,
  listItemSubtitle: vO,
  listItemAction: hO,
  actionButton: mO,
  stats: yO,
  statsNumber: gO,
  statsLabel: _O,
  profileTile: SO,
  profileIcon: CO,
  profileContent: EO,
  profileTitle: xO,
  profileLabel: wO,
  miniCard: bO,
  miniCardBlock: RO,
  steps: kO,
  stepsItem: TO,
  stepsTitle: DO,
  stepsDetails: NO,
  sectionBlock: OO,
  section: LO,
  expanded: MO,
  sectionTrigger: jO,
  triggerIcon: AO,
  rotated: UO,
  sectionContent: zO,
  icon: PO,
  streamingContainer: IO,
  streamingIndicator: FO,
  pulse: VO,
  skeletonLoader: HO,
  skeletonShimmer: $O,
  shimmer: BO
}, qO = {
  // Arrows & Navigation
  target: rN,
  "arrow-right": S4,
  "arrow-left": g4,
  "arrow-up": E4,
  "arrow-down": m4,
  "chevron-down": LE,
  "chevron-right": Z4,
  "chevron-left": X4,
  "chevron-up": t5,
  repeat: AD,
  "refresh-cw": MD,
  "rotate-cw": ID,
  navigation: CD,
  compass: h5,
  // Multimedia
  play: DD,
  pause: bD,
  // Text & Lists
  "list-checks": iD,
  // Development
  workflow: bN,
  // Time
  timer: iN,
  clock: f5,
  calendar: P4,
  // Shopping & Business
  boxes: L4,
  briefcase: j4,
  building: U4,
  // Math & Charts
  infinity: Q5,
  plus: OD,
  minus: _D,
  "line-chart": H4,
  "bar-chart": B4,
  "pie-chart": W4,
  "trending-up": fN,
  "trending-down": sN,
  activity: v4,
  // Actions
  check: G4,
  x: kN,
  edit: ZD,
  trash: lN,
  copy: y5,
  share: YD,
  "external-link": x5,
  search: VD,
  filter: I5,
  settings: qD,
  download: C5,
  upload: hN,
  send: $D,
  zap: DN,
  // Users
  user: CN,
  users: xN,
  "user-plus": _N,
  "user-check": yN,
  // Communication
  mail: fD,
  phone: kD,
  "message-circle": hD,
  "message-square": yD,
  bell: T4,
  "bell-off": R4,
  // Status & Favorites
  star: tN,
  heart: q5,
  bookmark: N4,
  flag: M5,
  award: w4,
  gift: V5,
  crown: _5,
  // Info & Alerts
  "help-circle": l5,
  info: X5,
  "alert-circle": r5,
  "alert-triangle": pN,
  "check-circle": i5,
  "x-circle": s5,
  // View
  eye: k5,
  "eye-off": b5,
  // Security
  lock: sD,
  unlock: lD,
  key: Z5,
  shield: XD,
  "shield-check": QD,
  // Links & Files
  link: rD,
  paperclip: xD,
  "file-text": D5,
  file: O5,
  folder: z5,
  "folder-open": A5,
  // Location
  home: Y5,
  "map-pin": pD,
  globe: $5,
  // Transportation
  car: F4,
  // Ideas & Energy
  lightbulb: tD,
  rocket: zD,
  coffee: p5
}, ME = ({ name: c, size: v = 18 }) => {
  const p = qO[c.toLowerCase()];
  return p ? /* @__PURE__ */ D.jsx("span", { className: Ae.icon, children: /* @__PURE__ */ D.jsx(p, { size: v }) }) : (console.warn(`Icon "${c}" not found in registry`), /* @__PURE__ */ D.jsx("span", { className: Ae.icon, style: { width: v, height: v }, children: "•" }));
}, WO = ({ title: c, subtitle: v }) => /* @__PURE__ */ D.jsxs("div", { className: Ae.header, children: [
  /* @__PURE__ */ D.jsx("h3", { className: Ae.headerTitle, children: c }),
  v && /* @__PURE__ */ D.jsx("p", { className: Ae.headerSubtitle, children: v })
] });
function YO(c) {
  return c.split(/\n\n+/).map((p, _) => {
    let w = p;
    const E = /\*\*(.*?)\*\*/g, h = p.split(E);
    h.length > 1 && (w = h.map((k, x) => x % 2 === 1 ? /* @__PURE__ */ D.jsx("strong", { children: k }, x) : k));
    const R = /`(.*?)`/g;
    return typeof w == "string" && w.match(R) && (w = w.split(R).map((x, O) => O % 2 === 1 ? /* @__PURE__ */ D.jsx("code", { children: x }, O) : x)), /* @__PURE__ */ D.jsx("p", { children: w }, _);
  });
}
const GO = ({ textMarkdown: c }) => /* @__PURE__ */ D.jsx("div", { className: Ae.textContent, children: YO(c) }), QO = ({
  children: c,
  name: v,
  variant: p = "primary",
  disabled: _ = !1,
  action: w,
  onAction: E
}) => {
  const h = () => {
    w && E && E(w);
  }, R = ["submit", "save", "confirm", "set", "create", "send", "apply"], k = (v || "").toLowerCase(), x = (typeof c == "string" ? c : "").toLowerCase(), O = w?.type === "submit_form" || R.some((A) => k.includes(A)) || R.some((A) => x.includes(A));
  return /* @__PURE__ */ D.jsx(
    "button",
    {
      className: `${Ae.button} ${Ae[p]}`,
      disabled: _,
      onClick: h,
      type: O ? "submit" : "button",
      children: c
    }
  );
}, KO = ({
  variant: c = "horizontal",
  children: v,
  renderComponent: p
}) => /* @__PURE__ */ D.jsx("div", { className: `${Ae.buttonGroup} ${Ae[c]}`, children: v.map((_, w) => /* @__PURE__ */ D.jsx(Xa.Fragment, { children: p(_) }, w)) }), XO = ({ children: c, sources: v, renderComponent: p }) => !c || !Array.isArray(c) ? /* @__PURE__ */ D.jsx("div", { className: Ae.card }) : /* @__PURE__ */ D.jsxs("div", { className: Ae.card, children: [
  c.map((_, w) => /* @__PURE__ */ D.jsx(Xa.Fragment, { children: p(_) }, w)),
  v && v.length > 0 && /* @__PURE__ */ D.jsxs("div", { className: Ae.sources, children: [
    /* @__PURE__ */ D.jsx("div", { className: Ae.sourcesHeader, children: "Sources" }),
    /* @__PURE__ */ D.jsx("div", { className: Ae.sourcesList, children: v.map((_, w) => /* @__PURE__ */ D.jsxs(
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
] }), JO = ({ heading: c, items: v, onAction: p }) => /* @__PURE__ */ D.jsxs("div", { className: Ae.list, children: [
  c && /* @__PURE__ */ D.jsx("h4", { className: Ae.listHeading, children: c }),
  /* @__PURE__ */ D.jsx("div", { className: Ae.listItems, children: v.map((_, w) => /* @__PURE__ */ D.jsxs("div", { className: Ae.listItem, children: [
    _.iconName && /* @__PURE__ */ D.jsx("div", { className: Ae.listItemIcon, children: /* @__PURE__ */ D.jsx(ME, { name: _.iconName, size: 18 }) }),
    /* @__PURE__ */ D.jsxs("div", { className: Ae.listItemContent, children: [
      /* @__PURE__ */ D.jsx("p", { className: Ae.listItemTitle, children: _.title }),
      _.subtitle && /* @__PURE__ */ D.jsx("p", { className: Ae.listItemSubtitle, children: _.subtitle })
    ] }),
    _.itemAction && /* @__PURE__ */ D.jsx("div", { className: Ae.listItemAction, children: /* @__PURE__ */ D.jsx(
      "button",
      {
        className: Ae.actionButton,
        onClick: () => p?.(_.itemAction.action),
        children: _.itemAction.label
      }
    ) })
  ] }, w)) })
] }), ZO = ({ number: c, label: v }) => /* @__PURE__ */ D.jsxs("div", { className: Ae.stats, children: [
  /* @__PURE__ */ D.jsx("p", { className: Ae.statsNumber, children: c }),
  /* @__PURE__ */ D.jsx("p", { className: Ae.statsLabel, children: v })
] }), eL = ({
  title: c,
  label: v,
  child: p,
  renderComponent: _
}) => /* @__PURE__ */ D.jsxs("div", { className: Ae.profileTile, children: [
  p && /* @__PURE__ */ D.jsx("div", { className: Ae.profileIcon, children: _(p) }),
  /* @__PURE__ */ D.jsxs("div", { className: Ae.profileContent, children: [
    /* @__PURE__ */ D.jsx("p", { className: Ae.profileTitle, children: c }),
    v && /* @__PURE__ */ D.jsx("p", { className: Ae.profileLabel, children: v })
  ] })
] }), tL = ({
  lhs: c,
  rhs: v,
  renderComponent: p
}) => /* @__PURE__ */ D.jsxs("div", { className: Ae.miniCard, children: [
  /* @__PURE__ */ D.jsx("div", { className: Ae.miniCardLhs, children: p(c) }),
  v && /* @__PURE__ */ D.jsx("div", { className: Ae.miniCardRhs, children: p(v) })
] }), nL = ({
  children: c,
  renderComponent: v
}) => /* @__PURE__ */ D.jsx("div", { className: Ae.miniCardBlock, children: c.map((p, _) => /* @__PURE__ */ D.jsx(Xa.Fragment, { children: v(p) }, _)) }), rL = ({
  title: c,
  details: v,
  renderComponent: p
}) => /* @__PURE__ */ D.jsxs("div", { className: Ae.stepsItem, children: [
  /* @__PURE__ */ D.jsx("h4", { className: Ae.stepsTitle, children: c }),
  v && /* @__PURE__ */ D.jsx("div", { className: Ae.stepsDetails, children: p(v) })
] }), aL = ({
  children: c,
  renderComponent: v
}) => /* @__PURE__ */ D.jsx("div", { className: Ae.steps, children: c.map((p, _) => /* @__PURE__ */ D.jsx(Xa.Fragment, { children: v(p) }, _)) }), iL = ({
  isFoldable: c = !0,
  sections: v,
  renderComponent: p
}) => {
  const [_, w] = ze.useState(
    // If not foldable, expand all sections by default
    new Set(c ? [] : v.map((h) => h.value))
  ), E = (h) => {
    c && w((R) => {
      const k = new Set(R);
      return k.has(h) ? k.delete(h) : k.add(h), k;
    });
  };
  return /* @__PURE__ */ D.jsx("div", { className: Ae.sectionBlock, children: v.map((h) => {
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
          (R || !c) && /* @__PURE__ */ D.jsx("div", { className: Ae.sectionContent, children: h.content.map((k, x) => /* @__PURE__ */ D.jsx(Xa.Fragment, { children: p(k) }, x)) })
        ]
      },
      h.value
    );
  }) });
}, oL = ({
  name: c,
  placeholder: v,
  value: p = "",
  type: _ = "text",
  rules: w,
  onChange: E
}) => {
  const [h, R] = ze.useState(p), [k, x] = ze.useState(null), O = (A) => {
    const F = A.target.value;
    R(F), w?.required && !F ? x("This field is required") : w?.minLength && F.length < w.minLength ? x(`Minimum ${w.minLength} characters required`) : x(null), E?.(c, F);
  };
  return /* @__PURE__ */ D.jsx(
    "input",
    {
      type: _,
      name: c,
      placeholder: v,
      value: h,
      onChange: O,
      className: `${Ae.input} ${k ? Ae.error : ""}`
    }
  );
}, lL = ({
  name: c,
  placeholder: v,
  value: p = "",
  rows: _ = 3,
  rules: w,
  onChange: E
}) => {
  const [h, R] = ze.useState(p), [k, x] = ze.useState(null), O = (A) => {
    const F = A.target.value;
    R(F), w?.required && !F ? x("This field is required") : w?.minLength && F.length < w.minLength ? x(`Minimum ${w.minLength} characters required`) : x(null), E?.(c, F);
  };
  return /* @__PURE__ */ D.jsx(
    "textarea",
    {
      name: c,
      placeholder: v,
      value: h,
      rows: _,
      onChange: O,
      className: `${Ae.textarea} ${k ? Ae.error : ""}`
    }
  );
}, uL = ({
  name: c,
  placeholder: v,
  value: p = "",
  options: _ = [],
  onChange: w
}) => {
  const [E, h] = ze.useState(p), R = (x) => {
    const O = x.target.value;
    h(O), w?.(c, O);
  }, k = _ && Array.isArray(_) ? _ : [];
  return /* @__PURE__ */ D.jsxs(
    "select",
    {
      name: c,
      value: E,
      onChange: R,
      className: Ae.select,
      children: [
        v && /* @__PURE__ */ D.jsx("option", { value: "", children: v }),
        k.map((x) => /* @__PURE__ */ D.jsx("option", { value: x.value, children: x.label }, x.value))
      ]
    }
  );
}, sL = ({
  name: c,
  label: v,
  checked: p = !1,
  onChange: _
}) => {
  const [w, E] = ze.useState(p), h = (R) => {
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
    /* @__PURE__ */ D.jsx("label", { htmlFor: c, children: v })
  ] });
}, cL = ({
  name: c,
  options: v = [],
  value: p = "",
  onChange: _
}) => {
  const [w, E] = ze.useState(p), h = (R) => {
    const k = R.target.value;
    E(k), _?.(c, k);
  };
  return !v || !Array.isArray(v) || v.length === 0 ? /* @__PURE__ */ D.jsx("div", { className: Ae.radioGroup, children: "No options available" }) : /* @__PURE__ */ D.jsx("div", { className: Ae.radioGroup, children: v.map((R) => /* @__PURE__ */ D.jsxs("div", { className: Ae.radioWrapper, children: [
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
}, fL = ({
  name: c,
  options: v = [],
  values: p = [],
  onChange: _
}) => {
  const [w, E] = ze.useState(p), h = (R, k) => {
    const x = k ? [...w, R] : w.filter((O) => O !== R);
    E(x), _?.(c, x);
  };
  return !v || !Array.isArray(v) || v.length === 0 ? /* @__PURE__ */ D.jsx("div", { className: Ae.checkboxGroup, children: "No options available" }) : /* @__PURE__ */ D.jsx("div", { className: Ae.checkboxGroup, children: v.map((R) => /* @__PURE__ */ D.jsxs("div", { className: Ae.checkboxWrapper, children: [
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
}, dL = ({
  name: c,
  placeholder: v,
  value: p = "",
  min: _,
  max: w,
  onChange: E
}) => {
  const [h, R] = ze.useState(p), k = (x) => {
    const O = x.target.value;
    R(O), E?.(c, O);
  };
  return /* @__PURE__ */ D.jsx(
    "input",
    {
      type: "date",
      name: c,
      placeholder: v,
      value: h,
      min: _,
      max: w,
      onChange: k,
      className: Ae.input
    }
  );
}, pL = ({
  label: c,
  hint: v,
  children: p,
  renderComponent: _
}) => /* @__PURE__ */ D.jsxs("div", { className: Ae.formField, children: [
  c && /* @__PURE__ */ D.jsx("label", { className: Ae.fieldLabel, children: c }),
  _(p),
  v && /* @__PURE__ */ D.jsx("span", { className: Ae.fieldHint, children: v })
] }), vL = ({
  name: c,
  children: v,
  buttons: p,
  onAction: _,
  renderComponent: w
}) => {
  const [E, h] = ze.useState({}), R = ze.useCallback((x, O) => {
    h((A) => ({ ...A, [x]: O }));
  }, []), k = (x) => {
    x.preventDefault(), _ ? _({ type: "submit_form", props: { formName: c, formData: E } }, E) : console.warn("Form onAction is not defined");
  };
  return /* @__PURE__ */ D.jsxs("form", { className: Ae.form, onSubmit: k, name: c, children: [
    v.map((x, O) => /* @__PURE__ */ D.jsx(
      pL,
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
      O
    )),
    p && w(p)
  ] });
}, hL = ({
  name: c = "radio",
  value: v,
  label: p,
  checked: _ = !1,
  onChange: w
}) => {
  const [E, h] = ze.useState(_), R = (k) => {
    const x = k.target.checked;
    h(x), x && w && w(c, v);
  };
  return /* @__PURE__ */ D.jsxs("div", { className: Ae.radioWrapper, children: [
    /* @__PURE__ */ D.jsx(
      "input",
      {
        type: "radio",
        id: `${c}-${v}`,
        name: c,
        value: v,
        checked: E,
        onChange: R
      }
    ),
    /* @__PURE__ */ D.jsx("label", { htmlFor: `${c}-${v}`, children: p })
  ] });
}, mL = ({
  name: c = "checkbox",
  value: v,
  label: p,
  checked: _ = !1,
  onChange: w
}) => {
  const [E, h] = ze.useState(_), R = (k) => {
    const x = k.target.checked;
    h(x), w && w(c, v, x);
  };
  return /* @__PURE__ */ D.jsxs("div", { className: Ae.checkboxWrapper, children: [
    /* @__PURE__ */ D.jsx(
      "input",
      {
        type: "checkbox",
        id: `${c}-${v}`,
        name: c,
        value: v,
        checked: E,
        onChange: R
      }
    ),
    /* @__PURE__ */ D.jsx("label", { htmlFor: `${c}-${v}`, children: p })
  ] });
}, jE = ({
  component: c,
  onAction: v
}) => {
  const p = ze.useCallback((_) => {
    if (!_ || !_.component)
      return console.warn("Invalid component definition:", _), null;
    const { component: w, props: E } = _, h = { ...E, onAction: v };
    switch (w) {
      // Basic Components
      case "Icon":
        return /* @__PURE__ */ D.jsx(ME, { ...h });
      case "Header":
        return /* @__PURE__ */ D.jsx(WO, { ...h });
      case "TextContent":
        return /* @__PURE__ */ D.jsx(GO, { ...h });
      // Button Components
      case "Button":
        return /* @__PURE__ */ D.jsx(QO, { ...h });
      case "ButtonGroup":
        return /* @__PURE__ */ D.jsx(
          KO,
          {
            ...h,
            renderComponent: p
          }
        );
      // Layout Components
      case "Card":
        return /* @__PURE__ */ D.jsx(
          XO,
          {
            ...h,
            renderComponent: p
          }
        );
      // List Component
      case "List":
        return /* @__PURE__ */ D.jsx(JO, { ...h });
      // Stats Component
      case "Stats":
        return /* @__PURE__ */ D.jsx(ZO, { ...h });
      // ProfileTile Component
      case "ProfileTile":
        return /* @__PURE__ */ D.jsx(
          eL,
          {
            ...h,
            renderComponent: p
          }
        );
      // MiniCard Components
      case "MiniCard":
        return /* @__PURE__ */ D.jsx(
          tL,
          {
            ...h,
            renderComponent: p
          }
        );
      case "MiniCardBlock":
        return /* @__PURE__ */ D.jsx(
          nL,
          {
            ...h,
            renderComponent: p
          }
        );
      // Steps Components
      case "Steps":
        return /* @__PURE__ */ D.jsx(
          aL,
          {
            ...h,
            renderComponent: p
          }
        );
      case "StepsItem":
        return /* @__PURE__ */ D.jsx(
          rL,
          {
            ...h,
            renderComponent: p
          }
        );
      // Section Components
      case "SectionBlock":
        return /* @__PURE__ */ D.jsx(
          iL,
          {
            ...h,
            renderComponent: p
          }
        );
      // Form Components
      case "Form":
        return /* @__PURE__ */ D.jsx(
          vL,
          {
            ...h,
            renderComponent: p
          }
        );
      case "Input":
        return /* @__PURE__ */ D.jsx(oL, { ...h });
      case "TextArea":
        return /* @__PURE__ */ D.jsx(lL, { ...h });
      case "Select":
        return /* @__PURE__ */ D.jsx(uL, { ...h });
      case "Checkbox":
        return /* @__PURE__ */ D.jsx(sL, { ...h });
      case "RadioGroup":
        return /* @__PURE__ */ D.jsx(cL, { ...h });
      case "CheckBoxGroup":
        return /* @__PURE__ */ D.jsx(fL, { ...h });
      case "DatePicker":
        return /* @__PURE__ */ D.jsx(dL, { ...h });
      case "RadioItem":
        return /* @__PURE__ */ D.jsx(hL, { ...h });
      case "CheckBoxItem":
        return /* @__PURE__ */ D.jsx(mL, { ...h });
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
  }, [v]);
  return /* @__PURE__ */ D.jsx(D.Fragment, { children: p(c) });
};
function AE(c) {
  try {
    const v = c.indexOf('<content thesys="true">');
    if (v === -1)
      return oE(c);
    const p = c.substring(v + 23), _ = p.indexOf("</content>");
    let w = _ !== -1 ? p.substring(0, _).trim() : p.trim();
    w = w.replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39;/g, "'").replace(/&apos;/g, "'");
    try {
      const E = JSON.parse(w);
      if (E.component)
        return E;
    } catch {
      return yL(w);
    }
    return oE(c);
  } catch (v) {
    return console.error("parseStreamingGenUI - Error:", v), null;
  }
}
function yL(c) {
  let v = null, p = -1, _ = -1;
  const w = /"component"\s*:\s*"([^"]+)"/g;
  let E;
  for (; (E = w.exec(c)) !== null; ) {
    const h = c.substring(0, E.index), R = (h.match(/\{/g) || []).length - (h.match(/\}/g) || []).length;
    R >= 1 && R > _ && (v = E, p = E.index, _ = R);
  }
  if (v && v[1]) {
    const h = v[1], k = c.substring(p + v[0].length).match(/"props"\s*:\s*\{([\s\S]*?)(\}|$)/);
    let x = {};
    if (k && k[1]) {
      const O = k[1], A = /"([^"]+)"\s*:\s*"([^"]*)"|"([^"]+)"\s*:\s*(\d+|true|false|null)/g;
      let F;
      for (; (F = A.exec(O)) !== null; ) {
        const $ = F[1] || F[3], ie = F[2] || F[4];
        $ && (x[$] = ie === "true" ? !0 : ie === "false" ? !1 : ie === "null" ? null : ie);
      }
      O.includes('"children"') && O.includes("[") && (x.children = []);
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
      const v = JSON.parse(c);
      if (v.component)
        return v;
    } catch {
      const p = c.match(/"component"\s*:\s*"([^"]+)"/);
      return p && p[1] ? {
        component: {
          component: p[1],
          props: {}
        },
        error: null
      } : null;
    }
  return null;
}
const gL = ({
  content: c,
  isStreaming: v,
  onAction: p
}) => {
  const [_, w] = ze.useState(null);
  return ze.useEffect(() => {
    if (!c) {
      w(null);
      return;
    }
    const E = AE(c);
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
    v && /* @__PURE__ */ D.jsx("div", { className: Ae.streamingIndicator, children: /* @__PURE__ */ D.jsx("span", { children: "Building interface..." }) }),
    /* @__PURE__ */ D.jsx(jE, { component: _, onAction: p })
  ] }) : v ? /* @__PURE__ */ D.jsx("div", { className: Ae.streamingContainer, children: /* @__PURE__ */ D.jsxs("div", { className: Ae.skeletonLoader, children: [
    /* @__PURE__ */ D.jsx("div", { className: Ae.skeletonShimmer }),
    /* @__PURE__ */ D.jsx("span", { children: "Generating interface..." })
  ] }) }) : null;
};
function _L(c) {
  const v = {
    "&quot;": '"',
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&nbsp;": " "
  };
  return c.replace(/&(?:quot|amp|lt|gt|apos|#39|nbsp);/g, (p) => v[p] || p);
}
function SL(c) {
  try {
    const v = c.match(/<content\s+thesys="true">([\s\S]*?)<\/content>/);
    if (v && v[1]) {
      const p = _L(v[1].trim());
      return JSON.parse(p);
    }
    if (c.trim().startsWith("{")) {
      const p = JSON.parse(c);
      if (p.component)
        return p;
    }
    return null;
  } catch (v) {
    return console.error("Failed to parse GenUI response:", v), null;
  }
}
function CL(c) {
  return !!(c.includes('<content thesys="true">') || c.trim().startsWith("{") && c.includes('"component"'));
}
function EL(c) {
  const v = c.indexOf('<content thesys="true">');
  return v > 0 ? c.substring(0, v).trim() : "";
}
const xL = ({
  message: c,
  onAction: v,
  onUpdateMessage: p
}) => {
  const _ = c.role === "user", w = c.role === "assistant", E = ze.useMemo(() => c.content ? CL(c.content) : !1, [c.content]), h = ze.useMemo(() => {
    if (!c.content) return null;
    if (E) {
      if (c.isStreaming) {
        const O = AE(c.content);
        return O?.component ? O : null;
      }
      return SL(c.content);
    }
    return null;
  }, [c.content, c.isStreaming, E]), R = ze.useMemo(() => c.content ? EL(c.content) : "", [c.content]), k = ze.useCallback((O, A) => {
    if (!v) return;
    const F = {
      type: O.type,
      params: {
        ...O.props,
        formData: A
      }
    };
    console.log("event", F), console.log("formData", A), v(F);
  }, [v]), x = () => E ? /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
    R && /* @__PURE__ */ D.jsx("div", { className: iu.textContent, children: R }),
    /* @__PURE__ */ D.jsx(
      gL,
      {
        content: c.content,
        isStreaming: c.isStreaming || !1,
        onAction: k
      }
    )
  ] }) : h?.component ? /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
    R && /* @__PURE__ */ D.jsx("div", { className: iu.textContent, children: R }),
    /* @__PURE__ */ D.jsx(
      jE,
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
}, wL = "_overlay_271nu_1", bL = "_modal_271nu_21", RL = "_header_271nu_42", kL = "_closeButton_271nu_55", TL = "_selectedInfo_271nu_77", DL = "_inputGroup_271nu_99", NL = "_actions_271nu_130", OL = "_cancelBtn_271nu_136", LL = "_confirmBtn_271nu_137", ou = {
  overlay: wL,
  modal: bL,
  header: RL,
  closeButton: kL,
  selectedInfo: TL,
  inputGroup: DL,
  actions: NL,
  cancelBtn: OL,
  confirmBtn: LL
}, ML = ({
  isOpen: c,
  onClose: v,
  humanFriendlyMessage: p,
  llmFriendlyMessage: _,
  onConfirm: w
}) => {
  const [E, h] = ze.useState(_);
  if (ze.useEffect(() => {
    h(_);
  }, [_]), ze.useEffect(() => {
    const k = (x) => {
      x.key === "Escape" && v();
    };
    if (c)
      return window.addEventListener("keydown", k), () => window.removeEventListener("keydown", k);
  }, [c, v]), !c) return null;
  const R = (k) => {
    k.preventDefault(), E.trim() && w(E.trim());
  };
  return /* @__PURE__ */ D.jsx("div", { className: ou.overlay, onClick: v, children: /* @__PURE__ */ D.jsxs("div", { className: ou.modal, onClick: (k) => k.stopPropagation(), children: [
    /* @__PURE__ */ D.jsxs("div", { className: ou.header, children: [
      /* @__PURE__ */ D.jsx("h2", { children: "Edit Your Response" }),
      /* @__PURE__ */ D.jsx("button", { className: ou.closeButton, onClick: v, children: /* @__PURE__ */ D.jsx(
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
        /* @__PURE__ */ D.jsx("p", { children: p })
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
        /* @__PURE__ */ D.jsx("button", { type: "button", className: ou.cancelBtn, onClick: v, children: "Cancel" }),
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
}, X1 = (c) => `<content thesys="true">${JSON.stringify({ component: c, error: null })}</content>`, lE = () => `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, jL = (c) => {
  const { sendMessage: v, setPendingAction: p, setIsModalOpen: _, context: w, addMessage: E, updateMessage: h } = c;
  return (R) => {
    switch (console.log("Action received:", R), R.type) {
      case "continue_conversation":
        if (R.params) {
          const { humanFriendlyMessage: k, llmFriendlyMessage: x, prompt: O } = R.params;
          O ? v(O) : k && x && (p({
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
          const k = R.params.formData, x = R.params.formName || "form", O = Object.entries(k).filter(([F, $]) => $ !== void 0 && $ !== "").map(([F, $]) => `${F.replace(/_/g, " ")}: ${$}`).join(`
`), A = `Form submitted: ${x}

${O}`;
          console.log("Sending form data to LLM:", A), v(A);
        }
        break;
      case "add_assistant_message":
        if (R.params?.content || R.params?.componentData) {
          const k = lE(), x = R.params.chatKey;
          let O;
          R.params.componentData ? O = `<content thesys="true">${JSON.stringify(R.params.componentData)}</content>` : O = R.params.content, E(w, {
            id: k,
            role: "assistant",
            content: O,
            timestamp: /* @__PURE__ */ new Date(),
            isStreaming: !1
          }, x);
        }
        break;
      case "create_suggestion_request":
        if (R.params) {
          const { personName: k, personTitle: x, companyName: O, masterPersonId: A, chatKey: F } = R.params, { user_id: $ } = yi.getState(), ie = {
            request_panel_title: `Suggestion Request for ${k}`,
            request_header_title: `People to introduce to ${k}`,
            request_context: `Find people from my network to introduce to ${k}, who is ${x} at ${O}`,
            status: "suggestion",
            user_id: $,
            copilot_mode: "loop",
            master_person_id: A
          }, oe = lE();
          E(w, {
            id: oe,
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
          }, F), by.getState().createSuggestionRequest(ie).then(() => {
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
            if (h(w, oe, Re, !1, F), !Ce) {
              const { setSelectedPerson: ge, setSelectedSuggestionRequest: le } = dd.getState();
              ge(null), le(null);
            }
          });
        }
        break;
      default:
        console.log("Unhandled action type:", R.type);
    }
  };
}, AL = {
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
}, UL = () => Object.entries(AL).filter(([c, v]) => v.allowed).map(([c]) => c), zL = () => `You can use these GenUI components: ${UL().join(", ")}. Do not use any other components. Keep the interface simple and avoid unnecessary complexity.`, PL = "_chatContainer_fwjlu_1", IL = "_header_fwjlu_9", FL = "_subtitle_fwjlu_24", VL = "_messagesContainer_fwjlu_31", HL = "_emptyState_fwjlu_50", $L = "_leverageLoopSummary_fwjlu_74", BL = "_summaryCard_fwjlu_79", qL = "_summaryCardHeader_fwjlu_90", WL = "_summaryCardTitle_fwjlu_97", YL = "_summaryCardInput_fwjlu_117", GL = "_summaryTextarea_fwjlu_122", QL = "_summaryCardButton_fwjlu_145", KL = "_playIcon_fwjlu_173", gi = {
  chatContainer: PL,
  header: IL,
  subtitle: FL,
  messagesContainer: VL,
  emptyState: HL,
  leverageLoopSummary: $L,
  summaryCard: BL,
  summaryCardHeader: qL,
  summaryCardTitle: WL,
  summaryCardInput: YL,
  summaryTextarea: GL,
  summaryCardButton: QL,
  playIcon: KL
}, XL = ({
  onSendMessage: c,
  isLoading: v
}) => {
  const [p, _] = ze.useState(""), { selectedPerson: w, selectedSuggestionRequest: E, leverageLoopSummaries: h, upsertLeverageLoopSummary: R } = dd(
    is((A) => ({
      selectedPerson: A.selectedPerson,
      selectedSuggestionRequest: A.selectedSuggestionRequest,
      leverageLoopSummaries: A.leverageLoopSummaries,
      upsertLeverageLoopSummary: A.upsertLeverageLoopSummary
    }))
  );
  ze.useEffect(() => {
    let A = null;
    if (w ? A = w.full_name : E && (A = E.request_header_title), A) {
      const F = h.find(($) => $.id === A);
      _(F?.content || "");
    } else
      _("");
  }, [w, E, h]);
  const k = () => w ? `Leverage loop summary for ${w.full_name}` : E ? E.request_header_title : "Leverage Loops", x = () => {
    p.trim() && (c(p.trim()), _(""));
  }, O = (A) => {
    _(A.target.value), w && R({ id: w.full_name, content: A.target.value, timestamp: /* @__PURE__ */ new Date() }), E && R({ id: E.request_header_title, content: A.target.value, timestamp: /* @__PURE__ */ new Date() });
  };
  return /* @__PURE__ */ D.jsx("div", { className: gi.leverageLoopSummary, children: /* @__PURE__ */ D.jsxs("div", { className: gi.summaryCard, children: [
    /* @__PURE__ */ D.jsxs("div", { className: gi.summaryCardHeader, children: [
      /* @__PURE__ */ D.jsx("p", { className: gi.summaryCardTitle, children: k() }),
      /* @__PURE__ */ D.jsx(
        "button",
        {
          className: gi.summaryCardButton,
          onClick: x,
          disabled: !p.trim() || v,
          children: /* @__PURE__ */ D.jsx("span", { className: gi.playIcon, children: "▶" })
        }
      )
    ] }),
    /* @__PURE__ */ D.jsx("div", { className: gi.summaryCardInput, children: /* @__PURE__ */ D.jsx(
      "textarea",
      {
        className: gi.summaryTextarea,
        placeholder: "Summary of what I can help you with...",
        value: p,
        onChange: (A) => O(A),
        rows: 2
      }
    ) })
  ] }) });
}, Ry = () => `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, c_ = ({
  context: c,
  title: v,
  subtitle: p,
  systemPrompt: _
}) => {
  const {
    chatState: w,
    addMessage: E,
    updateMessage: h,
    setIsLoading: R,
    upsertLeverageLoopSummary: k,
    selectedPerson: x,
    selectedSuggestionRequest: O
  } = dd(
    is((X) => c === "leverage-loops" ? {
      chatState: X.getCurrentLeverageLoopChat(),
      addMessage: X.addMessage,
      updateMessage: X.updateMessage,
      setIsLoading: X.setIsLoading,
      upsertLeverageLoopSummary: X.upsertLeverageLoopSummary,
      selectedPerson: X.selectedPerson,
      selectedSuggestionRequest: X.selectedSuggestionRequest
    } : {
      chatState: X[c === "copilot" ? "copilotChat" : "outcomesChat"],
      addMessage: X.addMessage,
      updateMessage: X.updateMessage,
      setIsLoading: X.setIsLoading,
      upsertLeverageLoopSummary: X.upsertLeverageLoopSummary,
      selectedPerson: X.selectedPerson,
      selectedSuggestionRequest: X.selectedSuggestionRequest
    })
  );
  function A(X) {
    const V = X.match(/\[SUMMARY\](.*?)\[\/SUMMARY\]/s);
    let J = null;
    if (V && V[1]) {
      J = V[1].trim();
      let Ee = X.replace(/\[SUMMARY\].*$/s, "</content>").trim();
      return J && c === "leverage-loops" && F(J), V || (Ee = X), {
        cleanContent: Ee
      };
    }
    return {
      cleanContent: X
    };
  }
  const F = ze.useCallback((X) => {
    if (c !== "leverage-loops") return;
    let V = null;
    x ? V = x.full_name : O && (V = O.request_header_title), V && X && k({
      id: V,
      content: X,
      timestamp: /* @__PURE__ */ new Date()
    });
  }, [c, x, O, k]), { messages: $, threadId: ie, isLoading: oe } = w, Ce = c === "leverage-loops" && $.length > 1, [Re, ge] = Xa.useState(!1), [le, we] = Xa.useState(null), ve = ze.useRef(null);
  ze.useEffect(() => {
    ve.current?.scrollIntoView({ behavior: "smooth" });
  }, [$]);
  const Ke = ze.useCallback(
    async (X) => {
      if (!X.trim() || oe) return;
      const V = {
        id: Ry(),
        role: "user",
        content: X.trim(),
        timestamp: /* @__PURE__ */ new Date()
      };
      E(c, V), R(c, !0);
      const J = Ry();
      E(c, {
        id: J,
        role: "assistant",
        content: "",
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !0
      });
      try {
        const He = zL(), xe = `${_ || "You are a helpful AI assistant."}

${He}

User: ${X.trim()}`, { copilot_llm_endpoint: re } = yi.getState(), he = await fetch(`${re || "http://localhost:3001"}/api/chat`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            prompt: {
              role: "user",
              content: xe,
              id: V.id
            },
            threadId: ie,
            responseId: J,
            context: c
            // Pass context to backend if needed
          })
        });
        if (!he.ok)
          throw new Error(`API error: ${he.status}`);
        const I = he.body?.getReader(), ee = new TextDecoder();
        let Xe = "";
        if (I)
          for (; ; ) {
            const { done: mt, value: rt } = await I.read();
            if (mt) break;
            const Le = ee.decode(rt, { stream: !0 });
            Xe += Le;
            const { cleanContent: ct } = A(Xe);
            h(c, J, ct || Xe, !0);
          }
        const { cleanContent: Pe } = A(Xe);
        h(c, J, Pe, !1);
      } catch (He) {
        console.error("Failed to send message:", He), h(
          c,
          J,
          "Sorry, there was an error processing your request.",
          !1
        );
      } finally {
        R(c, !1);
      }
    },
    [oe, ie, c, _, E, h, R, A, F]
  ), Ve = ze.useCallback(
    (X) => {
      jL({
        sendMessage: Ke,
        setPendingAction: we,
        setIsModalOpen: ge,
        context: c,
        addMessage: E,
        updateMessage: h
      })(X);
    },
    [Ke, we, ge, c, E, h]
  ), We = ze.useCallback(
    (X, V) => {
      h(c, X, V);
    },
    [c, h]
  ), nt = ze.useCallback(
    (X) => {
      ge(!1), we(null), Ke(X);
    },
    [Ke]
  ), ot = ze.useCallback(() => {
    ge(!1), we(null);
  }, []);
  return /* @__PURE__ */ D.jsxs("div", { className: gi.chatContainer, children: [
    /* @__PURE__ */ D.jsxs("div", { className: gi.header, children: [
      /* @__PURE__ */ D.jsx("h1", { children: v }),
      p && /* @__PURE__ */ D.jsx("p", { className: gi.subtitle, children: p })
    ] }),
    Ce && /* @__PURE__ */ D.jsx(
      XL,
      {
        onSendMessage: Ke,
        isLoading: oe
      }
    ),
    /* @__PURE__ */ D.jsxs("div", { className: gi.messagesContainer, children: [
      $.length === 0 ? /* @__PURE__ */ D.jsx("div", { className: gi.emptyState, children: /* @__PURE__ */ D.jsx("p", { children: "Start a conversation" }) }) : $.map((X) => /* @__PURE__ */ D.jsx(
        xL,
        {
          message: X,
          onAction: Ve,
          onUpdateMessage: (V) => We(X.id, V)
        },
        X.id
      )),
      /* @__PURE__ */ D.jsx("div", { ref: ve })
    ] }),
    /* @__PURE__ */ D.jsx(e4, { onSend: Ke, disabled: oe }),
    le && /* @__PURE__ */ D.jsx(
      ML,
      {
        isOpen: Re,
        onClose: ot,
        humanFriendlyMessage: le.humanFriendlyMessage,
        llmFriendlyMessage: le.llmFriendlyMessage,
        onConfirm: nt
      }
    )
  ] });
}, JL = (c) => ({
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
}), ZL = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.15816%2015.5394C4.42185%2015.8099%203.64142%2015.9909%202.82808%2016.0678C2.75965%2016.0739%202.69009%2016.0784%202.62129%2016.081C2.05326%2016.1048%201.47513%2015.9215%201.00732%2015.5213C0.154714%2014.7923%20-0.052828%2013.5813%200.443029%2012.6226C0.448638%2012.6116%200.453874%2012.6011%200.459857%2012.5898L3.41481%206.77869C2.08654%209.73401%202.83855%2013.3286%205.16339%2015.5372L5.15816%2015.5391V15.5394Z'%20fill='url(%23paint0_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8419%204.46013C15.5782%204.18972%2016.3587%204.00906%2017.172%203.93175C17.2401%203.92571%2017.31%203.92119%2017.3788%203.91855C17.9468%203.89479%2018.525%204.07808%2018.9928%204.47823C19.845%205.20726%2020.0529%206.41828%2019.5571%207.37699C19.5515%207.3883%2019.5458%207.39886%2019.5402%207.4098L16.5853%2013.2205C17.9132%2010.2648%2017.1615%206.67059%2014.8367%204.46202L14.8419%204.46013Z'%20fill='url(%23paint1_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10%202.61975C11.8545%202.61975%2013.547%203.31559%2014.8367%204.46211C12.464%205.51888%2010.8283%207.5913%2010.1904%2010.0563C9.55242%2012.5214%207.60302%2014.6787%205.16338%2015.5378C3.66459%2014.2306%202.68222%2012.2057%202.68222%2010.0001C2.68259%205.92394%205.95877%202.61975%2010%202.61975Z'%20fill='url(%23paint2_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8367%204.46167C16.358%205.81412%2017.3179%207.79376%2017.3179%209.99932C17.3179%2014.0751%2014.0417%2017.3793%2010.0001%2017.3793C8.14604%2017.3793%206.45317%2016.6835%205.16342%2015.537C7.59222%2014.5651%209.36213%2012.4644%2010.0001%209.99932C10.638%207.53429%2012.4079%205.4332%2014.8367%204.46167Z'%20fill='url(%23paint3_linear_23492_1459)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_23492_1459'%20x1='1.41231'%20y1='10.771'%20x2='6.31346'%20y2='13.2684'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFAE00'%20stop-opacity='0.12'/%3e%3cstop%20offset='1'%20stop-color='%23FFAE00'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_23492_1459'%20x1='13.6991'%20y1='6.69473'%20x2='18.6306'%20y2='9.20746'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2313F562'/%3e%3cstop%20offset='1'%20stop-color='%2313F562'%20stop-opacity='0.09'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_23492_1459'%20x1='4.21878'%20y1='14.805'%20x2='10.8001'%20y2='2.68539'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FD5743'/%3e%3cstop%20offset='0.21'%20stop-color='%23D13D58'/%3e%3cstop%20offset='0.4'%20stop-color='%23AB2868'/%3e%3cstop%20offset='0.6'%20stop-color='%238C1B6F'/%3e%3cstop%20offset='1'%20stop-color='%23280553'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_23492_1459'%20x1='9.19834'%20y1='17.5257'%20x2='15.8611'%20y2='5.25654'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23130F56'/%3e%3cstop%20offset='0.41'%20stop-color='%23105D8E'/%3e%3cstop%20offset='0.6'%20stop-color='%23107995'/%3e%3cstop%20offset='0.79'%20stop-color='%2311A39E'/%3e%3cstop%20offset='1'%20stop-color='%2313EBAF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", eM = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%205.83329C9.17592%205.83329%208.37034%206.07766%207.68514%206.5355C6.99993%206.99334%206.46588%207.64408%206.15051%208.40544C5.83515%209.1668%205.75264%2010.0046%205.91341%2010.8128C6.07418%2011.6211%206.47102%2012.3635%207.05373%2012.9462C7.63645%2013.529%208.37888%2013.9258%209.18714%2014.0866C9.99539%2014.2473%2010.8332%2014.1648%2011.5945%2013.8495C12.3559%2013.5341%2013.0066%2013%2013.4645%2012.3148C13.9223%2011.6296%2014.1667%2010.824%2014.1667%209.99995M10.8333%202.54579C9.28839%202.37246%207.72776%202.68352%206.36733%203.43593C5.0069%204.18834%203.9139%205.34492%203.23953%206.74567C2.56516%208.14643%202.34274%209.72213%202.60305%2011.2548C2.86335%2012.7875%203.59352%2014.2014%204.69253%2015.301C5.79155%2016.4006%207.2051%2017.1314%208.73766%2017.3925C10.2702%2017.6536%2011.846%2017.432%2013.2471%2016.7583C14.6482%2016.0846%2015.8053%2014.9922%2016.5584%2013.6322C17.3115%2012.2721%2017.6234%2010.7117%2017.4508%209.16662M12.5%207.49995V4.99995L15%202.49995V4.99995H17.5L15%207.49995H12.5ZM12.5%207.49995L10%209.99995M9.16668%209.99995C9.16668%2010.221%209.25447%2010.4329%209.41076%2010.5892C9.56704%2010.7455%209.779%2010.8333%2010%2010.8333C10.221%2010.8333%2010.433%2010.7455%2010.5893%2010.5892C10.7455%2010.4329%2010.8333%2010.221%2010.8333%209.99995C10.8333%209.77894%2010.7455%209.56698%2010.5893%209.4107C10.433%209.25442%2010.221%209.16662%2010%209.16662C9.779%209.16662%209.56704%209.25442%209.41076%209.4107C9.25447%209.56698%209.16668%209.77894%209.16668%209.99995Z'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", tM = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.5533%205.43171C14.1448%204.53303%2013.4793%203.77539%2012.6409%203.2543C11.8024%202.73321%2010.8285%202.47198%209.84179%202.50353C8.8551%202.53509%207.89984%202.85802%207.09639%203.43162C6.29294%204.00523%205.67727%204.80383%205.32698%205.72679C4.97669%206.64974%204.90745%207.65573%205.12798%208.61798C5.34852%209.58022%205.84897%2010.4556%206.56625%2011.1339C7.28353%2011.8122%208.18555%2012.263%209.15861%2012.4294C10.1317%2012.5958%2011.1322%2012.4705%2012.0342%2012.0692'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.5683%2014.5533C15.467%2014.1448%2016.2246%2013.4793%2016.7457%2012.6409C17.2668%2011.8024%2017.5281%2010.8284%2017.4965%209.84176C17.4649%208.85507%2017.142%207.89981%2016.5684%207.09636C15.9948%206.29291%2015.1962%205.67724%2014.2732%205.32695C13.3503%204.97666%2012.3443%204.90742%2011.3821%205.12795C10.4198%205.34849%209.54439%205.84894%208.86612%206.56622C8.18784%207.2835%207.73708%208.18552%207.57064%209.15858C7.40419%2010.1316%207.52952%2011.1322%207.93083%2012.0341'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.45001%2014.5684C5.8585%2015.467%206.52387%2016.2247%207.36227%2016.7459C8.20067%2017.267%209.17458%2017.5283%2010.1613%2017.4969C11.1479%2017.4654%2012.1032%2017.1425%2012.9067%2016.569C13.7102%2015.9955%2014.3259%2015.197%2014.6763%2014.2741C15.0267%2013.3512%2015.0961%2012.3452%2014.8756%2011.383C14.6552%2010.4207%2014.1549%209.54526%2013.4377%208.8669C12.7205%208.18855%2011.8186%207.73767%2010.8456%207.57109C9.87256%207.40451%208.872%207.52969%207.97001%207.93085'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.43168%205.44995C4.53299%205.85844%203.77532%206.52381%203.25417%207.36221C2.73302%208.20061%202.47171%209.17452%202.50318%2010.1612C2.53465%2011.1479%202.85749%2012.1031%203.431%2012.9066C4.00451%2013.7101%204.80304%2014.3259%205.72594%2014.6763C6.64884%2015.0266%207.6548%2015.096%208.61706%2014.8756C9.57931%2014.6552%2010.4548%2014.1548%2011.1331%2013.4376C11.8115%2012.7205%2012.2624%2011.8185%2012.4289%2010.8455C12.5955%209.8725%2012.4703%208.87194%2012.0692%207.96995'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", nM = ({
  activeSection: c,
  onSectionChange: v,
  onSectionChangeConfiguration: p
}) => {
  const { leverageLoops: _, fetchNetworkPersons: w, fetchSuggestionRequests: E } = by(
    is((le) => ({
      leverageLoops: le.leverageLoops,
      fetchNetworkPersons: le.fetchNetworkPersons,
      fetchSuggestionRequests: le.fetchSuggestionRequests
    }))
  ), {
    selectedPerson: h,
    selectedSuggestionRequest: R,
    setSelectedPerson: k,
    setSelectedSuggestionRequest: x,
    addMessage: O,
    leverageLoopChats: A
  } = dd(
    is((le) => ({
      selectedPerson: le.selectedPerson,
      selectedSuggestionRequest: le.selectedSuggestionRequest,
      setSelectedPerson: le.setSelectedPerson,
      setSelectedSuggestionRequest: le.setSelectedSuggestionRequest,
      addMessage: le.addMessage,
      leverageLoopChats: le.leverageLoopChats
    }))
  ), { token: F, baseUrl: $ } = yi(
    is((le) => ({
      token: le.token,
      baseUrl: le.baseUrl
    }))
  ), [ie, oe] = ze.useState(/* @__PURE__ */ new Set()), Ce = (le) => {
    oe((we) => {
      const ve = new Set(we);
      return ve.has(le) ? ve.delete(le) : ve.add(le), ve;
    });
  }, Re = (le) => {
    k(le), v("leverage-loops");
    const we = le.full_name;
    if (!(A[we]?.messages?.[0]?.role === "assistant")) {
      const Ve = "leverage-loops", We = Ry(), nt = `<content thesys="true">${JSON.stringify(JL(le))}</content>`;
      O(Ve, {
        id: We,
        role: "assistant",
        content: nt,
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !1
      }, we);
    }
  }, ge = (le) => {
    x(le), v("leverage-loops");
  };
  return ze.useEffect(() => {
    F && $ && (w(), E());
  }, [F, $, w, E]), /* @__PURE__ */ D.jsx("div", { className: Rn.sidebar, children: /* @__PURE__ */ D.jsxs("nav", { className: Rn.sidebarNav, children: [
    /* @__PURE__ */ D.jsxs(
      "button",
      {
        className: `${Rn.sidebarItem} ${c === "copilot" ? Rn.active : ""}`,
        onClick: () => v("copilot"),
        "aria-label": "Orbiter.io Copilot",
        children: [
          /* @__PURE__ */ D.jsx("span", { className: Rn.sidebarIcon, children: /* @__PURE__ */ D.jsx("img", { src: ZL, alt: "Orbiter", width: 18, height: 18 }) }),
          /* @__PURE__ */ D.jsx("span", { className: Rn.sidebarLabel, children: "Orbiter.io Copilot" })
        ]
      }
    ),
    /* @__PURE__ */ D.jsx("div", { className: Rn.sectionWrapper, children: /* @__PURE__ */ D.jsxs("div", { className: `${Rn.sectionHeader} ${c === "outcomes" ? Rn.active : ""}`, children: [
      /* @__PURE__ */ D.jsxs(
        "button",
        {
          className: Rn.sidebarItemInHeader,
          onClick: () => v("outcomes"),
          "aria-label": "Outcomes",
          children: [
            /* @__PURE__ */ D.jsx("span", { className: Rn.sidebarIcon, children: /* @__PURE__ */ D.jsx("img", { src: eM, alt: "Outcomes", width: 18, height: 18 }) }),
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
          children: /* @__PURE__ */ D.jsx("span", { className: `${Rn.plusIcon} ${ie.has("outcomes") ? Rn.rotated : ""}`, children: "+" })
        }
      )
    ] }) }),
    /* @__PURE__ */ D.jsxs("div", { className: Rn.sectionWrapper, children: [
      /* @__PURE__ */ D.jsxs("div", { className: `${Rn.sectionHeader} ${c === "leverage-loops" ? Rn.active : ""}`, children: [
        /* @__PURE__ */ D.jsxs(
          "button",
          {
            className: Rn.sidebarItemInHeader,
            onClick: () => p("leverage-loops"),
            "aria-label": "Leverage Loops",
            children: [
              /* @__PURE__ */ D.jsx("span", { className: Rn.sidebarIcon, children: /* @__PURE__ */ D.jsx("img", { src: tM, alt: "Leverage Loops", width: 18, height: 18 }) }),
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
            children: /* @__PURE__ */ D.jsx("span", { className: `${Rn.plusIcon} ${ie.has("leverage-loops") ? Rn.rotated : ""}`, children: "+" })
          }
        )
      ] }),
      ie.has("leverage-loops") && /* @__PURE__ */ D.jsx(
        H3,
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
), rM = () => /* @__PURE__ */ D.jsx(
  c_,
  {
    context: "outcomes",
    title: "Outcomes",
    systemPrompt: "You are helping the user track and achieve their professional outcomes and goals."
  }
), aM = () => {
  const {
    selectedPerson: c,
    selectedSuggestionRequest: v,
    leverageLoopChats: p,
    addMessage: _
  } = dd(
    is((h) => ({
      selectedPerson: h.selectedPerson,
      selectedSuggestionRequest: h.selectedSuggestionRequest,
      leverageLoopChats: h.leverageLoopChats,
      addMessage: h.addMessage
    }))
  );
  ze.useEffect(() => {
    if (!c && !v) {
      const h = "leverage-loop-default";
      if (!(p[h]?.messages?.[0]?.role === "assistant")) {
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
  }, [c, v, p, _]);
  const w = () => c ? `You are helping with a leverage loop for ${c.full_name} from ${c.master_person?.master_company?.company_name || "Unknown Company"}. Their title is ${c.master_person?.current_title || "Unknown"}.` : v ? `You are helping with the leverage loop suggestion request: "${v.request_header_title}". Context: ${v.request_context}` : "You are helping the user manage their leverage loops and professional network.", E = () => {
    if (c)
      return `${c.full_name} • ${c.master_person?.master_company?.company_name || ""}`;
    if (v)
      return v.request_header_title;
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
}, iM = "_app_4u5b6_5", oM = "_mainContent_4u5b6_15", sE = {
  app: iM,
  mainContent: oM
}, lM = ({
  agentName: c = "Copilot",
  token: v,
  dataSource: p,
  baseUrl: _,
  user_id: w,
  copilot_llm_endpoint: E,
  user_name: h
}) => {
  const [R, k] = ze.useState("copilot"), x = yi((ie) => ie.setVariables), { setSelectedPerson: O, setSelectedSuggestionRequest: A } = dd(
    is((ie) => ({
      setSelectedPerson: ie.setSelectedPerson,
      setSelectedSuggestionRequest: ie.setSelectedSuggestionRequest
    }))
  );
  ze.useLayoutEffect(() => {
    x({ token: v, baseUrl: _, dataSource: p, user_id: w, copilot_llm_endpoint: E, user_name: h });
  }, [v, _, p, w, E, h]);
  const F = (ie) => {
    k(ie), ie === "leverage-loops" && (O(null), A(null));
  }, $ = () => {
    switch (R) {
      case "copilot":
        return /* @__PURE__ */ D.jsx(uE, { agentName: c });
      case "outcomes":
        return /* @__PURE__ */ D.jsx(rM, {});
      case "leverage-loops":
        return /* @__PURE__ */ D.jsx(aM, {});
      default:
        return /* @__PURE__ */ D.jsx(uE, { agentName: c });
    }
  };
  return /* @__PURE__ */ D.jsxs("div", { className: sE.app, children: [
    /* @__PURE__ */ D.jsx(
      nM,
      {
        activeSection: R,
        onSectionChange: k,
        onSectionChangeConfiguration: F
      }
    ),
    /* @__PURE__ */ D.jsx("main", { className: sE.mainContent, children: $() })
  ] });
};
var Ey = { exports: {} }, Qa = {}, xy = { exports: {} }, J1 = {};
var cE;
function uM() {
  return cE || (cE = 1, (function(c) {
    function v(re, Oe) {
      var he = re.length;
      re.push(Oe);
      e: for (; 0 < he; ) {
        var I = he - 1 >>> 1, ee = re[I];
        if (0 < w(ee, Oe)) re[I] = Oe, re[he] = ee, he = I;
        else break e;
      }
    }
    function p(re) {
      return re.length === 0 ? null : re[0];
    }
    function _(re) {
      if (re.length === 0) return null;
      var Oe = re[0], he = re.pop();
      if (he !== Oe) {
        re[0] = he;
        e: for (var I = 0, ee = re.length, Xe = ee >>> 1; I < Xe; ) {
          var Pe = 2 * (I + 1) - 1, mt = re[Pe], rt = Pe + 1, Le = re[rt];
          if (0 > w(mt, he)) rt < ee && 0 > w(Le, mt) ? (re[I] = Le, re[rt] = he, I = rt) : (re[I] = mt, re[Pe] = he, I = Pe);
          else if (rt < ee && 0 > w(Le, he)) re[I] = Le, re[rt] = he, I = rt;
          else break e;
        }
      }
      return Oe;
    }
    function w(re, Oe) {
      var he = re.sortIndex - Oe.sortIndex;
      return he !== 0 ? he : re.id - Oe.id;
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
    var k = [], x = [], O = 1, A = null, F = 3, $ = !1, ie = !1, oe = !1, Ce = typeof setTimeout == "function" ? setTimeout : null, Re = typeof clearTimeout == "function" ? clearTimeout : null, ge = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function le(re) {
      for (var Oe = p(x); Oe !== null; ) {
        if (Oe.callback === null) _(x);
        else if (Oe.startTime <= re) _(x), Oe.sortIndex = Oe.expirationTime, v(k, Oe);
        else break;
        Oe = p(x);
      }
    }
    function we(re) {
      if (oe = !1, le(re), !ie) if (p(k) !== null) ie = !0, De(ve);
      else {
        var Oe = p(x);
        Oe !== null && xe(we, Oe.startTime - re);
      }
    }
    function ve(re, Oe) {
      ie = !1, oe && (oe = !1, Re(We), We = -1), $ = !0;
      var he = F;
      try {
        for (le(Oe), A = p(k); A !== null && (!(A.expirationTime > Oe) || re && !X()); ) {
          var I = A.callback;
          if (typeof I == "function") {
            A.callback = null, F = A.priorityLevel;
            var ee = I(A.expirationTime <= Oe);
            Oe = c.unstable_now(), typeof ee == "function" ? A.callback = ee : A === p(k) && _(k), le(Oe);
          } else _(k);
          A = p(k);
        }
        if (A !== null) var Xe = !0;
        else {
          var Pe = p(x);
          Pe !== null && xe(we, Pe.startTime - Oe), Xe = !1;
        }
        return Xe;
      } finally {
        A = null, F = he, $ = !1;
      }
    }
    var Ke = !1, Ve = null, We = -1, nt = 5, ot = -1;
    function X() {
      return !(c.unstable_now() - ot < nt);
    }
    function V() {
      if (Ve !== null) {
        var re = c.unstable_now();
        ot = re;
        var Oe = !0;
        try {
          Oe = Ve(!0, re);
        } finally {
          Oe ? J() : (Ke = !1, Ve = null);
        }
      } else Ke = !1;
    }
    var J;
    if (typeof ge == "function") J = function() {
      ge(V);
    };
    else if (typeof MessageChannel < "u") {
      var Ee = new MessageChannel(), He = Ee.port2;
      Ee.port1.onmessage = V, J = function() {
        He.postMessage(null);
      };
    } else J = function() {
      Ce(V, 0);
    };
    function De(re) {
      Ve = re, Ke || (Ke = !0, J());
    }
    function xe(re, Oe) {
      We = Ce(function() {
        re(c.unstable_now());
      }, Oe);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(re) {
      re.callback = null;
    }, c.unstable_continueExecution = function() {
      ie || $ || (ie = !0, De(ve));
    }, c.unstable_forceFrameRate = function(re) {
      0 > re || 125 < re ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : nt = 0 < re ? Math.floor(1e3 / re) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return F;
    }, c.unstable_getFirstCallbackNode = function() {
      return p(k);
    }, c.unstable_next = function(re) {
      switch (F) {
        case 1:
        case 2:
        case 3:
          var Oe = 3;
          break;
        default:
          Oe = F;
      }
      var he = F;
      F = Oe;
      try {
        return re();
      } finally {
        F = he;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(re, Oe) {
      switch (re) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          re = 3;
      }
      var he = F;
      F = re;
      try {
        return Oe();
      } finally {
        F = he;
      }
    }, c.unstable_scheduleCallback = function(re, Oe, he) {
      var I = c.unstable_now();
      switch (typeof he == "object" && he !== null ? (he = he.delay, he = typeof he == "number" && 0 < he ? I + he : I) : he = I, re) {
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
      return ee = he + ee, re = { id: O++, callback: Oe, priorityLevel: re, startTime: he, expirationTime: ee, sortIndex: -1 }, he > I ? (re.sortIndex = he, v(x, re), p(k) === null && re === p(x) && (oe ? (Re(We), We = -1) : oe = !0, xe(we, he - I))) : (re.sortIndex = ee, v(k, re), ie || $ || (ie = !0, De(ve))), re;
    }, c.unstable_shouldYield = X, c.unstable_wrapCallback = function(re) {
      var Oe = F;
      return function() {
        var he = F;
        F = Oe;
        try {
          return re.apply(this, arguments);
        } finally {
          F = he;
        }
      };
    };
  })(J1)), J1;
}
var Z1 = {};
var fE;
function sM() {
  return fE || (fE = 1, (function(c) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var v = !1, p = 5;
      function _(be, Ze) {
        var Rt = be.length;
        be.push(Ze), h(be, Ze, Rt);
      }
      function w(be) {
        return be.length === 0 ? null : be[0];
      }
      function E(be) {
        if (be.length === 0)
          return null;
        var Ze = be[0], Rt = be.pop();
        return Rt !== Ze && (be[0] = Rt, R(be, Rt, 0)), Ze;
      }
      function h(be, Ze, Rt) {
        for (var Gt = Rt; Gt > 0; ) {
          var un = Gt - 1 >>> 1, _n = be[un];
          if (k(_n, Ze) > 0)
            be[un] = Ze, be[Gt] = _n, Gt = un;
          else
            return;
        }
      }
      function R(be, Ze, Rt) {
        for (var Gt = Rt, un = be.length, _n = un >>> 1; Gt < _n; ) {
          var pn = (Gt + 1) * 2 - 1, nr = be[pn], sn = pn + 1, Jt = be[sn];
          if (k(nr, Ze) < 0)
            sn < un && k(Jt, nr) < 0 ? (be[Gt] = Jt, be[sn] = Ze, Gt = sn) : (be[Gt] = nr, be[pn] = Ze, Gt = pn);
          else if (sn < un && k(Jt, Ze) < 0)
            be[Gt] = Jt, be[sn] = Ze, Gt = sn;
          else
            return;
        }
      }
      function k(be, Ze) {
        var Rt = be.sortIndex - Ze.sortIndex;
        return Rt !== 0 ? Rt : be.id - Ze.id;
      }
      var x = 1, O = 2, A = 3, F = 4, $ = 5;
      function ie(be, Ze) {
      }
      var oe = typeof performance == "object" && typeof performance.now == "function";
      if (oe) {
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
      var le = 1073741823, we = -1, ve = 250, Ke = 5e3, Ve = 1e4, We = le, nt = [], ot = [], X = 1, V = null, J = A, Ee = !1, He = !1, De = !1, xe = typeof setTimeout == "function" ? setTimeout : null, re = typeof clearTimeout == "function" ? clearTimeout : null, Oe = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function he(be) {
        for (var Ze = w(ot); Ze !== null; ) {
          if (Ze.callback === null)
            E(ot);
          else if (Ze.startTime <= be)
            E(ot), Ze.sortIndex = Ze.expirationTime, _(nt, Ze);
          else
            return;
          Ze = w(ot);
        }
      }
      function I(be) {
        if (De = !1, he(be), !He)
          if (w(nt) !== null)
            He = !0, zn(ee);
          else {
            var Ze = w(ot);
            Ze !== null && br(I, Ze.startTime - be);
          }
      }
      function ee(be, Ze) {
        He = !1, De && (De = !1, ma()), Ee = !0;
        var Rt = J;
        try {
          var Gt;
          if (!v) return Xe(be, Ze);
        } finally {
          V = null, J = Rt, Ee = !1;
        }
      }
      function Xe(be, Ze) {
        var Rt = Ze;
        for (he(Rt), V = w(nt); V !== null && !(V.expirationTime > Rt && (!be || _i())); ) {
          var Gt = V.callback;
          if (typeof Gt == "function") {
            V.callback = null, J = V.priorityLevel;
            var un = V.expirationTime <= Rt, _n = Gt(un);
            Rt = c.unstable_now(), typeof _n == "function" ? V.callback = _n : V === w(nt) && E(nt), he(Rt);
          } else
            E(nt);
          V = w(nt);
        }
        if (V !== null)
          return !0;
        var pn = w(ot);
        return pn !== null && br(I, pn.startTime - Rt), !1;
      }
      function Pe(be, Ze) {
        switch (be) {
          case x:
          case O:
          case A:
          case F:
          case $:
            break;
          default:
            be = A;
        }
        var Rt = J;
        J = be;
        try {
          return Ze();
        } finally {
          J = Rt;
        }
      }
      function mt(be) {
        var Ze;
        switch (J) {
          case x:
          case O:
          case A:
            Ze = A;
            break;
          default:
            Ze = J;
            break;
        }
        var Rt = J;
        J = Ze;
        try {
          return be();
        } finally {
          J = Rt;
        }
      }
      function rt(be) {
        var Ze = J;
        return function() {
          var Rt = J;
          J = Ze;
          try {
            return be.apply(this, arguments);
          } finally {
            J = Rt;
          }
        };
      }
      function Le(be, Ze, Rt) {
        var Gt = c.unstable_now(), un;
        if (typeof Rt == "object" && Rt !== null) {
          var _n = Rt.delay;
          typeof _n == "number" && _n > 0 ? un = Gt + _n : un = Gt;
        } else
          un = Gt;
        var pn;
        switch (be) {
          case x:
            pn = we;
            break;
          case O:
            pn = ve;
            break;
          case $:
            pn = We;
            break;
          case F:
            pn = Ve;
            break;
          case A:
          default:
            pn = Ke;
            break;
        }
        var nr = un + pn, sn = {
          id: X++,
          callback: Ze,
          priorityLevel: be,
          startTime: un,
          expirationTime: nr,
          sortIndex: -1
        };
        return un > Gt ? (sn.sortIndex = un, _(ot, sn), w(nt) === null && sn === w(ot) && (De ? ma() : De = !0, br(I, un - Gt))) : (sn.sortIndex = nr, _(nt, sn), !He && !Ee && (He = !0, zn(ee))), sn;
      }
      function ct() {
      }
      function vt() {
        !He && !Ee && (He = !0, zn(ee));
      }
      function Xt() {
        return w(nt);
      }
      function Un(be) {
        be.callback = null;
      }
      function Or() {
        return J;
      }
      var kn = !1, ur = null, Yn = -1, Gn = p, Xr = -1;
      function _i() {
        var be = c.unstable_now() - Xr;
        return !(be < Gn);
      }
      function ha() {
      }
      function tr(be) {
        if (be < 0 || be > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        be > 0 ? Gn = Math.floor(1e3 / be) : Gn = p;
      }
      var Tn = function() {
        if (ur !== null) {
          var be = c.unstable_now();
          Xr = be;
          var Ze = !0, Rt = !0;
          try {
            Rt = ur(Ze, be);
          } finally {
            Rt ? Qn() : (kn = !1, ur = null);
          }
        } else
          kn = !1;
      }, Qn;
      if (typeof Oe == "function")
        Qn = function() {
          Oe(Tn);
        };
      else if (typeof MessageChannel < "u") {
        var wr = new MessageChannel(), Ja = wr.port2;
        wr.port1.onmessage = Tn, Qn = function() {
          Ja.postMessage(null);
        };
      } else
        Qn = function() {
          xe(Tn, 0);
        };
      function zn(be) {
        ur = be, kn || (kn = !0, Qn());
      }
      function br(be, Ze) {
        Yn = xe(function() {
          be(c.unstable_now());
        }, Ze);
      }
      function ma() {
        re(Yn), Yn = -1;
      }
      var Za = ha, Si = null;
      c.unstable_IdlePriority = $, c.unstable_ImmediatePriority = x, c.unstable_LowPriority = F, c.unstable_NormalPriority = A, c.unstable_Profiling = Si, c.unstable_UserBlockingPriority = O, c.unstable_cancelCallback = Un, c.unstable_continueExecution = vt, c.unstable_forceFrameRate = tr, c.unstable_getCurrentPriorityLevel = Or, c.unstable_getFirstCallbackNode = Xt, c.unstable_next = mt, c.unstable_pauseExecution = ct, c.unstable_requestPaint = Za, c.unstable_runWithPriority = Pe, c.unstable_scheduleCallback = Le, c.unstable_shouldYield = _i, c.unstable_wrapCallback = rt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(Z1)), Z1;
}
var dE;
function UE() {
  return dE || (dE = 1, process.env.NODE_ENV === "production" ? xy.exports = uM() : xy.exports = sM()), xy.exports;
}
var pE;
function cM() {
  if (pE) return Qa;
  pE = 1;
  var c = wv(), v = UE();
  function p(n) {
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
  var R = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), k = Object.prototype.hasOwnProperty, x = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, O = {}, A = {};
  function F(n) {
    return k.call(A, n) ? !0 : k.call(O, n) ? !1 : x.test(n) ? A[n] = !0 : (O[n] = !0, !1);
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
  function ie(n, r, o, u) {
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
  function oe(n, r, o, u, f, m, C) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = f, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = m, this.removeEmptyString = C;
  }
  var Ce = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Ce[n] = new oe(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Ce[r] = new oe(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Ce[n] = new oe(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Ce[n] = new oe(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Ce[n] = new oe(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Ce[n] = new oe(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Ce[n] = new oe(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Ce[n] = new oe(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Ce[n] = new oe(n, 5, !1, n.toLowerCase(), null, !1, !1);
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
    Ce[r] = new oe(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Re, ge);
    Ce[r] = new oe(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Re, ge);
    Ce[r] = new oe(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Ce[n] = new oe(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Ce.xlinkHref = new oe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Ce[n] = new oe(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function le(n, r, o, u) {
    var f = Ce.hasOwnProperty(r) ? Ce[r] : null;
    (f !== null ? f.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ie(r, o, f, u) && (o = null), u || f === null ? F(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : f.mustUseProperty ? n[f.propertyName] = o === null ? f.type === 3 ? !1 : "" : o : (r = f.attributeName, u = f.attributeNamespace, o === null ? n.removeAttribute(r) : (f = f.type, o = f === 3 || f === 4 && o === !0 ? "" : "" + o, u ? n.setAttributeNS(u, r, o) : n.setAttribute(r, o))));
  }
  var we = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ve = /* @__PURE__ */ Symbol.for("react.element"), Ke = /* @__PURE__ */ Symbol.for("react.portal"), Ve = /* @__PURE__ */ Symbol.for("react.fragment"), We = /* @__PURE__ */ Symbol.for("react.strict_mode"), nt = /* @__PURE__ */ Symbol.for("react.profiler"), ot = /* @__PURE__ */ Symbol.for("react.provider"), X = /* @__PURE__ */ Symbol.for("react.context"), V = /* @__PURE__ */ Symbol.for("react.forward_ref"), J = /* @__PURE__ */ Symbol.for("react.suspense"), Ee = /* @__PURE__ */ Symbol.for("react.suspense_list"), He = /* @__PURE__ */ Symbol.for("react.memo"), De = /* @__PURE__ */ Symbol.for("react.lazy"), xe = /* @__PURE__ */ Symbol.for("react.offscreen"), re = Symbol.iterator;
  function Oe(n) {
    return n === null || typeof n != "object" ? null : (n = re && n[re] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var he = Object.assign, I;
  function ee(n) {
    if (I === void 0) try {
      throw Error();
    } catch (o) {
      var r = o.stack.trim().match(/\n( *(at )?)/);
      I = r && r[1] || "";
    }
    return `
` + I + n;
  }
  var Xe = !1;
  function Pe(n, r) {
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
        } catch (Q) {
          var u = Q;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (Q) {
          u = Q;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (Q) {
          u = Q;
        }
        n();
      }
    } catch (Q) {
      if (Q && u && typeof Q.stack == "string") {
        for (var f = Q.stack.split(`
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
        return n = Pe(n.type, !1), n;
      case 11:
        return n = Pe(n.type.render, !1), n;
      case 1:
        return n = Pe(n.type, !0), n;
      default:
        return "";
    }
  }
  function rt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Ve:
        return "Fragment";
      case Ke:
        return "Portal";
      case nt:
        return "Profiler";
      case We:
        return "StrictMode";
      case J:
        return "Suspense";
      case Ee:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case X:
        return (n.displayName || "Context") + ".Consumer";
      case ot:
        return (n._context.displayName || "Context") + ".Provider";
      case V:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case He:
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
        return r === We ? "StrictMode" : "Mode";
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
  function Or(n) {
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
    return he({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function Yn(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    o = ct(r.value != null ? r.value : o), n._wrapperState = { initialChecked: u, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Gn(n, r) {
    r = r.checked, r != null && le(n, "checked", r, !1);
  }
  function Xr(n, r) {
    Gn(n, r);
    var o = ct(r.value), u = r.type;
    if (o != null) u === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? ha(n, r.type, o) : r.hasOwnProperty("defaultValue") && ha(n, r.type, ct(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function _i(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function ha(n, r, o) {
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
    if (r.dangerouslySetInnerHTML != null) throw Error(p(91));
    return he({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function wr(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null) throw Error(p(92));
        if (tr(o)) {
          if (1 < o.length) throw Error(p(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: ct(o) };
  }
  function Ja(n, r) {
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
  function ma(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? br(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Za, Si = (function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, u, f) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, u, f);
      });
    } : n;
  })(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Za = Za || document.createElement("div"), Za.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Za.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function be(n, r) {
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
  var _n = he({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function pn(n, r) {
    if (r) {
      if (_n[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(p(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(p(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(p(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(p(62));
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
  var Zt = null, ya = null, Rr = null;
  function Na(n) {
    if (n = at(n)) {
      if (typeof Zt != "function") throw Error(p(280));
      var r = n.stateNode;
      r && (r = Cn(r), Zt(n.stateNode, n.type, r));
    }
  }
  function Ki(n) {
    ya ? Rr ? Rr.push(n) : Rr = [n] : ya = n;
  }
  function fl() {
    if (ya) {
      var n = ya, r = Rr;
      if (Rr = ya = null, Na(n), r) for (n = 0; n < r.length; n++) Na(r[n]);
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
      Ro = !1, (ya !== null || Rr !== null) && (bo(), fl());
    }
  }
  function Lr(n, r) {
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
    if (o && typeof o != "function") throw Error(p(231, r, typeof o));
    return o;
  }
  var Mr = !1;
  if (R) try {
    var sr = {};
    Object.defineProperty(sr, "passive", { get: function() {
      Mr = !0;
    } }), window.addEventListener("test", sr, sr), window.removeEventListener("test", sr, sr);
  } catch {
    Mr = !1;
  }
  function Ci(n, r, o, u, f, m, C, N, j) {
    var Q = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, Q);
    } catch (de) {
      this.onError(de);
    }
  }
  var ei = !1, Ei = null, xi = !1, M = null, ue = { onError: function(n) {
    ei = !0, Ei = n;
  } };
  function Ne(n, r, o, u, f, m, C, N, j) {
    ei = !1, Ei = null, Ci.apply(ue, arguments);
  }
  function qe(n, r, o, u, f, m, C, N, j) {
    if (Ne.apply(this, arguments), ei) {
      if (ei) {
        var Q = Ei;
        ei = !1, Ei = null;
      } else throw Error(p(198));
      xi || (xi = !0, M = Q);
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
  function Nt(n) {
    if (Et(n) !== n) throw Error(p(188));
  }
  function Tt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Et(n), r === null) throw Error(p(188));
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
          if (m === o) return Nt(f), n;
          if (m === u) return Nt(f), r;
          m = m.sibling;
        }
        throw Error(p(188));
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
          if (!C) throw Error(p(189));
        }
      }
      if (o.alternate !== u) throw Error(p(190));
    }
    if (o.tag !== 3) throw Error(p(188));
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
  var vn = v.unstable_scheduleCallback, cr = v.unstable_cancelCallback, ti = v.unstable_shouldYield, ni = v.unstable_requestPaint, xt = v.unstable_now, bt = v.unstable_getCurrentPriorityLevel, ri = v.unstable_ImmediatePriority, vl = v.unstable_UserBlockingPriority, hl = v.unstable_NormalPriority, ko = v.unstable_LowPriority, uu = v.unstable_IdlePriority, To = null, Jr = null;
  function os(n) {
    if (Jr && typeof Jr.onCommitFiberRoot == "function") try {
      Jr.onCommitFiberRoot(To, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var jr = Math.clz32 ? Math.clz32 : su, xc = Math.log, wc = Math.LN2;
  function su(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (xc(n) / wc | 0) | 0;
  }
  var Do = 64, ga = 4194304;
  function ai(n) {
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
  function ii(n, r) {
    var o = n.pendingLanes;
    if (o === 0) return 0;
    var u = 0, f = n.suspendedLanes, m = n.pingedLanes, C = o & 268435455;
    if (C !== 0) {
      var N = C & ~f;
      N !== 0 ? u = ai(N) : (m &= C, m !== 0 && (u = ai(m)));
    } else C = o & ~f, C !== 0 ? u = ai(C) : m !== 0 && (u = ai(m));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && (r & f) === 0 && (f = u & -u, m = r & -r, f >= m || f === 16 && (m & 4194240) !== 0)) return r;
    if ((u & 4) !== 0 && (u |= o & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) o = 31 - jr(r), f = 1 << o, u |= n[o], r &= ~f;
    return u;
  }
  function cu(n, r) {
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
      var C = 31 - jr(m), N = 1 << C, j = f[C];
      j === -1 ? ((N & o) === 0 || (N & u) !== 0) && (f[C] = cu(N, r)) : j <= r && (n.expiredLanes |= N), m &= ~N;
    }
  }
  function No(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function fu() {
    var n = Do;
    return Do <<= 1, (Do & 4194240) === 0 && (Do = 64), n;
  }
  function du(n) {
    for (var r = [], o = 0; 31 > o; o++) r.push(n);
    return r;
  }
  function Xi(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - jr(r), n[r] = o;
  }
  function vd(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var f = 31 - jr(o), m = 1 << f;
      r[f] = 0, u[f] = -1, n[f] = -1, o &= ~m;
    }
  }
  function Ji(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var u = 31 - jr(o), f = 1 << u;
      f & r | n[u] & r && (n[u] |= r), o &= ~f;
    }
  }
  var Ht = 0;
  function pu(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var It, ls, wi, gt, vu, fr = !1, bi = [], Ar = null, Ri = null, hn = null, en = /* @__PURE__ */ new Map(), Oo = /* @__PURE__ */ new Map(), Kn = [], Ur = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Oa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Ar = null;
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
        Oo.delete(r.pointerId);
    }
  }
  function yl(n, r, o, u, f, m) {
    return n === null || n.nativeEvent !== m ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: u, nativeEvent: m, targetContainers: [f] }, r !== null && (r = at(r), r !== null && ls(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, f !== null && r.indexOf(f) === -1 && r.push(f), n);
  }
  function us(n, r, o, u, f) {
    switch (r) {
      case "focusin":
        return Ar = yl(Ar, n, r, o, u, f), !0;
      case "dragenter":
        return Ri = yl(Ri, n, r, o, u, f), !0;
      case "mouseover":
        return hn = yl(hn, n, r, o, u, f), !0;
      case "pointerover":
        var m = f.pointerId;
        return en.set(m, yl(en.get(m) || null, n, r, o, u, f)), !0;
      case "gotpointercapture":
        return m = f.pointerId, Oo.set(m, yl(Oo.get(m) || null, n, r, o, u, f)), !0;
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
            n.blockedOn = r, vu(n.priority, function() {
              wi(o);
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
      var o = yu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
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
    fr = !1, Ar !== null && Lo(Ar) && (Ar = null), Ri !== null && Lo(Ri) && (Ri = null), hn !== null && Lo(hn) && (hn = null), en.forEach(gl), Oo.forEach(gl);
  }
  function La(n, r) {
    n.blockedOn === r && (n.blockedOn = null, fr || (fr = !0, v.unstable_scheduleCallback(v.unstable_NormalPriority, hd)));
  }
  function oi(n) {
    function r(f) {
      return La(f, n);
    }
    if (0 < bi.length) {
      La(bi[0], n);
      for (var o = 1; o < bi.length; o++) {
        var u = bi[o];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (Ar !== null && La(Ar, n), Ri !== null && La(Ri, n), hn !== null && La(hn, n), en.forEach(r), Oo.forEach(r), o = 0; o < Kn.length; o++) u = Kn[o], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < Kn.length && (o = Kn[0], o.blockedOn === null); ) ss(o), o.blockedOn === null && Kn.shift();
  }
  var ki = we.ReactCurrentBatchConfig, Ma = !0;
  function hu(n, r, o, u) {
    var f = Ht, m = ki.transition;
    ki.transition = null;
    try {
      Ht = 1, Mo(n, r, o, u);
    } finally {
      Ht = f, ki.transition = m;
    }
  }
  function mu(n, r, o, u) {
    var f = Ht, m = ki.transition;
    ki.transition = null;
    try {
      Ht = 4, Mo(n, r, o, u);
    } finally {
      Ht = f, ki.transition = m;
    }
  }
  function Mo(n, r, o, u) {
    if (Ma) {
      var f = yu(n, r, o, u);
      if (f === null) Uc(n, r, u, _l, o), Oa(n, u);
      else if (us(f, n, r, o, u)) u.stopPropagation();
      else if (Oa(n, u), r & 4 && -1 < Ur.indexOf(n)) {
        for (; f !== null; ) {
          var m = at(f);
          if (m !== null && It(m), m = yu(n, r, o, u), m === null && Uc(n, r, u, _l, o), m === f) break;
          f = m;
        }
        f !== null && u.stopPropagation();
      } else Uc(n, r, u, null, o);
    }
  }
  var _l = null;
  function yu(n, r, o, u) {
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
  function gu(n) {
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
          case ri:
            return 1;
          case vl:
            return 4;
          case hl:
          case ko:
            return 16;
          case uu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var li = null, S = null, L = null;
  function G() {
    if (L) return L;
    var n, r = S, o = r.length, u, f = "value" in li ? li.value : li.textContent, m = f.length;
    for (n = 0; n < o && r[n] === f[n]; n++) ;
    var C = o - n;
    for (u = 1; u <= C && r[o - u] === f[m - u]; u++) ;
    return L = f.slice(n, 1 < u ? 1 - u : void 0);
  }
  function Z(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function _e() {
    return !0;
  }
  function lt() {
    return !1;
  }
  function Te(n) {
    function r(o, u, f, m, C) {
      this._reactName = o, this._targetInst = f, this.type = u, this.nativeEvent = m, this.target = C, this.currentTarget = null;
      for (var N in n) n.hasOwnProperty(N) && (o = n[N], this[N] = o ? o(m) : m[N]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? _e : lt, this.isPropagationStopped = lt, this;
    }
    return he(r.prototype, { preventDefault: function() {
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
  }, defaultPrevented: 0, isTrusted: 0 }, Ot = Te(ft), Ft = he({}, ft, { view: 0, detail: 0 }), fn = Te(Ft), tn, kt, nn, Sn = he({}, Ft, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Sd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== nn && (nn && n.type === "mousemove" ? (tn = n.screenX - nn.screenX, kt = n.screenY - nn.screenY) : kt = tn = 0, nn = n), tn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : kt;
  } }), jo = Te(Sn), cs = he({}, Sn, { dataTransfer: 0 }), Zi = Te(cs), fs = he({}, Ft, { relatedTarget: 0 }), Sl = Te(fs), md = he({}, ft, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), bc = Te(md), yd = he({}, ft, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), kv = Te(yd), gd = he({}, ft, { data: 0 }), _d = Te(gd), Tv = {
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
  var Cd = he({}, Ft, { key: function(n) {
    if (n.key) {
      var r = Tv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = Z(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Dv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Sd, charCode: function(n) {
    return n.type === "keypress" ? Z(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Z(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Ed = Te(Cd), xd = he({}, Sn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Nv = Te(xd), Rc = he({}, Ft, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Sd }), Ov = Te(Rc), Zr = he({}, ft, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), to = Te(Zr), Pn = he({}, Sn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), no = Te(Pn), wd = [9, 13, 27, 32], _u = R && "CompositionEvent" in window, ds = null;
  R && "documentMode" in document && (ds = document.documentMode);
  var ps = R && "TextEvent" in window && !ds, Lv = R && (!_u || ds && 8 < ds && 11 >= ds), Mv = " ", kc = !1;
  function jv(n, r) {
    switch (n) {
      case "keyup":
        return wd.indexOf(r.keyCode) !== -1;
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
  var Su = !1;
  function Uv(n, r) {
    switch (n) {
      case "compositionend":
        return Av(r);
      case "keypress":
        return r.which !== 32 ? null : (kc = !0, Mv);
      case "textInput":
        return n = r.data, n === Mv && kc ? null : n;
      default:
        return null;
    }
  }
  function Ay(n, r) {
    if (Su) return n === "compositionend" || !_u && jv(n, r) ? (n = G(), L = S = li = null, Su = !1, n) : null;
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
    Ki(u), r = _s(r, "onChange"), 0 < r.length && (o = new Ot("onChange", "change", null, o, u), n.push({ event: o, listeners: r }));
  }
  var Ti = null, Cl = null;
  function Pv(n) {
    wl(n, 0);
  }
  function vs(n) {
    var r = si(n);
    if (Or(r)) return n;
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
  var ui = typeof Object.is == "function" ? Object.is : Fy;
  function hs(n, r) {
    if (ui(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var o = Object.keys(n), u = Object.keys(r);
    if (o.length !== u.length) return !1;
    for (u = 0; u < o.length; u++) {
      var f = o[u];
      if (!k.call(r, f) || !ui(n[f], r[f])) return !1;
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
  function Cu(n) {
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
  var Vy = R && "documentMode" in document && 11 >= document.documentMode, Eu = null, Td = null, ys = null, Dd = !1;
  function Nd(n, r, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Dd || Eu == null || Eu !== kn(u) || (u = Eu, "selectionStart" in u && Dc(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), ys && hs(ys, u) || (ys = u, u = _s(Td, "onSelect"), 0 < u.length && (r = new Ot("onSelect", "select", null, r, o), n.push({ event: r, listeners: u }), r.target = Eu)));
  }
  function Nc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var El = { animationend: Nc("Animation", "AnimationEnd"), animationiteration: Nc("Animation", "AnimationIteration"), animationstart: Nc("Animation", "AnimationStart"), transitionend: Nc("Transition", "TransitionEnd") }, dr = {}, Od = {};
  R && (Od = document.createElement("div").style, "AnimationEvent" in window || (delete El.animationend.animation, delete El.animationiteration.animation, delete El.animationstart.animation), "TransitionEvent" in window || delete El.transitionend.transition);
  function Oc(n) {
    if (dr[n]) return dr[n];
    if (!El[n]) return n;
    var r = El[n], o;
    for (o in r) if (r.hasOwnProperty(o) && o in Od) return dr[n] = r[o];
    return n;
  }
  var Wv = Oc("animationend"), Yv = Oc("animationiteration"), Gv = Oc("animationstart"), Qv = Oc("transitionend"), Ld = /* @__PURE__ */ new Map(), Lc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ja(n, r) {
    Ld.set(n, r), E(r, [n]);
  }
  for (var Md = 0; Md < Lc.length; Md++) {
    var xl = Lc[Md], Hy = xl.toLowerCase(), $y = xl[0].toUpperCase() + xl.slice(1);
    ja(Hy, "on" + $y);
  }
  ja(Wv, "onAnimationEnd"), ja(Yv, "onAnimationIteration"), ja(Gv, "onAnimationStart"), ja("dblclick", "onDoubleClick"), ja("focusin", "onFocus"), ja("focusout", "onBlur"), ja(Qv, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), E("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), E("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), E("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), E("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var gs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), jd = new Set("cancel close invalid load scroll toggle".split(" ").concat(gs));
  function Mc(n, r, o) {
    var u = n.type || "unknown-event";
    n.currentTarget = o, qe(u, r, void 0, n), n.currentTarget = null;
  }
  function wl(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var u = n[o], f = u.event;
      u = u.listeners;
      e: {
        var m = void 0;
        if (r) for (var C = u.length - 1; 0 <= C; C--) {
          var N = u[C], j = N.instance, Q = N.currentTarget;
          if (N = N.listener, j !== m && f.isPropagationStopped()) break e;
          Mc(f, N, Q), m = j;
        }
        else for (C = 0; C < u.length; C++) {
          if (N = u[C], j = N.instance, Q = N.currentTarget, N = N.listener, j !== m && f.isPropagationStopped()) break e;
          Mc(f, N, Q), m = j;
        }
      }
    }
    if (xi) throw n = M, xi = !1, M = null, n;
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
    switch (gu(r)) {
      case 1:
        var f = hu;
        break;
      case 4:
        f = mu;
        break;
      default:
        f = Mo;
    }
    o = f.bind(null, r, o, n), f = void 0, !Mr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (f = !0), u ? f !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: f }) : n.addEventListener(r, o, !0) : f !== void 0 ? n.addEventListener(r, o, { passive: f }) : n.addEventListener(r, o, !1);
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
      var Q = m, de = Jt(o), me = [];
      e: {
        var fe = Ld.get(n);
        if (fe !== void 0) {
          var Ie = Ot, Ye = n;
          switch (n) {
            case "keypress":
              if (Z(o) === 0) break e;
            case "keydown":
            case "keyup":
              Ie = Ed;
              break;
            case "focusin":
              Ye = "focus", Ie = Sl;
              break;
            case "focusout":
              Ye = "blur", Ie = Sl;
              break;
            case "beforeblur":
            case "afterblur":
              Ie = Sl;
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
              Ie = jo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Ie = Zi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ie = Ov;
              break;
            case Wv:
            case Yv:
            case Gv:
              Ie = bc;
              break;
            case Qv:
              Ie = to;
              break;
            case "scroll":
              Ie = fn;
              break;
            case "wheel":
              Ie = no;
              break;
            case "copy":
            case "cut":
            case "paste":
              Ie = kv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Ie = Nv;
          }
          var Je = (r & 4) !== 0, jn = !Je && n === "scroll", H = Je ? fe !== null ? fe + "Capture" : null : fe;
          Je = [];
          for (var z = Q, W; z !== null; ) {
            W = z;
            var pe = W.stateNode;
            if (W.tag === 5 && pe !== null && (W = pe, H !== null && (pe = Lr(z, H), pe != null && Je.push(wu(z, pe, W)))), jn) break;
            z = z.return;
          }
          0 < Je.length && (fe = new Ie(fe, Ye, null, o, de), me.push({ event: fe, listeners: Je }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (fe = n === "mouseover" || n === "pointerover", Ie = n === "mouseout" || n === "pointerout", fe && o !== sn && (Ye = o.relatedTarget || o.fromElement) && (Rl(Ye) || Ye[ro])) break e;
          if ((Ie || fe) && (fe = de.window === de ? de : (fe = de.ownerDocument) ? fe.defaultView || fe.parentWindow : window, Ie ? (Ye = o.relatedTarget || o.toElement, Ie = Q, Ye = Ye ? Rl(Ye) : null, Ye !== null && (jn = Et(Ye), Ye !== jn || Ye.tag !== 5 && Ye.tag !== 6) && (Ye = null)) : (Ie = null, Ye = Q), Ie !== Ye)) {
            if (Je = jo, pe = "onMouseLeave", H = "onMouseEnter", z = "mouse", (n === "pointerout" || n === "pointerover") && (Je = Nv, pe = "onPointerLeave", H = "onPointerEnter", z = "pointer"), jn = Ie == null ? fe : si(Ie), W = Ye == null ? fe : si(Ye), fe = new Je(pe, z + "leave", Ie, o, de), fe.target = jn, fe.relatedTarget = W, pe = null, Rl(de) === Q && (Je = new Je(H, z + "enter", Ye, o, de), Je.target = W, Je.relatedTarget = jn, pe = Je), jn = pe, Ie && Ye) t: {
              for (Je = Ie, H = Ye, z = 0, W = Je; W; W = Uo(W)) z++;
              for (W = 0, pe = H; pe; pe = Uo(pe)) W++;
              for (; 0 < z - W; ) Je = Uo(Je), z--;
              for (; 0 < W - z; ) H = Uo(H), W--;
              for (; z--; ) {
                if (Je === H || H !== null && Je === H.alternate) break t;
                Je = Uo(Je), H = Uo(H);
              }
              Je = null;
            }
            else Je = null;
            Ie !== null && Xv(me, fe, Ie, Je, !1), Ye !== null && jn !== null && Xv(me, jn, Ye, Je, !0);
          }
        }
        e: {
          if (fe = Q ? si(Q) : window, Ie = fe.nodeName && fe.nodeName.toLowerCase(), Ie === "select" || Ie === "input" && fe.type === "file") var Ge = zy;
          else if (zv(fe)) if (Iv) Ge = Bv;
          else {
            Ge = $v;
            var st = Py;
          }
          else (Ie = fe.nodeName) && Ie.toLowerCase() === "input" && (fe.type === "checkbox" || fe.type === "radio") && (Ge = Iy);
          if (Ge && (Ge = Ge(n, Q))) {
            bd(me, Ge, o, de);
            break e;
          }
          st && st(n, fe, Q), n === "focusout" && (st = fe._wrapperState) && st.controlled && fe.type === "number" && ha(fe, "number", fe.value);
        }
        switch (st = Q ? si(Q) : window, n) {
          case "focusin":
            (zv(st) || st.contentEditable === "true") && (Eu = st, Td = Q, ys = null);
            break;
          case "focusout":
            ys = Td = Eu = null;
            break;
          case "mousedown":
            Dd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Dd = !1, Nd(me, o, de);
            break;
          case "selectionchange":
            if (Vy) break;
          case "keydown":
          case "keyup":
            Nd(me, o, de);
        }
        var dt;
        if (_u) e: {
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
        else Su ? jv(n, o) && (yt = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (yt = "onCompositionStart");
        yt && (Lv && o.locale !== "ko" && (Su || yt !== "onCompositionStart" ? yt === "onCompositionEnd" && Su && (dt = G()) : (li = de, S = "value" in li ? li.value : li.textContent, Su = !0)), st = _s(Q, yt), 0 < st.length && (yt = new _d(yt, n, null, o, de), me.push({ event: yt, listeners: st }), dt ? yt.data = dt : (dt = Av(o), dt !== null && (yt.data = dt)))), (dt = ps ? Uv(n, o) : Ay(n, o)) && (Q = _s(Q, "onBeforeInput"), 0 < Q.length && (de = new _d("onBeforeInput", "beforeinput", null, o, de), me.push({ event: de, listeners: Q }), de.data = dt));
      }
      wl(me, r);
    });
  }
  function wu(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function _s(n, r) {
    for (var o = r + "Capture", u = []; n !== null; ) {
      var f = n, m = f.stateNode;
      f.tag === 5 && m !== null && (f = m, m = Lr(n, o), m != null && u.unshift(wu(n, m, f)), m = Lr(n, r), m != null && u.push(wu(n, m, f))), n = n.return;
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
      var N = o, j = N.alternate, Q = N.stateNode;
      if (j !== null && j === u) break;
      N.tag === 5 && Q !== null && (N = Q, f ? (j = Lr(o, m), j != null && C.unshift(wu(o, j, N))) : f || (j = Lr(o, m), j != null && C.push(wu(o, j, N)))), o = o.return;
    }
    C.length !== 0 && n.push({ event: r, listeners: C });
  }
  var Jv = /\r\n?/g, By = /\u0000|\uFFFD/g;
  function Zv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Jv, `
`).replace(By, "");
  }
  function zc(n, r, o) {
    if (r = Zv(r), Zv(n) !== r && o) throw Error(p(425));
  }
  function zo() {
  }
  var Ss = null, bl = null;
  function Pc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Ic = typeof setTimeout == "function" ? setTimeout : void 0, Ad = typeof clearTimeout == "function" ? clearTimeout : void 0, eh = typeof Promise == "function" ? Promise : void 0, bu = typeof queueMicrotask == "function" ? queueMicrotask : typeof eh < "u" ? function(n) {
    return eh.resolve(null).then(n).catch(Fc);
  } : Ic;
  function Fc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Ru(n, r) {
    var o = r, u = 0;
    do {
      var f = o.nextSibling;
      if (n.removeChild(o), f && f.nodeType === 8) if (o = f.data, o === "/$") {
        if (u === 0) {
          n.removeChild(f), oi(r);
          return;
        }
        u--;
      } else o !== "$" && o !== "$?" && o !== "$!" || u++;
      o = f;
    } while (o);
    oi(r);
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
  var Po = Math.random().toString(36).slice(2), Ni = "__reactFiber$" + Po, Cs = "__reactProps$" + Po, ro = "__reactContainer$" + Po, Es = "__reactEvents$" + Po, ku = "__reactListeners$" + Po, qy = "__reactHandles$" + Po;
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
  function si(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(p(33));
  }
  function Cn(n) {
    return n[Cs] || null;
  }
  var jt = [], Aa = -1;
  function Ua(n) {
    return { current: n };
  }
  function dn(n) {
    0 > Aa || (n.current = jt[Aa], jt[Aa] = null, Aa--);
  }
  function tt(n, r) {
    Aa++, jt[Aa] = n.current, n.current = r;
  }
  var kr = {}, bn = Ua(kr), Xn = Ua(!1), ea = kr;
  function ta(n, r) {
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
  function Tu() {
    dn(Xn), dn(bn);
  }
  function nh(n, r, o) {
    if (bn.current !== kr) throw Error(p(168));
    tt(bn, r), tt(Xn, o);
  }
  function xs(n, r, o) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return o;
    u = u.getChildContext();
    for (var f in u) if (!(f in r)) throw Error(p(108, Le(n) || "Unknown", f));
    return he({}, o, u);
  }
  function rr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || kr, ea = bn.current, tt(bn, n), tt(Xn, Xn.current), !0;
  }
  function Vc(n, r, o) {
    var u = n.stateNode;
    if (!u) throw Error(p(169));
    o ? (n = xs(n, r, ea), u.__reactInternalMemoizedMergedChildContext = n, dn(Xn), dn(bn), tt(bn, n)) : dn(Xn), tt(Xn, o);
  }
  var Oi = null, Du = !1, ao = !1;
  function Hc(n) {
    Oi === null ? Oi = [n] : Oi.push(n);
  }
  function Io(n) {
    Du = !0, Hc(n);
  }
  function Li() {
    if (!ao && Oi !== null) {
      ao = !0;
      var n = 0, r = Ht;
      try {
        var o = Oi;
        for (Ht = 1; n < o.length; n++) {
          var u = o[n];
          do
            u = u(!0);
          while (u !== null);
        }
        Oi = null, Du = !1;
      } catch (f) {
        throw Oi !== null && (Oi = Oi.slice(n + 1)), vn(ri, Li), f;
      } finally {
        Ht = r, ao = !1;
      }
    }
    return null;
  }
  var Fo = [], Vo = 0, Ho = null, io = 0, Fn = [], za = 0, _a = null, Mi = 1, ji = "";
  function kl(n, r) {
    Fo[Vo++] = io, Fo[Vo++] = Ho, Ho = n, io = r;
  }
  function rh(n, r, o) {
    Fn[za++] = Mi, Fn[za++] = ji, Fn[za++] = _a, _a = n;
    var u = Mi;
    n = ji;
    var f = 32 - jr(u) - 1;
    u &= ~(1 << f), o += 1;
    var m = 32 - jr(r) + f;
    if (30 < m) {
      var C = f - f % 5;
      m = (u & (1 << C) - 1).toString(32), u >>= C, f -= C, Mi = 1 << 32 - jr(r) + f | o << f | u, ji = m + n;
    } else Mi = 1 << m | o << f | u, ji = n;
  }
  function $c(n) {
    n.return !== null && (kl(n, 1), rh(n, 1, 0));
  }
  function Bc(n) {
    for (; n === Ho; ) Ho = Fo[--Vo], Fo[Vo] = null, io = Fo[--Vo], Fo[Vo] = null;
    for (; n === _a; ) _a = Fn[--za], Fn[za] = null, ji = Fn[--za], Fn[za] = null, Mi = Fn[--za], Fn[za] = null;
  }
  var na = null, ra = null, yn = !1, Pa = null;
  function Ud(n, r) {
    var o = $a(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function ah(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, na = n, ra = Di(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, na = n, ra = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = _a !== null ? { id: Mi, overflow: ji } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = $a(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, na = n, ra = null, !0) : !1;
      default:
        return !1;
    }
  }
  function zd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Pd(n) {
    if (yn) {
      var r = ra;
      if (r) {
        var o = r;
        if (!ah(n, r)) {
          if (zd(n)) throw Error(p(418));
          r = Di(o.nextSibling);
          var u = na;
          r && ah(n, r) ? Ud(u, o) : (n.flags = n.flags & -4097 | 2, yn = !1, na = n);
        }
      } else {
        if (zd(n)) throw Error(p(418));
        n.flags = n.flags & -4097 | 2, yn = !1, na = n;
      }
    }
  }
  function Jn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    na = n;
  }
  function qc(n) {
    if (n !== na) return !1;
    if (!yn) return Jn(n), yn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Pc(n.type, n.memoizedProps)), r && (r = ra)) {
      if (zd(n)) throw ws(), Error(p(418));
      for (; r; ) Ud(n, r), r = Di(r.nextSibling);
    }
    if (Jn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(p(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                ra = Di(n.nextSibling);
                break e;
              }
              r--;
            } else o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ra = null;
      }
    } else ra = na ? Di(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ws() {
    for (var n = ra; n; ) n = Di(n.nextSibling);
  }
  function $o() {
    ra = na = null, yn = !1;
  }
  function oo(n) {
    Pa === null ? Pa = [n] : Pa.push(n);
  }
  var Wy = we.ReactCurrentBatchConfig;
  function Tl(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1) throw Error(p(309));
          var u = o.stateNode;
        }
        if (!u) throw Error(p(147, n));
        var f = u, m = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(C) {
          var N = f.refs;
          C === null ? delete N[m] : N[m] = C;
        }, r._stringRef = m, r);
      }
      if (typeof n != "string") throw Error(p(284));
      if (!o._owner) throw Error(p(290, n));
    }
    return n;
  }
  function Wc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(p(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function ih(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Dl(n) {
    function r(H, z) {
      if (n) {
        var W = H.deletions;
        W === null ? (H.deletions = [z], H.flags |= 16) : W.push(z);
      }
    }
    function o(H, z) {
      if (!n) return null;
      for (; z !== null; ) r(H, z), z = z.sibling;
      return null;
    }
    function u(H, z) {
      for (H = /* @__PURE__ */ new Map(); z !== null; ) z.key !== null ? H.set(z.key, z) : H.set(z.index, z), z = z.sibling;
      return H;
    }
    function f(H, z) {
      return H = Xo(H, z), H.index = 0, H.sibling = null, H;
    }
    function m(H, z, W) {
      return H.index = W, n ? (W = H.alternate, W !== null ? (W = W.index, W < z ? (H.flags |= 2, z) : W) : (H.flags |= 2, z)) : (H.flags |= 1048576, z);
    }
    function C(H) {
      return n && H.alternate === null && (H.flags |= 2), H;
    }
    function N(H, z, W, pe) {
      return z === null || z.tag !== 6 ? (z = hp(W, H.mode, pe), z.return = H, z) : (z = f(z, W), z.return = H, z);
    }
    function j(H, z, W, pe) {
      var Ge = W.type;
      return Ge === Ve ? de(H, z, W.props.children, pe, W.key) : z !== null && (z.elementType === Ge || typeof Ge == "object" && Ge !== null && Ge.$$typeof === De && ih(Ge) === z.type) ? (pe = f(z, W.props), pe.ref = Tl(H, z, W), pe.return = H, pe) : (pe = ec(W.type, W.key, W.props, null, H.mode, pe), pe.ref = Tl(H, z, W), pe.return = H, pe);
    }
    function Q(H, z, W, pe) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== W.containerInfo || z.stateNode.implementation !== W.implementation ? (z = Rf(W, H.mode, pe), z.return = H, z) : (z = f(z, W.children || []), z.return = H, z);
    }
    function de(H, z, W, pe, Ge) {
      return z === null || z.tag !== 7 ? (z = po(W, H.mode, pe, Ge), z.return = H, z) : (z = f(z, W), z.return = H, z);
    }
    function me(H, z, W) {
      if (typeof z == "string" && z !== "" || typeof z == "number") return z = hp("" + z, H.mode, W), z.return = H, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case ve:
            return W = ec(z.type, z.key, z.props, null, H.mode, W), W.ref = Tl(H, null, z), W.return = H, W;
          case Ke:
            return z = Rf(z, H.mode, W), z.return = H, z;
          case De:
            var pe = z._init;
            return me(H, pe(z._payload), W);
        }
        if (tr(z) || Oe(z)) return z = po(z, H.mode, W, null), z.return = H, z;
        Wc(H, z);
      }
      return null;
    }
    function fe(H, z, W, pe) {
      var Ge = z !== null ? z.key : null;
      if (typeof W == "string" && W !== "" || typeof W == "number") return Ge !== null ? null : N(H, z, "" + W, pe);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case ve:
            return W.key === Ge ? j(H, z, W, pe) : null;
          case Ke:
            return W.key === Ge ? Q(H, z, W, pe) : null;
          case De:
            return Ge = W._init, fe(
              H,
              z,
              Ge(W._payload),
              pe
            );
        }
        if (tr(W) || Oe(W)) return Ge !== null ? null : de(H, z, W, pe, null);
        Wc(H, W);
      }
      return null;
    }
    function Ie(H, z, W, pe, Ge) {
      if (typeof pe == "string" && pe !== "" || typeof pe == "number") return H = H.get(W) || null, N(z, H, "" + pe, Ge);
      if (typeof pe == "object" && pe !== null) {
        switch (pe.$$typeof) {
          case ve:
            return H = H.get(pe.key === null ? W : pe.key) || null, j(z, H, pe, Ge);
          case Ke:
            return H = H.get(pe.key === null ? W : pe.key) || null, Q(z, H, pe, Ge);
          case De:
            var st = pe._init;
            return Ie(H, z, W, st(pe._payload), Ge);
        }
        if (tr(pe) || Oe(pe)) return H = H.get(W) || null, de(z, H, pe, Ge, null);
        Wc(z, pe);
      }
      return null;
    }
    function Ye(H, z, W, pe) {
      for (var Ge = null, st = null, dt = z, yt = z = 0, or = null; dt !== null && yt < W.length; yt++) {
        dt.index > yt ? (or = dt, dt = null) : or = dt.sibling;
        var qt = fe(H, dt, W[yt], pe);
        if (qt === null) {
          dt === null && (dt = or);
          break;
        }
        n && dt && qt.alternate === null && r(H, dt), z = m(qt, z, yt), st === null ? Ge = qt : st.sibling = qt, st = qt, dt = or;
      }
      if (yt === W.length) return o(H, dt), yn && kl(H, yt), Ge;
      if (dt === null) {
        for (; yt < W.length; yt++) dt = me(H, W[yt], pe), dt !== null && (z = m(dt, z, yt), st === null ? Ge = dt : st.sibling = dt, st = dt);
        return yn && kl(H, yt), Ge;
      }
      for (dt = u(H, dt); yt < W.length; yt++) or = Ie(dt, H, yt, W[yt], pe), or !== null && (n && or.alternate !== null && dt.delete(or.key === null ? yt : or.key), z = m(or, z, yt), st === null ? Ge = or : st.sibling = or, st = or);
      return n && dt.forEach(function(el) {
        return r(H, el);
      }), yn && kl(H, yt), Ge;
    }
    function Je(H, z, W, pe) {
      var Ge = Oe(W);
      if (typeof Ge != "function") throw Error(p(150));
      if (W = Ge.call(W), W == null) throw Error(p(151));
      for (var st = Ge = null, dt = z, yt = z = 0, or = null, qt = W.next(); dt !== null && !qt.done; yt++, qt = W.next()) {
        dt.index > yt ? (or = dt, dt = null) : or = dt.sibling;
        var el = fe(H, dt, qt.value, pe);
        if (el === null) {
          dt === null && (dt = or);
          break;
        }
        n && dt && el.alternate === null && r(H, dt), z = m(el, z, yt), st === null ? Ge = el : st.sibling = el, st = el, dt = or;
      }
      if (qt.done) return o(
        H,
        dt
      ), yn && kl(H, yt), Ge;
      if (dt === null) {
        for (; !qt.done; yt++, qt = W.next()) qt = me(H, qt.value, pe), qt !== null && (z = m(qt, z, yt), st === null ? Ge = qt : st.sibling = qt, st = qt);
        return yn && kl(H, yt), Ge;
      }
      for (dt = u(H, dt); !qt.done; yt++, qt = W.next()) qt = Ie(dt, H, yt, qt.value, pe), qt !== null && (n && qt.alternate !== null && dt.delete(qt.key === null ? yt : qt.key), z = m(qt, z, yt), st === null ? Ge = qt : st.sibling = qt, st = qt);
      return n && dt.forEach(function(Vh) {
        return r(H, Vh);
      }), yn && kl(H, yt), Ge;
    }
    function jn(H, z, W, pe) {
      if (typeof W == "object" && W !== null && W.type === Ve && W.key === null && (W = W.props.children), typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case ve:
            e: {
              for (var Ge = W.key, st = z; st !== null; ) {
                if (st.key === Ge) {
                  if (Ge = W.type, Ge === Ve) {
                    if (st.tag === 7) {
                      o(H, st.sibling), z = f(st, W.props.children), z.return = H, H = z;
                      break e;
                    }
                  } else if (st.elementType === Ge || typeof Ge == "object" && Ge !== null && Ge.$$typeof === De && ih(Ge) === st.type) {
                    o(H, st.sibling), z = f(st, W.props), z.ref = Tl(H, st, W), z.return = H, H = z;
                    break e;
                  }
                  o(H, st);
                  break;
                } else r(H, st);
                st = st.sibling;
              }
              W.type === Ve ? (z = po(W.props.children, H.mode, pe, W.key), z.return = H, H = z) : (pe = ec(W.type, W.key, W.props, null, H.mode, pe), pe.ref = Tl(H, z, W), pe.return = H, H = pe);
            }
            return C(H);
          case Ke:
            e: {
              for (st = W.key; z !== null; ) {
                if (z.key === st) if (z.tag === 4 && z.stateNode.containerInfo === W.containerInfo && z.stateNode.implementation === W.implementation) {
                  o(H, z.sibling), z = f(z, W.children || []), z.return = H, H = z;
                  break e;
                } else {
                  o(H, z);
                  break;
                }
                else r(H, z);
                z = z.sibling;
              }
              z = Rf(W, H.mode, pe), z.return = H, H = z;
            }
            return C(H);
          case De:
            return st = W._init, jn(H, z, st(W._payload), pe);
        }
        if (tr(W)) return Ye(H, z, W, pe);
        if (Oe(W)) return Je(H, z, W, pe);
        Wc(H, W);
      }
      return typeof W == "string" && W !== "" || typeof W == "number" ? (W = "" + W, z !== null && z.tag === 6 ? (o(H, z.sibling), z = f(z, W), z.return = H, H = z) : (o(H, z), z = hp(W, H.mode, pe), z.return = H, H = z), C(H)) : o(H, z);
    }
    return jn;
  }
  var Nn = Dl(!0), Me = Dl(!1), Sa = Ua(null), aa = null, Nu = null, Id = null;
  function Fd() {
    Id = Nu = aa = null;
  }
  function Vd(n) {
    var r = Sa.current;
    dn(Sa), n._currentValue = r;
  }
  function Hd(n, r, o) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === o) break;
      n = n.return;
    }
  }
  function En(n, r) {
    aa = n, Id = Nu = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (Hn = !0), n.firstContext = null);
  }
  function Ia(n) {
    var r = n._currentValue;
    if (Id !== n) if (n = { context: n, memoizedValue: r, next: null }, Nu === null) {
      if (aa === null) throw Error(p(308));
      Nu = n, aa.dependencies = { lanes: 0, firstContext: n };
    } else Nu = Nu.next = n;
    return r;
  }
  var Nl = null;
  function $d(n) {
    Nl === null ? Nl = [n] : Nl.push(n);
  }
  function Bd(n, r, o, u) {
    var f = r.interleaved;
    return f === null ? (o.next = o, $d(r)) : (o.next = f.next, f.next = o), r.interleaved = o, Ca(n, u);
  }
  function Ca(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; ) n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var Ea = !1;
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
    if (u = u.shared, (At & 2) !== 0) {
      var f = u.pending;
      return f === null ? r.next = r : (r.next = f.next, f.next = r), u.pending = r, Ca(n, o);
    }
    return f = u.interleaved, f === null ? (r.next = r, $d(u)) : (r.next = f.next, f.next = r), u.interleaved = r, Ca(n, o);
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
    Ea = !1;
    var m = f.firstBaseUpdate, C = f.lastBaseUpdate, N = f.shared.pending;
    if (N !== null) {
      f.shared.pending = null;
      var j = N, Q = j.next;
      j.next = null, C === null ? m = Q : C.next = Q, C = j;
      var de = n.alternate;
      de !== null && (de = de.updateQueue, N = de.lastBaseUpdate, N !== C && (N === null ? de.firstBaseUpdate = Q : N.next = Q, de.lastBaseUpdate = j));
    }
    if (m !== null) {
      var me = f.baseState;
      C = 0, de = Q = j = null, N = m;
      do {
        var fe = N.lane, Ie = N.eventTime;
        if ((u & fe) === fe) {
          de !== null && (de = de.next = {
            eventTime: Ie,
            lane: 0,
            tag: N.tag,
            payload: N.payload,
            callback: N.callback,
            next: null
          });
          e: {
            var Ye = n, Je = N;
            switch (fe = r, Ie = o, Je.tag) {
              case 1:
                if (Ye = Je.payload, typeof Ye == "function") {
                  me = Ye.call(Ie, me, fe);
                  break e;
                }
                me = Ye;
                break e;
              case 3:
                Ye.flags = Ye.flags & -65537 | 128;
              case 0:
                if (Ye = Je.payload, fe = typeof Ye == "function" ? Ye.call(Ie, me, fe) : Ye, fe == null) break e;
                me = he({}, me, fe);
                break e;
              case 2:
                Ea = !0;
            }
          }
          N.callback !== null && N.lane !== 0 && (n.flags |= 64, fe = f.effects, fe === null ? f.effects = [N] : fe.push(N));
        } else Ie = { eventTime: Ie, lane: fe, tag: N.tag, payload: N.payload, callback: N.callback, next: null }, de === null ? (Q = de = Ie, j = me) : de = de.next = Ie, C |= fe;
        if (N = N.next, N === null) {
          if (N = f.shared.pending, N === null) break;
          fe = N, N = fe.next, fe.next = null, f.lastBaseUpdate = fe, f.shared.pending = null;
        }
      } while (!0);
      if (de === null && (j = me), f.baseState = j, f.firstBaseUpdate = Q, f.lastBaseUpdate = de, r = f.shared.interleaved, r !== null) {
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
        if (u.callback = null, u = o, typeof f != "function") throw Error(p(191, f));
        f.call(u);
      }
    }
  }
  var Rs = {}, Ai = Ua(Rs), ks = Ua(Rs), Ts = Ua(Rs);
  function Ol(n) {
    if (n === Rs) throw Error(p(174));
    return n;
  }
  function Yd(n, r) {
    switch (tt(Ts, r), tt(ks, n), tt(Ai, Rs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ma(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ma(r, n);
    }
    dn(Ai), tt(Ai, r);
  }
  function Ll() {
    dn(Ai), dn(ks), dn(Ts);
  }
  function uh(n) {
    Ol(Ts.current);
    var r = Ol(Ai.current), o = ma(r, n.type);
    r !== o && (tt(ks, n), tt(Ai, o));
  }
  function Gc(n) {
    ks.current === n && (dn(Ai), dn(ks));
  }
  var xn = Ua(0);
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
  var Dt = we.ReactCurrentDispatcher, $t = we.ReactCurrentBatchConfig, rn = 0, Bt = null, Vn = null, ar = null, Kc = !1, Ns = !1, Ml = 0, se = 0;
  function Vt() {
    throw Error(p(321));
  }
  function pt(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++) if (!ui(n[o], r[o])) return !1;
    return !0;
  }
  function qo(n, r, o, u, f, m) {
    if (rn = m, Bt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Dt.current = n === null || n.memoizedState === null ? df : Us, n = o(u, f), Ns) {
      m = 0;
      do {
        if (Ns = !1, Ml = 0, 25 <= m) throw Error(p(301));
        m += 1, ar = Vn = null, r.updateQueue = null, Dt.current = pf, n = o(u, f);
      } while (Ns);
    }
    if (Dt.current = Pl, r = Vn !== null && Vn.next !== null, rn = 0, ar = Vn = Bt = null, Kc = !1, r) throw Error(p(300));
    return n;
  }
  function ci() {
    var n = Ml !== 0;
    return Ml = 0, n;
  }
  function Tr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ar === null ? Bt.memoizedState = ar = n : ar = ar.next = n, ar;
  }
  function On() {
    if (Vn === null) {
      var n = Bt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Vn.next;
    var r = ar === null ? Bt.memoizedState : ar.next;
    if (r !== null) ar = r, Vn = n;
    else {
      if (n === null) throw Error(p(310));
      Vn = n, n = { memoizedState: Vn.memoizedState, baseState: Vn.baseState, baseQueue: Vn.baseQueue, queue: Vn.queue, next: null }, ar === null ? Bt.memoizedState = ar = n : ar = ar.next = n;
    }
    return ar;
  }
  function uo(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Wo(n) {
    var r = On(), o = r.queue;
    if (o === null) throw Error(p(311));
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
      var N = C = null, j = null, Q = m;
      do {
        var de = Q.lane;
        if ((rn & de) === de) j !== null && (j = j.next = { lane: 0, action: Q.action, hasEagerState: Q.hasEagerState, eagerState: Q.eagerState, next: null }), u = Q.hasEagerState ? Q.eagerState : n(u, Q.action);
        else {
          var me = {
            lane: de,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null
          };
          j === null ? (N = j = me, C = u) : j = j.next = me, Bt.lanes |= de, Ii |= de;
        }
        Q = Q.next;
      } while (Q !== null && Q !== m);
      j === null ? C = u : j.next = N, ui(u, r.memoizedState) || (Hn = !0), r.memoizedState = u, r.baseState = C, r.baseQueue = j, o.lastRenderedState = u;
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
    var r = On(), o = r.queue;
    if (o === null) throw Error(p(311));
    o.lastRenderedReducer = n;
    var u = o.dispatch, f = o.pending, m = r.memoizedState;
    if (f !== null) {
      o.pending = null;
      var C = f = f.next;
      do
        m = n(m, C.action), C = C.next;
      while (C !== f);
      ui(m, r.memoizedState) || (Hn = !0), r.memoizedState = m, r.baseQueue === null && (r.baseState = m), o.lastRenderedState = m;
    }
    return [m, u];
  }
  function Xc() {
  }
  function Jc(n, r) {
    var o = Bt, u = On(), f = r(), m = !ui(u.memoizedState, f);
    if (m && (u.memoizedState = f, Hn = !0), u = u.queue, Os(tf.bind(null, o, u, n), [n]), u.getSnapshot !== r || m || ar !== null && ar.memoizedState.tag & 1) {
      if (o.flags |= 2048, Al(9, ef.bind(null, o, u, f, r), void 0, null), Zn === null) throw Error(p(349));
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
      return !ui(n, o);
    } catch {
      return !0;
    }
  }
  function rf(n) {
    var r = Ca(n, 1);
    r !== null && Fr(r, n, 1, -1);
  }
  function af(n) {
    var r = Tr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: uo, lastRenderedState: n }, r.queue = n, n = n.dispatch = zl.bind(null, Bt, n), [r.memoizedState, n];
  }
  function Al(n, r, o, u) {
    return n = { tag: n, create: r, destroy: o, deps: u, next: null }, r = Bt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Bt.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (u = o.next, o.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function of() {
    return On().memoizedState;
  }
  function Ou(n, r, o, u) {
    var f = Tr();
    Bt.flags |= n, f.memoizedState = Al(1 | r, o, void 0, u === void 0 ? null : u);
  }
  function Lu(n, r, o, u) {
    var f = On();
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
    return Ou(8390656, 8, n, r);
  }
  function Os(n, r) {
    return Lu(2048, 8, n, r);
  }
  function uf(n, r) {
    return Lu(4, 2, n, r);
  }
  function Ls(n, r) {
    return Lu(4, 4, n, r);
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
    return o = o != null ? o.concat([n]) : null, Lu(4, 4, Ul.bind(null, r, n), o);
  }
  function Ms() {
  }
  function cf(n, r) {
    var o = On();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && pt(r, u[1]) ? u[0] : (o.memoizedState = [n, r], n);
  }
  function ff(n, r) {
    var o = On();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && pt(r, u[1]) ? u[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function Gd(n, r, o) {
    return (rn & 21) === 0 ? (n.baseState && (n.baseState = !1, Hn = !0), n.memoizedState = o) : (ui(o, r) || (o = fu(), Bt.lanes |= o, Ii |= o, n.baseState = !0), r);
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
    return On().memoizedState;
  }
  function As(n, r, o) {
    var u = Fi(n);
    if (o = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null }, ia(n)) sh(r, o);
    else if (o = Bd(n, r, o, u), o !== null) {
      var f = qn();
      Fr(o, n, u, f), ln(o, r, u);
    }
  }
  function zl(n, r, o) {
    var u = Fi(n), f = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (ia(n)) sh(r, f);
    else {
      var m = n.alternate;
      if (n.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer, m !== null)) try {
        var C = r.lastRenderedState, N = m(C, o);
        if (f.hasEagerState = !0, f.eagerState = N, ui(N, C)) {
          var j = r.interleaved;
          j === null ? (f.next = f, $d(r)) : (f.next = j.next, j.next = f), r.interleaved = f;
          return;
        }
      } catch {
      }
      o = Bd(n, r, f, u), o !== null && (f = qn(), Fr(o, n, u, f), ln(o, r, u));
    }
  }
  function ia(n) {
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
  var Pl = { readContext: Ia, useCallback: Vt, useContext: Vt, useEffect: Vt, useImperativeHandle: Vt, useInsertionEffect: Vt, useLayoutEffect: Vt, useMemo: Vt, useReducer: Vt, useRef: Vt, useState: Vt, useDebugValue: Vt, useDeferredValue: Vt, useTransition: Vt, useMutableSource: Vt, useSyncExternalStore: Vt, useId: Vt, unstable_isNewReconciler: !1 }, df = { readContext: Ia, useCallback: function(n, r) {
    return Tr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ia, useEffect: lf, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Ou(
      4194308,
      4,
      Ul.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return Ou(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Ou(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = Tr();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var u = Tr();
    return r = o !== void 0 ? o(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = As.bind(null, Bt, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = Tr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: af, useDebugValue: Ms, useDeferredValue: function(n) {
    return Tr().memoizedState = n;
  }, useTransition: function() {
    var n = af(!1), r = n[0];
    return n = js.bind(null, n[1]), Tr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var u = Bt, f = Tr();
    if (yn) {
      if (o === void 0) throw Error(p(407));
      o = o();
    } else {
      if (o = r(), Zn === null) throw Error(p(349));
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
      var o = ji, u = Mi;
      o = (u & ~(1 << 32 - jr(u) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = Ml++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else o = se++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Us = {
    readContext: Ia,
    useCallback: cf,
    useContext: Ia,
    useEffect: Os,
    useImperativeHandle: sf,
    useInsertionEffect: uf,
    useLayoutEffect: Ls,
    useMemo: ff,
    useReducer: Wo,
    useRef: of,
    useState: function() {
      return Wo(uo);
    },
    useDebugValue: Ms,
    useDeferredValue: function(n) {
      var r = On();
      return Gd(r, Vn.memoizedState, n);
    },
    useTransition: function() {
      var n = Wo(uo)[0], r = On().memoizedState;
      return [n, r];
    },
    useMutableSource: Xc,
    useSyncExternalStore: Jc,
    useId: Qd,
    unstable_isNewReconciler: !1
  }, pf = { readContext: Ia, useCallback: cf, useContext: Ia, useEffect: Os, useImperativeHandle: sf, useInsertionEffect: uf, useLayoutEffect: Ls, useMemo: ff, useReducer: jl, useRef: of, useState: function() {
    return jl(uo);
  }, useDebugValue: Ms, useDeferredValue: function(n) {
    var r = On();
    return Vn === null ? r.memoizedState = n : Gd(r, Vn.memoizedState, n);
  }, useTransition: function() {
    var n = jl(uo)[0], r = On().memoizedState;
    return [n, r];
  }, useMutableSource: Xc, useSyncExternalStore: Jc, useId: Qd, unstable_isNewReconciler: !1 };
  function fi(n, r) {
    if (n && n.defaultProps) {
      r = he({}, r), n = n.defaultProps;
      for (var o in n) r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  function Kd(n, r, o, u) {
    r = n.memoizedState, o = o(u, r), o = o == null ? r : he({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var vf = { isMounted: function(n) {
    return (n = n._reactInternals) ? Et(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var u = qn(), f = Fi(n), m = lo(u, f);
    m.payload = r, o != null && (m.callback = o), r = Bo(n, m, f), r !== null && (Fr(r, n, f, u), Yc(r, n, f));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var u = qn(), f = Fi(n), m = lo(u, f);
    m.tag = 1, m.payload = r, o != null && (m.callback = o), r = Bo(n, m, f), r !== null && (Fr(r, n, f, u), Yc(r, n, f));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = qn(), u = Fi(n), f = lo(o, u);
    f.tag = 2, r != null && (f.callback = r), r = Bo(n, f, u), r !== null && (Fr(r, n, u, o), Yc(r, n, u));
  } };
  function ch(n, r, o, u, f, m, C) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, m, C) : r.prototype && r.prototype.isPureReactComponent ? !hs(o, u) || !hs(f, m) : !0;
  }
  function hf(n, r, o) {
    var u = !1, f = kr, m = r.contextType;
    return typeof m == "object" && m !== null ? m = Ia(m) : (f = In(r) ? ea : bn.current, u = r.contextTypes, m = (u = u != null) ? ta(n, f) : kr), r = new r(o, m), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = vf, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = f, n.__reactInternalMemoizedMaskedChildContext = m), r;
  }
  function fh(n, r, o, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, u), r.state !== n && vf.enqueueReplaceState(r, r.state, null);
  }
  function zs(n, r, o, u) {
    var f = n.stateNode;
    f.props = o, f.state = n.memoizedState, f.refs = {}, qd(n);
    var m = r.contextType;
    typeof m == "object" && m !== null ? f.context = Ia(m) : (m = In(r) ? ea : bn.current, f.context = ta(n, m)), f.state = n.memoizedState, m = r.getDerivedStateFromProps, typeof m == "function" && (Kd(n, r, m, o), f.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (r = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), r !== f.state && vf.enqueueReplaceState(f, f.state, null), bs(n, o, f, u), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308);
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
      Pu || (Pu = !0, Hl = u), Jd(n, r);
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
  var Ps = we.ReactCurrentOwner, Hn = !1;
  function pr(n, r, o, u) {
    r.child = n === null ? Me(r, null, o, u) : Nn(r, n.child, o, u);
  }
  function oa(n, r, o, u, f) {
    o = o.render;
    var m = r.ref;
    return En(r, f), u = qo(n, r, o, u, m, f), o = ci(), n !== null && !Hn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, Va(n, r, f)) : (yn && o && $c(r), r.flags |= 1, pr(n, r, u, f), r.child);
  }
  function Fl(n, r, o, u, f) {
    if (n === null) {
      var m = o.type;
      return typeof m == "function" && !vp(m) && m.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = m, wt(n, r, m, u, f)) : (n = ec(o.type, null, u, r, r.mode, f), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (m = n.child, (n.lanes & f) === 0) {
      var C = m.memoizedProps;
      if (o = o.compare, o = o !== null ? o : hs, o(C, u) && n.ref === r.ref) return Va(n, r, f);
    }
    return r.flags |= 1, n = Xo(m, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function wt(n, r, o, u, f) {
    if (n !== null) {
      var m = n.memoizedProps;
      if (hs(m, u) && n.ref === r.ref) if (Hn = !1, r.pendingProps = u = m, (n.lanes & f) !== 0) (n.flags & 131072) !== 0 && (Hn = !0);
      else return r.lanes = n.lanes, Va(n, r, f);
    }
    return vh(n, r, o, u, f);
  }
  function Is(n, r, o) {
    var u = r.pendingProps, f = u.children, m = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, tt(Au, xa), xa |= o;
    else {
      if ((o & 1073741824) === 0) return n = m !== null ? m.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, tt(Au, xa), xa |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = m !== null ? m.baseLanes : o, tt(Au, xa), xa |= u;
    }
    else m !== null ? (u = m.baseLanes | o, r.memoizedState = null) : u = o, tt(Au, xa), xa |= u;
    return pr(n, r, f, o), r.child;
  }
  function tp(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function vh(n, r, o, u, f) {
    var m = In(o) ? ea : bn.current;
    return m = ta(r, m), En(r, f), o = qo(n, r, o, u, m, f), u = ci(), n !== null && !Hn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, Va(n, r, f)) : (yn && u && $c(r), r.flags |= 1, pr(n, r, o, f), r.child);
  }
  function hh(n, r, o, u, f) {
    if (In(o)) {
      var m = !0;
      rr(r);
    } else m = !1;
    if (En(r, f), r.stateNode === null) Fa(n, r), hf(r, o, u), zs(r, o, u, f), u = !0;
    else if (n === null) {
      var C = r.stateNode, N = r.memoizedProps;
      C.props = N;
      var j = C.context, Q = o.contextType;
      typeof Q == "object" && Q !== null ? Q = Ia(Q) : (Q = In(o) ? ea : bn.current, Q = ta(r, Q));
      var de = o.getDerivedStateFromProps, me = typeof de == "function" || typeof C.getSnapshotBeforeUpdate == "function";
      me || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (N !== u || j !== Q) && fh(r, C, u, Q), Ea = !1;
      var fe = r.memoizedState;
      C.state = fe, bs(r, u, C, f), j = r.memoizedState, N !== u || fe !== j || Xn.current || Ea ? (typeof de == "function" && (Kd(r, o, de, u), j = r.memoizedState), (N = Ea || ch(r, o, N, u, fe, j, Q)) ? (me || typeof C.UNSAFE_componentWillMount != "function" && typeof C.componentWillMount != "function" || (typeof C.componentWillMount == "function" && C.componentWillMount(), typeof C.UNSAFE_componentWillMount == "function" && C.UNSAFE_componentWillMount()), typeof C.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = j), C.props = u, C.state = j, C.context = Q, u = N) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      C = r.stateNode, oh(n, r), N = r.memoizedProps, Q = r.type === r.elementType ? N : fi(r.type, N), C.props = Q, me = r.pendingProps, fe = C.context, j = o.contextType, typeof j == "object" && j !== null ? j = Ia(j) : (j = In(o) ? ea : bn.current, j = ta(r, j));
      var Ie = o.getDerivedStateFromProps;
      (de = typeof Ie == "function" || typeof C.getSnapshotBeforeUpdate == "function") || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (N !== me || fe !== j) && fh(r, C, u, j), Ea = !1, fe = r.memoizedState, C.state = fe, bs(r, u, C, f);
      var Ye = r.memoizedState;
      N !== me || fe !== Ye || Xn.current || Ea ? (typeof Ie == "function" && (Kd(r, o, Ie, u), Ye = r.memoizedState), (Q = Ea || ch(r, o, Q, u, fe, Ye, j) || !1) ? (de || typeof C.UNSAFE_componentWillUpdate != "function" && typeof C.componentWillUpdate != "function" || (typeof C.componentWillUpdate == "function" && C.componentWillUpdate(u, Ye, j), typeof C.UNSAFE_componentWillUpdate == "function" && C.UNSAFE_componentWillUpdate(u, Ye, j)), typeof C.componentDidUpdate == "function" && (r.flags |= 4), typeof C.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof C.componentDidUpdate != "function" || N === n.memoizedProps && fe === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || N === n.memoizedProps && fe === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Ye), C.props = u, C.state = Ye, C.context = j, u = Q) : (typeof C.componentDidUpdate != "function" || N === n.memoizedProps && fe === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || N === n.memoizedProps && fe === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return Fs(n, r, o, u, m, f);
  }
  function Fs(n, r, o, u, f, m) {
    tp(n, r);
    var C = (r.flags & 128) !== 0;
    if (!u && !C) return f && Vc(r, o, !1), Va(n, r, m);
    u = r.stateNode, Ps.current = r;
    var N = C && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && C ? (r.child = Nn(r, n.child, null, m), r.child = Nn(r, null, N, m)) : pr(n, r, N, m), r.memoizedState = u.state, f && Vc(r, o, !0), r.child;
  }
  function Mu(n) {
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
    var u = r.pendingProps, f = xn.current, m = !1, C = (r.flags & 128) !== 0, N;
    if ((N = C) || (N = n !== null && n.memoizedState === null ? !1 : (f & 2) !== 0), N ? (m = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (f |= 1), tt(xn, f & 1), n === null)
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
      return r.flags & 256 ? (r.flags &= -257, u = Xd(Error(p(422))), Vs(n, r, C, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (m = u.fallback, f = r.mode, u = Jo({ mode: "visible", children: u.children }, f, 0, null), m = po(m, f, C, null), m.flags |= 2, u.return = r, m.return = r, u.sibling = m, r.child = u, (r.mode & 1) !== 0 && Nn(r, n.child, null, C), r.child.memoizedState = np(C), r.memoizedState = yf, m);
    if ((r.mode & 1) === 0) return Vs(n, r, C, null);
    if (f.data === "$!") {
      if (u = f.nextSibling && f.nextSibling.dataset, u) var N = u.dgst;
      return u = N, m = Error(p(419)), u = Xd(m, u, void 0), Vs(n, r, C, u);
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
        f = (f & (u.suspendedLanes | C)) !== 0 ? 0 : f, f !== 0 && f !== m.retryLane && (m.retryLane = f, Ca(n, f), Fr(u, n, f, -1));
      }
      return pp(), u = Xd(Error(p(421))), Vs(n, r, C, u);
    }
    return f.data === "$?" ? (r.flags |= 128, r.child = n.child, r = eg.bind(null, n), f._reactRetry = r, null) : (n = m.treeContext, ra = Di(f.nextSibling), na = r, yn = !0, Pa = null, n !== null && (Fn[za++] = Mi, Fn[za++] = ji, Fn[za++] = _a, Mi = n.id, ji = n.overflow, _a = r), r = rp(r, u.children), r.flags |= 4096, r);
  }
  function ap(n, r, o) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), Hd(n.return, r, o);
  }
  function zr(n, r, o, u, f) {
    var m = n.memoizedState;
    m === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: o, tailMode: f } : (m.isBackwards = r, m.rendering = null, m.renderingStartTime = 0, m.last = u, m.tail = o, m.tailMode = f);
  }
  function Ui(n, r, o) {
    var u = r.pendingProps, f = u.revealOrder, m = u.tail;
    if (pr(n, r, u.children, o), u = xn.current, (u & 2) !== 0) u = u & 1 | 2, r.flags |= 128;
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
    if (tt(xn, u), (r.mode & 1) === 0) r.memoizedState = null;
    else switch (f) {
      case "forwards":
        for (o = r.child, f = null; o !== null; ) n = o.alternate, n !== null && Qc(n) === null && (f = o), o = o.sibling;
        o = f, o === null ? (f = r.child, r.child = null) : (f = o.sibling, o.sibling = null), zr(r, !1, f, o, m);
        break;
      case "backwards":
        for (o = null, f = r.child, r.child = null; f !== null; ) {
          if (n = f.alternate, n !== null && Qc(n) === null) {
            r.child = f;
            break;
          }
          n = f.sibling, f.sibling = o, o = f, f = n;
        }
        zr(r, !0, o, null, m);
        break;
      case "together":
        zr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Fa(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Va(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), Ii |= r.lanes, (o & r.childLanes) === 0) return null;
    if (n !== null && r.child !== n.child) throw Error(p(153));
    if (r.child !== null) {
      for (n = r.child, o = Xo(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; ) n = n.sibling, o = o.sibling = Xo(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function Hs(n, r, o) {
    switch (r.tag) {
      case 3:
        Mu(r), $o();
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
        tt(Sa, u._currentValue), u._currentValue = f;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (tt(xn, xn.current & 1), r.flags |= 128, null) : (o & r.child.childLanes) !== 0 ? gf(n, r, o) : (tt(xn, xn.current & 1), n = Va(n, r, o), n !== null ? n.sibling : null);
        tt(xn, xn.current & 1);
        break;
      case 19:
        if (u = (o & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (u) return Ui(n, r, o);
          r.flags |= 128;
        }
        if (f = r.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), tt(xn, xn.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Is(n, r, o);
    }
    return Va(n, r, o);
  }
  var Ha, $n, gh, _h;
  Ha = function(n, r) {
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
      n = r.stateNode, Ol(Ai.current);
      var m = null;
      switch (o) {
        case "input":
          f = ur(n, f), u = ur(n, u), m = [];
          break;
        case "select":
          f = he({}, f, { value: void 0 }), u = he({}, u, { value: void 0 }), m = [];
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
      for (Q in f) if (!u.hasOwnProperty(Q) && f.hasOwnProperty(Q) && f[Q] != null) if (Q === "style") {
        var N = f[Q];
        for (C in N) N.hasOwnProperty(C) && (o || (o = {}), o[C] = "");
      } else Q !== "dangerouslySetInnerHTML" && Q !== "children" && Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && Q !== "autoFocus" && (w.hasOwnProperty(Q) ? m || (m = []) : (m = m || []).push(Q, null));
      for (Q in u) {
        var j = u[Q];
        if (N = f?.[Q], u.hasOwnProperty(Q) && j !== N && (j != null || N != null)) if (Q === "style") if (N) {
          for (C in N) !N.hasOwnProperty(C) || j && j.hasOwnProperty(C) || (o || (o = {}), o[C] = "");
          for (C in j) j.hasOwnProperty(C) && N[C] !== j[C] && (o || (o = {}), o[C] = j[C]);
        } else o || (m || (m = []), m.push(
          Q,
          o
        )), o = j;
        else Q === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, N = N ? N.__html : void 0, j != null && N !== j && (m = m || []).push(Q, j)) : Q === "children" ? typeof j != "string" && typeof j != "number" || (m = m || []).push(Q, "" + j) : Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && (w.hasOwnProperty(Q) ? (j != null && Q === "onScroll" && Qt("scroll", n), m || N === j || (m = [])) : (m = m || []).push(Q, j));
      }
      o && (m = m || []).push("style", o);
      var Q = m;
      (r.updateQueue = Q) && (r.flags |= 4);
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
        return In(r.type) && Tu(), ir(r), null;
      case 3:
        return u = r.stateNode, Ll(), dn(Xn), dn(bn), it(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (qc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, Pa !== null && ($l(Pa), Pa = null))), $n(n, r), ir(r), null;
      case 5:
        Gc(r);
        var f = Ol(Ts.current);
        if (o = r.type, n !== null && r.stateNode != null) gh(n, r, o, u, f), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(p(166));
            return ir(r), null;
          }
          if (n = Ol(Ai.current), qc(r)) {
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
                wr(u, m), Qt("invalid", u);
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
            C = f.nodeType === 9 ? f : f.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = br(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = C.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = C.createElement(o, { is: u.is }) : (n = C.createElement(o), o === "select" && (C = n, u.multiple ? C.multiple = !0 : u.size && (C.size = u.size))) : n = C.createElementNS(n, o), n[Ni] = r, n[Cs] = u, Ha(n, r, !1, !1), r.stateNode = n;
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
                  n._wrapperState = { wasMultiple: !!u.multiple }, f = he({}, u, { value: void 0 }), Qt("invalid", n);
                  break;
                case "textarea":
                  wr(n, u), f = Qn(n, u), Qt("invalid", n);
                  break;
                default:
                  f = u;
              }
              pn(o, f), N = f;
              for (m in N) if (N.hasOwnProperty(m)) {
                var j = N[m];
                m === "style" ? un(n, j) : m === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, j != null && Si(n, j)) : m === "children" ? typeof j == "string" ? (o !== "textarea" || j !== "") && be(n, j) : typeof j == "number" && be(n, "" + j) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (w.hasOwnProperty(m) ? j != null && m === "onScroll" && Qt("scroll", n) : j != null && le(n, m, j, C));
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
          if (typeof u != "string" && r.stateNode === null) throw Error(p(166));
          if (o = Ol(Ts.current), Ol(Ai.current), qc(r)) {
            if (u = r.stateNode, o = r.memoizedProps, u[Ni] = r, (m = u.nodeValue !== o) && (n = na, n !== null)) switch (n.tag) {
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
        if (dn(xn), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (yn && ra !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) ws(), $o(), r.flags |= 98560, m = !1;
          else if (m = qc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!m) throw Error(p(318));
              if (m = r.memoizedState, m = m !== null ? m.dehydrated : null, !m) throw Error(p(317));
              m[Ni] = r;
            } else $o(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            ir(r), m = !1;
          } else Pa !== null && ($l(Pa), Pa = null), m = !0;
          if (!m) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = o, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (xn.current & 1) !== 0 ? Mn === 0 && (Mn = 3) : pp())), r.updateQueue !== null && (r.flags |= 4), ir(r), null);
      case 4:
        return Ll(), $n(n, r), n === null && xu(r.stateNode.containerInfo), ir(r), null;
      case 10:
        return Vd(r.type._context), ir(r), null;
      case 17:
        return In(r.type) && Tu(), ir(r), null;
      case 19:
        if (dn(xn), m = r.memoizedState, m === null) return ir(r), null;
        if (u = (r.flags & 128) !== 0, C = m.rendering, C === null) if (u) $s(m, !1);
        else {
          if (Mn !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (C = Qc(n), C !== null) {
              for (r.flags |= 128, $s(m, !1), u = C.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = o, o = r.child; o !== null; ) m = o, n = u, m.flags &= 14680066, C = m.alternate, C === null ? (m.childLanes = 0, m.lanes = n, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = C.childLanes, m.lanes = C.lanes, m.child = C.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = C.memoizedProps, m.memoizedState = C.memoizedState, m.updateQueue = C.updateQueue, m.type = C.type, n = C.dependencies, m.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
              return tt(xn, xn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          m.tail !== null && xt() > zu && (r.flags |= 128, u = !0, $s(m, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = Qc(C), n !== null) {
            if (r.flags |= 128, u = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), $s(m, !0), m.tail === null && m.tailMode === "hidden" && !C.alternate && !yn) return ir(r), null;
          } else 2 * xt() - m.renderingStartTime > zu && o !== 1073741824 && (r.flags |= 128, u = !0, $s(m, !1), r.lanes = 4194304);
          m.isBackwards ? (C.sibling = r.child, r.child = C) : (o = m.last, o !== null ? o.sibling = C : r.child = C, m.last = C);
        }
        return m.tail !== null ? (r = m.tail, m.rendering = r, m.tail = r.sibling, m.renderingStartTime = xt(), r.sibling = null, o = xn.current, tt(xn, u ? o & 1 | 2 : o & 1), r) : (ir(r), null);
      case 22:
      case 23:
        return dp(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && (r.mode & 1) !== 0 ? (xa & 1073741824) !== 0 && (ir(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : ir(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, r.tag));
  }
  function _f(n, r) {
    switch (Bc(r), r.tag) {
      case 1:
        return In(r.type) && Tu(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Ll(), dn(Xn), dn(bn), it(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Gc(r), null;
      case 13:
        if (dn(xn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(p(340));
          $o();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return dn(xn), null;
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
  var Bs = !1, Dr = !1, Yy = typeof WeakSet == "function" ? WeakSet : Set, Be = null;
  function ju(n, r) {
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
    if (Ss = Ma, n = ms(), Dc(n)) {
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
          var C = 0, N = -1, j = -1, Q = 0, de = 0, me = n, fe = null;
          t: for (; ; ) {
            for (var Ie; me !== o || f !== 0 && me.nodeType !== 3 || (N = C + f), me !== m || u !== 0 && me.nodeType !== 3 || (j = C + u), me.nodeType === 3 && (C += me.nodeValue.length), (Ie = me.firstChild) !== null; )
              fe = me, me = Ie;
            for (; ; ) {
              if (me === n) break t;
              if (fe === o && ++Q === f && (N = C), fe === m && ++de === u && (j = C), (Ie = me.nextSibling) !== null) break;
              me = fe, fe = me.parentNode;
            }
            me = Ie;
          }
          o = N === -1 || j === -1 ? null : { start: N, end: j };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (bl = { focusedElem: n, selectionRange: o }, Ma = !1, Be = r; Be !== null; ) if (r = Be, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Be = n;
    else for (; Be !== null; ) {
      r = Be;
      try {
        var Ye = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Ye !== null) {
              var Je = Ye.memoizedProps, jn = Ye.memoizedState, H = r.stateNode, z = H.getSnapshotBeforeUpdate(r.elementType === r.type ? Je : fi(r.type, Je), jn);
              H.__reactInternalSnapshotBeforeUpdate = z;
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
            throw Error(p(163));
        }
      } catch (pe) {
        gn(r, r.return, pe);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Be = n;
        break;
      }
      Be = r.return;
    }
    return Ye = Ch, Ch = !1, Ye;
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
    r !== null && (n.alternate = null, Cf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ni], delete r[Cs], delete r[Es], delete r[ku], delete r[qy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
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
  var Ln = null, Pr = !1;
  function Ir(n, r, o) {
    for (o = o.child; o !== null; ) xh(n, r, o), o = o.sibling;
  }
  function xh(n, r, o) {
    if (Jr && typeof Jr.onCommitFiberUnmount == "function") try {
      Jr.onCommitFiberUnmount(To, o);
    } catch {
    }
    switch (o.tag) {
      case 5:
        Dr || ju(o, r);
      case 6:
        var u = Ln, f = Pr;
        Ln = null, Ir(n, r, o), Ln = u, Pr = f, Ln !== null && (Pr ? (n = Ln, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : Ln.removeChild(o.stateNode));
        break;
      case 18:
        Ln !== null && (Pr ? (n = Ln, o = o.stateNode, n.nodeType === 8 ? Ru(n.parentNode, o) : n.nodeType === 1 && Ru(n, o), oi(n)) : Ru(Ln, o.stateNode));
        break;
      case 4:
        u = Ln, f = Pr, Ln = o.stateNode.containerInfo, Pr = !0, Ir(n, r, o), Ln = u, Pr = f;
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
        Ir(n, r, o);
        break;
      case 1:
        if (!Dr && (ju(o, r), u = o.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = o.memoizedProps, u.state = o.memoizedState, u.componentWillUnmount();
        } catch (N) {
          gn(o, r, N);
        }
        Ir(n, r, o);
        break;
      case 21:
        Ir(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (Dr = (u = Dr) || o.memoizedState !== null, Ir(n, r, o), Dr = u) : Ir(n, r, o);
        break;
      default:
        Ir(n, r, o);
    }
  }
  function wh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new Yy()), r.forEach(function(u) {
        var f = Mh.bind(null, n, u);
        o.has(u) || (o.add(u), u.then(f, f));
      });
    }
  }
  function di(n, r) {
    var o = r.deletions;
    if (o !== null) for (var u = 0; u < o.length; u++) {
      var f = o[u];
      try {
        var m = n, C = r, N = C;
        e: for (; N !== null; ) {
          switch (N.tag) {
            case 5:
              Ln = N.stateNode, Pr = !1;
              break e;
            case 3:
              Ln = N.stateNode.containerInfo, Pr = !0;
              break e;
            case 4:
              Ln = N.stateNode.containerInfo, Pr = !0;
              break e;
          }
          N = N.return;
        }
        if (Ln === null) throw Error(p(160));
        xh(m, C, f), Ln = null, Pr = !1;
        var j = f.alternate;
        j !== null && (j.return = null), f.return = null;
      } catch (Q) {
        gn(f, r, Q);
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
        if (di(r, n), la(n), u & 4) {
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
        di(r, n), la(n), u & 512 && o !== null && ju(o, o.return);
        break;
      case 5:
        if (di(r, n), la(n), u & 512 && o !== null && ju(o, o.return), n.flags & 32) {
          var f = n.stateNode;
          try {
            be(f, "");
          } catch (Je) {
            gn(n, n.return, Je);
          }
        }
        if (u & 4 && (f = n.stateNode, f != null)) {
          var m = n.memoizedProps, C = o !== null ? o.memoizedProps : m, N = n.type, j = n.updateQueue;
          if (n.updateQueue = null, j !== null) try {
            N === "input" && m.type === "radio" && m.name != null && Gn(f, m), nr(N, C);
            var Q = nr(N, m);
            for (C = 0; C < j.length; C += 2) {
              var de = j[C], me = j[C + 1];
              de === "style" ? un(f, me) : de === "dangerouslySetInnerHTML" ? Si(f, me) : de === "children" ? be(f, me) : le(f, de, me, Q);
            }
            switch (N) {
              case "input":
                Xr(f, m);
                break;
              case "textarea":
                Ja(f, m);
                break;
              case "select":
                var fe = f._wrapperState.wasMultiple;
                f._wrapperState.wasMultiple = !!m.multiple;
                var Ie = m.value;
                Ie != null ? Tn(f, !!m.multiple, Ie, !1) : fe !== !!m.multiple && (m.defaultValue != null ? Tn(
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
        if (di(r, n), la(n), u & 4) {
          if (n.stateNode === null) throw Error(p(162));
          f = n.stateNode, m = n.memoizedProps;
          try {
            f.nodeValue = m;
          } catch (Je) {
            gn(n, n.return, Je);
          }
        }
        break;
      case 3:
        if (di(r, n), la(n), u & 4 && o !== null && o.memoizedState.isDehydrated) try {
          oi(r.containerInfo);
        } catch (Je) {
          gn(n, n.return, Je);
        }
        break;
      case 4:
        di(r, n), la(n);
        break;
      case 13:
        di(r, n), la(n), f = n.child, f.flags & 8192 && (m = f.memoizedState !== null, f.stateNode.isHidden = m, !m || f.alternate !== null && f.alternate.memoizedState !== null || (sp = xt())), u & 4 && wh(n);
        break;
      case 22:
        if (de = o !== null && o.memoizedState !== null, n.mode & 1 ? (Dr = (Q = Dr) || de, di(r, n), Dr = Q) : di(r, n), la(n), u & 8192) {
          if (Q = n.memoizedState !== null, (n.stateNode.isHidden = Q) && !de && (n.mode & 1) !== 0) for (Be = n, de = n.child; de !== null; ) {
            for (me = Be = de; Be !== null; ) {
              switch (fe = Be, Ie = fe.child, fe.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  qs(4, fe, fe.return);
                  break;
                case 1:
                  ju(fe, fe.return);
                  var Ye = fe.stateNode;
                  if (typeof Ye.componentWillUnmount == "function") {
                    u = fe, o = fe.return;
                    try {
                      r = u, Ye.props = r.memoizedProps, Ye.state = r.memoizedState, Ye.componentWillUnmount();
                    } catch (Je) {
                      gn(u, o, Je);
                    }
                  }
                  break;
                case 5:
                  ju(fe, fe.return);
                  break;
                case 22:
                  if (fe.memoizedState !== null) {
                    Gs(me);
                    continue;
                  }
              }
              Ie !== null ? (Ie.return = fe, Be = Ie) : Gs(me);
            }
            de = de.sibling;
          }
          e: for (de = null, me = n; ; ) {
            if (me.tag === 5) {
              if (de === null) {
                de = me;
                try {
                  f = me.stateNode, Q ? (m = f.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (N = me.stateNode, j = me.memoizedProps.style, C = j != null && j.hasOwnProperty("display") ? j.display : null, N.style.display = Gt("display", C));
                } catch (Je) {
                  gn(n, n.return, Je);
                }
              }
            } else if (me.tag === 6) {
              if (de === null) try {
                me.stateNode.nodeValue = Q ? "" : me.memoizedProps;
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
              de === me && (de = null), me = me.return;
            }
            de === me && (de = null), me.sibling.return = me.return, me = me.sibling;
          }
        }
        break;
      case 19:
        di(r, n), la(n), u & 4 && wh(n);
        break;
      case 21:
        break;
      default:
        di(
          r,
          n
        ), la(n);
    }
  }
  function la(n) {
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
          throw Error(p(160));
        }
        switch (u.tag) {
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (be(f, ""), u.flags &= -33);
            var m = so(n);
            Pi(n, m, f);
            break;
          case 3:
          case 4:
            var C = u.stateNode.containerInfo, N = so(n);
            zi(n, N, C);
            break;
          default:
            throw Error(p(161));
        }
      } catch (j) {
        gn(n, n.return, j);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Gy(n, r, o) {
    Be = n, lp(n);
  }
  function lp(n, r, o) {
    for (var u = (n.mode & 1) !== 0; Be !== null; ) {
      var f = Be, m = f.child;
      if (f.tag === 22 && u) {
        var C = f.memoizedState !== null || Bs;
        if (!C) {
          var N = f.alternate, j = N !== null && N.memoizedState !== null || Dr;
          N = Bs;
          var Q = Dr;
          if (Bs = C, (Dr = j) && !Q) for (Be = f; Be !== null; ) C = Be, j = C.child, C.tag === 22 && C.memoizedState !== null ? up(f) : j !== null ? (j.return = C, Be = j) : up(f);
          for (; m !== null; ) Be = m, lp(m), m = m.sibling;
          Be = f, Bs = N, Dr = Q;
        }
        bh(n);
      } else (f.subtreeFlags & 8772) !== 0 && m !== null ? (m.return = f, Be = m) : bh(n);
    }
  }
  function bh(n) {
    for (; Be !== null; ) {
      var r = Be;
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
                var f = r.elementType === r.type ? o.memoizedProps : fi(r.type, o.memoizedProps);
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
                var Q = r.alternate;
                if (Q !== null) {
                  var de = Q.memoizedState;
                  if (de !== null) {
                    var me = de.dehydrated;
                    me !== null && oi(me);
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
              throw Error(p(163));
          }
          Dr || r.flags & 512 && ip(r);
        } catch (fe) {
          gn(r, r.return, fe);
        }
      }
      if (r === n) {
        Be = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, Be = o;
        break;
      }
      Be = r.return;
    }
  }
  function Gs(n) {
    for (; Be !== null; ) {
      var r = Be;
      if (r === n) {
        Be = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, Be = o;
        break;
      }
      Be = r.return;
    }
  }
  function up(n) {
    for (; Be !== null; ) {
      var r = Be;
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
        Be = null;
        break;
      }
      var N = r.sibling;
      if (N !== null) {
        N.return = r.return, Be = N;
        break;
      }
      Be = r.return;
    }
  }
  var Qy = Math.ceil, Go = we.ReactCurrentDispatcher, Vl = we.ReactCurrentOwner, vr = we.ReactCurrentBatchConfig, At = 0, Zn = null, Bn = null, hr = 0, xa = 0, Au = Ua(0), Mn = 0, Qs = null, Ii = 0, Uu = 0, Ef = 0, Ks = null, ua = null, sp = 0, zu = 1 / 0, wa = null, Pu = !1, Hl = null, Qo = null, xf = !1, co = null, Xs = 0, Ko = 0, Iu = null, Js = -1, Nr = 0;
  function qn() {
    return (At & 6) !== 0 ? xt() : Js !== -1 ? Js : Js = xt();
  }
  function Fi(n) {
    return (n.mode & 1) === 0 ? 1 : (At & 2) !== 0 && hr !== 0 ? hr & -hr : Wy.transition !== null ? (Nr === 0 && (Nr = fu()), Nr) : (n = Ht, n !== 0 || (n = window.event, n = n === void 0 ? 16 : gu(n.type)), n);
  }
  function Fr(n, r, o, u) {
    if (50 < Ko) throw Ko = 0, Iu = null, Error(p(185));
    Xi(n, o, u), ((At & 2) === 0 || n !== Zn) && (n === Zn && ((At & 2) === 0 && (Uu |= o), Mn === 4 && pi(n, hr)), sa(n, u), o === 1 && At === 0 && (r.mode & 1) === 0 && (zu = xt() + 500, Du && Li()));
  }
  function sa(n, r) {
    var o = n.callbackNode;
    ml(n, r);
    var u = ii(n, n === Zn ? hr : 0);
    if (u === 0) o !== null && cr(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (o != null && cr(o), r === 1) n.tag === 0 ? Io(cp.bind(null, n)) : Hc(cp.bind(null, n)), bu(function() {
        (At & 6) === 0 && Li();
      }), o = null;
      else {
        switch (pu(u)) {
          case 1:
            o = ri;
            break;
          case 4:
            o = vl;
            break;
          case 16:
            o = hl;
            break;
          case 536870912:
            o = uu;
            break;
          default:
            o = hl;
        }
        o = Ah(o, wf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function wf(n, r) {
    if (Js = -1, Nr = 0, (At & 6) !== 0) throw Error(p(327));
    var o = n.callbackNode;
    if (Fu() && n.callbackNode !== o) return null;
    var u = ii(n, n === Zn ? hr : 0);
    if (u === 0) return null;
    if ((u & 30) !== 0 || (u & n.expiredLanes) !== 0 || r) r = bf(n, u);
    else {
      r = u;
      var f = At;
      At |= 2;
      var m = kh();
      (Zn !== n || hr !== r) && (wa = null, zu = xt() + 500, fo(n, r));
      do
        try {
          Th();
          break;
        } catch (N) {
          Rh(n, N);
        }
      while (!0);
      Fd(), Go.current = m, At = f, Bn !== null ? r = 0 : (Zn = null, hr = 0, r = Mn);
    }
    if (r !== 0) {
      if (r === 2 && (f = No(n), f !== 0 && (u = f, r = Zs(n, f))), r === 1) throw o = Qs, fo(n, 0), pi(n, u), sa(n, xt()), o;
      if (r === 6) pi(n, u);
      else {
        if (f = n.current.alternate, (u & 30) === 0 && !Ky(f) && (r = bf(n, u), r === 2 && (m = No(n), m !== 0 && (u = m, r = Zs(n, m))), r === 1)) throw o = Qs, fo(n, 0), pi(n, u), sa(n, xt()), o;
        switch (n.finishedWork = f, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            ql(n, ua, wa);
            break;
          case 3:
            if (pi(n, u), (u & 130023424) === u && (r = sp + 500 - xt(), 10 < r)) {
              if (ii(n, 0) !== 0) break;
              if (f = n.suspendedLanes, (f & u) !== u) {
                qn(), n.pingedLanes |= n.suspendedLanes & f;
                break;
              }
              n.timeoutHandle = Ic(ql.bind(null, n, ua, wa), r);
              break;
            }
            ql(n, ua, wa);
            break;
          case 4:
            if (pi(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, f = -1; 0 < u; ) {
              var C = 31 - jr(u);
              m = 1 << C, C = r[C], C > f && (f = C), u &= ~m;
            }
            if (u = f, u = xt() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Qy(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = Ic(ql.bind(null, n, ua, wa), u);
              break;
            }
            ql(n, ua, wa);
            break;
          case 5:
            ql(n, ua, wa);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    return sa(n, xt()), n.callbackNode === o ? wf.bind(null, n) : null;
  }
  function Zs(n, r) {
    var o = Ks;
    return n.current.memoizedState.isDehydrated && (fo(n, r).flags |= 256), n = bf(n, r), n !== 2 && (r = ua, ua = o, r !== null && $l(r)), n;
  }
  function $l(n) {
    ua === null ? ua = n : ua.push.apply(ua, n);
  }
  function Ky(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null)) for (var u = 0; u < o.length; u++) {
          var f = o[u], m = f.getSnapshot;
          f = f.value;
          try {
            if (!ui(m(), f)) return !1;
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
  function pi(n, r) {
    for (r &= ~Ef, r &= ~Uu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - jr(r), u = 1 << o;
      n[o] = -1, r &= ~u;
    }
  }
  function cp(n) {
    if ((At & 6) !== 0) throw Error(p(327));
    Fu();
    var r = ii(n, 0);
    if ((r & 1) === 0) return sa(n, xt()), null;
    var o = bf(n, r);
    if (n.tag !== 0 && o === 2) {
      var u = No(n);
      u !== 0 && (r = u, o = Zs(n, u));
    }
    if (o === 1) throw o = Qs, fo(n, 0), pi(n, r), sa(n, xt()), o;
    if (o === 6) throw Error(p(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, ql(n, ua, wa), sa(n, xt()), null;
  }
  function fp(n, r) {
    var o = At;
    At |= 1;
    try {
      return n(r);
    } finally {
      At = o, At === 0 && (zu = xt() + 500, Du && Li());
    }
  }
  function Bl(n) {
    co !== null && co.tag === 0 && (At & 6) === 0 && Fu();
    var r = At;
    At |= 1;
    var o = vr.transition, u = Ht;
    try {
      if (vr.transition = null, Ht = 1, n) return n();
    } finally {
      Ht = u, vr.transition = o, At = r, (At & 6) === 0 && Li();
    }
  }
  function dp() {
    xa = Au.current, dn(Au);
  }
  function fo(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Ad(o)), Bn !== null) for (o = Bn.return; o !== null; ) {
      var u = o;
      switch (Bc(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && Tu();
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
          dn(xn);
          break;
        case 19:
          dn(xn);
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
    if (Zn = n, Bn = n = Xo(n.current, null), hr = xa = r, Mn = 0, Qs = null, Ef = Uu = Ii = 0, ua = Ks = null, Nl !== null) {
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
        if (rn = 0, ar = Vn = Bt = null, Ns = !1, Ml = 0, Vl.current = null, o === null || o.return === null) {
          Mn = 1, Qs = r, Bn = null;
          break;
        }
        e: {
          var m = n, C = o.return, N = o, j = r;
          if (r = hr, N.flags |= 32768, j !== null && typeof j == "object" && typeof j.then == "function") {
            var Q = j, de = N, me = de.tag;
            if ((de.mode & 1) === 0 && (me === 0 || me === 11 || me === 15)) {
              var fe = de.alternate;
              fe ? (de.updateQueue = fe.updateQueue, de.memoizedState = fe.memoizedState, de.lanes = fe.lanes) : (de.updateQueue = null, de.memoizedState = null);
            }
            var Ie = ph(C);
            if (Ie !== null) {
              Ie.flags &= -257, Yo(Ie, C, N, m, r), Ie.mode & 1 && ep(m, Q, r), r = Ie, j = Q;
              var Ye = r.updateQueue;
              if (Ye === null) {
                var Je = /* @__PURE__ */ new Set();
                Je.add(j), r.updateQueue = Je;
              } else Ye.add(j);
              break e;
            } else {
              if ((r & 1) === 0) {
                ep(m, Q, r), pp();
                break e;
              }
              j = Error(p(426));
            }
          } else if (yn && N.mode & 1) {
            var jn = ph(C);
            if (jn !== null) {
              (jn.flags & 65536) === 0 && (jn.flags |= 256), Yo(jn, C, N, m, r), oo(Il(j, N));
              break e;
            }
          }
          m = j = Il(j, N), Mn !== 4 && (Mn = 2), Ks === null ? Ks = [m] : Ks.push(m), m = C;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, r &= -r, m.lanes |= r;
                var H = dh(m, j, r);
                lh(m, H);
                break e;
              case 1:
                N = j;
                var z = m.type, W = m.stateNode;
                if ((m.flags & 128) === 0 && (typeof z.getDerivedStateFromError == "function" || W !== null && typeof W.componentDidCatch == "function" && (Qo === null || !Qo.has(W)))) {
                  m.flags |= 65536, r &= -r, m.lanes |= r;
                  var pe = Zd(m, N, r);
                  lh(m, pe);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        Nh(o);
      } catch (Ge) {
        r = Ge, Bn === o && o !== null && (Bn = o = o.return);
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
    (Mn === 0 || Mn === 3 || Mn === 2) && (Mn = 4), Zn === null || (Ii & 268435455) === 0 && (Uu & 268435455) === 0 || pi(Zn, hr);
  }
  function bf(n, r) {
    var o = At;
    At |= 2;
    var u = kh();
    (Zn !== n || hr !== r) && (wa = null, fo(n, r));
    do
      try {
        Xy();
        break;
      } catch (f) {
        Rh(n, f);
      }
    while (!0);
    if (Fd(), At = o, Go.current = u, Bn !== null) throw Error(p(261));
    return Zn = null, hr = 0, Mn;
  }
  function Xy() {
    for (; Bn !== null; ) Dh(Bn);
  }
  function Th() {
    for (; Bn !== null && !ti(); ) Dh(Bn);
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
          Mn = 6, Bn = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        Bn = r;
        return;
      }
      Bn = r = n;
    } while (r !== null);
    Mn === 0 && (Mn = 5);
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
      Fu();
    while (co !== null);
    if ((At & 6) !== 0) throw Error(p(327));
    o = n.finishedWork;
    var f = n.finishedLanes;
    if (o === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(p(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var m = o.lanes | o.childLanes;
    if (vd(n, m), n === Zn && (Bn = Zn = null, hr = 0), (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || xf || (xf = !0, Ah(hl, function() {
      return Fu(), null;
    })), m = (o.flags & 15990) !== 0, (o.subtreeFlags & 15990) !== 0 || m) {
      m = vr.transition, vr.transition = null;
      var C = Ht;
      Ht = 1;
      var N = At;
      At |= 4, Vl.current = null, Eh(n, o), op(o, n), Cu(bl), Ma = !!Ss, bl = Ss = null, n.current = o, Gy(o), ni(), At = N, Ht = C, vr.transition = m;
    } else n.current = o;
    if (xf && (xf = !1, co = n, Xs = f), m = n.pendingLanes, m === 0 && (Qo = null), os(o.stateNode), sa(n, xt()), r !== null) for (u = n.onRecoverableError, o = 0; o < r.length; o++) f = r[o], u(f.value, { componentStack: f.stack, digest: f.digest });
    if (Pu) throw Pu = !1, n = Hl, Hl = null, n;
    return (Xs & 1) !== 0 && n.tag !== 0 && Fu(), m = n.pendingLanes, (m & 1) !== 0 ? n === Iu ? Ko++ : (Ko = 0, Iu = n) : Ko = 0, Li(), null;
  }
  function Fu() {
    if (co !== null) {
      var n = pu(Xs), r = vr.transition, o = Ht;
      try {
        if (vr.transition = null, Ht = 16 > n ? 16 : n, co === null) var u = !1;
        else {
          if (n = co, co = null, Xs = 0, (At & 6) !== 0) throw Error(p(331));
          var f = At;
          for (At |= 4, Be = n.current; Be !== null; ) {
            var m = Be, C = m.child;
            if ((Be.flags & 16) !== 0) {
              var N = m.deletions;
              if (N !== null) {
                for (var j = 0; j < N.length; j++) {
                  var Q = N[j];
                  for (Be = Q; Be !== null; ) {
                    var de = Be;
                    switch (de.tag) {
                      case 0:
                      case 11:
                      case 15:
                        qs(8, de, m);
                    }
                    var me = de.child;
                    if (me !== null) me.return = de, Be = me;
                    else for (; Be !== null; ) {
                      de = Be;
                      var fe = de.sibling, Ie = de.return;
                      if (Cf(de), de === Q) {
                        Be = null;
                        break;
                      }
                      if (fe !== null) {
                        fe.return = Ie, Be = fe;
                        break;
                      }
                      Be = Ie;
                    }
                  }
                }
                var Ye = m.alternate;
                if (Ye !== null) {
                  var Je = Ye.child;
                  if (Je !== null) {
                    Ye.child = null;
                    do {
                      var jn = Je.sibling;
                      Je.sibling = null, Je = jn;
                    } while (Je !== null);
                  }
                }
                Be = m;
              }
            }
            if ((m.subtreeFlags & 2064) !== 0 && C !== null) C.return = m, Be = C;
            else e: for (; Be !== null; ) {
              if (m = Be, (m.flags & 2048) !== 0) switch (m.tag) {
                case 0:
                case 11:
                case 15:
                  qs(9, m, m.return);
              }
              var H = m.sibling;
              if (H !== null) {
                H.return = m.return, Be = H;
                break e;
              }
              Be = m.return;
            }
          }
          var z = n.current;
          for (Be = z; Be !== null; ) {
            C = Be;
            var W = C.child;
            if ((C.subtreeFlags & 2064) !== 0 && W !== null) W.return = C, Be = W;
            else e: for (C = z; Be !== null; ) {
              if (N = Be, (N.flags & 2048) !== 0) try {
                switch (N.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ws(9, N);
                }
              } catch (Ge) {
                gn(N, N.return, Ge);
              }
              if (N === C) {
                Be = null;
                break e;
              }
              var pe = N.sibling;
              if (pe !== null) {
                pe.return = N.return, Be = pe;
                break e;
              }
              Be = N.return;
            }
          }
          if (At = f, Li(), Jr && typeof Jr.onPostCommitFiberRoot == "function") try {
            Jr.onPostCommitFiberRoot(To, n);
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
  function Oh(n, r, o) {
    r = Il(o, r), r = dh(n, r, 1), n = Bo(n, r, 1), r = qn(), n !== null && (Xi(n, 1, r), sa(n, r));
  }
  function gn(n, r, o) {
    if (n.tag === 3) Oh(n, n, o);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Oh(r, n, o);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Qo === null || !Qo.has(u))) {
          n = Il(o, n), n = Zd(r, n, 1), r = Bo(r, n, 1), n = qn(), r !== null && (Xi(r, 1, n), sa(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Zy(n, r, o) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = qn(), n.pingedLanes |= n.suspendedLanes & o, Zn === n && (hr & o) === o && (Mn === 4 || Mn === 3 && (hr & 130023424) === hr && 500 > xt() - sp ? fo(n, 0) : Ef |= o), sa(n, r);
  }
  function Lh(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = ga, ga <<= 1, (ga & 130023424) === 0 && (ga = 4194304)));
    var o = qn();
    n = Ca(n, r), n !== null && (Xi(n, r, o), sa(n, o));
  }
  function eg(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), Lh(n, o);
  }
  function Mh(n, r) {
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
        throw Error(p(314));
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
        Fa(n, r), n = r.pendingProps;
        var f = ta(r, bn.current);
        En(r, o), f = qo(null, r, u, n, f, o);
        var m = ci();
        return r.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, In(u) ? (m = !0, rr(r)) : m = !1, r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, qd(r), f.updater = vf, r.stateNode = f, f._reactInternals = r, zs(r, u, n, o), r = Fs(null, r, u, !0, m, o)) : (r.tag = 0, yn && m && $c(r), pr(null, r, f, o), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Fa(n, r), n = r.pendingProps, f = u._init, u = f(u._payload), r.type = u, f = r.tag = ng(u), n = fi(u, n), f) {
            case 0:
              r = vh(null, r, u, n, o);
              break e;
            case 1:
              r = hh(null, r, u, n, o);
              break e;
            case 11:
              r = oa(null, r, u, n, o);
              break e;
            case 14:
              r = Fl(null, r, u, fi(u.type, n), o);
              break e;
          }
          throw Error(p(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : fi(u, f), vh(n, r, u, f, o);
      case 1:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : fi(u, f), hh(n, r, u, f, o);
      case 3:
        e: {
          if (Mu(r), n === null) throw Error(p(387));
          u = r.pendingProps, m = r.memoizedState, f = m.element, oh(n, r), bs(r, u, null, o);
          var C = r.memoizedState;
          if (u = C.element, m.isDehydrated) if (m = { element: u, isDehydrated: !1, cache: C.cache, pendingSuspenseBoundaries: C.pendingSuspenseBoundaries, transitions: C.transitions }, r.updateQueue.baseState = m, r.memoizedState = m, r.flags & 256) {
            f = Il(Error(p(423)), r), r = mh(n, r, u, o, f);
            break e;
          } else if (u !== f) {
            f = Il(Error(p(424)), r), r = mh(n, r, u, o, f);
            break e;
          } else for (ra = Di(r.stateNode.containerInfo.firstChild), na = r, yn = !0, Pa = null, o = Me(r, null, u, o), r.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if ($o(), u === f) {
              r = Va(n, r, o);
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
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : fi(u, f), oa(n, r, u, f, o);
      case 7:
        return pr(n, r, r.pendingProps, o), r.child;
      case 8:
        return pr(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return pr(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (u = r.type._context, f = r.pendingProps, m = r.memoizedProps, C = f.value, tt(Sa, u._currentValue), u._currentValue = C, m !== null) if (ui(m.value, C)) {
            if (m.children === f.children && !Xn.current) {
              r = Va(n, r, o);
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
                    var Q = m.updateQueue;
                    if (Q !== null) {
                      Q = Q.shared;
                      var de = Q.pending;
                      de === null ? j.next = j : (j.next = de.next, de.next = j), Q.pending = j;
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
              if (C = m.return, C === null) throw Error(p(341));
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
        return f = r.type, u = r.pendingProps.children, En(r, o), f = Ia(f), u = u(f), r.flags |= 1, pr(n, r, u, o), r.child;
      case 14:
        return u = r.type, f = fi(u, r.pendingProps), f = fi(u.type, f), Fl(n, r, u, f, o);
      case 15:
        return wt(n, r, r.type, r.pendingProps, o);
      case 17:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : fi(u, f), Fa(n, r), r.tag = 1, In(u) ? (n = !0, rr(r)) : n = !1, En(r, o), hf(r, u, f), zs(r, u, f, o), Fs(null, r, u, !0, n, o);
      case 19:
        return Ui(n, r, o);
      case 22:
        return Is(n, r, o);
    }
    throw Error(p(156, r.tag));
  };
  function Ah(n, r) {
    return vn(n, r);
  }
  function tg(n, r, o, u) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function $a(n, r, o, u) {
    return new tg(n, r, o, u);
  }
  function vp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function ng(n) {
    if (typeof n == "function") return vp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === V) return 11;
      if (n === He) return 14;
    }
    return 2;
  }
  function Xo(n, r) {
    var o = n.alternate;
    return o === null ? (o = $a(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function ec(n, r, o, u, f, m) {
    var C = 2;
    if (u = n, typeof n == "function") vp(n) && (C = 1);
    else if (typeof n == "string") C = 5;
    else e: switch (n) {
      case Ve:
        return po(o.children, f, m, r);
      case We:
        C = 8, f |= 8;
        break;
      case nt:
        return n = $a(12, o, r, f | 2), n.elementType = nt, n.lanes = m, n;
      case J:
        return n = $a(13, o, r, f), n.elementType = J, n.lanes = m, n;
      case Ee:
        return n = $a(19, o, r, f), n.elementType = Ee, n.lanes = m, n;
      case xe:
        return Jo(o, f, m, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case ot:
            C = 10;
            break e;
          case X:
            C = 9;
            break e;
          case V:
            C = 11;
            break e;
          case He:
            C = 14;
            break e;
          case De:
            C = 16, u = null;
            break e;
        }
        throw Error(p(130, n == null ? n : typeof n, ""));
    }
    return r = $a(C, o, r, f), r.elementType = n, r.type = u, r.lanes = m, r;
  }
  function po(n, r, o, u) {
    return n = $a(7, n, u, r), n.lanes = o, n;
  }
  function Jo(n, r, o, u) {
    return n = $a(22, n, u, r), n.elementType = xe, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function hp(n, r, o) {
    return n = $a(6, n, null, r), n.lanes = o, n;
  }
  function Rf(n, r, o) {
    return r = $a(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Uh(n, r, o, u, f) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = du(0), this.expirationTimes = du(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = du(0), this.identifierPrefix = u, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null;
  }
  function kf(n, r, o, u, f, m, C, N, j) {
    return n = new Uh(n, r, o, N, j), r === 1 ? (r = 1, m === !0 && (r |= 8)) : r = 0, m = $a(3, null, null, r), n.current = m, m.stateNode = n, m.memoizedState = { element: u, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, qd(m), n;
  }
  function rg(n, r, o) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ke, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: o };
  }
  function mp(n) {
    if (!n) return kr;
    n = n._reactInternals;
    e: {
      if (Et(n) !== n || n.tag !== 1) throw Error(p(170));
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
      throw Error(p(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (In(o)) return xs(n, o, r);
    }
    return r;
  }
  function zh(n, r, o, u, f, m, C, N, j) {
    return n = kf(o, u, !0, n, f, m, C, N, j), n.context = mp(null), o = n.current, u = qn(), f = Fi(o), m = lo(u, f), m.callback = r ?? null, Bo(o, m, f), n.current.lanes = f, Xi(n, f, u), sa(n, u), n;
  }
  function Tf(n, r, o, u) {
    var f = r.current, m = qn(), C = Fi(f);
    return o = mp(o), r.context === null ? r.context = o : r.pendingContext = o, r = lo(m, C), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Bo(f, r, C), n !== null && (Fr(n, f, C, m), Yc(n, f, C)), C;
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
  Of.prototype.render = gp.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(p(409));
    Tf(n, r, null, null);
  }, Of.prototype.unmount = gp.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Bl(function() {
        Tf(null, n, null, null);
      }), r[ro] = null;
    }
  };
  function Of(n) {
    this._internalRoot = n;
  }
  Of.prototype.unstable_scheduleHydration = function(n) {
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
          var Q = Df(C);
          m.call(Q);
        };
      }
      var C = zh(r, u, n, 0, null, !1, !1, "", Ih);
      return n._reactRootContainer = C, n[ro] = C.current, xu(n.nodeType === 8 ? n.parentNode : n), Bl(), C;
    }
    for (; f = n.lastChild; ) n.removeChild(f);
    if (typeof u == "function") {
      var N = u;
      u = function() {
        var Q = Df(j);
        N.call(Q);
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
          var o = ai(r.pendingLanes);
          o !== 0 && (Ji(r, o | 1), sa(r, xt()), (At & 6) === 0 && (zu = xt() + 500, Li()));
        }
        break;
      case 13:
        Bl(function() {
          var u = Ca(n, 1);
          if (u !== null) {
            var f = qn();
            Fr(u, n, 1, f);
          }
        }), Nf(n, 1);
    }
  }, ls = function(n) {
    if (n.tag === 13) {
      var r = Ca(n, 134217728);
      if (r !== null) {
        var o = qn();
        Fr(r, n, 134217728, o);
      }
      Nf(n, 134217728);
    }
  }, wi = function(n) {
    if (n.tag === 13) {
      var r = Fi(n), o = Ca(n, r);
      if (o !== null) {
        var u = qn();
        Fr(o, n, r, u);
      }
      Nf(n, r);
    }
  }, gt = function() {
    return Ht;
  }, vu = function(n, r) {
    var o = Ht;
    try {
      return Ht = n, r();
    } finally {
      Ht = o;
    }
  }, Zt = function(n, r, o) {
    switch (r) {
      case "input":
        if (Xr(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; ) o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var u = o[r];
            if (u !== n && u.form === n.form) {
              var f = Cn(u);
              if (!f) throw Error(p(90));
              Or(u), Xr(u, f);
            }
          }
        }
        break;
      case "textarea":
        Ja(n, o);
        break;
      case "select":
        r = o.value, r != null && Tn(n, !!o.multiple, r, !1);
    }
  }, dl = fp, bo = Bl;
  var ig = { usingClientEntryPoint: !1, Events: [at, si, Cn, Ki, fl, fp] }, nc = { findFiberByHostInstance: Rl, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Fh = { bundleType: nc.bundleType, version: nc.version, rendererPackageName: nc.rendererPackageName, rendererConfig: nc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: we.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Dn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: nc.findFiberByHostInstance || Ph, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zo.isDisabled && Zo.supportsFiber) try {
      To = Zo.inject(Fh), Jr = Zo;
    } catch {
    }
  }
  return Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ig, Qa.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!_p(r)) throw Error(p(200));
    return rg(n, r, null, o);
  }, Qa.createRoot = function(n, r) {
    if (!_p(n)) throw Error(p(299));
    var o = !1, u = "", f = Wl;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (f = r.onRecoverableError)), r = kf(n, 1, !1, null, null, o, !1, u, f), n[ro] = r.current, xu(n.nodeType === 8 ? n.parentNode : n), new gp(r);
  }, Qa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(p(188)) : (n = Object.keys(n).join(","), Error(p(268, n)));
    return n = Dn(r), n = n === null ? null : n.stateNode, n;
  }, Qa.flushSync = function(n) {
    return Bl(n);
  }, Qa.hydrate = function(n, r, o) {
    if (!Lf(r)) throw Error(p(200));
    return tc(null, n, r, !0, o);
  }, Qa.hydrateRoot = function(n, r, o) {
    if (!_p(n)) throw Error(p(405));
    var u = o != null && o.hydratedSources || null, f = !1, m = "", C = Wl;
    if (o != null && (o.unstable_strictMode === !0 && (f = !0), o.identifierPrefix !== void 0 && (m = o.identifierPrefix), o.onRecoverableError !== void 0 && (C = o.onRecoverableError)), r = zh(r, null, n, 1, o ?? null, f, !1, m, C), n[ro] = r.current, xu(n), u) for (n = 0; n < u.length; n++) o = u[n], f = o._getVersion, f = f(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, f] : r.mutableSourceEagerHydrationData.push(
      o,
      f
    );
    return new Of(r);
  }, Qa.render = function(n, r, o) {
    if (!Lf(r)) throw Error(p(200));
    return tc(null, n, r, !1, o);
  }, Qa.unmountComponentAtNode = function(n) {
    if (!Lf(n)) throw Error(p(40));
    return n._reactRootContainer ? (Bl(function() {
      tc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ro] = null;
      });
    }), !0) : !1;
  }, Qa.unstable_batchedUpdates = fp, Qa.unstable_renderSubtreeIntoContainer = function(n, r, o, u) {
    if (!Lf(o)) throw Error(p(200));
    if (n == null || n._reactInternals === void 0) throw Error(p(38));
    return tc(n, r, o, !1, u);
  }, Qa.version = "18.3.1-next-f1338f8080-20240426", Qa;
}
var Ka = {};
var vE;
function fM() {
  return vE || (vE = 1, process.env.NODE_ENV !== "production" && (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = wv(), v = UE(), p = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _ = !1;
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
        var i = p.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(d) {
          return String(d);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var k = 0, x = 1, O = 2, A = 3, F = 4, $ = 5, ie = 6, oe = 7, Ce = 8, Re = 9, ge = 10, le = 11, we = 12, ve = 13, Ke = 14, Ve = 15, We = 16, nt = 17, ot = 18, X = 19, V = 21, J = 22, Ee = 23, He = 24, De = 25, xe = !0, re = !1, Oe = !1, he = !1, I = !1, ee = !0, Xe = !0, Pe = !0, mt = !0, rt = /* @__PURE__ */ new Set(), Le = {}, ct = {};
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
    var Un = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Or = Object.prototype.hasOwnProperty;
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
    function Xr(e) {
      if (ur(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", kn(e)), Yn(e);
    }
    function _i(e, t) {
      if (ur(e))
        return h("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, kn(e)), Yn(e);
    }
    function ha(e, t) {
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
    var Qn = 0, wr = 1, Ja = 2, zn = 3, br = 4, ma = 5, Za = 6, Si = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", be = Si + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ze = new RegExp("^[" + Si + "][" + be + "]*$"), Rt = {}, Gt = {};
    function un(e) {
      return Or.call(Gt, e) ? !0 : Or.call(Rt, e) ? !1 : Ze.test(e) ? (Gt[e] = !0, !0) : (Rt[e] = !0, h("Invalid attribute name: `%s`", e), !1);
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
          case ma:
            return isNaN(t);
          case Za:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function sn(e) {
      return Zt.hasOwnProperty(e) ? Zt[e] : null;
    }
    function Jt(e, t, a, i, l, s, d) {
      this.acceptsBooleans = t === Ja || t === zn || t === br, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = d;
    }
    var Zt = {}, ya = [
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
    ya.forEach(function(e) {
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
        wr,
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
        Ja,
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
        Ja,
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
        Za,
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
        ma,
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
    var Rr = /[\-\:]([a-z])/g, Na = function(e) {
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
      var t = e.replace(Rr, Na);
      Zt[t] = new Jt(
        t,
        wr,
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
      var t = e.replace(Rr, Na);
      Zt[t] = new Jt(
        t,
        wr,
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
      var t = e.replace(Rr, Na);
      Zt[t] = new Jt(
        t,
        wr,
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
        wr,
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
      wr,
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
        wr,
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
        var s = i.attributeName, d = null;
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
          d = e.getAttribute(s);
        }
        return nr(t, a, i, !1) ? d === null ? a : d : d === "" + a ? a : d;
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
    function Lr(e, t, a, i) {
      var l = sn(t);
      if (!_n(t, l, i)) {
        if (nr(t, a, l, i) && (a = null), i || l === null) {
          if (un(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Gn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var d = l.mustUseProperty;
        if (d) {
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
          var P = l.type, U;
          P === zn || P === br && a === !0 ? U = "" : (Gn(a, b), U = "" + a, l.sanitizeURL && bo(U.toString())), T ? e.setAttributeNS(T, b, U) : e.setAttribute(b, U);
        }
      }
    }
    var Mr = /* @__PURE__ */ Symbol.for("react.element"), sr = /* @__PURE__ */ Symbol.for("react.portal"), Ci = /* @__PURE__ */ Symbol.for("react.fragment"), ei = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ei = /* @__PURE__ */ Symbol.for("react.profiler"), xi = /* @__PURE__ */ Symbol.for("react.provider"), M = /* @__PURE__ */ Symbol.for("react.context"), ue = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ne = /* @__PURE__ */ Symbol.for("react.suspense"), qe = /* @__PURE__ */ Symbol.for("react.suspense_list"), Et = /* @__PURE__ */ Symbol.for("react.memo"), _t = /* @__PURE__ */ Symbol.for("react.lazy"), Nt = /* @__PURE__ */ Symbol.for("react.scope"), Tt = /* @__PURE__ */ Symbol.for("react.debug_trace_mode"), Dn = /* @__PURE__ */ Symbol.for("react.offscreen"), cn = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), vn = /* @__PURE__ */ Symbol.for("react.cache"), cr = /* @__PURE__ */ Symbol.for("react.tracing_marker"), ti = Symbol.iterator, ni = "@@iterator";
    function xt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ti && e[ti] || e[ni];
      return typeof t == "function" ? t : null;
    }
    var bt = Object.assign, ri = 0, vl, hl, ko, uu, To, Jr, os;
    function jr() {
    }
    jr.__reactDisabledLog = !0;
    function xc() {
      {
        if (ri === 0) {
          vl = console.log, hl = console.info, ko = console.warn, uu = console.error, To = console.group, Jr = console.groupCollapsed, os = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: jr,
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
        ri++;
      }
    }
    function wc() {
      {
        if (ri--, ri === 0) {
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
              value: uu
            }),
            group: bt({}, e, {
              value: To
            }),
            groupCollapsed: bt({}, e, {
              value: Jr
            }),
            groupEnd: bt({}, e, {
              value: os
            })
          });
        }
        ri < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var su = p.ReactCurrentDispatcher, Do;
    function ga(e, t, a) {
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
    var ai = !1, ii;
    {
      var cu = typeof WeakMap == "function" ? WeakMap : Map;
      ii = new cu();
    }
    function ml(e, t) {
      if (!e || ai)
        return "";
      {
        var a = ii.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      ai = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = su.current, su.current = null, xc();
      try {
        if (t) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (K) {
              i = K;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (K) {
              i = K;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (K) {
            i = K;
          }
          e();
        }
      } catch (K) {
        if (K && i && typeof K.stack == "string") {
          for (var y = K.stack.split(`
`), g = i.stack.split(`
`), b = y.length - 1, T = g.length - 1; b >= 1 && T >= 0 && y[b] !== g[T]; )
            T--;
          for (; b >= 1 && T >= 0; b--, T--)
            if (y[b] !== g[T]) {
              if (b !== 1 || T !== 1)
                do
                  if (b--, T--, T < 0 || y[b] !== g[T]) {
                    var P = `
` + y[b].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && ii.set(e, P), P;
                  }
                while (b >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        ai = !1, su.current = s, wc(), Error.prepareStackTrace = l;
      }
      var U = e ? e.displayName || e.name : "", Y = U ? ga(U) : "";
      return typeof e == "function" && ii.set(e, Y), Y;
    }
    function No(e, t, a) {
      return ml(e, !0);
    }
    function fu(e, t, a) {
      return ml(e, !1);
    }
    function du(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Xi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ml(e, du(e));
      if (typeof e == "string")
        return ga(e);
      switch (e) {
        case Ne:
          return ga("Suspense");
        case qe:
          return ga("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ue:
            return fu(e.render);
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
          return ga(e.type);
        case We:
          return ga("Lazy");
        case ve:
          return ga("Suspense");
        case X:
          return ga("SuspenseList");
        case k:
        case O:
        case Ve:
          return fu(e.type);
        case le:
          return fu(e.type.render);
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
    function pu(e) {
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
        case ei:
          return "StrictMode";
        case Ne:
          return "Suspense";
        case qe:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case M:
            var t = e;
            return pu(t) + ".Consumer";
          case xi:
            var a = e;
            return pu(a._context) + ".Provider";
          case ue:
            return Ht(e, e.render, "ForwardRef");
          case Et:
            var i = e.displayName || null;
            return i !== null ? i : It(e.type) || "Memo";
          case _t: {
            var l = e, s = l._payload, d = l._init;
            try {
              return It(d(s));
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
    function wi(e) {
      return e.displayName || "Context";
    }
    function gt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case He:
          return "Cache";
        case Re:
          var i = a;
          return wi(i) + ".Consumer";
        case ge:
          var l = a;
          return wi(l._context) + ".Provider";
        case ot:
          return "DehydratedFragment";
        case le:
          return ls(a, a.render, "ForwardRef");
        case oe:
          return "Fragment";
        case $:
          return a;
        case F:
          return "Portal";
        case A:
          return "Root";
        case ie:
          return "Text";
        case We:
          return It(a);
        case Ce:
          return a === ei ? "StrictMode" : "Mode";
        case J:
          return "Offscreen";
        case we:
          return "Profiler";
        case V:
          return "Scope";
        case ve:
          return "Suspense";
        case X:
          return "SuspenseList";
        case De:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case x:
        case k:
        case nt:
        case O:
        case Ke:
        case Ve:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var vu = p.ReactDebugCurrentFrame, fr = null, bi = !1;
    function Ar() {
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
      vu.getCurrentStack = null, fr = null, bi = !1;
    }
    function en(e) {
      vu.getCurrentStack = e === null ? null : Ri, fr = e, bi = !1;
    }
    function Oo() {
      return fr;
    }
    function Kn(e) {
      bi = e;
    }
    function Ur(e) {
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
    function La(e) {
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
        var d = {
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
        return d;
      }
    }
    function oi(e) {
      Lo(e) || (e._valueTracker = La(e));
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
    function Ma(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var hu = !1, mu = !1, Mo = !1, _l = !1;
    function yu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function gu(e, t) {
      var a = e, i = t.checked, l = bt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function li(e, t) {
      us("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !mu && (h("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ar() || "A component", t.type), mu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !hu && (h("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ar() || "A component", t.type), hu = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Oa(t.value != null ? t.value : i),
        controlled: yu(t)
      };
    }
    function S(e, t) {
      var a = e, i = t.checked;
      i != null && Lr(a, "checked", i, !1);
    }
    function L(e, t) {
      var a = e;
      {
        var i = yu(t);
        !a._wrapperState.controlled && i && !_l && (h("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), _l = !0), a._wrapperState.controlled && !i && !Mo && (h("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Mo = !0);
      }
      S(e, t);
      var l = Oa(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = Ur(l)) : a.value !== Ur(l) && (a.value = Ur(l));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? lt(a, t.type, l) : t.hasOwnProperty("defaultValue") && lt(a, t.type, Oa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function G(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, s = l === "submit" || l === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var d = Ur(i._wrapperState.initialValue);
        a || d !== i.value && (i.value = d), i.defaultValue = d;
      }
      var y = i.name;
      y !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, y !== "" && (i.name = y);
    }
    function Z(e, t) {
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
          var d = l[s];
          if (!(d === e || d.form !== e.form)) {
            var y = am(d);
            if (!y)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            ki(d), L(d, y);
          }
        }
      }
    }
    function lt(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ma(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Ur(e._wrapperState.initialValue) : e.defaultValue !== Ur(a) && (e.defaultValue = Ur(a)));
    }
    var Te = !1, ft = !1, Ot = !1;
    function Ft(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? c.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || ft || (ft = !0, h("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Ot || (Ot = !0, h("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Te && (h("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Te = !0);
    }
    function fn(e, t) {
      t.value != null && e.setAttribute("value", Ur(Oa(t.value)));
    }
    var tn = Array.isArray;
    function kt(e) {
      return tn(e);
    }
    var nn;
    nn = !1;
    function Sn() {
      var e = Ar();
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
        for (var s = a, d = {}, y = 0; y < s.length; y++)
          d["$" + s[y]] = !0;
        for (var g = 0; g < l.length; g++) {
          var b = d.hasOwnProperty("$" + l[g].value);
          l[g].selected !== b && (l[g].selected = b), b && i && (l[g].defaultSelected = !0);
        }
      } else {
        for (var T = Ur(Oa(a)), P = null, U = 0; U < l.length; U++) {
          if (l[U].value === T) {
            l[U].selected = !0, i && (l[U].defaultSelected = !0);
            return;
          }
          P === null && !l[U].disabled && (P = l[U]);
        }
        P !== null && (P.selected = !0);
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
        children: Ur(a._wrapperState.initialValue)
      });
      return i;
    }
    function _d(e, t) {
      var a = e;
      us("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !kv && (h("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ar() || "A component"), kv = !0);
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
        var s = Ur(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = Ur(l));
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
    function xd(e, t) {
      return e == null || e === eo ? Ed(t) : e === Cd && t === "foreignObject" ? eo : e;
    }
    var Nv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, Rc, Ov = Nv(function(e, t) {
      if (e.namespaceURI === Cd && !("innerHTML" in e)) {
        Rc = Rc || document.createElement("div"), Rc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Rc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Zr = 1, to = 3, Pn = 8, no = 9, wd = 11, _u = function(e, t) {
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
    var Mv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ps).forEach(function(e) {
      Mv.forEach(function(t) {
        ps[Lv(t, e)] = ps[e];
      });
    });
    function kc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(ps.hasOwnProperty(e) && ps[e]) ? t + "px" : (ha(t, e), ("" + t).trim());
    }
    var jv = /([A-Z])/g, Av = /^ms-/;
    function Su(e) {
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
              t += a + (s ? i : Su(i)) + ":", t += kc(i, l, s), a = ";";
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
          var d = a[s], y = i[s];
          if (y && d !== y) {
            var g = d + "," + y;
            if (l[g])
              continue;
            l[g] = !0, h("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Iy(e[d]) ? "Removing" : "Updating", d, y);
          }
        }
      }
    }
    var ui = {
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
    }, ui), qv = "__html";
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
    }, Cu = {}, Vy = new RegExp("^(aria)-[" + be + "]*$"), Eu = new RegExp("^(aria)[A-Z][" + be + "]*$");
    function Td(e, t) {
      {
        if (Or.call(Cu, t) && Cu[t])
          return !0;
        if (Eu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Dc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return h("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Cu[t] = !0, !0;
          if (t !== i)
            return h("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Cu[t] = !0, !0;
        }
        if (Vy.test(t)) {
          var l = t.toLowerCase(), s = Dc.hasOwnProperty(l) ? l : null;
          if (s == null)
            return Cu[t] = !0, !1;
          if (t !== s)
            return h("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Cu[t] = !0, !0;
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
        var s = a.map(function(d) {
          return "`" + d + "`";
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
      var dr = {}, Od = /^on./, Oc = /^on[^A-Z]/, Wv = new RegExp("^(aria)-[" + be + "]*$"), Yv = new RegExp("^(aria)[A-Z][" + be + "]*$");
      El = function(e, t, a, i) {
        if (Or.call(dr, t) && dr[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return h("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), dr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, d = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var y = d.hasOwnProperty(l) ? d[l] : null;
          if (y != null)
            return h("Invalid event handler property `%s`. Did you mean `%s`?", t, y), dr[t] = !0, !0;
          if (Od.test(t))
            return h("Unknown event handler property `%s`. It will be ignored.", t), dr[t] = !0, !0;
        } else if (Od.test(t))
          return Oc.test(t) && h("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), dr[t] = !0, !0;
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
        var d = i.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        i.length === 1 ? h("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e) : i.length > 1 && h("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e);
      }
    };
    function Qv(e, t, a) {
      Ao(e, t) || Gv(e, t, a);
    }
    var Ld = 1, Lc = 2, ja = 4, Md = Ld | Lc | ja, xl = null;
    function Hy(e) {
      xl !== null && h("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), xl = e;
    }
    function $y() {
      xl === null && h("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), xl = null;
    }
    function gs(e) {
      return e === xl;
    }
    function jd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === to ? t.parentNode : t;
    }
    var Mc = null, wl = null, Qt = null;
    function jc(e) {
      var t = $u(e);
      if (t) {
        if (typeof Mc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = am(a);
          Mc(t.stateNode, t.type, i);
        }
      }
    }
    function Ac(e) {
      Mc = e;
    }
    function xu(e) {
      wl ? Qt ? Qt.push(e) : Qt = [e] : wl = e;
    }
    function Kv() {
      return wl !== null || Qt !== null;
    }
    function Uc() {
      if (wl) {
        var e = wl, t = Qt;
        if (wl = null, Qt = null, jc(e), t)
          for (var a = 0; a < t.length; a++)
            jc(t[a]);
      }
    }
    var wu = function(e, t) {
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
        return wu(e, t, a);
      } finally {
        Uo = !1, Xv();
      }
    }
    function By(e, t, a) {
      wu = e, _s = a;
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
    function Pc(e, t, a, i, l, s, d, y, g) {
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
      Ic = function(t, a, i, l, s, d, y, g, b) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var T = document.createEvent("Event"), P = !1, U = !0, Y = window.event, K = Object.getOwnPropertyDescriptor(window, "event");
        function te() {
          Ad.removeEventListener(ne, ut, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = Y);
        }
        var je = Array.prototype.slice.call(arguments, 3);
        function ut() {
          P = !0, te(), a.apply(i, je), U = !1;
        }
        var et, zt = !1, Lt = !1;
        function B(q) {
          if (et = q.error, zt = !0, et === null && q.colno === 0 && q.lineno === 0 && (Lt = !0), q.defaultPrevented && et != null && typeof et == "object")
            try {
              et._suppressLogging = !0;
            } catch {
            }
        }
        var ne = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", B), Ad.addEventListener(ne, ut, !1), T.initEvent(ne, !1, !1), Ad.dispatchEvent(T), K && Object.defineProperty(window, "event", K), P && U && (zt ? Lt && (et = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : et = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(et)), window.removeEventListener("error", B), !P)
          return te(), Pc.apply(this, arguments);
      };
    }
    var eh = Ic, bu = !1, Fc = null, Ru = !1, Di = null, th = {
      onError: function(e) {
        bu = !0, Fc = e;
      }
    };
    function Po(e, t, a, i, l, s, d, y, g) {
      bu = !1, Fc = null, eh.apply(th, arguments);
    }
    function Ni(e, t, a, i, l, s, d, y, g) {
      if (Po.apply(this, arguments), bu) {
        var b = Es();
        Ru || (Ru = !0, Di = b);
      }
    }
    function Cs() {
      if (Ru) {
        var e = Di;
        throw Ru = !1, Di = null, e;
      }
    }
    function ro() {
      return bu;
    }
    function Es() {
      if (bu) {
        var e = Fc;
        return bu = !1, Fc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ku(e) {
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
    ), si = (
      /*                */
      1
    ), Cn = (
      /*                    */
      2
    ), jt = (
      /*                       */
      4
    ), Aa = (
      /*                */
      16
    ), Ua = (
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
    ), ea = (
      /*                      */
      2048
    ), ta = (
      /*                    */
      4096
    ), In = (
      /*                   */
      8192
    ), Tu = (
      /*             */
      16384
    ), nh = (
      /*               */
      32767
    ), xs = (
      /*                   */
      32768
    ), rr = (
      /*                */
      65536
    ), Vc = (
      /* */
      131072
    ), Oi = (
      /*                       */
      1048576
    ), Du = (
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
      jt | Xn | 0
    ), Vo = Cn | jt | Aa | Ua | bn | ta | In, Ho = jt | dn | bn | In, io = ea | Aa, Fn = ao | Hc | Du, za = p.ReactCurrentOwner;
    function _a(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Cn | ta)) !== at && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === A ? a : null;
    }
    function Mi(e) {
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
    function ji(e) {
      return e.tag === A ? e.stateNode.containerInfo : null;
    }
    function kl(e) {
      return _a(e) === e;
    }
    function rh(e) {
      {
        var t = za.current;
        if (t !== null && t.tag === x) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || h("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", gt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = ku(e);
      return l ? _a(l) === l : !1;
    }
    function $c(e) {
      if (_a(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Bc(e) {
      var t = e.alternate;
      if (!t) {
        var a = _a(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, l = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var d = s.alternate;
        if (d === null) {
          var y = s.return;
          if (y !== null) {
            i = l = y;
            continue;
          }
          break;
        }
        if (s.child === d.child) {
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
          i = s, l = d;
        else {
          for (var b = !1, T = s.child; T; ) {
            if (T === i) {
              b = !0, i = s, l = d;
              break;
            }
            if (T === l) {
              b = !0, l = s, i = d;
              break;
            }
            T = T.sibling;
          }
          if (!b) {
            for (T = d.child; T; ) {
              if (T === i) {
                b = !0, i = d, l = s;
                break;
              }
              if (T === l) {
                b = !0, l = d, i = s;
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
    function na(e) {
      var t = Bc(e);
      return t !== null ? ra(t) : null;
    }
    function ra(e) {
      if (e.tag === $ || e.tag === ie)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = ra(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function yn(e) {
      var t = Bc(e);
      return t !== null ? Pa(t) : null;
    }
    function Pa(e) {
      if (e.tag === $ || e.tag === ie)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== F) {
          var a = Pa(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Ud = v.unstable_scheduleCallback, ah = v.unstable_cancelCallback, zd = v.unstable_shouldYield, Pd = v.unstable_requestPaint, Jn = v.unstable_now, qc = v.unstable_getCurrentPriorityLevel, ws = v.unstable_ImmediatePriority, $o = v.unstable_UserBlockingPriority, oo = v.unstable_NormalPriority, Wy = v.unstable_LowPriority, Tl = v.unstable_IdlePriority, Wc = v.unstable_yieldValue, ih = v.unstable_setDisableYieldValue, Dl = null, Nn = null, Me = null, Sa = !1, aa = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Nu(e) {
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
          injectProfilingHooks: Ia
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
          Sa || (Sa = !0, h("React instrumentation encountered an error: %s", a));
        }
    }
    function Fd(e, t) {
      if (Nn && typeof Nn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & tt) === tt;
          if (Pe) {
            var i;
            switch (t) {
              case zr:
                i = ws;
                break;
              case Ui:
                i = $o;
                break;
              case Fa:
                i = oo;
                break;
              case Va:
                i = Tl;
                break;
              default:
                i = oo;
                break;
            }
            Nn.onCommitFiberRoot(Dl, e, i, a);
          }
        } catch (l) {
          Sa || (Sa = !0, h("React instrumentation encountered an error: %s", l));
        }
    }
    function Vd(e) {
      if (Nn && typeof Nn.onPostCommitFiberRoot == "function")
        try {
          Nn.onPostCommitFiberRoot(Dl, e);
        } catch (t) {
          Sa || (Sa = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function Hd(e) {
      if (Nn && typeof Nn.onCommitFiberUnmount == "function")
        try {
          Nn.onCommitFiberUnmount(Dl, e);
        } catch (t) {
          Sa || (Sa = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function En(e) {
      if (typeof Wc == "function" && (ih(e), w(e)), Nn && typeof Nn.setStrictMode == "function")
        try {
          Nn.setStrictMode(Dl, e);
        } catch (t) {
          Sa || (Sa = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function Ia(e) {
      Me = e;
    }
    function Nl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Ml; a++) {
          var i = sh(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function $d(e) {
      Me !== null && typeof Me.markCommitStarted == "function" && Me.markCommitStarted(e);
    }
    function Bd() {
      Me !== null && typeof Me.markCommitStopped == "function" && Me.markCommitStopped();
    }
    function Ca(e) {
      Me !== null && typeof Me.markComponentRenderStarted == "function" && Me.markComponentRenderStarted(e);
    }
    function Ea() {
      Me !== null && typeof Me.markComponentRenderStopped == "function" && Me.markComponentRenderStopped();
    }
    function qd(e) {
      Me !== null && typeof Me.markComponentPassiveEffectMountStarted == "function" && Me.markComponentPassiveEffectMountStarted(e);
    }
    function oh() {
      Me !== null && typeof Me.markComponentPassiveEffectMountStopped == "function" && Me.markComponentPassiveEffectMountStopped();
    }
    function lo(e) {
      Me !== null && typeof Me.markComponentPassiveEffectUnmountStarted == "function" && Me.markComponentPassiveEffectUnmountStarted(e);
    }
    function Bo() {
      Me !== null && typeof Me.markComponentPassiveEffectUnmountStopped == "function" && Me.markComponentPassiveEffectUnmountStopped();
    }
    function Yc(e) {
      Me !== null && typeof Me.markComponentLayoutEffectMountStarted == "function" && Me.markComponentLayoutEffectMountStarted(e);
    }
    function lh() {
      Me !== null && typeof Me.markComponentLayoutEffectMountStopped == "function" && Me.markComponentLayoutEffectMountStopped();
    }
    function bs(e) {
      Me !== null && typeof Me.markComponentLayoutEffectUnmountStarted == "function" && Me.markComponentLayoutEffectUnmountStarted(e);
    }
    function Wd() {
      Me !== null && typeof Me.markComponentLayoutEffectUnmountStopped == "function" && Me.markComponentLayoutEffectUnmountStopped();
    }
    function Rs(e, t, a) {
      Me !== null && typeof Me.markComponentErrored == "function" && Me.markComponentErrored(e, t, a);
    }
    function Ai(e, t, a) {
      Me !== null && typeof Me.markComponentSuspended == "function" && Me.markComponentSuspended(e, t, a);
    }
    function ks(e) {
      Me !== null && typeof Me.markLayoutEffectsStarted == "function" && Me.markLayoutEffectsStarted(e);
    }
    function Ts() {
      Me !== null && typeof Me.markLayoutEffectsStopped == "function" && Me.markLayoutEffectsStopped();
    }
    function Ol(e) {
      Me !== null && typeof Me.markPassiveEffectsStarted == "function" && Me.markPassiveEffectsStarted(e);
    }
    function Yd() {
      Me !== null && typeof Me.markPassiveEffectsStopped == "function" && Me.markPassiveEffectsStopped();
    }
    function Ll(e) {
      Me !== null && typeof Me.markRenderStarted == "function" && Me.markRenderStarted(e);
    }
    function uh() {
      Me !== null && typeof Me.markRenderYielded == "function" && Me.markRenderYielded();
    }
    function Gc() {
      Me !== null && typeof Me.markRenderStopped == "function" && Me.markRenderStopped();
    }
    function xn(e) {
      Me !== null && typeof Me.markRenderScheduled == "function" && Me.markRenderScheduled(e);
    }
    function Qc(e, t) {
      Me !== null && typeof Me.markForceUpdateScheduled == "function" && Me.markForceUpdateScheduled(e, t);
    }
    function Ds(e, t) {
      Me !== null && typeof Me.markStateUpdateScheduled == "function" && Me.markStateUpdateScheduled(e, t);
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
    var Ml = 31, se = (
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
    ), ci = (
      /*             */
      4
    ), Tr = (
      /*            */
      8
    ), On = (
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
    ), Ou = (
      /*                       */
      131072
    ), Lu = (
      /*                       */
      262144
    ), lf = (
      /*                       */
      524288
    ), Os = (
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
    ), Ms = (
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
    ), ia = (
      /*                   */
      1073741824
    );
    function sh(e) {
      {
        if (e & pt)
          return "Sync";
        if (e & qo)
          return "InputContinuousHydration";
        if (e & ci)
          return "InputContinuous";
        if (e & Tr)
          return "DefaultHydration";
        if (e & On)
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
        if (e & ia)
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
        case ci:
          return ci;
        case Tr:
          return Tr;
        case On:
          return On;
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
        case Ou:
        case Lu:
        case lf:
        case Os:
        case uf:
          return e & Wo;
        case Ul:
        case sf:
        case Ms:
        case cf:
        case ff:
          return e & Ls;
        case js:
          return js;
        case As:
          return As;
        case zl:
          return zl;
        case ia:
          return ia;
        default:
          return h("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function pf(e, t) {
      var a = e.pendingLanes;
      if (a === se)
        return se;
      var i = se, l = e.suspendedLanes, s = e.pingedLanes, d = a & Qd;
      if (d !== se) {
        var y = d & ~l;
        if (y !== se)
          i = Us(y);
        else {
          var g = d & s;
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
        var T = Yo(i), P = Yo(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= P || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === On && (P & Wo) !== se
        )
          return t;
      }
      (i & ci) !== se && (i |= a & On);
      var U = e.entangledLanes;
      if (U !== se)
        for (var Y = e.entanglements, K = i & U; K > 0; ) {
          var te = Hn(K), je = 1 << te;
          i |= Y[te], K &= ~je;
        }
      return i;
    }
    function fi(e, t) {
      for (var a = e.eventTimes, i = ln; t > 0; ) {
        var l = Hn(t), s = 1 << l, d = a[l];
        d > i && (i = d), t &= ~s;
      }
      return i;
    }
    function Kd(e, t) {
      switch (e) {
        case pt:
        case qo:
        case ci:
          return t + 250;
        case Tr:
        case On:
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
        case Ou:
        case Lu:
        case lf:
        case Os:
        case uf:
          return t + 5e3;
        case Ul:
        case sf:
        case Ms:
        case cf:
        case ff:
          return ln;
        case js:
        case As:
        case zl:
        case ia:
          return ln;
        default:
          return h("Should have found matching lanes. This is a bug in React."), ln;
      }
    }
    function vf(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, d = a; d > 0; ) {
        var y = Hn(d), g = 1 << y, b = s[y];
        b === ln ? ((g & i) === se || (g & l) !== se) && (s[y] = Kd(g, t)) : b <= t && (e.expiredLanes |= g), d &= ~g;
      }
    }
    function ch(e) {
      return Us(e.pendingLanes);
    }
    function hf(e) {
      var t = e.pendingLanes & ~ia;
      return t !== se ? t : t & ia ? ia : se;
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
      var t = pt | ci | On;
      return (e & t) === se;
    }
    function Jd(e) {
      return (e & Wo) === e;
    }
    function mf(e, t) {
      var a = qo | ci | Tr | On;
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
    function oa(e, t) {
      return (e & t) !== se;
    }
    function Fl(e, t) {
      return (e & t) === t;
    }
    function wt(e, t) {
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
      for (var t = [], a = 0; a < Ml; a++)
        t.push(e);
      return t;
    }
    function Mu(e, t, a) {
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
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, d = a; d > 0; ) {
        var y = Hn(d), g = 1 << y;
        i[y] = se, l[y] = ln, s[y] = ln, d &= ~g;
      }
    }
    function gf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var s = Hn(l), d = 1 << s;
        // Is this one of the newly entangled lanes?
        d & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), l &= ~d;
      }
    }
    function rp(e, t) {
      var a = Yo(t), i;
      switch (a) {
        case ci:
          i = qo;
          break;
        case On:
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
        case Ou:
        case Lu:
        case lf:
        case Os:
        case uf:
        case Ul:
        case sf:
        case Ms:
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
      if (aa)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = pr(a), s = 1 << l, d = i[l];
          d.add(t), a &= ~s;
        }
    }
    function yh(e, t) {
      if (aa)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = pr(t), s = 1 << l, d = a[l];
          d.size > 0 && (d.forEach(function(y) {
            var g = y.alternate;
            (g === null || !i.has(g)) && i.add(y);
          }), d.clear()), t &= ~s;
        }
    }
    function ap(e, t) {
      return null;
    }
    var zr = pt, Ui = ci, Fa = On, Va = zl, Hs = Vt;
    function Ha() {
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
      return ir(zr, t) ? ir(Ui, t) ? zs(t) ? Fa : Va : Ui : zr;
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
    var Be;
    function ju(e) {
      Be = e;
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
    var Cf = !1, Ys = [], so = null, zi = null, Pi = null, Ln = /* @__PURE__ */ new Map(), Pr = /* @__PURE__ */ new Map(), Ir = [], xh = [
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
    function wh(e) {
      return xh.indexOf(e) > -1;
    }
    function di(e, t, a, i, l) {
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
          Pr.delete(i);
          break;
        }
      }
    }
    function la(e, t, a, i, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var d = di(t, a, i, l, s);
        if (t !== null) {
          var y = $u(t);
          y !== null && Be(y);
        }
        return d;
      }
      e.eventSystemFlags |= i;
      var g = e.targetContainers;
      return l !== null && g.indexOf(l) === -1 && g.push(l), e;
    }
    function Gy(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return so = la(so, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var d = l;
          return zi = la(zi, e, t, a, i, d), !0;
        }
        case "mouseover": {
          var y = l;
          return Pi = la(Pi, e, t, a, i, y), !0;
        }
        case "pointerover": {
          var g = l, b = g.pointerId;
          return Ln.set(b, la(Ln.get(b) || null, e, t, a, i, g)), !0;
        }
        case "gotpointercapture": {
          var T = l, P = T.pointerId;
          return Pr.set(P, la(Pr.get(P) || null, e, t, a, i, T)), !0;
        }
      }
      return !1;
    }
    function lp(e) {
      var t = ic(e.target);
      if (t !== null) {
        var a = _a(t);
        if (a !== null) {
          var i = a.tag;
          if (i === ve) {
            var l = Mi(a);
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
      }, i = 0; i < Ir.length && ir(t, Ir[i].priority); i++)
        ;
      Ir.splice(i, 0, a), i === 0 && lp(a);
    }
    function Gs(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Uu(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          Hy(s), l.target.dispatchEvent(s), $y();
        } else {
          var d = $u(i);
          return d !== null && Be(d), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function up(e, t, a) {
      Gs(e) && a.delete(t);
    }
    function Qy() {
      Cf = !1, so !== null && Gs(so) && (so = null), zi !== null && Gs(zi) && (zi = null), Pi !== null && Gs(Pi) && (Pi = null), Ln.forEach(up), Pr.forEach(up);
    }
    function Go(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Cf || (Cf = !0, v.unstable_scheduleCallback(v.unstable_NormalPriority, Qy)));
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
      Ln.forEach(i), Pr.forEach(i);
      for (var l = 0; l < Ir.length; l++) {
        var s = Ir[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Ir.length > 0; ) {
        var d = Ir[0];
        if (d.blockedOn !== null)
          break;
        lp(d), d.blockedOn === null && Ir.shift();
      }
    }
    var vr = p.ReactCurrentBatchConfig, At = !0;
    function Zn(e) {
      At = !!e;
    }
    function Bn() {
      return At;
    }
    function hr(e, t, a) {
      var i = Ef(t), l;
      switch (i) {
        case zr:
          l = xa;
          break;
        case Ui:
          l = Au;
          break;
        case Fa:
        default:
          l = Mn;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function xa(e, t, a, i) {
      var l = Ha(), s = vr.transition;
      vr.transition = null;
      try {
        $n(zr), Mn(e, t, a, i);
      } finally {
        $n(l), vr.transition = s;
      }
    }
    function Au(e, t, a, i) {
      var l = Ha(), s = vr.transition;
      vr.transition = null;
      try {
        $n(Ui), Mn(e, t, a, i);
      } finally {
        $n(l), vr.transition = s;
      }
    }
    function Mn(e, t, a, i) {
      At && Qs(e, t, a, i);
    }
    function Qs(e, t, a, i) {
      var l = Uu(e, t, a, i);
      if (l === null) {
        dg(e, t, i, Ii, a), op(e, i);
        return;
      }
      if (Gy(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (op(e, i), t & ja && wh(e)) {
        for (; l !== null; ) {
          var s = $u(l);
          s !== null && Yy(s);
          var d = Uu(e, t, a, i);
          if (d === null && dg(e, t, i, Ii, a), d === l)
            break;
          l = d;
        }
        l !== null && i.stopPropagation();
        return;
      }
      dg(e, t, i, null, a);
    }
    var Ii = null;
    function Uu(e, t, a, i) {
      Ii = null;
      var l = jd(i), s = ic(l);
      if (s !== null) {
        var d = _a(s);
        if (d === null)
          s = null;
        else {
          var y = d.tag;
          if (y === ve) {
            var g = Mi(d);
            if (g !== null)
              return g;
            s = null;
          } else if (y === A) {
            var b = d.stateNode;
            if (_f(b))
              return ji(d);
            s = null;
          } else d !== s && (s = null);
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
          return zr;
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
            case ws:
              return zr;
            case $o:
              return Ui;
            case oo:
            case Wy:
              return Fa;
            case Tl:
              return Va;
            default:
              return Fa;
          }
        }
        default:
          return Fa;
      }
    }
    function Ks(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ua(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function sp(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function zu(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var wa = null, Pu = null, Hl = null;
    function Qo(e) {
      return wa = e, Pu = Xs(), !0;
    }
    function xf() {
      wa = null, Pu = null, Hl = null;
    }
    function co() {
      if (Hl)
        return Hl;
      var e, t = Pu, a = t.length, i, l = Xs(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === l[s - i]; i++)
        ;
      var y = i > 1 ? 1 - i : void 0;
      return Hl = l.slice(e, y), Hl;
    }
    function Xs() {
      return "value" in wa ? wa.value : wa.textContent;
    }
    function Ko(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Iu() {
      return !0;
    }
    function Js() {
      return !1;
    }
    function Nr(e) {
      function t(a, i, l, s, d) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = d, this.currentTarget = null;
        for (var y in e)
          if (e.hasOwnProperty(y)) {
            var g = e[y];
            g ? this[y] = g(s) : this[y] = s[y];
          }
        var b = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return b ? this.isDefaultPrevented = Iu : this.isDefaultPrevented = Js, this.isPropagationStopped = Js, this;
      }
      return bt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Iu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Iu);
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
        isPersistent: Iu
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
    }, Fi = Nr(qn), Fr = bt({}, qn, {
      view: 0,
      detail: 0
    }), sa = Nr(Fr), wf, Zs, $l;
    function Ky(e) {
      e !== $l && ($l && e.type === "mousemove" ? (wf = e.screenX - $l.screenX, Zs = e.screenY - $l.screenY) : (wf = 0, Zs = 0), $l = e);
    }
    var pi = bt({}, Fr, {
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
        return "movementX" in e ? e.movementX : (Ky(e), wf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Zs;
      }
    }), cp = Nr(pi), fp = bt({}, pi, {
      dataTransfer: 0
    }), Bl = Nr(fp), dp = bt({}, Fr, {
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
    var Fu = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Oh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Fu[e];
      return i ? !!a[i] : !1;
    }
    function gn(e) {
      return Oh;
    }
    var Zy = bt({}, Fr, {
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
    }), Lh = Nr(Zy), eg = bt({}, pi, {
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
    }), Mh = Nr(eg), jh = bt({}, Fr, {
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
    }), $a = Nr(tg), vp = bt({}, pi, {
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
      var s, d;
      if (po ? s = Tf(t) : Wl ? yp(t, i) && (s = "onCompositionEnd") : Df(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Rf && !Ph(i) && (!Wl && s === "onCompositionStart" ? Wl = Qo(l) : s === "onCompositionEnd" && Wl && (d = co()));
      var y = qh(a, s);
      if (y.length > 0) {
        var g = new Th(s, t, null, i, l);
        if (e.push({
          event: g,
          listeners: y
        }), d)
          g.data = d;
        else {
          var b = Nf(i);
          b !== null && (g.data = b);
        }
      }
    }
    function Of(e, t) {
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
          return xf(), Wl = !1, a;
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
      if (hp ? s = Of(t, i) : s = _p(t, i), !s)
        return null;
      var d = qh(a, "onBeforeInput");
      if (d.length > 0) {
        var y = new Dh("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: y,
          listeners: d
        }), y.data = s;
      }
    }
    function Ih(e, t, a, i, l, s, d) {
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
      w_(e, 0);
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
      Zo = e, n = t, Zo.attachEvent("onpropertychange", Q);
    }
    function j() {
      Zo && (Zo.detachEvent("onpropertychange", Q), Zo = null, n = null);
    }
    function Q(e) {
      e.propertyName === "value" && f(n) && o(e);
    }
    function de(e, t, a) {
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
    function Ie(e, t) {
      if (e === "click")
        return f(t);
    }
    function Ye(e, t) {
      if (e === "input" || e === "change")
        return f(t);
    }
    function Je(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || lt(e, "number", e.value);
    }
    function jn(e, t, a, i, l, s, d) {
      var y = a ? Pf(a) : window, g, b;
      if (r(y) ? g = m : tc(y) ? C ? g = Ye : (g = me, b = de) : fe(y) && (g = Ie), g) {
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
    function z(e, t, a, i, l, s, d) {
      var y = t === "mouseover" || t === "pointerover", g = t === "mouseout" || t === "pointerout";
      if (y && !gs(i)) {
        var b = i.relatedTarget || i.fromElement;
        if (b && (ic(b) || Mp(b)))
          return;
      }
      if (!(!g && !y)) {
        var T;
        if (l.window === l)
          T = l;
        else {
          var P = l.ownerDocument;
          P ? T = P.defaultView || P.parentWindow : T = window;
        }
        var U, Y;
        if (g) {
          var K = i.relatedTarget || i.toElement;
          if (U = a, Y = K ? ic(K) : null, Y !== null) {
            var te = _a(Y);
            (Y !== te || Y.tag !== $ && Y.tag !== ie) && (Y = null);
          }
        } else
          U = null, Y = a;
        if (U !== Y) {
          var je = cp, ut = "onMouseLeave", et = "onMouseEnter", zt = "mouse";
          (t === "pointerout" || t === "pointerover") && (je = Mh, ut = "onPointerLeave", et = "onPointerEnter", zt = "pointer");
          var Lt = U == null ? T : Pf(U), B = Y == null ? T : Pf(Y), ne = new je(ut, zt + "leave", U, i, l);
          ne.target = Lt, ne.relatedTarget = B;
          var q = null, ye = ic(l);
          if (ye === a) {
            var $e = new je(et, zt + "enter", Y, i, l);
            $e.target = B, $e.relatedTarget = Lt, q = $e;
          }
          px(e, ne, q, U, Y);
        }
      }
    }
    function W(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var pe = typeof Object.is == "function" ? Object.is : W;
    function Ge(e, t) {
      if (pe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!Or.call(t, s) || !pe(e[s], t[s]))
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
      var l = i.anchorNode, s = i.anchorOffset, d = i.focusNode, y = i.focusOffset;
      try {
        l.nodeType, d.nodeType;
      } catch {
        return null;
      }
      return qt(e, l, s, d, y);
    }
    function qt(e, t, a, i, l) {
      var s = 0, d = -1, y = -1, g = 0, b = 0, T = e, P = null;
      e: for (; ; ) {
        for (var U = null; T === t && (a === 0 || T.nodeType === to) && (d = s + a), T === i && (l === 0 || T.nodeType === to) && (y = s + l), T.nodeType === to && (s += T.nodeValue.length), (U = T.firstChild) !== null; )
          P = T, T = U;
        for (; ; ) {
          if (T === e)
            break e;
          if (P === t && ++g === a && (d = s), P === i && ++b === l && (y = s), (U = T.nextSibling) !== null)
            break;
          T = P, P = T.parentNode;
        }
        T = U;
      }
      return d === -1 || y === -1 ? null : {
        start: d,
        end: y
      };
    }
    function el(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), s = e.textContent.length, d = Math.min(t.start, s), y = t.end === void 0 ? d : Math.min(t.end, s);
        if (!l.extend && d > y) {
          var g = y;
          y = d, d = g;
        }
        var b = yt(e, d), T = yt(e, y);
        if (b && T) {
          if (l.rangeCount === 1 && l.anchorNode === b.node && l.anchorOffset === b.offset && l.focusNode === T.node && l.focusOffset === T.offset)
            return;
          var P = a.createRange();
          P.setStart(b.node, b.offset), l.removeAllRanges(), d > y ? (l.addRange(P), l.extend(T.node, T.offset)) : (P.setEnd(T.node, T.offset), l.addRange(P));
        }
      }
    }
    function Vh(e) {
      return e && e.nodeType === to;
    }
    function p_(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Vh(e) ? !1 : Vh(t) ? p_(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function QE(e) {
      return e && e.ownerDocument && p_(e.ownerDocument.documentElement, e);
    }
    function KE(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function v_() {
      for (var e = window, t = Ma(); t instanceof e.HTMLIFrameElement; ) {
        if (KE(t))
          e = t.contentWindow;
        else
          return t;
        t = Ma(e.document);
      }
      return t;
    }
    function og(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function XE() {
      var e = v_();
      return {
        focusedElem: e,
        selectionRange: og(e) ? ZE(e) : null
      };
    }
    function JE(e) {
      var t = v_(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && QE(a)) {
        i !== null && og(a) && ex(a, i);
        for (var l = [], s = a; s = s.parentNode; )
          s.nodeType === Zr && l.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var d = 0; d < l.length; d++) {
          var y = l[d];
          y.element.scrollLeft = y.left, y.element.scrollTop = y.top;
        }
      }
    }
    function ZE(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = or(e), t || {
        start: 0,
        end: 0
      };
    }
    function ex(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : el(e, t);
    }
    var tx = Un && "documentMode" in document && document.documentMode <= 11;
    function nx() {
      vt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Mf = null, lg = null, Sp = null, ug = !1;
    function rx(e) {
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
    function ax(e) {
      return e.window === e ? e.document : e.nodeType === no ? e : e.ownerDocument;
    }
    function h_(e, t, a) {
      var i = ax(a);
      if (!(ug || Mf == null || Mf !== Ma(i))) {
        var l = rx(Mf);
        if (!Sp || !Ge(Sp, l)) {
          Sp = l;
          var s = qh(lg, "onSelect");
          if (s.length > 0) {
            var d = new Fi("onSelect", "select", null, t, a);
            e.push({
              event: d,
              listeners: s
            }), d.target = Mf;
          }
        }
      }
    }
    function ix(e, t, a, i, l, s, d) {
      var y = a ? Pf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (tc(y) || y.contentEditable === "true") && (Mf = y, lg = a, Sp = null);
          break;
        case "focusout":
          Mf = null, lg = null, Sp = null;
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
          if (tx)
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
    function Vu(e, t) {
      C_.set(e, t), vt(t, [e]);
    }
    function ox() {
      for (var e = 0; e < E_.length; e++) {
        var t = E_[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Vu(a, "on" + i);
      }
      Vu(y_, "onAnimationEnd"), Vu(g_, "onAnimationIteration"), Vu(__, "onAnimationStart"), Vu("dblclick", "onDoubleClick"), Vu("focusin", "onFocus"), Vu("focusout", "onBlur"), Vu(S_, "onTransitionEnd");
    }
    function lx(e, t, a, i, l, s, d) {
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
            g = $a;
            break;
          case "scroll":
            g = sa;
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
            g = Mh;
            break;
        }
        var T = (s & ja) !== 0;
        {
          var P = !T && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", U = fx(a, y, i.type, T, P);
          if (U.length > 0) {
            var Y = new g(y, b, null, i, l);
            e.push({
              event: Y,
              listeners: U
            });
          }
        }
      }
    }
    ox(), H(), nc(), nx(), rg();
    function ux(e, t, a, i, l, s, d) {
      lx(e, t, a, i, l, s);
      var y = (s & Md) === 0;
      y && (z(e, t, a, i, l), jn(e, t, a, i, l), ix(e, t, a, i, l), Ih(e, t, a, i, l));
    }
    var Cp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], cg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Cp));
    function x_(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ni(i, t, void 0, e), e.currentTarget = null;
    }
    function sx(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], d = s.instance, y = s.currentTarget, g = s.listener;
          if (d !== i && e.isPropagationStopped())
            return;
          x_(e, g, y), i = d;
        }
      else
        for (var b = 0; b < t.length; b++) {
          var T = t[b], P = T.instance, U = T.currentTarget, Y = T.listener;
          if (P !== i && e.isPropagationStopped())
            return;
          x_(e, Y, U), i = P;
        }
    }
    function w_(e, t) {
      for (var a = (t & ja) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, d = l.listeners;
        sx(s, d, a);
      }
      Cs();
    }
    function cx(e, t, a, i, l) {
      var s = jd(a), d = [];
      ux(d, e, i, a, s, t), w_(d, t);
    }
    function wn(e, t) {
      cg.has(e) || h('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = Fw(t), l = vx(e);
      i.has(l) || (b_(t, e, Lc, a), i.add(l));
    }
    function fg(e, t, a) {
      cg.has(e) && !t && h('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ja), b_(a, e, i, t);
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
      var s = hr(e, t, a), d = void 0;
      Ss && (t === "touchstart" || t === "touchmove" || t === "wheel") && (d = !0), e = e, i ? d !== void 0 ? sp(e, t, s, d) : ua(e, t, s) : d !== void 0 ? zu(e, t, s, d) : Ks(e, t, s);
    }
    function R_(e, t) {
      return e === t || e.nodeType === Pn && e.parentNode === t;
    }
    function dg(e, t, a, i, l) {
      var s = i;
      if ((t & Ld) === 0 && (t & Lc) === 0) {
        var d = l;
        if (i !== null) {
          var y = i;
          e: for (; ; ) {
            if (y === null)
              return;
            var g = y.tag;
            if (g === A || g === F) {
              var b = y.stateNode.containerInfo;
              if (R_(b, d))
                break;
              if (g === F)
                for (var T = y.return; T !== null; ) {
                  var P = T.tag;
                  if (P === A || P === F) {
                    var U = T.stateNode.containerInfo;
                    if (R_(U, d))
                      return;
                  }
                  T = T.return;
                }
              for (; b !== null; ) {
                var Y = ic(b);
                if (Y === null)
                  return;
                var K = Y.tag;
                if (K === $ || K === ie) {
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
        return cx(e, t, a, s);
      });
    }
    function xp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function fx(e, t, a, i, l, s) {
      for (var d = t !== null ? t + "Capture" : null, y = i ? d : t, g = [], b = e, T = null; b !== null; ) {
        var P = b, U = P.stateNode, Y = P.tag;
        if (Y === $ && U !== null && (T = U, y !== null)) {
          var K = zo(b, y);
          K != null && g.push(xp(b, K, T));
        }
        if (l)
          break;
        b = b.return;
      }
      return g;
    }
    function qh(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, d = s.stateNode, y = s.tag;
        if (y === $ && d !== null) {
          var g = d, b = zo(l, a);
          b != null && i.unshift(xp(l, b, g));
          var T = zo(l, t);
          T != null && i.push(xp(l, T, g));
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
    function dx(e, t) {
      for (var a = e, i = t, l = 0, s = a; s; s = Af(s))
        l++;
      for (var d = 0, y = i; y; y = Af(y))
        d++;
      for (; l - d > 0; )
        a = Af(a), l--;
      for (; d - l > 0; )
        i = Af(i), d--;
      for (var g = l; g--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Af(a), i = Af(i);
      }
      return null;
    }
    function k_(e, t, a, i, l) {
      for (var s = t._reactName, d = [], y = a; y !== null && y !== i; ) {
        var g = y, b = g.alternate, T = g.stateNode, P = g.tag;
        if (b !== null && b === i)
          break;
        if (P === $ && T !== null) {
          var U = T;
          if (l) {
            var Y = zo(y, s);
            Y != null && d.unshift(xp(y, Y, U));
          } else if (!l) {
            var K = zo(y, s);
            K != null && d.push(xp(y, K, U));
          }
        }
        y = y.return;
      }
      d.length !== 0 && e.push({
        event: t,
        listeners: d
      });
    }
    function px(e, t, a, i, l) {
      var s = i && l ? dx(i, l) : null;
      i !== null && k_(e, t, i, s, !1), l !== null && a !== null && k_(e, a, l, s, !0);
    }
    function vx(e, t) {
      return e + "__bubble";
    }
    var Ba = !1, wp = "dangerouslySetInnerHTML", Wh = "suppressContentEditableWarning", Hu = "suppressHydrationWarning", T_ = "autoFocus", rc = "children", ac = "style", Yh = "__html", pg, Gh, bp, D_, Qh, N_, O_;
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
      if (!Ba) {
        var i = Kh(a), l = Kh(t);
        l !== i && (Ba = !0, h("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, D_ = function(e) {
      if (!Ba) {
        Ba = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), h("Extra attributes from the server: %s", t);
      }
    }, Qh = function(e, t) {
      t === !1 ? h("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : h("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, O_ = function(e, t) {
      var a = e.namespaceURI === eo ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var hx = /\r\n?/g, mx = /\u0000|\uFFFD/g;
    function Kh(e) {
      tr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(hx, `
`).replace(mx, "");
    }
    function Xh(e, t, a, i) {
      var l = Kh(t), s = Kh(e);
      if (s !== l && (i && (Ba || (Ba = !0, h('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && xe))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function L_(e) {
      return e.nodeType === no ? e : e.ownerDocument;
    }
    function yx() {
    }
    function Jh(e) {
      e.onclick = yx;
    }
    function gx(e, t, a, i, l) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var d = i[s];
          if (s === ac)
            d && Object.freeze(d), $v(t, d);
          else if (s === wp) {
            var y = d ? d[Yh] : void 0;
            y != null && Ov(t, y);
          } else if (s === rc)
            if (typeof d == "string") {
              var g = e !== "textarea" || d !== "";
              g && _u(t, d);
            } else typeof d == "number" && _u(t, "" + d);
          else s === Wh || s === Hu || s === T_ || (Le.hasOwnProperty(s) ? d != null && (typeof d != "function" && Qh(s, d), s === "onScroll" && wn("scroll", t)) : d != null && Lr(t, s, d, l));
        }
    }
    function _x(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], d = t[l + 1];
        s === ac ? $v(e, d) : s === wp ? Ov(e, d) : s === rc ? _u(e, d) : Lr(e, s, d, i);
      }
    }
    function Sx(e, t, a, i) {
      var l, s = L_(a), d, y = i;
      if (y === eo && (y = Ed(e)), y === eo) {
        if (l = Ao(e, t), !l && e !== e.toLowerCase() && h("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var g = s.createElement("div");
          g.innerHTML = "<script><\/script>";
          var b = g.firstChild;
          d = g.removeChild(b);
        } else if (typeof t.is == "string")
          d = s.createElement(e, {
            is: t.is
          });
        else if (d = s.createElement(e), e === "select") {
          var T = d;
          t.multiple ? T.multiple = !0 : t.size && (T.size = t.size);
        }
      } else
        d = s.createElementNS(y, e);
      return y === eo && !l && Object.prototype.toString.call(d) === "[object HTMLUnknownElement]" && !Or.call(pg, e) && (pg[e] = !0, h("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), d;
    }
    function Cx(e, t) {
      return L_(t).createTextNode(e);
    }
    function Ex(e, t, a, i) {
      var l = Ao(t, a);
      Gh(t, a);
      var s;
      switch (t) {
        case "dialog":
          wn("cancel", e), wn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          wn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var d = 0; d < Cp.length; d++)
            wn(Cp[d], e);
          s = a;
          break;
        case "source":
          wn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          wn("error", e), wn("load", e), s = a;
          break;
        case "details":
          wn("toggle", e), s = a;
          break;
        case "input":
          li(e, a), s = gu(e, a), wn("invalid", e);
          break;
        case "option":
          Ft(e, a), s = a;
          break;
        case "select":
          Sl(e, a), s = fs(e, a), wn("invalid", e);
          break;
        case "textarea":
          _d(e, a), s = gd(e, a), wn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Tc(t, s), gx(t, e, i, s, l), t) {
        case "input":
          oi(e), G(e, a, !1);
          break;
        case "textarea":
          oi(e), Dv(e);
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
    function xx(e, t, a, i, l) {
      Gh(t, i);
      var s = null, d, y;
      switch (t) {
        case "input":
          d = gu(e, a), y = gu(e, i), s = [];
          break;
        case "select":
          d = fs(e, a), y = fs(e, i), s = [];
          break;
        case "textarea":
          d = gd(e, a), y = gd(e, i), s = [];
          break;
        default:
          d = a, y = i, typeof d.onClick != "function" && typeof y.onClick == "function" && Jh(e);
          break;
      }
      Tc(t, y);
      var g, b, T = null;
      for (g in d)
        if (!(y.hasOwnProperty(g) || !d.hasOwnProperty(g) || d[g] == null))
          if (g === ac) {
            var P = d[g];
            for (b in P)
              P.hasOwnProperty(b) && (T || (T = {}), T[b] = "");
          } else g === wp || g === rc || g === Wh || g === Hu || g === T_ || (Le.hasOwnProperty(g) ? s || (s = []) : (s = s || []).push(g, null));
      for (g in y) {
        var U = y[g], Y = d?.[g];
        if (!(!y.hasOwnProperty(g) || U === Y || U == null && Y == null))
          if (g === ac)
            if (U && Object.freeze(U), Y) {
              for (b in Y)
                Y.hasOwnProperty(b) && (!U || !U.hasOwnProperty(b)) && (T || (T = {}), T[b] = "");
              for (b in U)
                U.hasOwnProperty(b) && Y[b] !== U[b] && (T || (T = {}), T[b] = U[b]);
            } else
              T || (s || (s = []), s.push(g, T)), T = U;
          else if (g === wp) {
            var K = U ? U[Yh] : void 0, te = Y ? Y[Yh] : void 0;
            K != null && te !== K && (s = s || []).push(g, K);
          } else g === rc ? (typeof U == "string" || typeof U == "number") && (s = s || []).push(g, "" + U) : g === Wh || g === Hu || (Le.hasOwnProperty(g) ? (U != null && (typeof U != "function" && Qh(g, U), g === "onScroll" && wn("scroll", e)), !s && Y !== U && (s = [])) : (s = s || []).push(g, U));
      }
      return T && (Fy(T, y[ac]), (s = s || []).push(ac, T)), s;
    }
    function wx(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && S(e, l);
      var s = Ao(a, i), d = Ao(a, l);
      switch (_x(e, t, s, d), a) {
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
    function bx(e) {
      {
        var t = e.toLowerCase();
        return ms.hasOwnProperty(t) && ms[t] || null;
      }
    }
    function Rx(e, t, a, i, l, s, d) {
      var y, g;
      switch (y = Ao(t, a), Gh(t, a), t) {
        case "dialog":
          wn("cancel", e), wn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          wn("load", e);
          break;
        case "video":
        case "audio":
          for (var b = 0; b < Cp.length; b++)
            wn(Cp[b], e);
          break;
        case "source":
          wn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          wn("error", e), wn("load", e);
          break;
        case "details":
          wn("toggle", e);
          break;
        case "input":
          li(e, a), wn("invalid", e);
          break;
        case "option":
          Ft(e, a);
          break;
        case "select":
          Sl(e, a), wn("invalid", e);
          break;
        case "textarea":
          _d(e, a), wn("invalid", e);
          break;
      }
      Tc(t, a);
      {
        g = /* @__PURE__ */ new Set();
        for (var T = e.attributes, P = 0; P < T.length; P++) {
          var U = T[P].name.toLowerCase();
          switch (U) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              g.add(T[P].name);
          }
        }
      }
      var Y = null;
      for (var K in a)
        if (a.hasOwnProperty(K)) {
          var te = a[K];
          if (K === rc)
            typeof te == "string" ? e.textContent !== te && (a[Hu] !== !0 && Xh(e.textContent, te, s, d), Y = [rc, te]) : typeof te == "number" && e.textContent !== "" + te && (a[Hu] !== !0 && Xh(e.textContent, te, s, d), Y = [rc, "" + te]);
          else if (Le.hasOwnProperty(K))
            te != null && (typeof te != "function" && Qh(K, te), K === "onScroll" && wn("scroll", e));
          else if (d && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof y == "boolean") {
            var je = void 0, ut = sn(K);
            if (a[Hu] !== !0) {
              if (!(K === Wh || K === Hu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              K === "value" || K === "checked" || K === "selected")) {
                if (K === wp) {
                  var et = e.innerHTML, zt = te ? te[Yh] : void 0;
                  if (zt != null) {
                    var Lt = O_(e, zt);
                    Lt !== et && bp(K, et, Lt);
                  }
                } else if (K === ac) {
                  if (g.delete(K), N_) {
                    var B = Py(te);
                    je = e.getAttribute("style"), B !== je && bp(K, je, B);
                  }
                } else if (y && !I)
                  g.delete(K.toLowerCase()), je = pl(e, K, te), te !== je && bp(K, je, te);
                else if (!_n(K, ut, y) && !nr(K, te, ut, y)) {
                  var ne = !1;
                  if (ut !== null)
                    g.delete(ut.attributeName), je = Ro(e, K, te, ut);
                  else {
                    var q = i;
                    if (q === eo && (q = Ed(t)), q === eo)
                      g.delete(K.toLowerCase());
                    else {
                      var ye = bx(K);
                      ye !== null && ye !== K && (ne = !0, g.delete(ye)), g.delete(K);
                    }
                    je = pl(e, K, te);
                  }
                  var $e = I;
                  !$e && te !== je && !ne && bp(K, je, te);
                }
              }
            }
          }
        }
      switch (d && // $FlowFixMe - Should be inferred as not undefined.
      g.size > 0 && a[Hu] !== !0 && D_(g), t) {
        case "input":
          oi(e), G(e, a, !0);
          break;
        case "textarea":
          oi(e), Dv(e);
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
    function kx(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function vg(e, t) {
      {
        if (Ba)
          return;
        Ba = !0, h("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function hg(e, t) {
      {
        if (Ba)
          return;
        Ba = !0, h('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function mg(e, t, a) {
      {
        if (Ba)
          return;
        Ba = !0, h("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function yg(e, t) {
      {
        if (t === "" || Ba)
          return;
        Ba = !0, h('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function Tx(e, t, a) {
      switch (t) {
        case "input":
          Z(e, a);
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
      var Dx = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], M_ = [
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
      ], Nx = M_.concat(["button"]), Ox = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], j_ = {
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
        return M_.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Nx.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Dx.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var Lx = function(e, t) {
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
            return Ox.indexOf(t) === -1;
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
      }, Mx = function(e, t) {
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
        var s = Lx(e, l) ? null : i, d = s ? null : Mx(e, a), y = s || d;
        if (y) {
          var g = y.tag, b = !!s + "|" + e + "|" + g;
          if (!A_[b]) {
            A_[b] = !0;
            var T = e, P = "";
            if (e === "#text" ? /\S/.test(t) ? T = "Text nodes" : (T = "Whitespace text nodes", P = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : T = "<" + e + ">", s) {
              var U = "";
              g === "table" && e === "tr" && (U += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), h("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", T, g, P, U);
            } else
              h("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", T, g);
          }
        }
      };
    }
    var Zh = "suppressHydrationWarning", em = "$", tm = "/$", Tp = "$?", Dp = "$!", jx = "style", gg = null, _g = null;
    function Ax(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case no:
        case wd: {
          t = i === no ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : xd(null, "");
          break;
        }
        default: {
          var s = i === Pn ? e.parentNode : e, d = s.namespaceURI || null;
          t = s.tagName, a = xd(d, t);
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
    function Ux(e, t, a) {
      {
        var i = e, l = xd(i.namespace, t), s = kp(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function JM(e) {
      return e;
    }
    function zx(e) {
      gg = Bn(), _g = XE();
      var t = null;
      return Zn(!1), t;
    }
    function Px(e) {
      JE(_g), Zn(gg), gg = null, _g = null;
    }
    function Ix(e, t, a, i, l) {
      var s;
      {
        var d = i;
        if (Rp(e, null, d.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var y = "" + t.children, g = kp(d.ancestorInfo, e);
          Rp(null, y, g);
        }
        s = d.namespace;
      }
      var b = Sx(e, t, a, s);
      return Lp(l, b), kg(b, t), b;
    }
    function Fx(e, t) {
      e.appendChild(t);
    }
    function Vx(e, t, a, i, l) {
      switch (Ex(e, t, a, i), t) {
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
    function Hx(e, t, a, i, l, s) {
      {
        var d = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var y = "" + i.children, g = kp(d.ancestorInfo, t);
          Rp(null, y, g);
        }
      }
      return xx(e, t, a, i);
    }
    function Sg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function $x(e, t, a, i) {
      {
        var l = a;
        Rp(null, e, l.ancestorInfo);
      }
      var s = Cx(e, t);
      return Lp(i, s), s;
    }
    function Bx() {
      var e = window.event;
      return e === void 0 ? Fa : Ef(e.type);
    }
    var Cg = typeof setTimeout == "function" ? setTimeout : void 0, qx = typeof clearTimeout == "function" ? clearTimeout : void 0, Eg = -1, U_ = typeof Promise == "function" ? Promise : void 0, Wx = typeof queueMicrotask == "function" ? queueMicrotask : typeof U_ < "u" ? function(e) {
      return U_.resolve(null).then(e).catch(Yx);
    } : Cg;
    function Yx(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Gx(e, t, a, i) {
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
    function Qx(e, t, a, i, l, s) {
      wx(e, t, a, i, l), kg(e, l);
    }
    function z_(e) {
      _u(e, "");
    }
    function Kx(e, t, a) {
      e.nodeValue = a;
    }
    function Xx(e, t) {
      e.appendChild(t);
    }
    function Jx(e, t) {
      var a;
      e.nodeType === Pn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Jh(a);
    }
    function Zx(e, t, a) {
      e.insertBefore(t, a);
    }
    function ew(e, t, a) {
      e.nodeType === Pn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function tw(e, t) {
      e.removeChild(t);
    }
    function nw(e, t) {
      e.nodeType === Pn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function xg(e, t) {
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
    function rw(e, t) {
      e.nodeType === Pn ? xg(e.parentNode, t) : e.nodeType === Zr && xg(e, t), Vl(e);
    }
    function aw(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function iw(e) {
      e.nodeValue = "";
    }
    function ow(e, t) {
      e = e;
      var a = t[jx], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = kc("display", i);
    }
    function lw(e, t) {
      e.nodeValue = t;
    }
    function uw(e) {
      e.nodeType === Zr ? e.textContent = "" : e.nodeType === no && e.documentElement && e.removeChild(e.documentElement);
    }
    function sw(e, t, a) {
      return e.nodeType !== Zr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function cw(e, t) {
      return t === "" || e.nodeType !== to ? null : e;
    }
    function fw(e) {
      return e.nodeType !== Pn ? null : e;
    }
    function P_(e) {
      return e.data === Tp;
    }
    function wg(e) {
      return e.data === Dp;
    }
    function dw(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function pw(e, t) {
      e._reactRetry = t;
    }
    function nm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Zr || t === to)
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
    function vw(e) {
      return nm(e.firstChild);
    }
    function hw(e) {
      return nm(e.firstChild);
    }
    function mw(e) {
      return nm(e.nextSibling);
    }
    function yw(e, t, a, i, l, s, d) {
      Lp(s, e), kg(e, a);
      var y;
      {
        var g = l;
        y = g.namespace;
      }
      var b = (s.mode & Dt) !== it;
      return Rx(e, t, a, y, i, b, d);
    }
    function gw(e, t, a, i) {
      return Lp(a, e), a.mode & Dt, kx(e, t);
    }
    function _w(e, t) {
      Lp(t, e);
    }
    function Sw(e) {
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
    function Cw(e) {
      Vl(e);
    }
    function Ew(e) {
      Vl(e);
    }
    function xw(e) {
      return e !== "head" && e !== "body";
    }
    function ww(e, t, a, i) {
      var l = !0;
      Xh(t.nodeValue, a, i, l);
    }
    function bw(e, t, a, i, l, s) {
      if (t[Zh] !== !0) {
        var d = !0;
        Xh(i.nodeValue, l, s, d);
      }
    }
    function Rw(e, t) {
      t.nodeType === Zr ? vg(e, t) : t.nodeType === Pn || hg(e, t);
    }
    function kw(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Zr ? vg(a, t) : t.nodeType === Pn || hg(a, t));
      }
    }
    function Tw(e, t, a, i, l) {
      (l || t[Zh] !== !0) && (i.nodeType === Zr ? vg(a, i) : i.nodeType === Pn || hg(a, i));
    }
    function Dw(e, t, a) {
      mg(e, t);
    }
    function Nw(e, t) {
      yg(e, t);
    }
    function Ow(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && mg(i, t);
      }
    }
    function Lw(e, t) {
      {
        var a = e.parentNode;
        a !== null && yg(a, t);
      }
    }
    function Mw(e, t, a, i, l, s) {
      (s || t[Zh] !== !0) && mg(a, i);
    }
    function jw(e, t, a, i, l) {
      (l || t[Zh] !== !0) && yg(a, i);
    }
    function Aw(e) {
      h("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Uw(e) {
      Ep(e);
    }
    var Uf = Math.random().toString(36).slice(2), zf = "__reactFiber$" + Uf, bg = "__reactProps$" + Uf, Op = "__reactContainer$" + Uf, Rg = "__reactEvents$" + Uf, zw = "__reactListeners$" + Uf, Pw = "__reactHandles$" + Uf;
    function Iw(e) {
      delete e[zf], delete e[bg], delete e[Rg], delete e[zw], delete e[Pw];
    }
    function Lp(e, t) {
      t[zf] = e;
    }
    function rm(e, t) {
      t[Op] = e;
    }
    function F_(e) {
      e[Op] = null;
    }
    function Mp(e) {
      return !!e[Op];
    }
    function ic(e) {
      var t = e[zf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Op] || a[zf], t) {
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
    function $u(e) {
      var t = e[zf] || e[Op];
      return t && (t.tag === $ || t.tag === ie || t.tag === ve || t.tag === A) ? t : null;
    }
    function Pf(e) {
      if (e.tag === $ || e.tag === ie)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function am(e) {
      return e[bg] || null;
    }
    function kg(e, t) {
      e[bg] = t;
    }
    function Fw(e) {
      var t = e[Rg];
      return t === void 0 && (t = e[Rg] = /* @__PURE__ */ new Set()), t;
    }
    var V_ = {}, H_ = p.ReactDebugCurrentFrame;
    function im(e) {
      if (e) {
        var t = e._owner, a = Xi(e.type, e._source, t ? t.type : null);
        H_.setExtraStackFrame(a);
      } else
        H_.setExtraStackFrame(null);
    }
    function vo(e, t, a, i, l) {
      {
        var s = Function.call.bind(Or);
        for (var d in e)
          if (s(e, d)) {
            var y = void 0;
            try {
              if (typeof e[d] != "function") {
                var g = Error((i || "React class") + ": " + a + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              y = e[d](t, d, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              y = b;
            }
            y && !(y instanceof Error) && (im(l), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, d, typeof y), im(null)), y instanceof Error && !(y.message in V_) && (V_[y.message] = !0, im(l), h("Failed %s type: %s", a, y.message), im(null));
          }
      }
    }
    var Tg = [], om;
    om = [];
    var Yl = -1;
    function Bu(e) {
      return {
        current: e
      };
    }
    function ca(e, t) {
      if (Yl < 0) {
        h("Unexpected pop.");
        return;
      }
      t !== om[Yl] && h("Unexpected Fiber popped."), e.current = Tg[Yl], Tg[Yl] = null, om[Yl] = null, Yl--;
    }
    function fa(e, t, a) {
      Yl++, Tg[Yl] = e.current, om[Yl] = a, e.current = t;
    }
    var Dg;
    Dg = {};
    var vi = {};
    Object.freeze(vi);
    var Gl = Bu(vi), tl = Bu(!1), Ng = vi;
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
          return vi;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var d in i)
          s[d] = t[d];
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
      ca(tl, e), ca(Gl, e);
    }
    function Og(e) {
      ca(tl, e), ca(Gl, e);
    }
    function B_(e, t, a) {
      {
        if (Gl.current !== vi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        fa(Gl, t, e), fa(tl, a, e);
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
        var d = i.getChildContext();
        for (var y in d)
          if (!(y in l))
            throw new Error((gt(e) || "Unknown") + '.getChildContext(): key "' + y + '" is not defined in childContextTypes.');
        {
          var g = gt(e) || "Unknown";
          vo(l, d, "child context", g);
        }
        return bt({}, a, d);
      }
    }
    function sm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || vi;
        return Ng = Gl.current, fa(Gl, a, e), fa(tl, tl.current, e), !0;
      }
    }
    function W_(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = q_(e, t, Ng);
          i.__reactInternalMemoizedMergedChildContext = l, ca(tl, e), ca(Gl, e), fa(Gl, l, e), fa(tl, a, e);
        } else
          ca(tl, e), fa(tl, a, e);
      }
    }
    function Vw(e) {
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
    var qu = 0, cm = 1, Ql = null, Lg = !1, Mg = !1;
    function Y_(e) {
      Ql === null ? Ql = [e] : Ql.push(e);
    }
    function Hw(e) {
      Lg = !0, Y_(e);
    }
    function G_() {
      Lg && Wu();
    }
    function Wu() {
      if (!Mg && Ql !== null) {
        Mg = !0;
        var e = 0, t = Ha();
        try {
          var a = !0, i = Ql;
          for ($n(zr); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          Ql = null, Lg = !1;
        } catch (s) {
          throw Ql !== null && (Ql = Ql.slice(e + 1)), Ud(ws, Wu), s;
        } finally {
          $n(t), Mg = !1;
        }
      }
      return null;
    }
    var Vf = [], Hf = 0, fm = null, dm = 0, Vi = [], Hi = 0, oc = null, Kl = 1, Xl = "";
    function $w(e) {
      return uc(), (e.flags & Oi) !== at;
    }
    function Bw(e) {
      return uc(), dm;
    }
    function qw() {
      var e = Xl, t = Kl, a = t & ~Ww(t);
      return a.toString(32) + e;
    }
    function lc(e, t) {
      uc(), Vf[Hf++] = dm, Vf[Hf++] = fm, fm = e, dm = t;
    }
    function Q_(e, t, a) {
      uc(), Vi[Hi++] = Kl, Vi[Hi++] = Xl, Vi[Hi++] = oc, oc = e;
      var i = Kl, l = Xl, s = pm(i) - 1, d = i & ~(1 << s), y = a + 1, g = pm(t) + s;
      if (g > 30) {
        var b = s - s % 5, T = (1 << b) - 1, P = (d & T).toString(32), U = d >> b, Y = s - b, K = pm(t) + Y, te = y << Y, je = te | U, ut = P + l;
        Kl = 1 << K | je, Xl = ut;
      } else {
        var et = y << s, zt = et | d, Lt = l;
        Kl = 1 << g | zt, Xl = Lt;
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
    function Ww(e) {
      return 1 << pm(e) - 1;
    }
    function Ag(e) {
      for (; e === fm; )
        fm = Vf[--Hf], Vf[Hf] = null, dm = Vf[--Hf], Vf[Hf] = null;
      for (; e === oc; )
        oc = Vi[--Hi], Vi[Hi] = null, Xl = Vi[--Hi], Vi[Hi] = null, Kl = Vi[--Hi], Vi[Hi] = null;
    }
    function Yw() {
      return uc(), oc !== null ? {
        id: Kl,
        overflow: Xl
      } : null;
    }
    function Gw(e, t) {
      uc(), Vi[Hi++] = Kl, Vi[Hi++] = Xl, Vi[Hi++] = oc, Kl = t.id, Xl = t.overflow, oc = e;
    }
    function uc() {
      Hr() || h("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Vr = null, $i = null, ho = !1, sc = !1, Yu = null;
    function Qw() {
      ho && h("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function K_() {
      sc = !0;
    }
    function Kw() {
      return sc;
    }
    function Xw(e) {
      var t = e.stateNode.containerInfo;
      return $i = hw(t), Vr = e, ho = !0, Yu = null, sc = !1, !0;
    }
    function Jw(e, t, a) {
      return $i = mw(t), Vr = e, ho = !0, Yu = null, sc = !1, a !== null && Gw(e, a), !0;
    }
    function X_(e, t) {
      switch (e.tag) {
        case A: {
          Rw(e.stateNode.containerInfo, t);
          break;
        }
        case $: {
          var a = (e.mode & Dt) !== it;
          Tw(
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
          i.dehydrated !== null && kw(i.dehydrated, t);
          break;
        }
      }
    }
    function J_(e, t) {
      X_(e, t);
      var a = nT();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Aa) : i.push(a);
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
                t.pendingProps, Dw(a, i);
                break;
              case ie:
                var l = t.pendingProps;
                Nw(a, l);
                break;
            }
            break;
          }
          case $: {
            var s = e.type, d = e.memoizedProps, y = e.stateNode;
            switch (t.tag) {
              case $: {
                var g = t.type, b = t.pendingProps, T = (e.mode & Dt) !== it;
                Mw(
                  s,
                  d,
                  y,
                  g,
                  b,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
              case ie: {
                var P = t.pendingProps, U = (e.mode & Dt) !== it;
                jw(
                  s,
                  d,
                  y,
                  P,
                  // TODO: Delete this argument when we remove the legacy root API.
                  U
                );
                break;
              }
            }
            break;
          }
          case ve: {
            var Y = e.memoizedState, K = Y.dehydrated;
            if (K !== null) switch (t.tag) {
              case $:
                var te = t.type;
                t.pendingProps, Ow(K, te);
                break;
              case ie:
                var je = t.pendingProps;
                Lw(K, je);
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
      t.flags = t.flags & ~ta | Cn, Ug(e, t);
    }
    function e2(e, t) {
      switch (e.tag) {
        case $: {
          var a = e.type;
          e.pendingProps;
          var i = sw(t, a);
          return i !== null ? (e.stateNode = i, Vr = e, $i = vw(i), !0) : !1;
        }
        case ie: {
          var l = e.pendingProps, s = cw(t, l);
          return s !== null ? (e.stateNode = s, Vr = e, $i = null, !0) : !1;
        }
        case ve: {
          var d = fw(t);
          if (d !== null) {
            var y = {
              dehydrated: d,
              treeContext: Yw(),
              retryLane: ia
            };
            e.memoizedState = y;
            var g = rT(d);
            return g.return = e, e.child = g, Vr = e, $i = null, !0;
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
          zg(e) && (Ug(Vr, e), Pg()), Z_(Vr, e), ho = !1, Vr = e;
          return;
        }
        var a = t;
        if (!e2(e, t)) {
          zg(e) && (Ug(Vr, e), Pg()), t = Np(a);
          var i = Vr;
          if (!t || !e2(e, t)) {
            Z_(Vr, e), ho = !1, Vr = e;
            return;
          }
          J_(i, a);
        }
      }
    }
    function Zw(e, t, a) {
      var i = e.stateNode, l = !sc, s = yw(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function eb(e) {
      var t = e.stateNode, a = e.memoizedProps, i = gw(t, a, e);
      if (i) {
        var l = Vr;
        if (l !== null)
          switch (l.tag) {
            case A: {
              var s = l.stateNode.containerInfo, d = (l.mode & Dt) !== it;
              ww(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                d
              );
              break;
            }
            case $: {
              var y = l.type, g = l.memoizedProps, b = l.stateNode, T = (l.mode & Dt) !== it;
              bw(
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
    function tb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      _w(a, e);
    }
    function nb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Sw(a);
    }
    function t2(e) {
      for (var t = e.return; t !== null && t.tag !== $ && t.tag !== A && t.tag !== ve; )
        t = t.return;
      Vr = t;
    }
    function vm(e) {
      if (e !== Vr)
        return !1;
      if (!ho)
        return t2(e), ho = !0, !1;
      if (e.tag !== A && (e.tag !== $ || xw(e.type) && !Sg(e.type, e.memoizedProps))) {
        var t = $i;
        if (t)
          if (zg(e))
            n2(e), Pg();
          else
            for (; t; )
              J_(e, t), t = Np(t);
      }
      return t2(e), e.tag === ve ? $i = nb(e) : $i = Vr ? Np(e.stateNode) : null, !0;
    }
    function rb() {
      return ho && $i !== null;
    }
    function n2(e) {
      for (var t = $i; t; )
        X_(e, t), t = Np(t);
    }
    function $f() {
      Vr = null, $i = null, ho = !1, sc = !1;
    }
    function r2() {
      Yu !== null && (KS(Yu), Yu = null);
    }
    function Hr() {
      return ho;
    }
    function Fg(e) {
      Yu === null ? Yu = [e] : Yu.push(e);
    }
    var ab = p.ReactCurrentBatchConfig, ib = null;
    function ob() {
      return ab.transition;
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
      var lb = function(e) {
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
        jp.length > 0 && (jp.forEach(function(U) {
          e.add(gt(U) || "Component"), fc.add(U.type);
        }), jp = []);
        var t = /* @__PURE__ */ new Set();
        Ap.length > 0 && (Ap.forEach(function(U) {
          t.add(gt(U) || "Component"), fc.add(U.type);
        }), Ap = []);
        var a = /* @__PURE__ */ new Set();
        Up.length > 0 && (Up.forEach(function(U) {
          a.add(gt(U) || "Component"), fc.add(U.type);
        }), Up = []);
        var i = /* @__PURE__ */ new Set();
        zp.length > 0 && (zp.forEach(function(U) {
          i.add(gt(U) || "Component"), fc.add(U.type);
        }), zp = []);
        var l = /* @__PURE__ */ new Set();
        Pp.length > 0 && (Pp.forEach(function(U) {
          l.add(gt(U) || "Component"), fc.add(U.type);
        }), Pp = []);
        var s = /* @__PURE__ */ new Set();
        if (Ip.length > 0 && (Ip.forEach(function(U) {
          s.add(gt(U) || "Component"), fc.add(U.type);
        }), Ip = []), t.size > 0) {
          var d = cc(t);
          h(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, d);
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
          var P = cc(l);
          E(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, P);
        }
      };
      var hm = /* @__PURE__ */ new Map(), a2 = /* @__PURE__ */ new Set();
      mo.recordLegacyContextWarning = function(e, t) {
        var a = lb(e);
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
    function ub(e) {
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
        !(typeof a.type == "function" && !ub(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var l = gt(e) || "Component";
          $g[l] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, i), $g[l] = !0);
        }
        if (a._owner) {
          var s = a._owner, d;
          if (s) {
            var y = s;
            if (y.tag !== x)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            d = y.stateNode;
          }
          if (!d)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var g = d;
          _i(i, "ref");
          var b = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === b)
            return t.ref;
          var T = function(P) {
            var U = g.refs;
            P === null ? delete U[b] : U[b] = P;
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
          q === null ? (B.deletions = [ne], B.flags |= Aa) : q.push(ne);
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
          return B.flags |= Oi, ne;
        var ye = B.alternate;
        if (ye !== null) {
          var $e = ye.index;
          return $e < ne ? (B.flags |= Cn, ne) : $e;
        } else
          return B.flags |= Cn, ne;
      }
      function d(B) {
        return e && B.alternate === null && (B.flags |= Cn), B;
      }
      function y(B, ne, q, ye) {
        if (ne === null || ne.tag !== ie) {
          var $e = F1(q, B.mode, ye);
          return $e.return = B, $e;
        } else {
          var Ue = l(ne, q);
          return Ue.return = B, Ue;
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
          var Ue = l(ne, q.props);
          return Ue.ref = Fp(B, ne, q), Ue.return = B, Ue._debugSource = q._source, Ue._debugOwner = q._owner, Ue;
        }
        var ht = I1(q, B.mode, ye);
        return ht.ref = Fp(B, ne, q), ht.return = B, ht;
      }
      function b(B, ne, q, ye) {
        if (ne === null || ne.tag !== F || ne.stateNode.containerInfo !== q.containerInfo || ne.stateNode.implementation !== q.implementation) {
          var $e = V1(q, B.mode, ye);
          return $e.return = B, $e;
        } else {
          var Ue = l(ne, q.children || []);
          return Ue.return = B, Ue;
        }
      }
      function T(B, ne, q, ye, $e) {
        if (ne === null || ne.tag !== oe) {
          var Ue = as(q, B.mode, ye, $e);
          return Ue.return = B, Ue;
        } else {
          var ht = l(ne, q);
          return ht.return = B, ht;
        }
      }
      function P(B, ne, q) {
        if (typeof ne == "string" && ne !== "" || typeof ne == "number") {
          var ye = F1("" + ne, B.mode, q);
          return ye.return = B, ye;
        }
        if (typeof ne == "object" && ne !== null) {
          switch (ne.$$typeof) {
            case Mr: {
              var $e = I1(ne, B.mode, q);
              return $e.ref = Fp(B, null, ne), $e.return = B, $e;
            }
            case sr: {
              var Ue = V1(ne, B.mode, q);
              return Ue.return = B, Ue;
            }
            case _t: {
              var ht = ne._payload, Ct = ne._init;
              return P(B, Ct(ht), q);
            }
          }
          if (kt(ne) || xt(ne)) {
            var on = as(ne, B.mode, q, null);
            return on.return = B, on;
          }
          mm(B, ne);
        }
        return typeof ne == "function" && ym(B), null;
      }
      function U(B, ne, q, ye) {
        var $e = ne !== null ? ne.key : null;
        if (typeof q == "string" && q !== "" || typeof q == "number")
          return $e !== null ? null : y(B, ne, "" + q, ye);
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case Mr:
              return q.key === $e ? g(B, ne, q, ye) : null;
            case sr:
              return q.key === $e ? b(B, ne, q, ye) : null;
            case _t: {
              var Ue = q._payload, ht = q._init;
              return U(B, ne, ht(Ue), ye);
            }
          }
          if (kt(q) || xt(q))
            return $e !== null ? null : T(B, ne, q, ye, null);
          mm(B, q);
        }
        return typeof q == "function" && ym(B), null;
      }
      function Y(B, ne, q, ye, $e) {
        if (typeof ye == "string" && ye !== "" || typeof ye == "number") {
          var Ue = B.get(q) || null;
          return y(ne, Ue, "" + ye, $e);
        }
        if (typeof ye == "object" && ye !== null) {
          switch (ye.$$typeof) {
            case Mr: {
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
          if (kt(ye) || xt(ye)) {
            var er = B.get(q) || null;
            return T(ne, er, ye, $e, null);
          }
          mm(ne, ye);
        }
        return typeof ye == "function" && ym(ne), null;
      }
      function K(B, ne, q) {
        {
          if (typeof B != "object" || B === null)
            return ne;
          switch (B.$$typeof) {
            case Mr:
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
              var $e = B._payload, Ue = B._init;
              K(Ue($e), ne, q);
              break;
          }
        }
        return ne;
      }
      function te(B, ne, q, ye) {
        for (var $e = null, Ue = 0; Ue < q.length; Ue++) {
          var ht = q[Ue];
          $e = K(ht, $e, B);
        }
        for (var Ct = null, on = null, Wt = ne, er = 0, Yt = 0, Wn = null; Wt !== null && Yt < q.length; Yt++) {
          Wt.index > Yt ? (Wn = Wt, Wt = null) : Wn = Wt.sibling;
          var pa = U(B, Wt, q[Yt], ye);
          if (pa === null) {
            Wt === null && (Wt = Wn);
            break;
          }
          e && Wt && pa.alternate === null && t(B, Wt), er = s(pa, er, Yt), on === null ? Ct = pa : on.sibling = pa, on = pa, Wt = Wn;
        }
        if (Yt === q.length) {
          if (a(B, Wt), Hr()) {
            var Qr = Yt;
            lc(B, Qr);
          }
          return Ct;
        }
        if (Wt === null) {
          for (; Yt < q.length; Yt++) {
            var mi = P(B, q[Yt], ye);
            mi !== null && (er = s(mi, er, Yt), on === null ? Ct = mi : on.sibling = mi, on = mi);
          }
          if (Hr()) {
            var Ta = Yt;
            lc(B, Ta);
          }
          return Ct;
        }
        for (var Da = i(B, Wt); Yt < q.length; Yt++) {
          var va = Y(Da, B, Yt, q[Yt], ye);
          va !== null && (e && va.alternate !== null && Da.delete(va.key === null ? Yt : va.key), er = s(va, er, Yt), on === null ? Ct = va : on.sibling = va, on = va);
        }
        if (e && Da.forEach(function(ud) {
          return t(B, ud);
        }), Hr()) {
          var au = Yt;
          lc(B, au);
        }
        return Ct;
      }
      function je(B, ne, q, ye) {
        var $e = xt(q);
        if (typeof $e != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          q[Symbol.toStringTag] === "Generator" && (Hg || h("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Hg = !0), q.entries === $e && (Vg || h("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Vg = !0);
          var Ue = $e.call(q);
          if (Ue)
            for (var ht = null, Ct = Ue.next(); !Ct.done; Ct = Ue.next()) {
              var on = Ct.value;
              ht = K(on, ht, B);
            }
        }
        var Wt = $e.call(q);
        if (Wt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var er = null, Yt = null, Wn = ne, pa = 0, Qr = 0, mi = null, Ta = Wt.next(); Wn !== null && !Ta.done; Qr++, Ta = Wt.next()) {
          Wn.index > Qr ? (mi = Wn, Wn = null) : mi = Wn.sibling;
          var Da = U(B, Wn, Ta.value, ye);
          if (Da === null) {
            Wn === null && (Wn = mi);
            break;
          }
          e && Wn && Da.alternate === null && t(B, Wn), pa = s(Da, pa, Qr), Yt === null ? er = Da : Yt.sibling = Da, Yt = Da, Wn = mi;
        }
        if (Ta.done) {
          if (a(B, Wn), Hr()) {
            var va = Qr;
            lc(B, va);
          }
          return er;
        }
        if (Wn === null) {
          for (; !Ta.done; Qr++, Ta = Wt.next()) {
            var au = P(B, Ta.value, ye);
            au !== null && (pa = s(au, pa, Qr), Yt === null ? er = au : Yt.sibling = au, Yt = au);
          }
          if (Hr()) {
            var ud = Qr;
            lc(B, ud);
          }
          return er;
        }
        for (var gv = i(B, Wn); !Ta.done; Qr++, Ta = Wt.next()) {
          var cl = Y(gv, B, Qr, Ta.value, ye);
          cl !== null && (e && cl.alternate !== null && gv.delete(cl.key === null ? Qr : cl.key), pa = s(cl, pa, Qr), Yt === null ? er = cl : Yt.sibling = cl, Yt = cl);
        }
        if (e && gv.forEach(function(jT) {
          return t(B, jT);
        }), Hr()) {
          var MT = Qr;
          lc(B, MT);
        }
        return er;
      }
      function ut(B, ne, q, ye) {
        if (ne !== null && ne.tag === ie) {
          a(B, ne.sibling);
          var $e = l(ne, q);
          return $e.return = B, $e;
        }
        a(B, ne);
        var Ue = F1(q, B.mode, ye);
        return Ue.return = B, Ue;
      }
      function et(B, ne, q, ye) {
        for (var $e = q.key, Ue = ne; Ue !== null; ) {
          if (Ue.key === $e) {
            var ht = q.type;
            if (ht === Ci) {
              if (Ue.tag === oe) {
                a(B, Ue.sibling);
                var Ct = l(Ue, q.props.children);
                return Ct.return = B, Ct._debugSource = q._source, Ct._debugOwner = q._owner, Ct;
              }
            } else if (Ue.elementType === ht || // Keep this check inline so it only runs on the false path:
            dC(Ue, q) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ht == "object" && ht !== null && ht.$$typeof === _t && o2(ht) === Ue.type) {
              a(B, Ue.sibling);
              var on = l(Ue, q.props);
              return on.ref = Fp(B, Ue, q), on.return = B, on._debugSource = q._source, on._debugOwner = q._owner, on;
            }
            a(B, Ue);
            break;
          } else
            t(B, Ue);
          Ue = Ue.sibling;
        }
        if (q.type === Ci) {
          var Wt = as(q.props.children, B.mode, ye, q.key);
          return Wt.return = B, Wt;
        } else {
          var er = I1(q, B.mode, ye);
          return er.ref = Fp(B, ne, q), er.return = B, er;
        }
      }
      function zt(B, ne, q, ye) {
        for (var $e = q.key, Ue = ne; Ue !== null; ) {
          if (Ue.key === $e)
            if (Ue.tag === F && Ue.stateNode.containerInfo === q.containerInfo && Ue.stateNode.implementation === q.implementation) {
              a(B, Ue.sibling);
              var ht = l(Ue, q.children || []);
              return ht.return = B, ht;
            } else {
              a(B, Ue);
              break;
            }
          else
            t(B, Ue);
          Ue = Ue.sibling;
        }
        var Ct = V1(q, B.mode, ye);
        return Ct.return = B, Ct;
      }
      function Lt(B, ne, q, ye) {
        var $e = typeof q == "object" && q !== null && q.type === Ci && q.key === null;
        if ($e && (q = q.props.children), typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case Mr:
              return d(et(B, ne, q, ye));
            case sr:
              return d(zt(B, ne, q, ye));
            case _t:
              var Ue = q._payload, ht = q._init;
              return Lt(B, ne, ht(Ue), ye);
          }
          if (kt(q))
            return te(B, ne, q, ye);
          if (xt(q))
            return je(B, ne, q, ye);
          mm(B, q);
        }
        return typeof q == "string" && q !== "" || typeof q == "number" ? d(ut(B, ne, "" + q, ye)) : (typeof q == "function" && ym(B), a(B, ne));
      }
      return Lt;
    }
    var Bf = l2(!0), u2 = l2(!1);
    function sb(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Sc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Sc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function cb(e, t) {
      for (var a = e.child; a !== null; )
        Xk(a, t), a = a.sibling;
    }
    var Wg = Bu(null), Yg;
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
      fa(Wg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Yg && h("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Yg;
    }
    function Qg(e, t) {
      var a = Wg.current;
      ca(Wg, t), e._currentValue = a;
    }
    function Kg(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (Fl(i.childLanes, t) ? l !== null && !Fl(l.childLanes, t) && (l.childLanes = wt(l.childLanes, t)) : (i.childLanes = wt(i.childLanes, t), l !== null && (l.childLanes = wt(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && h("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function fb(e, t, a) {
      db(e, t, a);
    }
    function db(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, s = i.dependencies;
        if (s !== null) {
          l = i.child;
          for (var d = s.firstContext; d !== null; ) {
            if (d.context === t) {
              if (i.tag === x) {
                var y = Ps(a), g = Jl(ln, y);
                g.tag = Em;
                var b = i.updateQueue;
                if (b !== null) {
                  var T = b.shared, P = T.pending;
                  P === null ? g.next = g : (g.next = P.next, P.next = g), T.pending = g;
                }
              }
              i.lanes = wt(i.lanes, a);
              var U = i.alternate;
              U !== null && (U.lanes = wt(U.lanes, a)), Kg(i.return, a, e), s.lanes = wt(s.lanes, a);
              break;
            }
            d = d.next;
          }
        } else if (i.tag === ge)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === ot) {
          var Y = i.return;
          if (Y === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          Y.lanes = wt(Y.lanes, a);
          var K = Y.alternate;
          K !== null && (K.lanes = wt(K.lanes, a)), Kg(Y, a, e), l = i.sibling;
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
        i !== null && (oa(a.lanes, t) && tv(), a.firstContext = null);
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
    function pb() {
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
    function vb(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, Xg(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function hb(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Xg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, Cm(e, i);
    }
    function qa(e, t) {
      return Cm(e, t);
    }
    var mb = Cm;
    function Cm(e, t) {
      e.lanes = wt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = wt(a.lanes, t)), a === null && (e.flags & (Cn | ta)) !== at && uC(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = wt(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = wt(a.childLanes, t) : (l.flags & (Cn | ta)) !== at && uC(e), i = l, l = l.return;
      if (i.tag === A) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var p2 = 0, v2 = 1, Em = 2, Jg = 3, xm = !1, Zg, wm;
    Zg = !1, wm = null;
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
    function Gu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (wm === l && !Zg && (h("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Zg = !0), vk()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, mb(e, a);
      } else
        return hb(e, l, t, a);
    }
    function bm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (Zd(a)) {
          var s = l.lanes;
          s = tp(s, e.pendingLanes);
          var d = wt(s, a);
          l.lanes = d, gf(e, d);
        }
      }
    }
    function t0(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var s = null, d = null, y = a.firstBaseUpdate;
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
              d === null ? s = d = b : (d.next = b, d = b), g = g.next;
            } while (g !== null);
            d === null ? s = d = t : (d.next = t, d = t);
          } else
            s = d = t;
          a = {
            baseState: l.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: d,
            shared: l.shared,
            effects: l.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var T = a.lastBaseUpdate;
      T === null ? a.firstBaseUpdate = t : T.next = t, a.lastBaseUpdate = t;
    }
    function yb(e, t, a, i, l, s) {
      switch (a.tag) {
        case v2: {
          var d = a.payload;
          if (typeof d == "function") {
            s2();
            var y = d.call(s, i, l);
            {
              if (e.mode & rn) {
                En(!0);
                try {
                  d.call(s, i, l);
                } finally {
                  En(!1);
                }
              }
              c2();
            }
            return y;
          }
          return d;
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
          return xm = !0, i;
      }
      return i;
    }
    function Rm(e, t, a, i) {
      var l = e.updateQueue;
      xm = !1, wm = l.shared;
      var s = l.firstBaseUpdate, d = l.lastBaseUpdate, y = l.shared.pending;
      if (y !== null) {
        l.shared.pending = null;
        var g = y, b = g.next;
        g.next = null, d === null ? s = b : d.next = b, d = g;
        var T = e.alternate;
        if (T !== null) {
          var P = T.updateQueue, U = P.lastBaseUpdate;
          U !== d && (U === null ? P.firstBaseUpdate = b : U.next = b, P.lastBaseUpdate = g);
        }
      }
      if (s !== null) {
        var Y = l.baseState, K = se, te = null, je = null, ut = null, et = s;
        do {
          var zt = et.lane, Lt = et.eventTime;
          if (Fl(i, zt)) {
            if (ut !== null) {
              var ne = {
                eventTime: Lt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Vt,
                tag: et.tag,
                payload: et.payload,
                callback: et.callback,
                next: null
              };
              ut = ut.next = ne;
            }
            Y = yb(e, l, et, Y, t, a);
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
              eventTime: Lt,
              lane: zt,
              tag: et.tag,
              payload: et.payload,
              callback: et.callback,
              next: null
            };
            ut === null ? (je = ut = B, te = Y) : ut = ut.next = B, K = wt(K, zt);
          }
          if (et = et.next, et === null) {
            if (y = l.shared.pending, y === null)
              break;
            var $e = y, Ue = $e.next;
            $e.next = null, et = Ue, l.lastBaseUpdate = $e, l.shared.pending = null;
          }
        } while (!0);
        ut === null && (te = Y), l.baseState = te, l.firstBaseUpdate = je, l.lastBaseUpdate = ut;
        var ht = l.shared.interleaved;
        if (ht !== null) {
          var Ct = ht;
          do
            K = wt(K, Ct.lane), Ct = Ct.next;
          while (Ct !== ht);
        } else s === null && (l.shared.lanes = se);
        pv(K), e.lanes = K, e.memoizedState = Y;
      }
      wm = null;
    }
    function gb(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function m2() {
      xm = !1;
    }
    function km() {
      return xm;
    }
    function y2(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], d = s.callback;
          d !== null && (s.callback = null, gb(d, a));
        }
    }
    var Vp = {}, Qu = Bu(Vp), Hp = Bu(Vp), Tm = Bu(Vp);
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
      fa(Tm, t, e), fa(Hp, e, e), fa(Qu, Vp, e);
      var a = Ax(t);
      ca(Qu, e), fa(Qu, a, e);
    }
    function Yf(e) {
      ca(Qu, e), ca(Hp, e), ca(Tm, e);
    }
    function r0() {
      var e = Dm(Qu.current);
      return e;
    }
    function _2(e) {
      Dm(Tm.current);
      var t = Dm(Qu.current), a = Ux(t, e.type);
      t !== a && (fa(Hp, e, e), fa(Qu, a, e));
    }
    function a0(e) {
      Hp.current === e && (ca(Qu, e), ca(Hp, e));
    }
    var _b = 0, S2 = 1, C2 = 1, $p = 2, yo = Bu(_b);
    function i0(e, t) {
      return (e & t) !== 0;
    }
    function Gf(e) {
      return e & S2;
    }
    function o0(e, t) {
      return e & S2 | t;
    }
    function Sb(e, t) {
      return e | t;
    }
    function Ku(e, t) {
      fa(yo, t, e);
    }
    function Qf(e) {
      ca(yo, e);
    }
    function Cb(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Nm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ve) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || P_(i) || wg(i))
              return t;
          }
        } else if (t.tag === X && // revealOrder undefined can't be trusted because it don't
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
    var Wa = (
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
    ), $r = (
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
    function Eb(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Fe = p.ReactCurrentDispatcher, Bp = p.ReactCurrentBatchConfig, s0, Kf;
    s0 = /* @__PURE__ */ new Set();
    var pc = se, an = null, gr = null, _r = null, Om = !1, qp = !1, Wp = 0, xb = 0, wb = 25, ae = null, Bi = null, Xu = -1, c0 = !1;
    function Kt() {
      {
        var e = ae;
        Bi === null ? Bi = [e] : Bi.push(e);
      }
    }
    function ke() {
      {
        var e = ae;
        Bi !== null && (Xu++, Bi[Xu] !== e && bb(e));
      }
    }
    function Xf(e) {
      e != null && !kt(e) && h("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ae, typeof e);
    }
    function bb(e) {
      {
        var t = gt(an);
        if (!s0.has(t) && (s0.add(t), Bi !== null)) {
          for (var a = "", i = 30, l = 0; l <= Xu; l++) {
            for (var s = Bi[l], d = l === Xu ? e : s, y = l + 1 + ". " + s; y.length < i; )
              y += " ";
            y += d + `
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
    function da() {
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
        if (!pe(e[a], t[a]))
          return !1;
      return !0;
    }
    function Jf(e, t, a, i, l, s) {
      pc = s, an = t, Bi = e !== null ? e._debugHookTypes : null, Xu = -1, c0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = se, e !== null && e.memoizedState !== null ? Fe.current = $2 : Bi !== null ? Fe.current = H2 : Fe.current = V2;
      var d = a(i, l);
      if (qp) {
        var y = 0;
        do {
          if (qp = !1, Wp = 0, y >= wb)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          y += 1, c0 = !1, gr = null, _r = null, t.updateQueue = null, Xu = -1, Fe.current = B2, d = a(i, l);
        } while (qp);
      }
      Fe.current = Bm, t._debugHookTypes = Bi;
      var g = gr !== null && gr.next !== null;
      if (pc = se, an = null, gr = null, _r = null, ae = null, Bi = null, Xu = -1, e !== null && (e.flags & Fn) !== (t.flags & Fn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Dt) !== it && h("Internal React error: Expected static flag was missing. Please notify the React team."), Om = !1, g)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return d;
    }
    function Zf() {
      var e = Wp !== 0;
      return Wp = 0, e;
    }
    function E2(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Bt) !== it ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Is(e.lanes, a);
    }
    function x2() {
      if (Fe.current = Bm, Om) {
        for (var e = an.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Om = !1;
      }
      pc = se, an = null, gr = null, _r = null, Bi = null, Xu = -1, ae = null, U2 = !1, qp = !1, Wp = 0;
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
    function w2() {
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
      var d = s.dispatch = Db.bind(null, an, s);
      return [i.memoizedState, d];
    }
    function v0(e, t, a) {
      var i = qi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = gr, d = s.baseQueue, y = l.pending;
      if (y !== null) {
        if (d !== null) {
          var g = d.next, b = y.next;
          d.next = b, y.next = g;
        }
        s.baseQueue !== d && h("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = d = y, l.pending = null;
      }
      if (d !== null) {
        var T = d.next, P = s.baseState, U = null, Y = null, K = null, te = T;
        do {
          var je = te.lane;
          if (Fl(pc, je)) {
            if (K !== null) {
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
              K = K.next = et;
            }
            if (te.hasEagerState)
              P = te.eagerState;
            else {
              var zt = te.action;
              P = e(P, zt);
            }
          } else {
            var ut = {
              lane: je,
              action: te.action,
              hasEagerState: te.hasEagerState,
              eagerState: te.eagerState,
              next: null
            };
            K === null ? (Y = K = ut, U = P) : K = K.next = ut, an.lanes = wt(an.lanes, je), pv(je);
          }
          te = te.next;
        } while (te !== null && te !== T);
        K === null ? U = P : K.next = Y, pe(P, i.memoizedState) || tv(), i.memoizedState = P, i.baseState = U, i.baseQueue = K, l.lastRenderedState = P;
      }
      var Lt = l.interleaved;
      if (Lt !== null) {
        var B = Lt;
        do {
          var ne = B.lane;
          an.lanes = wt(an.lanes, ne), pv(ne), B = B.next;
        } while (B !== Lt);
      } else d === null && (l.lanes = se);
      var q = l.dispatch;
      return [i.memoizedState, q];
    }
    function h0(e, t, a) {
      var i = qi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, d = l.pending, y = i.memoizedState;
      if (d !== null) {
        l.pending = null;
        var g = d.next, b = g;
        do {
          var T = b.action;
          y = e(y, T), b = b.next;
        } while (b !== g);
        pe(y, i.memoizedState) || tv(), i.memoizedState = y, i.baseQueue === null && (i.baseState = y), l.lastRenderedState = y;
      }
      return [y, s];
    }
    function ZM(e, t, a) {
    }
    function e8(e, t, a) {
    }
    function m0(e, t, a) {
      var i = an, l = al(), s, d = Hr();
      if (d) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Kf || s !== a() && (h("The result of getServerSnapshot should be cached to avoid an infinite loop"), Kf = !0);
      } else {
        if (s = t(), !Kf) {
          var y = t();
          pe(s, y) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), Kf = !0);
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
      return l.queue = b, Um(k2.bind(null, i, b, e), [e]), i.flags |= ea, Yp(mr | $r, R2.bind(null, i, b, s, t), void 0, null), s;
    }
    function Lm(e, t, a) {
      var i = an, l = qi(), s = t();
      if (!Kf) {
        var d = t();
        pe(s, d) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), Kf = !0);
      }
      var y = l.memoizedState, g = !pe(y, s);
      g && (l.memoizedState = s, tv());
      var b = l.queue;
      if (Qp(k2.bind(null, i, b, e), [e]), b.getSnapshot !== t || g || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      _r !== null && _r.memoizedState.tag & mr) {
        i.flags |= ea, Yp(mr | $r, R2.bind(null, i, b, s, t), void 0, null);
        var T = sy();
        if (T === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        mf(T, pc) || b2(i, t, s);
      }
      return s;
    }
    function b2(e, t, a) {
      e.flags |= Tu;
      var i = {
        getSnapshot: t,
        value: a
      }, l = an.updateQueue;
      if (l === null)
        l = w2(), an.updateQueue = l, l.stores = [i];
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
        return !pe(a, i);
      } catch {
        return !0;
      }
    }
    function D2(e) {
      var t = qa(e, pt);
      t !== null && xr(t, e, pt, ln);
    }
    function Mm(e) {
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
      var i = a.dispatch = Nb.bind(null, an, a);
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
        s = w2(), an.updateQueue = s, s.lastEffect = l.next = l;
      else {
        var d = s.lastEffect;
        if (d === null)
          s.lastEffect = l.next = l;
        else {
          var y = d.next;
          d.next = l, l.next = y, s.lastEffect = l;
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
      var l = qi(), s = i === void 0 ? null : i, d = void 0;
      if (gr !== null) {
        var y = gr.memoizedState;
        if (d = y.destroy, s !== null) {
          var g = y.deps;
          if (f0(s, g)) {
            l.memoizedState = Yp(t, a, d, s);
            return;
          }
        }
      }
      an.flags |= e, l.memoizedState = Yp(mr | t, a, d, s);
    }
    function Um(e, t) {
      return (an.mode & Bt) !== it ? Gp(Li | ea | Hc, $r, e, t) : Gp(ea | Hc, $r, e, t);
    }
    function Qp(e, t) {
      return Am(ea, $r, e, t);
    }
    function S0(e, t) {
      return Gp(jt, rl, e, t);
    }
    function zm(e, t) {
      return Am(jt, rl, e, t);
    }
    function C0(e, t) {
      var a = jt;
      return a |= ao, (an.mode & Bt) !== it && (a |= Io), Gp(a, yr, e, t);
    }
    function Pm(e, t) {
      return Am(jt, yr, e, t);
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
      var i = a != null ? a.concat([e]) : null, l = jt;
      return l |= ao, (an.mode & Bt) !== it && (l |= Io), Gp(l, yr, N2.bind(null, t, e), i);
    }
    function Im(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Am(jt, yr, N2.bind(null, t, e), i);
    }
    function Rb(e, t) {
    }
    var Fm = Rb;
    function x0(e, t) {
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
    function w0(e, t) {
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
      var d = e();
      return a.memoizedState = [d, i], d;
    }
    function b0(e) {
      var t = al();
      return t.memoizedState = e, e;
    }
    function O2(e) {
      var t = qi(), a = gr, i = a.memoizedState;
      return M2(t, i, e);
    }
    function L2(e) {
      var t = qi();
      if (gr === null)
        return t.memoizedState = e, e;
      var a = gr.memoizedState;
      return M2(t, a, e);
    }
    function M2(e, t, a) {
      var i = !Xd(pc);
      if (i) {
        if (!pe(a, t)) {
          var l = ep();
          an.lanes = wt(an.lanes, l), pv(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, tv()), e.memoizedState = a, a;
    }
    function kb(e, t, a) {
      var i = Ha();
      $n(_h(i, Ui)), e(!0);
      var l = Bp.transition;
      Bp.transition = {};
      var s = Bp.transition;
      Bp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if ($n(i), Bp.transition = l, l === null && s._updatedFibers) {
          var d = s._updatedFibers.size;
          d > 10 && E("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function R0() {
      var e = Mm(!1), t = e[0], a = e[1], i = kb.bind(null, a), l = al();
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
    function Tb() {
      return U2;
    }
    function k0() {
      var e = al(), t = sy(), a = t.identifierPrefix, i;
      if (Hr()) {
        var l = qw();
        i = ":" + a + "R" + l;
        var s = Wp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var d = xb++;
        i = ":" + a + "r" + d.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function $m() {
      var e = qi(), t = e.memoizedState;
      return t;
    }
    function Db(e, t, a) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ns(e), l = {
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
          var d = ka();
          xr(s, e, i, d), I2(s, t, i);
        }
      }
      F2(e, i);
    }
    function Nb(e, t, a) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ns(e), l = {
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
          var d = t.lastRenderedReducer;
          if (d !== null) {
            var y;
            y = Fe.current, Fe.current = go;
            try {
              var g = t.lastRenderedState, b = d(g, a);
              if (l.hasEagerState = !0, l.eagerState = b, pe(b, g)) {
                vb(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              Fe.current = y;
            }
          }
        }
        var T = d2(e, t, l, i);
        if (T !== null) {
          var P = ka();
          xr(T, e, i, P), I2(T, t, i);
        }
      }
      F2(e, i);
    }
    function z2(e) {
      var t = e.alternate;
      return e === an || t !== null && t === an;
    }
    function P2(e, t) {
      qp = Om = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function I2(e, t, a) {
      if (Zd(a)) {
        var i = t.lanes;
        i = tp(i, e.pendingLanes);
        var l = wt(i, a);
        t.lanes = l, gf(e, l);
      }
    }
    function F2(e, t, a) {
      Ds(e, t);
    }
    var Bm = {
      readContext: lr,
      useCallback: da,
      useContext: da,
      useEffect: da,
      useImperativeHandle: da,
      useInsertionEffect: da,
      useLayoutEffect: da,
      useMemo: da,
      useReducer: da,
      useRef: da,
      useState: da,
      useDebugValue: da,
      useDeferredValue: da,
      useTransition: da,
      useMutableSource: da,
      useSyncExternalStore: da,
      useId: da,
      unstable_isNewReconciler: re
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
          return ae = "useCallback", Kt(), Xf(t), x0(e, t);
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
          var a = Fe.current;
          Fe.current = il;
          try {
            return w0(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", Kt();
          var i = Fe.current;
          Fe.current = il;
          try {
            return p0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", Kt(), _0(e);
        },
        useState: function(e) {
          ae = "useState", Kt();
          var t = Fe.current;
          Fe.current = il;
          try {
            return Mm(e);
          } finally {
            Fe.current = t;
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
        unstable_isNewReconciler: re
      }, H2 = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", ke(), x0(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", ke(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", ke(), Um(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", ke(), E0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", ke(), S0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", ke(), C0(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", ke();
          var a = Fe.current;
          Fe.current = il;
          try {
            return w0(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", ke();
          var i = Fe.current;
          Fe.current = il;
          try {
            return p0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", ke(), _0(e);
        },
        useState: function(e) {
          ae = "useState", ke();
          var t = Fe.current;
          Fe.current = il;
          try {
            return Mm(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", ke(), void 0;
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", ke(), b0(e);
        },
        useTransition: function() {
          return ae = "useTransition", ke(), R0();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", ke(), m0(e, t, a);
        },
        useId: function() {
          return ae = "useId", ke(), k0();
        },
        unstable_isNewReconciler: re
      }, $2 = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", ke(), Vm(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", ke(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", ke(), Qp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", ke(), Im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", ke(), zm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", ke(), Pm(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", ke();
          var a = Fe.current;
          Fe.current = go;
          try {
            return Hm(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", ke();
          var i = Fe.current;
          Fe.current = go;
          try {
            return v0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", ke(), jm();
        },
        useState: function(e) {
          ae = "useState", ke();
          var t = Fe.current;
          Fe.current = go;
          try {
            return y0(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", ke(), Fm();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", ke(), O2(e);
        },
        useTransition: function() {
          return ae = "useTransition", ke(), j2();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", ke(), Lm(e, t);
        },
        useId: function() {
          return ae = "useId", ke(), $m();
        },
        unstable_isNewReconciler: re
      }, B2 = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", ke(), Vm(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", ke(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", ke(), Qp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", ke(), Im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", ke(), zm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", ke(), Pm(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", ke();
          var a = Fe.current;
          Fe.current = qm;
          try {
            return Hm(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", ke();
          var i = Fe.current;
          Fe.current = qm;
          try {
            return h0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", ke(), jm();
        },
        useState: function(e) {
          ae = "useState", ke();
          var t = Fe.current;
          Fe.current = qm;
          try {
            return g0(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", ke(), Fm();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", ke(), L2(e);
        },
        useTransition: function() {
          return ae = "useTransition", ke(), A2();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", ke(), Lm(e, t);
        },
        useId: function() {
          return ae = "useId", ke(), $m();
        },
        unstable_isNewReconciler: re
      }, il = {
        readContext: function(e) {
          return T0(), lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", St(), Kt(), x0(e, t);
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
          var a = Fe.current;
          Fe.current = il;
          try {
            return w0(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", St(), Kt();
          var i = Fe.current;
          Fe.current = il;
          try {
            return p0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", St(), Kt(), _0(e);
        },
        useState: function(e) {
          ae = "useState", St(), Kt();
          var t = Fe.current;
          Fe.current = il;
          try {
            return Mm(e);
          } finally {
            Fe.current = t;
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
        unstable_isNewReconciler: re
      }, go = {
        readContext: function(e) {
          return T0(), lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", St(), ke(), Vm(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", St(), ke(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", St(), ke(), Qp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", St(), ke(), Im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", St(), ke(), zm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", St(), ke(), Pm(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", St(), ke();
          var a = Fe.current;
          Fe.current = go;
          try {
            return Hm(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", St(), ke();
          var i = Fe.current;
          Fe.current = go;
          try {
            return v0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", St(), ke(), jm();
        },
        useState: function(e) {
          ae = "useState", St(), ke();
          var t = Fe.current;
          Fe.current = go;
          try {
            return y0(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", St(), ke(), Fm();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", St(), ke(), O2(e);
        },
        useTransition: function() {
          return ae = "useTransition", St(), ke(), j2();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", St(), ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", St(), ke(), Lm(e, t);
        },
        useId: function() {
          return ae = "useId", St(), ke(), $m();
        },
        unstable_isNewReconciler: re
      }, qm = {
        readContext: function(e) {
          return T0(), lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", St(), ke(), Vm(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", St(), ke(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", St(), ke(), Qp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", St(), ke(), Im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", St(), ke(), zm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", St(), ke(), Pm(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", St(), ke();
          var a = Fe.current;
          Fe.current = go;
          try {
            return Hm(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", St(), ke();
          var i = Fe.current;
          Fe.current = go;
          try {
            return h0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", St(), ke(), jm();
        },
        useState: function(e) {
          ae = "useState", St(), ke();
          var t = Fe.current;
          Fe.current = go;
          try {
            return g0(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", St(), ke(), Fm();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", St(), ke(), L2(e);
        },
        useTransition: function() {
          return ae = "useTransition", St(), ke(), A2();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", St(), ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", St(), ke(), Lm(e, t);
        },
        useId: function() {
          return ae = "useId", St(), ke(), $m();
        },
        unstable_isNewReconciler: re
      };
    }
    var Ju = v.unstable_now, q2 = 0, Wm = -1, Kp = -1, Ym = -1, D0 = !1, Gm = !1;
    function W2() {
      return D0;
    }
    function Ob() {
      Gm = !0;
    }
    function Lb() {
      D0 = !1, Gm = !1;
    }
    function Mb() {
      D0 = Gm, Gm = !1;
    }
    function Y2() {
      return q2;
    }
    function G2() {
      q2 = Ju();
    }
    function N0(e) {
      Kp = Ju(), e.actualStartTime < 0 && (e.actualStartTime = Ju());
    }
    function Q2(e) {
      Kp = -1;
    }
    function Qm(e, t) {
      if (Kp >= 0) {
        var a = Ju() - Kp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Kp = -1;
      }
    }
    function ol(e) {
      if (Wm >= 0) {
        var t = Ju() - Wm;
        Wm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case A:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case we:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function O0(e) {
      if (Ym >= 0) {
        var t = Ju() - Ym;
        Ym = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case A:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case we:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function ll() {
      Wm = Ju();
    }
    function L0() {
      Ym = Ju();
    }
    function M0(e) {
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
      var d = s == null ? l : bt({}, l, s);
      if (e.memoizedState = d, e.lanes === se) {
        var y = e.updateQueue;
        y.baseState = d;
      }
    }
    var B0 = {
      isMounted: rh,
      enqueueSetState: function(e, t, a) {
        var i = ku(e), l = ka(), s = ns(i), d = Jl(l, s);
        d.payload = t, a != null && (Km(a, "setState"), d.callback = a);
        var y = Gu(i, d, s);
        y !== null && (xr(y, i, s, l), bm(y, i, s)), Ds(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ku(e), l = ka(), s = ns(i), d = Jl(l, s);
        d.tag = v2, d.payload = t, a != null && (Km(a, "replaceState"), d.callback = a);
        var y = Gu(i, d, s);
        y !== null && (xr(y, i, s, l), bm(y, i, s)), Ds(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ku(e), i = ka(), l = ns(a), s = Jl(i, l);
        s.tag = Em, t != null && (Km(t, "forceUpdate"), s.callback = t);
        var d = Gu(a, s, l);
        d !== null && (xr(d, a, l, i), bm(d, a, l)), Qc(a, l);
      }
    };
    function J2(e, t, a, i, l, s, d) {
      var y = e.stateNode;
      if (typeof y.shouldComponentUpdate == "function") {
        var g = y.shouldComponentUpdate(i, s, d);
        {
          if (e.mode & rn) {
            En(!0);
            try {
              g = y.shouldComponentUpdate(i, s, d);
            } finally {
              En(!1);
            }
          }
          g === void 0 && h("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", It(t) || "Component");
        }
        return g;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ge(a, i) || !Ge(l, s) : !0;
    }
    function jb(e, t, a) {
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
        var d = i.props !== a;
        i.props !== void 0 && d && h("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && h("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !z0.has(t) && (z0.add(t), h("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", It(t))), typeof i.getDerivedStateFromProps == "function" && h("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && h("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && h("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var y = i.state;
        y && (typeof y != "object" || kt(y)) && h("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && h("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function Z2(e, t) {
      t.updater = B0, e.stateNode = t, Rl(t, e), t._reactInternalInstance = j0;
    }
    function eS(e, t, a) {
      var i = !1, l = vi, s = vi, d = t.contextType;
      if ("contextType" in t) {
        var y = (
          // Allow null for conditional declaration
          d === null || d !== void 0 && d.$$typeof === M && d._context === void 0
        );
        if (!y && !H0.has(t)) {
          H0.add(t);
          var g = "";
          d === void 0 ? g = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof d != "object" ? g = " However, it is set to a " + typeof d + "." : d.$$typeof === xi ? g = " Did you accidentally pass the Context.Provider instead?" : d._context !== void 0 ? g = " Did you accidentally pass the Context.Consumer instead?" : g = " However, it is set to an object with keys {" + Object.keys(d).join(", ") + "}.", h("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", It(t) || "Component", g);
        }
      }
      if (typeof d == "object" && d !== null)
        s = lr(d);
      else {
        l = If(e, t, !0);
        var b = t.contextTypes;
        i = b != null, s = i ? Ff(e, l) : vi;
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
      var P = e.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null;
      Z2(e, T);
      {
        if (typeof t.getDerivedStateFromProps == "function" && P === null) {
          var U = It(t) || "Component";
          U0.has(U) || (U0.add(U), h("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", U, T.state === null ? "null" : "undefined", U));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var Y = null, K = null, te = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? Y = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && (Y = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? K = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (K = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? te = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && (te = "UNSAFE_componentWillUpdate"), Y !== null || K !== null || te !== null) {
            var je = It(t) || "Component", ut = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            P0.has(je) || (P0.add(je), h(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, je, ut, Y !== null ? `
  ` + Y : "", K !== null ? `
  ` + K : "", te !== null ? `
  ` + te : ""));
          }
        }
      }
      return i && $_(e, l, s), T;
    }
    function Ab(e, t) {
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
      jb(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = {}, e0(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = lr(s);
      else {
        var d = If(e, t, !0);
        l.context = Ff(e, d);
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
      if (typeof g == "function" && ($0(e, t, g, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (Ab(e, l), Rm(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var b = jt;
        b |= ao, (e.mode & Bt) !== it && (b |= Io), e.flags |= b;
      }
    }
    function Ub(e, t, a, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var d = l.context, y = t.contextType, g = vi;
      if (typeof y == "object" && y !== null)
        g = lr(y);
      else {
        var b = If(e, t, !0);
        g = Ff(e, b);
      }
      var T = t.getDerivedStateFromProps, P = typeof T == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !P && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || d !== g) && tS(e, l, a, g), m2();
      var U = e.memoizedState, Y = l.state = U;
      if (Rm(e, a, l, i), Y = e.memoizedState, s === a && U === Y && !lm() && !km()) {
        if (typeof l.componentDidMount == "function") {
          var K = jt;
          K |= ao, (e.mode & Bt) !== it && (K |= Io), e.flags |= K;
        }
        return !1;
      }
      typeof T == "function" && ($0(e, t, T, a), Y = e.memoizedState);
      var te = km() || J2(e, t, s, a, U, Y, g);
      if (te) {
        if (!P && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var je = jt;
          je |= ao, (e.mode & Bt) !== it && (je |= Io), e.flags |= je;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var ut = jt;
          ut |= ao, (e.mode & Bt) !== it && (ut |= Io), e.flags |= ut;
        }
        e.memoizedProps = a, e.memoizedState = Y;
      }
      return l.props = a, l.state = Y, l.context = g, te;
    }
    function zb(e, t, a, i, l) {
      var s = t.stateNode;
      h2(e, t);
      var d = t.memoizedProps, y = t.type === t.elementType ? d : _o(t.type, d);
      s.props = y;
      var g = t.pendingProps, b = s.context, T = a.contextType, P = vi;
      if (typeof T == "object" && T !== null)
        P = lr(T);
      else {
        var U = If(t, a, !0);
        P = Ff(t, U);
      }
      var Y = a.getDerivedStateFromProps, K = typeof Y == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !K && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (d !== g || b !== P) && tS(t, s, i, P), m2();
      var te = t.memoizedState, je = s.state = te;
      if (Rm(t, i, s, l), je = t.memoizedState, d === g && te === je && !lm() && !km() && !Oe)
        return typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= jt), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= Xn), !1;
      typeof Y == "function" && ($0(t, a, Y, i), je = t.memoizedState);
      var ut = km() || J2(t, a, y, i, te, je, P) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Oe;
      return ut ? (!K && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, je, P), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, je, P)), typeof s.componentDidUpdate == "function" && (t.flags |= jt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Xn)) : (typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= jt), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= Xn), t.memoizedProps = i, t.memoizedState = je), s.props = i, s.state = je, s.context = P, ut;
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
    function Pb(e, t) {
      return !0;
    }
    function Y0(e, t) {
      try {
        var a = Pb(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, d = s !== null ? s : "";
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
        var P = g + `
` + d + `

` + ("" + b);
        console.error(P);
      } catch (U) {
        setTimeout(function() {
          throw U;
        });
      }
    }
    var Ib = typeof WeakMap == "function" ? WeakMap : Map;
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
      var d = e.stateNode;
      return d !== null && typeof d.componentDidCatch == "function" && (i.callback = function() {
        pC(e), Y0(e, t), typeof l != "function" && Dk(this);
        var g = t.value, b = t.stack;
        this.componentDidCatch(g, {
          componentStack: b !== null ? b : ""
        }), typeof l != "function" && (oa(e.lanes, pt) || h("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", gt(e) || "Unknown"));
      }), i;
    }
    function rS(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new Ib(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = Lk.bind(null, e, t, a);
        aa && vv(e, a), t.then(s, s);
      }
    }
    function Fb(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function Vb(e, t) {
      var a = e.tag;
      if ((e.mode & Dt) === it && (a === k || a === le || a === Ve)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function aS(e) {
      var t = e;
      do {
        if (t.tag === ve && Cb(t))
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
              var d = Jl(ln, pt);
              d.tag = Em, Gu(a, d, pt);
            }
          }
          a.lanes = wt(a.lanes, pt);
        }
        return e;
      }
      return e.flags |= rr, e.lanes = l, e;
    }
    function Hb(e, t, a, i, l) {
      if (a.flags |= xs, aa && vv(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Vb(a), Hr() && a.mode & Dt && K_();
        var d = aS(t);
        if (d !== null) {
          d.flags &= ~kr, iS(d, t, a, e, l), d.mode & Dt && rS(e, s, l), Fb(d, e, s);
          return;
        } else {
          if (!fh(l)) {
            rS(e, s, l), k1();
            return;
          }
          var y = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = y;
        }
      } else if (Hr() && a.mode & Dt) {
        K_();
        var g = aS(t);
        if (g !== null) {
          (g.flags & rr) === at && (g.flags |= kr), iS(g, t, a, e, l), Fg(vc(i, a));
          return;
        }
      }
      i = vc(i, a), Ck(i);
      var b = t;
      do {
        switch (b.tag) {
          case A: {
            var T = i;
            b.flags |= rr;
            var P = Ps(l);
            b.lanes = wt(b.lanes, P);
            var U = nS(b, T, P);
            t0(b, U);
            return;
          }
          case x:
            var Y = i, K = b.type, te = b.stateNode;
            if ((b.flags & tt) === at && (typeof K.getDerivedStateFromError == "function" || te !== null && typeof te.componentDidCatch == "function" && !aC(te))) {
              b.flags |= rr;
              var je = Ps(l);
              b.lanes = wt(b.lanes, je);
              var ut = G0(b, Y, je);
              t0(b, ut);
              return;
            }
            break;
        }
        b = b.return;
      } while (b !== null);
    }
    function $b() {
      return null;
    }
    var Jp = p.ReactCurrentOwner, So = !1, Q0, Zp, K0, X0, J0, hc, Z0, Xm, ev;
    Q0 = {}, Zp = {}, K0 = {}, X0 = {}, J0 = {}, hc = !1, Z0 = {}, Xm = {}, ev = {};
    function ba(e, t, a, i) {
      e === null ? t.child = u2(t, null, a, i) : t.child = Bf(t, e.child, a, i);
    }
    function Bb(e, t, a, i) {
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
      var d = a.render, y = t.ref, g, b;
      Wf(t, l), Ca(t);
      {
        if (Jp.current = t, Kn(!0), g = Jf(e, t, d, i, y, l), b = Zf(), t.mode & rn) {
          En(!0);
          try {
            g = Jf(e, t, d, i, y, l), b = Zf();
          } finally {
            En(!1);
          }
        }
        Kn(!1);
      }
      return Ea(), e !== null && !So ? (E2(e, t, l), Zl(e, t, l)) : (Hr() && b && jg(t), t.flags |= si, ba(e, t, g, l), t.child);
    }
    function lS(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (Qk(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var d = s;
          return d = ld(s), t.tag = Ve, t.type = d, n1(t, s), uS(e, t, d, i, l);
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
        var T = a.type, P = T.propTypes;
        P && vo(
          P,
          i,
          // Resolved props
          "prop",
          It(T)
        );
      }
      var U = e.child, Y = u1(e, l);
      if (!Y) {
        var K = U.memoizedProps, te = a.compare;
        if (te = te !== null ? te : Ge, te(K, i) && e.ref === t.ref)
          return Zl(e, t, l);
      }
      t.flags |= si;
      var je = Sc(U, i);
      return je.ref = t.ref, je.return = t, t.child = je, je;
    }
    function uS(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === _t) {
          var d = s, y = d._payload, g = d._init;
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
        if (Ge(T, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (So = !1, t.pendingProps = i = T, u1(e, l))
            (e.flags & Vc) !== at && (So = !0);
          else return t.lanes = e.lanes, Zl(e, t, l);
      }
      return e1(e, t, a, i, l);
    }
    function sS(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || he)
        if ((t.mode & Dt) === it) {
          var d = {
            baseLanes: se,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = d, cy(t, a);
        } else if (oa(a, ia)) {
          var P = {
            baseLanes: se,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = P;
          var U = s !== null ? s.baseLanes : a;
          cy(t, U);
        } else {
          var y = null, g;
          if (s !== null) {
            var b = s.baseLanes;
            g = wt(b, a);
          } else
            g = a;
          t.lanes = t.childLanes = ia;
          var T = {
            baseLanes: g,
            cachePool: y,
            transitions: null
          };
          return t.memoizedState = T, t.updateQueue = null, cy(t, g), null;
        }
      else {
        var Y;
        s !== null ? (Y = wt(s.baseLanes, a), t.memoizedState = null) : Y = a, cy(t, Y);
      }
      return ba(e, t, l, a), t.child;
    }
    function qb(e, t, a) {
      var i = t.pendingProps;
      return ba(e, t, i, a), t.child;
    }
    function Wb(e, t, a) {
      var i = t.pendingProps.children;
      return ba(e, t, i, a), t.child;
    }
    function Yb(e, t, a) {
      {
        t.flags |= jt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, s = l.children;
      return ba(e, t, s, a), t.child;
    }
    function cS(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= bn, t.flags |= Du);
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
      var d;
      {
        var y = If(t, a, !0);
        d = Ff(t, y);
      }
      var g, b;
      Wf(t, l), Ca(t);
      {
        if (Jp.current = t, Kn(!0), g = Jf(e, t, a, i, d, l), b = Zf(), t.mode & rn) {
          En(!0);
          try {
            g = Jf(e, t, a, i, d, l), b = Zf();
          } finally {
            En(!1);
          }
        }
        Kn(!1);
      }
      return Ea(), e !== null && !So ? (E2(e, t, l), Zl(e, t, l)) : (Hr() && b && jg(t), t.flags |= si, ba(e, t, g, l), t.child);
    }
    function fS(e, t, a, i, l) {
      {
        switch (cT(t)) {
          case !1: {
            var s = t.stateNode, d = t.type, y = new d(t.memoizedProps, s.context), g = y.state;
            s.updater.enqueueSetState(s, g, null);
            break;
          }
          case !0: {
            t.flags |= tt, t.flags |= rr;
            var b = new Error("Simulated error coming from DevTools"), T = Ps(l);
            t.lanes = wt(t.lanes, T);
            var P = G0(t, vc(b, t), T);
            t0(t, P);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var U = a.propTypes;
          U && vo(
            U,
            i,
            // Resolved props
            "prop",
            It(a)
          );
        }
      }
      var Y;
      nl(a) ? (Y = !0, sm(t)) : Y = !1, Wf(t, l);
      var K = t.stateNode, te;
      K === null ? (Zm(e, t), eS(t, a, i), q0(t, a, i, l), te = !0) : e === null ? te = Ub(t, a, i, l) : te = zb(e, t, a, i, l);
      var je = t1(e, t, a, te, Y, l);
      {
        var ut = t.stateNode;
        te && ut.props !== i && (hc || h("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", gt(t) || "a component"), hc = !0);
      }
      return je;
    }
    function t1(e, t, a, i, l, s) {
      cS(e, t);
      var d = (t.flags & tt) !== at;
      if (!i && !d)
        return l && W_(t, a, !1), Zl(e, t, s);
      var y = t.stateNode;
      Jp.current = t;
      var g;
      if (d && typeof a.getDerivedStateFromError != "function")
        g = null, Q2();
      else {
        Ca(t);
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
        Ea();
      }
      return t.flags |= si, e !== null && d ? Bb(e, t, g, s) : ba(e, t, g, s), t.memoizedState = y.state, l && W_(t, a, !0), t.child;
    }
    function dS(e) {
      var t = e.stateNode;
      t.pendingContext ? B_(e, t.pendingContext, t.pendingContext !== t.context) : t.context && B_(e, t.context, !1), n0(e, t.containerInfo);
    }
    function Gb(e, t, a) {
      if (dS(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      h2(e, t), Rm(t, i, null, a);
      var d = t.memoizedState;
      t.stateNode;
      var y = d.element;
      if (l.isDehydrated) {
        var g = {
          element: y,
          isDehydrated: !1,
          cache: d.cache,
          pendingSuspenseBoundaries: d.pendingSuspenseBoundaries,
          transitions: d.transitions
        }, b = t.updateQueue;
        if (b.baseState = g, t.memoizedState = g, t.flags & kr) {
          var T = vc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return pS(e, t, y, a, T);
        } else if (y !== s) {
          var P = vc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return pS(e, t, y, a, P);
        } else {
          Xw(t);
          var U = u2(t, null, y, a);
          t.child = U;
          for (var Y = U; Y; )
            Y.flags = Y.flags & ~Cn | ta, Y = Y.sibling;
        }
      } else {
        if ($f(), y === s)
          return Zl(e, t, a);
        ba(e, t, y, a);
      }
      return t.child;
    }
    function pS(e, t, a, i, l) {
      return $f(), Fg(l), t.flags |= kr, ba(e, t, a, i), t.child;
    }
    function Qb(e, t, a) {
      _2(t), e === null && Ig(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, d = l.children, y = Sg(i, l);
      return y ? d = null : s !== null && Sg(i, s) && (t.flags |= Ua), cS(e, t), ba(e, t, d, a), t.child;
    }
    function Kb(e, t) {
      return e === null && Ig(t), null;
    }
    function Xb(e, t, a, i) {
      Zm(e, t);
      var l = t.pendingProps, s = a, d = s._payload, y = s._init, g = y(d);
      t.type = g;
      var b = t.tag = Kk(g), T = _o(g, l), P;
      switch (b) {
        case k:
          return n1(t, g), t.type = g = ld(g), P = e1(null, t, g, T, i), P;
        case x:
          return t.type = g = L1(g), P = fS(null, t, g, T, i), P;
        case le:
          return t.type = g = M1(g), P = oS(null, t, g, T, i), P;
        case Ke: {
          if (t.type !== t.elementType) {
            var U = g.propTypes;
            U && vo(
              U,
              T,
              // Resolved for outer only
              "prop",
              It(g)
            );
          }
          return P = lS(
            null,
            t,
            g,
            _o(g.type, T),
            // The inner type can have defaults too
            i
          ), P;
        }
      }
      var Y = "";
      throw g !== null && typeof g == "object" && g.$$typeof === _t && (Y = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + g + ". " + ("Lazy element type must resolve to a class or function." + Y));
    }
    function Jb(e, t, a, i, l) {
      Zm(e, t), t.tag = x;
      var s;
      return nl(a) ? (s = !0, sm(t)) : s = !1, Wf(t, l), eS(t, a, i), q0(t, a, i, l), t1(null, t, a, !0, s, l);
    }
    function Zb(e, t, a, i) {
      Zm(e, t);
      var l = t.pendingProps, s;
      {
        var d = If(t, a, !1);
        s = Ff(t, d);
      }
      Wf(t, i);
      var y, g;
      Ca(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var b = It(a) || "Unknown";
          Q0[b] || (h("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", b, b), Q0[b] = !0);
        }
        t.mode & rn && mo.recordLegacyContextWarning(t, null), Kn(!0), Jp.current = t, y = Jf(null, t, a, l, s, i), g = Zf(), Kn(!1);
      }
      if (Ea(), t.flags |= si, typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0) {
        var T = It(a) || "Unknown";
        Zp[T] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), Zp[T] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0
      ) {
        {
          var P = It(a) || "Unknown";
          Zp[P] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", P, P, P), Zp[P] = !0);
        }
        t.tag = x, t.memoizedState = null, t.updateQueue = null;
        var U = !1;
        return nl(a) ? (U = !0, sm(t)) : U = !1, t.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, e0(t), Z2(t, y), q0(t, a, l, i), t1(null, t, a, !0, U, i);
      } else {
        if (t.tag = k, t.mode & rn) {
          En(!0);
          try {
            y = Jf(null, t, a, l, s, i), g = Zf();
          } finally {
            En(!1);
          }
        }
        return Hr() && g && jg(t), ba(null, t, y, i), n1(t, a), t.child;
      }
    }
    function n1(e, t) {
      {
        if (t && t.childContextTypes && h("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Ar();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), J0[l] || (J0[l] = !0, h("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var d = It(t) || "Unknown";
          ev[d] || (h("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", d), ev[d] = !0);
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
        cachePool: $b(),
        transitions: null
      };
    }
    function eR(e, t) {
      var a = null;
      return {
        baseLanes: wt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function tR(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return i0(e, $p);
    }
    function nR(e, t) {
      return Is(e.childLanes, t);
    }
    function vS(e, t, a) {
      var i = t.pendingProps;
      fT(t) && (t.flags |= tt);
      var l = yo.current, s = !1, d = (t.flags & tt) !== at;
      if (d || tR(l, e) ? (s = !0, t.flags &= ~tt) : (e === null || e.memoizedState !== null) && (l = Sb(l, C2)), l = Gf(l), Ku(t, l), e === null) {
        Ig(t);
        var y = t.memoizedState;
        if (y !== null) {
          var g = y.dehydrated;
          if (g !== null)
            return lR(t, g);
        }
        var b = i.children, T = i.fallback;
        if (s) {
          var P = rR(t, b, T, a), U = t.child;
          return U.memoizedState = a1(a), t.memoizedState = r1, P;
        } else
          return i1(t, b);
      } else {
        var Y = e.memoizedState;
        if (Y !== null) {
          var K = Y.dehydrated;
          if (K !== null)
            return uR(e, t, d, i, K, Y, a);
        }
        if (s) {
          var te = i.fallback, je = i.children, ut = iR(e, t, je, te, a), et = t.child, zt = e.child.memoizedState;
          return et.memoizedState = zt === null ? a1(a) : eR(zt, a), et.childLanes = nR(e, a), t.memoizedState = r1, ut;
        } else {
          var Lt = i.children, B = aR(e, t, Lt, a);
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
    function rR(e, t, a, i) {
      var l = e.mode, s = e.child, d = {
        mode: "hidden",
        children: t
      }, y, g;
      return (l & Dt) === it && s !== null ? (y = s, y.childLanes = se, y.pendingProps = d, e.mode & $t && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = 0, y.treeBaseDuration = 0), g = as(a, l, i, null)) : (y = o1(d, l), g = as(a, l, i, null)), y.return = e, g.return = e, y.sibling = g, e.child = y, g;
    }
    function o1(e, t, a) {
      return hC(e, t, se, null);
    }
    function hS(e, t) {
      return Sc(e, t);
    }
    function aR(e, t, a, i) {
      var l = e.child, s = l.sibling, d = hS(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Dt) === it && (d.lanes = i), d.return = t, d.sibling = null, s !== null) {
        var y = t.deletions;
        y === null ? (t.deletions = [s], t.flags |= Aa) : y.push(s);
      }
      return t.child = d, d;
    }
    function iR(e, t, a, i, l) {
      var s = t.mode, d = e.child, y = d.sibling, g = {
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
        t.child !== d
      ) {
        var T = t.child;
        b = T, b.childLanes = se, b.pendingProps = g, t.mode & $t && (b.actualDuration = 0, b.actualStartTime = -1, b.selfBaseDuration = d.selfBaseDuration, b.treeBaseDuration = d.treeBaseDuration), t.deletions = null;
      } else
        b = hS(d, g), b.subtreeFlags = d.subtreeFlags & Fn;
      var P;
      return y !== null ? P = Sc(y, i) : (P = as(i, s, l, null), P.flags |= Cn), P.return = t, b.return = t, b.sibling = P, t.child = b, P;
    }
    function Jm(e, t, a, i) {
      i !== null && Fg(i), Bf(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, d = i1(t, s);
      return d.flags |= Cn, t.memoizedState = null, d;
    }
    function oR(e, t, a, i, l) {
      var s = t.mode, d = {
        mode: "visible",
        children: a
      }, y = o1(d, s), g = as(i, s, l, null);
      return g.flags |= Cn, y.return = t, g.return = t, y.sibling = g, t.child = y, (t.mode & Dt) !== it && Bf(t, e.child, null, l), g;
    }
    function lR(e, t, a) {
      return (e.mode & Dt) === it ? (h("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = pt) : wg(t) ? e.lanes = Tr : e.lanes = ia, null;
    }
    function uR(e, t, a, i, l, s, d) {
      if (a)
        if (t.flags & kr) {
          t.flags &= ~kr;
          var B = W0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Jm(e, t, d, B);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= tt, null;
          var ne = i.children, q = i.fallback, ye = oR(e, t, ne, q, d), $e = t.child;
          return $e.memoizedState = a1(d), t.memoizedState = r1, ye;
        }
      else {
        if (Qw(), (t.mode & Dt) === it)
          return Jm(
            e,
            t,
            d,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (wg(l)) {
          var y, g, b;
          {
            var T = dw(l);
            y = T.digest, g = T.message, b = T.stack;
          }
          var P;
          g ? P = new Error(g) : P = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var U = W0(P, y, b);
          return Jm(e, t, d, U);
        }
        var Y = oa(d, e.childLanes);
        if (So || Y) {
          var K = sy();
          if (K !== null) {
            var te = rp(K, d);
            if (te !== Vt && te !== s.retryLane) {
              s.retryLane = te;
              var je = ln;
              qa(e, te), xr(K, e, te, je);
            }
          }
          k1();
          var ut = W0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Jm(e, t, d, ut);
        } else if (P_(l)) {
          t.flags |= tt, t.child = e.child;
          var et = Mk.bind(null, e);
          return pw(l, et), null;
        } else {
          Jw(t, l, s.treeContext);
          var zt = i.children, Lt = i1(t, zt);
          return Lt.flags |= ta, Lt;
        }
      }
    }
    function mS(e, t, a) {
      e.lanes = wt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = wt(i.lanes, t)), Kg(e.return, t, a);
    }
    function sR(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === ve) {
          var l = i.memoizedState;
          l !== null && mS(i, a, e);
        } else if (i.tag === X)
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
    function cR(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Nm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function fR(e) {
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
    function dR(e, t) {
      e !== void 0 && !Xm[e] && (e !== "collapsed" && e !== "hidden" ? (Xm[e] = !0, h('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Xm[e] = !0, h('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function yS(e, t) {
      {
        var a = kt(e), i = !a && typeof xt(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return h("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function pR(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (kt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!yS(e[a], a))
              return;
        } else {
          var i = xt(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var s = l.next(), d = 0; !s.done; s = l.next()) {
                if (!yS(s.value, d))
                  return;
                d++;
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
      var i = t.pendingProps, l = i.revealOrder, s = i.tail, d = i.children;
      fR(l), dR(s, l), pR(d, l), ba(e, t, d, a);
      var y = yo.current, g = i0(y, $p);
      if (g)
        y = o0(y, $p), t.flags |= tt;
      else {
        var b = e !== null && (e.flags & tt) !== at;
        b && sR(t, t.child, a), y = Gf(y);
      }
      if (Ku(t, y), (t.mode & Dt) === it)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var T = cR(t.child), P;
            T === null ? (P = t.child, t.child = null) : (P = T.sibling, T.sibling = null), l1(
              t,
              !1,
              // isBackwards
              P,
              T,
              s
            );
            break;
          }
          case "backwards": {
            var U = null, Y = t.child;
            for (t.child = null; Y !== null; ) {
              var K = Y.alternate;
              if (K !== null && Nm(K) === null) {
                t.child = Y;
                break;
              }
              var te = Y.sibling;
              Y.sibling = U, U = Y, Y = te;
            }
            l1(
              t,
              !0,
              // isBackwards
              U,
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
    function vR(e, t, a) {
      n0(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Bf(t, null, i, a) : ba(e, t, i, a), t.child;
    }
    var _S = !1;
    function hR(e, t, a) {
      var i = t.type, l = i._context, s = t.pendingProps, d = t.memoizedProps, y = s.value;
      {
        "value" in s || _S || (_S = !0, h("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var g = t.type.propTypes;
        g && vo(g, s, "prop", "Context.Provider");
      }
      if (f2(t, l, y), d !== null) {
        var b = d.value;
        if (pe(b, y)) {
          if (d.children === s.children && !lm())
            return Zl(e, t, a);
        } else
          fb(t, l, a);
      }
      var T = s.children;
      return ba(e, t, T, a), t.child;
    }
    var SS = !1;
    function mR(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (SS || (SS = !0, h("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && h("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Wf(t, a);
      var d = lr(i);
      Ca(t);
      var y;
      return Jp.current = t, Kn(!0), y = s(d), Kn(!1), Ea(), t.flags |= si, ba(e, t, y, a), t.child;
    }
    function tv() {
      So = !0;
    }
    function Zm(e, t) {
      (t.mode & Dt) === it && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Cn);
    }
    function Zl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), Q2(), pv(t.lanes), oa(a, t.childLanes) ? (sb(e, t), t.child) : null;
    }
    function yR(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Aa) : s.push(e), a.flags |= Cn, a;
      }
    }
    function u1(e, t) {
      var a = e.lanes;
      return !!oa(a, t);
    }
    function gR(e, t, a) {
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
        case F:
          n0(t, t.stateNode.containerInfo);
          break;
        case ge: {
          var l = t.memoizedProps.value, s = t.type._context;
          f2(t, s, l);
          break;
        }
        case we:
          {
            var d = oa(a, t.childLanes);
            d && (t.flags |= jt);
            {
              var y = t.stateNode;
              y.effectDuration = 0, y.passiveEffectDuration = 0;
            }
          }
          break;
        case ve: {
          var g = t.memoizedState;
          if (g !== null) {
            if (g.dehydrated !== null)
              return Ku(t, Gf(yo.current)), t.flags |= tt, null;
            var b = t.child, T = b.childLanes;
            if (oa(a, T))
              return vS(e, t, a);
            Ku(t, Gf(yo.current));
            var P = Zl(e, t, a);
            return P !== null ? P.sibling : null;
          } else
            Ku(t, Gf(yo.current));
          break;
        }
        case X: {
          var U = (e.flags & tt) !== at, Y = oa(a, t.childLanes);
          if (U) {
            if (Y)
              return gS(e, t, a);
            t.flags |= tt;
          }
          var K = t.memoizedState;
          if (K !== null && (K.rendering = null, K.tail = null, K.lastEffect = null), Ku(t, yo.current), Y)
            break;
          return null;
        }
        case J:
        case Ee:
          return t.lanes = se, sS(e, t, a);
      }
      return Zl(e, t, a);
    }
    function CS(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return yR(e, t, P1(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
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
            return So = !1, gR(e, t, a);
          (e.flags & Vc) !== at ? So = !0 : So = !1;
        }
      } else if (So = !1, Hr() && $w(t)) {
        var d = t.index, y = Bw();
        Q_(t, y, d);
      }
      switch (t.lanes = se, t.tag) {
        case O:
          return Zb(e, t, t.type, a);
        case We: {
          var g = t.elementType;
          return Xb(e, t, g, a);
        }
        case k: {
          var b = t.type, T = t.pendingProps, P = t.elementType === b ? T : _o(b, T);
          return e1(e, t, b, P, a);
        }
        case x: {
          var U = t.type, Y = t.pendingProps, K = t.elementType === U ? Y : _o(U, Y);
          return fS(e, t, U, K, a);
        }
        case A:
          return Gb(e, t, a);
        case $:
          return Qb(e, t, a);
        case ie:
          return Kb(e, t);
        case ve:
          return vS(e, t, a);
        case F:
          return vR(e, t, a);
        case le: {
          var te = t.type, je = t.pendingProps, ut = t.elementType === te ? je : _o(te, je);
          return oS(e, t, te, ut, a);
        }
        case oe:
          return qb(e, t, a);
        case Ce:
          return Wb(e, t, a);
        case we:
          return Yb(e, t, a);
        case ge:
          return hR(e, t, a);
        case Re:
          return mR(e, t, a);
        case Ke: {
          var et = t.type, zt = t.pendingProps, Lt = _o(et, zt);
          if (t.type !== t.elementType) {
            var B = et.propTypes;
            B && vo(
              B,
              Lt,
              // Resolved for outer only
              "prop",
              It(et)
            );
          }
          return Lt = _o(et.type, Lt), lS(e, t, et, Lt, a);
        }
        case Ve:
          return uS(e, t, t.type, t.pendingProps, a);
        case nt: {
          var ne = t.type, q = t.pendingProps, ye = t.elementType === ne ? q : _o(ne, q);
          return Jb(e, t, ne, ye, a);
        }
        case X:
          return gS(e, t, a);
        case V:
          break;
        case J:
          return sS(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function ed(e) {
      e.flags |= jt;
    }
    function ES(e) {
      e.flags |= bn, e.flags |= Du;
    }
    var xS, s1, wS, bS;
    xS = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === $ || l.tag === ie)
          Fx(e, l.stateNode);
        else if (l.tag !== F) {
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
    }, wS = function(e, t, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var d = t.stateNode, y = r0(), g = Hx(d, a, s, i, l, y);
        t.updateQueue = g, g && ed(t);
      }
    }, bS = function(e, t, a, i) {
      a !== i && ed(t);
    };
    function nv(e, t) {
      if (!Hr())
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
    function Br(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = se, i = at;
      if (t) {
        if ((e.mode & $t) !== it) {
          for (var g = e.selfBaseDuration, b = e.child; b !== null; )
            a = wt(a, wt(b.lanes, b.childLanes)), i |= b.subtreeFlags & Fn, i |= b.flags & Fn, g += b.treeBaseDuration, b = b.sibling;
          e.treeBaseDuration = g;
        } else
          for (var T = e.child; T !== null; )
            a = wt(a, wt(T.lanes, T.childLanes)), i |= T.subtreeFlags & Fn, i |= T.flags & Fn, T.return = e, T = T.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & $t) !== it) {
          for (var l = e.actualDuration, s = e.selfBaseDuration, d = e.child; d !== null; )
            a = wt(a, wt(d.lanes, d.childLanes)), i |= d.subtreeFlags, i |= d.flags, l += d.actualDuration, s += d.treeBaseDuration, d = d.sibling;
          e.actualDuration = l, e.treeBaseDuration = s;
        } else
          for (var y = e.child; y !== null; )
            a = wt(a, wt(y.lanes, y.childLanes)), i |= y.subtreeFlags, i |= y.flags, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function _R(e, t, a) {
      if (rb() && (t.mode & Dt) !== it && (t.flags & tt) === at)
        return n2(t), $f(), t.flags |= kr | xs | rr, !1;
      var i = vm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (tb(t), Br(t), (t.mode & $t) !== it) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if ($f(), (t.flags & tt) === at && (t.memoizedState = null), t.flags |= jt, Br(t), (t.mode & $t) !== it) {
            var d = a !== null;
            if (d) {
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
        case O:
        case We:
        case Ve:
        case k:
        case le:
        case oe:
        case Ce:
        case we:
        case Re:
        case Ke:
          return Br(t), null;
        case x: {
          var l = t.type;
          return nl(l) && um(t), Br(t), null;
        }
        case A: {
          var s = t.stateNode;
          if (Yf(t), Og(t), u0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var d = vm(t);
            if (d)
              ed(t);
            else if (e !== null) {
              var y = e.memoizedState;
              // Check if this is a client root
              (!y.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & kr) !== at) && (t.flags |= Xn, r2());
            }
          }
          return s1(e, t), Br(t), null;
        }
        case $: {
          a0(t);
          var g = g2(), b = t.type;
          if (e !== null && t.stateNode != null)
            wS(e, t, b, i, g), e.ref !== t.ref && ES(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Br(t), null;
            }
            var T = r0(), P = vm(t);
            if (P)
              Zw(t, g, T) && ed(t);
            else {
              var U = Ix(b, i, g, T, t);
              xS(U, t, !1, !1), t.stateNode = U, Vx(U, b, i, g) && ed(t);
            }
            t.ref !== null && ES(t);
          }
          return Br(t), null;
        }
        case ie: {
          var Y = i;
          if (e && t.stateNode != null) {
            var K = e.memoizedProps;
            bS(e, t, K, Y);
          } else {
            if (typeof Y != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var te = g2(), je = r0(), ut = vm(t);
            ut ? eb(t) && ed(t) : t.stateNode = $x(Y, te, je, t);
          }
          return Br(t), null;
        }
        case ve: {
          Qf(t);
          var et = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var zt = _R(e, t, et);
            if (!zt)
              return t.flags & rr ? t : null;
          }
          if ((t.flags & tt) !== at)
            return t.lanes = a, (t.mode & $t) !== it && M0(t), t;
          var Lt = et !== null, B = e !== null && e.memoizedState !== null;
          if (Lt !== B && Lt) {
            var ne = t.child;
            if (ne.flags |= In, (t.mode & Dt) !== it) {
              var q = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              q || i0(yo.current, C2) ? Sk() : k1();
            }
          }
          var ye = t.updateQueue;
          if (ye !== null && (t.flags |= jt), Br(t), (t.mode & $t) !== it && Lt) {
            var $e = t.child;
            $e !== null && (t.treeBaseDuration -= $e.treeBaseDuration);
          }
          return null;
        }
        case F:
          return Yf(t), s1(e, t), e === null && Uw(t.stateNode.containerInfo), Br(t), null;
        case ge:
          var Ue = t.type._context;
          return Qg(Ue, t), Br(t), null;
        case nt: {
          var ht = t.type;
          return nl(ht) && um(t), Br(t), null;
        }
        case X: {
          Qf(t);
          var Ct = t.memoizedState;
          if (Ct === null)
            return Br(t), null;
          var on = (t.flags & tt) !== at, Wt = Ct.rendering;
          if (Wt === null)
            if (on)
              nv(Ct, !1);
            else {
              var er = Ek() && (e === null || (e.flags & tt) === at);
              if (!er)
                for (var Yt = t.child; Yt !== null; ) {
                  var Wn = Nm(Yt);
                  if (Wn !== null) {
                    on = !0, t.flags |= tt, nv(Ct, !1);
                    var pa = Wn.updateQueue;
                    return pa !== null && (t.updateQueue = pa, t.flags |= jt), t.subtreeFlags = at, cb(t, a), Ku(t, o0(yo.current, $p)), t.child;
                  }
                  Yt = Yt.sibling;
                }
              Ct.tail !== null && Jn() > YS() && (t.flags |= tt, on = !0, nv(Ct, !1), t.lanes = Gd);
            }
          else {
            if (!on) {
              var Qr = Nm(Wt);
              if (Qr !== null) {
                t.flags |= tt, on = !0;
                var mi = Qr.updateQueue;
                if (mi !== null && (t.updateQueue = mi, t.flags |= jt), nv(Ct, !0), Ct.tail === null && Ct.tailMode === "hidden" && !Wt.alternate && !Hr())
                  return Br(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Jn() * 2 - Ct.renderingStartTime > YS() && a !== ia && (t.flags |= tt, on = !0, nv(Ct, !1), t.lanes = Gd);
            }
            if (Ct.isBackwards)
              Wt.sibling = t.child, t.child = Wt;
            else {
              var Ta = Ct.last;
              Ta !== null ? Ta.sibling = Wt : t.child = Wt, Ct.last = Wt;
            }
          }
          if (Ct.tail !== null) {
            var Da = Ct.tail;
            Ct.rendering = Da, Ct.tail = Da.sibling, Ct.renderingStartTime = Jn(), Da.sibling = null;
            var va = yo.current;
            return on ? va = o0(va, $p) : va = Gf(va), Ku(t, va), Da;
          }
          return Br(t), null;
        }
        case V:
          break;
        case J:
        case Ee: {
          R1(t);
          var au = t.memoizedState, ud = au !== null;
          if (e !== null) {
            var gv = e.memoizedState, cl = gv !== null;
            cl !== ud && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !he && (t.flags |= In);
          }
          return !ud || (t.mode & Dt) === it ? Br(t) : oa(sl, ia) && (Br(t), t.subtreeFlags & (Cn | jt) && (t.flags |= In)), null;
        }
        case He:
          return null;
        case De:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function SR(e, t, a) {
      switch (Ag(t), t.tag) {
        case x: {
          var i = t.type;
          nl(i) && um(t);
          var l = t.flags;
          return l & rr ? (t.flags = l & ~rr | tt, (t.mode & $t) !== it && M0(t), t) : null;
        }
        case A: {
          t.stateNode, Yf(t), Og(t), u0();
          var s = t.flags;
          return (s & rr) !== at && (s & tt) === at ? (t.flags = s & ~rr | tt, t) : null;
        }
        case $:
          return a0(t), null;
        case ve: {
          Qf(t);
          var d = t.memoizedState;
          if (d !== null && d.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            $f();
          }
          var y = t.flags;
          return y & rr ? (t.flags = y & ~rr | tt, (t.mode & $t) !== it && M0(t), t) : null;
        }
        case X:
          return Qf(t), null;
        case F:
          return Yf(t), null;
        case ge:
          var g = t.type._context;
          return Qg(g, t), null;
        case J:
        case Ee:
          return R1(t), null;
        case He:
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
          t.stateNode, Yf(t), Og(t), u0();
          break;
        }
        case $: {
          a0(t);
          break;
        }
        case F:
          Yf(t);
          break;
        case ve:
          Qf(t);
          break;
        case X:
          Qf(t);
          break;
        case ge:
          var l = t.type._context;
          Qg(l, t);
          break;
        case J:
        case Ee:
          R1(t);
          break;
      }
    }
    var TS = null;
    TS = /* @__PURE__ */ new Set();
    var ey = !1, qr = !1, CR = typeof WeakSet == "function" ? WeakSet : Set, Qe = null, td = null, nd = null;
    function ER(e) {
      Po(null, function() {
        throw e;
      }), Es();
    }
    var xR = function(e, t) {
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
        Zu(yr, e);
      } catch (a) {
        mn(e, t, a);
      }
    }
    function c1(e, t, a) {
      try {
        xR(e, a);
      } catch (i) {
        mn(e, t, i);
      }
    }
    function wR(e, t, a) {
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
            if (Pe && mt && e.mode & $t)
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
    var OS = !1;
    function bR(e, t) {
      zx(e.containerInfo), Qe = t, RR();
      var a = OS;
      return OS = !1, a;
    }
    function RR() {
      for (; Qe !== null; ) {
        var e = Qe, t = e.child;
        (e.subtreeFlags & Fo) !== at && t !== null ? (t.return = e, Qe = t) : kR();
      }
    }
    function kR() {
      for (; Qe !== null; ) {
        var e = Qe;
        en(e);
        try {
          TR(e);
        } catch (a) {
          mn(e, e.return, a);
        }
        hn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Qe = t;
          return;
        }
        Qe = e.return;
      }
    }
    function TR(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Xn) !== at) {
        switch (en(e), e.tag) {
          case k:
          case le:
          case Ve:
            break;
          case x: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !hc && (s.props !== e.memoizedProps && h("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(e) || "instance"), s.state !== e.memoizedState && h("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(e) || "instance"));
              var d = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : _o(e.type, i), l);
              {
                var y = TS;
                d === void 0 && !y.has(e.type) && (y.add(e.type), h("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", gt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = d;
            }
            break;
          }
          case A: {
            {
              var g = e.stateNode;
              uw(g.containerInfo);
            }
            break;
          }
          case $:
          case ie:
          case F:
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
        var s = l.next, d = s;
        do {
          if ((d.tag & e) === e) {
            var y = d.destroy;
            d.destroy = void 0, y !== void 0 && ((e & $r) !== Wa ? lo(t) : (e & yr) !== Wa && bs(t), (e & rl) !== Wa && hv(!0), ty(t, a, y), (e & rl) !== Wa && hv(!1), (e & $r) !== Wa ? Bo() : (e & yr) !== Wa && Wd());
          }
          d = d.next;
        } while (d !== s);
      }
    }
    function Zu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & $r) !== Wa ? qd(t) : (e & yr) !== Wa && Yc(t);
            var d = s.create;
            (e & rl) !== Wa && hv(!0), s.destroy = d(), (e & rl) !== Wa && hv(!1), (e & $r) !== Wa ? oh() : (e & yr) !== Wa && lh();
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
    function DR(e, t) {
      if ((t.flags & jt) !== at)
        switch (t.tag) {
          case we: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, d = Y2(), y = t.alternate === null ? "mount" : "update";
            W2() && (y = "nested-update"), typeof s == "function" && s(l, y, a, d);
            var g = t.return;
            e: for (; g !== null; ) {
              switch (g.tag) {
                case A:
                  var b = g.stateNode;
                  b.passiveEffectDuration += a;
                  break e;
                case we:
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
    function NR(e, t, a, i) {
      if ((a.flags & Ho) !== at)
        switch (a.tag) {
          case k:
          case le:
          case Ve: {
            if (!qr)
              if (a.mode & $t)
                try {
                  ll(), Zu(yr | mr, a);
                } finally {
                  ol(a);
                }
              else
                Zu(yr | mr, a);
            break;
          }
          case x: {
            var l = a.stateNode;
            if (a.flags & jt && !qr)
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
                var s = a.elementType === a.type ? t.memoizedProps : _o(a.type, t.memoizedProps), d = t.memoizedState;
                if (a.type === a.elementType && !hc && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(a) || "instance")), a.mode & $t)
                  try {
                    ll(), l.componentDidUpdate(s, d, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    ol(a);
                  }
                else
                  l.componentDidUpdate(s, d, l.__reactInternalSnapshotBeforeUpdate);
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
            if (t === null && a.flags & jt) {
              var P = a.type, U = a.memoizedProps;
              Gx(T, P, U);
            }
            break;
          }
          case ie:
            break;
          case F:
            break;
          case we: {
            {
              var Y = a.memoizedProps, K = Y.onCommit, te = Y.onRender, je = a.stateNode.effectDuration, ut = Y2(), et = t === null ? "mount" : "update";
              W2() && (et = "nested-update"), typeof te == "function" && te(a.memoizedProps.id, et, a.actualDuration, a.treeBaseDuration, a.actualStartTime, ut);
              {
                typeof K == "function" && K(a.memoizedProps.id, et, je, ut), kk(a);
                var zt = a.return;
                e: for (; zt !== null; ) {
                  switch (zt.tag) {
                    case A:
                      var Lt = zt.stateNode;
                      Lt.effectDuration += je;
                      break e;
                    case we:
                      var B = zt.stateNode;
                      B.effectDuration += je;
                      break e;
                  }
                  zt = zt.return;
                }
              }
            }
            break;
          }
          case ve: {
            PR(e, a);
            break;
          }
          case X:
          case nt:
          case V:
          case J:
          case Ee:
          case De:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      qr || a.flags & bn && LS(a);
    }
    function OR(e) {
      switch (e.tag) {
        case k:
        case le:
        case Ve: {
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
          typeof t.componentDidMount == "function" && wR(e, e.return, t), NS(e, e.return);
          break;
        }
        case $: {
          NS(e, e.return);
          break;
        }
      }
    }
    function LR(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === $) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? aw(l) : ow(i.stateNode, i.memoizedProps);
            } catch (d) {
              mn(e, e.return, d);
            }
          }
        } else if (i.tag === ie) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? iw(s) : lw(s, i.memoizedProps);
            } catch (d) {
              mn(e, e.return, d);
            }
        } else if (!((i.tag === J || i.tag === Ee) && i.memoizedState !== null && i !== e)) {
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
    function MR(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function MS(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, MS(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === $) {
          var a = e.stateNode;
          a !== null && Iw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function jR(e) {
      for (var t = e.return; t !== null; ) {
        if (jS(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function jS(e) {
      return e.tag === $ || e.tag === A || e.tag === F;
    }
    function AS(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || jS(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== $ && t.tag !== ie && t.tag !== ot; ) {
          if (t.flags & Cn || t.child === null || t.tag === F)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Cn))
          return t.stateNode;
      }
    }
    function AR(e) {
      var t = jR(e);
      switch (t.tag) {
        case $: {
          var a = t.stateNode;
          t.flags & Ua && (z_(a), t.flags &= ~Ua);
          var i = AS(e);
          d1(e, i, a);
          break;
        }
        case A:
        case F: {
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
      var i = e.tag, l = i === $ || i === ie;
      if (l) {
        var s = e.stateNode;
        t ? ew(a, s, t) : Jx(a, s);
      } else if (i !== F) {
        var d = e.child;
        if (d !== null) {
          f1(d, t, a);
          for (var y = d.sibling; y !== null; )
            f1(y, t, a), y = y.sibling;
        }
      }
    }
    function d1(e, t, a) {
      var i = e.tag, l = i === $ || i === ie;
      if (l) {
        var s = e.stateNode;
        t ? Zx(a, s, t) : Xx(a, s);
      } else if (i !== F) {
        var d = e.child;
        if (d !== null) {
          d1(d, t, a);
          for (var y = d.sibling; y !== null; )
            d1(y, t, a), y = y.sibling;
        }
      }
    }
    var Wr = null, Eo = !1;
    function UR(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case $: {
              Wr = i.stateNode, Eo = !1;
              break e;
            }
            case A: {
              Wr = i.stateNode.containerInfo, Eo = !0;
              break e;
            }
            case F: {
              Wr = i.stateNode.containerInfo, Eo = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Wr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        US(e, t, a), Wr = null, Eo = !1;
      }
      MR(a);
    }
    function es(e, t, a) {
      for (var i = a.child; i !== null; )
        US(e, t, i), i = i.sibling;
    }
    function US(e, t, a) {
      switch (Hd(a), a.tag) {
        case $:
          qr || rd(a, t);
        // eslint-disable-next-line-no-fallthrough
        case ie: {
          {
            var i = Wr, l = Eo;
            Wr = null, es(e, t, a), Wr = i, Eo = l, Wr !== null && (Eo ? nw(Wr, a.stateNode) : tw(Wr, a.stateNode));
          }
          return;
        }
        case ot: {
          Wr !== null && (Eo ? rw(Wr, a.stateNode) : xg(Wr, a.stateNode));
          return;
        }
        case F: {
          {
            var s = Wr, d = Eo;
            Wr = a.stateNode.containerInfo, Eo = !0, es(e, t, a), Wr = s, Eo = d;
          }
          return;
        }
        case k:
        case le:
        case Ke:
        case Ve: {
          if (!qr) {
            var y = a.updateQueue;
            if (y !== null) {
              var g = y.lastEffect;
              if (g !== null) {
                var b = g.next, T = b;
                do {
                  var P = T, U = P.destroy, Y = P.tag;
                  U !== void 0 && ((Y & rl) !== Wa ? ty(a, t, U) : (Y & yr) !== Wa && (bs(a), a.mode & $t ? (ll(), ty(a, t, U), ol(a)) : ty(a, t, U), Wd())), T = T.next;
                } while (T !== b);
              }
            }
          }
          es(e, t, a);
          return;
        }
        case x: {
          if (!qr) {
            rd(a, t);
            var K = a.stateNode;
            typeof K.componentWillUnmount == "function" && c1(a, t, K);
          }
          es(e, t, a);
          return;
        }
        case V: {
          es(e, t, a);
          return;
        }
        case J: {
          if (
            // TODO: Remove this dead flag
            a.mode & Dt
          ) {
            var te = qr;
            qr = te || a.memoizedState !== null, es(e, t, a), qr = te;
          } else
            es(e, t, a);
          break;
        }
        default: {
          es(e, t, a);
          return;
        }
      }
    }
    function zR(e) {
      e.memoizedState;
    }
    function PR(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && Ew(s);
          }
        }
      }
    }
    function zS(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new CR()), t.forEach(function(i) {
          var l = jk.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), aa)
              if (td !== null && nd !== null)
                vv(nd, td);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function IR(e, t, a) {
      td = a, nd = e, en(t), PS(t, e), en(t), td = null, nd = null;
    }
    function xo(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          try {
            UR(e, t, s);
          } catch (g) {
            mn(s, t, g);
          }
        }
      var d = Oo();
      if (t.subtreeFlags & Vo)
        for (var y = t.child; y !== null; )
          en(y), PS(y, e), y = y.sibling;
      en(d);
    }
    function PS(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case k:
        case le:
        case Ke:
        case Ve: {
          if (xo(t, e), ul(e), l & jt) {
            try {
              Co(rl | mr, e, e.return), Zu(rl | mr, e);
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
          xo(t, e), ul(e), l & bn && i !== null && rd(i, i.return);
          return;
        }
        case $: {
          xo(t, e), ul(e), l & bn && i !== null && rd(i, i.return);
          {
            if (e.flags & Ua) {
              var s = e.stateNode;
              try {
                z_(s);
              } catch (ht) {
                mn(e, e.return, ht);
              }
            }
            if (l & jt) {
              var d = e.stateNode;
              if (d != null) {
                var y = e.memoizedProps, g = i !== null ? i.memoizedProps : y, b = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    Qx(d, T, b, g, y, e);
                  } catch (ht) {
                    mn(e, e.return, ht);
                  }
              }
            }
          }
          return;
        }
        case ie: {
          if (xo(t, e), ul(e), l & jt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var P = e.stateNode, U = e.memoizedProps, Y = i !== null ? i.memoizedProps : U;
            try {
              Kx(P, Y, U);
            } catch (ht) {
              mn(e, e.return, ht);
            }
          }
          return;
        }
        case A: {
          if (xo(t, e), ul(e), l & jt && i !== null) {
            var K = i.memoizedState;
            if (K.isDehydrated)
              try {
                Cw(t.containerInfo);
              } catch (ht) {
                mn(e, e.return, ht);
              }
          }
          return;
        }
        case F: {
          xo(t, e), ul(e);
          return;
        }
        case ve: {
          xo(t, e), ul(e);
          var te = e.child;
          if (te.flags & In) {
            var je = te.stateNode, ut = te.memoizedState, et = ut !== null;
            if (je.isHidden = et, et) {
              var zt = te.alternate !== null && te.alternate.memoizedState !== null;
              zt || _k();
            }
          }
          if (l & jt) {
            try {
              zR(e);
            } catch (ht) {
              mn(e, e.return, ht);
            }
            zS(e);
          }
          return;
        }
        case J: {
          var Lt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Dt
          ) {
            var B = qr;
            qr = B || Lt, xo(t, e), qr = B;
          } else
            xo(t, e);
          if (ul(e), l & In) {
            var ne = e.stateNode, q = e.memoizedState, ye = q !== null, $e = e;
            if (ne.isHidden = ye, ye && !Lt && ($e.mode & Dt) !== it) {
              Qe = $e;
              for (var Ue = $e.child; Ue !== null; )
                Qe = Ue, VR(Ue), Ue = Ue.sibling;
            }
            LR($e, ye);
          }
          return;
        }
        case X: {
          xo(t, e), ul(e), l & jt && zS(e);
          return;
        }
        case V:
          return;
        default: {
          xo(t, e), ul(e);
          return;
        }
      }
    }
    function ul(e) {
      var t = e.flags;
      if (t & Cn) {
        try {
          AR(e);
        } catch (a) {
          mn(e, e.return, a);
        }
        e.flags &= ~Cn;
      }
      t & ta && (e.flags &= ~ta);
    }
    function FR(e, t, a) {
      td = a, nd = t, Qe = e, IS(e, t, a), td = null, nd = null;
    }
    function IS(e, t, a) {
      for (var i = (e.mode & Dt) !== it; Qe !== null; ) {
        var l = Qe, s = l.child;
        if (l.tag === J && i) {
          var d = l.memoizedState !== null, y = d || ey;
          if (y) {
            p1(e, t, a);
            continue;
          } else {
            var g = l.alternate, b = g !== null && g.memoizedState !== null, T = b || qr, P = ey, U = qr;
            ey = y, qr = T, qr && !U && (Qe = l, HR(l));
            for (var Y = s; Y !== null; )
              Qe = Y, IS(
                Y,
                // New root; bubble back up to here and stop.
                t,
                a
              ), Y = Y.sibling;
            Qe = l, ey = P, qr = U, p1(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & Ho) !== at && s !== null ? (s.return = l, Qe = s) : p1(e, t, a);
      }
    }
    function p1(e, t, a) {
      for (; Qe !== null; ) {
        var i = Qe;
        if ((i.flags & Ho) !== at) {
          var l = i.alternate;
          en(i);
          try {
            NR(t, l, i, a);
          } catch (d) {
            mn(i, i.return, d);
          }
          hn();
        }
        if (i === e) {
          Qe = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Qe = s;
          return;
        }
        Qe = i.return;
      }
    }
    function VR(e) {
      for (; Qe !== null; ) {
        var t = Qe, a = t.child;
        switch (t.tag) {
          case k:
          case le:
          case Ke:
          case Ve: {
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
          case J: {
            var l = t.memoizedState !== null;
            if (l) {
              FS(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Qe = a) : FS(e);
      }
    }
    function FS(e) {
      for (; Qe !== null; ) {
        var t = Qe;
        if (t === e) {
          Qe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Qe = a;
          return;
        }
        Qe = t.return;
      }
    }
    function HR(e) {
      for (; Qe !== null; ) {
        var t = Qe, a = t.child;
        if (t.tag === J) {
          var i = t.memoizedState !== null;
          if (i) {
            VS(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Qe = a) : VS(e);
      }
    }
    function VS(e) {
      for (; Qe !== null; ) {
        var t = Qe;
        en(t);
        try {
          OR(t);
        } catch (i) {
          mn(t, t.return, i);
        }
        if (hn(), t === e) {
          Qe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Qe = a;
          return;
        }
        Qe = t.return;
      }
    }
    function $R(e, t, a, i) {
      Qe = t, BR(t, e, a, i);
    }
    function BR(e, t, a, i) {
      for (; Qe !== null; ) {
        var l = Qe, s = l.child;
        (l.subtreeFlags & io) !== at && s !== null ? (s.return = l, Qe = s) : qR(e, t, a, i);
      }
    }
    function qR(e, t, a, i) {
      for (; Qe !== null; ) {
        var l = Qe;
        if ((l.flags & ea) !== at) {
          en(l);
          try {
            WR(t, l, a, i);
          } catch (d) {
            mn(l, l.return, d);
          }
          hn();
        }
        if (l === e) {
          Qe = null;
          return;
        }
        var s = l.sibling;
        if (s !== null) {
          s.return = l.return, Qe = s;
          return;
        }
        Qe = l.return;
      }
    }
    function WR(e, t, a, i) {
      switch (t.tag) {
        case k:
        case le:
        case Ve: {
          if (t.mode & $t) {
            L0();
            try {
              Zu($r | mr, t);
            } finally {
              O0(t);
            }
          } else
            Zu($r | mr, t);
          break;
        }
      }
    }
    function YR(e) {
      Qe = e, GR();
    }
    function GR() {
      for (; Qe !== null; ) {
        var e = Qe, t = e.child;
        if ((Qe.flags & Aa) !== at) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              Qe = l, XR(l, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var d = s.child;
                if (d !== null) {
                  s.child = null;
                  do {
                    var y = d.sibling;
                    d.sibling = null, d = y;
                  } while (d !== null);
                }
              }
            }
            Qe = e;
          }
        }
        (e.subtreeFlags & io) !== at && t !== null ? (t.return = e, Qe = t) : QR();
      }
    }
    function QR() {
      for (; Qe !== null; ) {
        var e = Qe;
        (e.flags & ea) !== at && (en(e), KR(e), hn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Qe = t;
          return;
        }
        Qe = e.return;
      }
    }
    function KR(e) {
      switch (e.tag) {
        case k:
        case le:
        case Ve: {
          e.mode & $t ? (L0(), Co($r | mr, e, e.return), O0(e)) : Co($r | mr, e, e.return);
          break;
        }
      }
    }
    function XR(e, t) {
      for (; Qe !== null; ) {
        var a = Qe;
        en(a), ZR(a, t), hn();
        var i = a.child;
        i !== null ? (i.return = a, Qe = i) : JR(e);
      }
    }
    function JR(e) {
      for (; Qe !== null; ) {
        var t = Qe, a = t.sibling, i = t.return;
        if (MS(t), t === e) {
          Qe = null;
          return;
        }
        if (a !== null) {
          a.return = i, Qe = a;
          return;
        }
        Qe = i;
      }
    }
    function ZR(e, t) {
      switch (e.tag) {
        case k:
        case le:
        case Ve: {
          e.mode & $t ? (L0(), Co($r, e, t), O0(e)) : Co($r, e, t);
          break;
        }
      }
    }
    function ek(e) {
      switch (e.tag) {
        case k:
        case le:
        case Ve: {
          try {
            Zu(yr | mr, e);
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
    function tk(e) {
      switch (e.tag) {
        case k:
        case le:
        case Ve: {
          try {
            Zu($r | mr, e);
          } catch (t) {
            mn(e, e.return, t);
          }
          break;
        }
      }
    }
    function nk(e) {
      switch (e.tag) {
        case k:
        case le:
        case Ve: {
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
    function rk(e) {
      switch (e.tag) {
        case k:
        case le:
        case Ve:
          try {
            Co($r | mr, e, e.return);
          } catch (t) {
            mn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var rv = Symbol.for;
      rv("selector.component"), rv("selector.has_pseudo_class"), rv("selector.role"), rv("selector.test_id"), rv("selector.text");
    }
    var ak = [];
    function ik() {
      ak.forEach(function(e) {
        return e();
      });
    }
    var ok = p.ReactCurrentActQueue;
    function lk(e) {
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
        return !e && ok.current !== null && h("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var uk = Math.ceil, v1 = p.ReactCurrentDispatcher, h1 = p.ReactCurrentOwner, Yr = p.ReactCurrentBatchConfig, wo = p.ReactCurrentActQueue, Sr = (
      /*             */
      0
    ), $S = (
      /*               */
      1
    ), Gr = (
      /*                */
      2
    ), Wi = (
      /*                */
      4
    ), eu = 0, av = 1, mc = 2, ny = 3, iv = 4, BS = 5, m1 = 6, Ut = Sr, Ra = null, An = null, Cr = se, sl = se, y1 = Bu(se), Er = eu, ov = null, ry = se, lv = se, ay = se, uv = null, Ya = null, g1 = 0, qS = 500, WS = 1 / 0, sk = 500, tu = null;
    function sv() {
      WS = Jn() + sk;
    }
    function YS() {
      return WS;
    }
    var iy = !1, _1 = null, ad = null, yc = !1, ts = null, cv = se, S1 = [], C1 = null, ck = 50, fv = 0, E1 = null, x1 = !1, oy = !1, fk = 50, id = 0, ly = null, dv = ln, uy = se, GS = !1;
    function sy() {
      return Ra;
    }
    function ka() {
      return (Ut & (Gr | Wi)) !== Sr ? Jn() : (dv !== ln || (dv = Jn()), dv);
    }
    function ns(e) {
      var t = e.mode;
      if ((t & Dt) === it)
        return pt;
      if ((Ut & Gr) !== Sr && Cr !== se)
        return Ps(Cr);
      var a = ob() !== ib;
      if (a) {
        if (Yr.transition !== null) {
          var i = Yr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return uy === Vt && (uy = ep()), uy;
      }
      var l = Ha();
      if (l !== Vt)
        return l;
      var s = Bx();
      return s;
    }
    function dk(e) {
      var t = e.mode;
      return (t & Dt) === it ? pt : ph();
    }
    function xr(e, t, a, i) {
      Uk(), GS && h("useInsertionEffect must not schedule updates."), x1 && (oy = !0), Mu(e, a, i), (Ut & Gr) !== se && e === Ra ? Ik(t) : (aa && Vs(e, t, a), Fk(t), e === Ra && ((Ut & Gr) === Sr && (lv = wt(lv, a)), Er === iv && rs(e, Cr)), Ga(e, i), a === pt && Ut === Sr && (t.mode & Dt) === it && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !wo.isBatchingLegacy && (sv(), G_()));
    }
    function pk(e, t, a) {
      var i = e.current;
      i.lanes = t, Mu(e, t, a), Ga(e, a);
    }
    function vk(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ut & Gr) !== Sr
      );
    }
    function Ga(e, t) {
      var a = e.callbackNode;
      vf(e, t);
      var i = pf(e, e === Ra ? Cr : se);
      if (i === se) {
        a !== null && cC(a), e.callbackNode = null, e.callbackPriority = Vt;
        return;
      }
      var l = Yo(i), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(wo.current !== null && a !== N1)) {
        a == null && s !== pt && h("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && cC(a);
      var d;
      if (l === pt)
        e.tag === qu ? (wo.isBatchingLegacy !== null && (wo.didScheduleLegacyUpdate = !0), Hw(XS.bind(null, e))) : Y_(XS.bind(null, e)), wo.current !== null ? wo.current.push(Wu) : Wx(function() {
          (Ut & (Gr | Wi)) === Sr && Wu();
        }), d = null;
      else {
        var y;
        switch (Sh(i)) {
          case zr:
            y = ws;
            break;
          case Ui:
            y = $o;
            break;
          case Fa:
            y = oo;
            break;
          case Va:
            y = Tl;
            break;
          default:
            y = oo;
            break;
        }
        d = O1(y, QS.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = d;
    }
    function QS(e, t) {
      if (Lb(), dv = ln, uy = se, (Ut & (Gr | Wi)) !== Sr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = ru();
      if (i && e.callbackNode !== a)
        return null;
      var l = pf(e, e === Ra ? Cr : se);
      if (l === se)
        return null;
      var s = !mf(e, l) && !dh(e, l) && !t, d = s ? wk(e, l) : fy(e, l);
      if (d !== eu) {
        if (d === mc) {
          var y = hf(e);
          y !== se && (l = y, d = w1(e, y));
        }
        if (d === av) {
          var g = ov;
          throw gc(e, se), rs(e, l), Ga(e, Jn()), g;
        }
        if (d === m1)
          rs(e, l);
        else {
          var b = !mf(e, l), T = e.current.alternate;
          if (b && !mk(T)) {
            if (d = fy(e, l), d === mc) {
              var P = hf(e);
              P !== se && (l = P, d = w1(e, P));
            }
            if (d === av) {
              var U = ov;
              throw gc(e, se), rs(e, l), Ga(e, Jn()), U;
            }
          }
          e.finishedWork = T, e.finishedLanes = l, hk(e, d, l);
        }
      }
      return Ga(e, Jn()), e.callbackNode === a ? QS.bind(null, e) : null;
    }
    function w1(e, t) {
      var a = uv;
      if (_f(e)) {
        var i = gc(e, t);
        i.flags |= kr, Aw(e.containerInfo);
      }
      var l = fy(e, t);
      if (l !== mc) {
        var s = Ya;
        Ya = a, s !== null && KS(s);
      }
      return l;
    }
    function KS(e) {
      Ya === null ? Ya = e : Ya.push.apply(Ya, e);
    }
    function hk(e, t, a) {
      switch (t) {
        case eu:
        case av:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case mc: {
          _c(e, Ya, tu);
          break;
        }
        case ny: {
          if (rs(e, a), Il(a) && // do not delay if we're inside an act() scope
          !fC()) {
            var i = g1 + qS - Jn();
            if (i > 10) {
              var l = pf(e, se);
              if (l !== se)
                break;
              var s = e.suspendedLanes;
              if (!Fl(s, a)) {
                ka(), yf(e, s);
                break;
              }
              e.timeoutHandle = Cg(_c.bind(null, e, Ya, tu), i);
              break;
            }
          }
          _c(e, Ya, tu);
          break;
        }
        case iv: {
          if (rs(e, a), Jd(a))
            break;
          if (!fC()) {
            var d = fi(e, a), y = d, g = Jn() - y, b = Ak(g) - g;
            if (b > 10) {
              e.timeoutHandle = Cg(_c.bind(null, e, Ya, tu), b);
              break;
            }
          }
          _c(e, Ya, tu);
          break;
        }
        case BS: {
          _c(e, Ya, tu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function mk(e) {
      for (var t = e; ; ) {
        if (t.flags & Tu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var s = i[l], d = s.getSnapshot, y = s.value;
                try {
                  if (!pe(d(), y))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var g = t.child;
        if (t.subtreeFlags & Tu && g !== null) {
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
    function rs(e, t) {
      t = Is(t, ay), t = Is(t, lv), mh(e, t);
    }
    function XS(e) {
      if (Mb(), (Ut & (Gr | Wi)) !== Sr)
        throw new Error("Should not already be working.");
      ru();
      var t = pf(e, se);
      if (!oa(t, pt))
        return Ga(e, Jn()), null;
      var a = fy(e, t);
      if (e.tag !== qu && a === mc) {
        var i = hf(e);
        i !== se && (t = i, a = w1(e, i));
      }
      if (a === av) {
        var l = ov;
        throw gc(e, se), rs(e, t), Ga(e, Jn()), l;
      }
      if (a === m1)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, _c(e, Ya, tu), Ga(e, Jn()), null;
    }
    function yk(e, t) {
      t !== se && (gf(e, wt(t, pt)), Ga(e, Jn()), (Ut & (Gr | Wi)) === Sr && (sv(), Wu()));
    }
    function b1(e, t) {
      var a = Ut;
      Ut |= $S;
      try {
        return e(t);
      } finally {
        Ut = a, Ut === Sr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !wo.isBatchingLegacy && (sv(), G_());
      }
    }
    function gk(e, t, a, i, l) {
      var s = Ha(), d = Yr.transition;
      try {
        return Yr.transition = null, $n(zr), e(t, a, i, l);
      } finally {
        $n(s), Yr.transition = d, Ut === Sr && sv();
      }
    }
    function nu(e) {
      ts !== null && ts.tag === qu && (Ut & (Gr | Wi)) === Sr && ru();
      var t = Ut;
      Ut |= $S;
      var a = Yr.transition, i = Ha();
      try {
        return Yr.transition = null, $n(zr), e ? e() : void 0;
      } finally {
        $n(i), Yr.transition = a, Ut = t, (Ut & (Gr | Wi)) === Sr && Wu();
      }
    }
    function JS() {
      return (Ut & (Gr | Wi)) !== Sr;
    }
    function cy(e, t) {
      fa(y1, sl, e), sl = wt(sl, t);
    }
    function R1(e) {
      sl = y1.current, ca(y1, e);
    }
    function gc(e, t) {
      e.finishedWork = null, e.finishedLanes = se;
      var a = e.timeoutHandle;
      if (a !== Eg && (e.timeoutHandle = Eg, qx(a)), An !== null)
        for (var i = An.return; i !== null; ) {
          var l = i.alternate;
          kS(l, i), i = i.return;
        }
      Ra = e;
      var s = Sc(e.current, null);
      return An = s, Cr = sl = t, Er = eu, ov = null, ry = se, lv = se, ay = se, uv = null, Ya = null, pb(), mo.discardPendingWarnings(), s;
    }
    function ZS(e, t) {
      do {
        var a = An;
        try {
          if (Sm(), x2(), hn(), h1.current = null, a === null || a.return === null) {
            Er = av, ov = t, An = null;
            return;
          }
          if (Pe && a.mode & $t && Qm(a, !0), Xe)
            if (Ea(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Ai(a, i, Cr);
            } else
              Rs(a, t, Cr);
          Hb(e, a.return, a, t, Cr), rC(a);
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
    function _k() {
      g1 = Jn();
    }
    function pv(e) {
      ry = wt(e, ry);
    }
    function Sk() {
      Er === eu && (Er = ny);
    }
    function k1() {
      (Er === eu || Er === ny || Er === mc) && (Er = iv), Ra !== null && (zs(ry) || zs(lv)) && rs(Ra, Cr);
    }
    function Ck(e) {
      Er !== iv && (Er = mc), uv === null ? uv = [e] : uv.push(e);
    }
    function Ek() {
      return Er === eu;
    }
    function fy(e, t) {
      var a = Ut;
      Ut |= Gr;
      var i = eC();
      if (Ra !== e || Cr !== t) {
        if (aa) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (vv(e, Cr), l.clear()), yh(e, t);
        }
        tu = ap(), gc(e, t);
      }
      Ll(t);
      do
        try {
          xk();
          break;
        } catch (s) {
          ZS(e, s);
        }
      while (!0);
      if (Sm(), Ut = a, tC(i), An !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Gc(), Ra = null, Cr = se, Er;
    }
    function xk() {
      for (; An !== null; )
        nC(An);
    }
    function wk(e, t) {
      var a = Ut;
      Ut |= Gr;
      var i = eC();
      if (Ra !== e || Cr !== t) {
        if (aa) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (vv(e, Cr), l.clear()), yh(e, t);
        }
        tu = ap(), sv(), gc(e, t);
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
      return Sm(), tC(i), Ut = a, An !== null ? (uh(), eu) : (Gc(), Ra = null, Cr = se, Er);
    }
    function bk() {
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
        if ((t.flags & xs) === at) {
          en(t);
          var l = void 0;
          if ((t.mode & $t) === it ? l = RS(a, t, sl) : (N0(t), l = RS(a, t, sl), Qm(t, !1)), hn(), l !== null) {
            An = l;
            return;
          }
        } else {
          var s = SR(a, t);
          if (s !== null) {
            s.flags &= nh, An = s;
            return;
          }
          if ((t.mode & $t) !== it) {
            Qm(t, !1);
            for (var d = t.actualDuration, y = t.child; y !== null; )
              d += y.actualDuration, y = y.sibling;
            t.actualDuration = d;
          }
          if (i !== null)
            i.flags |= xs, i.subtreeFlags = at, i.deletions = null;
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
      var i = Ha(), l = Yr.transition;
      try {
        Yr.transition = null, $n(zr), Rk(e, t, a, i);
      } finally {
        Yr.transition = l, $n(i);
      }
      return null;
    }
    function Rk(e, t, a, i) {
      do
        ru();
      while (ts !== null);
      if (zk(), (Ut & (Gr | Wi)) !== Sr)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if ($d(s), l === null)
        return Bd(), null;
      if (s === se && h("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = se, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Vt;
      var d = wt(l.lanes, l.childLanes);
      np(e, d), e === Ra && (Ra = null, An = null, Cr = se), ((l.subtreeFlags & io) !== at || (l.flags & io) !== at) && (yc || (yc = !0, C1 = a, O1(oo, function() {
        return ru(), null;
      })));
      var y = (l.subtreeFlags & (Fo | Vo | Ho | io)) !== at, g = (l.flags & (Fo | Vo | Ho | io)) !== at;
      if (y || g) {
        var b = Yr.transition;
        Yr.transition = null;
        var T = Ha();
        $n(zr);
        var P = Ut;
        Ut |= Wi, h1.current = null, bR(e, l), G2(), IR(e, l, s), Px(e.containerInfo), e.current = l, ks(s), FR(l, e, s), Ts(), Pd(), Ut = P, $n(T), Yr.transition = b;
      } else
        e.current = l, G2();
      var U = yc;
      if (yc ? (yc = !1, ts = e, cv = s) : (id = 0, ly = null), d = e.pendingLanes, d === se && (ad = null), U || lC(e.current, !1), Fd(l.stateNode, i), aa && e.memoizedUpdaters.clear(), ik(), Ga(e, Jn()), t !== null)
        for (var Y = e.onRecoverableError, K = 0; K < t.length; K++) {
          var te = t[K], je = te.stack, ut = te.digest;
          Y(te.value, {
            componentStack: je,
            digest: ut
          });
        }
      if (iy) {
        iy = !1;
        var et = _1;
        throw _1 = null, et;
      }
      return oa(cv, pt) && e.tag !== qu && ru(), d = e.pendingLanes, oa(d, pt) ? (Ob(), e === E1 ? fv++ : (fv = 0, E1 = e)) : fv = 0, Wu(), Bd(), null;
    }
    function ru() {
      if (ts !== null) {
        var e = Sh(cv), t = $s(Fa, e), a = Yr.transition, i = Ha();
        try {
          return Yr.transition = null, $n(t), Tk();
        } finally {
          $n(i), Yr.transition = a;
        }
      }
      return !1;
    }
    function kk(e) {
      S1.push(e), yc || (yc = !0, O1(oo, function() {
        return ru(), null;
      }));
    }
    function Tk() {
      if (ts === null)
        return !1;
      var e = C1;
      C1 = null;
      var t = ts, a = cv;
      if (ts = null, cv = se, (Ut & (Gr | Wi)) !== Sr)
        throw new Error("Cannot flush passive effects while already rendering.");
      x1 = !0, oy = !1, Ol(a);
      var i = Ut;
      Ut |= Wi, YR(t.current), $R(t, t.current, a, e);
      {
        var l = S1;
        S1 = [];
        for (var s = 0; s < l.length; s++) {
          var d = l[s];
          DR(t, d);
        }
      }
      Yd(), lC(t.current, !0), Ut = i, Wu(), oy ? t === ly ? id++ : (id = 0, ly = t) : id = 0, x1 = !1, oy = !1, Vd(t);
      {
        var y = t.current.stateNode;
        y.effectDuration = 0, y.passiveEffectDuration = 0;
      }
      return !0;
    }
    function aC(e) {
      return ad !== null && ad.has(e);
    }
    function Dk(e) {
      ad === null ? ad = /* @__PURE__ */ new Set([e]) : ad.add(e);
    }
    function Nk(e) {
      iy || (iy = !0, _1 = e);
    }
    var Ok = Nk;
    function iC(e, t, a) {
      var i = vc(a, t), l = nS(e, i, pt), s = Gu(e, l, pt), d = ka();
      s !== null && (Mu(s, pt, d), Ga(s, d));
    }
    function mn(e, t, a) {
      if (ER(a), hv(!1), e.tag === A) {
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
            var d = vc(a, e), y = G0(i, d, pt), g = Gu(i, y, pt), b = ka();
            g !== null && (Mu(g, pt, b), Ga(g, b));
            return;
          }
        }
        i = i.return;
      }
      h(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Lk(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = ka();
      yf(e, a), Vk(e), Ra === e && Fl(Cr, a) && (Er === iv || Er === ny && Il(Cr) && Jn() - g1 < qS ? gc(e, se) : ay = wt(ay, a)), Ga(e, l);
    }
    function oC(e, t) {
      t === Vt && (t = dk(e));
      var a = ka(), i = qa(e, t);
      i !== null && (Mu(i, t, a), Ga(i, a));
    }
    function Mk(e) {
      var t = e.memoizedState, a = Vt;
      t !== null && (a = t.retryLane), oC(e, a);
    }
    function jk(e, t) {
      var a = Vt, i;
      switch (e.tag) {
        case ve:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case X:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), oC(e, a);
    }
    function Ak(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : uk(e / 1960) * 1960;
    }
    function Uk() {
      if (fv > ck)
        throw fv = 0, E1 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      id > fk && (id = 0, ly = null, h("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function zk() {
      mo.flushLegacyContextWarning(), mo.flushPendingUnsafeLifecycleWarnings();
    }
    function lC(e, t) {
      en(e), dy(e, Io, nk), t && dy(e, Li, rk), dy(e, Io, ek), t && dy(e, Li, tk), hn();
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
        if ((Ut & Gr) !== Sr || !(e.mode & Dt))
          return;
        var t = e.tag;
        if (t !== O && t !== A && t !== x && t !== k && t !== le && t !== Ke && t !== Ve)
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
      var Pk = null;
      T1 = function(e, t, a) {
        var i = mC(Pk, t);
        try {
          return CS(e, t, a);
        } catch (s) {
          if (Kw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Sm(), x2(), kS(e, t), mC(t, i), t.mode & $t && N0(t), Po(null, CS, null, e, t, a), ro()) {
            var l = Es();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var sC = !1, D1;
    D1 = /* @__PURE__ */ new Set();
    function Ik(e) {
      if (bi && !Tb())
        switch (e.tag) {
          case k:
          case le:
          case Ve: {
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
      if (aa) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Vs(e, i, t);
        });
      }
    }
    var N1 = {};
    function O1(e, t) {
      {
        var a = wo.current;
        return a !== null ? (a.push(t), N1) : Ud(e, t);
      }
    }
    function cC(e) {
      if (e !== N1)
        return ah(e);
    }
    function fC() {
      return wo.current !== null;
    }
    function Fk(e) {
      {
        if (e.mode & Dt) {
          if (!HS())
            return;
        } else if (!lk() || Ut !== Sr || e.tag !== k && e.tag !== le && e.tag !== Ve)
          return;
        if (wo.current === null) {
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
    function Vk(e) {
      e.tag !== qu && HS() && wo.current === null && h(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

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
    var Yi = null, od = null, Hk = function(e) {
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
    function M1(e) {
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
          case le: {
            (s === ue || s === _t) && (l = !0);
            break;
          }
          case Ke:
          case Ve: {
            (s === Et || s === _t) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var d = Yi(a);
          if (d !== void 0 && d === Yi(i))
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
    var $k = function(e, t) {
      {
        if (Yi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        ru(), nu(function() {
          j1(e.current, i, a);
        });
      }
    }, Bk = function(e, t) {
      {
        if (e.context !== vi)
          return;
        ru(), nu(function() {
          mv(t, e, null, null);
        });
      }
    };
    function j1(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, d = e.tag, y = e.type, g = null;
        switch (d) {
          case k:
          case Ve:
          case x:
            g = y;
            break;
          case le:
            g = y.render;
            break;
        }
        if (Yi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var b = !1, T = !1;
        if (g !== null) {
          var P = Yi(g);
          P !== void 0 && (a.has(P) ? T = !0 : t.has(P) && (d === x ? T = !0 : b = !0));
        }
        if (od !== null && (od.has(e) || i !== null && od.has(i)) && (T = !0), T && (e._debugNeedsRemount = !0), T || b) {
          var U = qa(e, pt);
          U !== null && xr(U, e, pt, ln);
        }
        l !== null && !T && j1(l, t, a), s !== null && j1(s, t, a);
      }
    }
    var qk = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return A1(e.current, i, a), a;
      }
    };
    function A1(e, t, a) {
      {
        var i = e.child, l = e.sibling, s = e.tag, d = e.type, y = null;
        switch (s) {
          case k:
          case Ve:
          case x:
            y = d;
            break;
          case le:
            y = d.render;
            break;
        }
        var g = !1;
        y !== null && t.has(y) && (g = !0), g ? Wk(e, a) : i !== null && A1(i, t, a), l !== null && A1(l, t, a);
      }
    }
    function Wk(e, t) {
      {
        var a = Yk(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case $:
              t.add(i.stateNode);
              return;
            case F:
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
    function Yk(e, t) {
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
    function Gk(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = at, this.subtreeFlags = at, this.deletions = null, this.lanes = se, this.childLanes = se, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !U1 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var hi = function(e, t, a, i) {
      return new Gk(e, t, a, i);
    };
    function z1(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Qk(e) {
      return typeof e == "function" && !z1(e) && e.defaultProps === void 0;
    }
    function Kk(e) {
      if (typeof e == "function")
        return z1(e) ? x : k;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ue)
          return le;
        if (t === Et)
          return Ke;
      }
      return O;
    }
    function Sc(e, t) {
      var a = e.alternate;
      a === null ? (a = hi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = at, a.subtreeFlags = at, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Fn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case O:
        case k:
        case Ve:
          a.type = ld(e.type);
          break;
        case x:
          a.type = L1(e.type);
          break;
        case le:
          a.type = M1(e.type);
          break;
      }
      return a;
    }
    function Xk(e, t) {
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
    function Jk(e, t, a) {
      var i;
      return e === cm ? (i = Dt, t === !0 && (i |= rn, i |= Bt)) : i = it, aa && (i |= $t), hi(A, null, null, i);
    }
    function P1(e, t, a, i, l, s) {
      var d = O, y = e;
      if (typeof e == "function")
        z1(e) ? (d = x, y = L1(y)) : y = ld(y);
      else if (typeof e == "string")
        d = $;
      else
        e: switch (e) {
          case Ci:
            return as(a.children, l, s, t);
          case ei:
            d = Ce, l |= rn, (l & Dt) !== it && (l |= Bt);
            break;
          case Ei:
            return Zk(a, l, s, t);
          case Ne:
            return eT(a, l, s, t);
          case qe:
            return tT(a, l, s, t);
          case Dn:
            return hC(a, l, s, t);
          case cn:
          // eslint-disable-next-line no-fallthrough
          case Nt:
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
                case xi:
                  d = ge;
                  break e;
                case M:
                  d = Re;
                  break e;
                case ue:
                  d = le, y = M1(y);
                  break e;
                case Et:
                  d = Ke;
                  break e;
                case _t:
                  d = We, y = null;
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
      var T = hi(d, a, t, l);
      return T.elementType = e, T.type = y, T.lanes = s, T._debugOwner = i, T;
    }
    function I1(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, d = e.props, y = P1(l, s, d, i, t, a);
      return y._debugSource = e._source, y._debugOwner = e._owner, y;
    }
    function as(e, t, a, i) {
      var l = hi(oe, e, i, t);
      return l.lanes = a, l;
    }
    function Zk(e, t, a, i) {
      typeof e.id != "string" && h('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = hi(we, e, i, t | $t);
      return l.elementType = Ei, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function eT(e, t, a, i) {
      var l = hi(ve, e, i, t);
      return l.elementType = Ne, l.lanes = a, l;
    }
    function tT(e, t, a, i) {
      var l = hi(X, e, i, t);
      return l.elementType = qe, l.lanes = a, l;
    }
    function hC(e, t, a, i) {
      var l = hi(J, e, i, t);
      l.elementType = Dn, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function F1(e, t, a) {
      var i = hi(ie, e, null, t);
      return i.lanes = a, i;
    }
    function nT() {
      var e = hi($, null, null, it);
      return e.elementType = "DELETED", e;
    }
    function rT(e) {
      var t = hi(ot, null, null, it);
      return t.stateNode = e, t;
    }
    function V1(e, t, a) {
      var i = e.children !== null ? e.children : [], l = hi(F, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function mC(e, t) {
      return e === null && (e = hi(O, null, null, it)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function aT(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Eg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Vt, this.eventTimes = Fs(se), this.expirationTimes = Fs(ln), this.pendingLanes = se, this.suspendedLanes = se, this.pingedLanes = se, this.expiredLanes = se, this.mutableReadLanes = se, this.finishedLanes = se, this.entangledLanes = se, this.entanglements = Fs(se), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], d = 0; d < Ml; d++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case cm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case qu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function yC(e, t, a, i, l, s, d, y, g, b) {
      var T = new aT(e, t, a, y, g), P = Jk(t, s);
      T.current = P, P.stateNode = T;
      {
        var U = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        P.memoizedState = U;
      }
      return e0(P), T;
    }
    var H1 = "18.3.1";
    function iT(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Xr(i), {
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
        return vi;
      var t = ku(e), a = Vw(t);
      if (t.tag === x) {
        var i = t.type;
        if (nl(i))
          return q_(t, i, a);
      }
      return a;
    }
    function oT(e, t) {
      {
        var a = ku(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = na(a);
        if (l === null)
          return null;
        if (l.mode & rn) {
          var s = gt(a) || "Component";
          if (!B1[s]) {
            B1[s] = !0;
            var d = fr;
            try {
              en(l), a.mode & rn ? h("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : h("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              d ? en(d) : hn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function _C(e, t, a, i, l, s, d, y) {
      var g = !1, b = null;
      return yC(e, t, g, b, a, i, l, s, d);
    }
    function SC(e, t, a, i, l, s, d, y, g, b) {
      var T = !0, P = yC(a, i, T, e, l, s, d, y, g);
      P.context = gC(null);
      var U = P.current, Y = ka(), K = ns(U), te = Jl(Y, K);
      return te.callback = t ?? null, Gu(U, te, K), pk(P, K, Y), P;
    }
    function mv(e, t, a, i) {
      Id(t, e);
      var l = t.current, s = ka(), d = ns(l);
      xn(d);
      var y = gC(a);
      t.context === null ? t.context = y : t.pendingContext = y, bi && fr !== null && !$1 && ($1 = !0, h(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, gt(fr) || "Unknown"));
      var g = Jl(s, d);
      g.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && h("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), g.callback = i);
      var b = Gu(l, g, d);
      return b !== null && (xr(b, l, d, s), bm(b, l, d)), d;
    }
    function vy(e) {
      var t = e.current;
      return t.child ? t.child.tag === $ ? t.child.stateNode : t.child.stateNode : null;
    }
    function lT(e) {
      switch (e.tag) {
        case A: {
          var t = e.stateNode;
          if (_f(t)) {
            var a = ch(t);
            yk(t, a);
          }
          break;
        }
        case ve: {
          nu(function() {
            var l = qa(e, pt);
            if (l !== null) {
              var s = ka();
              xr(l, e, pt, s);
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
    function uT(e) {
      if (e.tag === ve) {
        var t = js, a = qa(e, t);
        if (a !== null) {
          var i = ka();
          xr(a, e, t, i);
        }
        q1(e, t);
      }
    }
    function sT(e) {
      if (e.tag === ve) {
        var t = ns(e), a = qa(e, t);
        if (a !== null) {
          var i = ka();
          xr(a, e, t, i);
        }
        q1(e, t);
      }
    }
    function EC(e) {
      var t = yn(e);
      return t === null ? null : t.stateNode;
    }
    var xC = function(e) {
      return null;
    };
    function cT(e) {
      return xC(e);
    }
    var wC = function(e) {
      return !1;
    };
    function fT(e) {
      return wC(e);
    }
    var bC = null, RC = null, kC = null, TC = null, DC = null, NC = null, OC = null, LC = null, MC = null;
    {
      var jC = function(e, t, a) {
        var i = t[a], l = kt(e) ? e.slice() : bt({}, e);
        return a + 1 === t.length ? (kt(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = jC(e[i], t, a + 1), l);
      }, AC = function(e, t) {
        return jC(e, t, 0);
      }, UC = function(e, t, a, i) {
        var l = t[i], s = kt(e) ? e.slice() : bt({}, e);
        if (i + 1 === t.length) {
          var d = a[i];
          s[d] = s[l], kt(s) ? s.splice(l, 1) : delete s[l];
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
          var d = qa(e, pt);
          d !== null && xr(d, e, pt, ln);
        }
      }, RC = function(e, t, a) {
        var i = W1(e, t);
        if (i !== null) {
          var l = AC(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = bt({}, e.memoizedProps);
          var s = qa(e, pt);
          s !== null && xr(s, e, pt, ln);
        }
      }, kC = function(e, t, a, i) {
        var l = W1(e, t);
        if (l !== null) {
          var s = zC(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = bt({}, e.memoizedProps);
          var d = qa(e, pt);
          d !== null && xr(d, e, pt, ln);
        }
      }, TC = function(e, t, a) {
        e.pendingProps = IC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = qa(e, pt);
        i !== null && xr(i, e, pt, ln);
      }, DC = function(e, t) {
        e.pendingProps = AC(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = qa(e, pt);
        a !== null && xr(a, e, pt, ln);
      }, NC = function(e, t, a) {
        e.pendingProps = zC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = qa(e, pt);
        i !== null && xr(i, e, pt, ln);
      }, OC = function(e) {
        var t = qa(e, pt);
        t !== null && xr(t, e, pt, ln);
      }, LC = function(e) {
        xC = e;
      }, MC = function(e) {
        wC = e;
      };
    }
    function dT(e) {
      var t = na(e);
      return t === null ? null : t.stateNode;
    }
    function pT(e) {
      return null;
    }
    function vT() {
      return fr;
    }
    function hT(e) {
      var t = e.findFiberByHostInstance, a = p.ReactCurrentDispatcher;
      return Nu({
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
        setSuspenseHandler: MC,
        scheduleUpdate: OC,
        currentDispatcherRef: a,
        findHostInstanceByFiber: dT,
        findFiberByHostInstance: t || pT,
        // React Refresh
        findHostInstancesForRefresh: qk,
        scheduleRefresh: $k,
        scheduleRoot: Bk,
        setRefreshHandler: Hk,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: vT,
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
    function mT(e, t) {
      if (!my(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      VC(e);
      var a = !1, i = !1, l = "", s = FC;
      t != null && (t.hydrate ? E("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Mr && h(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var d = _C(e, cm, null, a, i, l, s);
      rm(d.current, e);
      var y = e.nodeType === Pn ? e.parentNode : e;
      return Ep(y), new Y1(d);
    }
    function hy(e) {
      this._internalRoot = e;
    }
    function yT(e) {
      e && bh(e);
    }
    hy.prototype.unstable_scheduleHydration = yT;
    function gT(e, t, a) {
      if (!my(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      VC(e), t === void 0 && h("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, s = !1, d = !1, y = "", g = FC;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (y = a.identifierPrefix), a.onRecoverableError !== void 0 && (g = a.onRecoverableError));
      var b = SC(t, null, e, cm, i, s, d, y, g);
      if (rm(b.current, e), Ep(e), l)
        for (var T = 0; T < l.length; T++) {
          var P = l[T];
          Eb(b, P);
        }
      return new hy(b);
    }
    function my(e) {
      return !!(e && (e.nodeType === Zr || e.nodeType === no || e.nodeType === wd));
    }
    function yv(e) {
      return !!(e && (e.nodeType === Zr || e.nodeType === no || e.nodeType === wd || e.nodeType === Pn && e.nodeValue === " react-mount-point-unstable "));
    }
    function VC(e) {
      e.nodeType === Zr && e.tagName && e.tagName.toUpperCase() === "BODY" && h("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Mp(e) && (e._reactRootContainer ? h("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : h("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var _T = p.ReactCurrentOwner, HC;
    HC = function(e) {
      if (e._reactRootContainer && e.nodeType !== Pn) {
        var t = EC(e._reactRootContainer.current);
        t && t.parentNode !== e && h("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = G1(e), l = !!(i && $u(i));
      l && !a && h("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Zr && e.tagName && e.tagName.toUpperCase() === "BODY" && h("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function G1(e) {
      return e ? e.nodeType === no ? e.documentElement : e.firstChild : null;
    }
    function $C() {
    }
    function ST(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var U = vy(d);
            s.call(U);
          };
        }
        var d = SC(
          t,
          i,
          e,
          qu,
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
        e._reactRootContainer = d, rm(d.current, e);
        var y = e.nodeType === Pn ? e.parentNode : e;
        return Ep(y), nu(), d;
      } else {
        for (var g; g = e.lastChild; )
          e.removeChild(g);
        if (typeof i == "function") {
          var b = i;
          i = function() {
            var U = vy(T);
            b.call(U);
          };
        }
        var T = _C(
          e,
          qu,
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
        var P = e.nodeType === Pn ? e.parentNode : e;
        return Ep(P), nu(function() {
          mv(t, T, a, i);
        }), T;
      }
    }
    function CT(e, t) {
      e !== null && typeof e != "function" && h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function yy(e, t, a, i, l) {
      HC(a), CT(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, d;
      if (!s)
        d = ST(a, t, e, l, i);
      else {
        if (d = s, typeof l == "function") {
          var y = l;
          l = function() {
            var g = vy(d);
            y.call(g);
          };
        }
        mv(t, d, e, l);
      }
      return vy(d);
    }
    var BC = !1;
    function ET(e) {
      {
        BC || (BC = !0, h("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = _T.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || h("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", It(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Zr ? e : oT(e, "findDOMNode");
    }
    function xT(e, t, a) {
      if (h("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Mp(t) && t._reactRootContainer === void 0;
        i && h("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return yy(null, e, t, !0, a);
    }
    function wT(e, t, a) {
      if (h("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Mp(t) && t._reactRootContainer === void 0;
        i && h("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return yy(null, e, t, !1, a);
    }
    function bT(e, t, a, i) {
      if (h("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !qy(e))
        throw new Error("parentComponent must be a valid React Component");
      return yy(e, t, a, !1, i);
    }
    var qC = !1;
    function RT(e) {
      if (qC || (qC = !0, h("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !yv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Mp(e) && e._reactRootContainer === void 0;
        t && h("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = G1(e), i = a && !$u(a);
          i && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return nu(function() {
          yy(null, null, e, !1, function() {
            e._reactRootContainer = null, F_(e);
          });
        }), !0;
      } else {
        {
          var l = G1(e), s = !!(l && $u(l)), d = e.nodeType === Zr && yv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", d ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Dr(lT), ju(uT), Ch(sT), qs(Ha), ip(gh), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && h("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Ac(Tx), By(b1, gk, nu);
    function kT(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!my(t))
        throw new Error("Target container is not a DOM element.");
      return iT(e, t, null, a);
    }
    function TT(e, t, a, i) {
      return bT(e, t, a, i);
    }
    var Q1 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [$u, Pf, am, xu, Uc, b1]
    };
    function DT(e, t) {
      return Q1.usingClientEntryPoint || h('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), mT(e, t);
    }
    function NT(e, t, a) {
      return Q1.usingClientEntryPoint || h('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), gT(e, t, a);
    }
    function OT(e) {
      return JS() && h("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), nu(e);
    }
    var LT = hT({
      findFiberByHostInstance: ic,
      bundleType: 1,
      version: H1,
      rendererPackageName: "react-dom"
    });
    if (!LT && Un && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var WC = window.location.protocol;
      /^(https?|file):$/.test(WC) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (WC === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q1, Ka.createPortal = kT, Ka.createRoot = DT, Ka.findDOMNode = ET, Ka.flushSync = OT, Ka.hydrate = xT, Ka.hydrateRoot = NT, Ka.render = wT, Ka.unmountComponentAtNode = RT, Ka.unstable_batchedUpdates = b1, Ka.unstable_renderSubtreeIntoContainer = TT, Ka.version = H1, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })()), Ka;
}
var hE;
function dM() {
  if (hE) return Ey.exports;
  hE = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (v) {
        console.error(v);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (c(), Ey.exports = cM()) : Ey.exports = fM(), Ey.exports;
}
var f_ = dM();
const Cv = /* @__PURE__ */ NE(f_);
function n_(c, v) {
  (v == null || v > c.length) && (v = c.length);
  for (var p = 0, _ = Array(v); p < v; p++) _[p] = c[p];
  return _;
}
function pM(c) {
  if (Array.isArray(c)) return c;
}
function vM(c) {
  if (Array.isArray(c)) return n_(c);
}
function hM(c) {
  if (c === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return c;
}
function mE(c, v, p, _, w, E, h) {
  try {
    var R = c[E](h), k = R.value;
  } catch (x) {
    return void p(x);
  }
  R.done ? v(k) : Promise.resolve(k).then(_, w);
}
function mM(c) {
  return function() {
    var v = this, p = arguments;
    return new Promise(function(_, w) {
      var E = c.apply(v, p);
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
function Ty(c, v, p) {
  return v = r_(v), EM(c, zE() ? Reflect.construct(v, p || [], r_(c).constructor) : v.apply(c, p));
}
function bv(c, v) {
  if (!(c instanceof v)) throw new TypeError("Cannot call a class as a function");
}
function yE(c, v) {
  for (var p = 0; p < v.length; p++) {
    var _ = v[p];
    _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(c, ky(_.key), _);
  }
}
function Rv(c, v, p) {
  return v && yE(c.prototype, v), p && yE(c, p), Object.defineProperty(c, "prototype", { writable: !1 }), c;
}
function pd(c, v, p) {
  return (v = ky(v)) in c ? Object.defineProperty(c, v, { value: p, enumerable: !0, configurable: !0, writable: !0 }) : c[v] = p, c;
}
function Ec() {
  return (Ec = Object.assign ? Object.assign.bind() : function(c) {
    for (var v = 1; v < arguments.length; v++) {
      var p, _ = arguments[v];
      for (p in _) !{}.hasOwnProperty.call(_, p) || (c[p] = _[p]);
    }
    return c;
  }).apply(null, arguments);
}
function r_(c) {
  return (r_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(v) {
    return v.__proto__ || Object.getPrototypeOf(v);
  })(c);
}
function Dy(c, v) {
  if (typeof v != "function" && v !== null) throw new TypeError("Super expression must either be null or a function");
  c.prototype = Object.create(v && v.prototype, { constructor: { value: c, writable: !0, configurable: !0 } }), Object.defineProperty(c, "prototype", { writable: !1 }), v && PE(c, v);
}
function zE() {
  try {
    var c = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (zE = function() {
    return !!c;
  })();
}
function yM(c) {
  if (typeof Symbol < "u" && c[Symbol.iterator] != null || c["@@iterator"] != null) return Array.from(c);
}
function gM(c, v) {
  var p = c == null ? null : typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
  if (p != null) {
    var _, w, E, h, R = [], k = !0, x = !1;
    try {
      if (E = (p = p.call(c)).next, v !== 0) for (; !(k = (_ = E.call(p)).done) && (R.push(_.value), R.length !== v); k = !0) ;
    } catch (O) {
      x = !0, w = O;
    } finally {
      try {
        if (!k && p.return != null && (h = p.return(), Object(h) !== h)) return;
      } finally {
        if (x) throw w;
      }
    }
    return R;
  }
}
function _M() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function SM() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gE(c, v) {
  var p, _ = Object.keys(c);
  return Object.getOwnPropertySymbols && (p = Object.getOwnPropertySymbols(c), v && (p = p.filter(function(w) {
    return Object.getOwnPropertyDescriptor(c, w).enumerable;
  })), _.push.apply(_, p)), _;
}
function ce(c) {
  for (var v = 1; v < arguments.length; v++) {
    var p = arguments[v] != null ? arguments[v] : {};
    v % 2 ? gE(Object(p), !0).forEach(function(_) {
      pd(c, _, p[_]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(p)) : gE(Object(p)).forEach(function(_) {
      Object.defineProperty(c, _, Object.getOwnPropertyDescriptor(p, _));
    });
  }
  return c;
}
function Qi(c, v) {
  if (c == null) return {};
  var p, _ = CM(c, v);
  if (Object.getOwnPropertySymbols) for (var w = Object.getOwnPropertySymbols(c), E = 0; E < w.length; E++) p = w[E], v.includes(p) || {}.propertyIsEnumerable.call(c, p) && (_[p] = c[p]);
  return _;
}
function CM(c, v) {
  if (c == null) return {};
  var p, _ = {};
  for (p in c) if ({}.hasOwnProperty.call(c, p)) {
    if (v.includes(p)) continue;
    _[p] = c[p];
  }
  return _;
}
function EM(c, v) {
  if (v && (typeof v == "object" || typeof v == "function")) return v;
  if (v !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return hM(c);
}
function cd() {
  cd = function() {
    return v;
  };
  var c, v = {}, p = Object.prototype, _ = p.hasOwnProperty, w = Object.defineProperty || function(V, J, Ee) {
    V[J] = Ee.value;
  }, le = typeof Symbol == "function" ? Symbol : {}, E = le.iterator || "@@iterator", h = le.asyncIterator || "@@asyncIterator", R = le.toStringTag || "@@toStringTag";
  function k(V, J, Ee) {
    return Object.defineProperty(V, J, { value: Ee, enumerable: !0, configurable: !0, writable: !0 }), V[J];
  }
  try {
    k({}, "");
  } catch {
    k = function(J, Ee, He) {
      return J[Ee] = He;
    };
  }
  function x(V, he, Ee, I) {
    var De, xe, re, Oe, he = he && he.prototype instanceof Ce ? he : Ce, he = Object.create(he.prototype), I = new ot(I || []);
    return w(he, "_invoke", { value: (De = V, xe = Ee, re = I, Oe = A, function(ee, Xe) {
      if (Oe === $) throw Error("Generator is already running");
      if (Oe === ie) {
        if (ee === "throw") throw Xe;
        return { value: c, done: !0 };
      }
      for (re.method = ee, re.arg = Xe; ; ) {
        var Pe = re.delegate;
        if (Pe && (Pe = (function mt(rt, Le) {
          var ct = Le.method, vt = rt.iterator[ct];
          return vt === c ? (Le.delegate = null, ct === "throw" && rt.iterator.return && (Le.method = "return", Le.arg = c, mt(rt, Le), Le.method === "throw") || ct !== "return" && (Le.method = "throw", Le.arg = new TypeError("The iterator does not provide a '" + ct + "' method")), oe) : (ct = O(vt, rt.iterator, Le.arg), ct.type === "throw" ? (Le.method = "throw", Le.arg = ct.arg, Le.delegate = null, oe) : (vt = ct.arg, vt ? vt.done ? (Le[rt.resultName] = vt.value, Le.next = rt.nextLoc, Le.method !== "return" && (Le.method = "next", Le.arg = c), Le.delegate = null, oe) : vt : (Le.method = "throw", Le.arg = new TypeError("iterator result is not an object"), Le.delegate = null, oe)));
        })(Pe, re), Pe)) {
          if (Pe === oe) continue;
          return Pe;
        }
        if (re.method === "next") re.sent = re._sent = re.arg;
        else if (re.method === "throw") {
          if (Oe === A) throw Oe = ie, re.arg;
          re.dispatchException(re.arg);
        } else re.method === "return" && re.abrupt("return", re.arg);
        if (Oe = $, Pe = O(De, xe, re), Pe.type === "normal") {
          if (Oe = re.done ? ie : F, Pe.arg === oe) continue;
          return { value: Pe.arg, done: re.done };
        }
        Pe.type === "throw" && (Oe = ie, re.method = "throw", re.arg = Pe.arg);
      }
    }) }), he;
  }
  function O(V, J, Ee) {
    try {
      return { type: "normal", arg: V.call(J, Ee) };
    } catch (He) {
      return { type: "throw", arg: He };
    }
  }
  v.wrap = x;
  var A = "suspendedStart", F = "suspendedYield", $ = "executing", ie = "completed", oe = {};
  function Ce() {
  }
  function Re() {
  }
  function ge() {
  }
  var le = {}, we = (k(le, E, function() {
    return this;
  }), Object.getPrototypeOf), we = we && we(we(X([]))), ve = (we && we !== p && _.call(we, E) && (le = we), ge.prototype = Ce.prototype = Object.create(le));
  function Ke(V) {
    ["next", "throw", "return"].forEach(function(J) {
      k(V, J, function(Ee) {
        return this._invoke(J, Ee);
      });
    });
  }
  function Ve(V, J) {
    var Ee;
    w(this, "_invoke", { value: function(He, De) {
      function xe() {
        return new J(function(re, Oe) {
          (function he(rt, ee, Xe, Pe) {
            var mt, rt = O(V[rt], V, ee);
            if (rt.type !== "throw") return (ee = (mt = rt.arg).value) && typeof ee == "object" && _.call(ee, "__await") ? J.resolve(ee.__await).then(function(Le) {
              he("next", Le, Xe, Pe);
            }, function(Le) {
              he("throw", Le, Xe, Pe);
            }) : J.resolve(ee).then(function(Le) {
              mt.value = Le, Xe(mt);
            }, function(Le) {
              return he("throw", Le, Xe, Pe);
            });
            Pe(rt.arg);
          })(He, De, re, Oe);
        });
      }
      return Ee = Ee ? Ee.then(xe, xe) : xe();
    } });
  }
  function We(V) {
    var J = { tryLoc: V[0] };
    1 in V && (J.catchLoc = V[1]), 2 in V && (J.finallyLoc = V[2], J.afterLoc = V[3]), this.tryEntries.push(J);
  }
  function nt(V) {
    var J = V.completion || {};
    J.type = "normal", delete J.arg, V.completion = J;
  }
  function ot(V) {
    this.tryEntries = [{ tryLoc: "root" }], V.forEach(We, this), this.reset(!0);
  }
  function X(V) {
    if (V || V === "") {
      var J, Ee = V[E];
      if (Ee) return Ee.call(V);
      if (typeof V.next == "function") return V;
      if (!isNaN(V.length)) return J = -1, (Ee = function He() {
        for (; ++J < V.length; ) if (_.call(V, J)) return He.value = V[J], He.done = !1, He;
        return He.value = c, He.done = !0, He;
      }).next = Ee;
    }
    throw new TypeError(typeof V + " is not iterable");
  }
  return w(ve, "constructor", { value: Re.prototype = ge, configurable: !0 }), w(ge, "constructor", { value: Re, configurable: !0 }), Re.displayName = k(ge, R, "GeneratorFunction"), v.isGeneratorFunction = function(V) {
    return V = typeof V == "function" && V.constructor, !!V && (V === Re || (V.displayName || V.name) === "GeneratorFunction");
  }, v.mark = function(V) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(V, ge) : (V.__proto__ = ge, k(V, R, "GeneratorFunction")), V.prototype = Object.create(ve), V;
  }, v.awrap = function(V) {
    return { __await: V };
  }, Ke(Ve.prototype), k(Ve.prototype, h, function() {
    return this;
  }), v.AsyncIterator = Ve, v.async = function(V, J, Ee, He, De) {
    De === void 0 && (De = Promise);
    var xe = new Ve(x(V, J, Ee, He), De);
    return v.isGeneratorFunction(J) ? xe : xe.next().then(function(re) {
      return re.done ? re.value : xe.next();
    });
  }, Ke(ve), k(ve, R, "Generator"), k(ve, E, function() {
    return this;
  }), k(ve, "toString", function() {
    return "[object Generator]";
  }), v.keys = function(V) {
    var J, Ee = Object(V), He = [];
    for (J in Ee) He.push(J);
    return He.reverse(), function De() {
      for (; He.length; ) {
        var xe = He.pop();
        if (xe in Ee) return De.value = xe, De.done = !1, De;
      }
      return De.done = !0, De;
    };
  }, v.values = X, ot.prototype = { constructor: ot, reset: function(V) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = c, this.done = !1, this.delegate = null, this.method = "next", this.arg = c, this.tryEntries.forEach(nt), !V) for (var J in this) J.charAt(0) === "t" && _.call(this, J) && !isNaN(+J.slice(1)) && (this[J] = c);
  }, stop: function() {
    this.done = !0;
    var V = this.tryEntries[0].completion;
    if (V.type === "throw") throw V.arg;
    return this.rval;
  }, dispatchException: function(V) {
    if (this.done) throw V;
    var J = this;
    function Ee(he, I) {
      return xe.type = "throw", xe.arg = V, J.next = he, I && (J.method = "next", J.arg = c), !!I;
    }
    for (var He = this.tryEntries.length - 1; 0 <= He; --He) {
      var De = this.tryEntries[He], xe = De.completion;
      if (De.tryLoc === "root") return Ee("end");
      if (De.tryLoc <= this.prev) {
        var re = _.call(De, "catchLoc"), Oe = _.call(De, "finallyLoc");
        if (re && Oe) {
          if (this.prev < De.catchLoc) return Ee(De.catchLoc, !0);
          if (this.prev < De.finallyLoc) return Ee(De.finallyLoc);
        } else if (re) {
          if (this.prev < De.catchLoc) return Ee(De.catchLoc, !0);
        } else {
          if (!Oe) throw Error("try statement without catch or finally");
          if (this.prev < De.finallyLoc) return Ee(De.finallyLoc);
        }
      }
    }
  }, abrupt: function(V, J) {
    for (var Ee = this.tryEntries.length - 1; 0 <= Ee; --Ee) {
      var He = this.tryEntries[Ee];
      if (He.tryLoc <= this.prev && _.call(He, "finallyLoc") && this.prev < He.finallyLoc) {
        var De = He;
        break;
      }
    }
    var xe = (De = De && (V === "break" || V === "continue") && De.tryLoc <= J && J <= De.finallyLoc ? null : De) ? De.completion : {};
    return xe.type = V, xe.arg = J, De ? (this.method = "next", this.next = De.finallyLoc, oe) : this.complete(xe);
  }, complete: function(V, J) {
    if (V.type === "throw") throw V.arg;
    return V.type === "break" || V.type === "continue" ? this.next = V.arg : V.type === "return" ? (this.rval = this.arg = V.arg, this.method = "return", this.next = "end") : V.type === "normal" && J && (this.next = J), oe;
  }, finish: function(V) {
    for (var J = this.tryEntries.length - 1; 0 <= J; --J) {
      var Ee = this.tryEntries[J];
      if (Ee.finallyLoc === V) return this.complete(Ee.completion, Ee.afterLoc), nt(Ee), oe;
    }
  }, catch: function(V) {
    for (var J = this.tryEntries.length - 1; 0 <= J; --J) {
      var Ee, He, De = this.tryEntries[J];
      if (De.tryLoc === V) return (Ee = De.completion).type === "throw" && (He = Ee.arg, nt(De)), He;
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(V, J, Ee) {
    return this.delegate = { iterator: X(V), resultName: J, nextLoc: Ee }, this.method === "next" && (this.arg = c), oe;
  } }, v;
}
function PE(c, v) {
  return (PE = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(p, _) {
    return p.__proto__ = _, p;
  })(c, v);
}
function _E(c, v) {
  return pM(c) || gM(c, v) || IE(c, v) || _M();
}
function Ny(c) {
  return vM(c) || yM(c) || IE(c) || SM();
}
function xM(c, v) {
  if (typeof c != "object" || !c) return c;
  var p = c[Symbol.toPrimitive];
  if (p === void 0) return (v === "string" ? String : Number)(c);
  if (p = p.call(c, v), typeof p != "object") return p;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
function ky(c) {
  return c = xM(c, "string"), typeof c == "symbol" ? c : c + "";
}
function Kr(c) {
  return (Kr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(v) {
    return typeof v;
  } : function(v) {
    return v && typeof Symbol == "function" && v.constructor === Symbol && v !== Symbol.prototype ? "symbol" : typeof v;
  })(c);
}
function IE(c, v) {
  var p;
  if (c) return typeof c == "string" ? n_(c, v) : (p = (p = {}.toString.call(c).slice(8, -1)) === "Object" && c.constructor ? c.constructor.name : p) === "Map" || p === "Set" ? Array.from(c) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? n_(c, v) : void 0;
}
var FE = { react: { componentWrap: "div", slotWrap: "div", componentWrapAttrs: { __use_react_component_wrap: "", style: { all: "unset" } }, slotWrapAttrs: { __use_react_slot_wrap: "", style: { all: "unset" } }, vueNamedSlotsKey: ["node:"] }, vue: { componentWrapHOC: function(c) {
  return function() {
    var v = (0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}).portals;
    return ze.createElement(ze.Fragment, null, c, (v === void 0 ? [] : v).map(function(p) {
      var _ = p.Portal;
      return ze.createElement(_, { key: p.key });
    }));
  };
}, componentWrapAttrs: { "data-use-vue-component-wrap": "", style: { all: "unset" } }, slotWrapAttrs: { "data-use-vue-slot-wrap": "", style: { all: "unset" } } } };
function VE() {
  var c = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : { react: {}, vue: {} }, p = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : FE, v = 2 < arguments.length ? arguments[2] : void 0, p = (c.vue || (c.vue = {}), c.react || (c.react = {}), [p, ce(ce({}, c), {}, { react: ce(ce(ce({}, p.react), c.react), {}, { componentWrapAttrs: ce(ce({}, p.react.componentWrapAttrs), c.react.componentWrapAttrs), slotWrapAttrs: ce(ce({}, p.react.slotWrapAttrs), c.react.slotWrapAttrs) }), vue: ce(ce(ce({}, p.vue), c.vue), {}, { componentWrapAttrs: ce(ce({}, p.vue.componentWrapAttrs), c.vue.componentWrapAttrs), slotWrapAttrs: ce(ce({}, p.vue.slotWrapAttrs), c.vue.slotWrapAttrs) }) })]);
  return v && p.unshift({}), Object.assign.apply(this, p);
}
var HE = ["getElementById", "getElementsByClassName", "getElementsByTagName", "getElementsByTagNameNS", "querySelector", "querySelectorAll"], fd = { Document: {}, Element: {} };
function wM(c) {
  Object.keys(fd).forEach(function(v) {
    HE.forEach(function(p) {
      var _ = fd[v][p] || window[v].prototype[p];
      _ && (fd[v][p] = _, window[v].prototype[p] = function() {
        for (var w = arguments.length, E = new Array(w), h = 0; h < w; h++) E[h] = arguments[h];
        var R = _.apply(this, E);
        return R && (R.constructor !== NodeList || R.constructor === NodeList && 0 < R.length) ? R : ((R = p) === "getElementById" && (R = "querySelector", E = ["#" + E[0]]), (fd.Element[R] || Element.prototype[R]).apply(c, E));
      });
    });
  });
}
function bM() {
  Object.keys(fd).forEach(function(c) {
    HE.forEach(function(v) {
      window[c].prototype[v] = fd[c][v];
    });
  });
}
var RM = ["ref"], kM = ["key"], TM = ["hashList"], e_ = parseInt(f_.version);
var DM = (() => {
  function c(v) {
    return bv(this, c), Ty(this, c, [v]);
  }
  return Dy(c, ze.Component), Rv(c, [{ key: "render", value: function() {
    var v = this.props.component, p = this.props.passedProps, p = (p.ref, Qi(p, RM));
    return ze.createElement(v, p, this.props.children);
  } }]);
})(), NM = function(c, v, p) {
  var _ = (() => {
    function w(E) {
      var h;
      return bv(this, w), (h = Ty(this, w, [E])).state = ce(ce({}, E), v.isSlots ? { children: c } : {}), h.setRef = h.setRef.bind(h), h.vueInReactCall = h.vueInReactCall.bind(h), (h.__veauryVueWrapperRef__ = p).__veauryVueInReactCall__ = h.vueInReactCall, h;
    }
    return Dy(w, ze.Component), Rv(w, [{ key: "reactPropsLinkToVueInstance", value: function(E) {
      Object.keys(E).forEach(function(h) {
        p[h] || (p[h] = E[h]);
      }), Object.getOwnPropertyNames(E.__proto__).filter(function(h) {
        return ["constructor", "render"].indexOf(h) < 0;
      }).forEach(function(h) {
        p[h] || (p[h] = E[h]);
      });
    } }, { key: "setRef", value: function(E) {
      var h = this;
      E && (p.__veauryReactRef__ = E, this.reactPropsLinkToVueInstance(E), Promise.resolve().then(function() {
        return h.reactPropsLinkToVueInstance(E);
      }), (this.setRef.current = E).__veauryVueWrapperRef__ = p);
    } }, { key: "createSlot", value: function(E) {
      return { originVNode: E, inheritAttrs: !1, __fromReactSlot: !0, render: function() {
        var h, R;
        return ((h = E = (E = ((R = this.$slots) == null || (h = R.default) == null ? void 0 : h.call(R)) || E) instanceof Function ? E(this) : E) == null ? void 0 : h.length) === 1 && (R = E[0]) != null && R.data && ((h = this.$attrs).key, R = Qi(h, kM), E[0].props = ce(ce({}, R), E[0].props)), E;
      } };
    } }, { key: "componentWillUnmount", value: function() {
      p.__veauryReactRef__ && (p.__veauryReactRef__.__veauryVueWrapperRef__ = null, p.__veauryReactRef__ = null);
    } }, { key: "vueInReactCall", value: function(E) {
      var h = this, R = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
      return 2 < arguments.length && arguments[2] && E && E[0] ? E.map(function(k, x) {
        return wy(h.createSlot(k instanceof Function ? k : [k]), ce(ce(ce({}, v), R), {}, { isSlots: !0, wrapInstance: p })).render({ key: k?.key || void 0 });
      }) : wy(this.createSlot(E), ce(ce(ce({}, v), R), {}, { isSlots: !0, wrapInstance: p })).render();
    } }, { key: "render", value: function() {
      var E, h, R, k = this, oe = this.state, x = oe.hashList, O = Qi(oe, TM), A = {}, F = {};
      for (E in O) h = E, R = void 0, O.hasOwnProperty(h) && O[h] != null && (O[h].__slot ? (O[h].reactSlot ? O[h] = O[h].reactSlot : (R = O[h], v.defaultSlotsFormatter && O[h].__trueChildren ? (O[h].__trueChildren.__top__ = k.__veauryVueWrapperRef__, O[h] = v.defaultSlotsFormatter(O[h].__trueChildren, k.vueInReactCall, x), O[h] instanceof Array ? O[h] = Ny(O[h]) : -1 < ["string", "number"].indexOf(Kr(O[h])) ? O[h] = [O[h]] : Kr(O[h]) === "object" && (O[h] = ce({}, O[h]))) : O[h] = ce({}, wy(k.createSlot(O[h]), ce(ce({}, v), {}, { isSlots: !0, wrapInstance: p })).render()), O[h].vueFunction = R), A[h] = O[h]) : O[h].__scopedSlot && (O[h] = O[h](k.createSlot), F[h] = O[h]));
      var $, ie, oe = {};
      return oe.ref = this.setRef, v.isSlots ? this.state.children || this.props.children : ($ = O, c.__syncUpdateForPureReactInVue && Object.keys(c.__syncUpdateForPureReactInVue).map(function(Ce) {
        var Re, ge;
        $[Ce] && typeof $[Ce] == "function" && (Re = k.__veauryVueWrapperRef__, ge = $[Ce], $[Ce] = function() {
          for (var le = arguments.length, we = new Array(le), ve = 0; ve < le; ve++) we[ve] = arguments[ve];
          Re.__veaurySyncUpdateProps__(c.__syncUpdateForPureReactInVue[Ce].apply(this, we)), ge.apply(this, we), Re.macroTaskUpdate = !0, Re.__veauryMountReactComponent__(!0, !0, {});
        });
      }), ie = ce(ce(ce({}, $ = v.defaultPropsFormatter ? v.defaultPropsFormatter.call(this, $, this.vueInReactCall, x) : $), A), F), Object.getPrototypeOf(c) !== Function.prototype && (Kr(c) !== "object" || c.render) || w.catchVueRefs() ? (Object.getPrototypeOf(c) === Function.prototype && delete oe.ref, ze.createElement(c, Ec({}, ie, oe))) : ze.createElement(DM, Ec({ passedProps: ie, component: c }, oe), ie.children));
    } }], [{ key: "catchVueRefs", value: function() {
      if (p.$parent) {
        for (var E in p.$parent.$refs) if (p.$parent.$refs[E] === p) return !0;
      }
      return !1;
    } }]);
  })();
  return pd(_, "displayName", "applyReact_".concat(c.displayName || c.name || "Component")), _;
};
function d_(c) {
  var v = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
  return c.__esModule && c.default && (c = c.default), v.isSlots && (c = c()), v = VE(v, void 0, !0), { originReactComponent: c, setup: function(p, _) {
    var w, E, h, R;
    if (!v.isSlots) return w = {}, E = AT({}), h = UT(), typeof (R = v.useInjectPropsFromWrapper || c.__veauryInjectPropsFromWrapper__) == "function" && (typeof (R = R.call(h.proxy, p)) != "function" ? (Object.assign(E, R), w.__veauryInjectedProps__ = E) : h.proxy.__veauryInjectedComputed__ = R), w;
  }, data: function() {
    return { VEAURY_Portals: [] };
  }, created: function() {
    this.__veauryPortalKeyPool__ = [], this.__veauryMaxPortalCount__ = 0;
  }, computed: { __veauryInjectedProps__: function() {
    var p;
    return (p = this.__veauryInjectedComputed__) == null ? void 0 : p.call(this);
  } }, render: function() {
    var p = lu(v.react.componentWrap, ce({ ref: "react" }, v.react.componentWrapAttrs || {}), this.VEAURY_Portals.map(function(_) {
      return (0, _.Portal)(lu, _.key);
    }));
    return this.__veauryCheckReactSlot__(this.$slots), p;
  }, methods: { __veauryCheckReactSlot__: function(p) {
    var _ = this;
    function w(E, h, R) {
      return h[R] && (E[R] = h[R], 1);
    }
    Kr(p) === "object" && p != null && (p instanceof Array ? p.forEach(function(E) {
      _.__veauryCheckReactSlot__(E.children);
    }) : Object.keys(p).forEach(function(k) {
      var h, R, k = p[k];
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
  }, __veauryPushVuePortal__: function(p) {
    var _ = this.__veauryPortalKeyPool__.shift() || this.__veauryMaxPortalCount__++;
    this.VEAURY_Portals.push({ Portal: p, key: _ });
  }, __veauryRemoveVuePortal__: function(p) {
    var _, w = this.VEAURY_Portals.find(function(E, h) {
      if (E.Portal === p) return _ = h, !0;
    });
    this.__veauryPortalKeyPool__.push(w.key), this.VEAURY_Portals.splice(_, 1);
  }, __veauryGetScopeSlot__: function(p, _, w) {
    var E = this;
    function h(R) {
      function k() {
        for (var x, O = this, A = arguments.length, F = new Array(A), $ = 0; $ < A; $++) F[$] = arguments[$];
        return p.reactFunction ? p.reactFunction.apply(this, F) : v.defaultSlotsFormatter ? ((x = p.apply(this, F)).__top__ = E, (x = v.defaultSlotsFormatter(x, E.__veauryVueInReactCall__, _)) instanceof Array || -1 < Kr(x).indexOf("string", "number") ? x = Ny(x) : Kr(x) === "object" && (x = ce({}, x)), x) : wy(R(function() {
          return p.apply(O, F);
        }), ce(ce({}, v), {}, { isSlots: !0, wrapInstance: E })).render();
      }
      return v.pureTransformer && w ? k.vueFunction = w : k.vueFunction = p, k;
    }
    return h.__scopedSlot = !0, h;
  }, __veaurySyncUpdateProps__: function(p) {
    this.__veauryReactInstance__ && this.__veauryReactInstance__.setState(p);
  }, __veauryMountReactComponent__: function(p, _) {
    var w = arguments, E = this;
    return mM(cd().mark(function h() {
      var R, k, x, O, A, F, $, ie, oe, Ce, Re, ge, le, we, ve, Ke, Ve;
      return cd().wrap(function(We) {
        for (; ; ) switch (We.prev = We.next) {
          case 0:
            if (R = 2 < w.length && w[2] !== void 0 ? w[2] : {}, k = {}, x = [], (ie = E.$.vnode.scopeId) && (k[ie] = "", x.push(ie)), O = {}, A = {}, p && (_ == null || !_.slot)) {
              We.next = 18;
              break;
            }
            $ = cd().mark(function nt(ot) {
              var X;
              return cd().wrap(function(V) {
                for (; ; ) switch (V.prev = V.next) {
                  case 0:
                    if (E.$slots.hasOwnProperty(ot) && E.$slots[ot] != null) {
                      V.next = 2;
                      break;
                    }
                    return V.abrupt("return", 0);
                  case 2:
                    if ((X = v.react.vueNamedSlotsKey.find(function(J) {
                      return ot.indexOf(J) === 0;
                    })) || ot === "default") return X = ot.replace(new RegExp("^".concat(X)), ""), O[X] = E.$slots[ot], O[X].__slot = !0, V.abrupt("return", 0);
                    V.next = 8;
                    break;
                  case 8:
                    A[ot] = E.__veauryGetScopeSlot__(E.$slots[ot], x, (X = E.$.vnode) == null || (X = X.children) == null ? void 0 : X[ot]);
                  case 9:
                  case "end":
                    return V.stop();
                }
              }, nt);
            }), We.t0 = cd().keys(E.$slots || {});
          case 10:
            if ((We.t1 = We.t0()).done) {
              We.next = 18;
              break;
            }
            return ie = We.t1.value, We.delegateYield($(ie), "t2", 13);
          case 13:
            if (We.t2 === 0) return We.abrupt("continue", 10);
            We.next = 16;
            break;
          case 16:
            We.next = 10;
            break;
          case 18:
            if ((!p || _ != null && _.slot) && (oe = ce({}, O), F = oe.default, delete oe.default), E.__veauryLast__ = E.__veauryLast__ || {}, E.__veauryLast__.slot = E.__veauryLast__.slot || {}, E.__veauryLast__.attrs = E.__veauryLast__.attrs || {}, Ce = { slot: function() {
              E.__veauryLast__.slot = ce(ce(ce({}, F ? { children: F } : { children: null }), oe), A);
            }, attrs: function() {
              E.__veauryLast__.attrs = E.$attrs;
            } }, _ && Object.keys(_).forEach(function(nt) {
              return Ce[nt]();
            }), p) {
              We.next = 64;
              break;
            }
            if (E.__reactBoundedPromise__ = new Promise(function(nt) {
              Re = nt;
            }), E.__reactBoundedPromise__.resolve = Re, Ce.slot(), Ce.attrs(), we = NM(c, v, E), ge = ze.createElement(we, Ec({}, E.$attrs, E.__veauryInjectedProps__, { children: F }, oe, A, E.$attrs.class ? { className: E.$attrs.class } : {}, k, { hashList: x }, E.$attrs.style ? { style: E.$attrs.style } : {}, { ref: function(nt) {
              E.__veauryReactInstance__ = nt, E.__reactBoundedPromise__.resolve(!0);
            } })), le = E.$refs.react, we = v.wrapInstance) {
              We.next = 47;
              break;
            }
            ve = E.$parent;
          case 35:
            if (ve) {
              if (ve.parentReactWrapperRef) return we = ve.parentReactWrapperRef, We.abrupt("break", 45);
              We.next = 39;
            } else We.next = 45;
            break;
          case 39:
            if (ve.reactWrapperRef) return we = ve.reactWrapperRef, We.abrupt("break", 45);
            We.next = 42;
            break;
          case 42:
            ve = ve.$parent, We.next = 35;
            break;
          case 45:
            We.next = 49;
            break;
          case 47:
            (we = v.wrapInstance).__veauryVueWrapperRef__ = E;
          case 49:
            if (we) return E.parentReactWrapperRef = we, E.reactPortal = function() {
              return f_.createPortal(ge, le);
            }, we.pushReactPortal(E.reactPortal), We.abrupt("return");
            We.next = 54;
            break;
          case 54:
            if (17 < e_) return Cv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED !== void 0 && (Cv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = !0), Ke = v.react.createRoot || Cv.createRoot, 18 < e_ && !Ke && console.warn("'react-dom 19' no longer supports dynamically determining whether to use 'render' or 'createRoot'. In order to be compatible with 'react-dom 17' and previous versions, you need to manually configure 'createRoot' in the veaury configuration."), E.__veauryReactApp__ = Ke(le), E.__veauryReactApp__.render(ge), We.abrupt("return");
            We.next = 61;
            break;
          case 61:
            Cv.render(ge, le), We.next = 71;
            break;
          case 64:
            return We.next = 66, E.__reactBoundedPromise__;
          case 66:
            Ve = function() {
              E.__veauryReactInstance__.setState(function(nt) {
                return Object.keys(nt).forEach(function(ot) {
                  v.isSlots && ot === "children" || delete nt[ot];
                }), ce(ce(ce(ce({}, E.__veauryCache__), E.__veauryInjectedProps__), !v.isSlots && E.__veauryLast__.slot), E.__veauryLast__.attrs);
              }), E.__veauryCache__ = null;
            }, !E.microTaskUpdate || E.__veauryCache__ || E.$nextTick(function() {
              Ve(), E.microTaskUpdate = !1;
            }), E.macroTaskUpdate && (clearTimeout(E.updateTimer), E.updateTimer = setTimeout(function() {
              clearTimeout(E.updateTimer), Ve(), E.macroTaskUpdate = !1;
            })), E.__veauryCache__ = ce(ce({}, E.__veauryCache__ || {}), ce(ce(ce(ce({}, R), E.$attrs.class ? { className: E.$attrs.class } : {}), ce({}, k)), {}, { hashList: x }, E.$attrs.style ? { style: E.$attrs.style } : {})), E.macroTaskUpdate || E.microTaskUpdate || Ve();
          case 71:
          case "end":
            return We.stop();
        }
      }, h);
    }))();
  } }, mounted: function() {
    var p = this;
    this.__VEAURY_IGNORE_STRANGE_UPDATE__ = !0, Promise.resolve().then(function() {
      p.__VEAURY_IGNORE_STRANGE_UPDATE__ = !1;
    }), clearTimeout(this.updateTimer), this.__veauryMountReactComponent__();
  }, beforeUnmount: function() {
    var p;
    clearTimeout(this.updateTimer), wM(this.$refs.react), this.reactPortal ? (p = this.parentReactWrapperRef) != null && p.removeReactPortal(this.reactPortal) : 17 < e_ ? (p = this.__veauryReactApp__) != null && p.unmount() : Cv.unmountComponentAtNode(this.$refs.react), bM();
  }, updated: function() {
    this.__VEAURY_IGNORE_STRANGE_UPDATE__ || this.__veauryMountReactComponent__(!0, { slot: !0 });
  }, inheritAttrs: !1, watch: { $attrs: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 }, __veauryInjectedProps__: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 } } };
}
var OM = /* @__PURE__ */ new Set(["onClick", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onChange", "onInput", "onInvalid", "onReset", "onSubmit", "onError", "onLoad", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onGotPointerCapture", "onLostPointerCapture", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onSelect", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onScroll", "onWheel", "onAbort", "onCanPlay", "onCanPlayThrough", "onDurationChange", "onEmptied", "onEncrypted", "onEnded", "onError", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onPause", "onPlay", "onPlaying", "onProgress", "onRateChange", "onSeeked", "onSeeking", "onStalled", "onSuspend", "onTimeUpdate", "onVolumeChange", "onWaiting", "onLoad", "onError", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionEnd", "onToggle"]);
function LM(c, v) {
  for (var p = (c = v = c?._reactInternals || c?._reactInternalFiber || v) == null ? void 0 : c.return; p; ) {
    var _ = p.stateNode;
    if (_ = _?.parentVueWrapperRef || _?.__veauryVueWrapperRef__) return _;
    p = p.return;
  }
}
function SE(c, v, p) {
  var _ = {};
  return p.forEach(function(w) {
    _[w] = !0;
  }), c[(v === "modelValue" ? "model" : v) + "Modifiers"] = _;
}
function CE(c, v, p) {
  var _ = this, w = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : "v-model";
  if (!(v instanceof Array)) throw Error("[error:veaury] Parameter type error from '".concat(w, "', a single v-model is an array, such as [val, setter, argumentKey, modifiers] or [val, setter, modifiers]"));
  if (typeof v[1] != "function") throw Error("[error:veaury] Parameter type error from '".concat(w, "', a single v-model is an array, the second element of the array must be a setter function"));
  var E = v[1], h = (typeof v[2] == "string" ? (p = v[2], v[3] instanceof Array && SE(c, p, v[3])) : v[2] instanceof Array && SE(c, p, v[2]), c["onUpdate:" + p]);
  c["onUpdate:" + p] = typeof h == "function" ? function() {
    for (var R = arguments.length, k = new Array(R), x = 0; x < R; x++) k[x] = arguments[x];
    h.apply(_, k), E.apply(_, k);
  } : E, c[p] = v[0];
}
function a_(c) {
  var v = this, p = {}, _ = ce({}, c);
  return Object.keys(c).forEach(function(w) {
    var E, h = w.match(/^onUpdate-([^-]+)/);
    if (h) delete _[w], E = p["onUpdate:".concat(h[1])], p["onUpdate:".concat(h[1])] = typeof E == "function" ? function() {
      for (var k = arguments.length, x = new Array(k), O = 0; O < k; O++) x[O] = arguments[O];
      E.apply(v, x), c[w].apply(v, x);
    } : c[w];
    else if (h = w.match(/^v-model($|:([^:]+)|-([^:]+))/)) h = h[2] || h[3] || "modelValue", CE(p, c[w], h), delete _[w];
    else if (w === "v-models") {
      if (Kr(c[w]) !== "object" || c[w] instanceof Array) throw Error("[error:veaury] The parameter 'v-models' must be an object type, such as {[argumentKey]: singleVModel}");
      var R = c[w];
      Object.keys(R).forEach(function(k) {
        CE(p, R[k], k, "v-models");
      }), delete _[w];
    }
  }), ce(ce({}, _), p);
}
var Oy = Rv(function c() {
  bv(this, c), pd(this, "pool", /* @__PURE__ */ new Set());
}, [{ key: "getRandomId", value: function(c) {
  var v = c + (Math.random() + "").substr(2);
  return this.pool.has(v) ? this.getRandomId(c) : (this.pool.add(v), v);
} }]);
function $E(_, v) {
  var p, _ = _.node;
  if (typeof _ == "function" && (_ = _()), (p = v) != null && p.current || typeof v == "function" || (p = v) != null && p.toString().match(/^function/) || (v = null), -1 < ["string", "number"].indexOf(Kr(_))) return _;
  if (_ instanceof Array) {
    if (_.length !== 1) return _;
    _ = _[0];
  }
  return ce(ce({}, _), {}, { ref: v });
}
var MM = d_($E);
function i_(c) {
  return lu(MM, { node: function() {
    return c.node;
  } });
}
i_.originReactComponent = ze.forwardRef($E);
var jM = ["component", "node"], AM = ["component", "$slots", "children", "class", "style"], UM = ["className", "classname"], Cc = "veaury-options", EE = new Oy();
function zM(c, v) {
  var p;
  return c = typeof c == "string" && v ? (v = v.$) == null || (v = v.appContext) == null || (v = v.app) == null || (p = v.component) == null ? void 0 : p.call(v, c) : c;
}
function xE(c) {
  if (c) return Object.keys(c).forEach(function(v) {
    var p = c[v];
    p != null && (typeof p == "function" ? (c[v] = p, c[v].reactFunction = p) : (c[v] = function() {
      return p;
    }, c[v].reactSlot = p), p.vueFunction) && (c[v].vueFunction = p.vueFunction);
  }), c;
}
function PM(c) {
  var v;
  return (v = c.node) == null ? void 0 : v.call(c);
}
var o_ = ze.forwardRef(function(w, v) {
  var p, h = w.component, _ = w.node, w = Qi(w, jM);
  if (h == null && _ == null) return null;
  if (_ != null) {
    if (_.$$typeof || typeof _ == "string" || typeof _ == "number") return _;
    typeof _ != "function" && (p = _, _ = function() {
      return p;
    });
  }
  var E, h = h || PM, R = VE(w[Cc] || {}, void 0, !0), k = R.useInjectPropsFromWrapper || h.__veauryInjectPropsFromWrapper__;
  return R.isSlots || typeof k == "function" && (E = k(w)), ze.createElement(IM, Ec({}, ce(ce(ce(ce({ component: h }, _ ? { node: _ } : {}), w), E), {}, pd({}, Cc, R)), { ref: v }));
}), IM = (() => {
  function c(v) {
    var p;
    return bv(this, c), (p = Ty(this, c, [v])).state = { portals: [] }, p.__veauryPortalKeyPool__ = [], p.__veauryMaxPortalCount__ = 0, p.__veauryCurrentVueComponent__ = v.component, p.__veauryCreateVueInstance__ = p.__veauryCreateVueInstance__.bind(p), p.__veauryVueComponentContainer__ = p.createVueComponentContainer(), p;
  }
  return Dy(c, ze.Component), Rv(c, [{ key: "pushReactPortal", value: function(v) {
    var p = this.state.portals, _ = this.__veauryPortalKeyPool__.shift() || this.__veauryMaxPortalCount__++;
    p.push({ Portal: v, key: _ }), this.setState({ portals: p });
  } }, { key: "removeReactPortal", value: function(v) {
    var p, _ = this.state.portals, w = _.find(function(E, h) {
      if (E.Portal === v) return p = h, !0;
    });
    this.__veauryPortalKeyPool__.push(w.key), _.splice(p, 1), this.__veauryVueRef__ && this.setState({ portals: _ });
  } }, { key: "createVueComponentContainer", value: function() {
    var v = this, p = {}, _ = this.props[Cc];
    return _.isSlots ? (Object.keys(this.props).forEach(function(w) {
      OM.has(w) && typeof v.props[w] == "function" && (p[w] = v.props[w]);
    }), _.vue.slotWrapAttrs && (p = ce(ce({}, p), _.vue.slotWrapAttrs))) : _.vue.componentWrapAttrs && (p = ce(ce({}, p), _.vue.componentWrapAttrs)), _.vue.componentWrapHOC(ze.createElement("div", Ec({}, _.vue.componentWrapAttrs, { ref: this.__veauryCreateVueInstance__, key: null })), p);
  } }, { key: "shouldComponentUpdate", value: function(v, p, _) {
    var w, E, h, R, k = this;
    return v === this.props || (w = v.component, E = (E = v["v-slots"]) === void 0 ? null : E, h = v.children, v = Qi(v, ["component", Cc, "v-slots", "children"].map(ky)), this.__veauryCurrentVueComponent__ !== w && this.updateVueComponent(w), w.__fromReactSlot) || this.__veauryVueInstance__ && (h && (E = E || {}, Kr(h) !== "object" || h instanceof Array || h.$$typeof ? E.default = h : E = h), (R = this.__veauryVueInstance__.$data.$slots) && Object.keys(R).forEach(function(x) {
      delete R[x];
    }), E && (R || (this.__veauryVueInstance__.$data.$slots = {}), Object.assign(this.__veauryVueInstance__.$data.$slots, xE(E))), Object.keys(this.__veauryVueInstance__.$data).forEach(function(x) {
      x !== "$slots" && delete k.__veauryVueInstance__.$data[x];
    }), this.__veauryVueInstance__) && Object.assign(this.__veauryVueInstance__.$data, a_(v)), !0;
  } }, { key: "componentWillUnmount", value: function() {
    this.vuePortal ? this.parentVueWrapperRef.__veauryRemoveVuePortal__(this.vuePortal) : (this.__veauryVueInstance__ && this.__veauryVueInstance__.$.appContext.app.unmount(), EE.pool.delete(this.__veauryVueTargetId__), this.vueCreated = !1);
  } }, { key: "componentDidMount", value: function() {
    this.__veauryCreateVueInstance__(this.vueContainerElement);
  } }, { key: "__veauryCreateVueInstance__", value: function(v) {
    var p, _, w, E, h, R, k, x, O = this;
    function A(F) {
      this.__veauryVueInstance__ || (this.__veauryVueInstance__ = F);
    }
    this.vueCreated || (this.vueCreated = !0, (p = this).vueContainerElement = v, (w = this.props).component, _ = w[Cc], k = w.children, x = (x = w["v-slots"]) === void 0 ? {} : x, w = Qi(w, ["component", Cc, "children", "v-slots"].map(ky)), k && (Kr(k) !== "object" || k instanceof Array || k.$$typeof ? x.default = k : x = k), (x = xE(x)) && (w.$slots = x), A = A.bind(this), E = ce({}, a_(w)), h = { data: function() {
      return _.isSlots ? { children: p.__veauryCurrentVueComponent__.originVNode } : E;
    }, created: function() {
      this.reactWrapperRef = p, A(this);
    }, methods: { reactInVueCall: function(F) {
      return 2 < arguments.length && arguments[2] && F && F[0] ? F.map(function($, ie) {
        return lu(i_, { node: $, key: ($ == null || ($ = $.data) == null ? void 0 : $.key) || ie });
      }) : lu(i_, { node: F });
    }, getScopedSlots: function(F, $) {
      var ie, oe = this, Ce = (this.getScopedSlots.__scopeSlots || (this.getScopedSlots.__scopeSlots = {}), ce({}, $));
      for (ie in Ce) ((Re) => {
        var ge, le;
        !Ce.hasOwnProperty(Re) || (ge = Ce[Re]) == null || (Ce[Re] = (le = ge, function() {
          for (var we, ve, Ke, Ve, We = arguments.length, nt = new Array(We), ot = 0; ot < We; ot++) nt[ot] = arguments[ot];
          return le.vueFunction ? le.vueFunction.apply(oe, nt) : (Ke = le.reactFunction, Ke = le.reactSlot || Ke?.apply(oe, nt), Ve = _.defaultSlotsFormatter, (we = oe.getScopedSlots.__scopeSlots[Re]) != null && (we = we.component) != null && (we = we.ctx) != null && we.__veauryReactInstance__ ? (ve = oe.getScopedSlots.__scopeSlots[Re], Promise.resolve().then(function() {
            var X;
            (X = ve) != null && (X = X.component) != null && (X = X.ctx) != null && (X = X.__veauryReactInstance__) != null && X.setState({ children: le.apply(oe, nt) });
          })) : (ve = Ve && Ke ? [Ve(Ke, oe.reactInVueCall)] : F(d_(function() {
            return le.apply(oe, nt);
          }, ce(ce({}, _), {}, { isSlots: !0, wrapInstance: p }))), oe.getScopedSlots.__scopeSlots[Re] = ve), le.reactFunction ? ve.reactFunction = le.reactFunction : le.reactSlot && (ve.reactSlot = le.reactSlot), ve);
        }), Ce[Re].reactFunction = ge);
      })(ie);
      return Ce;
    } }, mounted: function() {
      v.removeAttribute("id"), p.__veauryVueRef__ = this.$refs.use_vue_wrapper, this.$refs.use_vue_wrapper.reactWrapperRef = p;
    }, beforeUnmount: function() {
      p.__veauryVueRef__ = null, this.$refs.use_vue_wrapper.reactWrapperRef = null;
    }, render: function() {
      var F = this, ge = this.$data, Ce = (ge.component, ge.$slots), $ = ge.class, ie = ge.style, ge = Qi(ge, AM), oe = this.getScopedSlots(lu, ce({}, Ce)), Ce = ge.className, Re = ge.classname, ge = Qi(ge, UM), le = {};
      return Object.keys(oe).forEach(function(we) {
        var ve = oe[we];
        le[we] = typeof ve == "function" ? ve : function() {
          return ve;
        };
      }), lu(zM(p.__veauryCurrentVueComponent__, this), ce(ce(ce(ce({}, ge), $ || Ce || Re ? { class: $ || Ce || Re } : {}), ie ? { style: ie } : {}), {}, { ref: "use_vue_wrapper" }), ce({}, _.isSlots && this.children ? { default: typeof this.children == "function" ? this.children : function() {
        return F.children;
      } } : ce({}, le)));
    } }, v && (R = EE.getRandomId("__vue_wrapper_container_"), v.id = R, this.__veauryVueTargetId__ = R, (k = _.wrapInstance) ? (k = _.wrapInstance).reactWrapperRef = p : k = LM(this), k && document.getElementById(R) ? (this.parentVueWrapperRef = k, this.vuePortal = function(F, $) {
      return F(zT, { to: "#" + R, key: R }, [F(Object.assign(h, { router: O._router }))]);
    }, k.__veauryPushVuePortal__(this.vuePortal)) : (x = PT(h), typeof _.beforeVueAppMount == "function" && _.beforeVueAppMount(x), this.__veauryVueInstance__ = x.mount(v))));
  } }, { key: "updateVueComponent", value: function(v) {
    this.__veauryVueInstance__ && (v.__fromReactSlot ? this.__veauryVueInstance__.children = typeof v.originVNode == "function" ? v.originVNode : function() {
      return v.originVNode;
    } : (this.__veauryCurrentVueComponent__ = v, this.__veauryVueInstance__.$forceUpdate()));
  } }, { key: "render", value: function() {
    return ze.createElement(this.__veauryVueComponentContainer__, { portals: this.state.portals });
  } }]);
})();
function wy(c) {
  var v = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, p = (c || console.warn("Component must be passed in applyVueInReact!"), c.__esModule && c.default && (c = c.default), ze.forwardRef(function(_, w) {
    return ze.createElement(o_, Ec({}, _, { component: c, ref: w }, pd({}, Cc, v)));
  }));
  return p.originVueComponent = c, p;
}
new Oy();
function FM(c) {
  var v = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, p = v.globalName, _ = d_(c, v.combinedOption || {});
  return _.install = function(w) {
    var E = (1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}).globalName;
    return p && w.component(E || p, _), _;
  }, _;
}
function wE(c) {
  return c.replace(/-(\w)/g, function(v, p) {
    return p.toUpperCase();
  });
}
function Ly(c) {
  var v;
  return c ? typeof c == "string" ? (c = c.trim()).split(/\s*;\s*/).reduce(function(p, _) {
    return _ && (_ = _.split(/\s*:\s*/)).length === 2 && Object.assign(p, pd({}, wE(_[0]), _[1])), p;
  }, {}) : Kr(c) === "object" ? (v = {}, Object.keys(c).forEach(function(p) {
    v[wE(p)] = c[p];
  }), v) : {} : {};
}
function My(c) {
  return c ? c instanceof Array ? c : typeof c == "string" ? (c = c.trim()).split(/\s+/) : Kr(c) === "object" ? Object.keys(c).filter(function(v) {
    return !!c[v];
  }) : [] : [];
}
var VM = ["ref"];
function HM(c, v, p, _, w) {
  var E = c.props || {}, E = (E.ref, Qi(E, VM)), h = {}, R = (Object.keys(c.children || {}).forEach(function(O) {
    var A = c.children[O], F = FE.react.vueNamedSlotsKey.find(function($) {
      return O.indexOf($) === 0;
    });
    F || O === "default" ? (F = O.replace(new RegExp("^".concat(F)), "").replace(/^default$/, "children"), h[F] = _.call(c.__top__, A(), p, w)) : typeof A == "function" && (h[O] = function() {
      for (var $ = arguments.length, ie = new Array($), oe = 0; oe < $; oe++) ie[oe] = arguments[oe];
      return A.__reactArgs = ie, _(A.apply(this, ie), p, w);
    });
  }), {}), k = Ly(E.style), x = Array.from(new Set(My(E.class))).join(" ");
  return 0 < Object.keys(k).length && (R.style = k), x !== "" && (R.className = x), Object.assign(E, ce(ce({}, R), h)), delete E.class, typeof E.ref_for == "boolean" && delete E.ref_for, E;
}
function bE(c) {
  return c.type === FT;
}
new Oy();
function BE(c, v) {
  var p;
  return 0 < ((p = c.dirs) == null ? void 0 : p.length) ? ze.createElement($M, { vnode: c }, v) : v;
}
var $M = (() => {
  function c(v) {
    var p;
    return bv(this, c), (p = Ty(this, c, [v])).state = { prevVnode: null, savedDirectives: [], ref: null, prevProps: v }, p;
  }
  return Dy(c, ze.Component), Rv(c, [{ key: "findDirectiveName", value: function(v) {
    var p = v.dir, _ = -1;
    return [this.state.savedDirectives.find(function(w, E) {
      if (w.dir === p) return _ = E, !0;
    }), _];
  } }, { key: "doDirective", value: function() {
    var v = this, E = this.state, p = E.savedDirectives;
    if (!(_ = E.ref)) {
      for (var _ = (this._reactInternals || this._reactInternalFiber).child; _ && _.tag !== 5; ) _ = _.child;
      if (!_) return;
      _ = _.stateNode;
    }
    var w = this.props.vnode, E = w.dirs;
    E && (E.forEach(function(h) {
      var R, k, x, O, A, F, $;
      h && ($ = (R = _E(v.findDirectiveName(h), 2))[0], R = R[1], k = (A = h.dir).created, x = A.beforeMount, O = A.mounted, F = A.beforeUpdate, A = A.updated, $ ? (p[R] = ce(ce(ce({}, $), h), {}, { oldValue: $.oldValue }), $ = [_, p[R], w, v.state.prevVnode], F?.apply(null, $), A?.apply(null, $), p[R].oldValue = h.value) : (p.push(h), F = [_, h, w, null], k?.apply(null, F), x?.apply(null, F), O?.apply(null, F), h.oldValue = h.value));
    }), this.setState({ prevVnode: ce({}, w), savedDirectives: p, ref: _ }));
  } }, { key: "componentDidMount", value: function() {
    this.doDirective();
  } }, { key: "componentDidUpdate", value: function(v) {
    v.vnode !== this.props.vnode && this.doDirective();
  } }, { key: "componentWillUnmount", value: function() {
    var v = this, p = this.props.vnode, h = this.state, _ = h.savedDirectives, w = h.ref, E = h.prevVnode, h = p.dirs;
    h && (h.forEach(function(R) {
      var k, x, O, A;
      R && (k = (A = _E(v.findDirectiveName(R), 2))[0]) && (x = (O = R.dir).beforeUnmount, O = O.unmounted, _[A[1]] = ce(ce({}, k), R), A = [w, k, p, E], x?.apply(null, A), O != null) && O.apply(null, A);
    }), this.setState({ prevVnode: ce({}, p), savedDirectives: _ }));
  } }, { key: "render", value: function() {
    var v = this.props;
    return v.vnode, v.children;
  } }]);
})();
function BM(c, v) {
  var p;
  return typeof c == "function" && (p = c.toString(), c.prototype !== void 0) && c.prototype.constructor === c && (p.slice(0, 5) == "class" || 2 <= Object.getOwnPropertyNames(c.prototype).length || !/^function\s+\(|^function\s+anonymous\(/.test(p) && (!(!v || !/^function\s+[A-Z]/.test(p)) || !!/\b\(this\b|\bthis[\.\[]\b/.test(p) && (!(v && !/classCallCheck\(this/.test(p)) || /^function\sdefault_\d+\s*\(/.test(p))));
}
function qE(c, v) {
  var p, _, w, E;
  return typeof ((w = c.type) == null ? void 0 : w.originReactComponent) != "function" || BM((w = c.type) == null ? void 0 : w.originReactComponent) ? ((w = c.ref) != null && w.k ? (p = (w = c.ref) == null ? void 0 : w.k, _ = (w = c.ref) == null ? void 0 : w.r) : p = (w = c.ref) == null ? void 0 : w.r, p && typeof p == "string" && (E = p, p = function(h) {
    var R;
    (R = c.ref) != null && (R = R.i) != null && R.refs && ((R = ce({}, c.ref.i.refs))[E] = h, c.ref.i.refs = R), _ ? _.value = h : c.ref.i.setupState && E in c.ref.i.setupState && (c.ref.i.setupState[E] = h), h && (h.__syncUpdateProps = function() {
      v.__top__ && (c.__extraData = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, v.__top__.__syncUpdateProps({}));
    });
  }, p = new Proxy(p, { get: function(h, R) {
    return h[R];
  }, set: function(h, R, k) {
    var x;
    return (x = c.ref) != null && (x = x.i) != null && x.refs && E in ((x = c.ref) == null || (x = x.i) == null ? void 0 : x.refs) && ((x = ce({}, c.ref.i.refs))[R] = k, c.ref.i.refs = x), k;
  } })), p) : null;
}
function l_(c, v) {
  return !v || v instanceof Array && v.length === 0 || (typeof v == "string" && (v = [v]), (c = ce({}, c)).props = ce({}, c.props), v.forEach(function(p) {
    c.props[p] = "";
  })), c;
}
var qM = ["style", "class"];
function RE(c, v, p, _, w, E, h) {
  var R, k, x;
  return v === "all" || v instanceof Array || (v = v ? [v] : []), c.type === DE ? w.call(h, c.children, p, E) : typeof c.type == "string" && (v === "all" || -1 < v.indexOf(c.type)) ? (v = qE(c), x = (k = c.props || {}).style, R = k.class, k = ce(ce({}, Qi(k, qM)), {}, { style: Ly(x), className: Array.from(new Set(My(R))).join(" ") }, v ? { ref: v } : {}), (x = c.children || k.children) && ((x = -1 < ["string", "number"].indexOf(Kr(x)) ? [x] : Ny(x)).__top__ = h), BE(c, l_(Xa.createElement(c.type, k, w.call(h, x, p, E)), c.scopeId))) : p([c], null, _);
}
function WM() {
  var c = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, v = 1 < arguments.length ? arguments[1] : void 0, p = 2 < arguments.length ? arguments[2] : void 0;
  return p.__syncUpdateForPureReactInVue && Object.keys(p.__syncUpdateForPureReactInVue).map(function(_) {
    var w;
    c[_] && typeof c[_] == "function" && v.__top__ && (w = c[_], c[_] = function() {
      for (var E = arguments.length, h = new Array(E), R = 0; R < E; R++) h[R] = arguments[R];
      v.__extraData = p.__syncUpdateForPureReactInVue[_].apply(this, h), v.__top__.__veaurySyncUpdateProps__({}), v.__top__.macroTaskUpdate = !0, w.apply(this, h), v.__top__ && Promise.resolve().then(function() {
        v.__extraData = null, v.__top__.__veauryMountReactComponent__(!0);
      });
    });
  }), c;
}
function kE(c, v, p) {
  return !((c = c instanceof Array && c.length === 1 ? c[0] : c) instanceof Array) && c.key == null && 1 < v.length && ((c = ce({}, c)).key = "_key_".concat(p)), c;
}
function WE(_) {
  var v = _.reactComponents, p = _.domTags, _ = _.division, w = _ === void 0 || _;
  return function E(h, R, k) {
    var x;
    return h && h.forEach ? (h.__top__ || (h.__top__ = this), x = [], h.forEach(function(O, A) {
      if (O && O.type !== IT) {
        if ((ie = O.type) == null || !ie.originReactComponent) return O.$$typeof || typeof O == "string" || typeof O == "number" ? void x.push(O) : bE(O) ? void (O.children.trim() !== "" && x.push(O.children.trim())) : void (O.type && (l_(ie = kE(RE(O, p, R, w, E, k, h.__top__), h, A), O.scopeId), x.push(ie)));
        var F, $, ie = O.type.originReactComponent;
        l_(F = kE(F = (v = v === "all" || v instanceof Array ? v : [v]) === "all" || -1 < v.indexOf(ie) ? (O.__top__ = h.__top__, F = HM(O, "_key_".concat(A), R, E, k), $ = qE(O, h), O.children && (O.children.__top__ = h.__top__), BE(O, Xa.createElement(ie, ce(ce(ce({}, WM(F, O, ie)), O.__extraData || {}), $ ? { ref: $ } : {})))) : bE(O) ? O.text : RE(O, p, R, w, E, k), h, A), O.scopeId), x.push(F);
      }
    }), x.length === 1 ? x[0] : x) : h;
  };
}
var t_ = WE({ reactComponents: "all", domTags: "all" });
function YM(c, v) {
  return FM(c, { combinedOption: ce({ pureTransformer: !0, defaultSlotsFormatter: t_, defaultPropsFormatter: function(p, _, w) {
    var E = {};
    return Object.keys(p).forEach(function(h) {
      var R = p[h];
      R && (R.vueFunction ? (E[h] = function() {
        for (var k = arguments.length, x = new Array(k), O = 0; O < k; O++) x[O] = arguments[O];
        return t_(R.vueFunction.apply(this, x), _, w);
      }, Object.defineProperty(E[h], "length", { get: function() {
        return R.vueFunction.length;
      } })) : R.vueSlot && (E[h] = t_(R.vueSlot, _, w)));
    }), Object.assign(p, E);
  } }, v) });
}
WE({ reactComponents: "all", domTags: "all" });
var GM = ["ref", "children", "v-slots"];
function QM(k, v, p, _, w) {
  var k = k.props || {}, x = (k.ref, k.children), h = k["v-slots"], E = h === void 0 ? {} : h, h = Qi(k, GM), R = (x && (Kr(x) !== "object" || x instanceof Array || x.$$typeof ? E.default = x : E = x), null), k = (Object.keys(E || {}).forEach(function(A) {
    var F = E[A];
    (R = R || {})[A] = function() {
      if (typeof F == "function") {
        for (var $ = arguments.length, ie = new Array($), oe = 0; oe < $; oe++) ie[oe] = arguments[oe];
        F = F.apply(this, ie);
      }
      return _(F, p, w);
    };
  }), {}), x = Ly(h.style), O = Array.from(new Set(My(h.className))).join(" ");
  return 0 < Object.keys(x).length && (k.style = x), O !== "" && (k.class = O), Object.assign(h, ce({}, k)), delete h.className, { props: h = a_(h), slots: R };
}
function YE(c) {
  var v = c.ref;
  if (v) return Kr(v) === "object" ? function(p) {
    c.ref.current = p;
  } : typeof v == "function" ? v : void 0;
}
var KM = ["style", "class", "children"];
function TE(c, v, p, _, w, E) {
  var h, R, k, x;
  return v === "all" || v instanceof Array || (v = v ? [v] : []), c.type === ze.Fragment ? w((h = c.props) == null ? void 0 : h.children, p) : typeof c.type == "string" && (v === "all" || -1 < v.indexOf(c.type)) ? (h = YE(c), x = (v = c.props || {}).style, k = v.class, R = v.children, v = Qi(v, KM), k = Array.from(new Set(My(k))).join(" "), x = Ly(x), v = ce(ce(ce(ce({}, v), Object.keys(x).length === 0 ? {} : { style: x }), k ? { className: k } : {}), h ? { ref: h } : {}), Object.keys(v).length === 0 && (v = null), (x = R) && ((x = -1 < ["string", "number"].indexOf(Kr(x)) ? [x] : x instanceof Array ? Ny(x) : ce({}, x)).__top__ = E), lu(c.type, v, w(x, p))) : p([c], null, _);
}
function GE(_) {
  var v = _.vueComponents, p = _.domTags, _ = _.division, w = _ === void 0 || _;
  return function E(h, R) {
    if (h == null) return h;
    h instanceof Array || (h = [h]);
    var k = [];
    return h.forEach(function(x, O) {
      if (((A = x.type) == null || !A.originVueComponent) && x.type !== o_) return x.__v_isVNode || typeof x == "string" || typeof x == "number" ? void k.push(x) : void (x.type && (A = TE(x, p, R, w, E, h.__top__), k.push(A)));
      var A = x.type.originVueComponent;
      if (x.type === o_) {
        if (!x.props.component) return void k.push(x.props.node);
        A = x.props.component, x = ce({}, x);
        var F = ce({}, x.props);
        delete F.component, x.props = F;
      }
      A = (v = v === "all" || v instanceof Array ? v : [v]) === "all" || -1 < v.indexOf(A) ? ((x = ce({}, x)).__top__ = h.__top__, O = (F = QM(x, "_key_".concat(O), R, E)).props, F = F.slots, YE(x), x.children && (x.children.__top__ = h.__top__), lu(A, ce({}, O), F)) : TE(x, p, R, w, E), k.push(A);
    }), (k = k.flat(1 / 0)).length === 1 ? k[0] : k;
  };
}
GE({ vueComponents: "all", domTags: "all" });
GE({ reactComponents: "all", domTags: "all" });
new Oy();
const XM = /* @__PURE__ */ VT({
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
    const v = YM(lM);
    return (p, _) => ($T(), HT(BT(v), {
      token: c.token,
      dataSource: c.dataSource,
      baseUrl: c.baseUrl,
      user_id: c.user_id,
      copilot_llm_endpoint: c.copilot_llm_endpoint,
      user_name: c.user_name,
      style: { height: "100%", width: "100%" }
    }, null, 8, ["token", "dataSource", "baseUrl", "user_id", "copilot_llm_endpoint", "user_name"]));
  }
}), n8 = {
  install(c) {
    c.component("CopilotApp", XM);
  }
};
export {
  XM as CopilotApp,
  n8 as default
};
