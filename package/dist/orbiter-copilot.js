import { Fragment as IE, h as fu, reactive as WT, getCurrentInstance as YT, Teleport as GT, createApp as QT, Comment as KT, Text as XT, defineComponent as JT, computed as ZT, createBlock as e3, openBlock as t3, unref as n3 } from "vue";
function FE(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var Cy = { exports: {} }, Cv = {}, Ey = { exports: {} }, At = {};
var XC;
function r3() {
  if (XC) return At;
  XC = 1;
  var c = /* @__PURE__ */ Symbol.for("react.element"), p = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), g = /* @__PURE__ */ Symbol.for("react.strict_mode"), x = /* @__PURE__ */ Symbol.for("react.profiler"), C = /* @__PURE__ */ Symbol.for("react.provider"), h = /* @__PURE__ */ Symbol.for("react.context"), w = /* @__PURE__ */ Symbol.for("react.forward_ref"), R = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), D = /* @__PURE__ */ Symbol.for("react.lazy"), A = Symbol.iterator;
  function V(F) {
    return F === null || typeof F != "object" ? null : (F = A && F[A] || F["@@iterator"], typeof F == "function" ? F : null);
  }
  var H = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ae = Object.assign, ie = {};
  function xe(F, Z, et) {
    this.props = F, this.context = Z, this.refs = ie, this.updater = et || H;
  }
  xe.prototype.isReactComponent = {}, xe.prototype.setState = function(F, Z) {
    if (typeof F != "object" && typeof F != "function" && F != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, F, Z, "setState");
  }, xe.prototype.forceUpdate = function(F) {
    this.updater.enqueueForceUpdate(this, F, "forceUpdate");
  };
  function we() {
  }
  we.prototype = xe.prototype;
  function Ee(F, Z, et) {
    this.props = F, this.context = Z, this.refs = ie, this.updater = et || H;
  }
  var Ce = Ee.prototype = new we();
  Ce.constructor = Ee, ae(Ce, xe.prototype), Ce.isPureReactComponent = !0;
  var le = Array.isArray, se = Object.prototype.hasOwnProperty, We = { current: null }, Le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function je(F, Z, et) {
    var Ve, pt = {}, at = null, ze = null;
    if (Z != null) for (Ve in Z.ref !== void 0 && (ze = Z.ref), Z.key !== void 0 && (at = "" + Z.key), Z) se.call(Z, Ve) && !Le.hasOwnProperty(Ve) && (pt[Ve] = Z[Ve]);
    var lt = arguments.length - 2;
    if (lt === 1) pt.children = et;
    else if (1 < lt) {
      for (var vt = Array(lt), Qt = 0; Qt < lt; Qt++) vt[Qt] = arguments[Qt + 2];
      pt.children = vt;
    }
    if (F && F.defaultProps) for (Ve in lt = F.defaultProps, lt) pt[Ve] === void 0 && (pt[Ve] = lt[Ve]);
    return { $$typeof: c, type: F, key: at, ref: ze, props: pt, _owner: We.current };
  }
  function Ge(F, Z) {
    return { $$typeof: c, type: F.type, key: Z, ref: F.ref, props: F.props, _owner: F._owner };
  }
  function Je(F) {
    return typeof F == "object" && F !== null && F.$$typeof === c;
  }
  function te(F) {
    var Z = { "=": "=0", ":": "=2" };
    return "$" + F.replace(/[=:]/g, function(et) {
      return Z[et];
    });
  }
  var L = /\/+/g;
  function Y(F, Z) {
    return typeof F == "object" && F !== null && F.key != null ? te("" + F.key) : Z.toString(36);
  }
  function ve(F, Z, et, Ve, pt) {
    var at = typeof F;
    (at === "undefined" || at === "boolean") && (F = null);
    var ze = !1;
    if (F === null) ze = !0;
    else switch (at) {
      case "string":
      case "number":
        ze = !0;
        break;
      case "object":
        switch (F.$$typeof) {
          case c:
          case p:
            ze = !0;
        }
    }
    if (ze) return ze = F, pt = pt(ze), F = Ve === "" ? "." + Y(ze, 0) : Ve, le(pt) ? (et = "", F != null && (et = F.replace(L, "$&/") + "/"), ve(pt, Z, et, "", function(Qt) {
      return Qt;
    })) : pt != null && (Je(pt) && (pt = Ge(pt, et + (!pt.key || ze && ze.key === pt.key ? "" : ("" + pt.key).replace(L, "$&/") + "/") + F)), Z.push(pt)), 1;
    if (ze = 0, Ve = Ve === "" ? "." : Ve + ":", le(F)) for (var lt = 0; lt < F.length; lt++) {
      at = F[lt];
      var vt = Ve + Y(at, lt);
      ze += ve(at, Z, et, vt, pt);
    }
    else if (vt = V(F), typeof vt == "function") for (F = vt.call(F), lt = 0; !(at = F.next()).done; ) at = at.value, vt = Ve + Y(at, lt++), ze += ve(at, Z, et, vt, pt);
    else if (at === "object") throw Z = String(F), Error("Objects are not valid as a React child (found: " + (Z === "[object Object]" ? "object with keys {" + Object.keys(F).join(", ") + "}" : Z) + "). If you meant to render a collection of children, use an array instead.");
    return ze;
  }
  function ke(F, Z, et) {
    if (F == null) return F;
    var Ve = [], pt = 0;
    return ve(F, Ve, "", "", function(at) {
      return Z.call(et, at, pt++);
    }), Ve;
  }
  function ue(F) {
    if (F._status === -1) {
      var Z = F._result;
      Z = Z(), Z.then(function(et) {
        (F._status === 0 || F._status === -1) && (F._status = 1, F._result = et);
      }, function(et) {
        (F._status === 0 || F._status === -1) && (F._status = 2, F._result = et);
      }), F._status === -1 && (F._status = 0, F._result = Z);
    }
    if (F._status === 1) return F._result.default;
    throw F._result;
  }
  var he = { current: null }, ee = { transition: null }, Me = { ReactCurrentDispatcher: he, ReactCurrentBatchConfig: ee, ReactCurrentOwner: We };
  function ge() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return At.Children = { map: ke, forEach: function(F, Z, et) {
    ke(F, function() {
      Z.apply(this, arguments);
    }, et);
  }, count: function(F) {
    var Z = 0;
    return ke(F, function() {
      Z++;
    }), Z;
  }, toArray: function(F) {
    return ke(F, function(Z) {
      return Z;
    }) || [];
  }, only: function(F) {
    if (!Je(F)) throw Error("React.Children.only expected to receive a single React element child.");
    return F;
  } }, At.Component = xe, At.Fragment = d, At.Profiler = x, At.PureComponent = Ee, At.StrictMode = g, At.Suspense = R, At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Me, At.act = ge, At.cloneElement = function(F, Z, et) {
    if (F == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + F + ".");
    var Ve = ae({}, F.props), pt = F.key, at = F.ref, ze = F._owner;
    if (Z != null) {
      if (Z.ref !== void 0 && (at = Z.ref, ze = We.current), Z.key !== void 0 && (pt = "" + Z.key), F.type && F.type.defaultProps) var lt = F.type.defaultProps;
      for (vt in Z) se.call(Z, vt) && !Le.hasOwnProperty(vt) && (Ve[vt] = Z[vt] === void 0 && lt !== void 0 ? lt[vt] : Z[vt]);
    }
    var vt = arguments.length - 2;
    if (vt === 1) Ve.children = et;
    else if (1 < vt) {
      lt = Array(vt);
      for (var Qt = 0; Qt < vt; Qt++) lt[Qt] = arguments[Qt + 2];
      Ve.children = lt;
    }
    return { $$typeof: c, type: F.type, key: pt, ref: at, props: Ve, _owner: ze };
  }, At.createContext = function(F) {
    return F = { $$typeof: h, _currentValue: F, _currentValue2: F, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, F.Provider = { $$typeof: C, _context: F }, F.Consumer = F;
  }, At.createElement = je, At.createFactory = function(F) {
    var Z = je.bind(null, F);
    return Z.type = F, Z;
  }, At.createRef = function() {
    return { current: null };
  }, At.forwardRef = function(F) {
    return { $$typeof: w, render: F };
  }, At.isValidElement = Je, At.lazy = function(F) {
    return { $$typeof: D, _payload: { _status: -1, _result: F }, _init: ue };
  }, At.memo = function(F, Z) {
    return { $$typeof: b, type: F, compare: Z === void 0 ? null : Z };
  }, At.startTransition = function(F) {
    var Z = ee.transition;
    ee.transition = {};
    try {
      F();
    } finally {
      ee.transition = Z;
    }
  }, At.unstable_act = ge, At.useCallback = function(F, Z) {
    return he.current.useCallback(F, Z);
  }, At.useContext = function(F) {
    return he.current.useContext(F);
  }, At.useDebugValue = function() {
  }, At.useDeferredValue = function(F) {
    return he.current.useDeferredValue(F);
  }, At.useEffect = function(F, Z) {
    return he.current.useEffect(F, Z);
  }, At.useId = function() {
    return he.current.useId();
  }, At.useImperativeHandle = function(F, Z, et) {
    return he.current.useImperativeHandle(F, Z, et);
  }, At.useInsertionEffect = function(F, Z) {
    return he.current.useInsertionEffect(F, Z);
  }, At.useLayoutEffect = function(F, Z) {
    return he.current.useLayoutEffect(F, Z);
  }, At.useMemo = function(F, Z) {
    return he.current.useMemo(F, Z);
  }, At.useReducer = function(F, Z, et) {
    return he.current.useReducer(F, Z, et);
  }, At.useRef = function(F) {
    return he.current.useRef(F);
  }, At.useState = function(F) {
    return he.current.useState(F);
  }, At.useSyncExternalStore = function(F, Z, et) {
    return he.current.useSyncExternalStore(F, Z, et);
  }, At.useTransition = function() {
    return he.current.useTransition();
  }, At.version = "18.3.1", At;
}
var wv = { exports: {} };
wv.exports;
var JC;
function a3() {
  return JC || (JC = 1, (function(c, p) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var d = "18.3.1", g = /* @__PURE__ */ Symbol.for("react.element"), x = /* @__PURE__ */ Symbol.for("react.portal"), C = /* @__PURE__ */ Symbol.for("react.fragment"), h = /* @__PURE__ */ Symbol.for("react.strict_mode"), w = /* @__PURE__ */ Symbol.for("react.profiler"), R = /* @__PURE__ */ Symbol.for("react.provider"), b = /* @__PURE__ */ Symbol.for("react.context"), D = /* @__PURE__ */ Symbol.for("react.forward_ref"), A = /* @__PURE__ */ Symbol.for("react.suspense"), V = /* @__PURE__ */ Symbol.for("react.suspense_list"), H = /* @__PURE__ */ Symbol.for("react.memo"), ae = /* @__PURE__ */ Symbol.for("react.lazy"), ie = /* @__PURE__ */ Symbol.for("react.offscreen"), xe = Symbol.iterator, we = "@@iterator";
      function Ee(S) {
        if (S === null || typeof S != "object")
          return null;
        var O = xe && S[xe] || S[we];
        return typeof O == "function" ? O : null;
      }
      var Ce = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, le = {
        transition: null
      }, se = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, We = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Le = {}, je = null;
      function Ge(S) {
        je = S;
      }
      Le.setExtraStackFrame = function(S) {
        je = S;
      }, Le.getCurrentStack = null, Le.getStackAddendum = function() {
        var S = "";
        je && (S += je);
        var O = Le.getCurrentStack;
        return O && (S += O() || ""), S;
      };
      var Je = !1, te = !1, L = !1, Y = !1, ve = !1, ke = {
        ReactCurrentDispatcher: Ce,
        ReactCurrentBatchConfig: le,
        ReactCurrentOwner: We
      };
      ke.ReactDebugCurrentFrame = Le, ke.ReactCurrentActQueue = se;
      function ue(S) {
        {
          for (var O = arguments.length, Q = new Array(O > 1 ? O - 1 : 0), J = 1; J < O; J++)
            Q[J - 1] = arguments[J];
          ee("warn", S, Q);
        }
      }
      function he(S) {
        {
          for (var O = arguments.length, Q = new Array(O > 1 ? O - 1 : 0), J = 1; J < O; J++)
            Q[J - 1] = arguments[J];
          ee("error", S, Q);
        }
      }
      function ee(S, O, Q) {
        {
          var J = ke.ReactDebugCurrentFrame, be = J.getStackAddendum();
          be !== "" && (O += "%s", Q = Q.concat([be]));
          var ut = Q.map(function(Oe) {
            return String(Oe);
          });
          ut.unshift("Warning: " + O), Function.prototype.apply.call(console[S], console, ut);
        }
      }
      var Me = {};
      function ge(S, O) {
        {
          var Q = S.constructor, J = Q && (Q.displayName || Q.name) || "ReactClass", be = J + "." + O;
          if (Me[be])
            return;
          he("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", O, J), Me[be] = !0;
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
        enqueueForceUpdate: function(S, O, Q) {
          ge(S, "forceUpdate");
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
        enqueueReplaceState: function(S, O, Q, J) {
          ge(S, "replaceState");
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
        enqueueSetState: function(S, O, Q, J) {
          ge(S, "setState");
        }
      }, Z = Object.assign, et = {};
      Object.freeze(et);
      function Ve(S, O, Q) {
        this.props = S, this.context = O, this.refs = et, this.updater = Q || F;
      }
      Ve.prototype.isReactComponent = {}, Ve.prototype.setState = function(S, O) {
        if (typeof S != "object" && typeof S != "function" && S != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, O, "setState");
      }, Ve.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate");
      };
      {
        var pt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, at = function(S, O) {
          Object.defineProperty(Ve.prototype, S, {
            get: function() {
              ue("%s(...) is deprecated in plain JavaScript React classes. %s", O[0], O[1]);
            }
          });
        };
        for (var ze in pt)
          pt.hasOwnProperty(ze) && at(ze, pt[ze]);
      }
      function lt() {
      }
      lt.prototype = Ve.prototype;
      function vt(S, O, Q) {
        this.props = S, this.context = O, this.refs = et, this.updater = Q || F;
      }
      var Qt = vt.prototype = new lt();
      Qt.constructor = vt, Z(Qt, Ve.prototype), Qt.isPureReactComponent = !0;
      function kn() {
        var S = {
          current: null
        };
        return Object.seal(S), S;
      }
      var fr = Array.isArray;
      function Sn(S) {
        return fr(S);
      }
      function rr(S) {
        {
          var O = typeof Symbol == "function" && Symbol.toStringTag, Q = O && S[Symbol.toStringTag] || S.constructor.name || "Object";
          return Q;
        }
      }
      function Qn(S) {
        try {
          return Kn(S), !1;
        } catch {
          return !0;
        }
      }
      function Kn(S) {
        return "" + S;
      }
      function ea(S) {
        if (Qn(S))
          return he("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(S)), Kn(S);
      }
      function Co(S, O, Q) {
        var J = S.displayName;
        if (J)
          return J;
        var be = O.displayName || O.name || "";
        return be !== "" ? Q + "(" + be + ")" : Q;
      }
      function ga(S) {
        return S.displayName || "Context";
      }
      function ar(S) {
        if (S == null)
          return null;
        if (typeof S.tag == "number" && he("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
          return S.displayName || S.name || null;
        if (typeof S == "string")
          return S;
        switch (S) {
          case C:
            return "Fragment";
          case x:
            return "Portal";
          case w:
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
            case b:
              var O = S;
              return ga(O) + ".Consumer";
            case R:
              var Q = S;
              return ga(Q._context) + ".Provider";
            case D:
              return Co(S, S.render, "ForwardRef");
            case H:
              var J = S.displayName || null;
              return J !== null ? J : ar(S.type) || "Memo";
            case ae: {
              var be = S, ut = be._payload, Oe = be._init;
              try {
                return ar(Oe(ut));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Mn = Object.prototype.hasOwnProperty, Xn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, kr, to, In;
      In = {};
      function Tr(S) {
        if (Mn.call(S, "ref")) {
          var O = Object.getOwnPropertyDescriptor(S, "ref").get;
          if (O && O.isReactWarning)
            return !1;
        }
        return S.ref !== void 0;
      }
      function _a(S) {
        if (Mn.call(S, "key")) {
          var O = Object.getOwnPropertyDescriptor(S, "key").get;
          if (O && O.isReactWarning)
            return !1;
        }
        return S.key !== void 0;
      }
      function no(S, O) {
        var Q = function() {
          kr || (kr = !0, he("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        Q.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: Q,
          configurable: !0
        });
      }
      function Eo(S, O) {
        var Q = function() {
          to || (to = !0, he("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        Q.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: Q,
          configurable: !0
        });
      }
      function Ne(S) {
        if (typeof S.ref == "string" && We.current && S.__self && We.current.stateNode !== S.__self) {
          var O = ar(We.current.type);
          In[O] || (he('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O, S.ref), In[O] = !0);
        }
      }
      var tt = function(S, O, Q, J, be, ut, Oe) {
        var ft = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: g,
          // Built-in properties that belong on the element
          type: S,
          key: O,
          ref: Q,
          props: Oe,
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
          value: J
        }), Object.defineProperty(ft, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: be
        }), Object.freeze && (Object.freeze(ft.props), Object.freeze(ft)), ft;
      };
      function Rt(S, O, Q) {
        var J, be = {}, ut = null, Oe = null, ft = null, Mt = null;
        if (O != null) {
          Tr(O) && (Oe = O.ref, Ne(O)), _a(O) && (ea(O.key), ut = "" + O.key), ft = O.__self === void 0 ? null : O.__self, Mt = O.__source === void 0 ? null : O.__source;
          for (J in O)
            Mn.call(O, J) && !Xn.hasOwnProperty(J) && (be[J] = O[J]);
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
          for (J in kt)
            be[J] === void 0 && (be[J] = kt[J]);
        }
        if (ut || Oe) {
          var rn = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          ut && no(be, rn), Oe && Eo(be, rn);
        }
        return tt(S, ut, Oe, ft, Mt, We.current, be);
      }
      function Kt(S, O) {
        var Q = tt(S.type, O, S.ref, S._self, S._source, S._owner, S.props);
        return Q;
      }
      function sn(S, O, Q) {
        if (S == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
        var J, be = Z({}, S.props), ut = S.key, Oe = S.ref, ft = S._self, Mt = S._source, Vt = S._owner;
        if (O != null) {
          Tr(O) && (Oe = O.ref, Vt = We.current), _a(O) && (ea(O.key), ut = "" + O.key);
          var dn;
          S.type && S.type.defaultProps && (dn = S.type.defaultProps);
          for (J in O)
            Mn.call(O, J) && !Xn.hasOwnProperty(J) && (O[J] === void 0 && dn !== void 0 ? be[J] = dn[J] : be[J] = O[J]);
        }
        var nn = arguments.length - 2;
        if (nn === 1)
          be.children = Q;
        else if (nn > 1) {
          for (var kt = Array(nn), rn = 0; rn < nn; rn++)
            kt[rn] = arguments[rn + 2];
          be.children = kt;
        }
        return tt(S.type, ut, Oe, ft, Mt, Vt, be);
      }
      function Cn(S) {
        return typeof S == "object" && S !== null && S.$$typeof === g;
      }
      var vn = ".", or = ":";
      function cn(S) {
        var O = /[=:]/g, Q = {
          "=": "=0",
          ":": "=2"
        }, J = S.replace(O, function(be) {
          return Q[be];
        });
        return "$" + J;
      }
      var Zt = !1, en = /\/+/g;
      function Sa(S) {
        return S.replace(en, "$&/");
      }
      function Nr(S, O) {
        return typeof S == "object" && S !== null && S.key != null ? (ea(S.key), cn("" + S.key)) : O.toString(36);
      }
      function ja(S, O, Q, J, be) {
        var ut = typeof S;
        (ut === "undefined" || ut === "boolean") && (S = null);
        var Oe = !1;
        if (S === null)
          Oe = !0;
        else
          switch (ut) {
            case "string":
            case "number":
              Oe = !0;
              break;
            case "object":
              switch (S.$$typeof) {
                case g:
                case x:
                  Oe = !0;
              }
          }
        if (Oe) {
          var ft = S, Mt = be(ft), Vt = J === "" ? vn + Nr(ft, 0) : J;
          if (Sn(Mt)) {
            var dn = "";
            Vt != null && (dn = Sa(Vt) + "/"), ja(Mt, O, dn, "", function(_d) {
              return _d;
            });
          } else Mt != null && (Cn(Mt) && (Mt.key && (!ft || ft.key !== Mt.key) && ea(Mt.key), Mt = Kt(
            Mt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            Q + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Mt.key && (!ft || ft.key !== Mt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Sa("" + Mt.key) + "/"
            ) : "") + Vt
          )), O.push(Mt));
          return 1;
        }
        var nn, kt, rn = 0, En = J === "" ? vn : J + or;
        if (Sn(S))
          for (var zi = 0; zi < S.length; zi++)
            nn = S[zi], kt = En + Nr(nn, zi), rn += ja(nn, O, Q, kt, be);
        else {
          var vs = Ee(S);
          if (typeof vs == "function") {
            var ni = S;
            vs === ni.entries && (Zt || ue("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Zt = !0);
            for (var hs = vs.call(ni), wl, gd = 0; !(wl = hs.next()).done; )
              nn = wl.value, kt = En + Nr(nn, gd++), rn += ja(nn, O, Q, kt, be);
          } else if (ut === "object") {
            var Nc = String(S);
            throw new Error("Objects are not valid as a React child (found: " + (Nc === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : Nc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return rn;
      }
      function Zo(S, O, Q) {
        if (S == null)
          return S;
        var J = [], be = 0;
        return ja(S, J, "", "", function(ut) {
          return O.call(Q, ut, be++);
        }), J;
      }
      function hl(S) {
        var O = 0;
        return Zo(S, function() {
          O++;
        }), O;
      }
      function ml(S, O, Q) {
        Zo(S, function() {
          O.apply(this, arguments);
        }, Q);
      }
      function Ti(S) {
        return Zo(S, function(O) {
          return O;
        }) || [];
      }
      function Ni(S) {
        if (!Cn(S))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return S;
      }
      function yl(S) {
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
          $$typeof: R,
          _context: O
        };
        var Q = !1, J = !1, be = !1;
        {
          var ut = {
            $$typeof: b,
            _context: O
          };
          Object.defineProperties(ut, {
            Provider: {
              get: function() {
                return J || (J = !0, he("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), O.Provider;
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
                return Q || (Q = !0, he("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), O.Consumer;
              }
            },
            displayName: {
              get: function() {
                return O.displayName;
              },
              set: function(Oe) {
                be || (ue("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Oe), be = !0);
              }
            }
          }), O.Consumer = ut;
        }
        return O._currentRenderer = null, O._currentRenderer2 = null, O;
      }
      var Ar = -1, Ur = 0, dr = 1, xo = 2;
      function ro(S) {
        if (S._status === Ar) {
          var O = S._result, Q = O();
          if (Q.then(function(ut) {
            if (S._status === Ur || S._status === Ar) {
              var Oe = S;
              Oe._status = dr, Oe._result = ut;
            }
          }, function(ut) {
            if (S._status === Ur || S._status === Ar) {
              var Oe = S;
              Oe._status = xo, Oe._result = ut;
            }
          }), S._status === Ar) {
            var J = S;
            J._status = Ur, J._result = Q;
          }
        }
        if (S._status === dr) {
          var be = S._result;
          return be === void 0 && he(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, be), "default" in be || he(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, be), be.default;
        } else
          throw S._result;
      }
      function wo(S) {
        var O = {
          // We use these fields to store the result.
          _status: Ar,
          _result: S
        }, Q = {
          $$typeof: ae,
          _payload: O,
          _init: ro
        };
        {
          var J, be;
          Object.defineProperties(Q, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return J;
              },
              set: function(ut) {
                he("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), J = ut, Object.defineProperty(Q, "defaultProps", {
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
                he("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), be = ut, Object.defineProperty(Q, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return Q;
      }
      function bo(S) {
        S != null && S.$$typeof === H ? he("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof S != "function" ? he("forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S) : S.length !== 0 && S.length !== 2 && he("forwardRef render functions accept exactly two parameters: props and ref. %s", S.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), S != null && (S.defaultProps != null || S.propTypes != null) && he("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var O = {
          $$typeof: D,
          render: S
        };
        {
          var Q;
          Object.defineProperty(O, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return Q;
            },
            set: function(J) {
              Q = J, !S.name && !S.displayName && (S.displayName = J);
            }
          });
        }
        return O;
      }
      var j;
      j = /* @__PURE__ */ Symbol.for("react.module.reference");
      function ce(S) {
        return !!(typeof S == "string" || typeof S == "function" || S === C || S === w || ve || S === h || S === A || S === V || Y || S === ie || Je || te || L || typeof S == "object" && S !== null && (S.$$typeof === ae || S.$$typeof === H || S.$$typeof === R || S.$$typeof === b || S.$$typeof === D || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        S.$$typeof === j || S.getModuleId !== void 0));
      }
      function Ae(S, O) {
        ce(S) || he("memo: The first argument must be a component. Instead received: %s", S === null ? "null" : typeof S);
        var Q = {
          $$typeof: H,
          type: S,
          compare: O === void 0 ? null : O
        };
        {
          var J;
          Object.defineProperty(Q, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return J;
            },
            set: function(be) {
              J = be, !S.name && !S.displayName && (S.displayName = be);
            }
          });
        }
        return Q;
      }
      function Ye() {
        var S = Ce.current;
        return S === null && he(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), S;
      }
      function Et(S) {
        var O = Ye();
        if (S._context !== void 0) {
          var Q = S._context;
          Q.Consumer === S ? he("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : Q.Provider === S && he("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return O.useContext(S);
      }
      function _t(S) {
        var O = Ye();
        return O.useState(S);
      }
      function Dt(S, O, Q) {
        var J = Ye();
        return J.useReducer(S, O, Q);
      }
      function Tt(S) {
        var O = Ye();
        return O.useRef(S);
      }
      function On(S, O) {
        var Q = Ye();
        return Q.useEffect(S, O);
      }
      function fn(S, O) {
        var Q = Ye();
        return Q.useInsertionEffect(S, O);
      }
      function hn(S, O) {
        var Q = Ye();
        return Q.useLayoutEffect(S, O);
      }
      function pr(S, O) {
        var Q = Ye();
        return Q.useCallback(S, O);
      }
      function ao(S, O) {
        var Q = Ye();
        return Q.useMemo(S, O);
      }
      function oo(S, O, Q) {
        var J = Ye();
        return J.useImperativeHandle(S, O, Q);
      }
      function xt(S, O) {
        {
          var Q = Ye();
          return Q.useDebugValue(S, O);
        }
      }
      function bt() {
        var S = Ye();
        return S.useTransition();
      }
      function io(S) {
        var O = Ye();
        return O.useDeferredValue(S);
      }
      function gl() {
        var S = Ye();
        return S.useId();
      }
      function _l(S, O, Q) {
        var J = Ye();
        return J.useSyncExternalStore(S, O, Q);
      }
      var Di = 0, du, Mi, ta, cs, zr, kc, Tc;
      function pu() {
      }
      pu.__reactDisabledLog = !0;
      function Oi() {
        {
          if (Di === 0) {
            du = console.log, Mi = console.info, ta = console.warn, cs = console.error, zr = console.group, kc = console.groupCollapsed, Tc = console.groupEnd;
            var S = {
              configurable: !0,
              enumerable: !0,
              value: pu,
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
          Di++;
        }
      }
      function Ca() {
        {
          if (Di--, Di === 0) {
            var S = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Z({}, S, {
                value: du
              }),
              info: Z({}, S, {
                value: Mi
              }),
              warn: Z({}, S, {
                value: ta
              }),
              error: Z({}, S, {
                value: cs
              }),
              group: Z({}, S, {
                value: zr
              }),
              groupCollapsed: Z({}, S, {
                value: kc
              }),
              groupEnd: Z({}, S, {
                value: Tc
              })
            });
          }
          Di < 0 && he("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var lo = ke.ReactCurrentDispatcher, uo;
      function vu(S, O, Q) {
        {
          if (uo === void 0)
            try {
              throw Error();
            } catch (be) {
              var J = be.stack.trim().match(/\n( *(at )?)/);
              uo = J && J[1] || "";
            }
          return `
` + uo + S;
        }
      }
      var Sl = !1, Li;
      {
        var hu = typeof WeakMap == "function" ? WeakMap : Map;
        Li = new hu();
      }
      function mu(S, O) {
        if (!S || Sl)
          return "";
        {
          var Q = Li.get(S);
          if (Q !== void 0)
            return Q;
        }
        var J;
        Sl = !0;
        var be = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ut;
        ut = lo.current, lo.current = null, Oi();
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
              } catch (En) {
                J = En;
              }
              Reflect.construct(S, [], Oe);
            } else {
              try {
                Oe.call();
              } catch (En) {
                J = En;
              }
              S.call(Oe.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (En) {
              J = En;
            }
            S();
          }
        } catch (En) {
          if (En && J && typeof En.stack == "string") {
            for (var ft = En.stack.split(`
`), Mt = J.stack.split(`
`), Vt = ft.length - 1, dn = Mt.length - 1; Vt >= 1 && dn >= 0 && ft[Vt] !== Mt[dn]; )
              dn--;
            for (; Vt >= 1 && dn >= 0; Vt--, dn--)
              if (ft[Vt] !== Mt[dn]) {
                if (Vt !== 1 || dn !== 1)
                  do
                    if (Vt--, dn--, dn < 0 || ft[Vt] !== Mt[dn]) {
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
        var kt = S ? S.displayName || S.name : "", rn = kt ? vu(kt) : "";
        return typeof S == "function" && Li.set(S, rn), rn;
      }
      function ei(S, O, Q) {
        return mu(S, !1);
      }
      function md(S) {
        var O = S.prototype;
        return !!(O && O.isReactComponent);
      }
      function ti(S, O, Q) {
        if (S == null)
          return "";
        if (typeof S == "function")
          return mu(S, md(S));
        if (typeof S == "string")
          return vu(S);
        switch (S) {
          case A:
            return vu("Suspense");
          case V:
            return vu("SuspenseList");
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case D:
              return ei(S.render);
            case H:
              return ti(S.type, O, Q);
            case ae: {
              var J = S, be = J._payload, ut = J._init;
              try {
                return ti(ut(be), O, Q);
              } catch {
              }
            }
          }
        return "";
      }
      var $t = {}, yu = ke.ReactDebugCurrentFrame;
      function Ft(S) {
        if (S) {
          var O = S._owner, Q = ti(S.type, S._source, O ? O.type : null);
          yu.setExtraStackFrame(Q);
        } else
          yu.setExtraStackFrame(null);
      }
      function fs(S, O, Q, J, be) {
        {
          var ut = Function.call.bind(Mn);
          for (var Oe in S)
            if (ut(S, Oe)) {
              var ft = void 0;
              try {
                if (typeof S[Oe] != "function") {
                  var Mt = Error((J || "React class") + ": " + Q + " type `" + Oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[Oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Mt.name = "Invariant Violation", Mt;
                }
                ft = S[Oe](O, Oe, J, Q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Vt) {
                ft = Vt;
              }
              ft && !(ft instanceof Error) && (Ft(be), he("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", J || "React class", Q, Oe, typeof ft), Ft(null)), ft instanceof Error && !(ft.message in $t) && ($t[ft.message] = !0, Ft(be), he("Failed %s type: %s", Q, ft.message), Ft(null));
            }
        }
      }
      function Ro(S) {
        if (S) {
          var O = S._owner, Q = ti(S.type, S._source, O ? O.type : null);
          Ge(Q);
        } else
          Ge(null);
      }
      var gt;
      gt = !1;
      function gu() {
        if (We.current) {
          var S = ar(We.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
      function vr(S) {
        if (S !== void 0) {
          var O = S.fileName.replace(/^.*[\\\/]/, ""), Q = S.lineNumber;
          return `

Check your code at ` + O + ":" + Q + ".";
        }
        return "";
      }
      function ko(S) {
        return S != null ? vr(S.__source) : "";
      }
      var Pr = {};
      function To(S) {
        var O = gu();
        if (!O) {
          var Q = typeof S == "string" ? S : S.displayName || S.name;
          Q && (O = `

Check the top-level render call using <` + Q + ">.");
        }
        return O;
      }
      function mn(S, O) {
        if (!(!S._store || S._store.validated || S.key != null)) {
          S._store.validated = !0;
          var Q = To(O);
          if (!Pr[Q]) {
            Pr[Q] = !0;
            var J = "";
            S && S._owner && S._owner !== We.current && (J = " It was passed a child from " + ar(S._owner.type) + "."), Ro(S), he('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Q, J), Ro(null);
          }
        }
      }
      function tn(S, O) {
        if (typeof S == "object") {
          if (Sn(S))
            for (var Q = 0; Q < S.length; Q++) {
              var J = S[Q];
              Cn(J) && mn(J, O);
            }
          else if (Cn(S))
            S._store && (S._store.validated = !0);
          else if (S) {
            var be = Ee(S);
            if (typeof be == "function" && be !== S.entries)
              for (var ut = be.call(S), Oe; !(Oe = ut.next()).done; )
                Cn(Oe.value) && mn(Oe.value, O);
          }
        }
      }
      function ji(S) {
        {
          var O = S.type;
          if (O == null || typeof O == "string")
            return;
          var Q;
          if (typeof O == "function")
            Q = O.propTypes;
          else if (typeof O == "object" && (O.$$typeof === D || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          O.$$typeof === H))
            Q = O.propTypes;
          else
            return;
          if (Q) {
            var J = ar(O);
            fs(Q, S.props, "prop", J, S);
          } else if (O.PropTypes !== void 0 && !gt) {
            gt = !0;
            var be = ar(O);
            he("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", be || "Unknown");
          }
          typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && he("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Jn(S) {
        {
          for (var O = Object.keys(S.props), Q = 0; Q < O.length; Q++) {
            var J = O[Q];
            if (J !== "children" && J !== "key") {
              Ro(S), he("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", J), Ro(null);
              break;
            }
          }
          S.ref !== null && (Ro(S), he("Invalid attribute `ref` supplied to `React.Fragment`."), Ro(null));
        }
      }
      function Ir(S, O, Q) {
        var J = ce(S);
        if (!J) {
          var be = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (be += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ut = ko(O);
          ut ? be += ut : be += gu();
          var Oe;
          S === null ? Oe = "null" : Sn(S) ? Oe = "array" : S !== void 0 && S.$$typeof === g ? (Oe = "<" + (ar(S.type) || "Unknown") + " />", be = " Did you accidentally export a JSX literal instead of a component?") : Oe = typeof S, he("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Oe, be);
        }
        var ft = Rt.apply(this, arguments);
        if (ft == null)
          return ft;
        if (J)
          for (var Mt = 2; Mt < arguments.length; Mt++)
            tn(arguments[Mt], S);
        return S === C ? Jn(ft) : ji(ft), ft;
      }
      var Aa = !1;
      function Cl(S) {
        var O = Ir.bind(null, S);
        return O.type = S, Aa || (Aa = !0, ue("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(O, "type", {
          enumerable: !1,
          get: function() {
            return ue("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: S
            }), S;
          }
        }), O;
      }
      function ds(S, O, Q) {
        for (var J = sn.apply(this, arguments), be = 2; be < arguments.length; be++)
          tn(arguments[be], J.type);
        return ji(J), J;
      }
      function ps(S, O) {
        var Q = le.transition;
        le.transition = {};
        var J = le.transition;
        le.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          S();
        } finally {
          if (le.transition = Q, Q === null && J._updatedFibers) {
            var be = J._updatedFibers.size;
            be > 10 && ue("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), J._updatedFibers.clear();
          }
        }
      }
      var Ai = !1, El = null;
      function yd(S) {
        if (El === null)
          try {
            var O = ("require" + Math.random()).slice(0, 7), Q = c && c[O];
            El = Q.call(c, "timers").setImmediate;
          } catch {
            El = function(be) {
              Ai === !1 && (Ai = !0, typeof MessageChannel > "u" && he("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var ut = new MessageChannel();
              ut.port1.onmessage = be, ut.port2.postMessage(void 0);
            };
          }
        return El(S);
      }
      var Ua = 0, so = !1;
      function No(S) {
        {
          var O = Ua;
          Ua++, se.current === null && (se.current = []);
          var Q = se.isBatchingLegacy, J;
          try {
            if (se.isBatchingLegacy = !0, J = S(), !Q && se.didScheduleLegacyUpdate) {
              var be = se.current;
              be !== null && (se.didScheduleLegacyUpdate = !1, Ui(be));
            }
          } catch (kt) {
            throw za(O), kt;
          } finally {
            se.isBatchingLegacy = Q;
          }
          if (J !== null && typeof J == "object" && typeof J.then == "function") {
            var ut = J, Oe = !1, ft = {
              then: function(kt, rn) {
                Oe = !0, ut.then(function(En) {
                  za(O), Ua === 0 ? _u(En, kt, rn) : kt(En);
                }, function(En) {
                  za(O), rn(En);
                });
              }
            };
            return !so && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Oe || (so = !0, he("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), ft;
          } else {
            var Mt = J;
            if (za(O), Ua === 0) {
              var Vt = se.current;
              Vt !== null && (Ui(Vt), se.current = null);
              var dn = {
                then: function(kt, rn) {
                  se.current === null ? (se.current = [], _u(Mt, kt, rn)) : kt(Mt);
                }
              };
              return dn;
            } else {
              var nn = {
                then: function(kt, rn) {
                  kt(Mt);
                }
              };
              return nn;
            }
          }
        }
      }
      function za(S) {
        S !== Ua - 1 && he("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ua = S;
      }
      function _u(S, O, Q) {
        {
          var J = se.current;
          if (J !== null)
            try {
              Ui(J), yd(function() {
                J.length === 0 ? (se.current = null, O(S)) : _u(S, O, Q);
              });
            } catch (be) {
              Q(be);
            }
          else
            O(S);
        }
      }
      var Su = !1;
      function Ui(S) {
        if (!Su) {
          Su = !0;
          var O = 0;
          try {
            for (; O < S.length; O++) {
              var Q = S[O];
              do
                Q = Q(!0);
              while (Q !== null);
            }
            S.length = 0;
          } catch (J) {
            throw S = S.slice(O + 1), J;
          } finally {
            Su = !1;
          }
        }
      }
      var xl = Ir, Cu = ds, Eu = Cl, co = {
        map: Zo,
        forEach: ml,
        count: hl,
        toArray: Ti,
        only: Ni
      };
      p.Children = co, p.Component = Ve, p.Fragment = C, p.Profiler = w, p.PureComponent = vt, p.StrictMode = h, p.Suspense = A, p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ke, p.act = No, p.cloneElement = Cu, p.createContext = yl, p.createElement = xl, p.createFactory = Eu, p.createRef = kn, p.forwardRef = bo, p.isValidElement = Cn, p.lazy = wo, p.memo = Ae, p.startTransition = ps, p.unstable_act = No, p.useCallback = pr, p.useContext = Et, p.useDebugValue = xt, p.useDeferredValue = io, p.useEffect = On, p.useId = gl, p.useImperativeHandle = oo, p.useInsertionEffect = fn, p.useLayoutEffect = hn, p.useMemo = ao, p.useReducer = Dt, p.useRef = Tt, p.useState = _t, p.useSyncExternalStore = _l, p.useTransition = bt, p.version = d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(wv, wv.exports)), wv.exports;
}
var ZC;
function kv() {
  return ZC || (ZC = 1, process.env.NODE_ENV === "production" ? Ey.exports = r3() : Ey.exports = a3()), Ey.exports;
}
var eE;
function o3() {
  if (eE) return Cv;
  eE = 1;
  var c = kv(), p = /* @__PURE__ */ Symbol.for("react.element"), d = /* @__PURE__ */ Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, x = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(w, R, b) {
    var D, A = {}, V = null, H = null;
    b !== void 0 && (V = "" + b), R.key !== void 0 && (V = "" + R.key), R.ref !== void 0 && (H = R.ref);
    for (D in R) g.call(R, D) && !C.hasOwnProperty(D) && (A[D] = R[D]);
    if (w && w.defaultProps) for (D in R = w.defaultProps, R) A[D] === void 0 && (A[D] = R[D]);
    return { $$typeof: p, type: w, key: V, ref: H, props: A, _owner: x.current };
  }
  return Cv.Fragment = d, Cv.jsx = h, Cv.jsxs = h, Cv;
}
var Ev = {};
var tE;
function i3() {
  return tE || (tE = 1, process.env.NODE_ENV !== "production" && (function() {
    var c = kv(), p = /* @__PURE__ */ Symbol.for("react.element"), d = /* @__PURE__ */ Symbol.for("react.portal"), g = /* @__PURE__ */ Symbol.for("react.fragment"), x = /* @__PURE__ */ Symbol.for("react.strict_mode"), C = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), w = /* @__PURE__ */ Symbol.for("react.context"), R = /* @__PURE__ */ Symbol.for("react.forward_ref"), b = /* @__PURE__ */ Symbol.for("react.suspense"), D = /* @__PURE__ */ Symbol.for("react.suspense_list"), A = /* @__PURE__ */ Symbol.for("react.memo"), V = /* @__PURE__ */ Symbol.for("react.lazy"), H = /* @__PURE__ */ Symbol.for("react.offscreen"), ae = Symbol.iterator, ie = "@@iterator";
    function xe(j) {
      if (j === null || typeof j != "object")
        return null;
      var ce = ae && j[ae] || j[ie];
      return typeof ce == "function" ? ce : null;
    }
    var we = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Ee(j) {
      {
        for (var ce = arguments.length, Ae = new Array(ce > 1 ? ce - 1 : 0), Ye = 1; Ye < ce; Ye++)
          Ae[Ye - 1] = arguments[Ye];
        Ce("error", j, Ae);
      }
    }
    function Ce(j, ce, Ae) {
      {
        var Ye = we.ReactDebugCurrentFrame, Et = Ye.getStackAddendum();
        Et !== "" && (ce += "%s", Ae = Ae.concat([Et]));
        var _t = Ae.map(function(Dt) {
          return String(Dt);
        });
        _t.unshift("Warning: " + ce), Function.prototype.apply.call(console[j], console, _t);
      }
    }
    var le = !1, se = !1, We = !1, Le = !1, je = !1, Ge;
    Ge = /* @__PURE__ */ Symbol.for("react.module.reference");
    function Je(j) {
      return !!(typeof j == "string" || typeof j == "function" || j === g || j === C || je || j === x || j === b || j === D || Le || j === H || le || se || We || typeof j == "object" && j !== null && (j.$$typeof === V || j.$$typeof === A || j.$$typeof === h || j.$$typeof === w || j.$$typeof === R || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      j.$$typeof === Ge || j.getModuleId !== void 0));
    }
    function te(j, ce, Ae) {
      var Ye = j.displayName;
      if (Ye)
        return Ye;
      var Et = ce.displayName || ce.name || "";
      return Et !== "" ? Ae + "(" + Et + ")" : Ae;
    }
    function L(j) {
      return j.displayName || "Context";
    }
    function Y(j) {
      if (j == null)
        return null;
      if (typeof j.tag == "number" && Ee("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof j == "function")
        return j.displayName || j.name || null;
      if (typeof j == "string")
        return j;
      switch (j) {
        case g:
          return "Fragment";
        case d:
          return "Portal";
        case C:
          return "Profiler";
        case x:
          return "StrictMode";
        case b:
          return "Suspense";
        case D:
          return "SuspenseList";
      }
      if (typeof j == "object")
        switch (j.$$typeof) {
          case w:
            var ce = j;
            return L(ce) + ".Consumer";
          case h:
            var Ae = j;
            return L(Ae._context) + ".Provider";
          case R:
            return te(j, j.render, "ForwardRef");
          case A:
            var Ye = j.displayName || null;
            return Ye !== null ? Ye : Y(j.type) || "Memo";
          case V: {
            var Et = j, _t = Et._payload, Dt = Et._init;
            try {
              return Y(Dt(_t));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ve = Object.assign, ke = 0, ue, he, ee, Me, ge, F, Z;
    function et() {
    }
    et.__reactDisabledLog = !0;
    function Ve() {
      {
        if (ke === 0) {
          ue = console.log, he = console.info, ee = console.warn, Me = console.error, ge = console.group, F = console.groupCollapsed, Z = console.groupEnd;
          var j = {
            configurable: !0,
            enumerable: !0,
            value: et,
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
    function pt() {
      {
        if (ke--, ke === 0) {
          var j = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ve({}, j, {
              value: ue
            }),
            info: ve({}, j, {
              value: he
            }),
            warn: ve({}, j, {
              value: ee
            }),
            error: ve({}, j, {
              value: Me
            }),
            group: ve({}, j, {
              value: ge
            }),
            groupCollapsed: ve({}, j, {
              value: F
            }),
            groupEnd: ve({}, j, {
              value: Z
            })
          });
        }
        ke < 0 && Ee("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var at = we.ReactCurrentDispatcher, ze;
    function lt(j, ce, Ae) {
      {
        if (ze === void 0)
          try {
            throw Error();
          } catch (Et) {
            var Ye = Et.stack.trim().match(/\n( *(at )?)/);
            ze = Ye && Ye[1] || "";
          }
        return `
` + ze + j;
      }
    }
    var vt = !1, Qt;
    {
      var kn = typeof WeakMap == "function" ? WeakMap : Map;
      Qt = new kn();
    }
    function fr(j, ce) {
      if (!j || vt)
        return "";
      {
        var Ae = Qt.get(j);
        if (Ae !== void 0)
          return Ae;
      }
      var Ye;
      vt = !0;
      var Et = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _t;
      _t = at.current, at.current = null, Ve();
      try {
        if (ce) {
          var Dt = function() {
            throw Error();
          };
          if (Object.defineProperty(Dt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Dt, []);
            } catch (xt) {
              Ye = xt;
            }
            Reflect.construct(j, [], Dt);
          } else {
            try {
              Dt.call();
            } catch (xt) {
              Ye = xt;
            }
            j.call(Dt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xt) {
            Ye = xt;
          }
          j();
        }
      } catch (xt) {
        if (xt && Ye && typeof xt.stack == "string") {
          for (var Tt = xt.stack.split(`
`), On = Ye.stack.split(`
`), fn = Tt.length - 1, hn = On.length - 1; fn >= 1 && hn >= 0 && Tt[fn] !== On[hn]; )
            hn--;
          for (; fn >= 1 && hn >= 0; fn--, hn--)
            if (Tt[fn] !== On[hn]) {
              if (fn !== 1 || hn !== 1)
                do
                  if (fn--, hn--, hn < 0 || Tt[fn] !== On[hn]) {
                    var pr = `
` + Tt[fn].replace(" at new ", " at ");
                    return j.displayName && pr.includes("<anonymous>") && (pr = pr.replace("<anonymous>", j.displayName)), typeof j == "function" && Qt.set(j, pr), pr;
                  }
                while (fn >= 1 && hn >= 0);
              break;
            }
        }
      } finally {
        vt = !1, at.current = _t, pt(), Error.prepareStackTrace = Et;
      }
      var ao = j ? j.displayName || j.name : "", oo = ao ? lt(ao) : "";
      return typeof j == "function" && Qt.set(j, oo), oo;
    }
    function Sn(j, ce, Ae) {
      return fr(j, !1);
    }
    function rr(j) {
      var ce = j.prototype;
      return !!(ce && ce.isReactComponent);
    }
    function Qn(j, ce, Ae) {
      if (j == null)
        return "";
      if (typeof j == "function")
        return fr(j, rr(j));
      if (typeof j == "string")
        return lt(j);
      switch (j) {
        case b:
          return lt("Suspense");
        case D:
          return lt("SuspenseList");
      }
      if (typeof j == "object")
        switch (j.$$typeof) {
          case R:
            return Sn(j.render);
          case A:
            return Qn(j.type, ce, Ae);
          case V: {
            var Ye = j, Et = Ye._payload, _t = Ye._init;
            try {
              return Qn(_t(Et), ce, Ae);
            } catch {
            }
          }
        }
      return "";
    }
    var Kn = Object.prototype.hasOwnProperty, ea = {}, Co = we.ReactDebugCurrentFrame;
    function ga(j) {
      if (j) {
        var ce = j._owner, Ae = Qn(j.type, j._source, ce ? ce.type : null);
        Co.setExtraStackFrame(Ae);
      } else
        Co.setExtraStackFrame(null);
    }
    function ar(j, ce, Ae, Ye, Et) {
      {
        var _t = Function.call.bind(Kn);
        for (var Dt in j)
          if (_t(j, Dt)) {
            var Tt = void 0;
            try {
              if (typeof j[Dt] != "function") {
                var On = Error((Ye || "React class") + ": " + Ae + " type `" + Dt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof j[Dt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw On.name = "Invariant Violation", On;
              }
              Tt = j[Dt](ce, Dt, Ye, Ae, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (fn) {
              Tt = fn;
            }
            Tt && !(Tt instanceof Error) && (ga(Et), Ee("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ye || "React class", Ae, Dt, typeof Tt), ga(null)), Tt instanceof Error && !(Tt.message in ea) && (ea[Tt.message] = !0, ga(Et), Ee("Failed %s type: %s", Ae, Tt.message), ga(null));
          }
      }
    }
    var Mn = Array.isArray;
    function Xn(j) {
      return Mn(j);
    }
    function kr(j) {
      {
        var ce = typeof Symbol == "function" && Symbol.toStringTag, Ae = ce && j[Symbol.toStringTag] || j.constructor.name || "Object";
        return Ae;
      }
    }
    function to(j) {
      try {
        return In(j), !1;
      } catch {
        return !0;
      }
    }
    function In(j) {
      return "" + j;
    }
    function Tr(j) {
      if (to(j))
        return Ee("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", kr(j)), In(j);
    }
    var _a = we.ReactCurrentOwner, no = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Eo, Ne;
    function tt(j) {
      if (Kn.call(j, "ref")) {
        var ce = Object.getOwnPropertyDescriptor(j, "ref").get;
        if (ce && ce.isReactWarning)
          return !1;
      }
      return j.ref !== void 0;
    }
    function Rt(j) {
      if (Kn.call(j, "key")) {
        var ce = Object.getOwnPropertyDescriptor(j, "key").get;
        if (ce && ce.isReactWarning)
          return !1;
      }
      return j.key !== void 0;
    }
    function Kt(j, ce) {
      typeof j.ref == "string" && _a.current;
    }
    function sn(j, ce) {
      {
        var Ae = function() {
          Eo || (Eo = !0, Ee("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ce));
        };
        Ae.isReactWarning = !0, Object.defineProperty(j, "key", {
          get: Ae,
          configurable: !0
        });
      }
    }
    function Cn(j, ce) {
      {
        var Ae = function() {
          Ne || (Ne = !0, Ee("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ce));
        };
        Ae.isReactWarning = !0, Object.defineProperty(j, "ref", {
          get: Ae,
          configurable: !0
        });
      }
    }
    var vn = function(j, ce, Ae, Ye, Et, _t, Dt) {
      var Tt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: j,
        key: ce,
        ref: Ae,
        props: Dt,
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
        value: Ye
      }), Object.defineProperty(Tt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Et
      }), Object.freeze && (Object.freeze(Tt.props), Object.freeze(Tt)), Tt;
    };
    function or(j, ce, Ae, Ye, Et) {
      {
        var _t, Dt = {}, Tt = null, On = null;
        Ae !== void 0 && (Tr(Ae), Tt = "" + Ae), Rt(ce) && (Tr(ce.key), Tt = "" + ce.key), tt(ce) && (On = ce.ref, Kt(ce, Et));
        for (_t in ce)
          Kn.call(ce, _t) && !no.hasOwnProperty(_t) && (Dt[_t] = ce[_t]);
        if (j && j.defaultProps) {
          var fn = j.defaultProps;
          for (_t in fn)
            Dt[_t] === void 0 && (Dt[_t] = fn[_t]);
        }
        if (Tt || On) {
          var hn = typeof j == "function" ? j.displayName || j.name || "Unknown" : j;
          Tt && sn(Dt, hn), On && Cn(Dt, hn);
        }
        return vn(j, Tt, On, Et, Ye, _a.current, Dt);
      }
    }
    var cn = we.ReactCurrentOwner, Zt = we.ReactDebugCurrentFrame;
    function en(j) {
      if (j) {
        var ce = j._owner, Ae = Qn(j.type, j._source, ce ? ce.type : null);
        Zt.setExtraStackFrame(Ae);
      } else
        Zt.setExtraStackFrame(null);
    }
    var Sa;
    Sa = !1;
    function Nr(j) {
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
    function Zo(j) {
      return "";
    }
    var hl = {};
    function ml(j) {
      {
        var ce = ja();
        if (!ce) {
          var Ae = typeof j == "string" ? j : j.displayName || j.name;
          Ae && (ce = `

Check the top-level render call using <` + Ae + ">.");
        }
        return ce;
      }
    }
    function Ti(j, ce) {
      {
        if (!j._store || j._store.validated || j.key != null)
          return;
        j._store.validated = !0;
        var Ae = ml(ce);
        if (hl[Ae])
          return;
        hl[Ae] = !0;
        var Ye = "";
        j && j._owner && j._owner !== cn.current && (Ye = " It was passed a child from " + Y(j._owner.type) + "."), en(j), Ee('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Ae, Ye), en(null);
      }
    }
    function Ni(j, ce) {
      {
        if (typeof j != "object")
          return;
        if (Xn(j))
          for (var Ae = 0; Ae < j.length; Ae++) {
            var Ye = j[Ae];
            Nr(Ye) && Ti(Ye, ce);
          }
        else if (Nr(j))
          j._store && (j._store.validated = !0);
        else if (j) {
          var Et = xe(j);
          if (typeof Et == "function" && Et !== j.entries)
            for (var _t = Et.call(j), Dt; !(Dt = _t.next()).done; )
              Nr(Dt.value) && Ti(Dt.value, ce);
        }
      }
    }
    function yl(j) {
      {
        var ce = j.type;
        if (ce == null || typeof ce == "string")
          return;
        var Ae;
        if (typeof ce == "function")
          Ae = ce.propTypes;
        else if (typeof ce == "object" && (ce.$$typeof === R || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ce.$$typeof === A))
          Ae = ce.propTypes;
        else
          return;
        if (Ae) {
          var Ye = Y(ce);
          ar(Ae, j.props, "prop", Ye, j);
        } else if (ce.PropTypes !== void 0 && !Sa) {
          Sa = !0;
          var Et = Y(ce);
          Ee("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Et || "Unknown");
        }
        typeof ce.getDefaultProps == "function" && !ce.getDefaultProps.isReactClassApproved && Ee("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ar(j) {
      {
        for (var ce = Object.keys(j.props), Ae = 0; Ae < ce.length; Ae++) {
          var Ye = ce[Ae];
          if (Ye !== "children" && Ye !== "key") {
            en(j), Ee("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ye), en(null);
            break;
          }
        }
        j.ref !== null && (en(j), Ee("Invalid attribute `ref` supplied to `React.Fragment`."), en(null));
      }
    }
    var Ur = {};
    function dr(j, ce, Ae, Ye, Et, _t) {
      {
        var Dt = Je(j);
        if (!Dt) {
          var Tt = "";
          (j === void 0 || typeof j == "object" && j !== null && Object.keys(j).length === 0) && (Tt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var On = Zo();
          On ? Tt += On : Tt += ja();
          var fn;
          j === null ? fn = "null" : Xn(j) ? fn = "array" : j !== void 0 && j.$$typeof === p ? (fn = "<" + (Y(j.type) || "Unknown") + " />", Tt = " Did you accidentally export a JSX literal instead of a component?") : fn = typeof j, Ee("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", fn, Tt);
        }
        var hn = or(j, ce, Ae, Et, _t);
        if (hn == null)
          return hn;
        if (Dt) {
          var pr = ce.children;
          if (pr !== void 0)
            if (Ye)
              if (Xn(pr)) {
                for (var ao = 0; ao < pr.length; ao++)
                  Ni(pr[ao], j);
                Object.freeze && Object.freeze(pr);
              } else
                Ee("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ni(pr, j);
        }
        if (Kn.call(ce, "key")) {
          var oo = Y(j), xt = Object.keys(ce).filter(function(gl) {
            return gl !== "key";
          }), bt = xt.length > 0 ? "{key: someKey, " + xt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ur[oo + bt]) {
            var io = xt.length > 0 ? "{" + xt.join(": ..., ") + ": ...}" : "{}";
            Ee(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, bt, oo, io, oo), Ur[oo + bt] = !0;
          }
        }
        return j === g ? Ar(hn) : yl(hn), hn;
      }
    }
    function xo(j, ce, Ae) {
      return dr(j, ce, Ae, !0);
    }
    function ro(j, ce, Ae) {
      return dr(j, ce, Ae, !1);
    }
    var wo = ro, bo = xo;
    Ev.Fragment = g, Ev.jsx = wo, Ev.jsxs = bo;
  })()), Ev;
}
var nE;
function l3() {
  return nE || (nE = 1, process.env.NODE_ENV === "production" ? Cy.exports = o3() : Cy.exports = i3()), Cy.exports;
}
var k = l3(), Te = kv();
const La = /* @__PURE__ */ FE(Te), rE = (c) => Symbol.iterator in c, aE = (c) => (
  // HACK: avoid checking entries type
  "entries" in c
), oE = (c, p) => {
  const d = c instanceof Map ? c : new Map(c.entries()), g = p instanceof Map ? p : new Map(p.entries());
  if (d.size !== g.size)
    return !1;
  for (const [x, C] of d)
    if (!g.has(x) || !Object.is(C, g.get(x)))
      return !1;
  return !0;
}, u3 = (c, p) => {
  const d = c[Symbol.iterator](), g = p[Symbol.iterator]();
  let x = d.next(), C = g.next();
  for (; !x.done && !C.done; ) {
    if (!Object.is(x.value, C.value))
      return !1;
    x = d.next(), C = g.next();
  }
  return !!x.done && !!C.done;
};
function s3(c, p) {
  return Object.is(c, p) ? !0 : typeof c != "object" || c === null || typeof p != "object" || p === null || Object.getPrototypeOf(c) !== Object.getPrototypeOf(p) ? !1 : rE(c) && rE(p) ? aE(c) && aE(p) ? oE(c, p) : u3(c, p) : oE(
    { entries: () => Object.entries(c) },
    { entries: () => Object.entries(p) }
  );
}
function Jo(c) {
  const p = La.useRef(void 0);
  return (d) => {
    const g = c(d);
    return s3(p.current, g) ? p.current : p.current = g;
  };
}
const c3 = "_sidebar_or261_1", f3 = "_sidebarNav_or261_24", d3 = "_sectionWrapper_or261_32", p3 = "_sectionHeader_or261_37", v3 = "_active_or261_48", h3 = "_sidebarItemInHeader_or261_68", m3 = "_plusButton_or261_71", y3 = "_sidebarItem_or261_68", g3 = "_sidebarIcon_or261_138", _3 = "_sidebarLabel_or261_148", S3 = "_plusIcon_or261_173", C3 = "_rotated_or261_178", Nn = {
  sidebar: c3,
  sidebarNav: f3,
  sectionWrapper: d3,
  sectionHeader: p3,
  active: v3,
  sidebarItemInHeader: h3,
  plusButton: m3,
  sidebarItem: y3,
  sidebarIcon: g3,
  sidebarLabel: _3,
  plusIcon: S3,
  rotated: C3
}, iE = (c) => {
  let p;
  const d = /* @__PURE__ */ new Set(), g = (b, D) => {
    const A = typeof b == "function" ? b(p) : b;
    if (!Object.is(A, p)) {
      const V = p;
      p = D ?? (typeof A != "object" || A === null) ? A : Object.assign({}, p, A), d.forEach((H) => H(p, V));
    }
  }, x = () => p, w = { setState: g, getState: x, getInitialState: () => R, subscribe: (b) => (d.add(b), () => d.delete(b)) }, R = p = c(g, x, w);
  return w;
}, E3 = ((c) => c ? iE(c) : iE), x3 = (c) => c;
function w3(c, p = x3) {
  const d = La.useSyncExternalStore(
    c.subscribe,
    La.useCallback(() => p(c.getState()), [c, p]),
    La.useCallback(() => p(c.getInitialState()), [c, p])
  );
  return La.useDebugValue(d), d;
}
const lE = (c) => {
  const p = E3(c), d = (g) => w3(p, g);
  return Object.assign(d, p), d;
}, f_ = ((c) => c ? lE(c) : lE), uE = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_API_TOKEN: "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.cODQcC84BMEb69hX_t0gQOuJk3ft9Wv-1iNEXw5Umz6RQEIMvvAbqDpy6OMI6pZ0bLp51q63hTyiDMTkrnQ4C2y65PiU1xBK.WnV9SY6OoWm2lSKzUe4Qbw.DTI3Y5gYm_c2xLpgfrJuM6HcysEhpUbw3y-8Xl6rco90H9ioyeH8CeFnyINSovLySlS7aSrYLb_AHCNOrDlW0tbaC2luo04j-hrTga4XDR5wKFY2ewc18eYvnkeYZsunLg-hRZYvDl9xiCYkKYEuDGbNYE-dKq-yfeE170BZaJQ.Kbx6p3av0mH7vjz4vo-zb9KCceo_3z5vN3Iy5u3qIoE", VITE_API_URL: "https://xh2o-yths-38lt.n7c.xano.io/api", VITE_DATA_SOURCE: "staging", VITE_LLM_ENDPOINT: "http://localhost:3001", VITE_USER_ID: "3", VITE_USER_NAME: "Dynamo Denis" }, bv = /* @__PURE__ */ new Map(), xy = (c) => {
  const p = bv.get(c);
  return p ? Object.fromEntries(
    Object.entries(p.stores).map(([d, g]) => [d, g.getState()])
  ) : {};
}, b3 = (c, p, d) => {
  if (c === void 0)
    return {
      type: "untracked",
      connection: p.connect(d)
    };
  const g = bv.get(d.name);
  if (g)
    return { type: "tracked", store: c, ...g };
  const x = {
    connection: p.connect(d),
    stores: {}
  };
  return bv.set(d.name, x), { type: "tracked", store: c, ...x };
}, R3 = (c, p) => {
  if (p === void 0) return;
  const d = bv.get(c);
  d && (delete d.stores[p], Object.keys(d.stores).length === 0 && bv.delete(c));
}, k3 = (c) => {
  var p, d;
  if (!c) return;
  const g = c.split(`
`), x = g.findIndex(
    (h) => h.includes("api.setState")
  );
  if (x < 0) return;
  const C = ((p = g[x + 1]) == null ? void 0 : p.trim()) || "";
  return (d = /.+ (.+) .+/.exec(C)) == null ? void 0 : d[1];
}, T3 = (c, p = {}) => (d, g, x) => {
  const { enabled: C, anonymousActionType: h, store: w, ...R } = p;
  let b;
  try {
    b = (C ?? (uE ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch {
  }
  if (!b)
    return c(d, g, x);
  const { connection: D, ...A } = b3(w, b, R);
  let V = !0;
  x.setState = ((ie, xe, we) => {
    const Ee = d(ie, xe);
    if (!V) return Ee;
    const Ce = we === void 0 ? {
      type: h || k3(new Error().stack) || "anonymous"
    } : typeof we == "string" ? { type: we } : we;
    return w === void 0 ? (D?.send(Ce, g()), Ee) : (D?.send(
      {
        ...Ce,
        type: `${w}/${Ce.type}`
      },
      {
        ...xy(R.name),
        [w]: x.getState()
      }
    ), Ee);
  }), x.devtools = {
    cleanup: () => {
      D && typeof D.unsubscribe == "function" && D.unsubscribe(), R3(R.name, w);
    }
  };
  const H = (...ie) => {
    const xe = V;
    V = !1, d(...ie), V = xe;
  }, ae = c(x.setState, g, x);
  if (A.type === "untracked" ? D?.init(ae) : (A.stores[A.store] = x, D?.init(
    Object.fromEntries(
      Object.entries(A.stores).map(([ie, xe]) => [
        ie,
        ie === A.store ? ae : xe.getState()
      ])
    )
  )), x.dispatchFromDevtools && typeof x.dispatch == "function") {
    let ie = !1;
    const xe = x.dispatch;
    x.dispatch = (...we) => {
      (uE ? "production" : void 0) !== "production" && we[0].type === "__setState" && !ie && (console.warn(
        '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
      ), ie = !0), xe(...we);
    };
  }
  return D.subscribe((ie) => {
    var xe;
    switch (ie.type) {
      case "ACTION":
        if (typeof ie.payload != "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return J1(
          ie.payload,
          (we) => {
            if (we.type === "__setState") {
              if (w === void 0) {
                H(we.state);
                return;
              }
              Object.keys(we.state).length !== 1 && console.error(
                `
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `
              );
              const Ee = we.state[w];
              if (Ee == null)
                return;
              JSON.stringify(x.getState()) !== JSON.stringify(Ee) && H(Ee);
              return;
            }
            x.dispatchFromDevtools && typeof x.dispatch == "function" && x.dispatch(we);
          }
        );
      case "DISPATCH":
        switch (ie.payload.type) {
          case "RESET":
            return H(ae), w === void 0 ? D?.init(x.getState()) : D?.init(xy(R.name));
          case "COMMIT":
            if (w === void 0) {
              D?.init(x.getState());
              return;
            }
            return D?.init(xy(R.name));
          case "ROLLBACK":
            return J1(ie.state, (we) => {
              if (w === void 0) {
                H(we), D?.init(x.getState());
                return;
              }
              H(we[w]), D?.init(xy(R.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return J1(ie.state, (we) => {
              if (w === void 0) {
                H(we);
                return;
              }
              JSON.stringify(x.getState()) !== JSON.stringify(we[w]) && H(we[w]);
            });
          case "IMPORT_STATE": {
            const { nextLiftedState: we } = ie.payload, Ee = (xe = we.computedStates.slice(-1)[0]) == null ? void 0 : xe.state;
            if (!Ee) return;
            H(w === void 0 ? Ee : Ee[w]), D?.send(
              null,
              // FIXME no-any
              we
            );
            return;
          }
          case "PAUSE_RECORDING":
            return V = !V;
        }
        return;
    }
  }), ae;
}, d_ = T3, J1 = (c, p) => {
  let d;
  try {
    d = JSON.parse(c);
  } catch (g) {
    console.error(
      "[zustand devtools middleware] Could not parse the received json",
      g
    );
  }
  d !== void 0 && p(d);
}, jr = f_()(
  d_(
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
), Rv = f_()(
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
          const { token: p, baseUrl: d, dataSource: g } = jr.getState();
          if (!d || typeof d == "string" && d.trim() === "")
            throw console.error("VariablesStore state:", jr.getState()), new Error("Base URL is not defined. Please provide it as a prop to CopilotApp.");
          if (!p || typeof p == "string" && p.trim() === "")
            throw console.error("VariablesStore state:", jr.getState()), new Error("Token is not defined. Please provide it as a prop to CopilotApp.");
          const x = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${p}`,
            "x-data-source": g || ""
          }, C = await fetch(`${d}:Et3oQAtI/my-persons`, { headers: x }), h = await C.json();
          if (!C.ok) {
            const w = h?.message || h?.error || "Failed to fetch loops", R = `HTTP ${C.status}: ${w}`;
            throw new Error(R);
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
          const { token: p, baseUrl: d, dataSource: g } = jr.getState();
          if (!d || typeof d == "string" && d.trim() === "")
            throw console.error("VariablesStore state:", jr.getState()), new Error("Base URL is not defined. Please provide it as a prop to CopilotApp.");
          if (!p || typeof p == "string" && p.trim() === "")
            throw console.error("VariablesStore state:", jr.getState()), new Error("Token is not defined. Please provide it as a prop to CopilotApp.");
          const x = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${p}`,
            "x-data-source": g || ""
          }, C = await fetch(`${d}:MkA4QsNh/suggestion-requests?copilot_mode=loop`, { headers: x }), h = await C.json();
          if (!C.ok) {
            const w = h?.message || h?.error || "Failed to fetch suggestion requests", R = `HTTP ${C.status}: ${w}`;
            throw new Error(R);
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
          const { token: p, baseUrl: d, dataSource: g } = jr.getState();
          if (!d || typeof d == "string" && d.trim() === "")
            throw console.error("VariablesStore state:", jr.getState()), new Error("Base URL is not defined. Please provide it as a prop to CopilotApp.");
          if (!p || typeof p == "string" && p.trim() === "")
            throw console.error("VariablesStore state:", jr.getState()), new Error("Token is not defined. Please provide it as a prop to CopilotApp.");
          const x = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${p}`,
            "x-data-source": g || ""
          }, C = await fetch(`${d}:MkA4QsNh/suggestion-requests?copilot_mode=outcome`, { headers: x }), h = await C.json();
          if (!C.ok) {
            const w = h?.message || h?.error || "Failed to fetch suggestion requests", R = `HTTP ${C.status}: ${w}`;
            throw new Error(R);
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
          const { token: d, baseUrl: g, dataSource: x } = jr.getState();
          if (!g || typeof g == "string" && g.trim() === "")
            throw console.error("VariablesStore state:", jr.getState()), new Error("Base URL is not defined. Please provide it as a prop to CopilotApp.");
          if (!d || typeof d == "string" && d.trim() === "")
            throw console.error("VariablesStore state:", jr.getState()), new Error("Token is not defined. Please provide it as a prop to CopilotApp.");
          const C = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${d}`,
            "x-data-source": x || ""
          }, h = await fetch(
            `${g}:MkA4QsNh/suggestion-requests`,
            { headers: C, method: "POST", body: JSON.stringify(p) }
          ), w = await h.json();
          if (!h.ok) {
            const R = w?.message || w?.error || "Failed to create suggestion request";
            throw new Error(`HTTP ${h.status}: ${R}`);
          }
          c((R) => ({
            suggestionRequests: [w, ...R.suggestionRequests],
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
          const { token: d, baseUrl: g, dataSource: x } = jr.getState();
          if (!g || typeof g == "string" && g.trim() === "")
            throw new Error("Base URL is not defined. Please provide it as a prop to CopilotApp.");
          if (!d || typeof d == "string" && d.trim() === "")
            throw new Error("Token is not defined. Please provide it as a prop to CopilotApp.");
          const C = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${d}`,
            "x-data-source": x || ""
          }, h = await fetch(
            `${g}:MkA4QsNh/suggestion-requests/${p}`,
            { headers: C, method: "DELETE" }
          );
          if (!h.ok) {
            const w = await h.json().catch(() => ({})), R = w?.message || w?.error || "Failed to delete suggestion request";
            throw new Error(`HTTP ${h.status}: ${R}`);
          }
          c((w) => ({
            suggestionRequests: w.suggestionRequests.filter((R) => R.id !== p),
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
), ss = (c) => ({
  messages: [],
  threadId: `thread-${c}-${Date.now()}`,
  isLoading: !1
}), sE = {
  messages: [],
  threadId: "thread-empty",
  isLoading: !1
}, ki = f_()(
  d_((c, p) => ({
    activeContext: "copilot",
    selectedPerson: null,
    selectedSuggestionRequest: null,
    leverageLoopSummaries: [],
    outcomesSummaries: [],
    selectedActions: {},
    copilotChat: ss("copilot"),
    leverageLoopChats: {},
    outcomesChats: {},
    setActiveContext: (d) => c({ activeContext: d }),
    setSelectedPerson: (d) => c((g) => ({
      selectedPerson: d,
      selectedSuggestionRequest: d ? null : g.selectedSuggestionRequest,
      activeContext: "leverage-loops"
    })),
    setSelectedSuggestionRequest: (d) => c((g) => ({
      selectedSuggestionRequest: d,
      selectedPerson: d ? null : g.selectedPerson,
      activeContext: "leverage-loops"
    })),
    setSelectedOutcome: (d) => c({
      selectedSuggestionRequest: d,
      activeContext: "outcomes"
    }),
    // Helper to get current leverage loop chat key based on selection
    getCurrentLeverageLoopKey: () => {
      const d = p();
      return d.selectedPerson ? d.selectedPerson.full_name : d.selectedSuggestionRequest ? d.selectedSuggestionRequest.request_panel_title : "leverage-loop-default";
    },
    // Helper to get current leverage loop chat state
    getCurrentLeverageLoopChat: () => {
      const d = p(), g = d.getCurrentLeverageLoopKey();
      return g && d.leverageLoopChats[g] ? d.leverageLoopChats[g] : sE;
    },
    // Helper to get current outcomes chat key
    getCurrentOutcomesKey: () => {
      const d = p();
      return d.selectedSuggestionRequest && (d.selectedSuggestionRequest.request_panel_title || d.selectedSuggestionRequest.request_header_title) || "outcomes-default";
    },
    getCurrentOutcomesChat: () => {
      const d = p(), g = d.getCurrentOutcomesKey();
      return g && d.outcomesChats[g] ? d.outcomesChats[g] : sE;
    },
    addMessage: (d, g, x) => c((C) => {
      if (d === "leverage-loops") {
        const w = x || C.getCurrentLeverageLoopKey();
        if (!w) return C;
        const R = C.leverageLoopChats[w] || ss(`leverage-loop-${w}`);
        return {
          leverageLoopChats: {
            ...C.leverageLoopChats,
            [w]: {
              ...R,
              messages: [...R.messages, g]
            }
          }
        };
      }
      if (d === "outcomes") {
        const w = x || C.getCurrentOutcomesKey();
        if (!w) return C;
        const R = C.outcomesChats[w] || ss(`outcomes-${w}`);
        return {
          outcomesChats: {
            ...C.outcomesChats,
            [w]: {
              ...R,
              messages: [...R.messages, g]
            }
          }
        };
      }
      const h = wy();
      return {
        [h]: {
          ...C[h],
          messages: [...C[h].messages, g]
        }
      };
    }),
    updateMessage: (d, g, x, C, h) => c((w) => {
      if (d === "leverage-loops") {
        const b = h || w.getCurrentLeverageLoopKey();
        if (!b) return w;
        const D = w.leverageLoopChats[b];
        return D ? {
          leverageLoopChats: {
            ...w.leverageLoopChats,
            [b]: {
              ...D,
              messages: D.messages.map(
                (A) => A.id === g ? { ...A, content: x, isStreaming: C ?? A.isStreaming } : A
              )
            }
          }
        } : w;
      }
      if (d === "outcomes") {
        const b = h || w.getCurrentOutcomesKey();
        if (!b) return w;
        const D = w.outcomesChats[b];
        return D ? {
          outcomesChats: {
            ...w.outcomesChats,
            [b]: {
              ...D,
              messages: D.messages.map(
                (A) => A.id === g ? { ...A, content: x, isStreaming: C ?? A.isStreaming } : A
              )
            }
          }
        } : w;
      }
      const R = wy();
      return {
        [R]: {
          ...w[R],
          messages: w[R].messages.map(
            (b) => b.id === g ? { ...b, content: x, isStreaming: C ?? b.isStreaming } : b
          )
        }
      };
    }),
    setIsLoading: (d, g, x) => c((C) => {
      if (d === "leverage-loops") {
        const w = x || C.getCurrentLeverageLoopKey();
        if (!w) return C;
        const R = C.leverageLoopChats[w] || ss(`leverage-loop-${w}`);
        return {
          leverageLoopChats: {
            ...C.leverageLoopChats,
            [w]: {
              ...R,
              isLoading: g
            }
          }
        };
      }
      if (d === "outcomes") {
        const w = x || C.getCurrentOutcomesKey();
        if (!w) return C;
        const R = C.outcomesChats[w] || ss(`outcomes-${w}`);
        return {
          outcomesChats: {
            ...C.outcomesChats,
            [w]: {
              ...R,
              isLoading: g
            }
          }
        };
      }
      const h = wy();
      return {
        [h]: {
          ...C[h],
          isLoading: g
        }
      };
    }),
    clearChat: (d, g) => c((x) => {
      if (d === "leverage-loops") {
        const h = g || x.getCurrentLeverageLoopKey();
        return h ? {
          leverageLoopChats: {
            ...x.leverageLoopChats,
            [h]: ss(`leverage-loop-${h}`)
          }
        } : x;
      }
      if (d === "outcomes") {
        const h = g || x.getCurrentOutcomesKey();
        return h ? {
          outcomesChats: {
            ...x.outcomesChats,
            [h]: ss(`outcomes-${h}`)
          }
        } : x;
      }
      return {
        [wy()]: ss(d)
      };
    }),
    upsertLeverageLoopSummary: (d) => c((g) => g.leverageLoopSummaries.findIndex((C) => C.id === d.id) >= 0 ? {
      leverageLoopSummaries: g.leverageLoopSummaries.map((C) => C.id === d.id ? d : C)
    } : {
      leverageLoopSummaries: [...g.leverageLoopSummaries, d]
    }),
    upsertOutcomesSummary: (d) => c((g) => g.outcomesSummaries.findIndex((C) => C.id === d.id) >= 0 ? {
      outcomesSummaries: g.outcomesSummaries.map((C) => C.id === d.id ? d : C)
    } : {
      outcomesSummaries: [...g.outcomesSummaries, d]
    }),
    setSelectedAction: (d, g) => c((x) => ({
      selectedActions: {
        ...x.selectedActions,
        [d]: g
      }
    })),
    getSelectedAction: (d) => p().selectedActions[d] || null
  }), { name: "ChatContextStore" })
);
function wy(c) {
  return "copilotChat";
}
const N3 = "_composerContainer_1dqbd_1", D3 = "_composer_1dqbd_1", M3 = "_inputWrapper_1dqbd_15", O3 = "_input_1dqbd_15", L3 = "_actions_1dqbd_40", j3 = "_leftActions_1dqbd_47", A3 = "_rightActions_1dqbd_48", U3 = "_actionButton_1dqbd_54", z3 = "_sendButton_1dqbd_75", P3 = "_active_1dqbd_92", Ko = {
  composerContainer: N3,
  composer: D3,
  inputWrapper: M3,
  input: O3,
  actions: L3,
  leftActions: j3,
  rightActions: A3,
  actionButton: U3,
  sendButton: z3,
  active: P3
}, I3 = ({
  onSend: c,
  disabled: p = !1,
  placeholder: d = "Ask anything..",
  initialValue: g = ""
}) => {
  const [x, C] = Te.useState(g), h = Te.useRef(null);
  Te.useEffect(() => {
    g && (C(g), setTimeout(() => h.current?.focus(), 0));
  }, [g]), Te.useEffect(() => {
    const b = h.current;
    b && (b.style.height = "auto", b.style.height = `${Math.min(b.scrollHeight, 200)}px`);
  }, [x]);
  const w = (b) => {
    b?.preventDefault(), x.trim() && !p && (c(x.trim()), C(""));
  }, R = (b) => {
    b.key === "Enter" && !b.shiftKey && (b.preventDefault(), w());
  };
  return /* @__PURE__ */ k.jsx("div", { className: Ko.composerContainer, children: /* @__PURE__ */ k.jsxs("form", { onSubmit: w, className: Ko.composer, children: [
    /* @__PURE__ */ k.jsx("div", { className: Ko.inputWrapper, children: /* @__PURE__ */ k.jsx(
      "textarea",
      {
        ref: h,
        value: x,
        onChange: (b) => C(b.target.value),
        onKeyDown: R,
        placeholder: d,
        disabled: p,
        className: Ko.input,
        rows: 1
      }
    ) }),
    /* @__PURE__ */ k.jsxs("div", { className: Ko.actions, children: [
      /* @__PURE__ */ k.jsxs("div", { className: Ko.leftActions, children: [
        /* @__PURE__ */ k.jsx(
          "button",
          {
            type: "button",
            className: Ko.actionButton,
            title: "Attach file",
            children: /* @__PURE__ */ k.jsx(
              "svg",
              {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /* @__PURE__ */ k.jsx("path", { d: "M12 5v14M5 12h14" })
              }
            )
          }
        ),
        /* @__PURE__ */ k.jsx(
          "button",
          {
            type: "button",
            className: Ko.actionButton,
            title: "Settings",
            children: /* @__PURE__ */ k.jsx(
              "svg",
              {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /* @__PURE__ */ k.jsx("path", { d: "M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" })
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ k.jsxs("div", { className: Ko.rightActions, children: [
        /* @__PURE__ */ k.jsx(
          "button",
          {
            type: "button",
            className: Ko.actionButton,
            title: "Voice input",
            children: /* @__PURE__ */ k.jsxs(
              "svg",
              {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: [
                  /* @__PURE__ */ k.jsx("path", { d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" }),
                  /* @__PURE__ */ k.jsx("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }),
                  /* @__PURE__ */ k.jsx("line", { x1: "12", y1: "19", x2: "12", y2: "23" }),
                  /* @__PURE__ */ k.jsx("line", { x1: "8", y1: "23", x2: "16", y2: "23" })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ k.jsx(
          "button",
          {
            type: "submit",
            className: `${Ko.sendButton} ${x.trim() && !p ? Ko.active : ""}`,
            disabled: !x.trim() || p,
            title: "Send message",
            children: /* @__PURE__ */ k.jsx(
              "svg",
              {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /* @__PURE__ */ k.jsx("path", { d: "M12 19V5M5 12l7-7 7 7" })
              }
            )
          }
        )
      ] })
    ] })
  ] }) });
}, F3 = "_messageContainer_hxhyd_1", V3 = "_user_hxhyd_6", H3 = "_assistant_hxhyd_9", $3 = "_userMessage_hxhyd_23", B3 = "_assistantAvatar_hxhyd_38", q3 = "_assistantMessage_hxhyd_55", W3 = "_textContent_hxhyd_66", Y3 = "_streamingIndicator_hxhyd_71", vl = {
  messageContainer: F3,
  user: V3,
  assistant: H3,
  userMessage: $3,
  assistantAvatar: B3,
  assistantMessage: q3,
  textContent: W3,
  streamingIndicator: Y3
}, p_ = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.15816%2015.5394C4.42185%2015.8099%203.64142%2015.9909%202.82808%2016.0678C2.75965%2016.0739%202.69009%2016.0784%202.62129%2016.081C2.05326%2016.1048%201.47513%2015.9215%201.00732%2015.5213C0.154714%2014.7923%20-0.052828%2013.5813%200.443029%2012.6226C0.448638%2012.6116%200.453874%2012.6011%200.459857%2012.5898L3.41481%206.77869C2.08654%209.73401%202.83855%2013.3286%205.16339%2015.5372L5.15816%2015.5391V15.5394Z'%20fill='url(%23paint0_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8419%204.46013C15.5782%204.18972%2016.3587%204.00906%2017.172%203.93175C17.2401%203.92571%2017.31%203.92119%2017.3788%203.91855C17.9468%203.89479%2018.525%204.07808%2018.9928%204.47823C19.845%205.20726%2020.0529%206.41828%2019.5571%207.37699C19.5515%207.3883%2019.5458%207.39886%2019.5402%207.4098L16.5853%2013.2205C17.9132%2010.2648%2017.1615%206.67059%2014.8367%204.46202L14.8419%204.46013Z'%20fill='url(%23paint1_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10%202.61975C11.8545%202.61975%2013.547%203.31559%2014.8367%204.46211C12.464%205.51888%2010.8283%207.5913%2010.1904%2010.0563C9.55242%2012.5214%207.60302%2014.6787%205.16338%2015.5378C3.66459%2014.2306%202.68222%2012.2057%202.68222%2010.0001C2.68259%205.92394%205.95877%202.61975%2010%202.61975Z'%20fill='url(%23paint2_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8367%204.46167C16.358%205.81412%2017.3179%207.79376%2017.3179%209.99932C17.3179%2014.0751%2014.0417%2017.3793%2010.0001%2017.3793C8.14604%2017.3793%206.45317%2016.6835%205.16342%2015.537C7.59222%2014.5651%209.36213%2012.4644%2010.0001%209.99932C10.638%207.53429%2012.4079%205.4332%2014.8367%204.46167Z'%20fill='url(%23paint3_linear_23492_1459)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_23492_1459'%20x1='1.41231'%20y1='10.771'%20x2='6.31346'%20y2='13.2684'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFAE00'%20stop-opacity='0.12'/%3e%3cstop%20offset='1'%20stop-color='%23FFAE00'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_23492_1459'%20x1='13.6991'%20y1='6.69473'%20x2='18.6306'%20y2='9.20746'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2313F562'/%3e%3cstop%20offset='1'%20stop-color='%2313F562'%20stop-opacity='0.09'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_23492_1459'%20x1='4.21878'%20y1='14.805'%20x2='10.8001'%20y2='2.68539'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FD5743'/%3e%3cstop%20offset='0.21'%20stop-color='%23D13D58'/%3e%3cstop%20offset='0.4'%20stop-color='%23AB2868'/%3e%3cstop%20offset='0.6'%20stop-color='%238C1B6F'/%3e%3cstop%20offset='1'%20stop-color='%23280553'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_23492_1459'%20x1='9.19834'%20y1='17.5257'%20x2='15.8611'%20y2='5.25654'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23130F56'/%3e%3cstop%20offset='0.41'%20stop-color='%23105D8E'/%3e%3cstop%20offset='0.6'%20stop-color='%23107995'/%3e%3cstop%20offset='0.79'%20stop-color='%2311A39E'/%3e%3cstop%20offset='1'%20stop-color='%2313EBAF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
const G3 = (c) => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Q3 = (c) => c.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (p, d, g) => g ? g.toUpperCase() : d.toLowerCase()
), cE = (c) => {
  const p = Q3(c);
  return p.charAt(0).toUpperCase() + p.slice(1);
}, VE = (...c) => c.filter((p, d, g) => !!p && p.trim() !== "" && g.indexOf(p) === d).join(" ").trim(), K3 = (c) => {
  for (const p in c)
    if (p.startsWith("aria-") || p === "role" || p === "title")
      return !0;
};
var X3 = {
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
const J3 = Te.forwardRef(
  ({
    color: c = "currentColor",
    size: p = 24,
    strokeWidth: d = 2,
    absoluteStrokeWidth: g,
    className: x = "",
    children: C,
    iconNode: h,
    ...w
  }, R) => Te.createElement(
    "svg",
    {
      ref: R,
      ...X3,
      width: p,
      height: p,
      stroke: c,
      strokeWidth: g ? Number(d) * 24 / Number(p) : d,
      className: VE("lucide", x),
      ...!C && !K3(w) && { "aria-hidden": "true" },
      ...w
    },
    [
      ...h.map(([b, D]) => Te.createElement(b, D)),
      ...Array.isArray(C) ? C : [C]
    ]
  )
);
const Re = (c, p) => {
  const d = Te.forwardRef(
    ({ className: g, ...x }, C) => Te.createElement(J3, {
      ref: C,
      iconNode: p,
      className: VE(
        `lucide-${G3(cE(c))}`,
        `lucide-${c}`,
        g
      ),
      ...x
    })
  );
  return d.displayName = cE(c), d;
};
const Z3 = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
], e4 = Re("activity", Z3);
const t4 = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], n4 = Re("arrow-down", t4);
const r4 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], a4 = Re("arrow-left", r4);
const o4 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], i4 = Re("arrow-right", o4);
const l4 = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], u4 = Re("arrow-up", l4);
const s4 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
], c4 = Re("award", s4);
const f4 = [
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
], d4 = Re("bell-off", f4);
const p4 = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], v4 = Re("bell", p4);
const h4 = [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }]
], m4 = Re("bookmark", h4);
const y4 = [
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
], g4 = Re("boxes", y4);
const _4 = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
], S4 = Re("briefcase", _4);
const C4 = [
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
], E4 = Re("building", C4);
const x4 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], w4 = Re("calendar", x4);
const b4 = [
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
], R4 = Re("car", b4);
const k4 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }]
], T4 = Re("chart-line", k4);
const N4 = [
  ["path", { d: "M5 21v-6", key: "1hz6c0" }],
  ["path", { d: "M12 21V9", key: "uvy0l4" }],
  ["path", { d: "M19 21V3", key: "11j9sm" }]
], D4 = Re("chart-no-axes-column-increasing", N4);
const M4 = [
  [
    "path",
    {
      d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",
      key: "pzmjnu"
    }
  ],
  ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83", key: "k2fpak" }]
], O4 = Re("chart-pie", M4);
const L4 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], j4 = Re("check", L4);
const A4 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], HE = Re("chevron-down", A4);
const U4 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], z4 = Re("chevron-left", U4);
const P4 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], I4 = Re("chevron-right", P4);
const F4 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], V4 = Re("chevron-up", F4);
const H4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], $4 = Re("circle-alert", H4);
const B4 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], q4 = Re("circle-check-big", B4);
const W4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Y4 = Re("circle-question-mark", W4);
const G4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], Q4 = Re("circle-x", G4);
const K4 = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], X4 = Re("clock", K4);
const J4 = [
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
], Z4 = Re("coffee", J4);
const e5 = [
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], t5 = Re("compass", e5);
const n5 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], r5 = Re("copy", n5);
const a5 = [
  [
    "path",
    {
      d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
      key: "1vdc57"
    }
  ],
  ["path", { d: "M5 21h14", key: "11awu3" }]
], o5 = Re("crown", a5);
const i5 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], l5 = Re("download", i5);
const u5 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], s5 = Re("external-link", u5);
const c5 = [
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
], f5 = Re("eye-off", c5);
const d5 = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], p5 = Re("eye", d5);
const v5 = [
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
], h5 = Re("file-text", v5);
const m5 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]
], y5 = Re("file", m5);
const g5 = [
  [
    "path",
    {
      d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
      key: "1jaruq"
    }
  ]
], _5 = Re("flag", g5);
const S5 = [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
], C5 = Re("folder-open", S5);
const E5 = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
], x5 = Re("folder", E5);
const w5 = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
], b5 = Re("funnel", w5);
const R5 = [
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
], k5 = Re("gift", R5);
const T5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], N5 = Re("globe", T5);
const D5 = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
], M5 = Re("heart", D5);
const O5 = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], L5 = Re("house", O5);
const j5 = [
  ["path", { d: "M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8", key: "18ogeb" }]
], A5 = Re("infinity", j5);
const U5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], z5 = Re("info", U5);
const P5 = [
  ["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }],
  ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
  ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }]
], I5 = Re("key", P5);
const F5 = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
], V5 = Re("lightbulb", F5);
const H5 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], $5 = Re("link", H5);
const B5 = [
  ["path", { d: "M13 5h8", key: "a7qcls" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 19h8", key: "c3s6r1" }],
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }]
], q5 = Re("list-checks", B5);
const W5 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
], Y5 = Re("lock-open", W5);
const G5 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], Q5 = Re("lock", G5);
const K5 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], X5 = Re("mail", K5);
const J5 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], Z5 = Re("map-pin", J5);
const eN = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
], tN = Re("message-circle", eN);
const nN = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
], rN = Re("message-square", nN);
const aN = [["path", { d: "M5 12h14", key: "1ays0h" }]], oN = Re("minus", aN);
const iN = [
  ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]
], lN = Re("navigation", iN);
const uN = [
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
      key: "1miecu"
    }
  ]
], sN = Re("paperclip", uN);
const cN = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], fN = Re("pause", cN);
const dN = [
  ["path", { d: "M13 21h8", key: "1jsn5i" }],
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
], a_ = Re("pen-line", dN);
const pN = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], vN = Re("phone", pN);
const hN = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], mN = Re("play", hN);
const yN = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], gN = Re("plus", yN);
const _N = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], SN = Re("refresh-cw", _N);
const CN = [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }]
], EN = Re("repeat", CN);
const xN = [
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
], wN = Re("rocket", xN);
const bN = [
  ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
], RN = Re("rotate-cw", bN);
const kN = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], TN = Re("search", kN);
const NN = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], DN = Re("send", NN);
const MN = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], ON = Re("settings", MN);
const LN = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
], jN = Re("share-2", LN);
const AN = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], UN = Re("shield-check", AN);
const zN = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
], PN = Re("shield", zN);
const IN = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
], FN = Re("square-pen", IN);
const VN = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], HN = Re("star", VN);
const $N = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], BN = Re("target", $N);
const qN = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], WN = Re("timer", qN);
const YN = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Ty = Re("trash-2", YN);
const GN = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
], QN = Re("trending-down", GN);
const KN = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
], XN = Re("trending-up", KN);
const JN = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], ZN = Re("triangle-alert", JN);
const eD = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], tD = Re("upload", eD);
const nD = [
  ["path", { d: "m16 11 2 2 4-4", key: "9rsbq5" }],
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
], rD = Re("user-check", nD);
const aD = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
], oD = Re("user-plus", aD);
const iD = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], lD = Re("user", iD);
const uD = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
], sD = Re("users", uD);
const cD = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
], fD = Re("workflow", cD);
const dD = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], pD = Re("x", dD);
const vD = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
], hD = Re("zap", vD), mD = "_card_17b4s_1", yD = "_sources_17b4s_11", gD = "_sourcesHeader_17b4s_17", _D = "_sourcesList_17b4s_26", SD = "_sourceItem_17b4s_32", CD = "_sourceIndex_17b4s_45", ED = "_sourceTitle_17b4s_51", xD = "_sourceName_17b4s_55", wD = "_header_17b4s_60", bD = "_headerTitle_17b4s_60", RD = "_headerSubtitle_17b4s_65", kD = "_textContent_17b4s_70", TD = "_button_17b4s_93", ND = "_primary_17b4s_106", DD = "_secondary_17b4s_117", MD = "_ghost_17b4s_125", OD = "_selected_17b4s_136", LD = "_buttonGroup_17b4s_146", jD = "_horizontal_17b4s_150", AD = "_vertical_17b4s_153", UD = "_form_17b4s_157", zD = "_formField_17b4s_163", PD = "_fieldLabel_17b4s_168", ID = "_fieldHint_17b4s_173", FD = "_input_17b4s_178", VD = "_textarea_17b4s_179", HD = "_select_17b4s_136", $D = "_error_17b4s_202", BD = "_checkboxWrapper_17b4s_222", qD = "_radioWrapper_17b4s_223", WD = "_radioGroup_17b4s_243", YD = "_checkboxGroup_17b4s_249", GD = "_list_17b4s_255", QD = "_listHeading_17b4s_255", KD = "_listItems_17b4s_263", XD = "_listItem_17b4s_263", JD = "_listItemIcon_17b4s_283", ZD = "_listItemContent_17b4s_293", eM = "_listItemTitle_17b4s_296", tM = "_listItemSubtitle_17b4s_302", nM = "_listItemAction_17b4s_307", rM = "_actionButton_17b4s_307", aM = "_stats_17b4s_326", oM = "_statsNumber_17b4s_329", iM = "_statsLabel_17b4s_335", lM = "_profileTile_17b4s_341", uM = "_profileIcon_17b4s_346", sM = "_profileContent_17b4s_356", cM = "_profileTitle_17b4s_356", fM = "_profileLabel_17b4s_362", dM = "_miniCard_17b4s_368", pM = "_miniCardBlock_17b4s_378", vM = "_steps_17b4s_384", hM = "_stepsItem_17b4s_401", mM = "_stepsTitle_17b4s_416", yM = "_stepsDetails_17b4s_422", gM = "_sectionBlock_17b4s_427", _M = "_section_17b4s_427", SM = "_expanded_17b4s_438", CM = "_sectionTrigger_17b4s_438", EM = "_triggerIcon_17b4s_459", xM = "_rotated_17b4s_462", wM = "_sectionContent_17b4s_466", bM = "_icon_17b4s_473", RM = "_streamingContainer_17b4s_479", kM = "_streamingIndicator_17b4s_484", TM = "_pulse_17b4s_1", NM = "_skeletonLoader_17b4s_496", DM = "_skeletonShimmer_17b4s_511", MM = "_shimmer_17b4s_1", Ue = {
  card: mD,
  sources: yD,
  sourcesHeader: gD,
  sourcesList: _D,
  sourceItem: SD,
  sourceIndex: CD,
  sourceTitle: ED,
  sourceName: xD,
  header: wD,
  headerTitle: bD,
  headerSubtitle: RD,
  textContent: kD,
  button: TD,
  primary: ND,
  secondary: DD,
  ghost: MD,
  selected: OD,
  buttonGroup: LD,
  horizontal: jD,
  vertical: AD,
  form: UD,
  formField: zD,
  fieldLabel: PD,
  fieldHint: ID,
  input: FD,
  textarea: VD,
  select: HD,
  error: $D,
  checkboxWrapper: BD,
  radioWrapper: qD,
  radioGroup: WD,
  checkboxGroup: YD,
  list: GD,
  listHeading: QD,
  listItems: KD,
  listItem: XD,
  listItemIcon: JD,
  listItemContent: ZD,
  listItemTitle: eM,
  listItemSubtitle: tM,
  listItemAction: nM,
  actionButton: rM,
  stats: aM,
  statsNumber: oM,
  statsLabel: iM,
  profileTile: lM,
  profileIcon: uM,
  profileContent: sM,
  profileTitle: cM,
  profileLabel: fM,
  miniCard: dM,
  miniCardBlock: pM,
  steps: vM,
  stepsItem: hM,
  stepsTitle: mM,
  stepsDetails: yM,
  sectionBlock: gM,
  section: _M,
  expanded: SM,
  sectionTrigger: CM,
  triggerIcon: EM,
  rotated: xM,
  sectionContent: wM,
  icon: bM,
  streamingContainer: RM,
  streamingIndicator: kM,
  pulse: TM,
  skeletonLoader: NM,
  skeletonShimmer: DM,
  shimmer: MM
}, OM = {
  // Arrows & Navigation
  target: BN,
  "arrow-right": i4,
  "arrow-left": a4,
  "arrow-up": u4,
  "arrow-down": n4,
  "chevron-down": HE,
  "chevron-right": I4,
  "chevron-left": z4,
  "chevron-up": V4,
  repeat: EN,
  "refresh-cw": SN,
  "rotate-cw": RN,
  navigation: lN,
  compass: t5,
  // Multimedia
  play: mN,
  pause: fN,
  // Text & Lists
  "list-checks": q5,
  // Development
  workflow: fD,
  // Time
  timer: WN,
  clock: X4,
  calendar: w4,
  // Shopping & Business
  boxes: g4,
  briefcase: S4,
  building: E4,
  // Math & Charts
  infinity: A5,
  plus: gN,
  minus: oN,
  "line-chart": T4,
  "bar-chart": D4,
  "pie-chart": O4,
  "trending-up": XN,
  "trending-down": QN,
  activity: e4,
  // Actions
  check: j4,
  x: pD,
  edit: FN,
  trash: Ty,
  copy: r5,
  share: jN,
  "external-link": s5,
  search: TN,
  filter: b5,
  settings: ON,
  download: l5,
  upload: tD,
  send: DN,
  zap: hD,
  // Users
  user: lD,
  users: sD,
  "user-plus": oD,
  "user-check": rD,
  // Communication
  mail: X5,
  phone: vN,
  "message-circle": tN,
  "message-square": rN,
  bell: v4,
  "bell-off": d4,
  // Status & Favorites
  star: HN,
  heart: M5,
  bookmark: m4,
  flag: _5,
  award: c4,
  gift: k5,
  crown: o5,
  // Info & Alerts
  "help-circle": Y4,
  info: z5,
  "alert-circle": $4,
  "alert-triangle": ZN,
  "check-circle": q4,
  "x-circle": Q4,
  // View
  eye: p5,
  "eye-off": f5,
  // Security
  lock: Q5,
  unlock: Y5,
  key: I5,
  shield: PN,
  "shield-check": UN,
  // Links & Files
  link: $5,
  paperclip: sN,
  "file-text": h5,
  file: y5,
  folder: x5,
  "folder-open": C5,
  // Location
  home: L5,
  "map-pin": Z5,
  globe: N5,
  // Transportation
  car: R4,
  // Ideas & Energy
  lightbulb: V5,
  rocket: wN,
  coffee: Z4
}, $E = ({ name: c, size: p = 18 }) => {
  const d = OM[c.toLowerCase()];
  return d ? /* @__PURE__ */ k.jsx("span", { className: Ue.icon, children: /* @__PURE__ */ k.jsx(d, { size: p }) }) : (console.warn(`Icon "${c}" not found in registry`), /* @__PURE__ */ k.jsx("span", { className: Ue.icon, style: { width: p, height: p }, children: "•" }));
}, LM = ({ title: c, subtitle: p }) => /* @__PURE__ */ k.jsxs("div", { className: Ue.header, children: [
  /* @__PURE__ */ k.jsx("h3", { className: Ue.headerTitle, children: c }),
  p && /* @__PURE__ */ k.jsx("p", { className: Ue.headerSubtitle, children: p })
] });
function jM(c) {
  return c.split(/\n\n+/).map((d, g) => {
    let x = d;
    const C = /\*\*(.*?)\*\*/g, h = d.split(C);
    h.length > 1 && (x = h.map((R, b) => b % 2 === 1 ? /* @__PURE__ */ k.jsx("strong", { children: R }, b) : R));
    const w = /`(.*?)`/g;
    return typeof x == "string" && x.match(w) && (x = x.split(w).map((b, D) => D % 2 === 1 ? /* @__PURE__ */ k.jsx("code", { children: b }, D) : b)), /* @__PURE__ */ k.jsx("p", { children: x }, g);
  });
}
const AM = ({ textMarkdown: c }) => /* @__PURE__ */ k.jsx("div", { className: Ue.textContent, children: jM(c) }), UM = ({
  children: c,
  name: p,
  variant: d = "primary",
  disabled: g = !1,
  selected: x = !1,
  action: C,
  onAction: h
}) => {
  const w = () => {
    C && h && h(C);
  }, R = ["submit", "save", "confirm", "set", "create", "send", "apply"], b = (p || "").toLowerCase(), D = (typeof c == "string" ? c : "").toLowerCase(), A = C?.type === "submit_form" || R.some((H) => b.includes(H)) || R.some((H) => D.includes(H)), V = [
    Ue.button,
    Ue[d],
    x ? Ue.selected : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ k.jsx(
    "button",
    {
      className: V,
      disabled: g,
      onClick: w,
      type: A ? "submit" : "button",
      children: c
    }
  );
}, zM = ({
  variant: c = "horizontal",
  children: p,
  renderComponent: d
}) => /* @__PURE__ */ k.jsx("div", { className: `${Ue.buttonGroup} ${Ue[c]}`, children: p.map((g, x) => /* @__PURE__ */ k.jsx(La.Fragment, { children: d(g) }, x)) }), PM = ({ children: c, sources: p, renderComponent: d }) => !c || !Array.isArray(c) ? /* @__PURE__ */ k.jsx("div", { className: Ue.card }) : /* @__PURE__ */ k.jsxs("div", { className: Ue.card, children: [
  c.map((g, x) => /* @__PURE__ */ k.jsx(La.Fragment, { children: d(g) }, x)),
  p && p.length > 0 && /* @__PURE__ */ k.jsxs("div", { className: Ue.sources, children: [
    /* @__PURE__ */ k.jsx("div", { className: Ue.sourcesHeader, children: "Sources" }),
    /* @__PURE__ */ k.jsx("div", { className: Ue.sourcesList, children: p.map((g, x) => /* @__PURE__ */ k.jsxs(
      "a",
      {
        href: g.url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: Ue.sourceItem,
        children: [
          /* @__PURE__ */ k.jsxs("span", { className: Ue.sourceIndex, children: [
            "[",
            x + 1,
            "]"
          ] }),
          /* @__PURE__ */ k.jsx("span", { className: Ue.sourceTitle, children: g.title }),
          g.sourceName && /* @__PURE__ */ k.jsxs("span", { className: Ue.sourceName, children: [
            " - ",
            g.sourceName
          ] })
        ]
      },
      x
    )) })
  ] })
] }), IM = ({ heading: c, items: p, onAction: d }) => /* @__PURE__ */ k.jsxs("div", { className: Ue.list, children: [
  c && /* @__PURE__ */ k.jsx("h4", { className: Ue.listHeading, children: c }),
  /* @__PURE__ */ k.jsx("div", { className: Ue.listItems, children: p.map((g, x) => /* @__PURE__ */ k.jsxs("div", { className: Ue.listItem, children: [
    g.iconName && /* @__PURE__ */ k.jsx("div", { className: Ue.listItemIcon, children: /* @__PURE__ */ k.jsx($E, { name: g.iconName, size: 18 }) }),
    /* @__PURE__ */ k.jsxs("div", { className: Ue.listItemContent, children: [
      /* @__PURE__ */ k.jsx("p", { className: Ue.listItemTitle, children: g.title }),
      g.subtitle && /* @__PURE__ */ k.jsx("p", { className: Ue.listItemSubtitle, children: g.subtitle })
    ] }),
    g.itemAction && /* @__PURE__ */ k.jsx("div", { className: Ue.listItemAction, children: /* @__PURE__ */ k.jsx(
      "button",
      {
        className: Ue.actionButton,
        onClick: () => d?.(g.itemAction.action),
        children: g.itemAction.label
      }
    ) })
  ] }, x)) })
] }), FM = ({ number: c, label: p }) => /* @__PURE__ */ k.jsxs("div", { className: Ue.stats, children: [
  /* @__PURE__ */ k.jsx("p", { className: Ue.statsNumber, children: c }),
  /* @__PURE__ */ k.jsx("p", { className: Ue.statsLabel, children: p })
] }), VM = ({
  title: c,
  label: p,
  child: d,
  renderComponent: g
}) => /* @__PURE__ */ k.jsxs("div", { className: Ue.profileTile, children: [
  d && /* @__PURE__ */ k.jsx("div", { className: Ue.profileIcon, children: g(d) }),
  /* @__PURE__ */ k.jsxs("div", { className: Ue.profileContent, children: [
    /* @__PURE__ */ k.jsx("p", { className: Ue.profileTitle, children: c }),
    p && /* @__PURE__ */ k.jsx("p", { className: Ue.profileLabel, children: p })
  ] })
] }), HM = ({
  lhs: c,
  rhs: p,
  renderComponent: d
}) => /* @__PURE__ */ k.jsxs("div", { className: Ue.miniCard, children: [
  /* @__PURE__ */ k.jsx("div", { className: Ue.miniCardLhs, children: d(c) }),
  p && /* @__PURE__ */ k.jsx("div", { className: Ue.miniCardRhs, children: d(p) })
] }), $M = ({
  children: c,
  renderComponent: p
}) => /* @__PURE__ */ k.jsx("div", { className: Ue.miniCardBlock, children: c.map((d, g) => /* @__PURE__ */ k.jsx(La.Fragment, { children: p(d) }, g)) }), BM = ({
  title: c,
  details: p,
  renderComponent: d
}) => /* @__PURE__ */ k.jsxs("div", { className: Ue.stepsItem, children: [
  /* @__PURE__ */ k.jsx("h4", { className: Ue.stepsTitle, children: c }),
  p && /* @__PURE__ */ k.jsx("div", { className: Ue.stepsDetails, children: d(p) })
] }), qM = ({
  children: c,
  renderComponent: p
}) => /* @__PURE__ */ k.jsx("div", { className: Ue.steps, children: c.map((d, g) => /* @__PURE__ */ k.jsx(La.Fragment, { children: p(d) }, g)) }), WM = ({
  isFoldable: c = !0,
  sections: p,
  renderComponent: d
}) => {
  const [g, x] = Te.useState(
    // If not foldable, expand all sections by default
    new Set(c ? [] : p.map((h) => h.value))
  ), C = (h) => {
    c && x((w) => {
      const R = new Set(w);
      return R.has(h) ? R.delete(h) : R.add(h), R;
    });
  };
  return /* @__PURE__ */ k.jsx("div", { className: Ue.sectionBlock, children: p.map((h) => {
    const w = g.has(h.value);
    return /* @__PURE__ */ k.jsxs(
      "div",
      {
        className: `${Ue.section} ${w ? Ue.expanded : ""}`,
        children: [
          /* @__PURE__ */ k.jsxs(
            "button",
            {
              className: Ue.sectionTrigger,
              onClick: () => C(h.value),
              type: "button",
              children: [
                /* @__PURE__ */ k.jsx("span", { children: h.trigger }),
                c && /* @__PURE__ */ k.jsx("span", { className: `${Ue.triggerIcon} ${w ? Ue.rotated : ""}`, children: /* @__PURE__ */ k.jsx(HE, { size: 16 }) })
              ]
            }
          ),
          (w || !c) && /* @__PURE__ */ k.jsx("div", { className: Ue.sectionContent, children: h.content.map((R, b) => /* @__PURE__ */ k.jsx(La.Fragment, { children: d(R) }, b)) })
        ]
      },
      h.value
    );
  }) });
}, YM = ({
  name: c,
  placeholder: p,
  value: d = "",
  type: g = "text",
  rules: x,
  onChange: C
}) => {
  const [h, w] = Te.useState(d), [R, b] = Te.useState(null), D = (A) => {
    const V = A.target.value;
    w(V), x?.required && !V ? b("This field is required") : x?.minLength && V.length < x.minLength ? b(`Minimum ${x.minLength} characters required`) : b(null), C?.(c, V);
  };
  return /* @__PURE__ */ k.jsx(
    "input",
    {
      type: g,
      name: c,
      placeholder: p,
      value: h,
      onChange: D,
      className: `${Ue.input} ${R ? Ue.error : ""}`
    }
  );
}, GM = ({
  name: c,
  placeholder: p,
  value: d = "",
  rows: g = 3,
  rules: x,
  onChange: C
}) => {
  const [h, w] = Te.useState(d), [R, b] = Te.useState(null), D = (A) => {
    const V = A.target.value;
    w(V), x?.required && !V ? b("This field is required") : x?.minLength && V.length < x.minLength ? b(`Minimum ${x.minLength} characters required`) : b(null), C?.(c, V);
  };
  return /* @__PURE__ */ k.jsx(
    "textarea",
    {
      name: c,
      placeholder: p,
      value: h,
      rows: g,
      onChange: D,
      className: `${Ue.textarea} ${R ? Ue.error : ""}`
    }
  );
}, QM = ({
  name: c,
  placeholder: p,
  value: d = "",
  options: g = [],
  onChange: x
}) => {
  const [C, h] = Te.useState(d), w = (b) => {
    const D = b.target.value;
    h(D), x?.(c, D);
  }, R = g && Array.isArray(g) ? g : [];
  return /* @__PURE__ */ k.jsxs(
    "select",
    {
      name: c,
      value: C,
      onChange: w,
      className: Ue.select,
      children: [
        p && /* @__PURE__ */ k.jsx("option", { value: "", children: p }),
        R.map((b) => /* @__PURE__ */ k.jsx("option", { value: b.value, children: b.label }, b.value))
      ]
    }
  );
}, KM = ({
  name: c,
  label: p,
  checked: d = !1,
  onChange: g
}) => {
  const [x, C] = Te.useState(d), h = (w) => {
    const R = w.target.checked;
    C(R), g?.(c, R);
  };
  return /* @__PURE__ */ k.jsxs("div", { className: Ue.checkboxWrapper, children: [
    /* @__PURE__ */ k.jsx(
      "input",
      {
        type: "checkbox",
        id: c,
        name: c,
        checked: x,
        onChange: h
      }
    ),
    /* @__PURE__ */ k.jsx("label", { htmlFor: c, children: p })
  ] });
}, XM = ({
  name: c,
  options: p = [],
  value: d = "",
  onChange: g
}) => {
  const [x, C] = Te.useState(d), h = (w) => {
    const R = w.target.value;
    C(R), g?.(c, R);
  };
  return !p || !Array.isArray(p) || p.length === 0 ? /* @__PURE__ */ k.jsx("div", { className: Ue.radioGroup, children: "No options available" }) : /* @__PURE__ */ k.jsx("div", { className: Ue.radioGroup, children: p.map((w) => /* @__PURE__ */ k.jsxs("div", { className: Ue.radioWrapper, children: [
    /* @__PURE__ */ k.jsx(
      "input",
      {
        type: "radio",
        id: `${c}-${w.value}`,
        name: c,
        value: w.value,
        checked: x === w.value,
        onChange: h
      }
    ),
    /* @__PURE__ */ k.jsx("label", { htmlFor: `${c}-${w.value}`, children: w.label })
  ] }, w.value)) });
}, JM = ({
  name: c,
  options: p = [],
  values: d = [],
  onChange: g
}) => {
  const [x, C] = Te.useState(d), h = (w, R) => {
    const b = R ? [...x, w] : x.filter((D) => D !== w);
    C(b), g?.(c, b);
  };
  return !p || !Array.isArray(p) || p.length === 0 ? /* @__PURE__ */ k.jsx("div", { className: Ue.checkboxGroup, children: "No options available" }) : /* @__PURE__ */ k.jsx("div", { className: Ue.checkboxGroup, children: p.map((w) => /* @__PURE__ */ k.jsxs("div", { className: Ue.checkboxWrapper, children: [
    /* @__PURE__ */ k.jsx(
      "input",
      {
        type: "checkbox",
        id: `${c}-${w.value}`,
        name: c,
        value: w.value,
        checked: x.includes(w.value),
        onChange: (R) => h(w.value, R.target.checked)
      }
    ),
    /* @__PURE__ */ k.jsx("label", { htmlFor: `${c}-${w.value}`, children: w.label })
  ] }, w.value)) });
}, ZM = ({
  name: c,
  placeholder: p,
  value: d = "",
  min: g,
  max: x,
  onChange: C
}) => {
  const [h, w] = Te.useState(d), R = (b) => {
    const D = b.target.value;
    w(D), C?.(c, D);
  };
  return /* @__PURE__ */ k.jsx(
    "input",
    {
      type: "date",
      name: c,
      placeholder: p,
      value: h,
      min: g,
      max: x,
      onChange: R,
      className: Ue.input
    }
  );
}, eO = ({
  label: c,
  hint: p,
  children: d,
  renderComponent: g
}) => /* @__PURE__ */ k.jsxs("div", { className: Ue.formField, children: [
  c && /* @__PURE__ */ k.jsx("label", { className: Ue.fieldLabel, children: c }),
  g(d),
  p && /* @__PURE__ */ k.jsx("span", { className: Ue.fieldHint, children: p })
] }), tO = ({
  name: c,
  children: p,
  buttons: d,
  onAction: g,
  renderComponent: x
}) => {
  const [C, h] = Te.useState({}), w = Te.useCallback((b, D) => {
    h((A) => ({ ...A, [b]: D }));
  }, []), R = (b) => {
    b.preventDefault(), g ? g({ type: "submit_form", props: { formName: c, formData: C } }, C) : console.warn("Form onAction is not defined");
  };
  return /* @__PURE__ */ k.jsxs("form", { className: Ue.form, onSubmit: R, name: c, children: [
    p.map((b, D) => /* @__PURE__ */ k.jsx(
      eO,
      {
        label: b.label,
        hint: b.hint,
        children: {
          ...b.children,
          props: {
            ...b.children.props,
            onChange: w
          }
        },
        renderComponent: x
      },
      D
    )),
    d && x(d)
  ] });
}, nO = ({
  name: c = "radio",
  value: p,
  label: d,
  checked: g = !1,
  onChange: x
}) => {
  const [C, h] = Te.useState(g), w = (R) => {
    const b = R.target.checked;
    h(b), b && x && x(c, p);
  };
  return /* @__PURE__ */ k.jsxs("div", { className: Ue.radioWrapper, children: [
    /* @__PURE__ */ k.jsx(
      "input",
      {
        type: "radio",
        id: `${c}-${p}`,
        name: c,
        value: p,
        checked: C,
        onChange: w
      }
    ),
    /* @__PURE__ */ k.jsx("label", { htmlFor: `${c}-${p}`, children: d })
  ] });
}, rO = ({
  name: c = "checkbox",
  value: p,
  label: d,
  checked: g = !1,
  onChange: x
}) => {
  const [C, h] = Te.useState(g), w = (R) => {
    const b = R.target.checked;
    h(b), x && x(c, p, b);
  };
  return /* @__PURE__ */ k.jsxs("div", { className: Ue.checkboxWrapper, children: [
    /* @__PURE__ */ k.jsx(
      "input",
      {
        type: "checkbox",
        id: `${c}-${p}`,
        name: c,
        value: p,
        checked: C,
        onChange: w
      }
    ),
    /* @__PURE__ */ k.jsx("label", { htmlFor: `${c}-${p}`, children: d })
  ] });
}, BE = ({
  component: c,
  onAction: p
}) => {
  const d = Te.useCallback((g) => {
    if (!g || !g.component)
      return console.warn("Invalid component definition:", g), null;
    const { component: x, props: C } = g, h = { ...C, onAction: p };
    switch (x) {
      // Basic Components
      case "Icon":
        return /* @__PURE__ */ k.jsx($E, { ...h });
      case "Header":
        return /* @__PURE__ */ k.jsx(LM, { ...h });
      case "TextContent":
        return /* @__PURE__ */ k.jsx(AM, { ...h });
      // Button Components
      case "Button":
        return /* @__PURE__ */ k.jsx(UM, { ...h });
      case "ButtonGroup":
        return /* @__PURE__ */ k.jsx(
          zM,
          {
            ...h,
            renderComponent: d
          }
        );
      // Layout Components
      case "Card":
        return /* @__PURE__ */ k.jsx(
          PM,
          {
            ...h,
            renderComponent: d
          }
        );
      // List Component
      case "List":
        return /* @__PURE__ */ k.jsx(IM, { ...h });
      // Stats Component
      case "Stats":
        return /* @__PURE__ */ k.jsx(FM, { ...h });
      // ProfileTile Component
      case "ProfileTile":
        return /* @__PURE__ */ k.jsx(
          VM,
          {
            ...h,
            renderComponent: d
          }
        );
      // MiniCard Components
      case "MiniCard":
        return /* @__PURE__ */ k.jsx(
          HM,
          {
            ...h,
            renderComponent: d
          }
        );
      case "MiniCardBlock":
        return /* @__PURE__ */ k.jsx(
          $M,
          {
            ...h,
            renderComponent: d
          }
        );
      // Steps Components
      case "Steps":
        return /* @__PURE__ */ k.jsx(
          qM,
          {
            ...h,
            renderComponent: d
          }
        );
      case "StepsItem":
        return /* @__PURE__ */ k.jsx(
          BM,
          {
            ...h,
            renderComponent: d
          }
        );
      // Section Components
      case "SectionBlock":
        return /* @__PURE__ */ k.jsx(
          WM,
          {
            ...h,
            renderComponent: d
          }
        );
      // Form Components
      case "Form":
        return /* @__PURE__ */ k.jsx(
          tO,
          {
            ...h,
            renderComponent: d
          }
        );
      case "Input":
        return /* @__PURE__ */ k.jsx(YM, { ...h });
      case "TextArea":
        return /* @__PURE__ */ k.jsx(GM, { ...h });
      case "Select":
        return /* @__PURE__ */ k.jsx(QM, { ...h });
      case "Checkbox":
        return /* @__PURE__ */ k.jsx(KM, { ...h });
      case "RadioGroup":
        return /* @__PURE__ */ k.jsx(XM, { ...h });
      case "CheckBoxGroup":
        return /* @__PURE__ */ k.jsx(JM, { ...h });
      case "DatePicker":
        return /* @__PURE__ */ k.jsx(ZM, { ...h });
      case "RadioItem":
        return /* @__PURE__ */ k.jsx(nO, { ...h });
      case "CheckBoxItem":
        return /* @__PURE__ */ k.jsx(rO, { ...h });
      default:
        return console.warn(`Unknown component: ${x}`), /* @__PURE__ */ k.jsxs("div", { style: {
          padding: "8px",
          background: "rgba(255,0,0,0.1)",
          borderRadius: "4px",
          fontSize: "12px",
          color: "#ff6b6b"
        }, children: [
          "Unknown component: ",
          x
        ] });
    }
  }, [p]);
  return /* @__PURE__ */ k.jsx(k.Fragment, { children: d(c) });
};
function qE(c) {
  try {
    const p = c.indexOf('<content thesys="true">');
    if (p === -1)
      return fE(c);
    const d = c.substring(p + 23), g = d.indexOf("</content>");
    let x = g !== -1 ? d.substring(0, g).trim() : d.trim();
    x = x.replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39;/g, "'").replace(/&apos;/g, "'");
    try {
      const C = JSON.parse(x);
      if (C.component)
        return C;
    } catch {
      return aO(x);
    }
    return fE(c);
  } catch (p) {
    return console.error("parseStreamingGenUI - Error:", p), null;
  }
}
function aO(c) {
  let p = null, d = -1, g = -1;
  const x = /"component"\s*:\s*"([^"]+)"/g;
  let C;
  for (; (C = x.exec(c)) !== null; ) {
    const h = c.substring(0, C.index), w = (h.match(/\{/g) || []).length - (h.match(/\}/g) || []).length;
    w >= 1 && w > g && (p = C, d = C.index, g = w);
  }
  if (p && p[1]) {
    const h = p[1], R = c.substring(d + p[0].length).match(/"props"\s*:\s*\{([\s\S]*?)(\}|$)/);
    let b = {};
    if (R && R[1]) {
      const D = R[1], A = /"([^"]+)"\s*:\s*"([^"]*)"|"([^"]+)"\s*:\s*(\d+|true|false|null)/g;
      let V;
      for (; (V = A.exec(D)) !== null; ) {
        const H = V[1] || V[3], ae = V[2] || V[4];
        H && (b[H] = ae === "true" ? !0 : ae === "false" ? !1 : ae === "null" ? null : ae);
      }
      D.includes('"children"') && D.includes("[") && (b.children = []);
    }
    return {
      component: {
        component: h,
        props: b
      },
      error: null
    };
  }
  return null;
}
function fE(c) {
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
const oO = ({
  content: c,
  isStreaming: p,
  onAction: d
}) => {
  const [g, x] = Te.useState(null);
  return Te.useEffect(() => {
    if (!c) {
      x(null);
      return;
    }
    const C = qE(c);
    if (C?.component) {
      const h = C.component;
      if (h && typeof h == "object" && "component" in h) {
        const w = h.component, R = h.props || {};
        typeof w == "string" ? x({
          component: w,
          props: R
        }) : w && typeof w == "object" && "component" in w && x(w);
      }
    }
  }, [c]), g ? /* @__PURE__ */ k.jsxs("div", { className: Ue.streamingContainer, children: [
    p && /* @__PURE__ */ k.jsx("div", { className: Ue.streamingIndicator, children: /* @__PURE__ */ k.jsx("span", { children: "Building interface..." }) }),
    /* @__PURE__ */ k.jsx(BE, { component: g, onAction: d })
  ] }) : p ? /* @__PURE__ */ k.jsx("div", { className: Ue.streamingContainer, children: /* @__PURE__ */ k.jsxs("div", { className: Ue.skeletonLoader, children: [
    /* @__PURE__ */ k.jsx("div", { className: Ue.skeletonShimmer }),
    /* @__PURE__ */ k.jsx("span", { children: "Generating interface..." })
  ] }) }) : null;
};
function iO(c) {
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
function lO(c) {
  try {
    const p = c.match(/<content\s+thesys="true">([\s\S]*?)<\/content>/);
    if (p && p[1]) {
      const d = iO(p[1].trim());
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
function uO(c) {
  return !!(c.includes('<content thesys="true">') || c.trim().startsWith("{") && c.includes('"component"'));
}
function sO(c) {
  const p = c.indexOf('<content thesys="true">');
  return p > 0 ? c.substring(0, p).trim() : "";
}
const cO = ({
  message: c,
  onAction: p,
  onUpdateMessage: d
}) => {
  const g = c.role === "user", x = c.role === "assistant", C = Te.useMemo(() => c.content ? uO(c.content) : !1, [c.content]), h = Te.useMemo(() => {
    if (!c.content) return null;
    if (C) {
      if (c.isStreaming) {
        const D = qE(c.content);
        return D?.component ? D : null;
      }
      return lO(c.content);
    }
    return null;
  }, [c.content, c.isStreaming, C]), w = Te.useMemo(() => c.content ? sO(c.content) : "", [c.content]), R = Te.useCallback((D, A) => {
    if (!p) return;
    const V = {
      type: D.type,
      params: {
        ...D.props,
        formData: A
      }
    };
    console.log("event", V), console.log("formData", A), p(V);
  }, [p]), b = () => C ? /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
    w && /* @__PURE__ */ k.jsx("div", { className: vl.textContent, children: w }),
    /* @__PURE__ */ k.jsx(
      oO,
      {
        content: c.content,
        isStreaming: c.isStreaming || !1,
        onAction: R
      }
    )
  ] }) : h?.component ? /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
    w && /* @__PURE__ */ k.jsx("div", { className: vl.textContent, children: w }),
    /* @__PURE__ */ k.jsx(
      BE,
      {
        component: h.component,
        onAction: R
      }
    )
  ] }) : /* @__PURE__ */ k.jsx("div", { className: vl.textContent, children: c.content || (c.isStreaming ? "" : "No response") });
  return /* @__PURE__ */ k.jsx(
    "div",
    {
      className: `${vl.messageContainer} ${g ? vl.user : vl.assistant}`,
      children: g ? /* @__PURE__ */ k.jsx("div", { className: vl.userMessage, children: /* @__PURE__ */ k.jsx("p", { children: c.content }) }) : x ? /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
        /* @__PURE__ */ k.jsx("div", { className: vl.assistantAvatar, children: /* @__PURE__ */ k.jsx("img", { src: p_, alt: "Orbiter" }) }),
        /* @__PURE__ */ k.jsxs("div", { className: vl.assistantMessage, children: [
          c.isStreaming && !c.content && /* @__PURE__ */ k.jsxs("div", { className: vl.streamingIndicator, children: [
            /* @__PURE__ */ k.jsx("span", {}),
            /* @__PURE__ */ k.jsx("span", {}),
            /* @__PURE__ */ k.jsx("span", {})
          ] }),
          b()
        ] })
      ] }) : null
    }
  );
}, fO = "_overlay_271nu_1", dO = "_modal_271nu_21", pO = "_header_271nu_42", vO = "_closeButton_271nu_55", hO = "_selectedInfo_271nu_77", mO = "_inputGroup_271nu_99", yO = "_actions_271nu_130", gO = "_cancelBtn_271nu_136", _O = "_confirmBtn_271nu_137", su = {
  overlay: fO,
  modal: dO,
  header: pO,
  closeButton: vO,
  selectedInfo: hO,
  inputGroup: mO,
  actions: yO,
  cancelBtn: gO,
  confirmBtn: _O
}, SO = ({
  isOpen: c,
  onClose: p,
  humanFriendlyMessage: d,
  llmFriendlyMessage: g,
  onConfirm: x
}) => {
  const [C, h] = Te.useState(g);
  if (Te.useEffect(() => {
    h(g);
  }, [g]), Te.useEffect(() => {
    const R = (b) => {
      b.key === "Escape" && p();
    };
    if (c)
      return window.addEventListener("keydown", R), () => window.removeEventListener("keydown", R);
  }, [c, p]), !c) return null;
  const w = (R) => {
    R.preventDefault(), C.trim() && x(C.trim());
  };
  return /* @__PURE__ */ k.jsx("div", { className: su.overlay, onClick: p, children: /* @__PURE__ */ k.jsxs("div", { className: su.modal, onClick: (R) => R.stopPropagation(), children: [
    /* @__PURE__ */ k.jsxs("div", { className: su.header, children: [
      /* @__PURE__ */ k.jsx("h2", { children: "Edit Your Response" }),
      /* @__PURE__ */ k.jsx("button", { className: su.closeButton, onClick: p, children: /* @__PURE__ */ k.jsx(
        "svg",
        {
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          children: /* @__PURE__ */ k.jsx("path", { d: "M18 6L6 18M6 6l12 12" })
        }
      ) })
    ] }),
    /* @__PURE__ */ k.jsxs("form", { onSubmit: w, children: [
      /* @__PURE__ */ k.jsxs("div", { className: su.selectedInfo, children: [
        /* @__PURE__ */ k.jsx("label", { children: "Your Selection" }),
        /* @__PURE__ */ k.jsx("p", { children: d })
      ] }),
      /* @__PURE__ */ k.jsxs("div", { className: su.inputGroup, children: [
        /* @__PURE__ */ k.jsx("label", { htmlFor: "editMessage", children: "Edit message before sending:" }),
        /* @__PURE__ */ k.jsx(
          "textarea",
          {
            id: "editMessage",
            value: C,
            onChange: (R) => h(R.target.value),
            placeholder: "Edit your message...",
            rows: 4,
            autoFocus: !0
          }
        )
      ] }),
      /* @__PURE__ */ k.jsxs("div", { className: su.actions, children: [
        /* @__PURE__ */ k.jsx("button", { type: "button", className: su.cancelBtn, onClick: p, children: "Cancel" }),
        /* @__PURE__ */ k.jsx(
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
}, dE = {
  SUGGEST_PEOPLE: "create_suggestion_request",
  HELP_WITH_TASK: "add_assistant_message"
}, WE = (c, p) => ({
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
                  selected: p === dE.SUGGEST_PEOPLE,
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
                  selected: p === dE.HELP_WITH_TASK,
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
}), pE = (c) => ({
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
            textMarkdown: `${c.request_context}`
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
}), vE = (c) => `<content thesys="true">${JSON.stringify({ component: c, error: null })}</content>`, hE = () => `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, mE = (c, p, d, g) => {
  const { leverageLoopChats: x, selectedPerson: C } = ki.getState(), h = x[c];
  if (!h || !C) return;
  const w = h.messages.find(
    (R) => R.role === "assistant" && R.content.includes("ButtonGroup")
  );
  if (w) {
    const R = `<content thesys="true">${JSON.stringify(
      WE(C, p)
    )}</content>`;
    g(d, w.id, R, !1, c);
  }
}, CO = (c) => {
  const { sendMessage: p, setPendingAction: d, setIsModalOpen: g, context: x, addMessage: C, updateMessage: h } = c;
  return (w) => {
    switch (console.log("Action received:", w), w.type) {
      case "continue_conversation":
        if (w.params) {
          const { humanFriendlyMessage: R, llmFriendlyMessage: b, prompt: D } = w.params;
          D ? p(D) : R && b && (d({
            humanFriendlyMessage: R,
            llmFriendlyMessage: b
          }), g(!0));
        }
        break;
      case "open_url":
        w.params?.url && window.open(w.params.url, "_blank", "noopener,noreferrer");
        break;
      case "submit_form":
        if (w.params?.formData) {
          const R = w.params.formData, b = w.params.formName || "form", D = Object.entries(R).filter(([V, H]) => H !== void 0 && H !== "").map(([V, H]) => `${V.replace(/_/g, " ")}: ${H}`).join(`
`), A = `Form submitted: ${b}

${D}`;
          console.log("Sending form data to LLM:", A), p(A);
        }
        break;
      case "add_assistant_message":
        if (w.params?.content || w.params?.componentData) {
          const R = hE(), b = w.params.chatKey;
          b && (ki.getState().setSelectedAction(b, "add_assistant_message"), mE(b, "add_assistant_message", x, h));
          let D;
          w.params.componentData ? D = `<content thesys="true">${JSON.stringify(w.params.componentData)}</content>` : D = w.params.content, C(x, {
            id: R,
            role: "assistant",
            content: D,
            timestamp: /* @__PURE__ */ new Date(),
            isStreaming: !1
          }, b);
        }
        break;
      case "create_suggestion_request":
        if (w.params) {
          const { personName: R, personTitle: b, companyName: D, masterPersonId: A, chatKey: V } = w.params;
          V && (ki.getState().setSelectedAction(V, "create_suggestion_request"), mE(V, "create_suggestion_request", x, h));
          const { user_id: H } = jr.getState(), ae = {
            request_panel_title: `Suggestion Request for ${R}`,
            request_header_title: `People to introduce to ${R}`,
            request_context: `Find people from my network to introduce to ${R}, who is ${b} at ${D}`,
            status: "processing",
            user_id: H,
            copilot_mode: "loop",
            master_person_id: A
          }, ie = hE();
          C(x, {
            id: ie,
            role: "assistant",
            content: vE({
              component: "Card",
              props: {
                children: [{
                  component: "TextContent",
                  props: { textMarkdown: `⏳ Creating suggestion request for **${R}**...` }
                }]
              }
            }),
            timestamp: /* @__PURE__ */ new Date(),
            isStreaming: !1
          }, V), Rv.getState().createSuggestionRequest(ae).then(() => {
            const { createSuggestionRequestError: xe } = Rv.getState();
            if (xe) {
              const we = vE({
                component: "Card",
                props: {
                  children: [{
                    component: "TextContent",
                    props: { textMarkdown: `❌ Failed: ${xe}` }
                  }]
                }
              });
              h(x, ie, we, !1, V);
            }
            if (!xe) {
              const { setSelectedPerson: we, setSelectedSuggestionRequest: Ee } = ki.getState();
              we(null), Ee(null);
            }
          });
        }
        break;
      default:
        console.log("Unhandled action type:", w.type);
    }
  };
}, EO = {
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
}, xO = () => Object.entries(EO).filter(([c, p]) => p.allowed).map(([c]) => c), wO = () => `You can use these GenUI components: ${xO().join(", ")}. Do not use any other components. Keep the interface simple and avoid unnecessary complexity.`, bO = "_chatContainer_f97wk_1", RO = "_messagesContainer_f97wk_31", kO = "_emptyState_f97wk_50", TO = "_copilotEmptyState_f97wk_61", NO = "_logo_f97wk_70", DO = "_welcomeMessage_f97wk_77", MO = "_welcomeGreeting_f97wk_83", OO = "_welcomeSubtext_f97wk_93", LO = "_leverageLoopSummary_f97wk_114", jO = "_summaryCard_f97wk_119", AO = "_summaryCardHeader_f97wk_130", UO = "_summaryCardTitle_f97wk_137", zO = "_summaryCardInput_f97wk_157", PO = "_summaryTextarea_f97wk_162", IO = "_summaryCardButton_f97wk_184", FO = "_playIcon_f97wk_212", Dn = {
  chatContainer: bO,
  messagesContainer: RO,
  emptyState: kO,
  copilotEmptyState: TO,
  logo: NO,
  welcomeMessage: DO,
  welcomeGreeting: MO,
  welcomeSubtext: OO,
  leverageLoopSummary: LO,
  summaryCard: jO,
  summaryCardHeader: AO,
  summaryCardTitle: UO,
  summaryCardInput: zO,
  summaryTextarea: PO,
  summaryCardButton: IO,
  playIcon: FO
}, VO = ({
  onSendMessage: c,
  isLoading: p
}) => {
  const [d, g] = Te.useState(""), { selectedPerson: x, selectedSuggestionRequest: C, leverageLoopSummaries: h, upsertLeverageLoopSummary: w } = ki(
    Jo((A) => ({
      selectedPerson: A.selectedPerson,
      selectedSuggestionRequest: A.selectedSuggestionRequest,
      leverageLoopSummaries: A.leverageLoopSummaries,
      upsertLeverageLoopSummary: A.upsertLeverageLoopSummary
    }))
  );
  Te.useEffect(() => {
    let A = null;
    if (x ? A = x.full_name : C && (A = C.request_header_title), A) {
      const V = h.find((H) => H.id === A);
      g(V?.content || "");
    } else
      g("");
  }, [x, C, h]);
  const R = () => x ? `Leverage loop summary for ${x.full_name}` : C ? C.request_header_title : "Leverage Loops", b = () => {
    d.trim() && (c(d.trim()), g(""));
  }, D = (A) => {
    g(A.target.value), x && w({ id: x.full_name, content: A.target.value, timestamp: /* @__PURE__ */ new Date() }), C && w({ id: C.request_header_title, content: A.target.value, timestamp: /* @__PURE__ */ new Date() });
  };
  return /* @__PURE__ */ k.jsx("div", { className: Dn.leverageLoopSummary, children: /* @__PURE__ */ k.jsxs("div", { className: Dn.summaryCard, children: [
    /* @__PURE__ */ k.jsxs("div", { className: Dn.summaryCardHeader, children: [
      /* @__PURE__ */ k.jsx("p", { className: Dn.summaryCardTitle, children: R() }),
      /* @__PURE__ */ k.jsx(
        "button",
        {
          className: Dn.summaryCardButton,
          onClick: b,
          disabled: !d.trim() || p,
          children: /* @__PURE__ */ k.jsx("span", { className: Dn.playIcon, children: "▶" })
        }
      )
    ] }),
    /* @__PURE__ */ k.jsx("div", { className: Dn.summaryCardInput, children: /* @__PURE__ */ k.jsx(
      "textarea",
      {
        className: Dn.summaryTextarea,
        placeholder: "Summary of what I can help you with...",
        value: d,
        onChange: (A) => D(A),
        rows: 2
      }
    ) })
  ] }) });
}, HO = ({
  onSendMessage: c,
  isLoading: p
}) => {
  const [d, g] = Te.useState(""), { selectedSuggestionRequest: x, outcomesSummaries: C, upsertOutcomesSummary: h } = ki(
    Jo((D) => ({
      selectedSuggestionRequest: D.selectedSuggestionRequest,
      outcomesSummaries: D.outcomesSummaries,
      upsertOutcomesSummary: D.upsertOutcomesSummary
    }))
  );
  Te.useEffect(() => {
    let D = "outcomes-summary";
    if (x && (D = x.request_panel_title || x.request_header_title), D) {
      const A = C.find((V) => V.id === D);
      g(A?.content || "");
    } else
      g("");
  }, [x, C]);
  const w = () => x ? x.request_panel_title || x.request_header_title || "Outcome Summary" : "Create an Outcome:", R = () => {
    d.trim() && (c(d.trim()), g(""));
  }, b = (D) => {
    if (g(D.target.value), x) {
      const A = x.request_panel_title || x.request_header_title;
      A && h({ id: A, content: D.target.value, timestamp: /* @__PURE__ */ new Date() });
    }
  };
  return /* @__PURE__ */ k.jsx("div", { className: Dn.leverageLoopSummary, children: /* @__PURE__ */ k.jsxs("div", { className: Dn.summaryCard, children: [
    /* @__PURE__ */ k.jsxs("div", { className: Dn.summaryCardHeader, children: [
      /* @__PURE__ */ k.jsx("p", { className: Dn.summaryCardTitle, children: w() }),
      /* @__PURE__ */ k.jsx(
        "button",
        {
          className: Dn.summaryCardButton,
          onClick: R,
          disabled: !d.trim() || p,
          children: /* @__PURE__ */ k.jsx("span", { className: Dn.playIcon, children: "▶" })
        }
      )
    ] }),
    /* @__PURE__ */ k.jsx("div", { className: Dn.summaryCardInput, children: /* @__PURE__ */ k.jsx(
      "textarea",
      {
        className: Dn.summaryTextarea,
        value: d,
        onChange: (D) => b(D),
        rows: 2
      }
    ) })
  ] }) });
}, $O = ({
  greeting: c,
  subtext: p
}) => {
  const { user_name: d } = jr(
    Jo((w) => ({
      user_name: w.user_name
    }))
  ), g = () => {
    const w = (/* @__PURE__ */ new Date()).getHours();
    return w < 12 ? "Ready to make today legendary?" : w < 18 ? "Afternoon power move—let's go!" : "Still crushing it? I like your style.";
  }, C = c || `Let's get after it, ${d || "there"}`, h = p || g();
  return /* @__PURE__ */ k.jsxs("div", { className: Dn.copilotEmptyState, children: [
    /* @__PURE__ */ k.jsx("img", { src: p_, alt: "Orbiter Logo", className: Dn.logo }),
    /* @__PURE__ */ k.jsxs("div", { className: Dn.welcomeMessage, children: [
      /* @__PURE__ */ k.jsx("h2", { className: Dn.welcomeGreeting, children: C }),
      /* @__PURE__ */ k.jsx("p", { className: Dn.welcomeSubtext, children: h })
    ] })
  ] });
}, cu = () => `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, v_ = ({
  context: c,
  systemPrompt: p,
  showComposer: d = !0
}) => {
  const g = () => c === "outcomes" ? "Describe your goal ..." : "Ask anything ...", [x, C] = Te.useState(g), {
    chatState: h,
    addMessage: w,
    updateMessage: R,
    setIsLoading: b,
    upsertLeverageLoopSummary: D,
    upsertOutcomesSummary: A,
    selectedPerson: V,
    selectedSuggestionRequest: H
  } = ki(
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
  function ae(ue) {
    const he = ue.match(/\[SUMMARY\](.*?)\[\/SUMMARY\]/s);
    let ee = null;
    if (he && he[1]) {
      ee = he[1].trim();
      let Me = ue.replace(/\[SUMMARY\].*$/s, "</content>").trim();
      return ee && c === "leverage-loops" && ie(ee), ee && c === "outcomes" && xe(ee), he || (Me = ue), {
        cleanContent: Me
      };
    }
    return {
      cleanContent: ue
    };
  }
  const ie = Te.useCallback((ue) => {
    if (c == "copilot") return;
    let he = null;
    V ? he = V.full_name : H && (he = H.request_header_title), he && ue && D({
      id: he,
      content: ue,
      timestamp: /* @__PURE__ */ new Date()
    });
  }, [c, V, H, D]), xe = Te.useCallback((ue) => {
    c != "copilot" && A({
      id: "outcomes-summary",
      content: ue,
      timestamp: /* @__PURE__ */ new Date()
    });
  }, [c, A]), { messages: we, threadId: Ee, isLoading: Ce } = h;
  Te.useEffect(() => {
    we.length >= 3 && we[2]?.role === "assistant" ? C("Reply ...") : C(c === "outcomes" ? "Describe your goal ..." : "Ask anything ...");
  }, [c, we]);
  const le = c === "leverage-loops" && we.length > 1, se = c === "outcomes", [We, Le] = La.useState(!1), [je, Ge] = La.useState(null), Je = Te.useRef(null);
  Te.useEffect(() => {
    Je.current?.scrollIntoView({ behavior: "smooth" });
  }, [we]);
  const te = Te.useCallback(
    async (ue) => {
      if (!ue.trim() || Ce) return;
      const he = {
        id: cu(),
        role: "user",
        content: ue.trim(),
        timestamp: /* @__PURE__ */ new Date()
      };
      w(c, he), b(c, !0);
      const ee = cu();
      w(c, {
        id: ee,
        role: "assistant",
        content: "",
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !0
      });
      try {
        const ge = wO(), Z = `${p || "You are a helpful AI assistant."}

${ge}

User: ${ue.trim()}`, { copilot_llm_endpoint: et } = jr.getState(), pt = await fetch(`${et || "http://localhost:3001"}/api/chat`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            prompt: {
              role: "user",
              content: Z,
              id: he.id
            },
            threadId: Ee,
            responseId: ee,
            context: c
            // Pass context to backend if needed
          })
        });
        if (!pt.ok)
          throw new Error(`API error: ${pt.status}`);
        const at = pt.body?.getReader(), ze = new TextDecoder();
        let lt = "";
        if (at)
          for (; ; ) {
            const { done: Qt, value: kn } = await at.read();
            if (Qt) break;
            const fr = ze.decode(kn, { stream: !0 });
            lt += fr;
            const { cleanContent: Sn } = ae(lt);
            R(c, ee, Sn || lt, !0);
          }
        const { cleanContent: vt } = ae(lt);
        R(c, ee, vt, !1);
      } catch (ge) {
        console.error("Failed to send message:", ge), R(
          c,
          ee,
          "Sorry, there was an error processing your request.",
          !1
        );
      } finally {
        b(c, !1);
      }
    },
    [Ce, Ee, c, p, w, R, b, ae, ie]
  ), L = Te.useCallback(
    (ue) => {
      CO({
        sendMessage: te,
        setPendingAction: Ge,
        setIsModalOpen: Le,
        context: c,
        addMessage: w,
        updateMessage: R
      })(ue);
    },
    [te, Ge, Le, c, w, R]
  ), Y = Te.useCallback(
    (ue, he) => {
      R(c, ue, he);
    },
    [c, R]
  ), ve = Te.useCallback(
    (ue) => {
      Le(!1), Ge(null), te(ue);
    },
    [te]
  ), ke = Te.useCallback(() => {
    Le(!1), Ge(null);
  }, []);
  return /* @__PURE__ */ k.jsxs("div", { className: Dn.chatContainer, children: [
    le && /* @__PURE__ */ k.jsx(
      VO,
      {
        onSendMessage: te,
        isLoading: Ce
      }
    ),
    se && /* @__PURE__ */ k.jsx(
      HO,
      {
        onSendMessage: te,
        isLoading: Ce
      }
    ),
    /* @__PURE__ */ k.jsxs("div", { className: Dn.messagesContainer, children: [
      we.length === 0 ? c === "copilot" ? /* @__PURE__ */ k.jsx($O, { subtext: "What can I help you with today?" }) : /* @__PURE__ */ k.jsx("div", { className: Dn.emptyState, children: /* @__PURE__ */ k.jsx("p", { children: "Start a conversation" }) }) : we.map((ue) => /* @__PURE__ */ k.jsx(
        cO,
        {
          message: ue,
          onAction: L,
          onUpdateMessage: (he) => Y(ue.id, he)
        },
        ue.id
      )),
      /* @__PURE__ */ k.jsx("div", { ref: Je })
    ] }),
    d && /* @__PURE__ */ k.jsx(I3, { onSend: te, disabled: Ce, placeholder: x }),
    je && /* @__PURE__ */ k.jsx(
      SO,
      {
        isOpen: We,
        onClose: ke,
        humanFriendlyMessage: je.humanFriendlyMessage,
        llmFriendlyMessage: je.llmFriendlyMessage,
        onConfirm: ve
      }
    )
  ] });
}, BO = "_sidebarContent_1wnpm_2", qO = "_searchWrapper_1wnpm_17", WO = "_searchContainer_1wnpm_23", YO = "_searchIcon_1wnpm_62", GO = "_searchInput_1wnpm_67", QO = "_searchDropdown_1wnpm_79", KO = "_dropdownItem_1wnpm_115", XO = "_selected_1wnpm_130", JO = "_dropdownEmpty_1wnpm_143", ZO = "_dropdownError_1wnpm_144", eL = "_dropdownLoading_1wnpm_155", tL = "_personAvatar_1wnpm_165", nL = "_avatarPlaceholder_1wnpm_179", rL = "_personInfo_1wnpm_191", aL = "_personName_1wnpm_199", oL = "_personTitle_1wnpm_208", iL = "_suggestionsList_1wnpm_216", lL = "_suggestionItemWrapper_1wnpm_235", uL = "_suggestionItem_1wnpm_235", sL = "_statusIcon_1wnpm_263", cL = "_moreButton_1wnpm_266", fL = "_moreButtonWrapper_1wnpm_290", dL = "_actionMenu_1wnpm_311", pL = "_actionMenuItem_1wnpm_326", vL = "_deleteAction_1wnpm_348", hL = "_loadingState_1wnpm_356", mL = "_loadingSpinner_1wnpm_366", yL = "_emptyState_1wnpm_380", gL = "_errorState_1wnpm_387", Ot = {
  sidebarContent: BO,
  searchWrapper: qO,
  searchContainer: WO,
  searchIcon: YO,
  searchInput: GO,
  searchDropdown: QO,
  dropdownItem: KO,
  selected: XO,
  dropdownEmpty: JO,
  dropdownError: ZO,
  dropdownLoading: eL,
  personAvatar: tL,
  avatarPlaceholder: nL,
  personInfo: rL,
  personName: aL,
  personTitle: oL,
  suggestionsList: iL,
  suggestionItemWrapper: lL,
  suggestionItem: uL,
  statusIcon: sL,
  moreButton: cL,
  moreButtonWrapper: fL,
  actionMenu: dL,
  actionMenuItem: pL,
  deleteAction: vL,
  loadingState: hL,
  loadingSpinner: mL,
  emptyState: yL,
  errorState: gL
}, _L = "_spinnerSimple_46sfm_1", SL = "_arc_46sfm_5", CL = "_dot_46sfm_12", Z1 = {
  spinnerSimple: _L,
  arc: SL,
  dot: CL
}, EL = ({ size: c = 16, className: p = "" }) => {
  const d = La.useId();
  return /* @__PURE__ */ k.jsxs(
    "svg",
    {
      className: `${Z1.spinnerSimple} ${p}`,
      viewBox: "0 0 50 50",
      width: c,
      height: c,
      children: [
        /* @__PURE__ */ k.jsx("defs", { children: /* @__PURE__ */ k.jsxs("linearGradient", { id: d, x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
          /* @__PURE__ */ k.jsx("stop", { offset: "0%", style: { stopColor: "#e879f9", stopOpacity: 1 } }),
          /* @__PURE__ */ k.jsx("stop", { offset: "100%", style: { stopColor: "#e879f9", stopOpacity: 0 } })
        ] }) }),
        /* @__PURE__ */ k.jsx(
          "circle",
          {
            className: Z1.arc,
            cx: "25",
            cy: "25",
            r: "20",
            style: { stroke: `url(#${d})` }
          }
        ),
        /* @__PURE__ */ k.jsx("circle", { className: Z1.dot, cx: "25", cy: "5", r: "2.5" })
      ]
    }
  );
}, xL = ({ status: c }) => {
  switch (c) {
    case "draft":
      return /* @__PURE__ */ k.jsx("span", { className: Ot.statusIcon, "data-status": "draft" });
    case "suggestion":
      return /* @__PURE__ */ k.jsx("span", { className: Ot.statusIcon, "data-status": "suggestion" });
    case "processing":
      return /* @__PURE__ */ k.jsx(EL, { size: 16 });
    case "archived":
      return /* @__PURE__ */ k.jsx("span", { className: Ot.statusIcon, "data-status": "archived" });
    default:
      return /* @__PURE__ */ k.jsx("span", { className: Ot.statusIcon, "data-status": "unknown" });
  }
}, wL = ({
  selectedPerson: c,
  selectedSuggestionRequest: p,
  onPersonSelect: d,
  onSuggestionRequestSelect: g
}) => {
  const [x, C] = Te.useState(""), [h, w] = Te.useState(!1), [R, b] = Te.useState(null), D = Te.useRef(null), A = Te.useRef(null), {
    suggestionRequests: V,
    leverageLoops: H,
    isLoadingPersons: ae,
    isLoadingSuggestionRequests: ie,
    personsError: xe,
    suggestionRequestsError: we,
    deleteSuggestionRequest: Ee,
    isDeletingSuggestionRequest: Ce
  } = Rv(
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
  Te.useEffect(() => {
    const L = (Y) => {
      D.current && !D.current.contains(Y.target) && w(!1), A.current && !A.current.contains(Y.target) && b(null);
    };
    return document.addEventListener("mousedown", L), () => document.removeEventListener("mousedown", L);
  }, []);
  const le = async (L, Y) => {
    Y.stopPropagation(), !Ce && (await Ee(L), b(null));
  }, se = (L, Y) => {
    Y.stopPropagation(), console.log("Edit suggestion request:", L), b(null);
  }, We = (L, Y) => Y ? L.filter(
    (ve) => ve.full_name?.toLowerCase().includes(Y.toLowerCase()) || ve.master_person.name?.toLowerCase().includes(Y.toLowerCase()) || ve.master_person.current_title?.toLowerCase().includes(Y.toLowerCase()) || ve.master_person.master_company?.company_name?.toLowerCase().includes(Y.toLowerCase())
  ) : [], Le = (L) => {
    const Y = L.target.value;
    C(Y), w(Y.length > 0);
  }, je = (L) => {
    d(L), C(""), w(!1);
  }, Ge = (L) => {
    const Y = c?.id === L.id;
    return /* @__PURE__ */ k.jsxs(
      "button",
      {
        className: `${Ot.dropdownItem} ${Y ? Ot.selected : ""}`,
        onClick: () => je(L),
        children: [
          /* @__PURE__ */ k.jsx("div", { className: Ot.personAvatar, children: L.master_person.avatar ? /* @__PURE__ */ k.jsx("img", { src: L.master_person.avatar, alt: L.full_name }) : /* @__PURE__ */ k.jsx("span", { className: Ot.avatarPlaceholder, children: L.full_name?.charAt(0) || "?" }) }),
          /* @__PURE__ */ k.jsxs("div", { className: Ot.personInfo, children: [
            /* @__PURE__ */ k.jsx("span", { className: Ot.personName, children: L.full_name || L.master_person.name }),
            L.master_person.current_title && /* @__PURE__ */ k.jsxs("span", { className: Ot.personTitle, children: [
              L.master_person.current_title,
              L.master_person.master_company?.company_name && /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
                " at ",
                L.master_person.master_company.company_name
              ] })
            ] })
          ] })
        ]
      },
      L.id
    );
  }, Je = (L) => {
    const Y = p?.id === L.id;
    return /* @__PURE__ */ k.jsx("div", { className: Ot.suggestionItemWrapper, children: /* @__PURE__ */ k.jsxs(
      "button",
      {
        className: `${Ot.suggestionItem} ${Y ? Ot.selected : ""}`,
        onClick: () => g(L),
        children: [
          /* @__PURE__ */ k.jsx("div", { className: Ot.personAvatar, children: L.master_person?.avatar ? /* @__PURE__ */ k.jsx("img", { src: L.master_person.avatar, alt: L.master_person.name || "Person" }) : /* @__PURE__ */ k.jsx("span", { className: Ot.avatarPlaceholder, children: L.master_person?.name?.charAt(0) || "?" }) }),
          /* @__PURE__ */ k.jsxs("div", { className: Ot.personInfo, children: [
            /* @__PURE__ */ k.jsx("span", { className: Ot.personName, children: L.master_person?.name || L.request_header_title }),
            (L.master_person?.current_title || L.master_person?.company_name) && /* @__PURE__ */ k.jsxs("span", { className: Ot.personTitle, children: [
              L.master_person?.current_title,
              L.master_person?.current_title && L.master_person?.company_name && " at ",
              L.master_person?.company_name
            ] })
          ] }),
          /* @__PURE__ */ k.jsx(xL, { status: L.status }),
          L.id !== void 0 && /* @__PURE__ */ k.jsxs("div", { className: Ot.moreButtonWrapper, ref: R === L.id ? A : null, children: [
            /* @__PURE__ */ k.jsx(
              "span",
              {
                className: Ot.moreButton,
                role: "button",
                tabIndex: 0,
                onClick: (ve) => {
                  ve.stopPropagation(), b(R === L.id ? null : L.id);
                },
                onKeyDown: (ve) => {
                  ve.key === "Enter" && (ve.stopPropagation(), b(R === L.id ? null : L.id));
                },
                children: "⋮"
              }
            ),
            R === L.id && /* @__PURE__ */ k.jsxs("div", { className: Ot.actionMenu, children: [
              /* @__PURE__ */ k.jsxs(
                "button",
                {
                  className: Ot.actionMenuItem,
                  onClick: (ve) => se(L.id, ve),
                  children: [
                    /* @__PURE__ */ k.jsx(a_, { size: 14 }),
                    /* @__PURE__ */ k.jsx("span", { children: "Edit" })
                  ]
                }
              ),
              /* @__PURE__ */ k.jsxs(
                "button",
                {
                  className: `${Ot.actionMenuItem} ${Ot.deleteAction}`,
                  onClick: (ve) => le(L.id, ve),
                  disabled: Ce,
                  children: [
                    /* @__PURE__ */ k.jsx(Ty, { size: 14 }),
                    /* @__PURE__ */ k.jsx("span", { children: Ce ? "Deleting..." : "Delete" })
                  ]
                }
              )
            ] })
          ] })
        ]
      }
    ) }, L.id);
  }, te = We(H, x);
  return /* @__PURE__ */ k.jsxs("div", { className: Ot.sidebarContent, children: [
    /* @__PURE__ */ k.jsxs("div", { className: Ot.searchWrapper, ref: D, children: [
      /* @__PURE__ */ k.jsxs("div", { className: Ot.searchContainer, children: [
        /* @__PURE__ */ k.jsx("span", { className: Ot.searchIcon, children: "🔍" }),
        /* @__PURE__ */ k.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search persons...",
            className: Ot.searchInput,
            value: x,
            onChange: Le,
            onFocus: () => x.length > 0 && w(!0)
          }
        )
      ] }),
      h && /* @__PURE__ */ k.jsx("div", { className: Ot.searchDropdown, children: ae ? /* @__PURE__ */ k.jsxs("div", { className: Ot.dropdownLoading, children: [
        /* @__PURE__ */ k.jsx("span", { className: Ot.loadingSpinner }),
        "Loading persons..."
      ] }) : xe ? /* @__PURE__ */ k.jsx("div", { className: Ot.dropdownError, children: xe }) : te.length === 0 ? /* @__PURE__ */ k.jsxs("div", { className: Ot.dropdownEmpty, children: [
        'No persons found for "',
        x,
        '"'
      ] }) : te.map((L) => Ge(L)) })
    ] }),
    /* @__PURE__ */ k.jsx("div", { className: Ot.suggestionsList, children: ie ? /* @__PURE__ */ k.jsxs("div", { className: Ot.loadingState, children: [
      /* @__PURE__ */ k.jsx("span", { className: Ot.loadingSpinner }),
      "Loading suggestion requests..."
    ] }) : we ? /* @__PURE__ */ k.jsx("div", { className: Ot.errorState, children: we }) : V.length === 0 ? /* @__PURE__ */ k.jsx("div", { className: Ot.emptyState, children: "No leverage loop requests yet" }) : V.map((L) => Je(L)) })
  ] });
}, bL = "_sidebarContent_1l7we_2", RL = "_searchWrapper_1l7we_17", kL = "_searchContainer_1l7we_23", TL = "_searchIcon_1l7we_62", NL = "_searchInput_1l7we_67", DL = "_outcomesList_1l7we_79", ML = "_outcomeItemWrapper_1l7we_98", OL = "_outcomeItem_1l7we_98", LL = "_selected_1l7we_122", jL = "_moreButton_1l7we_127", AL = "_expandCaret_1l7we_131", UL = "_expanded_1l7we_150", zL = "_expandCaretPlaceholder_1l7we_154", PL = "_statusIcon_1l7we_160", IL = "_completedStatusIcon_1l7we_166", FL = "_outcomeInfo_1l7we_172", VL = "_outcomeName_1l7we_180", HL = "_moreButtonWrapper_1l7we_189", $L = "_actionMenu_1l7we_210", BL = "_actionMenuItem_1l7we_235", qL = "_deleteAction_1l7we_257", WL = "_stepPlansContainer_1l7we_265", YL = "_stepPlanItem_1l7we_273", GL = "_stepPlanInfo_1l7we_285", QL = "_stepPlanDescription_1l7we_300", KL = "_loadingState_1l7we_310", XL = "_loadingSpinner_1l7we_320", JL = "_emptyState_1l7we_334", ZL = "_errorState_1l7we_341", jt = {
  sidebarContent: bL,
  searchWrapper: RL,
  searchContainer: kL,
  searchIcon: TL,
  searchInput: NL,
  outcomesList: DL,
  outcomeItemWrapper: ML,
  outcomeItem: OL,
  selected: LL,
  moreButton: jL,
  expandCaret: AL,
  expanded: UL,
  expandCaretPlaceholder: zL,
  statusIcon: PL,
  completedStatusIcon: IL,
  outcomeInfo: FL,
  outcomeName: VL,
  moreButtonWrapper: HL,
  actionMenu: $L,
  actionMenuItem: BL,
  deleteAction: qL,
  stepPlansContainer: WL,
  stepPlanItem: YL,
  stepPlanInfo: GL,
  stepPlanDescription: QL,
  loadingState: KL,
  loadingSpinner: XL,
  emptyState: JL,
  errorState: ZL
}, yE = "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.375%202.45583V2.46167M2.45584%204.375V4.38083M1.75%207V7.00583M2.45584%209.625V9.63083M4.375%2011.5442V11.55M7%2012.25V12.2558M9.625%2011.5442V11.55M11.5442%209.625V9.63083M12.25%207V7.00583M11.5442%204.375V4.38083M9.625%202.45583V2.46167M7%201.75V1.75583'%20stroke='%23F5F5F5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", e6 = "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%207V3.11798C7%203.11798%207.88687%203.145%208.50092%203.42821C9.40942%203.84724%2010.1158%204.67779%2010.4151%205.62884L7%207Z'%20fill='%2322C55E'%20stroke='%2322C55E'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", t6 = "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.25%207L6.41667%208.16667L8.75%205.83333M1.75%207C1.75%207.68944%201.8858%208.37213%202.14963%209.00909C2.41347%209.64605%202.80018%2010.2248%203.28769%2010.7123C3.7752%2011.1998%204.35395%2011.5865%204.99091%2011.8504C5.62787%2012.1142%206.31056%2012.25%207%2012.25C7.68944%2012.25%208.37213%2012.1142%209.00909%2011.8504C9.64605%2011.5865%2010.2248%2011.1998%2010.7123%2010.7123C11.1998%2010.2248%2011.5865%209.64605%2011.8504%209.00909C12.1142%208.37213%2012.25%207.68944%2012.25%207C12.25%206.31056%2012.1142%205.62787%2011.8504%204.99091C11.5865%204.35395%2011.1998%203.7752%2010.7123%203.28769C10.2248%202.80018%209.64605%202.41347%209.00909%202.14963C8.37213%201.8858%207.68944%201.75%207%201.75C6.31056%201.75%205.62787%201.8858%204.99091%202.14963C4.35395%202.41347%203.7752%202.80018%203.28769%203.28769C2.80018%203.7752%202.41347%204.35395%202.14963%204.99091C1.8858%205.62787%201.75%206.31056%201.75%207Z'%20stroke='%2360A5FA'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", n6 = "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.95834%209.55205C4.95834%209.85249%205.2973%2010.024%205.53481%209.84372L8.89756%207.29164C9.08972%207.1458%209.08972%206.85414%208.89756%206.7083L5.53481%204.15622C5.2973%203.97596%204.95834%204.14745%204.95834%204.44789V9.55205Z'%20fill='%23A3A3A3'/%3e%3c/svg%3e", r6 = ({ status: c }) => {
  switch (c) {
    case "planned":
      return /* @__PURE__ */ k.jsx("img", { src: yE, alt: "Planned", className: jt.statusIcon });
    case "in progress":
      return /* @__PURE__ */ k.jsx("img", { src: e6, alt: "In Progress", className: `${jt.statusIcon} ${jt.completedStatusIcon}` });
    case "complete":
      return /* @__PURE__ */ k.jsx("img", { src: t6, alt: "Complete", className: jt.statusIcon });
    default:
      return /* @__PURE__ */ k.jsx("img", { src: yE, alt: "Unknown", className: jt.statusIcon });
  }
}, a6 = ({
  selectedSuggestionRequest: c,
  onSuggestionRequestSelect: p
}) => {
  const [d, g] = Te.useState(""), [x, C] = Te.useState(/* @__PURE__ */ new Set()), [h, w] = Te.useState(null), [R, b] = Te.useState(null), D = Te.useRef(null), A = Te.useRef(null), {
    outcomesSuggestionRequests: V,
    isLoadingSuggestionRequests: H,
    suggestionRequestsError: ae,
    deleteSuggestionRequest: ie,
    isDeletingSuggestionRequest: xe
  } = Rv(
    Jo((te) => ({
      outcomesSuggestionRequests: te.outcomesSuggestionRequests,
      isLoadingSuggestionRequests: te.isLoadingSuggestionRequests,
      suggestionRequestsError: te.suggestionRequestsError,
      deleteSuggestionRequest: te.deleteSuggestionRequest,
      isDeletingSuggestionRequest: te.isDeletingSuggestionRequest
    }))
  );
  Te.useEffect(() => {
    const te = (L) => {
      D.current && !D.current.contains(L.target) && w(null), A.current && !A.current.contains(L.target) && b(null);
    };
    return document.addEventListener("mousedown", te), () => document.removeEventListener("mousedown", te);
  }, []);
  const we = (te, L) => L ? te.filter(
    (Y) => Y.request_panel_title?.toLowerCase().includes(L.toLowerCase()) || Y.request_header_title?.toLowerCase().includes(L.toLowerCase()) || Y.request_context?.toLowerCase().includes(L.toLowerCase())
  ) : te, Ee = (te) => {
    g(te.target.value);
  }, Ce = async (te, L) => {
    L.stopPropagation(), !xe && (await ie(te), w(null));
  }, le = (te, L) => {
    L.stopPropagation(), console.log("Edit outcome:", te), w(null);
  }, se = async (te, L) => {
    L.stopPropagation(), console.log("Delete step plan:", te), b(null);
  }, We = (te, L) => {
    L.stopPropagation(), console.log("Edit step plan:", te), b(null);
  }, Le = (te, L) => {
    L.stopPropagation(), C((Y) => {
      const ve = new Set(Y);
      return ve.has(te) ? ve.delete(te) : ve.add(te), ve;
    });
  }, je = (te) => /* @__PURE__ */ k.jsxs("div", { className: jt.stepPlanItem, children: [
    /* @__PURE__ */ k.jsx(r6, { status: te.status }),
    /* @__PURE__ */ k.jsx("div", { className: jt.stepPlanInfo, children: /* @__PURE__ */ k.jsx("span", { className: jt.stepPlanDescription, children: te.step_description }) }),
    /* @__PURE__ */ k.jsxs("div", { className: jt.moreButtonWrapper, ref: R === te.id ? A : null, children: [
      /* @__PURE__ */ k.jsx(
        "span",
        {
          className: jt.moreButton,
          role: "button",
          tabIndex: 0,
          onClick: (L) => {
            L.stopPropagation(), b(R === te.id ? null : te.id);
          },
          onKeyDown: (L) => {
            L.key === "Enter" && (L.stopPropagation(), b(R === te.id ? null : te.id));
          },
          children: "⋮"
        }
      ),
      R === te.id && /* @__PURE__ */ k.jsxs("div", { className: jt.actionMenu, children: [
        /* @__PURE__ */ k.jsxs(
          "button",
          {
            className: jt.actionMenuItem,
            onClick: (L) => We(te.id, L),
            children: [
              /* @__PURE__ */ k.jsx(a_, { size: 14 }),
              /* @__PURE__ */ k.jsx("span", { children: "Edit" })
            ]
          }
        ),
        /* @__PURE__ */ k.jsxs(
          "button",
          {
            className: `${jt.actionMenuItem} ${jt.deleteAction}`,
            onClick: (L) => se(te.id, L),
            children: [
              /* @__PURE__ */ k.jsx(Ty, { size: 14 }),
              /* @__PURE__ */ k.jsx("span", { children: "Delete" })
            ]
          }
        )
      ] })
    ] })
  ] }, te.id), Ge = (te) => {
    const L = c?.id === te.id, Y = te.outcome_plan_steps && te.outcome_plan_steps.length > 0, ve = te.id !== void 0 && x.has(te.id);
    return /* @__PURE__ */ k.jsxs("div", { className: jt.outcomeItemWrapper, children: [
      /* @__PURE__ */ k.jsxs(
        "div",
        {
          className: `${jt.outcomeItem} ${L ? jt.selected : ""}`,
          onClick: () => p(te),
          role: "button",
          tabIndex: 0,
          onKeyDown: (ke) => {
            (ke.key === "Enter" || ke.key === " ") && p(te);
          },
          children: [
            /* @__PURE__ */ k.jsx("div", { className: jt.outcomeInfo, children: /* @__PURE__ */ k.jsx("span", { className: jt.outcomeName, children: te.request_panel_title || te.request_header_title }) }),
            Y ? /* @__PURE__ */ k.jsx(
              "span",
              {
                className: `${jt.expandCaret} ${ve ? jt.expanded : ""}`,
                onClick: (ke) => te.id !== void 0 && Le(te.id, ke),
                role: "button",
                tabIndex: 0,
                onKeyDown: (ke) => {
                  ke.key === "Enter" && te.id !== void 0 && (ke.stopPropagation(), Le(te.id, ke));
                },
                children: /* @__PURE__ */ k.jsx("img", { src: n6, alt: "Expand" })
              }
            ) : /* @__PURE__ */ k.jsx("span", { className: jt.expandCaretPlaceholder }),
            te.id !== void 0 && /* @__PURE__ */ k.jsxs("div", { className: jt.moreButtonWrapper, ref: h === te.id ? D : null, children: [
              /* @__PURE__ */ k.jsx(
                "span",
                {
                  className: jt.moreButton,
                  role: "button",
                  tabIndex: 0,
                  onClick: (ke) => {
                    ke.stopPropagation(), w(h === te.id ? null : te.id);
                  },
                  onKeyDown: (ke) => {
                    ke.key === "Enter" && (ke.stopPropagation(), w(h === te.id ? null : te.id));
                  },
                  children: "⋮"
                }
              ),
              h === te.id && /* @__PURE__ */ k.jsxs("div", { className: jt.actionMenu, children: [
                /* @__PURE__ */ k.jsxs(
                  "button",
                  {
                    className: jt.actionMenuItem,
                    onClick: (ke) => le(te.id, ke),
                    children: [
                      /* @__PURE__ */ k.jsx(a_, { size: 14 }),
                      /* @__PURE__ */ k.jsx("span", { children: "Edit" })
                    ]
                  }
                ),
                /* @__PURE__ */ k.jsxs(
                  "button",
                  {
                    className: `${jt.actionMenuItem} ${jt.deleteAction}`,
                    onClick: (ke) => Ce(te.id, ke),
                    disabled: xe,
                    children: [
                      /* @__PURE__ */ k.jsx(Ty, { size: 14 }),
                      /* @__PURE__ */ k.jsx("span", { children: xe ? "Deleting..." : "Delete" })
                    ]
                  }
                )
              ] })
            ] })
          ]
        }
      ),
      Y && ve && /* @__PURE__ */ k.jsx("div", { className: jt.stepPlansContainer, children: te.outcome_plan_steps.map((ke) => je(ke)) })
    ] }, te.id);
  }, Je = we(V, d);
  return /* @__PURE__ */ k.jsxs("div", { className: jt.sidebarContent, children: [
    /* @__PURE__ */ k.jsx("div", { className: jt.searchWrapper, children: /* @__PURE__ */ k.jsxs("div", { className: jt.searchContainer, children: [
      /* @__PURE__ */ k.jsx("span", { className: jt.searchIcon, children: "🔍" }),
      /* @__PURE__ */ k.jsx(
        "input",
        {
          type: "text",
          placeholder: "Search outcomes...",
          className: jt.searchInput,
          value: d,
          onChange: Ee
        }
      )
    ] }) }),
    /* @__PURE__ */ k.jsx("div", { className: jt.outcomesList, children: H ? /* @__PURE__ */ k.jsxs("div", { className: jt.loadingState, children: [
      /* @__PURE__ */ k.jsx("span", { className: jt.loadingSpinner }),
      "Loading outcomes..."
    ] }) : ae ? /* @__PURE__ */ k.jsx("div", { className: jt.errorState, children: ae }) : Je.length === 0 ? /* @__PURE__ */ k.jsx("div", { className: jt.emptyState, children: d ? `No outcomes found for "${d}"` : "No outcomes yet" }) : Je.map((te) => Ge(te)) })
  ] });
}, o6 = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%205.83329C9.17592%205.83329%208.37034%206.07766%207.68514%206.5355C6.99993%206.99334%206.46588%207.64408%206.15051%208.40544C5.83515%209.1668%205.75264%2010.0046%205.91341%2010.8128C6.07418%2011.6211%206.47102%2012.3635%207.05373%2012.9462C7.63645%2013.529%208.37888%2013.9258%209.18714%2014.0866C9.99539%2014.2473%2010.8332%2014.1648%2011.5945%2013.8495C12.3559%2013.5341%2013.0066%2013%2013.4645%2012.3148C13.9223%2011.6296%2014.1667%2010.824%2014.1667%209.99995M10.8333%202.54579C9.28839%202.37246%207.72776%202.68352%206.36733%203.43593C5.0069%204.18834%203.9139%205.34492%203.23953%206.74567C2.56516%208.14643%202.34274%209.72213%202.60305%2011.2548C2.86335%2012.7875%203.59352%2014.2014%204.69253%2015.301C5.79155%2016.4006%207.2051%2017.1314%208.73766%2017.3925C10.2702%2017.6536%2011.846%2017.432%2013.2471%2016.7583C14.6482%2016.0846%2015.8053%2014.9922%2016.5584%2013.6322C17.3115%2012.2721%2017.6234%2010.7117%2017.4508%209.16662M12.5%207.49995V4.99995L15%202.49995V4.99995H17.5L15%207.49995H12.5ZM12.5%207.49995L10%209.99995M9.16668%209.99995C9.16668%2010.221%209.25447%2010.4329%209.41076%2010.5892C9.56704%2010.7455%209.779%2010.8333%2010%2010.8333C10.221%2010.8333%2010.433%2010.7455%2010.5893%2010.5892C10.7455%2010.4329%2010.8333%2010.221%2010.8333%209.99995C10.8333%209.77894%2010.7455%209.56698%2010.5893%209.4107C10.433%209.25442%2010.221%209.16662%2010%209.16662C9.779%209.16662%209.56704%209.25442%209.41076%209.4107C9.25447%209.56698%209.16668%209.77894%209.16668%209.99995Z'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", i6 = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.5533%205.43171C14.1448%204.53303%2013.4793%203.77539%2012.6409%203.2543C11.8024%202.73321%2010.8285%202.47198%209.84179%202.50353C8.8551%202.53509%207.89984%202.85802%207.09639%203.43162C6.29294%204.00523%205.67727%204.80383%205.32698%205.72679C4.97669%206.64974%204.90745%207.65573%205.12798%208.61798C5.34852%209.58022%205.84897%2010.4556%206.56625%2011.1339C7.28353%2011.8122%208.18555%2012.263%209.15861%2012.4294C10.1317%2012.5958%2011.1322%2012.4705%2012.0342%2012.0692'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.5683%2014.5533C15.467%2014.1448%2016.2246%2013.4793%2016.7457%2012.6409C17.2668%2011.8024%2017.5281%2010.8284%2017.4965%209.84176C17.4649%208.85507%2017.142%207.89981%2016.5684%207.09636C15.9948%206.29291%2015.1962%205.67724%2014.2732%205.32695C13.3503%204.97666%2012.3443%204.90742%2011.3821%205.12795C10.4198%205.34849%209.54439%205.84894%208.86612%206.56622C8.18784%207.2835%207.73708%208.18552%207.57064%209.15858C7.40419%2010.1316%207.52952%2011.1322%207.93083%2012.0341'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.45001%2014.5684C5.8585%2015.467%206.52387%2016.2247%207.36227%2016.7459C8.20067%2017.267%209.17458%2017.5283%2010.1613%2017.4969C11.1479%2017.4654%2012.1032%2017.1425%2012.9067%2016.569C13.7102%2015.9955%2014.3259%2015.197%2014.6763%2014.2741C15.0267%2013.3512%2015.0961%2012.3452%2014.8756%2011.383C14.6552%2010.4207%2014.1549%209.54526%2013.4377%208.8669C12.7205%208.18855%2011.8186%207.73767%2010.8456%207.57109C9.87256%207.40451%208.872%207.52969%207.97001%207.93085'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.43168%205.44995C4.53299%205.85844%203.77532%206.52381%203.25417%207.36221C2.73302%208.20061%202.47171%209.17452%202.50318%2010.1612C2.53465%2011.1479%202.85749%2012.1031%203.431%2012.9066C4.00451%2013.7101%204.80304%2014.3259%205.72594%2014.6763C6.64884%2015.0266%207.6548%2015.096%208.61706%2014.8756C9.57931%2014.6552%2010.4548%2014.1548%2011.1331%2013.4376C11.8115%2012.7205%2012.2624%2011.8185%2012.4289%2010.8455C12.5955%209.8725%2012.4703%208.87194%2012.0692%207.96995'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", l6 = ({
  activeSection: c,
  onSectionChange: p,
  onSectionChangeConfiguration: d
}) => {
  const { fetchNetworkPersons: g, fetchSuggestionRequests: x, fetchOutcomesSuggestionRequests: C } = Rv(
    Jo((le) => ({
      fetchNetworkPersons: le.fetchNetworkPersons,
      fetchSuggestionRequests: le.fetchSuggestionRequests,
      fetchOutcomesSuggestionRequests: le.fetchOutcomesSuggestionRequests
    }))
  ), {
    selectedPerson: h,
    selectedSuggestionRequest: w,
    setSelectedPerson: R,
    setSelectedSuggestionRequest: b,
    addMessage: D,
    leverageLoopChats: A
  } = ki(
    Jo((le) => ({
      selectedPerson: le.selectedPerson,
      selectedSuggestionRequest: le.selectedSuggestionRequest,
      setSelectedPerson: le.setSelectedPerson,
      setSelectedSuggestionRequest: le.setSelectedSuggestionRequest,
      addMessage: le.addMessage,
      leverageLoopChats: le.leverageLoopChats
    }))
  ), { token: V, baseUrl: H } = jr(
    Jo((le) => ({
      token: le.token,
      baseUrl: le.baseUrl
    }))
  ), [ae, ie] = Te.useState(/* @__PURE__ */ new Set()), xe = (le) => {
    ie((se) => {
      const We = new Set(se);
      return We.has(le) ? We.delete(le) : We.add(le), We;
    });
  }, we = (le) => {
    R(le), p("leverage-loops");
    const se = le.full_name;
    if (!(A[se]?.messages?.[0]?.role === "assistant")) {
      const je = "leverage-loops", Ge = {
        id: cu(),
        role: "assistant",
        content: "Select a person from your contacts to assist with your network.",
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !1
      };
      D(je, Ge, se);
      const Je = {
        id: cu(),
        role: "user",
        content: `${le.full_name} 
 ${le.master_person?.current_title} at ${le.master_person?.master_company?.company_name}`,
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !1
      };
      D(je, Je, se);
      const te = cu(), L = `<content thesys="true">${JSON.stringify(WE(le))}</content>`;
      D(je, {
        id: te,
        role: "assistant",
        content: L,
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !1
      }, se);
    }
  }, Ee = (le) => {
    b(le), p("leverage-loops");
    const se = le.request_panel_title;
    if (!(A[se]?.messages?.[0]?.role === "assistant")) {
      const je = "leverage-loops", Ge = cu(), Je = `<content thesys="true">${JSON.stringify(pE(le))}</content>`;
      D(je, {
        id: Ge,
        role: "assistant",
        content: Je,
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !1
      }, se);
    }
  }, Ce = (le) => {
    b(le), p("outcomes");
    const se = le.request_panel_title;
    if (!(A[se]?.messages?.[0]?.role === "assistant")) {
      const je = "outcomes", Ge = cu(), Je = `<content thesys="true">${JSON.stringify(pE(le))}</content>`;
      D(je, {
        id: Ge,
        role: "assistant",
        content: Je,
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !1
      }, se);
    }
  };
  return Te.useEffect(() => {
    V && H && (g(), x(), C());
  }, [V, H, g, x, C]), /* @__PURE__ */ k.jsx("div", { className: Nn.sidebar, children: /* @__PURE__ */ k.jsxs("nav", { className: Nn.sidebarNav, children: [
    /* @__PURE__ */ k.jsxs(
      "button",
      {
        className: `${Nn.sidebarItem} ${c === "copilot" ? Nn.active : ""}`,
        onClick: () => p("copilot"),
        "aria-label": "Orbiter.io Copilot",
        children: [
          /* @__PURE__ */ k.jsx("span", { className: Nn.sidebarIcon, children: /* @__PURE__ */ k.jsx("img", { src: p_, alt: "Orbiter", width: 18, height: 18 }) }),
          /* @__PURE__ */ k.jsx("span", { className: Nn.sidebarLabel, children: "Orbiter.io Copilot" })
        ]
      }
    ),
    /* @__PURE__ */ k.jsx("div", { className: Nn.sectionWrapper, children: /* @__PURE__ */ k.jsxs("div", { className: `${Nn.sectionHeader} ${c === "outcomes" ? Nn.active : ""}`, children: [
      /* @__PURE__ */ k.jsxs(
        "button",
        {
          className: Nn.sidebarItemInHeader,
          onClick: () => d("outcomes"),
          "aria-label": "Outcomes",
          children: [
            /* @__PURE__ */ k.jsx("span", { className: Nn.sidebarIcon, children: /* @__PURE__ */ k.jsx("img", { src: o6, alt: "Outcomes", width: 18, height: 18 }) }),
            /* @__PURE__ */ k.jsx("span", { className: Nn.sidebarLabel, children: "Outcomes" })
          ]
        }
      ),
      /* @__PURE__ */ k.jsx(
        "button",
        {
          className: Nn.plusButton,
          onClick: () => xe("outcomes"),
          "aria-label": "Expand Outcomes",
          children: /* @__PURE__ */ k.jsx("span", { className: `${Nn.plusIcon} ${ae.has("outcomes") ? Nn.rotated : ""}`, children: "+" })
        }
      )
    ] }) }),
    /* @__PURE__ */ k.jsx("div", { className: Nn.sectionWrapper, children: /* @__PURE__ */ k.jsxs("div", { className: `${Nn.sectionHeader} ${c === "leverage-loops" ? Nn.active : ""}`, children: [
      /* @__PURE__ */ k.jsxs(
        "button",
        {
          className: Nn.sidebarItemInHeader,
          onClick: () => d("leverage-loops"),
          "aria-label": "Leverage Loops",
          children: [
            /* @__PURE__ */ k.jsx("span", { className: Nn.sidebarIcon, children: /* @__PURE__ */ k.jsx("img", { src: i6, alt: "Leverage Loops", width: 18, height: 18 }) }),
            /* @__PURE__ */ k.jsx("span", { className: Nn.sidebarLabel, children: "Leverage Loops" })
          ]
        }
      ),
      /* @__PURE__ */ k.jsx(
        "button",
        {
          className: Nn.plusButton,
          onClick: () => xe("leverage-loops"),
          "aria-label": "Expand Leverage Loops",
          children: /* @__PURE__ */ k.jsx("span", { className: `${Nn.plusIcon} ${ae.has("leverage-loops") ? Nn.rotated : ""}`, children: "+" })
        }
      )
    ] }) }),
    /* @__PURE__ */ k.jsxs("div", { children: [
      ae.has("leverage-loops") && /* @__PURE__ */ k.jsx(
        wL,
        {
          selectedPerson: h,
          selectedSuggestionRequest: w,
          onPersonSelect: we,
          onSuggestionRequestSelect: Ee
        }
      ),
      ae.has("outcomes") && /* @__PURE__ */ k.jsx(
        a6,
        {
          selectedSuggestionRequest: w,
          onSuggestionRequestSelect: Ce
        }
      )
    ] })
  ] }) });
}, gE = ({
  agentName: c = "Orbiter.io Copilot"
}) => /* @__PURE__ */ k.jsx(
  v_,
  {
    context: "copilot",
    title: c,
    systemPrompt: "You are Orbiter.io Copilot, a helpful AI assistant for professional networking and relationship management."
  }
), u6 = () => {
  const {
    selectedSuggestionRequest: c,
    outcomesChats: p,
    addMessage: d
  } = ki(
    Jo((x) => ({
      selectedSuggestionRequest: x.selectedSuggestionRequest,
      outcomesChats: x.outcomesChats,
      addMessage: x.addMessage
    }))
  );
  Te.useEffect(() => {
    const x = "outcomes-default";
    if (!(p[x]?.messages?.[0]?.role === "assistant")) {
      const w = "outcomes", b = {
        id: cu(),
        role: "assistant",
        content: "What would you like to achieve?.",
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !1
      };
      d(w, b, x);
    }
  }, [c]);
  const g = () => c ? `You are helping with the outcomes suggestion request: "${c.request_header_title}". Context: ${c.request_context}` : "You are helping the user manage their outcomes towards certain goals.";
  return /* @__PURE__ */ k.jsx(
    v_,
    {
      context: "outcomes",
      title: "Outcomes",
      systemPrompt: g()
    }
  );
}, s6 = () => {
  const {
    selectedPerson: c,
    selectedSuggestionRequest: p,
    leverageLoopChats: d,
    addMessage: g
  } = ki(
    Jo((w) => ({
      selectedPerson: w.selectedPerson,
      selectedSuggestionRequest: w.selectedSuggestionRequest,
      leverageLoopChats: w.leverageLoopChats,
      addMessage: w.addMessage
    }))
  );
  Te.useEffect(() => {
    const w = "leverage-loop-default";
    if (!(d[w]?.messages?.[0]?.role === "assistant")) {
      const D = "leverage-loops", V = {
        id: cu(),
        role: "assistant",
        content: "Select a person from your contacts to assist with your network.",
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !1
      };
      g(D, V, w);
    }
  }, [c, p]);
  const x = () => c ? `You are helping with a leverage loop for ${c.full_name} from ${c.master_person?.master_company?.company_name || "Unknown Company"}. Their title is ${c.master_person?.current_title || "Unknown"}.` : p ? `You are helping with the leverage loop suggestion request: "${p.request_header_title}". Context: ${p.request_context}` : "You are helping the user manage their leverage loops and professional network.", C = () => {
    if (c)
      return `${c.full_name} • ${c.master_person?.master_company?.company_name || ""}`;
    if (p)
      return p.request_header_title;
  }, h = !!(c || p);
  return /* @__PURE__ */ k.jsx(
    v_,
    {
      context: "leverage-loops",
      title: "Leverage Loops",
      subtitle: C(),
      systemPrompt: x(),
      showComposer: h
    }
  );
}, c6 = "_app_4u5b6_5", f6 = "_mainContent_4u5b6_15", _E = {
  app: c6,
  mainContent: f6
}, d6 = ({
  agentName: c = "Copilot",
  token: p,
  dataSource: d,
  baseUrl: g,
  user_id: x,
  copilot_llm_endpoint: C,
  user_name: h
}) => {
  const [w, R] = Te.useState("copilot"), b = jr((ae) => ae.setVariables), { setSelectedPerson: D, setSelectedSuggestionRequest: A } = ki(
    Jo((ae) => ({
      setSelectedPerson: ae.setSelectedPerson,
      setSelectedSuggestionRequest: ae.setSelectedSuggestionRequest
    }))
  );
  Te.useLayoutEffect(() => {
    b({ token: p, baseUrl: g, dataSource: d, user_id: x, copilot_llm_endpoint: C, user_name: h });
  }, [p, g, d, x, C, h]);
  const V = (ae) => {
    R(ae), ae === "leverage-loops" && (D(null), A(null)), ae === "outcomes" && A(null);
  }, H = () => {
    switch (w) {
      case "copilot":
        return /* @__PURE__ */ k.jsx(gE, { agentName: c });
      case "outcomes":
        return /* @__PURE__ */ k.jsx(u6, {});
      case "leverage-loops":
        return /* @__PURE__ */ k.jsx(s6, {});
      default:
        return /* @__PURE__ */ k.jsx(gE, { agentName: c });
    }
  };
  return /* @__PURE__ */ k.jsxs("div", { className: _E.app, children: [
    /* @__PURE__ */ k.jsx(
      l6,
      {
        activeSection: w,
        onSectionChange: R,
        onSectionChangeConfiguration: V
      }
    ),
    /* @__PURE__ */ k.jsx("main", { className: _E.mainContent, children: H() })
  ] });
};
var by = { exports: {} }, Za = {}, Ry = { exports: {} }, e_ = {};
var SE;
function p6() {
  return SE || (SE = 1, (function(c) {
    function p(ee, Me) {
      var ge = ee.length;
      ee.push(Me);
      e: for (; 0 < ge; ) {
        var F = ge - 1 >>> 1, Z = ee[F];
        if (0 < x(Z, Me)) ee[F] = Me, ee[ge] = Z, ge = F;
        else break e;
      }
    }
    function d(ee) {
      return ee.length === 0 ? null : ee[0];
    }
    function g(ee) {
      if (ee.length === 0) return null;
      var Me = ee[0], ge = ee.pop();
      if (ge !== Me) {
        ee[0] = ge;
        e: for (var F = 0, Z = ee.length, et = Z >>> 1; F < et; ) {
          var Ve = 2 * (F + 1) - 1, pt = ee[Ve], at = Ve + 1, ze = ee[at];
          if (0 > x(pt, ge)) at < Z && 0 > x(ze, pt) ? (ee[F] = ze, ee[at] = ge, F = at) : (ee[F] = pt, ee[Ve] = ge, F = Ve);
          else if (at < Z && 0 > x(ze, ge)) ee[F] = ze, ee[at] = ge, F = at;
          else break e;
        }
      }
      return Me;
    }
    function x(ee, Me) {
      var ge = ee.sortIndex - Me.sortIndex;
      return ge !== 0 ? ge : ee.id - Me.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var C = performance;
      c.unstable_now = function() {
        return C.now();
      };
    } else {
      var h = Date, w = h.now();
      c.unstable_now = function() {
        return h.now() - w;
      };
    }
    var R = [], b = [], D = 1, A = null, V = 3, H = !1, ae = !1, ie = !1, xe = typeof setTimeout == "function" ? setTimeout : null, we = typeof clearTimeout == "function" ? clearTimeout : null, Ee = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ce(ee) {
      for (var Me = d(b); Me !== null; ) {
        if (Me.callback === null) g(b);
        else if (Me.startTime <= ee) g(b), Me.sortIndex = Me.expirationTime, p(R, Me);
        else break;
        Me = d(b);
      }
    }
    function le(ee) {
      if (ie = !1, Ce(ee), !ae) if (d(R) !== null) ae = !0, ue(se);
      else {
        var Me = d(b);
        Me !== null && he(le, Me.startTime - ee);
      }
    }
    function se(ee, Me) {
      ae = !1, ie && (ie = !1, we(je), je = -1), H = !0;
      var ge = V;
      try {
        for (Ce(Me), A = d(R); A !== null && (!(A.expirationTime > Me) || ee && !te()); ) {
          var F = A.callback;
          if (typeof F == "function") {
            A.callback = null, V = A.priorityLevel;
            var Z = F(A.expirationTime <= Me);
            Me = c.unstable_now(), typeof Z == "function" ? A.callback = Z : A === d(R) && g(R), Ce(Me);
          } else g(R);
          A = d(R);
        }
        if (A !== null) var et = !0;
        else {
          var Ve = d(b);
          Ve !== null && he(le, Ve.startTime - Me), et = !1;
        }
        return et;
      } finally {
        A = null, V = ge, H = !1;
      }
    }
    var We = !1, Le = null, je = -1, Ge = 5, Je = -1;
    function te() {
      return !(c.unstable_now() - Je < Ge);
    }
    function L() {
      if (Le !== null) {
        var ee = c.unstable_now();
        Je = ee;
        var Me = !0;
        try {
          Me = Le(!0, ee);
        } finally {
          Me ? Y() : (We = !1, Le = null);
        }
      } else We = !1;
    }
    var Y;
    if (typeof Ee == "function") Y = function() {
      Ee(L);
    };
    else if (typeof MessageChannel < "u") {
      var ve = new MessageChannel(), ke = ve.port2;
      ve.port1.onmessage = L, Y = function() {
        ke.postMessage(null);
      };
    } else Y = function() {
      xe(L, 0);
    };
    function ue(ee) {
      Le = ee, We || (We = !0, Y());
    }
    function he(ee, Me) {
      je = xe(function() {
        ee(c.unstable_now());
      }, Me);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(ee) {
      ee.callback = null;
    }, c.unstable_continueExecution = function() {
      ae || H || (ae = !0, ue(se));
    }, c.unstable_forceFrameRate = function(ee) {
      0 > ee || 125 < ee ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ge = 0 < ee ? Math.floor(1e3 / ee) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return V;
    }, c.unstable_getFirstCallbackNode = function() {
      return d(R);
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
      var ge = V;
      V = Me;
      try {
        return ee();
      } finally {
        V = ge;
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
      var ge = V;
      V = ee;
      try {
        return Me();
      } finally {
        V = ge;
      }
    }, c.unstable_scheduleCallback = function(ee, Me, ge) {
      var F = c.unstable_now();
      switch (typeof ge == "object" && ge !== null ? (ge = ge.delay, ge = typeof ge == "number" && 0 < ge ? F + ge : F) : ge = F, ee) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return Z = ge + Z, ee = { id: D++, callback: Me, priorityLevel: ee, startTime: ge, expirationTime: Z, sortIndex: -1 }, ge > F ? (ee.sortIndex = ge, p(b, ee), d(R) === null && ee === d(b) && (ie ? (we(je), je = -1) : ie = !0, he(le, ge - F))) : (ee.sortIndex = Z, p(R, ee), ae || H || (ae = !0, ue(se))), ee;
    }, c.unstable_shouldYield = te, c.unstable_wrapCallback = function(ee) {
      var Me = V;
      return function() {
        var ge = V;
        V = Me;
        try {
          return ee.apply(this, arguments);
        } finally {
          V = ge;
        }
      };
    };
  })(e_)), e_;
}
var t_ = {};
var CE;
function v6() {
  return CE || (CE = 1, (function(c) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = !1, d = 5;
      function g(Ne, tt) {
        var Rt = Ne.length;
        Ne.push(tt), h(Ne, tt, Rt);
      }
      function x(Ne) {
        return Ne.length === 0 ? null : Ne[0];
      }
      function C(Ne) {
        if (Ne.length === 0)
          return null;
        var tt = Ne[0], Rt = Ne.pop();
        return Rt !== tt && (Ne[0] = Rt, w(Ne, Rt, 0)), tt;
      }
      function h(Ne, tt, Rt) {
        for (var Kt = Rt; Kt > 0; ) {
          var sn = Kt - 1 >>> 1, Cn = Ne[sn];
          if (R(Cn, tt) > 0)
            Ne[sn] = tt, Ne[Kt] = Cn, Kt = sn;
          else
            return;
        }
      }
      function w(Ne, tt, Rt) {
        for (var Kt = Rt, sn = Ne.length, Cn = sn >>> 1; Kt < Cn; ) {
          var vn = (Kt + 1) * 2 - 1, or = Ne[vn], cn = vn + 1, Zt = Ne[cn];
          if (R(or, tt) < 0)
            cn < sn && R(Zt, or) < 0 ? (Ne[Kt] = Zt, Ne[cn] = tt, Kt = cn) : (Ne[Kt] = or, Ne[vn] = tt, Kt = vn);
          else if (cn < sn && R(Zt, tt) < 0)
            Ne[Kt] = Zt, Ne[cn] = tt, Kt = cn;
          else
            return;
        }
      }
      function R(Ne, tt) {
        var Rt = Ne.sortIndex - tt.sortIndex;
        return Rt !== 0 ? Rt : Ne.id - tt.id;
      }
      var b = 1, D = 2, A = 3, V = 4, H = 5;
      function ae(Ne, tt) {
      }
      var ie = typeof performance == "object" && typeof performance.now == "function";
      if (ie) {
        var xe = performance;
        c.unstable_now = function() {
          return xe.now();
        };
      } else {
        var we = Date, Ee = we.now();
        c.unstable_now = function() {
          return we.now() - Ee;
        };
      }
      var Ce = 1073741823, le = -1, se = 250, We = 5e3, Le = 1e4, je = Ce, Ge = [], Je = [], te = 1, L = null, Y = A, ve = !1, ke = !1, ue = !1, he = typeof setTimeout == "function" ? setTimeout : null, ee = typeof clearTimeout == "function" ? clearTimeout : null, Me = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ge(Ne) {
        for (var tt = x(Je); tt !== null; ) {
          if (tt.callback === null)
            C(Je);
          else if (tt.startTime <= Ne)
            C(Je), tt.sortIndex = tt.expirationTime, g(Ge, tt);
          else
            return;
          tt = x(Je);
        }
      }
      function F(Ne) {
        if (ue = !1, ge(Ne), !ke)
          if (x(Ge) !== null)
            ke = !0, In(Z);
          else {
            var tt = x(Je);
            tt !== null && Tr(F, tt.startTime - Ne);
          }
      }
      function Z(Ne, tt) {
        ke = !1, ue && (ue = !1, _a()), ve = !0;
        var Rt = Y;
        try {
          var Kt;
          if (!p) return et(Ne, tt);
        } finally {
          L = null, Y = Rt, ve = !1;
        }
      }
      function et(Ne, tt) {
        var Rt = tt;
        for (ge(Rt), L = x(Ge); L !== null && !(L.expirationTime > Rt && (!Ne || Co())); ) {
          var Kt = L.callback;
          if (typeof Kt == "function") {
            L.callback = null, Y = L.priorityLevel;
            var sn = L.expirationTime <= Rt, Cn = Kt(sn);
            Rt = c.unstable_now(), typeof Cn == "function" ? L.callback = Cn : L === x(Ge) && C(Ge), ge(Rt);
          } else
            C(Ge);
          L = x(Ge);
        }
        if (L !== null)
          return !0;
        var vn = x(Je);
        return vn !== null && Tr(F, vn.startTime - Rt), !1;
      }
      function Ve(Ne, tt) {
        switch (Ne) {
          case b:
          case D:
          case A:
          case V:
          case H:
            break;
          default:
            Ne = A;
        }
        var Rt = Y;
        Y = Ne;
        try {
          return tt();
        } finally {
          Y = Rt;
        }
      }
      function pt(Ne) {
        var tt;
        switch (Y) {
          case b:
          case D:
          case A:
            tt = A;
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
      function ze(Ne, tt, Rt) {
        var Kt = c.unstable_now(), sn;
        if (typeof Rt == "object" && Rt !== null) {
          var Cn = Rt.delay;
          typeof Cn == "number" && Cn > 0 ? sn = Kt + Cn : sn = Kt;
        } else
          sn = Kt;
        var vn;
        switch (Ne) {
          case b:
            vn = le;
            break;
          case D:
            vn = se;
            break;
          case H:
            vn = je;
            break;
          case V:
            vn = Le;
            break;
          case A:
          default:
            vn = We;
            break;
        }
        var or = sn + vn, cn = {
          id: te++,
          callback: tt,
          priorityLevel: Ne,
          startTime: sn,
          expirationTime: or,
          sortIndex: -1
        };
        return sn > Kt ? (cn.sortIndex = sn, g(Je, cn), x(Ge) === null && cn === x(Je) && (ue ? _a() : ue = !0, Tr(F, sn - Kt))) : (cn.sortIndex = or, g(Ge, cn), !ke && !ve && (ke = !0, In(Z))), cn;
      }
      function lt() {
      }
      function vt() {
        !ke && !ve && (ke = !0, In(Z));
      }
      function Qt() {
        return x(Ge);
      }
      function kn(Ne) {
        Ne.callback = null;
      }
      function fr() {
        return Y;
      }
      var Sn = !1, rr = null, Qn = -1, Kn = d, ea = -1;
      function Co() {
        var Ne = c.unstable_now() - ea;
        return !(Ne < Kn);
      }
      function ga() {
      }
      function ar(Ne) {
        if (Ne < 0 || Ne > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Ne > 0 ? Kn = Math.floor(1e3 / Ne) : Kn = d;
      }
      var Mn = function() {
        if (rr !== null) {
          var Ne = c.unstable_now();
          ea = Ne;
          var tt = !0, Rt = !0;
          try {
            Rt = rr(tt, Ne);
          } finally {
            Rt ? Xn() : (Sn = !1, rr = null);
          }
        } else
          Sn = !1;
      }, Xn;
      if (typeof Me == "function")
        Xn = function() {
          Me(Mn);
        };
      else if (typeof MessageChannel < "u") {
        var kr = new MessageChannel(), to = kr.port2;
        kr.port1.onmessage = Mn, Xn = function() {
          to.postMessage(null);
        };
      } else
        Xn = function() {
          he(Mn, 0);
        };
      function In(Ne) {
        rr = Ne, Sn || (Sn = !0, Xn());
      }
      function Tr(Ne, tt) {
        Qn = he(function() {
          Ne(c.unstable_now());
        }, tt);
      }
      function _a() {
        ee(Qn), Qn = -1;
      }
      var no = ga, Eo = null;
      c.unstable_IdlePriority = H, c.unstable_ImmediatePriority = b, c.unstable_LowPriority = V, c.unstable_NormalPriority = A, c.unstable_Profiling = Eo, c.unstable_UserBlockingPriority = D, c.unstable_cancelCallback = kn, c.unstable_continueExecution = vt, c.unstable_forceFrameRate = ar, c.unstable_getCurrentPriorityLevel = fr, c.unstable_getFirstCallbackNode = Qt, c.unstable_next = pt, c.unstable_pauseExecution = lt, c.unstable_requestPaint = no, c.unstable_runWithPriority = Ve, c.unstable_scheduleCallback = ze, c.unstable_shouldYield = Co, c.unstable_wrapCallback = at, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(t_)), t_;
}
var EE;
function YE() {
  return EE || (EE = 1, process.env.NODE_ENV === "production" ? Ry.exports = p6() : Ry.exports = v6()), Ry.exports;
}
var xE;
function h6() {
  if (xE) return Za;
  xE = 1;
  var c = kv(), p = YE();
  function d(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, i = 1; i < arguments.length; i++) r += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var g = /* @__PURE__ */ new Set(), x = {};
  function C(n, r) {
    h(n, r), h(n + "Capture", r);
  }
  function h(n, r) {
    for (x[n] = r, n = 0; n < r.length; n++) g.add(r[n]);
  }
  var w = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), R = Object.prototype.hasOwnProperty, b = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, D = {}, A = {};
  function V(n) {
    return R.call(A, n) ? !0 : R.call(D, n) ? !1 : b.test(n) ? A[n] = !0 : (D[n] = !0, !1);
  }
  function H(n, r, i, u) {
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
  function ae(n, r, i, u) {
    if (r === null || typeof r > "u" || H(n, r, i, u)) return !0;
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
  function ie(n, r, i, u, f, m, E) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = f, this.mustUseProperty = i, this.propertyName = n, this.type = r, this.sanitizeURL = m, this.removeEmptyString = E;
  }
  var xe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    xe[n] = new ie(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    xe[r] = new ie(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    xe[n] = new ie(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    xe[n] = new ie(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    xe[n] = new ie(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    xe[n] = new ie(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    xe[n] = new ie(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    xe[n] = new ie(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    xe[n] = new ie(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var we = /[\-:]([a-z])/g;
  function Ee(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      we,
      Ee
    );
    xe[r] = new ie(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(we, Ee);
    xe[r] = new ie(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(we, Ee);
    xe[r] = new ie(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    xe[n] = new ie(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), xe.xlinkHref = new ie("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    xe[n] = new ie(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ce(n, r, i, u) {
    var f = xe.hasOwnProperty(r) ? xe[r] : null;
    (f !== null ? f.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ae(r, i, f, u) && (i = null), u || f === null ? V(r) && (i === null ? n.removeAttribute(r) : n.setAttribute(r, "" + i)) : f.mustUseProperty ? n[f.propertyName] = i === null ? f.type === 3 ? !1 : "" : i : (r = f.attributeName, u = f.attributeNamespace, i === null ? n.removeAttribute(r) : (f = f.type, i = f === 3 || f === 4 && i === !0 ? "" : "" + i, u ? n.setAttributeNS(u, r, i) : n.setAttribute(r, i))));
  }
  var le = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, se = /* @__PURE__ */ Symbol.for("react.element"), We = /* @__PURE__ */ Symbol.for("react.portal"), Le = /* @__PURE__ */ Symbol.for("react.fragment"), je = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ge = /* @__PURE__ */ Symbol.for("react.profiler"), Je = /* @__PURE__ */ Symbol.for("react.provider"), te = /* @__PURE__ */ Symbol.for("react.context"), L = /* @__PURE__ */ Symbol.for("react.forward_ref"), Y = /* @__PURE__ */ Symbol.for("react.suspense"), ve = /* @__PURE__ */ Symbol.for("react.suspense_list"), ke = /* @__PURE__ */ Symbol.for("react.memo"), ue = /* @__PURE__ */ Symbol.for("react.lazy"), he = /* @__PURE__ */ Symbol.for("react.offscreen"), ee = Symbol.iterator;
  function Me(n) {
    return n === null || typeof n != "object" ? null : (n = ee && n[ee] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ge = Object.assign, F;
  function Z(n) {
    if (F === void 0) try {
      throw Error();
    } catch (i) {
      var r = i.stack.trim().match(/\n( *(at )?)/);
      F = r && r[1] || "";
    }
    return `
` + F + n;
  }
  var et = !1;
  function Ve(n, r) {
    if (!n || et) return "";
    et = !0;
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
        for (var f = K.stack.split(`
`), m = u.stack.split(`
`), E = f.length - 1, M = m.length - 1; 1 <= E && 0 <= M && f[E] !== m[M]; ) M--;
        for (; 1 <= E && 0 <= M; E--, M--) if (f[E] !== m[M]) {
          if (E !== 1 || M !== 1)
            do
              if (E--, M--, 0 > M || f[E] !== m[M]) {
                var U = `
` + f[E].replace(" at new ", " at ");
                return n.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", n.displayName)), U;
              }
            while (1 <= E && 0 <= M);
          break;
        }
      }
    } finally {
      et = !1, Error.prepareStackTrace = i;
    }
    return (n = n ? n.displayName || n.name : "") ? Z(n) : "";
  }
  function pt(n) {
    switch (n.tag) {
      case 5:
        return Z(n.type);
      case 16:
        return Z("Lazy");
      case 13:
        return Z("Suspense");
      case 19:
        return Z("SuspenseList");
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
  function at(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Le:
        return "Fragment";
      case We:
        return "Portal";
      case Ge:
        return "Profiler";
      case je:
        return "StrictMode";
      case Y:
        return "Suspense";
      case ve:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case te:
        return (n.displayName || "Context") + ".Consumer";
      case Je:
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
  function ze(n) {
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
        return r === je ? "StrictMode" : "Mode";
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
  function vt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Qt(n) {
    var r = vt(n) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var f = i.get, m = i.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return f.call(this);
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
  function kn(n) {
    n._valueTracker || (n._valueTracker = Qt(n));
  }
  function fr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var i = r.getValue(), u = "";
    return n && (u = vt(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== i ? (r.setValue(n), !0) : !1;
  }
  function Sn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function rr(n, r) {
    var i = r.checked;
    return ge({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: i ?? n._wrapperState.initialChecked });
  }
  function Qn(n, r) {
    var i = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    i = lt(r.value != null ? r.value : i), n._wrapperState = { initialChecked: u, initialValue: i, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Kn(n, r) {
    r = r.checked, r != null && Ce(n, "checked", r, !1);
  }
  function ea(n, r) {
    Kn(n, r);
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
    (r !== "number" || Sn(n.ownerDocument) !== n) && (i == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + i && (n.defaultValue = "" + i));
  }
  var ar = Array.isArray;
  function Mn(n, r, i, u) {
    if (n = n.options, r) {
      r = {};
      for (var f = 0; f < i.length; f++) r["$" + i[f]] = !0;
      for (i = 0; i < n.length; i++) f = r.hasOwnProperty("$" + n[i].value), n[i].selected !== f && (n[i].selected = f), f && u && (n[i].defaultSelected = !0);
    } else {
      for (i = "" + lt(i), r = null, f = 0; f < n.length; f++) {
        if (n[f].value === i) {
          n[f].selected = !0, u && (n[f].defaultSelected = !0);
          return;
        }
        r !== null || n[f].disabled || (r = n[f]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Xn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(d(91));
    return ge({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function kr(n, r) {
    var i = r.value;
    if (i == null) {
      if (i = r.children, r = r.defaultValue, i != null) {
        if (r != null) throw Error(d(92));
        if (ar(i)) {
          if (1 < i.length) throw Error(d(93));
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
  function In(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Tr(n) {
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
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Tr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var no, Eo = (function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, i, u, f) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, i, u, f);
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
      var u = i.indexOf("--") === 0, f = Kt(i, r[i], u);
      i === "float" && (i = "cssFloat"), u ? n.setProperty(i, f) : n[i] = f;
    }
  }
  var Cn = ge({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function vn(n, r) {
    if (r) {
      if (Cn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(d(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(d(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(d(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(d(62));
    }
  }
  function or(n, r) {
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
  var en = null, Sa = null, Nr = null;
  function ja(n) {
    if (n = ot(n)) {
      if (typeof en != "function") throw Error(d(280));
      var r = n.stateNode;
      r && (r = xn(r), en(n.stateNode, n.type, r));
    }
  }
  function Zo(n) {
    Sa ? Nr ? Nr.push(n) : Nr = [n] : Sa = n;
  }
  function hl() {
    if (Sa) {
      var n = Sa, r = Nr;
      if (Nr = Sa = null, ja(n), r) for (n = 0; n < r.length; n++) ja(r[n]);
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
      Ni = !1, (Sa !== null || Nr !== null) && (Ti(), hl());
    }
  }
  function Ar(n, r) {
    var i = n.stateNode;
    if (i === null) return null;
    var u = xn(i);
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
    if (i && typeof i != "function") throw Error(d(231, r, typeof i));
    return i;
  }
  var Ur = !1;
  if (w) try {
    var dr = {};
    Object.defineProperty(dr, "passive", { get: function() {
      Ur = !0;
    } }), window.addEventListener("test", dr, dr), window.removeEventListener("test", dr, dr);
  } catch {
    Ur = !1;
  }
  function xo(n, r, i, u, f, m, E, M, U) {
    var K = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(i, K);
    } catch (me) {
      this.onError(me);
    }
  }
  var ro = !1, wo = null, bo = !1, j = null, ce = { onError: function(n) {
    ro = !0, wo = n;
  } };
  function Ae(n, r, i, u, f, m, E, M, U) {
    ro = !1, wo = null, xo.apply(ce, arguments);
  }
  function Ye(n, r, i, u, f, m, E, M, U) {
    if (Ae.apply(this, arguments), ro) {
      if (ro) {
        var K = wo;
        ro = !1, wo = null;
      } else throw Error(d(198));
      bo || (bo = !0, j = K);
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
  function Dt(n) {
    if (Et(n) !== n) throw Error(d(188));
  }
  function Tt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Et(n), r === null) throw Error(d(188));
      return r !== n ? null : n;
    }
    for (var i = n, u = r; ; ) {
      var f = i.return;
      if (f === null) break;
      var m = f.alternate;
      if (m === null) {
        if (u = f.return, u !== null) {
          i = u;
          continue;
        }
        break;
      }
      if (f.child === m.child) {
        for (m = f.child; m; ) {
          if (m === i) return Dt(f), n;
          if (m === u) return Dt(f), r;
          m = m.sibling;
        }
        throw Error(d(188));
      }
      if (i.return !== u.return) i = f, u = m;
      else {
        for (var E = !1, M = f.child; M; ) {
          if (M === i) {
            E = !0, i = f, u = m;
            break;
          }
          if (M === u) {
            E = !0, u = f, i = m;
            break;
          }
          M = M.sibling;
        }
        if (!E) {
          for (M = m.child; M; ) {
            if (M === i) {
              E = !0, i = m, u = f;
              break;
            }
            if (M === u) {
              E = !0, u = m, i = f;
              break;
            }
            M = M.sibling;
          }
          if (!E) throw Error(d(189));
        }
      }
      if (i.alternate !== u) throw Error(d(190));
    }
    if (i.tag !== 3) throw Error(d(188));
    return i.stateNode.current === i ? n : r;
  }
  function On(n) {
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
  var hn = p.unstable_scheduleCallback, pr = p.unstable_cancelCallback, ao = p.unstable_shouldYield, oo = p.unstable_requestPaint, xt = p.unstable_now, bt = p.unstable_getCurrentPriorityLevel, io = p.unstable_ImmediatePriority, gl = p.unstable_UserBlockingPriority, _l = p.unstable_NormalPriority, Di = p.unstable_LowPriority, du = p.unstable_IdlePriority, Mi = null, ta = null;
  function cs(n) {
    if (ta && typeof ta.onCommitFiberRoot == "function") try {
      ta.onCommitFiberRoot(Mi, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var zr = Math.clz32 ? Math.clz32 : pu, kc = Math.log, Tc = Math.LN2;
  function pu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (kc(n) / Tc | 0) | 0;
  }
  var Oi = 64, Ca = 4194304;
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
    var u = 0, f = n.suspendedLanes, m = n.pingedLanes, E = i & 268435455;
    if (E !== 0) {
      var M = E & ~f;
      M !== 0 ? u = lo(M) : (m &= E, m !== 0 && (u = lo(m)));
    } else E = i & ~f, E !== 0 ? u = lo(E) : m !== 0 && (u = lo(m));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && (r & f) === 0 && (f = u & -u, m = r & -r, f >= m || f === 16 && (m & 4194240) !== 0)) return r;
    if ((u & 4) !== 0 && (u |= i & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) i = 31 - zr(r), f = 1 << i, u |= n[i], r &= ~f;
    return u;
  }
  function vu(n, r) {
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
    for (var i = n.suspendedLanes, u = n.pingedLanes, f = n.expirationTimes, m = n.pendingLanes; 0 < m; ) {
      var E = 31 - zr(m), M = 1 << E, U = f[E];
      U === -1 ? ((M & i) === 0 || (M & u) !== 0) && (f[E] = vu(M, r)) : U <= r && (n.expiredLanes |= M), m &= ~M;
    }
  }
  function Li(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function hu() {
    var n = Oi;
    return Oi <<= 1, (Oi & 4194240) === 0 && (Oi = 64), n;
  }
  function mu(n) {
    for (var r = [], i = 0; 31 > i; i++) r.push(n);
    return r;
  }
  function ei(n, r, i) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - zr(r), n[r] = i;
  }
  function md(n, r) {
    var i = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < i; ) {
      var f = 31 - zr(i), m = 1 << f;
      r[f] = 0, u[f] = -1, n[f] = -1, i &= ~m;
    }
  }
  function ti(n, r) {
    var i = n.entangledLanes |= r;
    for (n = n.entanglements; i; ) {
      var u = 31 - zr(i), f = 1 << u;
      f & r | n[u] & r && (n[u] |= r), i &= ~f;
    }
  }
  var $t = 0;
  function yu(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Ft, fs, Ro, gt, gu, vr = !1, ko = [], Pr = null, To = null, mn = null, tn = /* @__PURE__ */ new Map(), ji = /* @__PURE__ */ new Map(), Jn = [], Ir = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Aa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Pr = null;
        break;
      case "dragenter":
      case "dragleave":
        To = null;
        break;
      case "mouseover":
      case "mouseout":
        mn = null;
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
  function Cl(n, r, i, u, f, m) {
    return n === null || n.nativeEvent !== m ? (n = { blockedOn: r, domEventName: i, eventSystemFlags: u, nativeEvent: m, targetContainers: [f] }, r !== null && (r = ot(r), r !== null && fs(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, f !== null && r.indexOf(f) === -1 && r.push(f), n);
  }
  function ds(n, r, i, u, f) {
    switch (r) {
      case "focusin":
        return Pr = Cl(Pr, n, r, i, u, f), !0;
      case "dragenter":
        return To = Cl(To, n, r, i, u, f), !0;
      case "mouseover":
        return mn = Cl(mn, n, r, i, u, f), !0;
      case "pointerover":
        var m = f.pointerId;
        return tn.set(m, Cl(tn.get(m) || null, n, r, i, u, f)), !0;
      case "gotpointercapture":
        return m = f.pointerId, ji.set(m, Cl(ji.get(m) || null, n, r, i, u, f)), !0;
    }
    return !1;
  }
  function ps(n) {
    var r = Dl(n.target);
    if (r !== null) {
      var i = Et(r);
      if (i !== null) {
        if (r = i.tag, r === 13) {
          if (r = _t(i), r !== null) {
            n.blockedOn = r, gu(n.priority, function() {
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
      var i = Cu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (i === null) {
        i = n.nativeEvent;
        var u = new i.constructor(i.type, i);
        cn = u, i.target.dispatchEvent(u), cn = null;
      } else return r = ot(i), r !== null && fs(r), n.blockedOn = i, !1;
      r.shift();
    }
    return !0;
  }
  function El(n, r, i) {
    Ai(n) && i.delete(r);
  }
  function yd() {
    vr = !1, Pr !== null && Ai(Pr) && (Pr = null), To !== null && Ai(To) && (To = null), mn !== null && Ai(mn) && (mn = null), tn.forEach(El), ji.forEach(El);
  }
  function Ua(n, r) {
    n.blockedOn === r && (n.blockedOn = null, vr || (vr = !0, p.unstable_scheduleCallback(p.unstable_NormalPriority, yd)));
  }
  function so(n) {
    function r(f) {
      return Ua(f, n);
    }
    if (0 < ko.length) {
      Ua(ko[0], n);
      for (var i = 1; i < ko.length; i++) {
        var u = ko[i];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (Pr !== null && Ua(Pr, n), To !== null && Ua(To, n), mn !== null && Ua(mn, n), tn.forEach(r), ji.forEach(r), i = 0; i < Jn.length; i++) u = Jn[i], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < Jn.length && (i = Jn[0], i.blockedOn === null); ) ps(i), i.blockedOn === null && Jn.shift();
  }
  var No = le.ReactCurrentBatchConfig, za = !0;
  function _u(n, r, i, u) {
    var f = $t, m = No.transition;
    No.transition = null;
    try {
      $t = 1, Ui(n, r, i, u);
    } finally {
      $t = f, No.transition = m;
    }
  }
  function Su(n, r, i, u) {
    var f = $t, m = No.transition;
    No.transition = null;
    try {
      $t = 4, Ui(n, r, i, u);
    } finally {
      $t = f, No.transition = m;
    }
  }
  function Ui(n, r, i, u) {
    if (za) {
      var f = Cu(n, r, i, u);
      if (f === null) Fc(n, r, u, xl, i), Aa(n, u);
      else if (ds(f, n, r, i, u)) u.stopPropagation();
      else if (Aa(n, u), r & 4 && -1 < Ir.indexOf(n)) {
        for (; f !== null; ) {
          var m = ot(f);
          if (m !== null && Ft(m), m = Cu(n, r, i, u), m === null && Fc(n, r, u, xl, i), m === f) break;
          f = m;
        }
        f !== null && u.stopPropagation();
      } else Fc(n, r, u, null, i);
    }
  }
  var xl = null;
  function Cu(n, r, i, u) {
    if (xl = null, n = Zt(u), n = Dl(n), n !== null) if (r = Et(n), r === null) n = null;
    else if (i = r.tag, i === 13) {
      if (n = _t(r), n !== null) return n;
      n = null;
    } else if (i === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return xl = n, null;
  }
  function Eu(n) {
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
          case io:
            return 1;
          case gl:
            return 4;
          case _l:
          case Di:
            return 16;
          case du:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var co = null, S = null, O = null;
  function Q() {
    if (O) return O;
    var n, r = S, i = r.length, u, f = "value" in co ? co.value : co.textContent, m = f.length;
    for (n = 0; n < i && r[n] === f[n]; n++) ;
    var E = i - n;
    for (u = 1; u <= E && r[i - u] === f[m - u]; u++) ;
    return O = f.slice(n, 1 < u ? 1 - u : void 0);
  }
  function J(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function be() {
    return !0;
  }
  function ut() {
    return !1;
  }
  function Oe(n) {
    function r(i, u, f, m, E) {
      this._reactName = i, this._targetInst = f, this.type = u, this.nativeEvent = m, this.target = E, this.currentTarget = null;
      for (var M in n) n.hasOwnProperty(M) && (i = n[M], this[M] = i ? i(m) : m[M]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? be : ut, this.isPropagationStopped = ut, this;
    }
    return ge(r.prototype, { preventDefault: function() {
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
  }, defaultPrevented: 0, isTrusted: 0 }, Mt = Oe(ft), Vt = ge({}, ft, { view: 0, detail: 0 }), dn = Oe(Vt), nn, kt, rn, En = ge({}, Vt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ed, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== rn && (rn && n.type === "mousemove" ? (nn = n.screenX - rn.screenX, kt = n.screenY - rn.screenY) : kt = nn = 0, rn = n), nn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : kt;
  } }), zi = Oe(En), vs = ge({}, En, { dataTransfer: 0 }), ni = Oe(vs), hs = ge({}, Vt, { relatedTarget: 0 }), wl = Oe(hs), gd = ge({}, ft, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Nc = Oe(gd), _d = ge({}, ft, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Dv = Oe(_d), Sd = ge({}, ft, { data: 0 }), Cd = Oe(Sd), Mv = {
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
  }, Ov = {
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
  function ri(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Uy[n]) ? !!r[n] : !1;
  }
  function Ed() {
    return ri;
  }
  var xd = ge({}, Vt, { key: function(n) {
    if (n.key) {
      var r = Mv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = J(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Ov[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ed, charCode: function(n) {
    return n.type === "keypress" ? J(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? J(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), wd = Oe(xd), bd = ge({}, En, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Lv = Oe(bd), Dc = ge({}, Vt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ed }), jv = Oe(Dc), na = ge({}, ft, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ai = Oe(na), Fn = ge({}, En, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), oi = Oe(Fn), Rd = [9, 13, 27, 32], xu = w && "CompositionEvent" in window, ms = null;
  w && "documentMode" in document && (ms = document.documentMode);
  var ys = w && "TextEvent" in window && !ms, Av = w && (!xu || ms && 8 < ms && 11 >= ms), Uv = " ", Mc = !1;
  function zv(n, r) {
    switch (n) {
      case "keyup":
        return Rd.indexOf(r.keyCode) !== -1;
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
        return r.which !== 32 ? null : (Mc = !0, Uv);
      case "textInput":
        return n = r.data, n === Uv && Mc ? null : n;
      default:
        return null;
    }
  }
  function zy(n, r) {
    if (wu) return n === "compositionend" || !xu && zv(n, r) ? (n = Q(), O = S = co = null, wu = !1, n) : null;
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
  function kd(n, r, i, u) {
    Zo(u), r = xs(r, "onChange"), 0 < r.length && (i = new Mt("onChange", "change", null, i, u), n.push({ event: i, listeners: r }));
  }
  var Do = null, bl = null;
  function Vv(n) {
    Tl(n, 0);
  }
  function gs(n) {
    var r = po(n);
    if (fr(r)) return n;
  }
  function Iy(n, r) {
    if (n === "change") return r;
  }
  var Hv = !1;
  if (w) {
    var Td;
    if (w) {
      var Nd = "oninput" in document;
      if (!Nd) {
        var $v = document.createElement("div");
        $v.setAttribute("oninput", "return;"), Nd = typeof $v.oninput == "function";
      }
      Td = Nd;
    } else Td = !1;
    Hv = Td && (!document.documentMode || 9 < document.documentMode);
  }
  function Bv() {
    Do && (Do.detachEvent("onpropertychange", qv), bl = Do = null);
  }
  function qv(n) {
    if (n.propertyName === "value" && gs(bl)) {
      var r = [];
      kd(r, bl, n, Zt(n)), yl(Vv, r);
    }
  }
  function Fy(n, r, i) {
    n === "focusin" ? (Bv(), Do = r, bl = i, Do.attachEvent("onpropertychange", qv)) : n === "focusout" && Bv();
  }
  function Wv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return gs(bl);
  }
  function Vy(n, r) {
    if (n === "click") return gs(r);
  }
  function Yv(n, r) {
    if (n === "input" || n === "change") return gs(r);
  }
  function Hy(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var fo = typeof Object.is == "function" ? Object.is : Hy;
  function _s(n, r) {
    if (fo(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var i = Object.keys(n), u = Object.keys(r);
    if (i.length !== u.length) return !1;
    for (u = 0; u < i.length; u++) {
      var f = i[u];
      if (!R.call(r, f) || !fo(n[f], r[f])) return !1;
    }
    return !0;
  }
  function Gv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Oc(n, r) {
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
  function Ss() {
    for (var n = window, r = Sn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var i = typeof r.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) n = r.contentWindow;
      else break;
      r = Sn(n.document);
    }
    return r;
  }
  function Lc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function bu(n) {
    var r = Ss(), i = n.focusedElem, u = n.selectionRange;
    if (r !== i && i && i.ownerDocument && Pi(i.ownerDocument.documentElement, i)) {
      if (u !== null && Lc(i)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in i) i.selectionStart = r, i.selectionEnd = Math.min(n, i.value.length);
        else if (n = (r = i.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var f = i.textContent.length, m = Math.min(u.start, f);
          u = u.end === void 0 ? m : Math.min(u.end, f), !n.extend && m > u && (f = u, u = m, m = f), f = Oc(i, m);
          var E = Oc(
            i,
            u
          );
          f && E && (n.rangeCount !== 1 || n.anchorNode !== f.node || n.anchorOffset !== f.offset || n.focusNode !== E.node || n.focusOffset !== E.offset) && (r = r.createRange(), r.setStart(f.node, f.offset), n.removeAllRanges(), m > u ? (n.addRange(r), n.extend(E.node, E.offset)) : (r.setEnd(E.node, E.offset), n.addRange(r)));
        }
      }
      for (r = [], n = i; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof i.focus == "function" && i.focus(), i = 0; i < r.length; i++) n = r[i], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var $y = w && "documentMode" in document && 11 >= document.documentMode, Ru = null, Dd = null, Cs = null, Md = !1;
  function Od(n, r, i) {
    var u = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Md || Ru == null || Ru !== Sn(u) || (u = Ru, "selectionStart" in u && Lc(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), Cs && _s(Cs, u) || (Cs = u, u = xs(Dd, "onSelect"), 0 < u.length && (r = new Mt("onSelect", "select", null, r, i), n.push({ event: r, listeners: u }), r.target = Ru)));
  }
  function jc(n, r) {
    var i = {};
    return i[n.toLowerCase()] = r.toLowerCase(), i["Webkit" + n] = "webkit" + r, i["Moz" + n] = "moz" + r, i;
  }
  var Rl = { animationend: jc("Animation", "AnimationEnd"), animationiteration: jc("Animation", "AnimationIteration"), animationstart: jc("Animation", "AnimationStart"), transitionend: jc("Transition", "TransitionEnd") }, hr = {}, Ld = {};
  w && (Ld = document.createElement("div").style, "AnimationEvent" in window || (delete Rl.animationend.animation, delete Rl.animationiteration.animation, delete Rl.animationstart.animation), "TransitionEvent" in window || delete Rl.transitionend.transition);
  function Ac(n) {
    if (hr[n]) return hr[n];
    if (!Rl[n]) return n;
    var r = Rl[n], i;
    for (i in r) if (r.hasOwnProperty(i) && i in Ld) return hr[n] = r[i];
    return n;
  }
  var Qv = Ac("animationend"), Kv = Ac("animationiteration"), Xv = Ac("animationstart"), Jv = Ac("transitionend"), jd = /* @__PURE__ */ new Map(), Uc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Pa(n, r) {
    jd.set(n, r), C(r, [n]);
  }
  for (var Ad = 0; Ad < Uc.length; Ad++) {
    var kl = Uc[Ad], By = kl.toLowerCase(), qy = kl[0].toUpperCase() + kl.slice(1);
    Pa(By, "on" + qy);
  }
  Pa(Qv, "onAnimationEnd"), Pa(Kv, "onAnimationIteration"), Pa(Xv, "onAnimationStart"), Pa("dblclick", "onDoubleClick"), Pa("focusin", "onFocus"), Pa("focusout", "onBlur"), Pa(Jv, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), C("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), C("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), C("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), C("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), C("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), C("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Es = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ud = new Set("cancel close invalid load scroll toggle".split(" ").concat(Es));
  function zc(n, r, i) {
    var u = n.type || "unknown-event";
    n.currentTarget = i, Ye(u, r, void 0, n), n.currentTarget = null;
  }
  function Tl(n, r) {
    r = (r & 4) !== 0;
    for (var i = 0; i < n.length; i++) {
      var u = n[i], f = u.event;
      u = u.listeners;
      e: {
        var m = void 0;
        if (r) for (var E = u.length - 1; 0 <= E; E--) {
          var M = u[E], U = M.instance, K = M.currentTarget;
          if (M = M.listener, U !== m && f.isPropagationStopped()) break e;
          zc(f, M, K), m = U;
        }
        else for (E = 0; E < u.length; E++) {
          if (M = u[E], U = M.instance, K = M.currentTarget, M = M.listener, U !== m && f.isPropagationStopped()) break e;
          zc(f, M, K), m = U;
        }
      }
    }
    if (bo) throw n = j, bo = !1, j = null, n;
  }
  function Xt(n, r) {
    var i = r[Rs];
    i === void 0 && (i = r[Rs] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    i.has(u) || (Zv(r, n, 2, !1), i.add(u));
  }
  function Pc(n, r, i) {
    var u = 0;
    r && (u |= 4), Zv(i, n, u, r);
  }
  var Ic = "_reactListening" + Math.random().toString(36).slice(2);
  function ku(n) {
    if (!n[Ic]) {
      n[Ic] = !0, g.forEach(function(i) {
        i !== "selectionchange" && (Ud.has(i) || Pc(i, !1, n), Pc(i, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ic] || (r[Ic] = !0, Pc("selectionchange", !1, r));
    }
  }
  function Zv(n, r, i, u) {
    switch (Eu(r)) {
      case 1:
        var f = _u;
        break;
      case 4:
        f = Su;
        break;
      default:
        f = Ui;
    }
    i = f.bind(null, r, i, n), f = void 0, !Ur || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (f = !0), u ? f !== void 0 ? n.addEventListener(r, i, { capture: !0, passive: f }) : n.addEventListener(r, i, !0) : f !== void 0 ? n.addEventListener(r, i, { passive: f }) : n.addEventListener(r, i, !1);
  }
  function Fc(n, r, i, u, f) {
    var m = u;
    if ((r & 1) === 0 && (r & 2) === 0 && u !== null) e: for (; ; ) {
      if (u === null) return;
      var E = u.tag;
      if (E === 3 || E === 4) {
        var M = u.stateNode.containerInfo;
        if (M === f || M.nodeType === 8 && M.parentNode === f) break;
        if (E === 4) for (E = u.return; E !== null; ) {
          var U = E.tag;
          if ((U === 3 || U === 4) && (U = E.stateNode.containerInfo, U === f || U.nodeType === 8 && U.parentNode === f)) return;
          E = E.return;
        }
        for (; M !== null; ) {
          if (E = Dl(M), E === null) return;
          if (U = E.tag, U === 5 || U === 6) {
            u = m = E;
            continue e;
          }
          M = M.parentNode;
        }
      }
      u = u.return;
    }
    yl(function() {
      var K = m, me = Zt(i), _e = [];
      e: {
        var pe = jd.get(n);
        if (pe !== void 0) {
          var He = Mt, Qe = n;
          switch (n) {
            case "keypress":
              if (J(i) === 0) break e;
            case "keydown":
            case "keyup":
              He = wd;
              break;
            case "focusin":
              Qe = "focus", He = wl;
              break;
            case "focusout":
              Qe = "blur", He = wl;
              break;
            case "beforeblur":
            case "afterblur":
              He = wl;
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
              He = zi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              He = ni;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              He = jv;
              break;
            case Qv:
            case Kv:
            case Xv:
              He = Nc;
              break;
            case Jv:
              He = ai;
              break;
            case "scroll":
              He = dn;
              break;
            case "wheel":
              He = oi;
              break;
            case "copy":
            case "cut":
            case "paste":
              He = Dv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              He = Lv;
          }
          var Ze = (r & 4) !== 0, zn = !Ze && n === "scroll", $ = Ze ? pe !== null ? pe + "Capture" : null : pe;
          Ze = [];
          for (var P = K, W; P !== null; ) {
            W = P;
            var ye = W.stateNode;
            if (W.tag === 5 && ye !== null && (W = ye, $ !== null && (ye = Ar(P, $), ye != null && Ze.push(Tu(P, ye, W)))), zn) break;
            P = P.return;
          }
          0 < Ze.length && (pe = new He(pe, Qe, null, i, me), _e.push({ event: pe, listeners: Ze }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (pe = n === "mouseover" || n === "pointerover", He = n === "mouseout" || n === "pointerout", pe && i !== cn && (Qe = i.relatedTarget || i.fromElement) && (Dl(Qe) || Qe[ii])) break e;
          if ((He || pe) && (pe = me.window === me ? me : (pe = me.ownerDocument) ? pe.defaultView || pe.parentWindow : window, He ? (Qe = i.relatedTarget || i.toElement, He = K, Qe = Qe ? Dl(Qe) : null, Qe !== null && (zn = Et(Qe), Qe !== zn || Qe.tag !== 5 && Qe.tag !== 6) && (Qe = null)) : (He = null, Qe = K), He !== Qe)) {
            if (Ze = zi, ye = "onMouseLeave", $ = "onMouseEnter", P = "mouse", (n === "pointerout" || n === "pointerover") && (Ze = Lv, ye = "onPointerLeave", $ = "onPointerEnter", P = "pointer"), zn = He == null ? pe : po(He), W = Qe == null ? pe : po(Qe), pe = new Ze(ye, P + "leave", He, i, me), pe.target = zn, pe.relatedTarget = W, ye = null, Dl(me) === K && (Ze = new Ze($, P + "enter", Qe, i, me), Ze.target = W, Ze.relatedTarget = zn, ye = Ze), zn = ye, He && Qe) t: {
              for (Ze = He, $ = Qe, P = 0, W = Ze; W; W = Ii(W)) P++;
              for (W = 0, ye = $; ye; ye = Ii(ye)) W++;
              for (; 0 < P - W; ) Ze = Ii(Ze), P--;
              for (; 0 < W - P; ) $ = Ii($), W--;
              for (; P--; ) {
                if (Ze === $ || $ !== null && Ze === $.alternate) break t;
                Ze = Ii(Ze), $ = Ii($);
              }
              Ze = null;
            }
            else Ze = null;
            He !== null && eh(_e, pe, He, Ze, !1), Qe !== null && zn !== null && eh(_e, zn, Qe, Ze, !0);
          }
        }
        e: {
          if (pe = K ? po(K) : window, He = pe.nodeName && pe.nodeName.toLowerCase(), He === "select" || He === "input" && pe.type === "file") var Ke = Iy;
          else if (Fv(pe)) if (Hv) Ke = Yv;
          else {
            Ke = Wv;
            var ct = Fy;
          }
          else (He = pe.nodeName) && He.toLowerCase() === "input" && (pe.type === "checkbox" || pe.type === "radio") && (Ke = Vy);
          if (Ke && (Ke = Ke(n, K))) {
            kd(_e, Ke, i, me);
            break e;
          }
          ct && ct(n, pe, K), n === "focusout" && (ct = pe._wrapperState) && ct.controlled && pe.type === "number" && ga(pe, "number", pe.value);
        }
        switch (ct = K ? po(K) : window, n) {
          case "focusin":
            (Fv(ct) || ct.contentEditable === "true") && (Ru = ct, Dd = K, Cs = null);
            break;
          case "focusout":
            Cs = Dd = Ru = null;
            break;
          case "mousedown":
            Md = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Md = !1, Od(_e, i, me);
            break;
          case "selectionchange":
            if ($y) break;
          case "keydown":
          case "keyup":
            Od(_e, i, me);
        }
        var dt;
        if (xu) e: {
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
        yt && (Av && i.locale !== "ko" && (wu || yt !== "onCompositionStart" ? yt === "onCompositionEnd" && wu && (dt = Q()) : (co = me, S = "value" in co ? co.value : co.textContent, wu = !0)), ct = xs(K, yt), 0 < ct.length && (yt = new Cd(yt, n, null, i, me), _e.push({ event: yt, listeners: ct }), dt ? yt.data = dt : (dt = Pv(i), dt !== null && (yt.data = dt)))), (dt = ys ? Iv(n, i) : zy(n, i)) && (K = xs(K, "onBeforeInput"), 0 < K.length && (me = new Cd("onBeforeInput", "beforeinput", null, i, me), _e.push({ event: me, listeners: K }), me.data = dt));
      }
      Tl(_e, r);
    });
  }
  function Tu(n, r, i) {
    return { instance: n, listener: r, currentTarget: i };
  }
  function xs(n, r) {
    for (var i = r + "Capture", u = []; n !== null; ) {
      var f = n, m = f.stateNode;
      f.tag === 5 && m !== null && (f = m, m = Ar(n, i), m != null && u.unshift(Tu(n, m, f)), m = Ar(n, r), m != null && u.push(Tu(n, m, f))), n = n.return;
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
  function eh(n, r, i, u, f) {
    for (var m = r._reactName, E = []; i !== null && i !== u; ) {
      var M = i, U = M.alternate, K = M.stateNode;
      if (U !== null && U === u) break;
      M.tag === 5 && K !== null && (M = K, f ? (U = Ar(i, m), U != null && E.unshift(Tu(i, U, M))) : f || (U = Ar(i, m), U != null && E.push(Tu(i, U, M)))), i = i.return;
    }
    E.length !== 0 && n.push({ event: r, listeners: E });
  }
  var th = /\r\n?/g, Wy = /\u0000|\uFFFD/g;
  function nh(n) {
    return (typeof n == "string" ? n : "" + n).replace(th, `
`).replace(Wy, "");
  }
  function Vc(n, r, i) {
    if (r = nh(r), nh(n) !== r && i) throw Error(d(425));
  }
  function Fi() {
  }
  var ws = null, Nl = null;
  function Hc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var $c = typeof setTimeout == "function" ? setTimeout : void 0, zd = typeof clearTimeout == "function" ? clearTimeout : void 0, rh = typeof Promise == "function" ? Promise : void 0, Nu = typeof queueMicrotask == "function" ? queueMicrotask : typeof rh < "u" ? function(n) {
    return rh.resolve(null).then(n).catch(Bc);
  } : $c;
  function Bc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Du(n, r) {
    var i = r, u = 0;
    do {
      var f = i.nextSibling;
      if (n.removeChild(i), f && f.nodeType === 8) if (i = f.data, i === "/$") {
        if (u === 0) {
          n.removeChild(f), so(r);
          return;
        }
        u--;
      } else i !== "$" && i !== "$?" && i !== "$!" || u++;
      i = f;
    } while (i);
    so(r);
  }
  function Mo(n) {
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
  var Vi = Math.random().toString(36).slice(2), Oo = "__reactFiber$" + Vi, bs = "__reactProps$" + Vi, ii = "__reactContainer$" + Vi, Rs = "__reactEvents$" + Vi, Mu = "__reactListeners$" + Vi, Yy = "__reactHandles$" + Vi;
  function Dl(n) {
    var r = n[Oo];
    if (r) return r;
    for (var i = n.parentNode; i; ) {
      if (r = i[ii] || i[Oo]) {
        if (i = r.alternate, r.child !== null || i !== null && i.child !== null) for (n = ah(n); n !== null; ) {
          if (i = n[Oo]) return i;
          n = ah(n);
        }
        return r;
      }
      n = i, i = n.parentNode;
    }
    return null;
  }
  function ot(n) {
    return n = n[Oo] || n[ii], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function po(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(d(33));
  }
  function xn(n) {
    return n[bs] || null;
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
  var Dr = {}, Tn = Fa(Dr), Zn = Fa(!1), ra = Dr;
  function aa(n, r) {
    var i = n.type.contextTypes;
    if (!i) return Dr;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var f = {}, m;
    for (m in i) f[m] = r[m];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = f), f;
  }
  function Vn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Ou() {
    pn(Zn), pn(Tn);
  }
  function oh(n, r, i) {
    if (Tn.current !== Dr) throw Error(d(168));
    rt(Tn, r), rt(Zn, i);
  }
  function ks(n, r, i) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return i;
    u = u.getChildContext();
    for (var f in u) if (!(f in r)) throw Error(d(108, ze(n) || "Unknown", f));
    return ge({}, i, u);
  }
  function ir(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Dr, ra = Tn.current, rt(Tn, n), rt(Zn, Zn.current), !0;
  }
  function qc(n, r, i) {
    var u = n.stateNode;
    if (!u) throw Error(d(169));
    i ? (n = ks(n, r, ra), u.__reactInternalMemoizedMergedChildContext = n, pn(Zn), pn(Tn), rt(Tn, n)) : pn(Zn), rt(Zn, i);
  }
  var Lo = null, Lu = !1, li = !1;
  function Wc(n) {
    Lo === null ? Lo = [n] : Lo.push(n);
  }
  function Hi(n) {
    Lu = !0, Wc(n);
  }
  function jo() {
    if (!li && Lo !== null) {
      li = !0;
      var n = 0, r = $t;
      try {
        var i = Lo;
        for ($t = 1; n < i.length; n++) {
          var u = i[n];
          do
            u = u(!0);
          while (u !== null);
        }
        Lo = null, Lu = !1;
      } catch (f) {
        throw Lo !== null && (Lo = Lo.slice(n + 1)), hn(io, jo), f;
      } finally {
        $t = r, li = !1;
      }
    }
    return null;
  }
  var $i = [], Bi = 0, qi = null, ui = 0, Hn = [], Va = 0, Ea = null, Ao = 1, Uo = "";
  function Ml(n, r) {
    $i[Bi++] = ui, $i[Bi++] = qi, qi = n, ui = r;
  }
  function ih(n, r, i) {
    Hn[Va++] = Ao, Hn[Va++] = Uo, Hn[Va++] = Ea, Ea = n;
    var u = Ao;
    n = Uo;
    var f = 32 - zr(u) - 1;
    u &= ~(1 << f), i += 1;
    var m = 32 - zr(r) + f;
    if (30 < m) {
      var E = f - f % 5;
      m = (u & (1 << E) - 1).toString(32), u >>= E, f -= E, Ao = 1 << 32 - zr(r) + f | i << f | u, Uo = m + n;
    } else Ao = 1 << m | i << f | u, Uo = n;
  }
  function Yc(n) {
    n.return !== null && (Ml(n, 1), ih(n, 1, 0));
  }
  function Gc(n) {
    for (; n === qi; ) qi = $i[--Bi], $i[Bi] = null, ui = $i[--Bi], $i[Bi] = null;
    for (; n === Ea; ) Ea = Hn[--Va], Hn[Va] = null, Uo = Hn[--Va], Hn[Va] = null, Ao = Hn[--Va], Hn[Va] = null;
  }
  var oa = null, ia = null, gn = !1, Ha = null;
  function Pd(n, r) {
    var i = Ya(5, null, null, 0);
    i.elementType = "DELETED", i.stateNode = r, i.return = n, r = n.deletions, r === null ? (n.deletions = [i], n.flags |= 16) : r.push(i);
  }
  function lh(n, r) {
    switch (n.tag) {
      case 5:
        var i = n.type;
        return r = r.nodeType !== 1 || i.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, oa = n, ia = Mo(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, oa = n, ia = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (i = Ea !== null ? { id: Ao, overflow: Uo } : null, n.memoizedState = { dehydrated: r, treeContext: i, retryLane: 1073741824 }, i = Ya(18, null, null, 0), i.stateNode = r, i.return = n, n.child = i, oa = n, ia = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Id(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Fd(n) {
    if (gn) {
      var r = ia;
      if (r) {
        var i = r;
        if (!lh(n, r)) {
          if (Id(n)) throw Error(d(418));
          r = Mo(i.nextSibling);
          var u = oa;
          r && lh(n, r) ? Pd(u, i) : (n.flags = n.flags & -4097 | 2, gn = !1, oa = n);
        }
      } else {
        if (Id(n)) throw Error(d(418));
        n.flags = n.flags & -4097 | 2, gn = !1, oa = n;
      }
    }
  }
  function er(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    oa = n;
  }
  function Qc(n) {
    if (n !== oa) return !1;
    if (!gn) return er(n), gn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Hc(n.type, n.memoizedProps)), r && (r = ia)) {
      if (Id(n)) throw Ts(), Error(d(418));
      for (; r; ) Pd(n, r), r = Mo(r.nextSibling);
    }
    if (er(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(d(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var i = n.data;
            if (i === "/$") {
              if (r === 0) {
                ia = Mo(n.nextSibling);
                break e;
              }
              r--;
            } else i !== "$" && i !== "$!" && i !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ia = null;
      }
    } else ia = oa ? Mo(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Ts() {
    for (var n = ia; n; ) n = Mo(n.nextSibling);
  }
  function Wi() {
    ia = oa = null, gn = !1;
  }
  function si(n) {
    Ha === null ? Ha = [n] : Ha.push(n);
  }
  var Gy = le.ReactCurrentBatchConfig;
  function Ol(n, r, i) {
    if (n = i.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (i._owner) {
        if (i = i._owner, i) {
          if (i.tag !== 1) throw Error(d(309));
          var u = i.stateNode;
        }
        if (!u) throw Error(d(147, n));
        var f = u, m = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(E) {
          var M = f.refs;
          E === null ? delete M[m] : M[m] = E;
        }, r._stringRef = m, r);
      }
      if (typeof n != "string") throw Error(d(284));
      if (!i._owner) throw Error(d(290, n));
    }
    return n;
  }
  function Kc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(d(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function uh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Ll(n) {
    function r($, P) {
      if (n) {
        var W = $.deletions;
        W === null ? ($.deletions = [P], $.flags |= 16) : W.push(P);
      }
    }
    function i($, P) {
      if (!n) return null;
      for (; P !== null; ) r($, P), P = P.sibling;
      return null;
    }
    function u($, P) {
      for ($ = /* @__PURE__ */ new Map(); P !== null; ) P.key !== null ? $.set(P.key, P) : $.set(P.index, P), P = P.sibling;
      return $;
    }
    function f($, P) {
      return $ = el($, P), $.index = 0, $.sibling = null, $;
    }
    function m($, P, W) {
      return $.index = W, n ? (W = $.alternate, W !== null ? (W = W.index, W < P ? ($.flags |= 2, P) : W) : ($.flags |= 2, P)) : ($.flags |= 1048576, P);
    }
    function E($) {
      return n && $.alternate === null && ($.flags |= 2), $;
    }
    function M($, P, W, ye) {
      return P === null || P.tag !== 6 ? (P = yp(W, $.mode, ye), P.return = $, P) : (P = f(P, W), P.return = $, P);
    }
    function U($, P, W, ye) {
      var Ke = W.type;
      return Ke === Le ? me($, P, W.props.children, ye, W.key) : P !== null && (P.elementType === Ke || typeof Ke == "object" && Ke !== null && Ke.$$typeof === ue && uh(Ke) === P.type) ? (ye = f(P, W.props), ye.ref = Ol($, P, W), ye.return = $, ye) : (ye = ac(W.type, W.key, W.props, null, $.mode, ye), ye.ref = Ol($, P, W), ye.return = $, ye);
    }
    function K($, P, W, ye) {
      return P === null || P.tag !== 4 || P.stateNode.containerInfo !== W.containerInfo || P.stateNode.implementation !== W.implementation ? (P = Df(W, $.mode, ye), P.return = $, P) : (P = f(P, W.children || []), P.return = $, P);
    }
    function me($, P, W, ye, Ke) {
      return P === null || P.tag !== 7 ? (P = hi(W, $.mode, ye, Ke), P.return = $, P) : (P = f(P, W), P.return = $, P);
    }
    function _e($, P, W) {
      if (typeof P == "string" && P !== "" || typeof P == "number") return P = yp("" + P, $.mode, W), P.return = $, P;
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case se:
            return W = ac(P.type, P.key, P.props, null, $.mode, W), W.ref = Ol($, null, P), W.return = $, W;
          case We:
            return P = Df(P, $.mode, W), P.return = $, P;
          case ue:
            var ye = P._init;
            return _e($, ye(P._payload), W);
        }
        if (ar(P) || Me(P)) return P = hi(P, $.mode, W, null), P.return = $, P;
        Kc($, P);
      }
      return null;
    }
    function pe($, P, W, ye) {
      var Ke = P !== null ? P.key : null;
      if (typeof W == "string" && W !== "" || typeof W == "number") return Ke !== null ? null : M($, P, "" + W, ye);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case se:
            return W.key === Ke ? U($, P, W, ye) : null;
          case We:
            return W.key === Ke ? K($, P, W, ye) : null;
          case ue:
            return Ke = W._init, pe(
              $,
              P,
              Ke(W._payload),
              ye
            );
        }
        if (ar(W) || Me(W)) return Ke !== null ? null : me($, P, W, ye, null);
        Kc($, W);
      }
      return null;
    }
    function He($, P, W, ye, Ke) {
      if (typeof ye == "string" && ye !== "" || typeof ye == "number") return $ = $.get(W) || null, M(P, $, "" + ye, Ke);
      if (typeof ye == "object" && ye !== null) {
        switch (ye.$$typeof) {
          case se:
            return $ = $.get(ye.key === null ? W : ye.key) || null, U(P, $, ye, Ke);
          case We:
            return $ = $.get(ye.key === null ? W : ye.key) || null, K(P, $, ye, Ke);
          case ue:
            var ct = ye._init;
            return He($, P, W, ct(ye._payload), Ke);
        }
        if (ar(ye) || Me(ye)) return $ = $.get(W) || null, me(P, $, ye, Ke, null);
        Kc(P, ye);
      }
      return null;
    }
    function Qe($, P, W, ye) {
      for (var Ke = null, ct = null, dt = P, yt = P = 0, sr = null; dt !== null && yt < W.length; yt++) {
        dt.index > yt ? (sr = dt, dt = null) : sr = dt.sibling;
        var Wt = pe($, dt, W[yt], ye);
        if (Wt === null) {
          dt === null && (dt = sr);
          break;
        }
        n && dt && Wt.alternate === null && r($, dt), P = m(Wt, P, yt), ct === null ? Ke = Wt : ct.sibling = Wt, ct = Wt, dt = sr;
      }
      if (yt === W.length) return i($, dt), gn && Ml($, yt), Ke;
      if (dt === null) {
        for (; yt < W.length; yt++) dt = _e($, W[yt], ye), dt !== null && (P = m(dt, P, yt), ct === null ? Ke = dt : ct.sibling = dt, ct = dt);
        return gn && Ml($, yt), Ke;
      }
      for (dt = u($, dt); yt < W.length; yt++) sr = He(dt, $, yt, W[yt], ye), sr !== null && (n && sr.alternate !== null && dt.delete(sr.key === null ? yt : sr.key), P = m(sr, P, yt), ct === null ? Ke = sr : ct.sibling = sr, ct = sr);
      return n && dt.forEach(function(rl) {
        return r($, rl);
      }), gn && Ml($, yt), Ke;
    }
    function Ze($, P, W, ye) {
      var Ke = Me(W);
      if (typeof Ke != "function") throw Error(d(150));
      if (W = Ke.call(W), W == null) throw Error(d(151));
      for (var ct = Ke = null, dt = P, yt = P = 0, sr = null, Wt = W.next(); dt !== null && !Wt.done; yt++, Wt = W.next()) {
        dt.index > yt ? (sr = dt, dt = null) : sr = dt.sibling;
        var rl = pe($, dt, Wt.value, ye);
        if (rl === null) {
          dt === null && (dt = sr);
          break;
        }
        n && dt && rl.alternate === null && r($, dt), P = m(rl, P, yt), ct === null ? Ke = rl : ct.sibling = rl, ct = rl, dt = sr;
      }
      if (Wt.done) return i(
        $,
        dt
      ), gn && Ml($, yt), Ke;
      if (dt === null) {
        for (; !Wt.done; yt++, Wt = W.next()) Wt = _e($, Wt.value, ye), Wt !== null && (P = m(Wt, P, yt), ct === null ? Ke = Wt : ct.sibling = Wt, ct = Wt);
        return gn && Ml($, yt), Ke;
      }
      for (dt = u($, dt); !Wt.done; yt++, Wt = W.next()) Wt = He(dt, $, yt, Wt.value, ye), Wt !== null && (n && Wt.alternate !== null && dt.delete(Wt.key === null ? yt : Wt.key), P = m(Wt, P, yt), ct === null ? Ke = Wt : ct.sibling = Wt, ct = Wt);
      return n && dt.forEach(function(Bh) {
        return r($, Bh);
      }), gn && Ml($, yt), Ke;
    }
    function zn($, P, W, ye) {
      if (typeof W == "object" && W !== null && W.type === Le && W.key === null && (W = W.props.children), typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case se:
            e: {
              for (var Ke = W.key, ct = P; ct !== null; ) {
                if (ct.key === Ke) {
                  if (Ke = W.type, Ke === Le) {
                    if (ct.tag === 7) {
                      i($, ct.sibling), P = f(ct, W.props.children), P.return = $, $ = P;
                      break e;
                    }
                  } else if (ct.elementType === Ke || typeof Ke == "object" && Ke !== null && Ke.$$typeof === ue && uh(Ke) === ct.type) {
                    i($, ct.sibling), P = f(ct, W.props), P.ref = Ol($, ct, W), P.return = $, $ = P;
                    break e;
                  }
                  i($, ct);
                  break;
                } else r($, ct);
                ct = ct.sibling;
              }
              W.type === Le ? (P = hi(W.props.children, $.mode, ye, W.key), P.return = $, $ = P) : (ye = ac(W.type, W.key, W.props, null, $.mode, ye), ye.ref = Ol($, P, W), ye.return = $, $ = ye);
            }
            return E($);
          case We:
            e: {
              for (ct = W.key; P !== null; ) {
                if (P.key === ct) if (P.tag === 4 && P.stateNode.containerInfo === W.containerInfo && P.stateNode.implementation === W.implementation) {
                  i($, P.sibling), P = f(P, W.children || []), P.return = $, $ = P;
                  break e;
                } else {
                  i($, P);
                  break;
                }
                else r($, P);
                P = P.sibling;
              }
              P = Df(W, $.mode, ye), P.return = $, $ = P;
            }
            return E($);
          case ue:
            return ct = W._init, zn($, P, ct(W._payload), ye);
        }
        if (ar(W)) return Qe($, P, W, ye);
        if (Me(W)) return Ze($, P, W, ye);
        Kc($, W);
      }
      return typeof W == "string" && W !== "" || typeof W == "number" ? (W = "" + W, P !== null && P.tag === 6 ? (i($, P.sibling), P = f(P, W), P.return = $, $ = P) : (i($, P), P = yp(W, $.mode, ye), P.return = $, $ = P), E($)) : i($, P);
    }
    return zn;
  }
  var Ln = Ll(!0), Pe = Ll(!1), xa = Fa(null), la = null, ju = null, Vd = null;
  function Hd() {
    Vd = ju = la = null;
  }
  function $d(n) {
    var r = xa.current;
    pn(xa), n._currentValue = r;
  }
  function Bd(n, r, i) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === i) break;
      n = n.return;
    }
  }
  function wn(n, r) {
    la = n, Vd = ju = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (Bn = !0), n.firstContext = null);
  }
  function $a(n) {
    var r = n._currentValue;
    if (Vd !== n) if (n = { context: n, memoizedValue: r, next: null }, ju === null) {
      if (la === null) throw Error(d(308));
      ju = n, la.dependencies = { lanes: 0, firstContext: n };
    } else ju = ju.next = n;
    return r;
  }
  var jl = null;
  function qd(n) {
    jl === null ? jl = [n] : jl.push(n);
  }
  function Wd(n, r, i, u) {
    var f = r.interleaved;
    return f === null ? (i.next = i, qd(r)) : (i.next = f.next, f.next = i), r.interleaved = i, wa(n, u);
  }
  function wa(n, r) {
    n.lanes |= r;
    var i = n.alternate;
    for (i !== null && (i.lanes |= r), i = n, n = n.return; n !== null; ) n.childLanes |= r, i = n.alternate, i !== null && (i.childLanes |= r), i = n, n = n.return;
    return i.tag === 3 ? i.stateNode : null;
  }
  var ba = !1;
  function Yd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function sh(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function ci(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Yi(n, r, i) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (zt & 2) !== 0) {
      var f = u.pending;
      return f === null ? r.next = r : (r.next = f.next, f.next = r), u.pending = r, wa(n, i);
    }
    return f = u.interleaved, f === null ? (r.next = r, qd(u)) : (r.next = f.next, f.next = r), u.interleaved = r, wa(n, i);
  }
  function Xc(n, r, i) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (i & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, i |= u, r.lanes = i, ti(n, i);
    }
  }
  function ch(n, r) {
    var i = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, i === u)) {
      var f = null, m = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var E = { eventTime: i.eventTime, lane: i.lane, tag: i.tag, payload: i.payload, callback: i.callback, next: null };
          m === null ? f = m = E : m = m.next = E, i = i.next;
        } while (i !== null);
        m === null ? f = m = r : m = m.next = r;
      } else f = m = r;
      i = { baseState: u.baseState, firstBaseUpdate: f, lastBaseUpdate: m, shared: u.shared, effects: u.effects }, n.updateQueue = i;
      return;
    }
    n = i.lastBaseUpdate, n === null ? i.firstBaseUpdate = r : n.next = r, i.lastBaseUpdate = r;
  }
  function Ns(n, r, i, u) {
    var f = n.updateQueue;
    ba = !1;
    var m = f.firstBaseUpdate, E = f.lastBaseUpdate, M = f.shared.pending;
    if (M !== null) {
      f.shared.pending = null;
      var U = M, K = U.next;
      U.next = null, E === null ? m = K : E.next = K, E = U;
      var me = n.alternate;
      me !== null && (me = me.updateQueue, M = me.lastBaseUpdate, M !== E && (M === null ? me.firstBaseUpdate = K : M.next = K, me.lastBaseUpdate = U));
    }
    if (m !== null) {
      var _e = f.baseState;
      E = 0, me = K = U = null, M = m;
      do {
        var pe = M.lane, He = M.eventTime;
        if ((u & pe) === pe) {
          me !== null && (me = me.next = {
            eventTime: He,
            lane: 0,
            tag: M.tag,
            payload: M.payload,
            callback: M.callback,
            next: null
          });
          e: {
            var Qe = n, Ze = M;
            switch (pe = r, He = i, Ze.tag) {
              case 1:
                if (Qe = Ze.payload, typeof Qe == "function") {
                  _e = Qe.call(He, _e, pe);
                  break e;
                }
                _e = Qe;
                break e;
              case 3:
                Qe.flags = Qe.flags & -65537 | 128;
              case 0:
                if (Qe = Ze.payload, pe = typeof Qe == "function" ? Qe.call(He, _e, pe) : Qe, pe == null) break e;
                _e = ge({}, _e, pe);
                break e;
              case 2:
                ba = !0;
            }
          }
          M.callback !== null && M.lane !== 0 && (n.flags |= 64, pe = f.effects, pe === null ? f.effects = [M] : pe.push(M));
        } else He = { eventTime: He, lane: pe, tag: M.tag, payload: M.payload, callback: M.callback, next: null }, me === null ? (K = me = He, U = _e) : me = me.next = He, E |= pe;
        if (M = M.next, M === null) {
          if (M = f.shared.pending, M === null) break;
          pe = M, M = pe.next, pe.next = null, f.lastBaseUpdate = pe, f.shared.pending = null;
        }
      } while (!0);
      if (me === null && (U = _e), f.baseState = U, f.firstBaseUpdate = K, f.lastBaseUpdate = me, r = f.shared.interleaved, r !== null) {
        f = r;
        do
          E |= f.lane, f = f.next;
        while (f !== r);
      } else m === null && (f.shared.lanes = 0);
      Vo |= E, n.lanes = E, n.memoizedState = _e;
    }
  }
  function Gd(n, r, i) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], f = u.callback;
      if (f !== null) {
        if (u.callback = null, u = i, typeof f != "function") throw Error(d(191, f));
        f.call(u);
      }
    }
  }
  var Ds = {}, zo = Fa(Ds), Ms = Fa(Ds), Os = Fa(Ds);
  function Al(n) {
    if (n === Ds) throw Error(d(174));
    return n;
  }
  function Qd(n, r) {
    switch (rt(Os, r), rt(Ms, n), rt(zo, Ds), n = r.nodeType, n) {
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
    pn(zo), pn(Ms), pn(Os);
  }
  function fh(n) {
    Al(Os.current);
    var r = Al(zo.current), i = _a(r, n.type);
    r !== i && (rt(Ms, n), rt(zo, i));
  }
  function Jc(n) {
    Ms.current === n && (pn(zo), pn(Ms));
  }
  var bn = Fa(0);
  function Zc(n) {
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
  var Ls = [];
  function it() {
    for (var n = 0; n < Ls.length; n++) Ls[n]._workInProgressVersionPrimary = null;
    Ls.length = 0;
  }
  var Nt = le.ReactCurrentDispatcher, Bt = le.ReactCurrentBatchConfig, an = 0, qt = null, $n = null, lr = null, ef = !1, js = !1, zl = 0, fe = 0;
  function Ht() {
    throw Error(d(321));
  }
  function ht(n, r) {
    if (r === null) return !1;
    for (var i = 0; i < r.length && i < n.length; i++) if (!fo(n[i], r[i])) return !1;
    return !0;
  }
  function Gi(n, r, i, u, f, m) {
    if (an = m, qt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Nt.current = n === null || n.memoizedState === null ? mf : Fs, n = i(u, f), js) {
      m = 0;
      do {
        if (js = !1, zl = 0, 25 <= m) throw Error(d(301));
        m += 1, lr = $n = null, r.updateQueue = null, Nt.current = yf, n = i(u, f);
      } while (js);
    }
    if (Nt.current = Hl, r = $n !== null && $n.next !== null, an = 0, lr = $n = qt = null, ef = !1, r) throw Error(d(300));
    return n;
  }
  function vo() {
    var n = zl !== 0;
    return zl = 0, n;
  }
  function Mr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return lr === null ? qt.memoizedState = lr = n : lr = lr.next = n, lr;
  }
  function jn() {
    if ($n === null) {
      var n = qt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = $n.next;
    var r = lr === null ? qt.memoizedState : lr.next;
    if (r !== null) lr = r, $n = n;
    else {
      if (n === null) throw Error(d(310));
      $n = n, n = { memoizedState: $n.memoizedState, baseState: $n.baseState, baseQueue: $n.baseQueue, queue: $n.queue, next: null }, lr === null ? qt.memoizedState = lr = n : lr = lr.next = n;
    }
    return lr;
  }
  function fi(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Qi(n) {
    var r = jn(), i = r.queue;
    if (i === null) throw Error(d(311));
    i.lastRenderedReducer = n;
    var u = $n, f = u.baseQueue, m = i.pending;
    if (m !== null) {
      if (f !== null) {
        var E = f.next;
        f.next = m.next, m.next = E;
      }
      u.baseQueue = f = m, i.pending = null;
    }
    if (f !== null) {
      m = f.next, u = u.baseState;
      var M = E = null, U = null, K = m;
      do {
        var me = K.lane;
        if ((an & me) === me) U !== null && (U = U.next = { lane: 0, action: K.action, hasEagerState: K.hasEagerState, eagerState: K.eagerState, next: null }), u = K.hasEagerState ? K.eagerState : n(u, K.action);
        else {
          var _e = {
            lane: me,
            action: K.action,
            hasEagerState: K.hasEagerState,
            eagerState: K.eagerState,
            next: null
          };
          U === null ? (M = U = _e, E = u) : U = U.next = _e, qt.lanes |= me, Vo |= me;
        }
        K = K.next;
      } while (K !== null && K !== m);
      U === null ? E = u : U.next = M, fo(u, r.memoizedState) || (Bn = !0), r.memoizedState = u, r.baseState = E, r.baseQueue = U, i.lastRenderedState = u;
    }
    if (n = i.interleaved, n !== null) {
      f = n;
      do
        m = f.lane, qt.lanes |= m, Vo |= m, f = f.next;
      while (f !== n);
    } else f === null && (i.lanes = 0);
    return [r.memoizedState, i.dispatch];
  }
  function Pl(n) {
    var r = jn(), i = r.queue;
    if (i === null) throw Error(d(311));
    i.lastRenderedReducer = n;
    var u = i.dispatch, f = i.pending, m = r.memoizedState;
    if (f !== null) {
      i.pending = null;
      var E = f = f.next;
      do
        m = n(m, E.action), E = E.next;
      while (E !== f);
      fo(m, r.memoizedState) || (Bn = !0), r.memoizedState = m, r.baseQueue === null && (r.baseState = m), i.lastRenderedState = m;
    }
    return [m, u];
  }
  function tf() {
  }
  function nf(n, r) {
    var i = qt, u = jn(), f = r(), m = !fo(u.memoizedState, f);
    if (m && (u.memoizedState = f, Bn = !0), u = u.queue, As(of.bind(null, i, u, n), [n]), u.getSnapshot !== r || m || lr !== null && lr.memoizedState.tag & 1) {
      if (i.flags |= 2048, Il(9, af.bind(null, i, u, f, r), void 0, null), tr === null) throw Error(d(349));
      (an & 30) !== 0 || rf(i, r, f);
    }
    return f;
  }
  function rf(n, r, i) {
    n.flags |= 16384, n = { getSnapshot: r, value: i }, r = qt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, qt.updateQueue = r, r.stores = [n]) : (i = r.stores, i === null ? r.stores = [n] : i.push(n));
  }
  function af(n, r, i, u) {
    r.value = i, r.getSnapshot = u, lf(r) && uf(n);
  }
  function of(n, r, i) {
    return i(function() {
      lf(r) && uf(n);
    });
  }
  function lf(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var i = r();
      return !fo(n, i);
    } catch {
      return !0;
    }
  }
  function uf(n) {
    var r = wa(n, 1);
    r !== null && $r(r, n, 1, -1);
  }
  function sf(n) {
    var r = Mr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: fi, lastRenderedState: n }, r.queue = n, n = n.dispatch = Vl.bind(null, qt, n), [r.memoizedState, n];
  }
  function Il(n, r, i, u) {
    return n = { tag: n, create: r, destroy: i, deps: u, next: null }, r = qt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, qt.updateQueue = r, r.lastEffect = n.next = n) : (i = r.lastEffect, i === null ? r.lastEffect = n.next = n : (u = i.next, i.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function cf() {
    return jn().memoizedState;
  }
  function Au(n, r, i, u) {
    var f = Mr();
    qt.flags |= n, f.memoizedState = Il(1 | r, i, void 0, u === void 0 ? null : u);
  }
  function Uu(n, r, i, u) {
    var f = jn();
    u = u === void 0 ? null : u;
    var m = void 0;
    if ($n !== null) {
      var E = $n.memoizedState;
      if (m = E.destroy, u !== null && ht(u, E.deps)) {
        f.memoizedState = Il(r, i, m, u);
        return;
      }
    }
    qt.flags |= n, f.memoizedState = Il(1 | r, i, m, u);
  }
  function ff(n, r) {
    return Au(8390656, 8, n, r);
  }
  function As(n, r) {
    return Uu(2048, 8, n, r);
  }
  function df(n, r) {
    return Uu(4, 2, n, r);
  }
  function Us(n, r) {
    return Uu(4, 4, n, r);
  }
  function Fl(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function pf(n, r, i) {
    return i = i != null ? i.concat([n]) : null, Uu(4, 4, Fl.bind(null, r, n), i);
  }
  function zs() {
  }
  function vf(n, r) {
    var i = jn();
    r = r === void 0 ? null : r;
    var u = i.memoizedState;
    return u !== null && r !== null && ht(r, u[1]) ? u[0] : (i.memoizedState = [n, r], n);
  }
  function hf(n, r) {
    var i = jn();
    r = r === void 0 ? null : r;
    var u = i.memoizedState;
    return u !== null && r !== null && ht(r, u[1]) ? u[0] : (n = n(), i.memoizedState = [n, r], n);
  }
  function Kd(n, r, i) {
    return (an & 21) === 0 ? (n.baseState && (n.baseState = !1, Bn = !0), n.memoizedState = i) : (fo(i, r) || (i = hu(), qt.lanes |= i, Vo |= i, n.baseState = !0), r);
  }
  function Ps(n, r) {
    var i = $t;
    $t = i !== 0 && 4 > i ? i : 4, n(!0);
    var u = Bt.transition;
    Bt.transition = {};
    try {
      n(!1), r();
    } finally {
      $t = i, Bt.transition = u;
    }
  }
  function Xd() {
    return jn().memoizedState;
  }
  function Is(n, r, i) {
    var u = Ho(n);
    if (i = { lane: u, action: i, hasEagerState: !1, eagerState: null, next: null }, ua(n)) dh(r, i);
    else if (i = Wd(n, r, i, u), i !== null) {
      var f = Yn();
      $r(i, n, u, f), un(i, r, u);
    }
  }
  function Vl(n, r, i) {
    var u = Ho(n), f = { lane: u, action: i, hasEagerState: !1, eagerState: null, next: null };
    if (ua(n)) dh(r, f);
    else {
      var m = n.alternate;
      if (n.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer, m !== null)) try {
        var E = r.lastRenderedState, M = m(E, i);
        if (f.hasEagerState = !0, f.eagerState = M, fo(M, E)) {
          var U = r.interleaved;
          U === null ? (f.next = f, qd(r)) : (f.next = U.next, U.next = f), r.interleaved = f;
          return;
        }
      } catch {
      }
      i = Wd(n, r, f, u), i !== null && (f = Yn(), $r(i, n, u, f), un(i, r, u));
    }
  }
  function ua(n) {
    var r = n.alternate;
    return n === qt || r !== null && r === qt;
  }
  function dh(n, r) {
    js = ef = !0;
    var i = n.pending;
    i === null ? r.next = r : (r.next = i.next, i.next = r), n.pending = r;
  }
  function un(n, r, i) {
    if ((i & 4194240) !== 0) {
      var u = r.lanes;
      u &= n.pendingLanes, i |= u, r.lanes = i, ti(n, i);
    }
  }
  var Hl = { readContext: $a, useCallback: Ht, useContext: Ht, useEffect: Ht, useImperativeHandle: Ht, useInsertionEffect: Ht, useLayoutEffect: Ht, useMemo: Ht, useReducer: Ht, useRef: Ht, useState: Ht, useDebugValue: Ht, useDeferredValue: Ht, useTransition: Ht, useMutableSource: Ht, useSyncExternalStore: Ht, useId: Ht, unstable_isNewReconciler: !1 }, mf = { readContext: $a, useCallback: function(n, r) {
    return Mr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: $a, useEffect: ff, useImperativeHandle: function(n, r, i) {
    return i = i != null ? i.concat([n]) : null, Au(
      4194308,
      4,
      Fl.bind(null, r, n),
      i
    );
  }, useLayoutEffect: function(n, r) {
    return Au(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Au(4, 2, n, r);
  }, useMemo: function(n, r) {
    var i = Mr();
    return r = r === void 0 ? null : r, n = n(), i.memoizedState = [n, r], n;
  }, useReducer: function(n, r, i) {
    var u = Mr();
    return r = i !== void 0 ? i(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = Is.bind(null, qt, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = Mr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: sf, useDebugValue: zs, useDeferredValue: function(n) {
    return Mr().memoizedState = n;
  }, useTransition: function() {
    var n = sf(!1), r = n[0];
    return n = Ps.bind(null, n[1]), Mr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, i) {
    var u = qt, f = Mr();
    if (gn) {
      if (i === void 0) throw Error(d(407));
      i = i();
    } else {
      if (i = r(), tr === null) throw Error(d(349));
      (an & 30) !== 0 || rf(u, r, i);
    }
    f.memoizedState = i;
    var m = { value: i, getSnapshot: r };
    return f.queue = m, ff(of.bind(
      null,
      u,
      m,
      n
    ), [n]), u.flags |= 2048, Il(9, af.bind(null, u, m, i, r), void 0, null), i;
  }, useId: function() {
    var n = Mr(), r = tr.identifierPrefix;
    if (gn) {
      var i = Uo, u = Ao;
      i = (u & ~(1 << 32 - zr(u) - 1)).toString(32) + i, r = ":" + r + "R" + i, i = zl++, 0 < i && (r += "H" + i.toString(32)), r += ":";
    } else i = fe++, r = ":" + r + "r" + i.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Fs = {
    readContext: $a,
    useCallback: vf,
    useContext: $a,
    useEffect: As,
    useImperativeHandle: pf,
    useInsertionEffect: df,
    useLayoutEffect: Us,
    useMemo: hf,
    useReducer: Qi,
    useRef: cf,
    useState: function() {
      return Qi(fi);
    },
    useDebugValue: zs,
    useDeferredValue: function(n) {
      var r = jn();
      return Kd(r, $n.memoizedState, n);
    },
    useTransition: function() {
      var n = Qi(fi)[0], r = jn().memoizedState;
      return [n, r];
    },
    useMutableSource: tf,
    useSyncExternalStore: nf,
    useId: Xd,
    unstable_isNewReconciler: !1
  }, yf = { readContext: $a, useCallback: vf, useContext: $a, useEffect: As, useImperativeHandle: pf, useInsertionEffect: df, useLayoutEffect: Us, useMemo: hf, useReducer: Pl, useRef: cf, useState: function() {
    return Pl(fi);
  }, useDebugValue: zs, useDeferredValue: function(n) {
    var r = jn();
    return $n === null ? r.memoizedState = n : Kd(r, $n.memoizedState, n);
  }, useTransition: function() {
    var n = Pl(fi)[0], r = jn().memoizedState;
    return [n, r];
  }, useMutableSource: tf, useSyncExternalStore: nf, useId: Xd, unstable_isNewReconciler: !1 };
  function ho(n, r) {
    if (n && n.defaultProps) {
      r = ge({}, r), n = n.defaultProps;
      for (var i in n) r[i] === void 0 && (r[i] = n[i]);
      return r;
    }
    return r;
  }
  function Jd(n, r, i, u) {
    r = n.memoizedState, i = i(u, r), i = i == null ? r : ge({}, r, i), n.memoizedState = i, n.lanes === 0 && (n.updateQueue.baseState = i);
  }
  var gf = { isMounted: function(n) {
    return (n = n._reactInternals) ? Et(n) === n : !1;
  }, enqueueSetState: function(n, r, i) {
    n = n._reactInternals;
    var u = Yn(), f = Ho(n), m = ci(u, f);
    m.payload = r, i != null && (m.callback = i), r = Yi(n, m, f), r !== null && ($r(r, n, f, u), Xc(r, n, f));
  }, enqueueReplaceState: function(n, r, i) {
    n = n._reactInternals;
    var u = Yn(), f = Ho(n), m = ci(u, f);
    m.tag = 1, m.payload = r, i != null && (m.callback = i), r = Yi(n, m, f), r !== null && ($r(r, n, f, u), Xc(r, n, f));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var i = Yn(), u = Ho(n), f = ci(i, u);
    f.tag = 2, r != null && (f.callback = r), r = Yi(n, f, u), r !== null && ($r(r, n, u, i), Xc(r, n, u));
  } };
  function ph(n, r, i, u, f, m, E) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, m, E) : r.prototype && r.prototype.isPureReactComponent ? !_s(i, u) || !_s(f, m) : !0;
  }
  function _f(n, r, i) {
    var u = !1, f = Dr, m = r.contextType;
    return typeof m == "object" && m !== null ? m = $a(m) : (f = Vn(r) ? ra : Tn.current, u = r.contextTypes, m = (u = u != null) ? aa(n, f) : Dr), r = new r(i, m), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = gf, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = f, n.__reactInternalMemoizedMaskedChildContext = m), r;
  }
  function vh(n, r, i, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(i, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(i, u), r.state !== n && gf.enqueueReplaceState(r, r.state, null);
  }
  function Vs(n, r, i, u) {
    var f = n.stateNode;
    f.props = i, f.state = n.memoizedState, f.refs = {}, Yd(n);
    var m = r.contextType;
    typeof m == "object" && m !== null ? f.context = $a(m) : (m = Vn(r) ? ra : Tn.current, f.context = aa(n, m)), f.state = n.memoizedState, m = r.getDerivedStateFromProps, typeof m == "function" && (Jd(n, r, m, i), f.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (r = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), r !== f.state && gf.enqueueReplaceState(f, f.state, null), Ns(n, i, f, u), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function $l(n, r) {
    try {
      var i = "", u = r;
      do
        i += pt(u), u = u.return;
      while (u);
      var f = i;
    } catch (m) {
      f = `
Error generating stack: ` + m.message + `
` + m.stack;
    }
    return { value: n, source: r, stack: f, digest: null };
  }
  function Zd(n, r, i) {
    return { value: n, source: null, stack: i ?? null, digest: r ?? null };
  }
  function ep(n, r) {
    try {
      console.error(r.value);
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  var Sf = typeof WeakMap == "function" ? WeakMap : Map;
  function hh(n, r, i) {
    i = ci(-1, i), i.tag = 3, i.payload = { element: null };
    var u = r.value;
    return i.callback = function() {
      Hu || (Hu = !0, Wl = u), ep(n, r);
    }, i;
  }
  function tp(n, r, i) {
    i = ci(-1, i), i.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var f = r.value;
      i.payload = function() {
        return u(f);
      }, i.callback = function() {
        ep(n, r);
      };
    }
    var m = n.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (i.callback = function() {
      ep(n, r), typeof u != "function" && (Ji === null ? Ji = /* @__PURE__ */ new Set([this]) : Ji.add(this));
      var E = r.stack;
      this.componentDidCatch(r.value, { componentStack: E !== null ? E : "" });
    }), i;
  }
  function np(n, r, i) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new Sf();
      var f = /* @__PURE__ */ new Set();
      u.set(r, f);
    } else f = u.get(r), f === void 0 && (f = /* @__PURE__ */ new Set(), u.set(r, f));
    f.has(i) || (f.add(i), n = tg.bind(null, n, r, i), r.then(n, n));
  }
  function mh(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Ki(n, r, i, u, f) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, i.flags |= 131072, i.flags &= -52805, i.tag === 1 && (i.alternate === null ? i.tag = 17 : (r = ci(-1, 1), r.tag = 2, Yi(i, r, 1))), i.lanes |= 1), n) : (n.flags |= 65536, n.lanes = f, n);
  }
  var Hs = le.ReactCurrentOwner, Bn = !1;
  function mr(n, r, i, u) {
    r.child = n === null ? Pe(r, null, i, u) : Ln(r, n.child, i, u);
  }
  function sa(n, r, i, u, f) {
    i = i.render;
    var m = r.ref;
    return wn(r, f), u = Gi(n, r, i, u, m, f), i = vo(), n !== null && !Bn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, qa(n, r, f)) : (gn && i && Yc(r), r.flags |= 1, mr(n, r, u, f), r.child);
  }
  function Bl(n, r, i, u, f) {
    if (n === null) {
      var m = i.type;
      return typeof m == "function" && !mp(m) && m.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (r.tag = 15, r.type = m, wt(n, r, m, u, f)) : (n = ac(i.type, null, u, r, r.mode, f), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (m = n.child, (n.lanes & f) === 0) {
      var E = m.memoizedProps;
      if (i = i.compare, i = i !== null ? i : _s, i(E, u) && n.ref === r.ref) return qa(n, r, f);
    }
    return r.flags |= 1, n = el(m, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function wt(n, r, i, u, f) {
    if (n !== null) {
      var m = n.memoizedProps;
      if (_s(m, u) && n.ref === r.ref) if (Bn = !1, r.pendingProps = u = m, (n.lanes & f) !== 0) (n.flags & 131072) !== 0 && (Bn = !0);
      else return r.lanes = n.lanes, qa(n, r, f);
    }
    return yh(n, r, i, u, f);
  }
  function $s(n, r, i) {
    var u = r.pendingProps, f = u.children, m = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, rt(Iu, Ra), Ra |= i;
    else {
      if ((i & 1073741824) === 0) return n = m !== null ? m.baseLanes | i : i, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, rt(Iu, Ra), Ra |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = m !== null ? m.baseLanes : i, rt(Iu, Ra), Ra |= u;
    }
    else m !== null ? (u = m.baseLanes | i, r.memoizedState = null) : u = i, rt(Iu, Ra), Ra |= u;
    return mr(n, r, f, i), r.child;
  }
  function rp(n, r) {
    var i = r.ref;
    (n === null && i !== null || n !== null && n.ref !== i) && (r.flags |= 512, r.flags |= 2097152);
  }
  function yh(n, r, i, u, f) {
    var m = Vn(i) ? ra : Tn.current;
    return m = aa(r, m), wn(r, f), i = Gi(n, r, i, u, m, f), u = vo(), n !== null && !Bn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, qa(n, r, f)) : (gn && u && Yc(r), r.flags |= 1, mr(n, r, i, f), r.child);
  }
  function gh(n, r, i, u, f) {
    if (Vn(i)) {
      var m = !0;
      ir(r);
    } else m = !1;
    if (wn(r, f), r.stateNode === null) Ba(n, r), _f(r, i, u), Vs(r, i, u, f), u = !0;
    else if (n === null) {
      var E = r.stateNode, M = r.memoizedProps;
      E.props = M;
      var U = E.context, K = i.contextType;
      typeof K == "object" && K !== null ? K = $a(K) : (K = Vn(i) ? ra : Tn.current, K = aa(r, K));
      var me = i.getDerivedStateFromProps, _e = typeof me == "function" || typeof E.getSnapshotBeforeUpdate == "function";
      _e || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (M !== u || U !== K) && vh(r, E, u, K), ba = !1;
      var pe = r.memoizedState;
      E.state = pe, Ns(r, u, E, f), U = r.memoizedState, M !== u || pe !== U || Zn.current || ba ? (typeof me == "function" && (Jd(r, i, me, u), U = r.memoizedState), (M = ba || ph(r, i, M, u, pe, U, K)) ? (_e || typeof E.UNSAFE_componentWillMount != "function" && typeof E.componentWillMount != "function" || (typeof E.componentWillMount == "function" && E.componentWillMount(), typeof E.UNSAFE_componentWillMount == "function" && E.UNSAFE_componentWillMount()), typeof E.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = U), E.props = u, E.state = U, E.context = K, u = M) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      E = r.stateNode, sh(n, r), M = r.memoizedProps, K = r.type === r.elementType ? M : ho(r.type, M), E.props = K, _e = r.pendingProps, pe = E.context, U = i.contextType, typeof U == "object" && U !== null ? U = $a(U) : (U = Vn(i) ? ra : Tn.current, U = aa(r, U));
      var He = i.getDerivedStateFromProps;
      (me = typeof He == "function" || typeof E.getSnapshotBeforeUpdate == "function") || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (M !== _e || pe !== U) && vh(r, E, u, U), ba = !1, pe = r.memoizedState, E.state = pe, Ns(r, u, E, f);
      var Qe = r.memoizedState;
      M !== _e || pe !== Qe || Zn.current || ba ? (typeof He == "function" && (Jd(r, i, He, u), Qe = r.memoizedState), (K = ba || ph(r, i, K, u, pe, Qe, U) || !1) ? (me || typeof E.UNSAFE_componentWillUpdate != "function" && typeof E.componentWillUpdate != "function" || (typeof E.componentWillUpdate == "function" && E.componentWillUpdate(u, Qe, U), typeof E.UNSAFE_componentWillUpdate == "function" && E.UNSAFE_componentWillUpdate(u, Qe, U)), typeof E.componentDidUpdate == "function" && (r.flags |= 4), typeof E.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof E.componentDidUpdate != "function" || M === n.memoizedProps && pe === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || M === n.memoizedProps && pe === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Qe), E.props = u, E.state = Qe, E.context = U, u = K) : (typeof E.componentDidUpdate != "function" || M === n.memoizedProps && pe === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || M === n.memoizedProps && pe === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return Bs(n, r, i, u, m, f);
  }
  function Bs(n, r, i, u, f, m) {
    rp(n, r);
    var E = (r.flags & 128) !== 0;
    if (!u && !E) return f && qc(r, i, !1), qa(n, r, m);
    u = r.stateNode, Hs.current = r;
    var M = E && typeof i.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && E ? (r.child = Ln(r, n.child, null, m), r.child = Ln(r, null, M, m)) : mr(n, r, M, m), r.memoizedState = u.state, f && qc(r, i, !0), r.child;
  }
  function zu(n) {
    var r = n.stateNode;
    r.pendingContext ? oh(n, r.pendingContext, r.pendingContext !== r.context) : r.context && oh(n, r.context, !1), Qd(n, r.containerInfo);
  }
  function _h(n, r, i, u, f) {
    return Wi(), si(f), r.flags |= 256, mr(n, r, i, u), r.child;
  }
  var Cf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ap(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Ef(n, r, i) {
    var u = r.pendingProps, f = bn.current, m = !1, E = (r.flags & 128) !== 0, M;
    if ((M = E) || (M = n !== null && n.memoizedState === null ? !1 : (f & 2) !== 0), M ? (m = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (f |= 1), rt(bn, f & 1), n === null)
      return Fd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (E = u.children, n = u.fallback, m ? (u = r.mode, m = r.child, E = { mode: "hidden", children: E }, (u & 1) === 0 && m !== null ? (m.childLanes = 0, m.pendingProps = E) : m = tl(E, u, 0, null), n = hi(n, u, i, null), m.return = r, n.return = r, m.sibling = n, r.child = m, r.child.memoizedState = ap(i), r.memoizedState = Cf, n) : op(r, E));
    if (f = n.memoizedState, f !== null && (M = f.dehydrated, M !== null)) return Sh(n, r, E, u, M, f, i);
    if (m) {
      m = u.fallback, E = r.mode, f = n.child, M = f.sibling;
      var U = { mode: "hidden", children: u.children };
      return (E & 1) === 0 && r.child !== f ? (u = r.child, u.childLanes = 0, u.pendingProps = U, r.deletions = null) : (u = el(f, U), u.subtreeFlags = f.subtreeFlags & 14680064), M !== null ? m = el(M, m) : (m = hi(m, E, i, null), m.flags |= 2), m.return = r, u.return = r, u.sibling = m, r.child = u, u = m, m = r.child, E = n.child.memoizedState, E = E === null ? ap(i) : { baseLanes: E.baseLanes | i, cachePool: null, transitions: E.transitions }, m.memoizedState = E, m.childLanes = n.childLanes & ~i, r.memoizedState = Cf, u;
    }
    return m = n.child, n = m.sibling, u = el(m, { mode: "visible", children: u.children }), (r.mode & 1) === 0 && (u.lanes = i), u.return = r, u.sibling = null, n !== null && (i = r.deletions, i === null ? (r.deletions = [n], r.flags |= 16) : i.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function op(n, r) {
    return r = tl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function qs(n, r, i, u) {
    return u !== null && si(u), Ln(r, n.child, null, i), n = op(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Sh(n, r, i, u, f, m, E) {
    if (i)
      return r.flags & 256 ? (r.flags &= -257, u = Zd(Error(d(422))), qs(n, r, E, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (m = u.fallback, f = r.mode, u = tl({ mode: "visible", children: u.children }, f, 0, null), m = hi(m, f, E, null), m.flags |= 2, u.return = r, m.return = r, u.sibling = m, r.child = u, (r.mode & 1) !== 0 && Ln(r, n.child, null, E), r.child.memoizedState = ap(E), r.memoizedState = Cf, m);
    if ((r.mode & 1) === 0) return qs(n, r, E, null);
    if (f.data === "$!") {
      if (u = f.nextSibling && f.nextSibling.dataset, u) var M = u.dgst;
      return u = M, m = Error(d(419)), u = Zd(m, u, void 0), qs(n, r, E, u);
    }
    if (M = (E & n.childLanes) !== 0, Bn || M) {
      if (u = tr, u !== null) {
        switch (E & -E) {
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
        f = (f & (u.suspendedLanes | E)) !== 0 ? 0 : f, f !== 0 && f !== m.retryLane && (m.retryLane = f, wa(n, f), $r(u, n, f, -1));
      }
      return hp(), u = Zd(Error(d(421))), qs(n, r, E, u);
    }
    return f.data === "$?" ? (r.flags |= 128, r.child = n.child, r = ng.bind(null, n), f._reactRetry = r, null) : (n = m.treeContext, ia = Mo(f.nextSibling), oa = r, gn = !0, Ha = null, n !== null && (Hn[Va++] = Ao, Hn[Va++] = Uo, Hn[Va++] = Ea, Ao = n.id, Uo = n.overflow, Ea = r), r = op(r, u.children), r.flags |= 4096, r);
  }
  function ip(n, r, i) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), Bd(n.return, r, i);
  }
  function Fr(n, r, i, u, f) {
    var m = n.memoizedState;
    m === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: i, tailMode: f } : (m.isBackwards = r, m.rendering = null, m.renderingStartTime = 0, m.last = u, m.tail = i, m.tailMode = f);
  }
  function Po(n, r, i) {
    var u = r.pendingProps, f = u.revealOrder, m = u.tail;
    if (mr(n, r, u.children, i), u = bn.current, (u & 2) !== 0) u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && ip(n, i, r);
        else if (n.tag === 19) ip(n, i, r);
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
    if (rt(bn, u), (r.mode & 1) === 0) r.memoizedState = null;
    else switch (f) {
      case "forwards":
        for (i = r.child, f = null; i !== null; ) n = i.alternate, n !== null && Zc(n) === null && (f = i), i = i.sibling;
        i = f, i === null ? (f = r.child, r.child = null) : (f = i.sibling, i.sibling = null), Fr(r, !1, f, i, m);
        break;
      case "backwards":
        for (i = null, f = r.child, r.child = null; f !== null; ) {
          if (n = f.alternate, n !== null && Zc(n) === null) {
            r.child = f;
            break;
          }
          n = f.sibling, f.sibling = i, i = f, f = n;
        }
        Fr(r, !0, i, null, m);
        break;
      case "together":
        Fr(r, !1, null, null, void 0);
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
    if (n !== null && r.child !== n.child) throw Error(d(153));
    if (r.child !== null) {
      for (n = r.child, i = el(n, n.pendingProps), r.child = i, i.return = r; n.sibling !== null; ) n = n.sibling, i = i.sibling = el(n, n.pendingProps), i.return = r;
      i.sibling = null;
    }
    return r.child;
  }
  function Ws(n, r, i) {
    switch (r.tag) {
      case 3:
        zu(r), Wi();
        break;
      case 5:
        fh(r);
        break;
      case 1:
        Vn(r.type) && ir(r);
        break;
      case 4:
        Qd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, f = r.memoizedProps.value;
        rt(xa, u._currentValue), u._currentValue = f;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (rt(bn, bn.current & 1), r.flags |= 128, null) : (i & r.child.childLanes) !== 0 ? Ef(n, r, i) : (rt(bn, bn.current & 1), n = qa(n, r, i), n !== null ? n.sibling : null);
        rt(bn, bn.current & 1);
        break;
      case 19:
        if (u = (i & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (u) return Po(n, r, i);
          r.flags |= 128;
        }
        if (f = r.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), rt(bn, bn.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, $s(n, r, i);
    }
    return qa(n, r, i);
  }
  var Wa, qn, Ch, Eh;
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
  }, qn = function() {
  }, Ch = function(n, r, i, u) {
    var f = n.memoizedProps;
    if (f !== u) {
      n = r.stateNode, Al(zo.current);
      var m = null;
      switch (i) {
        case "input":
          f = rr(n, f), u = rr(n, u), m = [];
          break;
        case "select":
          f = ge({}, f, { value: void 0 }), u = ge({}, u, { value: void 0 }), m = [];
          break;
        case "textarea":
          f = Xn(n, f), u = Xn(n, u), m = [];
          break;
        default:
          typeof f.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Fi);
      }
      vn(i, u);
      var E;
      i = null;
      for (K in f) if (!u.hasOwnProperty(K) && f.hasOwnProperty(K) && f[K] != null) if (K === "style") {
        var M = f[K];
        for (E in M) M.hasOwnProperty(E) && (i || (i = {}), i[E] = "");
      } else K !== "dangerouslySetInnerHTML" && K !== "children" && K !== "suppressContentEditableWarning" && K !== "suppressHydrationWarning" && K !== "autoFocus" && (x.hasOwnProperty(K) ? m || (m = []) : (m = m || []).push(K, null));
      for (K in u) {
        var U = u[K];
        if (M = f?.[K], u.hasOwnProperty(K) && U !== M && (U != null || M != null)) if (K === "style") if (M) {
          for (E in M) !M.hasOwnProperty(E) || U && U.hasOwnProperty(E) || (i || (i = {}), i[E] = "");
          for (E in U) U.hasOwnProperty(E) && M[E] !== U[E] && (i || (i = {}), i[E] = U[E]);
        } else i || (m || (m = []), m.push(
          K,
          i
        )), i = U;
        else K === "dangerouslySetInnerHTML" ? (U = U ? U.__html : void 0, M = M ? M.__html : void 0, U != null && M !== U && (m = m || []).push(K, U)) : K === "children" ? typeof U != "string" && typeof U != "number" || (m = m || []).push(K, "" + U) : K !== "suppressContentEditableWarning" && K !== "suppressHydrationWarning" && (x.hasOwnProperty(K) ? (U != null && K === "onScroll" && Xt("scroll", n), m || M === U || (m = [])) : (m = m || []).push(K, U));
      }
      i && (m = m || []).push("style", i);
      var K = m;
      (r.updateQueue = K) && (r.flags |= 4);
    }
  }, Eh = function(n, r, i, u) {
    i !== u && (r.flags |= 4);
  };
  function Ys(n, r) {
    if (!gn) switch (n.tailMode) {
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
  function ur(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, i = 0, u = 0;
    if (r) for (var f = n.child; f !== null; ) i |= f.lanes | f.childLanes, u |= f.subtreeFlags & 14680064, u |= f.flags & 14680064, f.return = n, f = f.sibling;
    else for (f = n.child; f !== null; ) i |= f.lanes | f.childLanes, u |= f.subtreeFlags, u |= f.flags, f.return = n, f = f.sibling;
    return n.subtreeFlags |= u, n.childLanes = i, r;
  }
  function xh(n, r, i) {
    var u = r.pendingProps;
    switch (Gc(r), r.tag) {
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
        return ur(r), null;
      case 1:
        return Vn(r.type) && Ou(), ur(r), null;
      case 3:
        return u = r.stateNode, Ul(), pn(Zn), pn(Tn), it(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Qc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, Ha !== null && (Yl(Ha), Ha = null))), qn(n, r), ur(r), null;
      case 5:
        Jc(r);
        var f = Al(Os.current);
        if (i = r.type, n !== null && r.stateNode != null) Ch(n, r, i, u, f), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(d(166));
            return ur(r), null;
          }
          if (n = Al(zo.current), Qc(r)) {
            u = r.stateNode, i = r.type;
            var m = r.memoizedProps;
            switch (u[Oo] = r, u[bs] = m, n = (r.mode & 1) !== 0, i) {
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
                for (f = 0; f < Es.length; f++) Xt(Es[f], u);
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
                Qn(u, m), Xt("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!m.multiple }, Xt("invalid", u);
                break;
              case "textarea":
                kr(u, m), Xt("invalid", u);
            }
            vn(i, m), f = null;
            for (var E in m) if (m.hasOwnProperty(E)) {
              var M = m[E];
              E === "children" ? typeof M == "string" ? u.textContent !== M && (m.suppressHydrationWarning !== !0 && Vc(u.textContent, M, n), f = ["children", M]) : typeof M == "number" && u.textContent !== "" + M && (m.suppressHydrationWarning !== !0 && Vc(
                u.textContent,
                M,
                n
              ), f = ["children", "" + M]) : x.hasOwnProperty(E) && M != null && E === "onScroll" && Xt("scroll", u);
            }
            switch (i) {
              case "input":
                kn(u), Co(u, m, !0);
                break;
              case "textarea":
                kn(u), In(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof m.onClick == "function" && (u.onclick = Fi);
            }
            u = f, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            E = f.nodeType === 9 ? f : f.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Tr(i)), n === "http://www.w3.org/1999/xhtml" ? i === "script" ? (n = E.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = E.createElement(i, { is: u.is }) : (n = E.createElement(i), i === "select" && (E = n, u.multiple ? E.multiple = !0 : u.size && (E.size = u.size))) : n = E.createElementNS(n, i), n[Oo] = r, n[bs] = u, Wa(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (E = or(i, u), i) {
                case "dialog":
                  Xt("cancel", n), Xt("close", n), f = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Xt("load", n), f = u;
                  break;
                case "video":
                case "audio":
                  for (f = 0; f < Es.length; f++) Xt(Es[f], n);
                  f = u;
                  break;
                case "source":
                  Xt("error", n), f = u;
                  break;
                case "img":
                case "image":
                case "link":
                  Xt(
                    "error",
                    n
                  ), Xt("load", n), f = u;
                  break;
                case "details":
                  Xt("toggle", n), f = u;
                  break;
                case "input":
                  Qn(n, u), f = rr(n, u), Xt("invalid", n);
                  break;
                case "option":
                  f = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, f = ge({}, u, { value: void 0 }), Xt("invalid", n);
                  break;
                case "textarea":
                  kr(n, u), f = Xn(n, u), Xt("invalid", n);
                  break;
                default:
                  f = u;
              }
              vn(i, f), M = f;
              for (m in M) if (M.hasOwnProperty(m)) {
                var U = M[m];
                m === "style" ? sn(n, U) : m === "dangerouslySetInnerHTML" ? (U = U ? U.__html : void 0, U != null && Eo(n, U)) : m === "children" ? typeof U == "string" ? (i !== "textarea" || U !== "") && Ne(n, U) : typeof U == "number" && Ne(n, "" + U) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (x.hasOwnProperty(m) ? U != null && m === "onScroll" && Xt("scroll", n) : U != null && Ce(n, m, U, E));
              }
              switch (i) {
                case "input":
                  kn(n), Co(n, u, !1);
                  break;
                case "textarea":
                  kn(n), In(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + lt(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, m = u.value, m != null ? Mn(n, !!u.multiple, m, !1) : u.defaultValue != null && Mn(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof f.onClick == "function" && (n.onclick = Fi);
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
        return ur(r), null;
      case 6:
        if (n && r.stateNode != null) Eh(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(d(166));
          if (i = Al(Os.current), Al(zo.current), Qc(r)) {
            if (u = r.stateNode, i = r.memoizedProps, u[Oo] = r, (m = u.nodeValue !== i) && (n = oa, n !== null)) switch (n.tag) {
              case 3:
                Vc(u.nodeValue, i, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Vc(u.nodeValue, i, (n.mode & 1) !== 0);
            }
            m && (r.flags |= 4);
          } else u = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(u), u[Oo] = r, r.stateNode = u;
        }
        return ur(r), null;
      case 13:
        if (pn(bn), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (gn && ia !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) Ts(), Wi(), r.flags |= 98560, m = !1;
          else if (m = Qc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!m) throw Error(d(318));
              if (m = r.memoizedState, m = m !== null ? m.dehydrated : null, !m) throw Error(d(317));
              m[Oo] = r;
            } else Wi(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            ur(r), m = !1;
          } else Ha !== null && (Yl(Ha), Ha = null), m = !0;
          if (!m) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = i, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (bn.current & 1) !== 0 ? Un === 0 && (Un = 3) : hp())), r.updateQueue !== null && (r.flags |= 4), ur(r), null);
      case 4:
        return Ul(), qn(n, r), n === null && ku(r.stateNode.containerInfo), ur(r), null;
      case 10:
        return $d(r.type._context), ur(r), null;
      case 17:
        return Vn(r.type) && Ou(), ur(r), null;
      case 19:
        if (pn(bn), m = r.memoizedState, m === null) return ur(r), null;
        if (u = (r.flags & 128) !== 0, E = m.rendering, E === null) if (u) Ys(m, !1);
        else {
          if (Un !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (E = Zc(n), E !== null) {
              for (r.flags |= 128, Ys(m, !1), u = E.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = i, i = r.child; i !== null; ) m = i, n = u, m.flags &= 14680066, E = m.alternate, E === null ? (m.childLanes = 0, m.lanes = n, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = E.childLanes, m.lanes = E.lanes, m.child = E.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = E.memoizedProps, m.memoizedState = E.memoizedState, m.updateQueue = E.updateQueue, m.type = E.type, n = E.dependencies, m.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), i = i.sibling;
              return rt(bn, bn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          m.tail !== null && xt() > Vu && (r.flags |= 128, u = !0, Ys(m, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = Zc(E), n !== null) {
            if (r.flags |= 128, u = !0, i = n.updateQueue, i !== null && (r.updateQueue = i, r.flags |= 4), Ys(m, !0), m.tail === null && m.tailMode === "hidden" && !E.alternate && !gn) return ur(r), null;
          } else 2 * xt() - m.renderingStartTime > Vu && i !== 1073741824 && (r.flags |= 128, u = !0, Ys(m, !1), r.lanes = 4194304);
          m.isBackwards ? (E.sibling = r.child, r.child = E) : (i = m.last, i !== null ? i.sibling = E : r.child = E, m.last = E);
        }
        return m.tail !== null ? (r = m.tail, m.rendering = r, m.tail = r.sibling, m.renderingStartTime = xt(), r.sibling = null, i = bn.current, rt(bn, u ? i & 1 | 2 : i & 1), r) : (ur(r), null);
      case 22:
      case 23:
        return vp(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && (r.mode & 1) !== 0 ? (Ra & 1073741824) !== 0 && (ur(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : ur(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(d(156, r.tag));
  }
  function xf(n, r) {
    switch (Gc(r), r.tag) {
      case 1:
        return Vn(r.type) && Ou(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Ul(), pn(Zn), pn(Tn), it(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Jc(r), null;
      case 13:
        if (pn(bn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(d(340));
          Wi();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return pn(bn), null;
      case 4:
        return Ul(), null;
      case 10:
        return $d(r.type._context), null;
      case 22:
      case 23:
        return vp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Gs = !1, Or = !1, Qy = typeof WeakSet == "function" ? WeakSet : Set, qe = null;
  function Pu(n, r) {
    var i = n.ref;
    if (i !== null) if (typeof i == "function") try {
      i(null);
    } catch (u) {
      _n(n, r, u);
    }
    else i.current = null;
  }
  function wf(n, r, i) {
    try {
      i();
    } catch (u) {
      _n(n, r, u);
    }
  }
  var wh = !1;
  function bh(n, r) {
    if (ws = za, n = Ss(), Lc(n)) {
      if ("selectionStart" in n) var i = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        i = (i = n.ownerDocument) && i.defaultView || window;
        var u = i.getSelection && i.getSelection();
        if (u && u.rangeCount !== 0) {
          i = u.anchorNode;
          var f = u.anchorOffset, m = u.focusNode;
          u = u.focusOffset;
          try {
            i.nodeType, m.nodeType;
          } catch {
            i = null;
            break e;
          }
          var E = 0, M = -1, U = -1, K = 0, me = 0, _e = n, pe = null;
          t: for (; ; ) {
            for (var He; _e !== i || f !== 0 && _e.nodeType !== 3 || (M = E + f), _e !== m || u !== 0 && _e.nodeType !== 3 || (U = E + u), _e.nodeType === 3 && (E += _e.nodeValue.length), (He = _e.firstChild) !== null; )
              pe = _e, _e = He;
            for (; ; ) {
              if (_e === n) break t;
              if (pe === i && ++K === f && (M = E), pe === m && ++me === u && (U = E), (He = _e.nextSibling) !== null) break;
              _e = pe, pe = _e.parentNode;
            }
            _e = He;
          }
          i = M === -1 || U === -1 ? null : { start: M, end: U };
        } else i = null;
      }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (Nl = { focusedElem: n, selectionRange: i }, za = !1, qe = r; qe !== null; ) if (r = qe, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, qe = n;
    else for (; qe !== null; ) {
      r = qe;
      try {
        var Qe = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Qe !== null) {
              var Ze = Qe.memoizedProps, zn = Qe.memoizedState, $ = r.stateNode, P = $.getSnapshotBeforeUpdate(r.elementType === r.type ? Ze : ho(r.type, Ze), zn);
              $.__reactInternalSnapshotBeforeUpdate = P;
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
      } catch (ye) {
        _n(r, r.return, ye);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, qe = n;
        break;
      }
      qe = r.return;
    }
    return Qe = wh, wh = !1, Qe;
  }
  function Qs(n, r, i) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var f = u = u.next;
      do {
        if ((f.tag & n) === n) {
          var m = f.destroy;
          f.destroy = void 0, m !== void 0 && wf(r, i, m);
        }
        f = f.next;
      } while (f !== u);
    }
  }
  function Ks(n, r) {
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
  function lp(n) {
    var r = n.ref;
    if (r !== null) {
      var i = n.stateNode;
      n.tag, n = i, typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function bf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, bf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Oo], delete r[bs], delete r[Rs], delete r[Mu], delete r[Yy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Xs(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function di(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Xs(n.return)) return null;
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
  var An = null, Vr = !1;
  function Hr(n, r, i) {
    for (i = i.child; i !== null; ) Rh(n, r, i), i = i.sibling;
  }
  function Rh(n, r, i) {
    if (ta && typeof ta.onCommitFiberUnmount == "function") try {
      ta.onCommitFiberUnmount(Mi, i);
    } catch {
    }
    switch (i.tag) {
      case 5:
        Or || Pu(i, r);
      case 6:
        var u = An, f = Vr;
        An = null, Hr(n, r, i), An = u, Vr = f, An !== null && (Vr ? (n = An, i = i.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(i) : n.removeChild(i)) : An.removeChild(i.stateNode));
        break;
      case 18:
        An !== null && (Vr ? (n = An, i = i.stateNode, n.nodeType === 8 ? Du(n.parentNode, i) : n.nodeType === 1 && Du(n, i), so(n)) : Du(An, i.stateNode));
        break;
      case 4:
        u = An, f = Vr, An = i.stateNode.containerInfo, Vr = !0, Hr(n, r, i), An = u, Vr = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Or && (u = i.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          f = u = u.next;
          do {
            var m = f, E = m.destroy;
            m = m.tag, E !== void 0 && ((m & 2) !== 0 || (m & 4) !== 0) && wf(i, r, E), f = f.next;
          } while (f !== u);
        }
        Hr(n, r, i);
        break;
      case 1:
        if (!Or && (Pu(i, r), u = i.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = i.memoizedProps, u.state = i.memoizedState, u.componentWillUnmount();
        } catch (M) {
          _n(i, r, M);
        }
        Hr(n, r, i);
        break;
      case 21:
        Hr(n, r, i);
        break;
      case 22:
        i.mode & 1 ? (Or = (u = Or) || i.memoizedState !== null, Hr(n, r, i), Or = u) : Hr(n, r, i);
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
        var f = Uh.bind(null, n, u);
        i.has(u) || (i.add(u), u.then(f, f));
      });
    }
  }
  function mo(n, r) {
    var i = r.deletions;
    if (i !== null) for (var u = 0; u < i.length; u++) {
      var f = i[u];
      try {
        var m = n, E = r, M = E;
        e: for (; M !== null; ) {
          switch (M.tag) {
            case 5:
              An = M.stateNode, Vr = !1;
              break e;
            case 3:
              An = M.stateNode.containerInfo, Vr = !0;
              break e;
            case 4:
              An = M.stateNode.containerInfo, Vr = !0;
              break e;
          }
          M = M.return;
        }
        if (An === null) throw Error(d(160));
        Rh(m, E, f), An = null, Vr = !1;
        var U = f.alternate;
        U !== null && (U.return = null), f.return = null;
      } catch (K) {
        _n(f, r, K);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) up(r, n), r = r.sibling;
  }
  function up(n, r) {
    var i = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (mo(r, n), ca(n), u & 4) {
          try {
            Qs(3, n, n.return), Ks(3, n);
          } catch (Ze) {
            _n(n, n.return, Ze);
          }
          try {
            Qs(5, n, n.return);
          } catch (Ze) {
            _n(n, n.return, Ze);
          }
        }
        break;
      case 1:
        mo(r, n), ca(n), u & 512 && i !== null && Pu(i, i.return);
        break;
      case 5:
        if (mo(r, n), ca(n), u & 512 && i !== null && Pu(i, i.return), n.flags & 32) {
          var f = n.stateNode;
          try {
            Ne(f, "");
          } catch (Ze) {
            _n(n, n.return, Ze);
          }
        }
        if (u & 4 && (f = n.stateNode, f != null)) {
          var m = n.memoizedProps, E = i !== null ? i.memoizedProps : m, M = n.type, U = n.updateQueue;
          if (n.updateQueue = null, U !== null) try {
            M === "input" && m.type === "radio" && m.name != null && Kn(f, m), or(M, E);
            var K = or(M, m);
            for (E = 0; E < U.length; E += 2) {
              var me = U[E], _e = U[E + 1];
              me === "style" ? sn(f, _e) : me === "dangerouslySetInnerHTML" ? Eo(f, _e) : me === "children" ? Ne(f, _e) : Ce(f, me, _e, K);
            }
            switch (M) {
              case "input":
                ea(f, m);
                break;
              case "textarea":
                to(f, m);
                break;
              case "select":
                var pe = f._wrapperState.wasMultiple;
                f._wrapperState.wasMultiple = !!m.multiple;
                var He = m.value;
                He != null ? Mn(f, !!m.multiple, He, !1) : pe !== !!m.multiple && (m.defaultValue != null ? Mn(
                  f,
                  !!m.multiple,
                  m.defaultValue,
                  !0
                ) : Mn(f, !!m.multiple, m.multiple ? [] : "", !1));
            }
            f[bs] = m;
          } catch (Ze) {
            _n(n, n.return, Ze);
          }
        }
        break;
      case 6:
        if (mo(r, n), ca(n), u & 4) {
          if (n.stateNode === null) throw Error(d(162));
          f = n.stateNode, m = n.memoizedProps;
          try {
            f.nodeValue = m;
          } catch (Ze) {
            _n(n, n.return, Ze);
          }
        }
        break;
      case 3:
        if (mo(r, n), ca(n), u & 4 && i !== null && i.memoizedState.isDehydrated) try {
          so(r.containerInfo);
        } catch (Ze) {
          _n(n, n.return, Ze);
        }
        break;
      case 4:
        mo(r, n), ca(n);
        break;
      case 13:
        mo(r, n), ca(n), f = n.child, f.flags & 8192 && (m = f.memoizedState !== null, f.stateNode.isHidden = m, !m || f.alternate !== null && f.alternate.memoizedState !== null || (fp = xt())), u & 4 && kh(n);
        break;
      case 22:
        if (me = i !== null && i.memoizedState !== null, n.mode & 1 ? (Or = (K = Or) || me, mo(r, n), Or = K) : mo(r, n), ca(n), u & 8192) {
          if (K = n.memoizedState !== null, (n.stateNode.isHidden = K) && !me && (n.mode & 1) !== 0) for (qe = n, me = n.child; me !== null; ) {
            for (_e = qe = me; qe !== null; ) {
              switch (pe = qe, He = pe.child, pe.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qs(4, pe, pe.return);
                  break;
                case 1:
                  Pu(pe, pe.return);
                  var Qe = pe.stateNode;
                  if (typeof Qe.componentWillUnmount == "function") {
                    u = pe, i = pe.return;
                    try {
                      r = u, Qe.props = r.memoizedProps, Qe.state = r.memoizedState, Qe.componentWillUnmount();
                    } catch (Ze) {
                      _n(u, i, Ze);
                    }
                  }
                  break;
                case 5:
                  Pu(pe, pe.return);
                  break;
                case 22:
                  if (pe.memoizedState !== null) {
                    Js(_e);
                    continue;
                  }
              }
              He !== null ? (He.return = pe, qe = He) : Js(_e);
            }
            me = me.sibling;
          }
          e: for (me = null, _e = n; ; ) {
            if (_e.tag === 5) {
              if (me === null) {
                me = _e;
                try {
                  f = _e.stateNode, K ? (m = f.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (M = _e.stateNode, U = _e.memoizedProps.style, E = U != null && U.hasOwnProperty("display") ? U.display : null, M.style.display = Kt("display", E));
                } catch (Ze) {
                  _n(n, n.return, Ze);
                }
              }
            } else if (_e.tag === 6) {
              if (me === null) try {
                _e.stateNode.nodeValue = K ? "" : _e.memoizedProps;
              } catch (Ze) {
                _n(n, n.return, Ze);
              }
            } else if ((_e.tag !== 22 && _e.tag !== 23 || _e.memoizedState === null || _e === n) && _e.child !== null) {
              _e.child.return = _e, _e = _e.child;
              continue;
            }
            if (_e === n) break e;
            for (; _e.sibling === null; ) {
              if (_e.return === null || _e.return === n) break e;
              me === _e && (me = null), _e = _e.return;
            }
            me === _e && (me = null), _e.sibling.return = _e.return, _e = _e.sibling;
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
            if (Xs(i)) {
              var u = i;
              break e;
            }
            i = i.return;
          }
          throw Error(d(160));
        }
        switch (u.tag) {
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (Ne(f, ""), u.flags &= -33);
            var m = di(n);
            Fo(n, m, f);
            break;
          case 3:
          case 4:
            var E = u.stateNode.containerInfo, M = di(n);
            Io(n, M, E);
            break;
          default:
            throw Error(d(161));
        }
      } catch (U) {
        _n(n, n.return, U);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Ky(n, r, i) {
    qe = n, sp(n);
  }
  function sp(n, r, i) {
    for (var u = (n.mode & 1) !== 0; qe !== null; ) {
      var f = qe, m = f.child;
      if (f.tag === 22 && u) {
        var E = f.memoizedState !== null || Gs;
        if (!E) {
          var M = f.alternate, U = M !== null && M.memoizedState !== null || Or;
          M = Gs;
          var K = Or;
          if (Gs = E, (Or = U) && !K) for (qe = f; qe !== null; ) E = qe, U = E.child, E.tag === 22 && E.memoizedState !== null ? cp(f) : U !== null ? (U.return = E, qe = U) : cp(f);
          for (; m !== null; ) qe = m, sp(m), m = m.sibling;
          qe = f, Gs = M, Or = K;
        }
        Th(n);
      } else (f.subtreeFlags & 8772) !== 0 && m !== null ? (m.return = f, qe = m) : Th(n);
    }
  }
  function Th(n) {
    for (; qe !== null; ) {
      var r = qe;
      if ((r.flags & 8772) !== 0) {
        var i = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Or || Ks(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !Or) if (i === null) u.componentDidMount();
              else {
                var f = r.elementType === r.type ? i.memoizedProps : ho(r.type, i.memoizedProps);
                u.componentDidUpdate(f, i.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var m = r.updateQueue;
              m !== null && Gd(r, m, u);
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
                Gd(r, E, i);
              }
              break;
            case 5:
              var M = r.stateNode;
              if (i === null && r.flags & 4) {
                i = M;
                var U = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    U.autoFocus && i.focus();
                    break;
                  case "img":
                    U.src && (i.src = U.src);
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
                  var me = K.memoizedState;
                  if (me !== null) {
                    var _e = me.dehydrated;
                    _e !== null && so(_e);
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
          Or || r.flags & 512 && lp(r);
        } catch (pe) {
          _n(r, r.return, pe);
        }
      }
      if (r === n) {
        qe = null;
        break;
      }
      if (i = r.sibling, i !== null) {
        i.return = r.return, qe = i;
        break;
      }
      qe = r.return;
    }
  }
  function Js(n) {
    for (; qe !== null; ) {
      var r = qe;
      if (r === n) {
        qe = null;
        break;
      }
      var i = r.sibling;
      if (i !== null) {
        i.return = r.return, qe = i;
        break;
      }
      qe = r.return;
    }
  }
  function cp(n) {
    for (; qe !== null; ) {
      var r = qe;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var i = r.return;
            try {
              Ks(4, r);
            } catch (U) {
              _n(r, i, U);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var f = r.return;
              try {
                u.componentDidMount();
              } catch (U) {
                _n(r, f, U);
              }
            }
            var m = r.return;
            try {
              lp(r);
            } catch (U) {
              _n(r, m, U);
            }
            break;
          case 5:
            var E = r.return;
            try {
              lp(r);
            } catch (U) {
              _n(r, E, U);
            }
        }
      } catch (U) {
        _n(r, r.return, U);
      }
      if (r === n) {
        qe = null;
        break;
      }
      var M = r.sibling;
      if (M !== null) {
        M.return = r.return, qe = M;
        break;
      }
      qe = r.return;
    }
  }
  var Xy = Math.ceil, Xi = le.ReactCurrentDispatcher, ql = le.ReactCurrentOwner, yr = le.ReactCurrentBatchConfig, zt = 0, tr = null, Wn = null, gr = 0, Ra = 0, Iu = Fa(0), Un = 0, Zs = null, Vo = 0, Fu = 0, Rf = 0, ec = null, fa = null, fp = 0, Vu = 1 / 0, ka = null, Hu = !1, Wl = null, Ji = null, kf = !1, pi = null, tc = 0, Zi = 0, $u = null, nc = -1, Lr = 0;
  function Yn() {
    return (zt & 6) !== 0 ? xt() : nc !== -1 ? nc : nc = xt();
  }
  function Ho(n) {
    return (n.mode & 1) === 0 ? 1 : (zt & 2) !== 0 && gr !== 0 ? gr & -gr : Gy.transition !== null ? (Lr === 0 && (Lr = hu()), Lr) : (n = $t, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Eu(n.type)), n);
  }
  function $r(n, r, i, u) {
    if (50 < Zi) throw Zi = 0, $u = null, Error(d(185));
    ei(n, i, u), ((zt & 2) === 0 || n !== tr) && (n === tr && ((zt & 2) === 0 && (Fu |= i), Un === 4 && yo(n, gr)), da(n, u), i === 1 && zt === 0 && (r.mode & 1) === 0 && (Vu = xt() + 500, Lu && jo()));
  }
  function da(n, r) {
    var i = n.callbackNode;
    Sl(n, r);
    var u = uo(n, n === tr ? gr : 0);
    if (u === 0) i !== null && pr(i), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (i != null && pr(i), r === 1) n.tag === 0 ? Hi(dp.bind(null, n)) : Wc(dp.bind(null, n)), Nu(function() {
        (zt & 6) === 0 && jo();
      }), i = null;
      else {
        switch (yu(u)) {
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
            i = du;
            break;
          default:
            i = _l;
        }
        i = Ph(i, Tf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = i;
    }
  }
  function Tf(n, r) {
    if (nc = -1, Lr = 0, (zt & 6) !== 0) throw Error(d(327));
    var i = n.callbackNode;
    if (Bu() && n.callbackNode !== i) return null;
    var u = uo(n, n === tr ? gr : 0);
    if (u === 0) return null;
    if ((u & 30) !== 0 || (u & n.expiredLanes) !== 0 || r) r = Nf(n, u);
    else {
      r = u;
      var f = zt;
      zt |= 2;
      var m = Dh();
      (tr !== n || gr !== r) && (ka = null, Vu = xt() + 500, vi(n, r));
      do
        try {
          Mh();
          break;
        } catch (M) {
          Nh(n, M);
        }
      while (!0);
      Hd(), Xi.current = m, zt = f, Wn !== null ? r = 0 : (tr = null, gr = 0, r = Un);
    }
    if (r !== 0) {
      if (r === 2 && (f = Li(n), f !== 0 && (u = f, r = rc(n, f))), r === 1) throw i = Zs, vi(n, 0), yo(n, u), da(n, xt()), i;
      if (r === 6) yo(n, u);
      else {
        if (f = n.current.alternate, (u & 30) === 0 && !Jy(f) && (r = Nf(n, u), r === 2 && (m = Li(n), m !== 0 && (u = m, r = rc(n, m))), r === 1)) throw i = Zs, vi(n, 0), yo(n, u), da(n, xt()), i;
        switch (n.finishedWork = f, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(d(345));
          case 2:
            Ql(n, fa, ka);
            break;
          case 3:
            if (yo(n, u), (u & 130023424) === u && (r = fp + 500 - xt(), 10 < r)) {
              if (uo(n, 0) !== 0) break;
              if (f = n.suspendedLanes, (f & u) !== u) {
                Yn(), n.pingedLanes |= n.suspendedLanes & f;
                break;
              }
              n.timeoutHandle = $c(Ql.bind(null, n, fa, ka), r);
              break;
            }
            Ql(n, fa, ka);
            break;
          case 4:
            if (yo(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, f = -1; 0 < u; ) {
              var E = 31 - zr(u);
              m = 1 << E, E = r[E], E > f && (f = E), u &= ~m;
            }
            if (u = f, u = xt() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Xy(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = $c(Ql.bind(null, n, fa, ka), u);
              break;
            }
            Ql(n, fa, ka);
            break;
          case 5:
            Ql(n, fa, ka);
            break;
          default:
            throw Error(d(329));
        }
      }
    }
    return da(n, xt()), n.callbackNode === i ? Tf.bind(null, n) : null;
  }
  function rc(n, r) {
    var i = ec;
    return n.current.memoizedState.isDehydrated && (vi(n, r).flags |= 256), n = Nf(n, r), n !== 2 && (r = fa, fa = i, r !== null && Yl(r)), n;
  }
  function Yl(n) {
    fa === null ? fa = n : fa.push.apply(fa, n);
  }
  function Jy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var i = r.updateQueue;
        if (i !== null && (i = i.stores, i !== null)) for (var u = 0; u < i.length; u++) {
          var f = i[u], m = f.getSnapshot;
          f = f.value;
          try {
            if (!fo(m(), f)) return !1;
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
    for (r &= ~Rf, r &= ~Fu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var i = 31 - zr(r), u = 1 << i;
      n[i] = -1, r &= ~u;
    }
  }
  function dp(n) {
    if ((zt & 6) !== 0) throw Error(d(327));
    Bu();
    var r = uo(n, 0);
    if ((r & 1) === 0) return da(n, xt()), null;
    var i = Nf(n, r);
    if (n.tag !== 0 && i === 2) {
      var u = Li(n);
      u !== 0 && (r = u, i = rc(n, u));
    }
    if (i === 1) throw i = Zs, vi(n, 0), yo(n, r), da(n, xt()), i;
    if (i === 6) throw Error(d(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Ql(n, fa, ka), da(n, xt()), null;
  }
  function pp(n, r) {
    var i = zt;
    zt |= 1;
    try {
      return n(r);
    } finally {
      zt = i, zt === 0 && (Vu = xt() + 500, Lu && jo());
    }
  }
  function Gl(n) {
    pi !== null && pi.tag === 0 && (zt & 6) === 0 && Bu();
    var r = zt;
    zt |= 1;
    var i = yr.transition, u = $t;
    try {
      if (yr.transition = null, $t = 1, n) return n();
    } finally {
      $t = u, yr.transition = i, zt = r, (zt & 6) === 0 && jo();
    }
  }
  function vp() {
    Ra = Iu.current, pn(Iu);
  }
  function vi(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var i = n.timeoutHandle;
    if (i !== -1 && (n.timeoutHandle = -1, zd(i)), Wn !== null) for (i = Wn.return; i !== null; ) {
      var u = i;
      switch (Gc(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && Ou();
          break;
        case 3:
          Ul(), pn(Zn), pn(Tn), it();
          break;
        case 5:
          Jc(u);
          break;
        case 4:
          Ul();
          break;
        case 13:
          pn(bn);
          break;
        case 19:
          pn(bn);
          break;
        case 10:
          $d(u.type._context);
          break;
        case 22:
        case 23:
          vp();
      }
      i = i.return;
    }
    if (tr = n, Wn = n = el(n.current, null), gr = Ra = r, Un = 0, Zs = null, Rf = Fu = Vo = 0, fa = ec = null, jl !== null) {
      for (r = 0; r < jl.length; r++) if (i = jl[r], u = i.interleaved, u !== null) {
        i.interleaved = null;
        var f = u.next, m = i.pending;
        if (m !== null) {
          var E = m.next;
          m.next = f, u.next = E;
        }
        i.pending = u;
      }
      jl = null;
    }
    return n;
  }
  function Nh(n, r) {
    do {
      var i = Wn;
      try {
        if (Hd(), Nt.current = Hl, ef) {
          for (var u = qt.memoizedState; u !== null; ) {
            var f = u.queue;
            f !== null && (f.pending = null), u = u.next;
          }
          ef = !1;
        }
        if (an = 0, lr = $n = qt = null, js = !1, zl = 0, ql.current = null, i === null || i.return === null) {
          Un = 1, Zs = r, Wn = null;
          break;
        }
        e: {
          var m = n, E = i.return, M = i, U = r;
          if (r = gr, M.flags |= 32768, U !== null && typeof U == "object" && typeof U.then == "function") {
            var K = U, me = M, _e = me.tag;
            if ((me.mode & 1) === 0 && (_e === 0 || _e === 11 || _e === 15)) {
              var pe = me.alternate;
              pe ? (me.updateQueue = pe.updateQueue, me.memoizedState = pe.memoizedState, me.lanes = pe.lanes) : (me.updateQueue = null, me.memoizedState = null);
            }
            var He = mh(E);
            if (He !== null) {
              He.flags &= -257, Ki(He, E, M, m, r), He.mode & 1 && np(m, K, r), r = He, U = K;
              var Qe = r.updateQueue;
              if (Qe === null) {
                var Ze = /* @__PURE__ */ new Set();
                Ze.add(U), r.updateQueue = Ze;
              } else Qe.add(U);
              break e;
            } else {
              if ((r & 1) === 0) {
                np(m, K, r), hp();
                break e;
              }
              U = Error(d(426));
            }
          } else if (gn && M.mode & 1) {
            var zn = mh(E);
            if (zn !== null) {
              (zn.flags & 65536) === 0 && (zn.flags |= 256), Ki(zn, E, M, m, r), si($l(U, M));
              break e;
            }
          }
          m = U = $l(U, M), Un !== 4 && (Un = 2), ec === null ? ec = [m] : ec.push(m), m = E;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, r &= -r, m.lanes |= r;
                var $ = hh(m, U, r);
                ch(m, $);
                break e;
              case 1:
                M = U;
                var P = m.type, W = m.stateNode;
                if ((m.flags & 128) === 0 && (typeof P.getDerivedStateFromError == "function" || W !== null && typeof W.componentDidCatch == "function" && (Ji === null || !Ji.has(W)))) {
                  m.flags |= 65536, r &= -r, m.lanes |= r;
                  var ye = tp(m, M, r);
                  ch(m, ye);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        Lh(i);
      } catch (Ke) {
        r = Ke, Wn === i && i !== null && (Wn = i = i.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Dh() {
    var n = Xi.current;
    return Xi.current = Hl, n === null ? Hl : n;
  }
  function hp() {
    (Un === 0 || Un === 3 || Un === 2) && (Un = 4), tr === null || (Vo & 268435455) === 0 && (Fu & 268435455) === 0 || yo(tr, gr);
  }
  function Nf(n, r) {
    var i = zt;
    zt |= 2;
    var u = Dh();
    (tr !== n || gr !== r) && (ka = null, vi(n, r));
    do
      try {
        Zy();
        break;
      } catch (f) {
        Nh(n, f);
      }
    while (!0);
    if (Hd(), zt = i, Xi.current = u, Wn !== null) throw Error(d(261));
    return tr = null, gr = 0, Un;
  }
  function Zy() {
    for (; Wn !== null; ) Oh(Wn);
  }
  function Mh() {
    for (; Wn !== null && !ao(); ) Oh(Wn);
  }
  function Oh(n) {
    var r = zh(n.alternate, n, Ra);
    n.memoizedProps = n.pendingProps, r === null ? Lh(n) : Wn = r, ql.current = null;
  }
  function Lh(n) {
    var r = n;
    do {
      var i = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (i = xh(i, r, Ra), i !== null) {
          Wn = i;
          return;
        }
      } else {
        if (i = xf(i, r), i !== null) {
          i.flags &= 32767, Wn = i;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Un = 6, Wn = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        Wn = r;
        return;
      }
      Wn = r = n;
    } while (r !== null);
    Un === 0 && (Un = 5);
  }
  function Ql(n, r, i) {
    var u = $t, f = yr.transition;
    try {
      yr.transition = null, $t = 1, eg(n, r, i, u);
    } finally {
      yr.transition = f, $t = u;
    }
    return null;
  }
  function eg(n, r, i, u) {
    do
      Bu();
    while (pi !== null);
    if ((zt & 6) !== 0) throw Error(d(327));
    i = n.finishedWork;
    var f = n.finishedLanes;
    if (i === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, i === n.current) throw Error(d(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var m = i.lanes | i.childLanes;
    if (md(n, m), n === tr && (Wn = tr = null, gr = 0), (i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0 || kf || (kf = !0, Ph(_l, function() {
      return Bu(), null;
    })), m = (i.flags & 15990) !== 0, (i.subtreeFlags & 15990) !== 0 || m) {
      m = yr.transition, yr.transition = null;
      var E = $t;
      $t = 1;
      var M = zt;
      zt |= 4, ql.current = null, bh(n, i), up(i, n), bu(Nl), za = !!ws, Nl = ws = null, n.current = i, Ky(i), oo(), zt = M, $t = E, yr.transition = m;
    } else n.current = i;
    if (kf && (kf = !1, pi = n, tc = f), m = n.pendingLanes, m === 0 && (Ji = null), cs(i.stateNode), da(n, xt()), r !== null) for (u = n.onRecoverableError, i = 0; i < r.length; i++) f = r[i], u(f.value, { componentStack: f.stack, digest: f.digest });
    if (Hu) throw Hu = !1, n = Wl, Wl = null, n;
    return (tc & 1) !== 0 && n.tag !== 0 && Bu(), m = n.pendingLanes, (m & 1) !== 0 ? n === $u ? Zi++ : (Zi = 0, $u = n) : Zi = 0, jo(), null;
  }
  function Bu() {
    if (pi !== null) {
      var n = yu(tc), r = yr.transition, i = $t;
      try {
        if (yr.transition = null, $t = 16 > n ? 16 : n, pi === null) var u = !1;
        else {
          if (n = pi, pi = null, tc = 0, (zt & 6) !== 0) throw Error(d(331));
          var f = zt;
          for (zt |= 4, qe = n.current; qe !== null; ) {
            var m = qe, E = m.child;
            if ((qe.flags & 16) !== 0) {
              var M = m.deletions;
              if (M !== null) {
                for (var U = 0; U < M.length; U++) {
                  var K = M[U];
                  for (qe = K; qe !== null; ) {
                    var me = qe;
                    switch (me.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qs(8, me, m);
                    }
                    var _e = me.child;
                    if (_e !== null) _e.return = me, qe = _e;
                    else for (; qe !== null; ) {
                      me = qe;
                      var pe = me.sibling, He = me.return;
                      if (bf(me), me === K) {
                        qe = null;
                        break;
                      }
                      if (pe !== null) {
                        pe.return = He, qe = pe;
                        break;
                      }
                      qe = He;
                    }
                  }
                }
                var Qe = m.alternate;
                if (Qe !== null) {
                  var Ze = Qe.child;
                  if (Ze !== null) {
                    Qe.child = null;
                    do {
                      var zn = Ze.sibling;
                      Ze.sibling = null, Ze = zn;
                    } while (Ze !== null);
                  }
                }
                qe = m;
              }
            }
            if ((m.subtreeFlags & 2064) !== 0 && E !== null) E.return = m, qe = E;
            else e: for (; qe !== null; ) {
              if (m = qe, (m.flags & 2048) !== 0) switch (m.tag) {
                case 0:
                case 11:
                case 15:
                  Qs(9, m, m.return);
              }
              var $ = m.sibling;
              if ($ !== null) {
                $.return = m.return, qe = $;
                break e;
              }
              qe = m.return;
            }
          }
          var P = n.current;
          for (qe = P; qe !== null; ) {
            E = qe;
            var W = E.child;
            if ((E.subtreeFlags & 2064) !== 0 && W !== null) W.return = E, qe = W;
            else e: for (E = P; qe !== null; ) {
              if (M = qe, (M.flags & 2048) !== 0) try {
                switch (M.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ks(9, M);
                }
              } catch (Ke) {
                _n(M, M.return, Ke);
              }
              if (M === E) {
                qe = null;
                break e;
              }
              var ye = M.sibling;
              if (ye !== null) {
                ye.return = M.return, qe = ye;
                break e;
              }
              qe = M.return;
            }
          }
          if (zt = f, jo(), ta && typeof ta.onPostCommitFiberRoot == "function") try {
            ta.onPostCommitFiberRoot(Mi, n);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        $t = i, yr.transition = r;
      }
    }
    return !1;
  }
  function jh(n, r, i) {
    r = $l(i, r), r = hh(n, r, 1), n = Yi(n, r, 1), r = Yn(), n !== null && (ei(n, 1, r), da(n, r));
  }
  function _n(n, r, i) {
    if (n.tag === 3) jh(n, n, i);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        jh(r, n, i);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Ji === null || !Ji.has(u))) {
          n = $l(i, n), n = tp(r, n, 1), r = Yi(r, n, 1), n = Yn(), r !== null && (ei(r, 1, n), da(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function tg(n, r, i) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = Yn(), n.pingedLanes |= n.suspendedLanes & i, tr === n && (gr & i) === i && (Un === 4 || Un === 3 && (gr & 130023424) === gr && 500 > xt() - fp ? vi(n, 0) : Rf |= i), da(n, r);
  }
  function Ah(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = Ca, Ca <<= 1, (Ca & 130023424) === 0 && (Ca = 4194304)));
    var i = Yn();
    n = wa(n, r), n !== null && (ei(n, r, i), da(n, i));
  }
  function ng(n) {
    var r = n.memoizedState, i = 0;
    r !== null && (i = r.retryLane), Ah(n, i);
  }
  function Uh(n, r) {
    var i = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, f = n.memoizedState;
        f !== null && (i = f.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(d(314));
    }
    u !== null && u.delete(r), Ah(n, i);
  }
  var zh;
  zh = function(n, r, i) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Zn.current) Bn = !0;
    else {
      if ((n.lanes & i) === 0 && (r.flags & 128) === 0) return Bn = !1, Ws(n, r, i);
      Bn = (n.flags & 131072) !== 0;
    }
    else Bn = !1, gn && (r.flags & 1048576) !== 0 && ih(r, ui, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Ba(n, r), n = r.pendingProps;
        var f = aa(r, Tn.current);
        wn(r, i), f = Gi(null, r, u, n, f, i);
        var m = vo();
        return r.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Vn(u) ? (m = !0, ir(r)) : m = !1, r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, Yd(r), f.updater = gf, r.stateNode = f, f._reactInternals = r, Vs(r, u, n, i), r = Bs(null, r, u, !0, m, i)) : (r.tag = 0, gn && m && Yc(r), mr(null, r, f, i), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Ba(n, r), n = r.pendingProps, f = u._init, u = f(u._payload), r.type = u, f = r.tag = ag(u), n = ho(u, n), f) {
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
          throw Error(d(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : ho(u, f), yh(n, r, u, f, i);
      case 1:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : ho(u, f), gh(n, r, u, f, i);
      case 3:
        e: {
          if (zu(r), n === null) throw Error(d(387));
          u = r.pendingProps, m = r.memoizedState, f = m.element, sh(n, r), Ns(r, u, null, i);
          var E = r.memoizedState;
          if (u = E.element, m.isDehydrated) if (m = { element: u, isDehydrated: !1, cache: E.cache, pendingSuspenseBoundaries: E.pendingSuspenseBoundaries, transitions: E.transitions }, r.updateQueue.baseState = m, r.memoizedState = m, r.flags & 256) {
            f = $l(Error(d(423)), r), r = _h(n, r, u, i, f);
            break e;
          } else if (u !== f) {
            f = $l(Error(d(424)), r), r = _h(n, r, u, i, f);
            break e;
          } else for (ia = Mo(r.stateNode.containerInfo.firstChild), oa = r, gn = !0, Ha = null, i = Pe(r, null, u, i), r.child = i; i; ) i.flags = i.flags & -3 | 4096, i = i.sibling;
          else {
            if (Wi(), u === f) {
              r = qa(n, r, i);
              break e;
            }
            mr(n, r, u, i);
          }
          r = r.child;
        }
        return r;
      case 5:
        return fh(r), n === null && Fd(r), u = r.type, f = r.pendingProps, m = n !== null ? n.memoizedProps : null, E = f.children, Hc(u, f) ? E = null : m !== null && Hc(u, m) && (r.flags |= 32), rp(n, r), mr(n, r, E, i), r.child;
      case 6:
        return n === null && Fd(r), null;
      case 13:
        return Ef(n, r, i);
      case 4:
        return Qd(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = Ln(r, null, u, i) : mr(n, r, u, i), r.child;
      case 11:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : ho(u, f), sa(n, r, u, f, i);
      case 7:
        return mr(n, r, r.pendingProps, i), r.child;
      case 8:
        return mr(n, r, r.pendingProps.children, i), r.child;
      case 12:
        return mr(n, r, r.pendingProps.children, i), r.child;
      case 10:
        e: {
          if (u = r.type._context, f = r.pendingProps, m = r.memoizedProps, E = f.value, rt(xa, u._currentValue), u._currentValue = E, m !== null) if (fo(m.value, E)) {
            if (m.children === f.children && !Zn.current) {
              r = qa(n, r, i);
              break e;
            }
          } else for (m = r.child, m !== null && (m.return = r); m !== null; ) {
            var M = m.dependencies;
            if (M !== null) {
              E = m.child;
              for (var U = M.firstContext; U !== null; ) {
                if (U.context === u) {
                  if (m.tag === 1) {
                    U = ci(-1, i & -i), U.tag = 2;
                    var K = m.updateQueue;
                    if (K !== null) {
                      K = K.shared;
                      var me = K.pending;
                      me === null ? U.next = U : (U.next = me.next, me.next = U), K.pending = U;
                    }
                  }
                  m.lanes |= i, U = m.alternate, U !== null && (U.lanes |= i), Bd(
                    m.return,
                    i,
                    r
                  ), M.lanes |= i;
                  break;
                }
                U = U.next;
              }
            } else if (m.tag === 10) E = m.type === r.type ? null : m.child;
            else if (m.tag === 18) {
              if (E = m.return, E === null) throw Error(d(341));
              E.lanes |= i, M = E.alternate, M !== null && (M.lanes |= i), Bd(E, i, r), E = m.sibling;
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
          mr(n, r, f.children, i), r = r.child;
        }
        return r;
      case 9:
        return f = r.type, u = r.pendingProps.children, wn(r, i), f = $a(f), u = u(f), r.flags |= 1, mr(n, r, u, i), r.child;
      case 14:
        return u = r.type, f = ho(u, r.pendingProps), f = ho(u.type, f), Bl(n, r, u, f, i);
      case 15:
        return wt(n, r, r.type, r.pendingProps, i);
      case 17:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : ho(u, f), Ba(n, r), r.tag = 1, Vn(u) ? (n = !0, ir(r)) : n = !1, wn(r, i), _f(r, u, f), Vs(r, u, f, i), Bs(null, r, u, !0, n, i);
      case 19:
        return Po(n, r, i);
      case 22:
        return $s(n, r, i);
    }
    throw Error(d(156, r.tag));
  };
  function Ph(n, r) {
    return hn(n, r);
  }
  function rg(n, r, i, u) {
    this.tag = n, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ya(n, r, i, u) {
    return new rg(n, r, i, u);
  }
  function mp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function ag(n) {
    if (typeof n == "function") return mp(n) ? 1 : 0;
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
  function ac(n, r, i, u, f, m) {
    var E = 2;
    if (u = n, typeof n == "function") mp(n) && (E = 1);
    else if (typeof n == "string") E = 5;
    else e: switch (n) {
      case Le:
        return hi(i.children, f, m, r);
      case je:
        E = 8, f |= 8;
        break;
      case Ge:
        return n = Ya(12, i, r, f | 2), n.elementType = Ge, n.lanes = m, n;
      case Y:
        return n = Ya(13, i, r, f), n.elementType = Y, n.lanes = m, n;
      case ve:
        return n = Ya(19, i, r, f), n.elementType = ve, n.lanes = m, n;
      case he:
        return tl(i, f, m, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Je:
            E = 10;
            break e;
          case te:
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
        throw Error(d(130, n == null ? n : typeof n, ""));
    }
    return r = Ya(E, i, r, f), r.elementType = n, r.type = u, r.lanes = m, r;
  }
  function hi(n, r, i, u) {
    return n = Ya(7, n, u, r), n.lanes = i, n;
  }
  function tl(n, r, i, u) {
    return n = Ya(22, n, u, r), n.elementType = he, n.lanes = i, n.stateNode = { isHidden: !1 }, n;
  }
  function yp(n, r, i) {
    return n = Ya(6, n, null, r), n.lanes = i, n;
  }
  function Df(n, r, i) {
    return r = Ya(4, n.children !== null ? n.children : [], n.key, r), r.lanes = i, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Ih(n, r, i, u, f) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = mu(0), this.expirationTimes = mu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mu(0), this.identifierPrefix = u, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null;
  }
  function Mf(n, r, i, u, f, m, E, M, U) {
    return n = new Ih(n, r, i, M, U), r === 1 ? (r = 1, m === !0 && (r |= 8)) : r = 0, m = Ya(3, null, null, r), n.current = m, m.stateNode = n, m.memoizedState = { element: u, isDehydrated: i, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Yd(m), n;
  }
  function og(n, r, i) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: We, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: i };
  }
  function gp(n) {
    if (!n) return Dr;
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
            if (Vn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(d(171));
    }
    if (n.tag === 1) {
      var i = n.type;
      if (Vn(i)) return ks(n, i, r);
    }
    return r;
  }
  function Fh(n, r, i, u, f, m, E, M, U) {
    return n = Mf(i, u, !0, n, f, m, E, M, U), n.context = gp(null), i = n.current, u = Yn(), f = Ho(i), m = ci(u, f), m.callback = r ?? null, Yi(i, m, f), n.current.lanes = f, ei(n, f, u), da(n, u), n;
  }
  function Of(n, r, i, u) {
    var f = r.current, m = Yn(), E = Ho(f);
    return i = gp(i), r.context === null ? r.context = i : r.pendingContext = i, r = ci(m, E), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Yi(f, r, E), n !== null && ($r(n, f, E, m), Xc(n, f, E)), E;
  }
  function Lf(n) {
    return n = n.current, n.child ? (n.child.tag === 5, n.child.stateNode) : null;
  }
  function _p(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var i = n.retryLane;
      n.retryLane = i !== 0 && i < r ? i : r;
    }
  }
  function jf(n, r) {
    _p(n, r), (n = n.alternate) && _p(n, r);
  }
  function Vh() {
    return null;
  }
  var Kl = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Sp(n) {
    this._internalRoot = n;
  }
  Af.prototype.render = Sp.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(d(409));
    Of(n, r, null, null);
  }, Af.prototype.unmount = Sp.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Gl(function() {
        Of(null, n, null, null);
      }), r[ii] = null;
    }
  };
  function Af(n) {
    this._internalRoot = n;
  }
  Af.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = gt();
      n = { blockedOn: null, target: n, priority: r };
      for (var i = 0; i < Jn.length && r !== 0 && r < Jn[i].priority; i++) ;
      Jn.splice(i, 0, n), i === 0 && ps(n);
    }
  };
  function Cp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Uf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Hh() {
  }
  function ig(n, r, i, u, f) {
    if (f) {
      if (typeof u == "function") {
        var m = u;
        u = function() {
          var K = Lf(E);
          m.call(K);
        };
      }
      var E = Fh(r, u, n, 0, null, !1, !1, "", Hh);
      return n._reactRootContainer = E, n[ii] = E.current, ku(n.nodeType === 8 ? n.parentNode : n), Gl(), E;
    }
    for (; f = n.lastChild; ) n.removeChild(f);
    if (typeof u == "function") {
      var M = u;
      u = function() {
        var K = Lf(U);
        M.call(K);
      };
    }
    var U = Mf(n, 0, !1, null, null, !1, !1, "", Hh);
    return n._reactRootContainer = U, n[ii] = U.current, ku(n.nodeType === 8 ? n.parentNode : n), Gl(function() {
      Of(r, U, i, u);
    }), U;
  }
  function oc(n, r, i, u, f) {
    var m = i._reactRootContainer;
    if (m) {
      var E = m;
      if (typeof f == "function") {
        var M = f;
        f = function() {
          var U = Lf(E);
          M.call(U);
        };
      }
      Of(r, E, n, f);
    } else E = ig(i, r, n, f, u);
    return Lf(E);
  }
  Ft = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var i = lo(r.pendingLanes);
          i !== 0 && (ti(r, i | 1), da(r, xt()), (zt & 6) === 0 && (Vu = xt() + 500, jo()));
        }
        break;
      case 13:
        Gl(function() {
          var u = wa(n, 1);
          if (u !== null) {
            var f = Yn();
            $r(u, n, 1, f);
          }
        }), jf(n, 1);
    }
  }, fs = function(n) {
    if (n.tag === 13) {
      var r = wa(n, 134217728);
      if (r !== null) {
        var i = Yn();
        $r(r, n, 134217728, i);
      }
      jf(n, 134217728);
    }
  }, Ro = function(n) {
    if (n.tag === 13) {
      var r = Ho(n), i = wa(n, r);
      if (i !== null) {
        var u = Yn();
        $r(i, n, r, u);
      }
      jf(n, r);
    }
  }, gt = function() {
    return $t;
  }, gu = function(n, r) {
    var i = $t;
    try {
      return $t = n, r();
    } finally {
      $t = i;
    }
  }, en = function(n, r, i) {
    switch (r) {
      case "input":
        if (ea(n, i), r = i.name, i.type === "radio" && r != null) {
          for (i = n; i.parentNode; ) i = i.parentNode;
          for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < i.length; r++) {
            var u = i[r];
            if (u !== n && u.form === n.form) {
              var f = xn(u);
              if (!f) throw Error(d(90));
              fr(u), ea(u, f);
            }
          }
        }
        break;
      case "textarea":
        to(n, i);
        break;
      case "select":
        r = i.value, r != null && Mn(n, !!i.multiple, r, !1);
    }
  }, ml = pp, Ti = Gl;
  var lg = { usingClientEntryPoint: !1, Events: [ot, po, xn, Zo, hl, pp] }, ic = { findFiberByHostInstance: Dl, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, $h = { bundleType: ic.bundleType, version: ic.version, rendererPackageName: ic.rendererPackageName, rendererConfig: ic.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: le.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = On(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: ic.findFiberByHostInstance || Vh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var nl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!nl.isDisabled && nl.supportsFiber) try {
      Mi = nl.inject($h), ta = nl;
    } catch {
    }
  }
  return Za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lg, Za.createPortal = function(n, r) {
    var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Cp(r)) throw Error(d(200));
    return og(n, r, null, i);
  }, Za.createRoot = function(n, r) {
    if (!Cp(n)) throw Error(d(299));
    var i = !1, u = "", f = Kl;
    return r != null && (r.unstable_strictMode === !0 && (i = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (f = r.onRecoverableError)), r = Mf(n, 1, !1, null, null, i, !1, u, f), n[ii] = r.current, ku(n.nodeType === 8 ? n.parentNode : n), new Sp(r);
  }, Za.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(d(188)) : (n = Object.keys(n).join(","), Error(d(268, n)));
    return n = On(r), n = n === null ? null : n.stateNode, n;
  }, Za.flushSync = function(n) {
    return Gl(n);
  }, Za.hydrate = function(n, r, i) {
    if (!Uf(r)) throw Error(d(200));
    return oc(null, n, r, !0, i);
  }, Za.hydrateRoot = function(n, r, i) {
    if (!Cp(n)) throw Error(d(405));
    var u = i != null && i.hydratedSources || null, f = !1, m = "", E = Kl;
    if (i != null && (i.unstable_strictMode === !0 && (f = !0), i.identifierPrefix !== void 0 && (m = i.identifierPrefix), i.onRecoverableError !== void 0 && (E = i.onRecoverableError)), r = Fh(r, null, n, 1, i ?? null, f, !1, m, E), n[ii] = r.current, ku(n), u) for (n = 0; n < u.length; n++) i = u[n], f = i._getVersion, f = f(i._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [i, f] : r.mutableSourceEagerHydrationData.push(
      i,
      f
    );
    return new Af(r);
  }, Za.render = function(n, r, i) {
    if (!Uf(r)) throw Error(d(200));
    return oc(null, n, r, !1, i);
  }, Za.unmountComponentAtNode = function(n) {
    if (!Uf(n)) throw Error(d(40));
    return n._reactRootContainer ? (Gl(function() {
      oc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ii] = null;
      });
    }), !0) : !1;
  }, Za.unstable_batchedUpdates = pp, Za.unstable_renderSubtreeIntoContainer = function(n, r, i, u) {
    if (!Uf(i)) throw Error(d(200));
    if (n == null || n._reactInternals === void 0) throw Error(d(38));
    return oc(n, r, i, !1, u);
  }, Za.version = "18.3.1-next-f1338f8080-20240426", Za;
}
var eo = {};
var wE;
function m6() {
  return wE || (wE = 1, process.env.NODE_ENV !== "production" && (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = kv(), p = YE(), d = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, g = !1;
    function x(e) {
      g = e;
    }
    function C(e) {
      if (!g) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          a[o - 1] = arguments[o];
        w("warn", e, a);
      }
    }
    function h(e) {
      if (!g) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          a[o - 1] = arguments[o];
        w("error", e, a);
      }
    }
    function w(e, t, a) {
      {
        var o = d.ReactDebugCurrentFrame, l = o.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(v) {
          return String(v);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var R = 0, b = 1, D = 2, A = 3, V = 4, H = 5, ae = 6, ie = 7, xe = 8, we = 9, Ee = 10, Ce = 11, le = 12, se = 13, We = 14, Le = 15, je = 16, Ge = 17, Je = 18, te = 19, L = 21, Y = 22, ve = 23, ke = 24, ue = 25, he = !0, ee = !1, Me = !1, ge = !1, F = !1, Z = !0, et = !0, Ve = !0, pt = !0, at = /* @__PURE__ */ new Set(), ze = {}, lt = {};
    function vt(e, t) {
      Qt(e, t), Qt(e + "Capture", t);
    }
    function Qt(e, t) {
      ze[e] && h("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), ze[e] = t;
      {
        var a = e.toLowerCase();
        lt[a] = e, e === "onDoubleClick" && (lt.ondblclick = e);
      }
      for (var o = 0; o < t.length; o++)
        at.add(t[o]);
    }
    var kn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", fr = Object.prototype.hasOwnProperty;
    function Sn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function rr(e) {
      try {
        return Qn(e), !1;
      } catch {
        return !0;
      }
    }
    function Qn(e) {
      return "" + e;
    }
    function Kn(e, t) {
      if (rr(e))
        return h("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Sn(e)), Qn(e);
    }
    function ea(e) {
      if (rr(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Sn(e)), Qn(e);
    }
    function Co(e, t) {
      if (rr(e))
        return h("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Sn(e)), Qn(e);
    }
    function ga(e, t) {
      if (rr(e))
        return h("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Sn(e)), Qn(e);
    }
    function ar(e) {
      if (rr(e))
        return h("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Sn(e)), Qn(e);
    }
    function Mn(e) {
      if (rr(e))
        return h("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Sn(e)), Qn(e);
    }
    var Xn = 0, kr = 1, to = 2, In = 3, Tr = 4, _a = 5, no = 6, Eo = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ne = Eo + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", tt = new RegExp("^[" + Eo + "][" + Ne + "]*$"), Rt = {}, Kt = {};
    function sn(e) {
      return fr.call(Kt, e) ? !0 : fr.call(Rt, e) ? !1 : tt.test(e) ? (Kt[e] = !0, !0) : (Rt[e] = !0, h("Invalid attribute name: `%s`", e), !1);
    }
    function Cn(e, t, a) {
      return t !== null ? t.type === Xn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function vn(e, t, a, o) {
      if (a !== null && a.type === Xn)
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
    function or(e, t, a, o) {
      if (t === null || typeof t > "u" || vn(e, t, a, o))
        return !0;
      if (o)
        return !1;
      if (a !== null)
        switch (a.type) {
          case In:
            return !t;
          case Tr:
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
      this.acceptsBooleans = t === to || t === In || t === Tr, this.attributeName = o, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = v;
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
        Xn,
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
        kr,
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
        In,
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
        In,
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
        Tr,
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
    var Nr = /[\-\:]([a-z])/g, ja = function(e) {
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
      var t = e.replace(Nr, ja);
      en[t] = new Zt(
        t,
        kr,
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
      var t = e.replace(Nr, ja);
      en[t] = new Zt(
        t,
        kr,
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
      var t = e.replace(Nr, ja);
      en[t] = new Zt(
        t,
        kr,
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
        kr,
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
    var Zo = "xlinkHref";
    en[Zo] = new Zt(
      "xlinkHref",
      kr,
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
        kr,
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
        Kn(a, t), o.sanitizeURL && Ti("" + a);
        var s = o.attributeName, v = null;
        if (o.type === Tr) {
          if (e.hasAttribute(s)) {
            var y = e.getAttribute(s);
            return y === "" ? !0 : or(t, a, o, !1) ? y : y === "" + a ? a : y;
          }
        } else if (e.hasAttribute(s)) {
          if (or(t, a, o, !1))
            return e.getAttribute(s);
          if (o.type === In)
            return a;
          v = e.getAttribute(s);
        }
        return or(t, a, o, !1) ? v === null ? a : v : v === "" + a ? a : v;
      }
    }
    function yl(e, t, a, o) {
      {
        if (!sn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return Kn(a, t), l === "" + a ? a : l;
      }
    }
    function Ar(e, t, a, o) {
      var l = cn(t);
      if (!Cn(t, l, o)) {
        if (or(t, a, l, o) && (a = null), o || l === null) {
          if (sn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Kn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var v = l.mustUseProperty;
        if (v) {
          var y = l.propertyName;
          if (a === null) {
            var _ = l.type;
            e[y] = _ === In ? !1 : "";
          } else
            e[y] = a;
          return;
        }
        var T = l.attributeName, N = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(T);
        else {
          var I = l.type, z;
          I === In || I === Tr && a === !0 ? z = "" : (Kn(a, T), z = "" + a, l.sanitizeURL && Ti(z.toString())), N ? e.setAttributeNS(N, T, z) : e.setAttribute(T, z);
        }
      }
    }
    var Ur = /* @__PURE__ */ Symbol.for("react.element"), dr = /* @__PURE__ */ Symbol.for("react.portal"), xo = /* @__PURE__ */ Symbol.for("react.fragment"), ro = /* @__PURE__ */ Symbol.for("react.strict_mode"), wo = /* @__PURE__ */ Symbol.for("react.profiler"), bo = /* @__PURE__ */ Symbol.for("react.provider"), j = /* @__PURE__ */ Symbol.for("react.context"), ce = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ae = /* @__PURE__ */ Symbol.for("react.suspense"), Ye = /* @__PURE__ */ Symbol.for("react.suspense_list"), Et = /* @__PURE__ */ Symbol.for("react.memo"), _t = /* @__PURE__ */ Symbol.for("react.lazy"), Dt = /* @__PURE__ */ Symbol.for("react.scope"), Tt = /* @__PURE__ */ Symbol.for("react.debug_trace_mode"), On = /* @__PURE__ */ Symbol.for("react.offscreen"), fn = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), hn = /* @__PURE__ */ Symbol.for("react.cache"), pr = /* @__PURE__ */ Symbol.for("react.tracing_marker"), ao = Symbol.iterator, oo = "@@iterator";
    function xt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ao && e[ao] || e[oo];
      return typeof t == "function" ? t : null;
    }
    var bt = Object.assign, io = 0, gl, _l, Di, du, Mi, ta, cs;
    function zr() {
    }
    zr.__reactDisabledLog = !0;
    function kc() {
      {
        if (io === 0) {
          gl = console.log, _l = console.info, Di = console.warn, du = console.error, Mi = console.group, ta = console.groupCollapsed, cs = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: zr,
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
    function Tc() {
      {
        if (io--, io === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: bt({}, e, {
              value: gl
            }),
            info: bt({}, e, {
              value: _l
            }),
            warn: bt({}, e, {
              value: Di
            }),
            error: bt({}, e, {
              value: du
            }),
            group: bt({}, e, {
              value: Mi
            }),
            groupCollapsed: bt({}, e, {
              value: ta
            }),
            groupEnd: bt({}, e, {
              value: cs
            })
          });
        }
        io < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var pu = d.ReactCurrentDispatcher, Oi;
    function Ca(e, t, a) {
      {
        if (Oi === void 0)
          try {
            throw Error();
          } catch (l) {
            var o = l.stack.trim().match(/\n( *(at )?)/);
            Oi = o && o[1] || "";
          }
        return `
` + Oi + e;
      }
    }
    var lo = !1, uo;
    {
      var vu = typeof WeakMap == "function" ? WeakMap : Map;
      uo = new vu();
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
      s = pu.current, pu.current = null, kc();
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
        lo = !1, pu.current = s, Tc(), Error.prepareStackTrace = l;
      }
      var z = e ? e.displayName || e.name : "", G = z ? Ca(z) : "";
      return typeof e == "function" && uo.set(e, G), G;
    }
    function Li(e, t, a) {
      return Sl(e, !0);
    }
    function hu(e, t, a) {
      return Sl(e, !1);
    }
    function mu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ei(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Sl(e, mu(e));
      if (typeof e == "string")
        return Ca(e);
      switch (e) {
        case Ae:
          return Ca("Suspense");
        case Ye:
          return Ca("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ce:
            return hu(e.render);
          case Et:
            return ei(e.type, t, a);
          case _t: {
            var o = e, l = o._payload, s = o._init;
            try {
              return ei(s(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function md(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case H:
          return Ca(e.type);
        case je:
          return Ca("Lazy");
        case se:
          return Ca("Suspense");
        case te:
          return Ca("SuspenseList");
        case R:
        case D:
        case Le:
          return hu(e.type);
        case Ce:
          return hu(e.type.render);
        case b:
          return Li(e.type);
        default:
          return "";
      }
    }
    function ti(e) {
      try {
        var t = "", a = e;
        do
          t += md(a), a = a.return;
        while (a);
        return t;
      } catch (o) {
        return `
Error generating stack: ` + o.message + `
` + o.stack;
      }
    }
    function $t(e, t, a) {
      var o = e.displayName;
      if (o)
        return o;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function yu(e) {
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
        case dr:
          return "Portal";
        case wo:
          return "Profiler";
        case ro:
          return "StrictMode";
        case Ae:
          return "Suspense";
        case Ye:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case j:
            var t = e;
            return yu(t) + ".Consumer";
          case bo:
            var a = e;
            return yu(a._context) + ".Provider";
          case ce:
            return $t(e, e.render, "ForwardRef");
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
    function fs(e, t, a) {
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
        case we:
          var o = a;
          return Ro(o) + ".Consumer";
        case Ee:
          var l = a;
          return Ro(l._context) + ".Provider";
        case Je:
          return "DehydratedFragment";
        case Ce:
          return fs(a, a.render, "ForwardRef");
        case ie:
          return "Fragment";
        case H:
          return a;
        case V:
          return "Portal";
        case A:
          return "Root";
        case ae:
          return "Text";
        case je:
          return Ft(a);
        case xe:
          return a === ro ? "StrictMode" : "Mode";
        case Y:
          return "Offscreen";
        case le:
          return "Profiler";
        case L:
          return "Scope";
        case se:
          return "Suspense";
        case te:
          return "SuspenseList";
        case ue:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case b:
        case R:
        case Ge:
        case D:
        case We:
        case Le:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var gu = d.ReactDebugCurrentFrame, vr = null, ko = !1;
    function Pr() {
      {
        if (vr === null)
          return null;
        var e = vr._debugOwner;
        if (e !== null && typeof e < "u")
          return gt(e);
      }
      return null;
    }
    function To() {
      return vr === null ? "" : ti(vr);
    }
    function mn() {
      gu.getCurrentStack = null, vr = null, ko = !1;
    }
    function tn(e) {
      gu.getCurrentStack = e === null ? null : To, vr = e, ko = !1;
    }
    function ji() {
      return vr;
    }
    function Jn(e) {
      ko = e;
    }
    function Ir(e) {
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
          return Mn(e), e;
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
    function ds(e, t) {
      Cl[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || h("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || h("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function ps(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Ai(e) {
      return e._valueTracker;
    }
    function El(e) {
      e._valueTracker = null;
    }
    function yd(e) {
      var t = "";
      return e && (ps(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Ua(e) {
      var t = ps(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Mn(e[t]);
      var o = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(y) {
            Mn(y), o = "" + y, s.call(this, y);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var v = {
          getValue: function() {
            return o;
          },
          setValue: function(y) {
            Mn(y), o = "" + y;
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
      var a = t.getValue(), o = yd(e);
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
    var _u = !1, Su = !1, Ui = !1, xl = !1;
    function Cu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Eu(e, t) {
      var a = e, o = t.checked, l = bt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: o ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function co(e, t) {
      ds("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Su && (h("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Pr() || "A component", t.type), Su = !0), t.value !== void 0 && t.defaultValue !== void 0 && !_u && (h("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Pr() || "A component", t.type), _u = !0);
      var a = e, o = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Aa(t.value != null ? t.value : o),
        controlled: Cu(t)
      };
    }
    function S(e, t) {
      var a = e, o = t.checked;
      o != null && Ar(a, "checked", o, !1);
    }
    function O(e, t) {
      var a = e;
      {
        var o = Cu(t);
        !a._wrapperState.controlled && o && !xl && (h("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), xl = !0), a._wrapperState.controlled && !o && !Ui && (h("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Ui = !0);
      }
      S(e, t);
      var l = Aa(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = Ir(l)) : a.value !== Ir(l) && (a.value = Ir(l));
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
        var v = Ir(o._wrapperState.initialValue);
        a || v !== o.value && (o.value = v), o.defaultValue = v;
      }
      var y = o.name;
      y !== "" && (o.name = ""), o.defaultChecked = !o.defaultChecked, o.defaultChecked = !!o._wrapperState.initialChecked, y !== "" && (o.name = y);
    }
    function J(e, t) {
      var a = e;
      O(a, t), be(a, t);
    }
    function be(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var o = e; o.parentNode; )
          o = o.parentNode;
        Kn(a, "name");
        for (var l = o.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var v = l[s];
          if (!(v === e || v.form !== e.form)) {
            var y = lm(v);
            if (!y)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            No(v), O(v, y);
          }
        }
      }
    }
    function ut(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || za(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Ir(e._wrapperState.initialValue) : e.defaultValue !== Ir(a) && (e.defaultValue = Ir(a)));
    }
    var Oe = !1, ft = !1, Mt = !1;
    function Vt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? c.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || ft || (ft = !0, h("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Mt || (Mt = !0, h("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Oe && (h("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Oe = !0);
    }
    function dn(e, t) {
      t.value != null && e.setAttribute("value", Ir(Aa(t.value)));
    }
    var nn = Array.isArray;
    function kt(e) {
      return nn(e);
    }
    var rn;
    rn = !1;
    function En() {
      var e = Pr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var zi = ["value", "defaultValue"];
    function vs(e) {
      {
        ds("select", e);
        for (var t = 0; t < zi.length; t++) {
          var a = zi[t];
          if (e[a] != null) {
            var o = kt(e[a]);
            e.multiple && !o ? h("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, En()) : !e.multiple && o && h("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, En());
          }
        }
      }
    }
    function ni(e, t, a, o) {
      var l = e.options;
      if (t) {
        for (var s = a, v = {}, y = 0; y < s.length; y++)
          v["$" + s[y]] = !0;
        for (var _ = 0; _ < l.length; _++) {
          var T = v.hasOwnProperty("$" + l[_].value);
          l[_].selected !== T && (l[_].selected = T), T && o && (l[_].defaultSelected = !0);
        }
      } else {
        for (var N = Ir(Aa(a)), I = null, z = 0; z < l.length; z++) {
          if (l[z].value === N) {
            l[z].selected = !0, o && (l[z].defaultSelected = !0);
            return;
          }
          I === null && !l[z].disabled && (I = l[z]);
        }
        I !== null && (I.selected = !0);
      }
    }
    function hs(e, t) {
      return bt({}, t, {
        value: void 0
      });
    }
    function wl(e, t) {
      var a = e;
      vs(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !rn && (h("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), rn = !0);
    }
    function gd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var o = t.value;
      o != null ? ni(a, !!t.multiple, o, !1) : t.defaultValue != null && ni(a, !!t.multiple, t.defaultValue, !0);
    }
    function Nc(e, t) {
      var a = e, o = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? ni(a, !!t.multiple, l, !1) : o !== !!t.multiple && (t.defaultValue != null ? ni(a, !!t.multiple, t.defaultValue, !0) : ni(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function _d(e, t) {
      var a = e, o = t.value;
      o != null && ni(a, !!t.multiple, o, !1);
    }
    var Dv = !1;
    function Sd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var o = bt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Ir(a._wrapperState.initialValue)
      });
      return o;
    }
    function Cd(e, t) {
      var a = e;
      ds("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Dv && (h("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Pr() || "A component"), Dv = !0);
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
    function Mv(e, t) {
      var a = e, o = Aa(t.value), l = Aa(t.defaultValue);
      if (o != null) {
        var s = Ir(o);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = Ir(l));
    }
    function Ov(e, t) {
      var a = e, o = a.textContent;
      o === a._wrapperState.initialValue && o !== "" && o !== null && (a.value = o);
    }
    function Uy(e, t) {
      Mv(e, t);
    }
    var ri = "http://www.w3.org/1999/xhtml", Ed = "http://www.w3.org/1998/Math/MathML", xd = "http://www.w3.org/2000/svg";
    function wd(e) {
      switch (e) {
        case "svg":
          return xd;
        case "math":
          return Ed;
        default:
          return ri;
      }
    }
    function bd(e, t) {
      return e == null || e === ri ? wd(t) : e === xd && t === "foreignObject" ? ri : e;
    }
    var Lv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, o, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, o, l);
        });
      } : e;
    }, Dc, jv = Lv(function(e, t) {
      if (e.namespaceURI === xd && !("innerHTML" in e)) {
        Dc = Dc || document.createElement("div"), Dc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Dc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), na = 1, ai = 3, Fn = 8, oi = 9, Rd = 11, xu = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === ai) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, ms = {
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
    }, ys = {
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
    Object.keys(ys).forEach(function(e) {
      Uv.forEach(function(t) {
        ys[Av(t, e)] = ys[e];
      });
    });
    function Mc(e, t, a) {
      var o = t == null || typeof t == "boolean" || t === "";
      return o ? "" : !a && typeof t == "number" && t !== 0 && !(ys.hasOwnProperty(e) && ys[e]) ? t + "px" : (ga(t, e), ("" + t).trim());
    }
    var zv = /([A-Z])/g, Pv = /^ms-/;
    function wu(e) {
      return e.replace(zv, "-$1").toLowerCase().replace(Pv, "-ms-");
    }
    var Iv = function() {
    };
    {
      var zy = /^(?:webkit|moz|o)[A-Z]/, Py = /^-ms-/, Fv = /-(.)/g, kd = /;\s*$/, Do = {}, bl = {}, Vv = !1, gs = !1, Iy = function(e) {
        return e.replace(Fv, function(t, a) {
          return a.toUpperCase();
        });
      }, Hv = function(e) {
        Do.hasOwnProperty(e) && Do[e] || (Do[e] = !0, h(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Iy(e.replace(Py, "ms-"))
        ));
      }, Td = function(e) {
        Do.hasOwnProperty(e) && Do[e] || (Do[e] = !0, h("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Nd = function(e, t) {
        bl.hasOwnProperty(t) && bl[t] || (bl[t] = !0, h(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(kd, "")));
      }, $v = function(e, t) {
        Vv || (Vv = !0, h("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Bv = function(e, t) {
        gs || (gs = !0, h("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Iv = function(e, t) {
        e.indexOf("-") > -1 ? Hv(e) : zy.test(e) ? Td(e) : kd.test(t) && Nd(e, t), typeof t == "number" && (isNaN(t) ? $v(e, t) : isFinite(t) || Bv(e, t));
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
              t += a + (s ? o : wu(o)) + ":", t += Mc(o, l, s), a = ";";
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
          var s = Mc(o, t[o], l);
          o === "float" && (o = "cssFloat"), l ? a.setProperty(o, s) : a[o] = s;
        }
    }
    function Vy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Yv(e) {
      var t = {};
      for (var a in e)
        for (var o = ms[a] || [a], l = 0; l < o.length; l++)
          t[o[l]] = a;
      return t;
    }
    function Hy(e, t) {
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
    }, _s = bt({
      menuitem: !0
    }, fo), Gv = "__html";
    function Oc(e, t) {
      if (t) {
        if (_s[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
    var Ss = {
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
    }, Lc = {
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
    }, bu = {}, $y = new RegExp("^(aria)-[" + Ne + "]*$"), Ru = new RegExp("^(aria)[A-Z][" + Ne + "]*$");
    function Dd(e, t) {
      {
        if (fr.call(bu, t) && bu[t])
          return !0;
        if (Ru.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), o = Lc.hasOwnProperty(a) ? a : null;
          if (o == null)
            return h("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), bu[t] = !0, !0;
          if (t !== o)
            return h("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), bu[t] = !0, !0;
        }
        if ($y.test(t)) {
          var l = t.toLowerCase(), s = Lc.hasOwnProperty(l) ? l : null;
          if (s == null)
            return bu[t] = !0, !1;
          if (t !== s)
            return h("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), bu[t] = !0, !0;
        }
      }
      return !0;
    }
    function Cs(e, t) {
      {
        var a = [];
        for (var o in t) {
          var l = Dd(e, o);
          l || a.push(o);
        }
        var s = a.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        a.length === 1 ? h("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && h("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Md(e, t) {
      Pi(e, t) || Cs(e, t);
    }
    var Od = !1;
    function jc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Od && (Od = !0, e === "select" && t.multiple ? h("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : h("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Rl = function() {
    };
    {
      var hr = {}, Ld = /^on./, Ac = /^on[^A-Z]/, Qv = new RegExp("^(aria)-[" + Ne + "]*$"), Kv = new RegExp("^(aria)[A-Z][" + Ne + "]*$");
      Rl = function(e, t, a, o) {
        if (fr.call(hr, t) && hr[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return h("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), hr[t] = !0, !0;
        if (o != null) {
          var s = o.registrationNameDependencies, v = o.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var y = v.hasOwnProperty(l) ? v[l] : null;
          if (y != null)
            return h("Invalid event handler property `%s`. Did you mean `%s`?", t, y), hr[t] = !0, !0;
          if (Ld.test(t))
            return h("Unknown event handler property `%s`. It will be ignored.", t), hr[t] = !0, !0;
        } else if (Ld.test(t))
          return Ac.test(t) && h("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), hr[t] = !0, !0;
        if (Qv.test(t) || Kv.test(t))
          return !0;
        if (l === "innerhtml")
          return h("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), hr[t] = !0, !0;
        if (l === "aria")
          return h("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), hr[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return h("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), hr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return h("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), hr[t] = !0, !0;
        var _ = cn(t), T = _ !== null && _.type === Xn;
        if (Ss.hasOwnProperty(l)) {
          var N = Ss[l];
          if (N !== t)
            return h("Invalid DOM property `%s`. Did you mean `%s`?", t, N), hr[t] = !0, !0;
        } else if (!T && t !== l)
          return h("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), hr[t] = !0, !0;
        return typeof a == "boolean" && vn(t, a, _, !1) ? (a ? h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), hr[t] = !0, !0) : T ? !0 : vn(t, a, _, !1) ? (hr[t] = !0, !1) : ((a === "false" || a === "true") && _ !== null && _.type === In && (h("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), hr[t] = !0), !0);
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
    var jd = 1, Uc = 2, Pa = 4, Ad = jd | Uc | Pa, kl = null;
    function By(e) {
      kl !== null && h("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), kl = e;
    }
    function qy() {
      kl === null && h("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), kl = null;
    }
    function Es(e) {
      return e === kl;
    }
    function Ud(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === ai ? t.parentNode : t;
    }
    var zc = null, Tl = null, Xt = null;
    function Pc(e) {
      var t = Yu(e);
      if (t) {
        if (typeof zc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var o = lm(a);
          zc(t.stateNode, t.type, o);
        }
      }
    }
    function Ic(e) {
      zc = e;
    }
    function ku(e) {
      Tl ? Xt ? Xt.push(e) : Xt = [e] : Tl = e;
    }
    function Zv() {
      return Tl !== null || Xt !== null;
    }
    function Fc() {
      if (Tl) {
        var e = Tl, t = Xt;
        if (Tl = null, Xt = null, Pc(e), t)
          for (var a = 0; a < t.length; a++)
            Pc(t[a]);
      }
    }
    var Tu = function(e, t) {
      return e(t);
    }, xs = function() {
    }, Ii = !1;
    function eh() {
      var e = Zv();
      e && (xs(), Fc());
    }
    function th(e, t, a) {
      if (Ii)
        return e(t, a);
      Ii = !0;
      try {
        return Tu(e, t, a);
      } finally {
        Ii = !1, eh();
      }
    }
    function Wy(e, t, a) {
      Tu = e, xs = a;
    }
    function nh(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Vc(e, t, a) {
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
      if (Vc(t, e.type, o))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var ws = !1;
    if (kn)
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
    var $c = Hc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var zd = document.createElement("react");
      $c = function(t, a, o, l, s, v, y, _, T) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var N = document.createEvent("Event"), I = !1, z = !0, G = window.event, X = Object.getOwnPropertyDescriptor(window, "event");
        function ne() {
          zd.removeEventListener(re, st, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = G);
        }
        var Ie = Array.prototype.slice.call(arguments, 3);
        function st() {
          I = !0, ne(), a.apply(o, Ie), z = !1;
        }
        var nt, It = !1, Lt = !1;
        function B(q) {
          if (nt = q.error, It = !0, nt === null && q.colno === 0 && q.lineno === 0 && (Lt = !0), q.defaultPrevented && nt != null && typeof nt == "object")
            try {
              nt._suppressLogging = !0;
            } catch {
            }
        }
        var re = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", B), zd.addEventListener(re, st, !1), N.initEvent(re, !1, !1), zd.dispatchEvent(N), X && Object.defineProperty(window, "event", X), I && z && (It ? Lt && (nt = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : nt = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(nt)), window.removeEventListener("error", B), !I)
          return ne(), Hc.apply(this, arguments);
      };
    }
    var rh = $c, Nu = !1, Bc = null, Du = !1, Mo = null, ah = {
      onError: function(e) {
        Nu = !0, Bc = e;
      }
    };
    function Vi(e, t, a, o, l, s, v, y, _) {
      Nu = !1, Bc = null, rh.apply(ah, arguments);
    }
    function Oo(e, t, a, o, l, s, v, y, _) {
      if (Vi.apply(this, arguments), Nu) {
        var T = Rs();
        Du || (Du = !0, Mo = T);
      }
    }
    function bs() {
      if (Du) {
        var e = Mo;
        throw Du = !1, Mo = null, e;
      }
    }
    function ii() {
      return Nu;
    }
    function Rs() {
      if (Nu) {
        var e = Bc;
        return Nu = !1, Bc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Mu(e) {
      return e._reactInternals;
    }
    function Yy(e) {
      return e._reactInternals !== void 0;
    }
    function Dl(e, t) {
      e._reactInternals = t;
    }
    var ot = (
      /*                      */
      0
    ), po = (
      /*                */
      1
    ), xn = (
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
    ), Dr = (
      /*            */
      256
    ), Tn = (
      /*                          */
      512
    ), Zn = (
      /*                     */
      1024
    ), ra = (
      /*                      */
      2048
    ), aa = (
      /*                    */
      4096
    ), Vn = (
      /*                   */
      8192
    ), Ou = (
      /*             */
      16384
    ), oh = (
      /*               */
      32767
    ), ks = (
      /*                   */
      32768
    ), ir = (
      /*                */
      65536
    ), qc = (
      /* */
      131072
    ), Lo = (
      /*                       */
      1048576
    ), Lu = (
      /*                    */
      2097152
    ), li = (
      /*                 */
      4194304
    ), Wc = (
      /*                */
      8388608
    ), Hi = (
      /*               */
      16777216
    ), jo = (
      /*              */
      33554432
    ), $i = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ut | Zn | 0
    ), Bi = xn | Ut | Ia | Fa | Tn | aa | Vn, qi = Ut | pn | Tn | Vn, ui = ra | Ia, Hn = li | Wc | Lu, Va = d.ReactCurrentOwner;
    function Ea(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var o = t;
        do
          t = o, (t.flags & (xn | aa)) !== ot && (a = t.return), o = t.return;
        while (o);
      }
      return t.tag === A ? a : null;
    }
    function Ao(e) {
      if (e.tag === se) {
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
      return e.tag === A ? e.stateNode.containerInfo : null;
    }
    function Ml(e) {
      return Ea(e) === e;
    }
    function ih(e) {
      {
        var t = Va.current;
        if (t !== null && t.tag === b) {
          var a = t, o = a.stateNode;
          o._warnedAboutRefsInRender || h("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", gt(a) || "A component"), o._warnedAboutRefsInRender = !0;
        }
      }
      var l = Mu(e);
      return l ? Ea(l) === l : !1;
    }
    function Yc(e) {
      if (Ea(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Gc(e) {
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
              return Yc(s), e;
            if (_ === l)
              return Yc(s), t;
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
      if (o.tag !== A)
        throw new Error("Unable to find node on an unmounted component.");
      return o.stateNode.current === o ? e : t;
    }
    function oa(e) {
      var t = Gc(e);
      return t !== null ? ia(t) : null;
    }
    function ia(e) {
      if (e.tag === H || e.tag === ae)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = ia(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function gn(e) {
      var t = Gc(e);
      return t !== null ? Ha(t) : null;
    }
    function Ha(e) {
      if (e.tag === H || e.tag === ae)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== V) {
          var a = Ha(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Pd = p.unstable_scheduleCallback, lh = p.unstable_cancelCallback, Id = p.unstable_shouldYield, Fd = p.unstable_requestPaint, er = p.unstable_now, Qc = p.unstable_getCurrentPriorityLevel, Ts = p.unstable_ImmediatePriority, Wi = p.unstable_UserBlockingPriority, si = p.unstable_NormalPriority, Gy = p.unstable_LowPriority, Ol = p.unstable_IdlePriority, Kc = p.unstable_yieldValue, uh = p.unstable_setDisableYieldValue, Ll = null, Ln = null, Pe = null, xa = !1, la = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function ju(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return h("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        et && (e = bt({}, e, {
          getLaneLabelMap: jl,
          injectProfilingHooks: $a
        })), Ll = t.inject(e), Ln = t;
      } catch (a) {
        h("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Vd(e, t) {
      if (Ln && typeof Ln.onScheduleFiberRoot == "function")
        try {
          Ln.onScheduleFiberRoot(Ll, e, t);
        } catch (a) {
          xa || (xa = !0, h("React instrumentation encountered an error: %s", a));
        }
    }
    function Hd(e, t) {
      if (Ln && typeof Ln.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & rt) === rt;
          if (Ve) {
            var o;
            switch (t) {
              case Fr:
                o = Ts;
                break;
              case Po:
                o = Wi;
                break;
              case Ba:
                o = si;
                break;
              case qa:
                o = Ol;
                break;
              default:
                o = si;
                break;
            }
            Ln.onCommitFiberRoot(Ll, e, o, a);
          }
        } catch (l) {
          xa || (xa = !0, h("React instrumentation encountered an error: %s", l));
        }
    }
    function $d(e) {
      if (Ln && typeof Ln.onPostCommitFiberRoot == "function")
        try {
          Ln.onPostCommitFiberRoot(Ll, e);
        } catch (t) {
          xa || (xa = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function Bd(e) {
      if (Ln && typeof Ln.onCommitFiberUnmount == "function")
        try {
          Ln.onCommitFiberUnmount(Ll, e);
        } catch (t) {
          xa || (xa = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function wn(e) {
      if (typeof Kc == "function" && (uh(e), x(e)), Ln && typeof Ln.setStrictMode == "function")
        try {
          Ln.setStrictMode(Ll, e);
        } catch (t) {
          xa || (xa = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function $a(e) {
      Pe = e;
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
    function qd(e) {
      Pe !== null && typeof Pe.markCommitStarted == "function" && Pe.markCommitStarted(e);
    }
    function Wd() {
      Pe !== null && typeof Pe.markCommitStopped == "function" && Pe.markCommitStopped();
    }
    function wa(e) {
      Pe !== null && typeof Pe.markComponentRenderStarted == "function" && Pe.markComponentRenderStarted(e);
    }
    function ba() {
      Pe !== null && typeof Pe.markComponentRenderStopped == "function" && Pe.markComponentRenderStopped();
    }
    function Yd(e) {
      Pe !== null && typeof Pe.markComponentPassiveEffectMountStarted == "function" && Pe.markComponentPassiveEffectMountStarted(e);
    }
    function sh() {
      Pe !== null && typeof Pe.markComponentPassiveEffectMountStopped == "function" && Pe.markComponentPassiveEffectMountStopped();
    }
    function ci(e) {
      Pe !== null && typeof Pe.markComponentPassiveEffectUnmountStarted == "function" && Pe.markComponentPassiveEffectUnmountStarted(e);
    }
    function Yi() {
      Pe !== null && typeof Pe.markComponentPassiveEffectUnmountStopped == "function" && Pe.markComponentPassiveEffectUnmountStopped();
    }
    function Xc(e) {
      Pe !== null && typeof Pe.markComponentLayoutEffectMountStarted == "function" && Pe.markComponentLayoutEffectMountStarted(e);
    }
    function ch() {
      Pe !== null && typeof Pe.markComponentLayoutEffectMountStopped == "function" && Pe.markComponentLayoutEffectMountStopped();
    }
    function Ns(e) {
      Pe !== null && typeof Pe.markComponentLayoutEffectUnmountStarted == "function" && Pe.markComponentLayoutEffectUnmountStarted(e);
    }
    function Gd() {
      Pe !== null && typeof Pe.markComponentLayoutEffectUnmountStopped == "function" && Pe.markComponentLayoutEffectUnmountStopped();
    }
    function Ds(e, t, a) {
      Pe !== null && typeof Pe.markComponentErrored == "function" && Pe.markComponentErrored(e, t, a);
    }
    function zo(e, t, a) {
      Pe !== null && typeof Pe.markComponentSuspended == "function" && Pe.markComponentSuspended(e, t, a);
    }
    function Ms(e) {
      Pe !== null && typeof Pe.markLayoutEffectsStarted == "function" && Pe.markLayoutEffectsStarted(e);
    }
    function Os() {
      Pe !== null && typeof Pe.markLayoutEffectsStopped == "function" && Pe.markLayoutEffectsStopped();
    }
    function Al(e) {
      Pe !== null && typeof Pe.markPassiveEffectsStarted == "function" && Pe.markPassiveEffectsStarted(e);
    }
    function Qd() {
      Pe !== null && typeof Pe.markPassiveEffectsStopped == "function" && Pe.markPassiveEffectsStopped();
    }
    function Ul(e) {
      Pe !== null && typeof Pe.markRenderStarted == "function" && Pe.markRenderStarted(e);
    }
    function fh() {
      Pe !== null && typeof Pe.markRenderYielded == "function" && Pe.markRenderYielded();
    }
    function Jc() {
      Pe !== null && typeof Pe.markRenderStopped == "function" && Pe.markRenderStopped();
    }
    function bn(e) {
      Pe !== null && typeof Pe.markRenderScheduled == "function" && Pe.markRenderScheduled(e);
    }
    function Zc(e, t) {
      Pe !== null && typeof Pe.markForceUpdateScheduled == "function" && Pe.markForceUpdateScheduled(e, t);
    }
    function Ls(e, t) {
      Pe !== null && typeof Pe.markStateUpdateScheduled == "function" && Pe.markStateUpdateScheduled(e, t);
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
    ), $n = Math.clz32 ? Math.clz32 : js, lr = Math.log, ef = Math.LN2;
    function js(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (lr(t) / ef | 0) | 0;
    }
    var zl = 31, fe = (
      /*                        */
      0
    ), Ht = (
      /*                          */
      0
    ), ht = (
      /*                        */
      1
    ), Gi = (
      /*    */
      2
    ), vo = (
      /*             */
      4
    ), Mr = (
      /*            */
      8
    ), jn = (
      /*                     */
      16
    ), fi = (
      /*                */
      32
    ), Qi = (
      /*                       */
      4194240
    ), Pl = (
      /*                        */
      64
    ), tf = (
      /*                        */
      128
    ), nf = (
      /*                        */
      256
    ), rf = (
      /*                        */
      512
    ), af = (
      /*                        */
      1024
    ), of = (
      /*                        */
      2048
    ), lf = (
      /*                        */
      4096
    ), uf = (
      /*                        */
      8192
    ), sf = (
      /*                        */
      16384
    ), Il = (
      /*                       */
      32768
    ), cf = (
      /*                       */
      65536
    ), Au = (
      /*                       */
      131072
    ), Uu = (
      /*                       */
      262144
    ), ff = (
      /*                       */
      524288
    ), As = (
      /*                       */
      1048576
    ), df = (
      /*                       */
      2097152
    ), Us = (
      /*                            */
      130023424
    ), Fl = (
      /*                             */
      4194304
    ), pf = (
      /*                             */
      8388608
    ), zs = (
      /*                             */
      16777216
    ), vf = (
      /*                             */
      33554432
    ), hf = (
      /*                             */
      67108864
    ), Kd = Fl, Ps = (
      /*          */
      134217728
    ), Xd = (
      /*                          */
      268435455
    ), Is = (
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
        if (e & ht)
          return "Sync";
        if (e & Gi)
          return "InputContinuousHydration";
        if (e & vo)
          return "InputContinuous";
        if (e & Mr)
          return "DefaultHydration";
        if (e & jn)
          return "Default";
        if (e & fi)
          return "TransitionHydration";
        if (e & Qi)
          return "Transition";
        if (e & Us)
          return "Retry";
        if (e & Ps)
          return "SelectiveHydration";
        if (e & Is)
          return "IdleHydration";
        if (e & Vl)
          return "Idle";
        if (e & ua)
          return "Offscreen";
      }
    }
    var un = -1, Hl = Pl, mf = Fl;
    function Fs(e) {
      switch (Ki(e)) {
        case ht:
          return ht;
        case Gi:
          return Gi;
        case vo:
          return vo;
        case Mr:
          return Mr;
        case jn:
          return jn;
        case fi:
          return fi;
        case Pl:
        case tf:
        case nf:
        case rf:
        case af:
        case of:
        case lf:
        case uf:
        case sf:
        case Il:
        case cf:
        case Au:
        case Uu:
        case ff:
        case As:
        case df:
          return e & Qi;
        case Fl:
        case pf:
        case zs:
        case vf:
        case hf:
          return e & Us;
        case Ps:
          return Ps;
        case Is:
          return Is;
        case Vl:
          return Vl;
        case ua:
          return ua;
        default:
          return h("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function yf(e, t) {
      var a = e.pendingLanes;
      if (a === fe)
        return fe;
      var o = fe, l = e.suspendedLanes, s = e.pingedLanes, v = a & Xd;
      if (v !== fe) {
        var y = v & ~l;
        if (y !== fe)
          o = Fs(y);
        else {
          var _ = v & s;
          _ !== fe && (o = Fs(_));
        }
      } else {
        var T = a & ~l;
        T !== fe ? o = Fs(T) : s !== fe && (o = Fs(s));
      }
      if (o === fe)
        return fe;
      if (t !== fe && t !== o && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === fe) {
        var N = Ki(o), I = Ki(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          N >= I || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          N === jn && (I & Qi) !== fe
        )
          return t;
      }
      (o & vo) !== fe && (o |= a & jn);
      var z = e.entangledLanes;
      if (z !== fe)
        for (var G = e.entanglements, X = o & z; X > 0; ) {
          var ne = Bn(X), Ie = 1 << ne;
          o |= G[ne], X &= ~Ie;
        }
      return o;
    }
    function ho(e, t) {
      for (var a = e.eventTimes, o = un; t > 0; ) {
        var l = Bn(t), s = 1 << l, v = a[l];
        v > o && (o = v), t &= ~s;
      }
      return o;
    }
    function Jd(e, t) {
      switch (e) {
        case ht:
        case Gi:
        case vo:
          return t + 250;
        case Mr:
        case jn:
        case fi:
        case Pl:
        case tf:
        case nf:
        case rf:
        case af:
        case of:
        case lf:
        case uf:
        case sf:
        case Il:
        case cf:
        case Au:
        case Uu:
        case ff:
        case As:
        case df:
          return t + 5e3;
        case Fl:
        case pf:
        case zs:
        case vf:
        case hf:
          return un;
        case Ps:
        case Is:
        case Vl:
        case ua:
          return un;
        default:
          return h("Should have found matching lanes. This is a bug in React."), un;
      }
    }
    function gf(e, t) {
      for (var a = e.pendingLanes, o = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, v = a; v > 0; ) {
        var y = Bn(v), _ = 1 << y, T = s[y];
        T === un ? ((_ & o) === fe || (_ & l) !== fe) && (s[y] = Jd(_, t)) : T <= t && (e.expiredLanes |= _), v &= ~_;
      }
    }
    function ph(e) {
      return Fs(e.pendingLanes);
    }
    function _f(e) {
      var t = e.pendingLanes & ~ua;
      return t !== fe ? t : t & ua ? ua : fe;
    }
    function vh(e) {
      return (e & ht) !== fe;
    }
    function Vs(e) {
      return (e & Xd) !== fe;
    }
    function $l(e) {
      return (e & Us) === e;
    }
    function Zd(e) {
      var t = ht | vo | jn;
      return (e & t) === fe;
    }
    function ep(e) {
      return (e & Qi) === e;
    }
    function Sf(e, t) {
      var a = Gi | vo | Mr | jn;
      return (t & a) !== fe;
    }
    function hh(e, t) {
      return (t & e.expiredLanes) !== fe;
    }
    function tp(e) {
      return (e & Qi) !== fe;
    }
    function np() {
      var e = Hl;
      return Hl <<= 1, (Hl & Qi) === fe && (Hl = Pl), e;
    }
    function mh() {
      var e = mf;
      return mf <<= 1, (mf & Us) === fe && (mf = Fl), e;
    }
    function Ki(e) {
      return e & -e;
    }
    function Hs(e) {
      return Ki(e);
    }
    function Bn(e) {
      return 31 - $n(e);
    }
    function mr(e) {
      return Bn(e);
    }
    function sa(e, t) {
      return (e & t) !== fe;
    }
    function Bl(e, t) {
      return (e & t) === t;
    }
    function wt(e, t) {
      return e | t;
    }
    function $s(e, t) {
      return e & ~t;
    }
    function rp(e, t) {
      return e & t;
    }
    function yh(e) {
      return e;
    }
    function gh(e, t) {
      return e !== Ht && e < t ? e : t;
    }
    function Bs(e) {
      for (var t = [], a = 0; a < zl; a++)
        t.push(e);
      return t;
    }
    function zu(e, t, a) {
      e.pendingLanes |= t, t !== Vl && (e.suspendedLanes = fe, e.pingedLanes = fe);
      var o = e.eventTimes, l = mr(t);
      o[l] = a;
    }
    function _h(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, o = t; o > 0; ) {
        var l = Bn(o), s = 1 << l;
        a[l] = un, o &= ~s;
      }
    }
    function Cf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function ap(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = fe, e.pingedLanes = fe, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var o = e.entanglements, l = e.eventTimes, s = e.expirationTimes, v = a; v > 0; ) {
        var y = Bn(v), _ = 1 << y;
        o[y] = fe, l[y] = un, s[y] = un, v &= ~_;
      }
    }
    function Ef(e, t) {
      for (var a = e.entangledLanes |= t, o = e.entanglements, l = a; l; ) {
        var s = Bn(l), v = 1 << s;
        // Is this one of the newly entangled lanes?
        v & t | // Is this lane transitively entangled with the newly entangled lanes?
        o[s] & t && (o[s] |= t), l &= ~v;
      }
    }
    function op(e, t) {
      var a = Ki(t), o;
      switch (a) {
        case vo:
          o = Gi;
          break;
        case jn:
          o = Mr;
          break;
        case Pl:
        case tf:
        case nf:
        case rf:
        case af:
        case of:
        case lf:
        case uf:
        case sf:
        case Il:
        case cf:
        case Au:
        case Uu:
        case ff:
        case As:
        case df:
        case Fl:
        case pf:
        case zs:
        case vf:
        case hf:
          o = fi;
          break;
        case Vl:
          o = Is;
          break;
        default:
          o = Ht;
          break;
      }
      return (o & (e.suspendedLanes | t)) !== Ht ? Ht : o;
    }
    function qs(e, t, a) {
      if (la)
        for (var o = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = mr(a), s = 1 << l, v = o[l];
          v.add(t), a &= ~s;
        }
    }
    function Sh(e, t) {
      if (la)
        for (var a = e.pendingUpdatersLaneMap, o = e.memoizedUpdaters; t > 0; ) {
          var l = mr(t), s = 1 << l, v = a[l];
          v.size > 0 && (v.forEach(function(y) {
            var _ = y.alternate;
            (_ === null || !o.has(_)) && o.add(y);
          }), v.clear()), t &= ~s;
        }
    }
    function ip(e, t) {
      return null;
    }
    var Fr = ht, Po = vo, Ba = jn, qa = Vl, Ws = Ht;
    function Wa() {
      return Ws;
    }
    function qn(e) {
      Ws = e;
    }
    function Ch(e, t) {
      var a = Ws;
      try {
        return Ws = e, t();
      } finally {
        Ws = a;
      }
    }
    function Eh(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Ys(e, t) {
      return e > t ? e : t;
    }
    function ur(e, t) {
      return e !== 0 && e < t;
    }
    function xh(e) {
      var t = Ki(e);
      return ur(Fr, t) ? ur(Po, t) ? Vs(t) ? Ba : qa : Po : Fr;
    }
    function xf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Gs;
    function Or(e) {
      Gs = e;
    }
    function Qy(e) {
      Gs(e);
    }
    var qe;
    function Pu(e) {
      qe = e;
    }
    var wf;
    function wh(e) {
      wf = e;
    }
    var bh;
    function Qs(e) {
      bh = e;
    }
    var Ks;
    function lp(e) {
      Ks = e;
    }
    var bf = !1, Xs = [], di = null, Io = null, Fo = null, An = /* @__PURE__ */ new Map(), Vr = /* @__PURE__ */ new Map(), Hr = [], Rh = [
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
    function up(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          di = null;
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
          An.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var o = t.pointerId;
          Vr.delete(o);
          break;
        }
      }
    }
    function ca(e, t, a, o, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var v = mo(t, a, o, l, s);
        if (t !== null) {
          var y = Yu(t);
          y !== null && qe(y);
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
          return di = ca(di, e, t, a, o, s), !0;
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
          return An.set(T, ca(An.get(T) || null, e, t, a, o, _)), !0;
        }
        case "gotpointercapture": {
          var N = l, I = N.pointerId;
          return Vr.set(I, ca(Vr.get(I) || null, e, t, a, o, N)), !0;
        }
      }
      return !1;
    }
    function sp(e) {
      var t = sc(e.target);
      if (t !== null) {
        var a = Ea(t);
        if (a !== null) {
          var o = a.tag;
          if (o === se) {
            var l = Ao(a);
            if (l !== null) {
              e.blockedOn = l, Ks(e.priority, function() {
                wf(a);
              });
              return;
            }
          } else if (o === A) {
            var s = a.stateNode;
            if (xf(s)) {
              e.blockedOn = Uo(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Th(e) {
      for (var t = bh(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, o = 0; o < Hr.length && ur(t, Hr[o].priority); o++)
        ;
      Hr.splice(o, 0, a), o === 0 && sp(a);
    }
    function Js(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], o = Fu(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (o === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          By(s), l.target.dispatchEvent(s), qy();
        } else {
          var v = Yu(o);
          return v !== null && qe(v), e.blockedOn = o, !1;
        }
        t.shift();
      }
      return !0;
    }
    function cp(e, t, a) {
      Js(e) && a.delete(t);
    }
    function Xy() {
      bf = !1, di !== null && Js(di) && (di = null), Io !== null && Js(Io) && (Io = null), Fo !== null && Js(Fo) && (Fo = null), An.forEach(cp), Vr.forEach(cp);
    }
    function Xi(e, t) {
      e.blockedOn === t && (e.blockedOn = null, bf || (bf = !0, p.unstable_scheduleCallback(p.unstable_NormalPriority, Xy)));
    }
    function ql(e) {
      if (Xs.length > 0) {
        Xi(Xs[0], e);
        for (var t = 1; t < Xs.length; t++) {
          var a = Xs[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      di !== null && Xi(di, e), Io !== null && Xi(Io, e), Fo !== null && Xi(Fo, e);
      var o = function(y) {
        return Xi(y, e);
      };
      An.forEach(o), Vr.forEach(o);
      for (var l = 0; l < Hr.length; l++) {
        var s = Hr[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Hr.length > 0; ) {
        var v = Hr[0];
        if (v.blockedOn !== null)
          break;
        sp(v), v.blockedOn === null && Hr.shift();
      }
    }
    var yr = d.ReactCurrentBatchConfig, zt = !0;
    function tr(e) {
      zt = !!e;
    }
    function Wn() {
      return zt;
    }
    function gr(e, t, a) {
      var o = Rf(t), l;
      switch (o) {
        case Fr:
          l = Ra;
          break;
        case Po:
          l = Iu;
          break;
        case Ba:
        default:
          l = Un;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function Ra(e, t, a, o) {
      var l = Wa(), s = yr.transition;
      yr.transition = null;
      try {
        qn(Fr), Un(e, t, a, o);
      } finally {
        qn(l), yr.transition = s;
      }
    }
    function Iu(e, t, a, o) {
      var l = Wa(), s = yr.transition;
      yr.transition = null;
      try {
        qn(Po), Un(e, t, a, o);
      } finally {
        qn(l), yr.transition = s;
      }
    }
    function Un(e, t, a, o) {
      zt && Zs(e, t, a, o);
    }
    function Zs(e, t, a, o) {
      var l = Fu(e, t, a, o);
      if (l === null) {
        vg(e, t, o, Vo, a), up(e, o);
        return;
      }
      if (Ky(l, e, t, a, o)) {
        o.stopPropagation();
        return;
      }
      if (up(e, o), t & Pa && kh(e)) {
        for (; l !== null; ) {
          var s = Yu(l);
          s !== null && Qy(s);
          var v = Fu(e, t, a, o);
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
    function Fu(e, t, a, o) {
      Vo = null;
      var l = Ud(o), s = sc(l);
      if (s !== null) {
        var v = Ea(s);
        if (v === null)
          s = null;
        else {
          var y = v.tag;
          if (y === se) {
            var _ = Ao(v);
            if (_ !== null)
              return _;
            s = null;
          } else if (y === A) {
            var T = v.stateNode;
            if (xf(T))
              return Uo(v);
            s = null;
          } else v !== s && (s = null);
        }
      }
      return Vo = s, null;
    }
    function Rf(e) {
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
          return Fr;
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
          var t = Qc();
          switch (t) {
            case Ts:
              return Fr;
            case Wi:
              return Po;
            case si:
            case Gy:
              return Ba;
            case Ol:
              return qa;
            default:
              return Ba;
          }
        }
        default:
          return Ba;
      }
    }
    function ec(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function fa(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function fp(e, t, a, o) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }), a;
    }
    function Vu(e, t, a, o) {
      return e.addEventListener(t, a, {
        passive: o
      }), a;
    }
    var ka = null, Hu = null, Wl = null;
    function Ji(e) {
      return ka = e, Hu = tc(), !0;
    }
    function kf() {
      ka = null, Hu = null, Wl = null;
    }
    function pi() {
      if (Wl)
        return Wl;
      var e, t = Hu, a = t.length, o, l = tc(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var v = a - e;
      for (o = 1; o <= v && t[a - o] === l[s - o]; o++)
        ;
      var y = o > 1 ? 1 - o : void 0;
      return Wl = l.slice(e, y), Wl;
    }
    function tc() {
      return "value" in ka ? ka.value : ka.textContent;
    }
    function Zi(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function $u() {
      return !0;
    }
    function nc() {
      return !1;
    }
    function Lr(e) {
      function t(a, o, l, s, v) {
        this._reactName = a, this._targetInst = l, this.type = o, this.nativeEvent = s, this.target = v, this.currentTarget = null;
        for (var y in e)
          if (e.hasOwnProperty(y)) {
            var _ = e[y];
            _ ? this[y] = _(s) : this[y] = s[y];
          }
        var T = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return T ? this.isDefaultPrevented = $u : this.isDefaultPrevented = nc, this.isPropagationStopped = nc, this;
      }
      return bt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = $u);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = $u);
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
        isPersistent: $u
      }), t;
    }
    var Yn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ho = Lr(Yn), $r = bt({}, Yn, {
      view: 0,
      detail: 0
    }), da = Lr($r), Tf, rc, Yl;
    function Jy(e) {
      e !== Yl && (Yl && e.type === "mousemove" ? (Tf = e.screenX - Yl.screenX, rc = e.screenY - Yl.screenY) : (Tf = 0, rc = 0), Yl = e);
    }
    var yo = bt({}, $r, {
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
      getModifierState: _n,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Jy(e), Tf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : rc;
      }
    }), dp = Lr(yo), pp = bt({}, yo, {
      dataTransfer: 0
    }), Gl = Lr(pp), vp = bt({}, $r, {
      relatedTarget: 0
    }), vi = Lr(vp), Nh = bt({}, Yn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Dh = Lr(Nh), hp = bt({}, Yn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Nf = Lr(hp), Zy = bt({}, Yn, {
      data: 0
    }), Mh = Lr(Zy), Oh = Mh, Lh = {
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
    var Bu = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function jh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var o = Bu[e];
      return o ? !!a[o] : !1;
    }
    function _n(e) {
      return jh;
    }
    var tg = bt({}, $r, {
      key: eg,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: _n,
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
    }), Ah = Lr(tg), ng = bt({}, yo, {
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
    }), Uh = Lr(ng), zh = bt({}, $r, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: _n
    }), Ph = Lr(zh), rg = bt({}, Yn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ya = Lr(rg), mp = bt({}, yo, {
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
    }), ag = Lr(mp), el = [9, 13, 27, 32], ac = 229, hi = kn && "CompositionEvent" in window, tl = null;
    kn && "documentMode" in document && (tl = document.documentMode);
    var yp = kn && "TextEvent" in window && !tl, Df = kn && (!hi || tl && tl > 8 && tl <= 11), Ih = 32, Mf = String.fromCharCode(Ih);
    function og() {
      vt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), vt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), vt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), vt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var gp = !1;
    function Fh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Of(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Lf(e, t) {
      return e === "keydown" && t.keyCode === ac;
    }
    function _p(e, t) {
      switch (e) {
        case "keyup":
          return el.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== ac;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function jf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Vh(e) {
      return e.locale === "ko";
    }
    var Kl = !1;
    function Sp(e, t, a, o, l) {
      var s, v;
      if (hi ? s = Of(t) : Kl ? _p(t, o) && (s = "onCompositionEnd") : Lf(t, o) && (s = "onCompositionStart"), !s)
        return null;
      Df && !Vh(o) && (!Kl && s === "onCompositionStart" ? Kl = Ji(l) : s === "onCompositionEnd" && Kl && (v = pi()));
      var y = Gh(a, s);
      if (y.length > 0) {
        var _ = new Mh(s, t, null, o, l);
        if (e.push({
          event: _,
          listeners: y
        }), v)
          _.data = v;
        else {
          var T = jf(o);
          T !== null && (_.data = T);
        }
      }
    }
    function Af(e, t) {
      switch (e) {
        case "compositionend":
          return jf(t);
        case "keypress":
          var a = t.which;
          return a !== Ih ? null : (gp = !0, Mf);
        case "textInput":
          var o = t.data;
          return o === Mf && gp ? null : o;
        default:
          return null;
      }
    }
    function Cp(e, t) {
      if (Kl) {
        if (e === "compositionend" || !hi && _p(e, t)) {
          var a = pi();
          return kf(), Kl = !1, a;
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
          return Df && !Vh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Uf(e, t, a, o, l) {
      var s;
      if (yp ? s = Af(t, o) : s = Cp(t, o), !s)
        return null;
      var v = Gh(a, "onBeforeInput");
      if (v.length > 0) {
        var y = new Oh("onBeforeInput", "beforeinput", null, o, l);
        e.push({
          event: y,
          listeners: v
        }), y.data = s;
      }
    }
    function Hh(e, t, a, o, l, s, v) {
      Sp(e, t, a, o, l), Uf(e, t, a, o, l);
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
    function oc(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!ig[e.type] : t === "textarea";
    }
    function lg(e) {
      if (!kn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var o = document.createElement("div");
        o.setAttribute(t, "return;"), a = typeof o[t] == "function";
      }
      return a;
    }
    function ic() {
      vt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function $h(e, t, a, o) {
      ku(o);
      var l = Gh(t, "onChange");
      if (l.length > 0) {
        var s = new Ho("onChange", "change", null, a, o);
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
      $h(t, n, e, Ud(e)), th(u, t);
    }
    function u(e) {
      T_(e, 0);
    }
    function f(e) {
      var t = Hf(e);
      if (No(t))
        return e;
    }
    function m(e, t) {
      if (e === "change")
        return t;
    }
    var E = !1;
    kn && (E = lg("input") && (!document.documentMode || document.documentMode > 9));
    function M(e, t) {
      nl = e, n = t, nl.attachEvent("onpropertychange", K);
    }
    function U() {
      nl && (nl.detachEvent("onpropertychange", K), nl = null, n = null);
    }
    function K(e) {
      e.propertyName === "value" && f(n) && i(e);
    }
    function me(e, t, a) {
      e === "focusin" ? (U(), M(t, a)) : e === "focusout" && U();
    }
    function _e(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return f(n);
    }
    function pe(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function He(e, t) {
      if (e === "click")
        return f(t);
    }
    function Qe(e, t) {
      if (e === "input" || e === "change")
        return f(t);
    }
    function Ze(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ut(e, "number", e.value);
    }
    function zn(e, t, a, o, l, s, v) {
      var y = a ? Hf(a) : window, _, T;
      if (r(y) ? _ = m : oc(y) ? E ? _ = Qe : (_ = _e, T = me) : pe(y) && (_ = He), _) {
        var N = _(t, a);
        if (N) {
          $h(e, N, o, l);
          return;
        }
      }
      T && T(t, y, a), t === "focusout" && Ze(y);
    }
    function $() {
      Qt("onMouseEnter", ["mouseout", "mouseover"]), Qt("onMouseLeave", ["mouseout", "mouseover"]), Qt("onPointerEnter", ["pointerout", "pointerover"]), Qt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function P(e, t, a, o, l, s, v) {
      var y = t === "mouseover" || t === "pointerover", _ = t === "mouseout" || t === "pointerout";
      if (y && !Es(o)) {
        var T = o.relatedTarget || o.fromElement;
        if (T && (sc(T) || Ap(T)))
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
          if (z = a, G = X ? sc(X) : null, G !== null) {
            var ne = Ea(G);
            (G !== ne || G.tag !== H && G.tag !== ae) && (G = null);
          }
        } else
          z = null, G = a;
        if (z !== G) {
          var Ie = dp, st = "onMouseLeave", nt = "onMouseEnter", It = "mouse";
          (t === "pointerout" || t === "pointerover") && (Ie = Uh, st = "onPointerLeave", nt = "onPointerEnter", It = "pointer");
          var Lt = z == null ? N : Hf(z), B = G == null ? N : Hf(G), re = new Ie(st, It + "leave", z, o, l);
          re.target = Lt, re.relatedTarget = B;
          var q = null, Se = sc(l);
          if (Se === a) {
            var Be = new Ie(nt, It + "enter", G, o, l);
            Be.target = B, Be.relatedTarget = Lt, q = Be;
          }
          wx(e, re, q, z, G);
        }
      }
    }
    function W(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ye = typeof Object.is == "function" ? Object.is : W;
    function Ke(e, t) {
      if (ye(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), o = Object.keys(t);
      if (a.length !== o.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!fr.call(t, s) || !ye(e[s], t[s]))
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
        if (a.nodeType === ai) {
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
    function sr(e) {
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
        for (var z = null; N === t && (a === 0 || N.nodeType === ai) && (v = s + a), N === o && (l === 0 || N.nodeType === ai) && (y = s + l), N.nodeType === ai && (s += N.nodeValue.length), (z = N.firstChild) !== null; )
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
      return e && e.nodeType === ai;
    }
    function y_(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Bh(e) ? !1 : Bh(t) ? y_(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function ix(e) {
      return e && e.ownerDocument && y_(e.ownerDocument.documentElement, e);
    }
    function lx(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function g_() {
      for (var e = window, t = za(); t instanceof e.HTMLIFrameElement; ) {
        if (lx(t))
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
    function ux() {
      var e = g_();
      return {
        focusedElem: e,
        selectionRange: ug(e) ? cx(e) : null
      };
    }
    function sx(e) {
      var t = g_(), a = e.focusedElem, o = e.selectionRange;
      if (t !== a && ix(a)) {
        o !== null && ug(a) && fx(a, o);
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
    function cx(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = sr(e), t || {
        start: 0,
        end: 0
      };
    }
    function fx(e, t) {
      var a = t.start, o = t.end;
      o === void 0 && (o = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(o, e.value.length)) : rl(e, t);
    }
    var dx = kn && "documentMode" in document && document.documentMode <= 11;
    function px() {
      vt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var zf = null, sg = null, Ep = null, cg = !1;
    function vx(e) {
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
    function hx(e) {
      return e.window === e ? e.document : e.nodeType === oi ? e : e.ownerDocument;
    }
    function __(e, t, a) {
      var o = hx(a);
      if (!(cg || zf == null || zf !== za(o))) {
        var l = vx(zf);
        if (!Ep || !Ke(Ep, l)) {
          Ep = l;
          var s = Gh(sg, "onSelect");
          if (s.length > 0) {
            var v = new Ho("onSelect", "select", null, t, a);
            e.push({
              event: v,
              listeners: s
            }), v.target = zf;
          }
        }
      }
    }
    function mx(e, t, a, o, l, s, v) {
      var y = a ? Hf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (oc(y) || y.contentEditable === "true") && (zf = y, sg = a, Ep = null);
          break;
        case "focusout":
          zf = null, sg = null, Ep = null;
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
          if (dx)
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
    var Pf = {
      animationend: qh("Animation", "AnimationEnd"),
      animationiteration: qh("Animation", "AnimationIteration"),
      animationstart: qh("Animation", "AnimationStart"),
      transitionend: qh("Transition", "TransitionEnd")
    }, fg = {}, S_ = {};
    kn && (S_ = document.createElement("div").style, "AnimationEvent" in window || (delete Pf.animationend.animation, delete Pf.animationiteration.animation, delete Pf.animationstart.animation), "TransitionEvent" in window || delete Pf.transitionend.transition);
    function Wh(e) {
      if (fg[e])
        return fg[e];
      if (!Pf[e])
        return e;
      var t = Pf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in S_)
          return fg[e] = t[a];
      return e;
    }
    var C_ = Wh("animationend"), E_ = Wh("animationiteration"), x_ = Wh("animationstart"), w_ = Wh("transitionend"), b_ = /* @__PURE__ */ new Map(), R_ = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function qu(e, t) {
      b_.set(e, t), vt(t, [e]);
    }
    function yx() {
      for (var e = 0; e < R_.length; e++) {
        var t = R_[e], a = t.toLowerCase(), o = t[0].toUpperCase() + t.slice(1);
        qu(a, "on" + o);
      }
      qu(C_, "onAnimationEnd"), qu(E_, "onAnimationIteration"), qu(x_, "onAnimationStart"), qu("dblclick", "onDoubleClick"), qu("focusin", "onFocus"), qu("focusout", "onBlur"), qu(w_, "onTransitionEnd");
    }
    function gx(e, t, a, o, l, s, v) {
      var y = b_.get(t);
      if (y !== void 0) {
        var _ = Ho, T = t;
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
            T = "focus", _ = vi;
            break;
          case "focusout":
            T = "blur", _ = vi;
            break;
          case "beforeblur":
          case "afterblur":
            _ = vi;
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
            _ = dp;
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
            _ = Dh;
            break;
          case w_:
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
            _ = Nf;
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
          t === "scroll", z = Ex(a, y, o.type, N, I);
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
    yx(), $(), ic(), px(), og();
    function _x(e, t, a, o, l, s, v) {
      gx(e, t, a, o, l, s);
      var y = (s & Ad) === 0;
      y && (P(e, t, a, o, l), zn(e, t, a, o, l), mx(e, t, a, o, l), Hh(e, t, a, o, l));
    }
    var xp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], dg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(xp));
    function k_(e, t, a) {
      var o = e.type || "unknown-event";
      e.currentTarget = a, Oo(o, t, void 0, e), e.currentTarget = null;
    }
    function Sx(e, t, a) {
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
        Sx(s, v, a);
      }
      bs();
    }
    function Cx(e, t, a, o, l) {
      var s = Ud(a), v = [];
      _x(v, e, o, a, s, t), T_(v, t);
    }
    function Rn(e, t) {
      dg.has(e) || h('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, o = Xw(t), l = bx(e);
      o.has(l) || (N_(t, e, Uc, a), o.add(l));
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
        var t = e.nodeType === oi ? e : e.ownerDocument;
        t !== null && (t[Yh] || (t[Yh] = !0, pg("selectionchange", !1, t)));
      }
    }
    function N_(e, t, a, o, l) {
      var s = gr(e, t, a), v = void 0;
      ws && (t === "touchstart" || t === "touchmove" || t === "wheel") && (v = !0), e = e, o ? v !== void 0 ? fp(e, t, s, v) : fa(e, t, s) : v !== void 0 ? Vu(e, t, s, v) : ec(e, t, s);
    }
    function D_(e, t) {
      return e === t || e.nodeType === Fn && e.parentNode === t;
    }
    function vg(e, t, a, o, l) {
      var s = o;
      if ((t & jd) === 0 && (t & Uc) === 0) {
        var v = l;
        if (o !== null) {
          var y = o;
          e: for (; ; ) {
            if (y === null)
              return;
            var _ = y.tag;
            if (_ === A || _ === V) {
              var T = y.stateNode.containerInfo;
              if (D_(T, v))
                break;
              if (_ === V)
                for (var N = y.return; N !== null; ) {
                  var I = N.tag;
                  if (I === A || I === V) {
                    var z = N.stateNode.containerInfo;
                    if (D_(z, v))
                      return;
                  }
                  N = N.return;
                }
              for (; T !== null; ) {
                var G = sc(T);
                if (G === null)
                  return;
                var X = G.tag;
                if (X === H || X === ae) {
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
        return Cx(e, t, a, s);
      });
    }
    function bp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Ex(e, t, a, o, l, s) {
      for (var v = t !== null ? t + "Capture" : null, y = o ? v : t, _ = [], T = e, N = null; T !== null; ) {
        var I = T, z = I.stateNode, G = I.tag;
        if (G === H && z !== null && (N = z, y !== null)) {
          var X = Fi(T, y);
          X != null && _.push(bp(T, X, N));
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
        if (y === H && v !== null) {
          var _ = v, T = Fi(l, a);
          T != null && o.unshift(bp(l, T, _));
          var N = Fi(l, t);
          N != null && o.push(bp(l, N, _));
        }
        l = l.return;
      }
      return o;
    }
    function If(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== H);
      return e || null;
    }
    function xx(e, t) {
      for (var a = e, o = t, l = 0, s = a; s; s = If(s))
        l++;
      for (var v = 0, y = o; y; y = If(y))
        v++;
      for (; l - v > 0; )
        a = If(a), l--;
      for (; v - l > 0; )
        o = If(o), v--;
      for (var _ = l; _--; ) {
        if (a === o || o !== null && a === o.alternate)
          return a;
        a = If(a), o = If(o);
      }
      return null;
    }
    function M_(e, t, a, o, l) {
      for (var s = t._reactName, v = [], y = a; y !== null && y !== o; ) {
        var _ = y, T = _.alternate, N = _.stateNode, I = _.tag;
        if (T !== null && T === o)
          break;
        if (I === H && N !== null) {
          var z = N;
          if (l) {
            var G = Fi(y, s);
            G != null && v.unshift(bp(y, G, z));
          } else if (!l) {
            var X = Fi(y, s);
            X != null && v.push(bp(y, X, z));
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
      var s = o && l ? xx(o, l) : null;
      o !== null && M_(e, t, o, s, !1), l !== null && a !== null && M_(e, a, l, s, !0);
    }
    function bx(e, t) {
      return e + "__bubble";
    }
    var Ga = !1, Rp = "dangerouslySetInnerHTML", Qh = "suppressContentEditableWarning", Wu = "suppressHydrationWarning", O_ = "autoFocus", lc = "children", uc = "style", Kh = "__html", hg, Xh, kp, L_, Jh, j_, A_;
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
      Md(e, t), jc(e, t), Jv(e, t, {
        registrationNameDependencies: ze,
        possibleRegistrationNames: lt
      });
    }, j_ = kn && !document.documentMode, kp = function(e, t, a) {
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
      var a = e.namespaceURI === ri ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var Rx = /\r\n?/g, kx = /\u0000|\uFFFD/g;
    function Zh(e) {
      ar(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(Rx, `
`).replace(kx, "");
    }
    function em(e, t, a, o) {
      var l = Zh(t), s = Zh(e);
      if (s !== l && (o && (Ga || (Ga = !0, h('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && he))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function U_(e) {
      return e.nodeType === oi ? e : e.ownerDocument;
    }
    function Tx() {
    }
    function tm(e) {
      e.onclick = Tx;
    }
    function Nx(e, t, a, o, l) {
      for (var s in o)
        if (o.hasOwnProperty(s)) {
          var v = o[s];
          if (s === uc)
            v && Object.freeze(v), Wv(t, v);
          else if (s === Rp) {
            var y = v ? v[Kh] : void 0;
            y != null && jv(t, y);
          } else if (s === lc)
            if (typeof v == "string") {
              var _ = e !== "textarea" || v !== "";
              _ && xu(t, v);
            } else typeof v == "number" && xu(t, "" + v);
          else s === Qh || s === Wu || s === O_ || (ze.hasOwnProperty(s) ? v != null && (typeof v != "function" && Jh(s, v), s === "onScroll" && Rn("scroll", t)) : v != null && Ar(t, s, v, l));
        }
    }
    function Dx(e, t, a, o) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], v = t[l + 1];
        s === uc ? Wv(e, v) : s === Rp ? jv(e, v) : s === lc ? xu(e, v) : Ar(e, s, v, o);
      }
    }
    function Mx(e, t, a, o) {
      var l, s = U_(a), v, y = o;
      if (y === ri && (y = wd(e)), y === ri) {
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
      return y === ri && !l && Object.prototype.toString.call(v) === "[object HTMLUnknownElement]" && !fr.call(hg, e) && (hg[e] = !0, h("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), v;
    }
    function Ox(e, t) {
      return U_(t).createTextNode(e);
    }
    function Lx(e, t, a, o) {
      var l = Pi(t, a);
      Xh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Rn("cancel", e), Rn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Rn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var v = 0; v < xp.length; v++)
            Rn(xp[v], e);
          s = a;
          break;
        case "source":
          Rn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Rn("error", e), Rn("load", e), s = a;
          break;
        case "details":
          Rn("toggle", e), s = a;
          break;
        case "input":
          co(e, a), s = Eu(e, a), Rn("invalid", e);
          break;
        case "option":
          Vt(e, a), s = a;
          break;
        case "select":
          wl(e, a), s = hs(e, a), Rn("invalid", e);
          break;
        case "textarea":
          Cd(e, a), s = Sd(e, a), Rn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Oc(t, s), Nx(t, e, o, s, l), t) {
        case "input":
          so(e), Q(e, a, !1);
          break;
        case "textarea":
          so(e), Ov(e);
          break;
        case "option":
          dn(e, a);
          break;
        case "select":
          gd(e, a);
          break;
        default:
          typeof s.onClick == "function" && tm(e);
          break;
      }
    }
    function jx(e, t, a, o, l) {
      Xh(t, o);
      var s = null, v, y;
      switch (t) {
        case "input":
          v = Eu(e, a), y = Eu(e, o), s = [];
          break;
        case "select":
          v = hs(e, a), y = hs(e, o), s = [];
          break;
        case "textarea":
          v = Sd(e, a), y = Sd(e, o), s = [];
          break;
        default:
          v = a, y = o, typeof v.onClick != "function" && typeof y.onClick == "function" && tm(e);
          break;
      }
      Oc(t, y);
      var _, T, N = null;
      for (_ in v)
        if (!(y.hasOwnProperty(_) || !v.hasOwnProperty(_) || v[_] == null))
          if (_ === uc) {
            var I = v[_];
            for (T in I)
              I.hasOwnProperty(T) && (N || (N = {}), N[T] = "");
          } else _ === Rp || _ === lc || _ === Qh || _ === Wu || _ === O_ || (ze.hasOwnProperty(_) ? s || (s = []) : (s = s || []).push(_, null));
      for (_ in y) {
        var z = y[_], G = v?.[_];
        if (!(!y.hasOwnProperty(_) || z === G || z == null && G == null))
          if (_ === uc)
            if (z && Object.freeze(z), G) {
              for (T in G)
                G.hasOwnProperty(T) && (!z || !z.hasOwnProperty(T)) && (N || (N = {}), N[T] = "");
              for (T in z)
                z.hasOwnProperty(T) && G[T] !== z[T] && (N || (N = {}), N[T] = z[T]);
            } else
              N || (s || (s = []), s.push(_, N)), N = z;
          else if (_ === Rp) {
            var X = z ? z[Kh] : void 0, ne = G ? G[Kh] : void 0;
            X != null && ne !== X && (s = s || []).push(_, X);
          } else _ === lc ? (typeof z == "string" || typeof z == "number") && (s = s || []).push(_, "" + z) : _ === Qh || _ === Wu || (ze.hasOwnProperty(_) ? (z != null && (typeof z != "function" && Jh(_, z), _ === "onScroll" && Rn("scroll", e)), !s && G !== z && (s = [])) : (s = s || []).push(_, z));
      }
      return N && (Hy(N, y[uc]), (s = s || []).push(uc, N)), s;
    }
    function Ax(e, t, a, o, l) {
      a === "input" && l.type === "radio" && l.name != null && S(e, l);
      var s = Pi(a, o), v = Pi(a, l);
      switch (Dx(e, t, s, v), a) {
        case "input":
          O(e, l);
          break;
        case "textarea":
          Mv(e, l);
          break;
        case "select":
          Nc(e, l);
          break;
      }
    }
    function Ux(e) {
      {
        var t = e.toLowerCase();
        return Ss.hasOwnProperty(t) && Ss[t] || null;
      }
    }
    function zx(e, t, a, o, l, s, v) {
      var y, _;
      switch (y = Pi(t, a), Xh(t, a), t) {
        case "dialog":
          Rn("cancel", e), Rn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Rn("load", e);
          break;
        case "video":
        case "audio":
          for (var T = 0; T < xp.length; T++)
            Rn(xp[T], e);
          break;
        case "source":
          Rn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Rn("error", e), Rn("load", e);
          break;
        case "details":
          Rn("toggle", e);
          break;
        case "input":
          co(e, a), Rn("invalid", e);
          break;
        case "option":
          Vt(e, a);
          break;
        case "select":
          wl(e, a), Rn("invalid", e);
          break;
        case "textarea":
          Cd(e, a), Rn("invalid", e);
          break;
      }
      Oc(t, a);
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
          var ne = a[X];
          if (X === lc)
            typeof ne == "string" ? e.textContent !== ne && (a[Wu] !== !0 && em(e.textContent, ne, s, v), G = [lc, ne]) : typeof ne == "number" && e.textContent !== "" + ne && (a[Wu] !== !0 && em(e.textContent, ne, s, v), G = [lc, "" + ne]);
          else if (ze.hasOwnProperty(X))
            ne != null && (typeof ne != "function" && Jh(X, ne), X === "onScroll" && Rn("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof y == "boolean") {
            var Ie = void 0, st = cn(X);
            if (a[Wu] !== !0) {
              if (!(X === Qh || X === Wu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              X === "value" || X === "checked" || X === "selected")) {
                if (X === Rp) {
                  var nt = e.innerHTML, It = ne ? ne[Kh] : void 0;
                  if (It != null) {
                    var Lt = A_(e, It);
                    Lt !== nt && kp(X, nt, Lt);
                  }
                } else if (X === uc) {
                  if (_.delete(X), j_) {
                    var B = Fy(ne);
                    Ie = e.getAttribute("style"), B !== Ie && kp(X, Ie, B);
                  }
                } else if (y && !F)
                  _.delete(X.toLowerCase()), Ie = yl(e, X, ne), ne !== Ie && kp(X, Ie, ne);
                else if (!Cn(X, st, y) && !or(X, ne, st, y)) {
                  var re = !1;
                  if (st !== null)
                    _.delete(st.attributeName), Ie = Ni(e, X, ne, st);
                  else {
                    var q = o;
                    if (q === ri && (q = wd(t)), q === ri)
                      _.delete(X.toLowerCase());
                    else {
                      var Se = Ux(X);
                      Se !== null && Se !== X && (re = !0, _.delete(Se)), _.delete(X);
                    }
                    Ie = yl(e, X, ne);
                  }
                  var Be = F;
                  !Be && ne !== Ie && !re && kp(X, Ie, ne);
                }
              }
            }
          }
        }
      switch (v && // $FlowFixMe - Should be inferred as not undefined.
      _.size > 0 && a[Wu] !== !0 && L_(_), t) {
        case "input":
          so(e), Q(e, a, !0);
          break;
        case "textarea":
          so(e), Ov(e);
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
    function Px(e, t, a) {
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
    function Ix(e, t, a) {
      switch (t) {
        case "input":
          J(e, a);
          return;
        case "textarea":
          Uy(e, a);
          return;
        case "select":
          _d(e, a);
          return;
      }
    }
    var Tp = function() {
    }, Np = function() {
    };
    {
      var Fx = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], z_ = [
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
      ], Vx = z_.concat(["button"]), Hx = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], P_ = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Np = function(e, t) {
        var a = bt({}, e || P_), o = {
          tag: t
        };
        return z_.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Vx.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Fx.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = o, t === "form" && (a.formTag = o), t === "a" && (a.aTagInScope = o), t === "button" && (a.buttonTagInScope = o), t === "nobr" && (a.nobrTagInScope = o), t === "p" && (a.pTagInButtonScope = o), t === "li" && (a.listItemTagAutoclosing = o), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = o), a;
      };
      var $x = function(e, t) {
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
      }, Bx = function(e, t) {
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
      Tp = function(e, t, a) {
        a = a || P_;
        var o = a.current, l = o && o.tag;
        t != null && (e != null && h("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = $x(e, l) ? null : o, v = s ? null : Bx(e, a), y = s || v;
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
    var nm = "suppressHydrationWarning", rm = "$", am = "/$", Dp = "$?", Mp = "$!", qx = "style", Sg = null, Cg = null;
    function Wx(e) {
      var t, a, o = e.nodeType;
      switch (o) {
        case oi:
        case Rd: {
          t = o === oi ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : bd(null, "");
          break;
        }
        default: {
          var s = o === Fn ? e.parentNode : e, v = s.namespaceURI || null;
          t = s.tagName, a = bd(v, t);
          break;
        }
      }
      {
        var y = t.toLowerCase(), _ = Np(null, y);
        return {
          namespace: a,
          ancestorInfo: _
        };
      }
    }
    function Yx(e, t, a) {
      {
        var o = e, l = bd(o.namespace, t), s = Np(o.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function r7(e) {
      return e;
    }
    function Gx(e) {
      Sg = Wn(), Cg = ux();
      var t = null;
      return tr(!1), t;
    }
    function Qx(e) {
      sx(Cg), tr(Sg), Sg = null, Cg = null;
    }
    function Kx(e, t, a, o, l) {
      var s;
      {
        var v = o;
        if (Tp(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var y = "" + t.children, _ = Np(v.ancestorInfo, e);
          Tp(null, y, _);
        }
        s = v.namespace;
      }
      var T = Mx(e, t, a, s);
      return jp(l, T), Ng(T, t), T;
    }
    function Xx(e, t) {
      e.appendChild(t);
    }
    function Jx(e, t, a, o, l) {
      switch (Lx(e, t, a, o), t) {
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
    function Zx(e, t, a, o, l, s) {
      {
        var v = s;
        if (typeof o.children != typeof a.children && (typeof o.children == "string" || typeof o.children == "number")) {
          var y = "" + o.children, _ = Np(v.ancestorInfo, t);
          Tp(null, y, _);
        }
      }
      return jx(e, t, a, o);
    }
    function Eg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function ew(e, t, a, o) {
      {
        var l = a;
        Tp(null, e, l.ancestorInfo);
      }
      var s = Ox(e, t);
      return jp(o, s), s;
    }
    function tw() {
      var e = window.event;
      return e === void 0 ? Ba : Rf(e.type);
    }
    var xg = typeof setTimeout == "function" ? setTimeout : void 0, nw = typeof clearTimeout == "function" ? clearTimeout : void 0, wg = -1, F_ = typeof Promise == "function" ? Promise : void 0, rw = typeof queueMicrotask == "function" ? queueMicrotask : typeof F_ < "u" ? function(e) {
      return F_.resolve(null).then(e).catch(aw);
    } : xg;
    function aw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function ow(e, t, a, o) {
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
    function iw(e, t, a, o, l, s) {
      Ax(e, t, a, o, l), Ng(e, l);
    }
    function V_(e) {
      xu(e, "");
    }
    function lw(e, t, a) {
      e.nodeValue = a;
    }
    function uw(e, t) {
      e.appendChild(t);
    }
    function sw(e, t) {
      var a;
      e.nodeType === Fn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var o = e._reactRootContainer;
      o == null && a.onclick === null && tm(a);
    }
    function cw(e, t, a) {
      e.insertBefore(t, a);
    }
    function fw(e, t, a) {
      e.nodeType === Fn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function dw(e, t) {
      e.removeChild(t);
    }
    function pw(e, t) {
      e.nodeType === Fn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function bg(e, t) {
      var a = t, o = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === Fn) {
          var s = l.data;
          if (s === am)
            if (o === 0) {
              e.removeChild(l), ql(t);
              return;
            } else
              o--;
          else (s === rm || s === Dp || s === Mp) && o++;
        }
        a = l;
      } while (a);
      ql(t);
    }
    function vw(e, t) {
      e.nodeType === Fn ? bg(e.parentNode, t) : e.nodeType === na && bg(e, t), ql(e);
    }
    function hw(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function mw(e) {
      e.nodeValue = "";
    }
    function yw(e, t) {
      e = e;
      var a = t[qx], o = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Mc("display", o);
    }
    function gw(e, t) {
      e.nodeValue = t;
    }
    function _w(e) {
      e.nodeType === na ? e.textContent = "" : e.nodeType === oi && e.documentElement && e.removeChild(e.documentElement);
    }
    function Sw(e, t, a) {
      return e.nodeType !== na || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Cw(e, t) {
      return t === "" || e.nodeType !== ai ? null : e;
    }
    function Ew(e) {
      return e.nodeType !== Fn ? null : e;
    }
    function H_(e) {
      return e.data === Dp;
    }
    function Rg(e) {
      return e.data === Mp;
    }
    function xw(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, o, l;
      return t && (a = t.dgst, o = t.msg, l = t.stck), {
        message: o,
        digest: a,
        stack: l
      };
    }
    function ww(e, t) {
      e._reactRetry = t;
    }
    function om(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === na || t === ai)
          break;
        if (t === Fn) {
          var a = e.data;
          if (a === rm || a === Mp || a === Dp)
            break;
          if (a === am)
            return null;
        }
      }
      return e;
    }
    function Op(e) {
      return om(e.nextSibling);
    }
    function bw(e) {
      return om(e.firstChild);
    }
    function Rw(e) {
      return om(e.firstChild);
    }
    function kw(e) {
      return om(e.nextSibling);
    }
    function Tw(e, t, a, o, l, s, v) {
      jp(s, e), Ng(e, a);
      var y;
      {
        var _ = l;
        y = _.namespace;
      }
      var T = (s.mode & Nt) !== it;
      return zx(e, t, a, y, o, T, v);
    }
    function Nw(e, t, a, o) {
      return jp(a, e), a.mode & Nt, Px(e, t);
    }
    function Dw(e, t) {
      jp(t, e);
    }
    function Mw(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Fn) {
          var o = t.data;
          if (o === am) {
            if (a === 0)
              return Op(t);
            a--;
          } else (o === rm || o === Mp || o === Dp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function $_(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Fn) {
          var o = t.data;
          if (o === rm || o === Mp || o === Dp) {
            if (a === 0)
              return t;
            a--;
          } else o === am && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Ow(e) {
      ql(e);
    }
    function Lw(e) {
      ql(e);
    }
    function jw(e) {
      return e !== "head" && e !== "body";
    }
    function Aw(e, t, a, o) {
      var l = !0;
      em(t.nodeValue, a, o, l);
    }
    function Uw(e, t, a, o, l, s) {
      if (t[nm] !== !0) {
        var v = !0;
        em(o.nodeValue, l, s, v);
      }
    }
    function zw(e, t) {
      t.nodeType === na ? mg(e, t) : t.nodeType === Fn || yg(e, t);
    }
    function Pw(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === na ? mg(a, t) : t.nodeType === Fn || yg(a, t));
      }
    }
    function Iw(e, t, a, o, l) {
      (l || t[nm] !== !0) && (o.nodeType === na ? mg(a, o) : o.nodeType === Fn || yg(a, o));
    }
    function Fw(e, t, a) {
      gg(e, t);
    }
    function Vw(e, t) {
      _g(e, t);
    }
    function Hw(e, t, a) {
      {
        var o = e.parentNode;
        o !== null && gg(o, t);
      }
    }
    function $w(e, t) {
      {
        var a = e.parentNode;
        a !== null && _g(a, t);
      }
    }
    function Bw(e, t, a, o, l, s) {
      (s || t[nm] !== !0) && gg(a, o);
    }
    function qw(e, t, a, o, l) {
      (l || t[nm] !== !0) && _g(a, o);
    }
    function Ww(e) {
      h("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Yw(e) {
      wp(e);
    }
    var Ff = Math.random().toString(36).slice(2), Vf = "__reactFiber$" + Ff, kg = "__reactProps$" + Ff, Lp = "__reactContainer$" + Ff, Tg = "__reactEvents$" + Ff, Gw = "__reactListeners$" + Ff, Qw = "__reactHandles$" + Ff;
    function Kw(e) {
      delete e[Vf], delete e[kg], delete e[Tg], delete e[Gw], delete e[Qw];
    }
    function jp(e, t) {
      t[Vf] = e;
    }
    function im(e, t) {
      t[Lp] = e;
    }
    function B_(e) {
      e[Lp] = null;
    }
    function Ap(e) {
      return !!e[Lp];
    }
    function sc(e) {
      var t = e[Vf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Lp] || a[Vf], t) {
          var o = t.alternate;
          if (t.child !== null || o !== null && o.child !== null)
            for (var l = $_(e); l !== null; ) {
              var s = l[Vf];
              if (s)
                return s;
              l = $_(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Yu(e) {
      var t = e[Vf] || e[Lp];
      return t && (t.tag === H || t.tag === ae || t.tag === se || t.tag === A) ? t : null;
    }
    function Hf(e) {
      if (e.tag === H || e.tag === ae)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function lm(e) {
      return e[kg] || null;
    }
    function Ng(e, t) {
      e[kg] = t;
    }
    function Xw(e) {
      var t = e[Tg];
      return t === void 0 && (t = e[Tg] = /* @__PURE__ */ new Set()), t;
    }
    var q_ = {}, W_ = d.ReactDebugCurrentFrame;
    function um(e) {
      if (e) {
        var t = e._owner, a = ei(e.type, e._source, t ? t.type : null);
        W_.setExtraStackFrame(a);
      } else
        W_.setExtraStackFrame(null);
    }
    function mi(e, t, a, o, l) {
      {
        var s = Function.call.bind(fr);
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
    var Dg = [], sm;
    sm = [];
    var Xl = -1;
    function Gu(e) {
      return {
        current: e
      };
    }
    function pa(e, t) {
      if (Xl < 0) {
        h("Unexpected pop.");
        return;
      }
      t !== sm[Xl] && h("Unexpected Fiber popped."), e.current = Dg[Xl], Dg[Xl] = null, sm[Xl] = null, Xl--;
    }
    function va(e, t, a) {
      Xl++, Dg[Xl] = e.current, sm[Xl] = a, e.current = t;
    }
    var Mg;
    Mg = {};
    var go = {};
    Object.freeze(go);
    var Jl = Gu(go), al = Gu(!1), Og = go;
    function $f(e, t, a) {
      return a && ol(t) ? Og : Jl.current;
    }
    function Y_(e, t, a) {
      {
        var o = e.stateNode;
        o.__reactInternalMemoizedUnmaskedChildContext = t, o.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Bf(e, t) {
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
          mi(o, s, "context", y);
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
            Mg[s] || (Mg[s] = !0, h("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var v = o.getChildContext();
        for (var y in v)
          if (!(y in l))
            throw new Error((gt(e) || "Unknown") + '.getChildContext(): key "' + y + '" is not defined in childContextTypes.');
        {
          var _ = gt(e) || "Unknown";
          mi(l, v, "child context", _);
        }
        return bt({}, a, v);
      }
    }
    function dm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || go;
        return Og = Jl.current, va(Jl, a, e), va(al, al.current, e), !0;
      }
    }
    function K_(e, t, a) {
      {
        var o = e.stateNode;
        if (!o)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = Q_(e, t, Og);
          o.__reactInternalMemoizedMergedChildContext = l, pa(al, e), pa(Jl, e), va(Jl, l, e), va(al, a, e);
        } else
          pa(al, e), va(al, a, e);
      }
    }
    function Jw(e) {
      {
        if (!Ml(e) || e.tag !== b)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case A:
              return t.stateNode.context;
            case b: {
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
    var Qu = 0, pm = 1, Zl = null, jg = !1, Ag = !1;
    function X_(e) {
      Zl === null ? Zl = [e] : Zl.push(e);
    }
    function Zw(e) {
      jg = !0, X_(e);
    }
    function J_() {
      jg && Ku();
    }
    function Ku() {
      if (!Ag && Zl !== null) {
        Ag = !0;
        var e = 0, t = Wa();
        try {
          var a = !0, o = Zl;
          for (qn(Fr); e < o.length; e++) {
            var l = o[e];
            do
              l = l(a);
            while (l !== null);
          }
          Zl = null, jg = !1;
        } catch (s) {
          throw Zl !== null && (Zl = Zl.slice(e + 1)), Pd(Ts, Ku), s;
        } finally {
          qn(t), Ag = !1;
        }
      }
      return null;
    }
    var qf = [], Wf = 0, vm = null, hm = 0, $o = [], Bo = 0, cc = null, eu = 1, tu = "";
    function eb(e) {
      return dc(), (e.flags & Lo) !== ot;
    }
    function tb(e) {
      return dc(), hm;
    }
    function nb() {
      var e = tu, t = eu, a = t & ~rb(t);
      return a.toString(32) + e;
    }
    function fc(e, t) {
      dc(), qf[Wf++] = hm, qf[Wf++] = vm, vm = e, hm = t;
    }
    function Z_(e, t, a) {
      dc(), $o[Bo++] = eu, $o[Bo++] = tu, $o[Bo++] = cc, cc = e;
      var o = eu, l = tu, s = mm(o) - 1, v = o & ~(1 << s), y = a + 1, _ = mm(t) + s;
      if (_ > 30) {
        var T = s - s % 5, N = (1 << T) - 1, I = (v & N).toString(32), z = v >> T, G = s - T, X = mm(t) + G, ne = y << G, Ie = ne | z, st = I + l;
        eu = 1 << X | Ie, tu = st;
      } else {
        var nt = y << s, It = nt | v, Lt = l;
        eu = 1 << _ | It, tu = Lt;
      }
    }
    function Ug(e) {
      dc();
      var t = e.return;
      if (t !== null) {
        var a = 1, o = 0;
        fc(e, a), Z_(e, a, o);
      }
    }
    function mm(e) {
      return 32 - $n(e);
    }
    function rb(e) {
      return 1 << mm(e) - 1;
    }
    function zg(e) {
      for (; e === vm; )
        vm = qf[--Wf], qf[Wf] = null, hm = qf[--Wf], qf[Wf] = null;
      for (; e === cc; )
        cc = $o[--Bo], $o[Bo] = null, tu = $o[--Bo], $o[Bo] = null, eu = $o[--Bo], $o[Bo] = null;
    }
    function ab() {
      return dc(), cc !== null ? {
        id: eu,
        overflow: tu
      } : null;
    }
    function ob(e, t) {
      dc(), $o[Bo++] = eu, $o[Bo++] = tu, $o[Bo++] = cc, eu = t.id, tu = t.overflow, cc = e;
    }
    function dc() {
      qr() || h("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Br = null, qo = null, yi = !1, pc = !1, Xu = null;
    function ib() {
      yi && h("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function e2() {
      pc = !0;
    }
    function lb() {
      return pc;
    }
    function ub(e) {
      var t = e.stateNode.containerInfo;
      return qo = Rw(t), Br = e, yi = !0, Xu = null, pc = !1, !0;
    }
    function sb(e, t, a) {
      return qo = kw(t), Br = e, yi = !0, Xu = null, pc = !1, a !== null && ob(e, a), !0;
    }
    function t2(e, t) {
      switch (e.tag) {
        case A: {
          zw(e.stateNode.containerInfo, t);
          break;
        }
        case H: {
          var a = (e.mode & Nt) !== it;
          Iw(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case se: {
          var o = e.memoizedState;
          o.dehydrated !== null && Pw(o.dehydrated, t);
          break;
        }
      }
    }
    function n2(e, t) {
      t2(e, t);
      var a = pT();
      a.stateNode = t, a.return = e;
      var o = e.deletions;
      o === null ? (e.deletions = [a], e.flags |= Ia) : o.push(a);
    }
    function Pg(e, t) {
      {
        if (pc)
          return;
        switch (e.tag) {
          case A: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case H:
                var o = t.type;
                t.pendingProps, Fw(a, o);
                break;
              case ae:
                var l = t.pendingProps;
                Vw(a, l);
                break;
            }
            break;
          }
          case H: {
            var s = e.type, v = e.memoizedProps, y = e.stateNode;
            switch (t.tag) {
              case H: {
                var _ = t.type, T = t.pendingProps, N = (e.mode & Nt) !== it;
                Bw(
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
              case ae: {
                var I = t.pendingProps, z = (e.mode & Nt) !== it;
                qw(
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
          case se: {
            var G = e.memoizedState, X = G.dehydrated;
            if (X !== null) switch (t.tag) {
              case H:
                var ne = t.type;
                t.pendingProps, Hw(X, ne);
                break;
              case ae:
                var Ie = t.pendingProps;
                $w(X, Ie);
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
      t.flags = t.flags & ~aa | xn, Pg(e, t);
    }
    function a2(e, t) {
      switch (e.tag) {
        case H: {
          var a = e.type;
          e.pendingProps;
          var o = Sw(t, a);
          return o !== null ? (e.stateNode = o, Br = e, qo = bw(o), !0) : !1;
        }
        case ae: {
          var l = e.pendingProps, s = Cw(t, l);
          return s !== null ? (e.stateNode = s, Br = e, qo = null, !0) : !1;
        }
        case se: {
          var v = Ew(t);
          if (v !== null) {
            var y = {
              dehydrated: v,
              treeContext: ab(),
              retryLane: ua
            };
            e.memoizedState = y;
            var _ = vT(v);
            return _.return = e, e.child = _, Br = e, qo = null, !0;
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
      if (yi) {
        var t = qo;
        if (!t) {
          Ig(e) && (Pg(Br, e), Fg()), r2(Br, e), yi = !1, Br = e;
          return;
        }
        var a = t;
        if (!a2(e, t)) {
          Ig(e) && (Pg(Br, e), Fg()), t = Op(a);
          var o = Br;
          if (!t || !a2(e, t)) {
            r2(Br, e), yi = !1, Br = e;
            return;
          }
          n2(o, a);
        }
      }
    }
    function cb(e, t, a) {
      var o = e.stateNode, l = !pc, s = Tw(o, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function fb(e) {
      var t = e.stateNode, a = e.memoizedProps, o = Nw(t, a, e);
      if (o) {
        var l = Br;
        if (l !== null)
          switch (l.tag) {
            case A: {
              var s = l.stateNode.containerInfo, v = (l.mode & Nt) !== it;
              Aw(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case H: {
              var y = l.type, _ = l.memoizedProps, T = l.stateNode, N = (l.mode & Nt) !== it;
              Uw(
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
    function db(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Dw(a, e);
    }
    function pb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Mw(a);
    }
    function o2(e) {
      for (var t = e.return; t !== null && t.tag !== H && t.tag !== A && t.tag !== se; )
        t = t.return;
      Br = t;
    }
    function ym(e) {
      if (e !== Br)
        return !1;
      if (!yi)
        return o2(e), yi = !0, !1;
      if (e.tag !== A && (e.tag !== H || jw(e.type) && !Eg(e.type, e.memoizedProps))) {
        var t = qo;
        if (t)
          if (Ig(e))
            i2(e), Fg();
          else
            for (; t; )
              n2(e, t), t = Op(t);
      }
      return o2(e), e.tag === se ? qo = pb(e) : qo = Br ? Op(e.stateNode) : null, !0;
    }
    function vb() {
      return yi && qo !== null;
    }
    function i2(e) {
      for (var t = qo; t; )
        t2(e, t), t = Op(t);
    }
    function Yf() {
      Br = null, qo = null, yi = !1, pc = !1;
    }
    function l2() {
      Xu !== null && (eC(Xu), Xu = null);
    }
    function qr() {
      return yi;
    }
    function Hg(e) {
      Xu === null ? Xu = [e] : Xu.push(e);
    }
    var hb = d.ReactCurrentBatchConfig, mb = null;
    function yb() {
      return hb.transition;
    }
    var gi = {
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
      var gb = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & an && (t = a), a = a.return;
        return t;
      }, vc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Up = [], zp = [], Pp = [], Ip = [], Fp = [], Vp = [], hc = /* @__PURE__ */ new Set();
      gi.recordUnsafeLifecycleWarnings = function(e, t) {
        hc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Up.push(e), e.mode & an && typeof t.UNSAFE_componentWillMount == "function" && zp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Pp.push(e), e.mode & an && typeof t.UNSAFE_componentWillReceiveProps == "function" && Ip.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Fp.push(e), e.mode & an && typeof t.UNSAFE_componentWillUpdate == "function" && Vp.push(e));
      }, gi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Up.length > 0 && (Up.forEach(function(z) {
          e.add(gt(z) || "Component"), hc.add(z.type);
        }), Up = []);
        var t = /* @__PURE__ */ new Set();
        zp.length > 0 && (zp.forEach(function(z) {
          t.add(gt(z) || "Component"), hc.add(z.type);
        }), zp = []);
        var a = /* @__PURE__ */ new Set();
        Pp.length > 0 && (Pp.forEach(function(z) {
          a.add(gt(z) || "Component"), hc.add(z.type);
        }), Pp = []);
        var o = /* @__PURE__ */ new Set();
        Ip.length > 0 && (Ip.forEach(function(z) {
          o.add(gt(z) || "Component"), hc.add(z.type);
        }), Ip = []);
        var l = /* @__PURE__ */ new Set();
        Fp.length > 0 && (Fp.forEach(function(z) {
          l.add(gt(z) || "Component"), hc.add(z.type);
        }), Fp = []);
        var s = /* @__PURE__ */ new Set();
        if (Vp.length > 0 && (Vp.forEach(function(z) {
          s.add(gt(z) || "Component"), hc.add(z.type);
        }), Vp = []), t.size > 0) {
          var v = vc(t);
          h(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, v);
        }
        if (o.size > 0) {
          var y = vc(o);
          h(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, y);
        }
        if (s.size > 0) {
          var _ = vc(s);
          h(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, _);
        }
        if (e.size > 0) {
          var T = vc(e);
          C(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (a.size > 0) {
          var N = vc(a);
          C(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, N);
        }
        if (l.size > 0) {
          var I = vc(l);
          C(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, I);
        }
      };
      var gm = /* @__PURE__ */ new Map(), u2 = /* @__PURE__ */ new Set();
      gi.recordLegacyContextWarning = function(e, t) {
        var a = gb(e);
        if (a === null) {
          h("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!u2.has(e.type)) {
          var o = gm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (o === void 0 && (o = [], gm.set(a, o)), o.push(e));
        }
      }, gi.flushLegacyContextWarning = function() {
        gm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], o = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              o.add(gt(s) || "Component"), u2.add(s.type);
            });
            var l = vc(o);
            try {
              tn(a), h(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              mn();
            }
          }
        });
      }, gi.discardPendingWarnings = function() {
        Up = [], zp = [], Pp = [], Ip = [], Fp = [], Vp = [], gm = /* @__PURE__ */ new Map();
      };
    }
    var $g, Bg, qg, Wg, Yg, s2 = function(e, t) {
    };
    $g = !1, Bg = !1, qg = {}, Wg = {}, Yg = {}, s2 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = gt(t) || "Component";
        Wg[a] || (Wg[a] = !0, h('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function _b(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Hp(e, t, a) {
      var o = a.ref;
      if (o !== null && typeof o != "function" && typeof o != "object") {
        if ((e.mode & an || Z) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== b) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !_b(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var l = gt(e) || "Component";
          qg[l] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, o), qg[l] = !0);
        }
        if (a._owner) {
          var s = a._owner, v;
          if (s) {
            var y = s;
            if (y.tag !== b)
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
      function t(B, re) {
        if (e) {
          var q = B.deletions;
          q === null ? (B.deletions = [re], B.flags |= Ia) : q.push(re);
        }
      }
      function a(B, re) {
        if (!e)
          return null;
        for (var q = re; q !== null; )
          t(B, q), q = q.sibling;
        return null;
      }
      function o(B, re) {
        for (var q = /* @__PURE__ */ new Map(), Se = re; Se !== null; )
          Se.key !== null ? q.set(Se.key, Se) : q.set(Se.index, Se), Se = Se.sibling;
        return q;
      }
      function l(B, re) {
        var q = wc(B, re);
        return q.index = 0, q.sibling = null, q;
      }
      function s(B, re, q) {
        if (B.index = q, !e)
          return B.flags |= Lo, re;
        var Se = B.alternate;
        if (Se !== null) {
          var Be = Se.index;
          return Be < re ? (B.flags |= xn, re) : Be;
        } else
          return B.flags |= xn, re;
      }
      function v(B) {
        return e && B.alternate === null && (B.flags |= xn), B;
      }
      function y(B, re, q, Se) {
        if (re === null || re.tag !== ae) {
          var Be = H1(q, B.mode, Se);
          return Be.return = B, Be;
        } else {
          var Fe = l(re, q);
          return Fe.return = B, Fe;
        }
      }
      function _(B, re, q, Se) {
        var Be = q.type;
        if (Be === xo)
          return N(B, re, q.props.children, Se, q.key);
        if (re !== null && (re.elementType === Be || // Keep this check inline so it only runs on the false path:
        mC(re, q) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Be == "object" && Be !== null && Be.$$typeof === _t && c2(Be) === re.type)) {
          var Fe = l(re, q.props);
          return Fe.ref = Hp(B, re, q), Fe.return = B, Fe._debugSource = q._source, Fe._debugOwner = q._owner, Fe;
        }
        var mt = V1(q, B.mode, Se);
        return mt.ref = Hp(B, re, q), mt.return = B, mt;
      }
      function T(B, re, q, Se) {
        if (re === null || re.tag !== V || re.stateNode.containerInfo !== q.containerInfo || re.stateNode.implementation !== q.implementation) {
          var Be = $1(q, B.mode, Se);
          return Be.return = B, Be;
        } else {
          var Fe = l(re, q.children || []);
          return Fe.return = B, Fe;
        }
      }
      function N(B, re, q, Se, Be) {
        if (re === null || re.tag !== ie) {
          var Fe = us(q, B.mode, Se, Be);
          return Fe.return = B, Fe;
        } else {
          var mt = l(re, q);
          return mt.return = B, mt;
        }
      }
      function I(B, re, q) {
        if (typeof re == "string" && re !== "" || typeof re == "number") {
          var Se = H1("" + re, B.mode, q);
          return Se.return = B, Se;
        }
        if (typeof re == "object" && re !== null) {
          switch (re.$$typeof) {
            case Ur: {
              var Be = V1(re, B.mode, q);
              return Be.ref = Hp(B, null, re), Be.return = B, Be;
            }
            case dr: {
              var Fe = $1(re, B.mode, q);
              return Fe.return = B, Fe;
            }
            case _t: {
              var mt = re._payload, Ct = re._init;
              return I(B, Ct(mt), q);
            }
          }
          if (kt(re) || xt(re)) {
            var ln = us(re, B.mode, q, null);
            return ln.return = B, ln;
          }
          _m(B, re);
        }
        return typeof re == "function" && Sm(B), null;
      }
      function z(B, re, q, Se) {
        var Be = re !== null ? re.key : null;
        if (typeof q == "string" && q !== "" || typeof q == "number")
          return Be !== null ? null : y(B, re, "" + q, Se);
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case Ur:
              return q.key === Be ? _(B, re, q, Se) : null;
            case dr:
              return q.key === Be ? T(B, re, q, Se) : null;
            case _t: {
              var Fe = q._payload, mt = q._init;
              return z(B, re, mt(Fe), Se);
            }
          }
          if (kt(q) || xt(q))
            return Be !== null ? null : N(B, re, q, Se, null);
          _m(B, q);
        }
        return typeof q == "function" && Sm(B), null;
      }
      function G(B, re, q, Se, Be) {
        if (typeof Se == "string" && Se !== "" || typeof Se == "number") {
          var Fe = B.get(q) || null;
          return y(re, Fe, "" + Se, Be);
        }
        if (typeof Se == "object" && Se !== null) {
          switch (Se.$$typeof) {
            case Ur: {
              var mt = B.get(Se.key === null ? q : Se.key) || null;
              return _(re, mt, Se, Be);
            }
            case dr: {
              var Ct = B.get(Se.key === null ? q : Se.key) || null;
              return T(re, Ct, Se, Be);
            }
            case _t:
              var ln = Se._payload, Yt = Se._init;
              return G(B, re, q, Yt(ln), Be);
          }
          if (kt(Se) || xt(Se)) {
            var nr = B.get(q) || null;
            return N(re, nr, Se, Be, null);
          }
          _m(re, Se);
        }
        return typeof Se == "function" && Sm(re), null;
      }
      function X(B, re, q) {
        {
          if (typeof B != "object" || B === null)
            return re;
          switch (B.$$typeof) {
            case Ur:
            case dr:
              s2(B, q);
              var Se = B.key;
              if (typeof Se != "string")
                break;
              if (re === null) {
                re = /* @__PURE__ */ new Set(), re.add(Se);
                break;
              }
              if (!re.has(Se)) {
                re.add(Se);
                break;
              }
              h("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Se);
              break;
            case _t:
              var Be = B._payload, Fe = B._init;
              X(Fe(Be), re, q);
              break;
          }
        }
        return re;
      }
      function ne(B, re, q, Se) {
        for (var Be = null, Fe = 0; Fe < q.length; Fe++) {
          var mt = q[Fe];
          Be = X(mt, Be, B);
        }
        for (var Ct = null, ln = null, Yt = re, nr = 0, Gt = 0, Gn = null; Yt !== null && Gt < q.length; Gt++) {
          Yt.index > Gt ? (Gn = Yt, Yt = null) : Gn = Yt.sibling;
          var ma = z(B, Yt, q[Gt], Se);
          if (ma === null) {
            Yt === null && (Yt = Gn);
            break;
          }
          e && Yt && ma.alternate === null && t(B, Yt), nr = s(ma, nr, Gt), ln === null ? Ct = ma : ln.sibling = ma, ln = ma, Yt = Gn;
        }
        if (Gt === q.length) {
          if (a(B, Yt), qr()) {
            var Jr = Gt;
            fc(B, Jr);
          }
          return Ct;
        }
        if (Yt === null) {
          for (; Gt < q.length; Gt++) {
            var So = I(B, q[Gt], Se);
            So !== null && (nr = s(So, nr, Gt), ln === null ? Ct = So : ln.sibling = So, ln = So);
          }
          if (qr()) {
            var Ma = Gt;
            fc(B, Ma);
          }
          return Ct;
        }
        for (var Oa = o(B, Yt); Gt < q.length; Gt++) {
          var ya = G(Oa, B, Gt, q[Gt], Se);
          ya !== null && (e && ya.alternate !== null && Oa.delete(ya.key === null ? Gt : ya.key), nr = s(ya, nr, Gt), ln === null ? Ct = ya : ln.sibling = ya, ln = ya);
        }
        if (e && Oa.forEach(function(dd) {
          return t(B, dd);
        }), qr()) {
          var uu = Gt;
          fc(B, uu);
        }
        return Ct;
      }
      function Ie(B, re, q, Se) {
        var Be = xt(q);
        if (typeof Be != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          q[Symbol.toStringTag] === "Generator" && (Bg || h("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Bg = !0), q.entries === Be && ($g || h("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), $g = !0);
          var Fe = Be.call(q);
          if (Fe)
            for (var mt = null, Ct = Fe.next(); !Ct.done; Ct = Fe.next()) {
              var ln = Ct.value;
              mt = X(ln, mt, B);
            }
        }
        var Yt = Be.call(q);
        if (Yt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var nr = null, Gt = null, Gn = re, ma = 0, Jr = 0, So = null, Ma = Yt.next(); Gn !== null && !Ma.done; Jr++, Ma = Yt.next()) {
          Gn.index > Jr ? (So = Gn, Gn = null) : So = Gn.sibling;
          var Oa = z(B, Gn, Ma.value, Se);
          if (Oa === null) {
            Gn === null && (Gn = So);
            break;
          }
          e && Gn && Oa.alternate === null && t(B, Gn), ma = s(Oa, ma, Jr), Gt === null ? nr = Oa : Gt.sibling = Oa, Gt = Oa, Gn = So;
        }
        if (Ma.done) {
          if (a(B, Gn), qr()) {
            var ya = Jr;
            fc(B, ya);
          }
          return nr;
        }
        if (Gn === null) {
          for (; !Ma.done; Jr++, Ma = Yt.next()) {
            var uu = I(B, Ma.value, Se);
            uu !== null && (ma = s(uu, ma, Jr), Gt === null ? nr = uu : Gt.sibling = uu, Gt = uu);
          }
          if (qr()) {
            var dd = Jr;
            fc(B, dd);
          }
          return nr;
        }
        for (var Sv = o(B, Gn); !Ma.done; Jr++, Ma = Yt.next()) {
          var pl = G(Sv, B, Jr, Ma.value, Se);
          pl !== null && (e && pl.alternate !== null && Sv.delete(pl.key === null ? Jr : pl.key), ma = s(pl, ma, Jr), Gt === null ? nr = pl : Gt.sibling = pl, Gt = pl);
        }
        if (e && Sv.forEach(function(qT) {
          return t(B, qT);
        }), qr()) {
          var BT = Jr;
          fc(B, BT);
        }
        return nr;
      }
      function st(B, re, q, Se) {
        if (re !== null && re.tag === ae) {
          a(B, re.sibling);
          var Be = l(re, q);
          return Be.return = B, Be;
        }
        a(B, re);
        var Fe = H1(q, B.mode, Se);
        return Fe.return = B, Fe;
      }
      function nt(B, re, q, Se) {
        for (var Be = q.key, Fe = re; Fe !== null; ) {
          if (Fe.key === Be) {
            var mt = q.type;
            if (mt === xo) {
              if (Fe.tag === ie) {
                a(B, Fe.sibling);
                var Ct = l(Fe, q.props.children);
                return Ct.return = B, Ct._debugSource = q._source, Ct._debugOwner = q._owner, Ct;
              }
            } else if (Fe.elementType === mt || // Keep this check inline so it only runs on the false path:
            mC(Fe, q) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof mt == "object" && mt !== null && mt.$$typeof === _t && c2(mt) === Fe.type) {
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
          var Yt = us(q.props.children, B.mode, Se, q.key);
          return Yt.return = B, Yt;
        } else {
          var nr = V1(q, B.mode, Se);
          return nr.ref = Hp(B, re, q), nr.return = B, nr;
        }
      }
      function It(B, re, q, Se) {
        for (var Be = q.key, Fe = re; Fe !== null; ) {
          if (Fe.key === Be)
            if (Fe.tag === V && Fe.stateNode.containerInfo === q.containerInfo && Fe.stateNode.implementation === q.implementation) {
              a(B, Fe.sibling);
              var mt = l(Fe, q.children || []);
              return mt.return = B, mt;
            } else {
              a(B, Fe);
              break;
            }
          else
            t(B, Fe);
          Fe = Fe.sibling;
        }
        var Ct = $1(q, B.mode, Se);
        return Ct.return = B, Ct;
      }
      function Lt(B, re, q, Se) {
        var Be = typeof q == "object" && q !== null && q.type === xo && q.key === null;
        if (Be && (q = q.props.children), typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case Ur:
              return v(nt(B, re, q, Se));
            case dr:
              return v(It(B, re, q, Se));
            case _t:
              var Fe = q._payload, mt = q._init;
              return Lt(B, re, mt(Fe), Se);
          }
          if (kt(q))
            return ne(B, re, q, Se);
          if (xt(q))
            return Ie(B, re, q, Se);
          _m(B, q);
        }
        return typeof q == "string" && q !== "" || typeof q == "number" ? v(st(B, re, "" + q, Se)) : (typeof q == "function" && Sm(B), a(B, re));
      }
      return Lt;
    }
    var Gf = f2(!0), d2 = f2(!1);
    function Sb(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, o = wc(a, a.pendingProps);
        for (t.child = o, o.return = t; a.sibling !== null; )
          a = a.sibling, o = o.sibling = wc(a, a.pendingProps), o.return = t;
        o.sibling = null;
      }
    }
    function Cb(e, t) {
      for (var a = e.child; a !== null; )
        uT(a, t), a = a.sibling;
    }
    var Gg = Gu(null), Qg;
    Qg = {};
    var Cm = null, Qf = null, Kg = null, Em = !1;
    function xm() {
      Cm = null, Qf = null, Kg = null, Em = !1;
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
        if (Bl(o.childLanes, t) ? l !== null && !Bl(l.childLanes, t) && (l.childLanes = wt(l.childLanes, t)) : (o.childLanes = wt(o.childLanes, t), l !== null && (l.childLanes = wt(l.childLanes, t))), o === a)
          break;
        o = o.return;
      }
      o !== a && h("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Eb(e, t, a) {
      xb(e, t, a);
    }
    function xb(e, t, a) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var l = void 0, s = o.dependencies;
        if (s !== null) {
          l = o.child;
          for (var v = s.firstContext; v !== null; ) {
            if (v.context === t) {
              if (o.tag === b) {
                var y = Hs(a), _ = nu(un, y);
                _.tag = bm;
                var T = o.updateQueue;
                if (T !== null) {
                  var N = T.shared, I = N.pending;
                  I === null ? _.next = _ : (_.next = I.next, I.next = _), N.pending = _;
                }
              }
              o.lanes = wt(o.lanes, a);
              var z = o.alternate;
              z !== null && (z.lanes = wt(z.lanes, a)), Jg(o.return, a, e), s.lanes = wt(s.lanes, a);
              break;
            }
            v = v.next;
          }
        } else if (o.tag === Ee)
          l = o.type === e.type ? null : o.child;
        else if (o.tag === Je) {
          var G = o.return;
          if (G === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          G.lanes = wt(G.lanes, a);
          var X = G.alternate;
          X !== null && (X.lanes = wt(X.lanes, a)), Jg(G, a, e), l = o.sibling;
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
            var ne = l.sibling;
            if (ne !== null) {
              ne.return = l.return, l = ne;
              break;
            }
            l = l.return;
          }
        o = l;
      }
    }
    function Kf(e, t) {
      Cm = e, Qf = null, Kg = null;
      var a = e.dependencies;
      if (a !== null) {
        var o = a.firstContext;
        o !== null && (sa(a.lanes, t) && rv(), a.firstContext = null);
      }
    }
    function cr(e) {
      Em && h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Kg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Qf === null) {
          if (Cm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Qf = a, Cm.dependencies = {
            lanes: fe,
            firstContext: a
          };
        } else
          Qf = Qf.next = a;
      }
      return t;
    }
    var mc = null;
    function Zg(e) {
      mc === null ? mc = [e] : mc.push(e);
    }
    function wb() {
      if (mc !== null) {
        for (var e = 0; e < mc.length; e++) {
          var t = mc[e], a = t.interleaved;
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
        mc = null;
      }
    }
    function m2(e, t, a, o) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Zg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, wm(e, o);
    }
    function bb(e, t, a, o) {
      var l = t.interleaved;
      l === null ? (a.next = a, Zg(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function Rb(e, t, a, o) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Zg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, wm(e, o);
    }
    function Qa(e, t) {
      return wm(e, t);
    }
    var kb = wm;
    function wm(e, t) {
      e.lanes = wt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = wt(a.lanes, t)), a === null && (e.flags & (xn | aa)) !== ot && dC(e);
      for (var o = e, l = e.return; l !== null; )
        l.childLanes = wt(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = wt(a.childLanes, t) : (l.flags & (xn | aa)) !== ot && dC(e), o = l, l = l.return;
      if (o.tag === A) {
        var s = o.stateNode;
        return s;
      } else
        return null;
    }
    var y2 = 0, g2 = 1, bm = 2, e0 = 3, Rm = !1, t0, km;
    t0 = !1, km = null;
    function n0(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: fe
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
    function Ju(e, t, a) {
      var o = e.updateQueue;
      if (o === null)
        return null;
      var l = o.shared;
      if (km === l && !t0 && (h("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), t0 = !0), bk()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, kb(e, a);
      } else
        return Rb(e, l, t, a);
    }
    function Tm(e, t, a) {
      var o = t.updateQueue;
      if (o !== null) {
        var l = o.shared;
        if (tp(a)) {
          var s = l.lanes;
          s = rp(s, e.pendingLanes);
          var v = wt(s, a);
          l.lanes = v, Ef(e, v);
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
    function Tb(e, t, a, o, l, s) {
      switch (a.tag) {
        case g2: {
          var v = a.payload;
          if (typeof v == "function") {
            p2();
            var y = v.call(s, o, l);
            {
              if (e.mode & an) {
                wn(!0);
                try {
                  v.call(s, o, l);
                } finally {
                  wn(!1);
                }
              }
              v2();
            }
            return y;
          }
          return v;
        }
        case e0:
          e.flags = e.flags & ~ir | rt;
        // Intentional fallthrough
        case y2: {
          var _ = a.payload, T;
          if (typeof _ == "function") {
            p2(), T = _.call(s, o, l);
            {
              if (e.mode & an) {
                wn(!0);
                try {
                  _.call(s, o, l);
                } finally {
                  wn(!1);
                }
              }
              v2();
            }
          } else
            T = _;
          return T == null ? o : bt({}, o, T);
        }
        case bm:
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
        var G = l.baseState, X = fe, ne = null, Ie = null, st = null, nt = s;
        do {
          var It = nt.lane, Lt = nt.eventTime;
          if (Bl(o, It)) {
            if (st !== null) {
              var re = {
                eventTime: Lt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ht,
                tag: nt.tag,
                payload: nt.payload,
                callback: nt.callback,
                next: null
              };
              st = st.next = re;
            }
            G = Tb(e, l, nt, G, t, a);
            var q = nt.callback;
            if (q !== null && // If the update was already committed, we should not queue its
            // callback again.
            nt.lane !== Ht) {
              e.flags |= pn;
              var Se = l.effects;
              Se === null ? l.effects = [nt] : Se.push(nt);
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
            st === null ? (Ie = st = B, ne = G) : st = st.next = B, X = wt(X, It);
          }
          if (nt = nt.next, nt === null) {
            if (y = l.shared.pending, y === null)
              break;
            var Be = y, Fe = Be.next;
            Be.next = null, nt = Fe, l.lastBaseUpdate = Be, l.shared.pending = null;
          }
        } while (!0);
        st === null && (ne = G), l.baseState = ne, l.firstBaseUpdate = Ie, l.lastBaseUpdate = st;
        var mt = l.shared.interleaved;
        if (mt !== null) {
          var Ct = mt;
          do
            X = wt(X, Ct.lane), Ct = Ct.next;
          while (Ct !== mt);
        } else s === null && (l.shared.lanes = fe);
        hv(X), e.lanes = X, e.memoizedState = G;
      }
      km = null;
    }
    function Nb(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function S2() {
      Rm = !1;
    }
    function Dm() {
      return Rm;
    }
    function C2(e, t, a) {
      var o = t.effects;
      if (t.effects = null, o !== null)
        for (var l = 0; l < o.length; l++) {
          var s = o[l], v = s.callback;
          v !== null && (s.callback = null, Nb(v, a));
        }
    }
    var $p = {}, Zu = Gu($p), Bp = Gu($p), Mm = Gu($p);
    function Om(e) {
      if (e === $p)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function E2() {
      var e = Om(Mm.current);
      return e;
    }
    function a0(e, t) {
      va(Mm, t, e), va(Bp, e, e), va(Zu, $p, e);
      var a = Wx(t);
      pa(Zu, e), va(Zu, a, e);
    }
    function Xf(e) {
      pa(Zu, e), pa(Bp, e), pa(Mm, e);
    }
    function o0() {
      var e = Om(Zu.current);
      return e;
    }
    function x2(e) {
      Om(Mm.current);
      var t = Om(Zu.current), a = Yx(t, e.type);
      t !== a && (va(Bp, e, e), va(Zu, a, e));
    }
    function i0(e) {
      Bp.current === e && (pa(Zu, e), pa(Bp, e));
    }
    var Db = 0, w2 = 1, b2 = 1, qp = 2, _i = Gu(Db);
    function l0(e, t) {
      return (e & t) !== 0;
    }
    function Jf(e) {
      return e & w2;
    }
    function u0(e, t) {
      return e & w2 | t;
    }
    function Mb(e, t) {
      return e | t;
    }
    function es(e, t) {
      va(_i, t, e);
    }
    function Zf(e) {
      pa(_i, e);
    }
    function Ob(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Lm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === se) {
          var a = t.memoizedState;
          if (a !== null) {
            var o = a.dehydrated;
            if (o === null || H_(o) || Rg(o))
              return t;
          }
        } else if (t.tag === te && // revealOrder undefined can't be trusted because it don't
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
    ), _r = (
      /* */
      1
    ), il = (
      /*  */
      2
    ), Sr = (
      /*    */
      4
    ), Wr = (
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
    function Lb(e, t) {
      var a = t._getVersion, o = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, o] : e.mutableSourceEagerHydrationData.push(t, o);
    }
    var $e = d.ReactCurrentDispatcher, Wp = d.ReactCurrentBatchConfig, f0, ed;
    f0 = /* @__PURE__ */ new Set();
    var yc = fe, on = null, Cr = null, Er = null, jm = !1, Yp = !1, Gp = 0, jb = 0, Ab = 25, oe = null, Wo = null, ts = -1, d0 = !1;
    function Jt() {
      {
        var e = oe;
        Wo === null ? Wo = [e] : Wo.push(e);
      }
    }
    function De() {
      {
        var e = oe;
        Wo !== null && (ts++, Wo[ts] !== e && Ub(e));
      }
    }
    function td(e) {
      e != null && !kt(e) && h("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", oe, typeof e);
    }
    function Ub(e) {
      {
        var t = gt(on);
        if (!f0.has(t) && (f0.add(t), Wo !== null)) {
          for (var a = "", o = 30, l = 0; l <= ts; l++) {
            for (var s = Wo[l], v = l === ts ? e : s, y = l + 1 + ". " + s; y.length < o; )
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
        return h("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", oe), !1;
      e.length !== t.length && h(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, oe, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ye(e[a], t[a]))
          return !1;
      return !0;
    }
    function nd(e, t, a, o, l, s) {
      yc = s, on = t, Wo = e !== null ? e._debugHookTypes : null, ts = -1, d0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = fe, e !== null && e.memoizedState !== null ? $e.current = Y2 : Wo !== null ? $e.current = W2 : $e.current = q2;
      var v = a(o, l);
      if (Yp) {
        var y = 0;
        do {
          if (Yp = !1, Gp = 0, y >= Ab)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          y += 1, d0 = !1, Cr = null, Er = null, t.updateQueue = null, ts = -1, $e.current = G2, v = a(o, l);
        } while (Yp);
      }
      $e.current = Ym, t._debugHookTypes = Wo;
      var _ = Cr !== null && Cr.next !== null;
      if (yc = fe, on = null, Cr = null, Er = null, oe = null, Wo = null, ts = -1, e !== null && (e.flags & Hn) !== (t.flags & Hn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Nt) !== it && h("Internal React error: Expected static flag was missing. Please notify the React team."), jm = !1, _)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function rd() {
      var e = Gp !== 0;
      return Gp = 0, e;
    }
    function R2(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & qt) !== it ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = $s(e.lanes, a);
    }
    function k2() {
      if ($e.current = Ym, jm) {
        for (var e = on.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        jm = !1;
      }
      yc = fe, on = null, Cr = null, Er = null, Wo = null, ts = -1, oe = null, F2 = !1, Yp = !1, Gp = 0;
    }
    function ll() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Er === null ? on.memoizedState = Er = e : Er = Er.next = e, Er;
    }
    function Yo() {
      var e;
      if (Cr === null) {
        var t = on.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Cr.next;
      var a;
      if (Er === null ? a = on.memoizedState : a = Er.next, a !== null)
        Er = a, a = Er.next, Cr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Cr = e;
        var o = {
          memoizedState: Cr.memoizedState,
          baseState: Cr.baseState,
          baseQueue: Cr.baseQueue,
          queue: Cr.queue,
          next: null
        };
        Er === null ? on.memoizedState = Er = o : Er = Er.next = o;
      }
      return Er;
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
        lanes: fe,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      o.queue = s;
      var v = s.dispatch = Fb.bind(null, on, s);
      return [o.memoizedState, v];
    }
    function m0(e, t, a) {
      var o = Yo(), l = o.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = Cr, v = s.baseQueue, y = l.pending;
      if (y !== null) {
        if (v !== null) {
          var _ = v.next, T = y.next;
          v.next = T, y.next = _;
        }
        s.baseQueue !== v && h("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = v = y, l.pending = null;
      }
      if (v !== null) {
        var N = v.next, I = s.baseState, z = null, G = null, X = null, ne = N;
        do {
          var Ie = ne.lane;
          if (Bl(yc, Ie)) {
            if (X !== null) {
              var nt = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ht,
                action: ne.action,
                hasEagerState: ne.hasEagerState,
                eagerState: ne.eagerState,
                next: null
              };
              X = X.next = nt;
            }
            if (ne.hasEagerState)
              I = ne.eagerState;
            else {
              var It = ne.action;
              I = e(I, It);
            }
          } else {
            var st = {
              lane: Ie,
              action: ne.action,
              hasEagerState: ne.hasEagerState,
              eagerState: ne.eagerState,
              next: null
            };
            X === null ? (G = X = st, z = I) : X = X.next = st, on.lanes = wt(on.lanes, Ie), hv(Ie);
          }
          ne = ne.next;
        } while (ne !== null && ne !== N);
        X === null ? z = I : X.next = G, ye(I, o.memoizedState) || rv(), o.memoizedState = I, o.baseState = z, o.baseQueue = X, l.lastRenderedState = I;
      }
      var Lt = l.interleaved;
      if (Lt !== null) {
        var B = Lt;
        do {
          var re = B.lane;
          on.lanes = wt(on.lanes, re), hv(re), B = B.next;
        } while (B !== Lt);
      } else v === null && (l.lanes = fe);
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
        ye(y, o.memoizedState) || rv(), o.memoizedState = y, o.baseQueue === null && (o.baseState = y), l.lastRenderedState = y;
      }
      return [y, s];
    }
    function a7(e, t, a) {
    }
    function o7(e, t, a) {
    }
    function g0(e, t, a) {
      var o = on, l = ll(), s, v = qr();
      if (v) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), ed || s !== a() && (h("The result of getServerSnapshot should be cached to avoid an infinite loop"), ed = !0);
      } else {
        if (s = t(), !ed) {
          var y = t();
          ye(s, y) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), ed = !0);
        }
        var _ = dy();
        if (_ === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Sf(_, yc) || N2(o, t, s);
      }
      l.memoizedState = s;
      var T = {
        value: s,
        getSnapshot: t
      };
      return l.queue = T, Im(M2.bind(null, o, T, e), [e]), o.flags |= ra, Qp(_r | Wr, D2.bind(null, o, T, s, t), void 0, null), s;
    }
    function Am(e, t, a) {
      var o = on, l = Yo(), s = t();
      if (!ed) {
        var v = t();
        ye(s, v) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), ed = !0);
      }
      var y = l.memoizedState, _ = !ye(y, s);
      _ && (l.memoizedState = s, rv());
      var T = l.queue;
      if (Xp(M2.bind(null, o, T, e), [e]), T.getSnapshot !== t || _ || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Er !== null && Er.memoizedState.tag & _r) {
        o.flags |= ra, Qp(_r | Wr, D2.bind(null, o, T, s, t), void 0, null);
        var N = dy();
        if (N === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Sf(N, yc) || N2(o, t, s);
      }
      return s;
    }
    function N2(e, t, a) {
      e.flags |= Ou;
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
    function D2(e, t, a, o) {
      t.value = a, t.getSnapshot = o, O2(t) && L2(e);
    }
    function M2(e, t, a) {
      var o = function() {
        O2(t) && L2(e);
      };
      return a(o);
    }
    function O2(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var o = t();
        return !ye(a, o);
      } catch {
        return !0;
      }
    }
    function L2(e) {
      var t = Qa(e, ht);
      t !== null && Rr(t, e, ht, un);
    }
    function Um(e) {
      var t = ll();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: fe,
        dispatch: null,
        lastRenderedReducer: v0,
        lastRenderedState: e
      };
      t.queue = a;
      var o = a.dispatch = Vb.bind(null, on, a);
      return [t.memoizedState, o];
    }
    function _0(e) {
      return m0(v0);
    }
    function S0(e) {
      return y0(v0);
    }
    function Qp(e, t, a, o) {
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
    function Kp(e, t, a, o) {
      var l = ll(), s = o === void 0 ? null : o;
      on.flags |= e, l.memoizedState = Qp(_r | t, a, void 0, s);
    }
    function Pm(e, t, a, o) {
      var l = Yo(), s = o === void 0 ? null : o, v = void 0;
      if (Cr !== null) {
        var y = Cr.memoizedState;
        if (v = y.destroy, s !== null) {
          var _ = y.deps;
          if (p0(s, _)) {
            l.memoizedState = Qp(t, a, v, s);
            return;
          }
        }
      }
      on.flags |= e, l.memoizedState = Qp(_r | t, a, v, s);
    }
    function Im(e, t) {
      return (on.mode & qt) !== it ? Kp(jo | ra | Wc, Wr, e, t) : Kp(ra | Wc, Wr, e, t);
    }
    function Xp(e, t) {
      return Pm(ra, Wr, e, t);
    }
    function E0(e, t) {
      return Kp(Ut, il, e, t);
    }
    function Fm(e, t) {
      return Pm(Ut, il, e, t);
    }
    function x0(e, t) {
      var a = Ut;
      return a |= li, (on.mode & qt) !== it && (a |= Hi), Kp(a, Sr, e, t);
    }
    function Vm(e, t) {
      return Pm(Ut, Sr, e, t);
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
    function w0(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var o = a != null ? a.concat([e]) : null, l = Ut;
      return l |= li, (on.mode & qt) !== it && (l |= Hi), Kp(l, Sr, j2.bind(null, t, e), o);
    }
    function Hm(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var o = a != null ? a.concat([e]) : null;
      return Pm(Ut, Sr, j2.bind(null, t, e), o);
    }
    function zb(e, t) {
    }
    var $m = zb;
    function b0(e, t) {
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
      var t = Yo(), a = Cr, o = a.memoizedState;
      return z2(t, o, e);
    }
    function U2(e) {
      var t = Yo();
      if (Cr === null)
        return t.memoizedState = e, e;
      var a = Cr.memoizedState;
      return z2(t, a, e);
    }
    function z2(e, t, a) {
      var o = !Zd(yc);
      if (o) {
        if (!ye(a, t)) {
          var l = np();
          on.lanes = wt(on.lanes, l), hv(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, rv()), e.memoizedState = a, a;
    }
    function Pb(e, t, a) {
      var o = Wa();
      qn(Eh(o, Po)), e(!0);
      var l = Wp.transition;
      Wp.transition = {};
      var s = Wp.transition;
      Wp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (qn(o), Wp.transition = l, l === null && s._updatedFibers) {
          var v = s._updatedFibers.size;
          v > 10 && C("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function T0() {
      var e = Um(!1), t = e[0], a = e[1], o = Pb.bind(null, a), l = ll();
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
    function Ib() {
      return F2;
    }
    function N0() {
      var e = ll(), t = dy(), a = t.identifierPrefix, o;
      if (qr()) {
        var l = nb();
        o = ":" + a + "R" + l;
        var s = Gp++;
        s > 0 && (o += "H" + s.toString(32)), o += ":";
      } else {
        var v = jb++;
        o = ":" + a + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = o, o;
    }
    function Wm() {
      var e = Yo(), t = e.memoizedState;
      return t;
    }
    function Fb(e, t, a) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var o = is(e), l = {
        lane: o,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (V2(e))
        H2(t, l);
      else {
        var s = m2(e, t, l, o);
        if (s !== null) {
          var v = Da();
          Rr(s, e, o, v), $2(s, t, o);
        }
      }
      B2(e, o);
    }
    function Vb(e, t, a) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var o = is(e), l = {
        lane: o,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (V2(e))
        H2(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === fe && (s === null || s.lanes === fe)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var y;
            y = $e.current, $e.current = Si;
            try {
              var _ = t.lastRenderedState, T = v(_, a);
              if (l.hasEagerState = !0, l.eagerState = T, ye(T, _)) {
                bb(e, t, l, o);
                return;
              }
            } catch {
            } finally {
              $e.current = y;
            }
          }
        }
        var N = m2(e, t, l, o);
        if (N !== null) {
          var I = Da();
          Rr(N, e, o, I), $2(N, t, o);
        }
      }
      B2(e, o);
    }
    function V2(e) {
      var t = e.alternate;
      return e === on || t !== null && t === on;
    }
    function H2(e, t) {
      Yp = jm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function $2(e, t, a) {
      if (tp(a)) {
        var o = t.lanes;
        o = rp(o, e.pendingLanes);
        var l = wt(o, a);
        t.lanes = l, Ef(e, l);
      }
    }
    function B2(e, t, a) {
      Ls(e, t);
    }
    var Ym = {
      readContext: cr,
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
    }, q2 = null, W2 = null, Y2 = null, G2 = null, ul = null, Si = null, Gm = null;
    {
      var D0 = function() {
        h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, St = function() {
        h("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      q2 = {
        readContext: function(e) {
          return cr(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", Jt(), td(t), b0(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", Jt(), cr(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", Jt(), td(t), Im(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return oe = "useImperativeHandle", Jt(), td(a), w0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", Jt(), td(t), E0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", Jt(), td(t), x0(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", Jt(), td(t);
          var a = $e.current;
          $e.current = ul;
          try {
            return R0(e, t);
          } finally {
            $e.current = a;
          }
        },
        useReducer: function(e, t, a) {
          oe = "useReducer", Jt();
          var o = $e.current;
          $e.current = ul;
          try {
            return h0(e, t, a);
          } finally {
            $e.current = o;
          }
        },
        useRef: function(e) {
          return oe = "useRef", Jt(), C0(e);
        },
        useState: function(e) {
          oe = "useState", Jt();
          var t = $e.current;
          $e.current = ul;
          try {
            return Um(e);
          } finally {
            $e.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", Jt(), void 0;
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", Jt(), k0(e);
        },
        useTransition: function() {
          return oe = "useTransition", Jt(), T0();
        },
        useMutableSource: function(e, t, a) {
          return oe = "useMutableSource", Jt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return oe = "useSyncExternalStore", Jt(), g0(e, t, a);
        },
        useId: function() {
          return oe = "useId", Jt(), N0();
        },
        unstable_isNewReconciler: ee
      }, W2 = {
        readContext: function(e) {
          return cr(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", De(), b0(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", De(), cr(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", De(), Im(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return oe = "useImperativeHandle", De(), w0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", De(), E0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", De(), x0(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", De();
          var a = $e.current;
          $e.current = ul;
          try {
            return R0(e, t);
          } finally {
            $e.current = a;
          }
        },
        useReducer: function(e, t, a) {
          oe = "useReducer", De();
          var o = $e.current;
          $e.current = ul;
          try {
            return h0(e, t, a);
          } finally {
            $e.current = o;
          }
        },
        useRef: function(e) {
          return oe = "useRef", De(), C0(e);
        },
        useState: function(e) {
          oe = "useState", De();
          var t = $e.current;
          $e.current = ul;
          try {
            return Um(e);
          } finally {
            $e.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", De(), void 0;
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", De(), k0(e);
        },
        useTransition: function() {
          return oe = "useTransition", De(), T0();
        },
        useMutableSource: function(e, t, a) {
          return oe = "useMutableSource", De(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return oe = "useSyncExternalStore", De(), g0(e, t, a);
        },
        useId: function() {
          return oe = "useId", De(), N0();
        },
        unstable_isNewReconciler: ee
      }, Y2 = {
        readContext: function(e) {
          return cr(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", De(), Bm(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", De(), cr(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", De(), Xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return oe = "useImperativeHandle", De(), Hm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", De(), Fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", De(), Vm(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", De();
          var a = $e.current;
          $e.current = Si;
          try {
            return qm(e, t);
          } finally {
            $e.current = a;
          }
        },
        useReducer: function(e, t, a) {
          oe = "useReducer", De();
          var o = $e.current;
          $e.current = Si;
          try {
            return m0(e, t, a);
          } finally {
            $e.current = o;
          }
        },
        useRef: function(e) {
          return oe = "useRef", De(), zm();
        },
        useState: function(e) {
          oe = "useState", De();
          var t = $e.current;
          $e.current = Si;
          try {
            return _0(e);
          } finally {
            $e.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", De(), $m();
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", De(), A2(e);
        },
        useTransition: function() {
          return oe = "useTransition", De(), P2();
        },
        useMutableSource: function(e, t, a) {
          return oe = "useMutableSource", De(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return oe = "useSyncExternalStore", De(), Am(e, t);
        },
        useId: function() {
          return oe = "useId", De(), Wm();
        },
        unstable_isNewReconciler: ee
      }, G2 = {
        readContext: function(e) {
          return cr(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", De(), Bm(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", De(), cr(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", De(), Xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return oe = "useImperativeHandle", De(), Hm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", De(), Fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", De(), Vm(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", De();
          var a = $e.current;
          $e.current = Gm;
          try {
            return qm(e, t);
          } finally {
            $e.current = a;
          }
        },
        useReducer: function(e, t, a) {
          oe = "useReducer", De();
          var o = $e.current;
          $e.current = Gm;
          try {
            return y0(e, t, a);
          } finally {
            $e.current = o;
          }
        },
        useRef: function(e) {
          return oe = "useRef", De(), zm();
        },
        useState: function(e) {
          oe = "useState", De();
          var t = $e.current;
          $e.current = Gm;
          try {
            return S0(e);
          } finally {
            $e.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", De(), $m();
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", De(), U2(e);
        },
        useTransition: function() {
          return oe = "useTransition", De(), I2();
        },
        useMutableSource: function(e, t, a) {
          return oe = "useMutableSource", De(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return oe = "useSyncExternalStore", De(), Am(e, t);
        },
        useId: function() {
          return oe = "useId", De(), Wm();
        },
        unstable_isNewReconciler: ee
      }, ul = {
        readContext: function(e) {
          return D0(), cr(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", St(), Jt(), b0(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", St(), Jt(), cr(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", St(), Jt(), Im(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return oe = "useImperativeHandle", St(), Jt(), w0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", St(), Jt(), E0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", St(), Jt(), x0(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", St(), Jt();
          var a = $e.current;
          $e.current = ul;
          try {
            return R0(e, t);
          } finally {
            $e.current = a;
          }
        },
        useReducer: function(e, t, a) {
          oe = "useReducer", St(), Jt();
          var o = $e.current;
          $e.current = ul;
          try {
            return h0(e, t, a);
          } finally {
            $e.current = o;
          }
        },
        useRef: function(e) {
          return oe = "useRef", St(), Jt(), C0(e);
        },
        useState: function(e) {
          oe = "useState", St(), Jt();
          var t = $e.current;
          $e.current = ul;
          try {
            return Um(e);
          } finally {
            $e.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", St(), Jt(), void 0;
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", St(), Jt(), k0(e);
        },
        useTransition: function() {
          return oe = "useTransition", St(), Jt(), T0();
        },
        useMutableSource: function(e, t, a) {
          return oe = "useMutableSource", St(), Jt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return oe = "useSyncExternalStore", St(), Jt(), g0(e, t, a);
        },
        useId: function() {
          return oe = "useId", St(), Jt(), N0();
        },
        unstable_isNewReconciler: ee
      }, Si = {
        readContext: function(e) {
          return D0(), cr(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", St(), De(), Bm(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", St(), De(), cr(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", St(), De(), Xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return oe = "useImperativeHandle", St(), De(), Hm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", St(), De(), Fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", St(), De(), Vm(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", St(), De();
          var a = $e.current;
          $e.current = Si;
          try {
            return qm(e, t);
          } finally {
            $e.current = a;
          }
        },
        useReducer: function(e, t, a) {
          oe = "useReducer", St(), De();
          var o = $e.current;
          $e.current = Si;
          try {
            return m0(e, t, a);
          } finally {
            $e.current = o;
          }
        },
        useRef: function(e) {
          return oe = "useRef", St(), De(), zm();
        },
        useState: function(e) {
          oe = "useState", St(), De();
          var t = $e.current;
          $e.current = Si;
          try {
            return _0(e);
          } finally {
            $e.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", St(), De(), $m();
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", St(), De(), A2(e);
        },
        useTransition: function() {
          return oe = "useTransition", St(), De(), P2();
        },
        useMutableSource: function(e, t, a) {
          return oe = "useMutableSource", St(), De(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return oe = "useSyncExternalStore", St(), De(), Am(e, t);
        },
        useId: function() {
          return oe = "useId", St(), De(), Wm();
        },
        unstable_isNewReconciler: ee
      }, Gm = {
        readContext: function(e) {
          return D0(), cr(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", St(), De(), Bm(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", St(), De(), cr(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", St(), De(), Xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return oe = "useImperativeHandle", St(), De(), Hm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", St(), De(), Fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", St(), De(), Vm(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", St(), De();
          var a = $e.current;
          $e.current = Si;
          try {
            return qm(e, t);
          } finally {
            $e.current = a;
          }
        },
        useReducer: function(e, t, a) {
          oe = "useReducer", St(), De();
          var o = $e.current;
          $e.current = Si;
          try {
            return y0(e, t, a);
          } finally {
            $e.current = o;
          }
        },
        useRef: function(e) {
          return oe = "useRef", St(), De(), zm();
        },
        useState: function(e) {
          oe = "useState", St(), De();
          var t = $e.current;
          $e.current = Si;
          try {
            return S0(e);
          } finally {
            $e.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", St(), De(), $m();
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", St(), De(), U2(e);
        },
        useTransition: function() {
          return oe = "useTransition", St(), De(), I2();
        },
        useMutableSource: function(e, t, a) {
          return oe = "useMutableSource", St(), De(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return oe = "useSyncExternalStore", St(), De(), Am(e, t);
        },
        useId: function() {
          return oe = "useId", St(), De(), Wm();
        },
        unstable_isNewReconciler: ee
      };
    }
    var ns = p.unstable_now, Q2 = 0, Qm = -1, Jp = -1, Km = -1, M0 = !1, Xm = !1;
    function K2() {
      return M0;
    }
    function Hb() {
      Xm = !0;
    }
    function $b() {
      M0 = !1, Xm = !1;
    }
    function Bb() {
      M0 = Xm, Xm = !1;
    }
    function X2() {
      return Q2;
    }
    function J2() {
      Q2 = ns();
    }
    function O0(e) {
      Jp = ns(), e.actualStartTime < 0 && (e.actualStartTime = ns());
    }
    function Z2(e) {
      Jp = -1;
    }
    function Jm(e, t) {
      if (Jp >= 0) {
        var a = ns() - Jp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Jp = -1;
      }
    }
    function sl(e) {
      if (Qm >= 0) {
        var t = ns() - Qm;
        Qm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case A:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
            case le:
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
        var t = ns() - Km;
        Km = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case A:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
            case le:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function cl() {
      Qm = ns();
    }
    function j0() {
      Km = ns();
    }
    function A0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Ci(e, t) {
      if (e && e.defaultProps) {
        var a = bt({}, t), o = e.defaultProps;
        for (var l in o)
          a[l] === void 0 && (a[l] = o[l]);
        return a;
      }
      return t;
    }
    var U0 = {}, z0, P0, I0, F0, V0, eS, Zm, H0, $0, B0, Zp;
    {
      z0 = /* @__PURE__ */ new Set(), P0 = /* @__PURE__ */ new Set(), I0 = /* @__PURE__ */ new Set(), F0 = /* @__PURE__ */ new Set(), H0 = /* @__PURE__ */ new Set(), V0 = /* @__PURE__ */ new Set(), $0 = /* @__PURE__ */ new Set(), B0 = /* @__PURE__ */ new Set(), Zp = /* @__PURE__ */ new Set();
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
          wn(!0);
          try {
            s = a(o, l);
          } finally {
            wn(!1);
          }
        }
        eS(t, s);
      }
      var v = s == null ? l : bt({}, l, s);
      if (e.memoizedState = v, e.lanes === fe) {
        var y = e.updateQueue;
        y.baseState = v;
      }
    }
    var W0 = {
      isMounted: ih,
      enqueueSetState: function(e, t, a) {
        var o = Mu(e), l = Da(), s = is(o), v = nu(l, s);
        v.payload = t, a != null && (Zm(a, "setState"), v.callback = a);
        var y = Ju(o, v, s);
        y !== null && (Rr(y, o, s, l), Tm(y, o, s)), Ls(o, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var o = Mu(e), l = Da(), s = is(o), v = nu(l, s);
        v.tag = g2, v.payload = t, a != null && (Zm(a, "replaceState"), v.callback = a);
        var y = Ju(o, v, s);
        y !== null && (Rr(y, o, s, l), Tm(y, o, s)), Ls(o, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Mu(e), o = Da(), l = is(a), s = nu(o, l);
        s.tag = bm, t != null && (Zm(t, "forceUpdate"), s.callback = t);
        var v = Ju(a, s, l);
        v !== null && (Rr(v, a, l, o), Tm(v, a, l)), Zc(a, l);
      }
    };
    function nS(e, t, a, o, l, s, v) {
      var y = e.stateNode;
      if (typeof y.shouldComponentUpdate == "function") {
        var _ = y.shouldComponentUpdate(o, s, v);
        {
          if (e.mode & an) {
            wn(!0);
            try {
              _ = y.shouldComponentUpdate(o, s, v);
            } finally {
              wn(!1);
            }
          }
          _ === void 0 && h("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ft(t) || "Component");
        }
        return _;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ke(a, o) || !Ke(l, s) : !0;
    }
    function qb(e, t, a) {
      var o = e.stateNode;
      {
        var l = Ft(t) || "Component", s = o.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? h("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : h("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), o.getInitialState && !o.getInitialState.isReactClassApproved && !o.state && h("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), o.getDefaultProps && !o.getDefaultProps.isReactClassApproved && h("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), o.propTypes && h("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), o.contextType && h("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), t.childContextTypes && !Zp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & an) === it && (Zp.add(t), h(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), t.contextTypes && !Zp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & an) === it && (Zp.add(t), h(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), o.contextTypes && h("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !$0.has(t) && ($0.add(t), h("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof o.componentShouldUpdate == "function" && h("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof o.shouldComponentUpdate < "u" && h("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ft(t) || "A pure component"), typeof o.componentDidUnmount == "function" && h("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof o.componentDidReceiveProps == "function" && h("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof o.componentWillRecieveProps == "function" && h("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof o.UNSAFE_componentWillRecieveProps == "function" && h("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var v = o.props !== a;
        o.props !== void 0 && v && h("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), o.defaultProps && h("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof o.getSnapshotBeforeUpdate == "function" && typeof o.componentDidUpdate != "function" && !I0.has(t) && (I0.add(t), h("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ft(t))), typeof o.getDerivedStateFromProps == "function" && h("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof o.getDerivedStateFromError == "function" && h("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && h("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var y = o.state;
        y && (typeof y != "object" || kt(y)) && h("%s.state: must be set to an object or null", l), typeof o.getChildContext == "function" && typeof t.childContextTypes != "object" && h("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function rS(e, t) {
      t.updater = W0, e.stateNode = t, Dl(t, e), t._reactInternalInstance = U0;
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
          v === void 0 ? _ = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? _ = " However, it is set to a " + typeof v + "." : v.$$typeof === bo ? _ = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? _ = " Did you accidentally pass the Context.Consumer instead?" : _ = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", h("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ft(t) || "Component", _);
        }
      }
      if (typeof v == "object" && v !== null)
        s = cr(v);
      else {
        l = $f(e, t, !0);
        var T = t.contextTypes;
        o = T != null, s = o ? Bf(e, l) : go;
      }
      var N = new t(a, s);
      if (e.mode & an) {
        wn(!0);
        try {
          N = new t(a, s);
        } finally {
          wn(!1);
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
          var G = null, X = null, ne = null;
          if (typeof N.componentWillMount == "function" && N.componentWillMount.__suppressDeprecationWarning !== !0 ? G = "componentWillMount" : typeof N.UNSAFE_componentWillMount == "function" && (G = "UNSAFE_componentWillMount"), typeof N.componentWillReceiveProps == "function" && N.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? X = "componentWillReceiveProps" : typeof N.UNSAFE_componentWillReceiveProps == "function" && (X = "UNSAFE_componentWillReceiveProps"), typeof N.componentWillUpdate == "function" && N.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ne = "componentWillUpdate" : typeof N.UNSAFE_componentWillUpdate == "function" && (ne = "UNSAFE_componentWillUpdate"), G !== null || X !== null || ne !== null) {
            var Ie = Ft(t) || "Component", st = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            F0.has(Ie) || (F0.add(Ie), h(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ie, st, G !== null ? `
  ` + G : "", X !== null ? `
  ` + X : "", ne !== null ? `
  ` + ne : ""));
          }
        }
      }
      return o && Y_(e, l, s), N;
    }
    function Wb(e, t) {
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
      qb(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = {}, n0(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = cr(s);
      else {
        var v = $f(e, t, !0);
        l.context = Bf(e, v);
      }
      {
        if (l.state === a) {
          var y = Ft(t) || "Component";
          H0.has(y) || (H0.add(y), h("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", y));
        }
        e.mode & an && gi.recordLegacyContextWarning(e, l), gi.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var _ = t.getDerivedStateFromProps;
      if (typeof _ == "function" && (q0(e, t, _, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (Wb(e, l), Nm(e, a, l, o), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var T = Ut;
        T |= li, (e.mode & qt) !== it && (T |= Hi), e.flags |= T;
      }
    }
    function Yb(e, t, a, o) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var v = l.context, y = t.contextType, _ = go;
      if (typeof y == "object" && y !== null)
        _ = cr(y);
      else {
        var T = $f(e, t, !0);
        _ = Bf(e, T);
      }
      var N = t.getDerivedStateFromProps, I = typeof N == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !I && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || v !== _) && oS(e, l, a, _), S2();
      var z = e.memoizedState, G = l.state = z;
      if (Nm(e, a, l, o), G = e.memoizedState, s === a && z === G && !cm() && !Dm()) {
        if (typeof l.componentDidMount == "function") {
          var X = Ut;
          X |= li, (e.mode & qt) !== it && (X |= Hi), e.flags |= X;
        }
        return !1;
      }
      typeof N == "function" && (q0(e, t, N, a), G = e.memoizedState);
      var ne = Dm() || nS(e, t, s, a, z, G, _);
      if (ne) {
        if (!I && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var Ie = Ut;
          Ie |= li, (e.mode & qt) !== it && (Ie |= Hi), e.flags |= Ie;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var st = Ut;
          st |= li, (e.mode & qt) !== it && (st |= Hi), e.flags |= st;
        }
        e.memoizedProps = a, e.memoizedState = G;
      }
      return l.props = a, l.state = G, l.context = _, ne;
    }
    function Gb(e, t, a, o, l) {
      var s = t.stateNode;
      _2(e, t);
      var v = t.memoizedProps, y = t.type === t.elementType ? v : Ci(t.type, v);
      s.props = y;
      var _ = t.pendingProps, T = s.context, N = a.contextType, I = go;
      if (typeof N == "object" && N !== null)
        I = cr(N);
      else {
        var z = $f(t, a, !0);
        I = Bf(t, z);
      }
      var G = a.getDerivedStateFromProps, X = typeof G == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !X && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (v !== _ || T !== I) && oS(t, s, o, I), S2();
      var ne = t.memoizedState, Ie = s.state = ne;
      if (Nm(t, o, s, l), Ie = t.memoizedState, v === _ && ne === Ie && !cm() && !Dm() && !Me)
        return typeof s.componentDidUpdate == "function" && (v !== e.memoizedProps || ne !== e.memoizedState) && (t.flags |= Ut), typeof s.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || ne !== e.memoizedState) && (t.flags |= Zn), !1;
      typeof G == "function" && (q0(t, a, G, o), Ie = t.memoizedState);
      var st = Dm() || nS(t, a, y, o, ne, Ie, I) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Me;
      return st ? (!X && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(o, Ie, I), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(o, Ie, I)), typeof s.componentDidUpdate == "function" && (t.flags |= Ut), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Zn)) : (typeof s.componentDidUpdate == "function" && (v !== e.memoizedProps || ne !== e.memoizedState) && (t.flags |= Ut), typeof s.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || ne !== e.memoizedState) && (t.flags |= Zn), t.memoizedProps = o, t.memoizedState = Ie), s.props = o, s.state = Ie, s.context = I, st;
    }
    function gc(e, t) {
      return {
        value: e,
        source: t,
        stack: ti(t),
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
    function Qb(e, t) {
      return !0;
    }
    function Q0(e, t) {
      try {
        var a = Qb(e, t);
        if (a === !1)
          return;
        var o = t.value, l = t.source, s = t.stack, v = s !== null ? s : "";
        if (o != null && o._suppressLogging) {
          if (e.tag === b)
            return;
          console.error(o);
        }
        var y = l ? gt(l) : null, _ = y ? "The above error occurred in the <" + y + "> component:" : "The above error occurred in one of your React components:", T;
        if (e.tag === A)
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
    var Kb = typeof WeakMap == "function" ? WeakMap : Map;
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
        yC(e), Q0(e, t), typeof l != "function" && Fk(this);
        var _ = t.value, T = t.stack;
        this.componentDidCatch(_, {
          componentStack: T !== null ? T : ""
        }), typeof l != "function" && (sa(e.lanes, ht) || h("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", gt(e) || "Unknown"));
      }), o;
    }
    function lS(e, t, a) {
      var o = e.pingCache, l;
      if (o === null ? (o = e.pingCache = new Kb(), l = /* @__PURE__ */ new Set(), o.set(t, l)) : (l = o.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), o.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = $k.bind(null, e, t, a);
        la && mv(e, a), t.then(s, s);
      }
    }
    function Xb(e, t, a, o) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function Jb(e, t) {
      var a = e.tag;
      if ((e.mode & Nt) === it && (a === R || a === Ce || a === Le)) {
        var o = e.alternate;
        o ? (e.updateQueue = o.updateQueue, e.memoizedState = o.memoizedState, e.lanes = o.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function uS(e) {
      var t = e;
      do {
        if (t.tag === se && Ob(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function sS(e, t, a, o, l) {
      if ((e.mode & Nt) === it) {
        if (e === t)
          e.flags |= ir;
        else {
          if (e.flags |= rt, a.flags |= qc, a.flags &= -52805, a.tag === b) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ge;
            else {
              var v = nu(un, ht);
              v.tag = bm, Ju(a, v, ht);
            }
          }
          a.lanes = wt(a.lanes, ht);
        }
        return e;
      }
      return e.flags |= ir, e.lanes = l, e;
    }
    function Zb(e, t, a, o, l) {
      if (a.flags |= ks, la && mv(e, l), o !== null && typeof o == "object" && typeof o.then == "function") {
        var s = o;
        Jb(a), qr() && a.mode & Nt && e2();
        var v = uS(t);
        if (v !== null) {
          v.flags &= ~Dr, sS(v, t, a, e, l), v.mode & Nt && lS(e, s, l), Xb(v, e, s);
          return;
        } else {
          if (!vh(l)) {
            lS(e, s, l), N1();
            return;
          }
          var y = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          o = y;
        }
      } else if (qr() && a.mode & Nt) {
        e2();
        var _ = uS(t);
        if (_ !== null) {
          (_.flags & ir) === ot && (_.flags |= Dr), sS(_, t, a, e, l), Hg(gc(o, a));
          return;
        }
      }
      o = gc(o, a), Ok(o);
      var T = t;
      do {
        switch (T.tag) {
          case A: {
            var N = o;
            T.flags |= ir;
            var I = Hs(l);
            T.lanes = wt(T.lanes, I);
            var z = iS(T, N, I);
            r0(T, z);
            return;
          }
          case b:
            var G = o, X = T.type, ne = T.stateNode;
            if ((T.flags & rt) === ot && (typeof X.getDerivedStateFromError == "function" || ne !== null && typeof ne.componentDidCatch == "function" && !uC(ne))) {
              T.flags |= ir;
              var Ie = Hs(l);
              T.lanes = wt(T.lanes, Ie);
              var st = K0(T, G, Ie);
              r0(T, st);
              return;
            }
            break;
        }
        T = T.return;
      } while (T !== null);
    }
    function eR() {
      return null;
    }
    var ev = d.ReactCurrentOwner, Ei = !1, X0, tv, J0, Z0, e1, _c, t1, ey, nv;
    X0 = {}, tv = {}, J0 = {}, Z0 = {}, e1 = {}, _c = !1, t1 = {}, ey = {}, nv = {};
    function Ta(e, t, a, o) {
      e === null ? t.child = d2(t, null, a, o) : t.child = Gf(t, e.child, a, o);
    }
    function tR(e, t, a, o) {
      t.child = Gf(t, e.child, null, o), t.child = Gf(t, null, a, o);
    }
    function cS(e, t, a, o, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && mi(
          s,
          o,
          // Resolved props
          "prop",
          Ft(a)
        );
      }
      var v = a.render, y = t.ref, _, T;
      Kf(t, l), wa(t);
      {
        if (ev.current = t, Jn(!0), _ = nd(e, t, v, o, y, l), T = rd(), t.mode & an) {
          wn(!0);
          try {
            _ = nd(e, t, v, o, y, l), T = rd();
          } finally {
            wn(!1);
          }
        }
        Jn(!1);
      }
      return ba(), e !== null && !Ei ? (R2(e, t, l), ru(e, t, l)) : (qr() && T && Ug(t), t.flags |= po, Ta(e, t, _, l), t.child);
    }
    function fS(e, t, a, o, l) {
      if (e === null) {
        var s = a.type;
        if (iT(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var v = s;
          return v = fd(s), t.tag = Le, t.type = v, a1(t, s), dS(e, t, v, o, l);
        }
        {
          var y = s.propTypes;
          if (y && mi(
            y,
            o,
            // Resolved props
            "prop",
            Ft(s)
          ), a.defaultProps !== void 0) {
            var _ = Ft(s) || "Unknown";
            nv[_] || (h("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", _), nv[_] = !0);
          }
        }
        var T = F1(a.type, null, o, t, t.mode, l);
        return T.ref = t.ref, T.return = t, t.child = T, T;
      }
      {
        var N = a.type, I = N.propTypes;
        I && mi(
          I,
          o,
          // Resolved props
          "prop",
          Ft(N)
        );
      }
      var z = e.child, G = c1(e, l);
      if (!G) {
        var X = z.memoizedProps, ne = a.compare;
        if (ne = ne !== null ? ne : Ke, ne(X, o) && e.ref === t.ref)
          return ru(e, t, l);
      }
      t.flags |= po;
      var Ie = wc(z, o);
      return Ie.ref = t.ref, Ie.return = t, t.child = Ie, Ie;
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
          T && mi(
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
        if (Ke(N, o) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Ei = !1, t.pendingProps = o = N, c1(e, l))
            (e.flags & qc) !== ot && (Ei = !0);
          else return t.lanes = e.lanes, ru(e, t, l);
      }
      return n1(e, t, a, o, l);
    }
    function pS(e, t, a) {
      var o = t.pendingProps, l = o.children, s = e !== null ? e.memoizedState : null;
      if (o.mode === "hidden" || ge)
        if ((t.mode & Nt) === it) {
          var v = {
            baseLanes: fe,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v, py(t, a);
        } else if (sa(a, ua)) {
          var I = {
            baseLanes: fe,
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
            _ = wt(T, a);
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
        s !== null ? (G = wt(s.baseLanes, a), t.memoizedState = null) : G = a, py(t, G);
      }
      return Ta(e, t, l, a), t.child;
    }
    function nR(e, t, a) {
      var o = t.pendingProps;
      return Ta(e, t, o, a), t.child;
    }
    function rR(e, t, a) {
      var o = t.pendingProps.children;
      return Ta(e, t, o, a), t.child;
    }
    function aR(e, t, a) {
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
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Tn, t.flags |= Lu);
    }
    function n1(e, t, a, o, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && mi(
          s,
          o,
          // Resolved props
          "prop",
          Ft(a)
        );
      }
      var v;
      {
        var y = $f(t, a, !0);
        v = Bf(t, y);
      }
      var _, T;
      Kf(t, l), wa(t);
      {
        if (ev.current = t, Jn(!0), _ = nd(e, t, a, o, v, l), T = rd(), t.mode & an) {
          wn(!0);
          try {
            _ = nd(e, t, a, o, v, l), T = rd();
          } finally {
            wn(!1);
          }
        }
        Jn(!1);
      }
      return ba(), e !== null && !Ei ? (R2(e, t, l), ru(e, t, l)) : (qr() && T && Ug(t), t.flags |= po, Ta(e, t, _, l), t.child);
    }
    function hS(e, t, a, o, l) {
      {
        switch (CT(t)) {
          case !1: {
            var s = t.stateNode, v = t.type, y = new v(t.memoizedProps, s.context), _ = y.state;
            s.updater.enqueueSetState(s, _, null);
            break;
          }
          case !0: {
            t.flags |= rt, t.flags |= ir;
            var T = new Error("Simulated error coming from DevTools"), N = Hs(l);
            t.lanes = wt(t.lanes, N);
            var I = K0(t, gc(T, t), N);
            r0(t, I);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var z = a.propTypes;
          z && mi(
            z,
            o,
            // Resolved props
            "prop",
            Ft(a)
          );
        }
      }
      var G;
      ol(a) ? (G = !0, dm(t)) : G = !1, Kf(t, l);
      var X = t.stateNode, ne;
      X === null ? (ny(e, t), aS(t, a, o), Y0(t, a, o, l), ne = !0) : e === null ? ne = Yb(t, a, o, l) : ne = Gb(e, t, a, o, l);
      var Ie = r1(e, t, a, ne, G, l);
      {
        var st = t.stateNode;
        ne && st.props !== o && (_c || h("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", gt(t) || "a component"), _c = !0);
      }
      return Ie;
    }
    function r1(e, t, a, o, l, s) {
      vS(e, t);
      var v = (t.flags & rt) !== ot;
      if (!o && !v)
        return l && K_(t, a, !1), ru(e, t, s);
      var y = t.stateNode;
      ev.current = t;
      var _;
      if (v && typeof a.getDerivedStateFromError != "function")
        _ = null, Z2();
      else {
        wa(t);
        {
          if (Jn(!0), _ = y.render(), t.mode & an) {
            wn(!0);
            try {
              y.render();
            } finally {
              wn(!1);
            }
          }
          Jn(!1);
        }
        ba();
      }
      return t.flags |= po, e !== null && v ? tR(e, t, _, s) : Ta(e, t, _, s), t.memoizedState = y.state, l && K_(t, a, !0), t.child;
    }
    function mS(e) {
      var t = e.stateNode;
      t.pendingContext ? G_(e, t.pendingContext, t.pendingContext !== t.context) : t.context && G_(e, t.context, !1), a0(e, t.containerInfo);
    }
    function oR(e, t, a) {
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
        if (T.baseState = _, t.memoizedState = _, t.flags & Dr) {
          var N = gc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return yS(e, t, y, a, N);
        } else if (y !== s) {
          var I = gc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return yS(e, t, y, a, I);
        } else {
          ub(t);
          var z = d2(t, null, y, a);
          t.child = z;
          for (var G = z; G; )
            G.flags = G.flags & ~xn | aa, G = G.sibling;
        }
      } else {
        if (Yf(), y === s)
          return ru(e, t, a);
        Ta(e, t, y, a);
      }
      return t.child;
    }
    function yS(e, t, a, o, l) {
      return Yf(), Hg(l), t.flags |= Dr, Ta(e, t, a, o), t.child;
    }
    function iR(e, t, a) {
      x2(t), e === null && Vg(t);
      var o = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, v = l.children, y = Eg(o, l);
      return y ? v = null : s !== null && Eg(o, s) && (t.flags |= Fa), vS(e, t), Ta(e, t, v, a), t.child;
    }
    function lR(e, t) {
      return e === null && Vg(t), null;
    }
    function uR(e, t, a, o) {
      ny(e, t);
      var l = t.pendingProps, s = a, v = s._payload, y = s._init, _ = y(v);
      t.type = _;
      var T = t.tag = lT(_), N = Ci(_, l), I;
      switch (T) {
        case R:
          return a1(t, _), t.type = _ = fd(_), I = n1(null, t, _, N, o), I;
        case b:
          return t.type = _ = j1(_), I = hS(null, t, _, N, o), I;
        case Ce:
          return t.type = _ = A1(_), I = cS(null, t, _, N, o), I;
        case We: {
          if (t.type !== t.elementType) {
            var z = _.propTypes;
            z && mi(
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
            Ci(_.type, N),
            // The inner type can have defaults too
            o
          ), I;
        }
      }
      var G = "";
      throw _ !== null && typeof _ == "object" && _.$$typeof === _t && (G = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + _ + ". " + ("Lazy element type must resolve to a class or function." + G));
    }
    function sR(e, t, a, o, l) {
      ny(e, t), t.tag = b;
      var s;
      return ol(a) ? (s = !0, dm(t)) : s = !1, Kf(t, l), aS(t, a, o), Y0(t, a, o, l), r1(null, t, a, !0, s, l);
    }
    function cR(e, t, a, o) {
      ny(e, t);
      var l = t.pendingProps, s;
      {
        var v = $f(t, a, !1);
        s = Bf(t, v);
      }
      Kf(t, o);
      var y, _;
      wa(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var T = Ft(a) || "Unknown";
          X0[T] || (h("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", T, T), X0[T] = !0);
        }
        t.mode & an && gi.recordLegacyContextWarning(t, null), Jn(!0), ev.current = t, y = nd(null, t, a, l, s, o), _ = rd(), Jn(!1);
      }
      if (ba(), t.flags |= po, typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0) {
        var N = Ft(a) || "Unknown";
        tv[N] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", N, N, N), tv[N] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0
      ) {
        {
          var I = Ft(a) || "Unknown";
          tv[I] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", I, I, I), tv[I] = !0);
        }
        t.tag = b, t.memoizedState = null, t.updateQueue = null;
        var z = !1;
        return ol(a) ? (z = !0, dm(t)) : z = !1, t.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, n0(t), rS(t, y), Y0(t, a, l, o), r1(null, t, a, !0, z, o);
      } else {
        if (t.tag = R, t.mode & an) {
          wn(!0);
          try {
            y = nd(null, t, a, l, s, o), _ = rd();
          } finally {
            wn(!1);
          }
        }
        return qr() && _ && Ug(t), Ta(null, t, y, o), a1(t, a), t.child;
      }
    }
    function a1(e, t) {
      {
        if (t && t.childContextTypes && h("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", o = Pr();
          o && (a += `

Check the render method of \`` + o + "`.");
          var l = o || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), e1[l] || (e1[l] = !0, h("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var v = Ft(t) || "Unknown";
          nv[v] || (h("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", v), nv[v] = !0);
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
      retryLane: Ht
    };
    function i1(e) {
      return {
        baseLanes: e,
        cachePool: eR(),
        transitions: null
      };
    }
    function fR(e, t) {
      var a = null;
      return {
        baseLanes: wt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function dR(e, t, a, o) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return l0(e, qp);
    }
    function pR(e, t) {
      return $s(e.childLanes, t);
    }
    function gS(e, t, a) {
      var o = t.pendingProps;
      ET(t) && (t.flags |= rt);
      var l = _i.current, s = !1, v = (t.flags & rt) !== ot;
      if (v || dR(l, e) ? (s = !0, t.flags &= ~rt) : (e === null || e.memoizedState !== null) && (l = Mb(l, b2)), l = Jf(l), es(t, l), e === null) {
        Vg(t);
        var y = t.memoizedState;
        if (y !== null) {
          var _ = y.dehydrated;
          if (_ !== null)
            return gR(t, _);
        }
        var T = o.children, N = o.fallback;
        if (s) {
          var I = vR(t, T, N, a), z = t.child;
          return z.memoizedState = i1(a), t.memoizedState = o1, I;
        } else
          return l1(t, T);
      } else {
        var G = e.memoizedState;
        if (G !== null) {
          var X = G.dehydrated;
          if (X !== null)
            return _R(e, t, v, o, X, G, a);
        }
        if (s) {
          var ne = o.fallback, Ie = o.children, st = mR(e, t, Ie, ne, a), nt = t.child, It = e.child.memoizedState;
          return nt.memoizedState = It === null ? i1(a) : fR(It, a), nt.childLanes = pR(e, a), t.memoizedState = o1, st;
        } else {
          var Lt = o.children, B = hR(e, t, Lt, a);
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
    function vR(e, t, a, o) {
      var l = e.mode, s = e.child, v = {
        mode: "hidden",
        children: t
      }, y, _;
      return (l & Nt) === it && s !== null ? (y = s, y.childLanes = fe, y.pendingProps = v, e.mode & Bt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = 0, y.treeBaseDuration = 0), _ = us(a, l, o, null)) : (y = u1(v, l), _ = us(a, l, o, null)), y.return = e, _.return = e, y.sibling = _, e.child = y, _;
    }
    function u1(e, t, a) {
      return _C(e, t, fe, null);
    }
    function _S(e, t) {
      return wc(e, t);
    }
    function hR(e, t, a, o) {
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
    function mR(e, t, a, o, l) {
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
        T = N, T.childLanes = fe, T.pendingProps = _, t.mode & Bt && (T.actualDuration = 0, T.actualStartTime = -1, T.selfBaseDuration = v.selfBaseDuration, T.treeBaseDuration = v.treeBaseDuration), t.deletions = null;
      } else
        T = _S(v, _), T.subtreeFlags = v.subtreeFlags & Hn;
      var I;
      return y !== null ? I = wc(y, o) : (I = us(o, s, l, null), I.flags |= xn), I.return = t, T.return = t, T.sibling = I, t.child = T, I;
    }
    function ty(e, t, a, o) {
      o !== null && Hg(o), Gf(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, v = l1(t, s);
      return v.flags |= xn, t.memoizedState = null, v;
    }
    function yR(e, t, a, o, l) {
      var s = t.mode, v = {
        mode: "visible",
        children: a
      }, y = u1(v, s), _ = us(o, s, l, null);
      return _.flags |= xn, y.return = t, _.return = t, y.sibling = _, t.child = y, (t.mode & Nt) !== it && Gf(t, e.child, null, l), _;
    }
    function gR(e, t, a) {
      return (e.mode & Nt) === it ? (h("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ht) : Rg(t) ? e.lanes = Mr : e.lanes = ua, null;
    }
    function _R(e, t, a, o, l, s, v) {
      if (a)
        if (t.flags & Dr) {
          t.flags &= ~Dr;
          var B = G0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return ty(e, t, v, B);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= rt, null;
          var re = o.children, q = o.fallback, Se = yR(e, t, re, q, v), Be = t.child;
          return Be.memoizedState = i1(v), t.memoizedState = o1, Se;
        }
      else {
        if (ib(), (t.mode & Nt) === it)
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
            var N = xw(l);
            y = N.digest, _ = N.message, T = N.stack;
          }
          var I;
          _ ? I = new Error(_) : I = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var z = G0(I, y, T);
          return ty(e, t, v, z);
        }
        var G = sa(v, e.childLanes);
        if (Ei || G) {
          var X = dy();
          if (X !== null) {
            var ne = op(X, v);
            if (ne !== Ht && ne !== s.retryLane) {
              s.retryLane = ne;
              var Ie = un;
              Qa(e, ne), Rr(X, e, ne, Ie);
            }
          }
          N1();
          var st = G0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return ty(e, t, v, st);
        } else if (H_(l)) {
          t.flags |= rt, t.child = e.child;
          var nt = Bk.bind(null, e);
          return ww(l, nt), null;
        } else {
          sb(t, l, s.treeContext);
          var It = o.children, Lt = l1(t, It);
          return Lt.flags |= aa, Lt;
        }
      }
    }
    function SS(e, t, a) {
      e.lanes = wt(e.lanes, t);
      var o = e.alternate;
      o !== null && (o.lanes = wt(o.lanes, t)), Jg(e.return, t, a);
    }
    function SR(e, t, a) {
      for (var o = t; o !== null; ) {
        if (o.tag === se) {
          var l = o.memoizedState;
          l !== null && SS(o, a, e);
        } else if (o.tag === te)
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
    function CR(e) {
      for (var t = e, a = null; t !== null; ) {
        var o = t.alternate;
        o !== null && Lm(o) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function ER(e) {
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
    function xR(e, t) {
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
      ER(l), xR(s, l), wR(v, l), Ta(e, t, v, a);
      var y = _i.current, _ = l0(y, qp);
      if (_)
        y = u0(y, qp), t.flags |= rt;
      else {
        var T = e !== null && (e.flags & rt) !== ot;
        T && SR(t, t.child, a), y = Jf(y);
      }
      if (es(t, y), (t.mode & Nt) === it)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var N = CR(t.child), I;
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
              var ne = G.sibling;
              G.sibling = z, z = G, G = ne;
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
    function bR(e, t, a) {
      a0(t, t.stateNode.containerInfo);
      var o = t.pendingProps;
      return e === null ? t.child = Gf(t, null, o, a) : Ta(e, t, o, a), t.child;
    }
    var xS = !1;
    function RR(e, t, a) {
      var o = t.type, l = o._context, s = t.pendingProps, v = t.memoizedProps, y = s.value;
      {
        "value" in s || xS || (xS = !0, h("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var _ = t.type.propTypes;
        _ && mi(_, s, "prop", "Context.Provider");
      }
      if (h2(t, l, y), v !== null) {
        var T = v.value;
        if (ye(T, y)) {
          if (v.children === s.children && !cm())
            return ru(e, t, a);
        } else
          Eb(t, l, a);
      }
      var N = s.children;
      return Ta(e, t, N, a), t.child;
    }
    var wS = !1;
    function kR(e, t, a) {
      var o = t.type;
      o._context === void 0 ? o !== o.Consumer && (wS || (wS = !0, h("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : o = o._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && h("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Kf(t, a);
      var v = cr(o);
      wa(t);
      var y;
      return ev.current = t, Jn(!0), y = s(v), Jn(!1), ba(), t.flags |= po, Ta(e, t, y, a), t.child;
    }
    function rv() {
      Ei = !0;
    }
    function ny(e, t) {
      (t.mode & Nt) === it && e !== null && (e.alternate = null, t.alternate = null, t.flags |= xn);
    }
    function ru(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), Z2(), hv(t.lanes), sa(a, t.childLanes) ? (Sb(e, t), t.child) : null;
    }
    function TR(e, t, a) {
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
        return s === null ? (o.deletions = [e], o.flags |= Ia) : s.push(e), a.flags |= xn, a;
      }
    }
    function c1(e, t) {
      var a = e.lanes;
      return !!sa(a, t);
    }
    function NR(e, t, a) {
      switch (t.tag) {
        case A:
          mS(t), t.stateNode, Yf();
          break;
        case H:
          x2(t);
          break;
        case b: {
          var o = t.type;
          ol(o) && dm(t);
          break;
        }
        case V:
          a0(t, t.stateNode.containerInfo);
          break;
        case Ee: {
          var l = t.memoizedProps.value, s = t.type._context;
          h2(t, s, l);
          break;
        }
        case le:
          {
            var v = sa(a, t.childLanes);
            v && (t.flags |= Ut);
            {
              var y = t.stateNode;
              y.effectDuration = 0, y.passiveEffectDuration = 0;
            }
          }
          break;
        case se: {
          var _ = t.memoizedState;
          if (_ !== null) {
            if (_.dehydrated !== null)
              return es(t, Jf(_i.current)), t.flags |= rt, null;
            var T = t.child, N = T.childLanes;
            if (sa(a, N))
              return gS(e, t, a);
            es(t, Jf(_i.current));
            var I = ru(e, t, a);
            return I !== null ? I.sibling : null;
          } else
            es(t, Jf(_i.current));
          break;
        }
        case te: {
          var z = (e.flags & rt) !== ot, G = sa(a, t.childLanes);
          if (z) {
            if (G)
              return ES(e, t, a);
            t.flags |= rt;
          }
          var X = t.memoizedState;
          if (X !== null && (X.rendering = null, X.tail = null, X.lastEffect = null), es(t, _i.current), G)
            break;
          return null;
        }
        case Y:
        case ve:
          return t.lanes = fe, pS(e, t, a);
      }
      return ru(e, t, a);
    }
    function bS(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return TR(e, t, F1(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var o = e.memoizedProps, l = t.pendingProps;
        if (o !== l || cm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Ei = !0;
        else {
          var s = c1(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & rt) === ot)
            return Ei = !1, NR(e, t, a);
          (e.flags & qc) !== ot ? Ei = !0 : Ei = !1;
        }
      } else if (Ei = !1, qr() && eb(t)) {
        var v = t.index, y = tb();
        Z_(t, y, v);
      }
      switch (t.lanes = fe, t.tag) {
        case D:
          return cR(e, t, t.type, a);
        case je: {
          var _ = t.elementType;
          return uR(e, t, _, a);
        }
        case R: {
          var T = t.type, N = t.pendingProps, I = t.elementType === T ? N : Ci(T, N);
          return n1(e, t, T, I, a);
        }
        case b: {
          var z = t.type, G = t.pendingProps, X = t.elementType === z ? G : Ci(z, G);
          return hS(e, t, z, X, a);
        }
        case A:
          return oR(e, t, a);
        case H:
          return iR(e, t, a);
        case ae:
          return lR(e, t);
        case se:
          return gS(e, t, a);
        case V:
          return bR(e, t, a);
        case Ce: {
          var ne = t.type, Ie = t.pendingProps, st = t.elementType === ne ? Ie : Ci(ne, Ie);
          return cS(e, t, ne, st, a);
        }
        case ie:
          return nR(e, t, a);
        case xe:
          return rR(e, t, a);
        case le:
          return aR(e, t, a);
        case Ee:
          return RR(e, t, a);
        case we:
          return kR(e, t, a);
        case We: {
          var nt = t.type, It = t.pendingProps, Lt = Ci(nt, It);
          if (t.type !== t.elementType) {
            var B = nt.propTypes;
            B && mi(
              B,
              Lt,
              // Resolved for outer only
              "prop",
              Ft(nt)
            );
          }
          return Lt = Ci(nt.type, Lt), fS(e, t, nt, Lt, a);
        }
        case Le:
          return dS(e, t, t.type, t.pendingProps, a);
        case Ge: {
          var re = t.type, q = t.pendingProps, Se = t.elementType === re ? q : Ci(re, q);
          return sR(e, t, re, Se, a);
        }
        case te:
          return ES(e, t, a);
        case L:
          break;
        case Y:
          return pS(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function ad(e) {
      e.flags |= Ut;
    }
    function RS(e) {
      e.flags |= Tn, e.flags |= Lu;
    }
    var kS, f1, TS, NS;
    kS = function(e, t, a, o) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === H || l.tag === ae)
          Xx(e, l.stateNode);
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
        var v = t.stateNode, y = o0(), _ = Zx(v, a, s, o, l, y);
        t.updateQueue = _, _ && ad(t);
      }
    }, NS = function(e, t, a, o) {
      a !== o && ad(t);
    };
    function av(e, t) {
      if (!qr())
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
    function Yr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = fe, o = ot;
      if (t) {
        if ((e.mode & Bt) !== it) {
          for (var _ = e.selfBaseDuration, T = e.child; T !== null; )
            a = wt(a, wt(T.lanes, T.childLanes)), o |= T.subtreeFlags & Hn, o |= T.flags & Hn, _ += T.treeBaseDuration, T = T.sibling;
          e.treeBaseDuration = _;
        } else
          for (var N = e.child; N !== null; )
            a = wt(a, wt(N.lanes, N.childLanes)), o |= N.subtreeFlags & Hn, o |= N.flags & Hn, N.return = e, N = N.sibling;
        e.subtreeFlags |= o;
      } else {
        if ((e.mode & Bt) !== it) {
          for (var l = e.actualDuration, s = e.selfBaseDuration, v = e.child; v !== null; )
            a = wt(a, wt(v.lanes, v.childLanes)), o |= v.subtreeFlags, o |= v.flags, l += v.actualDuration, s += v.treeBaseDuration, v = v.sibling;
          e.actualDuration = l, e.treeBaseDuration = s;
        } else
          for (var y = e.child; y !== null; )
            a = wt(a, wt(y.lanes, y.childLanes)), o |= y.subtreeFlags, o |= y.flags, y.return = e, y = y.sibling;
        e.subtreeFlags |= o;
      }
      return e.childLanes = a, t;
    }
    function DR(e, t, a) {
      if (vb() && (t.mode & Nt) !== it && (t.flags & rt) === ot)
        return i2(t), Yf(), t.flags |= Dr | ks | ir, !1;
      var o = ym(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!o)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (db(t), Yr(t), (t.mode & Bt) !== it) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Yf(), (t.flags & rt) === ot && (t.memoizedState = null), t.flags |= Ut, Yr(t), (t.mode & Bt) !== it) {
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
    function DS(e, t, a) {
      var o = t.pendingProps;
      switch (zg(t), t.tag) {
        case D:
        case je:
        case Le:
        case R:
        case Ce:
        case ie:
        case xe:
        case le:
        case we:
        case We:
          return Yr(t), null;
        case b: {
          var l = t.type;
          return ol(l) && fm(t), Yr(t), null;
        }
        case A: {
          var s = t.stateNode;
          if (Xf(t), Lg(t), c0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var v = ym(t);
            if (v)
              ad(t);
            else if (e !== null) {
              var y = e.memoizedState;
              // Check if this is a client root
              (!y.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Dr) !== ot) && (t.flags |= Zn, l2());
            }
          }
          return f1(e, t), Yr(t), null;
        }
        case H: {
          i0(t);
          var _ = E2(), T = t.type;
          if (e !== null && t.stateNode != null)
            TS(e, t, T, o, _), e.ref !== t.ref && RS(t);
          else {
            if (!o) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Yr(t), null;
            }
            var N = o0(), I = ym(t);
            if (I)
              cb(t, _, N) && ad(t);
            else {
              var z = Kx(T, o, _, N, t);
              kS(z, t, !1, !1), t.stateNode = z, Jx(z, T, o, _) && ad(t);
            }
            t.ref !== null && RS(t);
          }
          return Yr(t), null;
        }
        case ae: {
          var G = o;
          if (e && t.stateNode != null) {
            var X = e.memoizedProps;
            NS(e, t, X, G);
          } else {
            if (typeof G != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var ne = E2(), Ie = o0(), st = ym(t);
            st ? fb(t) && ad(t) : t.stateNode = ew(G, ne, Ie, t);
          }
          return Yr(t), null;
        }
        case se: {
          Zf(t);
          var nt = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var It = DR(e, t, nt);
            if (!It)
              return t.flags & ir ? t : null;
          }
          if ((t.flags & rt) !== ot)
            return t.lanes = a, (t.mode & Bt) !== it && A0(t), t;
          var Lt = nt !== null, B = e !== null && e.memoizedState !== null;
          if (Lt !== B && Lt) {
            var re = t.child;
            if (re.flags |= Vn, (t.mode & Nt) !== it) {
              var q = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              q || l0(_i.current, b2) ? Mk() : N1();
            }
          }
          var Se = t.updateQueue;
          if (Se !== null && (t.flags |= Ut), Yr(t), (t.mode & Bt) !== it && Lt) {
            var Be = t.child;
            Be !== null && (t.treeBaseDuration -= Be.treeBaseDuration);
          }
          return null;
        }
        case V:
          return Xf(t), f1(e, t), e === null && Yw(t.stateNode.containerInfo), Yr(t), null;
        case Ee:
          var Fe = t.type._context;
          return Xg(Fe, t), Yr(t), null;
        case Ge: {
          var mt = t.type;
          return ol(mt) && fm(t), Yr(t), null;
        }
        case te: {
          Zf(t);
          var Ct = t.memoizedState;
          if (Ct === null)
            return Yr(t), null;
          var ln = (t.flags & rt) !== ot, Yt = Ct.rendering;
          if (Yt === null)
            if (ln)
              av(Ct, !1);
            else {
              var nr = Lk() && (e === null || (e.flags & rt) === ot);
              if (!nr)
                for (var Gt = t.child; Gt !== null; ) {
                  var Gn = Lm(Gt);
                  if (Gn !== null) {
                    ln = !0, t.flags |= rt, av(Ct, !1);
                    var ma = Gn.updateQueue;
                    return ma !== null && (t.updateQueue = ma, t.flags |= Ut), t.subtreeFlags = ot, Cb(t, a), es(t, u0(_i.current, qp)), t.child;
                  }
                  Gt = Gt.sibling;
                }
              Ct.tail !== null && er() > XS() && (t.flags |= rt, ln = !0, av(Ct, !1), t.lanes = Kd);
            }
          else {
            if (!ln) {
              var Jr = Lm(Yt);
              if (Jr !== null) {
                t.flags |= rt, ln = !0;
                var So = Jr.updateQueue;
                if (So !== null && (t.updateQueue = So, t.flags |= Ut), av(Ct, !0), Ct.tail === null && Ct.tailMode === "hidden" && !Yt.alternate && !qr())
                  return Yr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              er() * 2 - Ct.renderingStartTime > XS() && a !== ua && (t.flags |= rt, ln = !0, av(Ct, !1), t.lanes = Kd);
            }
            if (Ct.isBackwards)
              Yt.sibling = t.child, t.child = Yt;
            else {
              var Ma = Ct.last;
              Ma !== null ? Ma.sibling = Yt : t.child = Yt, Ct.last = Yt;
            }
          }
          if (Ct.tail !== null) {
            var Oa = Ct.tail;
            Ct.rendering = Oa, Ct.tail = Oa.sibling, Ct.renderingStartTime = er(), Oa.sibling = null;
            var ya = _i.current;
            return ln ? ya = u0(ya, qp) : ya = Jf(ya), es(t, ya), Oa;
          }
          return Yr(t), null;
        }
        case L:
          break;
        case Y:
        case ve: {
          T1(t);
          var uu = t.memoizedState, dd = uu !== null;
          if (e !== null) {
            var Sv = e.memoizedState, pl = Sv !== null;
            pl !== dd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ge && (t.flags |= Vn);
          }
          return !dd || (t.mode & Nt) === it ? Yr(t) : sa(dl, ua) && (Yr(t), t.subtreeFlags & (xn | Ut) && (t.flags |= Vn)), null;
        }
        case ke:
          return null;
        case ue:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function MR(e, t, a) {
      switch (zg(t), t.tag) {
        case b: {
          var o = t.type;
          ol(o) && fm(t);
          var l = t.flags;
          return l & ir ? (t.flags = l & ~ir | rt, (t.mode & Bt) !== it && A0(t), t) : null;
        }
        case A: {
          t.stateNode, Xf(t), Lg(t), c0();
          var s = t.flags;
          return (s & ir) !== ot && (s & rt) === ot ? (t.flags = s & ~ir | rt, t) : null;
        }
        case H:
          return i0(t), null;
        case se: {
          Zf(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Yf();
          }
          var y = t.flags;
          return y & ir ? (t.flags = y & ~ir | rt, (t.mode & Bt) !== it && A0(t), t) : null;
        }
        case te:
          return Zf(t), null;
        case V:
          return Xf(t), null;
        case Ee:
          var _ = t.type._context;
          return Xg(_, t), null;
        case Y:
        case ve:
          return T1(t), null;
        case ke:
          return null;
        default:
          return null;
      }
    }
    function MS(e, t, a) {
      switch (zg(t), t.tag) {
        case b: {
          var o = t.type.childContextTypes;
          o != null && fm(t);
          break;
        }
        case A: {
          t.stateNode, Xf(t), Lg(t), c0();
          break;
        }
        case H: {
          i0(t);
          break;
        }
        case V:
          Xf(t);
          break;
        case se:
          Zf(t);
          break;
        case te:
          Zf(t);
          break;
        case Ee:
          var l = t.type._context;
          Xg(l, t);
          break;
        case Y:
        case ve:
          T1(t);
          break;
      }
    }
    var OS = null;
    OS = /* @__PURE__ */ new Set();
    var ry = !1, Gr = !1, OR = typeof WeakSet == "function" ? WeakSet : Set, Xe = null, od = null, id = null;
    function LR(e) {
      Vi(null, function() {
        throw e;
      }), Rs();
    }
    var jR = function(e, t) {
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
        rs(Sr, e);
      } catch (a) {
        yn(e, t, a);
      }
    }
    function d1(e, t, a) {
      try {
        jR(e, a);
      } catch (o) {
        yn(e, t, o);
      }
    }
    function AR(e, t, a) {
      try {
        a.componentDidMount();
      } catch (o) {
        yn(e, t, o);
      }
    }
    function jS(e, t) {
      try {
        US(e);
      } catch (a) {
        yn(e, t, a);
      }
    }
    function ld(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var o;
          try {
            if (Ve && pt && e.mode & Bt)
              try {
                cl(), o = a(null);
              } finally {
                sl(e);
              }
            else
              o = a(null);
          } catch (l) {
            yn(e, t, l);
          }
          typeof o == "function" && h("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", gt(e));
        } else
          a.current = null;
    }
    function ay(e, t, a) {
      try {
        a();
      } catch (o) {
        yn(e, t, o);
      }
    }
    var AS = !1;
    function UR(e, t) {
      Gx(e.containerInfo), Xe = t, zR();
      var a = AS;
      return AS = !1, a;
    }
    function zR() {
      for (; Xe !== null; ) {
        var e = Xe, t = e.child;
        (e.subtreeFlags & $i) !== ot && t !== null ? (t.return = e, Xe = t) : PR();
      }
    }
    function PR() {
      for (; Xe !== null; ) {
        var e = Xe;
        tn(e);
        try {
          IR(e);
        } catch (a) {
          yn(e, e.return, a);
        }
        mn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Xe = t;
          return;
        }
        Xe = e.return;
      }
    }
    function IR(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Zn) !== ot) {
        switch (tn(e), e.tag) {
          case R:
          case Ce:
          case Le:
            break;
          case b: {
            if (t !== null) {
              var o = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !_c && (s.props !== e.memoizedProps && h("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(e) || "instance"), s.state !== e.memoizedState && h("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(e) || "instance"));
              var v = s.getSnapshotBeforeUpdate(e.elementType === e.type ? o : Ci(e.type, o), l);
              {
                var y = OS;
                v === void 0 && !y.has(e.type) && (y.add(e.type), h("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", gt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case A: {
            {
              var _ = e.stateNode;
              _w(_.containerInfo);
            }
            break;
          }
          case H:
          case ae:
          case V:
          case Ge:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        mn();
      }
    }
    function xi(e, t, a) {
      var o = t.updateQueue, l = o !== null ? o.lastEffect : null;
      if (l !== null) {
        var s = l.next, v = s;
        do {
          if ((v.tag & e) === e) {
            var y = v.destroy;
            v.destroy = void 0, y !== void 0 && ((e & Wr) !== Ka ? ci(t) : (e & Sr) !== Ka && Ns(t), (e & il) !== Ka && yv(!0), ay(t, a, y), (e & il) !== Ka && yv(!1), (e & Wr) !== Ka ? Yi() : (e & Sr) !== Ka && Gd());
          }
          v = v.next;
        } while (v !== s);
      }
    }
    function rs(e, t) {
      var a = t.updateQueue, o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var l = o.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & Wr) !== Ka ? Yd(t) : (e & Sr) !== Ka && Xc(t);
            var v = s.create;
            (e & il) !== Ka && yv(!0), s.destroy = v(), (e & il) !== Ka && yv(!1), (e & Wr) !== Ka ? sh() : (e & Sr) !== Ka && ch();
            {
              var y = s.destroy;
              if (y !== void 0 && typeof y != "function") {
                var _ = void 0;
                (s.tag & Sr) !== ot ? _ = "useLayoutEffect" : (s.tag & il) !== ot ? _ = "useInsertionEffect" : _ = "useEffect";
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
    function FR(e, t) {
      if ((t.flags & Ut) !== ot)
        switch (t.tag) {
          case le: {
            var a = t.stateNode.passiveEffectDuration, o = t.memoizedProps, l = o.id, s = o.onPostCommit, v = X2(), y = t.alternate === null ? "mount" : "update";
            K2() && (y = "nested-update"), typeof s == "function" && s(l, y, a, v);
            var _ = t.return;
            e: for (; _ !== null; ) {
              switch (_.tag) {
                case A:
                  var T = _.stateNode;
                  T.passiveEffectDuration += a;
                  break e;
                case le:
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
    function VR(e, t, a, o) {
      if ((a.flags & qi) !== ot)
        switch (a.tag) {
          case R:
          case Ce:
          case Le: {
            if (!Gr)
              if (a.mode & Bt)
                try {
                  cl(), rs(Sr | _r, a);
                } finally {
                  sl(a);
                }
              else
                rs(Sr | _r, a);
            break;
          }
          case b: {
            var l = a.stateNode;
            if (a.flags & Ut && !Gr)
              if (t === null)
                if (a.type === a.elementType && !_c && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(a) || "instance")), a.mode & Bt)
                  try {
                    cl(), l.componentDidMount();
                  } finally {
                    sl(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Ci(a.type, t.memoizedProps), v = t.memoizedState;
                if (a.type === a.elementType && !_c && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(a) || "instance")), a.mode & Bt)
                  try {
                    cl(), l.componentDidUpdate(s, v, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    sl(a);
                  }
                else
                  l.componentDidUpdate(s, v, l.__reactInternalSnapshotBeforeUpdate);
              }
            var y = a.updateQueue;
            y !== null && (a.type === a.elementType && !_c && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(a) || "instance")), C2(a, y, l));
            break;
          }
          case A: {
            var _ = a.updateQueue;
            if (_ !== null) {
              var T = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case H:
                    T = a.child.stateNode;
                    break;
                  case b:
                    T = a.child.stateNode;
                    break;
                }
              C2(a, _, T);
            }
            break;
          }
          case H: {
            var N = a.stateNode;
            if (t === null && a.flags & Ut) {
              var I = a.type, z = a.memoizedProps;
              ow(N, I, z);
            }
            break;
          }
          case ae:
            break;
          case V:
            break;
          case le: {
            {
              var G = a.memoizedProps, X = G.onCommit, ne = G.onRender, Ie = a.stateNode.effectDuration, st = X2(), nt = t === null ? "mount" : "update";
              K2() && (nt = "nested-update"), typeof ne == "function" && ne(a.memoizedProps.id, nt, a.actualDuration, a.treeBaseDuration, a.actualStartTime, st);
              {
                typeof X == "function" && X(a.memoizedProps.id, nt, Ie, st), Pk(a);
                var It = a.return;
                e: for (; It !== null; ) {
                  switch (It.tag) {
                    case A:
                      var Lt = It.stateNode;
                      Lt.effectDuration += Ie;
                      break e;
                    case le:
                      var B = It.stateNode;
                      B.effectDuration += Ie;
                      break e;
                  }
                  It = It.return;
                }
              }
            }
            break;
          }
          case se: {
            QR(e, a);
            break;
          }
          case te:
          case Ge:
          case L:
          case Y:
          case ve:
          case ue:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Gr || a.flags & Tn && US(a);
    }
    function HR(e) {
      switch (e.tag) {
        case R:
        case Ce:
        case Le: {
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
        case b: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && AR(e, e.return, t), jS(e, e.return);
          break;
        }
        case H: {
          jS(e, e.return);
          break;
        }
      }
    }
    function $R(e, t) {
      for (var a = null, o = e; ; ) {
        if (o.tag === H) {
          if (a === null) {
            a = o;
            try {
              var l = o.stateNode;
              t ? hw(l) : yw(o.stateNode, o.memoizedProps);
            } catch (v) {
              yn(e, e.return, v);
            }
          }
        } else if (o.tag === ae) {
          if (a === null)
            try {
              var s = o.stateNode;
              t ? mw(s) : gw(s, o.memoizedProps);
            } catch (v) {
              yn(e, e.return, v);
            }
        } else if (!((o.tag === Y || o.tag === ve) && o.memoizedState !== null && o !== e)) {
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
        if (e.tag === H ? o = a : o = a, typeof t == "function") {
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
    function BR(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function zS(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, zS(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === H) {
          var a = e.stateNode;
          a !== null && Kw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function qR(e) {
      for (var t = e.return; t !== null; ) {
        if (PS(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function PS(e) {
      return e.tag === H || e.tag === A || e.tag === V;
    }
    function IS(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || PS(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== H && t.tag !== ae && t.tag !== Je; ) {
          if (t.flags & xn || t.child === null || t.tag === V)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & xn))
          return t.stateNode;
      }
    }
    function WR(e) {
      var t = qR(e);
      switch (t.tag) {
        case H: {
          var a = t.stateNode;
          t.flags & Fa && (V_(a), t.flags &= ~Fa);
          var o = IS(e);
          v1(e, o, a);
          break;
        }
        case A:
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
      var o = e.tag, l = o === H || o === ae;
      if (l) {
        var s = e.stateNode;
        t ? fw(a, s, t) : sw(a, s);
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
      var o = e.tag, l = o === H || o === ae;
      if (l) {
        var s = e.stateNode;
        t ? cw(a, s, t) : uw(a, s);
      } else if (o !== V) {
        var v = e.child;
        if (v !== null) {
          v1(v, t, a);
          for (var y = v.sibling; y !== null; )
            v1(y, t, a), y = y.sibling;
        }
      }
    }
    var Qr = null, wi = !1;
    function YR(e, t, a) {
      {
        var o = t;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case H: {
              Qr = o.stateNode, wi = !1;
              break e;
            }
            case A: {
              Qr = o.stateNode.containerInfo, wi = !0;
              break e;
            }
            case V: {
              Qr = o.stateNode.containerInfo, wi = !0;
              break e;
            }
          }
          o = o.return;
        }
        if (Qr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        FS(e, t, a), Qr = null, wi = !1;
      }
      BR(a);
    }
    function as(e, t, a) {
      for (var o = a.child; o !== null; )
        FS(e, t, o), o = o.sibling;
    }
    function FS(e, t, a) {
      switch (Bd(a), a.tag) {
        case H:
          Gr || ld(a, t);
        // eslint-disable-next-line-no-fallthrough
        case ae: {
          {
            var o = Qr, l = wi;
            Qr = null, as(e, t, a), Qr = o, wi = l, Qr !== null && (wi ? pw(Qr, a.stateNode) : dw(Qr, a.stateNode));
          }
          return;
        }
        case Je: {
          Qr !== null && (wi ? vw(Qr, a.stateNode) : bg(Qr, a.stateNode));
          return;
        }
        case V: {
          {
            var s = Qr, v = wi;
            Qr = a.stateNode.containerInfo, wi = !0, as(e, t, a), Qr = s, wi = v;
          }
          return;
        }
        case R:
        case Ce:
        case We:
        case Le: {
          if (!Gr) {
            var y = a.updateQueue;
            if (y !== null) {
              var _ = y.lastEffect;
              if (_ !== null) {
                var T = _.next, N = T;
                do {
                  var I = N, z = I.destroy, G = I.tag;
                  z !== void 0 && ((G & il) !== Ka ? ay(a, t, z) : (G & Sr) !== Ka && (Ns(a), a.mode & Bt ? (cl(), ay(a, t, z), sl(a)) : ay(a, t, z), Gd())), N = N.next;
                } while (N !== T);
              }
            }
          }
          as(e, t, a);
          return;
        }
        case b: {
          if (!Gr) {
            ld(a, t);
            var X = a.stateNode;
            typeof X.componentWillUnmount == "function" && d1(a, t, X);
          }
          as(e, t, a);
          return;
        }
        case L: {
          as(e, t, a);
          return;
        }
        case Y: {
          if (
            // TODO: Remove this dead flag
            a.mode & Nt
          ) {
            var ne = Gr;
            Gr = ne || a.memoizedState !== null, as(e, t, a), Gr = ne;
          } else
            as(e, t, a);
          break;
        }
        default: {
          as(e, t, a);
          return;
        }
      }
    }
    function GR(e) {
      e.memoizedState;
    }
    function QR(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var o = t.alternate;
        if (o !== null) {
          var l = o.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && Lw(s);
          }
        }
      }
    }
    function VS(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new OR()), t.forEach(function(o) {
          var l = qk.bind(null, e, o);
          if (!a.has(o)) {
            if (a.add(o), la)
              if (od !== null && id !== null)
                mv(id, od);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            o.then(l, l);
          }
        });
      }
    }
    function KR(e, t, a) {
      od = a, id = e, tn(t), HS(t, e), tn(t), od = null, id = null;
    }
    function bi(e, t, a) {
      var o = t.deletions;
      if (o !== null)
        for (var l = 0; l < o.length; l++) {
          var s = o[l];
          try {
            YR(e, t, s);
          } catch (_) {
            yn(s, t, _);
          }
        }
      var v = ji();
      if (t.subtreeFlags & Bi)
        for (var y = t.child; y !== null; )
          tn(y), HS(y, e), y = y.sibling;
      tn(v);
    }
    function HS(e, t, a) {
      var o = e.alternate, l = e.flags;
      switch (e.tag) {
        case R:
        case Ce:
        case We:
        case Le: {
          if (bi(t, e), fl(e), l & Ut) {
            try {
              xi(il | _r, e, e.return), rs(il | _r, e);
            } catch (mt) {
              yn(e, e.return, mt);
            }
            if (e.mode & Bt) {
              try {
                cl(), xi(Sr | _r, e, e.return);
              } catch (mt) {
                yn(e, e.return, mt);
              }
              sl(e);
            } else
              try {
                xi(Sr | _r, e, e.return);
              } catch (mt) {
                yn(e, e.return, mt);
              }
          }
          return;
        }
        case b: {
          bi(t, e), fl(e), l & Tn && o !== null && ld(o, o.return);
          return;
        }
        case H: {
          bi(t, e), fl(e), l & Tn && o !== null && ld(o, o.return);
          {
            if (e.flags & Fa) {
              var s = e.stateNode;
              try {
                V_(s);
              } catch (mt) {
                yn(e, e.return, mt);
              }
            }
            if (l & Ut) {
              var v = e.stateNode;
              if (v != null) {
                var y = e.memoizedProps, _ = o !== null ? o.memoizedProps : y, T = e.type, N = e.updateQueue;
                if (e.updateQueue = null, N !== null)
                  try {
                    iw(v, N, T, _, y, e);
                  } catch (mt) {
                    yn(e, e.return, mt);
                  }
              }
            }
          }
          return;
        }
        case ae: {
          if (bi(t, e), fl(e), l & Ut) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var I = e.stateNode, z = e.memoizedProps, G = o !== null ? o.memoizedProps : z;
            try {
              lw(I, G, z);
            } catch (mt) {
              yn(e, e.return, mt);
            }
          }
          return;
        }
        case A: {
          if (bi(t, e), fl(e), l & Ut && o !== null) {
            var X = o.memoizedState;
            if (X.isDehydrated)
              try {
                Ow(t.containerInfo);
              } catch (mt) {
                yn(e, e.return, mt);
              }
          }
          return;
        }
        case V: {
          bi(t, e), fl(e);
          return;
        }
        case se: {
          bi(t, e), fl(e);
          var ne = e.child;
          if (ne.flags & Vn) {
            var Ie = ne.stateNode, st = ne.memoizedState, nt = st !== null;
            if (Ie.isHidden = nt, nt) {
              var It = ne.alternate !== null && ne.alternate.memoizedState !== null;
              It || Dk();
            }
          }
          if (l & Ut) {
            try {
              GR(e);
            } catch (mt) {
              yn(e, e.return, mt);
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
            var B = Gr;
            Gr = B || Lt, bi(t, e), Gr = B;
          } else
            bi(t, e);
          if (fl(e), l & Vn) {
            var re = e.stateNode, q = e.memoizedState, Se = q !== null, Be = e;
            if (re.isHidden = Se, Se && !Lt && (Be.mode & Nt) !== it) {
              Xe = Be;
              for (var Fe = Be.child; Fe !== null; )
                Xe = Fe, JR(Fe), Fe = Fe.sibling;
            }
            $R(Be, Se);
          }
          return;
        }
        case te: {
          bi(t, e), fl(e), l & Ut && VS(e);
          return;
        }
        case L:
          return;
        default: {
          bi(t, e), fl(e);
          return;
        }
      }
    }
    function fl(e) {
      var t = e.flags;
      if (t & xn) {
        try {
          WR(e);
        } catch (a) {
          yn(e, e.return, a);
        }
        e.flags &= ~xn;
      }
      t & aa && (e.flags &= ~aa);
    }
    function XR(e, t, a) {
      od = a, id = t, Xe = e, $S(e, t, a), od = null, id = null;
    }
    function $S(e, t, a) {
      for (var o = (e.mode & Nt) !== it; Xe !== null; ) {
        var l = Xe, s = l.child;
        if (l.tag === Y && o) {
          var v = l.memoizedState !== null, y = v || ry;
          if (y) {
            h1(e, t, a);
            continue;
          } else {
            var _ = l.alternate, T = _ !== null && _.memoizedState !== null, N = T || Gr, I = ry, z = Gr;
            ry = y, Gr = N, Gr && !z && (Xe = l, ZR(l));
            for (var G = s; G !== null; )
              Xe = G, $S(
                G,
                // New root; bubble back up to here and stop.
                t,
                a
              ), G = G.sibling;
            Xe = l, ry = I, Gr = z, h1(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & qi) !== ot && s !== null ? (s.return = l, Xe = s) : h1(e, t, a);
      }
    }
    function h1(e, t, a) {
      for (; Xe !== null; ) {
        var o = Xe;
        if ((o.flags & qi) !== ot) {
          var l = o.alternate;
          tn(o);
          try {
            VR(t, l, o, a);
          } catch (v) {
            yn(o, o.return, v);
          }
          mn();
        }
        if (o === e) {
          Xe = null;
          return;
        }
        var s = o.sibling;
        if (s !== null) {
          s.return = o.return, Xe = s;
          return;
        }
        Xe = o.return;
      }
    }
    function JR(e) {
      for (; Xe !== null; ) {
        var t = Xe, a = t.child;
        switch (t.tag) {
          case R:
          case Ce:
          case We:
          case Le: {
            if (t.mode & Bt)
              try {
                cl(), xi(Sr, t, t.return);
              } finally {
                sl(t);
              }
            else
              xi(Sr, t, t.return);
            break;
          }
          case b: {
            ld(t, t.return);
            var o = t.stateNode;
            typeof o.componentWillUnmount == "function" && d1(t, t.return, o);
            break;
          }
          case H: {
            ld(t, t.return);
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
        a !== null ? (a.return = t, Xe = a) : BS(e);
      }
    }
    function BS(e) {
      for (; Xe !== null; ) {
        var t = Xe;
        if (t === e) {
          Xe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Xe = a;
          return;
        }
        Xe = t.return;
      }
    }
    function ZR(e) {
      for (; Xe !== null; ) {
        var t = Xe, a = t.child;
        if (t.tag === Y) {
          var o = t.memoizedState !== null;
          if (o) {
            qS(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Xe = a) : qS(e);
      }
    }
    function qS(e) {
      for (; Xe !== null; ) {
        var t = Xe;
        tn(t);
        try {
          HR(t);
        } catch (o) {
          yn(t, t.return, o);
        }
        if (mn(), t === e) {
          Xe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Xe = a;
          return;
        }
        Xe = t.return;
      }
    }
    function ek(e, t, a, o) {
      Xe = t, tk(t, e, a, o);
    }
    function tk(e, t, a, o) {
      for (; Xe !== null; ) {
        var l = Xe, s = l.child;
        (l.subtreeFlags & ui) !== ot && s !== null ? (s.return = l, Xe = s) : nk(e, t, a, o);
      }
    }
    function nk(e, t, a, o) {
      for (; Xe !== null; ) {
        var l = Xe;
        if ((l.flags & ra) !== ot) {
          tn(l);
          try {
            rk(t, l, a, o);
          } catch (v) {
            yn(l, l.return, v);
          }
          mn();
        }
        if (l === e) {
          Xe = null;
          return;
        }
        var s = l.sibling;
        if (s !== null) {
          s.return = l.return, Xe = s;
          return;
        }
        Xe = l.return;
      }
    }
    function rk(e, t, a, o) {
      switch (t.tag) {
        case R:
        case Ce:
        case Le: {
          if (t.mode & Bt) {
            j0();
            try {
              rs(Wr | _r, t);
            } finally {
              L0(t);
            }
          } else
            rs(Wr | _r, t);
          break;
        }
      }
    }
    function ak(e) {
      Xe = e, ok();
    }
    function ok() {
      for (; Xe !== null; ) {
        var e = Xe, t = e.child;
        if ((Xe.flags & Ia) !== ot) {
          var a = e.deletions;
          if (a !== null) {
            for (var o = 0; o < a.length; o++) {
              var l = a[o];
              Xe = l, uk(l, e);
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
            Xe = e;
          }
        }
        (e.subtreeFlags & ui) !== ot && t !== null ? (t.return = e, Xe = t) : ik();
      }
    }
    function ik() {
      for (; Xe !== null; ) {
        var e = Xe;
        (e.flags & ra) !== ot && (tn(e), lk(e), mn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Xe = t;
          return;
        }
        Xe = e.return;
      }
    }
    function lk(e) {
      switch (e.tag) {
        case R:
        case Ce:
        case Le: {
          e.mode & Bt ? (j0(), xi(Wr | _r, e, e.return), L0(e)) : xi(Wr | _r, e, e.return);
          break;
        }
      }
    }
    function uk(e, t) {
      for (; Xe !== null; ) {
        var a = Xe;
        tn(a), ck(a, t), mn();
        var o = a.child;
        o !== null ? (o.return = a, Xe = o) : sk(e);
      }
    }
    function sk(e) {
      for (; Xe !== null; ) {
        var t = Xe, a = t.sibling, o = t.return;
        if (zS(t), t === e) {
          Xe = null;
          return;
        }
        if (a !== null) {
          a.return = o, Xe = a;
          return;
        }
        Xe = o;
      }
    }
    function ck(e, t) {
      switch (e.tag) {
        case R:
        case Ce:
        case Le: {
          e.mode & Bt ? (j0(), xi(Wr, e, t), L0(e)) : xi(Wr, e, t);
          break;
        }
      }
    }
    function fk(e) {
      switch (e.tag) {
        case R:
        case Ce:
        case Le: {
          try {
            rs(Sr | _r, e);
          } catch (a) {
            yn(e, e.return, a);
          }
          break;
        }
        case b: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            yn(e, e.return, a);
          }
          break;
        }
      }
    }
    function dk(e) {
      switch (e.tag) {
        case R:
        case Ce:
        case Le: {
          try {
            rs(Wr | _r, e);
          } catch (t) {
            yn(e, e.return, t);
          }
          break;
        }
      }
    }
    function pk(e) {
      switch (e.tag) {
        case R:
        case Ce:
        case Le: {
          try {
            xi(Sr | _r, e, e.return);
          } catch (a) {
            yn(e, e.return, a);
          }
          break;
        }
        case b: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && d1(e, e.return, t);
          break;
        }
      }
    }
    function vk(e) {
      switch (e.tag) {
        case R:
        case Ce:
        case Le:
          try {
            xi(Wr | _r, e, e.return);
          } catch (t) {
            yn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var ov = Symbol.for;
      ov("selector.component"), ov("selector.has_pseudo_class"), ov("selector.role"), ov("selector.test_id"), ov("selector.text");
    }
    var hk = [];
    function mk() {
      hk.forEach(function(e) {
        return e();
      });
    }
    var yk = d.ReactCurrentActQueue;
    function gk(e) {
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
        return !e && yk.current !== null && h("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var _k = Math.ceil, m1 = d.ReactCurrentDispatcher, y1 = d.ReactCurrentOwner, Kr = d.ReactCurrentBatchConfig, Ri = d.ReactCurrentActQueue, xr = (
      /*             */
      0
    ), YS = (
      /*               */
      1
    ), Xr = (
      /*                */
      2
    ), Go = (
      /*                */
      4
    ), au = 0, iv = 1, Sc = 2, oy = 3, lv = 4, GS = 5, g1 = 6, Pt = xr, Na = null, Pn = null, wr = fe, dl = fe, _1 = Gu(fe), br = au, uv = null, iy = fe, sv = fe, ly = fe, cv = null, Xa = null, S1 = 0, QS = 500, KS = 1 / 0, Sk = 500, ou = null;
    function fv() {
      KS = er() + Sk;
    }
    function XS() {
      return KS;
    }
    var uy = !1, C1 = null, ud = null, Cc = !1, os = null, dv = fe, E1 = [], x1 = null, Ck = 50, pv = 0, w1 = null, b1 = !1, sy = !1, Ek = 50, sd = 0, cy = null, vv = un, fy = fe, JS = !1;
    function dy() {
      return Na;
    }
    function Da() {
      return (Pt & (Xr | Go)) !== xr ? er() : (vv !== un || (vv = er()), vv);
    }
    function is(e) {
      var t = e.mode;
      if ((t & Nt) === it)
        return ht;
      if ((Pt & Xr) !== xr && wr !== fe)
        return Hs(wr);
      var a = yb() !== mb;
      if (a) {
        if (Kr.transition !== null) {
          var o = Kr.transition;
          o._updatedFibers || (o._updatedFibers = /* @__PURE__ */ new Set()), o._updatedFibers.add(e);
        }
        return fy === Ht && (fy = np()), fy;
      }
      var l = Wa();
      if (l !== Ht)
        return l;
      var s = tw();
      return s;
    }
    function xk(e) {
      var t = e.mode;
      return (t & Nt) === it ? ht : mh();
    }
    function Rr(e, t, a, o) {
      Yk(), JS && h("useInsertionEffect must not schedule updates."), b1 && (sy = !0), zu(e, a, o), (Pt & Xr) !== fe && e === Na ? Kk(t) : (la && qs(e, t, a), Xk(t), e === Na && ((Pt & Xr) === xr && (sv = wt(sv, a)), br === lv && ls(e, wr)), Ja(e, o), a === ht && Pt === xr && (t.mode & Nt) === it && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Ri.isBatchingLegacy && (fv(), J_()));
    }
    function wk(e, t, a) {
      var o = e.current;
      o.lanes = t, zu(e, t, a), Ja(e, a);
    }
    function bk(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Pt & Xr) !== xr
      );
    }
    function Ja(e, t) {
      var a = e.callbackNode;
      gf(e, t);
      var o = yf(e, e === Na ? wr : fe);
      if (o === fe) {
        a !== null && vC(a), e.callbackNode = null, e.callbackPriority = Ht;
        return;
      }
      var l = Ki(o), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Ri.current !== null && a !== O1)) {
        a == null && s !== ht && h("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && vC(a);
      var v;
      if (l === ht)
        e.tag === Qu ? (Ri.isBatchingLegacy !== null && (Ri.didScheduleLegacyUpdate = !0), Zw(tC.bind(null, e))) : X_(tC.bind(null, e)), Ri.current !== null ? Ri.current.push(Ku) : rw(function() {
          (Pt & (Xr | Go)) === xr && Ku();
        }), v = null;
      else {
        var y;
        switch (xh(o)) {
          case Fr:
            y = Ts;
            break;
          case Po:
            y = Wi;
            break;
          case Ba:
            y = si;
            break;
          case qa:
            y = Ol;
            break;
          default:
            y = si;
            break;
        }
        v = L1(y, ZS.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = v;
    }
    function ZS(e, t) {
      if ($b(), vv = un, fy = fe, (Pt & (Xr | Go)) !== xr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, o = lu();
      if (o && e.callbackNode !== a)
        return null;
      var l = yf(e, e === Na ? wr : fe);
      if (l === fe)
        return null;
      var s = !Sf(e, l) && !hh(e, l) && !t, v = s ? Ak(e, l) : vy(e, l);
      if (v !== au) {
        if (v === Sc) {
          var y = _f(e);
          y !== fe && (l = y, v = R1(e, y));
        }
        if (v === iv) {
          var _ = uv;
          throw Ec(e, fe), ls(e, l), Ja(e, er()), _;
        }
        if (v === g1)
          ls(e, l);
        else {
          var T = !Sf(e, l), N = e.current.alternate;
          if (T && !kk(N)) {
            if (v = vy(e, l), v === Sc) {
              var I = _f(e);
              I !== fe && (l = I, v = R1(e, I));
            }
            if (v === iv) {
              var z = uv;
              throw Ec(e, fe), ls(e, l), Ja(e, er()), z;
            }
          }
          e.finishedWork = N, e.finishedLanes = l, Rk(e, v, l);
        }
      }
      return Ja(e, er()), e.callbackNode === a ? ZS.bind(null, e) : null;
    }
    function R1(e, t) {
      var a = cv;
      if (xf(e)) {
        var o = Ec(e, t);
        o.flags |= Dr, Ww(e.containerInfo);
      }
      var l = vy(e, t);
      if (l !== Sc) {
        var s = Xa;
        Xa = a, s !== null && eC(s);
      }
      return l;
    }
    function eC(e) {
      Xa === null ? Xa = e : Xa.push.apply(Xa, e);
    }
    function Rk(e, t, a) {
      switch (t) {
        case au:
        case iv:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case Sc: {
          xc(e, Xa, ou);
          break;
        }
        case oy: {
          if (ls(e, a), $l(a) && // do not delay if we're inside an act() scope
          !hC()) {
            var o = S1 + QS - er();
            if (o > 10) {
              var l = yf(e, fe);
              if (l !== fe)
                break;
              var s = e.suspendedLanes;
              if (!Bl(s, a)) {
                Da(), Cf(e, s);
                break;
              }
              e.timeoutHandle = xg(xc.bind(null, e, Xa, ou), o);
              break;
            }
          }
          xc(e, Xa, ou);
          break;
        }
        case lv: {
          if (ls(e, a), ep(a))
            break;
          if (!hC()) {
            var v = ho(e, a), y = v, _ = er() - y, T = Wk(_) - _;
            if (T > 10) {
              e.timeoutHandle = xg(xc.bind(null, e, Xa, ou), T);
              break;
            }
          }
          xc(e, Xa, ou);
          break;
        }
        case GS: {
          xc(e, Xa, ou);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function kk(e) {
      for (var t = e; ; ) {
        if (t.flags & Ou) {
          var a = t.updateQueue;
          if (a !== null) {
            var o = a.stores;
            if (o !== null)
              for (var l = 0; l < o.length; l++) {
                var s = o[l], v = s.getSnapshot, y = s.value;
                try {
                  if (!ye(v(), y))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var _ = t.child;
        if (t.subtreeFlags & Ou && _ !== null) {
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
    function ls(e, t) {
      t = $s(t, ly), t = $s(t, sv), _h(e, t);
    }
    function tC(e) {
      if (Bb(), (Pt & (Xr | Go)) !== xr)
        throw new Error("Should not already be working.");
      lu();
      var t = yf(e, fe);
      if (!sa(t, ht))
        return Ja(e, er()), null;
      var a = vy(e, t);
      if (e.tag !== Qu && a === Sc) {
        var o = _f(e);
        o !== fe && (t = o, a = R1(e, o));
      }
      if (a === iv) {
        var l = uv;
        throw Ec(e, fe), ls(e, t), Ja(e, er()), l;
      }
      if (a === g1)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, xc(e, Xa, ou), Ja(e, er()), null;
    }
    function Tk(e, t) {
      t !== fe && (Ef(e, wt(t, ht)), Ja(e, er()), (Pt & (Xr | Go)) === xr && (fv(), Ku()));
    }
    function k1(e, t) {
      var a = Pt;
      Pt |= YS;
      try {
        return e(t);
      } finally {
        Pt = a, Pt === xr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Ri.isBatchingLegacy && (fv(), J_());
      }
    }
    function Nk(e, t, a, o, l) {
      var s = Wa(), v = Kr.transition;
      try {
        return Kr.transition = null, qn(Fr), e(t, a, o, l);
      } finally {
        qn(s), Kr.transition = v, Pt === xr && fv();
      }
    }
    function iu(e) {
      os !== null && os.tag === Qu && (Pt & (Xr | Go)) === xr && lu();
      var t = Pt;
      Pt |= YS;
      var a = Kr.transition, o = Wa();
      try {
        return Kr.transition = null, qn(Fr), e ? e() : void 0;
      } finally {
        qn(o), Kr.transition = a, Pt = t, (Pt & (Xr | Go)) === xr && Ku();
      }
    }
    function nC() {
      return (Pt & (Xr | Go)) !== xr;
    }
    function py(e, t) {
      va(_1, dl, e), dl = wt(dl, t);
    }
    function T1(e) {
      dl = _1.current, pa(_1, e);
    }
    function Ec(e, t) {
      e.finishedWork = null, e.finishedLanes = fe;
      var a = e.timeoutHandle;
      if (a !== wg && (e.timeoutHandle = wg, nw(a)), Pn !== null)
        for (var o = Pn.return; o !== null; ) {
          var l = o.alternate;
          MS(l, o), o = o.return;
        }
      Na = e;
      var s = wc(e.current, null);
      return Pn = s, wr = dl = t, br = au, uv = null, iy = fe, sv = fe, ly = fe, cv = null, Xa = null, wb(), gi.discardPendingWarnings(), s;
    }
    function rC(e, t) {
      do {
        var a = Pn;
        try {
          if (xm(), k2(), mn(), y1.current = null, a === null || a.return === null) {
            br = iv, uv = t, Pn = null;
            return;
          }
          if (Ve && a.mode & Bt && Jm(a, !0), et)
            if (ba(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var o = t;
              zo(a, o, wr);
            } else
              Ds(a, t, wr);
          Zb(e, a.return, a, t, wr), lC(a);
        } catch (l) {
          t = l, Pn === a && a !== null ? (a = a.return, Pn = a) : a = Pn;
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
    function Dk() {
      S1 = er();
    }
    function hv(e) {
      iy = wt(e, iy);
    }
    function Mk() {
      br === au && (br = oy);
    }
    function N1() {
      (br === au || br === oy || br === Sc) && (br = lv), Na !== null && (Vs(iy) || Vs(sv)) && ls(Na, wr);
    }
    function Ok(e) {
      br !== lv && (br = Sc), cv === null ? cv = [e] : cv.push(e);
    }
    function Lk() {
      return br === au;
    }
    function vy(e, t) {
      var a = Pt;
      Pt |= Xr;
      var o = aC();
      if (Na !== e || wr !== t) {
        if (la) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (mv(e, wr), l.clear()), Sh(e, t);
        }
        ou = ip(), Ec(e, t);
      }
      Ul(t);
      do
        try {
          jk();
          break;
        } catch (s) {
          rC(e, s);
        }
      while (!0);
      if (xm(), Pt = a, oC(o), Pn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Jc(), Na = null, wr = fe, br;
    }
    function jk() {
      for (; Pn !== null; )
        iC(Pn);
    }
    function Ak(e, t) {
      var a = Pt;
      Pt |= Xr;
      var o = aC();
      if (Na !== e || wr !== t) {
        if (la) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (mv(e, wr), l.clear()), Sh(e, t);
        }
        ou = ip(), fv(), Ec(e, t);
      }
      Ul(t);
      do
        try {
          Uk();
          break;
        } catch (s) {
          rC(e, s);
        }
      while (!0);
      return xm(), oC(o), Pt = a, Pn !== null ? (fh(), au) : (Jc(), Na = null, wr = fe, br);
    }
    function Uk() {
      for (; Pn !== null && !Id(); )
        iC(Pn);
    }
    function iC(e) {
      var t = e.alternate;
      tn(e);
      var a;
      (e.mode & Bt) !== it ? (O0(e), a = D1(t, e, dl), Jm(e, !0)) : a = D1(t, e, dl), mn(), e.memoizedProps = e.pendingProps, a === null ? lC(e) : Pn = a, y1.current = null;
    }
    function lC(e) {
      var t = e;
      do {
        var a = t.alternate, o = t.return;
        if ((t.flags & ks) === ot) {
          tn(t);
          var l = void 0;
          if ((t.mode & Bt) === it ? l = DS(a, t, dl) : (O0(t), l = DS(a, t, dl), Jm(t, !1)), mn(), l !== null) {
            Pn = l;
            return;
          }
        } else {
          var s = MR(a, t);
          if (s !== null) {
            s.flags &= oh, Pn = s;
            return;
          }
          if ((t.mode & Bt) !== it) {
            Jm(t, !1);
            for (var v = t.actualDuration, y = t.child; y !== null; )
              v += y.actualDuration, y = y.sibling;
            t.actualDuration = v;
          }
          if (o !== null)
            o.flags |= ks, o.subtreeFlags = ot, o.deletions = null;
          else {
            br = g1, Pn = null;
            return;
          }
        }
        var _ = t.sibling;
        if (_ !== null) {
          Pn = _;
          return;
        }
        t = o, Pn = t;
      } while (t !== null);
      br === au && (br = GS);
    }
    function xc(e, t, a) {
      var o = Wa(), l = Kr.transition;
      try {
        Kr.transition = null, qn(Fr), zk(e, t, a, o);
      } finally {
        Kr.transition = l, qn(o);
      }
      return null;
    }
    function zk(e, t, a, o) {
      do
        lu();
      while (os !== null);
      if (Gk(), (Pt & (Xr | Go)) !== xr)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (qd(s), l === null)
        return Wd(), null;
      if (s === fe && h("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = fe, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Ht;
      var v = wt(l.lanes, l.childLanes);
      ap(e, v), e === Na && (Na = null, Pn = null, wr = fe), ((l.subtreeFlags & ui) !== ot || (l.flags & ui) !== ot) && (Cc || (Cc = !0, x1 = a, L1(si, function() {
        return lu(), null;
      })));
      var y = (l.subtreeFlags & ($i | Bi | qi | ui)) !== ot, _ = (l.flags & ($i | Bi | qi | ui)) !== ot;
      if (y || _) {
        var T = Kr.transition;
        Kr.transition = null;
        var N = Wa();
        qn(Fr);
        var I = Pt;
        Pt |= Go, y1.current = null, UR(e, l), J2(), KR(e, l, s), Qx(e.containerInfo), e.current = l, Ms(s), XR(l, e, s), Os(), Fd(), Pt = I, qn(N), Kr.transition = T;
      } else
        e.current = l, J2();
      var z = Cc;
      if (Cc ? (Cc = !1, os = e, dv = s) : (sd = 0, cy = null), v = e.pendingLanes, v === fe && (ud = null), z || fC(e.current, !1), Hd(l.stateNode, o), la && e.memoizedUpdaters.clear(), mk(), Ja(e, er()), t !== null)
        for (var G = e.onRecoverableError, X = 0; X < t.length; X++) {
          var ne = t[X], Ie = ne.stack, st = ne.digest;
          G(ne.value, {
            componentStack: Ie,
            digest: st
          });
        }
      if (uy) {
        uy = !1;
        var nt = C1;
        throw C1 = null, nt;
      }
      return sa(dv, ht) && e.tag !== Qu && lu(), v = e.pendingLanes, sa(v, ht) ? (Hb(), e === w1 ? pv++ : (pv = 0, w1 = e)) : pv = 0, Ku(), Wd(), null;
    }
    function lu() {
      if (os !== null) {
        var e = xh(dv), t = Ys(Ba, e), a = Kr.transition, o = Wa();
        try {
          return Kr.transition = null, qn(t), Ik();
        } finally {
          qn(o), Kr.transition = a;
        }
      }
      return !1;
    }
    function Pk(e) {
      E1.push(e), Cc || (Cc = !0, L1(si, function() {
        return lu(), null;
      }));
    }
    function Ik() {
      if (os === null)
        return !1;
      var e = x1;
      x1 = null;
      var t = os, a = dv;
      if (os = null, dv = fe, (Pt & (Xr | Go)) !== xr)
        throw new Error("Cannot flush passive effects while already rendering.");
      b1 = !0, sy = !1, Al(a);
      var o = Pt;
      Pt |= Go, ak(t.current), ek(t, t.current, a, e);
      {
        var l = E1;
        E1 = [];
        for (var s = 0; s < l.length; s++) {
          var v = l[s];
          FR(t, v);
        }
      }
      Qd(), fC(t.current, !0), Pt = o, Ku(), sy ? t === cy ? sd++ : (sd = 0, cy = t) : sd = 0, b1 = !1, sy = !1, $d(t);
      {
        var y = t.current.stateNode;
        y.effectDuration = 0, y.passiveEffectDuration = 0;
      }
      return !0;
    }
    function uC(e) {
      return ud !== null && ud.has(e);
    }
    function Fk(e) {
      ud === null ? ud = /* @__PURE__ */ new Set([e]) : ud.add(e);
    }
    function Vk(e) {
      uy || (uy = !0, C1 = e);
    }
    var Hk = Vk;
    function sC(e, t, a) {
      var o = gc(a, t), l = iS(e, o, ht), s = Ju(e, l, ht), v = Da();
      s !== null && (zu(s, ht, v), Ja(s, v));
    }
    function yn(e, t, a) {
      if (LR(a), yv(!1), e.tag === A) {
        sC(e, e, a);
        return;
      }
      var o = null;
      for (o = t; o !== null; ) {
        if (o.tag === A) {
          sC(o, e, a);
          return;
        } else if (o.tag === b) {
          var l = o.type, s = o.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !uC(s)) {
            var v = gc(a, e), y = K0(o, v, ht), _ = Ju(o, y, ht), T = Da();
            _ !== null && (zu(_, ht, T), Ja(_, T));
            return;
          }
        }
        o = o.return;
      }
      h(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function $k(e, t, a) {
      var o = e.pingCache;
      o !== null && o.delete(t);
      var l = Da();
      Cf(e, a), Jk(e), Na === e && Bl(wr, a) && (br === lv || br === oy && $l(wr) && er() - S1 < QS ? Ec(e, fe) : ly = wt(ly, a)), Ja(e, l);
    }
    function cC(e, t) {
      t === Ht && (t = xk(e));
      var a = Da(), o = Qa(e, t);
      o !== null && (zu(o, t, a), Ja(o, a));
    }
    function Bk(e) {
      var t = e.memoizedState, a = Ht;
      t !== null && (a = t.retryLane), cC(e, a);
    }
    function qk(e, t) {
      var a = Ht, o;
      switch (e.tag) {
        case se:
          o = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case te:
          o = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      o !== null && o.delete(t), cC(e, a);
    }
    function Wk(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : _k(e / 1960) * 1960;
    }
    function Yk() {
      if (pv > Ck)
        throw pv = 0, w1 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      sd > Ek && (sd = 0, cy = null, h("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Gk() {
      gi.flushLegacyContextWarning(), gi.flushPendingUnsafeLifecycleWarnings();
    }
    function fC(e, t) {
      tn(e), hy(e, Hi, pk), t && hy(e, jo, vk), hy(e, Hi, fk), t && hy(e, jo, dk), mn();
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
        if ((Pt & Xr) !== xr || !(e.mode & Nt))
          return;
        var t = e.tag;
        if (t !== D && t !== A && t !== b && t !== R && t !== Ce && t !== We && t !== Le)
          return;
        var a = gt(e) || "ReactComponent";
        if (my !== null) {
          if (my.has(a))
            return;
          my.add(a);
        } else
          my = /* @__PURE__ */ new Set([a]);
        var o = vr;
        try {
          tn(e), h("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          o ? tn(e) : mn();
        }
      }
    }
    var D1;
    {
      var Qk = null;
      D1 = function(e, t, a) {
        var o = SC(Qk, t);
        try {
          return bS(e, t, a);
        } catch (s) {
          if (lb() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (xm(), k2(), MS(e, t), SC(t, o), t.mode & Bt && O0(t), Vi(null, bS, null, e, t, a), ii()) {
            var l = Rs();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var pC = !1, M1;
    M1 = /* @__PURE__ */ new Set();
    function Kk(e) {
      if (ko && !Ib())
        switch (e.tag) {
          case R:
          case Ce:
          case Le: {
            var t = Pn && gt(Pn) || "Unknown", a = t;
            if (!M1.has(a)) {
              M1.add(a);
              var o = gt(e) || "Unknown";
              h("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", o, t, t);
            }
            break;
          }
          case b: {
            pC || (h("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), pC = !0);
            break;
          }
        }
    }
    function mv(e, t) {
      if (la) {
        var a = e.memoizedUpdaters;
        a.forEach(function(o) {
          qs(e, o, t);
        });
      }
    }
    var O1 = {};
    function L1(e, t) {
      {
        var a = Ri.current;
        return a !== null ? (a.push(t), O1) : Pd(e, t);
      }
    }
    function vC(e) {
      if (e !== O1)
        return lh(e);
    }
    function hC() {
      return Ri.current !== null;
    }
    function Xk(e) {
      {
        if (e.mode & Nt) {
          if (!WS())
            return;
        } else if (!gk() || Pt !== xr || e.tag !== R && e.tag !== Ce && e.tag !== Le)
          return;
        if (Ri.current === null) {
          var t = vr;
          try {
            tn(e), h(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, gt(e));
          } finally {
            t ? tn(e) : mn();
          }
        }
      }
    }
    function Jk(e) {
      e.tag !== Qu && WS() && Ri.current === null && h(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function yv(e) {
      JS = e;
    }
    var Qo = null, cd = null, Zk = function(e) {
      Qo = e;
    };
    function fd(e) {
      {
        if (Qo === null)
          return e;
        var t = Qo(e);
        return t === void 0 ? e : t.current;
      }
    }
    function j1(e) {
      return fd(e);
    }
    function A1(e) {
      {
        if (Qo === null)
          return e;
        var t = Qo(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = fd(e.render);
            if (e.render !== a) {
              var o = {
                $$typeof: ce,
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
          case b: {
            typeof o == "function" && (l = !0);
            break;
          }
          case R: {
            (typeof o == "function" || s === _t) && (l = !0);
            break;
          }
          case Ce: {
            (s === ce || s === _t) && (l = !0);
            break;
          }
          case We:
          case Le: {
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
        cd === null && (cd = /* @__PURE__ */ new WeakSet()), cd.add(e);
      }
    }
    var eT = function(e, t) {
      {
        if (Qo === null)
          return;
        var a = t.staleFamilies, o = t.updatedFamilies;
        lu(), iu(function() {
          U1(e.current, o, a);
        });
      }
    }, tT = function(e, t) {
      {
        if (e.context !== go)
          return;
        lu(), iu(function() {
          gv(t, e, null, null);
        });
      }
    };
    function U1(e, t, a) {
      {
        var o = e.alternate, l = e.child, s = e.sibling, v = e.tag, y = e.type, _ = null;
        switch (v) {
          case R:
          case Le:
          case b:
            _ = y;
            break;
          case Ce:
            _ = y.render;
            break;
        }
        if (Qo === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var T = !1, N = !1;
        if (_ !== null) {
          var I = Qo(_);
          I !== void 0 && (a.has(I) ? N = !0 : t.has(I) && (v === b ? N = !0 : T = !0));
        }
        if (cd !== null && (cd.has(e) || o !== null && cd.has(o)) && (N = !0), N && (e._debugNeedsRemount = !0), N || T) {
          var z = Qa(e, ht);
          z !== null && Rr(z, e, ht, un);
        }
        l !== null && !N && U1(l, t, a), s !== null && U1(s, t, a);
      }
    }
    var nT = function(e, t) {
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
          case R:
          case Le:
          case b:
            y = v;
            break;
          case Ce:
            y = v.render;
            break;
        }
        var _ = !1;
        y !== null && t.has(y) && (_ = !0), _ ? rT(e, a) : o !== null && z1(o, t, a), l !== null && z1(l, t, a);
      }
    }
    function rT(e, t) {
      {
        var a = aT(e, t);
        if (a)
          return;
        for (var o = e; ; ) {
          switch (o.tag) {
            case H:
              t.add(o.stateNode);
              return;
            case V:
              t.add(o.stateNode.containerInfo);
              return;
            case A:
              t.add(o.stateNode.containerInfo);
              return;
          }
          if (o.return === null)
            throw new Error("Expected to reach root first.");
          o = o.return;
        }
      }
    }
    function aT(e, t) {
      for (var a = e, o = !1; ; ) {
        if (a.tag === H)
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
    function oT(e, t, a, o) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = o, this.flags = ot, this.subtreeFlags = ot, this.deletions = null, this.lanes = fe, this.childLanes = fe, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !P1 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var _o = function(e, t, a, o) {
      return new oT(e, t, a, o);
    };
    function I1(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function iT(e) {
      return typeof e == "function" && !I1(e) && e.defaultProps === void 0;
    }
    function lT(e) {
      if (typeof e == "function")
        return I1(e) ? b : R;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ce)
          return Ce;
        if (t === Et)
          return We;
      }
      return D;
    }
    function wc(e, t) {
      var a = e.alternate;
      a === null ? (a = _o(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = ot, a.subtreeFlags = ot, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Hn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var o = e.dependencies;
      switch (a.dependencies = o === null ? null : {
        lanes: o.lanes,
        firstContext: o.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case D:
        case R:
        case Le:
          a.type = fd(e.type);
          break;
        case b:
          a.type = j1(e.type);
          break;
        case Ce:
          a.type = A1(e.type);
          break;
      }
      return a;
    }
    function uT(e, t) {
      e.flags &= Hn | xn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = fe, e.lanes = t, e.child = null, e.subtreeFlags = ot, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
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
    function sT(e, t, a) {
      var o;
      return e === pm ? (o = Nt, t === !0 && (o |= an, o |= qt)) : o = it, la && (o |= Bt), _o(A, null, null, o);
    }
    function F1(e, t, a, o, l, s) {
      var v = D, y = e;
      if (typeof e == "function")
        I1(e) ? (v = b, y = j1(y)) : y = fd(y);
      else if (typeof e == "string")
        v = H;
      else
        e: switch (e) {
          case xo:
            return us(a.children, l, s, t);
          case ro:
            v = xe, l |= an, (l & Nt) !== it && (l |= qt);
            break;
          case wo:
            return cT(a, l, s, t);
          case Ae:
            return fT(a, l, s, t);
          case Ye:
            return dT(a, l, s, t);
          case On:
            return _C(a, l, s, t);
          case fn:
          // eslint-disable-next-line no-fallthrough
          case Dt:
          // eslint-disable-next-line no-fallthrough
          case hn:
          // eslint-disable-next-line no-fallthrough
          case pr:
          // eslint-disable-next-line no-fallthrough
          case Tt:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case bo:
                  v = Ee;
                  break e;
                case j:
                  v = we;
                  break e;
                case ce:
                  v = Ce, y = A1(y);
                  break e;
                case Et:
                  v = We;
                  break e;
                case _t:
                  v = je, y = null;
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
    function us(e, t, a, o) {
      var l = _o(ie, e, o, t);
      return l.lanes = a, l;
    }
    function cT(e, t, a, o) {
      typeof e.id != "string" && h('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = _o(le, e, o, t | Bt);
      return l.elementType = wo, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function fT(e, t, a, o) {
      var l = _o(se, e, o, t);
      return l.elementType = Ae, l.lanes = a, l;
    }
    function dT(e, t, a, o) {
      var l = _o(te, e, o, t);
      return l.elementType = Ye, l.lanes = a, l;
    }
    function _C(e, t, a, o) {
      var l = _o(Y, e, o, t);
      l.elementType = On, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function H1(e, t, a) {
      var o = _o(ae, e, null, t);
      return o.lanes = a, o;
    }
    function pT() {
      var e = _o(H, null, null, it);
      return e.elementType = "DELETED", e;
    }
    function vT(e) {
      var t = _o(Je, null, null, it);
      return t.stateNode = e, t;
    }
    function $1(e, t, a) {
      var o = e.children !== null ? e.children : [], l = _o(V, o, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function SC(e, t) {
      return e === null && (e = _o(D, null, null, it)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function hT(e, t, a, o, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = wg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Ht, this.eventTimes = Bs(fe), this.expirationTimes = Bs(un), this.pendingLanes = fe, this.suspendedLanes = fe, this.pingedLanes = fe, this.expiredLanes = fe, this.mutableReadLanes = fe, this.finishedLanes = fe, this.entangledLanes = fe, this.entanglements = Bs(fe), this.identifierPrefix = o, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], v = 0; v < zl; v++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case pm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Qu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function CC(e, t, a, o, l, s, v, y, _, T) {
      var N = new hT(e, t, a, y, _), I = sT(t, s);
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
    function mT(e, t, a) {
      var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return ea(o), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: dr,
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
      var t = Mu(e), a = Jw(t);
      if (t.tag === b) {
        var o = t.type;
        if (ol(o))
          return Q_(t, o, a);
      }
      return a;
    }
    function yT(e, t) {
      {
        var a = Mu(e);
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
            var v = vr;
            try {
              tn(l), a.mode & an ? h("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : h("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              v ? tn(v) : mn();
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
    function wC(e, t, a, o, l, s, v, y, _, T) {
      var N = !0, I = CC(a, o, N, e, l, s, v, y, _);
      I.context = EC(null);
      var z = I.current, G = Da(), X = is(z), ne = nu(G, X);
      return ne.callback = t ?? null, Ju(z, ne, X), wk(I, X, G), I;
    }
    function gv(e, t, a, o) {
      Vd(t, e);
      var l = t.current, s = Da(), v = is(l);
      bn(v);
      var y = EC(a);
      t.context === null ? t.context = y : t.pendingContext = y, ko && vr !== null && !q1 && (q1 = !0, h(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, gt(vr) || "Unknown"));
      var _ = nu(s, v);
      _.payload = {
        element: e
      }, o = o === void 0 ? null : o, o !== null && (typeof o != "function" && h("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", o), _.callback = o);
      var T = Ju(l, _, v);
      return T !== null && (Rr(T, l, v, s), Tm(T, l, v)), v;
    }
    function yy(e) {
      var t = e.current;
      return t.child ? t.child.tag === H ? t.child.stateNode : t.child.stateNode : null;
    }
    function gT(e) {
      switch (e.tag) {
        case A: {
          var t = e.stateNode;
          if (xf(t)) {
            var a = ph(t);
            Tk(t, a);
          }
          break;
        }
        case se: {
          iu(function() {
            var l = Qa(e, ht);
            if (l !== null) {
              var s = Da();
              Rr(l, e, ht, s);
            }
          });
          var o = ht;
          Y1(e, o);
          break;
        }
      }
    }
    function bC(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = gh(a.retryLane, t));
    }
    function Y1(e, t) {
      bC(e, t);
      var a = e.alternate;
      a && bC(a, t);
    }
    function _T(e) {
      if (e.tag === se) {
        var t = Ps, a = Qa(e, t);
        if (a !== null) {
          var o = Da();
          Rr(a, e, t, o);
        }
        Y1(e, t);
      }
    }
    function ST(e) {
      if (e.tag === se) {
        var t = is(e), a = Qa(e, t);
        if (a !== null) {
          var o = Da();
          Rr(a, e, t, o);
        }
        Y1(e, t);
      }
    }
    function RC(e) {
      var t = gn(e);
      return t === null ? null : t.stateNode;
    }
    var kC = function(e) {
      return null;
    };
    function CT(e) {
      return kC(e);
    }
    var TC = function(e) {
      return !1;
    };
    function ET(e) {
      return TC(e);
    }
    var NC = null, DC = null, MC = null, OC = null, LC = null, jC = null, AC = null, UC = null, zC = null;
    {
      var PC = function(e, t, a) {
        var o = t[a], l = kt(e) ? e.slice() : bt({}, e);
        return a + 1 === t.length ? (kt(l) ? l.splice(o, 1) : delete l[o], l) : (l[o] = PC(e[o], t, a + 1), l);
      }, IC = function(e, t) {
        return PC(e, t, 0);
      }, FC = function(e, t, a, o) {
        var l = t[o], s = kt(e) ? e.slice() : bt({}, e);
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
      }, HC = function(e, t, a, o) {
        if (a >= t.length)
          return o;
        var l = t[a], s = kt(e) ? e.slice() : bt({}, e);
        return s[l] = HC(e[l], t, a + 1, o), s;
      }, $C = function(e, t, a) {
        return HC(e, t, 0, a);
      }, G1 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      NC = function(e, t, a, o) {
        var l = G1(e, t);
        if (l !== null) {
          var s = $C(l.memoizedState, a, o);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = bt({}, e.memoizedProps);
          var v = Qa(e, ht);
          v !== null && Rr(v, e, ht, un);
        }
      }, DC = function(e, t, a) {
        var o = G1(e, t);
        if (o !== null) {
          var l = IC(o.memoizedState, a);
          o.memoizedState = l, o.baseState = l, e.memoizedProps = bt({}, e.memoizedProps);
          var s = Qa(e, ht);
          s !== null && Rr(s, e, ht, un);
        }
      }, MC = function(e, t, a, o) {
        var l = G1(e, t);
        if (l !== null) {
          var s = VC(l.memoizedState, a, o);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = bt({}, e.memoizedProps);
          var v = Qa(e, ht);
          v !== null && Rr(v, e, ht, un);
        }
      }, OC = function(e, t, a) {
        e.pendingProps = $C(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var o = Qa(e, ht);
        o !== null && Rr(o, e, ht, un);
      }, LC = function(e, t) {
        e.pendingProps = IC(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Qa(e, ht);
        a !== null && Rr(a, e, ht, un);
      }, jC = function(e, t, a) {
        e.pendingProps = VC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var o = Qa(e, ht);
        o !== null && Rr(o, e, ht, un);
      }, AC = function(e) {
        var t = Qa(e, ht);
        t !== null && Rr(t, e, ht, un);
      }, UC = function(e) {
        kC = e;
      }, zC = function(e) {
        TC = e;
      };
    }
    function xT(e) {
      var t = oa(e);
      return t === null ? null : t.stateNode;
    }
    function wT(e) {
      return null;
    }
    function bT() {
      return vr;
    }
    function RT(e) {
      var t = e.findFiberByHostInstance, a = d.ReactCurrentDispatcher;
      return ju({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: NC,
        overrideHookStateDeletePath: DC,
        overrideHookStateRenamePath: MC,
        overrideProps: OC,
        overridePropsDeletePath: LC,
        overridePropsRenamePath: jC,
        setErrorHandler: UC,
        setSuspenseHandler: zC,
        scheduleUpdate: AC,
        currentDispatcherRef: a,
        findHostInstanceByFiber: xT,
        findFiberByHostInstance: t || wT,
        // React Refresh
        findHostInstancesForRefresh: nT,
        scheduleRefresh: eT,
        scheduleRoot: tT,
        setRefreshHandler: Zk,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: bT,
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
        if (a.nodeType !== Fn) {
          var o = RC(t.current);
          o && o.parentNode !== a && h("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      gv(e, t, null, null);
    }, gy.prototype.unmount = Q1.prototype.unmount = function() {
      typeof arguments[0] == "function" && h("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        nC() && h("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), iu(function() {
          gv(null, e, null, null);
        }), B_(t);
      }
    };
    function kT(e, t) {
      if (!_y(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      qC(e);
      var a = !1, o = !1, l = "", s = BC;
      t != null && (t.hydrate ? C("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Ur && h(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var v = xC(e, pm, null, a, o, l, s);
      im(v.current, e);
      var y = e.nodeType === Fn ? e.parentNode : e;
      return wp(y), new Q1(v);
    }
    function gy(e) {
      this._internalRoot = e;
    }
    function TT(e) {
      e && Th(e);
    }
    gy.prototype.unstable_scheduleHydration = TT;
    function NT(e, t, a) {
      if (!_y(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      qC(e), t === void 0 && h("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var o = a ?? null, l = a != null && a.hydratedSources || null, s = !1, v = !1, y = "", _ = BC;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (y = a.identifierPrefix), a.onRecoverableError !== void 0 && (_ = a.onRecoverableError));
      var T = wC(t, null, e, pm, o, s, v, y, _);
      if (im(T.current, e), wp(e), l)
        for (var N = 0; N < l.length; N++) {
          var I = l[N];
          Lb(T, I);
        }
      return new gy(T);
    }
    function _y(e) {
      return !!(e && (e.nodeType === na || e.nodeType === oi || e.nodeType === Rd));
    }
    function _v(e) {
      return !!(e && (e.nodeType === na || e.nodeType === oi || e.nodeType === Rd || e.nodeType === Fn && e.nodeValue === " react-mount-point-unstable "));
    }
    function qC(e) {
      e.nodeType === na && e.tagName && e.tagName.toUpperCase() === "BODY" && h("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Ap(e) && (e._reactRootContainer ? h("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : h("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var DT = d.ReactCurrentOwner, WC;
    WC = function(e) {
      if (e._reactRootContainer && e.nodeType !== Fn) {
        var t = RC(e._reactRootContainer.current);
        t && t.parentNode !== e && h("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, o = K1(e), l = !!(o && Yu(o));
      l && !a && h("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === na && e.tagName && e.tagName.toUpperCase() === "BODY" && h("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function K1(e) {
      return e ? e.nodeType === oi ? e.documentElement : e.firstChild : null;
    }
    function YC() {
    }
    function MT(e, t, a, o, l) {
      if (l) {
        if (typeof o == "function") {
          var s = o;
          o = function() {
            var z = yy(v);
            s.call(z);
          };
        }
        var v = wC(
          t,
          o,
          e,
          Qu,
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
        var y = e.nodeType === Fn ? e.parentNode : e;
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
          Qu,
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
        var I = e.nodeType === Fn ? e.parentNode : e;
        return wp(I), iu(function() {
          gv(t, N, a, o);
        }), N;
      }
    }
    function OT(e, t) {
      e !== null && typeof e != "function" && h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Sy(e, t, a, o, l) {
      WC(a), OT(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, v;
      if (!s)
        v = MT(a, t, e, l, o);
      else {
        if (v = s, typeof l == "function") {
          var y = l;
          l = function() {
            var _ = yy(v);
            y.call(_);
          };
        }
        gv(t, v, e, l);
      }
      return yy(v);
    }
    var GC = !1;
    function LT(e) {
      {
        GC || (GC = !0, h("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = DT.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || h("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ft(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === na ? e : yT(e, "findDOMNode");
    }
    function jT(e, t, a) {
      if (h("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !_v(t))
        throw new Error("Target container is not a DOM element.");
      {
        var o = Ap(t) && t._reactRootContainer === void 0;
        o && h("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Sy(null, e, t, !0, a);
    }
    function AT(e, t, a) {
      if (h("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !_v(t))
        throw new Error("Target container is not a DOM element.");
      {
        var o = Ap(t) && t._reactRootContainer === void 0;
        o && h("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Sy(null, e, t, !1, a);
    }
    function UT(e, t, a, o) {
      if (h("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !_v(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Yy(e))
        throw new Error("parentComponent must be a valid React Component");
      return Sy(e, t, a, !1, o);
    }
    var QC = !1;
    function zT(e) {
      if (QC || (QC = !0, h("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !_v(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Ap(e) && e._reactRootContainer === void 0;
        t && h("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = K1(e), o = a && !Yu(a);
          o && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return iu(function() {
          Sy(null, null, e, !1, function() {
            e._reactRootContainer = null, B_(e);
          });
        }), !0;
      } else {
        {
          var l = K1(e), s = !!(l && Yu(l)), v = e.nodeType === na && _v(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Or(gT), Pu(_T), wh(ST), Qs(Wa), lp(Ch), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && h("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Ic(Ix), Wy(k1, Nk, iu);
    function PT(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!_y(t))
        throw new Error("Target container is not a DOM element.");
      return mT(e, t, null, a);
    }
    function IT(e, t, a, o) {
      return UT(e, t, a, o);
    }
    var X1 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Yu, Hf, lm, ku, Fc, k1]
    };
    function FT(e, t) {
      return X1.usingClientEntryPoint || h('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), kT(e, t);
    }
    function VT(e, t, a) {
      return X1.usingClientEntryPoint || h('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), NT(e, t, a);
    }
    function HT(e) {
      return nC() && h("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), iu(e);
    }
    var $T = RT({
      findFiberByHostInstance: sc,
      bundleType: 1,
      version: B1,
      rendererPackageName: "react-dom"
    });
    if (!$T && kn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var KC = window.location.protocol;
      /^(https?|file):$/.test(KC) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (KC === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    eo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X1, eo.createPortal = PT, eo.createRoot = FT, eo.findDOMNode = LT, eo.flushSync = HT, eo.hydrate = jT, eo.hydrateRoot = VT, eo.render = AT, eo.unmountComponentAtNode = zT, eo.unstable_batchedUpdates = k1, eo.unstable_renderSubtreeIntoContainer = IT, eo.version = B1, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })()), eo;
}
var bE;
function y6() {
  if (bE) return by.exports;
  bE = 1;
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
  return process.env.NODE_ENV === "production" ? (c(), by.exports = h6()) : by.exports = m6(), by.exports;
}
var h_ = y6();
const xv = /* @__PURE__ */ FE(h_);
function o_(c, p) {
  (p == null || p > c.length) && (p = c.length);
  for (var d = 0, g = Array(p); d < p; d++) g[d] = c[d];
  return g;
}
function g6(c) {
  if (Array.isArray(c)) return c;
}
function _6(c) {
  if (Array.isArray(c)) return o_(c);
}
function S6(c) {
  if (c === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return c;
}
function RE(c, p, d, g, x, C, h) {
  try {
    var w = c[C](h), R = w.value;
  } catch (b) {
    return void d(b);
  }
  w.done ? p(R) : Promise.resolve(R).then(g, x);
}
function C6(c) {
  return function() {
    var p = this, d = arguments;
    return new Promise(function(g, x) {
      var C = c.apply(p, d);
      function h(R) {
        RE(C, g, x, h, w, "next", R);
      }
      function w(R) {
        RE(C, g, x, h, w, "throw", R);
      }
      h(void 0);
    });
  };
}
function Dy(c, p, d) {
  return p = i_(p), k6(c, GE() ? Reflect.construct(p, d || [], i_(c).constructor) : p.apply(c, d));
}
function Tv(c, p) {
  if (!(c instanceof p)) throw new TypeError("Cannot call a class as a function");
}
function kE(c, p) {
  for (var d = 0; d < p.length; d++) {
    var g = p[d];
    g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(c, Ny(g.key), g);
  }
}
function Nv(c, p, d) {
  return p && kE(c.prototype, p), d && kE(c, d), Object.defineProperty(c, "prototype", { writable: !1 }), c;
}
function hd(c, p, d) {
  return (p = Ny(p)) in c ? Object.defineProperty(c, p, { value: d, enumerable: !0, configurable: !0, writable: !0 }) : c[p] = d, c;
}
function Rc() {
  return (Rc = Object.assign ? Object.assign.bind() : function(c) {
    for (var p = 1; p < arguments.length; p++) {
      var d, g = arguments[p];
      for (d in g) !{}.hasOwnProperty.call(g, d) || (c[d] = g[d]);
    }
    return c;
  }).apply(null, arguments);
}
function i_(c) {
  return (i_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(p) {
    return p.__proto__ || Object.getPrototypeOf(p);
  })(c);
}
function My(c, p) {
  if (typeof p != "function" && p !== null) throw new TypeError("Super expression must either be null or a function");
  c.prototype = Object.create(p && p.prototype, { constructor: { value: c, writable: !0, configurable: !0 } }), Object.defineProperty(c, "prototype", { writable: !1 }), p && QE(c, p);
}
function GE() {
  try {
    var c = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (GE = function() {
    return !!c;
  })();
}
function E6(c) {
  if (typeof Symbol < "u" && c[Symbol.iterator] != null || c["@@iterator"] != null) return Array.from(c);
}
function x6(c, p) {
  var d = c == null ? null : typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
  if (d != null) {
    var g, x, C, h, w = [], R = !0, b = !1;
    try {
      if (C = (d = d.call(c)).next, p !== 0) for (; !(R = (g = C.call(d)).done) && (w.push(g.value), w.length !== p); R = !0) ;
    } catch (D) {
      b = !0, x = D;
    } finally {
      try {
        if (!R && d.return != null && (h = d.return(), Object(h) !== h)) return;
      } finally {
        if (b) throw x;
      }
    }
    return w;
  }
}
function w6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function b6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function TE(c, p) {
  var d, g = Object.keys(c);
  return Object.getOwnPropertySymbols && (d = Object.getOwnPropertySymbols(c), p && (d = d.filter(function(x) {
    return Object.getOwnPropertyDescriptor(c, x).enumerable;
  })), g.push.apply(g, d)), g;
}
function de(c) {
  for (var p = 1; p < arguments.length; p++) {
    var d = arguments[p] != null ? arguments[p] : {};
    p % 2 ? TE(Object(d), !0).forEach(function(g) {
      hd(c, g, d[g]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(d)) : TE(Object(d)).forEach(function(g) {
      Object.defineProperty(c, g, Object.getOwnPropertyDescriptor(d, g));
    });
  }
  return c;
}
function Xo(c, p) {
  if (c == null) return {};
  var d, g = R6(c, p);
  if (Object.getOwnPropertySymbols) for (var x = Object.getOwnPropertySymbols(c), C = 0; C < x.length; C++) d = x[C], p.includes(d) || {}.propertyIsEnumerable.call(c, d) && (g[d] = c[d]);
  return g;
}
function R6(c, p) {
  if (c == null) return {};
  var d, g = {};
  for (d in c) if ({}.hasOwnProperty.call(c, d)) {
    if (p.includes(d)) continue;
    g[d] = c[d];
  }
  return g;
}
function k6(c, p) {
  if (p && (typeof p == "object" || typeof p == "function")) return p;
  if (p !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return S6(c);
}
function pd() {
  pd = function() {
    return p;
  };
  var c, p = {}, d = Object.prototype, g = d.hasOwnProperty, x = Object.defineProperty || function(L, Y, ve) {
    L[Y] = ve.value;
  }, Ce = typeof Symbol == "function" ? Symbol : {}, C = Ce.iterator || "@@iterator", h = Ce.asyncIterator || "@@asyncIterator", w = Ce.toStringTag || "@@toStringTag";
  function R(L, Y, ve) {
    return Object.defineProperty(L, Y, { value: ve, enumerable: !0, configurable: !0, writable: !0 }), L[Y];
  }
  try {
    R({}, "");
  } catch {
    R = function(Y, ve, ke) {
      return Y[ve] = ke;
    };
  }
  function b(L, ge, ve, F) {
    var ue, he, ee, Me, ge = ge && ge.prototype instanceof xe ? ge : xe, ge = Object.create(ge.prototype), F = new Je(F || []);
    return x(ge, "_invoke", { value: (ue = L, he = ve, ee = F, Me = A, function(Z, et) {
      if (Me === H) throw Error("Generator is already running");
      if (Me === ae) {
        if (Z === "throw") throw et;
        return { value: c, done: !0 };
      }
      for (ee.method = Z, ee.arg = et; ; ) {
        var Ve = ee.delegate;
        if (Ve && (Ve = (function pt(at, ze) {
          var lt = ze.method, vt = at.iterator[lt];
          return vt === c ? (ze.delegate = null, lt === "throw" && at.iterator.return && (ze.method = "return", ze.arg = c, pt(at, ze), ze.method === "throw") || lt !== "return" && (ze.method = "throw", ze.arg = new TypeError("The iterator does not provide a '" + lt + "' method")), ie) : (lt = D(vt, at.iterator, ze.arg), lt.type === "throw" ? (ze.method = "throw", ze.arg = lt.arg, ze.delegate = null, ie) : (vt = lt.arg, vt ? vt.done ? (ze[at.resultName] = vt.value, ze.next = at.nextLoc, ze.method !== "return" && (ze.method = "next", ze.arg = c), ze.delegate = null, ie) : vt : (ze.method = "throw", ze.arg = new TypeError("iterator result is not an object"), ze.delegate = null, ie)));
        })(Ve, ee), Ve)) {
          if (Ve === ie) continue;
          return Ve;
        }
        if (ee.method === "next") ee.sent = ee._sent = ee.arg;
        else if (ee.method === "throw") {
          if (Me === A) throw Me = ae, ee.arg;
          ee.dispatchException(ee.arg);
        } else ee.method === "return" && ee.abrupt("return", ee.arg);
        if (Me = H, Ve = D(ue, he, ee), Ve.type === "normal") {
          if (Me = ee.done ? ae : V, Ve.arg === ie) continue;
          return { value: Ve.arg, done: ee.done };
        }
        Ve.type === "throw" && (Me = ae, ee.method = "throw", ee.arg = Ve.arg);
      }
    }) }), ge;
  }
  function D(L, Y, ve) {
    try {
      return { type: "normal", arg: L.call(Y, ve) };
    } catch (ke) {
      return { type: "throw", arg: ke };
    }
  }
  p.wrap = b;
  var A = "suspendedStart", V = "suspendedYield", H = "executing", ae = "completed", ie = {};
  function xe() {
  }
  function we() {
  }
  function Ee() {
  }
  var Ce = {}, le = (R(Ce, C, function() {
    return this;
  }), Object.getPrototypeOf), le = le && le(le(te([]))), se = (le && le !== d && g.call(le, C) && (Ce = le), Ee.prototype = xe.prototype = Object.create(Ce));
  function We(L) {
    ["next", "throw", "return"].forEach(function(Y) {
      R(L, Y, function(ve) {
        return this._invoke(Y, ve);
      });
    });
  }
  function Le(L, Y) {
    var ve;
    x(this, "_invoke", { value: function(ke, ue) {
      function he() {
        return new Y(function(ee, Me) {
          (function ge(at, Z, et, Ve) {
            var pt, at = D(L[at], L, Z);
            if (at.type !== "throw") return (Z = (pt = at.arg).value) && typeof Z == "object" && g.call(Z, "__await") ? Y.resolve(Z.__await).then(function(ze) {
              ge("next", ze, et, Ve);
            }, function(ze) {
              ge("throw", ze, et, Ve);
            }) : Y.resolve(Z).then(function(ze) {
              pt.value = ze, et(pt);
            }, function(ze) {
              return ge("throw", ze, et, Ve);
            });
            Ve(at.arg);
          })(ke, ue, ee, Me);
        });
      }
      return ve = ve ? ve.then(he, he) : he();
    } });
  }
  function je(L) {
    var Y = { tryLoc: L[0] };
    1 in L && (Y.catchLoc = L[1]), 2 in L && (Y.finallyLoc = L[2], Y.afterLoc = L[3]), this.tryEntries.push(Y);
  }
  function Ge(L) {
    var Y = L.completion || {};
    Y.type = "normal", delete Y.arg, L.completion = Y;
  }
  function Je(L) {
    this.tryEntries = [{ tryLoc: "root" }], L.forEach(je, this), this.reset(!0);
  }
  function te(L) {
    if (L || L === "") {
      var Y, ve = L[C];
      if (ve) return ve.call(L);
      if (typeof L.next == "function") return L;
      if (!isNaN(L.length)) return Y = -1, (ve = function ke() {
        for (; ++Y < L.length; ) if (g.call(L, Y)) return ke.value = L[Y], ke.done = !1, ke;
        return ke.value = c, ke.done = !0, ke;
      }).next = ve;
    }
    throw new TypeError(typeof L + " is not iterable");
  }
  return x(se, "constructor", { value: we.prototype = Ee, configurable: !0 }), x(Ee, "constructor", { value: we, configurable: !0 }), we.displayName = R(Ee, w, "GeneratorFunction"), p.isGeneratorFunction = function(L) {
    return L = typeof L == "function" && L.constructor, !!L && (L === we || (L.displayName || L.name) === "GeneratorFunction");
  }, p.mark = function(L) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(L, Ee) : (L.__proto__ = Ee, R(L, w, "GeneratorFunction")), L.prototype = Object.create(se), L;
  }, p.awrap = function(L) {
    return { __await: L };
  }, We(Le.prototype), R(Le.prototype, h, function() {
    return this;
  }), p.AsyncIterator = Le, p.async = function(L, Y, ve, ke, ue) {
    ue === void 0 && (ue = Promise);
    var he = new Le(b(L, Y, ve, ke), ue);
    return p.isGeneratorFunction(Y) ? he : he.next().then(function(ee) {
      return ee.done ? ee.value : he.next();
    });
  }, We(se), R(se, w, "Generator"), R(se, C, function() {
    return this;
  }), R(se, "toString", function() {
    return "[object Generator]";
  }), p.keys = function(L) {
    var Y, ve = Object(L), ke = [];
    for (Y in ve) ke.push(Y);
    return ke.reverse(), function ue() {
      for (; ke.length; ) {
        var he = ke.pop();
        if (he in ve) return ue.value = he, ue.done = !1, ue;
      }
      return ue.done = !0, ue;
    };
  }, p.values = te, Je.prototype = { constructor: Je, reset: function(L) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = c, this.done = !1, this.delegate = null, this.method = "next", this.arg = c, this.tryEntries.forEach(Ge), !L) for (var Y in this) Y.charAt(0) === "t" && g.call(this, Y) && !isNaN(+Y.slice(1)) && (this[Y] = c);
  }, stop: function() {
    this.done = !0;
    var L = this.tryEntries[0].completion;
    if (L.type === "throw") throw L.arg;
    return this.rval;
  }, dispatchException: function(L) {
    if (this.done) throw L;
    var Y = this;
    function ve(ge, F) {
      return he.type = "throw", he.arg = L, Y.next = ge, F && (Y.method = "next", Y.arg = c), !!F;
    }
    for (var ke = this.tryEntries.length - 1; 0 <= ke; --ke) {
      var ue = this.tryEntries[ke], he = ue.completion;
      if (ue.tryLoc === "root") return ve("end");
      if (ue.tryLoc <= this.prev) {
        var ee = g.call(ue, "catchLoc"), Me = g.call(ue, "finallyLoc");
        if (ee && Me) {
          if (this.prev < ue.catchLoc) return ve(ue.catchLoc, !0);
          if (this.prev < ue.finallyLoc) return ve(ue.finallyLoc);
        } else if (ee) {
          if (this.prev < ue.catchLoc) return ve(ue.catchLoc, !0);
        } else {
          if (!Me) throw Error("try statement without catch or finally");
          if (this.prev < ue.finallyLoc) return ve(ue.finallyLoc);
        }
      }
    }
  }, abrupt: function(L, Y) {
    for (var ve = this.tryEntries.length - 1; 0 <= ve; --ve) {
      var ke = this.tryEntries[ve];
      if (ke.tryLoc <= this.prev && g.call(ke, "finallyLoc") && this.prev < ke.finallyLoc) {
        var ue = ke;
        break;
      }
    }
    var he = (ue = ue && (L === "break" || L === "continue") && ue.tryLoc <= Y && Y <= ue.finallyLoc ? null : ue) ? ue.completion : {};
    return he.type = L, he.arg = Y, ue ? (this.method = "next", this.next = ue.finallyLoc, ie) : this.complete(he);
  }, complete: function(L, Y) {
    if (L.type === "throw") throw L.arg;
    return L.type === "break" || L.type === "continue" ? this.next = L.arg : L.type === "return" ? (this.rval = this.arg = L.arg, this.method = "return", this.next = "end") : L.type === "normal" && Y && (this.next = Y), ie;
  }, finish: function(L) {
    for (var Y = this.tryEntries.length - 1; 0 <= Y; --Y) {
      var ve = this.tryEntries[Y];
      if (ve.finallyLoc === L) return this.complete(ve.completion, ve.afterLoc), Ge(ve), ie;
    }
  }, catch: function(L) {
    for (var Y = this.tryEntries.length - 1; 0 <= Y; --Y) {
      var ve, ke, ue = this.tryEntries[Y];
      if (ue.tryLoc === L) return (ve = ue.completion).type === "throw" && (ke = ve.arg, Ge(ue)), ke;
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(L, Y, ve) {
    return this.delegate = { iterator: te(L), resultName: Y, nextLoc: ve }, this.method === "next" && (this.arg = c), ie;
  } }, p;
}
function QE(c, p) {
  return (QE = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(d, g) {
    return d.__proto__ = g, d;
  })(c, p);
}
function NE(c, p) {
  return g6(c) || x6(c, p) || KE(c, p) || w6();
}
function Oy(c) {
  return _6(c) || E6(c) || KE(c) || b6();
}
function T6(c, p) {
  if (typeof c != "object" || !c) return c;
  var d = c[Symbol.toPrimitive];
  if (d === void 0) return (p === "string" ? String : Number)(c);
  if (d = d.call(c, p), typeof d != "object") return d;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
function Ny(c) {
  return c = T6(c, "string"), typeof c == "symbol" ? c : c + "";
}
function Zr(c) {
  return (Zr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(p) {
    return typeof p;
  } : function(p) {
    return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
  })(c);
}
function KE(c, p) {
  var d;
  if (c) return typeof c == "string" ? o_(c, p) : (d = (d = {}.toString.call(c).slice(8, -1)) === "Object" && c.constructor ? c.constructor.name : d) === "Map" || d === "Set" ? Array.from(c) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? o_(c, p) : void 0;
}
var XE = { react: { componentWrap: "div", slotWrap: "div", componentWrapAttrs: { __use_react_component_wrap: "", style: { all: "unset" } }, slotWrapAttrs: { __use_react_slot_wrap: "", style: { all: "unset" } }, vueNamedSlotsKey: ["node:"] }, vue: { componentWrapHOC: function(c) {
  return function() {
    var p = (0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}).portals;
    return Te.createElement(Te.Fragment, null, c, (p === void 0 ? [] : p).map(function(d) {
      var g = d.Portal;
      return Te.createElement(g, { key: d.key });
    }));
  };
}, componentWrapAttrs: { "data-use-vue-component-wrap": "", style: { all: "unset" } }, slotWrapAttrs: { "data-use-vue-slot-wrap": "", style: { all: "unset" } } } };
function JE() {
  var c = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : { react: {}, vue: {} }, d = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : XE, p = 2 < arguments.length ? arguments[2] : void 0, d = (c.vue || (c.vue = {}), c.react || (c.react = {}), [d, de(de({}, c), {}, { react: de(de(de({}, d.react), c.react), {}, { componentWrapAttrs: de(de({}, d.react.componentWrapAttrs), c.react.componentWrapAttrs), slotWrapAttrs: de(de({}, d.react.slotWrapAttrs), c.react.slotWrapAttrs) }), vue: de(de(de({}, d.vue), c.vue), {}, { componentWrapAttrs: de(de({}, d.vue.componentWrapAttrs), c.vue.componentWrapAttrs), slotWrapAttrs: de(de({}, d.vue.slotWrapAttrs), c.vue.slotWrapAttrs) }) })]);
  return p && d.unshift({}), Object.assign.apply(this, d);
}
var ZE = ["getElementById", "getElementsByClassName", "getElementsByTagName", "getElementsByTagNameNS", "querySelector", "querySelectorAll"], vd = { Document: {}, Element: {} };
function N6(c) {
  Object.keys(vd).forEach(function(p) {
    ZE.forEach(function(d) {
      var g = vd[p][d] || window[p].prototype[d];
      g && (vd[p][d] = g, window[p].prototype[d] = function() {
        for (var x = arguments.length, C = new Array(x), h = 0; h < x; h++) C[h] = arguments[h];
        var w = g.apply(this, C);
        return w && (w.constructor !== NodeList || w.constructor === NodeList && 0 < w.length) ? w : ((w = d) === "getElementById" && (w = "querySelector", C = ["#" + C[0]]), (vd.Element[w] || Element.prototype[w]).apply(c, C));
      });
    });
  });
}
function D6() {
  Object.keys(vd).forEach(function(c) {
    ZE.forEach(function(p) {
      window[c].prototype[p] = vd[c][p];
    });
  });
}
var M6 = ["ref"], O6 = ["key"], L6 = ["hashList"], n_ = parseInt(h_.version);
var j6 = (() => {
  function c(p) {
    return Tv(this, c), Dy(this, c, [p]);
  }
  return My(c, Te.Component), Nv(c, [{ key: "render", value: function() {
    var p = this.props.component, d = this.props.passedProps, d = (d.ref, Xo(d, M6));
    return Te.createElement(p, d, this.props.children);
  } }]);
})(), A6 = function(c, p, d) {
  var g = (() => {
    function x(C) {
      var h;
      return Tv(this, x), (h = Dy(this, x, [C])).state = de(de({}, C), p.isSlots ? { children: c } : {}), h.setRef = h.setRef.bind(h), h.vueInReactCall = h.vueInReactCall.bind(h), (h.__veauryVueWrapperRef__ = d).__veauryVueInReactCall__ = h.vueInReactCall, h;
    }
    return My(x, Te.Component), Nv(x, [{ key: "reactPropsLinkToVueInstance", value: function(C) {
      Object.keys(C).forEach(function(h) {
        d[h] || (d[h] = C[h]);
      }), Object.getOwnPropertyNames(C.__proto__).filter(function(h) {
        return ["constructor", "render"].indexOf(h) < 0;
      }).forEach(function(h) {
        d[h] || (d[h] = C[h]);
      });
    } }, { key: "setRef", value: function(C) {
      var h = this;
      C && (d.__veauryReactRef__ = C, this.reactPropsLinkToVueInstance(C), Promise.resolve().then(function() {
        return h.reactPropsLinkToVueInstance(C);
      }), (this.setRef.current = C).__veauryVueWrapperRef__ = d);
    } }, { key: "createSlot", value: function(C) {
      return { originVNode: C, inheritAttrs: !1, __fromReactSlot: !0, render: function() {
        var h, w;
        return ((h = C = (C = ((w = this.$slots) == null || (h = w.default) == null ? void 0 : h.call(w)) || C) instanceof Function ? C(this) : C) == null ? void 0 : h.length) === 1 && (w = C[0]) != null && w.data && ((h = this.$attrs).key, w = Xo(h, O6), C[0].props = de(de({}, w), C[0].props)), C;
      } };
    } }, { key: "componentWillUnmount", value: function() {
      d.__veauryReactRef__ && (d.__veauryReactRef__.__veauryVueWrapperRef__ = null, d.__veauryReactRef__ = null);
    } }, { key: "vueInReactCall", value: function(C) {
      var h = this, w = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
      return 2 < arguments.length && arguments[2] && C && C[0] ? C.map(function(R, b) {
        return ky(h.createSlot(R instanceof Function ? R : [R]), de(de(de({}, p), w), {}, { isSlots: !0, wrapInstance: d })).render({ key: R?.key || void 0 });
      }) : ky(this.createSlot(C), de(de(de({}, p), w), {}, { isSlots: !0, wrapInstance: d })).render();
    } }, { key: "render", value: function() {
      var C, h, w, R = this, ie = this.state, b = ie.hashList, D = Xo(ie, L6), A = {}, V = {};
      for (C in D) h = C, w = void 0, D.hasOwnProperty(h) && D[h] != null && (D[h].__slot ? (D[h].reactSlot ? D[h] = D[h].reactSlot : (w = D[h], p.defaultSlotsFormatter && D[h].__trueChildren ? (D[h].__trueChildren.__top__ = R.__veauryVueWrapperRef__, D[h] = p.defaultSlotsFormatter(D[h].__trueChildren, R.vueInReactCall, b), D[h] instanceof Array ? D[h] = Oy(D[h]) : -1 < ["string", "number"].indexOf(Zr(D[h])) ? D[h] = [D[h]] : Zr(D[h]) === "object" && (D[h] = de({}, D[h]))) : D[h] = de({}, ky(R.createSlot(D[h]), de(de({}, p), {}, { isSlots: !0, wrapInstance: d })).render()), D[h].vueFunction = w), A[h] = D[h]) : D[h].__scopedSlot && (D[h] = D[h](R.createSlot), V[h] = D[h]));
      var H, ae, ie = {};
      return ie.ref = this.setRef, p.isSlots ? this.state.children || this.props.children : (H = D, c.__syncUpdateForPureReactInVue && Object.keys(c.__syncUpdateForPureReactInVue).map(function(xe) {
        var we, Ee;
        H[xe] && typeof H[xe] == "function" && (we = R.__veauryVueWrapperRef__, Ee = H[xe], H[xe] = function() {
          for (var Ce = arguments.length, le = new Array(Ce), se = 0; se < Ce; se++) le[se] = arguments[se];
          we.__veaurySyncUpdateProps__(c.__syncUpdateForPureReactInVue[xe].apply(this, le)), Ee.apply(this, le), we.macroTaskUpdate = !0, we.__veauryMountReactComponent__(!0, !0, {});
        });
      }), ae = de(de(de({}, H = p.defaultPropsFormatter ? p.defaultPropsFormatter.call(this, H, this.vueInReactCall, b) : H), A), V), Object.getPrototypeOf(c) !== Function.prototype && (Zr(c) !== "object" || c.render) || x.catchVueRefs() ? (Object.getPrototypeOf(c) === Function.prototype && delete ie.ref, Te.createElement(c, Rc({}, ae, ie))) : Te.createElement(j6, Rc({ passedProps: ae, component: c }, ie), ae.children));
    } }], [{ key: "catchVueRefs", value: function() {
      if (d.$parent) {
        for (var C in d.$parent.$refs) if (d.$parent.$refs[C] === d) return !0;
      }
      return !1;
    } }]);
  })();
  return hd(g, "displayName", "applyReact_".concat(c.displayName || c.name || "Component")), g;
};
function m_(c) {
  var p = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
  return c.__esModule && c.default && (c = c.default), p.isSlots && (c = c()), p = JE(p, void 0, !0), { originReactComponent: c, setup: function(d, g) {
    var x, C, h, w;
    if (!p.isSlots) return x = {}, C = WT({}), h = YT(), typeof (w = p.useInjectPropsFromWrapper || c.__veauryInjectPropsFromWrapper__) == "function" && (typeof (w = w.call(h.proxy, d)) != "function" ? (Object.assign(C, w), x.__veauryInjectedProps__ = C) : h.proxy.__veauryInjectedComputed__ = w), x;
  }, data: function() {
    return { VEAURY_Portals: [] };
  }, created: function() {
    this.__veauryPortalKeyPool__ = [], this.__veauryMaxPortalCount__ = 0;
  }, computed: { __veauryInjectedProps__: function() {
    var d;
    return (d = this.__veauryInjectedComputed__) == null ? void 0 : d.call(this);
  } }, render: function() {
    var d = fu(p.react.componentWrap, de({ ref: "react" }, p.react.componentWrapAttrs || {}), this.VEAURY_Portals.map(function(g) {
      return (0, g.Portal)(fu, g.key);
    }));
    return this.__veauryCheckReactSlot__(this.$slots), d;
  }, methods: { __veauryCheckReactSlot__: function(d) {
    var g = this;
    function x(C, h, w) {
      return h[w] && (C[w] = h[w], 1);
    }
    Zr(d) === "object" && d != null && (d instanceof Array ? d.forEach(function(C) {
      g.__veauryCheckReactSlot__(C.children);
    }) : Object.keys(d).forEach(function(R) {
      var h, w, R = d[R];
      if (typeof R == "function") {
        try {
          h = R.apply(g, R.__reactArgs || [{}]);
        } catch {
          return;
        }
        (R.__trueChildren = h).forEach(function(b) {
          b.children && g.__veauryCheckReactSlot__(b.children);
        }), h.length !== 1 || x(R, h = h[0], "reactSlot") || x(R, h, "reactFunction") || h.type !== IE || ((w = h.children) == null ? void 0 : w.length) !== 1 || x(R, w = h.children[0], "reactSlot") || x(R, w, "reactFunction");
      }
    }));
  }, __veauryPushVuePortal__: function(d) {
    var g = this.__veauryPortalKeyPool__.shift() || this.__veauryMaxPortalCount__++;
    this.VEAURY_Portals.push({ Portal: d, key: g });
  }, __veauryRemoveVuePortal__: function(d) {
    var g, x = this.VEAURY_Portals.find(function(C, h) {
      if (C.Portal === d) return g = h, !0;
    });
    this.__veauryPortalKeyPool__.push(x.key), this.VEAURY_Portals.splice(g, 1);
  }, __veauryGetScopeSlot__: function(d, g, x) {
    var C = this;
    function h(w) {
      function R() {
        for (var b, D = this, A = arguments.length, V = new Array(A), H = 0; H < A; H++) V[H] = arguments[H];
        return d.reactFunction ? d.reactFunction.apply(this, V) : p.defaultSlotsFormatter ? ((b = d.apply(this, V)).__top__ = C, (b = p.defaultSlotsFormatter(b, C.__veauryVueInReactCall__, g)) instanceof Array || -1 < Zr(b).indexOf("string", "number") ? b = Oy(b) : Zr(b) === "object" && (b = de({}, b)), b) : ky(w(function() {
          return d.apply(D, V);
        }), de(de({}, p), {}, { isSlots: !0, wrapInstance: C })).render();
      }
      return p.pureTransformer && x ? R.vueFunction = x : R.vueFunction = d, R;
    }
    return h.__scopedSlot = !0, h;
  }, __veaurySyncUpdateProps__: function(d) {
    this.__veauryReactInstance__ && this.__veauryReactInstance__.setState(d);
  }, __veauryMountReactComponent__: function(d, g) {
    var x = arguments, C = this;
    return C6(pd().mark(function h() {
      var w, R, b, D, A, V, H, ae, ie, xe, we, Ee, Ce, le, se, We, Le;
      return pd().wrap(function(je) {
        for (; ; ) switch (je.prev = je.next) {
          case 0:
            if (w = 2 < x.length && x[2] !== void 0 ? x[2] : {}, R = {}, b = [], (ae = C.$.vnode.scopeId) && (R[ae] = "", b.push(ae)), D = {}, A = {}, d && (g == null || !g.slot)) {
              je.next = 18;
              break;
            }
            H = pd().mark(function Ge(Je) {
              var te;
              return pd().wrap(function(L) {
                for (; ; ) switch (L.prev = L.next) {
                  case 0:
                    if (C.$slots.hasOwnProperty(Je) && C.$slots[Je] != null) {
                      L.next = 2;
                      break;
                    }
                    return L.abrupt("return", 0);
                  case 2:
                    if ((te = p.react.vueNamedSlotsKey.find(function(Y) {
                      return Je.indexOf(Y) === 0;
                    })) || Je === "default") return te = Je.replace(new RegExp("^".concat(te)), ""), D[te] = C.$slots[Je], D[te].__slot = !0, L.abrupt("return", 0);
                    L.next = 8;
                    break;
                  case 8:
                    A[Je] = C.__veauryGetScopeSlot__(C.$slots[Je], b, (te = C.$.vnode) == null || (te = te.children) == null ? void 0 : te[Je]);
                  case 9:
                  case "end":
                    return L.stop();
                }
              }, Ge);
            }), je.t0 = pd().keys(C.$slots || {});
          case 10:
            if ((je.t1 = je.t0()).done) {
              je.next = 18;
              break;
            }
            return ae = je.t1.value, je.delegateYield(H(ae), "t2", 13);
          case 13:
            if (je.t2 === 0) return je.abrupt("continue", 10);
            je.next = 16;
            break;
          case 16:
            je.next = 10;
            break;
          case 18:
            if ((!d || g != null && g.slot) && (ie = de({}, D), V = ie.default, delete ie.default), C.__veauryLast__ = C.__veauryLast__ || {}, C.__veauryLast__.slot = C.__veauryLast__.slot || {}, C.__veauryLast__.attrs = C.__veauryLast__.attrs || {}, xe = { slot: function() {
              C.__veauryLast__.slot = de(de(de({}, V ? { children: V } : { children: null }), ie), A);
            }, attrs: function() {
              C.__veauryLast__.attrs = C.$attrs;
            } }, g && Object.keys(g).forEach(function(Ge) {
              return xe[Ge]();
            }), d) {
              je.next = 64;
              break;
            }
            if (C.__reactBoundedPromise__ = new Promise(function(Ge) {
              we = Ge;
            }), C.__reactBoundedPromise__.resolve = we, xe.slot(), xe.attrs(), le = A6(c, p, C), Ee = Te.createElement(le, Rc({}, C.$attrs, C.__veauryInjectedProps__, { children: V }, ie, A, C.$attrs.class ? { className: C.$attrs.class } : {}, R, { hashList: b }, C.$attrs.style ? { style: C.$attrs.style } : {}, { ref: function(Ge) {
              C.__veauryReactInstance__ = Ge, C.__reactBoundedPromise__.resolve(!0);
            } })), Ce = C.$refs.react, le = p.wrapInstance) {
              je.next = 47;
              break;
            }
            se = C.$parent;
          case 35:
            if (se) {
              if (se.parentReactWrapperRef) return le = se.parentReactWrapperRef, je.abrupt("break", 45);
              je.next = 39;
            } else je.next = 45;
            break;
          case 39:
            if (se.reactWrapperRef) return le = se.reactWrapperRef, je.abrupt("break", 45);
            je.next = 42;
            break;
          case 42:
            se = se.$parent, je.next = 35;
            break;
          case 45:
            je.next = 49;
            break;
          case 47:
            (le = p.wrapInstance).__veauryVueWrapperRef__ = C;
          case 49:
            if (le) return C.parentReactWrapperRef = le, C.reactPortal = function() {
              return h_.createPortal(Ee, Ce);
            }, le.pushReactPortal(C.reactPortal), je.abrupt("return");
            je.next = 54;
            break;
          case 54:
            if (17 < n_) return xv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED !== void 0 && (xv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = !0), We = p.react.createRoot || xv.createRoot, 18 < n_ && !We && console.warn("'react-dom 19' no longer supports dynamically determining whether to use 'render' or 'createRoot'. In order to be compatible with 'react-dom 17' and previous versions, you need to manually configure 'createRoot' in the veaury configuration."), C.__veauryReactApp__ = We(Ce), C.__veauryReactApp__.render(Ee), je.abrupt("return");
            je.next = 61;
            break;
          case 61:
            xv.render(Ee, Ce), je.next = 71;
            break;
          case 64:
            return je.next = 66, C.__reactBoundedPromise__;
          case 66:
            Le = function() {
              C.__veauryReactInstance__.setState(function(Ge) {
                return Object.keys(Ge).forEach(function(Je) {
                  p.isSlots && Je === "children" || delete Ge[Je];
                }), de(de(de(de({}, C.__veauryCache__), C.__veauryInjectedProps__), !p.isSlots && C.__veauryLast__.slot), C.__veauryLast__.attrs);
              }), C.__veauryCache__ = null;
            }, !C.microTaskUpdate || C.__veauryCache__ || C.$nextTick(function() {
              Le(), C.microTaskUpdate = !1;
            }), C.macroTaskUpdate && (clearTimeout(C.updateTimer), C.updateTimer = setTimeout(function() {
              clearTimeout(C.updateTimer), Le(), C.macroTaskUpdate = !1;
            })), C.__veauryCache__ = de(de({}, C.__veauryCache__ || {}), de(de(de(de({}, w), C.$attrs.class ? { className: C.$attrs.class } : {}), de({}, R)), {}, { hashList: b }, C.$attrs.style ? { style: C.$attrs.style } : {})), C.macroTaskUpdate || C.microTaskUpdate || Le();
          case 71:
          case "end":
            return je.stop();
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
    clearTimeout(this.updateTimer), N6(this.$refs.react), this.reactPortal ? (d = this.parentReactWrapperRef) != null && d.removeReactPortal(this.reactPortal) : 17 < n_ ? (d = this.__veauryReactApp__) != null && d.unmount() : xv.unmountComponentAtNode(this.$refs.react), D6();
  }, updated: function() {
    this.__VEAURY_IGNORE_STRANGE_UPDATE__ || this.__veauryMountReactComponent__(!0, { slot: !0 });
  }, inheritAttrs: !1, watch: { $attrs: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 }, __veauryInjectedProps__: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 } } };
}
var U6 = /* @__PURE__ */ new Set(["onClick", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onChange", "onInput", "onInvalid", "onReset", "onSubmit", "onError", "onLoad", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onGotPointerCapture", "onLostPointerCapture", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onSelect", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onScroll", "onWheel", "onAbort", "onCanPlay", "onCanPlayThrough", "onDurationChange", "onEmptied", "onEncrypted", "onEnded", "onError", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onPause", "onPlay", "onPlaying", "onProgress", "onRateChange", "onSeeked", "onSeeking", "onStalled", "onSuspend", "onTimeUpdate", "onVolumeChange", "onWaiting", "onLoad", "onError", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionEnd", "onToggle"]);
function z6(c, p) {
  for (var d = (c = p = c?._reactInternals || c?._reactInternalFiber || p) == null ? void 0 : c.return; d; ) {
    var g = d.stateNode;
    if (g = g?.parentVueWrapperRef || g?.__veauryVueWrapperRef__) return g;
    d = d.return;
  }
}
function DE(c, p, d) {
  var g = {};
  return d.forEach(function(x) {
    g[x] = !0;
  }), c[(p === "modelValue" ? "model" : p) + "Modifiers"] = g;
}
function ME(c, p, d) {
  var g = this, x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : "v-model";
  if (!(p instanceof Array)) throw Error("[error:veaury] Parameter type error from '".concat(x, "', a single v-model is an array, such as [val, setter, argumentKey, modifiers] or [val, setter, modifiers]"));
  if (typeof p[1] != "function") throw Error("[error:veaury] Parameter type error from '".concat(x, "', a single v-model is an array, the second element of the array must be a setter function"));
  var C = p[1], h = (typeof p[2] == "string" ? (d = p[2], p[3] instanceof Array && DE(c, d, p[3])) : p[2] instanceof Array && DE(c, d, p[2]), c["onUpdate:" + d]);
  c["onUpdate:" + d] = typeof h == "function" ? function() {
    for (var w = arguments.length, R = new Array(w), b = 0; b < w; b++) R[b] = arguments[b];
    h.apply(g, R), C.apply(g, R);
  } : C, c[d] = p[0];
}
function l_(c) {
  var p = this, d = {}, g = de({}, c);
  return Object.keys(c).forEach(function(x) {
    var C, h = x.match(/^onUpdate-([^-]+)/);
    if (h) delete g[x], C = d["onUpdate:".concat(h[1])], d["onUpdate:".concat(h[1])] = typeof C == "function" ? function() {
      for (var R = arguments.length, b = new Array(R), D = 0; D < R; D++) b[D] = arguments[D];
      C.apply(p, b), c[x].apply(p, b);
    } : c[x];
    else if (h = x.match(/^v-model($|:([^:]+)|-([^:]+))/)) h = h[2] || h[3] || "modelValue", ME(d, c[x], h), delete g[x];
    else if (x === "v-models") {
      if (Zr(c[x]) !== "object" || c[x] instanceof Array) throw Error("[error:veaury] The parameter 'v-models' must be an object type, such as {[argumentKey]: singleVModel}");
      var w = c[x];
      Object.keys(w).forEach(function(R) {
        ME(d, w[R], R, "v-models");
      }), delete g[x];
    }
  }), de(de({}, g), d);
}
var Ly = Nv(function c() {
  Tv(this, c), hd(this, "pool", /* @__PURE__ */ new Set());
}, [{ key: "getRandomId", value: function(c) {
  var p = c + (Math.random() + "").substr(2);
  return this.pool.has(p) ? this.getRandomId(c) : (this.pool.add(p), p);
} }]);
function ex(g, p) {
  var d, g = g.node;
  if (typeof g == "function" && (g = g()), (d = p) != null && d.current || typeof p == "function" || (d = p) != null && d.toString().match(/^function/) || (p = null), -1 < ["string", "number"].indexOf(Zr(g))) return g;
  if (g instanceof Array) {
    if (g.length !== 1) return g;
    g = g[0];
  }
  return de(de({}, g), {}, { ref: p });
}
var P6 = m_(ex);
function u_(c) {
  return fu(P6, { node: function() {
    return c.node;
  } });
}
u_.originReactComponent = Te.forwardRef(ex);
var I6 = ["component", "node"], F6 = ["component", "$slots", "children", "class", "style"], V6 = ["className", "classname"], bc = "veaury-options", OE = new Ly();
function H6(c, p) {
  var d;
  return c = typeof c == "string" && p ? (p = p.$) == null || (p = p.appContext) == null || (p = p.app) == null || (d = p.component) == null ? void 0 : d.call(p, c) : c;
}
function LE(c) {
  if (c) return Object.keys(c).forEach(function(p) {
    var d = c[p];
    d != null && (typeof d == "function" ? (c[p] = d, c[p].reactFunction = d) : (c[p] = function() {
      return d;
    }, c[p].reactSlot = d), d.vueFunction) && (c[p].vueFunction = d.vueFunction);
  }), c;
}
function $6(c) {
  var p;
  return (p = c.node) == null ? void 0 : p.call(c);
}
var s_ = Te.forwardRef(function(x, p) {
  var d, h = x.component, g = x.node, x = Xo(x, I6);
  if (h == null && g == null) return null;
  if (g != null) {
    if (g.$$typeof || typeof g == "string" || typeof g == "number") return g;
    typeof g != "function" && (d = g, g = function() {
      return d;
    });
  }
  var C, h = h || $6, w = JE(x[bc] || {}, void 0, !0), R = w.useInjectPropsFromWrapper || h.__veauryInjectPropsFromWrapper__;
  return w.isSlots || typeof R == "function" && (C = R(x)), Te.createElement(B6, Rc({}, de(de(de(de({ component: h }, g ? { node: g } : {}), x), C), {}, hd({}, bc, w)), { ref: p }));
}), B6 = (() => {
  function c(p) {
    var d;
    return Tv(this, c), (d = Dy(this, c, [p])).state = { portals: [] }, d.__veauryPortalKeyPool__ = [], d.__veauryMaxPortalCount__ = 0, d.__veauryCurrentVueComponent__ = p.component, d.__veauryCreateVueInstance__ = d.__veauryCreateVueInstance__.bind(d), d.__veauryVueComponentContainer__ = d.createVueComponentContainer(), d;
  }
  return My(c, Te.Component), Nv(c, [{ key: "pushReactPortal", value: function(p) {
    var d = this.state.portals, g = this.__veauryPortalKeyPool__.shift() || this.__veauryMaxPortalCount__++;
    d.push({ Portal: p, key: g }), this.setState({ portals: d });
  } }, { key: "removeReactPortal", value: function(p) {
    var d, g = this.state.portals, x = g.find(function(C, h) {
      if (C.Portal === p) return d = h, !0;
    });
    this.__veauryPortalKeyPool__.push(x.key), g.splice(d, 1), this.__veauryVueRef__ && this.setState({ portals: g });
  } }, { key: "createVueComponentContainer", value: function() {
    var p = this, d = {}, g = this.props[bc];
    return g.isSlots ? (Object.keys(this.props).forEach(function(x) {
      U6.has(x) && typeof p.props[x] == "function" && (d[x] = p.props[x]);
    }), g.vue.slotWrapAttrs && (d = de(de({}, d), g.vue.slotWrapAttrs))) : g.vue.componentWrapAttrs && (d = de(de({}, d), g.vue.componentWrapAttrs)), g.vue.componentWrapHOC(Te.createElement("div", Rc({}, g.vue.componentWrapAttrs, { ref: this.__veauryCreateVueInstance__, key: null })), d);
  } }, { key: "shouldComponentUpdate", value: function(p, d, g) {
    var x, C, h, w, R = this;
    return p === this.props || (x = p.component, C = (C = p["v-slots"]) === void 0 ? null : C, h = p.children, p = Xo(p, ["component", bc, "v-slots", "children"].map(Ny)), this.__veauryCurrentVueComponent__ !== x && this.updateVueComponent(x), x.__fromReactSlot) || this.__veauryVueInstance__ && (h && (C = C || {}, Zr(h) !== "object" || h instanceof Array || h.$$typeof ? C.default = h : C = h), (w = this.__veauryVueInstance__.$data.$slots) && Object.keys(w).forEach(function(b) {
      delete w[b];
    }), C && (w || (this.__veauryVueInstance__.$data.$slots = {}), Object.assign(this.__veauryVueInstance__.$data.$slots, LE(C))), Object.keys(this.__veauryVueInstance__.$data).forEach(function(b) {
      b !== "$slots" && delete R.__veauryVueInstance__.$data[b];
    }), this.__veauryVueInstance__) && Object.assign(this.__veauryVueInstance__.$data, l_(p)), !0;
  } }, { key: "componentWillUnmount", value: function() {
    this.vuePortal ? this.parentVueWrapperRef.__veauryRemoveVuePortal__(this.vuePortal) : (this.__veauryVueInstance__ && this.__veauryVueInstance__.$.appContext.app.unmount(), OE.pool.delete(this.__veauryVueTargetId__), this.vueCreated = !1);
  } }, { key: "componentDidMount", value: function() {
    this.__veauryCreateVueInstance__(this.vueContainerElement);
  } }, { key: "__veauryCreateVueInstance__", value: function(p) {
    var d, g, x, C, h, w, R, b, D = this;
    function A(V) {
      this.__veauryVueInstance__ || (this.__veauryVueInstance__ = V);
    }
    this.vueCreated || (this.vueCreated = !0, (d = this).vueContainerElement = p, (x = this.props).component, g = x[bc], R = x.children, b = (b = x["v-slots"]) === void 0 ? {} : b, x = Xo(x, ["component", bc, "children", "v-slots"].map(Ny)), R && (Zr(R) !== "object" || R instanceof Array || R.$$typeof ? b.default = R : b = R), (b = LE(b)) && (x.$slots = b), A = A.bind(this), C = de({}, l_(x)), h = { data: function() {
      return g.isSlots ? { children: d.__veauryCurrentVueComponent__.originVNode } : C;
    }, created: function() {
      this.reactWrapperRef = d, A(this);
    }, methods: { reactInVueCall: function(V) {
      return 2 < arguments.length && arguments[2] && V && V[0] ? V.map(function(H, ae) {
        return fu(u_, { node: H, key: (H == null || (H = H.data) == null ? void 0 : H.key) || ae });
      }) : fu(u_, { node: V });
    }, getScopedSlots: function(V, H) {
      var ae, ie = this, xe = (this.getScopedSlots.__scopeSlots || (this.getScopedSlots.__scopeSlots = {}), de({}, H));
      for (ae in xe) ((we) => {
        var Ee, Ce;
        !xe.hasOwnProperty(we) || (Ee = xe[we]) == null || (xe[we] = (Ce = Ee, function() {
          for (var le, se, We, Le, je = arguments.length, Ge = new Array(je), Je = 0; Je < je; Je++) Ge[Je] = arguments[Je];
          return Ce.vueFunction ? Ce.vueFunction.apply(ie, Ge) : (We = Ce.reactFunction, We = Ce.reactSlot || We?.apply(ie, Ge), Le = g.defaultSlotsFormatter, (le = ie.getScopedSlots.__scopeSlots[we]) != null && (le = le.component) != null && (le = le.ctx) != null && le.__veauryReactInstance__ ? (se = ie.getScopedSlots.__scopeSlots[we], Promise.resolve().then(function() {
            var te;
            (te = se) != null && (te = te.component) != null && (te = te.ctx) != null && (te = te.__veauryReactInstance__) != null && te.setState({ children: Ce.apply(ie, Ge) });
          })) : (se = Le && We ? [Le(We, ie.reactInVueCall)] : V(m_(function() {
            return Ce.apply(ie, Ge);
          }, de(de({}, g), {}, { isSlots: !0, wrapInstance: d }))), ie.getScopedSlots.__scopeSlots[we] = se), Ce.reactFunction ? se.reactFunction = Ce.reactFunction : Ce.reactSlot && (se.reactSlot = Ce.reactSlot), se);
        }), xe[we].reactFunction = Ee);
      })(ae);
      return xe;
    } }, mounted: function() {
      p.removeAttribute("id"), d.__veauryVueRef__ = this.$refs.use_vue_wrapper, this.$refs.use_vue_wrapper.reactWrapperRef = d;
    }, beforeUnmount: function() {
      d.__veauryVueRef__ = null, this.$refs.use_vue_wrapper.reactWrapperRef = null;
    }, render: function() {
      var V = this, Ee = this.$data, xe = (Ee.component, Ee.$slots), H = Ee.class, ae = Ee.style, Ee = Xo(Ee, F6), ie = this.getScopedSlots(fu, de({}, xe)), xe = Ee.className, we = Ee.classname, Ee = Xo(Ee, V6), Ce = {};
      return Object.keys(ie).forEach(function(le) {
        var se = ie[le];
        Ce[le] = typeof se == "function" ? se : function() {
          return se;
        };
      }), fu(H6(d.__veauryCurrentVueComponent__, this), de(de(de(de({}, Ee), H || xe || we ? { class: H || xe || we } : {}), ae ? { style: ae } : {}), {}, { ref: "use_vue_wrapper" }), de({}, g.isSlots && this.children ? { default: typeof this.children == "function" ? this.children : function() {
        return V.children;
      } } : de({}, Ce)));
    } }, p && (w = OE.getRandomId("__vue_wrapper_container_"), p.id = w, this.__veauryVueTargetId__ = w, (R = g.wrapInstance) ? (R = g.wrapInstance).reactWrapperRef = d : R = z6(this), R && document.getElementById(w) ? (this.parentVueWrapperRef = R, this.vuePortal = function(V, H) {
      return V(GT, { to: "#" + w, key: w }, [V(Object.assign(h, { router: D._router }))]);
    }, R.__veauryPushVuePortal__(this.vuePortal)) : (b = QT(h), typeof g.beforeVueAppMount == "function" && g.beforeVueAppMount(b), this.__veauryVueInstance__ = b.mount(p))));
  } }, { key: "updateVueComponent", value: function(p) {
    this.__veauryVueInstance__ && (p.__fromReactSlot ? this.__veauryVueInstance__.children = typeof p.originVNode == "function" ? p.originVNode : function() {
      return p.originVNode;
    } : (this.__veauryCurrentVueComponent__ = p, this.__veauryVueInstance__.$forceUpdate()));
  } }, { key: "render", value: function() {
    return Te.createElement(this.__veauryVueComponentContainer__, { portals: this.state.portals });
  } }]);
})();
function ky(c) {
  var p = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, d = (c || console.warn("Component must be passed in applyVueInReact!"), c.__esModule && c.default && (c = c.default), Te.forwardRef(function(g, x) {
    return Te.createElement(s_, Rc({}, g, { component: c, ref: x }, hd({}, bc, p)));
  }));
  return d.originVueComponent = c, d;
}
new Ly();
function q6(c) {
  var p = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, d = p.globalName, g = m_(c, p.combinedOption || {});
  return g.install = function(x) {
    var C = (1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}).globalName;
    return d && x.component(C || d, g), g;
  }, g;
}
function jE(c) {
  return c.replace(/-(\w)/g, function(p, d) {
    return d.toUpperCase();
  });
}
function jy(c) {
  var p;
  return c ? typeof c == "string" ? (c = c.trim()).split(/\s*;\s*/).reduce(function(d, g) {
    return g && (g = g.split(/\s*:\s*/)).length === 2 && Object.assign(d, hd({}, jE(g[0]), g[1])), d;
  }, {}) : Zr(c) === "object" ? (p = {}, Object.keys(c).forEach(function(d) {
    p[jE(d)] = c[d];
  }), p) : {} : {};
}
function Ay(c) {
  return c ? c instanceof Array ? c : typeof c == "string" ? (c = c.trim()).split(/\s+/) : Zr(c) === "object" ? Object.keys(c).filter(function(p) {
    return !!c[p];
  }) : [] : [];
}
var W6 = ["ref"];
function Y6(c, p, d, g, x) {
  var C = c.props || {}, C = (C.ref, Xo(C, W6)), h = {}, w = (Object.keys(c.children || {}).forEach(function(D) {
    var A = c.children[D], V = XE.react.vueNamedSlotsKey.find(function(H) {
      return D.indexOf(H) === 0;
    });
    V || D === "default" ? (V = D.replace(new RegExp("^".concat(V)), "").replace(/^default$/, "children"), h[V] = g.call(c.__top__, A(), d, x)) : typeof A == "function" && (h[D] = function() {
      for (var H = arguments.length, ae = new Array(H), ie = 0; ie < H; ie++) ae[ie] = arguments[ie];
      return A.__reactArgs = ae, g(A.apply(this, ae), d, x);
    });
  }), {}), R = jy(C.style), b = Array.from(new Set(Ay(C.class))).join(" ");
  return 0 < Object.keys(R).length && (w.style = R), b !== "" && (w.className = b), Object.assign(C, de(de({}, w), h)), delete C.class, typeof C.ref_for == "boolean" && delete C.ref_for, C;
}
function AE(c) {
  return c.type === XT;
}
new Ly();
function tx(c, p) {
  var d;
  return 0 < ((d = c.dirs) == null ? void 0 : d.length) ? Te.createElement(G6, { vnode: c }, p) : p;
}
var G6 = (() => {
  function c(p) {
    var d;
    return Tv(this, c), (d = Dy(this, c, [p])).state = { prevVnode: null, savedDirectives: [], ref: null, prevProps: p }, d;
  }
  return My(c, Te.Component), Nv(c, [{ key: "findDirectiveName", value: function(p) {
    var d = p.dir, g = -1;
    return [this.state.savedDirectives.find(function(x, C) {
      if (x.dir === d) return g = C, !0;
    }), g];
  } }, { key: "doDirective", value: function() {
    var p = this, C = this.state, d = C.savedDirectives;
    if (!(g = C.ref)) {
      for (var g = (this._reactInternals || this._reactInternalFiber).child; g && g.tag !== 5; ) g = g.child;
      if (!g) return;
      g = g.stateNode;
    }
    var x = this.props.vnode, C = x.dirs;
    C && (C.forEach(function(h) {
      var w, R, b, D, A, V, H;
      h && (H = (w = NE(p.findDirectiveName(h), 2))[0], w = w[1], R = (A = h.dir).created, b = A.beforeMount, D = A.mounted, V = A.beforeUpdate, A = A.updated, H ? (d[w] = de(de(de({}, H), h), {}, { oldValue: H.oldValue }), H = [g, d[w], x, p.state.prevVnode], V?.apply(null, H), A?.apply(null, H), d[w].oldValue = h.value) : (d.push(h), V = [g, h, x, null], R?.apply(null, V), b?.apply(null, V), D?.apply(null, V), h.oldValue = h.value));
    }), this.setState({ prevVnode: de({}, x), savedDirectives: d, ref: g }));
  } }, { key: "componentDidMount", value: function() {
    this.doDirective();
  } }, { key: "componentDidUpdate", value: function(p) {
    p.vnode !== this.props.vnode && this.doDirective();
  } }, { key: "componentWillUnmount", value: function() {
    var p = this, d = this.props.vnode, h = this.state, g = h.savedDirectives, x = h.ref, C = h.prevVnode, h = d.dirs;
    h && (h.forEach(function(w) {
      var R, b, D, A;
      w && (R = (A = NE(p.findDirectiveName(w), 2))[0]) && (b = (D = w.dir).beforeUnmount, D = D.unmounted, g[A[1]] = de(de({}, R), w), A = [x, R, d, C], b?.apply(null, A), D != null) && D.apply(null, A);
    }), this.setState({ prevVnode: de({}, d), savedDirectives: g }));
  } }, { key: "render", value: function() {
    var p = this.props;
    return p.vnode, p.children;
  } }]);
})();
function Q6(c, p) {
  var d;
  return typeof c == "function" && (d = c.toString(), c.prototype !== void 0) && c.prototype.constructor === c && (d.slice(0, 5) == "class" || 2 <= Object.getOwnPropertyNames(c.prototype).length || !/^function\s+\(|^function\s+anonymous\(/.test(d) && (!(!p || !/^function\s+[A-Z]/.test(d)) || !!/\b\(this\b|\bthis[\.\[]\b/.test(d) && (!(p && !/classCallCheck\(this/.test(d)) || /^function\sdefault_\d+\s*\(/.test(d))));
}
function nx(c, p) {
  var d, g, x, C;
  return typeof ((x = c.type) == null ? void 0 : x.originReactComponent) != "function" || Q6((x = c.type) == null ? void 0 : x.originReactComponent) ? ((x = c.ref) != null && x.k ? (d = (x = c.ref) == null ? void 0 : x.k, g = (x = c.ref) == null ? void 0 : x.r) : d = (x = c.ref) == null ? void 0 : x.r, d && typeof d == "string" && (C = d, d = function(h) {
    var w;
    (w = c.ref) != null && (w = w.i) != null && w.refs && ((w = de({}, c.ref.i.refs))[C] = h, c.ref.i.refs = w), g ? g.value = h : c.ref.i.setupState && C in c.ref.i.setupState && (c.ref.i.setupState[C] = h), h && (h.__syncUpdateProps = function() {
      p.__top__ && (c.__extraData = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, p.__top__.__syncUpdateProps({}));
    });
  }, d = new Proxy(d, { get: function(h, w) {
    return h[w];
  }, set: function(h, w, R) {
    var b;
    return (b = c.ref) != null && (b = b.i) != null && b.refs && C in ((b = c.ref) == null || (b = b.i) == null ? void 0 : b.refs) && ((b = de({}, c.ref.i.refs))[w] = R, c.ref.i.refs = b), R;
  } })), d) : null;
}
function c_(c, p) {
  return !p || p instanceof Array && p.length === 0 || (typeof p == "string" && (p = [p]), (c = de({}, c)).props = de({}, c.props), p.forEach(function(d) {
    c.props[d] = "";
  })), c;
}
var K6 = ["style", "class"];
function UE(c, p, d, g, x, C, h) {
  var w, R, b;
  return p === "all" || p instanceof Array || (p = p ? [p] : []), c.type === IE ? x.call(h, c.children, d, C) : typeof c.type == "string" && (p === "all" || -1 < p.indexOf(c.type)) ? (p = nx(c), b = (R = c.props || {}).style, w = R.class, R = de(de({}, Xo(R, K6)), {}, { style: jy(b), className: Array.from(new Set(Ay(w))).join(" ") }, p ? { ref: p } : {}), (b = c.children || R.children) && ((b = -1 < ["string", "number"].indexOf(Zr(b)) ? [b] : Oy(b)).__top__ = h), tx(c, c_(La.createElement(c.type, R, x.call(h, b, d, C)), c.scopeId))) : d([c], null, g);
}
function X6() {
  var c = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, p = 1 < arguments.length ? arguments[1] : void 0, d = 2 < arguments.length ? arguments[2] : void 0;
  return d.__syncUpdateForPureReactInVue && Object.keys(d.__syncUpdateForPureReactInVue).map(function(g) {
    var x;
    c[g] && typeof c[g] == "function" && p.__top__ && (x = c[g], c[g] = function() {
      for (var C = arguments.length, h = new Array(C), w = 0; w < C; w++) h[w] = arguments[w];
      p.__extraData = d.__syncUpdateForPureReactInVue[g].apply(this, h), p.__top__.__veaurySyncUpdateProps__({}), p.__top__.macroTaskUpdate = !0, x.apply(this, h), p.__top__ && Promise.resolve().then(function() {
        p.__extraData = null, p.__top__.__veauryMountReactComponent__(!0);
      });
    });
  }), c;
}
function zE(c, p, d) {
  return !((c = c instanceof Array && c.length === 1 ? c[0] : c) instanceof Array) && c.key == null && 1 < p.length && ((c = de({}, c)).key = "_key_".concat(d)), c;
}
function rx(g) {
  var p = g.reactComponents, d = g.domTags, g = g.division, x = g === void 0 || g;
  return function C(h, w, R) {
    var b;
    return h && h.forEach ? (h.__top__ || (h.__top__ = this), b = [], h.forEach(function(D, A) {
      if (D && D.type !== KT) {
        if ((ae = D.type) == null || !ae.originReactComponent) return D.$$typeof || typeof D == "string" || typeof D == "number" ? void b.push(D) : AE(D) ? void (D.children.trim() !== "" && b.push(D.children.trim())) : void (D.type && (c_(ae = zE(UE(D, d, w, x, C, R, h.__top__), h, A), D.scopeId), b.push(ae)));
        var V, H, ae = D.type.originReactComponent;
        c_(V = zE(V = (p = p === "all" || p instanceof Array ? p : [p]) === "all" || -1 < p.indexOf(ae) ? (D.__top__ = h.__top__, V = Y6(D, "_key_".concat(A), w, C, R), H = nx(D, h), D.children && (D.children.__top__ = h.__top__), tx(D, La.createElement(ae, de(de(de({}, X6(V, D, ae)), D.__extraData || {}), H ? { ref: H } : {})))) : AE(D) ? D.text : UE(D, d, w, x, C, R), h, A), D.scopeId), b.push(V);
      }
    }), b.length === 1 ? b[0] : b) : h;
  };
}
var r_ = rx({ reactComponents: "all", domTags: "all" });
function J6(c, p) {
  return q6(c, { combinedOption: de({ pureTransformer: !0, defaultSlotsFormatter: r_, defaultPropsFormatter: function(d, g, x) {
    var C = {};
    return Object.keys(d).forEach(function(h) {
      var w = d[h];
      w && (w.vueFunction ? (C[h] = function() {
        for (var R = arguments.length, b = new Array(R), D = 0; D < R; D++) b[D] = arguments[D];
        return r_(w.vueFunction.apply(this, b), g, x);
      }, Object.defineProperty(C[h], "length", { get: function() {
        return w.vueFunction.length;
      } })) : w.vueSlot && (C[h] = r_(w.vueSlot, g, x)));
    }), Object.assign(d, C);
  } }, p) });
}
rx({ reactComponents: "all", domTags: "all" });
var Z6 = ["ref", "children", "v-slots"];
function e7(R, p, d, g, x) {
  var R = R.props || {}, b = (R.ref, R.children), h = R["v-slots"], C = h === void 0 ? {} : h, h = Xo(R, Z6), w = (b && (Zr(b) !== "object" || b instanceof Array || b.$$typeof ? C.default = b : C = b), null), R = (Object.keys(C || {}).forEach(function(A) {
    var V = C[A];
    (w = w || {})[A] = function() {
      if (typeof V == "function") {
        for (var H = arguments.length, ae = new Array(H), ie = 0; ie < H; ie++) ae[ie] = arguments[ie];
        V = V.apply(this, ae);
      }
      return g(V, d, x);
    };
  }), {}), b = jy(h.style), D = Array.from(new Set(Ay(h.className))).join(" ");
  return 0 < Object.keys(b).length && (R.style = b), D !== "" && (R.class = D), Object.assign(h, de({}, R)), delete h.className, { props: h = l_(h), slots: w };
}
function ax(c) {
  var p = c.ref;
  if (p) return Zr(p) === "object" ? function(d) {
    c.ref.current = d;
  } : typeof p == "function" ? p : void 0;
}
var t7 = ["style", "class", "children"];
function PE(c, p, d, g, x, C) {
  var h, w, R, b;
  return p === "all" || p instanceof Array || (p = p ? [p] : []), c.type === Te.Fragment ? x((h = c.props) == null ? void 0 : h.children, d) : typeof c.type == "string" && (p === "all" || -1 < p.indexOf(c.type)) ? (h = ax(c), b = (p = c.props || {}).style, R = p.class, w = p.children, p = Xo(p, t7), R = Array.from(new Set(Ay(R))).join(" "), b = jy(b), p = de(de(de(de({}, p), Object.keys(b).length === 0 ? {} : { style: b }), R ? { className: R } : {}), h ? { ref: h } : {}), Object.keys(p).length === 0 && (p = null), (b = w) && ((b = -1 < ["string", "number"].indexOf(Zr(b)) ? [b] : b instanceof Array ? Oy(b) : de({}, b)).__top__ = C), fu(c.type, p, x(b, d))) : d([c], null, g);
}
function ox(g) {
  var p = g.vueComponents, d = g.domTags, g = g.division, x = g === void 0 || g;
  return function C(h, w) {
    if (h == null) return h;
    h instanceof Array || (h = [h]);
    var R = [];
    return h.forEach(function(b, D) {
      if (((A = b.type) == null || !A.originVueComponent) && b.type !== s_) return b.__v_isVNode || typeof b == "string" || typeof b == "number" ? void R.push(b) : void (b.type && (A = PE(b, d, w, x, C, h.__top__), R.push(A)));
      var A = b.type.originVueComponent;
      if (b.type === s_) {
        if (!b.props.component) return void R.push(b.props.node);
        A = b.props.component, b = de({}, b);
        var V = de({}, b.props);
        delete V.component, b.props = V;
      }
      A = (p = p === "all" || p instanceof Array ? p : [p]) === "all" || -1 < p.indexOf(A) ? ((b = de({}, b)).__top__ = h.__top__, D = (V = e7(b, "_key_".concat(D), w, C)).props, V = V.slots, ax(b), b.children && (b.children.__top__ = h.__top__), fu(A, de({}, D), V)) : PE(b, d, w, x, C), R.push(A);
    }), (R = R.flat(1 / 0)).length === 1 ? R[0] : R;
  };
}
ox({ vueComponents: "all", domTags: "all" });
ox({ reactComponents: "all", domTags: "all" });
new Ly();
const n7 = /* @__PURE__ */ JT({
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
    const p = c, d = ZT(() => typeof p.user_id == "string" ? Number(p.user_id) : p.user_id), g = J6(d6);
    return (x, C) => (t3(), e3(n3(g), {
      token: c.token,
      dataSource: c.dataSource,
      baseUrl: c.baseUrl,
      user_id: d.value,
      copilot_llm_endpoint: c.copilot_llm_endpoint,
      user_name: c.user_name,
      style: { height: "100%", width: "100%" }
    }, null, 8, ["token", "dataSource", "baseUrl", "user_id", "copilot_llm_endpoint", "user_name"]));
  }
}), l7 = {
  install(c) {
    c.component("CopilotApp", n7);
  }
};
export {
  n7 as CopilotApp,
  l7 as default
};
