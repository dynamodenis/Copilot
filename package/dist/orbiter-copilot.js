import { Fragment as FE, h as fu, reactive as YT, getCurrentInstance as GT, Teleport as QT, createApp as KT, Comment as XT, Text as JT, defineComponent as ZT, computed as e3, createBlock as t3, openBlock as n3, unref as r3 } from "vue";
function VE(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var Cy = { exports: {} }, Ev = {}, Ey = { exports: {} }, At = {};
var XC;
function a3() {
  if (XC) return At;
  XC = 1;
  var c = /* @__PURE__ */ Symbol.for("react.element"), p = /* @__PURE__ */ Symbol.for("react.portal"), f = /* @__PURE__ */ Symbol.for("react.fragment"), g = /* @__PURE__ */ Symbol.for("react.strict_mode"), w = /* @__PURE__ */ Symbol.for("react.profiler"), C = /* @__PURE__ */ Symbol.for("react.provider"), h = /* @__PURE__ */ Symbol.for("react.context"), b = /* @__PURE__ */ Symbol.for("react.forward_ref"), x = /* @__PURE__ */ Symbol.for("react.suspense"), k = /* @__PURE__ */ Symbol.for("react.memo"), M = /* @__PURE__ */ Symbol.for("react.lazy"), U = Symbol.iterator;
  function V(F) {
    return F === null || typeof F != "object" ? null : (F = U && F[U] || F["@@iterator"], typeof F == "function" ? F : null);
  }
  var $ = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Z = Object.assign, J = {};
  function Se(F, te, $e) {
    this.props = F, this.context = te, this.refs = J, this.updater = $e || $;
  }
  Se.prototype.isReactComponent = {}, Se.prototype.setState = function(F, te) {
    if (typeof F != "object" && typeof F != "function" && F != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, F, te, "setState");
  }, Se.prototype.forceUpdate = function(F) {
    this.updater.enqueueForceUpdate(this, F, "forceUpdate");
  };
  function Ce() {
  }
  Ce.prototype = Se.prototype;
  function xe(F, te, $e) {
    this.props = F, this.context = te, this.refs = J, this.updater = $e || $;
  }
  var Ee = xe.prototype = new Ce();
  Ee.constructor = xe, Z(Ee, Se.prototype), Ee.isPureReactComponent = !0;
  var De = Array.isArray, ae = Object.prototype.hasOwnProperty, Ie = { current: null }, Te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ve(F, te, $e) {
    var He, mt = {}, at = null, Ue = null;
    if (te != null) for (He in te.ref !== void 0 && (Ue = te.ref), te.key !== void 0 && (at = "" + te.key), te) ae.call(te, He) && !Te.hasOwnProperty(He) && (mt[He] = te[He]);
    var lt = arguments.length - 2;
    if (lt === 1) mt.children = $e;
    else if (1 < lt) {
      for (var pt = Array(lt), Qt = 0; Qt < lt; Qt++) pt[Qt] = arguments[Qt + 2];
      mt.children = pt;
    }
    if (F && F.defaultProps) for (He in lt = F.defaultProps, lt) mt[He] === void 0 && (mt[He] = lt[He]);
    return { $$typeof: c, type: F, key: at, ref: Ue, props: mt, _owner: Ie.current };
  }
  function Ye(F, te) {
    return { $$typeof: c, type: F.type, key: te, ref: F.ref, props: F.props, _owner: F._owner };
  }
  function Ze(F) {
    return typeof F == "object" && F !== null && F.$$typeof === c;
  }
  function re(F) {
    var te = { "=": "=0", ":": "=2" };
    return "$" + F.replace(/[=:]/g, function($e) {
      return te[$e];
    });
  }
  var L = /\/+/g;
  function Y(F, te) {
    return typeof F == "object" && F !== null && F.key != null ? re("" + F.key) : te.toString(36);
  }
  function pe(F, te, $e, He, mt) {
    var at = typeof F;
    (at === "undefined" || at === "boolean") && (F = null);
    var Ue = !1;
    if (F === null) Ue = !0;
    else switch (at) {
      case "string":
      case "number":
        Ue = !0;
        break;
      case "object":
        switch (F.$$typeof) {
          case c:
          case p:
            Ue = !0;
        }
    }
    if (Ue) return Ue = F, mt = mt(Ue), F = He === "" ? "." + Y(Ue, 0) : He, De(mt) ? ($e = "", F != null && ($e = F.replace(L, "$&/") + "/"), pe(mt, te, $e, "", function(Qt) {
      return Qt;
    })) : mt != null && (Ze(mt) && (mt = Ye(mt, $e + (!mt.key || Ue && Ue.key === mt.key ? "" : ("" + mt.key).replace(L, "$&/") + "/") + F)), te.push(mt)), 1;
    if (Ue = 0, He = He === "" ? "." : He + ":", De(F)) for (var lt = 0; lt < F.length; lt++) {
      at = F[lt];
      var pt = He + Y(at, lt);
      Ue += pe(at, te, $e, pt, mt);
    }
    else if (pt = V(F), typeof pt == "function") for (F = pt.call(F), lt = 0; !(at = F.next()).done; ) at = at.value, pt = He + Y(at, lt++), Ue += pe(at, te, $e, pt, mt);
    else if (at === "object") throw te = String(F), Error("Objects are not valid as a React child (found: " + (te === "[object Object]" ? "object with keys {" + Object.keys(F).join(", ") + "}" : te) + "). If you meant to render a collection of children, use an array instead.");
    return Ue;
  }
  function ke(F, te, $e) {
    if (F == null) return F;
    var He = [], mt = 0;
    return pe(F, He, "", "", function(at) {
      return te.call($e, at, mt++);
    }), He;
  }
  function ue(F) {
    if (F._status === -1) {
      var te = F._result;
      te = te(), te.then(function($e) {
        (F._status === 0 || F._status === -1) && (F._status = 1, F._result = $e);
      }, function($e) {
        (F._status === 0 || F._status === -1) && (F._status = 2, F._result = $e);
      }), F._status === -1 && (F._status = 0, F._result = te);
    }
    if (F._status === 1) return F._result.default;
    throw F._result;
  }
  var ye = { current: null }, ee = { transition: null }, Me = { ReactCurrentDispatcher: ye, ReactCurrentBatchConfig: ee, ReactCurrentOwner: Ie };
  function me() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return At.Children = { map: ke, forEach: function(F, te, $e) {
    ke(F, function() {
      te.apply(this, arguments);
    }, $e);
  }, count: function(F) {
    var te = 0;
    return ke(F, function() {
      te++;
    }), te;
  }, toArray: function(F) {
    return ke(F, function(te) {
      return te;
    }) || [];
  }, only: function(F) {
    if (!Ze(F)) throw Error("React.Children.only expected to receive a single React element child.");
    return F;
  } }, At.Component = Se, At.Fragment = f, At.Profiler = w, At.PureComponent = xe, At.StrictMode = g, At.Suspense = x, At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Me, At.act = me, At.cloneElement = function(F, te, $e) {
    if (F == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + F + ".");
    var He = Z({}, F.props), mt = F.key, at = F.ref, Ue = F._owner;
    if (te != null) {
      if (te.ref !== void 0 && (at = te.ref, Ue = Ie.current), te.key !== void 0 && (mt = "" + te.key), F.type && F.type.defaultProps) var lt = F.type.defaultProps;
      for (pt in te) ae.call(te, pt) && !Te.hasOwnProperty(pt) && (He[pt] = te[pt] === void 0 && lt !== void 0 ? lt[pt] : te[pt]);
    }
    var pt = arguments.length - 2;
    if (pt === 1) He.children = $e;
    else if (1 < pt) {
      lt = Array(pt);
      for (var Qt = 0; Qt < pt; Qt++) lt[Qt] = arguments[Qt + 2];
      He.children = lt;
    }
    return { $$typeof: c, type: F.type, key: mt, ref: at, props: He, _owner: Ue };
  }, At.createContext = function(F) {
    return F = { $$typeof: h, _currentValue: F, _currentValue2: F, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, F.Provider = { $$typeof: C, _context: F }, F.Consumer = F;
  }, At.createElement = Ve, At.createFactory = function(F) {
    var te = Ve.bind(null, F);
    return te.type = F, te;
  }, At.createRef = function() {
    return { current: null };
  }, At.forwardRef = function(F) {
    return { $$typeof: b, render: F };
  }, At.isValidElement = Ze, At.lazy = function(F) {
    return { $$typeof: M, _payload: { _status: -1, _result: F }, _init: ue };
  }, At.memo = function(F, te) {
    return { $$typeof: k, type: F, compare: te === void 0 ? null : te };
  }, At.startTransition = function(F) {
    var te = ee.transition;
    ee.transition = {};
    try {
      F();
    } finally {
      ee.transition = te;
    }
  }, At.unstable_act = me, At.useCallback = function(F, te) {
    return ye.current.useCallback(F, te);
  }, At.useContext = function(F) {
    return ye.current.useContext(F);
  }, At.useDebugValue = function() {
  }, At.useDeferredValue = function(F) {
    return ye.current.useDeferredValue(F);
  }, At.useEffect = function(F, te) {
    return ye.current.useEffect(F, te);
  }, At.useId = function() {
    return ye.current.useId();
  }, At.useImperativeHandle = function(F, te, $e) {
    return ye.current.useImperativeHandle(F, te, $e);
  }, At.useInsertionEffect = function(F, te) {
    return ye.current.useInsertionEffect(F, te);
  }, At.useLayoutEffect = function(F, te) {
    return ye.current.useLayoutEffect(F, te);
  }, At.useMemo = function(F, te) {
    return ye.current.useMemo(F, te);
  }, At.useReducer = function(F, te, $e) {
    return ye.current.useReducer(F, te, $e);
  }, At.useRef = function(F) {
    return ye.current.useRef(F);
  }, At.useState = function(F) {
    return ye.current.useState(F);
  }, At.useSyncExternalStore = function(F, te, $e) {
    return ye.current.useSyncExternalStore(F, te, $e);
  }, At.useTransition = function() {
    return ye.current.useTransition();
  }, At.version = "18.3.1", At;
}
var wv = { exports: {} };
wv.exports;
var JC;
function o3() {
  return JC || (JC = 1, (function(c, p) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var f = "18.3.1", g = /* @__PURE__ */ Symbol.for("react.element"), w = /* @__PURE__ */ Symbol.for("react.portal"), C = /* @__PURE__ */ Symbol.for("react.fragment"), h = /* @__PURE__ */ Symbol.for("react.strict_mode"), b = /* @__PURE__ */ Symbol.for("react.profiler"), x = /* @__PURE__ */ Symbol.for("react.provider"), k = /* @__PURE__ */ Symbol.for("react.context"), M = /* @__PURE__ */ Symbol.for("react.forward_ref"), U = /* @__PURE__ */ Symbol.for("react.suspense"), V = /* @__PURE__ */ Symbol.for("react.suspense_list"), $ = /* @__PURE__ */ Symbol.for("react.memo"), Z = /* @__PURE__ */ Symbol.for("react.lazy"), J = /* @__PURE__ */ Symbol.for("react.offscreen"), Se = Symbol.iterator, Ce = "@@iterator";
      function xe(S) {
        if (S === null || typeof S != "object")
          return null;
        var D = Se && S[Se] || S[Ce];
        return typeof D == "function" ? D : null;
      }
      var Ee = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, De = {
        transition: null
      }, ae = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Ie = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Te = {}, Ve = null;
      function Ye(S) {
        Ve = S;
      }
      Te.setExtraStackFrame = function(S) {
        Ve = S;
      }, Te.getCurrentStack = null, Te.getStackAddendum = function() {
        var S = "";
        Ve && (S += Ve);
        var D = Te.getCurrentStack;
        return D && (S += D() || ""), S;
      };
      var Ze = !1, re = !1, L = !1, Y = !1, pe = !1, ke = {
        ReactCurrentDispatcher: Ee,
        ReactCurrentBatchConfig: De,
        ReactCurrentOwner: Ie
      };
      ke.ReactDebugCurrentFrame = Te, ke.ReactCurrentActQueue = ae;
      function ue(S) {
        {
          for (var D = arguments.length, Q = new Array(D > 1 ? D - 1 : 0), ne = 1; ne < D; ne++)
            Q[ne - 1] = arguments[ne];
          ee("warn", S, Q);
        }
      }
      function ye(S) {
        {
          for (var D = arguments.length, Q = new Array(D > 1 ? D - 1 : 0), ne = 1; ne < D; ne++)
            Q[ne - 1] = arguments[ne];
          ee("error", S, Q);
        }
      }
      function ee(S, D, Q) {
        {
          var ne = ke.ReactDebugCurrentFrame, be = ne.getStackAddendum();
          be !== "" && (D += "%s", Q = Q.concat([be]));
          var ut = Q.map(function(je) {
            return String(je);
          });
          ut.unshift("Warning: " + D), Function.prototype.apply.call(console[S], console, ut);
        }
      }
      var Me = {};
      function me(S, D) {
        {
          var Q = S.constructor, ne = Q && (Q.displayName || Q.name) || "ReactClass", be = ne + "." + D;
          if (Me[be])
            return;
          ye("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", D, ne), Me[be] = !0;
        }
      }
      var F = {
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
        enqueueForceUpdate: function(S, D, Q) {
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
        enqueueReplaceState: function(S, D, Q, ne) {
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
        enqueueSetState: function(S, D, Q, ne) {
          me(S, "setState");
        }
      }, te = Object.assign, $e = {};
      Object.freeze($e);
      function He(S, D, Q) {
        this.props = S, this.context = D, this.refs = $e, this.updater = Q || F;
      }
      He.prototype.isReactComponent = {}, He.prototype.setState = function(S, D) {
        if (typeof S != "object" && typeof S != "function" && S != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, D, "setState");
      }, He.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate");
      };
      {
        var mt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, at = function(S, D) {
          Object.defineProperty(He.prototype, S, {
            get: function() {
              ue("%s(...) is deprecated in plain JavaScript React classes. %s", D[0], D[1]);
            }
          });
        };
        for (var Ue in mt)
          mt.hasOwnProperty(Ue) && at(Ue, mt[Ue]);
      }
      function lt() {
      }
      lt.prototype = He.prototype;
      function pt(S, D, Q) {
        this.props = S, this.context = D, this.refs = $e, this.updater = Q || F;
      }
      var Qt = pt.prototype = new lt();
      Qt.constructor = pt, te(Qt, He.prototype), Qt.isPureReactComponent = !0;
      function vn() {
        var S = {
          current: null
        };
        return Object.seal(S), S;
      }
      var dr = Array.isArray;
      function En(S) {
        return dr(S);
      }
      function Xn(S) {
        {
          var D = typeof Symbol == "function" && Symbol.toStringTag, Q = D && S[Symbol.toStringTag] || S.constructor.name || "Object";
          return Q;
        }
      }
      function On(S) {
        try {
          return Dn(S), !1;
        } catch {
          return !0;
        }
      }
      function Dn(S) {
        return "" + S;
      }
      function Ar(S) {
        if (On(S))
          return ye("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xn(S)), Dn(S);
      }
      function Co(S, D, Q) {
        var ne = S.displayName;
        if (ne)
          return ne;
        var be = D.displayName || D.name || "";
        return be !== "" ? Q + "(" + be + ")" : Q;
      }
      function ga(S) {
        return S.displayName || "Context";
      }
      function or(S) {
        if (S == null)
          return null;
        if (typeof S.tag == "number" && ye("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
          return S.displayName || S.name || null;
        if (typeof S == "string")
          return S;
        switch (S) {
          case C:
            return "Fragment";
          case w:
            return "Portal";
          case b:
            return "Profiler";
          case h:
            return "StrictMode";
          case U:
            return "Suspense";
          case V:
            return "SuspenseList";
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case k:
              var D = S;
              return ga(D) + ".Consumer";
            case x:
              var Q = S;
              return ga(Q._context) + ".Provider";
            case M:
              return Co(S, S.render, "ForwardRef");
            case $:
              var ne = S.displayName || null;
              return ne !== null ? ne : or(S.type) || "Memo";
            case Z: {
              var be = S, ut = be._payload, je = be._init;
              try {
                return or(je(ut));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Ln = Object.prototype.hasOwnProperty, Jn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Tr, to, Vn;
      Vn = {};
      function Nr(S) {
        if (Ln.call(S, "ref")) {
          var D = Object.getOwnPropertyDescriptor(S, "ref").get;
          if (D && D.isReactWarning)
            return !1;
        }
        return S.ref !== void 0;
      }
      function _a(S) {
        if (Ln.call(S, "key")) {
          var D = Object.getOwnPropertyDescriptor(S, "key").get;
          if (D && D.isReactWarning)
            return !1;
        }
        return S.key !== void 0;
      }
      function no(S, D) {
        var Q = function() {
          Tr || (Tr = !0, ye("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        Q.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: Q,
          configurable: !0
        });
      }
      function Eo(S, D) {
        var Q = function() {
          to || (to = !0, ye("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        Q.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: Q,
          configurable: !0
        });
      }
      function Ne(S) {
        if (typeof S.ref == "string" && Ie.current && S.__self && Ie.current.stateNode !== S.__self) {
          var D = or(Ie.current.type);
          Vn[D] || (ye('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D, S.ref), Vn[D] = !0);
        }
      }
      var tt = function(S, D, Q, ne, be, ut, je) {
        var ft = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: g,
          // Built-in properties that belong on the element
          type: S,
          key: D,
          ref: Q,
          props: je,
          // Record the component responsible for creating this element.
          _owner: ut
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
          value: ne
        }), Object.defineProperty(ft, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: be
        }), Object.freeze && (Object.freeze(ft.props), Object.freeze(ft)), ft;
      };
      function Rt(S, D, Q) {
        var ne, be = {}, ut = null, je = null, ft = null, Ot = null;
        if (D != null) {
          Nr(D) && (je = D.ref, Ne(D)), _a(D) && (Ar(D.key), ut = "" + D.key), ft = D.__self === void 0 ? null : D.__self, Ot = D.__source === void 0 ? null : D.__source;
          for (ne in D)
            Ln.call(D, ne) && !Jn.hasOwnProperty(ne) && (be[ne] = D[ne]);
        }
        var Vt = arguments.length - 2;
        if (Vt === 1)
          be.children = Q;
        else if (Vt > 1) {
          for (var dn = Array(Vt), nn = 0; nn < Vt; nn++)
            dn[nn] = arguments[nn + 2];
          Object.freeze && Object.freeze(dn), be.children = dn;
        }
        if (S && S.defaultProps) {
          var kt = S.defaultProps;
          for (ne in kt)
            be[ne] === void 0 && (be[ne] = kt[ne]);
        }
        if (ut || je) {
          var rn = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          ut && no(be, rn), je && Eo(be, rn);
        }
        return tt(S, ut, je, ft, Ot, Ie.current, be);
      }
      function Kt(S, D) {
        var Q = tt(S.type, D, S.ref, S._self, S._source, S._owner, S.props);
        return Q;
      }
      function sn(S, D, Q) {
        if (S == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
        var ne, be = te({}, S.props), ut = S.key, je = S.ref, ft = S._self, Ot = S._source, Vt = S._owner;
        if (D != null) {
          Nr(D) && (je = D.ref, Vt = Ie.current), _a(D) && (Ar(D.key), ut = "" + D.key);
          var dn;
          S.type && S.type.defaultProps && (dn = S.type.defaultProps);
          for (ne in D)
            Ln.call(D, ne) && !Jn.hasOwnProperty(ne) && (D[ne] === void 0 && dn !== void 0 ? be[ne] = dn[ne] : be[ne] = D[ne]);
        }
        var nn = arguments.length - 2;
        if (nn === 1)
          be.children = Q;
        else if (nn > 1) {
          for (var kt = Array(nn), rn = 0; rn < nn; rn++)
            kt[rn] = arguments[rn + 2];
          be.children = kt;
        }
        return tt(S.type, ut, je, ft, Ot, Vt, be);
      }
      function xn(S) {
        return typeof S == "object" && S !== null && S.$$typeof === g;
      }
      var hn = ".", ir = ":";
      function cn(S) {
        var D = /[=:]/g, Q = {
          "=": "=0",
          ":": "=2"
        }, ne = S.replace(D, function(be) {
          return Q[be];
        });
        return "$" + ne;
      }
      var Zt = !1, en = /\/+/g;
      function Sa(S) {
        return S.replace(en, "$&/");
      }
      function Mr(S, D) {
        return typeof S == "object" && S !== null && S.key != null ? (Ar(S.key), cn("" + S.key)) : D.toString(36);
      }
      function ja(S, D, Q, ne, be) {
        var ut = typeof S;
        (ut === "undefined" || ut === "boolean") && (S = null);
        var je = !1;
        if (S === null)
          je = !0;
        else
          switch (ut) {
            case "string":
            case "number":
              je = !0;
              break;
            case "object":
              switch (S.$$typeof) {
                case g:
                case w:
                  je = !0;
              }
          }
        if (je) {
          var ft = S, Ot = be(ft), Vt = ne === "" ? hn + Mr(ft, 0) : ne;
          if (En(Ot)) {
            var dn = "";
            Vt != null && (dn = Sa(Vt) + "/"), ja(Ot, D, dn, "", function(Sd) {
              return Sd;
            });
          } else Ot != null && (xn(Ot) && (Ot.key && (!ft || ft.key !== Ot.key) && Ar(Ot.key), Ot = Kt(
            Ot,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            Q + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Ot.key && (!ft || ft.key !== Ot.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Sa("" + Ot.key) + "/"
            ) : "") + Vt
          )), D.push(Ot));
          return 1;
        }
        var nn, kt, rn = 0, bn = ne === "" ? hn : ne + ir;
        if (En(S))
          for (var zi = 0; zi < S.length; zi++)
            nn = S[zi], kt = bn + Mr(nn, zi), rn += ja(nn, D, Q, kt, be);
        else {
          var hs = xe(S);
          if (typeof hs == "function") {
            var ri = S;
            hs === ri.entries && (Zt || ue("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Zt = !0);
            for (var ms = hs.call(ri), bl, _d = 0; !(bl = ms.next()).done; )
              nn = bl.value, kt = bn + Mr(nn, _d++), rn += ja(nn, D, Q, kt, be);
          } else if (ut === "object") {
            var Mc = String(S);
            throw new Error("Objects are not valid as a React child (found: " + (Mc === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : Mc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return rn;
      }
      function ei(S, D, Q) {
        if (S == null)
          return S;
        var ne = [], be = 0;
        return ja(S, ne, "", "", function(ut) {
          return D.call(Q, ut, be++);
        }), ne;
      }
      function hl(S) {
        var D = 0;
        return ei(S, function() {
          D++;
        }), D;
      }
      function ml(S, D, Q) {
        ei(S, function() {
          D.apply(this, arguments);
        }, Q);
      }
      function Ti(S) {
        return ei(S, function(D) {
          return D;
        }) || [];
      }
      function Ni(S) {
        if (!xn(S))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return S;
      }
      function yl(S) {
        var D = {
          $$typeof: k,
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
        D.Provider = {
          $$typeof: x,
          _context: D
        };
        var Q = !1, ne = !1, be = !1;
        {
          var ut = {
            $$typeof: k,
            _context: D
          };
          Object.defineProperties(ut, {
            Provider: {
              get: function() {
                return ne || (ne = !0, ye("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), D.Provider;
              },
              set: function(je) {
                D.Provider = je;
              }
            },
            _currentValue: {
              get: function() {
                return D._currentValue;
              },
              set: function(je) {
                D._currentValue = je;
              }
            },
            _currentValue2: {
              get: function() {
                return D._currentValue2;
              },
              set: function(je) {
                D._currentValue2 = je;
              }
            },
            _threadCount: {
              get: function() {
                return D._threadCount;
              },
              set: function(je) {
                D._threadCount = je;
              }
            },
            Consumer: {
              get: function() {
                return Q || (Q = !0, ye("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), D.Consumer;
              }
            },
            displayName: {
              get: function() {
                return D.displayName;
              },
              set: function(je) {
                be || (ue("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", je), be = !0);
              }
            }
          }), D.Consumer = ut;
        }
        return D._currentRenderer = null, D._currentRenderer2 = null, D;
      }
      var Ur = -1, zr = 0, pr = 1, xo = 2;
      function ro(S) {
        if (S._status === Ur) {
          var D = S._result, Q = D();
          if (Q.then(function(ut) {
            if (S._status === zr || S._status === Ur) {
              var je = S;
              je._status = pr, je._result = ut;
            }
          }, function(ut) {
            if (S._status === zr || S._status === Ur) {
              var je = S;
              je._status = xo, je._result = ut;
            }
          }), S._status === Ur) {
            var ne = S;
            ne._status = zr, ne._result = Q;
          }
        }
        if (S._status === pr) {
          var be = S._result;
          return be === void 0 && ye(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, be), "default" in be || ye(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, be), be.default;
        } else
          throw S._result;
      }
      function bo(S) {
        var D = {
          // We use these fields to store the result.
          _status: Ur,
          _result: S
        }, Q = {
          $$typeof: Z,
          _payload: D,
          _init: ro
        };
        {
          var ne, be;
          Object.defineProperties(Q, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return ne;
              },
              set: function(ut) {
                ye("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ne = ut, Object.defineProperty(Q, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return be;
              },
              set: function(ut) {
                ye("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), be = ut, Object.defineProperty(Q, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return Q;
      }
      function wo(S) {
        S != null && S.$$typeof === $ ? ye("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof S != "function" ? ye("forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S) : S.length !== 0 && S.length !== 2 && ye("forwardRef render functions accept exactly two parameters: props and ref. %s", S.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), S != null && (S.defaultProps != null || S.propTypes != null) && ye("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var D = {
          $$typeof: M,
          render: S
        };
        {
          var Q;
          Object.defineProperty(D, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return Q;
            },
            set: function(ne) {
              Q = ne, !S.name && !S.displayName && (S.displayName = ne);
            }
          });
        }
        return D;
      }
      var j;
      j = /* @__PURE__ */ Symbol.for("react.module.reference");
      function se(S) {
        return !!(typeof S == "string" || typeof S == "function" || S === C || S === b || pe || S === h || S === U || S === V || Y || S === J || Ze || re || L || typeof S == "object" && S !== null && (S.$$typeof === Z || S.$$typeof === $ || S.$$typeof === x || S.$$typeof === k || S.$$typeof === M || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        S.$$typeof === j || S.getModuleId !== void 0));
      }
      function Ae(S, D) {
        se(S) || ye("memo: The first argument must be a component. Instead received: %s", S === null ? "null" : typeof S);
        var Q = {
          $$typeof: $,
          type: S,
          compare: D === void 0 ? null : D
        };
        {
          var ne;
          Object.defineProperty(Q, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return ne;
            },
            set: function(be) {
              ne = be, !S.name && !S.displayName && (S.displayName = be);
            }
          });
        }
        return Q;
      }
      function Qe() {
        var S = Ee.current;
        return S === null && ye(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), S;
      }
      function Et(S) {
        var D = Qe();
        if (S._context !== void 0) {
          var Q = S._context;
          Q.Consumer === S ? ye("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : Q.Provider === S && ye("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return D.useContext(S);
      }
      function _t(S) {
        var D = Qe();
        return D.useState(S);
      }
      function Mt(S, D, Q) {
        var ne = Qe();
        return ne.useReducer(S, D, Q);
      }
      function Tt(S) {
        var D = Qe();
        return D.useRef(S);
      }
      function jn(S, D) {
        var Q = Qe();
        return Q.useEffect(S, D);
      }
      function fn(S, D) {
        var Q = Qe();
        return Q.useInsertionEffect(S, D);
      }
      function mn(S, D) {
        var Q = Qe();
        return Q.useLayoutEffect(S, D);
      }
      function vr(S, D) {
        var Q = Qe();
        return Q.useCallback(S, D);
      }
      function ao(S, D) {
        var Q = Qe();
        return Q.useMemo(S, D);
      }
      function oo(S, D, Q) {
        var ne = Qe();
        return ne.useImperativeHandle(S, D, Q);
      }
      function xt(S, D) {
        {
          var Q = Qe();
          return Q.useDebugValue(S, D);
        }
      }
      function wt() {
        var S = Qe();
        return S.useTransition();
      }
      function io(S) {
        var D = Qe();
        return D.useDeferredValue(S);
      }
      function gl() {
        var S = Qe();
        return S.useId();
      }
      function _l(S, D, Q) {
        var ne = Qe();
        return ne.useSyncExternalStore(S, D, Q);
      }
      var Mi = 0, pu, Oi, ta, fs, Pr, Tc, Nc;
      function vu() {
      }
      vu.__reactDisabledLog = !0;
      function Di() {
        {
          if (Mi === 0) {
            pu = console.log, Oi = console.info, ta = console.warn, fs = console.error, Pr = console.group, Tc = console.groupCollapsed, Nc = console.groupEnd;
            var S = {
              configurable: !0,
              enumerable: !0,
              value: vu,
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
          Mi++;
        }
      }
      function Ca() {
        {
          if (Mi--, Mi === 0) {
            var S = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: te({}, S, {
                value: pu
              }),
              info: te({}, S, {
                value: Oi
              }),
              warn: te({}, S, {
                value: ta
              }),
              error: te({}, S, {
                value: fs
              }),
              group: te({}, S, {
                value: Pr
              }),
              groupCollapsed: te({}, S, {
                value: Tc
              }),
              groupEnd: te({}, S, {
                value: Nc
              })
            });
          }
          Mi < 0 && ye("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var lo = ke.ReactCurrentDispatcher, uo;
      function hu(S, D, Q) {
        {
          if (uo === void 0)
            try {
              throw Error();
            } catch (be) {
              var ne = be.stack.trim().match(/\n( *(at )?)/);
              uo = ne && ne[1] || "";
            }
          return `
` + uo + S;
        }
      }
      var Sl = !1, Li;
      {
        var mu = typeof WeakMap == "function" ? WeakMap : Map;
        Li = new mu();
      }
      function yu(S, D) {
        if (!S || Sl)
          return "";
        {
          var Q = Li.get(S);
          if (Q !== void 0)
            return Q;
        }
        var ne;
        Sl = !0;
        var be = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ut;
        ut = lo.current, lo.current = null, Di();
        try {
          if (D) {
            var je = function() {
              throw Error();
            };
            if (Object.defineProperty(je.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(je, []);
              } catch (bn) {
                ne = bn;
              }
              Reflect.construct(S, [], je);
            } else {
              try {
                je.call();
              } catch (bn) {
                ne = bn;
              }
              S.call(je.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (bn) {
              ne = bn;
            }
            S();
          }
        } catch (bn) {
          if (bn && ne && typeof bn.stack == "string") {
            for (var ft = bn.stack.split(`
`), Ot = ne.stack.split(`
`), Vt = ft.length - 1, dn = Ot.length - 1; Vt >= 1 && dn >= 0 && ft[Vt] !== Ot[dn]; )
              dn--;
            for (; Vt >= 1 && dn >= 0; Vt--, dn--)
              if (ft[Vt] !== Ot[dn]) {
                if (Vt !== 1 || dn !== 1)
                  do
                    if (Vt--, dn--, dn < 0 || ft[Vt] !== Ot[dn]) {
                      var nn = `
` + ft[Vt].replace(" at new ", " at ");
                      return S.displayName && nn.includes("<anonymous>") && (nn = nn.replace("<anonymous>", S.displayName)), typeof S == "function" && Li.set(S, nn), nn;
                    }
                  while (Vt >= 1 && dn >= 0);
                break;
              }
          }
        } finally {
          Sl = !1, lo.current = ut, Ca(), Error.prepareStackTrace = be;
        }
        var kt = S ? S.displayName || S.name : "", rn = kt ? hu(kt) : "";
        return typeof S == "function" && Li.set(S, rn), rn;
      }
      function ti(S, D, Q) {
        return yu(S, !1);
      }
      function yd(S) {
        var D = S.prototype;
        return !!(D && D.isReactComponent);
      }
      function ni(S, D, Q) {
        if (S == null)
          return "";
        if (typeof S == "function")
          return yu(S, yd(S));
        if (typeof S == "string")
          return hu(S);
        switch (S) {
          case U:
            return hu("Suspense");
          case V:
            return hu("SuspenseList");
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case M:
              return ti(S.render);
            case $:
              return ni(S.type, D, Q);
            case Z: {
              var ne = S, be = ne._payload, ut = ne._init;
              try {
                return ni(ut(be), D, Q);
              } catch {
              }
            }
          }
        return "";
      }
      var Ht = {}, gu = ke.ReactDebugCurrentFrame;
      function Ft(S) {
        if (S) {
          var D = S._owner, Q = ni(S.type, S._source, D ? D.type : null);
          gu.setExtraStackFrame(Q);
        } else
          gu.setExtraStackFrame(null);
      }
      function ds(S, D, Q, ne, be) {
        {
          var ut = Function.call.bind(Ln);
          for (var je in S)
            if (ut(S, je)) {
              var ft = void 0;
              try {
                if (typeof S[je] != "function") {
                  var Ot = Error((ne || "React class") + ": " + Q + " type `" + je + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[je] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Ot.name = "Invariant Violation", Ot;
                }
                ft = S[je](D, je, ne, Q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Vt) {
                ft = Vt;
              }
              ft && !(ft instanceof Error) && (Ft(be), ye("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ne || "React class", Q, je, typeof ft), Ft(null)), ft instanceof Error && !(ft.message in Ht) && (Ht[ft.message] = !0, Ft(be), ye("Failed %s type: %s", Q, ft.message), Ft(null));
            }
        }
      }
      function Ro(S) {
        if (S) {
          var D = S._owner, Q = ni(S.type, S._source, D ? D.type : null);
          Ye(Q);
        } else
          Ye(null);
      }
      var gt;
      gt = !1;
      function _u() {
        if (Ie.current) {
          var S = or(Ie.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
      function hr(S) {
        if (S !== void 0) {
          var D = S.fileName.replace(/^.*[\\\/]/, ""), Q = S.lineNumber;
          return `

Check your code at ` + D + ":" + Q + ".";
        }
        return "";
      }
      function ko(S) {
        return S != null ? hr(S.__source) : "";
      }
      var Ir = {};
      function To(S) {
        var D = _u();
        if (!D) {
          var Q = typeof S == "string" ? S : S.displayName || S.name;
          Q && (D = `

Check the top-level render call using <` + Q + ">.");
        }
        return D;
      }
      function yn(S, D) {
        if (!(!S._store || S._store.validated || S.key != null)) {
          S._store.validated = !0;
          var Q = To(D);
          if (!Ir[Q]) {
            Ir[Q] = !0;
            var ne = "";
            S && S._owner && S._owner !== Ie.current && (ne = " It was passed a child from " + or(S._owner.type) + "."), Ro(S), ye('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Q, ne), Ro(null);
          }
        }
      }
      function tn(S, D) {
        if (typeof S == "object") {
          if (En(S))
            for (var Q = 0; Q < S.length; Q++) {
              var ne = S[Q];
              xn(ne) && yn(ne, D);
            }
          else if (xn(S))
            S._store && (S._store.validated = !0);
          else if (S) {
            var be = xe(S);
            if (typeof be == "function" && be !== S.entries)
              for (var ut = be.call(S), je; !(je = ut.next()).done; )
                xn(je.value) && yn(je.value, D);
          }
        }
      }
      function ji(S) {
        {
          var D = S.type;
          if (D == null || typeof D == "string")
            return;
          var Q;
          if (typeof D == "function")
            Q = D.propTypes;
          else if (typeof D == "object" && (D.$$typeof === M || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          D.$$typeof === $))
            Q = D.propTypes;
          else
            return;
          if (Q) {
            var ne = or(D);
            ds(Q, S.props, "prop", ne, S);
          } else if (D.PropTypes !== void 0 && !gt) {
            gt = !0;
            var be = or(D);
            ye("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", be || "Unknown");
          }
          typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && ye("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Zn(S) {
        {
          for (var D = Object.keys(S.props), Q = 0; Q < D.length; Q++) {
            var ne = D[Q];
            if (ne !== "children" && ne !== "key") {
              Ro(S), ye("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ne), Ro(null);
              break;
            }
          }
          S.ref !== null && (Ro(S), ye("Invalid attribute `ref` supplied to `React.Fragment`."), Ro(null));
        }
      }
      function Fr(S, D, Q) {
        var ne = se(S);
        if (!ne) {
          var be = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (be += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ut = ko(D);
          ut ? be += ut : be += _u();
          var je;
          S === null ? je = "null" : En(S) ? je = "array" : S !== void 0 && S.$$typeof === g ? (je = "<" + (or(S.type) || "Unknown") + " />", be = " Did you accidentally export a JSX literal instead of a component?") : je = typeof S, ye("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", je, be);
        }
        var ft = Rt.apply(this, arguments);
        if (ft == null)
          return ft;
        if (ne)
          for (var Ot = 2; Ot < arguments.length; Ot++)
            tn(arguments[Ot], S);
        return S === C ? Zn(ft) : ji(ft), ft;
      }
      var Aa = !1;
      function Cl(S) {
        var D = Fr.bind(null, S);
        return D.type = S, Aa || (Aa = !0, ue("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(D, "type", {
          enumerable: !1,
          get: function() {
            return ue("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: S
            }), S;
          }
        }), D;
      }
      function ps(S, D, Q) {
        for (var ne = sn.apply(this, arguments), be = 2; be < arguments.length; be++)
          tn(arguments[be], ne.type);
        return ji(ne), ne;
      }
      function vs(S, D) {
        var Q = De.transition;
        De.transition = {};
        var ne = De.transition;
        De.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          S();
        } finally {
          if (De.transition = Q, Q === null && ne._updatedFibers) {
            var be = ne._updatedFibers.size;
            be > 10 && ue("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), ne._updatedFibers.clear();
          }
        }
      }
      var Ai = !1, El = null;
      function gd(S) {
        if (El === null)
          try {
            var D = ("require" + Math.random()).slice(0, 7), Q = c && c[D];
            El = Q.call(c, "timers").setImmediate;
          } catch {
            El = function(be) {
              Ai === !1 && (Ai = !0, typeof MessageChannel > "u" && ye("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var ut = new MessageChannel();
              ut.port1.onmessage = be, ut.port2.postMessage(void 0);
            };
          }
        return El(S);
      }
      var Ua = 0, so = !1;
      function No(S) {
        {
          var D = Ua;
          Ua++, ae.current === null && (ae.current = []);
          var Q = ae.isBatchingLegacy, ne;
          try {
            if (ae.isBatchingLegacy = !0, ne = S(), !Q && ae.didScheduleLegacyUpdate) {
              var be = ae.current;
              be !== null && (ae.didScheduleLegacyUpdate = !1, Ui(be));
            }
          } catch (kt) {
            throw za(D), kt;
          } finally {
            ae.isBatchingLegacy = Q;
          }
          if (ne !== null && typeof ne == "object" && typeof ne.then == "function") {
            var ut = ne, je = !1, ft = {
              then: function(kt, rn) {
                je = !0, ut.then(function(bn) {
                  za(D), Ua === 0 ? Su(bn, kt, rn) : kt(bn);
                }, function(bn) {
                  za(D), rn(bn);
                });
              }
            };
            return !so && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              je || (so = !0, ye("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), ft;
          } else {
            var Ot = ne;
            if (za(D), Ua === 0) {
              var Vt = ae.current;
              Vt !== null && (Ui(Vt), ae.current = null);
              var dn = {
                then: function(kt, rn) {
                  ae.current === null ? (ae.current = [], Su(Ot, kt, rn)) : kt(Ot);
                }
              };
              return dn;
            } else {
              var nn = {
                then: function(kt, rn) {
                  kt(Ot);
                }
              };
              return nn;
            }
          }
        }
      }
      function za(S) {
        S !== Ua - 1 && ye("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ua = S;
      }
      function Su(S, D, Q) {
        {
          var ne = ae.current;
          if (ne !== null)
            try {
              Ui(ne), gd(function() {
                ne.length === 0 ? (ae.current = null, D(S)) : Su(S, D, Q);
              });
            } catch (be) {
              Q(be);
            }
          else
            D(S);
        }
      }
      var Cu = !1;
      function Ui(S) {
        if (!Cu) {
          Cu = !0;
          var D = 0;
          try {
            for (; D < S.length; D++) {
              var Q = S[D];
              do
                Q = Q(!0);
              while (Q !== null);
            }
            S.length = 0;
          } catch (ne) {
            throw S = S.slice(D + 1), ne;
          } finally {
            Cu = !1;
          }
        }
      }
      var xl = Fr, Eu = ps, xu = Cl, co = {
        map: ei,
        forEach: ml,
        count: hl,
        toArray: Ti,
        only: Ni
      };
      p.Children = co, p.Component = He, p.Fragment = C, p.Profiler = b, p.PureComponent = pt, p.StrictMode = h, p.Suspense = U, p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ke, p.act = No, p.cloneElement = Eu, p.createContext = yl, p.createElement = xl, p.createFactory = xu, p.createRef = vn, p.forwardRef = wo, p.isValidElement = xn, p.lazy = bo, p.memo = Ae, p.startTransition = vs, p.unstable_act = No, p.useCallback = vr, p.useContext = Et, p.useDebugValue = xt, p.useDeferredValue = io, p.useEffect = jn, p.useId = gl, p.useImperativeHandle = oo, p.useInsertionEffect = fn, p.useLayoutEffect = mn, p.useMemo = ao, p.useReducer = Mt, p.useRef = Tt, p.useState = _t, p.useSyncExternalStore = _l, p.useTransition = wt, p.version = f, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(wv, wv.exports)), wv.exports;
}
var ZC;
function kv() {
  return ZC || (ZC = 1, process.env.NODE_ENV === "production" ? Ey.exports = a3() : Ey.exports = o3()), Ey.exports;
}
var eE;
function i3() {
  if (eE) return Ev;
  eE = 1;
  var c = kv(), p = /* @__PURE__ */ Symbol.for("react.element"), f = /* @__PURE__ */ Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, w = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(b, x, k) {
    var M, U = {}, V = null, $ = null;
    k !== void 0 && (V = "" + k), x.key !== void 0 && (V = "" + x.key), x.ref !== void 0 && ($ = x.ref);
    for (M in x) g.call(x, M) && !C.hasOwnProperty(M) && (U[M] = x[M]);
    if (b && b.defaultProps) for (M in x = b.defaultProps, x) U[M] === void 0 && (U[M] = x[M]);
    return { $$typeof: p, type: b, key: V, ref: $, props: U, _owner: w.current };
  }
  return Ev.Fragment = f, Ev.jsx = h, Ev.jsxs = h, Ev;
}
var xv = {};
var tE;
function l3() {
  return tE || (tE = 1, process.env.NODE_ENV !== "production" && (function() {
    var c = kv(), p = /* @__PURE__ */ Symbol.for("react.element"), f = /* @__PURE__ */ Symbol.for("react.portal"), g = /* @__PURE__ */ Symbol.for("react.fragment"), w = /* @__PURE__ */ Symbol.for("react.strict_mode"), C = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), b = /* @__PURE__ */ Symbol.for("react.context"), x = /* @__PURE__ */ Symbol.for("react.forward_ref"), k = /* @__PURE__ */ Symbol.for("react.suspense"), M = /* @__PURE__ */ Symbol.for("react.suspense_list"), U = /* @__PURE__ */ Symbol.for("react.memo"), V = /* @__PURE__ */ Symbol.for("react.lazy"), $ = /* @__PURE__ */ Symbol.for("react.offscreen"), Z = Symbol.iterator, J = "@@iterator";
    function Se(j) {
      if (j === null || typeof j != "object")
        return null;
      var se = Z && j[Z] || j[J];
      return typeof se == "function" ? se : null;
    }
    var Ce = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function xe(j) {
      {
        for (var se = arguments.length, Ae = new Array(se > 1 ? se - 1 : 0), Qe = 1; Qe < se; Qe++)
          Ae[Qe - 1] = arguments[Qe];
        Ee("error", j, Ae);
      }
    }
    function Ee(j, se, Ae) {
      {
        var Qe = Ce.ReactDebugCurrentFrame, Et = Qe.getStackAddendum();
        Et !== "" && (se += "%s", Ae = Ae.concat([Et]));
        var _t = Ae.map(function(Mt) {
          return String(Mt);
        });
        _t.unshift("Warning: " + se), Function.prototype.apply.call(console[j], console, _t);
      }
    }
    var De = !1, ae = !1, Ie = !1, Te = !1, Ve = !1, Ye;
    Ye = /* @__PURE__ */ Symbol.for("react.module.reference");
    function Ze(j) {
      return !!(typeof j == "string" || typeof j == "function" || j === g || j === C || Ve || j === w || j === k || j === M || Te || j === $ || De || ae || Ie || typeof j == "object" && j !== null && (j.$$typeof === V || j.$$typeof === U || j.$$typeof === h || j.$$typeof === b || j.$$typeof === x || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      j.$$typeof === Ye || j.getModuleId !== void 0));
    }
    function re(j, se, Ae) {
      var Qe = j.displayName;
      if (Qe)
        return Qe;
      var Et = se.displayName || se.name || "";
      return Et !== "" ? Ae + "(" + Et + ")" : Ae;
    }
    function L(j) {
      return j.displayName || "Context";
    }
    function Y(j) {
      if (j == null)
        return null;
      if (typeof j.tag == "number" && xe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof j == "function")
        return j.displayName || j.name || null;
      if (typeof j == "string")
        return j;
      switch (j) {
        case g:
          return "Fragment";
        case f:
          return "Portal";
        case C:
          return "Profiler";
        case w:
          return "StrictMode";
        case k:
          return "Suspense";
        case M:
          return "SuspenseList";
      }
      if (typeof j == "object")
        switch (j.$$typeof) {
          case b:
            var se = j;
            return L(se) + ".Consumer";
          case h:
            var Ae = j;
            return L(Ae._context) + ".Provider";
          case x:
            return re(j, j.render, "ForwardRef");
          case U:
            var Qe = j.displayName || null;
            return Qe !== null ? Qe : Y(j.type) || "Memo";
          case V: {
            var Et = j, _t = Et._payload, Mt = Et._init;
            try {
              return Y(Mt(_t));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var pe = Object.assign, ke = 0, ue, ye, ee, Me, me, F, te;
    function $e() {
    }
    $e.__reactDisabledLog = !0;
    function He() {
      {
        if (ke === 0) {
          ue = console.log, ye = console.info, ee = console.warn, Me = console.error, me = console.group, F = console.groupCollapsed, te = console.groupEnd;
          var j = {
            configurable: !0,
            enumerable: !0,
            value: $e,
            writable: !0
          };
          Object.defineProperties(console, {
            info: j,
            log: j,
            warn: j,
            error: j,
            group: j,
            groupCollapsed: j,
            groupEnd: j
          });
        }
        ke++;
      }
    }
    function mt() {
      {
        if (ke--, ke === 0) {
          var j = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: pe({}, j, {
              value: ue
            }),
            info: pe({}, j, {
              value: ye
            }),
            warn: pe({}, j, {
              value: ee
            }),
            error: pe({}, j, {
              value: Me
            }),
            group: pe({}, j, {
              value: me
            }),
            groupCollapsed: pe({}, j, {
              value: F
            }),
            groupEnd: pe({}, j, {
              value: te
            })
          });
        }
        ke < 0 && xe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var at = Ce.ReactCurrentDispatcher, Ue;
    function lt(j, se, Ae) {
      {
        if (Ue === void 0)
          try {
            throw Error();
          } catch (Et) {
            var Qe = Et.stack.trim().match(/\n( *(at )?)/);
            Ue = Qe && Qe[1] || "";
          }
        return `
` + Ue + j;
      }
    }
    var pt = !1, Qt;
    {
      var vn = typeof WeakMap == "function" ? WeakMap : Map;
      Qt = new vn();
    }
    function dr(j, se) {
      if (!j || pt)
        return "";
      {
        var Ae = Qt.get(j);
        if (Ae !== void 0)
          return Ae;
      }
      var Qe;
      pt = !0;
      var Et = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _t;
      _t = at.current, at.current = null, He();
      try {
        if (se) {
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
            } catch (xt) {
              Qe = xt;
            }
            Reflect.construct(j, [], Mt);
          } else {
            try {
              Mt.call();
            } catch (xt) {
              Qe = xt;
            }
            j.call(Mt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xt) {
            Qe = xt;
          }
          j();
        }
      } catch (xt) {
        if (xt && Qe && typeof xt.stack == "string") {
          for (var Tt = xt.stack.split(`
`), jn = Qe.stack.split(`
`), fn = Tt.length - 1, mn = jn.length - 1; fn >= 1 && mn >= 0 && Tt[fn] !== jn[mn]; )
            mn--;
          for (; fn >= 1 && mn >= 0; fn--, mn--)
            if (Tt[fn] !== jn[mn]) {
              if (fn !== 1 || mn !== 1)
                do
                  if (fn--, mn--, mn < 0 || Tt[fn] !== jn[mn]) {
                    var vr = `
` + Tt[fn].replace(" at new ", " at ");
                    return j.displayName && vr.includes("<anonymous>") && (vr = vr.replace("<anonymous>", j.displayName)), typeof j == "function" && Qt.set(j, vr), vr;
                  }
                while (fn >= 1 && mn >= 0);
              break;
            }
        }
      } finally {
        pt = !1, at.current = _t, mt(), Error.prepareStackTrace = Et;
      }
      var ao = j ? j.displayName || j.name : "", oo = ao ? lt(ao) : "";
      return typeof j == "function" && Qt.set(j, oo), oo;
    }
    function En(j, se, Ae) {
      return dr(j, !1);
    }
    function Xn(j) {
      var se = j.prototype;
      return !!(se && se.isReactComponent);
    }
    function On(j, se, Ae) {
      if (j == null)
        return "";
      if (typeof j == "function")
        return dr(j, Xn(j));
      if (typeof j == "string")
        return lt(j);
      switch (j) {
        case k:
          return lt("Suspense");
        case M:
          return lt("SuspenseList");
      }
      if (typeof j == "object")
        switch (j.$$typeof) {
          case x:
            return En(j.render);
          case U:
            return On(j.type, se, Ae);
          case V: {
            var Qe = j, Et = Qe._payload, _t = Qe._init;
            try {
              return On(_t(Et), se, Ae);
            } catch {
            }
          }
        }
      return "";
    }
    var Dn = Object.prototype.hasOwnProperty, Ar = {}, Co = Ce.ReactDebugCurrentFrame;
    function ga(j) {
      if (j) {
        var se = j._owner, Ae = On(j.type, j._source, se ? se.type : null);
        Co.setExtraStackFrame(Ae);
      } else
        Co.setExtraStackFrame(null);
    }
    function or(j, se, Ae, Qe, Et) {
      {
        var _t = Function.call.bind(Dn);
        for (var Mt in j)
          if (_t(j, Mt)) {
            var Tt = void 0;
            try {
              if (typeof j[Mt] != "function") {
                var jn = Error((Qe || "React class") + ": " + Ae + " type `" + Mt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof j[Mt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw jn.name = "Invariant Violation", jn;
              }
              Tt = j[Mt](se, Mt, Qe, Ae, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (fn) {
              Tt = fn;
            }
            Tt && !(Tt instanceof Error) && (ga(Et), xe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Qe || "React class", Ae, Mt, typeof Tt), ga(null)), Tt instanceof Error && !(Tt.message in Ar) && (Ar[Tt.message] = !0, ga(Et), xe("Failed %s type: %s", Ae, Tt.message), ga(null));
          }
      }
    }
    var Ln = Array.isArray;
    function Jn(j) {
      return Ln(j);
    }
    function Tr(j) {
      {
        var se = typeof Symbol == "function" && Symbol.toStringTag, Ae = se && j[Symbol.toStringTag] || j.constructor.name || "Object";
        return Ae;
      }
    }
    function to(j) {
      try {
        return Vn(j), !1;
      } catch {
        return !0;
      }
    }
    function Vn(j) {
      return "" + j;
    }
    function Nr(j) {
      if (to(j))
        return xe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Tr(j)), Vn(j);
    }
    var _a = Ce.ReactCurrentOwner, no = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Eo, Ne;
    function tt(j) {
      if (Dn.call(j, "ref")) {
        var se = Object.getOwnPropertyDescriptor(j, "ref").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return j.ref !== void 0;
    }
    function Rt(j) {
      if (Dn.call(j, "key")) {
        var se = Object.getOwnPropertyDescriptor(j, "key").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return j.key !== void 0;
    }
    function Kt(j, se) {
      typeof j.ref == "string" && _a.current;
    }
    function sn(j, se) {
      {
        var Ae = function() {
          Eo || (Eo = !0, xe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        Ae.isReactWarning = !0, Object.defineProperty(j, "key", {
          get: Ae,
          configurable: !0
        });
      }
    }
    function xn(j, se) {
      {
        var Ae = function() {
          Ne || (Ne = !0, xe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        Ae.isReactWarning = !0, Object.defineProperty(j, "ref", {
          get: Ae,
          configurable: !0
        });
      }
    }
    var hn = function(j, se, Ae, Qe, Et, _t, Mt) {
      var Tt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: j,
        key: se,
        ref: Ae,
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
        value: Qe
      }), Object.defineProperty(Tt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Et
      }), Object.freeze && (Object.freeze(Tt.props), Object.freeze(Tt)), Tt;
    };
    function ir(j, se, Ae, Qe, Et) {
      {
        var _t, Mt = {}, Tt = null, jn = null;
        Ae !== void 0 && (Nr(Ae), Tt = "" + Ae), Rt(se) && (Nr(se.key), Tt = "" + se.key), tt(se) && (jn = se.ref, Kt(se, Et));
        for (_t in se)
          Dn.call(se, _t) && !no.hasOwnProperty(_t) && (Mt[_t] = se[_t]);
        if (j && j.defaultProps) {
          var fn = j.defaultProps;
          for (_t in fn)
            Mt[_t] === void 0 && (Mt[_t] = fn[_t]);
        }
        if (Tt || jn) {
          var mn = typeof j == "function" ? j.displayName || j.name || "Unknown" : j;
          Tt && sn(Mt, mn), jn && xn(Mt, mn);
        }
        return hn(j, Tt, jn, Et, Qe, _a.current, Mt);
      }
    }
    var cn = Ce.ReactCurrentOwner, Zt = Ce.ReactDebugCurrentFrame;
    function en(j) {
      if (j) {
        var se = j._owner, Ae = On(j.type, j._source, se ? se.type : null);
        Zt.setExtraStackFrame(Ae);
      } else
        Zt.setExtraStackFrame(null);
    }
    var Sa;
    Sa = !1;
    function Mr(j) {
      return typeof j == "object" && j !== null && j.$$typeof === p;
    }
    function ja() {
      {
        if (cn.current) {
          var j = Y(cn.current.type);
          if (j)
            return `

Check the render method of \`` + j + "`.";
        }
        return "";
      }
    }
    function ei(j) {
      return "";
    }
    var hl = {};
    function ml(j) {
      {
        var se = ja();
        if (!se) {
          var Ae = typeof j == "string" ? j : j.displayName || j.name;
          Ae && (se = `

Check the top-level render call using <` + Ae + ">.");
        }
        return se;
      }
    }
    function Ti(j, se) {
      {
        if (!j._store || j._store.validated || j.key != null)
          return;
        j._store.validated = !0;
        var Ae = ml(se);
        if (hl[Ae])
          return;
        hl[Ae] = !0;
        var Qe = "";
        j && j._owner && j._owner !== cn.current && (Qe = " It was passed a child from " + Y(j._owner.type) + "."), en(j), xe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Ae, Qe), en(null);
      }
    }
    function Ni(j, se) {
      {
        if (typeof j != "object")
          return;
        if (Jn(j))
          for (var Ae = 0; Ae < j.length; Ae++) {
            var Qe = j[Ae];
            Mr(Qe) && Ti(Qe, se);
          }
        else if (Mr(j))
          j._store && (j._store.validated = !0);
        else if (j) {
          var Et = Se(j);
          if (typeof Et == "function" && Et !== j.entries)
            for (var _t = Et.call(j), Mt; !(Mt = _t.next()).done; )
              Mr(Mt.value) && Ti(Mt.value, se);
        }
      }
    }
    function yl(j) {
      {
        var se = j.type;
        if (se == null || typeof se == "string")
          return;
        var Ae;
        if (typeof se == "function")
          Ae = se.propTypes;
        else if (typeof se == "object" && (se.$$typeof === x || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        se.$$typeof === U))
          Ae = se.propTypes;
        else
          return;
        if (Ae) {
          var Qe = Y(se);
          or(Ae, j.props, "prop", Qe, j);
        } else if (se.PropTypes !== void 0 && !Sa) {
          Sa = !0;
          var Et = Y(se);
          xe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Et || "Unknown");
        }
        typeof se.getDefaultProps == "function" && !se.getDefaultProps.isReactClassApproved && xe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ur(j) {
      {
        for (var se = Object.keys(j.props), Ae = 0; Ae < se.length; Ae++) {
          var Qe = se[Ae];
          if (Qe !== "children" && Qe !== "key") {
            en(j), xe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Qe), en(null);
            break;
          }
        }
        j.ref !== null && (en(j), xe("Invalid attribute `ref` supplied to `React.Fragment`."), en(null));
      }
    }
    var zr = {};
    function pr(j, se, Ae, Qe, Et, _t) {
      {
        var Mt = Ze(j);
        if (!Mt) {
          var Tt = "";
          (j === void 0 || typeof j == "object" && j !== null && Object.keys(j).length === 0) && (Tt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var jn = ei();
          jn ? Tt += jn : Tt += ja();
          var fn;
          j === null ? fn = "null" : Jn(j) ? fn = "array" : j !== void 0 && j.$$typeof === p ? (fn = "<" + (Y(j.type) || "Unknown") + " />", Tt = " Did you accidentally export a JSX literal instead of a component?") : fn = typeof j, xe("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", fn, Tt);
        }
        var mn = ir(j, se, Ae, Et, _t);
        if (mn == null)
          return mn;
        if (Mt) {
          var vr = se.children;
          if (vr !== void 0)
            if (Qe)
              if (Jn(vr)) {
                for (var ao = 0; ao < vr.length; ao++)
                  Ni(vr[ao], j);
                Object.freeze && Object.freeze(vr);
              } else
                xe("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ni(vr, j);
        }
        if (Dn.call(se, "key")) {
          var oo = Y(j), xt = Object.keys(se).filter(function(gl) {
            return gl !== "key";
          }), wt = xt.length > 0 ? "{key: someKey, " + xt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!zr[oo + wt]) {
            var io = xt.length > 0 ? "{" + xt.join(": ..., ") + ": ...}" : "{}";
            xe(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, wt, oo, io, oo), zr[oo + wt] = !0;
          }
        }
        return j === g ? Ur(mn) : yl(mn), mn;
      }
    }
    function xo(j, se, Ae) {
      return pr(j, se, Ae, !0);
    }
    function ro(j, se, Ae) {
      return pr(j, se, Ae, !1);
    }
    var bo = ro, wo = xo;
    xv.Fragment = g, xv.jsx = bo, xv.jsxs = wo;
  })()), xv;
}
var nE;
function u3() {
  return nE || (nE = 1, process.env.NODE_ENV === "production" ? Cy.exports = i3() : Cy.exports = l3()), Cy.exports;
}
var R = u3(), Re = kv();
const La = /* @__PURE__ */ VE(Re), rE = (c) => Symbol.iterator in c, aE = (c) => (
  // HACK: avoid checking entries type
  "entries" in c
), oE = (c, p) => {
  const f = c instanceof Map ? c : new Map(c.entries()), g = p instanceof Map ? p : new Map(p.entries());
  if (f.size !== g.size)
    return !1;
  for (const [w, C] of f)
    if (!g.has(w) || !Object.is(C, g.get(w)))
      return !1;
  return !0;
}, s3 = (c, p) => {
  const f = c[Symbol.iterator](), g = p[Symbol.iterator]();
  let w = f.next(), C = g.next();
  for (; !w.done && !C.done; ) {
    if (!Object.is(w.value, C.value))
      return !1;
    w = f.next(), C = g.next();
  }
  return !!w.done && !!C.done;
};
function c3(c, p) {
  return Object.is(c, p) ? !0 : typeof c != "object" || c === null || typeof p != "object" || p === null || Object.getPrototypeOf(c) !== Object.getPrototypeOf(p) ? !1 : rE(c) && rE(p) ? aE(c) && aE(p) ? oE(c, p) : s3(c, p) : oE(
    { entries: () => Object.entries(c) },
    { entries: () => Object.entries(p) }
  );
}
function Jo(c) {
  const p = La.useRef(void 0);
  return (f) => {
    const g = c(f);
    return c3(p.current, g) ? p.current : p.current = g;
  };
}
const f3 = "_sidebar_or261_1", d3 = "_sidebarNav_or261_24", p3 = "_sectionWrapper_or261_32", v3 = "_sectionHeader_or261_37", h3 = "_active_or261_48", m3 = "_sidebarItemInHeader_or261_68", y3 = "_plusButton_or261_71", g3 = "_sidebarItem_or261_68", _3 = "_sidebarIcon_or261_138", S3 = "_sidebarLabel_or261_148", C3 = "_plusIcon_or261_173", E3 = "_rotated_or261_178", Mn = {
  sidebar: f3,
  sidebarNav: d3,
  sectionWrapper: p3,
  sectionHeader: v3,
  active: h3,
  sidebarItemInHeader: m3,
  plusButton: y3,
  sidebarItem: g3,
  sidebarIcon: _3,
  sidebarLabel: S3,
  plusIcon: C3,
  rotated: E3
}, iE = (c) => {
  let p;
  const f = /* @__PURE__ */ new Set(), g = (k, M) => {
    const U = typeof k == "function" ? k(p) : k;
    if (!Object.is(U, p)) {
      const V = p;
      p = M ?? (typeof U != "object" || U === null) ? U : Object.assign({}, p, U), f.forEach(($) => $(p, V));
    }
  }, w = () => p, b = { setState: g, getState: w, getInitialState: () => x, subscribe: (k) => (f.add(k), () => f.delete(k)) }, x = p = c(g, w, b);
  return b;
}, x3 = ((c) => c ? iE(c) : iE), b3 = (c) => c;
function w3(c, p = b3) {
  const f = La.useSyncExternalStore(
    c.subscribe,
    La.useCallback(() => p(c.getState()), [c, p]),
    La.useCallback(() => p(c.getInitialState()), [c, p])
  );
  return La.useDebugValue(f), f;
}
const lE = (c) => {
  const p = x3(c), f = (g) => w3(p, g);
  return Object.assign(f, p), f;
}, f_ = ((c) => c ? lE(c) : lE), uE = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_API_TOKEN: "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.7PeOFUWEldMTdAJGD0Cunfyf_3J7-DnuolsfLfdj2bNiAmoKRMhmUj2O70pVX07bcuMKbovqGJkvE26BZnOEuHSGzM6xCuxM.ir931dGoIRoax41C1zEx0w.wLdsmXhQ4z3NQYfRVgru9w0tMoOjHeACjTRrVnwqqFrzTEOm1-UeRCNgavcjLSfDFAEz1qbONd3_sCZ5JgSTH6Czwweal-1ItkIYK6JthkJtHTPZHZAnGVVv0zLkS-ny5mO7CSy0M68jIPB2sPe6MlzZdlzBSyrqTInajKfomhg.9OuJuaUj1PtodgEUCtvXvPdhzKjIq-CRqs-CV_AFf0I", VITE_API_URL: "https://xh2o-yths-38lt.n7c.xano.io/api", VITE_DATA_SOURCE: "staging", VITE_LLM_ENDPOINT: "http://localhost:3001", VITE_USER_ID: "3", VITE_USER_NAME: "Dynamo Denis" }, Rv = /* @__PURE__ */ new Map(), xy = (c) => {
  const p = Rv.get(c);
  return p ? Object.fromEntries(
    Object.entries(p.stores).map(([f, g]) => [f, g.getState()])
  ) : {};
}, R3 = (c, p, f) => {
  if (c === void 0)
    return {
      type: "untracked",
      connection: p.connect(f)
    };
  const g = Rv.get(f.name);
  if (g)
    return { type: "tracked", store: c, ...g };
  const w = {
    connection: p.connect(f),
    stores: {}
  };
  return Rv.set(f.name, w), { type: "tracked", store: c, ...w };
}, k3 = (c, p) => {
  if (p === void 0) return;
  const f = Rv.get(c);
  f && (delete f.stores[p], Object.keys(f.stores).length === 0 && Rv.delete(c));
}, T3 = (c) => {
  var p, f;
  if (!c) return;
  const g = c.split(`
`), w = g.findIndex(
    (h) => h.includes("api.setState")
  );
  if (w < 0) return;
  const C = ((p = g[w + 1]) == null ? void 0 : p.trim()) || "";
  return (f = /.+ (.+) .+/.exec(C)) == null ? void 0 : f[1];
}, N3 = (c, p = {}) => (f, g, w) => {
  const { enabled: C, anonymousActionType: h, store: b, ...x } = p;
  let k;
  try {
    k = (C ?? (uE ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch {
  }
  if (!k)
    return c(f, g, w);
  const { connection: M, ...U } = R3(b, k, x);
  let V = !0;
  w.setState = ((J, Se, Ce) => {
    const xe = f(J, Se);
    if (!V) return xe;
    const Ee = Ce === void 0 ? {
      type: h || T3(new Error().stack) || "anonymous"
    } : typeof Ce == "string" ? { type: Ce } : Ce;
    return b === void 0 ? (M?.send(Ee, g()), xe) : (M?.send(
      {
        ...Ee,
        type: `${b}/${Ee.type}`
      },
      {
        ...xy(x.name),
        [b]: w.getState()
      }
    ), xe);
  }), w.devtools = {
    cleanup: () => {
      M && typeof M.unsubscribe == "function" && M.unsubscribe(), k3(x.name, b);
    }
  };
  const $ = (...J) => {
    const Se = V;
    V = !1, f(...J), V = Se;
  }, Z = c(w.setState, g, w);
  if (U.type === "untracked" ? M?.init(Z) : (U.stores[U.store] = w, M?.init(
    Object.fromEntries(
      Object.entries(U.stores).map(([J, Se]) => [
        J,
        J === U.store ? Z : Se.getState()
      ])
    )
  )), w.dispatchFromDevtools && typeof w.dispatch == "function") {
    let J = !1;
    const Se = w.dispatch;
    w.dispatch = (...Ce) => {
      (uE ? "production" : void 0) !== "production" && Ce[0].type === "__setState" && !J && (console.warn(
        '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
      ), J = !0), Se(...Ce);
    };
  }
  return M.subscribe((J) => {
    var Se;
    switch (J.type) {
      case "ACTION":
        if (typeof J.payload != "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return J1(
          J.payload,
          (Ce) => {
            if (Ce.type === "__setState") {
              if (b === void 0) {
                $(Ce.state);
                return;
              }
              Object.keys(Ce.state).length !== 1 && console.error(
                `
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `
              );
              const xe = Ce.state[b];
              if (xe == null)
                return;
              JSON.stringify(w.getState()) !== JSON.stringify(xe) && $(xe);
              return;
            }
            w.dispatchFromDevtools && typeof w.dispatch == "function" && w.dispatch(Ce);
          }
        );
      case "DISPATCH":
        switch (J.payload.type) {
          case "RESET":
            return $(Z), b === void 0 ? M?.init(w.getState()) : M?.init(xy(x.name));
          case "COMMIT":
            if (b === void 0) {
              M?.init(w.getState());
              return;
            }
            return M?.init(xy(x.name));
          case "ROLLBACK":
            return J1(J.state, (Ce) => {
              if (b === void 0) {
                $(Ce), M?.init(w.getState());
                return;
              }
              $(Ce[b]), M?.init(xy(x.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return J1(J.state, (Ce) => {
              if (b === void 0) {
                $(Ce);
                return;
              }
              JSON.stringify(w.getState()) !== JSON.stringify(Ce[b]) && $(Ce[b]);
            });
          case "IMPORT_STATE": {
            const { nextLiftedState: Ce } = J.payload, xe = (Se = Ce.computedStates.slice(-1)[0]) == null ? void 0 : Se.state;
            if (!xe) return;
            $(b === void 0 ? xe : xe[b]), M?.send(
              null,
              // FIXME no-any
              Ce
            );
            return;
          }
          case "PAUSE_RECORDING":
            return V = !V;
        }
        return;
    }
  }), Z;
}, d_ = N3, J1 = (c, p) => {
  let f;
  try {
    f = JSON.parse(c);
  } catch (g) {
    console.error(
      "[zustand devtools middleware] Could not parse the received json",
      g
    );
  }
  f !== void 0 && p(f);
}, ar = f_()(
  d_(
    (c) => ({
      token: null,
      baseUrl: null,
      dataSource: null,
      user_id: 0,
      copilot_llm_endpoint: "",
      user_name: "",
      setVariables: (p) => c((f) => ({
        token: p.token !== void 0 ? p.token : f.token,
        baseUrl: p.baseUrl !== void 0 ? p.baseUrl : f.baseUrl,
        dataSource: p.dataSource !== void 0 ? p.dataSource : f.dataSource,
        user_id: p.user_id !== void 0 ? p.user_id : f.user_id,
        copilot_llm_endpoint: p.copilot_llm_endpoint !== void 0 ? p.copilot_llm_endpoint : f.copilot_llm_endpoint,
        user_name: p.user_name !== void 0 ? p.user_name : f.user_name
      }))
    }),
    { name: "VariablesStore" }
  )
), du = f_()(
  d_(
    (c) => ({
      leverageLoops: [],
      suggestionRequests: [],
      outcomesSuggestionRequests: [],
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
          const { token: p, baseUrl: f, dataSource: g } = ar.getState();
          if (!f || typeof f == "string" && f.trim() === "")
            throw console.error("VariablesStore state:", ar.getState()), new Error("Base URL is not defined. Please provide it as a prop to CopilotApp.");
          if (!p || typeof p == "string" && p.trim() === "")
            throw console.error("VariablesStore state:", ar.getState()), new Error("Token is not defined. Please provide it as a prop to CopilotApp.");
          const w = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${p}`,
            "x-data-source": g || ""
          }, C = await fetch(`${f}:Et3oQAtI/my-persons`, { headers: w }), h = await C.json();
          if (!C.ok) {
            const b = h?.message || h?.error || "Failed to fetch loops", x = `HTTP ${C.status}: ${b}`;
            throw new Error(x);
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
          const { token: p, baseUrl: f, dataSource: g } = ar.getState();
          if (!f || typeof f == "string" && f.trim() === "")
            throw console.error("VariablesStore state:", ar.getState()), new Error("Base URL is not defined. Please provide it as a prop to CopilotApp.");
          if (!p || typeof p == "string" && p.trim() === "")
            throw console.error("VariablesStore state:", ar.getState()), new Error("Token is not defined. Please provide it as a prop to CopilotApp.");
          const w = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${p}`,
            "x-data-source": g || ""
          }, C = await fetch(`${f}:MkA4QsNh/suggestion-requests?copilot_mode=loop`, { headers: w }), h = await C.json();
          if (!C.ok) {
            const b = h?.message || h?.error || "Failed to fetch suggestion requests", x = `HTTP ${C.status}: ${b}`;
            throw new Error(x);
          }
          c({ suggestionRequests: h?.items ?? [], isLoadingSuggestionRequests: !1 });
        } catch (p) {
          c({
            suggestionRequestsError: p instanceof Error ? p.message : "Unknown error",
            isLoadingSuggestionRequests: !1
          });
        }
      },
      fetchOutcomesSuggestionRequests: async () => {
        c({ isLoadingSuggestionRequests: !0, suggestionRequestsError: null });
        try {
          const { token: p, baseUrl: f, dataSource: g } = ar.getState();
          if (!f || typeof f == "string" && f.trim() === "")
            throw console.error("VariablesStore state:", ar.getState()), new Error("Base URL is not defined. Please provide it as a prop to CopilotApp.");
          if (!p || typeof p == "string" && p.trim() === "")
            throw console.error("VariablesStore state:", ar.getState()), new Error("Token is not defined. Please provide it as a prop to CopilotApp.");
          const w = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${p}`,
            "x-data-source": g || ""
          }, C = await fetch(`${f}:MkA4QsNh/suggestion-requests?copilot_mode=outcome`, { headers: w }), h = await C.json();
          if (!C.ok) {
            const b = h?.message || h?.error || "Failed to fetch suggestion requests", x = `HTTP ${C.status}: ${b}`;
            throw new Error(x);
          }
          c({ outcomesSuggestionRequests: h?.items ?? [], isLoadingSuggestionRequests: !1 });
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
          const { token: f, baseUrl: g, dataSource: w } = ar.getState();
          if (!g || typeof g == "string" && g.trim() === "")
            throw console.error("VariablesStore state:", ar.getState()), new Error("Base URL is not defined. Please provide it as a prop to CopilotApp.");
          if (!f || typeof f == "string" && f.trim() === "")
            throw console.error("VariablesStore state:", ar.getState()), new Error("Token is not defined. Please provide it as a prop to CopilotApp.");
          const C = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${f}`,
            "x-data-source": w || ""
          }, h = await fetch(
            `${g}:MkA4QsNh/suggestion-requests`,
            { headers: C, method: "POST", body: JSON.stringify(p) }
          ), b = await h.json();
          if (!h.ok) {
            const x = b?.message || b?.error || "Failed to create suggestion request";
            throw new Error(`HTTP ${h.status}: ${x}`);
          }
          c((x) => ({
            suggestionRequests: [b, ...x.suggestionRequests],
            isCreatingSuggestionRequest: !1
          }));
        } catch (f) {
          c({
            createSuggestionRequestError: f instanceof Error ? f.message : "Unknown error",
            isCreatingSuggestionRequest: !1
          });
        }
      },
      updateSuggestionRequest: async (p, f) => {
        c({ isCreatingSuggestionRequest: !0, createSuggestionRequestError: null });
        try {
          const { token: g, baseUrl: w, dataSource: C } = ar.getState();
          if (!w || typeof w == "string" && w.trim() === "")
            throw console.error("VariablesStore state:", ar.getState()), new Error("Base URL is not defined. Please provide it as a prop to CopilotApp.");
          if (!g || typeof g == "string" && g.trim() === "")
            throw console.error("VariablesStore state:", ar.getState()), new Error("Token is not defined. Please provide it as a prop to CopilotApp.");
          const h = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${g}`,
            "x-data-source": C || ""
          }, b = await fetch(
            `${w}:MkA4QsNh/suggestion-requests/${p}`,
            { headers: h, method: "PUT", body: JSON.stringify(f) }
          ), x = await b.json();
          if (!b.ok) {
            const k = x?.message || x?.error || "Failed to update suggestion request";
            throw new Error(`HTTP ${b.status}: ${k}`);
          }
          c((k) => ({
            suggestionRequests: k.suggestionRequests.map((M) => M.id === p ? f : M),
            isUpdatingSuggestionRequest: !1
          }));
        } catch (g) {
          c({
            createSuggestionRequestError: g instanceof Error ? g.message : "Unknown error",
            isCreatingSuggestionRequest: !1
          });
        }
      },
      deleteSuggestionRequest: async (p) => {
        c({ isDeletingSuggestionRequest: !0, deleteSuggestionRequestError: null });
        try {
          const { token: f, baseUrl: g, dataSource: w } = ar.getState();
          if (!g || typeof g == "string" && g.trim() === "")
            throw new Error("Base URL is not defined. Please provide it as a prop to CopilotApp.");
          if (!f || typeof f == "string" && f.trim() === "")
            throw new Error("Token is not defined. Please provide it as a prop to CopilotApp.");
          const C = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${f}`,
            "x-data-source": w || ""
          }, h = await fetch(
            `${g}:MkA4QsNh/suggestion-requests/${p}`,
            { headers: C, method: "DELETE" }
          );
          if (!h.ok) {
            const b = await h.json().catch(() => ({})), x = b?.message || b?.error || "Failed to delete suggestion request";
            throw new Error(`HTTP ${h.status}: ${x}`);
          }
          c((b) => ({
            suggestionRequests: b.suggestionRequests.filter((x) => x.id !== p),
            isDeletingSuggestionRequest: !1
          }));
        } catch (f) {
          c({
            deleteSuggestionRequestError: f instanceof Error ? f.message : "Unknown error",
            isDeletingSuggestionRequest: !1
          });
        }
      },
      setLeverageLoops: (p) => c({ leverageLoops: p }),
      addLeverageLoops: (p) => c((f) => ({ leverageLoops: [...f.leverageLoops, ...p] })),
      prependSuggestionRequest: (p) => c((f) => ({
        suggestionRequests: [p, ...f.suggestionRequests]
      })),
      prependOutcomesSuggestionRequest: (p) => c((f) => ({
        outcomesSuggestionRequests: [p, ...f.outcomesSuggestionRequests]
      }))
    }),
    { name: "LeverageLoopsStore" }
  )
), cs = (c) => ({
  messages: [],
  threadId: `thread-${c}-${Date.now()}`,
  isLoading: !1
}), sE = {
  messages: [],
  threadId: "thread-empty",
  isLoading: !1
}, Zo = f_()(
  d_((c, p) => ({
    activeContext: "copilot",
    selectedPerson: null,
    selectedSuggestionRequest: null,
    draftSuggestionRequest: null,
    leverageLoopSummaries: [],
    outcomesSummaries: [],
    selectedActions: {},
    copilotChat: cs("copilot"),
    leverageLoopChats: {},
    outcomesChats: {},
    setActiveContext: (f) => c({ activeContext: f }),
    setSelectedPerson: (f) => c((g) => ({
      selectedPerson: f,
      selectedSuggestionRequest: f ? null : g.selectedSuggestionRequest,
      activeContext: "leverage-loops"
    })),
    setSelectedSuggestionRequest: (f) => c((g) => ({
      selectedSuggestionRequest: f,
      selectedPerson: f ? null : g.selectedPerson,
      activeContext: "leverage-loops"
    })),
    setSelectedOutcome: (f) => c({
      selectedSuggestionRequest: f,
      activeContext: "outcomes"
    }),
    setDraftSuggestionRequest: (f) => c({ draftSuggestionRequest: f }),
    // Helper to get current leverage loop chat key based on selection
    getCurrentLeverageLoopKey: () => {
      const f = p();
      return f.selectedPerson ? f.selectedPerson.full_name : f.selectedSuggestionRequest ? f.selectedSuggestionRequest.request_panel_title : "leverage-loop-default";
    },
    // Helper to get current leverage loop chat state
    getCurrentLeverageLoopChat: () => {
      const f = p(), g = f.getCurrentLeverageLoopKey();
      return g && f.leverageLoopChats[g] ? f.leverageLoopChats[g] : sE;
    },
    // Helper to get current outcomes chat key
    getCurrentOutcomesKey: () => {
      const f = p();
      return f.selectedSuggestionRequest && (f.selectedSuggestionRequest.request_panel_title || f.selectedSuggestionRequest.request_header_title) || "outcomes-default";
    },
    getCurrentOutcomesChat: () => {
      const f = p(), g = f.getCurrentOutcomesKey();
      return g && f.outcomesChats[g] ? f.outcomesChats[g] : sE;
    },
    addMessage: (f, g, w) => c((C) => {
      if (f === "leverage-loops") {
        const b = w || C.getCurrentLeverageLoopKey();
        if (!b) return C;
        const x = C.leverageLoopChats[b] || cs(`leverage-loop-${b}`);
        return {
          leverageLoopChats: {
            ...C.leverageLoopChats,
            [b]: {
              ...x,
              messages: [...x.messages, g]
            }
          }
        };
      }
      if (f === "outcomes") {
        const b = w || C.getCurrentOutcomesKey();
        if (!b) return C;
        const x = C.outcomesChats[b] || cs(`outcomes-${b}`);
        return {
          outcomesChats: {
            ...C.outcomesChats,
            [b]: {
              ...x,
              messages: [...x.messages, g]
            }
          }
        };
      }
      const h = by();
      return {
        [h]: {
          ...C[h],
          messages: [...C[h].messages, g]
        }
      };
    }),
    updateMessage: (f, g, w, C, h) => c((b) => {
      if (f === "leverage-loops") {
        const k = h || b.getCurrentLeverageLoopKey();
        if (!k) return b;
        const M = b.leverageLoopChats[k];
        return M ? {
          leverageLoopChats: {
            ...b.leverageLoopChats,
            [k]: {
              ...M,
              messages: M.messages.map(
                (U) => U.id === g ? { ...U, content: w, isStreaming: C ?? U.isStreaming } : U
              )
            }
          }
        } : b;
      }
      if (f === "outcomes") {
        const k = h || b.getCurrentOutcomesKey();
        if (!k) return b;
        const M = b.outcomesChats[k];
        return M ? {
          outcomesChats: {
            ...b.outcomesChats,
            [k]: {
              ...M,
              messages: M.messages.map(
                (U) => U.id === g ? { ...U, content: w, isStreaming: C ?? U.isStreaming } : U
              )
            }
          }
        } : b;
      }
      const x = by();
      return {
        [x]: {
          ...b[x],
          messages: b[x].messages.map(
            (k) => k.id === g ? { ...k, content: w, isStreaming: C ?? k.isStreaming } : k
          )
        }
      };
    }),
    setIsLoading: (f, g, w) => c((C) => {
      if (f === "leverage-loops") {
        const b = w || C.getCurrentLeverageLoopKey();
        if (!b) return C;
        const x = C.leverageLoopChats[b] || cs(`leverage-loop-${b}`);
        return {
          leverageLoopChats: {
            ...C.leverageLoopChats,
            [b]: {
              ...x,
              isLoading: g
            }
          }
        };
      }
      if (f === "outcomes") {
        const b = w || C.getCurrentOutcomesKey();
        if (!b) return C;
        const x = C.outcomesChats[b] || cs(`outcomes-${b}`);
        return {
          outcomesChats: {
            ...C.outcomesChats,
            [b]: {
              ...x,
              isLoading: g
            }
          }
        };
      }
      const h = by();
      return {
        [h]: {
          ...C[h],
          isLoading: g
        }
      };
    }),
    clearChat: (f, g) => c((w) => {
      if (f === "leverage-loops") {
        const h = g || w.getCurrentLeverageLoopKey();
        return h ? {
          leverageLoopChats: {
            ...w.leverageLoopChats,
            [h]: cs(`leverage-loop-${h}`)
          }
        } : w;
      }
      if (f === "outcomes") {
        const h = g || w.getCurrentOutcomesKey();
        return h ? {
          outcomesChats: {
            ...w.outcomesChats,
            [h]: cs(`outcomes-${h}`)
          }
        } : w;
      }
      return {
        [by()]: cs(f)
      };
    }),
    upsertLeverageLoopSummary: (f) => c((g) => g.leverageLoopSummaries.findIndex((C) => C.id === f.id) >= 0 ? {
      leverageLoopSummaries: g.leverageLoopSummaries.map((C) => C.id === f.id ? f : C)
    } : {
      leverageLoopSummaries: [...g.leverageLoopSummaries, f]
    }),
    upsertOutcomesSummary: (f) => c((g) => g.outcomesSummaries.findIndex((C) => C.id === f.id) >= 0 ? {
      outcomesSummaries: g.outcomesSummaries.map((C) => C.id === f.id ? f : C)
    } : {
      outcomesSummaries: [...g.outcomesSummaries, f]
    }),
    setSelectedAction: (f, g) => c((w) => ({
      selectedActions: {
        ...w.selectedActions,
        [f]: g
      }
    })),
    getSelectedAction: (f) => p().selectedActions[f] || null
  }), { name: "ChatContextStore" })
);
function by(c) {
  return "copilotChat";
}
const M3 = "_composerContainer_1dqbd_1", O3 = "_composer_1dqbd_1", D3 = "_inputWrapper_1dqbd_15", L3 = "_input_1dqbd_15", j3 = "_actions_1dqbd_40", A3 = "_leftActions_1dqbd_47", U3 = "_rightActions_1dqbd_48", z3 = "_actionButton_1dqbd_54", P3 = "_sendButton_1dqbd_75", I3 = "_active_1dqbd_92", Ko = {
  composerContainer: M3,
  composer: O3,
  inputWrapper: D3,
  input: L3,
  actions: j3,
  leftActions: A3,
  rightActions: U3,
  actionButton: z3,
  sendButton: P3,
  active: I3
}, F3 = ({
  onSend: c,
  disabled: p = !1,
  placeholder: f = "Ask anything..",
  initialValue: g = ""
}) => {
  const [w, C] = Re.useState(g), h = Re.useRef(null);
  Re.useEffect(() => {
    g && (C(g), setTimeout(() => h.current?.focus(), 0));
  }, [g]), Re.useEffect(() => {
    const k = h.current;
    k && (k.style.height = "auto", k.style.height = `${Math.min(k.scrollHeight, 200)}px`);
  }, [w]);
  const b = (k) => {
    k?.preventDefault(), w.trim() && !p && (c(w.trim()), C(""));
  }, x = (k) => {
    k.key === "Enter" && !k.shiftKey && (k.preventDefault(), b());
  };
  return /* @__PURE__ */ R.jsx("div", { className: Ko.composerContainer, children: /* @__PURE__ */ R.jsxs("form", { onSubmit: b, className: Ko.composer, children: [
    /* @__PURE__ */ R.jsx("div", { className: Ko.inputWrapper, children: /* @__PURE__ */ R.jsx(
      "textarea",
      {
        ref: h,
        value: w,
        onChange: (k) => C(k.target.value),
        onKeyDown: x,
        placeholder: f,
        disabled: p,
        className: Ko.input,
        rows: 1
      }
    ) }),
    /* @__PURE__ */ R.jsxs("div", { className: Ko.actions, children: [
      /* @__PURE__ */ R.jsxs("div", { className: Ko.leftActions, children: [
        /* @__PURE__ */ R.jsx(
          "button",
          {
            type: "button",
            className: Ko.actionButton,
            title: "Attach file",
            children: /* @__PURE__ */ R.jsx(
              "svg",
              {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /* @__PURE__ */ R.jsx("path", { d: "M12 5v14M5 12h14" })
              }
            )
          }
        ),
        /* @__PURE__ */ R.jsx(
          "button",
          {
            type: "button",
            className: Ko.actionButton,
            title: "Settings",
            children: /* @__PURE__ */ R.jsx(
              "svg",
              {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /* @__PURE__ */ R.jsx("path", { d: "M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" })
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ R.jsxs("div", { className: Ko.rightActions, children: [
        /* @__PURE__ */ R.jsx(
          "button",
          {
            type: "button",
            className: Ko.actionButton,
            title: "Voice input",
            children: /* @__PURE__ */ R.jsxs(
              "svg",
              {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: [
                  /* @__PURE__ */ R.jsx("path", { d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" }),
                  /* @__PURE__ */ R.jsx("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }),
                  /* @__PURE__ */ R.jsx("line", { x1: "12", y1: "19", x2: "12", y2: "23" }),
                  /* @__PURE__ */ R.jsx("line", { x1: "8", y1: "23", x2: "16", y2: "23" })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ R.jsx(
          "button",
          {
            type: "submit",
            className: `${Ko.sendButton} ${w.trim() && !p ? Ko.active : ""}`,
            disabled: !w.trim() || p,
            title: "Send message",
            children: /* @__PURE__ */ R.jsx(
              "svg",
              {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /* @__PURE__ */ R.jsx("path", { d: "M12 19V5M5 12l7-7 7 7" })
              }
            )
          }
        )
      ] })
    ] })
  ] }) });
}, V3 = "_messageContainer_hxhyd_1", $3 = "_user_hxhyd_6", H3 = "_assistant_hxhyd_9", B3 = "_userMessage_hxhyd_23", q3 = "_assistantAvatar_hxhyd_38", W3 = "_assistantMessage_hxhyd_55", Y3 = "_textContent_hxhyd_66", G3 = "_streamingIndicator_hxhyd_71", vl = {
  messageContainer: V3,
  user: $3,
  assistant: H3,
  userMessage: B3,
  assistantAvatar: q3,
  assistantMessage: W3,
  textContent: Y3,
  streamingIndicator: G3
}, p_ = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.15816%2015.5394C4.42185%2015.8099%203.64142%2015.9909%202.82808%2016.0678C2.75965%2016.0739%202.69009%2016.0784%202.62129%2016.081C2.05326%2016.1048%201.47513%2015.9215%201.00732%2015.5213C0.154714%2014.7923%20-0.052828%2013.5813%200.443029%2012.6226C0.448638%2012.6116%200.453874%2012.6011%200.459857%2012.5898L3.41481%206.77869C2.08654%209.73401%202.83855%2013.3286%205.16339%2015.5372L5.15816%2015.5391V15.5394Z'%20fill='url(%23paint0_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8419%204.46013C15.5782%204.18972%2016.3587%204.00906%2017.172%203.93175C17.2401%203.92571%2017.31%203.92119%2017.3788%203.91855C17.9468%203.89479%2018.525%204.07808%2018.9928%204.47823C19.845%205.20726%2020.0529%206.41828%2019.5571%207.37699C19.5515%207.3883%2019.5458%207.39886%2019.5402%207.4098L16.5853%2013.2205C17.9132%2010.2648%2017.1615%206.67059%2014.8367%204.46202L14.8419%204.46013Z'%20fill='url(%23paint1_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10%202.61975C11.8545%202.61975%2013.547%203.31559%2014.8367%204.46211C12.464%205.51888%2010.8283%207.5913%2010.1904%2010.0563C9.55242%2012.5214%207.60302%2014.6787%205.16338%2015.5378C3.66459%2014.2306%202.68222%2012.2057%202.68222%2010.0001C2.68259%205.92394%205.95877%202.61975%2010%202.61975Z'%20fill='url(%23paint2_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8367%204.46167C16.358%205.81412%2017.3179%207.79376%2017.3179%209.99932C17.3179%2014.0751%2014.0417%2017.3793%2010.0001%2017.3793C8.14604%2017.3793%206.45317%2016.6835%205.16342%2015.537C7.59222%2014.5651%209.36213%2012.4644%2010.0001%209.99932C10.638%207.53429%2012.4079%205.4332%2014.8367%204.46167Z'%20fill='url(%23paint3_linear_23492_1459)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_23492_1459'%20x1='1.41231'%20y1='10.771'%20x2='6.31346'%20y2='13.2684'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFAE00'%20stop-opacity='0.12'/%3e%3cstop%20offset='1'%20stop-color='%23FFAE00'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_23492_1459'%20x1='13.6991'%20y1='6.69473'%20x2='18.6306'%20y2='9.20746'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2313F562'/%3e%3cstop%20offset='1'%20stop-color='%2313F562'%20stop-opacity='0.09'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_23492_1459'%20x1='4.21878'%20y1='14.805'%20x2='10.8001'%20y2='2.68539'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FD5743'/%3e%3cstop%20offset='0.21'%20stop-color='%23D13D58'/%3e%3cstop%20offset='0.4'%20stop-color='%23AB2868'/%3e%3cstop%20offset='0.6'%20stop-color='%238C1B6F'/%3e%3cstop%20offset='1'%20stop-color='%23280553'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_23492_1459'%20x1='9.19834'%20y1='17.5257'%20x2='15.8611'%20y2='5.25654'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23130F56'/%3e%3cstop%20offset='0.41'%20stop-color='%23105D8E'/%3e%3cstop%20offset='0.6'%20stop-color='%23107995'/%3e%3cstop%20offset='0.79'%20stop-color='%2311A39E'/%3e%3cstop%20offset='1'%20stop-color='%2313EBAF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
const Q3 = (c) => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), K3 = (c) => c.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (p, f, g) => g ? g.toUpperCase() : f.toLowerCase()
), cE = (c) => {
  const p = K3(c);
  return p.charAt(0).toUpperCase() + p.slice(1);
}, $E = (...c) => c.filter((p, f, g) => !!p && p.trim() !== "" && g.indexOf(p) === f).join(" ").trim(), X3 = (c) => {
  for (const p in c)
    if (p.startsWith("aria-") || p === "role" || p === "title")
      return !0;
};
var J3 = {
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
const Z3 = Re.forwardRef(
  ({
    color: c = "currentColor",
    size: p = 24,
    strokeWidth: f = 2,
    absoluteStrokeWidth: g,
    className: w = "",
    children: C,
    iconNode: h,
    ...b
  }, x) => Re.createElement(
    "svg",
    {
      ref: x,
      ...J3,
      width: p,
      height: p,
      stroke: c,
      strokeWidth: g ? Number(f) * 24 / Number(p) : f,
      className: $E("lucide", w),
      ...!C && !X3(b) && { "aria-hidden": "true" },
      ...b
    },
    [
      ...h.map(([k, M]) => Re.createElement(k, M)),
      ...Array.isArray(C) ? C : [C]
    ]
  )
);
const we = (c, p) => {
  const f = Re.forwardRef(
    ({ className: g, ...w }, C) => Re.createElement(Z3, {
      ref: C,
      iconNode: p,
      className: $E(
        `lucide-${Q3(cE(c))}`,
        `lucide-${c}`,
        g
      ),
      ...w
    })
  );
  return f.displayName = cE(c), f;
};
const e4 = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
], t4 = we("activity", e4);
const n4 = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], r4 = we("arrow-down", n4);
const a4 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], o4 = we("arrow-left", a4);
const i4 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], l4 = we("arrow-right", i4);
const u4 = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], s4 = we("arrow-up", u4);
const c4 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
], f4 = we("award", c4);
const d4 = [
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
], p4 = we("bell-off", d4);
const v4 = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], h4 = we("bell", v4);
const m4 = [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }]
], y4 = we("bookmark", m4);
const g4 = [
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
], _4 = we("boxes", g4);
const S4 = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
], C4 = we("briefcase", S4);
const E4 = [
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
], x4 = we("building", E4);
const b4 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], w4 = we("calendar", b4);
const R4 = [
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
], k4 = we("car", R4);
const T4 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }]
], N4 = we("chart-line", T4);
const M4 = [
  ["path", { d: "M5 21v-6", key: "1hz6c0" }],
  ["path", { d: "M12 21V9", key: "uvy0l4" }],
  ["path", { d: "M19 21V3", key: "11j9sm" }]
], O4 = we("chart-no-axes-column-increasing", M4);
const D4 = [
  [
    "path",
    {
      d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",
      key: "pzmjnu"
    }
  ],
  ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83", key: "k2fpak" }]
], L4 = we("chart-pie", D4);
const j4 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], A4 = we("check", j4);
const U4 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], HE = we("chevron-down", U4);
const z4 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], P4 = we("chevron-left", z4);
const I4 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], F4 = we("chevron-right", I4);
const V4 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], $4 = we("chevron-up", V4);
const H4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], B4 = we("circle-alert", H4);
const q4 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], W4 = we("circle-check-big", q4);
const Y4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], G4 = we("circle-question-mark", Y4);
const Q4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], K4 = we("circle-x", Q4);
const X4 = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], J4 = we("clock", X4);
const Z4 = [
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
], e5 = we("coffee", Z4);
const t5 = [
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], n5 = we("compass", t5);
const r5 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], a5 = we("copy", r5);
const o5 = [
  [
    "path",
    {
      d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
      key: "1vdc57"
    }
  ],
  ["path", { d: "M5 21h14", key: "11awu3" }]
], i5 = we("crown", o5);
const l5 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], u5 = we("download", l5);
const s5 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], c5 = we("external-link", s5);
const f5 = [
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
], d5 = we("eye-off", f5);
const p5 = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], v5 = we("eye", p5);
const h5 = [
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
], m5 = we("file-text", h5);
const y5 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]
], g5 = we("file", y5);
const _5 = [
  [
    "path",
    {
      d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
      key: "1jaruq"
    }
  ]
], S5 = we("flag", _5);
const C5 = [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
], E5 = we("folder-open", C5);
const x5 = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
], b5 = we("folder", x5);
const w5 = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
], R5 = we("funnel", w5);
const k5 = [
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
], T5 = we("gift", k5);
const N5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], M5 = we("globe", N5);
const O5 = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
], D5 = we("heart", O5);
const L5 = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], j5 = we("house", L5);
const A5 = [
  ["path", { d: "M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8", key: "18ogeb" }]
], U5 = we("infinity", A5);
const z5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], P5 = we("info", z5);
const I5 = [
  ["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }],
  ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
  ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }]
], F5 = we("key", I5);
const V5 = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
], $5 = we("lightbulb", V5);
const H5 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], B5 = we("link", H5);
const q5 = [
  ["path", { d: "M13 5h8", key: "a7qcls" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 19h8", key: "c3s6r1" }],
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }]
], W5 = we("list-checks", q5);
const Y5 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
], G5 = we("lock-open", Y5);
const Q5 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], K5 = we("lock", Q5);
const X5 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], J5 = we("mail", X5);
const Z5 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], eN = we("map-pin", Z5);
const tN = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
], nN = we("message-circle", tN);
const rN = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
], aN = we("message-square", rN);
const oN = [["path", { d: "M5 12h14", key: "1ays0h" }]], iN = we("minus", oN);
const lN = [
  ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]
], uN = we("navigation", lN);
const sN = [
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
      key: "1miecu"
    }
  ]
], cN = we("paperclip", sN);
const fN = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], dN = we("pause", fN);
const pN = [
  ["path", { d: "M13 21h8", key: "1jsn5i" }],
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
], a_ = we("pen-line", pN);
const vN = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], hN = we("phone", vN);
const mN = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], yN = we("play", mN);
const gN = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], _N = we("plus", gN);
const SN = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], CN = we("refresh-cw", SN);
const EN = [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }]
], xN = we("repeat", EN);
const bN = [
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
], wN = we("rocket", bN);
const RN = [
  ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
], kN = we("rotate-cw", RN);
const TN = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], NN = we("search", TN);
const MN = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], ON = we("send", MN);
const DN = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], LN = we("settings", DN);
const jN = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
], AN = we("share-2", jN);
const UN = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], zN = we("shield-check", UN);
const PN = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
], IN = we("shield", PN);
const FN = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
], VN = we("square-pen", FN);
const $N = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], HN = we("star", $N);
const BN = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], qN = we("target", BN);
const WN = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], YN = we("timer", WN);
const GN = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Ty = we("trash-2", GN);
const QN = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
], KN = we("trending-down", QN);
const XN = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
], JN = we("trending-up", XN);
const ZN = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], eM = we("triangle-alert", ZN);
const tM = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], nM = we("upload", tM);
const rM = [
  ["path", { d: "m16 11 2 2 4-4", key: "9rsbq5" }],
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
], aM = we("user-check", rM);
const oM = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
], iM = we("user-plus", oM);
const lM = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], uM = we("user", lM);
const sM = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
], cM = we("users", sM);
const fM = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
], dM = we("workflow", fM);
const pM = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], vM = we("x", pM);
const hM = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
], mM = we("zap", hM), yM = "_card_17b4s_1", gM = "_sources_17b4s_11", _M = "_sourcesHeader_17b4s_17", SM = "_sourcesList_17b4s_26", CM = "_sourceItem_17b4s_32", EM = "_sourceIndex_17b4s_45", xM = "_sourceTitle_17b4s_51", bM = "_sourceName_17b4s_55", wM = "_header_17b4s_60", RM = "_headerTitle_17b4s_60", kM = "_headerSubtitle_17b4s_65", TM = "_textContent_17b4s_70", NM = "_button_17b4s_93", MM = "_primary_17b4s_106", OM = "_secondary_17b4s_117", DM = "_ghost_17b4s_125", LM = "_selected_17b4s_136", jM = "_buttonGroup_17b4s_146", AM = "_horizontal_17b4s_150", UM = "_vertical_17b4s_153", zM = "_form_17b4s_157", PM = "_formField_17b4s_163", IM = "_fieldLabel_17b4s_168", FM = "_fieldHint_17b4s_173", VM = "_input_17b4s_178", $M = "_textarea_17b4s_179", HM = "_select_17b4s_136", BM = "_error_17b4s_202", qM = "_checkboxWrapper_17b4s_222", WM = "_radioWrapper_17b4s_223", YM = "_radioGroup_17b4s_243", GM = "_checkboxGroup_17b4s_249", QM = "_list_17b4s_255", KM = "_listHeading_17b4s_255", XM = "_listItems_17b4s_263", JM = "_listItem_17b4s_263", ZM = "_listItemIcon_17b4s_283", eO = "_listItemContent_17b4s_293", tO = "_listItemTitle_17b4s_296", nO = "_listItemSubtitle_17b4s_302", rO = "_listItemAction_17b4s_307", aO = "_actionButton_17b4s_307", oO = "_stats_17b4s_326", iO = "_statsNumber_17b4s_329", lO = "_statsLabel_17b4s_335", uO = "_profileTile_17b4s_341", sO = "_profileIcon_17b4s_346", cO = "_profileContent_17b4s_356", fO = "_profileTitle_17b4s_356", dO = "_profileLabel_17b4s_362", pO = "_miniCard_17b4s_368", vO = "_miniCardBlock_17b4s_378", hO = "_steps_17b4s_384", mO = "_stepsItem_17b4s_401", yO = "_stepsTitle_17b4s_416", gO = "_stepsDetails_17b4s_422", _O = "_sectionBlock_17b4s_427", SO = "_section_17b4s_427", CO = "_expanded_17b4s_438", EO = "_sectionTrigger_17b4s_438", xO = "_triggerIcon_17b4s_459", bO = "_rotated_17b4s_462", wO = "_sectionContent_17b4s_466", RO = "_icon_17b4s_473", kO = "_streamingContainer_17b4s_479", TO = "_streamingIndicator_17b4s_484", NO = "_pulse_17b4s_1", MO = "_skeletonLoader_17b4s_496", OO = "_skeletonShimmer_17b4s_511", DO = "_shimmer_17b4s_1", Oe = {
  card: yM,
  sources: gM,
  sourcesHeader: _M,
  sourcesList: SM,
  sourceItem: CM,
  sourceIndex: EM,
  sourceTitle: xM,
  sourceName: bM,
  header: wM,
  headerTitle: RM,
  headerSubtitle: kM,
  textContent: TM,
  button: NM,
  primary: MM,
  secondary: OM,
  ghost: DM,
  selected: LM,
  buttonGroup: jM,
  horizontal: AM,
  vertical: UM,
  form: zM,
  formField: PM,
  fieldLabel: IM,
  fieldHint: FM,
  input: VM,
  textarea: $M,
  select: HM,
  error: BM,
  checkboxWrapper: qM,
  radioWrapper: WM,
  radioGroup: YM,
  checkboxGroup: GM,
  list: QM,
  listHeading: KM,
  listItems: XM,
  listItem: JM,
  listItemIcon: ZM,
  listItemContent: eO,
  listItemTitle: tO,
  listItemSubtitle: nO,
  listItemAction: rO,
  actionButton: aO,
  stats: oO,
  statsNumber: iO,
  statsLabel: lO,
  profileTile: uO,
  profileIcon: sO,
  profileContent: cO,
  profileTitle: fO,
  profileLabel: dO,
  miniCard: pO,
  miniCardBlock: vO,
  steps: hO,
  stepsItem: mO,
  stepsTitle: yO,
  stepsDetails: gO,
  sectionBlock: _O,
  section: SO,
  expanded: CO,
  sectionTrigger: EO,
  triggerIcon: xO,
  rotated: bO,
  sectionContent: wO,
  icon: RO,
  streamingContainer: kO,
  streamingIndicator: TO,
  pulse: NO,
  skeletonLoader: MO,
  skeletonShimmer: OO,
  shimmer: DO
}, LO = {
  // Arrows & Navigation
  target: qN,
  "arrow-right": l4,
  "arrow-left": o4,
  "arrow-up": s4,
  "arrow-down": r4,
  "chevron-down": HE,
  "chevron-right": F4,
  "chevron-left": P4,
  "chevron-up": $4,
  repeat: xN,
  "refresh-cw": CN,
  "rotate-cw": kN,
  navigation: uN,
  compass: n5,
  // Multimedia
  play: yN,
  pause: dN,
  // Text & Lists
  "list-checks": W5,
  // Development
  workflow: dM,
  // Time
  timer: YN,
  clock: J4,
  calendar: w4,
  // Shopping & Business
  boxes: _4,
  briefcase: C4,
  building: x4,
  // Math & Charts
  infinity: U5,
  plus: _N,
  minus: iN,
  "line-chart": N4,
  "bar-chart": O4,
  "pie-chart": L4,
  "trending-up": JN,
  "trending-down": KN,
  activity: t4,
  // Actions
  check: A4,
  x: vM,
  edit: VN,
  trash: Ty,
  copy: a5,
  share: AN,
  "external-link": c5,
  search: NN,
  filter: R5,
  settings: LN,
  download: u5,
  upload: nM,
  send: ON,
  zap: mM,
  // Users
  user: uM,
  users: cM,
  "user-plus": iM,
  "user-check": aM,
  // Communication
  mail: J5,
  phone: hN,
  "message-circle": nN,
  "message-square": aN,
  bell: h4,
  "bell-off": p4,
  // Status & Favorites
  star: HN,
  heart: D5,
  bookmark: y4,
  flag: S5,
  award: f4,
  gift: T5,
  crown: i5,
  // Info & Alerts
  "help-circle": G4,
  info: P5,
  "alert-circle": B4,
  "alert-triangle": eM,
  "check-circle": W4,
  "x-circle": K4,
  // View
  eye: v5,
  "eye-off": d5,
  // Security
  lock: K5,
  unlock: G5,
  key: F5,
  shield: IN,
  "shield-check": zN,
  // Links & Files
  link: B5,
  paperclip: cN,
  "file-text": m5,
  file: g5,
  folder: b5,
  "folder-open": E5,
  // Location
  home: j5,
  "map-pin": eN,
  globe: M5,
  // Transportation
  car: k4,
  // Ideas & Energy
  lightbulb: $5,
  rocket: wN,
  coffee: e5
}, BE = ({ name: c, size: p = 18 }) => {
  if (!c)
    return /* @__PURE__ */ R.jsx("span", { className: Oe.icon, style: { width: p, height: p }, children: "•" });
  const f = LO[c.toLowerCase()];
  return f ? /* @__PURE__ */ R.jsx("span", { className: Oe.icon, children: /* @__PURE__ */ R.jsx(f, { size: p }) }) : (console.warn(`Icon "${c}" not found in registry`), /* @__PURE__ */ R.jsx("span", { className: Oe.icon, style: { width: p, height: p }, children: "•" }));
}, jO = ({ title: c, subtitle: p }) => /* @__PURE__ */ R.jsxs("div", { className: Oe.header, children: [
  /* @__PURE__ */ R.jsx("h3", { className: Oe.headerTitle, children: c }),
  p && /* @__PURE__ */ R.jsx("p", { className: Oe.headerSubtitle, children: p })
] });
function fE(c) {
  const p = /\*\*(.*?)\*\*/g, f = c.split(p);
  if (f.length > 1)
    return f.map((w, C) => {
      if (C % 2 === 1)
        return /* @__PURE__ */ R.jsx("strong", { children: w }, C);
      const h = /`(.*?)`/g;
      return w.match(h) ? w.split(h).map((x, k) => k % 2 === 1 ? /* @__PURE__ */ R.jsx("code", { children: x }, `${C}-${k}`) : x) : w;
    });
  const g = /`(.*?)`/g;
  return c.match(g) ? c.split(g).map((C, h) => h % 2 === 1 ? /* @__PURE__ */ R.jsx("code", { children: C }, h) : C) : c;
}
function AO(c) {
  const p = c.split(`
`), f = [];
  let g = [];
  const w = () => {
    g.length > 0 && (f.push(
      /* @__PURE__ */ R.jsx("ul", { style: { margin: "8px 0", paddingLeft: "20px" }, children: g.map((C, h) => /* @__PURE__ */ R.jsx("li", { style: { marginBottom: "4px" }, children: fE(C) }, h)) }, `list-${f.length}`)
    ), g = []);
  };
  return p.forEach((C, h) => {
    const b = C.trim();
    if (b.match(/^[•\-\*]\s+/)) {
      const x = b.replace(/^[•\-\*]\s+/, "");
      g.push(x);
    } else b === "" ? w() : (w(), f.push(/* @__PURE__ */ R.jsx("p", { style: { margin: "4px 0" }, children: fE(b) }, `p-${h}`)));
  }), w(), f;
}
const UO = ({ textMarkdown: c }) => /* @__PURE__ */ R.jsx("div", { className: Oe.textContent, children: AO(c) }), zO = ({
  children: c,
  name: p,
  variant: f = "primary",
  disabled: g = !1,
  selected: w = !1,
  action: C,
  onAction: h
}) => {
  const b = () => {
    C && h && h(C);
  }, x = ["submit", "save", "confirm", "set", "create", "send", "apply"], k = (p || "").toLowerCase(), M = (typeof c == "string" ? c : "").toLowerCase(), U = C?.type === "submit_form" || x.some(($) => k.includes($)) || x.some(($) => M.includes($)), V = [
    Oe.button,
    Oe[f],
    w ? Oe.selected : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ R.jsx(
    "button",
    {
      className: V,
      disabled: g,
      onClick: b,
      type: U ? "submit" : "button",
      children: c
    }
  );
}, PO = ({
  variant: c = "horizontal",
  children: p,
  renderComponent: f
}) => /* @__PURE__ */ R.jsx("div", { className: `${Oe.buttonGroup} ${Oe[c]}`, children: p.map((g, w) => /* @__PURE__ */ R.jsx(La.Fragment, { children: f(g) }, w)) }), IO = ({ children: c, sources: p, renderComponent: f }) => !c || !Array.isArray(c) ? /* @__PURE__ */ R.jsx("div", { className: Oe.card }) : /* @__PURE__ */ R.jsxs("div", { className: Oe.card, children: [
  c.map((g, w) => /* @__PURE__ */ R.jsx(La.Fragment, { children: f(g) }, w)),
  p && p.length > 0 && /* @__PURE__ */ R.jsxs("div", { className: Oe.sources, children: [
    /* @__PURE__ */ R.jsx("div", { className: Oe.sourcesHeader, children: "Sources" }),
    /* @__PURE__ */ R.jsx("div", { className: Oe.sourcesList, children: p.map((g, w) => /* @__PURE__ */ R.jsxs(
      "a",
      {
        href: g.url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: Oe.sourceItem,
        children: [
          /* @__PURE__ */ R.jsxs("span", { className: Oe.sourceIndex, children: [
            "[",
            w + 1,
            "]"
          ] }),
          /* @__PURE__ */ R.jsx("span", { className: Oe.sourceTitle, children: g.title }),
          g.sourceName && /* @__PURE__ */ R.jsxs("span", { className: Oe.sourceName, children: [
            " - ",
            g.sourceName
          ] })
        ]
      },
      w
    )) })
  ] })
] }), FO = ({ heading: c, items: p, onAction: f }) => /* @__PURE__ */ R.jsxs("div", { className: Oe.list, children: [
  c && /* @__PURE__ */ R.jsx("h4", { className: Oe.listHeading, children: c }),
  /* @__PURE__ */ R.jsx("div", { className: Oe.listItems, children: p.map((g, w) => /* @__PURE__ */ R.jsxs("div", { className: Oe.listItem, children: [
    g.iconName && /* @__PURE__ */ R.jsx("div", { className: Oe.listItemIcon, children: /* @__PURE__ */ R.jsx(BE, { name: g.iconName, size: 18 }) }),
    /* @__PURE__ */ R.jsxs("div", { className: Oe.listItemContent, children: [
      /* @__PURE__ */ R.jsx("p", { className: Oe.listItemTitle, children: g.title }),
      g.subtitle && /* @__PURE__ */ R.jsx("p", { className: Oe.listItemSubtitle, children: g.subtitle })
    ] }),
    g.itemAction && /* @__PURE__ */ R.jsx("div", { className: Oe.listItemAction, children: /* @__PURE__ */ R.jsx(
      "button",
      {
        className: Oe.actionButton,
        onClick: () => f?.(g.itemAction.action),
        children: g.itemAction.label
      }
    ) })
  ] }, w)) })
] }), VO = ({ number: c, label: p }) => /* @__PURE__ */ R.jsxs("div", { className: Oe.stats, children: [
  /* @__PURE__ */ R.jsx("p", { className: Oe.statsNumber, children: c }),
  /* @__PURE__ */ R.jsx("p", { className: Oe.statsLabel, children: p })
] }), $O = ({
  title: c,
  label: p,
  child: f,
  renderComponent: g
}) => /* @__PURE__ */ R.jsxs("div", { className: Oe.profileTile, children: [
  f && /* @__PURE__ */ R.jsx("div", { className: Oe.profileIcon, children: g(f) }),
  /* @__PURE__ */ R.jsxs("div", { className: Oe.profileContent, children: [
    /* @__PURE__ */ R.jsx("p", { className: Oe.profileTitle, children: c }),
    p && /* @__PURE__ */ R.jsx("p", { className: Oe.profileLabel, children: p })
  ] })
] }), HO = ({
  lhs: c,
  rhs: p,
  renderComponent: f
}) => /* @__PURE__ */ R.jsxs("div", { className: Oe.miniCard, children: [
  /* @__PURE__ */ R.jsx("div", { className: Oe.miniCardLhs, children: f(c) }),
  p && /* @__PURE__ */ R.jsx("div", { className: Oe.miniCardRhs, children: f(p) })
] }), BO = ({
  children: c,
  renderComponent: p
}) => /* @__PURE__ */ R.jsx("div", { className: Oe.miniCardBlock, children: c.map((f, g) => /* @__PURE__ */ R.jsx(La.Fragment, { children: p(f) }, g)) }), qO = ({
  title: c,
  details: p,
  renderComponent: f
}) => /* @__PURE__ */ R.jsxs("div", { className: Oe.stepsItem, children: [
  /* @__PURE__ */ R.jsx("h4", { className: Oe.stepsTitle, children: c }),
  p && /* @__PURE__ */ R.jsx("div", { className: Oe.stepsDetails, children: f(p) })
] }), WO = ({
  children: c,
  renderComponent: p
}) => /* @__PURE__ */ R.jsx("div", { className: Oe.steps, children: c.map((f, g) => /* @__PURE__ */ R.jsx(La.Fragment, { children: p(f) }, g)) }), YO = ({
  isFoldable: c = !0,
  sections: p,
  renderComponent: f
}) => {
  const [g, w] = Re.useState(
    // If not foldable, expand all sections by default
    new Set(c ? [] : p.map((h) => h.value))
  ), C = (h) => {
    c && w((b) => {
      const x = new Set(b);
      return x.has(h) ? x.delete(h) : x.add(h), x;
    });
  };
  return /* @__PURE__ */ R.jsx("div", { className: Oe.sectionBlock, children: p.map((h) => {
    const b = g.has(h.value);
    return /* @__PURE__ */ R.jsxs(
      "div",
      {
        className: `${Oe.section} ${b ? Oe.expanded : ""}`,
        children: [
          /* @__PURE__ */ R.jsxs(
            "button",
            {
              className: Oe.sectionTrigger,
              onClick: () => C(h.value),
              type: "button",
              children: [
                /* @__PURE__ */ R.jsx("span", { children: h.trigger }),
                c && /* @__PURE__ */ R.jsx("span", { className: `${Oe.triggerIcon} ${b ? Oe.rotated : ""}`, children: /* @__PURE__ */ R.jsx(HE, { size: 16 }) })
              ]
            }
          ),
          (b || !c) && /* @__PURE__ */ R.jsx("div", { className: Oe.sectionContent, children: h.content.map((x, k) => /* @__PURE__ */ R.jsx(La.Fragment, { children: f(x) }, k)) })
        ]
      },
      h.value
    );
  }) });
}, GO = ({
  name: c,
  placeholder: p,
  value: f = "",
  type: g = "text",
  rules: w,
  onChange: C
}) => {
  const [h, b] = Re.useState(f), [x, k] = Re.useState(null), M = (U) => {
    const V = U.target.value;
    b(V), w?.required && !V ? k("This field is required") : w?.minLength && V.length < w.minLength ? k(`Minimum ${w.minLength} characters required`) : k(null), C?.(c, V);
  };
  return /* @__PURE__ */ R.jsx(
    "input",
    {
      type: g,
      name: c,
      placeholder: p,
      value: h,
      onChange: M,
      className: `${Oe.input} ${x ? Oe.error : ""}`
    }
  );
}, QO = ({
  name: c,
  placeholder: p,
  value: f = "",
  rows: g = 3,
  rules: w,
  onChange: C
}) => {
  const [h, b] = Re.useState(f), [x, k] = Re.useState(null), M = (U) => {
    const V = U.target.value;
    b(V), w?.required && !V ? k("This field is required") : w?.minLength && V.length < w.minLength ? k(`Minimum ${w.minLength} characters required`) : k(null), C?.(c, V);
  };
  return /* @__PURE__ */ R.jsx(
    "textarea",
    {
      name: c,
      placeholder: p,
      value: h,
      rows: g,
      onChange: M,
      className: `${Oe.textarea} ${x ? Oe.error : ""}`
    }
  );
}, KO = ({
  name: c,
  placeholder: p,
  value: f = "",
  options: g = [],
  onChange: w
}) => {
  const [C, h] = Re.useState(f), b = (k) => {
    const M = k.target.value;
    h(M), w?.(c, M);
  }, x = g && Array.isArray(g) ? g : [];
  return /* @__PURE__ */ R.jsxs(
    "select",
    {
      name: c,
      value: C,
      onChange: b,
      className: Oe.select,
      children: [
        p && /* @__PURE__ */ R.jsx("option", { value: "", children: p }),
        x.map((k) => /* @__PURE__ */ R.jsx("option", { value: k.value, children: k.label }, k.value))
      ]
    }
  );
}, XO = ({
  name: c,
  label: p,
  checked: f = !1,
  onChange: g
}) => {
  const [w, C] = Re.useState(f), h = (b) => {
    const x = b.target.checked;
    C(x), g?.(c, x);
  };
  return /* @__PURE__ */ R.jsxs("div", { className: Oe.checkboxWrapper, children: [
    /* @__PURE__ */ R.jsx(
      "input",
      {
        type: "checkbox",
        id: c,
        name: c,
        checked: w,
        onChange: h
      }
    ),
    /* @__PURE__ */ R.jsx("label", { htmlFor: c, children: p })
  ] });
}, JO = ({
  name: c,
  options: p = [],
  children: f,
  value: g = "",
  onChange: w
}) => {
  const [C, h] = Re.useState(g), b = (x) => {
    h(x), w?.(c, x);
  };
  return f && Array.isArray(f) && f.length > 0 ? /* @__PURE__ */ R.jsx("div", { className: Oe.radioGroup, children: f.map((x, k) => {
    const M = x;
    if (M.component === "RadioItem" && M.props) {
      const { value: U, label: V } = M.props, $ = U || `item-${k}`;
      return /* @__PURE__ */ R.jsxs("div", { className: Oe.radioWrapper, children: [
        /* @__PURE__ */ R.jsx(
          "input",
          {
            type: "radio",
            id: `${c}-${$}`,
            name: c,
            value: $,
            checked: C === $,
            onChange: () => b($)
          }
        ),
        /* @__PURE__ */ R.jsx("label", { htmlFor: `${c}-${$}`, children: V || $ })
      ] }, $);
    }
    return null;
  }) }) : !p || !Array.isArray(p) || p.length === 0 ? /* @__PURE__ */ R.jsx("div", { className: Oe.radioGroup, children: "No options available" }) : /* @__PURE__ */ R.jsx("div", { className: Oe.radioGroup, children: p.map((x) => /* @__PURE__ */ R.jsxs("div", { className: Oe.radioWrapper, children: [
    /* @__PURE__ */ R.jsx(
      "input",
      {
        type: "radio",
        id: `${c}-${x.value}`,
        name: c,
        value: x.value,
        checked: C === x.value,
        onChange: () => b(x.value)
      }
    ),
    /* @__PURE__ */ R.jsx("label", { htmlFor: `${c}-${x.value}`, children: x.label })
  ] }, x.value)) });
}, ZO = ({
  name: c,
  options: p = [],
  children: f,
  values: g = [],
  onChange: w
}) => {
  const [C, h] = Re.useState(g), b = (x, k) => {
    const M = k ? [...C, x] : C.filter((U) => U !== x);
    h(M), w?.(c, M);
  };
  return f && Array.isArray(f) && f.length > 0 ? /* @__PURE__ */ R.jsx("div", { className: Oe.checkboxGroup, children: f.map((x, k) => {
    const M = x;
    if (M.component === "CheckBoxItem" && M.props) {
      const { name: U, label: V } = M.props, $ = U || `item-${k}`;
      return /* @__PURE__ */ R.jsxs("div", { className: Oe.checkboxWrapper, children: [
        /* @__PURE__ */ R.jsx(
          "input",
          {
            type: "checkbox",
            id: `${c}-${$}`,
            name: c,
            value: $,
            checked: C.includes($),
            onChange: (Z) => b($, Z.target.checked)
          }
        ),
        /* @__PURE__ */ R.jsx("label", { htmlFor: `${c}-${$}`, children: V || $ })
      ] }, $);
    }
    return null;
  }) }) : !p || !Array.isArray(p) || p.length === 0 ? /* @__PURE__ */ R.jsx("div", { className: Oe.checkboxGroup, children: "No options available" }) : /* @__PURE__ */ R.jsx("div", { className: Oe.checkboxGroup, children: p.map((x) => /* @__PURE__ */ R.jsxs("div", { className: Oe.checkboxWrapper, children: [
    /* @__PURE__ */ R.jsx(
      "input",
      {
        type: "checkbox",
        id: `${c}-${x.value}`,
        name: c,
        value: x.value,
        checked: C.includes(x.value),
        onChange: (k) => b(x.value, k.target.checked)
      }
    ),
    /* @__PURE__ */ R.jsx("label", { htmlFor: `${c}-${x.value}`, children: x.label })
  ] }, x.value)) });
}, eD = ({
  name: c,
  placeholder: p,
  value: f = "",
  min: g,
  max: w,
  onChange: C
}) => {
  const [h, b] = Re.useState(f), x = (k) => {
    const M = k.target.value;
    b(M), C?.(c, M);
  };
  return /* @__PURE__ */ R.jsx(
    "input",
    {
      type: "date",
      name: c,
      placeholder: p,
      value: h,
      min: g,
      max: w,
      onChange: x,
      className: Oe.input
    }
  );
}, tD = ({
  label: c,
  hint: p,
  children: f,
  renderComponent: g
}) => /* @__PURE__ */ R.jsxs("div", { className: Oe.formField, children: [
  c && /* @__PURE__ */ R.jsx("label", { className: Oe.fieldLabel, children: c }),
  g(f),
  p && /* @__PURE__ */ R.jsx("span", { className: Oe.fieldHint, children: p })
] }), nD = ({
  name: c,
  children: p,
  buttons: f,
  onAction: g,
  renderComponent: w
}) => {
  const [C, h] = Re.useState({}), b = Re.useCallback((k, M) => {
    h((U) => ({ ...U, [k]: M }));
  }, []), x = (k) => {
    k.preventDefault(), g ? g({ type: "submit_form", props: { formName: c, formData: C } }, C) : console.warn("Form onAction is not defined");
  };
  return /* @__PURE__ */ R.jsxs("form", { className: Oe.form, onSubmit: x, name: c, children: [
    p.map((k, M) => /* @__PURE__ */ R.jsx(
      tD,
      {
        label: k.label,
        hint: k.hint,
        children: {
          ...k.children,
          props: {
            ...k.children.props,
            onChange: b
          }
        },
        renderComponent: w
      },
      M
    )),
    f && w(f)
  ] });
}, rD = ({
  name: c = "radio",
  value: p,
  label: f,
  checked: g = !1,
  onChange: w
}) => {
  const [C, h] = Re.useState(g), b = (x) => {
    const k = x.target.checked;
    h(k), k && w && w(c, p);
  };
  return /* @__PURE__ */ R.jsxs("div", { className: Oe.radioWrapper, children: [
    /* @__PURE__ */ R.jsx(
      "input",
      {
        type: "radio",
        id: `${c}-${p}`,
        name: c,
        value: p,
        checked: C,
        onChange: b
      }
    ),
    /* @__PURE__ */ R.jsx("label", { htmlFor: `${c}-${p}`, children: f })
  ] });
}, aD = ({
  name: c = "checkbox",
  value: p,
  label: f,
  checked: g = !1,
  onChange: w
}) => {
  const [C, h] = Re.useState(g), b = (x) => {
    const k = x.target.checked;
    h(k), w && w(c, p, k);
  };
  return /* @__PURE__ */ R.jsxs("div", { className: Oe.checkboxWrapper, children: [
    /* @__PURE__ */ R.jsx(
      "input",
      {
        type: "checkbox",
        id: `${c}-${p}`,
        name: c,
        value: p,
        checked: C,
        onChange: b
      }
    ),
    /* @__PURE__ */ R.jsx("label", { htmlFor: `${c}-${p}`, children: f })
  ] });
}, qE = ({
  component: c,
  onAction: p
}) => {
  const f = Re.useCallback((g) => {
    if (!g || !g.component)
      return console.warn("Invalid component definition:", g), null;
    const { component: w, props: C } = g, h = { ...C, onAction: p };
    switch (w) {
      // Basic Components
      case "Icon":
        return /* @__PURE__ */ R.jsx(BE, { ...h });
      case "Header":
        return /* @__PURE__ */ R.jsx(jO, { ...h });
      case "TextContent":
        return /* @__PURE__ */ R.jsx(UO, { ...h });
      // Button Components
      case "Button":
        return /* @__PURE__ */ R.jsx(zO, { ...h });
      case "ButtonGroup":
        return /* @__PURE__ */ R.jsx(
          PO,
          {
            ...h,
            renderComponent: f
          }
        );
      // Layout Components
      case "Card":
        return /* @__PURE__ */ R.jsx(
          IO,
          {
            ...h,
            renderComponent: f
          }
        );
      // List Component
      case "List":
        return /* @__PURE__ */ R.jsx(FO, { ...h });
      // Stats Component
      case "Stats":
        return /* @__PURE__ */ R.jsx(VO, { ...h });
      // ProfileTile Component
      case "ProfileTile":
        return /* @__PURE__ */ R.jsx(
          $O,
          {
            ...h,
            renderComponent: f
          }
        );
      // MiniCard Components
      case "MiniCard":
        return /* @__PURE__ */ R.jsx(
          HO,
          {
            ...h,
            renderComponent: f
          }
        );
      case "MiniCardBlock":
        return /* @__PURE__ */ R.jsx(
          BO,
          {
            ...h,
            renderComponent: f
          }
        );
      // Steps Components
      case "Steps":
        return /* @__PURE__ */ R.jsx(
          WO,
          {
            ...h,
            renderComponent: f
          }
        );
      case "StepsItem":
        return /* @__PURE__ */ R.jsx(
          qO,
          {
            ...h,
            renderComponent: f
          }
        );
      // Section Components
      case "SectionBlock":
        return /* @__PURE__ */ R.jsx(
          YO,
          {
            ...h,
            renderComponent: f
          }
        );
      // Form Components
      case "Form":
        return /* @__PURE__ */ R.jsx(
          nD,
          {
            ...h,
            renderComponent: f
          }
        );
      case "Input":
        return /* @__PURE__ */ R.jsx(GO, { ...h });
      case "TextArea":
        return /* @__PURE__ */ R.jsx(QO, { ...h });
      case "Select":
        return /* @__PURE__ */ R.jsx(KO, { ...h });
      case "Checkbox":
        return /* @__PURE__ */ R.jsx(XO, { ...h });
      case "RadioGroup":
        return /* @__PURE__ */ R.jsx(JO, { ...h });
      case "CheckBoxGroup":
        return /* @__PURE__ */ R.jsx(ZO, { ...h });
      case "DatePicker":
        return /* @__PURE__ */ R.jsx(eD, { ...h });
      case "RadioItem":
        return /* @__PURE__ */ R.jsx(rD, { ...h });
      case "CheckBoxItem":
        return /* @__PURE__ */ R.jsx(aD, { ...h });
      default:
        return console.warn(`Unknown component: ${w}`), /* @__PURE__ */ R.jsxs("div", { style: {
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
  return /* @__PURE__ */ R.jsx(R.Fragment, { children: f(c) });
};
function WE(c) {
  try {
    const p = c.indexOf('<content thesys="true">');
    if (p === -1)
      return dE(c);
    const f = c.substring(p + 23), g = f.indexOf("</content>");
    let w = g !== -1 ? f.substring(0, g).trim() : f.trim();
    w = w.replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39;/g, "'").replace(/&apos;/g, "'");
    try {
      const C = JSON.parse(w);
      if (C.component)
        return C;
    } catch {
      return oD(w);
    }
    return dE(c);
  } catch (p) {
    return console.error("parseStreamingGenUI - Error:", p), null;
  }
}
function oD(c) {
  let p = null, f = -1, g = -1;
  const w = /"component"\s*:\s*"([^"]+)"/g;
  let C;
  for (; (C = w.exec(c)) !== null; ) {
    const h = c.substring(0, C.index), b = (h.match(/\{/g) || []).length - (h.match(/\}/g) || []).length;
    b >= 1 && b > g && (p = C, f = C.index, g = b);
  }
  if (p && p[1]) {
    const h = p[1], x = c.substring(f + p[0].length).match(/"props"\s*:\s*\{([\s\S]*?)(\}|$)/);
    let k = {};
    if (x && x[1]) {
      const M = x[1], U = /"([^"]+)"\s*:\s*"([^"]*)"|"([^"]+)"\s*:\s*(\d+|true|false|null)/g;
      let V;
      for (; (V = U.exec(M)) !== null; ) {
        const $ = V[1] || V[3], Z = V[2] || V[4];
        $ && (k[$] = Z === "true" ? !0 : Z === "false" ? !1 : Z === "null" ? null : Z);
      }
      M.includes('"children"') && M.includes("[") && (k.children = []);
    }
    return {
      component: {
        component: h,
        props: k
      },
      error: null
    };
  }
  return null;
}
function dE(c) {
  if (c.trim().startsWith("{"))
    try {
      const p = JSON.parse(c);
      if (p.component)
        return p;
    } catch {
      const f = c.match(/"component"\s*:\s*"([^"]+)"/);
      return f && f[1] ? {
        component: {
          component: f[1],
          props: {}
        },
        error: null
      } : null;
    }
  return null;
}
const iD = ({
  content: c,
  isStreaming: p,
  onAction: f
}) => {
  const [g, w] = Re.useState(null);
  return Re.useEffect(() => {
    if (!c) {
      w(null);
      return;
    }
    const C = WE(c);
    if (C?.component) {
      const h = C.component;
      if (h && typeof h == "object" && "component" in h) {
        const b = h.component, x = h.props || {};
        typeof b == "string" ? w({
          component: b,
          props: x
        }) : b && typeof b == "object" && "component" in b && w(b);
      }
    }
  }, [c]), g ? /* @__PURE__ */ R.jsxs("div", { className: Oe.streamingContainer, children: [
    p && /* @__PURE__ */ R.jsx("div", { className: Oe.streamingIndicator, children: /* @__PURE__ */ R.jsx("span", { children: "Building interface..." }) }),
    /* @__PURE__ */ R.jsx(qE, { component: g, onAction: f })
  ] }) : p ? /* @__PURE__ */ R.jsx("div", { className: Oe.streamingContainer, children: /* @__PURE__ */ R.jsxs("div", { className: Oe.skeletonLoader, children: [
    /* @__PURE__ */ R.jsx("div", { className: Oe.skeletonShimmer }),
    /* @__PURE__ */ R.jsx("span", { children: "Generating interface..." })
  ] }) }) : null;
};
function lD(c) {
  const p = {
    "&quot;": '"',
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&nbsp;": " "
  };
  return c.replace(/&(?:quot|amp|lt|gt|apos|#39|nbsp);/g, (f) => p[f] || f);
}
function uD(c) {
  try {
    const p = c.match(/<content\s+thesys="true">([\s\S]*?)<\/content>/);
    if (p && p[1]) {
      const f = lD(p[1].trim());
      return JSON.parse(f);
    }
    if (c.trim().startsWith("{")) {
      const f = JSON.parse(c);
      if (f.component)
        return f;
    }
    return null;
  } catch (p) {
    return console.error("Failed to parse GenUI response:", p), null;
  }
}
function sD(c) {
  return !!(c.includes('<content thesys="true">') || c.trim().startsWith("{") && c.includes('"component"'));
}
function cD(c) {
  const p = c.indexOf('<content thesys="true">');
  return p > 0 ? c.substring(0, p).trim() : "";
}
const fD = ({
  message: c,
  onAction: p,
  onUpdateMessage: f
}) => {
  const g = c.role === "user", w = c.role === "assistant", C = Re.useMemo(() => c.content ? sD(c.content) : !1, [c.content]), h = Re.useMemo(() => {
    if (!c.content) return null;
    if (C) {
      if (c.isStreaming) {
        const M = WE(c.content);
        return M?.component ? M : null;
      }
      return uD(c.content);
    }
    return null;
  }, [c.content, c.isStreaming, C]), b = Re.useMemo(() => c.content ? cD(c.content) : "", [c.content]), x = Re.useCallback((M, U) => {
    if (!p) return;
    const V = {
      type: M.type,
      params: {
        ...M.props,
        formData: U
      }
    };
    console.log("event", V), console.log("formData", U), p(V);
  }, [p]), k = () => C ? /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    b && /* @__PURE__ */ R.jsx("div", { className: vl.textContent, children: b }),
    /* @__PURE__ */ R.jsx(
      iD,
      {
        content: c.content,
        isStreaming: c.isStreaming || !1,
        onAction: x
      }
    )
  ] }) : h?.component ? /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    b && /* @__PURE__ */ R.jsx("div", { className: vl.textContent, children: b }),
    /* @__PURE__ */ R.jsx(
      qE,
      {
        component: h.component,
        onAction: x
      }
    )
  ] }) : /* @__PURE__ */ R.jsx("div", { className: vl.textContent, children: c.content || (c.isStreaming ? "" : "No response") });
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      className: `${vl.messageContainer} ${g ? vl.user : vl.assistant}`,
      children: g ? /* @__PURE__ */ R.jsx("div", { className: vl.userMessage, children: /* @__PURE__ */ R.jsx("p", { children: c.content }) }) : w ? /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
        /* @__PURE__ */ R.jsx("div", { className: vl.assistantAvatar, children: /* @__PURE__ */ R.jsx("img", { src: p_, alt: "Orbiter" }) }),
        /* @__PURE__ */ R.jsxs("div", { className: vl.assistantMessage, children: [
          c.isStreaming && !c.content && /* @__PURE__ */ R.jsxs("div", { className: vl.streamingIndicator, children: [
            /* @__PURE__ */ R.jsx("span", {}),
            /* @__PURE__ */ R.jsx("span", {}),
            /* @__PURE__ */ R.jsx("span", {})
          ] }),
          k()
        ] })
      ] }) : null
    }
  );
}, dD = "_overlay_271nu_1", pD = "_modal_271nu_21", vD = "_header_271nu_42", hD = "_closeButton_271nu_55", mD = "_selectedInfo_271nu_77", yD = "_inputGroup_271nu_99", gD = "_actions_271nu_130", _D = "_cancelBtn_271nu_136", SD = "_confirmBtn_271nu_137", su = {
  overlay: dD,
  modal: pD,
  header: vD,
  closeButton: hD,
  selectedInfo: mD,
  inputGroup: yD,
  actions: gD,
  cancelBtn: _D,
  confirmBtn: SD
}, CD = ({
  isOpen: c,
  onClose: p,
  humanFriendlyMessage: f,
  llmFriendlyMessage: g,
  onConfirm: w
}) => {
  const [C, h] = Re.useState(g);
  if (Re.useEffect(() => {
    h(g);
  }, [g]), Re.useEffect(() => {
    const x = (k) => {
      k.key === "Escape" && p();
    };
    if (c)
      return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [c, p]), !c) return null;
  const b = (x) => {
    x.preventDefault(), C.trim() && w(C.trim());
  };
  return /* @__PURE__ */ R.jsx("div", { className: su.overlay, onClick: p, children: /* @__PURE__ */ R.jsxs("div", { className: su.modal, onClick: (x) => x.stopPropagation(), children: [
    /* @__PURE__ */ R.jsxs("div", { className: su.header, children: [
      /* @__PURE__ */ R.jsx("h2", { children: "Edit Your Response" }),
      /* @__PURE__ */ R.jsx("button", { className: su.closeButton, onClick: p, children: /* @__PURE__ */ R.jsx(
        "svg",
        {
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          children: /* @__PURE__ */ R.jsx("path", { d: "M18 6L6 18M6 6l12 12" })
        }
      ) })
    ] }),
    /* @__PURE__ */ R.jsxs("form", { onSubmit: b, children: [
      /* @__PURE__ */ R.jsxs("div", { className: su.selectedInfo, children: [
        /* @__PURE__ */ R.jsx("label", { children: "Your Selection" }),
        /* @__PURE__ */ R.jsx("p", { children: f })
      ] }),
      /* @__PURE__ */ R.jsxs("div", { className: su.inputGroup, children: [
        /* @__PURE__ */ R.jsx("label", { htmlFor: "editMessage", children: "Edit message before sending:" }),
        /* @__PURE__ */ R.jsx(
          "textarea",
          {
            id: "editMessage",
            value: C,
            onChange: (x) => h(x.target.value),
            placeholder: "Edit your message...",
            rows: 4,
            autoFocus: !0
          }
        )
      ] }),
      /* @__PURE__ */ R.jsxs("div", { className: su.actions, children: [
        /* @__PURE__ */ R.jsx("button", { type: "button", className: su.cancelBtn, onClick: p, children: "Cancel" }),
        /* @__PURE__ */ R.jsx(
          "button",
          {
            type: "submit",
            className: su.confirmBtn,
            disabled: !C.trim(),
            children: "Send Message"
          }
        )
      ] })
    ] })
  ] }) });
}, pE = {
  SUGGEST_PEOPLE: "create_suggestion_request",
  HELP_WITH_TASK: "add_assistant_message"
}, YE = (c, p) => ({
  component: {
    component: "Card",
    props: {
      children: [
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
                  selected: p === pE.SUGGEST_PEOPLE,
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
                  selected: p === pE.HELP_WITH_TASK,
                  action: {
                    type: "add_assistant_message",
                    props: {
                      chatKey: c.full_name,
                      componentData: {
                        component: {
                          component: "Card",
                          props: {
                            children: [
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
}), vE = (c) => ({
  component: {
    component: "Card",
    props: {
      children: [
        {
          component: "Header",
          props: {
            title: `${c.request_header_title}`
          }
        },
        {
          component: "TextContent",
          props: {
            textMarkdown: `${c.request_context || ""}`
          }
        }
        // {
        //   component: "ButtonGroup",
        //   props: {
        //     variant: "vertical",
        //     children: [
        //       {
        //         component: "Button",
        //         props: {
        //           children: "Help " + suggestionRequest.master_person?.name + " with a specific task",
        //           variant: "secondary",
        //           action: {
        //             type: "add_assistant_message",
        //             props: {
        //               chatKey: suggestionRequest.request_panel_title,
        //               componentData: {
        //                 component: {
        //                   component: "Card",
        //                   props: {
        //                     children: [
        //                       {
        //                         component: "TextContent",
        //                         props: {
        //                           textMarkdown: "Tell me what kind of assistance you'd like to provide to **" + suggestionRequest.master_person?.name + "**. For example:\n\n- Make an introduction to someone in your network\n- Share relevant resources or information\n- Offer advice or expertise in a specific area\n- Connect them with an opportunity\n\nType your response below and I'll help you plan the best approach."
        //                         }
        //                       }
        //                     ]
        //                   }
        //                 },
        //                 error: null
        //               }
        //             }
        //           }
        //         }
        //       }
        //     ]
        //   }
        // }
      ]
    }
  },
  error: null
}), hE = (c) => `<content thesys="true">${JSON.stringify({ component: c, error: null })}</content>`, mE = () => `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, yE = (c, p, f, g) => {
  const { leverageLoopChats: w, selectedPerson: C } = Zo.getState(), h = w[c];
  if (!h || !C) return;
  const b = h.messages.find(
    (x) => x.role === "assistant" && x.content.includes("ButtonGroup")
  );
  if (b) {
    const x = `<content thesys="true">${JSON.stringify(
      YE(C, p)
    )}</content>`;
    g(f, b.id, x, !1, c);
  }
}, ED = (c) => {
  const { sendMessage: p, setPendingAction: f, setIsModalOpen: g, context: w, addMessage: C, updateMessage: h } = c;
  return (b) => {
    switch (console.log("Action received:", b), b.type) {
      case "continue_conversation":
        if (b.params) {
          const { humanFriendlyMessage: x, llmFriendlyMessage: k, prompt: M } = b.params;
          M ? p(M) : x && k && (f({
            humanFriendlyMessage: x,
            llmFriendlyMessage: k
          }), g(!0));
        }
        break;
      case "open_url":
        b.params?.url && window.open(b.params.url, "_blank", "noopener,noreferrer");
        break;
      case "submit_form":
        if (b.params?.formData) {
          const x = b.params.formData, k = b.params.formName || "form", M = Object.entries(x).filter(([V, $]) => $ !== void 0 && $ !== "").map(([V, $]) => `${V.replace(/_/g, " ")}: ${$}`).join(`
`), U = `Form submitted: ${k}

${M}`;
          console.log("Sending form data to LLM:", U), p(U);
        }
        break;
      case "add_assistant_message":
        if (b.params?.content || b.params?.componentData) {
          const x = mE(), k = b.params.chatKey;
          k && (Zo.getState().setSelectedAction(k, "add_assistant_message"), yE(k, "add_assistant_message", w, h));
          let M;
          b.params.componentData ? M = `<content thesys="true">${JSON.stringify(b.params.componentData)}</content>` : M = b.params.content, C(w, {
            id: x,
            role: "assistant",
            content: M,
            timestamp: /* @__PURE__ */ new Date(),
            isStreaming: !1
          }, k);
        }
        break;
      case "create_suggestion_request":
        if (b.params) {
          const { personName: x, personTitle: k, companyName: M, masterPersonId: U, chatKey: V } = b.params;
          V && (Zo.getState().setSelectedAction(V, "create_suggestion_request"), yE(V, "create_suggestion_request", w, h));
          const { user_id: $ } = ar.getState(), Z = {
            request_panel_title: `Suggestion Request for ${x}`,
            request_header_title: `People to introduce to ${x}`,
            request_context: `Find people from my network to introduce to ${x}, who is ${k} at ${M}`,
            status: "processing",
            user_id: $,
            copilot_mode: "loop",
            master_person_id: U
          }, J = mE();
          C(w, {
            id: J,
            role: "assistant",
            content: hE({
              component: "Card",
              props: {
                children: [{
                  component: "TextContent",
                  props: { textMarkdown: `⏳ Creating suggestion request for **${x}**...` }
                }]
              }
            }),
            timestamp: /* @__PURE__ */ new Date(),
            isStreaming: !1
          }, V), du.getState().createSuggestionRequest(Z).then(() => {
            const { createSuggestionRequestError: Se } = du.getState();
            if (Se) {
              const Ce = hE({
                component: "Card",
                props: {
                  children: [{
                    component: "TextContent",
                    props: { textMarkdown: `❌ Failed: ${Se}` }
                  }]
                }
              });
              h(w, J, Ce, !1, V);
            }
            if (!Se) {
              const { setSelectedPerson: Ce, setSelectedSuggestionRequest: xe } = Zo.getState();
              Ce(null), xe(null);
            }
          });
        }
        break;
      default:
        console.log("Unhandled action type:", b.type);
    }
  };
}, xD = {
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
  CheckBoxGroup: { allowed: !0, description: "Checkbox group for multiple selection" },
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
}, bD = () => Object.entries(xD).filter(([c, p]) => p.allowed).map(([c]) => c), wD = () => `You can use these GenUI components: ${bD().join(", ")}. Do not use any other components. Keep the interface simple and avoid unnecessary complexity.`, RD = "_chatContainer_1ll1c_1", kD = "_messagesContainer_1ll1c_31", TD = "_emptyState_1ll1c_50", ND = "_copilotEmptyState_1ll1c_61", MD = "_logo_1ll1c_70", OD = "_welcomeMessage_1ll1c_77", DD = "_welcomeGreeting_1ll1c_83", LD = "_welcomeSubtext_1ll1c_93", jD = "_leverageLoopSummary_1ll1c_114", AD = "_summaryCard_1ll1c_119", UD = "_summaryCardHeader_1ll1c_130", zD = "_summaryCardTitle_1ll1c_137", PD = "_summaryCardInput_1ll1c_157", ID = "_summaryTextarea_1ll1c_162", FD = "_summaryCardButton_1ll1c_184", VD = "_playIcon_1ll1c_212", $D = "_loader_1ll1c_217", Cn = {
  chatContainer: RD,
  messagesContainer: kD,
  emptyState: TD,
  copilotEmptyState: ND,
  logo: MD,
  welcomeMessage: OD,
  welcomeGreeting: DD,
  welcomeSubtext: LD,
  leverageLoopSummary: jD,
  summaryCard: AD,
  summaryCardHeader: UD,
  summaryCardTitle: zD,
  summaryCardInput: PD,
  summaryTextarea: ID,
  summaryCardButton: FD,
  playIcon: VD,
  loader: $D
}, HD = ({
  onSendMessage: c,
  isLoading: p
}) => {
  const [f, g] = Re.useState(""), [w, C] = Re.useState(!1), { selectedPerson: h, selectedSuggestionRequest: b, draftSuggestionRequest: x, leverageLoopSummaries: k, upsertLeverageLoopSummary: M } = Zo(
    Jo((J) => ({
      selectedPerson: J.selectedPerson,
      selectedSuggestionRequest: J.selectedSuggestionRequest,
      draftSuggestionRequest: J.draftSuggestionRequest,
      leverageLoopSummaries: J.leverageLoopSummaries,
      upsertLeverageLoopSummary: J.upsertLeverageLoopSummary
    }))
  ), U = x || b;
  Re.useEffect(() => {
    let J = null;
    if (h ? J = h.full_name : b && (J = b.request_header_title), J) {
      const Se = k.find((Ce) => Ce.id === J);
      g(Se?.content || "");
    } else
      g("");
  }, [h, b, k]);
  const V = () => h ? `Leverage loop summary for ${h.full_name}` : b ? b.request_header_title : "Leverage Loops", $ = async () => {
    if (f.trim() && U?.id) {
      C(!0);
      try {
        await du.getState().updateSuggestionRequest(
          U.id,
          { ...U, request_context: f.trim(), status: "submitted" }
        );
      } finally {
        C(!1);
      }
    }
  }, Z = (J) => {
    g(J.target.value), h && M({ id: h.full_name, content: J.target.value, timestamp: /* @__PURE__ */ new Date() }), b && M({ id: b.request_header_title, content: J.target.value, timestamp: /* @__PURE__ */ new Date() });
  };
  return /* @__PURE__ */ R.jsx("div", { className: Cn.leverageLoopSummary, children: /* @__PURE__ */ R.jsxs("div", { className: Cn.summaryCard, children: [
    /* @__PURE__ */ R.jsxs("div", { className: Cn.summaryCardHeader, children: [
      /* @__PURE__ */ R.jsx("p", { className: Cn.summaryCardTitle, children: V() }),
      /* @__PURE__ */ R.jsx(
        "button",
        {
          className: Cn.summaryCardButton,
          onClick: $,
          disabled: !f.trim() || p || w,
          children: w ? /* @__PURE__ */ R.jsx("span", { className: Cn.loader }) : /* @__PURE__ */ R.jsx("span", { className: Cn.playIcon, children: "▶" })
        }
      )
    ] }),
    /* @__PURE__ */ R.jsx("div", { className: Cn.summaryCardInput, children: /* @__PURE__ */ R.jsx(
      "textarea",
      {
        className: Cn.summaryTextarea,
        placeholder: "Summary of what I can help you with...",
        value: f,
        onChange: (J) => Z(J),
        rows: 2
      }
    ) })
  ] }) });
}, BD = ({
  onSendMessage: c,
  isLoading: p
}) => {
  const [f, g] = Re.useState(""), [w, C] = Re.useState(!1), { selectedSuggestionRequest: h, draftSuggestionRequest: b, outcomesSummaries: x, upsertOutcomesSummary: k } = Zo(
    Jo((Z) => ({
      selectedSuggestionRequest: Z.selectedSuggestionRequest,
      draftSuggestionRequest: Z.draftSuggestionRequest,
      outcomesSummaries: Z.outcomesSummaries,
      upsertOutcomesSummary: Z.upsertOutcomesSummary
    }))
  ), M = b || h;
  Re.useEffect(() => {
    let Z = "outcomes-summary";
    if (h && (Z = h.request_panel_title || h.request_header_title), Z) {
      const J = x.find((Se) => Se.id === Z);
      g(J?.content || "");
    } else
      g("");
  }, [h, x]);
  const U = () => h ? h.request_panel_title || h.request_header_title || "Outcome Summary" : "Create an Outcome:", V = async () => {
    if (f.trim() && M?.id) {
      C(!0);
      try {
        await du.getState().updateSuggestionRequest(
          M.id,
          { ...M, request_context: f.trim(), status: "submitted" }
        );
      } finally {
        C(!1);
      }
    }
  }, $ = (Z) => {
    if (g(Z.target.value), h) {
      const J = h.request_panel_title || h.request_header_title;
      J && k({ id: J, content: Z.target.value, timestamp: /* @__PURE__ */ new Date() });
    }
  };
  return /* @__PURE__ */ R.jsx("div", { className: Cn.leverageLoopSummary, children: /* @__PURE__ */ R.jsxs("div", { className: Cn.summaryCard, children: [
    /* @__PURE__ */ R.jsxs("div", { className: Cn.summaryCardHeader, children: [
      /* @__PURE__ */ R.jsx("p", { className: Cn.summaryCardTitle, children: U() }),
      /* @__PURE__ */ R.jsx(
        "button",
        {
          className: Cn.summaryCardButton,
          onClick: V,
          disabled: !f.trim() || p || w,
          children: w ? /* @__PURE__ */ R.jsx("span", { className: Cn.loader }) : /* @__PURE__ */ R.jsx("span", { className: Cn.playIcon, children: "▶" })
        }
      )
    ] }),
    /* @__PURE__ */ R.jsx("div", { className: Cn.summaryCardInput, children: /* @__PURE__ */ R.jsx(
      "textarea",
      {
        className: Cn.summaryTextarea,
        value: f,
        onChange: (Z) => $(Z),
        rows: 2
      }
    ) })
  ] }) });
}, qD = ({
  greeting: c,
  subtext: p
}) => {
  const { user_name: f } = ar(
    Jo((b) => ({
      user_name: b.user_name
    }))
  ), g = () => {
    const b = (/* @__PURE__ */ new Date()).getHours();
    return b < 12 ? "Ready to make today legendary?" : b < 18 ? "Afternoon power move—let's go!" : "Still crushing it? I like your style.";
  }, C = c || `Let's get after it, ${f || "there"}`, h = p || g();
  return /* @__PURE__ */ R.jsxs("div", { className: Cn.copilotEmptyState, children: [
    /* @__PURE__ */ R.jsx("img", { src: p_, alt: "Orbiter Logo", className: Cn.logo }),
    /* @__PURE__ */ R.jsxs("div", { className: Cn.welcomeMessage, children: [
      /* @__PURE__ */ R.jsx("h2", { className: Cn.welcomeGreeting, children: C }),
      /* @__PURE__ */ R.jsx("p", { className: Cn.welcomeSubtext, children: h })
    ] })
  ] });
}, cu = () => `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, v_ = ({
  context: c,
  systemPrompt: p,
  showComposer: f = !0
}) => {
  const g = () => c === "outcomes" ? "Describe your goal ..." : "Ask anything ...", [w, C] = Re.useState(g), {
    chatState: h,
    addMessage: b,
    updateMessage: x,
    setIsLoading: k,
    upsertLeverageLoopSummary: M,
    upsertOutcomesSummary: U,
    selectedPerson: V,
    selectedSuggestionRequest: $
  } = Zo(
    Jo((ue) => ({
      chatState: c === "leverage-loops" ? ue.getCurrentLeverageLoopChat() : c === "outcomes" ? ue.getCurrentOutcomesChat() : ue.copilotChat,
      addMessage: ue.addMessage,
      updateMessage: ue.updateMessage,
      setIsLoading: ue.setIsLoading,
      upsertLeverageLoopSummary: ue.upsertLeverageLoopSummary,
      upsertOutcomesSummary: ue.upsertOutcomesSummary,
      selectedPerson: ue.selectedPerson,
      selectedSuggestionRequest: ue.selectedSuggestionRequest
    }))
  );
  function Z(ue, ye = !1) {
    let ee = ue, Me = null;
    ee = ee.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    const me = ee.match(/\[SUGGESTION_REQUEST\](.*?)\[\/SUGGESTION_REQUEST\]/s);
    if (me && me[1]) {
      try {
        const $e = me[1].trim().replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&#39;/g, "'");
        Me = JSON.parse($e), ye && (c === "leverage-loops" ? du.getState().prependSuggestionRequest(Me) : c === "outcomes" && du.getState().prependOutcomesSuggestionRequest(Me), Zo.getState().setDraftSuggestionRequest(Me));
      } catch ($e) {
        console.error("Failed to parse suggestion request JSON:", $e);
      }
      ee = ee.replace(/\[SUGGESTION_REQUEST\].*?\[\/SUGGESTION_REQUEST\]/s, "");
    }
    const F = ee.match(/\[SUMMARY\](.*?)\[\/SUMMARY\]/s);
    if (F && F[1]) {
      const $e = F[1].trim();
      ee = ee.replace(/\[SUMMARY\].*?\[\/SUMMARY\]/s, ""), $e && c === "leverage-loops" && J($e), $e && c === "outcomes" && Se($e);
    }
    const te = ee.match(/<content\s+thesys="true">([\s\S]*?)<\/content>/g);
    if (te && te.length > 0) {
      const $e = te[te.length - 1];
      $e && (ee = $e);
    }
    return {
      cleanContent: ee.trim(),
      suggestionData: Me
    };
  }
  const J = Re.useCallback((ue) => {
    if (c == "copilot") return;
    let ye = null;
    V ? ye = V.full_name : $ && (ye = $.request_header_title), ye && ue && M({
      id: ye,
      content: ue,
      timestamp: /* @__PURE__ */ new Date()
    });
  }, [c, V, $, M]), Se = Re.useCallback((ue) => {
    c != "copilot" && U({
      id: "outcomes-summary",
      content: ue,
      timestamp: /* @__PURE__ */ new Date()
    });
  }, [c, U]), { messages: Ce, threadId: xe, isLoading: Ee } = h;
  Re.useEffect(() => {
    Ce.length >= 3 && Ce[2]?.role === "assistant" ? C("Reply ...") : C(c === "outcomes" ? "Describe your goal ..." : "Ask anything ...");
  }, [c, Ce]);
  const De = c === "leverage-loops" && Ce.length > 1, ae = c === "outcomes", [Ie, Te] = La.useState(!1), [Ve, Ye] = La.useState(null), Ze = Re.useRef(null);
  Re.useEffect(() => {
    Ze.current?.scrollIntoView({ behavior: "smooth" });
  }, [Ce]);
  const re = Re.useCallback(
    async (ue) => {
      if (!ue.trim() || Ee) return;
      const ye = {
        id: cu(),
        role: "user",
        content: ue.trim(),
        timestamp: /* @__PURE__ */ new Date()
      };
      b(c, ye), k(c, !0);
      const ee = cu();
      b(c, {
        id: ee,
        role: "assistant",
        content: "",
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !0
      });
      try {
        const me = wD(), te = `${p || "You are a helpful AI assistant."}

${me}

User: ${ue.trim()}`, { copilot_llm_endpoint: $e, user_id: He, dataSource: mt } = ar.getState(), at = $e || "http://localhost:3001", Ue = V?.master_person?.id, lt = await fetch(`${at}/api/chat`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            prompt: {
              role: "user",
              content: te,
              id: ye.id
            },
            threadId: xe,
            responseId: ee,
            context: c,
            user_id: He,
            // Pass user ID for suggestion request creation
            master_person_id: Ue,
            // Pass master person ID if available
            dataSource: mt
          })
        });
        if (!lt.ok)
          throw new Error(`API error: ${lt.status}`);
        const pt = lt.body?.getReader(), Qt = new TextDecoder();
        let vn = "";
        if (pt)
          for (; ; ) {
            const { done: En, value: Xn } = await pt.read();
            if (En) break;
            const On = Qt.decode(Xn, { stream: !0 });
            vn += On;
            const { cleanContent: Dn } = Z(vn);
            x(c, ee, Dn || vn, !0);
          }
        const { cleanContent: dr } = Z(vn, !0);
        x(c, ee, dr, !1);
      } catch (me) {
        console.error("Failed to send message:", me), x(
          c,
          ee,
          "Sorry, there was an error processing your request.",
          !1
        );
      } finally {
        k(c, !1);
      }
    },
    [Ee, xe, c, p, b, x, k, Z, J]
  ), L = Re.useCallback(
    (ue) => {
      ED({
        sendMessage: re,
        setPendingAction: Ye,
        setIsModalOpen: Te,
        context: c,
        addMessage: b,
        updateMessage: x
      })(ue);
    },
    [re, Ye, Te, c, b, x]
  ), Y = Re.useCallback(
    (ue, ye) => {
      x(c, ue, ye);
    },
    [c, x]
  ), pe = Re.useCallback(
    (ue) => {
      Te(!1), Ye(null), re(ue);
    },
    [re]
  ), ke = Re.useCallback(() => {
    Te(!1), Ye(null);
  }, []);
  return /* @__PURE__ */ R.jsxs("div", { className: Cn.chatContainer, children: [
    De && /* @__PURE__ */ R.jsx(
      HD,
      {
        onSendMessage: re,
        isLoading: Ee
      }
    ),
    ae && /* @__PURE__ */ R.jsx(
      BD,
      {
        onSendMessage: re,
        isLoading: Ee
      }
    ),
    /* @__PURE__ */ R.jsxs("div", { className: Cn.messagesContainer, children: [
      Ce.length === 0 ? c === "copilot" ? /* @__PURE__ */ R.jsx(qD, { subtext: "What can I help you with today?" }) : /* @__PURE__ */ R.jsx("div", { className: Cn.emptyState, children: /* @__PURE__ */ R.jsx("p", { children: "Start a conversation" }) }) : Ce.map((ue) => /* @__PURE__ */ R.jsx(
        fD,
        {
          message: ue,
          onAction: L,
          onUpdateMessage: (ye) => Y(ue.id, ye)
        },
        ue.id
      )),
      /* @__PURE__ */ R.jsx("div", { ref: Ze })
    ] }),
    f && /* @__PURE__ */ R.jsx(F3, { onSend: re, disabled: Ee, placeholder: w }),
    Ve && /* @__PURE__ */ R.jsx(
      CD,
      {
        isOpen: Ie,
        onClose: ke,
        humanFriendlyMessage: Ve.humanFriendlyMessage,
        llmFriendlyMessage: Ve.llmFriendlyMessage,
        onConfirm: pe
      }
    )
  ] });
}, WD = "_sidebarContent_1fub5_2", YD = "_searchWrapper_1fub5_17", GD = "_searchContainer_1fub5_23", QD = "_animated_1fub5_33", KD = "_searchIcon_1fub5_68", XD = "_searchInput_1fub5_73", JD = "_searchDropdown_1fub5_85", ZD = "_dropdownItem_1fub5_121", e6 = "_selected_1fub5_136", t6 = "_dropdownEmpty_1fub5_149", n6 = "_dropdownError_1fub5_150", r6 = "_dropdownLoading_1fub5_161", a6 = "_personAvatar_1fub5_171", o6 = "_avatarPlaceholder_1fub5_185", i6 = "_personInfo_1fub5_197", l6 = "_personName_1fub5_205", u6 = "_personTitle_1fub5_214", s6 = "_suggestionsList_1fub5_222", c6 = "_suggestionItemWrapper_1fub5_241", f6 = "_suggestionItem_1fub5_241", d6 = "_statusIcon_1fub5_269", p6 = "_moreButton_1fub5_272", v6 = "_moreButtonWrapper_1fub5_296", h6 = "_actionMenu_1fub5_317", m6 = "_actionMenuItem_1fub5_332", y6 = "_deleteAction_1fub5_354", g6 = "_loadingState_1fub5_362", _6 = "_loadingSpinner_1fub5_372", S6 = "_emptyState_1fub5_386", C6 = "_errorState_1fub5_393", Dt = {
  sidebarContent: WD,
  searchWrapper: YD,
  searchContainer: GD,
  animated: QD,
  searchIcon: KD,
  searchInput: XD,
  searchDropdown: JD,
  dropdownItem: ZD,
  selected: e6,
  dropdownEmpty: t6,
  dropdownError: n6,
  dropdownLoading: r6,
  personAvatar: a6,
  avatarPlaceholder: o6,
  personInfo: i6,
  personName: l6,
  personTitle: u6,
  suggestionsList: s6,
  suggestionItemWrapper: c6,
  suggestionItem: f6,
  statusIcon: d6,
  moreButton: p6,
  moreButtonWrapper: v6,
  actionMenu: h6,
  actionMenuItem: m6,
  deleteAction: y6,
  loadingState: g6,
  loadingSpinner: _6,
  emptyState: S6,
  errorState: C6
}, E6 = "_spinnerSimple_46sfm_1", x6 = "_arc_46sfm_5", b6 = "_dot_46sfm_12", Z1 = {
  spinnerSimple: E6,
  arc: x6,
  dot: b6
}, w6 = ({ size: c = 16, className: p = "" }) => {
  const f = La.useId();
  return /* @__PURE__ */ R.jsxs(
    "svg",
    {
      className: `${Z1.spinnerSimple} ${p}`,
      viewBox: "0 0 50 50",
      width: c,
      height: c,
      children: [
        /* @__PURE__ */ R.jsx("defs", { children: /* @__PURE__ */ R.jsxs("linearGradient", { id: f, x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
          /* @__PURE__ */ R.jsx("stop", { offset: "0%", style: { stopColor: "#e879f9", stopOpacity: 1 } }),
          /* @__PURE__ */ R.jsx("stop", { offset: "100%", style: { stopColor: "#e879f9", stopOpacity: 0 } })
        ] }) }),
        /* @__PURE__ */ R.jsx(
          "circle",
          {
            className: Z1.arc,
            cx: "25",
            cy: "25",
            r: "20",
            style: { stroke: `url(#${f})` }
          }
        ),
        /* @__PURE__ */ R.jsx("circle", { className: Z1.dot, cx: "25", cy: "5", r: "2.5" })
      ]
    }
  );
}, R6 = ({ status: c }) => {
  switch (c) {
    case "draft":
      return /* @__PURE__ */ R.jsx("span", { className: Dt.statusIcon, "data-status": "draft" });
    case "suggestion":
      return /* @__PURE__ */ R.jsx("span", { className: Dt.statusIcon, "data-status": "suggestion" });
    case "processing":
      return /* @__PURE__ */ R.jsx(w6, { size: 16 });
    case "archived":
      return /* @__PURE__ */ R.jsx("span", { className: Dt.statusIcon, "data-status": "archived" });
    default:
      return /* @__PURE__ */ R.jsx("span", { className: Dt.statusIcon, "data-status": "unknown" });
  }
}, k6 = ({
  selectedPerson: c,
  selectedSuggestionRequest: p,
  onPersonSelect: f,
  onSuggestionRequestSelect: g
}) => {
  const [w, C] = Re.useState(""), [h, b] = Re.useState(!1), [x, k] = Re.useState(null), M = Re.useRef(null), U = Re.useRef(null), {
    suggestionRequests: V,
    leverageLoops: $,
    isLoadingPersons: Z,
    isLoadingSuggestionRequests: J,
    personsError: Se,
    suggestionRequestsError: Ce,
    deleteSuggestionRequest: xe,
    isDeletingSuggestionRequest: Ee
  } = du(
    Jo((L) => ({
      suggestionRequests: L.suggestionRequests,
      leverageLoops: L.leverageLoops,
      isLoadingPersons: L.isLoadingPersons,
      isLoadingSuggestionRequests: L.isLoadingSuggestionRequests,
      personsError: L.personsError,
      suggestionRequestsError: L.suggestionRequestsError,
      deleteSuggestionRequest: L.deleteSuggestionRequest,
      isDeletingSuggestionRequest: L.isDeletingSuggestionRequest
    }))
  );
  Re.useEffect(() => {
    const L = (Y) => {
      M.current && !M.current.contains(Y.target) && b(!1), U.current && !U.current.contains(Y.target) && k(null);
    };
    return document.addEventListener("mousedown", L), () => document.removeEventListener("mousedown", L);
  }, []);
  const De = async (L, Y) => {
    Y.stopPropagation(), !Ee && (await xe(L), k(null));
  }, ae = (L, Y) => {
    Y.stopPropagation(), console.log("Edit suggestion request:", L), k(null);
  }, Ie = (L, Y) => Y ? L.filter(
    (pe) => pe.full_name?.toLowerCase().includes(Y.toLowerCase()) || pe.master_person.name?.toLowerCase().includes(Y.toLowerCase()) || pe.master_person.current_title?.toLowerCase().includes(Y.toLowerCase()) || pe.master_person.master_company?.company_name?.toLowerCase().includes(Y.toLowerCase())
  ) : [], Te = (L) => {
    const Y = L.target.value;
    C(Y), b(Y.length > 0);
  }, Ve = (L) => {
    f(L), C(""), b(!1);
  }, Ye = (L) => {
    const Y = c?.id === L.id;
    return /* @__PURE__ */ R.jsxs(
      "button",
      {
        className: `${Dt.dropdownItem} ${Y ? Dt.selected : ""}`,
        onClick: () => Ve(L),
        children: [
          /* @__PURE__ */ R.jsx("div", { className: Dt.personAvatar, children: L.master_person.avatar ? /* @__PURE__ */ R.jsx("img", { src: L.master_person.avatar, alt: L.full_name }) : /* @__PURE__ */ R.jsx("span", { className: Dt.avatarPlaceholder, children: L.full_name?.charAt(0) || "?" }) }),
          /* @__PURE__ */ R.jsxs("div", { className: Dt.personInfo, children: [
            /* @__PURE__ */ R.jsx("span", { className: Dt.personName, children: L.full_name || L.master_person.name }),
            L.master_person.current_title && /* @__PURE__ */ R.jsxs("span", { className: Dt.personTitle, children: [
              L.master_person.current_title,
              L.master_person.master_company?.company_name && /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
                " at ",
                L.master_person.master_company.company_name
              ] })
            ] })
          ] })
        ]
      },
      L.id
    );
  }, Ze = (L) => {
    const Y = p?.id === L.id;
    return /* @__PURE__ */ R.jsx("div", { className: Dt.suggestionItemWrapper, children: /* @__PURE__ */ R.jsxs(
      "button",
      {
        className: `${Dt.suggestionItem} ${Y ? Dt.selected : ""}`,
        onClick: () => g(L),
        children: [
          /* @__PURE__ */ R.jsx("div", { className: Dt.personAvatar, children: L.master_person?.avatar ? /* @__PURE__ */ R.jsx("img", { src: L.master_person.avatar, alt: L.master_person.name || "Person" }) : /* @__PURE__ */ R.jsx("span", { className: Dt.avatarPlaceholder, children: L.master_person?.name?.charAt(0) || "?" }) }),
          /* @__PURE__ */ R.jsxs("div", { className: Dt.personInfo, children: [
            /* @__PURE__ */ R.jsx("span", { className: Dt.personName, children: L.master_person?.name || L.request_header_title }),
            (L.master_person?.current_title || L.master_person?.company_name) && /* @__PURE__ */ R.jsxs("span", { className: Dt.personTitle, children: [
              L.master_person?.current_title,
              L.master_person?.current_title && L.master_person?.company_name && " at ",
              L.master_person?.company_name
            ] })
          ] }),
          /* @__PURE__ */ R.jsx(R6, { status: L.status }),
          L.id !== void 0 && /* @__PURE__ */ R.jsxs("div", { className: Dt.moreButtonWrapper, ref: x === L.id ? U : null, children: [
            /* @__PURE__ */ R.jsx(
              "span",
              {
                className: Dt.moreButton,
                role: "button",
                tabIndex: 0,
                onClick: (pe) => {
                  pe.stopPropagation(), k(x === L.id ? null : L.id);
                },
                onKeyDown: (pe) => {
                  pe.key === "Enter" && (pe.stopPropagation(), k(x === L.id ? null : L.id));
                },
                children: "⋮"
              }
            ),
            x === L.id && /* @__PURE__ */ R.jsxs("div", { className: Dt.actionMenu, children: [
              /* @__PURE__ */ R.jsxs(
                "button",
                {
                  className: Dt.actionMenuItem,
                  onClick: (pe) => ae(L.id, pe),
                  children: [
                    /* @__PURE__ */ R.jsx(a_, { size: 14 }),
                    /* @__PURE__ */ R.jsx("span", { children: "Edit" })
                  ]
                }
              ),
              /* @__PURE__ */ R.jsxs(
                "button",
                {
                  className: `${Dt.actionMenuItem} ${Dt.deleteAction}`,
                  onClick: (pe) => De(L.id, pe),
                  disabled: Ee,
                  children: [
                    /* @__PURE__ */ R.jsx(Ty, { size: 14 }),
                    /* @__PURE__ */ R.jsx("span", { children: Ee ? "Deleting..." : "Delete" })
                  ]
                }
              )
            ] })
          ] })
        ]
      }
    ) }, L.id);
  }, re = Ie($, w);
  return /* @__PURE__ */ R.jsxs("div", { className: Dt.sidebarContent, children: [
    /* @__PURE__ */ R.jsxs("div", { className: Dt.searchWrapper, ref: M, children: [
      /* @__PURE__ */ R.jsxs("div", { className: `${Dt.searchContainer} ${!c && !p ? Dt.animated : ""}`, children: [
        /* @__PURE__ */ R.jsx("span", { className: Dt.searchIcon, children: "🔍" }),
        /* @__PURE__ */ R.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search persons...",
            className: Dt.searchInput,
            value: w,
            onChange: Te,
            onFocus: () => w.length > 0 && b(!0)
          }
        )
      ] }),
      h && /* @__PURE__ */ R.jsx("div", { className: Dt.searchDropdown, children: Z ? /* @__PURE__ */ R.jsxs("div", { className: Dt.dropdownLoading, children: [
        /* @__PURE__ */ R.jsx("span", { className: Dt.loadingSpinner }),
        "Loading persons..."
      ] }) : Se ? /* @__PURE__ */ R.jsx("div", { className: Dt.dropdownError, children: Se }) : re.length === 0 ? /* @__PURE__ */ R.jsxs("div", { className: Dt.dropdownEmpty, children: [
        'No persons found for "',
        w,
        '"'
      ] }) : re.map((L) => Ye(L)) })
    ] }),
    /* @__PURE__ */ R.jsx("div", { className: Dt.suggestionsList, children: J ? /* @__PURE__ */ R.jsxs("div", { className: Dt.loadingState, children: [
      /* @__PURE__ */ R.jsx("span", { className: Dt.loadingSpinner }),
      "Loading suggestion requests..."
    ] }) : Ce ? /* @__PURE__ */ R.jsx("div", { className: Dt.errorState, children: Ce }) : V.length === 0 ? /* @__PURE__ */ R.jsx("div", { className: Dt.emptyState, children: "No leverage loop requests yet" }) : V.map((L) => Ze(L)) })
  ] });
}, T6 = "_sidebarContent_yimb6_2", N6 = "_searchWrapper_yimb6_17", M6 = "_searchContainer_yimb6_23", O6 = "_searchIcon_yimb6_36", D6 = "_searchInput_yimb6_41", L6 = "_outcomesList_yimb6_53", j6 = "_outcomeItemWrapper_yimb6_72", A6 = "_outcomeItem_yimb6_72", U6 = "_selected_yimb6_96", z6 = "_moreButton_yimb6_101", P6 = "_expandCaret_yimb6_105", I6 = "_expanded_yimb6_124", F6 = "_expandCaretPlaceholder_yimb6_128", V6 = "_statusIcon_yimb6_134", $6 = "_completedStatusIcon_yimb6_140", H6 = "_outcomeInfo_yimb6_146", B6 = "_outcomeName_yimb6_154", q6 = "_moreButtonWrapper_yimb6_163", W6 = "_actionMenu_yimb6_184", Y6 = "_actionMenuItem_yimb6_209", G6 = "_deleteAction_yimb6_231", Q6 = "_stepPlansContainer_yimb6_239", K6 = "_stepPlanItem_yimb6_247", X6 = "_stepPlanInfo_yimb6_259", J6 = "_stepPlanDescription_yimb6_274", Z6 = "_loadingState_yimb6_284", eL = "_loadingSpinner_yimb6_294", tL = "_emptyState_yimb6_308", nL = "_errorState_yimb6_315", jt = {
  sidebarContent: T6,
  searchWrapper: N6,
  searchContainer: M6,
  searchIcon: O6,
  searchInput: D6,
  outcomesList: L6,
  outcomeItemWrapper: j6,
  outcomeItem: A6,
  selected: U6,
  moreButton: z6,
  expandCaret: P6,
  expanded: I6,
  expandCaretPlaceholder: F6,
  statusIcon: V6,
  completedStatusIcon: $6,
  outcomeInfo: H6,
  outcomeName: B6,
  moreButtonWrapper: q6,
  actionMenu: W6,
  actionMenuItem: Y6,
  deleteAction: G6,
  stepPlansContainer: Q6,
  stepPlanItem: K6,
  stepPlanInfo: X6,
  stepPlanDescription: J6,
  loadingState: Z6,
  loadingSpinner: eL,
  emptyState: tL,
  errorState: nL
}, gE = "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.375%202.45583V2.46167M2.45584%204.375V4.38083M1.75%207V7.00583M2.45584%209.625V9.63083M4.375%2011.5442V11.55M7%2012.25V12.2558M9.625%2011.5442V11.55M11.5442%209.625V9.63083M12.25%207V7.00583M11.5442%204.375V4.38083M9.625%202.45583V2.46167M7%201.75V1.75583'%20stroke='%23F5F5F5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", rL = "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%207V3.11798C7%203.11798%207.88687%203.145%208.50092%203.42821C9.40942%203.84724%2010.1158%204.67779%2010.4151%205.62884L7%207Z'%20fill='%2322C55E'%20stroke='%2322C55E'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", aL = "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.25%207L6.41667%208.16667L8.75%205.83333M1.75%207C1.75%207.68944%201.8858%208.37213%202.14963%209.00909C2.41347%209.64605%202.80018%2010.2248%203.28769%2010.7123C3.7752%2011.1998%204.35395%2011.5865%204.99091%2011.8504C5.62787%2012.1142%206.31056%2012.25%207%2012.25C7.68944%2012.25%208.37213%2012.1142%209.00909%2011.8504C9.64605%2011.5865%2010.2248%2011.1998%2010.7123%2010.7123C11.1998%2010.2248%2011.5865%209.64605%2011.8504%209.00909C12.1142%208.37213%2012.25%207.68944%2012.25%207C12.25%206.31056%2012.1142%205.62787%2011.8504%204.99091C11.5865%204.35395%2011.1998%203.7752%2010.7123%203.28769C10.2248%202.80018%209.64605%202.41347%209.00909%202.14963C8.37213%201.8858%207.68944%201.75%207%201.75C6.31056%201.75%205.62787%201.8858%204.99091%202.14963C4.35395%202.41347%203.7752%202.80018%203.28769%203.28769C2.80018%203.7752%202.41347%204.35395%202.14963%204.99091C1.8858%205.62787%201.75%206.31056%201.75%207Z'%20stroke='%2360A5FA'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", oL = "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.95834%209.55205C4.95834%209.85249%205.2973%2010.024%205.53481%209.84372L8.89756%207.29164C9.08972%207.1458%209.08972%206.85414%208.89756%206.7083L5.53481%204.15622C5.2973%203.97596%204.95834%204.14745%204.95834%204.44789V9.55205Z'%20fill='%23A3A3A3'/%3e%3c/svg%3e", iL = ({ status: c }) => {
  switch (c) {
    case "planned":
      return /* @__PURE__ */ R.jsx("img", { src: gE, alt: "Planned", className: jt.statusIcon });
    case "in progress":
      return /* @__PURE__ */ R.jsx("img", { src: rL, alt: "In Progress", className: `${jt.statusIcon} ${jt.completedStatusIcon}` });
    case "complete":
      return /* @__PURE__ */ R.jsx("img", { src: aL, alt: "Complete", className: jt.statusIcon });
    default:
      return /* @__PURE__ */ R.jsx("img", { src: gE, alt: "Unknown", className: jt.statusIcon });
  }
}, lL = ({
  selectedSuggestionRequest: c,
  onSuggestionRequestSelect: p
}) => {
  const [f, g] = Re.useState(""), [w, C] = Re.useState(/* @__PURE__ */ new Set()), [h, b] = Re.useState(null), [x, k] = Re.useState(null), M = Re.useRef(null), U = Re.useRef(null), {
    outcomesSuggestionRequests: V,
    isLoadingSuggestionRequests: $,
    suggestionRequestsError: Z,
    deleteSuggestionRequest: J,
    isDeletingSuggestionRequest: Se
  } = du(
    Jo((re) => ({
      outcomesSuggestionRequests: re.outcomesSuggestionRequests,
      isLoadingSuggestionRequests: re.isLoadingSuggestionRequests,
      suggestionRequestsError: re.suggestionRequestsError,
      deleteSuggestionRequest: re.deleteSuggestionRequest,
      isDeletingSuggestionRequest: re.isDeletingSuggestionRequest
    }))
  );
  Re.useEffect(() => {
    const re = (L) => {
      M.current && !M.current.contains(L.target) && b(null), U.current && !U.current.contains(L.target) && k(null);
    };
    return document.addEventListener("mousedown", re), () => document.removeEventListener("mousedown", re);
  }, []);
  const Ce = (re, L) => L ? re.filter(
    (Y) => Y.request_panel_title?.toLowerCase().includes(L.toLowerCase()) || Y.request_header_title?.toLowerCase().includes(L.toLowerCase()) || Y.request_context?.toLowerCase().includes(L.toLowerCase())
  ) : re, xe = (re) => {
    g(re.target.value);
  }, Ee = async (re, L) => {
    L.stopPropagation(), !Se && (await J(re), b(null));
  }, De = (re, L) => {
    L.stopPropagation(), console.log("Edit outcome:", re), b(null);
  }, ae = async (re, L) => {
    L.stopPropagation(), console.log("Delete step plan:", re), k(null);
  }, Ie = (re, L) => {
    L.stopPropagation(), console.log("Edit step plan:", re), k(null);
  }, Te = (re, L) => {
    L.stopPropagation(), C((Y) => {
      const pe = new Set(Y);
      return pe.has(re) ? pe.delete(re) : pe.add(re), pe;
    });
  }, Ve = (re) => /* @__PURE__ */ R.jsxs("div", { className: jt.stepPlanItem, children: [
    /* @__PURE__ */ R.jsx(iL, { status: re.status }),
    /* @__PURE__ */ R.jsx("div", { className: jt.stepPlanInfo, children: /* @__PURE__ */ R.jsx("span", { className: jt.stepPlanDescription, children: re.step_description }) }),
    /* @__PURE__ */ R.jsxs("div", { className: jt.moreButtonWrapper, ref: x === re.id ? U : null, children: [
      /* @__PURE__ */ R.jsx(
        "span",
        {
          className: jt.moreButton,
          role: "button",
          tabIndex: 0,
          onClick: (L) => {
            L.stopPropagation(), k(x === re.id ? null : re.id);
          },
          onKeyDown: (L) => {
            L.key === "Enter" && (L.stopPropagation(), k(x === re.id ? null : re.id));
          },
          children: "⋮"
        }
      ),
      x === re.id && /* @__PURE__ */ R.jsxs("div", { className: jt.actionMenu, children: [
        /* @__PURE__ */ R.jsxs(
          "button",
          {
            className: jt.actionMenuItem,
            onClick: (L) => Ie(re.id, L),
            children: [
              /* @__PURE__ */ R.jsx(a_, { size: 14 }),
              /* @__PURE__ */ R.jsx("span", { children: "Edit" })
            ]
          }
        ),
        /* @__PURE__ */ R.jsxs(
          "button",
          {
            className: `${jt.actionMenuItem} ${jt.deleteAction}`,
            onClick: (L) => ae(re.id, L),
            children: [
              /* @__PURE__ */ R.jsx(Ty, { size: 14 }),
              /* @__PURE__ */ R.jsx("span", { children: "Delete" })
            ]
          }
        )
      ] })
    ] })
  ] }, re.id), Ye = (re) => {
    const L = c?.id === re.id, Y = re.outcome_plan_steps && re.outcome_plan_steps.length > 0, pe = re.id !== void 0 && w.has(re.id);
    return /* @__PURE__ */ R.jsxs("div", { className: jt.outcomeItemWrapper, children: [
      /* @__PURE__ */ R.jsxs(
        "div",
        {
          className: `${jt.outcomeItem} ${L ? jt.selected : ""}`,
          onClick: () => p(re),
          role: "button",
          tabIndex: 0,
          onKeyDown: (ke) => {
            (ke.key === "Enter" || ke.key === " ") && p(re);
          },
          children: [
            /* @__PURE__ */ R.jsx("div", { className: jt.outcomeInfo, children: /* @__PURE__ */ R.jsx("span", { className: jt.outcomeName, children: re.request_panel_title || re.request_header_title }) }),
            Y ? /* @__PURE__ */ R.jsx(
              "span",
              {
                className: `${jt.expandCaret} ${pe ? jt.expanded : ""}`,
                onClick: (ke) => re.id !== void 0 && Te(re.id, ke),
                role: "button",
                tabIndex: 0,
                onKeyDown: (ke) => {
                  ke.key === "Enter" && re.id !== void 0 && (ke.stopPropagation(), Te(re.id, ke));
                },
                children: /* @__PURE__ */ R.jsx("img", { src: oL, alt: "Expand" })
              }
            ) : /* @__PURE__ */ R.jsx("span", { className: jt.expandCaretPlaceholder }),
            re.id !== void 0 && /* @__PURE__ */ R.jsxs("div", { className: jt.moreButtonWrapper, ref: h === re.id ? M : null, children: [
              /* @__PURE__ */ R.jsx(
                "span",
                {
                  className: jt.moreButton,
                  role: "button",
                  tabIndex: 0,
                  onClick: (ke) => {
                    ke.stopPropagation(), b(h === re.id ? null : re.id);
                  },
                  onKeyDown: (ke) => {
                    ke.key === "Enter" && (ke.stopPropagation(), b(h === re.id ? null : re.id));
                  },
                  children: "⋮"
                }
              ),
              h === re.id && /* @__PURE__ */ R.jsxs("div", { className: jt.actionMenu, children: [
                /* @__PURE__ */ R.jsxs(
                  "button",
                  {
                    className: jt.actionMenuItem,
                    onClick: (ke) => De(re.id, ke),
                    children: [
                      /* @__PURE__ */ R.jsx(a_, { size: 14 }),
                      /* @__PURE__ */ R.jsx("span", { children: "Edit" })
                    ]
                  }
                ),
                /* @__PURE__ */ R.jsxs(
                  "button",
                  {
                    className: `${jt.actionMenuItem} ${jt.deleteAction}`,
                    onClick: (ke) => Ee(re.id, ke),
                    disabled: Se,
                    children: [
                      /* @__PURE__ */ R.jsx(Ty, { size: 14 }),
                      /* @__PURE__ */ R.jsx("span", { children: Se ? "Deleting..." : "Delete" })
                    ]
                  }
                )
              ] })
            ] })
          ]
        }
      ),
      Y && pe && /* @__PURE__ */ R.jsx("div", { className: jt.stepPlansContainer, children: re.outcome_plan_steps.map((ke) => Ve(ke)) })
    ] }, re.id);
  }, Ze = Ce(V, f);
  return /* @__PURE__ */ R.jsxs("div", { className: jt.sidebarContent, children: [
    /* @__PURE__ */ R.jsx("div", { className: jt.searchWrapper, children: /* @__PURE__ */ R.jsxs("div", { className: jt.searchContainer, children: [
      /* @__PURE__ */ R.jsx("span", { className: jt.searchIcon, children: "🔍" }),
      /* @__PURE__ */ R.jsx(
        "input",
        {
          type: "text",
          placeholder: "Search outcomes...",
          className: jt.searchInput,
          value: f,
          onChange: xe
        }
      )
    ] }) }),
    /* @__PURE__ */ R.jsx("div", { className: jt.outcomesList, children: $ ? /* @__PURE__ */ R.jsxs("div", { className: jt.loadingState, children: [
      /* @__PURE__ */ R.jsx("span", { className: jt.loadingSpinner }),
      "Loading outcomes..."
    ] }) : Z ? /* @__PURE__ */ R.jsx("div", { className: jt.errorState, children: Z }) : Ze.length === 0 ? /* @__PURE__ */ R.jsx("div", { className: jt.emptyState, children: f ? `No outcomes found for "${f}"` : "No outcomes yet" }) : Ze.map((re) => Ye(re)) })
  ] });
}, uL = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%205.83329C9.17592%205.83329%208.37034%206.07766%207.68514%206.5355C6.99993%206.99334%206.46588%207.64408%206.15051%208.40544C5.83515%209.1668%205.75264%2010.0046%205.91341%2010.8128C6.07418%2011.6211%206.47102%2012.3635%207.05373%2012.9462C7.63645%2013.529%208.37888%2013.9258%209.18714%2014.0866C9.99539%2014.2473%2010.8332%2014.1648%2011.5945%2013.8495C12.3559%2013.5341%2013.0066%2013%2013.4645%2012.3148C13.9223%2011.6296%2014.1667%2010.824%2014.1667%209.99995M10.8333%202.54579C9.28839%202.37246%207.72776%202.68352%206.36733%203.43593C5.0069%204.18834%203.9139%205.34492%203.23953%206.74567C2.56516%208.14643%202.34274%209.72213%202.60305%2011.2548C2.86335%2012.7875%203.59352%2014.2014%204.69253%2015.301C5.79155%2016.4006%207.2051%2017.1314%208.73766%2017.3925C10.2702%2017.6536%2011.846%2017.432%2013.2471%2016.7583C14.6482%2016.0846%2015.8053%2014.9922%2016.5584%2013.6322C17.3115%2012.2721%2017.6234%2010.7117%2017.4508%209.16662M12.5%207.49995V4.99995L15%202.49995V4.99995H17.5L15%207.49995H12.5ZM12.5%207.49995L10%209.99995M9.16668%209.99995C9.16668%2010.221%209.25447%2010.4329%209.41076%2010.5892C9.56704%2010.7455%209.779%2010.8333%2010%2010.8333C10.221%2010.8333%2010.433%2010.7455%2010.5893%2010.5892C10.7455%2010.4329%2010.8333%2010.221%2010.8333%209.99995C10.8333%209.77894%2010.7455%209.56698%2010.5893%209.4107C10.433%209.25442%2010.221%209.16662%2010%209.16662C9.779%209.16662%209.56704%209.25442%209.41076%209.4107C9.25447%209.56698%209.16668%209.77894%209.16668%209.99995Z'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", sL = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.5533%205.43171C14.1448%204.53303%2013.4793%203.77539%2012.6409%203.2543C11.8024%202.73321%2010.8285%202.47198%209.84179%202.50353C8.8551%202.53509%207.89984%202.85802%207.09639%203.43162C6.29294%204.00523%205.67727%204.80383%205.32698%205.72679C4.97669%206.64974%204.90745%207.65573%205.12798%208.61798C5.34852%209.58022%205.84897%2010.4556%206.56625%2011.1339C7.28353%2011.8122%208.18555%2012.263%209.15861%2012.4294C10.1317%2012.5958%2011.1322%2012.4705%2012.0342%2012.0692'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.5683%2014.5533C15.467%2014.1448%2016.2246%2013.4793%2016.7457%2012.6409C17.2668%2011.8024%2017.5281%2010.8284%2017.4965%209.84176C17.4649%208.85507%2017.142%207.89981%2016.5684%207.09636C15.9948%206.29291%2015.1962%205.67724%2014.2732%205.32695C13.3503%204.97666%2012.3443%204.90742%2011.3821%205.12795C10.4198%205.34849%209.54439%205.84894%208.86612%206.56622C8.18784%207.2835%207.73708%208.18552%207.57064%209.15858C7.40419%2010.1316%207.52952%2011.1322%207.93083%2012.0341'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.45001%2014.5684C5.8585%2015.467%206.52387%2016.2247%207.36227%2016.7459C8.20067%2017.267%209.17458%2017.5283%2010.1613%2017.4969C11.1479%2017.4654%2012.1032%2017.1425%2012.9067%2016.569C13.7102%2015.9955%2014.3259%2015.197%2014.6763%2014.2741C15.0267%2013.3512%2015.0961%2012.3452%2014.8756%2011.383C14.6552%2010.4207%2014.1549%209.54526%2013.4377%208.8669C12.7205%208.18855%2011.8186%207.73767%2010.8456%207.57109C9.87256%207.40451%208.872%207.52969%207.97001%207.93085'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.43168%205.44995C4.53299%205.85844%203.77532%206.52381%203.25417%207.36221C2.73302%208.20061%202.47171%209.17452%202.50318%2010.1612C2.53465%2011.1479%202.85749%2012.1031%203.431%2012.9066C4.00451%2013.7101%204.80304%2014.3259%205.72594%2014.6763C6.64884%2015.0266%207.6548%2015.096%208.61706%2014.8756C9.57931%2014.6552%2010.4548%2014.1548%2011.1331%2013.4376C11.8115%2012.7205%2012.2624%2011.8185%2012.4289%2010.8455C12.5955%209.8725%2012.4703%208.87194%2012.0692%207.96995'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", cL = ({
  activeSection: c,
  onSectionChange: p,
  onSectionChangeConfiguration: f
}) => {
  const { fetchNetworkPersons: g, fetchSuggestionRequests: w, fetchOutcomesSuggestionRequests: C } = du(
    Jo((ae) => ({
      fetchNetworkPersons: ae.fetchNetworkPersons,
      fetchSuggestionRequests: ae.fetchSuggestionRequests,
      fetchOutcomesSuggestionRequests: ae.fetchOutcomesSuggestionRequests
    }))
  ), {
    selectedPerson: h,
    selectedSuggestionRequest: b,
    setSelectedPerson: x,
    setSelectedSuggestionRequest: k,
    addMessage: M,
    leverageLoopChats: U,
    outcomesChats: V
  } = Zo(
    Jo((ae) => ({
      selectedPerson: ae.selectedPerson,
      selectedSuggestionRequest: ae.selectedSuggestionRequest,
      setSelectedPerson: ae.setSelectedPerson,
      setSelectedSuggestionRequest: ae.setSelectedSuggestionRequest,
      addMessage: ae.addMessage,
      leverageLoopChats: ae.leverageLoopChats,
      outcomesChats: ae.outcomesChats
    }))
  ), { token: $, baseUrl: Z } = ar(
    Jo((ae) => ({
      token: ae.token,
      baseUrl: ae.baseUrl
    }))
  ), [J, Se] = Re.useState(/* @__PURE__ */ new Set()), Ce = (ae) => {
    Se((Ie) => {
      const Te = new Set(Ie);
      return Te.has(ae) ? Te.delete(ae) : Te.add(ae), Te;
    });
  }, xe = (ae) => {
    x(ae), p("leverage-loops");
    const Ie = ae.full_name;
    if (!(U[Ie]?.messages?.[0]?.role === "assistant")) {
      const Ye = "leverage-loops", Ze = {
        id: cu(),
        role: "assistant",
        content: "Select a person from your contacts to assist with your network.",
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !1
      };
      M(Ye, Ze, Ie);
      const re = {
        id: cu(),
        role: "user",
        content: `${ae.full_name} 
 ${ae.master_person?.current_title} at ${ae.master_person?.master_company?.company_name}`,
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !1
      };
      M(Ye, re, Ie);
      const L = cu(), Y = `<content thesys="true">${JSON.stringify(YE(ae))}</content>`;
      M(Ye, {
        id: L,
        role: "assistant",
        content: Y,
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !1
      }, Ie);
    }
  }, Ee = (ae) => {
    k(ae), p("leverage-loops");
    const Ie = ae.request_panel_title;
    if (!(U[Ie]?.messages?.[0]?.role === "assistant")) {
      const Ye = "leverage-loops", Ze = cu(), re = `<content thesys="true">${JSON.stringify(vE(ae))}</content>`;
      M(Ye, {
        id: Ze,
        role: "assistant",
        content: re,
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !1
      }, Ie);
    }
  }, De = (ae) => {
    k(ae), p("outcomes");
    const Ie = ae.request_panel_title;
    if (!(V[Ie]?.messages?.[0]?.role === "assistant")) {
      const Ye = "outcomes", Ze = cu(), re = `<content thesys="true">${JSON.stringify(vE(ae))}</content>`;
      M(Ye, {
        id: Ze,
        role: "assistant",
        content: re,
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !1
      }, Ie);
    }
  };
  return Re.useEffect(() => {
    $ && Z && (g(), w(), C());
  }, [$, Z, g, w, C]), /* @__PURE__ */ R.jsx("div", { className: Mn.sidebar, children: /* @__PURE__ */ R.jsxs("nav", { className: Mn.sidebarNav, children: [
    /* @__PURE__ */ R.jsxs(
      "button",
      {
        className: `${Mn.sidebarItem} ${c === "copilot" ? Mn.active : ""}`,
        onClick: () => p("copilot"),
        "aria-label": "Orbiter.io Copilot",
        children: [
          /* @__PURE__ */ R.jsx("span", { className: Mn.sidebarIcon, children: /* @__PURE__ */ R.jsx("img", { src: p_, alt: "Orbiter", width: 18, height: 18 }) }),
          /* @__PURE__ */ R.jsx("span", { className: Mn.sidebarLabel, children: "Orbiter.io Copilot" })
        ]
      }
    ),
    /* @__PURE__ */ R.jsx("div", { className: Mn.sectionWrapper, children: /* @__PURE__ */ R.jsxs("div", { className: `${Mn.sectionHeader} ${c === "outcomes" ? Mn.active : ""}`, children: [
      /* @__PURE__ */ R.jsxs(
        "button",
        {
          className: Mn.sidebarItemInHeader,
          onClick: () => f("outcomes"),
          "aria-label": "Outcomes",
          children: [
            /* @__PURE__ */ R.jsx("span", { className: Mn.sidebarIcon, children: /* @__PURE__ */ R.jsx("img", { src: uL, alt: "Outcomes", width: 18, height: 18 }) }),
            /* @__PURE__ */ R.jsx("span", { className: Mn.sidebarLabel, children: "Outcomes" })
          ]
        }
      ),
      /* @__PURE__ */ R.jsx(
        "button",
        {
          className: Mn.plusButton,
          onClick: () => Ce("outcomes"),
          "aria-label": "Expand Outcomes",
          children: /* @__PURE__ */ R.jsx("span", { className: `${Mn.plusIcon} ${J.has("outcomes") ? Mn.rotated : ""}`, children: "+" })
        }
      )
    ] }) }),
    /* @__PURE__ */ R.jsx("div", { className: Mn.sectionWrapper, children: /* @__PURE__ */ R.jsxs("div", { className: `${Mn.sectionHeader} ${c === "leverage-loops" ? Mn.active : ""}`, children: [
      /* @__PURE__ */ R.jsxs(
        "button",
        {
          className: Mn.sidebarItemInHeader,
          onClick: () => f("leverage-loops"),
          "aria-label": "Leverage Loops",
          children: [
            /* @__PURE__ */ R.jsx("span", { className: Mn.sidebarIcon, children: /* @__PURE__ */ R.jsx("img", { src: sL, alt: "Leverage Loops", width: 18, height: 18 }) }),
            /* @__PURE__ */ R.jsx("span", { className: Mn.sidebarLabel, children: "Leverage Loops" })
          ]
        }
      ),
      /* @__PURE__ */ R.jsx(
        "button",
        {
          className: Mn.plusButton,
          onClick: () => Ce("leverage-loops"),
          "aria-label": "Expand Leverage Loops",
          children: /* @__PURE__ */ R.jsx("span", { className: `${Mn.plusIcon} ${J.has("leverage-loops") ? Mn.rotated : ""}`, children: "+" })
        }
      )
    ] }) }),
    /* @__PURE__ */ R.jsxs("div", { children: [
      J.has("leverage-loops") && /* @__PURE__ */ R.jsx(
        k6,
        {
          selectedPerson: h,
          selectedSuggestionRequest: b,
          onPersonSelect: xe,
          onSuggestionRequestSelect: Ee
        }
      ),
      J.has("outcomes") && /* @__PURE__ */ R.jsx(
        lL,
        {
          selectedSuggestionRequest: b,
          onSuggestionRequestSelect: De
        }
      )
    ] })
  ] }) });
}, _E = ({
  agentName: c = "Orbiter.io Copilot"
}) => /* @__PURE__ */ R.jsx(
  v_,
  {
    context: "copilot",
    title: c,
    systemPrompt: "You are Orbiter.io Copilot, a helpful AI assistant for professional networking and relationship management."
  }
), fL = () => {
  const {
    selectedSuggestionRequest: c,
    outcomesChats: p,
    addMessage: f
  } = Zo(
    Jo((w) => ({
      selectedSuggestionRequest: w.selectedSuggestionRequest,
      outcomesChats: w.outcomesChats,
      addMessage: w.addMessage
    }))
  );
  Re.useEffect(() => {
    const w = "outcomes-default";
    if (!(p[w]?.messages?.[0]?.role === "assistant")) {
      const b = "outcomes", k = {
        id: cu(),
        role: "assistant",
        content: "What would you like to achieve?.",
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !1
      };
      f(b, k, w);
    }
  }, [c]);
  const g = () => c ? `You are helping with the outcomes suggestion request: "${c.request_header_title}". Context: ${c.request_context}` : "You are helping the user manage their outcomes towards certain goals.";
  return /* @__PURE__ */ R.jsx(
    v_,
    {
      context: "outcomes",
      title: "Outcomes",
      systemPrompt: g()
    }
  );
}, dL = () => {
  const {
    selectedPerson: c,
    selectedSuggestionRequest: p,
    leverageLoopChats: f,
    addMessage: g
  } = Zo(
    Jo((b) => ({
      selectedPerson: b.selectedPerson,
      selectedSuggestionRequest: b.selectedSuggestionRequest,
      leverageLoopChats: b.leverageLoopChats,
      addMessage: b.addMessage
    }))
  );
  Re.useEffect(() => {
    const b = "leverage-loop-default";
    if (!(f[b]?.messages?.[0]?.role === "assistant")) {
      const M = "leverage-loops", V = {
        id: cu(),
        role: "assistant",
        content: "Select a person from your contacts to assist with your network.",
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !1
      };
      g(M, V, b);
    }
  }, [c, p]);
  const w = () => c ? `You are helping with a leverage loop for ${c.full_name} from ${c.master_person?.master_company?.company_name || "Unknown Company"}. Their title is ${c.master_person?.current_title || "Unknown"}.` : p ? `You are helping with the leverage loop suggestion request: "${p.request_header_title}". Context: ${p.request_context}` : "You are helping the user manage their leverage loops and professional network.", C = () => {
    if (c)
      return `${c.full_name} • ${c.master_person?.master_company?.company_name || ""}`;
    if (p)
      return p.request_header_title;
  }, h = !!(c || p);
  return /* @__PURE__ */ R.jsx(
    v_,
    {
      context: "leverage-loops",
      title: "Leverage Loops",
      subtitle: C(),
      systemPrompt: w(),
      showComposer: h
    }
  );
}, pL = "_app_4u5b6_5", vL = "_mainContent_4u5b6_15", SE = {
  app: pL,
  mainContent: vL
}, hL = ({
  agentName: c = "Copilot",
  token: p,
  dataSource: f,
  baseUrl: g,
  user_id: w,
  copilot_llm_endpoint: C,
  user_name: h
}) => {
  const [b, x] = Re.useState("copilot"), k = ar((Z) => Z.setVariables), { setSelectedPerson: M, setSelectedSuggestionRequest: U } = Zo(
    Jo((Z) => ({
      setSelectedPerson: Z.setSelectedPerson,
      setSelectedSuggestionRequest: Z.setSelectedSuggestionRequest
    }))
  );
  Re.useLayoutEffect(() => {
    k({ token: p, baseUrl: g, dataSource: f, user_id: w, copilot_llm_endpoint: C, user_name: h });
  }, [p, g, f, w, C, h]);
  const V = (Z) => {
    x(Z), Z === "leverage-loops" && (M(null), U(null)), Z === "outcomes" && U(null);
  }, $ = () => {
    switch (b) {
      case "copilot":
        return /* @__PURE__ */ R.jsx(_E, { agentName: c });
      case "outcomes":
        return /* @__PURE__ */ R.jsx(fL, {});
      case "leverage-loops":
        return /* @__PURE__ */ R.jsx(dL, {});
      default:
        return /* @__PURE__ */ R.jsx(_E, { agentName: c });
    }
  };
  return /* @__PURE__ */ R.jsxs("div", { className: SE.app, children: [
    /* @__PURE__ */ R.jsx(
      cL,
      {
        activeSection: b,
        onSectionChange: x,
        onSectionChangeConfiguration: V
      }
    ),
    /* @__PURE__ */ R.jsx("main", { className: SE.mainContent, children: $() })
  ] });
};
var wy = { exports: {} }, Za = {}, Ry = { exports: {} }, e_ = {};
var CE;
function mL() {
  return CE || (CE = 1, (function(c) {
    function p(ee, Me) {
      var me = ee.length;
      ee.push(Me);
      e: for (; 0 < me; ) {
        var F = me - 1 >>> 1, te = ee[F];
        if (0 < w(te, Me)) ee[F] = Me, ee[me] = te, me = F;
        else break e;
      }
    }
    function f(ee) {
      return ee.length === 0 ? null : ee[0];
    }
    function g(ee) {
      if (ee.length === 0) return null;
      var Me = ee[0], me = ee.pop();
      if (me !== Me) {
        ee[0] = me;
        e: for (var F = 0, te = ee.length, $e = te >>> 1; F < $e; ) {
          var He = 2 * (F + 1) - 1, mt = ee[He], at = He + 1, Ue = ee[at];
          if (0 > w(mt, me)) at < te && 0 > w(Ue, mt) ? (ee[F] = Ue, ee[at] = me, F = at) : (ee[F] = mt, ee[He] = me, F = He);
          else if (at < te && 0 > w(Ue, me)) ee[F] = Ue, ee[at] = me, F = at;
          else break e;
        }
      }
      return Me;
    }
    function w(ee, Me) {
      var me = ee.sortIndex - Me.sortIndex;
      return me !== 0 ? me : ee.id - Me.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var C = performance;
      c.unstable_now = function() {
        return C.now();
      };
    } else {
      var h = Date, b = h.now();
      c.unstable_now = function() {
        return h.now() - b;
      };
    }
    var x = [], k = [], M = 1, U = null, V = 3, $ = !1, Z = !1, J = !1, Se = typeof setTimeout == "function" ? setTimeout : null, Ce = typeof clearTimeout == "function" ? clearTimeout : null, xe = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ee(ee) {
      for (var Me = f(k); Me !== null; ) {
        if (Me.callback === null) g(k);
        else if (Me.startTime <= ee) g(k), Me.sortIndex = Me.expirationTime, p(x, Me);
        else break;
        Me = f(k);
      }
    }
    function De(ee) {
      if (J = !1, Ee(ee), !Z) if (f(x) !== null) Z = !0, ue(ae);
      else {
        var Me = f(k);
        Me !== null && ye(De, Me.startTime - ee);
      }
    }
    function ae(ee, Me) {
      Z = !1, J && (J = !1, Ce(Ve), Ve = -1), $ = !0;
      var me = V;
      try {
        for (Ee(Me), U = f(x); U !== null && (!(U.expirationTime > Me) || ee && !re()); ) {
          var F = U.callback;
          if (typeof F == "function") {
            U.callback = null, V = U.priorityLevel;
            var te = F(U.expirationTime <= Me);
            Me = c.unstable_now(), typeof te == "function" ? U.callback = te : U === f(x) && g(x), Ee(Me);
          } else g(x);
          U = f(x);
        }
        if (U !== null) var $e = !0;
        else {
          var He = f(k);
          He !== null && ye(De, He.startTime - Me), $e = !1;
        }
        return $e;
      } finally {
        U = null, V = me, $ = !1;
      }
    }
    var Ie = !1, Te = null, Ve = -1, Ye = 5, Ze = -1;
    function re() {
      return !(c.unstable_now() - Ze < Ye);
    }
    function L() {
      if (Te !== null) {
        var ee = c.unstable_now();
        Ze = ee;
        var Me = !0;
        try {
          Me = Te(!0, ee);
        } finally {
          Me ? Y() : (Ie = !1, Te = null);
        }
      } else Ie = !1;
    }
    var Y;
    if (typeof xe == "function") Y = function() {
      xe(L);
    };
    else if (typeof MessageChannel < "u") {
      var pe = new MessageChannel(), ke = pe.port2;
      pe.port1.onmessage = L, Y = function() {
        ke.postMessage(null);
      };
    } else Y = function() {
      Se(L, 0);
    };
    function ue(ee) {
      Te = ee, Ie || (Ie = !0, Y());
    }
    function ye(ee, Me) {
      Ve = Se(function() {
        ee(c.unstable_now());
      }, Me);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(ee) {
      ee.callback = null;
    }, c.unstable_continueExecution = function() {
      Z || $ || (Z = !0, ue(ae));
    }, c.unstable_forceFrameRate = function(ee) {
      0 > ee || 125 < ee ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ye = 0 < ee ? Math.floor(1e3 / ee) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return V;
    }, c.unstable_getFirstCallbackNode = function() {
      return f(x);
    }, c.unstable_next = function(ee) {
      switch (V) {
        case 1:
        case 2:
        case 3:
          var Me = 3;
          break;
        default:
          Me = V;
      }
      var me = V;
      V = Me;
      try {
        return ee();
      } finally {
        V = me;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(ee, Me) {
      switch (ee) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ee = 3;
      }
      var me = V;
      V = ee;
      try {
        return Me();
      } finally {
        V = me;
      }
    }, c.unstable_scheduleCallback = function(ee, Me, me) {
      var F = c.unstable_now();
      switch (typeof me == "object" && me !== null ? (me = me.delay, me = typeof me == "number" && 0 < me ? F + me : F) : me = F, ee) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return te = me + te, ee = { id: M++, callback: Me, priorityLevel: ee, startTime: me, expirationTime: te, sortIndex: -1 }, me > F ? (ee.sortIndex = me, p(k, ee), f(x) === null && ee === f(k) && (J ? (Ce(Ve), Ve = -1) : J = !0, ye(De, me - F))) : (ee.sortIndex = te, p(x, ee), Z || $ || (Z = !0, ue(ae))), ee;
    }, c.unstable_shouldYield = re, c.unstable_wrapCallback = function(ee) {
      var Me = V;
      return function() {
        var me = V;
        V = Me;
        try {
          return ee.apply(this, arguments);
        } finally {
          V = me;
        }
      };
    };
  })(e_)), e_;
}
var t_ = {};
var EE;
function yL() {
  return EE || (EE = 1, (function(c) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = !1, f = 5;
      function g(Ne, tt) {
        var Rt = Ne.length;
        Ne.push(tt), h(Ne, tt, Rt);
      }
      function w(Ne) {
        return Ne.length === 0 ? null : Ne[0];
      }
      function C(Ne) {
        if (Ne.length === 0)
          return null;
        var tt = Ne[0], Rt = Ne.pop();
        return Rt !== tt && (Ne[0] = Rt, b(Ne, Rt, 0)), tt;
      }
      function h(Ne, tt, Rt) {
        for (var Kt = Rt; Kt > 0; ) {
          var sn = Kt - 1 >>> 1, xn = Ne[sn];
          if (x(xn, tt) > 0)
            Ne[sn] = tt, Ne[Kt] = xn, Kt = sn;
          else
            return;
        }
      }
      function b(Ne, tt, Rt) {
        for (var Kt = Rt, sn = Ne.length, xn = sn >>> 1; Kt < xn; ) {
          var hn = (Kt + 1) * 2 - 1, ir = Ne[hn], cn = hn + 1, Zt = Ne[cn];
          if (x(ir, tt) < 0)
            cn < sn && x(Zt, ir) < 0 ? (Ne[Kt] = Zt, Ne[cn] = tt, Kt = cn) : (Ne[Kt] = ir, Ne[hn] = tt, Kt = hn);
          else if (cn < sn && x(Zt, tt) < 0)
            Ne[Kt] = Zt, Ne[cn] = tt, Kt = cn;
          else
            return;
        }
      }
      function x(Ne, tt) {
        var Rt = Ne.sortIndex - tt.sortIndex;
        return Rt !== 0 ? Rt : Ne.id - tt.id;
      }
      var k = 1, M = 2, U = 3, V = 4, $ = 5;
      function Z(Ne, tt) {
      }
      var J = typeof performance == "object" && typeof performance.now == "function";
      if (J) {
        var Se = performance;
        c.unstable_now = function() {
          return Se.now();
        };
      } else {
        var Ce = Date, xe = Ce.now();
        c.unstable_now = function() {
          return Ce.now() - xe;
        };
      }
      var Ee = 1073741823, De = -1, ae = 250, Ie = 5e3, Te = 1e4, Ve = Ee, Ye = [], Ze = [], re = 1, L = null, Y = U, pe = !1, ke = !1, ue = !1, ye = typeof setTimeout == "function" ? setTimeout : null, ee = typeof clearTimeout == "function" ? clearTimeout : null, Me = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function me(Ne) {
        for (var tt = w(Ze); tt !== null; ) {
          if (tt.callback === null)
            C(Ze);
          else if (tt.startTime <= Ne)
            C(Ze), tt.sortIndex = tt.expirationTime, g(Ye, tt);
          else
            return;
          tt = w(Ze);
        }
      }
      function F(Ne) {
        if (ue = !1, me(Ne), !ke)
          if (w(Ye) !== null)
            ke = !0, Vn(te);
          else {
            var tt = w(Ze);
            tt !== null && Nr(F, tt.startTime - Ne);
          }
      }
      function te(Ne, tt) {
        ke = !1, ue && (ue = !1, _a()), pe = !0;
        var Rt = Y;
        try {
          var Kt;
          if (!p) return $e(Ne, tt);
        } finally {
          L = null, Y = Rt, pe = !1;
        }
      }
      function $e(Ne, tt) {
        var Rt = tt;
        for (me(Rt), L = w(Ye); L !== null && !(L.expirationTime > Rt && (!Ne || Co())); ) {
          var Kt = L.callback;
          if (typeof Kt == "function") {
            L.callback = null, Y = L.priorityLevel;
            var sn = L.expirationTime <= Rt, xn = Kt(sn);
            Rt = c.unstable_now(), typeof xn == "function" ? L.callback = xn : L === w(Ye) && C(Ye), me(Rt);
          } else
            C(Ye);
          L = w(Ye);
        }
        if (L !== null)
          return !0;
        var hn = w(Ze);
        return hn !== null && Nr(F, hn.startTime - Rt), !1;
      }
      function He(Ne, tt) {
        switch (Ne) {
          case k:
          case M:
          case U:
          case V:
          case $:
            break;
          default:
            Ne = U;
        }
        var Rt = Y;
        Y = Ne;
        try {
          return tt();
        } finally {
          Y = Rt;
        }
      }
      function mt(Ne) {
        var tt;
        switch (Y) {
          case k:
          case M:
          case U:
            tt = U;
            break;
          default:
            tt = Y;
            break;
        }
        var Rt = Y;
        Y = tt;
        try {
          return Ne();
        } finally {
          Y = Rt;
        }
      }
      function at(Ne) {
        var tt = Y;
        return function() {
          var Rt = Y;
          Y = tt;
          try {
            return Ne.apply(this, arguments);
          } finally {
            Y = Rt;
          }
        };
      }
      function Ue(Ne, tt, Rt) {
        var Kt = c.unstable_now(), sn;
        if (typeof Rt == "object" && Rt !== null) {
          var xn = Rt.delay;
          typeof xn == "number" && xn > 0 ? sn = Kt + xn : sn = Kt;
        } else
          sn = Kt;
        var hn;
        switch (Ne) {
          case k:
            hn = De;
            break;
          case M:
            hn = ae;
            break;
          case $:
            hn = Ve;
            break;
          case V:
            hn = Te;
            break;
          case U:
          default:
            hn = Ie;
            break;
        }
        var ir = sn + hn, cn = {
          id: re++,
          callback: tt,
          priorityLevel: Ne,
          startTime: sn,
          expirationTime: ir,
          sortIndex: -1
        };
        return sn > Kt ? (cn.sortIndex = sn, g(Ze, cn), w(Ye) === null && cn === w(Ze) && (ue ? _a() : ue = !0, Nr(F, sn - Kt))) : (cn.sortIndex = ir, g(Ye, cn), !ke && !pe && (ke = !0, Vn(te))), cn;
      }
      function lt() {
      }
      function pt() {
        !ke && !pe && (ke = !0, Vn(te));
      }
      function Qt() {
        return w(Ye);
      }
      function vn(Ne) {
        Ne.callback = null;
      }
      function dr() {
        return Y;
      }
      var En = !1, Xn = null, On = -1, Dn = f, Ar = -1;
      function Co() {
        var Ne = c.unstable_now() - Ar;
        return !(Ne < Dn);
      }
      function ga() {
      }
      function or(Ne) {
        if (Ne < 0 || Ne > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Ne > 0 ? Dn = Math.floor(1e3 / Ne) : Dn = f;
      }
      var Ln = function() {
        if (Xn !== null) {
          var Ne = c.unstable_now();
          Ar = Ne;
          var tt = !0, Rt = !0;
          try {
            Rt = Xn(tt, Ne);
          } finally {
            Rt ? Jn() : (En = !1, Xn = null);
          }
        } else
          En = !1;
      }, Jn;
      if (typeof Me == "function")
        Jn = function() {
          Me(Ln);
        };
      else if (typeof MessageChannel < "u") {
        var Tr = new MessageChannel(), to = Tr.port2;
        Tr.port1.onmessage = Ln, Jn = function() {
          to.postMessage(null);
        };
      } else
        Jn = function() {
          ye(Ln, 0);
        };
      function Vn(Ne) {
        Xn = Ne, En || (En = !0, Jn());
      }
      function Nr(Ne, tt) {
        On = ye(function() {
          Ne(c.unstable_now());
        }, tt);
      }
      function _a() {
        ee(On), On = -1;
      }
      var no = ga, Eo = null;
      c.unstable_IdlePriority = $, c.unstable_ImmediatePriority = k, c.unstable_LowPriority = V, c.unstable_NormalPriority = U, c.unstable_Profiling = Eo, c.unstable_UserBlockingPriority = M, c.unstable_cancelCallback = vn, c.unstable_continueExecution = pt, c.unstable_forceFrameRate = or, c.unstable_getCurrentPriorityLevel = dr, c.unstable_getFirstCallbackNode = Qt, c.unstable_next = mt, c.unstable_pauseExecution = lt, c.unstable_requestPaint = no, c.unstable_runWithPriority = He, c.unstable_scheduleCallback = Ue, c.unstable_shouldYield = Co, c.unstable_wrapCallback = at, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(t_)), t_;
}
var xE;
function GE() {
  return xE || (xE = 1, process.env.NODE_ENV === "production" ? Ry.exports = mL() : Ry.exports = yL()), Ry.exports;
}
var bE;
function gL() {
  if (bE) return Za;
  bE = 1;
  var c = kv(), p = GE();
  function f(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, i = 1; i < arguments.length; i++) r += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var g = /* @__PURE__ */ new Set(), w = {};
  function C(n, r) {
    h(n, r), h(n + "Capture", r);
  }
  function h(n, r) {
    for (w[n] = r, n = 0; n < r.length; n++) g.add(r[n]);
  }
  var b = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), x = Object.prototype.hasOwnProperty, k = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, M = {}, U = {};
  function V(n) {
    return x.call(U, n) ? !0 : x.call(M, n) ? !1 : k.test(n) ? U[n] = !0 : (M[n] = !0, !1);
  }
  function $(n, r, i, u) {
    if (i !== null && i.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : i !== null ? !i.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Z(n, r, i, u) {
    if (r === null || typeof r > "u" || $(n, r, i, u)) return !0;
    if (u) return !1;
    if (i !== null) switch (i.type) {
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
  function J(n, r, i, u, d, m, E) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = d, this.mustUseProperty = i, this.propertyName = n, this.type = r, this.sanitizeURL = m, this.removeEmptyString = E;
  }
  var Se = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Se[n] = new J(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Se[r] = new J(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Se[n] = new J(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Se[n] = new J(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Se[n] = new J(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Se[n] = new J(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Se[n] = new J(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Se[n] = new J(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Se[n] = new J(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Ce = /[\-:]([a-z])/g;
  function xe(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Ce,
      xe
    );
    Se[r] = new J(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Ce, xe);
    Se[r] = new J(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Ce, xe);
    Se[r] = new J(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Se[n] = new J(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Se.xlinkHref = new J("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Se[n] = new J(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ee(n, r, i, u) {
    var d = Se.hasOwnProperty(r) ? Se[r] : null;
    (d !== null ? d.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Z(r, i, d, u) && (i = null), u || d === null ? V(r) && (i === null ? n.removeAttribute(r) : n.setAttribute(r, "" + i)) : d.mustUseProperty ? n[d.propertyName] = i === null ? d.type === 3 ? !1 : "" : i : (r = d.attributeName, u = d.attributeNamespace, i === null ? n.removeAttribute(r) : (d = d.type, i = d === 3 || d === 4 && i === !0 ? "" : "" + i, u ? n.setAttributeNS(u, r, i) : n.setAttribute(r, i))));
  }
  var De = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ae = /* @__PURE__ */ Symbol.for("react.element"), Ie = /* @__PURE__ */ Symbol.for("react.portal"), Te = /* @__PURE__ */ Symbol.for("react.fragment"), Ve = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ye = /* @__PURE__ */ Symbol.for("react.profiler"), Ze = /* @__PURE__ */ Symbol.for("react.provider"), re = /* @__PURE__ */ Symbol.for("react.context"), L = /* @__PURE__ */ Symbol.for("react.forward_ref"), Y = /* @__PURE__ */ Symbol.for("react.suspense"), pe = /* @__PURE__ */ Symbol.for("react.suspense_list"), ke = /* @__PURE__ */ Symbol.for("react.memo"), ue = /* @__PURE__ */ Symbol.for("react.lazy"), ye = /* @__PURE__ */ Symbol.for("react.offscreen"), ee = Symbol.iterator;
  function Me(n) {
    return n === null || typeof n != "object" ? null : (n = ee && n[ee] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var me = Object.assign, F;
  function te(n) {
    if (F === void 0) try {
      throw Error();
    } catch (i) {
      var r = i.stack.trim().match(/\n( *(at )?)/);
      F = r && r[1] || "";
    }
    return `
` + F + n;
  }
  var $e = !1;
  function He(n, r) {
    if (!n || $e) return "";
    $e = !0;
    var i = Error.prepareStackTrace;
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
        for (var d = K.stack.split(`
`), m = u.stack.split(`
`), E = d.length - 1, O = m.length - 1; 1 <= E && 0 <= O && d[E] !== m[O]; ) O--;
        for (; 1 <= E && 0 <= O; E--, O--) if (d[E] !== m[O]) {
          if (E !== 1 || O !== 1)
            do
              if (E--, O--, 0 > O || d[E] !== m[O]) {
                var A = `
` + d[E].replace(" at new ", " at ");
                return n.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", n.displayName)), A;
              }
            while (1 <= E && 0 <= O);
          break;
        }
      }
    } finally {
      $e = !1, Error.prepareStackTrace = i;
    }
    return (n = n ? n.displayName || n.name : "") ? te(n) : "";
  }
  function mt(n) {
    switch (n.tag) {
      case 5:
        return te(n.type);
      case 16:
        return te("Lazy");
      case 13:
        return te("Suspense");
      case 19:
        return te("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = He(n.type, !1), n;
      case 11:
        return n = He(n.type.render, !1), n;
      case 1:
        return n = He(n.type, !0), n;
      default:
        return "";
    }
  }
  function at(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Te:
        return "Fragment";
      case Ie:
        return "Portal";
      case Ye:
        return "Profiler";
      case Ve:
        return "StrictMode";
      case Y:
        return "Suspense";
      case pe:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case re:
        return (n.displayName || "Context") + ".Consumer";
      case Ze:
        return (n._context.displayName || "Context") + ".Provider";
      case L:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case ke:
        return r = n.displayName || null, r !== null ? r : at(n.type) || "Memo";
      case ue:
        r = n._payload, n = n._init;
        try {
          return at(n(r));
        } catch {
        }
    }
    return null;
  }
  function Ue(n) {
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
        return at(r);
      case 8:
        return r === Ve ? "StrictMode" : "Mode";
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
  function lt(n) {
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
  function pt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Qt(n) {
    var r = pt(n) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var d = i.get, m = i.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return d.call(this);
      }, set: function(E) {
        u = "" + E, m.call(this, E);
      } }), Object.defineProperty(n, r, { enumerable: i.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(E) {
        u = "" + E;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function vn(n) {
    n._valueTracker || (n._valueTracker = Qt(n));
  }
  function dr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var i = r.getValue(), u = "";
    return n && (u = pt(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== i ? (r.setValue(n), !0) : !1;
  }
  function En(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Xn(n, r) {
    var i = r.checked;
    return me({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: i ?? n._wrapperState.initialChecked });
  }
  function On(n, r) {
    var i = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    i = lt(r.value != null ? r.value : i), n._wrapperState = { initialChecked: u, initialValue: i, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Dn(n, r) {
    r = r.checked, r != null && Ee(n, "checked", r, !1);
  }
  function Ar(n, r) {
    Dn(n, r);
    var i = lt(r.value), u = r.type;
    if (i != null) u === "number" ? (i === 0 && n.value === "" || n.value != i) && (n.value = "" + i) : n.value !== "" + i && (n.value = "" + i);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? ga(n, r.type, i) : r.hasOwnProperty("defaultValue") && ga(n, r.type, lt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Co(n, r, i) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, i || r === n.value || (n.value = r), n.defaultValue = r;
    }
    i = n.name, i !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, i !== "" && (n.name = i);
  }
  function ga(n, r, i) {
    (r !== "number" || En(n.ownerDocument) !== n) && (i == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + i && (n.defaultValue = "" + i));
  }
  var or = Array.isArray;
  function Ln(n, r, i, u) {
    if (n = n.options, r) {
      r = {};
      for (var d = 0; d < i.length; d++) r["$" + i[d]] = !0;
      for (i = 0; i < n.length; i++) d = r.hasOwnProperty("$" + n[i].value), n[i].selected !== d && (n[i].selected = d), d && u && (n[i].defaultSelected = !0);
    } else {
      for (i = "" + lt(i), r = null, d = 0; d < n.length; d++) {
        if (n[d].value === i) {
          n[d].selected = !0, u && (n[d].defaultSelected = !0);
          return;
        }
        r !== null || n[d].disabled || (r = n[d]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Jn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(f(91));
    return me({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Tr(n, r) {
    var i = r.value;
    if (i == null) {
      if (i = r.children, r = r.defaultValue, i != null) {
        if (r != null) throw Error(f(92));
        if (or(i)) {
          if (1 < i.length) throw Error(f(93));
          i = i[0];
        }
        r = i;
      }
      r == null && (r = ""), i = r;
    }
    n._wrapperState = { initialValue: lt(i) };
  }
  function to(n, r) {
    var i = lt(r.value), u = lt(r.defaultValue);
    i != null && (i = "" + i, i !== n.value && (n.value = i), r.defaultValue == null && n.defaultValue !== i && (n.defaultValue = i)), u != null && (n.defaultValue = "" + u);
  }
  function Vn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Nr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function _a(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Nr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var no, Eo = (function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, i, u, d) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, i, u, d);
      });
    } : n;
  })(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (no = no || document.createElement("div"), no.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = no.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function Ne(n, r) {
    if (r) {
      var i = n.firstChild;
      if (i && i === n.lastChild && i.nodeType === 3) {
        i.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var tt = {
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
  Object.keys(tt).forEach(function(n) {
    Rt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), tt[r] = tt[n];
    });
  });
  function Kt(n, r, i) {
    return r == null || typeof r == "boolean" || r === "" ? "" : i || typeof r != "number" || r === 0 || tt.hasOwnProperty(n) && tt[n] ? ("" + r).trim() : r + "px";
  }
  function sn(n, r) {
    n = n.style;
    for (var i in r) if (r.hasOwnProperty(i)) {
      var u = i.indexOf("--") === 0, d = Kt(i, r[i], u);
      i === "float" && (i = "cssFloat"), u ? n.setProperty(i, d) : n[i] = d;
    }
  }
  var xn = me({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function hn(n, r) {
    if (r) {
      if (xn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(f(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(f(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(f(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(f(62));
    }
  }
  function ir(n, r) {
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
  var cn = null;
  function Zt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var en = null, Sa = null, Mr = null;
  function ja(n) {
    if (n = ot(n)) {
      if (typeof en != "function") throw Error(f(280));
      var r = n.stateNode;
      r && (r = wn(r), en(n.stateNode, n.type, r));
    }
  }
  function ei(n) {
    Sa ? Mr ? Mr.push(n) : Mr = [n] : Sa = n;
  }
  function hl() {
    if (Sa) {
      var n = Sa, r = Mr;
      if (Mr = Sa = null, ja(n), r) for (n = 0; n < r.length; n++) ja(r[n]);
    }
  }
  function ml(n, r) {
    return n(r);
  }
  function Ti() {
  }
  var Ni = !1;
  function yl(n, r, i) {
    if (Ni) return n(r, i);
    Ni = !0;
    try {
      return ml(n, r, i);
    } finally {
      Ni = !1, (Sa !== null || Mr !== null) && (Ti(), hl());
    }
  }
  function Ur(n, r) {
    var i = n.stateNode;
    if (i === null) return null;
    var u = wn(i);
    if (u === null) return null;
    i = u[r];
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
    if (i && typeof i != "function") throw Error(f(231, r, typeof i));
    return i;
  }
  var zr = !1;
  if (b) try {
    var pr = {};
    Object.defineProperty(pr, "passive", { get: function() {
      zr = !0;
    } }), window.addEventListener("test", pr, pr), window.removeEventListener("test", pr, pr);
  } catch {
    zr = !1;
  }
  function xo(n, r, i, u, d, m, E, O, A) {
    var K = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(i, K);
    } catch (ve) {
      this.onError(ve);
    }
  }
  var ro = !1, bo = null, wo = !1, j = null, se = { onError: function(n) {
    ro = !0, bo = n;
  } };
  function Ae(n, r, i, u, d, m, E, O, A) {
    ro = !1, bo = null, xo.apply(se, arguments);
  }
  function Qe(n, r, i, u, d, m, E, O, A) {
    if (Ae.apply(this, arguments), ro) {
      if (ro) {
        var K = bo;
        ro = !1, bo = null;
      } else throw Error(f(198));
      wo || (wo = !0, j = K);
    }
  }
  function Et(n) {
    var r = n, i = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, (r.flags & 4098) !== 0 && (i = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? i : null;
  }
  function _t(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Mt(n) {
    if (Et(n) !== n) throw Error(f(188));
  }
  function Tt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Et(n), r === null) throw Error(f(188));
      return r !== n ? null : n;
    }
    for (var i = n, u = r; ; ) {
      var d = i.return;
      if (d === null) break;
      var m = d.alternate;
      if (m === null) {
        if (u = d.return, u !== null) {
          i = u;
          continue;
        }
        break;
      }
      if (d.child === m.child) {
        for (m = d.child; m; ) {
          if (m === i) return Mt(d), n;
          if (m === u) return Mt(d), r;
          m = m.sibling;
        }
        throw Error(f(188));
      }
      if (i.return !== u.return) i = d, u = m;
      else {
        for (var E = !1, O = d.child; O; ) {
          if (O === i) {
            E = !0, i = d, u = m;
            break;
          }
          if (O === u) {
            E = !0, u = d, i = m;
            break;
          }
          O = O.sibling;
        }
        if (!E) {
          for (O = m.child; O; ) {
            if (O === i) {
              E = !0, i = m, u = d;
              break;
            }
            if (O === u) {
              E = !0, u = m, i = d;
              break;
            }
            O = O.sibling;
          }
          if (!E) throw Error(f(189));
        }
      }
      if (i.alternate !== u) throw Error(f(190));
    }
    if (i.tag !== 3) throw Error(f(188));
    return i.stateNode.current === i ? n : r;
  }
  function jn(n) {
    return n = Tt(n), n !== null ? fn(n) : null;
  }
  function fn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = fn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var mn = p.unstable_scheduleCallback, vr = p.unstable_cancelCallback, ao = p.unstable_shouldYield, oo = p.unstable_requestPaint, xt = p.unstable_now, wt = p.unstable_getCurrentPriorityLevel, io = p.unstable_ImmediatePriority, gl = p.unstable_UserBlockingPriority, _l = p.unstable_NormalPriority, Mi = p.unstable_LowPriority, pu = p.unstable_IdlePriority, Oi = null, ta = null;
  function fs(n) {
    if (ta && typeof ta.onCommitFiberRoot == "function") try {
      ta.onCommitFiberRoot(Oi, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Pr = Math.clz32 ? Math.clz32 : vu, Tc = Math.log, Nc = Math.LN2;
  function vu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Tc(n) / Nc | 0) | 0;
  }
  var Di = 64, Ca = 4194304;
  function lo(n) {
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
  function uo(n, r) {
    var i = n.pendingLanes;
    if (i === 0) return 0;
    var u = 0, d = n.suspendedLanes, m = n.pingedLanes, E = i & 268435455;
    if (E !== 0) {
      var O = E & ~d;
      O !== 0 ? u = lo(O) : (m &= E, m !== 0 && (u = lo(m)));
    } else E = i & ~d, E !== 0 ? u = lo(E) : m !== 0 && (u = lo(m));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && (r & d) === 0 && (d = u & -u, m = r & -r, d >= m || d === 16 && (m & 4194240) !== 0)) return r;
    if ((u & 4) !== 0 && (u |= i & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) i = 31 - Pr(r), d = 1 << i, u |= n[i], r &= ~d;
    return u;
  }
  function hu(n, r) {
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
  function Sl(n, r) {
    for (var i = n.suspendedLanes, u = n.pingedLanes, d = n.expirationTimes, m = n.pendingLanes; 0 < m; ) {
      var E = 31 - Pr(m), O = 1 << E, A = d[E];
      A === -1 ? ((O & i) === 0 || (O & u) !== 0) && (d[E] = hu(O, r)) : A <= r && (n.expiredLanes |= O), m &= ~O;
    }
  }
  function Li(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function mu() {
    var n = Di;
    return Di <<= 1, (Di & 4194240) === 0 && (Di = 64), n;
  }
  function yu(n) {
    for (var r = [], i = 0; 31 > i; i++) r.push(n);
    return r;
  }
  function ti(n, r, i) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Pr(r), n[r] = i;
  }
  function yd(n, r) {
    var i = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < i; ) {
      var d = 31 - Pr(i), m = 1 << d;
      r[d] = 0, u[d] = -1, n[d] = -1, i &= ~m;
    }
  }
  function ni(n, r) {
    var i = n.entangledLanes |= r;
    for (n = n.entanglements; i; ) {
      var u = 31 - Pr(i), d = 1 << u;
      d & r | n[u] & r && (n[u] |= r), i &= ~d;
    }
  }
  var Ht = 0;
  function gu(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Ft, ds, Ro, gt, _u, hr = !1, ko = [], Ir = null, To = null, yn = null, tn = /* @__PURE__ */ new Map(), ji = /* @__PURE__ */ new Map(), Zn = [], Fr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Aa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Ir = null;
        break;
      case "dragenter":
      case "dragleave":
        To = null;
        break;
      case "mouseover":
      case "mouseout":
        yn = null;
        break;
      case "pointerover":
      case "pointerout":
        tn.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ji.delete(r.pointerId);
    }
  }
  function Cl(n, r, i, u, d, m) {
    return n === null || n.nativeEvent !== m ? (n = { blockedOn: r, domEventName: i, eventSystemFlags: u, nativeEvent: m, targetContainers: [d] }, r !== null && (r = ot(r), r !== null && ds(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, d !== null && r.indexOf(d) === -1 && r.push(d), n);
  }
  function ps(n, r, i, u, d) {
    switch (r) {
      case "focusin":
        return Ir = Cl(Ir, n, r, i, u, d), !0;
      case "dragenter":
        return To = Cl(To, n, r, i, u, d), !0;
      case "mouseover":
        return yn = Cl(yn, n, r, i, u, d), !0;
      case "pointerover":
        var m = d.pointerId;
        return tn.set(m, Cl(tn.get(m) || null, n, r, i, u, d)), !0;
      case "gotpointercapture":
        return m = d.pointerId, ji.set(m, Cl(ji.get(m) || null, n, r, i, u, d)), !0;
    }
    return !1;
  }
  function vs(n) {
    var r = Ml(n.target);
    if (r !== null) {
      var i = Et(r);
      if (i !== null) {
        if (r = i.tag, r === 13) {
          if (r = _t(i), r !== null) {
            n.blockedOn = r, _u(n.priority, function() {
              Ro(i);
            });
            return;
          }
        } else if (r === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Ai(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var i = Eu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (i === null) {
        i = n.nativeEvent;
        var u = new i.constructor(i.type, i);
        cn = u, i.target.dispatchEvent(u), cn = null;
      } else return r = ot(i), r !== null && ds(r), n.blockedOn = i, !1;
      r.shift();
    }
    return !0;
  }
  function El(n, r, i) {
    Ai(n) && i.delete(r);
  }
  function gd() {
    hr = !1, Ir !== null && Ai(Ir) && (Ir = null), To !== null && Ai(To) && (To = null), yn !== null && Ai(yn) && (yn = null), tn.forEach(El), ji.forEach(El);
  }
  function Ua(n, r) {
    n.blockedOn === r && (n.blockedOn = null, hr || (hr = !0, p.unstable_scheduleCallback(p.unstable_NormalPriority, gd)));
  }
  function so(n) {
    function r(d) {
      return Ua(d, n);
    }
    if (0 < ko.length) {
      Ua(ko[0], n);
      for (var i = 1; i < ko.length; i++) {
        var u = ko[i];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (Ir !== null && Ua(Ir, n), To !== null && Ua(To, n), yn !== null && Ua(yn, n), tn.forEach(r), ji.forEach(r), i = 0; i < Zn.length; i++) u = Zn[i], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < Zn.length && (i = Zn[0], i.blockedOn === null); ) vs(i), i.blockedOn === null && Zn.shift();
  }
  var No = De.ReactCurrentBatchConfig, za = !0;
  function Su(n, r, i, u) {
    var d = Ht, m = No.transition;
    No.transition = null;
    try {
      Ht = 1, Ui(n, r, i, u);
    } finally {
      Ht = d, No.transition = m;
    }
  }
  function Cu(n, r, i, u) {
    var d = Ht, m = No.transition;
    No.transition = null;
    try {
      Ht = 4, Ui(n, r, i, u);
    } finally {
      Ht = d, No.transition = m;
    }
  }
  function Ui(n, r, i, u) {
    if (za) {
      var d = Eu(n, r, i, u);
      if (d === null) Vc(n, r, u, xl, i), Aa(n, u);
      else if (ps(d, n, r, i, u)) u.stopPropagation();
      else if (Aa(n, u), r & 4 && -1 < Fr.indexOf(n)) {
        for (; d !== null; ) {
          var m = ot(d);
          if (m !== null && Ft(m), m = Eu(n, r, i, u), m === null && Vc(n, r, u, xl, i), m === d) break;
          d = m;
        }
        d !== null && u.stopPropagation();
      } else Vc(n, r, u, null, i);
    }
  }
  var xl = null;
  function Eu(n, r, i, u) {
    if (xl = null, n = Zt(u), n = Ml(n), n !== null) if (r = Et(n), r === null) n = null;
    else if (i = r.tag, i === 13) {
      if (n = _t(r), n !== null) return n;
      n = null;
    } else if (i === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return xl = n, null;
  }
  function xu(n) {
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
        switch (wt()) {
          case io:
            return 1;
          case gl:
            return 4;
          case _l:
          case Mi:
            return 16;
          case pu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var co = null, S = null, D = null;
  function Q() {
    if (D) return D;
    var n, r = S, i = r.length, u, d = "value" in co ? co.value : co.textContent, m = d.length;
    for (n = 0; n < i && r[n] === d[n]; n++) ;
    var E = i - n;
    for (u = 1; u <= E && r[i - u] === d[m - u]; u++) ;
    return D = d.slice(n, 1 < u ? 1 - u : void 0);
  }
  function ne(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function be() {
    return !0;
  }
  function ut() {
    return !1;
  }
  function je(n) {
    function r(i, u, d, m, E) {
      this._reactName = i, this._targetInst = d, this.type = u, this.nativeEvent = m, this.target = E, this.currentTarget = null;
      for (var O in n) n.hasOwnProperty(O) && (i = n[O], this[O] = i ? i(m) : m[O]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? be : ut, this.isPropagationStopped = ut, this;
    }
    return me(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var i = this.nativeEvent;
      i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = be);
    }, stopPropagation: function() {
      var i = this.nativeEvent;
      i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = be);
    }, persist: function() {
    }, isPersistent: be }), r;
  }
  var ft = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ot = je(ft), Vt = me({}, ft, { view: 0, detail: 0 }), dn = je(Vt), nn, kt, rn, bn = me({}, Vt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: xd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== rn && (rn && n.type === "mousemove" ? (nn = n.screenX - rn.screenX, kt = n.screenY - rn.screenY) : kt = nn = 0, rn = n), nn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : kt;
  } }), zi = je(bn), hs = me({}, bn, { dataTransfer: 0 }), ri = je(hs), ms = me({}, Vt, { relatedTarget: 0 }), bl = je(ms), _d = me({}, ft, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Mc = je(_d), Sd = me({}, ft, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Mv = je(Sd), Cd = me({}, ft, { data: 0 }), Ed = je(Cd), Ov = {
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
  }, Uy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function ai(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Uy[n]) ? !!r[n] : !1;
  }
  function xd() {
    return ai;
  }
  var bd = me({}, Vt, { key: function(n) {
    if (n.key) {
      var r = Ov[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = ne(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Dv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: xd, charCode: function(n) {
    return n.type === "keypress" ? ne(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? ne(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), wd = je(bd), Rd = me({}, bn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Lv = je(Rd), Oc = me({}, Vt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: xd }), jv = je(Oc), na = me({}, ft, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), oi = je(na), $n = me({}, bn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ii = je($n), kd = [9, 13, 27, 32], bu = b && "CompositionEvent" in window, ys = null;
  b && "documentMode" in document && (ys = document.documentMode);
  var gs = b && "TextEvent" in window && !ys, Av = b && (!bu || ys && 8 < ys && 11 >= ys), Uv = " ", Dc = !1;
  function zv(n, r) {
    switch (n) {
      case "keyup":
        return kd.indexOf(r.keyCode) !== -1;
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
  function Pv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var wu = !1;
  function Iv(n, r) {
    switch (n) {
      case "compositionend":
        return Pv(r);
      case "keypress":
        return r.which !== 32 ? null : (Dc = !0, Uv);
      case "textInput":
        return n = r.data, n === Uv && Dc ? null : n;
      default:
        return null;
    }
  }
  function zy(n, r) {
    if (wu) return n === "compositionend" || !bu && zv(n, r) ? (n = Q(), D = S = co = null, wu = !1, n) : null;
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
        return Av && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Py = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Fv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Py[n.type] : r === "textarea";
  }
  function Td(n, r, i, u) {
    ei(u), r = bs(r, "onChange"), 0 < r.length && (i = new Ot("onChange", "change", null, i, u), n.push({ event: i, listeners: r }));
  }
  var Mo = null, wl = null;
  function Vv(n) {
    Tl(n, 0);
  }
  function _s(n) {
    var r = po(n);
    if (dr(r)) return n;
  }
  function Iy(n, r) {
    if (n === "change") return r;
  }
  var $v = !1;
  if (b) {
    var Nd;
    if (b) {
      var Md = "oninput" in document;
      if (!Md) {
        var Hv = document.createElement("div");
        Hv.setAttribute("oninput", "return;"), Md = typeof Hv.oninput == "function";
      }
      Nd = Md;
    } else Nd = !1;
    $v = Nd && (!document.documentMode || 9 < document.documentMode);
  }
  function Bv() {
    Mo && (Mo.detachEvent("onpropertychange", qv), wl = Mo = null);
  }
  function qv(n) {
    if (n.propertyName === "value" && _s(wl)) {
      var r = [];
      Td(r, wl, n, Zt(n)), yl(Vv, r);
    }
  }
  function Fy(n, r, i) {
    n === "focusin" ? (Bv(), Mo = r, wl = i, Mo.attachEvent("onpropertychange", qv)) : n === "focusout" && Bv();
  }
  function Wv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return _s(wl);
  }
  function Vy(n, r) {
    if (n === "click") return _s(r);
  }
  function Yv(n, r) {
    if (n === "input" || n === "change") return _s(r);
  }
  function $y(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var fo = typeof Object.is == "function" ? Object.is : $y;
  function Ss(n, r) {
    if (fo(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var i = Object.keys(n), u = Object.keys(r);
    if (i.length !== u.length) return !1;
    for (u = 0; u < i.length; u++) {
      var d = i[u];
      if (!x.call(r, d) || !fo(n[d], r[d])) return !1;
    }
    return !0;
  }
  function Gv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Lc(n, r) {
    var i = Gv(n);
    n = 0;
    for (var u; i; ) {
      if (i.nodeType === 3) {
        if (u = n + i.textContent.length, n <= r && u >= r) return { node: i, offset: r - n };
        n = u;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = Gv(i);
    }
  }
  function Pi(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Pi(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Cs() {
    for (var n = window, r = En(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var i = typeof r.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) n = r.contentWindow;
      else break;
      r = En(n.document);
    }
    return r;
  }
  function jc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Ru(n) {
    var r = Cs(), i = n.focusedElem, u = n.selectionRange;
    if (r !== i && i && i.ownerDocument && Pi(i.ownerDocument.documentElement, i)) {
      if (u !== null && jc(i)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in i) i.selectionStart = r, i.selectionEnd = Math.min(n, i.value.length);
        else if (n = (r = i.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var d = i.textContent.length, m = Math.min(u.start, d);
          u = u.end === void 0 ? m : Math.min(u.end, d), !n.extend && m > u && (d = u, u = m, m = d), d = Lc(i, m);
          var E = Lc(
            i,
            u
          );
          d && E && (n.rangeCount !== 1 || n.anchorNode !== d.node || n.anchorOffset !== d.offset || n.focusNode !== E.node || n.focusOffset !== E.offset) && (r = r.createRange(), r.setStart(d.node, d.offset), n.removeAllRanges(), m > u ? (n.addRange(r), n.extend(E.node, E.offset)) : (r.setEnd(E.node, E.offset), n.addRange(r)));
        }
      }
      for (r = [], n = i; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof i.focus == "function" && i.focus(), i = 0; i < r.length; i++) n = r[i], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Hy = b && "documentMode" in document && 11 >= document.documentMode, ku = null, Od = null, Es = null, Dd = !1;
  function Ld(n, r, i) {
    var u = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Dd || ku == null || ku !== En(u) || (u = ku, "selectionStart" in u && jc(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), Es && Ss(Es, u) || (Es = u, u = bs(Od, "onSelect"), 0 < u.length && (r = new Ot("onSelect", "select", null, r, i), n.push({ event: r, listeners: u }), r.target = ku)));
  }
  function Ac(n, r) {
    var i = {};
    return i[n.toLowerCase()] = r.toLowerCase(), i["Webkit" + n] = "webkit" + r, i["Moz" + n] = "moz" + r, i;
  }
  var Rl = { animationend: Ac("Animation", "AnimationEnd"), animationiteration: Ac("Animation", "AnimationIteration"), animationstart: Ac("Animation", "AnimationStart"), transitionend: Ac("Transition", "TransitionEnd") }, mr = {}, jd = {};
  b && (jd = document.createElement("div").style, "AnimationEvent" in window || (delete Rl.animationend.animation, delete Rl.animationiteration.animation, delete Rl.animationstart.animation), "TransitionEvent" in window || delete Rl.transitionend.transition);
  function Uc(n) {
    if (mr[n]) return mr[n];
    if (!Rl[n]) return n;
    var r = Rl[n], i;
    for (i in r) if (r.hasOwnProperty(i) && i in jd) return mr[n] = r[i];
    return n;
  }
  var Qv = Uc("animationend"), Kv = Uc("animationiteration"), Xv = Uc("animationstart"), Jv = Uc("transitionend"), Ad = /* @__PURE__ */ new Map(), zc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Pa(n, r) {
    Ad.set(n, r), C(r, [n]);
  }
  for (var Ud = 0; Ud < zc.length; Ud++) {
    var kl = zc[Ud], By = kl.toLowerCase(), qy = kl[0].toUpperCase() + kl.slice(1);
    Pa(By, "on" + qy);
  }
  Pa(Qv, "onAnimationEnd"), Pa(Kv, "onAnimationIteration"), Pa(Xv, "onAnimationStart"), Pa("dblclick", "onDoubleClick"), Pa("focusin", "onFocus"), Pa("focusout", "onBlur"), Pa(Jv, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), C("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), C("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), C("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), C("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), C("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), C("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var xs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), zd = new Set("cancel close invalid load scroll toggle".split(" ").concat(xs));
  function Pc(n, r, i) {
    var u = n.type || "unknown-event";
    n.currentTarget = i, Qe(u, r, void 0, n), n.currentTarget = null;
  }
  function Tl(n, r) {
    r = (r & 4) !== 0;
    for (var i = 0; i < n.length; i++) {
      var u = n[i], d = u.event;
      u = u.listeners;
      e: {
        var m = void 0;
        if (r) for (var E = u.length - 1; 0 <= E; E--) {
          var O = u[E], A = O.instance, K = O.currentTarget;
          if (O = O.listener, A !== m && d.isPropagationStopped()) break e;
          Pc(d, O, K), m = A;
        }
        else for (E = 0; E < u.length; E++) {
          if (O = u[E], A = O.instance, K = O.currentTarget, O = O.listener, A !== m && d.isPropagationStopped()) break e;
          Pc(d, O, K), m = A;
        }
      }
    }
    if (wo) throw n = j, wo = !1, j = null, n;
  }
  function Xt(n, r) {
    var i = r[ks];
    i === void 0 && (i = r[ks] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    i.has(u) || (Zv(r, n, 2, !1), i.add(u));
  }
  function Ic(n, r, i) {
    var u = 0;
    r && (u |= 4), Zv(i, n, u, r);
  }
  var Fc = "_reactListening" + Math.random().toString(36).slice(2);
  function Tu(n) {
    if (!n[Fc]) {
      n[Fc] = !0, g.forEach(function(i) {
        i !== "selectionchange" && (zd.has(i) || Ic(i, !1, n), Ic(i, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Fc] || (r[Fc] = !0, Ic("selectionchange", !1, r));
    }
  }
  function Zv(n, r, i, u) {
    switch (xu(r)) {
      case 1:
        var d = Su;
        break;
      case 4:
        d = Cu;
        break;
      default:
        d = Ui;
    }
    i = d.bind(null, r, i, n), d = void 0, !zr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (d = !0), u ? d !== void 0 ? n.addEventListener(r, i, { capture: !0, passive: d }) : n.addEventListener(r, i, !0) : d !== void 0 ? n.addEventListener(r, i, { passive: d }) : n.addEventListener(r, i, !1);
  }
  function Vc(n, r, i, u, d) {
    var m = u;
    if ((r & 1) === 0 && (r & 2) === 0 && u !== null) e: for (; ; ) {
      if (u === null) return;
      var E = u.tag;
      if (E === 3 || E === 4) {
        var O = u.stateNode.containerInfo;
        if (O === d || O.nodeType === 8 && O.parentNode === d) break;
        if (E === 4) for (E = u.return; E !== null; ) {
          var A = E.tag;
          if ((A === 3 || A === 4) && (A = E.stateNode.containerInfo, A === d || A.nodeType === 8 && A.parentNode === d)) return;
          E = E.return;
        }
        for (; O !== null; ) {
          if (E = Ml(O), E === null) return;
          if (A = E.tag, A === 5 || A === 6) {
            u = m = E;
            continue e;
          }
          O = O.parentNode;
        }
      }
      u = u.return;
    }
    yl(function() {
      var K = m, ve = Zt(i), ge = [];
      e: {
        var de = Ad.get(n);
        if (de !== void 0) {
          var Be = Ot, Ke = n;
          switch (n) {
            case "keypress":
              if (ne(i) === 0) break e;
            case "keydown":
            case "keyup":
              Be = wd;
              break;
            case "focusin":
              Ke = "focus", Be = bl;
              break;
            case "focusout":
              Ke = "blur", Be = bl;
              break;
            case "beforeblur":
            case "afterblur":
              Be = bl;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Be = zi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Be = ri;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Be = jv;
              break;
            case Qv:
            case Kv:
            case Xv:
              Be = Mc;
              break;
            case Jv:
              Be = oi;
              break;
            case "scroll":
              Be = dn;
              break;
            case "wheel":
              Be = ii;
              break;
            case "copy":
            case "cut":
            case "paste":
              Be = Mv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Be = Lv;
          }
          var et = (r & 4) !== 0, In = !et && n === "scroll", H = et ? de !== null ? de + "Capture" : null : de;
          et = [];
          for (var P = K, W; P !== null; ) {
            W = P;
            var he = W.stateNode;
            if (W.tag === 5 && he !== null && (W = he, H !== null && (he = Ur(P, H), he != null && et.push(Nu(P, he, W)))), In) break;
            P = P.return;
          }
          0 < et.length && (de = new Be(de, Ke, null, i, ve), ge.push({ event: de, listeners: et }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (de = n === "mouseover" || n === "pointerover", Be = n === "mouseout" || n === "pointerout", de && i !== cn && (Ke = i.relatedTarget || i.fromElement) && (Ml(Ke) || Ke[li])) break e;
          if ((Be || de) && (de = ve.window === ve ? ve : (de = ve.ownerDocument) ? de.defaultView || de.parentWindow : window, Be ? (Ke = i.relatedTarget || i.toElement, Be = K, Ke = Ke ? Ml(Ke) : null, Ke !== null && (In = Et(Ke), Ke !== In || Ke.tag !== 5 && Ke.tag !== 6) && (Ke = null)) : (Be = null, Ke = K), Be !== Ke)) {
            if (et = zi, he = "onMouseLeave", H = "onMouseEnter", P = "mouse", (n === "pointerout" || n === "pointerover") && (et = Lv, he = "onPointerLeave", H = "onPointerEnter", P = "pointer"), In = Be == null ? de : po(Be), W = Ke == null ? de : po(Ke), de = new et(he, P + "leave", Be, i, ve), de.target = In, de.relatedTarget = W, he = null, Ml(ve) === K && (et = new et(H, P + "enter", Ke, i, ve), et.target = W, et.relatedTarget = In, he = et), In = he, Be && Ke) t: {
              for (et = Be, H = Ke, P = 0, W = et; W; W = Ii(W)) P++;
              for (W = 0, he = H; he; he = Ii(he)) W++;
              for (; 0 < P - W; ) et = Ii(et), P--;
              for (; 0 < W - P; ) H = Ii(H), W--;
              for (; P--; ) {
                if (et === H || H !== null && et === H.alternate) break t;
                et = Ii(et), H = Ii(H);
              }
              et = null;
            }
            else et = null;
            Be !== null && eh(ge, de, Be, et, !1), Ke !== null && In !== null && eh(ge, In, Ke, et, !0);
          }
        }
        e: {
          if (de = K ? po(K) : window, Be = de.nodeName && de.nodeName.toLowerCase(), Be === "select" || Be === "input" && de.type === "file") var Xe = Iy;
          else if (Fv(de)) if ($v) Xe = Yv;
          else {
            Xe = Wv;
            var ct = Fy;
          }
          else (Be = de.nodeName) && Be.toLowerCase() === "input" && (de.type === "checkbox" || de.type === "radio") && (Xe = Vy);
          if (Xe && (Xe = Xe(n, K))) {
            Td(ge, Xe, i, ve);
            break e;
          }
          ct && ct(n, de, K), n === "focusout" && (ct = de._wrapperState) && ct.controlled && de.type === "number" && ga(de, "number", de.value);
        }
        switch (ct = K ? po(K) : window, n) {
          case "focusin":
            (Fv(ct) || ct.contentEditable === "true") && (ku = ct, Od = K, Es = null);
            break;
          case "focusout":
            Es = Od = ku = null;
            break;
          case "mousedown":
            Dd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Dd = !1, Ld(ge, i, ve);
            break;
          case "selectionchange":
            if (Hy) break;
          case "keydown":
          case "keyup":
            Ld(ge, i, ve);
        }
        var dt;
        if (bu) e: {
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
        else wu ? zv(n, i) && (yt = "onCompositionEnd") : n === "keydown" && i.keyCode === 229 && (yt = "onCompositionStart");
        yt && (Av && i.locale !== "ko" && (wu || yt !== "onCompositionStart" ? yt === "onCompositionEnd" && wu && (dt = Q()) : (co = ve, S = "value" in co ? co.value : co.textContent, wu = !0)), ct = bs(K, yt), 0 < ct.length && (yt = new Ed(yt, n, null, i, ve), ge.push({ event: yt, listeners: ct }), dt ? yt.data = dt : (dt = Pv(i), dt !== null && (yt.data = dt)))), (dt = gs ? Iv(n, i) : zy(n, i)) && (K = bs(K, "onBeforeInput"), 0 < K.length && (ve = new Ed("onBeforeInput", "beforeinput", null, i, ve), ge.push({ event: ve, listeners: K }), ve.data = dt));
      }
      Tl(ge, r);
    });
  }
  function Nu(n, r, i) {
    return { instance: n, listener: r, currentTarget: i };
  }
  function bs(n, r) {
    for (var i = r + "Capture", u = []; n !== null; ) {
      var d = n, m = d.stateNode;
      d.tag === 5 && m !== null && (d = m, m = Ur(n, i), m != null && u.unshift(Nu(n, m, d)), m = Ur(n, r), m != null && u.push(Nu(n, m, d))), n = n.return;
    }
    return u;
  }
  function Ii(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function eh(n, r, i, u, d) {
    for (var m = r._reactName, E = []; i !== null && i !== u; ) {
      var O = i, A = O.alternate, K = O.stateNode;
      if (A !== null && A === u) break;
      O.tag === 5 && K !== null && (O = K, d ? (A = Ur(i, m), A != null && E.unshift(Nu(i, A, O))) : d || (A = Ur(i, m), A != null && E.push(Nu(i, A, O)))), i = i.return;
    }
    E.length !== 0 && n.push({ event: r, listeners: E });
  }
  var th = /\r\n?/g, Wy = /\u0000|\uFFFD/g;
  function nh(n) {
    return (typeof n == "string" ? n : "" + n).replace(th, `
`).replace(Wy, "");
  }
  function $c(n, r, i) {
    if (r = nh(r), nh(n) !== r && i) throw Error(f(425));
  }
  function Fi() {
  }
  var ws = null, Nl = null;
  function Hc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Bc = typeof setTimeout == "function" ? setTimeout : void 0, Pd = typeof clearTimeout == "function" ? clearTimeout : void 0, rh = typeof Promise == "function" ? Promise : void 0, Mu = typeof queueMicrotask == "function" ? queueMicrotask : typeof rh < "u" ? function(n) {
    return rh.resolve(null).then(n).catch(qc);
  } : Bc;
  function qc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Ou(n, r) {
    var i = r, u = 0;
    do {
      var d = i.nextSibling;
      if (n.removeChild(i), d && d.nodeType === 8) if (i = d.data, i === "/$") {
        if (u === 0) {
          n.removeChild(d), so(r);
          return;
        }
        u--;
      } else i !== "$" && i !== "$?" && i !== "$!" || u++;
      i = d;
    } while (i);
    so(r);
  }
  function Oo(n) {
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
  function ah(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var i = n.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (r === 0) return n;
          r--;
        } else i === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Vi = Math.random().toString(36).slice(2), Do = "__reactFiber$" + Vi, Rs = "__reactProps$" + Vi, li = "__reactContainer$" + Vi, ks = "__reactEvents$" + Vi, Du = "__reactListeners$" + Vi, Yy = "__reactHandles$" + Vi;
  function Ml(n) {
    var r = n[Do];
    if (r) return r;
    for (var i = n.parentNode; i; ) {
      if (r = i[li] || i[Do]) {
        if (i = r.alternate, r.child !== null || i !== null && i.child !== null) for (n = ah(n); n !== null; ) {
          if (i = n[Do]) return i;
          n = ah(n);
        }
        return r;
      }
      n = i, i = n.parentNode;
    }
    return null;
  }
  function ot(n) {
    return n = n[Do] || n[li], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function po(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(f(33));
  }
  function wn(n) {
    return n[Rs] || null;
  }
  var Ut = [], Ia = -1;
  function Fa(n) {
    return { current: n };
  }
  function pn(n) {
    0 > Ia || (n.current = Ut[Ia], Ut[Ia] = null, Ia--);
  }
  function rt(n, r) {
    Ia++, Ut[Ia] = n.current, n.current = r;
  }
  var Or = {}, Nn = Fa(Or), er = Fa(!1), ra = Or;
  function aa(n, r) {
    var i = n.type.contextTypes;
    if (!i) return Or;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var d = {}, m;
    for (m in i) d[m] = r[m];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = d), d;
  }
  function Hn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Lu() {
    pn(er), pn(Nn);
  }
  function oh(n, r, i) {
    if (Nn.current !== Or) throw Error(f(168));
    rt(Nn, r), rt(er, i);
  }
  function Ts(n, r, i) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return i;
    u = u.getChildContext();
    for (var d in u) if (!(d in r)) throw Error(f(108, Ue(n) || "Unknown", d));
    return me({}, i, u);
  }
  function lr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Or, ra = Nn.current, rt(Nn, n), rt(er, er.current), !0;
  }
  function Wc(n, r, i) {
    var u = n.stateNode;
    if (!u) throw Error(f(169));
    i ? (n = Ts(n, r, ra), u.__reactInternalMemoizedMergedChildContext = n, pn(er), pn(Nn), rt(Nn, n)) : pn(er), rt(er, i);
  }
  var Lo = null, ju = !1, ui = !1;
  function Yc(n) {
    Lo === null ? Lo = [n] : Lo.push(n);
  }
  function $i(n) {
    ju = !0, Yc(n);
  }
  function jo() {
    if (!ui && Lo !== null) {
      ui = !0;
      var n = 0, r = Ht;
      try {
        var i = Lo;
        for (Ht = 1; n < i.length; n++) {
          var u = i[n];
          do
            u = u(!0);
          while (u !== null);
        }
        Lo = null, ju = !1;
      } catch (d) {
        throw Lo !== null && (Lo = Lo.slice(n + 1)), mn(io, jo), d;
      } finally {
        Ht = r, ui = !1;
      }
    }
    return null;
  }
  var Hi = [], Bi = 0, qi = null, si = 0, Bn = [], Va = 0, Ea = null, Ao = 1, Uo = "";
  function Ol(n, r) {
    Hi[Bi++] = si, Hi[Bi++] = qi, qi = n, si = r;
  }
  function ih(n, r, i) {
    Bn[Va++] = Ao, Bn[Va++] = Uo, Bn[Va++] = Ea, Ea = n;
    var u = Ao;
    n = Uo;
    var d = 32 - Pr(u) - 1;
    u &= ~(1 << d), i += 1;
    var m = 32 - Pr(r) + d;
    if (30 < m) {
      var E = d - d % 5;
      m = (u & (1 << E) - 1).toString(32), u >>= E, d -= E, Ao = 1 << 32 - Pr(r) + d | i << d | u, Uo = m + n;
    } else Ao = 1 << m | i << d | u, Uo = n;
  }
  function Gc(n) {
    n.return !== null && (Ol(n, 1), ih(n, 1, 0));
  }
  function Qc(n) {
    for (; n === qi; ) qi = Hi[--Bi], Hi[Bi] = null, si = Hi[--Bi], Hi[Bi] = null;
    for (; n === Ea; ) Ea = Bn[--Va], Bn[Va] = null, Uo = Bn[--Va], Bn[Va] = null, Ao = Bn[--Va], Bn[Va] = null;
  }
  var oa = null, ia = null, _n = !1, $a = null;
  function Id(n, r) {
    var i = Ya(5, null, null, 0);
    i.elementType = "DELETED", i.stateNode = r, i.return = n, r = n.deletions, r === null ? (n.deletions = [i], n.flags |= 16) : r.push(i);
  }
  function lh(n, r) {
    switch (n.tag) {
      case 5:
        var i = n.type;
        return r = r.nodeType !== 1 || i.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, oa = n, ia = Oo(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, oa = n, ia = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (i = Ea !== null ? { id: Ao, overflow: Uo } : null, n.memoizedState = { dehydrated: r, treeContext: i, retryLane: 1073741824 }, i = Ya(18, null, null, 0), i.stateNode = r, i.return = n, n.child = i, oa = n, ia = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Fd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Vd(n) {
    if (_n) {
      var r = ia;
      if (r) {
        var i = r;
        if (!lh(n, r)) {
          if (Fd(n)) throw Error(f(418));
          r = Oo(i.nextSibling);
          var u = oa;
          r && lh(n, r) ? Id(u, i) : (n.flags = n.flags & -4097 | 2, _n = !1, oa = n);
        }
      } else {
        if (Fd(n)) throw Error(f(418));
        n.flags = n.flags & -4097 | 2, _n = !1, oa = n;
      }
    }
  }
  function tr(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    oa = n;
  }
  function Kc(n) {
    if (n !== oa) return !1;
    if (!_n) return tr(n), _n = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Hc(n.type, n.memoizedProps)), r && (r = ia)) {
      if (Fd(n)) throw Ns(), Error(f(418));
      for (; r; ) Id(n, r), r = Oo(r.nextSibling);
    }
    if (tr(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(f(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var i = n.data;
            if (i === "/$") {
              if (r === 0) {
                ia = Oo(n.nextSibling);
                break e;
              }
              r--;
            } else i !== "$" && i !== "$!" && i !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ia = null;
      }
    } else ia = oa ? Oo(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Ns() {
    for (var n = ia; n; ) n = Oo(n.nextSibling);
  }
  function Wi() {
    ia = oa = null, _n = !1;
  }
  function ci(n) {
    $a === null ? $a = [n] : $a.push(n);
  }
  var Gy = De.ReactCurrentBatchConfig;
  function Dl(n, r, i) {
    if (n = i.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (i._owner) {
        if (i = i._owner, i) {
          if (i.tag !== 1) throw Error(f(309));
          var u = i.stateNode;
        }
        if (!u) throw Error(f(147, n));
        var d = u, m = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(E) {
          var O = d.refs;
          E === null ? delete O[m] : O[m] = E;
        }, r._stringRef = m, r);
      }
      if (typeof n != "string") throw Error(f(284));
      if (!i._owner) throw Error(f(290, n));
    }
    return n;
  }
  function Xc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(f(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function uh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Ll(n) {
    function r(H, P) {
      if (n) {
        var W = H.deletions;
        W === null ? (H.deletions = [P], H.flags |= 16) : W.push(P);
      }
    }
    function i(H, P) {
      if (!n) return null;
      for (; P !== null; ) r(H, P), P = P.sibling;
      return null;
    }
    function u(H, P) {
      for (H = /* @__PURE__ */ new Map(); P !== null; ) P.key !== null ? H.set(P.key, P) : H.set(P.index, P), P = P.sibling;
      return H;
    }
    function d(H, P) {
      return H = el(H, P), H.index = 0, H.sibling = null, H;
    }
    function m(H, P, W) {
      return H.index = W, n ? (W = H.alternate, W !== null ? (W = W.index, W < P ? (H.flags |= 2, P) : W) : (H.flags |= 2, P)) : (H.flags |= 1048576, P);
    }
    function E(H) {
      return n && H.alternate === null && (H.flags |= 2), H;
    }
    function O(H, P, W, he) {
      return P === null || P.tag !== 6 ? (P = gp(W, H.mode, he), P.return = H, P) : (P = d(P, W), P.return = H, P);
    }
    function A(H, P, W, he) {
      var Xe = W.type;
      return Xe === Te ? ve(H, P, W.props.children, he, W.key) : P !== null && (P.elementType === Xe || typeof Xe == "object" && Xe !== null && Xe.$$typeof === ue && uh(Xe) === P.type) ? (he = d(P, W.props), he.ref = Dl(H, P, W), he.return = H, he) : (he = oc(W.type, W.key, W.props, null, H.mode, he), he.ref = Dl(H, P, W), he.return = H, he);
    }
    function K(H, P, W, he) {
      return P === null || P.tag !== 4 || P.stateNode.containerInfo !== W.containerInfo || P.stateNode.implementation !== W.implementation ? (P = Of(W, H.mode, he), P.return = H, P) : (P = d(P, W.children || []), P.return = H, P);
    }
    function ve(H, P, W, he, Xe) {
      return P === null || P.tag !== 7 ? (P = mi(W, H.mode, he, Xe), P.return = H, P) : (P = d(P, W), P.return = H, P);
    }
    function ge(H, P, W) {
      if (typeof P == "string" && P !== "" || typeof P == "number") return P = gp("" + P, H.mode, W), P.return = H, P;
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case ae:
            return W = oc(P.type, P.key, P.props, null, H.mode, W), W.ref = Dl(H, null, P), W.return = H, W;
          case Ie:
            return P = Of(P, H.mode, W), P.return = H, P;
          case ue:
            var he = P._init;
            return ge(H, he(P._payload), W);
        }
        if (or(P) || Me(P)) return P = mi(P, H.mode, W, null), P.return = H, P;
        Xc(H, P);
      }
      return null;
    }
    function de(H, P, W, he) {
      var Xe = P !== null ? P.key : null;
      if (typeof W == "string" && W !== "" || typeof W == "number") return Xe !== null ? null : O(H, P, "" + W, he);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case ae:
            return W.key === Xe ? A(H, P, W, he) : null;
          case Ie:
            return W.key === Xe ? K(H, P, W, he) : null;
          case ue:
            return Xe = W._init, de(
              H,
              P,
              Xe(W._payload),
              he
            );
        }
        if (or(W) || Me(W)) return Xe !== null ? null : ve(H, P, W, he, null);
        Xc(H, W);
      }
      return null;
    }
    function Be(H, P, W, he, Xe) {
      if (typeof he == "string" && he !== "" || typeof he == "number") return H = H.get(W) || null, O(P, H, "" + he, Xe);
      if (typeof he == "object" && he !== null) {
        switch (he.$$typeof) {
          case ae:
            return H = H.get(he.key === null ? W : he.key) || null, A(P, H, he, Xe);
          case Ie:
            return H = H.get(he.key === null ? W : he.key) || null, K(P, H, he, Xe);
          case ue:
            var ct = he._init;
            return Be(H, P, W, ct(he._payload), Xe);
        }
        if (or(he) || Me(he)) return H = H.get(W) || null, ve(P, H, he, Xe, null);
        Xc(P, he);
      }
      return null;
    }
    function Ke(H, P, W, he) {
      for (var Xe = null, ct = null, dt = P, yt = P = 0, cr = null; dt !== null && yt < W.length; yt++) {
        dt.index > yt ? (cr = dt, dt = null) : cr = dt.sibling;
        var Wt = de(H, dt, W[yt], he);
        if (Wt === null) {
          dt === null && (dt = cr);
          break;
        }
        n && dt && Wt.alternate === null && r(H, dt), P = m(Wt, P, yt), ct === null ? Xe = Wt : ct.sibling = Wt, ct = Wt, dt = cr;
      }
      if (yt === W.length) return i(H, dt), _n && Ol(H, yt), Xe;
      if (dt === null) {
        for (; yt < W.length; yt++) dt = ge(H, W[yt], he), dt !== null && (P = m(dt, P, yt), ct === null ? Xe = dt : ct.sibling = dt, ct = dt);
        return _n && Ol(H, yt), Xe;
      }
      for (dt = u(H, dt); yt < W.length; yt++) cr = Be(dt, H, yt, W[yt], he), cr !== null && (n && cr.alternate !== null && dt.delete(cr.key === null ? yt : cr.key), P = m(cr, P, yt), ct === null ? Xe = cr : ct.sibling = cr, ct = cr);
      return n && dt.forEach(function(rl) {
        return r(H, rl);
      }), _n && Ol(H, yt), Xe;
    }
    function et(H, P, W, he) {
      var Xe = Me(W);
      if (typeof Xe != "function") throw Error(f(150));
      if (W = Xe.call(W), W == null) throw Error(f(151));
      for (var ct = Xe = null, dt = P, yt = P = 0, cr = null, Wt = W.next(); dt !== null && !Wt.done; yt++, Wt = W.next()) {
        dt.index > yt ? (cr = dt, dt = null) : cr = dt.sibling;
        var rl = de(H, dt, Wt.value, he);
        if (rl === null) {
          dt === null && (dt = cr);
          break;
        }
        n && dt && rl.alternate === null && r(H, dt), P = m(rl, P, yt), ct === null ? Xe = rl : ct.sibling = rl, ct = rl, dt = cr;
      }
      if (Wt.done) return i(
        H,
        dt
      ), _n && Ol(H, yt), Xe;
      if (dt === null) {
        for (; !Wt.done; yt++, Wt = W.next()) Wt = ge(H, Wt.value, he), Wt !== null && (P = m(Wt, P, yt), ct === null ? Xe = Wt : ct.sibling = Wt, ct = Wt);
        return _n && Ol(H, yt), Xe;
      }
      for (dt = u(H, dt); !Wt.done; yt++, Wt = W.next()) Wt = Be(dt, H, yt, Wt.value, he), Wt !== null && (n && Wt.alternate !== null && dt.delete(Wt.key === null ? yt : Wt.key), P = m(Wt, P, yt), ct === null ? Xe = Wt : ct.sibling = Wt, ct = Wt);
      return n && dt.forEach(function(Bh) {
        return r(H, Bh);
      }), _n && Ol(H, yt), Xe;
    }
    function In(H, P, W, he) {
      if (typeof W == "object" && W !== null && W.type === Te && W.key === null && (W = W.props.children), typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case ae:
            e: {
              for (var Xe = W.key, ct = P; ct !== null; ) {
                if (ct.key === Xe) {
                  if (Xe = W.type, Xe === Te) {
                    if (ct.tag === 7) {
                      i(H, ct.sibling), P = d(ct, W.props.children), P.return = H, H = P;
                      break e;
                    }
                  } else if (ct.elementType === Xe || typeof Xe == "object" && Xe !== null && Xe.$$typeof === ue && uh(Xe) === ct.type) {
                    i(H, ct.sibling), P = d(ct, W.props), P.ref = Dl(H, ct, W), P.return = H, H = P;
                    break e;
                  }
                  i(H, ct);
                  break;
                } else r(H, ct);
                ct = ct.sibling;
              }
              W.type === Te ? (P = mi(W.props.children, H.mode, he, W.key), P.return = H, H = P) : (he = oc(W.type, W.key, W.props, null, H.mode, he), he.ref = Dl(H, P, W), he.return = H, H = he);
            }
            return E(H);
          case Ie:
            e: {
              for (ct = W.key; P !== null; ) {
                if (P.key === ct) if (P.tag === 4 && P.stateNode.containerInfo === W.containerInfo && P.stateNode.implementation === W.implementation) {
                  i(H, P.sibling), P = d(P, W.children || []), P.return = H, H = P;
                  break e;
                } else {
                  i(H, P);
                  break;
                }
                else r(H, P);
                P = P.sibling;
              }
              P = Of(W, H.mode, he), P.return = H, H = P;
            }
            return E(H);
          case ue:
            return ct = W._init, In(H, P, ct(W._payload), he);
        }
        if (or(W)) return Ke(H, P, W, he);
        if (Me(W)) return et(H, P, W, he);
        Xc(H, W);
      }
      return typeof W == "string" && W !== "" || typeof W == "number" ? (W = "" + W, P !== null && P.tag === 6 ? (i(H, P.sibling), P = d(P, W), P.return = H, H = P) : (i(H, P), P = gp(W, H.mode, he), P.return = H, H = P), E(H)) : i(H, P);
    }
    return In;
  }
  var An = Ll(!0), ze = Ll(!1), xa = Fa(null), la = null, Au = null, $d = null;
  function Hd() {
    $d = Au = la = null;
  }
  function Bd(n) {
    var r = xa.current;
    pn(xa), n._currentValue = r;
  }
  function qd(n, r, i) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === i) break;
      n = n.return;
    }
  }
  function Rn(n, r) {
    la = n, $d = Au = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (Wn = !0), n.firstContext = null);
  }
  function Ha(n) {
    var r = n._currentValue;
    if ($d !== n) if (n = { context: n, memoizedValue: r, next: null }, Au === null) {
      if (la === null) throw Error(f(308));
      Au = n, la.dependencies = { lanes: 0, firstContext: n };
    } else Au = Au.next = n;
    return r;
  }
  var jl = null;
  function Wd(n) {
    jl === null ? jl = [n] : jl.push(n);
  }
  function Yd(n, r, i, u) {
    var d = r.interleaved;
    return d === null ? (i.next = i, Wd(r)) : (i.next = d.next, d.next = i), r.interleaved = i, ba(n, u);
  }
  function ba(n, r) {
    n.lanes |= r;
    var i = n.alternate;
    for (i !== null && (i.lanes |= r), i = n, n = n.return; n !== null; ) n.childLanes |= r, i = n.alternate, i !== null && (i.childLanes |= r), i = n, n = n.return;
    return i.tag === 3 ? i.stateNode : null;
  }
  var wa = !1;
  function Gd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function sh(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function fi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Yi(n, r, i) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (zt & 2) !== 0) {
      var d = u.pending;
      return d === null ? r.next = r : (r.next = d.next, d.next = r), u.pending = r, ba(n, i);
    }
    return d = u.interleaved, d === null ? (r.next = r, Wd(u)) : (r.next = d.next, d.next = r), u.interleaved = r, ba(n, i);
  }
  function Jc(n, r, i) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (i & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, i |= u, r.lanes = i, ni(n, i);
    }
  }
  function ch(n, r) {
    var i = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, i === u)) {
      var d = null, m = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var E = { eventTime: i.eventTime, lane: i.lane, tag: i.tag, payload: i.payload, callback: i.callback, next: null };
          m === null ? d = m = E : m = m.next = E, i = i.next;
        } while (i !== null);
        m === null ? d = m = r : m = m.next = r;
      } else d = m = r;
      i = { baseState: u.baseState, firstBaseUpdate: d, lastBaseUpdate: m, shared: u.shared, effects: u.effects }, n.updateQueue = i;
      return;
    }
    n = i.lastBaseUpdate, n === null ? i.firstBaseUpdate = r : n.next = r, i.lastBaseUpdate = r;
  }
  function Ms(n, r, i, u) {
    var d = n.updateQueue;
    wa = !1;
    var m = d.firstBaseUpdate, E = d.lastBaseUpdate, O = d.shared.pending;
    if (O !== null) {
      d.shared.pending = null;
      var A = O, K = A.next;
      A.next = null, E === null ? m = K : E.next = K, E = A;
      var ve = n.alternate;
      ve !== null && (ve = ve.updateQueue, O = ve.lastBaseUpdate, O !== E && (O === null ? ve.firstBaseUpdate = K : O.next = K, ve.lastBaseUpdate = A));
    }
    if (m !== null) {
      var ge = d.baseState;
      E = 0, ve = K = A = null, O = m;
      do {
        var de = O.lane, Be = O.eventTime;
        if ((u & de) === de) {
          ve !== null && (ve = ve.next = {
            eventTime: Be,
            lane: 0,
            tag: O.tag,
            payload: O.payload,
            callback: O.callback,
            next: null
          });
          e: {
            var Ke = n, et = O;
            switch (de = r, Be = i, et.tag) {
              case 1:
                if (Ke = et.payload, typeof Ke == "function") {
                  ge = Ke.call(Be, ge, de);
                  break e;
                }
                ge = Ke;
                break e;
              case 3:
                Ke.flags = Ke.flags & -65537 | 128;
              case 0:
                if (Ke = et.payload, de = typeof Ke == "function" ? Ke.call(Be, ge, de) : Ke, de == null) break e;
                ge = me({}, ge, de);
                break e;
              case 2:
                wa = !0;
            }
          }
          O.callback !== null && O.lane !== 0 && (n.flags |= 64, de = d.effects, de === null ? d.effects = [O] : de.push(O));
        } else Be = { eventTime: Be, lane: de, tag: O.tag, payload: O.payload, callback: O.callback, next: null }, ve === null ? (K = ve = Be, A = ge) : ve = ve.next = Be, E |= de;
        if (O = O.next, O === null) {
          if (O = d.shared.pending, O === null) break;
          de = O, O = de.next, de.next = null, d.lastBaseUpdate = de, d.shared.pending = null;
        }
      } while (!0);
      if (ve === null && (A = ge), d.baseState = A, d.firstBaseUpdate = K, d.lastBaseUpdate = ve, r = d.shared.interleaved, r !== null) {
        d = r;
        do
          E |= d.lane, d = d.next;
        while (d !== r);
      } else m === null && (d.shared.lanes = 0);
      Vo |= E, n.lanes = E, n.memoizedState = ge;
    }
  }
  function Qd(n, r, i) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], d = u.callback;
      if (d !== null) {
        if (u.callback = null, u = i, typeof d != "function") throw Error(f(191, d));
        d.call(u);
      }
    }
  }
  var Os = {}, zo = Fa(Os), Ds = Fa(Os), Ls = Fa(Os);
  function Al(n) {
    if (n === Os) throw Error(f(174));
    return n;
  }
  function Kd(n, r) {
    switch (rt(Ls, r), rt(Ds, n), rt(zo, Os), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : _a(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = _a(r, n);
    }
    pn(zo), rt(zo, r);
  }
  function Ul() {
    pn(zo), pn(Ds), pn(Ls);
  }
  function fh(n) {
    Al(Ls.current);
    var r = Al(zo.current), i = _a(r, n.type);
    r !== i && (rt(Ds, n), rt(zo, i));
  }
  function Zc(n) {
    Ds.current === n && (pn(zo), pn(Ds));
  }
  var kn = Fa(0);
  function ef(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var i = r.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || i.data === "$!")) return r;
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
  var js = [];
  function it() {
    for (var n = 0; n < js.length; n++) js[n]._workInProgressVersionPrimary = null;
    js.length = 0;
  }
  var Nt = De.ReactCurrentDispatcher, Bt = De.ReactCurrentBatchConfig, an = 0, qt = null, qn = null, ur = null, tf = !1, As = !1, zl = 0, ce = 0;
  function $t() {
    throw Error(f(321));
  }
  function vt(n, r) {
    if (r === null) return !1;
    for (var i = 0; i < r.length && i < n.length; i++) if (!fo(n[i], r[i])) return !1;
    return !0;
  }
  function Gi(n, r, i, u, d, m) {
    if (an = m, qt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Nt.current = n === null || n.memoizedState === null ? yf : Vs, n = i(u, d), As) {
      m = 0;
      do {
        if (As = !1, zl = 0, 25 <= m) throw Error(f(301));
        m += 1, ur = qn = null, r.updateQueue = null, Nt.current = gf, n = i(u, d);
      } while (As);
    }
    if (Nt.current = $l, r = qn !== null && qn.next !== null, an = 0, ur = qn = qt = null, tf = !1, r) throw Error(f(300));
    return n;
  }
  function vo() {
    var n = zl !== 0;
    return zl = 0, n;
  }
  function Dr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ur === null ? qt.memoizedState = ur = n : ur = ur.next = n, ur;
  }
  function Un() {
    if (qn === null) {
      var n = qt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = qn.next;
    var r = ur === null ? qt.memoizedState : ur.next;
    if (r !== null) ur = r, qn = n;
    else {
      if (n === null) throw Error(f(310));
      qn = n, n = { memoizedState: qn.memoizedState, baseState: qn.baseState, baseQueue: qn.baseQueue, queue: qn.queue, next: null }, ur === null ? qt.memoizedState = ur = n : ur = ur.next = n;
    }
    return ur;
  }
  function di(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Qi(n) {
    var r = Un(), i = r.queue;
    if (i === null) throw Error(f(311));
    i.lastRenderedReducer = n;
    var u = qn, d = u.baseQueue, m = i.pending;
    if (m !== null) {
      if (d !== null) {
        var E = d.next;
        d.next = m.next, m.next = E;
      }
      u.baseQueue = d = m, i.pending = null;
    }
    if (d !== null) {
      m = d.next, u = u.baseState;
      var O = E = null, A = null, K = m;
      do {
        var ve = K.lane;
        if ((an & ve) === ve) A !== null && (A = A.next = { lane: 0, action: K.action, hasEagerState: K.hasEagerState, eagerState: K.eagerState, next: null }), u = K.hasEagerState ? K.eagerState : n(u, K.action);
        else {
          var ge = {
            lane: ve,
            action: K.action,
            hasEagerState: K.hasEagerState,
            eagerState: K.eagerState,
            next: null
          };
          A === null ? (O = A = ge, E = u) : A = A.next = ge, qt.lanes |= ve, Vo |= ve;
        }
        K = K.next;
      } while (K !== null && K !== m);
      A === null ? E = u : A.next = O, fo(u, r.memoizedState) || (Wn = !0), r.memoizedState = u, r.baseState = E, r.baseQueue = A, i.lastRenderedState = u;
    }
    if (n = i.interleaved, n !== null) {
      d = n;
      do
        m = d.lane, qt.lanes |= m, Vo |= m, d = d.next;
      while (d !== n);
    } else d === null && (i.lanes = 0);
    return [r.memoizedState, i.dispatch];
  }
  function Pl(n) {
    var r = Un(), i = r.queue;
    if (i === null) throw Error(f(311));
    i.lastRenderedReducer = n;
    var u = i.dispatch, d = i.pending, m = r.memoizedState;
    if (d !== null) {
      i.pending = null;
      var E = d = d.next;
      do
        m = n(m, E.action), E = E.next;
      while (E !== d);
      fo(m, r.memoizedState) || (Wn = !0), r.memoizedState = m, r.baseQueue === null && (r.baseState = m), i.lastRenderedState = m;
    }
    return [m, u];
  }
  function nf() {
  }
  function rf(n, r) {
    var i = qt, u = Un(), d = r(), m = !fo(u.memoizedState, d);
    if (m && (u.memoizedState = d, Wn = !0), u = u.queue, Us(lf.bind(null, i, u, n), [n]), u.getSnapshot !== r || m || ur !== null && ur.memoizedState.tag & 1) {
      if (i.flags |= 2048, Il(9, of.bind(null, i, u, d, r), void 0, null), nr === null) throw Error(f(349));
      (an & 30) !== 0 || af(i, r, d);
    }
    return d;
  }
  function af(n, r, i) {
    n.flags |= 16384, n = { getSnapshot: r, value: i }, r = qt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, qt.updateQueue = r, r.stores = [n]) : (i = r.stores, i === null ? r.stores = [n] : i.push(n));
  }
  function of(n, r, i, u) {
    r.value = i, r.getSnapshot = u, uf(r) && sf(n);
  }
  function lf(n, r, i) {
    return i(function() {
      uf(r) && sf(n);
    });
  }
  function uf(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var i = r();
      return !fo(n, i);
    } catch {
      return !0;
    }
  }
  function sf(n) {
    var r = ba(n, 1);
    r !== null && Br(r, n, 1, -1);
  }
  function cf(n) {
    var r = Dr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: di, lastRenderedState: n }, r.queue = n, n = n.dispatch = Vl.bind(null, qt, n), [r.memoizedState, n];
  }
  function Il(n, r, i, u) {
    return n = { tag: n, create: r, destroy: i, deps: u, next: null }, r = qt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, qt.updateQueue = r, r.lastEffect = n.next = n) : (i = r.lastEffect, i === null ? r.lastEffect = n.next = n : (u = i.next, i.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function ff() {
    return Un().memoizedState;
  }
  function Uu(n, r, i, u) {
    var d = Dr();
    qt.flags |= n, d.memoizedState = Il(1 | r, i, void 0, u === void 0 ? null : u);
  }
  function zu(n, r, i, u) {
    var d = Un();
    u = u === void 0 ? null : u;
    var m = void 0;
    if (qn !== null) {
      var E = qn.memoizedState;
      if (m = E.destroy, u !== null && vt(u, E.deps)) {
        d.memoizedState = Il(r, i, m, u);
        return;
      }
    }
    qt.flags |= n, d.memoizedState = Il(1 | r, i, m, u);
  }
  function df(n, r) {
    return Uu(8390656, 8, n, r);
  }
  function Us(n, r) {
    return zu(2048, 8, n, r);
  }
  function pf(n, r) {
    return zu(4, 2, n, r);
  }
  function zs(n, r) {
    return zu(4, 4, n, r);
  }
  function Fl(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function vf(n, r, i) {
    return i = i != null ? i.concat([n]) : null, zu(4, 4, Fl.bind(null, r, n), i);
  }
  function Ps() {
  }
  function hf(n, r) {
    var i = Un();
    r = r === void 0 ? null : r;
    var u = i.memoizedState;
    return u !== null && r !== null && vt(r, u[1]) ? u[0] : (i.memoizedState = [n, r], n);
  }
  function mf(n, r) {
    var i = Un();
    r = r === void 0 ? null : r;
    var u = i.memoizedState;
    return u !== null && r !== null && vt(r, u[1]) ? u[0] : (n = n(), i.memoizedState = [n, r], n);
  }
  function Xd(n, r, i) {
    return (an & 21) === 0 ? (n.baseState && (n.baseState = !1, Wn = !0), n.memoizedState = i) : (fo(i, r) || (i = mu(), qt.lanes |= i, Vo |= i, n.baseState = !0), r);
  }
  function Is(n, r) {
    var i = Ht;
    Ht = i !== 0 && 4 > i ? i : 4, n(!0);
    var u = Bt.transition;
    Bt.transition = {};
    try {
      n(!1), r();
    } finally {
      Ht = i, Bt.transition = u;
    }
  }
  function Jd() {
    return Un().memoizedState;
  }
  function Fs(n, r, i) {
    var u = $o(n);
    if (i = { lane: u, action: i, hasEagerState: !1, eagerState: null, next: null }, ua(n)) dh(r, i);
    else if (i = Yd(n, r, i, u), i !== null) {
      var d = Qn();
      Br(i, n, u, d), un(i, r, u);
    }
  }
  function Vl(n, r, i) {
    var u = $o(n), d = { lane: u, action: i, hasEagerState: !1, eagerState: null, next: null };
    if (ua(n)) dh(r, d);
    else {
      var m = n.alternate;
      if (n.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer, m !== null)) try {
        var E = r.lastRenderedState, O = m(E, i);
        if (d.hasEagerState = !0, d.eagerState = O, fo(O, E)) {
          var A = r.interleaved;
          A === null ? (d.next = d, Wd(r)) : (d.next = A.next, A.next = d), r.interleaved = d;
          return;
        }
      } catch {
      }
      i = Yd(n, r, d, u), i !== null && (d = Qn(), Br(i, n, u, d), un(i, r, u));
    }
  }
  function ua(n) {
    var r = n.alternate;
    return n === qt || r !== null && r === qt;
  }
  function dh(n, r) {
    As = tf = !0;
    var i = n.pending;
    i === null ? r.next = r : (r.next = i.next, i.next = r), n.pending = r;
  }
  function un(n, r, i) {
    if ((i & 4194240) !== 0) {
      var u = r.lanes;
      u &= n.pendingLanes, i |= u, r.lanes = i, ni(n, i);
    }
  }
  var $l = { readContext: Ha, useCallback: $t, useContext: $t, useEffect: $t, useImperativeHandle: $t, useInsertionEffect: $t, useLayoutEffect: $t, useMemo: $t, useReducer: $t, useRef: $t, useState: $t, useDebugValue: $t, useDeferredValue: $t, useTransition: $t, useMutableSource: $t, useSyncExternalStore: $t, useId: $t, unstable_isNewReconciler: !1 }, yf = { readContext: Ha, useCallback: function(n, r) {
    return Dr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ha, useEffect: df, useImperativeHandle: function(n, r, i) {
    return i = i != null ? i.concat([n]) : null, Uu(
      4194308,
      4,
      Fl.bind(null, r, n),
      i
    );
  }, useLayoutEffect: function(n, r) {
    return Uu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Uu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var i = Dr();
    return r = r === void 0 ? null : r, n = n(), i.memoizedState = [n, r], n;
  }, useReducer: function(n, r, i) {
    var u = Dr();
    return r = i !== void 0 ? i(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = Fs.bind(null, qt, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = Dr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: cf, useDebugValue: Ps, useDeferredValue: function(n) {
    return Dr().memoizedState = n;
  }, useTransition: function() {
    var n = cf(!1), r = n[0];
    return n = Is.bind(null, n[1]), Dr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, i) {
    var u = qt, d = Dr();
    if (_n) {
      if (i === void 0) throw Error(f(407));
      i = i();
    } else {
      if (i = r(), nr === null) throw Error(f(349));
      (an & 30) !== 0 || af(u, r, i);
    }
    d.memoizedState = i;
    var m = { value: i, getSnapshot: r };
    return d.queue = m, df(lf.bind(
      null,
      u,
      m,
      n
    ), [n]), u.flags |= 2048, Il(9, of.bind(null, u, m, i, r), void 0, null), i;
  }, useId: function() {
    var n = Dr(), r = nr.identifierPrefix;
    if (_n) {
      var i = Uo, u = Ao;
      i = (u & ~(1 << 32 - Pr(u) - 1)).toString(32) + i, r = ":" + r + "R" + i, i = zl++, 0 < i && (r += "H" + i.toString(32)), r += ":";
    } else i = ce++, r = ":" + r + "r" + i.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Vs = {
    readContext: Ha,
    useCallback: hf,
    useContext: Ha,
    useEffect: Us,
    useImperativeHandle: vf,
    useInsertionEffect: pf,
    useLayoutEffect: zs,
    useMemo: mf,
    useReducer: Qi,
    useRef: ff,
    useState: function() {
      return Qi(di);
    },
    useDebugValue: Ps,
    useDeferredValue: function(n) {
      var r = Un();
      return Xd(r, qn.memoizedState, n);
    },
    useTransition: function() {
      var n = Qi(di)[0], r = Un().memoizedState;
      return [n, r];
    },
    useMutableSource: nf,
    useSyncExternalStore: rf,
    useId: Jd,
    unstable_isNewReconciler: !1
  }, gf = { readContext: Ha, useCallback: hf, useContext: Ha, useEffect: Us, useImperativeHandle: vf, useInsertionEffect: pf, useLayoutEffect: zs, useMemo: mf, useReducer: Pl, useRef: ff, useState: function() {
    return Pl(di);
  }, useDebugValue: Ps, useDeferredValue: function(n) {
    var r = Un();
    return qn === null ? r.memoizedState = n : Xd(r, qn.memoizedState, n);
  }, useTransition: function() {
    var n = Pl(di)[0], r = Un().memoizedState;
    return [n, r];
  }, useMutableSource: nf, useSyncExternalStore: rf, useId: Jd, unstable_isNewReconciler: !1 };
  function ho(n, r) {
    if (n && n.defaultProps) {
      r = me({}, r), n = n.defaultProps;
      for (var i in n) r[i] === void 0 && (r[i] = n[i]);
      return r;
    }
    return r;
  }
  function Zd(n, r, i, u) {
    r = n.memoizedState, i = i(u, r), i = i == null ? r : me({}, r, i), n.memoizedState = i, n.lanes === 0 && (n.updateQueue.baseState = i);
  }
  var _f = { isMounted: function(n) {
    return (n = n._reactInternals) ? Et(n) === n : !1;
  }, enqueueSetState: function(n, r, i) {
    n = n._reactInternals;
    var u = Qn(), d = $o(n), m = fi(u, d);
    m.payload = r, i != null && (m.callback = i), r = Yi(n, m, d), r !== null && (Br(r, n, d, u), Jc(r, n, d));
  }, enqueueReplaceState: function(n, r, i) {
    n = n._reactInternals;
    var u = Qn(), d = $o(n), m = fi(u, d);
    m.tag = 1, m.payload = r, i != null && (m.callback = i), r = Yi(n, m, d), r !== null && (Br(r, n, d, u), Jc(r, n, d));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var i = Qn(), u = $o(n), d = fi(i, u);
    d.tag = 2, r != null && (d.callback = r), r = Yi(n, d, u), r !== null && (Br(r, n, u, i), Jc(r, n, u));
  } };
  function ph(n, r, i, u, d, m, E) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, m, E) : r.prototype && r.prototype.isPureReactComponent ? !Ss(i, u) || !Ss(d, m) : !0;
  }
  function Sf(n, r, i) {
    var u = !1, d = Or, m = r.contextType;
    return typeof m == "object" && m !== null ? m = Ha(m) : (d = Hn(r) ? ra : Nn.current, u = r.contextTypes, m = (u = u != null) ? aa(n, d) : Or), r = new r(i, m), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = _f, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = d, n.__reactInternalMemoizedMaskedChildContext = m), r;
  }
  function vh(n, r, i, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(i, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(i, u), r.state !== n && _f.enqueueReplaceState(r, r.state, null);
  }
  function $s(n, r, i, u) {
    var d = n.stateNode;
    d.props = i, d.state = n.memoizedState, d.refs = {}, Gd(n);
    var m = r.contextType;
    typeof m == "object" && m !== null ? d.context = Ha(m) : (m = Hn(r) ? ra : Nn.current, d.context = aa(n, m)), d.state = n.memoizedState, m = r.getDerivedStateFromProps, typeof m == "function" && (Zd(n, r, m, i), d.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (r = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), r !== d.state && _f.enqueueReplaceState(d, d.state, null), Ms(n, i, d, u), d.state = n.memoizedState), typeof d.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Hl(n, r) {
    try {
      var i = "", u = r;
      do
        i += mt(u), u = u.return;
      while (u);
      var d = i;
    } catch (m) {
      d = `
Error generating stack: ` + m.message + `
` + m.stack;
    }
    return { value: n, source: r, stack: d, digest: null };
  }
  function ep(n, r, i) {
    return { value: n, source: null, stack: i ?? null, digest: r ?? null };
  }
  function tp(n, r) {
    try {
      console.error(r.value);
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  var Cf = typeof WeakMap == "function" ? WeakMap : Map;
  function hh(n, r, i) {
    i = fi(-1, i), i.tag = 3, i.payload = { element: null };
    var u = r.value;
    return i.callback = function() {
      Hu || (Hu = !0, Wl = u), tp(n, r);
    }, i;
  }
  function np(n, r, i) {
    i = fi(-1, i), i.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var d = r.value;
      i.payload = function() {
        return u(d);
      }, i.callback = function() {
        tp(n, r);
      };
    }
    var m = n.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (i.callback = function() {
      tp(n, r), typeof u != "function" && (Ji === null ? Ji = /* @__PURE__ */ new Set([this]) : Ji.add(this));
      var E = r.stack;
      this.componentDidCatch(r.value, { componentStack: E !== null ? E : "" });
    }), i;
  }
  function rp(n, r, i) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new Cf();
      var d = /* @__PURE__ */ new Set();
      u.set(r, d);
    } else d = u.get(r), d === void 0 && (d = /* @__PURE__ */ new Set(), u.set(r, d));
    d.has(i) || (d.add(i), n = tg.bind(null, n, r, i), r.then(n, n));
  }
  function mh(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Ki(n, r, i, u, d) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, i.flags |= 131072, i.flags &= -52805, i.tag === 1 && (i.alternate === null ? i.tag = 17 : (r = fi(-1, 1), r.tag = 2, Yi(i, r, 1))), i.lanes |= 1), n) : (n.flags |= 65536, n.lanes = d, n);
  }
  var Hs = De.ReactCurrentOwner, Wn = !1;
  function yr(n, r, i, u) {
    r.child = n === null ? ze(r, null, i, u) : An(r, n.child, i, u);
  }
  function sa(n, r, i, u, d) {
    i = i.render;
    var m = r.ref;
    return Rn(r, d), u = Gi(n, r, i, u, m, d), i = vo(), n !== null && !Wn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~d, qa(n, r, d)) : (_n && i && Gc(r), r.flags |= 1, yr(n, r, u, d), r.child);
  }
  function Bl(n, r, i, u, d) {
    if (n === null) {
      var m = i.type;
      return typeof m == "function" && !yp(m) && m.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (r.tag = 15, r.type = m, bt(n, r, m, u, d)) : (n = oc(i.type, null, u, r, r.mode, d), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (m = n.child, (n.lanes & d) === 0) {
      var E = m.memoizedProps;
      if (i = i.compare, i = i !== null ? i : Ss, i(E, u) && n.ref === r.ref) return qa(n, r, d);
    }
    return r.flags |= 1, n = el(m, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function bt(n, r, i, u, d) {
    if (n !== null) {
      var m = n.memoizedProps;
      if (Ss(m, u) && n.ref === r.ref) if (Wn = !1, r.pendingProps = u = m, (n.lanes & d) !== 0) (n.flags & 131072) !== 0 && (Wn = !0);
      else return r.lanes = n.lanes, qa(n, r, d);
    }
    return yh(n, r, i, u, d);
  }
  function Bs(n, r, i) {
    var u = r.pendingProps, d = u.children, m = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, rt(Fu, Ra), Ra |= i;
    else {
      if ((i & 1073741824) === 0) return n = m !== null ? m.baseLanes | i : i, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, rt(Fu, Ra), Ra |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = m !== null ? m.baseLanes : i, rt(Fu, Ra), Ra |= u;
    }
    else m !== null ? (u = m.baseLanes | i, r.memoizedState = null) : u = i, rt(Fu, Ra), Ra |= u;
    return yr(n, r, d, i), r.child;
  }
  function ap(n, r) {
    var i = r.ref;
    (n === null && i !== null || n !== null && n.ref !== i) && (r.flags |= 512, r.flags |= 2097152);
  }
  function yh(n, r, i, u, d) {
    var m = Hn(i) ? ra : Nn.current;
    return m = aa(r, m), Rn(r, d), i = Gi(n, r, i, u, m, d), u = vo(), n !== null && !Wn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~d, qa(n, r, d)) : (_n && u && Gc(r), r.flags |= 1, yr(n, r, i, d), r.child);
  }
  function gh(n, r, i, u, d) {
    if (Hn(i)) {
      var m = !0;
      lr(r);
    } else m = !1;
    if (Rn(r, d), r.stateNode === null) Ba(n, r), Sf(r, i, u), $s(r, i, u, d), u = !0;
    else if (n === null) {
      var E = r.stateNode, O = r.memoizedProps;
      E.props = O;
      var A = E.context, K = i.contextType;
      typeof K == "object" && K !== null ? K = Ha(K) : (K = Hn(i) ? ra : Nn.current, K = aa(r, K));
      var ve = i.getDerivedStateFromProps, ge = typeof ve == "function" || typeof E.getSnapshotBeforeUpdate == "function";
      ge || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (O !== u || A !== K) && vh(r, E, u, K), wa = !1;
      var de = r.memoizedState;
      E.state = de, Ms(r, u, E, d), A = r.memoizedState, O !== u || de !== A || er.current || wa ? (typeof ve == "function" && (Zd(r, i, ve, u), A = r.memoizedState), (O = wa || ph(r, i, O, u, de, A, K)) ? (ge || typeof E.UNSAFE_componentWillMount != "function" && typeof E.componentWillMount != "function" || (typeof E.componentWillMount == "function" && E.componentWillMount(), typeof E.UNSAFE_componentWillMount == "function" && E.UNSAFE_componentWillMount()), typeof E.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = A), E.props = u, E.state = A, E.context = K, u = O) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      E = r.stateNode, sh(n, r), O = r.memoizedProps, K = r.type === r.elementType ? O : ho(r.type, O), E.props = K, ge = r.pendingProps, de = E.context, A = i.contextType, typeof A == "object" && A !== null ? A = Ha(A) : (A = Hn(i) ? ra : Nn.current, A = aa(r, A));
      var Be = i.getDerivedStateFromProps;
      (ve = typeof Be == "function" || typeof E.getSnapshotBeforeUpdate == "function") || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (O !== ge || de !== A) && vh(r, E, u, A), wa = !1, de = r.memoizedState, E.state = de, Ms(r, u, E, d);
      var Ke = r.memoizedState;
      O !== ge || de !== Ke || er.current || wa ? (typeof Be == "function" && (Zd(r, i, Be, u), Ke = r.memoizedState), (K = wa || ph(r, i, K, u, de, Ke, A) || !1) ? (ve || typeof E.UNSAFE_componentWillUpdate != "function" && typeof E.componentWillUpdate != "function" || (typeof E.componentWillUpdate == "function" && E.componentWillUpdate(u, Ke, A), typeof E.UNSAFE_componentWillUpdate == "function" && E.UNSAFE_componentWillUpdate(u, Ke, A)), typeof E.componentDidUpdate == "function" && (r.flags |= 4), typeof E.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof E.componentDidUpdate != "function" || O === n.memoizedProps && de === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || O === n.memoizedProps && de === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Ke), E.props = u, E.state = Ke, E.context = A, u = K) : (typeof E.componentDidUpdate != "function" || O === n.memoizedProps && de === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || O === n.memoizedProps && de === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return qs(n, r, i, u, m, d);
  }
  function qs(n, r, i, u, d, m) {
    ap(n, r);
    var E = (r.flags & 128) !== 0;
    if (!u && !E) return d && Wc(r, i, !1), qa(n, r, m);
    u = r.stateNode, Hs.current = r;
    var O = E && typeof i.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && E ? (r.child = An(r, n.child, null, m), r.child = An(r, null, O, m)) : yr(n, r, O, m), r.memoizedState = u.state, d && Wc(r, i, !0), r.child;
  }
  function Pu(n) {
    var r = n.stateNode;
    r.pendingContext ? oh(n, r.pendingContext, r.pendingContext !== r.context) : r.context && oh(n, r.context, !1), Kd(n, r.containerInfo);
  }
  function _h(n, r, i, u, d) {
    return Wi(), ci(d), r.flags |= 256, yr(n, r, i, u), r.child;
  }
  var Ef = { dehydrated: null, treeContext: null, retryLane: 0 };
  function op(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function xf(n, r, i) {
    var u = r.pendingProps, d = kn.current, m = !1, E = (r.flags & 128) !== 0, O;
    if ((O = E) || (O = n !== null && n.memoizedState === null ? !1 : (d & 2) !== 0), O ? (m = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (d |= 1), rt(kn, d & 1), n === null)
      return Vd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (E = u.children, n = u.fallback, m ? (u = r.mode, m = r.child, E = { mode: "hidden", children: E }, (u & 1) === 0 && m !== null ? (m.childLanes = 0, m.pendingProps = E) : m = tl(E, u, 0, null), n = mi(n, u, i, null), m.return = r, n.return = r, m.sibling = n, r.child = m, r.child.memoizedState = op(i), r.memoizedState = Ef, n) : ip(r, E));
    if (d = n.memoizedState, d !== null && (O = d.dehydrated, O !== null)) return Sh(n, r, E, u, O, d, i);
    if (m) {
      m = u.fallback, E = r.mode, d = n.child, O = d.sibling;
      var A = { mode: "hidden", children: u.children };
      return (E & 1) === 0 && r.child !== d ? (u = r.child, u.childLanes = 0, u.pendingProps = A, r.deletions = null) : (u = el(d, A), u.subtreeFlags = d.subtreeFlags & 14680064), O !== null ? m = el(O, m) : (m = mi(m, E, i, null), m.flags |= 2), m.return = r, u.return = r, u.sibling = m, r.child = u, u = m, m = r.child, E = n.child.memoizedState, E = E === null ? op(i) : { baseLanes: E.baseLanes | i, cachePool: null, transitions: E.transitions }, m.memoizedState = E, m.childLanes = n.childLanes & ~i, r.memoizedState = Ef, u;
    }
    return m = n.child, n = m.sibling, u = el(m, { mode: "visible", children: u.children }), (r.mode & 1) === 0 && (u.lanes = i), u.return = r, u.sibling = null, n !== null && (i = r.deletions, i === null ? (r.deletions = [n], r.flags |= 16) : i.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function ip(n, r) {
    return r = tl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Ws(n, r, i, u) {
    return u !== null && ci(u), An(r, n.child, null, i), n = ip(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Sh(n, r, i, u, d, m, E) {
    if (i)
      return r.flags & 256 ? (r.flags &= -257, u = ep(Error(f(422))), Ws(n, r, E, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (m = u.fallback, d = r.mode, u = tl({ mode: "visible", children: u.children }, d, 0, null), m = mi(m, d, E, null), m.flags |= 2, u.return = r, m.return = r, u.sibling = m, r.child = u, (r.mode & 1) !== 0 && An(r, n.child, null, E), r.child.memoizedState = op(E), r.memoizedState = Ef, m);
    if ((r.mode & 1) === 0) return Ws(n, r, E, null);
    if (d.data === "$!") {
      if (u = d.nextSibling && d.nextSibling.dataset, u) var O = u.dgst;
      return u = O, m = Error(f(419)), u = ep(m, u, void 0), Ws(n, r, E, u);
    }
    if (O = (E & n.childLanes) !== 0, Wn || O) {
      if (u = nr, u !== null) {
        switch (E & -E) {
          case 4:
            d = 2;
            break;
          case 16:
            d = 8;
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
            d = 32;
            break;
          case 536870912:
            d = 268435456;
            break;
          default:
            d = 0;
        }
        d = (d & (u.suspendedLanes | E)) !== 0 ? 0 : d, d !== 0 && d !== m.retryLane && (m.retryLane = d, ba(n, d), Br(u, n, d, -1));
      }
      return mp(), u = ep(Error(f(421))), Ws(n, r, E, u);
    }
    return d.data === "$?" ? (r.flags |= 128, r.child = n.child, r = ng.bind(null, n), d._reactRetry = r, null) : (n = m.treeContext, ia = Oo(d.nextSibling), oa = r, _n = !0, $a = null, n !== null && (Bn[Va++] = Ao, Bn[Va++] = Uo, Bn[Va++] = Ea, Ao = n.id, Uo = n.overflow, Ea = r), r = ip(r, u.children), r.flags |= 4096, r);
  }
  function lp(n, r, i) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), qd(n.return, r, i);
  }
  function Vr(n, r, i, u, d) {
    var m = n.memoizedState;
    m === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: i, tailMode: d } : (m.isBackwards = r, m.rendering = null, m.renderingStartTime = 0, m.last = u, m.tail = i, m.tailMode = d);
  }
  function Po(n, r, i) {
    var u = r.pendingProps, d = u.revealOrder, m = u.tail;
    if (yr(n, r, u.children, i), u = kn.current, (u & 2) !== 0) u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && lp(n, i, r);
        else if (n.tag === 19) lp(n, i, r);
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
    if (rt(kn, u), (r.mode & 1) === 0) r.memoizedState = null;
    else switch (d) {
      case "forwards":
        for (i = r.child, d = null; i !== null; ) n = i.alternate, n !== null && ef(n) === null && (d = i), i = i.sibling;
        i = d, i === null ? (d = r.child, r.child = null) : (d = i.sibling, i.sibling = null), Vr(r, !1, d, i, m);
        break;
      case "backwards":
        for (i = null, d = r.child, r.child = null; d !== null; ) {
          if (n = d.alternate, n !== null && ef(n) === null) {
            r.child = d;
            break;
          }
          n = d.sibling, d.sibling = i, i = d, d = n;
        }
        Vr(r, !0, i, null, m);
        break;
      case "together":
        Vr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ba(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function qa(n, r, i) {
    if (n !== null && (r.dependencies = n.dependencies), Vo |= r.lanes, (i & r.childLanes) === 0) return null;
    if (n !== null && r.child !== n.child) throw Error(f(153));
    if (r.child !== null) {
      for (n = r.child, i = el(n, n.pendingProps), r.child = i, i.return = r; n.sibling !== null; ) n = n.sibling, i = i.sibling = el(n, n.pendingProps), i.return = r;
      i.sibling = null;
    }
    return r.child;
  }
  function Ys(n, r, i) {
    switch (r.tag) {
      case 3:
        Pu(r), Wi();
        break;
      case 5:
        fh(r);
        break;
      case 1:
        Hn(r.type) && lr(r);
        break;
      case 4:
        Kd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, d = r.memoizedProps.value;
        rt(xa, u._currentValue), u._currentValue = d;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (rt(kn, kn.current & 1), r.flags |= 128, null) : (i & r.child.childLanes) !== 0 ? xf(n, r, i) : (rt(kn, kn.current & 1), n = qa(n, r, i), n !== null ? n.sibling : null);
        rt(kn, kn.current & 1);
        break;
      case 19:
        if (u = (i & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (u) return Po(n, r, i);
          r.flags |= 128;
        }
        if (d = r.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), rt(kn, kn.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Bs(n, r, i);
    }
    return qa(n, r, i);
  }
  var Wa, Yn, Ch, Eh;
  Wa = function(n, r) {
    for (var i = r.child; i !== null; ) {
      if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
      else if (i.tag !== 4 && i.child !== null) {
        i.child.return = i, i = i.child;
        continue;
      }
      if (i === r) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === r) return;
        i = i.return;
      }
      i.sibling.return = i.return, i = i.sibling;
    }
  }, Yn = function() {
  }, Ch = function(n, r, i, u) {
    var d = n.memoizedProps;
    if (d !== u) {
      n = r.stateNode, Al(zo.current);
      var m = null;
      switch (i) {
        case "input":
          d = Xn(n, d), u = Xn(n, u), m = [];
          break;
        case "select":
          d = me({}, d, { value: void 0 }), u = me({}, u, { value: void 0 }), m = [];
          break;
        case "textarea":
          d = Jn(n, d), u = Jn(n, u), m = [];
          break;
        default:
          typeof d.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Fi);
      }
      hn(i, u);
      var E;
      i = null;
      for (K in d) if (!u.hasOwnProperty(K) && d.hasOwnProperty(K) && d[K] != null) if (K === "style") {
        var O = d[K];
        for (E in O) O.hasOwnProperty(E) && (i || (i = {}), i[E] = "");
      } else K !== "dangerouslySetInnerHTML" && K !== "children" && K !== "suppressContentEditableWarning" && K !== "suppressHydrationWarning" && K !== "autoFocus" && (w.hasOwnProperty(K) ? m || (m = []) : (m = m || []).push(K, null));
      for (K in u) {
        var A = u[K];
        if (O = d?.[K], u.hasOwnProperty(K) && A !== O && (A != null || O != null)) if (K === "style") if (O) {
          for (E in O) !O.hasOwnProperty(E) || A && A.hasOwnProperty(E) || (i || (i = {}), i[E] = "");
          for (E in A) A.hasOwnProperty(E) && O[E] !== A[E] && (i || (i = {}), i[E] = A[E]);
        } else i || (m || (m = []), m.push(
          K,
          i
        )), i = A;
        else K === "dangerouslySetInnerHTML" ? (A = A ? A.__html : void 0, O = O ? O.__html : void 0, A != null && O !== A && (m = m || []).push(K, A)) : K === "children" ? typeof A != "string" && typeof A != "number" || (m = m || []).push(K, "" + A) : K !== "suppressContentEditableWarning" && K !== "suppressHydrationWarning" && (w.hasOwnProperty(K) ? (A != null && K === "onScroll" && Xt("scroll", n), m || O === A || (m = [])) : (m = m || []).push(K, A));
      }
      i && (m = m || []).push("style", i);
      var K = m;
      (r.updateQueue = K) && (r.flags |= 4);
    }
  }, Eh = function(n, r, i, u) {
    i !== u && (r.flags |= 4);
  };
  function Gs(n, r) {
    if (!_n) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var i = null; r !== null; ) r.alternate !== null && (i = r), r = r.sibling;
        i === null ? n.tail = null : i.sibling = null;
        break;
      case "collapsed":
        i = n.tail;
        for (var u = null; i !== null; ) i.alternate !== null && (u = i), i = i.sibling;
        u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
    }
  }
  function sr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, i = 0, u = 0;
    if (r) for (var d = n.child; d !== null; ) i |= d.lanes | d.childLanes, u |= d.subtreeFlags & 14680064, u |= d.flags & 14680064, d.return = n, d = d.sibling;
    else for (d = n.child; d !== null; ) i |= d.lanes | d.childLanes, u |= d.subtreeFlags, u |= d.flags, d.return = n, d = d.sibling;
    return n.subtreeFlags |= u, n.childLanes = i, r;
  }
  function xh(n, r, i) {
    var u = r.pendingProps;
    switch (Qc(r), r.tag) {
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
        return sr(r), null;
      case 1:
        return Hn(r.type) && Lu(), sr(r), null;
      case 3:
        return u = r.stateNode, Ul(), pn(er), pn(Nn), it(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Kc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, $a !== null && (Yl($a), $a = null))), Yn(n, r), sr(r), null;
      case 5:
        Zc(r);
        var d = Al(Ls.current);
        if (i = r.type, n !== null && r.stateNode != null) Ch(n, r, i, u, d), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(f(166));
            return sr(r), null;
          }
          if (n = Al(zo.current), Kc(r)) {
            u = r.stateNode, i = r.type;
            var m = r.memoizedProps;
            switch (u[Do] = r, u[Rs] = m, n = (r.mode & 1) !== 0, i) {
              case "dialog":
                Xt("cancel", u), Xt("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                Xt("load", u);
                break;
              case "video":
              case "audio":
                for (d = 0; d < xs.length; d++) Xt(xs[d], u);
                break;
              case "source":
                Xt("error", u);
                break;
              case "img":
              case "image":
              case "link":
                Xt(
                  "error",
                  u
                ), Xt("load", u);
                break;
              case "details":
                Xt("toggle", u);
                break;
              case "input":
                On(u, m), Xt("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!m.multiple }, Xt("invalid", u);
                break;
              case "textarea":
                Tr(u, m), Xt("invalid", u);
            }
            hn(i, m), d = null;
            for (var E in m) if (m.hasOwnProperty(E)) {
              var O = m[E];
              E === "children" ? typeof O == "string" ? u.textContent !== O && (m.suppressHydrationWarning !== !0 && $c(u.textContent, O, n), d = ["children", O]) : typeof O == "number" && u.textContent !== "" + O && (m.suppressHydrationWarning !== !0 && $c(
                u.textContent,
                O,
                n
              ), d = ["children", "" + O]) : w.hasOwnProperty(E) && O != null && E === "onScroll" && Xt("scroll", u);
            }
            switch (i) {
              case "input":
                vn(u), Co(u, m, !0);
                break;
              case "textarea":
                vn(u), Vn(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof m.onClick == "function" && (u.onclick = Fi);
            }
            u = d, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            E = d.nodeType === 9 ? d : d.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Nr(i)), n === "http://www.w3.org/1999/xhtml" ? i === "script" ? (n = E.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = E.createElement(i, { is: u.is }) : (n = E.createElement(i), i === "select" && (E = n, u.multiple ? E.multiple = !0 : u.size && (E.size = u.size))) : n = E.createElementNS(n, i), n[Do] = r, n[Rs] = u, Wa(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (E = ir(i, u), i) {
                case "dialog":
                  Xt("cancel", n), Xt("close", n), d = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Xt("load", n), d = u;
                  break;
                case "video":
                case "audio":
                  for (d = 0; d < xs.length; d++) Xt(xs[d], n);
                  d = u;
                  break;
                case "source":
                  Xt("error", n), d = u;
                  break;
                case "img":
                case "image":
                case "link":
                  Xt(
                    "error",
                    n
                  ), Xt("load", n), d = u;
                  break;
                case "details":
                  Xt("toggle", n), d = u;
                  break;
                case "input":
                  On(n, u), d = Xn(n, u), Xt("invalid", n);
                  break;
                case "option":
                  d = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, d = me({}, u, { value: void 0 }), Xt("invalid", n);
                  break;
                case "textarea":
                  Tr(n, u), d = Jn(n, u), Xt("invalid", n);
                  break;
                default:
                  d = u;
              }
              hn(i, d), O = d;
              for (m in O) if (O.hasOwnProperty(m)) {
                var A = O[m];
                m === "style" ? sn(n, A) : m === "dangerouslySetInnerHTML" ? (A = A ? A.__html : void 0, A != null && Eo(n, A)) : m === "children" ? typeof A == "string" ? (i !== "textarea" || A !== "") && Ne(n, A) : typeof A == "number" && Ne(n, "" + A) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (w.hasOwnProperty(m) ? A != null && m === "onScroll" && Xt("scroll", n) : A != null && Ee(n, m, A, E));
              }
              switch (i) {
                case "input":
                  vn(n), Co(n, u, !1);
                  break;
                case "textarea":
                  vn(n), Vn(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + lt(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, m = u.value, m != null ? Ln(n, !!u.multiple, m, !1) : u.defaultValue != null && Ln(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof d.onClick == "function" && (n.onclick = Fi);
              }
              switch (i) {
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
        return sr(r), null;
      case 6:
        if (n && r.stateNode != null) Eh(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(f(166));
          if (i = Al(Ls.current), Al(zo.current), Kc(r)) {
            if (u = r.stateNode, i = r.memoizedProps, u[Do] = r, (m = u.nodeValue !== i) && (n = oa, n !== null)) switch (n.tag) {
              case 3:
                $c(u.nodeValue, i, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && $c(u.nodeValue, i, (n.mode & 1) !== 0);
            }
            m && (r.flags |= 4);
          } else u = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(u), u[Do] = r, r.stateNode = u;
        }
        return sr(r), null;
      case 13:
        if (pn(kn), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (_n && ia !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) Ns(), Wi(), r.flags |= 98560, m = !1;
          else if (m = Kc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!m) throw Error(f(318));
              if (m = r.memoizedState, m = m !== null ? m.dehydrated : null, !m) throw Error(f(317));
              m[Do] = r;
            } else Wi(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            sr(r), m = !1;
          } else $a !== null && (Yl($a), $a = null), m = !0;
          if (!m) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = i, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (kn.current & 1) !== 0 ? Pn === 0 && (Pn = 3) : mp())), r.updateQueue !== null && (r.flags |= 4), sr(r), null);
      case 4:
        return Ul(), Yn(n, r), n === null && Tu(r.stateNode.containerInfo), sr(r), null;
      case 10:
        return Bd(r.type._context), sr(r), null;
      case 17:
        return Hn(r.type) && Lu(), sr(r), null;
      case 19:
        if (pn(kn), m = r.memoizedState, m === null) return sr(r), null;
        if (u = (r.flags & 128) !== 0, E = m.rendering, E === null) if (u) Gs(m, !1);
        else {
          if (Pn !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (E = ef(n), E !== null) {
              for (r.flags |= 128, Gs(m, !1), u = E.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = i, i = r.child; i !== null; ) m = i, n = u, m.flags &= 14680066, E = m.alternate, E === null ? (m.childLanes = 0, m.lanes = n, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = E.childLanes, m.lanes = E.lanes, m.child = E.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = E.memoizedProps, m.memoizedState = E.memoizedState, m.updateQueue = E.updateQueue, m.type = E.type, n = E.dependencies, m.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), i = i.sibling;
              return rt(kn, kn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          m.tail !== null && xt() > $u && (r.flags |= 128, u = !0, Gs(m, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = ef(E), n !== null) {
            if (r.flags |= 128, u = !0, i = n.updateQueue, i !== null && (r.updateQueue = i, r.flags |= 4), Gs(m, !0), m.tail === null && m.tailMode === "hidden" && !E.alternate && !_n) return sr(r), null;
          } else 2 * xt() - m.renderingStartTime > $u && i !== 1073741824 && (r.flags |= 128, u = !0, Gs(m, !1), r.lanes = 4194304);
          m.isBackwards ? (E.sibling = r.child, r.child = E) : (i = m.last, i !== null ? i.sibling = E : r.child = E, m.last = E);
        }
        return m.tail !== null ? (r = m.tail, m.rendering = r, m.tail = r.sibling, m.renderingStartTime = xt(), r.sibling = null, i = kn.current, rt(kn, u ? i & 1 | 2 : i & 1), r) : (sr(r), null);
      case 22:
      case 23:
        return hp(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && (r.mode & 1) !== 0 ? (Ra & 1073741824) !== 0 && (sr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : sr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(f(156, r.tag));
  }
  function bf(n, r) {
    switch (Qc(r), r.tag) {
      case 1:
        return Hn(r.type) && Lu(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Ul(), pn(er), pn(Nn), it(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Zc(r), null;
      case 13:
        if (pn(kn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(f(340));
          Wi();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return pn(kn), null;
      case 4:
        return Ul(), null;
      case 10:
        return Bd(r.type._context), null;
      case 22:
      case 23:
        return hp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Qs = !1, Lr = !1, Qy = typeof WeakSet == "function" ? WeakSet : Set, Ge = null;
  function Iu(n, r) {
    var i = n.ref;
    if (i !== null) if (typeof i == "function") try {
      i(null);
    } catch (u) {
      Sn(n, r, u);
    }
    else i.current = null;
  }
  function wf(n, r, i) {
    try {
      i();
    } catch (u) {
      Sn(n, r, u);
    }
  }
  var bh = !1;
  function wh(n, r) {
    if (ws = za, n = Cs(), jc(n)) {
      if ("selectionStart" in n) var i = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        i = (i = n.ownerDocument) && i.defaultView || window;
        var u = i.getSelection && i.getSelection();
        if (u && u.rangeCount !== 0) {
          i = u.anchorNode;
          var d = u.anchorOffset, m = u.focusNode;
          u = u.focusOffset;
          try {
            i.nodeType, m.nodeType;
          } catch {
            i = null;
            break e;
          }
          var E = 0, O = -1, A = -1, K = 0, ve = 0, ge = n, de = null;
          t: for (; ; ) {
            for (var Be; ge !== i || d !== 0 && ge.nodeType !== 3 || (O = E + d), ge !== m || u !== 0 && ge.nodeType !== 3 || (A = E + u), ge.nodeType === 3 && (E += ge.nodeValue.length), (Be = ge.firstChild) !== null; )
              de = ge, ge = Be;
            for (; ; ) {
              if (ge === n) break t;
              if (de === i && ++K === d && (O = E), de === m && ++ve === u && (A = E), (Be = ge.nextSibling) !== null) break;
              ge = de, de = ge.parentNode;
            }
            ge = Be;
          }
          i = O === -1 || A === -1 ? null : { start: O, end: A };
        } else i = null;
      }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (Nl = { focusedElem: n, selectionRange: i }, za = !1, Ge = r; Ge !== null; ) if (r = Ge, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Ge = n;
    else for (; Ge !== null; ) {
      r = Ge;
      try {
        var Ke = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Ke !== null) {
              var et = Ke.memoizedProps, In = Ke.memoizedState, H = r.stateNode, P = H.getSnapshotBeforeUpdate(r.elementType === r.type ? et : ho(r.type, et), In);
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
            throw Error(f(163));
        }
      } catch (he) {
        Sn(r, r.return, he);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Ge = n;
        break;
      }
      Ge = r.return;
    }
    return Ke = bh, bh = !1, Ke;
  }
  function Ks(n, r, i) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var d = u = u.next;
      do {
        if ((d.tag & n) === n) {
          var m = d.destroy;
          d.destroy = void 0, m !== void 0 && wf(r, i, m);
        }
        d = d.next;
      } while (d !== u);
    }
  }
  function Xs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var i = r = r.next;
      do {
        if ((i.tag & n) === n) {
          var u = i.create;
          i.destroy = u();
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function up(n) {
    var r = n.ref;
    if (r !== null) {
      var i = n.stateNode;
      n.tag, n = i, typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Rf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Rf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Do], delete r[Rs], delete r[ks], delete r[Du], delete r[Yy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Js(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function pi(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Js(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Io(n, r, i) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? i.nodeType === 8 ? i.parentNode.insertBefore(n, r) : i.insertBefore(n, r) : (i.nodeType === 8 ? (r = i.parentNode, r.insertBefore(n, i)) : (r = i, r.appendChild(n)), i = i._reactRootContainer, i != null || r.onclick !== null || (r.onclick = Fi));
    else if (u !== 4 && (n = n.child, n !== null)) for (Io(n, r, i), n = n.sibling; n !== null; ) Io(n, r, i), n = n.sibling;
  }
  function Fo(n, r, i) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? i.insertBefore(n, r) : i.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null)) for (Fo(n, r, i), n = n.sibling; n !== null; ) Fo(n, r, i), n = n.sibling;
  }
  var zn = null, $r = !1;
  function Hr(n, r, i) {
    for (i = i.child; i !== null; ) Rh(n, r, i), i = i.sibling;
  }
  function Rh(n, r, i) {
    if (ta && typeof ta.onCommitFiberUnmount == "function") try {
      ta.onCommitFiberUnmount(Oi, i);
    } catch {
    }
    switch (i.tag) {
      case 5:
        Lr || Iu(i, r);
      case 6:
        var u = zn, d = $r;
        zn = null, Hr(n, r, i), zn = u, $r = d, zn !== null && ($r ? (n = zn, i = i.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(i) : n.removeChild(i)) : zn.removeChild(i.stateNode));
        break;
      case 18:
        zn !== null && ($r ? (n = zn, i = i.stateNode, n.nodeType === 8 ? Ou(n.parentNode, i) : n.nodeType === 1 && Ou(n, i), so(n)) : Ou(zn, i.stateNode));
        break;
      case 4:
        u = zn, d = $r, zn = i.stateNode.containerInfo, $r = !0, Hr(n, r, i), zn = u, $r = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Lr && (u = i.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          d = u = u.next;
          do {
            var m = d, E = m.destroy;
            m = m.tag, E !== void 0 && ((m & 2) !== 0 || (m & 4) !== 0) && wf(i, r, E), d = d.next;
          } while (d !== u);
        }
        Hr(n, r, i);
        break;
      case 1:
        if (!Lr && (Iu(i, r), u = i.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = i.memoizedProps, u.state = i.memoizedState, u.componentWillUnmount();
        } catch (O) {
          Sn(i, r, O);
        }
        Hr(n, r, i);
        break;
      case 21:
        Hr(n, r, i);
        break;
      case 22:
        i.mode & 1 ? (Lr = (u = Lr) || i.memoizedState !== null, Hr(n, r, i), Lr = u) : Hr(n, r, i);
        break;
      default:
        Hr(n, r, i);
    }
  }
  function kh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var i = n.stateNode;
      i === null && (i = n.stateNode = new Qy()), r.forEach(function(u) {
        var d = Uh.bind(null, n, u);
        i.has(u) || (i.add(u), u.then(d, d));
      });
    }
  }
  function mo(n, r) {
    var i = r.deletions;
    if (i !== null) for (var u = 0; u < i.length; u++) {
      var d = i[u];
      try {
        var m = n, E = r, O = E;
        e: for (; O !== null; ) {
          switch (O.tag) {
            case 5:
              zn = O.stateNode, $r = !1;
              break e;
            case 3:
              zn = O.stateNode.containerInfo, $r = !0;
              break e;
            case 4:
              zn = O.stateNode.containerInfo, $r = !0;
              break e;
          }
          O = O.return;
        }
        if (zn === null) throw Error(f(160));
        Rh(m, E, d), zn = null, $r = !1;
        var A = d.alternate;
        A !== null && (A.return = null), d.return = null;
      } catch (K) {
        Sn(d, r, K);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) sp(r, n), r = r.sibling;
  }
  function sp(n, r) {
    var i = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (mo(r, n), ca(n), u & 4) {
          try {
            Ks(3, n, n.return), Xs(3, n);
          } catch (et) {
            Sn(n, n.return, et);
          }
          try {
            Ks(5, n, n.return);
          } catch (et) {
            Sn(n, n.return, et);
          }
        }
        break;
      case 1:
        mo(r, n), ca(n), u & 512 && i !== null && Iu(i, i.return);
        break;
      case 5:
        if (mo(r, n), ca(n), u & 512 && i !== null && Iu(i, i.return), n.flags & 32) {
          var d = n.stateNode;
          try {
            Ne(d, "");
          } catch (et) {
            Sn(n, n.return, et);
          }
        }
        if (u & 4 && (d = n.stateNode, d != null)) {
          var m = n.memoizedProps, E = i !== null ? i.memoizedProps : m, O = n.type, A = n.updateQueue;
          if (n.updateQueue = null, A !== null) try {
            O === "input" && m.type === "radio" && m.name != null && Dn(d, m), ir(O, E);
            var K = ir(O, m);
            for (E = 0; E < A.length; E += 2) {
              var ve = A[E], ge = A[E + 1];
              ve === "style" ? sn(d, ge) : ve === "dangerouslySetInnerHTML" ? Eo(d, ge) : ve === "children" ? Ne(d, ge) : Ee(d, ve, ge, K);
            }
            switch (O) {
              case "input":
                Ar(d, m);
                break;
              case "textarea":
                to(d, m);
                break;
              case "select":
                var de = d._wrapperState.wasMultiple;
                d._wrapperState.wasMultiple = !!m.multiple;
                var Be = m.value;
                Be != null ? Ln(d, !!m.multiple, Be, !1) : de !== !!m.multiple && (m.defaultValue != null ? Ln(
                  d,
                  !!m.multiple,
                  m.defaultValue,
                  !0
                ) : Ln(d, !!m.multiple, m.multiple ? [] : "", !1));
            }
            d[Rs] = m;
          } catch (et) {
            Sn(n, n.return, et);
          }
        }
        break;
      case 6:
        if (mo(r, n), ca(n), u & 4) {
          if (n.stateNode === null) throw Error(f(162));
          d = n.stateNode, m = n.memoizedProps;
          try {
            d.nodeValue = m;
          } catch (et) {
            Sn(n, n.return, et);
          }
        }
        break;
      case 3:
        if (mo(r, n), ca(n), u & 4 && i !== null && i.memoizedState.isDehydrated) try {
          so(r.containerInfo);
        } catch (et) {
          Sn(n, n.return, et);
        }
        break;
      case 4:
        mo(r, n), ca(n);
        break;
      case 13:
        mo(r, n), ca(n), d = n.child, d.flags & 8192 && (m = d.memoizedState !== null, d.stateNode.isHidden = m, !m || d.alternate !== null && d.alternate.memoizedState !== null || (dp = xt())), u & 4 && kh(n);
        break;
      case 22:
        if (ve = i !== null && i.memoizedState !== null, n.mode & 1 ? (Lr = (K = Lr) || ve, mo(r, n), Lr = K) : mo(r, n), ca(n), u & 8192) {
          if (K = n.memoizedState !== null, (n.stateNode.isHidden = K) && !ve && (n.mode & 1) !== 0) for (Ge = n, ve = n.child; ve !== null; ) {
            for (ge = Ge = ve; Ge !== null; ) {
              switch (de = Ge, Be = de.child, de.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ks(4, de, de.return);
                  break;
                case 1:
                  Iu(de, de.return);
                  var Ke = de.stateNode;
                  if (typeof Ke.componentWillUnmount == "function") {
                    u = de, i = de.return;
                    try {
                      r = u, Ke.props = r.memoizedProps, Ke.state = r.memoizedState, Ke.componentWillUnmount();
                    } catch (et) {
                      Sn(u, i, et);
                    }
                  }
                  break;
                case 5:
                  Iu(de, de.return);
                  break;
                case 22:
                  if (de.memoizedState !== null) {
                    Zs(ge);
                    continue;
                  }
              }
              Be !== null ? (Be.return = de, Ge = Be) : Zs(ge);
            }
            ve = ve.sibling;
          }
          e: for (ve = null, ge = n; ; ) {
            if (ge.tag === 5) {
              if (ve === null) {
                ve = ge;
                try {
                  d = ge.stateNode, K ? (m = d.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (O = ge.stateNode, A = ge.memoizedProps.style, E = A != null && A.hasOwnProperty("display") ? A.display : null, O.style.display = Kt("display", E));
                } catch (et) {
                  Sn(n, n.return, et);
                }
              }
            } else if (ge.tag === 6) {
              if (ve === null) try {
                ge.stateNode.nodeValue = K ? "" : ge.memoizedProps;
              } catch (et) {
                Sn(n, n.return, et);
              }
            } else if ((ge.tag !== 22 && ge.tag !== 23 || ge.memoizedState === null || ge === n) && ge.child !== null) {
              ge.child.return = ge, ge = ge.child;
              continue;
            }
            if (ge === n) break e;
            for (; ge.sibling === null; ) {
              if (ge.return === null || ge.return === n) break e;
              ve === ge && (ve = null), ge = ge.return;
            }
            ve === ge && (ve = null), ge.sibling.return = ge.return, ge = ge.sibling;
          }
        }
        break;
      case 19:
        mo(r, n), ca(n), u & 4 && kh(n);
        break;
      case 21:
        break;
      default:
        mo(
          r,
          n
        ), ca(n);
    }
  }
  function ca(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var i = n.return; i !== null; ) {
            if (Js(i)) {
              var u = i;
              break e;
            }
            i = i.return;
          }
          throw Error(f(160));
        }
        switch (u.tag) {
          case 5:
            var d = u.stateNode;
            u.flags & 32 && (Ne(d, ""), u.flags &= -33);
            var m = pi(n);
            Fo(n, m, d);
            break;
          case 3:
          case 4:
            var E = u.stateNode.containerInfo, O = pi(n);
            Io(n, O, E);
            break;
          default:
            throw Error(f(161));
        }
      } catch (A) {
        Sn(n, n.return, A);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Ky(n, r, i) {
    Ge = n, cp(n);
  }
  function cp(n, r, i) {
    for (var u = (n.mode & 1) !== 0; Ge !== null; ) {
      var d = Ge, m = d.child;
      if (d.tag === 22 && u) {
        var E = d.memoizedState !== null || Qs;
        if (!E) {
          var O = d.alternate, A = O !== null && O.memoizedState !== null || Lr;
          O = Qs;
          var K = Lr;
          if (Qs = E, (Lr = A) && !K) for (Ge = d; Ge !== null; ) E = Ge, A = E.child, E.tag === 22 && E.memoizedState !== null ? fp(d) : A !== null ? (A.return = E, Ge = A) : fp(d);
          for (; m !== null; ) Ge = m, cp(m), m = m.sibling;
          Ge = d, Qs = O, Lr = K;
        }
        Th(n);
      } else (d.subtreeFlags & 8772) !== 0 && m !== null ? (m.return = d, Ge = m) : Th(n);
    }
  }
  function Th(n) {
    for (; Ge !== null; ) {
      var r = Ge;
      if ((r.flags & 8772) !== 0) {
        var i = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Lr || Xs(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !Lr) if (i === null) u.componentDidMount();
              else {
                var d = r.elementType === r.type ? i.memoizedProps : ho(r.type, i.memoizedProps);
                u.componentDidUpdate(d, i.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var m = r.updateQueue;
              m !== null && Qd(r, m, u);
              break;
            case 3:
              var E = r.updateQueue;
              if (E !== null) {
                if (i = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    i = r.child.stateNode;
                    break;
                  case 1:
                    i = r.child.stateNode;
                }
                Qd(r, E, i);
              }
              break;
            case 5:
              var O = r.stateNode;
              if (i === null && r.flags & 4) {
                i = O;
                var A = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    A.autoFocus && i.focus();
                    break;
                  case "img":
                    A.src && (i.src = A.src);
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
                  var ve = K.memoizedState;
                  if (ve !== null) {
                    var ge = ve.dehydrated;
                    ge !== null && so(ge);
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
              throw Error(f(163));
          }
          Lr || r.flags & 512 && up(r);
        } catch (de) {
          Sn(r, r.return, de);
        }
      }
      if (r === n) {
        Ge = null;
        break;
      }
      if (i = r.sibling, i !== null) {
        i.return = r.return, Ge = i;
        break;
      }
      Ge = r.return;
    }
  }
  function Zs(n) {
    for (; Ge !== null; ) {
      var r = Ge;
      if (r === n) {
        Ge = null;
        break;
      }
      var i = r.sibling;
      if (i !== null) {
        i.return = r.return, Ge = i;
        break;
      }
      Ge = r.return;
    }
  }
  function fp(n) {
    for (; Ge !== null; ) {
      var r = Ge;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var i = r.return;
            try {
              Xs(4, r);
            } catch (A) {
              Sn(r, i, A);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var d = r.return;
              try {
                u.componentDidMount();
              } catch (A) {
                Sn(r, d, A);
              }
            }
            var m = r.return;
            try {
              up(r);
            } catch (A) {
              Sn(r, m, A);
            }
            break;
          case 5:
            var E = r.return;
            try {
              up(r);
            } catch (A) {
              Sn(r, E, A);
            }
        }
      } catch (A) {
        Sn(r, r.return, A);
      }
      if (r === n) {
        Ge = null;
        break;
      }
      var O = r.sibling;
      if (O !== null) {
        O.return = r.return, Ge = O;
        break;
      }
      Ge = r.return;
    }
  }
  var Xy = Math.ceil, Xi = De.ReactCurrentDispatcher, ql = De.ReactCurrentOwner, gr = De.ReactCurrentBatchConfig, zt = 0, nr = null, Gn = null, _r = 0, Ra = 0, Fu = Fa(0), Pn = 0, ec = null, Vo = 0, Vu = 0, kf = 0, tc = null, fa = null, dp = 0, $u = 1 / 0, ka = null, Hu = !1, Wl = null, Ji = null, Tf = !1, vi = null, nc = 0, Zi = 0, Bu = null, rc = -1, jr = 0;
  function Qn() {
    return (zt & 6) !== 0 ? xt() : rc !== -1 ? rc : rc = xt();
  }
  function $o(n) {
    return (n.mode & 1) === 0 ? 1 : (zt & 2) !== 0 && _r !== 0 ? _r & -_r : Gy.transition !== null ? (jr === 0 && (jr = mu()), jr) : (n = Ht, n !== 0 || (n = window.event, n = n === void 0 ? 16 : xu(n.type)), n);
  }
  function Br(n, r, i, u) {
    if (50 < Zi) throw Zi = 0, Bu = null, Error(f(185));
    ti(n, i, u), ((zt & 2) === 0 || n !== nr) && (n === nr && ((zt & 2) === 0 && (Vu |= i), Pn === 4 && yo(n, _r)), da(n, u), i === 1 && zt === 0 && (r.mode & 1) === 0 && ($u = xt() + 500, ju && jo()));
  }
  function da(n, r) {
    var i = n.callbackNode;
    Sl(n, r);
    var u = uo(n, n === nr ? _r : 0);
    if (u === 0) i !== null && vr(i), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (i != null && vr(i), r === 1) n.tag === 0 ? $i(pp.bind(null, n)) : Yc(pp.bind(null, n)), Mu(function() {
        (zt & 6) === 0 && jo();
      }), i = null;
      else {
        switch (gu(u)) {
          case 1:
            i = io;
            break;
          case 4:
            i = gl;
            break;
          case 16:
            i = _l;
            break;
          case 536870912:
            i = pu;
            break;
          default:
            i = _l;
        }
        i = Ph(i, Nf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = i;
    }
  }
  function Nf(n, r) {
    if (rc = -1, jr = 0, (zt & 6) !== 0) throw Error(f(327));
    var i = n.callbackNode;
    if (qu() && n.callbackNode !== i) return null;
    var u = uo(n, n === nr ? _r : 0);
    if (u === 0) return null;
    if ((u & 30) !== 0 || (u & n.expiredLanes) !== 0 || r) r = Mf(n, u);
    else {
      r = u;
      var d = zt;
      zt |= 2;
      var m = Mh();
      (nr !== n || _r !== r) && (ka = null, $u = xt() + 500, hi(n, r));
      do
        try {
          Oh();
          break;
        } catch (O) {
          Nh(n, O);
        }
      while (!0);
      Hd(), Xi.current = m, zt = d, Gn !== null ? r = 0 : (nr = null, _r = 0, r = Pn);
    }
    if (r !== 0) {
      if (r === 2 && (d = Li(n), d !== 0 && (u = d, r = ac(n, d))), r === 1) throw i = ec, hi(n, 0), yo(n, u), da(n, xt()), i;
      if (r === 6) yo(n, u);
      else {
        if (d = n.current.alternate, (u & 30) === 0 && !Jy(d) && (r = Mf(n, u), r === 2 && (m = Li(n), m !== 0 && (u = m, r = ac(n, m))), r === 1)) throw i = ec, hi(n, 0), yo(n, u), da(n, xt()), i;
        switch (n.finishedWork = d, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(f(345));
          case 2:
            Ql(n, fa, ka);
            break;
          case 3:
            if (yo(n, u), (u & 130023424) === u && (r = dp + 500 - xt(), 10 < r)) {
              if (uo(n, 0) !== 0) break;
              if (d = n.suspendedLanes, (d & u) !== u) {
                Qn(), n.pingedLanes |= n.suspendedLanes & d;
                break;
              }
              n.timeoutHandle = Bc(Ql.bind(null, n, fa, ka), r);
              break;
            }
            Ql(n, fa, ka);
            break;
          case 4:
            if (yo(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, d = -1; 0 < u; ) {
              var E = 31 - Pr(u);
              m = 1 << E, E = r[E], E > d && (d = E), u &= ~m;
            }
            if (u = d, u = xt() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Xy(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = Bc(Ql.bind(null, n, fa, ka), u);
              break;
            }
            Ql(n, fa, ka);
            break;
          case 5:
            Ql(n, fa, ka);
            break;
          default:
            throw Error(f(329));
        }
      }
    }
    return da(n, xt()), n.callbackNode === i ? Nf.bind(null, n) : null;
  }
  function ac(n, r) {
    var i = tc;
    return n.current.memoizedState.isDehydrated && (hi(n, r).flags |= 256), n = Mf(n, r), n !== 2 && (r = fa, fa = i, r !== null && Yl(r)), n;
  }
  function Yl(n) {
    fa === null ? fa = n : fa.push.apply(fa, n);
  }
  function Jy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var i = r.updateQueue;
        if (i !== null && (i = i.stores, i !== null)) for (var u = 0; u < i.length; u++) {
          var d = i[u], m = d.getSnapshot;
          d = d.value;
          try {
            if (!fo(m(), d)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (i = r.child, r.subtreeFlags & 16384 && i !== null) i.return = r, r = i;
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
  function yo(n, r) {
    for (r &= ~kf, r &= ~Vu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var i = 31 - Pr(r), u = 1 << i;
      n[i] = -1, r &= ~u;
    }
  }
  function pp(n) {
    if ((zt & 6) !== 0) throw Error(f(327));
    qu();
    var r = uo(n, 0);
    if ((r & 1) === 0) return da(n, xt()), null;
    var i = Mf(n, r);
    if (n.tag !== 0 && i === 2) {
      var u = Li(n);
      u !== 0 && (r = u, i = ac(n, u));
    }
    if (i === 1) throw i = ec, hi(n, 0), yo(n, r), da(n, xt()), i;
    if (i === 6) throw Error(f(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Ql(n, fa, ka), da(n, xt()), null;
  }
  function vp(n, r) {
    var i = zt;
    zt |= 1;
    try {
      return n(r);
    } finally {
      zt = i, zt === 0 && ($u = xt() + 500, ju && jo());
    }
  }
  function Gl(n) {
    vi !== null && vi.tag === 0 && (zt & 6) === 0 && qu();
    var r = zt;
    zt |= 1;
    var i = gr.transition, u = Ht;
    try {
      if (gr.transition = null, Ht = 1, n) return n();
    } finally {
      Ht = u, gr.transition = i, zt = r, (zt & 6) === 0 && jo();
    }
  }
  function hp() {
    Ra = Fu.current, pn(Fu);
  }
  function hi(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var i = n.timeoutHandle;
    if (i !== -1 && (n.timeoutHandle = -1, Pd(i)), Gn !== null) for (i = Gn.return; i !== null; ) {
      var u = i;
      switch (Qc(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && Lu();
          break;
        case 3:
          Ul(), pn(er), pn(Nn), it();
          break;
        case 5:
          Zc(u);
          break;
        case 4:
          Ul();
          break;
        case 13:
          pn(kn);
          break;
        case 19:
          pn(kn);
          break;
        case 10:
          Bd(u.type._context);
          break;
        case 22:
        case 23:
          hp();
      }
      i = i.return;
    }
    if (nr = n, Gn = n = el(n.current, null), _r = Ra = r, Pn = 0, ec = null, kf = Vu = Vo = 0, fa = tc = null, jl !== null) {
      for (r = 0; r < jl.length; r++) if (i = jl[r], u = i.interleaved, u !== null) {
        i.interleaved = null;
        var d = u.next, m = i.pending;
        if (m !== null) {
          var E = m.next;
          m.next = d, u.next = E;
        }
        i.pending = u;
      }
      jl = null;
    }
    return n;
  }
  function Nh(n, r) {
    do {
      var i = Gn;
      try {
        if (Hd(), Nt.current = $l, tf) {
          for (var u = qt.memoizedState; u !== null; ) {
            var d = u.queue;
            d !== null && (d.pending = null), u = u.next;
          }
          tf = !1;
        }
        if (an = 0, ur = qn = qt = null, As = !1, zl = 0, ql.current = null, i === null || i.return === null) {
          Pn = 1, ec = r, Gn = null;
          break;
        }
        e: {
          var m = n, E = i.return, O = i, A = r;
          if (r = _r, O.flags |= 32768, A !== null && typeof A == "object" && typeof A.then == "function") {
            var K = A, ve = O, ge = ve.tag;
            if ((ve.mode & 1) === 0 && (ge === 0 || ge === 11 || ge === 15)) {
              var de = ve.alternate;
              de ? (ve.updateQueue = de.updateQueue, ve.memoizedState = de.memoizedState, ve.lanes = de.lanes) : (ve.updateQueue = null, ve.memoizedState = null);
            }
            var Be = mh(E);
            if (Be !== null) {
              Be.flags &= -257, Ki(Be, E, O, m, r), Be.mode & 1 && rp(m, K, r), r = Be, A = K;
              var Ke = r.updateQueue;
              if (Ke === null) {
                var et = /* @__PURE__ */ new Set();
                et.add(A), r.updateQueue = et;
              } else Ke.add(A);
              break e;
            } else {
              if ((r & 1) === 0) {
                rp(m, K, r), mp();
                break e;
              }
              A = Error(f(426));
            }
          } else if (_n && O.mode & 1) {
            var In = mh(E);
            if (In !== null) {
              (In.flags & 65536) === 0 && (In.flags |= 256), Ki(In, E, O, m, r), ci(Hl(A, O));
              break e;
            }
          }
          m = A = Hl(A, O), Pn !== 4 && (Pn = 2), tc === null ? tc = [m] : tc.push(m), m = E;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, r &= -r, m.lanes |= r;
                var H = hh(m, A, r);
                ch(m, H);
                break e;
              case 1:
                O = A;
                var P = m.type, W = m.stateNode;
                if ((m.flags & 128) === 0 && (typeof P.getDerivedStateFromError == "function" || W !== null && typeof W.componentDidCatch == "function" && (Ji === null || !Ji.has(W)))) {
                  m.flags |= 65536, r &= -r, m.lanes |= r;
                  var he = np(m, O, r);
                  ch(m, he);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        Lh(i);
      } catch (Xe) {
        r = Xe, Gn === i && i !== null && (Gn = i = i.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Mh() {
    var n = Xi.current;
    return Xi.current = $l, n === null ? $l : n;
  }
  function mp() {
    (Pn === 0 || Pn === 3 || Pn === 2) && (Pn = 4), nr === null || (Vo & 268435455) === 0 && (Vu & 268435455) === 0 || yo(nr, _r);
  }
  function Mf(n, r) {
    var i = zt;
    zt |= 2;
    var u = Mh();
    (nr !== n || _r !== r) && (ka = null, hi(n, r));
    do
      try {
        Zy();
        break;
      } catch (d) {
        Nh(n, d);
      }
    while (!0);
    if (Hd(), zt = i, Xi.current = u, Gn !== null) throw Error(f(261));
    return nr = null, _r = 0, Pn;
  }
  function Zy() {
    for (; Gn !== null; ) Dh(Gn);
  }
  function Oh() {
    for (; Gn !== null && !ao(); ) Dh(Gn);
  }
  function Dh(n) {
    var r = zh(n.alternate, n, Ra);
    n.memoizedProps = n.pendingProps, r === null ? Lh(n) : Gn = r, ql.current = null;
  }
  function Lh(n) {
    var r = n;
    do {
      var i = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (i = xh(i, r, Ra), i !== null) {
          Gn = i;
          return;
        }
      } else {
        if (i = bf(i, r), i !== null) {
          i.flags &= 32767, Gn = i;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Pn = 6, Gn = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        Gn = r;
        return;
      }
      Gn = r = n;
    } while (r !== null);
    Pn === 0 && (Pn = 5);
  }
  function Ql(n, r, i) {
    var u = Ht, d = gr.transition;
    try {
      gr.transition = null, Ht = 1, eg(n, r, i, u);
    } finally {
      gr.transition = d, Ht = u;
    }
    return null;
  }
  function eg(n, r, i, u) {
    do
      qu();
    while (vi !== null);
    if ((zt & 6) !== 0) throw Error(f(327));
    i = n.finishedWork;
    var d = n.finishedLanes;
    if (i === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, i === n.current) throw Error(f(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var m = i.lanes | i.childLanes;
    if (yd(n, m), n === nr && (Gn = nr = null, _r = 0), (i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0 || Tf || (Tf = !0, Ph(_l, function() {
      return qu(), null;
    })), m = (i.flags & 15990) !== 0, (i.subtreeFlags & 15990) !== 0 || m) {
      m = gr.transition, gr.transition = null;
      var E = Ht;
      Ht = 1;
      var O = zt;
      zt |= 4, ql.current = null, wh(n, i), sp(i, n), Ru(Nl), za = !!ws, Nl = ws = null, n.current = i, Ky(i), oo(), zt = O, Ht = E, gr.transition = m;
    } else n.current = i;
    if (Tf && (Tf = !1, vi = n, nc = d), m = n.pendingLanes, m === 0 && (Ji = null), fs(i.stateNode), da(n, xt()), r !== null) for (u = n.onRecoverableError, i = 0; i < r.length; i++) d = r[i], u(d.value, { componentStack: d.stack, digest: d.digest });
    if (Hu) throw Hu = !1, n = Wl, Wl = null, n;
    return (nc & 1) !== 0 && n.tag !== 0 && qu(), m = n.pendingLanes, (m & 1) !== 0 ? n === Bu ? Zi++ : (Zi = 0, Bu = n) : Zi = 0, jo(), null;
  }
  function qu() {
    if (vi !== null) {
      var n = gu(nc), r = gr.transition, i = Ht;
      try {
        if (gr.transition = null, Ht = 16 > n ? 16 : n, vi === null) var u = !1;
        else {
          if (n = vi, vi = null, nc = 0, (zt & 6) !== 0) throw Error(f(331));
          var d = zt;
          for (zt |= 4, Ge = n.current; Ge !== null; ) {
            var m = Ge, E = m.child;
            if ((Ge.flags & 16) !== 0) {
              var O = m.deletions;
              if (O !== null) {
                for (var A = 0; A < O.length; A++) {
                  var K = O[A];
                  for (Ge = K; Ge !== null; ) {
                    var ve = Ge;
                    switch (ve.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ks(8, ve, m);
                    }
                    var ge = ve.child;
                    if (ge !== null) ge.return = ve, Ge = ge;
                    else for (; Ge !== null; ) {
                      ve = Ge;
                      var de = ve.sibling, Be = ve.return;
                      if (Rf(ve), ve === K) {
                        Ge = null;
                        break;
                      }
                      if (de !== null) {
                        de.return = Be, Ge = de;
                        break;
                      }
                      Ge = Be;
                    }
                  }
                }
                var Ke = m.alternate;
                if (Ke !== null) {
                  var et = Ke.child;
                  if (et !== null) {
                    Ke.child = null;
                    do {
                      var In = et.sibling;
                      et.sibling = null, et = In;
                    } while (et !== null);
                  }
                }
                Ge = m;
              }
            }
            if ((m.subtreeFlags & 2064) !== 0 && E !== null) E.return = m, Ge = E;
            else e: for (; Ge !== null; ) {
              if (m = Ge, (m.flags & 2048) !== 0) switch (m.tag) {
                case 0:
                case 11:
                case 15:
                  Ks(9, m, m.return);
              }
              var H = m.sibling;
              if (H !== null) {
                H.return = m.return, Ge = H;
                break e;
              }
              Ge = m.return;
            }
          }
          var P = n.current;
          for (Ge = P; Ge !== null; ) {
            E = Ge;
            var W = E.child;
            if ((E.subtreeFlags & 2064) !== 0 && W !== null) W.return = E, Ge = W;
            else e: for (E = P; Ge !== null; ) {
              if (O = Ge, (O.flags & 2048) !== 0) try {
                switch (O.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Xs(9, O);
                }
              } catch (Xe) {
                Sn(O, O.return, Xe);
              }
              if (O === E) {
                Ge = null;
                break e;
              }
              var he = O.sibling;
              if (he !== null) {
                he.return = O.return, Ge = he;
                break e;
              }
              Ge = O.return;
            }
          }
          if (zt = d, jo(), ta && typeof ta.onPostCommitFiberRoot == "function") try {
            ta.onPostCommitFiberRoot(Oi, n);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        Ht = i, gr.transition = r;
      }
    }
    return !1;
  }
  function jh(n, r, i) {
    r = Hl(i, r), r = hh(n, r, 1), n = Yi(n, r, 1), r = Qn(), n !== null && (ti(n, 1, r), da(n, r));
  }
  function Sn(n, r, i) {
    if (n.tag === 3) jh(n, n, i);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        jh(r, n, i);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Ji === null || !Ji.has(u))) {
          n = Hl(i, n), n = np(r, n, 1), r = Yi(r, n, 1), n = Qn(), r !== null && (ti(r, 1, n), da(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function tg(n, r, i) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = Qn(), n.pingedLanes |= n.suspendedLanes & i, nr === n && (_r & i) === i && (Pn === 4 || Pn === 3 && (_r & 130023424) === _r && 500 > xt() - dp ? hi(n, 0) : kf |= i), da(n, r);
  }
  function Ah(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = Ca, Ca <<= 1, (Ca & 130023424) === 0 && (Ca = 4194304)));
    var i = Qn();
    n = ba(n, r), n !== null && (ti(n, r, i), da(n, i));
  }
  function ng(n) {
    var r = n.memoizedState, i = 0;
    r !== null && (i = r.retryLane), Ah(n, i);
  }
  function Uh(n, r) {
    var i = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, d = n.memoizedState;
        d !== null && (i = d.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(f(314));
    }
    u !== null && u.delete(r), Ah(n, i);
  }
  var zh;
  zh = function(n, r, i) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || er.current) Wn = !0;
    else {
      if ((n.lanes & i) === 0 && (r.flags & 128) === 0) return Wn = !1, Ys(n, r, i);
      Wn = (n.flags & 131072) !== 0;
    }
    else Wn = !1, _n && (r.flags & 1048576) !== 0 && ih(r, si, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Ba(n, r), n = r.pendingProps;
        var d = aa(r, Nn.current);
        Rn(r, i), d = Gi(null, r, u, n, d, i);
        var m = vo();
        return r.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Hn(u) ? (m = !0, lr(r)) : m = !1, r.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, Gd(r), d.updater = _f, r.stateNode = d, d._reactInternals = r, $s(r, u, n, i), r = qs(null, r, u, !0, m, i)) : (r.tag = 0, _n && m && Gc(r), yr(null, r, d, i), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Ba(n, r), n = r.pendingProps, d = u._init, u = d(u._payload), r.type = u, d = r.tag = ag(u), n = ho(u, n), d) {
            case 0:
              r = yh(null, r, u, n, i);
              break e;
            case 1:
              r = gh(null, r, u, n, i);
              break e;
            case 11:
              r = sa(null, r, u, n, i);
              break e;
            case 14:
              r = Bl(null, r, u, ho(u.type, n), i);
              break e;
          }
          throw Error(f(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, d = r.pendingProps, d = r.elementType === u ? d : ho(u, d), yh(n, r, u, d, i);
      case 1:
        return u = r.type, d = r.pendingProps, d = r.elementType === u ? d : ho(u, d), gh(n, r, u, d, i);
      case 3:
        e: {
          if (Pu(r), n === null) throw Error(f(387));
          u = r.pendingProps, m = r.memoizedState, d = m.element, sh(n, r), Ms(r, u, null, i);
          var E = r.memoizedState;
          if (u = E.element, m.isDehydrated) if (m = { element: u, isDehydrated: !1, cache: E.cache, pendingSuspenseBoundaries: E.pendingSuspenseBoundaries, transitions: E.transitions }, r.updateQueue.baseState = m, r.memoizedState = m, r.flags & 256) {
            d = Hl(Error(f(423)), r), r = _h(n, r, u, i, d);
            break e;
          } else if (u !== d) {
            d = Hl(Error(f(424)), r), r = _h(n, r, u, i, d);
            break e;
          } else for (ia = Oo(r.stateNode.containerInfo.firstChild), oa = r, _n = !0, $a = null, i = ze(r, null, u, i), r.child = i; i; ) i.flags = i.flags & -3 | 4096, i = i.sibling;
          else {
            if (Wi(), u === d) {
              r = qa(n, r, i);
              break e;
            }
            yr(n, r, u, i);
          }
          r = r.child;
        }
        return r;
      case 5:
        return fh(r), n === null && Vd(r), u = r.type, d = r.pendingProps, m = n !== null ? n.memoizedProps : null, E = d.children, Hc(u, d) ? E = null : m !== null && Hc(u, m) && (r.flags |= 32), ap(n, r), yr(n, r, E, i), r.child;
      case 6:
        return n === null && Vd(r), null;
      case 13:
        return xf(n, r, i);
      case 4:
        return Kd(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = An(r, null, u, i) : yr(n, r, u, i), r.child;
      case 11:
        return u = r.type, d = r.pendingProps, d = r.elementType === u ? d : ho(u, d), sa(n, r, u, d, i);
      case 7:
        return yr(n, r, r.pendingProps, i), r.child;
      case 8:
        return yr(n, r, r.pendingProps.children, i), r.child;
      case 12:
        return yr(n, r, r.pendingProps.children, i), r.child;
      case 10:
        e: {
          if (u = r.type._context, d = r.pendingProps, m = r.memoizedProps, E = d.value, rt(xa, u._currentValue), u._currentValue = E, m !== null) if (fo(m.value, E)) {
            if (m.children === d.children && !er.current) {
              r = qa(n, r, i);
              break e;
            }
          } else for (m = r.child, m !== null && (m.return = r); m !== null; ) {
            var O = m.dependencies;
            if (O !== null) {
              E = m.child;
              for (var A = O.firstContext; A !== null; ) {
                if (A.context === u) {
                  if (m.tag === 1) {
                    A = fi(-1, i & -i), A.tag = 2;
                    var K = m.updateQueue;
                    if (K !== null) {
                      K = K.shared;
                      var ve = K.pending;
                      ve === null ? A.next = A : (A.next = ve.next, ve.next = A), K.pending = A;
                    }
                  }
                  m.lanes |= i, A = m.alternate, A !== null && (A.lanes |= i), qd(
                    m.return,
                    i,
                    r
                  ), O.lanes |= i;
                  break;
                }
                A = A.next;
              }
            } else if (m.tag === 10) E = m.type === r.type ? null : m.child;
            else if (m.tag === 18) {
              if (E = m.return, E === null) throw Error(f(341));
              E.lanes |= i, O = E.alternate, O !== null && (O.lanes |= i), qd(E, i, r), E = m.sibling;
            } else E = m.child;
            if (E !== null) E.return = m;
            else for (E = m; E !== null; ) {
              if (E === r) {
                E = null;
                break;
              }
              if (m = E.sibling, m !== null) {
                m.return = E.return, E = m;
                break;
              }
              E = E.return;
            }
            m = E;
          }
          yr(n, r, d.children, i), r = r.child;
        }
        return r;
      case 9:
        return d = r.type, u = r.pendingProps.children, Rn(r, i), d = Ha(d), u = u(d), r.flags |= 1, yr(n, r, u, i), r.child;
      case 14:
        return u = r.type, d = ho(u, r.pendingProps), d = ho(u.type, d), Bl(n, r, u, d, i);
      case 15:
        return bt(n, r, r.type, r.pendingProps, i);
      case 17:
        return u = r.type, d = r.pendingProps, d = r.elementType === u ? d : ho(u, d), Ba(n, r), r.tag = 1, Hn(u) ? (n = !0, lr(r)) : n = !1, Rn(r, i), Sf(r, u, d), $s(r, u, d, i), qs(null, r, u, !0, n, i);
      case 19:
        return Po(n, r, i);
      case 22:
        return Bs(n, r, i);
    }
    throw Error(f(156, r.tag));
  };
  function Ph(n, r) {
    return mn(n, r);
  }
  function rg(n, r, i, u) {
    this.tag = n, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ya(n, r, i, u) {
    return new rg(n, r, i, u);
  }
  function yp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function ag(n) {
    if (typeof n == "function") return yp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === L) return 11;
      if (n === ke) return 14;
    }
    return 2;
  }
  function el(n, r) {
    var i = n.alternate;
    return i === null ? (i = Ya(n.tag, r, n.key, n.mode), i.elementType = n.elementType, i.type = n.type, i.stateNode = n.stateNode, i.alternate = n, n.alternate = i) : (i.pendingProps = r, i.type = n.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = n.flags & 14680064, i.childLanes = n.childLanes, i.lanes = n.lanes, i.child = n.child, i.memoizedProps = n.memoizedProps, i.memoizedState = n.memoizedState, i.updateQueue = n.updateQueue, r = n.dependencies, i.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, i.sibling = n.sibling, i.index = n.index, i.ref = n.ref, i;
  }
  function oc(n, r, i, u, d, m) {
    var E = 2;
    if (u = n, typeof n == "function") yp(n) && (E = 1);
    else if (typeof n == "string") E = 5;
    else e: switch (n) {
      case Te:
        return mi(i.children, d, m, r);
      case Ve:
        E = 8, d |= 8;
        break;
      case Ye:
        return n = Ya(12, i, r, d | 2), n.elementType = Ye, n.lanes = m, n;
      case Y:
        return n = Ya(13, i, r, d), n.elementType = Y, n.lanes = m, n;
      case pe:
        return n = Ya(19, i, r, d), n.elementType = pe, n.lanes = m, n;
      case ye:
        return tl(i, d, m, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Ze:
            E = 10;
            break e;
          case re:
            E = 9;
            break e;
          case L:
            E = 11;
            break e;
          case ke:
            E = 14;
            break e;
          case ue:
            E = 16, u = null;
            break e;
        }
        throw Error(f(130, n == null ? n : typeof n, ""));
    }
    return r = Ya(E, i, r, d), r.elementType = n, r.type = u, r.lanes = m, r;
  }
  function mi(n, r, i, u) {
    return n = Ya(7, n, u, r), n.lanes = i, n;
  }
  function tl(n, r, i, u) {
    return n = Ya(22, n, u, r), n.elementType = ye, n.lanes = i, n.stateNode = { isHidden: !1 }, n;
  }
  function gp(n, r, i) {
    return n = Ya(6, n, null, r), n.lanes = i, n;
  }
  function Of(n, r, i) {
    return r = Ya(4, n.children !== null ? n.children : [], n.key, r), r.lanes = i, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Ih(n, r, i, u, d) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = yu(0), this.expirationTimes = yu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = yu(0), this.identifierPrefix = u, this.onRecoverableError = d, this.mutableSourceEagerHydrationData = null;
  }
  function Df(n, r, i, u, d, m, E, O, A) {
    return n = new Ih(n, r, i, O, A), r === 1 ? (r = 1, m === !0 && (r |= 8)) : r = 0, m = Ya(3, null, null, r), n.current = m, m.stateNode = n, m.memoizedState = { element: u, isDehydrated: i, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Gd(m), n;
  }
  function og(n, r, i) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ie, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: i };
  }
  function _p(n) {
    if (!n) return Or;
    n = n._reactInternals;
    e: {
      if (Et(n) !== n || n.tag !== 1) throw Error(f(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Hn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(f(171));
    }
    if (n.tag === 1) {
      var i = n.type;
      if (Hn(i)) return Ts(n, i, r);
    }
    return r;
  }
  function Fh(n, r, i, u, d, m, E, O, A) {
    return n = Df(i, u, !0, n, d, m, E, O, A), n.context = _p(null), i = n.current, u = Qn(), d = $o(i), m = fi(u, d), m.callback = r ?? null, Yi(i, m, d), n.current.lanes = d, ti(n, d, u), da(n, u), n;
  }
  function Lf(n, r, i, u) {
    var d = r.current, m = Qn(), E = $o(d);
    return i = _p(i), r.context === null ? r.context = i : r.pendingContext = i, r = fi(m, E), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Yi(d, r, E), n !== null && (Br(n, d, E, m), Jc(n, d, E)), E;
  }
  function jf(n) {
    return n = n.current, n.child ? (n.child.tag === 5, n.child.stateNode) : null;
  }
  function Sp(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var i = n.retryLane;
      n.retryLane = i !== 0 && i < r ? i : r;
    }
  }
  function Af(n, r) {
    Sp(n, r), (n = n.alternate) && Sp(n, r);
  }
  function Vh() {
    return null;
  }
  var Kl = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Cp(n) {
    this._internalRoot = n;
  }
  Uf.prototype.render = Cp.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(f(409));
    Lf(n, r, null, null);
  }, Uf.prototype.unmount = Cp.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Gl(function() {
        Lf(null, n, null, null);
      }), r[li] = null;
    }
  };
  function Uf(n) {
    this._internalRoot = n;
  }
  Uf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = gt();
      n = { blockedOn: null, target: n, priority: r };
      for (var i = 0; i < Zn.length && r !== 0 && r < Zn[i].priority; i++) ;
      Zn.splice(i, 0, n), i === 0 && vs(n);
    }
  };
  function Ep(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function zf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function $h() {
  }
  function ig(n, r, i, u, d) {
    if (d) {
      if (typeof u == "function") {
        var m = u;
        u = function() {
          var K = jf(E);
          m.call(K);
        };
      }
      var E = Fh(r, u, n, 0, null, !1, !1, "", $h);
      return n._reactRootContainer = E, n[li] = E.current, Tu(n.nodeType === 8 ? n.parentNode : n), Gl(), E;
    }
    for (; d = n.lastChild; ) n.removeChild(d);
    if (typeof u == "function") {
      var O = u;
      u = function() {
        var K = jf(A);
        O.call(K);
      };
    }
    var A = Df(n, 0, !1, null, null, !1, !1, "", $h);
    return n._reactRootContainer = A, n[li] = A.current, Tu(n.nodeType === 8 ? n.parentNode : n), Gl(function() {
      Lf(r, A, i, u);
    }), A;
  }
  function ic(n, r, i, u, d) {
    var m = i._reactRootContainer;
    if (m) {
      var E = m;
      if (typeof d == "function") {
        var O = d;
        d = function() {
          var A = jf(E);
          O.call(A);
        };
      }
      Lf(r, E, n, d);
    } else E = ig(i, r, n, d, u);
    return jf(E);
  }
  Ft = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var i = lo(r.pendingLanes);
          i !== 0 && (ni(r, i | 1), da(r, xt()), (zt & 6) === 0 && ($u = xt() + 500, jo()));
        }
        break;
      case 13:
        Gl(function() {
          var u = ba(n, 1);
          if (u !== null) {
            var d = Qn();
            Br(u, n, 1, d);
          }
        }), Af(n, 1);
    }
  }, ds = function(n) {
    if (n.tag === 13) {
      var r = ba(n, 134217728);
      if (r !== null) {
        var i = Qn();
        Br(r, n, 134217728, i);
      }
      Af(n, 134217728);
    }
  }, Ro = function(n) {
    if (n.tag === 13) {
      var r = $o(n), i = ba(n, r);
      if (i !== null) {
        var u = Qn();
        Br(i, n, r, u);
      }
      Af(n, r);
    }
  }, gt = function() {
    return Ht;
  }, _u = function(n, r) {
    var i = Ht;
    try {
      return Ht = n, r();
    } finally {
      Ht = i;
    }
  }, en = function(n, r, i) {
    switch (r) {
      case "input":
        if (Ar(n, i), r = i.name, i.type === "radio" && r != null) {
          for (i = n; i.parentNode; ) i = i.parentNode;
          for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < i.length; r++) {
            var u = i[r];
            if (u !== n && u.form === n.form) {
              var d = wn(u);
              if (!d) throw Error(f(90));
              dr(u), Ar(u, d);
            }
          }
        }
        break;
      case "textarea":
        to(n, i);
        break;
      case "select":
        r = i.value, r != null && Ln(n, !!i.multiple, r, !1);
    }
  }, ml = vp, Ti = Gl;
  var lg = { usingClientEntryPoint: !1, Events: [ot, po, wn, ei, hl, vp] }, lc = { findFiberByHostInstance: Ml, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Hh = { bundleType: lc.bundleType, version: lc.version, rendererPackageName: lc.rendererPackageName, rendererConfig: lc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: De.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = jn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: lc.findFiberByHostInstance || Vh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var nl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!nl.isDisabled && nl.supportsFiber) try {
      Oi = nl.inject(Hh), ta = nl;
    } catch {
    }
  }
  return Za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lg, Za.createPortal = function(n, r) {
    var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ep(r)) throw Error(f(200));
    return og(n, r, null, i);
  }, Za.createRoot = function(n, r) {
    if (!Ep(n)) throw Error(f(299));
    var i = !1, u = "", d = Kl;
    return r != null && (r.unstable_strictMode === !0 && (i = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (d = r.onRecoverableError)), r = Df(n, 1, !1, null, null, i, !1, u, d), n[li] = r.current, Tu(n.nodeType === 8 ? n.parentNode : n), new Cp(r);
  }, Za.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(f(188)) : (n = Object.keys(n).join(","), Error(f(268, n)));
    return n = jn(r), n = n === null ? null : n.stateNode, n;
  }, Za.flushSync = function(n) {
    return Gl(n);
  }, Za.hydrate = function(n, r, i) {
    if (!zf(r)) throw Error(f(200));
    return ic(null, n, r, !0, i);
  }, Za.hydrateRoot = function(n, r, i) {
    if (!Ep(n)) throw Error(f(405));
    var u = i != null && i.hydratedSources || null, d = !1, m = "", E = Kl;
    if (i != null && (i.unstable_strictMode === !0 && (d = !0), i.identifierPrefix !== void 0 && (m = i.identifierPrefix), i.onRecoverableError !== void 0 && (E = i.onRecoverableError)), r = Fh(r, null, n, 1, i ?? null, d, !1, m, E), n[li] = r.current, Tu(n), u) for (n = 0; n < u.length; n++) i = u[n], d = i._getVersion, d = d(i._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [i, d] : r.mutableSourceEagerHydrationData.push(
      i,
      d
    );
    return new Uf(r);
  }, Za.render = function(n, r, i) {
    if (!zf(r)) throw Error(f(200));
    return ic(null, n, r, !1, i);
  }, Za.unmountComponentAtNode = function(n) {
    if (!zf(n)) throw Error(f(40));
    return n._reactRootContainer ? (Gl(function() {
      ic(null, null, n, !1, function() {
        n._reactRootContainer = null, n[li] = null;
      });
    }), !0) : !1;
  }, Za.unstable_batchedUpdates = vp, Za.unstable_renderSubtreeIntoContainer = function(n, r, i, u) {
    if (!zf(i)) throw Error(f(200));
    if (n == null || n._reactInternals === void 0) throw Error(f(38));
    return ic(n, r, i, !1, u);
  }, Za.version = "18.3.1-next-f1338f8080-20240426", Za;
}
var eo = {};
var wE;
function _L() {
  return wE || (wE = 1, process.env.NODE_ENV !== "production" && (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = kv(), p = GE(), f = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, g = !1;
    function w(e) {
      g = e;
    }
    function C(e) {
      if (!g) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          a[o - 1] = arguments[o];
        b("warn", e, a);
      }
    }
    function h(e) {
      if (!g) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          a[o - 1] = arguments[o];
        b("error", e, a);
      }
    }
    function b(e, t, a) {
      {
        var o = f.ReactDebugCurrentFrame, l = o.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(v) {
          return String(v);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var x = 0, k = 1, M = 2, U = 3, V = 4, $ = 5, Z = 6, J = 7, Se = 8, Ce = 9, xe = 10, Ee = 11, De = 12, ae = 13, Ie = 14, Te = 15, Ve = 16, Ye = 17, Ze = 18, re = 19, L = 21, Y = 22, pe = 23, ke = 24, ue = 25, ye = !0, ee = !1, Me = !1, me = !1, F = !1, te = !0, $e = !0, He = !0, mt = !0, at = /* @__PURE__ */ new Set(), Ue = {}, lt = {};
    function pt(e, t) {
      Qt(e, t), Qt(e + "Capture", t);
    }
    function Qt(e, t) {
      Ue[e] && h("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ue[e] = t;
      {
        var a = e.toLowerCase();
        lt[a] = e, e === "onDoubleClick" && (lt.ondblclick = e);
      }
      for (var o = 0; o < t.length; o++)
        at.add(t[o]);
    }
    var vn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", dr = Object.prototype.hasOwnProperty;
    function En(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Xn(e) {
      try {
        return On(e), !1;
      } catch {
        return !0;
      }
    }
    function On(e) {
      return "" + e;
    }
    function Dn(e, t) {
      if (Xn(e))
        return h("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, En(e)), On(e);
    }
    function Ar(e) {
      if (Xn(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", En(e)), On(e);
    }
    function Co(e, t) {
      if (Xn(e))
        return h("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, En(e)), On(e);
    }
    function ga(e, t) {
      if (Xn(e))
        return h("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, En(e)), On(e);
    }
    function or(e) {
      if (Xn(e))
        return h("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", En(e)), On(e);
    }
    function Ln(e) {
      if (Xn(e))
        return h("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", En(e)), On(e);
    }
    var Jn = 0, Tr = 1, to = 2, Vn = 3, Nr = 4, _a = 5, no = 6, Eo = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ne = Eo + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", tt = new RegExp("^[" + Eo + "][" + Ne + "]*$"), Rt = {}, Kt = {};
    function sn(e) {
      return dr.call(Kt, e) ? !0 : dr.call(Rt, e) ? !1 : tt.test(e) ? (Kt[e] = !0, !0) : (Rt[e] = !0, h("Invalid attribute name: `%s`", e), !1);
    }
    function xn(e, t, a) {
      return t !== null ? t.type === Jn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function hn(e, t, a, o) {
      if (a !== null && a.type === Jn)
        return !1;
      switch (typeof t) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (o)
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
    function ir(e, t, a, o) {
      if (t === null || typeof t > "u" || hn(e, t, a, o))
        return !0;
      if (o)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Vn:
            return !t;
          case Nr:
            return t === !1;
          case _a:
            return isNaN(t);
          case no:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function cn(e) {
      return en.hasOwnProperty(e) ? en[e] : null;
    }
    function Zt(e, t, a, o, l, s, v) {
      this.acceptsBooleans = t === to || t === Vn || t === Nr, this.attributeName = o, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = v;
    }
    var en = {}, Sa = [
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
    Sa.forEach(function(e) {
      en[e] = new Zt(
        e,
        Jn,
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
      en[t] = new Zt(
        t,
        Tr,
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
      en[e] = new Zt(
        e,
        to,
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
      en[e] = new Zt(
        e,
        to,
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
      en[e] = new Zt(
        e,
        Vn,
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
      en[e] = new Zt(
        e,
        Vn,
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
      en[e] = new Zt(
        e,
        Nr,
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
      en[e] = new Zt(
        e,
        no,
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
      en[e] = new Zt(
        e,
        _a,
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
    var Mr = /[\-\:]([a-z])/g, ja = function(e) {
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
      var t = e.replace(Mr, ja);
      en[t] = new Zt(
        t,
        Tr,
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
      var t = e.replace(Mr, ja);
      en[t] = new Zt(
        t,
        Tr,
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
      var t = e.replace(Mr, ja);
      en[t] = new Zt(
        t,
        Tr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      en[e] = new Zt(
        e,
        Tr,
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
    var ei = "xlinkHref";
    en[ei] = new Zt(
      "xlinkHref",
      Tr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      en[e] = new Zt(
        e,
        Tr,
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
    var hl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ml = !1;
    function Ti(e) {
      !ml && hl.test(e) && (ml = !0, h("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Ni(e, t, a, o) {
      if (o.mustUseProperty) {
        var l = o.propertyName;
        return e[l];
      } else {
        Dn(a, t), o.sanitizeURL && Ti("" + a);
        var s = o.attributeName, v = null;
        if (o.type === Nr) {
          if (e.hasAttribute(s)) {
            var y = e.getAttribute(s);
            return y === "" ? !0 : ir(t, a, o, !1) ? y : y === "" + a ? a : y;
          }
        } else if (e.hasAttribute(s)) {
          if (ir(t, a, o, !1))
            return e.getAttribute(s);
          if (o.type === Vn)
            return a;
          v = e.getAttribute(s);
        }
        return ir(t, a, o, !1) ? v === null ? a : v : v === "" + a ? a : v;
      }
    }
    function yl(e, t, a, o) {
      {
        if (!sn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return Dn(a, t), l === "" + a ? a : l;
      }
    }
    function Ur(e, t, a, o) {
      var l = cn(t);
      if (!xn(t, l, o)) {
        if (ir(t, a, l, o) && (a = null), o || l === null) {
          if (sn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Dn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var v = l.mustUseProperty;
        if (v) {
          var y = l.propertyName;
          if (a === null) {
            var _ = l.type;
            e[y] = _ === Vn ? !1 : "";
          } else
            e[y] = a;
          return;
        }
        var T = l.attributeName, N = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(T);
        else {
          var I = l.type, z;
          I === Vn || I === Nr && a === !0 ? z = "" : (Dn(a, T), z = "" + a, l.sanitizeURL && Ti(z.toString())), N ? e.setAttributeNS(N, T, z) : e.setAttribute(T, z);
        }
      }
    }
    var zr = /* @__PURE__ */ Symbol.for("react.element"), pr = /* @__PURE__ */ Symbol.for("react.portal"), xo = /* @__PURE__ */ Symbol.for("react.fragment"), ro = /* @__PURE__ */ Symbol.for("react.strict_mode"), bo = /* @__PURE__ */ Symbol.for("react.profiler"), wo = /* @__PURE__ */ Symbol.for("react.provider"), j = /* @__PURE__ */ Symbol.for("react.context"), se = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ae = /* @__PURE__ */ Symbol.for("react.suspense"), Qe = /* @__PURE__ */ Symbol.for("react.suspense_list"), Et = /* @__PURE__ */ Symbol.for("react.memo"), _t = /* @__PURE__ */ Symbol.for("react.lazy"), Mt = /* @__PURE__ */ Symbol.for("react.scope"), Tt = /* @__PURE__ */ Symbol.for("react.debug_trace_mode"), jn = /* @__PURE__ */ Symbol.for("react.offscreen"), fn = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), mn = /* @__PURE__ */ Symbol.for("react.cache"), vr = /* @__PURE__ */ Symbol.for("react.tracing_marker"), ao = Symbol.iterator, oo = "@@iterator";
    function xt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ao && e[ao] || e[oo];
      return typeof t == "function" ? t : null;
    }
    var wt = Object.assign, io = 0, gl, _l, Mi, pu, Oi, ta, fs;
    function Pr() {
    }
    Pr.__reactDisabledLog = !0;
    function Tc() {
      {
        if (io === 0) {
          gl = console.log, _l = console.info, Mi = console.warn, pu = console.error, Oi = console.group, ta = console.groupCollapsed, fs = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Pr,
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
        io++;
      }
    }
    function Nc() {
      {
        if (io--, io === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: wt({}, e, {
              value: gl
            }),
            info: wt({}, e, {
              value: _l
            }),
            warn: wt({}, e, {
              value: Mi
            }),
            error: wt({}, e, {
              value: pu
            }),
            group: wt({}, e, {
              value: Oi
            }),
            groupCollapsed: wt({}, e, {
              value: ta
            }),
            groupEnd: wt({}, e, {
              value: fs
            })
          });
        }
        io < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var vu = f.ReactCurrentDispatcher, Di;
    function Ca(e, t, a) {
      {
        if (Di === void 0)
          try {
            throw Error();
          } catch (l) {
            var o = l.stack.trim().match(/\n( *(at )?)/);
            Di = o && o[1] || "";
          }
        return `
` + Di + e;
      }
    }
    var lo = !1, uo;
    {
      var hu = typeof WeakMap == "function" ? WeakMap : Map;
      uo = new hu();
    }
    function Sl(e, t) {
      if (!e || lo)
        return "";
      {
        var a = uo.get(e);
        if (a !== void 0)
          return a;
      }
      var o;
      lo = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = vu.current, vu.current = null, Tc();
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
              o = X;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (X) {
              o = X;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (X) {
            o = X;
          }
          e();
        }
      } catch (X) {
        if (X && o && typeof X.stack == "string") {
          for (var y = X.stack.split(`
`), _ = o.stack.split(`
`), T = y.length - 1, N = _.length - 1; T >= 1 && N >= 0 && y[T] !== _[N]; )
            N--;
          for (; T >= 1 && N >= 0; T--, N--)
            if (y[T] !== _[N]) {
              if (T !== 1 || N !== 1)
                do
                  if (T--, N--, N < 0 || y[T] !== _[N]) {
                    var I = `
` + y[T].replace(" at new ", " at ");
                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), typeof e == "function" && uo.set(e, I), I;
                  }
                while (T >= 1 && N >= 0);
              break;
            }
        }
      } finally {
        lo = !1, vu.current = s, Nc(), Error.prepareStackTrace = l;
      }
      var z = e ? e.displayName || e.name : "", G = z ? Ca(z) : "";
      return typeof e == "function" && uo.set(e, G), G;
    }
    function Li(e, t, a) {
      return Sl(e, !0);
    }
    function mu(e, t, a) {
      return Sl(e, !1);
    }
    function yu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ti(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Sl(e, yu(e));
      if (typeof e == "string")
        return Ca(e);
      switch (e) {
        case Ae:
          return Ca("Suspense");
        case Qe:
          return Ca("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case se:
            return mu(e.render);
          case Et:
            return ti(e.type, t, a);
          case _t: {
            var o = e, l = o._payload, s = o._init;
            try {
              return ti(s(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function yd(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case $:
          return Ca(e.type);
        case Ve:
          return Ca("Lazy");
        case ae:
          return Ca("Suspense");
        case re:
          return Ca("SuspenseList");
        case x:
        case M:
        case Te:
          return mu(e.type);
        case Ee:
          return mu(e.type.render);
        case k:
          return Li(e.type);
        default:
          return "";
      }
    }
    function ni(e) {
      try {
        var t = "", a = e;
        do
          t += yd(a), a = a.return;
        while (a);
        return t;
      } catch (o) {
        return `
Error generating stack: ` + o.message + `
` + o.stack;
      }
    }
    function Ht(e, t, a) {
      var o = e.displayName;
      if (o)
        return o;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function gu(e) {
      return e.displayName || "Context";
    }
    function Ft(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case xo:
          return "Fragment";
        case pr:
          return "Portal";
        case bo:
          return "Profiler";
        case ro:
          return "StrictMode";
        case Ae:
          return "Suspense";
        case Qe:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case j:
            var t = e;
            return gu(t) + ".Consumer";
          case wo:
            var a = e;
            return gu(a._context) + ".Provider";
          case se:
            return Ht(e, e.render, "ForwardRef");
          case Et:
            var o = e.displayName || null;
            return o !== null ? o : Ft(e.type) || "Memo";
          case _t: {
            var l = e, s = l._payload, v = l._init;
            try {
              return Ft(v(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function ds(e, t, a) {
      var o = t.displayName || t.name || "";
      return e.displayName || (o !== "" ? a + "(" + o + ")" : a);
    }
    function Ro(e) {
      return e.displayName || "Context";
    }
    function gt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case ke:
          return "Cache";
        case Ce:
          var o = a;
          return Ro(o) + ".Consumer";
        case xe:
          var l = a;
          return Ro(l._context) + ".Provider";
        case Ze:
          return "DehydratedFragment";
        case Ee:
          return ds(a, a.render, "ForwardRef");
        case J:
          return "Fragment";
        case $:
          return a;
        case V:
          return "Portal";
        case U:
          return "Root";
        case Z:
          return "Text";
        case Ve:
          return Ft(a);
        case Se:
          return a === ro ? "StrictMode" : "Mode";
        case Y:
          return "Offscreen";
        case De:
          return "Profiler";
        case L:
          return "Scope";
        case ae:
          return "Suspense";
        case re:
          return "SuspenseList";
        case ue:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case k:
        case x:
        case Ye:
        case M:
        case Ie:
        case Te:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var _u = f.ReactDebugCurrentFrame, hr = null, ko = !1;
    function Ir() {
      {
        if (hr === null)
          return null;
        var e = hr._debugOwner;
        if (e !== null && typeof e < "u")
          return gt(e);
      }
      return null;
    }
    function To() {
      return hr === null ? "" : ni(hr);
    }
    function yn() {
      _u.getCurrentStack = null, hr = null, ko = !1;
    }
    function tn(e) {
      _u.getCurrentStack = e === null ? null : To, hr = e, ko = !1;
    }
    function ji() {
      return hr;
    }
    function Zn(e) {
      ko = e;
    }
    function Fr(e) {
      return "" + e;
    }
    function Aa(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Ln(e), e;
        default:
          return "";
      }
    }
    var Cl = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ps(e, t) {
      Cl[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || h("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || h("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function vs(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Ai(e) {
      return e._valueTracker;
    }
    function El(e) {
      e._valueTracker = null;
    }
    function gd(e) {
      var t = "";
      return e && (vs(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Ua(e) {
      var t = vs(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Ln(e[t]);
      var o = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(y) {
            Ln(y), o = "" + y, s.call(this, y);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var v = {
          getValue: function() {
            return o;
          },
          setValue: function(y) {
            Ln(y), o = "" + y;
          },
          stopTracking: function() {
            El(e), delete e[t];
          }
        };
        return v;
      }
    }
    function so(e) {
      Ai(e) || (e._valueTracker = Ua(e));
    }
    function No(e) {
      if (!e)
        return !1;
      var t = Ai(e);
      if (!t)
        return !0;
      var a = t.getValue(), o = gd(e);
      return o !== a ? (t.setValue(o), !0) : !1;
    }
    function za(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Su = !1, Cu = !1, Ui = !1, xl = !1;
    function Eu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function xu(e, t) {
      var a = e, o = t.checked, l = wt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: o ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function co(e, t) {
      ps("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Cu && (h("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ir() || "A component", t.type), Cu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Su && (h("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ir() || "A component", t.type), Su = !0);
      var a = e, o = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Aa(t.value != null ? t.value : o),
        controlled: Eu(t)
      };
    }
    function S(e, t) {
      var a = e, o = t.checked;
      o != null && Ur(a, "checked", o, !1);
    }
    function D(e, t) {
      var a = e;
      {
        var o = Eu(t);
        !a._wrapperState.controlled && o && !xl && (h("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), xl = !0), a._wrapperState.controlled && !o && !Ui && (h("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Ui = !0);
      }
      S(e, t);
      var l = Aa(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = Fr(l)) : a.value !== Fr(l) && (a.value = Fr(l));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? ut(a, t.type, l) : t.hasOwnProperty("defaultValue") && ut(a, t.type, Aa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Q(e, t, a) {
      var o = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, s = l === "submit" || l === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var v = Fr(o._wrapperState.initialValue);
        a || v !== o.value && (o.value = v), o.defaultValue = v;
      }
      var y = o.name;
      y !== "" && (o.name = ""), o.defaultChecked = !o.defaultChecked, o.defaultChecked = !!o._wrapperState.initialChecked, y !== "" && (o.name = y);
    }
    function ne(e, t) {
      var a = e;
      D(a, t), be(a, t);
    }
    function be(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var o = e; o.parentNode; )
          o = o.parentNode;
        Dn(a, "name");
        for (var l = o.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var v = l[s];
          if (!(v === e || v.form !== e.form)) {
            var y = lm(v);
            if (!y)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            No(v), D(v, y);
          }
        }
      }
    }
    function ut(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || za(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Fr(e._wrapperState.initialValue) : e.defaultValue !== Fr(a) && (e.defaultValue = Fr(a)));
    }
    var je = !1, ft = !1, Ot = !1;
    function Vt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? c.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || ft || (ft = !0, h("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Ot || (Ot = !0, h("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !je && (h("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), je = !0);
    }
    function dn(e, t) {
      t.value != null && e.setAttribute("value", Fr(Aa(t.value)));
    }
    var nn = Array.isArray;
    function kt(e) {
      return nn(e);
    }
    var rn;
    rn = !1;
    function bn() {
      var e = Ir();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var zi = ["value", "defaultValue"];
    function hs(e) {
      {
        ps("select", e);
        for (var t = 0; t < zi.length; t++) {
          var a = zi[t];
          if (e[a] != null) {
            var o = kt(e[a]);
            e.multiple && !o ? h("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, bn()) : !e.multiple && o && h("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, bn());
          }
        }
      }
    }
    function ri(e, t, a, o) {
      var l = e.options;
      if (t) {
        for (var s = a, v = {}, y = 0; y < s.length; y++)
          v["$" + s[y]] = !0;
        for (var _ = 0; _ < l.length; _++) {
          var T = v.hasOwnProperty("$" + l[_].value);
          l[_].selected !== T && (l[_].selected = T), T && o && (l[_].defaultSelected = !0);
        }
      } else {
        for (var N = Fr(Aa(a)), I = null, z = 0; z < l.length; z++) {
          if (l[z].value === N) {
            l[z].selected = !0, o && (l[z].defaultSelected = !0);
            return;
          }
          I === null && !l[z].disabled && (I = l[z]);
        }
        I !== null && (I.selected = !0);
      }
    }
    function ms(e, t) {
      return wt({}, t, {
        value: void 0
      });
    }
    function bl(e, t) {
      var a = e;
      hs(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !rn && (h("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), rn = !0);
    }
    function _d(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var o = t.value;
      o != null ? ri(a, !!t.multiple, o, !1) : t.defaultValue != null && ri(a, !!t.multiple, t.defaultValue, !0);
    }
    function Mc(e, t) {
      var a = e, o = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? ri(a, !!t.multiple, l, !1) : o !== !!t.multiple && (t.defaultValue != null ? ri(a, !!t.multiple, t.defaultValue, !0) : ri(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Sd(e, t) {
      var a = e, o = t.value;
      o != null && ri(a, !!t.multiple, o, !1);
    }
    var Mv = !1;
    function Cd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var o = wt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Fr(a._wrapperState.initialValue)
      });
      return o;
    }
    function Ed(e, t) {
      var a = e;
      ps("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Mv && (h("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ir() || "A component"), Mv = !0);
      var o = t.value;
      if (o == null) {
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
        s == null && (s = ""), o = s;
      }
      a._wrapperState = {
        initialValue: Aa(o)
      };
    }
    function Ov(e, t) {
      var a = e, o = Aa(t.value), l = Aa(t.defaultValue);
      if (o != null) {
        var s = Fr(o);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = Fr(l));
    }
    function Dv(e, t) {
      var a = e, o = a.textContent;
      o === a._wrapperState.initialValue && o !== "" && o !== null && (a.value = o);
    }
    function Uy(e, t) {
      Ov(e, t);
    }
    var ai = "http://www.w3.org/1999/xhtml", xd = "http://www.w3.org/1998/Math/MathML", bd = "http://www.w3.org/2000/svg";
    function wd(e) {
      switch (e) {
        case "svg":
          return bd;
        case "math":
          return xd;
        default:
          return ai;
      }
    }
    function Rd(e, t) {
      return e == null || e === ai ? wd(t) : e === bd && t === "foreignObject" ? ai : e;
    }
    var Lv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, o, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, o, l);
        });
      } : e;
    }, Oc, jv = Lv(function(e, t) {
      if (e.namespaceURI === bd && !("innerHTML" in e)) {
        Oc = Oc || document.createElement("div"), Oc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Oc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), na = 1, oi = 3, $n = 8, ii = 9, kd = 11, bu = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === oi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, ys = {
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
    }, gs = {
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
    function Av(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Uv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(gs).forEach(function(e) {
      Uv.forEach(function(t) {
        gs[Av(t, e)] = gs[e];
      });
    });
    function Dc(e, t, a) {
      var o = t == null || typeof t == "boolean" || t === "";
      return o ? "" : !a && typeof t == "number" && t !== 0 && !(gs.hasOwnProperty(e) && gs[e]) ? t + "px" : (ga(t, e), ("" + t).trim());
    }
    var zv = /([A-Z])/g, Pv = /^ms-/;
    function wu(e) {
      return e.replace(zv, "-$1").toLowerCase().replace(Pv, "-ms-");
    }
    var Iv = function() {
    };
    {
      var zy = /^(?:webkit|moz|o)[A-Z]/, Py = /^-ms-/, Fv = /-(.)/g, Td = /;\s*$/, Mo = {}, wl = {}, Vv = !1, _s = !1, Iy = function(e) {
        return e.replace(Fv, function(t, a) {
          return a.toUpperCase();
        });
      }, $v = function(e) {
        Mo.hasOwnProperty(e) && Mo[e] || (Mo[e] = !0, h(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Iy(e.replace(Py, "ms-"))
        ));
      }, Nd = function(e) {
        Mo.hasOwnProperty(e) && Mo[e] || (Mo[e] = !0, h("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Md = function(e, t) {
        wl.hasOwnProperty(t) && wl[t] || (wl[t] = !0, h(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Td, "")));
      }, Hv = function(e, t) {
        Vv || (Vv = !0, h("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Bv = function(e, t) {
        _s || (_s = !0, h("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Iv = function(e, t) {
        e.indexOf("-") > -1 ? $v(e) : zy.test(e) ? Nd(e) : Td.test(t) && Md(e, t), typeof t == "number" && (isNaN(t) ? Hv(e, t) : isFinite(t) || Bv(e, t));
      };
    }
    var qv = Iv;
    function Fy(e) {
      {
        var t = "", a = "";
        for (var o in e)
          if (e.hasOwnProperty(o)) {
            var l = e[o];
            if (l != null) {
              var s = o.indexOf("--") === 0;
              t += a + (s ? o : wu(o)) + ":", t += Dc(o, l, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Wv(e, t) {
      var a = e.style;
      for (var o in t)
        if (t.hasOwnProperty(o)) {
          var l = o.indexOf("--") === 0;
          l || qv(o, t[o]);
          var s = Dc(o, t[o], l);
          o === "float" && (o = "cssFloat"), l ? a.setProperty(o, s) : a[o] = s;
        }
    }
    function Vy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Yv(e) {
      var t = {};
      for (var a in e)
        for (var o = ys[a] || [a], l = 0; l < o.length; l++)
          t[o[l]] = a;
      return t;
    }
    function $y(e, t) {
      {
        if (!t)
          return;
        var a = Yv(e), o = Yv(t), l = {};
        for (var s in a) {
          var v = a[s], y = o[s];
          if (y && v !== y) {
            var _ = v + "," + y;
            if (l[_])
              continue;
            l[_] = !0, h("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Vy(e[v]) ? "Removing" : "Updating", v, y);
          }
        }
      }
    }
    var fo = {
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
    }, Ss = wt({
      menuitem: !0
    }, fo), Gv = "__html";
    function Lc(e, t) {
      if (t) {
        if (Ss[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Gv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && h("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Pi(e, t) {
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
    var Cs = {
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
    }, jc = {
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
    }, Ru = {}, Hy = new RegExp("^(aria)-[" + Ne + "]*$"), ku = new RegExp("^(aria)[A-Z][" + Ne + "]*$");
    function Od(e, t) {
      {
        if (dr.call(Ru, t) && Ru[t])
          return !0;
        if (ku.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), o = jc.hasOwnProperty(a) ? a : null;
          if (o == null)
            return h("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ru[t] = !0, !0;
          if (t !== o)
            return h("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), Ru[t] = !0, !0;
        }
        if (Hy.test(t)) {
          var l = t.toLowerCase(), s = jc.hasOwnProperty(l) ? l : null;
          if (s == null)
            return Ru[t] = !0, !1;
          if (t !== s)
            return h("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Ru[t] = !0, !0;
        }
      }
      return !0;
    }
    function Es(e, t) {
      {
        var a = [];
        for (var o in t) {
          var l = Od(e, o);
          l || a.push(o);
        }
        var s = a.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        a.length === 1 ? h("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && h("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Dd(e, t) {
      Pi(e, t) || Es(e, t);
    }
    var Ld = !1;
    function Ac(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Ld && (Ld = !0, e === "select" && t.multiple ? h("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : h("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Rl = function() {
    };
    {
      var mr = {}, jd = /^on./, Uc = /^on[^A-Z]/, Qv = new RegExp("^(aria)-[" + Ne + "]*$"), Kv = new RegExp("^(aria)[A-Z][" + Ne + "]*$");
      Rl = function(e, t, a, o) {
        if (dr.call(mr, t) && mr[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return h("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), mr[t] = !0, !0;
        if (o != null) {
          var s = o.registrationNameDependencies, v = o.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var y = v.hasOwnProperty(l) ? v[l] : null;
          if (y != null)
            return h("Invalid event handler property `%s`. Did you mean `%s`?", t, y), mr[t] = !0, !0;
          if (jd.test(t))
            return h("Unknown event handler property `%s`. It will be ignored.", t), mr[t] = !0, !0;
        } else if (jd.test(t))
          return Uc.test(t) && h("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), mr[t] = !0, !0;
        if (Qv.test(t) || Kv.test(t))
          return !0;
        if (l === "innerhtml")
          return h("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), mr[t] = !0, !0;
        if (l === "aria")
          return h("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), mr[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return h("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), mr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return h("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), mr[t] = !0, !0;
        var _ = cn(t), T = _ !== null && _.type === Jn;
        if (Cs.hasOwnProperty(l)) {
          var N = Cs[l];
          if (N !== t)
            return h("Invalid DOM property `%s`. Did you mean `%s`?", t, N), mr[t] = !0, !0;
        } else if (!T && t !== l)
          return h("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), mr[t] = !0, !0;
        return typeof a == "boolean" && hn(t, a, _, !1) ? (a ? h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), mr[t] = !0, !0) : T ? !0 : hn(t, a, _, !1) ? (mr[t] = !0, !1) : ((a === "false" || a === "true") && _ !== null && _.type === Vn && (h("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), mr[t] = !0), !0);
      };
    }
    var Xv = function(e, t, a) {
      {
        var o = [];
        for (var l in t) {
          var s = Rl(e, l, t[l], a);
          s || o.push(l);
        }
        var v = o.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        o.length === 1 ? h("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e) : o.length > 1 && h("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e);
      }
    };
    function Jv(e, t, a) {
      Pi(e, t) || Xv(e, t, a);
    }
    var Ad = 1, zc = 2, Pa = 4, Ud = Ad | zc | Pa, kl = null;
    function By(e) {
      kl !== null && h("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), kl = e;
    }
    function qy() {
      kl === null && h("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), kl = null;
    }
    function xs(e) {
      return e === kl;
    }
    function zd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === oi ? t.parentNode : t;
    }
    var Pc = null, Tl = null, Xt = null;
    function Ic(e) {
      var t = Gu(e);
      if (t) {
        if (typeof Pc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var o = lm(a);
          Pc(t.stateNode, t.type, o);
        }
      }
    }
    function Fc(e) {
      Pc = e;
    }
    function Tu(e) {
      Tl ? Xt ? Xt.push(e) : Xt = [e] : Tl = e;
    }
    function Zv() {
      return Tl !== null || Xt !== null;
    }
    function Vc() {
      if (Tl) {
        var e = Tl, t = Xt;
        if (Tl = null, Xt = null, Ic(e), t)
          for (var a = 0; a < t.length; a++)
            Ic(t[a]);
      }
    }
    var Nu = function(e, t) {
      return e(t);
    }, bs = function() {
    }, Ii = !1;
    function eh() {
      var e = Zv();
      e && (bs(), Vc());
    }
    function th(e, t, a) {
      if (Ii)
        return e(t, a);
      Ii = !0;
      try {
        return Nu(e, t, a);
      } finally {
        Ii = !1, eh();
      }
    }
    function Wy(e, t, a) {
      Nu = e, bs = a;
    }
    function nh(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function $c(e, t, a) {
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
          return !!(a.disabled && nh(t));
        default:
          return !1;
      }
    }
    function Fi(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var o = lm(a);
      if (o === null)
        return null;
      var l = o[t];
      if ($c(t, e.type, o))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var ws = !1;
    if (vn)
      try {
        var Nl = {};
        Object.defineProperty(Nl, "passive", {
          get: function() {
            ws = !0;
          }
        }), window.addEventListener("test", Nl, Nl), window.removeEventListener("test", Nl, Nl);
      } catch {
        ws = !1;
      }
    function Hc(e, t, a, o, l, s, v, y, _) {
      var T = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, T);
      } catch (N) {
        this.onError(N);
      }
    }
    var Bc = Hc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Pd = document.createElement("react");
      Bc = function(t, a, o, l, s, v, y, _, T) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var N = document.createEvent("Event"), I = !1, z = !0, G = window.event, X = Object.getOwnPropertyDescriptor(window, "event");
        function oe() {
          Pd.removeEventListener(ie, st, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = G);
        }
        var Pe = Array.prototype.slice.call(arguments, 3);
        function st() {
          I = !0, oe(), a.apply(o, Pe), z = !1;
        }
        var nt, It = !1, Lt = !1;
        function B(q) {
          if (nt = q.error, It = !0, nt === null && q.colno === 0 && q.lineno === 0 && (Lt = !0), q.defaultPrevented && nt != null && typeof nt == "object")
            try {
              nt._suppressLogging = !0;
            } catch {
            }
        }
        var ie = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", B), Pd.addEventListener(ie, st, !1), N.initEvent(ie, !1, !1), Pd.dispatchEvent(N), X && Object.defineProperty(window, "event", X), I && z && (It ? Lt && (nt = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : nt = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(nt)), window.removeEventListener("error", B), !I)
          return oe(), Hc.apply(this, arguments);
      };
    }
    var rh = Bc, Mu = !1, qc = null, Ou = !1, Oo = null, ah = {
      onError: function(e) {
        Mu = !0, qc = e;
      }
    };
    function Vi(e, t, a, o, l, s, v, y, _) {
      Mu = !1, qc = null, rh.apply(ah, arguments);
    }
    function Do(e, t, a, o, l, s, v, y, _) {
      if (Vi.apply(this, arguments), Mu) {
        var T = ks();
        Ou || (Ou = !0, Oo = T);
      }
    }
    function Rs() {
      if (Ou) {
        var e = Oo;
        throw Ou = !1, Oo = null, e;
      }
    }
    function li() {
      return Mu;
    }
    function ks() {
      if (Mu) {
        var e = qc;
        return Mu = !1, qc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Du(e) {
      return e._reactInternals;
    }
    function Yy(e) {
      return e._reactInternals !== void 0;
    }
    function Ml(e, t) {
      e._reactInternals = t;
    }
    var ot = (
      /*                      */
      0
    ), po = (
      /*                */
      1
    ), wn = (
      /*                    */
      2
    ), Ut = (
      /*                       */
      4
    ), Ia = (
      /*                */
      16
    ), Fa = (
      /*                 */
      32
    ), pn = (
      /*                     */
      64
    ), rt = (
      /*                   */
      128
    ), Or = (
      /*            */
      256
    ), Nn = (
      /*                          */
      512
    ), er = (
      /*                     */
      1024
    ), ra = (
      /*                      */
      2048
    ), aa = (
      /*                    */
      4096
    ), Hn = (
      /*                   */
      8192
    ), Lu = (
      /*             */
      16384
    ), oh = (
      /*               */
      32767
    ), Ts = (
      /*                   */
      32768
    ), lr = (
      /*                */
      65536
    ), Wc = (
      /* */
      131072
    ), Lo = (
      /*                       */
      1048576
    ), ju = (
      /*                    */
      2097152
    ), ui = (
      /*                 */
      4194304
    ), Yc = (
      /*                */
      8388608
    ), $i = (
      /*               */
      16777216
    ), jo = (
      /*              */
      33554432
    ), Hi = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ut | er | 0
    ), Bi = wn | Ut | Ia | Fa | Nn | aa | Hn, qi = Ut | pn | Nn | Hn, si = ra | Ia, Bn = ui | Yc | ju, Va = f.ReactCurrentOwner;
    function Ea(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var o = t;
        do
          t = o, (t.flags & (wn | aa)) !== ot && (a = t.return), o = t.return;
        while (o);
      }
      return t.tag === U ? a : null;
    }
    function Ao(e) {
      if (e.tag === ae) {
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
    function Uo(e) {
      return e.tag === U ? e.stateNode.containerInfo : null;
    }
    function Ol(e) {
      return Ea(e) === e;
    }
    function ih(e) {
      {
        var t = Va.current;
        if (t !== null && t.tag === k) {
          var a = t, o = a.stateNode;
          o._warnedAboutRefsInRender || h("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", gt(a) || "A component"), o._warnedAboutRefsInRender = !0;
        }
      }
      var l = Du(e);
      return l ? Ea(l) === l : !1;
    }
    function Gc(e) {
      if (Ea(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Qc(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ea(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var o = e, l = t; ; ) {
        var s = o.return;
        if (s === null)
          break;
        var v = s.alternate;
        if (v === null) {
          var y = s.return;
          if (y !== null) {
            o = l = y;
            continue;
          }
          break;
        }
        if (s.child === v.child) {
          for (var _ = s.child; _; ) {
            if (_ === o)
              return Gc(s), e;
            if (_ === l)
              return Gc(s), t;
            _ = _.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (o.return !== l.return)
          o = s, l = v;
        else {
          for (var T = !1, N = s.child; N; ) {
            if (N === o) {
              T = !0, o = s, l = v;
              break;
            }
            if (N === l) {
              T = !0, l = s, o = v;
              break;
            }
            N = N.sibling;
          }
          if (!T) {
            for (N = v.child; N; ) {
              if (N === o) {
                T = !0, o = v, l = s;
                break;
              }
              if (N === l) {
                T = !0, l = v, o = s;
                break;
              }
              N = N.sibling;
            }
            if (!T)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (o.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (o.tag !== U)
        throw new Error("Unable to find node on an unmounted component.");
      return o.stateNode.current === o ? e : t;
    }
    function oa(e) {
      var t = Qc(e);
      return t !== null ? ia(t) : null;
    }
    function ia(e) {
      if (e.tag === $ || e.tag === Z)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = ia(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function _n(e) {
      var t = Qc(e);
      return t !== null ? $a(t) : null;
    }
    function $a(e) {
      if (e.tag === $ || e.tag === Z)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== V) {
          var a = $a(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Id = p.unstable_scheduleCallback, lh = p.unstable_cancelCallback, Fd = p.unstable_shouldYield, Vd = p.unstable_requestPaint, tr = p.unstable_now, Kc = p.unstable_getCurrentPriorityLevel, Ns = p.unstable_ImmediatePriority, Wi = p.unstable_UserBlockingPriority, ci = p.unstable_NormalPriority, Gy = p.unstable_LowPriority, Dl = p.unstable_IdlePriority, Xc = p.unstable_yieldValue, uh = p.unstable_setDisableYieldValue, Ll = null, An = null, ze = null, xa = !1, la = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Au(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return h("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        $e && (e = wt({}, e, {
          getLaneLabelMap: jl,
          injectProfilingHooks: Ha
        })), Ll = t.inject(e), An = t;
      } catch (a) {
        h("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function $d(e, t) {
      if (An && typeof An.onScheduleFiberRoot == "function")
        try {
          An.onScheduleFiberRoot(Ll, e, t);
        } catch (a) {
          xa || (xa = !0, h("React instrumentation encountered an error: %s", a));
        }
    }
    function Hd(e, t) {
      if (An && typeof An.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & rt) === rt;
          if (He) {
            var o;
            switch (t) {
              case Vr:
                o = Ns;
                break;
              case Po:
                o = Wi;
                break;
              case Ba:
                o = ci;
                break;
              case qa:
                o = Dl;
                break;
              default:
                o = ci;
                break;
            }
            An.onCommitFiberRoot(Ll, e, o, a);
          }
        } catch (l) {
          xa || (xa = !0, h("React instrumentation encountered an error: %s", l));
        }
    }
    function Bd(e) {
      if (An && typeof An.onPostCommitFiberRoot == "function")
        try {
          An.onPostCommitFiberRoot(Ll, e);
        } catch (t) {
          xa || (xa = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function qd(e) {
      if (An && typeof An.onCommitFiberUnmount == "function")
        try {
          An.onCommitFiberUnmount(Ll, e);
        } catch (t) {
          xa || (xa = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function Rn(e) {
      if (typeof Xc == "function" && (uh(e), w(e)), An && typeof An.setStrictMode == "function")
        try {
          An.setStrictMode(Ll, e);
        } catch (t) {
          xa || (xa = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function Ha(e) {
      ze = e;
    }
    function jl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < zl; a++) {
          var o = dh(t);
          e.set(t, o), t *= 2;
        }
        return e;
      }
    }
    function Wd(e) {
      ze !== null && typeof ze.markCommitStarted == "function" && ze.markCommitStarted(e);
    }
    function Yd() {
      ze !== null && typeof ze.markCommitStopped == "function" && ze.markCommitStopped();
    }
    function ba(e) {
      ze !== null && typeof ze.markComponentRenderStarted == "function" && ze.markComponentRenderStarted(e);
    }
    function wa() {
      ze !== null && typeof ze.markComponentRenderStopped == "function" && ze.markComponentRenderStopped();
    }
    function Gd(e) {
      ze !== null && typeof ze.markComponentPassiveEffectMountStarted == "function" && ze.markComponentPassiveEffectMountStarted(e);
    }
    function sh() {
      ze !== null && typeof ze.markComponentPassiveEffectMountStopped == "function" && ze.markComponentPassiveEffectMountStopped();
    }
    function fi(e) {
      ze !== null && typeof ze.markComponentPassiveEffectUnmountStarted == "function" && ze.markComponentPassiveEffectUnmountStarted(e);
    }
    function Yi() {
      ze !== null && typeof ze.markComponentPassiveEffectUnmountStopped == "function" && ze.markComponentPassiveEffectUnmountStopped();
    }
    function Jc(e) {
      ze !== null && typeof ze.markComponentLayoutEffectMountStarted == "function" && ze.markComponentLayoutEffectMountStarted(e);
    }
    function ch() {
      ze !== null && typeof ze.markComponentLayoutEffectMountStopped == "function" && ze.markComponentLayoutEffectMountStopped();
    }
    function Ms(e) {
      ze !== null && typeof ze.markComponentLayoutEffectUnmountStarted == "function" && ze.markComponentLayoutEffectUnmountStarted(e);
    }
    function Qd() {
      ze !== null && typeof ze.markComponentLayoutEffectUnmountStopped == "function" && ze.markComponentLayoutEffectUnmountStopped();
    }
    function Os(e, t, a) {
      ze !== null && typeof ze.markComponentErrored == "function" && ze.markComponentErrored(e, t, a);
    }
    function zo(e, t, a) {
      ze !== null && typeof ze.markComponentSuspended == "function" && ze.markComponentSuspended(e, t, a);
    }
    function Ds(e) {
      ze !== null && typeof ze.markLayoutEffectsStarted == "function" && ze.markLayoutEffectsStarted(e);
    }
    function Ls() {
      ze !== null && typeof ze.markLayoutEffectsStopped == "function" && ze.markLayoutEffectsStopped();
    }
    function Al(e) {
      ze !== null && typeof ze.markPassiveEffectsStarted == "function" && ze.markPassiveEffectsStarted(e);
    }
    function Kd() {
      ze !== null && typeof ze.markPassiveEffectsStopped == "function" && ze.markPassiveEffectsStopped();
    }
    function Ul(e) {
      ze !== null && typeof ze.markRenderStarted == "function" && ze.markRenderStarted(e);
    }
    function fh() {
      ze !== null && typeof ze.markRenderYielded == "function" && ze.markRenderYielded();
    }
    function Zc() {
      ze !== null && typeof ze.markRenderStopped == "function" && ze.markRenderStopped();
    }
    function kn(e) {
      ze !== null && typeof ze.markRenderScheduled == "function" && ze.markRenderScheduled(e);
    }
    function ef(e, t) {
      ze !== null && typeof ze.markForceUpdateScheduled == "function" && ze.markForceUpdateScheduled(e, t);
    }
    function js(e, t) {
      ze !== null && typeof ze.markStateUpdateScheduled == "function" && ze.markStateUpdateScheduled(e, t);
    }
    var it = (
      /*                         */
      0
    ), Nt = (
      /*                 */
      1
    ), Bt = (
      /*                    */
      2
    ), an = (
      /*               */
      8
    ), qt = (
      /*              */
      16
    ), qn = Math.clz32 ? Math.clz32 : As, ur = Math.log, tf = Math.LN2;
    function As(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (ur(t) / tf | 0) | 0;
    }
    var zl = 31, ce = (
      /*                        */
      0
    ), $t = (
      /*                          */
      0
    ), vt = (
      /*                        */
      1
    ), Gi = (
      /*    */
      2
    ), vo = (
      /*             */
      4
    ), Dr = (
      /*            */
      8
    ), Un = (
      /*                     */
      16
    ), di = (
      /*                */
      32
    ), Qi = (
      /*                       */
      4194240
    ), Pl = (
      /*                        */
      64
    ), nf = (
      /*                        */
      128
    ), rf = (
      /*                        */
      256
    ), af = (
      /*                        */
      512
    ), of = (
      /*                        */
      1024
    ), lf = (
      /*                        */
      2048
    ), uf = (
      /*                        */
      4096
    ), sf = (
      /*                        */
      8192
    ), cf = (
      /*                        */
      16384
    ), Il = (
      /*                       */
      32768
    ), ff = (
      /*                       */
      65536
    ), Uu = (
      /*                       */
      131072
    ), zu = (
      /*                       */
      262144
    ), df = (
      /*                       */
      524288
    ), Us = (
      /*                       */
      1048576
    ), pf = (
      /*                       */
      2097152
    ), zs = (
      /*                            */
      130023424
    ), Fl = (
      /*                             */
      4194304
    ), vf = (
      /*                             */
      8388608
    ), Ps = (
      /*                             */
      16777216
    ), hf = (
      /*                             */
      33554432
    ), mf = (
      /*                             */
      67108864
    ), Xd = Fl, Is = (
      /*          */
      134217728
    ), Jd = (
      /*                          */
      268435455
    ), Fs = (
      /*               */
      268435456
    ), Vl = (
      /*                        */
      536870912
    ), ua = (
      /*                   */
      1073741824
    );
    function dh(e) {
      {
        if (e & vt)
          return "Sync";
        if (e & Gi)
          return "InputContinuousHydration";
        if (e & vo)
          return "InputContinuous";
        if (e & Dr)
          return "DefaultHydration";
        if (e & Un)
          return "Default";
        if (e & di)
          return "TransitionHydration";
        if (e & Qi)
          return "Transition";
        if (e & zs)
          return "Retry";
        if (e & Is)
          return "SelectiveHydration";
        if (e & Fs)
          return "IdleHydration";
        if (e & Vl)
          return "Idle";
        if (e & ua)
          return "Offscreen";
      }
    }
    var un = -1, $l = Pl, yf = Fl;
    function Vs(e) {
      switch (Ki(e)) {
        case vt:
          return vt;
        case Gi:
          return Gi;
        case vo:
          return vo;
        case Dr:
          return Dr;
        case Un:
          return Un;
        case di:
          return di;
        case Pl:
        case nf:
        case rf:
        case af:
        case of:
        case lf:
        case uf:
        case sf:
        case cf:
        case Il:
        case ff:
        case Uu:
        case zu:
        case df:
        case Us:
        case pf:
          return e & Qi;
        case Fl:
        case vf:
        case Ps:
        case hf:
        case mf:
          return e & zs;
        case Is:
          return Is;
        case Fs:
          return Fs;
        case Vl:
          return Vl;
        case ua:
          return ua;
        default:
          return h("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function gf(e, t) {
      var a = e.pendingLanes;
      if (a === ce)
        return ce;
      var o = ce, l = e.suspendedLanes, s = e.pingedLanes, v = a & Jd;
      if (v !== ce) {
        var y = v & ~l;
        if (y !== ce)
          o = Vs(y);
        else {
          var _ = v & s;
          _ !== ce && (o = Vs(_));
        }
      } else {
        var T = a & ~l;
        T !== ce ? o = Vs(T) : s !== ce && (o = Vs(s));
      }
      if (o === ce)
        return ce;
      if (t !== ce && t !== o && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === ce) {
        var N = Ki(o), I = Ki(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          N >= I || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          N === Un && (I & Qi) !== ce
        )
          return t;
      }
      (o & vo) !== ce && (o |= a & Un);
      var z = e.entangledLanes;
      if (z !== ce)
        for (var G = e.entanglements, X = o & z; X > 0; ) {
          var oe = Wn(X), Pe = 1 << oe;
          o |= G[oe], X &= ~Pe;
        }
      return o;
    }
    function ho(e, t) {
      for (var a = e.eventTimes, o = un; t > 0; ) {
        var l = Wn(t), s = 1 << l, v = a[l];
        v > o && (o = v), t &= ~s;
      }
      return o;
    }
    function Zd(e, t) {
      switch (e) {
        case vt:
        case Gi:
        case vo:
          return t + 250;
        case Dr:
        case Un:
        case di:
        case Pl:
        case nf:
        case rf:
        case af:
        case of:
        case lf:
        case uf:
        case sf:
        case cf:
        case Il:
        case ff:
        case Uu:
        case zu:
        case df:
        case Us:
        case pf:
          return t + 5e3;
        case Fl:
        case vf:
        case Ps:
        case hf:
        case mf:
          return un;
        case Is:
        case Fs:
        case Vl:
        case ua:
          return un;
        default:
          return h("Should have found matching lanes. This is a bug in React."), un;
      }
    }
    function _f(e, t) {
      for (var a = e.pendingLanes, o = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, v = a; v > 0; ) {
        var y = Wn(v), _ = 1 << y, T = s[y];
        T === un ? ((_ & o) === ce || (_ & l) !== ce) && (s[y] = Zd(_, t)) : T <= t && (e.expiredLanes |= _), v &= ~_;
      }
    }
    function ph(e) {
      return Vs(e.pendingLanes);
    }
    function Sf(e) {
      var t = e.pendingLanes & ~ua;
      return t !== ce ? t : t & ua ? ua : ce;
    }
    function vh(e) {
      return (e & vt) !== ce;
    }
    function $s(e) {
      return (e & Jd) !== ce;
    }
    function Hl(e) {
      return (e & zs) === e;
    }
    function ep(e) {
      var t = vt | vo | Un;
      return (e & t) === ce;
    }
    function tp(e) {
      return (e & Qi) === e;
    }
    function Cf(e, t) {
      var a = Gi | vo | Dr | Un;
      return (t & a) !== ce;
    }
    function hh(e, t) {
      return (t & e.expiredLanes) !== ce;
    }
    function np(e) {
      return (e & Qi) !== ce;
    }
    function rp() {
      var e = $l;
      return $l <<= 1, ($l & Qi) === ce && ($l = Pl), e;
    }
    function mh() {
      var e = yf;
      return yf <<= 1, (yf & zs) === ce && (yf = Fl), e;
    }
    function Ki(e) {
      return e & -e;
    }
    function Hs(e) {
      return Ki(e);
    }
    function Wn(e) {
      return 31 - qn(e);
    }
    function yr(e) {
      return Wn(e);
    }
    function sa(e, t) {
      return (e & t) !== ce;
    }
    function Bl(e, t) {
      return (e & t) === t;
    }
    function bt(e, t) {
      return e | t;
    }
    function Bs(e, t) {
      return e & ~t;
    }
    function ap(e, t) {
      return e & t;
    }
    function yh(e) {
      return e;
    }
    function gh(e, t) {
      return e !== $t && e < t ? e : t;
    }
    function qs(e) {
      for (var t = [], a = 0; a < zl; a++)
        t.push(e);
      return t;
    }
    function Pu(e, t, a) {
      e.pendingLanes |= t, t !== Vl && (e.suspendedLanes = ce, e.pingedLanes = ce);
      var o = e.eventTimes, l = yr(t);
      o[l] = a;
    }
    function _h(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, o = t; o > 0; ) {
        var l = Wn(o), s = 1 << l;
        a[l] = un, o &= ~s;
      }
    }
    function Ef(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function op(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ce, e.pingedLanes = ce, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var o = e.entanglements, l = e.eventTimes, s = e.expirationTimes, v = a; v > 0; ) {
        var y = Wn(v), _ = 1 << y;
        o[y] = ce, l[y] = un, s[y] = un, v &= ~_;
      }
    }
    function xf(e, t) {
      for (var a = e.entangledLanes |= t, o = e.entanglements, l = a; l; ) {
        var s = Wn(l), v = 1 << s;
        // Is this one of the newly entangled lanes?
        v & t | // Is this lane transitively entangled with the newly entangled lanes?
        o[s] & t && (o[s] |= t), l &= ~v;
      }
    }
    function ip(e, t) {
      var a = Ki(t), o;
      switch (a) {
        case vo:
          o = Gi;
          break;
        case Un:
          o = Dr;
          break;
        case Pl:
        case nf:
        case rf:
        case af:
        case of:
        case lf:
        case uf:
        case sf:
        case cf:
        case Il:
        case ff:
        case Uu:
        case zu:
        case df:
        case Us:
        case pf:
        case Fl:
        case vf:
        case Ps:
        case hf:
        case mf:
          o = di;
          break;
        case Vl:
          o = Fs;
          break;
        default:
          o = $t;
          break;
      }
      return (o & (e.suspendedLanes | t)) !== $t ? $t : o;
    }
    function Ws(e, t, a) {
      if (la)
        for (var o = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = yr(a), s = 1 << l, v = o[l];
          v.add(t), a &= ~s;
        }
    }
    function Sh(e, t) {
      if (la)
        for (var a = e.pendingUpdatersLaneMap, o = e.memoizedUpdaters; t > 0; ) {
          var l = yr(t), s = 1 << l, v = a[l];
          v.size > 0 && (v.forEach(function(y) {
            var _ = y.alternate;
            (_ === null || !o.has(_)) && o.add(y);
          }), v.clear()), t &= ~s;
        }
    }
    function lp(e, t) {
      return null;
    }
    var Vr = vt, Po = vo, Ba = Un, qa = Vl, Ys = $t;
    function Wa() {
      return Ys;
    }
    function Yn(e) {
      Ys = e;
    }
    function Ch(e, t) {
      var a = Ys;
      try {
        return Ys = e, t();
      } finally {
        Ys = a;
      }
    }
    function Eh(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Gs(e, t) {
      return e > t ? e : t;
    }
    function sr(e, t) {
      return e !== 0 && e < t;
    }
    function xh(e) {
      var t = Ki(e);
      return sr(Vr, t) ? sr(Po, t) ? $s(t) ? Ba : qa : Po : Vr;
    }
    function bf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Qs;
    function Lr(e) {
      Qs = e;
    }
    function Qy(e) {
      Qs(e);
    }
    var Ge;
    function Iu(e) {
      Ge = e;
    }
    var wf;
    function bh(e) {
      wf = e;
    }
    var wh;
    function Ks(e) {
      wh = e;
    }
    var Xs;
    function up(e) {
      Xs = e;
    }
    var Rf = !1, Js = [], pi = null, Io = null, Fo = null, zn = /* @__PURE__ */ new Map(), $r = /* @__PURE__ */ new Map(), Hr = [], Rh = [
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
    function kh(e) {
      return Rh.indexOf(e) > -1;
    }
    function mo(e, t, a, o, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: l,
        targetContainers: [o]
      };
    }
    function sp(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          pi = null;
          break;
        case "dragenter":
        case "dragleave":
          Io = null;
          break;
        case "mouseover":
        case "mouseout":
          Fo = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          zn.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var o = t.pointerId;
          $r.delete(o);
          break;
        }
      }
    }
    function ca(e, t, a, o, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var v = mo(t, a, o, l, s);
        if (t !== null) {
          var y = Gu(t);
          y !== null && Ge(y);
        }
        return v;
      }
      e.eventSystemFlags |= o;
      var _ = e.targetContainers;
      return l !== null && _.indexOf(l) === -1 && _.push(l), e;
    }
    function Ky(e, t, a, o, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return pi = ca(pi, e, t, a, o, s), !0;
        }
        case "dragenter": {
          var v = l;
          return Io = ca(Io, e, t, a, o, v), !0;
        }
        case "mouseover": {
          var y = l;
          return Fo = ca(Fo, e, t, a, o, y), !0;
        }
        case "pointerover": {
          var _ = l, T = _.pointerId;
          return zn.set(T, ca(zn.get(T) || null, e, t, a, o, _)), !0;
        }
        case "gotpointercapture": {
          var N = l, I = N.pointerId;
          return $r.set(I, ca($r.get(I) || null, e, t, a, o, N)), !0;
        }
      }
      return !1;
    }
    function cp(e) {
      var t = cc(e.target);
      if (t !== null) {
        var a = Ea(t);
        if (a !== null) {
          var o = a.tag;
          if (o === ae) {
            var l = Ao(a);
            if (l !== null) {
              e.blockedOn = l, Xs(e.priority, function() {
                wf(a);
              });
              return;
            }
          } else if (o === U) {
            var s = a.stateNode;
            if (bf(s)) {
              e.blockedOn = Uo(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Th(e) {
      for (var t = wh(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, o = 0; o < Hr.length && sr(t, Hr[o].priority); o++)
        ;
      Hr.splice(o, 0, a), o === 0 && cp(a);
    }
    function Zs(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], o = Vu(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (o === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          By(s), l.target.dispatchEvent(s), qy();
        } else {
          var v = Gu(o);
          return v !== null && Ge(v), e.blockedOn = o, !1;
        }
        t.shift();
      }
      return !0;
    }
    function fp(e, t, a) {
      Zs(e) && a.delete(t);
    }
    function Xy() {
      Rf = !1, pi !== null && Zs(pi) && (pi = null), Io !== null && Zs(Io) && (Io = null), Fo !== null && Zs(Fo) && (Fo = null), zn.forEach(fp), $r.forEach(fp);
    }
    function Xi(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Rf || (Rf = !0, p.unstable_scheduleCallback(p.unstable_NormalPriority, Xy)));
    }
    function ql(e) {
      if (Js.length > 0) {
        Xi(Js[0], e);
        for (var t = 1; t < Js.length; t++) {
          var a = Js[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      pi !== null && Xi(pi, e), Io !== null && Xi(Io, e), Fo !== null && Xi(Fo, e);
      var o = function(y) {
        return Xi(y, e);
      };
      zn.forEach(o), $r.forEach(o);
      for (var l = 0; l < Hr.length; l++) {
        var s = Hr[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Hr.length > 0; ) {
        var v = Hr[0];
        if (v.blockedOn !== null)
          break;
        cp(v), v.blockedOn === null && Hr.shift();
      }
    }
    var gr = f.ReactCurrentBatchConfig, zt = !0;
    function nr(e) {
      zt = !!e;
    }
    function Gn() {
      return zt;
    }
    function _r(e, t, a) {
      var o = kf(t), l;
      switch (o) {
        case Vr:
          l = Ra;
          break;
        case Po:
          l = Fu;
          break;
        case Ba:
        default:
          l = Pn;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function Ra(e, t, a, o) {
      var l = Wa(), s = gr.transition;
      gr.transition = null;
      try {
        Yn(Vr), Pn(e, t, a, o);
      } finally {
        Yn(l), gr.transition = s;
      }
    }
    function Fu(e, t, a, o) {
      var l = Wa(), s = gr.transition;
      gr.transition = null;
      try {
        Yn(Po), Pn(e, t, a, o);
      } finally {
        Yn(l), gr.transition = s;
      }
    }
    function Pn(e, t, a, o) {
      zt && ec(e, t, a, o);
    }
    function ec(e, t, a, o) {
      var l = Vu(e, t, a, o);
      if (l === null) {
        vg(e, t, o, Vo, a), sp(e, o);
        return;
      }
      if (Ky(l, e, t, a, o)) {
        o.stopPropagation();
        return;
      }
      if (sp(e, o), t & Pa && kh(e)) {
        for (; l !== null; ) {
          var s = Gu(l);
          s !== null && Qy(s);
          var v = Vu(e, t, a, o);
          if (v === null && vg(e, t, o, Vo, a), v === l)
            break;
          l = v;
        }
        l !== null && o.stopPropagation();
        return;
      }
      vg(e, t, o, null, a);
    }
    var Vo = null;
    function Vu(e, t, a, o) {
      Vo = null;
      var l = zd(o), s = cc(l);
      if (s !== null) {
        var v = Ea(s);
        if (v === null)
          s = null;
        else {
          var y = v.tag;
          if (y === ae) {
            var _ = Ao(v);
            if (_ !== null)
              return _;
            s = null;
          } else if (y === U) {
            var T = v.stateNode;
            if (bf(T))
              return Uo(v);
            s = null;
          } else v !== s && (s = null);
        }
      }
      return Vo = s, null;
    }
    function kf(e) {
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
          return Vr;
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
          return Po;
        case "message": {
          var t = Kc();
          switch (t) {
            case Ns:
              return Vr;
            case Wi:
              return Po;
            case ci:
            case Gy:
              return Ba;
            case Dl:
              return qa;
            default:
              return Ba;
          }
        }
        default:
          return Ba;
      }
    }
    function tc(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function fa(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function dp(e, t, a, o) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }), a;
    }
    function $u(e, t, a, o) {
      return e.addEventListener(t, a, {
        passive: o
      }), a;
    }
    var ka = null, Hu = null, Wl = null;
    function Ji(e) {
      return ka = e, Hu = nc(), !0;
    }
    function Tf() {
      ka = null, Hu = null, Wl = null;
    }
    function vi() {
      if (Wl)
        return Wl;
      var e, t = Hu, a = t.length, o, l = nc(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var v = a - e;
      for (o = 1; o <= v && t[a - o] === l[s - o]; o++)
        ;
      var y = o > 1 ? 1 - o : void 0;
      return Wl = l.slice(e, y), Wl;
    }
    function nc() {
      return "value" in ka ? ka.value : ka.textContent;
    }
    function Zi(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Bu() {
      return !0;
    }
    function rc() {
      return !1;
    }
    function jr(e) {
      function t(a, o, l, s, v) {
        this._reactName = a, this._targetInst = l, this.type = o, this.nativeEvent = s, this.target = v, this.currentTarget = null;
        for (var y in e)
          if (e.hasOwnProperty(y)) {
            var _ = e[y];
            _ ? this[y] = _(s) : this[y] = s[y];
          }
        var T = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return T ? this.isDefaultPrevented = Bu : this.isDefaultPrevented = rc, this.isPropagationStopped = rc, this;
      }
      return wt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Bu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Bu);
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
        isPersistent: Bu
      }), t;
    }
    var Qn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, $o = jr(Qn), Br = wt({}, Qn, {
      view: 0,
      detail: 0
    }), da = jr(Br), Nf, ac, Yl;
    function Jy(e) {
      e !== Yl && (Yl && e.type === "mousemove" ? (Nf = e.screenX - Yl.screenX, ac = e.screenY - Yl.screenY) : (Nf = 0, ac = 0), Yl = e);
    }
    var yo = wt({}, Br, {
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
      getModifierState: Sn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Jy(e), Nf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : ac;
      }
    }), pp = jr(yo), vp = wt({}, yo, {
      dataTransfer: 0
    }), Gl = jr(vp), hp = wt({}, Br, {
      relatedTarget: 0
    }), hi = jr(hp), Nh = wt({}, Qn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Mh = jr(Nh), mp = wt({}, Qn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Mf = jr(mp), Zy = wt({}, Qn, {
      data: 0
    }), Oh = jr(Zy), Dh = Oh, Lh = {
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
    }, Ql = {
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
    function eg(e) {
      if (e.key) {
        var t = Lh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Zi(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Ql[e.keyCode] || "Unidentified" : "";
    }
    var qu = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function jh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var o = qu[e];
      return o ? !!a[o] : !1;
    }
    function Sn(e) {
      return jh;
    }
    var tg = wt({}, Br, {
      key: eg,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Sn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Zi(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Zi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Ah = jr(tg), ng = wt({}, yo, {
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
    }), Uh = jr(ng), zh = wt({}, Br, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Sn
    }), Ph = jr(zh), rg = wt({}, Qn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ya = jr(rg), yp = wt({}, yo, {
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
    }), ag = jr(yp), el = [9, 13, 27, 32], oc = 229, mi = vn && "CompositionEvent" in window, tl = null;
    vn && "documentMode" in document && (tl = document.documentMode);
    var gp = vn && "TextEvent" in window && !tl, Of = vn && (!mi || tl && tl > 8 && tl <= 11), Ih = 32, Df = String.fromCharCode(Ih);
    function og() {
      pt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), pt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), pt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), pt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var _p = !1;
    function Fh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Lf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function jf(e, t) {
      return e === "keydown" && t.keyCode === oc;
    }
    function Sp(e, t) {
      switch (e) {
        case "keyup":
          return el.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== oc;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Af(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Vh(e) {
      return e.locale === "ko";
    }
    var Kl = !1;
    function Cp(e, t, a, o, l) {
      var s, v;
      if (mi ? s = Lf(t) : Kl ? Sp(t, o) && (s = "onCompositionEnd") : jf(t, o) && (s = "onCompositionStart"), !s)
        return null;
      Of && !Vh(o) && (!Kl && s === "onCompositionStart" ? Kl = Ji(l) : s === "onCompositionEnd" && Kl && (v = vi()));
      var y = Gh(a, s);
      if (y.length > 0) {
        var _ = new Oh(s, t, null, o, l);
        if (e.push({
          event: _,
          listeners: y
        }), v)
          _.data = v;
        else {
          var T = Af(o);
          T !== null && (_.data = T);
        }
      }
    }
    function Uf(e, t) {
      switch (e) {
        case "compositionend":
          return Af(t);
        case "keypress":
          var a = t.which;
          return a !== Ih ? null : (_p = !0, Df);
        case "textInput":
          var o = t.data;
          return o === Df && _p ? null : o;
        default:
          return null;
      }
    }
    function Ep(e, t) {
      if (Kl) {
        if (e === "compositionend" || !mi && Sp(e, t)) {
          var a = vi();
          return Tf(), Kl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Fh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Of && !Vh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function zf(e, t, a, o, l) {
      var s;
      if (gp ? s = Uf(t, o) : s = Ep(t, o), !s)
        return null;
      var v = Gh(a, "onBeforeInput");
      if (v.length > 0) {
        var y = new Dh("onBeforeInput", "beforeinput", null, o, l);
        e.push({
          event: y,
          listeners: v
        }), y.data = s;
      }
    }
    function $h(e, t, a, o, l, s, v) {
      Cp(e, t, a, o, l), zf(e, t, a, o, l);
    }
    var ig = {
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
    function ic(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!ig[e.type] : t === "textarea";
    }
    function lg(e) {
      if (!vn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var o = document.createElement("div");
        o.setAttribute(t, "return;"), a = typeof o[t] == "function";
      }
      return a;
    }
    function lc() {
      pt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Hh(e, t, a, o) {
      Tu(o);
      var l = Gh(t, "onChange");
      if (l.length > 0) {
        var s = new $o("onChange", "change", null, a, o);
        e.push({
          event: s,
          listeners: l
        });
      }
    }
    var nl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function i(e) {
      var t = [];
      Hh(t, n, e, zd(e)), th(u, t);
    }
    function u(e) {
      T_(e, 0);
    }
    function d(e) {
      var t = Hf(e);
      if (No(t))
        return e;
    }
    function m(e, t) {
      if (e === "change")
        return t;
    }
    var E = !1;
    vn && (E = lg("input") && (!document.documentMode || document.documentMode > 9));
    function O(e, t) {
      nl = e, n = t, nl.attachEvent("onpropertychange", K);
    }
    function A() {
      nl && (nl.detachEvent("onpropertychange", K), nl = null, n = null);
    }
    function K(e) {
      e.propertyName === "value" && d(n) && i(e);
    }
    function ve(e, t, a) {
      e === "focusin" ? (A(), O(t, a)) : e === "focusout" && A();
    }
    function ge(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return d(n);
    }
    function de(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Be(e, t) {
      if (e === "click")
        return d(t);
    }
    function Ke(e, t) {
      if (e === "input" || e === "change")
        return d(t);
    }
    function et(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ut(e, "number", e.value);
    }
    function In(e, t, a, o, l, s, v) {
      var y = a ? Hf(a) : window, _, T;
      if (r(y) ? _ = m : ic(y) ? E ? _ = Ke : (_ = ge, T = ve) : de(y) && (_ = Be), _) {
        var N = _(t, a);
        if (N) {
          Hh(e, N, o, l);
          return;
        }
      }
      T && T(t, y, a), t === "focusout" && et(y);
    }
    function H() {
      Qt("onMouseEnter", ["mouseout", "mouseover"]), Qt("onMouseLeave", ["mouseout", "mouseover"]), Qt("onPointerEnter", ["pointerout", "pointerover"]), Qt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function P(e, t, a, o, l, s, v) {
      var y = t === "mouseover" || t === "pointerover", _ = t === "mouseout" || t === "pointerout";
      if (y && !xs(o)) {
        var T = o.relatedTarget || o.fromElement;
        if (T && (cc(T) || Up(T)))
          return;
      }
      if (!(!_ && !y)) {
        var N;
        if (l.window === l)
          N = l;
        else {
          var I = l.ownerDocument;
          I ? N = I.defaultView || I.parentWindow : N = window;
        }
        var z, G;
        if (_) {
          var X = o.relatedTarget || o.toElement;
          if (z = a, G = X ? cc(X) : null, G !== null) {
            var oe = Ea(G);
            (G !== oe || G.tag !== $ && G.tag !== Z) && (G = null);
          }
        } else
          z = null, G = a;
        if (z !== G) {
          var Pe = pp, st = "onMouseLeave", nt = "onMouseEnter", It = "mouse";
          (t === "pointerout" || t === "pointerover") && (Pe = Uh, st = "onPointerLeave", nt = "onPointerEnter", It = "pointer");
          var Lt = z == null ? N : Hf(z), B = G == null ? N : Hf(G), ie = new Pe(st, It + "leave", z, o, l);
          ie.target = Lt, ie.relatedTarget = B;
          var q = null, _e = cc(l);
          if (_e === a) {
            var We = new Pe(nt, It + "enter", G, o, l);
            We.target = B, We.relatedTarget = Lt, q = We;
          }
          wx(e, ie, q, z, G);
        }
      }
    }
    function W(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var he = typeof Object.is == "function" ? Object.is : W;
    function Xe(e, t) {
      if (he(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), o = Object.keys(t);
      if (a.length !== o.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!dr.call(t, s) || !he(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function ct(e) {
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
      for (var a = ct(e), o = 0, l = 0; a; ) {
        if (a.nodeType === oi) {
          if (l = o + a.textContent.length, o <= t && l >= t)
            return {
              node: a,
              offset: t - o
            };
          o = l;
        }
        a = ct(dt(a));
      }
    }
    function cr(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, o = a.getSelection && a.getSelection();
      if (!o || o.rangeCount === 0)
        return null;
      var l = o.anchorNode, s = o.anchorOffset, v = o.focusNode, y = o.focusOffset;
      try {
        l.nodeType, v.nodeType;
      } catch {
        return null;
      }
      return Wt(e, l, s, v, y);
    }
    function Wt(e, t, a, o, l) {
      var s = 0, v = -1, y = -1, _ = 0, T = 0, N = e, I = null;
      e: for (; ; ) {
        for (var z = null; N === t && (a === 0 || N.nodeType === oi) && (v = s + a), N === o && (l === 0 || N.nodeType === oi) && (y = s + l), N.nodeType === oi && (s += N.nodeValue.length), (z = N.firstChild) !== null; )
          I = N, N = z;
        for (; ; ) {
          if (N === e)
            break e;
          if (I === t && ++_ === a && (v = s), I === o && ++T === l && (y = s), (z = N.nextSibling) !== null)
            break;
          N = I, I = N.parentNode;
        }
        N = z;
      }
      return v === -1 || y === -1 ? null : {
        start: v,
        end: y
      };
    }
    function rl(e, t) {
      var a = e.ownerDocument || document, o = a && a.defaultView || window;
      if (o.getSelection) {
        var l = o.getSelection(), s = e.textContent.length, v = Math.min(t.start, s), y = t.end === void 0 ? v : Math.min(t.end, s);
        if (!l.extend && v > y) {
          var _ = y;
          y = v, v = _;
        }
        var T = yt(e, v), N = yt(e, y);
        if (T && N) {
          if (l.rangeCount === 1 && l.anchorNode === T.node && l.anchorOffset === T.offset && l.focusNode === N.node && l.focusOffset === N.offset)
            return;
          var I = a.createRange();
          I.setStart(T.node, T.offset), l.removeAllRanges(), v > y ? (l.addRange(I), l.extend(N.node, N.offset)) : (I.setEnd(N.node, N.offset), l.addRange(I));
        }
      }
    }
    function Bh(e) {
      return e && e.nodeType === oi;
    }
    function y_(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Bh(e) ? !1 : Bh(t) ? y_(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function lx(e) {
      return e && e.ownerDocument && y_(e.ownerDocument.documentElement, e);
    }
    function ux(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function g_() {
      for (var e = window, t = za(); t instanceof e.HTMLIFrameElement; ) {
        if (ux(t))
          e = t.contentWindow;
        else
          return t;
        t = za(e.document);
      }
      return t;
    }
    function ug(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function sx() {
      var e = g_();
      return {
        focusedElem: e,
        selectionRange: ug(e) ? fx(e) : null
      };
    }
    function cx(e) {
      var t = g_(), a = e.focusedElem, o = e.selectionRange;
      if (t !== a && lx(a)) {
        o !== null && ug(a) && dx(a, o);
        for (var l = [], s = a; s = s.parentNode; )
          s.nodeType === na && l.push({
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
    function fx(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = cr(e), t || {
        start: 0,
        end: 0
      };
    }
    function dx(e, t) {
      var a = t.start, o = t.end;
      o === void 0 && (o = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(o, e.value.length)) : rl(e, t);
    }
    var px = vn && "documentMode" in document && document.documentMode <= 11;
    function vx() {
      pt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Pf = null, sg = null, xp = null, cg = !1;
    function hx(e) {
      if ("selectionStart" in e && ug(e))
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
    function mx(e) {
      return e.window === e ? e.document : e.nodeType === ii ? e : e.ownerDocument;
    }
    function __(e, t, a) {
      var o = mx(a);
      if (!(cg || Pf == null || Pf !== za(o))) {
        var l = hx(Pf);
        if (!xp || !Xe(xp, l)) {
          xp = l;
          var s = Gh(sg, "onSelect");
          if (s.length > 0) {
            var v = new $o("onSelect", "select", null, t, a);
            e.push({
              event: v,
              listeners: s
            }), v.target = Pf;
          }
        }
      }
    }
    function yx(e, t, a, o, l, s, v) {
      var y = a ? Hf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (ic(y) || y.contentEditable === "true") && (Pf = y, sg = a, xp = null);
          break;
        case "focusout":
          Pf = null, sg = null, xp = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          cg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          cg = !1, __(e, o, l);
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
          if (px)
            break;
        // falls through
        case "keydown":
        case "keyup":
          __(e, o, l);
      }
    }
    function qh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var If = {
      animationend: qh("Animation", "AnimationEnd"),
      animationiteration: qh("Animation", "AnimationIteration"),
      animationstart: qh("Animation", "AnimationStart"),
      transitionend: qh("Transition", "TransitionEnd")
    }, fg = {}, S_ = {};
    vn && (S_ = document.createElement("div").style, "AnimationEvent" in window || (delete If.animationend.animation, delete If.animationiteration.animation, delete If.animationstart.animation), "TransitionEvent" in window || delete If.transitionend.transition);
    function Wh(e) {
      if (fg[e])
        return fg[e];
      if (!If[e])
        return e;
      var t = If[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in S_)
          return fg[e] = t[a];
      return e;
    }
    var C_ = Wh("animationend"), E_ = Wh("animationiteration"), x_ = Wh("animationstart"), b_ = Wh("transitionend"), w_ = /* @__PURE__ */ new Map(), R_ = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Wu(e, t) {
      w_.set(e, t), pt(t, [e]);
    }
    function gx() {
      for (var e = 0; e < R_.length; e++) {
        var t = R_[e], a = t.toLowerCase(), o = t[0].toUpperCase() + t.slice(1);
        Wu(a, "on" + o);
      }
      Wu(C_, "onAnimationEnd"), Wu(E_, "onAnimationIteration"), Wu(x_, "onAnimationStart"), Wu("dblclick", "onDoubleClick"), Wu("focusin", "onFocus"), Wu("focusout", "onBlur"), Wu(b_, "onTransitionEnd");
    }
    function _x(e, t, a, o, l, s, v) {
      var y = w_.get(t);
      if (y !== void 0) {
        var _ = $o, T = t;
        switch (t) {
          case "keypress":
            if (Zi(o) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            _ = Ah;
            break;
          case "focusin":
            T = "focus", _ = hi;
            break;
          case "focusout":
            T = "blur", _ = hi;
            break;
          case "beforeblur":
          case "afterblur":
            _ = hi;
            break;
          case "click":
            if (o.button === 2)
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
            _ = pp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            _ = Gl;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            _ = Ph;
            break;
          case C_:
          case E_:
          case x_:
            _ = Mh;
            break;
          case b_:
            _ = Ya;
            break;
          case "scroll":
            _ = da;
            break;
          case "wheel":
            _ = ag;
            break;
          case "copy":
          case "cut":
          case "paste":
            _ = Mf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            _ = Uh;
            break;
        }
        var N = (s & Pa) !== 0;
        {
          var I = !N && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", z = xx(a, y, o.type, N, I);
          if (z.length > 0) {
            var G = new _(y, T, null, o, l);
            e.push({
              event: G,
              listeners: z
            });
          }
        }
      }
    }
    gx(), H(), lc(), vx(), og();
    function Sx(e, t, a, o, l, s, v) {
      _x(e, t, a, o, l, s);
      var y = (s & Ud) === 0;
      y && (P(e, t, a, o, l), In(e, t, a, o, l), yx(e, t, a, o, l), $h(e, t, a, o, l));
    }
    var bp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], dg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(bp));
    function k_(e, t, a) {
      var o = e.type || "unknown-event";
      e.currentTarget = a, Do(o, t, void 0, e), e.currentTarget = null;
    }
    function Cx(e, t, a) {
      var o;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], v = s.instance, y = s.currentTarget, _ = s.listener;
          if (v !== o && e.isPropagationStopped())
            return;
          k_(e, _, y), o = v;
        }
      else
        for (var T = 0; T < t.length; T++) {
          var N = t[T], I = N.instance, z = N.currentTarget, G = N.listener;
          if (I !== o && e.isPropagationStopped())
            return;
          k_(e, G, z), o = I;
        }
    }
    function T_(e, t) {
      for (var a = (t & Pa) !== 0, o = 0; o < e.length; o++) {
        var l = e[o], s = l.event, v = l.listeners;
        Cx(s, v, a);
      }
      Rs();
    }
    function Ex(e, t, a, o, l) {
      var s = zd(a), v = [];
      Sx(v, e, o, a, s, t), T_(v, t);
    }
    function Tn(e, t) {
      dg.has(e) || h('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, o = Jb(t), l = Rx(e);
      o.has(l) || (N_(t, e, zc, a), o.add(l));
    }
    function pg(e, t, a) {
      dg.has(e) && !t && h('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var o = 0;
      t && (o |= Pa), N_(a, e, o, t);
    }
    var Yh = "_reactListening" + Math.random().toString(36).slice(2);
    function wp(e) {
      if (!e[Yh]) {
        e[Yh] = !0, at.forEach(function(a) {
          a !== "selectionchange" && (dg.has(a) || pg(a, !1, e), pg(a, !0, e));
        });
        var t = e.nodeType === ii ? e : e.ownerDocument;
        t !== null && (t[Yh] || (t[Yh] = !0, pg("selectionchange", !1, t)));
      }
    }
    function N_(e, t, a, o, l) {
      var s = _r(e, t, a), v = void 0;
      ws && (t === "touchstart" || t === "touchmove" || t === "wheel") && (v = !0), e = e, o ? v !== void 0 ? dp(e, t, s, v) : fa(e, t, s) : v !== void 0 ? $u(e, t, s, v) : tc(e, t, s);
    }
    function M_(e, t) {
      return e === t || e.nodeType === $n && e.parentNode === t;
    }
    function vg(e, t, a, o, l) {
      var s = o;
      if ((t & Ad) === 0 && (t & zc) === 0) {
        var v = l;
        if (o !== null) {
          var y = o;
          e: for (; ; ) {
            if (y === null)
              return;
            var _ = y.tag;
            if (_ === U || _ === V) {
              var T = y.stateNode.containerInfo;
              if (M_(T, v))
                break;
              if (_ === V)
                for (var N = y.return; N !== null; ) {
                  var I = N.tag;
                  if (I === U || I === V) {
                    var z = N.stateNode.containerInfo;
                    if (M_(z, v))
                      return;
                  }
                  N = N.return;
                }
              for (; T !== null; ) {
                var G = cc(T);
                if (G === null)
                  return;
                var X = G.tag;
                if (X === $ || X === Z) {
                  y = s = G;
                  continue e;
                }
                T = T.parentNode;
              }
            }
            y = y.return;
          }
        }
      }
      th(function() {
        return Ex(e, t, a, s);
      });
    }
    function Rp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function xx(e, t, a, o, l, s) {
      for (var v = t !== null ? t + "Capture" : null, y = o ? v : t, _ = [], T = e, N = null; T !== null; ) {
        var I = T, z = I.stateNode, G = I.tag;
        if (G === $ && z !== null && (N = z, y !== null)) {
          var X = Fi(T, y);
          X != null && _.push(Rp(T, X, N));
        }
        if (l)
          break;
        T = T.return;
      }
      return _;
    }
    function Gh(e, t) {
      for (var a = t + "Capture", o = [], l = e; l !== null; ) {
        var s = l, v = s.stateNode, y = s.tag;
        if (y === $ && v !== null) {
          var _ = v, T = Fi(l, a);
          T != null && o.unshift(Rp(l, T, _));
          var N = Fi(l, t);
          N != null && o.push(Rp(l, N, _));
        }
        l = l.return;
      }
      return o;
    }
    function Ff(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== $);
      return e || null;
    }
    function bx(e, t) {
      for (var a = e, o = t, l = 0, s = a; s; s = Ff(s))
        l++;
      for (var v = 0, y = o; y; y = Ff(y))
        v++;
      for (; l - v > 0; )
        a = Ff(a), l--;
      for (; v - l > 0; )
        o = Ff(o), v--;
      for (var _ = l; _--; ) {
        if (a === o || o !== null && a === o.alternate)
          return a;
        a = Ff(a), o = Ff(o);
      }
      return null;
    }
    function O_(e, t, a, o, l) {
      for (var s = t._reactName, v = [], y = a; y !== null && y !== o; ) {
        var _ = y, T = _.alternate, N = _.stateNode, I = _.tag;
        if (T !== null && T === o)
          break;
        if (I === $ && N !== null) {
          var z = N;
          if (l) {
            var G = Fi(y, s);
            G != null && v.unshift(Rp(y, G, z));
          } else if (!l) {
            var X = Fi(y, s);
            X != null && v.push(Rp(y, X, z));
          }
        }
        y = y.return;
      }
      v.length !== 0 && e.push({
        event: t,
        listeners: v
      });
    }
    function wx(e, t, a, o, l) {
      var s = o && l ? bx(o, l) : null;
      o !== null && O_(e, t, o, s, !1), l !== null && a !== null && O_(e, a, l, s, !0);
    }
    function Rx(e, t) {
      return e + "__bubble";
    }
    var Ga = !1, kp = "dangerouslySetInnerHTML", Qh = "suppressContentEditableWarning", Yu = "suppressHydrationWarning", D_ = "autoFocus", uc = "children", sc = "style", Kh = "__html", hg, Xh, Tp, L_, Jh, j_, A_;
    hg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Xh = function(e, t) {
      Dd(e, t), Ac(e, t), Jv(e, t, {
        registrationNameDependencies: Ue,
        possibleRegistrationNames: lt
      });
    }, j_ = vn && !document.documentMode, Tp = function(e, t, a) {
      if (!Ga) {
        var o = Zh(a), l = Zh(t);
        l !== o && (Ga = !0, h("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(o)));
      }
    }, L_ = function(e) {
      if (!Ga) {
        Ga = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), h("Extra attributes from the server: %s", t);
      }
    }, Jh = function(e, t) {
      t === !1 ? h("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : h("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, A_ = function(e, t) {
      var a = e.namespaceURI === ai ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var kx = /\r\n?/g, Tx = /\u0000|\uFFFD/g;
    function Zh(e) {
      or(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(kx, `
`).replace(Tx, "");
    }
    function em(e, t, a, o) {
      var l = Zh(t), s = Zh(e);
      if (s !== l && (o && (Ga || (Ga = !0, h('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && ye))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function U_(e) {
      return e.nodeType === ii ? e : e.ownerDocument;
    }
    function Nx() {
    }
    function tm(e) {
      e.onclick = Nx;
    }
    function Mx(e, t, a, o, l) {
      for (var s in o)
        if (o.hasOwnProperty(s)) {
          var v = o[s];
          if (s === sc)
            v && Object.freeze(v), Wv(t, v);
          else if (s === kp) {
            var y = v ? v[Kh] : void 0;
            y != null && jv(t, y);
          } else if (s === uc)
            if (typeof v == "string") {
              var _ = e !== "textarea" || v !== "";
              _ && bu(t, v);
            } else typeof v == "number" && bu(t, "" + v);
          else s === Qh || s === Yu || s === D_ || (Ue.hasOwnProperty(s) ? v != null && (typeof v != "function" && Jh(s, v), s === "onScroll" && Tn("scroll", t)) : v != null && Ur(t, s, v, l));
        }
    }
    function Ox(e, t, a, o) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], v = t[l + 1];
        s === sc ? Wv(e, v) : s === kp ? jv(e, v) : s === uc ? bu(e, v) : Ur(e, s, v, o);
      }
    }
    function Dx(e, t, a, o) {
      var l, s = U_(a), v, y = o;
      if (y === ai && (y = wd(e)), y === ai) {
        if (l = Pi(e, t), !l && e !== e.toLowerCase() && h("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var _ = s.createElement("div");
          _.innerHTML = "<script><\/script>";
          var T = _.firstChild;
          v = _.removeChild(T);
        } else if (typeof t.is == "string")
          v = s.createElement(e, {
            is: t.is
          });
        else if (v = s.createElement(e), e === "select") {
          var N = v;
          t.multiple ? N.multiple = !0 : t.size && (N.size = t.size);
        }
      } else
        v = s.createElementNS(y, e);
      return y === ai && !l && Object.prototype.toString.call(v) === "[object HTMLUnknownElement]" && !dr.call(hg, e) && (hg[e] = !0, h("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), v;
    }
    function Lx(e, t) {
      return U_(t).createTextNode(e);
    }
    function jx(e, t, a, o) {
      var l = Pi(t, a);
      Xh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Tn("cancel", e), Tn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Tn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var v = 0; v < bp.length; v++)
            Tn(bp[v], e);
          s = a;
          break;
        case "source":
          Tn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Tn("error", e), Tn("load", e), s = a;
          break;
        case "details":
          Tn("toggle", e), s = a;
          break;
        case "input":
          co(e, a), s = xu(e, a), Tn("invalid", e);
          break;
        case "option":
          Vt(e, a), s = a;
          break;
        case "select":
          bl(e, a), s = ms(e, a), Tn("invalid", e);
          break;
        case "textarea":
          Ed(e, a), s = Cd(e, a), Tn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Lc(t, s), Mx(t, e, o, s, l), t) {
        case "input":
          so(e), Q(e, a, !1);
          break;
        case "textarea":
          so(e), Dv(e);
          break;
        case "option":
          dn(e, a);
          break;
        case "select":
          _d(e, a);
          break;
        default:
          typeof s.onClick == "function" && tm(e);
          break;
      }
    }
    function Ax(e, t, a, o, l) {
      Xh(t, o);
      var s = null, v, y;
      switch (t) {
        case "input":
          v = xu(e, a), y = xu(e, o), s = [];
          break;
        case "select":
          v = ms(e, a), y = ms(e, o), s = [];
          break;
        case "textarea":
          v = Cd(e, a), y = Cd(e, o), s = [];
          break;
        default:
          v = a, y = o, typeof v.onClick != "function" && typeof y.onClick == "function" && tm(e);
          break;
      }
      Lc(t, y);
      var _, T, N = null;
      for (_ in v)
        if (!(y.hasOwnProperty(_) || !v.hasOwnProperty(_) || v[_] == null))
          if (_ === sc) {
            var I = v[_];
            for (T in I)
              I.hasOwnProperty(T) && (N || (N = {}), N[T] = "");
          } else _ === kp || _ === uc || _ === Qh || _ === Yu || _ === D_ || (Ue.hasOwnProperty(_) ? s || (s = []) : (s = s || []).push(_, null));
      for (_ in y) {
        var z = y[_], G = v?.[_];
        if (!(!y.hasOwnProperty(_) || z === G || z == null && G == null))
          if (_ === sc)
            if (z && Object.freeze(z), G) {
              for (T in G)
                G.hasOwnProperty(T) && (!z || !z.hasOwnProperty(T)) && (N || (N = {}), N[T] = "");
              for (T in z)
                z.hasOwnProperty(T) && G[T] !== z[T] && (N || (N = {}), N[T] = z[T]);
            } else
              N || (s || (s = []), s.push(_, N)), N = z;
          else if (_ === kp) {
            var X = z ? z[Kh] : void 0, oe = G ? G[Kh] : void 0;
            X != null && oe !== X && (s = s || []).push(_, X);
          } else _ === uc ? (typeof z == "string" || typeof z == "number") && (s = s || []).push(_, "" + z) : _ === Qh || _ === Yu || (Ue.hasOwnProperty(_) ? (z != null && (typeof z != "function" && Jh(_, z), _ === "onScroll" && Tn("scroll", e)), !s && G !== z && (s = [])) : (s = s || []).push(_, z));
      }
      return N && ($y(N, y[sc]), (s = s || []).push(sc, N)), s;
    }
    function Ux(e, t, a, o, l) {
      a === "input" && l.type === "radio" && l.name != null && S(e, l);
      var s = Pi(a, o), v = Pi(a, l);
      switch (Ox(e, t, s, v), a) {
        case "input":
          D(e, l);
          break;
        case "textarea":
          Ov(e, l);
          break;
        case "select":
          Mc(e, l);
          break;
      }
    }
    function zx(e) {
      {
        var t = e.toLowerCase();
        return Cs.hasOwnProperty(t) && Cs[t] || null;
      }
    }
    function Px(e, t, a, o, l, s, v) {
      var y, _;
      switch (y = Pi(t, a), Xh(t, a), t) {
        case "dialog":
          Tn("cancel", e), Tn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Tn("load", e);
          break;
        case "video":
        case "audio":
          for (var T = 0; T < bp.length; T++)
            Tn(bp[T], e);
          break;
        case "source":
          Tn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Tn("error", e), Tn("load", e);
          break;
        case "details":
          Tn("toggle", e);
          break;
        case "input":
          co(e, a), Tn("invalid", e);
          break;
        case "option":
          Vt(e, a);
          break;
        case "select":
          bl(e, a), Tn("invalid", e);
          break;
        case "textarea":
          Ed(e, a), Tn("invalid", e);
          break;
      }
      Lc(t, a);
      {
        _ = /* @__PURE__ */ new Set();
        for (var N = e.attributes, I = 0; I < N.length; I++) {
          var z = N[I].name.toLowerCase();
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
              _.add(N[I].name);
          }
        }
      }
      var G = null;
      for (var X in a)
        if (a.hasOwnProperty(X)) {
          var oe = a[X];
          if (X === uc)
            typeof oe == "string" ? e.textContent !== oe && (a[Yu] !== !0 && em(e.textContent, oe, s, v), G = [uc, oe]) : typeof oe == "number" && e.textContent !== "" + oe && (a[Yu] !== !0 && em(e.textContent, oe, s, v), G = [uc, "" + oe]);
          else if (Ue.hasOwnProperty(X))
            oe != null && (typeof oe != "function" && Jh(X, oe), X === "onScroll" && Tn("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof y == "boolean") {
            var Pe = void 0, st = cn(X);
            if (a[Yu] !== !0) {
              if (!(X === Qh || X === Yu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              X === "value" || X === "checked" || X === "selected")) {
                if (X === kp) {
                  var nt = e.innerHTML, It = oe ? oe[Kh] : void 0;
                  if (It != null) {
                    var Lt = A_(e, It);
                    Lt !== nt && Tp(X, nt, Lt);
                  }
                } else if (X === sc) {
                  if (_.delete(X), j_) {
                    var B = Fy(oe);
                    Pe = e.getAttribute("style"), B !== Pe && Tp(X, Pe, B);
                  }
                } else if (y && !F)
                  _.delete(X.toLowerCase()), Pe = yl(e, X, oe), oe !== Pe && Tp(X, Pe, oe);
                else if (!xn(X, st, y) && !ir(X, oe, st, y)) {
                  var ie = !1;
                  if (st !== null)
                    _.delete(st.attributeName), Pe = Ni(e, X, oe, st);
                  else {
                    var q = o;
                    if (q === ai && (q = wd(t)), q === ai)
                      _.delete(X.toLowerCase());
                    else {
                      var _e = zx(X);
                      _e !== null && _e !== X && (ie = !0, _.delete(_e)), _.delete(X);
                    }
                    Pe = yl(e, X, oe);
                  }
                  var We = F;
                  !We && oe !== Pe && !ie && Tp(X, Pe, oe);
                }
              }
            }
          }
        }
      switch (v && // $FlowFixMe - Should be inferred as not undefined.
      _.size > 0 && a[Yu] !== !0 && L_(_), t) {
        case "input":
          so(e), Q(e, a, !0);
          break;
        case "textarea":
          so(e), Dv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && tm(e);
          break;
      }
      return G;
    }
    function Ix(e, t, a) {
      var o = e.nodeValue !== t;
      return o;
    }
    function mg(e, t) {
      {
        if (Ga)
          return;
        Ga = !0, h("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function yg(e, t) {
      {
        if (Ga)
          return;
        Ga = !0, h('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function gg(e, t, a) {
      {
        if (Ga)
          return;
        Ga = !0, h("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function _g(e, t) {
      {
        if (t === "" || Ga)
          return;
        Ga = !0, h('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function Fx(e, t, a) {
      switch (t) {
        case "input":
          ne(e, a);
          return;
        case "textarea":
          Uy(e, a);
          return;
        case "select":
          Sd(e, a);
          return;
      }
    }
    var Np = function() {
    }, Mp = function() {
    };
    {
      var Vx = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], z_ = [
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
      ], $x = z_.concat(["button"]), Hx = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], P_ = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Mp = function(e, t) {
        var a = wt({}, e || P_), o = {
          tag: t
        };
        return z_.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), $x.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Vx.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = o, t === "form" && (a.formTag = o), t === "a" && (a.aTagInScope = o), t === "button" && (a.buttonTagInScope = o), t === "nobr" && (a.nobrTagInScope = o), t === "p" && (a.pTagInButtonScope = o), t === "li" && (a.listItemTagAutoclosing = o), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = o), a;
      };
      var Bx = function(e, t) {
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
            return Hx.indexOf(t) === -1;
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
      }, qx = function(e, t) {
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
      }, I_ = {};
      Np = function(e, t, a) {
        a = a || P_;
        var o = a.current, l = o && o.tag;
        t != null && (e != null && h("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = Bx(e, l) ? null : o, v = s ? null : qx(e, a), y = s || v;
        if (y) {
          var _ = y.tag, T = !!s + "|" + e + "|" + _;
          if (!I_[T]) {
            I_[T] = !0;
            var N = e, I = "";
            if (e === "#text" ? /\S/.test(t) ? N = "Text nodes" : (N = "Whitespace text nodes", I = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : N = "<" + e + ">", s) {
              var z = "";
              _ === "table" && e === "tr" && (z += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), h("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", N, _, I, z);
            } else
              h("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", N, _);
          }
        }
      };
    }
    var nm = "suppressHydrationWarning", rm = "$", am = "/$", Op = "$?", Dp = "$!", Wx = "style", Sg = null, Cg = null;
    function Yx(e) {
      var t, a, o = e.nodeType;
      switch (o) {
        case ii:
        case kd: {
          t = o === ii ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : Rd(null, "");
          break;
        }
        default: {
          var s = o === $n ? e.parentNode : e, v = s.namespaceURI || null;
          t = s.tagName, a = Rd(v, t);
          break;
        }
      }
      {
        var y = t.toLowerCase(), _ = Mp(null, y);
        return {
          namespace: a,
          ancestorInfo: _
        };
      }
    }
    function Gx(e, t, a) {
      {
        var o = e, l = Rd(o.namespace, t), s = Mp(o.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function i7(e) {
      return e;
    }
    function Qx(e) {
      Sg = Gn(), Cg = sx();
      var t = null;
      return nr(!1), t;
    }
    function Kx(e) {
      cx(Cg), nr(Sg), Sg = null, Cg = null;
    }
    function Xx(e, t, a, o, l) {
      var s;
      {
        var v = o;
        if (Np(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var y = "" + t.children, _ = Mp(v.ancestorInfo, e);
          Np(null, y, _);
        }
        s = v.namespace;
      }
      var T = Dx(e, t, a, s);
      return Ap(l, T), Ng(T, t), T;
    }
    function Jx(e, t) {
      e.appendChild(t);
    }
    function Zx(e, t, a, o, l) {
      switch (jx(e, t, a, o), t) {
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
    function eb(e, t, a, o, l, s) {
      {
        var v = s;
        if (typeof o.children != typeof a.children && (typeof o.children == "string" || typeof o.children == "number")) {
          var y = "" + o.children, _ = Mp(v.ancestorInfo, t);
          Np(null, y, _);
        }
      }
      return Ax(e, t, a, o);
    }
    function Eg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function tb(e, t, a, o) {
      {
        var l = a;
        Np(null, e, l.ancestorInfo);
      }
      var s = Lx(e, t);
      return Ap(o, s), s;
    }
    function nb() {
      var e = window.event;
      return e === void 0 ? Ba : kf(e.type);
    }
    var xg = typeof setTimeout == "function" ? setTimeout : void 0, rb = typeof clearTimeout == "function" ? clearTimeout : void 0, bg = -1, F_ = typeof Promise == "function" ? Promise : void 0, ab = typeof queueMicrotask == "function" ? queueMicrotask : typeof F_ < "u" ? function(e) {
      return F_.resolve(null).then(e).catch(ob);
    } : xg;
    function ob(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function ib(e, t, a, o) {
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
    function lb(e, t, a, o, l, s) {
      Ux(e, t, a, o, l), Ng(e, l);
    }
    function V_(e) {
      bu(e, "");
    }
    function ub(e, t, a) {
      e.nodeValue = a;
    }
    function sb(e, t) {
      e.appendChild(t);
    }
    function cb(e, t) {
      var a;
      e.nodeType === $n ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var o = e._reactRootContainer;
      o == null && a.onclick === null && tm(a);
    }
    function fb(e, t, a) {
      e.insertBefore(t, a);
    }
    function db(e, t, a) {
      e.nodeType === $n ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function pb(e, t) {
      e.removeChild(t);
    }
    function vb(e, t) {
      e.nodeType === $n ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function wg(e, t) {
      var a = t, o = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === $n) {
          var s = l.data;
          if (s === am)
            if (o === 0) {
              e.removeChild(l), ql(t);
              return;
            } else
              o--;
          else (s === rm || s === Op || s === Dp) && o++;
        }
        a = l;
      } while (a);
      ql(t);
    }
    function hb(e, t) {
      e.nodeType === $n ? wg(e.parentNode, t) : e.nodeType === na && wg(e, t), ql(e);
    }
    function mb(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function yb(e) {
      e.nodeValue = "";
    }
    function gb(e, t) {
      e = e;
      var a = t[Wx], o = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Dc("display", o);
    }
    function _b(e, t) {
      e.nodeValue = t;
    }
    function Sb(e) {
      e.nodeType === na ? e.textContent = "" : e.nodeType === ii && e.documentElement && e.removeChild(e.documentElement);
    }
    function Cb(e, t, a) {
      return e.nodeType !== na || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Eb(e, t) {
      return t === "" || e.nodeType !== oi ? null : e;
    }
    function xb(e) {
      return e.nodeType !== $n ? null : e;
    }
    function $_(e) {
      return e.data === Op;
    }
    function Rg(e) {
      return e.data === Dp;
    }
    function bb(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, o, l;
      return t && (a = t.dgst, o = t.msg, l = t.stck), {
        message: o,
        digest: a,
        stack: l
      };
    }
    function wb(e, t) {
      e._reactRetry = t;
    }
    function om(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === na || t === oi)
          break;
        if (t === $n) {
          var a = e.data;
          if (a === rm || a === Dp || a === Op)
            break;
          if (a === am)
            return null;
        }
      }
      return e;
    }
    function Lp(e) {
      return om(e.nextSibling);
    }
    function Rb(e) {
      return om(e.firstChild);
    }
    function kb(e) {
      return om(e.firstChild);
    }
    function Tb(e) {
      return om(e.nextSibling);
    }
    function Nb(e, t, a, o, l, s, v) {
      Ap(s, e), Ng(e, a);
      var y;
      {
        var _ = l;
        y = _.namespace;
      }
      var T = (s.mode & Nt) !== it;
      return Px(e, t, a, y, o, T, v);
    }
    function Mb(e, t, a, o) {
      return Ap(a, e), a.mode & Nt, Ix(e, t);
    }
    function Ob(e, t) {
      Ap(t, e);
    }
    function Db(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === $n) {
          var o = t.data;
          if (o === am) {
            if (a === 0)
              return Lp(t);
            a--;
          } else (o === rm || o === Dp || o === Op) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function H_(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === $n) {
          var o = t.data;
          if (o === rm || o === Dp || o === Op) {
            if (a === 0)
              return t;
            a--;
          } else o === am && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Lb(e) {
      ql(e);
    }
    function jb(e) {
      ql(e);
    }
    function Ab(e) {
      return e !== "head" && e !== "body";
    }
    function Ub(e, t, a, o) {
      var l = !0;
      em(t.nodeValue, a, o, l);
    }
    function zb(e, t, a, o, l, s) {
      if (t[nm] !== !0) {
        var v = !0;
        em(o.nodeValue, l, s, v);
      }
    }
    function Pb(e, t) {
      t.nodeType === na ? mg(e, t) : t.nodeType === $n || yg(e, t);
    }
    function Ib(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === na ? mg(a, t) : t.nodeType === $n || yg(a, t));
      }
    }
    function Fb(e, t, a, o, l) {
      (l || t[nm] !== !0) && (o.nodeType === na ? mg(a, o) : o.nodeType === $n || yg(a, o));
    }
    function Vb(e, t, a) {
      gg(e, t);
    }
    function $b(e, t) {
      _g(e, t);
    }
    function Hb(e, t, a) {
      {
        var o = e.parentNode;
        o !== null && gg(o, t);
      }
    }
    function Bb(e, t) {
      {
        var a = e.parentNode;
        a !== null && _g(a, t);
      }
    }
    function qb(e, t, a, o, l, s) {
      (s || t[nm] !== !0) && gg(a, o);
    }
    function Wb(e, t, a, o, l) {
      (l || t[nm] !== !0) && _g(a, o);
    }
    function Yb(e) {
      h("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Gb(e) {
      wp(e);
    }
    var Vf = Math.random().toString(36).slice(2), $f = "__reactFiber$" + Vf, kg = "__reactProps$" + Vf, jp = "__reactContainer$" + Vf, Tg = "__reactEvents$" + Vf, Qb = "__reactListeners$" + Vf, Kb = "__reactHandles$" + Vf;
    function Xb(e) {
      delete e[$f], delete e[kg], delete e[Tg], delete e[Qb], delete e[Kb];
    }
    function Ap(e, t) {
      t[$f] = e;
    }
    function im(e, t) {
      t[jp] = e;
    }
    function B_(e) {
      e[jp] = null;
    }
    function Up(e) {
      return !!e[jp];
    }
    function cc(e) {
      var t = e[$f];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[jp] || a[$f], t) {
          var o = t.alternate;
          if (t.child !== null || o !== null && o.child !== null)
            for (var l = H_(e); l !== null; ) {
              var s = l[$f];
              if (s)
                return s;
              l = H_(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Gu(e) {
      var t = e[$f] || e[jp];
      return t && (t.tag === $ || t.tag === Z || t.tag === ae || t.tag === U) ? t : null;
    }
    function Hf(e) {
      if (e.tag === $ || e.tag === Z)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function lm(e) {
      return e[kg] || null;
    }
    function Ng(e, t) {
      e[kg] = t;
    }
    function Jb(e) {
      var t = e[Tg];
      return t === void 0 && (t = e[Tg] = /* @__PURE__ */ new Set()), t;
    }
    var q_ = {}, W_ = f.ReactDebugCurrentFrame;
    function um(e) {
      if (e) {
        var t = e._owner, a = ti(e.type, e._source, t ? t.type : null);
        W_.setExtraStackFrame(a);
      } else
        W_.setExtraStackFrame(null);
    }
    function yi(e, t, a, o, l) {
      {
        var s = Function.call.bind(dr);
        for (var v in e)
          if (s(e, v)) {
            var y = void 0;
            try {
              if (typeof e[v] != "function") {
                var _ = Error((o || "React class") + ": " + a + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              y = e[v](t, v, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              y = T;
            }
            y && !(y instanceof Error) && (um(l), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, v, typeof y), um(null)), y instanceof Error && !(y.message in q_) && (q_[y.message] = !0, um(l), h("Failed %s type: %s", a, y.message), um(null));
          }
      }
    }
    var Mg = [], sm;
    sm = [];
    var Xl = -1;
    function Qu(e) {
      return {
        current: e
      };
    }
    function pa(e, t) {
      if (Xl < 0) {
        h("Unexpected pop.");
        return;
      }
      t !== sm[Xl] && h("Unexpected Fiber popped."), e.current = Mg[Xl], Mg[Xl] = null, sm[Xl] = null, Xl--;
    }
    function va(e, t, a) {
      Xl++, Mg[Xl] = e.current, sm[Xl] = a, e.current = t;
    }
    var Og;
    Og = {};
    var go = {};
    Object.freeze(go);
    var Jl = Qu(go), al = Qu(!1), Dg = go;
    function Bf(e, t, a) {
      return a && ol(t) ? Dg : Jl.current;
    }
    function Y_(e, t, a) {
      {
        var o = e.stateNode;
        o.__reactInternalMemoizedUnmaskedChildContext = t, o.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function qf(e, t) {
      {
        var a = e.type, o = a.contextTypes;
        if (!o)
          return go;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var v in o)
          s[v] = t[v];
        {
          var y = gt(e) || "Unknown";
          yi(o, s, "context", y);
        }
        return l && Y_(e, t, s), s;
      }
    }
    function cm() {
      return al.current;
    }
    function ol(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function fm(e) {
      pa(al, e), pa(Jl, e);
    }
    function Lg(e) {
      pa(al, e), pa(Jl, e);
    }
    function G_(e, t, a) {
      {
        if (Jl.current !== go)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        va(Jl, t, e), va(al, a, e);
      }
    }
    function Q_(e, t, a) {
      {
        var o = e.stateNode, l = t.childContextTypes;
        if (typeof o.getChildContext != "function") {
          {
            var s = gt(e) || "Unknown";
            Og[s] || (Og[s] = !0, h("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var v = o.getChildContext();
        for (var y in v)
          if (!(y in l))
            throw new Error((gt(e) || "Unknown") + '.getChildContext(): key "' + y + '" is not defined in childContextTypes.');
        {
          var _ = gt(e) || "Unknown";
          yi(l, v, "child context", _);
        }
        return wt({}, a, v);
      }
    }
    function dm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || go;
        return Dg = Jl.current, va(Jl, a, e), va(al, al.current, e), !0;
      }
    }
    function K_(e, t, a) {
      {
        var o = e.stateNode;
        if (!o)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = Q_(e, t, Dg);
          o.__reactInternalMemoizedMergedChildContext = l, pa(al, e), pa(Jl, e), va(Jl, l, e), va(al, a, e);
        } else
          pa(al, e), va(al, a, e);
      }
    }
    function Zb(e) {
      {
        if (!Ol(e) || e.tag !== k)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case U:
              return t.stateNode.context;
            case k: {
              var a = t.type;
              if (ol(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Ku = 0, pm = 1, Zl = null, jg = !1, Ag = !1;
    function X_(e) {
      Zl === null ? Zl = [e] : Zl.push(e);
    }
    function ew(e) {
      jg = !0, X_(e);
    }
    function J_() {
      jg && Xu();
    }
    function Xu() {
      if (!Ag && Zl !== null) {
        Ag = !0;
        var e = 0, t = Wa();
        try {
          var a = !0, o = Zl;
          for (Yn(Vr); e < o.length; e++) {
            var l = o[e];
            do
              l = l(a);
            while (l !== null);
          }
          Zl = null, jg = !1;
        } catch (s) {
          throw Zl !== null && (Zl = Zl.slice(e + 1)), Id(Ns, Xu), s;
        } finally {
          Yn(t), Ag = !1;
        }
      }
      return null;
    }
    var Wf = [], Yf = 0, vm = null, hm = 0, Ho = [], Bo = 0, fc = null, eu = 1, tu = "";
    function tw(e) {
      return pc(), (e.flags & Lo) !== ot;
    }
    function nw(e) {
      return pc(), hm;
    }
    function rw() {
      var e = tu, t = eu, a = t & ~aw(t);
      return a.toString(32) + e;
    }
    function dc(e, t) {
      pc(), Wf[Yf++] = hm, Wf[Yf++] = vm, vm = e, hm = t;
    }
    function Z_(e, t, a) {
      pc(), Ho[Bo++] = eu, Ho[Bo++] = tu, Ho[Bo++] = fc, fc = e;
      var o = eu, l = tu, s = mm(o) - 1, v = o & ~(1 << s), y = a + 1, _ = mm(t) + s;
      if (_ > 30) {
        var T = s - s % 5, N = (1 << T) - 1, I = (v & N).toString(32), z = v >> T, G = s - T, X = mm(t) + G, oe = y << G, Pe = oe | z, st = I + l;
        eu = 1 << X | Pe, tu = st;
      } else {
        var nt = y << s, It = nt | v, Lt = l;
        eu = 1 << _ | It, tu = Lt;
      }
    }
    function Ug(e) {
      pc();
      var t = e.return;
      if (t !== null) {
        var a = 1, o = 0;
        dc(e, a), Z_(e, a, o);
      }
    }
    function mm(e) {
      return 32 - qn(e);
    }
    function aw(e) {
      return 1 << mm(e) - 1;
    }
    function zg(e) {
      for (; e === vm; )
        vm = Wf[--Yf], Wf[Yf] = null, hm = Wf[--Yf], Wf[Yf] = null;
      for (; e === fc; )
        fc = Ho[--Bo], Ho[Bo] = null, tu = Ho[--Bo], Ho[Bo] = null, eu = Ho[--Bo], Ho[Bo] = null;
    }
    function ow() {
      return pc(), fc !== null ? {
        id: eu,
        overflow: tu
      } : null;
    }
    function iw(e, t) {
      pc(), Ho[Bo++] = eu, Ho[Bo++] = tu, Ho[Bo++] = fc, eu = t.id, tu = t.overflow, fc = e;
    }
    function pc() {
      Wr() || h("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var qr = null, qo = null, gi = !1, vc = !1, Ju = null;
    function lw() {
      gi && h("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function e2() {
      vc = !0;
    }
    function uw() {
      return vc;
    }
    function sw(e) {
      var t = e.stateNode.containerInfo;
      return qo = kb(t), qr = e, gi = !0, Ju = null, vc = !1, !0;
    }
    function cw(e, t, a) {
      return qo = Tb(t), qr = e, gi = !0, Ju = null, vc = !1, a !== null && iw(e, a), !0;
    }
    function t2(e, t) {
      switch (e.tag) {
        case U: {
          Pb(e.stateNode.containerInfo, t);
          break;
        }
        case $: {
          var a = (e.mode & Nt) !== it;
          Fb(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case ae: {
          var o = e.memoizedState;
          o.dehydrated !== null && Ib(o.dehydrated, t);
          break;
        }
      }
    }
    function n2(e, t) {
      t2(e, t);
      var a = vT();
      a.stateNode = t, a.return = e;
      var o = e.deletions;
      o === null ? (e.deletions = [a], e.flags |= Ia) : o.push(a);
    }
    function Pg(e, t) {
      {
        if (vc)
          return;
        switch (e.tag) {
          case U: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case $:
                var o = t.type;
                t.pendingProps, Vb(a, o);
                break;
              case Z:
                var l = t.pendingProps;
                $b(a, l);
                break;
            }
            break;
          }
          case $: {
            var s = e.type, v = e.memoizedProps, y = e.stateNode;
            switch (t.tag) {
              case $: {
                var _ = t.type, T = t.pendingProps, N = (e.mode & Nt) !== it;
                qb(
                  s,
                  v,
                  y,
                  _,
                  T,
                  // TODO: Delete this argument when we remove the legacy root API.
                  N
                );
                break;
              }
              case Z: {
                var I = t.pendingProps, z = (e.mode & Nt) !== it;
                Wb(
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
          case ae: {
            var G = e.memoizedState, X = G.dehydrated;
            if (X !== null) switch (t.tag) {
              case $:
                var oe = t.type;
                t.pendingProps, Hb(X, oe);
                break;
              case Z:
                var Pe = t.pendingProps;
                Bb(X, Pe);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function r2(e, t) {
      t.flags = t.flags & ~aa | wn, Pg(e, t);
    }
    function a2(e, t) {
      switch (e.tag) {
        case $: {
          var a = e.type;
          e.pendingProps;
          var o = Cb(t, a);
          return o !== null ? (e.stateNode = o, qr = e, qo = Rb(o), !0) : !1;
        }
        case Z: {
          var l = e.pendingProps, s = Eb(t, l);
          return s !== null ? (e.stateNode = s, qr = e, qo = null, !0) : !1;
        }
        case ae: {
          var v = xb(t);
          if (v !== null) {
            var y = {
              dehydrated: v,
              treeContext: ow(),
              retryLane: ua
            };
            e.memoizedState = y;
            var _ = hT(v);
            return _.return = e, e.child = _, qr = e, qo = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Ig(e) {
      return (e.mode & Nt) !== it && (e.flags & rt) === ot;
    }
    function Fg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Vg(e) {
      if (gi) {
        var t = qo;
        if (!t) {
          Ig(e) && (Pg(qr, e), Fg()), r2(qr, e), gi = !1, qr = e;
          return;
        }
        var a = t;
        if (!a2(e, t)) {
          Ig(e) && (Pg(qr, e), Fg()), t = Lp(a);
          var o = qr;
          if (!t || !a2(e, t)) {
            r2(qr, e), gi = !1, qr = e;
            return;
          }
          n2(o, a);
        }
      }
    }
    function fw(e, t, a) {
      var o = e.stateNode, l = !vc, s = Nb(o, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function dw(e) {
      var t = e.stateNode, a = e.memoizedProps, o = Mb(t, a, e);
      if (o) {
        var l = qr;
        if (l !== null)
          switch (l.tag) {
            case U: {
              var s = l.stateNode.containerInfo, v = (l.mode & Nt) !== it;
              Ub(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case $: {
              var y = l.type, _ = l.memoizedProps, T = l.stateNode, N = (l.mode & Nt) !== it;
              zb(
                y,
                _,
                T,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                N
              );
              break;
            }
          }
      }
      return o;
    }
    function pw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Ob(a, e);
    }
    function vw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Db(a);
    }
    function o2(e) {
      for (var t = e.return; t !== null && t.tag !== $ && t.tag !== U && t.tag !== ae; )
        t = t.return;
      qr = t;
    }
    function ym(e) {
      if (e !== qr)
        return !1;
      if (!gi)
        return o2(e), gi = !0, !1;
      if (e.tag !== U && (e.tag !== $ || Ab(e.type) && !Eg(e.type, e.memoizedProps))) {
        var t = qo;
        if (t)
          if (Ig(e))
            i2(e), Fg();
          else
            for (; t; )
              n2(e, t), t = Lp(t);
      }
      return o2(e), e.tag === ae ? qo = vw(e) : qo = qr ? Lp(e.stateNode) : null, !0;
    }
    function hw() {
      return gi && qo !== null;
    }
    function i2(e) {
      for (var t = qo; t; )
        t2(e, t), t = Lp(t);
    }
    function Gf() {
      qr = null, qo = null, gi = !1, vc = !1;
    }
    function l2() {
      Ju !== null && (eC(Ju), Ju = null);
    }
    function Wr() {
      return gi;
    }
    function $g(e) {
      Ju === null ? Ju = [e] : Ju.push(e);
    }
    var mw = f.ReactCurrentBatchConfig, yw = null;
    function gw() {
      return mw.transition;
    }
    var _i = {
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
      var _w = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & an && (t = a), a = a.return;
        return t;
      }, hc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, zp = [], Pp = [], Ip = [], Fp = [], Vp = [], $p = [], mc = /* @__PURE__ */ new Set();
      _i.recordUnsafeLifecycleWarnings = function(e, t) {
        mc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && zp.push(e), e.mode & an && typeof t.UNSAFE_componentWillMount == "function" && Pp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ip.push(e), e.mode & an && typeof t.UNSAFE_componentWillReceiveProps == "function" && Fp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Vp.push(e), e.mode & an && typeof t.UNSAFE_componentWillUpdate == "function" && $p.push(e));
      }, _i.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        zp.length > 0 && (zp.forEach(function(z) {
          e.add(gt(z) || "Component"), mc.add(z.type);
        }), zp = []);
        var t = /* @__PURE__ */ new Set();
        Pp.length > 0 && (Pp.forEach(function(z) {
          t.add(gt(z) || "Component"), mc.add(z.type);
        }), Pp = []);
        var a = /* @__PURE__ */ new Set();
        Ip.length > 0 && (Ip.forEach(function(z) {
          a.add(gt(z) || "Component"), mc.add(z.type);
        }), Ip = []);
        var o = /* @__PURE__ */ new Set();
        Fp.length > 0 && (Fp.forEach(function(z) {
          o.add(gt(z) || "Component"), mc.add(z.type);
        }), Fp = []);
        var l = /* @__PURE__ */ new Set();
        Vp.length > 0 && (Vp.forEach(function(z) {
          l.add(gt(z) || "Component"), mc.add(z.type);
        }), Vp = []);
        var s = /* @__PURE__ */ new Set();
        if ($p.length > 0 && ($p.forEach(function(z) {
          s.add(gt(z) || "Component"), mc.add(z.type);
        }), $p = []), t.size > 0) {
          var v = hc(t);
          h(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, v);
        }
        if (o.size > 0) {
          var y = hc(o);
          h(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, y);
        }
        if (s.size > 0) {
          var _ = hc(s);
          h(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, _);
        }
        if (e.size > 0) {
          var T = hc(e);
          C(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (a.size > 0) {
          var N = hc(a);
          C(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, N);
        }
        if (l.size > 0) {
          var I = hc(l);
          C(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, I);
        }
      };
      var gm = /* @__PURE__ */ new Map(), u2 = /* @__PURE__ */ new Set();
      _i.recordLegacyContextWarning = function(e, t) {
        var a = _w(e);
        if (a === null) {
          h("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!u2.has(e.type)) {
          var o = gm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (o === void 0 && (o = [], gm.set(a, o)), o.push(e));
        }
      }, _i.flushLegacyContextWarning = function() {
        gm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], o = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              o.add(gt(s) || "Component"), u2.add(s.type);
            });
            var l = hc(o);
            try {
              tn(a), h(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              yn();
            }
          }
        });
      }, _i.discardPendingWarnings = function() {
        zp = [], Pp = [], Ip = [], Fp = [], Vp = [], $p = [], gm = /* @__PURE__ */ new Map();
      };
    }
    var Hg, Bg, qg, Wg, Yg, s2 = function(e, t) {
    };
    Hg = !1, Bg = !1, qg = {}, Wg = {}, Yg = {}, s2 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = gt(t) || "Component";
        Wg[a] || (Wg[a] = !0, h('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Sw(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Hp(e, t, a) {
      var o = a.ref;
      if (o !== null && typeof o != "function" && typeof o != "object") {
        if ((e.mode & an || te) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== k) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Sw(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var l = gt(e) || "Component";
          qg[l] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, o), qg[l] = !0);
        }
        if (a._owner) {
          var s = a._owner, v;
          if (s) {
            var y = s;
            if (y.tag !== k)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            v = y.stateNode;
          }
          if (!v)
            throw new Error("Missing owner for string ref " + o + ". This error is likely caused by a bug in React. Please file an issue.");
          var _ = v;
          Co(o, "ref");
          var T = "" + o;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === T)
            return t.ref;
          var N = function(I) {
            var z = _.refs;
            I === null ? delete z[T] : z[T] = I;
          };
          return N._stringRef = T, N;
        } else {
          if (typeof o != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + o + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return o;
    }
    function _m(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Sm(e) {
      {
        var t = gt(e) || "Component";
        if (Yg[t])
          return;
        Yg[t] = !0, h("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function c2(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function f2(e) {
      function t(B, ie) {
        if (e) {
          var q = B.deletions;
          q === null ? (B.deletions = [ie], B.flags |= Ia) : q.push(ie);
        }
      }
      function a(B, ie) {
        if (!e)
          return null;
        for (var q = ie; q !== null; )
          t(B, q), q = q.sibling;
        return null;
      }
      function o(B, ie) {
        for (var q = /* @__PURE__ */ new Map(), _e = ie; _e !== null; )
          _e.key !== null ? q.set(_e.key, _e) : q.set(_e.index, _e), _e = _e.sibling;
        return q;
      }
      function l(B, ie) {
        var q = wc(B, ie);
        return q.index = 0, q.sibling = null, q;
      }
      function s(B, ie, q) {
        if (B.index = q, !e)
          return B.flags |= Lo, ie;
        var _e = B.alternate;
        if (_e !== null) {
          var We = _e.index;
          return We < ie ? (B.flags |= wn, ie) : We;
        } else
          return B.flags |= wn, ie;
      }
      function v(B) {
        return e && B.alternate === null && (B.flags |= wn), B;
      }
      function y(B, ie, q, _e) {
        if (ie === null || ie.tag !== Z) {
          var We = $1(q, B.mode, _e);
          return We.return = B, We;
        } else {
          var Fe = l(ie, q);
          return Fe.return = B, Fe;
        }
      }
      function _(B, ie, q, _e) {
        var We = q.type;
        if (We === xo)
          return N(B, ie, q.props.children, _e, q.key);
        if (ie !== null && (ie.elementType === We || // Keep this check inline so it only runs on the false path:
        mC(ie, q) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof We == "object" && We !== null && We.$$typeof === _t && c2(We) === ie.type)) {
          var Fe = l(ie, q.props);
          return Fe.ref = Hp(B, ie, q), Fe.return = B, Fe._debugSource = q._source, Fe._debugOwner = q._owner, Fe;
        }
        var ht = V1(q, B.mode, _e);
        return ht.ref = Hp(B, ie, q), ht.return = B, ht;
      }
      function T(B, ie, q, _e) {
        if (ie === null || ie.tag !== V || ie.stateNode.containerInfo !== q.containerInfo || ie.stateNode.implementation !== q.implementation) {
          var We = H1(q, B.mode, _e);
          return We.return = B, We;
        } else {
          var Fe = l(ie, q.children || []);
          return Fe.return = B, Fe;
        }
      }
      function N(B, ie, q, _e, We) {
        if (ie === null || ie.tag !== J) {
          var Fe = ss(q, B.mode, _e, We);
          return Fe.return = B, Fe;
        } else {
          var ht = l(ie, q);
          return ht.return = B, ht;
        }
      }
      function I(B, ie, q) {
        if (typeof ie == "string" && ie !== "" || typeof ie == "number") {
          var _e = $1("" + ie, B.mode, q);
          return _e.return = B, _e;
        }
        if (typeof ie == "object" && ie !== null) {
          switch (ie.$$typeof) {
            case zr: {
              var We = V1(ie, B.mode, q);
              return We.ref = Hp(B, null, ie), We.return = B, We;
            }
            case pr: {
              var Fe = H1(ie, B.mode, q);
              return Fe.return = B, Fe;
            }
            case _t: {
              var ht = ie._payload, Ct = ie._init;
              return I(B, Ct(ht), q);
            }
          }
          if (kt(ie) || xt(ie)) {
            var ln = ss(ie, B.mode, q, null);
            return ln.return = B, ln;
          }
          _m(B, ie);
        }
        return typeof ie == "function" && Sm(B), null;
      }
      function z(B, ie, q, _e) {
        var We = ie !== null ? ie.key : null;
        if (typeof q == "string" && q !== "" || typeof q == "number")
          return We !== null ? null : y(B, ie, "" + q, _e);
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case zr:
              return q.key === We ? _(B, ie, q, _e) : null;
            case pr:
              return q.key === We ? T(B, ie, q, _e) : null;
            case _t: {
              var Fe = q._payload, ht = q._init;
              return z(B, ie, ht(Fe), _e);
            }
          }
          if (kt(q) || xt(q))
            return We !== null ? null : N(B, ie, q, _e, null);
          _m(B, q);
        }
        return typeof q == "function" && Sm(B), null;
      }
      function G(B, ie, q, _e, We) {
        if (typeof _e == "string" && _e !== "" || typeof _e == "number") {
          var Fe = B.get(q) || null;
          return y(ie, Fe, "" + _e, We);
        }
        if (typeof _e == "object" && _e !== null) {
          switch (_e.$$typeof) {
            case zr: {
              var ht = B.get(_e.key === null ? q : _e.key) || null;
              return _(ie, ht, _e, We);
            }
            case pr: {
              var Ct = B.get(_e.key === null ? q : _e.key) || null;
              return T(ie, Ct, _e, We);
            }
            case _t:
              var ln = _e._payload, Yt = _e._init;
              return G(B, ie, q, Yt(ln), We);
          }
          if (kt(_e) || xt(_e)) {
            var rr = B.get(q) || null;
            return N(ie, rr, _e, We, null);
          }
          _m(ie, _e);
        }
        return typeof _e == "function" && Sm(ie), null;
      }
      function X(B, ie, q) {
        {
          if (typeof B != "object" || B === null)
            return ie;
          switch (B.$$typeof) {
            case zr:
            case pr:
              s2(B, q);
              var _e = B.key;
              if (typeof _e != "string")
                break;
              if (ie === null) {
                ie = /* @__PURE__ */ new Set(), ie.add(_e);
                break;
              }
              if (!ie.has(_e)) {
                ie.add(_e);
                break;
              }
              h("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", _e);
              break;
            case _t:
              var We = B._payload, Fe = B._init;
              X(Fe(We), ie, q);
              break;
          }
        }
        return ie;
      }
      function oe(B, ie, q, _e) {
        for (var We = null, Fe = 0; Fe < q.length; Fe++) {
          var ht = q[Fe];
          We = X(ht, We, B);
        }
        for (var Ct = null, ln = null, Yt = ie, rr = 0, Gt = 0, Kn = null; Yt !== null && Gt < q.length; Gt++) {
          Yt.index > Gt ? (Kn = Yt, Yt = null) : Kn = Yt.sibling;
          var ma = z(B, Yt, q[Gt], _e);
          if (ma === null) {
            Yt === null && (Yt = Kn);
            break;
          }
          e && Yt && ma.alternate === null && t(B, Yt), rr = s(ma, rr, Gt), ln === null ? Ct = ma : ln.sibling = ma, ln = ma, Yt = Kn;
        }
        if (Gt === q.length) {
          if (a(B, Yt), Wr()) {
            var Zr = Gt;
            dc(B, Zr);
          }
          return Ct;
        }
        if (Yt === null) {
          for (; Gt < q.length; Gt++) {
            var So = I(B, q[Gt], _e);
            So !== null && (rr = s(So, rr, Gt), ln === null ? Ct = So : ln.sibling = So, ln = So);
          }
          if (Wr()) {
            var Oa = Gt;
            dc(B, Oa);
          }
          return Ct;
        }
        for (var Da = o(B, Yt); Gt < q.length; Gt++) {
          var ya = G(Da, B, Gt, q[Gt], _e);
          ya !== null && (e && ya.alternate !== null && Da.delete(ya.key === null ? Gt : ya.key), rr = s(ya, rr, Gt), ln === null ? Ct = ya : ln.sibling = ya, ln = ya);
        }
        if (e && Da.forEach(function(pd) {
          return t(B, pd);
        }), Wr()) {
          var uu = Gt;
          dc(B, uu);
        }
        return Ct;
      }
      function Pe(B, ie, q, _e) {
        var We = xt(q);
        if (typeof We != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          q[Symbol.toStringTag] === "Generator" && (Bg || h("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Bg = !0), q.entries === We && (Hg || h("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Hg = !0);
          var Fe = We.call(q);
          if (Fe)
            for (var ht = null, Ct = Fe.next(); !Ct.done; Ct = Fe.next()) {
              var ln = Ct.value;
              ht = X(ln, ht, B);
            }
        }
        var Yt = We.call(q);
        if (Yt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var rr = null, Gt = null, Kn = ie, ma = 0, Zr = 0, So = null, Oa = Yt.next(); Kn !== null && !Oa.done; Zr++, Oa = Yt.next()) {
          Kn.index > Zr ? (So = Kn, Kn = null) : So = Kn.sibling;
          var Da = z(B, Kn, Oa.value, _e);
          if (Da === null) {
            Kn === null && (Kn = So);
            break;
          }
          e && Kn && Da.alternate === null && t(B, Kn), ma = s(Da, ma, Zr), Gt === null ? rr = Da : Gt.sibling = Da, Gt = Da, Kn = So;
        }
        if (Oa.done) {
          if (a(B, Kn), Wr()) {
            var ya = Zr;
            dc(B, ya);
          }
          return rr;
        }
        if (Kn === null) {
          for (; !Oa.done; Zr++, Oa = Yt.next()) {
            var uu = I(B, Oa.value, _e);
            uu !== null && (ma = s(uu, ma, Zr), Gt === null ? rr = uu : Gt.sibling = uu, Gt = uu);
          }
          if (Wr()) {
            var pd = Zr;
            dc(B, pd);
          }
          return rr;
        }
        for (var Cv = o(B, Kn); !Oa.done; Zr++, Oa = Yt.next()) {
          var pl = G(Cv, B, Zr, Oa.value, _e);
          pl !== null && (e && pl.alternate !== null && Cv.delete(pl.key === null ? Zr : pl.key), ma = s(pl, ma, Zr), Gt === null ? rr = pl : Gt.sibling = pl, Gt = pl);
        }
        if (e && Cv.forEach(function(WT) {
          return t(B, WT);
        }), Wr()) {
          var qT = Zr;
          dc(B, qT);
        }
        return rr;
      }
      function st(B, ie, q, _e) {
        if (ie !== null && ie.tag === Z) {
          a(B, ie.sibling);
          var We = l(ie, q);
          return We.return = B, We;
        }
        a(B, ie);
        var Fe = $1(q, B.mode, _e);
        return Fe.return = B, Fe;
      }
      function nt(B, ie, q, _e) {
        for (var We = q.key, Fe = ie; Fe !== null; ) {
          if (Fe.key === We) {
            var ht = q.type;
            if (ht === xo) {
              if (Fe.tag === J) {
                a(B, Fe.sibling);
                var Ct = l(Fe, q.props.children);
                return Ct.return = B, Ct._debugSource = q._source, Ct._debugOwner = q._owner, Ct;
              }
            } else if (Fe.elementType === ht || // Keep this check inline so it only runs on the false path:
            mC(Fe, q) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ht == "object" && ht !== null && ht.$$typeof === _t && c2(ht) === Fe.type) {
              a(B, Fe.sibling);
              var ln = l(Fe, q.props);
              return ln.ref = Hp(B, Fe, q), ln.return = B, ln._debugSource = q._source, ln._debugOwner = q._owner, ln;
            }
            a(B, Fe);
            break;
          } else
            t(B, Fe);
          Fe = Fe.sibling;
        }
        if (q.type === xo) {
          var Yt = ss(q.props.children, B.mode, _e, q.key);
          return Yt.return = B, Yt;
        } else {
          var rr = V1(q, B.mode, _e);
          return rr.ref = Hp(B, ie, q), rr.return = B, rr;
        }
      }
      function It(B, ie, q, _e) {
        for (var We = q.key, Fe = ie; Fe !== null; ) {
          if (Fe.key === We)
            if (Fe.tag === V && Fe.stateNode.containerInfo === q.containerInfo && Fe.stateNode.implementation === q.implementation) {
              a(B, Fe.sibling);
              var ht = l(Fe, q.children || []);
              return ht.return = B, ht;
            } else {
              a(B, Fe);
              break;
            }
          else
            t(B, Fe);
          Fe = Fe.sibling;
        }
        var Ct = H1(q, B.mode, _e);
        return Ct.return = B, Ct;
      }
      function Lt(B, ie, q, _e) {
        var We = typeof q == "object" && q !== null && q.type === xo && q.key === null;
        if (We && (q = q.props.children), typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case zr:
              return v(nt(B, ie, q, _e));
            case pr:
              return v(It(B, ie, q, _e));
            case _t:
              var Fe = q._payload, ht = q._init;
              return Lt(B, ie, ht(Fe), _e);
          }
          if (kt(q))
            return oe(B, ie, q, _e);
          if (xt(q))
            return Pe(B, ie, q, _e);
          _m(B, q);
        }
        return typeof q == "string" && q !== "" || typeof q == "number" ? v(st(B, ie, "" + q, _e)) : (typeof q == "function" && Sm(B), a(B, ie));
      }
      return Lt;
    }
    var Qf = f2(!0), d2 = f2(!1);
    function Cw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, o = wc(a, a.pendingProps);
        for (t.child = o, o.return = t; a.sibling !== null; )
          a = a.sibling, o = o.sibling = wc(a, a.pendingProps), o.return = t;
        o.sibling = null;
      }
    }
    function Ew(e, t) {
      for (var a = e.child; a !== null; )
        sT(a, t), a = a.sibling;
    }
    var Gg = Qu(null), Qg;
    Qg = {};
    var Cm = null, Kf = null, Kg = null, Em = !1;
    function xm() {
      Cm = null, Kf = null, Kg = null, Em = !1;
    }
    function p2() {
      Em = !0;
    }
    function v2() {
      Em = !1;
    }
    function h2(e, t, a) {
      va(Gg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Qg && h("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Qg;
    }
    function Xg(e, t) {
      var a = Gg.current;
      pa(Gg, t), e._currentValue = a;
    }
    function Jg(e, t, a) {
      for (var o = e; o !== null; ) {
        var l = o.alternate;
        if (Bl(o.childLanes, t) ? l !== null && !Bl(l.childLanes, t) && (l.childLanes = bt(l.childLanes, t)) : (o.childLanes = bt(o.childLanes, t), l !== null && (l.childLanes = bt(l.childLanes, t))), o === a)
          break;
        o = o.return;
      }
      o !== a && h("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function xw(e, t, a) {
      bw(e, t, a);
    }
    function bw(e, t, a) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var l = void 0, s = o.dependencies;
        if (s !== null) {
          l = o.child;
          for (var v = s.firstContext; v !== null; ) {
            if (v.context === t) {
              if (o.tag === k) {
                var y = Hs(a), _ = nu(un, y);
                _.tag = wm;
                var T = o.updateQueue;
                if (T !== null) {
                  var N = T.shared, I = N.pending;
                  I === null ? _.next = _ : (_.next = I.next, I.next = _), N.pending = _;
                }
              }
              o.lanes = bt(o.lanes, a);
              var z = o.alternate;
              z !== null && (z.lanes = bt(z.lanes, a)), Jg(o.return, a, e), s.lanes = bt(s.lanes, a);
              break;
            }
            v = v.next;
          }
        } else if (o.tag === xe)
          l = o.type === e.type ? null : o.child;
        else if (o.tag === Ze) {
          var G = o.return;
          if (G === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          G.lanes = bt(G.lanes, a);
          var X = G.alternate;
          X !== null && (X.lanes = bt(X.lanes, a)), Jg(G, a, e), l = o.sibling;
        } else
          l = o.child;
        if (l !== null)
          l.return = o;
        else
          for (l = o; l !== null; ) {
            if (l === e) {
              l = null;
              break;
            }
            var oe = l.sibling;
            if (oe !== null) {
              oe.return = l.return, l = oe;
              break;
            }
            l = l.return;
          }
        o = l;
      }
    }
    function Xf(e, t) {
      Cm = e, Kf = null, Kg = null;
      var a = e.dependencies;
      if (a !== null) {
        var o = a.firstContext;
        o !== null && (sa(a.lanes, t) && av(), a.firstContext = null);
      }
    }
    function fr(e) {
      Em && h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Kg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Kf === null) {
          if (Cm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Kf = a, Cm.dependencies = {
            lanes: ce,
            firstContext: a
          };
        } else
          Kf = Kf.next = a;
      }
      return t;
    }
    var yc = null;
    function Zg(e) {
      yc === null ? yc = [e] : yc.push(e);
    }
    function ww() {
      if (yc !== null) {
        for (var e = 0; e < yc.length; e++) {
          var t = yc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var o = a.next, l = t.pending;
            if (l !== null) {
              var s = l.next;
              l.next = o, a.next = s;
            }
            t.pending = a;
          }
        }
        yc = null;
      }
    }
    function m2(e, t, a, o) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Zg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, bm(e, o);
    }
    function Rw(e, t, a, o) {
      var l = t.interleaved;
      l === null ? (a.next = a, Zg(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function kw(e, t, a, o) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Zg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, bm(e, o);
    }
    function Qa(e, t) {
      return bm(e, t);
    }
    var Tw = bm;
    function bm(e, t) {
      e.lanes = bt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = bt(a.lanes, t)), a === null && (e.flags & (wn | aa)) !== ot && dC(e);
      for (var o = e, l = e.return; l !== null; )
        l.childLanes = bt(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = bt(a.childLanes, t) : (l.flags & (wn | aa)) !== ot && dC(e), o = l, l = l.return;
      if (o.tag === U) {
        var s = o.stateNode;
        return s;
      } else
        return null;
    }
    var y2 = 0, g2 = 1, wm = 2, e0 = 3, Rm = !1, t0, km;
    t0 = !1, km = null;
    function n0(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ce
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function _2(e, t) {
      var a = t.updateQueue, o = e.updateQueue;
      if (a === o) {
        var l = {
          baseState: o.baseState,
          firstBaseUpdate: o.firstBaseUpdate,
          lastBaseUpdate: o.lastBaseUpdate,
          shared: o.shared,
          effects: o.effects
        };
        t.updateQueue = l;
      }
    }
    function nu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: y2,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Zu(e, t, a) {
      var o = e.updateQueue;
      if (o === null)
        return null;
      var l = o.shared;
      if (km === l && !t0 && (h("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), t0 = !0), Rk()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, Tw(e, a);
      } else
        return kw(e, l, t, a);
    }
    function Tm(e, t, a) {
      var o = t.updateQueue;
      if (o !== null) {
        var l = o.shared;
        if (np(a)) {
          var s = l.lanes;
          s = ap(s, e.pendingLanes);
          var v = bt(s, a);
          l.lanes = v, xf(e, v);
        }
      }
    }
    function r0(e, t) {
      var a = e.updateQueue, o = e.alternate;
      if (o !== null) {
        var l = o.updateQueue;
        if (a === l) {
          var s = null, v = null, y = a.firstBaseUpdate;
          if (y !== null) {
            var _ = y;
            do {
              var T = {
                eventTime: _.eventTime,
                lane: _.lane,
                tag: _.tag,
                payload: _.payload,
                callback: _.callback,
                next: null
              };
              v === null ? s = v = T : (v.next = T, v = T), _ = _.next;
            } while (_ !== null);
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
      var N = a.lastBaseUpdate;
      N === null ? a.firstBaseUpdate = t : N.next = t, a.lastBaseUpdate = t;
    }
    function Nw(e, t, a, o, l, s) {
      switch (a.tag) {
        case g2: {
          var v = a.payload;
          if (typeof v == "function") {
            p2();
            var y = v.call(s, o, l);
            {
              if (e.mode & an) {
                Rn(!0);
                try {
                  v.call(s, o, l);
                } finally {
                  Rn(!1);
                }
              }
              v2();
            }
            return y;
          }
          return v;
        }
        case e0:
          e.flags = e.flags & ~lr | rt;
        // Intentional fallthrough
        case y2: {
          var _ = a.payload, T;
          if (typeof _ == "function") {
            p2(), T = _.call(s, o, l);
            {
              if (e.mode & an) {
                Rn(!0);
                try {
                  _.call(s, o, l);
                } finally {
                  Rn(!1);
                }
              }
              v2();
            }
          } else
            T = _;
          return T == null ? o : wt({}, o, T);
        }
        case wm:
          return Rm = !0, o;
      }
      return o;
    }
    function Nm(e, t, a, o) {
      var l = e.updateQueue;
      Rm = !1, km = l.shared;
      var s = l.firstBaseUpdate, v = l.lastBaseUpdate, y = l.shared.pending;
      if (y !== null) {
        l.shared.pending = null;
        var _ = y, T = _.next;
        _.next = null, v === null ? s = T : v.next = T, v = _;
        var N = e.alternate;
        if (N !== null) {
          var I = N.updateQueue, z = I.lastBaseUpdate;
          z !== v && (z === null ? I.firstBaseUpdate = T : z.next = T, I.lastBaseUpdate = _);
        }
      }
      if (s !== null) {
        var G = l.baseState, X = ce, oe = null, Pe = null, st = null, nt = s;
        do {
          var It = nt.lane, Lt = nt.eventTime;
          if (Bl(o, It)) {
            if (st !== null) {
              var ie = {
                eventTime: Lt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: $t,
                tag: nt.tag,
                payload: nt.payload,
                callback: nt.callback,
                next: null
              };
              st = st.next = ie;
            }
            G = Nw(e, l, nt, G, t, a);
            var q = nt.callback;
            if (q !== null && // If the update was already committed, we should not queue its
            // callback again.
            nt.lane !== $t) {
              e.flags |= pn;
              var _e = l.effects;
              _e === null ? l.effects = [nt] : _e.push(nt);
            }
          } else {
            var B = {
              eventTime: Lt,
              lane: It,
              tag: nt.tag,
              payload: nt.payload,
              callback: nt.callback,
              next: null
            };
            st === null ? (Pe = st = B, oe = G) : st = st.next = B, X = bt(X, It);
          }
          if (nt = nt.next, nt === null) {
            if (y = l.shared.pending, y === null)
              break;
            var We = y, Fe = We.next;
            We.next = null, nt = Fe, l.lastBaseUpdate = We, l.shared.pending = null;
          }
        } while (!0);
        st === null && (oe = G), l.baseState = oe, l.firstBaseUpdate = Pe, l.lastBaseUpdate = st;
        var ht = l.shared.interleaved;
        if (ht !== null) {
          var Ct = ht;
          do
            X = bt(X, Ct.lane), Ct = Ct.next;
          while (Ct !== ht);
        } else s === null && (l.shared.lanes = ce);
        mv(X), e.lanes = X, e.memoizedState = G;
      }
      km = null;
    }
    function Mw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function S2() {
      Rm = !1;
    }
    function Mm() {
      return Rm;
    }
    function C2(e, t, a) {
      var o = t.effects;
      if (t.effects = null, o !== null)
        for (var l = 0; l < o.length; l++) {
          var s = o[l], v = s.callback;
          v !== null && (s.callback = null, Mw(v, a));
        }
    }
    var Bp = {}, es = Qu(Bp), qp = Qu(Bp), Om = Qu(Bp);
    function Dm(e) {
      if (e === Bp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function E2() {
      var e = Dm(Om.current);
      return e;
    }
    function a0(e, t) {
      va(Om, t, e), va(qp, e, e), va(es, Bp, e);
      var a = Yx(t);
      pa(es, e), va(es, a, e);
    }
    function Jf(e) {
      pa(es, e), pa(qp, e), pa(Om, e);
    }
    function o0() {
      var e = Dm(es.current);
      return e;
    }
    function x2(e) {
      Dm(Om.current);
      var t = Dm(es.current), a = Gx(t, e.type);
      t !== a && (va(qp, e, e), va(es, a, e));
    }
    function i0(e) {
      qp.current === e && (pa(es, e), pa(qp, e));
    }
    var Ow = 0, b2 = 1, w2 = 1, Wp = 2, Si = Qu(Ow);
    function l0(e, t) {
      return (e & t) !== 0;
    }
    function Zf(e) {
      return e & b2;
    }
    function u0(e, t) {
      return e & b2 | t;
    }
    function Dw(e, t) {
      return e | t;
    }
    function ts(e, t) {
      va(Si, t, e);
    }
    function ed(e) {
      pa(Si, e);
    }
    function Lw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Lm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ae) {
          var a = t.memoizedState;
          if (a !== null) {
            var o = a.dehydrated;
            if (o === null || $_(o) || Rg(o))
              return t;
          }
        } else if (t.tag === re && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & rt) !== ot;
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
    var Ka = (
      /*   */
      0
    ), Sr = (
      /* */
      1
    ), il = (
      /*  */
      2
    ), Cr = (
      /*    */
      4
    ), Yr = (
      /*   */
      8
    ), s0 = [];
    function c0() {
      for (var e = 0; e < s0.length; e++) {
        var t = s0[e];
        t._workInProgressVersionPrimary = null;
      }
      s0.length = 0;
    }
    function jw(e, t) {
      var a = t._getVersion, o = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, o] : e.mutableSourceEagerHydrationData.push(t, o);
    }
    var qe = f.ReactCurrentDispatcher, Yp = f.ReactCurrentBatchConfig, f0, td;
    f0 = /* @__PURE__ */ new Set();
    var gc = ce, on = null, Er = null, xr = null, jm = !1, Gp = !1, Qp = 0, Aw = 0, Uw = 25, le = null, Wo = null, ns = -1, d0 = !1;
    function Jt() {
      {
        var e = le;
        Wo === null ? Wo = [e] : Wo.push(e);
      }
    }
    function Le() {
      {
        var e = le;
        Wo !== null && (ns++, Wo[ns] !== e && zw(e));
      }
    }
    function nd(e) {
      e != null && !kt(e) && h("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", le, typeof e);
    }
    function zw(e) {
      {
        var t = gt(on);
        if (!f0.has(t) && (f0.add(t), Wo !== null)) {
          for (var a = "", o = 30, l = 0; l <= ns; l++) {
            for (var s = Wo[l], v = l === ns ? e : s, y = l + 1 + ". " + s; y.length < o; )
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
    function ha() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function p0(e, t) {
      if (d0)
        return !1;
      if (t === null)
        return h("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", le), !1;
      e.length !== t.length && h(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, le, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!he(e[a], t[a]))
          return !1;
      return !0;
    }
    function rd(e, t, a, o, l, s) {
      gc = s, on = t, Wo = e !== null ? e._debugHookTypes : null, ns = -1, d0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ce, e !== null && e.memoizedState !== null ? qe.current = Y2 : Wo !== null ? qe.current = W2 : qe.current = q2;
      var v = a(o, l);
      if (Gp) {
        var y = 0;
        do {
          if (Gp = !1, Qp = 0, y >= Uw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          y += 1, d0 = !1, Er = null, xr = null, t.updateQueue = null, ns = -1, qe.current = G2, v = a(o, l);
        } while (Gp);
      }
      qe.current = Ym, t._debugHookTypes = Wo;
      var _ = Er !== null && Er.next !== null;
      if (gc = ce, on = null, Er = null, xr = null, le = null, Wo = null, ns = -1, e !== null && (e.flags & Bn) !== (t.flags & Bn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Nt) !== it && h("Internal React error: Expected static flag was missing. Please notify the React team."), jm = !1, _)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function ad() {
      var e = Qp !== 0;
      return Qp = 0, e;
    }
    function R2(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & qt) !== it ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Bs(e.lanes, a);
    }
    function k2() {
      if (qe.current = Ym, jm) {
        for (var e = on.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        jm = !1;
      }
      gc = ce, on = null, Er = null, xr = null, Wo = null, ns = -1, le = null, F2 = !1, Gp = !1, Qp = 0;
    }
    function ll() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return xr === null ? on.memoizedState = xr = e : xr = xr.next = e, xr;
    }
    function Yo() {
      var e;
      if (Er === null) {
        var t = on.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Er.next;
      var a;
      if (xr === null ? a = on.memoizedState : a = xr.next, a !== null)
        xr = a, a = xr.next, Er = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Er = e;
        var o = {
          memoizedState: Er.memoizedState,
          baseState: Er.baseState,
          baseQueue: Er.baseQueue,
          queue: Er.queue,
          next: null
        };
        xr === null ? on.memoizedState = xr = o : xr = xr.next = o;
      }
      return xr;
    }
    function T2() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function v0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function h0(e, t, a) {
      var o = ll(), l;
      a !== void 0 ? l = a(t) : l = t, o.memoizedState = o.baseState = l;
      var s = {
        pending: null,
        interleaved: null,
        lanes: ce,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      o.queue = s;
      var v = s.dispatch = Vw.bind(null, on, s);
      return [o.memoizedState, v];
    }
    function m0(e, t, a) {
      var o = Yo(), l = o.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = Er, v = s.baseQueue, y = l.pending;
      if (y !== null) {
        if (v !== null) {
          var _ = v.next, T = y.next;
          v.next = T, y.next = _;
        }
        s.baseQueue !== v && h("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = v = y, l.pending = null;
      }
      if (v !== null) {
        var N = v.next, I = s.baseState, z = null, G = null, X = null, oe = N;
        do {
          var Pe = oe.lane;
          if (Bl(gc, Pe)) {
            if (X !== null) {
              var nt = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: $t,
                action: oe.action,
                hasEagerState: oe.hasEagerState,
                eagerState: oe.eagerState,
                next: null
              };
              X = X.next = nt;
            }
            if (oe.hasEagerState)
              I = oe.eagerState;
            else {
              var It = oe.action;
              I = e(I, It);
            }
          } else {
            var st = {
              lane: Pe,
              action: oe.action,
              hasEagerState: oe.hasEagerState,
              eagerState: oe.eagerState,
              next: null
            };
            X === null ? (G = X = st, z = I) : X = X.next = st, on.lanes = bt(on.lanes, Pe), mv(Pe);
          }
          oe = oe.next;
        } while (oe !== null && oe !== N);
        X === null ? z = I : X.next = G, he(I, o.memoizedState) || av(), o.memoizedState = I, o.baseState = z, o.baseQueue = X, l.lastRenderedState = I;
      }
      var Lt = l.interleaved;
      if (Lt !== null) {
        var B = Lt;
        do {
          var ie = B.lane;
          on.lanes = bt(on.lanes, ie), mv(ie), B = B.next;
        } while (B !== Lt);
      } else v === null && (l.lanes = ce);
      var q = l.dispatch;
      return [o.memoizedState, q];
    }
    function y0(e, t, a) {
      var o = Yo(), l = o.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, v = l.pending, y = o.memoizedState;
      if (v !== null) {
        l.pending = null;
        var _ = v.next, T = _;
        do {
          var N = T.action;
          y = e(y, N), T = T.next;
        } while (T !== _);
        he(y, o.memoizedState) || av(), o.memoizedState = y, o.baseQueue === null && (o.baseState = y), l.lastRenderedState = y;
      }
      return [y, s];
    }
    function l7(e, t, a) {
    }
    function u7(e, t, a) {
    }
    function g0(e, t, a) {
      var o = on, l = ll(), s, v = Wr();
      if (v) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), td || s !== a() && (h("The result of getServerSnapshot should be cached to avoid an infinite loop"), td = !0);
      } else {
        if (s = t(), !td) {
          var y = t();
          he(s, y) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), td = !0);
        }
        var _ = dy();
        if (_ === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Cf(_, gc) || N2(o, t, s);
      }
      l.memoizedState = s;
      var T = {
        value: s,
        getSnapshot: t
      };
      return l.queue = T, Im(O2.bind(null, o, T, e), [e]), o.flags |= ra, Kp(Sr | Yr, M2.bind(null, o, T, s, t), void 0, null), s;
    }
    function Am(e, t, a) {
      var o = on, l = Yo(), s = t();
      if (!td) {
        var v = t();
        he(s, v) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), td = !0);
      }
      var y = l.memoizedState, _ = !he(y, s);
      _ && (l.memoizedState = s, av());
      var T = l.queue;
      if (Jp(O2.bind(null, o, T, e), [e]), T.getSnapshot !== t || _ || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      xr !== null && xr.memoizedState.tag & Sr) {
        o.flags |= ra, Kp(Sr | Yr, M2.bind(null, o, T, s, t), void 0, null);
        var N = dy();
        if (N === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Cf(N, gc) || N2(o, t, s);
      }
      return s;
    }
    function N2(e, t, a) {
      e.flags |= Lu;
      var o = {
        getSnapshot: t,
        value: a
      }, l = on.updateQueue;
      if (l === null)
        l = T2(), on.updateQueue = l, l.stores = [o];
      else {
        var s = l.stores;
        s === null ? l.stores = [o] : s.push(o);
      }
    }
    function M2(e, t, a, o) {
      t.value = a, t.getSnapshot = o, D2(t) && L2(e);
    }
    function O2(e, t, a) {
      var o = function() {
        D2(t) && L2(e);
      };
      return a(o);
    }
    function D2(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var o = t();
        return !he(a, o);
      } catch {
        return !0;
      }
    }
    function L2(e) {
      var t = Qa(e, vt);
      t !== null && kr(t, e, vt, un);
    }
    function Um(e) {
      var t = ll();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ce,
        dispatch: null,
        lastRenderedReducer: v0,
        lastRenderedState: e
      };
      t.queue = a;
      var o = a.dispatch = $w.bind(null, on, a);
      return [t.memoizedState, o];
    }
    function _0(e) {
      return m0(v0);
    }
    function S0(e) {
      return y0(v0);
    }
    function Kp(e, t, a, o) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: o,
        // Circular
        next: null
      }, s = on.updateQueue;
      if (s === null)
        s = T2(), on.updateQueue = s, s.lastEffect = l.next = l;
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
    function C0(e) {
      var t = ll();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function zm(e) {
      var t = Yo();
      return t.memoizedState;
    }
    function Xp(e, t, a, o) {
      var l = ll(), s = o === void 0 ? null : o;
      on.flags |= e, l.memoizedState = Kp(Sr | t, a, void 0, s);
    }
    function Pm(e, t, a, o) {
      var l = Yo(), s = o === void 0 ? null : o, v = void 0;
      if (Er !== null) {
        var y = Er.memoizedState;
        if (v = y.destroy, s !== null) {
          var _ = y.deps;
          if (p0(s, _)) {
            l.memoizedState = Kp(t, a, v, s);
            return;
          }
        }
      }
      on.flags |= e, l.memoizedState = Kp(Sr | t, a, v, s);
    }
    function Im(e, t) {
      return (on.mode & qt) !== it ? Xp(jo | ra | Yc, Yr, e, t) : Xp(ra | Yc, Yr, e, t);
    }
    function Jp(e, t) {
      return Pm(ra, Yr, e, t);
    }
    function E0(e, t) {
      return Xp(Ut, il, e, t);
    }
    function Fm(e, t) {
      return Pm(Ut, il, e, t);
    }
    function x0(e, t) {
      var a = Ut;
      return a |= ui, (on.mode & qt) !== it && (a |= $i), Xp(a, Cr, e, t);
    }
    function Vm(e, t) {
      return Pm(Ut, Cr, e, t);
    }
    function j2(e, t) {
      if (typeof t == "function") {
        var a = t, o = e();
        return a(o), function() {
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
    function b0(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var o = a != null ? a.concat([e]) : null, l = Ut;
      return l |= ui, (on.mode & qt) !== it && (l |= $i), Xp(l, Cr, j2.bind(null, t, e), o);
    }
    function $m(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var o = a != null ? a.concat([e]) : null;
      return Pm(Ut, Cr, j2.bind(null, t, e), o);
    }
    function Pw(e, t) {
    }
    var Hm = Pw;
    function w0(e, t) {
      var a = ll(), o = t === void 0 ? null : t;
      return a.memoizedState = [e, o], e;
    }
    function Bm(e, t) {
      var a = Yo(), o = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && o !== null) {
        var s = l[1];
        if (p0(o, s))
          return l[0];
      }
      return a.memoizedState = [e, o], e;
    }
    function R0(e, t) {
      var a = ll(), o = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, o], l;
    }
    function qm(e, t) {
      var a = Yo(), o = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && o !== null) {
        var s = l[1];
        if (p0(o, s))
          return l[0];
      }
      var v = e();
      return a.memoizedState = [v, o], v;
    }
    function k0(e) {
      var t = ll();
      return t.memoizedState = e, e;
    }
    function A2(e) {
      var t = Yo(), a = Er, o = a.memoizedState;
      return z2(t, o, e);
    }
    function U2(e) {
      var t = Yo();
      if (Er === null)
        return t.memoizedState = e, e;
      var a = Er.memoizedState;
      return z2(t, a, e);
    }
    function z2(e, t, a) {
      var o = !ep(gc);
      if (o) {
        if (!he(a, t)) {
          var l = rp();
          on.lanes = bt(on.lanes, l), mv(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, av()), e.memoizedState = a, a;
    }
    function Iw(e, t, a) {
      var o = Wa();
      Yn(Eh(o, Po)), e(!0);
      var l = Yp.transition;
      Yp.transition = {};
      var s = Yp.transition;
      Yp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Yn(o), Yp.transition = l, l === null && s._updatedFibers) {
          var v = s._updatedFibers.size;
          v > 10 && C("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function T0() {
      var e = Um(!1), t = e[0], a = e[1], o = Iw.bind(null, a), l = ll();
      return l.memoizedState = o, [t, o];
    }
    function P2() {
      var e = _0(), t = e[0], a = Yo(), o = a.memoizedState;
      return [t, o];
    }
    function I2() {
      var e = S0(), t = e[0], a = Yo(), o = a.memoizedState;
      return [t, o];
    }
    var F2 = !1;
    function Fw() {
      return F2;
    }
    function N0() {
      var e = ll(), t = dy(), a = t.identifierPrefix, o;
      if (Wr()) {
        var l = rw();
        o = ":" + a + "R" + l;
        var s = Qp++;
        s > 0 && (o += "H" + s.toString(32)), o += ":";
      } else {
        var v = Aw++;
        o = ":" + a + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = o, o;
    }
    function Wm() {
      var e = Yo(), t = e.memoizedState;
      return t;
    }
    function Vw(e, t, a) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var o = ls(e), l = {
        lane: o,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (V2(e))
        $2(t, l);
      else {
        var s = m2(e, t, l, o);
        if (s !== null) {
          var v = Ma();
          kr(s, e, o, v), H2(s, t, o);
        }
      }
      B2(e, o);
    }
    function $w(e, t, a) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var o = ls(e), l = {
        lane: o,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (V2(e))
        $2(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === ce && (s === null || s.lanes === ce)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var y;
            y = qe.current, qe.current = Ci;
            try {
              var _ = t.lastRenderedState, T = v(_, a);
              if (l.hasEagerState = !0, l.eagerState = T, he(T, _)) {
                Rw(e, t, l, o);
                return;
              }
            } catch {
            } finally {
              qe.current = y;
            }
          }
        }
        var N = m2(e, t, l, o);
        if (N !== null) {
          var I = Ma();
          kr(N, e, o, I), H2(N, t, o);
        }
      }
      B2(e, o);
    }
    function V2(e) {
      var t = e.alternate;
      return e === on || t !== null && t === on;
    }
    function $2(e, t) {
      Gp = jm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function H2(e, t, a) {
      if (np(a)) {
        var o = t.lanes;
        o = ap(o, e.pendingLanes);
        var l = bt(o, a);
        t.lanes = l, xf(e, l);
      }
    }
    function B2(e, t, a) {
      js(e, t);
    }
    var Ym = {
      readContext: fr,
      useCallback: ha,
      useContext: ha,
      useEffect: ha,
      useImperativeHandle: ha,
      useInsertionEffect: ha,
      useLayoutEffect: ha,
      useMemo: ha,
      useReducer: ha,
      useRef: ha,
      useState: ha,
      useDebugValue: ha,
      useDeferredValue: ha,
      useTransition: ha,
      useMutableSource: ha,
      useSyncExternalStore: ha,
      useId: ha,
      unstable_isNewReconciler: ee
    }, q2 = null, W2 = null, Y2 = null, G2 = null, ul = null, Ci = null, Gm = null;
    {
      var M0 = function() {
        h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, St = function() {
        h("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      q2 = {
        readContext: function(e) {
          return fr(e);
        },
        useCallback: function(e, t) {
          return le = "useCallback", Jt(), nd(t), w0(e, t);
        },
        useContext: function(e) {
          return le = "useContext", Jt(), fr(e);
        },
        useEffect: function(e, t) {
          return le = "useEffect", Jt(), nd(t), Im(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return le = "useImperativeHandle", Jt(), nd(a), b0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return le = "useInsertionEffect", Jt(), nd(t), E0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return le = "useLayoutEffect", Jt(), nd(t), x0(e, t);
        },
        useMemo: function(e, t) {
          le = "useMemo", Jt(), nd(t);
          var a = qe.current;
          qe.current = ul;
          try {
            return R0(e, t);
          } finally {
            qe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          le = "useReducer", Jt();
          var o = qe.current;
          qe.current = ul;
          try {
            return h0(e, t, a);
          } finally {
            qe.current = o;
          }
        },
        useRef: function(e) {
          return le = "useRef", Jt(), C0(e);
        },
        useState: function(e) {
          le = "useState", Jt();
          var t = qe.current;
          qe.current = ul;
          try {
            return Um(e);
          } finally {
            qe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return le = "useDebugValue", Jt(), void 0;
        },
        useDeferredValue: function(e) {
          return le = "useDeferredValue", Jt(), k0(e);
        },
        useTransition: function() {
          return le = "useTransition", Jt(), T0();
        },
        useMutableSource: function(e, t, a) {
          return le = "useMutableSource", Jt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return le = "useSyncExternalStore", Jt(), g0(e, t, a);
        },
        useId: function() {
          return le = "useId", Jt(), N0();
        },
        unstable_isNewReconciler: ee
      }, W2 = {
        readContext: function(e) {
          return fr(e);
        },
        useCallback: function(e, t) {
          return le = "useCallback", Le(), w0(e, t);
        },
        useContext: function(e) {
          return le = "useContext", Le(), fr(e);
        },
        useEffect: function(e, t) {
          return le = "useEffect", Le(), Im(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return le = "useImperativeHandle", Le(), b0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return le = "useInsertionEffect", Le(), E0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return le = "useLayoutEffect", Le(), x0(e, t);
        },
        useMemo: function(e, t) {
          le = "useMemo", Le();
          var a = qe.current;
          qe.current = ul;
          try {
            return R0(e, t);
          } finally {
            qe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          le = "useReducer", Le();
          var o = qe.current;
          qe.current = ul;
          try {
            return h0(e, t, a);
          } finally {
            qe.current = o;
          }
        },
        useRef: function(e) {
          return le = "useRef", Le(), C0(e);
        },
        useState: function(e) {
          le = "useState", Le();
          var t = qe.current;
          qe.current = ul;
          try {
            return Um(e);
          } finally {
            qe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return le = "useDebugValue", Le(), void 0;
        },
        useDeferredValue: function(e) {
          return le = "useDeferredValue", Le(), k0(e);
        },
        useTransition: function() {
          return le = "useTransition", Le(), T0();
        },
        useMutableSource: function(e, t, a) {
          return le = "useMutableSource", Le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return le = "useSyncExternalStore", Le(), g0(e, t, a);
        },
        useId: function() {
          return le = "useId", Le(), N0();
        },
        unstable_isNewReconciler: ee
      }, Y2 = {
        readContext: function(e) {
          return fr(e);
        },
        useCallback: function(e, t) {
          return le = "useCallback", Le(), Bm(e, t);
        },
        useContext: function(e) {
          return le = "useContext", Le(), fr(e);
        },
        useEffect: function(e, t) {
          return le = "useEffect", Le(), Jp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return le = "useImperativeHandle", Le(), $m(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return le = "useInsertionEffect", Le(), Fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return le = "useLayoutEffect", Le(), Vm(e, t);
        },
        useMemo: function(e, t) {
          le = "useMemo", Le();
          var a = qe.current;
          qe.current = Ci;
          try {
            return qm(e, t);
          } finally {
            qe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          le = "useReducer", Le();
          var o = qe.current;
          qe.current = Ci;
          try {
            return m0(e, t, a);
          } finally {
            qe.current = o;
          }
        },
        useRef: function(e) {
          return le = "useRef", Le(), zm();
        },
        useState: function(e) {
          le = "useState", Le();
          var t = qe.current;
          qe.current = Ci;
          try {
            return _0(e);
          } finally {
            qe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return le = "useDebugValue", Le(), Hm();
        },
        useDeferredValue: function(e) {
          return le = "useDeferredValue", Le(), A2(e);
        },
        useTransition: function() {
          return le = "useTransition", Le(), P2();
        },
        useMutableSource: function(e, t, a) {
          return le = "useMutableSource", Le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return le = "useSyncExternalStore", Le(), Am(e, t);
        },
        useId: function() {
          return le = "useId", Le(), Wm();
        },
        unstable_isNewReconciler: ee
      }, G2 = {
        readContext: function(e) {
          return fr(e);
        },
        useCallback: function(e, t) {
          return le = "useCallback", Le(), Bm(e, t);
        },
        useContext: function(e) {
          return le = "useContext", Le(), fr(e);
        },
        useEffect: function(e, t) {
          return le = "useEffect", Le(), Jp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return le = "useImperativeHandle", Le(), $m(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return le = "useInsertionEffect", Le(), Fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return le = "useLayoutEffect", Le(), Vm(e, t);
        },
        useMemo: function(e, t) {
          le = "useMemo", Le();
          var a = qe.current;
          qe.current = Gm;
          try {
            return qm(e, t);
          } finally {
            qe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          le = "useReducer", Le();
          var o = qe.current;
          qe.current = Gm;
          try {
            return y0(e, t, a);
          } finally {
            qe.current = o;
          }
        },
        useRef: function(e) {
          return le = "useRef", Le(), zm();
        },
        useState: function(e) {
          le = "useState", Le();
          var t = qe.current;
          qe.current = Gm;
          try {
            return S0(e);
          } finally {
            qe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return le = "useDebugValue", Le(), Hm();
        },
        useDeferredValue: function(e) {
          return le = "useDeferredValue", Le(), U2(e);
        },
        useTransition: function() {
          return le = "useTransition", Le(), I2();
        },
        useMutableSource: function(e, t, a) {
          return le = "useMutableSource", Le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return le = "useSyncExternalStore", Le(), Am(e, t);
        },
        useId: function() {
          return le = "useId", Le(), Wm();
        },
        unstable_isNewReconciler: ee
      }, ul = {
        readContext: function(e) {
          return M0(), fr(e);
        },
        useCallback: function(e, t) {
          return le = "useCallback", St(), Jt(), w0(e, t);
        },
        useContext: function(e) {
          return le = "useContext", St(), Jt(), fr(e);
        },
        useEffect: function(e, t) {
          return le = "useEffect", St(), Jt(), Im(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return le = "useImperativeHandle", St(), Jt(), b0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return le = "useInsertionEffect", St(), Jt(), E0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return le = "useLayoutEffect", St(), Jt(), x0(e, t);
        },
        useMemo: function(e, t) {
          le = "useMemo", St(), Jt();
          var a = qe.current;
          qe.current = ul;
          try {
            return R0(e, t);
          } finally {
            qe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          le = "useReducer", St(), Jt();
          var o = qe.current;
          qe.current = ul;
          try {
            return h0(e, t, a);
          } finally {
            qe.current = o;
          }
        },
        useRef: function(e) {
          return le = "useRef", St(), Jt(), C0(e);
        },
        useState: function(e) {
          le = "useState", St(), Jt();
          var t = qe.current;
          qe.current = ul;
          try {
            return Um(e);
          } finally {
            qe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return le = "useDebugValue", St(), Jt(), void 0;
        },
        useDeferredValue: function(e) {
          return le = "useDeferredValue", St(), Jt(), k0(e);
        },
        useTransition: function() {
          return le = "useTransition", St(), Jt(), T0();
        },
        useMutableSource: function(e, t, a) {
          return le = "useMutableSource", St(), Jt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return le = "useSyncExternalStore", St(), Jt(), g0(e, t, a);
        },
        useId: function() {
          return le = "useId", St(), Jt(), N0();
        },
        unstable_isNewReconciler: ee
      }, Ci = {
        readContext: function(e) {
          return M0(), fr(e);
        },
        useCallback: function(e, t) {
          return le = "useCallback", St(), Le(), Bm(e, t);
        },
        useContext: function(e) {
          return le = "useContext", St(), Le(), fr(e);
        },
        useEffect: function(e, t) {
          return le = "useEffect", St(), Le(), Jp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return le = "useImperativeHandle", St(), Le(), $m(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return le = "useInsertionEffect", St(), Le(), Fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return le = "useLayoutEffect", St(), Le(), Vm(e, t);
        },
        useMemo: function(e, t) {
          le = "useMemo", St(), Le();
          var a = qe.current;
          qe.current = Ci;
          try {
            return qm(e, t);
          } finally {
            qe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          le = "useReducer", St(), Le();
          var o = qe.current;
          qe.current = Ci;
          try {
            return m0(e, t, a);
          } finally {
            qe.current = o;
          }
        },
        useRef: function(e) {
          return le = "useRef", St(), Le(), zm();
        },
        useState: function(e) {
          le = "useState", St(), Le();
          var t = qe.current;
          qe.current = Ci;
          try {
            return _0(e);
          } finally {
            qe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return le = "useDebugValue", St(), Le(), Hm();
        },
        useDeferredValue: function(e) {
          return le = "useDeferredValue", St(), Le(), A2(e);
        },
        useTransition: function() {
          return le = "useTransition", St(), Le(), P2();
        },
        useMutableSource: function(e, t, a) {
          return le = "useMutableSource", St(), Le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return le = "useSyncExternalStore", St(), Le(), Am(e, t);
        },
        useId: function() {
          return le = "useId", St(), Le(), Wm();
        },
        unstable_isNewReconciler: ee
      }, Gm = {
        readContext: function(e) {
          return M0(), fr(e);
        },
        useCallback: function(e, t) {
          return le = "useCallback", St(), Le(), Bm(e, t);
        },
        useContext: function(e) {
          return le = "useContext", St(), Le(), fr(e);
        },
        useEffect: function(e, t) {
          return le = "useEffect", St(), Le(), Jp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return le = "useImperativeHandle", St(), Le(), $m(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return le = "useInsertionEffect", St(), Le(), Fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return le = "useLayoutEffect", St(), Le(), Vm(e, t);
        },
        useMemo: function(e, t) {
          le = "useMemo", St(), Le();
          var a = qe.current;
          qe.current = Ci;
          try {
            return qm(e, t);
          } finally {
            qe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          le = "useReducer", St(), Le();
          var o = qe.current;
          qe.current = Ci;
          try {
            return y0(e, t, a);
          } finally {
            qe.current = o;
          }
        },
        useRef: function(e) {
          return le = "useRef", St(), Le(), zm();
        },
        useState: function(e) {
          le = "useState", St(), Le();
          var t = qe.current;
          qe.current = Ci;
          try {
            return S0(e);
          } finally {
            qe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return le = "useDebugValue", St(), Le(), Hm();
        },
        useDeferredValue: function(e) {
          return le = "useDeferredValue", St(), Le(), U2(e);
        },
        useTransition: function() {
          return le = "useTransition", St(), Le(), I2();
        },
        useMutableSource: function(e, t, a) {
          return le = "useMutableSource", St(), Le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return le = "useSyncExternalStore", St(), Le(), Am(e, t);
        },
        useId: function() {
          return le = "useId", St(), Le(), Wm();
        },
        unstable_isNewReconciler: ee
      };
    }
    var rs = p.unstable_now, Q2 = 0, Qm = -1, Zp = -1, Km = -1, O0 = !1, Xm = !1;
    function K2() {
      return O0;
    }
    function Hw() {
      Xm = !0;
    }
    function Bw() {
      O0 = !1, Xm = !1;
    }
    function qw() {
      O0 = Xm, Xm = !1;
    }
    function X2() {
      return Q2;
    }
    function J2() {
      Q2 = rs();
    }
    function D0(e) {
      Zp = rs(), e.actualStartTime < 0 && (e.actualStartTime = rs());
    }
    function Z2(e) {
      Zp = -1;
    }
    function Jm(e, t) {
      if (Zp >= 0) {
        var a = rs() - Zp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Zp = -1;
      }
    }
    function sl(e) {
      if (Qm >= 0) {
        var t = rs() - Qm;
        Qm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case U:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
            case De:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function L0(e) {
      if (Km >= 0) {
        var t = rs() - Km;
        Km = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case U:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
            case De:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function cl() {
      Qm = rs();
    }
    function j0() {
      Km = rs();
    }
    function A0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Ei(e, t) {
      if (e && e.defaultProps) {
        var a = wt({}, t), o = e.defaultProps;
        for (var l in o)
          a[l] === void 0 && (a[l] = o[l]);
        return a;
      }
      return t;
    }
    var U0 = {}, z0, P0, I0, F0, V0, eS, Zm, $0, H0, B0, ev;
    {
      z0 = /* @__PURE__ */ new Set(), P0 = /* @__PURE__ */ new Set(), I0 = /* @__PURE__ */ new Set(), F0 = /* @__PURE__ */ new Set(), $0 = /* @__PURE__ */ new Set(), V0 = /* @__PURE__ */ new Set(), H0 = /* @__PURE__ */ new Set(), B0 = /* @__PURE__ */ new Set(), ev = /* @__PURE__ */ new Set();
      var tS = /* @__PURE__ */ new Set();
      Zm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          tS.has(a) || (tS.add(a), h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, eS = function(e, t) {
        if (t === void 0) {
          var a = Ft(e) || "Component";
          V0.has(a) || (V0.add(a), h("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(U0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(U0);
    }
    function q0(e, t, a, o) {
      var l = e.memoizedState, s = a(o, l);
      {
        if (e.mode & an) {
          Rn(!0);
          try {
            s = a(o, l);
          } finally {
            Rn(!1);
          }
        }
        eS(t, s);
      }
      var v = s == null ? l : wt({}, l, s);
      if (e.memoizedState = v, e.lanes === ce) {
        var y = e.updateQueue;
        y.baseState = v;
      }
    }
    var W0 = {
      isMounted: ih,
      enqueueSetState: function(e, t, a) {
        var o = Du(e), l = Ma(), s = ls(o), v = nu(l, s);
        v.payload = t, a != null && (Zm(a, "setState"), v.callback = a);
        var y = Zu(o, v, s);
        y !== null && (kr(y, o, s, l), Tm(y, o, s)), js(o, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var o = Du(e), l = Ma(), s = ls(o), v = nu(l, s);
        v.tag = g2, v.payload = t, a != null && (Zm(a, "replaceState"), v.callback = a);
        var y = Zu(o, v, s);
        y !== null && (kr(y, o, s, l), Tm(y, o, s)), js(o, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Du(e), o = Ma(), l = ls(a), s = nu(o, l);
        s.tag = wm, t != null && (Zm(t, "forceUpdate"), s.callback = t);
        var v = Zu(a, s, l);
        v !== null && (kr(v, a, l, o), Tm(v, a, l)), ef(a, l);
      }
    };
    function nS(e, t, a, o, l, s, v) {
      var y = e.stateNode;
      if (typeof y.shouldComponentUpdate == "function") {
        var _ = y.shouldComponentUpdate(o, s, v);
        {
          if (e.mode & an) {
            Rn(!0);
            try {
              _ = y.shouldComponentUpdate(o, s, v);
            } finally {
              Rn(!1);
            }
          }
          _ === void 0 && h("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ft(t) || "Component");
        }
        return _;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Xe(a, o) || !Xe(l, s) : !0;
    }
    function Ww(e, t, a) {
      var o = e.stateNode;
      {
        var l = Ft(t) || "Component", s = o.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? h("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : h("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), o.getInitialState && !o.getInitialState.isReactClassApproved && !o.state && h("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), o.getDefaultProps && !o.getDefaultProps.isReactClassApproved && h("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), o.propTypes && h("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), o.contextType && h("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), t.childContextTypes && !ev.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & an) === it && (ev.add(t), h(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), t.contextTypes && !ev.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & an) === it && (ev.add(t), h(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), o.contextTypes && h("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !H0.has(t) && (H0.add(t), h("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof o.componentShouldUpdate == "function" && h("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof o.shouldComponentUpdate < "u" && h("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ft(t) || "A pure component"), typeof o.componentDidUnmount == "function" && h("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof o.componentDidReceiveProps == "function" && h("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof o.componentWillRecieveProps == "function" && h("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof o.UNSAFE_componentWillRecieveProps == "function" && h("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var v = o.props !== a;
        o.props !== void 0 && v && h("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), o.defaultProps && h("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof o.getSnapshotBeforeUpdate == "function" && typeof o.componentDidUpdate != "function" && !I0.has(t) && (I0.add(t), h("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ft(t))), typeof o.getDerivedStateFromProps == "function" && h("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof o.getDerivedStateFromError == "function" && h("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && h("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var y = o.state;
        y && (typeof y != "object" || kt(y)) && h("%s.state: must be set to an object or null", l), typeof o.getChildContext == "function" && typeof t.childContextTypes != "object" && h("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function rS(e, t) {
      t.updater = W0, e.stateNode = t, Ml(t, e), t._reactInternalInstance = U0;
    }
    function aS(e, t, a) {
      var o = !1, l = go, s = go, v = t.contextType;
      if ("contextType" in t) {
        var y = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === j && v._context === void 0
        );
        if (!y && !B0.has(t)) {
          B0.add(t);
          var _ = "";
          v === void 0 ? _ = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? _ = " However, it is set to a " + typeof v + "." : v.$$typeof === wo ? _ = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? _ = " Did you accidentally pass the Context.Consumer instead?" : _ = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", h("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ft(t) || "Component", _);
        }
      }
      if (typeof v == "object" && v !== null)
        s = fr(v);
      else {
        l = Bf(e, t, !0);
        var T = t.contextTypes;
        o = T != null, s = o ? qf(e, l) : go;
      }
      var N = new t(a, s);
      if (e.mode & an) {
        Rn(!0);
        try {
          N = new t(a, s);
        } finally {
          Rn(!1);
        }
      }
      var I = e.memoizedState = N.state !== null && N.state !== void 0 ? N.state : null;
      rS(e, N);
      {
        if (typeof t.getDerivedStateFromProps == "function" && I === null) {
          var z = Ft(t) || "Component";
          P0.has(z) || (P0.add(z), h("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", z, N.state === null ? "null" : "undefined", z));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof N.getSnapshotBeforeUpdate == "function") {
          var G = null, X = null, oe = null;
          if (typeof N.componentWillMount == "function" && N.componentWillMount.__suppressDeprecationWarning !== !0 ? G = "componentWillMount" : typeof N.UNSAFE_componentWillMount == "function" && (G = "UNSAFE_componentWillMount"), typeof N.componentWillReceiveProps == "function" && N.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? X = "componentWillReceiveProps" : typeof N.UNSAFE_componentWillReceiveProps == "function" && (X = "UNSAFE_componentWillReceiveProps"), typeof N.componentWillUpdate == "function" && N.componentWillUpdate.__suppressDeprecationWarning !== !0 ? oe = "componentWillUpdate" : typeof N.UNSAFE_componentWillUpdate == "function" && (oe = "UNSAFE_componentWillUpdate"), G !== null || X !== null || oe !== null) {
            var Pe = Ft(t) || "Component", st = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            F0.has(Pe) || (F0.add(Pe), h(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Pe, st, G !== null ? `
  ` + G : "", X !== null ? `
  ` + X : "", oe !== null ? `
  ` + oe : ""));
          }
        }
      }
      return o && Y_(e, l, s), N;
    }
    function Yw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (h("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", gt(e) || "Component"), W0.enqueueReplaceState(t, t.state, null));
    }
    function oS(e, t, a, o) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, o), t.state !== l) {
        {
          var s = gt(e) || "Component";
          z0.has(s) || (z0.add(s), h("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        W0.enqueueReplaceState(t, t.state, null);
      }
    }
    function Y0(e, t, a, o) {
      Ww(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = {}, n0(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = fr(s);
      else {
        var v = Bf(e, t, !0);
        l.context = qf(e, v);
      }
      {
        if (l.state === a) {
          var y = Ft(t) || "Component";
          $0.has(y) || ($0.add(y), h("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", y));
        }
        e.mode & an && _i.recordLegacyContextWarning(e, l), _i.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var _ = t.getDerivedStateFromProps;
      if (typeof _ == "function" && (q0(e, t, _, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (Yw(e, l), Nm(e, a, l, o), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var T = Ut;
        T |= ui, (e.mode & qt) !== it && (T |= $i), e.flags |= T;
      }
    }
    function Gw(e, t, a, o) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var v = l.context, y = t.contextType, _ = go;
      if (typeof y == "object" && y !== null)
        _ = fr(y);
      else {
        var T = Bf(e, t, !0);
        _ = qf(e, T);
      }
      var N = t.getDerivedStateFromProps, I = typeof N == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !I && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || v !== _) && oS(e, l, a, _), S2();
      var z = e.memoizedState, G = l.state = z;
      if (Nm(e, a, l, o), G = e.memoizedState, s === a && z === G && !cm() && !Mm()) {
        if (typeof l.componentDidMount == "function") {
          var X = Ut;
          X |= ui, (e.mode & qt) !== it && (X |= $i), e.flags |= X;
        }
        return !1;
      }
      typeof N == "function" && (q0(e, t, N, a), G = e.memoizedState);
      var oe = Mm() || nS(e, t, s, a, z, G, _);
      if (oe) {
        if (!I && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var Pe = Ut;
          Pe |= ui, (e.mode & qt) !== it && (Pe |= $i), e.flags |= Pe;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var st = Ut;
          st |= ui, (e.mode & qt) !== it && (st |= $i), e.flags |= st;
        }
        e.memoizedProps = a, e.memoizedState = G;
      }
      return l.props = a, l.state = G, l.context = _, oe;
    }
    function Qw(e, t, a, o, l) {
      var s = t.stateNode;
      _2(e, t);
      var v = t.memoizedProps, y = t.type === t.elementType ? v : Ei(t.type, v);
      s.props = y;
      var _ = t.pendingProps, T = s.context, N = a.contextType, I = go;
      if (typeof N == "object" && N !== null)
        I = fr(N);
      else {
        var z = Bf(t, a, !0);
        I = qf(t, z);
      }
      var G = a.getDerivedStateFromProps, X = typeof G == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !X && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (v !== _ || T !== I) && oS(t, s, o, I), S2();
      var oe = t.memoizedState, Pe = s.state = oe;
      if (Nm(t, o, s, l), Pe = t.memoizedState, v === _ && oe === Pe && !cm() && !Mm() && !Me)
        return typeof s.componentDidUpdate == "function" && (v !== e.memoizedProps || oe !== e.memoizedState) && (t.flags |= Ut), typeof s.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || oe !== e.memoizedState) && (t.flags |= er), !1;
      typeof G == "function" && (q0(t, a, G, o), Pe = t.memoizedState);
      var st = Mm() || nS(t, a, y, o, oe, Pe, I) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Me;
      return st ? (!X && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(o, Pe, I), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(o, Pe, I)), typeof s.componentDidUpdate == "function" && (t.flags |= Ut), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= er)) : (typeof s.componentDidUpdate == "function" && (v !== e.memoizedProps || oe !== e.memoizedState) && (t.flags |= Ut), typeof s.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || oe !== e.memoizedState) && (t.flags |= er), t.memoizedProps = o, t.memoizedState = Pe), s.props = o, s.state = Pe, s.context = I, st;
    }
    function _c(e, t) {
      return {
        value: e,
        source: t,
        stack: ni(t),
        digest: null
      };
    }
    function G0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Kw(e, t) {
      return !0;
    }
    function Q0(e, t) {
      try {
        var a = Kw(e, t);
        if (a === !1)
          return;
        var o = t.value, l = t.source, s = t.stack, v = s !== null ? s : "";
        if (o != null && o._suppressLogging) {
          if (e.tag === k)
            return;
          console.error(o);
        }
        var y = l ? gt(l) : null, _ = y ? "The above error occurred in the <" + y + "> component:" : "The above error occurred in one of your React components:", T;
        if (e.tag === U)
          T = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var N = gt(e) || "Anonymous";
          T = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + N + ".");
        }
        var I = _ + `
` + v + `

` + ("" + T);
        console.error(I);
      } catch (z) {
        setTimeout(function() {
          throw z;
        });
      }
    }
    var Xw = typeof WeakMap == "function" ? WeakMap : Map;
    function iS(e, t, a) {
      var o = nu(un, a);
      o.tag = e0, o.payload = {
        element: null
      };
      var l = t.value;
      return o.callback = function() {
        Hk(l), Q0(e, t);
      }, o;
    }
    function K0(e, t, a) {
      var o = nu(un, a);
      o.tag = e0;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        o.payload = function() {
          return l(s);
        }, o.callback = function() {
          yC(e), Q0(e, t);
        };
      }
      var v = e.stateNode;
      return v !== null && typeof v.componentDidCatch == "function" && (o.callback = function() {
        yC(e), Q0(e, t), typeof l != "function" && Vk(this);
        var _ = t.value, T = t.stack;
        this.componentDidCatch(_, {
          componentStack: T !== null ? T : ""
        }), typeof l != "function" && (sa(e.lanes, vt) || h("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", gt(e) || "Unknown"));
      }), o;
    }
    function lS(e, t, a) {
      var o = e.pingCache, l;
      if (o === null ? (o = e.pingCache = new Xw(), l = /* @__PURE__ */ new Set(), o.set(t, l)) : (l = o.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), o.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = Bk.bind(null, e, t, a);
        la && yv(e, a), t.then(s, s);
      }
    }
    function Jw(e, t, a, o) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function Zw(e, t) {
      var a = e.tag;
      if ((e.mode & Nt) === it && (a === x || a === Ee || a === Te)) {
        var o = e.alternate;
        o ? (e.updateQueue = o.updateQueue, e.memoizedState = o.memoizedState, e.lanes = o.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function uS(e) {
      var t = e;
      do {
        if (t.tag === ae && Lw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function sS(e, t, a, o, l) {
      if ((e.mode & Nt) === it) {
        if (e === t)
          e.flags |= lr;
        else {
          if (e.flags |= rt, a.flags |= Wc, a.flags &= -52805, a.tag === k) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ye;
            else {
              var v = nu(un, vt);
              v.tag = wm, Zu(a, v, vt);
            }
          }
          a.lanes = bt(a.lanes, vt);
        }
        return e;
      }
      return e.flags |= lr, e.lanes = l, e;
    }
    function eR(e, t, a, o, l) {
      if (a.flags |= Ts, la && yv(e, l), o !== null && typeof o == "object" && typeof o.then == "function") {
        var s = o;
        Zw(a), Wr() && a.mode & Nt && e2();
        var v = uS(t);
        if (v !== null) {
          v.flags &= ~Or, sS(v, t, a, e, l), v.mode & Nt && lS(e, s, l), Jw(v, e, s);
          return;
        } else {
          if (!vh(l)) {
            lS(e, s, l), N1();
            return;
          }
          var y = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          o = y;
        }
      } else if (Wr() && a.mode & Nt) {
        e2();
        var _ = uS(t);
        if (_ !== null) {
          (_.flags & lr) === ot && (_.flags |= Or), sS(_, t, a, e, l), $g(_c(o, a));
          return;
        }
      }
      o = _c(o, a), Lk(o);
      var T = t;
      do {
        switch (T.tag) {
          case U: {
            var N = o;
            T.flags |= lr;
            var I = Hs(l);
            T.lanes = bt(T.lanes, I);
            var z = iS(T, N, I);
            r0(T, z);
            return;
          }
          case k:
            var G = o, X = T.type, oe = T.stateNode;
            if ((T.flags & rt) === ot && (typeof X.getDerivedStateFromError == "function" || oe !== null && typeof oe.componentDidCatch == "function" && !uC(oe))) {
              T.flags |= lr;
              var Pe = Hs(l);
              T.lanes = bt(T.lanes, Pe);
              var st = K0(T, G, Pe);
              r0(T, st);
              return;
            }
            break;
        }
        T = T.return;
      } while (T !== null);
    }
    function tR() {
      return null;
    }
    var tv = f.ReactCurrentOwner, xi = !1, X0, nv, J0, Z0, e1, Sc, t1, ey, rv;
    X0 = {}, nv = {}, J0 = {}, Z0 = {}, e1 = {}, Sc = !1, t1 = {}, ey = {}, rv = {};
    function Ta(e, t, a, o) {
      e === null ? t.child = d2(t, null, a, o) : t.child = Qf(t, e.child, a, o);
    }
    function nR(e, t, a, o) {
      t.child = Qf(t, e.child, null, o), t.child = Qf(t, null, a, o);
    }
    function cS(e, t, a, o, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && yi(
          s,
          o,
          // Resolved props
          "prop",
          Ft(a)
        );
      }
      var v = a.render, y = t.ref, _, T;
      Xf(t, l), ba(t);
      {
        if (tv.current = t, Zn(!0), _ = rd(e, t, v, o, y, l), T = ad(), t.mode & an) {
          Rn(!0);
          try {
            _ = rd(e, t, v, o, y, l), T = ad();
          } finally {
            Rn(!1);
          }
        }
        Zn(!1);
      }
      return wa(), e !== null && !xi ? (R2(e, t, l), ru(e, t, l)) : (Wr() && T && Ug(t), t.flags |= po, Ta(e, t, _, l), t.child);
    }
    function fS(e, t, a, o, l) {
      if (e === null) {
        var s = a.type;
        if (lT(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var v = s;
          return v = dd(s), t.tag = Te, t.type = v, a1(t, s), dS(e, t, v, o, l);
        }
        {
          var y = s.propTypes;
          if (y && yi(
            y,
            o,
            // Resolved props
            "prop",
            Ft(s)
          ), a.defaultProps !== void 0) {
            var _ = Ft(s) || "Unknown";
            rv[_] || (h("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", _), rv[_] = !0);
          }
        }
        var T = F1(a.type, null, o, t, t.mode, l);
        return T.ref = t.ref, T.return = t, t.child = T, T;
      }
      {
        var N = a.type, I = N.propTypes;
        I && yi(
          I,
          o,
          // Resolved props
          "prop",
          Ft(N)
        );
      }
      var z = e.child, G = c1(e, l);
      if (!G) {
        var X = z.memoizedProps, oe = a.compare;
        if (oe = oe !== null ? oe : Xe, oe(X, o) && e.ref === t.ref)
          return ru(e, t, l);
      }
      t.flags |= po;
      var Pe = wc(z, o);
      return Pe.ref = t.ref, Pe.return = t, t.child = Pe, Pe;
    }
    function dS(e, t, a, o, l) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === _t) {
          var v = s, y = v._payload, _ = v._init;
          try {
            s = _(y);
          } catch {
            s = null;
          }
          var T = s && s.propTypes;
          T && yi(
            T,
            o,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Ft(s)
          );
        }
      }
      if (e !== null) {
        var N = e.memoizedProps;
        if (Xe(N, o) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (xi = !1, t.pendingProps = o = N, c1(e, l))
            (e.flags & Wc) !== ot && (xi = !0);
          else return t.lanes = e.lanes, ru(e, t, l);
      }
      return n1(e, t, a, o, l);
    }
    function pS(e, t, a) {
      var o = t.pendingProps, l = o.children, s = e !== null ? e.memoizedState : null;
      if (o.mode === "hidden" || me)
        if ((t.mode & Nt) === it) {
          var v = {
            baseLanes: ce,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v, py(t, a);
        } else if (sa(a, ua)) {
          var I = {
            baseLanes: ce,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = I;
          var z = s !== null ? s.baseLanes : a;
          py(t, z);
        } else {
          var y = null, _;
          if (s !== null) {
            var T = s.baseLanes;
            _ = bt(T, a);
          } else
            _ = a;
          t.lanes = t.childLanes = ua;
          var N = {
            baseLanes: _,
            cachePool: y,
            transitions: null
          };
          return t.memoizedState = N, t.updateQueue = null, py(t, _), null;
        }
      else {
        var G;
        s !== null ? (G = bt(s.baseLanes, a), t.memoizedState = null) : G = a, py(t, G);
      }
      return Ta(e, t, l, a), t.child;
    }
    function rR(e, t, a) {
      var o = t.pendingProps;
      return Ta(e, t, o, a), t.child;
    }
    function aR(e, t, a) {
      var o = t.pendingProps.children;
      return Ta(e, t, o, a), t.child;
    }
    function oR(e, t, a) {
      {
        t.flags |= Ut;
        {
          var o = t.stateNode;
          o.effectDuration = 0, o.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, s = l.children;
      return Ta(e, t, s, a), t.child;
    }
    function vS(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Nn, t.flags |= ju);
    }
    function n1(e, t, a, o, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && yi(
          s,
          o,
          // Resolved props
          "prop",
          Ft(a)
        );
      }
      var v;
      {
        var y = Bf(t, a, !0);
        v = qf(t, y);
      }
      var _, T;
      Xf(t, l), ba(t);
      {
        if (tv.current = t, Zn(!0), _ = rd(e, t, a, o, v, l), T = ad(), t.mode & an) {
          Rn(!0);
          try {
            _ = rd(e, t, a, o, v, l), T = ad();
          } finally {
            Rn(!1);
          }
        }
        Zn(!1);
      }
      return wa(), e !== null && !xi ? (R2(e, t, l), ru(e, t, l)) : (Wr() && T && Ug(t), t.flags |= po, Ta(e, t, _, l), t.child);
    }
    function hS(e, t, a, o, l) {
      {
        switch (ET(t)) {
          case !1: {
            var s = t.stateNode, v = t.type, y = new v(t.memoizedProps, s.context), _ = y.state;
            s.updater.enqueueSetState(s, _, null);
            break;
          }
          case !0: {
            t.flags |= rt, t.flags |= lr;
            var T = new Error("Simulated error coming from DevTools"), N = Hs(l);
            t.lanes = bt(t.lanes, N);
            var I = K0(t, _c(T, t), N);
            r0(t, I);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var z = a.propTypes;
          z && yi(
            z,
            o,
            // Resolved props
            "prop",
            Ft(a)
          );
        }
      }
      var G;
      ol(a) ? (G = !0, dm(t)) : G = !1, Xf(t, l);
      var X = t.stateNode, oe;
      X === null ? (ny(e, t), aS(t, a, o), Y0(t, a, o, l), oe = !0) : e === null ? oe = Gw(t, a, o, l) : oe = Qw(e, t, a, o, l);
      var Pe = r1(e, t, a, oe, G, l);
      {
        var st = t.stateNode;
        oe && st.props !== o && (Sc || h("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", gt(t) || "a component"), Sc = !0);
      }
      return Pe;
    }
    function r1(e, t, a, o, l, s) {
      vS(e, t);
      var v = (t.flags & rt) !== ot;
      if (!o && !v)
        return l && K_(t, a, !1), ru(e, t, s);
      var y = t.stateNode;
      tv.current = t;
      var _;
      if (v && typeof a.getDerivedStateFromError != "function")
        _ = null, Z2();
      else {
        ba(t);
        {
          if (Zn(!0), _ = y.render(), t.mode & an) {
            Rn(!0);
            try {
              y.render();
            } finally {
              Rn(!1);
            }
          }
          Zn(!1);
        }
        wa();
      }
      return t.flags |= po, e !== null && v ? nR(e, t, _, s) : Ta(e, t, _, s), t.memoizedState = y.state, l && K_(t, a, !0), t.child;
    }
    function mS(e) {
      var t = e.stateNode;
      t.pendingContext ? G_(e, t.pendingContext, t.pendingContext !== t.context) : t.context && G_(e, t.context, !1), a0(e, t.containerInfo);
    }
    function iR(e, t, a) {
      if (mS(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var o = t.pendingProps, l = t.memoizedState, s = l.element;
      _2(e, t), Nm(t, o, null, a);
      var v = t.memoizedState;
      t.stateNode;
      var y = v.element;
      if (l.isDehydrated) {
        var _ = {
          element: y,
          isDehydrated: !1,
          cache: v.cache,
          pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
          transitions: v.transitions
        }, T = t.updateQueue;
        if (T.baseState = _, t.memoizedState = _, t.flags & Or) {
          var N = _c(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return yS(e, t, y, a, N);
        } else if (y !== s) {
          var I = _c(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return yS(e, t, y, a, I);
        } else {
          sw(t);
          var z = d2(t, null, y, a);
          t.child = z;
          for (var G = z; G; )
            G.flags = G.flags & ~wn | aa, G = G.sibling;
        }
      } else {
        if (Gf(), y === s)
          return ru(e, t, a);
        Ta(e, t, y, a);
      }
      return t.child;
    }
    function yS(e, t, a, o, l) {
      return Gf(), $g(l), t.flags |= Or, Ta(e, t, a, o), t.child;
    }
    function lR(e, t, a) {
      x2(t), e === null && Vg(t);
      var o = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, v = l.children, y = Eg(o, l);
      return y ? v = null : s !== null && Eg(o, s) && (t.flags |= Fa), vS(e, t), Ta(e, t, v, a), t.child;
    }
    function uR(e, t) {
      return e === null && Vg(t), null;
    }
    function sR(e, t, a, o) {
      ny(e, t);
      var l = t.pendingProps, s = a, v = s._payload, y = s._init, _ = y(v);
      t.type = _;
      var T = t.tag = uT(_), N = Ei(_, l), I;
      switch (T) {
        case x:
          return a1(t, _), t.type = _ = dd(_), I = n1(null, t, _, N, o), I;
        case k:
          return t.type = _ = j1(_), I = hS(null, t, _, N, o), I;
        case Ee:
          return t.type = _ = A1(_), I = cS(null, t, _, N, o), I;
        case Ie: {
          if (t.type !== t.elementType) {
            var z = _.propTypes;
            z && yi(
              z,
              N,
              // Resolved for outer only
              "prop",
              Ft(_)
            );
          }
          return I = fS(
            null,
            t,
            _,
            Ei(_.type, N),
            // The inner type can have defaults too
            o
          ), I;
        }
      }
      var G = "";
      throw _ !== null && typeof _ == "object" && _.$$typeof === _t && (G = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + _ + ". " + ("Lazy element type must resolve to a class or function." + G));
    }
    function cR(e, t, a, o, l) {
      ny(e, t), t.tag = k;
      var s;
      return ol(a) ? (s = !0, dm(t)) : s = !1, Xf(t, l), aS(t, a, o), Y0(t, a, o, l), r1(null, t, a, !0, s, l);
    }
    function fR(e, t, a, o) {
      ny(e, t);
      var l = t.pendingProps, s;
      {
        var v = Bf(t, a, !1);
        s = qf(t, v);
      }
      Xf(t, o);
      var y, _;
      ba(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var T = Ft(a) || "Unknown";
          X0[T] || (h("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", T, T), X0[T] = !0);
        }
        t.mode & an && _i.recordLegacyContextWarning(t, null), Zn(!0), tv.current = t, y = rd(null, t, a, l, s, o), _ = ad(), Zn(!1);
      }
      if (wa(), t.flags |= po, typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0) {
        var N = Ft(a) || "Unknown";
        nv[N] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", N, N, N), nv[N] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0
      ) {
        {
          var I = Ft(a) || "Unknown";
          nv[I] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", I, I, I), nv[I] = !0);
        }
        t.tag = k, t.memoizedState = null, t.updateQueue = null;
        var z = !1;
        return ol(a) ? (z = !0, dm(t)) : z = !1, t.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, n0(t), rS(t, y), Y0(t, a, l, o), r1(null, t, a, !0, z, o);
      } else {
        if (t.tag = x, t.mode & an) {
          Rn(!0);
          try {
            y = rd(null, t, a, l, s, o), _ = ad();
          } finally {
            Rn(!1);
          }
        }
        return Wr() && _ && Ug(t), Ta(null, t, y, o), a1(t, a), t.child;
      }
    }
    function a1(e, t) {
      {
        if (t && t.childContextTypes && h("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", o = Ir();
          o && (a += `

Check the render method of \`` + o + "`.");
          var l = o || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), e1[l] || (e1[l] = !0, h("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var v = Ft(t) || "Unknown";
          rv[v] || (h("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", v), rv[v] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var y = Ft(t) || "Unknown";
          Z0[y] || (h("%s: Function components do not support getDerivedStateFromProps.", y), Z0[y] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var _ = Ft(t) || "Unknown";
          J0[_] || (h("%s: Function components do not support contextType.", _), J0[_] = !0);
        }
      }
    }
    var o1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: $t
    };
    function i1(e) {
      return {
        baseLanes: e,
        cachePool: tR(),
        transitions: null
      };
    }
    function dR(e, t) {
      var a = null;
      return {
        baseLanes: bt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function pR(e, t, a, o) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return l0(e, Wp);
    }
    function vR(e, t) {
      return Bs(e.childLanes, t);
    }
    function gS(e, t, a) {
      var o = t.pendingProps;
      xT(t) && (t.flags |= rt);
      var l = Si.current, s = !1, v = (t.flags & rt) !== ot;
      if (v || pR(l, e) ? (s = !0, t.flags &= ~rt) : (e === null || e.memoizedState !== null) && (l = Dw(l, w2)), l = Zf(l), ts(t, l), e === null) {
        Vg(t);
        var y = t.memoizedState;
        if (y !== null) {
          var _ = y.dehydrated;
          if (_ !== null)
            return _R(t, _);
        }
        var T = o.children, N = o.fallback;
        if (s) {
          var I = hR(t, T, N, a), z = t.child;
          return z.memoizedState = i1(a), t.memoizedState = o1, I;
        } else
          return l1(t, T);
      } else {
        var G = e.memoizedState;
        if (G !== null) {
          var X = G.dehydrated;
          if (X !== null)
            return SR(e, t, v, o, X, G, a);
        }
        if (s) {
          var oe = o.fallback, Pe = o.children, st = yR(e, t, Pe, oe, a), nt = t.child, It = e.child.memoizedState;
          return nt.memoizedState = It === null ? i1(a) : dR(It, a), nt.childLanes = vR(e, a), t.memoizedState = o1, st;
        } else {
          var Lt = o.children, B = mR(e, t, Lt, a);
          return t.memoizedState = null, B;
        }
      }
    }
    function l1(e, t, a) {
      var o = e.mode, l = {
        mode: "visible",
        children: t
      }, s = u1(l, o);
      return s.return = e, e.child = s, s;
    }
    function hR(e, t, a, o) {
      var l = e.mode, s = e.child, v = {
        mode: "hidden",
        children: t
      }, y, _;
      return (l & Nt) === it && s !== null ? (y = s, y.childLanes = ce, y.pendingProps = v, e.mode & Bt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = 0, y.treeBaseDuration = 0), _ = ss(a, l, o, null)) : (y = u1(v, l), _ = ss(a, l, o, null)), y.return = e, _.return = e, y.sibling = _, e.child = y, _;
    }
    function u1(e, t, a) {
      return _C(e, t, ce, null);
    }
    function _S(e, t) {
      return wc(e, t);
    }
    function mR(e, t, a, o) {
      var l = e.child, s = l.sibling, v = _S(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Nt) === it && (v.lanes = o), v.return = t, v.sibling = null, s !== null) {
        var y = t.deletions;
        y === null ? (t.deletions = [s], t.flags |= Ia) : y.push(s);
      }
      return t.child = v, v;
    }
    function yR(e, t, a, o, l) {
      var s = t.mode, v = e.child, y = v.sibling, _ = {
        mode: "hidden",
        children: a
      }, T;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Nt) === it && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== v
      ) {
        var N = t.child;
        T = N, T.childLanes = ce, T.pendingProps = _, t.mode & Bt && (T.actualDuration = 0, T.actualStartTime = -1, T.selfBaseDuration = v.selfBaseDuration, T.treeBaseDuration = v.treeBaseDuration), t.deletions = null;
      } else
        T = _S(v, _), T.subtreeFlags = v.subtreeFlags & Bn;
      var I;
      return y !== null ? I = wc(y, o) : (I = ss(o, s, l, null), I.flags |= wn), I.return = t, T.return = t, T.sibling = I, t.child = T, I;
    }
    function ty(e, t, a, o) {
      o !== null && $g(o), Qf(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, v = l1(t, s);
      return v.flags |= wn, t.memoizedState = null, v;
    }
    function gR(e, t, a, o, l) {
      var s = t.mode, v = {
        mode: "visible",
        children: a
      }, y = u1(v, s), _ = ss(o, s, l, null);
      return _.flags |= wn, y.return = t, _.return = t, y.sibling = _, t.child = y, (t.mode & Nt) !== it && Qf(t, e.child, null, l), _;
    }
    function _R(e, t, a) {
      return (e.mode & Nt) === it ? (h("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = vt) : Rg(t) ? e.lanes = Dr : e.lanes = ua, null;
    }
    function SR(e, t, a, o, l, s, v) {
      if (a)
        if (t.flags & Or) {
          t.flags &= ~Or;
          var B = G0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return ty(e, t, v, B);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= rt, null;
          var ie = o.children, q = o.fallback, _e = gR(e, t, ie, q, v), We = t.child;
          return We.memoizedState = i1(v), t.memoizedState = o1, _e;
        }
      else {
        if (lw(), (t.mode & Nt) === it)
          return ty(
            e,
            t,
            v,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Rg(l)) {
          var y, _, T;
          {
            var N = bb(l);
            y = N.digest, _ = N.message, T = N.stack;
          }
          var I;
          _ ? I = new Error(_) : I = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var z = G0(I, y, T);
          return ty(e, t, v, z);
        }
        var G = sa(v, e.childLanes);
        if (xi || G) {
          var X = dy();
          if (X !== null) {
            var oe = ip(X, v);
            if (oe !== $t && oe !== s.retryLane) {
              s.retryLane = oe;
              var Pe = un;
              Qa(e, oe), kr(X, e, oe, Pe);
            }
          }
          N1();
          var st = G0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return ty(e, t, v, st);
        } else if ($_(l)) {
          t.flags |= rt, t.child = e.child;
          var nt = qk.bind(null, e);
          return wb(l, nt), null;
        } else {
          cw(t, l, s.treeContext);
          var It = o.children, Lt = l1(t, It);
          return Lt.flags |= aa, Lt;
        }
      }
    }
    function SS(e, t, a) {
      e.lanes = bt(e.lanes, t);
      var o = e.alternate;
      o !== null && (o.lanes = bt(o.lanes, t)), Jg(e.return, t, a);
    }
    function CR(e, t, a) {
      for (var o = t; o !== null; ) {
        if (o.tag === ae) {
          var l = o.memoizedState;
          l !== null && SS(o, a, e);
        } else if (o.tag === re)
          SS(o, a, e);
        else if (o.child !== null) {
          o.child.return = o, o = o.child;
          continue;
        }
        if (o === e)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === e)
            return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }
    function ER(e) {
      for (var t = e, a = null; t !== null; ) {
        var o = t.alternate;
        o !== null && Lm(o) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function xR(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !t1[e])
        if (t1[e] = !0, typeof e == "string")
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
    function bR(e, t) {
      e !== void 0 && !ey[e] && (e !== "collapsed" && e !== "hidden" ? (ey[e] = !0, h('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (ey[e] = !0, h('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function CS(e, t) {
      {
        var a = kt(e), o = !a && typeof xt(e) == "function";
        if (a || o) {
          var l = a ? "array" : "iterable";
          return h("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function wR(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (kt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!CS(e[a], a))
              return;
        } else {
          var o = xt(e);
          if (typeof o == "function") {
            var l = o.call(e);
            if (l)
              for (var s = l.next(), v = 0; !s.done; s = l.next()) {
                if (!CS(s.value, v))
                  return;
                v++;
              }
          } else
            h('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function s1(e, t, a, o, l) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: o,
        tail: a,
        tailMode: l
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = o, s.tail = a, s.tailMode = l);
    }
    function ES(e, t, a) {
      var o = t.pendingProps, l = o.revealOrder, s = o.tail, v = o.children;
      xR(l), bR(s, l), wR(v, l), Ta(e, t, v, a);
      var y = Si.current, _ = l0(y, Wp);
      if (_)
        y = u0(y, Wp), t.flags |= rt;
      else {
        var T = e !== null && (e.flags & rt) !== ot;
        T && CR(t, t.child, a), y = Zf(y);
      }
      if (ts(t, y), (t.mode & Nt) === it)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var N = ER(t.child), I;
            N === null ? (I = t.child, t.child = null) : (I = N.sibling, N.sibling = null), s1(
              t,
              !1,
              // isBackwards
              I,
              N,
              s
            );
            break;
          }
          case "backwards": {
            var z = null, G = t.child;
            for (t.child = null; G !== null; ) {
              var X = G.alternate;
              if (X !== null && Lm(X) === null) {
                t.child = G;
                break;
              }
              var oe = G.sibling;
              G.sibling = z, z = G, G = oe;
            }
            s1(
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
            s1(
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
    function RR(e, t, a) {
      a0(t, t.stateNode.containerInfo);
      var o = t.pendingProps;
      return e === null ? t.child = Qf(t, null, o, a) : Ta(e, t, o, a), t.child;
    }
    var xS = !1;
    function kR(e, t, a) {
      var o = t.type, l = o._context, s = t.pendingProps, v = t.memoizedProps, y = s.value;
      {
        "value" in s || xS || (xS = !0, h("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var _ = t.type.propTypes;
        _ && yi(_, s, "prop", "Context.Provider");
      }
      if (h2(t, l, y), v !== null) {
        var T = v.value;
        if (he(T, y)) {
          if (v.children === s.children && !cm())
            return ru(e, t, a);
        } else
          xw(t, l, a);
      }
      var N = s.children;
      return Ta(e, t, N, a), t.child;
    }
    var bS = !1;
    function TR(e, t, a) {
      var o = t.type;
      o._context === void 0 ? o !== o.Consumer && (bS || (bS = !0, h("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : o = o._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && h("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Xf(t, a);
      var v = fr(o);
      ba(t);
      var y;
      return tv.current = t, Zn(!0), y = s(v), Zn(!1), wa(), t.flags |= po, Ta(e, t, y, a), t.child;
    }
    function av() {
      xi = !0;
    }
    function ny(e, t) {
      (t.mode & Nt) === it && e !== null && (e.alternate = null, t.alternate = null, t.flags |= wn);
    }
    function ru(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), Z2(), mv(t.lanes), sa(a, t.childLanes) ? (Cw(e, t), t.child) : null;
    }
    function NR(e, t, a) {
      {
        var o = t.return;
        if (o === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === o.child)
          o.child = a;
        else {
          var l = o.child;
          if (l === null)
            throw new Error("Expected parent to have a child.");
          for (; l.sibling !== t; )
            if (l = l.sibling, l === null)
              throw new Error("Expected to find the previous sibling.");
          l.sibling = a;
        }
        var s = o.deletions;
        return s === null ? (o.deletions = [e], o.flags |= Ia) : s.push(e), a.flags |= wn, a;
      }
    }
    function c1(e, t) {
      var a = e.lanes;
      return !!sa(a, t);
    }
    function MR(e, t, a) {
      switch (t.tag) {
        case U:
          mS(t), t.stateNode, Gf();
          break;
        case $:
          x2(t);
          break;
        case k: {
          var o = t.type;
          ol(o) && dm(t);
          break;
        }
        case V:
          a0(t, t.stateNode.containerInfo);
          break;
        case xe: {
          var l = t.memoizedProps.value, s = t.type._context;
          h2(t, s, l);
          break;
        }
        case De:
          {
            var v = sa(a, t.childLanes);
            v && (t.flags |= Ut);
            {
              var y = t.stateNode;
              y.effectDuration = 0, y.passiveEffectDuration = 0;
            }
          }
          break;
        case ae: {
          var _ = t.memoizedState;
          if (_ !== null) {
            if (_.dehydrated !== null)
              return ts(t, Zf(Si.current)), t.flags |= rt, null;
            var T = t.child, N = T.childLanes;
            if (sa(a, N))
              return gS(e, t, a);
            ts(t, Zf(Si.current));
            var I = ru(e, t, a);
            return I !== null ? I.sibling : null;
          } else
            ts(t, Zf(Si.current));
          break;
        }
        case re: {
          var z = (e.flags & rt) !== ot, G = sa(a, t.childLanes);
          if (z) {
            if (G)
              return ES(e, t, a);
            t.flags |= rt;
          }
          var X = t.memoizedState;
          if (X !== null && (X.rendering = null, X.tail = null, X.lastEffect = null), ts(t, Si.current), G)
            break;
          return null;
        }
        case Y:
        case pe:
          return t.lanes = ce, pS(e, t, a);
      }
      return ru(e, t, a);
    }
    function wS(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return NR(e, t, F1(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var o = e.memoizedProps, l = t.pendingProps;
        if (o !== l || cm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          xi = !0;
        else {
          var s = c1(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & rt) === ot)
            return xi = !1, MR(e, t, a);
          (e.flags & Wc) !== ot ? xi = !0 : xi = !1;
        }
      } else if (xi = !1, Wr() && tw(t)) {
        var v = t.index, y = nw();
        Z_(t, y, v);
      }
      switch (t.lanes = ce, t.tag) {
        case M:
          return fR(e, t, t.type, a);
        case Ve: {
          var _ = t.elementType;
          return sR(e, t, _, a);
        }
        case x: {
          var T = t.type, N = t.pendingProps, I = t.elementType === T ? N : Ei(T, N);
          return n1(e, t, T, I, a);
        }
        case k: {
          var z = t.type, G = t.pendingProps, X = t.elementType === z ? G : Ei(z, G);
          return hS(e, t, z, X, a);
        }
        case U:
          return iR(e, t, a);
        case $:
          return lR(e, t, a);
        case Z:
          return uR(e, t);
        case ae:
          return gS(e, t, a);
        case V:
          return RR(e, t, a);
        case Ee: {
          var oe = t.type, Pe = t.pendingProps, st = t.elementType === oe ? Pe : Ei(oe, Pe);
          return cS(e, t, oe, st, a);
        }
        case J:
          return rR(e, t, a);
        case Se:
          return aR(e, t, a);
        case De:
          return oR(e, t, a);
        case xe:
          return kR(e, t, a);
        case Ce:
          return TR(e, t, a);
        case Ie: {
          var nt = t.type, It = t.pendingProps, Lt = Ei(nt, It);
          if (t.type !== t.elementType) {
            var B = nt.propTypes;
            B && yi(
              B,
              Lt,
              // Resolved for outer only
              "prop",
              Ft(nt)
            );
          }
          return Lt = Ei(nt.type, Lt), fS(e, t, nt, Lt, a);
        }
        case Te:
          return dS(e, t, t.type, t.pendingProps, a);
        case Ye: {
          var ie = t.type, q = t.pendingProps, _e = t.elementType === ie ? q : Ei(ie, q);
          return cR(e, t, ie, _e, a);
        }
        case re:
          return ES(e, t, a);
        case L:
          break;
        case Y:
          return pS(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function od(e) {
      e.flags |= Ut;
    }
    function RS(e) {
      e.flags |= Nn, e.flags |= ju;
    }
    var kS, f1, TS, NS;
    kS = function(e, t, a, o) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === $ || l.tag === Z)
          Jx(e, l.stateNode);
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
    }, f1 = function(e, t) {
    }, TS = function(e, t, a, o, l) {
      var s = e.memoizedProps;
      if (s !== o) {
        var v = t.stateNode, y = o0(), _ = eb(v, a, s, o, l, y);
        t.updateQueue = _, _ && od(t);
      }
    }, NS = function(e, t, a, o) {
      a !== o && od(t);
    };
    function ov(e, t) {
      if (!Wr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, o = null; a !== null; )
              a.alternate !== null && (o = a), a = a.sibling;
            o === null ? e.tail = null : o.sibling = null;
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
    function Gr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ce, o = ot;
      if (t) {
        if ((e.mode & Bt) !== it) {
          for (var _ = e.selfBaseDuration, T = e.child; T !== null; )
            a = bt(a, bt(T.lanes, T.childLanes)), o |= T.subtreeFlags & Bn, o |= T.flags & Bn, _ += T.treeBaseDuration, T = T.sibling;
          e.treeBaseDuration = _;
        } else
          for (var N = e.child; N !== null; )
            a = bt(a, bt(N.lanes, N.childLanes)), o |= N.subtreeFlags & Bn, o |= N.flags & Bn, N.return = e, N = N.sibling;
        e.subtreeFlags |= o;
      } else {
        if ((e.mode & Bt) !== it) {
          for (var l = e.actualDuration, s = e.selfBaseDuration, v = e.child; v !== null; )
            a = bt(a, bt(v.lanes, v.childLanes)), o |= v.subtreeFlags, o |= v.flags, l += v.actualDuration, s += v.treeBaseDuration, v = v.sibling;
          e.actualDuration = l, e.treeBaseDuration = s;
        } else
          for (var y = e.child; y !== null; )
            a = bt(a, bt(y.lanes, y.childLanes)), o |= y.subtreeFlags, o |= y.flags, y.return = e, y = y.sibling;
        e.subtreeFlags |= o;
      }
      return e.childLanes = a, t;
    }
    function OR(e, t, a) {
      if (hw() && (t.mode & Nt) !== it && (t.flags & rt) === ot)
        return i2(t), Gf(), t.flags |= Or | Ts | lr, !1;
      var o = ym(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!o)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (pw(t), Gr(t), (t.mode & Bt) !== it) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Gf(), (t.flags & rt) === ot && (t.memoizedState = null), t.flags |= Ut, Gr(t), (t.mode & Bt) !== it) {
            var v = a !== null;
            if (v) {
              var y = t.child;
              y !== null && (t.treeBaseDuration -= y.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return l2(), !0;
    }
    function MS(e, t, a) {
      var o = t.pendingProps;
      switch (zg(t), t.tag) {
        case M:
        case Ve:
        case Te:
        case x:
        case Ee:
        case J:
        case Se:
        case De:
        case Ce:
        case Ie:
          return Gr(t), null;
        case k: {
          var l = t.type;
          return ol(l) && fm(t), Gr(t), null;
        }
        case U: {
          var s = t.stateNode;
          if (Jf(t), Lg(t), c0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var v = ym(t);
            if (v)
              od(t);
            else if (e !== null) {
              var y = e.memoizedState;
              // Check if this is a client root
              (!y.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Or) !== ot) && (t.flags |= er, l2());
            }
          }
          return f1(e, t), Gr(t), null;
        }
        case $: {
          i0(t);
          var _ = E2(), T = t.type;
          if (e !== null && t.stateNode != null)
            TS(e, t, T, o, _), e.ref !== t.ref && RS(t);
          else {
            if (!o) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Gr(t), null;
            }
            var N = o0(), I = ym(t);
            if (I)
              fw(t, _, N) && od(t);
            else {
              var z = Xx(T, o, _, N, t);
              kS(z, t, !1, !1), t.stateNode = z, Zx(z, T, o, _) && od(t);
            }
            t.ref !== null && RS(t);
          }
          return Gr(t), null;
        }
        case Z: {
          var G = o;
          if (e && t.stateNode != null) {
            var X = e.memoizedProps;
            NS(e, t, X, G);
          } else {
            if (typeof G != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var oe = E2(), Pe = o0(), st = ym(t);
            st ? dw(t) && od(t) : t.stateNode = tb(G, oe, Pe, t);
          }
          return Gr(t), null;
        }
        case ae: {
          ed(t);
          var nt = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var It = OR(e, t, nt);
            if (!It)
              return t.flags & lr ? t : null;
          }
          if ((t.flags & rt) !== ot)
            return t.lanes = a, (t.mode & Bt) !== it && A0(t), t;
          var Lt = nt !== null, B = e !== null && e.memoizedState !== null;
          if (Lt !== B && Lt) {
            var ie = t.child;
            if (ie.flags |= Hn, (t.mode & Nt) !== it) {
              var q = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              q || l0(Si.current, w2) ? Dk() : N1();
            }
          }
          var _e = t.updateQueue;
          if (_e !== null && (t.flags |= Ut), Gr(t), (t.mode & Bt) !== it && Lt) {
            var We = t.child;
            We !== null && (t.treeBaseDuration -= We.treeBaseDuration);
          }
          return null;
        }
        case V:
          return Jf(t), f1(e, t), e === null && Gb(t.stateNode.containerInfo), Gr(t), null;
        case xe:
          var Fe = t.type._context;
          return Xg(Fe, t), Gr(t), null;
        case Ye: {
          var ht = t.type;
          return ol(ht) && fm(t), Gr(t), null;
        }
        case re: {
          ed(t);
          var Ct = t.memoizedState;
          if (Ct === null)
            return Gr(t), null;
          var ln = (t.flags & rt) !== ot, Yt = Ct.rendering;
          if (Yt === null)
            if (ln)
              ov(Ct, !1);
            else {
              var rr = jk() && (e === null || (e.flags & rt) === ot);
              if (!rr)
                for (var Gt = t.child; Gt !== null; ) {
                  var Kn = Lm(Gt);
                  if (Kn !== null) {
                    ln = !0, t.flags |= rt, ov(Ct, !1);
                    var ma = Kn.updateQueue;
                    return ma !== null && (t.updateQueue = ma, t.flags |= Ut), t.subtreeFlags = ot, Ew(t, a), ts(t, u0(Si.current, Wp)), t.child;
                  }
                  Gt = Gt.sibling;
                }
              Ct.tail !== null && tr() > XS() && (t.flags |= rt, ln = !0, ov(Ct, !1), t.lanes = Xd);
            }
          else {
            if (!ln) {
              var Zr = Lm(Yt);
              if (Zr !== null) {
                t.flags |= rt, ln = !0;
                var So = Zr.updateQueue;
                if (So !== null && (t.updateQueue = So, t.flags |= Ut), ov(Ct, !0), Ct.tail === null && Ct.tailMode === "hidden" && !Yt.alternate && !Wr())
                  return Gr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              tr() * 2 - Ct.renderingStartTime > XS() && a !== ua && (t.flags |= rt, ln = !0, ov(Ct, !1), t.lanes = Xd);
            }
            if (Ct.isBackwards)
              Yt.sibling = t.child, t.child = Yt;
            else {
              var Oa = Ct.last;
              Oa !== null ? Oa.sibling = Yt : t.child = Yt, Ct.last = Yt;
            }
          }
          if (Ct.tail !== null) {
            var Da = Ct.tail;
            Ct.rendering = Da, Ct.tail = Da.sibling, Ct.renderingStartTime = tr(), Da.sibling = null;
            var ya = Si.current;
            return ln ? ya = u0(ya, Wp) : ya = Zf(ya), ts(t, ya), Da;
          }
          return Gr(t), null;
        }
        case L:
          break;
        case Y:
        case pe: {
          T1(t);
          var uu = t.memoizedState, pd = uu !== null;
          if (e !== null) {
            var Cv = e.memoizedState, pl = Cv !== null;
            pl !== pd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !me && (t.flags |= Hn);
          }
          return !pd || (t.mode & Nt) === it ? Gr(t) : sa(dl, ua) && (Gr(t), t.subtreeFlags & (wn | Ut) && (t.flags |= Hn)), null;
        }
        case ke:
          return null;
        case ue:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function DR(e, t, a) {
      switch (zg(t), t.tag) {
        case k: {
          var o = t.type;
          ol(o) && fm(t);
          var l = t.flags;
          return l & lr ? (t.flags = l & ~lr | rt, (t.mode & Bt) !== it && A0(t), t) : null;
        }
        case U: {
          t.stateNode, Jf(t), Lg(t), c0();
          var s = t.flags;
          return (s & lr) !== ot && (s & rt) === ot ? (t.flags = s & ~lr | rt, t) : null;
        }
        case $:
          return i0(t), null;
        case ae: {
          ed(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Gf();
          }
          var y = t.flags;
          return y & lr ? (t.flags = y & ~lr | rt, (t.mode & Bt) !== it && A0(t), t) : null;
        }
        case re:
          return ed(t), null;
        case V:
          return Jf(t), null;
        case xe:
          var _ = t.type._context;
          return Xg(_, t), null;
        case Y:
        case pe:
          return T1(t), null;
        case ke:
          return null;
        default:
          return null;
      }
    }
    function OS(e, t, a) {
      switch (zg(t), t.tag) {
        case k: {
          var o = t.type.childContextTypes;
          o != null && fm(t);
          break;
        }
        case U: {
          t.stateNode, Jf(t), Lg(t), c0();
          break;
        }
        case $: {
          i0(t);
          break;
        }
        case V:
          Jf(t);
          break;
        case ae:
          ed(t);
          break;
        case re:
          ed(t);
          break;
        case xe:
          var l = t.type._context;
          Xg(l, t);
          break;
        case Y:
        case pe:
          T1(t);
          break;
      }
    }
    var DS = null;
    DS = /* @__PURE__ */ new Set();
    var ry = !1, Qr = !1, LR = typeof WeakSet == "function" ? WeakSet : Set, Je = null, id = null, ld = null;
    function jR(e) {
      Vi(null, function() {
        throw e;
      }), ks();
    }
    var AR = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Bt)
        try {
          cl(), t.componentWillUnmount();
        } finally {
          sl(e);
        }
      else
        t.componentWillUnmount();
    };
    function LS(e, t) {
      try {
        as(Cr, e);
      } catch (a) {
        gn(e, t, a);
      }
    }
    function d1(e, t, a) {
      try {
        AR(e, a);
      } catch (o) {
        gn(e, t, o);
      }
    }
    function UR(e, t, a) {
      try {
        a.componentDidMount();
      } catch (o) {
        gn(e, t, o);
      }
    }
    function jS(e, t) {
      try {
        US(e);
      } catch (a) {
        gn(e, t, a);
      }
    }
    function ud(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var o;
          try {
            if (He && mt && e.mode & Bt)
              try {
                cl(), o = a(null);
              } finally {
                sl(e);
              }
            else
              o = a(null);
          } catch (l) {
            gn(e, t, l);
          }
          typeof o == "function" && h("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", gt(e));
        } else
          a.current = null;
    }
    function ay(e, t, a) {
      try {
        a();
      } catch (o) {
        gn(e, t, o);
      }
    }
    var AS = !1;
    function zR(e, t) {
      Qx(e.containerInfo), Je = t, PR();
      var a = AS;
      return AS = !1, a;
    }
    function PR() {
      for (; Je !== null; ) {
        var e = Je, t = e.child;
        (e.subtreeFlags & Hi) !== ot && t !== null ? (t.return = e, Je = t) : IR();
      }
    }
    function IR() {
      for (; Je !== null; ) {
        var e = Je;
        tn(e);
        try {
          FR(e);
        } catch (a) {
          gn(e, e.return, a);
        }
        yn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Je = t;
          return;
        }
        Je = e.return;
      }
    }
    function FR(e) {
      var t = e.alternate, a = e.flags;
      if ((a & er) !== ot) {
        switch (tn(e), e.tag) {
          case x:
          case Ee:
          case Te:
            break;
          case k: {
            if (t !== null) {
              var o = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Sc && (s.props !== e.memoizedProps && h("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(e) || "instance"), s.state !== e.memoizedState && h("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(e) || "instance"));
              var v = s.getSnapshotBeforeUpdate(e.elementType === e.type ? o : Ei(e.type, o), l);
              {
                var y = DS;
                v === void 0 && !y.has(e.type) && (y.add(e.type), h("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", gt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case U: {
            {
              var _ = e.stateNode;
              Sb(_.containerInfo);
            }
            break;
          }
          case $:
          case Z:
          case V:
          case Ye:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        yn();
      }
    }
    function bi(e, t, a) {
      var o = t.updateQueue, l = o !== null ? o.lastEffect : null;
      if (l !== null) {
        var s = l.next, v = s;
        do {
          if ((v.tag & e) === e) {
            var y = v.destroy;
            v.destroy = void 0, y !== void 0 && ((e & Yr) !== Ka ? fi(t) : (e & Cr) !== Ka && Ms(t), (e & il) !== Ka && gv(!0), ay(t, a, y), (e & il) !== Ka && gv(!1), (e & Yr) !== Ka ? Yi() : (e & Cr) !== Ka && Qd());
          }
          v = v.next;
        } while (v !== s);
      }
    }
    function as(e, t) {
      var a = t.updateQueue, o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var l = o.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & Yr) !== Ka ? Gd(t) : (e & Cr) !== Ka && Jc(t);
            var v = s.create;
            (e & il) !== Ka && gv(!0), s.destroy = v(), (e & il) !== Ka && gv(!1), (e & Yr) !== Ka ? sh() : (e & Cr) !== Ka && ch();
            {
              var y = s.destroy;
              if (y !== void 0 && typeof y != "function") {
                var _ = void 0;
                (s.tag & Cr) !== ot ? _ = "useLayoutEffect" : (s.tag & il) !== ot ? _ = "useInsertionEffect" : _ = "useEffect";
                var T = void 0;
                y === null ? T = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof y.then == "function" ? T = `

It looks like you wrote ` + _ + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + _ + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : T = " You returned: " + y, h("%s must not return anything besides a function, which is used for clean-up.%s", _, T);
              }
            }
          }
          s = s.next;
        } while (s !== l);
      }
    }
    function VR(e, t) {
      if ((t.flags & Ut) !== ot)
        switch (t.tag) {
          case De: {
            var a = t.stateNode.passiveEffectDuration, o = t.memoizedProps, l = o.id, s = o.onPostCommit, v = X2(), y = t.alternate === null ? "mount" : "update";
            K2() && (y = "nested-update"), typeof s == "function" && s(l, y, a, v);
            var _ = t.return;
            e: for (; _ !== null; ) {
              switch (_.tag) {
                case U:
                  var T = _.stateNode;
                  T.passiveEffectDuration += a;
                  break e;
                case De:
                  var N = _.stateNode;
                  N.passiveEffectDuration += a;
                  break e;
              }
              _ = _.return;
            }
            break;
          }
        }
    }
    function $R(e, t, a, o) {
      if ((a.flags & qi) !== ot)
        switch (a.tag) {
          case x:
          case Ee:
          case Te: {
            if (!Qr)
              if (a.mode & Bt)
                try {
                  cl(), as(Cr | Sr, a);
                } finally {
                  sl(a);
                }
              else
                as(Cr | Sr, a);
            break;
          }
          case k: {
            var l = a.stateNode;
            if (a.flags & Ut && !Qr)
              if (t === null)
                if (a.type === a.elementType && !Sc && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(a) || "instance")), a.mode & Bt)
                  try {
                    cl(), l.componentDidMount();
                  } finally {
                    sl(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Ei(a.type, t.memoizedProps), v = t.memoizedState;
                if (a.type === a.elementType && !Sc && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(a) || "instance")), a.mode & Bt)
                  try {
                    cl(), l.componentDidUpdate(s, v, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    sl(a);
                  }
                else
                  l.componentDidUpdate(s, v, l.__reactInternalSnapshotBeforeUpdate);
              }
            var y = a.updateQueue;
            y !== null && (a.type === a.elementType && !Sc && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(a) || "instance")), C2(a, y, l));
            break;
          }
          case U: {
            var _ = a.updateQueue;
            if (_ !== null) {
              var T = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case $:
                    T = a.child.stateNode;
                    break;
                  case k:
                    T = a.child.stateNode;
                    break;
                }
              C2(a, _, T);
            }
            break;
          }
          case $: {
            var N = a.stateNode;
            if (t === null && a.flags & Ut) {
              var I = a.type, z = a.memoizedProps;
              ib(N, I, z);
            }
            break;
          }
          case Z:
            break;
          case V:
            break;
          case De: {
            {
              var G = a.memoizedProps, X = G.onCommit, oe = G.onRender, Pe = a.stateNode.effectDuration, st = X2(), nt = t === null ? "mount" : "update";
              K2() && (nt = "nested-update"), typeof oe == "function" && oe(a.memoizedProps.id, nt, a.actualDuration, a.treeBaseDuration, a.actualStartTime, st);
              {
                typeof X == "function" && X(a.memoizedProps.id, nt, Pe, st), Ik(a);
                var It = a.return;
                e: for (; It !== null; ) {
                  switch (It.tag) {
                    case U:
                      var Lt = It.stateNode;
                      Lt.effectDuration += Pe;
                      break e;
                    case De:
                      var B = It.stateNode;
                      B.effectDuration += Pe;
                      break e;
                  }
                  It = It.return;
                }
              }
            }
            break;
          }
          case ae: {
            KR(e, a);
            break;
          }
          case re:
          case Ye:
          case L:
          case Y:
          case pe:
          case ue:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Qr || a.flags & Nn && US(a);
    }
    function HR(e) {
      switch (e.tag) {
        case x:
        case Ee:
        case Te: {
          if (e.mode & Bt)
            try {
              cl(), LS(e, e.return);
            } finally {
              sl(e);
            }
          else
            LS(e, e.return);
          break;
        }
        case k: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && UR(e, e.return, t), jS(e, e.return);
          break;
        }
        case $: {
          jS(e, e.return);
          break;
        }
      }
    }
    function BR(e, t) {
      for (var a = null, o = e; ; ) {
        if (o.tag === $) {
          if (a === null) {
            a = o;
            try {
              var l = o.stateNode;
              t ? mb(l) : gb(o.stateNode, o.memoizedProps);
            } catch (v) {
              gn(e, e.return, v);
            }
          }
        } else if (o.tag === Z) {
          if (a === null)
            try {
              var s = o.stateNode;
              t ? yb(s) : _b(s, o.memoizedProps);
            } catch (v) {
              gn(e, e.return, v);
            }
        } else if (!((o.tag === Y || o.tag === pe) && o.memoizedState !== null && o !== e)) {
          if (o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
        }
        if (o === e)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === e)
            return;
          a === o && (a = null), o = o.return;
        }
        a === o && (a = null), o.sibling.return = o.return, o = o.sibling;
      }
    }
    function US(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, o;
        if (e.tag === $ ? o = a : o = a, typeof t == "function") {
          var l;
          if (e.mode & Bt)
            try {
              cl(), l = t(o);
            } finally {
              sl(e);
            }
          else
            l = t(o);
          typeof l == "function" && h("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", gt(e));
        } else
          t.hasOwnProperty("current") || h("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", gt(e)), t.current = o;
      }
    }
    function qR(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function zS(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, zS(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === $) {
          var a = e.stateNode;
          a !== null && Xb(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function WR(e) {
      for (var t = e.return; t !== null; ) {
        if (PS(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function PS(e) {
      return e.tag === $ || e.tag === U || e.tag === V;
    }
    function IS(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || PS(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== $ && t.tag !== Z && t.tag !== Ze; ) {
          if (t.flags & wn || t.child === null || t.tag === V)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & wn))
          return t.stateNode;
      }
    }
    function YR(e) {
      var t = WR(e);
      switch (t.tag) {
        case $: {
          var a = t.stateNode;
          t.flags & Fa && (V_(a), t.flags &= ~Fa);
          var o = IS(e);
          v1(e, o, a);
          break;
        }
        case U:
        case V: {
          var l = t.stateNode.containerInfo, s = IS(e);
          p1(e, s, l);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function p1(e, t, a) {
      var o = e.tag, l = o === $ || o === Z;
      if (l) {
        var s = e.stateNode;
        t ? db(a, s, t) : cb(a, s);
      } else if (o !== V) {
        var v = e.child;
        if (v !== null) {
          p1(v, t, a);
          for (var y = v.sibling; y !== null; )
            p1(y, t, a), y = y.sibling;
        }
      }
    }
    function v1(e, t, a) {
      var o = e.tag, l = o === $ || o === Z;
      if (l) {
        var s = e.stateNode;
        t ? fb(a, s, t) : sb(a, s);
      } else if (o !== V) {
        var v = e.child;
        if (v !== null) {
          v1(v, t, a);
          for (var y = v.sibling; y !== null; )
            v1(y, t, a), y = y.sibling;
        }
      }
    }
    var Kr = null, wi = !1;
    function GR(e, t, a) {
      {
        var o = t;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case $: {
              Kr = o.stateNode, wi = !1;
              break e;
            }
            case U: {
              Kr = o.stateNode.containerInfo, wi = !0;
              break e;
            }
            case V: {
              Kr = o.stateNode.containerInfo, wi = !0;
              break e;
            }
          }
          o = o.return;
        }
        if (Kr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        FS(e, t, a), Kr = null, wi = !1;
      }
      qR(a);
    }
    function os(e, t, a) {
      for (var o = a.child; o !== null; )
        FS(e, t, o), o = o.sibling;
    }
    function FS(e, t, a) {
      switch (qd(a), a.tag) {
        case $:
          Qr || ud(a, t);
        // eslint-disable-next-line-no-fallthrough
        case Z: {
          {
            var o = Kr, l = wi;
            Kr = null, os(e, t, a), Kr = o, wi = l, Kr !== null && (wi ? vb(Kr, a.stateNode) : pb(Kr, a.stateNode));
          }
          return;
        }
        case Ze: {
          Kr !== null && (wi ? hb(Kr, a.stateNode) : wg(Kr, a.stateNode));
          return;
        }
        case V: {
          {
            var s = Kr, v = wi;
            Kr = a.stateNode.containerInfo, wi = !0, os(e, t, a), Kr = s, wi = v;
          }
          return;
        }
        case x:
        case Ee:
        case Ie:
        case Te: {
          if (!Qr) {
            var y = a.updateQueue;
            if (y !== null) {
              var _ = y.lastEffect;
              if (_ !== null) {
                var T = _.next, N = T;
                do {
                  var I = N, z = I.destroy, G = I.tag;
                  z !== void 0 && ((G & il) !== Ka ? ay(a, t, z) : (G & Cr) !== Ka && (Ms(a), a.mode & Bt ? (cl(), ay(a, t, z), sl(a)) : ay(a, t, z), Qd())), N = N.next;
                } while (N !== T);
              }
            }
          }
          os(e, t, a);
          return;
        }
        case k: {
          if (!Qr) {
            ud(a, t);
            var X = a.stateNode;
            typeof X.componentWillUnmount == "function" && d1(a, t, X);
          }
          os(e, t, a);
          return;
        }
        case L: {
          os(e, t, a);
          return;
        }
        case Y: {
          if (
            // TODO: Remove this dead flag
            a.mode & Nt
          ) {
            var oe = Qr;
            Qr = oe || a.memoizedState !== null, os(e, t, a), Qr = oe;
          } else
            os(e, t, a);
          break;
        }
        default: {
          os(e, t, a);
          return;
        }
      }
    }
    function QR(e) {
      e.memoizedState;
    }
    function KR(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var o = t.alternate;
        if (o !== null) {
          var l = o.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && jb(s);
          }
        }
      }
    }
    function VS(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new LR()), t.forEach(function(o) {
          var l = Wk.bind(null, e, o);
          if (!a.has(o)) {
            if (a.add(o), la)
              if (id !== null && ld !== null)
                yv(ld, id);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            o.then(l, l);
          }
        });
      }
    }
    function XR(e, t, a) {
      id = a, ld = e, tn(t), $S(t, e), tn(t), id = null, ld = null;
    }
    function Ri(e, t, a) {
      var o = t.deletions;
      if (o !== null)
        for (var l = 0; l < o.length; l++) {
          var s = o[l];
          try {
            GR(e, t, s);
          } catch (_) {
            gn(s, t, _);
          }
        }
      var v = ji();
      if (t.subtreeFlags & Bi)
        for (var y = t.child; y !== null; )
          tn(y), $S(y, e), y = y.sibling;
      tn(v);
    }
    function $S(e, t, a) {
      var o = e.alternate, l = e.flags;
      switch (e.tag) {
        case x:
        case Ee:
        case Ie:
        case Te: {
          if (Ri(t, e), fl(e), l & Ut) {
            try {
              bi(il | Sr, e, e.return), as(il | Sr, e);
            } catch (ht) {
              gn(e, e.return, ht);
            }
            if (e.mode & Bt) {
              try {
                cl(), bi(Cr | Sr, e, e.return);
              } catch (ht) {
                gn(e, e.return, ht);
              }
              sl(e);
            } else
              try {
                bi(Cr | Sr, e, e.return);
              } catch (ht) {
                gn(e, e.return, ht);
              }
          }
          return;
        }
        case k: {
          Ri(t, e), fl(e), l & Nn && o !== null && ud(o, o.return);
          return;
        }
        case $: {
          Ri(t, e), fl(e), l & Nn && o !== null && ud(o, o.return);
          {
            if (e.flags & Fa) {
              var s = e.stateNode;
              try {
                V_(s);
              } catch (ht) {
                gn(e, e.return, ht);
              }
            }
            if (l & Ut) {
              var v = e.stateNode;
              if (v != null) {
                var y = e.memoizedProps, _ = o !== null ? o.memoizedProps : y, T = e.type, N = e.updateQueue;
                if (e.updateQueue = null, N !== null)
                  try {
                    lb(v, N, T, _, y, e);
                  } catch (ht) {
                    gn(e, e.return, ht);
                  }
              }
            }
          }
          return;
        }
        case Z: {
          if (Ri(t, e), fl(e), l & Ut) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var I = e.stateNode, z = e.memoizedProps, G = o !== null ? o.memoizedProps : z;
            try {
              ub(I, G, z);
            } catch (ht) {
              gn(e, e.return, ht);
            }
          }
          return;
        }
        case U: {
          if (Ri(t, e), fl(e), l & Ut && o !== null) {
            var X = o.memoizedState;
            if (X.isDehydrated)
              try {
                Lb(t.containerInfo);
              } catch (ht) {
                gn(e, e.return, ht);
              }
          }
          return;
        }
        case V: {
          Ri(t, e), fl(e);
          return;
        }
        case ae: {
          Ri(t, e), fl(e);
          var oe = e.child;
          if (oe.flags & Hn) {
            var Pe = oe.stateNode, st = oe.memoizedState, nt = st !== null;
            if (Pe.isHidden = nt, nt) {
              var It = oe.alternate !== null && oe.alternate.memoizedState !== null;
              It || Ok();
            }
          }
          if (l & Ut) {
            try {
              QR(e);
            } catch (ht) {
              gn(e, e.return, ht);
            }
            VS(e);
          }
          return;
        }
        case Y: {
          var Lt = o !== null && o.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Nt
          ) {
            var B = Qr;
            Qr = B || Lt, Ri(t, e), Qr = B;
          } else
            Ri(t, e);
          if (fl(e), l & Hn) {
            var ie = e.stateNode, q = e.memoizedState, _e = q !== null, We = e;
            if (ie.isHidden = _e, _e && !Lt && (We.mode & Nt) !== it) {
              Je = We;
              for (var Fe = We.child; Fe !== null; )
                Je = Fe, ZR(Fe), Fe = Fe.sibling;
            }
            BR(We, _e);
          }
          return;
        }
        case re: {
          Ri(t, e), fl(e), l & Ut && VS(e);
          return;
        }
        case L:
          return;
        default: {
          Ri(t, e), fl(e);
          return;
        }
      }
    }
    function fl(e) {
      var t = e.flags;
      if (t & wn) {
        try {
          YR(e);
        } catch (a) {
          gn(e, e.return, a);
        }
        e.flags &= ~wn;
      }
      t & aa && (e.flags &= ~aa);
    }
    function JR(e, t, a) {
      id = a, ld = t, Je = e, HS(e, t, a), id = null, ld = null;
    }
    function HS(e, t, a) {
      for (var o = (e.mode & Nt) !== it; Je !== null; ) {
        var l = Je, s = l.child;
        if (l.tag === Y && o) {
          var v = l.memoizedState !== null, y = v || ry;
          if (y) {
            h1(e, t, a);
            continue;
          } else {
            var _ = l.alternate, T = _ !== null && _.memoizedState !== null, N = T || Qr, I = ry, z = Qr;
            ry = y, Qr = N, Qr && !z && (Je = l, ek(l));
            for (var G = s; G !== null; )
              Je = G, HS(
                G,
                // New root; bubble back up to here and stop.
                t,
                a
              ), G = G.sibling;
            Je = l, ry = I, Qr = z, h1(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & qi) !== ot && s !== null ? (s.return = l, Je = s) : h1(e, t, a);
      }
    }
    function h1(e, t, a) {
      for (; Je !== null; ) {
        var o = Je;
        if ((o.flags & qi) !== ot) {
          var l = o.alternate;
          tn(o);
          try {
            $R(t, l, o, a);
          } catch (v) {
            gn(o, o.return, v);
          }
          yn();
        }
        if (o === e) {
          Je = null;
          return;
        }
        var s = o.sibling;
        if (s !== null) {
          s.return = o.return, Je = s;
          return;
        }
        Je = o.return;
      }
    }
    function ZR(e) {
      for (; Je !== null; ) {
        var t = Je, a = t.child;
        switch (t.tag) {
          case x:
          case Ee:
          case Ie:
          case Te: {
            if (t.mode & Bt)
              try {
                cl(), bi(Cr, t, t.return);
              } finally {
                sl(t);
              }
            else
              bi(Cr, t, t.return);
            break;
          }
          case k: {
            ud(t, t.return);
            var o = t.stateNode;
            typeof o.componentWillUnmount == "function" && d1(t, t.return, o);
            break;
          }
          case $: {
            ud(t, t.return);
            break;
          }
          case Y: {
            var l = t.memoizedState !== null;
            if (l) {
              BS(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Je = a) : BS(e);
      }
    }
    function BS(e) {
      for (; Je !== null; ) {
        var t = Je;
        if (t === e) {
          Je = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Je = a;
          return;
        }
        Je = t.return;
      }
    }
    function ek(e) {
      for (; Je !== null; ) {
        var t = Je, a = t.child;
        if (t.tag === Y) {
          var o = t.memoizedState !== null;
          if (o) {
            qS(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Je = a) : qS(e);
      }
    }
    function qS(e) {
      for (; Je !== null; ) {
        var t = Je;
        tn(t);
        try {
          HR(t);
        } catch (o) {
          gn(t, t.return, o);
        }
        if (yn(), t === e) {
          Je = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Je = a;
          return;
        }
        Je = t.return;
      }
    }
    function tk(e, t, a, o) {
      Je = t, nk(t, e, a, o);
    }
    function nk(e, t, a, o) {
      for (; Je !== null; ) {
        var l = Je, s = l.child;
        (l.subtreeFlags & si) !== ot && s !== null ? (s.return = l, Je = s) : rk(e, t, a, o);
      }
    }
    function rk(e, t, a, o) {
      for (; Je !== null; ) {
        var l = Je;
        if ((l.flags & ra) !== ot) {
          tn(l);
          try {
            ak(t, l, a, o);
          } catch (v) {
            gn(l, l.return, v);
          }
          yn();
        }
        if (l === e) {
          Je = null;
          return;
        }
        var s = l.sibling;
        if (s !== null) {
          s.return = l.return, Je = s;
          return;
        }
        Je = l.return;
      }
    }
    function ak(e, t, a, o) {
      switch (t.tag) {
        case x:
        case Ee:
        case Te: {
          if (t.mode & Bt) {
            j0();
            try {
              as(Yr | Sr, t);
            } finally {
              L0(t);
            }
          } else
            as(Yr | Sr, t);
          break;
        }
      }
    }
    function ok(e) {
      Je = e, ik();
    }
    function ik() {
      for (; Je !== null; ) {
        var e = Je, t = e.child;
        if ((Je.flags & Ia) !== ot) {
          var a = e.deletions;
          if (a !== null) {
            for (var o = 0; o < a.length; o++) {
              var l = a[o];
              Je = l, sk(l, e);
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
            Je = e;
          }
        }
        (e.subtreeFlags & si) !== ot && t !== null ? (t.return = e, Je = t) : lk();
      }
    }
    function lk() {
      for (; Je !== null; ) {
        var e = Je;
        (e.flags & ra) !== ot && (tn(e), uk(e), yn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Je = t;
          return;
        }
        Je = e.return;
      }
    }
    function uk(e) {
      switch (e.tag) {
        case x:
        case Ee:
        case Te: {
          e.mode & Bt ? (j0(), bi(Yr | Sr, e, e.return), L0(e)) : bi(Yr | Sr, e, e.return);
          break;
        }
      }
    }
    function sk(e, t) {
      for (; Je !== null; ) {
        var a = Je;
        tn(a), fk(a, t), yn();
        var o = a.child;
        o !== null ? (o.return = a, Je = o) : ck(e);
      }
    }
    function ck(e) {
      for (; Je !== null; ) {
        var t = Je, a = t.sibling, o = t.return;
        if (zS(t), t === e) {
          Je = null;
          return;
        }
        if (a !== null) {
          a.return = o, Je = a;
          return;
        }
        Je = o;
      }
    }
    function fk(e, t) {
      switch (e.tag) {
        case x:
        case Ee:
        case Te: {
          e.mode & Bt ? (j0(), bi(Yr, e, t), L0(e)) : bi(Yr, e, t);
          break;
        }
      }
    }
    function dk(e) {
      switch (e.tag) {
        case x:
        case Ee:
        case Te: {
          try {
            as(Cr | Sr, e);
          } catch (a) {
            gn(e, e.return, a);
          }
          break;
        }
        case k: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            gn(e, e.return, a);
          }
          break;
        }
      }
    }
    function pk(e) {
      switch (e.tag) {
        case x:
        case Ee:
        case Te: {
          try {
            as(Yr | Sr, e);
          } catch (t) {
            gn(e, e.return, t);
          }
          break;
        }
      }
    }
    function vk(e) {
      switch (e.tag) {
        case x:
        case Ee:
        case Te: {
          try {
            bi(Cr | Sr, e, e.return);
          } catch (a) {
            gn(e, e.return, a);
          }
          break;
        }
        case k: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && d1(e, e.return, t);
          break;
        }
      }
    }
    function hk(e) {
      switch (e.tag) {
        case x:
        case Ee:
        case Te:
          try {
            bi(Yr | Sr, e, e.return);
          } catch (t) {
            gn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var iv = Symbol.for;
      iv("selector.component"), iv("selector.has_pseudo_class"), iv("selector.role"), iv("selector.test_id"), iv("selector.text");
    }
    var mk = [];
    function yk() {
      mk.forEach(function(e) {
        return e();
      });
    }
    var gk = f.ReactCurrentActQueue;
    function _k(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function WS() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && gk.current !== null && h("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Sk = Math.ceil, m1 = f.ReactCurrentDispatcher, y1 = f.ReactCurrentOwner, Xr = f.ReactCurrentBatchConfig, ki = f.ReactCurrentActQueue, br = (
      /*             */
      0
    ), YS = (
      /*               */
      1
    ), Jr = (
      /*                */
      2
    ), Go = (
      /*                */
      4
    ), au = 0, lv = 1, Cc = 2, oy = 3, uv = 4, GS = 5, g1 = 6, Pt = br, Na = null, Fn = null, wr = ce, dl = ce, _1 = Qu(ce), Rr = au, sv = null, iy = ce, cv = ce, ly = ce, fv = null, Xa = null, S1 = 0, QS = 500, KS = 1 / 0, Ck = 500, ou = null;
    function dv() {
      KS = tr() + Ck;
    }
    function XS() {
      return KS;
    }
    var uy = !1, C1 = null, sd = null, Ec = !1, is = null, pv = ce, E1 = [], x1 = null, Ek = 50, vv = 0, b1 = null, w1 = !1, sy = !1, xk = 50, cd = 0, cy = null, hv = un, fy = ce, JS = !1;
    function dy() {
      return Na;
    }
    function Ma() {
      return (Pt & (Jr | Go)) !== br ? tr() : (hv !== un || (hv = tr()), hv);
    }
    function ls(e) {
      var t = e.mode;
      if ((t & Nt) === it)
        return vt;
      if ((Pt & Jr) !== br && wr !== ce)
        return Hs(wr);
      var a = gw() !== yw;
      if (a) {
        if (Xr.transition !== null) {
          var o = Xr.transition;
          o._updatedFibers || (o._updatedFibers = /* @__PURE__ */ new Set()), o._updatedFibers.add(e);
        }
        return fy === $t && (fy = rp()), fy;
      }
      var l = Wa();
      if (l !== $t)
        return l;
      var s = nb();
      return s;
    }
    function bk(e) {
      var t = e.mode;
      return (t & Nt) === it ? vt : mh();
    }
    function kr(e, t, a, o) {
      Gk(), JS && h("useInsertionEffect must not schedule updates."), w1 && (sy = !0), Pu(e, a, o), (Pt & Jr) !== ce && e === Na ? Xk(t) : (la && Ws(e, t, a), Jk(t), e === Na && ((Pt & Jr) === br && (cv = bt(cv, a)), Rr === uv && us(e, wr)), Ja(e, o), a === vt && Pt === br && (t.mode & Nt) === it && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ki.isBatchingLegacy && (dv(), J_()));
    }
    function wk(e, t, a) {
      var o = e.current;
      o.lanes = t, Pu(e, t, a), Ja(e, a);
    }
    function Rk(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Pt & Jr) !== br
      );
    }
    function Ja(e, t) {
      var a = e.callbackNode;
      _f(e, t);
      var o = gf(e, e === Na ? wr : ce);
      if (o === ce) {
        a !== null && vC(a), e.callbackNode = null, e.callbackPriority = $t;
        return;
      }
      var l = Ki(o), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ki.current !== null && a !== D1)) {
        a == null && s !== vt && h("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && vC(a);
      var v;
      if (l === vt)
        e.tag === Ku ? (ki.isBatchingLegacy !== null && (ki.didScheduleLegacyUpdate = !0), ew(tC.bind(null, e))) : X_(tC.bind(null, e)), ki.current !== null ? ki.current.push(Xu) : ab(function() {
          (Pt & (Jr | Go)) === br && Xu();
        }), v = null;
      else {
        var y;
        switch (xh(o)) {
          case Vr:
            y = Ns;
            break;
          case Po:
            y = Wi;
            break;
          case Ba:
            y = ci;
            break;
          case qa:
            y = Dl;
            break;
          default:
            y = ci;
            break;
        }
        v = L1(y, ZS.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = v;
    }
    function ZS(e, t) {
      if (Bw(), hv = un, fy = ce, (Pt & (Jr | Go)) !== br)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, o = lu();
      if (o && e.callbackNode !== a)
        return null;
      var l = gf(e, e === Na ? wr : ce);
      if (l === ce)
        return null;
      var s = !Cf(e, l) && !hh(e, l) && !t, v = s ? Uk(e, l) : vy(e, l);
      if (v !== au) {
        if (v === Cc) {
          var y = Sf(e);
          y !== ce && (l = y, v = R1(e, y));
        }
        if (v === lv) {
          var _ = sv;
          throw xc(e, ce), us(e, l), Ja(e, tr()), _;
        }
        if (v === g1)
          us(e, l);
        else {
          var T = !Cf(e, l), N = e.current.alternate;
          if (T && !Tk(N)) {
            if (v = vy(e, l), v === Cc) {
              var I = Sf(e);
              I !== ce && (l = I, v = R1(e, I));
            }
            if (v === lv) {
              var z = sv;
              throw xc(e, ce), us(e, l), Ja(e, tr()), z;
            }
          }
          e.finishedWork = N, e.finishedLanes = l, kk(e, v, l);
        }
      }
      return Ja(e, tr()), e.callbackNode === a ? ZS.bind(null, e) : null;
    }
    function R1(e, t) {
      var a = fv;
      if (bf(e)) {
        var o = xc(e, t);
        o.flags |= Or, Yb(e.containerInfo);
      }
      var l = vy(e, t);
      if (l !== Cc) {
        var s = Xa;
        Xa = a, s !== null && eC(s);
      }
      return l;
    }
    function eC(e) {
      Xa === null ? Xa = e : Xa.push.apply(Xa, e);
    }
    function kk(e, t, a) {
      switch (t) {
        case au:
        case lv:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case Cc: {
          bc(e, Xa, ou);
          break;
        }
        case oy: {
          if (us(e, a), Hl(a) && // do not delay if we're inside an act() scope
          !hC()) {
            var o = S1 + QS - tr();
            if (o > 10) {
              var l = gf(e, ce);
              if (l !== ce)
                break;
              var s = e.suspendedLanes;
              if (!Bl(s, a)) {
                Ma(), Ef(e, s);
                break;
              }
              e.timeoutHandle = xg(bc.bind(null, e, Xa, ou), o);
              break;
            }
          }
          bc(e, Xa, ou);
          break;
        }
        case uv: {
          if (us(e, a), tp(a))
            break;
          if (!hC()) {
            var v = ho(e, a), y = v, _ = tr() - y, T = Yk(_) - _;
            if (T > 10) {
              e.timeoutHandle = xg(bc.bind(null, e, Xa, ou), T);
              break;
            }
          }
          bc(e, Xa, ou);
          break;
        }
        case GS: {
          bc(e, Xa, ou);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Tk(e) {
      for (var t = e; ; ) {
        if (t.flags & Lu) {
          var a = t.updateQueue;
          if (a !== null) {
            var o = a.stores;
            if (o !== null)
              for (var l = 0; l < o.length; l++) {
                var s = o[l], v = s.getSnapshot, y = s.value;
                try {
                  if (!he(v(), y))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var _ = t.child;
        if (t.subtreeFlags & Lu && _ !== null) {
          _.return = t, t = _;
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
    function us(e, t) {
      t = Bs(t, ly), t = Bs(t, cv), _h(e, t);
    }
    function tC(e) {
      if (qw(), (Pt & (Jr | Go)) !== br)
        throw new Error("Should not already be working.");
      lu();
      var t = gf(e, ce);
      if (!sa(t, vt))
        return Ja(e, tr()), null;
      var a = vy(e, t);
      if (e.tag !== Ku && a === Cc) {
        var o = Sf(e);
        o !== ce && (t = o, a = R1(e, o));
      }
      if (a === lv) {
        var l = sv;
        throw xc(e, ce), us(e, t), Ja(e, tr()), l;
      }
      if (a === g1)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, bc(e, Xa, ou), Ja(e, tr()), null;
    }
    function Nk(e, t) {
      t !== ce && (xf(e, bt(t, vt)), Ja(e, tr()), (Pt & (Jr | Go)) === br && (dv(), Xu()));
    }
    function k1(e, t) {
      var a = Pt;
      Pt |= YS;
      try {
        return e(t);
      } finally {
        Pt = a, Pt === br && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ki.isBatchingLegacy && (dv(), J_());
      }
    }
    function Mk(e, t, a, o, l) {
      var s = Wa(), v = Xr.transition;
      try {
        return Xr.transition = null, Yn(Vr), e(t, a, o, l);
      } finally {
        Yn(s), Xr.transition = v, Pt === br && dv();
      }
    }
    function iu(e) {
      is !== null && is.tag === Ku && (Pt & (Jr | Go)) === br && lu();
      var t = Pt;
      Pt |= YS;
      var a = Xr.transition, o = Wa();
      try {
        return Xr.transition = null, Yn(Vr), e ? e() : void 0;
      } finally {
        Yn(o), Xr.transition = a, Pt = t, (Pt & (Jr | Go)) === br && Xu();
      }
    }
    function nC() {
      return (Pt & (Jr | Go)) !== br;
    }
    function py(e, t) {
      va(_1, dl, e), dl = bt(dl, t);
    }
    function T1(e) {
      dl = _1.current, pa(_1, e);
    }
    function xc(e, t) {
      e.finishedWork = null, e.finishedLanes = ce;
      var a = e.timeoutHandle;
      if (a !== bg && (e.timeoutHandle = bg, rb(a)), Fn !== null)
        for (var o = Fn.return; o !== null; ) {
          var l = o.alternate;
          OS(l, o), o = o.return;
        }
      Na = e;
      var s = wc(e.current, null);
      return Fn = s, wr = dl = t, Rr = au, sv = null, iy = ce, cv = ce, ly = ce, fv = null, Xa = null, ww(), _i.discardPendingWarnings(), s;
    }
    function rC(e, t) {
      do {
        var a = Fn;
        try {
          if (xm(), k2(), yn(), y1.current = null, a === null || a.return === null) {
            Rr = lv, sv = t, Fn = null;
            return;
          }
          if (He && a.mode & Bt && Jm(a, !0), $e)
            if (wa(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var o = t;
              zo(a, o, wr);
            } else
              Os(a, t, wr);
          eR(e, a.return, a, t, wr), lC(a);
        } catch (l) {
          t = l, Fn === a && a !== null ? (a = a.return, Fn = a) : a = Fn;
          continue;
        }
        return;
      } while (!0);
    }
    function aC() {
      var e = m1.current;
      return m1.current = Ym, e === null ? Ym : e;
    }
    function oC(e) {
      m1.current = e;
    }
    function Ok() {
      S1 = tr();
    }
    function mv(e) {
      iy = bt(e, iy);
    }
    function Dk() {
      Rr === au && (Rr = oy);
    }
    function N1() {
      (Rr === au || Rr === oy || Rr === Cc) && (Rr = uv), Na !== null && ($s(iy) || $s(cv)) && us(Na, wr);
    }
    function Lk(e) {
      Rr !== uv && (Rr = Cc), fv === null ? fv = [e] : fv.push(e);
    }
    function jk() {
      return Rr === au;
    }
    function vy(e, t) {
      var a = Pt;
      Pt |= Jr;
      var o = aC();
      if (Na !== e || wr !== t) {
        if (la) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (yv(e, wr), l.clear()), Sh(e, t);
        }
        ou = lp(), xc(e, t);
      }
      Ul(t);
      do
        try {
          Ak();
          break;
        } catch (s) {
          rC(e, s);
        }
      while (!0);
      if (xm(), Pt = a, oC(o), Fn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Zc(), Na = null, wr = ce, Rr;
    }
    function Ak() {
      for (; Fn !== null; )
        iC(Fn);
    }
    function Uk(e, t) {
      var a = Pt;
      Pt |= Jr;
      var o = aC();
      if (Na !== e || wr !== t) {
        if (la) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (yv(e, wr), l.clear()), Sh(e, t);
        }
        ou = lp(), dv(), xc(e, t);
      }
      Ul(t);
      do
        try {
          zk();
          break;
        } catch (s) {
          rC(e, s);
        }
      while (!0);
      return xm(), oC(o), Pt = a, Fn !== null ? (fh(), au) : (Zc(), Na = null, wr = ce, Rr);
    }
    function zk() {
      for (; Fn !== null && !Fd(); )
        iC(Fn);
    }
    function iC(e) {
      var t = e.alternate;
      tn(e);
      var a;
      (e.mode & Bt) !== it ? (D0(e), a = M1(t, e, dl), Jm(e, !0)) : a = M1(t, e, dl), yn(), e.memoizedProps = e.pendingProps, a === null ? lC(e) : Fn = a, y1.current = null;
    }
    function lC(e) {
      var t = e;
      do {
        var a = t.alternate, o = t.return;
        if ((t.flags & Ts) === ot) {
          tn(t);
          var l = void 0;
          if ((t.mode & Bt) === it ? l = MS(a, t, dl) : (D0(t), l = MS(a, t, dl), Jm(t, !1)), yn(), l !== null) {
            Fn = l;
            return;
          }
        } else {
          var s = DR(a, t);
          if (s !== null) {
            s.flags &= oh, Fn = s;
            return;
          }
          if ((t.mode & Bt) !== it) {
            Jm(t, !1);
            for (var v = t.actualDuration, y = t.child; y !== null; )
              v += y.actualDuration, y = y.sibling;
            t.actualDuration = v;
          }
          if (o !== null)
            o.flags |= Ts, o.subtreeFlags = ot, o.deletions = null;
          else {
            Rr = g1, Fn = null;
            return;
          }
        }
        var _ = t.sibling;
        if (_ !== null) {
          Fn = _;
          return;
        }
        t = o, Fn = t;
      } while (t !== null);
      Rr === au && (Rr = GS);
    }
    function bc(e, t, a) {
      var o = Wa(), l = Xr.transition;
      try {
        Xr.transition = null, Yn(Vr), Pk(e, t, a, o);
      } finally {
        Xr.transition = l, Yn(o);
      }
      return null;
    }
    function Pk(e, t, a, o) {
      do
        lu();
      while (is !== null);
      if (Qk(), (Pt & (Jr | Go)) !== br)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (Wd(s), l === null)
        return Yd(), null;
      if (s === ce && h("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ce, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = $t;
      var v = bt(l.lanes, l.childLanes);
      op(e, v), e === Na && (Na = null, Fn = null, wr = ce), ((l.subtreeFlags & si) !== ot || (l.flags & si) !== ot) && (Ec || (Ec = !0, x1 = a, L1(ci, function() {
        return lu(), null;
      })));
      var y = (l.subtreeFlags & (Hi | Bi | qi | si)) !== ot, _ = (l.flags & (Hi | Bi | qi | si)) !== ot;
      if (y || _) {
        var T = Xr.transition;
        Xr.transition = null;
        var N = Wa();
        Yn(Vr);
        var I = Pt;
        Pt |= Go, y1.current = null, zR(e, l), J2(), XR(e, l, s), Kx(e.containerInfo), e.current = l, Ds(s), JR(l, e, s), Ls(), Vd(), Pt = I, Yn(N), Xr.transition = T;
      } else
        e.current = l, J2();
      var z = Ec;
      if (Ec ? (Ec = !1, is = e, pv = s) : (cd = 0, cy = null), v = e.pendingLanes, v === ce && (sd = null), z || fC(e.current, !1), Hd(l.stateNode, o), la && e.memoizedUpdaters.clear(), yk(), Ja(e, tr()), t !== null)
        for (var G = e.onRecoverableError, X = 0; X < t.length; X++) {
          var oe = t[X], Pe = oe.stack, st = oe.digest;
          G(oe.value, {
            componentStack: Pe,
            digest: st
          });
        }
      if (uy) {
        uy = !1;
        var nt = C1;
        throw C1 = null, nt;
      }
      return sa(pv, vt) && e.tag !== Ku && lu(), v = e.pendingLanes, sa(v, vt) ? (Hw(), e === b1 ? vv++ : (vv = 0, b1 = e)) : vv = 0, Xu(), Yd(), null;
    }
    function lu() {
      if (is !== null) {
        var e = xh(pv), t = Gs(Ba, e), a = Xr.transition, o = Wa();
        try {
          return Xr.transition = null, Yn(t), Fk();
        } finally {
          Yn(o), Xr.transition = a;
        }
      }
      return !1;
    }
    function Ik(e) {
      E1.push(e), Ec || (Ec = !0, L1(ci, function() {
        return lu(), null;
      }));
    }
    function Fk() {
      if (is === null)
        return !1;
      var e = x1;
      x1 = null;
      var t = is, a = pv;
      if (is = null, pv = ce, (Pt & (Jr | Go)) !== br)
        throw new Error("Cannot flush passive effects while already rendering.");
      w1 = !0, sy = !1, Al(a);
      var o = Pt;
      Pt |= Go, ok(t.current), tk(t, t.current, a, e);
      {
        var l = E1;
        E1 = [];
        for (var s = 0; s < l.length; s++) {
          var v = l[s];
          VR(t, v);
        }
      }
      Kd(), fC(t.current, !0), Pt = o, Xu(), sy ? t === cy ? cd++ : (cd = 0, cy = t) : cd = 0, w1 = !1, sy = !1, Bd(t);
      {
        var y = t.current.stateNode;
        y.effectDuration = 0, y.passiveEffectDuration = 0;
      }
      return !0;
    }
    function uC(e) {
      return sd !== null && sd.has(e);
    }
    function Vk(e) {
      sd === null ? sd = /* @__PURE__ */ new Set([e]) : sd.add(e);
    }
    function $k(e) {
      uy || (uy = !0, C1 = e);
    }
    var Hk = $k;
    function sC(e, t, a) {
      var o = _c(a, t), l = iS(e, o, vt), s = Zu(e, l, vt), v = Ma();
      s !== null && (Pu(s, vt, v), Ja(s, v));
    }
    function gn(e, t, a) {
      if (jR(a), gv(!1), e.tag === U) {
        sC(e, e, a);
        return;
      }
      var o = null;
      for (o = t; o !== null; ) {
        if (o.tag === U) {
          sC(o, e, a);
          return;
        } else if (o.tag === k) {
          var l = o.type, s = o.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !uC(s)) {
            var v = _c(a, e), y = K0(o, v, vt), _ = Zu(o, y, vt), T = Ma();
            _ !== null && (Pu(_, vt, T), Ja(_, T));
            return;
          }
        }
        o = o.return;
      }
      h(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Bk(e, t, a) {
      var o = e.pingCache;
      o !== null && o.delete(t);
      var l = Ma();
      Ef(e, a), Zk(e), Na === e && Bl(wr, a) && (Rr === uv || Rr === oy && Hl(wr) && tr() - S1 < QS ? xc(e, ce) : ly = bt(ly, a)), Ja(e, l);
    }
    function cC(e, t) {
      t === $t && (t = bk(e));
      var a = Ma(), o = Qa(e, t);
      o !== null && (Pu(o, t, a), Ja(o, a));
    }
    function qk(e) {
      var t = e.memoizedState, a = $t;
      t !== null && (a = t.retryLane), cC(e, a);
    }
    function Wk(e, t) {
      var a = $t, o;
      switch (e.tag) {
        case ae:
          o = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case re:
          o = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      o !== null && o.delete(t), cC(e, a);
    }
    function Yk(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Sk(e / 1960) * 1960;
    }
    function Gk() {
      if (vv > Ek)
        throw vv = 0, b1 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      cd > xk && (cd = 0, cy = null, h("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Qk() {
      _i.flushLegacyContextWarning(), _i.flushPendingUnsafeLifecycleWarnings();
    }
    function fC(e, t) {
      tn(e), hy(e, $i, vk), t && hy(e, jo, hk), hy(e, $i, dk), t && hy(e, jo, pk), yn();
    }
    function hy(e, t, a) {
      for (var o = e, l = null; o !== null; ) {
        var s = o.subtreeFlags & t;
        o !== l && o.child !== null && s !== ot ? o = o.child : ((o.flags & t) !== ot && a(o), o.sibling !== null ? o = o.sibling : o = l = o.return);
      }
    }
    var my = null;
    function dC(e) {
      {
        if ((Pt & Jr) !== br || !(e.mode & Nt))
          return;
        var t = e.tag;
        if (t !== M && t !== U && t !== k && t !== x && t !== Ee && t !== Ie && t !== Te)
          return;
        var a = gt(e) || "ReactComponent";
        if (my !== null) {
          if (my.has(a))
            return;
          my.add(a);
        } else
          my = /* @__PURE__ */ new Set([a]);
        var o = hr;
        try {
          tn(e), h("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          o ? tn(e) : yn();
        }
      }
    }
    var M1;
    {
      var Kk = null;
      M1 = function(e, t, a) {
        var o = SC(Kk, t);
        try {
          return wS(e, t, a);
        } catch (s) {
          if (uw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (xm(), k2(), OS(e, t), SC(t, o), t.mode & Bt && D0(t), Vi(null, wS, null, e, t, a), li()) {
            var l = ks();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var pC = !1, O1;
    O1 = /* @__PURE__ */ new Set();
    function Xk(e) {
      if (ko && !Fw())
        switch (e.tag) {
          case x:
          case Ee:
          case Te: {
            var t = Fn && gt(Fn) || "Unknown", a = t;
            if (!O1.has(a)) {
              O1.add(a);
              var o = gt(e) || "Unknown";
              h("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", o, t, t);
            }
            break;
          }
          case k: {
            pC || (h("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), pC = !0);
            break;
          }
        }
    }
    function yv(e, t) {
      if (la) {
        var a = e.memoizedUpdaters;
        a.forEach(function(o) {
          Ws(e, o, t);
        });
      }
    }
    var D1 = {};
    function L1(e, t) {
      {
        var a = ki.current;
        return a !== null ? (a.push(t), D1) : Id(e, t);
      }
    }
    function vC(e) {
      if (e !== D1)
        return lh(e);
    }
    function hC() {
      return ki.current !== null;
    }
    function Jk(e) {
      {
        if (e.mode & Nt) {
          if (!WS())
            return;
        } else if (!_k() || Pt !== br || e.tag !== x && e.tag !== Ee && e.tag !== Te)
          return;
        if (ki.current === null) {
          var t = hr;
          try {
            tn(e), h(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, gt(e));
          } finally {
            t ? tn(e) : yn();
          }
        }
      }
    }
    function Zk(e) {
      e.tag !== Ku && WS() && ki.current === null && h(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function gv(e) {
      JS = e;
    }
    var Qo = null, fd = null, eT = function(e) {
      Qo = e;
    };
    function dd(e) {
      {
        if (Qo === null)
          return e;
        var t = Qo(e);
        return t === void 0 ? e : t.current;
      }
    }
    function j1(e) {
      return dd(e);
    }
    function A1(e) {
      {
        if (Qo === null)
          return e;
        var t = Qo(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = dd(e.render);
            if (e.render !== a) {
              var o = {
                $$typeof: se,
                render: a
              };
              return e.displayName !== void 0 && (o.displayName = e.displayName), o;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function mC(e, t) {
      {
        if (Qo === null)
          return !1;
        var a = e.elementType, o = t.type, l = !1, s = typeof o == "object" && o !== null ? o.$$typeof : null;
        switch (e.tag) {
          case k: {
            typeof o == "function" && (l = !0);
            break;
          }
          case x: {
            (typeof o == "function" || s === _t) && (l = !0);
            break;
          }
          case Ee: {
            (s === se || s === _t) && (l = !0);
            break;
          }
          case Ie:
          case Te: {
            (s === Et || s === _t) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var v = Qo(a);
          if (v !== void 0 && v === Qo(o))
            return !0;
        }
        return !1;
      }
    }
    function yC(e) {
      {
        if (Qo === null || typeof WeakSet != "function")
          return;
        fd === null && (fd = /* @__PURE__ */ new WeakSet()), fd.add(e);
      }
    }
    var tT = function(e, t) {
      {
        if (Qo === null)
          return;
        var a = t.staleFamilies, o = t.updatedFamilies;
        lu(), iu(function() {
          U1(e.current, o, a);
        });
      }
    }, nT = function(e, t) {
      {
        if (e.context !== go)
          return;
        lu(), iu(function() {
          _v(t, e, null, null);
        });
      }
    };
    function U1(e, t, a) {
      {
        var o = e.alternate, l = e.child, s = e.sibling, v = e.tag, y = e.type, _ = null;
        switch (v) {
          case x:
          case Te:
          case k:
            _ = y;
            break;
          case Ee:
            _ = y.render;
            break;
        }
        if (Qo === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var T = !1, N = !1;
        if (_ !== null) {
          var I = Qo(_);
          I !== void 0 && (a.has(I) ? N = !0 : t.has(I) && (v === k ? N = !0 : T = !0));
        }
        if (fd !== null && (fd.has(e) || o !== null && fd.has(o)) && (N = !0), N && (e._debugNeedsRemount = !0), N || T) {
          var z = Qa(e, vt);
          z !== null && kr(z, e, vt, un);
        }
        l !== null && !N && U1(l, t, a), s !== null && U1(s, t, a);
      }
    }
    var rT = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), o = new Set(t.map(function(l) {
          return l.current;
        }));
        return z1(e.current, o, a), a;
      }
    };
    function z1(e, t, a) {
      {
        var o = e.child, l = e.sibling, s = e.tag, v = e.type, y = null;
        switch (s) {
          case x:
          case Te:
          case k:
            y = v;
            break;
          case Ee:
            y = v.render;
            break;
        }
        var _ = !1;
        y !== null && t.has(y) && (_ = !0), _ ? aT(e, a) : o !== null && z1(o, t, a), l !== null && z1(l, t, a);
      }
    }
    function aT(e, t) {
      {
        var a = oT(e, t);
        if (a)
          return;
        for (var o = e; ; ) {
          switch (o.tag) {
            case $:
              t.add(o.stateNode);
              return;
            case V:
              t.add(o.stateNode.containerInfo);
              return;
            case U:
              t.add(o.stateNode.containerInfo);
              return;
          }
          if (o.return === null)
            throw new Error("Expected to reach root first.");
          o = o.return;
        }
      }
    }
    function oT(e, t) {
      for (var a = e, o = !1; ; ) {
        if (a.tag === $)
          o = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return o;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return o;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var P1;
    {
      P1 = !1;
      try {
        var gC = Object.preventExtensions({});
      } catch {
        P1 = !0;
      }
    }
    function iT(e, t, a, o) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = o, this.flags = ot, this.subtreeFlags = ot, this.deletions = null, this.lanes = ce, this.childLanes = ce, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !P1 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var _o = function(e, t, a, o) {
      return new iT(e, t, a, o);
    };
    function I1(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function lT(e) {
      return typeof e == "function" && !I1(e) && e.defaultProps === void 0;
    }
    function uT(e) {
      if (typeof e == "function")
        return I1(e) ? k : x;
      if (e != null) {
        var t = e.$$typeof;
        if (t === se)
          return Ee;
        if (t === Et)
          return Ie;
      }
      return M;
    }
    function wc(e, t) {
      var a = e.alternate;
      a === null ? (a = _o(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = ot, a.subtreeFlags = ot, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Bn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var o = e.dependencies;
      switch (a.dependencies = o === null ? null : {
        lanes: o.lanes,
        firstContext: o.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case M:
        case x:
        case Te:
          a.type = dd(e.type);
          break;
        case k:
          a.type = j1(e.type);
          break;
        case Ee:
          a.type = A1(e.type);
          break;
      }
      return a;
    }
    function sT(e, t) {
      e.flags &= Bn | wn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ce, e.lanes = t, e.child = null, e.subtreeFlags = ot, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = ot, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var o = a.dependencies;
        e.dependencies = o === null ? null : {
          lanes: o.lanes,
          firstContext: o.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function cT(e, t, a) {
      var o;
      return e === pm ? (o = Nt, t === !0 && (o |= an, o |= qt)) : o = it, la && (o |= Bt), _o(U, null, null, o);
    }
    function F1(e, t, a, o, l, s) {
      var v = M, y = e;
      if (typeof e == "function")
        I1(e) ? (v = k, y = j1(y)) : y = dd(y);
      else if (typeof e == "string")
        v = $;
      else
        e: switch (e) {
          case xo:
            return ss(a.children, l, s, t);
          case ro:
            v = Se, l |= an, (l & Nt) !== it && (l |= qt);
            break;
          case bo:
            return fT(a, l, s, t);
          case Ae:
            return dT(a, l, s, t);
          case Qe:
            return pT(a, l, s, t);
          case jn:
            return _C(a, l, s, t);
          case fn:
          // eslint-disable-next-line no-fallthrough
          case Mt:
          // eslint-disable-next-line no-fallthrough
          case mn:
          // eslint-disable-next-line no-fallthrough
          case vr:
          // eslint-disable-next-line no-fallthrough
          case Tt:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case wo:
                  v = xe;
                  break e;
                case j:
                  v = Ce;
                  break e;
                case se:
                  v = Ee, y = A1(y);
                  break e;
                case Et:
                  v = Ie;
                  break e;
                case _t:
                  v = Ve, y = null;
                  break e;
              }
            var _ = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var T = o ? gt(o) : null;
              T && (_ += `

Check the render method of \`` + T + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + _));
          }
        }
      var N = _o(v, a, t, l);
      return N.elementType = e, N.type = y, N.lanes = s, N._debugOwner = o, N;
    }
    function V1(e, t, a) {
      var o = null;
      o = e._owner;
      var l = e.type, s = e.key, v = e.props, y = F1(l, s, v, o, t, a);
      return y._debugSource = e._source, y._debugOwner = e._owner, y;
    }
    function ss(e, t, a, o) {
      var l = _o(J, e, o, t);
      return l.lanes = a, l;
    }
    function fT(e, t, a, o) {
      typeof e.id != "string" && h('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = _o(De, e, o, t | Bt);
      return l.elementType = bo, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function dT(e, t, a, o) {
      var l = _o(ae, e, o, t);
      return l.elementType = Ae, l.lanes = a, l;
    }
    function pT(e, t, a, o) {
      var l = _o(re, e, o, t);
      return l.elementType = Qe, l.lanes = a, l;
    }
    function _C(e, t, a, o) {
      var l = _o(Y, e, o, t);
      l.elementType = jn, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function $1(e, t, a) {
      var o = _o(Z, e, null, t);
      return o.lanes = a, o;
    }
    function vT() {
      var e = _o($, null, null, it);
      return e.elementType = "DELETED", e;
    }
    function hT(e) {
      var t = _o(Ze, null, null, it);
      return t.stateNode = e, t;
    }
    function H1(e, t, a) {
      var o = e.children !== null ? e.children : [], l = _o(V, o, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function SC(e, t) {
      return e === null && (e = _o(M, null, null, it)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function mT(e, t, a, o, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = bg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = $t, this.eventTimes = qs(ce), this.expirationTimes = qs(un), this.pendingLanes = ce, this.suspendedLanes = ce, this.pingedLanes = ce, this.expiredLanes = ce, this.mutableReadLanes = ce, this.finishedLanes = ce, this.entangledLanes = ce, this.entanglements = qs(ce), this.identifierPrefix = o, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], v = 0; v < zl; v++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case pm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Ku:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function CC(e, t, a, o, l, s, v, y, _, T) {
      var N = new mT(e, t, a, y, _), I = cT(t, s);
      N.current = I, I.stateNode = N;
      {
        var z = {
          element: o,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        I.memoizedState = z;
      }
      return n0(I), N;
    }
    var B1 = "18.3.1";
    function yT(e, t, a) {
      var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Ar(o), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: pr,
        key: o == null ? null : "" + o,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var q1, W1;
    q1 = !1, W1 = {};
    function EC(e) {
      if (!e)
        return go;
      var t = Du(e), a = Zb(t);
      if (t.tag === k) {
        var o = t.type;
        if (ol(o))
          return Q_(t, o, a);
      }
      return a;
    }
    function gT(e, t) {
      {
        var a = Du(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var o = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + o);
        }
        var l = oa(a);
        if (l === null)
          return null;
        if (l.mode & an) {
          var s = gt(a) || "Component";
          if (!W1[s]) {
            W1[s] = !0;
            var v = hr;
            try {
              tn(l), a.mode & an ? h("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : h("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              v ? tn(v) : yn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function xC(e, t, a, o, l, s, v, y) {
      var _ = !1, T = null;
      return CC(e, t, _, T, a, o, l, s, v);
    }
    function bC(e, t, a, o, l, s, v, y, _, T) {
      var N = !0, I = CC(a, o, N, e, l, s, v, y, _);
      I.context = EC(null);
      var z = I.current, G = Ma(), X = ls(z), oe = nu(G, X);
      return oe.callback = t ?? null, Zu(z, oe, X), wk(I, X, G), I;
    }
    function _v(e, t, a, o) {
      $d(t, e);
      var l = t.current, s = Ma(), v = ls(l);
      kn(v);
      var y = EC(a);
      t.context === null ? t.context = y : t.pendingContext = y, ko && hr !== null && !q1 && (q1 = !0, h(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, gt(hr) || "Unknown"));
      var _ = nu(s, v);
      _.payload = {
        element: e
      }, o = o === void 0 ? null : o, o !== null && (typeof o != "function" && h("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", o), _.callback = o);
      var T = Zu(l, _, v);
      return T !== null && (kr(T, l, v, s), Tm(T, l, v)), v;
    }
    function yy(e) {
      var t = e.current;
      return t.child ? t.child.tag === $ ? t.child.stateNode : t.child.stateNode : null;
    }
    function _T(e) {
      switch (e.tag) {
        case U: {
          var t = e.stateNode;
          if (bf(t)) {
            var a = ph(t);
            Nk(t, a);
          }
          break;
        }
        case ae: {
          iu(function() {
            var l = Qa(e, vt);
            if (l !== null) {
              var s = Ma();
              kr(l, e, vt, s);
            }
          });
          var o = vt;
          Y1(e, o);
          break;
        }
      }
    }
    function wC(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = gh(a.retryLane, t));
    }
    function Y1(e, t) {
      wC(e, t);
      var a = e.alternate;
      a && wC(a, t);
    }
    function ST(e) {
      if (e.tag === ae) {
        var t = Is, a = Qa(e, t);
        if (a !== null) {
          var o = Ma();
          kr(a, e, t, o);
        }
        Y1(e, t);
      }
    }
    function CT(e) {
      if (e.tag === ae) {
        var t = ls(e), a = Qa(e, t);
        if (a !== null) {
          var o = Ma();
          kr(a, e, t, o);
        }
        Y1(e, t);
      }
    }
    function RC(e) {
      var t = _n(e);
      return t === null ? null : t.stateNode;
    }
    var kC = function(e) {
      return null;
    };
    function ET(e) {
      return kC(e);
    }
    var TC = function(e) {
      return !1;
    };
    function xT(e) {
      return TC(e);
    }
    var NC = null, MC = null, OC = null, DC = null, LC = null, jC = null, AC = null, UC = null, zC = null;
    {
      var PC = function(e, t, a) {
        var o = t[a], l = kt(e) ? e.slice() : wt({}, e);
        return a + 1 === t.length ? (kt(l) ? l.splice(o, 1) : delete l[o], l) : (l[o] = PC(e[o], t, a + 1), l);
      }, IC = function(e, t) {
        return PC(e, t, 0);
      }, FC = function(e, t, a, o) {
        var l = t[o], s = kt(e) ? e.slice() : wt({}, e);
        if (o + 1 === t.length) {
          var v = a[o];
          s[v] = s[l], kt(s) ? s.splice(l, 1) : delete s[l];
        } else
          s[l] = FC(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            o + 1
          );
        return s;
      }, VC = function(e, t, a) {
        if (t.length !== a.length) {
          C("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var o = 0; o < a.length - 1; o++)
            if (t[o] !== a[o]) {
              C("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return FC(e, t, a, 0);
      }, $C = function(e, t, a, o) {
        if (a >= t.length)
          return o;
        var l = t[a], s = kt(e) ? e.slice() : wt({}, e);
        return s[l] = $C(e[l], t, a + 1, o), s;
      }, HC = function(e, t, a) {
        return $C(e, t, 0, a);
      }, G1 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      NC = function(e, t, a, o) {
        var l = G1(e, t);
        if (l !== null) {
          var s = HC(l.memoizedState, a, o);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = wt({}, e.memoizedProps);
          var v = Qa(e, vt);
          v !== null && kr(v, e, vt, un);
        }
      }, MC = function(e, t, a) {
        var o = G1(e, t);
        if (o !== null) {
          var l = IC(o.memoizedState, a);
          o.memoizedState = l, o.baseState = l, e.memoizedProps = wt({}, e.memoizedProps);
          var s = Qa(e, vt);
          s !== null && kr(s, e, vt, un);
        }
      }, OC = function(e, t, a, o) {
        var l = G1(e, t);
        if (l !== null) {
          var s = VC(l.memoizedState, a, o);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = wt({}, e.memoizedProps);
          var v = Qa(e, vt);
          v !== null && kr(v, e, vt, un);
        }
      }, DC = function(e, t, a) {
        e.pendingProps = HC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var o = Qa(e, vt);
        o !== null && kr(o, e, vt, un);
      }, LC = function(e, t) {
        e.pendingProps = IC(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Qa(e, vt);
        a !== null && kr(a, e, vt, un);
      }, jC = function(e, t, a) {
        e.pendingProps = VC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var o = Qa(e, vt);
        o !== null && kr(o, e, vt, un);
      }, AC = function(e) {
        var t = Qa(e, vt);
        t !== null && kr(t, e, vt, un);
      }, UC = function(e) {
        kC = e;
      }, zC = function(e) {
        TC = e;
      };
    }
    function bT(e) {
      var t = oa(e);
      return t === null ? null : t.stateNode;
    }
    function wT(e) {
      return null;
    }
    function RT() {
      return hr;
    }
    function kT(e) {
      var t = e.findFiberByHostInstance, a = f.ReactCurrentDispatcher;
      return Au({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: NC,
        overrideHookStateDeletePath: MC,
        overrideHookStateRenamePath: OC,
        overrideProps: DC,
        overridePropsDeletePath: LC,
        overridePropsRenamePath: jC,
        setErrorHandler: UC,
        setSuspenseHandler: zC,
        scheduleUpdate: AC,
        currentDispatcherRef: a,
        findHostInstanceByFiber: bT,
        findFiberByHostInstance: t || wT,
        // React Refresh
        findHostInstancesForRefresh: rT,
        scheduleRefresh: tT,
        scheduleRoot: nT,
        setRefreshHandler: eT,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: RT,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: B1
      });
    }
    var BC = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function Q1(e) {
      this._internalRoot = e;
    }
    gy.prototype.render = Q1.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? h("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : _y(arguments[1]) ? h("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && h("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== $n) {
          var o = RC(t.current);
          o && o.parentNode !== a && h("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      _v(e, t, null, null);
    }, gy.prototype.unmount = Q1.prototype.unmount = function() {
      typeof arguments[0] == "function" && h("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        nC() && h("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), iu(function() {
          _v(null, e, null, null);
        }), B_(t);
      }
    };
    function TT(e, t) {
      if (!_y(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      qC(e);
      var a = !1, o = !1, l = "", s = BC;
      t != null && (t.hydrate ? C("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === zr && h(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var v = xC(e, pm, null, a, o, l, s);
      im(v.current, e);
      var y = e.nodeType === $n ? e.parentNode : e;
      return wp(y), new Q1(v);
    }
    function gy(e) {
      this._internalRoot = e;
    }
    function NT(e) {
      e && Th(e);
    }
    gy.prototype.unstable_scheduleHydration = NT;
    function MT(e, t, a) {
      if (!_y(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      qC(e), t === void 0 && h("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var o = a ?? null, l = a != null && a.hydratedSources || null, s = !1, v = !1, y = "", _ = BC;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (y = a.identifierPrefix), a.onRecoverableError !== void 0 && (_ = a.onRecoverableError));
      var T = bC(t, null, e, pm, o, s, v, y, _);
      if (im(T.current, e), wp(e), l)
        for (var N = 0; N < l.length; N++) {
          var I = l[N];
          jw(T, I);
        }
      return new gy(T);
    }
    function _y(e) {
      return !!(e && (e.nodeType === na || e.nodeType === ii || e.nodeType === kd));
    }
    function Sv(e) {
      return !!(e && (e.nodeType === na || e.nodeType === ii || e.nodeType === kd || e.nodeType === $n && e.nodeValue === " react-mount-point-unstable "));
    }
    function qC(e) {
      e.nodeType === na && e.tagName && e.tagName.toUpperCase() === "BODY" && h("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Up(e) && (e._reactRootContainer ? h("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : h("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var OT = f.ReactCurrentOwner, WC;
    WC = function(e) {
      if (e._reactRootContainer && e.nodeType !== $n) {
        var t = RC(e._reactRootContainer.current);
        t && t.parentNode !== e && h("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, o = K1(e), l = !!(o && Gu(o));
      l && !a && h("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === na && e.tagName && e.tagName.toUpperCase() === "BODY" && h("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function K1(e) {
      return e ? e.nodeType === ii ? e.documentElement : e.firstChild : null;
    }
    function YC() {
    }
    function DT(e, t, a, o, l) {
      if (l) {
        if (typeof o == "function") {
          var s = o;
          o = function() {
            var z = yy(v);
            s.call(z);
          };
        }
        var v = bC(
          t,
          o,
          e,
          Ku,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          YC
        );
        e._reactRootContainer = v, im(v.current, e);
        var y = e.nodeType === $n ? e.parentNode : e;
        return wp(y), iu(), v;
      } else {
        for (var _; _ = e.lastChild; )
          e.removeChild(_);
        if (typeof o == "function") {
          var T = o;
          o = function() {
            var z = yy(N);
            T.call(z);
          };
        }
        var N = xC(
          e,
          Ku,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          YC
        );
        e._reactRootContainer = N, im(N.current, e);
        var I = e.nodeType === $n ? e.parentNode : e;
        return wp(I), iu(function() {
          _v(t, N, a, o);
        }), N;
      }
    }
    function LT(e, t) {
      e !== null && typeof e != "function" && h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Sy(e, t, a, o, l) {
      WC(a), LT(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, v;
      if (!s)
        v = DT(a, t, e, l, o);
      else {
        if (v = s, typeof l == "function") {
          var y = l;
          l = function() {
            var _ = yy(v);
            y.call(_);
          };
        }
        _v(t, v, e, l);
      }
      return yy(v);
    }
    var GC = !1;
    function jT(e) {
      {
        GC || (GC = !0, h("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = OT.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || h("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ft(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === na ? e : gT(e, "findDOMNode");
    }
    function AT(e, t, a) {
      if (h("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Sv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var o = Up(t) && t._reactRootContainer === void 0;
        o && h("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Sy(null, e, t, !0, a);
    }
    function UT(e, t, a) {
      if (h("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Sv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var o = Up(t) && t._reactRootContainer === void 0;
        o && h("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Sy(null, e, t, !1, a);
    }
    function zT(e, t, a, o) {
      if (h("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Sv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Yy(e))
        throw new Error("parentComponent must be a valid React Component");
      return Sy(e, t, a, !1, o);
    }
    var QC = !1;
    function PT(e) {
      if (QC || (QC = !0, h("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Sv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Up(e) && e._reactRootContainer === void 0;
        t && h("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = K1(e), o = a && !Gu(a);
          o && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return iu(function() {
          Sy(null, null, e, !1, function() {
            e._reactRootContainer = null, B_(e);
          });
        }), !0;
      } else {
        {
          var l = K1(e), s = !!(l && Gu(l)), v = e.nodeType === na && Sv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Lr(_T), Iu(ST), bh(CT), Ks(Wa), up(Ch), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && h("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Fc(Fx), Wy(k1, Mk, iu);
    function IT(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!_y(t))
        throw new Error("Target container is not a DOM element.");
      return yT(e, t, null, a);
    }
    function FT(e, t, a, o) {
      return zT(e, t, a, o);
    }
    var X1 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Gu, Hf, lm, Tu, Vc, k1]
    };
    function VT(e, t) {
      return X1.usingClientEntryPoint || h('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), TT(e, t);
    }
    function $T(e, t, a) {
      return X1.usingClientEntryPoint || h('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), MT(e, t, a);
    }
    function HT(e) {
      return nC() && h("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), iu(e);
    }
    var BT = kT({
      findFiberByHostInstance: cc,
      bundleType: 1,
      version: B1,
      rendererPackageName: "react-dom"
    });
    if (!BT && vn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var KC = window.location.protocol;
      /^(https?|file):$/.test(KC) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (KC === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    eo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X1, eo.createPortal = IT, eo.createRoot = VT, eo.findDOMNode = jT, eo.flushSync = HT, eo.hydrate = AT, eo.hydrateRoot = $T, eo.render = UT, eo.unmountComponentAtNode = PT, eo.unstable_batchedUpdates = k1, eo.unstable_renderSubtreeIntoContainer = FT, eo.version = B1, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })()), eo;
}
var RE;
function SL() {
  if (RE) return wy.exports;
  RE = 1;
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
  return process.env.NODE_ENV === "production" ? (c(), wy.exports = gL()) : wy.exports = _L(), wy.exports;
}
var h_ = SL();
const bv = /* @__PURE__ */ VE(h_);
function o_(c, p) {
  (p == null || p > c.length) && (p = c.length);
  for (var f = 0, g = Array(p); f < p; f++) g[f] = c[f];
  return g;
}
function CL(c) {
  if (Array.isArray(c)) return c;
}
function EL(c) {
  if (Array.isArray(c)) return o_(c);
}
function xL(c) {
  if (c === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return c;
}
function kE(c, p, f, g, w, C, h) {
  try {
    var b = c[C](h), x = b.value;
  } catch (k) {
    return void f(k);
  }
  b.done ? p(x) : Promise.resolve(x).then(g, w);
}
function bL(c) {
  return function() {
    var p = this, f = arguments;
    return new Promise(function(g, w) {
      var C = c.apply(p, f);
      function h(x) {
        kE(C, g, w, h, b, "next", x);
      }
      function b(x) {
        kE(C, g, w, h, b, "throw", x);
      }
      h(void 0);
    });
  };
}
function My(c, p, f) {
  return p = i_(p), ML(c, QE() ? Reflect.construct(p, f || [], i_(c).constructor) : p.apply(c, f));
}
function Tv(c, p) {
  if (!(c instanceof p)) throw new TypeError("Cannot call a class as a function");
}
function TE(c, p) {
  for (var f = 0; f < p.length; f++) {
    var g = p[f];
    g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(c, Ny(g.key), g);
  }
}
function Nv(c, p, f) {
  return p && TE(c.prototype, p), f && TE(c, f), Object.defineProperty(c, "prototype", { writable: !1 }), c;
}
function md(c, p, f) {
  return (p = Ny(p)) in c ? Object.defineProperty(c, p, { value: f, enumerable: !0, configurable: !0, writable: !0 }) : c[p] = f, c;
}
function kc() {
  return (kc = Object.assign ? Object.assign.bind() : function(c) {
    for (var p = 1; p < arguments.length; p++) {
      var f, g = arguments[p];
      for (f in g) !{}.hasOwnProperty.call(g, f) || (c[f] = g[f]);
    }
    return c;
  }).apply(null, arguments);
}
function i_(c) {
  return (i_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(p) {
    return p.__proto__ || Object.getPrototypeOf(p);
  })(c);
}
function Oy(c, p) {
  if (typeof p != "function" && p !== null) throw new TypeError("Super expression must either be null or a function");
  c.prototype = Object.create(p && p.prototype, { constructor: { value: c, writable: !0, configurable: !0 } }), Object.defineProperty(c, "prototype", { writable: !1 }), p && KE(c, p);
}
function QE() {
  try {
    var c = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (QE = function() {
    return !!c;
  })();
}
function wL(c) {
  if (typeof Symbol < "u" && c[Symbol.iterator] != null || c["@@iterator"] != null) return Array.from(c);
}
function RL(c, p) {
  var f = c == null ? null : typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
  if (f != null) {
    var g, w, C, h, b = [], x = !0, k = !1;
    try {
      if (C = (f = f.call(c)).next, p !== 0) for (; !(x = (g = C.call(f)).done) && (b.push(g.value), b.length !== p); x = !0) ;
    } catch (M) {
      k = !0, w = M;
    } finally {
      try {
        if (!x && f.return != null && (h = f.return(), Object(h) !== h)) return;
      } finally {
        if (k) throw w;
      }
    }
    return b;
  }
}
function kL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function TL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function NE(c, p) {
  var f, g = Object.keys(c);
  return Object.getOwnPropertySymbols && (f = Object.getOwnPropertySymbols(c), p && (f = f.filter(function(w) {
    return Object.getOwnPropertyDescriptor(c, w).enumerable;
  })), g.push.apply(g, f)), g;
}
function fe(c) {
  for (var p = 1; p < arguments.length; p++) {
    var f = arguments[p] != null ? arguments[p] : {};
    p % 2 ? NE(Object(f), !0).forEach(function(g) {
      md(c, g, f[g]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(f)) : NE(Object(f)).forEach(function(g) {
      Object.defineProperty(c, g, Object.getOwnPropertyDescriptor(f, g));
    });
  }
  return c;
}
function Xo(c, p) {
  if (c == null) return {};
  var f, g = NL(c, p);
  if (Object.getOwnPropertySymbols) for (var w = Object.getOwnPropertySymbols(c), C = 0; C < w.length; C++) f = w[C], p.includes(f) || {}.propertyIsEnumerable.call(c, f) && (g[f] = c[f]);
  return g;
}
function NL(c, p) {
  if (c == null) return {};
  var f, g = {};
  for (f in c) if ({}.hasOwnProperty.call(c, f)) {
    if (p.includes(f)) continue;
    g[f] = c[f];
  }
  return g;
}
function ML(c, p) {
  if (p && (typeof p == "object" || typeof p == "function")) return p;
  if (p !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return xL(c);
}
function vd() {
  vd = function() {
    return p;
  };
  var c, p = {}, f = Object.prototype, g = f.hasOwnProperty, w = Object.defineProperty || function(L, Y, pe) {
    L[Y] = pe.value;
  }, Ee = typeof Symbol == "function" ? Symbol : {}, C = Ee.iterator || "@@iterator", h = Ee.asyncIterator || "@@asyncIterator", b = Ee.toStringTag || "@@toStringTag";
  function x(L, Y, pe) {
    return Object.defineProperty(L, Y, { value: pe, enumerable: !0, configurable: !0, writable: !0 }), L[Y];
  }
  try {
    x({}, "");
  } catch {
    x = function(Y, pe, ke) {
      return Y[pe] = ke;
    };
  }
  function k(L, me, pe, F) {
    var ue, ye, ee, Me, me = me && me.prototype instanceof Se ? me : Se, me = Object.create(me.prototype), F = new Ze(F || []);
    return w(me, "_invoke", { value: (ue = L, ye = pe, ee = F, Me = U, function(te, $e) {
      if (Me === $) throw Error("Generator is already running");
      if (Me === Z) {
        if (te === "throw") throw $e;
        return { value: c, done: !0 };
      }
      for (ee.method = te, ee.arg = $e; ; ) {
        var He = ee.delegate;
        if (He && (He = (function mt(at, Ue) {
          var lt = Ue.method, pt = at.iterator[lt];
          return pt === c ? (Ue.delegate = null, lt === "throw" && at.iterator.return && (Ue.method = "return", Ue.arg = c, mt(at, Ue), Ue.method === "throw") || lt !== "return" && (Ue.method = "throw", Ue.arg = new TypeError("The iterator does not provide a '" + lt + "' method")), J) : (lt = M(pt, at.iterator, Ue.arg), lt.type === "throw" ? (Ue.method = "throw", Ue.arg = lt.arg, Ue.delegate = null, J) : (pt = lt.arg, pt ? pt.done ? (Ue[at.resultName] = pt.value, Ue.next = at.nextLoc, Ue.method !== "return" && (Ue.method = "next", Ue.arg = c), Ue.delegate = null, J) : pt : (Ue.method = "throw", Ue.arg = new TypeError("iterator result is not an object"), Ue.delegate = null, J)));
        })(He, ee), He)) {
          if (He === J) continue;
          return He;
        }
        if (ee.method === "next") ee.sent = ee._sent = ee.arg;
        else if (ee.method === "throw") {
          if (Me === U) throw Me = Z, ee.arg;
          ee.dispatchException(ee.arg);
        } else ee.method === "return" && ee.abrupt("return", ee.arg);
        if (Me = $, He = M(ue, ye, ee), He.type === "normal") {
          if (Me = ee.done ? Z : V, He.arg === J) continue;
          return { value: He.arg, done: ee.done };
        }
        He.type === "throw" && (Me = Z, ee.method = "throw", ee.arg = He.arg);
      }
    }) }), me;
  }
  function M(L, Y, pe) {
    try {
      return { type: "normal", arg: L.call(Y, pe) };
    } catch (ke) {
      return { type: "throw", arg: ke };
    }
  }
  p.wrap = k;
  var U = "suspendedStart", V = "suspendedYield", $ = "executing", Z = "completed", J = {};
  function Se() {
  }
  function Ce() {
  }
  function xe() {
  }
  var Ee = {}, De = (x(Ee, C, function() {
    return this;
  }), Object.getPrototypeOf), De = De && De(De(re([]))), ae = (De && De !== f && g.call(De, C) && (Ee = De), xe.prototype = Se.prototype = Object.create(Ee));
  function Ie(L) {
    ["next", "throw", "return"].forEach(function(Y) {
      x(L, Y, function(pe) {
        return this._invoke(Y, pe);
      });
    });
  }
  function Te(L, Y) {
    var pe;
    w(this, "_invoke", { value: function(ke, ue) {
      function ye() {
        return new Y(function(ee, Me) {
          (function me(at, te, $e, He) {
            var mt, at = M(L[at], L, te);
            if (at.type !== "throw") return (te = (mt = at.arg).value) && typeof te == "object" && g.call(te, "__await") ? Y.resolve(te.__await).then(function(Ue) {
              me("next", Ue, $e, He);
            }, function(Ue) {
              me("throw", Ue, $e, He);
            }) : Y.resolve(te).then(function(Ue) {
              mt.value = Ue, $e(mt);
            }, function(Ue) {
              return me("throw", Ue, $e, He);
            });
            He(at.arg);
          })(ke, ue, ee, Me);
        });
      }
      return pe = pe ? pe.then(ye, ye) : ye();
    } });
  }
  function Ve(L) {
    var Y = { tryLoc: L[0] };
    1 in L && (Y.catchLoc = L[1]), 2 in L && (Y.finallyLoc = L[2], Y.afterLoc = L[3]), this.tryEntries.push(Y);
  }
  function Ye(L) {
    var Y = L.completion || {};
    Y.type = "normal", delete Y.arg, L.completion = Y;
  }
  function Ze(L) {
    this.tryEntries = [{ tryLoc: "root" }], L.forEach(Ve, this), this.reset(!0);
  }
  function re(L) {
    if (L || L === "") {
      var Y, pe = L[C];
      if (pe) return pe.call(L);
      if (typeof L.next == "function") return L;
      if (!isNaN(L.length)) return Y = -1, (pe = function ke() {
        for (; ++Y < L.length; ) if (g.call(L, Y)) return ke.value = L[Y], ke.done = !1, ke;
        return ke.value = c, ke.done = !0, ke;
      }).next = pe;
    }
    throw new TypeError(typeof L + " is not iterable");
  }
  return w(ae, "constructor", { value: Ce.prototype = xe, configurable: !0 }), w(xe, "constructor", { value: Ce, configurable: !0 }), Ce.displayName = x(xe, b, "GeneratorFunction"), p.isGeneratorFunction = function(L) {
    return L = typeof L == "function" && L.constructor, !!L && (L === Ce || (L.displayName || L.name) === "GeneratorFunction");
  }, p.mark = function(L) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(L, xe) : (L.__proto__ = xe, x(L, b, "GeneratorFunction")), L.prototype = Object.create(ae), L;
  }, p.awrap = function(L) {
    return { __await: L };
  }, Ie(Te.prototype), x(Te.prototype, h, function() {
    return this;
  }), p.AsyncIterator = Te, p.async = function(L, Y, pe, ke, ue) {
    ue === void 0 && (ue = Promise);
    var ye = new Te(k(L, Y, pe, ke), ue);
    return p.isGeneratorFunction(Y) ? ye : ye.next().then(function(ee) {
      return ee.done ? ee.value : ye.next();
    });
  }, Ie(ae), x(ae, b, "Generator"), x(ae, C, function() {
    return this;
  }), x(ae, "toString", function() {
    return "[object Generator]";
  }), p.keys = function(L) {
    var Y, pe = Object(L), ke = [];
    for (Y in pe) ke.push(Y);
    return ke.reverse(), function ue() {
      for (; ke.length; ) {
        var ye = ke.pop();
        if (ye in pe) return ue.value = ye, ue.done = !1, ue;
      }
      return ue.done = !0, ue;
    };
  }, p.values = re, Ze.prototype = { constructor: Ze, reset: function(L) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = c, this.done = !1, this.delegate = null, this.method = "next", this.arg = c, this.tryEntries.forEach(Ye), !L) for (var Y in this) Y.charAt(0) === "t" && g.call(this, Y) && !isNaN(+Y.slice(1)) && (this[Y] = c);
  }, stop: function() {
    this.done = !0;
    var L = this.tryEntries[0].completion;
    if (L.type === "throw") throw L.arg;
    return this.rval;
  }, dispatchException: function(L) {
    if (this.done) throw L;
    var Y = this;
    function pe(me, F) {
      return ye.type = "throw", ye.arg = L, Y.next = me, F && (Y.method = "next", Y.arg = c), !!F;
    }
    for (var ke = this.tryEntries.length - 1; 0 <= ke; --ke) {
      var ue = this.tryEntries[ke], ye = ue.completion;
      if (ue.tryLoc === "root") return pe("end");
      if (ue.tryLoc <= this.prev) {
        var ee = g.call(ue, "catchLoc"), Me = g.call(ue, "finallyLoc");
        if (ee && Me) {
          if (this.prev < ue.catchLoc) return pe(ue.catchLoc, !0);
          if (this.prev < ue.finallyLoc) return pe(ue.finallyLoc);
        } else if (ee) {
          if (this.prev < ue.catchLoc) return pe(ue.catchLoc, !0);
        } else {
          if (!Me) throw Error("try statement without catch or finally");
          if (this.prev < ue.finallyLoc) return pe(ue.finallyLoc);
        }
      }
    }
  }, abrupt: function(L, Y) {
    for (var pe = this.tryEntries.length - 1; 0 <= pe; --pe) {
      var ke = this.tryEntries[pe];
      if (ke.tryLoc <= this.prev && g.call(ke, "finallyLoc") && this.prev < ke.finallyLoc) {
        var ue = ke;
        break;
      }
    }
    var ye = (ue = ue && (L === "break" || L === "continue") && ue.tryLoc <= Y && Y <= ue.finallyLoc ? null : ue) ? ue.completion : {};
    return ye.type = L, ye.arg = Y, ue ? (this.method = "next", this.next = ue.finallyLoc, J) : this.complete(ye);
  }, complete: function(L, Y) {
    if (L.type === "throw") throw L.arg;
    return L.type === "break" || L.type === "continue" ? this.next = L.arg : L.type === "return" ? (this.rval = this.arg = L.arg, this.method = "return", this.next = "end") : L.type === "normal" && Y && (this.next = Y), J;
  }, finish: function(L) {
    for (var Y = this.tryEntries.length - 1; 0 <= Y; --Y) {
      var pe = this.tryEntries[Y];
      if (pe.finallyLoc === L) return this.complete(pe.completion, pe.afterLoc), Ye(pe), J;
    }
  }, catch: function(L) {
    for (var Y = this.tryEntries.length - 1; 0 <= Y; --Y) {
      var pe, ke, ue = this.tryEntries[Y];
      if (ue.tryLoc === L) return (pe = ue.completion).type === "throw" && (ke = pe.arg, Ye(ue)), ke;
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(L, Y, pe) {
    return this.delegate = { iterator: re(L), resultName: Y, nextLoc: pe }, this.method === "next" && (this.arg = c), J;
  } }, p;
}
function KE(c, p) {
  return (KE = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(f, g) {
    return f.__proto__ = g, f;
  })(c, p);
}
function ME(c, p) {
  return CL(c) || RL(c, p) || XE(c, p) || kL();
}
function Dy(c) {
  return EL(c) || wL(c) || XE(c) || TL();
}
function OL(c, p) {
  if (typeof c != "object" || !c) return c;
  var f = c[Symbol.toPrimitive];
  if (f === void 0) return (p === "string" ? String : Number)(c);
  if (f = f.call(c, p), typeof f != "object") return f;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
function Ny(c) {
  return c = OL(c, "string"), typeof c == "symbol" ? c : c + "";
}
function ea(c) {
  return (ea = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(p) {
    return typeof p;
  } : function(p) {
    return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
  })(c);
}
function XE(c, p) {
  var f;
  if (c) return typeof c == "string" ? o_(c, p) : (f = (f = {}.toString.call(c).slice(8, -1)) === "Object" && c.constructor ? c.constructor.name : f) === "Map" || f === "Set" ? Array.from(c) : f === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f) ? o_(c, p) : void 0;
}
var JE = { react: { componentWrap: "div", slotWrap: "div", componentWrapAttrs: { __use_react_component_wrap: "", style: { all: "unset" } }, slotWrapAttrs: { __use_react_slot_wrap: "", style: { all: "unset" } }, vueNamedSlotsKey: ["node:"] }, vue: { componentWrapHOC: function(c) {
  return function() {
    var p = (0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}).portals;
    return Re.createElement(Re.Fragment, null, c, (p === void 0 ? [] : p).map(function(f) {
      var g = f.Portal;
      return Re.createElement(g, { key: f.key });
    }));
  };
}, componentWrapAttrs: { "data-use-vue-component-wrap": "", style: { all: "unset" } }, slotWrapAttrs: { "data-use-vue-slot-wrap": "", style: { all: "unset" } } } };
function ZE() {
  var c = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : { react: {}, vue: {} }, f = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : JE, p = 2 < arguments.length ? arguments[2] : void 0, f = (c.vue || (c.vue = {}), c.react || (c.react = {}), [f, fe(fe({}, c), {}, { react: fe(fe(fe({}, f.react), c.react), {}, { componentWrapAttrs: fe(fe({}, f.react.componentWrapAttrs), c.react.componentWrapAttrs), slotWrapAttrs: fe(fe({}, f.react.slotWrapAttrs), c.react.slotWrapAttrs) }), vue: fe(fe(fe({}, f.vue), c.vue), {}, { componentWrapAttrs: fe(fe({}, f.vue.componentWrapAttrs), c.vue.componentWrapAttrs), slotWrapAttrs: fe(fe({}, f.vue.slotWrapAttrs), c.vue.slotWrapAttrs) }) })]);
  return p && f.unshift({}), Object.assign.apply(this, f);
}
var ex = ["getElementById", "getElementsByClassName", "getElementsByTagName", "getElementsByTagNameNS", "querySelector", "querySelectorAll"], hd = { Document: {}, Element: {} };
function DL(c) {
  Object.keys(hd).forEach(function(p) {
    ex.forEach(function(f) {
      var g = hd[p][f] || window[p].prototype[f];
      g && (hd[p][f] = g, window[p].prototype[f] = function() {
        for (var w = arguments.length, C = new Array(w), h = 0; h < w; h++) C[h] = arguments[h];
        var b = g.apply(this, C);
        return b && (b.constructor !== NodeList || b.constructor === NodeList && 0 < b.length) ? b : ((b = f) === "getElementById" && (b = "querySelector", C = ["#" + C[0]]), (hd.Element[b] || Element.prototype[b]).apply(c, C));
      });
    });
  });
}
function LL() {
  Object.keys(hd).forEach(function(c) {
    ex.forEach(function(p) {
      window[c].prototype[p] = hd[c][p];
    });
  });
}
var jL = ["ref"], AL = ["key"], UL = ["hashList"], n_ = parseInt(h_.version);
var zL = (() => {
  function c(p) {
    return Tv(this, c), My(this, c, [p]);
  }
  return Oy(c, Re.Component), Nv(c, [{ key: "render", value: function() {
    var p = this.props.component, f = this.props.passedProps, f = (f.ref, Xo(f, jL));
    return Re.createElement(p, f, this.props.children);
  } }]);
})(), PL = function(c, p, f) {
  var g = (() => {
    function w(C) {
      var h;
      return Tv(this, w), (h = My(this, w, [C])).state = fe(fe({}, C), p.isSlots ? { children: c } : {}), h.setRef = h.setRef.bind(h), h.vueInReactCall = h.vueInReactCall.bind(h), (h.__veauryVueWrapperRef__ = f).__veauryVueInReactCall__ = h.vueInReactCall, h;
    }
    return Oy(w, Re.Component), Nv(w, [{ key: "reactPropsLinkToVueInstance", value: function(C) {
      Object.keys(C).forEach(function(h) {
        f[h] || (f[h] = C[h]);
      }), Object.getOwnPropertyNames(C.__proto__).filter(function(h) {
        return ["constructor", "render"].indexOf(h) < 0;
      }).forEach(function(h) {
        f[h] || (f[h] = C[h]);
      });
    } }, { key: "setRef", value: function(C) {
      var h = this;
      C && (f.__veauryReactRef__ = C, this.reactPropsLinkToVueInstance(C), Promise.resolve().then(function() {
        return h.reactPropsLinkToVueInstance(C);
      }), (this.setRef.current = C).__veauryVueWrapperRef__ = f);
    } }, { key: "createSlot", value: function(C) {
      return { originVNode: C, inheritAttrs: !1, __fromReactSlot: !0, render: function() {
        var h, b;
        return ((h = C = (C = ((b = this.$slots) == null || (h = b.default) == null ? void 0 : h.call(b)) || C) instanceof Function ? C(this) : C) == null ? void 0 : h.length) === 1 && (b = C[0]) != null && b.data && ((h = this.$attrs).key, b = Xo(h, AL), C[0].props = fe(fe({}, b), C[0].props)), C;
      } };
    } }, { key: "componentWillUnmount", value: function() {
      f.__veauryReactRef__ && (f.__veauryReactRef__.__veauryVueWrapperRef__ = null, f.__veauryReactRef__ = null);
    } }, { key: "vueInReactCall", value: function(C) {
      var h = this, b = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
      return 2 < arguments.length && arguments[2] && C && C[0] ? C.map(function(x, k) {
        return ky(h.createSlot(x instanceof Function ? x : [x]), fe(fe(fe({}, p), b), {}, { isSlots: !0, wrapInstance: f })).render({ key: x?.key || void 0 });
      }) : ky(this.createSlot(C), fe(fe(fe({}, p), b), {}, { isSlots: !0, wrapInstance: f })).render();
    } }, { key: "render", value: function() {
      var C, h, b, x = this, J = this.state, k = J.hashList, M = Xo(J, UL), U = {}, V = {};
      for (C in M) h = C, b = void 0, M.hasOwnProperty(h) && M[h] != null && (M[h].__slot ? (M[h].reactSlot ? M[h] = M[h].reactSlot : (b = M[h], p.defaultSlotsFormatter && M[h].__trueChildren ? (M[h].__trueChildren.__top__ = x.__veauryVueWrapperRef__, M[h] = p.defaultSlotsFormatter(M[h].__trueChildren, x.vueInReactCall, k), M[h] instanceof Array ? M[h] = Dy(M[h]) : -1 < ["string", "number"].indexOf(ea(M[h])) ? M[h] = [M[h]] : ea(M[h]) === "object" && (M[h] = fe({}, M[h]))) : M[h] = fe({}, ky(x.createSlot(M[h]), fe(fe({}, p), {}, { isSlots: !0, wrapInstance: f })).render()), M[h].vueFunction = b), U[h] = M[h]) : M[h].__scopedSlot && (M[h] = M[h](x.createSlot), V[h] = M[h]));
      var $, Z, J = {};
      return J.ref = this.setRef, p.isSlots ? this.state.children || this.props.children : ($ = M, c.__syncUpdateForPureReactInVue && Object.keys(c.__syncUpdateForPureReactInVue).map(function(Se) {
        var Ce, xe;
        $[Se] && typeof $[Se] == "function" && (Ce = x.__veauryVueWrapperRef__, xe = $[Se], $[Se] = function() {
          for (var Ee = arguments.length, De = new Array(Ee), ae = 0; ae < Ee; ae++) De[ae] = arguments[ae];
          Ce.__veaurySyncUpdateProps__(c.__syncUpdateForPureReactInVue[Se].apply(this, De)), xe.apply(this, De), Ce.macroTaskUpdate = !0, Ce.__veauryMountReactComponent__(!0, !0, {});
        });
      }), Z = fe(fe(fe({}, $ = p.defaultPropsFormatter ? p.defaultPropsFormatter.call(this, $, this.vueInReactCall, k) : $), U), V), Object.getPrototypeOf(c) !== Function.prototype && (ea(c) !== "object" || c.render) || w.catchVueRefs() ? (Object.getPrototypeOf(c) === Function.prototype && delete J.ref, Re.createElement(c, kc({}, Z, J))) : Re.createElement(zL, kc({ passedProps: Z, component: c }, J), Z.children));
    } }], [{ key: "catchVueRefs", value: function() {
      if (f.$parent) {
        for (var C in f.$parent.$refs) if (f.$parent.$refs[C] === f) return !0;
      }
      return !1;
    } }]);
  })();
  return md(g, "displayName", "applyReact_".concat(c.displayName || c.name || "Component")), g;
};
function m_(c) {
  var p = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
  return c.__esModule && c.default && (c = c.default), p.isSlots && (c = c()), p = ZE(p, void 0, !0), { originReactComponent: c, setup: function(f, g) {
    var w, C, h, b;
    if (!p.isSlots) return w = {}, C = YT({}), h = GT(), typeof (b = p.useInjectPropsFromWrapper || c.__veauryInjectPropsFromWrapper__) == "function" && (typeof (b = b.call(h.proxy, f)) != "function" ? (Object.assign(C, b), w.__veauryInjectedProps__ = C) : h.proxy.__veauryInjectedComputed__ = b), w;
  }, data: function() {
    return { VEAURY_Portals: [] };
  }, created: function() {
    this.__veauryPortalKeyPool__ = [], this.__veauryMaxPortalCount__ = 0;
  }, computed: { __veauryInjectedProps__: function() {
    var f;
    return (f = this.__veauryInjectedComputed__) == null ? void 0 : f.call(this);
  } }, render: function() {
    var f = fu(p.react.componentWrap, fe({ ref: "react" }, p.react.componentWrapAttrs || {}), this.VEAURY_Portals.map(function(g) {
      return (0, g.Portal)(fu, g.key);
    }));
    return this.__veauryCheckReactSlot__(this.$slots), f;
  }, methods: { __veauryCheckReactSlot__: function(f) {
    var g = this;
    function w(C, h, b) {
      return h[b] && (C[b] = h[b], 1);
    }
    ea(f) === "object" && f != null && (f instanceof Array ? f.forEach(function(C) {
      g.__veauryCheckReactSlot__(C.children);
    }) : Object.keys(f).forEach(function(x) {
      var h, b, x = f[x];
      if (typeof x == "function") {
        try {
          h = x.apply(g, x.__reactArgs || [{}]);
        } catch {
          return;
        }
        (x.__trueChildren = h).forEach(function(k) {
          k.children && g.__veauryCheckReactSlot__(k.children);
        }), h.length !== 1 || w(x, h = h[0], "reactSlot") || w(x, h, "reactFunction") || h.type !== FE || ((b = h.children) == null ? void 0 : b.length) !== 1 || w(x, b = h.children[0], "reactSlot") || w(x, b, "reactFunction");
      }
    }));
  }, __veauryPushVuePortal__: function(f) {
    var g = this.__veauryPortalKeyPool__.shift() || this.__veauryMaxPortalCount__++;
    this.VEAURY_Portals.push({ Portal: f, key: g });
  }, __veauryRemoveVuePortal__: function(f) {
    var g, w = this.VEAURY_Portals.find(function(C, h) {
      if (C.Portal === f) return g = h, !0;
    });
    this.__veauryPortalKeyPool__.push(w.key), this.VEAURY_Portals.splice(g, 1);
  }, __veauryGetScopeSlot__: function(f, g, w) {
    var C = this;
    function h(b) {
      function x() {
        for (var k, M = this, U = arguments.length, V = new Array(U), $ = 0; $ < U; $++) V[$] = arguments[$];
        return f.reactFunction ? f.reactFunction.apply(this, V) : p.defaultSlotsFormatter ? ((k = f.apply(this, V)).__top__ = C, (k = p.defaultSlotsFormatter(k, C.__veauryVueInReactCall__, g)) instanceof Array || -1 < ea(k).indexOf("string", "number") ? k = Dy(k) : ea(k) === "object" && (k = fe({}, k)), k) : ky(b(function() {
          return f.apply(M, V);
        }), fe(fe({}, p), {}, { isSlots: !0, wrapInstance: C })).render();
      }
      return p.pureTransformer && w ? x.vueFunction = w : x.vueFunction = f, x;
    }
    return h.__scopedSlot = !0, h;
  }, __veaurySyncUpdateProps__: function(f) {
    this.__veauryReactInstance__ && this.__veauryReactInstance__.setState(f);
  }, __veauryMountReactComponent__: function(f, g) {
    var w = arguments, C = this;
    return bL(vd().mark(function h() {
      var b, x, k, M, U, V, $, Z, J, Se, Ce, xe, Ee, De, ae, Ie, Te;
      return vd().wrap(function(Ve) {
        for (; ; ) switch (Ve.prev = Ve.next) {
          case 0:
            if (b = 2 < w.length && w[2] !== void 0 ? w[2] : {}, x = {}, k = [], (Z = C.$.vnode.scopeId) && (x[Z] = "", k.push(Z)), M = {}, U = {}, f && (g == null || !g.slot)) {
              Ve.next = 18;
              break;
            }
            $ = vd().mark(function Ye(Ze) {
              var re;
              return vd().wrap(function(L) {
                for (; ; ) switch (L.prev = L.next) {
                  case 0:
                    if (C.$slots.hasOwnProperty(Ze) && C.$slots[Ze] != null) {
                      L.next = 2;
                      break;
                    }
                    return L.abrupt("return", 0);
                  case 2:
                    if ((re = p.react.vueNamedSlotsKey.find(function(Y) {
                      return Ze.indexOf(Y) === 0;
                    })) || Ze === "default") return re = Ze.replace(new RegExp("^".concat(re)), ""), M[re] = C.$slots[Ze], M[re].__slot = !0, L.abrupt("return", 0);
                    L.next = 8;
                    break;
                  case 8:
                    U[Ze] = C.__veauryGetScopeSlot__(C.$slots[Ze], k, (re = C.$.vnode) == null || (re = re.children) == null ? void 0 : re[Ze]);
                  case 9:
                  case "end":
                    return L.stop();
                }
              }, Ye);
            }), Ve.t0 = vd().keys(C.$slots || {});
          case 10:
            if ((Ve.t1 = Ve.t0()).done) {
              Ve.next = 18;
              break;
            }
            return Z = Ve.t1.value, Ve.delegateYield($(Z), "t2", 13);
          case 13:
            if (Ve.t2 === 0) return Ve.abrupt("continue", 10);
            Ve.next = 16;
            break;
          case 16:
            Ve.next = 10;
            break;
          case 18:
            if ((!f || g != null && g.slot) && (J = fe({}, M), V = J.default, delete J.default), C.__veauryLast__ = C.__veauryLast__ || {}, C.__veauryLast__.slot = C.__veauryLast__.slot || {}, C.__veauryLast__.attrs = C.__veauryLast__.attrs || {}, Se = { slot: function() {
              C.__veauryLast__.slot = fe(fe(fe({}, V ? { children: V } : { children: null }), J), U);
            }, attrs: function() {
              C.__veauryLast__.attrs = C.$attrs;
            } }, g && Object.keys(g).forEach(function(Ye) {
              return Se[Ye]();
            }), f) {
              Ve.next = 64;
              break;
            }
            if (C.__reactBoundedPromise__ = new Promise(function(Ye) {
              Ce = Ye;
            }), C.__reactBoundedPromise__.resolve = Ce, Se.slot(), Se.attrs(), De = PL(c, p, C), xe = Re.createElement(De, kc({}, C.$attrs, C.__veauryInjectedProps__, { children: V }, J, U, C.$attrs.class ? { className: C.$attrs.class } : {}, x, { hashList: k }, C.$attrs.style ? { style: C.$attrs.style } : {}, { ref: function(Ye) {
              C.__veauryReactInstance__ = Ye, C.__reactBoundedPromise__.resolve(!0);
            } })), Ee = C.$refs.react, De = p.wrapInstance) {
              Ve.next = 47;
              break;
            }
            ae = C.$parent;
          case 35:
            if (ae) {
              if (ae.parentReactWrapperRef) return De = ae.parentReactWrapperRef, Ve.abrupt("break", 45);
              Ve.next = 39;
            } else Ve.next = 45;
            break;
          case 39:
            if (ae.reactWrapperRef) return De = ae.reactWrapperRef, Ve.abrupt("break", 45);
            Ve.next = 42;
            break;
          case 42:
            ae = ae.$parent, Ve.next = 35;
            break;
          case 45:
            Ve.next = 49;
            break;
          case 47:
            (De = p.wrapInstance).__veauryVueWrapperRef__ = C;
          case 49:
            if (De) return C.parentReactWrapperRef = De, C.reactPortal = function() {
              return h_.createPortal(xe, Ee);
            }, De.pushReactPortal(C.reactPortal), Ve.abrupt("return");
            Ve.next = 54;
            break;
          case 54:
            if (17 < n_) return bv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED !== void 0 && (bv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = !0), Ie = p.react.createRoot || bv.createRoot, 18 < n_ && !Ie && console.warn("'react-dom 19' no longer supports dynamically determining whether to use 'render' or 'createRoot'. In order to be compatible with 'react-dom 17' and previous versions, you need to manually configure 'createRoot' in the veaury configuration."), C.__veauryReactApp__ = Ie(Ee), C.__veauryReactApp__.render(xe), Ve.abrupt("return");
            Ve.next = 61;
            break;
          case 61:
            bv.render(xe, Ee), Ve.next = 71;
            break;
          case 64:
            return Ve.next = 66, C.__reactBoundedPromise__;
          case 66:
            Te = function() {
              C.__veauryReactInstance__.setState(function(Ye) {
                return Object.keys(Ye).forEach(function(Ze) {
                  p.isSlots && Ze === "children" || delete Ye[Ze];
                }), fe(fe(fe(fe({}, C.__veauryCache__), C.__veauryInjectedProps__), !p.isSlots && C.__veauryLast__.slot), C.__veauryLast__.attrs);
              }), C.__veauryCache__ = null;
            }, !C.microTaskUpdate || C.__veauryCache__ || C.$nextTick(function() {
              Te(), C.microTaskUpdate = !1;
            }), C.macroTaskUpdate && (clearTimeout(C.updateTimer), C.updateTimer = setTimeout(function() {
              clearTimeout(C.updateTimer), Te(), C.macroTaskUpdate = !1;
            })), C.__veauryCache__ = fe(fe({}, C.__veauryCache__ || {}), fe(fe(fe(fe({}, b), C.$attrs.class ? { className: C.$attrs.class } : {}), fe({}, x)), {}, { hashList: k }, C.$attrs.style ? { style: C.$attrs.style } : {})), C.macroTaskUpdate || C.microTaskUpdate || Te();
          case 71:
          case "end":
            return Ve.stop();
        }
      }, h);
    }))();
  } }, mounted: function() {
    var f = this;
    this.__VEAURY_IGNORE_STRANGE_UPDATE__ = !0, Promise.resolve().then(function() {
      f.__VEAURY_IGNORE_STRANGE_UPDATE__ = !1;
    }), clearTimeout(this.updateTimer), this.__veauryMountReactComponent__();
  }, beforeUnmount: function() {
    var f;
    clearTimeout(this.updateTimer), DL(this.$refs.react), this.reactPortal ? (f = this.parentReactWrapperRef) != null && f.removeReactPortal(this.reactPortal) : 17 < n_ ? (f = this.__veauryReactApp__) != null && f.unmount() : bv.unmountComponentAtNode(this.$refs.react), LL();
  }, updated: function() {
    this.__VEAURY_IGNORE_STRANGE_UPDATE__ || this.__veauryMountReactComponent__(!0, { slot: !0 });
  }, inheritAttrs: !1, watch: { $attrs: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 }, __veauryInjectedProps__: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 } } };
}
var IL = /* @__PURE__ */ new Set(["onClick", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onChange", "onInput", "onInvalid", "onReset", "onSubmit", "onError", "onLoad", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onGotPointerCapture", "onLostPointerCapture", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onSelect", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onScroll", "onWheel", "onAbort", "onCanPlay", "onCanPlayThrough", "onDurationChange", "onEmptied", "onEncrypted", "onEnded", "onError", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onPause", "onPlay", "onPlaying", "onProgress", "onRateChange", "onSeeked", "onSeeking", "onStalled", "onSuspend", "onTimeUpdate", "onVolumeChange", "onWaiting", "onLoad", "onError", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionEnd", "onToggle"]);
function FL(c, p) {
  for (var f = (c = p = c?._reactInternals || c?._reactInternalFiber || p) == null ? void 0 : c.return; f; ) {
    var g = f.stateNode;
    if (g = g?.parentVueWrapperRef || g?.__veauryVueWrapperRef__) return g;
    f = f.return;
  }
}
function OE(c, p, f) {
  var g = {};
  return f.forEach(function(w) {
    g[w] = !0;
  }), c[(p === "modelValue" ? "model" : p) + "Modifiers"] = g;
}
function DE(c, p, f) {
  var g = this, w = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : "v-model";
  if (!(p instanceof Array)) throw Error("[error:veaury] Parameter type error from '".concat(w, "', a single v-model is an array, such as [val, setter, argumentKey, modifiers] or [val, setter, modifiers]"));
  if (typeof p[1] != "function") throw Error("[error:veaury] Parameter type error from '".concat(w, "', a single v-model is an array, the second element of the array must be a setter function"));
  var C = p[1], h = (typeof p[2] == "string" ? (f = p[2], p[3] instanceof Array && OE(c, f, p[3])) : p[2] instanceof Array && OE(c, f, p[2]), c["onUpdate:" + f]);
  c["onUpdate:" + f] = typeof h == "function" ? function() {
    for (var b = arguments.length, x = new Array(b), k = 0; k < b; k++) x[k] = arguments[k];
    h.apply(g, x), C.apply(g, x);
  } : C, c[f] = p[0];
}
function l_(c) {
  var p = this, f = {}, g = fe({}, c);
  return Object.keys(c).forEach(function(w) {
    var C, h = w.match(/^onUpdate-([^-]+)/);
    if (h) delete g[w], C = f["onUpdate:".concat(h[1])], f["onUpdate:".concat(h[1])] = typeof C == "function" ? function() {
      for (var x = arguments.length, k = new Array(x), M = 0; M < x; M++) k[M] = arguments[M];
      C.apply(p, k), c[w].apply(p, k);
    } : c[w];
    else if (h = w.match(/^v-model($|:([^:]+)|-([^:]+))/)) h = h[2] || h[3] || "modelValue", DE(f, c[w], h), delete g[w];
    else if (w === "v-models") {
      if (ea(c[w]) !== "object" || c[w] instanceof Array) throw Error("[error:veaury] The parameter 'v-models' must be an object type, such as {[argumentKey]: singleVModel}");
      var b = c[w];
      Object.keys(b).forEach(function(x) {
        DE(f, b[x], x, "v-models");
      }), delete g[w];
    }
  }), fe(fe({}, g), f);
}
var Ly = Nv(function c() {
  Tv(this, c), md(this, "pool", /* @__PURE__ */ new Set());
}, [{ key: "getRandomId", value: function(c) {
  var p = c + (Math.random() + "").substr(2);
  return this.pool.has(p) ? this.getRandomId(c) : (this.pool.add(p), p);
} }]);
function tx(g, p) {
  var f, g = g.node;
  if (typeof g == "function" && (g = g()), (f = p) != null && f.current || typeof p == "function" || (f = p) != null && f.toString().match(/^function/) || (p = null), -1 < ["string", "number"].indexOf(ea(g))) return g;
  if (g instanceof Array) {
    if (g.length !== 1) return g;
    g = g[0];
  }
  return fe(fe({}, g), {}, { ref: p });
}
var VL = m_(tx);
function u_(c) {
  return fu(VL, { node: function() {
    return c.node;
  } });
}
u_.originReactComponent = Re.forwardRef(tx);
var $L = ["component", "node"], HL = ["component", "$slots", "children", "class", "style"], BL = ["className", "classname"], Rc = "veaury-options", LE = new Ly();
function qL(c, p) {
  var f;
  return c = typeof c == "string" && p ? (p = p.$) == null || (p = p.appContext) == null || (p = p.app) == null || (f = p.component) == null ? void 0 : f.call(p, c) : c;
}
function jE(c) {
  if (c) return Object.keys(c).forEach(function(p) {
    var f = c[p];
    f != null && (typeof f == "function" ? (c[p] = f, c[p].reactFunction = f) : (c[p] = function() {
      return f;
    }, c[p].reactSlot = f), f.vueFunction) && (c[p].vueFunction = f.vueFunction);
  }), c;
}
function WL(c) {
  var p;
  return (p = c.node) == null ? void 0 : p.call(c);
}
var s_ = Re.forwardRef(function(w, p) {
  var f, h = w.component, g = w.node, w = Xo(w, $L);
  if (h == null && g == null) return null;
  if (g != null) {
    if (g.$$typeof || typeof g == "string" || typeof g == "number") return g;
    typeof g != "function" && (f = g, g = function() {
      return f;
    });
  }
  var C, h = h || WL, b = ZE(w[Rc] || {}, void 0, !0), x = b.useInjectPropsFromWrapper || h.__veauryInjectPropsFromWrapper__;
  return b.isSlots || typeof x == "function" && (C = x(w)), Re.createElement(YL, kc({}, fe(fe(fe(fe({ component: h }, g ? { node: g } : {}), w), C), {}, md({}, Rc, b)), { ref: p }));
}), YL = (() => {
  function c(p) {
    var f;
    return Tv(this, c), (f = My(this, c, [p])).state = { portals: [] }, f.__veauryPortalKeyPool__ = [], f.__veauryMaxPortalCount__ = 0, f.__veauryCurrentVueComponent__ = p.component, f.__veauryCreateVueInstance__ = f.__veauryCreateVueInstance__.bind(f), f.__veauryVueComponentContainer__ = f.createVueComponentContainer(), f;
  }
  return Oy(c, Re.Component), Nv(c, [{ key: "pushReactPortal", value: function(p) {
    var f = this.state.portals, g = this.__veauryPortalKeyPool__.shift() || this.__veauryMaxPortalCount__++;
    f.push({ Portal: p, key: g }), this.setState({ portals: f });
  } }, { key: "removeReactPortal", value: function(p) {
    var f, g = this.state.portals, w = g.find(function(C, h) {
      if (C.Portal === p) return f = h, !0;
    });
    this.__veauryPortalKeyPool__.push(w.key), g.splice(f, 1), this.__veauryVueRef__ && this.setState({ portals: g });
  } }, { key: "createVueComponentContainer", value: function() {
    var p = this, f = {}, g = this.props[Rc];
    return g.isSlots ? (Object.keys(this.props).forEach(function(w) {
      IL.has(w) && typeof p.props[w] == "function" && (f[w] = p.props[w]);
    }), g.vue.slotWrapAttrs && (f = fe(fe({}, f), g.vue.slotWrapAttrs))) : g.vue.componentWrapAttrs && (f = fe(fe({}, f), g.vue.componentWrapAttrs)), g.vue.componentWrapHOC(Re.createElement("div", kc({}, g.vue.componentWrapAttrs, { ref: this.__veauryCreateVueInstance__, key: null })), f);
  } }, { key: "shouldComponentUpdate", value: function(p, f, g) {
    var w, C, h, b, x = this;
    return p === this.props || (w = p.component, C = (C = p["v-slots"]) === void 0 ? null : C, h = p.children, p = Xo(p, ["component", Rc, "v-slots", "children"].map(Ny)), this.__veauryCurrentVueComponent__ !== w && this.updateVueComponent(w), w.__fromReactSlot) || this.__veauryVueInstance__ && (h && (C = C || {}, ea(h) !== "object" || h instanceof Array || h.$$typeof ? C.default = h : C = h), (b = this.__veauryVueInstance__.$data.$slots) && Object.keys(b).forEach(function(k) {
      delete b[k];
    }), C && (b || (this.__veauryVueInstance__.$data.$slots = {}), Object.assign(this.__veauryVueInstance__.$data.$slots, jE(C))), Object.keys(this.__veauryVueInstance__.$data).forEach(function(k) {
      k !== "$slots" && delete x.__veauryVueInstance__.$data[k];
    }), this.__veauryVueInstance__) && Object.assign(this.__veauryVueInstance__.$data, l_(p)), !0;
  } }, { key: "componentWillUnmount", value: function() {
    this.vuePortal ? this.parentVueWrapperRef.__veauryRemoveVuePortal__(this.vuePortal) : (this.__veauryVueInstance__ && this.__veauryVueInstance__.$.appContext.app.unmount(), LE.pool.delete(this.__veauryVueTargetId__), this.vueCreated = !1);
  } }, { key: "componentDidMount", value: function() {
    this.__veauryCreateVueInstance__(this.vueContainerElement);
  } }, { key: "__veauryCreateVueInstance__", value: function(p) {
    var f, g, w, C, h, b, x, k, M = this;
    function U(V) {
      this.__veauryVueInstance__ || (this.__veauryVueInstance__ = V);
    }
    this.vueCreated || (this.vueCreated = !0, (f = this).vueContainerElement = p, (w = this.props).component, g = w[Rc], x = w.children, k = (k = w["v-slots"]) === void 0 ? {} : k, w = Xo(w, ["component", Rc, "children", "v-slots"].map(Ny)), x && (ea(x) !== "object" || x instanceof Array || x.$$typeof ? k.default = x : k = x), (k = jE(k)) && (w.$slots = k), U = U.bind(this), C = fe({}, l_(w)), h = { data: function() {
      return g.isSlots ? { children: f.__veauryCurrentVueComponent__.originVNode } : C;
    }, created: function() {
      this.reactWrapperRef = f, U(this);
    }, methods: { reactInVueCall: function(V) {
      return 2 < arguments.length && arguments[2] && V && V[0] ? V.map(function($, Z) {
        return fu(u_, { node: $, key: ($ == null || ($ = $.data) == null ? void 0 : $.key) || Z });
      }) : fu(u_, { node: V });
    }, getScopedSlots: function(V, $) {
      var Z, J = this, Se = (this.getScopedSlots.__scopeSlots || (this.getScopedSlots.__scopeSlots = {}), fe({}, $));
      for (Z in Se) ((Ce) => {
        var xe, Ee;
        !Se.hasOwnProperty(Ce) || (xe = Se[Ce]) == null || (Se[Ce] = (Ee = xe, function() {
          for (var De, ae, Ie, Te, Ve = arguments.length, Ye = new Array(Ve), Ze = 0; Ze < Ve; Ze++) Ye[Ze] = arguments[Ze];
          return Ee.vueFunction ? Ee.vueFunction.apply(J, Ye) : (Ie = Ee.reactFunction, Ie = Ee.reactSlot || Ie?.apply(J, Ye), Te = g.defaultSlotsFormatter, (De = J.getScopedSlots.__scopeSlots[Ce]) != null && (De = De.component) != null && (De = De.ctx) != null && De.__veauryReactInstance__ ? (ae = J.getScopedSlots.__scopeSlots[Ce], Promise.resolve().then(function() {
            var re;
            (re = ae) != null && (re = re.component) != null && (re = re.ctx) != null && (re = re.__veauryReactInstance__) != null && re.setState({ children: Ee.apply(J, Ye) });
          })) : (ae = Te && Ie ? [Te(Ie, J.reactInVueCall)] : V(m_(function() {
            return Ee.apply(J, Ye);
          }, fe(fe({}, g), {}, { isSlots: !0, wrapInstance: f }))), J.getScopedSlots.__scopeSlots[Ce] = ae), Ee.reactFunction ? ae.reactFunction = Ee.reactFunction : Ee.reactSlot && (ae.reactSlot = Ee.reactSlot), ae);
        }), Se[Ce].reactFunction = xe);
      })(Z);
      return Se;
    } }, mounted: function() {
      p.removeAttribute("id"), f.__veauryVueRef__ = this.$refs.use_vue_wrapper, this.$refs.use_vue_wrapper.reactWrapperRef = f;
    }, beforeUnmount: function() {
      f.__veauryVueRef__ = null, this.$refs.use_vue_wrapper.reactWrapperRef = null;
    }, render: function() {
      var V = this, xe = this.$data, Se = (xe.component, xe.$slots), $ = xe.class, Z = xe.style, xe = Xo(xe, HL), J = this.getScopedSlots(fu, fe({}, Se)), Se = xe.className, Ce = xe.classname, xe = Xo(xe, BL), Ee = {};
      return Object.keys(J).forEach(function(De) {
        var ae = J[De];
        Ee[De] = typeof ae == "function" ? ae : function() {
          return ae;
        };
      }), fu(qL(f.__veauryCurrentVueComponent__, this), fe(fe(fe(fe({}, xe), $ || Se || Ce ? { class: $ || Se || Ce } : {}), Z ? { style: Z } : {}), {}, { ref: "use_vue_wrapper" }), fe({}, g.isSlots && this.children ? { default: typeof this.children == "function" ? this.children : function() {
        return V.children;
      } } : fe({}, Ee)));
    } }, p && (b = LE.getRandomId("__vue_wrapper_container_"), p.id = b, this.__veauryVueTargetId__ = b, (x = g.wrapInstance) ? (x = g.wrapInstance).reactWrapperRef = f : x = FL(this), x && document.getElementById(b) ? (this.parentVueWrapperRef = x, this.vuePortal = function(V, $) {
      return V(QT, { to: "#" + b, key: b }, [V(Object.assign(h, { router: M._router }))]);
    }, x.__veauryPushVuePortal__(this.vuePortal)) : (k = KT(h), typeof g.beforeVueAppMount == "function" && g.beforeVueAppMount(k), this.__veauryVueInstance__ = k.mount(p))));
  } }, { key: "updateVueComponent", value: function(p) {
    this.__veauryVueInstance__ && (p.__fromReactSlot ? this.__veauryVueInstance__.children = typeof p.originVNode == "function" ? p.originVNode : function() {
      return p.originVNode;
    } : (this.__veauryCurrentVueComponent__ = p, this.__veauryVueInstance__.$forceUpdate()));
  } }, { key: "render", value: function() {
    return Re.createElement(this.__veauryVueComponentContainer__, { portals: this.state.portals });
  } }]);
})();
function ky(c) {
  var p = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, f = (c || console.warn("Component must be passed in applyVueInReact!"), c.__esModule && c.default && (c = c.default), Re.forwardRef(function(g, w) {
    return Re.createElement(s_, kc({}, g, { component: c, ref: w }, md({}, Rc, p)));
  }));
  return f.originVueComponent = c, f;
}
new Ly();
function GL(c) {
  var p = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, f = p.globalName, g = m_(c, p.combinedOption || {});
  return g.install = function(w) {
    var C = (1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}).globalName;
    return f && w.component(C || f, g), g;
  }, g;
}
function AE(c) {
  return c.replace(/-(\w)/g, function(p, f) {
    return f.toUpperCase();
  });
}
function jy(c) {
  var p;
  return c ? typeof c == "string" ? (c = c.trim()).split(/\s*;\s*/).reduce(function(f, g) {
    return g && (g = g.split(/\s*:\s*/)).length === 2 && Object.assign(f, md({}, AE(g[0]), g[1])), f;
  }, {}) : ea(c) === "object" ? (p = {}, Object.keys(c).forEach(function(f) {
    p[AE(f)] = c[f];
  }), p) : {} : {};
}
function Ay(c) {
  return c ? c instanceof Array ? c : typeof c == "string" ? (c = c.trim()).split(/\s+/) : ea(c) === "object" ? Object.keys(c).filter(function(p) {
    return !!c[p];
  }) : [] : [];
}
var QL = ["ref"];
function KL(c, p, f, g, w) {
  var C = c.props || {}, C = (C.ref, Xo(C, QL)), h = {}, b = (Object.keys(c.children || {}).forEach(function(M) {
    var U = c.children[M], V = JE.react.vueNamedSlotsKey.find(function($) {
      return M.indexOf($) === 0;
    });
    V || M === "default" ? (V = M.replace(new RegExp("^".concat(V)), "").replace(/^default$/, "children"), h[V] = g.call(c.__top__, U(), f, w)) : typeof U == "function" && (h[M] = function() {
      for (var $ = arguments.length, Z = new Array($), J = 0; J < $; J++) Z[J] = arguments[J];
      return U.__reactArgs = Z, g(U.apply(this, Z), f, w);
    });
  }), {}), x = jy(C.style), k = Array.from(new Set(Ay(C.class))).join(" ");
  return 0 < Object.keys(x).length && (b.style = x), k !== "" && (b.className = k), Object.assign(C, fe(fe({}, b), h)), delete C.class, typeof C.ref_for == "boolean" && delete C.ref_for, C;
}
function UE(c) {
  return c.type === JT;
}
new Ly();
function nx(c, p) {
  var f;
  return 0 < ((f = c.dirs) == null ? void 0 : f.length) ? Re.createElement(XL, { vnode: c }, p) : p;
}
var XL = (() => {
  function c(p) {
    var f;
    return Tv(this, c), (f = My(this, c, [p])).state = { prevVnode: null, savedDirectives: [], ref: null, prevProps: p }, f;
  }
  return Oy(c, Re.Component), Nv(c, [{ key: "findDirectiveName", value: function(p) {
    var f = p.dir, g = -1;
    return [this.state.savedDirectives.find(function(w, C) {
      if (w.dir === f) return g = C, !0;
    }), g];
  } }, { key: "doDirective", value: function() {
    var p = this, C = this.state, f = C.savedDirectives;
    if (!(g = C.ref)) {
      for (var g = (this._reactInternals || this._reactInternalFiber).child; g && g.tag !== 5; ) g = g.child;
      if (!g) return;
      g = g.stateNode;
    }
    var w = this.props.vnode, C = w.dirs;
    C && (C.forEach(function(h) {
      var b, x, k, M, U, V, $;
      h && ($ = (b = ME(p.findDirectiveName(h), 2))[0], b = b[1], x = (U = h.dir).created, k = U.beforeMount, M = U.mounted, V = U.beforeUpdate, U = U.updated, $ ? (f[b] = fe(fe(fe({}, $), h), {}, { oldValue: $.oldValue }), $ = [g, f[b], w, p.state.prevVnode], V?.apply(null, $), U?.apply(null, $), f[b].oldValue = h.value) : (f.push(h), V = [g, h, w, null], x?.apply(null, V), k?.apply(null, V), M?.apply(null, V), h.oldValue = h.value));
    }), this.setState({ prevVnode: fe({}, w), savedDirectives: f, ref: g }));
  } }, { key: "componentDidMount", value: function() {
    this.doDirective();
  } }, { key: "componentDidUpdate", value: function(p) {
    p.vnode !== this.props.vnode && this.doDirective();
  } }, { key: "componentWillUnmount", value: function() {
    var p = this, f = this.props.vnode, h = this.state, g = h.savedDirectives, w = h.ref, C = h.prevVnode, h = f.dirs;
    h && (h.forEach(function(b) {
      var x, k, M, U;
      b && (x = (U = ME(p.findDirectiveName(b), 2))[0]) && (k = (M = b.dir).beforeUnmount, M = M.unmounted, g[U[1]] = fe(fe({}, x), b), U = [w, x, f, C], k?.apply(null, U), M != null) && M.apply(null, U);
    }), this.setState({ prevVnode: fe({}, f), savedDirectives: g }));
  } }, { key: "render", value: function() {
    var p = this.props;
    return p.vnode, p.children;
  } }]);
})();
function JL(c, p) {
  var f;
  return typeof c == "function" && (f = c.toString(), c.prototype !== void 0) && c.prototype.constructor === c && (f.slice(0, 5) == "class" || 2 <= Object.getOwnPropertyNames(c.prototype).length || !/^function\s+\(|^function\s+anonymous\(/.test(f) && (!(!p || !/^function\s+[A-Z]/.test(f)) || !!/\b\(this\b|\bthis[\.\[]\b/.test(f) && (!(p && !/classCallCheck\(this/.test(f)) || /^function\sdefault_\d+\s*\(/.test(f))));
}
function rx(c, p) {
  var f, g, w, C;
  return typeof ((w = c.type) == null ? void 0 : w.originReactComponent) != "function" || JL((w = c.type) == null ? void 0 : w.originReactComponent) ? ((w = c.ref) != null && w.k ? (f = (w = c.ref) == null ? void 0 : w.k, g = (w = c.ref) == null ? void 0 : w.r) : f = (w = c.ref) == null ? void 0 : w.r, f && typeof f == "string" && (C = f, f = function(h) {
    var b;
    (b = c.ref) != null && (b = b.i) != null && b.refs && ((b = fe({}, c.ref.i.refs))[C] = h, c.ref.i.refs = b), g ? g.value = h : c.ref.i.setupState && C in c.ref.i.setupState && (c.ref.i.setupState[C] = h), h && (h.__syncUpdateProps = function() {
      p.__top__ && (c.__extraData = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, p.__top__.__syncUpdateProps({}));
    });
  }, f = new Proxy(f, { get: function(h, b) {
    return h[b];
  }, set: function(h, b, x) {
    var k;
    return (k = c.ref) != null && (k = k.i) != null && k.refs && C in ((k = c.ref) == null || (k = k.i) == null ? void 0 : k.refs) && ((k = fe({}, c.ref.i.refs))[b] = x, c.ref.i.refs = k), x;
  } })), f) : null;
}
function c_(c, p) {
  return !p || p instanceof Array && p.length === 0 || (typeof p == "string" && (p = [p]), (c = fe({}, c)).props = fe({}, c.props), p.forEach(function(f) {
    c.props[f] = "";
  })), c;
}
var ZL = ["style", "class"];
function zE(c, p, f, g, w, C, h) {
  var b, x, k;
  return p === "all" || p instanceof Array || (p = p ? [p] : []), c.type === FE ? w.call(h, c.children, f, C) : typeof c.type == "string" && (p === "all" || -1 < p.indexOf(c.type)) ? (p = rx(c), k = (x = c.props || {}).style, b = x.class, x = fe(fe({}, Xo(x, ZL)), {}, { style: jy(k), className: Array.from(new Set(Ay(b))).join(" ") }, p ? { ref: p } : {}), (k = c.children || x.children) && ((k = -1 < ["string", "number"].indexOf(ea(k)) ? [k] : Dy(k)).__top__ = h), nx(c, c_(La.createElement(c.type, x, w.call(h, k, f, C)), c.scopeId))) : f([c], null, g);
}
function e7() {
  var c = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, p = 1 < arguments.length ? arguments[1] : void 0, f = 2 < arguments.length ? arguments[2] : void 0;
  return f.__syncUpdateForPureReactInVue && Object.keys(f.__syncUpdateForPureReactInVue).map(function(g) {
    var w;
    c[g] && typeof c[g] == "function" && p.__top__ && (w = c[g], c[g] = function() {
      for (var C = arguments.length, h = new Array(C), b = 0; b < C; b++) h[b] = arguments[b];
      p.__extraData = f.__syncUpdateForPureReactInVue[g].apply(this, h), p.__top__.__veaurySyncUpdateProps__({}), p.__top__.macroTaskUpdate = !0, w.apply(this, h), p.__top__ && Promise.resolve().then(function() {
        p.__extraData = null, p.__top__.__veauryMountReactComponent__(!0);
      });
    });
  }), c;
}
function PE(c, p, f) {
  return !((c = c instanceof Array && c.length === 1 ? c[0] : c) instanceof Array) && c.key == null && 1 < p.length && ((c = fe({}, c)).key = "_key_".concat(f)), c;
}
function ax(g) {
  var p = g.reactComponents, f = g.domTags, g = g.division, w = g === void 0 || g;
  return function C(h, b, x) {
    var k;
    return h && h.forEach ? (h.__top__ || (h.__top__ = this), k = [], h.forEach(function(M, U) {
      if (M && M.type !== XT) {
        if ((Z = M.type) == null || !Z.originReactComponent) return M.$$typeof || typeof M == "string" || typeof M == "number" ? void k.push(M) : UE(M) ? void (M.children.trim() !== "" && k.push(M.children.trim())) : void (M.type && (c_(Z = PE(zE(M, f, b, w, C, x, h.__top__), h, U), M.scopeId), k.push(Z)));
        var V, $, Z = M.type.originReactComponent;
        c_(V = PE(V = (p = p === "all" || p instanceof Array ? p : [p]) === "all" || -1 < p.indexOf(Z) ? (M.__top__ = h.__top__, V = KL(M, "_key_".concat(U), b, C, x), $ = rx(M, h), M.children && (M.children.__top__ = h.__top__), nx(M, La.createElement(Z, fe(fe(fe({}, e7(V, M, Z)), M.__extraData || {}), $ ? { ref: $ } : {})))) : UE(M) ? M.text : zE(M, f, b, w, C, x), h, U), M.scopeId), k.push(V);
      }
    }), k.length === 1 ? k[0] : k) : h;
  };
}
var r_ = ax({ reactComponents: "all", domTags: "all" });
function t7(c, p) {
  return GL(c, { combinedOption: fe({ pureTransformer: !0, defaultSlotsFormatter: r_, defaultPropsFormatter: function(f, g, w) {
    var C = {};
    return Object.keys(f).forEach(function(h) {
      var b = f[h];
      b && (b.vueFunction ? (C[h] = function() {
        for (var x = arguments.length, k = new Array(x), M = 0; M < x; M++) k[M] = arguments[M];
        return r_(b.vueFunction.apply(this, k), g, w);
      }, Object.defineProperty(C[h], "length", { get: function() {
        return b.vueFunction.length;
      } })) : b.vueSlot && (C[h] = r_(b.vueSlot, g, w)));
    }), Object.assign(f, C);
  } }, p) });
}
ax({ reactComponents: "all", domTags: "all" });
var n7 = ["ref", "children", "v-slots"];
function r7(x, p, f, g, w) {
  var x = x.props || {}, k = (x.ref, x.children), h = x["v-slots"], C = h === void 0 ? {} : h, h = Xo(x, n7), b = (k && (ea(k) !== "object" || k instanceof Array || k.$$typeof ? C.default = k : C = k), null), x = (Object.keys(C || {}).forEach(function(U) {
    var V = C[U];
    (b = b || {})[U] = function() {
      if (typeof V == "function") {
        for (var $ = arguments.length, Z = new Array($), J = 0; J < $; J++) Z[J] = arguments[J];
        V = V.apply(this, Z);
      }
      return g(V, f, w);
    };
  }), {}), k = jy(h.style), M = Array.from(new Set(Ay(h.className))).join(" ");
  return 0 < Object.keys(k).length && (x.style = k), M !== "" && (x.class = M), Object.assign(h, fe({}, x)), delete h.className, { props: h = l_(h), slots: b };
}
function ox(c) {
  var p = c.ref;
  if (p) return ea(p) === "object" ? function(f) {
    c.ref.current = f;
  } : typeof p == "function" ? p : void 0;
}
var a7 = ["style", "class", "children"];
function IE(c, p, f, g, w, C) {
  var h, b, x, k;
  return p === "all" || p instanceof Array || (p = p ? [p] : []), c.type === Re.Fragment ? w((h = c.props) == null ? void 0 : h.children, f) : typeof c.type == "string" && (p === "all" || -1 < p.indexOf(c.type)) ? (h = ox(c), k = (p = c.props || {}).style, x = p.class, b = p.children, p = Xo(p, a7), x = Array.from(new Set(Ay(x))).join(" "), k = jy(k), p = fe(fe(fe(fe({}, p), Object.keys(k).length === 0 ? {} : { style: k }), x ? { className: x } : {}), h ? { ref: h } : {}), Object.keys(p).length === 0 && (p = null), (k = b) && ((k = -1 < ["string", "number"].indexOf(ea(k)) ? [k] : k instanceof Array ? Dy(k) : fe({}, k)).__top__ = C), fu(c.type, p, w(k, f))) : f([c], null, g);
}
function ix(g) {
  var p = g.vueComponents, f = g.domTags, g = g.division, w = g === void 0 || g;
  return function C(h, b) {
    if (h == null) return h;
    h instanceof Array || (h = [h]);
    var x = [];
    return h.forEach(function(k, M) {
      if (((U = k.type) == null || !U.originVueComponent) && k.type !== s_) return k.__v_isVNode || typeof k == "string" || typeof k == "number" ? void x.push(k) : void (k.type && (U = IE(k, f, b, w, C, h.__top__), x.push(U)));
      var U = k.type.originVueComponent;
      if (k.type === s_) {
        if (!k.props.component) return void x.push(k.props.node);
        U = k.props.component, k = fe({}, k);
        var V = fe({}, k.props);
        delete V.component, k.props = V;
      }
      U = (p = p === "all" || p instanceof Array ? p : [p]) === "all" || -1 < p.indexOf(U) ? ((k = fe({}, k)).__top__ = h.__top__, M = (V = r7(k, "_key_".concat(M), b, C)).props, V = V.slots, ox(k), k.children && (k.children.__top__ = h.__top__), fu(U, fe({}, M), V)) : IE(k, f, b, w, C), x.push(U);
    }), (x = x.flat(1 / 0)).length === 1 ? x[0] : x;
  };
}
ix({ vueComponents: "all", domTags: "all" });
ix({ reactComponents: "all", domTags: "all" });
new Ly();
const o7 = /* @__PURE__ */ ZT({
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
    const p = c, f = e3(() => typeof p.user_id == "string" ? Number(p.user_id) : p.user_id), g = t7(hL);
    return (w, C) => (n3(), t3(r3(g), {
      token: c.token,
      dataSource: c.dataSource,
      baseUrl: c.baseUrl,
      user_id: f.value,
      copilot_llm_endpoint: c.copilot_llm_endpoint,
      user_name: c.user_name,
      style: { height: "100%", width: "100%" }
    }, null, 8, ["token", "dataSource", "baseUrl", "user_id", "copilot_llm_endpoint", "user_name"]));
  }
}), c7 = {
  install(c) {
    c.component("CopilotApp", o7);
  }
};
export {
  o7 as CopilotApp,
  c7 as default
};
