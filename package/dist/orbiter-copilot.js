import { Fragment as PE, h as su, reactive as qT, getCurrentInstance as WT, Teleport as YT, createApp as GT, Comment as QT, Text as KT, defineComponent as XT, computed as JT, createBlock as ZT, openBlock as e3, unref as t3 } from "vue";
function IE(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var Cy = { exports: {} }, Cv = {}, Ey = { exports: {} }, jt = {};
var XC;
function n3() {
  if (XC) return jt;
  XC = 1;
  var c = /* @__PURE__ */ Symbol.for("react.element"), d = /* @__PURE__ */ Symbol.for("react.portal"), p = /* @__PURE__ */ Symbol.for("react.fragment"), _ = /* @__PURE__ */ Symbol.for("react.strict_mode"), x = /* @__PURE__ */ Symbol.for("react.profiler"), C = /* @__PURE__ */ Symbol.for("react.provider"), h = /* @__PURE__ */ Symbol.for("react.context"), w = /* @__PURE__ */ Symbol.for("react.forward_ref"), k = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), M = /* @__PURE__ */ Symbol.for("react.lazy"), U = Symbol.iterator;
  function V(F) {
    return F === null || typeof F != "object" ? null : (F = U && F[U] || F["@@iterator"], typeof F == "function" ? F : null);
  }
  var H = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, re = Object.assign, ue = {};
  function xe(F, J, et) {
    this.props = F, this.context = J, this.refs = ue, this.updater = et || H;
  }
  xe.prototype.isReactComponent = {}, xe.prototype.setState = function(F, J) {
    if (typeof F != "object" && typeof F != "function" && F != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, F, J, "setState");
  }, xe.prototype.forceUpdate = function(F) {
    this.updater.enqueueForceUpdate(this, F, "forceUpdate");
  };
  function be() {
  }
  be.prototype = xe.prototype;
  function ge(F, J, et) {
    this.props = F, this.context = J, this.refs = ue, this.updater = et || H;
  }
  var Ee = ge.prototype = new be();
  Ee.constructor = ge, re(Ee, xe.prototype), Ee.isPureReactComponent = !0;
  var se = Array.isArray, ie = Object.prototype.hasOwnProperty, ne = { current: null }, Ce = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Te(F, J, et) {
    var He, ht = {}, at = null, Pe = null;
    if (J != null) for (He in J.ref !== void 0 && (Pe = J.ref), J.key !== void 0 && (at = "" + J.key), J) ie.call(J, He) && !Ce.hasOwnProperty(He) && (ht[He] = J[He]);
    var dt = arguments.length - 2;
    if (dt === 1) ht.children = et;
    else if (1 < dt) {
      for (var mt = Array(dt), Jt = 0; Jt < dt; Jt++) mt[Jt] = arguments[Jt + 2];
      ht.children = mt;
    }
    if (F && F.defaultProps) for (He in dt = F.defaultProps, dt) ht[He] === void 0 && (ht[He] = dt[He]);
    return { $$typeof: c, type: F, key: at, ref: Pe, props: ht, _owner: ne.current };
  }
  function qe(F, J) {
    return { $$typeof: c, type: F.type, key: J, ref: F.ref, props: F.props, _owner: F._owner };
  }
  function le(F) {
    return typeof F == "object" && F !== null && F.$$typeof === c;
  }
  function ze(F) {
    var J = { "=": "=0", ":": "=2" };
    return "$" + F.replace(/[=:]/g, function(et) {
      return J[et];
    });
  }
  var A = /\/+/g;
  function X(F, J) {
    return typeof F == "object" && F !== null && F.key != null ? ze("" + F.key) : J.toString(36);
  }
  function _e(F, J, et, He, ht) {
    var at = typeof F;
    (at === "undefined" || at === "boolean") && (F = null);
    var Pe = !1;
    if (F === null) Pe = !0;
    else switch (at) {
      case "string":
      case "number":
        Pe = !0;
        break;
      case "object":
        switch (F.$$typeof) {
          case c:
          case d:
            Pe = !0;
        }
    }
    if (Pe) return Pe = F, ht = ht(Pe), F = He === "" ? "." + X(Pe, 0) : He, se(ht) ? (et = "", F != null && (et = F.replace(A, "$&/") + "/"), _e(ht, J, et, "", function(Jt) {
      return Jt;
    })) : ht != null && (le(ht) && (ht = qe(ht, et + (!ht.key || Pe && Pe.key === ht.key ? "" : ("" + ht.key).replace(A, "$&/") + "/") + F)), J.push(ht)), 1;
    if (Pe = 0, He = He === "" ? "." : He + ":", se(F)) for (var dt = 0; dt < F.length; dt++) {
      at = F[dt];
      var mt = He + X(at, dt);
      Pe += _e(at, J, et, mt, ht);
    }
    else if (mt = V(F), typeof mt == "function") for (F = mt.call(F), dt = 0; !(at = F.next()).done; ) at = at.value, mt = He + X(at, dt++), Pe += _e(at, J, et, mt, ht);
    else if (at === "object") throw J = String(F), Error("Objects are not valid as a React child (found: " + (J === "[object Object]" ? "object with keys {" + Object.keys(F).join(", ") + "}" : J) + "). If you meant to render a collection of children, use an array instead.");
    return Pe;
  }
  function Qe(F, J, et) {
    if (F == null) return F;
    var He = [], ht = 0;
    return _e(F, He, "", "", function(at) {
      return J.call(et, at, ht++);
    }), He;
  }
  function je(F) {
    if (F._status === -1) {
      var J = F._result;
      J = J(), J.then(function(et) {
        (F._status === 0 || F._status === -1) && (F._status = 1, F._result = et);
      }, function(et) {
        (F._status === 0 || F._status === -1) && (F._status = 2, F._result = et);
      }), F._status === -1 && (F._status = 0, F._result = J);
    }
    if (F._status === 1) return F._result.default;
    throw F._result;
  }
  var ke = { current: null }, ae = { transition: null }, Le = { ReactCurrentDispatcher: ke, ReactCurrentBatchConfig: ae, ReactCurrentOwner: ne };
  function Se() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return jt.Children = { map: Qe, forEach: function(F, J, et) {
    Qe(F, function() {
      J.apply(this, arguments);
    }, et);
  }, count: function(F) {
    var J = 0;
    return Qe(F, function() {
      J++;
    }), J;
  }, toArray: function(F) {
    return Qe(F, function(J) {
      return J;
    }) || [];
  }, only: function(F) {
    if (!le(F)) throw Error("React.Children.only expected to receive a single React element child.");
    return F;
  } }, jt.Component = xe, jt.Fragment = p, jt.Profiler = x, jt.PureComponent = ge, jt.StrictMode = _, jt.Suspense = k, jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Le, jt.act = Se, jt.cloneElement = function(F, J, et) {
    if (F == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + F + ".");
    var He = re({}, F.props), ht = F.key, at = F.ref, Pe = F._owner;
    if (J != null) {
      if (J.ref !== void 0 && (at = J.ref, Pe = ne.current), J.key !== void 0 && (ht = "" + J.key), F.type && F.type.defaultProps) var dt = F.type.defaultProps;
      for (mt in J) ie.call(J, mt) && !Ce.hasOwnProperty(mt) && (He[mt] = J[mt] === void 0 && dt !== void 0 ? dt[mt] : J[mt]);
    }
    var mt = arguments.length - 2;
    if (mt === 1) He.children = et;
    else if (1 < mt) {
      dt = Array(mt);
      for (var Jt = 0; Jt < mt; Jt++) dt[Jt] = arguments[Jt + 2];
      He.children = dt;
    }
    return { $$typeof: c, type: F.type, key: ht, ref: at, props: He, _owner: Pe };
  }, jt.createContext = function(F) {
    return F = { $$typeof: h, _currentValue: F, _currentValue2: F, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, F.Provider = { $$typeof: C, _context: F }, F.Consumer = F;
  }, jt.createElement = Te, jt.createFactory = function(F) {
    var J = Te.bind(null, F);
    return J.type = F, J;
  }, jt.createRef = function() {
    return { current: null };
  }, jt.forwardRef = function(F) {
    return { $$typeof: w, render: F };
  }, jt.isValidElement = le, jt.lazy = function(F) {
    return { $$typeof: M, _payload: { _status: -1, _result: F }, _init: je };
  }, jt.memo = function(F, J) {
    return { $$typeof: b, type: F, compare: J === void 0 ? null : J };
  }, jt.startTransition = function(F) {
    var J = ae.transition;
    ae.transition = {};
    try {
      F();
    } finally {
      ae.transition = J;
    }
  }, jt.unstable_act = Se, jt.useCallback = function(F, J) {
    return ke.current.useCallback(F, J);
  }, jt.useContext = function(F) {
    return ke.current.useContext(F);
  }, jt.useDebugValue = function() {
  }, jt.useDeferredValue = function(F) {
    return ke.current.useDeferredValue(F);
  }, jt.useEffect = function(F, J) {
    return ke.current.useEffect(F, J);
  }, jt.useId = function() {
    return ke.current.useId();
  }, jt.useImperativeHandle = function(F, J, et) {
    return ke.current.useImperativeHandle(F, J, et);
  }, jt.useInsertionEffect = function(F, J) {
    return ke.current.useInsertionEffect(F, J);
  }, jt.useLayoutEffect = function(F, J) {
    return ke.current.useLayoutEffect(F, J);
  }, jt.useMemo = function(F, J) {
    return ke.current.useMemo(F, J);
  }, jt.useReducer = function(F, J, et) {
    return ke.current.useReducer(F, J, et);
  }, jt.useRef = function(F) {
    return ke.current.useRef(F);
  }, jt.useState = function(F) {
    return ke.current.useState(F);
  }, jt.useSyncExternalStore = function(F, J, et) {
    return ke.current.useSyncExternalStore(F, J, et);
  }, jt.useTransition = function() {
    return ke.current.useTransition();
  }, jt.version = "18.3.1", jt;
}
var wv = { exports: {} };
wv.exports;
var JC;
function r3() {
  return JC || (JC = 1, (function(c, d) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = "18.3.1", _ = /* @__PURE__ */ Symbol.for("react.element"), x = /* @__PURE__ */ Symbol.for("react.portal"), C = /* @__PURE__ */ Symbol.for("react.fragment"), h = /* @__PURE__ */ Symbol.for("react.strict_mode"), w = /* @__PURE__ */ Symbol.for("react.profiler"), k = /* @__PURE__ */ Symbol.for("react.provider"), b = /* @__PURE__ */ Symbol.for("react.context"), M = /* @__PURE__ */ Symbol.for("react.forward_ref"), U = /* @__PURE__ */ Symbol.for("react.suspense"), V = /* @__PURE__ */ Symbol.for("react.suspense_list"), H = /* @__PURE__ */ Symbol.for("react.memo"), re = /* @__PURE__ */ Symbol.for("react.lazy"), ue = /* @__PURE__ */ Symbol.for("react.offscreen"), xe = Symbol.iterator, be = "@@iterator";
      function ge(S) {
        if (S === null || typeof S != "object")
          return null;
        var L = xe && S[xe] || S[be];
        return typeof L == "function" ? L : null;
      }
      var Ee = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, se = {
        transition: null
      }, ie = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ne = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ce = {}, Te = null;
      function qe(S) {
        Te = S;
      }
      Ce.setExtraStackFrame = function(S) {
        Te = S;
      }, Ce.getCurrentStack = null, Ce.getStackAddendum = function() {
        var S = "";
        Te && (S += Te);
        var L = Ce.getCurrentStack;
        return L && (S += L() || ""), S;
      };
      var le = !1, ze = !1, A = !1, X = !1, _e = !1, Qe = {
        ReactCurrentDispatcher: Ee,
        ReactCurrentBatchConfig: se,
        ReactCurrentOwner: ne
      };
      Qe.ReactDebugCurrentFrame = Ce, Qe.ReactCurrentActQueue = ie;
      function je(S) {
        {
          for (var L = arguments.length, G = new Array(L > 1 ? L - 1 : 0), Z = 1; Z < L; Z++)
            G[Z - 1] = arguments[Z];
          ae("warn", S, G);
        }
      }
      function ke(S) {
        {
          for (var L = arguments.length, G = new Array(L > 1 ? L - 1 : 0), Z = 1; Z < L; Z++)
            G[Z - 1] = arguments[Z];
          ae("error", S, G);
        }
      }
      function ae(S, L, G) {
        {
          var Z = Qe.ReactDebugCurrentFrame, we = Z.getStackAddendum();
          we !== "" && (L += "%s", G = G.concat([we]));
          var lt = G.map(function(Oe) {
            return String(Oe);
          });
          lt.unshift("Warning: " + L), Function.prototype.apply.call(console[S], console, lt);
        }
      }
      var Le = {};
      function Se(S, L) {
        {
          var G = S.constructor, Z = G && (G.displayName || G.name) || "ReactClass", we = Z + "." + L;
          if (Le[we])
            return;
          ke("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", L, Z), Le[we] = !0;
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
        enqueueForceUpdate: function(S, L, G) {
          Se(S, "forceUpdate");
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
          Se(S, "replaceState");
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
          Se(S, "setState");
        }
      }, J = Object.assign, et = {};
      Object.freeze(et);
      function He(S, L, G) {
        this.props = S, this.context = L, this.refs = et, this.updater = G || F;
      }
      He.prototype.isReactComponent = {}, He.prototype.setState = function(S, L) {
        if (typeof S != "object" && typeof S != "function" && S != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, L, "setState");
      }, He.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate");
      };
      {
        var ht = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, at = function(S, L) {
          Object.defineProperty(He.prototype, S, {
            get: function() {
              je("%s(...) is deprecated in plain JavaScript React classes. %s", L[0], L[1]);
            }
          });
        };
        for (var Pe in ht)
          ht.hasOwnProperty(Pe) && at(Pe, ht[Pe]);
      }
      function dt() {
      }
      dt.prototype = He.prototype;
      function mt(S, L, G) {
        this.props = S, this.context = L, this.refs = et, this.updater = G || F;
      }
      var Jt = mt.prototype = new dt();
      Jt.constructor = mt, J(Jt, He.prototype), Jt.isPureReactComponent = !0;
      function zn() {
        var S = {
          current: null
        };
        return Object.seal(S), S;
      }
      var Or = Array.isArray;
      function Tn(S) {
        return Or(S);
      }
      function sr(S) {
        {
          var L = typeof Symbol == "function" && Symbol.toStringTag, G = L && S[Symbol.toStringTag] || S.constructor.name || "Object";
          return G;
        }
      }
      function Gn(S) {
        try {
          return Qn(S), !1;
        } catch {
          return !0;
        }
      }
      function Qn(S) {
        return "" + S;
      }
      function Zr(S) {
        if (Gn(S))
          return ke("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sr(S)), Qn(S);
      }
      function Co(S, L, G) {
        var Z = S.displayName;
        if (Z)
          return Z;
        var we = L.displayName || L.name || "";
        return we !== "" ? G + "(" + we + ")" : G;
      }
      function ga(S) {
        return S.displayName || "Context";
      }
      function nr(S) {
        if (S == null)
          return null;
        if (typeof S.tag == "number" && ke("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
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
          case U:
            return "Suspense";
          case V:
            return "SuspenseList";
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case b:
              var L = S;
              return ga(L) + ".Consumer";
            case k:
              var G = S;
              return ga(G._context) + ".Provider";
            case M:
              return Co(S, S.render, "ForwardRef");
            case H:
              var Z = S.displayName || null;
              return Z !== null ? Z : nr(S.type) || "Memo";
            case re: {
              var we = S, lt = we._payload, Oe = we._init;
              try {
                return nr(Oe(lt));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Nn = Object.prototype.hasOwnProperty, Kn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, br, to, Pn;
      Pn = {};
      function Rr(S) {
        if (Nn.call(S, "ref")) {
          var L = Object.getOwnPropertyDescriptor(S, "ref").get;
          if (L && L.isReactWarning)
            return !1;
        }
        return S.ref !== void 0;
      }
      function _a(S) {
        if (Nn.call(S, "key")) {
          var L = Object.getOwnPropertyDescriptor(S, "key").get;
          if (L && L.isReactWarning)
            return !1;
        }
        return S.key !== void 0;
      }
      function no(S, L) {
        var G = function() {
          br || (br = !0, ke("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        G.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: G,
          configurable: !0
        });
      }
      function Eo(S, L) {
        var G = function() {
          to || (to = !0, ke("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        G.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: G,
          configurable: !0
        });
      }
      function Ne(S) {
        if (typeof S.ref == "string" && ne.current && S.__self && ne.current.stateNode !== S.__self) {
          var L = nr(ne.current.type);
          Pn[L] || (ke('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L, S.ref), Pn[L] = !0);
        }
      }
      var tt = function(S, L, G, Z, we, lt, Oe) {
        var ct = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: _,
          // Built-in properties that belong on the element
          type: S,
          key: L,
          ref: G,
          props: Oe,
          // Record the component responsible for creating this element.
          _owner: lt
        };
        return ct._store = {}, Object.defineProperty(ct._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(ct, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Z
        }), Object.defineProperty(ct, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: we
        }), Object.freeze && (Object.freeze(ct.props), Object.freeze(ct)), ct;
      };
      function Rt(S, L, G) {
        var Z, we = {}, lt = null, Oe = null, ct = null, Mt = null;
        if (L != null) {
          Rr(L) && (Oe = L.ref, Ne(L)), _a(L) && (Zr(L.key), lt = "" + L.key), ct = L.__self === void 0 ? null : L.__self, Mt = L.__source === void 0 ? null : L.__source;
          for (Z in L)
            Nn.call(L, Z) && !Kn.hasOwnProperty(Z) && (we[Z] = L[Z]);
        }
        var Vt = arguments.length - 2;
        if (Vt === 1)
          we.children = G;
        else if (Vt > 1) {
          for (var dn = Array(Vt), nn = 0; nn < Vt; nn++)
            dn[nn] = arguments[nn + 2];
          Object.freeze && Object.freeze(dn), we.children = dn;
        }
        if (S && S.defaultProps) {
          var kt = S.defaultProps;
          for (Z in kt)
            we[Z] === void 0 && (we[Z] = kt[Z]);
        }
        if (lt || Oe) {
          var rn = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          lt && no(we, rn), Oe && Eo(we, rn);
        }
        return tt(S, lt, Oe, ct, Mt, ne.current, we);
      }
      function Qt(S, L) {
        var G = tt(S.type, L, S.ref, S._self, S._source, S._owner, S.props);
        return G;
      }
      function sn(S, L, G) {
        if (S == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
        var Z, we = J({}, S.props), lt = S.key, Oe = S.ref, ct = S._self, Mt = S._source, Vt = S._owner;
        if (L != null) {
          Rr(L) && (Oe = L.ref, Vt = ne.current), _a(L) && (Zr(L.key), lt = "" + L.key);
          var dn;
          S.type && S.type.defaultProps && (dn = S.type.defaultProps);
          for (Z in L)
            Nn.call(L, Z) && !Kn.hasOwnProperty(Z) && (L[Z] === void 0 && dn !== void 0 ? we[Z] = dn[Z] : we[Z] = L[Z]);
        }
        var nn = arguments.length - 2;
        if (nn === 1)
          we.children = G;
        else if (nn > 1) {
          for (var kt = Array(nn), rn = 0; rn < nn; rn++)
            kt[rn] = arguments[rn + 2];
          we.children = kt;
        }
        return tt(S.type, lt, Oe, ct, Mt, Vt, we);
      }
      function Sn(S) {
        return typeof S == "object" && S !== null && S.$$typeof === _;
      }
      var vn = ".", rr = ":";
      function cn(S) {
        var L = /[=:]/g, G = {
          "=": "=0",
          ":": "=2"
        }, Z = S.replace(L, function(we) {
          return G[we];
        });
        return "$" + Z;
      }
      var Zt = !1, en = /\/+/g;
      function Sa(S) {
        return S.replace(en, "$&/");
      }
      function kr(S, L) {
        return typeof S == "object" && S !== null && S.key != null ? (Zr(S.key), cn("" + S.key)) : L.toString(36);
      }
      function ja(S, L, G, Z, we) {
        var lt = typeof S;
        (lt === "undefined" || lt === "boolean") && (S = null);
        var Oe = !1;
        if (S === null)
          Oe = !0;
        else
          switch (lt) {
            case "string":
            case "number":
              Oe = !0;
              break;
            case "object":
              switch (S.$$typeof) {
                case _:
                case x:
                  Oe = !0;
              }
          }
        if (Oe) {
          var ct = S, Mt = we(ct), Vt = Z === "" ? vn + kr(ct, 0) : Z;
          if (Tn(Mt)) {
            var dn = "";
            Vt != null && (dn = Sa(Vt) + "/"), ja(Mt, L, dn, "", function(_d) {
              return _d;
            });
          } else Mt != null && (Sn(Mt) && (Mt.key && (!ct || ct.key !== Mt.key) && Zr(Mt.key), Mt = Qt(
            Mt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            G + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Mt.key && (!ct || ct.key !== Mt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Sa("" + Mt.key) + "/"
            ) : "") + Vt
          )), L.push(Mt));
          return 1;
        }
        var nn, kt, rn = 0, Cn = Z === "" ? vn : Z + rr;
        if (Tn(S))
          for (var Ai = 0; Ai < S.length; Ai++)
            nn = S[Ai], kt = Cn + kr(nn, Ai), rn += ja(nn, L, G, kt, we);
        else {
          var ps = ge(S);
          if (typeof ps == "function") {
            var ti = S;
            ps === ti.entries && (Zt || je("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Zt = !0);
            for (var vs = ps.call(ti), xl, gd = 0; !(xl = vs.next()).done; )
              nn = xl.value, kt = Cn + kr(nn, gd++), rn += ja(nn, L, G, kt, we);
          } else if (lt === "object") {
            var Tc = String(S);
            throw new Error("Objects are not valid as a React child (found: " + (Tc === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : Tc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return rn;
      }
      function Jo(S, L, G) {
        if (S == null)
          return S;
        var Z = [], we = 0;
        return ja(S, Z, "", "", function(lt) {
          return L.call(G, lt, we++);
        }), Z;
      }
      function vl(S) {
        var L = 0;
        return Jo(S, function() {
          L++;
        }), L;
      }
      function hl(S, L, G) {
        Jo(S, function() {
          L.apply(this, arguments);
        }, G);
      }
      function Ri(S) {
        return Jo(S, function(L) {
          return L;
        }) || [];
      }
      function ki(S) {
        if (!Sn(S))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return S;
      }
      function ml(S) {
        var L = {
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
        L.Provider = {
          $$typeof: k,
          _context: L
        };
        var G = !1, Z = !1, we = !1;
        {
          var lt = {
            $$typeof: b,
            _context: L
          };
          Object.defineProperties(lt, {
            Provider: {
              get: function() {
                return Z || (Z = !0, ke("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), L.Provider;
              },
              set: function(Oe) {
                L.Provider = Oe;
              }
            },
            _currentValue: {
              get: function() {
                return L._currentValue;
              },
              set: function(Oe) {
                L._currentValue = Oe;
              }
            },
            _currentValue2: {
              get: function() {
                return L._currentValue2;
              },
              set: function(Oe) {
                L._currentValue2 = Oe;
              }
            },
            _threadCount: {
              get: function() {
                return L._threadCount;
              },
              set: function(Oe) {
                L._threadCount = Oe;
              }
            },
            Consumer: {
              get: function() {
                return G || (G = !0, ke("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), L.Consumer;
              }
            },
            displayName: {
              get: function() {
                return L.displayName;
              },
              set: function(Oe) {
                we || (je("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Oe), we = !0);
              }
            }
          }), L.Consumer = lt;
        }
        return L._currentRenderer = null, L._currentRenderer2 = null, L;
      }
      var jr = -1, Ar = 0, cr = 1, xo = 2;
      function ro(S) {
        if (S._status === jr) {
          var L = S._result, G = L();
          if (G.then(function(lt) {
            if (S._status === Ar || S._status === jr) {
              var Oe = S;
              Oe._status = cr, Oe._result = lt;
            }
          }, function(lt) {
            if (S._status === Ar || S._status === jr) {
              var Oe = S;
              Oe._status = xo, Oe._result = lt;
            }
          }), S._status === jr) {
            var Z = S;
            Z._status = Ar, Z._result = G;
          }
        }
        if (S._status === cr) {
          var we = S._result;
          return we === void 0 && ke(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, we), "default" in we || ke(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, we), we.default;
        } else
          throw S._result;
      }
      function wo(S) {
        var L = {
          // We use these fields to store the result.
          _status: jr,
          _result: S
        }, G = {
          $$typeof: re,
          _payload: L,
          _init: ro
        };
        {
          var Z, we;
          Object.defineProperties(G, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return Z;
              },
              set: function(lt) {
                ke("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Z = lt, Object.defineProperty(G, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return we;
              },
              set: function(lt) {
                ke("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), we = lt, Object.defineProperty(G, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return G;
      }
      function bo(S) {
        S != null && S.$$typeof === H ? ke("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof S != "function" ? ke("forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S) : S.length !== 0 && S.length !== 2 && ke("forwardRef render functions accept exactly two parameters: props and ref. %s", S.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), S != null && (S.defaultProps != null || S.propTypes != null) && ke("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
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
            set: function(Z) {
              G = Z, !S.name && !S.displayName && (S.displayName = Z);
            }
          });
        }
        return L;
      }
      var O;
      O = /* @__PURE__ */ Symbol.for("react.module.reference");
      function ce(S) {
        return !!(typeof S == "string" || typeof S == "function" || S === C || S === w || _e || S === h || S === U || S === V || X || S === ue || le || ze || A || typeof S == "object" && S !== null && (S.$$typeof === re || S.$$typeof === H || S.$$typeof === k || S.$$typeof === b || S.$$typeof === M || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        S.$$typeof === O || S.getModuleId !== void 0));
      }
      function Ae(S, L) {
        ce(S) || ke("memo: The first argument must be a component. Instead received: %s", S === null ? "null" : typeof S);
        var G = {
          $$typeof: H,
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
            set: function(we) {
              Z = we, !S.name && !S.displayName && (S.displayName = we);
            }
          });
        }
        return G;
      }
      function Ge() {
        var S = Ee.current;
        return S === null && ke(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), S;
      }
      function Et(S) {
        var L = Ge();
        if (S._context !== void 0) {
          var G = S._context;
          G.Consumer === S ? ke("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : G.Provider === S && ke("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return L.useContext(S);
      }
      function _t(S) {
        var L = Ge();
        return L.useState(S);
      }
      function Dt(S, L, G) {
        var Z = Ge();
        return Z.useReducer(S, L, G);
      }
      function Tt(S) {
        var L = Ge();
        return L.useRef(S);
      }
      function Dn(S, L) {
        var G = Ge();
        return G.useEffect(S, L);
      }
      function fn(S, L) {
        var G = Ge();
        return G.useInsertionEffect(S, L);
      }
      function hn(S, L) {
        var G = Ge();
        return G.useLayoutEffect(S, L);
      }
      function fr(S, L) {
        var G = Ge();
        return G.useCallback(S, L);
      }
      function ao(S, L) {
        var G = Ge();
        return G.useMemo(S, L);
      }
      function oo(S, L, G) {
        var Z = Ge();
        return Z.useImperativeHandle(S, L, G);
      }
      function xt(S, L) {
        {
          var G = Ge();
          return G.useDebugValue(S, L);
        }
      }
      function bt() {
        var S = Ge();
        return S.useTransition();
      }
      function io(S) {
        var L = Ge();
        return L.useDeferredValue(S);
      }
      function yl() {
        var S = Ge();
        return S.useId();
      }
      function gl(S, L, G) {
        var Z = Ge();
        return Z.useSyncExternalStore(S, L, G);
      }
      var Ti = 0, fu, Ni, ea, ss, Ur, Rc, kc;
      function du() {
      }
      du.__reactDisabledLog = !0;
      function Di() {
        {
          if (Ti === 0) {
            fu = console.log, Ni = console.info, ea = console.warn, ss = console.error, Ur = console.group, Rc = console.groupCollapsed, kc = console.groupEnd;
            var S = {
              configurable: !0,
              enumerable: !0,
              value: du,
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
          Ti++;
        }
      }
      function Ca() {
        {
          if (Ti--, Ti === 0) {
            var S = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: J({}, S, {
                value: fu
              }),
              info: J({}, S, {
                value: Ni
              }),
              warn: J({}, S, {
                value: ea
              }),
              error: J({}, S, {
                value: ss
              }),
              group: J({}, S, {
                value: Ur
              }),
              groupCollapsed: J({}, S, {
                value: Rc
              }),
              groupEnd: J({}, S, {
                value: kc
              })
            });
          }
          Ti < 0 && ke("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var lo = Qe.ReactCurrentDispatcher, uo;
      function pu(S, L, G) {
        {
          if (uo === void 0)
            try {
              throw Error();
            } catch (we) {
              var Z = we.stack.trim().match(/\n( *(at )?)/);
              uo = Z && Z[1] || "";
            }
          return `
` + uo + S;
        }
      }
      var _l = !1, Mi;
      {
        var vu = typeof WeakMap == "function" ? WeakMap : Map;
        Mi = new vu();
      }
      function hu(S, L) {
        if (!S || _l)
          return "";
        {
          var G = Mi.get(S);
          if (G !== void 0)
            return G;
        }
        var Z;
        _l = !0;
        var we = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var lt;
        lt = lo.current, lo.current = null, Di();
        try {
          if (L) {
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
              } catch (Cn) {
                Z = Cn;
              }
              Reflect.construct(S, [], Oe);
            } else {
              try {
                Oe.call();
              } catch (Cn) {
                Z = Cn;
              }
              S.call(Oe.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Cn) {
              Z = Cn;
            }
            S();
          }
        } catch (Cn) {
          if (Cn && Z && typeof Cn.stack == "string") {
            for (var ct = Cn.stack.split(`
`), Mt = Z.stack.split(`
`), Vt = ct.length - 1, dn = Mt.length - 1; Vt >= 1 && dn >= 0 && ct[Vt] !== Mt[dn]; )
              dn--;
            for (; Vt >= 1 && dn >= 0; Vt--, dn--)
              if (ct[Vt] !== Mt[dn]) {
                if (Vt !== 1 || dn !== 1)
                  do
                    if (Vt--, dn--, dn < 0 || ct[Vt] !== Mt[dn]) {
                      var nn = `
` + ct[Vt].replace(" at new ", " at ");
                      return S.displayName && nn.includes("<anonymous>") && (nn = nn.replace("<anonymous>", S.displayName)), typeof S == "function" && Mi.set(S, nn), nn;
                    }
                  while (Vt >= 1 && dn >= 0);
                break;
              }
          }
        } finally {
          _l = !1, lo.current = lt, Ca(), Error.prepareStackTrace = we;
        }
        var kt = S ? S.displayName || S.name : "", rn = kt ? pu(kt) : "";
        return typeof S == "function" && Mi.set(S, rn), rn;
      }
      function Zo(S, L, G) {
        return hu(S, !1);
      }
      function md(S) {
        var L = S.prototype;
        return !!(L && L.isReactComponent);
      }
      function ei(S, L, G) {
        if (S == null)
          return "";
        if (typeof S == "function")
          return hu(S, md(S));
        if (typeof S == "string")
          return pu(S);
        switch (S) {
          case U:
            return pu("Suspense");
          case V:
            return pu("SuspenseList");
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case M:
              return Zo(S.render);
            case H:
              return ei(S.type, L, G);
            case re: {
              var Z = S, we = Z._payload, lt = Z._init;
              try {
                return ei(lt(we), L, G);
              } catch {
              }
            }
          }
        return "";
      }
      var $t = {}, mu = Qe.ReactDebugCurrentFrame;
      function Ft(S) {
        if (S) {
          var L = S._owner, G = ei(S.type, S._source, L ? L.type : null);
          mu.setExtraStackFrame(G);
        } else
          mu.setExtraStackFrame(null);
      }
      function cs(S, L, G, Z, we) {
        {
          var lt = Function.call.bind(Nn);
          for (var Oe in S)
            if (lt(S, Oe)) {
              var ct = void 0;
              try {
                if (typeof S[Oe] != "function") {
                  var Mt = Error((Z || "React class") + ": " + G + " type `" + Oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[Oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Mt.name = "Invariant Violation", Mt;
                }
                ct = S[Oe](L, Oe, Z, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Vt) {
                ct = Vt;
              }
              ct && !(ct instanceof Error) && (Ft(we), ke("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Z || "React class", G, Oe, typeof ct), Ft(null)), ct instanceof Error && !(ct.message in $t) && ($t[ct.message] = !0, Ft(we), ke("Failed %s type: %s", G, ct.message), Ft(null));
            }
        }
      }
      function Ro(S) {
        if (S) {
          var L = S._owner, G = ei(S.type, S._source, L ? L.type : null);
          qe(G);
        } else
          qe(null);
      }
      var gt;
      gt = !1;
      function yu() {
        if (ne.current) {
          var S = nr(ne.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
      function dr(S) {
        if (S !== void 0) {
          var L = S.fileName.replace(/^.*[\\\/]/, ""), G = S.lineNumber;
          return `

Check your code at ` + L + ":" + G + ".";
        }
        return "";
      }
      function ko(S) {
        return S != null ? dr(S.__source) : "";
      }
      var zr = {};
      function To(S) {
        var L = yu();
        if (!L) {
          var G = typeof S == "string" ? S : S.displayName || S.name;
          G && (L = `

Check the top-level render call using <` + G + ">.");
        }
        return L;
      }
      function mn(S, L) {
        if (!(!S._store || S._store.validated || S.key != null)) {
          S._store.validated = !0;
          var G = To(L);
          if (!zr[G]) {
            zr[G] = !0;
            var Z = "";
            S && S._owner && S._owner !== ne.current && (Z = " It was passed a child from " + nr(S._owner.type) + "."), Ro(S), ke('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, Z), Ro(null);
          }
        }
      }
      function tn(S, L) {
        if (typeof S == "object") {
          if (Tn(S))
            for (var G = 0; G < S.length; G++) {
              var Z = S[G];
              Sn(Z) && mn(Z, L);
            }
          else if (Sn(S))
            S._store && (S._store.validated = !0);
          else if (S) {
            var we = ge(S);
            if (typeof we == "function" && we !== S.entries)
              for (var lt = we.call(S), Oe; !(Oe = lt.next()).done; )
                Sn(Oe.value) && mn(Oe.value, L);
          }
        }
      }
      function Li(S) {
        {
          var L = S.type;
          if (L == null || typeof L == "string")
            return;
          var G;
          if (typeof L == "function")
            G = L.propTypes;
          else if (typeof L == "object" && (L.$$typeof === M || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          L.$$typeof === H))
            G = L.propTypes;
          else
            return;
          if (G) {
            var Z = nr(L);
            cs(G, S.props, "prop", Z, S);
          } else if (L.PropTypes !== void 0 && !gt) {
            gt = !0;
            var we = nr(L);
            ke("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", we || "Unknown");
          }
          typeof L.getDefaultProps == "function" && !L.getDefaultProps.isReactClassApproved && ke("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Xn(S) {
        {
          for (var L = Object.keys(S.props), G = 0; G < L.length; G++) {
            var Z = L[G];
            if (Z !== "children" && Z !== "key") {
              Ro(S), ke("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Z), Ro(null);
              break;
            }
          }
          S.ref !== null && (Ro(S), ke("Invalid attribute `ref` supplied to `React.Fragment`."), Ro(null));
        }
      }
      function Pr(S, L, G) {
        var Z = ce(S);
        if (!Z) {
          var we = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (we += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var lt = ko(L);
          lt ? we += lt : we += yu();
          var Oe;
          S === null ? Oe = "null" : Tn(S) ? Oe = "array" : S !== void 0 && S.$$typeof === _ ? (Oe = "<" + (nr(S.type) || "Unknown") + " />", we = " Did you accidentally export a JSX literal instead of a component?") : Oe = typeof S, ke("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Oe, we);
        }
        var ct = Rt.apply(this, arguments);
        if (ct == null)
          return ct;
        if (Z)
          for (var Mt = 2; Mt < arguments.length; Mt++)
            tn(arguments[Mt], S);
        return S === C ? Xn(ct) : Li(ct), ct;
      }
      var Aa = !1;
      function Sl(S) {
        var L = Pr.bind(null, S);
        return L.type = S, Aa || (Aa = !0, je("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(L, "type", {
          enumerable: !1,
          get: function() {
            return je("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: S
            }), S;
          }
        }), L;
      }
      function fs(S, L, G) {
        for (var Z = sn.apply(this, arguments), we = 2; we < arguments.length; we++)
          tn(arguments[we], Z.type);
        return Li(Z), Z;
      }
      function ds(S, L) {
        var G = se.transition;
        se.transition = {};
        var Z = se.transition;
        se.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          S();
        } finally {
          if (se.transition = G, G === null && Z._updatedFibers) {
            var we = Z._updatedFibers.size;
            we > 10 && je("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), Z._updatedFibers.clear();
          }
        }
      }
      var Oi = !1, Cl = null;
      function yd(S) {
        if (Cl === null)
          try {
            var L = ("require" + Math.random()).slice(0, 7), G = c && c[L];
            Cl = G.call(c, "timers").setImmediate;
          } catch {
            Cl = function(we) {
              Oi === !1 && (Oi = !0, typeof MessageChannel > "u" && ke("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var lt = new MessageChannel();
              lt.port1.onmessage = we, lt.port2.postMessage(void 0);
            };
          }
        return Cl(S);
      }
      var Ua = 0, so = !1;
      function No(S) {
        {
          var L = Ua;
          Ua++, ie.current === null && (ie.current = []);
          var G = ie.isBatchingLegacy, Z;
          try {
            if (ie.isBatchingLegacy = !0, Z = S(), !G && ie.didScheduleLegacyUpdate) {
              var we = ie.current;
              we !== null && (ie.didScheduleLegacyUpdate = !1, ji(we));
            }
          } catch (kt) {
            throw za(L), kt;
          } finally {
            ie.isBatchingLegacy = G;
          }
          if (Z !== null && typeof Z == "object" && typeof Z.then == "function") {
            var lt = Z, Oe = !1, ct = {
              then: function(kt, rn) {
                Oe = !0, lt.then(function(Cn) {
                  za(L), Ua === 0 ? gu(Cn, kt, rn) : kt(Cn);
                }, function(Cn) {
                  za(L), rn(Cn);
                });
              }
            };
            return !so && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Oe || (so = !0, ke("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), ct;
          } else {
            var Mt = Z;
            if (za(L), Ua === 0) {
              var Vt = ie.current;
              Vt !== null && (ji(Vt), ie.current = null);
              var dn = {
                then: function(kt, rn) {
                  ie.current === null ? (ie.current = [], gu(Mt, kt, rn)) : kt(Mt);
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
        S !== Ua - 1 && ke("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ua = S;
      }
      function gu(S, L, G) {
        {
          var Z = ie.current;
          if (Z !== null)
            try {
              ji(Z), yd(function() {
                Z.length === 0 ? (ie.current = null, L(S)) : gu(S, L, G);
              });
            } catch (we) {
              G(we);
            }
          else
            L(S);
        }
      }
      var _u = !1;
      function ji(S) {
        if (!_u) {
          _u = !0;
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
            _u = !1;
          }
        }
      }
      var El = Pr, Su = fs, Cu = Sl, co = {
        map: Jo,
        forEach: hl,
        count: vl,
        toArray: Ri,
        only: ki
      };
      d.Children = co, d.Component = He, d.Fragment = C, d.Profiler = w, d.PureComponent = mt, d.StrictMode = h, d.Suspense = U, d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qe, d.act = No, d.cloneElement = Su, d.createContext = ml, d.createElement = El, d.createFactory = Cu, d.createRef = zn, d.forwardRef = bo, d.isValidElement = Sn, d.lazy = wo, d.memo = Ae, d.startTransition = ds, d.unstable_act = No, d.useCallback = fr, d.useContext = Et, d.useDebugValue = xt, d.useDeferredValue = io, d.useEffect = Dn, d.useId = yl, d.useImperativeHandle = oo, d.useInsertionEffect = fn, d.useLayoutEffect = hn, d.useMemo = ao, d.useReducer = Dt, d.useRef = Tt, d.useState = _t, d.useSyncExternalStore = gl, d.useTransition = bt, d.version = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(wv, wv.exports)), wv.exports;
}
var ZC;
function kv() {
  return ZC || (ZC = 1, process.env.NODE_ENV === "production" ? Ey.exports = n3() : Ey.exports = r3()), Ey.exports;
}
var eE;
function a3() {
  if (eE) return Cv;
  eE = 1;
  var c = kv(), d = /* @__PURE__ */ Symbol.for("react.element"), p = /* @__PURE__ */ Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, x = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(w, k, b) {
    var M, U = {}, V = null, H = null;
    b !== void 0 && (V = "" + b), k.key !== void 0 && (V = "" + k.key), k.ref !== void 0 && (H = k.ref);
    for (M in k) _.call(k, M) && !C.hasOwnProperty(M) && (U[M] = k[M]);
    if (w && w.defaultProps) for (M in k = w.defaultProps, k) U[M] === void 0 && (U[M] = k[M]);
    return { $$typeof: d, type: w, key: V, ref: H, props: U, _owner: x.current };
  }
  return Cv.Fragment = p, Cv.jsx = h, Cv.jsxs = h, Cv;
}
var Ev = {};
var tE;
function o3() {
  return tE || (tE = 1, process.env.NODE_ENV !== "production" && (function() {
    var c = kv(), d = /* @__PURE__ */ Symbol.for("react.element"), p = /* @__PURE__ */ Symbol.for("react.portal"), _ = /* @__PURE__ */ Symbol.for("react.fragment"), x = /* @__PURE__ */ Symbol.for("react.strict_mode"), C = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), w = /* @__PURE__ */ Symbol.for("react.context"), k = /* @__PURE__ */ Symbol.for("react.forward_ref"), b = /* @__PURE__ */ Symbol.for("react.suspense"), M = /* @__PURE__ */ Symbol.for("react.suspense_list"), U = /* @__PURE__ */ Symbol.for("react.memo"), V = /* @__PURE__ */ Symbol.for("react.lazy"), H = /* @__PURE__ */ Symbol.for("react.offscreen"), re = Symbol.iterator, ue = "@@iterator";
    function xe(O) {
      if (O === null || typeof O != "object")
        return null;
      var ce = re && O[re] || O[ue];
      return typeof ce == "function" ? ce : null;
    }
    var be = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ge(O) {
      {
        for (var ce = arguments.length, Ae = new Array(ce > 1 ? ce - 1 : 0), Ge = 1; Ge < ce; Ge++)
          Ae[Ge - 1] = arguments[Ge];
        Ee("error", O, Ae);
      }
    }
    function Ee(O, ce, Ae) {
      {
        var Ge = be.ReactDebugCurrentFrame, Et = Ge.getStackAddendum();
        Et !== "" && (ce += "%s", Ae = Ae.concat([Et]));
        var _t = Ae.map(function(Dt) {
          return String(Dt);
        });
        _t.unshift("Warning: " + ce), Function.prototype.apply.call(console[O], console, _t);
      }
    }
    var se = !1, ie = !1, ne = !1, Ce = !1, Te = !1, qe;
    qe = /* @__PURE__ */ Symbol.for("react.module.reference");
    function le(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === _ || O === C || Te || O === x || O === b || O === M || Ce || O === H || se || ie || ne || typeof O == "object" && O !== null && (O.$$typeof === V || O.$$typeof === U || O.$$typeof === h || O.$$typeof === w || O.$$typeof === k || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === qe || O.getModuleId !== void 0));
    }
    function ze(O, ce, Ae) {
      var Ge = O.displayName;
      if (Ge)
        return Ge;
      var Et = ce.displayName || ce.name || "";
      return Et !== "" ? Ae + "(" + Et + ")" : Ae;
    }
    function A(O) {
      return O.displayName || "Context";
    }
    function X(O) {
      if (O == null)
        return null;
      if (typeof O.tag == "number" && ge("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof O == "function")
        return O.displayName || O.name || null;
      if (typeof O == "string")
        return O;
      switch (O) {
        case _:
          return "Fragment";
        case p:
          return "Portal";
        case C:
          return "Profiler";
        case x:
          return "StrictMode";
        case b:
          return "Suspense";
        case M:
          return "SuspenseList";
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case w:
            var ce = O;
            return A(ce) + ".Consumer";
          case h:
            var Ae = O;
            return A(Ae._context) + ".Provider";
          case k:
            return ze(O, O.render, "ForwardRef");
          case U:
            var Ge = O.displayName || null;
            return Ge !== null ? Ge : X(O.type) || "Memo";
          case V: {
            var Et = O, _t = Et._payload, Dt = Et._init;
            try {
              return X(Dt(_t));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var _e = Object.assign, Qe = 0, je, ke, ae, Le, Se, F, J;
    function et() {
    }
    et.__reactDisabledLog = !0;
    function He() {
      {
        if (Qe === 0) {
          je = console.log, ke = console.info, ae = console.warn, Le = console.error, Se = console.group, F = console.groupCollapsed, J = console.groupEnd;
          var O = {
            configurable: !0,
            enumerable: !0,
            value: et,
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
        Qe++;
      }
    }
    function ht() {
      {
        if (Qe--, Qe === 0) {
          var O = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: _e({}, O, {
              value: je
            }),
            info: _e({}, O, {
              value: ke
            }),
            warn: _e({}, O, {
              value: ae
            }),
            error: _e({}, O, {
              value: Le
            }),
            group: _e({}, O, {
              value: Se
            }),
            groupCollapsed: _e({}, O, {
              value: F
            }),
            groupEnd: _e({}, O, {
              value: J
            })
          });
        }
        Qe < 0 && ge("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var at = be.ReactCurrentDispatcher, Pe;
    function dt(O, ce, Ae) {
      {
        if (Pe === void 0)
          try {
            throw Error();
          } catch (Et) {
            var Ge = Et.stack.trim().match(/\n( *(at )?)/);
            Pe = Ge && Ge[1] || "";
          }
        return `
` + Pe + O;
      }
    }
    var mt = !1, Jt;
    {
      var zn = typeof WeakMap == "function" ? WeakMap : Map;
      Jt = new zn();
    }
    function Or(O, ce) {
      if (!O || mt)
        return "";
      {
        var Ae = Jt.get(O);
        if (Ae !== void 0)
          return Ae;
      }
      var Ge;
      mt = !0;
      var Et = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _t;
      _t = at.current, at.current = null, He();
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
              Ge = xt;
            }
            Reflect.construct(O, [], Dt);
          } else {
            try {
              Dt.call();
            } catch (xt) {
              Ge = xt;
            }
            O.call(Dt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xt) {
            Ge = xt;
          }
          O();
        }
      } catch (xt) {
        if (xt && Ge && typeof xt.stack == "string") {
          for (var Tt = xt.stack.split(`
`), Dn = Ge.stack.split(`
`), fn = Tt.length - 1, hn = Dn.length - 1; fn >= 1 && hn >= 0 && Tt[fn] !== Dn[hn]; )
            hn--;
          for (; fn >= 1 && hn >= 0; fn--, hn--)
            if (Tt[fn] !== Dn[hn]) {
              if (fn !== 1 || hn !== 1)
                do
                  if (fn--, hn--, hn < 0 || Tt[fn] !== Dn[hn]) {
                    var fr = `
` + Tt[fn].replace(" at new ", " at ");
                    return O.displayName && fr.includes("<anonymous>") && (fr = fr.replace("<anonymous>", O.displayName)), typeof O == "function" && Jt.set(O, fr), fr;
                  }
                while (fn >= 1 && hn >= 0);
              break;
            }
        }
      } finally {
        mt = !1, at.current = _t, ht(), Error.prepareStackTrace = Et;
      }
      var ao = O ? O.displayName || O.name : "", oo = ao ? dt(ao) : "";
      return typeof O == "function" && Jt.set(O, oo), oo;
    }
    function Tn(O, ce, Ae) {
      return Or(O, !1);
    }
    function sr(O) {
      var ce = O.prototype;
      return !!(ce && ce.isReactComponent);
    }
    function Gn(O, ce, Ae) {
      if (O == null)
        return "";
      if (typeof O == "function")
        return Or(O, sr(O));
      if (typeof O == "string")
        return dt(O);
      switch (O) {
        case b:
          return dt("Suspense");
        case M:
          return dt("SuspenseList");
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case k:
            return Tn(O.render);
          case U:
            return Gn(O.type, ce, Ae);
          case V: {
            var Ge = O, Et = Ge._payload, _t = Ge._init;
            try {
              return Gn(_t(Et), ce, Ae);
            } catch {
            }
          }
        }
      return "";
    }
    var Qn = Object.prototype.hasOwnProperty, Zr = {}, Co = be.ReactDebugCurrentFrame;
    function ga(O) {
      if (O) {
        var ce = O._owner, Ae = Gn(O.type, O._source, ce ? ce.type : null);
        Co.setExtraStackFrame(Ae);
      } else
        Co.setExtraStackFrame(null);
    }
    function nr(O, ce, Ae, Ge, Et) {
      {
        var _t = Function.call.bind(Qn);
        for (var Dt in O)
          if (_t(O, Dt)) {
            var Tt = void 0;
            try {
              if (typeof O[Dt] != "function") {
                var Dn = Error((Ge || "React class") + ": " + Ae + " type `" + Dt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[Dt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Dn.name = "Invariant Violation", Dn;
              }
              Tt = O[Dt](ce, Dt, Ge, Ae, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (fn) {
              Tt = fn;
            }
            Tt && !(Tt instanceof Error) && (ga(Et), ge("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ge || "React class", Ae, Dt, typeof Tt), ga(null)), Tt instanceof Error && !(Tt.message in Zr) && (Zr[Tt.message] = !0, ga(Et), ge("Failed %s type: %s", Ae, Tt.message), ga(null));
          }
      }
    }
    var Nn = Array.isArray;
    function Kn(O) {
      return Nn(O);
    }
    function br(O) {
      {
        var ce = typeof Symbol == "function" && Symbol.toStringTag, Ae = ce && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return Ae;
      }
    }
    function to(O) {
      try {
        return Pn(O), !1;
      } catch {
        return !0;
      }
    }
    function Pn(O) {
      return "" + O;
    }
    function Rr(O) {
      if (to(O))
        return ge("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", br(O)), Pn(O);
    }
    var _a = be.ReactCurrentOwner, no = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Eo, Ne;
    function tt(O) {
      if (Qn.call(O, "ref")) {
        var ce = Object.getOwnPropertyDescriptor(O, "ref").get;
        if (ce && ce.isReactWarning)
          return !1;
      }
      return O.ref !== void 0;
    }
    function Rt(O) {
      if (Qn.call(O, "key")) {
        var ce = Object.getOwnPropertyDescriptor(O, "key").get;
        if (ce && ce.isReactWarning)
          return !1;
      }
      return O.key !== void 0;
    }
    function Qt(O, ce) {
      typeof O.ref == "string" && _a.current;
    }
    function sn(O, ce) {
      {
        var Ae = function() {
          Eo || (Eo = !0, ge("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ce));
        };
        Ae.isReactWarning = !0, Object.defineProperty(O, "key", {
          get: Ae,
          configurable: !0
        });
      }
    }
    function Sn(O, ce) {
      {
        var Ae = function() {
          Ne || (Ne = !0, ge("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ce));
        };
        Ae.isReactWarning = !0, Object.defineProperty(O, "ref", {
          get: Ae,
          configurable: !0
        });
      }
    }
    var vn = function(O, ce, Ae, Ge, Et, _t, Dt) {
      var Tt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: O,
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
        value: Ge
      }), Object.defineProperty(Tt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Et
      }), Object.freeze && (Object.freeze(Tt.props), Object.freeze(Tt)), Tt;
    };
    function rr(O, ce, Ae, Ge, Et) {
      {
        var _t, Dt = {}, Tt = null, Dn = null;
        Ae !== void 0 && (Rr(Ae), Tt = "" + Ae), Rt(ce) && (Rr(ce.key), Tt = "" + ce.key), tt(ce) && (Dn = ce.ref, Qt(ce, Et));
        for (_t in ce)
          Qn.call(ce, _t) && !no.hasOwnProperty(_t) && (Dt[_t] = ce[_t]);
        if (O && O.defaultProps) {
          var fn = O.defaultProps;
          for (_t in fn)
            Dt[_t] === void 0 && (Dt[_t] = fn[_t]);
        }
        if (Tt || Dn) {
          var hn = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
          Tt && sn(Dt, hn), Dn && Sn(Dt, hn);
        }
        return vn(O, Tt, Dn, Et, Ge, _a.current, Dt);
      }
    }
    var cn = be.ReactCurrentOwner, Zt = be.ReactDebugCurrentFrame;
    function en(O) {
      if (O) {
        var ce = O._owner, Ae = Gn(O.type, O._source, ce ? ce.type : null);
        Zt.setExtraStackFrame(Ae);
      } else
        Zt.setExtraStackFrame(null);
    }
    var Sa;
    Sa = !1;
    function kr(O) {
      return typeof O == "object" && O !== null && O.$$typeof === d;
    }
    function ja() {
      {
        if (cn.current) {
          var O = X(cn.current.type);
          if (O)
            return `

Check the render method of \`` + O + "`.";
        }
        return "";
      }
    }
    function Jo(O) {
      return "";
    }
    var vl = {};
    function hl(O) {
      {
        var ce = ja();
        if (!ce) {
          var Ae = typeof O == "string" ? O : O.displayName || O.name;
          Ae && (ce = `

Check the top-level render call using <` + Ae + ">.");
        }
        return ce;
      }
    }
    function Ri(O, ce) {
      {
        if (!O._store || O._store.validated || O.key != null)
          return;
        O._store.validated = !0;
        var Ae = hl(ce);
        if (vl[Ae])
          return;
        vl[Ae] = !0;
        var Ge = "";
        O && O._owner && O._owner !== cn.current && (Ge = " It was passed a child from " + X(O._owner.type) + "."), en(O), ge('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Ae, Ge), en(null);
      }
    }
    function ki(O, ce) {
      {
        if (typeof O != "object")
          return;
        if (Kn(O))
          for (var Ae = 0; Ae < O.length; Ae++) {
            var Ge = O[Ae];
            kr(Ge) && Ri(Ge, ce);
          }
        else if (kr(O))
          O._store && (O._store.validated = !0);
        else if (O) {
          var Et = xe(O);
          if (typeof Et == "function" && Et !== O.entries)
            for (var _t = Et.call(O), Dt; !(Dt = _t.next()).done; )
              kr(Dt.value) && Ri(Dt.value, ce);
        }
      }
    }
    function ml(O) {
      {
        var ce = O.type;
        if (ce == null || typeof ce == "string")
          return;
        var Ae;
        if (typeof ce == "function")
          Ae = ce.propTypes;
        else if (typeof ce == "object" && (ce.$$typeof === k || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ce.$$typeof === U))
          Ae = ce.propTypes;
        else
          return;
        if (Ae) {
          var Ge = X(ce);
          nr(Ae, O.props, "prop", Ge, O);
        } else if (ce.PropTypes !== void 0 && !Sa) {
          Sa = !0;
          var Et = X(ce);
          ge("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Et || "Unknown");
        }
        typeof ce.getDefaultProps == "function" && !ce.getDefaultProps.isReactClassApproved && ge("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function jr(O) {
      {
        for (var ce = Object.keys(O.props), Ae = 0; Ae < ce.length; Ae++) {
          var Ge = ce[Ae];
          if (Ge !== "children" && Ge !== "key") {
            en(O), ge("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ge), en(null);
            break;
          }
        }
        O.ref !== null && (en(O), ge("Invalid attribute `ref` supplied to `React.Fragment`."), en(null));
      }
    }
    var Ar = {};
    function cr(O, ce, Ae, Ge, Et, _t) {
      {
        var Dt = le(O);
        if (!Dt) {
          var Tt = "";
          (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (Tt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Dn = Jo();
          Dn ? Tt += Dn : Tt += ja();
          var fn;
          O === null ? fn = "null" : Kn(O) ? fn = "array" : O !== void 0 && O.$$typeof === d ? (fn = "<" + (X(O.type) || "Unknown") + " />", Tt = " Did you accidentally export a JSX literal instead of a component?") : fn = typeof O, ge("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", fn, Tt);
        }
        var hn = rr(O, ce, Ae, Et, _t);
        if (hn == null)
          return hn;
        if (Dt) {
          var fr = ce.children;
          if (fr !== void 0)
            if (Ge)
              if (Kn(fr)) {
                for (var ao = 0; ao < fr.length; ao++)
                  ki(fr[ao], O);
                Object.freeze && Object.freeze(fr);
              } else
                ge("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ki(fr, O);
        }
        if (Qn.call(ce, "key")) {
          var oo = X(O), xt = Object.keys(ce).filter(function(yl) {
            return yl !== "key";
          }), bt = xt.length > 0 ? "{key: someKey, " + xt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ar[oo + bt]) {
            var io = xt.length > 0 ? "{" + xt.join(": ..., ") + ": ...}" : "{}";
            ge(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, bt, oo, io, oo), Ar[oo + bt] = !0;
          }
        }
        return O === _ ? jr(hn) : ml(hn), hn;
      }
    }
    function xo(O, ce, Ae) {
      return cr(O, ce, Ae, !0);
    }
    function ro(O, ce, Ae) {
      return cr(O, ce, Ae, !1);
    }
    var wo = ro, bo = xo;
    Ev.Fragment = _, Ev.jsx = wo, Ev.jsxs = bo;
  })()), Ev;
}
var nE;
function i3() {
  return nE || (nE = 1, process.env.NODE_ENV === "production" ? Cy.exports = a3() : Cy.exports = o3()), Cy.exports;
}
var R = i3(), Me = kv();
const Oa = /* @__PURE__ */ IE(Me), rE = (c) => Symbol.iterator in c, aE = (c) => (
  // HACK: avoid checking entries type
  "entries" in c
), oE = (c, d) => {
  const p = c instanceof Map ? c : new Map(c.entries()), _ = d instanceof Map ? d : new Map(d.entries());
  if (p.size !== _.size)
    return !1;
  for (const [x, C] of p)
    if (!_.has(x) || !Object.is(C, _.get(x)))
      return !1;
  return !0;
}, l3 = (c, d) => {
  const p = c[Symbol.iterator](), _ = d[Symbol.iterator]();
  let x = p.next(), C = _.next();
  for (; !x.done && !C.done; ) {
    if (!Object.is(x.value, C.value))
      return !1;
    x = p.next(), C = _.next();
  }
  return !!x.done && !!C.done;
};
function u3(c, d) {
  return Object.is(c, d) ? !0 : typeof c != "object" || c === null || typeof d != "object" || d === null || Object.getPrototypeOf(c) !== Object.getPrototypeOf(d) ? !1 : rE(c) && rE(d) ? aE(c) && aE(d) ? oE(c, d) : l3(c, d) : oE(
    { entries: () => Object.entries(c) },
    { entries: () => Object.entries(d) }
  );
}
function pl(c) {
  const d = Oa.useRef(void 0);
  return (p) => {
    const _ = c(p);
    return u3(d.current, _) ? d.current : d.current = _;
  };
}
const s3 = "_sidebar_or261_1", c3 = "_sidebarNav_or261_24", f3 = "_sectionWrapper_or261_32", d3 = "_sectionHeader_or261_37", p3 = "_active_or261_48", v3 = "_sidebarItemInHeader_or261_68", h3 = "_plusButton_or261_71", m3 = "_sidebarItem_or261_68", y3 = "_sidebarIcon_or261_138", g3 = "_sidebarLabel_or261_148", _3 = "_plusIcon_or261_173", S3 = "_rotated_or261_178", kn = {
  sidebar: s3,
  sidebarNav: c3,
  sectionWrapper: f3,
  sectionHeader: d3,
  active: p3,
  sidebarItemInHeader: v3,
  plusButton: h3,
  sidebarItem: m3,
  sidebarIcon: y3,
  sidebarLabel: g3,
  plusIcon: _3,
  rotated: S3
}, iE = (c) => {
  let d;
  const p = /* @__PURE__ */ new Set(), _ = (b, M) => {
    const U = typeof b == "function" ? b(d) : b;
    if (!Object.is(U, d)) {
      const V = d;
      d = M ?? (typeof U != "object" || U === null) ? U : Object.assign({}, d, U), p.forEach((H) => H(d, V));
    }
  }, x = () => d, w = { setState: _, getState: x, getInitialState: () => k, subscribe: (b) => (p.add(b), () => p.delete(b)) }, k = d = c(_, x, w);
  return w;
}, C3 = ((c) => c ? iE(c) : iE), E3 = (c) => c;
function x3(c, d = E3) {
  const p = Oa.useSyncExternalStore(
    c.subscribe,
    Oa.useCallback(() => d(c.getState()), [c, d]),
    Oa.useCallback(() => d(c.getInitialState()), [c, d])
  );
  return Oa.useDebugValue(p), p;
}
const lE = (c) => {
  const d = C3(c), p = (_) => x3(d, _);
  return Object.assign(p, d), p;
}, f_ = ((c) => c ? lE(c) : lE), uE = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_API_TOKEN: "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.T9pDod8XuQJHDvFa_xstePpn3WZaTPWYZ5Ykzg7diVnz-PJPfglgHqCR75m8NkJqLpJSEhQgLR-IkPmDKZ4Zp-bXkT7Ptczj.RCYVUeOGLGgxqPGp0FLmXw.7aK6kqGnXvjjUxA1_g-AblD9L6KNHC5mhlq1uZctbRkZ2WficslQ_WnIpU-igvxHHxRDYYWF8tpe7KfQ9gJeTUDyFwUYlIsTsGdUT5cZLbQbz9NrGYXoSkgJPG7JLPxAXJdV89Fucm2E_CkxvpQwfQKvcgU310BG5P875Iw4JVk.n_buc7bwHEV6Fmh37WlDiLb4mKZbGEiCQWyy-x6Lpj8", VITE_API_URL: "https://xh2o-yths-38lt.n7c.xano.io/api", VITE_DATA_SOURCE: "staging", VITE_LLM_ENDPOINT: "http://localhost:3001", VITE_USER_ID: "3", VITE_USER_NAME: "Dynamo Denis" }, bv = /* @__PURE__ */ new Map(), xy = (c) => {
  const d = bv.get(c);
  return d ? Object.fromEntries(
    Object.entries(d.stores).map(([p, _]) => [p, _.getState()])
  ) : {};
}, w3 = (c, d, p) => {
  if (c === void 0)
    return {
      type: "untracked",
      connection: d.connect(p)
    };
  const _ = bv.get(p.name);
  if (_)
    return { type: "tracked", store: c, ..._ };
  const x = {
    connection: d.connect(p),
    stores: {}
  };
  return bv.set(p.name, x), { type: "tracked", store: c, ...x };
}, b3 = (c, d) => {
  if (d === void 0) return;
  const p = bv.get(c);
  p && (delete p.stores[d], Object.keys(p.stores).length === 0 && bv.delete(c));
}, R3 = (c) => {
  var d, p;
  if (!c) return;
  const _ = c.split(`
`), x = _.findIndex(
    (h) => h.includes("api.setState")
  );
  if (x < 0) return;
  const C = ((d = _[x + 1]) == null ? void 0 : d.trim()) || "";
  return (p = /.+ (.+) .+/.exec(C)) == null ? void 0 : p[1];
}, k3 = (c, d = {}) => (p, _, x) => {
  const { enabled: C, anonymousActionType: h, store: w, ...k } = d;
  let b;
  try {
    b = (C ?? (uE ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch {
  }
  if (!b)
    return c(p, _, x);
  const { connection: M, ...U } = w3(w, b, k);
  let V = !0;
  x.setState = ((ue, xe, be) => {
    const ge = p(ue, xe);
    if (!V) return ge;
    const Ee = be === void 0 ? {
      type: h || R3(new Error().stack) || "anonymous"
    } : typeof be == "string" ? { type: be } : be;
    return w === void 0 ? (M?.send(Ee, _()), ge) : (M?.send(
      {
        ...Ee,
        type: `${w}/${Ee.type}`
      },
      {
        ...xy(k.name),
        [w]: x.getState()
      }
    ), ge);
  }), x.devtools = {
    cleanup: () => {
      M && typeof M.unsubscribe == "function" && M.unsubscribe(), b3(k.name, w);
    }
  };
  const H = (...ue) => {
    const xe = V;
    V = !1, p(...ue), V = xe;
  }, re = c(x.setState, _, x);
  if (U.type === "untracked" ? M?.init(re) : (U.stores[U.store] = x, M?.init(
    Object.fromEntries(
      Object.entries(U.stores).map(([ue, xe]) => [
        ue,
        ue === U.store ? re : xe.getState()
      ])
    )
  )), x.dispatchFromDevtools && typeof x.dispatch == "function") {
    let ue = !1;
    const xe = x.dispatch;
    x.dispatch = (...be) => {
      (uE ? "production" : void 0) !== "production" && be[0].type === "__setState" && !ue && (console.warn(
        '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
      ), ue = !0), xe(...be);
    };
  }
  return M.subscribe((ue) => {
    var xe;
    switch (ue.type) {
      case "ACTION":
        if (typeof ue.payload != "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return J1(
          ue.payload,
          (be) => {
            if (be.type === "__setState") {
              if (w === void 0) {
                H(be.state);
                return;
              }
              Object.keys(be.state).length !== 1 && console.error(
                `
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `
              );
              const ge = be.state[w];
              if (ge == null)
                return;
              JSON.stringify(x.getState()) !== JSON.stringify(ge) && H(ge);
              return;
            }
            x.dispatchFromDevtools && typeof x.dispatch == "function" && x.dispatch(be);
          }
        );
      case "DISPATCH":
        switch (ue.payload.type) {
          case "RESET":
            return H(re), w === void 0 ? M?.init(x.getState()) : M?.init(xy(k.name));
          case "COMMIT":
            if (w === void 0) {
              M?.init(x.getState());
              return;
            }
            return M?.init(xy(k.name));
          case "ROLLBACK":
            return J1(ue.state, (be) => {
              if (w === void 0) {
                H(be), M?.init(x.getState());
                return;
              }
              H(be[w]), M?.init(xy(k.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return J1(ue.state, (be) => {
              if (w === void 0) {
                H(be);
                return;
              }
              JSON.stringify(x.getState()) !== JSON.stringify(be[w]) && H(be[w]);
            });
          case "IMPORT_STATE": {
            const { nextLiftedState: be } = ue.payload, ge = (xe = be.computedStates.slice(-1)[0]) == null ? void 0 : xe.state;
            if (!ge) return;
            H(w === void 0 ? ge : ge[w]), M?.send(
              null,
              // FIXME no-any
              be
            );
            return;
          }
          case "PAUSE_RECORDING":
            return V = !V;
        }
        return;
    }
  }), re;
}, d_ = k3, J1 = (c, d) => {
  let p;
  try {
    p = JSON.parse(c);
  } catch (_) {
    console.error(
      "[zustand devtools middleware] Could not parse the received json",
      _
    );
  }
  p !== void 0 && d(p);
}, Lr = f_()(
  d_(
    (c) => ({
      token: null,
      baseUrl: null,
      dataSource: null,
      user_id: 0,
      copilot_llm_endpoint: "",
      user_name: "",
      setVariables: (d) => c((p) => ({
        token: d.token !== void 0 ? d.token : p.token,
        baseUrl: d.baseUrl !== void 0 ? d.baseUrl : p.baseUrl,
        dataSource: d.dataSource !== void 0 ? d.dataSource : p.dataSource,
        user_id: d.user_id !== void 0 ? d.user_id : p.user_id,
        copilot_llm_endpoint: d.copilot_llm_endpoint !== void 0 ? d.copilot_llm_endpoint : p.copilot_llm_endpoint,
        user_name: d.user_name !== void 0 ? d.user_name : p.user_name
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
          const { token: d, baseUrl: p, dataSource: _ } = Lr.getState();
          if (!p || typeof p == "string" && p.trim() === "")
            throw console.error("VariablesStore state:", Lr.getState()), new Error("Base URL is not defined. Please provide it as a prop to CopilotApp.");
          if (!d || typeof d == "string" && d.trim() === "")
            throw console.error("VariablesStore state:", Lr.getState()), new Error("Token is not defined. Please provide it as a prop to CopilotApp.");
          const x = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${d}`,
            "x-data-source": _ || ""
          }, C = await fetch(`${p}:Et3oQAtI/my-persons`, { headers: x }), h = await C.json();
          if (!C.ok) {
            const w = h?.message || h?.error || "Failed to fetch loops", k = `HTTP ${C.status}: ${w}`;
            throw new Error(k);
          }
          c({ leverageLoops: h, isLoadingPersons: !1 });
        } catch (d) {
          c({
            personsError: d instanceof Error ? d.message : "Unknown error",
            isLoadingPersons: !1
          });
        }
      },
      fetchSuggestionRequests: async () => {
        c({ isLoadingSuggestionRequests: !0, suggestionRequestsError: null });
        try {
          const { token: d, baseUrl: p, dataSource: _ } = Lr.getState();
          if (!p || typeof p == "string" && p.trim() === "")
            throw console.error("VariablesStore state:", Lr.getState()), new Error("Base URL is not defined. Please provide it as a prop to CopilotApp.");
          if (!d || typeof d == "string" && d.trim() === "")
            throw console.error("VariablesStore state:", Lr.getState()), new Error("Token is not defined. Please provide it as a prop to CopilotApp.");
          const x = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${d}`,
            "x-data-source": _ || ""
          }, C = await fetch(`${p}:MkA4QsNh/suggestion-requests?copilot_mode=loop`, { headers: x }), h = await C.json();
          if (!C.ok) {
            const w = h?.message || h?.error || "Failed to fetch suggestion requests", k = `HTTP ${C.status}: ${w}`;
            throw new Error(k);
          }
          c({ suggestionRequests: h?.items ?? [], isLoadingSuggestionRequests: !1 });
        } catch (d) {
          c({
            suggestionRequestsError: d instanceof Error ? d.message : "Unknown error",
            isLoadingSuggestionRequests: !1
          });
        }
      },
      fetchOutcomesSuggestionRequests: async () => {
        c({ isLoadingSuggestionRequests: !0, suggestionRequestsError: null });
        try {
          const { token: d, baseUrl: p, dataSource: _ } = Lr.getState();
          if (!p || typeof p == "string" && p.trim() === "")
            throw console.error("VariablesStore state:", Lr.getState()), new Error("Base URL is not defined. Please provide it as a prop to CopilotApp.");
          if (!d || typeof d == "string" && d.trim() === "")
            throw console.error("VariablesStore state:", Lr.getState()), new Error("Token is not defined. Please provide it as a prop to CopilotApp.");
          const x = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${d}`,
            "x-data-source": _ || ""
          }, C = await fetch(`${p}:MkA4QsNh/suggestion-requests?copilot_mode=outcome`, { headers: x }), h = await C.json();
          if (!C.ok) {
            const w = h?.message || h?.error || "Failed to fetch suggestion requests", k = `HTTP ${C.status}: ${w}`;
            throw new Error(k);
          }
          c({ outcomesSuggestionRequests: h?.items ?? [], isLoadingSuggestionRequests: !1 });
        } catch (d) {
          c({
            suggestionRequestsError: d instanceof Error ? d.message : "Unknown error",
            isLoadingSuggestionRequests: !1
          });
        }
      },
      createSuggestionRequest: async (d) => {
        c({ isCreatingSuggestionRequest: !0, createSuggestionRequestError: null });
        try {
          const { token: p, baseUrl: _, dataSource: x } = Lr.getState();
          if (!_ || typeof _ == "string" && _.trim() === "")
            throw console.error("VariablesStore state:", Lr.getState()), new Error("Base URL is not defined. Please provide it as a prop to CopilotApp.");
          if (!p || typeof p == "string" && p.trim() === "")
            throw console.error("VariablesStore state:", Lr.getState()), new Error("Token is not defined. Please provide it as a prop to CopilotApp.");
          const C = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${p}`,
            "x-data-source": x || ""
          }, h = await fetch(
            `${_}:MkA4QsNh/suggestion-requests`,
            { headers: C, method: "POST", body: JSON.stringify(d) }
          ), w = await h.json();
          if (!h.ok) {
            const k = w?.message || w?.error || "Failed to create suggestion request";
            throw new Error(`HTTP ${h.status}: ${k}`);
          }
          c((k) => ({
            suggestionRequests: [w, ...k.suggestionRequests],
            isCreatingSuggestionRequest: !1
          }));
        } catch (p) {
          c({
            createSuggestionRequestError: p instanceof Error ? p.message : "Unknown error",
            isCreatingSuggestionRequest: !1
          });
        }
      },
      deleteSuggestionRequest: async (d) => {
        c({ isDeletingSuggestionRequest: !0, deleteSuggestionRequestError: null });
        try {
          const { token: p, baseUrl: _, dataSource: x } = Lr.getState();
          if (!_ || typeof _ == "string" && _.trim() === "")
            throw new Error("Base URL is not defined. Please provide it as a prop to CopilotApp.");
          if (!p || typeof p == "string" && p.trim() === "")
            throw new Error("Token is not defined. Please provide it as a prop to CopilotApp.");
          const C = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${p}`,
            "x-data-source": x || ""
          }, h = await fetch(
            `${_}:MkA4QsNh/suggestion-requests/${d}`,
            { headers: C, method: "DELETE" }
          );
          if (!h.ok) {
            const w = await h.json().catch(() => ({})), k = w?.message || w?.error || "Failed to delete suggestion request";
            throw new Error(`HTTP ${h.status}: ${k}`);
          }
          c((w) => ({
            suggestionRequests: w.suggestionRequests.filter((k) => k.id !== d),
            isDeletingSuggestionRequest: !1
          }));
        } catch (p) {
          c({
            deleteSuggestionRequestError: p instanceof Error ? p.message : "Unknown error",
            isDeletingSuggestionRequest: !1
          });
        }
      },
      setLeverageLoops: (d) => c({ leverageLoops: d }),
      addLeverageLoops: (d) => c((p) => ({ leverageLoops: [...p.leverageLoops, ...d] }))
    }),
    { name: "LeverageLoopsStore" }
  )
), dd = (c) => ({
  messages: [],
  threadId: `thread-${c}-${Date.now()}`,
  isLoading: !1
}), T3 = {
  messages: [],
  threadId: "thread-empty",
  isLoading: !1
}, cu = f_()(
  d_((c, d) => ({
    activeContext: "copilot",
    selectedPerson: null,
    selectedSuggestionRequest: null,
    leverageLoopSummaries: [],
    selectedActions: {},
    copilotChat: dd("copilot"),
    outcomesChat: dd("outcomes"),
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
      const p = d();
      return p.selectedPerson ? p.selectedPerson.full_name : p.selectedSuggestionRequest ? p.selectedSuggestionRequest.request_panel_title : "leverage-loop-default";
    },
    // Helper to get current leverage loop chat state
    getCurrentLeverageLoopChat: () => {
      const p = d(), _ = p.getCurrentLeverageLoopKey();
      return _ && p.leverageLoopChats[_] ? p.leverageLoopChats[_] : T3;
    },
    addMessage: (p, _, x) => c((C) => {
      if (p === "leverage-loops") {
        const w = x || C.getCurrentLeverageLoopKey();
        if (!w) return C;
        const k = C.leverageLoopChats[w] || dd(`leverage-loop-${w}`);
        return {
          leverageLoopChats: {
            ...C.leverageLoopChats,
            [w]: {
              ...k,
              messages: [...k.messages, _]
            }
          }
        };
      }
      const h = wy(p);
      return {
        [h]: {
          ...C[h],
          messages: [...C[h].messages, _]
        }
      };
    }),
    updateMessage: (p, _, x, C, h) => c((w) => {
      if (p === "leverage-loops") {
        const b = h || w.getCurrentLeverageLoopKey();
        if (!b) return w;
        const M = w.leverageLoopChats[b];
        return M ? {
          leverageLoopChats: {
            ...w.leverageLoopChats,
            [b]: {
              ...M,
              messages: M.messages.map(
                (U) => U.id === _ ? { ...U, content: x, isStreaming: C ?? U.isStreaming } : U
              )
            }
          }
        } : w;
      }
      const k = wy(p);
      return {
        [k]: {
          ...w[k],
          messages: w[k].messages.map(
            (b) => b.id === _ ? { ...b, content: x, isStreaming: C ?? b.isStreaming } : b
          )
        }
      };
    }),
    setIsLoading: (p, _, x) => c((C) => {
      if (p === "leverage-loops") {
        const w = x || C.getCurrentLeverageLoopKey();
        if (!w) return C;
        const k = C.leverageLoopChats[w] || dd(`leverage-loop-${w}`);
        return {
          leverageLoopChats: {
            ...C.leverageLoopChats,
            [w]: {
              ...k,
              isLoading: _
            }
          }
        };
      }
      const h = wy(p);
      return {
        [h]: {
          ...C[h],
          isLoading: _
        }
      };
    }),
    clearChat: (p, _) => c((x) => {
      if (p === "leverage-loops") {
        const h = _ || x.getCurrentLeverageLoopKey();
        return h ? {
          leverageLoopChats: {
            ...x.leverageLoopChats,
            [h]: dd(`leverage-loop-${h}`)
          }
        } : x;
      }
      return {
        [wy(p)]: dd(p)
      };
    }),
    upsertLeverageLoopSummary: (p) => c((_) => _.leverageLoopSummaries.findIndex((C) => C.id === p.id) >= 0 ? {
      leverageLoopSummaries: _.leverageLoopSummaries.map((C) => C.id === p.id ? p : C)
    } : {
      leverageLoopSummaries: [..._.leverageLoopSummaries, p]
    }),
    setSelectedAction: (p, _) => c((x) => ({
      selectedActions: {
        ...x.selectedActions,
        [p]: _
      }
    })),
    getSelectedAction: (p) => d().selectedActions[p] || null
  }), { name: "ChatContextStore" })
);
function wy(c) {
  switch (c) {
    case "copilot":
      return "copilotChat";
    case "outcomes":
      return "outcomesChat";
    default:
      return "copilotChat";
  }
}
const N3 = "_composerContainer_1dqbd_1", D3 = "_composer_1dqbd_1", M3 = "_inputWrapper_1dqbd_15", L3 = "_input_1dqbd_15", O3 = "_actions_1dqbd_40", j3 = "_leftActions_1dqbd_47", A3 = "_rightActions_1dqbd_48", U3 = "_actionButton_1dqbd_54", z3 = "_sendButton_1dqbd_75", P3 = "_active_1dqbd_92", Ko = {
  composerContainer: N3,
  composer: D3,
  inputWrapper: M3,
  input: L3,
  actions: O3,
  leftActions: j3,
  rightActions: A3,
  actionButton: U3,
  sendButton: z3,
  active: P3
}, I3 = ({
  onSend: c,
  disabled: d = !1,
  placeholder: p = "Ask anything..",
  initialValue: _ = ""
}) => {
  const [x, C] = Me.useState(_), h = Me.useRef(null);
  Me.useEffect(() => {
    _ && (C(_), setTimeout(() => h.current?.focus(), 0));
  }, [_]), Me.useEffect(() => {
    const b = h.current;
    b && (b.style.height = "auto", b.style.height = `${Math.min(b.scrollHeight, 200)}px`);
  }, [x]);
  const w = (b) => {
    b?.preventDefault(), x.trim() && !d && (c(x.trim()), C(""));
  }, k = (b) => {
    b.key === "Enter" && !b.shiftKey && (b.preventDefault(), w());
  };
  return /* @__PURE__ */ R.jsx("div", { className: Ko.composerContainer, children: /* @__PURE__ */ R.jsxs("form", { onSubmit: w, className: Ko.composer, children: [
    /* @__PURE__ */ R.jsx("div", { className: Ko.inputWrapper, children: /* @__PURE__ */ R.jsx(
      "textarea",
      {
        ref: h,
        value: x,
        onChange: (b) => C(b.target.value),
        onKeyDown: k,
        placeholder: p,
        disabled: d,
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
            className: `${Ko.sendButton} ${x.trim() && !d ? Ko.active : ""}`,
            disabled: !x.trim() || d,
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
}, F3 = "_messageContainer_hxhyd_1", V3 = "_user_hxhyd_6", H3 = "_assistant_hxhyd_9", $3 = "_userMessage_hxhyd_23", B3 = "_assistantAvatar_hxhyd_38", q3 = "_assistantMessage_hxhyd_55", W3 = "_textContent_hxhyd_66", Y3 = "_streamingIndicator_hxhyd_71", dl = {
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
  (d, p, _) => _ ? _.toUpperCase() : p.toLowerCase()
), sE = (c) => {
  const d = Q3(c);
  return d.charAt(0).toUpperCase() + d.slice(1);
}, FE = (...c) => c.filter((d, p, _) => !!d && d.trim() !== "" && _.indexOf(d) === p).join(" ").trim(), K3 = (c) => {
  for (const d in c)
    if (d.startsWith("aria-") || d === "role" || d === "title")
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
const J3 = Me.forwardRef(
  ({
    color: c = "currentColor",
    size: d = 24,
    strokeWidth: p = 2,
    absoluteStrokeWidth: _,
    className: x = "",
    children: C,
    iconNode: h,
    ...w
  }, k) => Me.createElement(
    "svg",
    {
      ref: k,
      ...X3,
      width: d,
      height: d,
      stroke: c,
      strokeWidth: _ ? Number(p) * 24 / Number(d) : p,
      className: FE("lucide", x),
      ...!C && !K3(w) && { "aria-hidden": "true" },
      ...w
    },
    [
      ...h.map(([b, M]) => Me.createElement(b, M)),
      ...Array.isArray(C) ? C : [C]
    ]
  )
);
const Re = (c, d) => {
  const p = Me.forwardRef(
    ({ className: _, ...x }, C) => Me.createElement(J3, {
      ref: C,
      iconNode: d,
      className: FE(
        `lucide-${G3(sE(c))}`,
        `lucide-${c}`,
        _
      ),
      ...x
    })
  );
  return p.displayName = sE(c), p;
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
], L4 = Re("chart-pie", M4);
const O4 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], j4 = Re("check", O4);
const A4 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], VE = Re("chevron-down", A4);
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
const L5 = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], O5 = Re("house", L5);
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
], LN = Re("settings", MN);
const ON = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
], jN = Re("share-2", ON);
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
], hD = Re("zap", vD), mD = "_card_17b4s_1", yD = "_sources_17b4s_11", gD = "_sourcesHeader_17b4s_17", _D = "_sourcesList_17b4s_26", SD = "_sourceItem_17b4s_32", CD = "_sourceIndex_17b4s_45", ED = "_sourceTitle_17b4s_51", xD = "_sourceName_17b4s_55", wD = "_header_17b4s_60", bD = "_headerTitle_17b4s_60", RD = "_headerSubtitle_17b4s_65", kD = "_textContent_17b4s_70", TD = "_button_17b4s_93", ND = "_primary_17b4s_106", DD = "_secondary_17b4s_117", MD = "_ghost_17b4s_125", LD = "_selected_17b4s_136", OD = "_buttonGroup_17b4s_146", jD = "_horizontal_17b4s_150", AD = "_vertical_17b4s_153", UD = "_form_17b4s_157", zD = "_formField_17b4s_163", PD = "_fieldLabel_17b4s_168", ID = "_fieldHint_17b4s_173", FD = "_input_17b4s_178", VD = "_textarea_17b4s_179", HD = "_select_17b4s_136", $D = "_error_17b4s_202", BD = "_checkboxWrapper_17b4s_222", qD = "_radioWrapper_17b4s_223", WD = "_radioGroup_17b4s_243", YD = "_checkboxGroup_17b4s_249", GD = "_list_17b4s_255", QD = "_listHeading_17b4s_255", KD = "_listItems_17b4s_263", XD = "_listItem_17b4s_263", JD = "_listItemIcon_17b4s_283", ZD = "_listItemContent_17b4s_293", eM = "_listItemTitle_17b4s_296", tM = "_listItemSubtitle_17b4s_302", nM = "_listItemAction_17b4s_307", rM = "_actionButton_17b4s_307", aM = "_stats_17b4s_326", oM = "_statsNumber_17b4s_329", iM = "_statsLabel_17b4s_335", lM = "_profileTile_17b4s_341", uM = "_profileIcon_17b4s_346", sM = "_profileContent_17b4s_356", cM = "_profileTitle_17b4s_356", fM = "_profileLabel_17b4s_362", dM = "_miniCard_17b4s_368", pM = "_miniCardBlock_17b4s_378", vM = "_steps_17b4s_384", hM = "_stepsItem_17b4s_401", mM = "_stepsTitle_17b4s_416", yM = "_stepsDetails_17b4s_422", gM = "_sectionBlock_17b4s_427", _M = "_section_17b4s_427", SM = "_expanded_17b4s_438", CM = "_sectionTrigger_17b4s_438", EM = "_triggerIcon_17b4s_459", xM = "_rotated_17b4s_462", wM = "_sectionContent_17b4s_466", bM = "_icon_17b4s_473", RM = "_streamingContainer_17b4s_479", kM = "_streamingIndicator_17b4s_484", TM = "_pulse_17b4s_1", NM = "_skeletonLoader_17b4s_496", DM = "_skeletonShimmer_17b4s_511", MM = "_shimmer_17b4s_1", Ue = {
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
  selected: LD,
  buttonGroup: OD,
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
}, LM = {
  // Arrows & Navigation
  target: BN,
  "arrow-right": i4,
  "arrow-left": a4,
  "arrow-up": u4,
  "arrow-down": n4,
  "chevron-down": VE,
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
  "pie-chart": L4,
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
  settings: LN,
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
  home: O5,
  "map-pin": Z5,
  globe: N5,
  // Transportation
  car: R4,
  // Ideas & Energy
  lightbulb: V5,
  rocket: wN,
  coffee: Z4
}, HE = ({ name: c, size: d = 18 }) => {
  const p = LM[c.toLowerCase()];
  return p ? /* @__PURE__ */ R.jsx("span", { className: Ue.icon, children: /* @__PURE__ */ R.jsx(p, { size: d }) }) : (console.warn(`Icon "${c}" not found in registry`), /* @__PURE__ */ R.jsx("span", { className: Ue.icon, style: { width: d, height: d }, children: "•" }));
}, OM = ({ title: c, subtitle: d }) => /* @__PURE__ */ R.jsxs("div", { className: Ue.header, children: [
  /* @__PURE__ */ R.jsx("h3", { className: Ue.headerTitle, children: c }),
  d && /* @__PURE__ */ R.jsx("p", { className: Ue.headerSubtitle, children: d })
] });
function jM(c) {
  return c.split(/\n\n+/).map((p, _) => {
    let x = p;
    const C = /\*\*(.*?)\*\*/g, h = p.split(C);
    h.length > 1 && (x = h.map((k, b) => b % 2 === 1 ? /* @__PURE__ */ R.jsx("strong", { children: k }, b) : k));
    const w = /`(.*?)`/g;
    return typeof x == "string" && x.match(w) && (x = x.split(w).map((b, M) => M % 2 === 1 ? /* @__PURE__ */ R.jsx("code", { children: b }, M) : b)), /* @__PURE__ */ R.jsx("p", { children: x }, _);
  });
}
const AM = ({ textMarkdown: c }) => /* @__PURE__ */ R.jsx("div", { className: Ue.textContent, children: jM(c) }), UM = ({
  children: c,
  name: d,
  variant: p = "primary",
  disabled: _ = !1,
  selected: x = !1,
  action: C,
  onAction: h
}) => {
  const w = () => {
    C && h && h(C);
  }, k = ["submit", "save", "confirm", "set", "create", "send", "apply"], b = (d || "").toLowerCase(), M = (typeof c == "string" ? c : "").toLowerCase(), U = C?.type === "submit_form" || k.some((H) => b.includes(H)) || k.some((H) => M.includes(H)), V = [
    Ue.button,
    Ue[p],
    x ? Ue.selected : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ R.jsx(
    "button",
    {
      className: V,
      disabled: _,
      onClick: w,
      type: U ? "submit" : "button",
      children: c
    }
  );
}, zM = ({
  variant: c = "horizontal",
  children: d,
  renderComponent: p
}) => /* @__PURE__ */ R.jsx("div", { className: `${Ue.buttonGroup} ${Ue[c]}`, children: d.map((_, x) => /* @__PURE__ */ R.jsx(Oa.Fragment, { children: p(_) }, x)) }), PM = ({ children: c, sources: d, renderComponent: p }) => !c || !Array.isArray(c) ? /* @__PURE__ */ R.jsx("div", { className: Ue.card }) : /* @__PURE__ */ R.jsxs("div", { className: Ue.card, children: [
  c.map((_, x) => /* @__PURE__ */ R.jsx(Oa.Fragment, { children: p(_) }, x)),
  d && d.length > 0 && /* @__PURE__ */ R.jsxs("div", { className: Ue.sources, children: [
    /* @__PURE__ */ R.jsx("div", { className: Ue.sourcesHeader, children: "Sources" }),
    /* @__PURE__ */ R.jsx("div", { className: Ue.sourcesList, children: d.map((_, x) => /* @__PURE__ */ R.jsxs(
      "a",
      {
        href: _.url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: Ue.sourceItem,
        children: [
          /* @__PURE__ */ R.jsxs("span", { className: Ue.sourceIndex, children: [
            "[",
            x + 1,
            "]"
          ] }),
          /* @__PURE__ */ R.jsx("span", { className: Ue.sourceTitle, children: _.title }),
          _.sourceName && /* @__PURE__ */ R.jsxs("span", { className: Ue.sourceName, children: [
            " - ",
            _.sourceName
          ] })
        ]
      },
      x
    )) })
  ] })
] }), IM = ({ heading: c, items: d, onAction: p }) => /* @__PURE__ */ R.jsxs("div", { className: Ue.list, children: [
  c && /* @__PURE__ */ R.jsx("h4", { className: Ue.listHeading, children: c }),
  /* @__PURE__ */ R.jsx("div", { className: Ue.listItems, children: d.map((_, x) => /* @__PURE__ */ R.jsxs("div", { className: Ue.listItem, children: [
    _.iconName && /* @__PURE__ */ R.jsx("div", { className: Ue.listItemIcon, children: /* @__PURE__ */ R.jsx(HE, { name: _.iconName, size: 18 }) }),
    /* @__PURE__ */ R.jsxs("div", { className: Ue.listItemContent, children: [
      /* @__PURE__ */ R.jsx("p", { className: Ue.listItemTitle, children: _.title }),
      _.subtitle && /* @__PURE__ */ R.jsx("p", { className: Ue.listItemSubtitle, children: _.subtitle })
    ] }),
    _.itemAction && /* @__PURE__ */ R.jsx("div", { className: Ue.listItemAction, children: /* @__PURE__ */ R.jsx(
      "button",
      {
        className: Ue.actionButton,
        onClick: () => p?.(_.itemAction.action),
        children: _.itemAction.label
      }
    ) })
  ] }, x)) })
] }), FM = ({ number: c, label: d }) => /* @__PURE__ */ R.jsxs("div", { className: Ue.stats, children: [
  /* @__PURE__ */ R.jsx("p", { className: Ue.statsNumber, children: c }),
  /* @__PURE__ */ R.jsx("p", { className: Ue.statsLabel, children: d })
] }), VM = ({
  title: c,
  label: d,
  child: p,
  renderComponent: _
}) => /* @__PURE__ */ R.jsxs("div", { className: Ue.profileTile, children: [
  p && /* @__PURE__ */ R.jsx("div", { className: Ue.profileIcon, children: _(p) }),
  /* @__PURE__ */ R.jsxs("div", { className: Ue.profileContent, children: [
    /* @__PURE__ */ R.jsx("p", { className: Ue.profileTitle, children: c }),
    d && /* @__PURE__ */ R.jsx("p", { className: Ue.profileLabel, children: d })
  ] })
] }), HM = ({
  lhs: c,
  rhs: d,
  renderComponent: p
}) => /* @__PURE__ */ R.jsxs("div", { className: Ue.miniCard, children: [
  /* @__PURE__ */ R.jsx("div", { className: Ue.miniCardLhs, children: p(c) }),
  d && /* @__PURE__ */ R.jsx("div", { className: Ue.miniCardRhs, children: p(d) })
] }), $M = ({
  children: c,
  renderComponent: d
}) => /* @__PURE__ */ R.jsx("div", { className: Ue.miniCardBlock, children: c.map((p, _) => /* @__PURE__ */ R.jsx(Oa.Fragment, { children: d(p) }, _)) }), BM = ({
  title: c,
  details: d,
  renderComponent: p
}) => /* @__PURE__ */ R.jsxs("div", { className: Ue.stepsItem, children: [
  /* @__PURE__ */ R.jsx("h4", { className: Ue.stepsTitle, children: c }),
  d && /* @__PURE__ */ R.jsx("div", { className: Ue.stepsDetails, children: p(d) })
] }), qM = ({
  children: c,
  renderComponent: d
}) => /* @__PURE__ */ R.jsx("div", { className: Ue.steps, children: c.map((p, _) => /* @__PURE__ */ R.jsx(Oa.Fragment, { children: d(p) }, _)) }), WM = ({
  isFoldable: c = !0,
  sections: d,
  renderComponent: p
}) => {
  const [_, x] = Me.useState(
    // If not foldable, expand all sections by default
    new Set(c ? [] : d.map((h) => h.value))
  ), C = (h) => {
    c && x((w) => {
      const k = new Set(w);
      return k.has(h) ? k.delete(h) : k.add(h), k;
    });
  };
  return /* @__PURE__ */ R.jsx("div", { className: Ue.sectionBlock, children: d.map((h) => {
    const w = _.has(h.value);
    return /* @__PURE__ */ R.jsxs(
      "div",
      {
        className: `${Ue.section} ${w ? Ue.expanded : ""}`,
        children: [
          /* @__PURE__ */ R.jsxs(
            "button",
            {
              className: Ue.sectionTrigger,
              onClick: () => C(h.value),
              type: "button",
              children: [
                /* @__PURE__ */ R.jsx("span", { children: h.trigger }),
                c && /* @__PURE__ */ R.jsx("span", { className: `${Ue.triggerIcon} ${w ? Ue.rotated : ""}`, children: /* @__PURE__ */ R.jsx(VE, { size: 16 }) })
              ]
            }
          ),
          (w || !c) && /* @__PURE__ */ R.jsx("div", { className: Ue.sectionContent, children: h.content.map((k, b) => /* @__PURE__ */ R.jsx(Oa.Fragment, { children: p(k) }, b)) })
        ]
      },
      h.value
    );
  }) });
}, YM = ({
  name: c,
  placeholder: d,
  value: p = "",
  type: _ = "text",
  rules: x,
  onChange: C
}) => {
  const [h, w] = Me.useState(p), [k, b] = Me.useState(null), M = (U) => {
    const V = U.target.value;
    w(V), x?.required && !V ? b("This field is required") : x?.minLength && V.length < x.minLength ? b(`Minimum ${x.minLength} characters required`) : b(null), C?.(c, V);
  };
  return /* @__PURE__ */ R.jsx(
    "input",
    {
      type: _,
      name: c,
      placeholder: d,
      value: h,
      onChange: M,
      className: `${Ue.input} ${k ? Ue.error : ""}`
    }
  );
}, GM = ({
  name: c,
  placeholder: d,
  value: p = "",
  rows: _ = 3,
  rules: x,
  onChange: C
}) => {
  const [h, w] = Me.useState(p), [k, b] = Me.useState(null), M = (U) => {
    const V = U.target.value;
    w(V), x?.required && !V ? b("This field is required") : x?.minLength && V.length < x.minLength ? b(`Minimum ${x.minLength} characters required`) : b(null), C?.(c, V);
  };
  return /* @__PURE__ */ R.jsx(
    "textarea",
    {
      name: c,
      placeholder: d,
      value: h,
      rows: _,
      onChange: M,
      className: `${Ue.textarea} ${k ? Ue.error : ""}`
    }
  );
}, QM = ({
  name: c,
  placeholder: d,
  value: p = "",
  options: _ = [],
  onChange: x
}) => {
  const [C, h] = Me.useState(p), w = (b) => {
    const M = b.target.value;
    h(M), x?.(c, M);
  }, k = _ && Array.isArray(_) ? _ : [];
  return /* @__PURE__ */ R.jsxs(
    "select",
    {
      name: c,
      value: C,
      onChange: w,
      className: Ue.select,
      children: [
        d && /* @__PURE__ */ R.jsx("option", { value: "", children: d }),
        k.map((b) => /* @__PURE__ */ R.jsx("option", { value: b.value, children: b.label }, b.value))
      ]
    }
  );
}, KM = ({
  name: c,
  label: d,
  checked: p = !1,
  onChange: _
}) => {
  const [x, C] = Me.useState(p), h = (w) => {
    const k = w.target.checked;
    C(k), _?.(c, k);
  };
  return /* @__PURE__ */ R.jsxs("div", { className: Ue.checkboxWrapper, children: [
    /* @__PURE__ */ R.jsx(
      "input",
      {
        type: "checkbox",
        id: c,
        name: c,
        checked: x,
        onChange: h
      }
    ),
    /* @__PURE__ */ R.jsx("label", { htmlFor: c, children: d })
  ] });
}, XM = ({
  name: c,
  options: d = [],
  value: p = "",
  onChange: _
}) => {
  const [x, C] = Me.useState(p), h = (w) => {
    const k = w.target.value;
    C(k), _?.(c, k);
  };
  return !d || !Array.isArray(d) || d.length === 0 ? /* @__PURE__ */ R.jsx("div", { className: Ue.radioGroup, children: "No options available" }) : /* @__PURE__ */ R.jsx("div", { className: Ue.radioGroup, children: d.map((w) => /* @__PURE__ */ R.jsxs("div", { className: Ue.radioWrapper, children: [
    /* @__PURE__ */ R.jsx(
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
    /* @__PURE__ */ R.jsx("label", { htmlFor: `${c}-${w.value}`, children: w.label })
  ] }, w.value)) });
}, JM = ({
  name: c,
  options: d = [],
  values: p = [],
  onChange: _
}) => {
  const [x, C] = Me.useState(p), h = (w, k) => {
    const b = k ? [...x, w] : x.filter((M) => M !== w);
    C(b), _?.(c, b);
  };
  return !d || !Array.isArray(d) || d.length === 0 ? /* @__PURE__ */ R.jsx("div", { className: Ue.checkboxGroup, children: "No options available" }) : /* @__PURE__ */ R.jsx("div", { className: Ue.checkboxGroup, children: d.map((w) => /* @__PURE__ */ R.jsxs("div", { className: Ue.checkboxWrapper, children: [
    /* @__PURE__ */ R.jsx(
      "input",
      {
        type: "checkbox",
        id: `${c}-${w.value}`,
        name: c,
        value: w.value,
        checked: x.includes(w.value),
        onChange: (k) => h(w.value, k.target.checked)
      }
    ),
    /* @__PURE__ */ R.jsx("label", { htmlFor: `${c}-${w.value}`, children: w.label })
  ] }, w.value)) });
}, ZM = ({
  name: c,
  placeholder: d,
  value: p = "",
  min: _,
  max: x,
  onChange: C
}) => {
  const [h, w] = Me.useState(p), k = (b) => {
    const M = b.target.value;
    w(M), C?.(c, M);
  };
  return /* @__PURE__ */ R.jsx(
    "input",
    {
      type: "date",
      name: c,
      placeholder: d,
      value: h,
      min: _,
      max: x,
      onChange: k,
      className: Ue.input
    }
  );
}, eL = ({
  label: c,
  hint: d,
  children: p,
  renderComponent: _
}) => /* @__PURE__ */ R.jsxs("div", { className: Ue.formField, children: [
  c && /* @__PURE__ */ R.jsx("label", { className: Ue.fieldLabel, children: c }),
  _(p),
  d && /* @__PURE__ */ R.jsx("span", { className: Ue.fieldHint, children: d })
] }), tL = ({
  name: c,
  children: d,
  buttons: p,
  onAction: _,
  renderComponent: x
}) => {
  const [C, h] = Me.useState({}), w = Me.useCallback((b, M) => {
    h((U) => ({ ...U, [b]: M }));
  }, []), k = (b) => {
    b.preventDefault(), _ ? _({ type: "submit_form", props: { formName: c, formData: C } }, C) : console.warn("Form onAction is not defined");
  };
  return /* @__PURE__ */ R.jsxs("form", { className: Ue.form, onSubmit: k, name: c, children: [
    d.map((b, M) => /* @__PURE__ */ R.jsx(
      eL,
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
      M
    )),
    p && x(p)
  ] });
}, nL = ({
  name: c = "radio",
  value: d,
  label: p,
  checked: _ = !1,
  onChange: x
}) => {
  const [C, h] = Me.useState(_), w = (k) => {
    const b = k.target.checked;
    h(b), b && x && x(c, d);
  };
  return /* @__PURE__ */ R.jsxs("div", { className: Ue.radioWrapper, children: [
    /* @__PURE__ */ R.jsx(
      "input",
      {
        type: "radio",
        id: `${c}-${d}`,
        name: c,
        value: d,
        checked: C,
        onChange: w
      }
    ),
    /* @__PURE__ */ R.jsx("label", { htmlFor: `${c}-${d}`, children: p })
  ] });
}, rL = ({
  name: c = "checkbox",
  value: d,
  label: p,
  checked: _ = !1,
  onChange: x
}) => {
  const [C, h] = Me.useState(_), w = (k) => {
    const b = k.target.checked;
    h(b), x && x(c, d, b);
  };
  return /* @__PURE__ */ R.jsxs("div", { className: Ue.checkboxWrapper, children: [
    /* @__PURE__ */ R.jsx(
      "input",
      {
        type: "checkbox",
        id: `${c}-${d}`,
        name: c,
        value: d,
        checked: C,
        onChange: w
      }
    ),
    /* @__PURE__ */ R.jsx("label", { htmlFor: `${c}-${d}`, children: p })
  ] });
}, $E = ({
  component: c,
  onAction: d
}) => {
  const p = Me.useCallback((_) => {
    if (!_ || !_.component)
      return console.warn("Invalid component definition:", _), null;
    const { component: x, props: C } = _, h = { ...C, onAction: d };
    switch (x) {
      // Basic Components
      case "Icon":
        return /* @__PURE__ */ R.jsx(HE, { ...h });
      case "Header":
        return /* @__PURE__ */ R.jsx(OM, { ...h });
      case "TextContent":
        return /* @__PURE__ */ R.jsx(AM, { ...h });
      // Button Components
      case "Button":
        return /* @__PURE__ */ R.jsx(UM, { ...h });
      case "ButtonGroup":
        return /* @__PURE__ */ R.jsx(
          zM,
          {
            ...h,
            renderComponent: p
          }
        );
      // Layout Components
      case "Card":
        return /* @__PURE__ */ R.jsx(
          PM,
          {
            ...h,
            renderComponent: p
          }
        );
      // List Component
      case "List":
        return /* @__PURE__ */ R.jsx(IM, { ...h });
      // Stats Component
      case "Stats":
        return /* @__PURE__ */ R.jsx(FM, { ...h });
      // ProfileTile Component
      case "ProfileTile":
        return /* @__PURE__ */ R.jsx(
          VM,
          {
            ...h,
            renderComponent: p
          }
        );
      // MiniCard Components
      case "MiniCard":
        return /* @__PURE__ */ R.jsx(
          HM,
          {
            ...h,
            renderComponent: p
          }
        );
      case "MiniCardBlock":
        return /* @__PURE__ */ R.jsx(
          $M,
          {
            ...h,
            renderComponent: p
          }
        );
      // Steps Components
      case "Steps":
        return /* @__PURE__ */ R.jsx(
          qM,
          {
            ...h,
            renderComponent: p
          }
        );
      case "StepsItem":
        return /* @__PURE__ */ R.jsx(
          BM,
          {
            ...h,
            renderComponent: p
          }
        );
      // Section Components
      case "SectionBlock":
        return /* @__PURE__ */ R.jsx(
          WM,
          {
            ...h,
            renderComponent: p
          }
        );
      // Form Components
      case "Form":
        return /* @__PURE__ */ R.jsx(
          tL,
          {
            ...h,
            renderComponent: p
          }
        );
      case "Input":
        return /* @__PURE__ */ R.jsx(YM, { ...h });
      case "TextArea":
        return /* @__PURE__ */ R.jsx(GM, { ...h });
      case "Select":
        return /* @__PURE__ */ R.jsx(QM, { ...h });
      case "Checkbox":
        return /* @__PURE__ */ R.jsx(KM, { ...h });
      case "RadioGroup":
        return /* @__PURE__ */ R.jsx(XM, { ...h });
      case "CheckBoxGroup":
        return /* @__PURE__ */ R.jsx(JM, { ...h });
      case "DatePicker":
        return /* @__PURE__ */ R.jsx(ZM, { ...h });
      case "RadioItem":
        return /* @__PURE__ */ R.jsx(nL, { ...h });
      case "CheckBoxItem":
        return /* @__PURE__ */ R.jsx(rL, { ...h });
      default:
        return console.warn(`Unknown component: ${x}`), /* @__PURE__ */ R.jsxs("div", { style: {
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
  }, [d]);
  return /* @__PURE__ */ R.jsx(R.Fragment, { children: p(c) });
};
function BE(c) {
  try {
    const d = c.indexOf('<content thesys="true">');
    if (d === -1)
      return cE(c);
    const p = c.substring(d + 23), _ = p.indexOf("</content>");
    let x = _ !== -1 ? p.substring(0, _).trim() : p.trim();
    x = x.replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39;/g, "'").replace(/&apos;/g, "'");
    try {
      const C = JSON.parse(x);
      if (C.component)
        return C;
    } catch {
      return aL(x);
    }
    return cE(c);
  } catch (d) {
    return console.error("parseStreamingGenUI - Error:", d), null;
  }
}
function aL(c) {
  let d = null, p = -1, _ = -1;
  const x = /"component"\s*:\s*"([^"]+)"/g;
  let C;
  for (; (C = x.exec(c)) !== null; ) {
    const h = c.substring(0, C.index), w = (h.match(/\{/g) || []).length - (h.match(/\}/g) || []).length;
    w >= 1 && w > _ && (d = C, p = C.index, _ = w);
  }
  if (d && d[1]) {
    const h = d[1], k = c.substring(p + d[0].length).match(/"props"\s*:\s*\{([\s\S]*?)(\}|$)/);
    let b = {};
    if (k && k[1]) {
      const M = k[1], U = /"([^"]+)"\s*:\s*"([^"]*)"|"([^"]+)"\s*:\s*(\d+|true|false|null)/g;
      let V;
      for (; (V = U.exec(M)) !== null; ) {
        const H = V[1] || V[3], re = V[2] || V[4];
        H && (b[H] = re === "true" ? !0 : re === "false" ? !1 : re === "null" ? null : re);
      }
      M.includes('"children"') && M.includes("[") && (b.children = []);
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
function cE(c) {
  if (c.trim().startsWith("{"))
    try {
      const d = JSON.parse(c);
      if (d.component)
        return d;
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
const oL = ({
  content: c,
  isStreaming: d,
  onAction: p
}) => {
  const [_, x] = Me.useState(null);
  return Me.useEffect(() => {
    if (!c) {
      x(null);
      return;
    }
    const C = BE(c);
    if (C?.component) {
      const h = C.component;
      if (h && typeof h == "object" && "component" in h) {
        const w = h.component, k = h.props || {};
        typeof w == "string" ? x({
          component: w,
          props: k
        }) : w && typeof w == "object" && "component" in w && x(w);
      }
    }
  }, [c]), _ ? /* @__PURE__ */ R.jsxs("div", { className: Ue.streamingContainer, children: [
    d && /* @__PURE__ */ R.jsx("div", { className: Ue.streamingIndicator, children: /* @__PURE__ */ R.jsx("span", { children: "Building interface..." }) }),
    /* @__PURE__ */ R.jsx($E, { component: _, onAction: p })
  ] }) : d ? /* @__PURE__ */ R.jsx("div", { className: Ue.streamingContainer, children: /* @__PURE__ */ R.jsxs("div", { className: Ue.skeletonLoader, children: [
    /* @__PURE__ */ R.jsx("div", { className: Ue.skeletonShimmer }),
    /* @__PURE__ */ R.jsx("span", { children: "Generating interface..." })
  ] }) }) : null;
};
function iL(c) {
  const d = {
    "&quot;": '"',
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&nbsp;": " "
  };
  return c.replace(/&(?:quot|amp|lt|gt|apos|#39|nbsp);/g, (p) => d[p] || p);
}
function lL(c) {
  try {
    const d = c.match(/<content\s+thesys="true">([\s\S]*?)<\/content>/);
    if (d && d[1]) {
      const p = iL(d[1].trim());
      return JSON.parse(p);
    }
    if (c.trim().startsWith("{")) {
      const p = JSON.parse(c);
      if (p.component)
        return p;
    }
    return null;
  } catch (d) {
    return console.error("Failed to parse GenUI response:", d), null;
  }
}
function uL(c) {
  return !!(c.includes('<content thesys="true">') || c.trim().startsWith("{") && c.includes('"component"'));
}
function sL(c) {
  const d = c.indexOf('<content thesys="true">');
  return d > 0 ? c.substring(0, d).trim() : "";
}
const cL = ({
  message: c,
  onAction: d,
  onUpdateMessage: p
}) => {
  const _ = c.role === "user", x = c.role === "assistant", C = Me.useMemo(() => c.content ? uL(c.content) : !1, [c.content]), h = Me.useMemo(() => {
    if (!c.content) return null;
    if (C) {
      if (c.isStreaming) {
        const M = BE(c.content);
        return M?.component ? M : null;
      }
      return lL(c.content);
    }
    return null;
  }, [c.content, c.isStreaming, C]), w = Me.useMemo(() => c.content ? sL(c.content) : "", [c.content]), k = Me.useCallback((M, U) => {
    if (!d) return;
    const V = {
      type: M.type,
      params: {
        ...M.props,
        formData: U
      }
    };
    console.log("event", V), console.log("formData", U), d(V);
  }, [d]), b = () => C ? /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    w && /* @__PURE__ */ R.jsx("div", { className: dl.textContent, children: w }),
    /* @__PURE__ */ R.jsx(
      oL,
      {
        content: c.content,
        isStreaming: c.isStreaming || !1,
        onAction: k
      }
    )
  ] }) : h?.component ? /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    w && /* @__PURE__ */ R.jsx("div", { className: dl.textContent, children: w }),
    /* @__PURE__ */ R.jsx(
      $E,
      {
        component: h.component,
        onAction: k
      }
    )
  ] }) : /* @__PURE__ */ R.jsx("div", { className: dl.textContent, children: c.content || (c.isStreaming ? "" : "No response") });
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      className: `${dl.messageContainer} ${_ ? dl.user : dl.assistant}`,
      children: _ ? /* @__PURE__ */ R.jsx("div", { className: dl.userMessage, children: /* @__PURE__ */ R.jsx("p", { children: c.content }) }) : x ? /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
        /* @__PURE__ */ R.jsx("div", { className: dl.assistantAvatar, children: /* @__PURE__ */ R.jsx("img", { src: p_, alt: "Orbiter" }) }),
        /* @__PURE__ */ R.jsxs("div", { className: dl.assistantMessage, children: [
          c.isStreaming && !c.content && /* @__PURE__ */ R.jsxs("div", { className: dl.streamingIndicator, children: [
            /* @__PURE__ */ R.jsx("span", {}),
            /* @__PURE__ */ R.jsx("span", {}),
            /* @__PURE__ */ R.jsx("span", {})
          ] }),
          b()
        ] })
      ] }) : null
    }
  );
}, fL = "_overlay_271nu_1", dL = "_modal_271nu_21", pL = "_header_271nu_42", vL = "_closeButton_271nu_55", hL = "_selectedInfo_271nu_77", mL = "_inputGroup_271nu_99", yL = "_actions_271nu_130", gL = "_cancelBtn_271nu_136", _L = "_confirmBtn_271nu_137", uu = {
  overlay: fL,
  modal: dL,
  header: pL,
  closeButton: vL,
  selectedInfo: hL,
  inputGroup: mL,
  actions: yL,
  cancelBtn: gL,
  confirmBtn: _L
}, SL = ({
  isOpen: c,
  onClose: d,
  humanFriendlyMessage: p,
  llmFriendlyMessage: _,
  onConfirm: x
}) => {
  const [C, h] = Me.useState(_);
  if (Me.useEffect(() => {
    h(_);
  }, [_]), Me.useEffect(() => {
    const k = (b) => {
      b.key === "Escape" && d();
    };
    if (c)
      return window.addEventListener("keydown", k), () => window.removeEventListener("keydown", k);
  }, [c, d]), !c) return null;
  const w = (k) => {
    k.preventDefault(), C.trim() && x(C.trim());
  };
  return /* @__PURE__ */ R.jsx("div", { className: uu.overlay, onClick: d, children: /* @__PURE__ */ R.jsxs("div", { className: uu.modal, onClick: (k) => k.stopPropagation(), children: [
    /* @__PURE__ */ R.jsxs("div", { className: uu.header, children: [
      /* @__PURE__ */ R.jsx("h2", { children: "Edit Your Response" }),
      /* @__PURE__ */ R.jsx("button", { className: uu.closeButton, onClick: d, children: /* @__PURE__ */ R.jsx(
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
    /* @__PURE__ */ R.jsxs("form", { onSubmit: w, children: [
      /* @__PURE__ */ R.jsxs("div", { className: uu.selectedInfo, children: [
        /* @__PURE__ */ R.jsx("label", { children: "Your Selection" }),
        /* @__PURE__ */ R.jsx("p", { children: p })
      ] }),
      /* @__PURE__ */ R.jsxs("div", { className: uu.inputGroup, children: [
        /* @__PURE__ */ R.jsx("label", { htmlFor: "editMessage", children: "Edit message before sending:" }),
        /* @__PURE__ */ R.jsx(
          "textarea",
          {
            id: "editMessage",
            value: C,
            onChange: (k) => h(k.target.value),
            placeholder: "Edit your message...",
            rows: 4,
            autoFocus: !0
          }
        )
      ] }),
      /* @__PURE__ */ R.jsxs("div", { className: uu.actions, children: [
        /* @__PURE__ */ R.jsx("button", { type: "button", className: uu.cancelBtn, onClick: d, children: "Cancel" }),
        /* @__PURE__ */ R.jsx(
          "button",
          {
            type: "submit",
            className: uu.confirmBtn,
            disabled: !C.trim(),
            children: "Send Message"
          }
        )
      ] })
    ] })
  ] }) });
}, fE = {
  SUGGEST_PEOPLE: "create_suggestion_request",
  HELP_WITH_TASK: "add_assistant_message"
}, qE = (c, d) => ({
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
                  selected: d === fE.SUGGEST_PEOPLE,
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
                  selected: d === fE.HELP_WITH_TASK,
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
}), dE = (c) => ({
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
}), pE = (c) => `<content thesys="true">${JSON.stringify({ component: c, error: null })}</content>`, vE = () => `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, hE = (c, d, p, _) => {
  const { leverageLoopChats: x, selectedPerson: C } = cu.getState(), h = x[c];
  if (!h || !C) return;
  const w = h.messages.find(
    (k) => k.role === "assistant" && k.content.includes("ButtonGroup")
  );
  if (w) {
    const k = `<content thesys="true">${JSON.stringify(
      qE(C, d)
    )}</content>`;
    _(p, w.id, k, !1, c);
  }
}, CL = (c) => {
  const { sendMessage: d, setPendingAction: p, setIsModalOpen: _, context: x, addMessage: C, updateMessage: h } = c;
  return (w) => {
    switch (console.log("Action received:", w), w.type) {
      case "continue_conversation":
        if (w.params) {
          const { humanFriendlyMessage: k, llmFriendlyMessage: b, prompt: M } = w.params;
          M ? d(M) : k && b && (p({
            humanFriendlyMessage: k,
            llmFriendlyMessage: b
          }), _(!0));
        }
        break;
      case "open_url":
        w.params?.url && window.open(w.params.url, "_blank", "noopener,noreferrer");
        break;
      case "submit_form":
        if (w.params?.formData) {
          const k = w.params.formData, b = w.params.formName || "form", M = Object.entries(k).filter(([V, H]) => H !== void 0 && H !== "").map(([V, H]) => `${V.replace(/_/g, " ")}: ${H}`).join(`
`), U = `Form submitted: ${b}

${M}`;
          console.log("Sending form data to LLM:", U), d(U);
        }
        break;
      case "add_assistant_message":
        if (w.params?.content || w.params?.componentData) {
          const k = vE(), b = w.params.chatKey;
          b && (cu.getState().setSelectedAction(b, "add_assistant_message"), hE(b, "add_assistant_message", x, h));
          let M;
          w.params.componentData ? M = `<content thesys="true">${JSON.stringify(w.params.componentData)}</content>` : M = w.params.content, C(x, {
            id: k,
            role: "assistant",
            content: M,
            timestamp: /* @__PURE__ */ new Date(),
            isStreaming: !1
          }, b);
        }
        break;
      case "create_suggestion_request":
        if (w.params) {
          const { personName: k, personTitle: b, companyName: M, masterPersonId: U, chatKey: V } = w.params;
          V && (cu.getState().setSelectedAction(V, "create_suggestion_request"), hE(V, "create_suggestion_request", x, h));
          const { user_id: H } = Lr.getState(), re = {
            request_panel_title: `Suggestion Request for ${k}`,
            request_header_title: `People to introduce to ${k}`,
            request_context: `Find people from my network to introduce to ${k}, who is ${b} at ${M}`,
            status: "processing",
            user_id: H,
            copilot_mode: "loop",
            master_person_id: U
          }, ue = vE();
          C(x, {
            id: ue,
            role: "assistant",
            content: pE({
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
          }, V), Rv.getState().createSuggestionRequest(re).then(() => {
            const { createSuggestionRequestError: xe } = Rv.getState();
            if (xe) {
              const be = pE({
                component: "Card",
                props: {
                  children: [{
                    component: "TextContent",
                    props: { textMarkdown: `❌ Failed: ${xe}` }
                  }]
                }
              });
              h(x, ue, be, !1, V);
            }
            if (!xe) {
              const { setSelectedPerson: be, setSelectedSuggestionRequest: ge } = cu.getState();
              be(null), ge(null);
            }
          });
        }
        break;
      default:
        console.log("Unhandled action type:", w.type);
    }
  };
}, EL = {
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
}, xL = () => Object.entries(EL).filter(([c, d]) => d.allowed).map(([c]) => c), wL = () => `You can use these GenUI components: ${xL().join(", ")}. Do not use any other components. Keep the interface simple and avoid unnecessary complexity.`, bL = "_chatContainer_f97wk_1", RL = "_messagesContainer_f97wk_31", kL = "_emptyState_f97wk_50", TL = "_copilotEmptyState_f97wk_61", NL = "_logo_f97wk_70", DL = "_welcomeMessage_f97wk_77", ML = "_welcomeGreeting_f97wk_83", LL = "_welcomeSubtext_f97wk_93", OL = "_leverageLoopSummary_f97wk_114", jL = "_summaryCard_f97wk_119", AL = "_summaryCardHeader_f97wk_130", UL = "_summaryCardTitle_f97wk_137", zL = "_summaryCardInput_f97wk_157", PL = "_summaryTextarea_f97wk_162", IL = "_summaryCardButton_f97wk_184", FL = "_playIcon_f97wk_212", ya = {
  chatContainer: bL,
  messagesContainer: RL,
  emptyState: kL,
  copilotEmptyState: TL,
  logo: NL,
  welcomeMessage: DL,
  welcomeGreeting: ML,
  welcomeSubtext: LL,
  leverageLoopSummary: OL,
  summaryCard: jL,
  summaryCardHeader: AL,
  summaryCardTitle: UL,
  summaryCardInput: zL,
  summaryTextarea: PL,
  summaryCardButton: IL,
  playIcon: FL
}, VL = ({
  onSendMessage: c,
  isLoading: d
}) => {
  const [p, _] = Me.useState(""), { selectedPerson: x, selectedSuggestionRequest: C, leverageLoopSummaries: h, upsertLeverageLoopSummary: w } = cu(
    pl((U) => ({
      selectedPerson: U.selectedPerson,
      selectedSuggestionRequest: U.selectedSuggestionRequest,
      leverageLoopSummaries: U.leverageLoopSummaries,
      upsertLeverageLoopSummary: U.upsertLeverageLoopSummary
    }))
  );
  Me.useEffect(() => {
    let U = null;
    if (x ? U = x.full_name : C && (U = C.request_header_title), U) {
      const V = h.find((H) => H.id === U);
      _(V?.content || "");
    } else
      _("");
  }, [x, C, h]);
  const k = () => x ? `Leverage loop summary for ${x.full_name}` : C ? C.request_header_title : "Leverage Loops", b = () => {
    p.trim() && (c(p.trim()), _(""));
  }, M = (U) => {
    _(U.target.value), x && w({ id: x.full_name, content: U.target.value, timestamp: /* @__PURE__ */ new Date() }), C && w({ id: C.request_header_title, content: U.target.value, timestamp: /* @__PURE__ */ new Date() });
  };
  return /* @__PURE__ */ R.jsx("div", { className: ya.leverageLoopSummary, children: /* @__PURE__ */ R.jsxs("div", { className: ya.summaryCard, children: [
    /* @__PURE__ */ R.jsxs("div", { className: ya.summaryCardHeader, children: [
      /* @__PURE__ */ R.jsx("p", { className: ya.summaryCardTitle, children: k() }),
      /* @__PURE__ */ R.jsx(
        "button",
        {
          className: ya.summaryCardButton,
          onClick: b,
          disabled: !p.trim() || d,
          children: /* @__PURE__ */ R.jsx("span", { className: ya.playIcon, children: "▶" })
        }
      )
    ] }),
    /* @__PURE__ */ R.jsx("div", { className: ya.summaryCardInput, children: /* @__PURE__ */ R.jsx(
      "textarea",
      {
        className: ya.summaryTextarea,
        placeholder: "Summary of what I can help you with...",
        value: p,
        onChange: (U) => M(U),
        rows: 2
      }
    ) })
  ] }) });
}, HL = ({
  greeting: c,
  subtext: d
}) => {
  const { user_name: p } = Lr(
    pl((w) => ({
      user_name: w.user_name
    }))
  ), _ = () => {
    const w = (/* @__PURE__ */ new Date()).getHours();
    return w < 12 ? "Ready to make today legendary?" : w < 18 ? "Afternoon power move—let's go!" : "Still crushing it? I like your style.";
  }, C = c || `Let's get after it, ${p || "there"}`, h = d || _();
  return /* @__PURE__ */ R.jsxs("div", { className: ya.copilotEmptyState, children: [
    /* @__PURE__ */ R.jsx("img", { src: p_, alt: "Orbiter Logo", className: ya.logo }),
    /* @__PURE__ */ R.jsxs("div", { className: ya.welcomeMessage, children: [
      /* @__PURE__ */ R.jsx("h2", { className: ya.welcomeGreeting, children: C }),
      /* @__PURE__ */ R.jsx("p", { className: ya.welcomeSubtext, children: h })
    ] })
  ] });
}, us = () => `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, v_ = ({
  context: c,
  systemPrompt: d,
  showComposer: p = !0
}) => {
  const {
    chatState: _,
    addMessage: x,
    updateMessage: C,
    setIsLoading: h,
    upsertLeverageLoopSummary: w,
    selectedPerson: k,
    selectedSuggestionRequest: b
  } = cu(
    pl((le) => c === "leverage-loops" ? {
      chatState: le.getCurrentLeverageLoopChat(),
      addMessage: le.addMessage,
      updateMessage: le.updateMessage,
      setIsLoading: le.setIsLoading,
      upsertLeverageLoopSummary: le.upsertLeverageLoopSummary,
      selectedPerson: le.selectedPerson,
      selectedSuggestionRequest: le.selectedSuggestionRequest
    } : {
      chatState: le[c === "copilot" ? "copilotChat" : "outcomesChat"],
      addMessage: le.addMessage,
      updateMessage: le.updateMessage,
      setIsLoading: le.setIsLoading,
      upsertLeverageLoopSummary: le.upsertLeverageLoopSummary,
      selectedPerson: le.selectedPerson,
      selectedSuggestionRequest: le.selectedSuggestionRequest
    })
  );
  function M(le) {
    const ze = le.match(/\[SUMMARY\](.*?)\[\/SUMMARY\]/s);
    let A = null;
    if (ze && ze[1]) {
      A = ze[1].trim();
      let X = le.replace(/\[SUMMARY\].*$/s, "</content>").trim();
      return A && c === "leverage-loops" && U(A), ze || (X = le), {
        cleanContent: X
      };
    }
    return {
      cleanContent: le
    };
  }
  const U = Me.useCallback((le) => {
    if (c !== "leverage-loops") return;
    let ze = null;
    k ? ze = k.full_name : b && (ze = b.request_header_title), ze && le && w({
      id: ze,
      content: le,
      timestamp: /* @__PURE__ */ new Date()
    });
  }, [c, k, b, w]), { messages: V, threadId: H, isLoading: re } = _, ue = c === "leverage-loops" && V.length > 1, [xe, be] = Oa.useState(!1), [ge, Ee] = Oa.useState(null), se = Me.useRef(null);
  Me.useEffect(() => {
    se.current?.scrollIntoView({ behavior: "smooth" });
  }, [V]);
  const ie = Me.useCallback(
    async (le) => {
      if (!le.trim() || re) return;
      const ze = {
        id: us(),
        role: "user",
        content: le.trim(),
        timestamp: /* @__PURE__ */ new Date()
      };
      x(c, ze), h(c, !0);
      const A = us();
      x(c, {
        id: A,
        role: "assistant",
        content: "",
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !0
      });
      try {
        const _e = wL(), je = `${d || "You are a helpful AI assistant."}

${_e}

User: ${le.trim()}`, { copilot_llm_endpoint: ke } = Lr.getState(), Le = await fetch(`${ke || "http://localhost:3001"}/api/chat`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            prompt: {
              role: "user",
              content: je,
              id: ze.id
            },
            threadId: H,
            responseId: A,
            context: c
            // Pass context to backend if needed
          })
        });
        if (!Le.ok)
          throw new Error(`API error: ${Le.status}`);
        const Se = Le.body?.getReader(), F = new TextDecoder();
        let J = "";
        if (Se)
          for (; ; ) {
            const { done: He, value: ht } = await Se.read();
            if (He) break;
            const at = F.decode(ht, { stream: !0 });
            J += at;
            const { cleanContent: Pe } = M(J);
            C(c, A, Pe || J, !0);
          }
        const { cleanContent: et } = M(J);
        C(c, A, et, !1);
      } catch (_e) {
        console.error("Failed to send message:", _e), C(
          c,
          A,
          "Sorry, there was an error processing your request.",
          !1
        );
      } finally {
        h(c, !1);
      }
    },
    [re, H, c, d, x, C, h, M, U]
  ), ne = Me.useCallback(
    (le) => {
      CL({
        sendMessage: ie,
        setPendingAction: Ee,
        setIsModalOpen: be,
        context: c,
        addMessage: x,
        updateMessage: C
      })(le);
    },
    [ie, Ee, be, c, x, C]
  ), Ce = Me.useCallback(
    (le, ze) => {
      C(c, le, ze);
    },
    [c, C]
  ), Te = Me.useCallback(
    (le) => {
      be(!1), Ee(null), ie(le);
    },
    [ie]
  ), qe = Me.useCallback(() => {
    be(!1), Ee(null);
  }, []);
  return /* @__PURE__ */ R.jsxs("div", { className: ya.chatContainer, children: [
    ue && /* @__PURE__ */ R.jsx(
      VL,
      {
        onSendMessage: ie,
        isLoading: re
      }
    ),
    /* @__PURE__ */ R.jsxs("div", { className: ya.messagesContainer, children: [
      V.length === 0 ? c === "copilot" ? /* @__PURE__ */ R.jsx(HL, { subtext: "What can I help you with today?" }) : /* @__PURE__ */ R.jsx("div", { className: ya.emptyState, children: /* @__PURE__ */ R.jsx("p", { children: "Start a conversation" }) }) : V.map((le) => /* @__PURE__ */ R.jsx(
        cL,
        {
          message: le,
          onAction: ne,
          onUpdateMessage: (ze) => Ce(le.id, ze)
        },
        le.id
      )),
      /* @__PURE__ */ R.jsx("div", { ref: se })
    ] }),
    p && /* @__PURE__ */ R.jsx(I3, { onSend: ie, disabled: re }),
    ge && /* @__PURE__ */ R.jsx(
      SL,
      {
        isOpen: xe,
        onClose: qe,
        humanFriendlyMessage: ge.humanFriendlyMessage,
        llmFriendlyMessage: ge.llmFriendlyMessage,
        onConfirm: Te
      }
    )
  ] });
}, $L = "_sidebarContent_1wnpm_2", BL = "_searchWrapper_1wnpm_17", qL = "_searchContainer_1wnpm_23", WL = "_searchIcon_1wnpm_62", YL = "_searchInput_1wnpm_67", GL = "_searchDropdown_1wnpm_79", QL = "_dropdownItem_1wnpm_115", KL = "_selected_1wnpm_130", XL = "_dropdownEmpty_1wnpm_143", JL = "_dropdownError_1wnpm_144", ZL = "_dropdownLoading_1wnpm_155", eO = "_personAvatar_1wnpm_165", tO = "_avatarPlaceholder_1wnpm_179", nO = "_personInfo_1wnpm_191", rO = "_personName_1wnpm_199", aO = "_personTitle_1wnpm_208", oO = "_suggestionsList_1wnpm_216", iO = "_suggestionItemWrapper_1wnpm_235", lO = "_suggestionItem_1wnpm_235", uO = "_statusIcon_1wnpm_263", sO = "_moreButton_1wnpm_266", cO = "_moreButtonWrapper_1wnpm_290", fO = "_actionMenu_1wnpm_311", dO = "_actionMenuItem_1wnpm_326", pO = "_deleteAction_1wnpm_348", vO = "_loadingState_1wnpm_356", hO = "_loadingSpinner_1wnpm_366", mO = "_emptyState_1wnpm_380", yO = "_errorState_1wnpm_387", Lt = {
  sidebarContent: $L,
  searchWrapper: BL,
  searchContainer: qL,
  searchIcon: WL,
  searchInput: YL,
  searchDropdown: GL,
  dropdownItem: QL,
  selected: KL,
  dropdownEmpty: XL,
  dropdownError: JL,
  dropdownLoading: ZL,
  personAvatar: eO,
  avatarPlaceholder: tO,
  personInfo: nO,
  personName: rO,
  personTitle: aO,
  suggestionsList: oO,
  suggestionItemWrapper: iO,
  suggestionItem: lO,
  statusIcon: uO,
  moreButton: sO,
  moreButtonWrapper: cO,
  actionMenu: fO,
  actionMenuItem: dO,
  deleteAction: pO,
  loadingState: vO,
  loadingSpinner: hO,
  emptyState: mO,
  errorState: yO
}, gO = "_spinnerSimple_46sfm_1", _O = "_arc_46sfm_5", SO = "_dot_46sfm_12", Z1 = {
  spinnerSimple: gO,
  arc: _O,
  dot: SO
}, CO = ({ size: c = 16, className: d = "" }) => {
  const p = Oa.useId();
  return /* @__PURE__ */ R.jsxs(
    "svg",
    {
      className: `${Z1.spinnerSimple} ${d}`,
      viewBox: "0 0 50 50",
      width: c,
      height: c,
      children: [
        /* @__PURE__ */ R.jsx("defs", { children: /* @__PURE__ */ R.jsxs("linearGradient", { id: p, x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
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
            style: { stroke: `url(#${p})` }
          }
        ),
        /* @__PURE__ */ R.jsx("circle", { className: Z1.dot, cx: "25", cy: "5", r: "2.5" })
      ]
    }
  );
}, EO = ({ status: c }) => {
  switch (c) {
    case "draft":
      return /* @__PURE__ */ R.jsx("span", { className: Lt.statusIcon, "data-status": "draft" });
    case "suggestion":
      return /* @__PURE__ */ R.jsx("span", { className: Lt.statusIcon, "data-status": "suggestion" });
    case "processing":
      return /* @__PURE__ */ R.jsx(CO, { size: 16 });
    case "archived":
      return /* @__PURE__ */ R.jsx("span", { className: Lt.statusIcon, "data-status": "archived" });
    default:
      return /* @__PURE__ */ R.jsx("span", { className: Lt.statusIcon, "data-status": "unknown" });
  }
}, xO = ({
  selectedPerson: c,
  selectedSuggestionRequest: d,
  onPersonSelect: p,
  onSuggestionRequestSelect: _
}) => {
  const [x, C] = Me.useState(""), [h, w] = Me.useState(!1), [k, b] = Me.useState(null), M = Me.useRef(null), U = Me.useRef(null), {
    suggestionRequests: V,
    leverageLoops: H,
    isLoadingPersons: re,
    isLoadingSuggestionRequests: ue,
    personsError: xe,
    suggestionRequestsError: be,
    deleteSuggestionRequest: ge,
    isDeletingSuggestionRequest: Ee
  } = Rv(
    pl((A) => ({
      suggestionRequests: A.suggestionRequests,
      leverageLoops: A.leverageLoops,
      isLoadingPersons: A.isLoadingPersons,
      isLoadingSuggestionRequests: A.isLoadingSuggestionRequests,
      personsError: A.personsError,
      suggestionRequestsError: A.suggestionRequestsError,
      deleteSuggestionRequest: A.deleteSuggestionRequest,
      isDeletingSuggestionRequest: A.isDeletingSuggestionRequest
    }))
  );
  Me.useEffect(() => {
    const A = (X) => {
      M.current && !M.current.contains(X.target) && w(!1), U.current && !U.current.contains(X.target) && b(null);
    };
    return document.addEventListener("mousedown", A), () => document.removeEventListener("mousedown", A);
  }, []);
  const se = async (A, X) => {
    X.stopPropagation(), !Ee && (await ge(A), b(null));
  }, ie = (A, X) => {
    X.stopPropagation(), console.log("Edit suggestion request:", A), b(null);
  }, ne = (A, X) => X ? A.filter(
    (_e) => _e.full_name?.toLowerCase().includes(X.toLowerCase()) || _e.master_person.name?.toLowerCase().includes(X.toLowerCase()) || _e.master_person.current_title?.toLowerCase().includes(X.toLowerCase()) || _e.master_person.master_company?.company_name?.toLowerCase().includes(X.toLowerCase())
  ) : [], Ce = (A) => {
    const X = A.target.value;
    C(X), w(X.length > 0);
  }, Te = (A) => {
    p(A), C(""), w(!1);
  }, qe = (A) => {
    const X = c?.id === A.id;
    return /* @__PURE__ */ R.jsxs(
      "button",
      {
        className: `${Lt.dropdownItem} ${X ? Lt.selected : ""}`,
        onClick: () => Te(A),
        children: [
          /* @__PURE__ */ R.jsx("div", { className: Lt.personAvatar, children: A.master_person.avatar ? /* @__PURE__ */ R.jsx("img", { src: A.master_person.avatar, alt: A.full_name }) : /* @__PURE__ */ R.jsx("span", { className: Lt.avatarPlaceholder, children: A.full_name?.charAt(0) || "?" }) }),
          /* @__PURE__ */ R.jsxs("div", { className: Lt.personInfo, children: [
            /* @__PURE__ */ R.jsx("span", { className: Lt.personName, children: A.full_name || A.master_person.name }),
            A.master_person.current_title && /* @__PURE__ */ R.jsxs("span", { className: Lt.personTitle, children: [
              A.master_person.current_title,
              A.master_person.master_company?.company_name && /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
                " at ",
                A.master_person.master_company.company_name
              ] })
            ] })
          ] })
        ]
      },
      A.id
    );
  }, le = (A) => {
    const X = d?.id === A.id;
    return /* @__PURE__ */ R.jsx("div", { className: Lt.suggestionItemWrapper, children: /* @__PURE__ */ R.jsxs(
      "button",
      {
        className: `${Lt.suggestionItem} ${X ? Lt.selected : ""}`,
        onClick: () => _(A),
        children: [
          /* @__PURE__ */ R.jsx("div", { className: Lt.personAvatar, children: A.master_person?.avatar ? /* @__PURE__ */ R.jsx("img", { src: A.master_person.avatar, alt: A.master_person.name || "Person" }) : /* @__PURE__ */ R.jsx("span", { className: Lt.avatarPlaceholder, children: A.master_person?.name?.charAt(0) || "?" }) }),
          /* @__PURE__ */ R.jsxs("div", { className: Lt.personInfo, children: [
            /* @__PURE__ */ R.jsx("span", { className: Lt.personName, children: A.master_person?.name || A.request_header_title }),
            (A.master_person?.current_title || A.master_person?.company_name) && /* @__PURE__ */ R.jsxs("span", { className: Lt.personTitle, children: [
              A.master_person?.current_title,
              A.master_person?.current_title && A.master_person?.company_name && " at ",
              A.master_person?.company_name
            ] })
          ] }),
          /* @__PURE__ */ R.jsx(EO, { status: A.status }),
          A.id !== void 0 && /* @__PURE__ */ R.jsxs("div", { className: Lt.moreButtonWrapper, ref: k === A.id ? U : null, children: [
            /* @__PURE__ */ R.jsx(
              "span",
              {
                className: Lt.moreButton,
                role: "button",
                tabIndex: 0,
                onClick: (_e) => {
                  _e.stopPropagation(), b(k === A.id ? null : A.id);
                },
                onKeyDown: (_e) => {
                  _e.key === "Enter" && (_e.stopPropagation(), b(k === A.id ? null : A.id));
                },
                children: "⋮"
              }
            ),
            k === A.id && /* @__PURE__ */ R.jsxs("div", { className: Lt.actionMenu, children: [
              /* @__PURE__ */ R.jsxs(
                "button",
                {
                  className: Lt.actionMenuItem,
                  onClick: (_e) => ie(A.id, _e),
                  children: [
                    /* @__PURE__ */ R.jsx(a_, { size: 14 }),
                    /* @__PURE__ */ R.jsx("span", { children: "Edit" })
                  ]
                }
              ),
              /* @__PURE__ */ R.jsxs(
                "button",
                {
                  className: `${Lt.actionMenuItem} ${Lt.deleteAction}`,
                  onClick: (_e) => se(A.id, _e),
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
    ) }, A.id);
  }, ze = ne(H, x);
  return /* @__PURE__ */ R.jsxs("div", { className: Lt.sidebarContent, children: [
    /* @__PURE__ */ R.jsxs("div", { className: Lt.searchWrapper, ref: M, children: [
      /* @__PURE__ */ R.jsxs("div", { className: Lt.searchContainer, children: [
        /* @__PURE__ */ R.jsx("span", { className: Lt.searchIcon, children: "🔍" }),
        /* @__PURE__ */ R.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search persons...",
            className: Lt.searchInput,
            value: x,
            onChange: Ce,
            onFocus: () => x.length > 0 && w(!0)
          }
        )
      ] }),
      h && /* @__PURE__ */ R.jsx("div", { className: Lt.searchDropdown, children: re ? /* @__PURE__ */ R.jsxs("div", { className: Lt.dropdownLoading, children: [
        /* @__PURE__ */ R.jsx("span", { className: Lt.loadingSpinner }),
        "Loading persons..."
      ] }) : xe ? /* @__PURE__ */ R.jsx("div", { className: Lt.dropdownError, children: xe }) : ze.length === 0 ? /* @__PURE__ */ R.jsxs("div", { className: Lt.dropdownEmpty, children: [
        'No persons found for "',
        x,
        '"'
      ] }) : ze.map((A) => qe(A)) })
    ] }),
    /* @__PURE__ */ R.jsx("div", { className: Lt.suggestionsList, children: ue ? /* @__PURE__ */ R.jsxs("div", { className: Lt.loadingState, children: [
      /* @__PURE__ */ R.jsx("span", { className: Lt.loadingSpinner }),
      "Loading suggestion requests..."
    ] }) : be ? /* @__PURE__ */ R.jsx("div", { className: Lt.errorState, children: be }) : V.length === 0 ? /* @__PURE__ */ R.jsx("div", { className: Lt.emptyState, children: "No leverage loop requests yet" }) : V.map((A) => le(A)) })
  ] });
}, wO = "_sidebarContent_1l7we_2", bO = "_searchWrapper_1l7we_17", RO = "_searchContainer_1l7we_23", kO = "_searchIcon_1l7we_62", TO = "_searchInput_1l7we_67", NO = "_outcomesList_1l7we_79", DO = "_outcomeItemWrapper_1l7we_98", MO = "_outcomeItem_1l7we_98", LO = "_selected_1l7we_122", OO = "_moreButton_1l7we_127", jO = "_expandCaret_1l7we_131", AO = "_expanded_1l7we_150", UO = "_expandCaretPlaceholder_1l7we_154", zO = "_statusIcon_1l7we_160", PO = "_completedStatusIcon_1l7we_166", IO = "_outcomeInfo_1l7we_172", FO = "_outcomeName_1l7we_180", VO = "_moreButtonWrapper_1l7we_189", HO = "_actionMenu_1l7we_210", $O = "_actionMenuItem_1l7we_235", BO = "_deleteAction_1l7we_257", qO = "_stepPlansContainer_1l7we_265", WO = "_stepPlanItem_1l7we_273", YO = "_stepPlanInfo_1l7we_285", GO = "_stepPlanDescription_1l7we_300", QO = "_loadingState_1l7we_310", KO = "_loadingSpinner_1l7we_320", XO = "_emptyState_1l7we_334", JO = "_errorState_1l7we_341", At = {
  sidebarContent: wO,
  searchWrapper: bO,
  searchContainer: RO,
  searchIcon: kO,
  searchInput: TO,
  outcomesList: NO,
  outcomeItemWrapper: DO,
  outcomeItem: MO,
  selected: LO,
  moreButton: OO,
  expandCaret: jO,
  expanded: AO,
  expandCaretPlaceholder: UO,
  statusIcon: zO,
  completedStatusIcon: PO,
  outcomeInfo: IO,
  outcomeName: FO,
  moreButtonWrapper: VO,
  actionMenu: HO,
  actionMenuItem: $O,
  deleteAction: BO,
  stepPlansContainer: qO,
  stepPlanItem: WO,
  stepPlanInfo: YO,
  stepPlanDescription: GO,
  loadingState: QO,
  loadingSpinner: KO,
  emptyState: XO,
  errorState: JO
}, mE = "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.375%202.45583V2.46167M2.45584%204.375V4.38083M1.75%207V7.00583M2.45584%209.625V9.63083M4.375%2011.5442V11.55M7%2012.25V12.2558M9.625%2011.5442V11.55M11.5442%209.625V9.63083M12.25%207V7.00583M11.5442%204.375V4.38083M9.625%202.45583V2.46167M7%201.75V1.75583'%20stroke='%23F5F5F5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", ZO = "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%207V3.11798C7%203.11798%207.88687%203.145%208.50092%203.42821C9.40942%203.84724%2010.1158%204.67779%2010.4151%205.62884L7%207Z'%20fill='%2322C55E'%20stroke='%2322C55E'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", e7 = "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.25%207L6.41667%208.16667L8.75%205.83333M1.75%207C1.75%207.68944%201.8858%208.37213%202.14963%209.00909C2.41347%209.64605%202.80018%2010.2248%203.28769%2010.7123C3.7752%2011.1998%204.35395%2011.5865%204.99091%2011.8504C5.62787%2012.1142%206.31056%2012.25%207%2012.25C7.68944%2012.25%208.37213%2012.1142%209.00909%2011.8504C9.64605%2011.5865%2010.2248%2011.1998%2010.7123%2010.7123C11.1998%2010.2248%2011.5865%209.64605%2011.8504%209.00909C12.1142%208.37213%2012.25%207.68944%2012.25%207C12.25%206.31056%2012.1142%205.62787%2011.8504%204.99091C11.5865%204.35395%2011.1998%203.7752%2010.7123%203.28769C10.2248%202.80018%209.64605%202.41347%209.00909%202.14963C8.37213%201.8858%207.68944%201.75%207%201.75C6.31056%201.75%205.62787%201.8858%204.99091%202.14963C4.35395%202.41347%203.7752%202.80018%203.28769%203.28769C2.80018%203.7752%202.41347%204.35395%202.14963%204.99091C1.8858%205.62787%201.75%206.31056%201.75%207Z'%20stroke='%2360A5FA'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", t7 = "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.95834%209.55205C4.95834%209.85249%205.2973%2010.024%205.53481%209.84372L8.89756%207.29164C9.08972%207.1458%209.08972%206.85414%208.89756%206.7083L5.53481%204.15622C5.2973%203.97596%204.95834%204.14745%204.95834%204.44789V9.55205Z'%20fill='%23A3A3A3'/%3e%3c/svg%3e", n7 = ({ status: c }) => {
  switch (c) {
    case "planned":
      return /* @__PURE__ */ R.jsx("img", { src: mE, alt: "Planned", className: At.statusIcon });
    case "in progress":
      return /* @__PURE__ */ R.jsx("img", { src: ZO, alt: "In Progress", className: `${At.statusIcon} ${At.completedStatusIcon}` });
    case "complete":
      return /* @__PURE__ */ R.jsx("img", { src: e7, alt: "Complete", className: At.statusIcon });
    default:
      return /* @__PURE__ */ R.jsx("img", { src: mE, alt: "Unknown", className: At.statusIcon });
  }
}, r7 = ({
  selectedSuggestionRequest: c,
  onSuggestionRequestSelect: d
}) => {
  const [p, _] = Me.useState(""), [x, C] = Me.useState(/* @__PURE__ */ new Set()), [h, w] = Me.useState(null), k = Me.useRef(null), {
    outcomesSuggestionRequests: b,
    isLoadingSuggestionRequests: M,
    suggestionRequestsError: U,
    deleteSuggestionRequest: V,
    isDeletingSuggestionRequest: H
  } = Rv(
    pl((ne) => ({
      outcomesSuggestionRequests: ne.outcomesSuggestionRequests,
      isLoadingSuggestionRequests: ne.isLoadingSuggestionRequests,
      suggestionRequestsError: ne.suggestionRequestsError,
      deleteSuggestionRequest: ne.deleteSuggestionRequest,
      isDeletingSuggestionRequest: ne.isDeletingSuggestionRequest
    }))
  );
  Me.useEffect(() => {
    const ne = (Ce) => {
      k.current && !k.current.contains(Ce.target) && w(null);
    };
    return document.addEventListener("mousedown", ne), () => document.removeEventListener("mousedown", ne);
  }, []);
  const re = (ne, Ce) => Ce ? ne.filter(
    (Te) => Te.request_panel_title?.toLowerCase().includes(Ce.toLowerCase()) || Te.request_header_title?.toLowerCase().includes(Ce.toLowerCase()) || Te.request_context?.toLowerCase().includes(Ce.toLowerCase())
  ) : ne, ue = (ne) => {
    _(ne.target.value);
  }, xe = async (ne, Ce) => {
    Ce.stopPropagation(), !H && (await V(ne), w(null));
  }, be = (ne, Ce) => {
    Ce.stopPropagation(), console.log("Edit outcome:", ne), w(null);
  }, ge = (ne, Ce) => {
    Ce.stopPropagation(), C((Te) => {
      const qe = new Set(Te);
      return qe.has(ne) ? qe.delete(ne) : qe.add(ne), qe;
    });
  }, Ee = (ne) => /* @__PURE__ */ R.jsxs("div", { className: At.stepPlanItem, children: [
    /* @__PURE__ */ R.jsx(n7, { status: ne.status }),
    /* @__PURE__ */ R.jsx("div", { className: At.stepPlanInfo, children: /* @__PURE__ */ R.jsx("span", { className: At.stepPlanDescription, children: ne.step_description }) }),
    /* @__PURE__ */ R.jsx(
      "span",
      {
        className: At.moreButton,
        role: "button",
        tabIndex: 0,
        onClick: (Ce) => {
          Ce.stopPropagation(), w(h === ne.id ? null : ne.id);
        },
        onKeyDown: (Ce) => {
          Ce.key === "Enter" && (Ce.stopPropagation(), w(h === ne.id ? null : ne.id));
        },
        children: "⋮"
      }
    ),
    h === ne.id && /* @__PURE__ */ R.jsxs("div", { className: At.actionMenu, children: [
      /* @__PURE__ */ R.jsxs(
        "button",
        {
          className: At.actionMenuItem,
          onClick: (Ce) => be(ne.id, Ce),
          children: [
            /* @__PURE__ */ R.jsx(a_, { size: 14 }),
            /* @__PURE__ */ R.jsx("span", { children: "Edit" })
          ]
        }
      ),
      /* @__PURE__ */ R.jsxs(
        "button",
        {
          className: `${At.actionMenuItem} ${At.deleteAction}`,
          onClick: (Ce) => xe(ne.id, Ce),
          disabled: H,
          children: [
            /* @__PURE__ */ R.jsx(Ty, { size: 14 }),
            /* @__PURE__ */ R.jsx("span", { children: H ? "Deleting..." : "Delete" })
          ]
        }
      )
    ] })
  ] }, ne.id), se = (ne) => {
    const Ce = c?.id === ne.id, Te = ne.outcome_plan_steps && ne.outcome_plan_steps.length > 0, qe = ne.id !== void 0 && x.has(ne.id);
    return /* @__PURE__ */ R.jsxs("div", { className: At.outcomeItemWrapper, children: [
      /* @__PURE__ */ R.jsxs(
        "div",
        {
          className: `${At.outcomeItem} ${Ce ? At.selected : ""}`,
          onClick: () => d(ne),
          role: "button",
          tabIndex: 0,
          onKeyDown: (le) => {
            (le.key === "Enter" || le.key === " ") && d(ne);
          },
          children: [
            /* @__PURE__ */ R.jsx("div", { className: At.outcomeInfo, children: /* @__PURE__ */ R.jsx("span", { className: At.outcomeName, children: ne.request_panel_title || ne.request_header_title }) }),
            Te ? /* @__PURE__ */ R.jsx(
              "span",
              {
                className: `${At.expandCaret} ${qe ? At.expanded : ""}`,
                onClick: (le) => ne.id !== void 0 && ge(ne.id, le),
                role: "button",
                tabIndex: 0,
                onKeyDown: (le) => {
                  le.key === "Enter" && ne.id !== void 0 && (le.stopPropagation(), ge(ne.id, le));
                },
                children: /* @__PURE__ */ R.jsx("img", { src: t7, alt: "Expand" })
              }
            ) : /* @__PURE__ */ R.jsx("span", { className: At.expandCaretPlaceholder }),
            ne.id !== void 0 && /* @__PURE__ */ R.jsxs("div", { className: At.moreButtonWrapper, ref: h === ne.id ? k : null, children: [
              /* @__PURE__ */ R.jsx(
                "span",
                {
                  className: At.moreButton,
                  role: "button",
                  tabIndex: 0,
                  onClick: (le) => {
                    le.stopPropagation(), w(h === ne.id ? null : ne.id);
                  },
                  onKeyDown: (le) => {
                    le.key === "Enter" && (le.stopPropagation(), w(h === ne.id ? null : ne.id));
                  },
                  children: "⋮"
                }
              ),
              h === ne.id && /* @__PURE__ */ R.jsxs("div", { className: At.actionMenu, children: [
                /* @__PURE__ */ R.jsxs(
                  "button",
                  {
                    className: At.actionMenuItem,
                    onClick: (le) => be(ne.id, le),
                    children: [
                      /* @__PURE__ */ R.jsx(a_, { size: 14 }),
                      /* @__PURE__ */ R.jsx("span", { children: "Edit" })
                    ]
                  }
                ),
                /* @__PURE__ */ R.jsxs(
                  "button",
                  {
                    className: `${At.actionMenuItem} ${At.deleteAction}`,
                    onClick: (le) => xe(ne.id, le),
                    disabled: H,
                    children: [
                      /* @__PURE__ */ R.jsx(Ty, { size: 14 }),
                      /* @__PURE__ */ R.jsx("span", { children: H ? "Deleting..." : "Delete" })
                    ]
                  }
                )
              ] })
            ] })
          ]
        }
      ),
      Te && qe && /* @__PURE__ */ R.jsx("div", { className: At.stepPlansContainer, children: ne.outcome_plan_steps.map((le) => Ee(le)) })
    ] }, ne.id);
  }, ie = re(b, p);
  return /* @__PURE__ */ R.jsxs("div", { className: At.sidebarContent, children: [
    /* @__PURE__ */ R.jsx("div", { className: At.searchWrapper, children: /* @__PURE__ */ R.jsxs("div", { className: At.searchContainer, children: [
      /* @__PURE__ */ R.jsx("span", { className: At.searchIcon, children: "🔍" }),
      /* @__PURE__ */ R.jsx(
        "input",
        {
          type: "text",
          placeholder: "Search outcomes...",
          className: At.searchInput,
          value: p,
          onChange: ue
        }
      )
    ] }) }),
    /* @__PURE__ */ R.jsx("div", { className: At.outcomesList, children: M ? /* @__PURE__ */ R.jsxs("div", { className: At.loadingState, children: [
      /* @__PURE__ */ R.jsx("span", { className: At.loadingSpinner }),
      "Loading outcomes..."
    ] }) : U ? /* @__PURE__ */ R.jsx("div", { className: At.errorState, children: U }) : ie.length === 0 ? /* @__PURE__ */ R.jsx("div", { className: At.emptyState, children: p ? `No outcomes found for "${p}"` : "No outcomes yet" }) : ie.map((ne) => se(ne)) })
  ] });
}, a7 = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%205.83329C9.17592%205.83329%208.37034%206.07766%207.68514%206.5355C6.99993%206.99334%206.46588%207.64408%206.15051%208.40544C5.83515%209.1668%205.75264%2010.0046%205.91341%2010.8128C6.07418%2011.6211%206.47102%2012.3635%207.05373%2012.9462C7.63645%2013.529%208.37888%2013.9258%209.18714%2014.0866C9.99539%2014.2473%2010.8332%2014.1648%2011.5945%2013.8495C12.3559%2013.5341%2013.0066%2013%2013.4645%2012.3148C13.9223%2011.6296%2014.1667%2010.824%2014.1667%209.99995M10.8333%202.54579C9.28839%202.37246%207.72776%202.68352%206.36733%203.43593C5.0069%204.18834%203.9139%205.34492%203.23953%206.74567C2.56516%208.14643%202.34274%209.72213%202.60305%2011.2548C2.86335%2012.7875%203.59352%2014.2014%204.69253%2015.301C5.79155%2016.4006%207.2051%2017.1314%208.73766%2017.3925C10.2702%2017.6536%2011.846%2017.432%2013.2471%2016.7583C14.6482%2016.0846%2015.8053%2014.9922%2016.5584%2013.6322C17.3115%2012.2721%2017.6234%2010.7117%2017.4508%209.16662M12.5%207.49995V4.99995L15%202.49995V4.99995H17.5L15%207.49995H12.5ZM12.5%207.49995L10%209.99995M9.16668%209.99995C9.16668%2010.221%209.25447%2010.4329%209.41076%2010.5892C9.56704%2010.7455%209.779%2010.8333%2010%2010.8333C10.221%2010.8333%2010.433%2010.7455%2010.5893%2010.5892C10.7455%2010.4329%2010.8333%2010.221%2010.8333%209.99995C10.8333%209.77894%2010.7455%209.56698%2010.5893%209.4107C10.433%209.25442%2010.221%209.16662%2010%209.16662C9.779%209.16662%209.56704%209.25442%209.41076%209.4107C9.25447%209.56698%209.16668%209.77894%209.16668%209.99995Z'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", o7 = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.5533%205.43171C14.1448%204.53303%2013.4793%203.77539%2012.6409%203.2543C11.8024%202.73321%2010.8285%202.47198%209.84179%202.50353C8.8551%202.53509%207.89984%202.85802%207.09639%203.43162C6.29294%204.00523%205.67727%204.80383%205.32698%205.72679C4.97669%206.64974%204.90745%207.65573%205.12798%208.61798C5.34852%209.58022%205.84897%2010.4556%206.56625%2011.1339C7.28353%2011.8122%208.18555%2012.263%209.15861%2012.4294C10.1317%2012.5958%2011.1322%2012.4705%2012.0342%2012.0692'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.5683%2014.5533C15.467%2014.1448%2016.2246%2013.4793%2016.7457%2012.6409C17.2668%2011.8024%2017.5281%2010.8284%2017.4965%209.84176C17.4649%208.85507%2017.142%207.89981%2016.5684%207.09636C15.9948%206.29291%2015.1962%205.67724%2014.2732%205.32695C13.3503%204.97666%2012.3443%204.90742%2011.3821%205.12795C10.4198%205.34849%209.54439%205.84894%208.86612%206.56622C8.18784%207.2835%207.73708%208.18552%207.57064%209.15858C7.40419%2010.1316%207.52952%2011.1322%207.93083%2012.0341'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.45001%2014.5684C5.8585%2015.467%206.52387%2016.2247%207.36227%2016.7459C8.20067%2017.267%209.17458%2017.5283%2010.1613%2017.4969C11.1479%2017.4654%2012.1032%2017.1425%2012.9067%2016.569C13.7102%2015.9955%2014.3259%2015.197%2014.6763%2014.2741C15.0267%2013.3512%2015.0961%2012.3452%2014.8756%2011.383C14.6552%2010.4207%2014.1549%209.54526%2013.4377%208.8669C12.7205%208.18855%2011.8186%207.73767%2010.8456%207.57109C9.87256%207.40451%208.872%207.52969%207.97001%207.93085'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.43168%205.44995C4.53299%205.85844%203.77532%206.52381%203.25417%207.36221C2.73302%208.20061%202.47171%209.17452%202.50318%2010.1612C2.53465%2011.1479%202.85749%2012.1031%203.431%2012.9066C4.00451%2013.7101%204.80304%2014.3259%205.72594%2014.6763C6.64884%2015.0266%207.6548%2015.096%208.61706%2014.8756C9.57931%2014.6552%2010.4548%2014.1548%2011.1331%2013.4376C11.8115%2012.7205%2012.2624%2011.8185%2012.4289%2010.8455C12.5955%209.8725%2012.4703%208.87194%2012.0692%207.96995'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", i7 = ({
  activeSection: c,
  onSectionChange: d,
  onSectionChangeConfiguration: p
}) => {
  const { fetchNetworkPersons: _, fetchSuggestionRequests: x, fetchOutcomesSuggestionRequests: C } = Rv(
    pl((se) => ({
      fetchNetworkPersons: se.fetchNetworkPersons,
      fetchSuggestionRequests: se.fetchSuggestionRequests,
      fetchOutcomesSuggestionRequests: se.fetchOutcomesSuggestionRequests
    }))
  ), {
    selectedPerson: h,
    selectedSuggestionRequest: w,
    setSelectedPerson: k,
    setSelectedSuggestionRequest: b,
    addMessage: M,
    leverageLoopChats: U
  } = cu(
    pl((se) => ({
      selectedPerson: se.selectedPerson,
      selectedSuggestionRequest: se.selectedSuggestionRequest,
      setSelectedPerson: se.setSelectedPerson,
      setSelectedSuggestionRequest: se.setSelectedSuggestionRequest,
      addMessage: se.addMessage,
      leverageLoopChats: se.leverageLoopChats
    }))
  ), { token: V, baseUrl: H } = Lr(
    pl((se) => ({
      token: se.token,
      baseUrl: se.baseUrl
    }))
  ), [re, ue] = Me.useState(/* @__PURE__ */ new Set()), xe = (se) => {
    ue((ie) => {
      const ne = new Set(ie);
      return ne.has(se) ? ne.delete(se) : ne.add(se), ne;
    });
  }, be = (se) => {
    k(se), d("leverage-loops");
    const ie = se.full_name;
    if (!(U[ie]?.messages?.[0]?.role === "assistant")) {
      const Te = "leverage-loops", qe = {
        id: us(),
        role: "assistant",
        content: "Select a person from your contacts to assist with your network.",
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !1
      };
      M(Te, qe, ie);
      const le = {
        id: us(),
        role: "user",
        content: `${se.full_name} 
 ${se.master_person?.current_title} at ${se.master_person?.master_company?.company_name}`,
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !1
      };
      M(Te, le, ie);
      const ze = us(), A = `<content thesys="true">${JSON.stringify(qE(se))}</content>`;
      M(Te, {
        id: ze,
        role: "assistant",
        content: A,
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !1
      }, ie);
    }
  }, ge = (se) => {
    b(se), d("leverage-loops");
    const ie = se.request_panel_title;
    if (!(U[ie]?.messages?.[0]?.role === "assistant")) {
      const Te = "leverage-loops", qe = us(), le = `<content thesys="true">${JSON.stringify(dE(se))}</content>`;
      M(Te, {
        id: qe,
        role: "assistant",
        content: le,
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !1
      }, ie);
    }
  }, Ee = (se) => {
    b(se), d("outcomes");
    const ie = se.request_panel_title;
    if (!(U[ie]?.messages?.[0]?.role === "assistant")) {
      const Te = "outcomes", qe = us(), le = `<content thesys="true">${JSON.stringify(dE(se))}</content>`;
      M(Te, {
        id: qe,
        role: "assistant",
        content: le,
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !1
      }, ie);
    }
  };
  return Me.useEffect(() => {
    V && H && (_(), x(), C());
  }, [V, H, _, x, C]), /* @__PURE__ */ R.jsx("div", { className: kn.sidebar, children: /* @__PURE__ */ R.jsxs("nav", { className: kn.sidebarNav, children: [
    /* @__PURE__ */ R.jsxs(
      "button",
      {
        className: `${kn.sidebarItem} ${c === "copilot" ? kn.active : ""}`,
        onClick: () => d("copilot"),
        "aria-label": "Orbiter.io Copilot",
        children: [
          /* @__PURE__ */ R.jsx("span", { className: kn.sidebarIcon, children: /* @__PURE__ */ R.jsx("img", { src: p_, alt: "Orbiter", width: 18, height: 18 }) }),
          /* @__PURE__ */ R.jsx("span", { className: kn.sidebarLabel, children: "Orbiter.io Copilot" })
        ]
      }
    ),
    /* @__PURE__ */ R.jsx("div", { className: kn.sectionWrapper, children: /* @__PURE__ */ R.jsxs("div", { className: `${kn.sectionHeader} ${c === "outcomes" ? kn.active : ""}`, children: [
      /* @__PURE__ */ R.jsxs(
        "button",
        {
          className: kn.sidebarItemInHeader,
          onClick: () => d("outcomes"),
          "aria-label": "Outcomes",
          children: [
            /* @__PURE__ */ R.jsx("span", { className: kn.sidebarIcon, children: /* @__PURE__ */ R.jsx("img", { src: a7, alt: "Outcomes", width: 18, height: 18 }) }),
            /* @__PURE__ */ R.jsx("span", { className: kn.sidebarLabel, children: "Outcomes" })
          ]
        }
      ),
      /* @__PURE__ */ R.jsx(
        "button",
        {
          className: kn.plusButton,
          onClick: () => xe("outcomes"),
          "aria-label": "Expand Outcomes",
          children: /* @__PURE__ */ R.jsx("span", { className: `${kn.plusIcon} ${re.has("outcomes") ? kn.rotated : ""}`, children: "+" })
        }
      )
    ] }) }),
    /* @__PURE__ */ R.jsx("div", { className: kn.sectionWrapper, children: /* @__PURE__ */ R.jsxs("div", { className: `${kn.sectionHeader} ${c === "leverage-loops" ? kn.active : ""}`, children: [
      /* @__PURE__ */ R.jsxs(
        "button",
        {
          className: kn.sidebarItemInHeader,
          onClick: () => p("leverage-loops"),
          "aria-label": "Leverage Loops",
          children: [
            /* @__PURE__ */ R.jsx("span", { className: kn.sidebarIcon, children: /* @__PURE__ */ R.jsx("img", { src: o7, alt: "Leverage Loops", width: 18, height: 18 }) }),
            /* @__PURE__ */ R.jsx("span", { className: kn.sidebarLabel, children: "Leverage Loops" })
          ]
        }
      ),
      /* @__PURE__ */ R.jsx(
        "button",
        {
          className: kn.plusButton,
          onClick: () => xe("leverage-loops"),
          "aria-label": "Expand Leverage Loops",
          children: /* @__PURE__ */ R.jsx("span", { className: `${kn.plusIcon} ${re.has("leverage-loops") ? kn.rotated : ""}`, children: "+" })
        }
      )
    ] }) }),
    /* @__PURE__ */ R.jsxs("div", { children: [
      re.has("leverage-loops") && /* @__PURE__ */ R.jsx(
        xO,
        {
          selectedPerson: h,
          selectedSuggestionRequest: w,
          onPersonSelect: be,
          onSuggestionRequestSelect: ge
        }
      ),
      re.has("outcomes") && /* @__PURE__ */ R.jsx(
        r7,
        {
          selectedSuggestionRequest: w,
          onSuggestionRequestSelect: Ee
        }
      )
    ] })
  ] }) });
}, yE = ({
  agentName: c = "Orbiter.io Copilot"
}) => /* @__PURE__ */ R.jsx(
  v_,
  {
    context: "copilot",
    title: c,
    systemPrompt: "You are Orbiter.io Copilot, a helpful AI assistant for professional networking and relationship management."
  }
), l7 = () => /* @__PURE__ */ R.jsx(
  v_,
  {
    context: "outcomes",
    title: "Outcomes",
    systemPrompt: "You are helping the user track and achieve their professional outcomes and goals."
  }
), u7 = () => {
  const {
    selectedPerson: c,
    selectedSuggestionRequest: d,
    leverageLoopChats: p,
    addMessage: _
  } = cu(
    pl((w) => ({
      selectedPerson: w.selectedPerson,
      selectedSuggestionRequest: w.selectedSuggestionRequest,
      leverageLoopChats: w.leverageLoopChats,
      addMessage: w.addMessage
    }))
  );
  Me.useEffect(() => {
    const w = "leverage-loop-default";
    if (!(p[w]?.messages?.[0]?.role === "assistant")) {
      const M = "leverage-loops", V = {
        id: us(),
        role: "assistant",
        content: "Select a person from your contacts to assist with your network.",
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !1
      };
      _(M, V, w);
    }
  }, [c, d]);
  const x = () => c ? `You are helping with a leverage loop for ${c.full_name} from ${c.master_person?.master_company?.company_name || "Unknown Company"}. Their title is ${c.master_person?.current_title || "Unknown"}.` : d ? `You are helping with the leverage loop suggestion request: "${d.request_header_title}". Context: ${d.request_context}` : "You are helping the user manage their leverage loops and professional network.", C = () => {
    if (c)
      return `${c.full_name} • ${c.master_person?.master_company?.company_name || ""}`;
    if (d)
      return d.request_header_title;
  }, h = !!(c || d);
  return /* @__PURE__ */ R.jsx(
    v_,
    {
      context: "leverage-loops",
      title: "Leverage Loops",
      subtitle: C(),
      systemPrompt: x(),
      showComposer: h
    }
  );
}, s7 = "_app_4u5b6_5", c7 = "_mainContent_4u5b6_15", gE = {
  app: s7,
  mainContent: c7
}, f7 = ({
  agentName: c = "Copilot",
  token: d,
  dataSource: p,
  baseUrl: _,
  user_id: x,
  copilot_llm_endpoint: C,
  user_name: h
}) => {
  const [w, k] = Me.useState("copilot"), b = Lr((re) => re.setVariables), { setSelectedPerson: M, setSelectedSuggestionRequest: U } = cu(
    pl((re) => ({
      setSelectedPerson: re.setSelectedPerson,
      setSelectedSuggestionRequest: re.setSelectedSuggestionRequest
    }))
  );
  Me.useLayoutEffect(() => {
    b({ token: d, baseUrl: _, dataSource: p, user_id: x, copilot_llm_endpoint: C, user_name: h });
  }, [d, _, p, x, C, h]);
  const V = (re) => {
    k(re), re === "leverage-loops" && (M(null), U(null));
  }, H = () => {
    switch (w) {
      case "copilot":
        return /* @__PURE__ */ R.jsx(yE, { agentName: c });
      case "outcomes":
        return /* @__PURE__ */ R.jsx(l7, {});
      case "leverage-loops":
        return /* @__PURE__ */ R.jsx(u7, {});
      default:
        return /* @__PURE__ */ R.jsx(yE, { agentName: c });
    }
  };
  return /* @__PURE__ */ R.jsxs("div", { className: gE.app, children: [
    /* @__PURE__ */ R.jsx(
      i7,
      {
        activeSection: w,
        onSectionChange: k,
        onSectionChangeConfiguration: V
      }
    ),
    /* @__PURE__ */ R.jsx("main", { className: gE.mainContent, children: H() })
  ] });
};
var by = { exports: {} }, Za = {}, Ry = { exports: {} }, e_ = {};
var _E;
function d7() {
  return _E || (_E = 1, (function(c) {
    function d(ae, Le) {
      var Se = ae.length;
      ae.push(Le);
      e: for (; 0 < Se; ) {
        var F = Se - 1 >>> 1, J = ae[F];
        if (0 < x(J, Le)) ae[F] = Le, ae[Se] = J, Se = F;
        else break e;
      }
    }
    function p(ae) {
      return ae.length === 0 ? null : ae[0];
    }
    function _(ae) {
      if (ae.length === 0) return null;
      var Le = ae[0], Se = ae.pop();
      if (Se !== Le) {
        ae[0] = Se;
        e: for (var F = 0, J = ae.length, et = J >>> 1; F < et; ) {
          var He = 2 * (F + 1) - 1, ht = ae[He], at = He + 1, Pe = ae[at];
          if (0 > x(ht, Se)) at < J && 0 > x(Pe, ht) ? (ae[F] = Pe, ae[at] = Se, F = at) : (ae[F] = ht, ae[He] = Se, F = He);
          else if (at < J && 0 > x(Pe, Se)) ae[F] = Pe, ae[at] = Se, F = at;
          else break e;
        }
      }
      return Le;
    }
    function x(ae, Le) {
      var Se = ae.sortIndex - Le.sortIndex;
      return Se !== 0 ? Se : ae.id - Le.id;
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
    var k = [], b = [], M = 1, U = null, V = 3, H = !1, re = !1, ue = !1, xe = typeof setTimeout == "function" ? setTimeout : null, be = typeof clearTimeout == "function" ? clearTimeout : null, ge = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ee(ae) {
      for (var Le = p(b); Le !== null; ) {
        if (Le.callback === null) _(b);
        else if (Le.startTime <= ae) _(b), Le.sortIndex = Le.expirationTime, d(k, Le);
        else break;
        Le = p(b);
      }
    }
    function se(ae) {
      if (ue = !1, Ee(ae), !re) if (p(k) !== null) re = !0, je(ie);
      else {
        var Le = p(b);
        Le !== null && ke(se, Le.startTime - ae);
      }
    }
    function ie(ae, Le) {
      re = !1, ue && (ue = !1, be(Te), Te = -1), H = !0;
      var Se = V;
      try {
        for (Ee(Le), U = p(k); U !== null && (!(U.expirationTime > Le) || ae && !ze()); ) {
          var F = U.callback;
          if (typeof F == "function") {
            U.callback = null, V = U.priorityLevel;
            var J = F(U.expirationTime <= Le);
            Le = c.unstable_now(), typeof J == "function" ? U.callback = J : U === p(k) && _(k), Ee(Le);
          } else _(k);
          U = p(k);
        }
        if (U !== null) var et = !0;
        else {
          var He = p(b);
          He !== null && ke(se, He.startTime - Le), et = !1;
        }
        return et;
      } finally {
        U = null, V = Se, H = !1;
      }
    }
    var ne = !1, Ce = null, Te = -1, qe = 5, le = -1;
    function ze() {
      return !(c.unstable_now() - le < qe);
    }
    function A() {
      if (Ce !== null) {
        var ae = c.unstable_now();
        le = ae;
        var Le = !0;
        try {
          Le = Ce(!0, ae);
        } finally {
          Le ? X() : (ne = !1, Ce = null);
        }
      } else ne = !1;
    }
    var X;
    if (typeof ge == "function") X = function() {
      ge(A);
    };
    else if (typeof MessageChannel < "u") {
      var _e = new MessageChannel(), Qe = _e.port2;
      _e.port1.onmessage = A, X = function() {
        Qe.postMessage(null);
      };
    } else X = function() {
      xe(A, 0);
    };
    function je(ae) {
      Ce = ae, ne || (ne = !0, X());
    }
    function ke(ae, Le) {
      Te = xe(function() {
        ae(c.unstable_now());
      }, Le);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(ae) {
      ae.callback = null;
    }, c.unstable_continueExecution = function() {
      re || H || (re = !0, je(ie));
    }, c.unstable_forceFrameRate = function(ae) {
      0 > ae || 125 < ae ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : qe = 0 < ae ? Math.floor(1e3 / ae) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return V;
    }, c.unstable_getFirstCallbackNode = function() {
      return p(k);
    }, c.unstable_next = function(ae) {
      switch (V) {
        case 1:
        case 2:
        case 3:
          var Le = 3;
          break;
        default:
          Le = V;
      }
      var Se = V;
      V = Le;
      try {
        return ae();
      } finally {
        V = Se;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(ae, Le) {
      switch (ae) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ae = 3;
      }
      var Se = V;
      V = ae;
      try {
        return Le();
      } finally {
        V = Se;
      }
    }, c.unstable_scheduleCallback = function(ae, Le, Se) {
      var F = c.unstable_now();
      switch (typeof Se == "object" && Se !== null ? (Se = Se.delay, Se = typeof Se == "number" && 0 < Se ? F + Se : F) : Se = F, ae) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return J = Se + J, ae = { id: M++, callback: Le, priorityLevel: ae, startTime: Se, expirationTime: J, sortIndex: -1 }, Se > F ? (ae.sortIndex = Se, d(b, ae), p(k) === null && ae === p(b) && (ue ? (be(Te), Te = -1) : ue = !0, ke(se, Se - F))) : (ae.sortIndex = J, d(k, ae), re || H || (re = !0, je(ie))), ae;
    }, c.unstable_shouldYield = ze, c.unstable_wrapCallback = function(ae) {
      var Le = V;
      return function() {
        var Se = V;
        V = Le;
        try {
          return ae.apply(this, arguments);
        } finally {
          V = Se;
        }
      };
    };
  })(e_)), e_;
}
var t_ = {};
var SE;
function p7() {
  return SE || (SE = 1, (function(c) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var d = !1, p = 5;
      function _(Ne, tt) {
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
        for (var Qt = Rt; Qt > 0; ) {
          var sn = Qt - 1 >>> 1, Sn = Ne[sn];
          if (k(Sn, tt) > 0)
            Ne[sn] = tt, Ne[Qt] = Sn, Qt = sn;
          else
            return;
        }
      }
      function w(Ne, tt, Rt) {
        for (var Qt = Rt, sn = Ne.length, Sn = sn >>> 1; Qt < Sn; ) {
          var vn = (Qt + 1) * 2 - 1, rr = Ne[vn], cn = vn + 1, Zt = Ne[cn];
          if (k(rr, tt) < 0)
            cn < sn && k(Zt, rr) < 0 ? (Ne[Qt] = Zt, Ne[cn] = tt, Qt = cn) : (Ne[Qt] = rr, Ne[vn] = tt, Qt = vn);
          else if (cn < sn && k(Zt, tt) < 0)
            Ne[Qt] = Zt, Ne[cn] = tt, Qt = cn;
          else
            return;
        }
      }
      function k(Ne, tt) {
        var Rt = Ne.sortIndex - tt.sortIndex;
        return Rt !== 0 ? Rt : Ne.id - tt.id;
      }
      var b = 1, M = 2, U = 3, V = 4, H = 5;
      function re(Ne, tt) {
      }
      var ue = typeof performance == "object" && typeof performance.now == "function";
      if (ue) {
        var xe = performance;
        c.unstable_now = function() {
          return xe.now();
        };
      } else {
        var be = Date, ge = be.now();
        c.unstable_now = function() {
          return be.now() - ge;
        };
      }
      var Ee = 1073741823, se = -1, ie = 250, ne = 5e3, Ce = 1e4, Te = Ee, qe = [], le = [], ze = 1, A = null, X = U, _e = !1, Qe = !1, je = !1, ke = typeof setTimeout == "function" ? setTimeout : null, ae = typeof clearTimeout == "function" ? clearTimeout : null, Le = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Se(Ne) {
        for (var tt = x(le); tt !== null; ) {
          if (tt.callback === null)
            C(le);
          else if (tt.startTime <= Ne)
            C(le), tt.sortIndex = tt.expirationTime, _(qe, tt);
          else
            return;
          tt = x(le);
        }
      }
      function F(Ne) {
        if (je = !1, Se(Ne), !Qe)
          if (x(qe) !== null)
            Qe = !0, Pn(J);
          else {
            var tt = x(le);
            tt !== null && Rr(F, tt.startTime - Ne);
          }
      }
      function J(Ne, tt) {
        Qe = !1, je && (je = !1, _a()), _e = !0;
        var Rt = X;
        try {
          var Qt;
          if (!d) return et(Ne, tt);
        } finally {
          A = null, X = Rt, _e = !1;
        }
      }
      function et(Ne, tt) {
        var Rt = tt;
        for (Se(Rt), A = x(qe); A !== null && !(A.expirationTime > Rt && (!Ne || Co())); ) {
          var Qt = A.callback;
          if (typeof Qt == "function") {
            A.callback = null, X = A.priorityLevel;
            var sn = A.expirationTime <= Rt, Sn = Qt(sn);
            Rt = c.unstable_now(), typeof Sn == "function" ? A.callback = Sn : A === x(qe) && C(qe), Se(Rt);
          } else
            C(qe);
          A = x(qe);
        }
        if (A !== null)
          return !0;
        var vn = x(le);
        return vn !== null && Rr(F, vn.startTime - Rt), !1;
      }
      function He(Ne, tt) {
        switch (Ne) {
          case b:
          case M:
          case U:
          case V:
          case H:
            break;
          default:
            Ne = U;
        }
        var Rt = X;
        X = Ne;
        try {
          return tt();
        } finally {
          X = Rt;
        }
      }
      function ht(Ne) {
        var tt;
        switch (X) {
          case b:
          case M:
          case U:
            tt = U;
            break;
          default:
            tt = X;
            break;
        }
        var Rt = X;
        X = tt;
        try {
          return Ne();
        } finally {
          X = Rt;
        }
      }
      function at(Ne) {
        var tt = X;
        return function() {
          var Rt = X;
          X = tt;
          try {
            return Ne.apply(this, arguments);
          } finally {
            X = Rt;
          }
        };
      }
      function Pe(Ne, tt, Rt) {
        var Qt = c.unstable_now(), sn;
        if (typeof Rt == "object" && Rt !== null) {
          var Sn = Rt.delay;
          typeof Sn == "number" && Sn > 0 ? sn = Qt + Sn : sn = Qt;
        } else
          sn = Qt;
        var vn;
        switch (Ne) {
          case b:
            vn = se;
            break;
          case M:
            vn = ie;
            break;
          case H:
            vn = Te;
            break;
          case V:
            vn = Ce;
            break;
          case U:
          default:
            vn = ne;
            break;
        }
        var rr = sn + vn, cn = {
          id: ze++,
          callback: tt,
          priorityLevel: Ne,
          startTime: sn,
          expirationTime: rr,
          sortIndex: -1
        };
        return sn > Qt ? (cn.sortIndex = sn, _(le, cn), x(qe) === null && cn === x(le) && (je ? _a() : je = !0, Rr(F, sn - Qt))) : (cn.sortIndex = rr, _(qe, cn), !Qe && !_e && (Qe = !0, Pn(J))), cn;
      }
      function dt() {
      }
      function mt() {
        !Qe && !_e && (Qe = !0, Pn(J));
      }
      function Jt() {
        return x(qe);
      }
      function zn(Ne) {
        Ne.callback = null;
      }
      function Or() {
        return X;
      }
      var Tn = !1, sr = null, Gn = -1, Qn = p, Zr = -1;
      function Co() {
        var Ne = c.unstable_now() - Zr;
        return !(Ne < Qn);
      }
      function ga() {
      }
      function nr(Ne) {
        if (Ne < 0 || Ne > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Ne > 0 ? Qn = Math.floor(1e3 / Ne) : Qn = p;
      }
      var Nn = function() {
        if (sr !== null) {
          var Ne = c.unstable_now();
          Zr = Ne;
          var tt = !0, Rt = !0;
          try {
            Rt = sr(tt, Ne);
          } finally {
            Rt ? Kn() : (Tn = !1, sr = null);
          }
        } else
          Tn = !1;
      }, Kn;
      if (typeof Le == "function")
        Kn = function() {
          Le(Nn);
        };
      else if (typeof MessageChannel < "u") {
        var br = new MessageChannel(), to = br.port2;
        br.port1.onmessage = Nn, Kn = function() {
          to.postMessage(null);
        };
      } else
        Kn = function() {
          ke(Nn, 0);
        };
      function Pn(Ne) {
        sr = Ne, Tn || (Tn = !0, Kn());
      }
      function Rr(Ne, tt) {
        Gn = ke(function() {
          Ne(c.unstable_now());
        }, tt);
      }
      function _a() {
        ae(Gn), Gn = -1;
      }
      var no = ga, Eo = null;
      c.unstable_IdlePriority = H, c.unstable_ImmediatePriority = b, c.unstable_LowPriority = V, c.unstable_NormalPriority = U, c.unstable_Profiling = Eo, c.unstable_UserBlockingPriority = M, c.unstable_cancelCallback = zn, c.unstable_continueExecution = mt, c.unstable_forceFrameRate = nr, c.unstable_getCurrentPriorityLevel = Or, c.unstable_getFirstCallbackNode = Jt, c.unstable_next = ht, c.unstable_pauseExecution = dt, c.unstable_requestPaint = no, c.unstable_runWithPriority = He, c.unstable_scheduleCallback = Pe, c.unstable_shouldYield = Co, c.unstable_wrapCallback = at, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(t_)), t_;
}
var CE;
function WE() {
  return CE || (CE = 1, process.env.NODE_ENV === "production" ? Ry.exports = d7() : Ry.exports = p7()), Ry.exports;
}
var EE;
function v7() {
  if (EE) return Za;
  EE = 1;
  var c = kv(), d = WE();
  function p(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, i = 1; i < arguments.length; i++) r += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var _ = /* @__PURE__ */ new Set(), x = {};
  function C(n, r) {
    h(n, r), h(n + "Capture", r);
  }
  function h(n, r) {
    for (x[n] = r, n = 0; n < r.length; n++) _.add(r[n]);
  }
  var w = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), k = Object.prototype.hasOwnProperty, b = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, M = {}, U = {};
  function V(n) {
    return k.call(U, n) ? !0 : k.call(M, n) ? !1 : b.test(n) ? U[n] = !0 : (M[n] = !0, !1);
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
  function re(n, r, i, u) {
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
  function ue(n, r, i, u, f, m, E) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = f, this.mustUseProperty = i, this.propertyName = n, this.type = r, this.sanitizeURL = m, this.removeEmptyString = E;
  }
  var xe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    xe[n] = new ue(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    xe[r] = new ue(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    xe[n] = new ue(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    xe[n] = new ue(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    xe[n] = new ue(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    xe[n] = new ue(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    xe[n] = new ue(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    xe[n] = new ue(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    xe[n] = new ue(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var be = /[\-:]([a-z])/g;
  function ge(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      be,
      ge
    );
    xe[r] = new ue(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(be, ge);
    xe[r] = new ue(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(be, ge);
    xe[r] = new ue(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    xe[n] = new ue(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), xe.xlinkHref = new ue("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    xe[n] = new ue(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ee(n, r, i, u) {
    var f = xe.hasOwnProperty(r) ? xe[r] : null;
    (f !== null ? f.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (re(r, i, f, u) && (i = null), u || f === null ? V(r) && (i === null ? n.removeAttribute(r) : n.setAttribute(r, "" + i)) : f.mustUseProperty ? n[f.propertyName] = i === null ? f.type === 3 ? !1 : "" : i : (r = f.attributeName, u = f.attributeNamespace, i === null ? n.removeAttribute(r) : (f = f.type, i = f === 3 || f === 4 && i === !0 ? "" : "" + i, u ? n.setAttributeNS(u, r, i) : n.setAttribute(r, i))));
  }
  var se = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ie = /* @__PURE__ */ Symbol.for("react.element"), ne = /* @__PURE__ */ Symbol.for("react.portal"), Ce = /* @__PURE__ */ Symbol.for("react.fragment"), Te = /* @__PURE__ */ Symbol.for("react.strict_mode"), qe = /* @__PURE__ */ Symbol.for("react.profiler"), le = /* @__PURE__ */ Symbol.for("react.provider"), ze = /* @__PURE__ */ Symbol.for("react.context"), A = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), _e = /* @__PURE__ */ Symbol.for("react.suspense_list"), Qe = /* @__PURE__ */ Symbol.for("react.memo"), je = /* @__PURE__ */ Symbol.for("react.lazy"), ke = /* @__PURE__ */ Symbol.for("react.offscreen"), ae = Symbol.iterator;
  function Le(n) {
    return n === null || typeof n != "object" ? null : (n = ae && n[ae] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Se = Object.assign, F;
  function J(n) {
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
  function He(n, r) {
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
`), E = f.length - 1, D = m.length - 1; 1 <= E && 0 <= D && f[E] !== m[D]; ) D--;
        for (; 1 <= E && 0 <= D; E--, D--) if (f[E] !== m[D]) {
          if (E !== 1 || D !== 1)
            do
              if (E--, D--, 0 > D || f[E] !== m[D]) {
                var j = `
` + f[E].replace(" at new ", " at ");
                return n.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", n.displayName)), j;
              }
            while (1 <= E && 0 <= D);
          break;
        }
      }
    } finally {
      et = !1, Error.prepareStackTrace = i;
    }
    return (n = n ? n.displayName || n.name : "") ? J(n) : "";
  }
  function ht(n) {
    switch (n.tag) {
      case 5:
        return J(n.type);
      case 16:
        return J("Lazy");
      case 13:
        return J("Suspense");
      case 19:
        return J("SuspenseList");
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
      case Ce:
        return "Fragment";
      case ne:
        return "Portal";
      case qe:
        return "Profiler";
      case Te:
        return "StrictMode";
      case X:
        return "Suspense";
      case _e:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case ze:
        return (n.displayName || "Context") + ".Consumer";
      case le:
        return (n._context.displayName || "Context") + ".Provider";
      case A:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Qe:
        return r = n.displayName || null, r !== null ? r : at(n.type) || "Memo";
      case je:
        r = n._payload, n = n._init;
        try {
          return at(n(r));
        } catch {
        }
    }
    return null;
  }
  function Pe(n) {
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
        return r === Te ? "StrictMode" : "Mode";
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
  function dt(n) {
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
  function mt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Jt(n) {
    var r = mt(n) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
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
  function zn(n) {
    n._valueTracker || (n._valueTracker = Jt(n));
  }
  function Or(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var i = r.getValue(), u = "";
    return n && (u = mt(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== i ? (r.setValue(n), !0) : !1;
  }
  function Tn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function sr(n, r) {
    var i = r.checked;
    return Se({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: i ?? n._wrapperState.initialChecked });
  }
  function Gn(n, r) {
    var i = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    i = dt(r.value != null ? r.value : i), n._wrapperState = { initialChecked: u, initialValue: i, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Qn(n, r) {
    r = r.checked, r != null && Ee(n, "checked", r, !1);
  }
  function Zr(n, r) {
    Qn(n, r);
    var i = dt(r.value), u = r.type;
    if (i != null) u === "number" ? (i === 0 && n.value === "" || n.value != i) && (n.value = "" + i) : n.value !== "" + i && (n.value = "" + i);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? ga(n, r.type, i) : r.hasOwnProperty("defaultValue") && ga(n, r.type, dt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
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
    (r !== "number" || Tn(n.ownerDocument) !== n) && (i == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + i && (n.defaultValue = "" + i));
  }
  var nr = Array.isArray;
  function Nn(n, r, i, u) {
    if (n = n.options, r) {
      r = {};
      for (var f = 0; f < i.length; f++) r["$" + i[f]] = !0;
      for (i = 0; i < n.length; i++) f = r.hasOwnProperty("$" + n[i].value), n[i].selected !== f && (n[i].selected = f), f && u && (n[i].defaultSelected = !0);
    } else {
      for (i = "" + dt(i), r = null, f = 0; f < n.length; f++) {
        if (n[f].value === i) {
          n[f].selected = !0, u && (n[f].defaultSelected = !0);
          return;
        }
        r !== null || n[f].disabled || (r = n[f]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Kn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(p(91));
    return Se({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function br(n, r) {
    var i = r.value;
    if (i == null) {
      if (i = r.children, r = r.defaultValue, i != null) {
        if (r != null) throw Error(p(92));
        if (nr(i)) {
          if (1 < i.length) throw Error(p(93));
          i = i[0];
        }
        r = i;
      }
      r == null && (r = ""), i = r;
    }
    n._wrapperState = { initialValue: dt(i) };
  }
  function to(n, r) {
    var i = dt(r.value), u = dt(r.defaultValue);
    i != null && (i = "" + i, i !== n.value && (n.value = i), r.defaultValue == null && n.defaultValue !== i && (n.defaultValue = i)), u != null && (n.defaultValue = "" + u);
  }
  function Pn(n) {
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
  function _a(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Rr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
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
  function Qt(n, r, i) {
    return r == null || typeof r == "boolean" || r === "" ? "" : i || typeof r != "number" || r === 0 || tt.hasOwnProperty(n) && tt[n] ? ("" + r).trim() : r + "px";
  }
  function sn(n, r) {
    n = n.style;
    for (var i in r) if (r.hasOwnProperty(i)) {
      var u = i.indexOf("--") === 0, f = Qt(i, r[i], u);
      i === "float" && (i = "cssFloat"), u ? n.setProperty(i, f) : n[i] = f;
    }
  }
  var Sn = Se({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function vn(n, r) {
    if (r) {
      if (Sn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(p(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(p(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(p(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(p(62));
    }
  }
  function rr(n, r) {
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
  var en = null, Sa = null, kr = null;
  function ja(n) {
    if (n = ot(n)) {
      if (typeof en != "function") throw Error(p(280));
      var r = n.stateNode;
      r && (r = En(r), en(n.stateNode, n.type, r));
    }
  }
  function Jo(n) {
    Sa ? kr ? kr.push(n) : kr = [n] : Sa = n;
  }
  function vl() {
    if (Sa) {
      var n = Sa, r = kr;
      if (kr = Sa = null, ja(n), r) for (n = 0; n < r.length; n++) ja(r[n]);
    }
  }
  function hl(n, r) {
    return n(r);
  }
  function Ri() {
  }
  var ki = !1;
  function ml(n, r, i) {
    if (ki) return n(r, i);
    ki = !0;
    try {
      return hl(n, r, i);
    } finally {
      ki = !1, (Sa !== null || kr !== null) && (Ri(), vl());
    }
  }
  function jr(n, r) {
    var i = n.stateNode;
    if (i === null) return null;
    var u = En(i);
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
    if (i && typeof i != "function") throw Error(p(231, r, typeof i));
    return i;
  }
  var Ar = !1;
  if (w) try {
    var cr = {};
    Object.defineProperty(cr, "passive", { get: function() {
      Ar = !0;
    } }), window.addEventListener("test", cr, cr), window.removeEventListener("test", cr, cr);
  } catch {
    Ar = !1;
  }
  function xo(n, r, i, u, f, m, E, D, j) {
    var Q = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(i, Q);
    } catch (ve) {
      this.onError(ve);
    }
  }
  var ro = !1, wo = null, bo = !1, O = null, ce = { onError: function(n) {
    ro = !0, wo = n;
  } };
  function Ae(n, r, i, u, f, m, E, D, j) {
    ro = !1, wo = null, xo.apply(ce, arguments);
  }
  function Ge(n, r, i, u, f, m, E, D, j) {
    if (Ae.apply(this, arguments), ro) {
      if (ro) {
        var Q = wo;
        ro = !1, wo = null;
      } else throw Error(p(198));
      bo || (bo = !0, O = Q);
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
    if (Et(n) !== n) throw Error(p(188));
  }
  function Tt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Et(n), r === null) throw Error(p(188));
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
        throw Error(p(188));
      }
      if (i.return !== u.return) i = f, u = m;
      else {
        for (var E = !1, D = f.child; D; ) {
          if (D === i) {
            E = !0, i = f, u = m;
            break;
          }
          if (D === u) {
            E = !0, u = f, i = m;
            break;
          }
          D = D.sibling;
        }
        if (!E) {
          for (D = m.child; D; ) {
            if (D === i) {
              E = !0, i = m, u = f;
              break;
            }
            if (D === u) {
              E = !0, u = m, i = f;
              break;
            }
            D = D.sibling;
          }
          if (!E) throw Error(p(189));
        }
      }
      if (i.alternate !== u) throw Error(p(190));
    }
    if (i.tag !== 3) throw Error(p(188));
    return i.stateNode.current === i ? n : r;
  }
  function Dn(n) {
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
  var hn = d.unstable_scheduleCallback, fr = d.unstable_cancelCallback, ao = d.unstable_shouldYield, oo = d.unstable_requestPaint, xt = d.unstable_now, bt = d.unstable_getCurrentPriorityLevel, io = d.unstable_ImmediatePriority, yl = d.unstable_UserBlockingPriority, gl = d.unstable_NormalPriority, Ti = d.unstable_LowPriority, fu = d.unstable_IdlePriority, Ni = null, ea = null;
  function ss(n) {
    if (ea && typeof ea.onCommitFiberRoot == "function") try {
      ea.onCommitFiberRoot(Ni, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Ur = Math.clz32 ? Math.clz32 : du, Rc = Math.log, kc = Math.LN2;
  function du(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Rc(n) / kc | 0) | 0;
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
    var u = 0, f = n.suspendedLanes, m = n.pingedLanes, E = i & 268435455;
    if (E !== 0) {
      var D = E & ~f;
      D !== 0 ? u = lo(D) : (m &= E, m !== 0 && (u = lo(m)));
    } else E = i & ~f, E !== 0 ? u = lo(E) : m !== 0 && (u = lo(m));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && (r & f) === 0 && (f = u & -u, m = r & -r, f >= m || f === 16 && (m & 4194240) !== 0)) return r;
    if ((u & 4) !== 0 && (u |= i & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) i = 31 - Ur(r), f = 1 << i, u |= n[i], r &= ~f;
    return u;
  }
  function pu(n, r) {
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
  function _l(n, r) {
    for (var i = n.suspendedLanes, u = n.pingedLanes, f = n.expirationTimes, m = n.pendingLanes; 0 < m; ) {
      var E = 31 - Ur(m), D = 1 << E, j = f[E];
      j === -1 ? ((D & i) === 0 || (D & u) !== 0) && (f[E] = pu(D, r)) : j <= r && (n.expiredLanes |= D), m &= ~D;
    }
  }
  function Mi(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function vu() {
    var n = Di;
    return Di <<= 1, (Di & 4194240) === 0 && (Di = 64), n;
  }
  function hu(n) {
    for (var r = [], i = 0; 31 > i; i++) r.push(n);
    return r;
  }
  function Zo(n, r, i) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Ur(r), n[r] = i;
  }
  function md(n, r) {
    var i = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < i; ) {
      var f = 31 - Ur(i), m = 1 << f;
      r[f] = 0, u[f] = -1, n[f] = -1, i &= ~m;
    }
  }
  function ei(n, r) {
    var i = n.entangledLanes |= r;
    for (n = n.entanglements; i; ) {
      var u = 31 - Ur(i), f = 1 << u;
      f & r | n[u] & r && (n[u] |= r), i &= ~f;
    }
  }
  var $t = 0;
  function mu(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Ft, cs, Ro, gt, yu, dr = !1, ko = [], zr = null, To = null, mn = null, tn = /* @__PURE__ */ new Map(), Li = /* @__PURE__ */ new Map(), Xn = [], Pr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Aa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        zr = null;
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
        Li.delete(r.pointerId);
    }
  }
  function Sl(n, r, i, u, f, m) {
    return n === null || n.nativeEvent !== m ? (n = { blockedOn: r, domEventName: i, eventSystemFlags: u, nativeEvent: m, targetContainers: [f] }, r !== null && (r = ot(r), r !== null && cs(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, f !== null && r.indexOf(f) === -1 && r.push(f), n);
  }
  function fs(n, r, i, u, f) {
    switch (r) {
      case "focusin":
        return zr = Sl(zr, n, r, i, u, f), !0;
      case "dragenter":
        return To = Sl(To, n, r, i, u, f), !0;
      case "mouseover":
        return mn = Sl(mn, n, r, i, u, f), !0;
      case "pointerover":
        var m = f.pointerId;
        return tn.set(m, Sl(tn.get(m) || null, n, r, i, u, f)), !0;
      case "gotpointercapture":
        return m = f.pointerId, Li.set(m, Sl(Li.get(m) || null, n, r, i, u, f)), !0;
    }
    return !1;
  }
  function ds(n) {
    var r = Nl(n.target);
    if (r !== null) {
      var i = Et(r);
      if (i !== null) {
        if (r = i.tag, r === 13) {
          if (r = _t(i), r !== null) {
            n.blockedOn = r, yu(n.priority, function() {
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
  function Oi(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var i = Su(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (i === null) {
        i = n.nativeEvent;
        var u = new i.constructor(i.type, i);
        cn = u, i.target.dispatchEvent(u), cn = null;
      } else return r = ot(i), r !== null && cs(r), n.blockedOn = i, !1;
      r.shift();
    }
    return !0;
  }
  function Cl(n, r, i) {
    Oi(n) && i.delete(r);
  }
  function yd() {
    dr = !1, zr !== null && Oi(zr) && (zr = null), To !== null && Oi(To) && (To = null), mn !== null && Oi(mn) && (mn = null), tn.forEach(Cl), Li.forEach(Cl);
  }
  function Ua(n, r) {
    n.blockedOn === r && (n.blockedOn = null, dr || (dr = !0, d.unstable_scheduleCallback(d.unstable_NormalPriority, yd)));
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
    for (zr !== null && Ua(zr, n), To !== null && Ua(To, n), mn !== null && Ua(mn, n), tn.forEach(r), Li.forEach(r), i = 0; i < Xn.length; i++) u = Xn[i], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < Xn.length && (i = Xn[0], i.blockedOn === null); ) ds(i), i.blockedOn === null && Xn.shift();
  }
  var No = se.ReactCurrentBatchConfig, za = !0;
  function gu(n, r, i, u) {
    var f = $t, m = No.transition;
    No.transition = null;
    try {
      $t = 1, ji(n, r, i, u);
    } finally {
      $t = f, No.transition = m;
    }
  }
  function _u(n, r, i, u) {
    var f = $t, m = No.transition;
    No.transition = null;
    try {
      $t = 4, ji(n, r, i, u);
    } finally {
      $t = f, No.transition = m;
    }
  }
  function ji(n, r, i, u) {
    if (za) {
      var f = Su(n, r, i, u);
      if (f === null) Ic(n, r, u, El, i), Aa(n, u);
      else if (fs(f, n, r, i, u)) u.stopPropagation();
      else if (Aa(n, u), r & 4 && -1 < Pr.indexOf(n)) {
        for (; f !== null; ) {
          var m = ot(f);
          if (m !== null && Ft(m), m = Su(n, r, i, u), m === null && Ic(n, r, u, El, i), m === f) break;
          f = m;
        }
        f !== null && u.stopPropagation();
      } else Ic(n, r, u, null, i);
    }
  }
  var El = null;
  function Su(n, r, i, u) {
    if (El = null, n = Zt(u), n = Nl(n), n !== null) if (r = Et(n), r === null) n = null;
    else if (i = r.tag, i === 13) {
      if (n = _t(r), n !== null) return n;
      n = null;
    } else if (i === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return El = n, null;
  }
  function Cu(n) {
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
          case yl:
            return 4;
          case gl:
          case Ti:
            return 16;
          case fu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var co = null, S = null, L = null;
  function G() {
    if (L) return L;
    var n, r = S, i = r.length, u, f = "value" in co ? co.value : co.textContent, m = f.length;
    for (n = 0; n < i && r[n] === f[n]; n++) ;
    var E = i - n;
    for (u = 1; u <= E && r[i - u] === f[m - u]; u++) ;
    return L = f.slice(n, 1 < u ? 1 - u : void 0);
  }
  function Z(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function we() {
    return !0;
  }
  function lt() {
    return !1;
  }
  function Oe(n) {
    function r(i, u, f, m, E) {
      this._reactName = i, this._targetInst = f, this.type = u, this.nativeEvent = m, this.target = E, this.currentTarget = null;
      for (var D in n) n.hasOwnProperty(D) && (i = n[D], this[D] = i ? i(m) : m[D]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? we : lt, this.isPropagationStopped = lt, this;
    }
    return Se(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var i = this.nativeEvent;
      i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = we);
    }, stopPropagation: function() {
      var i = this.nativeEvent;
      i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = we);
    }, persist: function() {
    }, isPersistent: we }), r;
  }
  var ct = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Mt = Oe(ct), Vt = Se({}, ct, { view: 0, detail: 0 }), dn = Oe(Vt), nn, kt, rn, Cn = Se({}, Vt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ed, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== rn && (rn && n.type === "mousemove" ? (nn = n.screenX - rn.screenX, kt = n.screenY - rn.screenY) : kt = nn = 0, rn = n), nn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : kt;
  } }), Ai = Oe(Cn), ps = Se({}, Cn, { dataTransfer: 0 }), ti = Oe(ps), vs = Se({}, Vt, { relatedTarget: 0 }), xl = Oe(vs), gd = Se({}, ct, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Tc = Oe(gd), _d = Se({}, ct, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Dv = Oe(_d), Sd = Se({}, ct, { data: 0 }), Cd = Oe(Sd), Mv = {
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
  }, Lv = {
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
  function ni(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Uy[n]) ? !!r[n] : !1;
  }
  function Ed() {
    return ni;
  }
  var xd = Se({}, Vt, { key: function(n) {
    if (n.key) {
      var r = Mv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = Z(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Lv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ed, charCode: function(n) {
    return n.type === "keypress" ? Z(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Z(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), wd = Oe(xd), bd = Se({}, Cn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ov = Oe(bd), Nc = Se({}, Vt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ed }), jv = Oe(Nc), ta = Se({}, ct, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ri = Oe(ta), In = Se({}, Cn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ai = Oe(In), Rd = [9, 13, 27, 32], Eu = w && "CompositionEvent" in window, hs = null;
  w && "documentMode" in document && (hs = document.documentMode);
  var ms = w && "TextEvent" in window && !hs, Av = w && (!Eu || hs && 8 < hs && 11 >= hs), Uv = " ", Dc = !1;
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
  var xu = !1;
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
    if (xu) return n === "compositionend" || !Eu && zv(n, r) ? (n = G(), L = S = co = null, xu = !1, n) : null;
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
    Jo(u), r = Es(r, "onChange"), 0 < r.length && (i = new Mt("onChange", "change", null, i, u), n.push({ event: i, listeners: r }));
  }
  var Do = null, wl = null;
  function Vv(n) {
    kl(n, 0);
  }
  function ys(n) {
    var r = po(n);
    if (Or(r)) return n;
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
    Do && (Do.detachEvent("onpropertychange", qv), wl = Do = null);
  }
  function qv(n) {
    if (n.propertyName === "value" && ys(wl)) {
      var r = [];
      kd(r, wl, n, Zt(n)), ml(Vv, r);
    }
  }
  function Fy(n, r, i) {
    n === "focusin" ? (Bv(), Do = r, wl = i, Do.attachEvent("onpropertychange", qv)) : n === "focusout" && Bv();
  }
  function Wv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return ys(wl);
  }
  function Vy(n, r) {
    if (n === "click") return ys(r);
  }
  function Yv(n, r) {
    if (n === "input" || n === "change") return ys(r);
  }
  function Hy(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var fo = typeof Object.is == "function" ? Object.is : Hy;
  function gs(n, r) {
    if (fo(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var i = Object.keys(n), u = Object.keys(r);
    if (i.length !== u.length) return !1;
    for (u = 0; u < i.length; u++) {
      var f = i[u];
      if (!k.call(r, f) || !fo(n[f], r[f])) return !1;
    }
    return !0;
  }
  function Gv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Mc(n, r) {
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
  function Ui(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Ui(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function _s() {
    for (var n = window, r = Tn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var i = typeof r.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) n = r.contentWindow;
      else break;
      r = Tn(n.document);
    }
    return r;
  }
  function Lc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function wu(n) {
    var r = _s(), i = n.focusedElem, u = n.selectionRange;
    if (r !== i && i && i.ownerDocument && Ui(i.ownerDocument.documentElement, i)) {
      if (u !== null && Lc(i)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in i) i.selectionStart = r, i.selectionEnd = Math.min(n, i.value.length);
        else if (n = (r = i.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var f = i.textContent.length, m = Math.min(u.start, f);
          u = u.end === void 0 ? m : Math.min(u.end, f), !n.extend && m > u && (f = u, u = m, m = f), f = Mc(i, m);
          var E = Mc(
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
  var $y = w && "documentMode" in document && 11 >= document.documentMode, bu = null, Dd = null, Ss = null, Md = !1;
  function Ld(n, r, i) {
    var u = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Md || bu == null || bu !== Tn(u) || (u = bu, "selectionStart" in u && Lc(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), Ss && gs(Ss, u) || (Ss = u, u = Es(Dd, "onSelect"), 0 < u.length && (r = new Mt("onSelect", "select", null, r, i), n.push({ event: r, listeners: u }), r.target = bu)));
  }
  function Oc(n, r) {
    var i = {};
    return i[n.toLowerCase()] = r.toLowerCase(), i["Webkit" + n] = "webkit" + r, i["Moz" + n] = "moz" + r, i;
  }
  var bl = { animationend: Oc("Animation", "AnimationEnd"), animationiteration: Oc("Animation", "AnimationIteration"), animationstart: Oc("Animation", "AnimationStart"), transitionend: Oc("Transition", "TransitionEnd") }, pr = {}, Od = {};
  w && (Od = document.createElement("div").style, "AnimationEvent" in window || (delete bl.animationend.animation, delete bl.animationiteration.animation, delete bl.animationstart.animation), "TransitionEvent" in window || delete bl.transitionend.transition);
  function jc(n) {
    if (pr[n]) return pr[n];
    if (!bl[n]) return n;
    var r = bl[n], i;
    for (i in r) if (r.hasOwnProperty(i) && i in Od) return pr[n] = r[i];
    return n;
  }
  var Qv = jc("animationend"), Kv = jc("animationiteration"), Xv = jc("animationstart"), Jv = jc("transitionend"), jd = /* @__PURE__ */ new Map(), Ac = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Pa(n, r) {
    jd.set(n, r), C(r, [n]);
  }
  for (var Ad = 0; Ad < Ac.length; Ad++) {
    var Rl = Ac[Ad], By = Rl.toLowerCase(), qy = Rl[0].toUpperCase() + Rl.slice(1);
    Pa(By, "on" + qy);
  }
  Pa(Qv, "onAnimationEnd"), Pa(Kv, "onAnimationIteration"), Pa(Xv, "onAnimationStart"), Pa("dblclick", "onDoubleClick"), Pa("focusin", "onFocus"), Pa("focusout", "onBlur"), Pa(Jv, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), C("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), C("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), C("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), C("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), C("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), C("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Cs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ud = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cs));
  function Uc(n, r, i) {
    var u = n.type || "unknown-event";
    n.currentTarget = i, Ge(u, r, void 0, n), n.currentTarget = null;
  }
  function kl(n, r) {
    r = (r & 4) !== 0;
    for (var i = 0; i < n.length; i++) {
      var u = n[i], f = u.event;
      u = u.listeners;
      e: {
        var m = void 0;
        if (r) for (var E = u.length - 1; 0 <= E; E--) {
          var D = u[E], j = D.instance, Q = D.currentTarget;
          if (D = D.listener, j !== m && f.isPropagationStopped()) break e;
          Uc(f, D, Q), m = j;
        }
        else for (E = 0; E < u.length; E++) {
          if (D = u[E], j = D.instance, Q = D.currentTarget, D = D.listener, j !== m && f.isPropagationStopped()) break e;
          Uc(f, D, Q), m = j;
        }
      }
    }
    if (bo) throw n = O, bo = !1, O = null, n;
  }
  function Kt(n, r) {
    var i = r[bs];
    i === void 0 && (i = r[bs] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    i.has(u) || (Zv(r, n, 2, !1), i.add(u));
  }
  function zc(n, r, i) {
    var u = 0;
    r && (u |= 4), Zv(i, n, u, r);
  }
  var Pc = "_reactListening" + Math.random().toString(36).slice(2);
  function Ru(n) {
    if (!n[Pc]) {
      n[Pc] = !0, _.forEach(function(i) {
        i !== "selectionchange" && (Ud.has(i) || zc(i, !1, n), zc(i, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Pc] || (r[Pc] = !0, zc("selectionchange", !1, r));
    }
  }
  function Zv(n, r, i, u) {
    switch (Cu(r)) {
      case 1:
        var f = gu;
        break;
      case 4:
        f = _u;
        break;
      default:
        f = ji;
    }
    i = f.bind(null, r, i, n), f = void 0, !Ar || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (f = !0), u ? f !== void 0 ? n.addEventListener(r, i, { capture: !0, passive: f }) : n.addEventListener(r, i, !0) : f !== void 0 ? n.addEventListener(r, i, { passive: f }) : n.addEventListener(r, i, !1);
  }
  function Ic(n, r, i, u, f) {
    var m = u;
    if ((r & 1) === 0 && (r & 2) === 0 && u !== null) e: for (; ; ) {
      if (u === null) return;
      var E = u.tag;
      if (E === 3 || E === 4) {
        var D = u.stateNode.containerInfo;
        if (D === f || D.nodeType === 8 && D.parentNode === f) break;
        if (E === 4) for (E = u.return; E !== null; ) {
          var j = E.tag;
          if ((j === 3 || j === 4) && (j = E.stateNode.containerInfo, j === f || j.nodeType === 8 && j.parentNode === f)) return;
          E = E.return;
        }
        for (; D !== null; ) {
          if (E = Nl(D), E === null) return;
          if (j = E.tag, j === 5 || j === 6) {
            u = m = E;
            continue e;
          }
          D = D.parentNode;
        }
      }
      u = u.return;
    }
    ml(function() {
      var Q = m, ve = Zt(i), me = [];
      e: {
        var pe = jd.get(n);
        if (pe !== void 0) {
          var $e = Mt, Ke = n;
          switch (n) {
            case "keypress":
              if (Z(i) === 0) break e;
            case "keydown":
            case "keyup":
              $e = wd;
              break;
            case "focusin":
              Ke = "focus", $e = xl;
              break;
            case "focusout":
              Ke = "blur", $e = xl;
              break;
            case "beforeblur":
            case "afterblur":
              $e = xl;
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
              $e = Ai;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              $e = ti;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              $e = jv;
              break;
            case Qv:
            case Kv:
            case Xv:
              $e = Tc;
              break;
            case Jv:
              $e = ri;
              break;
            case "scroll":
              $e = dn;
              break;
            case "wheel":
              $e = ai;
              break;
            case "copy":
            case "cut":
            case "paste":
              $e = Dv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              $e = Ov;
          }
          var Ze = (r & 4) !== 0, An = !Ze && n === "scroll", $ = Ze ? pe !== null ? pe + "Capture" : null : pe;
          Ze = [];
          for (var P = Q, W; P !== null; ) {
            W = P;
            var he = W.stateNode;
            if (W.tag === 5 && he !== null && (W = he, $ !== null && (he = jr(P, $), he != null && Ze.push(ku(P, he, W)))), An) break;
            P = P.return;
          }
          0 < Ze.length && (pe = new $e(pe, Ke, null, i, ve), me.push({ event: pe, listeners: Ze }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (pe = n === "mouseover" || n === "pointerover", $e = n === "mouseout" || n === "pointerout", pe && i !== cn && (Ke = i.relatedTarget || i.fromElement) && (Nl(Ke) || Ke[oi])) break e;
          if (($e || pe) && (pe = ve.window === ve ? ve : (pe = ve.ownerDocument) ? pe.defaultView || pe.parentWindow : window, $e ? (Ke = i.relatedTarget || i.toElement, $e = Q, Ke = Ke ? Nl(Ke) : null, Ke !== null && (An = Et(Ke), Ke !== An || Ke.tag !== 5 && Ke.tag !== 6) && (Ke = null)) : ($e = null, Ke = Q), $e !== Ke)) {
            if (Ze = Ai, he = "onMouseLeave", $ = "onMouseEnter", P = "mouse", (n === "pointerout" || n === "pointerover") && (Ze = Ov, he = "onPointerLeave", $ = "onPointerEnter", P = "pointer"), An = $e == null ? pe : po($e), W = Ke == null ? pe : po(Ke), pe = new Ze(he, P + "leave", $e, i, ve), pe.target = An, pe.relatedTarget = W, he = null, Nl(ve) === Q && (Ze = new Ze($, P + "enter", Ke, i, ve), Ze.target = W, Ze.relatedTarget = An, he = Ze), An = he, $e && Ke) t: {
              for (Ze = $e, $ = Ke, P = 0, W = Ze; W; W = zi(W)) P++;
              for (W = 0, he = $; he; he = zi(he)) W++;
              for (; 0 < P - W; ) Ze = zi(Ze), P--;
              for (; 0 < W - P; ) $ = zi($), W--;
              for (; P--; ) {
                if (Ze === $ || $ !== null && Ze === $.alternate) break t;
                Ze = zi(Ze), $ = zi($);
              }
              Ze = null;
            }
            else Ze = null;
            $e !== null && eh(me, pe, $e, Ze, !1), Ke !== null && An !== null && eh(me, An, Ke, Ze, !0);
          }
        }
        e: {
          if (pe = Q ? po(Q) : window, $e = pe.nodeName && pe.nodeName.toLowerCase(), $e === "select" || $e === "input" && pe.type === "file") var Xe = Iy;
          else if (Fv(pe)) if (Hv) Xe = Yv;
          else {
            Xe = Wv;
            var st = Fy;
          }
          else ($e = pe.nodeName) && $e.toLowerCase() === "input" && (pe.type === "checkbox" || pe.type === "radio") && (Xe = Vy);
          if (Xe && (Xe = Xe(n, Q))) {
            kd(me, Xe, i, ve);
            break e;
          }
          st && st(n, pe, Q), n === "focusout" && (st = pe._wrapperState) && st.controlled && pe.type === "number" && ga(pe, "number", pe.value);
        }
        switch (st = Q ? po(Q) : window, n) {
          case "focusin":
            (Fv(st) || st.contentEditable === "true") && (bu = st, Dd = Q, Ss = null);
            break;
          case "focusout":
            Ss = Dd = bu = null;
            break;
          case "mousedown":
            Md = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Md = !1, Ld(me, i, ve);
            break;
          case "selectionchange":
            if ($y) break;
          case "keydown":
          case "keyup":
            Ld(me, i, ve);
        }
        var ft;
        if (Eu) e: {
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
        else xu ? zv(n, i) && (yt = "onCompositionEnd") : n === "keydown" && i.keyCode === 229 && (yt = "onCompositionStart");
        yt && (Av && i.locale !== "ko" && (xu || yt !== "onCompositionStart" ? yt === "onCompositionEnd" && xu && (ft = G()) : (co = ve, S = "value" in co ? co.value : co.textContent, xu = !0)), st = Es(Q, yt), 0 < st.length && (yt = new Cd(yt, n, null, i, ve), me.push({ event: yt, listeners: st }), ft ? yt.data = ft : (ft = Pv(i), ft !== null && (yt.data = ft)))), (ft = ms ? Iv(n, i) : zy(n, i)) && (Q = Es(Q, "onBeforeInput"), 0 < Q.length && (ve = new Cd("onBeforeInput", "beforeinput", null, i, ve), me.push({ event: ve, listeners: Q }), ve.data = ft));
      }
      kl(me, r);
    });
  }
  function ku(n, r, i) {
    return { instance: n, listener: r, currentTarget: i };
  }
  function Es(n, r) {
    for (var i = r + "Capture", u = []; n !== null; ) {
      var f = n, m = f.stateNode;
      f.tag === 5 && m !== null && (f = m, m = jr(n, i), m != null && u.unshift(ku(n, m, f)), m = jr(n, r), m != null && u.push(ku(n, m, f))), n = n.return;
    }
    return u;
  }
  function zi(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function eh(n, r, i, u, f) {
    for (var m = r._reactName, E = []; i !== null && i !== u; ) {
      var D = i, j = D.alternate, Q = D.stateNode;
      if (j !== null && j === u) break;
      D.tag === 5 && Q !== null && (D = Q, f ? (j = jr(i, m), j != null && E.unshift(ku(i, j, D))) : f || (j = jr(i, m), j != null && E.push(ku(i, j, D)))), i = i.return;
    }
    E.length !== 0 && n.push({ event: r, listeners: E });
  }
  var th = /\r\n?/g, Wy = /\u0000|\uFFFD/g;
  function nh(n) {
    return (typeof n == "string" ? n : "" + n).replace(th, `
`).replace(Wy, "");
  }
  function Fc(n, r, i) {
    if (r = nh(r), nh(n) !== r && i) throw Error(p(425));
  }
  function Pi() {
  }
  var xs = null, Tl = null;
  function Vc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Hc = typeof setTimeout == "function" ? setTimeout : void 0, zd = typeof clearTimeout == "function" ? clearTimeout : void 0, rh = typeof Promise == "function" ? Promise : void 0, Tu = typeof queueMicrotask == "function" ? queueMicrotask : typeof rh < "u" ? function(n) {
    return rh.resolve(null).then(n).catch($c);
  } : Hc;
  function $c(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Nu(n, r) {
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
  var Ii = Math.random().toString(36).slice(2), Lo = "__reactFiber$" + Ii, ws = "__reactProps$" + Ii, oi = "__reactContainer$" + Ii, bs = "__reactEvents$" + Ii, Du = "__reactListeners$" + Ii, Yy = "__reactHandles$" + Ii;
  function Nl(n) {
    var r = n[Lo];
    if (r) return r;
    for (var i = n.parentNode; i; ) {
      if (r = i[oi] || i[Lo]) {
        if (i = r.alternate, r.child !== null || i !== null && i.child !== null) for (n = ah(n); n !== null; ) {
          if (i = n[Lo]) return i;
          n = ah(n);
        }
        return r;
      }
      n = i, i = n.parentNode;
    }
    return null;
  }
  function ot(n) {
    return n = n[Lo] || n[oi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function po(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(p(33));
  }
  function En(n) {
    return n[ws] || null;
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
  var Tr = {}, Rn = Fa(Tr), Jn = Fa(!1), na = Tr;
  function ra(n, r) {
    var i = n.type.contextTypes;
    if (!i) return Tr;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var f = {}, m;
    for (m in i) f[m] = r[m];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = f), f;
  }
  function Fn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Mu() {
    pn(Jn), pn(Rn);
  }
  function oh(n, r, i) {
    if (Rn.current !== Tr) throw Error(p(168));
    rt(Rn, r), rt(Jn, i);
  }
  function Rs(n, r, i) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return i;
    u = u.getChildContext();
    for (var f in u) if (!(f in r)) throw Error(p(108, Pe(n) || "Unknown", f));
    return Se({}, i, u);
  }
  function ar(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Tr, na = Rn.current, rt(Rn, n), rt(Jn, Jn.current), !0;
  }
  function Bc(n, r, i) {
    var u = n.stateNode;
    if (!u) throw Error(p(169));
    i ? (n = Rs(n, r, na), u.__reactInternalMemoizedMergedChildContext = n, pn(Jn), pn(Rn), rt(Rn, n)) : pn(Jn), rt(Jn, i);
  }
  var Oo = null, Lu = !1, ii = !1;
  function qc(n) {
    Oo === null ? Oo = [n] : Oo.push(n);
  }
  function Fi(n) {
    Lu = !0, qc(n);
  }
  function jo() {
    if (!ii && Oo !== null) {
      ii = !0;
      var n = 0, r = $t;
      try {
        var i = Oo;
        for ($t = 1; n < i.length; n++) {
          var u = i[n];
          do
            u = u(!0);
          while (u !== null);
        }
        Oo = null, Lu = !1;
      } catch (f) {
        throw Oo !== null && (Oo = Oo.slice(n + 1)), hn(io, jo), f;
      } finally {
        $t = r, ii = !1;
      }
    }
    return null;
  }
  var Vi = [], Hi = 0, $i = null, li = 0, Vn = [], Va = 0, Ea = null, Ao = 1, Uo = "";
  function Dl(n, r) {
    Vi[Hi++] = li, Vi[Hi++] = $i, $i = n, li = r;
  }
  function ih(n, r, i) {
    Vn[Va++] = Ao, Vn[Va++] = Uo, Vn[Va++] = Ea, Ea = n;
    var u = Ao;
    n = Uo;
    var f = 32 - Ur(u) - 1;
    u &= ~(1 << f), i += 1;
    var m = 32 - Ur(r) + f;
    if (30 < m) {
      var E = f - f % 5;
      m = (u & (1 << E) - 1).toString(32), u >>= E, f -= E, Ao = 1 << 32 - Ur(r) + f | i << f | u, Uo = m + n;
    } else Ao = 1 << m | i << f | u, Uo = n;
  }
  function Wc(n) {
    n.return !== null && (Dl(n, 1), ih(n, 1, 0));
  }
  function Yc(n) {
    for (; n === $i; ) $i = Vi[--Hi], Vi[Hi] = null, li = Vi[--Hi], Vi[Hi] = null;
    for (; n === Ea; ) Ea = Vn[--Va], Vn[Va] = null, Uo = Vn[--Va], Vn[Va] = null, Ao = Vn[--Va], Vn[Va] = null;
  }
  var aa = null, oa = null, gn = !1, Ha = null;
  function Pd(n, r) {
    var i = Ya(5, null, null, 0);
    i.elementType = "DELETED", i.stateNode = r, i.return = n, r = n.deletions, r === null ? (n.deletions = [i], n.flags |= 16) : r.push(i);
  }
  function lh(n, r) {
    switch (n.tag) {
      case 5:
        var i = n.type;
        return r = r.nodeType !== 1 || i.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, aa = n, oa = Mo(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, aa = n, oa = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (i = Ea !== null ? { id: Ao, overflow: Uo } : null, n.memoizedState = { dehydrated: r, treeContext: i, retryLane: 1073741824 }, i = Ya(18, null, null, 0), i.stateNode = r, i.return = n, n.child = i, aa = n, oa = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Id(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Fd(n) {
    if (gn) {
      var r = oa;
      if (r) {
        var i = r;
        if (!lh(n, r)) {
          if (Id(n)) throw Error(p(418));
          r = Mo(i.nextSibling);
          var u = aa;
          r && lh(n, r) ? Pd(u, i) : (n.flags = n.flags & -4097 | 2, gn = !1, aa = n);
        }
      } else {
        if (Id(n)) throw Error(p(418));
        n.flags = n.flags & -4097 | 2, gn = !1, aa = n;
      }
    }
  }
  function Zn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    aa = n;
  }
  function Gc(n) {
    if (n !== aa) return !1;
    if (!gn) return Zn(n), gn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Vc(n.type, n.memoizedProps)), r && (r = oa)) {
      if (Id(n)) throw ks(), Error(p(418));
      for (; r; ) Pd(n, r), r = Mo(r.nextSibling);
    }
    if (Zn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(p(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var i = n.data;
            if (i === "/$") {
              if (r === 0) {
                oa = Mo(n.nextSibling);
                break e;
              }
              r--;
            } else i !== "$" && i !== "$!" && i !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        oa = null;
      }
    } else oa = aa ? Mo(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ks() {
    for (var n = oa; n; ) n = Mo(n.nextSibling);
  }
  function Bi() {
    oa = aa = null, gn = !1;
  }
  function ui(n) {
    Ha === null ? Ha = [n] : Ha.push(n);
  }
  var Gy = se.ReactCurrentBatchConfig;
  function Ml(n, r, i) {
    if (n = i.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (i._owner) {
        if (i = i._owner, i) {
          if (i.tag !== 1) throw Error(p(309));
          var u = i.stateNode;
        }
        if (!u) throw Error(p(147, n));
        var f = u, m = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(E) {
          var D = f.refs;
          E === null ? delete D[m] : D[m] = E;
        }, r._stringRef = m, r);
      }
      if (typeof n != "string") throw Error(p(284));
      if (!i._owner) throw Error(p(290, n));
    }
    return n;
  }
  function Qc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(p(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
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
      return $ = Ji($, P), $.index = 0, $.sibling = null, $;
    }
    function m($, P, W) {
      return $.index = W, n ? (W = $.alternate, W !== null ? (W = W.index, W < P ? ($.flags |= 2, P) : W) : ($.flags |= 2, P)) : ($.flags |= 1048576, P);
    }
    function E($) {
      return n && $.alternate === null && ($.flags |= 2), $;
    }
    function D($, P, W, he) {
      return P === null || P.tag !== 6 ? (P = yp(W, $.mode, he), P.return = $, P) : (P = f(P, W), P.return = $, P);
    }
    function j($, P, W, he) {
      var Xe = W.type;
      return Xe === Ce ? ve($, P, W.props.children, he, W.key) : P !== null && (P.elementType === Xe || typeof Xe == "object" && Xe !== null && Xe.$$typeof === je && uh(Xe) === P.type) ? (he = f(P, W.props), he.ref = Ml($, P, W), he.return = $, he) : (he = rc(W.type, W.key, W.props, null, $.mode, he), he.ref = Ml($, P, W), he.return = $, he);
    }
    function Q($, P, W, he) {
      return P === null || P.tag !== 4 || P.stateNode.containerInfo !== W.containerInfo || P.stateNode.implementation !== W.implementation ? (P = Nf(W, $.mode, he), P.return = $, P) : (P = f(P, W.children || []), P.return = $, P);
    }
    function ve($, P, W, he, Xe) {
      return P === null || P.tag !== 7 ? (P = vi(W, $.mode, he, Xe), P.return = $, P) : (P = f(P, W), P.return = $, P);
    }
    function me($, P, W) {
      if (typeof P == "string" && P !== "" || typeof P == "number") return P = yp("" + P, $.mode, W), P.return = $, P;
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case ie:
            return W = rc(P.type, P.key, P.props, null, $.mode, W), W.ref = Ml($, null, P), W.return = $, W;
          case ne:
            return P = Nf(P, $.mode, W), P.return = $, P;
          case je:
            var he = P._init;
            return me($, he(P._payload), W);
        }
        if (nr(P) || Le(P)) return P = vi(P, $.mode, W, null), P.return = $, P;
        Qc($, P);
      }
      return null;
    }
    function pe($, P, W, he) {
      var Xe = P !== null ? P.key : null;
      if (typeof W == "string" && W !== "" || typeof W == "number") return Xe !== null ? null : D($, P, "" + W, he);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case ie:
            return W.key === Xe ? j($, P, W, he) : null;
          case ne:
            return W.key === Xe ? Q($, P, W, he) : null;
          case je:
            return Xe = W._init, pe(
              $,
              P,
              Xe(W._payload),
              he
            );
        }
        if (nr(W) || Le(W)) return Xe !== null ? null : ve($, P, W, he, null);
        Qc($, W);
      }
      return null;
    }
    function $e($, P, W, he, Xe) {
      if (typeof he == "string" && he !== "" || typeof he == "number") return $ = $.get(W) || null, D(P, $, "" + he, Xe);
      if (typeof he == "object" && he !== null) {
        switch (he.$$typeof) {
          case ie:
            return $ = $.get(he.key === null ? W : he.key) || null, j(P, $, he, Xe);
          case ne:
            return $ = $.get(he.key === null ? W : he.key) || null, Q(P, $, he, Xe);
          case je:
            var st = he._init;
            return $e($, P, W, st(he._payload), Xe);
        }
        if (nr(he) || Le(he)) return $ = $.get(W) || null, ve(P, $, he, Xe, null);
        Qc(P, he);
      }
      return null;
    }
    function Ke($, P, W, he) {
      for (var Xe = null, st = null, ft = P, yt = P = 0, lr = null; ft !== null && yt < W.length; yt++) {
        ft.index > yt ? (lr = ft, ft = null) : lr = ft.sibling;
        var Wt = pe($, ft, W[yt], he);
        if (Wt === null) {
          ft === null && (ft = lr);
          break;
        }
        n && ft && Wt.alternate === null && r($, ft), P = m(Wt, P, yt), st === null ? Xe = Wt : st.sibling = Wt, st = Wt, ft = lr;
      }
      if (yt === W.length) return i($, ft), gn && Dl($, yt), Xe;
      if (ft === null) {
        for (; yt < W.length; yt++) ft = me($, W[yt], he), ft !== null && (P = m(ft, P, yt), st === null ? Xe = ft : st.sibling = ft, st = ft);
        return gn && Dl($, yt), Xe;
      }
      for (ft = u($, ft); yt < W.length; yt++) lr = $e(ft, $, yt, W[yt], he), lr !== null && (n && lr.alternate !== null && ft.delete(lr.key === null ? yt : lr.key), P = m(lr, P, yt), st === null ? Xe = lr : st.sibling = lr, st = lr);
      return n && ft.forEach(function(tl) {
        return r($, tl);
      }), gn && Dl($, yt), Xe;
    }
    function Ze($, P, W, he) {
      var Xe = Le(W);
      if (typeof Xe != "function") throw Error(p(150));
      if (W = Xe.call(W), W == null) throw Error(p(151));
      for (var st = Xe = null, ft = P, yt = P = 0, lr = null, Wt = W.next(); ft !== null && !Wt.done; yt++, Wt = W.next()) {
        ft.index > yt ? (lr = ft, ft = null) : lr = ft.sibling;
        var tl = pe($, ft, Wt.value, he);
        if (tl === null) {
          ft === null && (ft = lr);
          break;
        }
        n && ft && tl.alternate === null && r($, ft), P = m(tl, P, yt), st === null ? Xe = tl : st.sibling = tl, st = tl, ft = lr;
      }
      if (Wt.done) return i(
        $,
        ft
      ), gn && Dl($, yt), Xe;
      if (ft === null) {
        for (; !Wt.done; yt++, Wt = W.next()) Wt = me($, Wt.value, he), Wt !== null && (P = m(Wt, P, yt), st === null ? Xe = Wt : st.sibling = Wt, st = Wt);
        return gn && Dl($, yt), Xe;
      }
      for (ft = u($, ft); !Wt.done; yt++, Wt = W.next()) Wt = $e(ft, $, yt, Wt.value, he), Wt !== null && (n && Wt.alternate !== null && ft.delete(Wt.key === null ? yt : Wt.key), P = m(Wt, P, yt), st === null ? Xe = Wt : st.sibling = Wt, st = Wt);
      return n && ft.forEach(function(Bh) {
        return r($, Bh);
      }), gn && Dl($, yt), Xe;
    }
    function An($, P, W, he) {
      if (typeof W == "object" && W !== null && W.type === Ce && W.key === null && (W = W.props.children), typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case ie:
            e: {
              for (var Xe = W.key, st = P; st !== null; ) {
                if (st.key === Xe) {
                  if (Xe = W.type, Xe === Ce) {
                    if (st.tag === 7) {
                      i($, st.sibling), P = f(st, W.props.children), P.return = $, $ = P;
                      break e;
                    }
                  } else if (st.elementType === Xe || typeof Xe == "object" && Xe !== null && Xe.$$typeof === je && uh(Xe) === st.type) {
                    i($, st.sibling), P = f(st, W.props), P.ref = Ml($, st, W), P.return = $, $ = P;
                    break e;
                  }
                  i($, st);
                  break;
                } else r($, st);
                st = st.sibling;
              }
              W.type === Ce ? (P = vi(W.props.children, $.mode, he, W.key), P.return = $, $ = P) : (he = rc(W.type, W.key, W.props, null, $.mode, he), he.ref = Ml($, P, W), he.return = $, $ = he);
            }
            return E($);
          case ne:
            e: {
              for (st = W.key; P !== null; ) {
                if (P.key === st) if (P.tag === 4 && P.stateNode.containerInfo === W.containerInfo && P.stateNode.implementation === W.implementation) {
                  i($, P.sibling), P = f(P, W.children || []), P.return = $, $ = P;
                  break e;
                } else {
                  i($, P);
                  break;
                }
                else r($, P);
                P = P.sibling;
              }
              P = Nf(W, $.mode, he), P.return = $, $ = P;
            }
            return E($);
          case je:
            return st = W._init, An($, P, st(W._payload), he);
        }
        if (nr(W)) return Ke($, P, W, he);
        if (Le(W)) return Ze($, P, W, he);
        Qc($, W);
      }
      return typeof W == "string" && W !== "" || typeof W == "number" ? (W = "" + W, P !== null && P.tag === 6 ? (i($, P.sibling), P = f(P, W), P.return = $, $ = P) : (i($, P), P = yp(W, $.mode, he), P.return = $, $ = P), E($)) : i($, P);
    }
    return An;
  }
  var Mn = Ll(!0), Ie = Ll(!1), xa = Fa(null), ia = null, Ou = null, Vd = null;
  function Hd() {
    Vd = Ou = ia = null;
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
  function xn(n, r) {
    ia = n, Vd = Ou = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && ($n = !0), n.firstContext = null);
  }
  function $a(n) {
    var r = n._currentValue;
    if (Vd !== n) if (n = { context: n, memoizedValue: r, next: null }, Ou === null) {
      if (ia === null) throw Error(p(308));
      Ou = n, ia.dependencies = { lanes: 0, firstContext: n };
    } else Ou = Ou.next = n;
    return r;
  }
  var Ol = null;
  function qd(n) {
    Ol === null ? Ol = [n] : Ol.push(n);
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
  function si(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function qi(n, r, i) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (zt & 2) !== 0) {
      var f = u.pending;
      return f === null ? r.next = r : (r.next = f.next, f.next = r), u.pending = r, wa(n, i);
    }
    return f = u.interleaved, f === null ? (r.next = r, qd(u)) : (r.next = f.next, f.next = r), u.interleaved = r, wa(n, i);
  }
  function Kc(n, r, i) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (i & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, i |= u, r.lanes = i, ei(n, i);
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
  function Ts(n, r, i, u) {
    var f = n.updateQueue;
    ba = !1;
    var m = f.firstBaseUpdate, E = f.lastBaseUpdate, D = f.shared.pending;
    if (D !== null) {
      f.shared.pending = null;
      var j = D, Q = j.next;
      j.next = null, E === null ? m = Q : E.next = Q, E = j;
      var ve = n.alternate;
      ve !== null && (ve = ve.updateQueue, D = ve.lastBaseUpdate, D !== E && (D === null ? ve.firstBaseUpdate = Q : D.next = Q, ve.lastBaseUpdate = j));
    }
    if (m !== null) {
      var me = f.baseState;
      E = 0, ve = Q = j = null, D = m;
      do {
        var pe = D.lane, $e = D.eventTime;
        if ((u & pe) === pe) {
          ve !== null && (ve = ve.next = {
            eventTime: $e,
            lane: 0,
            tag: D.tag,
            payload: D.payload,
            callback: D.callback,
            next: null
          });
          e: {
            var Ke = n, Ze = D;
            switch (pe = r, $e = i, Ze.tag) {
              case 1:
                if (Ke = Ze.payload, typeof Ke == "function") {
                  me = Ke.call($e, me, pe);
                  break e;
                }
                me = Ke;
                break e;
              case 3:
                Ke.flags = Ke.flags & -65537 | 128;
              case 0:
                if (Ke = Ze.payload, pe = typeof Ke == "function" ? Ke.call($e, me, pe) : Ke, pe == null) break e;
                me = Se({}, me, pe);
                break e;
              case 2:
                ba = !0;
            }
          }
          D.callback !== null && D.lane !== 0 && (n.flags |= 64, pe = f.effects, pe === null ? f.effects = [D] : pe.push(D));
        } else $e = { eventTime: $e, lane: pe, tag: D.tag, payload: D.payload, callback: D.callback, next: null }, ve === null ? (Q = ve = $e, j = me) : ve = ve.next = $e, E |= pe;
        if (D = D.next, D === null) {
          if (D = f.shared.pending, D === null) break;
          pe = D, D = pe.next, pe.next = null, f.lastBaseUpdate = pe, f.shared.pending = null;
        }
      } while (!0);
      if (ve === null && (j = me), f.baseState = j, f.firstBaseUpdate = Q, f.lastBaseUpdate = ve, r = f.shared.interleaved, r !== null) {
        f = r;
        do
          E |= f.lane, f = f.next;
        while (f !== r);
      } else m === null && (f.shared.lanes = 0);
      Vo |= E, n.lanes = E, n.memoizedState = me;
    }
  }
  function Gd(n, r, i) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], f = u.callback;
      if (f !== null) {
        if (u.callback = null, u = i, typeof f != "function") throw Error(p(191, f));
        f.call(u);
      }
    }
  }
  var Ns = {}, zo = Fa(Ns), Ds = Fa(Ns), Ms = Fa(Ns);
  function jl(n) {
    if (n === Ns) throw Error(p(174));
    return n;
  }
  function Qd(n, r) {
    switch (rt(Ms, r), rt(Ds, n), rt(zo, Ns), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : _a(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = _a(r, n);
    }
    pn(zo), rt(zo, r);
  }
  function Al() {
    pn(zo), pn(Ds), pn(Ms);
  }
  function fh(n) {
    jl(Ms.current);
    var r = jl(zo.current), i = _a(r, n.type);
    r !== i && (rt(Ds, n), rt(zo, i));
  }
  function Xc(n) {
    Ds.current === n && (pn(zo), pn(Ds));
  }
  var wn = Fa(0);
  function Jc(n) {
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
  var Nt = se.ReactCurrentDispatcher, Bt = se.ReactCurrentBatchConfig, an = 0, qt = null, Hn = null, or = null, Zc = !1, Os = !1, Ul = 0, fe = 0;
  function Ht() {
    throw Error(p(321));
  }
  function pt(n, r) {
    if (r === null) return !1;
    for (var i = 0; i < r.length && i < n.length; i++) if (!fo(n[i], r[i])) return !1;
    return !0;
  }
  function Wi(n, r, i, u, f, m) {
    if (an = m, qt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Nt.current = n === null || n.memoizedState === null ? hf : Is, n = i(u, f), Os) {
      m = 0;
      do {
        if (Os = !1, Ul = 0, 25 <= m) throw Error(p(301));
        m += 1, or = Hn = null, r.updateQueue = null, Nt.current = mf, n = i(u, f);
      } while (Os);
    }
    if (Nt.current = Vl, r = Hn !== null && Hn.next !== null, an = 0, or = Hn = qt = null, Zc = !1, r) throw Error(p(300));
    return n;
  }
  function vo() {
    var n = Ul !== 0;
    return Ul = 0, n;
  }
  function Nr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return or === null ? qt.memoizedState = or = n : or = or.next = n, or;
  }
  function Ln() {
    if (Hn === null) {
      var n = qt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Hn.next;
    var r = or === null ? qt.memoizedState : or.next;
    if (r !== null) or = r, Hn = n;
    else {
      if (n === null) throw Error(p(310));
      Hn = n, n = { memoizedState: Hn.memoizedState, baseState: Hn.baseState, baseQueue: Hn.baseQueue, queue: Hn.queue, next: null }, or === null ? qt.memoizedState = or = n : or = or.next = n;
    }
    return or;
  }
  function ci(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Yi(n) {
    var r = Ln(), i = r.queue;
    if (i === null) throw Error(p(311));
    i.lastRenderedReducer = n;
    var u = Hn, f = u.baseQueue, m = i.pending;
    if (m !== null) {
      if (f !== null) {
        var E = f.next;
        f.next = m.next, m.next = E;
      }
      u.baseQueue = f = m, i.pending = null;
    }
    if (f !== null) {
      m = f.next, u = u.baseState;
      var D = E = null, j = null, Q = m;
      do {
        var ve = Q.lane;
        if ((an & ve) === ve) j !== null && (j = j.next = { lane: 0, action: Q.action, hasEagerState: Q.hasEagerState, eagerState: Q.eagerState, next: null }), u = Q.hasEagerState ? Q.eagerState : n(u, Q.action);
        else {
          var me = {
            lane: ve,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null
          };
          j === null ? (D = j = me, E = u) : j = j.next = me, qt.lanes |= ve, Vo |= ve;
        }
        Q = Q.next;
      } while (Q !== null && Q !== m);
      j === null ? E = u : j.next = D, fo(u, r.memoizedState) || ($n = !0), r.memoizedState = u, r.baseState = E, r.baseQueue = j, i.lastRenderedState = u;
    }
    if (n = i.interleaved, n !== null) {
      f = n;
      do
        m = f.lane, qt.lanes |= m, Vo |= m, f = f.next;
      while (f !== n);
    } else f === null && (i.lanes = 0);
    return [r.memoizedState, i.dispatch];
  }
  function zl(n) {
    var r = Ln(), i = r.queue;
    if (i === null) throw Error(p(311));
    i.lastRenderedReducer = n;
    var u = i.dispatch, f = i.pending, m = r.memoizedState;
    if (f !== null) {
      i.pending = null;
      var E = f = f.next;
      do
        m = n(m, E.action), E = E.next;
      while (E !== f);
      fo(m, r.memoizedState) || ($n = !0), r.memoizedState = m, r.baseQueue === null && (r.baseState = m), i.lastRenderedState = m;
    }
    return [m, u];
  }
  function ef() {
  }
  function tf(n, r) {
    var i = qt, u = Ln(), f = r(), m = !fo(u.memoizedState, f);
    if (m && (u.memoizedState = f, $n = !0), u = u.queue, js(af.bind(null, i, u, n), [n]), u.getSnapshot !== r || m || or !== null && or.memoizedState.tag & 1) {
      if (i.flags |= 2048, Pl(9, rf.bind(null, i, u, f, r), void 0, null), er === null) throw Error(p(349));
      (an & 30) !== 0 || nf(i, r, f);
    }
    return f;
  }
  function nf(n, r, i) {
    n.flags |= 16384, n = { getSnapshot: r, value: i }, r = qt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, qt.updateQueue = r, r.stores = [n]) : (i = r.stores, i === null ? r.stores = [n] : i.push(n));
  }
  function rf(n, r, i, u) {
    r.value = i, r.getSnapshot = u, of(r) && lf(n);
  }
  function af(n, r, i) {
    return i(function() {
      of(r) && lf(n);
    });
  }
  function of(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var i = r();
      return !fo(n, i);
    } catch {
      return !0;
    }
  }
  function lf(n) {
    var r = wa(n, 1);
    r !== null && Hr(r, n, 1, -1);
  }
  function uf(n) {
    var r = Nr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ci, lastRenderedState: n }, r.queue = n, n = n.dispatch = Fl.bind(null, qt, n), [r.memoizedState, n];
  }
  function Pl(n, r, i, u) {
    return n = { tag: n, create: r, destroy: i, deps: u, next: null }, r = qt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, qt.updateQueue = r, r.lastEffect = n.next = n) : (i = r.lastEffect, i === null ? r.lastEffect = n.next = n : (u = i.next, i.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function sf() {
    return Ln().memoizedState;
  }
  function ju(n, r, i, u) {
    var f = Nr();
    qt.flags |= n, f.memoizedState = Pl(1 | r, i, void 0, u === void 0 ? null : u);
  }
  function Au(n, r, i, u) {
    var f = Ln();
    u = u === void 0 ? null : u;
    var m = void 0;
    if (Hn !== null) {
      var E = Hn.memoizedState;
      if (m = E.destroy, u !== null && pt(u, E.deps)) {
        f.memoizedState = Pl(r, i, m, u);
        return;
      }
    }
    qt.flags |= n, f.memoizedState = Pl(1 | r, i, m, u);
  }
  function cf(n, r) {
    return ju(8390656, 8, n, r);
  }
  function js(n, r) {
    return Au(2048, 8, n, r);
  }
  function ff(n, r) {
    return Au(4, 2, n, r);
  }
  function As(n, r) {
    return Au(4, 4, n, r);
  }
  function Il(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function df(n, r, i) {
    return i = i != null ? i.concat([n]) : null, Au(4, 4, Il.bind(null, r, n), i);
  }
  function Us() {
  }
  function pf(n, r) {
    var i = Ln();
    r = r === void 0 ? null : r;
    var u = i.memoizedState;
    return u !== null && r !== null && pt(r, u[1]) ? u[0] : (i.memoizedState = [n, r], n);
  }
  function vf(n, r) {
    var i = Ln();
    r = r === void 0 ? null : r;
    var u = i.memoizedState;
    return u !== null && r !== null && pt(r, u[1]) ? u[0] : (n = n(), i.memoizedState = [n, r], n);
  }
  function Kd(n, r, i) {
    return (an & 21) === 0 ? (n.baseState && (n.baseState = !1, $n = !0), n.memoizedState = i) : (fo(i, r) || (i = vu(), qt.lanes |= i, Vo |= i, n.baseState = !0), r);
  }
  function zs(n, r) {
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
    return Ln().memoizedState;
  }
  function Ps(n, r, i) {
    var u = Ho(n);
    if (i = { lane: u, action: i, hasEagerState: !1, eagerState: null, next: null }, la(n)) dh(r, i);
    else if (i = Wd(n, r, i, u), i !== null) {
      var f = Wn();
      Hr(i, n, u, f), un(i, r, u);
    }
  }
  function Fl(n, r, i) {
    var u = Ho(n), f = { lane: u, action: i, hasEagerState: !1, eagerState: null, next: null };
    if (la(n)) dh(r, f);
    else {
      var m = n.alternate;
      if (n.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer, m !== null)) try {
        var E = r.lastRenderedState, D = m(E, i);
        if (f.hasEagerState = !0, f.eagerState = D, fo(D, E)) {
          var j = r.interleaved;
          j === null ? (f.next = f, qd(r)) : (f.next = j.next, j.next = f), r.interleaved = f;
          return;
        }
      } catch {
      }
      i = Wd(n, r, f, u), i !== null && (f = Wn(), Hr(i, n, u, f), un(i, r, u));
    }
  }
  function la(n) {
    var r = n.alternate;
    return n === qt || r !== null && r === qt;
  }
  function dh(n, r) {
    Os = Zc = !0;
    var i = n.pending;
    i === null ? r.next = r : (r.next = i.next, i.next = r), n.pending = r;
  }
  function un(n, r, i) {
    if ((i & 4194240) !== 0) {
      var u = r.lanes;
      u &= n.pendingLanes, i |= u, r.lanes = i, ei(n, i);
    }
  }
  var Vl = { readContext: $a, useCallback: Ht, useContext: Ht, useEffect: Ht, useImperativeHandle: Ht, useInsertionEffect: Ht, useLayoutEffect: Ht, useMemo: Ht, useReducer: Ht, useRef: Ht, useState: Ht, useDebugValue: Ht, useDeferredValue: Ht, useTransition: Ht, useMutableSource: Ht, useSyncExternalStore: Ht, useId: Ht, unstable_isNewReconciler: !1 }, hf = { readContext: $a, useCallback: function(n, r) {
    return Nr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: $a, useEffect: cf, useImperativeHandle: function(n, r, i) {
    return i = i != null ? i.concat([n]) : null, ju(
      4194308,
      4,
      Il.bind(null, r, n),
      i
    );
  }, useLayoutEffect: function(n, r) {
    return ju(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return ju(4, 2, n, r);
  }, useMemo: function(n, r) {
    var i = Nr();
    return r = r === void 0 ? null : r, n = n(), i.memoizedState = [n, r], n;
  }, useReducer: function(n, r, i) {
    var u = Nr();
    return r = i !== void 0 ? i(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = Ps.bind(null, qt, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = Nr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: uf, useDebugValue: Us, useDeferredValue: function(n) {
    return Nr().memoizedState = n;
  }, useTransition: function() {
    var n = uf(!1), r = n[0];
    return n = zs.bind(null, n[1]), Nr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, i) {
    var u = qt, f = Nr();
    if (gn) {
      if (i === void 0) throw Error(p(407));
      i = i();
    } else {
      if (i = r(), er === null) throw Error(p(349));
      (an & 30) !== 0 || nf(u, r, i);
    }
    f.memoizedState = i;
    var m = { value: i, getSnapshot: r };
    return f.queue = m, cf(af.bind(
      null,
      u,
      m,
      n
    ), [n]), u.flags |= 2048, Pl(9, rf.bind(null, u, m, i, r), void 0, null), i;
  }, useId: function() {
    var n = Nr(), r = er.identifierPrefix;
    if (gn) {
      var i = Uo, u = Ao;
      i = (u & ~(1 << 32 - Ur(u) - 1)).toString(32) + i, r = ":" + r + "R" + i, i = Ul++, 0 < i && (r += "H" + i.toString(32)), r += ":";
    } else i = fe++, r = ":" + r + "r" + i.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Is = {
    readContext: $a,
    useCallback: pf,
    useContext: $a,
    useEffect: js,
    useImperativeHandle: df,
    useInsertionEffect: ff,
    useLayoutEffect: As,
    useMemo: vf,
    useReducer: Yi,
    useRef: sf,
    useState: function() {
      return Yi(ci);
    },
    useDebugValue: Us,
    useDeferredValue: function(n) {
      var r = Ln();
      return Kd(r, Hn.memoizedState, n);
    },
    useTransition: function() {
      var n = Yi(ci)[0], r = Ln().memoizedState;
      return [n, r];
    },
    useMutableSource: ef,
    useSyncExternalStore: tf,
    useId: Xd,
    unstable_isNewReconciler: !1
  }, mf = { readContext: $a, useCallback: pf, useContext: $a, useEffect: js, useImperativeHandle: df, useInsertionEffect: ff, useLayoutEffect: As, useMemo: vf, useReducer: zl, useRef: sf, useState: function() {
    return zl(ci);
  }, useDebugValue: Us, useDeferredValue: function(n) {
    var r = Ln();
    return Hn === null ? r.memoizedState = n : Kd(r, Hn.memoizedState, n);
  }, useTransition: function() {
    var n = zl(ci)[0], r = Ln().memoizedState;
    return [n, r];
  }, useMutableSource: ef, useSyncExternalStore: tf, useId: Xd, unstable_isNewReconciler: !1 };
  function ho(n, r) {
    if (n && n.defaultProps) {
      r = Se({}, r), n = n.defaultProps;
      for (var i in n) r[i] === void 0 && (r[i] = n[i]);
      return r;
    }
    return r;
  }
  function Jd(n, r, i, u) {
    r = n.memoizedState, i = i(u, r), i = i == null ? r : Se({}, r, i), n.memoizedState = i, n.lanes === 0 && (n.updateQueue.baseState = i);
  }
  var yf = { isMounted: function(n) {
    return (n = n._reactInternals) ? Et(n) === n : !1;
  }, enqueueSetState: function(n, r, i) {
    n = n._reactInternals;
    var u = Wn(), f = Ho(n), m = si(u, f);
    m.payload = r, i != null && (m.callback = i), r = qi(n, m, f), r !== null && (Hr(r, n, f, u), Kc(r, n, f));
  }, enqueueReplaceState: function(n, r, i) {
    n = n._reactInternals;
    var u = Wn(), f = Ho(n), m = si(u, f);
    m.tag = 1, m.payload = r, i != null && (m.callback = i), r = qi(n, m, f), r !== null && (Hr(r, n, f, u), Kc(r, n, f));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var i = Wn(), u = Ho(n), f = si(i, u);
    f.tag = 2, r != null && (f.callback = r), r = qi(n, f, u), r !== null && (Hr(r, n, u, i), Kc(r, n, u));
  } };
  function ph(n, r, i, u, f, m, E) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, m, E) : r.prototype && r.prototype.isPureReactComponent ? !gs(i, u) || !gs(f, m) : !0;
  }
  function gf(n, r, i) {
    var u = !1, f = Tr, m = r.contextType;
    return typeof m == "object" && m !== null ? m = $a(m) : (f = Fn(r) ? na : Rn.current, u = r.contextTypes, m = (u = u != null) ? ra(n, f) : Tr), r = new r(i, m), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = yf, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = f, n.__reactInternalMemoizedMaskedChildContext = m), r;
  }
  function vh(n, r, i, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(i, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(i, u), r.state !== n && yf.enqueueReplaceState(r, r.state, null);
  }
  function Fs(n, r, i, u) {
    var f = n.stateNode;
    f.props = i, f.state = n.memoizedState, f.refs = {}, Yd(n);
    var m = r.contextType;
    typeof m == "object" && m !== null ? f.context = $a(m) : (m = Fn(r) ? na : Rn.current, f.context = ra(n, m)), f.state = n.memoizedState, m = r.getDerivedStateFromProps, typeof m == "function" && (Jd(n, r, m, i), f.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (r = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), r !== f.state && yf.enqueueReplaceState(f, f.state, null), Ts(n, i, f, u), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Hl(n, r) {
    try {
      var i = "", u = r;
      do
        i += ht(u), u = u.return;
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
  var _f = typeof WeakMap == "function" ? WeakMap : Map;
  function hh(n, r, i) {
    i = si(-1, i), i.tag = 3, i.payload = { element: null };
    var u = r.value;
    return i.callback = function() {
      Vu || (Vu = !0, ql = u), ep(n, r);
    }, i;
  }
  function tp(n, r, i) {
    i = si(-1, i), i.tag = 3;
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
      ep(n, r), typeof u != "function" && (Ki === null ? Ki = /* @__PURE__ */ new Set([this]) : Ki.add(this));
      var E = r.stack;
      this.componentDidCatch(r.value, { componentStack: E !== null ? E : "" });
    }), i;
  }
  function np(n, r, i) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new _f();
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
  function Gi(n, r, i, u, f) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, i.flags |= 131072, i.flags &= -52805, i.tag === 1 && (i.alternate === null ? i.tag = 17 : (r = si(-1, 1), r.tag = 2, qi(i, r, 1))), i.lanes |= 1), n) : (n.flags |= 65536, n.lanes = f, n);
  }
  var Vs = se.ReactCurrentOwner, $n = !1;
  function vr(n, r, i, u) {
    r.child = n === null ? Ie(r, null, i, u) : Mn(r, n.child, i, u);
  }
  function ua(n, r, i, u, f) {
    i = i.render;
    var m = r.ref;
    return xn(r, f), u = Wi(n, r, i, u, m, f), i = vo(), n !== null && !$n ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, qa(n, r, f)) : (gn && i && Wc(r), r.flags |= 1, vr(n, r, u, f), r.child);
  }
  function $l(n, r, i, u, f) {
    if (n === null) {
      var m = i.type;
      return typeof m == "function" && !mp(m) && m.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (r.tag = 15, r.type = m, wt(n, r, m, u, f)) : (n = rc(i.type, null, u, r, r.mode, f), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (m = n.child, (n.lanes & f) === 0) {
      var E = m.memoizedProps;
      if (i = i.compare, i = i !== null ? i : gs, i(E, u) && n.ref === r.ref) return qa(n, r, f);
    }
    return r.flags |= 1, n = Ji(m, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function wt(n, r, i, u, f) {
    if (n !== null) {
      var m = n.memoizedProps;
      if (gs(m, u) && n.ref === r.ref) if ($n = !1, r.pendingProps = u = m, (n.lanes & f) !== 0) (n.flags & 131072) !== 0 && ($n = !0);
      else return r.lanes = n.lanes, qa(n, r, f);
    }
    return yh(n, r, i, u, f);
  }
  function Hs(n, r, i) {
    var u = r.pendingProps, f = u.children, m = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, rt(Pu, Ra), Ra |= i;
    else {
      if ((i & 1073741824) === 0) return n = m !== null ? m.baseLanes | i : i, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, rt(Pu, Ra), Ra |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = m !== null ? m.baseLanes : i, rt(Pu, Ra), Ra |= u;
    }
    else m !== null ? (u = m.baseLanes | i, r.memoizedState = null) : u = i, rt(Pu, Ra), Ra |= u;
    return vr(n, r, f, i), r.child;
  }
  function rp(n, r) {
    var i = r.ref;
    (n === null && i !== null || n !== null && n.ref !== i) && (r.flags |= 512, r.flags |= 2097152);
  }
  function yh(n, r, i, u, f) {
    var m = Fn(i) ? na : Rn.current;
    return m = ra(r, m), xn(r, f), i = Wi(n, r, i, u, m, f), u = vo(), n !== null && !$n ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, qa(n, r, f)) : (gn && u && Wc(r), r.flags |= 1, vr(n, r, i, f), r.child);
  }
  function gh(n, r, i, u, f) {
    if (Fn(i)) {
      var m = !0;
      ar(r);
    } else m = !1;
    if (xn(r, f), r.stateNode === null) Ba(n, r), gf(r, i, u), Fs(r, i, u, f), u = !0;
    else if (n === null) {
      var E = r.stateNode, D = r.memoizedProps;
      E.props = D;
      var j = E.context, Q = i.contextType;
      typeof Q == "object" && Q !== null ? Q = $a(Q) : (Q = Fn(i) ? na : Rn.current, Q = ra(r, Q));
      var ve = i.getDerivedStateFromProps, me = typeof ve == "function" || typeof E.getSnapshotBeforeUpdate == "function";
      me || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (D !== u || j !== Q) && vh(r, E, u, Q), ba = !1;
      var pe = r.memoizedState;
      E.state = pe, Ts(r, u, E, f), j = r.memoizedState, D !== u || pe !== j || Jn.current || ba ? (typeof ve == "function" && (Jd(r, i, ve, u), j = r.memoizedState), (D = ba || ph(r, i, D, u, pe, j, Q)) ? (me || typeof E.UNSAFE_componentWillMount != "function" && typeof E.componentWillMount != "function" || (typeof E.componentWillMount == "function" && E.componentWillMount(), typeof E.UNSAFE_componentWillMount == "function" && E.UNSAFE_componentWillMount()), typeof E.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = j), E.props = u, E.state = j, E.context = Q, u = D) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      E = r.stateNode, sh(n, r), D = r.memoizedProps, Q = r.type === r.elementType ? D : ho(r.type, D), E.props = Q, me = r.pendingProps, pe = E.context, j = i.contextType, typeof j == "object" && j !== null ? j = $a(j) : (j = Fn(i) ? na : Rn.current, j = ra(r, j));
      var $e = i.getDerivedStateFromProps;
      (ve = typeof $e == "function" || typeof E.getSnapshotBeforeUpdate == "function") || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (D !== me || pe !== j) && vh(r, E, u, j), ba = !1, pe = r.memoizedState, E.state = pe, Ts(r, u, E, f);
      var Ke = r.memoizedState;
      D !== me || pe !== Ke || Jn.current || ba ? (typeof $e == "function" && (Jd(r, i, $e, u), Ke = r.memoizedState), (Q = ba || ph(r, i, Q, u, pe, Ke, j) || !1) ? (ve || typeof E.UNSAFE_componentWillUpdate != "function" && typeof E.componentWillUpdate != "function" || (typeof E.componentWillUpdate == "function" && E.componentWillUpdate(u, Ke, j), typeof E.UNSAFE_componentWillUpdate == "function" && E.UNSAFE_componentWillUpdate(u, Ke, j)), typeof E.componentDidUpdate == "function" && (r.flags |= 4), typeof E.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof E.componentDidUpdate != "function" || D === n.memoizedProps && pe === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || D === n.memoizedProps && pe === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Ke), E.props = u, E.state = Ke, E.context = j, u = Q) : (typeof E.componentDidUpdate != "function" || D === n.memoizedProps && pe === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || D === n.memoizedProps && pe === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return $s(n, r, i, u, m, f);
  }
  function $s(n, r, i, u, f, m) {
    rp(n, r);
    var E = (r.flags & 128) !== 0;
    if (!u && !E) return f && Bc(r, i, !1), qa(n, r, m);
    u = r.stateNode, Vs.current = r;
    var D = E && typeof i.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && E ? (r.child = Mn(r, n.child, null, m), r.child = Mn(r, null, D, m)) : vr(n, r, D, m), r.memoizedState = u.state, f && Bc(r, i, !0), r.child;
  }
  function Uu(n) {
    var r = n.stateNode;
    r.pendingContext ? oh(n, r.pendingContext, r.pendingContext !== r.context) : r.context && oh(n, r.context, !1), Qd(n, r.containerInfo);
  }
  function _h(n, r, i, u, f) {
    return Bi(), ui(f), r.flags |= 256, vr(n, r, i, u), r.child;
  }
  var Sf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ap(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Cf(n, r, i) {
    var u = r.pendingProps, f = wn.current, m = !1, E = (r.flags & 128) !== 0, D;
    if ((D = E) || (D = n !== null && n.memoizedState === null ? !1 : (f & 2) !== 0), D ? (m = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (f |= 1), rt(wn, f & 1), n === null)
      return Fd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (E = u.children, n = u.fallback, m ? (u = r.mode, m = r.child, E = { mode: "hidden", children: E }, (u & 1) === 0 && m !== null ? (m.childLanes = 0, m.pendingProps = E) : m = Zi(E, u, 0, null), n = vi(n, u, i, null), m.return = r, n.return = r, m.sibling = n, r.child = m, r.child.memoizedState = ap(i), r.memoizedState = Sf, n) : op(r, E));
    if (f = n.memoizedState, f !== null && (D = f.dehydrated, D !== null)) return Sh(n, r, E, u, D, f, i);
    if (m) {
      m = u.fallback, E = r.mode, f = n.child, D = f.sibling;
      var j = { mode: "hidden", children: u.children };
      return (E & 1) === 0 && r.child !== f ? (u = r.child, u.childLanes = 0, u.pendingProps = j, r.deletions = null) : (u = Ji(f, j), u.subtreeFlags = f.subtreeFlags & 14680064), D !== null ? m = Ji(D, m) : (m = vi(m, E, i, null), m.flags |= 2), m.return = r, u.return = r, u.sibling = m, r.child = u, u = m, m = r.child, E = n.child.memoizedState, E = E === null ? ap(i) : { baseLanes: E.baseLanes | i, cachePool: null, transitions: E.transitions }, m.memoizedState = E, m.childLanes = n.childLanes & ~i, r.memoizedState = Sf, u;
    }
    return m = n.child, n = m.sibling, u = Ji(m, { mode: "visible", children: u.children }), (r.mode & 1) === 0 && (u.lanes = i), u.return = r, u.sibling = null, n !== null && (i = r.deletions, i === null ? (r.deletions = [n], r.flags |= 16) : i.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function op(n, r) {
    return r = Zi({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Bs(n, r, i, u) {
    return u !== null && ui(u), Mn(r, n.child, null, i), n = op(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Sh(n, r, i, u, f, m, E) {
    if (i)
      return r.flags & 256 ? (r.flags &= -257, u = Zd(Error(p(422))), Bs(n, r, E, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (m = u.fallback, f = r.mode, u = Zi({ mode: "visible", children: u.children }, f, 0, null), m = vi(m, f, E, null), m.flags |= 2, u.return = r, m.return = r, u.sibling = m, r.child = u, (r.mode & 1) !== 0 && Mn(r, n.child, null, E), r.child.memoizedState = ap(E), r.memoizedState = Sf, m);
    if ((r.mode & 1) === 0) return Bs(n, r, E, null);
    if (f.data === "$!") {
      if (u = f.nextSibling && f.nextSibling.dataset, u) var D = u.dgst;
      return u = D, m = Error(p(419)), u = Zd(m, u, void 0), Bs(n, r, E, u);
    }
    if (D = (E & n.childLanes) !== 0, $n || D) {
      if (u = er, u !== null) {
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
        f = (f & (u.suspendedLanes | E)) !== 0 ? 0 : f, f !== 0 && f !== m.retryLane && (m.retryLane = f, wa(n, f), Hr(u, n, f, -1));
      }
      return hp(), u = Zd(Error(p(421))), Bs(n, r, E, u);
    }
    return f.data === "$?" ? (r.flags |= 128, r.child = n.child, r = ng.bind(null, n), f._reactRetry = r, null) : (n = m.treeContext, oa = Mo(f.nextSibling), aa = r, gn = !0, Ha = null, n !== null && (Vn[Va++] = Ao, Vn[Va++] = Uo, Vn[Va++] = Ea, Ao = n.id, Uo = n.overflow, Ea = r), r = op(r, u.children), r.flags |= 4096, r);
  }
  function ip(n, r, i) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), Bd(n.return, r, i);
  }
  function Ir(n, r, i, u, f) {
    var m = n.memoizedState;
    m === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: i, tailMode: f } : (m.isBackwards = r, m.rendering = null, m.renderingStartTime = 0, m.last = u, m.tail = i, m.tailMode = f);
  }
  function Po(n, r, i) {
    var u = r.pendingProps, f = u.revealOrder, m = u.tail;
    if (vr(n, r, u.children, i), u = wn.current, (u & 2) !== 0) u = u & 1 | 2, r.flags |= 128;
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
    if (rt(wn, u), (r.mode & 1) === 0) r.memoizedState = null;
    else switch (f) {
      case "forwards":
        for (i = r.child, f = null; i !== null; ) n = i.alternate, n !== null && Jc(n) === null && (f = i), i = i.sibling;
        i = f, i === null ? (f = r.child, r.child = null) : (f = i.sibling, i.sibling = null), Ir(r, !1, f, i, m);
        break;
      case "backwards":
        for (i = null, f = r.child, r.child = null; f !== null; ) {
          if (n = f.alternate, n !== null && Jc(n) === null) {
            r.child = f;
            break;
          }
          n = f.sibling, f.sibling = i, i = f, f = n;
        }
        Ir(r, !0, i, null, m);
        break;
      case "together":
        Ir(r, !1, null, null, void 0);
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
    if (n !== null && r.child !== n.child) throw Error(p(153));
    if (r.child !== null) {
      for (n = r.child, i = Ji(n, n.pendingProps), r.child = i, i.return = r; n.sibling !== null; ) n = n.sibling, i = i.sibling = Ji(n, n.pendingProps), i.return = r;
      i.sibling = null;
    }
    return r.child;
  }
  function qs(n, r, i) {
    switch (r.tag) {
      case 3:
        Uu(r), Bi();
        break;
      case 5:
        fh(r);
        break;
      case 1:
        Fn(r.type) && ar(r);
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
          return u.dehydrated !== null ? (rt(wn, wn.current & 1), r.flags |= 128, null) : (i & r.child.childLanes) !== 0 ? Cf(n, r, i) : (rt(wn, wn.current & 1), n = qa(n, r, i), n !== null ? n.sibling : null);
        rt(wn, wn.current & 1);
        break;
      case 19:
        if (u = (i & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (u) return Po(n, r, i);
          r.flags |= 128;
        }
        if (f = r.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), rt(wn, wn.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Hs(n, r, i);
    }
    return qa(n, r, i);
  }
  var Wa, Bn, Ch, Eh;
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
  }, Bn = function() {
  }, Ch = function(n, r, i, u) {
    var f = n.memoizedProps;
    if (f !== u) {
      n = r.stateNode, jl(zo.current);
      var m = null;
      switch (i) {
        case "input":
          f = sr(n, f), u = sr(n, u), m = [];
          break;
        case "select":
          f = Se({}, f, { value: void 0 }), u = Se({}, u, { value: void 0 }), m = [];
          break;
        case "textarea":
          f = Kn(n, f), u = Kn(n, u), m = [];
          break;
        default:
          typeof f.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Pi);
      }
      vn(i, u);
      var E;
      i = null;
      for (Q in f) if (!u.hasOwnProperty(Q) && f.hasOwnProperty(Q) && f[Q] != null) if (Q === "style") {
        var D = f[Q];
        for (E in D) D.hasOwnProperty(E) && (i || (i = {}), i[E] = "");
      } else Q !== "dangerouslySetInnerHTML" && Q !== "children" && Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && Q !== "autoFocus" && (x.hasOwnProperty(Q) ? m || (m = []) : (m = m || []).push(Q, null));
      for (Q in u) {
        var j = u[Q];
        if (D = f?.[Q], u.hasOwnProperty(Q) && j !== D && (j != null || D != null)) if (Q === "style") if (D) {
          for (E in D) !D.hasOwnProperty(E) || j && j.hasOwnProperty(E) || (i || (i = {}), i[E] = "");
          for (E in j) j.hasOwnProperty(E) && D[E] !== j[E] && (i || (i = {}), i[E] = j[E]);
        } else i || (m || (m = []), m.push(
          Q,
          i
        )), i = j;
        else Q === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, D = D ? D.__html : void 0, j != null && D !== j && (m = m || []).push(Q, j)) : Q === "children" ? typeof j != "string" && typeof j != "number" || (m = m || []).push(Q, "" + j) : Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && (x.hasOwnProperty(Q) ? (j != null && Q === "onScroll" && Kt("scroll", n), m || D === j || (m = [])) : (m = m || []).push(Q, j));
      }
      i && (m = m || []).push("style", i);
      var Q = m;
      (r.updateQueue = Q) && (r.flags |= 4);
    }
  }, Eh = function(n, r, i, u) {
    i !== u && (r.flags |= 4);
  };
  function Ws(n, r) {
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
  function ir(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, i = 0, u = 0;
    if (r) for (var f = n.child; f !== null; ) i |= f.lanes | f.childLanes, u |= f.subtreeFlags & 14680064, u |= f.flags & 14680064, f.return = n, f = f.sibling;
    else for (f = n.child; f !== null; ) i |= f.lanes | f.childLanes, u |= f.subtreeFlags, u |= f.flags, f.return = n, f = f.sibling;
    return n.subtreeFlags |= u, n.childLanes = i, r;
  }
  function xh(n, r, i) {
    var u = r.pendingProps;
    switch (Yc(r), r.tag) {
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
        return Fn(r.type) && Mu(), ir(r), null;
      case 3:
        return u = r.stateNode, Al(), pn(Jn), pn(Rn), it(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Gc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, Ha !== null && (Wl(Ha), Ha = null))), Bn(n, r), ir(r), null;
      case 5:
        Xc(r);
        var f = jl(Ms.current);
        if (i = r.type, n !== null && r.stateNode != null) Ch(n, r, i, u, f), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(p(166));
            return ir(r), null;
          }
          if (n = jl(zo.current), Gc(r)) {
            u = r.stateNode, i = r.type;
            var m = r.memoizedProps;
            switch (u[Lo] = r, u[ws] = m, n = (r.mode & 1) !== 0, i) {
              case "dialog":
                Kt("cancel", u), Kt("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                Kt("load", u);
                break;
              case "video":
              case "audio":
                for (f = 0; f < Cs.length; f++) Kt(Cs[f], u);
                break;
              case "source":
                Kt("error", u);
                break;
              case "img":
              case "image":
              case "link":
                Kt(
                  "error",
                  u
                ), Kt("load", u);
                break;
              case "details":
                Kt("toggle", u);
                break;
              case "input":
                Gn(u, m), Kt("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!m.multiple }, Kt("invalid", u);
                break;
              case "textarea":
                br(u, m), Kt("invalid", u);
            }
            vn(i, m), f = null;
            for (var E in m) if (m.hasOwnProperty(E)) {
              var D = m[E];
              E === "children" ? typeof D == "string" ? u.textContent !== D && (m.suppressHydrationWarning !== !0 && Fc(u.textContent, D, n), f = ["children", D]) : typeof D == "number" && u.textContent !== "" + D && (m.suppressHydrationWarning !== !0 && Fc(
                u.textContent,
                D,
                n
              ), f = ["children", "" + D]) : x.hasOwnProperty(E) && D != null && E === "onScroll" && Kt("scroll", u);
            }
            switch (i) {
              case "input":
                zn(u), Co(u, m, !0);
                break;
              case "textarea":
                zn(u), Pn(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof m.onClick == "function" && (u.onclick = Pi);
            }
            u = f, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            E = f.nodeType === 9 ? f : f.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Rr(i)), n === "http://www.w3.org/1999/xhtml" ? i === "script" ? (n = E.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = E.createElement(i, { is: u.is }) : (n = E.createElement(i), i === "select" && (E = n, u.multiple ? E.multiple = !0 : u.size && (E.size = u.size))) : n = E.createElementNS(n, i), n[Lo] = r, n[ws] = u, Wa(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (E = rr(i, u), i) {
                case "dialog":
                  Kt("cancel", n), Kt("close", n), f = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Kt("load", n), f = u;
                  break;
                case "video":
                case "audio":
                  for (f = 0; f < Cs.length; f++) Kt(Cs[f], n);
                  f = u;
                  break;
                case "source":
                  Kt("error", n), f = u;
                  break;
                case "img":
                case "image":
                case "link":
                  Kt(
                    "error",
                    n
                  ), Kt("load", n), f = u;
                  break;
                case "details":
                  Kt("toggle", n), f = u;
                  break;
                case "input":
                  Gn(n, u), f = sr(n, u), Kt("invalid", n);
                  break;
                case "option":
                  f = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, f = Se({}, u, { value: void 0 }), Kt("invalid", n);
                  break;
                case "textarea":
                  br(n, u), f = Kn(n, u), Kt("invalid", n);
                  break;
                default:
                  f = u;
              }
              vn(i, f), D = f;
              for (m in D) if (D.hasOwnProperty(m)) {
                var j = D[m];
                m === "style" ? sn(n, j) : m === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, j != null && Eo(n, j)) : m === "children" ? typeof j == "string" ? (i !== "textarea" || j !== "") && Ne(n, j) : typeof j == "number" && Ne(n, "" + j) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (x.hasOwnProperty(m) ? j != null && m === "onScroll" && Kt("scroll", n) : j != null && Ee(n, m, j, E));
              }
              switch (i) {
                case "input":
                  zn(n), Co(n, u, !1);
                  break;
                case "textarea":
                  zn(n), Pn(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + dt(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, m = u.value, m != null ? Nn(n, !!u.multiple, m, !1) : u.defaultValue != null && Nn(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof f.onClick == "function" && (n.onclick = Pi);
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
        return ir(r), null;
      case 6:
        if (n && r.stateNode != null) Eh(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(p(166));
          if (i = jl(Ms.current), jl(zo.current), Gc(r)) {
            if (u = r.stateNode, i = r.memoizedProps, u[Lo] = r, (m = u.nodeValue !== i) && (n = aa, n !== null)) switch (n.tag) {
              case 3:
                Fc(u.nodeValue, i, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Fc(u.nodeValue, i, (n.mode & 1) !== 0);
            }
            m && (r.flags |= 4);
          } else u = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(u), u[Lo] = r, r.stateNode = u;
        }
        return ir(r), null;
      case 13:
        if (pn(wn), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (gn && oa !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) ks(), Bi(), r.flags |= 98560, m = !1;
          else if (m = Gc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!m) throw Error(p(318));
              if (m = r.memoizedState, m = m !== null ? m.dehydrated : null, !m) throw Error(p(317));
              m[Lo] = r;
            } else Bi(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            ir(r), m = !1;
          } else Ha !== null && (Wl(Ha), Ha = null), m = !0;
          if (!m) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = i, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (wn.current & 1) !== 0 ? jn === 0 && (jn = 3) : hp())), r.updateQueue !== null && (r.flags |= 4), ir(r), null);
      case 4:
        return Al(), Bn(n, r), n === null && Ru(r.stateNode.containerInfo), ir(r), null;
      case 10:
        return $d(r.type._context), ir(r), null;
      case 17:
        return Fn(r.type) && Mu(), ir(r), null;
      case 19:
        if (pn(wn), m = r.memoizedState, m === null) return ir(r), null;
        if (u = (r.flags & 128) !== 0, E = m.rendering, E === null) if (u) Ws(m, !1);
        else {
          if (jn !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (E = Jc(n), E !== null) {
              for (r.flags |= 128, Ws(m, !1), u = E.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = i, i = r.child; i !== null; ) m = i, n = u, m.flags &= 14680066, E = m.alternate, E === null ? (m.childLanes = 0, m.lanes = n, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = E.childLanes, m.lanes = E.lanes, m.child = E.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = E.memoizedProps, m.memoizedState = E.memoizedState, m.updateQueue = E.updateQueue, m.type = E.type, n = E.dependencies, m.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), i = i.sibling;
              return rt(wn, wn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          m.tail !== null && xt() > Fu && (r.flags |= 128, u = !0, Ws(m, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = Jc(E), n !== null) {
            if (r.flags |= 128, u = !0, i = n.updateQueue, i !== null && (r.updateQueue = i, r.flags |= 4), Ws(m, !0), m.tail === null && m.tailMode === "hidden" && !E.alternate && !gn) return ir(r), null;
          } else 2 * xt() - m.renderingStartTime > Fu && i !== 1073741824 && (r.flags |= 128, u = !0, Ws(m, !1), r.lanes = 4194304);
          m.isBackwards ? (E.sibling = r.child, r.child = E) : (i = m.last, i !== null ? i.sibling = E : r.child = E, m.last = E);
        }
        return m.tail !== null ? (r = m.tail, m.rendering = r, m.tail = r.sibling, m.renderingStartTime = xt(), r.sibling = null, i = wn.current, rt(wn, u ? i & 1 | 2 : i & 1), r) : (ir(r), null);
      case 22:
      case 23:
        return vp(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && (r.mode & 1) !== 0 ? (Ra & 1073741824) !== 0 && (ir(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : ir(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, r.tag));
  }
  function Ef(n, r) {
    switch (Yc(r), r.tag) {
      case 1:
        return Fn(r.type) && Mu(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Al(), pn(Jn), pn(Rn), it(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Xc(r), null;
      case 13:
        if (pn(wn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(p(340));
          Bi();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return pn(wn), null;
      case 4:
        return Al(), null;
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
  var Ys = !1, Dr = !1, Qy = typeof WeakSet == "function" ? WeakSet : Set, Ye = null;
  function zu(n, r) {
    var i = n.ref;
    if (i !== null) if (typeof i == "function") try {
      i(null);
    } catch (u) {
      _n(n, r, u);
    }
    else i.current = null;
  }
  function xf(n, r, i) {
    try {
      i();
    } catch (u) {
      _n(n, r, u);
    }
  }
  var wh = !1;
  function bh(n, r) {
    if (xs = za, n = _s(), Lc(n)) {
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
          var E = 0, D = -1, j = -1, Q = 0, ve = 0, me = n, pe = null;
          t: for (; ; ) {
            for (var $e; me !== i || f !== 0 && me.nodeType !== 3 || (D = E + f), me !== m || u !== 0 && me.nodeType !== 3 || (j = E + u), me.nodeType === 3 && (E += me.nodeValue.length), ($e = me.firstChild) !== null; )
              pe = me, me = $e;
            for (; ; ) {
              if (me === n) break t;
              if (pe === i && ++Q === f && (D = E), pe === m && ++ve === u && (j = E), ($e = me.nextSibling) !== null) break;
              me = pe, pe = me.parentNode;
            }
            me = $e;
          }
          i = D === -1 || j === -1 ? null : { start: D, end: j };
        } else i = null;
      }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (Tl = { focusedElem: n, selectionRange: i }, za = !1, Ye = r; Ye !== null; ) if (r = Ye, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Ye = n;
    else for (; Ye !== null; ) {
      r = Ye;
      try {
        var Ke = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Ke !== null) {
              var Ze = Ke.memoizedProps, An = Ke.memoizedState, $ = r.stateNode, P = $.getSnapshotBeforeUpdate(r.elementType === r.type ? Ze : ho(r.type, Ze), An);
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
            throw Error(p(163));
        }
      } catch (he) {
        _n(r, r.return, he);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Ye = n;
        break;
      }
      Ye = r.return;
    }
    return Ke = wh, wh = !1, Ke;
  }
  function Gs(n, r, i) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var f = u = u.next;
      do {
        if ((f.tag & n) === n) {
          var m = f.destroy;
          f.destroy = void 0, m !== void 0 && xf(r, i, m);
        }
        f = f.next;
      } while (f !== u);
    }
  }
  function Qs(n, r) {
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
  function wf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, wf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Lo], delete r[ws], delete r[bs], delete r[Du], delete r[Yy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ks(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function fi(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Ks(n.return)) return null;
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
    if (u === 5 || u === 6) n = n.stateNode, r ? i.nodeType === 8 ? i.parentNode.insertBefore(n, r) : i.insertBefore(n, r) : (i.nodeType === 8 ? (r = i.parentNode, r.insertBefore(n, i)) : (r = i, r.appendChild(n)), i = i._reactRootContainer, i != null || r.onclick !== null || (r.onclick = Pi));
    else if (u !== 4 && (n = n.child, n !== null)) for (Io(n, r, i), n = n.sibling; n !== null; ) Io(n, r, i), n = n.sibling;
  }
  function Fo(n, r, i) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? i.insertBefore(n, r) : i.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null)) for (Fo(n, r, i), n = n.sibling; n !== null; ) Fo(n, r, i), n = n.sibling;
  }
  var On = null, Fr = !1;
  function Vr(n, r, i) {
    for (i = i.child; i !== null; ) Rh(n, r, i), i = i.sibling;
  }
  function Rh(n, r, i) {
    if (ea && typeof ea.onCommitFiberUnmount == "function") try {
      ea.onCommitFiberUnmount(Ni, i);
    } catch {
    }
    switch (i.tag) {
      case 5:
        Dr || zu(i, r);
      case 6:
        var u = On, f = Fr;
        On = null, Vr(n, r, i), On = u, Fr = f, On !== null && (Fr ? (n = On, i = i.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(i) : n.removeChild(i)) : On.removeChild(i.stateNode));
        break;
      case 18:
        On !== null && (Fr ? (n = On, i = i.stateNode, n.nodeType === 8 ? Nu(n.parentNode, i) : n.nodeType === 1 && Nu(n, i), so(n)) : Nu(On, i.stateNode));
        break;
      case 4:
        u = On, f = Fr, On = i.stateNode.containerInfo, Fr = !0, Vr(n, r, i), On = u, Fr = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Dr && (u = i.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          f = u = u.next;
          do {
            var m = f, E = m.destroy;
            m = m.tag, E !== void 0 && ((m & 2) !== 0 || (m & 4) !== 0) && xf(i, r, E), f = f.next;
          } while (f !== u);
        }
        Vr(n, r, i);
        break;
      case 1:
        if (!Dr && (zu(i, r), u = i.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = i.memoizedProps, u.state = i.memoizedState, u.componentWillUnmount();
        } catch (D) {
          _n(i, r, D);
        }
        Vr(n, r, i);
        break;
      case 21:
        Vr(n, r, i);
        break;
      case 22:
        i.mode & 1 ? (Dr = (u = Dr) || i.memoizedState !== null, Vr(n, r, i), Dr = u) : Vr(n, r, i);
        break;
      default:
        Vr(n, r, i);
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
        var m = n, E = r, D = E;
        e: for (; D !== null; ) {
          switch (D.tag) {
            case 5:
              On = D.stateNode, Fr = !1;
              break e;
            case 3:
              On = D.stateNode.containerInfo, Fr = !0;
              break e;
            case 4:
              On = D.stateNode.containerInfo, Fr = !0;
              break e;
          }
          D = D.return;
        }
        if (On === null) throw Error(p(160));
        Rh(m, E, f), On = null, Fr = !1;
        var j = f.alternate;
        j !== null && (j.return = null), f.return = null;
      } catch (Q) {
        _n(f, r, Q);
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
        if (mo(r, n), sa(n), u & 4) {
          try {
            Gs(3, n, n.return), Qs(3, n);
          } catch (Ze) {
            _n(n, n.return, Ze);
          }
          try {
            Gs(5, n, n.return);
          } catch (Ze) {
            _n(n, n.return, Ze);
          }
        }
        break;
      case 1:
        mo(r, n), sa(n), u & 512 && i !== null && zu(i, i.return);
        break;
      case 5:
        if (mo(r, n), sa(n), u & 512 && i !== null && zu(i, i.return), n.flags & 32) {
          var f = n.stateNode;
          try {
            Ne(f, "");
          } catch (Ze) {
            _n(n, n.return, Ze);
          }
        }
        if (u & 4 && (f = n.stateNode, f != null)) {
          var m = n.memoizedProps, E = i !== null ? i.memoizedProps : m, D = n.type, j = n.updateQueue;
          if (n.updateQueue = null, j !== null) try {
            D === "input" && m.type === "radio" && m.name != null && Qn(f, m), rr(D, E);
            var Q = rr(D, m);
            for (E = 0; E < j.length; E += 2) {
              var ve = j[E], me = j[E + 1];
              ve === "style" ? sn(f, me) : ve === "dangerouslySetInnerHTML" ? Eo(f, me) : ve === "children" ? Ne(f, me) : Ee(f, ve, me, Q);
            }
            switch (D) {
              case "input":
                Zr(f, m);
                break;
              case "textarea":
                to(f, m);
                break;
              case "select":
                var pe = f._wrapperState.wasMultiple;
                f._wrapperState.wasMultiple = !!m.multiple;
                var $e = m.value;
                $e != null ? Nn(f, !!m.multiple, $e, !1) : pe !== !!m.multiple && (m.defaultValue != null ? Nn(
                  f,
                  !!m.multiple,
                  m.defaultValue,
                  !0
                ) : Nn(f, !!m.multiple, m.multiple ? [] : "", !1));
            }
            f[ws] = m;
          } catch (Ze) {
            _n(n, n.return, Ze);
          }
        }
        break;
      case 6:
        if (mo(r, n), sa(n), u & 4) {
          if (n.stateNode === null) throw Error(p(162));
          f = n.stateNode, m = n.memoizedProps;
          try {
            f.nodeValue = m;
          } catch (Ze) {
            _n(n, n.return, Ze);
          }
        }
        break;
      case 3:
        if (mo(r, n), sa(n), u & 4 && i !== null && i.memoizedState.isDehydrated) try {
          so(r.containerInfo);
        } catch (Ze) {
          _n(n, n.return, Ze);
        }
        break;
      case 4:
        mo(r, n), sa(n);
        break;
      case 13:
        mo(r, n), sa(n), f = n.child, f.flags & 8192 && (m = f.memoizedState !== null, f.stateNode.isHidden = m, !m || f.alternate !== null && f.alternate.memoizedState !== null || (fp = xt())), u & 4 && kh(n);
        break;
      case 22:
        if (ve = i !== null && i.memoizedState !== null, n.mode & 1 ? (Dr = (Q = Dr) || ve, mo(r, n), Dr = Q) : mo(r, n), sa(n), u & 8192) {
          if (Q = n.memoizedState !== null, (n.stateNode.isHidden = Q) && !ve && (n.mode & 1) !== 0) for (Ye = n, ve = n.child; ve !== null; ) {
            for (me = Ye = ve; Ye !== null; ) {
              switch (pe = Ye, $e = pe.child, pe.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Gs(4, pe, pe.return);
                  break;
                case 1:
                  zu(pe, pe.return);
                  var Ke = pe.stateNode;
                  if (typeof Ke.componentWillUnmount == "function") {
                    u = pe, i = pe.return;
                    try {
                      r = u, Ke.props = r.memoizedProps, Ke.state = r.memoizedState, Ke.componentWillUnmount();
                    } catch (Ze) {
                      _n(u, i, Ze);
                    }
                  }
                  break;
                case 5:
                  zu(pe, pe.return);
                  break;
                case 22:
                  if (pe.memoizedState !== null) {
                    Xs(me);
                    continue;
                  }
              }
              $e !== null ? ($e.return = pe, Ye = $e) : Xs(me);
            }
            ve = ve.sibling;
          }
          e: for (ve = null, me = n; ; ) {
            if (me.tag === 5) {
              if (ve === null) {
                ve = me;
                try {
                  f = me.stateNode, Q ? (m = f.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (D = me.stateNode, j = me.memoizedProps.style, E = j != null && j.hasOwnProperty("display") ? j.display : null, D.style.display = Qt("display", E));
                } catch (Ze) {
                  _n(n, n.return, Ze);
                }
              }
            } else if (me.tag === 6) {
              if (ve === null) try {
                me.stateNode.nodeValue = Q ? "" : me.memoizedProps;
              } catch (Ze) {
                _n(n, n.return, Ze);
              }
            } else if ((me.tag !== 22 && me.tag !== 23 || me.memoizedState === null || me === n) && me.child !== null) {
              me.child.return = me, me = me.child;
              continue;
            }
            if (me === n) break e;
            for (; me.sibling === null; ) {
              if (me.return === null || me.return === n) break e;
              ve === me && (ve = null), me = me.return;
            }
            ve === me && (ve = null), me.sibling.return = me.return, me = me.sibling;
          }
        }
        break;
      case 19:
        mo(r, n), sa(n), u & 4 && kh(n);
        break;
      case 21:
        break;
      default:
        mo(
          r,
          n
        ), sa(n);
    }
  }
  function sa(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var i = n.return; i !== null; ) {
            if (Ks(i)) {
              var u = i;
              break e;
            }
            i = i.return;
          }
          throw Error(p(160));
        }
        switch (u.tag) {
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (Ne(f, ""), u.flags &= -33);
            var m = fi(n);
            Fo(n, m, f);
            break;
          case 3:
          case 4:
            var E = u.stateNode.containerInfo, D = fi(n);
            Io(n, D, E);
            break;
          default:
            throw Error(p(161));
        }
      } catch (j) {
        _n(n, n.return, j);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Ky(n, r, i) {
    Ye = n, sp(n);
  }
  function sp(n, r, i) {
    for (var u = (n.mode & 1) !== 0; Ye !== null; ) {
      var f = Ye, m = f.child;
      if (f.tag === 22 && u) {
        var E = f.memoizedState !== null || Ys;
        if (!E) {
          var D = f.alternate, j = D !== null && D.memoizedState !== null || Dr;
          D = Ys;
          var Q = Dr;
          if (Ys = E, (Dr = j) && !Q) for (Ye = f; Ye !== null; ) E = Ye, j = E.child, E.tag === 22 && E.memoizedState !== null ? cp(f) : j !== null ? (j.return = E, Ye = j) : cp(f);
          for (; m !== null; ) Ye = m, sp(m), m = m.sibling;
          Ye = f, Ys = D, Dr = Q;
        }
        Th(n);
      } else (f.subtreeFlags & 8772) !== 0 && m !== null ? (m.return = f, Ye = m) : Th(n);
    }
  }
  function Th(n) {
    for (; Ye !== null; ) {
      var r = Ye;
      if ((r.flags & 8772) !== 0) {
        var i = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Dr || Qs(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !Dr) if (i === null) u.componentDidMount();
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
              var D = r.stateNode;
              if (i === null && r.flags & 4) {
                i = D;
                var j = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    j.autoFocus && i.focus();
                    break;
                  case "img":
                    j.src && (i.src = j.src);
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
                  var ve = Q.memoizedState;
                  if (ve !== null) {
                    var me = ve.dehydrated;
                    me !== null && so(me);
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
          Dr || r.flags & 512 && lp(r);
        } catch (pe) {
          _n(r, r.return, pe);
        }
      }
      if (r === n) {
        Ye = null;
        break;
      }
      if (i = r.sibling, i !== null) {
        i.return = r.return, Ye = i;
        break;
      }
      Ye = r.return;
    }
  }
  function Xs(n) {
    for (; Ye !== null; ) {
      var r = Ye;
      if (r === n) {
        Ye = null;
        break;
      }
      var i = r.sibling;
      if (i !== null) {
        i.return = r.return, Ye = i;
        break;
      }
      Ye = r.return;
    }
  }
  function cp(n) {
    for (; Ye !== null; ) {
      var r = Ye;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var i = r.return;
            try {
              Qs(4, r);
            } catch (j) {
              _n(r, i, j);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var f = r.return;
              try {
                u.componentDidMount();
              } catch (j) {
                _n(r, f, j);
              }
            }
            var m = r.return;
            try {
              lp(r);
            } catch (j) {
              _n(r, m, j);
            }
            break;
          case 5:
            var E = r.return;
            try {
              lp(r);
            } catch (j) {
              _n(r, E, j);
            }
        }
      } catch (j) {
        _n(r, r.return, j);
      }
      if (r === n) {
        Ye = null;
        break;
      }
      var D = r.sibling;
      if (D !== null) {
        D.return = r.return, Ye = D;
        break;
      }
      Ye = r.return;
    }
  }
  var Xy = Math.ceil, Qi = se.ReactCurrentDispatcher, Bl = se.ReactCurrentOwner, hr = se.ReactCurrentBatchConfig, zt = 0, er = null, qn = null, mr = 0, Ra = 0, Pu = Fa(0), jn = 0, Js = null, Vo = 0, Iu = 0, bf = 0, Zs = null, ca = null, fp = 0, Fu = 1 / 0, ka = null, Vu = !1, ql = null, Ki = null, Rf = !1, di = null, ec = 0, Xi = 0, Hu = null, tc = -1, Mr = 0;
  function Wn() {
    return (zt & 6) !== 0 ? xt() : tc !== -1 ? tc : tc = xt();
  }
  function Ho(n) {
    return (n.mode & 1) === 0 ? 1 : (zt & 2) !== 0 && mr !== 0 ? mr & -mr : Gy.transition !== null ? (Mr === 0 && (Mr = vu()), Mr) : (n = $t, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Cu(n.type)), n);
  }
  function Hr(n, r, i, u) {
    if (50 < Xi) throw Xi = 0, Hu = null, Error(p(185));
    Zo(n, i, u), ((zt & 2) === 0 || n !== er) && (n === er && ((zt & 2) === 0 && (Iu |= i), jn === 4 && yo(n, mr)), fa(n, u), i === 1 && zt === 0 && (r.mode & 1) === 0 && (Fu = xt() + 500, Lu && jo()));
  }
  function fa(n, r) {
    var i = n.callbackNode;
    _l(n, r);
    var u = uo(n, n === er ? mr : 0);
    if (u === 0) i !== null && fr(i), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (i != null && fr(i), r === 1) n.tag === 0 ? Fi(dp.bind(null, n)) : qc(dp.bind(null, n)), Tu(function() {
        (zt & 6) === 0 && jo();
      }), i = null;
      else {
        switch (mu(u)) {
          case 1:
            i = io;
            break;
          case 4:
            i = yl;
            break;
          case 16:
            i = gl;
            break;
          case 536870912:
            i = fu;
            break;
          default:
            i = gl;
        }
        i = Ph(i, kf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = i;
    }
  }
  function kf(n, r) {
    if (tc = -1, Mr = 0, (zt & 6) !== 0) throw Error(p(327));
    var i = n.callbackNode;
    if ($u() && n.callbackNode !== i) return null;
    var u = uo(n, n === er ? mr : 0);
    if (u === 0) return null;
    if ((u & 30) !== 0 || (u & n.expiredLanes) !== 0 || r) r = Tf(n, u);
    else {
      r = u;
      var f = zt;
      zt |= 2;
      var m = Dh();
      (er !== n || mr !== r) && (ka = null, Fu = xt() + 500, pi(n, r));
      do
        try {
          Mh();
          break;
        } catch (D) {
          Nh(n, D);
        }
      while (!0);
      Hd(), Qi.current = m, zt = f, qn !== null ? r = 0 : (er = null, mr = 0, r = jn);
    }
    if (r !== 0) {
      if (r === 2 && (f = Mi(n), f !== 0 && (u = f, r = nc(n, f))), r === 1) throw i = Js, pi(n, 0), yo(n, u), fa(n, xt()), i;
      if (r === 6) yo(n, u);
      else {
        if (f = n.current.alternate, (u & 30) === 0 && !Jy(f) && (r = Tf(n, u), r === 2 && (m = Mi(n), m !== 0 && (u = m, r = nc(n, m))), r === 1)) throw i = Js, pi(n, 0), yo(n, u), fa(n, xt()), i;
        switch (n.finishedWork = f, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            Gl(n, ca, ka);
            break;
          case 3:
            if (yo(n, u), (u & 130023424) === u && (r = fp + 500 - xt(), 10 < r)) {
              if (uo(n, 0) !== 0) break;
              if (f = n.suspendedLanes, (f & u) !== u) {
                Wn(), n.pingedLanes |= n.suspendedLanes & f;
                break;
              }
              n.timeoutHandle = Hc(Gl.bind(null, n, ca, ka), r);
              break;
            }
            Gl(n, ca, ka);
            break;
          case 4:
            if (yo(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, f = -1; 0 < u; ) {
              var E = 31 - Ur(u);
              m = 1 << E, E = r[E], E > f && (f = E), u &= ~m;
            }
            if (u = f, u = xt() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Xy(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = Hc(Gl.bind(null, n, ca, ka), u);
              break;
            }
            Gl(n, ca, ka);
            break;
          case 5:
            Gl(n, ca, ka);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    return fa(n, xt()), n.callbackNode === i ? kf.bind(null, n) : null;
  }
  function nc(n, r) {
    var i = Zs;
    return n.current.memoizedState.isDehydrated && (pi(n, r).flags |= 256), n = Tf(n, r), n !== 2 && (r = ca, ca = i, r !== null && Wl(r)), n;
  }
  function Wl(n) {
    ca === null ? ca = n : ca.push.apply(ca, n);
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
    for (r &= ~bf, r &= ~Iu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var i = 31 - Ur(r), u = 1 << i;
      n[i] = -1, r &= ~u;
    }
  }
  function dp(n) {
    if ((zt & 6) !== 0) throw Error(p(327));
    $u();
    var r = uo(n, 0);
    if ((r & 1) === 0) return fa(n, xt()), null;
    var i = Tf(n, r);
    if (n.tag !== 0 && i === 2) {
      var u = Mi(n);
      u !== 0 && (r = u, i = nc(n, u));
    }
    if (i === 1) throw i = Js, pi(n, 0), yo(n, r), fa(n, xt()), i;
    if (i === 6) throw Error(p(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Gl(n, ca, ka), fa(n, xt()), null;
  }
  function pp(n, r) {
    var i = zt;
    zt |= 1;
    try {
      return n(r);
    } finally {
      zt = i, zt === 0 && (Fu = xt() + 500, Lu && jo());
    }
  }
  function Yl(n) {
    di !== null && di.tag === 0 && (zt & 6) === 0 && $u();
    var r = zt;
    zt |= 1;
    var i = hr.transition, u = $t;
    try {
      if (hr.transition = null, $t = 1, n) return n();
    } finally {
      $t = u, hr.transition = i, zt = r, (zt & 6) === 0 && jo();
    }
  }
  function vp() {
    Ra = Pu.current, pn(Pu);
  }
  function pi(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var i = n.timeoutHandle;
    if (i !== -1 && (n.timeoutHandle = -1, zd(i)), qn !== null) for (i = qn.return; i !== null; ) {
      var u = i;
      switch (Yc(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && Mu();
          break;
        case 3:
          Al(), pn(Jn), pn(Rn), it();
          break;
        case 5:
          Xc(u);
          break;
        case 4:
          Al();
          break;
        case 13:
          pn(wn);
          break;
        case 19:
          pn(wn);
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
    if (er = n, qn = n = Ji(n.current, null), mr = Ra = r, jn = 0, Js = null, bf = Iu = Vo = 0, ca = Zs = null, Ol !== null) {
      for (r = 0; r < Ol.length; r++) if (i = Ol[r], u = i.interleaved, u !== null) {
        i.interleaved = null;
        var f = u.next, m = i.pending;
        if (m !== null) {
          var E = m.next;
          m.next = f, u.next = E;
        }
        i.pending = u;
      }
      Ol = null;
    }
    return n;
  }
  function Nh(n, r) {
    do {
      var i = qn;
      try {
        if (Hd(), Nt.current = Vl, Zc) {
          for (var u = qt.memoizedState; u !== null; ) {
            var f = u.queue;
            f !== null && (f.pending = null), u = u.next;
          }
          Zc = !1;
        }
        if (an = 0, or = Hn = qt = null, Os = !1, Ul = 0, Bl.current = null, i === null || i.return === null) {
          jn = 1, Js = r, qn = null;
          break;
        }
        e: {
          var m = n, E = i.return, D = i, j = r;
          if (r = mr, D.flags |= 32768, j !== null && typeof j == "object" && typeof j.then == "function") {
            var Q = j, ve = D, me = ve.tag;
            if ((ve.mode & 1) === 0 && (me === 0 || me === 11 || me === 15)) {
              var pe = ve.alternate;
              pe ? (ve.updateQueue = pe.updateQueue, ve.memoizedState = pe.memoizedState, ve.lanes = pe.lanes) : (ve.updateQueue = null, ve.memoizedState = null);
            }
            var $e = mh(E);
            if ($e !== null) {
              $e.flags &= -257, Gi($e, E, D, m, r), $e.mode & 1 && np(m, Q, r), r = $e, j = Q;
              var Ke = r.updateQueue;
              if (Ke === null) {
                var Ze = /* @__PURE__ */ new Set();
                Ze.add(j), r.updateQueue = Ze;
              } else Ke.add(j);
              break e;
            } else {
              if ((r & 1) === 0) {
                np(m, Q, r), hp();
                break e;
              }
              j = Error(p(426));
            }
          } else if (gn && D.mode & 1) {
            var An = mh(E);
            if (An !== null) {
              (An.flags & 65536) === 0 && (An.flags |= 256), Gi(An, E, D, m, r), ui(Hl(j, D));
              break e;
            }
          }
          m = j = Hl(j, D), jn !== 4 && (jn = 2), Zs === null ? Zs = [m] : Zs.push(m), m = E;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, r &= -r, m.lanes |= r;
                var $ = hh(m, j, r);
                ch(m, $);
                break e;
              case 1:
                D = j;
                var P = m.type, W = m.stateNode;
                if ((m.flags & 128) === 0 && (typeof P.getDerivedStateFromError == "function" || W !== null && typeof W.componentDidCatch == "function" && (Ki === null || !Ki.has(W)))) {
                  m.flags |= 65536, r &= -r, m.lanes |= r;
                  var he = tp(m, D, r);
                  ch(m, he);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        Oh(i);
      } catch (Xe) {
        r = Xe, qn === i && i !== null && (qn = i = i.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Dh() {
    var n = Qi.current;
    return Qi.current = Vl, n === null ? Vl : n;
  }
  function hp() {
    (jn === 0 || jn === 3 || jn === 2) && (jn = 4), er === null || (Vo & 268435455) === 0 && (Iu & 268435455) === 0 || yo(er, mr);
  }
  function Tf(n, r) {
    var i = zt;
    zt |= 2;
    var u = Dh();
    (er !== n || mr !== r) && (ka = null, pi(n, r));
    do
      try {
        Zy();
        break;
      } catch (f) {
        Nh(n, f);
      }
    while (!0);
    if (Hd(), zt = i, Qi.current = u, qn !== null) throw Error(p(261));
    return er = null, mr = 0, jn;
  }
  function Zy() {
    for (; qn !== null; ) Lh(qn);
  }
  function Mh() {
    for (; qn !== null && !ao(); ) Lh(qn);
  }
  function Lh(n) {
    var r = zh(n.alternate, n, Ra);
    n.memoizedProps = n.pendingProps, r === null ? Oh(n) : qn = r, Bl.current = null;
  }
  function Oh(n) {
    var r = n;
    do {
      var i = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (i = xh(i, r, Ra), i !== null) {
          qn = i;
          return;
        }
      } else {
        if (i = Ef(i, r), i !== null) {
          i.flags &= 32767, qn = i;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          jn = 6, qn = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        qn = r;
        return;
      }
      qn = r = n;
    } while (r !== null);
    jn === 0 && (jn = 5);
  }
  function Gl(n, r, i) {
    var u = $t, f = hr.transition;
    try {
      hr.transition = null, $t = 1, eg(n, r, i, u);
    } finally {
      hr.transition = f, $t = u;
    }
    return null;
  }
  function eg(n, r, i, u) {
    do
      $u();
    while (di !== null);
    if ((zt & 6) !== 0) throw Error(p(327));
    i = n.finishedWork;
    var f = n.finishedLanes;
    if (i === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, i === n.current) throw Error(p(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var m = i.lanes | i.childLanes;
    if (md(n, m), n === er && (qn = er = null, mr = 0), (i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0 || Rf || (Rf = !0, Ph(gl, function() {
      return $u(), null;
    })), m = (i.flags & 15990) !== 0, (i.subtreeFlags & 15990) !== 0 || m) {
      m = hr.transition, hr.transition = null;
      var E = $t;
      $t = 1;
      var D = zt;
      zt |= 4, Bl.current = null, bh(n, i), up(i, n), wu(Tl), za = !!xs, Tl = xs = null, n.current = i, Ky(i), oo(), zt = D, $t = E, hr.transition = m;
    } else n.current = i;
    if (Rf && (Rf = !1, di = n, ec = f), m = n.pendingLanes, m === 0 && (Ki = null), ss(i.stateNode), fa(n, xt()), r !== null) for (u = n.onRecoverableError, i = 0; i < r.length; i++) f = r[i], u(f.value, { componentStack: f.stack, digest: f.digest });
    if (Vu) throw Vu = !1, n = ql, ql = null, n;
    return (ec & 1) !== 0 && n.tag !== 0 && $u(), m = n.pendingLanes, (m & 1) !== 0 ? n === Hu ? Xi++ : (Xi = 0, Hu = n) : Xi = 0, jo(), null;
  }
  function $u() {
    if (di !== null) {
      var n = mu(ec), r = hr.transition, i = $t;
      try {
        if (hr.transition = null, $t = 16 > n ? 16 : n, di === null) var u = !1;
        else {
          if (n = di, di = null, ec = 0, (zt & 6) !== 0) throw Error(p(331));
          var f = zt;
          for (zt |= 4, Ye = n.current; Ye !== null; ) {
            var m = Ye, E = m.child;
            if ((Ye.flags & 16) !== 0) {
              var D = m.deletions;
              if (D !== null) {
                for (var j = 0; j < D.length; j++) {
                  var Q = D[j];
                  for (Ye = Q; Ye !== null; ) {
                    var ve = Ye;
                    switch (ve.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Gs(8, ve, m);
                    }
                    var me = ve.child;
                    if (me !== null) me.return = ve, Ye = me;
                    else for (; Ye !== null; ) {
                      ve = Ye;
                      var pe = ve.sibling, $e = ve.return;
                      if (wf(ve), ve === Q) {
                        Ye = null;
                        break;
                      }
                      if (pe !== null) {
                        pe.return = $e, Ye = pe;
                        break;
                      }
                      Ye = $e;
                    }
                  }
                }
                var Ke = m.alternate;
                if (Ke !== null) {
                  var Ze = Ke.child;
                  if (Ze !== null) {
                    Ke.child = null;
                    do {
                      var An = Ze.sibling;
                      Ze.sibling = null, Ze = An;
                    } while (Ze !== null);
                  }
                }
                Ye = m;
              }
            }
            if ((m.subtreeFlags & 2064) !== 0 && E !== null) E.return = m, Ye = E;
            else e: for (; Ye !== null; ) {
              if (m = Ye, (m.flags & 2048) !== 0) switch (m.tag) {
                case 0:
                case 11:
                case 15:
                  Gs(9, m, m.return);
              }
              var $ = m.sibling;
              if ($ !== null) {
                $.return = m.return, Ye = $;
                break e;
              }
              Ye = m.return;
            }
          }
          var P = n.current;
          for (Ye = P; Ye !== null; ) {
            E = Ye;
            var W = E.child;
            if ((E.subtreeFlags & 2064) !== 0 && W !== null) W.return = E, Ye = W;
            else e: for (E = P; Ye !== null; ) {
              if (D = Ye, (D.flags & 2048) !== 0) try {
                switch (D.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qs(9, D);
                }
              } catch (Xe) {
                _n(D, D.return, Xe);
              }
              if (D === E) {
                Ye = null;
                break e;
              }
              var he = D.sibling;
              if (he !== null) {
                he.return = D.return, Ye = he;
                break e;
              }
              Ye = D.return;
            }
          }
          if (zt = f, jo(), ea && typeof ea.onPostCommitFiberRoot == "function") try {
            ea.onPostCommitFiberRoot(Ni, n);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        $t = i, hr.transition = r;
      }
    }
    return !1;
  }
  function jh(n, r, i) {
    r = Hl(i, r), r = hh(n, r, 1), n = qi(n, r, 1), r = Wn(), n !== null && (Zo(n, 1, r), fa(n, r));
  }
  function _n(n, r, i) {
    if (n.tag === 3) jh(n, n, i);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        jh(r, n, i);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Ki === null || !Ki.has(u))) {
          n = Hl(i, n), n = tp(r, n, 1), r = qi(r, n, 1), n = Wn(), r !== null && (Zo(r, 1, n), fa(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function tg(n, r, i) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = Wn(), n.pingedLanes |= n.suspendedLanes & i, er === n && (mr & i) === i && (jn === 4 || jn === 3 && (mr & 130023424) === mr && 500 > xt() - fp ? pi(n, 0) : bf |= i), fa(n, r);
  }
  function Ah(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = Ca, Ca <<= 1, (Ca & 130023424) === 0 && (Ca = 4194304)));
    var i = Wn();
    n = wa(n, r), n !== null && (Zo(n, r, i), fa(n, i));
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
        throw Error(p(314));
    }
    u !== null && u.delete(r), Ah(n, i);
  }
  var zh;
  zh = function(n, r, i) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Jn.current) $n = !0;
    else {
      if ((n.lanes & i) === 0 && (r.flags & 128) === 0) return $n = !1, qs(n, r, i);
      $n = (n.flags & 131072) !== 0;
    }
    else $n = !1, gn && (r.flags & 1048576) !== 0 && ih(r, li, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Ba(n, r), n = r.pendingProps;
        var f = ra(r, Rn.current);
        xn(r, i), f = Wi(null, r, u, n, f, i);
        var m = vo();
        return r.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Fn(u) ? (m = !0, ar(r)) : m = !1, r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, Yd(r), f.updater = yf, r.stateNode = f, f._reactInternals = r, Fs(r, u, n, i), r = $s(null, r, u, !0, m, i)) : (r.tag = 0, gn && m && Wc(r), vr(null, r, f, i), r = r.child), r;
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
              r = ua(null, r, u, n, i);
              break e;
            case 14:
              r = $l(null, r, u, ho(u.type, n), i);
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
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : ho(u, f), yh(n, r, u, f, i);
      case 1:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : ho(u, f), gh(n, r, u, f, i);
      case 3:
        e: {
          if (Uu(r), n === null) throw Error(p(387));
          u = r.pendingProps, m = r.memoizedState, f = m.element, sh(n, r), Ts(r, u, null, i);
          var E = r.memoizedState;
          if (u = E.element, m.isDehydrated) if (m = { element: u, isDehydrated: !1, cache: E.cache, pendingSuspenseBoundaries: E.pendingSuspenseBoundaries, transitions: E.transitions }, r.updateQueue.baseState = m, r.memoizedState = m, r.flags & 256) {
            f = Hl(Error(p(423)), r), r = _h(n, r, u, i, f);
            break e;
          } else if (u !== f) {
            f = Hl(Error(p(424)), r), r = _h(n, r, u, i, f);
            break e;
          } else for (oa = Mo(r.stateNode.containerInfo.firstChild), aa = r, gn = !0, Ha = null, i = Ie(r, null, u, i), r.child = i; i; ) i.flags = i.flags & -3 | 4096, i = i.sibling;
          else {
            if (Bi(), u === f) {
              r = qa(n, r, i);
              break e;
            }
            vr(n, r, u, i);
          }
          r = r.child;
        }
        return r;
      case 5:
        return fh(r), n === null && Fd(r), u = r.type, f = r.pendingProps, m = n !== null ? n.memoizedProps : null, E = f.children, Vc(u, f) ? E = null : m !== null && Vc(u, m) && (r.flags |= 32), rp(n, r), vr(n, r, E, i), r.child;
      case 6:
        return n === null && Fd(r), null;
      case 13:
        return Cf(n, r, i);
      case 4:
        return Qd(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = Mn(r, null, u, i) : vr(n, r, u, i), r.child;
      case 11:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : ho(u, f), ua(n, r, u, f, i);
      case 7:
        return vr(n, r, r.pendingProps, i), r.child;
      case 8:
        return vr(n, r, r.pendingProps.children, i), r.child;
      case 12:
        return vr(n, r, r.pendingProps.children, i), r.child;
      case 10:
        e: {
          if (u = r.type._context, f = r.pendingProps, m = r.memoizedProps, E = f.value, rt(xa, u._currentValue), u._currentValue = E, m !== null) if (fo(m.value, E)) {
            if (m.children === f.children && !Jn.current) {
              r = qa(n, r, i);
              break e;
            }
          } else for (m = r.child, m !== null && (m.return = r); m !== null; ) {
            var D = m.dependencies;
            if (D !== null) {
              E = m.child;
              for (var j = D.firstContext; j !== null; ) {
                if (j.context === u) {
                  if (m.tag === 1) {
                    j = si(-1, i & -i), j.tag = 2;
                    var Q = m.updateQueue;
                    if (Q !== null) {
                      Q = Q.shared;
                      var ve = Q.pending;
                      ve === null ? j.next = j : (j.next = ve.next, ve.next = j), Q.pending = j;
                    }
                  }
                  m.lanes |= i, j = m.alternate, j !== null && (j.lanes |= i), Bd(
                    m.return,
                    i,
                    r
                  ), D.lanes |= i;
                  break;
                }
                j = j.next;
              }
            } else if (m.tag === 10) E = m.type === r.type ? null : m.child;
            else if (m.tag === 18) {
              if (E = m.return, E === null) throw Error(p(341));
              E.lanes |= i, D = E.alternate, D !== null && (D.lanes |= i), Bd(E, i, r), E = m.sibling;
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
          vr(n, r, f.children, i), r = r.child;
        }
        return r;
      case 9:
        return f = r.type, u = r.pendingProps.children, xn(r, i), f = $a(f), u = u(f), r.flags |= 1, vr(n, r, u, i), r.child;
      case 14:
        return u = r.type, f = ho(u, r.pendingProps), f = ho(u.type, f), $l(n, r, u, f, i);
      case 15:
        return wt(n, r, r.type, r.pendingProps, i);
      case 17:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : ho(u, f), Ba(n, r), r.tag = 1, Fn(u) ? (n = !0, ar(r)) : n = !1, xn(r, i), gf(r, u, f), Fs(r, u, f, i), $s(null, r, u, !0, n, i);
      case 19:
        return Po(n, r, i);
      case 22:
        return Hs(n, r, i);
    }
    throw Error(p(156, r.tag));
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
      if (n = n.$$typeof, n === A) return 11;
      if (n === Qe) return 14;
    }
    return 2;
  }
  function Ji(n, r) {
    var i = n.alternate;
    return i === null ? (i = Ya(n.tag, r, n.key, n.mode), i.elementType = n.elementType, i.type = n.type, i.stateNode = n.stateNode, i.alternate = n, n.alternate = i) : (i.pendingProps = r, i.type = n.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = n.flags & 14680064, i.childLanes = n.childLanes, i.lanes = n.lanes, i.child = n.child, i.memoizedProps = n.memoizedProps, i.memoizedState = n.memoizedState, i.updateQueue = n.updateQueue, r = n.dependencies, i.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, i.sibling = n.sibling, i.index = n.index, i.ref = n.ref, i;
  }
  function rc(n, r, i, u, f, m) {
    var E = 2;
    if (u = n, typeof n == "function") mp(n) && (E = 1);
    else if (typeof n == "string") E = 5;
    else e: switch (n) {
      case Ce:
        return vi(i.children, f, m, r);
      case Te:
        E = 8, f |= 8;
        break;
      case qe:
        return n = Ya(12, i, r, f | 2), n.elementType = qe, n.lanes = m, n;
      case X:
        return n = Ya(13, i, r, f), n.elementType = X, n.lanes = m, n;
      case _e:
        return n = Ya(19, i, r, f), n.elementType = _e, n.lanes = m, n;
      case ke:
        return Zi(i, f, m, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case le:
            E = 10;
            break e;
          case ze:
            E = 9;
            break e;
          case A:
            E = 11;
            break e;
          case Qe:
            E = 14;
            break e;
          case je:
            E = 16, u = null;
            break e;
        }
        throw Error(p(130, n == null ? n : typeof n, ""));
    }
    return r = Ya(E, i, r, f), r.elementType = n, r.type = u, r.lanes = m, r;
  }
  function vi(n, r, i, u) {
    return n = Ya(7, n, u, r), n.lanes = i, n;
  }
  function Zi(n, r, i, u) {
    return n = Ya(22, n, u, r), n.elementType = ke, n.lanes = i, n.stateNode = { isHidden: !1 }, n;
  }
  function yp(n, r, i) {
    return n = Ya(6, n, null, r), n.lanes = i, n;
  }
  function Nf(n, r, i) {
    return r = Ya(4, n.children !== null ? n.children : [], n.key, r), r.lanes = i, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Ih(n, r, i, u, f) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = hu(0), this.expirationTimes = hu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = hu(0), this.identifierPrefix = u, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null;
  }
  function Df(n, r, i, u, f, m, E, D, j) {
    return n = new Ih(n, r, i, D, j), r === 1 ? (r = 1, m === !0 && (r |= 8)) : r = 0, m = Ya(3, null, null, r), n.current = m, m.stateNode = n, m.memoizedState = { element: u, isDehydrated: i, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Yd(m), n;
  }
  function og(n, r, i) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ne, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: i };
  }
  function gp(n) {
    if (!n) return Tr;
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
            if (Fn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(p(171));
    }
    if (n.tag === 1) {
      var i = n.type;
      if (Fn(i)) return Rs(n, i, r);
    }
    return r;
  }
  function Fh(n, r, i, u, f, m, E, D, j) {
    return n = Df(i, u, !0, n, f, m, E, D, j), n.context = gp(null), i = n.current, u = Wn(), f = Ho(i), m = si(u, f), m.callback = r ?? null, qi(i, m, f), n.current.lanes = f, Zo(n, f, u), fa(n, u), n;
  }
  function Mf(n, r, i, u) {
    var f = r.current, m = Wn(), E = Ho(f);
    return i = gp(i), r.context === null ? r.context = i : r.pendingContext = i, r = si(m, E), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = qi(f, r, E), n !== null && (Hr(n, f, E, m), Kc(n, f, E)), E;
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
  function Of(n, r) {
    _p(n, r), (n = n.alternate) && _p(n, r);
  }
  function Vh() {
    return null;
  }
  var Ql = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Sp(n) {
    this._internalRoot = n;
  }
  jf.prototype.render = Sp.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(p(409));
    Mf(n, r, null, null);
  }, jf.prototype.unmount = Sp.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Yl(function() {
        Mf(null, n, null, null);
      }), r[oi] = null;
    }
  };
  function jf(n) {
    this._internalRoot = n;
  }
  jf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = gt();
      n = { blockedOn: null, target: n, priority: r };
      for (var i = 0; i < Xn.length && r !== 0 && r < Xn[i].priority; i++) ;
      Xn.splice(i, 0, n), i === 0 && ds(n);
    }
  };
  function Cp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Af(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Hh() {
  }
  function ig(n, r, i, u, f) {
    if (f) {
      if (typeof u == "function") {
        var m = u;
        u = function() {
          var Q = Lf(E);
          m.call(Q);
        };
      }
      var E = Fh(r, u, n, 0, null, !1, !1, "", Hh);
      return n._reactRootContainer = E, n[oi] = E.current, Ru(n.nodeType === 8 ? n.parentNode : n), Yl(), E;
    }
    for (; f = n.lastChild; ) n.removeChild(f);
    if (typeof u == "function") {
      var D = u;
      u = function() {
        var Q = Lf(j);
        D.call(Q);
      };
    }
    var j = Df(n, 0, !1, null, null, !1, !1, "", Hh);
    return n._reactRootContainer = j, n[oi] = j.current, Ru(n.nodeType === 8 ? n.parentNode : n), Yl(function() {
      Mf(r, j, i, u);
    }), j;
  }
  function ac(n, r, i, u, f) {
    var m = i._reactRootContainer;
    if (m) {
      var E = m;
      if (typeof f == "function") {
        var D = f;
        f = function() {
          var j = Lf(E);
          D.call(j);
        };
      }
      Mf(r, E, n, f);
    } else E = ig(i, r, n, f, u);
    return Lf(E);
  }
  Ft = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var i = lo(r.pendingLanes);
          i !== 0 && (ei(r, i | 1), fa(r, xt()), (zt & 6) === 0 && (Fu = xt() + 500, jo()));
        }
        break;
      case 13:
        Yl(function() {
          var u = wa(n, 1);
          if (u !== null) {
            var f = Wn();
            Hr(u, n, 1, f);
          }
        }), Of(n, 1);
    }
  }, cs = function(n) {
    if (n.tag === 13) {
      var r = wa(n, 134217728);
      if (r !== null) {
        var i = Wn();
        Hr(r, n, 134217728, i);
      }
      Of(n, 134217728);
    }
  }, Ro = function(n) {
    if (n.tag === 13) {
      var r = Ho(n), i = wa(n, r);
      if (i !== null) {
        var u = Wn();
        Hr(i, n, r, u);
      }
      Of(n, r);
    }
  }, gt = function() {
    return $t;
  }, yu = function(n, r) {
    var i = $t;
    try {
      return $t = n, r();
    } finally {
      $t = i;
    }
  }, en = function(n, r, i) {
    switch (r) {
      case "input":
        if (Zr(n, i), r = i.name, i.type === "radio" && r != null) {
          for (i = n; i.parentNode; ) i = i.parentNode;
          for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < i.length; r++) {
            var u = i[r];
            if (u !== n && u.form === n.form) {
              var f = En(u);
              if (!f) throw Error(p(90));
              Or(u), Zr(u, f);
            }
          }
        }
        break;
      case "textarea":
        to(n, i);
        break;
      case "select":
        r = i.value, r != null && Nn(n, !!i.multiple, r, !1);
    }
  }, hl = pp, Ri = Yl;
  var lg = { usingClientEntryPoint: !1, Events: [ot, po, En, Jo, vl, pp] }, oc = { findFiberByHostInstance: Nl, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, $h = { bundleType: oc.bundleType, version: oc.version, rendererPackageName: oc.rendererPackageName, rendererConfig: oc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: se.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Dn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: oc.findFiberByHostInstance || Vh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var el = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!el.isDisabled && el.supportsFiber) try {
      Ni = el.inject($h), ea = el;
    } catch {
    }
  }
  return Za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lg, Za.createPortal = function(n, r) {
    var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Cp(r)) throw Error(p(200));
    return og(n, r, null, i);
  }, Za.createRoot = function(n, r) {
    if (!Cp(n)) throw Error(p(299));
    var i = !1, u = "", f = Ql;
    return r != null && (r.unstable_strictMode === !0 && (i = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (f = r.onRecoverableError)), r = Df(n, 1, !1, null, null, i, !1, u, f), n[oi] = r.current, Ru(n.nodeType === 8 ? n.parentNode : n), new Sp(r);
  }, Za.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(p(188)) : (n = Object.keys(n).join(","), Error(p(268, n)));
    return n = Dn(r), n = n === null ? null : n.stateNode, n;
  }, Za.flushSync = function(n) {
    return Yl(n);
  }, Za.hydrate = function(n, r, i) {
    if (!Af(r)) throw Error(p(200));
    return ac(null, n, r, !0, i);
  }, Za.hydrateRoot = function(n, r, i) {
    if (!Cp(n)) throw Error(p(405));
    var u = i != null && i.hydratedSources || null, f = !1, m = "", E = Ql;
    if (i != null && (i.unstable_strictMode === !0 && (f = !0), i.identifierPrefix !== void 0 && (m = i.identifierPrefix), i.onRecoverableError !== void 0 && (E = i.onRecoverableError)), r = Fh(r, null, n, 1, i ?? null, f, !1, m, E), n[oi] = r.current, Ru(n), u) for (n = 0; n < u.length; n++) i = u[n], f = i._getVersion, f = f(i._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [i, f] : r.mutableSourceEagerHydrationData.push(
      i,
      f
    );
    return new jf(r);
  }, Za.render = function(n, r, i) {
    if (!Af(r)) throw Error(p(200));
    return ac(null, n, r, !1, i);
  }, Za.unmountComponentAtNode = function(n) {
    if (!Af(n)) throw Error(p(40));
    return n._reactRootContainer ? (Yl(function() {
      ac(null, null, n, !1, function() {
        n._reactRootContainer = null, n[oi] = null;
      });
    }), !0) : !1;
  }, Za.unstable_batchedUpdates = pp, Za.unstable_renderSubtreeIntoContainer = function(n, r, i, u) {
    if (!Af(i)) throw Error(p(200));
    if (n == null || n._reactInternals === void 0) throw Error(p(38));
    return ac(n, r, i, !1, u);
  }, Za.version = "18.3.1-next-f1338f8080-20240426", Za;
}
var eo = {};
var xE;
function h7() {
  return xE || (xE = 1, process.env.NODE_ENV !== "production" && (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = kv(), d = WE(), p = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _ = !1;
    function x(e) {
      _ = e;
    }
    function C(e) {
      if (!_) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          a[o - 1] = arguments[o];
        w("warn", e, a);
      }
    }
    function h(e) {
      if (!_) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          a[o - 1] = arguments[o];
        w("error", e, a);
      }
    }
    function w(e, t, a) {
      {
        var o = p.ReactDebugCurrentFrame, l = o.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(v) {
          return String(v);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var k = 0, b = 1, M = 2, U = 3, V = 4, H = 5, re = 6, ue = 7, xe = 8, be = 9, ge = 10, Ee = 11, se = 12, ie = 13, ne = 14, Ce = 15, Te = 16, qe = 17, le = 18, ze = 19, A = 21, X = 22, _e = 23, Qe = 24, je = 25, ke = !0, ae = !1, Le = !1, Se = !1, F = !1, J = !0, et = !0, He = !0, ht = !0, at = /* @__PURE__ */ new Set(), Pe = {}, dt = {};
    function mt(e, t) {
      Jt(e, t), Jt(e + "Capture", t);
    }
    function Jt(e, t) {
      Pe[e] && h("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Pe[e] = t;
      {
        var a = e.toLowerCase();
        dt[a] = e, e === "onDoubleClick" && (dt.ondblclick = e);
      }
      for (var o = 0; o < t.length; o++)
        at.add(t[o]);
    }
    var zn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Or = Object.prototype.hasOwnProperty;
    function Tn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function sr(e) {
      try {
        return Gn(e), !1;
      } catch {
        return !0;
      }
    }
    function Gn(e) {
      return "" + e;
    }
    function Qn(e, t) {
      if (sr(e))
        return h("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Tn(e)), Gn(e);
    }
    function Zr(e) {
      if (sr(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Tn(e)), Gn(e);
    }
    function Co(e, t) {
      if (sr(e))
        return h("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Tn(e)), Gn(e);
    }
    function ga(e, t) {
      if (sr(e))
        return h("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Tn(e)), Gn(e);
    }
    function nr(e) {
      if (sr(e))
        return h("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Tn(e)), Gn(e);
    }
    function Nn(e) {
      if (sr(e))
        return h("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Tn(e)), Gn(e);
    }
    var Kn = 0, br = 1, to = 2, Pn = 3, Rr = 4, _a = 5, no = 6, Eo = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ne = Eo + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", tt = new RegExp("^[" + Eo + "][" + Ne + "]*$"), Rt = {}, Qt = {};
    function sn(e) {
      return Or.call(Qt, e) ? !0 : Or.call(Rt, e) ? !1 : tt.test(e) ? (Qt[e] = !0, !0) : (Rt[e] = !0, h("Invalid attribute name: `%s`", e), !1);
    }
    function Sn(e, t, a) {
      return t !== null ? t.type === Kn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function vn(e, t, a, o) {
      if (a !== null && a.type === Kn)
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
    function rr(e, t, a, o) {
      if (t === null || typeof t > "u" || vn(e, t, a, o))
        return !0;
      if (o)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Pn:
            return !t;
          case Rr:
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
      this.acceptsBooleans = t === to || t === Pn || t === Rr, this.attributeName = o, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = v;
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
        Kn,
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
        br,
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
        Pn,
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
        Pn,
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
    var kr = /[\-\:]([a-z])/g, ja = function(e) {
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
      var t = e.replace(kr, ja);
      en[t] = new Zt(
        t,
        br,
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
      var t = e.replace(kr, ja);
      en[t] = new Zt(
        t,
        br,
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
      var t = e.replace(kr, ja);
      en[t] = new Zt(
        t,
        br,
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
        br,
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
    var Jo = "xlinkHref";
    en[Jo] = new Zt(
      "xlinkHref",
      br,
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
        br,
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
    var vl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, hl = !1;
    function Ri(e) {
      !hl && vl.test(e) && (hl = !0, h("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ki(e, t, a, o) {
      if (o.mustUseProperty) {
        var l = o.propertyName;
        return e[l];
      } else {
        Qn(a, t), o.sanitizeURL && Ri("" + a);
        var s = o.attributeName, v = null;
        if (o.type === Rr) {
          if (e.hasAttribute(s)) {
            var y = e.getAttribute(s);
            return y === "" ? !0 : rr(t, a, o, !1) ? y : y === "" + a ? a : y;
          }
        } else if (e.hasAttribute(s)) {
          if (rr(t, a, o, !1))
            return e.getAttribute(s);
          if (o.type === Pn)
            return a;
          v = e.getAttribute(s);
        }
        return rr(t, a, o, !1) ? v === null ? a : v : v === "" + a ? a : v;
      }
    }
    function ml(e, t, a, o) {
      {
        if (!sn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return Qn(a, t), l === "" + a ? a : l;
      }
    }
    function jr(e, t, a, o) {
      var l = cn(t);
      if (!Sn(t, l, o)) {
        if (rr(t, a, l, o) && (a = null), o || l === null) {
          if (sn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Qn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var v = l.mustUseProperty;
        if (v) {
          var y = l.propertyName;
          if (a === null) {
            var g = l.type;
            e[y] = g === Pn ? !1 : "";
          } else
            e[y] = a;
          return;
        }
        var T = l.attributeName, N = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(T);
        else {
          var I = l.type, z;
          I === Pn || I === Rr && a === !0 ? z = "" : (Qn(a, T), z = "" + a, l.sanitizeURL && Ri(z.toString())), N ? e.setAttributeNS(N, T, z) : e.setAttribute(T, z);
        }
      }
    }
    var Ar = /* @__PURE__ */ Symbol.for("react.element"), cr = /* @__PURE__ */ Symbol.for("react.portal"), xo = /* @__PURE__ */ Symbol.for("react.fragment"), ro = /* @__PURE__ */ Symbol.for("react.strict_mode"), wo = /* @__PURE__ */ Symbol.for("react.profiler"), bo = /* @__PURE__ */ Symbol.for("react.provider"), O = /* @__PURE__ */ Symbol.for("react.context"), ce = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ae = /* @__PURE__ */ Symbol.for("react.suspense"), Ge = /* @__PURE__ */ Symbol.for("react.suspense_list"), Et = /* @__PURE__ */ Symbol.for("react.memo"), _t = /* @__PURE__ */ Symbol.for("react.lazy"), Dt = /* @__PURE__ */ Symbol.for("react.scope"), Tt = /* @__PURE__ */ Symbol.for("react.debug_trace_mode"), Dn = /* @__PURE__ */ Symbol.for("react.offscreen"), fn = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), hn = /* @__PURE__ */ Symbol.for("react.cache"), fr = /* @__PURE__ */ Symbol.for("react.tracing_marker"), ao = Symbol.iterator, oo = "@@iterator";
    function xt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ao && e[ao] || e[oo];
      return typeof t == "function" ? t : null;
    }
    var bt = Object.assign, io = 0, yl, gl, Ti, fu, Ni, ea, ss;
    function Ur() {
    }
    Ur.__reactDisabledLog = !0;
    function Rc() {
      {
        if (io === 0) {
          yl = console.log, gl = console.info, Ti = console.warn, fu = console.error, Ni = console.group, ea = console.groupCollapsed, ss = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ur,
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
    function kc() {
      {
        if (io--, io === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: bt({}, e, {
              value: yl
            }),
            info: bt({}, e, {
              value: gl
            }),
            warn: bt({}, e, {
              value: Ti
            }),
            error: bt({}, e, {
              value: fu
            }),
            group: bt({}, e, {
              value: Ni
            }),
            groupCollapsed: bt({}, e, {
              value: ea
            }),
            groupEnd: bt({}, e, {
              value: ss
            })
          });
        }
        io < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var du = p.ReactCurrentDispatcher, Di;
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
      var pu = typeof WeakMap == "function" ? WeakMap : Map;
      uo = new pu();
    }
    function _l(e, t) {
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
      s = du.current, du.current = null, Rc();
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
            } catch (K) {
              o = K;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (K) {
              o = K;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (K) {
            o = K;
          }
          e();
        }
      } catch (K) {
        if (K && o && typeof K.stack == "string") {
          for (var y = K.stack.split(`
`), g = o.stack.split(`
`), T = y.length - 1, N = g.length - 1; T >= 1 && N >= 0 && y[T] !== g[N]; )
            N--;
          for (; T >= 1 && N >= 0; T--, N--)
            if (y[T] !== g[N]) {
              if (T !== 1 || N !== 1)
                do
                  if (T--, N--, N < 0 || y[T] !== g[N]) {
                    var I = `
` + y[T].replace(" at new ", " at ");
                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), typeof e == "function" && uo.set(e, I), I;
                  }
                while (T >= 1 && N >= 0);
              break;
            }
        }
      } finally {
        lo = !1, du.current = s, kc(), Error.prepareStackTrace = l;
      }
      var z = e ? e.displayName || e.name : "", Y = z ? Ca(z) : "";
      return typeof e == "function" && uo.set(e, Y), Y;
    }
    function Mi(e, t, a) {
      return _l(e, !0);
    }
    function vu(e, t, a) {
      return _l(e, !1);
    }
    function hu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Zo(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return _l(e, hu(e));
      if (typeof e == "string")
        return Ca(e);
      switch (e) {
        case Ae:
          return Ca("Suspense");
        case Ge:
          return Ca("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ce:
            return vu(e.render);
          case Et:
            return Zo(e.type, t, a);
          case _t: {
            var o = e, l = o._payload, s = o._init;
            try {
              return Zo(s(l), t, a);
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
        case Te:
          return Ca("Lazy");
        case ie:
          return Ca("Suspense");
        case ze:
          return Ca("SuspenseList");
        case k:
        case M:
        case Ce:
          return vu(e.type);
        case Ee:
          return vu(e.type.render);
        case b:
          return Mi(e.type);
        default:
          return "";
      }
    }
    function ei(e) {
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
    function mu(e) {
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
        case cr:
          return "Portal";
        case wo:
          return "Profiler";
        case ro:
          return "StrictMode";
        case Ae:
          return "Suspense";
        case Ge:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case O:
            var t = e;
            return mu(t) + ".Consumer";
          case bo:
            var a = e;
            return mu(a._context) + ".Provider";
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
    function cs(e, t, a) {
      var o = t.displayName || t.name || "";
      return e.displayName || (o !== "" ? a + "(" + o + ")" : a);
    }
    function Ro(e) {
      return e.displayName || "Context";
    }
    function gt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Qe:
          return "Cache";
        case be:
          var o = a;
          return Ro(o) + ".Consumer";
        case ge:
          var l = a;
          return Ro(l._context) + ".Provider";
        case le:
          return "DehydratedFragment";
        case Ee:
          return cs(a, a.render, "ForwardRef");
        case ue:
          return "Fragment";
        case H:
          return a;
        case V:
          return "Portal";
        case U:
          return "Root";
        case re:
          return "Text";
        case Te:
          return Ft(a);
        case xe:
          return a === ro ? "StrictMode" : "Mode";
        case X:
          return "Offscreen";
        case se:
          return "Profiler";
        case A:
          return "Scope";
        case ie:
          return "Suspense";
        case ze:
          return "SuspenseList";
        case je:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case b:
        case k:
        case qe:
        case M:
        case ne:
        case Ce:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var yu = p.ReactDebugCurrentFrame, dr = null, ko = !1;
    function zr() {
      {
        if (dr === null)
          return null;
        var e = dr._debugOwner;
        if (e !== null && typeof e < "u")
          return gt(e);
      }
      return null;
    }
    function To() {
      return dr === null ? "" : ei(dr);
    }
    function mn() {
      yu.getCurrentStack = null, dr = null, ko = !1;
    }
    function tn(e) {
      yu.getCurrentStack = e === null ? null : To, dr = e, ko = !1;
    }
    function Li() {
      return dr;
    }
    function Xn(e) {
      ko = e;
    }
    function Pr(e) {
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
          return Nn(e), e;
        default:
          return "";
      }
    }
    var Sl = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function fs(e, t) {
      Sl[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || h("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || h("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function ds(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Oi(e) {
      return e._valueTracker;
    }
    function Cl(e) {
      e._valueTracker = null;
    }
    function yd(e) {
      var t = "";
      return e && (ds(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Ua(e) {
      var t = ds(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Nn(e[t]);
      var o = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(y) {
            Nn(y), o = "" + y, s.call(this, y);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var v = {
          getValue: function() {
            return o;
          },
          setValue: function(y) {
            Nn(y), o = "" + y;
          },
          stopTracking: function() {
            Cl(e), delete e[t];
          }
        };
        return v;
      }
    }
    function so(e) {
      Oi(e) || (e._valueTracker = Ua(e));
    }
    function No(e) {
      if (!e)
        return !1;
      var t = Oi(e);
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
    var gu = !1, _u = !1, ji = !1, El = !1;
    function Su(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Cu(e, t) {
      var a = e, o = t.checked, l = bt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: o ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function co(e, t) {
      fs("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !_u && (h("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", zr() || "A component", t.type), _u = !0), t.value !== void 0 && t.defaultValue !== void 0 && !gu && (h("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", zr() || "A component", t.type), gu = !0);
      var a = e, o = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Aa(t.value != null ? t.value : o),
        controlled: Su(t)
      };
    }
    function S(e, t) {
      var a = e, o = t.checked;
      o != null && jr(a, "checked", o, !1);
    }
    function L(e, t) {
      var a = e;
      {
        var o = Su(t);
        !a._wrapperState.controlled && o && !El && (h("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), El = !0), a._wrapperState.controlled && !o && !ji && (h("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ji = !0);
      }
      S(e, t);
      var l = Aa(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = Pr(l)) : a.value !== Pr(l) && (a.value = Pr(l));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? lt(a, t.type, l) : t.hasOwnProperty("defaultValue") && lt(a, t.type, Aa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function G(e, t, a) {
      var o = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, s = l === "submit" || l === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var v = Pr(o._wrapperState.initialValue);
        a || v !== o.value && (o.value = v), o.defaultValue = v;
      }
      var y = o.name;
      y !== "" && (o.name = ""), o.defaultChecked = !o.defaultChecked, o.defaultChecked = !!o._wrapperState.initialChecked, y !== "" && (o.name = y);
    }
    function Z(e, t) {
      var a = e;
      L(a, t), we(a, t);
    }
    function we(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var o = e; o.parentNode; )
          o = o.parentNode;
        Qn(a, "name");
        for (var l = o.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var v = l[s];
          if (!(v === e || v.form !== e.form)) {
            var y = lm(v);
            if (!y)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            No(v), L(v, y);
          }
        }
      }
    }
    function lt(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || za(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Pr(e._wrapperState.initialValue) : e.defaultValue !== Pr(a) && (e.defaultValue = Pr(a)));
    }
    var Oe = !1, ct = !1, Mt = !1;
    function Vt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? c.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || ct || (ct = !0, h("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Mt || (Mt = !0, h("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Oe && (h("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Oe = !0);
    }
    function dn(e, t) {
      t.value != null && e.setAttribute("value", Pr(Aa(t.value)));
    }
    var nn = Array.isArray;
    function kt(e) {
      return nn(e);
    }
    var rn;
    rn = !1;
    function Cn() {
      var e = zr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Ai = ["value", "defaultValue"];
    function ps(e) {
      {
        fs("select", e);
        for (var t = 0; t < Ai.length; t++) {
          var a = Ai[t];
          if (e[a] != null) {
            var o = kt(e[a]);
            e.multiple && !o ? h("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Cn()) : !e.multiple && o && h("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Cn());
          }
        }
      }
    }
    function ti(e, t, a, o) {
      var l = e.options;
      if (t) {
        for (var s = a, v = {}, y = 0; y < s.length; y++)
          v["$" + s[y]] = !0;
        for (var g = 0; g < l.length; g++) {
          var T = v.hasOwnProperty("$" + l[g].value);
          l[g].selected !== T && (l[g].selected = T), T && o && (l[g].defaultSelected = !0);
        }
      } else {
        for (var N = Pr(Aa(a)), I = null, z = 0; z < l.length; z++) {
          if (l[z].value === N) {
            l[z].selected = !0, o && (l[z].defaultSelected = !0);
            return;
          }
          I === null && !l[z].disabled && (I = l[z]);
        }
        I !== null && (I.selected = !0);
      }
    }
    function vs(e, t) {
      return bt({}, t, {
        value: void 0
      });
    }
    function xl(e, t) {
      var a = e;
      ps(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !rn && (h("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), rn = !0);
    }
    function gd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var o = t.value;
      o != null ? ti(a, !!t.multiple, o, !1) : t.defaultValue != null && ti(a, !!t.multiple, t.defaultValue, !0);
    }
    function Tc(e, t) {
      var a = e, o = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? ti(a, !!t.multiple, l, !1) : o !== !!t.multiple && (t.defaultValue != null ? ti(a, !!t.multiple, t.defaultValue, !0) : ti(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function _d(e, t) {
      var a = e, o = t.value;
      o != null && ti(a, !!t.multiple, o, !1);
    }
    var Dv = !1;
    function Sd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var o = bt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Pr(a._wrapperState.initialValue)
      });
      return o;
    }
    function Cd(e, t) {
      var a = e;
      fs("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Dv && (h("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", zr() || "A component"), Dv = !0);
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
        var s = Pr(o);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = Pr(l));
    }
    function Lv(e, t) {
      var a = e, o = a.textContent;
      o === a._wrapperState.initialValue && o !== "" && o !== null && (a.value = o);
    }
    function Uy(e, t) {
      Mv(e, t);
    }
    var ni = "http://www.w3.org/1999/xhtml", Ed = "http://www.w3.org/1998/Math/MathML", xd = "http://www.w3.org/2000/svg";
    function wd(e) {
      switch (e) {
        case "svg":
          return xd;
        case "math":
          return Ed;
        default:
          return ni;
      }
    }
    function bd(e, t) {
      return e == null || e === ni ? wd(t) : e === xd && t === "foreignObject" ? ni : e;
    }
    var Ov = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, o, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, o, l);
        });
      } : e;
    }, Nc, jv = Ov(function(e, t) {
      if (e.namespaceURI === xd && !("innerHTML" in e)) {
        Nc = Nc || document.createElement("div"), Nc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Nc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ta = 1, ri = 3, In = 8, ai = 9, Rd = 11, Eu = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === ri) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, hs = {
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
    }, ms = {
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
    Object.keys(ms).forEach(function(e) {
      Uv.forEach(function(t) {
        ms[Av(t, e)] = ms[e];
      });
    });
    function Dc(e, t, a) {
      var o = t == null || typeof t == "boolean" || t === "";
      return o ? "" : !a && typeof t == "number" && t !== 0 && !(ms.hasOwnProperty(e) && ms[e]) ? t + "px" : (ga(t, e), ("" + t).trim());
    }
    var zv = /([A-Z])/g, Pv = /^ms-/;
    function xu(e) {
      return e.replace(zv, "-$1").toLowerCase().replace(Pv, "-ms-");
    }
    var Iv = function() {
    };
    {
      var zy = /^(?:webkit|moz|o)[A-Z]/, Py = /^-ms-/, Fv = /-(.)/g, kd = /;\s*$/, Do = {}, wl = {}, Vv = !1, ys = !1, Iy = function(e) {
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
        wl.hasOwnProperty(t) && wl[t] || (wl[t] = !0, h(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(kd, "")));
      }, $v = function(e, t) {
        Vv || (Vv = !0, h("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Bv = function(e, t) {
        ys || (ys = !0, h("`Infinity` is an invalid value for the `%s` css style property.", e));
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
              t += a + (s ? o : xu(o)) + ":", t += Dc(o, l, s), a = ";";
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
        for (var o = hs[a] || [a], l = 0; l < o.length; l++)
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
            var g = v + "," + y;
            if (l[g])
              continue;
            l[g] = !0, h("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Vy(e[v]) ? "Removing" : "Updating", v, y);
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
    }, gs = bt({
      menuitem: !0
    }, fo), Gv = "__html";
    function Mc(e, t) {
      if (t) {
        if (gs[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
    function Ui(e, t) {
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
    var _s = {
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
    }, wu = {}, $y = new RegExp("^(aria)-[" + Ne + "]*$"), bu = new RegExp("^(aria)[A-Z][" + Ne + "]*$");
    function Dd(e, t) {
      {
        if (Or.call(wu, t) && wu[t])
          return !0;
        if (bu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), o = Lc.hasOwnProperty(a) ? a : null;
          if (o == null)
            return h("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), wu[t] = !0, !0;
          if (t !== o)
            return h("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), wu[t] = !0, !0;
        }
        if ($y.test(t)) {
          var l = t.toLowerCase(), s = Lc.hasOwnProperty(l) ? l : null;
          if (s == null)
            return wu[t] = !0, !1;
          if (t !== s)
            return h("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), wu[t] = !0, !0;
        }
      }
      return !0;
    }
    function Ss(e, t) {
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
      Ui(e, t) || Ss(e, t);
    }
    var Ld = !1;
    function Oc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Ld && (Ld = !0, e === "select" && t.multiple ? h("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : h("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var bl = function() {
    };
    {
      var pr = {}, Od = /^on./, jc = /^on[^A-Z]/, Qv = new RegExp("^(aria)-[" + Ne + "]*$"), Kv = new RegExp("^(aria)[A-Z][" + Ne + "]*$");
      bl = function(e, t, a, o) {
        if (Or.call(pr, t) && pr[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return h("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), pr[t] = !0, !0;
        if (o != null) {
          var s = o.registrationNameDependencies, v = o.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var y = v.hasOwnProperty(l) ? v[l] : null;
          if (y != null)
            return h("Invalid event handler property `%s`. Did you mean `%s`?", t, y), pr[t] = !0, !0;
          if (Od.test(t))
            return h("Unknown event handler property `%s`. It will be ignored.", t), pr[t] = !0, !0;
        } else if (Od.test(t))
          return jc.test(t) && h("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), pr[t] = !0, !0;
        if (Qv.test(t) || Kv.test(t))
          return !0;
        if (l === "innerhtml")
          return h("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), pr[t] = !0, !0;
        if (l === "aria")
          return h("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), pr[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return h("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), pr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return h("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), pr[t] = !0, !0;
        var g = cn(t), T = g !== null && g.type === Kn;
        if (_s.hasOwnProperty(l)) {
          var N = _s[l];
          if (N !== t)
            return h("Invalid DOM property `%s`. Did you mean `%s`?", t, N), pr[t] = !0, !0;
        } else if (!T && t !== l)
          return h("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), pr[t] = !0, !0;
        return typeof a == "boolean" && vn(t, a, g, !1) ? (a ? h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), pr[t] = !0, !0) : T ? !0 : vn(t, a, g, !1) ? (pr[t] = !0, !1) : ((a === "false" || a === "true") && g !== null && g.type === Pn && (h("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), pr[t] = !0), !0);
      };
    }
    var Xv = function(e, t, a) {
      {
        var o = [];
        for (var l in t) {
          var s = bl(e, l, t[l], a);
          s || o.push(l);
        }
        var v = o.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        o.length === 1 ? h("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e) : o.length > 1 && h("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e);
      }
    };
    function Jv(e, t, a) {
      Ui(e, t) || Xv(e, t, a);
    }
    var jd = 1, Ac = 2, Pa = 4, Ad = jd | Ac | Pa, Rl = null;
    function By(e) {
      Rl !== null && h("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Rl = e;
    }
    function qy() {
      Rl === null && h("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Rl = null;
    }
    function Cs(e) {
      return e === Rl;
    }
    function Ud(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === ri ? t.parentNode : t;
    }
    var Uc = null, kl = null, Kt = null;
    function zc(e) {
      var t = Wu(e);
      if (t) {
        if (typeof Uc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var o = lm(a);
          Uc(t.stateNode, t.type, o);
        }
      }
    }
    function Pc(e) {
      Uc = e;
    }
    function Ru(e) {
      kl ? Kt ? Kt.push(e) : Kt = [e] : kl = e;
    }
    function Zv() {
      return kl !== null || Kt !== null;
    }
    function Ic() {
      if (kl) {
        var e = kl, t = Kt;
        if (kl = null, Kt = null, zc(e), t)
          for (var a = 0; a < t.length; a++)
            zc(t[a]);
      }
    }
    var ku = function(e, t) {
      return e(t);
    }, Es = function() {
    }, zi = !1;
    function eh() {
      var e = Zv();
      e && (Es(), Ic());
    }
    function th(e, t, a) {
      if (zi)
        return e(t, a);
      zi = !0;
      try {
        return ku(e, t, a);
      } finally {
        zi = !1, eh();
      }
    }
    function Wy(e, t, a) {
      ku = e, Es = a;
    }
    function nh(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Fc(e, t, a) {
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
    function Pi(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var o = lm(a);
      if (o === null)
        return null;
      var l = o[t];
      if (Fc(t, e.type, o))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var xs = !1;
    if (zn)
      try {
        var Tl = {};
        Object.defineProperty(Tl, "passive", {
          get: function() {
            xs = !0;
          }
        }), window.addEventListener("test", Tl, Tl), window.removeEventListener("test", Tl, Tl);
      } catch {
        xs = !1;
      }
    function Vc(e, t, a, o, l, s, v, y, g) {
      var T = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, T);
      } catch (N) {
        this.onError(N);
      }
    }
    var Hc = Vc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var zd = document.createElement("react");
      Hc = function(t, a, o, l, s, v, y, g, T) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var N = document.createEvent("Event"), I = !1, z = !0, Y = window.event, K = Object.getOwnPropertyDescriptor(window, "event");
        function ee() {
          zd.removeEventListener(te, ut, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = Y);
        }
        var Fe = Array.prototype.slice.call(arguments, 3);
        function ut() {
          I = !0, ee(), a.apply(o, Fe), z = !1;
        }
        var nt, It = !1, Ot = !1;
        function B(q) {
          if (nt = q.error, It = !0, nt === null && q.colno === 0 && q.lineno === 0 && (Ot = !0), q.defaultPrevented && nt != null && typeof nt == "object")
            try {
              nt._suppressLogging = !0;
            } catch {
            }
        }
        var te = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", B), zd.addEventListener(te, ut, !1), N.initEvent(te, !1, !1), zd.dispatchEvent(N), K && Object.defineProperty(window, "event", K), I && z && (It ? Ot && (nt = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : nt = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(nt)), window.removeEventListener("error", B), !I)
          return ee(), Vc.apply(this, arguments);
      };
    }
    var rh = Hc, Tu = !1, $c = null, Nu = !1, Mo = null, ah = {
      onError: function(e) {
        Tu = !0, $c = e;
      }
    };
    function Ii(e, t, a, o, l, s, v, y, g) {
      Tu = !1, $c = null, rh.apply(ah, arguments);
    }
    function Lo(e, t, a, o, l, s, v, y, g) {
      if (Ii.apply(this, arguments), Tu) {
        var T = bs();
        Nu || (Nu = !0, Mo = T);
      }
    }
    function ws() {
      if (Nu) {
        var e = Mo;
        throw Nu = !1, Mo = null, e;
      }
    }
    function oi() {
      return Tu;
    }
    function bs() {
      if (Tu) {
        var e = $c;
        return Tu = !1, $c = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Du(e) {
      return e._reactInternals;
    }
    function Yy(e) {
      return e._reactInternals !== void 0;
    }
    function Nl(e, t) {
      e._reactInternals = t;
    }
    var ot = (
      /*                      */
      0
    ), po = (
      /*                */
      1
    ), En = (
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
    ), Tr = (
      /*            */
      256
    ), Rn = (
      /*                          */
      512
    ), Jn = (
      /*                     */
      1024
    ), na = (
      /*                      */
      2048
    ), ra = (
      /*                    */
      4096
    ), Fn = (
      /*                   */
      8192
    ), Mu = (
      /*             */
      16384
    ), oh = (
      /*               */
      32767
    ), Rs = (
      /*                   */
      32768
    ), ar = (
      /*                */
      65536
    ), Bc = (
      /* */
      131072
    ), Oo = (
      /*                       */
      1048576
    ), Lu = (
      /*                    */
      2097152
    ), ii = (
      /*                 */
      4194304
    ), qc = (
      /*                */
      8388608
    ), Fi = (
      /*               */
      16777216
    ), jo = (
      /*              */
      33554432
    ), Vi = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ut | Jn | 0
    ), Hi = En | Ut | Ia | Fa | Rn | ra | Fn, $i = Ut | pn | Rn | Fn, li = na | Ia, Vn = ii | qc | Lu, Va = p.ReactCurrentOwner;
    function Ea(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var o = t;
        do
          t = o, (t.flags & (En | ra)) !== ot && (a = t.return), o = t.return;
        while (o);
      }
      return t.tag === U ? a : null;
    }
    function Ao(e) {
      if (e.tag === ie) {
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
    function Dl(e) {
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
      var l = Du(e);
      return l ? Ea(l) === l : !1;
    }
    function Wc(e) {
      if (Ea(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Yc(e) {
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
          for (var g = s.child; g; ) {
            if (g === o)
              return Wc(s), e;
            if (g === l)
              return Wc(s), t;
            g = g.sibling;
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
    function aa(e) {
      var t = Yc(e);
      return t !== null ? oa(t) : null;
    }
    function oa(e) {
      if (e.tag === H || e.tag === re)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = oa(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function gn(e) {
      var t = Yc(e);
      return t !== null ? Ha(t) : null;
    }
    function Ha(e) {
      if (e.tag === H || e.tag === re)
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
    var Pd = d.unstable_scheduleCallback, lh = d.unstable_cancelCallback, Id = d.unstable_shouldYield, Fd = d.unstable_requestPaint, Zn = d.unstable_now, Gc = d.unstable_getCurrentPriorityLevel, ks = d.unstable_ImmediatePriority, Bi = d.unstable_UserBlockingPriority, ui = d.unstable_NormalPriority, Gy = d.unstable_LowPriority, Ml = d.unstable_IdlePriority, Qc = d.unstable_yieldValue, uh = d.unstable_setDisableYieldValue, Ll = null, Mn = null, Ie = null, xa = !1, ia = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Ou(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return h("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        et && (e = bt({}, e, {
          getLaneLabelMap: Ol,
          injectProfilingHooks: $a
        })), Ll = t.inject(e), Mn = t;
      } catch (a) {
        h("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Vd(e, t) {
      if (Mn && typeof Mn.onScheduleFiberRoot == "function")
        try {
          Mn.onScheduleFiberRoot(Ll, e, t);
        } catch (a) {
          xa || (xa = !0, h("React instrumentation encountered an error: %s", a));
        }
    }
    function Hd(e, t) {
      if (Mn && typeof Mn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & rt) === rt;
          if (He) {
            var o;
            switch (t) {
              case Ir:
                o = ks;
                break;
              case Po:
                o = Bi;
                break;
              case Ba:
                o = ui;
                break;
              case qa:
                o = Ml;
                break;
              default:
                o = ui;
                break;
            }
            Mn.onCommitFiberRoot(Ll, e, o, a);
          }
        } catch (l) {
          xa || (xa = !0, h("React instrumentation encountered an error: %s", l));
        }
    }
    function $d(e) {
      if (Mn && typeof Mn.onPostCommitFiberRoot == "function")
        try {
          Mn.onPostCommitFiberRoot(Ll, e);
        } catch (t) {
          xa || (xa = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function Bd(e) {
      if (Mn && typeof Mn.onCommitFiberUnmount == "function")
        try {
          Mn.onCommitFiberUnmount(Ll, e);
        } catch (t) {
          xa || (xa = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function xn(e) {
      if (typeof Qc == "function" && (uh(e), x(e)), Mn && typeof Mn.setStrictMode == "function")
        try {
          Mn.setStrictMode(Ll, e);
        } catch (t) {
          xa || (xa = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function $a(e) {
      Ie = e;
    }
    function Ol() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Ul; a++) {
          var o = dh(t);
          e.set(t, o), t *= 2;
        }
        return e;
      }
    }
    function qd(e) {
      Ie !== null && typeof Ie.markCommitStarted == "function" && Ie.markCommitStarted(e);
    }
    function Wd() {
      Ie !== null && typeof Ie.markCommitStopped == "function" && Ie.markCommitStopped();
    }
    function wa(e) {
      Ie !== null && typeof Ie.markComponentRenderStarted == "function" && Ie.markComponentRenderStarted(e);
    }
    function ba() {
      Ie !== null && typeof Ie.markComponentRenderStopped == "function" && Ie.markComponentRenderStopped();
    }
    function Yd(e) {
      Ie !== null && typeof Ie.markComponentPassiveEffectMountStarted == "function" && Ie.markComponentPassiveEffectMountStarted(e);
    }
    function sh() {
      Ie !== null && typeof Ie.markComponentPassiveEffectMountStopped == "function" && Ie.markComponentPassiveEffectMountStopped();
    }
    function si(e) {
      Ie !== null && typeof Ie.markComponentPassiveEffectUnmountStarted == "function" && Ie.markComponentPassiveEffectUnmountStarted(e);
    }
    function qi() {
      Ie !== null && typeof Ie.markComponentPassiveEffectUnmountStopped == "function" && Ie.markComponentPassiveEffectUnmountStopped();
    }
    function Kc(e) {
      Ie !== null && typeof Ie.markComponentLayoutEffectMountStarted == "function" && Ie.markComponentLayoutEffectMountStarted(e);
    }
    function ch() {
      Ie !== null && typeof Ie.markComponentLayoutEffectMountStopped == "function" && Ie.markComponentLayoutEffectMountStopped();
    }
    function Ts(e) {
      Ie !== null && typeof Ie.markComponentLayoutEffectUnmountStarted == "function" && Ie.markComponentLayoutEffectUnmountStarted(e);
    }
    function Gd() {
      Ie !== null && typeof Ie.markComponentLayoutEffectUnmountStopped == "function" && Ie.markComponentLayoutEffectUnmountStopped();
    }
    function Ns(e, t, a) {
      Ie !== null && typeof Ie.markComponentErrored == "function" && Ie.markComponentErrored(e, t, a);
    }
    function zo(e, t, a) {
      Ie !== null && typeof Ie.markComponentSuspended == "function" && Ie.markComponentSuspended(e, t, a);
    }
    function Ds(e) {
      Ie !== null && typeof Ie.markLayoutEffectsStarted == "function" && Ie.markLayoutEffectsStarted(e);
    }
    function Ms() {
      Ie !== null && typeof Ie.markLayoutEffectsStopped == "function" && Ie.markLayoutEffectsStopped();
    }
    function jl(e) {
      Ie !== null && typeof Ie.markPassiveEffectsStarted == "function" && Ie.markPassiveEffectsStarted(e);
    }
    function Qd() {
      Ie !== null && typeof Ie.markPassiveEffectsStopped == "function" && Ie.markPassiveEffectsStopped();
    }
    function Al(e) {
      Ie !== null && typeof Ie.markRenderStarted == "function" && Ie.markRenderStarted(e);
    }
    function fh() {
      Ie !== null && typeof Ie.markRenderYielded == "function" && Ie.markRenderYielded();
    }
    function Xc() {
      Ie !== null && typeof Ie.markRenderStopped == "function" && Ie.markRenderStopped();
    }
    function wn(e) {
      Ie !== null && typeof Ie.markRenderScheduled == "function" && Ie.markRenderScheduled(e);
    }
    function Jc(e, t) {
      Ie !== null && typeof Ie.markForceUpdateScheduled == "function" && Ie.markForceUpdateScheduled(e, t);
    }
    function Ls(e, t) {
      Ie !== null && typeof Ie.markStateUpdateScheduled == "function" && Ie.markStateUpdateScheduled(e, t);
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
    ), Hn = Math.clz32 ? Math.clz32 : Os, or = Math.log, Zc = Math.LN2;
    function Os(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (or(t) / Zc | 0) | 0;
    }
    var Ul = 31, fe = (
      /*                        */
      0
    ), Ht = (
      /*                          */
      0
    ), pt = (
      /*                        */
      1
    ), Wi = (
      /*    */
      2
    ), vo = (
      /*             */
      4
    ), Nr = (
      /*            */
      8
    ), Ln = (
      /*                     */
      16
    ), ci = (
      /*                */
      32
    ), Yi = (
      /*                       */
      4194240
    ), zl = (
      /*                        */
      64
    ), ef = (
      /*                        */
      128
    ), tf = (
      /*                        */
      256
    ), nf = (
      /*                        */
      512
    ), rf = (
      /*                        */
      1024
    ), af = (
      /*                        */
      2048
    ), of = (
      /*                        */
      4096
    ), lf = (
      /*                        */
      8192
    ), uf = (
      /*                        */
      16384
    ), Pl = (
      /*                       */
      32768
    ), sf = (
      /*                       */
      65536
    ), ju = (
      /*                       */
      131072
    ), Au = (
      /*                       */
      262144
    ), cf = (
      /*                       */
      524288
    ), js = (
      /*                       */
      1048576
    ), ff = (
      /*                       */
      2097152
    ), As = (
      /*                            */
      130023424
    ), Il = (
      /*                             */
      4194304
    ), df = (
      /*                             */
      8388608
    ), Us = (
      /*                             */
      16777216
    ), pf = (
      /*                             */
      33554432
    ), vf = (
      /*                             */
      67108864
    ), Kd = Il, zs = (
      /*          */
      134217728
    ), Xd = (
      /*                          */
      268435455
    ), Ps = (
      /*               */
      268435456
    ), Fl = (
      /*                        */
      536870912
    ), la = (
      /*                   */
      1073741824
    );
    function dh(e) {
      {
        if (e & pt)
          return "Sync";
        if (e & Wi)
          return "InputContinuousHydration";
        if (e & vo)
          return "InputContinuous";
        if (e & Nr)
          return "DefaultHydration";
        if (e & Ln)
          return "Default";
        if (e & ci)
          return "TransitionHydration";
        if (e & Yi)
          return "Transition";
        if (e & As)
          return "Retry";
        if (e & zs)
          return "SelectiveHydration";
        if (e & Ps)
          return "IdleHydration";
        if (e & Fl)
          return "Idle";
        if (e & la)
          return "Offscreen";
      }
    }
    var un = -1, Vl = zl, hf = Il;
    function Is(e) {
      switch (Gi(e)) {
        case pt:
          return pt;
        case Wi:
          return Wi;
        case vo:
          return vo;
        case Nr:
          return Nr;
        case Ln:
          return Ln;
        case ci:
          return ci;
        case zl:
        case ef:
        case tf:
        case nf:
        case rf:
        case af:
        case of:
        case lf:
        case uf:
        case Pl:
        case sf:
        case ju:
        case Au:
        case cf:
        case js:
        case ff:
          return e & Yi;
        case Il:
        case df:
        case Us:
        case pf:
        case vf:
          return e & As;
        case zs:
          return zs;
        case Ps:
          return Ps;
        case Fl:
          return Fl;
        case la:
          return la;
        default:
          return h("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function mf(e, t) {
      var a = e.pendingLanes;
      if (a === fe)
        return fe;
      var o = fe, l = e.suspendedLanes, s = e.pingedLanes, v = a & Xd;
      if (v !== fe) {
        var y = v & ~l;
        if (y !== fe)
          o = Is(y);
        else {
          var g = v & s;
          g !== fe && (o = Is(g));
        }
      } else {
        var T = a & ~l;
        T !== fe ? o = Is(T) : s !== fe && (o = Is(s));
      }
      if (o === fe)
        return fe;
      if (t !== fe && t !== o && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === fe) {
        var N = Gi(o), I = Gi(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          N >= I || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          N === Ln && (I & Yi) !== fe
        )
          return t;
      }
      (o & vo) !== fe && (o |= a & Ln);
      var z = e.entangledLanes;
      if (z !== fe)
        for (var Y = e.entanglements, K = o & z; K > 0; ) {
          var ee = $n(K), Fe = 1 << ee;
          o |= Y[ee], K &= ~Fe;
        }
      return o;
    }
    function ho(e, t) {
      for (var a = e.eventTimes, o = un; t > 0; ) {
        var l = $n(t), s = 1 << l, v = a[l];
        v > o && (o = v), t &= ~s;
      }
      return o;
    }
    function Jd(e, t) {
      switch (e) {
        case pt:
        case Wi:
        case vo:
          return t + 250;
        case Nr:
        case Ln:
        case ci:
        case zl:
        case ef:
        case tf:
        case nf:
        case rf:
        case af:
        case of:
        case lf:
        case uf:
        case Pl:
        case sf:
        case ju:
        case Au:
        case cf:
        case js:
        case ff:
          return t + 5e3;
        case Il:
        case df:
        case Us:
        case pf:
        case vf:
          return un;
        case zs:
        case Ps:
        case Fl:
        case la:
          return un;
        default:
          return h("Should have found matching lanes. This is a bug in React."), un;
      }
    }
    function yf(e, t) {
      for (var a = e.pendingLanes, o = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, v = a; v > 0; ) {
        var y = $n(v), g = 1 << y, T = s[y];
        T === un ? ((g & o) === fe || (g & l) !== fe) && (s[y] = Jd(g, t)) : T <= t && (e.expiredLanes |= g), v &= ~g;
      }
    }
    function ph(e) {
      return Is(e.pendingLanes);
    }
    function gf(e) {
      var t = e.pendingLanes & ~la;
      return t !== fe ? t : t & la ? la : fe;
    }
    function vh(e) {
      return (e & pt) !== fe;
    }
    function Fs(e) {
      return (e & Xd) !== fe;
    }
    function Hl(e) {
      return (e & As) === e;
    }
    function Zd(e) {
      var t = pt | vo | Ln;
      return (e & t) === fe;
    }
    function ep(e) {
      return (e & Yi) === e;
    }
    function _f(e, t) {
      var a = Wi | vo | Nr | Ln;
      return (t & a) !== fe;
    }
    function hh(e, t) {
      return (t & e.expiredLanes) !== fe;
    }
    function tp(e) {
      return (e & Yi) !== fe;
    }
    function np() {
      var e = Vl;
      return Vl <<= 1, (Vl & Yi) === fe && (Vl = zl), e;
    }
    function mh() {
      var e = hf;
      return hf <<= 1, (hf & As) === fe && (hf = Il), e;
    }
    function Gi(e) {
      return e & -e;
    }
    function Vs(e) {
      return Gi(e);
    }
    function $n(e) {
      return 31 - Hn(e);
    }
    function vr(e) {
      return $n(e);
    }
    function ua(e, t) {
      return (e & t) !== fe;
    }
    function $l(e, t) {
      return (e & t) === t;
    }
    function wt(e, t) {
      return e | t;
    }
    function Hs(e, t) {
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
    function $s(e) {
      for (var t = [], a = 0; a < Ul; a++)
        t.push(e);
      return t;
    }
    function Uu(e, t, a) {
      e.pendingLanes |= t, t !== Fl && (e.suspendedLanes = fe, e.pingedLanes = fe);
      var o = e.eventTimes, l = vr(t);
      o[l] = a;
    }
    function _h(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, o = t; o > 0; ) {
        var l = $n(o), s = 1 << l;
        a[l] = un, o &= ~s;
      }
    }
    function Sf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function ap(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = fe, e.pingedLanes = fe, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var o = e.entanglements, l = e.eventTimes, s = e.expirationTimes, v = a; v > 0; ) {
        var y = $n(v), g = 1 << y;
        o[y] = fe, l[y] = un, s[y] = un, v &= ~g;
      }
    }
    function Cf(e, t) {
      for (var a = e.entangledLanes |= t, o = e.entanglements, l = a; l; ) {
        var s = $n(l), v = 1 << s;
        // Is this one of the newly entangled lanes?
        v & t | // Is this lane transitively entangled with the newly entangled lanes?
        o[s] & t && (o[s] |= t), l &= ~v;
      }
    }
    function op(e, t) {
      var a = Gi(t), o;
      switch (a) {
        case vo:
          o = Wi;
          break;
        case Ln:
          o = Nr;
          break;
        case zl:
        case ef:
        case tf:
        case nf:
        case rf:
        case af:
        case of:
        case lf:
        case uf:
        case Pl:
        case sf:
        case ju:
        case Au:
        case cf:
        case js:
        case ff:
        case Il:
        case df:
        case Us:
        case pf:
        case vf:
          o = ci;
          break;
        case Fl:
          o = Ps;
          break;
        default:
          o = Ht;
          break;
      }
      return (o & (e.suspendedLanes | t)) !== Ht ? Ht : o;
    }
    function Bs(e, t, a) {
      if (ia)
        for (var o = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = vr(a), s = 1 << l, v = o[l];
          v.add(t), a &= ~s;
        }
    }
    function Sh(e, t) {
      if (ia)
        for (var a = e.pendingUpdatersLaneMap, o = e.memoizedUpdaters; t > 0; ) {
          var l = vr(t), s = 1 << l, v = a[l];
          v.size > 0 && (v.forEach(function(y) {
            var g = y.alternate;
            (g === null || !o.has(g)) && o.add(y);
          }), v.clear()), t &= ~s;
        }
    }
    function ip(e, t) {
      return null;
    }
    var Ir = pt, Po = vo, Ba = Ln, qa = Fl, qs = Ht;
    function Wa() {
      return qs;
    }
    function Bn(e) {
      qs = e;
    }
    function Ch(e, t) {
      var a = qs;
      try {
        return qs = e, t();
      } finally {
        qs = a;
      }
    }
    function Eh(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Ws(e, t) {
      return e > t ? e : t;
    }
    function ir(e, t) {
      return e !== 0 && e < t;
    }
    function xh(e) {
      var t = Gi(e);
      return ir(Ir, t) ? ir(Po, t) ? Fs(t) ? Ba : qa : Po : Ir;
    }
    function Ef(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ys;
    function Dr(e) {
      Ys = e;
    }
    function Qy(e) {
      Ys(e);
    }
    var Ye;
    function zu(e) {
      Ye = e;
    }
    var xf;
    function wh(e) {
      xf = e;
    }
    var bh;
    function Gs(e) {
      bh = e;
    }
    var Qs;
    function lp(e) {
      Qs = e;
    }
    var wf = !1, Ks = [], fi = null, Io = null, Fo = null, On = /* @__PURE__ */ new Map(), Fr = /* @__PURE__ */ new Map(), Vr = [], Rh = [
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
          fi = null;
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
          On.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var o = t.pointerId;
          Fr.delete(o);
          break;
        }
      }
    }
    function sa(e, t, a, o, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var v = mo(t, a, o, l, s);
        if (t !== null) {
          var y = Wu(t);
          y !== null && Ye(y);
        }
        return v;
      }
      e.eventSystemFlags |= o;
      var g = e.targetContainers;
      return l !== null && g.indexOf(l) === -1 && g.push(l), e;
    }
    function Ky(e, t, a, o, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return fi = sa(fi, e, t, a, o, s), !0;
        }
        case "dragenter": {
          var v = l;
          return Io = sa(Io, e, t, a, o, v), !0;
        }
        case "mouseover": {
          var y = l;
          return Fo = sa(Fo, e, t, a, o, y), !0;
        }
        case "pointerover": {
          var g = l, T = g.pointerId;
          return On.set(T, sa(On.get(T) || null, e, t, a, o, g)), !0;
        }
        case "gotpointercapture": {
          var N = l, I = N.pointerId;
          return Fr.set(I, sa(Fr.get(I) || null, e, t, a, o, N)), !0;
        }
      }
      return !1;
    }
    function sp(e) {
      var t = uc(e.target);
      if (t !== null) {
        var a = Ea(t);
        if (a !== null) {
          var o = a.tag;
          if (o === ie) {
            var l = Ao(a);
            if (l !== null) {
              e.blockedOn = l, Qs(e.priority, function() {
                xf(a);
              });
              return;
            }
          } else if (o === U) {
            var s = a.stateNode;
            if (Ef(s)) {
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
      }, o = 0; o < Vr.length && ir(t, Vr[o].priority); o++)
        ;
      Vr.splice(o, 0, a), o === 0 && sp(a);
    }
    function Xs(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], o = Iu(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (o === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          By(s), l.target.dispatchEvent(s), qy();
        } else {
          var v = Wu(o);
          return v !== null && Ye(v), e.blockedOn = o, !1;
        }
        t.shift();
      }
      return !0;
    }
    function cp(e, t, a) {
      Xs(e) && a.delete(t);
    }
    function Xy() {
      wf = !1, fi !== null && Xs(fi) && (fi = null), Io !== null && Xs(Io) && (Io = null), Fo !== null && Xs(Fo) && (Fo = null), On.forEach(cp), Fr.forEach(cp);
    }
    function Qi(e, t) {
      e.blockedOn === t && (e.blockedOn = null, wf || (wf = !0, d.unstable_scheduleCallback(d.unstable_NormalPriority, Xy)));
    }
    function Bl(e) {
      if (Ks.length > 0) {
        Qi(Ks[0], e);
        for (var t = 1; t < Ks.length; t++) {
          var a = Ks[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      fi !== null && Qi(fi, e), Io !== null && Qi(Io, e), Fo !== null && Qi(Fo, e);
      var o = function(y) {
        return Qi(y, e);
      };
      On.forEach(o), Fr.forEach(o);
      for (var l = 0; l < Vr.length; l++) {
        var s = Vr[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Vr.length > 0; ) {
        var v = Vr[0];
        if (v.blockedOn !== null)
          break;
        sp(v), v.blockedOn === null && Vr.shift();
      }
    }
    var hr = p.ReactCurrentBatchConfig, zt = !0;
    function er(e) {
      zt = !!e;
    }
    function qn() {
      return zt;
    }
    function mr(e, t, a) {
      var o = bf(t), l;
      switch (o) {
        case Ir:
          l = Ra;
          break;
        case Po:
          l = Pu;
          break;
        case Ba:
        default:
          l = jn;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function Ra(e, t, a, o) {
      var l = Wa(), s = hr.transition;
      hr.transition = null;
      try {
        Bn(Ir), jn(e, t, a, o);
      } finally {
        Bn(l), hr.transition = s;
      }
    }
    function Pu(e, t, a, o) {
      var l = Wa(), s = hr.transition;
      hr.transition = null;
      try {
        Bn(Po), jn(e, t, a, o);
      } finally {
        Bn(l), hr.transition = s;
      }
    }
    function jn(e, t, a, o) {
      zt && Js(e, t, a, o);
    }
    function Js(e, t, a, o) {
      var l = Iu(e, t, a, o);
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
          var s = Wu(l);
          s !== null && Qy(s);
          var v = Iu(e, t, a, o);
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
    function Iu(e, t, a, o) {
      Vo = null;
      var l = Ud(o), s = uc(l);
      if (s !== null) {
        var v = Ea(s);
        if (v === null)
          s = null;
        else {
          var y = v.tag;
          if (y === ie) {
            var g = Ao(v);
            if (g !== null)
              return g;
            s = null;
          } else if (y === U) {
            var T = v.stateNode;
            if (Ef(T))
              return Uo(v);
            s = null;
          } else v !== s && (s = null);
        }
      }
      return Vo = s, null;
    }
    function bf(e) {
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
          return Ir;
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
          var t = Gc();
          switch (t) {
            case ks:
              return Ir;
            case Bi:
              return Po;
            case ui:
            case Gy:
              return Ba;
            case Ml:
              return qa;
            default:
              return Ba;
          }
        }
        default:
          return Ba;
      }
    }
    function Zs(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ca(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function fp(e, t, a, o) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }), a;
    }
    function Fu(e, t, a, o) {
      return e.addEventListener(t, a, {
        passive: o
      }), a;
    }
    var ka = null, Vu = null, ql = null;
    function Ki(e) {
      return ka = e, Vu = ec(), !0;
    }
    function Rf() {
      ka = null, Vu = null, ql = null;
    }
    function di() {
      if (ql)
        return ql;
      var e, t = Vu, a = t.length, o, l = ec(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var v = a - e;
      for (o = 1; o <= v && t[a - o] === l[s - o]; o++)
        ;
      var y = o > 1 ? 1 - o : void 0;
      return ql = l.slice(e, y), ql;
    }
    function ec() {
      return "value" in ka ? ka.value : ka.textContent;
    }
    function Xi(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Hu() {
      return !0;
    }
    function tc() {
      return !1;
    }
    function Mr(e) {
      function t(a, o, l, s, v) {
        this._reactName = a, this._targetInst = l, this.type = o, this.nativeEvent = s, this.target = v, this.currentTarget = null;
        for (var y in e)
          if (e.hasOwnProperty(y)) {
            var g = e[y];
            g ? this[y] = g(s) : this[y] = s[y];
          }
        var T = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return T ? this.isDefaultPrevented = Hu : this.isDefaultPrevented = tc, this.isPropagationStopped = tc, this;
      }
      return bt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Hu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Hu);
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
        isPersistent: Hu
      }), t;
    }
    var Wn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ho = Mr(Wn), Hr = bt({}, Wn, {
      view: 0,
      detail: 0
    }), fa = Mr(Hr), kf, nc, Wl;
    function Jy(e) {
      e !== Wl && (Wl && e.type === "mousemove" ? (kf = e.screenX - Wl.screenX, nc = e.screenY - Wl.screenY) : (kf = 0, nc = 0), Wl = e);
    }
    var yo = bt({}, Hr, {
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
        return "movementX" in e ? e.movementX : (Jy(e), kf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : nc;
      }
    }), dp = Mr(yo), pp = bt({}, yo, {
      dataTransfer: 0
    }), Yl = Mr(pp), vp = bt({}, Hr, {
      relatedTarget: 0
    }), pi = Mr(vp), Nh = bt({}, Wn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Dh = Mr(Nh), hp = bt({}, Wn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Tf = Mr(hp), Zy = bt({}, Wn, {
      data: 0
    }), Mh = Mr(Zy), Lh = Mh, Oh = {
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
    }, Gl = {
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
        var t = Oh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Xi(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Gl[e.keyCode] || "Unidentified" : "";
    }
    var $u = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function jh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var o = $u[e];
      return o ? !!a[o] : !1;
    }
    function _n(e) {
      return jh;
    }
    var tg = bt({}, Hr, {
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
        return e.type === "keypress" ? Xi(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Xi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Ah = Mr(tg), ng = bt({}, yo, {
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
    }), Uh = Mr(ng), zh = bt({}, Hr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: _n
    }), Ph = Mr(zh), rg = bt({}, Wn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ya = Mr(rg), mp = bt({}, yo, {
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
    }), ag = Mr(mp), Ji = [9, 13, 27, 32], rc = 229, vi = zn && "CompositionEvent" in window, Zi = null;
    zn && "documentMode" in document && (Zi = document.documentMode);
    var yp = zn && "TextEvent" in window && !Zi, Nf = zn && (!vi || Zi && Zi > 8 && Zi <= 11), Ih = 32, Df = String.fromCharCode(Ih);
    function og() {
      mt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), mt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), mt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), mt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var gp = !1;
    function Fh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Mf(e) {
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
      return e === "keydown" && t.keyCode === rc;
    }
    function _p(e, t) {
      switch (e) {
        case "keyup":
          return Ji.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== rc;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Of(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Vh(e) {
      return e.locale === "ko";
    }
    var Ql = !1;
    function Sp(e, t, a, o, l) {
      var s, v;
      if (vi ? s = Mf(t) : Ql ? _p(t, o) && (s = "onCompositionEnd") : Lf(t, o) && (s = "onCompositionStart"), !s)
        return null;
      Nf && !Vh(o) && (!Ql && s === "onCompositionStart" ? Ql = Ki(l) : s === "onCompositionEnd" && Ql && (v = di()));
      var y = Gh(a, s);
      if (y.length > 0) {
        var g = new Mh(s, t, null, o, l);
        if (e.push({
          event: g,
          listeners: y
        }), v)
          g.data = v;
        else {
          var T = Of(o);
          T !== null && (g.data = T);
        }
      }
    }
    function jf(e, t) {
      switch (e) {
        case "compositionend":
          return Of(t);
        case "keypress":
          var a = t.which;
          return a !== Ih ? null : (gp = !0, Df);
        case "textInput":
          var o = t.data;
          return o === Df && gp ? null : o;
        default:
          return null;
      }
    }
    function Cp(e, t) {
      if (Ql) {
        if (e === "compositionend" || !vi && _p(e, t)) {
          var a = di();
          return Rf(), Ql = !1, a;
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
          return Nf && !Vh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Af(e, t, a, o, l) {
      var s;
      if (yp ? s = jf(t, o) : s = Cp(t, o), !s)
        return null;
      var v = Gh(a, "onBeforeInput");
      if (v.length > 0) {
        var y = new Lh("onBeforeInput", "beforeinput", null, o, l);
        e.push({
          event: y,
          listeners: v
        }), y.data = s;
      }
    }
    function Hh(e, t, a, o, l, s, v) {
      Sp(e, t, a, o, l), Af(e, t, a, o, l);
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
    function ac(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!ig[e.type] : t === "textarea";
    }
    function lg(e) {
      if (!zn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var o = document.createElement("div");
        o.setAttribute(t, "return;"), a = typeof o[t] == "function";
      }
      return a;
    }
    function oc() {
      mt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function $h(e, t, a, o) {
      Ru(o);
      var l = Gh(t, "onChange");
      if (l.length > 0) {
        var s = new Ho("onChange", "change", null, a, o);
        e.push({
          event: s,
          listeners: l
        });
      }
    }
    var el = null, n = null;
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
      var t = Vf(e);
      if (No(t))
        return e;
    }
    function m(e, t) {
      if (e === "change")
        return t;
    }
    var E = !1;
    zn && (E = lg("input") && (!document.documentMode || document.documentMode > 9));
    function D(e, t) {
      el = e, n = t, el.attachEvent("onpropertychange", Q);
    }
    function j() {
      el && (el.detachEvent("onpropertychange", Q), el = null, n = null);
    }
    function Q(e) {
      e.propertyName === "value" && f(n) && i(e);
    }
    function ve(e, t, a) {
      e === "focusin" ? (j(), D(t, a)) : e === "focusout" && j();
    }
    function me(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return f(n);
    }
    function pe(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function $e(e, t) {
      if (e === "click")
        return f(t);
    }
    function Ke(e, t) {
      if (e === "input" || e === "change")
        return f(t);
    }
    function Ze(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || lt(e, "number", e.value);
    }
    function An(e, t, a, o, l, s, v) {
      var y = a ? Vf(a) : window, g, T;
      if (r(y) ? g = m : ac(y) ? E ? g = Ke : (g = me, T = ve) : pe(y) && (g = $e), g) {
        var N = g(t, a);
        if (N) {
          $h(e, N, o, l);
          return;
        }
      }
      T && T(t, y, a), t === "focusout" && Ze(y);
    }
    function $() {
      Jt("onMouseEnter", ["mouseout", "mouseover"]), Jt("onMouseLeave", ["mouseout", "mouseover"]), Jt("onPointerEnter", ["pointerout", "pointerover"]), Jt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function P(e, t, a, o, l, s, v) {
      var y = t === "mouseover" || t === "pointerover", g = t === "mouseout" || t === "pointerout";
      if (y && !Cs(o)) {
        var T = o.relatedTarget || o.fromElement;
        if (T && (uc(T) || Ap(T)))
          return;
      }
      if (!(!g && !y)) {
        var N;
        if (l.window === l)
          N = l;
        else {
          var I = l.ownerDocument;
          I ? N = I.defaultView || I.parentWindow : N = window;
        }
        var z, Y;
        if (g) {
          var K = o.relatedTarget || o.toElement;
          if (z = a, Y = K ? uc(K) : null, Y !== null) {
            var ee = Ea(Y);
            (Y !== ee || Y.tag !== H && Y.tag !== re) && (Y = null);
          }
        } else
          z = null, Y = a;
        if (z !== Y) {
          var Fe = dp, ut = "onMouseLeave", nt = "onMouseEnter", It = "mouse";
          (t === "pointerout" || t === "pointerover") && (Fe = Uh, ut = "onPointerLeave", nt = "onPointerEnter", It = "pointer");
          var Ot = z == null ? N : Vf(z), B = Y == null ? N : Vf(Y), te = new Fe(ut, It + "leave", z, o, l);
          te.target = Ot, te.relatedTarget = B;
          var q = null, ye = uc(l);
          if (ye === a) {
            var We = new Fe(nt, It + "enter", Y, o, l);
            We.target = B, We.relatedTarget = Ot, q = We;
          }
          xx(e, te, q, z, Y);
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
        if (!Or.call(t, s) || !he(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function st(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function ft(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function yt(e, t) {
      for (var a = st(e), o = 0, l = 0; a; ) {
        if (a.nodeType === ri) {
          if (l = o + a.textContent.length, o <= t && l >= t)
            return {
              node: a,
              offset: t - o
            };
          o = l;
        }
        a = st(ft(a));
      }
    }
    function lr(e) {
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
      var s = 0, v = -1, y = -1, g = 0, T = 0, N = e, I = null;
      e: for (; ; ) {
        for (var z = null; N === t && (a === 0 || N.nodeType === ri) && (v = s + a), N === o && (l === 0 || N.nodeType === ri) && (y = s + l), N.nodeType === ri && (s += N.nodeValue.length), (z = N.firstChild) !== null; )
          I = N, N = z;
        for (; ; ) {
          if (N === e)
            break e;
          if (I === t && ++g === a && (v = s), I === o && ++T === l && (y = s), (z = N.nextSibling) !== null)
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
    function tl(e, t) {
      var a = e.ownerDocument || document, o = a && a.defaultView || window;
      if (o.getSelection) {
        var l = o.getSelection(), s = e.textContent.length, v = Math.min(t.start, s), y = t.end === void 0 ? v : Math.min(t.end, s);
        if (!l.extend && v > y) {
          var g = y;
          y = v, v = g;
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
      return e && e.nodeType === ri;
    }
    function y_(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Bh(e) ? !1 : Bh(t) ? y_(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function ox(e) {
      return e && e.ownerDocument && y_(e.ownerDocument.documentElement, e);
    }
    function ix(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function g_() {
      for (var e = window, t = za(); t instanceof e.HTMLIFrameElement; ) {
        if (ix(t))
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
    function lx() {
      var e = g_();
      return {
        focusedElem: e,
        selectionRange: ug(e) ? sx(e) : null
      };
    }
    function ux(e) {
      var t = g_(), a = e.focusedElem, o = e.selectionRange;
      if (t !== a && ox(a)) {
        o !== null && ug(a) && cx(a, o);
        for (var l = [], s = a; s = s.parentNode; )
          s.nodeType === ta && l.push({
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
    function sx(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = lr(e), t || {
        start: 0,
        end: 0
      };
    }
    function cx(e, t) {
      var a = t.start, o = t.end;
      o === void 0 && (o = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(o, e.value.length)) : tl(e, t);
    }
    var fx = zn && "documentMode" in document && document.documentMode <= 11;
    function dx() {
      mt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Uf = null, sg = null, Ep = null, cg = !1;
    function px(e) {
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
    function vx(e) {
      return e.window === e ? e.document : e.nodeType === ai ? e : e.ownerDocument;
    }
    function __(e, t, a) {
      var o = vx(a);
      if (!(cg || Uf == null || Uf !== za(o))) {
        var l = px(Uf);
        if (!Ep || !Xe(Ep, l)) {
          Ep = l;
          var s = Gh(sg, "onSelect");
          if (s.length > 0) {
            var v = new Ho("onSelect", "select", null, t, a);
            e.push({
              event: v,
              listeners: s
            }), v.target = Uf;
          }
        }
      }
    }
    function hx(e, t, a, o, l, s, v) {
      var y = a ? Vf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (ac(y) || y.contentEditable === "true") && (Uf = y, sg = a, Ep = null);
          break;
        case "focusout":
          Uf = null, sg = null, Ep = null;
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
          if (fx)
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
    var zf = {
      animationend: qh("Animation", "AnimationEnd"),
      animationiteration: qh("Animation", "AnimationIteration"),
      animationstart: qh("Animation", "AnimationStart"),
      transitionend: qh("Transition", "TransitionEnd")
    }, fg = {}, S_ = {};
    zn && (S_ = document.createElement("div").style, "AnimationEvent" in window || (delete zf.animationend.animation, delete zf.animationiteration.animation, delete zf.animationstart.animation), "TransitionEvent" in window || delete zf.transitionend.transition);
    function Wh(e) {
      if (fg[e])
        return fg[e];
      if (!zf[e])
        return e;
      var t = zf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in S_)
          return fg[e] = t[a];
      return e;
    }
    var C_ = Wh("animationend"), E_ = Wh("animationiteration"), x_ = Wh("animationstart"), w_ = Wh("transitionend"), b_ = /* @__PURE__ */ new Map(), R_ = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Bu(e, t) {
      b_.set(e, t), mt(t, [e]);
    }
    function mx() {
      for (var e = 0; e < R_.length; e++) {
        var t = R_[e], a = t.toLowerCase(), o = t[0].toUpperCase() + t.slice(1);
        Bu(a, "on" + o);
      }
      Bu(C_, "onAnimationEnd"), Bu(E_, "onAnimationIteration"), Bu(x_, "onAnimationStart"), Bu("dblclick", "onDoubleClick"), Bu("focusin", "onFocus"), Bu("focusout", "onBlur"), Bu(w_, "onTransitionEnd");
    }
    function yx(e, t, a, o, l, s, v) {
      var y = b_.get(t);
      if (y !== void 0) {
        var g = Ho, T = t;
        switch (t) {
          case "keypress":
            if (Xi(o) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            g = Ah;
            break;
          case "focusin":
            T = "focus", g = pi;
            break;
          case "focusout":
            T = "blur", g = pi;
            break;
          case "beforeblur":
          case "afterblur":
            g = pi;
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
            g = dp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Yl;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Ph;
            break;
          case C_:
          case E_:
          case x_:
            g = Dh;
            break;
          case w_:
            g = Ya;
            break;
          case "scroll":
            g = fa;
            break;
          case "wheel":
            g = ag;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Tf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Uh;
            break;
        }
        var N = (s & Pa) !== 0;
        {
          var I = !N && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", z = Cx(a, y, o.type, N, I);
          if (z.length > 0) {
            var Y = new g(y, T, null, o, l);
            e.push({
              event: Y,
              listeners: z
            });
          }
        }
      }
    }
    mx(), $(), oc(), dx(), og();
    function gx(e, t, a, o, l, s, v) {
      yx(e, t, a, o, l, s);
      var y = (s & Ad) === 0;
      y && (P(e, t, a, o, l), An(e, t, a, o, l), hx(e, t, a, o, l), Hh(e, t, a, o, l));
    }
    var xp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], dg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(xp));
    function k_(e, t, a) {
      var o = e.type || "unknown-event";
      e.currentTarget = a, Lo(o, t, void 0, e), e.currentTarget = null;
    }
    function _x(e, t, a) {
      var o;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], v = s.instance, y = s.currentTarget, g = s.listener;
          if (v !== o && e.isPropagationStopped())
            return;
          k_(e, g, y), o = v;
        }
      else
        for (var T = 0; T < t.length; T++) {
          var N = t[T], I = N.instance, z = N.currentTarget, Y = N.listener;
          if (I !== o && e.isPropagationStopped())
            return;
          k_(e, Y, z), o = I;
        }
    }
    function T_(e, t) {
      for (var a = (t & Pa) !== 0, o = 0; o < e.length; o++) {
        var l = e[o], s = l.event, v = l.listeners;
        _x(s, v, a);
      }
      ws();
    }
    function Sx(e, t, a, o, l) {
      var s = Ud(a), v = [];
      gx(v, e, o, a, s, t), T_(v, t);
    }
    function bn(e, t) {
      dg.has(e) || h('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, o = Kw(t), l = wx(e);
      o.has(l) || (N_(t, e, Ac, a), o.add(l));
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
        var t = e.nodeType === ai ? e : e.ownerDocument;
        t !== null && (t[Yh] || (t[Yh] = !0, pg("selectionchange", !1, t)));
      }
    }
    function N_(e, t, a, o, l) {
      var s = mr(e, t, a), v = void 0;
      xs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (v = !0), e = e, o ? v !== void 0 ? fp(e, t, s, v) : ca(e, t, s) : v !== void 0 ? Fu(e, t, s, v) : Zs(e, t, s);
    }
    function D_(e, t) {
      return e === t || e.nodeType === In && e.parentNode === t;
    }
    function vg(e, t, a, o, l) {
      var s = o;
      if ((t & jd) === 0 && (t & Ac) === 0) {
        var v = l;
        if (o !== null) {
          var y = o;
          e: for (; ; ) {
            if (y === null)
              return;
            var g = y.tag;
            if (g === U || g === V) {
              var T = y.stateNode.containerInfo;
              if (D_(T, v))
                break;
              if (g === V)
                for (var N = y.return; N !== null; ) {
                  var I = N.tag;
                  if (I === U || I === V) {
                    var z = N.stateNode.containerInfo;
                    if (D_(z, v))
                      return;
                  }
                  N = N.return;
                }
              for (; T !== null; ) {
                var Y = uc(T);
                if (Y === null)
                  return;
                var K = Y.tag;
                if (K === H || K === re) {
                  y = s = Y;
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
        return Sx(e, t, a, s);
      });
    }
    function bp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Cx(e, t, a, o, l, s) {
      for (var v = t !== null ? t + "Capture" : null, y = o ? v : t, g = [], T = e, N = null; T !== null; ) {
        var I = T, z = I.stateNode, Y = I.tag;
        if (Y === H && z !== null && (N = z, y !== null)) {
          var K = Pi(T, y);
          K != null && g.push(bp(T, K, N));
        }
        if (l)
          break;
        T = T.return;
      }
      return g;
    }
    function Gh(e, t) {
      for (var a = t + "Capture", o = [], l = e; l !== null; ) {
        var s = l, v = s.stateNode, y = s.tag;
        if (y === H && v !== null) {
          var g = v, T = Pi(l, a);
          T != null && o.unshift(bp(l, T, g));
          var N = Pi(l, t);
          N != null && o.push(bp(l, N, g));
        }
        l = l.return;
      }
      return o;
    }
    function Pf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== H);
      return e || null;
    }
    function Ex(e, t) {
      for (var a = e, o = t, l = 0, s = a; s; s = Pf(s))
        l++;
      for (var v = 0, y = o; y; y = Pf(y))
        v++;
      for (; l - v > 0; )
        a = Pf(a), l--;
      for (; v - l > 0; )
        o = Pf(o), v--;
      for (var g = l; g--; ) {
        if (a === o || o !== null && a === o.alternate)
          return a;
        a = Pf(a), o = Pf(o);
      }
      return null;
    }
    function M_(e, t, a, o, l) {
      for (var s = t._reactName, v = [], y = a; y !== null && y !== o; ) {
        var g = y, T = g.alternate, N = g.stateNode, I = g.tag;
        if (T !== null && T === o)
          break;
        if (I === H && N !== null) {
          var z = N;
          if (l) {
            var Y = Pi(y, s);
            Y != null && v.unshift(bp(y, Y, z));
          } else if (!l) {
            var K = Pi(y, s);
            K != null && v.push(bp(y, K, z));
          }
        }
        y = y.return;
      }
      v.length !== 0 && e.push({
        event: t,
        listeners: v
      });
    }
    function xx(e, t, a, o, l) {
      var s = o && l ? Ex(o, l) : null;
      o !== null && M_(e, t, o, s, !1), l !== null && a !== null && M_(e, a, l, s, !0);
    }
    function wx(e, t) {
      return e + "__bubble";
    }
    var Ga = !1, Rp = "dangerouslySetInnerHTML", Qh = "suppressContentEditableWarning", qu = "suppressHydrationWarning", L_ = "autoFocus", ic = "children", lc = "style", Kh = "__html", hg, Xh, kp, O_, Jh, j_, A_;
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
      Md(e, t), Oc(e, t), Jv(e, t, {
        registrationNameDependencies: Pe,
        possibleRegistrationNames: dt
      });
    }, j_ = zn && !document.documentMode, kp = function(e, t, a) {
      if (!Ga) {
        var o = Zh(a), l = Zh(t);
        l !== o && (Ga = !0, h("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(o)));
      }
    }, O_ = function(e) {
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
      var a = e.namespaceURI === ni ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var bx = /\r\n?/g, Rx = /\u0000|\uFFFD/g;
    function Zh(e) {
      nr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(bx, `
`).replace(Rx, "");
    }
    function em(e, t, a, o) {
      var l = Zh(t), s = Zh(e);
      if (s !== l && (o && (Ga || (Ga = !0, h('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && ke))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function U_(e) {
      return e.nodeType === ai ? e : e.ownerDocument;
    }
    function kx() {
    }
    function tm(e) {
      e.onclick = kx;
    }
    function Tx(e, t, a, o, l) {
      for (var s in o)
        if (o.hasOwnProperty(s)) {
          var v = o[s];
          if (s === lc)
            v && Object.freeze(v), Wv(t, v);
          else if (s === Rp) {
            var y = v ? v[Kh] : void 0;
            y != null && jv(t, y);
          } else if (s === ic)
            if (typeof v == "string") {
              var g = e !== "textarea" || v !== "";
              g && Eu(t, v);
            } else typeof v == "number" && Eu(t, "" + v);
          else s === Qh || s === qu || s === L_ || (Pe.hasOwnProperty(s) ? v != null && (typeof v != "function" && Jh(s, v), s === "onScroll" && bn("scroll", t)) : v != null && jr(t, s, v, l));
        }
    }
    function Nx(e, t, a, o) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], v = t[l + 1];
        s === lc ? Wv(e, v) : s === Rp ? jv(e, v) : s === ic ? Eu(e, v) : jr(e, s, v, o);
      }
    }
    function Dx(e, t, a, o) {
      var l, s = U_(a), v, y = o;
      if (y === ni && (y = wd(e)), y === ni) {
        if (l = Ui(e, t), !l && e !== e.toLowerCase() && h("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var g = s.createElement("div");
          g.innerHTML = "<script><\/script>";
          var T = g.firstChild;
          v = g.removeChild(T);
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
      return y === ni && !l && Object.prototype.toString.call(v) === "[object HTMLUnknownElement]" && !Or.call(hg, e) && (hg[e] = !0, h("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), v;
    }
    function Mx(e, t) {
      return U_(t).createTextNode(e);
    }
    function Lx(e, t, a, o) {
      var l = Ui(t, a);
      Xh(t, a);
      var s;
      switch (t) {
        case "dialog":
          bn("cancel", e), bn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          bn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var v = 0; v < xp.length; v++)
            bn(xp[v], e);
          s = a;
          break;
        case "source":
          bn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          bn("error", e), bn("load", e), s = a;
          break;
        case "details":
          bn("toggle", e), s = a;
          break;
        case "input":
          co(e, a), s = Cu(e, a), bn("invalid", e);
          break;
        case "option":
          Vt(e, a), s = a;
          break;
        case "select":
          xl(e, a), s = vs(e, a), bn("invalid", e);
          break;
        case "textarea":
          Cd(e, a), s = Sd(e, a), bn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Mc(t, s), Tx(t, e, o, s, l), t) {
        case "input":
          so(e), G(e, a, !1);
          break;
        case "textarea":
          so(e), Lv(e);
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
    function Ox(e, t, a, o, l) {
      Xh(t, o);
      var s = null, v, y;
      switch (t) {
        case "input":
          v = Cu(e, a), y = Cu(e, o), s = [];
          break;
        case "select":
          v = vs(e, a), y = vs(e, o), s = [];
          break;
        case "textarea":
          v = Sd(e, a), y = Sd(e, o), s = [];
          break;
        default:
          v = a, y = o, typeof v.onClick != "function" && typeof y.onClick == "function" && tm(e);
          break;
      }
      Mc(t, y);
      var g, T, N = null;
      for (g in v)
        if (!(y.hasOwnProperty(g) || !v.hasOwnProperty(g) || v[g] == null))
          if (g === lc) {
            var I = v[g];
            for (T in I)
              I.hasOwnProperty(T) && (N || (N = {}), N[T] = "");
          } else g === Rp || g === ic || g === Qh || g === qu || g === L_ || (Pe.hasOwnProperty(g) ? s || (s = []) : (s = s || []).push(g, null));
      for (g in y) {
        var z = y[g], Y = v?.[g];
        if (!(!y.hasOwnProperty(g) || z === Y || z == null && Y == null))
          if (g === lc)
            if (z && Object.freeze(z), Y) {
              for (T in Y)
                Y.hasOwnProperty(T) && (!z || !z.hasOwnProperty(T)) && (N || (N = {}), N[T] = "");
              for (T in z)
                z.hasOwnProperty(T) && Y[T] !== z[T] && (N || (N = {}), N[T] = z[T]);
            } else
              N || (s || (s = []), s.push(g, N)), N = z;
          else if (g === Rp) {
            var K = z ? z[Kh] : void 0, ee = Y ? Y[Kh] : void 0;
            K != null && ee !== K && (s = s || []).push(g, K);
          } else g === ic ? (typeof z == "string" || typeof z == "number") && (s = s || []).push(g, "" + z) : g === Qh || g === qu || (Pe.hasOwnProperty(g) ? (z != null && (typeof z != "function" && Jh(g, z), g === "onScroll" && bn("scroll", e)), !s && Y !== z && (s = [])) : (s = s || []).push(g, z));
      }
      return N && (Hy(N, y[lc]), (s = s || []).push(lc, N)), s;
    }
    function jx(e, t, a, o, l) {
      a === "input" && l.type === "radio" && l.name != null && S(e, l);
      var s = Ui(a, o), v = Ui(a, l);
      switch (Nx(e, t, s, v), a) {
        case "input":
          L(e, l);
          break;
        case "textarea":
          Mv(e, l);
          break;
        case "select":
          Tc(e, l);
          break;
      }
    }
    function Ax(e) {
      {
        var t = e.toLowerCase();
        return _s.hasOwnProperty(t) && _s[t] || null;
      }
    }
    function Ux(e, t, a, o, l, s, v) {
      var y, g;
      switch (y = Ui(t, a), Xh(t, a), t) {
        case "dialog":
          bn("cancel", e), bn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          bn("load", e);
          break;
        case "video":
        case "audio":
          for (var T = 0; T < xp.length; T++)
            bn(xp[T], e);
          break;
        case "source":
          bn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          bn("error", e), bn("load", e);
          break;
        case "details":
          bn("toggle", e);
          break;
        case "input":
          co(e, a), bn("invalid", e);
          break;
        case "option":
          Vt(e, a);
          break;
        case "select":
          xl(e, a), bn("invalid", e);
          break;
        case "textarea":
          Cd(e, a), bn("invalid", e);
          break;
      }
      Mc(t, a);
      {
        g = /* @__PURE__ */ new Set();
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
              g.add(N[I].name);
          }
        }
      }
      var Y = null;
      for (var K in a)
        if (a.hasOwnProperty(K)) {
          var ee = a[K];
          if (K === ic)
            typeof ee == "string" ? e.textContent !== ee && (a[qu] !== !0 && em(e.textContent, ee, s, v), Y = [ic, ee]) : typeof ee == "number" && e.textContent !== "" + ee && (a[qu] !== !0 && em(e.textContent, ee, s, v), Y = [ic, "" + ee]);
          else if (Pe.hasOwnProperty(K))
            ee != null && (typeof ee != "function" && Jh(K, ee), K === "onScroll" && bn("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof y == "boolean") {
            var Fe = void 0, ut = cn(K);
            if (a[qu] !== !0) {
              if (!(K === Qh || K === qu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              K === "value" || K === "checked" || K === "selected")) {
                if (K === Rp) {
                  var nt = e.innerHTML, It = ee ? ee[Kh] : void 0;
                  if (It != null) {
                    var Ot = A_(e, It);
                    Ot !== nt && kp(K, nt, Ot);
                  }
                } else if (K === lc) {
                  if (g.delete(K), j_) {
                    var B = Fy(ee);
                    Fe = e.getAttribute("style"), B !== Fe && kp(K, Fe, B);
                  }
                } else if (y && !F)
                  g.delete(K.toLowerCase()), Fe = ml(e, K, ee), ee !== Fe && kp(K, Fe, ee);
                else if (!Sn(K, ut, y) && !rr(K, ee, ut, y)) {
                  var te = !1;
                  if (ut !== null)
                    g.delete(ut.attributeName), Fe = ki(e, K, ee, ut);
                  else {
                    var q = o;
                    if (q === ni && (q = wd(t)), q === ni)
                      g.delete(K.toLowerCase());
                    else {
                      var ye = Ax(K);
                      ye !== null && ye !== K && (te = !0, g.delete(ye)), g.delete(K);
                    }
                    Fe = ml(e, K, ee);
                  }
                  var We = F;
                  !We && ee !== Fe && !te && kp(K, Fe, ee);
                }
              }
            }
          }
        }
      switch (v && // $FlowFixMe - Should be inferred as not undefined.
      g.size > 0 && a[qu] !== !0 && O_(g), t) {
        case "input":
          so(e), G(e, a, !0);
          break;
        case "textarea":
          so(e), Lv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && tm(e);
          break;
      }
      return Y;
    }
    function zx(e, t, a) {
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
    function Px(e, t, a) {
      switch (t) {
        case "input":
          Z(e, a);
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
      var Ix = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], z_ = [
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
      ], Fx = z_.concat(["button"]), Vx = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], P_ = {
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
        return z_.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Fx.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Ix.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = o, t === "form" && (a.formTag = o), t === "a" && (a.aTagInScope = o), t === "button" && (a.buttonTagInScope = o), t === "nobr" && (a.nobrTagInScope = o), t === "p" && (a.pTagInButtonScope = o), t === "li" && (a.listItemTagAutoclosing = o), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = o), a;
      };
      var Hx = function(e, t) {
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
            return Vx.indexOf(t) === -1;
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
      }, $x = function(e, t) {
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
        var s = Hx(e, l) ? null : o, v = s ? null : $x(e, a), y = s || v;
        if (y) {
          var g = y.tag, T = !!s + "|" + e + "|" + g;
          if (!I_[T]) {
            I_[T] = !0;
            var N = e, I = "";
            if (e === "#text" ? /\S/.test(t) ? N = "Text nodes" : (N = "Whitespace text nodes", I = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : N = "<" + e + ">", s) {
              var z = "";
              g === "table" && e === "tr" && (z += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), h("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", N, g, I, z);
            } else
              h("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", N, g);
          }
        }
      };
    }
    var nm = "suppressHydrationWarning", rm = "$", am = "/$", Dp = "$?", Mp = "$!", Bx = "style", Sg = null, Cg = null;
    function qx(e) {
      var t, a, o = e.nodeType;
      switch (o) {
        case ai:
        case Rd: {
          t = o === ai ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : bd(null, "");
          break;
        }
        default: {
          var s = o === In ? e.parentNode : e, v = s.namespaceURI || null;
          t = s.tagName, a = bd(v, t);
          break;
        }
      }
      {
        var y = t.toLowerCase(), g = Np(null, y);
        return {
          namespace: a,
          ancestorInfo: g
        };
      }
    }
    function Wx(e, t, a) {
      {
        var o = e, l = bd(o.namespace, t), s = Np(o.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function n6(e) {
      return e;
    }
    function Yx(e) {
      Sg = qn(), Cg = lx();
      var t = null;
      return er(!1), t;
    }
    function Gx(e) {
      ux(Cg), er(Sg), Sg = null, Cg = null;
    }
    function Qx(e, t, a, o, l) {
      var s;
      {
        var v = o;
        if (Tp(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var y = "" + t.children, g = Np(v.ancestorInfo, e);
          Tp(null, y, g);
        }
        s = v.namespace;
      }
      var T = Dx(e, t, a, s);
      return jp(l, T), Ng(T, t), T;
    }
    function Kx(e, t) {
      e.appendChild(t);
    }
    function Xx(e, t, a, o, l) {
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
    function Jx(e, t, a, o, l, s) {
      {
        var v = s;
        if (typeof o.children != typeof a.children && (typeof o.children == "string" || typeof o.children == "number")) {
          var y = "" + o.children, g = Np(v.ancestorInfo, t);
          Tp(null, y, g);
        }
      }
      return Ox(e, t, a, o);
    }
    function Eg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Zx(e, t, a, o) {
      {
        var l = a;
        Tp(null, e, l.ancestorInfo);
      }
      var s = Mx(e, t);
      return jp(o, s), s;
    }
    function ew() {
      var e = window.event;
      return e === void 0 ? Ba : bf(e.type);
    }
    var xg = typeof setTimeout == "function" ? setTimeout : void 0, tw = typeof clearTimeout == "function" ? clearTimeout : void 0, wg = -1, F_ = typeof Promise == "function" ? Promise : void 0, nw = typeof queueMicrotask == "function" ? queueMicrotask : typeof F_ < "u" ? function(e) {
      return F_.resolve(null).then(e).catch(rw);
    } : xg;
    function rw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function aw(e, t, a, o) {
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
    function ow(e, t, a, o, l, s) {
      jx(e, t, a, o, l), Ng(e, l);
    }
    function V_(e) {
      Eu(e, "");
    }
    function iw(e, t, a) {
      e.nodeValue = a;
    }
    function lw(e, t) {
      e.appendChild(t);
    }
    function uw(e, t) {
      var a;
      e.nodeType === In ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var o = e._reactRootContainer;
      o == null && a.onclick === null && tm(a);
    }
    function sw(e, t, a) {
      e.insertBefore(t, a);
    }
    function cw(e, t, a) {
      e.nodeType === In ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function fw(e, t) {
      e.removeChild(t);
    }
    function dw(e, t) {
      e.nodeType === In ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function bg(e, t) {
      var a = t, o = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === In) {
          var s = l.data;
          if (s === am)
            if (o === 0) {
              e.removeChild(l), Bl(t);
              return;
            } else
              o--;
          else (s === rm || s === Dp || s === Mp) && o++;
        }
        a = l;
      } while (a);
      Bl(t);
    }
    function pw(e, t) {
      e.nodeType === In ? bg(e.parentNode, t) : e.nodeType === ta && bg(e, t), Bl(e);
    }
    function vw(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function hw(e) {
      e.nodeValue = "";
    }
    function mw(e, t) {
      e = e;
      var a = t[Bx], o = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Dc("display", o);
    }
    function yw(e, t) {
      e.nodeValue = t;
    }
    function gw(e) {
      e.nodeType === ta ? e.textContent = "" : e.nodeType === ai && e.documentElement && e.removeChild(e.documentElement);
    }
    function _w(e, t, a) {
      return e.nodeType !== ta || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Sw(e, t) {
      return t === "" || e.nodeType !== ri ? null : e;
    }
    function Cw(e) {
      return e.nodeType !== In ? null : e;
    }
    function H_(e) {
      return e.data === Dp;
    }
    function Rg(e) {
      return e.data === Mp;
    }
    function Ew(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, o, l;
      return t && (a = t.dgst, o = t.msg, l = t.stck), {
        message: o,
        digest: a,
        stack: l
      };
    }
    function xw(e, t) {
      e._reactRetry = t;
    }
    function om(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ta || t === ri)
          break;
        if (t === In) {
          var a = e.data;
          if (a === rm || a === Mp || a === Dp)
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
    function ww(e) {
      return om(e.firstChild);
    }
    function bw(e) {
      return om(e.firstChild);
    }
    function Rw(e) {
      return om(e.nextSibling);
    }
    function kw(e, t, a, o, l, s, v) {
      jp(s, e), Ng(e, a);
      var y;
      {
        var g = l;
        y = g.namespace;
      }
      var T = (s.mode & Nt) !== it;
      return Ux(e, t, a, y, o, T, v);
    }
    function Tw(e, t, a, o) {
      return jp(a, e), a.mode & Nt, zx(e, t);
    }
    function Nw(e, t) {
      jp(t, e);
    }
    function Dw(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === In) {
          var o = t.data;
          if (o === am) {
            if (a === 0)
              return Lp(t);
            a--;
          } else (o === rm || o === Mp || o === Dp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function $_(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === In) {
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
    function Mw(e) {
      Bl(e);
    }
    function Lw(e) {
      Bl(e);
    }
    function Ow(e) {
      return e !== "head" && e !== "body";
    }
    function jw(e, t, a, o) {
      var l = !0;
      em(t.nodeValue, a, o, l);
    }
    function Aw(e, t, a, o, l, s) {
      if (t[nm] !== !0) {
        var v = !0;
        em(o.nodeValue, l, s, v);
      }
    }
    function Uw(e, t) {
      t.nodeType === ta ? mg(e, t) : t.nodeType === In || yg(e, t);
    }
    function zw(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === ta ? mg(a, t) : t.nodeType === In || yg(a, t));
      }
    }
    function Pw(e, t, a, o, l) {
      (l || t[nm] !== !0) && (o.nodeType === ta ? mg(a, o) : o.nodeType === In || yg(a, o));
    }
    function Iw(e, t, a) {
      gg(e, t);
    }
    function Fw(e, t) {
      _g(e, t);
    }
    function Vw(e, t, a) {
      {
        var o = e.parentNode;
        o !== null && gg(o, t);
      }
    }
    function Hw(e, t) {
      {
        var a = e.parentNode;
        a !== null && _g(a, t);
      }
    }
    function $w(e, t, a, o, l, s) {
      (s || t[nm] !== !0) && gg(a, o);
    }
    function Bw(e, t, a, o, l) {
      (l || t[nm] !== !0) && _g(a, o);
    }
    function qw(e) {
      h("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Ww(e) {
      wp(e);
    }
    var If = Math.random().toString(36).slice(2), Ff = "__reactFiber$" + If, kg = "__reactProps$" + If, Op = "__reactContainer$" + If, Tg = "__reactEvents$" + If, Yw = "__reactListeners$" + If, Gw = "__reactHandles$" + If;
    function Qw(e) {
      delete e[Ff], delete e[kg], delete e[Tg], delete e[Yw], delete e[Gw];
    }
    function jp(e, t) {
      t[Ff] = e;
    }
    function im(e, t) {
      t[Op] = e;
    }
    function B_(e) {
      e[Op] = null;
    }
    function Ap(e) {
      return !!e[Op];
    }
    function uc(e) {
      var t = e[Ff];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Op] || a[Ff], t) {
          var o = t.alternate;
          if (t.child !== null || o !== null && o.child !== null)
            for (var l = $_(e); l !== null; ) {
              var s = l[Ff];
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
    function Wu(e) {
      var t = e[Ff] || e[Op];
      return t && (t.tag === H || t.tag === re || t.tag === ie || t.tag === U) ? t : null;
    }
    function Vf(e) {
      if (e.tag === H || e.tag === re)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function lm(e) {
      return e[kg] || null;
    }
    function Ng(e, t) {
      e[kg] = t;
    }
    function Kw(e) {
      var t = e[Tg];
      return t === void 0 && (t = e[Tg] = /* @__PURE__ */ new Set()), t;
    }
    var q_ = {}, W_ = p.ReactDebugCurrentFrame;
    function um(e) {
      if (e) {
        var t = e._owner, a = Zo(e.type, e._source, t ? t.type : null);
        W_.setExtraStackFrame(a);
      } else
        W_.setExtraStackFrame(null);
    }
    function hi(e, t, a, o, l) {
      {
        var s = Function.call.bind(Or);
        for (var v in e)
          if (s(e, v)) {
            var y = void 0;
            try {
              if (typeof e[v] != "function") {
                var g = Error((o || "React class") + ": " + a + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
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
    var Kl = -1;
    function Yu(e) {
      return {
        current: e
      };
    }
    function da(e, t) {
      if (Kl < 0) {
        h("Unexpected pop.");
        return;
      }
      t !== sm[Kl] && h("Unexpected Fiber popped."), e.current = Dg[Kl], Dg[Kl] = null, sm[Kl] = null, Kl--;
    }
    function pa(e, t, a) {
      Kl++, Dg[Kl] = e.current, sm[Kl] = a, e.current = t;
    }
    var Mg;
    Mg = {};
    var go = {};
    Object.freeze(go);
    var Xl = Yu(go), nl = Yu(!1), Lg = go;
    function Hf(e, t, a) {
      return a && rl(t) ? Lg : Xl.current;
    }
    function Y_(e, t, a) {
      {
        var o = e.stateNode;
        o.__reactInternalMemoizedUnmaskedChildContext = t, o.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function $f(e, t) {
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
          hi(o, s, "context", y);
        }
        return l && Y_(e, t, s), s;
      }
    }
    function cm() {
      return nl.current;
    }
    function rl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function fm(e) {
      da(nl, e), da(Xl, e);
    }
    function Og(e) {
      da(nl, e), da(Xl, e);
    }
    function G_(e, t, a) {
      {
        if (Xl.current !== go)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        pa(Xl, t, e), pa(nl, a, e);
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
          var g = gt(e) || "Unknown";
          hi(l, v, "child context", g);
        }
        return bt({}, a, v);
      }
    }
    function dm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || go;
        return Lg = Xl.current, pa(Xl, a, e), pa(nl, nl.current, e), !0;
      }
    }
    function K_(e, t, a) {
      {
        var o = e.stateNode;
        if (!o)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = Q_(e, t, Lg);
          o.__reactInternalMemoizedMergedChildContext = l, da(nl, e), da(Xl, e), pa(Xl, l, e), pa(nl, a, e);
        } else
          da(nl, e), pa(nl, a, e);
      }
    }
    function Xw(e) {
      {
        if (!Dl(e) || e.tag !== b)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case U:
              return t.stateNode.context;
            case b: {
              var a = t.type;
              if (rl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Gu = 0, pm = 1, Jl = null, jg = !1, Ag = !1;
    function X_(e) {
      Jl === null ? Jl = [e] : Jl.push(e);
    }
    function Jw(e) {
      jg = !0, X_(e);
    }
    function J_() {
      jg && Qu();
    }
    function Qu() {
      if (!Ag && Jl !== null) {
        Ag = !0;
        var e = 0, t = Wa();
        try {
          var a = !0, o = Jl;
          for (Bn(Ir); e < o.length; e++) {
            var l = o[e];
            do
              l = l(a);
            while (l !== null);
          }
          Jl = null, jg = !1;
        } catch (s) {
          throw Jl !== null && (Jl = Jl.slice(e + 1)), Pd(ks, Qu), s;
        } finally {
          Bn(t), Ag = !1;
        }
      }
      return null;
    }
    var Bf = [], qf = 0, vm = null, hm = 0, $o = [], Bo = 0, sc = null, Zl = 1, eu = "";
    function Zw(e) {
      return fc(), (e.flags & Oo) !== ot;
    }
    function eb(e) {
      return fc(), hm;
    }
    function tb() {
      var e = eu, t = Zl, a = t & ~nb(t);
      return a.toString(32) + e;
    }
    function cc(e, t) {
      fc(), Bf[qf++] = hm, Bf[qf++] = vm, vm = e, hm = t;
    }
    function Z_(e, t, a) {
      fc(), $o[Bo++] = Zl, $o[Bo++] = eu, $o[Bo++] = sc, sc = e;
      var o = Zl, l = eu, s = mm(o) - 1, v = o & ~(1 << s), y = a + 1, g = mm(t) + s;
      if (g > 30) {
        var T = s - s % 5, N = (1 << T) - 1, I = (v & N).toString(32), z = v >> T, Y = s - T, K = mm(t) + Y, ee = y << Y, Fe = ee | z, ut = I + l;
        Zl = 1 << K | Fe, eu = ut;
      } else {
        var nt = y << s, It = nt | v, Ot = l;
        Zl = 1 << g | It, eu = Ot;
      }
    }
    function Ug(e) {
      fc();
      var t = e.return;
      if (t !== null) {
        var a = 1, o = 0;
        cc(e, a), Z_(e, a, o);
      }
    }
    function mm(e) {
      return 32 - Hn(e);
    }
    function nb(e) {
      return 1 << mm(e) - 1;
    }
    function zg(e) {
      for (; e === vm; )
        vm = Bf[--qf], Bf[qf] = null, hm = Bf[--qf], Bf[qf] = null;
      for (; e === sc; )
        sc = $o[--Bo], $o[Bo] = null, eu = $o[--Bo], $o[Bo] = null, Zl = $o[--Bo], $o[Bo] = null;
    }
    function rb() {
      return fc(), sc !== null ? {
        id: Zl,
        overflow: eu
      } : null;
    }
    function ab(e, t) {
      fc(), $o[Bo++] = Zl, $o[Bo++] = eu, $o[Bo++] = sc, Zl = t.id, eu = t.overflow, sc = e;
    }
    function fc() {
      Br() || h("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var $r = null, qo = null, mi = !1, dc = !1, Ku = null;
    function ob() {
      mi && h("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function e2() {
      dc = !0;
    }
    function ib() {
      return dc;
    }
    function lb(e) {
      var t = e.stateNode.containerInfo;
      return qo = bw(t), $r = e, mi = !0, Ku = null, dc = !1, !0;
    }
    function ub(e, t, a) {
      return qo = Rw(t), $r = e, mi = !0, Ku = null, dc = !1, a !== null && ab(e, a), !0;
    }
    function t2(e, t) {
      switch (e.tag) {
        case U: {
          Uw(e.stateNode.containerInfo, t);
          break;
        }
        case H: {
          var a = (e.mode & Nt) !== it;
          Pw(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case ie: {
          var o = e.memoizedState;
          o.dehydrated !== null && zw(o.dehydrated, t);
          break;
        }
      }
    }
    function n2(e, t) {
      t2(e, t);
      var a = dT();
      a.stateNode = t, a.return = e;
      var o = e.deletions;
      o === null ? (e.deletions = [a], e.flags |= Ia) : o.push(a);
    }
    function Pg(e, t) {
      {
        if (dc)
          return;
        switch (e.tag) {
          case U: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case H:
                var o = t.type;
                t.pendingProps, Iw(a, o);
                break;
              case re:
                var l = t.pendingProps;
                Fw(a, l);
                break;
            }
            break;
          }
          case H: {
            var s = e.type, v = e.memoizedProps, y = e.stateNode;
            switch (t.tag) {
              case H: {
                var g = t.type, T = t.pendingProps, N = (e.mode & Nt) !== it;
                $w(
                  s,
                  v,
                  y,
                  g,
                  T,
                  // TODO: Delete this argument when we remove the legacy root API.
                  N
                );
                break;
              }
              case re: {
                var I = t.pendingProps, z = (e.mode & Nt) !== it;
                Bw(
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
          case ie: {
            var Y = e.memoizedState, K = Y.dehydrated;
            if (K !== null) switch (t.tag) {
              case H:
                var ee = t.type;
                t.pendingProps, Vw(K, ee);
                break;
              case re:
                var Fe = t.pendingProps;
                Hw(K, Fe);
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
      t.flags = t.flags & ~ra | En, Pg(e, t);
    }
    function a2(e, t) {
      switch (e.tag) {
        case H: {
          var a = e.type;
          e.pendingProps;
          var o = _w(t, a);
          return o !== null ? (e.stateNode = o, $r = e, qo = ww(o), !0) : !1;
        }
        case re: {
          var l = e.pendingProps, s = Sw(t, l);
          return s !== null ? (e.stateNode = s, $r = e, qo = null, !0) : !1;
        }
        case ie: {
          var v = Cw(t);
          if (v !== null) {
            var y = {
              dehydrated: v,
              treeContext: rb(),
              retryLane: la
            };
            e.memoizedState = y;
            var g = pT(v);
            return g.return = e, e.child = g, $r = e, qo = null, !0;
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
      if (mi) {
        var t = qo;
        if (!t) {
          Ig(e) && (Pg($r, e), Fg()), r2($r, e), mi = !1, $r = e;
          return;
        }
        var a = t;
        if (!a2(e, t)) {
          Ig(e) && (Pg($r, e), Fg()), t = Lp(a);
          var o = $r;
          if (!t || !a2(e, t)) {
            r2($r, e), mi = !1, $r = e;
            return;
          }
          n2(o, a);
        }
      }
    }
    function sb(e, t, a) {
      var o = e.stateNode, l = !dc, s = kw(o, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function cb(e) {
      var t = e.stateNode, a = e.memoizedProps, o = Tw(t, a, e);
      if (o) {
        var l = $r;
        if (l !== null)
          switch (l.tag) {
            case U: {
              var s = l.stateNode.containerInfo, v = (l.mode & Nt) !== it;
              jw(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case H: {
              var y = l.type, g = l.memoizedProps, T = l.stateNode, N = (l.mode & Nt) !== it;
              Aw(
                y,
                g,
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
    function fb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Nw(a, e);
    }
    function db(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Dw(a);
    }
    function o2(e) {
      for (var t = e.return; t !== null && t.tag !== H && t.tag !== U && t.tag !== ie; )
        t = t.return;
      $r = t;
    }
    function ym(e) {
      if (e !== $r)
        return !1;
      if (!mi)
        return o2(e), mi = !0, !1;
      if (e.tag !== U && (e.tag !== H || Ow(e.type) && !Eg(e.type, e.memoizedProps))) {
        var t = qo;
        if (t)
          if (Ig(e))
            i2(e), Fg();
          else
            for (; t; )
              n2(e, t), t = Lp(t);
      }
      return o2(e), e.tag === ie ? qo = db(e) : qo = $r ? Lp(e.stateNode) : null, !0;
    }
    function pb() {
      return mi && qo !== null;
    }
    function i2(e) {
      for (var t = qo; t; )
        t2(e, t), t = Lp(t);
    }
    function Wf() {
      $r = null, qo = null, mi = !1, dc = !1;
    }
    function l2() {
      Ku !== null && (eC(Ku), Ku = null);
    }
    function Br() {
      return mi;
    }
    function Hg(e) {
      Ku === null ? Ku = [e] : Ku.push(e);
    }
    var vb = p.ReactCurrentBatchConfig, hb = null;
    function mb() {
      return vb.transition;
    }
    var yi = {
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
      var yb = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & an && (t = a), a = a.return;
        return t;
      }, pc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Up = [], zp = [], Pp = [], Ip = [], Fp = [], Vp = [], vc = /* @__PURE__ */ new Set();
      yi.recordUnsafeLifecycleWarnings = function(e, t) {
        vc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Up.push(e), e.mode & an && typeof t.UNSAFE_componentWillMount == "function" && zp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Pp.push(e), e.mode & an && typeof t.UNSAFE_componentWillReceiveProps == "function" && Ip.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Fp.push(e), e.mode & an && typeof t.UNSAFE_componentWillUpdate == "function" && Vp.push(e));
      }, yi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Up.length > 0 && (Up.forEach(function(z) {
          e.add(gt(z) || "Component"), vc.add(z.type);
        }), Up = []);
        var t = /* @__PURE__ */ new Set();
        zp.length > 0 && (zp.forEach(function(z) {
          t.add(gt(z) || "Component"), vc.add(z.type);
        }), zp = []);
        var a = /* @__PURE__ */ new Set();
        Pp.length > 0 && (Pp.forEach(function(z) {
          a.add(gt(z) || "Component"), vc.add(z.type);
        }), Pp = []);
        var o = /* @__PURE__ */ new Set();
        Ip.length > 0 && (Ip.forEach(function(z) {
          o.add(gt(z) || "Component"), vc.add(z.type);
        }), Ip = []);
        var l = /* @__PURE__ */ new Set();
        Fp.length > 0 && (Fp.forEach(function(z) {
          l.add(gt(z) || "Component"), vc.add(z.type);
        }), Fp = []);
        var s = /* @__PURE__ */ new Set();
        if (Vp.length > 0 && (Vp.forEach(function(z) {
          s.add(gt(z) || "Component"), vc.add(z.type);
        }), Vp = []), t.size > 0) {
          var v = pc(t);
          h(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, v);
        }
        if (o.size > 0) {
          var y = pc(o);
          h(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, y);
        }
        if (s.size > 0) {
          var g = pc(s);
          h(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, g);
        }
        if (e.size > 0) {
          var T = pc(e);
          C(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (a.size > 0) {
          var N = pc(a);
          C(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, N);
        }
        if (l.size > 0) {
          var I = pc(l);
          C(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, I);
        }
      };
      var gm = /* @__PURE__ */ new Map(), u2 = /* @__PURE__ */ new Set();
      yi.recordLegacyContextWarning = function(e, t) {
        var a = yb(e);
        if (a === null) {
          h("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!u2.has(e.type)) {
          var o = gm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (o === void 0 && (o = [], gm.set(a, o)), o.push(e));
        }
      }, yi.flushLegacyContextWarning = function() {
        gm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], o = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              o.add(gt(s) || "Component"), u2.add(s.type);
            });
            var l = pc(o);
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
      }, yi.discardPendingWarnings = function() {
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
    function gb(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Hp(e, t, a) {
      var o = a.ref;
      if (o !== null && typeof o != "function" && typeof o != "object") {
        if ((e.mode & an || J) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== b) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !gb(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
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
          var g = v;
          Co(o, "ref");
          var T = "" + o;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === T)
            return t.ref;
          var N = function(I) {
            var z = g.refs;
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
      function t(B, te) {
        if (e) {
          var q = B.deletions;
          q === null ? (B.deletions = [te], B.flags |= Ia) : q.push(te);
        }
      }
      function a(B, te) {
        if (!e)
          return null;
        for (var q = te; q !== null; )
          t(B, q), q = q.sibling;
        return null;
      }
      function o(B, te) {
        for (var q = /* @__PURE__ */ new Map(), ye = te; ye !== null; )
          ye.key !== null ? q.set(ye.key, ye) : q.set(ye.index, ye), ye = ye.sibling;
        return q;
      }
      function l(B, te) {
        var q = xc(B, te);
        return q.index = 0, q.sibling = null, q;
      }
      function s(B, te, q) {
        if (B.index = q, !e)
          return B.flags |= Oo, te;
        var ye = B.alternate;
        if (ye !== null) {
          var We = ye.index;
          return We < te ? (B.flags |= En, te) : We;
        } else
          return B.flags |= En, te;
      }
      function v(B) {
        return e && B.alternate === null && (B.flags |= En), B;
      }
      function y(B, te, q, ye) {
        if (te === null || te.tag !== re) {
          var We = H1(q, B.mode, ye);
          return We.return = B, We;
        } else {
          var Ve = l(te, q);
          return Ve.return = B, Ve;
        }
      }
      function g(B, te, q, ye) {
        var We = q.type;
        if (We === xo)
          return N(B, te, q.props.children, ye, q.key);
        if (te !== null && (te.elementType === We || // Keep this check inline so it only runs on the false path:
        mC(te, q) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof We == "object" && We !== null && We.$$typeof === _t && c2(We) === te.type)) {
          var Ve = l(te, q.props);
          return Ve.ref = Hp(B, te, q), Ve.return = B, Ve._debugSource = q._source, Ve._debugOwner = q._owner, Ve;
        }
        var vt = V1(q, B.mode, ye);
        return vt.ref = Hp(B, te, q), vt.return = B, vt;
      }
      function T(B, te, q, ye) {
        if (te === null || te.tag !== V || te.stateNode.containerInfo !== q.containerInfo || te.stateNode.implementation !== q.implementation) {
          var We = $1(q, B.mode, ye);
          return We.return = B, We;
        } else {
          var Ve = l(te, q.children || []);
          return Ve.return = B, Ve;
        }
      }
      function N(B, te, q, ye, We) {
        if (te === null || te.tag !== ue) {
          var Ve = ls(q, B.mode, ye, We);
          return Ve.return = B, Ve;
        } else {
          var vt = l(te, q);
          return vt.return = B, vt;
        }
      }
      function I(B, te, q) {
        if (typeof te == "string" && te !== "" || typeof te == "number") {
          var ye = H1("" + te, B.mode, q);
          return ye.return = B, ye;
        }
        if (typeof te == "object" && te !== null) {
          switch (te.$$typeof) {
            case Ar: {
              var We = V1(te, B.mode, q);
              return We.ref = Hp(B, null, te), We.return = B, We;
            }
            case cr: {
              var Ve = $1(te, B.mode, q);
              return Ve.return = B, Ve;
            }
            case _t: {
              var vt = te._payload, Ct = te._init;
              return I(B, Ct(vt), q);
            }
          }
          if (kt(te) || xt(te)) {
            var ln = ls(te, B.mode, q, null);
            return ln.return = B, ln;
          }
          _m(B, te);
        }
        return typeof te == "function" && Sm(B), null;
      }
      function z(B, te, q, ye) {
        var We = te !== null ? te.key : null;
        if (typeof q == "string" && q !== "" || typeof q == "number")
          return We !== null ? null : y(B, te, "" + q, ye);
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case Ar:
              return q.key === We ? g(B, te, q, ye) : null;
            case cr:
              return q.key === We ? T(B, te, q, ye) : null;
            case _t: {
              var Ve = q._payload, vt = q._init;
              return z(B, te, vt(Ve), ye);
            }
          }
          if (kt(q) || xt(q))
            return We !== null ? null : N(B, te, q, ye, null);
          _m(B, q);
        }
        return typeof q == "function" && Sm(B), null;
      }
      function Y(B, te, q, ye, We) {
        if (typeof ye == "string" && ye !== "" || typeof ye == "number") {
          var Ve = B.get(q) || null;
          return y(te, Ve, "" + ye, We);
        }
        if (typeof ye == "object" && ye !== null) {
          switch (ye.$$typeof) {
            case Ar: {
              var vt = B.get(ye.key === null ? q : ye.key) || null;
              return g(te, vt, ye, We);
            }
            case cr: {
              var Ct = B.get(ye.key === null ? q : ye.key) || null;
              return T(te, Ct, ye, We);
            }
            case _t:
              var ln = ye._payload, Yt = ye._init;
              return Y(B, te, q, Yt(ln), We);
          }
          if (kt(ye) || xt(ye)) {
            var tr = B.get(q) || null;
            return N(te, tr, ye, We, null);
          }
          _m(te, ye);
        }
        return typeof ye == "function" && Sm(te), null;
      }
      function K(B, te, q) {
        {
          if (typeof B != "object" || B === null)
            return te;
          switch (B.$$typeof) {
            case Ar:
            case cr:
              s2(B, q);
              var ye = B.key;
              if (typeof ye != "string")
                break;
              if (te === null) {
                te = /* @__PURE__ */ new Set(), te.add(ye);
                break;
              }
              if (!te.has(ye)) {
                te.add(ye);
                break;
              }
              h("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ye);
              break;
            case _t:
              var We = B._payload, Ve = B._init;
              K(Ve(We), te, q);
              break;
          }
        }
        return te;
      }
      function ee(B, te, q, ye) {
        for (var We = null, Ve = 0; Ve < q.length; Ve++) {
          var vt = q[Ve];
          We = K(vt, We, B);
        }
        for (var Ct = null, ln = null, Yt = te, tr = 0, Gt = 0, Yn = null; Yt !== null && Gt < q.length; Gt++) {
          Yt.index > Gt ? (Yn = Yt, Yt = null) : Yn = Yt.sibling;
          var ha = z(B, Yt, q[Gt], ye);
          if (ha === null) {
            Yt === null && (Yt = Yn);
            break;
          }
          e && Yt && ha.alternate === null && t(B, Yt), tr = s(ha, tr, Gt), ln === null ? Ct = ha : ln.sibling = ha, ln = ha, Yt = Yn;
        }
        if (Gt === q.length) {
          if (a(B, Yt), Br()) {
            var Xr = Gt;
            cc(B, Xr);
          }
          return Ct;
        }
        if (Yt === null) {
          for (; Gt < q.length; Gt++) {
            var So = I(B, q[Gt], ye);
            So !== null && (tr = s(So, tr, Gt), ln === null ? Ct = So : ln.sibling = So, ln = So);
          }
          if (Br()) {
            var Ma = Gt;
            cc(B, Ma);
          }
          return Ct;
        }
        for (var La = o(B, Yt); Gt < q.length; Gt++) {
          var ma = Y(La, B, Gt, q[Gt], ye);
          ma !== null && (e && ma.alternate !== null && La.delete(ma.key === null ? Gt : ma.key), tr = s(ma, tr, Gt), ln === null ? Ct = ma : ln.sibling = ma, ln = ma);
        }
        if (e && La.forEach(function(fd) {
          return t(B, fd);
        }), Br()) {
          var lu = Gt;
          cc(B, lu);
        }
        return Ct;
      }
      function Fe(B, te, q, ye) {
        var We = xt(q);
        if (typeof We != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          q[Symbol.toStringTag] === "Generator" && (Bg || h("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Bg = !0), q.entries === We && ($g || h("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), $g = !0);
          var Ve = We.call(q);
          if (Ve)
            for (var vt = null, Ct = Ve.next(); !Ct.done; Ct = Ve.next()) {
              var ln = Ct.value;
              vt = K(ln, vt, B);
            }
        }
        var Yt = We.call(q);
        if (Yt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var tr = null, Gt = null, Yn = te, ha = 0, Xr = 0, So = null, Ma = Yt.next(); Yn !== null && !Ma.done; Xr++, Ma = Yt.next()) {
          Yn.index > Xr ? (So = Yn, Yn = null) : So = Yn.sibling;
          var La = z(B, Yn, Ma.value, ye);
          if (La === null) {
            Yn === null && (Yn = So);
            break;
          }
          e && Yn && La.alternate === null && t(B, Yn), ha = s(La, ha, Xr), Gt === null ? tr = La : Gt.sibling = La, Gt = La, Yn = So;
        }
        if (Ma.done) {
          if (a(B, Yn), Br()) {
            var ma = Xr;
            cc(B, ma);
          }
          return tr;
        }
        if (Yn === null) {
          for (; !Ma.done; Xr++, Ma = Yt.next()) {
            var lu = I(B, Ma.value, ye);
            lu !== null && (ha = s(lu, ha, Xr), Gt === null ? tr = lu : Gt.sibling = lu, Gt = lu);
          }
          if (Br()) {
            var fd = Xr;
            cc(B, fd);
          }
          return tr;
        }
        for (var Sv = o(B, Yn); !Ma.done; Xr++, Ma = Yt.next()) {
          var fl = Y(Sv, B, Xr, Ma.value, ye);
          fl !== null && (e && fl.alternate !== null && Sv.delete(fl.key === null ? Xr : fl.key), ha = s(fl, ha, Xr), Gt === null ? tr = fl : Gt.sibling = fl, Gt = fl);
        }
        if (e && Sv.forEach(function(BT) {
          return t(B, BT);
        }), Br()) {
          var $T = Xr;
          cc(B, $T);
        }
        return tr;
      }
      function ut(B, te, q, ye) {
        if (te !== null && te.tag === re) {
          a(B, te.sibling);
          var We = l(te, q);
          return We.return = B, We;
        }
        a(B, te);
        var Ve = H1(q, B.mode, ye);
        return Ve.return = B, Ve;
      }
      function nt(B, te, q, ye) {
        for (var We = q.key, Ve = te; Ve !== null; ) {
          if (Ve.key === We) {
            var vt = q.type;
            if (vt === xo) {
              if (Ve.tag === ue) {
                a(B, Ve.sibling);
                var Ct = l(Ve, q.props.children);
                return Ct.return = B, Ct._debugSource = q._source, Ct._debugOwner = q._owner, Ct;
              }
            } else if (Ve.elementType === vt || // Keep this check inline so it only runs on the false path:
            mC(Ve, q) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof vt == "object" && vt !== null && vt.$$typeof === _t && c2(vt) === Ve.type) {
              a(B, Ve.sibling);
              var ln = l(Ve, q.props);
              return ln.ref = Hp(B, Ve, q), ln.return = B, ln._debugSource = q._source, ln._debugOwner = q._owner, ln;
            }
            a(B, Ve);
            break;
          } else
            t(B, Ve);
          Ve = Ve.sibling;
        }
        if (q.type === xo) {
          var Yt = ls(q.props.children, B.mode, ye, q.key);
          return Yt.return = B, Yt;
        } else {
          var tr = V1(q, B.mode, ye);
          return tr.ref = Hp(B, te, q), tr.return = B, tr;
        }
      }
      function It(B, te, q, ye) {
        for (var We = q.key, Ve = te; Ve !== null; ) {
          if (Ve.key === We)
            if (Ve.tag === V && Ve.stateNode.containerInfo === q.containerInfo && Ve.stateNode.implementation === q.implementation) {
              a(B, Ve.sibling);
              var vt = l(Ve, q.children || []);
              return vt.return = B, vt;
            } else {
              a(B, Ve);
              break;
            }
          else
            t(B, Ve);
          Ve = Ve.sibling;
        }
        var Ct = $1(q, B.mode, ye);
        return Ct.return = B, Ct;
      }
      function Ot(B, te, q, ye) {
        var We = typeof q == "object" && q !== null && q.type === xo && q.key === null;
        if (We && (q = q.props.children), typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case Ar:
              return v(nt(B, te, q, ye));
            case cr:
              return v(It(B, te, q, ye));
            case _t:
              var Ve = q._payload, vt = q._init;
              return Ot(B, te, vt(Ve), ye);
          }
          if (kt(q))
            return ee(B, te, q, ye);
          if (xt(q))
            return Fe(B, te, q, ye);
          _m(B, q);
        }
        return typeof q == "string" && q !== "" || typeof q == "number" ? v(ut(B, te, "" + q, ye)) : (typeof q == "function" && Sm(B), a(B, te));
      }
      return Ot;
    }
    var Yf = f2(!0), d2 = f2(!1);
    function _b(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, o = xc(a, a.pendingProps);
        for (t.child = o, o.return = t; a.sibling !== null; )
          a = a.sibling, o = o.sibling = xc(a, a.pendingProps), o.return = t;
        o.sibling = null;
      }
    }
    function Sb(e, t) {
      for (var a = e.child; a !== null; )
        lT(a, t), a = a.sibling;
    }
    var Gg = Yu(null), Qg;
    Qg = {};
    var Cm = null, Gf = null, Kg = null, Em = !1;
    function xm() {
      Cm = null, Gf = null, Kg = null, Em = !1;
    }
    function p2() {
      Em = !0;
    }
    function v2() {
      Em = !1;
    }
    function h2(e, t, a) {
      pa(Gg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Qg && h("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Qg;
    }
    function Xg(e, t) {
      var a = Gg.current;
      da(Gg, t), e._currentValue = a;
    }
    function Jg(e, t, a) {
      for (var o = e; o !== null; ) {
        var l = o.alternate;
        if ($l(o.childLanes, t) ? l !== null && !$l(l.childLanes, t) && (l.childLanes = wt(l.childLanes, t)) : (o.childLanes = wt(o.childLanes, t), l !== null && (l.childLanes = wt(l.childLanes, t))), o === a)
          break;
        o = o.return;
      }
      o !== a && h("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Cb(e, t, a) {
      Eb(e, t, a);
    }
    function Eb(e, t, a) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var l = void 0, s = o.dependencies;
        if (s !== null) {
          l = o.child;
          for (var v = s.firstContext; v !== null; ) {
            if (v.context === t) {
              if (o.tag === b) {
                var y = Vs(a), g = tu(un, y);
                g.tag = bm;
                var T = o.updateQueue;
                if (T !== null) {
                  var N = T.shared, I = N.pending;
                  I === null ? g.next = g : (g.next = I.next, I.next = g), N.pending = g;
                }
              }
              o.lanes = wt(o.lanes, a);
              var z = o.alternate;
              z !== null && (z.lanes = wt(z.lanes, a)), Jg(o.return, a, e), s.lanes = wt(s.lanes, a);
              break;
            }
            v = v.next;
          }
        } else if (o.tag === ge)
          l = o.type === e.type ? null : o.child;
        else if (o.tag === le) {
          var Y = o.return;
          if (Y === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          Y.lanes = wt(Y.lanes, a);
          var K = Y.alternate;
          K !== null && (K.lanes = wt(K.lanes, a)), Jg(Y, a, e), l = o.sibling;
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
            var ee = l.sibling;
            if (ee !== null) {
              ee.return = l.return, l = ee;
              break;
            }
            l = l.return;
          }
        o = l;
      }
    }
    function Qf(e, t) {
      Cm = e, Gf = null, Kg = null;
      var a = e.dependencies;
      if (a !== null) {
        var o = a.firstContext;
        o !== null && (ua(a.lanes, t) && rv(), a.firstContext = null);
      }
    }
    function ur(e) {
      Em && h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Kg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Gf === null) {
          if (Cm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Gf = a, Cm.dependencies = {
            lanes: fe,
            firstContext: a
          };
        } else
          Gf = Gf.next = a;
      }
      return t;
    }
    var hc = null;
    function Zg(e) {
      hc === null ? hc = [e] : hc.push(e);
    }
    function xb() {
      if (hc !== null) {
        for (var e = 0; e < hc.length; e++) {
          var t = hc[e], a = t.interleaved;
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
        hc = null;
      }
    }
    function m2(e, t, a, o) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Zg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, wm(e, o);
    }
    function wb(e, t, a, o) {
      var l = t.interleaved;
      l === null ? (a.next = a, Zg(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function bb(e, t, a, o) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Zg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, wm(e, o);
    }
    function Qa(e, t) {
      return wm(e, t);
    }
    var Rb = wm;
    function wm(e, t) {
      e.lanes = wt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = wt(a.lanes, t)), a === null && (e.flags & (En | ra)) !== ot && dC(e);
      for (var o = e, l = e.return; l !== null; )
        l.childLanes = wt(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = wt(a.childLanes, t) : (l.flags & (En | ra)) !== ot && dC(e), o = l, l = l.return;
      if (o.tag === U) {
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
    function tu(e, t) {
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
    function Xu(e, t, a) {
      var o = e.updateQueue;
      if (o === null)
        return null;
      var l = o.shared;
      if (km === l && !t0 && (h("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), t0 = !0), wk()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, Rb(e, a);
      } else
        return bb(e, l, t, a);
    }
    function Tm(e, t, a) {
      var o = t.updateQueue;
      if (o !== null) {
        var l = o.shared;
        if (tp(a)) {
          var s = l.lanes;
          s = rp(s, e.pendingLanes);
          var v = wt(s, a);
          l.lanes = v, Cf(e, v);
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
            var g = y;
            do {
              var T = {
                eventTime: g.eventTime,
                lane: g.lane,
                tag: g.tag,
                payload: g.payload,
                callback: g.callback,
                next: null
              };
              v === null ? s = v = T : (v.next = T, v = T), g = g.next;
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
      var N = a.lastBaseUpdate;
      N === null ? a.firstBaseUpdate = t : N.next = t, a.lastBaseUpdate = t;
    }
    function kb(e, t, a, o, l, s) {
      switch (a.tag) {
        case g2: {
          var v = a.payload;
          if (typeof v == "function") {
            p2();
            var y = v.call(s, o, l);
            {
              if (e.mode & an) {
                xn(!0);
                try {
                  v.call(s, o, l);
                } finally {
                  xn(!1);
                }
              }
              v2();
            }
            return y;
          }
          return v;
        }
        case e0:
          e.flags = e.flags & ~ar | rt;
        // Intentional fallthrough
        case y2: {
          var g = a.payload, T;
          if (typeof g == "function") {
            p2(), T = g.call(s, o, l);
            {
              if (e.mode & an) {
                xn(!0);
                try {
                  g.call(s, o, l);
                } finally {
                  xn(!1);
                }
              }
              v2();
            }
          } else
            T = g;
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
        var g = y, T = g.next;
        g.next = null, v === null ? s = T : v.next = T, v = g;
        var N = e.alternate;
        if (N !== null) {
          var I = N.updateQueue, z = I.lastBaseUpdate;
          z !== v && (z === null ? I.firstBaseUpdate = T : z.next = T, I.lastBaseUpdate = g);
        }
      }
      if (s !== null) {
        var Y = l.baseState, K = fe, ee = null, Fe = null, ut = null, nt = s;
        do {
          var It = nt.lane, Ot = nt.eventTime;
          if ($l(o, It)) {
            if (ut !== null) {
              var te = {
                eventTime: Ot,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ht,
                tag: nt.tag,
                payload: nt.payload,
                callback: nt.callback,
                next: null
              };
              ut = ut.next = te;
            }
            Y = kb(e, l, nt, Y, t, a);
            var q = nt.callback;
            if (q !== null && // If the update was already committed, we should not queue its
            // callback again.
            nt.lane !== Ht) {
              e.flags |= pn;
              var ye = l.effects;
              ye === null ? l.effects = [nt] : ye.push(nt);
            }
          } else {
            var B = {
              eventTime: Ot,
              lane: It,
              tag: nt.tag,
              payload: nt.payload,
              callback: nt.callback,
              next: null
            };
            ut === null ? (Fe = ut = B, ee = Y) : ut = ut.next = B, K = wt(K, It);
          }
          if (nt = nt.next, nt === null) {
            if (y = l.shared.pending, y === null)
              break;
            var We = y, Ve = We.next;
            We.next = null, nt = Ve, l.lastBaseUpdate = We, l.shared.pending = null;
          }
        } while (!0);
        ut === null && (ee = Y), l.baseState = ee, l.firstBaseUpdate = Fe, l.lastBaseUpdate = ut;
        var vt = l.shared.interleaved;
        if (vt !== null) {
          var Ct = vt;
          do
            K = wt(K, Ct.lane), Ct = Ct.next;
          while (Ct !== vt);
        } else s === null && (l.shared.lanes = fe);
        hv(K), e.lanes = K, e.memoizedState = Y;
      }
      km = null;
    }
    function Tb(e, t) {
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
          v !== null && (s.callback = null, Tb(v, a));
        }
    }
    var $p = {}, Ju = Yu($p), Bp = Yu($p), Mm = Yu($p);
    function Lm(e) {
      if (e === $p)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function E2() {
      var e = Lm(Mm.current);
      return e;
    }
    function a0(e, t) {
      pa(Mm, t, e), pa(Bp, e, e), pa(Ju, $p, e);
      var a = qx(t);
      da(Ju, e), pa(Ju, a, e);
    }
    function Kf(e) {
      da(Ju, e), da(Bp, e), da(Mm, e);
    }
    function o0() {
      var e = Lm(Ju.current);
      return e;
    }
    function x2(e) {
      Lm(Mm.current);
      var t = Lm(Ju.current), a = Wx(t, e.type);
      t !== a && (pa(Bp, e, e), pa(Ju, a, e));
    }
    function i0(e) {
      Bp.current === e && (da(Ju, e), da(Bp, e));
    }
    var Nb = 0, w2 = 1, b2 = 1, qp = 2, gi = Yu(Nb);
    function l0(e, t) {
      return (e & t) !== 0;
    }
    function Xf(e) {
      return e & w2;
    }
    function u0(e, t) {
      return e & w2 | t;
    }
    function Db(e, t) {
      return e | t;
    }
    function Zu(e, t) {
      pa(gi, t, e);
    }
    function Jf(e) {
      da(gi, e);
    }
    function Mb(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Om(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ie) {
          var a = t.memoizedState;
          if (a !== null) {
            var o = a.dehydrated;
            if (o === null || H_(o) || Rg(o))
              return t;
          }
        } else if (t.tag === ze && // revealOrder undefined can't be trusted because it don't
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
    ), yr = (
      /* */
      1
    ), al = (
      /*  */
      2
    ), gr = (
      /*    */
      4
    ), qr = (
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
    var Be = p.ReactCurrentDispatcher, Wp = p.ReactCurrentBatchConfig, f0, Zf;
    f0 = /* @__PURE__ */ new Set();
    var mc = fe, on = null, _r = null, Sr = null, jm = !1, Yp = !1, Gp = 0, Ob = 0, jb = 25, oe = null, Wo = null, es = -1, d0 = !1;
    function Xt() {
      {
        var e = oe;
        Wo === null ? Wo = [e] : Wo.push(e);
      }
    }
    function De() {
      {
        var e = oe;
        Wo !== null && (es++, Wo[es] !== e && Ab(e));
      }
    }
    function ed(e) {
      e != null && !kt(e) && h("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", oe, typeof e);
    }
    function Ab(e) {
      {
        var t = gt(on);
        if (!f0.has(t) && (f0.add(t), Wo !== null)) {
          for (var a = "", o = 30, l = 0; l <= es; l++) {
            for (var s = Wo[l], v = l === es ? e : s, y = l + 1 + ". " + s; y.length < o; )
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
    function va() {
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
        if (!he(e[a], t[a]))
          return !1;
      return !0;
    }
    function td(e, t, a, o, l, s) {
      mc = s, on = t, Wo = e !== null ? e._debugHookTypes : null, es = -1, d0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = fe, e !== null && e.memoizedState !== null ? Be.current = Y2 : Wo !== null ? Be.current = W2 : Be.current = q2;
      var v = a(o, l);
      if (Yp) {
        var y = 0;
        do {
          if (Yp = !1, Gp = 0, y >= jb)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          y += 1, d0 = !1, _r = null, Sr = null, t.updateQueue = null, es = -1, Be.current = G2, v = a(o, l);
        } while (Yp);
      }
      Be.current = Ym, t._debugHookTypes = Wo;
      var g = _r !== null && _r.next !== null;
      if (mc = fe, on = null, _r = null, Sr = null, oe = null, Wo = null, es = -1, e !== null && (e.flags & Vn) !== (t.flags & Vn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Nt) !== it && h("Internal React error: Expected static flag was missing. Please notify the React team."), jm = !1, g)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function nd() {
      var e = Gp !== 0;
      return Gp = 0, e;
    }
    function R2(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & qt) !== it ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Hs(e.lanes, a);
    }
    function k2() {
      if (Be.current = Ym, jm) {
        for (var e = on.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        jm = !1;
      }
      mc = fe, on = null, _r = null, Sr = null, Wo = null, es = -1, oe = null, F2 = !1, Yp = !1, Gp = 0;
    }
    function ol() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Sr === null ? on.memoizedState = Sr = e : Sr = Sr.next = e, Sr;
    }
    function Yo() {
      var e;
      if (_r === null) {
        var t = on.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = _r.next;
      var a;
      if (Sr === null ? a = on.memoizedState : a = Sr.next, a !== null)
        Sr = a, a = Sr.next, _r = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        _r = e;
        var o = {
          memoizedState: _r.memoizedState,
          baseState: _r.baseState,
          baseQueue: _r.baseQueue,
          queue: _r.queue,
          next: null
        };
        Sr === null ? on.memoizedState = Sr = o : Sr = Sr.next = o;
      }
      return Sr;
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
      var o = ol(), l;
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
      var v = s.dispatch = Ib.bind(null, on, s);
      return [o.memoizedState, v];
    }
    function m0(e, t, a) {
      var o = Yo(), l = o.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = _r, v = s.baseQueue, y = l.pending;
      if (y !== null) {
        if (v !== null) {
          var g = v.next, T = y.next;
          v.next = T, y.next = g;
        }
        s.baseQueue !== v && h("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = v = y, l.pending = null;
      }
      if (v !== null) {
        var N = v.next, I = s.baseState, z = null, Y = null, K = null, ee = N;
        do {
          var Fe = ee.lane;
          if ($l(mc, Fe)) {
            if (K !== null) {
              var nt = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ht,
                action: ee.action,
                hasEagerState: ee.hasEagerState,
                eagerState: ee.eagerState,
                next: null
              };
              K = K.next = nt;
            }
            if (ee.hasEagerState)
              I = ee.eagerState;
            else {
              var It = ee.action;
              I = e(I, It);
            }
          } else {
            var ut = {
              lane: Fe,
              action: ee.action,
              hasEagerState: ee.hasEagerState,
              eagerState: ee.eagerState,
              next: null
            };
            K === null ? (Y = K = ut, z = I) : K = K.next = ut, on.lanes = wt(on.lanes, Fe), hv(Fe);
          }
          ee = ee.next;
        } while (ee !== null && ee !== N);
        K === null ? z = I : K.next = Y, he(I, o.memoizedState) || rv(), o.memoizedState = I, o.baseState = z, o.baseQueue = K, l.lastRenderedState = I;
      }
      var Ot = l.interleaved;
      if (Ot !== null) {
        var B = Ot;
        do {
          var te = B.lane;
          on.lanes = wt(on.lanes, te), hv(te), B = B.next;
        } while (B !== Ot);
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
        var g = v.next, T = g;
        do {
          var N = T.action;
          y = e(y, N), T = T.next;
        } while (T !== g);
        he(y, o.memoizedState) || rv(), o.memoizedState = y, o.baseQueue === null && (o.baseState = y), l.lastRenderedState = y;
      }
      return [y, s];
    }
    function r6(e, t, a) {
    }
    function a6(e, t, a) {
    }
    function g0(e, t, a) {
      var o = on, l = ol(), s, v = Br();
      if (v) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Zf || s !== a() && (h("The result of getServerSnapshot should be cached to avoid an infinite loop"), Zf = !0);
      } else {
        if (s = t(), !Zf) {
          var y = t();
          he(s, y) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), Zf = !0);
        }
        var g = dy();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        _f(g, mc) || N2(o, t, s);
      }
      l.memoizedState = s;
      var T = {
        value: s,
        getSnapshot: t
      };
      return l.queue = T, Im(M2.bind(null, o, T, e), [e]), o.flags |= na, Qp(yr | qr, D2.bind(null, o, T, s, t), void 0, null), s;
    }
    function Am(e, t, a) {
      var o = on, l = Yo(), s = t();
      if (!Zf) {
        var v = t();
        he(s, v) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), Zf = !0);
      }
      var y = l.memoizedState, g = !he(y, s);
      g && (l.memoizedState = s, rv());
      var T = l.queue;
      if (Xp(M2.bind(null, o, T, e), [e]), T.getSnapshot !== t || g || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Sr !== null && Sr.memoizedState.tag & yr) {
        o.flags |= na, Qp(yr | qr, D2.bind(null, o, T, s, t), void 0, null);
        var N = dy();
        if (N === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        _f(N, mc) || N2(o, t, s);
      }
      return s;
    }
    function N2(e, t, a) {
      e.flags |= Mu;
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
      t.value = a, t.getSnapshot = o, L2(t) && O2(e);
    }
    function M2(e, t, a) {
      var o = function() {
        L2(t) && O2(e);
      };
      return a(o);
    }
    function L2(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var o = t();
        return !he(a, o);
      } catch {
        return !0;
      }
    }
    function O2(e) {
      var t = Qa(e, pt);
      t !== null && wr(t, e, pt, un);
    }
    function Um(e) {
      var t = ol();
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
      var o = a.dispatch = Fb.bind(null, on, a);
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
      var t = ol();
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
      var l = ol(), s = o === void 0 ? null : o;
      on.flags |= e, l.memoizedState = Qp(yr | t, a, void 0, s);
    }
    function Pm(e, t, a, o) {
      var l = Yo(), s = o === void 0 ? null : o, v = void 0;
      if (_r !== null) {
        var y = _r.memoizedState;
        if (v = y.destroy, s !== null) {
          var g = y.deps;
          if (p0(s, g)) {
            l.memoizedState = Qp(t, a, v, s);
            return;
          }
        }
      }
      on.flags |= e, l.memoizedState = Qp(yr | t, a, v, s);
    }
    function Im(e, t) {
      return (on.mode & qt) !== it ? Kp(jo | na | qc, qr, e, t) : Kp(na | qc, qr, e, t);
    }
    function Xp(e, t) {
      return Pm(na, qr, e, t);
    }
    function E0(e, t) {
      return Kp(Ut, al, e, t);
    }
    function Fm(e, t) {
      return Pm(Ut, al, e, t);
    }
    function x0(e, t) {
      var a = Ut;
      return a |= ii, (on.mode & qt) !== it && (a |= Fi), Kp(a, gr, e, t);
    }
    function Vm(e, t) {
      return Pm(Ut, gr, e, t);
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
      return l |= ii, (on.mode & qt) !== it && (l |= Fi), Kp(l, gr, j2.bind(null, t, e), o);
    }
    function Hm(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var o = a != null ? a.concat([e]) : null;
      return Pm(Ut, gr, j2.bind(null, t, e), o);
    }
    function Ub(e, t) {
    }
    var $m = Ub;
    function b0(e, t) {
      var a = ol(), o = t === void 0 ? null : t;
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
      var a = ol(), o = t === void 0 ? null : t, l = e();
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
      var t = ol();
      return t.memoizedState = e, e;
    }
    function A2(e) {
      var t = Yo(), a = _r, o = a.memoizedState;
      return z2(t, o, e);
    }
    function U2(e) {
      var t = Yo();
      if (_r === null)
        return t.memoizedState = e, e;
      var a = _r.memoizedState;
      return z2(t, a, e);
    }
    function z2(e, t, a) {
      var o = !Zd(mc);
      if (o) {
        if (!he(a, t)) {
          var l = np();
          on.lanes = wt(on.lanes, l), hv(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, rv()), e.memoizedState = a, a;
    }
    function zb(e, t, a) {
      var o = Wa();
      Bn(Eh(o, Po)), e(!0);
      var l = Wp.transition;
      Wp.transition = {};
      var s = Wp.transition;
      Wp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Bn(o), Wp.transition = l, l === null && s._updatedFibers) {
          var v = s._updatedFibers.size;
          v > 10 && C("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function T0() {
      var e = Um(!1), t = e[0], a = e[1], o = zb.bind(null, a), l = ol();
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
    function Pb() {
      return F2;
    }
    function N0() {
      var e = ol(), t = dy(), a = t.identifierPrefix, o;
      if (Br()) {
        var l = tb();
        o = ":" + a + "R" + l;
        var s = Gp++;
        s > 0 && (o += "H" + s.toString(32)), o += ":";
      } else {
        var v = Ob++;
        o = ":" + a + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = o, o;
    }
    function Wm() {
      var e = Yo(), t = e.memoizedState;
      return t;
    }
    function Ib(e, t, a) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var o = os(e), l = {
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
          wr(s, e, o, v), $2(s, t, o);
        }
      }
      B2(e, o);
    }
    function Fb(e, t, a) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var o = os(e), l = {
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
            y = Be.current, Be.current = _i;
            try {
              var g = t.lastRenderedState, T = v(g, a);
              if (l.hasEagerState = !0, l.eagerState = T, he(T, g)) {
                wb(e, t, l, o);
                return;
              }
            } catch {
            } finally {
              Be.current = y;
            }
          }
        }
        var N = m2(e, t, l, o);
        if (N !== null) {
          var I = Da();
          wr(N, e, o, I), $2(N, t, o);
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
        t.lanes = l, Cf(e, l);
      }
    }
    function B2(e, t, a) {
      Ls(e, t);
    }
    var Ym = {
      readContext: ur,
      useCallback: va,
      useContext: va,
      useEffect: va,
      useImperativeHandle: va,
      useInsertionEffect: va,
      useLayoutEffect: va,
      useMemo: va,
      useReducer: va,
      useRef: va,
      useState: va,
      useDebugValue: va,
      useDeferredValue: va,
      useTransition: va,
      useMutableSource: va,
      useSyncExternalStore: va,
      useId: va,
      unstable_isNewReconciler: ae
    }, q2 = null, W2 = null, Y2 = null, G2 = null, il = null, _i = null, Gm = null;
    {
      var D0 = function() {
        h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, St = function() {
        h("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      q2 = {
        readContext: function(e) {
          return ur(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", Xt(), ed(t), b0(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", Xt(), ur(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", Xt(), ed(t), Im(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return oe = "useImperativeHandle", Xt(), ed(a), w0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", Xt(), ed(t), E0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", Xt(), ed(t), x0(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", Xt(), ed(t);
          var a = Be.current;
          Be.current = il;
          try {
            return R0(e, t);
          } finally {
            Be.current = a;
          }
        },
        useReducer: function(e, t, a) {
          oe = "useReducer", Xt();
          var o = Be.current;
          Be.current = il;
          try {
            return h0(e, t, a);
          } finally {
            Be.current = o;
          }
        },
        useRef: function(e) {
          return oe = "useRef", Xt(), C0(e);
        },
        useState: function(e) {
          oe = "useState", Xt();
          var t = Be.current;
          Be.current = il;
          try {
            return Um(e);
          } finally {
            Be.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", Xt(), void 0;
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", Xt(), k0(e);
        },
        useTransition: function() {
          return oe = "useTransition", Xt(), T0();
        },
        useMutableSource: function(e, t, a) {
          return oe = "useMutableSource", Xt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return oe = "useSyncExternalStore", Xt(), g0(e, t, a);
        },
        useId: function() {
          return oe = "useId", Xt(), N0();
        },
        unstable_isNewReconciler: ae
      }, W2 = {
        readContext: function(e) {
          return ur(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", De(), b0(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", De(), ur(e);
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
          var a = Be.current;
          Be.current = il;
          try {
            return R0(e, t);
          } finally {
            Be.current = a;
          }
        },
        useReducer: function(e, t, a) {
          oe = "useReducer", De();
          var o = Be.current;
          Be.current = il;
          try {
            return h0(e, t, a);
          } finally {
            Be.current = o;
          }
        },
        useRef: function(e) {
          return oe = "useRef", De(), C0(e);
        },
        useState: function(e) {
          oe = "useState", De();
          var t = Be.current;
          Be.current = il;
          try {
            return Um(e);
          } finally {
            Be.current = t;
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
        unstable_isNewReconciler: ae
      }, Y2 = {
        readContext: function(e) {
          return ur(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", De(), Bm(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", De(), ur(e);
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
          var a = Be.current;
          Be.current = _i;
          try {
            return qm(e, t);
          } finally {
            Be.current = a;
          }
        },
        useReducer: function(e, t, a) {
          oe = "useReducer", De();
          var o = Be.current;
          Be.current = _i;
          try {
            return m0(e, t, a);
          } finally {
            Be.current = o;
          }
        },
        useRef: function(e) {
          return oe = "useRef", De(), zm();
        },
        useState: function(e) {
          oe = "useState", De();
          var t = Be.current;
          Be.current = _i;
          try {
            return _0(e);
          } finally {
            Be.current = t;
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
        unstable_isNewReconciler: ae
      }, G2 = {
        readContext: function(e) {
          return ur(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", De(), Bm(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", De(), ur(e);
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
          var a = Be.current;
          Be.current = Gm;
          try {
            return qm(e, t);
          } finally {
            Be.current = a;
          }
        },
        useReducer: function(e, t, a) {
          oe = "useReducer", De();
          var o = Be.current;
          Be.current = Gm;
          try {
            return y0(e, t, a);
          } finally {
            Be.current = o;
          }
        },
        useRef: function(e) {
          return oe = "useRef", De(), zm();
        },
        useState: function(e) {
          oe = "useState", De();
          var t = Be.current;
          Be.current = Gm;
          try {
            return S0(e);
          } finally {
            Be.current = t;
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
        unstable_isNewReconciler: ae
      }, il = {
        readContext: function(e) {
          return D0(), ur(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", St(), Xt(), b0(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", St(), Xt(), ur(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", St(), Xt(), Im(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return oe = "useImperativeHandle", St(), Xt(), w0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", St(), Xt(), E0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", St(), Xt(), x0(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", St(), Xt();
          var a = Be.current;
          Be.current = il;
          try {
            return R0(e, t);
          } finally {
            Be.current = a;
          }
        },
        useReducer: function(e, t, a) {
          oe = "useReducer", St(), Xt();
          var o = Be.current;
          Be.current = il;
          try {
            return h0(e, t, a);
          } finally {
            Be.current = o;
          }
        },
        useRef: function(e) {
          return oe = "useRef", St(), Xt(), C0(e);
        },
        useState: function(e) {
          oe = "useState", St(), Xt();
          var t = Be.current;
          Be.current = il;
          try {
            return Um(e);
          } finally {
            Be.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", St(), Xt(), void 0;
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", St(), Xt(), k0(e);
        },
        useTransition: function() {
          return oe = "useTransition", St(), Xt(), T0();
        },
        useMutableSource: function(e, t, a) {
          return oe = "useMutableSource", St(), Xt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return oe = "useSyncExternalStore", St(), Xt(), g0(e, t, a);
        },
        useId: function() {
          return oe = "useId", St(), Xt(), N0();
        },
        unstable_isNewReconciler: ae
      }, _i = {
        readContext: function(e) {
          return D0(), ur(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", St(), De(), Bm(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", St(), De(), ur(e);
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
          var a = Be.current;
          Be.current = _i;
          try {
            return qm(e, t);
          } finally {
            Be.current = a;
          }
        },
        useReducer: function(e, t, a) {
          oe = "useReducer", St(), De();
          var o = Be.current;
          Be.current = _i;
          try {
            return m0(e, t, a);
          } finally {
            Be.current = o;
          }
        },
        useRef: function(e) {
          return oe = "useRef", St(), De(), zm();
        },
        useState: function(e) {
          oe = "useState", St(), De();
          var t = Be.current;
          Be.current = _i;
          try {
            return _0(e);
          } finally {
            Be.current = t;
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
        unstable_isNewReconciler: ae
      }, Gm = {
        readContext: function(e) {
          return D0(), ur(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", St(), De(), Bm(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", St(), De(), ur(e);
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
          var a = Be.current;
          Be.current = _i;
          try {
            return qm(e, t);
          } finally {
            Be.current = a;
          }
        },
        useReducer: function(e, t, a) {
          oe = "useReducer", St(), De();
          var o = Be.current;
          Be.current = _i;
          try {
            return y0(e, t, a);
          } finally {
            Be.current = o;
          }
        },
        useRef: function(e) {
          return oe = "useRef", St(), De(), zm();
        },
        useState: function(e) {
          oe = "useState", St(), De();
          var t = Be.current;
          Be.current = _i;
          try {
            return S0(e);
          } finally {
            Be.current = t;
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
        unstable_isNewReconciler: ae
      };
    }
    var ts = d.unstable_now, Q2 = 0, Qm = -1, Jp = -1, Km = -1, M0 = !1, Xm = !1;
    function K2() {
      return M0;
    }
    function Vb() {
      Xm = !0;
    }
    function Hb() {
      M0 = !1, Xm = !1;
    }
    function $b() {
      M0 = Xm, Xm = !1;
    }
    function X2() {
      return Q2;
    }
    function J2() {
      Q2 = ts();
    }
    function L0(e) {
      Jp = ts(), e.actualStartTime < 0 && (e.actualStartTime = ts());
    }
    function Z2(e) {
      Jp = -1;
    }
    function Jm(e, t) {
      if (Jp >= 0) {
        var a = ts() - Jp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Jp = -1;
      }
    }
    function ll(e) {
      if (Qm >= 0) {
        var t = ts() - Qm;
        Qm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case U:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
            case se:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function O0(e) {
      if (Km >= 0) {
        var t = ts() - Km;
        Km = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case U:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
            case se:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function ul() {
      Qm = ts();
    }
    function j0() {
      Km = ts();
    }
    function A0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Si(e, t) {
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
          xn(!0);
          try {
            s = a(o, l);
          } finally {
            xn(!1);
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
        var o = Du(e), l = Da(), s = os(o), v = tu(l, s);
        v.payload = t, a != null && (Zm(a, "setState"), v.callback = a);
        var y = Xu(o, v, s);
        y !== null && (wr(y, o, s, l), Tm(y, o, s)), Ls(o, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var o = Du(e), l = Da(), s = os(o), v = tu(l, s);
        v.tag = g2, v.payload = t, a != null && (Zm(a, "replaceState"), v.callback = a);
        var y = Xu(o, v, s);
        y !== null && (wr(y, o, s, l), Tm(y, o, s)), Ls(o, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Du(e), o = Da(), l = os(a), s = tu(o, l);
        s.tag = bm, t != null && (Zm(t, "forceUpdate"), s.callback = t);
        var v = Xu(a, s, l);
        v !== null && (wr(v, a, l, o), Tm(v, a, l)), Jc(a, l);
      }
    };
    function nS(e, t, a, o, l, s, v) {
      var y = e.stateNode;
      if (typeof y.shouldComponentUpdate == "function") {
        var g = y.shouldComponentUpdate(o, s, v);
        {
          if (e.mode & an) {
            xn(!0);
            try {
              g = y.shouldComponentUpdate(o, s, v);
            } finally {
              xn(!1);
            }
          }
          g === void 0 && h("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ft(t) || "Component");
        }
        return g;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Xe(a, o) || !Xe(l, s) : !0;
    }
    function Bb(e, t, a) {
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
      t.updater = W0, e.stateNode = t, Nl(t, e), t._reactInternalInstance = U0;
    }
    function aS(e, t, a) {
      var o = !1, l = go, s = go, v = t.contextType;
      if ("contextType" in t) {
        var y = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === O && v._context === void 0
        );
        if (!y && !B0.has(t)) {
          B0.add(t);
          var g = "";
          v === void 0 ? g = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? g = " However, it is set to a " + typeof v + "." : v.$$typeof === bo ? g = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? g = " Did you accidentally pass the Context.Consumer instead?" : g = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", h("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ft(t) || "Component", g);
        }
      }
      if (typeof v == "object" && v !== null)
        s = ur(v);
      else {
        l = Hf(e, t, !0);
        var T = t.contextTypes;
        o = T != null, s = o ? $f(e, l) : go;
      }
      var N = new t(a, s);
      if (e.mode & an) {
        xn(!0);
        try {
          N = new t(a, s);
        } finally {
          xn(!1);
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
          var Y = null, K = null, ee = null;
          if (typeof N.componentWillMount == "function" && N.componentWillMount.__suppressDeprecationWarning !== !0 ? Y = "componentWillMount" : typeof N.UNSAFE_componentWillMount == "function" && (Y = "UNSAFE_componentWillMount"), typeof N.componentWillReceiveProps == "function" && N.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? K = "componentWillReceiveProps" : typeof N.UNSAFE_componentWillReceiveProps == "function" && (K = "UNSAFE_componentWillReceiveProps"), typeof N.componentWillUpdate == "function" && N.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ee = "componentWillUpdate" : typeof N.UNSAFE_componentWillUpdate == "function" && (ee = "UNSAFE_componentWillUpdate"), Y !== null || K !== null || ee !== null) {
            var Fe = Ft(t) || "Component", ut = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            F0.has(Fe) || (F0.add(Fe), h(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Fe, ut, Y !== null ? `
  ` + Y : "", K !== null ? `
  ` + K : "", ee !== null ? `
  ` + ee : ""));
          }
        }
      }
      return o && Y_(e, l, s), N;
    }
    function qb(e, t) {
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
      Bb(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = {}, n0(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = ur(s);
      else {
        var v = Hf(e, t, !0);
        l.context = $f(e, v);
      }
      {
        if (l.state === a) {
          var y = Ft(t) || "Component";
          H0.has(y) || (H0.add(y), h("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", y));
        }
        e.mode & an && yi.recordLegacyContextWarning(e, l), yi.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var g = t.getDerivedStateFromProps;
      if (typeof g == "function" && (q0(e, t, g, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (qb(e, l), Nm(e, a, l, o), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var T = Ut;
        T |= ii, (e.mode & qt) !== it && (T |= Fi), e.flags |= T;
      }
    }
    function Wb(e, t, a, o) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var v = l.context, y = t.contextType, g = go;
      if (typeof y == "object" && y !== null)
        g = ur(y);
      else {
        var T = Hf(e, t, !0);
        g = $f(e, T);
      }
      var N = t.getDerivedStateFromProps, I = typeof N == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !I && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || v !== g) && oS(e, l, a, g), S2();
      var z = e.memoizedState, Y = l.state = z;
      if (Nm(e, a, l, o), Y = e.memoizedState, s === a && z === Y && !cm() && !Dm()) {
        if (typeof l.componentDidMount == "function") {
          var K = Ut;
          K |= ii, (e.mode & qt) !== it && (K |= Fi), e.flags |= K;
        }
        return !1;
      }
      typeof N == "function" && (q0(e, t, N, a), Y = e.memoizedState);
      var ee = Dm() || nS(e, t, s, a, z, Y, g);
      if (ee) {
        if (!I && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var Fe = Ut;
          Fe |= ii, (e.mode & qt) !== it && (Fe |= Fi), e.flags |= Fe;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var ut = Ut;
          ut |= ii, (e.mode & qt) !== it && (ut |= Fi), e.flags |= ut;
        }
        e.memoizedProps = a, e.memoizedState = Y;
      }
      return l.props = a, l.state = Y, l.context = g, ee;
    }
    function Yb(e, t, a, o, l) {
      var s = t.stateNode;
      _2(e, t);
      var v = t.memoizedProps, y = t.type === t.elementType ? v : Si(t.type, v);
      s.props = y;
      var g = t.pendingProps, T = s.context, N = a.contextType, I = go;
      if (typeof N == "object" && N !== null)
        I = ur(N);
      else {
        var z = Hf(t, a, !0);
        I = $f(t, z);
      }
      var Y = a.getDerivedStateFromProps, K = typeof Y == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !K && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (v !== g || T !== I) && oS(t, s, o, I), S2();
      var ee = t.memoizedState, Fe = s.state = ee;
      if (Nm(t, o, s, l), Fe = t.memoizedState, v === g && ee === Fe && !cm() && !Dm() && !Le)
        return typeof s.componentDidUpdate == "function" && (v !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= Ut), typeof s.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= Jn), !1;
      typeof Y == "function" && (q0(t, a, Y, o), Fe = t.memoizedState);
      var ut = Dm() || nS(t, a, y, o, ee, Fe, I) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Le;
      return ut ? (!K && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(o, Fe, I), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(o, Fe, I)), typeof s.componentDidUpdate == "function" && (t.flags |= Ut), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Jn)) : (typeof s.componentDidUpdate == "function" && (v !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= Ut), typeof s.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= Jn), t.memoizedProps = o, t.memoizedState = Fe), s.props = o, s.state = Fe, s.context = I, ut;
    }
    function yc(e, t) {
      return {
        value: e,
        source: t,
        stack: ei(t),
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
    function Gb(e, t) {
      return !0;
    }
    function Q0(e, t) {
      try {
        var a = Gb(e, t);
        if (a === !1)
          return;
        var o = t.value, l = t.source, s = t.stack, v = s !== null ? s : "";
        if (o != null && o._suppressLogging) {
          if (e.tag === b)
            return;
          console.error(o);
        }
        var y = l ? gt(l) : null, g = y ? "The above error occurred in the <" + y + "> component:" : "The above error occurred in one of your React components:", T;
        if (e.tag === U)
          T = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var N = gt(e) || "Anonymous";
          T = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + N + ".");
        }
        var I = g + `
` + v + `

` + ("" + T);
        console.error(I);
      } catch (z) {
        setTimeout(function() {
          throw z;
        });
      }
    }
    var Qb = typeof WeakMap == "function" ? WeakMap : Map;
    function iS(e, t, a) {
      var o = tu(un, a);
      o.tag = e0, o.payload = {
        element: null
      };
      var l = t.value;
      return o.callback = function() {
        Vk(l), Q0(e, t);
      }, o;
    }
    function K0(e, t, a) {
      var o = tu(un, a);
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
        yC(e), Q0(e, t), typeof l != "function" && Ik(this);
        var g = t.value, T = t.stack;
        this.componentDidCatch(g, {
          componentStack: T !== null ? T : ""
        }), typeof l != "function" && (ua(e.lanes, pt) || h("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", gt(e) || "Unknown"));
      }), o;
    }
    function lS(e, t, a) {
      var o = e.pingCache, l;
      if (o === null ? (o = e.pingCache = new Qb(), l = /* @__PURE__ */ new Set(), o.set(t, l)) : (l = o.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), o.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = Hk.bind(null, e, t, a);
        ia && mv(e, a), t.then(s, s);
      }
    }
    function Kb(e, t, a, o) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function Xb(e, t) {
      var a = e.tag;
      if ((e.mode & Nt) === it && (a === k || a === Ee || a === Ce)) {
        var o = e.alternate;
        o ? (e.updateQueue = o.updateQueue, e.memoizedState = o.memoizedState, e.lanes = o.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function uS(e) {
      var t = e;
      do {
        if (t.tag === ie && Mb(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function sS(e, t, a, o, l) {
      if ((e.mode & Nt) === it) {
        if (e === t)
          e.flags |= ar;
        else {
          if (e.flags |= rt, a.flags |= Bc, a.flags &= -52805, a.tag === b) {
            var s = a.alternate;
            if (s === null)
              a.tag = qe;
            else {
              var v = tu(un, pt);
              v.tag = bm, Xu(a, v, pt);
            }
          }
          a.lanes = wt(a.lanes, pt);
        }
        return e;
      }
      return e.flags |= ar, e.lanes = l, e;
    }
    function Jb(e, t, a, o, l) {
      if (a.flags |= Rs, ia && mv(e, l), o !== null && typeof o == "object" && typeof o.then == "function") {
        var s = o;
        Xb(a), Br() && a.mode & Nt && e2();
        var v = uS(t);
        if (v !== null) {
          v.flags &= ~Tr, sS(v, t, a, e, l), v.mode & Nt && lS(e, s, l), Kb(v, e, s);
          return;
        } else {
          if (!vh(l)) {
            lS(e, s, l), N1();
            return;
          }
          var y = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          o = y;
        }
      } else if (Br() && a.mode & Nt) {
        e2();
        var g = uS(t);
        if (g !== null) {
          (g.flags & ar) === ot && (g.flags |= Tr), sS(g, t, a, e, l), Hg(yc(o, a));
          return;
        }
      }
      o = yc(o, a), Mk(o);
      var T = t;
      do {
        switch (T.tag) {
          case U: {
            var N = o;
            T.flags |= ar;
            var I = Vs(l);
            T.lanes = wt(T.lanes, I);
            var z = iS(T, N, I);
            r0(T, z);
            return;
          }
          case b:
            var Y = o, K = T.type, ee = T.stateNode;
            if ((T.flags & rt) === ot && (typeof K.getDerivedStateFromError == "function" || ee !== null && typeof ee.componentDidCatch == "function" && !uC(ee))) {
              T.flags |= ar;
              var Fe = Vs(l);
              T.lanes = wt(T.lanes, Fe);
              var ut = K0(T, Y, Fe);
              r0(T, ut);
              return;
            }
            break;
        }
        T = T.return;
      } while (T !== null);
    }
    function Zb() {
      return null;
    }
    var ev = p.ReactCurrentOwner, Ci = !1, X0, tv, J0, Z0, e1, gc, t1, ey, nv;
    X0 = {}, tv = {}, J0 = {}, Z0 = {}, e1 = {}, gc = !1, t1 = {}, ey = {}, nv = {};
    function Ta(e, t, a, o) {
      e === null ? t.child = d2(t, null, a, o) : t.child = Yf(t, e.child, a, o);
    }
    function eR(e, t, a, o) {
      t.child = Yf(t, e.child, null, o), t.child = Yf(t, null, a, o);
    }
    function cS(e, t, a, o, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && hi(
          s,
          o,
          // Resolved props
          "prop",
          Ft(a)
        );
      }
      var v = a.render, y = t.ref, g, T;
      Qf(t, l), wa(t);
      {
        if (ev.current = t, Xn(!0), g = td(e, t, v, o, y, l), T = nd(), t.mode & an) {
          xn(!0);
          try {
            g = td(e, t, v, o, y, l), T = nd();
          } finally {
            xn(!1);
          }
        }
        Xn(!1);
      }
      return ba(), e !== null && !Ci ? (R2(e, t, l), nu(e, t, l)) : (Br() && T && Ug(t), t.flags |= po, Ta(e, t, g, l), t.child);
    }
    function fS(e, t, a, o, l) {
      if (e === null) {
        var s = a.type;
        if (oT(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var v = s;
          return v = cd(s), t.tag = Ce, t.type = v, a1(t, s), dS(e, t, v, o, l);
        }
        {
          var y = s.propTypes;
          if (y && hi(
            y,
            o,
            // Resolved props
            "prop",
            Ft(s)
          ), a.defaultProps !== void 0) {
            var g = Ft(s) || "Unknown";
            nv[g] || (h("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", g), nv[g] = !0);
          }
        }
        var T = F1(a.type, null, o, t, t.mode, l);
        return T.ref = t.ref, T.return = t, t.child = T, T;
      }
      {
        var N = a.type, I = N.propTypes;
        I && hi(
          I,
          o,
          // Resolved props
          "prop",
          Ft(N)
        );
      }
      var z = e.child, Y = c1(e, l);
      if (!Y) {
        var K = z.memoizedProps, ee = a.compare;
        if (ee = ee !== null ? ee : Xe, ee(K, o) && e.ref === t.ref)
          return nu(e, t, l);
      }
      t.flags |= po;
      var Fe = xc(z, o);
      return Fe.ref = t.ref, Fe.return = t, t.child = Fe, Fe;
    }
    function dS(e, t, a, o, l) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === _t) {
          var v = s, y = v._payload, g = v._init;
          try {
            s = g(y);
          } catch {
            s = null;
          }
          var T = s && s.propTypes;
          T && hi(
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
          if (Ci = !1, t.pendingProps = o = N, c1(e, l))
            (e.flags & Bc) !== ot && (Ci = !0);
          else return t.lanes = e.lanes, nu(e, t, l);
      }
      return n1(e, t, a, o, l);
    }
    function pS(e, t, a) {
      var o = t.pendingProps, l = o.children, s = e !== null ? e.memoizedState : null;
      if (o.mode === "hidden" || Se)
        if ((t.mode & Nt) === it) {
          var v = {
            baseLanes: fe,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v, py(t, a);
        } else if (ua(a, la)) {
          var I = {
            baseLanes: fe,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = I;
          var z = s !== null ? s.baseLanes : a;
          py(t, z);
        } else {
          var y = null, g;
          if (s !== null) {
            var T = s.baseLanes;
            g = wt(T, a);
          } else
            g = a;
          t.lanes = t.childLanes = la;
          var N = {
            baseLanes: g,
            cachePool: y,
            transitions: null
          };
          return t.memoizedState = N, t.updateQueue = null, py(t, g), null;
        }
      else {
        var Y;
        s !== null ? (Y = wt(s.baseLanes, a), t.memoizedState = null) : Y = a, py(t, Y);
      }
      return Ta(e, t, l, a), t.child;
    }
    function tR(e, t, a) {
      var o = t.pendingProps;
      return Ta(e, t, o, a), t.child;
    }
    function nR(e, t, a) {
      var o = t.pendingProps.children;
      return Ta(e, t, o, a), t.child;
    }
    function rR(e, t, a) {
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
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Rn, t.flags |= Lu);
    }
    function n1(e, t, a, o, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && hi(
          s,
          o,
          // Resolved props
          "prop",
          Ft(a)
        );
      }
      var v;
      {
        var y = Hf(t, a, !0);
        v = $f(t, y);
      }
      var g, T;
      Qf(t, l), wa(t);
      {
        if (ev.current = t, Xn(!0), g = td(e, t, a, o, v, l), T = nd(), t.mode & an) {
          xn(!0);
          try {
            g = td(e, t, a, o, v, l), T = nd();
          } finally {
            xn(!1);
          }
        }
        Xn(!1);
      }
      return ba(), e !== null && !Ci ? (R2(e, t, l), nu(e, t, l)) : (Br() && T && Ug(t), t.flags |= po, Ta(e, t, g, l), t.child);
    }
    function hS(e, t, a, o, l) {
      {
        switch (ST(t)) {
          case !1: {
            var s = t.stateNode, v = t.type, y = new v(t.memoizedProps, s.context), g = y.state;
            s.updater.enqueueSetState(s, g, null);
            break;
          }
          case !0: {
            t.flags |= rt, t.flags |= ar;
            var T = new Error("Simulated error coming from DevTools"), N = Vs(l);
            t.lanes = wt(t.lanes, N);
            var I = K0(t, yc(T, t), N);
            r0(t, I);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var z = a.propTypes;
          z && hi(
            z,
            o,
            // Resolved props
            "prop",
            Ft(a)
          );
        }
      }
      var Y;
      rl(a) ? (Y = !0, dm(t)) : Y = !1, Qf(t, l);
      var K = t.stateNode, ee;
      K === null ? (ny(e, t), aS(t, a, o), Y0(t, a, o, l), ee = !0) : e === null ? ee = Wb(t, a, o, l) : ee = Yb(e, t, a, o, l);
      var Fe = r1(e, t, a, ee, Y, l);
      {
        var ut = t.stateNode;
        ee && ut.props !== o && (gc || h("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", gt(t) || "a component"), gc = !0);
      }
      return Fe;
    }
    function r1(e, t, a, o, l, s) {
      vS(e, t);
      var v = (t.flags & rt) !== ot;
      if (!o && !v)
        return l && K_(t, a, !1), nu(e, t, s);
      var y = t.stateNode;
      ev.current = t;
      var g;
      if (v && typeof a.getDerivedStateFromError != "function")
        g = null, Z2();
      else {
        wa(t);
        {
          if (Xn(!0), g = y.render(), t.mode & an) {
            xn(!0);
            try {
              y.render();
            } finally {
              xn(!1);
            }
          }
          Xn(!1);
        }
        ba();
      }
      return t.flags |= po, e !== null && v ? eR(e, t, g, s) : Ta(e, t, g, s), t.memoizedState = y.state, l && K_(t, a, !0), t.child;
    }
    function mS(e) {
      var t = e.stateNode;
      t.pendingContext ? G_(e, t.pendingContext, t.pendingContext !== t.context) : t.context && G_(e, t.context, !1), a0(e, t.containerInfo);
    }
    function aR(e, t, a) {
      if (mS(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var o = t.pendingProps, l = t.memoizedState, s = l.element;
      _2(e, t), Nm(t, o, null, a);
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
        }, T = t.updateQueue;
        if (T.baseState = g, t.memoizedState = g, t.flags & Tr) {
          var N = yc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return yS(e, t, y, a, N);
        } else if (y !== s) {
          var I = yc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return yS(e, t, y, a, I);
        } else {
          lb(t);
          var z = d2(t, null, y, a);
          t.child = z;
          for (var Y = z; Y; )
            Y.flags = Y.flags & ~En | ra, Y = Y.sibling;
        }
      } else {
        if (Wf(), y === s)
          return nu(e, t, a);
        Ta(e, t, y, a);
      }
      return t.child;
    }
    function yS(e, t, a, o, l) {
      return Wf(), Hg(l), t.flags |= Tr, Ta(e, t, a, o), t.child;
    }
    function oR(e, t, a) {
      x2(t), e === null && Vg(t);
      var o = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, v = l.children, y = Eg(o, l);
      return y ? v = null : s !== null && Eg(o, s) && (t.flags |= Fa), vS(e, t), Ta(e, t, v, a), t.child;
    }
    function iR(e, t) {
      return e === null && Vg(t), null;
    }
    function lR(e, t, a, o) {
      ny(e, t);
      var l = t.pendingProps, s = a, v = s._payload, y = s._init, g = y(v);
      t.type = g;
      var T = t.tag = iT(g), N = Si(g, l), I;
      switch (T) {
        case k:
          return a1(t, g), t.type = g = cd(g), I = n1(null, t, g, N, o), I;
        case b:
          return t.type = g = j1(g), I = hS(null, t, g, N, o), I;
        case Ee:
          return t.type = g = A1(g), I = cS(null, t, g, N, o), I;
        case ne: {
          if (t.type !== t.elementType) {
            var z = g.propTypes;
            z && hi(
              z,
              N,
              // Resolved for outer only
              "prop",
              Ft(g)
            );
          }
          return I = fS(
            null,
            t,
            g,
            Si(g.type, N),
            // The inner type can have defaults too
            o
          ), I;
        }
      }
      var Y = "";
      throw g !== null && typeof g == "object" && g.$$typeof === _t && (Y = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + g + ". " + ("Lazy element type must resolve to a class or function." + Y));
    }
    function uR(e, t, a, o, l) {
      ny(e, t), t.tag = b;
      var s;
      return rl(a) ? (s = !0, dm(t)) : s = !1, Qf(t, l), aS(t, a, o), Y0(t, a, o, l), r1(null, t, a, !0, s, l);
    }
    function sR(e, t, a, o) {
      ny(e, t);
      var l = t.pendingProps, s;
      {
        var v = Hf(t, a, !1);
        s = $f(t, v);
      }
      Qf(t, o);
      var y, g;
      wa(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var T = Ft(a) || "Unknown";
          X0[T] || (h("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", T, T), X0[T] = !0);
        }
        t.mode & an && yi.recordLegacyContextWarning(t, null), Xn(!0), ev.current = t, y = td(null, t, a, l, s, o), g = nd(), Xn(!1);
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
        return rl(a) ? (z = !0, dm(t)) : z = !1, t.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, n0(t), rS(t, y), Y0(t, a, l, o), r1(null, t, a, !0, z, o);
      } else {
        if (t.tag = k, t.mode & an) {
          xn(!0);
          try {
            y = td(null, t, a, l, s, o), g = nd();
          } finally {
            xn(!1);
          }
        }
        return Br() && g && Ug(t), Ta(null, t, y, o), a1(t, a), t.child;
      }
    }
    function a1(e, t) {
      {
        if (t && t.childContextTypes && h("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", o = zr();
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
          var g = Ft(t) || "Unknown";
          J0[g] || (h("%s: Function components do not support contextType.", g), J0[g] = !0);
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
        cachePool: Zb(),
        transitions: null
      };
    }
    function cR(e, t) {
      var a = null;
      return {
        baseLanes: wt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function fR(e, t, a, o) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return l0(e, qp);
    }
    function dR(e, t) {
      return Hs(e.childLanes, t);
    }
    function gS(e, t, a) {
      var o = t.pendingProps;
      CT(t) && (t.flags |= rt);
      var l = gi.current, s = !1, v = (t.flags & rt) !== ot;
      if (v || fR(l, e) ? (s = !0, t.flags &= ~rt) : (e === null || e.memoizedState !== null) && (l = Db(l, b2)), l = Xf(l), Zu(t, l), e === null) {
        Vg(t);
        var y = t.memoizedState;
        if (y !== null) {
          var g = y.dehydrated;
          if (g !== null)
            return yR(t, g);
        }
        var T = o.children, N = o.fallback;
        if (s) {
          var I = pR(t, T, N, a), z = t.child;
          return z.memoizedState = i1(a), t.memoizedState = o1, I;
        } else
          return l1(t, T);
      } else {
        var Y = e.memoizedState;
        if (Y !== null) {
          var K = Y.dehydrated;
          if (K !== null)
            return gR(e, t, v, o, K, Y, a);
        }
        if (s) {
          var ee = o.fallback, Fe = o.children, ut = hR(e, t, Fe, ee, a), nt = t.child, It = e.child.memoizedState;
          return nt.memoizedState = It === null ? i1(a) : cR(It, a), nt.childLanes = dR(e, a), t.memoizedState = o1, ut;
        } else {
          var Ot = o.children, B = vR(e, t, Ot, a);
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
    function pR(e, t, a, o) {
      var l = e.mode, s = e.child, v = {
        mode: "hidden",
        children: t
      }, y, g;
      return (l & Nt) === it && s !== null ? (y = s, y.childLanes = fe, y.pendingProps = v, e.mode & Bt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = 0, y.treeBaseDuration = 0), g = ls(a, l, o, null)) : (y = u1(v, l), g = ls(a, l, o, null)), y.return = e, g.return = e, y.sibling = g, e.child = y, g;
    }
    function u1(e, t, a) {
      return _C(e, t, fe, null);
    }
    function _S(e, t) {
      return xc(e, t);
    }
    function vR(e, t, a, o) {
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
    function hR(e, t, a, o, l) {
      var s = t.mode, v = e.child, y = v.sibling, g = {
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
        T = N, T.childLanes = fe, T.pendingProps = g, t.mode & Bt && (T.actualDuration = 0, T.actualStartTime = -1, T.selfBaseDuration = v.selfBaseDuration, T.treeBaseDuration = v.treeBaseDuration), t.deletions = null;
      } else
        T = _S(v, g), T.subtreeFlags = v.subtreeFlags & Vn;
      var I;
      return y !== null ? I = xc(y, o) : (I = ls(o, s, l, null), I.flags |= En), I.return = t, T.return = t, T.sibling = I, t.child = T, I;
    }
    function ty(e, t, a, o) {
      o !== null && Hg(o), Yf(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, v = l1(t, s);
      return v.flags |= En, t.memoizedState = null, v;
    }
    function mR(e, t, a, o, l) {
      var s = t.mode, v = {
        mode: "visible",
        children: a
      }, y = u1(v, s), g = ls(o, s, l, null);
      return g.flags |= En, y.return = t, g.return = t, y.sibling = g, t.child = y, (t.mode & Nt) !== it && Yf(t, e.child, null, l), g;
    }
    function yR(e, t, a) {
      return (e.mode & Nt) === it ? (h("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = pt) : Rg(t) ? e.lanes = Nr : e.lanes = la, null;
    }
    function gR(e, t, a, o, l, s, v) {
      if (a)
        if (t.flags & Tr) {
          t.flags &= ~Tr;
          var B = G0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return ty(e, t, v, B);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= rt, null;
          var te = o.children, q = o.fallback, ye = mR(e, t, te, q, v), We = t.child;
          return We.memoizedState = i1(v), t.memoizedState = o1, ye;
        }
      else {
        if (ob(), (t.mode & Nt) === it)
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
          var y, g, T;
          {
            var N = Ew(l);
            y = N.digest, g = N.message, T = N.stack;
          }
          var I;
          g ? I = new Error(g) : I = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var z = G0(I, y, T);
          return ty(e, t, v, z);
        }
        var Y = ua(v, e.childLanes);
        if (Ci || Y) {
          var K = dy();
          if (K !== null) {
            var ee = op(K, v);
            if (ee !== Ht && ee !== s.retryLane) {
              s.retryLane = ee;
              var Fe = un;
              Qa(e, ee), wr(K, e, ee, Fe);
            }
          }
          N1();
          var ut = G0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return ty(e, t, v, ut);
        } else if (H_(l)) {
          t.flags |= rt, t.child = e.child;
          var nt = $k.bind(null, e);
          return xw(l, nt), null;
        } else {
          ub(t, l, s.treeContext);
          var It = o.children, Ot = l1(t, It);
          return Ot.flags |= ra, Ot;
        }
      }
    }
    function SS(e, t, a) {
      e.lanes = wt(e.lanes, t);
      var o = e.alternate;
      o !== null && (o.lanes = wt(o.lanes, t)), Jg(e.return, t, a);
    }
    function _R(e, t, a) {
      for (var o = t; o !== null; ) {
        if (o.tag === ie) {
          var l = o.memoizedState;
          l !== null && SS(o, a, e);
        } else if (o.tag === ze)
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
    function SR(e) {
      for (var t = e, a = null; t !== null; ) {
        var o = t.alternate;
        o !== null && Om(o) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function CR(e) {
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
    function ER(e, t) {
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
    function xR(e, t) {
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
      CR(l), ER(s, l), xR(v, l), Ta(e, t, v, a);
      var y = gi.current, g = l0(y, qp);
      if (g)
        y = u0(y, qp), t.flags |= rt;
      else {
        var T = e !== null && (e.flags & rt) !== ot;
        T && _R(t, t.child, a), y = Xf(y);
      }
      if (Zu(t, y), (t.mode & Nt) === it)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var N = SR(t.child), I;
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
            var z = null, Y = t.child;
            for (t.child = null; Y !== null; ) {
              var K = Y.alternate;
              if (K !== null && Om(K) === null) {
                t.child = Y;
                break;
              }
              var ee = Y.sibling;
              Y.sibling = z, z = Y, Y = ee;
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
    function wR(e, t, a) {
      a0(t, t.stateNode.containerInfo);
      var o = t.pendingProps;
      return e === null ? t.child = Yf(t, null, o, a) : Ta(e, t, o, a), t.child;
    }
    var xS = !1;
    function bR(e, t, a) {
      var o = t.type, l = o._context, s = t.pendingProps, v = t.memoizedProps, y = s.value;
      {
        "value" in s || xS || (xS = !0, h("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var g = t.type.propTypes;
        g && hi(g, s, "prop", "Context.Provider");
      }
      if (h2(t, l, y), v !== null) {
        var T = v.value;
        if (he(T, y)) {
          if (v.children === s.children && !cm())
            return nu(e, t, a);
        } else
          Cb(t, l, a);
      }
      var N = s.children;
      return Ta(e, t, N, a), t.child;
    }
    var wS = !1;
    function RR(e, t, a) {
      var o = t.type;
      o._context === void 0 ? o !== o.Consumer && (wS || (wS = !0, h("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : o = o._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && h("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Qf(t, a);
      var v = ur(o);
      wa(t);
      var y;
      return ev.current = t, Xn(!0), y = s(v), Xn(!1), ba(), t.flags |= po, Ta(e, t, y, a), t.child;
    }
    function rv() {
      Ci = !0;
    }
    function ny(e, t) {
      (t.mode & Nt) === it && e !== null && (e.alternate = null, t.alternate = null, t.flags |= En);
    }
    function nu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), Z2(), hv(t.lanes), ua(a, t.childLanes) ? (_b(e, t), t.child) : null;
    }
    function kR(e, t, a) {
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
        return s === null ? (o.deletions = [e], o.flags |= Ia) : s.push(e), a.flags |= En, a;
      }
    }
    function c1(e, t) {
      var a = e.lanes;
      return !!ua(a, t);
    }
    function TR(e, t, a) {
      switch (t.tag) {
        case U:
          mS(t), t.stateNode, Wf();
          break;
        case H:
          x2(t);
          break;
        case b: {
          var o = t.type;
          rl(o) && dm(t);
          break;
        }
        case V:
          a0(t, t.stateNode.containerInfo);
          break;
        case ge: {
          var l = t.memoizedProps.value, s = t.type._context;
          h2(t, s, l);
          break;
        }
        case se:
          {
            var v = ua(a, t.childLanes);
            v && (t.flags |= Ut);
            {
              var y = t.stateNode;
              y.effectDuration = 0, y.passiveEffectDuration = 0;
            }
          }
          break;
        case ie: {
          var g = t.memoizedState;
          if (g !== null) {
            if (g.dehydrated !== null)
              return Zu(t, Xf(gi.current)), t.flags |= rt, null;
            var T = t.child, N = T.childLanes;
            if (ua(a, N))
              return gS(e, t, a);
            Zu(t, Xf(gi.current));
            var I = nu(e, t, a);
            return I !== null ? I.sibling : null;
          } else
            Zu(t, Xf(gi.current));
          break;
        }
        case ze: {
          var z = (e.flags & rt) !== ot, Y = ua(a, t.childLanes);
          if (z) {
            if (Y)
              return ES(e, t, a);
            t.flags |= rt;
          }
          var K = t.memoizedState;
          if (K !== null && (K.rendering = null, K.tail = null, K.lastEffect = null), Zu(t, gi.current), Y)
            break;
          return null;
        }
        case X:
        case _e:
          return t.lanes = fe, pS(e, t, a);
      }
      return nu(e, t, a);
    }
    function bS(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return kR(e, t, F1(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var o = e.memoizedProps, l = t.pendingProps;
        if (o !== l || cm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Ci = !0;
        else {
          var s = c1(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & rt) === ot)
            return Ci = !1, TR(e, t, a);
          (e.flags & Bc) !== ot ? Ci = !0 : Ci = !1;
        }
      } else if (Ci = !1, Br() && Zw(t)) {
        var v = t.index, y = eb();
        Z_(t, y, v);
      }
      switch (t.lanes = fe, t.tag) {
        case M:
          return sR(e, t, t.type, a);
        case Te: {
          var g = t.elementType;
          return lR(e, t, g, a);
        }
        case k: {
          var T = t.type, N = t.pendingProps, I = t.elementType === T ? N : Si(T, N);
          return n1(e, t, T, I, a);
        }
        case b: {
          var z = t.type, Y = t.pendingProps, K = t.elementType === z ? Y : Si(z, Y);
          return hS(e, t, z, K, a);
        }
        case U:
          return aR(e, t, a);
        case H:
          return oR(e, t, a);
        case re:
          return iR(e, t);
        case ie:
          return gS(e, t, a);
        case V:
          return wR(e, t, a);
        case Ee: {
          var ee = t.type, Fe = t.pendingProps, ut = t.elementType === ee ? Fe : Si(ee, Fe);
          return cS(e, t, ee, ut, a);
        }
        case ue:
          return tR(e, t, a);
        case xe:
          return nR(e, t, a);
        case se:
          return rR(e, t, a);
        case ge:
          return bR(e, t, a);
        case be:
          return RR(e, t, a);
        case ne: {
          var nt = t.type, It = t.pendingProps, Ot = Si(nt, It);
          if (t.type !== t.elementType) {
            var B = nt.propTypes;
            B && hi(
              B,
              Ot,
              // Resolved for outer only
              "prop",
              Ft(nt)
            );
          }
          return Ot = Si(nt.type, Ot), fS(e, t, nt, Ot, a);
        }
        case Ce:
          return dS(e, t, t.type, t.pendingProps, a);
        case qe: {
          var te = t.type, q = t.pendingProps, ye = t.elementType === te ? q : Si(te, q);
          return uR(e, t, te, ye, a);
        }
        case ze:
          return ES(e, t, a);
        case A:
          break;
        case X:
          return pS(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function rd(e) {
      e.flags |= Ut;
    }
    function RS(e) {
      e.flags |= Rn, e.flags |= Lu;
    }
    var kS, f1, TS, NS;
    kS = function(e, t, a, o) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === H || l.tag === re)
          Kx(e, l.stateNode);
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
        var v = t.stateNode, y = o0(), g = Jx(v, a, s, o, l, y);
        t.updateQueue = g, g && rd(t);
      }
    }, NS = function(e, t, a, o) {
      a !== o && rd(t);
    };
    function av(e, t) {
      if (!Br())
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
    function Wr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = fe, o = ot;
      if (t) {
        if ((e.mode & Bt) !== it) {
          for (var g = e.selfBaseDuration, T = e.child; T !== null; )
            a = wt(a, wt(T.lanes, T.childLanes)), o |= T.subtreeFlags & Vn, o |= T.flags & Vn, g += T.treeBaseDuration, T = T.sibling;
          e.treeBaseDuration = g;
        } else
          for (var N = e.child; N !== null; )
            a = wt(a, wt(N.lanes, N.childLanes)), o |= N.subtreeFlags & Vn, o |= N.flags & Vn, N.return = e, N = N.sibling;
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
    function NR(e, t, a) {
      if (pb() && (t.mode & Nt) !== it && (t.flags & rt) === ot)
        return i2(t), Wf(), t.flags |= Tr | Rs | ar, !1;
      var o = ym(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!o)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (fb(t), Wr(t), (t.mode & Bt) !== it) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Wf(), (t.flags & rt) === ot && (t.memoizedState = null), t.flags |= Ut, Wr(t), (t.mode & Bt) !== it) {
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
        case M:
        case Te:
        case Ce:
        case k:
        case Ee:
        case ue:
        case xe:
        case se:
        case be:
        case ne:
          return Wr(t), null;
        case b: {
          var l = t.type;
          return rl(l) && fm(t), Wr(t), null;
        }
        case U: {
          var s = t.stateNode;
          if (Kf(t), Og(t), c0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var v = ym(t);
            if (v)
              rd(t);
            else if (e !== null) {
              var y = e.memoizedState;
              // Check if this is a client root
              (!y.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Tr) !== ot) && (t.flags |= Jn, l2());
            }
          }
          return f1(e, t), Wr(t), null;
        }
        case H: {
          i0(t);
          var g = E2(), T = t.type;
          if (e !== null && t.stateNode != null)
            TS(e, t, T, o, g), e.ref !== t.ref && RS(t);
          else {
            if (!o) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Wr(t), null;
            }
            var N = o0(), I = ym(t);
            if (I)
              sb(t, g, N) && rd(t);
            else {
              var z = Qx(T, o, g, N, t);
              kS(z, t, !1, !1), t.stateNode = z, Xx(z, T, o, g) && rd(t);
            }
            t.ref !== null && RS(t);
          }
          return Wr(t), null;
        }
        case re: {
          var Y = o;
          if (e && t.stateNode != null) {
            var K = e.memoizedProps;
            NS(e, t, K, Y);
          } else {
            if (typeof Y != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var ee = E2(), Fe = o0(), ut = ym(t);
            ut ? cb(t) && rd(t) : t.stateNode = Zx(Y, ee, Fe, t);
          }
          return Wr(t), null;
        }
        case ie: {
          Jf(t);
          var nt = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var It = NR(e, t, nt);
            if (!It)
              return t.flags & ar ? t : null;
          }
          if ((t.flags & rt) !== ot)
            return t.lanes = a, (t.mode & Bt) !== it && A0(t), t;
          var Ot = nt !== null, B = e !== null && e.memoizedState !== null;
          if (Ot !== B && Ot) {
            var te = t.child;
            if (te.flags |= Fn, (t.mode & Nt) !== it) {
              var q = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              q || l0(gi.current, b2) ? Dk() : N1();
            }
          }
          var ye = t.updateQueue;
          if (ye !== null && (t.flags |= Ut), Wr(t), (t.mode & Bt) !== it && Ot) {
            var We = t.child;
            We !== null && (t.treeBaseDuration -= We.treeBaseDuration);
          }
          return null;
        }
        case V:
          return Kf(t), f1(e, t), e === null && Ww(t.stateNode.containerInfo), Wr(t), null;
        case ge:
          var Ve = t.type._context;
          return Xg(Ve, t), Wr(t), null;
        case qe: {
          var vt = t.type;
          return rl(vt) && fm(t), Wr(t), null;
        }
        case ze: {
          Jf(t);
          var Ct = t.memoizedState;
          if (Ct === null)
            return Wr(t), null;
          var ln = (t.flags & rt) !== ot, Yt = Ct.rendering;
          if (Yt === null)
            if (ln)
              av(Ct, !1);
            else {
              var tr = Lk() && (e === null || (e.flags & rt) === ot);
              if (!tr)
                for (var Gt = t.child; Gt !== null; ) {
                  var Yn = Om(Gt);
                  if (Yn !== null) {
                    ln = !0, t.flags |= rt, av(Ct, !1);
                    var ha = Yn.updateQueue;
                    return ha !== null && (t.updateQueue = ha, t.flags |= Ut), t.subtreeFlags = ot, Sb(t, a), Zu(t, u0(gi.current, qp)), t.child;
                  }
                  Gt = Gt.sibling;
                }
              Ct.tail !== null && Zn() > XS() && (t.flags |= rt, ln = !0, av(Ct, !1), t.lanes = Kd);
            }
          else {
            if (!ln) {
              var Xr = Om(Yt);
              if (Xr !== null) {
                t.flags |= rt, ln = !0;
                var So = Xr.updateQueue;
                if (So !== null && (t.updateQueue = So, t.flags |= Ut), av(Ct, !0), Ct.tail === null && Ct.tailMode === "hidden" && !Yt.alternate && !Br())
                  return Wr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Zn() * 2 - Ct.renderingStartTime > XS() && a !== la && (t.flags |= rt, ln = !0, av(Ct, !1), t.lanes = Kd);
            }
            if (Ct.isBackwards)
              Yt.sibling = t.child, t.child = Yt;
            else {
              var Ma = Ct.last;
              Ma !== null ? Ma.sibling = Yt : t.child = Yt, Ct.last = Yt;
            }
          }
          if (Ct.tail !== null) {
            var La = Ct.tail;
            Ct.rendering = La, Ct.tail = La.sibling, Ct.renderingStartTime = Zn(), La.sibling = null;
            var ma = gi.current;
            return ln ? ma = u0(ma, qp) : ma = Xf(ma), Zu(t, ma), La;
          }
          return Wr(t), null;
        }
        case A:
          break;
        case X:
        case _e: {
          T1(t);
          var lu = t.memoizedState, fd = lu !== null;
          if (e !== null) {
            var Sv = e.memoizedState, fl = Sv !== null;
            fl !== fd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !Se && (t.flags |= Fn);
          }
          return !fd || (t.mode & Nt) === it ? Wr(t) : ua(cl, la) && (Wr(t), t.subtreeFlags & (En | Ut) && (t.flags |= Fn)), null;
        }
        case Qe:
          return null;
        case je:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function DR(e, t, a) {
      switch (zg(t), t.tag) {
        case b: {
          var o = t.type;
          rl(o) && fm(t);
          var l = t.flags;
          return l & ar ? (t.flags = l & ~ar | rt, (t.mode & Bt) !== it && A0(t), t) : null;
        }
        case U: {
          t.stateNode, Kf(t), Og(t), c0();
          var s = t.flags;
          return (s & ar) !== ot && (s & rt) === ot ? (t.flags = s & ~ar | rt, t) : null;
        }
        case H:
          return i0(t), null;
        case ie: {
          Jf(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Wf();
          }
          var y = t.flags;
          return y & ar ? (t.flags = y & ~ar | rt, (t.mode & Bt) !== it && A0(t), t) : null;
        }
        case ze:
          return Jf(t), null;
        case V:
          return Kf(t), null;
        case ge:
          var g = t.type._context;
          return Xg(g, t), null;
        case X:
        case _e:
          return T1(t), null;
        case Qe:
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
        case U: {
          t.stateNode, Kf(t), Og(t), c0();
          break;
        }
        case H: {
          i0(t);
          break;
        }
        case V:
          Kf(t);
          break;
        case ie:
          Jf(t);
          break;
        case ze:
          Jf(t);
          break;
        case ge:
          var l = t.type._context;
          Xg(l, t);
          break;
        case X:
        case _e:
          T1(t);
          break;
      }
    }
    var LS = null;
    LS = /* @__PURE__ */ new Set();
    var ry = !1, Yr = !1, MR = typeof WeakSet == "function" ? WeakSet : Set, Je = null, ad = null, od = null;
    function LR(e) {
      Ii(null, function() {
        throw e;
      }), bs();
    }
    var OR = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Bt)
        try {
          ul(), t.componentWillUnmount();
        } finally {
          ll(e);
        }
      else
        t.componentWillUnmount();
    };
    function OS(e, t) {
      try {
        ns(gr, e);
      } catch (a) {
        yn(e, t, a);
      }
    }
    function d1(e, t, a) {
      try {
        OR(e, a);
      } catch (o) {
        yn(e, t, o);
      }
    }
    function jR(e, t, a) {
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
    function id(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var o;
          try {
            if (He && ht && e.mode & Bt)
              try {
                ul(), o = a(null);
              } finally {
                ll(e);
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
    function AR(e, t) {
      Yx(e.containerInfo), Je = t, UR();
      var a = AS;
      return AS = !1, a;
    }
    function UR() {
      for (; Je !== null; ) {
        var e = Je, t = e.child;
        (e.subtreeFlags & Vi) !== ot && t !== null ? (t.return = e, Je = t) : zR();
      }
    }
    function zR() {
      for (; Je !== null; ) {
        var e = Je;
        tn(e);
        try {
          PR(e);
        } catch (a) {
          yn(e, e.return, a);
        }
        mn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Je = t;
          return;
        }
        Je = e.return;
      }
    }
    function PR(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Jn) !== ot) {
        switch (tn(e), e.tag) {
          case k:
          case Ee:
          case Ce:
            break;
          case b: {
            if (t !== null) {
              var o = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !gc && (s.props !== e.memoizedProps && h("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(e) || "instance"), s.state !== e.memoizedState && h("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(e) || "instance"));
              var v = s.getSnapshotBeforeUpdate(e.elementType === e.type ? o : Si(e.type, o), l);
              {
                var y = LS;
                v === void 0 && !y.has(e.type) && (y.add(e.type), h("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", gt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case U: {
            {
              var g = e.stateNode;
              gw(g.containerInfo);
            }
            break;
          }
          case H:
          case re:
          case V:
          case qe:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        mn();
      }
    }
    function Ei(e, t, a) {
      var o = t.updateQueue, l = o !== null ? o.lastEffect : null;
      if (l !== null) {
        var s = l.next, v = s;
        do {
          if ((v.tag & e) === e) {
            var y = v.destroy;
            v.destroy = void 0, y !== void 0 && ((e & qr) !== Ka ? si(t) : (e & gr) !== Ka && Ts(t), (e & al) !== Ka && yv(!0), ay(t, a, y), (e & al) !== Ka && yv(!1), (e & qr) !== Ka ? qi() : (e & gr) !== Ka && Gd());
          }
          v = v.next;
        } while (v !== s);
      }
    }
    function ns(e, t) {
      var a = t.updateQueue, o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var l = o.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & qr) !== Ka ? Yd(t) : (e & gr) !== Ka && Kc(t);
            var v = s.create;
            (e & al) !== Ka && yv(!0), s.destroy = v(), (e & al) !== Ka && yv(!1), (e & qr) !== Ka ? sh() : (e & gr) !== Ka && ch();
            {
              var y = s.destroy;
              if (y !== void 0 && typeof y != "function") {
                var g = void 0;
                (s.tag & gr) !== ot ? g = "useLayoutEffect" : (s.tag & al) !== ot ? g = "useInsertionEffect" : g = "useEffect";
                var T = void 0;
                y === null ? T = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof y.then == "function" ? T = `

It looks like you wrote ` + g + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + g + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : T = " You returned: " + y, h("%s must not return anything besides a function, which is used for clean-up.%s", g, T);
              }
            }
          }
          s = s.next;
        } while (s !== l);
      }
    }
    function IR(e, t) {
      if ((t.flags & Ut) !== ot)
        switch (t.tag) {
          case se: {
            var a = t.stateNode.passiveEffectDuration, o = t.memoizedProps, l = o.id, s = o.onPostCommit, v = X2(), y = t.alternate === null ? "mount" : "update";
            K2() && (y = "nested-update"), typeof s == "function" && s(l, y, a, v);
            var g = t.return;
            e: for (; g !== null; ) {
              switch (g.tag) {
                case U:
                  var T = g.stateNode;
                  T.passiveEffectDuration += a;
                  break e;
                case se:
                  var N = g.stateNode;
                  N.passiveEffectDuration += a;
                  break e;
              }
              g = g.return;
            }
            break;
          }
        }
    }
    function FR(e, t, a, o) {
      if ((a.flags & $i) !== ot)
        switch (a.tag) {
          case k:
          case Ee:
          case Ce: {
            if (!Yr)
              if (a.mode & Bt)
                try {
                  ul(), ns(gr | yr, a);
                } finally {
                  ll(a);
                }
              else
                ns(gr | yr, a);
            break;
          }
          case b: {
            var l = a.stateNode;
            if (a.flags & Ut && !Yr)
              if (t === null)
                if (a.type === a.elementType && !gc && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(a) || "instance")), a.mode & Bt)
                  try {
                    ul(), l.componentDidMount();
                  } finally {
                    ll(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Si(a.type, t.memoizedProps), v = t.memoizedState;
                if (a.type === a.elementType && !gc && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(a) || "instance")), a.mode & Bt)
                  try {
                    ul(), l.componentDidUpdate(s, v, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    ll(a);
                  }
                else
                  l.componentDidUpdate(s, v, l.__reactInternalSnapshotBeforeUpdate);
              }
            var y = a.updateQueue;
            y !== null && (a.type === a.elementType && !gc && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(a) || "instance")), C2(a, y, l));
            break;
          }
          case U: {
            var g = a.updateQueue;
            if (g !== null) {
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
              C2(a, g, T);
            }
            break;
          }
          case H: {
            var N = a.stateNode;
            if (t === null && a.flags & Ut) {
              var I = a.type, z = a.memoizedProps;
              aw(N, I, z);
            }
            break;
          }
          case re:
            break;
          case V:
            break;
          case se: {
            {
              var Y = a.memoizedProps, K = Y.onCommit, ee = Y.onRender, Fe = a.stateNode.effectDuration, ut = X2(), nt = t === null ? "mount" : "update";
              K2() && (nt = "nested-update"), typeof ee == "function" && ee(a.memoizedProps.id, nt, a.actualDuration, a.treeBaseDuration, a.actualStartTime, ut);
              {
                typeof K == "function" && K(a.memoizedProps.id, nt, Fe, ut), zk(a);
                var It = a.return;
                e: for (; It !== null; ) {
                  switch (It.tag) {
                    case U:
                      var Ot = It.stateNode;
                      Ot.effectDuration += Fe;
                      break e;
                    case se:
                      var B = It.stateNode;
                      B.effectDuration += Fe;
                      break e;
                  }
                  It = It.return;
                }
              }
            }
            break;
          }
          case ie: {
            GR(e, a);
            break;
          }
          case ze:
          case qe:
          case A:
          case X:
          case _e:
          case je:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Yr || a.flags & Rn && US(a);
    }
    function VR(e) {
      switch (e.tag) {
        case k:
        case Ee:
        case Ce: {
          if (e.mode & Bt)
            try {
              ul(), OS(e, e.return);
            } finally {
              ll(e);
            }
          else
            OS(e, e.return);
          break;
        }
        case b: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && jR(e, e.return, t), jS(e, e.return);
          break;
        }
        case H: {
          jS(e, e.return);
          break;
        }
      }
    }
    function HR(e, t) {
      for (var a = null, o = e; ; ) {
        if (o.tag === H) {
          if (a === null) {
            a = o;
            try {
              var l = o.stateNode;
              t ? vw(l) : mw(o.stateNode, o.memoizedProps);
            } catch (v) {
              yn(e, e.return, v);
            }
          }
        } else if (o.tag === re) {
          if (a === null)
            try {
              var s = o.stateNode;
              t ? hw(s) : yw(s, o.memoizedProps);
            } catch (v) {
              yn(e, e.return, v);
            }
        } else if (!((o.tag === X || o.tag === _e) && o.memoizedState !== null && o !== e)) {
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
              ul(), l = t(o);
            } finally {
              ll(e);
            }
          else
            l = t(o);
          typeof l == "function" && h("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", gt(e));
        } else
          t.hasOwnProperty("current") || h("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", gt(e)), t.current = o;
      }
    }
    function $R(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function zS(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, zS(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === H) {
          var a = e.stateNode;
          a !== null && Qw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function BR(e) {
      for (var t = e.return; t !== null; ) {
        if (PS(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function PS(e) {
      return e.tag === H || e.tag === U || e.tag === V;
    }
    function IS(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || PS(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== H && t.tag !== re && t.tag !== le; ) {
          if (t.flags & En || t.child === null || t.tag === V)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & En))
          return t.stateNode;
      }
    }
    function qR(e) {
      var t = BR(e);
      switch (t.tag) {
        case H: {
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
      var o = e.tag, l = o === H || o === re;
      if (l) {
        var s = e.stateNode;
        t ? cw(a, s, t) : uw(a, s);
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
      var o = e.tag, l = o === H || o === re;
      if (l) {
        var s = e.stateNode;
        t ? sw(a, s, t) : lw(a, s);
      } else if (o !== V) {
        var v = e.child;
        if (v !== null) {
          v1(v, t, a);
          for (var y = v.sibling; y !== null; )
            v1(y, t, a), y = y.sibling;
        }
      }
    }
    var Gr = null, xi = !1;
    function WR(e, t, a) {
      {
        var o = t;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case H: {
              Gr = o.stateNode, xi = !1;
              break e;
            }
            case U: {
              Gr = o.stateNode.containerInfo, xi = !0;
              break e;
            }
            case V: {
              Gr = o.stateNode.containerInfo, xi = !0;
              break e;
            }
          }
          o = o.return;
        }
        if (Gr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        FS(e, t, a), Gr = null, xi = !1;
      }
      $R(a);
    }
    function rs(e, t, a) {
      for (var o = a.child; o !== null; )
        FS(e, t, o), o = o.sibling;
    }
    function FS(e, t, a) {
      switch (Bd(a), a.tag) {
        case H:
          Yr || id(a, t);
        // eslint-disable-next-line-no-fallthrough
        case re: {
          {
            var o = Gr, l = xi;
            Gr = null, rs(e, t, a), Gr = o, xi = l, Gr !== null && (xi ? dw(Gr, a.stateNode) : fw(Gr, a.stateNode));
          }
          return;
        }
        case le: {
          Gr !== null && (xi ? pw(Gr, a.stateNode) : bg(Gr, a.stateNode));
          return;
        }
        case V: {
          {
            var s = Gr, v = xi;
            Gr = a.stateNode.containerInfo, xi = !0, rs(e, t, a), Gr = s, xi = v;
          }
          return;
        }
        case k:
        case Ee:
        case ne:
        case Ce: {
          if (!Yr) {
            var y = a.updateQueue;
            if (y !== null) {
              var g = y.lastEffect;
              if (g !== null) {
                var T = g.next, N = T;
                do {
                  var I = N, z = I.destroy, Y = I.tag;
                  z !== void 0 && ((Y & al) !== Ka ? ay(a, t, z) : (Y & gr) !== Ka && (Ts(a), a.mode & Bt ? (ul(), ay(a, t, z), ll(a)) : ay(a, t, z), Gd())), N = N.next;
                } while (N !== T);
              }
            }
          }
          rs(e, t, a);
          return;
        }
        case b: {
          if (!Yr) {
            id(a, t);
            var K = a.stateNode;
            typeof K.componentWillUnmount == "function" && d1(a, t, K);
          }
          rs(e, t, a);
          return;
        }
        case A: {
          rs(e, t, a);
          return;
        }
        case X: {
          if (
            // TODO: Remove this dead flag
            a.mode & Nt
          ) {
            var ee = Yr;
            Yr = ee || a.memoizedState !== null, rs(e, t, a), Yr = ee;
          } else
            rs(e, t, a);
          break;
        }
        default: {
          rs(e, t, a);
          return;
        }
      }
    }
    function YR(e) {
      e.memoizedState;
    }
    function GR(e, t) {
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
        a === null && (a = e.stateNode = new MR()), t.forEach(function(o) {
          var l = Bk.bind(null, e, o);
          if (!a.has(o)) {
            if (a.add(o), ia)
              if (ad !== null && od !== null)
                mv(od, ad);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            o.then(l, l);
          }
        });
      }
    }
    function QR(e, t, a) {
      ad = a, od = e, tn(t), HS(t, e), tn(t), ad = null, od = null;
    }
    function wi(e, t, a) {
      var o = t.deletions;
      if (o !== null)
        for (var l = 0; l < o.length; l++) {
          var s = o[l];
          try {
            WR(e, t, s);
          } catch (g) {
            yn(s, t, g);
          }
        }
      var v = Li();
      if (t.subtreeFlags & Hi)
        for (var y = t.child; y !== null; )
          tn(y), HS(y, e), y = y.sibling;
      tn(v);
    }
    function HS(e, t, a) {
      var o = e.alternate, l = e.flags;
      switch (e.tag) {
        case k:
        case Ee:
        case ne:
        case Ce: {
          if (wi(t, e), sl(e), l & Ut) {
            try {
              Ei(al | yr, e, e.return), ns(al | yr, e);
            } catch (vt) {
              yn(e, e.return, vt);
            }
            if (e.mode & Bt) {
              try {
                ul(), Ei(gr | yr, e, e.return);
              } catch (vt) {
                yn(e, e.return, vt);
              }
              ll(e);
            } else
              try {
                Ei(gr | yr, e, e.return);
              } catch (vt) {
                yn(e, e.return, vt);
              }
          }
          return;
        }
        case b: {
          wi(t, e), sl(e), l & Rn && o !== null && id(o, o.return);
          return;
        }
        case H: {
          wi(t, e), sl(e), l & Rn && o !== null && id(o, o.return);
          {
            if (e.flags & Fa) {
              var s = e.stateNode;
              try {
                V_(s);
              } catch (vt) {
                yn(e, e.return, vt);
              }
            }
            if (l & Ut) {
              var v = e.stateNode;
              if (v != null) {
                var y = e.memoizedProps, g = o !== null ? o.memoizedProps : y, T = e.type, N = e.updateQueue;
                if (e.updateQueue = null, N !== null)
                  try {
                    ow(v, N, T, g, y, e);
                  } catch (vt) {
                    yn(e, e.return, vt);
                  }
              }
            }
          }
          return;
        }
        case re: {
          if (wi(t, e), sl(e), l & Ut) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var I = e.stateNode, z = e.memoizedProps, Y = o !== null ? o.memoizedProps : z;
            try {
              iw(I, Y, z);
            } catch (vt) {
              yn(e, e.return, vt);
            }
          }
          return;
        }
        case U: {
          if (wi(t, e), sl(e), l & Ut && o !== null) {
            var K = o.memoizedState;
            if (K.isDehydrated)
              try {
                Mw(t.containerInfo);
              } catch (vt) {
                yn(e, e.return, vt);
              }
          }
          return;
        }
        case V: {
          wi(t, e), sl(e);
          return;
        }
        case ie: {
          wi(t, e), sl(e);
          var ee = e.child;
          if (ee.flags & Fn) {
            var Fe = ee.stateNode, ut = ee.memoizedState, nt = ut !== null;
            if (Fe.isHidden = nt, nt) {
              var It = ee.alternate !== null && ee.alternate.memoizedState !== null;
              It || Nk();
            }
          }
          if (l & Ut) {
            try {
              YR(e);
            } catch (vt) {
              yn(e, e.return, vt);
            }
            VS(e);
          }
          return;
        }
        case X: {
          var Ot = o !== null && o.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Nt
          ) {
            var B = Yr;
            Yr = B || Ot, wi(t, e), Yr = B;
          } else
            wi(t, e);
          if (sl(e), l & Fn) {
            var te = e.stateNode, q = e.memoizedState, ye = q !== null, We = e;
            if (te.isHidden = ye, ye && !Ot && (We.mode & Nt) !== it) {
              Je = We;
              for (var Ve = We.child; Ve !== null; )
                Je = Ve, XR(Ve), Ve = Ve.sibling;
            }
            HR(We, ye);
          }
          return;
        }
        case ze: {
          wi(t, e), sl(e), l & Ut && VS(e);
          return;
        }
        case A:
          return;
        default: {
          wi(t, e), sl(e);
          return;
        }
      }
    }
    function sl(e) {
      var t = e.flags;
      if (t & En) {
        try {
          qR(e);
        } catch (a) {
          yn(e, e.return, a);
        }
        e.flags &= ~En;
      }
      t & ra && (e.flags &= ~ra);
    }
    function KR(e, t, a) {
      ad = a, od = t, Je = e, $S(e, t, a), ad = null, od = null;
    }
    function $S(e, t, a) {
      for (var o = (e.mode & Nt) !== it; Je !== null; ) {
        var l = Je, s = l.child;
        if (l.tag === X && o) {
          var v = l.memoizedState !== null, y = v || ry;
          if (y) {
            h1(e, t, a);
            continue;
          } else {
            var g = l.alternate, T = g !== null && g.memoizedState !== null, N = T || Yr, I = ry, z = Yr;
            ry = y, Yr = N, Yr && !z && (Je = l, JR(l));
            for (var Y = s; Y !== null; )
              Je = Y, $S(
                Y,
                // New root; bubble back up to here and stop.
                t,
                a
              ), Y = Y.sibling;
            Je = l, ry = I, Yr = z, h1(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & $i) !== ot && s !== null ? (s.return = l, Je = s) : h1(e, t, a);
      }
    }
    function h1(e, t, a) {
      for (; Je !== null; ) {
        var o = Je;
        if ((o.flags & $i) !== ot) {
          var l = o.alternate;
          tn(o);
          try {
            FR(t, l, o, a);
          } catch (v) {
            yn(o, o.return, v);
          }
          mn();
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
    function XR(e) {
      for (; Je !== null; ) {
        var t = Je, a = t.child;
        switch (t.tag) {
          case k:
          case Ee:
          case ne:
          case Ce: {
            if (t.mode & Bt)
              try {
                ul(), Ei(gr, t, t.return);
              } finally {
                ll(t);
              }
            else
              Ei(gr, t, t.return);
            break;
          }
          case b: {
            id(t, t.return);
            var o = t.stateNode;
            typeof o.componentWillUnmount == "function" && d1(t, t.return, o);
            break;
          }
          case H: {
            id(t, t.return);
            break;
          }
          case X: {
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
    function JR(e) {
      for (; Je !== null; ) {
        var t = Je, a = t.child;
        if (t.tag === X) {
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
          VR(t);
        } catch (o) {
          yn(t, t.return, o);
        }
        if (mn(), t === e) {
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
    function ZR(e, t, a, o) {
      Je = t, ek(t, e, a, o);
    }
    function ek(e, t, a, o) {
      for (; Je !== null; ) {
        var l = Je, s = l.child;
        (l.subtreeFlags & li) !== ot && s !== null ? (s.return = l, Je = s) : tk(e, t, a, o);
      }
    }
    function tk(e, t, a, o) {
      for (; Je !== null; ) {
        var l = Je;
        if ((l.flags & na) !== ot) {
          tn(l);
          try {
            nk(t, l, a, o);
          } catch (v) {
            yn(l, l.return, v);
          }
          mn();
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
    function nk(e, t, a, o) {
      switch (t.tag) {
        case k:
        case Ee:
        case Ce: {
          if (t.mode & Bt) {
            j0();
            try {
              ns(qr | yr, t);
            } finally {
              O0(t);
            }
          } else
            ns(qr | yr, t);
          break;
        }
      }
    }
    function rk(e) {
      Je = e, ak();
    }
    function ak() {
      for (; Je !== null; ) {
        var e = Je, t = e.child;
        if ((Je.flags & Ia) !== ot) {
          var a = e.deletions;
          if (a !== null) {
            for (var o = 0; o < a.length; o++) {
              var l = a[o];
              Je = l, lk(l, e);
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
        (e.subtreeFlags & li) !== ot && t !== null ? (t.return = e, Je = t) : ok();
      }
    }
    function ok() {
      for (; Je !== null; ) {
        var e = Je;
        (e.flags & na) !== ot && (tn(e), ik(e), mn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Je = t;
          return;
        }
        Je = e.return;
      }
    }
    function ik(e) {
      switch (e.tag) {
        case k:
        case Ee:
        case Ce: {
          e.mode & Bt ? (j0(), Ei(qr | yr, e, e.return), O0(e)) : Ei(qr | yr, e, e.return);
          break;
        }
      }
    }
    function lk(e, t) {
      for (; Je !== null; ) {
        var a = Je;
        tn(a), sk(a, t), mn();
        var o = a.child;
        o !== null ? (o.return = a, Je = o) : uk(e);
      }
    }
    function uk(e) {
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
    function sk(e, t) {
      switch (e.tag) {
        case k:
        case Ee:
        case Ce: {
          e.mode & Bt ? (j0(), Ei(qr, e, t), O0(e)) : Ei(qr, e, t);
          break;
        }
      }
    }
    function ck(e) {
      switch (e.tag) {
        case k:
        case Ee:
        case Ce: {
          try {
            ns(gr | yr, e);
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
    function fk(e) {
      switch (e.tag) {
        case k:
        case Ee:
        case Ce: {
          try {
            ns(qr | yr, e);
          } catch (t) {
            yn(e, e.return, t);
          }
          break;
        }
      }
    }
    function dk(e) {
      switch (e.tag) {
        case k:
        case Ee:
        case Ce: {
          try {
            Ei(gr | yr, e, e.return);
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
    function pk(e) {
      switch (e.tag) {
        case k:
        case Ee:
        case Ce:
          try {
            Ei(qr | yr, e, e.return);
          } catch (t) {
            yn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var ov = Symbol.for;
      ov("selector.component"), ov("selector.has_pseudo_class"), ov("selector.role"), ov("selector.test_id"), ov("selector.text");
    }
    var vk = [];
    function hk() {
      vk.forEach(function(e) {
        return e();
      });
    }
    var mk = p.ReactCurrentActQueue;
    function yk(e) {
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
        return !e && mk.current !== null && h("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var gk = Math.ceil, m1 = p.ReactCurrentDispatcher, y1 = p.ReactCurrentOwner, Qr = p.ReactCurrentBatchConfig, bi = p.ReactCurrentActQueue, Cr = (
      /*             */
      0
    ), YS = (
      /*               */
      1
    ), Kr = (
      /*                */
      2
    ), Go = (
      /*                */
      4
    ), ru = 0, iv = 1, _c = 2, oy = 3, lv = 4, GS = 5, g1 = 6, Pt = Cr, Na = null, Un = null, Er = fe, cl = fe, _1 = Yu(fe), xr = ru, uv = null, iy = fe, sv = fe, ly = fe, cv = null, Xa = null, S1 = 0, QS = 500, KS = 1 / 0, _k = 500, au = null;
    function fv() {
      KS = Zn() + _k;
    }
    function XS() {
      return KS;
    }
    var uy = !1, C1 = null, ld = null, Sc = !1, as = null, dv = fe, E1 = [], x1 = null, Sk = 50, pv = 0, w1 = null, b1 = !1, sy = !1, Ck = 50, ud = 0, cy = null, vv = un, fy = fe, JS = !1;
    function dy() {
      return Na;
    }
    function Da() {
      return (Pt & (Kr | Go)) !== Cr ? Zn() : (vv !== un || (vv = Zn()), vv);
    }
    function os(e) {
      var t = e.mode;
      if ((t & Nt) === it)
        return pt;
      if ((Pt & Kr) !== Cr && Er !== fe)
        return Vs(Er);
      var a = mb() !== hb;
      if (a) {
        if (Qr.transition !== null) {
          var o = Qr.transition;
          o._updatedFibers || (o._updatedFibers = /* @__PURE__ */ new Set()), o._updatedFibers.add(e);
        }
        return fy === Ht && (fy = np()), fy;
      }
      var l = Wa();
      if (l !== Ht)
        return l;
      var s = ew();
      return s;
    }
    function Ek(e) {
      var t = e.mode;
      return (t & Nt) === it ? pt : mh();
    }
    function wr(e, t, a, o) {
      Wk(), JS && h("useInsertionEffect must not schedule updates."), b1 && (sy = !0), Uu(e, a, o), (Pt & Kr) !== fe && e === Na ? Qk(t) : (ia && Bs(e, t, a), Kk(t), e === Na && ((Pt & Kr) === Cr && (sv = wt(sv, a)), xr === lv && is(e, Er)), Ja(e, o), a === pt && Pt === Cr && (t.mode & Nt) === it && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !bi.isBatchingLegacy && (fv(), J_()));
    }
    function xk(e, t, a) {
      var o = e.current;
      o.lanes = t, Uu(e, t, a), Ja(e, a);
    }
    function wk(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Pt & Kr) !== Cr
      );
    }
    function Ja(e, t) {
      var a = e.callbackNode;
      yf(e, t);
      var o = mf(e, e === Na ? Er : fe);
      if (o === fe) {
        a !== null && vC(a), e.callbackNode = null, e.callbackPriority = Ht;
        return;
      }
      var l = Gi(o), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(bi.current !== null && a !== L1)) {
        a == null && s !== pt && h("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && vC(a);
      var v;
      if (l === pt)
        e.tag === Gu ? (bi.isBatchingLegacy !== null && (bi.didScheduleLegacyUpdate = !0), Jw(tC.bind(null, e))) : X_(tC.bind(null, e)), bi.current !== null ? bi.current.push(Qu) : nw(function() {
          (Pt & (Kr | Go)) === Cr && Qu();
        }), v = null;
      else {
        var y;
        switch (xh(o)) {
          case Ir:
            y = ks;
            break;
          case Po:
            y = Bi;
            break;
          case Ba:
            y = ui;
            break;
          case qa:
            y = Ml;
            break;
          default:
            y = ui;
            break;
        }
        v = O1(y, ZS.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = v;
    }
    function ZS(e, t) {
      if (Hb(), vv = un, fy = fe, (Pt & (Kr | Go)) !== Cr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, o = iu();
      if (o && e.callbackNode !== a)
        return null;
      var l = mf(e, e === Na ? Er : fe);
      if (l === fe)
        return null;
      var s = !_f(e, l) && !hh(e, l) && !t, v = s ? jk(e, l) : vy(e, l);
      if (v !== ru) {
        if (v === _c) {
          var y = gf(e);
          y !== fe && (l = y, v = R1(e, y));
        }
        if (v === iv) {
          var g = uv;
          throw Cc(e, fe), is(e, l), Ja(e, Zn()), g;
        }
        if (v === g1)
          is(e, l);
        else {
          var T = !_f(e, l), N = e.current.alternate;
          if (T && !Rk(N)) {
            if (v = vy(e, l), v === _c) {
              var I = gf(e);
              I !== fe && (l = I, v = R1(e, I));
            }
            if (v === iv) {
              var z = uv;
              throw Cc(e, fe), is(e, l), Ja(e, Zn()), z;
            }
          }
          e.finishedWork = N, e.finishedLanes = l, bk(e, v, l);
        }
      }
      return Ja(e, Zn()), e.callbackNode === a ? ZS.bind(null, e) : null;
    }
    function R1(e, t) {
      var a = cv;
      if (Ef(e)) {
        var o = Cc(e, t);
        o.flags |= Tr, qw(e.containerInfo);
      }
      var l = vy(e, t);
      if (l !== _c) {
        var s = Xa;
        Xa = a, s !== null && eC(s);
      }
      return l;
    }
    function eC(e) {
      Xa === null ? Xa = e : Xa.push.apply(Xa, e);
    }
    function bk(e, t, a) {
      switch (t) {
        case ru:
        case iv:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case _c: {
          Ec(e, Xa, au);
          break;
        }
        case oy: {
          if (is(e, a), Hl(a) && // do not delay if we're inside an act() scope
          !hC()) {
            var o = S1 + QS - Zn();
            if (o > 10) {
              var l = mf(e, fe);
              if (l !== fe)
                break;
              var s = e.suspendedLanes;
              if (!$l(s, a)) {
                Da(), Sf(e, s);
                break;
              }
              e.timeoutHandle = xg(Ec.bind(null, e, Xa, au), o);
              break;
            }
          }
          Ec(e, Xa, au);
          break;
        }
        case lv: {
          if (is(e, a), ep(a))
            break;
          if (!hC()) {
            var v = ho(e, a), y = v, g = Zn() - y, T = qk(g) - g;
            if (T > 10) {
              e.timeoutHandle = xg(Ec.bind(null, e, Xa, au), T);
              break;
            }
          }
          Ec(e, Xa, au);
          break;
        }
        case GS: {
          Ec(e, Xa, au);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Rk(e) {
      for (var t = e; ; ) {
        if (t.flags & Mu) {
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
        var g = t.child;
        if (t.subtreeFlags & Mu && g !== null) {
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
    function is(e, t) {
      t = Hs(t, ly), t = Hs(t, sv), _h(e, t);
    }
    function tC(e) {
      if ($b(), (Pt & (Kr | Go)) !== Cr)
        throw new Error("Should not already be working.");
      iu();
      var t = mf(e, fe);
      if (!ua(t, pt))
        return Ja(e, Zn()), null;
      var a = vy(e, t);
      if (e.tag !== Gu && a === _c) {
        var o = gf(e);
        o !== fe && (t = o, a = R1(e, o));
      }
      if (a === iv) {
        var l = uv;
        throw Cc(e, fe), is(e, t), Ja(e, Zn()), l;
      }
      if (a === g1)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Ec(e, Xa, au), Ja(e, Zn()), null;
    }
    function kk(e, t) {
      t !== fe && (Cf(e, wt(t, pt)), Ja(e, Zn()), (Pt & (Kr | Go)) === Cr && (fv(), Qu()));
    }
    function k1(e, t) {
      var a = Pt;
      Pt |= YS;
      try {
        return e(t);
      } finally {
        Pt = a, Pt === Cr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !bi.isBatchingLegacy && (fv(), J_());
      }
    }
    function Tk(e, t, a, o, l) {
      var s = Wa(), v = Qr.transition;
      try {
        return Qr.transition = null, Bn(Ir), e(t, a, o, l);
      } finally {
        Bn(s), Qr.transition = v, Pt === Cr && fv();
      }
    }
    function ou(e) {
      as !== null && as.tag === Gu && (Pt & (Kr | Go)) === Cr && iu();
      var t = Pt;
      Pt |= YS;
      var a = Qr.transition, o = Wa();
      try {
        return Qr.transition = null, Bn(Ir), e ? e() : void 0;
      } finally {
        Bn(o), Qr.transition = a, Pt = t, (Pt & (Kr | Go)) === Cr && Qu();
      }
    }
    function nC() {
      return (Pt & (Kr | Go)) !== Cr;
    }
    function py(e, t) {
      pa(_1, cl, e), cl = wt(cl, t);
    }
    function T1(e) {
      cl = _1.current, da(_1, e);
    }
    function Cc(e, t) {
      e.finishedWork = null, e.finishedLanes = fe;
      var a = e.timeoutHandle;
      if (a !== wg && (e.timeoutHandle = wg, tw(a)), Un !== null)
        for (var o = Un.return; o !== null; ) {
          var l = o.alternate;
          MS(l, o), o = o.return;
        }
      Na = e;
      var s = xc(e.current, null);
      return Un = s, Er = cl = t, xr = ru, uv = null, iy = fe, sv = fe, ly = fe, cv = null, Xa = null, xb(), yi.discardPendingWarnings(), s;
    }
    function rC(e, t) {
      do {
        var a = Un;
        try {
          if (xm(), k2(), mn(), y1.current = null, a === null || a.return === null) {
            xr = iv, uv = t, Un = null;
            return;
          }
          if (He && a.mode & Bt && Jm(a, !0), et)
            if (ba(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var o = t;
              zo(a, o, Er);
            } else
              Ns(a, t, Er);
          Jb(e, a.return, a, t, Er), lC(a);
        } catch (l) {
          t = l, Un === a && a !== null ? (a = a.return, Un = a) : a = Un;
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
    function Nk() {
      S1 = Zn();
    }
    function hv(e) {
      iy = wt(e, iy);
    }
    function Dk() {
      xr === ru && (xr = oy);
    }
    function N1() {
      (xr === ru || xr === oy || xr === _c) && (xr = lv), Na !== null && (Fs(iy) || Fs(sv)) && is(Na, Er);
    }
    function Mk(e) {
      xr !== lv && (xr = _c), cv === null ? cv = [e] : cv.push(e);
    }
    function Lk() {
      return xr === ru;
    }
    function vy(e, t) {
      var a = Pt;
      Pt |= Kr;
      var o = aC();
      if (Na !== e || Er !== t) {
        if (ia) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (mv(e, Er), l.clear()), Sh(e, t);
        }
        au = ip(), Cc(e, t);
      }
      Al(t);
      do
        try {
          Ok();
          break;
        } catch (s) {
          rC(e, s);
        }
      while (!0);
      if (xm(), Pt = a, oC(o), Un !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Xc(), Na = null, Er = fe, xr;
    }
    function Ok() {
      for (; Un !== null; )
        iC(Un);
    }
    function jk(e, t) {
      var a = Pt;
      Pt |= Kr;
      var o = aC();
      if (Na !== e || Er !== t) {
        if (ia) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (mv(e, Er), l.clear()), Sh(e, t);
        }
        au = ip(), fv(), Cc(e, t);
      }
      Al(t);
      do
        try {
          Ak();
          break;
        } catch (s) {
          rC(e, s);
        }
      while (!0);
      return xm(), oC(o), Pt = a, Un !== null ? (fh(), ru) : (Xc(), Na = null, Er = fe, xr);
    }
    function Ak() {
      for (; Un !== null && !Id(); )
        iC(Un);
    }
    function iC(e) {
      var t = e.alternate;
      tn(e);
      var a;
      (e.mode & Bt) !== it ? (L0(e), a = D1(t, e, cl), Jm(e, !0)) : a = D1(t, e, cl), mn(), e.memoizedProps = e.pendingProps, a === null ? lC(e) : Un = a, y1.current = null;
    }
    function lC(e) {
      var t = e;
      do {
        var a = t.alternate, o = t.return;
        if ((t.flags & Rs) === ot) {
          tn(t);
          var l = void 0;
          if ((t.mode & Bt) === it ? l = DS(a, t, cl) : (L0(t), l = DS(a, t, cl), Jm(t, !1)), mn(), l !== null) {
            Un = l;
            return;
          }
        } else {
          var s = DR(a, t);
          if (s !== null) {
            s.flags &= oh, Un = s;
            return;
          }
          if ((t.mode & Bt) !== it) {
            Jm(t, !1);
            for (var v = t.actualDuration, y = t.child; y !== null; )
              v += y.actualDuration, y = y.sibling;
            t.actualDuration = v;
          }
          if (o !== null)
            o.flags |= Rs, o.subtreeFlags = ot, o.deletions = null;
          else {
            xr = g1, Un = null;
            return;
          }
        }
        var g = t.sibling;
        if (g !== null) {
          Un = g;
          return;
        }
        t = o, Un = t;
      } while (t !== null);
      xr === ru && (xr = GS);
    }
    function Ec(e, t, a) {
      var o = Wa(), l = Qr.transition;
      try {
        Qr.transition = null, Bn(Ir), Uk(e, t, a, o);
      } finally {
        Qr.transition = l, Bn(o);
      }
      return null;
    }
    function Uk(e, t, a, o) {
      do
        iu();
      while (as !== null);
      if (Yk(), (Pt & (Kr | Go)) !== Cr)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (qd(s), l === null)
        return Wd(), null;
      if (s === fe && h("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = fe, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Ht;
      var v = wt(l.lanes, l.childLanes);
      ap(e, v), e === Na && (Na = null, Un = null, Er = fe), ((l.subtreeFlags & li) !== ot || (l.flags & li) !== ot) && (Sc || (Sc = !0, x1 = a, O1(ui, function() {
        return iu(), null;
      })));
      var y = (l.subtreeFlags & (Vi | Hi | $i | li)) !== ot, g = (l.flags & (Vi | Hi | $i | li)) !== ot;
      if (y || g) {
        var T = Qr.transition;
        Qr.transition = null;
        var N = Wa();
        Bn(Ir);
        var I = Pt;
        Pt |= Go, y1.current = null, AR(e, l), J2(), QR(e, l, s), Gx(e.containerInfo), e.current = l, Ds(s), KR(l, e, s), Ms(), Fd(), Pt = I, Bn(N), Qr.transition = T;
      } else
        e.current = l, J2();
      var z = Sc;
      if (Sc ? (Sc = !1, as = e, dv = s) : (ud = 0, cy = null), v = e.pendingLanes, v === fe && (ld = null), z || fC(e.current, !1), Hd(l.stateNode, o), ia && e.memoizedUpdaters.clear(), hk(), Ja(e, Zn()), t !== null)
        for (var Y = e.onRecoverableError, K = 0; K < t.length; K++) {
          var ee = t[K], Fe = ee.stack, ut = ee.digest;
          Y(ee.value, {
            componentStack: Fe,
            digest: ut
          });
        }
      if (uy) {
        uy = !1;
        var nt = C1;
        throw C1 = null, nt;
      }
      return ua(dv, pt) && e.tag !== Gu && iu(), v = e.pendingLanes, ua(v, pt) ? (Vb(), e === w1 ? pv++ : (pv = 0, w1 = e)) : pv = 0, Qu(), Wd(), null;
    }
    function iu() {
      if (as !== null) {
        var e = xh(dv), t = Ws(Ba, e), a = Qr.transition, o = Wa();
        try {
          return Qr.transition = null, Bn(t), Pk();
        } finally {
          Bn(o), Qr.transition = a;
        }
      }
      return !1;
    }
    function zk(e) {
      E1.push(e), Sc || (Sc = !0, O1(ui, function() {
        return iu(), null;
      }));
    }
    function Pk() {
      if (as === null)
        return !1;
      var e = x1;
      x1 = null;
      var t = as, a = dv;
      if (as = null, dv = fe, (Pt & (Kr | Go)) !== Cr)
        throw new Error("Cannot flush passive effects while already rendering.");
      b1 = !0, sy = !1, jl(a);
      var o = Pt;
      Pt |= Go, rk(t.current), ZR(t, t.current, a, e);
      {
        var l = E1;
        E1 = [];
        for (var s = 0; s < l.length; s++) {
          var v = l[s];
          IR(t, v);
        }
      }
      Qd(), fC(t.current, !0), Pt = o, Qu(), sy ? t === cy ? ud++ : (ud = 0, cy = t) : ud = 0, b1 = !1, sy = !1, $d(t);
      {
        var y = t.current.stateNode;
        y.effectDuration = 0, y.passiveEffectDuration = 0;
      }
      return !0;
    }
    function uC(e) {
      return ld !== null && ld.has(e);
    }
    function Ik(e) {
      ld === null ? ld = /* @__PURE__ */ new Set([e]) : ld.add(e);
    }
    function Fk(e) {
      uy || (uy = !0, C1 = e);
    }
    var Vk = Fk;
    function sC(e, t, a) {
      var o = yc(a, t), l = iS(e, o, pt), s = Xu(e, l, pt), v = Da();
      s !== null && (Uu(s, pt, v), Ja(s, v));
    }
    function yn(e, t, a) {
      if (LR(a), yv(!1), e.tag === U) {
        sC(e, e, a);
        return;
      }
      var o = null;
      for (o = t; o !== null; ) {
        if (o.tag === U) {
          sC(o, e, a);
          return;
        } else if (o.tag === b) {
          var l = o.type, s = o.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !uC(s)) {
            var v = yc(a, e), y = K0(o, v, pt), g = Xu(o, y, pt), T = Da();
            g !== null && (Uu(g, pt, T), Ja(g, T));
            return;
          }
        }
        o = o.return;
      }
      h(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Hk(e, t, a) {
      var o = e.pingCache;
      o !== null && o.delete(t);
      var l = Da();
      Sf(e, a), Xk(e), Na === e && $l(Er, a) && (xr === lv || xr === oy && Hl(Er) && Zn() - S1 < QS ? Cc(e, fe) : ly = wt(ly, a)), Ja(e, l);
    }
    function cC(e, t) {
      t === Ht && (t = Ek(e));
      var a = Da(), o = Qa(e, t);
      o !== null && (Uu(o, t, a), Ja(o, a));
    }
    function $k(e) {
      var t = e.memoizedState, a = Ht;
      t !== null && (a = t.retryLane), cC(e, a);
    }
    function Bk(e, t) {
      var a = Ht, o;
      switch (e.tag) {
        case ie:
          o = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case ze:
          o = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      o !== null && o.delete(t), cC(e, a);
    }
    function qk(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : gk(e / 1960) * 1960;
    }
    function Wk() {
      if (pv > Sk)
        throw pv = 0, w1 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      ud > Ck && (ud = 0, cy = null, h("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Yk() {
      yi.flushLegacyContextWarning(), yi.flushPendingUnsafeLifecycleWarnings();
    }
    function fC(e, t) {
      tn(e), hy(e, Fi, dk), t && hy(e, jo, pk), hy(e, Fi, ck), t && hy(e, jo, fk), mn();
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
        if ((Pt & Kr) !== Cr || !(e.mode & Nt))
          return;
        var t = e.tag;
        if (t !== M && t !== U && t !== b && t !== k && t !== Ee && t !== ne && t !== Ce)
          return;
        var a = gt(e) || "ReactComponent";
        if (my !== null) {
          if (my.has(a))
            return;
          my.add(a);
        } else
          my = /* @__PURE__ */ new Set([a]);
        var o = dr;
        try {
          tn(e), h("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          o ? tn(e) : mn();
        }
      }
    }
    var D1;
    {
      var Gk = null;
      D1 = function(e, t, a) {
        var o = SC(Gk, t);
        try {
          return bS(e, t, a);
        } catch (s) {
          if (ib() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (xm(), k2(), MS(e, t), SC(t, o), t.mode & Bt && L0(t), Ii(null, bS, null, e, t, a), oi()) {
            var l = bs();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var pC = !1, M1;
    M1 = /* @__PURE__ */ new Set();
    function Qk(e) {
      if (ko && !Pb())
        switch (e.tag) {
          case k:
          case Ee:
          case Ce: {
            var t = Un && gt(Un) || "Unknown", a = t;
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
      if (ia) {
        var a = e.memoizedUpdaters;
        a.forEach(function(o) {
          Bs(e, o, t);
        });
      }
    }
    var L1 = {};
    function O1(e, t) {
      {
        var a = bi.current;
        return a !== null ? (a.push(t), L1) : Pd(e, t);
      }
    }
    function vC(e) {
      if (e !== L1)
        return lh(e);
    }
    function hC() {
      return bi.current !== null;
    }
    function Kk(e) {
      {
        if (e.mode & Nt) {
          if (!WS())
            return;
        } else if (!yk() || Pt !== Cr || e.tag !== k && e.tag !== Ee && e.tag !== Ce)
          return;
        if (bi.current === null) {
          var t = dr;
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
    function Xk(e) {
      e.tag !== Gu && WS() && bi.current === null && h(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

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
    var Qo = null, sd = null, Jk = function(e) {
      Qo = e;
    };
    function cd(e) {
      {
        if (Qo === null)
          return e;
        var t = Qo(e);
        return t === void 0 ? e : t.current;
      }
    }
    function j1(e) {
      return cd(e);
    }
    function A1(e) {
      {
        if (Qo === null)
          return e;
        var t = Qo(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = cd(e.render);
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
          case k: {
            (typeof o == "function" || s === _t) && (l = !0);
            break;
          }
          case Ee: {
            (s === ce || s === _t) && (l = !0);
            break;
          }
          case ne:
          case Ce: {
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
        sd === null && (sd = /* @__PURE__ */ new WeakSet()), sd.add(e);
      }
    }
    var Zk = function(e, t) {
      {
        if (Qo === null)
          return;
        var a = t.staleFamilies, o = t.updatedFamilies;
        iu(), ou(function() {
          U1(e.current, o, a);
        });
      }
    }, eT = function(e, t) {
      {
        if (e.context !== go)
          return;
        iu(), ou(function() {
          gv(t, e, null, null);
        });
      }
    };
    function U1(e, t, a) {
      {
        var o = e.alternate, l = e.child, s = e.sibling, v = e.tag, y = e.type, g = null;
        switch (v) {
          case k:
          case Ce:
          case b:
            g = y;
            break;
          case Ee:
            g = y.render;
            break;
        }
        if (Qo === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var T = !1, N = !1;
        if (g !== null) {
          var I = Qo(g);
          I !== void 0 && (a.has(I) ? N = !0 : t.has(I) && (v === b ? N = !0 : T = !0));
        }
        if (sd !== null && (sd.has(e) || o !== null && sd.has(o)) && (N = !0), N && (e._debugNeedsRemount = !0), N || T) {
          var z = Qa(e, pt);
          z !== null && wr(z, e, pt, un);
        }
        l !== null && !N && U1(l, t, a), s !== null && U1(s, t, a);
      }
    }
    var tT = function(e, t) {
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
          case k:
          case Ce:
          case b:
            y = v;
            break;
          case Ee:
            y = v.render;
            break;
        }
        var g = !1;
        y !== null && t.has(y) && (g = !0), g ? nT(e, a) : o !== null && z1(o, t, a), l !== null && z1(l, t, a);
      }
    }
    function nT(e, t) {
      {
        var a = rT(e, t);
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
    function rT(e, t) {
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
    function aT(e, t, a, o) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = o, this.flags = ot, this.subtreeFlags = ot, this.deletions = null, this.lanes = fe, this.childLanes = fe, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !P1 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var _o = function(e, t, a, o) {
      return new aT(e, t, a, o);
    };
    function I1(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function oT(e) {
      return typeof e == "function" && !I1(e) && e.defaultProps === void 0;
    }
    function iT(e) {
      if (typeof e == "function")
        return I1(e) ? b : k;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ce)
          return Ee;
        if (t === Et)
          return ne;
      }
      return M;
    }
    function xc(e, t) {
      var a = e.alternate;
      a === null ? (a = _o(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = ot, a.subtreeFlags = ot, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Vn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var o = e.dependencies;
      switch (a.dependencies = o === null ? null : {
        lanes: o.lanes,
        firstContext: o.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case M:
        case k:
        case Ce:
          a.type = cd(e.type);
          break;
        case b:
          a.type = j1(e.type);
          break;
        case Ee:
          a.type = A1(e.type);
          break;
      }
      return a;
    }
    function lT(e, t) {
      e.flags &= Vn | En;
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
    function uT(e, t, a) {
      var o;
      return e === pm ? (o = Nt, t === !0 && (o |= an, o |= qt)) : o = it, ia && (o |= Bt), _o(U, null, null, o);
    }
    function F1(e, t, a, o, l, s) {
      var v = M, y = e;
      if (typeof e == "function")
        I1(e) ? (v = b, y = j1(y)) : y = cd(y);
      else if (typeof e == "string")
        v = H;
      else
        e: switch (e) {
          case xo:
            return ls(a.children, l, s, t);
          case ro:
            v = xe, l |= an, (l & Nt) !== it && (l |= qt);
            break;
          case wo:
            return sT(a, l, s, t);
          case Ae:
            return cT(a, l, s, t);
          case Ge:
            return fT(a, l, s, t);
          case Dn:
            return _C(a, l, s, t);
          case fn:
          // eslint-disable-next-line no-fallthrough
          case Dt:
          // eslint-disable-next-line no-fallthrough
          case hn:
          // eslint-disable-next-line no-fallthrough
          case fr:
          // eslint-disable-next-line no-fallthrough
          case Tt:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case bo:
                  v = ge;
                  break e;
                case O:
                  v = be;
                  break e;
                case ce:
                  v = Ee, y = A1(y);
                  break e;
                case Et:
                  v = ne;
                  break e;
                case _t:
                  v = Te, y = null;
                  break e;
              }
            var g = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var T = o ? gt(o) : null;
              T && (g += `

Check the render method of \`` + T + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + g));
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
    function ls(e, t, a, o) {
      var l = _o(ue, e, o, t);
      return l.lanes = a, l;
    }
    function sT(e, t, a, o) {
      typeof e.id != "string" && h('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = _o(se, e, o, t | Bt);
      return l.elementType = wo, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function cT(e, t, a, o) {
      var l = _o(ie, e, o, t);
      return l.elementType = Ae, l.lanes = a, l;
    }
    function fT(e, t, a, o) {
      var l = _o(ze, e, o, t);
      return l.elementType = Ge, l.lanes = a, l;
    }
    function _C(e, t, a, o) {
      var l = _o(X, e, o, t);
      l.elementType = Dn, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function H1(e, t, a) {
      var o = _o(re, e, null, t);
      return o.lanes = a, o;
    }
    function dT() {
      var e = _o(H, null, null, it);
      return e.elementType = "DELETED", e;
    }
    function pT(e) {
      var t = _o(le, null, null, it);
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
      return e === null && (e = _o(M, null, null, it)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function vT(e, t, a, o, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = wg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Ht, this.eventTimes = $s(fe), this.expirationTimes = $s(un), this.pendingLanes = fe, this.suspendedLanes = fe, this.pingedLanes = fe, this.expiredLanes = fe, this.mutableReadLanes = fe, this.finishedLanes = fe, this.entangledLanes = fe, this.entanglements = $s(fe), this.identifierPrefix = o, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], v = 0; v < Ul; v++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case pm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Gu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function CC(e, t, a, o, l, s, v, y, g, T) {
      var N = new vT(e, t, a, y, g), I = uT(t, s);
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
    function hT(e, t, a) {
      var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Zr(o), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: cr,
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
      var t = Du(e), a = Xw(t);
      if (t.tag === b) {
        var o = t.type;
        if (rl(o))
          return Q_(t, o, a);
      }
      return a;
    }
    function mT(e, t) {
      {
        var a = Du(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var o = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + o);
        }
        var l = aa(a);
        if (l === null)
          return null;
        if (l.mode & an) {
          var s = gt(a) || "Component";
          if (!W1[s]) {
            W1[s] = !0;
            var v = dr;
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
      var g = !1, T = null;
      return CC(e, t, g, T, a, o, l, s, v);
    }
    function wC(e, t, a, o, l, s, v, y, g, T) {
      var N = !0, I = CC(a, o, N, e, l, s, v, y, g);
      I.context = EC(null);
      var z = I.current, Y = Da(), K = os(z), ee = tu(Y, K);
      return ee.callback = t ?? null, Xu(z, ee, K), xk(I, K, Y), I;
    }
    function gv(e, t, a, o) {
      Vd(t, e);
      var l = t.current, s = Da(), v = os(l);
      wn(v);
      var y = EC(a);
      t.context === null ? t.context = y : t.pendingContext = y, ko && dr !== null && !q1 && (q1 = !0, h(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, gt(dr) || "Unknown"));
      var g = tu(s, v);
      g.payload = {
        element: e
      }, o = o === void 0 ? null : o, o !== null && (typeof o != "function" && h("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", o), g.callback = o);
      var T = Xu(l, g, v);
      return T !== null && (wr(T, l, v, s), Tm(T, l, v)), v;
    }
    function yy(e) {
      var t = e.current;
      return t.child ? t.child.tag === H ? t.child.stateNode : t.child.stateNode : null;
    }
    function yT(e) {
      switch (e.tag) {
        case U: {
          var t = e.stateNode;
          if (Ef(t)) {
            var a = ph(t);
            kk(t, a);
          }
          break;
        }
        case ie: {
          ou(function() {
            var l = Qa(e, pt);
            if (l !== null) {
              var s = Da();
              wr(l, e, pt, s);
            }
          });
          var o = pt;
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
    function gT(e) {
      if (e.tag === ie) {
        var t = zs, a = Qa(e, t);
        if (a !== null) {
          var o = Da();
          wr(a, e, t, o);
        }
        Y1(e, t);
      }
    }
    function _T(e) {
      if (e.tag === ie) {
        var t = os(e), a = Qa(e, t);
        if (a !== null) {
          var o = Da();
          wr(a, e, t, o);
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
    function ST(e) {
      return kC(e);
    }
    var TC = function(e) {
      return !1;
    };
    function CT(e) {
      return TC(e);
    }
    var NC = null, DC = null, MC = null, LC = null, OC = null, jC = null, AC = null, UC = null, zC = null;
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
          var v = Qa(e, pt);
          v !== null && wr(v, e, pt, un);
        }
      }, DC = function(e, t, a) {
        var o = G1(e, t);
        if (o !== null) {
          var l = IC(o.memoizedState, a);
          o.memoizedState = l, o.baseState = l, e.memoizedProps = bt({}, e.memoizedProps);
          var s = Qa(e, pt);
          s !== null && wr(s, e, pt, un);
        }
      }, MC = function(e, t, a, o) {
        var l = G1(e, t);
        if (l !== null) {
          var s = VC(l.memoizedState, a, o);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = bt({}, e.memoizedProps);
          var v = Qa(e, pt);
          v !== null && wr(v, e, pt, un);
        }
      }, LC = function(e, t, a) {
        e.pendingProps = $C(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var o = Qa(e, pt);
        o !== null && wr(o, e, pt, un);
      }, OC = function(e, t) {
        e.pendingProps = IC(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Qa(e, pt);
        a !== null && wr(a, e, pt, un);
      }, jC = function(e, t, a) {
        e.pendingProps = VC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var o = Qa(e, pt);
        o !== null && wr(o, e, pt, un);
      }, AC = function(e) {
        var t = Qa(e, pt);
        t !== null && wr(t, e, pt, un);
      }, UC = function(e) {
        kC = e;
      }, zC = function(e) {
        TC = e;
      };
    }
    function ET(e) {
      var t = aa(e);
      return t === null ? null : t.stateNode;
    }
    function xT(e) {
      return null;
    }
    function wT() {
      return dr;
    }
    function bT(e) {
      var t = e.findFiberByHostInstance, a = p.ReactCurrentDispatcher;
      return Ou({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: NC,
        overrideHookStateDeletePath: DC,
        overrideHookStateRenamePath: MC,
        overrideProps: LC,
        overridePropsDeletePath: OC,
        overridePropsRenamePath: jC,
        setErrorHandler: UC,
        setSuspenseHandler: zC,
        scheduleUpdate: AC,
        currentDispatcherRef: a,
        findHostInstanceByFiber: ET,
        findFiberByHostInstance: t || xT,
        // React Refresh
        findHostInstancesForRefresh: tT,
        scheduleRefresh: Zk,
        scheduleRoot: eT,
        setRefreshHandler: Jk,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: wT,
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
        if (a.nodeType !== In) {
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
        nC() && h("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), ou(function() {
          gv(null, e, null, null);
        }), B_(t);
      }
    };
    function RT(e, t) {
      if (!_y(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      qC(e);
      var a = !1, o = !1, l = "", s = BC;
      t != null && (t.hydrate ? C("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Ar && h(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var v = xC(e, pm, null, a, o, l, s);
      im(v.current, e);
      var y = e.nodeType === In ? e.parentNode : e;
      return wp(y), new Q1(v);
    }
    function gy(e) {
      this._internalRoot = e;
    }
    function kT(e) {
      e && Th(e);
    }
    gy.prototype.unstable_scheduleHydration = kT;
    function TT(e, t, a) {
      if (!_y(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      qC(e), t === void 0 && h("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var o = a ?? null, l = a != null && a.hydratedSources || null, s = !1, v = !1, y = "", g = BC;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (y = a.identifierPrefix), a.onRecoverableError !== void 0 && (g = a.onRecoverableError));
      var T = wC(t, null, e, pm, o, s, v, y, g);
      if (im(T.current, e), wp(e), l)
        for (var N = 0; N < l.length; N++) {
          var I = l[N];
          Lb(T, I);
        }
      return new gy(T);
    }
    function _y(e) {
      return !!(e && (e.nodeType === ta || e.nodeType === ai || e.nodeType === Rd));
    }
    function _v(e) {
      return !!(e && (e.nodeType === ta || e.nodeType === ai || e.nodeType === Rd || e.nodeType === In && e.nodeValue === " react-mount-point-unstable "));
    }
    function qC(e) {
      e.nodeType === ta && e.tagName && e.tagName.toUpperCase() === "BODY" && h("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Ap(e) && (e._reactRootContainer ? h("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : h("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var NT = p.ReactCurrentOwner, WC;
    WC = function(e) {
      if (e._reactRootContainer && e.nodeType !== In) {
        var t = RC(e._reactRootContainer.current);
        t && t.parentNode !== e && h("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, o = K1(e), l = !!(o && Wu(o));
      l && !a && h("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ta && e.tagName && e.tagName.toUpperCase() === "BODY" && h("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function K1(e) {
      return e ? e.nodeType === ai ? e.documentElement : e.firstChild : null;
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
        var v = wC(
          t,
          o,
          e,
          Gu,
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
        var y = e.nodeType === In ? e.parentNode : e;
        return wp(y), ou(), v;
      } else {
        for (var g; g = e.lastChild; )
          e.removeChild(g);
        if (typeof o == "function") {
          var T = o;
          o = function() {
            var z = yy(N);
            T.call(z);
          };
        }
        var N = xC(
          e,
          Gu,
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
        var I = e.nodeType === In ? e.parentNode : e;
        return wp(I), ou(function() {
          gv(t, N, a, o);
        }), N;
      }
    }
    function MT(e, t) {
      e !== null && typeof e != "function" && h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Sy(e, t, a, o, l) {
      WC(a), MT(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, v;
      if (!s)
        v = DT(a, t, e, l, o);
      else {
        if (v = s, typeof l == "function") {
          var y = l;
          l = function() {
            var g = yy(v);
            y.call(g);
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
        var t = NT.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || h("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ft(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ta ? e : mT(e, "findDOMNode");
    }
    function OT(e, t, a) {
      if (h("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !_v(t))
        throw new Error("Target container is not a DOM element.");
      {
        var o = Ap(t) && t._reactRootContainer === void 0;
        o && h("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Sy(null, e, t, !0, a);
    }
    function jT(e, t, a) {
      if (h("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !_v(t))
        throw new Error("Target container is not a DOM element.");
      {
        var o = Ap(t) && t._reactRootContainer === void 0;
        o && h("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Sy(null, e, t, !1, a);
    }
    function AT(e, t, a, o) {
      if (h("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !_v(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Yy(e))
        throw new Error("parentComponent must be a valid React Component");
      return Sy(e, t, a, !1, o);
    }
    var QC = !1;
    function UT(e) {
      if (QC || (QC = !0, h("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !_v(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Ap(e) && e._reactRootContainer === void 0;
        t && h("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = K1(e), o = a && !Wu(a);
          o && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return ou(function() {
          Sy(null, null, e, !1, function() {
            e._reactRootContainer = null, B_(e);
          });
        }), !0;
      } else {
        {
          var l = K1(e), s = !!(l && Wu(l)), v = e.nodeType === ta && _v(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Dr(yT), zu(gT), wh(_T), Gs(Wa), lp(Ch), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && h("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Pc(Px), Wy(k1, Tk, ou);
    function zT(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!_y(t))
        throw new Error("Target container is not a DOM element.");
      return hT(e, t, null, a);
    }
    function PT(e, t, a, o) {
      return AT(e, t, a, o);
    }
    var X1 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Wu, Vf, lm, Ru, Ic, k1]
    };
    function IT(e, t) {
      return X1.usingClientEntryPoint || h('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), RT(e, t);
    }
    function FT(e, t, a) {
      return X1.usingClientEntryPoint || h('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), TT(e, t, a);
    }
    function VT(e) {
      return nC() && h("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), ou(e);
    }
    var HT = bT({
      findFiberByHostInstance: uc,
      bundleType: 1,
      version: B1,
      rendererPackageName: "react-dom"
    });
    if (!HT && zn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var KC = window.location.protocol;
      /^(https?|file):$/.test(KC) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (KC === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    eo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X1, eo.createPortal = zT, eo.createRoot = IT, eo.findDOMNode = LT, eo.flushSync = VT, eo.hydrate = OT, eo.hydrateRoot = FT, eo.render = jT, eo.unmountComponentAtNode = UT, eo.unstable_batchedUpdates = k1, eo.unstable_renderSubtreeIntoContainer = PT, eo.version = B1, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })()), eo;
}
var wE;
function m7() {
  if (wE) return by.exports;
  wE = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (d) {
        console.error(d);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (c(), by.exports = v7()) : by.exports = h7(), by.exports;
}
var h_ = m7();
const xv = /* @__PURE__ */ IE(h_);
function o_(c, d) {
  (d == null || d > c.length) && (d = c.length);
  for (var p = 0, _ = Array(d); p < d; p++) _[p] = c[p];
  return _;
}
function y7(c) {
  if (Array.isArray(c)) return c;
}
function g7(c) {
  if (Array.isArray(c)) return o_(c);
}
function _7(c) {
  if (c === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return c;
}
function bE(c, d, p, _, x, C, h) {
  try {
    var w = c[C](h), k = w.value;
  } catch (b) {
    return void p(b);
  }
  w.done ? d(k) : Promise.resolve(k).then(_, x);
}
function S7(c) {
  return function() {
    var d = this, p = arguments;
    return new Promise(function(_, x) {
      var C = c.apply(d, p);
      function h(k) {
        bE(C, _, x, h, w, "next", k);
      }
      function w(k) {
        bE(C, _, x, h, w, "throw", k);
      }
      h(void 0);
    });
  };
}
function Dy(c, d, p) {
  return d = i_(d), R7(c, YE() ? Reflect.construct(d, p || [], i_(c).constructor) : d.apply(c, p));
}
function Tv(c, d) {
  if (!(c instanceof d)) throw new TypeError("Cannot call a class as a function");
}
function RE(c, d) {
  for (var p = 0; p < d.length; p++) {
    var _ = d[p];
    _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(c, Ny(_.key), _);
  }
}
function Nv(c, d, p) {
  return d && RE(c.prototype, d), p && RE(c, p), Object.defineProperty(c, "prototype", { writable: !1 }), c;
}
function hd(c, d, p) {
  return (d = Ny(d)) in c ? Object.defineProperty(c, d, { value: p, enumerable: !0, configurable: !0, writable: !0 }) : c[d] = p, c;
}
function bc() {
  return (bc = Object.assign ? Object.assign.bind() : function(c) {
    for (var d = 1; d < arguments.length; d++) {
      var p, _ = arguments[d];
      for (p in _) !{}.hasOwnProperty.call(_, p) || (c[p] = _[p]);
    }
    return c;
  }).apply(null, arguments);
}
function i_(c) {
  return (i_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(d) {
    return d.__proto__ || Object.getPrototypeOf(d);
  })(c);
}
function My(c, d) {
  if (typeof d != "function" && d !== null) throw new TypeError("Super expression must either be null or a function");
  c.prototype = Object.create(d && d.prototype, { constructor: { value: c, writable: !0, configurable: !0 } }), Object.defineProperty(c, "prototype", { writable: !1 }), d && GE(c, d);
}
function YE() {
  try {
    var c = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (YE = function() {
    return !!c;
  })();
}
function C7(c) {
  if (typeof Symbol < "u" && c[Symbol.iterator] != null || c["@@iterator"] != null) return Array.from(c);
}
function E7(c, d) {
  var p = c == null ? null : typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
  if (p != null) {
    var _, x, C, h, w = [], k = !0, b = !1;
    try {
      if (C = (p = p.call(c)).next, d !== 0) for (; !(k = (_ = C.call(p)).done) && (w.push(_.value), w.length !== d); k = !0) ;
    } catch (M) {
      b = !0, x = M;
    } finally {
      try {
        if (!k && p.return != null && (h = p.return(), Object(h) !== h)) return;
      } finally {
        if (b) throw x;
      }
    }
    return w;
  }
}
function x7() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function w7() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kE(c, d) {
  var p, _ = Object.keys(c);
  return Object.getOwnPropertySymbols && (p = Object.getOwnPropertySymbols(c), d && (p = p.filter(function(x) {
    return Object.getOwnPropertyDescriptor(c, x).enumerable;
  })), _.push.apply(_, p)), _;
}
function de(c) {
  for (var d = 1; d < arguments.length; d++) {
    var p = arguments[d] != null ? arguments[d] : {};
    d % 2 ? kE(Object(p), !0).forEach(function(_) {
      hd(c, _, p[_]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(p)) : kE(Object(p)).forEach(function(_) {
      Object.defineProperty(c, _, Object.getOwnPropertyDescriptor(p, _));
    });
  }
  return c;
}
function Xo(c, d) {
  if (c == null) return {};
  var p, _ = b7(c, d);
  if (Object.getOwnPropertySymbols) for (var x = Object.getOwnPropertySymbols(c), C = 0; C < x.length; C++) p = x[C], d.includes(p) || {}.propertyIsEnumerable.call(c, p) && (_[p] = c[p]);
  return _;
}
function b7(c, d) {
  if (c == null) return {};
  var p, _ = {};
  for (p in c) if ({}.hasOwnProperty.call(c, p)) {
    if (d.includes(p)) continue;
    _[p] = c[p];
  }
  return _;
}
function R7(c, d) {
  if (d && (typeof d == "object" || typeof d == "function")) return d;
  if (d !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return _7(c);
}
function pd() {
  pd = function() {
    return d;
  };
  var c, d = {}, p = Object.prototype, _ = p.hasOwnProperty, x = Object.defineProperty || function(A, X, _e) {
    A[X] = _e.value;
  }, Ee = typeof Symbol == "function" ? Symbol : {}, C = Ee.iterator || "@@iterator", h = Ee.asyncIterator || "@@asyncIterator", w = Ee.toStringTag || "@@toStringTag";
  function k(A, X, _e) {
    return Object.defineProperty(A, X, { value: _e, enumerable: !0, configurable: !0, writable: !0 }), A[X];
  }
  try {
    k({}, "");
  } catch {
    k = function(X, _e, Qe) {
      return X[_e] = Qe;
    };
  }
  function b(A, Se, _e, F) {
    var je, ke, ae, Le, Se = Se && Se.prototype instanceof xe ? Se : xe, Se = Object.create(Se.prototype), F = new le(F || []);
    return x(Se, "_invoke", { value: (je = A, ke = _e, ae = F, Le = U, function(J, et) {
      if (Le === H) throw Error("Generator is already running");
      if (Le === re) {
        if (J === "throw") throw et;
        return { value: c, done: !0 };
      }
      for (ae.method = J, ae.arg = et; ; ) {
        var He = ae.delegate;
        if (He && (He = (function ht(at, Pe) {
          var dt = Pe.method, mt = at.iterator[dt];
          return mt === c ? (Pe.delegate = null, dt === "throw" && at.iterator.return && (Pe.method = "return", Pe.arg = c, ht(at, Pe), Pe.method === "throw") || dt !== "return" && (Pe.method = "throw", Pe.arg = new TypeError("The iterator does not provide a '" + dt + "' method")), ue) : (dt = M(mt, at.iterator, Pe.arg), dt.type === "throw" ? (Pe.method = "throw", Pe.arg = dt.arg, Pe.delegate = null, ue) : (mt = dt.arg, mt ? mt.done ? (Pe[at.resultName] = mt.value, Pe.next = at.nextLoc, Pe.method !== "return" && (Pe.method = "next", Pe.arg = c), Pe.delegate = null, ue) : mt : (Pe.method = "throw", Pe.arg = new TypeError("iterator result is not an object"), Pe.delegate = null, ue)));
        })(He, ae), He)) {
          if (He === ue) continue;
          return He;
        }
        if (ae.method === "next") ae.sent = ae._sent = ae.arg;
        else if (ae.method === "throw") {
          if (Le === U) throw Le = re, ae.arg;
          ae.dispatchException(ae.arg);
        } else ae.method === "return" && ae.abrupt("return", ae.arg);
        if (Le = H, He = M(je, ke, ae), He.type === "normal") {
          if (Le = ae.done ? re : V, He.arg === ue) continue;
          return { value: He.arg, done: ae.done };
        }
        He.type === "throw" && (Le = re, ae.method = "throw", ae.arg = He.arg);
      }
    }) }), Se;
  }
  function M(A, X, _e) {
    try {
      return { type: "normal", arg: A.call(X, _e) };
    } catch (Qe) {
      return { type: "throw", arg: Qe };
    }
  }
  d.wrap = b;
  var U = "suspendedStart", V = "suspendedYield", H = "executing", re = "completed", ue = {};
  function xe() {
  }
  function be() {
  }
  function ge() {
  }
  var Ee = {}, se = (k(Ee, C, function() {
    return this;
  }), Object.getPrototypeOf), se = se && se(se(ze([]))), ie = (se && se !== p && _.call(se, C) && (Ee = se), ge.prototype = xe.prototype = Object.create(Ee));
  function ne(A) {
    ["next", "throw", "return"].forEach(function(X) {
      k(A, X, function(_e) {
        return this._invoke(X, _e);
      });
    });
  }
  function Ce(A, X) {
    var _e;
    x(this, "_invoke", { value: function(Qe, je) {
      function ke() {
        return new X(function(ae, Le) {
          (function Se(at, J, et, He) {
            var ht, at = M(A[at], A, J);
            if (at.type !== "throw") return (J = (ht = at.arg).value) && typeof J == "object" && _.call(J, "__await") ? X.resolve(J.__await).then(function(Pe) {
              Se("next", Pe, et, He);
            }, function(Pe) {
              Se("throw", Pe, et, He);
            }) : X.resolve(J).then(function(Pe) {
              ht.value = Pe, et(ht);
            }, function(Pe) {
              return Se("throw", Pe, et, He);
            });
            He(at.arg);
          })(Qe, je, ae, Le);
        });
      }
      return _e = _e ? _e.then(ke, ke) : ke();
    } });
  }
  function Te(A) {
    var X = { tryLoc: A[0] };
    1 in A && (X.catchLoc = A[1]), 2 in A && (X.finallyLoc = A[2], X.afterLoc = A[3]), this.tryEntries.push(X);
  }
  function qe(A) {
    var X = A.completion || {};
    X.type = "normal", delete X.arg, A.completion = X;
  }
  function le(A) {
    this.tryEntries = [{ tryLoc: "root" }], A.forEach(Te, this), this.reset(!0);
  }
  function ze(A) {
    if (A || A === "") {
      var X, _e = A[C];
      if (_e) return _e.call(A);
      if (typeof A.next == "function") return A;
      if (!isNaN(A.length)) return X = -1, (_e = function Qe() {
        for (; ++X < A.length; ) if (_.call(A, X)) return Qe.value = A[X], Qe.done = !1, Qe;
        return Qe.value = c, Qe.done = !0, Qe;
      }).next = _e;
    }
    throw new TypeError(typeof A + " is not iterable");
  }
  return x(ie, "constructor", { value: be.prototype = ge, configurable: !0 }), x(ge, "constructor", { value: be, configurable: !0 }), be.displayName = k(ge, w, "GeneratorFunction"), d.isGeneratorFunction = function(A) {
    return A = typeof A == "function" && A.constructor, !!A && (A === be || (A.displayName || A.name) === "GeneratorFunction");
  }, d.mark = function(A) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(A, ge) : (A.__proto__ = ge, k(A, w, "GeneratorFunction")), A.prototype = Object.create(ie), A;
  }, d.awrap = function(A) {
    return { __await: A };
  }, ne(Ce.prototype), k(Ce.prototype, h, function() {
    return this;
  }), d.AsyncIterator = Ce, d.async = function(A, X, _e, Qe, je) {
    je === void 0 && (je = Promise);
    var ke = new Ce(b(A, X, _e, Qe), je);
    return d.isGeneratorFunction(X) ? ke : ke.next().then(function(ae) {
      return ae.done ? ae.value : ke.next();
    });
  }, ne(ie), k(ie, w, "Generator"), k(ie, C, function() {
    return this;
  }), k(ie, "toString", function() {
    return "[object Generator]";
  }), d.keys = function(A) {
    var X, _e = Object(A), Qe = [];
    for (X in _e) Qe.push(X);
    return Qe.reverse(), function je() {
      for (; Qe.length; ) {
        var ke = Qe.pop();
        if (ke in _e) return je.value = ke, je.done = !1, je;
      }
      return je.done = !0, je;
    };
  }, d.values = ze, le.prototype = { constructor: le, reset: function(A) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = c, this.done = !1, this.delegate = null, this.method = "next", this.arg = c, this.tryEntries.forEach(qe), !A) for (var X in this) X.charAt(0) === "t" && _.call(this, X) && !isNaN(+X.slice(1)) && (this[X] = c);
  }, stop: function() {
    this.done = !0;
    var A = this.tryEntries[0].completion;
    if (A.type === "throw") throw A.arg;
    return this.rval;
  }, dispatchException: function(A) {
    if (this.done) throw A;
    var X = this;
    function _e(Se, F) {
      return ke.type = "throw", ke.arg = A, X.next = Se, F && (X.method = "next", X.arg = c), !!F;
    }
    for (var Qe = this.tryEntries.length - 1; 0 <= Qe; --Qe) {
      var je = this.tryEntries[Qe], ke = je.completion;
      if (je.tryLoc === "root") return _e("end");
      if (je.tryLoc <= this.prev) {
        var ae = _.call(je, "catchLoc"), Le = _.call(je, "finallyLoc");
        if (ae && Le) {
          if (this.prev < je.catchLoc) return _e(je.catchLoc, !0);
          if (this.prev < je.finallyLoc) return _e(je.finallyLoc);
        } else if (ae) {
          if (this.prev < je.catchLoc) return _e(je.catchLoc, !0);
        } else {
          if (!Le) throw Error("try statement without catch or finally");
          if (this.prev < je.finallyLoc) return _e(je.finallyLoc);
        }
      }
    }
  }, abrupt: function(A, X) {
    for (var _e = this.tryEntries.length - 1; 0 <= _e; --_e) {
      var Qe = this.tryEntries[_e];
      if (Qe.tryLoc <= this.prev && _.call(Qe, "finallyLoc") && this.prev < Qe.finallyLoc) {
        var je = Qe;
        break;
      }
    }
    var ke = (je = je && (A === "break" || A === "continue") && je.tryLoc <= X && X <= je.finallyLoc ? null : je) ? je.completion : {};
    return ke.type = A, ke.arg = X, je ? (this.method = "next", this.next = je.finallyLoc, ue) : this.complete(ke);
  }, complete: function(A, X) {
    if (A.type === "throw") throw A.arg;
    return A.type === "break" || A.type === "continue" ? this.next = A.arg : A.type === "return" ? (this.rval = this.arg = A.arg, this.method = "return", this.next = "end") : A.type === "normal" && X && (this.next = X), ue;
  }, finish: function(A) {
    for (var X = this.tryEntries.length - 1; 0 <= X; --X) {
      var _e = this.tryEntries[X];
      if (_e.finallyLoc === A) return this.complete(_e.completion, _e.afterLoc), qe(_e), ue;
    }
  }, catch: function(A) {
    for (var X = this.tryEntries.length - 1; 0 <= X; --X) {
      var _e, Qe, je = this.tryEntries[X];
      if (je.tryLoc === A) return (_e = je.completion).type === "throw" && (Qe = _e.arg, qe(je)), Qe;
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(A, X, _e) {
    return this.delegate = { iterator: ze(A), resultName: X, nextLoc: _e }, this.method === "next" && (this.arg = c), ue;
  } }, d;
}
function GE(c, d) {
  return (GE = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(p, _) {
    return p.__proto__ = _, p;
  })(c, d);
}
function TE(c, d) {
  return y7(c) || E7(c, d) || QE(c, d) || x7();
}
function Ly(c) {
  return g7(c) || C7(c) || QE(c) || w7();
}
function k7(c, d) {
  if (typeof c != "object" || !c) return c;
  var p = c[Symbol.toPrimitive];
  if (p === void 0) return (d === "string" ? String : Number)(c);
  if (p = p.call(c, d), typeof p != "object") return p;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
function Ny(c) {
  return c = k7(c, "string"), typeof c == "symbol" ? c : c + "";
}
function Jr(c) {
  return (Jr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(d) {
    return typeof d;
  } : function(d) {
    return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
  })(c);
}
function QE(c, d) {
  var p;
  if (c) return typeof c == "string" ? o_(c, d) : (p = (p = {}.toString.call(c).slice(8, -1)) === "Object" && c.constructor ? c.constructor.name : p) === "Map" || p === "Set" ? Array.from(c) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? o_(c, d) : void 0;
}
var KE = { react: { componentWrap: "div", slotWrap: "div", componentWrapAttrs: { __use_react_component_wrap: "", style: { all: "unset" } }, slotWrapAttrs: { __use_react_slot_wrap: "", style: { all: "unset" } }, vueNamedSlotsKey: ["node:"] }, vue: { componentWrapHOC: function(c) {
  return function() {
    var d = (0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}).portals;
    return Me.createElement(Me.Fragment, null, c, (d === void 0 ? [] : d).map(function(p) {
      var _ = p.Portal;
      return Me.createElement(_, { key: p.key });
    }));
  };
}, componentWrapAttrs: { "data-use-vue-component-wrap": "", style: { all: "unset" } }, slotWrapAttrs: { "data-use-vue-slot-wrap": "", style: { all: "unset" } } } };
function XE() {
  var c = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : { react: {}, vue: {} }, p = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : KE, d = 2 < arguments.length ? arguments[2] : void 0, p = (c.vue || (c.vue = {}), c.react || (c.react = {}), [p, de(de({}, c), {}, { react: de(de(de({}, p.react), c.react), {}, { componentWrapAttrs: de(de({}, p.react.componentWrapAttrs), c.react.componentWrapAttrs), slotWrapAttrs: de(de({}, p.react.slotWrapAttrs), c.react.slotWrapAttrs) }), vue: de(de(de({}, p.vue), c.vue), {}, { componentWrapAttrs: de(de({}, p.vue.componentWrapAttrs), c.vue.componentWrapAttrs), slotWrapAttrs: de(de({}, p.vue.slotWrapAttrs), c.vue.slotWrapAttrs) }) })]);
  return d && p.unshift({}), Object.assign.apply(this, p);
}
var JE = ["getElementById", "getElementsByClassName", "getElementsByTagName", "getElementsByTagNameNS", "querySelector", "querySelectorAll"], vd = { Document: {}, Element: {} };
function T7(c) {
  Object.keys(vd).forEach(function(d) {
    JE.forEach(function(p) {
      var _ = vd[d][p] || window[d].prototype[p];
      _ && (vd[d][p] = _, window[d].prototype[p] = function() {
        for (var x = arguments.length, C = new Array(x), h = 0; h < x; h++) C[h] = arguments[h];
        var w = _.apply(this, C);
        return w && (w.constructor !== NodeList || w.constructor === NodeList && 0 < w.length) ? w : ((w = p) === "getElementById" && (w = "querySelector", C = ["#" + C[0]]), (vd.Element[w] || Element.prototype[w]).apply(c, C));
      });
    });
  });
}
function N7() {
  Object.keys(vd).forEach(function(c) {
    JE.forEach(function(d) {
      window[c].prototype[d] = vd[c][d];
    });
  });
}
var D7 = ["ref"], M7 = ["key"], L7 = ["hashList"], n_ = parseInt(h_.version);
var O7 = (() => {
  function c(d) {
    return Tv(this, c), Dy(this, c, [d]);
  }
  return My(c, Me.Component), Nv(c, [{ key: "render", value: function() {
    var d = this.props.component, p = this.props.passedProps, p = (p.ref, Xo(p, D7));
    return Me.createElement(d, p, this.props.children);
  } }]);
})(), j7 = function(c, d, p) {
  var _ = (() => {
    function x(C) {
      var h;
      return Tv(this, x), (h = Dy(this, x, [C])).state = de(de({}, C), d.isSlots ? { children: c } : {}), h.setRef = h.setRef.bind(h), h.vueInReactCall = h.vueInReactCall.bind(h), (h.__veauryVueWrapperRef__ = p).__veauryVueInReactCall__ = h.vueInReactCall, h;
    }
    return My(x, Me.Component), Nv(x, [{ key: "reactPropsLinkToVueInstance", value: function(C) {
      Object.keys(C).forEach(function(h) {
        p[h] || (p[h] = C[h]);
      }), Object.getOwnPropertyNames(C.__proto__).filter(function(h) {
        return ["constructor", "render"].indexOf(h) < 0;
      }).forEach(function(h) {
        p[h] || (p[h] = C[h]);
      });
    } }, { key: "setRef", value: function(C) {
      var h = this;
      C && (p.__veauryReactRef__ = C, this.reactPropsLinkToVueInstance(C), Promise.resolve().then(function() {
        return h.reactPropsLinkToVueInstance(C);
      }), (this.setRef.current = C).__veauryVueWrapperRef__ = p);
    } }, { key: "createSlot", value: function(C) {
      return { originVNode: C, inheritAttrs: !1, __fromReactSlot: !0, render: function() {
        var h, w;
        return ((h = C = (C = ((w = this.$slots) == null || (h = w.default) == null ? void 0 : h.call(w)) || C) instanceof Function ? C(this) : C) == null ? void 0 : h.length) === 1 && (w = C[0]) != null && w.data && ((h = this.$attrs).key, w = Xo(h, M7), C[0].props = de(de({}, w), C[0].props)), C;
      } };
    } }, { key: "componentWillUnmount", value: function() {
      p.__veauryReactRef__ && (p.__veauryReactRef__.__veauryVueWrapperRef__ = null, p.__veauryReactRef__ = null);
    } }, { key: "vueInReactCall", value: function(C) {
      var h = this, w = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
      return 2 < arguments.length && arguments[2] && C && C[0] ? C.map(function(k, b) {
        return ky(h.createSlot(k instanceof Function ? k : [k]), de(de(de({}, d), w), {}, { isSlots: !0, wrapInstance: p })).render({ key: k?.key || void 0 });
      }) : ky(this.createSlot(C), de(de(de({}, d), w), {}, { isSlots: !0, wrapInstance: p })).render();
    } }, { key: "render", value: function() {
      var C, h, w, k = this, ue = this.state, b = ue.hashList, M = Xo(ue, L7), U = {}, V = {};
      for (C in M) h = C, w = void 0, M.hasOwnProperty(h) && M[h] != null && (M[h].__slot ? (M[h].reactSlot ? M[h] = M[h].reactSlot : (w = M[h], d.defaultSlotsFormatter && M[h].__trueChildren ? (M[h].__trueChildren.__top__ = k.__veauryVueWrapperRef__, M[h] = d.defaultSlotsFormatter(M[h].__trueChildren, k.vueInReactCall, b), M[h] instanceof Array ? M[h] = Ly(M[h]) : -1 < ["string", "number"].indexOf(Jr(M[h])) ? M[h] = [M[h]] : Jr(M[h]) === "object" && (M[h] = de({}, M[h]))) : M[h] = de({}, ky(k.createSlot(M[h]), de(de({}, d), {}, { isSlots: !0, wrapInstance: p })).render()), M[h].vueFunction = w), U[h] = M[h]) : M[h].__scopedSlot && (M[h] = M[h](k.createSlot), V[h] = M[h]));
      var H, re, ue = {};
      return ue.ref = this.setRef, d.isSlots ? this.state.children || this.props.children : (H = M, c.__syncUpdateForPureReactInVue && Object.keys(c.__syncUpdateForPureReactInVue).map(function(xe) {
        var be, ge;
        H[xe] && typeof H[xe] == "function" && (be = k.__veauryVueWrapperRef__, ge = H[xe], H[xe] = function() {
          for (var Ee = arguments.length, se = new Array(Ee), ie = 0; ie < Ee; ie++) se[ie] = arguments[ie];
          be.__veaurySyncUpdateProps__(c.__syncUpdateForPureReactInVue[xe].apply(this, se)), ge.apply(this, se), be.macroTaskUpdate = !0, be.__veauryMountReactComponent__(!0, !0, {});
        });
      }), re = de(de(de({}, H = d.defaultPropsFormatter ? d.defaultPropsFormatter.call(this, H, this.vueInReactCall, b) : H), U), V), Object.getPrototypeOf(c) !== Function.prototype && (Jr(c) !== "object" || c.render) || x.catchVueRefs() ? (Object.getPrototypeOf(c) === Function.prototype && delete ue.ref, Me.createElement(c, bc({}, re, ue))) : Me.createElement(O7, bc({ passedProps: re, component: c }, ue), re.children));
    } }], [{ key: "catchVueRefs", value: function() {
      if (p.$parent) {
        for (var C in p.$parent.$refs) if (p.$parent.$refs[C] === p) return !0;
      }
      return !1;
    } }]);
  })();
  return hd(_, "displayName", "applyReact_".concat(c.displayName || c.name || "Component")), _;
};
function m_(c) {
  var d = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
  return c.__esModule && c.default && (c = c.default), d.isSlots && (c = c()), d = XE(d, void 0, !0), { originReactComponent: c, setup: function(p, _) {
    var x, C, h, w;
    if (!d.isSlots) return x = {}, C = qT({}), h = WT(), typeof (w = d.useInjectPropsFromWrapper || c.__veauryInjectPropsFromWrapper__) == "function" && (typeof (w = w.call(h.proxy, p)) != "function" ? (Object.assign(C, w), x.__veauryInjectedProps__ = C) : h.proxy.__veauryInjectedComputed__ = w), x;
  }, data: function() {
    return { VEAURY_Portals: [] };
  }, created: function() {
    this.__veauryPortalKeyPool__ = [], this.__veauryMaxPortalCount__ = 0;
  }, computed: { __veauryInjectedProps__: function() {
    var p;
    return (p = this.__veauryInjectedComputed__) == null ? void 0 : p.call(this);
  } }, render: function() {
    var p = su(d.react.componentWrap, de({ ref: "react" }, d.react.componentWrapAttrs || {}), this.VEAURY_Portals.map(function(_) {
      return (0, _.Portal)(su, _.key);
    }));
    return this.__veauryCheckReactSlot__(this.$slots), p;
  }, methods: { __veauryCheckReactSlot__: function(p) {
    var _ = this;
    function x(C, h, w) {
      return h[w] && (C[w] = h[w], 1);
    }
    Jr(p) === "object" && p != null && (p instanceof Array ? p.forEach(function(C) {
      _.__veauryCheckReactSlot__(C.children);
    }) : Object.keys(p).forEach(function(k) {
      var h, w, k = p[k];
      if (typeof k == "function") {
        try {
          h = k.apply(_, k.__reactArgs || [{}]);
        } catch {
          return;
        }
        (k.__trueChildren = h).forEach(function(b) {
          b.children && _.__veauryCheckReactSlot__(b.children);
        }), h.length !== 1 || x(k, h = h[0], "reactSlot") || x(k, h, "reactFunction") || h.type !== PE || ((w = h.children) == null ? void 0 : w.length) !== 1 || x(k, w = h.children[0], "reactSlot") || x(k, w, "reactFunction");
      }
    }));
  }, __veauryPushVuePortal__: function(p) {
    var _ = this.__veauryPortalKeyPool__.shift() || this.__veauryMaxPortalCount__++;
    this.VEAURY_Portals.push({ Portal: p, key: _ });
  }, __veauryRemoveVuePortal__: function(p) {
    var _, x = this.VEAURY_Portals.find(function(C, h) {
      if (C.Portal === p) return _ = h, !0;
    });
    this.__veauryPortalKeyPool__.push(x.key), this.VEAURY_Portals.splice(_, 1);
  }, __veauryGetScopeSlot__: function(p, _, x) {
    var C = this;
    function h(w) {
      function k() {
        for (var b, M = this, U = arguments.length, V = new Array(U), H = 0; H < U; H++) V[H] = arguments[H];
        return p.reactFunction ? p.reactFunction.apply(this, V) : d.defaultSlotsFormatter ? ((b = p.apply(this, V)).__top__ = C, (b = d.defaultSlotsFormatter(b, C.__veauryVueInReactCall__, _)) instanceof Array || -1 < Jr(b).indexOf("string", "number") ? b = Ly(b) : Jr(b) === "object" && (b = de({}, b)), b) : ky(w(function() {
          return p.apply(M, V);
        }), de(de({}, d), {}, { isSlots: !0, wrapInstance: C })).render();
      }
      return d.pureTransformer && x ? k.vueFunction = x : k.vueFunction = p, k;
    }
    return h.__scopedSlot = !0, h;
  }, __veaurySyncUpdateProps__: function(p) {
    this.__veauryReactInstance__ && this.__veauryReactInstance__.setState(p);
  }, __veauryMountReactComponent__: function(p, _) {
    var x = arguments, C = this;
    return S7(pd().mark(function h() {
      var w, k, b, M, U, V, H, re, ue, xe, be, ge, Ee, se, ie, ne, Ce;
      return pd().wrap(function(Te) {
        for (; ; ) switch (Te.prev = Te.next) {
          case 0:
            if (w = 2 < x.length && x[2] !== void 0 ? x[2] : {}, k = {}, b = [], (re = C.$.vnode.scopeId) && (k[re] = "", b.push(re)), M = {}, U = {}, p && (_ == null || !_.slot)) {
              Te.next = 18;
              break;
            }
            H = pd().mark(function qe(le) {
              var ze;
              return pd().wrap(function(A) {
                for (; ; ) switch (A.prev = A.next) {
                  case 0:
                    if (C.$slots.hasOwnProperty(le) && C.$slots[le] != null) {
                      A.next = 2;
                      break;
                    }
                    return A.abrupt("return", 0);
                  case 2:
                    if ((ze = d.react.vueNamedSlotsKey.find(function(X) {
                      return le.indexOf(X) === 0;
                    })) || le === "default") return ze = le.replace(new RegExp("^".concat(ze)), ""), M[ze] = C.$slots[le], M[ze].__slot = !0, A.abrupt("return", 0);
                    A.next = 8;
                    break;
                  case 8:
                    U[le] = C.__veauryGetScopeSlot__(C.$slots[le], b, (ze = C.$.vnode) == null || (ze = ze.children) == null ? void 0 : ze[le]);
                  case 9:
                  case "end":
                    return A.stop();
                }
              }, qe);
            }), Te.t0 = pd().keys(C.$slots || {});
          case 10:
            if ((Te.t1 = Te.t0()).done) {
              Te.next = 18;
              break;
            }
            return re = Te.t1.value, Te.delegateYield(H(re), "t2", 13);
          case 13:
            if (Te.t2 === 0) return Te.abrupt("continue", 10);
            Te.next = 16;
            break;
          case 16:
            Te.next = 10;
            break;
          case 18:
            if ((!p || _ != null && _.slot) && (ue = de({}, M), V = ue.default, delete ue.default), C.__veauryLast__ = C.__veauryLast__ || {}, C.__veauryLast__.slot = C.__veauryLast__.slot || {}, C.__veauryLast__.attrs = C.__veauryLast__.attrs || {}, xe = { slot: function() {
              C.__veauryLast__.slot = de(de(de({}, V ? { children: V } : { children: null }), ue), U);
            }, attrs: function() {
              C.__veauryLast__.attrs = C.$attrs;
            } }, _ && Object.keys(_).forEach(function(qe) {
              return xe[qe]();
            }), p) {
              Te.next = 64;
              break;
            }
            if (C.__reactBoundedPromise__ = new Promise(function(qe) {
              be = qe;
            }), C.__reactBoundedPromise__.resolve = be, xe.slot(), xe.attrs(), se = j7(c, d, C), ge = Me.createElement(se, bc({}, C.$attrs, C.__veauryInjectedProps__, { children: V }, ue, U, C.$attrs.class ? { className: C.$attrs.class } : {}, k, { hashList: b }, C.$attrs.style ? { style: C.$attrs.style } : {}, { ref: function(qe) {
              C.__veauryReactInstance__ = qe, C.__reactBoundedPromise__.resolve(!0);
            } })), Ee = C.$refs.react, se = d.wrapInstance) {
              Te.next = 47;
              break;
            }
            ie = C.$parent;
          case 35:
            if (ie) {
              if (ie.parentReactWrapperRef) return se = ie.parentReactWrapperRef, Te.abrupt("break", 45);
              Te.next = 39;
            } else Te.next = 45;
            break;
          case 39:
            if (ie.reactWrapperRef) return se = ie.reactWrapperRef, Te.abrupt("break", 45);
            Te.next = 42;
            break;
          case 42:
            ie = ie.$parent, Te.next = 35;
            break;
          case 45:
            Te.next = 49;
            break;
          case 47:
            (se = d.wrapInstance).__veauryVueWrapperRef__ = C;
          case 49:
            if (se) return C.parentReactWrapperRef = se, C.reactPortal = function() {
              return h_.createPortal(ge, Ee);
            }, se.pushReactPortal(C.reactPortal), Te.abrupt("return");
            Te.next = 54;
            break;
          case 54:
            if (17 < n_) return xv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED !== void 0 && (xv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = !0), ne = d.react.createRoot || xv.createRoot, 18 < n_ && !ne && console.warn("'react-dom 19' no longer supports dynamically determining whether to use 'render' or 'createRoot'. In order to be compatible with 'react-dom 17' and previous versions, you need to manually configure 'createRoot' in the veaury configuration."), C.__veauryReactApp__ = ne(Ee), C.__veauryReactApp__.render(ge), Te.abrupt("return");
            Te.next = 61;
            break;
          case 61:
            xv.render(ge, Ee), Te.next = 71;
            break;
          case 64:
            return Te.next = 66, C.__reactBoundedPromise__;
          case 66:
            Ce = function() {
              C.__veauryReactInstance__.setState(function(qe) {
                return Object.keys(qe).forEach(function(le) {
                  d.isSlots && le === "children" || delete qe[le];
                }), de(de(de(de({}, C.__veauryCache__), C.__veauryInjectedProps__), !d.isSlots && C.__veauryLast__.slot), C.__veauryLast__.attrs);
              }), C.__veauryCache__ = null;
            }, !C.microTaskUpdate || C.__veauryCache__ || C.$nextTick(function() {
              Ce(), C.microTaskUpdate = !1;
            }), C.macroTaskUpdate && (clearTimeout(C.updateTimer), C.updateTimer = setTimeout(function() {
              clearTimeout(C.updateTimer), Ce(), C.macroTaskUpdate = !1;
            })), C.__veauryCache__ = de(de({}, C.__veauryCache__ || {}), de(de(de(de({}, w), C.$attrs.class ? { className: C.$attrs.class } : {}), de({}, k)), {}, { hashList: b }, C.$attrs.style ? { style: C.$attrs.style } : {})), C.macroTaskUpdate || C.microTaskUpdate || Ce();
          case 71:
          case "end":
            return Te.stop();
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
    clearTimeout(this.updateTimer), T7(this.$refs.react), this.reactPortal ? (p = this.parentReactWrapperRef) != null && p.removeReactPortal(this.reactPortal) : 17 < n_ ? (p = this.__veauryReactApp__) != null && p.unmount() : xv.unmountComponentAtNode(this.$refs.react), N7();
  }, updated: function() {
    this.__VEAURY_IGNORE_STRANGE_UPDATE__ || this.__veauryMountReactComponent__(!0, { slot: !0 });
  }, inheritAttrs: !1, watch: { $attrs: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 }, __veauryInjectedProps__: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 } } };
}
var A7 = /* @__PURE__ */ new Set(["onClick", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onChange", "onInput", "onInvalid", "onReset", "onSubmit", "onError", "onLoad", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onGotPointerCapture", "onLostPointerCapture", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onSelect", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onScroll", "onWheel", "onAbort", "onCanPlay", "onCanPlayThrough", "onDurationChange", "onEmptied", "onEncrypted", "onEnded", "onError", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onPause", "onPlay", "onPlaying", "onProgress", "onRateChange", "onSeeked", "onSeeking", "onStalled", "onSuspend", "onTimeUpdate", "onVolumeChange", "onWaiting", "onLoad", "onError", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionEnd", "onToggle"]);
function U7(c, d) {
  for (var p = (c = d = c?._reactInternals || c?._reactInternalFiber || d) == null ? void 0 : c.return; p; ) {
    var _ = p.stateNode;
    if (_ = _?.parentVueWrapperRef || _?.__veauryVueWrapperRef__) return _;
    p = p.return;
  }
}
function NE(c, d, p) {
  var _ = {};
  return p.forEach(function(x) {
    _[x] = !0;
  }), c[(d === "modelValue" ? "model" : d) + "Modifiers"] = _;
}
function DE(c, d, p) {
  var _ = this, x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : "v-model";
  if (!(d instanceof Array)) throw Error("[error:veaury] Parameter type error from '".concat(x, "', a single v-model is an array, such as [val, setter, argumentKey, modifiers] or [val, setter, modifiers]"));
  if (typeof d[1] != "function") throw Error("[error:veaury] Parameter type error from '".concat(x, "', a single v-model is an array, the second element of the array must be a setter function"));
  var C = d[1], h = (typeof d[2] == "string" ? (p = d[2], d[3] instanceof Array && NE(c, p, d[3])) : d[2] instanceof Array && NE(c, p, d[2]), c["onUpdate:" + p]);
  c["onUpdate:" + p] = typeof h == "function" ? function() {
    for (var w = arguments.length, k = new Array(w), b = 0; b < w; b++) k[b] = arguments[b];
    h.apply(_, k), C.apply(_, k);
  } : C, c[p] = d[0];
}
function l_(c) {
  var d = this, p = {}, _ = de({}, c);
  return Object.keys(c).forEach(function(x) {
    var C, h = x.match(/^onUpdate-([^-]+)/);
    if (h) delete _[x], C = p["onUpdate:".concat(h[1])], p["onUpdate:".concat(h[1])] = typeof C == "function" ? function() {
      for (var k = arguments.length, b = new Array(k), M = 0; M < k; M++) b[M] = arguments[M];
      C.apply(d, b), c[x].apply(d, b);
    } : c[x];
    else if (h = x.match(/^v-model($|:([^:]+)|-([^:]+))/)) h = h[2] || h[3] || "modelValue", DE(p, c[x], h), delete _[x];
    else if (x === "v-models") {
      if (Jr(c[x]) !== "object" || c[x] instanceof Array) throw Error("[error:veaury] The parameter 'v-models' must be an object type, such as {[argumentKey]: singleVModel}");
      var w = c[x];
      Object.keys(w).forEach(function(k) {
        DE(p, w[k], k, "v-models");
      }), delete _[x];
    }
  }), de(de({}, _), p);
}
var Oy = Nv(function c() {
  Tv(this, c), hd(this, "pool", /* @__PURE__ */ new Set());
}, [{ key: "getRandomId", value: function(c) {
  var d = c + (Math.random() + "").substr(2);
  return this.pool.has(d) ? this.getRandomId(c) : (this.pool.add(d), d);
} }]);
function ZE(_, d) {
  var p, _ = _.node;
  if (typeof _ == "function" && (_ = _()), (p = d) != null && p.current || typeof d == "function" || (p = d) != null && p.toString().match(/^function/) || (d = null), -1 < ["string", "number"].indexOf(Jr(_))) return _;
  if (_ instanceof Array) {
    if (_.length !== 1) return _;
    _ = _[0];
  }
  return de(de({}, _), {}, { ref: d });
}
var z7 = m_(ZE);
function u_(c) {
  return su(z7, { node: function() {
    return c.node;
  } });
}
u_.originReactComponent = Me.forwardRef(ZE);
var P7 = ["component", "node"], I7 = ["component", "$slots", "children", "class", "style"], F7 = ["className", "classname"], wc = "veaury-options", ME = new Oy();
function V7(c, d) {
  var p;
  return c = typeof c == "string" && d ? (d = d.$) == null || (d = d.appContext) == null || (d = d.app) == null || (p = d.component) == null ? void 0 : p.call(d, c) : c;
}
function LE(c) {
  if (c) return Object.keys(c).forEach(function(d) {
    var p = c[d];
    p != null && (typeof p == "function" ? (c[d] = p, c[d].reactFunction = p) : (c[d] = function() {
      return p;
    }, c[d].reactSlot = p), p.vueFunction) && (c[d].vueFunction = p.vueFunction);
  }), c;
}
function H7(c) {
  var d;
  return (d = c.node) == null ? void 0 : d.call(c);
}
var s_ = Me.forwardRef(function(x, d) {
  var p, h = x.component, _ = x.node, x = Xo(x, P7);
  if (h == null && _ == null) return null;
  if (_ != null) {
    if (_.$$typeof || typeof _ == "string" || typeof _ == "number") return _;
    typeof _ != "function" && (p = _, _ = function() {
      return p;
    });
  }
  var C, h = h || H7, w = XE(x[wc] || {}, void 0, !0), k = w.useInjectPropsFromWrapper || h.__veauryInjectPropsFromWrapper__;
  return w.isSlots || typeof k == "function" && (C = k(x)), Me.createElement($7, bc({}, de(de(de(de({ component: h }, _ ? { node: _ } : {}), x), C), {}, hd({}, wc, w)), { ref: d }));
}), $7 = (() => {
  function c(d) {
    var p;
    return Tv(this, c), (p = Dy(this, c, [d])).state = { portals: [] }, p.__veauryPortalKeyPool__ = [], p.__veauryMaxPortalCount__ = 0, p.__veauryCurrentVueComponent__ = d.component, p.__veauryCreateVueInstance__ = p.__veauryCreateVueInstance__.bind(p), p.__veauryVueComponentContainer__ = p.createVueComponentContainer(), p;
  }
  return My(c, Me.Component), Nv(c, [{ key: "pushReactPortal", value: function(d) {
    var p = this.state.portals, _ = this.__veauryPortalKeyPool__.shift() || this.__veauryMaxPortalCount__++;
    p.push({ Portal: d, key: _ }), this.setState({ portals: p });
  } }, { key: "removeReactPortal", value: function(d) {
    var p, _ = this.state.portals, x = _.find(function(C, h) {
      if (C.Portal === d) return p = h, !0;
    });
    this.__veauryPortalKeyPool__.push(x.key), _.splice(p, 1), this.__veauryVueRef__ && this.setState({ portals: _ });
  } }, { key: "createVueComponentContainer", value: function() {
    var d = this, p = {}, _ = this.props[wc];
    return _.isSlots ? (Object.keys(this.props).forEach(function(x) {
      A7.has(x) && typeof d.props[x] == "function" && (p[x] = d.props[x]);
    }), _.vue.slotWrapAttrs && (p = de(de({}, p), _.vue.slotWrapAttrs))) : _.vue.componentWrapAttrs && (p = de(de({}, p), _.vue.componentWrapAttrs)), _.vue.componentWrapHOC(Me.createElement("div", bc({}, _.vue.componentWrapAttrs, { ref: this.__veauryCreateVueInstance__, key: null })), p);
  } }, { key: "shouldComponentUpdate", value: function(d, p, _) {
    var x, C, h, w, k = this;
    return d === this.props || (x = d.component, C = (C = d["v-slots"]) === void 0 ? null : C, h = d.children, d = Xo(d, ["component", wc, "v-slots", "children"].map(Ny)), this.__veauryCurrentVueComponent__ !== x && this.updateVueComponent(x), x.__fromReactSlot) || this.__veauryVueInstance__ && (h && (C = C || {}, Jr(h) !== "object" || h instanceof Array || h.$$typeof ? C.default = h : C = h), (w = this.__veauryVueInstance__.$data.$slots) && Object.keys(w).forEach(function(b) {
      delete w[b];
    }), C && (w || (this.__veauryVueInstance__.$data.$slots = {}), Object.assign(this.__veauryVueInstance__.$data.$slots, LE(C))), Object.keys(this.__veauryVueInstance__.$data).forEach(function(b) {
      b !== "$slots" && delete k.__veauryVueInstance__.$data[b];
    }), this.__veauryVueInstance__) && Object.assign(this.__veauryVueInstance__.$data, l_(d)), !0;
  } }, { key: "componentWillUnmount", value: function() {
    this.vuePortal ? this.parentVueWrapperRef.__veauryRemoveVuePortal__(this.vuePortal) : (this.__veauryVueInstance__ && this.__veauryVueInstance__.$.appContext.app.unmount(), ME.pool.delete(this.__veauryVueTargetId__), this.vueCreated = !1);
  } }, { key: "componentDidMount", value: function() {
    this.__veauryCreateVueInstance__(this.vueContainerElement);
  } }, { key: "__veauryCreateVueInstance__", value: function(d) {
    var p, _, x, C, h, w, k, b, M = this;
    function U(V) {
      this.__veauryVueInstance__ || (this.__veauryVueInstance__ = V);
    }
    this.vueCreated || (this.vueCreated = !0, (p = this).vueContainerElement = d, (x = this.props).component, _ = x[wc], k = x.children, b = (b = x["v-slots"]) === void 0 ? {} : b, x = Xo(x, ["component", wc, "children", "v-slots"].map(Ny)), k && (Jr(k) !== "object" || k instanceof Array || k.$$typeof ? b.default = k : b = k), (b = LE(b)) && (x.$slots = b), U = U.bind(this), C = de({}, l_(x)), h = { data: function() {
      return _.isSlots ? { children: p.__veauryCurrentVueComponent__.originVNode } : C;
    }, created: function() {
      this.reactWrapperRef = p, U(this);
    }, methods: { reactInVueCall: function(V) {
      return 2 < arguments.length && arguments[2] && V && V[0] ? V.map(function(H, re) {
        return su(u_, { node: H, key: (H == null || (H = H.data) == null ? void 0 : H.key) || re });
      }) : su(u_, { node: V });
    }, getScopedSlots: function(V, H) {
      var re, ue = this, xe = (this.getScopedSlots.__scopeSlots || (this.getScopedSlots.__scopeSlots = {}), de({}, H));
      for (re in xe) ((be) => {
        var ge, Ee;
        !xe.hasOwnProperty(be) || (ge = xe[be]) == null || (xe[be] = (Ee = ge, function() {
          for (var se, ie, ne, Ce, Te = arguments.length, qe = new Array(Te), le = 0; le < Te; le++) qe[le] = arguments[le];
          return Ee.vueFunction ? Ee.vueFunction.apply(ue, qe) : (ne = Ee.reactFunction, ne = Ee.reactSlot || ne?.apply(ue, qe), Ce = _.defaultSlotsFormatter, (se = ue.getScopedSlots.__scopeSlots[be]) != null && (se = se.component) != null && (se = se.ctx) != null && se.__veauryReactInstance__ ? (ie = ue.getScopedSlots.__scopeSlots[be], Promise.resolve().then(function() {
            var ze;
            (ze = ie) != null && (ze = ze.component) != null && (ze = ze.ctx) != null && (ze = ze.__veauryReactInstance__) != null && ze.setState({ children: Ee.apply(ue, qe) });
          })) : (ie = Ce && ne ? [Ce(ne, ue.reactInVueCall)] : V(m_(function() {
            return Ee.apply(ue, qe);
          }, de(de({}, _), {}, { isSlots: !0, wrapInstance: p }))), ue.getScopedSlots.__scopeSlots[be] = ie), Ee.reactFunction ? ie.reactFunction = Ee.reactFunction : Ee.reactSlot && (ie.reactSlot = Ee.reactSlot), ie);
        }), xe[be].reactFunction = ge);
      })(re);
      return xe;
    } }, mounted: function() {
      d.removeAttribute("id"), p.__veauryVueRef__ = this.$refs.use_vue_wrapper, this.$refs.use_vue_wrapper.reactWrapperRef = p;
    }, beforeUnmount: function() {
      p.__veauryVueRef__ = null, this.$refs.use_vue_wrapper.reactWrapperRef = null;
    }, render: function() {
      var V = this, ge = this.$data, xe = (ge.component, ge.$slots), H = ge.class, re = ge.style, ge = Xo(ge, I7), ue = this.getScopedSlots(su, de({}, xe)), xe = ge.className, be = ge.classname, ge = Xo(ge, F7), Ee = {};
      return Object.keys(ue).forEach(function(se) {
        var ie = ue[se];
        Ee[se] = typeof ie == "function" ? ie : function() {
          return ie;
        };
      }), su(V7(p.__veauryCurrentVueComponent__, this), de(de(de(de({}, ge), H || xe || be ? { class: H || xe || be } : {}), re ? { style: re } : {}), {}, { ref: "use_vue_wrapper" }), de({}, _.isSlots && this.children ? { default: typeof this.children == "function" ? this.children : function() {
        return V.children;
      } } : de({}, Ee)));
    } }, d && (w = ME.getRandomId("__vue_wrapper_container_"), d.id = w, this.__veauryVueTargetId__ = w, (k = _.wrapInstance) ? (k = _.wrapInstance).reactWrapperRef = p : k = U7(this), k && document.getElementById(w) ? (this.parentVueWrapperRef = k, this.vuePortal = function(V, H) {
      return V(YT, { to: "#" + w, key: w }, [V(Object.assign(h, { router: M._router }))]);
    }, k.__veauryPushVuePortal__(this.vuePortal)) : (b = GT(h), typeof _.beforeVueAppMount == "function" && _.beforeVueAppMount(b), this.__veauryVueInstance__ = b.mount(d))));
  } }, { key: "updateVueComponent", value: function(d) {
    this.__veauryVueInstance__ && (d.__fromReactSlot ? this.__veauryVueInstance__.children = typeof d.originVNode == "function" ? d.originVNode : function() {
      return d.originVNode;
    } : (this.__veauryCurrentVueComponent__ = d, this.__veauryVueInstance__.$forceUpdate()));
  } }, { key: "render", value: function() {
    return Me.createElement(this.__veauryVueComponentContainer__, { portals: this.state.portals });
  } }]);
})();
function ky(c) {
  var d = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, p = (c || console.warn("Component must be passed in applyVueInReact!"), c.__esModule && c.default && (c = c.default), Me.forwardRef(function(_, x) {
    return Me.createElement(s_, bc({}, _, { component: c, ref: x }, hd({}, wc, d)));
  }));
  return p.originVueComponent = c, p;
}
new Oy();
function B7(c) {
  var d = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, p = d.globalName, _ = m_(c, d.combinedOption || {});
  return _.install = function(x) {
    var C = (1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}).globalName;
    return p && x.component(C || p, _), _;
  }, _;
}
function OE(c) {
  return c.replace(/-(\w)/g, function(d, p) {
    return p.toUpperCase();
  });
}
function jy(c) {
  var d;
  return c ? typeof c == "string" ? (c = c.trim()).split(/\s*;\s*/).reduce(function(p, _) {
    return _ && (_ = _.split(/\s*:\s*/)).length === 2 && Object.assign(p, hd({}, OE(_[0]), _[1])), p;
  }, {}) : Jr(c) === "object" ? (d = {}, Object.keys(c).forEach(function(p) {
    d[OE(p)] = c[p];
  }), d) : {} : {};
}
function Ay(c) {
  return c ? c instanceof Array ? c : typeof c == "string" ? (c = c.trim()).split(/\s+/) : Jr(c) === "object" ? Object.keys(c).filter(function(d) {
    return !!c[d];
  }) : [] : [];
}
var q7 = ["ref"];
function W7(c, d, p, _, x) {
  var C = c.props || {}, C = (C.ref, Xo(C, q7)), h = {}, w = (Object.keys(c.children || {}).forEach(function(M) {
    var U = c.children[M], V = KE.react.vueNamedSlotsKey.find(function(H) {
      return M.indexOf(H) === 0;
    });
    V || M === "default" ? (V = M.replace(new RegExp("^".concat(V)), "").replace(/^default$/, "children"), h[V] = _.call(c.__top__, U(), p, x)) : typeof U == "function" && (h[M] = function() {
      for (var H = arguments.length, re = new Array(H), ue = 0; ue < H; ue++) re[ue] = arguments[ue];
      return U.__reactArgs = re, _(U.apply(this, re), p, x);
    });
  }), {}), k = jy(C.style), b = Array.from(new Set(Ay(C.class))).join(" ");
  return 0 < Object.keys(k).length && (w.style = k), b !== "" && (w.className = b), Object.assign(C, de(de({}, w), h)), delete C.class, typeof C.ref_for == "boolean" && delete C.ref_for, C;
}
function jE(c) {
  return c.type === KT;
}
new Oy();
function ex(c, d) {
  var p;
  return 0 < ((p = c.dirs) == null ? void 0 : p.length) ? Me.createElement(Y7, { vnode: c }, d) : d;
}
var Y7 = (() => {
  function c(d) {
    var p;
    return Tv(this, c), (p = Dy(this, c, [d])).state = { prevVnode: null, savedDirectives: [], ref: null, prevProps: d }, p;
  }
  return My(c, Me.Component), Nv(c, [{ key: "findDirectiveName", value: function(d) {
    var p = d.dir, _ = -1;
    return [this.state.savedDirectives.find(function(x, C) {
      if (x.dir === p) return _ = C, !0;
    }), _];
  } }, { key: "doDirective", value: function() {
    var d = this, C = this.state, p = C.savedDirectives;
    if (!(_ = C.ref)) {
      for (var _ = (this._reactInternals || this._reactInternalFiber).child; _ && _.tag !== 5; ) _ = _.child;
      if (!_) return;
      _ = _.stateNode;
    }
    var x = this.props.vnode, C = x.dirs;
    C && (C.forEach(function(h) {
      var w, k, b, M, U, V, H;
      h && (H = (w = TE(d.findDirectiveName(h), 2))[0], w = w[1], k = (U = h.dir).created, b = U.beforeMount, M = U.mounted, V = U.beforeUpdate, U = U.updated, H ? (p[w] = de(de(de({}, H), h), {}, { oldValue: H.oldValue }), H = [_, p[w], x, d.state.prevVnode], V?.apply(null, H), U?.apply(null, H), p[w].oldValue = h.value) : (p.push(h), V = [_, h, x, null], k?.apply(null, V), b?.apply(null, V), M?.apply(null, V), h.oldValue = h.value));
    }), this.setState({ prevVnode: de({}, x), savedDirectives: p, ref: _ }));
  } }, { key: "componentDidMount", value: function() {
    this.doDirective();
  } }, { key: "componentDidUpdate", value: function(d) {
    d.vnode !== this.props.vnode && this.doDirective();
  } }, { key: "componentWillUnmount", value: function() {
    var d = this, p = this.props.vnode, h = this.state, _ = h.savedDirectives, x = h.ref, C = h.prevVnode, h = p.dirs;
    h && (h.forEach(function(w) {
      var k, b, M, U;
      w && (k = (U = TE(d.findDirectiveName(w), 2))[0]) && (b = (M = w.dir).beforeUnmount, M = M.unmounted, _[U[1]] = de(de({}, k), w), U = [x, k, p, C], b?.apply(null, U), M != null) && M.apply(null, U);
    }), this.setState({ prevVnode: de({}, p), savedDirectives: _ }));
  } }, { key: "render", value: function() {
    var d = this.props;
    return d.vnode, d.children;
  } }]);
})();
function G7(c, d) {
  var p;
  return typeof c == "function" && (p = c.toString(), c.prototype !== void 0) && c.prototype.constructor === c && (p.slice(0, 5) == "class" || 2 <= Object.getOwnPropertyNames(c.prototype).length || !/^function\s+\(|^function\s+anonymous\(/.test(p) && (!(!d || !/^function\s+[A-Z]/.test(p)) || !!/\b\(this\b|\bthis[\.\[]\b/.test(p) && (!(d && !/classCallCheck\(this/.test(p)) || /^function\sdefault_\d+\s*\(/.test(p))));
}
function tx(c, d) {
  var p, _, x, C;
  return typeof ((x = c.type) == null ? void 0 : x.originReactComponent) != "function" || G7((x = c.type) == null ? void 0 : x.originReactComponent) ? ((x = c.ref) != null && x.k ? (p = (x = c.ref) == null ? void 0 : x.k, _ = (x = c.ref) == null ? void 0 : x.r) : p = (x = c.ref) == null ? void 0 : x.r, p && typeof p == "string" && (C = p, p = function(h) {
    var w;
    (w = c.ref) != null && (w = w.i) != null && w.refs && ((w = de({}, c.ref.i.refs))[C] = h, c.ref.i.refs = w), _ ? _.value = h : c.ref.i.setupState && C in c.ref.i.setupState && (c.ref.i.setupState[C] = h), h && (h.__syncUpdateProps = function() {
      d.__top__ && (c.__extraData = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, d.__top__.__syncUpdateProps({}));
    });
  }, p = new Proxy(p, { get: function(h, w) {
    return h[w];
  }, set: function(h, w, k) {
    var b;
    return (b = c.ref) != null && (b = b.i) != null && b.refs && C in ((b = c.ref) == null || (b = b.i) == null ? void 0 : b.refs) && ((b = de({}, c.ref.i.refs))[w] = k, c.ref.i.refs = b), k;
  } })), p) : null;
}
function c_(c, d) {
  return !d || d instanceof Array && d.length === 0 || (typeof d == "string" && (d = [d]), (c = de({}, c)).props = de({}, c.props), d.forEach(function(p) {
    c.props[p] = "";
  })), c;
}
var Q7 = ["style", "class"];
function AE(c, d, p, _, x, C, h) {
  var w, k, b;
  return d === "all" || d instanceof Array || (d = d ? [d] : []), c.type === PE ? x.call(h, c.children, p, C) : typeof c.type == "string" && (d === "all" || -1 < d.indexOf(c.type)) ? (d = tx(c), b = (k = c.props || {}).style, w = k.class, k = de(de({}, Xo(k, Q7)), {}, { style: jy(b), className: Array.from(new Set(Ay(w))).join(" ") }, d ? { ref: d } : {}), (b = c.children || k.children) && ((b = -1 < ["string", "number"].indexOf(Jr(b)) ? [b] : Ly(b)).__top__ = h), ex(c, c_(Oa.createElement(c.type, k, x.call(h, b, p, C)), c.scopeId))) : p([c], null, _);
}
function K7() {
  var c = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, d = 1 < arguments.length ? arguments[1] : void 0, p = 2 < arguments.length ? arguments[2] : void 0;
  return p.__syncUpdateForPureReactInVue && Object.keys(p.__syncUpdateForPureReactInVue).map(function(_) {
    var x;
    c[_] && typeof c[_] == "function" && d.__top__ && (x = c[_], c[_] = function() {
      for (var C = arguments.length, h = new Array(C), w = 0; w < C; w++) h[w] = arguments[w];
      d.__extraData = p.__syncUpdateForPureReactInVue[_].apply(this, h), d.__top__.__veaurySyncUpdateProps__({}), d.__top__.macroTaskUpdate = !0, x.apply(this, h), d.__top__ && Promise.resolve().then(function() {
        d.__extraData = null, d.__top__.__veauryMountReactComponent__(!0);
      });
    });
  }), c;
}
function UE(c, d, p) {
  return !((c = c instanceof Array && c.length === 1 ? c[0] : c) instanceof Array) && c.key == null && 1 < d.length && ((c = de({}, c)).key = "_key_".concat(p)), c;
}
function nx(_) {
  var d = _.reactComponents, p = _.domTags, _ = _.division, x = _ === void 0 || _;
  return function C(h, w, k) {
    var b;
    return h && h.forEach ? (h.__top__ || (h.__top__ = this), b = [], h.forEach(function(M, U) {
      if (M && M.type !== QT) {
        if ((re = M.type) == null || !re.originReactComponent) return M.$$typeof || typeof M == "string" || typeof M == "number" ? void b.push(M) : jE(M) ? void (M.children.trim() !== "" && b.push(M.children.trim())) : void (M.type && (c_(re = UE(AE(M, p, w, x, C, k, h.__top__), h, U), M.scopeId), b.push(re)));
        var V, H, re = M.type.originReactComponent;
        c_(V = UE(V = (d = d === "all" || d instanceof Array ? d : [d]) === "all" || -1 < d.indexOf(re) ? (M.__top__ = h.__top__, V = W7(M, "_key_".concat(U), w, C, k), H = tx(M, h), M.children && (M.children.__top__ = h.__top__), ex(M, Oa.createElement(re, de(de(de({}, K7(V, M, re)), M.__extraData || {}), H ? { ref: H } : {})))) : jE(M) ? M.text : AE(M, p, w, x, C, k), h, U), M.scopeId), b.push(V);
      }
    }), b.length === 1 ? b[0] : b) : h;
  };
}
var r_ = nx({ reactComponents: "all", domTags: "all" });
function X7(c, d) {
  return B7(c, { combinedOption: de({ pureTransformer: !0, defaultSlotsFormatter: r_, defaultPropsFormatter: function(p, _, x) {
    var C = {};
    return Object.keys(p).forEach(function(h) {
      var w = p[h];
      w && (w.vueFunction ? (C[h] = function() {
        for (var k = arguments.length, b = new Array(k), M = 0; M < k; M++) b[M] = arguments[M];
        return r_(w.vueFunction.apply(this, b), _, x);
      }, Object.defineProperty(C[h], "length", { get: function() {
        return w.vueFunction.length;
      } })) : w.vueSlot && (C[h] = r_(w.vueSlot, _, x)));
    }), Object.assign(p, C);
  } }, d) });
}
nx({ reactComponents: "all", domTags: "all" });
var J7 = ["ref", "children", "v-slots"];
function Z7(k, d, p, _, x) {
  var k = k.props || {}, b = (k.ref, k.children), h = k["v-slots"], C = h === void 0 ? {} : h, h = Xo(k, J7), w = (b && (Jr(b) !== "object" || b instanceof Array || b.$$typeof ? C.default = b : C = b), null), k = (Object.keys(C || {}).forEach(function(U) {
    var V = C[U];
    (w = w || {})[U] = function() {
      if (typeof V == "function") {
        for (var H = arguments.length, re = new Array(H), ue = 0; ue < H; ue++) re[ue] = arguments[ue];
        V = V.apply(this, re);
      }
      return _(V, p, x);
    };
  }), {}), b = jy(h.style), M = Array.from(new Set(Ay(h.className))).join(" ");
  return 0 < Object.keys(b).length && (k.style = b), M !== "" && (k.class = M), Object.assign(h, de({}, k)), delete h.className, { props: h = l_(h), slots: w };
}
function rx(c) {
  var d = c.ref;
  if (d) return Jr(d) === "object" ? function(p) {
    c.ref.current = p;
  } : typeof d == "function" ? d : void 0;
}
var e6 = ["style", "class", "children"];
function zE(c, d, p, _, x, C) {
  var h, w, k, b;
  return d === "all" || d instanceof Array || (d = d ? [d] : []), c.type === Me.Fragment ? x((h = c.props) == null ? void 0 : h.children, p) : typeof c.type == "string" && (d === "all" || -1 < d.indexOf(c.type)) ? (h = rx(c), b = (d = c.props || {}).style, k = d.class, w = d.children, d = Xo(d, e6), k = Array.from(new Set(Ay(k))).join(" "), b = jy(b), d = de(de(de(de({}, d), Object.keys(b).length === 0 ? {} : { style: b }), k ? { className: k } : {}), h ? { ref: h } : {}), Object.keys(d).length === 0 && (d = null), (b = w) && ((b = -1 < ["string", "number"].indexOf(Jr(b)) ? [b] : b instanceof Array ? Ly(b) : de({}, b)).__top__ = C), su(c.type, d, x(b, p))) : p([c], null, _);
}
function ax(_) {
  var d = _.vueComponents, p = _.domTags, _ = _.division, x = _ === void 0 || _;
  return function C(h, w) {
    if (h == null) return h;
    h instanceof Array || (h = [h]);
    var k = [];
    return h.forEach(function(b, M) {
      if (((U = b.type) == null || !U.originVueComponent) && b.type !== s_) return b.__v_isVNode || typeof b == "string" || typeof b == "number" ? void k.push(b) : void (b.type && (U = zE(b, p, w, x, C, h.__top__), k.push(U)));
      var U = b.type.originVueComponent;
      if (b.type === s_) {
        if (!b.props.component) return void k.push(b.props.node);
        U = b.props.component, b = de({}, b);
        var V = de({}, b.props);
        delete V.component, b.props = V;
      }
      U = (d = d === "all" || d instanceof Array ? d : [d]) === "all" || -1 < d.indexOf(U) ? ((b = de({}, b)).__top__ = h.__top__, M = (V = Z7(b, "_key_".concat(M), w, C)).props, V = V.slots, rx(b), b.children && (b.children.__top__ = h.__top__), su(U, de({}, M), V)) : zE(b, p, w, x, C), k.push(U);
    }), (k = k.flat(1 / 0)).length === 1 ? k[0] : k;
  };
}
ax({ vueComponents: "all", domTags: "all" });
ax({ reactComponents: "all", domTags: "all" });
new Oy();
const t6 = /* @__PURE__ */ XT({
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
    const d = c, p = JT(() => typeof d.user_id == "string" ? Number(d.user_id) : d.user_id), _ = X7(f7);
    return (x, C) => (e3(), ZT(t3(_), {
      token: c.token,
      dataSource: c.dataSource,
      baseUrl: c.baseUrl,
      user_id: p.value,
      copilot_llm_endpoint: c.copilot_llm_endpoint,
      user_name: c.user_name,
      style: { height: "100%", width: "100%" }
    }, null, 8, ["token", "dataSource", "baseUrl", "user_id", "copilot_llm_endpoint", "user_name"]));
  }
}), i6 = {
  install(c) {
    c.component("CopilotApp", t6);
  }
};
export {
  t6 as CopilotApp,
  i6 as default
};
