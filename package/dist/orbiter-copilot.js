import { Fragment as OR, h as tu, reactive as Mk, getCurrentInstance as Ak, Teleport as Uk, createApp as jk, Comment as zk, Text as Pk, defineComponent as Fk, createBlock as Vk, openBlock as Hk, unref as Ik } from "vue";
function o_(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
var cy = { exports: {} }, pv = {}, fy = { exports: {} }, Lt = {};
var BE;
function Bk() {
  if (BE) return Lt;
  BE = 1;
  var v = /* @__PURE__ */ Symbol.for("react.element"), m = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.fragment"), E = /* @__PURE__ */ Symbol.for("react.strict_mode"), k = /* @__PURE__ */ Symbol.for("react.profiler"), T = /* @__PURE__ */ Symbol.for("react.provider"), y = /* @__PURE__ */ Symbol.for("react.context"), N = /* @__PURE__ */ Symbol.for("react.forward_ref"), x = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), M = /* @__PURE__ */ Symbol.for("react.lazy"), P = Symbol.iterator;
  function V(z) {
    return z === null || typeof z != "object" ? null : (z = P && z[P] || z["@@iterator"], typeof z == "function" ? z : null);
  }
  var F = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, X = Object.assign, K = {};
  function ae(z, ee, Ze) {
    this.props = z, this.context = ee, this.refs = K, this.updater = Ze || F;
  }
  ae.prototype.isReactComponent = {}, ae.prototype.setState = function(z, ee) {
    if (typeof z != "object" && typeof z != "function" && z != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, z, ee, "setState");
  }, ae.prototype.forceUpdate = function(z) {
    this.updater.enqueueForceUpdate(this, z, "forceUpdate");
  };
  function le() {
  }
  le.prototype = ae.prototype;
  function ue(z, ee, Ze) {
    this.props = z, this.context = ee, this.refs = K, this.updater = Ze || F;
  }
  var pe = ue.prototype = new le();
  pe.constructor = ue, X(pe, ae.prototype), pe.isPureReactComponent = !0;
  var _e = Array.isArray, ve = Object.prototype.hasOwnProperty, be = { current: null }, Re = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ue(z, ee, Ze) {
    var Ve, mt = {}, nt = null, je = null;
    if (ee != null) for (Ve in ee.ref !== void 0 && (je = ee.ref), ee.key !== void 0 && (nt = "" + ee.key), ee) ve.call(ee, Ve) && !Re.hasOwnProperty(Ve) && (mt[Ve] = ee[Ve]);
    var st = arguments.length - 2;
    if (st === 1) mt.children = Ze;
    else if (1 < st) {
      for (var dt = Array(st), Qt = 0; Qt < st; Qt++) dt[Qt] = arguments[Qt + 2];
      mt.children = dt;
    }
    if (z && z.defaultProps) for (Ve in st = z.defaultProps, st) mt[Ve] === void 0 && (mt[Ve] = st[Ve]);
    return { $$typeof: v, type: z, key: nt, ref: je, props: mt, _owner: be.current };
  }
  function qe(z, ee) {
    return { $$typeof: v, type: z.type, key: ee, ref: z.ref, props: z.props, _owner: z._owner };
  }
  function it(z) {
    return typeof z == "object" && z !== null && z.$$typeof === v;
  }
  function Se(z) {
    var ee = { "=": "=0", ":": "=2" };
    return "$" + z.replace(/[=:]/g, function(Ze) {
      return ee[Ze];
    });
  }
  var Y = /\/+/g;
  function Z(z, ee) {
    return typeof z == "object" && z !== null && z.key != null ? Se("" + z.key) : ee.toString(36);
  }
  function xe(z, ee, Ze, Ve, mt) {
    var nt = typeof z;
    (nt === "undefined" || nt === "boolean") && (z = null);
    var je = !1;
    if (z === null) je = !0;
    else switch (nt) {
      case "string":
      case "number":
        je = !0;
        break;
      case "object":
        switch (z.$$typeof) {
          case v:
          case m:
            je = !0;
        }
    }
    if (je) return je = z, mt = mt(je), z = Ve === "" ? "." + Z(je, 0) : Ve, _e(mt) ? (Ze = "", z != null && (Ze = z.replace(Y, "$&/") + "/"), xe(mt, ee, Ze, "", function(Qt) {
      return Qt;
    })) : mt != null && (it(mt) && (mt = qe(mt, Ze + (!mt.key || je && je.key === mt.key ? "" : ("" + mt.key).replace(Y, "$&/") + "/") + z)), ee.push(mt)), 1;
    if (je = 0, Ve = Ve === "" ? "." : Ve + ":", _e(z)) for (var st = 0; st < z.length; st++) {
      nt = z[st];
      var dt = Ve + Z(nt, st);
      je += xe(nt, ee, Ze, dt, mt);
    }
    else if (dt = V(z), typeof dt == "function") for (z = dt.call(z), st = 0; !(nt = z.next()).done; ) nt = nt.value, dt = Ve + Z(nt, st++), je += xe(nt, ee, Ze, dt, mt);
    else if (nt === "object") throw ee = String(z), Error("Objects are not valid as a React child (found: " + (ee === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : ee) + "). If you meant to render a collection of children, use an array instead.");
    return je;
  }
  function $e(z, ee, Ze) {
    if (z == null) return z;
    var Ve = [], mt = 0;
    return xe(z, Ve, "", "", function(nt) {
      return ee.call(Ze, nt, mt++);
    }), Ve;
  }
  function Le(z) {
    if (z._status === -1) {
      var ee = z._result;
      ee = ee(), ee.then(function(Ze) {
        (z._status === 0 || z._status === -1) && (z._status = 1, z._result = Ze);
      }, function(Ze) {
        (z._status === 0 || z._status === -1) && (z._status = 2, z._result = Ze);
      }), z._status === -1 && (z._status = 0, z._result = ee);
    }
    if (z._status === 1) return z._result.default;
    throw z._result;
  }
  var Te = { current: null }, ie = { transition: null }, Ae = { ReactCurrentDispatcher: Te, ReactCurrentBatchConfig: ie, ReactCurrentOwner: be };
  function Ce() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Lt.Children = { map: $e, forEach: function(z, ee, Ze) {
    $e(z, function() {
      ee.apply(this, arguments);
    }, Ze);
  }, count: function(z) {
    var ee = 0;
    return $e(z, function() {
      ee++;
    }), ee;
  }, toArray: function(z) {
    return $e(z, function(ee) {
      return ee;
    }) || [];
  }, only: function(z) {
    if (!it(z)) throw Error("React.Children.only expected to receive a single React element child.");
    return z;
  } }, Lt.Component = ae, Lt.Fragment = h, Lt.Profiler = k, Lt.PureComponent = ue, Lt.StrictMode = E, Lt.Suspense = x, Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ae, Lt.act = Ce, Lt.cloneElement = function(z, ee, Ze) {
    if (z == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + z + ".");
    var Ve = X({}, z.props), mt = z.key, nt = z.ref, je = z._owner;
    if (ee != null) {
      if (ee.ref !== void 0 && (nt = ee.ref, je = be.current), ee.key !== void 0 && (mt = "" + ee.key), z.type && z.type.defaultProps) var st = z.type.defaultProps;
      for (dt in ee) ve.call(ee, dt) && !Re.hasOwnProperty(dt) && (Ve[dt] = ee[dt] === void 0 && st !== void 0 ? st[dt] : ee[dt]);
    }
    var dt = arguments.length - 2;
    if (dt === 1) Ve.children = Ze;
    else if (1 < dt) {
      st = Array(dt);
      for (var Qt = 0; Qt < dt; Qt++) st[Qt] = arguments[Qt + 2];
      Ve.children = st;
    }
    return { $$typeof: v, type: z.type, key: mt, ref: nt, props: Ve, _owner: je };
  }, Lt.createContext = function(z) {
    return z = { $$typeof: y, _currentValue: z, _currentValue2: z, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, z.Provider = { $$typeof: T, _context: z }, z.Consumer = z;
  }, Lt.createElement = Ue, Lt.createFactory = function(z) {
    var ee = Ue.bind(null, z);
    return ee.type = z, ee;
  }, Lt.createRef = function() {
    return { current: null };
  }, Lt.forwardRef = function(z) {
    return { $$typeof: N, render: z };
  }, Lt.isValidElement = it, Lt.lazy = function(z) {
    return { $$typeof: M, _payload: { _status: -1, _result: z }, _init: Le };
  }, Lt.memo = function(z, ee) {
    return { $$typeof: b, type: z, compare: ee === void 0 ? null : ee };
  }, Lt.startTransition = function(z) {
    var ee = ie.transition;
    ie.transition = {};
    try {
      z();
    } finally {
      ie.transition = ee;
    }
  }, Lt.unstable_act = Ce, Lt.useCallback = function(z, ee) {
    return Te.current.useCallback(z, ee);
  }, Lt.useContext = function(z) {
    return Te.current.useContext(z);
  }, Lt.useDebugValue = function() {
  }, Lt.useDeferredValue = function(z) {
    return Te.current.useDeferredValue(z);
  }, Lt.useEffect = function(z, ee) {
    return Te.current.useEffect(z, ee);
  }, Lt.useId = function() {
    return Te.current.useId();
  }, Lt.useImperativeHandle = function(z, ee, Ze) {
    return Te.current.useImperativeHandle(z, ee, Ze);
  }, Lt.useInsertionEffect = function(z, ee) {
    return Te.current.useInsertionEffect(z, ee);
  }, Lt.useLayoutEffect = function(z, ee) {
    return Te.current.useLayoutEffect(z, ee);
  }, Lt.useMemo = function(z, ee) {
    return Te.current.useMemo(z, ee);
  }, Lt.useReducer = function(z, ee, Ze) {
    return Te.current.useReducer(z, ee, Ze);
  }, Lt.useRef = function(z) {
    return Te.current.useRef(z);
  }, Lt.useState = function(z) {
    return Te.current.useState(z);
  }, Lt.useSyncExternalStore = function(z, ee, Ze) {
    return Te.current.useSyncExternalStore(z, ee, Ze);
  }, Lt.useTransition = function() {
    return Te.current.useTransition();
  }, Lt.version = "18.3.1", Lt;
}
var mv = { exports: {} };
mv.exports;
var $E;
function $k() {
  return $E || ($E = 1, (function(v, m) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var h = "18.3.1", E = /* @__PURE__ */ Symbol.for("react.element"), k = /* @__PURE__ */ Symbol.for("react.portal"), T = /* @__PURE__ */ Symbol.for("react.fragment"), y = /* @__PURE__ */ Symbol.for("react.strict_mode"), N = /* @__PURE__ */ Symbol.for("react.profiler"), x = /* @__PURE__ */ Symbol.for("react.provider"), b = /* @__PURE__ */ Symbol.for("react.context"), M = /* @__PURE__ */ Symbol.for("react.forward_ref"), P = /* @__PURE__ */ Symbol.for("react.suspense"), V = /* @__PURE__ */ Symbol.for("react.suspense_list"), F = /* @__PURE__ */ Symbol.for("react.memo"), X = /* @__PURE__ */ Symbol.for("react.lazy"), K = /* @__PURE__ */ Symbol.for("react.offscreen"), ae = Symbol.iterator, le = "@@iterator";
      function ue(S) {
        if (S === null || typeof S != "object")
          return null;
        var O = ae && S[ae] || S[le];
        return typeof O == "function" ? O : null;
      }
      var pe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, _e = {
        transition: null
      }, ve = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, be = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Re = {}, Ue = null;
      function qe(S) {
        Ue = S;
      }
      Re.setExtraStackFrame = function(S) {
        Ue = S;
      }, Re.getCurrentStack = null, Re.getStackAddendum = function() {
        var S = "";
        Ue && (S += Ue);
        var O = Re.getCurrentStack;
        return O && (S += O() || ""), S;
      };
      var it = !1, Se = !1, Y = !1, Z = !1, xe = !1, $e = {
        ReactCurrentDispatcher: pe,
        ReactCurrentBatchConfig: _e,
        ReactCurrentOwner: be
      };
      $e.ReactDebugCurrentFrame = Re, $e.ReactCurrentActQueue = ve;
      function Le(S) {
        {
          for (var O = arguments.length, G = new Array(O > 1 ? O - 1 : 0), J = 1; J < O; J++)
            G[J - 1] = arguments[J];
          ie("warn", S, G);
        }
      }
      function Te(S) {
        {
          for (var O = arguments.length, G = new Array(O > 1 ? O - 1 : 0), J = 1; J < O; J++)
            G[J - 1] = arguments[J];
          ie("error", S, G);
        }
      }
      function ie(S, O, G) {
        {
          var J = $e.ReactDebugCurrentFrame, Ee = J.getStackAddendum();
          Ee !== "" && (O += "%s", G = G.concat([Ee]));
          var rt = G.map(function(Oe) {
            return String(Oe);
          });
          rt.unshift("Warning: " + O), Function.prototype.apply.call(console[S], console, rt);
        }
      }
      var Ae = {};
      function Ce(S, O) {
        {
          var G = S.constructor, J = G && (G.displayName || G.name) || "ReactClass", Ee = J + "." + O;
          if (Ae[Ee])
            return;
          Te("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", O, J), Ae[Ee] = !0;
        }
      }
      var z = {
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
        enqueueForceUpdate: function(S, O, G) {
          Ce(S, "forceUpdate");
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
        enqueueReplaceState: function(S, O, G, J) {
          Ce(S, "replaceState");
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
        enqueueSetState: function(S, O, G, J) {
          Ce(S, "setState");
        }
      }, ee = Object.assign, Ze = {};
      Object.freeze(Ze);
      function Ve(S, O, G) {
        this.props = S, this.context = O, this.refs = Ze, this.updater = G || z;
      }
      Ve.prototype.isReactComponent = {}, Ve.prototype.setState = function(S, O) {
        if (typeof S != "object" && typeof S != "function" && S != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, O, "setState");
      }, Ve.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate");
      };
      {
        var mt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, nt = function(S, O) {
          Object.defineProperty(Ve.prototype, S, {
            get: function() {
              Le("%s(...) is deprecated in plain JavaScript React classes. %s", O[0], O[1]);
            }
          });
        };
        for (var je in mt)
          mt.hasOwnProperty(je) && nt(je, mt[je]);
      }
      function st() {
      }
      st.prototype = Ve.prototype;
      function dt(S, O, G) {
        this.props = S, this.context = O, this.refs = Ze, this.updater = G || z;
      }
      var Qt = dt.prototype = new st();
      Qt.constructor = dt, ee(Qt, Ve.prototype), Qt.isPureReactComponent = !0;
      function An() {
        var S = {
          current: null
        };
        return Object.seal(S), S;
      }
      var Or = Array.isArray;
      function bn(S) {
        return Or(S);
      }
      function or(S) {
        {
          var O = typeof Symbol == "function" && Symbol.toStringTag, G = O && S[Symbol.toStringTag] || S.constructor.name || "Object";
          return G;
        }
      }
      function Wn(S) {
        try {
          return Yn(S), !1;
        } catch {
          return !0;
        }
      }
      function Yn(S) {
        return "" + S;
      }
      function qr(S) {
        if (Wn(S))
          return Te("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", or(S)), Yn(S);
      }
      function vi(S, O, G) {
        var J = S.displayName;
        if (J)
          return J;
        var Ee = O.displayName || O.name || "";
        return Ee !== "" ? G + "(" + Ee + ")" : G;
      }
      function pa(S) {
        return S.displayName || "Context";
      }
      function Zn(S) {
        if (S == null)
          return null;
        if (typeof S.tag == "number" && Te("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
          return S.displayName || S.name || null;
        if (typeof S == "string")
          return S;
        switch (S) {
          case T:
            return "Fragment";
          case k:
            return "Portal";
          case N:
            return "Profiler";
          case y:
            return "StrictMode";
          case P:
            return "Suspense";
          case V:
            return "SuspenseList";
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case b:
              var O = S;
              return pa(O) + ".Consumer";
            case x:
              var G = S;
              return pa(G._context) + ".Provider";
            case M:
              return vi(S, S.render, "ForwardRef");
            case F:
              var J = S.displayName || null;
              return J !== null ? J : Zn(S.type) || "Memo";
            case X: {
              var Ee = S, rt = Ee._payload, Oe = Ee._init;
              try {
                return Zn(Oe(rt));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var wn = Object.prototype.hasOwnProperty, Gn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Er, qa, Un;
      Un = {};
      function Rr(S) {
        if (wn.call(S, "ref")) {
          var O = Object.getOwnPropertyDescriptor(S, "ref").get;
          if (O && O.isReactWarning)
            return !1;
        }
        return S.ref !== void 0;
      }
      function va(S) {
        if (wn.call(S, "key")) {
          var O = Object.getOwnPropertyDescriptor(S, "key").get;
          if (O && O.isReactWarning)
            return !1;
        }
        return S.key !== void 0;
      }
      function Ka(S, O) {
        var G = function() {
          Er || (Er = !0, Te("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        G.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: G,
          configurable: !0
        });
      }
      function hi(S, O) {
        var G = function() {
          qa || (qa = !0, Te("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        G.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: G,
          configurable: !0
        });
      }
      function we(S) {
        if (typeof S.ref == "string" && be.current && S.__self && be.current.stateNode !== S.__self) {
          var O = Zn(be.current.type);
          Un[O] || (Te('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O, S.ref), Un[O] = !0);
        }
      }
      var Ke = function(S, O, G, J, Ee, rt, Oe) {
        var lt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: E,
          // Built-in properties that belong on the element
          type: S,
          key: O,
          ref: G,
          props: Oe,
          // Record the component responsible for creating this element.
          _owner: rt
        };
        return lt._store = {}, Object.defineProperty(lt._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(lt, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: J
        }), Object.defineProperty(lt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Ee
        }), Object.freeze && (Object.freeze(lt.props), Object.freeze(lt)), lt;
      };
      function Tt(S, O, G) {
        var J, Ee = {}, rt = null, Oe = null, lt = null, Ot = null;
        if (O != null) {
          Rr(O) && (Oe = O.ref, we(O)), va(O) && (qr(O.key), rt = "" + O.key), lt = O.__self === void 0 ? null : O.__self, Ot = O.__source === void 0 ? null : O.__source;
          for (J in O)
            wn.call(O, J) && !Gn.hasOwnProperty(J) && (Ee[J] = O[J]);
        }
        var zt = arguments.length - 2;
        if (zt === 1)
          Ee.children = G;
        else if (zt > 1) {
          for (var sn = Array(zt), Jt = 0; Jt < zt; Jt++)
            sn[Jt] = arguments[Jt + 2];
          Object.freeze && Object.freeze(sn), Ee.children = sn;
        }
        if (S && S.defaultProps) {
          var bt = S.defaultProps;
          for (J in bt)
            Ee[J] === void 0 && (Ee[J] = bt[J]);
        }
        if (rt || Oe) {
          var Zt = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          rt && Ka(Ee, Zt), Oe && hi(Ee, Zt);
        }
        return Ke(S, rt, Oe, lt, Ot, be.current, Ee);
      }
      function Wt(S, O) {
        var G = Ke(S.type, O, S.ref, S._self, S._source, S._owner, S.props);
        return G;
      }
      function on(S, O, G) {
        if (S == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
        var J, Ee = ee({}, S.props), rt = S.key, Oe = S.ref, lt = S._self, Ot = S._source, zt = S._owner;
        if (O != null) {
          Rr(O) && (Oe = O.ref, zt = be.current), va(O) && (qr(O.key), rt = "" + O.key);
          var sn;
          S.type && S.type.defaultProps && (sn = S.type.defaultProps);
          for (J in O)
            wn.call(O, J) && !Gn.hasOwnProperty(J) && (O[J] === void 0 && sn !== void 0 ? Ee[J] = sn[J] : Ee[J] = O[J]);
        }
        var Jt = arguments.length - 2;
        if (Jt === 1)
          Ee.children = G;
        else if (Jt > 1) {
          for (var bt = Array(Jt), Zt = 0; Zt < Jt; Zt++)
            bt[Zt] = arguments[Zt + 2];
          Ee.children = bt;
        }
        return Ke(S.type, rt, Oe, lt, Ot, zt, Ee);
      }
      function yn(S) {
        return typeof S == "object" && S !== null && S.$$typeof === E;
      }
      var fn = ".", er = ":";
      function ln(S) {
        var O = /[=:]/g, G = {
          "=": "=0",
          ":": "=2"
        }, J = S.replace(O, function(Ee) {
          return G[Ee];
        });
        return "$" + J;
      }
      var qt = !1, Kt = /\/+/g;
      function ha(S) {
        return S.replace(Kt, "$&/");
      }
      function Tr(S, O) {
        return typeof S == "object" && S !== null && S.key != null ? (qr(S.key), ln("" + S.key)) : O.toString(36);
      }
      function ka(S, O, G, J, Ee) {
        var rt = typeof S;
        (rt === "undefined" || rt === "boolean") && (S = null);
        var Oe = !1;
        if (S === null)
          Oe = !0;
        else
          switch (rt) {
            case "string":
            case "number":
              Oe = !0;
              break;
            case "object":
              switch (S.$$typeof) {
                case E:
                case k:
                  Oe = !0;
              }
          }
        if (Oe) {
          var lt = S, Ot = Ee(lt), zt = J === "" ? fn + Tr(lt, 0) : J;
          if (bn(Ot)) {
            var sn = "";
            zt != null && (sn = ha(zt) + "/"), ka(Ot, O, sn, "", function(fd) {
              return fd;
            });
          } else Ot != null && (yn(Ot) && (Ot.key && (!lt || lt.key !== Ot.key) && qr(Ot.key), Ot = Wt(
            Ot,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            G + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Ot.key && (!lt || lt.key !== Ot.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ha("" + Ot.key) + "/"
            ) : "") + zt
          )), O.push(Ot));
          return 1;
        }
        var Jt, bt, Zt = 0, gn = J === "" ? fn : J + er;
        if (bn(S))
          for (var Oo = 0; Oo < S.length; Oo++)
            Jt = S[Oo], bt = gn + Tr(Jt, Oo), Zt += ka(Jt, O, G, bt, Ee);
        else {
          var is = ue(S);
          if (typeof is == "function") {
            var Qi = S;
            is === Qi.entries && (qt || Le("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), qt = !0);
            for (var os = is.call(Qi), hl, cd = 0; !(hl = os.next()).done; )
              Jt = hl.value, bt = gn + Tr(Jt, cd++), Zt += ka(Jt, O, G, bt, Ee);
          } else if (rt === "object") {
            var Cc = String(S);
            throw new Error("Objects are not valid as a React child (found: " + (Cc === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : Cc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Zt;
      }
      function Wi(S, O, G) {
        if (S == null)
          return S;
        var J = [], Ee = 0;
        return ka(S, J, "", "", function(rt) {
          return O.call(G, rt, Ee++);
        }), J;
      }
      function ol(S) {
        var O = 0;
        return Wi(S, function() {
          O++;
        }), O;
      }
      function ll(S, O, G) {
        Wi(S, function() {
          O.apply(this, arguments);
        }, G);
      }
      function _o(S) {
        return Wi(S, function(O) {
          return O;
        }) || [];
      }
      function Co(S) {
        if (!yn(S))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return S;
      }
      function ul(S) {
        var O = {
          $$typeof: b,
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
        O.Provider = {
          $$typeof: x,
          _context: O
        };
        var G = !1, J = !1, Ee = !1;
        {
          var rt = {
            $$typeof: b,
            _context: O
          };
          Object.defineProperties(rt, {
            Provider: {
              get: function() {
                return J || (J = !0, Te("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), O.Provider;
              },
              set: function(Oe) {
                O.Provider = Oe;
              }
            },
            _currentValue: {
              get: function() {
                return O._currentValue;
              },
              set: function(Oe) {
                O._currentValue = Oe;
              }
            },
            _currentValue2: {
              get: function() {
                return O._currentValue2;
              },
              set: function(Oe) {
                O._currentValue2 = Oe;
              }
            },
            _threadCount: {
              get: function() {
                return O._threadCount;
              },
              set: function(Oe) {
                O._threadCount = Oe;
              }
            },
            Consumer: {
              get: function() {
                return G || (G = !0, Te("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), O.Consumer;
              }
            },
            displayName: {
              get: function() {
                return O.displayName;
              },
              set: function(Oe) {
                Ee || (Le("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Oe), Ee = !0);
              }
            }
          }), O.Consumer = rt;
        }
        return O._currentRenderer = null, O._currentRenderer2 = null, O;
      }
      var Dr = -1, Lr = 0, lr = 1, mi = 2;
      function Xa(S) {
        if (S._status === Dr) {
          var O = S._result, G = O();
          if (G.then(function(rt) {
            if (S._status === Lr || S._status === Dr) {
              var Oe = S;
              Oe._status = lr, Oe._result = rt;
            }
          }, function(rt) {
            if (S._status === Lr || S._status === Dr) {
              var Oe = S;
              Oe._status = mi, Oe._result = rt;
            }
          }), S._status === Dr) {
            var J = S;
            J._status = Lr, J._result = G;
          }
        }
        if (S._status === lr) {
          var Ee = S._result;
          return Ee === void 0 && Te(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Ee), "default" in Ee || Te(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Ee), Ee.default;
        } else
          throw S._result;
      }
      function yi(S) {
        var O = {
          // We use these fields to store the result.
          _status: Dr,
          _result: S
        }, G = {
          $$typeof: X,
          _payload: O,
          _init: Xa
        };
        {
          var J, Ee;
          Object.defineProperties(G, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return J;
              },
              set: function(rt) {
                Te("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), J = rt, Object.defineProperty(G, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Ee;
              },
              set: function(rt) {
                Te("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Ee = rt, Object.defineProperty(G, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return G;
      }
      function gi(S) {
        S != null && S.$$typeof === F ? Te("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof S != "function" ? Te("forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S) : S.length !== 0 && S.length !== 2 && Te("forwardRef render functions accept exactly two parameters: props and ref. %s", S.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), S != null && (S.defaultProps != null || S.propTypes != null) && Te("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var O = {
          $$typeof: M,
          render: S
        };
        {
          var G;
          Object.defineProperty(O, "displayName", {
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
        return O;
      }
      var D;
      D = /* @__PURE__ */ Symbol.for("react.module.reference");
      function se(S) {
        return !!(typeof S == "string" || typeof S == "function" || S === T || S === N || xe || S === y || S === P || S === V || Z || S === K || it || Se || Y || typeof S == "object" && S !== null && (S.$$typeof === X || S.$$typeof === F || S.$$typeof === x || S.$$typeof === b || S.$$typeof === M || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        S.$$typeof === D || S.getModuleId !== void 0));
      }
      function De(S, O) {
        se(S) || Te("memo: The first argument must be a component. Instead received: %s", S === null ? "null" : typeof S);
        var G = {
          $$typeof: F,
          type: S,
          compare: O === void 0 ? null : O
        };
        {
          var J;
          Object.defineProperty(G, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return J;
            },
            set: function(Ee) {
              J = Ee, !S.name && !S.displayName && (S.displayName = Ee);
            }
          });
        }
        return G;
      }
      function Be() {
        var S = pe.current;
        return S === null && Te(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), S;
      }
      function _t(S) {
        var O = Be();
        if (S._context !== void 0) {
          var G = S._context;
          G.Consumer === S ? Te("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : G.Provider === S && Te("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return O.useContext(S);
      }
      function yt(S) {
        var O = Be();
        return O.useState(S);
      }
      function kt(S, O, G) {
        var J = Be();
        return J.useReducer(S, O, G);
      }
      function wt(S) {
        var O = Be();
        return O.useRef(S);
      }
      function xn(S, O) {
        var G = Be();
        return G.useEffect(S, O);
      }
      function un(S, O) {
        var G = Be();
        return G.useInsertionEffect(S, O);
      }
      function dn(S, O) {
        var G = Be();
        return G.useLayoutEffect(S, O);
      }
      function ur(S, O) {
        var G = Be();
        return G.useCallback(S, O);
      }
      function Ja(S, O) {
        var G = Be();
        return G.useMemo(S, O);
      }
      function Za(S, O, G) {
        var J = Be();
        return J.useImperativeHandle(S, O, G);
      }
      function Ct(S, O) {
        {
          var G = Be();
          return G.useDebugValue(S, O);
        }
      }
      function Rt() {
        var S = Be();
        return S.useTransition();
      }
      function ei(S) {
        var O = Be();
        return O.useDeferredValue(S);
      }
      function sl() {
        var S = Be();
        return S.useId();
      }
      function cl(S, O, G) {
        var J = Be();
        return J.useSyncExternalStore(S, O, G);
      }
      var Eo = 0, ru, Ro, Kr, ts, Nr, Sc, _c;
      function au() {
      }
      au.__reactDisabledLog = !0;
      function To() {
        {
          if (Eo === 0) {
            ru = console.log, Ro = console.info, Kr = console.warn, ts = console.error, Nr = console.group, Sc = console.groupCollapsed, _c = console.groupEnd;
            var S = {
              configurable: !0,
              enumerable: !0,
              value: au,
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
              log: ee({}, S, {
                value: ru
              }),
              info: ee({}, S, {
                value: Ro
              }),
              warn: ee({}, S, {
                value: Kr
              }),
              error: ee({}, S, {
                value: ts
              }),
              group: ee({}, S, {
                value: Nr
              }),
              groupCollapsed: ee({}, S, {
                value: Sc
              }),
              groupEnd: ee({}, S, {
                value: _c
              })
            });
          }
          Eo < 0 && Te("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ti = $e.ReactCurrentDispatcher, ni;
      function iu(S, O, G) {
        {
          if (ni === void 0)
            try {
              throw Error();
            } catch (Ee) {
              var J = Ee.stack.trim().match(/\n( *(at )?)/);
              ni = J && J[1] || "";
            }
          return `
` + ni + S;
        }
      }
      var fl = !1, bo;
      {
        var ou = typeof WeakMap == "function" ? WeakMap : Map;
        bo = new ou();
      }
      function lu(S, O) {
        if (!S || fl)
          return "";
        {
          var G = bo.get(S);
          if (G !== void 0)
            return G;
        }
        var J;
        fl = !0;
        var Ee = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var rt;
        rt = ti.current, ti.current = null, To();
        try {
          if (O) {
            var Oe = function() {
              throw Error();
            };
            if (Object.defineProperty(Oe.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Oe, []);
              } catch (gn) {
                J = gn;
              }
              Reflect.construct(S, [], Oe);
            } else {
              try {
                Oe.call();
              } catch (gn) {
                J = gn;
              }
              S.call(Oe.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (gn) {
              J = gn;
            }
            S();
          }
        } catch (gn) {
          if (gn && J && typeof gn.stack == "string") {
            for (var lt = gn.stack.split(`
`), Ot = J.stack.split(`
`), zt = lt.length - 1, sn = Ot.length - 1; zt >= 1 && sn >= 0 && lt[zt] !== Ot[sn]; )
              sn--;
            for (; zt >= 1 && sn >= 0; zt--, sn--)
              if (lt[zt] !== Ot[sn]) {
                if (zt !== 1 || sn !== 1)
                  do
                    if (zt--, sn--, sn < 0 || lt[zt] !== Ot[sn]) {
                      var Jt = `
` + lt[zt].replace(" at new ", " at ");
                      return S.displayName && Jt.includes("<anonymous>") && (Jt = Jt.replace("<anonymous>", S.displayName)), typeof S == "function" && bo.set(S, Jt), Jt;
                    }
                  while (zt >= 1 && sn >= 0);
                break;
              }
          }
        } finally {
          fl = !1, ti.current = rt, ma(), Error.prepareStackTrace = Ee;
        }
        var bt = S ? S.displayName || S.name : "", Zt = bt ? iu(bt) : "";
        return typeof S == "function" && bo.set(S, Zt), Zt;
      }
      function Yi(S, O, G) {
        return lu(S, !1);
      }
      function ud(S) {
        var O = S.prototype;
        return !!(O && O.isReactComponent);
      }
      function Gi(S, O, G) {
        if (S == null)
          return "";
        if (typeof S == "function")
          return lu(S, ud(S));
        if (typeof S == "string")
          return iu(S);
        switch (S) {
          case P:
            return iu("Suspense");
          case V:
            return iu("SuspenseList");
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case M:
              return Yi(S.render);
            case F:
              return Gi(S.type, O, G);
            case X: {
              var J = S, Ee = J._payload, rt = J._init;
              try {
                return Gi(rt(Ee), O, G);
              } catch {
              }
            }
          }
        return "";
      }
      var Ft = {}, uu = $e.ReactDebugCurrentFrame;
      function jt(S) {
        if (S) {
          var O = S._owner, G = Gi(S.type, S._source, O ? O.type : null);
          uu.setExtraStackFrame(G);
        } else
          uu.setExtraStackFrame(null);
      }
      function ns(S, O, G, J, Ee) {
        {
          var rt = Function.call.bind(wn);
          for (var Oe in S)
            if (rt(S, Oe)) {
              var lt = void 0;
              try {
                if (typeof S[Oe] != "function") {
                  var Ot = Error((J || "React class") + ": " + G + " type `" + Oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[Oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Ot.name = "Invariant Violation", Ot;
                }
                lt = S[Oe](O, Oe, J, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (zt) {
                lt = zt;
              }
              lt && !(lt instanceof Error) && (jt(Ee), Te("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", J || "React class", G, Oe, typeof lt), jt(null)), lt instanceof Error && !(lt.message in Ft) && (Ft[lt.message] = !0, jt(Ee), Te("Failed %s type: %s", G, lt.message), jt(null));
            }
        }
      }
      function Si(S) {
        if (S) {
          var O = S._owner, G = Gi(S.type, S._source, O ? O.type : null);
          qe(G);
        } else
          qe(null);
      }
      var ht;
      ht = !1;
      function su() {
        if (be.current) {
          var S = Zn(be.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
      function sr(S) {
        if (S !== void 0) {
          var O = S.fileName.replace(/^.*[\\\/]/, ""), G = S.lineNumber;
          return `

Check your code at ` + O + ":" + G + ".";
        }
        return "";
      }
      function _i(S) {
        return S != null ? sr(S.__source) : "";
      }
      var Mr = {};
      function Ci(S) {
        var O = su();
        if (!O) {
          var G = typeof S == "string" ? S : S.displayName || S.name;
          G && (O = `

Check the top-level render call using <` + G + ">.");
        }
        return O;
      }
      function pn(S, O) {
        if (!(!S._store || S._store.validated || S.key != null)) {
          S._store.validated = !0;
          var G = Ci(O);
          if (!Mr[G]) {
            Mr[G] = !0;
            var J = "";
            S && S._owner && S._owner !== be.current && (J = " It was passed a child from " + Zn(S._owner.type) + "."), Si(S), Te('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, J), Si(null);
          }
        }
      }
      function Xt(S, O) {
        if (typeof S == "object") {
          if (bn(S))
            for (var G = 0; G < S.length; G++) {
              var J = S[G];
              yn(J) && pn(J, O);
            }
          else if (yn(S))
            S._store && (S._store.validated = !0);
          else if (S) {
            var Ee = ue(S);
            if (typeof Ee == "function" && Ee !== S.entries)
              for (var rt = Ee.call(S), Oe; !(Oe = rt.next()).done; )
                yn(Oe.value) && pn(Oe.value, O);
          }
        }
      }
      function wo(S) {
        {
          var O = S.type;
          if (O == null || typeof O == "string")
            return;
          var G;
          if (typeof O == "function")
            G = O.propTypes;
          else if (typeof O == "object" && (O.$$typeof === M || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          O.$$typeof === F))
            G = O.propTypes;
          else
            return;
          if (G) {
            var J = Zn(O);
            ns(G, S.props, "prop", J, S);
          } else if (O.PropTypes !== void 0 && !ht) {
            ht = !0;
            var Ee = Zn(O);
            Te("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ee || "Unknown");
          }
          typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && Te("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Qn(S) {
        {
          for (var O = Object.keys(S.props), G = 0; G < O.length; G++) {
            var J = O[G];
            if (J !== "children" && J !== "key") {
              Si(S), Te("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", J), Si(null);
              break;
            }
          }
          S.ref !== null && (Si(S), Te("Invalid attribute `ref` supplied to `React.Fragment`."), Si(null));
        }
      }
      function Ar(S, O, G) {
        var J = se(S);
        if (!J) {
          var Ee = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (Ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var rt = _i(O);
          rt ? Ee += rt : Ee += su();
          var Oe;
          S === null ? Oe = "null" : bn(S) ? Oe = "array" : S !== void 0 && S.$$typeof === E ? (Oe = "<" + (Zn(S.type) || "Unknown") + " />", Ee = " Did you accidentally export a JSX literal instead of a component?") : Oe = typeof S, Te("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Oe, Ee);
        }
        var lt = Tt.apply(this, arguments);
        if (lt == null)
          return lt;
        if (J)
          for (var Ot = 2; Ot < arguments.length; Ot++)
            Xt(arguments[Ot], S);
        return S === T ? Qn(lt) : wo(lt), lt;
      }
      var Oa = !1;
      function dl(S) {
        var O = Ar.bind(null, S);
        return O.type = S, Oa || (Oa = !0, Le("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(O, "type", {
          enumerable: !1,
          get: function() {
            return Le("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: S
            }), S;
          }
        }), O;
      }
      function rs(S, O, G) {
        for (var J = on.apply(this, arguments), Ee = 2; Ee < arguments.length; Ee++)
          Xt(arguments[Ee], J.type);
        return wo(J), J;
      }
      function as(S, O) {
        var G = _e.transition;
        _e.transition = {};
        var J = _e.transition;
        _e.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          S();
        } finally {
          if (_e.transition = G, G === null && J._updatedFibers) {
            var Ee = J._updatedFibers.size;
            Ee > 10 && Le("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), J._updatedFibers.clear();
          }
        }
      }
      var xo = !1, pl = null;
      function sd(S) {
        if (pl === null)
          try {
            var O = ("require" + Math.random()).slice(0, 7), G = v && v[O];
            pl = G.call(v, "timers").setImmediate;
          } catch {
            pl = function(Ee) {
              xo === !1 && (xo = !0, typeof MessageChannel > "u" && Te("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var rt = new MessageChannel();
              rt.port1.onmessage = Ee, rt.port2.postMessage(void 0);
            };
          }
        return pl(S);
      }
      var Da = 0, ri = !1;
      function Ei(S) {
        {
          var O = Da;
          Da++, ve.current === null && (ve.current = []);
          var G = ve.isBatchingLegacy, J;
          try {
            if (ve.isBatchingLegacy = !0, J = S(), !G && ve.didScheduleLegacyUpdate) {
              var Ee = ve.current;
              Ee !== null && (ve.didScheduleLegacyUpdate = !1, ko(Ee));
            }
          } catch (bt) {
            throw La(O), bt;
          } finally {
            ve.isBatchingLegacy = G;
          }
          if (J !== null && typeof J == "object" && typeof J.then == "function") {
            var rt = J, Oe = !1, lt = {
              then: function(bt, Zt) {
                Oe = !0, rt.then(function(gn) {
                  La(O), Da === 0 ? cu(gn, bt, Zt) : bt(gn);
                }, function(gn) {
                  La(O), Zt(gn);
                });
              }
            };
            return !ri && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Oe || (ri = !0, Te("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), lt;
          } else {
            var Ot = J;
            if (La(O), Da === 0) {
              var zt = ve.current;
              zt !== null && (ko(zt), ve.current = null);
              var sn = {
                then: function(bt, Zt) {
                  ve.current === null ? (ve.current = [], cu(Ot, bt, Zt)) : bt(Ot);
                }
              };
              return sn;
            } else {
              var Jt = {
                then: function(bt, Zt) {
                  bt(Ot);
                }
              };
              return Jt;
            }
          }
        }
      }
      function La(S) {
        S !== Da - 1 && Te("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Da = S;
      }
      function cu(S, O, G) {
        {
          var J = ve.current;
          if (J !== null)
            try {
              ko(J), sd(function() {
                J.length === 0 ? (ve.current = null, O(S)) : cu(S, O, G);
              });
            } catch (Ee) {
              G(Ee);
            }
          else
            O(S);
        }
      }
      var fu = !1;
      function ko(S) {
        if (!fu) {
          fu = !0;
          var O = 0;
          try {
            for (; O < S.length; O++) {
              var G = S[O];
              do
                G = G(!0);
              while (G !== null);
            }
            S.length = 0;
          } catch (J) {
            throw S = S.slice(O + 1), J;
          } finally {
            fu = !1;
          }
        }
      }
      var vl = Ar, du = rs, pu = dl, ai = {
        map: Wi,
        forEach: ll,
        count: ol,
        toArray: _o,
        only: Co
      };
      m.Children = ai, m.Component = Ve, m.Fragment = T, m.Profiler = N, m.PureComponent = dt, m.StrictMode = y, m.Suspense = P, m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $e, m.act = Ei, m.cloneElement = du, m.createContext = ul, m.createElement = vl, m.createFactory = pu, m.createRef = An, m.forwardRef = gi, m.isValidElement = yn, m.lazy = yi, m.memo = De, m.startTransition = as, m.unstable_act = Ei, m.useCallback = ur, m.useContext = _t, m.useDebugValue = Ct, m.useDeferredValue = ei, m.useEffect = xn, m.useId = sl, m.useImperativeHandle = Za, m.useInsertionEffect = un, m.useLayoutEffect = dn, m.useMemo = Ja, m.useReducer = kt, m.useRef = wt, m.useState = yt, m.useSyncExternalStore = cl, m.useTransition = Rt, m.version = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(mv, mv.exports)), mv.exports;
}
var WE;
function nu() {
  return WE || (WE = 1, process.env.NODE_ENV === "production" ? fy.exports = Bk() : fy.exports = $k()), fy.exports;
}
var YE;
function Wk() {
  if (YE) return pv;
  YE = 1;
  var v = nu(), m = /* @__PURE__ */ Symbol.for("react.element"), h = /* @__PURE__ */ Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, k = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(N, x, b) {
    var M, P = {}, V = null, F = null;
    b !== void 0 && (V = "" + b), x.key !== void 0 && (V = "" + x.key), x.ref !== void 0 && (F = x.ref);
    for (M in x) E.call(x, M) && !T.hasOwnProperty(M) && (P[M] = x[M]);
    if (N && N.defaultProps) for (M in x = N.defaultProps, x) P[M] === void 0 && (P[M] = x[M]);
    return { $$typeof: m, type: N, key: V, ref: F, props: P, _owner: k.current };
  }
  return pv.Fragment = h, pv.jsx = y, pv.jsxs = y, pv;
}
var vv = {};
var GE;
function Yk() {
  return GE || (GE = 1, process.env.NODE_ENV !== "production" && (function() {
    var v = nu(), m = /* @__PURE__ */ Symbol.for("react.element"), h = /* @__PURE__ */ Symbol.for("react.portal"), E = /* @__PURE__ */ Symbol.for("react.fragment"), k = /* @__PURE__ */ Symbol.for("react.strict_mode"), T = /* @__PURE__ */ Symbol.for("react.profiler"), y = /* @__PURE__ */ Symbol.for("react.provider"), N = /* @__PURE__ */ Symbol.for("react.context"), x = /* @__PURE__ */ Symbol.for("react.forward_ref"), b = /* @__PURE__ */ Symbol.for("react.suspense"), M = /* @__PURE__ */ Symbol.for("react.suspense_list"), P = /* @__PURE__ */ Symbol.for("react.memo"), V = /* @__PURE__ */ Symbol.for("react.lazy"), F = /* @__PURE__ */ Symbol.for("react.offscreen"), X = Symbol.iterator, K = "@@iterator";
    function ae(D) {
      if (D === null || typeof D != "object")
        return null;
      var se = X && D[X] || D[K];
      return typeof se == "function" ? se : null;
    }
    var le = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ue(D) {
      {
        for (var se = arguments.length, De = new Array(se > 1 ? se - 1 : 0), Be = 1; Be < se; Be++)
          De[Be - 1] = arguments[Be];
        pe("error", D, De);
      }
    }
    function pe(D, se, De) {
      {
        var Be = le.ReactDebugCurrentFrame, _t = Be.getStackAddendum();
        _t !== "" && (se += "%s", De = De.concat([_t]));
        var yt = De.map(function(kt) {
          return String(kt);
        });
        yt.unshift("Warning: " + se), Function.prototype.apply.call(console[D], console, yt);
      }
    }
    var _e = !1, ve = !1, be = !1, Re = !1, Ue = !1, qe;
    qe = /* @__PURE__ */ Symbol.for("react.module.reference");
    function it(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === E || D === T || Ue || D === k || D === b || D === M || Re || D === F || _e || ve || be || typeof D == "object" && D !== null && (D.$$typeof === V || D.$$typeof === P || D.$$typeof === y || D.$$typeof === N || D.$$typeof === x || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === qe || D.getModuleId !== void 0));
    }
    function Se(D, se, De) {
      var Be = D.displayName;
      if (Be)
        return Be;
      var _t = se.displayName || se.name || "";
      return _t !== "" ? De + "(" + _t + ")" : De;
    }
    function Y(D) {
      return D.displayName || "Context";
    }
    function Z(D) {
      if (D == null)
        return null;
      if (typeof D.tag == "number" && ue("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof D == "function")
        return D.displayName || D.name || null;
      if (typeof D == "string")
        return D;
      switch (D) {
        case E:
          return "Fragment";
        case h:
          return "Portal";
        case T:
          return "Profiler";
        case k:
          return "StrictMode";
        case b:
          return "Suspense";
        case M:
          return "SuspenseList";
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case N:
            var se = D;
            return Y(se) + ".Consumer";
          case y:
            var De = D;
            return Y(De._context) + ".Provider";
          case x:
            return Se(D, D.render, "ForwardRef");
          case P:
            var Be = D.displayName || null;
            return Be !== null ? Be : Z(D.type) || "Memo";
          case V: {
            var _t = D, yt = _t._payload, kt = _t._init;
            try {
              return Z(kt(yt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var xe = Object.assign, $e = 0, Le, Te, ie, Ae, Ce, z, ee;
    function Ze() {
    }
    Ze.__reactDisabledLog = !0;
    function Ve() {
      {
        if ($e === 0) {
          Le = console.log, Te = console.info, ie = console.warn, Ae = console.error, Ce = console.group, z = console.groupCollapsed, ee = console.groupEnd;
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
        $e++;
      }
    }
    function mt() {
      {
        if ($e--, $e === 0) {
          var D = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: xe({}, D, {
              value: Le
            }),
            info: xe({}, D, {
              value: Te
            }),
            warn: xe({}, D, {
              value: ie
            }),
            error: xe({}, D, {
              value: Ae
            }),
            group: xe({}, D, {
              value: Ce
            }),
            groupCollapsed: xe({}, D, {
              value: z
            }),
            groupEnd: xe({}, D, {
              value: ee
            })
          });
        }
        $e < 0 && ue("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var nt = le.ReactCurrentDispatcher, je;
    function st(D, se, De) {
      {
        if (je === void 0)
          try {
            throw Error();
          } catch (_t) {
            var Be = _t.stack.trim().match(/\n( *(at )?)/);
            je = Be && Be[1] || "";
          }
        return `
` + je + D;
      }
    }
    var dt = !1, Qt;
    {
      var An = typeof WeakMap == "function" ? WeakMap : Map;
      Qt = new An();
    }
    function Or(D, se) {
      if (!D || dt)
        return "";
      {
        var De = Qt.get(D);
        if (De !== void 0)
          return De;
      }
      var Be;
      dt = !0;
      var _t = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var yt;
      yt = nt.current, nt.current = null, Ve();
      try {
        if (se) {
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
            } catch (Ct) {
              Be = Ct;
            }
            Reflect.construct(D, [], kt);
          } else {
            try {
              kt.call();
            } catch (Ct) {
              Be = Ct;
            }
            D.call(kt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ct) {
            Be = Ct;
          }
          D();
        }
      } catch (Ct) {
        if (Ct && Be && typeof Ct.stack == "string") {
          for (var wt = Ct.stack.split(`
`), xn = Be.stack.split(`
`), un = wt.length - 1, dn = xn.length - 1; un >= 1 && dn >= 0 && wt[un] !== xn[dn]; )
            dn--;
          for (; un >= 1 && dn >= 0; un--, dn--)
            if (wt[un] !== xn[dn]) {
              if (un !== 1 || dn !== 1)
                do
                  if (un--, dn--, dn < 0 || wt[un] !== xn[dn]) {
                    var ur = `
` + wt[un].replace(" at new ", " at ");
                    return D.displayName && ur.includes("<anonymous>") && (ur = ur.replace("<anonymous>", D.displayName)), typeof D == "function" && Qt.set(D, ur), ur;
                  }
                while (un >= 1 && dn >= 0);
              break;
            }
        }
      } finally {
        dt = !1, nt.current = yt, mt(), Error.prepareStackTrace = _t;
      }
      var Ja = D ? D.displayName || D.name : "", Za = Ja ? st(Ja) : "";
      return typeof D == "function" && Qt.set(D, Za), Za;
    }
    function bn(D, se, De) {
      return Or(D, !1);
    }
    function or(D) {
      var se = D.prototype;
      return !!(se && se.isReactComponent);
    }
    function Wn(D, se, De) {
      if (D == null)
        return "";
      if (typeof D == "function")
        return Or(D, or(D));
      if (typeof D == "string")
        return st(D);
      switch (D) {
        case b:
          return st("Suspense");
        case M:
          return st("SuspenseList");
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case x:
            return bn(D.render);
          case P:
            return Wn(D.type, se, De);
          case V: {
            var Be = D, _t = Be._payload, yt = Be._init;
            try {
              return Wn(yt(_t), se, De);
            } catch {
            }
          }
        }
      return "";
    }
    var Yn = Object.prototype.hasOwnProperty, qr = {}, vi = le.ReactDebugCurrentFrame;
    function pa(D) {
      if (D) {
        var se = D._owner, De = Wn(D.type, D._source, se ? se.type : null);
        vi.setExtraStackFrame(De);
      } else
        vi.setExtraStackFrame(null);
    }
    function Zn(D, se, De, Be, _t) {
      {
        var yt = Function.call.bind(Yn);
        for (var kt in D)
          if (yt(D, kt)) {
            var wt = void 0;
            try {
              if (typeof D[kt] != "function") {
                var xn = Error((Be || "React class") + ": " + De + " type `" + kt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[kt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw xn.name = "Invariant Violation", xn;
              }
              wt = D[kt](se, kt, Be, De, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (un) {
              wt = un;
            }
            wt && !(wt instanceof Error) && (pa(_t), ue("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Be || "React class", De, kt, typeof wt), pa(null)), wt instanceof Error && !(wt.message in qr) && (qr[wt.message] = !0, pa(_t), ue("Failed %s type: %s", De, wt.message), pa(null));
          }
      }
    }
    var wn = Array.isArray;
    function Gn(D) {
      return wn(D);
    }
    function Er(D) {
      {
        var se = typeof Symbol == "function" && Symbol.toStringTag, De = se && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return De;
      }
    }
    function qa(D) {
      try {
        return Un(D), !1;
      } catch {
        return !0;
      }
    }
    function Un(D) {
      return "" + D;
    }
    function Rr(D) {
      if (qa(D))
        return ue("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(D)), Un(D);
    }
    var va = le.ReactCurrentOwner, Ka = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, hi, we;
    function Ke(D) {
      if (Yn.call(D, "ref")) {
        var se = Object.getOwnPropertyDescriptor(D, "ref").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return D.ref !== void 0;
    }
    function Tt(D) {
      if (Yn.call(D, "key")) {
        var se = Object.getOwnPropertyDescriptor(D, "key").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return D.key !== void 0;
    }
    function Wt(D, se) {
      typeof D.ref == "string" && va.current;
    }
    function on(D, se) {
      {
        var De = function() {
          hi || (hi = !0, ue("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        De.isReactWarning = !0, Object.defineProperty(D, "key", {
          get: De,
          configurable: !0
        });
      }
    }
    function yn(D, se) {
      {
        var De = function() {
          we || (we = !0, ue("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        De.isReactWarning = !0, Object.defineProperty(D, "ref", {
          get: De,
          configurable: !0
        });
      }
    }
    var fn = function(D, se, De, Be, _t, yt, kt) {
      var wt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: m,
        // Built-in properties that belong on the element
        type: D,
        key: se,
        ref: De,
        props: kt,
        // Record the component responsible for creating this element.
        _owner: yt
      };
      return wt._store = {}, Object.defineProperty(wt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(wt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Be
      }), Object.defineProperty(wt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _t
      }), Object.freeze && (Object.freeze(wt.props), Object.freeze(wt)), wt;
    };
    function er(D, se, De, Be, _t) {
      {
        var yt, kt = {}, wt = null, xn = null;
        De !== void 0 && (Rr(De), wt = "" + De), Tt(se) && (Rr(se.key), wt = "" + se.key), Ke(se) && (xn = se.ref, Wt(se, _t));
        for (yt in se)
          Yn.call(se, yt) && !Ka.hasOwnProperty(yt) && (kt[yt] = se[yt]);
        if (D && D.defaultProps) {
          var un = D.defaultProps;
          for (yt in un)
            kt[yt] === void 0 && (kt[yt] = un[yt]);
        }
        if (wt || xn) {
          var dn = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
          wt && on(kt, dn), xn && yn(kt, dn);
        }
        return fn(D, wt, xn, _t, Be, va.current, kt);
      }
    }
    var ln = le.ReactCurrentOwner, qt = le.ReactDebugCurrentFrame;
    function Kt(D) {
      if (D) {
        var se = D._owner, De = Wn(D.type, D._source, se ? se.type : null);
        qt.setExtraStackFrame(De);
      } else
        qt.setExtraStackFrame(null);
    }
    var ha;
    ha = !1;
    function Tr(D) {
      return typeof D == "object" && D !== null && D.$$typeof === m;
    }
    function ka() {
      {
        if (ln.current) {
          var D = Z(ln.current.type);
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
        var se = ka();
        if (!se) {
          var De = typeof D == "string" ? D : D.displayName || D.name;
          De && (se = `

Check the top-level render call using <` + De + ">.");
        }
        return se;
      }
    }
    function _o(D, se) {
      {
        if (!D._store || D._store.validated || D.key != null)
          return;
        D._store.validated = !0;
        var De = ll(se);
        if (ol[De])
          return;
        ol[De] = !0;
        var Be = "";
        D && D._owner && D._owner !== ln.current && (Be = " It was passed a child from " + Z(D._owner.type) + "."), Kt(D), ue('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', De, Be), Kt(null);
      }
    }
    function Co(D, se) {
      {
        if (typeof D != "object")
          return;
        if (Gn(D))
          for (var De = 0; De < D.length; De++) {
            var Be = D[De];
            Tr(Be) && _o(Be, se);
          }
        else if (Tr(D))
          D._store && (D._store.validated = !0);
        else if (D) {
          var _t = ae(D);
          if (typeof _t == "function" && _t !== D.entries)
            for (var yt = _t.call(D), kt; !(kt = yt.next()).done; )
              Tr(kt.value) && _o(kt.value, se);
        }
      }
    }
    function ul(D) {
      {
        var se = D.type;
        if (se == null || typeof se == "string")
          return;
        var De;
        if (typeof se == "function")
          De = se.propTypes;
        else if (typeof se == "object" && (se.$$typeof === x || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        se.$$typeof === P))
          De = se.propTypes;
        else
          return;
        if (De) {
          var Be = Z(se);
          Zn(De, D.props, "prop", Be, D);
        } else if (se.PropTypes !== void 0 && !ha) {
          ha = !0;
          var _t = Z(se);
          ue("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _t || "Unknown");
        }
        typeof se.getDefaultProps == "function" && !se.getDefaultProps.isReactClassApproved && ue("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Dr(D) {
      {
        for (var se = Object.keys(D.props), De = 0; De < se.length; De++) {
          var Be = se[De];
          if (Be !== "children" && Be !== "key") {
            Kt(D), ue("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Be), Kt(null);
            break;
          }
        }
        D.ref !== null && (Kt(D), ue("Invalid attribute `ref` supplied to `React.Fragment`."), Kt(null));
      }
    }
    var Lr = {};
    function lr(D, se, De, Be, _t, yt) {
      {
        var kt = it(D);
        if (!kt) {
          var wt = "";
          (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (wt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var xn = Wi();
          xn ? wt += xn : wt += ka();
          var un;
          D === null ? un = "null" : Gn(D) ? un = "array" : D !== void 0 && D.$$typeof === m ? (un = "<" + (Z(D.type) || "Unknown") + " />", wt = " Did you accidentally export a JSX literal instead of a component?") : un = typeof D, ue("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", un, wt);
        }
        var dn = er(D, se, De, _t, yt);
        if (dn == null)
          return dn;
        if (kt) {
          var ur = se.children;
          if (ur !== void 0)
            if (Be)
              if (Gn(ur)) {
                for (var Ja = 0; Ja < ur.length; Ja++)
                  Co(ur[Ja], D);
                Object.freeze && Object.freeze(ur);
              } else
                ue("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Co(ur, D);
        }
        if (Yn.call(se, "key")) {
          var Za = Z(D), Ct = Object.keys(se).filter(function(sl) {
            return sl !== "key";
          }), Rt = Ct.length > 0 ? "{key: someKey, " + Ct.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Lr[Za + Rt]) {
            var ei = Ct.length > 0 ? "{" + Ct.join(": ..., ") + ": ...}" : "{}";
            ue(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Rt, Za, ei, Za), Lr[Za + Rt] = !0;
          }
        }
        return D === E ? Dr(dn) : ul(dn), dn;
      }
    }
    function mi(D, se, De) {
      return lr(D, se, De, !0);
    }
    function Xa(D, se, De) {
      return lr(D, se, De, !1);
    }
    var yi = Xa, gi = mi;
    vv.Fragment = E, vv.jsx = yi, vv.jsxs = gi;
  })()), vv;
}
var QE;
function Gk() {
  return QE || (QE = 1, process.env.NODE_ENV === "production" ? cy.exports = Wk() : cy.exports = Yk()), cy.exports;
}
var re = Gk(), vt = nu();
const _y = /* @__PURE__ */ o_(vt);
function Qk(v, m) {
  if (Object.is(v, m))
    return !0;
  if (typeof v != "object" || v === null || typeof m != "object" || m === null)
    return !1;
  if (v instanceof Map && m instanceof Map) {
    if (v.size !== m.size) return !1;
    for (const [E, k] of v)
      if (!Object.is(k, m.get(E)))
        return !1;
    return !0;
  }
  if (v instanceof Set && m instanceof Set) {
    if (v.size !== m.size) return !1;
    for (const E of v)
      if (!m.has(E))
        return !1;
    return !0;
  }
  const h = Object.keys(v);
  if (h.length !== Object.keys(m).length)
    return !1;
  for (const E of h)
    if (!Object.prototype.hasOwnProperty.call(m, E) || !Object.is(v[E], m[E]))
      return !1;
  return !0;
}
const { useRef: qk } = _y;
function DR(v) {
  const m = qk();
  return (h) => {
    const E = v(h);
    return Qk(m.current, E) ? m.current : m.current = E;
  };
}
const Kk = "_sidebar_gxqe0_1", Xk = "_sidebarNav_gxqe0_24", Jk = "_sectionWrapper_gxqe0_32", Zk = "_sectionHeader_gxqe0_37", eO = "_active_gxqe0_48", tO = "_sidebarItemInHeader_gxqe0_68", nO = "_plusButton_gxqe0_71", rO = "_sidebarItem_gxqe0_68", aO = "_sidebarIcon_gxqe0_138", iO = "_sidebarLabel_gxqe0_148", oO = "_plusIcon_gxqe0_173", lO = "_rotated_gxqe0_178", Tn = {
  sidebar: Kk,
  sidebarNav: Xk,
  sectionWrapper: Jk,
  sectionHeader: Zk,
  active: eO,
  sidebarItemInHeader: tO,
  plusButton: nO,
  sidebarItem: rO,
  sidebarIcon: aO,
  sidebarLabel: iO,
  plusIcon: oO,
  rotated: lO
}, uO = "_expandedContent_pymls_2", sO = "_searchWrapper_pymls_17", cO = "_searchContainer_pymls_23", fO = "_searchDropdown_pymls_33", dO = "_dropdownItem_pymls_69", pO = "_selected_pymls_84", vO = "_personAvatar_pymls_97", hO = "_avatarPlaceholder_pymls_111", mO = "_personInfo_pymls_123", yO = "_personName_pymls_131", gO = "_personTitle_pymls_140", SO = "_dropdownEmpty_pymls_148", _O = "_searchIcon_pymls_155", CO = "_searchInput_pymls_160", EO = "_suggestionsList_pymls_172", RO = "_suggestionItemWrapper_pymls_191", TO = "_suggestionItem_pymls_191", bO = "_statusIcon_pymls_219", wO = "_moreButton_pymls_222", xO = "_childItem_pymls_225", kO = "_suggestionLabel_pymls_254", OO = "_loadingState_pymls_299", DO = "_loadingSpinner_pymls_309", LO = "_emptyState_pymls_323", NO = "_errorState_pymls_330", rn = {
  expandedContent: uO,
  searchWrapper: sO,
  searchContainer: cO,
  searchDropdown: fO,
  dropdownItem: dO,
  selected: pO,
  personAvatar: vO,
  avatarPlaceholder: hO,
  personInfo: mO,
  personName: yO,
  personTitle: gO,
  dropdownEmpty: SO,
  searchIcon: _O,
  searchInput: CO,
  suggestionsList: EO,
  suggestionItemWrapper: RO,
  suggestionItem: TO,
  statusIcon: bO,
  moreButton: wO,
  childItem: xO,
  suggestionLabel: kO,
  loadingState: OO,
  loadingSpinner: DO,
  emptyState: LO,
  errorState: NO
}, MO = {}, qE = (v) => {
  let m;
  const h = /* @__PURE__ */ new Set(), E = (M, P) => {
    const V = typeof M == "function" ? M(m) : M;
    if (!Object.is(V, m)) {
      const F = m;
      m = P ?? (typeof V != "object" || V === null) ? V : Object.assign({}, m, V), h.forEach((X) => X(m, F));
    }
  }, k = () => m, x = { setState: E, getState: k, getInitialState: () => b, subscribe: (M) => (h.add(M), () => h.delete(M)), destroy: () => {
    (MO ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), h.clear();
  } }, b = m = v(E, k, x);
  return x;
}, AO = (v) => v ? qE(v) : qE;
var dy = { exports: {} }, BS = {}, py = { exports: {} }, $S = {};
var KE;
function UO() {
  if (KE) return $S;
  KE = 1;
  var v = nu();
  function m(P, V) {
    return P === V && (P !== 0 || 1 / P === 1 / V) || P !== P && V !== V;
  }
  var h = typeof Object.is == "function" ? Object.is : m, E = v.useState, k = v.useEffect, T = v.useLayoutEffect, y = v.useDebugValue;
  function N(P, V) {
    var F = V(), X = E({ inst: { value: F, getSnapshot: V } }), K = X[0].inst, ae = X[1];
    return T(
      function() {
        K.value = F, K.getSnapshot = V, x(K) && ae({ inst: K });
      },
      [P, F, V]
    ), k(
      function() {
        return x(K) && ae({ inst: K }), P(function() {
          x(K) && ae({ inst: K });
        });
      },
      [P]
    ), y(F), F;
  }
  function x(P) {
    var V = P.getSnapshot;
    P = P.value;
    try {
      var F = V();
      return !h(P, F);
    } catch {
      return !0;
    }
  }
  function b(P, V) {
    return V();
  }
  var M = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? b : N;
  return $S.useSyncExternalStore = v.useSyncExternalStore !== void 0 ? v.useSyncExternalStore : M, $S;
}
var WS = {};
var XE;
function jO() {
  return XE || (XE = 1, process.env.NODE_ENV !== "production" && (function() {
    function v(F, X) {
      return F === X && (F !== 0 || 1 / F === 1 / X) || F !== F && X !== X;
    }
    function m(F, X) {
      M || k.startTransition === void 0 || (M = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var K = X();
      if (!P) {
        var ae = X();
        T(K, ae) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), P = !0);
      }
      ae = y({
        inst: { value: K, getSnapshot: X }
      });
      var le = ae[0].inst, ue = ae[1];
      return x(
        function() {
          le.value = K, le.getSnapshot = X, h(le) && ue({ inst: le });
        },
        [F, K, X]
      ), N(
        function() {
          return h(le) && ue({ inst: le }), F(function() {
            h(le) && ue({ inst: le });
          });
        },
        [F]
      ), b(K), K;
    }
    function h(F) {
      var X = F.getSnapshot;
      F = F.value;
      try {
        var K = X();
        return !T(F, K);
      } catch {
        return !0;
      }
    }
    function E(F, X) {
      return X();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var k = nu(), T = typeof Object.is == "function" ? Object.is : v, y = k.useState, N = k.useEffect, x = k.useLayoutEffect, b = k.useDebugValue, M = !1, P = !1, V = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? E : m;
    WS.useSyncExternalStore = k.useSyncExternalStore !== void 0 ? k.useSyncExternalStore : V, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), WS;
}
var JE;
function LR() {
  return JE || (JE = 1, process.env.NODE_ENV === "production" ? py.exports = UO() : py.exports = jO()), py.exports;
}
var ZE;
function zO() {
  if (ZE) return BS;
  ZE = 1;
  var v = nu(), m = LR();
  function h(b, M) {
    return b === M && (b !== 0 || 1 / b === 1 / M) || b !== b && M !== M;
  }
  var E = typeof Object.is == "function" ? Object.is : h, k = m.useSyncExternalStore, T = v.useRef, y = v.useEffect, N = v.useMemo, x = v.useDebugValue;
  return BS.useSyncExternalStoreWithSelector = function(b, M, P, V, F) {
    var X = T(null);
    if (X.current === null) {
      var K = { hasValue: !1, value: null };
      X.current = K;
    } else K = X.current;
    X = N(
      function() {
        function le(be) {
          if (!ue) {
            if (ue = !0, pe = be, be = V(be), F !== void 0 && K.hasValue) {
              var Re = K.value;
              if (F(Re, be))
                return _e = Re;
            }
            return _e = be;
          }
          if (Re = _e, E(pe, be)) return Re;
          var Ue = V(be);
          return F !== void 0 && F(Re, Ue) ? (pe = be, Re) : (pe = be, _e = Ue);
        }
        var ue = !1, pe, _e, ve = P === void 0 ? null : P;
        return [
          function() {
            return le(M());
          },
          ve === null ? void 0 : function() {
            return le(ve());
          }
        ];
      },
      [M, P, V, F]
    );
    var ae = k(b, X[0], X[1]);
    return y(
      function() {
        K.hasValue = !0, K.value = ae;
      },
      [ae]
    ), x(ae), ae;
  }, BS;
}
var YS = {};
var eR;
function PO() {
  return eR || (eR = 1, process.env.NODE_ENV !== "production" && (function() {
    function v(b, M) {
      return b === M && (b !== 0 || 1 / b === 1 / M) || b !== b && M !== M;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var m = nu(), h = LR(), E = typeof Object.is == "function" ? Object.is : v, k = h.useSyncExternalStore, T = m.useRef, y = m.useEffect, N = m.useMemo, x = m.useDebugValue;
    YS.useSyncExternalStoreWithSelector = function(b, M, P, V, F) {
      var X = T(null);
      if (X.current === null) {
        var K = { hasValue: !1, value: null };
        X.current = K;
      } else K = X.current;
      X = N(
        function() {
          function le(be) {
            if (!ue) {
              if (ue = !0, pe = be, be = V(be), F !== void 0 && K.hasValue) {
                var Re = K.value;
                if (F(Re, be))
                  return _e = Re;
              }
              return _e = be;
            }
            if (Re = _e, E(pe, be))
              return Re;
            var Ue = V(be);
            return F !== void 0 && F(Re, Ue) ? (pe = be, Re) : (pe = be, _e = Ue);
          }
          var ue = !1, pe, _e, ve = P === void 0 ? null : P;
          return [
            function() {
              return le(M());
            },
            ve === null ? void 0 : function() {
              return le(ve());
            }
          ];
        },
        [M, P, V, F]
      );
      var ae = k(b, X[0], X[1]);
      return y(
        function() {
          K.hasValue = !0, K.value = ae;
        },
        [ae]
      ), x(ae), ae;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), YS;
}
var tR;
function FO() {
  return tR || (tR = 1, process.env.NODE_ENV === "production" ? dy.exports = zO() : dy.exports = PO()), dy.exports;
}
var VO = FO();
const HO = /* @__PURE__ */ o_(VO), NR = {}, { useDebugValue: IO } = _y, { useSyncExternalStoreWithSelector: BO } = HO;
let nR = !1;
const $O = (v) => v;
function WO(v, m = $O, h) {
  (NR ? "production" : void 0) !== "production" && h && !nR && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), nR = !0);
  const E = BO(
    v.subscribe,
    v.getState,
    v.getServerState || v.getInitialState,
    m,
    h
  );
  return IO(E), E;
}
const rR = (v) => {
  (NR ? "production" : void 0) !== "production" && typeof v != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const m = typeof v == "function" ? AO(v) : v, h = (E, k) => WO(m, E, k);
  return Object.assign(h, m), h;
}, YO = (v) => v ? rR(v) : rR, GS = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 }, ZS = /* @__PURE__ */ new Map(), vy = (v) => {
  const m = ZS.get(v);
  return m ? Object.fromEntries(
    Object.entries(m.stores).map(([h, E]) => [h, E.getState()])
  ) : {};
}, GO = (v, m, h) => {
  if (v === void 0)
    return {
      type: "untracked",
      connection: m.connect(h)
    };
  const E = ZS.get(h.name);
  if (E)
    return { type: "tracked", store: v, ...E };
  const k = {
    connection: m.connect(h),
    stores: {}
  };
  return ZS.set(h.name, k), { type: "tracked", store: v, ...k };
}, QO = (v, m = {}) => (h, E, k) => {
  const { enabled: T, anonymousActionType: y, store: N, ...x } = m;
  let b;
  try {
    b = (T ?? (GS ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch {
  }
  if (!b)
    return (GS ? "production" : void 0) !== "production" && T && console.warn(
      "[zustand devtools middleware] Please install/enable Redux devtools extension"
    ), v(h, E, k);
  const { connection: M, ...P } = GO(N, b, x);
  let V = !0;
  k.setState = (K, ae, le) => {
    const ue = h(K, ae);
    if (!V) return ue;
    const pe = le === void 0 ? { type: y || "anonymous" } : typeof le == "string" ? { type: le } : le;
    return N === void 0 ? (M?.send(pe, E()), ue) : (M?.send(
      {
        ...pe,
        type: `${N}/${pe.type}`
      },
      {
        ...vy(x.name),
        [N]: k.getState()
      }
    ), ue);
  };
  const F = (...K) => {
    const ae = V;
    V = !1, h(...K), V = ae;
  }, X = v(k.setState, E, k);
  if (P.type === "untracked" ? M?.init(X) : (P.stores[P.store] = k, M?.init(
    Object.fromEntries(
      Object.entries(P.stores).map(([K, ae]) => [
        K,
        K === P.store ? X : ae.getState()
      ])
    )
  )), k.dispatchFromDevtools && typeof k.dispatch == "function") {
    let K = !1;
    const ae = k.dispatch;
    k.dispatch = (...le) => {
      (GS ? "production" : void 0) !== "production" && le[0].type === "__setState" && !K && (console.warn(
        '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
      ), K = !0), ae(...le);
    };
  }
  return M.subscribe((K) => {
    var ae;
    switch (K.type) {
      case "ACTION":
        if (typeof K.payload != "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return QS(
          K.payload,
          (le) => {
            if (le.type === "__setState") {
              if (N === void 0) {
                F(le.state);
                return;
              }
              Object.keys(le.state).length !== 1 && console.error(
                `
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `
              );
              const ue = le.state[N];
              if (ue == null)
                return;
              JSON.stringify(k.getState()) !== JSON.stringify(ue) && F(ue);
              return;
            }
            k.dispatchFromDevtools && typeof k.dispatch == "function" && k.dispatch(le);
          }
        );
      case "DISPATCH":
        switch (K.payload.type) {
          case "RESET":
            return F(X), N === void 0 ? M?.init(k.getState()) : M?.init(vy(x.name));
          case "COMMIT":
            if (N === void 0) {
              M?.init(k.getState());
              return;
            }
            return M?.init(vy(x.name));
          case "ROLLBACK":
            return QS(K.state, (le) => {
              if (N === void 0) {
                F(le), M?.init(k.getState());
                return;
              }
              F(le[N]), M?.init(vy(x.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return QS(K.state, (le) => {
              if (N === void 0) {
                F(le);
                return;
              }
              JSON.stringify(k.getState()) !== JSON.stringify(le[N]) && F(le[N]);
            });
          case "IMPORT_STATE": {
            const { nextLiftedState: le } = K.payload, ue = (ae = le.computedStates.slice(-1)[0]) == null ? void 0 : ae.state;
            if (!ue) return;
            F(N === void 0 ? ue : ue[N]), M?.send(
              null,
              // FIXME no-any
              le
            );
            return;
          }
          case "PAUSE_RECORDING":
            return V = !V;
        }
        return;
    }
  }), X;
}, qO = QO, QS = (v, m) => {
  let h;
  try {
    h = JSON.parse(v);
  } catch (E) {
    console.error(
      "[zustand devtools middleware] Could not parse the received json",
      E
    );
  }
  h !== void 0 && m(h);
}, aR = void 0, iR = void 0, oR = void 0;
console.error("VITE_API_URL is not defined in environment variables");
console.error("VITE_API_TOKEN is not defined in environment variables");
const MR = YO()(qO((v) => ({
  leverageLoops: [],
  suggestionRequests: [],
  isLoading: !1,
  error: null,
  fetchNetworkPersons: async () => {
    v({ isLoading: !0, error: null });
    try {
      const m = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${iR}`,
        "x-data-source": oR
      }, h = await fetch(`${aR}:Et3oQAtI/my-persons`, { headers: m }), E = await h.json();
      if (!h.ok) {
        const k = E?.message || E?.error || "Failed to fetch loops", T = `HTTP ${h.status}: ${k}`;
        throw new Error(T);
      }
      v({ leverageLoops: E, isLoading: !1 });
    } catch (m) {
      v({
        error: m instanceof Error ? m.message : "Unknown error",
        isLoading: !1
      });
    }
  },
  fetchSuggestionRequests: async () => {
    v({ isLoading: !0, error: null });
    try {
      const m = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${iR}`,
        "x-data-source": oR
      }, h = await fetch(`${aR}:MkA4QsNh/suggestion-requests?copilot_mode=loop`, { headers: m }), E = await h.json();
      if (!h.ok) {
        const k = E?.message || E?.error || "Failed to fetch suggestion requests", T = `HTTP ${h.status}: ${k}`;
        throw new Error(T);
      }
      v({ suggestionRequests: E?.items ?? [], isLoading: !1 });
    } catch (m) {
      v({
        error: m instanceof Error ? m.message : "Unknown error",
        isLoading: !1
      });
    }
  },
  setLeverageLoops: (m) => v({ leverageLoops: m }),
  addLeverageLoops: (m) => v((h) => ({ leverageLoops: [...h.leverageLoops, ...m] }))
}))), KO = ({ status: v }) => {
  switch (v) {
    case "draft":
      return /* @__PURE__ */ re.jsx("span", { className: rn.statusIcon, "data-status": "draft", children: "✗" });
    case "activated":
      return /* @__PURE__ */ re.jsx("span", { className: rn.statusIcon, "data-status": "activated", children: "✗" });
    case "processsing":
      return /* @__PURE__ */ re.jsx("span", { className: rn.statusIcon, "data-status": "processsing", children: "✗" });
    case "suggestion_made":
      return /* @__PURE__ */ re.jsx("span", { className: rn.statusIcon, "data-status": "suggestion_made", children: "✗" });
  }
  return /* @__PURE__ */ re.jsx("span", { className: rn.statusIcon, "data-status": "completed", children: "✓" });
}, XO = ({
  contentType: v,
  items: m,
  selectedItem: h,
  onItemSelect: E,
  isLoading: k = !1,
  emptyMessage: T = "No items found",
  error: y = null,
  selectedSuggestionRequest: N,
  onSuggestionRequestSelect: x
}) => {
  const [b, M] = vt.useState(/* @__PURE__ */ new Set()), [P, V] = vt.useState(""), [F, X] = vt.useState(!1), K = vt.useRef(null), { suggestionRequests: ae, leverageLoops: le, isLoading: ue, error: pe } = MR(
    DR((Se) => ({
      suggestionRequests: Se.suggestionRequests,
      leverageLoops: Se.leverageLoops,
      isLoading: Se.isLoading,
      error: Se.error
    }))
  );
  vt.useEffect(() => {
    const Se = (Y) => {
      K.current && !K.current.contains(Y.target) && X(!1);
    };
    return document.addEventListener("mousedown", Se), () => document.removeEventListener("mousedown", Se);
  }, []);
  const _e = (Se) => {
    M((Y) => {
      const Z = new Set(Y);
      return Z.has(Se) ? Z.delete(Se) : Z.add(Se), Z;
    });
  }, ve = (Se, Y) => (console.log("persons in filterLeverageLoopPersons", Se), Y ? Se.filter(
    (Z) => Z.full_name?.toLowerCase().includes(Y.toLowerCase()) || Z.master_person.name?.toLowerCase().includes(Y.toLowerCase()) || Z.master_person.current_title?.toLowerCase().includes(Y.toLowerCase()) || Z.master_person.bio?.toLowerCase().includes(Y.toLowerCase()) || Z.master_person.master_company?.company_name?.toLowerCase().includes(Y.toLowerCase())
  ) : []), be = (Se) => {
    const Y = Se.target.value;
    V(Y), X(Y.length > 0);
  }, Re = (Se) => {
    E(Se), V(""), X(!1);
  }, Ue = (Se) => {
    const Y = h?.id === Se.id;
    return /* @__PURE__ */ re.jsxs(
      "button",
      {
        className: `${rn.dropdownItem} ${Y ? rn.selected : ""}`,
        onClick: () => Re(Se),
        children: [
          /* @__PURE__ */ re.jsx("div", { className: rn.personAvatar, children: Se.master_person.avatar ? /* @__PURE__ */ re.jsx("img", { src: Se.master_person.avatar, alt: Se.full_name }) : /* @__PURE__ */ re.jsx("span", { className: rn.avatarPlaceholder, children: Se.full_name?.charAt(0) || "?" }) }),
          /* @__PURE__ */ re.jsxs("div", { className: rn.personInfo, children: [
            /* @__PURE__ */ re.jsx("span", { className: rn.personName, children: Se.full_name || Se.master_person.name }),
            Se.master_person.current_title && /* @__PURE__ */ re.jsxs("span", { className: rn.personTitle, children: [
              Se.master_person.current_title,
              Se.master_person.master_company?.company_name && /* @__PURE__ */ re.jsxs(re.Fragment, { children: [
                " at ",
                Se.master_person.master_company.company_name
              ] })
            ] })
          ] })
        ]
      },
      Se.id
    );
  }, qe = (Se, Y = !1) => {
    const Z = N?.request_header_title === Se.request_header_title;
    return /* @__PURE__ */ re.jsx("div", { className: rn.suggestionItemWrapper, children: /* @__PURE__ */ re.jsxs(
      "button",
      {
        className: `${rn.suggestionItem} ${Y ? rn.childItem : ""} ${Z ? rn.selected : ""}`,
        onClick: () => {
          _e(Se.request_header_title), x(Se);
        },
        children: [
          /* @__PURE__ */ re.jsx(KO, { status: Se.status }),
          /* @__PURE__ */ re.jsx("span", { className: rn.suggestionLabel, children: Se.request_header_title }),
          /* @__PURE__ */ re.jsx("button", { className: rn.moreButton, onClick: (xe) => xe.stopPropagation(), children: "⋮" })
        ]
      }
    ) }, Se.id);
  }, it = ve(le.length > 0 ? le : m, P);
  return /* @__PURE__ */ re.jsxs("div", { className: rn.expandedContent, children: [
    /* @__PURE__ */ re.jsxs("div", { className: rn.searchWrapper, ref: K, children: [
      /* @__PURE__ */ re.jsxs("div", { className: rn.searchContainer, children: [
        /* @__PURE__ */ re.jsx("span", { className: rn.searchIcon, children: "🔍" }),
        /* @__PURE__ */ re.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search persons...",
            className: rn.searchInput,
            value: P,
            onChange: be,
            onFocus: () => P.length > 0 && X(!0)
          }
        )
      ] }),
      F && /* @__PURE__ */ re.jsx("div", { className: rn.searchDropdown, children: it.length === 0 ? /* @__PURE__ */ re.jsxs("div", { className: rn.dropdownEmpty, children: [
        'No persons found for "',
        P,
        '"'
      ] }) : it.map((Se) => Ue(Se)) })
    ] }),
    /* @__PURE__ */ re.jsx("div", { className: rn.suggestionsList, children: k ? /* @__PURE__ */ re.jsxs("div", { className: rn.loadingState, children: [
      /* @__PURE__ */ re.jsx("span", { className: rn.loadingSpinner }),
      "Loading..."
    ] }) : ae.length === 0 ? /* @__PURE__ */ re.jsx("div", { className: rn.emptyState, children: T }) : y ? /* @__PURE__ */ re.jsx("div", { className: rn.errorState, children: y }) : ae.map((Se) => qe(Se)) })
  ] });
}, JO = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.15816%2015.5394C4.42185%2015.8099%203.64142%2015.9909%202.82808%2016.0678C2.75965%2016.0739%202.69009%2016.0784%202.62129%2016.081C2.05326%2016.1048%201.47513%2015.9215%201.00732%2015.5213C0.154714%2014.7923%20-0.052828%2013.5813%200.443029%2012.6226C0.448638%2012.6116%200.453874%2012.6011%200.459857%2012.5898L3.41481%206.77869C2.08654%209.73401%202.83855%2013.3286%205.16339%2015.5372L5.15816%2015.5391V15.5394Z'%20fill='url(%23paint0_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8419%204.46013C15.5782%204.18972%2016.3587%204.00906%2017.172%203.93175C17.2401%203.92571%2017.31%203.92119%2017.3788%203.91855C17.9468%203.89479%2018.525%204.07808%2018.9928%204.47823C19.845%205.20726%2020.0529%206.41828%2019.5571%207.37699C19.5515%207.3883%2019.5458%207.39886%2019.5402%207.4098L16.5853%2013.2205C17.9132%2010.2648%2017.1615%206.67059%2014.8367%204.46202L14.8419%204.46013Z'%20fill='url(%23paint1_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10%202.61975C11.8545%202.61975%2013.547%203.31559%2014.8367%204.46211C12.464%205.51888%2010.8283%207.5913%2010.1904%2010.0563C9.55242%2012.5214%207.60302%2014.6787%205.16338%2015.5378C3.66459%2014.2306%202.68222%2012.2057%202.68222%2010.0001C2.68259%205.92394%205.95877%202.61975%2010%202.61975Z'%20fill='url(%23paint2_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8367%204.46167C16.358%205.81412%2017.3179%207.79376%2017.3179%209.99932C17.3179%2014.0751%2014.0417%2017.3793%2010.0001%2017.3793C8.14604%2017.3793%206.45317%2016.6835%205.16342%2015.537C7.59222%2014.5651%209.36213%2012.4644%2010.0001%209.99932C10.638%207.53429%2012.4079%205.4332%2014.8367%204.46167Z'%20fill='url(%23paint3_linear_23492_1459)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_23492_1459'%20x1='1.41231'%20y1='10.771'%20x2='6.31346'%20y2='13.2684'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFAE00'%20stop-opacity='0.12'/%3e%3cstop%20offset='1'%20stop-color='%23FFAE00'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_23492_1459'%20x1='13.6991'%20y1='6.69473'%20x2='18.6306'%20y2='9.20746'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2313F562'/%3e%3cstop%20offset='1'%20stop-color='%2313F562'%20stop-opacity='0.09'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_23492_1459'%20x1='4.21878'%20y1='14.805'%20x2='10.8001'%20y2='2.68539'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FD5743'/%3e%3cstop%20offset='0.21'%20stop-color='%23D13D58'/%3e%3cstop%20offset='0.4'%20stop-color='%23AB2868'/%3e%3cstop%20offset='0.6'%20stop-color='%238C1B6F'/%3e%3cstop%20offset='1'%20stop-color='%23280553'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_23492_1459'%20x1='9.19834'%20y1='17.5257'%20x2='15.8611'%20y2='5.25654'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23130F56'/%3e%3cstop%20offset='0.41'%20stop-color='%23105D8E'/%3e%3cstop%20offset='0.6'%20stop-color='%23107995'/%3e%3cstop%20offset='0.79'%20stop-color='%2311A39E'/%3e%3cstop%20offset='1'%20stop-color='%2313EBAF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", ZO = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%205.83329C9.17592%205.83329%208.37034%206.07766%207.68514%206.5355C6.99993%206.99334%206.46588%207.64408%206.15051%208.40544C5.83515%209.1668%205.75264%2010.0046%205.91341%2010.8128C6.07418%2011.6211%206.47102%2012.3635%207.05373%2012.9462C7.63645%2013.529%208.37888%2013.9258%209.18714%2014.0866C9.99539%2014.2473%2010.8332%2014.1648%2011.5945%2013.8495C12.3559%2013.5341%2013.0066%2013%2013.4645%2012.3148C13.9223%2011.6296%2014.1667%2010.824%2014.1667%209.99995M10.8333%202.54579C9.28839%202.37246%207.72776%202.68352%206.36733%203.43593C5.0069%204.18834%203.9139%205.34492%203.23953%206.74567C2.56516%208.14643%202.34274%209.72213%202.60305%2011.2548C2.86335%2012.7875%203.59352%2014.2014%204.69253%2015.301C5.79155%2016.4006%207.2051%2017.1314%208.73766%2017.3925C10.2702%2017.6536%2011.846%2017.432%2013.2471%2016.7583C14.6482%2016.0846%2015.8053%2014.9922%2016.5584%2013.6322C17.3115%2012.2721%2017.6234%2010.7117%2017.4508%209.16662M12.5%207.49995V4.99995L15%202.49995V4.99995H17.5L15%207.49995H12.5ZM12.5%207.49995L10%209.99995M9.16668%209.99995C9.16668%2010.221%209.25447%2010.4329%209.41076%2010.5892C9.56704%2010.7455%209.779%2010.8333%2010%2010.8333C10.221%2010.8333%2010.433%2010.7455%2010.5893%2010.5892C10.7455%2010.4329%2010.8333%2010.221%2010.8333%209.99995C10.8333%209.77894%2010.7455%209.56698%2010.5893%209.4107C10.433%209.25442%2010.221%209.16662%2010%209.16662C9.779%209.16662%209.56704%209.25442%209.41076%209.4107C9.25447%209.56698%209.16668%209.77894%209.16668%209.99995Z'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", eD = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.5533%205.43171C14.1448%204.53303%2013.4793%203.77539%2012.6409%203.2543C11.8024%202.73321%2010.8285%202.47198%209.84179%202.50353C8.8551%202.53509%207.89984%202.85802%207.09639%203.43162C6.29294%204.00523%205.67727%204.80383%205.32698%205.72679C4.97669%206.64974%204.90745%207.65573%205.12798%208.61798C5.34852%209.58022%205.84897%2010.4556%206.56625%2011.1339C7.28353%2011.8122%208.18555%2012.263%209.15861%2012.4294C10.1317%2012.5958%2011.1322%2012.4705%2012.0342%2012.0692'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.5683%2014.5533C15.467%2014.1448%2016.2246%2013.4793%2016.7457%2012.6409C17.2668%2011.8024%2017.5281%2010.8284%2017.4965%209.84176C17.4649%208.85507%2017.142%207.89981%2016.5684%207.09636C15.9948%206.29291%2015.1962%205.67724%2014.2732%205.32695C13.3503%204.97666%2012.3443%204.90742%2011.3821%205.12795C10.4198%205.34849%209.54439%205.84894%208.86612%206.56622C8.18784%207.2835%207.73708%208.18552%207.57064%209.15858C7.40419%2010.1316%207.52952%2011.1322%207.93083%2012.0341'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.45001%2014.5684C5.8585%2015.467%206.52387%2016.2247%207.36227%2016.7459C8.20067%2017.267%209.17458%2017.5283%2010.1613%2017.4969C11.1479%2017.4654%2012.1032%2017.1425%2012.9067%2016.569C13.7102%2015.9955%2014.3259%2015.197%2014.6763%2014.2741C15.0267%2013.3512%2015.0961%2012.3452%2014.8756%2011.383C14.6552%2010.4207%2014.1549%209.54526%2013.4377%208.8669C12.7205%208.18855%2011.8186%207.73767%2010.8456%207.57109C9.87256%207.40451%208.872%207.52969%207.97001%207.93085'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.43168%205.44995C4.53299%205.85844%203.77532%206.52381%203.25417%207.36221C2.73302%208.20061%202.47171%209.17452%202.50318%2010.1612C2.53465%2011.1479%202.85749%2012.1031%203.431%2012.9066C4.00451%2013.7101%204.80304%2014.3259%205.72594%2014.6763C6.64884%2015.0266%207.6548%2015.096%208.61706%2014.8756C9.57931%2014.6552%2010.4548%2014.1548%2011.1331%2013.4376C11.8115%2012.7205%2012.2624%2011.8185%2012.4289%2010.8455C12.5955%209.8725%2012.4703%208.87194%2012.0692%207.96995'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", tD = ({
  activeSection: v,
  onSectionChange: m
}) => {
  const { leverageLoops: h, suggestionRequests: E, fetchNetworkPersons: k, fetchSuggestionRequests: T, isLoading: y, error: N } = MR(
    DR((le) => ({
      leverageLoops: le.leverageLoops,
      suggestionRequests: le.suggestionRequests,
      fetchNetworkPersons: le.fetchNetworkPersons,
      fetchSuggestionRequests: le.fetchSuggestionRequests,
      isLoading: le.isLoading,
      error: le.error
    }))
  ), [x, b] = vt.useState(/* @__PURE__ */ new Set()), [M, P] = vt.useState(null), [V, F] = vt.useState(null), X = (le) => {
    m(le), b((ue) => {
      const pe = new Set(ue);
      return pe.has(le) ? pe.delete(le) : pe.add(le), pe;
    });
  }, K = (le) => {
    F(le), P(null), m("copilot");
  }, ae = (le) => {
    P(le), F(null), m("copilot");
  };
  return vt.useEffect(() => {
    k(), T();
  }, []), /* @__PURE__ */ re.jsx("div", { className: Tn.sidebar, children: /* @__PURE__ */ re.jsxs("nav", { className: Tn.sidebarNav, children: [
    /* @__PURE__ */ re.jsxs(
      "button",
      {
        className: `${Tn.sidebarItem} ${v === "copilot" ? Tn.active : ""}`,
        onClick: () => m("copilot"),
        "aria-label": "Orbiter.io Copilot",
        children: [
          /* @__PURE__ */ re.jsx("span", { className: Tn.sidebarIcon, children: /* @__PURE__ */ re.jsx("img", { src: JO, alt: "Orbiter", width: 18, height: 18 }) }),
          /* @__PURE__ */ re.jsx("span", { className: Tn.sidebarLabel, children: "Orbiter.io Copilot" })
        ]
      }
    ),
    /* @__PURE__ */ re.jsx("div", { className: Tn.sectionWrapper, children: /* @__PURE__ */ re.jsxs("div", { className: `${Tn.sectionHeader} ${v === "outcomes" ? Tn.active : ""}`, children: [
      /* @__PURE__ */ re.jsxs(
        "button",
        {
          className: Tn.sidebarItemInHeader,
          onClick: () => m("outcomes"),
          "aria-label": "Outcomes",
          children: [
            /* @__PURE__ */ re.jsx("span", { className: Tn.sidebarIcon, children: /* @__PURE__ */ re.jsx("img", { src: ZO, alt: "Outcomes", width: 18, height: 18 }) }),
            /* @__PURE__ */ re.jsx("span", { className: Tn.sidebarLabel, children: "Outcomes" })
          ]
        }
      ),
      /* @__PURE__ */ re.jsx(
        "button",
        {
          className: Tn.plusButton,
          onClick: () => X("outcomes"),
          "aria-label": "Expand Outcomes",
          children: /* @__PURE__ */ re.jsx("span", { className: `${Tn.plusIcon} ${x.has("outcomes") ? Tn.rotated : ""}`, children: "+" })
        }
      )
    ] }) }),
    /* @__PURE__ */ re.jsxs("div", { className: Tn.sectionWrapper, children: [
      /* @__PURE__ */ re.jsxs("div", { className: `${Tn.sectionHeader} ${v === "leverage-loops" ? Tn.active : ""}`, children: [
        /* @__PURE__ */ re.jsxs(
          "button",
          {
            className: Tn.sidebarItemInHeader,
            onClick: () => m("leverage-loops"),
            "aria-label": "Leverage Loops",
            children: [
              /* @__PURE__ */ re.jsx("span", { className: Tn.sidebarIcon, children: /* @__PURE__ */ re.jsx("img", { src: eD, alt: "Leverage Loops", width: 18, height: 18 }) }),
              /* @__PURE__ */ re.jsx("span", { className: Tn.sidebarLabel, children: "Leverage Loops" })
            ]
          }
        ),
        /* @__PURE__ */ re.jsx(
          "button",
          {
            className: Tn.plusButton,
            onClick: () => X("leverage-loops"),
            "aria-label": "Expand Leverage Loops",
            children: /* @__PURE__ */ re.jsx("span", { className: `${Tn.plusIcon} ${x.has("leverage-loops") ? Tn.rotated : ""}`, children: "+" })
          }
        )
      ] }),
      x.has("leverage-loops") && /* @__PURE__ */ re.jsx(
        XO,
        {
          contentType: "leverage-loops",
          items: h,
          selectedItem: V ?? null,
          selectedSuggestionRequest: M ?? null,
          onItemSelect: K,
          onSuggestionRequestSelect: ae,
          isLoading: y,
          error: N
        }
      )
    ] })
  ] }) });
}, nD = "_composerContainer_1dqbd_1", rD = "_composer_1dqbd_1", aD = "_inputWrapper_1dqbd_15", iD = "_input_1dqbd_15", oD = "_actions_1dqbd_40", lD = "_leftActions_1dqbd_47", uD = "_rightActions_1dqbd_48", sD = "_actionButton_1dqbd_54", cD = "_sendButton_1dqbd_75", fD = "_active_1dqbd_92", Bi = {
  composerContainer: nD,
  composer: rD,
  inputWrapper: aD,
  input: iD,
  actions: oD,
  leftActions: lD,
  rightActions: uD,
  actionButton: sD,
  sendButton: cD,
  active: fD
}, dD = ({
  onSend: v,
  disabled: m = !1,
  placeholder: h = "Ask anything..",
  initialValue: E = ""
}) => {
  const [k, T] = vt.useState(E), y = vt.useRef(null);
  vt.useEffect(() => {
    E && (T(E), setTimeout(() => y.current?.focus(), 0));
  }, [E]), vt.useEffect(() => {
    const b = y.current;
    b && (b.style.height = "auto", b.style.height = `${Math.min(b.scrollHeight, 200)}px`);
  }, [k]);
  const N = (b) => {
    b?.preventDefault(), k.trim() && !m && (v(k.trim()), T(""));
  }, x = (b) => {
    b.key === "Enter" && !b.shiftKey && (b.preventDefault(), N());
  };
  return /* @__PURE__ */ re.jsx("div", { className: Bi.composerContainer, children: /* @__PURE__ */ re.jsxs("form", { onSubmit: N, className: Bi.composer, children: [
    /* @__PURE__ */ re.jsx("div", { className: Bi.inputWrapper, children: /* @__PURE__ */ re.jsx(
      "textarea",
      {
        ref: y,
        value: k,
        onChange: (b) => T(b.target.value),
        onKeyDown: x,
        placeholder: h,
        disabled: m,
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
            className: `${Bi.sendButton} ${k.trim() && !m ? Bi.active : ""}`,
            disabled: !k.trim() || m,
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
}, pD = "_messageContainer_tnxih_1", vD = "_user_tnxih_6", hD = "_assistant_tnxih_9", mD = "_userMessage_tnxih_23", yD = "_assistantMessage_tnxih_38", gD = "_textContent_tnxih_45", SD = "_streamingIndicator_tnxih_50", mc = {
  messageContainer: pD,
  user: vD,
  assistant: hD,
  userMessage: mD,
  assistantMessage: yD,
  textContent: gD,
  streamingIndicator: SD
}, _D = ({
  message: v,
  // These props are available for custom Gen UI components
  onAction: m,
  onUpdateMessage: h
}) => {
  const E = v.role === "user", k = v.role === "assistant", T = () => /* @__PURE__ */ re.jsx("div", { className: mc.textContent, children: v.content || (v.isStreaming ? "" : "No response") });
  return /* @__PURE__ */ re.jsx(
    "div",
    {
      className: `${mc.messageContainer} ${E ? mc.user : mc.assistant}`,
      children: E ? /* @__PURE__ */ re.jsx("div", { className: mc.userMessage, children: /* @__PURE__ */ re.jsx("p", { children: v.content }) }) : k ? /* @__PURE__ */ re.jsxs("div", { className: mc.assistantMessage, children: [
        v.isStreaming && !v.content && /* @__PURE__ */ re.jsxs("div", { className: mc.streamingIndicator, children: [
          /* @__PURE__ */ re.jsx("span", {}),
          /* @__PURE__ */ re.jsx("span", {}),
          /* @__PURE__ */ re.jsx("span", {})
        ] }),
        T()
      ] }) : null
    }
  );
}, CD = "_overlay_271nu_1", ED = "_modal_271nu_21", RD = "_header_271nu_42", TD = "_closeButton_271nu_55", bD = "_selectedInfo_271nu_77", wD = "_inputGroup_271nu_99", xD = "_actions_271nu_130", kD = "_cancelBtn_271nu_136", OD = "_confirmBtn_271nu_137", eu = {
  overlay: CD,
  modal: ED,
  header: RD,
  closeButton: TD,
  selectedInfo: bD,
  inputGroup: wD,
  actions: xD,
  cancelBtn: kD,
  confirmBtn: OD
}, DD = ({
  isOpen: v,
  onClose: m,
  humanFriendlyMessage: h,
  llmFriendlyMessage: E,
  onConfirm: k
}) => {
  const [T, y] = vt.useState(E);
  if (vt.useEffect(() => {
    y(E);
  }, [E]), vt.useEffect(() => {
    const x = (b) => {
      b.key === "Escape" && m();
    };
    if (v)
      return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [v, m]), !v) return null;
  const N = (x) => {
    x.preventDefault(), T.trim() && k(T.trim());
  };
  return /* @__PURE__ */ re.jsx("div", { className: eu.overlay, onClick: m, children: /* @__PURE__ */ re.jsxs("div", { className: eu.modal, onClick: (x) => x.stopPropagation(), children: [
    /* @__PURE__ */ re.jsxs("div", { className: eu.header, children: [
      /* @__PURE__ */ re.jsx("h2", { children: "Edit Your Response" }),
      /* @__PURE__ */ re.jsx("button", { className: eu.closeButton, onClick: m, children: /* @__PURE__ */ re.jsx(
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
    /* @__PURE__ */ re.jsxs("form", { onSubmit: N, children: [
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
            value: T,
            onChange: (x) => y(x.target.value),
            placeholder: "Edit your message...",
            rows: 4,
            autoFocus: !0
          }
        )
      ] }),
      /* @__PURE__ */ re.jsxs("div", { className: eu.actions, children: [
        /* @__PURE__ */ re.jsx("button", { type: "button", className: eu.cancelBtn, onClick: m, children: "Cancel" }),
        /* @__PURE__ */ re.jsx(
          "button",
          {
            type: "submit",
            className: eu.confirmBtn,
            disabled: !T.trim(),
            children: "Send Message"
          }
        )
      ] })
    ] })
  ] }) });
}, LD = "_chatContainer_1fe7s_1", ND = "_header_1fe7s_9", MD = "_messagesContainer_1fe7s_23", AD = "_emptyState_1fe7s_42", hy = {
  chatContainer: LD,
  header: ND,
  messagesContainer: MD,
  emptyState: AD
}, UD = "http://localhost:3001", lR = () => `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, uR = ({
  agentName: v = "Copilot"
}) => {
  const [m, h] = vt.useState([]), [E, k] = vt.useState(!1), [T] = vt.useState(() => `thread-${Date.now()}`), [y, N] = vt.useState(!1), [x, b] = vt.useState(null), M = vt.useRef(null);
  vt.useEffect(() => {
    M.current?.scrollIntoView({ behavior: "smooth" });
  }, [m]);
  const P = vt.useCallback(
    async (ae) => {
      if (!ae.trim() || E) return;
      const le = {
        id: lR(),
        role: "user",
        content: ae.trim(),
        timestamp: /* @__PURE__ */ new Date()
      };
      h((_e) => [..._e, le]), k(!0);
      const ue = lR(), pe = {
        id: ue,
        role: "assistant",
        content: "",
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !0
      };
      h((_e) => [..._e, pe]);
      try {
        const _e = await fetch(`${UD}/api/chat`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            prompt: {
              role: "user",
              content: ae.trim(),
              id: le.id
            },
            threadId: T,
            responseId: ue
          })
        });
        if (!_e.ok)
          throw new Error(`API error: ${_e.status}`);
        const ve = _e.body?.getReader(), be = new TextDecoder();
        let Re = "";
        if (ve)
          for (; ; ) {
            const { done: Ue, value: qe } = await ve.read();
            if (Ue) break;
            const it = be.decode(qe, { stream: !0 });
            Re += it, h(
              (Se) => Se.map(
                (Y) => Y.id === ue ? { ...Y, content: Re } : Y
              )
            );
          }
        h(
          (Ue) => Ue.map(
            (qe) => qe.id === ue ? { ...qe, isStreaming: !1 } : qe
          )
        );
      } catch (_e) {
        console.error("Failed to send message:", _e), h(
          (ve) => ve.map(
            (be) => be.id === ue ? {
              ...be,
              content: "Sorry, there was an error processing your request.",
              isStreaming: !1
            } : be
          )
        );
      } finally {
        k(!1);
      }
    },
    [E, T]
  ), V = vt.useCallback(
    (ae) => {
      switch (console.log("Action received:", ae), ae.type) {
        case "continue_conversation":
          if (ae.params) {
            const { humanFriendlyMessage: le, llmFriendlyMessage: ue } = ae.params;
            le && ue && (b({
              humanFriendlyMessage: le,
              llmFriendlyMessage: ue
            }), N(!0));
          }
          break;
        case "open_url":
          ae.params?.url && window.open(ae.params.url, "_blank", "noopener,noreferrer");
          break;
        default:
          console.log("Unhandled action type:", ae.type);
      }
    },
    []
  ), F = vt.useCallback((ae, le) => {
    h(
      (ue) => ue.map((pe) => pe.id === ae ? { ...pe, content: le } : pe)
    );
  }, []), X = vt.useCallback(
    (ae) => {
      N(!1), b(null), P(ae);
    },
    [P]
  ), K = vt.useCallback(() => {
    N(!1), b(null);
  }, []);
  return /* @__PURE__ */ re.jsxs("div", { className: hy.chatContainer, children: [
    /* @__PURE__ */ re.jsx("div", { className: hy.header, children: /* @__PURE__ */ re.jsx("h1", { children: v }) }),
    /* @__PURE__ */ re.jsxs("div", { className: hy.messagesContainer, children: [
      m.length === 0 ? /* @__PURE__ */ re.jsx("div", { className: hy.emptyState, children: /* @__PURE__ */ re.jsxs("p", { children: [
        "Start a conversation with ",
        v
      ] }) }) : m.map((ae) => /* @__PURE__ */ re.jsx(
        _D,
        {
          message: ae,
          onAction: V,
          onUpdateMessage: (le) => F(ae.id, le)
        },
        ae.id
      )),
      /* @__PURE__ */ re.jsx("div", { ref: M })
    ] }),
    /* @__PURE__ */ re.jsx(dD, { onSend: P, disabled: E }),
    x && /* @__PURE__ */ re.jsx(
      DD,
      {
        isOpen: y,
        onClose: K,
        humanFriendlyMessage: x.humanFriendlyMessage,
        llmFriendlyMessage: x.llmFriendlyMessage,
        onConfirm: X
      }
    )
  ] });
}, jD = "_container_83jbb_1", zD = "_content_83jbb_10", PD = "_title_83jbb_15", FD = "_description_83jbb_22", es = {
  container: jD,
  content: zD,
  title: PD,
  description: FD
}, VD = () => /* @__PURE__ */ re.jsx("div", { className: es.container, children: /* @__PURE__ */ re.jsxs("div", { className: es.content, children: [
  /* @__PURE__ */ re.jsx("h1", { className: es.title, children: "Outcomes" }),
  /* @__PURE__ */ re.jsx("p", { className: es.description, children: "Manage and track your project outcomes here." })
] }) }), HD = () => /* @__PURE__ */ re.jsx("div", { className: es.container, children: /* @__PURE__ */ re.jsxs("div", { className: es.content, children: [
  /* @__PURE__ */ re.jsx("h1", { className: es.title, children: "Leverage Loops" }),
  /* @__PURE__ */ re.jsx("p", { className: es.description, children: "Create and manage leverage loops for your workflow." })
] }) }), ID = "_app_rj7hb_1", BD = "_mainContent_rj7hb_11", sR = {
  app: ID,
  mainContent: BD
}, $D = ({
  agentName: v = "Copilot",
  logoUrl: m
}) => {
  const [h, E] = vt.useState("copilot"), k = () => {
    switch (h) {
      case "copilot":
        return /* @__PURE__ */ re.jsx(uR, { agentName: v, logoUrl: m });
      case "outcomes":
        return /* @__PURE__ */ re.jsx(VD, {});
      case "leverage-loops":
        return /* @__PURE__ */ re.jsx(HD, {});
      default:
        return /* @__PURE__ */ re.jsx(uR, { agentName: v, logoUrl: m });
    }
  };
  return /* @__PURE__ */ re.jsxs("div", { className: sR.app, children: [
    /* @__PURE__ */ re.jsx(
      tD,
      {
        activeSection: h,
        onSectionChange: E
      }
    ),
    /* @__PURE__ */ re.jsx("main", { className: sR.mainContent, children: k() })
  ] });
};
var my = { exports: {} }, Ga = {}, yy = { exports: {} }, qS = {};
var cR;
function WD() {
  return cR || (cR = 1, (function(v) {
    function m(ie, Ae) {
      var Ce = ie.length;
      ie.push(Ae);
      e: for (; 0 < Ce; ) {
        var z = Ce - 1 >>> 1, ee = ie[z];
        if (0 < k(ee, Ae)) ie[z] = Ae, ie[Ce] = ee, Ce = z;
        else break e;
      }
    }
    function h(ie) {
      return ie.length === 0 ? null : ie[0];
    }
    function E(ie) {
      if (ie.length === 0) return null;
      var Ae = ie[0], Ce = ie.pop();
      if (Ce !== Ae) {
        ie[0] = Ce;
        e: for (var z = 0, ee = ie.length, Ze = ee >>> 1; z < Ze; ) {
          var Ve = 2 * (z + 1) - 1, mt = ie[Ve], nt = Ve + 1, je = ie[nt];
          if (0 > k(mt, Ce)) nt < ee && 0 > k(je, mt) ? (ie[z] = je, ie[nt] = Ce, z = nt) : (ie[z] = mt, ie[Ve] = Ce, z = Ve);
          else if (nt < ee && 0 > k(je, Ce)) ie[z] = je, ie[nt] = Ce, z = nt;
          else break e;
        }
      }
      return Ae;
    }
    function k(ie, Ae) {
      var Ce = ie.sortIndex - Ae.sortIndex;
      return Ce !== 0 ? Ce : ie.id - Ae.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var T = performance;
      v.unstable_now = function() {
        return T.now();
      };
    } else {
      var y = Date, N = y.now();
      v.unstable_now = function() {
        return y.now() - N;
      };
    }
    var x = [], b = [], M = 1, P = null, V = 3, F = !1, X = !1, K = !1, ae = typeof setTimeout == "function" ? setTimeout : null, le = typeof clearTimeout == "function" ? clearTimeout : null, ue = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function pe(ie) {
      for (var Ae = h(b); Ae !== null; ) {
        if (Ae.callback === null) E(b);
        else if (Ae.startTime <= ie) E(b), Ae.sortIndex = Ae.expirationTime, m(x, Ae);
        else break;
        Ae = h(b);
      }
    }
    function _e(ie) {
      if (K = !1, pe(ie), !X) if (h(x) !== null) X = !0, Le(ve);
      else {
        var Ae = h(b);
        Ae !== null && Te(_e, Ae.startTime - ie);
      }
    }
    function ve(ie, Ae) {
      X = !1, K && (K = !1, le(Ue), Ue = -1), F = !0;
      var Ce = V;
      try {
        for (pe(Ae), P = h(x); P !== null && (!(P.expirationTime > Ae) || ie && !Se()); ) {
          var z = P.callback;
          if (typeof z == "function") {
            P.callback = null, V = P.priorityLevel;
            var ee = z(P.expirationTime <= Ae);
            Ae = v.unstable_now(), typeof ee == "function" ? P.callback = ee : P === h(x) && E(x), pe(Ae);
          } else E(x);
          P = h(x);
        }
        if (P !== null) var Ze = !0;
        else {
          var Ve = h(b);
          Ve !== null && Te(_e, Ve.startTime - Ae), Ze = !1;
        }
        return Ze;
      } finally {
        P = null, V = Ce, F = !1;
      }
    }
    var be = !1, Re = null, Ue = -1, qe = 5, it = -1;
    function Se() {
      return !(v.unstable_now() - it < qe);
    }
    function Y() {
      if (Re !== null) {
        var ie = v.unstable_now();
        it = ie;
        var Ae = !0;
        try {
          Ae = Re(!0, ie);
        } finally {
          Ae ? Z() : (be = !1, Re = null);
        }
      } else be = !1;
    }
    var Z;
    if (typeof ue == "function") Z = function() {
      ue(Y);
    };
    else if (typeof MessageChannel < "u") {
      var xe = new MessageChannel(), $e = xe.port2;
      xe.port1.onmessage = Y, Z = function() {
        $e.postMessage(null);
      };
    } else Z = function() {
      ae(Y, 0);
    };
    function Le(ie) {
      Re = ie, be || (be = !0, Z());
    }
    function Te(ie, Ae) {
      Ue = ae(function() {
        ie(v.unstable_now());
      }, Ae);
    }
    v.unstable_IdlePriority = 5, v.unstable_ImmediatePriority = 1, v.unstable_LowPriority = 4, v.unstable_NormalPriority = 3, v.unstable_Profiling = null, v.unstable_UserBlockingPriority = 2, v.unstable_cancelCallback = function(ie) {
      ie.callback = null;
    }, v.unstable_continueExecution = function() {
      X || F || (X = !0, Le(ve));
    }, v.unstable_forceFrameRate = function(ie) {
      0 > ie || 125 < ie ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : qe = 0 < ie ? Math.floor(1e3 / ie) : 5;
    }, v.unstable_getCurrentPriorityLevel = function() {
      return V;
    }, v.unstable_getFirstCallbackNode = function() {
      return h(x);
    }, v.unstable_next = function(ie) {
      switch (V) {
        case 1:
        case 2:
        case 3:
          var Ae = 3;
          break;
        default:
          Ae = V;
      }
      var Ce = V;
      V = Ae;
      try {
        return ie();
      } finally {
        V = Ce;
      }
    }, v.unstable_pauseExecution = function() {
    }, v.unstable_requestPaint = function() {
    }, v.unstable_runWithPriority = function(ie, Ae) {
      switch (ie) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ie = 3;
      }
      var Ce = V;
      V = ie;
      try {
        return Ae();
      } finally {
        V = Ce;
      }
    }, v.unstable_scheduleCallback = function(ie, Ae, Ce) {
      var z = v.unstable_now();
      switch (typeof Ce == "object" && Ce !== null ? (Ce = Ce.delay, Ce = typeof Ce == "number" && 0 < Ce ? z + Ce : z) : Ce = z, ie) {
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
      return ee = Ce + ee, ie = { id: M++, callback: Ae, priorityLevel: ie, startTime: Ce, expirationTime: ee, sortIndex: -1 }, Ce > z ? (ie.sortIndex = Ce, m(b, ie), h(x) === null && ie === h(b) && (K ? (le(Ue), Ue = -1) : K = !0, Te(_e, Ce - z))) : (ie.sortIndex = ee, m(x, ie), X || F || (X = !0, Le(ve))), ie;
    }, v.unstable_shouldYield = Se, v.unstable_wrapCallback = function(ie) {
      var Ae = V;
      return function() {
        var Ce = V;
        V = Ae;
        try {
          return ie.apply(this, arguments);
        } finally {
          V = Ce;
        }
      };
    };
  })(qS)), qS;
}
var KS = {};
var fR;
function YD() {
  return fR || (fR = 1, (function(v) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var m = !1, h = 5;
      function E(we, Ke) {
        var Tt = we.length;
        we.push(Ke), y(we, Ke, Tt);
      }
      function k(we) {
        return we.length === 0 ? null : we[0];
      }
      function T(we) {
        if (we.length === 0)
          return null;
        var Ke = we[0], Tt = we.pop();
        return Tt !== Ke && (we[0] = Tt, N(we, Tt, 0)), Ke;
      }
      function y(we, Ke, Tt) {
        for (var Wt = Tt; Wt > 0; ) {
          var on = Wt - 1 >>> 1, yn = we[on];
          if (x(yn, Ke) > 0)
            we[on] = Ke, we[Wt] = yn, Wt = on;
          else
            return;
        }
      }
      function N(we, Ke, Tt) {
        for (var Wt = Tt, on = we.length, yn = on >>> 1; Wt < yn; ) {
          var fn = (Wt + 1) * 2 - 1, er = we[fn], ln = fn + 1, qt = we[ln];
          if (x(er, Ke) < 0)
            ln < on && x(qt, er) < 0 ? (we[Wt] = qt, we[ln] = Ke, Wt = ln) : (we[Wt] = er, we[fn] = Ke, Wt = fn);
          else if (ln < on && x(qt, Ke) < 0)
            we[Wt] = qt, we[ln] = Ke, Wt = ln;
          else
            return;
        }
      }
      function x(we, Ke) {
        var Tt = we.sortIndex - Ke.sortIndex;
        return Tt !== 0 ? Tt : we.id - Ke.id;
      }
      var b = 1, M = 2, P = 3, V = 4, F = 5;
      function X(we, Ke) {
      }
      var K = typeof performance == "object" && typeof performance.now == "function";
      if (K) {
        var ae = performance;
        v.unstable_now = function() {
          return ae.now();
        };
      } else {
        var le = Date, ue = le.now();
        v.unstable_now = function() {
          return le.now() - ue;
        };
      }
      var pe = 1073741823, _e = -1, ve = 250, be = 5e3, Re = 1e4, Ue = pe, qe = [], it = [], Se = 1, Y = null, Z = P, xe = !1, $e = !1, Le = !1, Te = typeof setTimeout == "function" ? setTimeout : null, ie = typeof clearTimeout == "function" ? clearTimeout : null, Ae = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Ce(we) {
        for (var Ke = k(it); Ke !== null; ) {
          if (Ke.callback === null)
            T(it);
          else if (Ke.startTime <= we)
            T(it), Ke.sortIndex = Ke.expirationTime, E(qe, Ke);
          else
            return;
          Ke = k(it);
        }
      }
      function z(we) {
        if (Le = !1, Ce(we), !$e)
          if (k(qe) !== null)
            $e = !0, Un(ee);
          else {
            var Ke = k(it);
            Ke !== null && Rr(z, Ke.startTime - we);
          }
      }
      function ee(we, Ke) {
        $e = !1, Le && (Le = !1, va()), xe = !0;
        var Tt = Z;
        try {
          var Wt;
          if (!m) return Ze(we, Ke);
        } finally {
          Y = null, Z = Tt, xe = !1;
        }
      }
      function Ze(we, Ke) {
        var Tt = Ke;
        for (Ce(Tt), Y = k(qe); Y !== null && !(Y.expirationTime > Tt && (!we || vi())); ) {
          var Wt = Y.callback;
          if (typeof Wt == "function") {
            Y.callback = null, Z = Y.priorityLevel;
            var on = Y.expirationTime <= Tt, yn = Wt(on);
            Tt = v.unstable_now(), typeof yn == "function" ? Y.callback = yn : Y === k(qe) && T(qe), Ce(Tt);
          } else
            T(qe);
          Y = k(qe);
        }
        if (Y !== null)
          return !0;
        var fn = k(it);
        return fn !== null && Rr(z, fn.startTime - Tt), !1;
      }
      function Ve(we, Ke) {
        switch (we) {
          case b:
          case M:
          case P:
          case V:
          case F:
            break;
          default:
            we = P;
        }
        var Tt = Z;
        Z = we;
        try {
          return Ke();
        } finally {
          Z = Tt;
        }
      }
      function mt(we) {
        var Ke;
        switch (Z) {
          case b:
          case M:
          case P:
            Ke = P;
            break;
          default:
            Ke = Z;
            break;
        }
        var Tt = Z;
        Z = Ke;
        try {
          return we();
        } finally {
          Z = Tt;
        }
      }
      function nt(we) {
        var Ke = Z;
        return function() {
          var Tt = Z;
          Z = Ke;
          try {
            return we.apply(this, arguments);
          } finally {
            Z = Tt;
          }
        };
      }
      function je(we, Ke, Tt) {
        var Wt = v.unstable_now(), on;
        if (typeof Tt == "object" && Tt !== null) {
          var yn = Tt.delay;
          typeof yn == "number" && yn > 0 ? on = Wt + yn : on = Wt;
        } else
          on = Wt;
        var fn;
        switch (we) {
          case b:
            fn = _e;
            break;
          case M:
            fn = ve;
            break;
          case F:
            fn = Ue;
            break;
          case V:
            fn = Re;
            break;
          case P:
          default:
            fn = be;
            break;
        }
        var er = on + fn, ln = {
          id: Se++,
          callback: Ke,
          priorityLevel: we,
          startTime: on,
          expirationTime: er,
          sortIndex: -1
        };
        return on > Wt ? (ln.sortIndex = on, E(it, ln), k(qe) === null && ln === k(it) && (Le ? va() : Le = !0, Rr(z, on - Wt))) : (ln.sortIndex = er, E(qe, ln), !$e && !xe && ($e = !0, Un(ee))), ln;
      }
      function st() {
      }
      function dt() {
        !$e && !xe && ($e = !0, Un(ee));
      }
      function Qt() {
        return k(qe);
      }
      function An(we) {
        we.callback = null;
      }
      function Or() {
        return Z;
      }
      var bn = !1, or = null, Wn = -1, Yn = h, qr = -1;
      function vi() {
        var we = v.unstable_now() - qr;
        return !(we < Yn);
      }
      function pa() {
      }
      function Zn(we) {
        if (we < 0 || we > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        we > 0 ? Yn = Math.floor(1e3 / we) : Yn = h;
      }
      var wn = function() {
        if (or !== null) {
          var we = v.unstable_now();
          qr = we;
          var Ke = !0, Tt = !0;
          try {
            Tt = or(Ke, we);
          } finally {
            Tt ? Gn() : (bn = !1, or = null);
          }
        } else
          bn = !1;
      }, Gn;
      if (typeof Ae == "function")
        Gn = function() {
          Ae(wn);
        };
      else if (typeof MessageChannel < "u") {
        var Er = new MessageChannel(), qa = Er.port2;
        Er.port1.onmessage = wn, Gn = function() {
          qa.postMessage(null);
        };
      } else
        Gn = function() {
          Te(wn, 0);
        };
      function Un(we) {
        or = we, bn || (bn = !0, Gn());
      }
      function Rr(we, Ke) {
        Wn = Te(function() {
          we(v.unstable_now());
        }, Ke);
      }
      function va() {
        ie(Wn), Wn = -1;
      }
      var Ka = pa, hi = null;
      v.unstable_IdlePriority = F, v.unstable_ImmediatePriority = b, v.unstable_LowPriority = V, v.unstable_NormalPriority = P, v.unstable_Profiling = hi, v.unstable_UserBlockingPriority = M, v.unstable_cancelCallback = An, v.unstable_continueExecution = dt, v.unstable_forceFrameRate = Zn, v.unstable_getCurrentPriorityLevel = Or, v.unstable_getFirstCallbackNode = Qt, v.unstable_next = mt, v.unstable_pauseExecution = st, v.unstable_requestPaint = Ka, v.unstable_runWithPriority = Ve, v.unstable_scheduleCallback = je, v.unstable_shouldYield = vi, v.unstable_wrapCallback = nt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(KS)), KS;
}
var dR;
function AR() {
  return dR || (dR = 1, process.env.NODE_ENV === "production" ? yy.exports = WD() : yy.exports = YD()), yy.exports;
}
var pR;
function GD() {
  if (pR) return Ga;
  pR = 1;
  var v = nu(), m = AR();
  function h(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var E = /* @__PURE__ */ new Set(), k = {};
  function T(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (k[n] = r, n = 0; n < r.length; n++) E.add(r[n]);
  }
  var N = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), x = Object.prototype.hasOwnProperty, b = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, M = {}, P = {};
  function V(n) {
    return x.call(P, n) ? !0 : x.call(M, n) ? !1 : b.test(n) ? P[n] = !0 : (M[n] = !0, !1);
  }
  function F(n, r, o, u) {
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
  function X(n, r, o, u) {
    if (r === null || typeof r > "u" || F(n, r, o, u)) return !0;
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
  function K(n, r, o, u, c, d, _) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = _;
  }
  var ae = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ae[n] = new K(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ae[r] = new K(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ae[n] = new K(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ae[n] = new K(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ae[n] = new K(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ae[n] = new K(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ae[n] = new K(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ae[n] = new K(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ae[n] = new K(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var le = /[\-:]([a-z])/g;
  function ue(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      le,
      ue
    );
    ae[r] = new K(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(le, ue);
    ae[r] = new K(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(le, ue);
    ae[r] = new K(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ae[n] = new K(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ae.xlinkHref = new K("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ae[n] = new K(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function pe(n, r, o, u) {
    var c = ae.hasOwnProperty(r) ? ae[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (X(r, o, c, u) && (o = null), u || c === null ? V(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : c.mustUseProperty ? n[c.propertyName] = o === null ? c.type === 3 ? !1 : "" : o : (r = c.attributeName, u = c.attributeNamespace, o === null ? n.removeAttribute(r) : (c = c.type, o = c === 3 || c === 4 && o === !0 ? "" : "" + o, u ? n.setAttributeNS(u, r, o) : n.setAttribute(r, o))));
  }
  var _e = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ve = /* @__PURE__ */ Symbol.for("react.element"), be = /* @__PURE__ */ Symbol.for("react.portal"), Re = /* @__PURE__ */ Symbol.for("react.fragment"), Ue = /* @__PURE__ */ Symbol.for("react.strict_mode"), qe = /* @__PURE__ */ Symbol.for("react.profiler"), it = /* @__PURE__ */ Symbol.for("react.provider"), Se = /* @__PURE__ */ Symbol.for("react.context"), Y = /* @__PURE__ */ Symbol.for("react.forward_ref"), Z = /* @__PURE__ */ Symbol.for("react.suspense"), xe = /* @__PURE__ */ Symbol.for("react.suspense_list"), $e = /* @__PURE__ */ Symbol.for("react.memo"), Le = /* @__PURE__ */ Symbol.for("react.lazy"), Te = /* @__PURE__ */ Symbol.for("react.offscreen"), ie = Symbol.iterator;
  function Ae(n) {
    return n === null || typeof n != "object" ? null : (n = ie && n[ie] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Ce = Object.assign, z;
  function ee(n) {
    if (z === void 0) try {
      throw Error();
    } catch (o) {
      var r = o.stack.trim().match(/\n( *(at )?)/);
      z = r && r[1] || "";
    }
    return `
` + z + n;
  }
  var Ze = !1;
  function Ve(n, r) {
    if (!n || Ze) return "";
    Ze = !0;
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
        for (var c = Q.stack.split(`
`), d = u.stack.split(`
`), _ = c.length - 1, w = d.length - 1; 1 <= _ && 0 <= w && c[_] !== d[w]; ) w--;
        for (; 1 <= _ && 0 <= w; _--, w--) if (c[_] !== d[w]) {
          if (_ !== 1 || w !== 1)
            do
              if (_--, w--, 0 > w || c[_] !== d[w]) {
                var L = `
` + c[_].replace(" at new ", " at ");
                return n.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", n.displayName)), L;
              }
            while (1 <= _ && 0 <= w);
          break;
        }
      }
    } finally {
      Ze = !1, Error.prepareStackTrace = o;
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
        return n = Ve(n.type, !1), n;
      case 11:
        return n = Ve(n.type.render, !1), n;
      case 1:
        return n = Ve(n.type, !0), n;
      default:
        return "";
    }
  }
  function nt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Re:
        return "Fragment";
      case be:
        return "Portal";
      case qe:
        return "Profiler";
      case Ue:
        return "StrictMode";
      case Z:
        return "Suspense";
      case xe:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Se:
        return (n.displayName || "Context") + ".Consumer";
      case it:
        return (n._context.displayName || "Context") + ".Provider";
      case Y:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case $e:
        return r = n.displayName || null, r !== null ? r : nt(n.type) || "Memo";
      case Le:
        r = n._payload, n = n._init;
        try {
          return nt(n(r));
        } catch {
        }
    }
    return null;
  }
  function je(n) {
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
        return nt(r);
      case 8:
        return r === Ue ? "StrictMode" : "Mode";
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
  function Qt(n) {
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
  function An(n) {
    n._valueTracker || (n._valueTracker = Qt(n));
  }
  function Or(n) {
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
  function or(n, r) {
    var o = r.checked;
    return Ce({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function Wn(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    o = st(r.value != null ? r.value : o), n._wrapperState = { initialChecked: u, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Yn(n, r) {
    r = r.checked, r != null && pe(n, "checked", r, !1);
  }
  function qr(n, r) {
    Yn(n, r);
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
  var Zn = Array.isArray;
  function wn(n, r, o, u) {
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
  function Gn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(h(91));
    return Ce({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Er(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null) throw Error(h(92));
        if (Zn(o)) {
          if (1 < o.length) throw Error(h(93));
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
  function Un(n) {
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
  function we(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Ke = {
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
  }, Tt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ke).forEach(function(n) {
    Tt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Ke[r] = Ke[n];
    });
  });
  function Wt(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || Ke.hasOwnProperty(n) && Ke[n] ? ("" + r).trim() : r + "px";
  }
  function on(n, r) {
    n = n.style;
    for (var o in r) if (r.hasOwnProperty(o)) {
      var u = o.indexOf("--") === 0, c = Wt(o, r[o], u);
      o === "float" && (o = "cssFloat"), u ? n.setProperty(o, c) : n[o] = c;
    }
  }
  var yn = Ce({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function fn(n, r) {
    if (r) {
      if (yn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(h(137, n));
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
  var Kt = null, ha = null, Tr = null;
  function ka(n) {
    if (n = et(n)) {
      if (typeof Kt != "function") throw Error(h(280));
      var r = n.stateNode;
      r && (r = Sn(r), Kt(n.stateNode, n.type, r));
    }
  }
  function Wi(n) {
    ha ? Tr ? Tr.push(n) : Tr = [n] : ha = n;
  }
  function ol() {
    if (ha) {
      var n = ha, r = Tr;
      if (Tr = ha = null, ka(n), r) for (n = 0; n < r.length; n++) ka(r[n]);
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
      Co = !1, (ha !== null || Tr !== null) && (_o(), ol());
    }
  }
  function Dr(n, r) {
    var o = n.stateNode;
    if (o === null) return null;
    var u = Sn(o);
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
    if (o && typeof o != "function") throw Error(h(231, r, typeof o));
    return o;
  }
  var Lr = !1;
  if (N) try {
    var lr = {};
    Object.defineProperty(lr, "passive", { get: function() {
      Lr = !0;
    } }), window.addEventListener("test", lr, lr), window.removeEventListener("test", lr, lr);
  } catch {
    Lr = !1;
  }
  function mi(n, r, o, u, c, d, _, w, L) {
    var Q = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, Q);
    } catch (he) {
      this.onError(he);
    }
  }
  var Xa = !1, yi = null, gi = !1, D = null, se = { onError: function(n) {
    Xa = !0, yi = n;
  } };
  function De(n, r, o, u, c, d, _, w, L) {
    Xa = !1, yi = null, mi.apply(se, arguments);
  }
  function Be(n, r, o, u, c, d, _, w, L) {
    if (De.apply(this, arguments), Xa) {
      if (Xa) {
        var Q = yi;
        Xa = !1, yi = null;
      } else throw Error(h(198));
      gi || (gi = !0, D = Q);
    }
  }
  function _t(n) {
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
  function yt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function kt(n) {
    if (_t(n) !== n) throw Error(h(188));
  }
  function wt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = _t(n), r === null) throw Error(h(188));
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
        throw Error(h(188));
      }
      if (o.return !== u.return) o = c, u = d;
      else {
        for (var _ = !1, w = c.child; w; ) {
          if (w === o) {
            _ = !0, o = c, u = d;
            break;
          }
          if (w === u) {
            _ = !0, u = c, o = d;
            break;
          }
          w = w.sibling;
        }
        if (!_) {
          for (w = d.child; w; ) {
            if (w === o) {
              _ = !0, o = d, u = c;
              break;
            }
            if (w === u) {
              _ = !0, u = d, o = c;
              break;
            }
            w = w.sibling;
          }
          if (!_) throw Error(h(189));
        }
      }
      if (o.alternate !== u) throw Error(h(190));
    }
    if (o.tag !== 3) throw Error(h(188));
    return o.stateNode.current === o ? n : r;
  }
  function xn(n) {
    return n = wt(n), n !== null ? un(n) : null;
  }
  function un(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = un(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var dn = m.unstable_scheduleCallback, ur = m.unstable_cancelCallback, Ja = m.unstable_shouldYield, Za = m.unstable_requestPaint, Ct = m.unstable_now, Rt = m.unstable_getCurrentPriorityLevel, ei = m.unstable_ImmediatePriority, sl = m.unstable_UserBlockingPriority, cl = m.unstable_NormalPriority, Eo = m.unstable_LowPriority, ru = m.unstable_IdlePriority, Ro = null, Kr = null;
  function ts(n) {
    if (Kr && typeof Kr.onCommitFiberRoot == "function") try {
      Kr.onCommitFiberRoot(Ro, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Nr = Math.clz32 ? Math.clz32 : au, Sc = Math.log, _c = Math.LN2;
  function au(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Sc(n) / _c | 0) | 0;
  }
  var To = 64, ma = 4194304;
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
      var w = _ & ~c;
      w !== 0 ? u = ti(w) : (d &= _, d !== 0 && (u = ti(d)));
    } else _ = o & ~c, _ !== 0 ? u = ti(_) : d !== 0 && (u = ti(d));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && (r & c) === 0 && (c = u & -u, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if ((u & 4) !== 0 && (u |= o & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) o = 31 - Nr(r), c = 1 << o, u |= n[o], r &= ~c;
    return u;
  }
  function iu(n, r) {
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
      var _ = 31 - Nr(d), w = 1 << _, L = c[_];
      L === -1 ? ((w & o) === 0 || (w & u) !== 0) && (c[_] = iu(w, r)) : L <= r && (n.expiredLanes |= w), d &= ~w;
    }
  }
  function bo(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function ou() {
    var n = To;
    return To <<= 1, (To & 4194240) === 0 && (To = 64), n;
  }
  function lu(n) {
    for (var r = [], o = 0; 31 > o; o++) r.push(n);
    return r;
  }
  function Yi(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Nr(r), n[r] = o;
  }
  function ud(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var c = 31 - Nr(o), d = 1 << c;
      r[c] = 0, u[c] = -1, n[c] = -1, o &= ~d;
    }
  }
  function Gi(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var u = 31 - Nr(o), c = 1 << u;
      c & r | n[u] & r && (n[u] |= r), o &= ~c;
    }
  }
  var Ft = 0;
  function uu(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var jt, ns, Si, ht, su, sr = !1, _i = [], Mr = null, Ci = null, pn = null, Xt = /* @__PURE__ */ new Map(), wo = /* @__PURE__ */ new Map(), Qn = [], Ar = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Oa(n, r) {
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
        pn = null;
        break;
      case "pointerover":
      case "pointerout":
        Xt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        wo.delete(r.pointerId);
    }
  }
  function dl(n, r, o, u, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: u, nativeEvent: d, targetContainers: [c] }, r !== null && (r = et(r), r !== null && ns(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function rs(n, r, o, u, c) {
    switch (r) {
      case "focusin":
        return Mr = dl(Mr, n, r, o, u, c), !0;
      case "dragenter":
        return Ci = dl(Ci, n, r, o, u, c), !0;
      case "mouseover":
        return pn = dl(pn, n, r, o, u, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Xt.set(d, dl(Xt.get(d) || null, n, r, o, u, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, wo.set(d, dl(wo.get(d) || null, n, r, o, u, c)), !0;
    }
    return !1;
  }
  function as(n) {
    var r = Cl(n.target);
    if (r !== null) {
      var o = _t(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = yt(o), r !== null) {
            n.blockedOn = r, su(n.priority, function() {
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
  function xo(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = du(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var u = new o.constructor(o.type, o);
        ln = u, o.target.dispatchEvent(u), ln = null;
      } else return r = et(o), r !== null && ns(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function pl(n, r, o) {
    xo(n) && o.delete(r);
  }
  function sd() {
    sr = !1, Mr !== null && xo(Mr) && (Mr = null), Ci !== null && xo(Ci) && (Ci = null), pn !== null && xo(pn) && (pn = null), Xt.forEach(pl), wo.forEach(pl);
  }
  function Da(n, r) {
    n.blockedOn === r && (n.blockedOn = null, sr || (sr = !0, m.unstable_scheduleCallback(m.unstable_NormalPriority, sd)));
  }
  function ri(n) {
    function r(c) {
      return Da(c, n);
    }
    if (0 < _i.length) {
      Da(_i[0], n);
      for (var o = 1; o < _i.length; o++) {
        var u = _i[o];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (Mr !== null && Da(Mr, n), Ci !== null && Da(Ci, n), pn !== null && Da(pn, n), Xt.forEach(r), wo.forEach(r), o = 0; o < Qn.length; o++) u = Qn[o], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < Qn.length && (o = Qn[0], o.blockedOn === null); ) as(o), o.blockedOn === null && Qn.shift();
  }
  var Ei = _e.ReactCurrentBatchConfig, La = !0;
  function cu(n, r, o, u) {
    var c = Ft, d = Ei.transition;
    Ei.transition = null;
    try {
      Ft = 1, ko(n, r, o, u);
    } finally {
      Ft = c, Ei.transition = d;
    }
  }
  function fu(n, r, o, u) {
    var c = Ft, d = Ei.transition;
    Ei.transition = null;
    try {
      Ft = 4, ko(n, r, o, u);
    } finally {
      Ft = c, Ei.transition = d;
    }
  }
  function ko(n, r, o, u) {
    if (La) {
      var c = du(n, r, o, u);
      if (c === null) Nc(n, r, u, vl, o), Oa(n, u);
      else if (rs(c, n, r, o, u)) u.stopPropagation();
      else if (Oa(n, u), r & 4 && -1 < Ar.indexOf(n)) {
        for (; c !== null; ) {
          var d = et(c);
          if (d !== null && jt(d), d = du(n, r, o, u), d === null && Nc(n, r, u, vl, o), d === c) break;
          c = d;
        }
        c !== null && u.stopPropagation();
      } else Nc(n, r, u, null, o);
    }
  }
  var vl = null;
  function du(n, r, o, u) {
    if (vl = null, n = qt(u), n = Cl(n), n !== null) if (r = _t(n), r === null) n = null;
    else if (o = r.tag, o === 13) {
      if (n = yt(r), n !== null) return n;
      n = null;
    } else if (o === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return vl = n, null;
  }
  function pu(n) {
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
          case ru:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ai = null, S = null, O = null;
  function G() {
    if (O) return O;
    var n, r = S, o = r.length, u, c = "value" in ai ? ai.value : ai.textContent, d = c.length;
    for (n = 0; n < o && r[n] === c[n]; n++) ;
    var _ = o - n;
    for (u = 1; u <= _ && r[o - u] === c[d - u]; u++) ;
    return O = c.slice(n, 1 < u ? 1 - u : void 0);
  }
  function J(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Ee() {
    return !0;
  }
  function rt() {
    return !1;
  }
  function Oe(n) {
    function r(o, u, c, d, _) {
      this._reactName = o, this._targetInst = c, this.type = u, this.nativeEvent = d, this.target = _, this.currentTarget = null;
      for (var w in n) n.hasOwnProperty(w) && (o = n[w], this[w] = o ? o(d) : d[w]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Ee : rt, this.isPropagationStopped = rt, this;
    }
    return Ce(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = Ee);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = Ee);
    }, persist: function() {
    }, isPersistent: Ee }), r;
  }
  var lt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ot = Oe(lt), zt = Ce({}, lt, { view: 0, detail: 0 }), sn = Oe(zt), Jt, bt, Zt, gn = Ce({}, zt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: vd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Zt && (Zt && n.type === "mousemove" ? (Jt = n.screenX - Zt.screenX, bt = n.screenY - Zt.screenY) : bt = Jt = 0, Zt = n), Jt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : bt;
  } }), Oo = Oe(gn), is = Ce({}, gn, { dataTransfer: 0 }), Qi = Oe(is), os = Ce({}, zt, { relatedTarget: 0 }), hl = Oe(os), cd = Ce({}, lt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Cc = Oe(cd), fd = Ce({}, lt, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Sv = Oe(fd), dd = Ce({}, lt, { data: 0 }), pd = Oe(dd), _v = {
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
  }, Cv = {
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
  }, xy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function qi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = xy[n]) ? !!r[n] : !1;
  }
  function vd() {
    return qi;
  }
  var hd = Ce({}, zt, { key: function(n) {
    if (n.key) {
      var r = _v[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = J(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Cv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: vd, charCode: function(n) {
    return n.type === "keypress" ? J(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? J(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), md = Oe(hd), yd = Ce({}, gn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ev = Oe(yd), Ec = Ce({}, zt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: vd }), Rv = Oe(Ec), Xr = Ce({}, lt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ki = Oe(Xr), jn = Ce({}, gn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Xi = Oe(jn), gd = [9, 13, 27, 32], vu = N && "CompositionEvent" in window, ls = null;
  N && "documentMode" in document && (ls = document.documentMode);
  var us = N && "TextEvent" in window && !ls, Tv = N && (!vu || ls && 8 < ls && 11 >= ls), bv = " ", Rc = !1;
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
  function xv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var hu = !1;
  function kv(n, r) {
    switch (n) {
      case "compositionend":
        return xv(r);
      case "keypress":
        return r.which !== 32 ? null : (Rc = !0, bv);
      case "textInput":
        return n = r.data, n === bv && Rc ? null : n;
      default:
        return null;
    }
  }
  function ky(n, r) {
    if (hu) return n === "compositionend" || !vu && wv(n, r) ? (n = G(), O = S = ai = null, hu = !1, n) : null;
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
  var Oy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Ov(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Oy[n.type] : r === "textarea";
  }
  function Sd(n, r, o, u) {
    Wi(u), r = vs(r, "onChange"), 0 < r.length && (o = new Ot("onChange", "change", null, o, u), n.push({ event: o, listeners: r }));
  }
  var Ri = null, ml = null;
  function Dv(n) {
    Sl(n, 0);
  }
  function ss(n) {
    var r = oi(n);
    if (Or(r)) return n;
  }
  function Dy(n, r) {
    if (n === "change") return r;
  }
  var Lv = !1;
  if (N) {
    var _d;
    if (N) {
      var Cd = "oninput" in document;
      if (!Cd) {
        var Nv = document.createElement("div");
        Nv.setAttribute("oninput", "return;"), Cd = typeof Nv.oninput == "function";
      }
      _d = Cd;
    } else _d = !1;
    Lv = _d && (!document.documentMode || 9 < document.documentMode);
  }
  function Mv() {
    Ri && (Ri.detachEvent("onpropertychange", Av), ml = Ri = null);
  }
  function Av(n) {
    if (n.propertyName === "value" && ss(ml)) {
      var r = [];
      Sd(r, ml, n, qt(n)), ul(Dv, r);
    }
  }
  function Ly(n, r, o) {
    n === "focusin" ? (Mv(), Ri = r, ml = o, Ri.attachEvent("onpropertychange", Av)) : n === "focusout" && Mv();
  }
  function Uv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return ss(ml);
  }
  function Ny(n, r) {
    if (n === "click") return ss(r);
  }
  function jv(n, r) {
    if (n === "input" || n === "change") return ss(r);
  }
  function My(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ii = typeof Object.is == "function" ? Object.is : My;
  function cs(n, r) {
    if (ii(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var o = Object.keys(n), u = Object.keys(r);
    if (o.length !== u.length) return !1;
    for (u = 0; u < o.length; u++) {
      var c = o[u];
      if (!x.call(r, c) || !ii(n[c], r[c])) return !1;
    }
    return !0;
  }
  function zv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Tc(n, r) {
    var o = zv(n);
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
      o = zv(o);
    }
  }
  function Do(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Do(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function fs() {
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
  function bc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function mu(n) {
    var r = fs(), o = n.focusedElem, u = n.selectionRange;
    if (r !== o && o && o.ownerDocument && Do(o.ownerDocument.documentElement, o)) {
      if (u !== null && bc(o)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in o) o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = o.textContent.length, d = Math.min(u.start, c);
          u = u.end === void 0 ? d : Math.min(u.end, c), !n.extend && d > u && (c = u, u = d, d = c), c = Tc(o, d);
          var _ = Tc(
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
  var Ay = N && "documentMode" in document && 11 >= document.documentMode, yu = null, Ed = null, ds = null, Rd = !1;
  function Td(n, r, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Rd || yu == null || yu !== bn(u) || (u = yu, "selectionStart" in u && bc(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), ds && cs(ds, u) || (ds = u, u = vs(Ed, "onSelect"), 0 < u.length && (r = new Ot("onSelect", "select", null, r, o), n.push({ event: r, listeners: u }), r.target = yu)));
  }
  function wc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var yl = { animationend: wc("Animation", "AnimationEnd"), animationiteration: wc("Animation", "AnimationIteration"), animationstart: wc("Animation", "AnimationStart"), transitionend: wc("Transition", "TransitionEnd") }, cr = {}, bd = {};
  N && (bd = document.createElement("div").style, "AnimationEvent" in window || (delete yl.animationend.animation, delete yl.animationiteration.animation, delete yl.animationstart.animation), "TransitionEvent" in window || delete yl.transitionend.transition);
  function xc(n) {
    if (cr[n]) return cr[n];
    if (!yl[n]) return n;
    var r = yl[n], o;
    for (o in r) if (r.hasOwnProperty(o) && o in bd) return cr[n] = r[o];
    return n;
  }
  var Pv = xc("animationend"), Fv = xc("animationiteration"), Vv = xc("animationstart"), Hv = xc("transitionend"), wd = /* @__PURE__ */ new Map(), kc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Na(n, r) {
    wd.set(n, r), T(r, [n]);
  }
  for (var xd = 0; xd < kc.length; xd++) {
    var gl = kc[xd], Uy = gl.toLowerCase(), jy = gl[0].toUpperCase() + gl.slice(1);
    Na(Uy, "on" + jy);
  }
  Na(Pv, "onAnimationEnd"), Na(Fv, "onAnimationIteration"), Na(Vv, "onAnimationStart"), Na("dblclick", "onDoubleClick"), Na("focusin", "onFocus"), Na("focusout", "onBlur"), Na(Hv, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), T("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), T("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), T("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), T("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), T("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), T("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ps = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), kd = new Set("cancel close invalid load scroll toggle".split(" ").concat(ps));
  function Oc(n, r, o) {
    var u = n.type || "unknown-event";
    n.currentTarget = o, Be(u, r, void 0, n), n.currentTarget = null;
  }
  function Sl(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var u = n[o], c = u.event;
      u = u.listeners;
      e: {
        var d = void 0;
        if (r) for (var _ = u.length - 1; 0 <= _; _--) {
          var w = u[_], L = w.instance, Q = w.currentTarget;
          if (w = w.listener, L !== d && c.isPropagationStopped()) break e;
          Oc(c, w, Q), d = L;
        }
        else for (_ = 0; _ < u.length; _++) {
          if (w = u[_], L = w.instance, Q = w.currentTarget, w = w.listener, L !== d && c.isPropagationStopped()) break e;
          Oc(c, w, Q), d = L;
        }
      }
    }
    if (gi) throw n = D, gi = !1, D = null, n;
  }
  function Yt(n, r) {
    var o = r[ys];
    o === void 0 && (o = r[ys] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    o.has(u) || (Iv(r, n, 2, !1), o.add(u));
  }
  function Dc(n, r, o) {
    var u = 0;
    r && (u |= 4), Iv(o, n, u, r);
  }
  var Lc = "_reactListening" + Math.random().toString(36).slice(2);
  function gu(n) {
    if (!n[Lc]) {
      n[Lc] = !0, E.forEach(function(o) {
        o !== "selectionchange" && (kd.has(o) || Dc(o, !1, n), Dc(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Lc] || (r[Lc] = !0, Dc("selectionchange", !1, r));
    }
  }
  function Iv(n, r, o, u) {
    switch (pu(r)) {
      case 1:
        var c = cu;
        break;
      case 4:
        c = fu;
        break;
      default:
        c = ko;
    }
    o = c.bind(null, r, o, n), c = void 0, !Lr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), u ? c !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: c }) : n.addEventListener(r, o, !0) : c !== void 0 ? n.addEventListener(r, o, { passive: c }) : n.addEventListener(r, o, !1);
  }
  function Nc(n, r, o, u, c) {
    var d = u;
    if ((r & 1) === 0 && (r & 2) === 0 && u !== null) e: for (; ; ) {
      if (u === null) return;
      var _ = u.tag;
      if (_ === 3 || _ === 4) {
        var w = u.stateNode.containerInfo;
        if (w === c || w.nodeType === 8 && w.parentNode === c) break;
        if (_ === 4) for (_ = u.return; _ !== null; ) {
          var L = _.tag;
          if ((L === 3 || L === 4) && (L = _.stateNode.containerInfo, L === c || L.nodeType === 8 && L.parentNode === c)) return;
          _ = _.return;
        }
        for (; w !== null; ) {
          if (_ = Cl(w), _ === null) return;
          if (L = _.tag, L === 5 || L === 6) {
            u = d = _;
            continue e;
          }
          w = w.parentNode;
        }
      }
      u = u.return;
    }
    ul(function() {
      var Q = d, he = qt(o), ye = [];
      e: {
        var de = wd.get(n);
        if (de !== void 0) {
          var Pe = Ot, We = n;
          switch (n) {
            case "keypress":
              if (J(o) === 0) break e;
            case "keydown":
            case "keyup":
              Pe = md;
              break;
            case "focusin":
              We = "focus", Pe = hl;
              break;
            case "focusout":
              We = "blur", Pe = hl;
              break;
            case "beforeblur":
            case "afterblur":
              Pe = hl;
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
              Pe = Oo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Pe = Qi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Pe = Rv;
              break;
            case Pv:
            case Fv:
            case Vv:
              Pe = Cc;
              break;
            case Hv:
              Pe = Ki;
              break;
            case "scroll":
              Pe = sn;
              break;
            case "wheel":
              Pe = Xi;
              break;
            case "copy":
            case "cut":
            case "paste":
              Pe = Sv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Pe = Ev;
          }
          var Qe = (r & 4) !== 0, Nn = !Qe && n === "scroll", H = Qe ? de !== null ? de + "Capture" : null : de;
          Qe = [];
          for (var U = Q, $; U !== null; ) {
            $ = U;
            var me = $.stateNode;
            if ($.tag === 5 && me !== null && ($ = me, H !== null && (me = Dr(U, H), me != null && Qe.push(Su(U, me, $)))), Nn) break;
            U = U.return;
          }
          0 < Qe.length && (de = new Pe(de, We, null, o, he), ye.push({ event: de, listeners: Qe }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (de = n === "mouseover" || n === "pointerover", Pe = n === "mouseout" || n === "pointerout", de && o !== ln && (We = o.relatedTarget || o.fromElement) && (Cl(We) || We[Ji])) break e;
          if ((Pe || de) && (de = he.window === he ? he : (de = he.ownerDocument) ? de.defaultView || de.parentWindow : window, Pe ? (We = o.relatedTarget || o.toElement, Pe = Q, We = We ? Cl(We) : null, We !== null && (Nn = _t(We), We !== Nn || We.tag !== 5 && We.tag !== 6) && (We = null)) : (Pe = null, We = Q), Pe !== We)) {
            if (Qe = Oo, me = "onMouseLeave", H = "onMouseEnter", U = "mouse", (n === "pointerout" || n === "pointerover") && (Qe = Ev, me = "onPointerLeave", H = "onPointerEnter", U = "pointer"), Nn = Pe == null ? de : oi(Pe), $ = We == null ? de : oi(We), de = new Qe(me, U + "leave", Pe, o, he), de.target = Nn, de.relatedTarget = $, me = null, Cl(he) === Q && (Qe = new Qe(H, U + "enter", We, o, he), Qe.target = $, Qe.relatedTarget = Nn, me = Qe), Nn = me, Pe && We) t: {
              for (Qe = Pe, H = We, U = 0, $ = Qe; $; $ = Lo($)) U++;
              for ($ = 0, me = H; me; me = Lo(me)) $++;
              for (; 0 < U - $; ) Qe = Lo(Qe), U--;
              for (; 0 < $ - U; ) H = Lo(H), $--;
              for (; U--; ) {
                if (Qe === H || H !== null && Qe === H.alternate) break t;
                Qe = Lo(Qe), H = Lo(H);
              }
              Qe = null;
            }
            else Qe = null;
            Pe !== null && Bv(ye, de, Pe, Qe, !1), We !== null && Nn !== null && Bv(ye, Nn, We, Qe, !0);
          }
        }
        e: {
          if (de = Q ? oi(Q) : window, Pe = de.nodeName && de.nodeName.toLowerCase(), Pe === "select" || Pe === "input" && de.type === "file") var Ye = Dy;
          else if (Ov(de)) if (Lv) Ye = jv;
          else {
            Ye = Uv;
            var ot = Ly;
          }
          else (Pe = de.nodeName) && Pe.toLowerCase() === "input" && (de.type === "checkbox" || de.type === "radio") && (Ye = Ny);
          if (Ye && (Ye = Ye(n, Q))) {
            Sd(ye, Ye, o, he);
            break e;
          }
          ot && ot(n, de, Q), n === "focusout" && (ot = de._wrapperState) && ot.controlled && de.type === "number" && pa(de, "number", de.value);
        }
        switch (ot = Q ? oi(Q) : window, n) {
          case "focusin":
            (Ov(ot) || ot.contentEditable === "true") && (yu = ot, Ed = Q, ds = null);
            break;
          case "focusout":
            ds = Ed = yu = null;
            break;
          case "mousedown":
            Rd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Rd = !1, Td(ye, o, he);
            break;
          case "selectionchange":
            if (Ay) break;
          case "keydown":
          case "keyup":
            Td(ye, o, he);
        }
        var ut;
        if (vu) e: {
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
        else hu ? wv(n, o) && (pt = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (pt = "onCompositionStart");
        pt && (Tv && o.locale !== "ko" && (hu || pt !== "onCompositionStart" ? pt === "onCompositionEnd" && hu && (ut = G()) : (ai = he, S = "value" in ai ? ai.value : ai.textContent, hu = !0)), ot = vs(Q, pt), 0 < ot.length && (pt = new pd(pt, n, null, o, he), ye.push({ event: pt, listeners: ot }), ut ? pt.data = ut : (ut = xv(o), ut !== null && (pt.data = ut)))), (ut = us ? kv(n, o) : ky(n, o)) && (Q = vs(Q, "onBeforeInput"), 0 < Q.length && (he = new pd("onBeforeInput", "beforeinput", null, o, he), ye.push({ event: he, listeners: Q }), he.data = ut));
      }
      Sl(ye, r);
    });
  }
  function Su(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function vs(n, r) {
    for (var o = r + "Capture", u = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Dr(n, o), d != null && u.unshift(Su(n, d, c)), d = Dr(n, r), d != null && u.push(Su(n, d, c))), n = n.return;
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
  function Bv(n, r, o, u, c) {
    for (var d = r._reactName, _ = []; o !== null && o !== u; ) {
      var w = o, L = w.alternate, Q = w.stateNode;
      if (L !== null && L === u) break;
      w.tag === 5 && Q !== null && (w = Q, c ? (L = Dr(o, d), L != null && _.unshift(Su(o, L, w))) : c || (L = Dr(o, d), L != null && _.push(Su(o, L, w)))), o = o.return;
    }
    _.length !== 0 && n.push({ event: r, listeners: _ });
  }
  var $v = /\r\n?/g, zy = /\u0000|\uFFFD/g;
  function Wv(n) {
    return (typeof n == "string" ? n : "" + n).replace($v, `
`).replace(zy, "");
  }
  function Mc(n, r, o) {
    if (r = Wv(r), Wv(n) !== r && o) throw Error(h(425));
  }
  function No() {
  }
  var hs = null, _l = null;
  function Ac(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Uc = typeof setTimeout == "function" ? setTimeout : void 0, Od = typeof clearTimeout == "function" ? clearTimeout : void 0, Yv = typeof Promise == "function" ? Promise : void 0, _u = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yv < "u" ? function(n) {
    return Yv.resolve(null).then(n).catch(jc);
  } : Uc;
  function jc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Cu(n, r) {
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
  function Ti(n) {
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
  var Mo = Math.random().toString(36).slice(2), bi = "__reactFiber$" + Mo, ms = "__reactProps$" + Mo, Ji = "__reactContainer$" + Mo, ys = "__reactEvents$" + Mo, Eu = "__reactListeners$" + Mo, Py = "__reactHandles$" + Mo;
  function Cl(n) {
    var r = n[bi];
    if (r) return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[Ji] || o[bi]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null) for (n = Gv(n); n !== null; ) {
          if (o = n[bi]) return o;
          n = Gv(n);
        }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function et(n) {
    return n = n[bi] || n[Ji], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function oi(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(h(33));
  }
  function Sn(n) {
    return n[ms] || null;
  }
  var Nt = [], Ma = -1;
  function Aa(n) {
    return { current: n };
  }
  function cn(n) {
    0 > Ma || (n.current = Nt[Ma], Nt[Ma] = null, Ma--);
  }
  function Je(n, r) {
    Ma++, Nt[Ma] = n.current, n.current = r;
  }
  var br = {}, Rn = Aa(br), qn = Aa(!1), Jr = br;
  function Zr(n, r) {
    var o = n.type.contextTypes;
    if (!o) return br;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in o) c[d] = r[d];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function zn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Ru() {
    cn(qn), cn(Rn);
  }
  function Qv(n, r, o) {
    if (Rn.current !== br) throw Error(h(168));
    Je(Rn, r), Je(qn, o);
  }
  function gs(n, r, o) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return o;
    u = u.getChildContext();
    for (var c in u) if (!(c in r)) throw Error(h(108, je(n) || "Unknown", c));
    return Ce({}, o, u);
  }
  function tr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || br, Jr = Rn.current, Je(Rn, n), Je(qn, qn.current), !0;
  }
  function zc(n, r, o) {
    var u = n.stateNode;
    if (!u) throw Error(h(169));
    o ? (n = gs(n, r, Jr), u.__reactInternalMemoizedMergedChildContext = n, cn(qn), cn(Rn), Je(Rn, n)) : cn(qn), Je(qn, o);
  }
  var wi = null, Tu = !1, Zi = !1;
  function Pc(n) {
    wi === null ? wi = [n] : wi.push(n);
  }
  function Ao(n) {
    Tu = !0, Pc(n);
  }
  function xi() {
    if (!Zi && wi !== null) {
      Zi = !0;
      var n = 0, r = Ft;
      try {
        var o = wi;
        for (Ft = 1; n < o.length; n++) {
          var u = o[n];
          do
            u = u(!0);
          while (u !== null);
        }
        wi = null, Tu = !1;
      } catch (c) {
        throw wi !== null && (wi = wi.slice(n + 1)), dn(ei, xi), c;
      } finally {
        Ft = r, Zi = !1;
      }
    }
    return null;
  }
  var Uo = [], jo = 0, zo = null, eo = 0, Pn = [], Ua = 0, ya = null, ki = 1, Oi = "";
  function El(n, r) {
    Uo[jo++] = eo, Uo[jo++] = zo, zo = n, eo = r;
  }
  function qv(n, r, o) {
    Pn[Ua++] = ki, Pn[Ua++] = Oi, Pn[Ua++] = ya, ya = n;
    var u = ki;
    n = Oi;
    var c = 32 - Nr(u) - 1;
    u &= ~(1 << c), o += 1;
    var d = 32 - Nr(r) + c;
    if (30 < d) {
      var _ = c - c % 5;
      d = (u & (1 << _) - 1).toString(32), u >>= _, c -= _, ki = 1 << 32 - Nr(r) + c | o << c | u, Oi = d + n;
    } else ki = 1 << d | o << c | u, Oi = n;
  }
  function Fc(n) {
    n.return !== null && (El(n, 1), qv(n, 1, 0));
  }
  function Vc(n) {
    for (; n === zo; ) zo = Uo[--jo], Uo[jo] = null, eo = Uo[--jo], Uo[jo] = null;
    for (; n === ya; ) ya = Pn[--Ua], Pn[Ua] = null, Oi = Pn[--Ua], Pn[Ua] = null, ki = Pn[--Ua], Pn[Ua] = null;
  }
  var ea = null, ta = null, hn = !1, ja = null;
  function Dd(n, r) {
    var o = Ha(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function Kv(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ea = n, ta = Ti(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ea = n, ta = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = ya !== null ? { id: ki, overflow: Oi } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = Ha(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, ea = n, ta = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ld(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Nd(n) {
    if (hn) {
      var r = ta;
      if (r) {
        var o = r;
        if (!Kv(n, r)) {
          if (Ld(n)) throw Error(h(418));
          r = Ti(o.nextSibling);
          var u = ea;
          r && Kv(n, r) ? Dd(u, o) : (n.flags = n.flags & -4097 | 2, hn = !1, ea = n);
        }
      } else {
        if (Ld(n)) throw Error(h(418));
        n.flags = n.flags & -4097 | 2, hn = !1, ea = n;
      }
    }
  }
  function Kn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    ea = n;
  }
  function Hc(n) {
    if (n !== ea) return !1;
    if (!hn) return Kn(n), hn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Ac(n.type, n.memoizedProps)), r && (r = ta)) {
      if (Ld(n)) throw Ss(), Error(h(418));
      for (; r; ) Dd(n, r), r = Ti(r.nextSibling);
    }
    if (Kn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(h(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                ta = Ti(n.nextSibling);
                break e;
              }
              r--;
            } else o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ta = null;
      }
    } else ta = ea ? Ti(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Ss() {
    for (var n = ta; n; ) n = Ti(n.nextSibling);
  }
  function Po() {
    ta = ea = null, hn = !1;
  }
  function to(n) {
    ja === null ? ja = [n] : ja.push(n);
  }
  var Fy = _e.ReactCurrentBatchConfig;
  function Rl(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1) throw Error(h(309));
          var u = o.stateNode;
        }
        if (!u) throw Error(h(147, n));
        var c = u, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(_) {
          var w = c.refs;
          _ === null ? delete w[d] : w[d] = _;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(h(284));
      if (!o._owner) throw Error(h(290, n));
    }
    return n;
  }
  function Ic(n, r) {
    throw n = Object.prototype.toString.call(r), Error(h(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Xv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Tl(n) {
    function r(H, U) {
      if (n) {
        var $ = H.deletions;
        $ === null ? (H.deletions = [U], H.flags |= 16) : $.push(U);
      }
    }
    function o(H, U) {
      if (!n) return null;
      for (; U !== null; ) r(H, U), U = U.sibling;
      return null;
    }
    function u(H, U) {
      for (H = /* @__PURE__ */ new Map(); U !== null; ) U.key !== null ? H.set(U.key, U) : H.set(U.index, U), U = U.sibling;
      return H;
    }
    function c(H, U) {
      return H = Yo(H, U), H.index = 0, H.sibling = null, H;
    }
    function d(H, U, $) {
      return H.index = $, n ? ($ = H.alternate, $ !== null ? ($ = $.index, $ < U ? (H.flags |= 2, U) : $) : (H.flags |= 2, U)) : (H.flags |= 1048576, U);
    }
    function _(H) {
      return n && H.alternate === null && (H.flags |= 2), H;
    }
    function w(H, U, $, me) {
      return U === null || U.tag !== 6 ? (U = sp($, H.mode, me), U.return = H, U) : (U = c(U, $), U.return = H, U);
    }
    function L(H, U, $, me) {
      var Ye = $.type;
      return Ye === Re ? he(H, U, $.props.children, me, $.key) : U !== null && (U.elementType === Ye || typeof Ye == "object" && Ye !== null && Ye.$$typeof === Le && Xv(Ye) === U.type) ? (me = c(U, $.props), me.ref = Rl(H, U, $), me.return = H, me) : (me = qs($.type, $.key, $.props, null, H.mode, me), me.ref = Rl(H, U, $), me.return = H, me);
    }
    function Q(H, U, $, me) {
      return U === null || U.tag !== 4 || U.stateNode.containerInfo !== $.containerInfo || U.stateNode.implementation !== $.implementation ? (U = Ef($, H.mode, me), U.return = H, U) : (U = c(U, $.children || []), U.return = H, U);
    }
    function he(H, U, $, me, Ye) {
      return U === null || U.tag !== 7 ? (U = lo($, H.mode, me, Ye), U.return = H, U) : (U = c(U, $), U.return = H, U);
    }
    function ye(H, U, $) {
      if (typeof U == "string" && U !== "" || typeof U == "number") return U = sp("" + U, H.mode, $), U.return = H, U;
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case ve:
            return $ = qs(U.type, U.key, U.props, null, H.mode, $), $.ref = Rl(H, null, U), $.return = H, $;
          case be:
            return U = Ef(U, H.mode, $), U.return = H, U;
          case Le:
            var me = U._init;
            return ye(H, me(U._payload), $);
        }
        if (Zn(U) || Ae(U)) return U = lo(U, H.mode, $, null), U.return = H, U;
        Ic(H, U);
      }
      return null;
    }
    function de(H, U, $, me) {
      var Ye = U !== null ? U.key : null;
      if (typeof $ == "string" && $ !== "" || typeof $ == "number") return Ye !== null ? null : w(H, U, "" + $, me);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case ve:
            return $.key === Ye ? L(H, U, $, me) : null;
          case be:
            return $.key === Ye ? Q(H, U, $, me) : null;
          case Le:
            return Ye = $._init, de(
              H,
              U,
              Ye($._payload),
              me
            );
        }
        if (Zn($) || Ae($)) return Ye !== null ? null : he(H, U, $, me, null);
        Ic(H, $);
      }
      return null;
    }
    function Pe(H, U, $, me, Ye) {
      if (typeof me == "string" && me !== "" || typeof me == "number") return H = H.get($) || null, w(U, H, "" + me, Ye);
      if (typeof me == "object" && me !== null) {
        switch (me.$$typeof) {
          case ve:
            return H = H.get(me.key === null ? $ : me.key) || null, L(U, H, me, Ye);
          case be:
            return H = H.get(me.key === null ? $ : me.key) || null, Q(U, H, me, Ye);
          case Le:
            var ot = me._init;
            return Pe(H, U, $, ot(me._payload), Ye);
        }
        if (Zn(me) || Ae(me)) return H = H.get($) || null, he(U, H, me, Ye, null);
        Ic(U, me);
      }
      return null;
    }
    function We(H, U, $, me) {
      for (var Ye = null, ot = null, ut = U, pt = U = 0, ar = null; ut !== null && pt < $.length; pt++) {
        ut.index > pt ? (ar = ut, ut = null) : ar = ut.sibling;
        var It = de(H, ut, $[pt], me);
        if (It === null) {
          ut === null && (ut = ar);
          break;
        }
        n && ut && It.alternate === null && r(H, ut), U = d(It, U, pt), ot === null ? Ye = It : ot.sibling = It, ot = It, ut = ar;
      }
      if (pt === $.length) return o(H, ut), hn && El(H, pt), Ye;
      if (ut === null) {
        for (; pt < $.length; pt++) ut = ye(H, $[pt], me), ut !== null && (U = d(ut, U, pt), ot === null ? Ye = ut : ot.sibling = ut, ot = ut);
        return hn && El(H, pt), Ye;
      }
      for (ut = u(H, ut); pt < $.length; pt++) ar = Pe(ut, H, pt, $[pt], me), ar !== null && (n && ar.alternate !== null && ut.delete(ar.key === null ? pt : ar.key), U = d(ar, U, pt), ot === null ? Ye = ar : ot.sibling = ar, ot = ar);
      return n && ut.forEach(function(qo) {
        return r(H, qo);
      }), hn && El(H, pt), Ye;
    }
    function Qe(H, U, $, me) {
      var Ye = Ae($);
      if (typeof Ye != "function") throw Error(h(150));
      if ($ = Ye.call($), $ == null) throw Error(h(151));
      for (var ot = Ye = null, ut = U, pt = U = 0, ar = null, It = $.next(); ut !== null && !It.done; pt++, It = $.next()) {
        ut.index > pt ? (ar = ut, ut = null) : ar = ut.sibling;
        var qo = de(H, ut, It.value, me);
        if (qo === null) {
          ut === null && (ut = ar);
          break;
        }
        n && ut && qo.alternate === null && r(H, ut), U = d(qo, U, pt), ot === null ? Ye = qo : ot.sibling = qo, ot = qo, ut = ar;
      }
      if (It.done) return o(
        H,
        ut
      ), hn && El(H, pt), Ye;
      if (ut === null) {
        for (; !It.done; pt++, It = $.next()) It = ye(H, It.value, me), It !== null && (U = d(It, U, pt), ot === null ? Ye = It : ot.sibling = It, ot = It);
        return hn && El(H, pt), Ye;
      }
      for (ut = u(H, ut); !It.done; pt++, It = $.next()) It = Pe(ut, H, pt, It.value, me), It !== null && (n && It.alternate !== null && ut.delete(It.key === null ? pt : It.key), U = d(It, U, pt), ot === null ? Ye = It : ot.sibling = It, ot = It);
      return n && ut.forEach(function(Mh) {
        return r(H, Mh);
      }), hn && El(H, pt), Ye;
    }
    function Nn(H, U, $, me) {
      if (typeof $ == "object" && $ !== null && $.type === Re && $.key === null && ($ = $.props.children), typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case ve:
            e: {
              for (var Ye = $.key, ot = U; ot !== null; ) {
                if (ot.key === Ye) {
                  if (Ye = $.type, Ye === Re) {
                    if (ot.tag === 7) {
                      o(H, ot.sibling), U = c(ot, $.props.children), U.return = H, H = U;
                      break e;
                    }
                  } else if (ot.elementType === Ye || typeof Ye == "object" && Ye !== null && Ye.$$typeof === Le && Xv(Ye) === ot.type) {
                    o(H, ot.sibling), U = c(ot, $.props), U.ref = Rl(H, ot, $), U.return = H, H = U;
                    break e;
                  }
                  o(H, ot);
                  break;
                } else r(H, ot);
                ot = ot.sibling;
              }
              $.type === Re ? (U = lo($.props.children, H.mode, me, $.key), U.return = H, H = U) : (me = qs($.type, $.key, $.props, null, H.mode, me), me.ref = Rl(H, U, $), me.return = H, H = me);
            }
            return _(H);
          case be:
            e: {
              for (ot = $.key; U !== null; ) {
                if (U.key === ot) if (U.tag === 4 && U.stateNode.containerInfo === $.containerInfo && U.stateNode.implementation === $.implementation) {
                  o(H, U.sibling), U = c(U, $.children || []), U.return = H, H = U;
                  break e;
                } else {
                  o(H, U);
                  break;
                }
                else r(H, U);
                U = U.sibling;
              }
              U = Ef($, H.mode, me), U.return = H, H = U;
            }
            return _(H);
          case Le:
            return ot = $._init, Nn(H, U, ot($._payload), me);
        }
        if (Zn($)) return We(H, U, $, me);
        if (Ae($)) return Qe(H, U, $, me);
        Ic(H, $);
      }
      return typeof $ == "string" && $ !== "" || typeof $ == "number" ? ($ = "" + $, U !== null && U.tag === 6 ? (o(H, U.sibling), U = c(U, $), U.return = H, H = U) : (o(H, U), U = sp($, H.mode, me), U.return = H, H = U), _(H)) : o(H, U);
    }
    return Nn;
  }
  var kn = Tl(!0), Ne = Tl(!1), ga = Aa(null), na = null, bu = null, Md = null;
  function Ad() {
    Md = bu = na = null;
  }
  function Ud(n) {
    var r = ga.current;
    cn(ga), n._currentValue = r;
  }
  function jd(n, r, o) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === o) break;
      n = n.return;
    }
  }
  function _n(n, r) {
    na = n, Md = bu = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (Vn = !0), n.firstContext = null);
  }
  function za(n) {
    var r = n._currentValue;
    if (Md !== n) if (n = { context: n, memoizedValue: r, next: null }, bu === null) {
      if (na === null) throw Error(h(308));
      bu = n, na.dependencies = { lanes: 0, firstContext: n };
    } else bu = bu.next = n;
    return r;
  }
  var bl = null;
  function zd(n) {
    bl === null ? bl = [n] : bl.push(n);
  }
  function Pd(n, r, o, u) {
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
  function Fd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Jv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function no(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Fo(n, r, o) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (Mt & 2) !== 0) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, Sa(n, o);
    }
    return c = u.interleaved, c === null ? (r.next = r, zd(u)) : (r.next = c.next, c.next = r), u.interleaved = r, Sa(n, o);
  }
  function Bc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Gi(n, o);
    }
  }
  function Zv(n, r) {
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
  function _s(n, r, o, u) {
    var c = n.updateQueue;
    _a = !1;
    var d = c.firstBaseUpdate, _ = c.lastBaseUpdate, w = c.shared.pending;
    if (w !== null) {
      c.shared.pending = null;
      var L = w, Q = L.next;
      L.next = null, _ === null ? d = Q : _.next = Q, _ = L;
      var he = n.alternate;
      he !== null && (he = he.updateQueue, w = he.lastBaseUpdate, w !== _ && (w === null ? he.firstBaseUpdate = Q : w.next = Q, he.lastBaseUpdate = L));
    }
    if (d !== null) {
      var ye = c.baseState;
      _ = 0, he = Q = L = null, w = d;
      do {
        var de = w.lane, Pe = w.eventTime;
        if ((u & de) === de) {
          he !== null && (he = he.next = {
            eventTime: Pe,
            lane: 0,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null
          });
          e: {
            var We = n, Qe = w;
            switch (de = r, Pe = o, Qe.tag) {
              case 1:
                if (We = Qe.payload, typeof We == "function") {
                  ye = We.call(Pe, ye, de);
                  break e;
                }
                ye = We;
                break e;
              case 3:
                We.flags = We.flags & -65537 | 128;
              case 0:
                if (We = Qe.payload, de = typeof We == "function" ? We.call(Pe, ye, de) : We, de == null) break e;
                ye = Ce({}, ye, de);
                break e;
              case 2:
                _a = !0;
            }
          }
          w.callback !== null && w.lane !== 0 && (n.flags |= 64, de = c.effects, de === null ? c.effects = [w] : de.push(w));
        } else Pe = { eventTime: Pe, lane: de, tag: w.tag, payload: w.payload, callback: w.callback, next: null }, he === null ? (Q = he = Pe, L = ye) : he = he.next = Pe, _ |= de;
        if (w = w.next, w === null) {
          if (w = c.shared.pending, w === null) break;
          de = w, w = de.next, de.next = null, c.lastBaseUpdate = de, c.shared.pending = null;
        }
      } while (!0);
      if (he === null && (L = ye), c.baseState = L, c.firstBaseUpdate = Q, c.lastBaseUpdate = he, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          _ |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Ai |= _, n.lanes = _, n.memoizedState = ye;
    }
  }
  function Vd(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], c = u.callback;
      if (c !== null) {
        if (u.callback = null, u = o, typeof c != "function") throw Error(h(191, c));
        c.call(u);
      }
    }
  }
  var Cs = {}, Di = Aa(Cs), Es = Aa(Cs), Rs = Aa(Cs);
  function wl(n) {
    if (n === Cs) throw Error(h(174));
    return n;
  }
  function Hd(n, r) {
    switch (Je(Rs, r), Je(Es, n), Je(Di, Cs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : va(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = va(r, n);
    }
    cn(Di), Je(Di, r);
  }
  function xl() {
    cn(Di), cn(Es), cn(Rs);
  }
  function eh(n) {
    wl(Rs.current);
    var r = wl(Di.current), o = va(r, n.type);
    r !== o && (Je(Es, n), Je(Di, o));
  }
  function $c(n) {
    Es.current === n && (cn(Di), cn(Es));
  }
  var Cn = Aa(0);
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
  var Ts = [];
  function tt() {
    for (var n = 0; n < Ts.length; n++) Ts[n]._workInProgressVersionPrimary = null;
    Ts.length = 0;
  }
  var xt = _e.ReactCurrentDispatcher, Vt = _e.ReactCurrentBatchConfig, en = 0, Ht = null, Fn = null, nr = null, Yc = !1, bs = !1, kl = 0, ce = 0;
  function Pt() {
    throw Error(h(321));
  }
  function ct(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++) if (!ii(n[o], r[o])) return !1;
    return !0;
  }
  function Vo(n, r, o, u, c, d) {
    if (en = d, Ht = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, xt.current = n === null || n.memoizedState === null ? uf : Ls, n = o(u, c), bs) {
      d = 0;
      do {
        if (bs = !1, kl = 0, 25 <= d) throw Error(h(301));
        d += 1, nr = Fn = null, r.updateQueue = null, xt.current = sf, n = o(u, c);
      } while (bs);
    }
    if (xt.current = Ml, r = Fn !== null && Fn.next !== null, en = 0, nr = Fn = Ht = null, Yc = !1, r) throw Error(h(300));
    return n;
  }
  function li() {
    var n = kl !== 0;
    return kl = 0, n;
  }
  function wr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return nr === null ? Ht.memoizedState = nr = n : nr = nr.next = n, nr;
  }
  function On() {
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
  function ro(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ho(n) {
    var r = On(), o = r.queue;
    if (o === null) throw Error(h(311));
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
      var w = _ = null, L = null, Q = d;
      do {
        var he = Q.lane;
        if ((en & he) === he) L !== null && (L = L.next = { lane: 0, action: Q.action, hasEagerState: Q.hasEagerState, eagerState: Q.eagerState, next: null }), u = Q.hasEagerState ? Q.eagerState : n(u, Q.action);
        else {
          var ye = {
            lane: he,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null
          };
          L === null ? (w = L = ye, _ = u) : L = L.next = ye, Ht.lanes |= he, Ai |= he;
        }
        Q = Q.next;
      } while (Q !== null && Q !== d);
      L === null ? _ = u : L.next = w, ii(u, r.memoizedState) || (Vn = !0), r.memoizedState = u, r.baseState = _, r.baseQueue = L, o.lastRenderedState = u;
    }
    if (n = o.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Ht.lanes |= d, Ai |= d, c = c.next;
      while (c !== n);
    } else c === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function Ol(n) {
    var r = On(), o = r.queue;
    if (o === null) throw Error(h(311));
    o.lastRenderedReducer = n;
    var u = o.dispatch, c = o.pending, d = r.memoizedState;
    if (c !== null) {
      o.pending = null;
      var _ = c = c.next;
      do
        d = n(d, _.action), _ = _.next;
      while (_ !== c);
      ii(d, r.memoizedState) || (Vn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), o.lastRenderedState = d;
    }
    return [d, u];
  }
  function Gc() {
  }
  function Qc(n, r) {
    var o = Ht, u = On(), c = r(), d = !ii(u.memoizedState, c);
    if (d && (u.memoizedState = c, Vn = !0), u = u.queue, ws(Xc.bind(null, o, u, n), [n]), u.getSnapshot !== r || d || nr !== null && nr.memoizedState.tag & 1) {
      if (o.flags |= 2048, Dl(9, Kc.bind(null, o, u, c, r), void 0, null), Xn === null) throw Error(h(349));
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
    r !== null && Pr(r, n, 1, -1);
  }
  function ef(n) {
    var r = wr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ro, lastRenderedState: n }, r.queue = n, n = n.dispatch = Nl.bind(null, Ht, n), [r.memoizedState, n];
  }
  function Dl(n, r, o, u) {
    return n = { tag: n, create: r, destroy: o, deps: u, next: null }, r = Ht.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ht.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (u = o.next, o.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function tf() {
    return On().memoizedState;
  }
  function wu(n, r, o, u) {
    var c = wr();
    Ht.flags |= n, c.memoizedState = Dl(1 | r, o, void 0, u === void 0 ? null : u);
  }
  function xu(n, r, o, u) {
    var c = On();
    u = u === void 0 ? null : u;
    var d = void 0;
    if (Fn !== null) {
      var _ = Fn.memoizedState;
      if (d = _.destroy, u !== null && ct(u, _.deps)) {
        c.memoizedState = Dl(r, o, d, u);
        return;
      }
    }
    Ht.flags |= n, c.memoizedState = Dl(1 | r, o, d, u);
  }
  function nf(n, r) {
    return wu(8390656, 8, n, r);
  }
  function ws(n, r) {
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
  function ks() {
  }
  function of(n, r) {
    var o = On();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && ct(r, u[1]) ? u[0] : (o.memoizedState = [n, r], n);
  }
  function lf(n, r) {
    var o = On();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && ct(r, u[1]) ? u[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function Id(n, r, o) {
    return (en & 21) === 0 ? (n.baseState && (n.baseState = !1, Vn = !0), n.memoizedState = o) : (ii(o, r) || (o = ou(), Ht.lanes |= o, Ai |= o, n.baseState = !0), r);
  }
  function Os(n, r) {
    var o = Ft;
    Ft = o !== 0 && 4 > o ? o : 4, n(!0);
    var u = Vt.transition;
    Vt.transition = {};
    try {
      n(!1), r();
    } finally {
      Ft = o, Vt.transition = u;
    }
  }
  function Bd() {
    return On().memoizedState;
  }
  function Ds(n, r, o) {
    var u = Ui(n);
    if (o = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null }, ra(n)) th(r, o);
    else if (o = Pd(n, r, o, u), o !== null) {
      var c = Bn();
      Pr(o, n, u, c), an(o, r, u);
    }
  }
  function Nl(n, r, o) {
    var u = Ui(n), c = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (ra(n)) th(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var _ = r.lastRenderedState, w = d(_, o);
        if (c.hasEagerState = !0, c.eagerState = w, ii(w, _)) {
          var L = r.interleaved;
          L === null ? (c.next = c, zd(r)) : (c.next = L.next, L.next = c), r.interleaved = c;
          return;
        }
      } catch {
      }
      o = Pd(n, r, c, u), o !== null && (c = Bn(), Pr(o, n, u, c), an(o, r, u));
    }
  }
  function ra(n) {
    var r = n.alternate;
    return n === Ht || r !== null && r === Ht;
  }
  function th(n, r) {
    bs = Yc = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function an(n, r, o) {
    if ((o & 4194240) !== 0) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Gi(n, o);
    }
  }
  var Ml = { readContext: za, useCallback: Pt, useContext: Pt, useEffect: Pt, useImperativeHandle: Pt, useInsertionEffect: Pt, useLayoutEffect: Pt, useMemo: Pt, useReducer: Pt, useRef: Pt, useState: Pt, useDebugValue: Pt, useDeferredValue: Pt, useTransition: Pt, useMutableSource: Pt, useSyncExternalStore: Pt, useId: Pt, unstable_isNewReconciler: !1 }, uf = { readContext: za, useCallback: function(n, r) {
    return wr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: za, useEffect: nf, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, wu(
      4194308,
      4,
      Ll.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return wu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return wu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = wr();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var u = wr();
    return r = o !== void 0 ? o(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = Ds.bind(null, Ht, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = wr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: ef, useDebugValue: ks, useDeferredValue: function(n) {
    return wr().memoizedState = n;
  }, useTransition: function() {
    var n = ef(!1), r = n[0];
    return n = Os.bind(null, n[1]), wr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var u = Ht, c = wr();
    if (hn) {
      if (o === void 0) throw Error(h(407));
      o = o();
    } else {
      if (o = r(), Xn === null) throw Error(h(349));
      (en & 30) !== 0 || qc(u, r, o);
    }
    c.memoizedState = o;
    var d = { value: o, getSnapshot: r };
    return c.queue = d, nf(Xc.bind(
      null,
      u,
      d,
      n
    ), [n]), u.flags |= 2048, Dl(9, Kc.bind(null, u, d, o, r), void 0, null), o;
  }, useId: function() {
    var n = wr(), r = Xn.identifierPrefix;
    if (hn) {
      var o = Oi, u = ki;
      o = (u & ~(1 << 32 - Nr(u) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = kl++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else o = ce++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Ls = {
    readContext: za,
    useCallback: of,
    useContext: za,
    useEffect: ws,
    useImperativeHandle: af,
    useInsertionEffect: rf,
    useLayoutEffect: xs,
    useMemo: lf,
    useReducer: Ho,
    useRef: tf,
    useState: function() {
      return Ho(ro);
    },
    useDebugValue: ks,
    useDeferredValue: function(n) {
      var r = On();
      return Id(r, Fn.memoizedState, n);
    },
    useTransition: function() {
      var n = Ho(ro)[0], r = On().memoizedState;
      return [n, r];
    },
    useMutableSource: Gc,
    useSyncExternalStore: Qc,
    useId: Bd,
    unstable_isNewReconciler: !1
  }, sf = { readContext: za, useCallback: of, useContext: za, useEffect: ws, useImperativeHandle: af, useInsertionEffect: rf, useLayoutEffect: xs, useMemo: lf, useReducer: Ol, useRef: tf, useState: function() {
    return Ol(ro);
  }, useDebugValue: ks, useDeferredValue: function(n) {
    var r = On();
    return Fn === null ? r.memoizedState = n : Id(r, Fn.memoizedState, n);
  }, useTransition: function() {
    var n = Ol(ro)[0], r = On().memoizedState;
    return [n, r];
  }, useMutableSource: Gc, useSyncExternalStore: Qc, useId: Bd, unstable_isNewReconciler: !1 };
  function ui(n, r) {
    if (n && n.defaultProps) {
      r = Ce({}, r), n = n.defaultProps;
      for (var o in n) r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  function $d(n, r, o, u) {
    r = n.memoizedState, o = o(u, r), o = o == null ? r : Ce({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var cf = { isMounted: function(n) {
    return (n = n._reactInternals) ? _t(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var u = Bn(), c = Ui(n), d = no(u, c);
    d.payload = r, o != null && (d.callback = o), r = Fo(n, d, c), r !== null && (Pr(r, n, c, u), Bc(r, n, c));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var u = Bn(), c = Ui(n), d = no(u, c);
    d.tag = 1, d.payload = r, o != null && (d.callback = o), r = Fo(n, d, c), r !== null && (Pr(r, n, c, u), Bc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = Bn(), u = Ui(n), c = no(o, u);
    c.tag = 2, r != null && (c.callback = r), r = Fo(n, c, u), r !== null && (Pr(r, n, u, o), Bc(r, n, u));
  } };
  function nh(n, r, o, u, c, d, _) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, d, _) : r.prototype && r.prototype.isPureReactComponent ? !cs(o, u) || !cs(c, d) : !0;
  }
  function ff(n, r, o) {
    var u = !1, c = br, d = r.contextType;
    return typeof d == "object" && d !== null ? d = za(d) : (c = zn(r) ? Jr : Rn.current, u = r.contextTypes, d = (u = u != null) ? Zr(n, c) : br), r = new r(o, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = cf, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function rh(n, r, o, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, u), r.state !== n && cf.enqueueReplaceState(r, r.state, null);
  }
  function Ns(n, r, o, u) {
    var c = n.stateNode;
    c.props = o, c.state = n.memoizedState, c.refs = {}, Fd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = za(d) : (d = zn(r) ? Jr : Rn.current, c.context = Zr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && ($d(n, r, d, o), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && cf.enqueueReplaceState(c, c.state, null), _s(n, o, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Al(n, r) {
    try {
      var o = "", u = r;
      do
        o += mt(u), u = u.return;
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
  function ah(n, r, o) {
    o = no(-1, o), o.tag = 3, o.payload = { element: null };
    var u = r.value;
    return o.callback = function() {
      Mu || (Mu = !0, zl = u), Yd(n, r);
    }, o;
  }
  function Gd(n, r, o) {
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
  function Qd(n, r, o) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new df();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else c = u.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(o) || (c.add(o), n = Yy.bind(null, n, r, o), r.then(n, n));
  }
  function ih(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Io(n, r, o, u, c) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = no(-1, 1), r.tag = 2, Fo(o, r, 1))), o.lanes |= 1), n) : (n.flags |= 65536, n.lanes = c, n);
  }
  var Ms = _e.ReactCurrentOwner, Vn = !1;
  function fr(n, r, o, u) {
    r.child = n === null ? Ne(r, null, o, u) : kn(r, n.child, o, u);
  }
  function aa(n, r, o, u, c) {
    o = o.render;
    var d = r.ref;
    return _n(r, c), u = Vo(n, r, o, u, d, c), o = li(), n !== null && !Vn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Fa(n, r, c)) : (hn && o && Fc(r), r.flags |= 1, fr(n, r, u, c), r.child);
  }
  function Ul(n, r, o, u, c) {
    if (n === null) {
      var d = o.type;
      return typeof d == "function" && !up(d) && d.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = d, Et(n, r, d, u, c)) : (n = qs(o.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, (n.lanes & c) === 0) {
      var _ = d.memoizedProps;
      if (o = o.compare, o = o !== null ? o : cs, o(_, u) && n.ref === r.ref) return Fa(n, r, c);
    }
    return r.flags |= 1, n = Yo(d, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Et(n, r, o, u, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (cs(d, u) && n.ref === r.ref) if (Vn = !1, r.pendingProps = u = d, (n.lanes & c) !== 0) (n.flags & 131072) !== 0 && (Vn = !0);
      else return r.lanes = n.lanes, Fa(n, r, c);
    }
    return oh(n, r, o, u, c);
  }
  function As(n, r, o) {
    var u = r.pendingProps, c = u.children, d = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Je(Du, Ca), Ca |= o;
    else {
      if ((o & 1073741824) === 0) return n = d !== null ? d.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Je(Du, Ca), Ca |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = d !== null ? d.baseLanes : o, Je(Du, Ca), Ca |= u;
    }
    else d !== null ? (u = d.baseLanes | o, r.memoizedState = null) : u = o, Je(Du, Ca), Ca |= u;
    return fr(n, r, c, o), r.child;
  }
  function qd(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function oh(n, r, o, u, c) {
    var d = zn(o) ? Jr : Rn.current;
    return d = Zr(r, d), _n(r, c), o = Vo(n, r, o, u, d, c), u = li(), n !== null && !Vn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Fa(n, r, c)) : (hn && u && Fc(r), r.flags |= 1, fr(n, r, o, c), r.child);
  }
  function lh(n, r, o, u, c) {
    if (zn(o)) {
      var d = !0;
      tr(r);
    } else d = !1;
    if (_n(r, c), r.stateNode === null) Pa(n, r), ff(r, o, u), Ns(r, o, u, c), u = !0;
    else if (n === null) {
      var _ = r.stateNode, w = r.memoizedProps;
      _.props = w;
      var L = _.context, Q = o.contextType;
      typeof Q == "object" && Q !== null ? Q = za(Q) : (Q = zn(o) ? Jr : Rn.current, Q = Zr(r, Q));
      var he = o.getDerivedStateFromProps, ye = typeof he == "function" || typeof _.getSnapshotBeforeUpdate == "function";
      ye || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (w !== u || L !== Q) && rh(r, _, u, Q), _a = !1;
      var de = r.memoizedState;
      _.state = de, _s(r, u, _, c), L = r.memoizedState, w !== u || de !== L || qn.current || _a ? (typeof he == "function" && ($d(r, o, he, u), L = r.memoizedState), (w = _a || nh(r, o, w, u, de, L, Q)) ? (ye || typeof _.UNSAFE_componentWillMount != "function" && typeof _.componentWillMount != "function" || (typeof _.componentWillMount == "function" && _.componentWillMount(), typeof _.UNSAFE_componentWillMount == "function" && _.UNSAFE_componentWillMount()), typeof _.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = L), _.props = u, _.state = L, _.context = Q, u = w) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      _ = r.stateNode, Jv(n, r), w = r.memoizedProps, Q = r.type === r.elementType ? w : ui(r.type, w), _.props = Q, ye = r.pendingProps, de = _.context, L = o.contextType, typeof L == "object" && L !== null ? L = za(L) : (L = zn(o) ? Jr : Rn.current, L = Zr(r, L));
      var Pe = o.getDerivedStateFromProps;
      (he = typeof Pe == "function" || typeof _.getSnapshotBeforeUpdate == "function") || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (w !== ye || de !== L) && rh(r, _, u, L), _a = !1, de = r.memoizedState, _.state = de, _s(r, u, _, c);
      var We = r.memoizedState;
      w !== ye || de !== We || qn.current || _a ? (typeof Pe == "function" && ($d(r, o, Pe, u), We = r.memoizedState), (Q = _a || nh(r, o, Q, u, de, We, L) || !1) ? (he || typeof _.UNSAFE_componentWillUpdate != "function" && typeof _.componentWillUpdate != "function" || (typeof _.componentWillUpdate == "function" && _.componentWillUpdate(u, We, L), typeof _.UNSAFE_componentWillUpdate == "function" && _.UNSAFE_componentWillUpdate(u, We, L)), typeof _.componentDidUpdate == "function" && (r.flags |= 4), typeof _.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof _.componentDidUpdate != "function" || w === n.memoizedProps && de === n.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && de === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = We), _.props = u, _.state = We, _.context = L, u = Q) : (typeof _.componentDidUpdate != "function" || w === n.memoizedProps && de === n.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && de === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return Us(n, r, o, u, d, c);
  }
  function Us(n, r, o, u, c, d) {
    qd(n, r);
    var _ = (r.flags & 128) !== 0;
    if (!u && !_) return c && zc(r, o, !1), Fa(n, r, d);
    u = r.stateNode, Ms.current = r;
    var w = _ && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && _ ? (r.child = kn(r, n.child, null, d), r.child = kn(r, null, w, d)) : fr(n, r, w, d), r.memoizedState = u.state, c && zc(r, o, !0), r.child;
  }
  function ku(n) {
    var r = n.stateNode;
    r.pendingContext ? Qv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Qv(n, r.context, !1), Hd(n, r.containerInfo);
  }
  function uh(n, r, o, u, c) {
    return Po(), to(c), r.flags |= 256, fr(n, r, o, u), r.child;
  }
  var pf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Kd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function vf(n, r, o) {
    var u = r.pendingProps, c = Cn.current, d = !1, _ = (r.flags & 128) !== 0, w;
    if ((w = _) || (w = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), w ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Je(Cn, c & 1), n === null)
      return Nd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (_ = u.children, n = u.fallback, d ? (u = r.mode, d = r.child, _ = { mode: "hidden", children: _ }, (u & 1) === 0 && d !== null ? (d.childLanes = 0, d.pendingProps = _) : d = Go(_, u, 0, null), n = lo(n, u, o, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Kd(o), r.memoizedState = pf, n) : Xd(r, _));
    if (c = n.memoizedState, c !== null && (w = c.dehydrated, w !== null)) return sh(n, r, _, u, w, c, o);
    if (d) {
      d = u.fallback, _ = r.mode, c = n.child, w = c.sibling;
      var L = { mode: "hidden", children: u.children };
      return (_ & 1) === 0 && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = L, r.deletions = null) : (u = Yo(c, L), u.subtreeFlags = c.subtreeFlags & 14680064), w !== null ? d = Yo(w, d) : (d = lo(d, _, o, null), d.flags |= 2), d.return = r, u.return = r, u.sibling = d, r.child = u, u = d, d = r.child, _ = n.child.memoizedState, _ = _ === null ? Kd(o) : { baseLanes: _.baseLanes | o, cachePool: null, transitions: _.transitions }, d.memoizedState = _, d.childLanes = n.childLanes & ~o, r.memoizedState = pf, u;
    }
    return d = n.child, n = d.sibling, u = Yo(d, { mode: "visible", children: u.children }), (r.mode & 1) === 0 && (u.lanes = o), u.return = r, u.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function Xd(n, r) {
    return r = Go({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function js(n, r, o, u) {
    return u !== null && to(u), kn(r, n.child, null, o), n = Xd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function sh(n, r, o, u, c, d, _) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, u = Wd(Error(h(422))), js(n, r, _, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = u.fallback, c = r.mode, u = Go({ mode: "visible", children: u.children }, c, 0, null), d = lo(d, c, _, null), d.flags |= 2, u.return = r, d.return = r, u.sibling = d, r.child = u, (r.mode & 1) !== 0 && kn(r, n.child, null, _), r.child.memoizedState = Kd(_), r.memoizedState = pf, d);
    if ((r.mode & 1) === 0) return js(n, r, _, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u) var w = u.dgst;
      return u = w, d = Error(h(419)), u = Wd(d, u, void 0), js(n, r, _, u);
    }
    if (w = (_ & n.childLanes) !== 0, Vn || w) {
      if (u = Xn, u !== null) {
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
        c = (c & (u.suspendedLanes | _)) !== 0 ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Sa(n, c), Pr(u, n, c, -1));
      }
      return lp(), u = Wd(Error(h(421))), js(n, r, _, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Gy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ta = Ti(c.nextSibling), ea = r, hn = !0, ja = null, n !== null && (Pn[Ua++] = ki, Pn[Ua++] = Oi, Pn[Ua++] = ya, ki = n.id, Oi = n.overflow, ya = r), r = Xd(r, u.children), r.flags |= 4096, r);
  }
  function Jd(n, r, o) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), jd(n.return, r, o);
  }
  function Ur(n, r, o, u, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: o, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = u, d.tail = o, d.tailMode = c);
  }
  function Li(n, r, o) {
    var u = r.pendingProps, c = u.revealOrder, d = u.tail;
    if (fr(n, r, u.children, o), u = Cn.current, (u & 2) !== 0) u = u & 1 | 2, r.flags |= 128;
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
    if (Je(Cn, u), (r.mode & 1) === 0) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (o = r.child, c = null; o !== null; ) n = o.alternate, n !== null && Wc(n) === null && (c = o), o = o.sibling;
        o = c, o === null ? (c = r.child, r.child = null) : (c = o.sibling, o.sibling = null), Ur(r, !1, c, o, d);
        break;
      case "backwards":
        for (o = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Wc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = o, o = c, c = n;
        }
        Ur(r, !0, o, null, d);
        break;
      case "together":
        Ur(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Pa(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Fa(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), Ai |= r.lanes, (o & r.childLanes) === 0) return null;
    if (n !== null && r.child !== n.child) throw Error(h(153));
    if (r.child !== null) {
      for (n = r.child, o = Yo(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; ) n = n.sibling, o = o.sibling = Yo(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function zs(n, r, o) {
    switch (r.tag) {
      case 3:
        ku(r), Po();
        break;
      case 5:
        eh(r);
        break;
      case 1:
        zn(r.type) && tr(r);
        break;
      case 4:
        Hd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, c = r.memoizedProps.value;
        Je(ga, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (Je(Cn, Cn.current & 1), r.flags |= 128, null) : (o & r.child.childLanes) !== 0 ? vf(n, r, o) : (Je(Cn, Cn.current & 1), n = Fa(n, r, o), n !== null ? n.sibling : null);
        Je(Cn, Cn.current & 1);
        break;
      case 19:
        if (u = (o & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (u) return Li(n, r, o);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Je(Cn, Cn.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, As(n, r, o);
    }
    return Fa(n, r, o);
  }
  var Va, Hn, ch, fh;
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
  }, Hn = function() {
  }, ch = function(n, r, o, u) {
    var c = n.memoizedProps;
    if (c !== u) {
      n = r.stateNode, wl(Di.current);
      var d = null;
      switch (o) {
        case "input":
          c = or(n, c), u = or(n, u), d = [];
          break;
        case "select":
          c = Ce({}, c, { value: void 0 }), u = Ce({}, u, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Gn(n, c), u = Gn(n, u), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = No);
      }
      fn(o, u);
      var _;
      o = null;
      for (Q in c) if (!u.hasOwnProperty(Q) && c.hasOwnProperty(Q) && c[Q] != null) if (Q === "style") {
        var w = c[Q];
        for (_ in w) w.hasOwnProperty(_) && (o || (o = {}), o[_] = "");
      } else Q !== "dangerouslySetInnerHTML" && Q !== "children" && Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && Q !== "autoFocus" && (k.hasOwnProperty(Q) ? d || (d = []) : (d = d || []).push(Q, null));
      for (Q in u) {
        var L = u[Q];
        if (w = c?.[Q], u.hasOwnProperty(Q) && L !== w && (L != null || w != null)) if (Q === "style") if (w) {
          for (_ in w) !w.hasOwnProperty(_) || L && L.hasOwnProperty(_) || (o || (o = {}), o[_] = "");
          for (_ in L) L.hasOwnProperty(_) && w[_] !== L[_] && (o || (o = {}), o[_] = L[_]);
        } else o || (d || (d = []), d.push(
          Q,
          o
        )), o = L;
        else Q === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, w = w ? w.__html : void 0, L != null && w !== L && (d = d || []).push(Q, L)) : Q === "children" ? typeof L != "string" && typeof L != "number" || (d = d || []).push(Q, "" + L) : Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && (k.hasOwnProperty(Q) ? (L != null && Q === "onScroll" && Yt("scroll", n), d || w === L || (d = [])) : (d = d || []).push(Q, L));
      }
      o && (d = d || []).push("style", o);
      var Q = d;
      (r.updateQueue = Q) && (r.flags |= 4);
    }
  }, fh = function(n, r, o, u) {
    o !== u && (r.flags |= 4);
  };
  function Ps(n, r) {
    if (!hn) switch (n.tailMode) {
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
  function rr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, u = 0;
    if (r) for (var c = n.child; c !== null; ) o |= c.lanes | c.childLanes, u |= c.subtreeFlags & 14680064, u |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) o |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= u, n.childLanes = o, r;
  }
  function dh(n, r, o) {
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
        return rr(r), null;
      case 1:
        return zn(r.type) && Ru(), rr(r), null;
      case 3:
        return u = r.stateNode, xl(), cn(qn), cn(Rn), tt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Hc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, ja !== null && (Pl(ja), ja = null))), Hn(n, r), rr(r), null;
      case 5:
        $c(r);
        var c = wl(Rs.current);
        if (o = r.type, n !== null && r.stateNode != null) ch(n, r, o, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(h(166));
            return rr(r), null;
          }
          if (n = wl(Di.current), Hc(r)) {
            u = r.stateNode, o = r.type;
            var d = r.memoizedProps;
            switch (u[bi] = r, u[ms] = d, n = (r.mode & 1) !== 0, o) {
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
                for (c = 0; c < ps.length; c++) Yt(ps[c], u);
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
                Wn(u, d), Yt("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!d.multiple }, Yt("invalid", u);
                break;
              case "textarea":
                Er(u, d), Yt("invalid", u);
            }
            fn(o, d), c = null;
            for (var _ in d) if (d.hasOwnProperty(_)) {
              var w = d[_];
              _ === "children" ? typeof w == "string" ? u.textContent !== w && (d.suppressHydrationWarning !== !0 && Mc(u.textContent, w, n), c = ["children", w]) : typeof w == "number" && u.textContent !== "" + w && (d.suppressHydrationWarning !== !0 && Mc(
                u.textContent,
                w,
                n
              ), c = ["children", "" + w]) : k.hasOwnProperty(_) && w != null && _ === "onScroll" && Yt("scroll", u);
            }
            switch (o) {
              case "input":
                An(u), vi(u, d, !0);
                break;
              case "textarea":
                An(u), Un(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (u.onclick = No);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            _ = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Rr(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = _.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = _.createElement(o, { is: u.is }) : (n = _.createElement(o), o === "select" && (_ = n, u.multiple ? _.multiple = !0 : u.size && (_.size = u.size))) : n = _.createElementNS(n, o), n[bi] = r, n[ms] = u, Va(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (_ = er(o, u), o) {
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
                  for (c = 0; c < ps.length; c++) Yt(ps[c], n);
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
                  Wn(n, u), c = or(n, u), Yt("invalid", n);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = Ce({}, u, { value: void 0 }), Yt("invalid", n);
                  break;
                case "textarea":
                  Er(n, u), c = Gn(n, u), Yt("invalid", n);
                  break;
                default:
                  c = u;
              }
              fn(o, c), w = c;
              for (d in w) if (w.hasOwnProperty(d)) {
                var L = w[d];
                d === "style" ? on(n, L) : d === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, L != null && hi(n, L)) : d === "children" ? typeof L == "string" ? (o !== "textarea" || L !== "") && we(n, L) : typeof L == "number" && we(n, "" + L) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (k.hasOwnProperty(d) ? L != null && d === "onScroll" && Yt("scroll", n) : L != null && pe(n, d, L, _));
              }
              switch (o) {
                case "input":
                  An(n), vi(n, u, !1);
                  break;
                case "textarea":
                  An(n), Un(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + st(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, d = u.value, d != null ? wn(n, !!u.multiple, d, !1) : u.defaultValue != null && wn(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = No);
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
        return rr(r), null;
      case 6:
        if (n && r.stateNode != null) fh(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(h(166));
          if (o = wl(Rs.current), wl(Di.current), Hc(r)) {
            if (u = r.stateNode, o = r.memoizedProps, u[bi] = r, (d = u.nodeValue !== o) && (n = ea, n !== null)) switch (n.tag) {
              case 3:
                Mc(u.nodeValue, o, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Mc(u.nodeValue, o, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), u[bi] = r, r.stateNode = u;
        }
        return rr(r), null;
      case 13:
        if (cn(Cn), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (hn && ta !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) Ss(), Po(), r.flags |= 98560, d = !1;
          else if (d = Hc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(h(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(h(317));
              d[bi] = r;
            } else Po(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            rr(r), d = !1;
          } else ja !== null && (Pl(ja), ja = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = o, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (Cn.current & 1) !== 0 ? Ln === 0 && (Ln = 3) : lp())), r.updateQueue !== null && (r.flags |= 4), rr(r), null);
      case 4:
        return xl(), Hn(n, r), n === null && gu(r.stateNode.containerInfo), rr(r), null;
      case 10:
        return Ud(r.type._context), rr(r), null;
      case 17:
        return zn(r.type) && Ru(), rr(r), null;
      case 19:
        if (cn(Cn), d = r.memoizedState, d === null) return rr(r), null;
        if (u = (r.flags & 128) !== 0, _ = d.rendering, _ === null) if (u) Ps(d, !1);
        else {
          if (Ln !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (_ = Wc(n), _ !== null) {
              for (r.flags |= 128, Ps(d, !1), u = _.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = o, o = r.child; o !== null; ) d = o, n = u, d.flags &= 14680066, _ = d.alternate, _ === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = _.childLanes, d.lanes = _.lanes, d.child = _.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = _.memoizedProps, d.memoizedState = _.memoizedState, d.updateQueue = _.updateQueue, d.type = _.type, n = _.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
              return Je(Cn, Cn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Ct() > Nu && (r.flags |= 128, u = !0, Ps(d, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = Wc(_), n !== null) {
            if (r.flags |= 128, u = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), Ps(d, !0), d.tail === null && d.tailMode === "hidden" && !_.alternate && !hn) return rr(r), null;
          } else 2 * Ct() - d.renderingStartTime > Nu && o !== 1073741824 && (r.flags |= 128, u = !0, Ps(d, !1), r.lanes = 4194304);
          d.isBackwards ? (_.sibling = r.child, r.child = _) : (o = d.last, o !== null ? o.sibling = _ : r.child = _, d.last = _);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Ct(), r.sibling = null, o = Cn.current, Je(Cn, u ? o & 1 | 2 : o & 1), r) : (rr(r), null);
      case 22:
      case 23:
        return op(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && (r.mode & 1) !== 0 ? (Ca & 1073741824) !== 0 && (rr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : rr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(h(156, r.tag));
  }
  function hf(n, r) {
    switch (Vc(r), r.tag) {
      case 1:
        return zn(r.type) && Ru(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return xl(), cn(qn), cn(Rn), tt(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return $c(r), null;
      case 13:
        if (cn(Cn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(h(340));
          Po();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return cn(Cn), null;
      case 4:
        return xl(), null;
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
  var Fs = !1, xr = !1, Vy = typeof WeakSet == "function" ? WeakSet : Set, Ie = null;
  function Ou(n, r) {
    var o = n.ref;
    if (o !== null) if (typeof o == "function") try {
      o(null);
    } catch (u) {
      mn(n, r, u);
    }
    else o.current = null;
  }
  function mf(n, r, o) {
    try {
      o();
    } catch (u) {
      mn(n, r, u);
    }
  }
  var ph = !1;
  function vh(n, r) {
    if (hs = La, n = fs(), bc(n)) {
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
          var _ = 0, w = -1, L = -1, Q = 0, he = 0, ye = n, de = null;
          t: for (; ; ) {
            for (var Pe; ye !== o || c !== 0 && ye.nodeType !== 3 || (w = _ + c), ye !== d || u !== 0 && ye.nodeType !== 3 || (L = _ + u), ye.nodeType === 3 && (_ += ye.nodeValue.length), (Pe = ye.firstChild) !== null; )
              de = ye, ye = Pe;
            for (; ; ) {
              if (ye === n) break t;
              if (de === o && ++Q === c && (w = _), de === d && ++he === u && (L = _), (Pe = ye.nextSibling) !== null) break;
              ye = de, de = ye.parentNode;
            }
            ye = Pe;
          }
          o = w === -1 || L === -1 ? null : { start: w, end: L };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (_l = { focusedElem: n, selectionRange: o }, La = !1, Ie = r; Ie !== null; ) if (r = Ie, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Ie = n;
    else for (; Ie !== null; ) {
      r = Ie;
      try {
        var We = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (We !== null) {
              var Qe = We.memoizedProps, Nn = We.memoizedState, H = r.stateNode, U = H.getSnapshotBeforeUpdate(r.elementType === r.type ? Qe : ui(r.type, Qe), Nn);
              H.__reactInternalSnapshotBeforeUpdate = U;
            }
            break;
          case 3:
            var $ = r.stateNode.containerInfo;
            $.nodeType === 1 ? $.textContent = "" : $.nodeType === 9 && $.documentElement && $.removeChild($.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(h(163));
        }
      } catch (me) {
        mn(r, r.return, me);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Ie = n;
        break;
      }
      Ie = r.return;
    }
    return We = ph, ph = !1, We;
  }
  function Vs(n, r, o) {
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
  function Hs(n, r) {
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
    r !== null && (n.alternate = null, yf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[bi], delete r[ms], delete r[ys], delete r[Eu], delete r[Py])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Is(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function ao(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Is(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Ni(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = No));
    else if (u !== 4 && (n = n.child, n !== null)) for (Ni(n, r, o), n = n.sibling; n !== null; ) Ni(n, r, o), n = n.sibling;
  }
  function Mi(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null)) for (Mi(n, r, o), n = n.sibling; n !== null; ) Mi(n, r, o), n = n.sibling;
  }
  var Dn = null, jr = !1;
  function zr(n, r, o) {
    for (o = o.child; o !== null; ) hh(n, r, o), o = o.sibling;
  }
  function hh(n, r, o) {
    if (Kr && typeof Kr.onCommitFiberUnmount == "function") try {
      Kr.onCommitFiberUnmount(Ro, o);
    } catch {
    }
    switch (o.tag) {
      case 5:
        xr || Ou(o, r);
      case 6:
        var u = Dn, c = jr;
        Dn = null, zr(n, r, o), Dn = u, jr = c, Dn !== null && (jr ? (n = Dn, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : Dn.removeChild(o.stateNode));
        break;
      case 18:
        Dn !== null && (jr ? (n = Dn, o = o.stateNode, n.nodeType === 8 ? Cu(n.parentNode, o) : n.nodeType === 1 && Cu(n, o), ri(n)) : Cu(Dn, o.stateNode));
        break;
      case 4:
        u = Dn, c = jr, Dn = o.stateNode.containerInfo, jr = !0, zr(n, r, o), Dn = u, jr = c;
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
        zr(n, r, o);
        break;
      case 1:
        if (!xr && (Ou(o, r), u = o.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = o.memoizedProps, u.state = o.memoizedState, u.componentWillUnmount();
        } catch (w) {
          mn(o, r, w);
        }
        zr(n, r, o);
        break;
      case 21:
        zr(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (xr = (u = xr) || o.memoizedState !== null, zr(n, r, o), xr = u) : zr(n, r, o);
        break;
      default:
        zr(n, r, o);
    }
  }
  function mh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new Vy()), r.forEach(function(u) {
        var c = bh.bind(null, n, u);
        o.has(u) || (o.add(u), u.then(c, c));
      });
    }
  }
  function si(n, r) {
    var o = r.deletions;
    if (o !== null) for (var u = 0; u < o.length; u++) {
      var c = o[u];
      try {
        var d = n, _ = r, w = _;
        e: for (; w !== null; ) {
          switch (w.tag) {
            case 5:
              Dn = w.stateNode, jr = !1;
              break e;
            case 3:
              Dn = w.stateNode.containerInfo, jr = !0;
              break e;
            case 4:
              Dn = w.stateNode.containerInfo, jr = !0;
              break e;
          }
          w = w.return;
        }
        if (Dn === null) throw Error(h(160));
        hh(d, _, c), Dn = null, jr = !1;
        var L = c.alternate;
        L !== null && (L.return = null), c.return = null;
      } catch (Q) {
        mn(c, r, Q);
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
            Vs(3, n, n.return), Hs(3, n);
          } catch (Qe) {
            mn(n, n.return, Qe);
          }
          try {
            Vs(5, n, n.return);
          } catch (Qe) {
            mn(n, n.return, Qe);
          }
        }
        break;
      case 1:
        si(r, n), ia(n), u & 512 && o !== null && Ou(o, o.return);
        break;
      case 5:
        if (si(r, n), ia(n), u & 512 && o !== null && Ou(o, o.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            we(c, "");
          } catch (Qe) {
            mn(n, n.return, Qe);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, _ = o !== null ? o.memoizedProps : d, w = n.type, L = n.updateQueue;
          if (n.updateQueue = null, L !== null) try {
            w === "input" && d.type === "radio" && d.name != null && Yn(c, d), er(w, _);
            var Q = er(w, d);
            for (_ = 0; _ < L.length; _ += 2) {
              var he = L[_], ye = L[_ + 1];
              he === "style" ? on(c, ye) : he === "dangerouslySetInnerHTML" ? hi(c, ye) : he === "children" ? we(c, ye) : pe(c, he, ye, Q);
            }
            switch (w) {
              case "input":
                qr(c, d);
                break;
              case "textarea":
                qa(c, d);
                break;
              case "select":
                var de = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var Pe = d.value;
                Pe != null ? wn(c, !!d.multiple, Pe, !1) : de !== !!d.multiple && (d.defaultValue != null ? wn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : wn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ms] = d;
          } catch (Qe) {
            mn(n, n.return, Qe);
          }
        }
        break;
      case 6:
        if (si(r, n), ia(n), u & 4) {
          if (n.stateNode === null) throw Error(h(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Qe) {
            mn(n, n.return, Qe);
          }
        }
        break;
      case 3:
        if (si(r, n), ia(n), u & 4 && o !== null && o.memoizedState.isDehydrated) try {
          ri(r.containerInfo);
        } catch (Qe) {
          mn(n, n.return, Qe);
        }
        break;
      case 4:
        si(r, n), ia(n);
        break;
      case 13:
        si(r, n), ia(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (rp = Ct())), u & 4 && mh(n);
        break;
      case 22:
        if (he = o !== null && o.memoizedState !== null, n.mode & 1 ? (xr = (Q = xr) || he, si(r, n), xr = Q) : si(r, n), ia(n), u & 8192) {
          if (Q = n.memoizedState !== null, (n.stateNode.isHidden = Q) && !he && (n.mode & 1) !== 0) for (Ie = n, he = n.child; he !== null; ) {
            for (ye = Ie = he; Ie !== null; ) {
              switch (de = Ie, Pe = de.child, de.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vs(4, de, de.return);
                  break;
                case 1:
                  Ou(de, de.return);
                  var We = de.stateNode;
                  if (typeof We.componentWillUnmount == "function") {
                    u = de, o = de.return;
                    try {
                      r = u, We.props = r.memoizedProps, We.state = r.memoizedState, We.componentWillUnmount();
                    } catch (Qe) {
                      mn(u, o, Qe);
                    }
                  }
                  break;
                case 5:
                  Ou(de, de.return);
                  break;
                case 22:
                  if (de.memoizedState !== null) {
                    Bs(ye);
                    continue;
                  }
              }
              Pe !== null ? (Pe.return = de, Ie = Pe) : Bs(ye);
            }
            he = he.sibling;
          }
          e: for (he = null, ye = n; ; ) {
            if (ye.tag === 5) {
              if (he === null) {
                he = ye;
                try {
                  c = ye.stateNode, Q ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (w = ye.stateNode, L = ye.memoizedProps.style, _ = L != null && L.hasOwnProperty("display") ? L.display : null, w.style.display = Wt("display", _));
                } catch (Qe) {
                  mn(n, n.return, Qe);
                }
              }
            } else if (ye.tag === 6) {
              if (he === null) try {
                ye.stateNode.nodeValue = Q ? "" : ye.memoizedProps;
              } catch (Qe) {
                mn(n, n.return, Qe);
              }
            } else if ((ye.tag !== 22 && ye.tag !== 23 || ye.memoizedState === null || ye === n) && ye.child !== null) {
              ye.child.return = ye, ye = ye.child;
              continue;
            }
            if (ye === n) break e;
            for (; ye.sibling === null; ) {
              if (ye.return === null || ye.return === n) break e;
              he === ye && (he = null), ye = ye.return;
            }
            he === ye && (he = null), ye.sibling.return = ye.return, ye = ye.sibling;
          }
        }
        break;
      case 19:
        si(r, n), ia(n), u & 4 && mh(n);
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
            if (Is(o)) {
              var u = o;
              break e;
            }
            o = o.return;
          }
          throw Error(h(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (we(c, ""), u.flags &= -33);
            var d = ao(n);
            Mi(n, d, c);
            break;
          case 3:
          case 4:
            var _ = u.stateNode.containerInfo, w = ao(n);
            Ni(n, w, _);
            break;
          default:
            throw Error(h(161));
        }
      } catch (L) {
        mn(n, n.return, L);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Hy(n, r, o) {
    Ie = n, tp(n);
  }
  function tp(n, r, o) {
    for (var u = (n.mode & 1) !== 0; Ie !== null; ) {
      var c = Ie, d = c.child;
      if (c.tag === 22 && u) {
        var _ = c.memoizedState !== null || Fs;
        if (!_) {
          var w = c.alternate, L = w !== null && w.memoizedState !== null || xr;
          w = Fs;
          var Q = xr;
          if (Fs = _, (xr = L) && !Q) for (Ie = c; Ie !== null; ) _ = Ie, L = _.child, _.tag === 22 && _.memoizedState !== null ? np(c) : L !== null ? (L.return = _, Ie = L) : np(c);
          for (; d !== null; ) Ie = d, tp(d), d = d.sibling;
          Ie = c, Fs = w, xr = Q;
        }
        yh(n);
      } else (c.subtreeFlags & 8772) !== 0 && d !== null ? (d.return = c, Ie = d) : yh(n);
    }
  }
  function yh(n) {
    for (; Ie !== null; ) {
      var r = Ie;
      if ((r.flags & 8772) !== 0) {
        var o = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              xr || Hs(5, r);
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
              var w = r.stateNode;
              if (o === null && r.flags & 4) {
                o = w;
                var L = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    L.autoFocus && o.focus();
                    break;
                  case "img":
                    L.src && (o.src = L.src);
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
                  var he = Q.memoizedState;
                  if (he !== null) {
                    var ye = he.dehydrated;
                    ye !== null && ri(ye);
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
          xr || r.flags & 512 && Zd(r);
        } catch (de) {
          mn(r, r.return, de);
        }
      }
      if (r === n) {
        Ie = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, Ie = o;
        break;
      }
      Ie = r.return;
    }
  }
  function Bs(n) {
    for (; Ie !== null; ) {
      var r = Ie;
      if (r === n) {
        Ie = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, Ie = o;
        break;
      }
      Ie = r.return;
    }
  }
  function np(n) {
    for (; Ie !== null; ) {
      var r = Ie;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              Hs(4, r);
            } catch (L) {
              mn(r, o, L);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = r.return;
              try {
                u.componentDidMount();
              } catch (L) {
                mn(r, c, L);
              }
            }
            var d = r.return;
            try {
              Zd(r);
            } catch (L) {
              mn(r, d, L);
            }
            break;
          case 5:
            var _ = r.return;
            try {
              Zd(r);
            } catch (L) {
              mn(r, _, L);
            }
        }
      } catch (L) {
        mn(r, r.return, L);
      }
      if (r === n) {
        Ie = null;
        break;
      }
      var w = r.sibling;
      if (w !== null) {
        w.return = r.return, Ie = w;
        break;
      }
      Ie = r.return;
    }
  }
  var Iy = Math.ceil, Bo = _e.ReactCurrentDispatcher, jl = _e.ReactCurrentOwner, dr = _e.ReactCurrentBatchConfig, Mt = 0, Xn = null, In = null, pr = 0, Ca = 0, Du = Aa(0), Ln = 0, $s = null, Ai = 0, Lu = 0, gf = 0, Ws = null, oa = null, rp = 0, Nu = 1 / 0, Ea = null, Mu = !1, zl = null, $o = null, Sf = !1, io = null, Ys = 0, Wo = 0, Au = null, Gs = -1, kr = 0;
  function Bn() {
    return (Mt & 6) !== 0 ? Ct() : Gs !== -1 ? Gs : Gs = Ct();
  }
  function Ui(n) {
    return (n.mode & 1) === 0 ? 1 : (Mt & 2) !== 0 && pr !== 0 ? pr & -pr : Fy.transition !== null ? (kr === 0 && (kr = ou()), kr) : (n = Ft, n !== 0 || (n = window.event, n = n === void 0 ? 16 : pu(n.type)), n);
  }
  function Pr(n, r, o, u) {
    if (50 < Wo) throw Wo = 0, Au = null, Error(h(185));
    Yi(n, o, u), ((Mt & 2) === 0 || n !== Xn) && (n === Xn && ((Mt & 2) === 0 && (Lu |= o), Ln === 4 && ci(n, pr)), la(n, u), o === 1 && Mt === 0 && (r.mode & 1) === 0 && (Nu = Ct() + 500, Tu && xi()));
  }
  function la(n, r) {
    var o = n.callbackNode;
    fl(n, r);
    var u = ni(n, n === Xn ? pr : 0);
    if (u === 0) o !== null && ur(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (o != null && ur(o), r === 1) n.tag === 0 ? Ao(ap.bind(null, n)) : Pc(ap.bind(null, n)), _u(function() {
        (Mt & 6) === 0 && xi();
      }), o = null;
      else {
        switch (uu(u)) {
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
            o = ru;
            break;
          default:
            o = cl;
        }
        o = xh(o, _f.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function _f(n, r) {
    if (Gs = -1, kr = 0, (Mt & 6) !== 0) throw Error(h(327));
    var o = n.callbackNode;
    if (Uu() && n.callbackNode !== o) return null;
    var u = ni(n, n === Xn ? pr : 0);
    if (u === 0) return null;
    if ((u & 30) !== 0 || (u & n.expiredLanes) !== 0 || r) r = Cf(n, u);
    else {
      r = u;
      var c = Mt;
      Mt |= 2;
      var d = Sh();
      (Xn !== n || pr !== r) && (Ea = null, Nu = Ct() + 500, oo(n, r));
      do
        try {
          _h();
          break;
        } catch (w) {
          gh(n, w);
        }
      while (!0);
      Ad(), Bo.current = d, Mt = c, In !== null ? r = 0 : (Xn = null, pr = 0, r = Ln);
    }
    if (r !== 0) {
      if (r === 2 && (c = bo(n), c !== 0 && (u = c, r = Qs(n, c))), r === 1) throw o = $s, oo(n, 0), ci(n, u), la(n, Ct()), o;
      if (r === 6) ci(n, u);
      else {
        if (c = n.current.alternate, (u & 30) === 0 && !By(c) && (r = Cf(n, u), r === 2 && (d = bo(n), d !== 0 && (u = d, r = Qs(n, d))), r === 1)) throw o = $s, oo(n, 0), ci(n, u), la(n, Ct()), o;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(h(345));
          case 2:
            Vl(n, oa, Ea);
            break;
          case 3:
            if (ci(n, u), (u & 130023424) === u && (r = rp + 500 - Ct(), 10 < r)) {
              if (ni(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                Bn(), n.pingedLanes |= n.suspendedLanes & c;
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
              var _ = 31 - Nr(u);
              d = 1 << _, _ = r[_], _ > c && (c = _), u &= ~d;
            }
            if (u = c, u = Ct() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Iy(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = Uc(Vl.bind(null, n, oa, Ea), u);
              break;
            }
            Vl(n, oa, Ea);
            break;
          case 5:
            Vl(n, oa, Ea);
            break;
          default:
            throw Error(h(329));
        }
      }
    }
    return la(n, Ct()), n.callbackNode === o ? _f.bind(null, n) : null;
  }
  function Qs(n, r) {
    var o = Ws;
    return n.current.memoizedState.isDehydrated && (oo(n, r).flags |= 256), n = Cf(n, r), n !== 2 && (r = oa, oa = o, r !== null && Pl(r)), n;
  }
  function Pl(n) {
    oa === null ? oa = n : oa.push.apply(oa, n);
  }
  function By(n) {
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
    for (r &= ~gf, r &= ~Lu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - Nr(r), u = 1 << o;
      n[o] = -1, r &= ~u;
    }
  }
  function ap(n) {
    if ((Mt & 6) !== 0) throw Error(h(327));
    Uu();
    var r = ni(n, 0);
    if ((r & 1) === 0) return la(n, Ct()), null;
    var o = Cf(n, r);
    if (n.tag !== 0 && o === 2) {
      var u = bo(n);
      u !== 0 && (r = u, o = Qs(n, u));
    }
    if (o === 1) throw o = $s, oo(n, 0), ci(n, r), la(n, Ct()), o;
    if (o === 6) throw Error(h(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Vl(n, oa, Ea), la(n, Ct()), null;
  }
  function ip(n, r) {
    var o = Mt;
    Mt |= 1;
    try {
      return n(r);
    } finally {
      Mt = o, Mt === 0 && (Nu = Ct() + 500, Tu && xi());
    }
  }
  function Fl(n) {
    io !== null && io.tag === 0 && (Mt & 6) === 0 && Uu();
    var r = Mt;
    Mt |= 1;
    var o = dr.transition, u = Ft;
    try {
      if (dr.transition = null, Ft = 1, n) return n();
    } finally {
      Ft = u, dr.transition = o, Mt = r, (Mt & 6) === 0 && xi();
    }
  }
  function op() {
    Ca = Du.current, cn(Du);
  }
  function oo(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Od(o)), In !== null) for (o = In.return; o !== null; ) {
      var u = o;
      switch (Vc(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && Ru();
          break;
        case 3:
          xl(), cn(qn), cn(Rn), tt();
          break;
        case 5:
          $c(u);
          break;
        case 4:
          xl();
          break;
        case 13:
          cn(Cn);
          break;
        case 19:
          cn(Cn);
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
    if (Xn = n, In = n = Yo(n.current, null), pr = Ca = r, Ln = 0, $s = null, gf = Lu = Ai = 0, oa = Ws = null, bl !== null) {
      for (r = 0; r < bl.length; r++) if (o = bl[r], u = o.interleaved, u !== null) {
        o.interleaved = null;
        var c = u.next, d = o.pending;
        if (d !== null) {
          var _ = d.next;
          d.next = c, u.next = _;
        }
        o.pending = u;
      }
      bl = null;
    }
    return n;
  }
  function gh(n, r) {
    do {
      var o = In;
      try {
        if (Ad(), xt.current = Ml, Yc) {
          for (var u = Ht.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          Yc = !1;
        }
        if (en = 0, nr = Fn = Ht = null, bs = !1, kl = 0, jl.current = null, o === null || o.return === null) {
          Ln = 1, $s = r, In = null;
          break;
        }
        e: {
          var d = n, _ = o.return, w = o, L = r;
          if (r = pr, w.flags |= 32768, L !== null && typeof L == "object" && typeof L.then == "function") {
            var Q = L, he = w, ye = he.tag;
            if ((he.mode & 1) === 0 && (ye === 0 || ye === 11 || ye === 15)) {
              var de = he.alternate;
              de ? (he.updateQueue = de.updateQueue, he.memoizedState = de.memoizedState, he.lanes = de.lanes) : (he.updateQueue = null, he.memoizedState = null);
            }
            var Pe = ih(_);
            if (Pe !== null) {
              Pe.flags &= -257, Io(Pe, _, w, d, r), Pe.mode & 1 && Qd(d, Q, r), r = Pe, L = Q;
              var We = r.updateQueue;
              if (We === null) {
                var Qe = /* @__PURE__ */ new Set();
                Qe.add(L), r.updateQueue = Qe;
              } else We.add(L);
              break e;
            } else {
              if ((r & 1) === 0) {
                Qd(d, Q, r), lp();
                break e;
              }
              L = Error(h(426));
            }
          } else if (hn && w.mode & 1) {
            var Nn = ih(_);
            if (Nn !== null) {
              (Nn.flags & 65536) === 0 && (Nn.flags |= 256), Io(Nn, _, w, d, r), to(Al(L, w));
              break e;
            }
          }
          d = L = Al(L, w), Ln !== 4 && (Ln = 2), Ws === null ? Ws = [d] : Ws.push(d), d = _;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var H = ah(d, L, r);
                Zv(d, H);
                break e;
              case 1:
                w = L;
                var U = d.type, $ = d.stateNode;
                if ((d.flags & 128) === 0 && (typeof U.getDerivedStateFromError == "function" || $ !== null && typeof $.componentDidCatch == "function" && ($o === null || !$o.has($)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var me = Gd(d, w, r);
                  Zv(d, me);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Eh(o);
      } catch (Ye) {
        r = Ye, In === o && o !== null && (In = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Sh() {
    var n = Bo.current;
    return Bo.current = Ml, n === null ? Ml : n;
  }
  function lp() {
    (Ln === 0 || Ln === 3 || Ln === 2) && (Ln = 4), Xn === null || (Ai & 268435455) === 0 && (Lu & 268435455) === 0 || ci(Xn, pr);
  }
  function Cf(n, r) {
    var o = Mt;
    Mt |= 2;
    var u = Sh();
    (Xn !== n || pr !== r) && (Ea = null, oo(n, r));
    do
      try {
        $y();
        break;
      } catch (c) {
        gh(n, c);
      }
    while (!0);
    if (Ad(), Mt = o, Bo.current = u, In !== null) throw Error(h(261));
    return Xn = null, pr = 0, Ln;
  }
  function $y() {
    for (; In !== null; ) Ch(In);
  }
  function _h() {
    for (; In !== null && !Ja(); ) Ch(In);
  }
  function Ch(n) {
    var r = wh(n.alternate, n, Ca);
    n.memoizedProps = n.pendingProps, r === null ? Eh(n) : In = r, jl.current = null;
  }
  function Eh(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (o = dh(o, r, Ca), o !== null) {
          In = o;
          return;
        }
      } else {
        if (o = hf(o, r), o !== null) {
          o.flags &= 32767, In = o;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Ln = 6, In = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        In = r;
        return;
      }
      In = r = n;
    } while (r !== null);
    Ln === 0 && (Ln = 5);
  }
  function Vl(n, r, o) {
    var u = Ft, c = dr.transition;
    try {
      dr.transition = null, Ft = 1, Wy(n, r, o, u);
    } finally {
      dr.transition = c, Ft = u;
    }
    return null;
  }
  function Wy(n, r, o, u) {
    do
      Uu();
    while (io !== null);
    if ((Mt & 6) !== 0) throw Error(h(327));
    o = n.finishedWork;
    var c = n.finishedLanes;
    if (o === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(h(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = o.lanes | o.childLanes;
    if (ud(n, d), n === Xn && (In = Xn = null, pr = 0), (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || Sf || (Sf = !0, xh(cl, function() {
      return Uu(), null;
    })), d = (o.flags & 15990) !== 0, (o.subtreeFlags & 15990) !== 0 || d) {
      d = dr.transition, dr.transition = null;
      var _ = Ft;
      Ft = 1;
      var w = Mt;
      Mt |= 4, jl.current = null, vh(n, o), ep(o, n), mu(_l), La = !!hs, _l = hs = null, n.current = o, Hy(o), Za(), Mt = w, Ft = _, dr.transition = d;
    } else n.current = o;
    if (Sf && (Sf = !1, io = n, Ys = c), d = n.pendingLanes, d === 0 && ($o = null), ts(o.stateNode), la(n, Ct()), r !== null) for (u = n.onRecoverableError, o = 0; o < r.length; o++) c = r[o], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (Mu) throw Mu = !1, n = zl, zl = null, n;
    return (Ys & 1) !== 0 && n.tag !== 0 && Uu(), d = n.pendingLanes, (d & 1) !== 0 ? n === Au ? Wo++ : (Wo = 0, Au = n) : Wo = 0, xi(), null;
  }
  function Uu() {
    if (io !== null) {
      var n = uu(Ys), r = dr.transition, o = Ft;
      try {
        if (dr.transition = null, Ft = 16 > n ? 16 : n, io === null) var u = !1;
        else {
          if (n = io, io = null, Ys = 0, (Mt & 6) !== 0) throw Error(h(331));
          var c = Mt;
          for (Mt |= 4, Ie = n.current; Ie !== null; ) {
            var d = Ie, _ = d.child;
            if ((Ie.flags & 16) !== 0) {
              var w = d.deletions;
              if (w !== null) {
                for (var L = 0; L < w.length; L++) {
                  var Q = w[L];
                  for (Ie = Q; Ie !== null; ) {
                    var he = Ie;
                    switch (he.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Vs(8, he, d);
                    }
                    var ye = he.child;
                    if (ye !== null) ye.return = he, Ie = ye;
                    else for (; Ie !== null; ) {
                      he = Ie;
                      var de = he.sibling, Pe = he.return;
                      if (yf(he), he === Q) {
                        Ie = null;
                        break;
                      }
                      if (de !== null) {
                        de.return = Pe, Ie = de;
                        break;
                      }
                      Ie = Pe;
                    }
                  }
                }
                var We = d.alternate;
                if (We !== null) {
                  var Qe = We.child;
                  if (Qe !== null) {
                    We.child = null;
                    do {
                      var Nn = Qe.sibling;
                      Qe.sibling = null, Qe = Nn;
                    } while (Qe !== null);
                  }
                }
                Ie = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && _ !== null) _.return = d, Ie = _;
            else e: for (; Ie !== null; ) {
              if (d = Ie, (d.flags & 2048) !== 0) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Vs(9, d, d.return);
              }
              var H = d.sibling;
              if (H !== null) {
                H.return = d.return, Ie = H;
                break e;
              }
              Ie = d.return;
            }
          }
          var U = n.current;
          for (Ie = U; Ie !== null; ) {
            _ = Ie;
            var $ = _.child;
            if ((_.subtreeFlags & 2064) !== 0 && $ !== null) $.return = _, Ie = $;
            else e: for (_ = U; Ie !== null; ) {
              if (w = Ie, (w.flags & 2048) !== 0) try {
                switch (w.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Hs(9, w);
                }
              } catch (Ye) {
                mn(w, w.return, Ye);
              }
              if (w === _) {
                Ie = null;
                break e;
              }
              var me = w.sibling;
              if (me !== null) {
                me.return = w.return, Ie = me;
                break e;
              }
              Ie = w.return;
            }
          }
          if (Mt = c, xi(), Kr && typeof Kr.onPostCommitFiberRoot == "function") try {
            Kr.onPostCommitFiberRoot(Ro, n);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        Ft = o, dr.transition = r;
      }
    }
    return !1;
  }
  function Rh(n, r, o) {
    r = Al(o, r), r = ah(n, r, 1), n = Fo(n, r, 1), r = Bn(), n !== null && (Yi(n, 1, r), la(n, r));
  }
  function mn(n, r, o) {
    if (n.tag === 3) Rh(n, n, o);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Rh(r, n, o);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && ($o === null || !$o.has(u))) {
          n = Al(o, n), n = Gd(r, n, 1), r = Fo(r, n, 1), n = Bn(), r !== null && (Yi(r, 1, n), la(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Yy(n, r, o) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = Bn(), n.pingedLanes |= n.suspendedLanes & o, Xn === n && (pr & o) === o && (Ln === 4 || Ln === 3 && (pr & 130023424) === pr && 500 > Ct() - rp ? oo(n, 0) : gf |= o), la(n, r);
  }
  function Th(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = ma, ma <<= 1, (ma & 130023424) === 0 && (ma = 4194304)));
    var o = Bn();
    n = Sa(n, r), n !== null && (Yi(n, r, o), la(n, o));
  }
  function Gy(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), Th(n, o);
  }
  function bh(n, r) {
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
        throw Error(h(314));
    }
    u !== null && u.delete(r), Th(n, o);
  }
  var wh;
  wh = function(n, r, o) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || qn.current) Vn = !0;
    else {
      if ((n.lanes & o) === 0 && (r.flags & 128) === 0) return Vn = !1, zs(n, r, o);
      Vn = (n.flags & 131072) !== 0;
    }
    else Vn = !1, hn && (r.flags & 1048576) !== 0 && qv(r, eo, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Pa(n, r), n = r.pendingProps;
        var c = Zr(r, Rn.current);
        _n(r, o), c = Vo(null, r, u, n, c, o);
        var d = li();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, zn(u) ? (d = !0, tr(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Fd(r), c.updater = cf, r.stateNode = c, c._reactInternals = r, Ns(r, u, n, o), r = Us(null, r, u, !0, d, o)) : (r.tag = 0, hn && d && Fc(r), fr(null, r, c, o), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Pa(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = qy(u), n = ui(u, n), c) {
            case 0:
              r = oh(null, r, u, n, o);
              break e;
            case 1:
              r = lh(null, r, u, n, o);
              break e;
            case 11:
              r = aa(null, r, u, n, o);
              break e;
            case 14:
              r = Ul(null, r, u, ui(u.type, n), o);
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
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ui(u, c), oh(n, r, u, c, o);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ui(u, c), lh(n, r, u, c, o);
      case 3:
        e: {
          if (ku(r), n === null) throw Error(h(387));
          u = r.pendingProps, d = r.memoizedState, c = d.element, Jv(n, r), _s(r, u, null, o);
          var _ = r.memoizedState;
          if (u = _.element, d.isDehydrated) if (d = { element: u, isDehydrated: !1, cache: _.cache, pendingSuspenseBoundaries: _.pendingSuspenseBoundaries, transitions: _.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Al(Error(h(423)), r), r = uh(n, r, u, o, c);
            break e;
          } else if (u !== c) {
            c = Al(Error(h(424)), r), r = uh(n, r, u, o, c);
            break e;
          } else for (ta = Ti(r.stateNode.containerInfo.firstChild), ea = r, hn = !0, ja = null, o = Ne(r, null, u, o), r.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (Po(), u === c) {
              r = Fa(n, r, o);
              break e;
            }
            fr(n, r, u, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return eh(r), n === null && Nd(r), u = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, _ = c.children, Ac(u, c) ? _ = null : d !== null && Ac(u, d) && (r.flags |= 32), qd(n, r), fr(n, r, _, o), r.child;
      case 6:
        return n === null && Nd(r), null;
      case 13:
        return vf(n, r, o);
      case 4:
        return Hd(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = kn(r, null, u, o) : fr(n, r, u, o), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ui(u, c), aa(n, r, u, c, o);
      case 7:
        return fr(n, r, r.pendingProps, o), r.child;
      case 8:
        return fr(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return fr(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, d = r.memoizedProps, _ = c.value, Je(ga, u._currentValue), u._currentValue = _, d !== null) if (ii(d.value, _)) {
            if (d.children === c.children && !qn.current) {
              r = Fa(n, r, o);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var w = d.dependencies;
            if (w !== null) {
              _ = d.child;
              for (var L = w.firstContext; L !== null; ) {
                if (L.context === u) {
                  if (d.tag === 1) {
                    L = no(-1, o & -o), L.tag = 2;
                    var Q = d.updateQueue;
                    if (Q !== null) {
                      Q = Q.shared;
                      var he = Q.pending;
                      he === null ? L.next = L : (L.next = he.next, he.next = L), Q.pending = L;
                    }
                  }
                  d.lanes |= o, L = d.alternate, L !== null && (L.lanes |= o), jd(
                    d.return,
                    o,
                    r
                  ), w.lanes |= o;
                  break;
                }
                L = L.next;
              }
            } else if (d.tag === 10) _ = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (_ = d.return, _ === null) throw Error(h(341));
              _.lanes |= o, w = _.alternate, w !== null && (w.lanes |= o), jd(_, o, r), _ = d.sibling;
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
          fr(n, r, c.children, o), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, u = r.pendingProps.children, _n(r, o), c = za(c), u = u(c), r.flags |= 1, fr(n, r, u, o), r.child;
      case 14:
        return u = r.type, c = ui(u, r.pendingProps), c = ui(u.type, c), Ul(n, r, u, c, o);
      case 15:
        return Et(n, r, r.type, r.pendingProps, o);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ui(u, c), Pa(n, r), r.tag = 1, zn(u) ? (n = !0, tr(r)) : n = !1, _n(r, o), ff(r, u, c), Ns(r, u, c, o), Us(null, r, u, !0, n, o);
      case 19:
        return Li(n, r, o);
      case 22:
        return As(n, r, o);
    }
    throw Error(h(156, r.tag));
  };
  function xh(n, r) {
    return dn(n, r);
  }
  function Qy(n, r, o, u) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ha(n, r, o, u) {
    return new Qy(n, r, o, u);
  }
  function up(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function qy(n) {
    if (typeof n == "function") return up(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Y) return 11;
      if (n === $e) return 14;
    }
    return 2;
  }
  function Yo(n, r) {
    var o = n.alternate;
    return o === null ? (o = Ha(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function qs(n, r, o, u, c, d) {
    var _ = 2;
    if (u = n, typeof n == "function") up(n) && (_ = 1);
    else if (typeof n == "string") _ = 5;
    else e: switch (n) {
      case Re:
        return lo(o.children, c, d, r);
      case Ue:
        _ = 8, c |= 8;
        break;
      case qe:
        return n = Ha(12, o, r, c | 2), n.elementType = qe, n.lanes = d, n;
      case Z:
        return n = Ha(13, o, r, c), n.elementType = Z, n.lanes = d, n;
      case xe:
        return n = Ha(19, o, r, c), n.elementType = xe, n.lanes = d, n;
      case Te:
        return Go(o, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case it:
            _ = 10;
            break e;
          case Se:
            _ = 9;
            break e;
          case Y:
            _ = 11;
            break e;
          case $e:
            _ = 14;
            break e;
          case Le:
            _ = 16, u = null;
            break e;
        }
        throw Error(h(130, n == null ? n : typeof n, ""));
    }
    return r = Ha(_, o, r, c), r.elementType = n, r.type = u, r.lanes = d, r;
  }
  function lo(n, r, o, u) {
    return n = Ha(7, n, u, r), n.lanes = o, n;
  }
  function Go(n, r, o, u) {
    return n = Ha(22, n, u, r), n.elementType = Te, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function sp(n, r, o) {
    return n = Ha(6, n, null, r), n.lanes = o, n;
  }
  function Ef(n, r, o) {
    return r = Ha(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function kh(n, r, o, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = lu(0), this.expirationTimes = lu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = lu(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Rf(n, r, o, u, c, d, _, w, L) {
    return n = new kh(n, r, o, w, L), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ha(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: u, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Fd(d), n;
  }
  function Ky(n, r, o) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: be, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: o };
  }
  function cp(n) {
    if (!n) return br;
    n = n._reactInternals;
    e: {
      if (_t(n) !== n || n.tag !== 1) throw Error(h(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (zn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(h(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (zn(o)) return gs(n, o, r);
    }
    return r;
  }
  function Oh(n, r, o, u, c, d, _, w, L) {
    return n = Rf(o, u, !0, n, c, d, _, w, L), n.context = cp(null), o = n.current, u = Bn(), c = Ui(o), d = no(u, c), d.callback = r ?? null, Fo(o, d, c), n.current.lanes = c, Yi(n, c, u), la(n, u), n;
  }
  function Tf(n, r, o, u) {
    var c = r.current, d = Bn(), _ = Ui(c);
    return o = cp(o), r.context === null ? r.context = o : r.pendingContext = o, r = no(d, _), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Fo(c, r, _), n !== null && (Pr(n, c, _, d), Bc(n, c, _)), _;
  }
  function bf(n) {
    return n = n.current, n.child ? (n.child.tag === 5, n.child.stateNode) : null;
  }
  function fp(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function wf(n, r) {
    fp(n, r), (n = n.alternate) && fp(n, r);
  }
  function Dh() {
    return null;
  }
  var Hl = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function dp(n) {
    this._internalRoot = n;
  }
  xf.prototype.render = dp.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(h(409));
    Tf(n, r, null, null);
  }, xf.prototype.unmount = dp.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Fl(function() {
        Tf(null, n, null, null);
      }), r[Ji] = null;
    }
  };
  function xf(n) {
    this._internalRoot = n;
  }
  xf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = ht();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Qn.length && r !== 0 && r < Qn[o].priority; o++) ;
      Qn.splice(o, 0, n), o === 0 && as(n);
    }
  };
  function pp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function kf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Lh() {
  }
  function Xy(n, r, o, u, c) {
    if (c) {
      if (typeof u == "function") {
        var d = u;
        u = function() {
          var Q = bf(_);
          d.call(Q);
        };
      }
      var _ = Oh(r, u, n, 0, null, !1, !1, "", Lh);
      return n._reactRootContainer = _, n[Ji] = _.current, gu(n.nodeType === 8 ? n.parentNode : n), Fl(), _;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof u == "function") {
      var w = u;
      u = function() {
        var Q = bf(L);
        w.call(Q);
      };
    }
    var L = Rf(n, 0, !1, null, null, !1, !1, "", Lh);
    return n._reactRootContainer = L, n[Ji] = L.current, gu(n.nodeType === 8 ? n.parentNode : n), Fl(function() {
      Tf(r, L, o, u);
    }), L;
  }
  function Ks(n, r, o, u, c) {
    var d = o._reactRootContainer;
    if (d) {
      var _ = d;
      if (typeof c == "function") {
        var w = c;
        c = function() {
          var L = bf(_);
          w.call(L);
        };
      }
      Tf(r, _, n, c);
    } else _ = Xy(o, r, n, c, u);
    return bf(_);
  }
  jt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = ti(r.pendingLanes);
          o !== 0 && (Gi(r, o | 1), la(r, Ct()), (Mt & 6) === 0 && (Nu = Ct() + 500, xi()));
        }
        break;
      case 13:
        Fl(function() {
          var u = Sa(n, 1);
          if (u !== null) {
            var c = Bn();
            Pr(u, n, 1, c);
          }
        }), wf(n, 1);
    }
  }, ns = function(n) {
    if (n.tag === 13) {
      var r = Sa(n, 134217728);
      if (r !== null) {
        var o = Bn();
        Pr(r, n, 134217728, o);
      }
      wf(n, 134217728);
    }
  }, Si = function(n) {
    if (n.tag === 13) {
      var r = Ui(n), o = Sa(n, r);
      if (o !== null) {
        var u = Bn();
        Pr(o, n, r, u);
      }
      wf(n, r);
    }
  }, ht = function() {
    return Ft;
  }, su = function(n, r) {
    var o = Ft;
    try {
      return Ft = n, r();
    } finally {
      Ft = o;
    }
  }, Kt = function(n, r, o) {
    switch (r) {
      case "input":
        if (qr(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; ) o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var u = o[r];
            if (u !== n && u.form === n.form) {
              var c = Sn(u);
              if (!c) throw Error(h(90));
              Or(u), qr(u, c);
            }
          }
        }
        break;
      case "textarea":
        qa(n, o);
        break;
      case "select":
        r = o.value, r != null && wn(n, !!o.multiple, r, !1);
    }
  }, ll = ip, _o = Fl;
  var Jy = { usingClientEntryPoint: !1, Events: [et, oi, Sn, Wi, ol, ip] }, Xs = { findFiberByHostInstance: Cl, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Nh = { bundleType: Xs.bundleType, version: Xs.version, rendererPackageName: Xs.rendererPackageName, rendererConfig: Xs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: _e.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = xn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Xs.findFiberByHostInstance || Dh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qo.isDisabled && Qo.supportsFiber) try {
      Ro = Qo.inject(Nh), Kr = Qo;
    } catch {
    }
  }
  return Ga.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jy, Ga.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!pp(r)) throw Error(h(200));
    return Ky(n, r, null, o);
  }, Ga.createRoot = function(n, r) {
    if (!pp(n)) throw Error(h(299));
    var o = !1, u = "", c = Hl;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Rf(n, 1, !1, null, null, o, !1, u, c), n[Ji] = r.current, gu(n.nodeType === 8 ? n.parentNode : n), new dp(r);
  }, Ga.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(h(188)) : (n = Object.keys(n).join(","), Error(h(268, n)));
    return n = xn(r), n = n === null ? null : n.stateNode, n;
  }, Ga.flushSync = function(n) {
    return Fl(n);
  }, Ga.hydrate = function(n, r, o) {
    if (!kf(r)) throw Error(h(200));
    return Ks(null, n, r, !0, o);
  }, Ga.hydrateRoot = function(n, r, o) {
    if (!pp(n)) throw Error(h(405));
    var u = o != null && o.hydratedSources || null, c = !1, d = "", _ = Hl;
    if (o != null && (o.unstable_strictMode === !0 && (c = !0), o.identifierPrefix !== void 0 && (d = o.identifierPrefix), o.onRecoverableError !== void 0 && (_ = o.onRecoverableError)), r = Oh(r, null, n, 1, o ?? null, c, !1, d, _), n[Ji] = r.current, gu(n), u) for (n = 0; n < u.length; n++) o = u[n], c = o._getVersion, c = c(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, c] : r.mutableSourceEagerHydrationData.push(
      o,
      c
    );
    return new xf(r);
  }, Ga.render = function(n, r, o) {
    if (!kf(r)) throw Error(h(200));
    return Ks(null, n, r, !1, o);
  }, Ga.unmountComponentAtNode = function(n) {
    if (!kf(n)) throw Error(h(40));
    return n._reactRootContainer ? (Fl(function() {
      Ks(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ji] = null;
      });
    }), !0) : !1;
  }, Ga.unstable_batchedUpdates = ip, Ga.unstable_renderSubtreeIntoContainer = function(n, r, o, u) {
    if (!kf(o)) throw Error(h(200));
    if (n == null || n._reactInternals === void 0) throw Error(h(38));
    return Ks(n, r, o, !1, u);
  }, Ga.version = "18.3.1-next-f1338f8080-20240426", Ga;
}
var Qa = {};
var vR;
function QD() {
  return vR || (vR = 1, process.env.NODE_ENV !== "production" && (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var v = nu(), m = AR(), h = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, E = !1;
    function k(e) {
      E = e;
    }
    function T(e) {
      if (!E) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        N("warn", e, a);
      }
    }
    function y(e) {
      if (!E) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        N("error", e, a);
      }
    }
    function N(e, t, a) {
      {
        var i = h.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var x = 0, b = 1, M = 2, P = 3, V = 4, F = 5, X = 6, K = 7, ae = 8, le = 9, ue = 10, pe = 11, _e = 12, ve = 13, be = 14, Re = 15, Ue = 16, qe = 17, it = 18, Se = 19, Y = 21, Z = 22, xe = 23, $e = 24, Le = 25, Te = !0, ie = !1, Ae = !1, Ce = !1, z = !1, ee = !0, Ze = !0, Ve = !0, mt = !0, nt = /* @__PURE__ */ new Set(), je = {}, st = {};
    function dt(e, t) {
      Qt(e, t), Qt(e + "Capture", t);
    }
    function Qt(e, t) {
      je[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), je[e] = t;
      {
        var a = e.toLowerCase();
        st[a] = e, e === "onDoubleClick" && (st.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        nt.add(t[i]);
    }
    var An = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Or = Object.prototype.hasOwnProperty;
    function bn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function or(e) {
      try {
        return Wn(e), !1;
      } catch {
        return !0;
      }
    }
    function Wn(e) {
      return "" + e;
    }
    function Yn(e, t) {
      if (or(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, bn(e)), Wn(e);
    }
    function qr(e) {
      if (or(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", bn(e)), Wn(e);
    }
    function vi(e, t) {
      if (or(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, bn(e)), Wn(e);
    }
    function pa(e, t) {
      if (or(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, bn(e)), Wn(e);
    }
    function Zn(e) {
      if (or(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", bn(e)), Wn(e);
    }
    function wn(e) {
      if (or(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", bn(e)), Wn(e);
    }
    var Gn = 0, Er = 1, qa = 2, Un = 3, Rr = 4, va = 5, Ka = 6, hi = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", we = hi + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ke = new RegExp("^[" + hi + "][" + we + "]*$"), Tt = {}, Wt = {};
    function on(e) {
      return Or.call(Wt, e) ? !0 : Or.call(Tt, e) ? !1 : Ke.test(e) ? (Wt[e] = !0, !0) : (Tt[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function yn(e, t, a) {
      return t !== null ? t.type === Gn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function fn(e, t, a, i) {
      if (a !== null && a.type === Gn)
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
    function er(e, t, a, i) {
      if (t === null || typeof t > "u" || fn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Un:
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
    function qt(e, t, a, i, l, s, f) {
      this.acceptsBooleans = t === qa || t === Un || t === Rr, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
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
        Gn,
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
        Un,
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
        Un,
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
    var Tr = /[\-\:]([a-z])/g, ka = function(e) {
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
      var t = e.replace(Tr, ka);
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
      var t = e.replace(Tr, ka);
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
      var t = e.replace(Tr, ka);
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
    var ol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ll = !1;
    function _o(e) {
      !ll && ol.test(e) && (ll = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Co(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        Yn(a, t), i.sanitizeURL && _o("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Rr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : er(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (er(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Un)
            return a;
          f = e.getAttribute(s);
        }
        return er(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function ul(e, t, a, i) {
      {
        if (!on(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return Yn(a, t), l === "" + a ? a : l;
      }
    }
    function Dr(e, t, a, i) {
      var l = ln(t);
      if (!yn(t, l, i)) {
        if (er(t, a, l, i) && (a = null), i || l === null) {
          if (on(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Yn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = l.mustUseProperty;
        if (f) {
          var p = l.propertyName;
          if (a === null) {
            var g = l.type;
            e[p] = g === Un ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var C = l.attributeName, R = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(C);
        else {
          var j = l.type, A;
          j === Un || j === Rr && a === !0 ? A = "" : (Yn(a, C), A = "" + a, l.sanitizeURL && _o(A.toString())), R ? e.setAttributeNS(R, C, A) : e.setAttribute(C, A);
        }
      }
    }
    var Lr = /* @__PURE__ */ Symbol.for("react.element"), lr = /* @__PURE__ */ Symbol.for("react.portal"), mi = /* @__PURE__ */ Symbol.for("react.fragment"), Xa = /* @__PURE__ */ Symbol.for("react.strict_mode"), yi = /* @__PURE__ */ Symbol.for("react.profiler"), gi = /* @__PURE__ */ Symbol.for("react.provider"), D = /* @__PURE__ */ Symbol.for("react.context"), se = /* @__PURE__ */ Symbol.for("react.forward_ref"), De = /* @__PURE__ */ Symbol.for("react.suspense"), Be = /* @__PURE__ */ Symbol.for("react.suspense_list"), _t = /* @__PURE__ */ Symbol.for("react.memo"), yt = /* @__PURE__ */ Symbol.for("react.lazy"), kt = /* @__PURE__ */ Symbol.for("react.scope"), wt = /* @__PURE__ */ Symbol.for("react.debug_trace_mode"), xn = /* @__PURE__ */ Symbol.for("react.offscreen"), un = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), dn = /* @__PURE__ */ Symbol.for("react.cache"), ur = /* @__PURE__ */ Symbol.for("react.tracing_marker"), Ja = Symbol.iterator, Za = "@@iterator";
    function Ct(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ja && e[Ja] || e[Za];
      return typeof t == "function" ? t : null;
    }
    var Rt = Object.assign, ei = 0, sl, cl, Eo, ru, Ro, Kr, ts;
    function Nr() {
    }
    Nr.__reactDisabledLog = !0;
    function Sc() {
      {
        if (ei === 0) {
          sl = console.log, cl = console.info, Eo = console.warn, ru = console.error, Ro = console.group, Kr = console.groupCollapsed, ts = console.groupEnd;
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
              value: ru
            }),
            group: Rt({}, e, {
              value: Ro
            }),
            groupCollapsed: Rt({}, e, {
              value: Kr
            }),
            groupEnd: Rt({}, e, {
              value: ts
            })
          });
        }
        ei < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var au = h.ReactCurrentDispatcher, To;
    function ma(e, t, a) {
      {
        if (To === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            To = i && i[1] || "";
          }
        return `
` + To + e;
      }
    }
    var ti = !1, ni;
    {
      var iu = typeof WeakMap == "function" ? WeakMap : Map;
      ni = new iu();
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
      s = au.current, au.current = null, Sc();
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
            } catch (q) {
              i = q;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (q) {
              i = q;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (q) {
            i = q;
          }
          e();
        }
      } catch (q) {
        if (q && i && typeof q.stack == "string") {
          for (var p = q.stack.split(`
`), g = i.stack.split(`
`), C = p.length - 1, R = g.length - 1; C >= 1 && R >= 0 && p[C] !== g[R]; )
            R--;
          for (; C >= 1 && R >= 0; C--, R--)
            if (p[C] !== g[R]) {
              if (C !== 1 || R !== 1)
                do
                  if (C--, R--, R < 0 || p[C] !== g[R]) {
                    var j = `
` + p[C].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && ni.set(e, j), j;
                  }
                while (C >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        ti = !1, au.current = s, _c(), Error.prepareStackTrace = l;
      }
      var A = e ? e.displayName || e.name : "", W = A ? ma(A) : "";
      return typeof e == "function" && ni.set(e, W), W;
    }
    function bo(e, t, a) {
      return fl(e, !0);
    }
    function ou(e, t, a) {
      return fl(e, !1);
    }
    function lu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Yi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fl(e, lu(e));
      if (typeof e == "string")
        return ma(e);
      switch (e) {
        case De:
          return ma("Suspense");
        case Be:
          return ma("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case se:
            return ou(e.render);
          case _t:
            return Yi(e.type, t, a);
          case yt: {
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
        case F:
          return ma(e.type);
        case Ue:
          return ma("Lazy");
        case ve:
          return ma("Suspense");
        case Se:
          return ma("SuspenseList");
        case x:
        case M:
        case Re:
          return ou(e.type);
        case pe:
          return ou(e.type.render);
        case b:
          return bo(e.type);
        default:
          return "";
      }
    }
    function Gi(e) {
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
    function Ft(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function uu(e) {
      return e.displayName || "Context";
    }
    function jt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case mi:
          return "Fragment";
        case lr:
          return "Portal";
        case yi:
          return "Profiler";
        case Xa:
          return "StrictMode";
        case De:
          return "Suspense";
        case Be:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case D:
            var t = e;
            return uu(t) + ".Consumer";
          case gi:
            var a = e;
            return uu(a._context) + ".Provider";
          case se:
            return Ft(e, e.render, "ForwardRef");
          case _t:
            var i = e.displayName || null;
            return i !== null ? i : jt(e.type) || "Memo";
          case yt: {
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
    function ns(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Si(e) {
      return e.displayName || "Context";
    }
    function ht(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case $e:
          return "Cache";
        case le:
          var i = a;
          return Si(i) + ".Consumer";
        case ue:
          var l = a;
          return Si(l._context) + ".Provider";
        case it:
          return "DehydratedFragment";
        case pe:
          return ns(a, a.render, "ForwardRef");
        case K:
          return "Fragment";
        case F:
          return a;
        case V:
          return "Portal";
        case P:
          return "Root";
        case X:
          return "Text";
        case Ue:
          return jt(a);
        case ae:
          return a === Xa ? "StrictMode" : "Mode";
        case Z:
          return "Offscreen";
        case _e:
          return "Profiler";
        case Y:
          return "Scope";
        case ve:
          return "Suspense";
        case Se:
          return "SuspenseList";
        case Le:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case b:
        case x:
        case qe:
        case M:
        case be:
        case Re:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var su = h.ReactDebugCurrentFrame, sr = null, _i = !1;
    function Mr() {
      {
        if (sr === null)
          return null;
        var e = sr._debugOwner;
        if (e !== null && typeof e < "u")
          return ht(e);
      }
      return null;
    }
    function Ci() {
      return sr === null ? "" : Gi(sr);
    }
    function pn() {
      su.getCurrentStack = null, sr = null, _i = !1;
    }
    function Xt(e) {
      su.getCurrentStack = e === null ? null : Ci, sr = e, _i = !1;
    }
    function wo() {
      return sr;
    }
    function Qn(e) {
      _i = e;
    }
    function Ar(e) {
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
          return wn(e), e;
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
    function rs(e, t) {
      dl[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function as(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function xo(e) {
      return e._valueTracker;
    }
    function pl(e) {
      e._valueTracker = null;
    }
    function sd(e) {
      var t = "";
      return e && (as(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Da(e) {
      var t = as(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      wn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(p) {
            wn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            wn(p), i = "" + p;
          },
          stopTracking: function() {
            pl(e), delete e[t];
          }
        };
        return f;
      }
    }
    function ri(e) {
      xo(e) || (e._valueTracker = Da(e));
    }
    function Ei(e) {
      if (!e)
        return !1;
      var t = xo(e);
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
    var cu = !1, fu = !1, ko = !1, vl = !1;
    function du(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function pu(e, t) {
      var a = e, i = t.checked, l = Rt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function ai(e, t) {
      rs("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !fu && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component", t.type), fu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !cu && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component", t.type), cu = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Oa(t.value != null ? t.value : i),
        controlled: du(t)
      };
    }
    function S(e, t) {
      var a = e, i = t.checked;
      i != null && Dr(a, "checked", i, !1);
    }
    function O(e, t) {
      var a = e;
      {
        var i = du(t);
        !a._wrapperState.controlled && i && !vl && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), vl = !0), a._wrapperState.controlled && !i && !ko && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ko = !0);
      }
      S(e, t);
      var l = Oa(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = Ar(l)) : a.value !== Ar(l) && (a.value = Ar(l));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? rt(a, t.type, l) : t.hasOwnProperty("defaultValue") && rt(a, t.type, Oa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function G(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, s = l === "submit" || l === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Ar(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function J(e, t) {
      var a = e;
      O(a, t), Ee(a, t);
    }
    function Ee(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Yn(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var f = l[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Kh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Ei(f), O(f, p);
          }
        }
      }
    }
    function rt(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || La(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Ar(e._wrapperState.initialValue) : e.defaultValue !== Ar(a) && (e.defaultValue = Ar(a)));
    }
    var Oe = !1, lt = !1, Ot = !1;
    function zt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? v.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || lt || (lt = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Ot || (Ot = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Oe && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Oe = !0);
    }
    function sn(e, t) {
      t.value != null && e.setAttribute("value", Ar(Oa(t.value)));
    }
    var Jt = Array.isArray;
    function bt(e) {
      return Jt(e);
    }
    var Zt;
    Zt = !1;
    function gn() {
      var e = Mr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Oo = ["value", "defaultValue"];
    function is(e) {
      {
        rs("select", e);
        for (var t = 0; t < Oo.length; t++) {
          var a = Oo[t];
          if (e[a] != null) {
            var i = bt(e[a]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, gn()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, gn());
          }
        }
      }
    }
    function Qi(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var g = 0; g < l.length; g++) {
          var C = f.hasOwnProperty("$" + l[g].value);
          l[g].selected !== C && (l[g].selected = C), C && i && (l[g].defaultSelected = !0);
        }
      } else {
        for (var R = Ar(Oa(a)), j = null, A = 0; A < l.length; A++) {
          if (l[A].value === R) {
            l[A].selected = !0, i && (l[A].defaultSelected = !0);
            return;
          }
          j === null && !l[A].disabled && (j = l[A]);
        }
        j !== null && (j.selected = !0);
      }
    }
    function os(e, t) {
      return Rt({}, t, {
        value: void 0
      });
    }
    function hl(e, t) {
      var a = e;
      is(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Zt && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Zt = !0);
    }
    function cd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Qi(a, !!t.multiple, i, !1) : t.defaultValue != null && Qi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Cc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? Qi(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? Qi(a, !!t.multiple, t.defaultValue, !0) : Qi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function fd(e, t) {
      var a = e, i = t.value;
      i != null && Qi(a, !!t.multiple, i, !1);
    }
    var Sv = !1;
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
      rs("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Sv && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component"), Sv = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, s = t.defaultValue;
        if (l != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (bt(l)) {
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
    function _v(e, t) {
      var a = e, i = Oa(t.value), l = Oa(t.defaultValue);
      if (i != null) {
        var s = Ar(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = Ar(l));
    }
    function Cv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function xy(e, t) {
      _v(e, t);
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
    var Ev = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, Ec, Rv = Ev(function(e, t) {
      if (e.namespaceURI === hd && !("innerHTML" in e)) {
        Ec = Ec || document.createElement("div"), Ec.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Ec.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Xr = 1, Ki = 3, jn = 8, Xi = 9, gd = 11, vu = function(e, t) {
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
    }, us = {
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
    var bv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(us).forEach(function(e) {
      bv.forEach(function(t) {
        us[Tv(t, e)] = us[e];
      });
    });
    function Rc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(us.hasOwnProperty(e) && us[e]) ? t + "px" : (pa(t, e), ("" + t).trim());
    }
    var wv = /([A-Z])/g, xv = /^ms-/;
    function hu(e) {
      return e.replace(wv, "-$1").toLowerCase().replace(xv, "-ms-");
    }
    var kv = function() {
    };
    {
      var ky = /^(?:webkit|moz|o)[A-Z]/, Oy = /^-ms-/, Ov = /-(.)/g, Sd = /;\s*$/, Ri = {}, ml = {}, Dv = !1, ss = !1, Dy = function(e) {
        return e.replace(Ov, function(t, a) {
          return a.toUpperCase();
        });
      }, Lv = function(e) {
        Ri.hasOwnProperty(e) && Ri[e] || (Ri[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Dy(e.replace(Oy, "ms-"))
        ));
      }, _d = function(e) {
        Ri.hasOwnProperty(e) && Ri[e] || (Ri[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Cd = function(e, t) {
        ml.hasOwnProperty(t) && ml[t] || (ml[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Sd, "")));
      }, Nv = function(e, t) {
        Dv || (Dv = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Mv = function(e, t) {
        ss || (ss = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      kv = function(e, t) {
        e.indexOf("-") > -1 ? Lv(e) : ky.test(e) ? _d(e) : Sd.test(t) && Cd(e, t), typeof t == "number" && (isNaN(t) ? Nv(e, t) : isFinite(t) || Mv(e, t));
      };
    }
    var Av = kv;
    function Ly(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : hu(i)) + ":", t += Rc(i, l, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Uv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || Av(i, t[i]);
          var s = Rc(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Ny(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function jv(e) {
      var t = {};
      for (var a in e)
        for (var i = ls[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function My(e, t) {
      {
        if (!t)
          return;
        var a = jv(e), i = jv(t), l = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var g = f + "," + p;
            if (l[g])
              continue;
            l[g] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Ny(e[f]) ? "Removing" : "Updating", f, p);
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
    }, cs = Rt({
      menuitem: !0
    }, ii), zv = "__html";
    function Tc(e, t) {
      if (t) {
        if (cs[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(zv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Do(e, t) {
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
    var fs = {
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
    }, mu = {}, Ay = new RegExp("^(aria)-[" + we + "]*$"), yu = new RegExp("^(aria)[A-Z][" + we + "]*$");
    function Ed(e, t) {
      {
        if (Or.call(mu, t) && mu[t])
          return !0;
        if (yu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = bc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), mu[t] = !0, !0;
          if (t !== i)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), mu[t] = !0, !0;
        }
        if (Ay.test(t)) {
          var l = t.toLowerCase(), s = bc.hasOwnProperty(l) ? l : null;
          if (s == null)
            return mu[t] = !0, !1;
          if (t !== s)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), mu[t] = !0, !0;
        }
      }
      return !0;
    }
    function ds(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = Ed(e, i);
          l || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Rd(e, t) {
      Do(e, t) || ds(e, t);
    }
    var Td = !1;
    function wc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Td && (Td = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var yl = function() {
    };
    {
      var cr = {}, bd = /^on./, xc = /^on[^A-Z]/, Pv = new RegExp("^(aria)-[" + we + "]*$"), Fv = new RegExp("^(aria)[A-Z][" + we + "]*$");
      yl = function(e, t, a, i) {
        if (Or.call(cr, t) && cr[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), cr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(l) ? f[l] : null;
          if (p != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, p), cr[t] = !0, !0;
          if (bd.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), cr[t] = !0, !0;
        } else if (bd.test(t))
          return xc.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), cr[t] = !0, !0;
        if (Pv.test(t) || Fv.test(t))
          return !0;
        if (l === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), cr[t] = !0, !0;
        if (l === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), cr[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), cr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), cr[t] = !0, !0;
        var g = ln(t), C = g !== null && g.type === Gn;
        if (fs.hasOwnProperty(l)) {
          var R = fs[l];
          if (R !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, R), cr[t] = !0, !0;
        } else if (!C && t !== l)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), cr[t] = !0, !0;
        return typeof a == "boolean" && fn(t, a, g, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), cr[t] = !0, !0) : C ? !0 : fn(t, a, g, !1) ? (cr[t] = !0, !1) : ((a === "false" || a === "true") && g !== null && g.type === Un && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), cr[t] = !0), !0);
      };
    }
    var Vv = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var s = yl(e, l, t[l], a);
          s || i.push(l);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Hv(e, t, a) {
      Do(e, t) || Vv(e, t, a);
    }
    var wd = 1, kc = 2, Na = 4, xd = wd | kc | Na, gl = null;
    function Uy(e) {
      gl !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), gl = e;
    }
    function jy() {
      gl === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), gl = null;
    }
    function ps(e) {
      return e === gl;
    }
    function kd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ki ? t.parentNode : t;
    }
    var Oc = null, Sl = null, Yt = null;
    function Dc(e) {
      var t = Pu(e);
      if (t) {
        if (typeof Oc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Kh(a);
          Oc(t.stateNode, t.type, i);
        }
      }
    }
    function Lc(e) {
      Oc = e;
    }
    function gu(e) {
      Sl ? Yt ? Yt.push(e) : Yt = [e] : Sl = e;
    }
    function Iv() {
      return Sl !== null || Yt !== null;
    }
    function Nc() {
      if (Sl) {
        var e = Sl, t = Yt;
        if (Sl = null, Yt = null, Dc(e), t)
          for (var a = 0; a < t.length; a++)
            Dc(t[a]);
      }
    }
    var Su = function(e, t) {
      return e(t);
    }, vs = function() {
    }, Lo = !1;
    function Bv() {
      var e = Iv();
      e && (vs(), Nc());
    }
    function $v(e, t, a) {
      if (Lo)
        return e(t, a);
      Lo = !0;
      try {
        return Su(e, t, a);
      } finally {
        Lo = !1, Bv();
      }
    }
    function zy(e, t, a) {
      Su = e, vs = a;
    }
    function Wv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Mc(e, t, a) {
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
          return !!(a.disabled && Wv(t));
        default:
          return !1;
      }
    }
    function No(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Kh(a);
      if (i === null)
        return null;
      var l = i[t];
      if (Mc(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var hs = !1;
    if (An)
      try {
        var _l = {};
        Object.defineProperty(_l, "passive", {
          get: function() {
            hs = !0;
          }
        }), window.addEventListener("test", _l, _l), window.removeEventListener("test", _l, _l);
      } catch {
        hs = !1;
      }
    function Ac(e, t, a, i, l, s, f, p, g) {
      var C = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, C);
      } catch (R) {
        this.onError(R);
      }
    }
    var Uc = Ac;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Od = document.createElement("react");
      Uc = function(t, a, i, l, s, f, p, g, C) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var R = document.createEvent("Event"), j = !1, A = !0, W = window.event, q = Object.getOwnPropertyDescriptor(window, "event");
        function te() {
          Od.removeEventListener(ne, at, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = W);
        }
        var Me = Array.prototype.slice.call(arguments, 3);
        function at() {
          j = !0, te(), a.apply(i, Me), A = !1;
        }
        var Xe, Ut = !1, Dt = !1;
        function I(B) {
          if (Xe = B.error, Ut = !0, Xe === null && B.colno === 0 && B.lineno === 0 && (Dt = !0), B.defaultPrevented && Xe != null && typeof Xe == "object")
            try {
              Xe._suppressLogging = !0;
            } catch {
            }
        }
        var ne = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", I), Od.addEventListener(ne, at, !1), R.initEvent(ne, !1, !1), Od.dispatchEvent(R), q && Object.defineProperty(window, "event", q), j && A && (Ut ? Dt && (Xe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Xe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Xe)), window.removeEventListener("error", I), !j)
          return te(), Ac.apply(this, arguments);
      };
    }
    var Yv = Uc, _u = !1, jc = null, Cu = !1, Ti = null, Gv = {
      onError: function(e) {
        _u = !0, jc = e;
      }
    };
    function Mo(e, t, a, i, l, s, f, p, g) {
      _u = !1, jc = null, Yv.apply(Gv, arguments);
    }
    function bi(e, t, a, i, l, s, f, p, g) {
      if (Mo.apply(this, arguments), _u) {
        var C = ys();
        Cu || (Cu = !0, Ti = C);
      }
    }
    function ms() {
      if (Cu) {
        var e = Ti;
        throw Cu = !1, Ti = null, e;
      }
    }
    function Ji() {
      return _u;
    }
    function ys() {
      if (_u) {
        var e = jc;
        return _u = !1, jc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Eu(e) {
      return e._reactInternals;
    }
    function Py(e) {
      return e._reactInternals !== void 0;
    }
    function Cl(e, t) {
      e._reactInternals = t;
    }
    var et = (
      /*                      */
      0
    ), oi = (
      /*                */
      1
    ), Sn = (
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
    ), cn = (
      /*                     */
      64
    ), Je = (
      /*                   */
      128
    ), br = (
      /*            */
      256
    ), Rn = (
      /*                          */
      512
    ), qn = (
      /*                     */
      1024
    ), Jr = (
      /*                      */
      2048
    ), Zr = (
      /*                    */
      4096
    ), zn = (
      /*                   */
      8192
    ), Ru = (
      /*             */
      16384
    ), Qv = (
      /*               */
      32767
    ), gs = (
      /*                   */
      32768
    ), tr = (
      /*                */
      65536
    ), zc = (
      /* */
      131072
    ), wi = (
      /*                       */
      1048576
    ), Tu = (
      /*                    */
      2097152
    ), Zi = (
      /*                 */
      4194304
    ), Pc = (
      /*                */
      8388608
    ), Ao = (
      /*               */
      16777216
    ), xi = (
      /*              */
      33554432
    ), Uo = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Nt | qn | 0
    ), jo = Sn | Nt | Ma | Aa | Rn | Zr | zn, zo = Nt | cn | Rn | zn, eo = Jr | Ma, Pn = Zi | Pc | Tu, Ua = h.ReactCurrentOwner;
    function ya(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Sn | Zr)) !== et && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === P ? a : null;
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
    function Oi(e) {
      return e.tag === P ? e.stateNode.containerInfo : null;
    }
    function El(e) {
      return ya(e) === e;
    }
    function qv(e) {
      {
        var t = Ua.current;
        if (t !== null && t.tag === b) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ht(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = Eu(e);
      return l ? ya(l) === l : !1;
    }
    function Fc(e) {
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
              return Fc(s), e;
            if (g === l)
              return Fc(s), t;
            g = g.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = s, l = f;
        else {
          for (var C = !1, R = s.child; R; ) {
            if (R === i) {
              C = !0, i = s, l = f;
              break;
            }
            if (R === l) {
              C = !0, l = s, i = f;
              break;
            }
            R = R.sibling;
          }
          if (!C) {
            for (R = f.child; R; ) {
              if (R === i) {
                C = !0, i = f, l = s;
                break;
              }
              if (R === l) {
                C = !0, l = f, i = s;
                break;
              }
              R = R.sibling;
            }
            if (!C)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== P)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ea(e) {
      var t = Vc(e);
      return t !== null ? ta(t) : null;
    }
    function ta(e) {
      if (e.tag === F || e.tag === X)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = ta(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function hn(e) {
      var t = Vc(e);
      return t !== null ? ja(t) : null;
    }
    function ja(e) {
      if (e.tag === F || e.tag === X)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== V) {
          var a = ja(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Dd = m.unstable_scheduleCallback, Kv = m.unstable_cancelCallback, Ld = m.unstable_shouldYield, Nd = m.unstable_requestPaint, Kn = m.unstable_now, Hc = m.unstable_getCurrentPriorityLevel, Ss = m.unstable_ImmediatePriority, Po = m.unstable_UserBlockingPriority, to = m.unstable_NormalPriority, Fy = m.unstable_LowPriority, Rl = m.unstable_IdlePriority, Ic = m.unstable_yieldValue, Xv = m.unstable_setDisableYieldValue, Tl = null, kn = null, Ne = null, ga = !1, na = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function bu(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ze && (e = Rt({}, e, {
          getLaneLabelMap: bl,
          injectProfilingHooks: za
        })), Tl = t.inject(e), kn = t;
      } catch (a) {
        y("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Md(e, t) {
      if (kn && typeof kn.onScheduleFiberRoot == "function")
        try {
          kn.onScheduleFiberRoot(Tl, e, t);
        } catch (a) {
          ga || (ga = !0, y("React instrumentation encountered an error: %s", a));
        }
    }
    function Ad(e, t) {
      if (kn && typeof kn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Je) === Je;
          if (Ve) {
            var i;
            switch (t) {
              case Ur:
                i = Ss;
                break;
              case Li:
                i = Po;
                break;
              case Pa:
                i = to;
                break;
              case Fa:
                i = Rl;
                break;
              default:
                i = to;
                break;
            }
            kn.onCommitFiberRoot(Tl, e, i, a);
          }
        } catch (l) {
          ga || (ga = !0, y("React instrumentation encountered an error: %s", l));
        }
    }
    function Ud(e) {
      if (kn && typeof kn.onPostCommitFiberRoot == "function")
        try {
          kn.onPostCommitFiberRoot(Tl, e);
        } catch (t) {
          ga || (ga = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function jd(e) {
      if (kn && typeof kn.onCommitFiberUnmount == "function")
        try {
          kn.onCommitFiberUnmount(Tl, e);
        } catch (t) {
          ga || (ga = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function _n(e) {
      if (typeof Ic == "function" && (Xv(e), k(e)), kn && typeof kn.setStrictMode == "function")
        try {
          kn.setStrictMode(Tl, e);
        } catch (t) {
          ga || (ga = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function za(e) {
      Ne = e;
    }
    function bl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < kl; a++) {
          var i = th(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function zd(e) {
      Ne !== null && typeof Ne.markCommitStarted == "function" && Ne.markCommitStarted(e);
    }
    function Pd() {
      Ne !== null && typeof Ne.markCommitStopped == "function" && Ne.markCommitStopped();
    }
    function Sa(e) {
      Ne !== null && typeof Ne.markComponentRenderStarted == "function" && Ne.markComponentRenderStarted(e);
    }
    function _a() {
      Ne !== null && typeof Ne.markComponentRenderStopped == "function" && Ne.markComponentRenderStopped();
    }
    function Fd(e) {
      Ne !== null && typeof Ne.markComponentPassiveEffectMountStarted == "function" && Ne.markComponentPassiveEffectMountStarted(e);
    }
    function Jv() {
      Ne !== null && typeof Ne.markComponentPassiveEffectMountStopped == "function" && Ne.markComponentPassiveEffectMountStopped();
    }
    function no(e) {
      Ne !== null && typeof Ne.markComponentPassiveEffectUnmountStarted == "function" && Ne.markComponentPassiveEffectUnmountStarted(e);
    }
    function Fo() {
      Ne !== null && typeof Ne.markComponentPassiveEffectUnmountStopped == "function" && Ne.markComponentPassiveEffectUnmountStopped();
    }
    function Bc(e) {
      Ne !== null && typeof Ne.markComponentLayoutEffectMountStarted == "function" && Ne.markComponentLayoutEffectMountStarted(e);
    }
    function Zv() {
      Ne !== null && typeof Ne.markComponentLayoutEffectMountStopped == "function" && Ne.markComponentLayoutEffectMountStopped();
    }
    function _s(e) {
      Ne !== null && typeof Ne.markComponentLayoutEffectUnmountStarted == "function" && Ne.markComponentLayoutEffectUnmountStarted(e);
    }
    function Vd() {
      Ne !== null && typeof Ne.markComponentLayoutEffectUnmountStopped == "function" && Ne.markComponentLayoutEffectUnmountStopped();
    }
    function Cs(e, t, a) {
      Ne !== null && typeof Ne.markComponentErrored == "function" && Ne.markComponentErrored(e, t, a);
    }
    function Di(e, t, a) {
      Ne !== null && typeof Ne.markComponentSuspended == "function" && Ne.markComponentSuspended(e, t, a);
    }
    function Es(e) {
      Ne !== null && typeof Ne.markLayoutEffectsStarted == "function" && Ne.markLayoutEffectsStarted(e);
    }
    function Rs() {
      Ne !== null && typeof Ne.markLayoutEffectsStopped == "function" && Ne.markLayoutEffectsStopped();
    }
    function wl(e) {
      Ne !== null && typeof Ne.markPassiveEffectsStarted == "function" && Ne.markPassiveEffectsStarted(e);
    }
    function Hd() {
      Ne !== null && typeof Ne.markPassiveEffectsStopped == "function" && Ne.markPassiveEffectsStopped();
    }
    function xl(e) {
      Ne !== null && typeof Ne.markRenderStarted == "function" && Ne.markRenderStarted(e);
    }
    function eh() {
      Ne !== null && typeof Ne.markRenderYielded == "function" && Ne.markRenderYielded();
    }
    function $c() {
      Ne !== null && typeof Ne.markRenderStopped == "function" && Ne.markRenderStopped();
    }
    function Cn(e) {
      Ne !== null && typeof Ne.markRenderScheduled == "function" && Ne.markRenderScheduled(e);
    }
    function Wc(e, t) {
      Ne !== null && typeof Ne.markForceUpdateScheduled == "function" && Ne.markForceUpdateScheduled(e, t);
    }
    function Ts(e, t) {
      Ne !== null && typeof Ne.markStateUpdateScheduled == "function" && Ne.markStateUpdateScheduled(e, t);
    }
    var tt = (
      /*                         */
      0
    ), xt = (
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
    ), Fn = Math.clz32 ? Math.clz32 : bs, nr = Math.log, Yc = Math.LN2;
    function bs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (nr(t) / Yc | 0) | 0;
    }
    var kl = 31, ce = (
      /*                        */
      0
    ), Pt = (
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
    ), wr = (
      /*            */
      8
    ), On = (
      /*                     */
      16
    ), ro = (
      /*                */
      32
    ), Ho = (
      /*                       */
      4194240
    ), Ol = (
      /*                        */
      64
    ), Gc = (
      /*                        */
      128
    ), Qc = (
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
    ), Dl = (
      /*                       */
      32768
    ), tf = (
      /*                       */
      65536
    ), wu = (
      /*                       */
      131072
    ), xu = (
      /*                       */
      262144
    ), nf = (
      /*                       */
      524288
    ), ws = (
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
    ), ks = (
      /*                             */
      16777216
    ), of = (
      /*                             */
      33554432
    ), lf = (
      /*                             */
      67108864
    ), Id = Ll, Os = (
      /*          */
      134217728
    ), Bd = (
      /*                          */
      268435455
    ), Ds = (
      /*               */
      268435456
    ), Nl = (
      /*                        */
      536870912
    ), ra = (
      /*                   */
      1073741824
    );
    function th(e) {
      {
        if (e & ct)
          return "Sync";
        if (e & Vo)
          return "InputContinuousHydration";
        if (e & li)
          return "InputContinuous";
        if (e & wr)
          return "DefaultHydration";
        if (e & On)
          return "Default";
        if (e & ro)
          return "TransitionHydration";
        if (e & Ho)
          return "Transition";
        if (e & xs)
          return "Retry";
        if (e & Os)
          return "SelectiveHydration";
        if (e & Ds)
          return "IdleHydration";
        if (e & Nl)
          return "Idle";
        if (e & ra)
          return "Offscreen";
      }
    }
    var an = -1, Ml = Ol, uf = Ll;
    function Ls(e) {
      switch (Io(e)) {
        case ct:
          return ct;
        case Vo:
          return Vo;
        case li:
          return li;
        case wr:
          return wr;
        case On:
          return On;
        case ro:
          return ro;
        case Ol:
        case Gc:
        case Qc:
        case qc:
        case Kc:
        case Xc:
        case Jc:
        case Zc:
        case ef:
        case Dl:
        case tf:
        case wu:
        case xu:
        case nf:
        case ws:
        case rf:
          return e & Ho;
        case Ll:
        case af:
        case ks:
        case of:
        case lf:
          return e & xs;
        case Os:
          return Os;
        case Ds:
          return Ds;
        case Nl:
          return Nl;
        case ra:
          return ra;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function sf(e, t) {
      var a = e.pendingLanes;
      if (a === ce)
        return ce;
      var i = ce, l = e.suspendedLanes, s = e.pingedLanes, f = a & Bd;
      if (f !== ce) {
        var p = f & ~l;
        if (p !== ce)
          i = Ls(p);
        else {
          var g = f & s;
          g !== ce && (i = Ls(g));
        }
      } else {
        var C = a & ~l;
        C !== ce ? i = Ls(C) : s !== ce && (i = Ls(s));
      }
      if (i === ce)
        return ce;
      if (t !== ce && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === ce) {
        var R = Io(i), j = Io(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          R >= j || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          R === On && (j & Ho) !== ce
        )
          return t;
      }
      (i & li) !== ce && (i |= a & On);
      var A = e.entangledLanes;
      if (A !== ce)
        for (var W = e.entanglements, q = i & A; q > 0; ) {
          var te = Vn(q), Me = 1 << te;
          i |= W[te], q &= ~Me;
        }
      return i;
    }
    function ui(e, t) {
      for (var a = e.eventTimes, i = an; t > 0; ) {
        var l = Vn(t), s = 1 << l, f = a[l];
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
        case wr:
        case On:
        case ro:
        case Ol:
        case Gc:
        case Qc:
        case qc:
        case Kc:
        case Xc:
        case Jc:
        case Zc:
        case ef:
        case Dl:
        case tf:
        case wu:
        case xu:
        case nf:
        case ws:
        case rf:
          return t + 5e3;
        case Ll:
        case af:
        case ks:
        case of:
        case lf:
          return an;
        case Os:
        case Ds:
        case Nl:
        case ra:
          return an;
        default:
          return y("Should have found matching lanes. This is a bug in React."), an;
      }
    }
    function cf(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Vn(f), g = 1 << p, C = s[p];
        C === an ? ((g & i) === ce || (g & l) !== ce) && (s[p] = $d(g, t)) : C <= t && (e.expiredLanes |= g), f &= ~g;
      }
    }
    function nh(e) {
      return Ls(e.pendingLanes);
    }
    function ff(e) {
      var t = e.pendingLanes & ~ra;
      return t !== ce ? t : t & ra ? ra : ce;
    }
    function rh(e) {
      return (e & ct) !== ce;
    }
    function Ns(e) {
      return (e & Bd) !== ce;
    }
    function Al(e) {
      return (e & xs) === e;
    }
    function Wd(e) {
      var t = ct | li | On;
      return (e & t) === ce;
    }
    function Yd(e) {
      return (e & Ho) === e;
    }
    function df(e, t) {
      var a = Vo | li | wr | On;
      return (t & a) !== ce;
    }
    function ah(e, t) {
      return (t & e.expiredLanes) !== ce;
    }
    function Gd(e) {
      return (e & Ho) !== ce;
    }
    function Qd() {
      var e = Ml;
      return Ml <<= 1, (Ml & Ho) === ce && (Ml = Ol), e;
    }
    function ih() {
      var e = uf;
      return uf <<= 1, (uf & xs) === ce && (uf = Ll), e;
    }
    function Io(e) {
      return e & -e;
    }
    function Ms(e) {
      return Io(e);
    }
    function Vn(e) {
      return 31 - Fn(e);
    }
    function fr(e) {
      return Vn(e);
    }
    function aa(e, t) {
      return (e & t) !== ce;
    }
    function Ul(e, t) {
      return (e & t) === t;
    }
    function Et(e, t) {
      return e | t;
    }
    function As(e, t) {
      return e & ~t;
    }
    function qd(e, t) {
      return e & t;
    }
    function oh(e) {
      return e;
    }
    function lh(e, t) {
      return e !== Pt && e < t ? e : t;
    }
    function Us(e) {
      for (var t = [], a = 0; a < kl; a++)
        t.push(e);
      return t;
    }
    function ku(e, t, a) {
      e.pendingLanes |= t, t !== Nl && (e.suspendedLanes = ce, e.pingedLanes = ce);
      var i = e.eventTimes, l = fr(t);
      i[l] = a;
    }
    function uh(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = Vn(i), s = 1 << l;
        a[l] = an, i &= ~s;
      }
    }
    function pf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Kd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ce, e.pingedLanes = ce, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Vn(f), g = 1 << p;
        i[p] = ce, l[p] = an, s[p] = an, f &= ~g;
      }
    }
    function vf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var s = Vn(l), f = 1 << s;
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
        case On:
          i = wr;
          break;
        case Ol:
        case Gc:
        case Qc:
        case qc:
        case Kc:
        case Xc:
        case Jc:
        case Zc:
        case ef:
        case Dl:
        case tf:
        case wu:
        case xu:
        case nf:
        case ws:
        case rf:
        case Ll:
        case af:
        case ks:
        case of:
        case lf:
          i = ro;
          break;
        case Nl:
          i = Ds;
          break;
        default:
          i = Pt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Pt ? Pt : i;
    }
    function js(e, t, a) {
      if (na)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = fr(a), s = 1 << l, f = i[l];
          f.add(t), a &= ~s;
        }
    }
    function sh(e, t) {
      if (na)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = fr(t), s = 1 << l, f = a[l];
          f.size > 0 && (f.forEach(function(p) {
            var g = p.alternate;
            (g === null || !i.has(g)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Jd(e, t) {
      return null;
    }
    var Ur = ct, Li = li, Pa = On, Fa = Nl, zs = Pt;
    function Va() {
      return zs;
    }
    function Hn(e) {
      zs = e;
    }
    function ch(e, t) {
      var a = zs;
      try {
        return zs = e, t();
      } finally {
        zs = a;
      }
    }
    function fh(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Ps(e, t) {
      return e > t ? e : t;
    }
    function rr(e, t) {
      return e !== 0 && e < t;
    }
    function dh(e) {
      var t = Io(e);
      return rr(Ur, t) ? rr(Li, t) ? Ns(t) ? Pa : Fa : Li : Ur;
    }
    function hf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Fs;
    function xr(e) {
      Fs = e;
    }
    function Vy(e) {
      Fs(e);
    }
    var Ie;
    function Ou(e) {
      Ie = e;
    }
    var mf;
    function ph(e) {
      mf = e;
    }
    var vh;
    function Vs(e) {
      vh = e;
    }
    var Hs;
    function Zd(e) {
      Hs = e;
    }
    var yf = !1, Is = [], ao = null, Ni = null, Mi = null, Dn = /* @__PURE__ */ new Map(), jr = /* @__PURE__ */ new Map(), zr = [], hh = [
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
    function mh(e) {
      return hh.indexOf(e) > -1;
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
    function ia(e, t, a, i, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = si(t, a, i, l, s);
        if (t !== null) {
          var p = Pu(t);
          p !== null && Ie(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var g = e.targetContainers;
      return l !== null && g.indexOf(l) === -1 && g.push(l), e;
    }
    function Hy(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return ao = ia(ao, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = l;
          return Ni = ia(Ni, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = l;
          return Mi = ia(Mi, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var g = l, C = g.pointerId;
          return Dn.set(C, ia(Dn.get(C) || null, e, t, a, i, g)), !0;
        }
        case "gotpointercapture": {
          var R = l, j = R.pointerId;
          return jr.set(j, ia(jr.get(j) || null, e, t, a, i, R)), !0;
        }
      }
      return !1;
    }
    function tp(e) {
      var t = ec(e.target);
      if (t !== null) {
        var a = ya(t);
        if (a !== null) {
          var i = a.tag;
          if (i === ve) {
            var l = ki(a);
            if (l !== null) {
              e.blockedOn = l, Hs(e.priority, function() {
                mf(a);
              });
              return;
            }
          } else if (i === P) {
            var s = a.stateNode;
            if (hf(s)) {
              e.blockedOn = Oi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function yh(e) {
      for (var t = vh(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < zr.length && rr(t, zr[i].priority); i++)
        ;
      zr.splice(i, 0, a), i === 0 && tp(a);
    }
    function Bs(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Lu(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          Uy(s), l.target.dispatchEvent(s), jy();
        } else {
          var f = Pu(i);
          return f !== null && Ie(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function np(e, t, a) {
      Bs(e) && a.delete(t);
    }
    function Iy() {
      yf = !1, ao !== null && Bs(ao) && (ao = null), Ni !== null && Bs(Ni) && (Ni = null), Mi !== null && Bs(Mi) && (Mi = null), Dn.forEach(np), jr.forEach(np);
    }
    function Bo(e, t) {
      e.blockedOn === t && (e.blockedOn = null, yf || (yf = !0, m.unstable_scheduleCallback(m.unstable_NormalPriority, Iy)));
    }
    function jl(e) {
      if (Is.length > 0) {
        Bo(Is[0], e);
        for (var t = 1; t < Is.length; t++) {
          var a = Is[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      ao !== null && Bo(ao, e), Ni !== null && Bo(Ni, e), Mi !== null && Bo(Mi, e);
      var i = function(p) {
        return Bo(p, e);
      };
      Dn.forEach(i), jr.forEach(i);
      for (var l = 0; l < zr.length; l++) {
        var s = zr[l];
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
    function Xn(e) {
      Mt = !!e;
    }
    function In() {
      return Mt;
    }
    function pr(e, t, a) {
      var i = gf(t), l;
      switch (i) {
        case Ur:
          l = Ca;
          break;
        case Li:
          l = Du;
          break;
        case Pa:
        default:
          l = Ln;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function Ca(e, t, a, i) {
      var l = Va(), s = dr.transition;
      dr.transition = null;
      try {
        Hn(Ur), Ln(e, t, a, i);
      } finally {
        Hn(l), dr.transition = s;
      }
    }
    function Du(e, t, a, i) {
      var l = Va(), s = dr.transition;
      dr.transition = null;
      try {
        Hn(Li), Ln(e, t, a, i);
      } finally {
        Hn(l), dr.transition = s;
      }
    }
    function Ln(e, t, a, i) {
      Mt && $s(e, t, a, i);
    }
    function $s(e, t, a, i) {
      var l = Lu(e, t, a, i);
      if (l === null) {
        ig(e, t, i, Ai, a), ep(e, i);
        return;
      }
      if (Hy(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (ep(e, i), t & Na && mh(e)) {
        for (; l !== null; ) {
          var s = Pu(l);
          s !== null && Vy(s);
          var f = Lu(e, t, a, i);
          if (f === null && ig(e, t, i, Ai, a), f === l)
            break;
          l = f;
        }
        l !== null && i.stopPropagation();
        return;
      }
      ig(e, t, i, null, a);
    }
    var Ai = null;
    function Lu(e, t, a, i) {
      Ai = null;
      var l = kd(i), s = ec(l);
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
          } else if (p === P) {
            var C = f.stateNode;
            if (hf(C))
              return Oi(f);
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
          var t = Hc();
          switch (t) {
            case Ss:
              return Ur;
            case Po:
              return Li;
            case to:
            case Fy:
              return Pa;
            case Rl:
              return Fa;
            default:
              return Pa;
          }
        }
        default:
          return Pa;
      }
    }
    function Ws(e, t, a) {
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
    function Nu(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Ea = null, Mu = null, zl = null;
    function $o(e) {
      return Ea = e, Mu = Ys(), !0;
    }
    function Sf() {
      Ea = null, Mu = null, zl = null;
    }
    function io() {
      if (zl)
        return zl;
      var e, t = Mu, a = t.length, i, l = Ys(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === l[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return zl = l.slice(e, p), zl;
    }
    function Ys() {
      return "value" in Ea ? Ea.value : Ea.textContent;
    }
    function Wo(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Au() {
      return !0;
    }
    function Gs() {
      return !1;
    }
    function kr(e) {
      function t(a, i, l, s, f) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var g = e[p];
            g ? this[p] = g(s) : this[p] = s[p];
          }
        var C = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return C ? this.isDefaultPrevented = Au : this.isDefaultPrevented = Gs, this.isPropagationStopped = Gs, this;
      }
      return Rt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Au);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Au);
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
        isPersistent: Au
      }), t;
    }
    var Bn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ui = kr(Bn), Pr = Rt({}, Bn, {
      view: 0,
      detail: 0
    }), la = kr(Pr), _f, Qs, Pl;
    function By(e) {
      e !== Pl && (Pl && e.type === "mousemove" ? (_f = e.screenX - Pl.screenX, Qs = e.screenY - Pl.screenY) : (_f = 0, Qs = 0), Pl = e);
    }
    var ci = Rt({}, Pr, {
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
      getModifierState: mn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (By(e), _f);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Qs;
      }
    }), ap = kr(ci), ip = Rt({}, ci, {
      dataTransfer: 0
    }), Fl = kr(ip), op = Rt({}, Pr, {
      relatedTarget: 0
    }), oo = kr(op), gh = Rt({}, Bn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Sh = kr(gh), lp = Rt({}, Bn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Cf = kr(lp), $y = Rt({}, Bn, {
      data: 0
    }), _h = kr($y), Ch = _h, Eh = {
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
    function Wy(e) {
      if (e.key) {
        var t = Eh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Wo(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Vl[e.keyCode] || "Unidentified" : "";
    }
    var Uu = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Rh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Uu[e];
      return i ? !!a[i] : !1;
    }
    function mn(e) {
      return Rh;
    }
    var Yy = Rt({}, Pr, {
      key: Wy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: mn,
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
    }), Th = kr(Yy), Gy = Rt({}, ci, {
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
    }), bh = kr(Gy), wh = Rt({}, Pr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: mn
    }), xh = kr(wh), Qy = Rt({}, Bn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ha = kr(Qy), up = Rt({}, ci, {
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
    }), qy = kr(up), Yo = [9, 13, 27, 32], qs = 229, lo = An && "CompositionEvent" in window, Go = null;
    An && "documentMode" in document && (Go = document.documentMode);
    var sp = An && "TextEvent" in window && !Go, Ef = An && (!lo || Go && Go > 8 && Go <= 11), kh = 32, Rf = String.fromCharCode(kh);
    function Ky() {
      dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), dt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), dt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), dt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var cp = !1;
    function Oh(e) {
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
    function bf(e, t) {
      return e === "keydown" && t.keyCode === qs;
    }
    function fp(e, t) {
      switch (e) {
        case "keyup":
          return Yo.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== qs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function wf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Dh(e) {
      return e.locale === "ko";
    }
    var Hl = !1;
    function dp(e, t, a, i, l) {
      var s, f;
      if (lo ? s = Tf(t) : Hl ? fp(t, i) && (s = "onCompositionEnd") : bf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Ef && !Dh(i) && (!Hl && s === "onCompositionStart" ? Hl = $o(l) : s === "onCompositionEnd" && Hl && (f = io()));
      var p = zh(a, s);
      if (p.length > 0) {
        var g = new _h(s, t, null, i, l);
        if (e.push({
          event: g,
          listeners: p
        }), f)
          g.data = f;
        else {
          var C = wf(i);
          C !== null && (g.data = C);
        }
      }
    }
    function xf(e, t) {
      switch (e) {
        case "compositionend":
          return wf(t);
        case "keypress":
          var a = t.which;
          return a !== kh ? null : (cp = !0, Rf);
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
          return Ef && !Dh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function kf(e, t, a, i, l) {
      var s;
      if (sp ? s = xf(t, i) : s = pp(t, i), !s)
        return null;
      var f = zh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Ch("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Lh(e, t, a, i, l, s, f) {
      dp(e, t, a, i, l), kf(e, t, a, i, l);
    }
    var Xy = {
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
    function Ks(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Xy[e.type] : t === "textarea";
    }
    function Jy(e) {
      if (!An)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Xs() {
      dt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Nh(e, t, a, i) {
      gu(i);
      var l = zh(t, "onChange");
      if (l.length > 0) {
        var s = new Ui("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: l
        });
      }
    }
    var Qo = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function o(e) {
      var t = [];
      Nh(t, n, e, kd(e)), $v(u, t);
    }
    function u(e) {
      __(e, 0);
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
    An && (_ = Jy("input") && (!document.documentMode || document.documentMode > 9));
    function w(e, t) {
      Qo = e, n = t, Qo.attachEvent("onpropertychange", Q);
    }
    function L() {
      Qo && (Qo.detachEvent("onpropertychange", Q), Qo = null, n = null);
    }
    function Q(e) {
      e.propertyName === "value" && c(n) && o(e);
    }
    function he(e, t, a) {
      e === "focusin" ? (L(), w(t, a)) : e === "focusout" && L();
    }
    function ye(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function de(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Pe(e, t) {
      if (e === "click")
        return c(t);
    }
    function We(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Qe(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || rt(e, "number", e.value);
    }
    function Nn(e, t, a, i, l, s, f) {
      var p = a ? Af(a) : window, g, C;
      if (r(p) ? g = d : Ks(p) ? _ ? g = We : (g = ye, C = he) : de(p) && (g = Pe), g) {
        var R = g(t, a);
        if (R) {
          Nh(e, R, i, l);
          return;
        }
      }
      C && C(t, p, a), t === "focusout" && Qe(p);
    }
    function H() {
      Qt("onMouseEnter", ["mouseout", "mouseover"]), Qt("onMouseLeave", ["mouseout", "mouseover"]), Qt("onPointerEnter", ["pointerout", "pointerover"]), Qt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function U(e, t, a, i, l, s, f) {
      var p = t === "mouseover" || t === "pointerover", g = t === "mouseout" || t === "pointerout";
      if (p && !ps(i)) {
        var C = i.relatedTarget || i.fromElement;
        if (C && (ec(C) || xp(C)))
          return;
      }
      if (!(!g && !p)) {
        var R;
        if (l.window === l)
          R = l;
        else {
          var j = l.ownerDocument;
          j ? R = j.defaultView || j.parentWindow : R = window;
        }
        var A, W;
        if (g) {
          var q = i.relatedTarget || i.toElement;
          if (A = a, W = q ? ec(q) : null, W !== null) {
            var te = ya(W);
            (W !== te || W.tag !== F && W.tag !== X) && (W = null);
          }
        } else
          A = null, W = a;
        if (A !== W) {
          var Me = ap, at = "onMouseLeave", Xe = "onMouseEnter", Ut = "mouse";
          (t === "pointerout" || t === "pointerover") && (Me = bh, at = "onPointerLeave", Xe = "onPointerEnter", Ut = "pointer");
          var Dt = A == null ? R : Af(A), I = W == null ? R : Af(W), ne = new Me(at, Ut + "leave", A, i, l);
          ne.target = Dt, ne.relatedTarget = I;
          var B = null, ge = ec(l);
          if (ge === a) {
            var He = new Me(Xe, Ut + "enter", W, i, l);
            He.target = I, He.relatedTarget = Dt, B = He;
          }
          f2(e, ne, B, A, W);
        }
      }
    }
    function $(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var me = typeof Object.is == "function" ? Object.is : $;
    function Ye(e, t) {
      if (me(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!Or.call(t, s) || !me(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function ot(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function ut(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function pt(e, t) {
      for (var a = ot(e), i = 0, l = 0; a; ) {
        if (a.nodeType === Ki) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return {
              node: a,
              offset: t - i
            };
          i = l;
        }
        a = ot(ut(a));
      }
    }
    function ar(e) {
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
      var s = 0, f = -1, p = -1, g = 0, C = 0, R = e, j = null;
      e: for (; ; ) {
        for (var A = null; R === t && (a === 0 || R.nodeType === Ki) && (f = s + a), R === i && (l === 0 || R.nodeType === Ki) && (p = s + l), R.nodeType === Ki && (s += R.nodeValue.length), (A = R.firstChild) !== null; )
          j = R, R = A;
        for (; ; ) {
          if (R === e)
            break e;
          if (j === t && ++g === a && (f = s), j === i && ++C === l && (p = s), (A = R.nextSibling) !== null)
            break;
          R = j, j = R.parentNode;
        }
        R = A;
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
        var C = pt(e, f), R = pt(e, p);
        if (C && R) {
          if (l.rangeCount === 1 && l.anchorNode === C.node && l.anchorOffset === C.offset && l.focusNode === R.node && l.focusOffset === R.offset)
            return;
          var j = a.createRange();
          j.setStart(C.node, C.offset), l.removeAllRanges(), f > p ? (l.addRange(j), l.extend(R.node, R.offset)) : (j.setEnd(R.node, R.offset), l.addRange(j));
        }
      }
    }
    function Mh(e) {
      return e && e.nodeType === Ki;
    }
    function s_(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Mh(e) ? !1 : Mh(t) ? s_(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function GR(e) {
      return e && e.ownerDocument && s_(e.ownerDocument.documentElement, e);
    }
    function QR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function c_() {
      for (var e = window, t = La(); t instanceof e.HTMLIFrameElement; ) {
        if (QR(t))
          e = t.contentWindow;
        else
          return t;
        t = La(e.document);
      }
      return t;
    }
    function Zy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function qR() {
      var e = c_();
      return {
        focusedElem: e,
        selectionRange: Zy(e) ? XR(e) : null
      };
    }
    function KR(e) {
      var t = c_(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && GR(a)) {
        i !== null && Zy(a) && JR(a, i);
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
    function XR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = ar(e), t || {
        start: 0,
        end: 0
      };
    }
    function JR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : qo(e, t);
    }
    var ZR = An && "documentMode" in document && document.documentMode <= 11;
    function e2() {
      dt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Of = null, eg = null, vp = null, tg = !1;
    function t2(e) {
      if ("selectionStart" in e && Zy(e))
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
    function n2(e) {
      return e.window === e ? e.document : e.nodeType === Xi ? e : e.ownerDocument;
    }
    function f_(e, t, a) {
      var i = n2(a);
      if (!(tg || Of == null || Of !== La(i))) {
        var l = t2(Of);
        if (!vp || !Ye(vp, l)) {
          vp = l;
          var s = zh(eg, "onSelect");
          if (s.length > 0) {
            var f = new Ui("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Of;
          }
        }
      }
    }
    function r2(e, t, a, i, l, s, f) {
      var p = a ? Af(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (Ks(p) || p.contentEditable === "true") && (Of = p, eg = a, vp = null);
          break;
        case "focusout":
          Of = null, eg = null, vp = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          tg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          tg = !1, f_(e, i, l);
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
          if (ZR)
            break;
        // falls through
        case "keydown":
        case "keyup":
          f_(e, i, l);
      }
    }
    function Ah(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Df = {
      animationend: Ah("Animation", "AnimationEnd"),
      animationiteration: Ah("Animation", "AnimationIteration"),
      animationstart: Ah("Animation", "AnimationStart"),
      transitionend: Ah("Transition", "TransitionEnd")
    }, ng = {}, d_ = {};
    An && (d_ = document.createElement("div").style, "AnimationEvent" in window || (delete Df.animationend.animation, delete Df.animationiteration.animation, delete Df.animationstart.animation), "TransitionEvent" in window || delete Df.transitionend.transition);
    function Uh(e) {
      if (ng[e])
        return ng[e];
      if (!Df[e])
        return e;
      var t = Df[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in d_)
          return ng[e] = t[a];
      return e;
    }
    var p_ = Uh("animationend"), v_ = Uh("animationiteration"), h_ = Uh("animationstart"), m_ = Uh("transitionend"), y_ = /* @__PURE__ */ new Map(), g_ = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function ju(e, t) {
      y_.set(e, t), dt(t, [e]);
    }
    function a2() {
      for (var e = 0; e < g_.length; e++) {
        var t = g_[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        ju(a, "on" + i);
      }
      ju(p_, "onAnimationEnd"), ju(v_, "onAnimationIteration"), ju(h_, "onAnimationStart"), ju("dblclick", "onDoubleClick"), ju("focusin", "onFocus"), ju("focusout", "onBlur"), ju(m_, "onTransitionEnd");
    }
    function i2(e, t, a, i, l, s, f) {
      var p = y_.get(t);
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
            g = Fl;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = xh;
            break;
          case p_:
          case v_:
          case h_:
            g = Sh;
            break;
          case m_:
            g = Ha;
            break;
          case "scroll":
            g = la;
            break;
          case "wheel":
            g = qy;
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
            g = bh;
            break;
        }
        var R = (s & Na) !== 0;
        {
          var j = !R && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", A = s2(a, p, i.type, R, j);
          if (A.length > 0) {
            var W = new g(p, C, null, i, l);
            e.push({
              event: W,
              listeners: A
            });
          }
        }
      }
    }
    a2(), H(), Xs(), e2(), Ky();
    function o2(e, t, a, i, l, s, f) {
      i2(e, t, a, i, l, s);
      var p = (s & xd) === 0;
      p && (U(e, t, a, i, l), Nn(e, t, a, i, l), r2(e, t, a, i, l), Lh(e, t, a, i, l));
    }
    var hp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], rg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(hp));
    function S_(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, bi(i, t, void 0, e), e.currentTarget = null;
    }
    function l2(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], f = s.instance, p = s.currentTarget, g = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          S_(e, g, p), i = f;
        }
      else
        for (var C = 0; C < t.length; C++) {
          var R = t[C], j = R.instance, A = R.currentTarget, W = R.listener;
          if (j !== i && e.isPropagationStopped())
            return;
          S_(e, W, A), i = j;
        }
    }
    function __(e, t) {
      for (var a = (t & Na) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, f = l.listeners;
        l2(s, f, a);
      }
      ms();
    }
    function u2(e, t, a, i, l) {
      var s = kd(a), f = [];
      o2(f, e, i, a, s, t), __(f, t);
    }
    function En(e, t) {
      rg.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = PT(t), l = d2(e);
      i.has(l) || (C_(t, e, kc, a), i.add(l));
    }
    function ag(e, t, a) {
      rg.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Na), C_(a, e, i, t);
    }
    var jh = "_reactListening" + Math.random().toString(36).slice(2);
    function mp(e) {
      if (!e[jh]) {
        e[jh] = !0, nt.forEach(function(a) {
          a !== "selectionchange" && (rg.has(a) || ag(a, !1, e), ag(a, !0, e));
        });
        var t = e.nodeType === Xi ? e : e.ownerDocument;
        t !== null && (t[jh] || (t[jh] = !0, ag("selectionchange", !1, t)));
      }
    }
    function C_(e, t, a, i, l) {
      var s = pr(e, t, a), f = void 0;
      hs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? rp(e, t, s, f) : oa(e, t, s) : f !== void 0 ? Nu(e, t, s, f) : Ws(e, t, s);
    }
    function E_(e, t) {
      return e === t || e.nodeType === jn && e.parentNode === t;
    }
    function ig(e, t, a, i, l) {
      var s = i;
      if ((t & wd) === 0 && (t & kc) === 0) {
        var f = l;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var g = p.tag;
            if (g === P || g === V) {
              var C = p.stateNode.containerInfo;
              if (E_(C, f))
                break;
              if (g === V)
                for (var R = p.return; R !== null; ) {
                  var j = R.tag;
                  if (j === P || j === V) {
                    var A = R.stateNode.containerInfo;
                    if (E_(A, f))
                      return;
                  }
                  R = R.return;
                }
              for (; C !== null; ) {
                var W = ec(C);
                if (W === null)
                  return;
                var q = W.tag;
                if (q === F || q === X) {
                  p = s = W;
                  continue e;
                }
                C = C.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      $v(function() {
        return u2(e, t, a, s);
      });
    }
    function yp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function s2(e, t, a, i, l, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, g = [], C = e, R = null; C !== null; ) {
        var j = C, A = j.stateNode, W = j.tag;
        if (W === F && A !== null && (R = A, p !== null)) {
          var q = No(C, p);
          q != null && g.push(yp(C, q, R));
        }
        if (l)
          break;
        C = C.return;
      }
      return g;
    }
    function zh(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, f = s.stateNode, p = s.tag;
        if (p === F && f !== null) {
          var g = f, C = No(l, a);
          C != null && i.unshift(yp(l, C, g));
          var R = No(l, t);
          R != null && i.push(yp(l, R, g));
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
      while (e && e.tag !== F);
      return e || null;
    }
    function c2(e, t) {
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
    function R_(e, t, a, i, l) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var g = p, C = g.alternate, R = g.stateNode, j = g.tag;
        if (C !== null && C === i)
          break;
        if (j === F && R !== null) {
          var A = R;
          if (l) {
            var W = No(p, s);
            W != null && f.unshift(yp(p, W, A));
          } else if (!l) {
            var q = No(p, s);
            q != null && f.push(yp(p, q, A));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function f2(e, t, a, i, l) {
      var s = i && l ? c2(i, l) : null;
      i !== null && R_(e, t, i, s, !1), l !== null && a !== null && R_(e, a, l, s, !0);
    }
    function d2(e, t) {
      return e + "__bubble";
    }
    var Ia = !1, gp = "dangerouslySetInnerHTML", Ph = "suppressContentEditableWarning", zu = "suppressHydrationWarning", T_ = "autoFocus", Js = "children", Zs = "style", Fh = "__html", og, Vh, Sp, b_, Hh, w_, x_;
    og = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Vh = function(e, t) {
      Rd(e, t), wc(e, t), Hv(e, t, {
        registrationNameDependencies: je,
        possibleRegistrationNames: st
      });
    }, w_ = An && !document.documentMode, Sp = function(e, t, a) {
      if (!Ia) {
        var i = Ih(a), l = Ih(t);
        l !== i && (Ia = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, b_ = function(e) {
      if (!Ia) {
        Ia = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, Hh = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, x_ = function(e, t) {
      var a = e.namespaceURI === qi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var p2 = /\r\n?/g, v2 = /\u0000|\uFFFD/g;
    function Ih(e) {
      Zn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(p2, `
`).replace(v2, "");
    }
    function Bh(e, t, a, i) {
      var l = Ih(t), s = Ih(e);
      if (s !== l && (i && (Ia || (Ia = !0, y('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && Te))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function k_(e) {
      return e.nodeType === Xi ? e : e.ownerDocument;
    }
    function h2() {
    }
    function $h(e) {
      e.onclick = h2;
    }
    function m2(e, t, a, i, l) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Zs)
            f && Object.freeze(f), Uv(t, f);
          else if (s === gp) {
            var p = f ? f[Fh] : void 0;
            p != null && Rv(t, p);
          } else if (s === Js)
            if (typeof f == "string") {
              var g = e !== "textarea" || f !== "";
              g && vu(t, f);
            } else typeof f == "number" && vu(t, "" + f);
          else s === Ph || s === zu || s === T_ || (je.hasOwnProperty(s) ? f != null && (typeof f != "function" && Hh(s, f), s === "onScroll" && En("scroll", t)) : f != null && Dr(t, s, f, l));
        }
    }
    function y2(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], f = t[l + 1];
        s === Zs ? Uv(e, f) : s === gp ? Rv(e, f) : s === Js ? vu(e, f) : Dr(e, s, f, i);
      }
    }
    function g2(e, t, a, i) {
      var l, s = k_(a), f, p = i;
      if (p === qi && (p = md(e)), p === qi) {
        if (l = Do(e, t), !l && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var g = s.createElement("div");
          g.innerHTML = "<script><\/script>";
          var C = g.firstChild;
          f = g.removeChild(C);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var R = f;
          t.multiple ? R.multiple = !0 : t.size && (R.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === qi && !l && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Or.call(og, e) && (og[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function S2(e, t) {
      return k_(t).createTextNode(e);
    }
    function _2(e, t, a, i) {
      var l = Do(t, a);
      Vh(t, a);
      var s;
      switch (t) {
        case "dialog":
          En("cancel", e), En("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < hp.length; f++)
            En(hp[f], e);
          s = a;
          break;
        case "source":
          En("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e), s = a;
          break;
        case "details":
          En("toggle", e), s = a;
          break;
        case "input":
          ai(e, a), s = pu(e, a), En("invalid", e);
          break;
        case "option":
          zt(e, a), s = a;
          break;
        case "select":
          hl(e, a), s = os(e, a), En("invalid", e);
          break;
        case "textarea":
          pd(e, a), s = dd(e, a), En("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Tc(t, s), m2(t, e, i, s, l), t) {
        case "input":
          ri(e), G(e, a, !1);
          break;
        case "textarea":
          ri(e), Cv(e);
          break;
        case "option":
          sn(e, a);
          break;
        case "select":
          cd(e, a);
          break;
        default:
          typeof s.onClick == "function" && $h(e);
          break;
      }
    }
    function C2(e, t, a, i, l) {
      Vh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = pu(e, a), p = pu(e, i), s = [];
          break;
        case "select":
          f = os(e, a), p = os(e, i), s = [];
          break;
        case "textarea":
          f = dd(e, a), p = dd(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && $h(e);
          break;
      }
      Tc(t, p);
      var g, C, R = null;
      for (g in f)
        if (!(p.hasOwnProperty(g) || !f.hasOwnProperty(g) || f[g] == null))
          if (g === Zs) {
            var j = f[g];
            for (C in j)
              j.hasOwnProperty(C) && (R || (R = {}), R[C] = "");
          } else g === gp || g === Js || g === Ph || g === zu || g === T_ || (je.hasOwnProperty(g) ? s || (s = []) : (s = s || []).push(g, null));
      for (g in p) {
        var A = p[g], W = f?.[g];
        if (!(!p.hasOwnProperty(g) || A === W || A == null && W == null))
          if (g === Zs)
            if (A && Object.freeze(A), W) {
              for (C in W)
                W.hasOwnProperty(C) && (!A || !A.hasOwnProperty(C)) && (R || (R = {}), R[C] = "");
              for (C in A)
                A.hasOwnProperty(C) && W[C] !== A[C] && (R || (R = {}), R[C] = A[C]);
            } else
              R || (s || (s = []), s.push(g, R)), R = A;
          else if (g === gp) {
            var q = A ? A[Fh] : void 0, te = W ? W[Fh] : void 0;
            q != null && te !== q && (s = s || []).push(g, q);
          } else g === Js ? (typeof A == "string" || typeof A == "number") && (s = s || []).push(g, "" + A) : g === Ph || g === zu || (je.hasOwnProperty(g) ? (A != null && (typeof A != "function" && Hh(g, A), g === "onScroll" && En("scroll", e)), !s && W !== A && (s = [])) : (s = s || []).push(g, A));
      }
      return R && (My(R, p[Zs]), (s = s || []).push(Zs, R)), s;
    }
    function E2(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && S(e, l);
      var s = Do(a, i), f = Do(a, l);
      switch (y2(e, t, s, f), a) {
        case "input":
          O(e, l);
          break;
        case "textarea":
          _v(e, l);
          break;
        case "select":
          Cc(e, l);
          break;
      }
    }
    function R2(e) {
      {
        var t = e.toLowerCase();
        return fs.hasOwnProperty(t) && fs[t] || null;
      }
    }
    function T2(e, t, a, i, l, s, f) {
      var p, g;
      switch (p = Do(t, a), Vh(t, a), t) {
        case "dialog":
          En("cancel", e), En("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e);
          break;
        case "video":
        case "audio":
          for (var C = 0; C < hp.length; C++)
            En(hp[C], e);
          break;
        case "source":
          En("error", e);
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e);
          break;
        case "details":
          En("toggle", e);
          break;
        case "input":
          ai(e, a), En("invalid", e);
          break;
        case "option":
          zt(e, a);
          break;
        case "select":
          hl(e, a), En("invalid", e);
          break;
        case "textarea":
          pd(e, a), En("invalid", e);
          break;
      }
      Tc(t, a);
      {
        g = /* @__PURE__ */ new Set();
        for (var R = e.attributes, j = 0; j < R.length; j++) {
          var A = R[j].name.toLowerCase();
          switch (A) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              g.add(R[j].name);
          }
        }
      }
      var W = null;
      for (var q in a)
        if (a.hasOwnProperty(q)) {
          var te = a[q];
          if (q === Js)
            typeof te == "string" ? e.textContent !== te && (a[zu] !== !0 && Bh(e.textContent, te, s, f), W = [Js, te]) : typeof te == "number" && e.textContent !== "" + te && (a[zu] !== !0 && Bh(e.textContent, te, s, f), W = [Js, "" + te]);
          else if (je.hasOwnProperty(q))
            te != null && (typeof te != "function" && Hh(q, te), q === "onScroll" && En("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var Me = void 0, at = ln(q);
            if (a[zu] !== !0) {
              if (!(q === Ph || q === zu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              q === "value" || q === "checked" || q === "selected")) {
                if (q === gp) {
                  var Xe = e.innerHTML, Ut = te ? te[Fh] : void 0;
                  if (Ut != null) {
                    var Dt = x_(e, Ut);
                    Dt !== Xe && Sp(q, Xe, Dt);
                  }
                } else if (q === Zs) {
                  if (g.delete(q), w_) {
                    var I = Ly(te);
                    Me = e.getAttribute("style"), I !== Me && Sp(q, Me, I);
                  }
                } else if (p && !z)
                  g.delete(q.toLowerCase()), Me = ul(e, q, te), te !== Me && Sp(q, Me, te);
                else if (!yn(q, at, p) && !er(q, te, at, p)) {
                  var ne = !1;
                  if (at !== null)
                    g.delete(at.attributeName), Me = Co(e, q, te, at);
                  else {
                    var B = i;
                    if (B === qi && (B = md(t)), B === qi)
                      g.delete(q.toLowerCase());
                    else {
                      var ge = R2(q);
                      ge !== null && ge !== q && (ne = !0, g.delete(ge)), g.delete(q);
                    }
                    Me = ul(e, q, te);
                  }
                  var He = z;
                  !He && te !== Me && !ne && Sp(q, Me, te);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      g.size > 0 && a[zu] !== !0 && b_(g), t) {
        case "input":
          ri(e), G(e, a, !0);
          break;
        case "textarea":
          ri(e), Cv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && $h(e);
          break;
      }
      return W;
    }
    function b2(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function lg(e, t) {
      {
        if (Ia)
          return;
        Ia = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function ug(e, t) {
      {
        if (Ia)
          return;
        Ia = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function sg(e, t, a) {
      {
        if (Ia)
          return;
        Ia = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function cg(e, t) {
      {
        if (t === "" || Ia)
          return;
        Ia = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function w2(e, t, a) {
      switch (t) {
        case "input":
          J(e, a);
          return;
        case "textarea":
          xy(e, a);
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
      var x2 = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], O_ = [
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
      ], k2 = O_.concat(["button"]), O2 = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], D_ = {
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
        var a = Rt({}, e || D_), i = {
          tag: t
        };
        return O_.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), k2.indexOf(t) !== -1 && (a.pTagInButtonScope = null), x2.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var D2 = function(e, t) {
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
            return O2.indexOf(t) === -1;
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
      }, L2 = function(e, t) {
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
      }, L_ = {};
      _p = function(e, t, a) {
        a = a || D_;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = D2(e, l) ? null : i, f = s ? null : L2(e, a), p = s || f;
        if (p) {
          var g = p.tag, C = !!s + "|" + e + "|" + g;
          if (!L_[C]) {
            L_[C] = !0;
            var R = e, j = "";
            if (e === "#text" ? /\S/.test(t) ? R = "Text nodes" : (R = "Whitespace text nodes", j = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : R = "<" + e + ">", s) {
              var A = "";
              g === "table" && e === "tr" && (A += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", R, g, j, A);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", R, g);
          }
        }
      };
    }
    var Wh = "suppressHydrationWarning", Yh = "$", Gh = "/$", Ep = "$?", Rp = "$!", N2 = "style", fg = null, dg = null;
    function M2(e) {
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
          var s = i === jn ? e.parentNode : e, f = s.namespaceURI || null;
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
    function A2(e, t, a) {
      {
        var i = e, l = yd(i.namespace, t), s = Cp(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function U3(e) {
      return e;
    }
    function U2(e) {
      fg = In(), dg = qR();
      var t = null;
      return Xn(!1), t;
    }
    function j2(e) {
      KR(dg), Xn(fg), fg = null, dg = null;
    }
    function z2(e, t, a, i, l) {
      var s;
      {
        var f = i;
        if (_p(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, g = Cp(f.ancestorInfo, e);
          _p(null, p, g);
        }
        s = f.namespace;
      }
      var C = g2(e, t, a, s);
      return wp(l, C), _g(C, t), C;
    }
    function P2(e, t) {
      e.appendChild(t);
    }
    function F2(e, t, a, i, l) {
      switch (_2(e, t, a, i), t) {
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
    function V2(e, t, a, i, l, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, g = Cp(f.ancestorInfo, t);
          _p(null, p, g);
        }
      }
      return C2(e, t, a, i);
    }
    function pg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function H2(e, t, a, i) {
      {
        var l = a;
        _p(null, e, l.ancestorInfo);
      }
      var s = S2(e, t);
      return wp(i, s), s;
    }
    function I2() {
      var e = window.event;
      return e === void 0 ? Pa : gf(e.type);
    }
    var vg = typeof setTimeout == "function" ? setTimeout : void 0, B2 = typeof clearTimeout == "function" ? clearTimeout : void 0, hg = -1, N_ = typeof Promise == "function" ? Promise : void 0, $2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof N_ < "u" ? function(e) {
      return N_.resolve(null).then(e).catch(W2);
    } : vg;
    function W2(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Y2(e, t, a, i) {
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
    function G2(e, t, a, i, l, s) {
      E2(e, t, a, i, l), _g(e, l);
    }
    function M_(e) {
      vu(e, "");
    }
    function Q2(e, t, a) {
      e.nodeValue = a;
    }
    function q2(e, t) {
      e.appendChild(t);
    }
    function K2(e, t) {
      var a;
      e.nodeType === jn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && $h(a);
    }
    function X2(e, t, a) {
      e.insertBefore(t, a);
    }
    function J2(e, t, a) {
      e.nodeType === jn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Z2(e, t) {
      e.removeChild(t);
    }
    function eT(e, t) {
      e.nodeType === jn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function mg(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === jn) {
          var s = l.data;
          if (s === Gh)
            if (i === 0) {
              e.removeChild(l), jl(t);
              return;
            } else
              i--;
          else (s === Yh || s === Ep || s === Rp) && i++;
        }
        a = l;
      } while (a);
      jl(t);
    }
    function tT(e, t) {
      e.nodeType === jn ? mg(e.parentNode, t) : e.nodeType === Xr && mg(e, t), jl(e);
    }
    function nT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function rT(e) {
      e.nodeValue = "";
    }
    function aT(e, t) {
      e = e;
      var a = t[N2], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Rc("display", i);
    }
    function iT(e, t) {
      e.nodeValue = t;
    }
    function oT(e) {
      e.nodeType === Xr ? e.textContent = "" : e.nodeType === Xi && e.documentElement && e.removeChild(e.documentElement);
    }
    function lT(e, t, a) {
      return e.nodeType !== Xr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function uT(e, t) {
      return t === "" || e.nodeType !== Ki ? null : e;
    }
    function sT(e) {
      return e.nodeType !== jn ? null : e;
    }
    function A_(e) {
      return e.data === Ep;
    }
    function yg(e) {
      return e.data === Rp;
    }
    function cT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function fT(e, t) {
      e._reactRetry = t;
    }
    function Qh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Xr || t === Ki)
          break;
        if (t === jn) {
          var a = e.data;
          if (a === Yh || a === Rp || a === Ep)
            break;
          if (a === Gh)
            return null;
        }
      }
      return e;
    }
    function Tp(e) {
      return Qh(e.nextSibling);
    }
    function dT(e) {
      return Qh(e.firstChild);
    }
    function pT(e) {
      return Qh(e.firstChild);
    }
    function vT(e) {
      return Qh(e.nextSibling);
    }
    function hT(e, t, a, i, l, s, f) {
      wp(s, e), _g(e, a);
      var p;
      {
        var g = l;
        p = g.namespace;
      }
      var C = (s.mode & xt) !== tt;
      return T2(e, t, a, p, i, C, f);
    }
    function mT(e, t, a, i) {
      return wp(a, e), a.mode & xt, b2(e, t);
    }
    function yT(e, t) {
      wp(t, e);
    }
    function gT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === jn) {
          var i = t.data;
          if (i === Gh) {
            if (a === 0)
              return Tp(t);
            a--;
          } else (i === Yh || i === Rp || i === Ep) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function U_(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === jn) {
          var i = t.data;
          if (i === Yh || i === Rp || i === Ep) {
            if (a === 0)
              return t;
            a--;
          } else i === Gh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function ST(e) {
      jl(e);
    }
    function _T(e) {
      jl(e);
    }
    function CT(e) {
      return e !== "head" && e !== "body";
    }
    function ET(e, t, a, i) {
      var l = !0;
      Bh(t.nodeValue, a, i, l);
    }
    function RT(e, t, a, i, l, s) {
      if (t[Wh] !== !0) {
        var f = !0;
        Bh(i.nodeValue, l, s, f);
      }
    }
    function TT(e, t) {
      t.nodeType === Xr ? lg(e, t) : t.nodeType === jn || ug(e, t);
    }
    function bT(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Xr ? lg(a, t) : t.nodeType === jn || ug(a, t));
      }
    }
    function wT(e, t, a, i, l) {
      (l || t[Wh] !== !0) && (i.nodeType === Xr ? lg(a, i) : i.nodeType === jn || ug(a, i));
    }
    function xT(e, t, a) {
      sg(e, t);
    }
    function kT(e, t) {
      cg(e, t);
    }
    function OT(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && sg(i, t);
      }
    }
    function DT(e, t) {
      {
        var a = e.parentNode;
        a !== null && cg(a, t);
      }
    }
    function LT(e, t, a, i, l, s) {
      (s || t[Wh] !== !0) && sg(a, i);
    }
    function NT(e, t, a, i, l) {
      (l || t[Wh] !== !0) && cg(a, i);
    }
    function MT(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function AT(e) {
      mp(e);
    }
    var Nf = Math.random().toString(36).slice(2), Mf = "__reactFiber$" + Nf, gg = "__reactProps$" + Nf, bp = "__reactContainer$" + Nf, Sg = "__reactEvents$" + Nf, UT = "__reactListeners$" + Nf, jT = "__reactHandles$" + Nf;
    function zT(e) {
      delete e[Mf], delete e[gg], delete e[Sg], delete e[UT], delete e[jT];
    }
    function wp(e, t) {
      t[Mf] = e;
    }
    function qh(e, t) {
      t[bp] = e;
    }
    function j_(e) {
      e[bp] = null;
    }
    function xp(e) {
      return !!e[bp];
    }
    function ec(e) {
      var t = e[Mf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[bp] || a[Mf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = U_(e); l !== null; ) {
              var s = l[Mf];
              if (s)
                return s;
              l = U_(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Pu(e) {
      var t = e[Mf] || e[bp];
      return t && (t.tag === F || t.tag === X || t.tag === ve || t.tag === P) ? t : null;
    }
    function Af(e) {
      if (e.tag === F || e.tag === X)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Kh(e) {
      return e[gg] || null;
    }
    function _g(e, t) {
      e[gg] = t;
    }
    function PT(e) {
      var t = e[Sg];
      return t === void 0 && (t = e[Sg] = /* @__PURE__ */ new Set()), t;
    }
    var z_ = {}, P_ = h.ReactDebugCurrentFrame;
    function Xh(e) {
      if (e) {
        var t = e._owner, a = Yi(e.type, e._source, t ? t.type : null);
        P_.setExtraStackFrame(a);
      } else
        P_.setExtraStackFrame(null);
    }
    function uo(e, t, a, i, l) {
      {
        var s = Function.call.bind(Or);
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
            p && !(p instanceof Error) && (Xh(l), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Xh(null)), p instanceof Error && !(p.message in z_) && (z_[p.message] = !0, Xh(l), y("Failed %s type: %s", a, p.message), Xh(null));
          }
      }
    }
    var Cg = [], Jh;
    Jh = [];
    var Il = -1;
    function Fu(e) {
      return {
        current: e
      };
    }
    function ua(e, t) {
      if (Il < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== Jh[Il] && y("Unexpected Fiber popped."), e.current = Cg[Il], Cg[Il] = null, Jh[Il] = null, Il--;
    }
    function sa(e, t, a) {
      Il++, Cg[Il] = e.current, Jh[Il] = a, e.current = t;
    }
    var Eg;
    Eg = {};
    var fi = {};
    Object.freeze(fi);
    var Bl = Fu(fi), Ko = Fu(!1), Rg = fi;
    function Uf(e, t, a) {
      return a && Xo(t) ? Rg : Bl.current;
    }
    function F_(e, t, a) {
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
          var p = ht(e) || "Unknown";
          uo(i, s, "context", p);
        }
        return l && F_(e, t, s), s;
      }
    }
    function Zh() {
      return Ko.current;
    }
    function Xo(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function em(e) {
      ua(Ko, e), ua(Bl, e);
    }
    function Tg(e) {
      ua(Ko, e), ua(Bl, e);
    }
    function V_(e, t, a) {
      {
        if (Bl.current !== fi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        sa(Bl, t, e), sa(Ko, a, e);
      }
    }
    function H_(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = ht(e) || "Unknown";
            Eg[s] || (Eg[s] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in l))
            throw new Error((ht(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var g = ht(e) || "Unknown";
          uo(l, f, "child context", g);
        }
        return Rt({}, a, f);
      }
    }
    function tm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || fi;
        return Rg = Bl.current, sa(Bl, a, e), sa(Ko, Ko.current, e), !0;
      }
    }
    function I_(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = H_(e, t, Rg);
          i.__reactInternalMemoizedMergedChildContext = l, ua(Ko, e), ua(Bl, e), sa(Bl, l, e), sa(Ko, a, e);
        } else
          ua(Ko, e), sa(Ko, a, e);
      }
    }
    function FT(e) {
      {
        if (!El(e) || e.tag !== b)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case P:
              return t.stateNode.context;
            case b: {
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
    var Vu = 0, nm = 1, $l = null, bg = !1, wg = !1;
    function B_(e) {
      $l === null ? $l = [e] : $l.push(e);
    }
    function VT(e) {
      bg = !0, B_(e);
    }
    function $_() {
      bg && Hu();
    }
    function Hu() {
      if (!wg && $l !== null) {
        wg = !0;
        var e = 0, t = Va();
        try {
          var a = !0, i = $l;
          for (Hn(Ur); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          $l = null, bg = !1;
        } catch (s) {
          throw $l !== null && ($l = $l.slice(e + 1)), Dd(Ss, Hu), s;
        } finally {
          Hn(t), wg = !1;
        }
      }
      return null;
    }
    var zf = [], Pf = 0, rm = null, am = 0, ji = [], zi = 0, tc = null, Wl = 1, Yl = "";
    function HT(e) {
      return rc(), (e.flags & wi) !== et;
    }
    function IT(e) {
      return rc(), am;
    }
    function BT() {
      var e = Yl, t = Wl, a = t & ~$T(t);
      return a.toString(32) + e;
    }
    function nc(e, t) {
      rc(), zf[Pf++] = am, zf[Pf++] = rm, rm = e, am = t;
    }
    function W_(e, t, a) {
      rc(), ji[zi++] = Wl, ji[zi++] = Yl, ji[zi++] = tc, tc = e;
      var i = Wl, l = Yl, s = im(i) - 1, f = i & ~(1 << s), p = a + 1, g = im(t) + s;
      if (g > 30) {
        var C = s - s % 5, R = (1 << C) - 1, j = (f & R).toString(32), A = f >> C, W = s - C, q = im(t) + W, te = p << W, Me = te | A, at = j + l;
        Wl = 1 << q | Me, Yl = at;
      } else {
        var Xe = p << s, Ut = Xe | f, Dt = l;
        Wl = 1 << g | Ut, Yl = Dt;
      }
    }
    function xg(e) {
      rc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        nc(e, a), W_(e, a, i);
      }
    }
    function im(e) {
      return 32 - Fn(e);
    }
    function $T(e) {
      return 1 << im(e) - 1;
    }
    function kg(e) {
      for (; e === rm; )
        rm = zf[--Pf], zf[Pf] = null, am = zf[--Pf], zf[Pf] = null;
      for (; e === tc; )
        tc = ji[--zi], ji[zi] = null, Yl = ji[--zi], ji[zi] = null, Wl = ji[--zi], ji[zi] = null;
    }
    function WT() {
      return rc(), tc !== null ? {
        id: Wl,
        overflow: Yl
      } : null;
    }
    function YT(e, t) {
      rc(), ji[zi++] = Wl, ji[zi++] = Yl, ji[zi++] = tc, Wl = t.id, Yl = t.overflow, tc = e;
    }
    function rc() {
      Vr() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Fr = null, Pi = null, so = !1, ac = !1, Iu = null;
    function GT() {
      so && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function Y_() {
      ac = !0;
    }
    function QT() {
      return ac;
    }
    function qT(e) {
      var t = e.stateNode.containerInfo;
      return Pi = pT(t), Fr = e, so = !0, Iu = null, ac = !1, !0;
    }
    function KT(e, t, a) {
      return Pi = vT(t), Fr = e, so = !0, Iu = null, ac = !1, a !== null && YT(e, a), !0;
    }
    function G_(e, t) {
      switch (e.tag) {
        case P: {
          TT(e.stateNode.containerInfo, t);
          break;
        }
        case F: {
          var a = (e.mode & xt) !== tt;
          wT(
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
          i.dehydrated !== null && bT(i.dehydrated, t);
          break;
        }
      }
    }
    function Q_(e, t) {
      G_(e, t);
      var a = ek();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ma) : i.push(a);
    }
    function Og(e, t) {
      {
        if (ac)
          return;
        switch (e.tag) {
          case P: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case F:
                var i = t.type;
                t.pendingProps, xT(a, i);
                break;
              case X:
                var l = t.pendingProps;
                kT(a, l);
                break;
            }
            break;
          }
          case F: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case F: {
                var g = t.type, C = t.pendingProps, R = (e.mode & xt) !== tt;
                LT(
                  s,
                  f,
                  p,
                  g,
                  C,
                  // TODO: Delete this argument when we remove the legacy root API.
                  R
                );
                break;
              }
              case X: {
                var j = t.pendingProps, A = (e.mode & xt) !== tt;
                NT(
                  s,
                  f,
                  p,
                  j,
                  // TODO: Delete this argument when we remove the legacy root API.
                  A
                );
                break;
              }
            }
            break;
          }
          case ve: {
            var W = e.memoizedState, q = W.dehydrated;
            if (q !== null) switch (t.tag) {
              case F:
                var te = t.type;
                t.pendingProps, OT(q, te);
                break;
              case X:
                var Me = t.pendingProps;
                DT(q, Me);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function q_(e, t) {
      t.flags = t.flags & ~Zr | Sn, Og(e, t);
    }
    function K_(e, t) {
      switch (e.tag) {
        case F: {
          var a = e.type;
          e.pendingProps;
          var i = lT(t, a);
          return i !== null ? (e.stateNode = i, Fr = e, Pi = dT(i), !0) : !1;
        }
        case X: {
          var l = e.pendingProps, s = uT(t, l);
          return s !== null ? (e.stateNode = s, Fr = e, Pi = null, !0) : !1;
        }
        case ve: {
          var f = sT(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: WT(),
              retryLane: ra
            };
            e.memoizedState = p;
            var g = tk(f);
            return g.return = e, e.child = g, Fr = e, Pi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Dg(e) {
      return (e.mode & xt) !== tt && (e.flags & Je) === et;
    }
    function Lg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Ng(e) {
      if (so) {
        var t = Pi;
        if (!t) {
          Dg(e) && (Og(Fr, e), Lg()), q_(Fr, e), so = !1, Fr = e;
          return;
        }
        var a = t;
        if (!K_(e, t)) {
          Dg(e) && (Og(Fr, e), Lg()), t = Tp(a);
          var i = Fr;
          if (!t || !K_(e, t)) {
            q_(Fr, e), so = !1, Fr = e;
            return;
          }
          Q_(i, a);
        }
      }
    }
    function XT(e, t, a) {
      var i = e.stateNode, l = !ac, s = hT(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function JT(e) {
      var t = e.stateNode, a = e.memoizedProps, i = mT(t, a, e);
      if (i) {
        var l = Fr;
        if (l !== null)
          switch (l.tag) {
            case P: {
              var s = l.stateNode.containerInfo, f = (l.mode & xt) !== tt;
              ET(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case F: {
              var p = l.type, g = l.memoizedProps, C = l.stateNode, R = (l.mode & xt) !== tt;
              RT(
                p,
                g,
                C,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                R
              );
              break;
            }
          }
      }
      return i;
    }
    function ZT(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      yT(a, e);
    }
    function eb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return gT(a);
    }
    function X_(e) {
      for (var t = e.return; t !== null && t.tag !== F && t.tag !== P && t.tag !== ve; )
        t = t.return;
      Fr = t;
    }
    function om(e) {
      if (e !== Fr)
        return !1;
      if (!so)
        return X_(e), so = !0, !1;
      if (e.tag !== P && (e.tag !== F || CT(e.type) && !pg(e.type, e.memoizedProps))) {
        var t = Pi;
        if (t)
          if (Dg(e))
            J_(e), Lg();
          else
            for (; t; )
              Q_(e, t), t = Tp(t);
      }
      return X_(e), e.tag === ve ? Pi = eb(e) : Pi = Fr ? Tp(e.stateNode) : null, !0;
    }
    function tb() {
      return so && Pi !== null;
    }
    function J_(e) {
      for (var t = Pi; t; )
        G_(e, t), t = Tp(t);
    }
    function Ff() {
      Fr = null, Pi = null, so = !1, ac = !1;
    }
    function Z_() {
      Iu !== null && (YC(Iu), Iu = null);
    }
    function Vr() {
      return so;
    }
    function Mg(e) {
      Iu === null ? Iu = [e] : Iu.push(e);
    }
    var nb = h.ReactCurrentBatchConfig, rb = null;
    function ab() {
      return nb.transition;
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
      var ib = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & en && (t = a), a = a.return;
        return t;
      }, ic = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, kp = [], Op = [], Dp = [], Lp = [], Np = [], Mp = [], oc = /* @__PURE__ */ new Set();
      co.recordUnsafeLifecycleWarnings = function(e, t) {
        oc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && kp.push(e), e.mode & en && typeof t.UNSAFE_componentWillMount == "function" && Op.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Dp.push(e), e.mode & en && typeof t.UNSAFE_componentWillReceiveProps == "function" && Lp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Np.push(e), e.mode & en && typeof t.UNSAFE_componentWillUpdate == "function" && Mp.push(e));
      }, co.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        kp.length > 0 && (kp.forEach(function(A) {
          e.add(ht(A) || "Component"), oc.add(A.type);
        }), kp = []);
        var t = /* @__PURE__ */ new Set();
        Op.length > 0 && (Op.forEach(function(A) {
          t.add(ht(A) || "Component"), oc.add(A.type);
        }), Op = []);
        var a = /* @__PURE__ */ new Set();
        Dp.length > 0 && (Dp.forEach(function(A) {
          a.add(ht(A) || "Component"), oc.add(A.type);
        }), Dp = []);
        var i = /* @__PURE__ */ new Set();
        Lp.length > 0 && (Lp.forEach(function(A) {
          i.add(ht(A) || "Component"), oc.add(A.type);
        }), Lp = []);
        var l = /* @__PURE__ */ new Set();
        Np.length > 0 && (Np.forEach(function(A) {
          l.add(ht(A) || "Component"), oc.add(A.type);
        }), Np = []);
        var s = /* @__PURE__ */ new Set();
        if (Mp.length > 0 && (Mp.forEach(function(A) {
          s.add(ht(A) || "Component"), oc.add(A.type);
        }), Mp = []), t.size > 0) {
          var f = ic(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = ic(i);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var g = ic(s);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, g);
        }
        if (e.size > 0) {
          var C = ic(e);
          T(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (a.size > 0) {
          var R = ic(a);
          T(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (l.size > 0) {
          var j = ic(l);
          T(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, j);
        }
      };
      var lm = /* @__PURE__ */ new Map(), e1 = /* @__PURE__ */ new Set();
      co.recordLegacyContextWarning = function(e, t) {
        var a = ib(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!e1.has(e.type)) {
          var i = lm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], lm.set(a, i)), i.push(e));
        }
      }, co.flushLegacyContextWarning = function() {
        lm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(ht(s) || "Component"), e1.add(s.type);
            });
            var l = ic(i);
            try {
              Xt(a), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              pn();
            }
          }
        });
      }, co.discardPendingWarnings = function() {
        kp = [], Op = [], Dp = [], Lp = [], Np = [], Mp = [], lm = /* @__PURE__ */ new Map();
      };
    }
    var Ag, Ug, jg, zg, Pg, t1 = function(e, t) {
    };
    Ag = !1, Ug = !1, jg = {}, zg = {}, Pg = {}, t1 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = ht(t) || "Component";
        zg[a] || (zg[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function ob(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Ap(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & en || ee) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== b) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !ob(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var l = ht(e) || "Component";
          jg[l] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, i), jg[l] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== b)
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
          var R = function(j) {
            var A = g.refs;
            j === null ? delete A[C] : A[C] = j;
          };
          return R._stringRef = C, R;
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
    function um(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function sm(e) {
      {
        var t = ht(e) || "Component";
        if (Pg[t])
          return;
        Pg[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function n1(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function r1(e) {
      function t(I, ne) {
        if (e) {
          var B = I.deletions;
          B === null ? (I.deletions = [ne], I.flags |= Ma) : B.push(ne);
        }
      }
      function a(I, ne) {
        if (!e)
          return null;
        for (var B = ne; B !== null; )
          t(I, B), B = B.sibling;
        return null;
      }
      function i(I, ne) {
        for (var B = /* @__PURE__ */ new Map(), ge = ne; ge !== null; )
          ge.key !== null ? B.set(ge.key, ge) : B.set(ge.index, ge), ge = ge.sibling;
        return B;
      }
      function l(I, ne) {
        var B = hc(I, ne);
        return B.index = 0, B.sibling = null, B;
      }
      function s(I, ne, B) {
        if (I.index = B, !e)
          return I.flags |= wi, ne;
        var ge = I.alternate;
        if (ge !== null) {
          var He = ge.index;
          return He < ne ? (I.flags |= Sn, ne) : He;
        } else
          return I.flags |= Sn, ne;
      }
      function f(I) {
        return e && I.alternate === null && (I.flags |= Sn), I;
      }
      function p(I, ne, B, ge) {
        if (ne === null || ne.tag !== X) {
          var He = MS(B, I.mode, ge);
          return He.return = I, He;
        } else {
          var ze = l(ne, B);
          return ze.return = I, ze;
        }
      }
      function g(I, ne, B, ge) {
        var He = B.type;
        if (He === mi)
          return R(I, ne, B.props.children, ge, B.key);
        if (ne !== null && (ne.elementType === He || // Keep this check inline so it only runs on the false path:
        uE(ne, B) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof He == "object" && He !== null && He.$$typeof === yt && n1(He) === ne.type)) {
          var ze = l(ne, B.props);
          return ze.ref = Ap(I, ne, B), ze.return = I, ze._debugSource = B._source, ze._debugOwner = B._owner, ze;
        }
        var ft = NS(B, I.mode, ge);
        return ft.ref = Ap(I, ne, B), ft.return = I, ft;
      }
      function C(I, ne, B, ge) {
        if (ne === null || ne.tag !== V || ne.stateNode.containerInfo !== B.containerInfo || ne.stateNode.implementation !== B.implementation) {
          var He = AS(B, I.mode, ge);
          return He.return = I, He;
        } else {
          var ze = l(ne, B.children || []);
          return ze.return = I, ze;
        }
      }
      function R(I, ne, B, ge, He) {
        if (ne === null || ne.tag !== K) {
          var ze = Zu(B, I.mode, ge, He);
          return ze.return = I, ze;
        } else {
          var ft = l(ne, B);
          return ft.return = I, ft;
        }
      }
      function j(I, ne, B) {
        if (typeof ne == "string" && ne !== "" || typeof ne == "number") {
          var ge = MS("" + ne, I.mode, B);
          return ge.return = I, ge;
        }
        if (typeof ne == "object" && ne !== null) {
          switch (ne.$$typeof) {
            case Lr: {
              var He = NS(ne, I.mode, B);
              return He.ref = Ap(I, null, ne), He.return = I, He;
            }
            case lr: {
              var ze = AS(ne, I.mode, B);
              return ze.return = I, ze;
            }
            case yt: {
              var ft = ne._payload, St = ne._init;
              return j(I, St(ft), B);
            }
          }
          if (bt(ne) || Ct(ne)) {
            var nn = Zu(ne, I.mode, B, null);
            return nn.return = I, nn;
          }
          um(I, ne);
        }
        return typeof ne == "function" && sm(I), null;
      }
      function A(I, ne, B, ge) {
        var He = ne !== null ? ne.key : null;
        if (typeof B == "string" && B !== "" || typeof B == "number")
          return He !== null ? null : p(I, ne, "" + B, ge);
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case Lr:
              return B.key === He ? g(I, ne, B, ge) : null;
            case lr:
              return B.key === He ? C(I, ne, B, ge) : null;
            case yt: {
              var ze = B._payload, ft = B._init;
              return A(I, ne, ft(ze), ge);
            }
          }
          if (bt(B) || Ct(B))
            return He !== null ? null : R(I, ne, B, ge, null);
          um(I, B);
        }
        return typeof B == "function" && sm(I), null;
      }
      function W(I, ne, B, ge, He) {
        if (typeof ge == "string" && ge !== "" || typeof ge == "number") {
          var ze = I.get(B) || null;
          return p(ne, ze, "" + ge, He);
        }
        if (typeof ge == "object" && ge !== null) {
          switch (ge.$$typeof) {
            case Lr: {
              var ft = I.get(ge.key === null ? B : ge.key) || null;
              return g(ne, ft, ge, He);
            }
            case lr: {
              var St = I.get(ge.key === null ? B : ge.key) || null;
              return C(ne, St, ge, He);
            }
            case yt:
              var nn = ge._payload, Bt = ge._init;
              return W(I, ne, B, Bt(nn), He);
          }
          if (bt(ge) || Ct(ge)) {
            var Jn = I.get(B) || null;
            return R(ne, Jn, ge, He, null);
          }
          um(ne, ge);
        }
        return typeof ge == "function" && sm(ne), null;
      }
      function q(I, ne, B) {
        {
          if (typeof I != "object" || I === null)
            return ne;
          switch (I.$$typeof) {
            case Lr:
            case lr:
              t1(I, B);
              var ge = I.key;
              if (typeof ge != "string")
                break;
              if (ne === null) {
                ne = /* @__PURE__ */ new Set(), ne.add(ge);
                break;
              }
              if (!ne.has(ge)) {
                ne.add(ge);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ge);
              break;
            case yt:
              var He = I._payload, ze = I._init;
              q(ze(He), ne, B);
              break;
          }
        }
        return ne;
      }
      function te(I, ne, B, ge) {
        for (var He = null, ze = 0; ze < B.length; ze++) {
          var ft = B[ze];
          He = q(ft, He, I);
        }
        for (var St = null, nn = null, Bt = ne, Jn = 0, $t = 0, $n = null; Bt !== null && $t < B.length; $t++) {
          Bt.index > $t ? ($n = Bt, Bt = null) : $n = Bt.sibling;
          var fa = A(I, Bt, B[$t], ge);
          if (fa === null) {
            Bt === null && (Bt = $n);
            break;
          }
          e && Bt && fa.alternate === null && t(I, Bt), Jn = s(fa, Jn, $t), nn === null ? St = fa : nn.sibling = fa, nn = fa, Bt = $n;
        }
        if ($t === B.length) {
          if (a(I, Bt), Vr()) {
            var Gr = $t;
            nc(I, Gr);
          }
          return St;
        }
        if (Bt === null) {
          for (; $t < B.length; $t++) {
            var pi = j(I, B[$t], ge);
            pi !== null && (Jn = s(pi, Jn, $t), nn === null ? St = pi : nn.sibling = pi, nn = pi);
          }
          if (Vr()) {
            var wa = $t;
            nc(I, wa);
          }
          return St;
        }
        for (var xa = i(I, Bt); $t < B.length; $t++) {
          var da = W(xa, I, $t, B[$t], ge);
          da !== null && (e && da.alternate !== null && xa.delete(da.key === null ? $t : da.key), Jn = s(da, Jn, $t), nn === null ? St = da : nn.sibling = da, nn = da);
        }
        if (e && xa.forEach(function(ad) {
          return t(I, ad);
        }), Vr()) {
          var Zl = $t;
          nc(I, Zl);
        }
        return St;
      }
      function Me(I, ne, B, ge) {
        var He = Ct(B);
        if (typeof He != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          B[Symbol.toStringTag] === "Generator" && (Ug || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Ug = !0), B.entries === He && (Ag || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ag = !0);
          var ze = He.call(B);
          if (ze)
            for (var ft = null, St = ze.next(); !St.done; St = ze.next()) {
              var nn = St.value;
              ft = q(nn, ft, I);
            }
        }
        var Bt = He.call(B);
        if (Bt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Jn = null, $t = null, $n = ne, fa = 0, Gr = 0, pi = null, wa = Bt.next(); $n !== null && !wa.done; Gr++, wa = Bt.next()) {
          $n.index > Gr ? (pi = $n, $n = null) : pi = $n.sibling;
          var xa = A(I, $n, wa.value, ge);
          if (xa === null) {
            $n === null && ($n = pi);
            break;
          }
          e && $n && xa.alternate === null && t(I, $n), fa = s(xa, fa, Gr), $t === null ? Jn = xa : $t.sibling = xa, $t = xa, $n = pi;
        }
        if (wa.done) {
          if (a(I, $n), Vr()) {
            var da = Gr;
            nc(I, da);
          }
          return Jn;
        }
        if ($n === null) {
          for (; !wa.done; Gr++, wa = Bt.next()) {
            var Zl = j(I, wa.value, ge);
            Zl !== null && (fa = s(Zl, fa, Gr), $t === null ? Jn = Zl : $t.sibling = Zl, $t = Zl);
          }
          if (Vr()) {
            var ad = Gr;
            nc(I, ad);
          }
          return Jn;
        }
        for (var dv = i(I, $n); !wa.done; Gr++, wa = Bt.next()) {
          var il = W(dv, I, Gr, wa.value, ge);
          il !== null && (e && il.alternate !== null && dv.delete(il.key === null ? Gr : il.key), fa = s(il, fa, Gr), $t === null ? Jn = il : $t.sibling = il, $t = il);
        }
        if (e && dv.forEach(function(Nk) {
          return t(I, Nk);
        }), Vr()) {
          var Lk = Gr;
          nc(I, Lk);
        }
        return Jn;
      }
      function at(I, ne, B, ge) {
        if (ne !== null && ne.tag === X) {
          a(I, ne.sibling);
          var He = l(ne, B);
          return He.return = I, He;
        }
        a(I, ne);
        var ze = MS(B, I.mode, ge);
        return ze.return = I, ze;
      }
      function Xe(I, ne, B, ge) {
        for (var He = B.key, ze = ne; ze !== null; ) {
          if (ze.key === He) {
            var ft = B.type;
            if (ft === mi) {
              if (ze.tag === K) {
                a(I, ze.sibling);
                var St = l(ze, B.props.children);
                return St.return = I, St._debugSource = B._source, St._debugOwner = B._owner, St;
              }
            } else if (ze.elementType === ft || // Keep this check inline so it only runs on the false path:
            uE(ze, B) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ft == "object" && ft !== null && ft.$$typeof === yt && n1(ft) === ze.type) {
              a(I, ze.sibling);
              var nn = l(ze, B.props);
              return nn.ref = Ap(I, ze, B), nn.return = I, nn._debugSource = B._source, nn._debugOwner = B._owner, nn;
            }
            a(I, ze);
            break;
          } else
            t(I, ze);
          ze = ze.sibling;
        }
        if (B.type === mi) {
          var Bt = Zu(B.props.children, I.mode, ge, B.key);
          return Bt.return = I, Bt;
        } else {
          var Jn = NS(B, I.mode, ge);
          return Jn.ref = Ap(I, ne, B), Jn.return = I, Jn;
        }
      }
      function Ut(I, ne, B, ge) {
        for (var He = B.key, ze = ne; ze !== null; ) {
          if (ze.key === He)
            if (ze.tag === V && ze.stateNode.containerInfo === B.containerInfo && ze.stateNode.implementation === B.implementation) {
              a(I, ze.sibling);
              var ft = l(ze, B.children || []);
              return ft.return = I, ft;
            } else {
              a(I, ze);
              break;
            }
          else
            t(I, ze);
          ze = ze.sibling;
        }
        var St = AS(B, I.mode, ge);
        return St.return = I, St;
      }
      function Dt(I, ne, B, ge) {
        var He = typeof B == "object" && B !== null && B.type === mi && B.key === null;
        if (He && (B = B.props.children), typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case Lr:
              return f(Xe(I, ne, B, ge));
            case lr:
              return f(Ut(I, ne, B, ge));
            case yt:
              var ze = B._payload, ft = B._init;
              return Dt(I, ne, ft(ze), ge);
          }
          if (bt(B))
            return te(I, ne, B, ge);
          if (Ct(B))
            return Me(I, ne, B, ge);
          um(I, B);
        }
        return typeof B == "string" && B !== "" || typeof B == "number" ? f(at(I, ne, "" + B, ge)) : (typeof B == "function" && sm(I), a(I, ne));
      }
      return Dt;
    }
    var Vf = r1(!0), a1 = r1(!1);
    function lb(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = hc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = hc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function ub(e, t) {
      for (var a = e.child; a !== null; )
        qx(a, t), a = a.sibling;
    }
    var Fg = Fu(null), Vg;
    Vg = {};
    var cm = null, Hf = null, Hg = null, fm = !1;
    function dm() {
      cm = null, Hf = null, Hg = null, fm = !1;
    }
    function i1() {
      fm = !0;
    }
    function o1() {
      fm = !1;
    }
    function l1(e, t, a) {
      sa(Fg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Vg && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Vg;
    }
    function Ig(e, t) {
      var a = Fg.current;
      ua(Fg, t), e._currentValue = a;
    }
    function Bg(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (Ul(i.childLanes, t) ? l !== null && !Ul(l.childLanes, t) && (l.childLanes = Et(l.childLanes, t)) : (i.childLanes = Et(i.childLanes, t), l !== null && (l.childLanes = Et(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function sb(e, t, a) {
      cb(e, t, a);
    }
    function cb(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, s = i.dependencies;
        if (s !== null) {
          l = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === b) {
                var p = Ms(a), g = Gl(an, p);
                g.tag = vm;
                var C = i.updateQueue;
                if (C !== null) {
                  var R = C.shared, j = R.pending;
                  j === null ? g.next = g : (g.next = j.next, j.next = g), R.pending = g;
                }
              }
              i.lanes = Et(i.lanes, a);
              var A = i.alternate;
              A !== null && (A.lanes = Et(A.lanes, a)), Bg(i.return, a, e), s.lanes = Et(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === ue)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === it) {
          var W = i.return;
          if (W === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          W.lanes = Et(W.lanes, a);
          var q = W.alternate;
          q !== null && (q.lanes = Et(q.lanes, a)), Bg(W, a, e), l = i.sibling;
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
    function If(e, t) {
      cm = e, Hf = null, Hg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (aa(a.lanes, t) && qp(), a.firstContext = null);
      }
    }
    function ir(e) {
      fm && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Hg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Hf === null) {
          if (cm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Hf = a, cm.dependencies = {
            lanes: ce,
            firstContext: a
          };
        } else
          Hf = Hf.next = a;
      }
      return t;
    }
    var lc = null;
    function $g(e) {
      lc === null ? lc = [e] : lc.push(e);
    }
    function fb() {
      if (lc !== null) {
        for (var e = 0; e < lc.length; e++) {
          var t = lc[e], a = t.interleaved;
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
        lc = null;
      }
    }
    function u1(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, $g(t)) : (a.next = l.next, l.next = a), t.interleaved = a, pm(e, i);
    }
    function db(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, $g(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function pb(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, $g(t)) : (a.next = l.next, l.next = a), t.interleaved = a, pm(e, i);
    }
    function Ba(e, t) {
      return pm(e, t);
    }
    var vb = pm;
    function pm(e, t) {
      e.lanes = Et(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Et(a.lanes, t)), a === null && (e.flags & (Sn | Zr)) !== et && aE(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = Et(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = Et(a.childLanes, t) : (l.flags & (Sn | Zr)) !== et && aE(e), i = l, l = l.return;
      if (i.tag === P) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var s1 = 0, c1 = 1, vm = 2, Wg = 3, hm = !1, Yg, mm;
    Yg = !1, mm = null;
    function Gg(e) {
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
    function f1(e, t) {
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
    function Gl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: s1,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Bu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (mm === l && !Yg && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Yg = !0), dx()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, vb(e, a);
      } else
        return pb(e, l, t, a);
    }
    function ym(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (Gd(a)) {
          var s = l.lanes;
          s = qd(s, e.pendingLanes);
          var f = Et(s, a);
          l.lanes = f, vf(e, f);
        }
      }
    }
    function Qg(e, t) {
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
      var R = a.lastBaseUpdate;
      R === null ? a.firstBaseUpdate = t : R.next = t, a.lastBaseUpdate = t;
    }
    function hb(e, t, a, i, l, s) {
      switch (a.tag) {
        case c1: {
          var f = a.payload;
          if (typeof f == "function") {
            i1();
            var p = f.call(s, i, l);
            {
              if (e.mode & en) {
                _n(!0);
                try {
                  f.call(s, i, l);
                } finally {
                  _n(!1);
                }
              }
              o1();
            }
            return p;
          }
          return f;
        }
        case Wg:
          e.flags = e.flags & ~tr | Je;
        // Intentional fallthrough
        case s1: {
          var g = a.payload, C;
          if (typeof g == "function") {
            i1(), C = g.call(s, i, l);
            {
              if (e.mode & en) {
                _n(!0);
                try {
                  g.call(s, i, l);
                } finally {
                  _n(!1);
                }
              }
              o1();
            }
          } else
            C = g;
          return C == null ? i : Rt({}, i, C);
        }
        case vm:
          return hm = !0, i;
      }
      return i;
    }
    function gm(e, t, a, i) {
      var l = e.updateQueue;
      hm = !1, mm = l.shared;
      var s = l.firstBaseUpdate, f = l.lastBaseUpdate, p = l.shared.pending;
      if (p !== null) {
        l.shared.pending = null;
        var g = p, C = g.next;
        g.next = null, f === null ? s = C : f.next = C, f = g;
        var R = e.alternate;
        if (R !== null) {
          var j = R.updateQueue, A = j.lastBaseUpdate;
          A !== f && (A === null ? j.firstBaseUpdate = C : A.next = C, j.lastBaseUpdate = g);
        }
      }
      if (s !== null) {
        var W = l.baseState, q = ce, te = null, Me = null, at = null, Xe = s;
        do {
          var Ut = Xe.lane, Dt = Xe.eventTime;
          if (Ul(i, Ut)) {
            if (at !== null) {
              var ne = {
                eventTime: Dt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Pt,
                tag: Xe.tag,
                payload: Xe.payload,
                callback: Xe.callback,
                next: null
              };
              at = at.next = ne;
            }
            W = hb(e, l, Xe, W, t, a);
            var B = Xe.callback;
            if (B !== null && // If the update was already committed, we should not queue its
            // callback again.
            Xe.lane !== Pt) {
              e.flags |= cn;
              var ge = l.effects;
              ge === null ? l.effects = [Xe] : ge.push(Xe);
            }
          } else {
            var I = {
              eventTime: Dt,
              lane: Ut,
              tag: Xe.tag,
              payload: Xe.payload,
              callback: Xe.callback,
              next: null
            };
            at === null ? (Me = at = I, te = W) : at = at.next = I, q = Et(q, Ut);
          }
          if (Xe = Xe.next, Xe === null) {
            if (p = l.shared.pending, p === null)
              break;
            var He = p, ze = He.next;
            He.next = null, Xe = ze, l.lastBaseUpdate = He, l.shared.pending = null;
          }
        } while (!0);
        at === null && (te = W), l.baseState = te, l.firstBaseUpdate = Me, l.lastBaseUpdate = at;
        var ft = l.shared.interleaved;
        if (ft !== null) {
          var St = ft;
          do
            q = Et(q, St.lane), St = St.next;
          while (St !== ft);
        } else s === null && (l.shared.lanes = ce);
        lv(q), e.lanes = q, e.memoizedState = W;
      }
      mm = null;
    }
    function mb(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function d1() {
      hm = !1;
    }
    function Sm() {
      return hm;
    }
    function p1(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], f = s.callback;
          f !== null && (s.callback = null, mb(f, a));
        }
    }
    var Up = {}, $u = Fu(Up), jp = Fu(Up), _m = Fu(Up);
    function Cm(e) {
      if (e === Up)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function v1() {
      var e = Cm(_m.current);
      return e;
    }
    function qg(e, t) {
      sa(_m, t, e), sa(jp, e, e), sa($u, Up, e);
      var a = M2(t);
      ua($u, e), sa($u, a, e);
    }
    function Bf(e) {
      ua($u, e), ua(jp, e), ua(_m, e);
    }
    function Kg() {
      var e = Cm($u.current);
      return e;
    }
    function h1(e) {
      Cm(_m.current);
      var t = Cm($u.current), a = A2(t, e.type);
      t !== a && (sa(jp, e, e), sa($u, a, e));
    }
    function Xg(e) {
      jp.current === e && (ua($u, e), ua(jp, e));
    }
    var yb = 0, m1 = 1, y1 = 1, zp = 2, fo = Fu(yb);
    function Jg(e, t) {
      return (e & t) !== 0;
    }
    function $f(e) {
      return e & m1;
    }
    function Zg(e, t) {
      return e & m1 | t;
    }
    function gb(e, t) {
      return e | t;
    }
    function Wu(e, t) {
      sa(fo, t, e);
    }
    function Wf(e) {
      ua(fo, e);
    }
    function Sb(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Em(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ve) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || A_(i) || yg(i))
              return t;
          }
        } else if (t.tag === Se && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & Je) !== et;
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
    ), vr = (
      /* */
      1
    ), Jo = (
      /*  */
      2
    ), hr = (
      /*    */
      4
    ), Hr = (
      /*   */
      8
    ), e0 = [];
    function t0() {
      for (var e = 0; e < e0.length; e++) {
        var t = e0[e];
        t._workInProgressVersionPrimary = null;
      }
      e0.length = 0;
    }
    function _b(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Fe = h.ReactCurrentDispatcher, Pp = h.ReactCurrentBatchConfig, n0, Yf;
    n0 = /* @__PURE__ */ new Set();
    var uc = ce, tn = null, mr = null, yr = null, Rm = !1, Fp = !1, Vp = 0, Cb = 0, Eb = 25, oe = null, Fi = null, Yu = -1, r0 = !1;
    function Gt() {
      {
        var e = oe;
        Fi === null ? Fi = [e] : Fi.push(e);
      }
    }
    function ke() {
      {
        var e = oe;
        Fi !== null && (Yu++, Fi[Yu] !== e && Rb(e));
      }
    }
    function Gf(e) {
      e != null && !bt(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", oe, typeof e);
    }
    function Rb(e) {
      {
        var t = ht(tn);
        if (!n0.has(t) && (n0.add(t), Fi !== null)) {
          for (var a = "", i = 30, l = 0; l <= Yu; l++) {
            for (var s = Fi[l], f = l === Yu ? e : s, p = l + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          y(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

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
    function a0(e, t) {
      if (r0)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", oe), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, oe, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!me(e[a], t[a]))
          return !1;
      return !0;
    }
    function Qf(e, t, a, i, l, s) {
      uc = s, tn = t, Fi = e !== null ? e._debugHookTypes : null, Yu = -1, r0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ce, e !== null && e.memoizedState !== null ? Fe.current = F1 : Fi !== null ? Fe.current = P1 : Fe.current = z1;
      var f = a(i, l);
      if (Fp) {
        var p = 0;
        do {
          if (Fp = !1, Vp = 0, p >= Eb)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, r0 = !1, mr = null, yr = null, t.updateQueue = null, Yu = -1, Fe.current = V1, f = a(i, l);
        } while (Fp);
      }
      Fe.current = jm, t._debugHookTypes = Fi;
      var g = mr !== null && mr.next !== null;
      if (uc = ce, tn = null, mr = null, yr = null, oe = null, Fi = null, Yu = -1, e !== null && (e.flags & Pn) !== (t.flags & Pn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & xt) !== tt && y("Internal React error: Expected static flag was missing. Please notify the React team."), Rm = !1, g)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function qf() {
      var e = Vp !== 0;
      return Vp = 0, e;
    }
    function g1(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ht) !== tt ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = As(e.lanes, a);
    }
    function S1() {
      if (Fe.current = jm, Rm) {
        for (var e = tn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Rm = !1;
      }
      uc = ce, tn = null, mr = null, yr = null, Fi = null, Yu = -1, oe = null, N1 = !1, Fp = !1, Vp = 0;
    }
    function Zo() {
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
    function _1() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function i0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function o0(e, t, a) {
      var i = Zo(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var s = {
        pending: null,
        interleaved: null,
        lanes: ce,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = s;
      var f = s.dispatch = xb.bind(null, tn, s);
      return [i.memoizedState, f];
    }
    function l0(e, t, a) {
      var i = Vi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = mr, f = s.baseQueue, p = l.pending;
      if (p !== null) {
        if (f !== null) {
          var g = f.next, C = p.next;
          f.next = C, p.next = g;
        }
        s.baseQueue !== f && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, l.pending = null;
      }
      if (f !== null) {
        var R = f.next, j = s.baseState, A = null, W = null, q = null, te = R;
        do {
          var Me = te.lane;
          if (Ul(uc, Me)) {
            if (q !== null) {
              var Xe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Pt,
                action: te.action,
                hasEagerState: te.hasEagerState,
                eagerState: te.eagerState,
                next: null
              };
              q = q.next = Xe;
            }
            if (te.hasEagerState)
              j = te.eagerState;
            else {
              var Ut = te.action;
              j = e(j, Ut);
            }
          } else {
            var at = {
              lane: Me,
              action: te.action,
              hasEagerState: te.hasEagerState,
              eagerState: te.eagerState,
              next: null
            };
            q === null ? (W = q = at, A = j) : q = q.next = at, tn.lanes = Et(tn.lanes, Me), lv(Me);
          }
          te = te.next;
        } while (te !== null && te !== R);
        q === null ? A = j : q.next = W, me(j, i.memoizedState) || qp(), i.memoizedState = j, i.baseState = A, i.baseQueue = q, l.lastRenderedState = j;
      }
      var Dt = l.interleaved;
      if (Dt !== null) {
        var I = Dt;
        do {
          var ne = I.lane;
          tn.lanes = Et(tn.lanes, ne), lv(ne), I = I.next;
        } while (I !== Dt);
      } else f === null && (l.lanes = ce);
      var B = l.dispatch;
      return [i.memoizedState, B];
    }
    function u0(e, t, a) {
      var i = Vi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, f = l.pending, p = i.memoizedState;
      if (f !== null) {
        l.pending = null;
        var g = f.next, C = g;
        do {
          var R = C.action;
          p = e(p, R), C = C.next;
        } while (C !== g);
        me(p, i.memoizedState) || qp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), l.lastRenderedState = p;
      }
      return [p, s];
    }
    function j3(e, t, a) {
    }
    function z3(e, t, a) {
    }
    function s0(e, t, a) {
      var i = tn, l = Zo(), s, f = Vr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Yf || s !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), Yf = !0);
      } else {
        if (s = t(), !Yf) {
          var p = t();
          me(s, p) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Yf = !0);
        }
        var g = ty();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        df(g, uc) || C1(i, t, s);
      }
      l.memoizedState = s;
      var C = {
        value: s,
        getSnapshot: t
      };
      return l.queue = C, km(R1.bind(null, i, C, e), [e]), i.flags |= Jr, Hp(vr | Hr, E1.bind(null, i, C, s, t), void 0, null), s;
    }
    function Tm(e, t, a) {
      var i = tn, l = Vi(), s = t();
      if (!Yf) {
        var f = t();
        me(s, f) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Yf = !0);
      }
      var p = l.memoizedState, g = !me(p, s);
      g && (l.memoizedState = s, qp());
      var C = l.queue;
      if (Bp(R1.bind(null, i, C, e), [e]), C.getSnapshot !== t || g || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      yr !== null && yr.memoizedState.tag & vr) {
        i.flags |= Jr, Hp(vr | Hr, E1.bind(null, i, C, s, t), void 0, null);
        var R = ty();
        if (R === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        df(R, uc) || C1(i, t, s);
      }
      return s;
    }
    function C1(e, t, a) {
      e.flags |= Ru;
      var i = {
        getSnapshot: t,
        value: a
      }, l = tn.updateQueue;
      if (l === null)
        l = _1(), tn.updateQueue = l, l.stores = [i];
      else {
        var s = l.stores;
        s === null ? l.stores = [i] : s.push(i);
      }
    }
    function E1(e, t, a, i) {
      t.value = a, t.getSnapshot = i, T1(t) && b1(e);
    }
    function R1(e, t, a) {
      var i = function() {
        T1(t) && b1(e);
      };
      return a(i);
    }
    function T1(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !me(a, i);
      } catch {
        return !0;
      }
    }
    function b1(e) {
      var t = Ba(e, ct);
      t !== null && Cr(t, e, ct, an);
    }
    function bm(e) {
      var t = Zo();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ce,
        dispatch: null,
        lastRenderedReducer: i0,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = kb.bind(null, tn, a);
      return [t.memoizedState, i];
    }
    function c0(e) {
      return l0(i0);
    }
    function f0(e) {
      return u0(i0);
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
        s = _1(), tn.updateQueue = s, s.lastEffect = l.next = l;
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
    function d0(e) {
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
      tn.flags |= e, l.memoizedState = Hp(vr | t, a, void 0, s);
    }
    function xm(e, t, a, i) {
      var l = Vi(), s = i === void 0 ? null : i, f = void 0;
      if (mr !== null) {
        var p = mr.memoizedState;
        if (f = p.destroy, s !== null) {
          var g = p.deps;
          if (a0(s, g)) {
            l.memoizedState = Hp(t, a, f, s);
            return;
          }
        }
      }
      tn.flags |= e, l.memoizedState = Hp(vr | t, a, f, s);
    }
    function km(e, t) {
      return (tn.mode & Ht) !== tt ? Ip(xi | Jr | Pc, Hr, e, t) : Ip(Jr | Pc, Hr, e, t);
    }
    function Bp(e, t) {
      return xm(Jr, Hr, e, t);
    }
    function p0(e, t) {
      return Ip(Nt, Jo, e, t);
    }
    function Om(e, t) {
      return xm(Nt, Jo, e, t);
    }
    function v0(e, t) {
      var a = Nt;
      return a |= Zi, (tn.mode & Ht) !== tt && (a |= Ao), Ip(a, hr, e, t);
    }
    function Dm(e, t) {
      return xm(Nt, hr, e, t);
    }
    function w1(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || y("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var s = e();
        return l.current = s, function() {
          l.current = null;
        };
      }
    }
    function h0(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = Nt;
      return l |= Zi, (tn.mode & Ht) !== tt && (l |= Ao), Ip(l, hr, w1.bind(null, t, e), i);
    }
    function Lm(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return xm(Nt, hr, w1.bind(null, t, e), i);
    }
    function Tb(e, t) {
    }
    var Nm = Tb;
    function m0(e, t) {
      var a = Zo(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Mm(e, t) {
      var a = Vi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (a0(i, s))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function y0(e, t) {
      var a = Zo(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function Am(e, t) {
      var a = Vi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (a0(i, s))
          return l[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function g0(e) {
      var t = Zo();
      return t.memoizedState = e, e;
    }
    function x1(e) {
      var t = Vi(), a = mr, i = a.memoizedState;
      return O1(t, i, e);
    }
    function k1(e) {
      var t = Vi();
      if (mr === null)
        return t.memoizedState = e, e;
      var a = mr.memoizedState;
      return O1(t, a, e);
    }
    function O1(e, t, a) {
      var i = !Wd(uc);
      if (i) {
        if (!me(a, t)) {
          var l = Qd();
          tn.lanes = Et(tn.lanes, l), lv(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, qp()), e.memoizedState = a, a;
    }
    function bb(e, t, a) {
      var i = Va();
      Hn(fh(i, Li)), e(!0);
      var l = Pp.transition;
      Pp.transition = {};
      var s = Pp.transition;
      Pp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Hn(i), Pp.transition = l, l === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && T("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function S0() {
      var e = bm(!1), t = e[0], a = e[1], i = bb.bind(null, a), l = Zo();
      return l.memoizedState = i, [t, i];
    }
    function D1() {
      var e = c0(), t = e[0], a = Vi(), i = a.memoizedState;
      return [t, i];
    }
    function L1() {
      var e = f0(), t = e[0], a = Vi(), i = a.memoizedState;
      return [t, i];
    }
    var N1 = !1;
    function wb() {
      return N1;
    }
    function _0() {
      var e = Zo(), t = ty(), a = t.identifierPrefix, i;
      if (Vr()) {
        var l = BT();
        i = ":" + a + "R" + l;
        var s = Vp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Cb++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Um() {
      var e = Vi(), t = e.memoizedState;
      return t;
    }
    function xb(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Xu(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (M1(e))
        A1(t, l);
      else {
        var s = u1(e, t, l, i);
        if (s !== null) {
          var f = ba();
          Cr(s, e, i, f), U1(s, t, i);
        }
      }
      j1(e, i);
    }
    function kb(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Xu(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (M1(e))
        A1(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === ce && (s === null || s.lanes === ce)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = Fe.current, Fe.current = po;
            try {
              var g = t.lastRenderedState, C = f(g, a);
              if (l.hasEagerState = !0, l.eagerState = C, me(C, g)) {
                db(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              Fe.current = p;
            }
          }
        }
        var R = u1(e, t, l, i);
        if (R !== null) {
          var j = ba();
          Cr(R, e, i, j), U1(R, t, i);
        }
      }
      j1(e, i);
    }
    function M1(e) {
      var t = e.alternate;
      return e === tn || t !== null && t === tn;
    }
    function A1(e, t) {
      Fp = Rm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function U1(e, t, a) {
      if (Gd(a)) {
        var i = t.lanes;
        i = qd(i, e.pendingLanes);
        var l = Et(i, a);
        t.lanes = l, vf(e, l);
      }
    }
    function j1(e, t, a) {
      Ts(e, t);
    }
    var jm = {
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
      unstable_isNewReconciler: ie
    }, z1 = null, P1 = null, F1 = null, V1 = null, el = null, po = null, zm = null;
    {
      var C0 = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, gt = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      z1 = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", Gt(), Gf(t), m0(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", Gt(), ir(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", Gt(), Gf(t), km(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return oe = "useImperativeHandle", Gt(), Gf(a), h0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", Gt(), Gf(t), p0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", Gt(), Gf(t), v0(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", Gt(), Gf(t);
          var a = Fe.current;
          Fe.current = el;
          try {
            return y0(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          oe = "useReducer", Gt();
          var i = Fe.current;
          Fe.current = el;
          try {
            return o0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return oe = "useRef", Gt(), d0(e);
        },
        useState: function(e) {
          oe = "useState", Gt();
          var t = Fe.current;
          Fe.current = el;
          try {
            return bm(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", Gt(), void 0;
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", Gt(), g0(e);
        },
        useTransition: function() {
          return oe = "useTransition", Gt(), S0();
        },
        useMutableSource: function(e, t, a) {
          return oe = "useMutableSource", Gt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return oe = "useSyncExternalStore", Gt(), s0(e, t, a);
        },
        useId: function() {
          return oe = "useId", Gt(), _0();
        },
        unstable_isNewReconciler: ie
      }, P1 = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", ke(), m0(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", ke(), ir(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", ke(), km(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return oe = "useImperativeHandle", ke(), h0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", ke(), p0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", ke(), v0(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", ke();
          var a = Fe.current;
          Fe.current = el;
          try {
            return y0(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          oe = "useReducer", ke();
          var i = Fe.current;
          Fe.current = el;
          try {
            return o0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return oe = "useRef", ke(), d0(e);
        },
        useState: function(e) {
          oe = "useState", ke();
          var t = Fe.current;
          Fe.current = el;
          try {
            return bm(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", ke(), void 0;
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", ke(), g0(e);
        },
        useTransition: function() {
          return oe = "useTransition", ke(), S0();
        },
        useMutableSource: function(e, t, a) {
          return oe = "useMutableSource", ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return oe = "useSyncExternalStore", ke(), s0(e, t, a);
        },
        useId: function() {
          return oe = "useId", ke(), _0();
        },
        unstable_isNewReconciler: ie
      }, F1 = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", ke(), Mm(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", ke(), ir(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", ke(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return oe = "useImperativeHandle", ke(), Lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", ke(), Om(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", ke(), Dm(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", ke();
          var a = Fe.current;
          Fe.current = po;
          try {
            return Am(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          oe = "useReducer", ke();
          var i = Fe.current;
          Fe.current = po;
          try {
            return l0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return oe = "useRef", ke(), wm();
        },
        useState: function(e) {
          oe = "useState", ke();
          var t = Fe.current;
          Fe.current = po;
          try {
            return c0(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", ke(), Nm();
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", ke(), x1(e);
        },
        useTransition: function() {
          return oe = "useTransition", ke(), D1();
        },
        useMutableSource: function(e, t, a) {
          return oe = "useMutableSource", ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return oe = "useSyncExternalStore", ke(), Tm(e, t);
        },
        useId: function() {
          return oe = "useId", ke(), Um();
        },
        unstable_isNewReconciler: ie
      }, V1 = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", ke(), Mm(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", ke(), ir(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", ke(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return oe = "useImperativeHandle", ke(), Lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", ke(), Om(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", ke(), Dm(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", ke();
          var a = Fe.current;
          Fe.current = zm;
          try {
            return Am(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          oe = "useReducer", ke();
          var i = Fe.current;
          Fe.current = zm;
          try {
            return u0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return oe = "useRef", ke(), wm();
        },
        useState: function(e) {
          oe = "useState", ke();
          var t = Fe.current;
          Fe.current = zm;
          try {
            return f0(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", ke(), Nm();
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", ke(), k1(e);
        },
        useTransition: function() {
          return oe = "useTransition", ke(), L1();
        },
        useMutableSource: function(e, t, a) {
          return oe = "useMutableSource", ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return oe = "useSyncExternalStore", ke(), Tm(e, t);
        },
        useId: function() {
          return oe = "useId", ke(), Um();
        },
        unstable_isNewReconciler: ie
      }, el = {
        readContext: function(e) {
          return C0(), ir(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", gt(), Gt(), m0(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", gt(), Gt(), ir(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", gt(), Gt(), km(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return oe = "useImperativeHandle", gt(), Gt(), h0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", gt(), Gt(), p0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", gt(), Gt(), v0(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", gt(), Gt();
          var a = Fe.current;
          Fe.current = el;
          try {
            return y0(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          oe = "useReducer", gt(), Gt();
          var i = Fe.current;
          Fe.current = el;
          try {
            return o0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return oe = "useRef", gt(), Gt(), d0(e);
        },
        useState: function(e) {
          oe = "useState", gt(), Gt();
          var t = Fe.current;
          Fe.current = el;
          try {
            return bm(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", gt(), Gt(), void 0;
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", gt(), Gt(), g0(e);
        },
        useTransition: function() {
          return oe = "useTransition", gt(), Gt(), S0();
        },
        useMutableSource: function(e, t, a) {
          return oe = "useMutableSource", gt(), Gt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return oe = "useSyncExternalStore", gt(), Gt(), s0(e, t, a);
        },
        useId: function() {
          return oe = "useId", gt(), Gt(), _0();
        },
        unstable_isNewReconciler: ie
      }, po = {
        readContext: function(e) {
          return C0(), ir(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", gt(), ke(), Mm(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", gt(), ke(), ir(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", gt(), ke(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return oe = "useImperativeHandle", gt(), ke(), Lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", gt(), ke(), Om(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", gt(), ke(), Dm(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", gt(), ke();
          var a = Fe.current;
          Fe.current = po;
          try {
            return Am(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          oe = "useReducer", gt(), ke();
          var i = Fe.current;
          Fe.current = po;
          try {
            return l0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return oe = "useRef", gt(), ke(), wm();
        },
        useState: function(e) {
          oe = "useState", gt(), ke();
          var t = Fe.current;
          Fe.current = po;
          try {
            return c0(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", gt(), ke(), Nm();
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", gt(), ke(), x1(e);
        },
        useTransition: function() {
          return oe = "useTransition", gt(), ke(), D1();
        },
        useMutableSource: function(e, t, a) {
          return oe = "useMutableSource", gt(), ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return oe = "useSyncExternalStore", gt(), ke(), Tm(e, t);
        },
        useId: function() {
          return oe = "useId", gt(), ke(), Um();
        },
        unstable_isNewReconciler: ie
      }, zm = {
        readContext: function(e) {
          return C0(), ir(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", gt(), ke(), Mm(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", gt(), ke(), ir(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", gt(), ke(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return oe = "useImperativeHandle", gt(), ke(), Lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", gt(), ke(), Om(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", gt(), ke(), Dm(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", gt(), ke();
          var a = Fe.current;
          Fe.current = po;
          try {
            return Am(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          oe = "useReducer", gt(), ke();
          var i = Fe.current;
          Fe.current = po;
          try {
            return u0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return oe = "useRef", gt(), ke(), wm();
        },
        useState: function(e) {
          oe = "useState", gt(), ke();
          var t = Fe.current;
          Fe.current = po;
          try {
            return f0(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", gt(), ke(), Nm();
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", gt(), ke(), k1(e);
        },
        useTransition: function() {
          return oe = "useTransition", gt(), ke(), L1();
        },
        useMutableSource: function(e, t, a) {
          return oe = "useMutableSource", gt(), ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return oe = "useSyncExternalStore", gt(), ke(), Tm(e, t);
        },
        useId: function() {
          return oe = "useId", gt(), ke(), Um();
        },
        unstable_isNewReconciler: ie
      };
    }
    var Gu = m.unstable_now, H1 = 0, Pm = -1, $p = -1, Fm = -1, E0 = !1, Vm = !1;
    function I1() {
      return E0;
    }
    function Ob() {
      Vm = !0;
    }
    function Db() {
      E0 = !1, Vm = !1;
    }
    function Lb() {
      E0 = Vm, Vm = !1;
    }
    function B1() {
      return H1;
    }
    function $1() {
      H1 = Gu();
    }
    function R0(e) {
      $p = Gu(), e.actualStartTime < 0 && (e.actualStartTime = Gu());
    }
    function W1(e) {
      $p = -1;
    }
    function Hm(e, t) {
      if ($p >= 0) {
        var a = Gu() - $p;
        e.actualDuration += a, t && (e.selfBaseDuration = a), $p = -1;
      }
    }
    function tl(e) {
      if (Pm >= 0) {
        var t = Gu() - Pm;
        Pm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case P:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case _e:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function T0(e) {
      if (Fm >= 0) {
        var t = Gu() - Fm;
        Fm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case P:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case _e:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function nl() {
      Pm = Gu();
    }
    function b0() {
      Fm = Gu();
    }
    function w0(e) {
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
    var x0 = {}, k0, O0, D0, L0, N0, Y1, Im, M0, A0, U0, Wp;
    {
      k0 = /* @__PURE__ */ new Set(), O0 = /* @__PURE__ */ new Set(), D0 = /* @__PURE__ */ new Set(), L0 = /* @__PURE__ */ new Set(), M0 = /* @__PURE__ */ new Set(), N0 = /* @__PURE__ */ new Set(), A0 = /* @__PURE__ */ new Set(), U0 = /* @__PURE__ */ new Set(), Wp = /* @__PURE__ */ new Set();
      var G1 = /* @__PURE__ */ new Set();
      Im = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          G1.has(a) || (G1.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, Y1 = function(e, t) {
        if (t === void 0) {
          var a = jt(e) || "Component";
          N0.has(a) || (N0.add(a), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(x0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(x0);
    }
    function j0(e, t, a, i) {
      var l = e.memoizedState, s = a(i, l);
      {
        if (e.mode & en) {
          _n(!0);
          try {
            s = a(i, l);
          } finally {
            _n(!1);
          }
        }
        Y1(t, s);
      }
      var f = s == null ? l : Rt({}, l, s);
      if (e.memoizedState = f, e.lanes === ce) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var z0 = {
      isMounted: qv,
      enqueueSetState: function(e, t, a) {
        var i = Eu(e), l = ba(), s = Xu(i), f = Gl(l, s);
        f.payload = t, a != null && (Im(a, "setState"), f.callback = a);
        var p = Bu(i, f, s);
        p !== null && (Cr(p, i, s, l), ym(p, i, s)), Ts(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Eu(e), l = ba(), s = Xu(i), f = Gl(l, s);
        f.tag = c1, f.payload = t, a != null && (Im(a, "replaceState"), f.callback = a);
        var p = Bu(i, f, s);
        p !== null && (Cr(p, i, s, l), ym(p, i, s)), Ts(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Eu(e), i = ba(), l = Xu(a), s = Gl(i, l);
        s.tag = vm, t != null && (Im(t, "forceUpdate"), s.callback = t);
        var f = Bu(a, s, l);
        f !== null && (Cr(f, a, l, i), ym(f, a, l)), Wc(a, l);
      }
    };
    function Q1(e, t, a, i, l, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var g = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & en) {
            _n(!0);
            try {
              g = p.shouldComponentUpdate(i, s, f);
            } finally {
              _n(!1);
            }
          }
          g === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", jt(t) || "Component");
        }
        return g;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ye(a, i) || !Ye(l, s) : !0;
    }
    function Nb(e, t, a) {
      var i = e.stateNode;
      {
        var l = jt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), t.childContextTypes && !Wp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & en) === tt && (Wp.add(t), y(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), t.contextTypes && !Wp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & en) === tt && (Wp.add(t), y(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !A0.has(t) && (A0.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", jt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var f = i.props !== a;
        i.props !== void 0 && f && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !D0.has(t) && (D0.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", jt(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var p = i.state;
        p && (typeof p != "object" || bt(p)) && y("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function q1(e, t) {
      t.updater = z0, e.stateNode = t, Cl(t, e), t._reactInternalInstance = x0;
    }
    function K1(e, t, a) {
      var i = !1, l = fi, s = fi, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === D && f._context === void 0
        );
        if (!p && !U0.has(t)) {
          U0.add(t);
          var g = "";
          f === void 0 ? g = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? g = " However, it is set to a " + typeof f + "." : f.$$typeof === gi ? g = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? g = " Did you accidentally pass the Context.Consumer instead?" : g = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", jt(t) || "Component", g);
        }
      }
      if (typeof f == "object" && f !== null)
        s = ir(f);
      else {
        l = Uf(e, t, !0);
        var C = t.contextTypes;
        i = C != null, s = i ? jf(e, l) : fi;
      }
      var R = new t(a, s);
      if (e.mode & en) {
        _n(!0);
        try {
          R = new t(a, s);
        } finally {
          _n(!1);
        }
      }
      var j = e.memoizedState = R.state !== null && R.state !== void 0 ? R.state : null;
      q1(e, R);
      {
        if (typeof t.getDerivedStateFromProps == "function" && j === null) {
          var A = jt(t) || "Component";
          O0.has(A) || (O0.add(A), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", A, R.state === null ? "null" : "undefined", A));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof R.getSnapshotBeforeUpdate == "function") {
          var W = null, q = null, te = null;
          if (typeof R.componentWillMount == "function" && R.componentWillMount.__suppressDeprecationWarning !== !0 ? W = "componentWillMount" : typeof R.UNSAFE_componentWillMount == "function" && (W = "UNSAFE_componentWillMount"), typeof R.componentWillReceiveProps == "function" && R.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? q = "componentWillReceiveProps" : typeof R.UNSAFE_componentWillReceiveProps == "function" && (q = "UNSAFE_componentWillReceiveProps"), typeof R.componentWillUpdate == "function" && R.componentWillUpdate.__suppressDeprecationWarning !== !0 ? te = "componentWillUpdate" : typeof R.UNSAFE_componentWillUpdate == "function" && (te = "UNSAFE_componentWillUpdate"), W !== null || q !== null || te !== null) {
            var Me = jt(t) || "Component", at = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            L0.has(Me) || (L0.add(Me), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Me, at, W !== null ? `
  ` + W : "", q !== null ? `
  ` + q : "", te !== null ? `
  ` + te : ""));
          }
        }
      }
      return i && F_(e, l, s), R;
    }
    function Mb(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ht(e) || "Component"), z0.enqueueReplaceState(t, t.state, null));
    }
    function X1(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var s = ht(e) || "Component";
          k0.has(s) || (k0.add(s), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        z0.enqueueReplaceState(t, t.state, null);
      }
    }
    function P0(e, t, a, i) {
      Nb(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = {}, Gg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = ir(s);
      else {
        var f = Uf(e, t, !0);
        l.context = jf(e, f);
      }
      {
        if (l.state === a) {
          var p = jt(t) || "Component";
          M0.has(p) || (M0.add(p), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & en && co.recordLegacyContextWarning(e, l), co.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var g = t.getDerivedStateFromProps;
      if (typeof g == "function" && (j0(e, t, g, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (Mb(e, l), gm(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var C = Nt;
        C |= Zi, (e.mode & Ht) !== tt && (C |= Ao), e.flags |= C;
      }
    }
    function Ab(e, t, a, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var f = l.context, p = t.contextType, g = fi;
      if (typeof p == "object" && p !== null)
        g = ir(p);
      else {
        var C = Uf(e, t, !0);
        g = jf(e, C);
      }
      var R = t.getDerivedStateFromProps, j = typeof R == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !j && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || f !== g) && X1(e, l, a, g), d1();
      var A = e.memoizedState, W = l.state = A;
      if (gm(e, a, l, i), W = e.memoizedState, s === a && A === W && !Zh() && !Sm()) {
        if (typeof l.componentDidMount == "function") {
          var q = Nt;
          q |= Zi, (e.mode & Ht) !== tt && (q |= Ao), e.flags |= q;
        }
        return !1;
      }
      typeof R == "function" && (j0(e, t, R, a), W = e.memoizedState);
      var te = Sm() || Q1(e, t, s, a, A, W, g);
      if (te) {
        if (!j && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var Me = Nt;
          Me |= Zi, (e.mode & Ht) !== tt && (Me |= Ao), e.flags |= Me;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var at = Nt;
          at |= Zi, (e.mode & Ht) !== tt && (at |= Ao), e.flags |= at;
        }
        e.memoizedProps = a, e.memoizedState = W;
      }
      return l.props = a, l.state = W, l.context = g, te;
    }
    function Ub(e, t, a, i, l) {
      var s = t.stateNode;
      f1(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : vo(t.type, f);
      s.props = p;
      var g = t.pendingProps, C = s.context, R = a.contextType, j = fi;
      if (typeof R == "object" && R !== null)
        j = ir(R);
      else {
        var A = Uf(t, a, !0);
        j = jf(t, A);
      }
      var W = a.getDerivedStateFromProps, q = typeof W == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !q && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== g || C !== j) && X1(t, s, i, j), d1();
      var te = t.memoizedState, Me = s.state = te;
      if (gm(t, i, s, l), Me = t.memoizedState, f === g && te === Me && !Zh() && !Sm() && !Ae)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= Nt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= qn), !1;
      typeof W == "function" && (j0(t, a, W, i), Me = t.memoizedState);
      var at = Sm() || Q1(t, a, p, i, te, Me, j) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ae;
      return at ? (!q && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Me, j), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Me, j)), typeof s.componentDidUpdate == "function" && (t.flags |= Nt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= qn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= Nt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= qn), t.memoizedProps = i, t.memoizedState = Me), s.props = i, s.state = Me, s.context = j, at;
    }
    function sc(e, t) {
      return {
        value: e,
        source: t,
        stack: Gi(t),
        digest: null
      };
    }
    function F0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function jb(e, t) {
      return !0;
    }
    function V0(e, t) {
      try {
        var a = jb(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === b)
            return;
          console.error(i);
        }
        var p = l ? ht(l) : null, g = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", C;
        if (e.tag === P)
          C = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var R = ht(e) || "Anonymous";
          C = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + R + ".");
        }
        var j = g + `
` + f + `

` + ("" + C);
        console.error(j);
      } catch (A) {
        setTimeout(function() {
          throw A;
        });
      }
    }
    var zb = typeof WeakMap == "function" ? WeakMap : Map;
    function J1(e, t, a) {
      var i = Gl(an, a);
      i.tag = Wg, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        Ox(l), V0(e, t);
      }, i;
    }
    function H0(e, t, a) {
      var i = Gl(an, a);
      i.tag = Wg;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        i.payload = function() {
          return l(s);
        }, i.callback = function() {
          sE(e), V0(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        sE(e), V0(e, t), typeof l != "function" && xx(this);
        var g = t.value, C = t.stack;
        this.componentDidCatch(g, {
          componentStack: C !== null ? C : ""
        }), typeof l != "function" && (aa(e.lanes, ct) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ht(e) || "Unknown"));
      }), i;
    }
    function Z1(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new zb(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = Dx.bind(null, e, t, a);
        na && uv(e, a), t.then(s, s);
      }
    }
    function Pb(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function Fb(e, t) {
      var a = e.tag;
      if ((e.mode & xt) === tt && (a === x || a === pe || a === Re)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function eC(e) {
      var t = e;
      do {
        if (t.tag === ve && Sb(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function tC(e, t, a, i, l) {
      if ((e.mode & xt) === tt) {
        if (e === t)
          e.flags |= tr;
        else {
          if (e.flags |= Je, a.flags |= zc, a.flags &= -52805, a.tag === b) {
            var s = a.alternate;
            if (s === null)
              a.tag = qe;
            else {
              var f = Gl(an, ct);
              f.tag = vm, Bu(a, f, ct);
            }
          }
          a.lanes = Et(a.lanes, ct);
        }
        return e;
      }
      return e.flags |= tr, e.lanes = l, e;
    }
    function Vb(e, t, a, i, l) {
      if (a.flags |= gs, na && uv(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Fb(a), Vr() && a.mode & xt && Y_();
        var f = eC(t);
        if (f !== null) {
          f.flags &= ~br, tC(f, t, a, e, l), f.mode & xt && Z1(e, s, l), Pb(f, e, s);
          return;
        } else {
          if (!rh(l)) {
            Z1(e, s, l), _S();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Vr() && a.mode & xt) {
        Y_();
        var g = eC(t);
        if (g !== null) {
          (g.flags & tr) === et && (g.flags |= br), tC(g, t, a, e, l), Mg(sc(i, a));
          return;
        }
      }
      i = sc(i, a), Sx(i);
      var C = t;
      do {
        switch (C.tag) {
          case P: {
            var R = i;
            C.flags |= tr;
            var j = Ms(l);
            C.lanes = Et(C.lanes, j);
            var A = J1(C, R, j);
            Qg(C, A);
            return;
          }
          case b:
            var W = i, q = C.type, te = C.stateNode;
            if ((C.flags & Je) === et && (typeof q.getDerivedStateFromError == "function" || te !== null && typeof te.componentDidCatch == "function" && !eE(te))) {
              C.flags |= tr;
              var Me = Ms(l);
              C.lanes = Et(C.lanes, Me);
              var at = H0(C, W, Me);
              Qg(C, at);
              return;
            }
            break;
        }
        C = C.return;
      } while (C !== null);
    }
    function Hb() {
      return null;
    }
    var Yp = h.ReactCurrentOwner, ho = !1, I0, Gp, B0, $0, W0, cc, Y0, Bm, Qp;
    I0 = {}, Gp = {}, B0 = {}, $0 = {}, W0 = {}, cc = !1, Y0 = {}, Bm = {}, Qp = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = a1(t, null, a, i) : t.child = Vf(t, e.child, a, i);
    }
    function Ib(e, t, a, i) {
      t.child = Vf(t, e.child, null, i), t.child = Vf(t, null, a, i);
    }
    function nC(e, t, a, i, l) {
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
        if (Yp.current = t, Qn(!0), g = Qf(e, t, f, i, p, l), C = qf(), t.mode & en) {
          _n(!0);
          try {
            g = Qf(e, t, f, i, p, l), C = qf();
          } finally {
            _n(!1);
          }
        }
        Qn(!1);
      }
      return _a(), e !== null && !ho ? (g1(e, t, l), Ql(e, t, l)) : (Vr() && C && xg(t), t.flags |= oi, Ra(e, t, g, l), t.child);
    }
    function rC(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (Gx(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = rd(s), t.tag = Re, t.type = f, q0(t, s), aC(e, t, f, i, l);
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
            Qp[g] || (y("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", g), Qp[g] = !0);
          }
        }
        var C = LS(a.type, null, i, t, t.mode, l);
        return C.ref = t.ref, C.return = t, t.child = C, C;
      }
      {
        var R = a.type, j = R.propTypes;
        j && uo(
          j,
          i,
          // Resolved props
          "prop",
          jt(R)
        );
      }
      var A = e.child, W = tS(e, l);
      if (!W) {
        var q = A.memoizedProps, te = a.compare;
        if (te = te !== null ? te : Ye, te(q, i) && e.ref === t.ref)
          return Ql(e, t, l);
      }
      t.flags |= oi;
      var Me = hc(A, i);
      return Me.ref = t.ref, Me.return = t, t.child = Me, Me;
    }
    function aC(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === yt) {
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
        var R = e.memoizedProps;
        if (Ye(R, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ho = !1, t.pendingProps = i = R, tS(e, l))
            (e.flags & zc) !== et && (ho = !0);
          else return t.lanes = e.lanes, Ql(e, t, l);
      }
      return G0(e, t, a, i, l);
    }
    function iC(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || Ce)
        if ((t.mode & xt) === tt) {
          var f = {
            baseLanes: ce,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, ny(t, a);
        } else if (aa(a, ra)) {
          var j = {
            baseLanes: ce,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = j;
          var A = s !== null ? s.baseLanes : a;
          ny(t, A);
        } else {
          var p = null, g;
          if (s !== null) {
            var C = s.baseLanes;
            g = Et(C, a);
          } else
            g = a;
          t.lanes = t.childLanes = ra;
          var R = {
            baseLanes: g,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = R, t.updateQueue = null, ny(t, g), null;
        }
      else {
        var W;
        s !== null ? (W = Et(s.baseLanes, a), t.memoizedState = null) : W = a, ny(t, W);
      }
      return Ra(e, t, l, a), t.child;
    }
    function Bb(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function $b(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function Wb(e, t, a) {
      {
        t.flags |= Nt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, s = l.children;
      return Ra(e, t, s, a), t.child;
    }
    function oC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Rn, t.flags |= Tu);
    }
    function G0(e, t, a, i, l) {
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
        if (Yp.current = t, Qn(!0), g = Qf(e, t, a, i, f, l), C = qf(), t.mode & en) {
          _n(!0);
          try {
            g = Qf(e, t, a, i, f, l), C = qf();
          } finally {
            _n(!1);
          }
        }
        Qn(!1);
      }
      return _a(), e !== null && !ho ? (g1(e, t, l), Ql(e, t, l)) : (Vr() && C && xg(t), t.flags |= oi, Ra(e, t, g, l), t.child);
    }
    function lC(e, t, a, i, l) {
      {
        switch (uk(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), g = p.state;
            s.updater.enqueueSetState(s, g, null);
            break;
          }
          case !0: {
            t.flags |= Je, t.flags |= tr;
            var C = new Error("Simulated error coming from DevTools"), R = Ms(l);
            t.lanes = Et(t.lanes, R);
            var j = H0(t, sc(C, t), R);
            Qg(t, j);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var A = a.propTypes;
          A && uo(
            A,
            i,
            // Resolved props
            "prop",
            jt(a)
          );
        }
      }
      var W;
      Xo(a) ? (W = !0, tm(t)) : W = !1, If(t, l);
      var q = t.stateNode, te;
      q === null ? (Wm(e, t), K1(t, a, i), P0(t, a, i, l), te = !0) : e === null ? te = Ab(t, a, i, l) : te = Ub(e, t, a, i, l);
      var Me = Q0(e, t, a, te, W, l);
      {
        var at = t.stateNode;
        te && at.props !== i && (cc || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ht(t) || "a component"), cc = !0);
      }
      return Me;
    }
    function Q0(e, t, a, i, l, s) {
      oC(e, t);
      var f = (t.flags & Je) !== et;
      if (!i && !f)
        return l && I_(t, a, !1), Ql(e, t, s);
      var p = t.stateNode;
      Yp.current = t;
      var g;
      if (f && typeof a.getDerivedStateFromError != "function")
        g = null, W1();
      else {
        Sa(t);
        {
          if (Qn(!0), g = p.render(), t.mode & en) {
            _n(!0);
            try {
              p.render();
            } finally {
              _n(!1);
            }
          }
          Qn(!1);
        }
        _a();
      }
      return t.flags |= oi, e !== null && f ? Ib(e, t, g, s) : Ra(e, t, g, s), t.memoizedState = p.state, l && I_(t, a, !0), t.child;
    }
    function uC(e) {
      var t = e.stateNode;
      t.pendingContext ? V_(e, t.pendingContext, t.pendingContext !== t.context) : t.context && V_(e, t.context, !1), qg(e, t.containerInfo);
    }
    function Yb(e, t, a) {
      if (uC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      f1(e, t), gm(t, i, null, a);
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
          var R = sc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return sC(e, t, p, a, R);
        } else if (p !== s) {
          var j = sc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return sC(e, t, p, a, j);
        } else {
          qT(t);
          var A = a1(t, null, p, a);
          t.child = A;
          for (var W = A; W; )
            W.flags = W.flags & ~Sn | Zr, W = W.sibling;
        }
      } else {
        if (Ff(), p === s)
          return Ql(e, t, a);
        Ra(e, t, p, a);
      }
      return t.child;
    }
    function sC(e, t, a, i, l) {
      return Ff(), Mg(l), t.flags |= br, Ra(e, t, a, i), t.child;
    }
    function Gb(e, t, a) {
      h1(t), e === null && Ng(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = l.children, p = pg(i, l);
      return p ? f = null : s !== null && pg(i, s) && (t.flags |= Aa), oC(e, t), Ra(e, t, f, a), t.child;
    }
    function Qb(e, t) {
      return e === null && Ng(t), null;
    }
    function qb(e, t, a, i) {
      Wm(e, t);
      var l = t.pendingProps, s = a, f = s._payload, p = s._init, g = p(f);
      t.type = g;
      var C = t.tag = Qx(g), R = vo(g, l), j;
      switch (C) {
        case x:
          return q0(t, g), t.type = g = rd(g), j = G0(null, t, g, R, i), j;
        case b:
          return t.type = g = bS(g), j = lC(null, t, g, R, i), j;
        case pe:
          return t.type = g = wS(g), j = nC(null, t, g, R, i), j;
        case be: {
          if (t.type !== t.elementType) {
            var A = g.propTypes;
            A && uo(
              A,
              R,
              // Resolved for outer only
              "prop",
              jt(g)
            );
          }
          return j = rC(
            null,
            t,
            g,
            vo(g.type, R),
            // The inner type can have defaults too
            i
          ), j;
        }
      }
      var W = "";
      throw g !== null && typeof g == "object" && g.$$typeof === yt && (W = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + g + ". " + ("Lazy element type must resolve to a class or function." + W));
    }
    function Kb(e, t, a, i, l) {
      Wm(e, t), t.tag = b;
      var s;
      return Xo(a) ? (s = !0, tm(t)) : s = !1, If(t, l), K1(t, a, i), P0(t, a, i, l), Q0(null, t, a, !0, s, l);
    }
    function Xb(e, t, a, i) {
      Wm(e, t);
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
          I0[C] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", C, C), I0[C] = !0);
        }
        t.mode & en && co.recordLegacyContextWarning(t, null), Qn(!0), Yp.current = t, p = Qf(null, t, a, l, s, i), g = qf(), Qn(!1);
      }
      if (_a(), t.flags |= oi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var R = jt(a) || "Unknown";
        Gp[R] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), Gp[R] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var j = jt(a) || "Unknown";
          Gp[j] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", j, j, j), Gp[j] = !0);
        }
        t.tag = b, t.memoizedState = null, t.updateQueue = null;
        var A = !1;
        return Xo(a) ? (A = !0, tm(t)) : A = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Gg(t), q1(t, p), P0(t, a, l, i), Q0(null, t, a, !0, A, i);
      } else {
        if (t.tag = x, t.mode & en) {
          _n(!0);
          try {
            p = Qf(null, t, a, l, s, i), g = qf();
          } finally {
            _n(!1);
          }
        }
        return Vr() && g && xg(t), Ra(null, t, p, i), q0(t, a), t.child;
      }
    }
    function q0(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Mr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), W0[l] || (W0[l] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = jt(t) || "Unknown";
          Qp[f] || (y("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Qp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = jt(t) || "Unknown";
          $0[p] || (y("%s: Function components do not support getDerivedStateFromProps.", p), $0[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var g = jt(t) || "Unknown";
          B0[g] || (y("%s: Function components do not support contextType.", g), B0[g] = !0);
        }
      }
    }
    var K0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: Pt
    };
    function X0(e) {
      return {
        baseLanes: e,
        cachePool: Hb(),
        transitions: null
      };
    }
    function Jb(e, t) {
      var a = null;
      return {
        baseLanes: Et(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Zb(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return Jg(e, zp);
    }
    function ew(e, t) {
      return As(e.childLanes, t);
    }
    function cC(e, t, a) {
      var i = t.pendingProps;
      sk(t) && (t.flags |= Je);
      var l = fo.current, s = !1, f = (t.flags & Je) !== et;
      if (f || Zb(l, e) ? (s = !0, t.flags &= ~Je) : (e === null || e.memoizedState !== null) && (l = gb(l, y1)), l = $f(l), Wu(t, l), e === null) {
        Ng(t);
        var p = t.memoizedState;
        if (p !== null) {
          var g = p.dehydrated;
          if (g !== null)
            return iw(t, g);
        }
        var C = i.children, R = i.fallback;
        if (s) {
          var j = tw(t, C, R, a), A = t.child;
          return A.memoizedState = X0(a), t.memoizedState = K0, j;
        } else
          return J0(t, C);
      } else {
        var W = e.memoizedState;
        if (W !== null) {
          var q = W.dehydrated;
          if (q !== null)
            return ow(e, t, f, i, q, W, a);
        }
        if (s) {
          var te = i.fallback, Me = i.children, at = rw(e, t, Me, te, a), Xe = t.child, Ut = e.child.memoizedState;
          return Xe.memoizedState = Ut === null ? X0(a) : Jb(Ut, a), Xe.childLanes = ew(e, a), t.memoizedState = K0, at;
        } else {
          var Dt = i.children, I = nw(e, t, Dt, a);
          return t.memoizedState = null, I;
        }
      }
    }
    function J0(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, s = Z0(l, i);
      return s.return = e, e.child = s, s;
    }
    function tw(e, t, a, i) {
      var l = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, g;
      return (l & xt) === tt && s !== null ? (p = s, p.childLanes = ce, p.pendingProps = f, e.mode & Vt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), g = Zu(a, l, i, null)) : (p = Z0(f, l), g = Zu(a, l, i, null)), p.return = e, g.return = e, p.sibling = g, e.child = p, g;
    }
    function Z0(e, t, a) {
      return fE(e, t, ce, null);
    }
    function fC(e, t) {
      return hc(e, t);
    }
    function nw(e, t, a, i) {
      var l = e.child, s = l.sibling, f = fC(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & xt) === tt && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Ma) : p.push(s);
      }
      return t.child = f, f;
    }
    function rw(e, t, a, i, l) {
      var s = t.mode, f = e.child, p = f.sibling, g = {
        mode: "hidden",
        children: a
      }, C;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & xt) === tt && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var R = t.child;
        C = R, C.childLanes = ce, C.pendingProps = g, t.mode & Vt && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = f.selfBaseDuration, C.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        C = fC(f, g), C.subtreeFlags = f.subtreeFlags & Pn;
      var j;
      return p !== null ? j = hc(p, i) : (j = Zu(i, s, l, null), j.flags |= Sn), j.return = t, C.return = t, C.sibling = j, t.child = C, j;
    }
    function $m(e, t, a, i) {
      i !== null && Mg(i), Vf(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, f = J0(t, s);
      return f.flags |= Sn, t.memoizedState = null, f;
    }
    function aw(e, t, a, i, l) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = Z0(f, s), g = Zu(i, s, l, null);
      return g.flags |= Sn, p.return = t, g.return = t, p.sibling = g, t.child = p, (t.mode & xt) !== tt && Vf(t, e.child, null, l), g;
    }
    function iw(e, t, a) {
      return (e.mode & xt) === tt ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ct) : yg(t) ? e.lanes = wr : e.lanes = ra, null;
    }
    function ow(e, t, a, i, l, s, f) {
      if (a)
        if (t.flags & br) {
          t.flags &= ~br;
          var I = F0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return $m(e, t, f, I);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Je, null;
          var ne = i.children, B = i.fallback, ge = aw(e, t, ne, B, f), He = t.child;
          return He.memoizedState = X0(f), t.memoizedState = K0, ge;
        }
      else {
        if (GT(), (t.mode & xt) === tt)
          return $m(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (yg(l)) {
          var p, g, C;
          {
            var R = cT(l);
            p = R.digest, g = R.message, C = R.stack;
          }
          var j;
          g ? j = new Error(g) : j = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var A = F0(j, p, C);
          return $m(e, t, f, A);
        }
        var W = aa(f, e.childLanes);
        if (ho || W) {
          var q = ty();
          if (q !== null) {
            var te = Xd(q, f);
            if (te !== Pt && te !== s.retryLane) {
              s.retryLane = te;
              var Me = an;
              Ba(e, te), Cr(q, e, te, Me);
            }
          }
          _S();
          var at = F0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return $m(e, t, f, at);
        } else if (A_(l)) {
          t.flags |= Je, t.child = e.child;
          var Xe = Lx.bind(null, e);
          return fT(l, Xe), null;
        } else {
          KT(t, l, s.treeContext);
          var Ut = i.children, Dt = J0(t, Ut);
          return Dt.flags |= Zr, Dt;
        }
      }
    }
    function dC(e, t, a) {
      e.lanes = Et(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Et(i.lanes, t)), Bg(e.return, t, a);
    }
    function lw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === ve) {
          var l = i.memoizedState;
          l !== null && dC(i, a, e);
        } else if (i.tag === Se)
          dC(i, a, e);
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
    function uw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Em(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function sw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !Y0[e])
        if (Y0[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              y('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          y('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function cw(e, t) {
      e !== void 0 && !Bm[e] && (e !== "collapsed" && e !== "hidden" ? (Bm[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Bm[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function pC(e, t) {
      {
        var a = bt(e), i = !a && typeof Ct(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function fw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (bt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!pC(e[a], a))
              return;
        } else {
          var i = Ct(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var s = l.next(), f = 0; !s.done; s = l.next()) {
                if (!pC(s.value, f))
                  return;
                f++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function eS(e, t, a, i, l) {
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
    function vC(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, s = i.tail, f = i.children;
      sw(l), cw(s, l), fw(f, l), Ra(e, t, f, a);
      var p = fo.current, g = Jg(p, zp);
      if (g)
        p = Zg(p, zp), t.flags |= Je;
      else {
        var C = e !== null && (e.flags & Je) !== et;
        C && lw(t, t.child, a), p = $f(p);
      }
      if (Wu(t, p), (t.mode & xt) === tt)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var R = uw(t.child), j;
            R === null ? (j = t.child, t.child = null) : (j = R.sibling, R.sibling = null), eS(
              t,
              !1,
              // isBackwards
              j,
              R,
              s
            );
            break;
          }
          case "backwards": {
            var A = null, W = t.child;
            for (t.child = null; W !== null; ) {
              var q = W.alternate;
              if (q !== null && Em(q) === null) {
                t.child = W;
                break;
              }
              var te = W.sibling;
              W.sibling = A, A = W, W = te;
            }
            eS(
              t,
              !0,
              // isBackwards
              A,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            eS(
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
    function dw(e, t, a) {
      qg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Vf(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var hC = !1;
    function pw(e, t, a) {
      var i = t.type, l = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || hC || (hC = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var g = t.type.propTypes;
        g && uo(g, s, "prop", "Context.Provider");
      }
      if (l1(t, l, p), f !== null) {
        var C = f.value;
        if (me(C, p)) {
          if (f.children === s.children && !Zh())
            return Ql(e, t, a);
        } else
          sb(t, l, a);
      }
      var R = s.children;
      return Ra(e, t, R, a), t.child;
    }
    var mC = !1;
    function vw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (mC || (mC = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), If(t, a);
      var f = ir(i);
      Sa(t);
      var p;
      return Yp.current = t, Qn(!0), p = s(f), Qn(!1), _a(), t.flags |= oi, Ra(e, t, p, a), t.child;
    }
    function qp() {
      ho = !0;
    }
    function Wm(e, t) {
      (t.mode & xt) === tt && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Sn);
    }
    function Ql(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), W1(), lv(t.lanes), aa(a, t.childLanes) ? (lb(e, t), t.child) : null;
    }
    function hw(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Ma) : s.push(e), a.flags |= Sn, a;
      }
    }
    function tS(e, t) {
      var a = e.lanes;
      return !!aa(a, t);
    }
    function mw(e, t, a) {
      switch (t.tag) {
        case P:
          uC(t), t.stateNode, Ff();
          break;
        case F:
          h1(t);
          break;
        case b: {
          var i = t.type;
          Xo(i) && tm(t);
          break;
        }
        case V:
          qg(t, t.stateNode.containerInfo);
          break;
        case ue: {
          var l = t.memoizedProps.value, s = t.type._context;
          l1(t, s, l);
          break;
        }
        case _e:
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
              return Wu(t, $f(fo.current)), t.flags |= Je, null;
            var C = t.child, R = C.childLanes;
            if (aa(a, R))
              return cC(e, t, a);
            Wu(t, $f(fo.current));
            var j = Ql(e, t, a);
            return j !== null ? j.sibling : null;
          } else
            Wu(t, $f(fo.current));
          break;
        }
        case Se: {
          var A = (e.flags & Je) !== et, W = aa(a, t.childLanes);
          if (A) {
            if (W)
              return vC(e, t, a);
            t.flags |= Je;
          }
          var q = t.memoizedState;
          if (q !== null && (q.rendering = null, q.tail = null, q.lastEffect = null), Wu(t, fo.current), W)
            break;
          return null;
        }
        case Z:
        case xe:
          return t.lanes = ce, iC(e, t, a);
      }
      return Ql(e, t, a);
    }
    function yC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return hw(e, t, LS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || Zh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ho = !0;
        else {
          var s = tS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Je) === et)
            return ho = !1, mw(e, t, a);
          (e.flags & zc) !== et ? ho = !0 : ho = !1;
        }
      } else if (ho = !1, Vr() && HT(t)) {
        var f = t.index, p = IT();
        W_(t, p, f);
      }
      switch (t.lanes = ce, t.tag) {
        case M:
          return Xb(e, t, t.type, a);
        case Ue: {
          var g = t.elementType;
          return qb(e, t, g, a);
        }
        case x: {
          var C = t.type, R = t.pendingProps, j = t.elementType === C ? R : vo(C, R);
          return G0(e, t, C, j, a);
        }
        case b: {
          var A = t.type, W = t.pendingProps, q = t.elementType === A ? W : vo(A, W);
          return lC(e, t, A, q, a);
        }
        case P:
          return Yb(e, t, a);
        case F:
          return Gb(e, t, a);
        case X:
          return Qb(e, t);
        case ve:
          return cC(e, t, a);
        case V:
          return dw(e, t, a);
        case pe: {
          var te = t.type, Me = t.pendingProps, at = t.elementType === te ? Me : vo(te, Me);
          return nC(e, t, te, at, a);
        }
        case K:
          return Bb(e, t, a);
        case ae:
          return $b(e, t, a);
        case _e:
          return Wb(e, t, a);
        case ue:
          return pw(e, t, a);
        case le:
          return vw(e, t, a);
        case be: {
          var Xe = t.type, Ut = t.pendingProps, Dt = vo(Xe, Ut);
          if (t.type !== t.elementType) {
            var I = Xe.propTypes;
            I && uo(
              I,
              Dt,
              // Resolved for outer only
              "prop",
              jt(Xe)
            );
          }
          return Dt = vo(Xe.type, Dt), rC(e, t, Xe, Dt, a);
        }
        case Re:
          return aC(e, t, t.type, t.pendingProps, a);
        case qe: {
          var ne = t.type, B = t.pendingProps, ge = t.elementType === ne ? B : vo(ne, B);
          return Kb(e, t, ne, ge, a);
        }
        case Se:
          return vC(e, t, a);
        case Y:
          break;
        case Z:
          return iC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Kf(e) {
      e.flags |= Nt;
    }
    function gC(e) {
      e.flags |= Rn, e.flags |= Tu;
    }
    var SC, nS, _C, CC;
    SC = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === F || l.tag === X)
          P2(e, l.stateNode);
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
    }, nS = function(e, t) {
    }, _C = function(e, t, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Kg(), g = V2(f, a, s, i, l, p);
        t.updateQueue = g, g && Kf(t);
      }
    }, CC = function(e, t, a, i) {
      a !== i && Kf(t);
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
            for (var l = e.tail, s = null; l !== null; )
              l.alternate !== null && (s = l), l = l.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Ir(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ce, i = et;
      if (t) {
        if ((e.mode & Vt) !== tt) {
          for (var g = e.selfBaseDuration, C = e.child; C !== null; )
            a = Et(a, Et(C.lanes, C.childLanes)), i |= C.subtreeFlags & Pn, i |= C.flags & Pn, g += C.treeBaseDuration, C = C.sibling;
          e.treeBaseDuration = g;
        } else
          for (var R = e.child; R !== null; )
            a = Et(a, Et(R.lanes, R.childLanes)), i |= R.subtreeFlags & Pn, i |= R.flags & Pn, R.return = e, R = R.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Vt) !== tt) {
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
    function yw(e, t, a) {
      if (tb() && (t.mode & xt) !== tt && (t.flags & Je) === et)
        return J_(t), Ff(), t.flags |= br | gs | tr, !1;
      var i = om(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (ZT(t), Ir(t), (t.mode & Vt) !== tt) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Ff(), (t.flags & Je) === et && (t.memoizedState = null), t.flags |= Nt, Ir(t), (t.mode & Vt) !== tt) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return Z_(), !0;
    }
    function EC(e, t, a) {
      var i = t.pendingProps;
      switch (kg(t), t.tag) {
        case M:
        case Ue:
        case Re:
        case x:
        case pe:
        case K:
        case ae:
        case _e:
        case le:
        case be:
          return Ir(t), null;
        case b: {
          var l = t.type;
          return Xo(l) && em(t), Ir(t), null;
        }
        case P: {
          var s = t.stateNode;
          if (Bf(t), Tg(t), t0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = om(t);
            if (f)
              Kf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & br) !== et) && (t.flags |= qn, Z_());
            }
          }
          return nS(e, t), Ir(t), null;
        }
        case F: {
          Xg(t);
          var g = v1(), C = t.type;
          if (e !== null && t.stateNode != null)
            _C(e, t, C, i, g), e.ref !== t.ref && gC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Ir(t), null;
            }
            var R = Kg(), j = om(t);
            if (j)
              XT(t, g, R) && Kf(t);
            else {
              var A = z2(C, i, g, R, t);
              SC(A, t, !1, !1), t.stateNode = A, F2(A, C, i, g) && Kf(t);
            }
            t.ref !== null && gC(t);
          }
          return Ir(t), null;
        }
        case X: {
          var W = i;
          if (e && t.stateNode != null) {
            var q = e.memoizedProps;
            CC(e, t, q, W);
          } else {
            if (typeof W != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var te = v1(), Me = Kg(), at = om(t);
            at ? JT(t) && Kf(t) : t.stateNode = H2(W, te, Me, t);
          }
          return Ir(t), null;
        }
        case ve: {
          Wf(t);
          var Xe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ut = yw(e, t, Xe);
            if (!Ut)
              return t.flags & tr ? t : null;
          }
          if ((t.flags & Je) !== et)
            return t.lanes = a, (t.mode & Vt) !== tt && w0(t), t;
          var Dt = Xe !== null, I = e !== null && e.memoizedState !== null;
          if (Dt !== I && Dt) {
            var ne = t.child;
            if (ne.flags |= zn, (t.mode & xt) !== tt) {
              var B = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              B || Jg(fo.current, y1) ? gx() : _S();
            }
          }
          var ge = t.updateQueue;
          if (ge !== null && (t.flags |= Nt), Ir(t), (t.mode & Vt) !== tt && Dt) {
            var He = t.child;
            He !== null && (t.treeBaseDuration -= He.treeBaseDuration);
          }
          return null;
        }
        case V:
          return Bf(t), nS(e, t), e === null && AT(t.stateNode.containerInfo), Ir(t), null;
        case ue:
          var ze = t.type._context;
          return Ig(ze, t), Ir(t), null;
        case qe: {
          var ft = t.type;
          return Xo(ft) && em(t), Ir(t), null;
        }
        case Se: {
          Wf(t);
          var St = t.memoizedState;
          if (St === null)
            return Ir(t), null;
          var nn = (t.flags & Je) !== et, Bt = St.rendering;
          if (Bt === null)
            if (nn)
              Kp(St, !1);
            else {
              var Jn = _x() && (e === null || (e.flags & Je) === et);
              if (!Jn)
                for (var $t = t.child; $t !== null; ) {
                  var $n = Em($t);
                  if ($n !== null) {
                    nn = !0, t.flags |= Je, Kp(St, !1);
                    var fa = $n.updateQueue;
                    return fa !== null && (t.updateQueue = fa, t.flags |= Nt), t.subtreeFlags = et, ub(t, a), Wu(t, Zg(fo.current, zp)), t.child;
                  }
                  $t = $t.sibling;
                }
              St.tail !== null && Kn() > BC() && (t.flags |= Je, nn = !0, Kp(St, !1), t.lanes = Id);
            }
          else {
            if (!nn) {
              var Gr = Em(Bt);
              if (Gr !== null) {
                t.flags |= Je, nn = !0;
                var pi = Gr.updateQueue;
                if (pi !== null && (t.updateQueue = pi, t.flags |= Nt), Kp(St, !0), St.tail === null && St.tailMode === "hidden" && !Bt.alternate && !Vr())
                  return Ir(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Kn() * 2 - St.renderingStartTime > BC() && a !== ra && (t.flags |= Je, nn = !0, Kp(St, !1), t.lanes = Id);
            }
            if (St.isBackwards)
              Bt.sibling = t.child, t.child = Bt;
            else {
              var wa = St.last;
              wa !== null ? wa.sibling = Bt : t.child = Bt, St.last = Bt;
            }
          }
          if (St.tail !== null) {
            var xa = St.tail;
            St.rendering = xa, St.tail = xa.sibling, St.renderingStartTime = Kn(), xa.sibling = null;
            var da = fo.current;
            return nn ? da = Zg(da, zp) : da = $f(da), Wu(t, da), xa;
          }
          return Ir(t), null;
        }
        case Y:
          break;
        case Z:
        case xe: {
          SS(t);
          var Zl = t.memoizedState, ad = Zl !== null;
          if (e !== null) {
            var dv = e.memoizedState, il = dv !== null;
            il !== ad && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !Ce && (t.flags |= zn);
          }
          return !ad || (t.mode & xt) === tt ? Ir(t) : aa(al, ra) && (Ir(t), t.subtreeFlags & (Sn | Nt) && (t.flags |= zn)), null;
        }
        case $e:
          return null;
        case Le:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function gw(e, t, a) {
      switch (kg(t), t.tag) {
        case b: {
          var i = t.type;
          Xo(i) && em(t);
          var l = t.flags;
          return l & tr ? (t.flags = l & ~tr | Je, (t.mode & Vt) !== tt && w0(t), t) : null;
        }
        case P: {
          t.stateNode, Bf(t), Tg(t), t0();
          var s = t.flags;
          return (s & tr) !== et && (s & Je) === et ? (t.flags = s & ~tr | Je, t) : null;
        }
        case F:
          return Xg(t), null;
        case ve: {
          Wf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Ff();
          }
          var p = t.flags;
          return p & tr ? (t.flags = p & ~tr | Je, (t.mode & Vt) !== tt && w0(t), t) : null;
        }
        case Se:
          return Wf(t), null;
        case V:
          return Bf(t), null;
        case ue:
          var g = t.type._context;
          return Ig(g, t), null;
        case Z:
        case xe:
          return SS(t), null;
        case $e:
          return null;
        default:
          return null;
      }
    }
    function RC(e, t, a) {
      switch (kg(t), t.tag) {
        case b: {
          var i = t.type.childContextTypes;
          i != null && em(t);
          break;
        }
        case P: {
          t.stateNode, Bf(t), Tg(t), t0();
          break;
        }
        case F: {
          Xg(t);
          break;
        }
        case V:
          Bf(t);
          break;
        case ve:
          Wf(t);
          break;
        case Se:
          Wf(t);
          break;
        case ue:
          var l = t.type._context;
          Ig(l, t);
          break;
        case Z:
        case xe:
          SS(t);
          break;
      }
    }
    var TC = null;
    TC = /* @__PURE__ */ new Set();
    var Ym = !1, Br = !1, Sw = typeof WeakSet == "function" ? WeakSet : Set, Ge = null, Xf = null, Jf = null;
    function _w(e) {
      Mo(null, function() {
        throw e;
      }), ys();
    }
    var Cw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Vt)
        try {
          nl(), t.componentWillUnmount();
        } finally {
          tl(e);
        }
      else
        t.componentWillUnmount();
    };
    function bC(e, t) {
      try {
        Qu(hr, e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function rS(e, t, a) {
      try {
        Cw(e, a);
      } catch (i) {
        vn(e, t, i);
      }
    }
    function Ew(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        vn(e, t, i);
      }
    }
    function wC(e, t) {
      try {
        kC(e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function Zf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ve && mt && e.mode & Vt)
              try {
                nl(), i = a(null);
              } finally {
                tl(e);
              }
            else
              i = a(null);
          } catch (l) {
            vn(e, t, l);
          }
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ht(e));
        } else
          a.current = null;
    }
    function Gm(e, t, a) {
      try {
        a();
      } catch (i) {
        vn(e, t, i);
      }
    }
    var xC = !1;
    function Rw(e, t) {
      U2(e.containerInfo), Ge = t, Tw();
      var a = xC;
      return xC = !1, a;
    }
    function Tw() {
      for (; Ge !== null; ) {
        var e = Ge, t = e.child;
        (e.subtreeFlags & Uo) !== et && t !== null ? (t.return = e, Ge = t) : bw();
      }
    }
    function bw() {
      for (; Ge !== null; ) {
        var e = Ge;
        Xt(e);
        try {
          ww(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        pn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ge = t;
          return;
        }
        Ge = e.return;
      }
    }
    function ww(e) {
      var t = e.alternate, a = e.flags;
      if ((a & qn) !== et) {
        switch (Xt(e), e.tag) {
          case x:
          case pe:
          case Re:
            break;
          case b: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !cc && (s.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ht(e) || "instance"), s.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ht(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : vo(e.type, i), l);
              {
                var p = TC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ht(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case P: {
            {
              var g = e.stateNode;
              oT(g.containerInfo);
            }
            break;
          }
          case F:
          case X:
          case V:
          case qe:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        pn();
      }
    }
    function mo(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var s = l.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Hr) !== $a ? no(t) : (e & hr) !== $a && _s(t), (e & Jo) !== $a && sv(!0), Gm(t, a, p), (e & Jo) !== $a && sv(!1), (e & Hr) !== $a ? Fo() : (e & hr) !== $a && Vd());
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
            (e & Hr) !== $a ? Fd(t) : (e & hr) !== $a && Bc(t);
            var f = s.create;
            (e & Jo) !== $a && sv(!0), s.destroy = f(), (e & Jo) !== $a && sv(!1), (e & Hr) !== $a ? Jv() : (e & hr) !== $a && Zv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var g = void 0;
                (s.tag & hr) !== et ? g = "useLayoutEffect" : (s.tag & Jo) !== et ? g = "useInsertionEffect" : g = "useEffect";
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

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : C = " You returned: " + p, y("%s must not return anything besides a function, which is used for clean-up.%s", g, C);
              }
            }
          }
          s = s.next;
        } while (s !== l);
      }
    }
    function xw(e, t) {
      if ((t.flags & Nt) !== et)
        switch (t.tag) {
          case _e: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, f = B1(), p = t.alternate === null ? "mount" : "update";
            I1() && (p = "nested-update"), typeof s == "function" && s(l, p, a, f);
            var g = t.return;
            e: for (; g !== null; ) {
              switch (g.tag) {
                case P:
                  var C = g.stateNode;
                  C.passiveEffectDuration += a;
                  break e;
                case _e:
                  var R = g.stateNode;
                  R.passiveEffectDuration += a;
                  break e;
              }
              g = g.return;
            }
            break;
          }
        }
    }
    function kw(e, t, a, i) {
      if ((a.flags & zo) !== et)
        switch (a.tag) {
          case x:
          case pe:
          case Re: {
            if (!Br)
              if (a.mode & Vt)
                try {
                  nl(), Qu(hr | vr, a);
                } finally {
                  tl(a);
                }
              else
                Qu(hr | vr, a);
            break;
          }
          case b: {
            var l = a.stateNode;
            if (a.flags & Nt && !Br)
              if (t === null)
                if (a.type === a.elementType && !cc && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ht(a) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ht(a) || "instance")), a.mode & Vt)
                  try {
                    nl(), l.componentDidMount();
                  } finally {
                    tl(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : vo(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !cc && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ht(a) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ht(a) || "instance")), a.mode & Vt)
                  try {
                    nl(), l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    tl(a);
                  }
                else
                  l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !cc && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ht(a) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ht(a) || "instance")), p1(a, p, l));
            break;
          }
          case P: {
            var g = a.updateQueue;
            if (g !== null) {
              var C = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case F:
                    C = a.child.stateNode;
                    break;
                  case b:
                    C = a.child.stateNode;
                    break;
                }
              p1(a, g, C);
            }
            break;
          }
          case F: {
            var R = a.stateNode;
            if (t === null && a.flags & Nt) {
              var j = a.type, A = a.memoizedProps;
              Y2(R, j, A);
            }
            break;
          }
          case X:
            break;
          case V:
            break;
          case _e: {
            {
              var W = a.memoizedProps, q = W.onCommit, te = W.onRender, Me = a.stateNode.effectDuration, at = B1(), Xe = t === null ? "mount" : "update";
              I1() && (Xe = "nested-update"), typeof te == "function" && te(a.memoizedProps.id, Xe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, at);
              {
                typeof q == "function" && q(a.memoizedProps.id, Xe, Me, at), bx(a);
                var Ut = a.return;
                e: for (; Ut !== null; ) {
                  switch (Ut.tag) {
                    case P:
                      var Dt = Ut.stateNode;
                      Dt.effectDuration += Me;
                      break e;
                    case _e:
                      var I = Ut.stateNode;
                      I.effectDuration += Me;
                      break e;
                  }
                  Ut = Ut.return;
                }
              }
            }
            break;
          }
          case ve: {
            jw(e, a);
            break;
          }
          case Se:
          case qe:
          case Y:
          case Z:
          case xe:
          case Le:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Br || a.flags & Rn && kC(a);
    }
    function Ow(e) {
      switch (e.tag) {
        case x:
        case pe:
        case Re: {
          if (e.mode & Vt)
            try {
              nl(), bC(e, e.return);
            } finally {
              tl(e);
            }
          else
            bC(e, e.return);
          break;
        }
        case b: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Ew(e, e.return, t), wC(e, e.return);
          break;
        }
        case F: {
          wC(e, e.return);
          break;
        }
      }
    }
    function Dw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === F) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? nT(l) : aT(i.stateNode, i.memoizedProps);
            } catch (f) {
              vn(e, e.return, f);
            }
          }
        } else if (i.tag === X) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? rT(s) : iT(s, i.memoizedProps);
            } catch (f) {
              vn(e, e.return, f);
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
    function kC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        if (e.tag === F ? i = a : i = a, typeof t == "function") {
          var l;
          if (e.mode & Vt)
            try {
              nl(), l = t(i);
            } finally {
              tl(e);
            }
          else
            l = t(i);
          typeof l == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ht(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", ht(e)), t.current = i;
      }
    }
    function Lw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function OC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, OC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === F) {
          var a = e.stateNode;
          a !== null && zT(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Nw(e) {
      for (var t = e.return; t !== null; ) {
        if (DC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function DC(e) {
      return e.tag === F || e.tag === P || e.tag === V;
    }
    function LC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || DC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== F && t.tag !== X && t.tag !== it; ) {
          if (t.flags & Sn || t.child === null || t.tag === V)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Sn))
          return t.stateNode;
      }
    }
    function Mw(e) {
      var t = Nw(e);
      switch (t.tag) {
        case F: {
          var a = t.stateNode;
          t.flags & Aa && (M_(a), t.flags &= ~Aa);
          var i = LC(e);
          iS(e, i, a);
          break;
        }
        case P:
        case V: {
          var l = t.stateNode.containerInfo, s = LC(e);
          aS(e, s, l);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function aS(e, t, a) {
      var i = e.tag, l = i === F || i === X;
      if (l) {
        var s = e.stateNode;
        t ? J2(a, s, t) : K2(a, s);
      } else if (i !== V) {
        var f = e.child;
        if (f !== null) {
          aS(f, t, a);
          for (var p = f.sibling; p !== null; )
            aS(p, t, a), p = p.sibling;
        }
      }
    }
    function iS(e, t, a) {
      var i = e.tag, l = i === F || i === X;
      if (l) {
        var s = e.stateNode;
        t ? X2(a, s, t) : q2(a, s);
      } else if (i !== V) {
        var f = e.child;
        if (f !== null) {
          iS(f, t, a);
          for (var p = f.sibling; p !== null; )
            iS(p, t, a), p = p.sibling;
        }
      }
    }
    var $r = null, yo = !1;
    function Aw(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case F: {
              $r = i.stateNode, yo = !1;
              break e;
            }
            case P: {
              $r = i.stateNode.containerInfo, yo = !0;
              break e;
            }
            case V: {
              $r = i.stateNode.containerInfo, yo = !0;
              break e;
            }
          }
          i = i.return;
        }
        if ($r === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        NC(e, t, a), $r = null, yo = !1;
      }
      Lw(a);
    }
    function qu(e, t, a) {
      for (var i = a.child; i !== null; )
        NC(e, t, i), i = i.sibling;
    }
    function NC(e, t, a) {
      switch (jd(a), a.tag) {
        case F:
          Br || Zf(a, t);
        // eslint-disable-next-line-no-fallthrough
        case X: {
          {
            var i = $r, l = yo;
            $r = null, qu(e, t, a), $r = i, yo = l, $r !== null && (yo ? eT($r, a.stateNode) : Z2($r, a.stateNode));
          }
          return;
        }
        case it: {
          $r !== null && (yo ? tT($r, a.stateNode) : mg($r, a.stateNode));
          return;
        }
        case V: {
          {
            var s = $r, f = yo;
            $r = a.stateNode.containerInfo, yo = !0, qu(e, t, a), $r = s, yo = f;
          }
          return;
        }
        case x:
        case pe:
        case be:
        case Re: {
          if (!Br) {
            var p = a.updateQueue;
            if (p !== null) {
              var g = p.lastEffect;
              if (g !== null) {
                var C = g.next, R = C;
                do {
                  var j = R, A = j.destroy, W = j.tag;
                  A !== void 0 && ((W & Jo) !== $a ? Gm(a, t, A) : (W & hr) !== $a && (_s(a), a.mode & Vt ? (nl(), Gm(a, t, A), tl(a)) : Gm(a, t, A), Vd())), R = R.next;
                } while (R !== C);
              }
            }
          }
          qu(e, t, a);
          return;
        }
        case b: {
          if (!Br) {
            Zf(a, t);
            var q = a.stateNode;
            typeof q.componentWillUnmount == "function" && rS(a, t, q);
          }
          qu(e, t, a);
          return;
        }
        case Y: {
          qu(e, t, a);
          return;
        }
        case Z: {
          if (
            // TODO: Remove this dead flag
            a.mode & xt
          ) {
            var te = Br;
            Br = te || a.memoizedState !== null, qu(e, t, a), Br = te;
          } else
            qu(e, t, a);
          break;
        }
        default: {
          qu(e, t, a);
          return;
        }
      }
    }
    function Uw(e) {
      e.memoizedState;
    }
    function jw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && _T(s);
          }
        }
      }
    }
    function MC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Sw()), t.forEach(function(i) {
          var l = Nx.bind(null, e, i);
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
    function zw(e, t, a) {
      Xf = a, Jf = e, Xt(t), AC(t, e), Xt(t), Xf = null, Jf = null;
    }
    function go(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          try {
            Aw(e, t, s);
          } catch (g) {
            vn(s, t, g);
          }
        }
      var f = wo();
      if (t.subtreeFlags & jo)
        for (var p = t.child; p !== null; )
          Xt(p), AC(p, e), p = p.sibling;
      Xt(f);
    }
    function AC(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case x:
        case pe:
        case be:
        case Re: {
          if (go(t, e), rl(e), l & Nt) {
            try {
              mo(Jo | vr, e, e.return), Qu(Jo | vr, e);
            } catch (ft) {
              vn(e, e.return, ft);
            }
            if (e.mode & Vt) {
              try {
                nl(), mo(hr | vr, e, e.return);
              } catch (ft) {
                vn(e, e.return, ft);
              }
              tl(e);
            } else
              try {
                mo(hr | vr, e, e.return);
              } catch (ft) {
                vn(e, e.return, ft);
              }
          }
          return;
        }
        case b: {
          go(t, e), rl(e), l & Rn && i !== null && Zf(i, i.return);
          return;
        }
        case F: {
          go(t, e), rl(e), l & Rn && i !== null && Zf(i, i.return);
          {
            if (e.flags & Aa) {
              var s = e.stateNode;
              try {
                M_(s);
              } catch (ft) {
                vn(e, e.return, ft);
              }
            }
            if (l & Nt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, g = i !== null ? i.memoizedProps : p, C = e.type, R = e.updateQueue;
                if (e.updateQueue = null, R !== null)
                  try {
                    G2(f, R, C, g, p, e);
                  } catch (ft) {
                    vn(e, e.return, ft);
                  }
              }
            }
          }
          return;
        }
        case X: {
          if (go(t, e), rl(e), l & Nt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var j = e.stateNode, A = e.memoizedProps, W = i !== null ? i.memoizedProps : A;
            try {
              Q2(j, W, A);
            } catch (ft) {
              vn(e, e.return, ft);
            }
          }
          return;
        }
        case P: {
          if (go(t, e), rl(e), l & Nt && i !== null) {
            var q = i.memoizedState;
            if (q.isDehydrated)
              try {
                ST(t.containerInfo);
              } catch (ft) {
                vn(e, e.return, ft);
              }
          }
          return;
        }
        case V: {
          go(t, e), rl(e);
          return;
        }
        case ve: {
          go(t, e), rl(e);
          var te = e.child;
          if (te.flags & zn) {
            var Me = te.stateNode, at = te.memoizedState, Xe = at !== null;
            if (Me.isHidden = Xe, Xe) {
              var Ut = te.alternate !== null && te.alternate.memoizedState !== null;
              Ut || yx();
            }
          }
          if (l & Nt) {
            try {
              Uw(e);
            } catch (ft) {
              vn(e, e.return, ft);
            }
            MC(e);
          }
          return;
        }
        case Z: {
          var Dt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & xt
          ) {
            var I = Br;
            Br = I || Dt, go(t, e), Br = I;
          } else
            go(t, e);
          if (rl(e), l & zn) {
            var ne = e.stateNode, B = e.memoizedState, ge = B !== null, He = e;
            if (ne.isHidden = ge, ge && !Dt && (He.mode & xt) !== tt) {
              Ge = He;
              for (var ze = He.child; ze !== null; )
                Ge = ze, Fw(ze), ze = ze.sibling;
            }
            Dw(He, ge);
          }
          return;
        }
        case Se: {
          go(t, e), rl(e), l & Nt && MC(e);
          return;
        }
        case Y:
          return;
        default: {
          go(t, e), rl(e);
          return;
        }
      }
    }
    function rl(e) {
      var t = e.flags;
      if (t & Sn) {
        try {
          Mw(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        e.flags &= ~Sn;
      }
      t & Zr && (e.flags &= ~Zr);
    }
    function Pw(e, t, a) {
      Xf = a, Jf = t, Ge = e, UC(e, t, a), Xf = null, Jf = null;
    }
    function UC(e, t, a) {
      for (var i = (e.mode & xt) !== tt; Ge !== null; ) {
        var l = Ge, s = l.child;
        if (l.tag === Z && i) {
          var f = l.memoizedState !== null, p = f || Ym;
          if (p) {
            oS(e, t, a);
            continue;
          } else {
            var g = l.alternate, C = g !== null && g.memoizedState !== null, R = C || Br, j = Ym, A = Br;
            Ym = p, Br = R, Br && !A && (Ge = l, Vw(l));
            for (var W = s; W !== null; )
              Ge = W, UC(
                W,
                // New root; bubble back up to here and stop.
                t,
                a
              ), W = W.sibling;
            Ge = l, Ym = j, Br = A, oS(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & zo) !== et && s !== null ? (s.return = l, Ge = s) : oS(e, t, a);
      }
    }
    function oS(e, t, a) {
      for (; Ge !== null; ) {
        var i = Ge;
        if ((i.flags & zo) !== et) {
          var l = i.alternate;
          Xt(i);
          try {
            kw(t, l, i, a);
          } catch (f) {
            vn(i, i.return, f);
          }
          pn();
        }
        if (i === e) {
          Ge = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ge = s;
          return;
        }
        Ge = i.return;
      }
    }
    function Fw(e) {
      for (; Ge !== null; ) {
        var t = Ge, a = t.child;
        switch (t.tag) {
          case x:
          case pe:
          case be:
          case Re: {
            if (t.mode & Vt)
              try {
                nl(), mo(hr, t, t.return);
              } finally {
                tl(t);
              }
            else
              mo(hr, t, t.return);
            break;
          }
          case b: {
            Zf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && rS(t, t.return, i);
            break;
          }
          case F: {
            Zf(t, t.return);
            break;
          }
          case Z: {
            var l = t.memoizedState !== null;
            if (l) {
              jC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ge = a) : jC(e);
      }
    }
    function jC(e) {
      for (; Ge !== null; ) {
        var t = Ge;
        if (t === e) {
          Ge = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ge = a;
          return;
        }
        Ge = t.return;
      }
    }
    function Vw(e) {
      for (; Ge !== null; ) {
        var t = Ge, a = t.child;
        if (t.tag === Z) {
          var i = t.memoizedState !== null;
          if (i) {
            zC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ge = a) : zC(e);
      }
    }
    function zC(e) {
      for (; Ge !== null; ) {
        var t = Ge;
        Xt(t);
        try {
          Ow(t);
        } catch (i) {
          vn(t, t.return, i);
        }
        if (pn(), t === e) {
          Ge = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ge = a;
          return;
        }
        Ge = t.return;
      }
    }
    function Hw(e, t, a, i) {
      Ge = t, Iw(t, e, a, i);
    }
    function Iw(e, t, a, i) {
      for (; Ge !== null; ) {
        var l = Ge, s = l.child;
        (l.subtreeFlags & eo) !== et && s !== null ? (s.return = l, Ge = s) : Bw(e, t, a, i);
      }
    }
    function Bw(e, t, a, i) {
      for (; Ge !== null; ) {
        var l = Ge;
        if ((l.flags & Jr) !== et) {
          Xt(l);
          try {
            $w(t, l, a, i);
          } catch (f) {
            vn(l, l.return, f);
          }
          pn();
        }
        if (l === e) {
          Ge = null;
          return;
        }
        var s = l.sibling;
        if (s !== null) {
          s.return = l.return, Ge = s;
          return;
        }
        Ge = l.return;
      }
    }
    function $w(e, t, a, i) {
      switch (t.tag) {
        case x:
        case pe:
        case Re: {
          if (t.mode & Vt) {
            b0();
            try {
              Qu(Hr | vr, t);
            } finally {
              T0(t);
            }
          } else
            Qu(Hr | vr, t);
          break;
        }
      }
    }
    function Ww(e) {
      Ge = e, Yw();
    }
    function Yw() {
      for (; Ge !== null; ) {
        var e = Ge, t = e.child;
        if ((Ge.flags & Ma) !== et) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              Ge = l, qw(l, e);
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
            Ge = e;
          }
        }
        (e.subtreeFlags & eo) !== et && t !== null ? (t.return = e, Ge = t) : Gw();
      }
    }
    function Gw() {
      for (; Ge !== null; ) {
        var e = Ge;
        (e.flags & Jr) !== et && (Xt(e), Qw(e), pn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ge = t;
          return;
        }
        Ge = e.return;
      }
    }
    function Qw(e) {
      switch (e.tag) {
        case x:
        case pe:
        case Re: {
          e.mode & Vt ? (b0(), mo(Hr | vr, e, e.return), T0(e)) : mo(Hr | vr, e, e.return);
          break;
        }
      }
    }
    function qw(e, t) {
      for (; Ge !== null; ) {
        var a = Ge;
        Xt(a), Xw(a, t), pn();
        var i = a.child;
        i !== null ? (i.return = a, Ge = i) : Kw(e);
      }
    }
    function Kw(e) {
      for (; Ge !== null; ) {
        var t = Ge, a = t.sibling, i = t.return;
        if (OC(t), t === e) {
          Ge = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ge = a;
          return;
        }
        Ge = i;
      }
    }
    function Xw(e, t) {
      switch (e.tag) {
        case x:
        case pe:
        case Re: {
          e.mode & Vt ? (b0(), mo(Hr, e, t), T0(e)) : mo(Hr, e, t);
          break;
        }
      }
    }
    function Jw(e) {
      switch (e.tag) {
        case x:
        case pe:
        case Re: {
          try {
            Qu(hr | vr, e);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case b: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
      }
    }
    function Zw(e) {
      switch (e.tag) {
        case x:
        case pe:
        case Re: {
          try {
            Qu(Hr | vr, e);
          } catch (t) {
            vn(e, e.return, t);
          }
          break;
        }
      }
    }
    function ex(e) {
      switch (e.tag) {
        case x:
        case pe:
        case Re: {
          try {
            mo(hr | vr, e, e.return);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case b: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && rS(e, e.return, t);
          break;
        }
      }
    }
    function tx(e) {
      switch (e.tag) {
        case x:
        case pe:
        case Re:
          try {
            mo(Hr | vr, e, e.return);
          } catch (t) {
            vn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Xp = Symbol.for;
      Xp("selector.component"), Xp("selector.has_pseudo_class"), Xp("selector.role"), Xp("selector.test_id"), Xp("selector.text");
    }
    var nx = [];
    function rx() {
      nx.forEach(function(e) {
        return e();
      });
    }
    var ax = h.ReactCurrentActQueue;
    function ix(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function PC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && ax.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var ox = Math.ceil, lS = h.ReactCurrentDispatcher, uS = h.ReactCurrentOwner, Wr = h.ReactCurrentBatchConfig, So = h.ReactCurrentActQueue, gr = (
      /*             */
      0
    ), FC = (
      /*               */
      1
    ), Yr = (
      /*                */
      2
    ), Hi = (
      /*                */
      4
    ), ql = 0, Jp = 1, fc = 2, Qm = 3, Zp = 4, VC = 5, sS = 6, At = gr, Ta = null, Mn = null, Sr = ce, al = ce, cS = Fu(ce), _r = ql, ev = null, qm = ce, tv = ce, Km = ce, nv = null, Wa = null, fS = 0, HC = 500, IC = 1 / 0, lx = 500, Kl = null;
    function rv() {
      IC = Kn() + lx;
    }
    function BC() {
      return IC;
    }
    var Xm = !1, dS = null, ed = null, dc = !1, Ku = null, av = ce, pS = [], vS = null, ux = 50, iv = 0, hS = null, mS = !1, Jm = !1, sx = 50, td = 0, Zm = null, ov = an, ey = ce, $C = !1;
    function ty() {
      return Ta;
    }
    function ba() {
      return (At & (Yr | Hi)) !== gr ? Kn() : (ov !== an || (ov = Kn()), ov);
    }
    function Xu(e) {
      var t = e.mode;
      if ((t & xt) === tt)
        return ct;
      if ((At & Yr) !== gr && Sr !== ce)
        return Ms(Sr);
      var a = ab() !== rb;
      if (a) {
        if (Wr.transition !== null) {
          var i = Wr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return ey === Pt && (ey = Qd()), ey;
      }
      var l = Va();
      if (l !== Pt)
        return l;
      var s = I2();
      return s;
    }
    function cx(e) {
      var t = e.mode;
      return (t & xt) === tt ? ct : ih();
    }
    function Cr(e, t, a, i) {
      Ax(), $C && y("useInsertionEffect must not schedule updates."), mS && (Jm = !0), ku(e, a, i), (At & Yr) !== ce && e === Ta ? zx(t) : (na && js(e, t, a), Px(t), e === Ta && ((At & Yr) === gr && (tv = Et(tv, a)), _r === Zp && Ju(e, Sr)), Ya(e, i), a === ct && At === gr && (t.mode & xt) === tt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !So.isBatchingLegacy && (rv(), $_()));
    }
    function fx(e, t, a) {
      var i = e.current;
      i.lanes = t, ku(e, t, a), Ya(e, a);
    }
    function dx(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (At & Yr) !== gr
      );
    }
    function Ya(e, t) {
      var a = e.callbackNode;
      cf(e, t);
      var i = sf(e, e === Ta ? Sr : ce);
      if (i === ce) {
        a !== null && oE(a), e.callbackNode = null, e.callbackPriority = Pt;
        return;
      }
      var l = Io(i), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(So.current !== null && a !== RS)) {
        a == null && s !== ct && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && oE(a);
      var f;
      if (l === ct)
        e.tag === Vu ? (So.isBatchingLegacy !== null && (So.didScheduleLegacyUpdate = !0), VT(GC.bind(null, e))) : B_(GC.bind(null, e)), So.current !== null ? So.current.push(Hu) : $2(function() {
          (At & (Yr | Hi)) === gr && Hu();
        }), f = null;
      else {
        var p;
        switch (dh(i)) {
          case Ur:
            p = Ss;
            break;
          case Li:
            p = Po;
            break;
          case Pa:
            p = to;
            break;
          case Fa:
            p = Rl;
            break;
          default:
            p = to;
            break;
        }
        f = TS(p, WC.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = f;
    }
    function WC(e, t) {
      if (Db(), ov = an, ey = ce, (At & (Yr | Hi)) !== gr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Jl();
      if (i && e.callbackNode !== a)
        return null;
      var l = sf(e, e === Ta ? Sr : ce);
      if (l === ce)
        return null;
      var s = !df(e, l) && !ah(e, l) && !t, f = s ? Ex(e, l) : ry(e, l);
      if (f !== ql) {
        if (f === fc) {
          var p = ff(e);
          p !== ce && (l = p, f = yS(e, p));
        }
        if (f === Jp) {
          var g = ev;
          throw pc(e, ce), Ju(e, l), Ya(e, Kn()), g;
        }
        if (f === sS)
          Ju(e, l);
        else {
          var C = !df(e, l), R = e.current.alternate;
          if (C && !vx(R)) {
            if (f = ry(e, l), f === fc) {
              var j = ff(e);
              j !== ce && (l = j, f = yS(e, j));
            }
            if (f === Jp) {
              var A = ev;
              throw pc(e, ce), Ju(e, l), Ya(e, Kn()), A;
            }
          }
          e.finishedWork = R, e.finishedLanes = l, px(e, f, l);
        }
      }
      return Ya(e, Kn()), e.callbackNode === a ? WC.bind(null, e) : null;
    }
    function yS(e, t) {
      var a = nv;
      if (hf(e)) {
        var i = pc(e, t);
        i.flags |= br, MT(e.containerInfo);
      }
      var l = ry(e, t);
      if (l !== fc) {
        var s = Wa;
        Wa = a, s !== null && YC(s);
      }
      return l;
    }
    function YC(e) {
      Wa === null ? Wa = e : Wa.push.apply(Wa, e);
    }
    function px(e, t, a) {
      switch (t) {
        case ql:
        case Jp:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case fc: {
          vc(e, Wa, Kl);
          break;
        }
        case Qm: {
          if (Ju(e, a), Al(a) && // do not delay if we're inside an act() scope
          !lE()) {
            var i = fS + HC - Kn();
            if (i > 10) {
              var l = sf(e, ce);
              if (l !== ce)
                break;
              var s = e.suspendedLanes;
              if (!Ul(s, a)) {
                ba(), pf(e, s);
                break;
              }
              e.timeoutHandle = vg(vc.bind(null, e, Wa, Kl), i);
              break;
            }
          }
          vc(e, Wa, Kl);
          break;
        }
        case Zp: {
          if (Ju(e, a), Yd(a))
            break;
          if (!lE()) {
            var f = ui(e, a), p = f, g = Kn() - p, C = Mx(g) - g;
            if (C > 10) {
              e.timeoutHandle = vg(vc.bind(null, e, Wa, Kl), C);
              break;
            }
          }
          vc(e, Wa, Kl);
          break;
        }
        case VC: {
          vc(e, Wa, Kl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function vx(e) {
      for (var t = e; ; ) {
        if (t.flags & Ru) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var s = i[l], f = s.getSnapshot, p = s.value;
                try {
                  if (!me(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var g = t.child;
        if (t.subtreeFlags & Ru && g !== null) {
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
    function Ju(e, t) {
      t = As(t, Km), t = As(t, tv), uh(e, t);
    }
    function GC(e) {
      if (Lb(), (At & (Yr | Hi)) !== gr)
        throw new Error("Should not already be working.");
      Jl();
      var t = sf(e, ce);
      if (!aa(t, ct))
        return Ya(e, Kn()), null;
      var a = ry(e, t);
      if (e.tag !== Vu && a === fc) {
        var i = ff(e);
        i !== ce && (t = i, a = yS(e, i));
      }
      if (a === Jp) {
        var l = ev;
        throw pc(e, ce), Ju(e, t), Ya(e, Kn()), l;
      }
      if (a === sS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, vc(e, Wa, Kl), Ya(e, Kn()), null;
    }
    function hx(e, t) {
      t !== ce && (vf(e, Et(t, ct)), Ya(e, Kn()), (At & (Yr | Hi)) === gr && (rv(), Hu()));
    }
    function gS(e, t) {
      var a = At;
      At |= FC;
      try {
        return e(t);
      } finally {
        At = a, At === gr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !So.isBatchingLegacy && (rv(), $_());
      }
    }
    function mx(e, t, a, i, l) {
      var s = Va(), f = Wr.transition;
      try {
        return Wr.transition = null, Hn(Ur), e(t, a, i, l);
      } finally {
        Hn(s), Wr.transition = f, At === gr && rv();
      }
    }
    function Xl(e) {
      Ku !== null && Ku.tag === Vu && (At & (Yr | Hi)) === gr && Jl();
      var t = At;
      At |= FC;
      var a = Wr.transition, i = Va();
      try {
        return Wr.transition = null, Hn(Ur), e ? e() : void 0;
      } finally {
        Hn(i), Wr.transition = a, At = t, (At & (Yr | Hi)) === gr && Hu();
      }
    }
    function QC() {
      return (At & (Yr | Hi)) !== gr;
    }
    function ny(e, t) {
      sa(cS, al, e), al = Et(al, t);
    }
    function SS(e) {
      al = cS.current, ua(cS, e);
    }
    function pc(e, t) {
      e.finishedWork = null, e.finishedLanes = ce;
      var a = e.timeoutHandle;
      if (a !== hg && (e.timeoutHandle = hg, B2(a)), Mn !== null)
        for (var i = Mn.return; i !== null; ) {
          var l = i.alternate;
          RC(l, i), i = i.return;
        }
      Ta = e;
      var s = hc(e.current, null);
      return Mn = s, Sr = al = t, _r = ql, ev = null, qm = ce, tv = ce, Km = ce, nv = null, Wa = null, fb(), co.discardPendingWarnings(), s;
    }
    function qC(e, t) {
      do {
        var a = Mn;
        try {
          if (dm(), S1(), pn(), uS.current = null, a === null || a.return === null) {
            _r = Jp, ev = t, Mn = null;
            return;
          }
          if (Ve && a.mode & Vt && Hm(a, !0), Ze)
            if (_a(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Di(a, i, Sr);
            } else
              Cs(a, t, Sr);
          Vb(e, a.return, a, t, Sr), ZC(a);
        } catch (l) {
          t = l, Mn === a && a !== null ? (a = a.return, Mn = a) : a = Mn;
          continue;
        }
        return;
      } while (!0);
    }
    function KC() {
      var e = lS.current;
      return lS.current = jm, e === null ? jm : e;
    }
    function XC(e) {
      lS.current = e;
    }
    function yx() {
      fS = Kn();
    }
    function lv(e) {
      qm = Et(e, qm);
    }
    function gx() {
      _r === ql && (_r = Qm);
    }
    function _S() {
      (_r === ql || _r === Qm || _r === fc) && (_r = Zp), Ta !== null && (Ns(qm) || Ns(tv)) && Ju(Ta, Sr);
    }
    function Sx(e) {
      _r !== Zp && (_r = fc), nv === null ? nv = [e] : nv.push(e);
    }
    function _x() {
      return _r === ql;
    }
    function ry(e, t) {
      var a = At;
      At |= Yr;
      var i = KC();
      if (Ta !== e || Sr !== t) {
        if (na) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (uv(e, Sr), l.clear()), sh(e, t);
        }
        Kl = Jd(), pc(e, t);
      }
      xl(t);
      do
        try {
          Cx();
          break;
        } catch (s) {
          qC(e, s);
        }
      while (!0);
      if (dm(), At = a, XC(i), Mn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return $c(), Ta = null, Sr = ce, _r;
    }
    function Cx() {
      for (; Mn !== null; )
        JC(Mn);
    }
    function Ex(e, t) {
      var a = At;
      At |= Yr;
      var i = KC();
      if (Ta !== e || Sr !== t) {
        if (na) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (uv(e, Sr), l.clear()), sh(e, t);
        }
        Kl = Jd(), rv(), pc(e, t);
      }
      xl(t);
      do
        try {
          Rx();
          break;
        } catch (s) {
          qC(e, s);
        }
      while (!0);
      return dm(), XC(i), At = a, Mn !== null ? (eh(), ql) : ($c(), Ta = null, Sr = ce, _r);
    }
    function Rx() {
      for (; Mn !== null && !Ld(); )
        JC(Mn);
    }
    function JC(e) {
      var t = e.alternate;
      Xt(e);
      var a;
      (e.mode & Vt) !== tt ? (R0(e), a = CS(t, e, al), Hm(e, !0)) : a = CS(t, e, al), pn(), e.memoizedProps = e.pendingProps, a === null ? ZC(e) : Mn = a, uS.current = null;
    }
    function ZC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & gs) === et) {
          Xt(t);
          var l = void 0;
          if ((t.mode & Vt) === tt ? l = EC(a, t, al) : (R0(t), l = EC(a, t, al), Hm(t, !1)), pn(), l !== null) {
            Mn = l;
            return;
          }
        } else {
          var s = gw(a, t);
          if (s !== null) {
            s.flags &= Qv, Mn = s;
            return;
          }
          if ((t.mode & Vt) !== tt) {
            Hm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= gs, i.subtreeFlags = et, i.deletions = null;
          else {
            _r = sS, Mn = null;
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
      _r === ql && (_r = VC);
    }
    function vc(e, t, a) {
      var i = Va(), l = Wr.transition;
      try {
        Wr.transition = null, Hn(Ur), Tx(e, t, a, i);
      } finally {
        Wr.transition = l, Hn(i);
      }
      return null;
    }
    function Tx(e, t, a, i) {
      do
        Jl();
      while (Ku !== null);
      if (Ux(), (At & (Yr | Hi)) !== gr)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (zd(s), l === null)
        return Pd(), null;
      if (s === ce && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ce, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Pt;
      var f = Et(l.lanes, l.childLanes);
      Kd(e, f), e === Ta && (Ta = null, Mn = null, Sr = ce), ((l.subtreeFlags & eo) !== et || (l.flags & eo) !== et) && (dc || (dc = !0, vS = a, TS(to, function() {
        return Jl(), null;
      })));
      var p = (l.subtreeFlags & (Uo | jo | zo | eo)) !== et, g = (l.flags & (Uo | jo | zo | eo)) !== et;
      if (p || g) {
        var C = Wr.transition;
        Wr.transition = null;
        var R = Va();
        Hn(Ur);
        var j = At;
        At |= Hi, uS.current = null, Rw(e, l), $1(), zw(e, l, s), j2(e.containerInfo), e.current = l, Es(s), Pw(l, e, s), Rs(), Nd(), At = j, Hn(R), Wr.transition = C;
      } else
        e.current = l, $1();
      var A = dc;
      if (dc ? (dc = !1, Ku = e, av = s) : (td = 0, Zm = null), f = e.pendingLanes, f === ce && (ed = null), A || rE(e.current, !1), Ad(l.stateNode, i), na && e.memoizedUpdaters.clear(), rx(), Ya(e, Kn()), t !== null)
        for (var W = e.onRecoverableError, q = 0; q < t.length; q++) {
          var te = t[q], Me = te.stack, at = te.digest;
          W(te.value, {
            componentStack: Me,
            digest: at
          });
        }
      if (Xm) {
        Xm = !1;
        var Xe = dS;
        throw dS = null, Xe;
      }
      return aa(av, ct) && e.tag !== Vu && Jl(), f = e.pendingLanes, aa(f, ct) ? (Ob(), e === hS ? iv++ : (iv = 0, hS = e)) : iv = 0, Hu(), Pd(), null;
    }
    function Jl() {
      if (Ku !== null) {
        var e = dh(av), t = Ps(Pa, e), a = Wr.transition, i = Va();
        try {
          return Wr.transition = null, Hn(t), wx();
        } finally {
          Hn(i), Wr.transition = a;
        }
      }
      return !1;
    }
    function bx(e) {
      pS.push(e), dc || (dc = !0, TS(to, function() {
        return Jl(), null;
      }));
    }
    function wx() {
      if (Ku === null)
        return !1;
      var e = vS;
      vS = null;
      var t = Ku, a = av;
      if (Ku = null, av = ce, (At & (Yr | Hi)) !== gr)
        throw new Error("Cannot flush passive effects while already rendering.");
      mS = !0, Jm = !1, wl(a);
      var i = At;
      At |= Hi, Ww(t.current), Hw(t, t.current, a, e);
      {
        var l = pS;
        pS = [];
        for (var s = 0; s < l.length; s++) {
          var f = l[s];
          xw(t, f);
        }
      }
      Hd(), rE(t.current, !0), At = i, Hu(), Jm ? t === Zm ? td++ : (td = 0, Zm = t) : td = 0, mS = !1, Jm = !1, Ud(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function eE(e) {
      return ed !== null && ed.has(e);
    }
    function xx(e) {
      ed === null ? ed = /* @__PURE__ */ new Set([e]) : ed.add(e);
    }
    function kx(e) {
      Xm || (Xm = !0, dS = e);
    }
    var Ox = kx;
    function tE(e, t, a) {
      var i = sc(a, t), l = J1(e, i, ct), s = Bu(e, l, ct), f = ba();
      s !== null && (ku(s, ct, f), Ya(s, f));
    }
    function vn(e, t, a) {
      if (_w(a), sv(!1), e.tag === P) {
        tE(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === P) {
          tE(i, e, a);
          return;
        } else if (i.tag === b) {
          var l = i.type, s = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !eE(s)) {
            var f = sc(a, e), p = H0(i, f, ct), g = Bu(i, p, ct), C = ba();
            g !== null && (ku(g, ct, C), Ya(g, C));
            return;
          }
        }
        i = i.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Dx(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = ba();
      pf(e, a), Fx(e), Ta === e && Ul(Sr, a) && (_r === Zp || _r === Qm && Al(Sr) && Kn() - fS < HC ? pc(e, ce) : Km = Et(Km, a)), Ya(e, l);
    }
    function nE(e, t) {
      t === Pt && (t = cx(e));
      var a = ba(), i = Ba(e, t);
      i !== null && (ku(i, t, a), Ya(i, a));
    }
    function Lx(e) {
      var t = e.memoizedState, a = Pt;
      t !== null && (a = t.retryLane), nE(e, a);
    }
    function Nx(e, t) {
      var a = Pt, i;
      switch (e.tag) {
        case ve:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case Se:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), nE(e, a);
    }
    function Mx(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : ox(e / 1960) * 1960;
    }
    function Ax() {
      if (iv > ux)
        throw iv = 0, hS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      td > sx && (td = 0, Zm = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Ux() {
      co.flushLegacyContextWarning(), co.flushPendingUnsafeLifecycleWarnings();
    }
    function rE(e, t) {
      Xt(e), ay(e, Ao, ex), t && ay(e, xi, tx), ay(e, Ao, Jw), t && ay(e, xi, Zw), pn();
    }
    function ay(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== et ? i = i.child : ((i.flags & t) !== et && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var iy = null;
    function aE(e) {
      {
        if ((At & Yr) !== gr || !(e.mode & xt))
          return;
        var t = e.tag;
        if (t !== M && t !== P && t !== b && t !== x && t !== pe && t !== be && t !== Re)
          return;
        var a = ht(e) || "ReactComponent";
        if (iy !== null) {
          if (iy.has(a))
            return;
          iy.add(a);
        } else
          iy = /* @__PURE__ */ new Set([a]);
        var i = sr;
        try {
          Xt(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Xt(e) : pn();
        }
      }
    }
    var CS;
    {
      var jx = null;
      CS = function(e, t, a) {
        var i = dE(jx, t);
        try {
          return yC(e, t, a);
        } catch (s) {
          if (QT() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (dm(), S1(), RC(e, t), dE(t, i), t.mode & Vt && R0(t), Mo(null, yC, null, e, t, a), Ji()) {
            var l = ys();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var iE = !1, ES;
    ES = /* @__PURE__ */ new Set();
    function zx(e) {
      if (_i && !wb())
        switch (e.tag) {
          case x:
          case pe:
          case Re: {
            var t = Mn && ht(Mn) || "Unknown", a = t;
            if (!ES.has(a)) {
              ES.add(a);
              var i = ht(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case b: {
            iE || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), iE = !0);
            break;
          }
        }
    }
    function uv(e, t) {
      if (na) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          js(e, i, t);
        });
      }
    }
    var RS = {};
    function TS(e, t) {
      {
        var a = So.current;
        return a !== null ? (a.push(t), RS) : Dd(e, t);
      }
    }
    function oE(e) {
      if (e !== RS)
        return Kv(e);
    }
    function lE() {
      return So.current !== null;
    }
    function Px(e) {
      {
        if (e.mode & xt) {
          if (!PC())
            return;
        } else if (!ix() || At !== gr || e.tag !== x && e.tag !== pe && e.tag !== Re)
          return;
        if (So.current === null) {
          var t = sr;
          try {
            Xt(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, ht(e));
          } finally {
            t ? Xt(e) : pn();
          }
        }
      }
    }
    function Fx(e) {
      e.tag !== Vu && PC() && So.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function sv(e) {
      $C = e;
    }
    var Ii = null, nd = null, Vx = function(e) {
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
    function bS(e) {
      return rd(e);
    }
    function wS(e) {
      {
        if (Ii === null)
          return e;
        var t = Ii(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = rd(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: se,
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
    function uE(e, t) {
      {
        if (Ii === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case b: {
            typeof i == "function" && (l = !0);
            break;
          }
          case x: {
            (typeof i == "function" || s === yt) && (l = !0);
            break;
          }
          case pe: {
            (s === se || s === yt) && (l = !0);
            break;
          }
          case be:
          case Re: {
            (s === _t || s === yt) && (l = !0);
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
    function sE(e) {
      {
        if (Ii === null || typeof WeakSet != "function")
          return;
        nd === null && (nd = /* @__PURE__ */ new WeakSet()), nd.add(e);
      }
    }
    var Hx = function(e, t) {
      {
        if (Ii === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Jl(), Xl(function() {
          xS(e.current, i, a);
        });
      }
    }, Ix = function(e, t) {
      {
        if (e.context !== fi)
          return;
        Jl(), Xl(function() {
          cv(t, e, null, null);
        });
      }
    };
    function xS(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, f = e.tag, p = e.type, g = null;
        switch (f) {
          case x:
          case Re:
          case b:
            g = p;
            break;
          case pe:
            g = p.render;
            break;
        }
        if (Ii === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var C = !1, R = !1;
        if (g !== null) {
          var j = Ii(g);
          j !== void 0 && (a.has(j) ? R = !0 : t.has(j) && (f === b ? R = !0 : C = !0));
        }
        if (nd !== null && (nd.has(e) || i !== null && nd.has(i)) && (R = !0), R && (e._debugNeedsRemount = !0), R || C) {
          var A = Ba(e, ct);
          A !== null && Cr(A, e, ct, an);
        }
        l !== null && !R && xS(l, t, a), s !== null && xS(s, t, a);
      }
    }
    var Bx = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return kS(e.current, i, a), a;
      }
    };
    function kS(e, t, a) {
      {
        var i = e.child, l = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case x:
          case Re:
          case b:
            p = f;
            break;
          case pe:
            p = f.render;
            break;
        }
        var g = !1;
        p !== null && t.has(p) && (g = !0), g ? $x(e, a) : i !== null && kS(i, t, a), l !== null && kS(l, t, a);
      }
    }
    function $x(e, t) {
      {
        var a = Wx(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case F:
              t.add(i.stateNode);
              return;
            case V:
              t.add(i.stateNode.containerInfo);
              return;
            case P:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function Wx(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === F)
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
    var OS;
    {
      OS = !1;
      try {
        var cE = Object.preventExtensions({});
      } catch {
        OS = !0;
      }
    }
    function Yx(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = et, this.subtreeFlags = et, this.deletions = null, this.lanes = ce, this.childLanes = ce, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !OS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var di = function(e, t, a, i) {
      return new Yx(e, t, a, i);
    };
    function DS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Gx(e) {
      return typeof e == "function" && !DS(e) && e.defaultProps === void 0;
    }
    function Qx(e) {
      if (typeof e == "function")
        return DS(e) ? b : x;
      if (e != null) {
        var t = e.$$typeof;
        if (t === se)
          return pe;
        if (t === _t)
          return be;
      }
      return M;
    }
    function hc(e, t) {
      var a = e.alternate;
      a === null ? (a = di(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = et, a.subtreeFlags = et, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Pn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case M:
        case x:
        case Re:
          a.type = rd(e.type);
          break;
        case b:
          a.type = bS(e.type);
          break;
        case pe:
          a.type = wS(e.type);
          break;
      }
      return a;
    }
    function qx(e, t) {
      e.flags &= Pn | Sn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ce, e.lanes = t, e.child = null, e.subtreeFlags = et, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = et, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function Kx(e, t, a) {
      var i;
      return e === nm ? (i = xt, t === !0 && (i |= en, i |= Ht)) : i = tt, na && (i |= Vt), di(P, null, null, i);
    }
    function LS(e, t, a, i, l, s) {
      var f = M, p = e;
      if (typeof e == "function")
        DS(e) ? (f = b, p = bS(p)) : p = rd(p);
      else if (typeof e == "string")
        f = F;
      else
        e: switch (e) {
          case mi:
            return Zu(a.children, l, s, t);
          case Xa:
            f = ae, l |= en, (l & xt) !== tt && (l |= Ht);
            break;
          case yi:
            return Xx(a, l, s, t);
          case De:
            return Jx(a, l, s, t);
          case Be:
            return Zx(a, l, s, t);
          case xn:
            return fE(a, l, s, t);
          case un:
          // eslint-disable-next-line no-fallthrough
          case kt:
          // eslint-disable-next-line no-fallthrough
          case dn:
          // eslint-disable-next-line no-fallthrough
          case ur:
          // eslint-disable-next-line no-fallthrough
          case wt:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case gi:
                  f = ue;
                  break e;
                case D:
                  f = le;
                  break e;
                case se:
                  f = pe, p = wS(p);
                  break e;
                case _t:
                  f = be;
                  break e;
                case yt:
                  f = Ue, p = null;
                  break e;
              }
            var g = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var C = i ? ht(i) : null;
              C && (g += `

Check the render method of \`` + C + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + g));
          }
        }
      var R = di(f, a, t, l);
      return R.elementType = e, R.type = p, R.lanes = s, R._debugOwner = i, R;
    }
    function NS(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, f = e.props, p = LS(l, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Zu(e, t, a, i) {
      var l = di(K, e, i, t);
      return l.lanes = a, l;
    }
    function Xx(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = di(_e, e, i, t | Vt);
      return l.elementType = yi, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function Jx(e, t, a, i) {
      var l = di(ve, e, i, t);
      return l.elementType = De, l.lanes = a, l;
    }
    function Zx(e, t, a, i) {
      var l = di(Se, e, i, t);
      return l.elementType = Be, l.lanes = a, l;
    }
    function fE(e, t, a, i) {
      var l = di(Z, e, i, t);
      l.elementType = xn, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function MS(e, t, a) {
      var i = di(X, e, null, t);
      return i.lanes = a, i;
    }
    function ek() {
      var e = di(F, null, null, tt);
      return e.elementType = "DELETED", e;
    }
    function tk(e) {
      var t = di(it, null, null, tt);
      return t.stateNode = e, t;
    }
    function AS(e, t, a) {
      var i = e.children !== null ? e.children : [], l = di(V, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function dE(e, t) {
      return e === null && (e = di(M, null, null, tt)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function nk(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = hg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Pt, this.eventTimes = Us(ce), this.expirationTimes = Us(an), this.pendingLanes = ce, this.suspendedLanes = ce, this.pingedLanes = ce, this.expiredLanes = ce, this.mutableReadLanes = ce, this.finishedLanes = ce, this.entangledLanes = ce, this.entanglements = Us(ce), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < kl; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case nm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Vu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function pE(e, t, a, i, l, s, f, p, g, C) {
      var R = new nk(e, t, a, p, g), j = Kx(t, s);
      R.current = j, j.stateNode = R;
      {
        var A = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        j.memoizedState = A;
      }
      return Gg(j), R;
    }
    var US = "18.3.1";
    function rk(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return qr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: lr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var jS, zS;
    jS = !1, zS = {};
    function vE(e) {
      if (!e)
        return fi;
      var t = Eu(e), a = FT(t);
      if (t.tag === b) {
        var i = t.type;
        if (Xo(i))
          return H_(t, i, a);
      }
      return a;
    }
    function ak(e, t) {
      {
        var a = Eu(e);
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
          var s = ht(a) || "Component";
          if (!zS[s]) {
            zS[s] = !0;
            var f = sr;
            try {
              Xt(l), a.mode & en ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Xt(f) : pn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function hE(e, t, a, i, l, s, f, p) {
      var g = !1, C = null;
      return pE(e, t, g, C, a, i, l, s, f);
    }
    function mE(e, t, a, i, l, s, f, p, g, C) {
      var R = !0, j = pE(a, i, R, e, l, s, f, p, g);
      j.context = vE(null);
      var A = j.current, W = ba(), q = Xu(A), te = Gl(W, q);
      return te.callback = t ?? null, Bu(A, te, q), fx(j, q, W), j;
    }
    function cv(e, t, a, i) {
      Md(t, e);
      var l = t.current, s = ba(), f = Xu(l);
      Cn(f);
      var p = vE(a);
      t.context === null ? t.context = p : t.pendingContext = p, _i && sr !== null && !jS && (jS = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ht(sr) || "Unknown"));
      var g = Gl(s, f);
      g.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), g.callback = i);
      var C = Bu(l, g, f);
      return C !== null && (Cr(C, l, f, s), ym(C, l, f)), f;
    }
    function oy(e) {
      var t = e.current;
      return t.child ? t.child.tag === F ? t.child.stateNode : t.child.stateNode : null;
    }
    function ik(e) {
      switch (e.tag) {
        case P: {
          var t = e.stateNode;
          if (hf(t)) {
            var a = nh(t);
            hx(t, a);
          }
          break;
        }
        case ve: {
          Xl(function() {
            var l = Ba(e, ct);
            if (l !== null) {
              var s = ba();
              Cr(l, e, ct, s);
            }
          });
          var i = ct;
          PS(e, i);
          break;
        }
      }
    }
    function yE(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = lh(a.retryLane, t));
    }
    function PS(e, t) {
      yE(e, t);
      var a = e.alternate;
      a && yE(a, t);
    }
    function ok(e) {
      if (e.tag === ve) {
        var t = Os, a = Ba(e, t);
        if (a !== null) {
          var i = ba();
          Cr(a, e, t, i);
        }
        PS(e, t);
      }
    }
    function lk(e) {
      if (e.tag === ve) {
        var t = Xu(e), a = Ba(e, t);
        if (a !== null) {
          var i = ba();
          Cr(a, e, t, i);
        }
        PS(e, t);
      }
    }
    function gE(e) {
      var t = hn(e);
      return t === null ? null : t.stateNode;
    }
    var SE = function(e) {
      return null;
    };
    function uk(e) {
      return SE(e);
    }
    var _E = function(e) {
      return !1;
    };
    function sk(e) {
      return _E(e);
    }
    var CE = null, EE = null, RE = null, TE = null, bE = null, wE = null, xE = null, kE = null, OE = null;
    {
      var DE = function(e, t, a) {
        var i = t[a], l = bt(e) ? e.slice() : Rt({}, e);
        return a + 1 === t.length ? (bt(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = DE(e[i], t, a + 1), l);
      }, LE = function(e, t) {
        return DE(e, t, 0);
      }, NE = function(e, t, a, i) {
        var l = t[i], s = bt(e) ? e.slice() : Rt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[l], bt(s) ? s.splice(l, 1) : delete s[l];
        } else
          s[l] = NE(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return s;
      }, ME = function(e, t, a) {
        if (t.length !== a.length) {
          T("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              T("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return NE(e, t, a, 0);
      }, AE = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], s = bt(e) ? e.slice() : Rt({}, e);
        return s[l] = AE(e[l], t, a + 1, i), s;
      }, UE = function(e, t, a) {
        return AE(e, t, 0, a);
      }, FS = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      CE = function(e, t, a, i) {
        var l = FS(e, t);
        if (l !== null) {
          var s = UE(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = Rt({}, e.memoizedProps);
          var f = Ba(e, ct);
          f !== null && Cr(f, e, ct, an);
        }
      }, EE = function(e, t, a) {
        var i = FS(e, t);
        if (i !== null) {
          var l = LE(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = Rt({}, e.memoizedProps);
          var s = Ba(e, ct);
          s !== null && Cr(s, e, ct, an);
        }
      }, RE = function(e, t, a, i) {
        var l = FS(e, t);
        if (l !== null) {
          var s = ME(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = Rt({}, e.memoizedProps);
          var f = Ba(e, ct);
          f !== null && Cr(f, e, ct, an);
        }
      }, TE = function(e, t, a) {
        e.pendingProps = UE(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, ct);
        i !== null && Cr(i, e, ct, an);
      }, bE = function(e, t) {
        e.pendingProps = LE(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ba(e, ct);
        a !== null && Cr(a, e, ct, an);
      }, wE = function(e, t, a) {
        e.pendingProps = ME(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, ct);
        i !== null && Cr(i, e, ct, an);
      }, xE = function(e) {
        var t = Ba(e, ct);
        t !== null && Cr(t, e, ct, an);
      }, kE = function(e) {
        SE = e;
      }, OE = function(e) {
        _E = e;
      };
    }
    function ck(e) {
      var t = ea(e);
      return t === null ? null : t.stateNode;
    }
    function fk(e) {
      return null;
    }
    function dk() {
      return sr;
    }
    function pk(e) {
      var t = e.findFiberByHostInstance, a = h.ReactCurrentDispatcher;
      return bu({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: CE,
        overrideHookStateDeletePath: EE,
        overrideHookStateRenamePath: RE,
        overrideProps: TE,
        overridePropsDeletePath: bE,
        overridePropsRenamePath: wE,
        setErrorHandler: kE,
        setSuspenseHandler: OE,
        scheduleUpdate: xE,
        currentDispatcherRef: a,
        findHostInstanceByFiber: ck,
        findFiberByHostInstance: t || fk,
        // React Refresh
        findHostInstancesForRefresh: Bx,
        scheduleRefresh: Hx,
        scheduleRoot: Ix,
        setRefreshHandler: Vx,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: dk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: US
      });
    }
    var jE = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function VS(e) {
      this._internalRoot = e;
    }
    ly.prototype.render = VS.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : uy(arguments[1]) ? y("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && y("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== jn) {
          var i = gE(t.current);
          i && i.parentNode !== a && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      cv(e, t, null, null);
    }, ly.prototype.unmount = VS.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        QC() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Xl(function() {
          cv(null, e, null, null);
        }), j_(t);
      }
    };
    function vk(e, t) {
      if (!uy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      zE(e);
      var a = !1, i = !1, l = "", s = jE;
      t != null && (t.hydrate ? T("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Lr && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = hE(e, nm, null, a, i, l, s);
      qh(f.current, e);
      var p = e.nodeType === jn ? e.parentNode : e;
      return mp(p), new VS(f);
    }
    function ly(e) {
      this._internalRoot = e;
    }
    function hk(e) {
      e && yh(e);
    }
    ly.prototype.unstable_scheduleHydration = hk;
    function mk(e, t, a) {
      if (!uy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      zE(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", g = jE;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (g = a.onRecoverableError));
      var C = mE(t, null, e, nm, i, s, f, p, g);
      if (qh(C.current, e), mp(e), l)
        for (var R = 0; R < l.length; R++) {
          var j = l[R];
          _b(C, j);
        }
      return new ly(C);
    }
    function uy(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === Xi || e.nodeType === gd));
    }
    function fv(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === Xi || e.nodeType === gd || e.nodeType === jn && e.nodeValue === " react-mount-point-unstable "));
    }
    function zE(e) {
      e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), xp(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var yk = h.ReactCurrentOwner, PE;
    PE = function(e) {
      if (e._reactRootContainer && e.nodeType !== jn) {
        var t = gE(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = HS(e), l = !!(i && Pu(i));
      l && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function HS(e) {
      return e ? e.nodeType === Xi ? e.documentElement : e.firstChild : null;
    }
    function FE() {
    }
    function gk(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var A = oy(f);
            s.call(A);
          };
        }
        var f = mE(
          t,
          i,
          e,
          Vu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          FE
        );
        e._reactRootContainer = f, qh(f.current, e);
        var p = e.nodeType === jn ? e.parentNode : e;
        return mp(p), Xl(), f;
      } else {
        for (var g; g = e.lastChild; )
          e.removeChild(g);
        if (typeof i == "function") {
          var C = i;
          i = function() {
            var A = oy(R);
            C.call(A);
          };
        }
        var R = hE(
          e,
          Vu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          FE
        );
        e._reactRootContainer = R, qh(R.current, e);
        var j = e.nodeType === jn ? e.parentNode : e;
        return mp(j), Xl(function() {
          cv(t, R, a, i);
        }), R;
      }
    }
    function Sk(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function sy(e, t, a, i, l) {
      PE(a), Sk(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = gk(a, t, e, l, i);
      else {
        if (f = s, typeof l == "function") {
          var p = l;
          l = function() {
            var g = oy(f);
            p.call(g);
          };
        }
        cv(t, f, e, l);
      }
      return oy(f);
    }
    var VE = !1;
    function _k(e) {
      {
        VE || (VE = !0, y("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = yk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", jt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Xr ? e : ak(e, "findDOMNode");
    }
    function Ck(e, t, a) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !fv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = xp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return sy(null, e, t, !0, a);
    }
    function Ek(e, t, a) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !fv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = xp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return sy(null, e, t, !1, a);
    }
    function Rk(e, t, a, i) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !fv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Py(e))
        throw new Error("parentComponent must be a valid React Component");
      return sy(e, t, a, !1, i);
    }
    var HE = !1;
    function Tk(e) {
      if (HE || (HE = !0, y("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !fv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = xp(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = HS(e), i = a && !Pu(a);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Xl(function() {
          sy(null, null, e, !1, function() {
            e._reactRootContainer = null, j_(e);
          });
        }), !0;
      } else {
        {
          var l = HS(e), s = !!(l && Pu(l)), f = e.nodeType === Xr && fv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    xr(ik), Ou(ok), ph(lk), Vs(Va), Zd(ch), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Lc(w2), zy(gS, mx, Xl);
    function bk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!uy(t))
        throw new Error("Target container is not a DOM element.");
      return rk(e, t, null, a);
    }
    function wk(e, t, a, i) {
      return Rk(e, t, a, i);
    }
    var IS = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Pu, Af, Kh, gu, Nc, gS]
    };
    function xk(e, t) {
      return IS.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), vk(e, t);
    }
    function kk(e, t, a) {
      return IS.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), mk(e, t, a);
    }
    function Ok(e) {
      return QC() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Xl(e);
    }
    var Dk = pk({
      findFiberByHostInstance: ec,
      bundleType: 1,
      version: US,
      rendererPackageName: "react-dom"
    });
    if (!Dk && An && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var IE = window.location.protocol;
      /^(https?|file):$/.test(IE) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (IE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = IS, Qa.createPortal = bk, Qa.createRoot = xk, Qa.findDOMNode = _k, Qa.flushSync = Ok, Qa.hydrate = Ck, Qa.hydrateRoot = kk, Qa.render = Ek, Qa.unmountComponentAtNode = Tk, Qa.unstable_batchedUpdates = gS, Qa.unstable_renderSubtreeIntoContainer = wk, Qa.version = US, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })()), Qa;
}
var hR;
function qD() {
  if (hR) return my.exports;
  hR = 1;
  function v() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
      } catch (m) {
        console.error(m);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (v(), my.exports = GD()) : my.exports = QD(), my.exports;
}
var l_ = qD();
const hv = /* @__PURE__ */ o_(l_);
function e_(v, m) {
  (m == null || m > v.length) && (m = v.length);
  for (var h = 0, E = Array(m); h < m; h++) E[h] = v[h];
  return E;
}
function KD(v) {
  if (Array.isArray(v)) return v;
}
function XD(v) {
  if (Array.isArray(v)) return e_(v);
}
function JD(v) {
  if (v === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return v;
}
function mR(v, m, h, E, k, T, y) {
  try {
    var N = v[T](y), x = N.value;
  } catch (b) {
    return void h(b);
  }
  N.done ? m(x) : Promise.resolve(x).then(E, k);
}
function ZD(v) {
  return function() {
    var m = this, h = arguments;
    return new Promise(function(E, k) {
      var T = v.apply(m, h);
      function y(x) {
        mR(T, E, k, y, N, "next", x);
      }
      function N(x) {
        mR(T, E, k, y, N, "throw", x);
      }
      y(void 0);
    });
  };
}
function Cy(v, m, h) {
  return m = t_(m), i3(v, UR() ? Reflect.construct(m, h || [], t_(v).constructor) : m.apply(v, h));
}
function yv(v, m) {
  if (!(v instanceof m)) throw new TypeError("Cannot call a class as a function");
}
function yR(v, m) {
  for (var h = 0; h < m.length; h++) {
    var E = m[h];
    E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(v, Sy(E.key), E);
  }
}
function gv(v, m, h) {
  return m && yR(v.prototype, m), h && yR(v, h), Object.defineProperty(v, "prototype", { writable: !1 }), v;
}
function ld(v, m, h) {
  return (m = Sy(m)) in v ? Object.defineProperty(v, m, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : v[m] = h, v;
}
function gc() {
  return (gc = Object.assign ? Object.assign.bind() : function(v) {
    for (var m = 1; m < arguments.length; m++) {
      var h, E = arguments[m];
      for (h in E) !{}.hasOwnProperty.call(E, h) || (v[h] = E[h]);
    }
    return v;
  }).apply(null, arguments);
}
function t_(v) {
  return (t_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  })(v);
}
function Ey(v, m) {
  if (typeof m != "function" && m !== null) throw new TypeError("Super expression must either be null or a function");
  v.prototype = Object.create(m && m.prototype, { constructor: { value: v, writable: !0, configurable: !0 } }), Object.defineProperty(v, "prototype", { writable: !1 }), m && jR(v, m);
}
function UR() {
  try {
    var v = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (UR = function() {
    return !!v;
  })();
}
function e3(v) {
  if (typeof Symbol < "u" && v[Symbol.iterator] != null || v["@@iterator"] != null) return Array.from(v);
}
function t3(v, m) {
  var h = v == null ? null : typeof Symbol < "u" && v[Symbol.iterator] || v["@@iterator"];
  if (h != null) {
    var E, k, T, y, N = [], x = !0, b = !1;
    try {
      if (T = (h = h.call(v)).next, m !== 0) for (; !(x = (E = T.call(h)).done) && (N.push(E.value), N.length !== m); x = !0) ;
    } catch (M) {
      b = !0, k = M;
    } finally {
      try {
        if (!x && h.return != null && (y = h.return(), Object(y) !== y)) return;
      } finally {
        if (b) throw k;
      }
    }
    return N;
  }
}
function n3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function r3() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gR(v, m) {
  var h, E = Object.keys(v);
  return Object.getOwnPropertySymbols && (h = Object.getOwnPropertySymbols(v), m && (h = h.filter(function(k) {
    return Object.getOwnPropertyDescriptor(v, k).enumerable;
  })), E.push.apply(E, h)), E;
}
function fe(v) {
  for (var m = 1; m < arguments.length; m++) {
    var h = arguments[m] != null ? arguments[m] : {};
    m % 2 ? gR(Object(h), !0).forEach(function(E) {
      ld(v, E, h[E]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(h)) : gR(Object(h)).forEach(function(E) {
      Object.defineProperty(v, E, Object.getOwnPropertyDescriptor(h, E));
    });
  }
  return v;
}
function $i(v, m) {
  if (v == null) return {};
  var h, E = a3(v, m);
  if (Object.getOwnPropertySymbols) for (var k = Object.getOwnPropertySymbols(v), T = 0; T < k.length; T++) h = k[T], m.includes(h) || {}.propertyIsEnumerable.call(v, h) && (E[h] = v[h]);
  return E;
}
function a3(v, m) {
  if (v == null) return {};
  var h, E = {};
  for (h in v) if ({}.hasOwnProperty.call(v, h)) {
    if (m.includes(h)) continue;
    E[h] = v[h];
  }
  return E;
}
function i3(v, m) {
  if (m && (typeof m == "object" || typeof m == "function")) return m;
  if (m !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return JD(v);
}
function id() {
  id = function() {
    return m;
  };
  var v, m = {}, h = Object.prototype, E = h.hasOwnProperty, k = Object.defineProperty || function(Y, Z, xe) {
    Y[Z] = xe.value;
  }, pe = typeof Symbol == "function" ? Symbol : {}, T = pe.iterator || "@@iterator", y = pe.asyncIterator || "@@asyncIterator", N = pe.toStringTag || "@@toStringTag";
  function x(Y, Z, xe) {
    return Object.defineProperty(Y, Z, { value: xe, enumerable: !0, configurable: !0, writable: !0 }), Y[Z];
  }
  try {
    x({}, "");
  } catch {
    x = function(Z, xe, $e) {
      return Z[xe] = $e;
    };
  }
  function b(Y, Ce, xe, z) {
    var Le, Te, ie, Ae, Ce = Ce && Ce.prototype instanceof ae ? Ce : ae, Ce = Object.create(Ce.prototype), z = new it(z || []);
    return k(Ce, "_invoke", { value: (Le = Y, Te = xe, ie = z, Ae = P, function(ee, Ze) {
      if (Ae === F) throw Error("Generator is already running");
      if (Ae === X) {
        if (ee === "throw") throw Ze;
        return { value: v, done: !0 };
      }
      for (ie.method = ee, ie.arg = Ze; ; ) {
        var Ve = ie.delegate;
        if (Ve && (Ve = (function mt(nt, je) {
          var st = je.method, dt = nt.iterator[st];
          return dt === v ? (je.delegate = null, st === "throw" && nt.iterator.return && (je.method = "return", je.arg = v, mt(nt, je), je.method === "throw") || st !== "return" && (je.method = "throw", je.arg = new TypeError("The iterator does not provide a '" + st + "' method")), K) : (st = M(dt, nt.iterator, je.arg), st.type === "throw" ? (je.method = "throw", je.arg = st.arg, je.delegate = null, K) : (dt = st.arg, dt ? dt.done ? (je[nt.resultName] = dt.value, je.next = nt.nextLoc, je.method !== "return" && (je.method = "next", je.arg = v), je.delegate = null, K) : dt : (je.method = "throw", je.arg = new TypeError("iterator result is not an object"), je.delegate = null, K)));
        })(Ve, ie), Ve)) {
          if (Ve === K) continue;
          return Ve;
        }
        if (ie.method === "next") ie.sent = ie._sent = ie.arg;
        else if (ie.method === "throw") {
          if (Ae === P) throw Ae = X, ie.arg;
          ie.dispatchException(ie.arg);
        } else ie.method === "return" && ie.abrupt("return", ie.arg);
        if (Ae = F, Ve = M(Le, Te, ie), Ve.type === "normal") {
          if (Ae = ie.done ? X : V, Ve.arg === K) continue;
          return { value: Ve.arg, done: ie.done };
        }
        Ve.type === "throw" && (Ae = X, ie.method = "throw", ie.arg = Ve.arg);
      }
    }) }), Ce;
  }
  function M(Y, Z, xe) {
    try {
      return { type: "normal", arg: Y.call(Z, xe) };
    } catch ($e) {
      return { type: "throw", arg: $e };
    }
  }
  m.wrap = b;
  var P = "suspendedStart", V = "suspendedYield", F = "executing", X = "completed", K = {};
  function ae() {
  }
  function le() {
  }
  function ue() {
  }
  var pe = {}, _e = (x(pe, T, function() {
    return this;
  }), Object.getPrototypeOf), _e = _e && _e(_e(Se([]))), ve = (_e && _e !== h && E.call(_e, T) && (pe = _e), ue.prototype = ae.prototype = Object.create(pe));
  function be(Y) {
    ["next", "throw", "return"].forEach(function(Z) {
      x(Y, Z, function(xe) {
        return this._invoke(Z, xe);
      });
    });
  }
  function Re(Y, Z) {
    var xe;
    k(this, "_invoke", { value: function($e, Le) {
      function Te() {
        return new Z(function(ie, Ae) {
          (function Ce(nt, ee, Ze, Ve) {
            var mt, nt = M(Y[nt], Y, ee);
            if (nt.type !== "throw") return (ee = (mt = nt.arg).value) && typeof ee == "object" && E.call(ee, "__await") ? Z.resolve(ee.__await).then(function(je) {
              Ce("next", je, Ze, Ve);
            }, function(je) {
              Ce("throw", je, Ze, Ve);
            }) : Z.resolve(ee).then(function(je) {
              mt.value = je, Ze(mt);
            }, function(je) {
              return Ce("throw", je, Ze, Ve);
            });
            Ve(nt.arg);
          })($e, Le, ie, Ae);
        });
      }
      return xe = xe ? xe.then(Te, Te) : Te();
    } });
  }
  function Ue(Y) {
    var Z = { tryLoc: Y[0] };
    1 in Y && (Z.catchLoc = Y[1]), 2 in Y && (Z.finallyLoc = Y[2], Z.afterLoc = Y[3]), this.tryEntries.push(Z);
  }
  function qe(Y) {
    var Z = Y.completion || {};
    Z.type = "normal", delete Z.arg, Y.completion = Z;
  }
  function it(Y) {
    this.tryEntries = [{ tryLoc: "root" }], Y.forEach(Ue, this), this.reset(!0);
  }
  function Se(Y) {
    if (Y || Y === "") {
      var Z, xe = Y[T];
      if (xe) return xe.call(Y);
      if (typeof Y.next == "function") return Y;
      if (!isNaN(Y.length)) return Z = -1, (xe = function $e() {
        for (; ++Z < Y.length; ) if (E.call(Y, Z)) return $e.value = Y[Z], $e.done = !1, $e;
        return $e.value = v, $e.done = !0, $e;
      }).next = xe;
    }
    throw new TypeError(typeof Y + " is not iterable");
  }
  return k(ve, "constructor", { value: le.prototype = ue, configurable: !0 }), k(ue, "constructor", { value: le, configurable: !0 }), le.displayName = x(ue, N, "GeneratorFunction"), m.isGeneratorFunction = function(Y) {
    return Y = typeof Y == "function" && Y.constructor, !!Y && (Y === le || (Y.displayName || Y.name) === "GeneratorFunction");
  }, m.mark = function(Y) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(Y, ue) : (Y.__proto__ = ue, x(Y, N, "GeneratorFunction")), Y.prototype = Object.create(ve), Y;
  }, m.awrap = function(Y) {
    return { __await: Y };
  }, be(Re.prototype), x(Re.prototype, y, function() {
    return this;
  }), m.AsyncIterator = Re, m.async = function(Y, Z, xe, $e, Le) {
    Le === void 0 && (Le = Promise);
    var Te = new Re(b(Y, Z, xe, $e), Le);
    return m.isGeneratorFunction(Z) ? Te : Te.next().then(function(ie) {
      return ie.done ? ie.value : Te.next();
    });
  }, be(ve), x(ve, N, "Generator"), x(ve, T, function() {
    return this;
  }), x(ve, "toString", function() {
    return "[object Generator]";
  }), m.keys = function(Y) {
    var Z, xe = Object(Y), $e = [];
    for (Z in xe) $e.push(Z);
    return $e.reverse(), function Le() {
      for (; $e.length; ) {
        var Te = $e.pop();
        if (Te in xe) return Le.value = Te, Le.done = !1, Le;
      }
      return Le.done = !0, Le;
    };
  }, m.values = Se, it.prototype = { constructor: it, reset: function(Y) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = v, this.done = !1, this.delegate = null, this.method = "next", this.arg = v, this.tryEntries.forEach(qe), !Y) for (var Z in this) Z.charAt(0) === "t" && E.call(this, Z) && !isNaN(+Z.slice(1)) && (this[Z] = v);
  }, stop: function() {
    this.done = !0;
    var Y = this.tryEntries[0].completion;
    if (Y.type === "throw") throw Y.arg;
    return this.rval;
  }, dispatchException: function(Y) {
    if (this.done) throw Y;
    var Z = this;
    function xe(Ce, z) {
      return Te.type = "throw", Te.arg = Y, Z.next = Ce, z && (Z.method = "next", Z.arg = v), !!z;
    }
    for (var $e = this.tryEntries.length - 1; 0 <= $e; --$e) {
      var Le = this.tryEntries[$e], Te = Le.completion;
      if (Le.tryLoc === "root") return xe("end");
      if (Le.tryLoc <= this.prev) {
        var ie = E.call(Le, "catchLoc"), Ae = E.call(Le, "finallyLoc");
        if (ie && Ae) {
          if (this.prev < Le.catchLoc) return xe(Le.catchLoc, !0);
          if (this.prev < Le.finallyLoc) return xe(Le.finallyLoc);
        } else if (ie) {
          if (this.prev < Le.catchLoc) return xe(Le.catchLoc, !0);
        } else {
          if (!Ae) throw Error("try statement without catch or finally");
          if (this.prev < Le.finallyLoc) return xe(Le.finallyLoc);
        }
      }
    }
  }, abrupt: function(Y, Z) {
    for (var xe = this.tryEntries.length - 1; 0 <= xe; --xe) {
      var $e = this.tryEntries[xe];
      if ($e.tryLoc <= this.prev && E.call($e, "finallyLoc") && this.prev < $e.finallyLoc) {
        var Le = $e;
        break;
      }
    }
    var Te = (Le = Le && (Y === "break" || Y === "continue") && Le.tryLoc <= Z && Z <= Le.finallyLoc ? null : Le) ? Le.completion : {};
    return Te.type = Y, Te.arg = Z, Le ? (this.method = "next", this.next = Le.finallyLoc, K) : this.complete(Te);
  }, complete: function(Y, Z) {
    if (Y.type === "throw") throw Y.arg;
    return Y.type === "break" || Y.type === "continue" ? this.next = Y.arg : Y.type === "return" ? (this.rval = this.arg = Y.arg, this.method = "return", this.next = "end") : Y.type === "normal" && Z && (this.next = Z), K;
  }, finish: function(Y) {
    for (var Z = this.tryEntries.length - 1; 0 <= Z; --Z) {
      var xe = this.tryEntries[Z];
      if (xe.finallyLoc === Y) return this.complete(xe.completion, xe.afterLoc), qe(xe), K;
    }
  }, catch: function(Y) {
    for (var Z = this.tryEntries.length - 1; 0 <= Z; --Z) {
      var xe, $e, Le = this.tryEntries[Z];
      if (Le.tryLoc === Y) return (xe = Le.completion).type === "throw" && ($e = xe.arg, qe(Le)), $e;
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(Y, Z, xe) {
    return this.delegate = { iterator: Se(Y), resultName: Z, nextLoc: xe }, this.method === "next" && (this.arg = v), K;
  } }, m;
}
function jR(v, m) {
  return (jR = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(h, E) {
    return h.__proto__ = E, h;
  })(v, m);
}
function SR(v, m) {
  return KD(v) || t3(v, m) || zR(v, m) || n3();
}
function Ry(v) {
  return XD(v) || e3(v) || zR(v) || r3();
}
function o3(v, m) {
  if (typeof v != "object" || !v) return v;
  var h = v[Symbol.toPrimitive];
  if (h === void 0) return (m === "string" ? String : Number)(v);
  if (h = h.call(v, m), typeof h != "object") return h;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
function Sy(v) {
  return v = o3(v, "string"), typeof v == "symbol" ? v : v + "";
}
function Qr(v) {
  return (Qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(m) {
    return typeof m;
  } : function(m) {
    return m && typeof Symbol == "function" && m.constructor === Symbol && m !== Symbol.prototype ? "symbol" : typeof m;
  })(v);
}
function zR(v, m) {
  var h;
  if (v) return typeof v == "string" ? e_(v, m) : (h = (h = {}.toString.call(v).slice(8, -1)) === "Object" && v.constructor ? v.constructor.name : h) === "Map" || h === "Set" ? Array.from(v) : h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? e_(v, m) : void 0;
}
var PR = { react: { componentWrap: "div", slotWrap: "div", componentWrapAttrs: { __use_react_component_wrap: "", style: { all: "unset" } }, slotWrapAttrs: { __use_react_slot_wrap: "", style: { all: "unset" } }, vueNamedSlotsKey: ["node:"] }, vue: { componentWrapHOC: function(v) {
  return function() {
    var m = (0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}).portals;
    return vt.createElement(vt.Fragment, null, v, (m === void 0 ? [] : m).map(function(h) {
      var E = h.Portal;
      return vt.createElement(E, { key: h.key });
    }));
  };
}, componentWrapAttrs: { "data-use-vue-component-wrap": "", style: { all: "unset" } }, slotWrapAttrs: { "data-use-vue-slot-wrap": "", style: { all: "unset" } } } };
function FR() {
  var v = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : { react: {}, vue: {} }, h = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : PR, m = 2 < arguments.length ? arguments[2] : void 0, h = (v.vue || (v.vue = {}), v.react || (v.react = {}), [h, fe(fe({}, v), {}, { react: fe(fe(fe({}, h.react), v.react), {}, { componentWrapAttrs: fe(fe({}, h.react.componentWrapAttrs), v.react.componentWrapAttrs), slotWrapAttrs: fe(fe({}, h.react.slotWrapAttrs), v.react.slotWrapAttrs) }), vue: fe(fe(fe({}, h.vue), v.vue), {}, { componentWrapAttrs: fe(fe({}, h.vue.componentWrapAttrs), v.vue.componentWrapAttrs), slotWrapAttrs: fe(fe({}, h.vue.slotWrapAttrs), v.vue.slotWrapAttrs) }) })]);
  return m && h.unshift({}), Object.assign.apply(this, h);
}
var VR = ["getElementById", "getElementsByClassName", "getElementsByTagName", "getElementsByTagNameNS", "querySelector", "querySelectorAll"], od = { Document: {}, Element: {} };
function l3(v) {
  Object.keys(od).forEach(function(m) {
    VR.forEach(function(h) {
      var E = od[m][h] || window[m].prototype[h];
      E && (od[m][h] = E, window[m].prototype[h] = function() {
        for (var k = arguments.length, T = new Array(k), y = 0; y < k; y++) T[y] = arguments[y];
        var N = E.apply(this, T);
        return N && (N.constructor !== NodeList || N.constructor === NodeList && 0 < N.length) ? N : ((N = h) === "getElementById" && (N = "querySelector", T = ["#" + T[0]]), (od.Element[N] || Element.prototype[N]).apply(v, T));
      });
    });
  });
}
function u3() {
  Object.keys(od).forEach(function(v) {
    VR.forEach(function(m) {
      window[v].prototype[m] = od[v][m];
    });
  });
}
var s3 = ["ref"], c3 = ["key"], f3 = ["hashList"], XS = parseInt(l_.version);
var d3 = (() => {
  function v(m) {
    return yv(this, v), Cy(this, v, [m]);
  }
  return Ey(v, vt.Component), gv(v, [{ key: "render", value: function() {
    var m = this.props.component, h = this.props.passedProps, h = (h.ref, $i(h, s3));
    return vt.createElement(m, h, this.props.children);
  } }]);
})(), p3 = function(v, m, h) {
  var E = (() => {
    function k(T) {
      var y;
      return yv(this, k), (y = Cy(this, k, [T])).state = fe(fe({}, T), m.isSlots ? { children: v } : {}), y.setRef = y.setRef.bind(y), y.vueInReactCall = y.vueInReactCall.bind(y), (y.__veauryVueWrapperRef__ = h).__veauryVueInReactCall__ = y.vueInReactCall, y;
    }
    return Ey(k, vt.Component), gv(k, [{ key: "reactPropsLinkToVueInstance", value: function(T) {
      Object.keys(T).forEach(function(y) {
        h[y] || (h[y] = T[y]);
      }), Object.getOwnPropertyNames(T.__proto__).filter(function(y) {
        return ["constructor", "render"].indexOf(y) < 0;
      }).forEach(function(y) {
        h[y] || (h[y] = T[y]);
      });
    } }, { key: "setRef", value: function(T) {
      var y = this;
      T && (h.__veauryReactRef__ = T, this.reactPropsLinkToVueInstance(T), Promise.resolve().then(function() {
        return y.reactPropsLinkToVueInstance(T);
      }), (this.setRef.current = T).__veauryVueWrapperRef__ = h);
    } }, { key: "createSlot", value: function(T) {
      return { originVNode: T, inheritAttrs: !1, __fromReactSlot: !0, render: function() {
        var y, N;
        return ((y = T = (T = ((N = this.$slots) == null || (y = N.default) == null ? void 0 : y.call(N)) || T) instanceof Function ? T(this) : T) == null ? void 0 : y.length) === 1 && (N = T[0]) != null && N.data && ((y = this.$attrs).key, N = $i(y, c3), T[0].props = fe(fe({}, N), T[0].props)), T;
      } };
    } }, { key: "componentWillUnmount", value: function() {
      h.__veauryReactRef__ && (h.__veauryReactRef__.__veauryVueWrapperRef__ = null, h.__veauryReactRef__ = null);
    } }, { key: "vueInReactCall", value: function(T) {
      var y = this, N = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
      return 2 < arguments.length && arguments[2] && T && T[0] ? T.map(function(x, b) {
        return gy(y.createSlot(x instanceof Function ? x : [x]), fe(fe(fe({}, m), N), {}, { isSlots: !0, wrapInstance: h })).render({ key: x?.key || void 0 });
      }) : gy(this.createSlot(T), fe(fe(fe({}, m), N), {}, { isSlots: !0, wrapInstance: h })).render();
    } }, { key: "render", value: function() {
      var T, y, N, x = this, K = this.state, b = K.hashList, M = $i(K, f3), P = {}, V = {};
      for (T in M) y = T, N = void 0, M.hasOwnProperty(y) && M[y] != null && (M[y].__slot ? (M[y].reactSlot ? M[y] = M[y].reactSlot : (N = M[y], m.defaultSlotsFormatter && M[y].__trueChildren ? (M[y].__trueChildren.__top__ = x.__veauryVueWrapperRef__, M[y] = m.defaultSlotsFormatter(M[y].__trueChildren, x.vueInReactCall, b), M[y] instanceof Array ? M[y] = Ry(M[y]) : -1 < ["string", "number"].indexOf(Qr(M[y])) ? M[y] = [M[y]] : Qr(M[y]) === "object" && (M[y] = fe({}, M[y]))) : M[y] = fe({}, gy(x.createSlot(M[y]), fe(fe({}, m), {}, { isSlots: !0, wrapInstance: h })).render()), M[y].vueFunction = N), P[y] = M[y]) : M[y].__scopedSlot && (M[y] = M[y](x.createSlot), V[y] = M[y]));
      var F, X, K = {};
      return K.ref = this.setRef, m.isSlots ? this.state.children || this.props.children : (F = M, v.__syncUpdateForPureReactInVue && Object.keys(v.__syncUpdateForPureReactInVue).map(function(ae) {
        var le, ue;
        F[ae] && typeof F[ae] == "function" && (le = x.__veauryVueWrapperRef__, ue = F[ae], F[ae] = function() {
          for (var pe = arguments.length, _e = new Array(pe), ve = 0; ve < pe; ve++) _e[ve] = arguments[ve];
          le.__veaurySyncUpdateProps__(v.__syncUpdateForPureReactInVue[ae].apply(this, _e)), ue.apply(this, _e), le.macroTaskUpdate = !0, le.__veauryMountReactComponent__(!0, !0, {});
        });
      }), X = fe(fe(fe({}, F = m.defaultPropsFormatter ? m.defaultPropsFormatter.call(this, F, this.vueInReactCall, b) : F), P), V), Object.getPrototypeOf(v) !== Function.prototype && (Qr(v) !== "object" || v.render) || k.catchVueRefs() ? (Object.getPrototypeOf(v) === Function.prototype && delete K.ref, vt.createElement(v, gc({}, X, K))) : vt.createElement(d3, gc({ passedProps: X, component: v }, K), X.children));
    } }], [{ key: "catchVueRefs", value: function() {
      if (h.$parent) {
        for (var T in h.$parent.$refs) if (h.$parent.$refs[T] === h) return !0;
      }
      return !1;
    } }]);
  })();
  return ld(E, "displayName", "applyReact_".concat(v.displayName || v.name || "Component")), E;
};
function u_(v) {
  var m = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
  return v.__esModule && v.default && (v = v.default), m.isSlots && (v = v()), m = FR(m, void 0, !0), { originReactComponent: v, setup: function(h, E) {
    var k, T, y, N;
    if (!m.isSlots) return k = {}, T = Mk({}), y = Ak(), typeof (N = m.useInjectPropsFromWrapper || v.__veauryInjectPropsFromWrapper__) == "function" && (typeof (N = N.call(y.proxy, h)) != "function" ? (Object.assign(T, N), k.__veauryInjectedProps__ = T) : y.proxy.__veauryInjectedComputed__ = N), k;
  }, data: function() {
    return { VEAURY_Portals: [] };
  }, created: function() {
    this.__veauryPortalKeyPool__ = [], this.__veauryMaxPortalCount__ = 0;
  }, computed: { __veauryInjectedProps__: function() {
    var h;
    return (h = this.__veauryInjectedComputed__) == null ? void 0 : h.call(this);
  } }, render: function() {
    var h = tu(m.react.componentWrap, fe({ ref: "react" }, m.react.componentWrapAttrs || {}), this.VEAURY_Portals.map(function(E) {
      return (0, E.Portal)(tu, E.key);
    }));
    return this.__veauryCheckReactSlot__(this.$slots), h;
  }, methods: { __veauryCheckReactSlot__: function(h) {
    var E = this;
    function k(T, y, N) {
      return y[N] && (T[N] = y[N], 1);
    }
    Qr(h) === "object" && h != null && (h instanceof Array ? h.forEach(function(T) {
      E.__veauryCheckReactSlot__(T.children);
    }) : Object.keys(h).forEach(function(x) {
      var y, N, x = h[x];
      if (typeof x == "function") {
        try {
          y = x.apply(E, x.__reactArgs || [{}]);
        } catch {
          return;
        }
        (x.__trueChildren = y).forEach(function(b) {
          b.children && E.__veauryCheckReactSlot__(b.children);
        }), y.length !== 1 || k(x, y = y[0], "reactSlot") || k(x, y, "reactFunction") || y.type !== OR || ((N = y.children) == null ? void 0 : N.length) !== 1 || k(x, N = y.children[0], "reactSlot") || k(x, N, "reactFunction");
      }
    }));
  }, __veauryPushVuePortal__: function(h) {
    var E = this.__veauryPortalKeyPool__.shift() || this.__veauryMaxPortalCount__++;
    this.VEAURY_Portals.push({ Portal: h, key: E });
  }, __veauryRemoveVuePortal__: function(h) {
    var E, k = this.VEAURY_Portals.find(function(T, y) {
      if (T.Portal === h) return E = y, !0;
    });
    this.__veauryPortalKeyPool__.push(k.key), this.VEAURY_Portals.splice(E, 1);
  }, __veauryGetScopeSlot__: function(h, E, k) {
    var T = this;
    function y(N) {
      function x() {
        for (var b, M = this, P = arguments.length, V = new Array(P), F = 0; F < P; F++) V[F] = arguments[F];
        return h.reactFunction ? h.reactFunction.apply(this, V) : m.defaultSlotsFormatter ? ((b = h.apply(this, V)).__top__ = T, (b = m.defaultSlotsFormatter(b, T.__veauryVueInReactCall__, E)) instanceof Array || -1 < Qr(b).indexOf("string", "number") ? b = Ry(b) : Qr(b) === "object" && (b = fe({}, b)), b) : gy(N(function() {
          return h.apply(M, V);
        }), fe(fe({}, m), {}, { isSlots: !0, wrapInstance: T })).render();
      }
      return m.pureTransformer && k ? x.vueFunction = k : x.vueFunction = h, x;
    }
    return y.__scopedSlot = !0, y;
  }, __veaurySyncUpdateProps__: function(h) {
    this.__veauryReactInstance__ && this.__veauryReactInstance__.setState(h);
  }, __veauryMountReactComponent__: function(h, E) {
    var k = arguments, T = this;
    return ZD(id().mark(function y() {
      var N, x, b, M, P, V, F, X, K, ae, le, ue, pe, _e, ve, be, Re;
      return id().wrap(function(Ue) {
        for (; ; ) switch (Ue.prev = Ue.next) {
          case 0:
            if (N = 2 < k.length && k[2] !== void 0 ? k[2] : {}, x = {}, b = [], (X = T.$.vnode.scopeId) && (x[X] = "", b.push(X)), M = {}, P = {}, h && (E == null || !E.slot)) {
              Ue.next = 18;
              break;
            }
            F = id().mark(function qe(it) {
              var Se;
              return id().wrap(function(Y) {
                for (; ; ) switch (Y.prev = Y.next) {
                  case 0:
                    if (T.$slots.hasOwnProperty(it) && T.$slots[it] != null) {
                      Y.next = 2;
                      break;
                    }
                    return Y.abrupt("return", 0);
                  case 2:
                    if ((Se = m.react.vueNamedSlotsKey.find(function(Z) {
                      return it.indexOf(Z) === 0;
                    })) || it === "default") return Se = it.replace(new RegExp("^".concat(Se)), ""), M[Se] = T.$slots[it], M[Se].__slot = !0, Y.abrupt("return", 0);
                    Y.next = 8;
                    break;
                  case 8:
                    P[it] = T.__veauryGetScopeSlot__(T.$slots[it], b, (Se = T.$.vnode) == null || (Se = Se.children) == null ? void 0 : Se[it]);
                  case 9:
                  case "end":
                    return Y.stop();
                }
              }, qe);
            }), Ue.t0 = id().keys(T.$slots || {});
          case 10:
            if ((Ue.t1 = Ue.t0()).done) {
              Ue.next = 18;
              break;
            }
            return X = Ue.t1.value, Ue.delegateYield(F(X), "t2", 13);
          case 13:
            if (Ue.t2 === 0) return Ue.abrupt("continue", 10);
            Ue.next = 16;
            break;
          case 16:
            Ue.next = 10;
            break;
          case 18:
            if ((!h || E != null && E.slot) && (K = fe({}, M), V = K.default, delete K.default), T.__veauryLast__ = T.__veauryLast__ || {}, T.__veauryLast__.slot = T.__veauryLast__.slot || {}, T.__veauryLast__.attrs = T.__veauryLast__.attrs || {}, ae = { slot: function() {
              T.__veauryLast__.slot = fe(fe(fe({}, V ? { children: V } : { children: null }), K), P);
            }, attrs: function() {
              T.__veauryLast__.attrs = T.$attrs;
            } }, E && Object.keys(E).forEach(function(qe) {
              return ae[qe]();
            }), h) {
              Ue.next = 64;
              break;
            }
            if (T.__reactBoundedPromise__ = new Promise(function(qe) {
              le = qe;
            }), T.__reactBoundedPromise__.resolve = le, ae.slot(), ae.attrs(), _e = p3(v, m, T), ue = vt.createElement(_e, gc({}, T.$attrs, T.__veauryInjectedProps__, { children: V }, K, P, T.$attrs.class ? { className: T.$attrs.class } : {}, x, { hashList: b }, T.$attrs.style ? { style: T.$attrs.style } : {}, { ref: function(qe) {
              T.__veauryReactInstance__ = qe, T.__reactBoundedPromise__.resolve(!0);
            } })), pe = T.$refs.react, _e = m.wrapInstance) {
              Ue.next = 47;
              break;
            }
            ve = T.$parent;
          case 35:
            if (ve) {
              if (ve.parentReactWrapperRef) return _e = ve.parentReactWrapperRef, Ue.abrupt("break", 45);
              Ue.next = 39;
            } else Ue.next = 45;
            break;
          case 39:
            if (ve.reactWrapperRef) return _e = ve.reactWrapperRef, Ue.abrupt("break", 45);
            Ue.next = 42;
            break;
          case 42:
            ve = ve.$parent, Ue.next = 35;
            break;
          case 45:
            Ue.next = 49;
            break;
          case 47:
            (_e = m.wrapInstance).__veauryVueWrapperRef__ = T;
          case 49:
            if (_e) return T.parentReactWrapperRef = _e, T.reactPortal = function() {
              return l_.createPortal(ue, pe);
            }, _e.pushReactPortal(T.reactPortal), Ue.abrupt("return");
            Ue.next = 54;
            break;
          case 54:
            if (17 < XS) return hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED !== void 0 && (hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = !0), be = m.react.createRoot || hv.createRoot, 18 < XS && !be && console.warn("'react-dom 19' no longer supports dynamically determining whether to use 'render' or 'createRoot'. In order to be compatible with 'react-dom 17' and previous versions, you need to manually configure 'createRoot' in the veaury configuration."), T.__veauryReactApp__ = be(pe), T.__veauryReactApp__.render(ue), Ue.abrupt("return");
            Ue.next = 61;
            break;
          case 61:
            hv.render(ue, pe), Ue.next = 71;
            break;
          case 64:
            return Ue.next = 66, T.__reactBoundedPromise__;
          case 66:
            Re = function() {
              T.__veauryReactInstance__.setState(function(qe) {
                return Object.keys(qe).forEach(function(it) {
                  m.isSlots && it === "children" || delete qe[it];
                }), fe(fe(fe(fe({}, T.__veauryCache__), T.__veauryInjectedProps__), !m.isSlots && T.__veauryLast__.slot), T.__veauryLast__.attrs);
              }), T.__veauryCache__ = null;
            }, !T.microTaskUpdate || T.__veauryCache__ || T.$nextTick(function() {
              Re(), T.microTaskUpdate = !1;
            }), T.macroTaskUpdate && (clearTimeout(T.updateTimer), T.updateTimer = setTimeout(function() {
              clearTimeout(T.updateTimer), Re(), T.macroTaskUpdate = !1;
            })), T.__veauryCache__ = fe(fe({}, T.__veauryCache__ || {}), fe(fe(fe(fe({}, N), T.$attrs.class ? { className: T.$attrs.class } : {}), fe({}, x)), {}, { hashList: b }, T.$attrs.style ? { style: T.$attrs.style } : {})), T.macroTaskUpdate || T.microTaskUpdate || Re();
          case 71:
          case "end":
            return Ue.stop();
        }
      }, y);
    }))();
  } }, mounted: function() {
    var h = this;
    this.__VEAURY_IGNORE_STRANGE_UPDATE__ = !0, Promise.resolve().then(function() {
      h.__VEAURY_IGNORE_STRANGE_UPDATE__ = !1;
    }), clearTimeout(this.updateTimer), this.__veauryMountReactComponent__();
  }, beforeUnmount: function() {
    var h;
    clearTimeout(this.updateTimer), l3(this.$refs.react), this.reactPortal ? (h = this.parentReactWrapperRef) != null && h.removeReactPortal(this.reactPortal) : 17 < XS ? (h = this.__veauryReactApp__) != null && h.unmount() : hv.unmountComponentAtNode(this.$refs.react), u3();
  }, updated: function() {
    this.__VEAURY_IGNORE_STRANGE_UPDATE__ || this.__veauryMountReactComponent__(!0, { slot: !0 });
  }, inheritAttrs: !1, watch: { $attrs: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 }, __veauryInjectedProps__: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 } } };
}
var v3 = /* @__PURE__ */ new Set(["onClick", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onChange", "onInput", "onInvalid", "onReset", "onSubmit", "onError", "onLoad", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onGotPointerCapture", "onLostPointerCapture", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onSelect", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onScroll", "onWheel", "onAbort", "onCanPlay", "onCanPlayThrough", "onDurationChange", "onEmptied", "onEncrypted", "onEnded", "onError", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onPause", "onPlay", "onPlaying", "onProgress", "onRateChange", "onSeeked", "onSeeking", "onStalled", "onSuspend", "onTimeUpdate", "onVolumeChange", "onWaiting", "onLoad", "onError", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionEnd", "onToggle"]);
function h3(v, m) {
  for (var h = (v = m = v?._reactInternals || v?._reactInternalFiber || m) == null ? void 0 : v.return; h; ) {
    var E = h.stateNode;
    if (E = E?.parentVueWrapperRef || E?.__veauryVueWrapperRef__) return E;
    h = h.return;
  }
}
function _R(v, m, h) {
  var E = {};
  return h.forEach(function(k) {
    E[k] = !0;
  }), v[(m === "modelValue" ? "model" : m) + "Modifiers"] = E;
}
function CR(v, m, h) {
  var E = this, k = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : "v-model";
  if (!(m instanceof Array)) throw Error("[error:veaury] Parameter type error from '".concat(k, "', a single v-model is an array, such as [val, setter, argumentKey, modifiers] or [val, setter, modifiers]"));
  if (typeof m[1] != "function") throw Error("[error:veaury] Parameter type error from '".concat(k, "', a single v-model is an array, the second element of the array must be a setter function"));
  var T = m[1], y = (typeof m[2] == "string" ? (h = m[2], m[3] instanceof Array && _R(v, h, m[3])) : m[2] instanceof Array && _R(v, h, m[2]), v["onUpdate:" + h]);
  v["onUpdate:" + h] = typeof y == "function" ? function() {
    for (var N = arguments.length, x = new Array(N), b = 0; b < N; b++) x[b] = arguments[b];
    y.apply(E, x), T.apply(E, x);
  } : T, v[h] = m[0];
}
function n_(v) {
  var m = this, h = {}, E = fe({}, v);
  return Object.keys(v).forEach(function(k) {
    var T, y = k.match(/^onUpdate-([^-]+)/);
    if (y) delete E[k], T = h["onUpdate:".concat(y[1])], h["onUpdate:".concat(y[1])] = typeof T == "function" ? function() {
      for (var x = arguments.length, b = new Array(x), M = 0; M < x; M++) b[M] = arguments[M];
      T.apply(m, b), v[k].apply(m, b);
    } : v[k];
    else if (y = k.match(/^v-model($|:([^:]+)|-([^:]+))/)) y = y[2] || y[3] || "modelValue", CR(h, v[k], y), delete E[k];
    else if (k === "v-models") {
      if (Qr(v[k]) !== "object" || v[k] instanceof Array) throw Error("[error:veaury] The parameter 'v-models' must be an object type, such as {[argumentKey]: singleVModel}");
      var N = v[k];
      Object.keys(N).forEach(function(x) {
        CR(h, N[x], x, "v-models");
      }), delete E[k];
    }
  }), fe(fe({}, E), h);
}
var Ty = gv(function v() {
  yv(this, v), ld(this, "pool", /* @__PURE__ */ new Set());
}, [{ key: "getRandomId", value: function(v) {
  var m = v + (Math.random() + "").substr(2);
  return this.pool.has(m) ? this.getRandomId(v) : (this.pool.add(m), m);
} }]);
function HR(E, m) {
  var h, E = E.node;
  if (typeof E == "function" && (E = E()), (h = m) != null && h.current || typeof m == "function" || (h = m) != null && h.toString().match(/^function/) || (m = null), -1 < ["string", "number"].indexOf(Qr(E))) return E;
  if (E instanceof Array) {
    if (E.length !== 1) return E;
    E = E[0];
  }
  return fe(fe({}, E), {}, { ref: m });
}
var m3 = u_(HR);
function r_(v) {
  return tu(m3, { node: function() {
    return v.node;
  } });
}
r_.originReactComponent = vt.forwardRef(HR);
var y3 = ["component", "node"], g3 = ["component", "$slots", "children", "class", "style"], S3 = ["className", "classname"], yc = "veaury-options", ER = new Ty();
function _3(v, m) {
  var h;
  return v = typeof v == "string" && m ? (m = m.$) == null || (m = m.appContext) == null || (m = m.app) == null || (h = m.component) == null ? void 0 : h.call(m, v) : v;
}
function RR(v) {
  if (v) return Object.keys(v).forEach(function(m) {
    var h = v[m];
    h != null && (typeof h == "function" ? (v[m] = h, v[m].reactFunction = h) : (v[m] = function() {
      return h;
    }, v[m].reactSlot = h), h.vueFunction) && (v[m].vueFunction = h.vueFunction);
  }), v;
}
function C3(v) {
  var m;
  return (m = v.node) == null ? void 0 : m.call(v);
}
var a_ = vt.forwardRef(function(k, m) {
  var h, y = k.component, E = k.node, k = $i(k, y3);
  if (y == null && E == null) return null;
  if (E != null) {
    if (E.$$typeof || typeof E == "string" || typeof E == "number") return E;
    typeof E != "function" && (h = E, E = function() {
      return h;
    });
  }
  var T, y = y || C3, N = FR(k[yc] || {}, void 0, !0), x = N.useInjectPropsFromWrapper || y.__veauryInjectPropsFromWrapper__;
  return N.isSlots || typeof x == "function" && (T = x(k)), vt.createElement(E3, gc({}, fe(fe(fe(fe({ component: y }, E ? { node: E } : {}), k), T), {}, ld({}, yc, N)), { ref: m }));
}), E3 = (() => {
  function v(m) {
    var h;
    return yv(this, v), (h = Cy(this, v, [m])).state = { portals: [] }, h.__veauryPortalKeyPool__ = [], h.__veauryMaxPortalCount__ = 0, h.__veauryCurrentVueComponent__ = m.component, h.__veauryCreateVueInstance__ = h.__veauryCreateVueInstance__.bind(h), h.__veauryVueComponentContainer__ = h.createVueComponentContainer(), h;
  }
  return Ey(v, vt.Component), gv(v, [{ key: "pushReactPortal", value: function(m) {
    var h = this.state.portals, E = this.__veauryPortalKeyPool__.shift() || this.__veauryMaxPortalCount__++;
    h.push({ Portal: m, key: E }), this.setState({ portals: h });
  } }, { key: "removeReactPortal", value: function(m) {
    var h, E = this.state.portals, k = E.find(function(T, y) {
      if (T.Portal === m) return h = y, !0;
    });
    this.__veauryPortalKeyPool__.push(k.key), E.splice(h, 1), this.__veauryVueRef__ && this.setState({ portals: E });
  } }, { key: "createVueComponentContainer", value: function() {
    var m = this, h = {}, E = this.props[yc];
    return E.isSlots ? (Object.keys(this.props).forEach(function(k) {
      v3.has(k) && typeof m.props[k] == "function" && (h[k] = m.props[k]);
    }), E.vue.slotWrapAttrs && (h = fe(fe({}, h), E.vue.slotWrapAttrs))) : E.vue.componentWrapAttrs && (h = fe(fe({}, h), E.vue.componentWrapAttrs)), E.vue.componentWrapHOC(vt.createElement("div", gc({}, E.vue.componentWrapAttrs, { ref: this.__veauryCreateVueInstance__, key: null })), h);
  } }, { key: "shouldComponentUpdate", value: function(m, h, E) {
    var k, T, y, N, x = this;
    return m === this.props || (k = m.component, T = (T = m["v-slots"]) === void 0 ? null : T, y = m.children, m = $i(m, ["component", yc, "v-slots", "children"].map(Sy)), this.__veauryCurrentVueComponent__ !== k && this.updateVueComponent(k), k.__fromReactSlot) || this.__veauryVueInstance__ && (y && (T = T || {}, Qr(y) !== "object" || y instanceof Array || y.$$typeof ? T.default = y : T = y), (N = this.__veauryVueInstance__.$data.$slots) && Object.keys(N).forEach(function(b) {
      delete N[b];
    }), T && (N || (this.__veauryVueInstance__.$data.$slots = {}), Object.assign(this.__veauryVueInstance__.$data.$slots, RR(T))), Object.keys(this.__veauryVueInstance__.$data).forEach(function(b) {
      b !== "$slots" && delete x.__veauryVueInstance__.$data[b];
    }), this.__veauryVueInstance__) && Object.assign(this.__veauryVueInstance__.$data, n_(m)), !0;
  } }, { key: "componentWillUnmount", value: function() {
    this.vuePortal ? this.parentVueWrapperRef.__veauryRemoveVuePortal__(this.vuePortal) : (this.__veauryVueInstance__ && this.__veauryVueInstance__.$.appContext.app.unmount(), ER.pool.delete(this.__veauryVueTargetId__), this.vueCreated = !1);
  } }, { key: "componentDidMount", value: function() {
    this.__veauryCreateVueInstance__(this.vueContainerElement);
  } }, { key: "__veauryCreateVueInstance__", value: function(m) {
    var h, E, k, T, y, N, x, b, M = this;
    function P(V) {
      this.__veauryVueInstance__ || (this.__veauryVueInstance__ = V);
    }
    this.vueCreated || (this.vueCreated = !0, (h = this).vueContainerElement = m, (k = this.props).component, E = k[yc], x = k.children, b = (b = k["v-slots"]) === void 0 ? {} : b, k = $i(k, ["component", yc, "children", "v-slots"].map(Sy)), x && (Qr(x) !== "object" || x instanceof Array || x.$$typeof ? b.default = x : b = x), (b = RR(b)) && (k.$slots = b), P = P.bind(this), T = fe({}, n_(k)), y = { data: function() {
      return E.isSlots ? { children: h.__veauryCurrentVueComponent__.originVNode } : T;
    }, created: function() {
      this.reactWrapperRef = h, P(this);
    }, methods: { reactInVueCall: function(V) {
      return 2 < arguments.length && arguments[2] && V && V[0] ? V.map(function(F, X) {
        return tu(r_, { node: F, key: (F == null || (F = F.data) == null ? void 0 : F.key) || X });
      }) : tu(r_, { node: V });
    }, getScopedSlots: function(V, F) {
      var X, K = this, ae = (this.getScopedSlots.__scopeSlots || (this.getScopedSlots.__scopeSlots = {}), fe({}, F));
      for (X in ae) ((le) => {
        var ue, pe;
        !ae.hasOwnProperty(le) || (ue = ae[le]) == null || (ae[le] = (pe = ue, function() {
          for (var _e, ve, be, Re, Ue = arguments.length, qe = new Array(Ue), it = 0; it < Ue; it++) qe[it] = arguments[it];
          return pe.vueFunction ? pe.vueFunction.apply(K, qe) : (be = pe.reactFunction, be = pe.reactSlot || be?.apply(K, qe), Re = E.defaultSlotsFormatter, (_e = K.getScopedSlots.__scopeSlots[le]) != null && (_e = _e.component) != null && (_e = _e.ctx) != null && _e.__veauryReactInstance__ ? (ve = K.getScopedSlots.__scopeSlots[le], Promise.resolve().then(function() {
            var Se;
            (Se = ve) != null && (Se = Se.component) != null && (Se = Se.ctx) != null && (Se = Se.__veauryReactInstance__) != null && Se.setState({ children: pe.apply(K, qe) });
          })) : (ve = Re && be ? [Re(be, K.reactInVueCall)] : V(u_(function() {
            return pe.apply(K, qe);
          }, fe(fe({}, E), {}, { isSlots: !0, wrapInstance: h }))), K.getScopedSlots.__scopeSlots[le] = ve), pe.reactFunction ? ve.reactFunction = pe.reactFunction : pe.reactSlot && (ve.reactSlot = pe.reactSlot), ve);
        }), ae[le].reactFunction = ue);
      })(X);
      return ae;
    } }, mounted: function() {
      m.removeAttribute("id"), h.__veauryVueRef__ = this.$refs.use_vue_wrapper, this.$refs.use_vue_wrapper.reactWrapperRef = h;
    }, beforeUnmount: function() {
      h.__veauryVueRef__ = null, this.$refs.use_vue_wrapper.reactWrapperRef = null;
    }, render: function() {
      var V = this, ue = this.$data, ae = (ue.component, ue.$slots), F = ue.class, X = ue.style, ue = $i(ue, g3), K = this.getScopedSlots(tu, fe({}, ae)), ae = ue.className, le = ue.classname, ue = $i(ue, S3), pe = {};
      return Object.keys(K).forEach(function(_e) {
        var ve = K[_e];
        pe[_e] = typeof ve == "function" ? ve : function() {
          return ve;
        };
      }), tu(_3(h.__veauryCurrentVueComponent__, this), fe(fe(fe(fe({}, ue), F || ae || le ? { class: F || ae || le } : {}), X ? { style: X } : {}), {}, { ref: "use_vue_wrapper" }), fe({}, E.isSlots && this.children ? { default: typeof this.children == "function" ? this.children : function() {
        return V.children;
      } } : fe({}, pe)));
    } }, m && (N = ER.getRandomId("__vue_wrapper_container_"), m.id = N, this.__veauryVueTargetId__ = N, (x = E.wrapInstance) ? (x = E.wrapInstance).reactWrapperRef = h : x = h3(this), x && document.getElementById(N) ? (this.parentVueWrapperRef = x, this.vuePortal = function(V, F) {
      return V(Uk, { to: "#" + N, key: N }, [V(Object.assign(y, { router: M._router }))]);
    }, x.__veauryPushVuePortal__(this.vuePortal)) : (b = jk(y), typeof E.beforeVueAppMount == "function" && E.beforeVueAppMount(b), this.__veauryVueInstance__ = b.mount(m))));
  } }, { key: "updateVueComponent", value: function(m) {
    this.__veauryVueInstance__ && (m.__fromReactSlot ? this.__veauryVueInstance__.children = typeof m.originVNode == "function" ? m.originVNode : function() {
      return m.originVNode;
    } : (this.__veauryCurrentVueComponent__ = m, this.__veauryVueInstance__.$forceUpdate()));
  } }, { key: "render", value: function() {
    return vt.createElement(this.__veauryVueComponentContainer__, { portals: this.state.portals });
  } }]);
})();
function gy(v) {
  var m = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, h = (v || console.warn("Component must be passed in applyVueInReact!"), v.__esModule && v.default && (v = v.default), vt.forwardRef(function(E, k) {
    return vt.createElement(a_, gc({}, E, { component: v, ref: k }, ld({}, yc, m)));
  }));
  return h.originVueComponent = v, h;
}
new Ty();
function R3(v) {
  var m = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, h = m.globalName, E = u_(v, m.combinedOption || {});
  return E.install = function(k) {
    var T = (1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}).globalName;
    return h && k.component(T || h, E), E;
  }, E;
}
function TR(v) {
  return v.replace(/-(\w)/g, function(m, h) {
    return h.toUpperCase();
  });
}
function by(v) {
  var m;
  return v ? typeof v == "string" ? (v = v.trim()).split(/\s*;\s*/).reduce(function(h, E) {
    return E && (E = E.split(/\s*:\s*/)).length === 2 && Object.assign(h, ld({}, TR(E[0]), E[1])), h;
  }, {}) : Qr(v) === "object" ? (m = {}, Object.keys(v).forEach(function(h) {
    m[TR(h)] = v[h];
  }), m) : {} : {};
}
function wy(v) {
  return v ? v instanceof Array ? v : typeof v == "string" ? (v = v.trim()).split(/\s+/) : Qr(v) === "object" ? Object.keys(v).filter(function(m) {
    return !!v[m];
  }) : [] : [];
}
var T3 = ["ref"];
function b3(v, m, h, E, k) {
  var T = v.props || {}, T = (T.ref, $i(T, T3)), y = {}, N = (Object.keys(v.children || {}).forEach(function(M) {
    var P = v.children[M], V = PR.react.vueNamedSlotsKey.find(function(F) {
      return M.indexOf(F) === 0;
    });
    V || M === "default" ? (V = M.replace(new RegExp("^".concat(V)), "").replace(/^default$/, "children"), y[V] = E.call(v.__top__, P(), h, k)) : typeof P == "function" && (y[M] = function() {
      for (var F = arguments.length, X = new Array(F), K = 0; K < F; K++) X[K] = arguments[K];
      return P.__reactArgs = X, E(P.apply(this, X), h, k);
    });
  }), {}), x = by(T.style), b = Array.from(new Set(wy(T.class))).join(" ");
  return 0 < Object.keys(x).length && (N.style = x), b !== "" && (N.className = b), Object.assign(T, fe(fe({}, N), y)), delete T.class, typeof T.ref_for == "boolean" && delete T.ref_for, T;
}
function bR(v) {
  return v.type === Pk;
}
new Ty();
function IR(v, m) {
  var h;
  return 0 < ((h = v.dirs) == null ? void 0 : h.length) ? vt.createElement(w3, { vnode: v }, m) : m;
}
var w3 = (() => {
  function v(m) {
    var h;
    return yv(this, v), (h = Cy(this, v, [m])).state = { prevVnode: null, savedDirectives: [], ref: null, prevProps: m }, h;
  }
  return Ey(v, vt.Component), gv(v, [{ key: "findDirectiveName", value: function(m) {
    var h = m.dir, E = -1;
    return [this.state.savedDirectives.find(function(k, T) {
      if (k.dir === h) return E = T, !0;
    }), E];
  } }, { key: "doDirective", value: function() {
    var m = this, T = this.state, h = T.savedDirectives;
    if (!(E = T.ref)) {
      for (var E = (this._reactInternals || this._reactInternalFiber).child; E && E.tag !== 5; ) E = E.child;
      if (!E) return;
      E = E.stateNode;
    }
    var k = this.props.vnode, T = k.dirs;
    T && (T.forEach(function(y) {
      var N, x, b, M, P, V, F;
      y && (F = (N = SR(m.findDirectiveName(y), 2))[0], N = N[1], x = (P = y.dir).created, b = P.beforeMount, M = P.mounted, V = P.beforeUpdate, P = P.updated, F ? (h[N] = fe(fe(fe({}, F), y), {}, { oldValue: F.oldValue }), F = [E, h[N], k, m.state.prevVnode], V?.apply(null, F), P?.apply(null, F), h[N].oldValue = y.value) : (h.push(y), V = [E, y, k, null], x?.apply(null, V), b?.apply(null, V), M?.apply(null, V), y.oldValue = y.value));
    }), this.setState({ prevVnode: fe({}, k), savedDirectives: h, ref: E }));
  } }, { key: "componentDidMount", value: function() {
    this.doDirective();
  } }, { key: "componentDidUpdate", value: function(m) {
    m.vnode !== this.props.vnode && this.doDirective();
  } }, { key: "componentWillUnmount", value: function() {
    var m = this, h = this.props.vnode, y = this.state, E = y.savedDirectives, k = y.ref, T = y.prevVnode, y = h.dirs;
    y && (y.forEach(function(N) {
      var x, b, M, P;
      N && (x = (P = SR(m.findDirectiveName(N), 2))[0]) && (b = (M = N.dir).beforeUnmount, M = M.unmounted, E[P[1]] = fe(fe({}, x), N), P = [k, x, h, T], b?.apply(null, P), M != null) && M.apply(null, P);
    }), this.setState({ prevVnode: fe({}, h), savedDirectives: E }));
  } }, { key: "render", value: function() {
    var m = this.props;
    return m.vnode, m.children;
  } }]);
})();
function x3(v, m) {
  var h;
  return typeof v == "function" && (h = v.toString(), v.prototype !== void 0) && v.prototype.constructor === v && (h.slice(0, 5) == "class" || 2 <= Object.getOwnPropertyNames(v.prototype).length || !/^function\s+\(|^function\s+anonymous\(/.test(h) && (!(!m || !/^function\s+[A-Z]/.test(h)) || !!/\b\(this\b|\bthis[\.\[]\b/.test(h) && (!(m && !/classCallCheck\(this/.test(h)) || /^function\sdefault_\d+\s*\(/.test(h))));
}
function BR(v, m) {
  var h, E, k, T;
  return typeof ((k = v.type) == null ? void 0 : k.originReactComponent) != "function" || x3((k = v.type) == null ? void 0 : k.originReactComponent) ? ((k = v.ref) != null && k.k ? (h = (k = v.ref) == null ? void 0 : k.k, E = (k = v.ref) == null ? void 0 : k.r) : h = (k = v.ref) == null ? void 0 : k.r, h && typeof h == "string" && (T = h, h = function(y) {
    var N;
    (N = v.ref) != null && (N = N.i) != null && N.refs && ((N = fe({}, v.ref.i.refs))[T] = y, v.ref.i.refs = N), E ? E.value = y : v.ref.i.setupState && T in v.ref.i.setupState && (v.ref.i.setupState[T] = y), y && (y.__syncUpdateProps = function() {
      m.__top__ && (v.__extraData = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, m.__top__.__syncUpdateProps({}));
    });
  }, h = new Proxy(h, { get: function(y, N) {
    return y[N];
  }, set: function(y, N, x) {
    var b;
    return (b = v.ref) != null && (b = b.i) != null && b.refs && T in ((b = v.ref) == null || (b = b.i) == null ? void 0 : b.refs) && ((b = fe({}, v.ref.i.refs))[N] = x, v.ref.i.refs = b), x;
  } })), h) : null;
}
function i_(v, m) {
  return !m || m instanceof Array && m.length === 0 || (typeof m == "string" && (m = [m]), (v = fe({}, v)).props = fe({}, v.props), m.forEach(function(h) {
    v.props[h] = "";
  })), v;
}
var k3 = ["style", "class"];
function wR(v, m, h, E, k, T, y) {
  var N, x, b;
  return m === "all" || m instanceof Array || (m = m ? [m] : []), v.type === OR ? k.call(y, v.children, h, T) : typeof v.type == "string" && (m === "all" || -1 < m.indexOf(v.type)) ? (m = BR(v), b = (x = v.props || {}).style, N = x.class, x = fe(fe({}, $i(x, k3)), {}, { style: by(b), className: Array.from(new Set(wy(N))).join(" ") }, m ? { ref: m } : {}), (b = v.children || x.children) && ((b = -1 < ["string", "number"].indexOf(Qr(b)) ? [b] : Ry(b)).__top__ = y), IR(v, i_(_y.createElement(v.type, x, k.call(y, b, h, T)), v.scopeId))) : h([v], null, E);
}
function O3() {
  var v = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, m = 1 < arguments.length ? arguments[1] : void 0, h = 2 < arguments.length ? arguments[2] : void 0;
  return h.__syncUpdateForPureReactInVue && Object.keys(h.__syncUpdateForPureReactInVue).map(function(E) {
    var k;
    v[E] && typeof v[E] == "function" && m.__top__ && (k = v[E], v[E] = function() {
      for (var T = arguments.length, y = new Array(T), N = 0; N < T; N++) y[N] = arguments[N];
      m.__extraData = h.__syncUpdateForPureReactInVue[E].apply(this, y), m.__top__.__veaurySyncUpdateProps__({}), m.__top__.macroTaskUpdate = !0, k.apply(this, y), m.__top__ && Promise.resolve().then(function() {
        m.__extraData = null, m.__top__.__veauryMountReactComponent__(!0);
      });
    });
  }), v;
}
function xR(v, m, h) {
  return !((v = v instanceof Array && v.length === 1 ? v[0] : v) instanceof Array) && v.key == null && 1 < m.length && ((v = fe({}, v)).key = "_key_".concat(h)), v;
}
function $R(E) {
  var m = E.reactComponents, h = E.domTags, E = E.division, k = E === void 0 || E;
  return function T(y, N, x) {
    var b;
    return y && y.forEach ? (y.__top__ || (y.__top__ = this), b = [], y.forEach(function(M, P) {
      if (M && M.type !== zk) {
        if ((X = M.type) == null || !X.originReactComponent) return M.$$typeof || typeof M == "string" || typeof M == "number" ? void b.push(M) : bR(M) ? void (M.children.trim() !== "" && b.push(M.children.trim())) : void (M.type && (i_(X = xR(wR(M, h, N, k, T, x, y.__top__), y, P), M.scopeId), b.push(X)));
        var V, F, X = M.type.originReactComponent;
        i_(V = xR(V = (m = m === "all" || m instanceof Array ? m : [m]) === "all" || -1 < m.indexOf(X) ? (M.__top__ = y.__top__, V = b3(M, "_key_".concat(P), N, T, x), F = BR(M, y), M.children && (M.children.__top__ = y.__top__), IR(M, _y.createElement(X, fe(fe(fe({}, O3(V, M, X)), M.__extraData || {}), F ? { ref: F } : {})))) : bR(M) ? M.text : wR(M, h, N, k, T, x), y, P), M.scopeId), b.push(V);
      }
    }), b.length === 1 ? b[0] : b) : y;
  };
}
var JS = $R({ reactComponents: "all", domTags: "all" });
function D3(v, m) {
  return R3(v, { combinedOption: fe({ pureTransformer: !0, defaultSlotsFormatter: JS, defaultPropsFormatter: function(h, E, k) {
    var T = {};
    return Object.keys(h).forEach(function(y) {
      var N = h[y];
      N && (N.vueFunction ? (T[y] = function() {
        for (var x = arguments.length, b = new Array(x), M = 0; M < x; M++) b[M] = arguments[M];
        return JS(N.vueFunction.apply(this, b), E, k);
      }, Object.defineProperty(T[y], "length", { get: function() {
        return N.vueFunction.length;
      } })) : N.vueSlot && (T[y] = JS(N.vueSlot, E, k)));
    }), Object.assign(h, T);
  } }, m) });
}
$R({ reactComponents: "all", domTags: "all" });
var L3 = ["ref", "children", "v-slots"];
function N3(x, m, h, E, k) {
  var x = x.props || {}, b = (x.ref, x.children), y = x["v-slots"], T = y === void 0 ? {} : y, y = $i(x, L3), N = (b && (Qr(b) !== "object" || b instanceof Array || b.$$typeof ? T.default = b : T = b), null), x = (Object.keys(T || {}).forEach(function(P) {
    var V = T[P];
    (N = N || {})[P] = function() {
      if (typeof V == "function") {
        for (var F = arguments.length, X = new Array(F), K = 0; K < F; K++) X[K] = arguments[K];
        V = V.apply(this, X);
      }
      return E(V, h, k);
    };
  }), {}), b = by(y.style), M = Array.from(new Set(wy(y.className))).join(" ");
  return 0 < Object.keys(b).length && (x.style = b), M !== "" && (x.class = M), Object.assign(y, fe({}, x)), delete y.className, { props: y = n_(y), slots: N };
}
function WR(v) {
  var m = v.ref;
  if (m) return Qr(m) === "object" ? function(h) {
    v.ref.current = h;
  } : typeof m == "function" ? m : void 0;
}
var M3 = ["style", "class", "children"];
function kR(v, m, h, E, k, T) {
  var y, N, x, b;
  return m === "all" || m instanceof Array || (m = m ? [m] : []), v.type === vt.Fragment ? k((y = v.props) == null ? void 0 : y.children, h) : typeof v.type == "string" && (m === "all" || -1 < m.indexOf(v.type)) ? (y = WR(v), b = (m = v.props || {}).style, x = m.class, N = m.children, m = $i(m, M3), x = Array.from(new Set(wy(x))).join(" "), b = by(b), m = fe(fe(fe(fe({}, m), Object.keys(b).length === 0 ? {} : { style: b }), x ? { className: x } : {}), y ? { ref: y } : {}), Object.keys(m).length === 0 && (m = null), (b = N) && ((b = -1 < ["string", "number"].indexOf(Qr(b)) ? [b] : b instanceof Array ? Ry(b) : fe({}, b)).__top__ = T), tu(v.type, m, k(b, h))) : h([v], null, E);
}
function YR(E) {
  var m = E.vueComponents, h = E.domTags, E = E.division, k = E === void 0 || E;
  return function T(y, N) {
    if (y == null) return y;
    y instanceof Array || (y = [y]);
    var x = [];
    return y.forEach(function(b, M) {
      if (((P = b.type) == null || !P.originVueComponent) && b.type !== a_) return b.__v_isVNode || typeof b == "string" || typeof b == "number" ? void x.push(b) : void (b.type && (P = kR(b, h, N, k, T, y.__top__), x.push(P)));
      var P = b.type.originVueComponent;
      if (b.type === a_) {
        if (!b.props.component) return void x.push(b.props.node);
        P = b.props.component, b = fe({}, b);
        var V = fe({}, b.props);
        delete V.component, b.props = V;
      }
      P = (m = m === "all" || m instanceof Array ? m : [m]) === "all" || -1 < m.indexOf(P) ? ((b = fe({}, b)).__top__ = y.__top__, M = (V = N3(b, "_key_".concat(M), N, T)).props, V = V.slots, WR(b), b.children && (b.children.__top__ = y.__top__), tu(P, fe({}, M), V)) : kR(b, h, N, k, T), x.push(P);
    }), (x = x.flat(1 / 0)).length === 1 ? x[0] : x;
  };
}
YR({ vueComponents: "all", domTags: "all" });
YR({ reactComponents: "all", domTags: "all" });
new Ty();
const A3 = /* @__PURE__ */ Fk({
  __name: "CopilotApp",
  props: {
    token: {},
    dataSource: {},
    baseUrl: {}
  },
  setup(v) {
    const m = D3($D);
    return (h, E) => (Hk(), Vk(Ik(m), {
      token: v.token,
      dataSource: v.dataSource,
      baseUrl: v.baseUrl
    }, null, 8, ["token", "dataSource", "baseUrl"]));
  }
}), F3 = {
  install(v) {
    v.component("CopilotApp", A3);
  }
};
export {
  A3 as CopilotApp,
  F3 as default
};
