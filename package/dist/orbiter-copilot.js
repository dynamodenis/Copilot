import { Fragment as E2, h as nu, reactive as wk, getCurrentInstance as xk, Teleport as kk, createApp as Dk, Comment as Ok, Text as Lk, defineComponent as Nk, createBlock as Mk, openBlock as Ak, unref as Uk } from "vue";
function R2(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
var py = { exports: {} }, pv = {}, vy = { exports: {} }, Lt = {};
var FE;
function jk() {
  if (FE) return Lt;
  FE = 1;
  var p = /* @__PURE__ */ Symbol.for("react.element"), h = /* @__PURE__ */ Symbol.for("react.portal"), m = /* @__PURE__ */ Symbol.for("react.fragment"), E = /* @__PURE__ */ Symbol.for("react.strict_mode"), x = /* @__PURE__ */ Symbol.for("react.profiler"), b = /* @__PURE__ */ Symbol.for("react.provider"), y = /* @__PURE__ */ Symbol.for("react.context"), N = /* @__PURE__ */ Symbol.for("react.forward_ref"), k = /* @__PURE__ */ Symbol.for("react.suspense"), T = /* @__PURE__ */ Symbol.for("react.memo"), z = /* @__PURE__ */ Symbol.for("react.lazy"), H = Symbol.iterator;
  function q(j) {
    return j === null || typeof j != "object" ? null : (j = H && j[H] || j["@@iterator"], typeof j == "function" ? j : null);
  }
  var G = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, pe = Object.assign, ie = {};
  function ce(j, J, Ze) {
    this.props = j, this.context = J, this.refs = ie, this.updater = Ze || G;
  }
  ce.prototype.isReactComponent = {}, ce.prototype.setState = function(j, J) {
    if (typeof j != "object" && typeof j != "function" && j != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, j, J, "setState");
  }, ce.prototype.forceUpdate = function(j) {
    this.updater.enqueueForceUpdate(this, j, "forceUpdate");
  };
  function be() {
  }
  be.prototype = ce.prototype;
  function ge(j, J, Ze) {
    this.props = j, this.context = J, this.refs = ie, this.updater = Ze || G;
  }
  var _e = ge.prototype = new be();
  _e.constructor = ge, pe(_e, ce.prototype), _e.isPureReactComponent = !0;
  var De = Array.isArray, ne = Object.prototype.hasOwnProperty, Be = { current: null }, Oe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Qe(j, J, Ze) {
    var Pe, ht = {}, rt = null, Ae = null;
    if (J != null) for (Pe in J.ref !== void 0 && (Ae = J.ref), J.key !== void 0 && (rt = "" + J.key), J) ne.call(J, Pe) && !Oe.hasOwnProperty(Pe) && (ht[Pe] = J[Pe]);
    var st = arguments.length - 2;
    if (st === 1) ht.children = Ze;
    else if (1 < st) {
      for (var dt = Array(st), Gt = 0; Gt < st; Gt++) dt[Gt] = arguments[Gt + 2];
      ht.children = dt;
    }
    if (j && j.defaultProps) for (Pe in st = j.defaultProps, st) ht[Pe] === void 0 && (ht[Pe] = st[Pe]);
    return { $$typeof: p, type: j, key: rt, ref: Ae, props: ht, _owner: Be.current };
  }
  function Je(j, J) {
    return { $$typeof: p, type: j.type, key: J, ref: j.ref, props: j.props, _owner: j._owner };
  }
  function nt(j) {
    return typeof j == "object" && j !== null && j.$$typeof === p;
  }
  function me(j) {
    var J = { "=": "=0", ":": "=2" };
    return "$" + j.replace(/[=:]/g, function(Ze) {
      return J[Ze];
    });
  }
  var W = /\/+/g;
  function K(j, J) {
    return typeof j == "object" && j !== null && j.key != null ? me("" + j.key) : J.toString(36);
  }
  function Ee(j, J, Ze, Pe, ht) {
    var rt = typeof j;
    (rt === "undefined" || rt === "boolean") && (j = null);
    var Ae = !1;
    if (j === null) Ae = !0;
    else switch (rt) {
      case "string":
      case "number":
        Ae = !0;
        break;
      case "object":
        switch (j.$$typeof) {
          case p:
          case h:
            Ae = !0;
        }
    }
    if (Ae) return Ae = j, ht = ht(Ae), j = Pe === "" ? "." + K(Ae, 0) : Pe, De(ht) ? (Ze = "", j != null && (Ze = j.replace(W, "$&/") + "/"), Ee(ht, J, Ze, "", function(Gt) {
      return Gt;
    })) : ht != null && (nt(ht) && (ht = Je(ht, Ze + (!ht.key || Ae && Ae.key === ht.key ? "" : ("" + ht.key).replace(W, "$&/") + "/") + j)), J.push(ht)), 1;
    if (Ae = 0, Pe = Pe === "" ? "." : Pe + ":", De(j)) for (var st = 0; st < j.length; st++) {
      rt = j[st];
      var dt = Pe + K(rt, st);
      Ae += Ee(rt, J, Ze, dt, ht);
    }
    else if (dt = q(j), typeof dt == "function") for (j = dt.call(j), st = 0; !(rt = j.next()).done; ) rt = rt.value, dt = Pe + K(rt, st++), Ae += Ee(rt, J, Ze, dt, ht);
    else if (rt === "object") throw J = String(j), Error("Objects are not valid as a React child (found: " + (J === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : J) + "). If you meant to render a collection of children, use an array instead.");
    return Ae;
  }
  function He(j, J, Ze) {
    if (j == null) return j;
    var Pe = [], ht = 0;
    return Ee(j, Pe, "", "", function(rt) {
      return J.call(Ze, rt, ht++);
    }), Pe;
  }
  function xe(j) {
    if (j._status === -1) {
      var J = j._result;
      J = J(), J.then(function(Ze) {
        (j._status === 0 || j._status === -1) && (j._status = 1, j._result = Ze);
      }, function(Ze) {
        (j._status === 0 || j._status === -1) && (j._status = 2, j._result = Ze);
      }), j._status === -1 && (j._status = 0, j._result = J);
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var Ce = { current: null }, re = { transition: null }, Me = { ReactCurrentDispatcher: Ce, ReactCurrentBatchConfig: re, ReactCurrentOwner: Be };
  function ye() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Lt.Children = { map: He, forEach: function(j, J, Ze) {
    He(j, function() {
      J.apply(this, arguments);
    }, Ze);
  }, count: function(j) {
    var J = 0;
    return He(j, function() {
      J++;
    }), J;
  }, toArray: function(j) {
    return He(j, function(J) {
      return J;
    }) || [];
  }, only: function(j) {
    if (!nt(j)) throw Error("React.Children.only expected to receive a single React element child.");
    return j;
  } }, Lt.Component = ce, Lt.Fragment = m, Lt.Profiler = x, Lt.PureComponent = ge, Lt.StrictMode = E, Lt.Suspense = k, Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Me, Lt.act = ye, Lt.cloneElement = function(j, J, Ze) {
    if (j == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + j + ".");
    var Pe = pe({}, j.props), ht = j.key, rt = j.ref, Ae = j._owner;
    if (J != null) {
      if (J.ref !== void 0 && (rt = J.ref, Ae = Be.current), J.key !== void 0 && (ht = "" + J.key), j.type && j.type.defaultProps) var st = j.type.defaultProps;
      for (dt in J) ne.call(J, dt) && !Oe.hasOwnProperty(dt) && (Pe[dt] = J[dt] === void 0 && st !== void 0 ? st[dt] : J[dt]);
    }
    var dt = arguments.length - 2;
    if (dt === 1) Pe.children = Ze;
    else if (1 < dt) {
      st = Array(dt);
      for (var Gt = 0; Gt < dt; Gt++) st[Gt] = arguments[Gt + 2];
      Pe.children = st;
    }
    return { $$typeof: p, type: j.type, key: ht, ref: rt, props: Pe, _owner: Ae };
  }, Lt.createContext = function(j) {
    return j = { $$typeof: y, _currentValue: j, _currentValue2: j, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, j.Provider = { $$typeof: b, _context: j }, j.Consumer = j;
  }, Lt.createElement = Qe, Lt.createFactory = function(j) {
    var J = Qe.bind(null, j);
    return J.type = j, J;
  }, Lt.createRef = function() {
    return { current: null };
  }, Lt.forwardRef = function(j) {
    return { $$typeof: N, render: j };
  }, Lt.isValidElement = nt, Lt.lazy = function(j) {
    return { $$typeof: z, _payload: { _status: -1, _result: j }, _init: xe };
  }, Lt.memo = function(j, J) {
    return { $$typeof: T, type: j, compare: J === void 0 ? null : J };
  }, Lt.startTransition = function(j) {
    var J = re.transition;
    re.transition = {};
    try {
      j();
    } finally {
      re.transition = J;
    }
  }, Lt.unstable_act = ye, Lt.useCallback = function(j, J) {
    return Ce.current.useCallback(j, J);
  }, Lt.useContext = function(j) {
    return Ce.current.useContext(j);
  }, Lt.useDebugValue = function() {
  }, Lt.useDeferredValue = function(j) {
    return Ce.current.useDeferredValue(j);
  }, Lt.useEffect = function(j, J) {
    return Ce.current.useEffect(j, J);
  }, Lt.useId = function() {
    return Ce.current.useId();
  }, Lt.useImperativeHandle = function(j, J, Ze) {
    return Ce.current.useImperativeHandle(j, J, Ze);
  }, Lt.useInsertionEffect = function(j, J) {
    return Ce.current.useInsertionEffect(j, J);
  }, Lt.useLayoutEffect = function(j, J) {
    return Ce.current.useLayoutEffect(j, J);
  }, Lt.useMemo = function(j, J) {
    return Ce.current.useMemo(j, J);
  }, Lt.useReducer = function(j, J, Ze) {
    return Ce.current.useReducer(j, J, Ze);
  }, Lt.useRef = function(j) {
    return Ce.current.useRef(j);
  }, Lt.useState = function(j) {
    return Ce.current.useState(j);
  }, Lt.useSyncExternalStore = function(j, J, Ze) {
    return Ce.current.useSyncExternalStore(j, J, Ze);
  }, Lt.useTransition = function() {
    return Ce.current.useTransition();
  }, Lt.version = "18.3.1", Lt;
}
var mv = { exports: {} };
mv.exports;
var VE;
function zk() {
  return VE || (VE = 1, (function(p, h) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var m = "18.3.1", E = /* @__PURE__ */ Symbol.for("react.element"), x = /* @__PURE__ */ Symbol.for("react.portal"), b = /* @__PURE__ */ Symbol.for("react.fragment"), y = /* @__PURE__ */ Symbol.for("react.strict_mode"), N = /* @__PURE__ */ Symbol.for("react.profiler"), k = /* @__PURE__ */ Symbol.for("react.provider"), T = /* @__PURE__ */ Symbol.for("react.context"), z = /* @__PURE__ */ Symbol.for("react.forward_ref"), H = /* @__PURE__ */ Symbol.for("react.suspense"), q = /* @__PURE__ */ Symbol.for("react.suspense_list"), G = /* @__PURE__ */ Symbol.for("react.memo"), pe = /* @__PURE__ */ Symbol.for("react.lazy"), ie = /* @__PURE__ */ Symbol.for("react.offscreen"), ce = Symbol.iterator, be = "@@iterator";
      function ge(S) {
        if (S === null || typeof S != "object")
          return null;
        var D = ce && S[ce] || S[be];
        return typeof D == "function" ? D : null;
      }
      var _e = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, De = {
        transition: null
      }, ne = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Be = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Oe = {}, Qe = null;
      function Je(S) {
        Qe = S;
      }
      Oe.setExtraStackFrame = function(S) {
        Qe = S;
      }, Oe.getCurrentStack = null, Oe.getStackAddendum = function() {
        var S = "";
        Qe && (S += Qe);
        var D = Oe.getCurrentStack;
        return D && (S += D() || ""), S;
      };
      var nt = !1, me = !1, W = !1, K = !1, Ee = !1, He = {
        ReactCurrentDispatcher: _e,
        ReactCurrentBatchConfig: De,
        ReactCurrentOwner: Be
      };
      He.ReactDebugCurrentFrame = Oe, He.ReactCurrentActQueue = ne;
      function xe(S) {
        {
          for (var D = arguments.length, $ = new Array(D > 1 ? D - 1 : 0), X = 1; X < D; X++)
            $[X - 1] = arguments[X];
          re("warn", S, $);
        }
      }
      function Ce(S) {
        {
          for (var D = arguments.length, $ = new Array(D > 1 ? D - 1 : 0), X = 1; X < D; X++)
            $[X - 1] = arguments[X];
          re("error", S, $);
        }
      }
      function re(S, D, $) {
        {
          var X = He.ReactDebugCurrentFrame, Se = X.getStackAddendum();
          Se !== "" && (D += "%s", $ = $.concat([Se]));
          var at = $.map(function(we) {
            return String(we);
          });
          at.unshift("Warning: " + D), Function.prototype.apply.call(console[S], console, at);
        }
      }
      var Me = {};
      function ye(S, D) {
        {
          var $ = S.constructor, X = $ && ($.displayName || $.name) || "ReactClass", Se = X + "." + D;
          if (Me[Se])
            return;
          Ce("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", D, X), Me[Se] = !0;
        }
      }
      var j = {
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
        enqueueForceUpdate: function(S, D, $) {
          ye(S, "forceUpdate");
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
        enqueueReplaceState: function(S, D, $, X) {
          ye(S, "replaceState");
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
        enqueueSetState: function(S, D, $, X) {
          ye(S, "setState");
        }
      }, J = Object.assign, Ze = {};
      Object.freeze(Ze);
      function Pe(S, D, $) {
        this.props = S, this.context = D, this.refs = Ze, this.updater = $ || j;
      }
      Pe.prototype.isReactComponent = {}, Pe.prototype.setState = function(S, D) {
        if (typeof S != "object" && typeof S != "function" && S != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, D, "setState");
      }, Pe.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate");
      };
      {
        var ht = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, rt = function(S, D) {
          Object.defineProperty(Pe.prototype, S, {
            get: function() {
              xe("%s(...) is deprecated in plain JavaScript React classes. %s", D[0], D[1]);
            }
          });
        };
        for (var Ae in ht)
          ht.hasOwnProperty(Ae) && rt(Ae, ht[Ae]);
      }
      function st() {
      }
      st.prototype = Pe.prototype;
      function dt(S, D, $) {
        this.props = S, this.context = D, this.refs = Ze, this.updater = $ || j;
      }
      var Gt = dt.prototype = new st();
      Gt.constructor = dt, J(Gt, Pe.prototype), Gt.isPureReactComponent = !0;
      function An() {
        var S = {
          current: null
        };
        return Object.seal(S), S;
      }
      var Dr = Array.isArray;
      function Tn(S) {
        return Dr(S);
      }
      function or(S) {
        {
          var D = typeof Symbol == "function" && Symbol.toStringTag, $ = D && S[Symbol.toStringTag] || S.constructor.name || "Object";
          return $;
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
          return Ce("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", or(S)), Yn(S);
      }
      function vi(S, D, $) {
        var X = S.displayName;
        if (X)
          return X;
        var Se = D.displayName || D.name || "";
        return Se !== "" ? $ + "(" + Se + ")" : $;
      }
      function pa(S) {
        return S.displayName || "Context";
      }
      function Zn(S) {
        if (S == null)
          return null;
        if (typeof S.tag == "number" && Ce("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
          return S.displayName || S.name || null;
        if (typeof S == "string")
          return S;
        switch (S) {
          case b:
            return "Fragment";
          case x:
            return "Portal";
          case N:
            return "Profiler";
          case y:
            return "StrictMode";
          case H:
            return "Suspense";
          case q:
            return "SuspenseList";
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case T:
              var D = S;
              return pa(D) + ".Consumer";
            case k:
              var $ = S;
              return pa($._context) + ".Provider";
            case z:
              return vi(S, S.render, "ForwardRef");
            case G:
              var X = S.displayName || null;
              return X !== null ? X : Zn(S.type) || "Memo";
            case pe: {
              var Se = S, at = Se._payload, we = Se._init;
              try {
                return Zn(we(at));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var wn = Object.prototype.hasOwnProperty, Qn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Er, qa, Un;
      Un = {};
      function Rr(S) {
        if (wn.call(S, "ref")) {
          var D = Object.getOwnPropertyDescriptor(S, "ref").get;
          if (D && D.isReactWarning)
            return !1;
        }
        return S.ref !== void 0;
      }
      function va(S) {
        if (wn.call(S, "key")) {
          var D = Object.getOwnPropertyDescriptor(S, "key").get;
          if (D && D.isReactWarning)
            return !1;
        }
        return S.key !== void 0;
      }
      function Ka(S, D) {
        var $ = function() {
          Er || (Er = !0, Ce("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        $.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: $,
          configurable: !0
        });
      }
      function hi(S, D) {
        var $ = function() {
          qa || (qa = !0, Ce("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        $.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: $,
          configurable: !0
        });
      }
      function Re(S) {
        if (typeof S.ref == "string" && Be.current && S.__self && Be.current.stateNode !== S.__self) {
          var D = Zn(Be.current.type);
          Un[D] || (Ce('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D, S.ref), Un[D] = !0);
        }
      }
      var qe = function(S, D, $, X, Se, at, we) {
        var lt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: E,
          // Built-in properties that belong on the element
          type: S,
          key: D,
          ref: $,
          props: we,
          // Record the component responsible for creating this element.
          _owner: at
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
          value: X
        }), Object.defineProperty(lt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Se
        }), Object.freeze && (Object.freeze(lt.props), Object.freeze(lt)), lt;
      };
      function Rt(S, D, $) {
        var X, Se = {}, at = null, we = null, lt = null, Dt = null;
        if (D != null) {
          Rr(D) && (we = D.ref, Re(D)), va(D) && (qr(D.key), at = "" + D.key), lt = D.__self === void 0 ? null : D.__self, Dt = D.__source === void 0 ? null : D.__source;
          for (X in D)
            wn.call(D, X) && !Qn.hasOwnProperty(X) && (Se[X] = D[X]);
        }
        var zt = arguments.length - 2;
        if (zt === 1)
          Se.children = $;
        else if (zt > 1) {
          for (var sn = Array(zt), Jt = 0; Jt < zt; Jt++)
            sn[Jt] = arguments[Jt + 2];
          Object.freeze && Object.freeze(sn), Se.children = sn;
        }
        if (S && S.defaultProps) {
          var bt = S.defaultProps;
          for (X in bt)
            Se[X] === void 0 && (Se[X] = bt[X]);
        }
        if (at || we) {
          var Zt = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          at && Ka(Se, Zt), we && hi(Se, Zt);
        }
        return qe(S, at, we, lt, Dt, Be.current, Se);
      }
      function Wt(S, D) {
        var $ = qe(S.type, D, S.ref, S._self, S._source, S._owner, S.props);
        return $;
      }
      function on(S, D, $) {
        if (S == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
        var X, Se = J({}, S.props), at = S.key, we = S.ref, lt = S._self, Dt = S._source, zt = S._owner;
        if (D != null) {
          Rr(D) && (we = D.ref, zt = Be.current), va(D) && (qr(D.key), at = "" + D.key);
          var sn;
          S.type && S.type.defaultProps && (sn = S.type.defaultProps);
          for (X in D)
            wn.call(D, X) && !Qn.hasOwnProperty(X) && (D[X] === void 0 && sn !== void 0 ? Se[X] = sn[X] : Se[X] = D[X]);
        }
        var Jt = arguments.length - 2;
        if (Jt === 1)
          Se.children = $;
        else if (Jt > 1) {
          for (var bt = Array(Jt), Zt = 0; Zt < Jt; Zt++)
            bt[Zt] = arguments[Zt + 2];
          Se.children = bt;
        }
        return qe(S.type, at, we, lt, Dt, zt, Se);
      }
      function yn(S) {
        return typeof S == "object" && S !== null && S.$$typeof === E;
      }
      var fn = ".", er = ":";
      function ln(S) {
        var D = /[=:]/g, $ = {
          "=": "=0",
          ":": "=2"
        }, X = S.replace(D, function(Se) {
          return $[Se];
        });
        return "$" + X;
      }
      var qt = !1, Kt = /\/+/g;
      function ha(S) {
        return S.replace(Kt, "$&/");
      }
      function br(S, D) {
        return typeof S == "object" && S !== null && S.key != null ? (qr(S.key), ln("" + S.key)) : D.toString(36);
      }
      function ka(S, D, $, X, Se) {
        var at = typeof S;
        (at === "undefined" || at === "boolean") && (S = null);
        var we = !1;
        if (S === null)
          we = !0;
        else
          switch (at) {
            case "string":
            case "number":
              we = !0;
              break;
            case "object":
              switch (S.$$typeof) {
                case E:
                case x:
                  we = !0;
              }
          }
        if (we) {
          var lt = S, Dt = Se(lt), zt = X === "" ? fn + br(lt, 0) : X;
          if (Tn(Dt)) {
            var sn = "";
            zt != null && (sn = ha(zt) + "/"), ka(Dt, D, sn, "", function(fd) {
              return fd;
            });
          } else Dt != null && (yn(Dt) && (Dt.key && (!lt || lt.key !== Dt.key) && qr(Dt.key), Dt = Wt(
            Dt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            $ + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Dt.key && (!lt || lt.key !== Dt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ha("" + Dt.key) + "/"
            ) : "") + zt
          )), D.push(Dt));
          return 1;
        }
        var Jt, bt, Zt = 0, gn = X === "" ? fn : X + er;
        if (Tn(S))
          for (var Do = 0; Do < S.length; Do++)
            Jt = S[Do], bt = gn + br(Jt, Do), Zt += ka(Jt, D, $, bt, Se);
        else {
          var is = ge(S);
          if (typeof is == "function") {
            var Gi = S;
            is === Gi.entries && (qt || xe("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), qt = !0);
            for (var os = is.call(Gi), hl, cd = 0; !(hl = os.next()).done; )
              Jt = hl.value, bt = gn + br(Jt, cd++), Zt += ka(Jt, D, $, bt, Se);
          } else if (at === "object") {
            var Cc = String(S);
            throw new Error("Objects are not valid as a React child (found: " + (Cc === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : Cc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Zt;
      }
      function Wi(S, D, $) {
        if (S == null)
          return S;
        var X = [], Se = 0;
        return ka(S, X, "", "", function(at) {
          return D.call($, at, Se++);
        }), X;
      }
      function ol(S) {
        var D = 0;
        return Wi(S, function() {
          D++;
        }), D;
      }
      function ll(S, D, $) {
        Wi(S, function() {
          D.apply(this, arguments);
        }, $);
      }
      function _o(S) {
        return Wi(S, function(D) {
          return D;
        }) || [];
      }
      function Co(S) {
        if (!yn(S))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return S;
      }
      function ul(S) {
        var D = {
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
        D.Provider = {
          $$typeof: k,
          _context: D
        };
        var $ = !1, X = !1, Se = !1;
        {
          var at = {
            $$typeof: T,
            _context: D
          };
          Object.defineProperties(at, {
            Provider: {
              get: function() {
                return X || (X = !0, Ce("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), D.Provider;
              },
              set: function(we) {
                D.Provider = we;
              }
            },
            _currentValue: {
              get: function() {
                return D._currentValue;
              },
              set: function(we) {
                D._currentValue = we;
              }
            },
            _currentValue2: {
              get: function() {
                return D._currentValue2;
              },
              set: function(we) {
                D._currentValue2 = we;
              }
            },
            _threadCount: {
              get: function() {
                return D._threadCount;
              },
              set: function(we) {
                D._threadCount = we;
              }
            },
            Consumer: {
              get: function() {
                return $ || ($ = !0, Ce("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), D.Consumer;
              }
            },
            displayName: {
              get: function() {
                return D.displayName;
              },
              set: function(we) {
                Se || (xe("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", we), Se = !0);
              }
            }
          }), D.Consumer = at;
        }
        return D._currentRenderer = null, D._currentRenderer2 = null, D;
      }
      var Or = -1, Lr = 0, lr = 1, mi = 2;
      function Xa(S) {
        if (S._status === Or) {
          var D = S._result, $ = D();
          if ($.then(function(at) {
            if (S._status === Lr || S._status === Or) {
              var we = S;
              we._status = lr, we._result = at;
            }
          }, function(at) {
            if (S._status === Lr || S._status === Or) {
              var we = S;
              we._status = mi, we._result = at;
            }
          }), S._status === Or) {
            var X = S;
            X._status = Lr, X._result = $;
          }
        }
        if (S._status === lr) {
          var Se = S._result;
          return Se === void 0 && Ce(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Se), "default" in Se || Ce(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Se), Se.default;
        } else
          throw S._result;
      }
      function yi(S) {
        var D = {
          // We use these fields to store the result.
          _status: Or,
          _result: S
        }, $ = {
          $$typeof: pe,
          _payload: D,
          _init: Xa
        };
        {
          var X, Se;
          Object.defineProperties($, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return X;
              },
              set: function(at) {
                Ce("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), X = at, Object.defineProperty($, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Se;
              },
              set: function(at) {
                Ce("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Se = at, Object.defineProperty($, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return $;
      }
      function gi(S) {
        S != null && S.$$typeof === G ? Ce("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof S != "function" ? Ce("forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S) : S.length !== 0 && S.length !== 2 && Ce("forwardRef render functions accept exactly two parameters: props and ref. %s", S.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), S != null && (S.defaultProps != null || S.propTypes != null) && Ce("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var D = {
          $$typeof: z,
          render: S
        };
        {
          var $;
          Object.defineProperty(D, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return $;
            },
            set: function(X) {
              $ = X, !S.name && !S.displayName && (S.displayName = X);
            }
          });
        }
        return D;
      }
      var O;
      O = /* @__PURE__ */ Symbol.for("react.module.reference");
      function oe(S) {
        return !!(typeof S == "string" || typeof S == "function" || S === b || S === N || Ee || S === y || S === H || S === q || K || S === ie || nt || me || W || typeof S == "object" && S !== null && (S.$$typeof === pe || S.$$typeof === G || S.$$typeof === k || S.$$typeof === T || S.$$typeof === z || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        S.$$typeof === O || S.getModuleId !== void 0));
      }
      function ke(S, D) {
        oe(S) || Ce("memo: The first argument must be a component. Instead received: %s", S === null ? "null" : typeof S);
        var $ = {
          $$typeof: G,
          type: S,
          compare: D === void 0 ? null : D
        };
        {
          var X;
          Object.defineProperty($, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return X;
            },
            set: function(Se) {
              X = Se, !S.name && !S.displayName && (S.displayName = Se);
            }
          });
        }
        return $;
      }
      function Ie() {
        var S = _e.current;
        return S === null && Ce(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), S;
      }
      function St(S) {
        var D = Ie();
        if (S._context !== void 0) {
          var $ = S._context;
          $.Consumer === S ? Ce("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : $.Provider === S && Ce("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return D.useContext(S);
      }
      function mt(S) {
        var D = Ie();
        return D.useState(S);
      }
      function kt(S, D, $) {
        var X = Ie();
        return X.useReducer(S, D, $);
      }
      function wt(S) {
        var D = Ie();
        return D.useRef(S);
      }
      function xn(S, D) {
        var $ = Ie();
        return $.useEffect(S, D);
      }
      function un(S, D) {
        var $ = Ie();
        return $.useInsertionEffect(S, D);
      }
      function dn(S, D) {
        var $ = Ie();
        return $.useLayoutEffect(S, D);
      }
      function ur(S, D) {
        var $ = Ie();
        return $.useCallback(S, D);
      }
      function Ja(S, D) {
        var $ = Ie();
        return $.useMemo(S, D);
      }
      function Za(S, D, $) {
        var X = Ie();
        return X.useImperativeHandle(S, D, $);
      }
      function _t(S, D) {
        {
          var $ = Ie();
          return $.useDebugValue(S, D);
        }
      }
      function Et() {
        var S = Ie();
        return S.useTransition();
      }
      function ei(S) {
        var D = Ie();
        return D.useDeferredValue(S);
      }
      function sl() {
        var S = Ie();
        return S.useId();
      }
      function cl(S, D, $) {
        var X = Ie();
        return X.useSyncExternalStore(S, D, $);
      }
      var Eo = 0, au, Ro, Kr, ts, Nr, Sc, _c;
      function iu() {
      }
      iu.__reactDisabledLog = !0;
      function bo() {
        {
          if (Eo === 0) {
            au = console.log, Ro = console.info, Kr = console.warn, ts = console.error, Nr = console.group, Sc = console.groupCollapsed, _c = console.groupEnd;
            var S = {
              configurable: !0,
              enumerable: !0,
              value: iu,
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
              log: J({}, S, {
                value: au
              }),
              info: J({}, S, {
                value: Ro
              }),
              warn: J({}, S, {
                value: Kr
              }),
              error: J({}, S, {
                value: ts
              }),
              group: J({}, S, {
                value: Nr
              }),
              groupCollapsed: J({}, S, {
                value: Sc
              }),
              groupEnd: J({}, S, {
                value: _c
              })
            });
          }
          Eo < 0 && Ce("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ti = He.ReactCurrentDispatcher, ni;
      function ou(S, D, $) {
        {
          if (ni === void 0)
            try {
              throw Error();
            } catch (Se) {
              var X = Se.stack.trim().match(/\n( *(at )?)/);
              ni = X && X[1] || "";
            }
          return `
` + ni + S;
        }
      }
      var fl = !1, To;
      {
        var lu = typeof WeakMap == "function" ? WeakMap : Map;
        To = new lu();
      }
      function uu(S, D) {
        if (!S || fl)
          return "";
        {
          var $ = To.get(S);
          if ($ !== void 0)
            return $;
        }
        var X;
        fl = !0;
        var Se = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var at;
        at = ti.current, ti.current = null, bo();
        try {
          if (D) {
            var we = function() {
              throw Error();
            };
            if (Object.defineProperty(we.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(we, []);
              } catch (gn) {
                X = gn;
              }
              Reflect.construct(S, [], we);
            } else {
              try {
                we.call();
              } catch (gn) {
                X = gn;
              }
              S.call(we.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (gn) {
              X = gn;
            }
            S();
          }
        } catch (gn) {
          if (gn && X && typeof gn.stack == "string") {
            for (var lt = gn.stack.split(`
`), Dt = X.stack.split(`
`), zt = lt.length - 1, sn = Dt.length - 1; zt >= 1 && sn >= 0 && lt[zt] !== Dt[sn]; )
              sn--;
            for (; zt >= 1 && sn >= 0; zt--, sn--)
              if (lt[zt] !== Dt[sn]) {
                if (zt !== 1 || sn !== 1)
                  do
                    if (zt--, sn--, sn < 0 || lt[zt] !== Dt[sn]) {
                      var Jt = `
` + lt[zt].replace(" at new ", " at ");
                      return S.displayName && Jt.includes("<anonymous>") && (Jt = Jt.replace("<anonymous>", S.displayName)), typeof S == "function" && To.set(S, Jt), Jt;
                    }
                  while (zt >= 1 && sn >= 0);
                break;
              }
          }
        } finally {
          fl = !1, ti.current = at, ma(), Error.prepareStackTrace = Se;
        }
        var bt = S ? S.displayName || S.name : "", Zt = bt ? ou(bt) : "";
        return typeof S == "function" && To.set(S, Zt), Zt;
      }
      function Yi(S, D, $) {
        return uu(S, !1);
      }
      function ud(S) {
        var D = S.prototype;
        return !!(D && D.isReactComponent);
      }
      function Qi(S, D, $) {
        if (S == null)
          return "";
        if (typeof S == "function")
          return uu(S, ud(S));
        if (typeof S == "string")
          return ou(S);
        switch (S) {
          case H:
            return ou("Suspense");
          case q:
            return ou("SuspenseList");
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case z:
              return Yi(S.render);
            case G:
              return Qi(S.type, D, $);
            case pe: {
              var X = S, Se = X._payload, at = X._init;
              try {
                return Qi(at(Se), D, $);
              } catch {
              }
            }
          }
        return "";
      }
      var Ft = {}, su = He.ReactDebugCurrentFrame;
      function jt(S) {
        if (S) {
          var D = S._owner, $ = Qi(S.type, S._source, D ? D.type : null);
          su.setExtraStackFrame($);
        } else
          su.setExtraStackFrame(null);
      }
      function ns(S, D, $, X, Se) {
        {
          var at = Function.call.bind(wn);
          for (var we in S)
            if (at(S, we)) {
              var lt = void 0;
              try {
                if (typeof S[we] != "function") {
                  var Dt = Error((X || "React class") + ": " + $ + " type `" + we + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[we] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Dt.name = "Invariant Violation", Dt;
                }
                lt = S[we](D, we, X, $, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (zt) {
                lt = zt;
              }
              lt && !(lt instanceof Error) && (jt(Se), Ce("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", X || "React class", $, we, typeof lt), jt(null)), lt instanceof Error && !(lt.message in Ft) && (Ft[lt.message] = !0, jt(Se), Ce("Failed %s type: %s", $, lt.message), jt(null));
            }
        }
      }
      function Si(S) {
        if (S) {
          var D = S._owner, $ = Qi(S.type, S._source, D ? D.type : null);
          Je($);
        } else
          Je(null);
      }
      var vt;
      vt = !1;
      function cu() {
        if (Be.current) {
          var S = Zn(Be.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
      function sr(S) {
        if (S !== void 0) {
          var D = S.fileName.replace(/^.*[\\\/]/, ""), $ = S.lineNumber;
          return `

Check your code at ` + D + ":" + $ + ".";
        }
        return "";
      }
      function _i(S) {
        return S != null ? sr(S.__source) : "";
      }
      var Mr = {};
      function Ci(S) {
        var D = cu();
        if (!D) {
          var $ = typeof S == "string" ? S : S.displayName || S.name;
          $ && (D = `

Check the top-level render call using <` + $ + ">.");
        }
        return D;
      }
      function pn(S, D) {
        if (!(!S._store || S._store.validated || S.key != null)) {
          S._store.validated = !0;
          var $ = Ci(D);
          if (!Mr[$]) {
            Mr[$] = !0;
            var X = "";
            S && S._owner && S._owner !== Be.current && (X = " It was passed a child from " + Zn(S._owner.type) + "."), Si(S), Ce('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', $, X), Si(null);
          }
        }
      }
      function Xt(S, D) {
        if (typeof S == "object") {
          if (Tn(S))
            for (var $ = 0; $ < S.length; $++) {
              var X = S[$];
              yn(X) && pn(X, D);
            }
          else if (yn(S))
            S._store && (S._store.validated = !0);
          else if (S) {
            var Se = ge(S);
            if (typeof Se == "function" && Se !== S.entries)
              for (var at = Se.call(S), we; !(we = at.next()).done; )
                yn(we.value) && pn(we.value, D);
          }
        }
      }
      function wo(S) {
        {
          var D = S.type;
          if (D == null || typeof D == "string")
            return;
          var $;
          if (typeof D == "function")
            $ = D.propTypes;
          else if (typeof D == "object" && (D.$$typeof === z || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          D.$$typeof === G))
            $ = D.propTypes;
          else
            return;
          if ($) {
            var X = Zn(D);
            ns($, S.props, "prop", X, S);
          } else if (D.PropTypes !== void 0 && !vt) {
            vt = !0;
            var Se = Zn(D);
            Ce("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Se || "Unknown");
          }
          typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && Ce("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Gn(S) {
        {
          for (var D = Object.keys(S.props), $ = 0; $ < D.length; $++) {
            var X = D[$];
            if (X !== "children" && X !== "key") {
              Si(S), Ce("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", X), Si(null);
              break;
            }
          }
          S.ref !== null && (Si(S), Ce("Invalid attribute `ref` supplied to `React.Fragment`."), Si(null));
        }
      }
      function Ar(S, D, $) {
        var X = oe(S);
        if (!X) {
          var Se = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (Se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var at = _i(D);
          at ? Se += at : Se += cu();
          var we;
          S === null ? we = "null" : Tn(S) ? we = "array" : S !== void 0 && S.$$typeof === E ? (we = "<" + (Zn(S.type) || "Unknown") + " />", Se = " Did you accidentally export a JSX literal instead of a component?") : we = typeof S, Ce("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", we, Se);
        }
        var lt = Rt.apply(this, arguments);
        if (lt == null)
          return lt;
        if (X)
          for (var Dt = 2; Dt < arguments.length; Dt++)
            Xt(arguments[Dt], S);
        return S === b ? Gn(lt) : wo(lt), lt;
      }
      var Da = !1;
      function dl(S) {
        var D = Ar.bind(null, S);
        return D.type = S, Da || (Da = !0, xe("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(D, "type", {
          enumerable: !1,
          get: function() {
            return xe("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: S
            }), S;
          }
        }), D;
      }
      function rs(S, D, $) {
        for (var X = on.apply(this, arguments), Se = 2; Se < arguments.length; Se++)
          Xt(arguments[Se], X.type);
        return wo(X), X;
      }
      function as(S, D) {
        var $ = De.transition;
        De.transition = {};
        var X = De.transition;
        De.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          S();
        } finally {
          if (De.transition = $, $ === null && X._updatedFibers) {
            var Se = X._updatedFibers.size;
            Se > 10 && xe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), X._updatedFibers.clear();
          }
        }
      }
      var xo = !1, pl = null;
      function sd(S) {
        if (pl === null)
          try {
            var D = ("require" + Math.random()).slice(0, 7), $ = p && p[D];
            pl = $.call(p, "timers").setImmediate;
          } catch {
            pl = function(Se) {
              xo === !1 && (xo = !0, typeof MessageChannel > "u" && Ce("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var at = new MessageChannel();
              at.port1.onmessage = Se, at.port2.postMessage(void 0);
            };
          }
        return pl(S);
      }
      var Oa = 0, ri = !1;
      function Ei(S) {
        {
          var D = Oa;
          Oa++, ne.current === null && (ne.current = []);
          var $ = ne.isBatchingLegacy, X;
          try {
            if (ne.isBatchingLegacy = !0, X = S(), !$ && ne.didScheduleLegacyUpdate) {
              var Se = ne.current;
              Se !== null && (ne.didScheduleLegacyUpdate = !1, ko(Se));
            }
          } catch (bt) {
            throw La(D), bt;
          } finally {
            ne.isBatchingLegacy = $;
          }
          if (X !== null && typeof X == "object" && typeof X.then == "function") {
            var at = X, we = !1, lt = {
              then: function(bt, Zt) {
                we = !0, at.then(function(gn) {
                  La(D), Oa === 0 ? fu(gn, bt, Zt) : bt(gn);
                }, function(gn) {
                  La(D), Zt(gn);
                });
              }
            };
            return !ri && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              we || (ri = !0, Ce("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), lt;
          } else {
            var Dt = X;
            if (La(D), Oa === 0) {
              var zt = ne.current;
              zt !== null && (ko(zt), ne.current = null);
              var sn = {
                then: function(bt, Zt) {
                  ne.current === null ? (ne.current = [], fu(Dt, bt, Zt)) : bt(Dt);
                }
              };
              return sn;
            } else {
              var Jt = {
                then: function(bt, Zt) {
                  bt(Dt);
                }
              };
              return Jt;
            }
          }
        }
      }
      function La(S) {
        S !== Oa - 1 && Ce("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Oa = S;
      }
      function fu(S, D, $) {
        {
          var X = ne.current;
          if (X !== null)
            try {
              ko(X), sd(function() {
                X.length === 0 ? (ne.current = null, D(S)) : fu(S, D, $);
              });
            } catch (Se) {
              $(Se);
            }
          else
            D(S);
        }
      }
      var du = !1;
      function ko(S) {
        if (!du) {
          du = !0;
          var D = 0;
          try {
            for (; D < S.length; D++) {
              var $ = S[D];
              do
                $ = $(!0);
              while ($ !== null);
            }
            S.length = 0;
          } catch (X) {
            throw S = S.slice(D + 1), X;
          } finally {
            du = !1;
          }
        }
      }
      var vl = Ar, pu = rs, vu = dl, ai = {
        map: Wi,
        forEach: ll,
        count: ol,
        toArray: _o,
        only: Co
      };
      h.Children = ai, h.Component = Pe, h.Fragment = b, h.Profiler = N, h.PureComponent = dt, h.StrictMode = y, h.Suspense = H, h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = He, h.act = Ei, h.cloneElement = pu, h.createContext = ul, h.createElement = vl, h.createFactory = vu, h.createRef = An, h.forwardRef = gi, h.isValidElement = yn, h.lazy = yi, h.memo = ke, h.startTransition = as, h.unstable_act = Ei, h.useCallback = ur, h.useContext = St, h.useDebugValue = _t, h.useDeferredValue = ei, h.useEffect = xn, h.useId = sl, h.useImperativeHandle = Za, h.useInsertionEffect = un, h.useLayoutEffect = dn, h.useMemo = Ja, h.useReducer = kt, h.useRef = wt, h.useState = mt, h.useSyncExternalStore = cl, h.useTransition = Et, h.version = m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(mv, mv.exports)), mv.exports;
}
var HE;
function Sv() {
  return HE || (HE = 1, process.env.NODE_ENV === "production" ? vy.exports = jk() : vy.exports = zk()), vy.exports;
}
var IE;
function Pk() {
  if (IE) return pv;
  IE = 1;
  var p = Sv(), h = /* @__PURE__ */ Symbol.for("react.element"), m = /* @__PURE__ */ Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, x = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(N, k, T) {
    var z, H = {}, q = null, G = null;
    T !== void 0 && (q = "" + T), k.key !== void 0 && (q = "" + k.key), k.ref !== void 0 && (G = k.ref);
    for (z in k) E.call(k, z) && !b.hasOwnProperty(z) && (H[z] = k[z]);
    if (N && N.defaultProps) for (z in k = N.defaultProps, k) H[z] === void 0 && (H[z] = k[z]);
    return { $$typeof: h, type: N, key: q, ref: G, props: H, _owner: x.current };
  }
  return pv.Fragment = m, pv.jsx = y, pv.jsxs = y, pv;
}
var vv = {};
var BE;
function Fk() {
  return BE || (BE = 1, process.env.NODE_ENV !== "production" && (function() {
    var p = Sv(), h = /* @__PURE__ */ Symbol.for("react.element"), m = /* @__PURE__ */ Symbol.for("react.portal"), E = /* @__PURE__ */ Symbol.for("react.fragment"), x = /* @__PURE__ */ Symbol.for("react.strict_mode"), b = /* @__PURE__ */ Symbol.for("react.profiler"), y = /* @__PURE__ */ Symbol.for("react.provider"), N = /* @__PURE__ */ Symbol.for("react.context"), k = /* @__PURE__ */ Symbol.for("react.forward_ref"), T = /* @__PURE__ */ Symbol.for("react.suspense"), z = /* @__PURE__ */ Symbol.for("react.suspense_list"), H = /* @__PURE__ */ Symbol.for("react.memo"), q = /* @__PURE__ */ Symbol.for("react.lazy"), G = /* @__PURE__ */ Symbol.for("react.offscreen"), pe = Symbol.iterator, ie = "@@iterator";
    function ce(O) {
      if (O === null || typeof O != "object")
        return null;
      var oe = pe && O[pe] || O[ie];
      return typeof oe == "function" ? oe : null;
    }
    var be = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ge(O) {
      {
        for (var oe = arguments.length, ke = new Array(oe > 1 ? oe - 1 : 0), Ie = 1; Ie < oe; Ie++)
          ke[Ie - 1] = arguments[Ie];
        _e("error", O, ke);
      }
    }
    function _e(O, oe, ke) {
      {
        var Ie = be.ReactDebugCurrentFrame, St = Ie.getStackAddendum();
        St !== "" && (oe += "%s", ke = ke.concat([St]));
        var mt = ke.map(function(kt) {
          return String(kt);
        });
        mt.unshift("Warning: " + oe), Function.prototype.apply.call(console[O], console, mt);
      }
    }
    var De = !1, ne = !1, Be = !1, Oe = !1, Qe = !1, Je;
    Je = /* @__PURE__ */ Symbol.for("react.module.reference");
    function nt(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === E || O === b || Qe || O === x || O === T || O === z || Oe || O === G || De || ne || Be || typeof O == "object" && O !== null && (O.$$typeof === q || O.$$typeof === H || O.$$typeof === y || O.$$typeof === N || O.$$typeof === k || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === Je || O.getModuleId !== void 0));
    }
    function me(O, oe, ke) {
      var Ie = O.displayName;
      if (Ie)
        return Ie;
      var St = oe.displayName || oe.name || "";
      return St !== "" ? ke + "(" + St + ")" : ke;
    }
    function W(O) {
      return O.displayName || "Context";
    }
    function K(O) {
      if (O == null)
        return null;
      if (typeof O.tag == "number" && ge("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof O == "function")
        return O.displayName || O.name || null;
      if (typeof O == "string")
        return O;
      switch (O) {
        case E:
          return "Fragment";
        case m:
          return "Portal";
        case b:
          return "Profiler";
        case x:
          return "StrictMode";
        case T:
          return "Suspense";
        case z:
          return "SuspenseList";
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case N:
            var oe = O;
            return W(oe) + ".Consumer";
          case y:
            var ke = O;
            return W(ke._context) + ".Provider";
          case k:
            return me(O, O.render, "ForwardRef");
          case H:
            var Ie = O.displayName || null;
            return Ie !== null ? Ie : K(O.type) || "Memo";
          case q: {
            var St = O, mt = St._payload, kt = St._init;
            try {
              return K(kt(mt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ee = Object.assign, He = 0, xe, Ce, re, Me, ye, j, J;
    function Ze() {
    }
    Ze.__reactDisabledLog = !0;
    function Pe() {
      {
        if (He === 0) {
          xe = console.log, Ce = console.info, re = console.warn, Me = console.error, ye = console.group, j = console.groupCollapsed, J = console.groupEnd;
          var O = {
            configurable: !0,
            enumerable: !0,
            value: Ze,
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
        He++;
      }
    }
    function ht() {
      {
        if (He--, He === 0) {
          var O = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ee({}, O, {
              value: xe
            }),
            info: Ee({}, O, {
              value: Ce
            }),
            warn: Ee({}, O, {
              value: re
            }),
            error: Ee({}, O, {
              value: Me
            }),
            group: Ee({}, O, {
              value: ye
            }),
            groupCollapsed: Ee({}, O, {
              value: j
            }),
            groupEnd: Ee({}, O, {
              value: J
            })
          });
        }
        He < 0 && ge("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var rt = be.ReactCurrentDispatcher, Ae;
    function st(O, oe, ke) {
      {
        if (Ae === void 0)
          try {
            throw Error();
          } catch (St) {
            var Ie = St.stack.trim().match(/\n( *(at )?)/);
            Ae = Ie && Ie[1] || "";
          }
        return `
` + Ae + O;
      }
    }
    var dt = !1, Gt;
    {
      var An = typeof WeakMap == "function" ? WeakMap : Map;
      Gt = new An();
    }
    function Dr(O, oe) {
      if (!O || dt)
        return "";
      {
        var ke = Gt.get(O);
        if (ke !== void 0)
          return ke;
      }
      var Ie;
      dt = !0;
      var St = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var mt;
      mt = rt.current, rt.current = null, Pe();
      try {
        if (oe) {
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
              Ie = _t;
            }
            Reflect.construct(O, [], kt);
          } else {
            try {
              kt.call();
            } catch (_t) {
              Ie = _t;
            }
            O.call(kt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_t) {
            Ie = _t;
          }
          O();
        }
      } catch (_t) {
        if (_t && Ie && typeof _t.stack == "string") {
          for (var wt = _t.stack.split(`
`), xn = Ie.stack.split(`
`), un = wt.length - 1, dn = xn.length - 1; un >= 1 && dn >= 0 && wt[un] !== xn[dn]; )
            dn--;
          for (; un >= 1 && dn >= 0; un--, dn--)
            if (wt[un] !== xn[dn]) {
              if (un !== 1 || dn !== 1)
                do
                  if (un--, dn--, dn < 0 || wt[un] !== xn[dn]) {
                    var ur = `
` + wt[un].replace(" at new ", " at ");
                    return O.displayName && ur.includes("<anonymous>") && (ur = ur.replace("<anonymous>", O.displayName)), typeof O == "function" && Gt.set(O, ur), ur;
                  }
                while (un >= 1 && dn >= 0);
              break;
            }
        }
      } finally {
        dt = !1, rt.current = mt, ht(), Error.prepareStackTrace = St;
      }
      var Ja = O ? O.displayName || O.name : "", Za = Ja ? st(Ja) : "";
      return typeof O == "function" && Gt.set(O, Za), Za;
    }
    function Tn(O, oe, ke) {
      return Dr(O, !1);
    }
    function or(O) {
      var oe = O.prototype;
      return !!(oe && oe.isReactComponent);
    }
    function Wn(O, oe, ke) {
      if (O == null)
        return "";
      if (typeof O == "function")
        return Dr(O, or(O));
      if (typeof O == "string")
        return st(O);
      switch (O) {
        case T:
          return st("Suspense");
        case z:
          return st("SuspenseList");
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case k:
            return Tn(O.render);
          case H:
            return Wn(O.type, oe, ke);
          case q: {
            var Ie = O, St = Ie._payload, mt = Ie._init;
            try {
              return Wn(mt(St), oe, ke);
            } catch {
            }
          }
        }
      return "";
    }
    var Yn = Object.prototype.hasOwnProperty, qr = {}, vi = be.ReactDebugCurrentFrame;
    function pa(O) {
      if (O) {
        var oe = O._owner, ke = Wn(O.type, O._source, oe ? oe.type : null);
        vi.setExtraStackFrame(ke);
      } else
        vi.setExtraStackFrame(null);
    }
    function Zn(O, oe, ke, Ie, St) {
      {
        var mt = Function.call.bind(Yn);
        for (var kt in O)
          if (mt(O, kt)) {
            var wt = void 0;
            try {
              if (typeof O[kt] != "function") {
                var xn = Error((Ie || "React class") + ": " + ke + " type `" + kt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[kt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw xn.name = "Invariant Violation", xn;
              }
              wt = O[kt](oe, kt, Ie, ke, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (un) {
              wt = un;
            }
            wt && !(wt instanceof Error) && (pa(St), ge("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ie || "React class", ke, kt, typeof wt), pa(null)), wt instanceof Error && !(wt.message in qr) && (qr[wt.message] = !0, pa(St), ge("Failed %s type: %s", ke, wt.message), pa(null));
          }
      }
    }
    var wn = Array.isArray;
    function Qn(O) {
      return wn(O);
    }
    function Er(O) {
      {
        var oe = typeof Symbol == "function" && Symbol.toStringTag, ke = oe && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return ke;
      }
    }
    function qa(O) {
      try {
        return Un(O), !1;
      } catch {
        return !0;
      }
    }
    function Un(O) {
      return "" + O;
    }
    function Rr(O) {
      if (qa(O))
        return ge("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(O)), Un(O);
    }
    var va = be.ReactCurrentOwner, Ka = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, hi, Re;
    function qe(O) {
      if (Yn.call(O, "ref")) {
        var oe = Object.getOwnPropertyDescriptor(O, "ref").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return O.ref !== void 0;
    }
    function Rt(O) {
      if (Yn.call(O, "key")) {
        var oe = Object.getOwnPropertyDescriptor(O, "key").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return O.key !== void 0;
    }
    function Wt(O, oe) {
      typeof O.ref == "string" && va.current;
    }
    function on(O, oe) {
      {
        var ke = function() {
          hi || (hi = !0, ge("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        ke.isReactWarning = !0, Object.defineProperty(O, "key", {
          get: ke,
          configurable: !0
        });
      }
    }
    function yn(O, oe) {
      {
        var ke = function() {
          Re || (Re = !0, ge("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        ke.isReactWarning = !0, Object.defineProperty(O, "ref", {
          get: ke,
          configurable: !0
        });
      }
    }
    var fn = function(O, oe, ke, Ie, St, mt, kt) {
      var wt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: h,
        // Built-in properties that belong on the element
        type: O,
        key: oe,
        ref: ke,
        props: kt,
        // Record the component responsible for creating this element.
        _owner: mt
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
        value: Ie
      }), Object.defineProperty(wt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: St
      }), Object.freeze && (Object.freeze(wt.props), Object.freeze(wt)), wt;
    };
    function er(O, oe, ke, Ie, St) {
      {
        var mt, kt = {}, wt = null, xn = null;
        ke !== void 0 && (Rr(ke), wt = "" + ke), Rt(oe) && (Rr(oe.key), wt = "" + oe.key), qe(oe) && (xn = oe.ref, Wt(oe, St));
        for (mt in oe)
          Yn.call(oe, mt) && !Ka.hasOwnProperty(mt) && (kt[mt] = oe[mt]);
        if (O && O.defaultProps) {
          var un = O.defaultProps;
          for (mt in un)
            kt[mt] === void 0 && (kt[mt] = un[mt]);
        }
        if (wt || xn) {
          var dn = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
          wt && on(kt, dn), xn && yn(kt, dn);
        }
        return fn(O, wt, xn, St, Ie, va.current, kt);
      }
    }
    var ln = be.ReactCurrentOwner, qt = be.ReactDebugCurrentFrame;
    function Kt(O) {
      if (O) {
        var oe = O._owner, ke = Wn(O.type, O._source, oe ? oe.type : null);
        qt.setExtraStackFrame(ke);
      } else
        qt.setExtraStackFrame(null);
    }
    var ha;
    ha = !1;
    function br(O) {
      return typeof O == "object" && O !== null && O.$$typeof === h;
    }
    function ka() {
      {
        if (ln.current) {
          var O = K(ln.current.type);
          if (O)
            return `

Check the render method of \`` + O + "`.";
        }
        return "";
      }
    }
    function Wi(O) {
      return "";
    }
    var ol = {};
    function ll(O) {
      {
        var oe = ka();
        if (!oe) {
          var ke = typeof O == "string" ? O : O.displayName || O.name;
          ke && (oe = `

Check the top-level render call using <` + ke + ">.");
        }
        return oe;
      }
    }
    function _o(O, oe) {
      {
        if (!O._store || O._store.validated || O.key != null)
          return;
        O._store.validated = !0;
        var ke = ll(oe);
        if (ol[ke])
          return;
        ol[ke] = !0;
        var Ie = "";
        O && O._owner && O._owner !== ln.current && (Ie = " It was passed a child from " + K(O._owner.type) + "."), Kt(O), ge('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ke, Ie), Kt(null);
      }
    }
    function Co(O, oe) {
      {
        if (typeof O != "object")
          return;
        if (Qn(O))
          for (var ke = 0; ke < O.length; ke++) {
            var Ie = O[ke];
            br(Ie) && _o(Ie, oe);
          }
        else if (br(O))
          O._store && (O._store.validated = !0);
        else if (O) {
          var St = ce(O);
          if (typeof St == "function" && St !== O.entries)
            for (var mt = St.call(O), kt; !(kt = mt.next()).done; )
              br(kt.value) && _o(kt.value, oe);
        }
      }
    }
    function ul(O) {
      {
        var oe = O.type;
        if (oe == null || typeof oe == "string")
          return;
        var ke;
        if (typeof oe == "function")
          ke = oe.propTypes;
        else if (typeof oe == "object" && (oe.$$typeof === k || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        oe.$$typeof === H))
          ke = oe.propTypes;
        else
          return;
        if (ke) {
          var Ie = K(oe);
          Zn(ke, O.props, "prop", Ie, O);
        } else if (oe.PropTypes !== void 0 && !ha) {
          ha = !0;
          var St = K(oe);
          ge("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", St || "Unknown");
        }
        typeof oe.getDefaultProps == "function" && !oe.getDefaultProps.isReactClassApproved && ge("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Or(O) {
      {
        for (var oe = Object.keys(O.props), ke = 0; ke < oe.length; ke++) {
          var Ie = oe[ke];
          if (Ie !== "children" && Ie !== "key") {
            Kt(O), ge("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ie), Kt(null);
            break;
          }
        }
        O.ref !== null && (Kt(O), ge("Invalid attribute `ref` supplied to `React.Fragment`."), Kt(null));
      }
    }
    var Lr = {};
    function lr(O, oe, ke, Ie, St, mt) {
      {
        var kt = nt(O);
        if (!kt) {
          var wt = "";
          (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (wt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var xn = Wi();
          xn ? wt += xn : wt += ka();
          var un;
          O === null ? un = "null" : Qn(O) ? un = "array" : O !== void 0 && O.$$typeof === h ? (un = "<" + (K(O.type) || "Unknown") + " />", wt = " Did you accidentally export a JSX literal instead of a component?") : un = typeof O, ge("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", un, wt);
        }
        var dn = er(O, oe, ke, St, mt);
        if (dn == null)
          return dn;
        if (kt) {
          var ur = oe.children;
          if (ur !== void 0)
            if (Ie)
              if (Qn(ur)) {
                for (var Ja = 0; Ja < ur.length; Ja++)
                  Co(ur[Ja], O);
                Object.freeze && Object.freeze(ur);
              } else
                ge("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Co(ur, O);
        }
        if (Yn.call(oe, "key")) {
          var Za = K(O), _t = Object.keys(oe).filter(function(sl) {
            return sl !== "key";
          }), Et = _t.length > 0 ? "{key: someKey, " + _t.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Lr[Za + Et]) {
            var ei = _t.length > 0 ? "{" + _t.join(": ..., ") + ": ...}" : "{}";
            ge(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Et, Za, ei, Za), Lr[Za + Et] = !0;
          }
        }
        return O === E ? Or(dn) : ul(dn), dn;
      }
    }
    function mi(O, oe, ke) {
      return lr(O, oe, ke, !0);
    }
    function Xa(O, oe, ke) {
      return lr(O, oe, ke, !1);
    }
    var yi = Xa, gi = mi;
    vv.Fragment = E, vv.jsx = yi, vv.jsxs = gi;
  })()), vv;
}
var $E;
function Vk() {
  return $E || ($E = 1, process.env.NODE_ENV === "production" ? py.exports = Pk() : py.exports = Fk()), py.exports;
}
var Z = Vk(), Tt = Sv();
const ru = /* @__PURE__ */ R2(Tt), WE = (p) => Symbol.iterator in p, YE = (p) => (
  // HACK: avoid checking entries type
  "entries" in p
), QE = (p, h) => {
  const m = p instanceof Map ? p : new Map(p.entries()), E = h instanceof Map ? h : new Map(h.entries());
  if (m.size !== E.size)
    return !1;
  for (const [x, b] of m)
    if (!E.has(x) || !Object.is(b, E.get(x)))
      return !1;
  return !0;
}, Hk = (p, h) => {
  const m = p[Symbol.iterator](), E = h[Symbol.iterator]();
  let x = m.next(), b = E.next();
  for (; !x.done && !b.done; ) {
    if (!Object.is(x.value, b.value))
      return !1;
    x = m.next(), b = E.next();
  }
  return !!x.done && !!b.done;
};
function Ik(p, h) {
  return Object.is(p, h) ? !0 : typeof p != "object" || p === null || typeof h != "object" || h === null || Object.getPrototypeOf(p) !== Object.getPrototypeOf(h) ? !1 : WE(p) && WE(h) ? YE(p) && YE(h) ? QE(p, h) : Hk(p, h) : QE(
    { entries: () => Object.entries(p) },
    { entries: () => Object.entries(h) }
  );
}
function yv(p) {
  const h = ru.useRef(void 0);
  return (m) => {
    const E = p(m);
    return Ik(h.current, E) ? h.current : h.current = E;
  };
}
const Bk = "_sidebar_gxqe0_1", $k = "_sidebarNav_gxqe0_24", Wk = "_sectionWrapper_gxqe0_32", Yk = "_sectionHeader_gxqe0_37", Qk = "_active_gxqe0_48", Gk = "_sidebarItemInHeader_gxqe0_68", qk = "_plusButton_gxqe0_71", Kk = "_sidebarItem_gxqe0_68", Xk = "_sidebarIcon_gxqe0_138", Jk = "_sidebarLabel_gxqe0_148", Zk = "_plusIcon_gxqe0_173", eD = "_rotated_gxqe0_178", bn = {
  sidebar: Bk,
  sidebarNav: $k,
  sectionWrapper: Wk,
  sectionHeader: Yk,
  active: Qk,
  sidebarItemInHeader: Gk,
  plusButton: qk,
  sidebarItem: Kk,
  sidebarIcon: Xk,
  sidebarLabel: Jk,
  plusIcon: Zk,
  rotated: eD
}, tD = "_expandedContent_pymls_2", nD = "_searchWrapper_pymls_17", rD = "_searchContainer_pymls_23", aD = "_searchDropdown_pymls_33", iD = "_dropdownItem_pymls_69", oD = "_selected_pymls_84", lD = "_personAvatar_pymls_97", uD = "_avatarPlaceholder_pymls_111", sD = "_personInfo_pymls_123", cD = "_personName_pymls_131", fD = "_personTitle_pymls_140", dD = "_dropdownEmpty_pymls_148", pD = "_searchIcon_pymls_155", vD = "_searchInput_pymls_160", hD = "_suggestionsList_pymls_172", mD = "_suggestionItemWrapper_pymls_191", yD = "_suggestionItem_pymls_191", gD = "_statusIcon_pymls_219", SD = "_moreButton_pymls_222", _D = "_childItem_pymls_225", CD = "_suggestionLabel_pymls_254", ED = "_loadingState_pymls_299", RD = "_loadingSpinner_pymls_309", bD = "_emptyState_pymls_323", TD = "_errorState_pymls_330", rn = {
  expandedContent: tD,
  searchWrapper: nD,
  searchContainer: rD,
  searchDropdown: aD,
  dropdownItem: iD,
  selected: oD,
  personAvatar: lD,
  avatarPlaceholder: uD,
  personInfo: sD,
  personName: cD,
  personTitle: fD,
  dropdownEmpty: dD,
  searchIcon: pD,
  searchInput: vD,
  suggestionsList: hD,
  suggestionItemWrapper: mD,
  suggestionItem: yD,
  statusIcon: gD,
  moreButton: SD,
  childItem: _D,
  suggestionLabel: CD,
  loadingState: ED,
  loadingSpinner: RD,
  emptyState: bD,
  errorState: TD
}, GE = (p) => {
  let h;
  const m = /* @__PURE__ */ new Set(), E = (T, z) => {
    const H = typeof T == "function" ? T(h) : T;
    if (!Object.is(H, h)) {
      const q = h;
      h = z ?? (typeof H != "object" || H === null) ? H : Object.assign({}, h, H), m.forEach((G) => G(h, q));
    }
  }, x = () => h, N = { setState: E, getState: x, getInitialState: () => k, subscribe: (T) => (m.add(T), () => m.delete(T)) }, k = h = p(E, x, N);
  return N;
}, wD = ((p) => p ? GE(p) : GE), xD = (p) => p;
function kD(p, h = xD) {
  const m = ru.useSyncExternalStore(
    p.subscribe,
    ru.useCallback(() => h(p.getState()), [p, h]),
    ru.useCallback(() => h(p.getInitialState()), [p, h])
  );
  return ru.useDebugValue(m), m;
}
const qE = (p) => {
  const h = wD(p), m = (E) => kD(h, E);
  return Object.assign(m, h), m;
}, b2 = ((p) => p ? qE(p) : qE), KE = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_API_TOKEN: "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.1T0gK1NB9dkDzln5TOcExBpcBwy-shFWtcC6u-7XBJ-PcmZmvcXl8ENWGciCk42emWG8UiSIUDmCVjNrz_ok6j1qnE96VA0Y.y6Xsi2oWbPN3CT7ajll6rQ.ljIG81gYBR8zCAlM1QFGrrVjP7FMTeu3Q6lCQyRCSUKViiLr4YzoTXkaUUwBndXRQWo8sUCWlKYmmCDmTGhcl6juJs8Emq5LDnU_-qxcc3VXZZR1jORVCvBax6DyYhktXMvZAQIXC8HN5d2h9OImSo0l-xfnxQ_sxszr1oN3RaY.FGHHhOldpxuVWEHarQC882gDaZON86vSnIlb9UpjWxk", VITE_API_URL: "https://xh2o-yths-38lt.n7c.xano.io/api:Et3oQAtI", VITE_API_URL2: "https://xh2o-yths-38lt.n7c.xano.io/api:MkA4QsNh", VITE_DATA_SOURCE: "staging", VITE_LLM_ENDPOINT: "http://localhost:3001" }, gv = /* @__PURE__ */ new Map(), hy = (p) => {
  const h = gv.get(p);
  return h ? Object.fromEntries(
    Object.entries(h.stores).map(([m, E]) => [m, E.getState()])
  ) : {};
}, DD = (p, h, m) => {
  if (p === void 0)
    return {
      type: "untracked",
      connection: h.connect(m)
    };
  const E = gv.get(m.name);
  if (E)
    return { type: "tracked", store: p, ...E };
  const x = {
    connection: h.connect(m),
    stores: {}
  };
  return gv.set(m.name, x), { type: "tracked", store: p, ...x };
}, OD = (p, h) => {
  if (h === void 0) return;
  const m = gv.get(p);
  m && (delete m.stores[h], Object.keys(m.stores).length === 0 && gv.delete(p));
}, LD = (p) => {
  var h, m;
  if (!p) return;
  const E = p.split(`
`), x = E.findIndex(
    (y) => y.includes("api.setState")
  );
  if (x < 0) return;
  const b = ((h = E[x + 1]) == null ? void 0 : h.trim()) || "";
  return (m = /.+ (.+) .+/.exec(b)) == null ? void 0 : m[1];
}, ND = (p, h = {}) => (m, E, x) => {
  const { enabled: b, anonymousActionType: y, store: N, ...k } = h;
  let T;
  try {
    T = (b ?? (KE ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch {
  }
  if (!T)
    return p(m, E, x);
  const { connection: z, ...H } = DD(N, T, k);
  let q = !0;
  x.setState = ((ie, ce, be) => {
    const ge = m(ie, ce);
    if (!q) return ge;
    const _e = be === void 0 ? {
      type: y || LD(new Error().stack) || "anonymous"
    } : typeof be == "string" ? { type: be } : be;
    return N === void 0 ? (z?.send(_e, E()), ge) : (z?.send(
      {
        ..._e,
        type: `${N}/${_e.type}`
      },
      {
        ...hy(k.name),
        [N]: x.getState()
      }
    ), ge);
  }), x.devtools = {
    cleanup: () => {
      z && typeof z.unsubscribe == "function" && z.unsubscribe(), OD(k.name, N);
    }
  };
  const G = (...ie) => {
    const ce = q;
    q = !1, m(...ie), q = ce;
  }, pe = p(x.setState, E, x);
  if (H.type === "untracked" ? z?.init(pe) : (H.stores[H.store] = x, z?.init(
    Object.fromEntries(
      Object.entries(H.stores).map(([ie, ce]) => [
        ie,
        ie === H.store ? pe : ce.getState()
      ])
    )
  )), x.dispatchFromDevtools && typeof x.dispatch == "function") {
    let ie = !1;
    const ce = x.dispatch;
    x.dispatch = (...be) => {
      (KE ? "production" : void 0) !== "production" && be[0].type === "__setState" && !ie && (console.warn(
        '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
      ), ie = !0), ce(...be);
    };
  }
  return z.subscribe((ie) => {
    var ce;
    switch (ie.type) {
      case "ACTION":
        if (typeof ie.payload != "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return $S(
          ie.payload,
          (be) => {
            if (be.type === "__setState") {
              if (N === void 0) {
                G(be.state);
                return;
              }
              Object.keys(be.state).length !== 1 && console.error(
                `
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `
              );
              const ge = be.state[N];
              if (ge == null)
                return;
              JSON.stringify(x.getState()) !== JSON.stringify(ge) && G(ge);
              return;
            }
            x.dispatchFromDevtools && typeof x.dispatch == "function" && x.dispatch(be);
          }
        );
      case "DISPATCH":
        switch (ie.payload.type) {
          case "RESET":
            return G(pe), N === void 0 ? z?.init(x.getState()) : z?.init(hy(k.name));
          case "COMMIT":
            if (N === void 0) {
              z?.init(x.getState());
              return;
            }
            return z?.init(hy(k.name));
          case "ROLLBACK":
            return $S(ie.state, (be) => {
              if (N === void 0) {
                G(be), z?.init(x.getState());
                return;
              }
              G(be[N]), z?.init(hy(k.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return $S(ie.state, (be) => {
              if (N === void 0) {
                G(be);
                return;
              }
              JSON.stringify(x.getState()) !== JSON.stringify(be[N]) && G(be[N]);
            });
          case "IMPORT_STATE": {
            const { nextLiftedState: be } = ie.payload, ge = (ce = be.computedStates.slice(-1)[0]) == null ? void 0 : ce.state;
            if (!ge) return;
            G(N === void 0 ? ge : ge[N]), z?.send(
              null,
              // FIXME no-any
              be
            );
            return;
          }
          case "PAUSE_RECORDING":
            return q = !q;
        }
        return;
    }
  }), pe;
}, T2 = ND, $S = (p, h) => {
  let m;
  try {
    m = JSON.parse(p);
  } catch (E) {
    console.error(
      "[zustand devtools middleware] Could not parse the received json",
      E
    );
  }
  m !== void 0 && h(m);
}, XE = "https://xh2o-yths-38lt.n7c.xano.io/api:Et3oQAtI", JE = "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.1T0gK1NB9dkDzln5TOcExBpcBwy-shFWtcC6u-7XBJ-PcmZmvcXl8ENWGciCk42emWG8UiSIUDmCVjNrz_ok6j1qnE96VA0Y.y6Xsi2oWbPN3CT7ajll6rQ.ljIG81gYBR8zCAlM1QFGrrVjP7FMTeu3Q6lCQyRCSUKViiLr4YzoTXkaUUwBndXRQWo8sUCWlKYmmCDmTGhcl6juJs8Emq5LDnU_-qxcc3VXZZR1jORVCvBax6DyYhktXMvZAQIXC8HN5d2h9OImSo0l-xfnxQ_sxszr1oN3RaY.FGHHhOldpxuVWEHarQC882gDaZON86vSnIlb9UpjWxk", ZE = "staging", w2 = b2()(T2((p) => ({
  leverageLoops: [],
  suggestionRequests: [],
  isLoading: !1,
  error: null,
  fetchNetworkPersons: async () => {
    p({ isLoading: !0, error: null });
    try {
      const h = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JE}`,
        "x-data-source": ZE
      }, m = await fetch(`${XE}/my-persons`, { headers: h }), E = await m.json();
      if (!m.ok) {
        const x = E?.message || E?.error || "Failed to fetch loops", b = `HTTP ${m.status}: ${x}`;
        throw new Error(b);
      }
      p({ leverageLoops: E, isLoading: !1 });
    } catch (h) {
      p({
        error: h instanceof Error ? h.message : "Unknown error",
        isLoading: !1
      });
    }
  },
  fetchSuggestionRequests: async () => {
    p({ isLoading: !0, error: null });
    try {
      const h = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JE}`,
        "x-data-source": ZE
      }, m = await fetch(`${XE}/suggestion-requests?copilot_mode=loop`, { headers: h }), E = await m.json();
      if (!m.ok) {
        const x = E?.message || E?.error || "Failed to fetch suggestion requests", b = `HTTP ${m.status}: ${x}`;
        throw new Error(b);
      }
      p({ suggestionRequests: E?.items ?? [], isLoading: !1 });
    } catch (h) {
      p({
        error: h instanceof Error ? h.message : "Unknown error",
        isLoading: !1
      });
    }
  },
  setLeverageLoops: (h) => p({ leverageLoops: h }),
  addLeverageLoops: (h) => p((m) => ({ leverageLoops: [...m.leverageLoops, ...h] }))
}))), MD = ({ status: p }) => {
  switch (p) {
    case "draft":
      return /* @__PURE__ */ Z.jsx("span", { className: rn.statusIcon, "data-status": "draft", children: "✗" });
    case "activated":
      return /* @__PURE__ */ Z.jsx("span", { className: rn.statusIcon, "data-status": "activated", children: "✗" });
    case "processsing":
      return /* @__PURE__ */ Z.jsx("span", { className: rn.statusIcon, "data-status": "processsing", children: "✗" });
    case "suggestion_made":
      return /* @__PURE__ */ Z.jsx("span", { className: rn.statusIcon, "data-status": "suggestion_made", children: "✗" });
  }
  return /* @__PURE__ */ Z.jsx("span", { className: rn.statusIcon, "data-status": "completed", children: "✓" });
}, AD = ({
  contentType: p,
  items: h,
  selectedItem: m,
  onItemSelect: E,
  isLoading: x = !1,
  emptyMessage: b = "No items found",
  error: y = null,
  selectedSuggestionRequest: N,
  onSuggestionRequestSelect: k
}) => {
  const [T, z] = Tt.useState(/* @__PURE__ */ new Set()), [H, q] = Tt.useState(""), [G, pe] = Tt.useState(!1), ie = Tt.useRef(null), { suggestionRequests: ce, leverageLoops: be, isLoading: ge, error: _e } = w2(
    yv((me) => ({
      suggestionRequests: me.suggestionRequests,
      leverageLoops: me.leverageLoops,
      isLoading: me.isLoading,
      error: me.error
    }))
  );
  Tt.useEffect(() => {
    const me = (W) => {
      ie.current && !ie.current.contains(W.target) && pe(!1);
    };
    return document.addEventListener("mousedown", me), () => document.removeEventListener("mousedown", me);
  }, []);
  const De = (me) => {
    z((W) => {
      const K = new Set(W);
      return K.has(me) ? K.delete(me) : K.add(me), K;
    });
  }, ne = (me, W) => (console.log("persons in filterLeverageLoopPersons", me), W ? me.filter(
    (K) => K.full_name?.toLowerCase().includes(W.toLowerCase()) || K.master_person.name?.toLowerCase().includes(W.toLowerCase()) || K.master_person.current_title?.toLowerCase().includes(W.toLowerCase()) || K.master_person.bio?.toLowerCase().includes(W.toLowerCase()) || K.master_person.master_company?.company_name?.toLowerCase().includes(W.toLowerCase())
  ) : []), Be = (me) => {
    const W = me.target.value;
    q(W), pe(W.length > 0);
  }, Oe = (me) => {
    E(me), q(""), pe(!1);
  }, Qe = (me) => {
    const W = m?.id === me.id;
    return /* @__PURE__ */ Z.jsxs(
      "button",
      {
        className: `${rn.dropdownItem} ${W ? rn.selected : ""}`,
        onClick: () => Oe(me),
        children: [
          /* @__PURE__ */ Z.jsx("div", { className: rn.personAvatar, children: me.master_person.avatar ? /* @__PURE__ */ Z.jsx("img", { src: me.master_person.avatar, alt: me.full_name }) : /* @__PURE__ */ Z.jsx("span", { className: rn.avatarPlaceholder, children: me.full_name?.charAt(0) || "?" }) }),
          /* @__PURE__ */ Z.jsxs("div", { className: rn.personInfo, children: [
            /* @__PURE__ */ Z.jsx("span", { className: rn.personName, children: me.full_name || me.master_person.name }),
            me.master_person.current_title && /* @__PURE__ */ Z.jsxs("span", { className: rn.personTitle, children: [
              me.master_person.current_title,
              me.master_person.master_company?.company_name && /* @__PURE__ */ Z.jsxs(Z.Fragment, { children: [
                " at ",
                me.master_person.master_company.company_name
              ] })
            ] })
          ] })
        ]
      },
      me.id
    );
  }, Je = (me, W = !1) => {
    const K = N?.request_header_title === me.request_header_title;
    return /* @__PURE__ */ Z.jsx("div", { className: rn.suggestionItemWrapper, children: /* @__PURE__ */ Z.jsxs(
      "button",
      {
        className: `${rn.suggestionItem} ${W ? rn.childItem : ""} ${K ? rn.selected : ""}`,
        onClick: () => {
          De(me.request_header_title), k(me);
        },
        children: [
          /* @__PURE__ */ Z.jsx(MD, { status: me.status }),
          /* @__PURE__ */ Z.jsx("span", { className: rn.suggestionLabel, children: me.request_header_title }),
          /* @__PURE__ */ Z.jsx("button", { className: rn.moreButton, onClick: (Ee) => Ee.stopPropagation(), children: "⋮" })
        ]
      }
    ) }, me.id);
  }, nt = ne(be.length > 0 ? be : h, H);
  return /* @__PURE__ */ Z.jsxs("div", { className: rn.expandedContent, children: [
    /* @__PURE__ */ Z.jsxs("div", { className: rn.searchWrapper, ref: ie, children: [
      /* @__PURE__ */ Z.jsxs("div", { className: rn.searchContainer, children: [
        /* @__PURE__ */ Z.jsx("span", { className: rn.searchIcon, children: "🔍" }),
        /* @__PURE__ */ Z.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search persons...",
            className: rn.searchInput,
            value: H,
            onChange: Be,
            onFocus: () => H.length > 0 && pe(!0)
          }
        )
      ] }),
      G && /* @__PURE__ */ Z.jsx("div", { className: rn.searchDropdown, children: nt.length === 0 ? /* @__PURE__ */ Z.jsxs("div", { className: rn.dropdownEmpty, children: [
        'No persons found for "',
        H,
        '"'
      ] }) : nt.map((me) => Qe(me)) })
    ] }),
    /* @__PURE__ */ Z.jsx("div", { className: rn.suggestionsList, children: x ? /* @__PURE__ */ Z.jsxs("div", { className: rn.loadingState, children: [
      /* @__PURE__ */ Z.jsx("span", { className: rn.loadingSpinner }),
      "Loading..."
    ] }) : ce.length === 0 ? /* @__PURE__ */ Z.jsx("div", { className: rn.emptyState, children: b }) : y ? /* @__PURE__ */ Z.jsx("div", { className: rn.errorState, children: y }) : ce.map((me) => Je(me)) })
  ] });
}, my = (p) => ({
  messages: [],
  threadId: `thread-${p}-${Date.now()}`,
  isLoading: !1
}), t_ = b2()(
  T2((p) => ({
    activeContext: "copilot",
    selectedPerson: null,
    selectedSuggestionRequest: null,
    copilotChat: my("copilot"),
    outcomesChat: my("outcomes"),
    leverageLoopsChat: my("leverage-loops"),
    setActiveContext: (h) => p({ activeContext: h }),
    setSelectedPerson: (h) => p((m) => ({
      selectedPerson: h,
      selectedSuggestionRequest: h ? null : m.selectedSuggestionRequest,
      activeContext: "leverage-loops"
    })),
    setSelectedSuggestionRequest: (h) => p((m) => ({
      selectedSuggestionRequest: h,
      selectedPerson: h ? null : m.selectedPerson,
      activeContext: "leverage-loops"
    })),
    addMessage: (h, m) => p((E) => {
      const x = yy(h);
      return {
        [x]: {
          ...E[x],
          messages: [...E[x].messages, m]
        }
      };
    }),
    updateMessage: (h, m, E, x) => p((b) => {
      const y = yy(h);
      return {
        [y]: {
          ...b[y],
          messages: b[y].messages.map(
            (N) => N.id === m ? { ...N, content: E, isStreaming: x ?? N.isStreaming } : N
          )
        }
      };
    }),
    setIsLoading: (h, m) => p((E) => {
      const x = yy(h);
      return {
        [x]: {
          ...E[x],
          isLoading: m
        }
      };
    }),
    clearChat: (h) => p(() => ({
      [yy(h)]: my(h)
    }))
  }))
);
function yy(p) {
  switch (p) {
    case "copilot":
      return "copilotChat";
    case "outcomes":
      return "outcomesChat";
    case "leverage-loops":
      return "leverageLoopsChat";
  }
}
const UD = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.15816%2015.5394C4.42185%2015.8099%203.64142%2015.9909%202.82808%2016.0678C2.75965%2016.0739%202.69009%2016.0784%202.62129%2016.081C2.05326%2016.1048%201.47513%2015.9215%201.00732%2015.5213C0.154714%2014.7923%20-0.052828%2013.5813%200.443029%2012.6226C0.448638%2012.6116%200.453874%2012.6011%200.459857%2012.5898L3.41481%206.77869C2.08654%209.73401%202.83855%2013.3286%205.16339%2015.5372L5.15816%2015.5391V15.5394Z'%20fill='url(%23paint0_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8419%204.46013C15.5782%204.18972%2016.3587%204.00906%2017.172%203.93175C17.2401%203.92571%2017.31%203.92119%2017.3788%203.91855C17.9468%203.89479%2018.525%204.07808%2018.9928%204.47823C19.845%205.20726%2020.0529%206.41828%2019.5571%207.37699C19.5515%207.3883%2019.5458%207.39886%2019.5402%207.4098L16.5853%2013.2205C17.9132%2010.2648%2017.1615%206.67059%2014.8367%204.46202L14.8419%204.46013Z'%20fill='url(%23paint1_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10%202.61975C11.8545%202.61975%2013.547%203.31559%2014.8367%204.46211C12.464%205.51888%2010.8283%207.5913%2010.1904%2010.0563C9.55242%2012.5214%207.60302%2014.6787%205.16338%2015.5378C3.66459%2014.2306%202.68222%2012.2057%202.68222%2010.0001C2.68259%205.92394%205.95877%202.61975%2010%202.61975Z'%20fill='url(%23paint2_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8367%204.46167C16.358%205.81412%2017.3179%207.79376%2017.3179%209.99932C17.3179%2014.0751%2014.0417%2017.3793%2010.0001%2017.3793C8.14604%2017.3793%206.45317%2016.6835%205.16342%2015.537C7.59222%2014.5651%209.36213%2012.4644%2010.0001%209.99932C10.638%207.53429%2012.4079%205.4332%2014.8367%204.46167Z'%20fill='url(%23paint3_linear_23492_1459)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_23492_1459'%20x1='1.41231'%20y1='10.771'%20x2='6.31346'%20y2='13.2684'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFAE00'%20stop-opacity='0.12'/%3e%3cstop%20offset='1'%20stop-color='%23FFAE00'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_23492_1459'%20x1='13.6991'%20y1='6.69473'%20x2='18.6306'%20y2='9.20746'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2313F562'/%3e%3cstop%20offset='1'%20stop-color='%2313F562'%20stop-opacity='0.09'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_23492_1459'%20x1='4.21878'%20y1='14.805'%20x2='10.8001'%20y2='2.68539'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FD5743'/%3e%3cstop%20offset='0.21'%20stop-color='%23D13D58'/%3e%3cstop%20offset='0.4'%20stop-color='%23AB2868'/%3e%3cstop%20offset='0.6'%20stop-color='%238C1B6F'/%3e%3cstop%20offset='1'%20stop-color='%23280553'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_23492_1459'%20x1='9.19834'%20y1='17.5257'%20x2='15.8611'%20y2='5.25654'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23130F56'/%3e%3cstop%20offset='0.41'%20stop-color='%23105D8E'/%3e%3cstop%20offset='0.6'%20stop-color='%23107995'/%3e%3cstop%20offset='0.79'%20stop-color='%2311A39E'/%3e%3cstop%20offset='1'%20stop-color='%2313EBAF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", jD = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%205.83329C9.17592%205.83329%208.37034%206.07766%207.68514%206.5355C6.99993%206.99334%206.46588%207.64408%206.15051%208.40544C5.83515%209.1668%205.75264%2010.0046%205.91341%2010.8128C6.07418%2011.6211%206.47102%2012.3635%207.05373%2012.9462C7.63645%2013.529%208.37888%2013.9258%209.18714%2014.0866C9.99539%2014.2473%2010.8332%2014.1648%2011.5945%2013.8495C12.3559%2013.5341%2013.0066%2013%2013.4645%2012.3148C13.9223%2011.6296%2014.1667%2010.824%2014.1667%209.99995M10.8333%202.54579C9.28839%202.37246%207.72776%202.68352%206.36733%203.43593C5.0069%204.18834%203.9139%205.34492%203.23953%206.74567C2.56516%208.14643%202.34274%209.72213%202.60305%2011.2548C2.86335%2012.7875%203.59352%2014.2014%204.69253%2015.301C5.79155%2016.4006%207.2051%2017.1314%208.73766%2017.3925C10.2702%2017.6536%2011.846%2017.432%2013.2471%2016.7583C14.6482%2016.0846%2015.8053%2014.9922%2016.5584%2013.6322C17.3115%2012.2721%2017.6234%2010.7117%2017.4508%209.16662M12.5%207.49995V4.99995L15%202.49995V4.99995H17.5L15%207.49995H12.5ZM12.5%207.49995L10%209.99995M9.16668%209.99995C9.16668%2010.221%209.25447%2010.4329%209.41076%2010.5892C9.56704%2010.7455%209.779%2010.8333%2010%2010.8333C10.221%2010.8333%2010.433%2010.7455%2010.5893%2010.5892C10.7455%2010.4329%2010.8333%2010.221%2010.8333%209.99995C10.8333%209.77894%2010.7455%209.56698%2010.5893%209.4107C10.433%209.25442%2010.221%209.16662%2010%209.16662C9.779%209.16662%209.56704%209.25442%209.41076%209.4107C9.25447%209.56698%209.16668%209.77894%209.16668%209.99995Z'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", zD = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.5533%205.43171C14.1448%204.53303%2013.4793%203.77539%2012.6409%203.2543C11.8024%202.73321%2010.8285%202.47198%209.84179%202.50353C8.8551%202.53509%207.89984%202.85802%207.09639%203.43162C6.29294%204.00523%205.67727%204.80383%205.32698%205.72679C4.97669%206.64974%204.90745%207.65573%205.12798%208.61798C5.34852%209.58022%205.84897%2010.4556%206.56625%2011.1339C7.28353%2011.8122%208.18555%2012.263%209.15861%2012.4294C10.1317%2012.5958%2011.1322%2012.4705%2012.0342%2012.0692'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.5683%2014.5533C15.467%2014.1448%2016.2246%2013.4793%2016.7457%2012.6409C17.2668%2011.8024%2017.5281%2010.8284%2017.4965%209.84176C17.4649%208.85507%2017.142%207.89981%2016.5684%207.09636C15.9948%206.29291%2015.1962%205.67724%2014.2732%205.32695C13.3503%204.97666%2012.3443%204.90742%2011.3821%205.12795C10.4198%205.34849%209.54439%205.84894%208.86612%206.56622C8.18784%207.2835%207.73708%208.18552%207.57064%209.15858C7.40419%2010.1316%207.52952%2011.1322%207.93083%2012.0341'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.45001%2014.5684C5.8585%2015.467%206.52387%2016.2247%207.36227%2016.7459C8.20067%2017.267%209.17458%2017.5283%2010.1613%2017.4969C11.1479%2017.4654%2012.1032%2017.1425%2012.9067%2016.569C13.7102%2015.9955%2014.3259%2015.197%2014.6763%2014.2741C15.0267%2013.3512%2015.0961%2012.3452%2014.8756%2011.383C14.6552%2010.4207%2014.1549%209.54526%2013.4377%208.8669C12.7205%208.18855%2011.8186%207.73767%2010.8456%207.57109C9.87256%207.40451%208.872%207.52969%207.97001%207.93085'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.43168%205.44995C4.53299%205.85844%203.77532%206.52381%203.25417%207.36221C2.73302%208.20061%202.47171%209.17452%202.50318%2010.1612C2.53465%2011.1479%202.85749%2012.1031%203.431%2012.9066C4.00451%2013.7101%204.80304%2014.3259%205.72594%2014.6763C6.64884%2015.0266%207.6548%2015.096%208.61706%2014.8756C9.57931%2014.6552%2010.4548%2014.1548%2011.1331%2013.4376C11.8115%2012.7205%2012.2624%2011.8185%2012.4289%2010.8455C12.5955%209.8725%2012.4703%208.87194%2012.0692%207.96995'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", PD = ({
  activeSection: p,
  onSectionChange: h
}) => {
  const { leverageLoops: m, fetchNetworkPersons: E, fetchSuggestionRequests: x, isLoading: b, error: y } = w2(
    yv((ce) => ({
      leverageLoops: ce.leverageLoops,
      fetchNetworkPersons: ce.fetchNetworkPersons,
      fetchSuggestionRequests: ce.fetchSuggestionRequests,
      isLoading: ce.isLoading,
      error: ce.error
    }))
  ), {
    selectedPerson: N,
    selectedSuggestionRequest: k,
    setSelectedPerson: T,
    setSelectedSuggestionRequest: z
  } = t_(
    yv((ce) => ({
      selectedPerson: ce.selectedPerson,
      selectedSuggestionRequest: ce.selectedSuggestionRequest,
      setSelectedPerson: ce.setSelectedPerson,
      setSelectedSuggestionRequest: ce.setSelectedSuggestionRequest
    }))
  ), [H, q] = Tt.useState(/* @__PURE__ */ new Set()), G = (ce) => {
    h(ce), q((be) => {
      const ge = new Set(be);
      return ge.has(ce) ? ge.delete(ce) : ge.add(ce), ge;
    });
  }, pe = (ce) => {
    T(ce), h("leverage-loops");
  }, ie = (ce) => {
    z(ce), h("leverage-loops");
  };
  return Tt.useEffect(() => {
    E(), x();
  }, []), /* @__PURE__ */ Z.jsx("div", { className: bn.sidebar, children: /* @__PURE__ */ Z.jsxs("nav", { className: bn.sidebarNav, children: [
    /* @__PURE__ */ Z.jsxs(
      "button",
      {
        className: `${bn.sidebarItem} ${p === "copilot" ? bn.active : ""}`,
        onClick: () => h("copilot"),
        "aria-label": "Orbiter.io Copilot",
        children: [
          /* @__PURE__ */ Z.jsx("span", { className: bn.sidebarIcon, children: /* @__PURE__ */ Z.jsx("img", { src: UD, alt: "Orbiter", width: 18, height: 18 }) }),
          /* @__PURE__ */ Z.jsx("span", { className: bn.sidebarLabel, children: "Orbiter.io Copilot" })
        ]
      }
    ),
    /* @__PURE__ */ Z.jsx("div", { className: bn.sectionWrapper, children: /* @__PURE__ */ Z.jsxs("div", { className: `${bn.sectionHeader} ${p === "outcomes" ? bn.active : ""}`, children: [
      /* @__PURE__ */ Z.jsxs(
        "button",
        {
          className: bn.sidebarItemInHeader,
          onClick: () => h("outcomes"),
          "aria-label": "Outcomes",
          children: [
            /* @__PURE__ */ Z.jsx("span", { className: bn.sidebarIcon, children: /* @__PURE__ */ Z.jsx("img", { src: jD, alt: "Outcomes", width: 18, height: 18 }) }),
            /* @__PURE__ */ Z.jsx("span", { className: bn.sidebarLabel, children: "Outcomes" })
          ]
        }
      ),
      /* @__PURE__ */ Z.jsx(
        "button",
        {
          className: bn.plusButton,
          onClick: () => G("outcomes"),
          "aria-label": "Expand Outcomes",
          children: /* @__PURE__ */ Z.jsx("span", { className: `${bn.plusIcon} ${H.has("outcomes") ? bn.rotated : ""}`, children: "+" })
        }
      )
    ] }) }),
    /* @__PURE__ */ Z.jsxs("div", { className: bn.sectionWrapper, children: [
      /* @__PURE__ */ Z.jsxs("div", { className: `${bn.sectionHeader} ${p === "leverage-loops" ? bn.active : ""}`, children: [
        /* @__PURE__ */ Z.jsxs(
          "button",
          {
            className: bn.sidebarItemInHeader,
            onClick: () => h("leverage-loops"),
            "aria-label": "Leverage Loops",
            children: [
              /* @__PURE__ */ Z.jsx("span", { className: bn.sidebarIcon, children: /* @__PURE__ */ Z.jsx("img", { src: zD, alt: "Leverage Loops", width: 18, height: 18 }) }),
              /* @__PURE__ */ Z.jsx("span", { className: bn.sidebarLabel, children: "Leverage Loops" })
            ]
          }
        ),
        /* @__PURE__ */ Z.jsx(
          "button",
          {
            className: bn.plusButton,
            onClick: () => G("leverage-loops"),
            "aria-label": "Expand Leverage Loops",
            children: /* @__PURE__ */ Z.jsx("span", { className: `${bn.plusIcon} ${H.has("leverage-loops") ? bn.rotated : ""}`, children: "+" })
          }
        )
      ] }),
      H.has("leverage-loops") && /* @__PURE__ */ Z.jsx(
        AD,
        {
          contentType: "leverage-loops",
          items: m,
          selectedItem: N,
          selectedSuggestionRequest: k,
          onItemSelect: pe,
          onSuggestionRequestSelect: ie,
          isLoading: b,
          error: y
        }
      )
    ] })
  ] }) });
}, FD = "_composerContainer_1dqbd_1", VD = "_composer_1dqbd_1", HD = "_inputWrapper_1dqbd_15", ID = "_input_1dqbd_15", BD = "_actions_1dqbd_40", $D = "_leftActions_1dqbd_47", WD = "_rightActions_1dqbd_48", YD = "_actionButton_1dqbd_54", QD = "_sendButton_1dqbd_75", GD = "_active_1dqbd_92", Bi = {
  composerContainer: FD,
  composer: VD,
  inputWrapper: HD,
  input: ID,
  actions: BD,
  leftActions: $D,
  rightActions: WD,
  actionButton: YD,
  sendButton: QD,
  active: GD
}, qD = ({
  onSend: p,
  disabled: h = !1,
  placeholder: m = "Ask anything..",
  initialValue: E = ""
}) => {
  const [x, b] = Tt.useState(E), y = Tt.useRef(null);
  Tt.useEffect(() => {
    E && (b(E), setTimeout(() => y.current?.focus(), 0));
  }, [E]), Tt.useEffect(() => {
    const T = y.current;
    T && (T.style.height = "auto", T.style.height = `${Math.min(T.scrollHeight, 200)}px`);
  }, [x]);
  const N = (T) => {
    T?.preventDefault(), x.trim() && !h && (p(x.trim()), b(""));
  }, k = (T) => {
    T.key === "Enter" && !T.shiftKey && (T.preventDefault(), N());
  };
  return /* @__PURE__ */ Z.jsx("div", { className: Bi.composerContainer, children: /* @__PURE__ */ Z.jsxs("form", { onSubmit: N, className: Bi.composer, children: [
    /* @__PURE__ */ Z.jsx("div", { className: Bi.inputWrapper, children: /* @__PURE__ */ Z.jsx(
      "textarea",
      {
        ref: y,
        value: x,
        onChange: (T) => b(T.target.value),
        onKeyDown: k,
        placeholder: m,
        disabled: h,
        className: Bi.input,
        rows: 1
      }
    ) }),
    /* @__PURE__ */ Z.jsxs("div", { className: Bi.actions, children: [
      /* @__PURE__ */ Z.jsxs("div", { className: Bi.leftActions, children: [
        /* @__PURE__ */ Z.jsx(
          "button",
          {
            type: "button",
            className: Bi.actionButton,
            title: "Attach file",
            children: /* @__PURE__ */ Z.jsx(
              "svg",
              {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /* @__PURE__ */ Z.jsx("path", { d: "M12 5v14M5 12h14" })
              }
            )
          }
        ),
        /* @__PURE__ */ Z.jsx(
          "button",
          {
            type: "button",
            className: Bi.actionButton,
            title: "Settings",
            children: /* @__PURE__ */ Z.jsx(
              "svg",
              {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /* @__PURE__ */ Z.jsx("path", { d: "M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" })
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ Z.jsxs("div", { className: Bi.rightActions, children: [
        /* @__PURE__ */ Z.jsx(
          "button",
          {
            type: "button",
            className: Bi.actionButton,
            title: "Voice input",
            children: /* @__PURE__ */ Z.jsxs(
              "svg",
              {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: [
                  /* @__PURE__ */ Z.jsx("path", { d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" }),
                  /* @__PURE__ */ Z.jsx("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }),
                  /* @__PURE__ */ Z.jsx("line", { x1: "12", y1: "19", x2: "12", y2: "23" }),
                  /* @__PURE__ */ Z.jsx("line", { x1: "8", y1: "23", x2: "16", y2: "23" })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ Z.jsx(
          "button",
          {
            type: "submit",
            className: `${Bi.sendButton} ${x.trim() && !h ? Bi.active : ""}`,
            disabled: !x.trim() || h,
            title: "Send message",
            children: /* @__PURE__ */ Z.jsx(
              "svg",
              {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /* @__PURE__ */ Z.jsx("path", { d: "M12 19V5M5 12l7-7 7 7" })
              }
            )
          }
        )
      ] })
    ] })
  ] }) });
}, KD = "_messageContainer_tnxih_1", XD = "_user_tnxih_6", JD = "_assistant_tnxih_9", ZD = "_userMessage_tnxih_23", eO = "_assistantMessage_tnxih_38", tO = "_textContent_tnxih_45", nO = "_streamingIndicator_tnxih_50", mc = {
  messageContainer: KD,
  user: XD,
  assistant: JD,
  userMessage: ZD,
  assistantMessage: eO,
  textContent: tO,
  streamingIndicator: nO
}, rO = ({
  message: p,
  // These props are available for custom Gen UI components
  onAction: h,
  onUpdateMessage: m
}) => {
  const E = p.role === "user", x = p.role === "assistant", b = () => /* @__PURE__ */ Z.jsx("div", { className: mc.textContent, children: p.content || (p.isStreaming ? "" : "No response") });
  return /* @__PURE__ */ Z.jsx(
    "div",
    {
      className: `${mc.messageContainer} ${E ? mc.user : mc.assistant}`,
      children: E ? /* @__PURE__ */ Z.jsx("div", { className: mc.userMessage, children: /* @__PURE__ */ Z.jsx("p", { children: p.content }) }) : x ? /* @__PURE__ */ Z.jsxs("div", { className: mc.assistantMessage, children: [
        p.isStreaming && !p.content && /* @__PURE__ */ Z.jsxs("div", { className: mc.streamingIndicator, children: [
          /* @__PURE__ */ Z.jsx("span", {}),
          /* @__PURE__ */ Z.jsx("span", {}),
          /* @__PURE__ */ Z.jsx("span", {})
        ] }),
        b()
      ] }) : null
    }
  );
}, aO = "_overlay_271nu_1", iO = "_modal_271nu_21", oO = "_header_271nu_42", lO = "_closeButton_271nu_55", uO = "_selectedInfo_271nu_77", sO = "_inputGroup_271nu_99", cO = "_actions_271nu_130", fO = "_cancelBtn_271nu_136", dO = "_confirmBtn_271nu_137", eu = {
  overlay: aO,
  modal: iO,
  header: oO,
  closeButton: lO,
  selectedInfo: uO,
  inputGroup: sO,
  actions: cO,
  cancelBtn: fO,
  confirmBtn: dO
}, pO = ({
  isOpen: p,
  onClose: h,
  humanFriendlyMessage: m,
  llmFriendlyMessage: E,
  onConfirm: x
}) => {
  const [b, y] = Tt.useState(E);
  if (Tt.useEffect(() => {
    y(E);
  }, [E]), Tt.useEffect(() => {
    const k = (T) => {
      T.key === "Escape" && h();
    };
    if (p)
      return window.addEventListener("keydown", k), () => window.removeEventListener("keydown", k);
  }, [p, h]), !p) return null;
  const N = (k) => {
    k.preventDefault(), b.trim() && x(b.trim());
  };
  return /* @__PURE__ */ Z.jsx("div", { className: eu.overlay, onClick: h, children: /* @__PURE__ */ Z.jsxs("div", { className: eu.modal, onClick: (k) => k.stopPropagation(), children: [
    /* @__PURE__ */ Z.jsxs("div", { className: eu.header, children: [
      /* @__PURE__ */ Z.jsx("h2", { children: "Edit Your Response" }),
      /* @__PURE__ */ Z.jsx("button", { className: eu.closeButton, onClick: h, children: /* @__PURE__ */ Z.jsx(
        "svg",
        {
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          children: /* @__PURE__ */ Z.jsx("path", { d: "M18 6L6 18M6 6l12 12" })
        }
      ) })
    ] }),
    /* @__PURE__ */ Z.jsxs("form", { onSubmit: N, children: [
      /* @__PURE__ */ Z.jsxs("div", { className: eu.selectedInfo, children: [
        /* @__PURE__ */ Z.jsx("label", { children: "Your Selection" }),
        /* @__PURE__ */ Z.jsx("p", { children: m })
      ] }),
      /* @__PURE__ */ Z.jsxs("div", { className: eu.inputGroup, children: [
        /* @__PURE__ */ Z.jsx("label", { htmlFor: "editMessage", children: "Edit message before sending:" }),
        /* @__PURE__ */ Z.jsx(
          "textarea",
          {
            id: "editMessage",
            value: b,
            onChange: (k) => y(k.target.value),
            placeholder: "Edit your message...",
            rows: 4,
            autoFocus: !0
          }
        )
      ] }),
      /* @__PURE__ */ Z.jsxs("div", { className: eu.actions, children: [
        /* @__PURE__ */ Z.jsx("button", { type: "button", className: eu.cancelBtn, onClick: h, children: "Cancel" }),
        /* @__PURE__ */ Z.jsx(
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
}, vO = "_chatContainer_1r73a_1", hO = "_header_1r73a_9", mO = "_subtitle_1r73a_24", yO = "_messagesContainer_1r73a_31", gO = "_emptyState_1r73a_50", tu = {
  chatContainer: vO,
  header: hO,
  subtitle: mO,
  messagesContainer: yO,
  emptyState: gO
}, SO = "http://localhost:3001", e2 = () => `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, n_ = ({
  context: p,
  title: h,
  subtitle: m,
  systemPrompt: E
}) => {
  const {
    chatState: x,
    addMessage: b,
    updateMessage: y,
    setIsLoading: N
  } = t_(
    yv((ne) => ({
      chatState: ne[p === "copilot" ? "copilotChat" : p === "outcomes" ? "outcomesChat" : "leverageLoopsChat"],
      addMessage: ne.addMessage,
      updateMessage: ne.updateMessage,
      setIsLoading: ne.setIsLoading
    }))
  ), { messages: k, threadId: T, isLoading: z } = x, [H, q] = ru.useState(!1), [G, pe] = ru.useState(null), ie = Tt.useRef(null);
  Tt.useEffect(() => {
    ie.current?.scrollIntoView({ behavior: "smooth" });
  }, [k]);
  const ce = Tt.useCallback(
    async (ne) => {
      if (!ne.trim() || z) return;
      const Be = {
        id: e2(),
        role: "user",
        content: ne.trim(),
        timestamp: /* @__PURE__ */ new Date()
      };
      b(p, Be), N(p, !0);
      const Oe = e2();
      b(p, {
        id: Oe,
        role: "assistant",
        content: "",
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !0
      });
      try {
        const Je = E ? `[Context: ${E}]

${ne.trim()}` : ne.trim(), nt = await fetch(`${SO}/api/chat`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            prompt: {
              role: "user",
              content: Je,
              id: Be.id
            },
            threadId: T,
            responseId: Oe,
            context: p
            // Pass context to backend if needed
          })
        });
        if (!nt.ok)
          throw new Error(`API error: ${nt.status}`);
        const me = nt.body?.getReader(), W = new TextDecoder();
        let K = "";
        if (me)
          for (; ; ) {
            const { done: Ee, value: He } = await me.read();
            if (Ee) break;
            const xe = W.decode(He, { stream: !0 });
            K += xe, y(p, Oe, K, !0);
          }
        y(p, Oe, K, !1);
      } catch (Je) {
        console.error("Failed to send message:", Je), y(
          p,
          Oe,
          "Sorry, there was an error processing your request.",
          !1
        );
      } finally {
        N(p, !1);
      }
    },
    [z, T, p, E, b, y, N]
  ), be = Tt.useCallback((ne) => {
    switch (console.log("Action received:", ne), ne.type) {
      case "continue_conversation":
        if (ne.params) {
          const { humanFriendlyMessage: Be, llmFriendlyMessage: Oe } = ne.params;
          Be && Oe && (pe({
            humanFriendlyMessage: Be,
            llmFriendlyMessage: Oe
          }), q(!0));
        }
        break;
      case "open_url":
        ne.params?.url && window.open(ne.params.url, "_blank", "noopener,noreferrer");
        break;
      default:
        console.log("Unhandled action type:", ne.type);
    }
  }, []), ge = Tt.useCallback(
    (ne, Be) => {
      y(p, ne, Be);
    },
    [p, y]
  ), _e = Tt.useCallback(
    (ne) => {
      q(!1), pe(null), ce(ne);
    },
    [ce]
  ), De = Tt.useCallback(() => {
    q(!1), pe(null);
  }, []);
  return /* @__PURE__ */ Z.jsxs("div", { className: tu.chatContainer, children: [
    /* @__PURE__ */ Z.jsxs("div", { className: tu.header, children: [
      /* @__PURE__ */ Z.jsx("h1", { children: h }),
      m && /* @__PURE__ */ Z.jsx("p", { className: tu.subtitle, children: m })
    ] }),
    /* @__PURE__ */ Z.jsxs("div", { className: tu.messagesContainer, children: [
      k.length === 0 ? /* @__PURE__ */ Z.jsx("div", { className: tu.emptyState, children: /* @__PURE__ */ Z.jsx("p", { children: "Start a conversation" }) }) : k.map((ne) => /* @__PURE__ */ Z.jsx(
        rO,
        {
          message: ne,
          onAction: be,
          onUpdateMessage: (Be) => ge(ne.id, Be)
        },
        ne.id
      )),
      /* @__PURE__ */ Z.jsx("div", { ref: ie })
    ] }),
    /* @__PURE__ */ Z.jsx(qD, { onSend: ce, disabled: z }),
    G && /* @__PURE__ */ Z.jsx(
      pO,
      {
        isOpen: H,
        onClose: De,
        humanFriendlyMessage: G.humanFriendlyMessage,
        llmFriendlyMessage: G.llmFriendlyMessage,
        onConfirm: _e
      }
    )
  ] });
}, t2 = ({
  agentName: p = "Orbiter.io Copilot"
}) => /* @__PURE__ */ Z.jsx(
  n_,
  {
    context: "copilot",
    title: p,
    systemPrompt: "You are Orbiter.io Copilot, a helpful AI assistant for professional networking and relationship management."
  }
), _O = () => /* @__PURE__ */ Z.jsx(
  n_,
  {
    context: "outcomes",
    title: "Outcomes",
    systemPrompt: "You are helping the user track and achieve their professional outcomes and goals."
  }
), CO = () => {
  const { selectedPerson: p, selectedSuggestionRequest: h } = t_(
    yv((x) => ({
      selectedPerson: x.selectedPerson,
      selectedSuggestionRequest: x.selectedSuggestionRequest
    }))
  ), m = () => p ? `You are helping with a leverage loop for ${p.full_name} from ${p.master_person?.master_company?.company_name || "Unknown Company"}. Their title is ${p.master_person?.current_title || "Unknown"}.` : h ? `You are helping with the leverage loop suggestion request: "${h.request_header_title}". Context: ${h.request_context}` : "You are helping the user manage their leverage loops and professional network.", E = () => {
    if (p)
      return `${p.full_name} • ${p.master_person?.master_company?.company_name || ""}`;
    if (h)
      return h.request_header_title;
  };
  return !p && !h ? /* @__PURE__ */ Z.jsxs("div", { className: tu.chatContainer, children: [
    /* @__PURE__ */ Z.jsx("div", { className: tu.header, children: /* @__PURE__ */ Z.jsx("h1", { children: "Leverage Loops" }) }),
    /* @__PURE__ */ Z.jsx("div", { className: tu.messagesContainer, children: /* @__PURE__ */ Z.jsx("div", { className: tu.emptyState, children: /* @__PURE__ */ Z.jsx("p", { children: "Select a person or suggestion request from the sidebar to start a conversation" }) }) })
  ] }) : /* @__PURE__ */ Z.jsx(
    n_,
    {
      context: "leverage-loops",
      title: "Leverage Loops",
      subtitle: E(),
      systemPrompt: m()
    }
  );
}, EO = "_app_rj7hb_1", RO = "_mainContent_rj7hb_11", n2 = {
  app: EO,
  mainContent: RO
}, bO = ({
  agentName: p = "Copilot"
}) => {
  const [h, m] = Tt.useState("copilot"), E = () => {
    switch (h) {
      case "copilot":
        return /* @__PURE__ */ Z.jsx(t2, { agentName: p });
      case "outcomes":
        return /* @__PURE__ */ Z.jsx(_O, {});
      case "leverage-loops":
        return /* @__PURE__ */ Z.jsx(CO, {});
      default:
        return /* @__PURE__ */ Z.jsx(t2, { agentName: p });
    }
  };
  return /* @__PURE__ */ Z.jsxs("div", { className: n2.app, children: [
    /* @__PURE__ */ Z.jsx(
      PD,
      {
        activeSection: h,
        onSectionChange: m
      }
    ),
    /* @__PURE__ */ Z.jsx("main", { className: n2.mainContent, children: E() })
  ] });
};
var gy = { exports: {} }, Qa = {}, Sy = { exports: {} }, WS = {};
var r2;
function TO() {
  return r2 || (r2 = 1, (function(p) {
    function h(re, Me) {
      var ye = re.length;
      re.push(Me);
      e: for (; 0 < ye; ) {
        var j = ye - 1 >>> 1, J = re[j];
        if (0 < x(J, Me)) re[j] = Me, re[ye] = J, ye = j;
        else break e;
      }
    }
    function m(re) {
      return re.length === 0 ? null : re[0];
    }
    function E(re) {
      if (re.length === 0) return null;
      var Me = re[0], ye = re.pop();
      if (ye !== Me) {
        re[0] = ye;
        e: for (var j = 0, J = re.length, Ze = J >>> 1; j < Ze; ) {
          var Pe = 2 * (j + 1) - 1, ht = re[Pe], rt = Pe + 1, Ae = re[rt];
          if (0 > x(ht, ye)) rt < J && 0 > x(Ae, ht) ? (re[j] = Ae, re[rt] = ye, j = rt) : (re[j] = ht, re[Pe] = ye, j = Pe);
          else if (rt < J && 0 > x(Ae, ye)) re[j] = Ae, re[rt] = ye, j = rt;
          else break e;
        }
      }
      return Me;
    }
    function x(re, Me) {
      var ye = re.sortIndex - Me.sortIndex;
      return ye !== 0 ? ye : re.id - Me.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var b = performance;
      p.unstable_now = function() {
        return b.now();
      };
    } else {
      var y = Date, N = y.now();
      p.unstable_now = function() {
        return y.now() - N;
      };
    }
    var k = [], T = [], z = 1, H = null, q = 3, G = !1, pe = !1, ie = !1, ce = typeof setTimeout == "function" ? setTimeout : null, be = typeof clearTimeout == "function" ? clearTimeout : null, ge = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function _e(re) {
      for (var Me = m(T); Me !== null; ) {
        if (Me.callback === null) E(T);
        else if (Me.startTime <= re) E(T), Me.sortIndex = Me.expirationTime, h(k, Me);
        else break;
        Me = m(T);
      }
    }
    function De(re) {
      if (ie = !1, _e(re), !pe) if (m(k) !== null) pe = !0, xe(ne);
      else {
        var Me = m(T);
        Me !== null && Ce(De, Me.startTime - re);
      }
    }
    function ne(re, Me) {
      pe = !1, ie && (ie = !1, be(Qe), Qe = -1), G = !0;
      var ye = q;
      try {
        for (_e(Me), H = m(k); H !== null && (!(H.expirationTime > Me) || re && !me()); ) {
          var j = H.callback;
          if (typeof j == "function") {
            H.callback = null, q = H.priorityLevel;
            var J = j(H.expirationTime <= Me);
            Me = p.unstable_now(), typeof J == "function" ? H.callback = J : H === m(k) && E(k), _e(Me);
          } else E(k);
          H = m(k);
        }
        if (H !== null) var Ze = !0;
        else {
          var Pe = m(T);
          Pe !== null && Ce(De, Pe.startTime - Me), Ze = !1;
        }
        return Ze;
      } finally {
        H = null, q = ye, G = !1;
      }
    }
    var Be = !1, Oe = null, Qe = -1, Je = 5, nt = -1;
    function me() {
      return !(p.unstable_now() - nt < Je);
    }
    function W() {
      if (Oe !== null) {
        var re = p.unstable_now();
        nt = re;
        var Me = !0;
        try {
          Me = Oe(!0, re);
        } finally {
          Me ? K() : (Be = !1, Oe = null);
        }
      } else Be = !1;
    }
    var K;
    if (typeof ge == "function") K = function() {
      ge(W);
    };
    else if (typeof MessageChannel < "u") {
      var Ee = new MessageChannel(), He = Ee.port2;
      Ee.port1.onmessage = W, K = function() {
        He.postMessage(null);
      };
    } else K = function() {
      ce(W, 0);
    };
    function xe(re) {
      Oe = re, Be || (Be = !0, K());
    }
    function Ce(re, Me) {
      Qe = ce(function() {
        re(p.unstable_now());
      }, Me);
    }
    p.unstable_IdlePriority = 5, p.unstable_ImmediatePriority = 1, p.unstable_LowPriority = 4, p.unstable_NormalPriority = 3, p.unstable_Profiling = null, p.unstable_UserBlockingPriority = 2, p.unstable_cancelCallback = function(re) {
      re.callback = null;
    }, p.unstable_continueExecution = function() {
      pe || G || (pe = !0, xe(ne));
    }, p.unstable_forceFrameRate = function(re) {
      0 > re || 125 < re ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Je = 0 < re ? Math.floor(1e3 / re) : 5;
    }, p.unstable_getCurrentPriorityLevel = function() {
      return q;
    }, p.unstable_getFirstCallbackNode = function() {
      return m(k);
    }, p.unstable_next = function(re) {
      switch (q) {
        case 1:
        case 2:
        case 3:
          var Me = 3;
          break;
        default:
          Me = q;
      }
      var ye = q;
      q = Me;
      try {
        return re();
      } finally {
        q = ye;
      }
    }, p.unstable_pauseExecution = function() {
    }, p.unstable_requestPaint = function() {
    }, p.unstable_runWithPriority = function(re, Me) {
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
      var ye = q;
      q = re;
      try {
        return Me();
      } finally {
        q = ye;
      }
    }, p.unstable_scheduleCallback = function(re, Me, ye) {
      var j = p.unstable_now();
      switch (typeof ye == "object" && ye !== null ? (ye = ye.delay, ye = typeof ye == "number" && 0 < ye ? j + ye : j) : ye = j, re) {
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
      return J = ye + J, re = { id: z++, callback: Me, priorityLevel: re, startTime: ye, expirationTime: J, sortIndex: -1 }, ye > j ? (re.sortIndex = ye, h(T, re), m(k) === null && re === m(T) && (ie ? (be(Qe), Qe = -1) : ie = !0, Ce(De, ye - j))) : (re.sortIndex = J, h(k, re), pe || G || (pe = !0, xe(ne))), re;
    }, p.unstable_shouldYield = me, p.unstable_wrapCallback = function(re) {
      var Me = q;
      return function() {
        var ye = q;
        q = Me;
        try {
          return re.apply(this, arguments);
        } finally {
          q = ye;
        }
      };
    };
  })(WS)), WS;
}
var YS = {};
var a2;
function wO() {
  return a2 || (a2 = 1, (function(p) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var h = !1, m = 5;
      function E(Re, qe) {
        var Rt = Re.length;
        Re.push(qe), y(Re, qe, Rt);
      }
      function x(Re) {
        return Re.length === 0 ? null : Re[0];
      }
      function b(Re) {
        if (Re.length === 0)
          return null;
        var qe = Re[0], Rt = Re.pop();
        return Rt !== qe && (Re[0] = Rt, N(Re, Rt, 0)), qe;
      }
      function y(Re, qe, Rt) {
        for (var Wt = Rt; Wt > 0; ) {
          var on = Wt - 1 >>> 1, yn = Re[on];
          if (k(yn, qe) > 0)
            Re[on] = qe, Re[Wt] = yn, Wt = on;
          else
            return;
        }
      }
      function N(Re, qe, Rt) {
        for (var Wt = Rt, on = Re.length, yn = on >>> 1; Wt < yn; ) {
          var fn = (Wt + 1) * 2 - 1, er = Re[fn], ln = fn + 1, qt = Re[ln];
          if (k(er, qe) < 0)
            ln < on && k(qt, er) < 0 ? (Re[Wt] = qt, Re[ln] = qe, Wt = ln) : (Re[Wt] = er, Re[fn] = qe, Wt = fn);
          else if (ln < on && k(qt, qe) < 0)
            Re[Wt] = qt, Re[ln] = qe, Wt = ln;
          else
            return;
        }
      }
      function k(Re, qe) {
        var Rt = Re.sortIndex - qe.sortIndex;
        return Rt !== 0 ? Rt : Re.id - qe.id;
      }
      var T = 1, z = 2, H = 3, q = 4, G = 5;
      function pe(Re, qe) {
      }
      var ie = typeof performance == "object" && typeof performance.now == "function";
      if (ie) {
        var ce = performance;
        p.unstable_now = function() {
          return ce.now();
        };
      } else {
        var be = Date, ge = be.now();
        p.unstable_now = function() {
          return be.now() - ge;
        };
      }
      var _e = 1073741823, De = -1, ne = 250, Be = 5e3, Oe = 1e4, Qe = _e, Je = [], nt = [], me = 1, W = null, K = H, Ee = !1, He = !1, xe = !1, Ce = typeof setTimeout == "function" ? setTimeout : null, re = typeof clearTimeout == "function" ? clearTimeout : null, Me = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ye(Re) {
        for (var qe = x(nt); qe !== null; ) {
          if (qe.callback === null)
            b(nt);
          else if (qe.startTime <= Re)
            b(nt), qe.sortIndex = qe.expirationTime, E(Je, qe);
          else
            return;
          qe = x(nt);
        }
      }
      function j(Re) {
        if (xe = !1, ye(Re), !He)
          if (x(Je) !== null)
            He = !0, Un(J);
          else {
            var qe = x(nt);
            qe !== null && Rr(j, qe.startTime - Re);
          }
      }
      function J(Re, qe) {
        He = !1, xe && (xe = !1, va()), Ee = !0;
        var Rt = K;
        try {
          var Wt;
          if (!h) return Ze(Re, qe);
        } finally {
          W = null, K = Rt, Ee = !1;
        }
      }
      function Ze(Re, qe) {
        var Rt = qe;
        for (ye(Rt), W = x(Je); W !== null && !(W.expirationTime > Rt && (!Re || vi())); ) {
          var Wt = W.callback;
          if (typeof Wt == "function") {
            W.callback = null, K = W.priorityLevel;
            var on = W.expirationTime <= Rt, yn = Wt(on);
            Rt = p.unstable_now(), typeof yn == "function" ? W.callback = yn : W === x(Je) && b(Je), ye(Rt);
          } else
            b(Je);
          W = x(Je);
        }
        if (W !== null)
          return !0;
        var fn = x(nt);
        return fn !== null && Rr(j, fn.startTime - Rt), !1;
      }
      function Pe(Re, qe) {
        switch (Re) {
          case T:
          case z:
          case H:
          case q:
          case G:
            break;
          default:
            Re = H;
        }
        var Rt = K;
        K = Re;
        try {
          return qe();
        } finally {
          K = Rt;
        }
      }
      function ht(Re) {
        var qe;
        switch (K) {
          case T:
          case z:
          case H:
            qe = H;
            break;
          default:
            qe = K;
            break;
        }
        var Rt = K;
        K = qe;
        try {
          return Re();
        } finally {
          K = Rt;
        }
      }
      function rt(Re) {
        var qe = K;
        return function() {
          var Rt = K;
          K = qe;
          try {
            return Re.apply(this, arguments);
          } finally {
            K = Rt;
          }
        };
      }
      function Ae(Re, qe, Rt) {
        var Wt = p.unstable_now(), on;
        if (typeof Rt == "object" && Rt !== null) {
          var yn = Rt.delay;
          typeof yn == "number" && yn > 0 ? on = Wt + yn : on = Wt;
        } else
          on = Wt;
        var fn;
        switch (Re) {
          case T:
            fn = De;
            break;
          case z:
            fn = ne;
            break;
          case G:
            fn = Qe;
            break;
          case q:
            fn = Oe;
            break;
          case H:
          default:
            fn = Be;
            break;
        }
        var er = on + fn, ln = {
          id: me++,
          callback: qe,
          priorityLevel: Re,
          startTime: on,
          expirationTime: er,
          sortIndex: -1
        };
        return on > Wt ? (ln.sortIndex = on, E(nt, ln), x(Je) === null && ln === x(nt) && (xe ? va() : xe = !0, Rr(j, on - Wt))) : (ln.sortIndex = er, E(Je, ln), !He && !Ee && (He = !0, Un(J))), ln;
      }
      function st() {
      }
      function dt() {
        !He && !Ee && (He = !0, Un(J));
      }
      function Gt() {
        return x(Je);
      }
      function An(Re) {
        Re.callback = null;
      }
      function Dr() {
        return K;
      }
      var Tn = !1, or = null, Wn = -1, Yn = m, qr = -1;
      function vi() {
        var Re = p.unstable_now() - qr;
        return !(Re < Yn);
      }
      function pa() {
      }
      function Zn(Re) {
        if (Re < 0 || Re > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Re > 0 ? Yn = Math.floor(1e3 / Re) : Yn = m;
      }
      var wn = function() {
        if (or !== null) {
          var Re = p.unstable_now();
          qr = Re;
          var qe = !0, Rt = !0;
          try {
            Rt = or(qe, Re);
          } finally {
            Rt ? Qn() : (Tn = !1, or = null);
          }
        } else
          Tn = !1;
      }, Qn;
      if (typeof Me == "function")
        Qn = function() {
          Me(wn);
        };
      else if (typeof MessageChannel < "u") {
        var Er = new MessageChannel(), qa = Er.port2;
        Er.port1.onmessage = wn, Qn = function() {
          qa.postMessage(null);
        };
      } else
        Qn = function() {
          Ce(wn, 0);
        };
      function Un(Re) {
        or = Re, Tn || (Tn = !0, Qn());
      }
      function Rr(Re, qe) {
        Wn = Ce(function() {
          Re(p.unstable_now());
        }, qe);
      }
      function va() {
        re(Wn), Wn = -1;
      }
      var Ka = pa, hi = null;
      p.unstable_IdlePriority = G, p.unstable_ImmediatePriority = T, p.unstable_LowPriority = q, p.unstable_NormalPriority = H, p.unstable_Profiling = hi, p.unstable_UserBlockingPriority = z, p.unstable_cancelCallback = An, p.unstable_continueExecution = dt, p.unstable_forceFrameRate = Zn, p.unstable_getCurrentPriorityLevel = Dr, p.unstable_getFirstCallbackNode = Gt, p.unstable_next = ht, p.unstable_pauseExecution = st, p.unstable_requestPaint = Ka, p.unstable_runWithPriority = Pe, p.unstable_scheduleCallback = Ae, p.unstable_shouldYield = vi, p.unstable_wrapCallback = rt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(YS)), YS;
}
var i2;
function x2() {
  return i2 || (i2 = 1, process.env.NODE_ENV === "production" ? Sy.exports = TO() : Sy.exports = wO()), Sy.exports;
}
var o2;
function xO() {
  if (o2) return Qa;
  o2 = 1;
  var p = Sv(), h = x2();
  function m(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var E = /* @__PURE__ */ new Set(), x = {};
  function b(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (x[n] = r, n = 0; n < r.length; n++) E.add(r[n]);
  }
  var N = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), k = Object.prototype.hasOwnProperty, T = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, z = {}, H = {};
  function q(n) {
    return k.call(H, n) ? !0 : k.call(z, n) ? !1 : T.test(n) ? H[n] = !0 : (z[n] = !0, !1);
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
  function pe(n, r, o, u) {
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
  function ie(n, r, o, u, c, d, _) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = _;
  }
  var ce = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ce[n] = new ie(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ce[r] = new ie(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ce[n] = new ie(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ce[n] = new ie(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ce[n] = new ie(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ce[n] = new ie(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ce[n] = new ie(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ce[n] = new ie(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ce[n] = new ie(n, 5, !1, n.toLowerCase(), null, !1, !1);
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
    ce[r] = new ie(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(be, ge);
    ce[r] = new ie(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(be, ge);
    ce[r] = new ie(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ce[n] = new ie(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ce.xlinkHref = new ie("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ce[n] = new ie(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function _e(n, r, o, u) {
    var c = ce.hasOwnProperty(r) ? ce[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (pe(r, o, c, u) && (o = null), u || c === null ? q(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : c.mustUseProperty ? n[c.propertyName] = o === null ? c.type === 3 ? !1 : "" : o : (r = c.attributeName, u = c.attributeNamespace, o === null ? n.removeAttribute(r) : (c = c.type, o = c === 3 || c === 4 && o === !0 ? "" : "" + o, u ? n.setAttributeNS(u, r, o) : n.setAttribute(r, o))));
  }
  var De = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ne = /* @__PURE__ */ Symbol.for("react.element"), Be = /* @__PURE__ */ Symbol.for("react.portal"), Oe = /* @__PURE__ */ Symbol.for("react.fragment"), Qe = /* @__PURE__ */ Symbol.for("react.strict_mode"), Je = /* @__PURE__ */ Symbol.for("react.profiler"), nt = /* @__PURE__ */ Symbol.for("react.provider"), me = /* @__PURE__ */ Symbol.for("react.context"), W = /* @__PURE__ */ Symbol.for("react.forward_ref"), K = /* @__PURE__ */ Symbol.for("react.suspense"), Ee = /* @__PURE__ */ Symbol.for("react.suspense_list"), He = /* @__PURE__ */ Symbol.for("react.memo"), xe = /* @__PURE__ */ Symbol.for("react.lazy"), Ce = /* @__PURE__ */ Symbol.for("react.offscreen"), re = Symbol.iterator;
  function Me(n) {
    return n === null || typeof n != "object" ? null : (n = re && n[re] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ye = Object.assign, j;
  function J(n) {
    if (j === void 0) try {
      throw Error();
    } catch (o) {
      var r = o.stack.trim().match(/\n( *(at )?)/);
      j = r && r[1] || "";
    }
    return `
` + j + n;
  }
  var Ze = !1;
  function Pe(n, r) {
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
        } catch (Y) {
          var u = Y;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (Y) {
          u = Y;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (Y) {
          u = Y;
        }
        n();
      }
    } catch (Y) {
      if (Y && u && typeof Y.stack == "string") {
        for (var c = Y.stack.split(`
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
      case Oe:
        return "Fragment";
      case Be:
        return "Portal";
      case Je:
        return "Profiler";
      case Qe:
        return "StrictMode";
      case K:
        return "Suspense";
      case Ee:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case me:
        return (n.displayName || "Context") + ".Consumer";
      case nt:
        return (n._context.displayName || "Context") + ".Provider";
      case W:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case He:
        return r = n.displayName || null, r !== null ? r : rt(n.type) || "Memo";
      case xe:
        r = n._payload, n = n._init;
        try {
          return rt(n(r));
        } catch {
        }
    }
    return null;
  }
  function Ae(n) {
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
        return r === Qe ? "StrictMode" : "Mode";
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
  function An(n) {
    n._valueTracker || (n._valueTracker = Gt(n));
  }
  function Dr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var o = r.getValue(), u = "";
    return n && (u = dt(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== o ? (r.setValue(n), !0) : !1;
  }
  function Tn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function or(n, r) {
    var o = r.checked;
    return ye({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function Wn(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    o = st(r.value != null ? r.value : o), n._wrapperState = { initialChecked: u, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Yn(n, r) {
    r = r.checked, r != null && _e(n, "checked", r, !1);
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
    (r !== "number" || Tn(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
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
  function Qn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(m(91));
    return ye({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Er(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null) throw Error(m(92));
        if (Zn(o)) {
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
  function Re(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var qe = {
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
  Object.keys(qe).forEach(function(n) {
    Rt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), qe[r] = qe[n];
    });
  });
  function Wt(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || qe.hasOwnProperty(n) && qe[n] ? ("" + r).trim() : r + "px";
  }
  function on(n, r) {
    n = n.style;
    for (var o in r) if (r.hasOwnProperty(o)) {
      var u = o.indexOf("--") === 0, c = Wt(o, r[o], u);
      o === "float" && (o = "cssFloat"), u ? n.setProperty(o, c) : n[o] = c;
    }
  }
  var yn = ye({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function fn(n, r) {
    if (r) {
      if (yn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(m(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(m(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(m(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(m(62));
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
    if (n = et(n)) {
      if (typeof Kt != "function") throw Error(m(280));
      var r = n.stateNode;
      r && (r = Sn(r), Kt(n.stateNode, n.type, r));
    }
  }
  function Wi(n) {
    ha ? br ? br.push(n) : br = [n] : ha = n;
  }
  function ol() {
    if (ha) {
      var n = ha, r = br;
      if (br = ha = null, ka(n), r) for (n = 0; n < r.length; n++) ka(r[n]);
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
      Co = !1, (ha !== null || br !== null) && (_o(), ol());
    }
  }
  function Or(n, r) {
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
    if (o && typeof o != "function") throw Error(m(231, r, typeof o));
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
    var Y = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, Y);
    } catch (fe) {
      this.onError(fe);
    }
  }
  var Xa = !1, yi = null, gi = !1, O = null, oe = { onError: function(n) {
    Xa = !0, yi = n;
  } };
  function ke(n, r, o, u, c, d, _, w, L) {
    Xa = !1, yi = null, mi.apply(oe, arguments);
  }
  function Ie(n, r, o, u, c, d, _, w, L) {
    if (ke.apply(this, arguments), Xa) {
      if (Xa) {
        var Y = yi;
        Xa = !1, yi = null;
      } else throw Error(m(198));
      gi || (gi = !0, O = Y);
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
  function wt(n) {
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
          if (!_) throw Error(m(189));
        }
      }
      if (o.alternate !== u) throw Error(m(190));
    }
    if (o.tag !== 3) throw Error(m(188));
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
  var dn = h.unstable_scheduleCallback, ur = h.unstable_cancelCallback, Ja = h.unstable_shouldYield, Za = h.unstable_requestPaint, _t = h.unstable_now, Et = h.unstable_getCurrentPriorityLevel, ei = h.unstable_ImmediatePriority, sl = h.unstable_UserBlockingPriority, cl = h.unstable_NormalPriority, Eo = h.unstable_LowPriority, au = h.unstable_IdlePriority, Ro = null, Kr = null;
  function ts(n) {
    if (Kr && typeof Kr.onCommitFiberRoot == "function") try {
      Kr.onCommitFiberRoot(Ro, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Nr = Math.clz32 ? Math.clz32 : iu, Sc = Math.log, _c = Math.LN2;
  function iu(n) {
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
      var w = _ & ~c;
      w !== 0 ? u = ti(w) : (d &= _, d !== 0 && (u = ti(d)));
    } else _ = o & ~c, _ !== 0 ? u = ti(_) : d !== 0 && (u = ti(d));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && (r & c) === 0 && (c = u & -u, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if ((u & 4) !== 0 && (u |= o & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) o = 31 - Nr(r), c = 1 << o, u |= n[o], r &= ~c;
    return u;
  }
  function ou(n, r) {
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
      L === -1 ? ((w & o) === 0 || (w & u) !== 0) && (c[_] = ou(w, r)) : L <= r && (n.expiredLanes |= w), d &= ~w;
    }
  }
  function To(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function lu() {
    var n = bo;
    return bo <<= 1, (bo & 4194240) === 0 && (bo = 64), n;
  }
  function uu(n) {
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
  function Qi(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var u = 31 - Nr(o), c = 1 << u;
      c & r | n[u] & r && (n[u] |= r), o &= ~c;
    }
  }
  var Ft = 0;
  function su(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var jt, ns, Si, vt, cu, sr = !1, _i = [], Mr = null, Ci = null, pn = null, Xt = /* @__PURE__ */ new Map(), wo = /* @__PURE__ */ new Map(), Gn = [], Ar = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
      var o = St(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = mt(o), r !== null) {
            n.blockedOn = r, cu(n.priority, function() {
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
      var o = pu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
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
  function Oa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, sr || (sr = !0, h.unstable_scheduleCallback(h.unstable_NormalPriority, sd)));
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
    for (Mr !== null && Oa(Mr, n), Ci !== null && Oa(Ci, n), pn !== null && Oa(pn, n), Xt.forEach(r), wo.forEach(r), o = 0; o < Gn.length; o++) u = Gn[o], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < Gn.length && (o = Gn[0], o.blockedOn === null); ) as(o), o.blockedOn === null && Gn.shift();
  }
  var Ei = De.ReactCurrentBatchConfig, La = !0;
  function fu(n, r, o, u) {
    var c = Ft, d = Ei.transition;
    Ei.transition = null;
    try {
      Ft = 1, ko(n, r, o, u);
    } finally {
      Ft = c, Ei.transition = d;
    }
  }
  function du(n, r, o, u) {
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
      var c = pu(n, r, o, u);
      if (c === null) Nc(n, r, u, vl, o), Da(n, u);
      else if (rs(c, n, r, o, u)) u.stopPropagation();
      else if (Da(n, u), r & 4 && -1 < Ar.indexOf(n)) {
        for (; c !== null; ) {
          var d = et(c);
          if (d !== null && jt(d), d = pu(n, r, o, u), d === null && Nc(n, r, u, vl, o), d === c) break;
          c = d;
        }
        c !== null && u.stopPropagation();
      } else Nc(n, r, u, null, o);
    }
  }
  var vl = null;
  function pu(n, r, o, u) {
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
  function vu(n) {
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
        switch (Et()) {
          case ei:
            return 1;
          case sl:
            return 4;
          case cl:
          case Eo:
            return 16;
          case au:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ai = null, S = null, D = null;
  function $() {
    if (D) return D;
    var n, r = S, o = r.length, u, c = "value" in ai ? ai.value : ai.textContent, d = c.length;
    for (n = 0; n < o && r[n] === c[n]; n++) ;
    var _ = o - n;
    for (u = 1; u <= _ && r[o - u] === c[d - u]; u++) ;
    return D = c.slice(n, 1 < u ? 1 - u : void 0);
  }
  function X(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Se() {
    return !0;
  }
  function at() {
    return !1;
  }
  function we(n) {
    function r(o, u, c, d, _) {
      this._reactName = o, this._targetInst = c, this.type = u, this.nativeEvent = d, this.target = _, this.currentTarget = null;
      for (var w in n) n.hasOwnProperty(w) && (o = n[w], this[w] = o ? o(d) : d[w]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Se : at, this.isPropagationStopped = at, this;
    }
    return ye(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = Se);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = Se);
    }, persist: function() {
    }, isPersistent: Se }), r;
  }
  var lt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Dt = we(lt), zt = ye({}, lt, { view: 0, detail: 0 }), sn = we(zt), Jt, bt, Zt, gn = ye({}, zt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: vd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Zt && (Zt && n.type === "mousemove" ? (Jt = n.screenX - Zt.screenX, bt = n.screenY - Zt.screenY) : bt = Jt = 0, Zt = n), Jt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : bt;
  } }), Do = we(gn), is = ye({}, gn, { dataTransfer: 0 }), Gi = we(is), os = ye({}, zt, { relatedTarget: 0 }), hl = we(os), cd = ye({}, lt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Cc = we(cd), fd = ye({}, lt, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Ev = we(fd), dd = ye({}, lt, { data: 0 }), pd = we(dd), Rv = {
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
  }, bv = {
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
  }, ky = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function qi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = ky[n]) ? !!r[n] : !1;
  }
  function vd() {
    return qi;
  }
  var hd = ye({}, zt, { key: function(n) {
    if (n.key) {
      var r = Rv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = X(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? bv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: vd, charCode: function(n) {
    return n.type === "keypress" ? X(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? X(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), md = we(hd), yd = ye({}, gn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Tv = we(yd), Ec = ye({}, zt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: vd }), wv = we(Ec), Xr = ye({}, lt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ki = we(Xr), jn = ye({}, gn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Xi = we(jn), gd = [9, 13, 27, 32], hu = N && "CompositionEvent" in window, ls = null;
  N && "documentMode" in document && (ls = document.documentMode);
  var us = N && "TextEvent" in window && !ls, xv = N && (!hu || ls && 8 < ls && 11 >= ls), kv = " ", Rc = !1;
  function Dv(n, r) {
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
  function Ov(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var mu = !1;
  function Lv(n, r) {
    switch (n) {
      case "compositionend":
        return Ov(r);
      case "keypress":
        return r.which !== 32 ? null : (Rc = !0, kv);
      case "textInput":
        return n = r.data, n === kv && Rc ? null : n;
      default:
        return null;
    }
  }
  function Dy(n, r) {
    if (mu) return n === "compositionend" || !hu && Dv(n, r) ? (n = $(), D = S = ai = null, mu = !1, n) : null;
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
        return xv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Oy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Nv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Oy[n.type] : r === "textarea";
  }
  function Sd(n, r, o, u) {
    Wi(u), r = vs(r, "onChange"), 0 < r.length && (o = new Dt("onChange", "change", null, o, u), n.push({ event: o, listeners: r }));
  }
  var Ri = null, ml = null;
  function Mv(n) {
    Sl(n, 0);
  }
  function ss(n) {
    var r = oi(n);
    if (Dr(r)) return n;
  }
  function Ly(n, r) {
    if (n === "change") return r;
  }
  var Av = !1;
  if (N) {
    var _d;
    if (N) {
      var Cd = "oninput" in document;
      if (!Cd) {
        var Uv = document.createElement("div");
        Uv.setAttribute("oninput", "return;"), Cd = typeof Uv.oninput == "function";
      }
      _d = Cd;
    } else _d = !1;
    Av = _d && (!document.documentMode || 9 < document.documentMode);
  }
  function jv() {
    Ri && (Ri.detachEvent("onpropertychange", zv), ml = Ri = null);
  }
  function zv(n) {
    if (n.propertyName === "value" && ss(ml)) {
      var r = [];
      Sd(r, ml, n, qt(n)), ul(Mv, r);
    }
  }
  function Ny(n, r, o) {
    n === "focusin" ? (jv(), Ri = r, ml = o, Ri.attachEvent("onpropertychange", zv)) : n === "focusout" && jv();
  }
  function Pv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return ss(ml);
  }
  function My(n, r) {
    if (n === "click") return ss(r);
  }
  function Fv(n, r) {
    if (n === "input" || n === "change") return ss(r);
  }
  function Ay(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ii = typeof Object.is == "function" ? Object.is : Ay;
  function cs(n, r) {
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
  function Vv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function bc(n, r) {
    var o = Vv(n);
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
      o = Vv(o);
    }
  }
  function Oo(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Oo(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function fs() {
    for (var n = window, r = Tn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) n = r.contentWindow;
      else break;
      r = Tn(n.document);
    }
    return r;
  }
  function Tc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function yu(n) {
    var r = fs(), o = n.focusedElem, u = n.selectionRange;
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
  var Uy = N && "documentMode" in document && 11 >= document.documentMode, gu = null, Ed = null, ds = null, Rd = !1;
  function bd(n, r, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Rd || gu == null || gu !== Tn(u) || (u = gu, "selectionStart" in u && Tc(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), ds && cs(ds, u) || (ds = u, u = vs(Ed, "onSelect"), 0 < u.length && (r = new Dt("onSelect", "select", null, r, o), n.push({ event: r, listeners: u }), r.target = gu)));
  }
  function wc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var yl = { animationend: wc("Animation", "AnimationEnd"), animationiteration: wc("Animation", "AnimationIteration"), animationstart: wc("Animation", "AnimationStart"), transitionend: wc("Transition", "TransitionEnd") }, cr = {}, Td = {};
  N && (Td = document.createElement("div").style, "AnimationEvent" in window || (delete yl.animationend.animation, delete yl.animationiteration.animation, delete yl.animationstart.animation), "TransitionEvent" in window || delete yl.transitionend.transition);
  function xc(n) {
    if (cr[n]) return cr[n];
    if (!yl[n]) return n;
    var r = yl[n], o;
    for (o in r) if (r.hasOwnProperty(o) && o in Td) return cr[n] = r[o];
    return n;
  }
  var Hv = xc("animationend"), Iv = xc("animationiteration"), Bv = xc("animationstart"), $v = xc("transitionend"), wd = /* @__PURE__ */ new Map(), kc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Na(n, r) {
    wd.set(n, r), b(r, [n]);
  }
  for (var xd = 0; xd < kc.length; xd++) {
    var gl = kc[xd], jy = gl.toLowerCase(), zy = gl[0].toUpperCase() + gl.slice(1);
    Na(jy, "on" + zy);
  }
  Na(Hv, "onAnimationEnd"), Na(Iv, "onAnimationIteration"), Na(Bv, "onAnimationStart"), Na("dblclick", "onDoubleClick"), Na("focusin", "onFocus"), Na("focusout", "onBlur"), Na($v, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), b("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), b("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), b("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), b("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), b("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), b("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ps = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), kd = new Set("cancel close invalid load scroll toggle".split(" ").concat(ps));
  function Dc(n, r, o) {
    var u = n.type || "unknown-event";
    n.currentTarget = o, Ie(u, r, void 0, n), n.currentTarget = null;
  }
  function Sl(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var u = n[o], c = u.event;
      u = u.listeners;
      e: {
        var d = void 0;
        if (r) for (var _ = u.length - 1; 0 <= _; _--) {
          var w = u[_], L = w.instance, Y = w.currentTarget;
          if (w = w.listener, L !== d && c.isPropagationStopped()) break e;
          Dc(c, w, Y), d = L;
        }
        else for (_ = 0; _ < u.length; _++) {
          if (w = u[_], L = w.instance, Y = w.currentTarget, w = w.listener, L !== d && c.isPropagationStopped()) break e;
          Dc(c, w, Y), d = L;
        }
      }
    }
    if (gi) throw n = O, gi = !1, O = null, n;
  }
  function Yt(n, r) {
    var o = r[ys];
    o === void 0 && (o = r[ys] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    o.has(u) || (Wv(r, n, 2, !1), o.add(u));
  }
  function Oc(n, r, o) {
    var u = 0;
    r && (u |= 4), Wv(o, n, u, r);
  }
  var Lc = "_reactListening" + Math.random().toString(36).slice(2);
  function Su(n) {
    if (!n[Lc]) {
      n[Lc] = !0, E.forEach(function(o) {
        o !== "selectionchange" && (kd.has(o) || Oc(o, !1, n), Oc(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Lc] || (r[Lc] = !0, Oc("selectionchange", !1, r));
    }
  }
  function Wv(n, r, o, u) {
    switch (vu(r)) {
      case 1:
        var c = fu;
        break;
      case 4:
        c = du;
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
      var Y = d, fe = qt(o), ve = [];
      e: {
        var se = wd.get(n);
        if (se !== void 0) {
          var je = Dt, $e = n;
          switch (n) {
            case "keypress":
              if (X(o) === 0) break e;
            case "keydown":
            case "keyup":
              je = md;
              break;
            case "focusin":
              $e = "focus", je = hl;
              break;
            case "focusout":
              $e = "blur", je = hl;
              break;
            case "beforeblur":
            case "afterblur":
              je = hl;
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
              je = Do;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              je = Gi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              je = wv;
              break;
            case Hv:
            case Iv:
            case Bv:
              je = Cc;
              break;
            case $v:
              je = Ki;
              break;
            case "scroll":
              je = sn;
              break;
            case "wheel":
              je = Xi;
              break;
            case "copy":
            case "cut":
            case "paste":
              je = Ev;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              je = Tv;
          }
          var Ge = (r & 4) !== 0, Nn = !Ge && n === "scroll", P = Ge ? se !== null ? se + "Capture" : null : se;
          Ge = [];
          for (var A = Y, I; A !== null; ) {
            I = A;
            var de = I.stateNode;
            if (I.tag === 5 && de !== null && (I = de, P !== null && (de = Or(A, P), de != null && Ge.push(_u(A, de, I)))), Nn) break;
            A = A.return;
          }
          0 < Ge.length && (se = new je(se, $e, null, o, fe), ve.push({ event: se, listeners: Ge }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (se = n === "mouseover" || n === "pointerover", je = n === "mouseout" || n === "pointerout", se && o !== ln && ($e = o.relatedTarget || o.fromElement) && (Cl($e) || $e[Ji])) break e;
          if ((je || se) && (se = fe.window === fe ? fe : (se = fe.ownerDocument) ? se.defaultView || se.parentWindow : window, je ? ($e = o.relatedTarget || o.toElement, je = Y, $e = $e ? Cl($e) : null, $e !== null && (Nn = St($e), $e !== Nn || $e.tag !== 5 && $e.tag !== 6) && ($e = null)) : (je = null, $e = Y), je !== $e)) {
            if (Ge = Do, de = "onMouseLeave", P = "onMouseEnter", A = "mouse", (n === "pointerout" || n === "pointerover") && (Ge = Tv, de = "onPointerLeave", P = "onPointerEnter", A = "pointer"), Nn = je == null ? se : oi(je), I = $e == null ? se : oi($e), se = new Ge(de, A + "leave", je, o, fe), se.target = Nn, se.relatedTarget = I, de = null, Cl(fe) === Y && (Ge = new Ge(P, A + "enter", $e, o, fe), Ge.target = I, Ge.relatedTarget = Nn, de = Ge), Nn = de, je && $e) t: {
              for (Ge = je, P = $e, A = 0, I = Ge; I; I = Lo(I)) A++;
              for (I = 0, de = P; de; de = Lo(de)) I++;
              for (; 0 < A - I; ) Ge = Lo(Ge), A--;
              for (; 0 < I - A; ) P = Lo(P), I--;
              for (; A--; ) {
                if (Ge === P || P !== null && Ge === P.alternate) break t;
                Ge = Lo(Ge), P = Lo(P);
              }
              Ge = null;
            }
            else Ge = null;
            je !== null && Yv(ve, se, je, Ge, !1), $e !== null && Nn !== null && Yv(ve, Nn, $e, Ge, !0);
          }
        }
        e: {
          if (se = Y ? oi(Y) : window, je = se.nodeName && se.nodeName.toLowerCase(), je === "select" || je === "input" && se.type === "file") var We = Ly;
          else if (Nv(se)) if (Av) We = Fv;
          else {
            We = Pv;
            var ot = Ny;
          }
          else (je = se.nodeName) && je.toLowerCase() === "input" && (se.type === "checkbox" || se.type === "radio") && (We = My);
          if (We && (We = We(n, Y))) {
            Sd(ve, We, o, fe);
            break e;
          }
          ot && ot(n, se, Y), n === "focusout" && (ot = se._wrapperState) && ot.controlled && se.type === "number" && pa(se, "number", se.value);
        }
        switch (ot = Y ? oi(Y) : window, n) {
          case "focusin":
            (Nv(ot) || ot.contentEditable === "true") && (gu = ot, Ed = Y, ds = null);
            break;
          case "focusout":
            ds = Ed = gu = null;
            break;
          case "mousedown":
            Rd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Rd = !1, bd(ve, o, fe);
            break;
          case "selectionchange":
            if (Uy) break;
          case "keydown":
          case "keyup":
            bd(ve, o, fe);
        }
        var ut;
        if (hu) e: {
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
        else mu ? Dv(n, o) && (pt = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (pt = "onCompositionStart");
        pt && (xv && o.locale !== "ko" && (mu || pt !== "onCompositionStart" ? pt === "onCompositionEnd" && mu && (ut = $()) : (ai = fe, S = "value" in ai ? ai.value : ai.textContent, mu = !0)), ot = vs(Y, pt), 0 < ot.length && (pt = new pd(pt, n, null, o, fe), ve.push({ event: pt, listeners: ot }), ut ? pt.data = ut : (ut = Ov(o), ut !== null && (pt.data = ut)))), (ut = us ? Lv(n, o) : Dy(n, o)) && (Y = vs(Y, "onBeforeInput"), 0 < Y.length && (fe = new pd("onBeforeInput", "beforeinput", null, o, fe), ve.push({ event: fe, listeners: Y }), fe.data = ut));
      }
      Sl(ve, r);
    });
  }
  function _u(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function vs(n, r) {
    for (var o = r + "Capture", u = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Or(n, o), d != null && u.unshift(_u(n, d, c)), d = Or(n, r), d != null && u.push(_u(n, d, c))), n = n.return;
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
  function Yv(n, r, o, u, c) {
    for (var d = r._reactName, _ = []; o !== null && o !== u; ) {
      var w = o, L = w.alternate, Y = w.stateNode;
      if (L !== null && L === u) break;
      w.tag === 5 && Y !== null && (w = Y, c ? (L = Or(o, d), L != null && _.unshift(_u(o, L, w))) : c || (L = Or(o, d), L != null && _.push(_u(o, L, w)))), o = o.return;
    }
    _.length !== 0 && n.push({ event: r, listeners: _ });
  }
  var Qv = /\r\n?/g, Py = /\u0000|\uFFFD/g;
  function Gv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Qv, `
`).replace(Py, "");
  }
  function Mc(n, r, o) {
    if (r = Gv(r), Gv(n) !== r && o) throw Error(m(425));
  }
  function No() {
  }
  var hs = null, _l = null;
  function Ac(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Uc = typeof setTimeout == "function" ? setTimeout : void 0, Dd = typeof clearTimeout == "function" ? clearTimeout : void 0, qv = typeof Promise == "function" ? Promise : void 0, Cu = typeof queueMicrotask == "function" ? queueMicrotask : typeof qv < "u" ? function(n) {
    return qv.resolve(null).then(n).catch(jc);
  } : Uc;
  function jc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Eu(n, r) {
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
  function Kv(n) {
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
  var Mo = Math.random().toString(36).slice(2), Ti = "__reactFiber$" + Mo, ms = "__reactProps$" + Mo, Ji = "__reactContainer$" + Mo, ys = "__reactEvents$" + Mo, Ru = "__reactListeners$" + Mo, Fy = "__reactHandles$" + Mo;
  function Cl(n) {
    var r = n[Ti];
    if (r) return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[Ji] || o[Ti]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null) for (n = Kv(n); n !== null; ) {
          if (o = n[Ti]) return o;
          n = Kv(n);
        }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function et(n) {
    return n = n[Ti] || n[Ji], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function oi(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(m(33));
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
  function Xe(n, r) {
    Ma++, Nt[Ma] = n.current, n.current = r;
  }
  var Tr = {}, Rn = Aa(Tr), qn = Aa(!1), Jr = Tr;
  function Zr(n, r) {
    var o = n.type.contextTypes;
    if (!o) return Tr;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in o) c[d] = r[d];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function zn(n) {
    return n = n.childContextTypes, n != null;
  }
  function bu() {
    cn(qn), cn(Rn);
  }
  function Xv(n, r, o) {
    if (Rn.current !== Tr) throw Error(m(168));
    Xe(Rn, r), Xe(qn, o);
  }
  function gs(n, r, o) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return o;
    u = u.getChildContext();
    for (var c in u) if (!(c in r)) throw Error(m(108, Ae(n) || "Unknown", c));
    return ye({}, o, u);
  }
  function tr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Tr, Jr = Rn.current, Xe(Rn, n), Xe(qn, qn.current), !0;
  }
  function zc(n, r, o) {
    var u = n.stateNode;
    if (!u) throw Error(m(169));
    o ? (n = gs(n, r, Jr), u.__reactInternalMemoizedMergedChildContext = n, cn(qn), cn(Rn), Xe(Rn, n)) : cn(qn), Xe(qn, o);
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
  var Uo = [], jo = 0, zo = null, eo = 0, Pn = [], Ua = 0, ya = null, ki = 1, Di = "";
  function El(n, r) {
    Uo[jo++] = eo, Uo[jo++] = zo, zo = n, eo = r;
  }
  function Jv(n, r, o) {
    Pn[Ua++] = ki, Pn[Ua++] = Di, Pn[Ua++] = ya, ya = n;
    var u = ki;
    n = Di;
    var c = 32 - Nr(u) - 1;
    u &= ~(1 << c), o += 1;
    var d = 32 - Nr(r) + c;
    if (30 < d) {
      var _ = c - c % 5;
      d = (u & (1 << _) - 1).toString(32), u >>= _, c -= _, ki = 1 << 32 - Nr(r) + c | o << c | u, Di = d + n;
    } else ki = 1 << d | o << c | u, Di = n;
  }
  function Fc(n) {
    n.return !== null && (El(n, 1), Jv(n, 1, 0));
  }
  function Vc(n) {
    for (; n === zo; ) zo = Uo[--jo], Uo[jo] = null, eo = Uo[--jo], Uo[jo] = null;
    for (; n === ya; ) ya = Pn[--Ua], Pn[Ua] = null, Di = Pn[--Ua], Pn[Ua] = null, ki = Pn[--Ua], Pn[Ua] = null;
  }
  var ea = null, ta = null, hn = !1, ja = null;
  function Od(n, r) {
    var o = Ha(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function Zv(n, r) {
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
  function Nd(n) {
    if (hn) {
      var r = ta;
      if (r) {
        var o = r;
        if (!Zv(n, r)) {
          if (Ld(n)) throw Error(m(418));
          r = bi(o.nextSibling);
          var u = ea;
          r && Zv(n, r) ? Od(u, o) : (n.flags = n.flags & -4097 | 2, hn = !1, ea = n);
        }
      } else {
        if (Ld(n)) throw Error(m(418));
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
      if (Ld(n)) throw Ss(), Error(m(418));
      for (; r; ) Od(n, r), r = bi(r.nextSibling);
    }
    if (Kn(n), n.tag === 13) {
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
  function Ss() {
    for (var n = ta; n; ) n = bi(n.nextSibling);
  }
  function Po() {
    ta = ea = null, hn = !1;
  }
  function to(n) {
    ja === null ? ja = [n] : ja.push(n);
  }
  var Vy = De.ReactCurrentBatchConfig;
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
          var w = c.refs;
          _ === null ? delete w[d] : w[d] = _;
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
  function eh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function bl(n) {
    function r(P, A) {
      if (n) {
        var I = P.deletions;
        I === null ? (P.deletions = [A], P.flags |= 16) : I.push(A);
      }
    }
    function o(P, A) {
      if (!n) return null;
      for (; A !== null; ) r(P, A), A = A.sibling;
      return null;
    }
    function u(P, A) {
      for (P = /* @__PURE__ */ new Map(); A !== null; ) A.key !== null ? P.set(A.key, A) : P.set(A.index, A), A = A.sibling;
      return P;
    }
    function c(P, A) {
      return P = Yo(P, A), P.index = 0, P.sibling = null, P;
    }
    function d(P, A, I) {
      return P.index = I, n ? (I = P.alternate, I !== null ? (I = I.index, I < A ? (P.flags |= 2, A) : I) : (P.flags |= 2, A)) : (P.flags |= 1048576, A);
    }
    function _(P) {
      return n && P.alternate === null && (P.flags |= 2), P;
    }
    function w(P, A, I, de) {
      return A === null || A.tag !== 6 ? (A = sp(I, P.mode, de), A.return = P, A) : (A = c(A, I), A.return = P, A);
    }
    function L(P, A, I, de) {
      var We = I.type;
      return We === Oe ? fe(P, A, I.props.children, de, I.key) : A !== null && (A.elementType === We || typeof We == "object" && We !== null && We.$$typeof === xe && eh(We) === A.type) ? (de = c(A, I.props), de.ref = Rl(P, A, I), de.return = P, de) : (de = qs(I.type, I.key, I.props, null, P.mode, de), de.ref = Rl(P, A, I), de.return = P, de);
    }
    function Y(P, A, I, de) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== I.containerInfo || A.stateNode.implementation !== I.implementation ? (A = Ef(I, P.mode, de), A.return = P, A) : (A = c(A, I.children || []), A.return = P, A);
    }
    function fe(P, A, I, de, We) {
      return A === null || A.tag !== 7 ? (A = lo(I, P.mode, de, We), A.return = P, A) : (A = c(A, I), A.return = P, A);
    }
    function ve(P, A, I) {
      if (typeof A == "string" && A !== "" || typeof A == "number") return A = sp("" + A, P.mode, I), A.return = P, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case ne:
            return I = qs(A.type, A.key, A.props, null, P.mode, I), I.ref = Rl(P, null, A), I.return = P, I;
          case Be:
            return A = Ef(A, P.mode, I), A.return = P, A;
          case xe:
            var de = A._init;
            return ve(P, de(A._payload), I);
        }
        if (Zn(A) || Me(A)) return A = lo(A, P.mode, I, null), A.return = P, A;
        Ic(P, A);
      }
      return null;
    }
    function se(P, A, I, de) {
      var We = A !== null ? A.key : null;
      if (typeof I == "string" && I !== "" || typeof I == "number") return We !== null ? null : w(P, A, "" + I, de);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case ne:
            return I.key === We ? L(P, A, I, de) : null;
          case Be:
            return I.key === We ? Y(P, A, I, de) : null;
          case xe:
            return We = I._init, se(
              P,
              A,
              We(I._payload),
              de
            );
        }
        if (Zn(I) || Me(I)) return We !== null ? null : fe(P, A, I, de, null);
        Ic(P, I);
      }
      return null;
    }
    function je(P, A, I, de, We) {
      if (typeof de == "string" && de !== "" || typeof de == "number") return P = P.get(I) || null, w(A, P, "" + de, We);
      if (typeof de == "object" && de !== null) {
        switch (de.$$typeof) {
          case ne:
            return P = P.get(de.key === null ? I : de.key) || null, L(A, P, de, We);
          case Be:
            return P = P.get(de.key === null ? I : de.key) || null, Y(A, P, de, We);
          case xe:
            var ot = de._init;
            return je(P, A, I, ot(de._payload), We);
        }
        if (Zn(de) || Me(de)) return P = P.get(I) || null, fe(A, P, de, We, null);
        Ic(A, de);
      }
      return null;
    }
    function $e(P, A, I, de) {
      for (var We = null, ot = null, ut = A, pt = A = 0, ar = null; ut !== null && pt < I.length; pt++) {
        ut.index > pt ? (ar = ut, ut = null) : ar = ut.sibling;
        var It = se(P, ut, I[pt], de);
        if (It === null) {
          ut === null && (ut = ar);
          break;
        }
        n && ut && It.alternate === null && r(P, ut), A = d(It, A, pt), ot === null ? We = It : ot.sibling = It, ot = It, ut = ar;
      }
      if (pt === I.length) return o(P, ut), hn && El(P, pt), We;
      if (ut === null) {
        for (; pt < I.length; pt++) ut = ve(P, I[pt], de), ut !== null && (A = d(ut, A, pt), ot === null ? We = ut : ot.sibling = ut, ot = ut);
        return hn && El(P, pt), We;
      }
      for (ut = u(P, ut); pt < I.length; pt++) ar = je(ut, P, pt, I[pt], de), ar !== null && (n && ar.alternate !== null && ut.delete(ar.key === null ? pt : ar.key), A = d(ar, A, pt), ot === null ? We = ar : ot.sibling = ar, ot = ar);
      return n && ut.forEach(function(qo) {
        return r(P, qo);
      }), hn && El(P, pt), We;
    }
    function Ge(P, A, I, de) {
      var We = Me(I);
      if (typeof We != "function") throw Error(m(150));
      if (I = We.call(I), I == null) throw Error(m(151));
      for (var ot = We = null, ut = A, pt = A = 0, ar = null, It = I.next(); ut !== null && !It.done; pt++, It = I.next()) {
        ut.index > pt ? (ar = ut, ut = null) : ar = ut.sibling;
        var qo = se(P, ut, It.value, de);
        if (qo === null) {
          ut === null && (ut = ar);
          break;
        }
        n && ut && qo.alternate === null && r(P, ut), A = d(qo, A, pt), ot === null ? We = qo : ot.sibling = qo, ot = qo, ut = ar;
      }
      if (It.done) return o(
        P,
        ut
      ), hn && El(P, pt), We;
      if (ut === null) {
        for (; !It.done; pt++, It = I.next()) It = ve(P, It.value, de), It !== null && (A = d(It, A, pt), ot === null ? We = It : ot.sibling = It, ot = It);
        return hn && El(P, pt), We;
      }
      for (ut = u(P, ut); !It.done; pt++, It = I.next()) It = je(ut, P, pt, It.value, de), It !== null && (n && It.alternate !== null && ut.delete(It.key === null ? pt : It.key), A = d(It, A, pt), ot === null ? We = It : ot.sibling = It, ot = It);
      return n && ut.forEach(function(jh) {
        return r(P, jh);
      }), hn && El(P, pt), We;
    }
    function Nn(P, A, I, de) {
      if (typeof I == "object" && I !== null && I.type === Oe && I.key === null && (I = I.props.children), typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case ne:
            e: {
              for (var We = I.key, ot = A; ot !== null; ) {
                if (ot.key === We) {
                  if (We = I.type, We === Oe) {
                    if (ot.tag === 7) {
                      o(P, ot.sibling), A = c(ot, I.props.children), A.return = P, P = A;
                      break e;
                    }
                  } else if (ot.elementType === We || typeof We == "object" && We !== null && We.$$typeof === xe && eh(We) === ot.type) {
                    o(P, ot.sibling), A = c(ot, I.props), A.ref = Rl(P, ot, I), A.return = P, P = A;
                    break e;
                  }
                  o(P, ot);
                  break;
                } else r(P, ot);
                ot = ot.sibling;
              }
              I.type === Oe ? (A = lo(I.props.children, P.mode, de, I.key), A.return = P, P = A) : (de = qs(I.type, I.key, I.props, null, P.mode, de), de.ref = Rl(P, A, I), de.return = P, P = de);
            }
            return _(P);
          case Be:
            e: {
              for (ot = I.key; A !== null; ) {
                if (A.key === ot) if (A.tag === 4 && A.stateNode.containerInfo === I.containerInfo && A.stateNode.implementation === I.implementation) {
                  o(P, A.sibling), A = c(A, I.children || []), A.return = P, P = A;
                  break e;
                } else {
                  o(P, A);
                  break;
                }
                else r(P, A);
                A = A.sibling;
              }
              A = Ef(I, P.mode, de), A.return = P, P = A;
            }
            return _(P);
          case xe:
            return ot = I._init, Nn(P, A, ot(I._payload), de);
        }
        if (Zn(I)) return $e(P, A, I, de);
        if (Me(I)) return Ge(P, A, I, de);
        Ic(P, I);
      }
      return typeof I == "string" && I !== "" || typeof I == "number" ? (I = "" + I, A !== null && A.tag === 6 ? (o(P, A.sibling), A = c(A, I), A.return = P, P = A) : (o(P, A), A = sp(I, P.mode, de), A.return = P, P = A), _(P)) : o(P, A);
    }
    return Nn;
  }
  var kn = bl(!0), Le = bl(!1), ga = Aa(null), na = null, wu = null, Md = null;
  function Ad() {
    Md = wu = na = null;
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
    na = n, Md = wu = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (Vn = !0), n.firstContext = null);
  }
  function za(n) {
    var r = n._currentValue;
    if (Md !== n) if (n = { context: n, memoizedValue: r, next: null }, wu === null) {
      if (na === null) throw Error(m(308));
      wu = n, na.dependencies = { lanes: 0, firstContext: n };
    } else wu = wu.next = n;
    return r;
  }
  var Tl = null;
  function zd(n) {
    Tl === null ? Tl = [n] : Tl.push(n);
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
  function th(n, r) {
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
      u &= n.pendingLanes, o |= u, r.lanes = o, Qi(n, o);
    }
  }
  function nh(n, r) {
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
      var L = w, Y = L.next;
      L.next = null, _ === null ? d = Y : _.next = Y, _ = L;
      var fe = n.alternate;
      fe !== null && (fe = fe.updateQueue, w = fe.lastBaseUpdate, w !== _ && (w === null ? fe.firstBaseUpdate = Y : w.next = Y, fe.lastBaseUpdate = L));
    }
    if (d !== null) {
      var ve = c.baseState;
      _ = 0, fe = Y = L = null, w = d;
      do {
        var se = w.lane, je = w.eventTime;
        if ((u & se) === se) {
          fe !== null && (fe = fe.next = {
            eventTime: je,
            lane: 0,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null
          });
          e: {
            var $e = n, Ge = w;
            switch (se = r, je = o, Ge.tag) {
              case 1:
                if ($e = Ge.payload, typeof $e == "function") {
                  ve = $e.call(je, ve, se);
                  break e;
                }
                ve = $e;
                break e;
              case 3:
                $e.flags = $e.flags & -65537 | 128;
              case 0:
                if ($e = Ge.payload, se = typeof $e == "function" ? $e.call(je, ve, se) : $e, se == null) break e;
                ve = ye({}, ve, se);
                break e;
              case 2:
                _a = !0;
            }
          }
          w.callback !== null && w.lane !== 0 && (n.flags |= 64, se = c.effects, se === null ? c.effects = [w] : se.push(w));
        } else je = { eventTime: je, lane: se, tag: w.tag, payload: w.payload, callback: w.callback, next: null }, fe === null ? (Y = fe = je, L = ve) : fe = fe.next = je, _ |= se;
        if (w = w.next, w === null) {
          if (w = c.shared.pending, w === null) break;
          se = w, w = se.next, se.next = null, c.lastBaseUpdate = se, c.shared.pending = null;
        }
      } while (!0);
      if (fe === null && (L = ve), c.baseState = L, c.firstBaseUpdate = Y, c.lastBaseUpdate = fe, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          _ |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Ai |= _, n.lanes = _, n.memoizedState = ve;
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
  var Cs = {}, Oi = Aa(Cs), Es = Aa(Cs), Rs = Aa(Cs);
  function wl(n) {
    if (n === Cs) throw Error(m(174));
    return n;
  }
  function Hd(n, r) {
    switch (Xe(Rs, r), Xe(Es, n), Xe(Oi, Cs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : va(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = va(r, n);
    }
    cn(Oi), Xe(Oi, r);
  }
  function xl() {
    cn(Oi), cn(Es), cn(Rs);
  }
  function rh(n) {
    wl(Rs.current);
    var r = wl(Oi.current), o = va(r, n.type);
    r !== o && (Xe(Es, n), Xe(Oi, o));
  }
  function $c(n) {
    Es.current === n && (cn(Oi), cn(Es));
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
  var bs = [];
  function tt() {
    for (var n = 0; n < bs.length; n++) bs[n]._workInProgressVersionPrimary = null;
    bs.length = 0;
  }
  var xt = De.ReactCurrentDispatcher, Vt = De.ReactCurrentBatchConfig, en = 0, Ht = null, Fn = null, nr = null, Yc = !1, Ts = !1, kl = 0, le = 0;
  function Pt() {
    throw Error(m(321));
  }
  function ct(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++) if (!ii(n[o], r[o])) return !1;
    return !0;
  }
  function Vo(n, r, o, u, c, d) {
    if (en = d, Ht = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, xt.current = n === null || n.memoizedState === null ? uf : Ls, n = o(u, c), Ts) {
      d = 0;
      do {
        if (Ts = !1, kl = 0, 25 <= d) throw Error(m(301));
        d += 1, nr = Fn = null, r.updateQueue = null, xt.current = sf, n = o(u, c);
      } while (Ts);
    }
    if (xt.current = Ml, r = Fn !== null && Fn.next !== null, en = 0, nr = Fn = Ht = null, Yc = !1, r) throw Error(m(300));
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
  function Dn() {
    if (Fn === null) {
      var n = Ht.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Fn.next;
    var r = nr === null ? Ht.memoizedState : nr.next;
    if (r !== null) nr = r, Fn = n;
    else {
      if (n === null) throw Error(m(310));
      Fn = n, n = { memoizedState: Fn.memoizedState, baseState: Fn.baseState, baseQueue: Fn.baseQueue, queue: Fn.queue, next: null }, nr === null ? Ht.memoizedState = nr = n : nr = nr.next = n;
    }
    return nr;
  }
  function ro(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ho(n) {
    var r = Dn(), o = r.queue;
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
      var w = _ = null, L = null, Y = d;
      do {
        var fe = Y.lane;
        if ((en & fe) === fe) L !== null && (L = L.next = { lane: 0, action: Y.action, hasEagerState: Y.hasEagerState, eagerState: Y.eagerState, next: null }), u = Y.hasEagerState ? Y.eagerState : n(u, Y.action);
        else {
          var ve = {
            lane: fe,
            action: Y.action,
            hasEagerState: Y.hasEagerState,
            eagerState: Y.eagerState,
            next: null
          };
          L === null ? (w = L = ve, _ = u) : L = L.next = ve, Ht.lanes |= fe, Ai |= fe;
        }
        Y = Y.next;
      } while (Y !== null && Y !== d);
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
  function Dl(n) {
    var r = Dn(), o = r.queue;
    if (o === null) throw Error(m(311));
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
  function Qc() {
  }
  function Gc(n, r) {
    var o = Ht, u = Dn(), c = r(), d = !ii(u.memoizedState, c);
    if (d && (u.memoizedState = c, Vn = !0), u = u.queue, ws(Xc.bind(null, o, u, n), [n]), u.getSnapshot !== r || d || nr !== null && nr.memoizedState.tag & 1) {
      if (o.flags |= 2048, Ol(9, Kc.bind(null, o, u, c, r), void 0, null), Xn === null) throw Error(m(349));
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
  function Ol(n, r, o, u) {
    return n = { tag: n, create: r, destroy: o, deps: u, next: null }, r = Ht.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ht.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (u = o.next, o.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function tf() {
    return Dn().memoizedState;
  }
  function xu(n, r, o, u) {
    var c = wr();
    Ht.flags |= n, c.memoizedState = Ol(1 | r, o, void 0, u === void 0 ? null : u);
  }
  function ku(n, r, o, u) {
    var c = Dn();
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
    return xu(8390656, 8, n, r);
  }
  function ws(n, r) {
    return ku(2048, 8, n, r);
  }
  function rf(n, r) {
    return ku(4, 2, n, r);
  }
  function xs(n, r) {
    return ku(4, 4, n, r);
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
    return o = o != null ? o.concat([n]) : null, ku(4, 4, Ll.bind(null, r, n), o);
  }
  function ks() {
  }
  function of(n, r) {
    var o = Dn();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && ct(r, u[1]) ? u[0] : (o.memoizedState = [n, r], n);
  }
  function lf(n, r) {
    var o = Dn();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && ct(r, u[1]) ? u[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function Id(n, r, o) {
    return (en & 21) === 0 ? (n.baseState && (n.baseState = !1, Vn = !0), n.memoizedState = o) : (ii(o, r) || (o = lu(), Ht.lanes |= o, Ai |= o, n.baseState = !0), r);
  }
  function Ds(n, r) {
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
    return Dn().memoizedState;
  }
  function Os(n, r, o) {
    var u = Ui(n);
    if (o = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null }, ra(n)) ah(r, o);
    else if (o = Pd(n, r, o, u), o !== null) {
      var c = Bn();
      Pr(o, n, u, c), an(o, r, u);
    }
  }
  function Nl(n, r, o) {
    var u = Ui(n), c = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (ra(n)) ah(r, c);
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
  function ah(n, r) {
    Ts = Yc = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function an(n, r, o) {
    if ((o & 4194240) !== 0) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Qi(n, o);
    }
  }
  var Ml = { readContext: za, useCallback: Pt, useContext: Pt, useEffect: Pt, useImperativeHandle: Pt, useInsertionEffect: Pt, useLayoutEffect: Pt, useMemo: Pt, useReducer: Pt, useRef: Pt, useState: Pt, useDebugValue: Pt, useDeferredValue: Pt, useTransition: Pt, useMutableSource: Pt, useSyncExternalStore: Pt, useId: Pt, unstable_isNewReconciler: !1 }, uf = { readContext: za, useCallback: function(n, r) {
    return wr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: za, useEffect: nf, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, xu(
      4194308,
      4,
      Ll.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return xu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return xu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = wr();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var u = wr();
    return r = o !== void 0 ? o(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = Os.bind(null, Ht, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = wr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: ef, useDebugValue: ks, useDeferredValue: function(n) {
    return wr().memoizedState = n;
  }, useTransition: function() {
    var n = ef(!1), r = n[0];
    return n = Ds.bind(null, n[1]), wr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var u = Ht, c = wr();
    if (hn) {
      if (o === void 0) throw Error(m(407));
      o = o();
    } else {
      if (o = r(), Xn === null) throw Error(m(349));
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
    var n = wr(), r = Xn.identifierPrefix;
    if (hn) {
      var o = Di, u = ki;
      o = (u & ~(1 << 32 - Nr(u) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = kl++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else o = le++, r = ":" + r + "r" + o.toString(32) + ":";
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
      var r = Dn();
      return Id(r, Fn.memoizedState, n);
    },
    useTransition: function() {
      var n = Ho(ro)[0], r = Dn().memoizedState;
      return [n, r];
    },
    useMutableSource: Qc,
    useSyncExternalStore: Gc,
    useId: Bd,
    unstable_isNewReconciler: !1
  }, sf = { readContext: za, useCallback: of, useContext: za, useEffect: ws, useImperativeHandle: af, useInsertionEffect: rf, useLayoutEffect: xs, useMemo: lf, useReducer: Dl, useRef: tf, useState: function() {
    return Dl(ro);
  }, useDebugValue: ks, useDeferredValue: function(n) {
    var r = Dn();
    return Fn === null ? r.memoizedState = n : Id(r, Fn.memoizedState, n);
  }, useTransition: function() {
    var n = Dl(ro)[0], r = Dn().memoizedState;
    return [n, r];
  }, useMutableSource: Qc, useSyncExternalStore: Gc, useId: Bd, unstable_isNewReconciler: !1 };
  function ui(n, r) {
    if (n && n.defaultProps) {
      r = ye({}, r), n = n.defaultProps;
      for (var o in n) r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  function $d(n, r, o, u) {
    r = n.memoizedState, o = o(u, r), o = o == null ? r : ye({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var cf = { isMounted: function(n) {
    return (n = n._reactInternals) ? St(n) === n : !1;
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
  function ih(n, r, o, u, c, d, _) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, d, _) : r.prototype && r.prototype.isPureReactComponent ? !cs(o, u) || !cs(c, d) : !0;
  }
  function ff(n, r, o) {
    var u = !1, c = Tr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = za(d) : (c = zn(r) ? Jr : Rn.current, u = r.contextTypes, d = (u = u != null) ? Zr(n, c) : Tr), r = new r(o, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = cf, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function oh(n, r, o, u) {
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
  function lh(n, r, o) {
    o = no(-1, o), o.tag = 3, o.payload = { element: null };
    var u = r.value;
    return o.callback = function() {
      Au || (Au = !0, zl = u), Yd(n, r);
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
    c.has(o) || (c.add(o), n = Qy.bind(null, n, r, o), r.then(n, n));
  }
  function uh(n) {
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
  var Ms = De.ReactCurrentOwner, Vn = !1;
  function fr(n, r, o, u) {
    r.child = n === null ? Le(r, null, o, u) : kn(r, n.child, o, u);
  }
  function aa(n, r, o, u, c) {
    o = o.render;
    var d = r.ref;
    return _n(r, c), u = Vo(n, r, o, u, d, c), o = li(), n !== null && !Vn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Fa(n, r, c)) : (hn && o && Fc(r), r.flags |= 1, fr(n, r, u, c), r.child);
  }
  function Ul(n, r, o, u, c) {
    if (n === null) {
      var d = o.type;
      return typeof d == "function" && !up(d) && d.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = d, Ct(n, r, d, u, c)) : (n = qs(o.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, (n.lanes & c) === 0) {
      var _ = d.memoizedProps;
      if (o = o.compare, o = o !== null ? o : cs, o(_, u) && n.ref === r.ref) return Fa(n, r, c);
    }
    return r.flags |= 1, n = Yo(d, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Ct(n, r, o, u, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (cs(d, u) && n.ref === r.ref) if (Vn = !1, r.pendingProps = u = d, (n.lanes & c) !== 0) (n.flags & 131072) !== 0 && (Vn = !0);
      else return r.lanes = n.lanes, Fa(n, r, c);
    }
    return sh(n, r, o, u, c);
  }
  function As(n, r, o) {
    var u = r.pendingProps, c = u.children, d = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Xe(Lu, Ca), Ca |= o;
    else {
      if ((o & 1073741824) === 0) return n = d !== null ? d.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Xe(Lu, Ca), Ca |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = d !== null ? d.baseLanes : o, Xe(Lu, Ca), Ca |= u;
    }
    else d !== null ? (u = d.baseLanes | o, r.memoizedState = null) : u = o, Xe(Lu, Ca), Ca |= u;
    return fr(n, r, c, o), r.child;
  }
  function qd(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function sh(n, r, o, u, c) {
    var d = zn(o) ? Jr : Rn.current;
    return d = Zr(r, d), _n(r, c), o = Vo(n, r, o, u, d, c), u = li(), n !== null && !Vn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Fa(n, r, c)) : (hn && u && Fc(r), r.flags |= 1, fr(n, r, o, c), r.child);
  }
  function ch(n, r, o, u, c) {
    if (zn(o)) {
      var d = !0;
      tr(r);
    } else d = !1;
    if (_n(r, c), r.stateNode === null) Pa(n, r), ff(r, o, u), Ns(r, o, u, c), u = !0;
    else if (n === null) {
      var _ = r.stateNode, w = r.memoizedProps;
      _.props = w;
      var L = _.context, Y = o.contextType;
      typeof Y == "object" && Y !== null ? Y = za(Y) : (Y = zn(o) ? Jr : Rn.current, Y = Zr(r, Y));
      var fe = o.getDerivedStateFromProps, ve = typeof fe == "function" || typeof _.getSnapshotBeforeUpdate == "function";
      ve || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (w !== u || L !== Y) && oh(r, _, u, Y), _a = !1;
      var se = r.memoizedState;
      _.state = se, _s(r, u, _, c), L = r.memoizedState, w !== u || se !== L || qn.current || _a ? (typeof fe == "function" && ($d(r, o, fe, u), L = r.memoizedState), (w = _a || ih(r, o, w, u, se, L, Y)) ? (ve || typeof _.UNSAFE_componentWillMount != "function" && typeof _.componentWillMount != "function" || (typeof _.componentWillMount == "function" && _.componentWillMount(), typeof _.UNSAFE_componentWillMount == "function" && _.UNSAFE_componentWillMount()), typeof _.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = L), _.props = u, _.state = L, _.context = Y, u = w) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      _ = r.stateNode, th(n, r), w = r.memoizedProps, Y = r.type === r.elementType ? w : ui(r.type, w), _.props = Y, ve = r.pendingProps, se = _.context, L = o.contextType, typeof L == "object" && L !== null ? L = za(L) : (L = zn(o) ? Jr : Rn.current, L = Zr(r, L));
      var je = o.getDerivedStateFromProps;
      (fe = typeof je == "function" || typeof _.getSnapshotBeforeUpdate == "function") || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (w !== ve || se !== L) && oh(r, _, u, L), _a = !1, se = r.memoizedState, _.state = se, _s(r, u, _, c);
      var $e = r.memoizedState;
      w !== ve || se !== $e || qn.current || _a ? (typeof je == "function" && ($d(r, o, je, u), $e = r.memoizedState), (Y = _a || ih(r, o, Y, u, se, $e, L) || !1) ? (fe || typeof _.UNSAFE_componentWillUpdate != "function" && typeof _.componentWillUpdate != "function" || (typeof _.componentWillUpdate == "function" && _.componentWillUpdate(u, $e, L), typeof _.UNSAFE_componentWillUpdate == "function" && _.UNSAFE_componentWillUpdate(u, $e, L)), typeof _.componentDidUpdate == "function" && (r.flags |= 4), typeof _.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof _.componentDidUpdate != "function" || w === n.memoizedProps && se === n.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && se === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = $e), _.props = u, _.state = $e, _.context = L, u = Y) : (typeof _.componentDidUpdate != "function" || w === n.memoizedProps && se === n.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && se === n.memoizedState || (r.flags |= 1024), u = !1);
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
  function Du(n) {
    var r = n.stateNode;
    r.pendingContext ? Xv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Xv(n, r.context, !1), Hd(n, r.containerInfo);
  }
  function fh(n, r, o, u, c) {
    return Po(), to(c), r.flags |= 256, fr(n, r, o, u), r.child;
  }
  var pf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Kd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function vf(n, r, o) {
    var u = r.pendingProps, c = Cn.current, d = !1, _ = (r.flags & 128) !== 0, w;
    if ((w = _) || (w = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), w ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Xe(Cn, c & 1), n === null)
      return Nd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (_ = u.children, n = u.fallback, d ? (u = r.mode, d = r.child, _ = { mode: "hidden", children: _ }, (u & 1) === 0 && d !== null ? (d.childLanes = 0, d.pendingProps = _) : d = Qo(_, u, 0, null), n = lo(n, u, o, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Kd(o), r.memoizedState = pf, n) : Xd(r, _));
    if (c = n.memoizedState, c !== null && (w = c.dehydrated, w !== null)) return dh(n, r, _, u, w, c, o);
    if (d) {
      d = u.fallback, _ = r.mode, c = n.child, w = c.sibling;
      var L = { mode: "hidden", children: u.children };
      return (_ & 1) === 0 && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = L, r.deletions = null) : (u = Yo(c, L), u.subtreeFlags = c.subtreeFlags & 14680064), w !== null ? d = Yo(w, d) : (d = lo(d, _, o, null), d.flags |= 2), d.return = r, u.return = r, u.sibling = d, r.child = u, u = d, d = r.child, _ = n.child.memoizedState, _ = _ === null ? Kd(o) : { baseLanes: _.baseLanes | o, cachePool: null, transitions: _.transitions }, d.memoizedState = _, d.childLanes = n.childLanes & ~o, r.memoizedState = pf, u;
    }
    return d = n.child, n = d.sibling, u = Yo(d, { mode: "visible", children: u.children }), (r.mode & 1) === 0 && (u.lanes = o), u.return = r, u.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function Xd(n, r) {
    return r = Qo({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function js(n, r, o, u) {
    return u !== null && to(u), kn(r, n.child, null, o), n = Xd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function dh(n, r, o, u, c, d, _) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, u = Wd(Error(m(422))), js(n, r, _, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = u.fallback, c = r.mode, u = Qo({ mode: "visible", children: u.children }, c, 0, null), d = lo(d, c, _, null), d.flags |= 2, u.return = r, d.return = r, u.sibling = d, r.child = u, (r.mode & 1) !== 0 && kn(r, n.child, null, _), r.child.memoizedState = Kd(_), r.memoizedState = pf, d);
    if ((r.mode & 1) === 0) return js(n, r, _, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u) var w = u.dgst;
      return u = w, d = Error(m(419)), u = Wd(d, u, void 0), js(n, r, _, u);
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
      return lp(), u = Wd(Error(m(421))), js(n, r, _, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Gy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ta = bi(c.nextSibling), ea = r, hn = !0, ja = null, n !== null && (Pn[Ua++] = ki, Pn[Ua++] = Di, Pn[Ua++] = ya, ki = n.id, Di = n.overflow, ya = r), r = Xd(r, u.children), r.flags |= 4096, r);
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
    if (Xe(Cn, u), (r.mode & 1) === 0) r.memoizedState = null;
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
    if (n !== null && r.child !== n.child) throw Error(m(153));
    if (r.child !== null) {
      for (n = r.child, o = Yo(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; ) n = n.sibling, o = o.sibling = Yo(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function zs(n, r, o) {
    switch (r.tag) {
      case 3:
        Du(r), Po();
        break;
      case 5:
        rh(r);
        break;
      case 1:
        zn(r.type) && tr(r);
        break;
      case 4:
        Hd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, c = r.memoizedProps.value;
        Xe(ga, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (Xe(Cn, Cn.current & 1), r.flags |= 128, null) : (o & r.child.childLanes) !== 0 ? vf(n, r, o) : (Xe(Cn, Cn.current & 1), n = Fa(n, r, o), n !== null ? n.sibling : null);
        Xe(Cn, Cn.current & 1);
        break;
      case 19:
        if (u = (o & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (u) return Li(n, r, o);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Xe(Cn, Cn.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, As(n, r, o);
    }
    return Fa(n, r, o);
  }
  var Va, Hn, ph, vh;
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
  }, ph = function(n, r, o, u) {
    var c = n.memoizedProps;
    if (c !== u) {
      n = r.stateNode, wl(Oi.current);
      var d = null;
      switch (o) {
        case "input":
          c = or(n, c), u = or(n, u), d = [];
          break;
        case "select":
          c = ye({}, c, { value: void 0 }), u = ye({}, u, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Qn(n, c), u = Qn(n, u), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = No);
      }
      fn(o, u);
      var _;
      o = null;
      for (Y in c) if (!u.hasOwnProperty(Y) && c.hasOwnProperty(Y) && c[Y] != null) if (Y === "style") {
        var w = c[Y];
        for (_ in w) w.hasOwnProperty(_) && (o || (o = {}), o[_] = "");
      } else Y !== "dangerouslySetInnerHTML" && Y !== "children" && Y !== "suppressContentEditableWarning" && Y !== "suppressHydrationWarning" && Y !== "autoFocus" && (x.hasOwnProperty(Y) ? d || (d = []) : (d = d || []).push(Y, null));
      for (Y in u) {
        var L = u[Y];
        if (w = c?.[Y], u.hasOwnProperty(Y) && L !== w && (L != null || w != null)) if (Y === "style") if (w) {
          for (_ in w) !w.hasOwnProperty(_) || L && L.hasOwnProperty(_) || (o || (o = {}), o[_] = "");
          for (_ in L) L.hasOwnProperty(_) && w[_] !== L[_] && (o || (o = {}), o[_] = L[_]);
        } else o || (d || (d = []), d.push(
          Y,
          o
        )), o = L;
        else Y === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, w = w ? w.__html : void 0, L != null && w !== L && (d = d || []).push(Y, L)) : Y === "children" ? typeof L != "string" && typeof L != "number" || (d = d || []).push(Y, "" + L) : Y !== "suppressContentEditableWarning" && Y !== "suppressHydrationWarning" && (x.hasOwnProperty(Y) ? (L != null && Y === "onScroll" && Yt("scroll", n), d || w === L || (d = [])) : (d = d || []).push(Y, L));
      }
      o && (d = d || []).push("style", o);
      var Y = d;
      (r.updateQueue = Y) && (r.flags |= 4);
    }
  }, vh = function(n, r, o, u) {
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
  function hh(n, r, o) {
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
        return zn(r.type) && bu(), rr(r), null;
      case 3:
        return u = r.stateNode, xl(), cn(qn), cn(Rn), tt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Hc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, ja !== null && (Pl(ja), ja = null))), Hn(n, r), rr(r), null;
      case 5:
        $c(r);
        var c = wl(Rs.current);
        if (o = r.type, n !== null && r.stateNode != null) ph(n, r, o, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(m(166));
            return rr(r), null;
          }
          if (n = wl(Oi.current), Hc(r)) {
            u = r.stateNode, o = r.type;
            var d = r.memoizedProps;
            switch (u[Ti] = r, u[ms] = d, n = (r.mode & 1) !== 0, o) {
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
              ), c = ["children", "" + w]) : x.hasOwnProperty(_) && w != null && _ === "onScroll" && Yt("scroll", u);
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
            _ = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Rr(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = _.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = _.createElement(o, { is: u.is }) : (n = _.createElement(o), o === "select" && (_ = n, u.multiple ? _.multiple = !0 : u.size && (_.size = u.size))) : n = _.createElementNS(n, o), n[Ti] = r, n[ms] = u, Va(n, r, !1, !1), r.stateNode = n;
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
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = ye({}, u, { value: void 0 }), Yt("invalid", n);
                  break;
                case "textarea":
                  Er(n, u), c = Qn(n, u), Yt("invalid", n);
                  break;
                default:
                  c = u;
              }
              fn(o, c), w = c;
              for (d in w) if (w.hasOwnProperty(d)) {
                var L = w[d];
                d === "style" ? on(n, L) : d === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, L != null && hi(n, L)) : d === "children" ? typeof L == "string" ? (o !== "textarea" || L !== "") && Re(n, L) : typeof L == "number" && Re(n, "" + L) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (x.hasOwnProperty(d) ? L != null && d === "onScroll" && Yt("scroll", n) : L != null && _e(n, d, L, _));
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
        if (n && r.stateNode != null) vh(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(m(166));
          if (o = wl(Rs.current), wl(Oi.current), Hc(r)) {
            if (u = r.stateNode, o = r.memoizedProps, u[Ti] = r, (d = u.nodeValue !== o) && (n = ea, n !== null)) switch (n.tag) {
              case 3:
                Mc(u.nodeValue, o, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Mc(u.nodeValue, o, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), u[Ti] = r, r.stateNode = u;
        }
        return rr(r), null;
      case 13:
        if (cn(Cn), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (hn && ta !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) Ss(), Po(), r.flags |= 98560, d = !1;
          else if (d = Hc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(m(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(m(317));
              d[Ti] = r;
            } else Po(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            rr(r), d = !1;
          } else ja !== null && (Pl(ja), ja = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = o, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (Cn.current & 1) !== 0 ? Ln === 0 && (Ln = 3) : lp())), r.updateQueue !== null && (r.flags |= 4), rr(r), null);
      case 4:
        return xl(), Hn(n, r), n === null && Su(r.stateNode.containerInfo), rr(r), null;
      case 10:
        return Ud(r.type._context), rr(r), null;
      case 17:
        return zn(r.type) && bu(), rr(r), null;
      case 19:
        if (cn(Cn), d = r.memoizedState, d === null) return rr(r), null;
        if (u = (r.flags & 128) !== 0, _ = d.rendering, _ === null) if (u) Ps(d, !1);
        else {
          if (Ln !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (_ = Wc(n), _ !== null) {
              for (r.flags |= 128, Ps(d, !1), u = _.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = o, o = r.child; o !== null; ) d = o, n = u, d.flags &= 14680066, _ = d.alternate, _ === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = _.childLanes, d.lanes = _.lanes, d.child = _.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = _.memoizedProps, d.memoizedState = _.memoizedState, d.updateQueue = _.updateQueue, d.type = _.type, n = _.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
              return Xe(Cn, Cn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && _t() > Mu && (r.flags |= 128, u = !0, Ps(d, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = Wc(_), n !== null) {
            if (r.flags |= 128, u = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), Ps(d, !0), d.tail === null && d.tailMode === "hidden" && !_.alternate && !hn) return rr(r), null;
          } else 2 * _t() - d.renderingStartTime > Mu && o !== 1073741824 && (r.flags |= 128, u = !0, Ps(d, !1), r.lanes = 4194304);
          d.isBackwards ? (_.sibling = r.child, r.child = _) : (o = d.last, o !== null ? o.sibling = _ : r.child = _, d.last = _);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = _t(), r.sibling = null, o = Cn.current, Xe(Cn, u ? o & 1 | 2 : o & 1), r) : (rr(r), null);
      case 22:
      case 23:
        return op(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && (r.mode & 1) !== 0 ? (Ca & 1073741824) !== 0 && (rr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : rr(r), null;
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
        return zn(r.type) && bu(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return xl(), cn(qn), cn(Rn), tt(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return $c(r), null;
      case 13:
        if (cn(Cn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(m(340));
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
  var Fs = !1, xr = !1, Hy = typeof WeakSet == "function" ? WeakSet : Set, Ve = null;
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
  var mh = !1;
  function yh(n, r) {
    if (hs = La, n = fs(), Tc(n)) {
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
          var _ = 0, w = -1, L = -1, Y = 0, fe = 0, ve = n, se = null;
          t: for (; ; ) {
            for (var je; ve !== o || c !== 0 && ve.nodeType !== 3 || (w = _ + c), ve !== d || u !== 0 && ve.nodeType !== 3 || (L = _ + u), ve.nodeType === 3 && (_ += ve.nodeValue.length), (je = ve.firstChild) !== null; )
              se = ve, ve = je;
            for (; ; ) {
              if (ve === n) break t;
              if (se === o && ++Y === c && (w = _), se === d && ++fe === u && (L = _), (je = ve.nextSibling) !== null) break;
              ve = se, se = ve.parentNode;
            }
            ve = je;
          }
          o = w === -1 || L === -1 ? null : { start: w, end: L };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (_l = { focusedElem: n, selectionRange: o }, La = !1, Ve = r; Ve !== null; ) if (r = Ve, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Ve = n;
    else for (; Ve !== null; ) {
      r = Ve;
      try {
        var $e = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if ($e !== null) {
              var Ge = $e.memoizedProps, Nn = $e.memoizedState, P = r.stateNode, A = P.getSnapshotBeforeUpdate(r.elementType === r.type ? Ge : ui(r.type, Ge), Nn);
              P.__reactInternalSnapshotBeforeUpdate = A;
            }
            break;
          case 3:
            var I = r.stateNode.containerInfo;
            I.nodeType === 1 ? I.textContent = "" : I.nodeType === 9 && I.documentElement && I.removeChild(I.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(m(163));
        }
      } catch (de) {
        mn(r, r.return, de);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Ve = n;
        break;
      }
      Ve = r.return;
    }
    return $e = mh, mh = !1, $e;
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
    r !== null && (n.alternate = null, yf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ti], delete r[ms], delete r[ys], delete r[Ru], delete r[Fy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
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
  var On = null, jr = !1;
  function zr(n, r, o) {
    for (o = o.child; o !== null; ) gh(n, r, o), o = o.sibling;
  }
  function gh(n, r, o) {
    if (Kr && typeof Kr.onCommitFiberUnmount == "function") try {
      Kr.onCommitFiberUnmount(Ro, o);
    } catch {
    }
    switch (o.tag) {
      case 5:
        xr || Ou(o, r);
      case 6:
        var u = On, c = jr;
        On = null, zr(n, r, o), On = u, jr = c, On !== null && (jr ? (n = On, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : On.removeChild(o.stateNode));
        break;
      case 18:
        On !== null && (jr ? (n = On, o = o.stateNode, n.nodeType === 8 ? Eu(n.parentNode, o) : n.nodeType === 1 && Eu(n, o), ri(n)) : Eu(On, o.stateNode));
        break;
      case 4:
        u = On, c = jr, On = o.stateNode.containerInfo, jr = !0, zr(n, r, o), On = u, jr = c;
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
  function Sh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new Hy()), r.forEach(function(u) {
        var c = kh.bind(null, n, u);
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
              On = w.stateNode, jr = !1;
              break e;
            case 3:
              On = w.stateNode.containerInfo, jr = !0;
              break e;
            case 4:
              On = w.stateNode.containerInfo, jr = !0;
              break e;
          }
          w = w.return;
        }
        if (On === null) throw Error(m(160));
        gh(d, _, c), On = null, jr = !1;
        var L = c.alternate;
        L !== null && (L.return = null), c.return = null;
      } catch (Y) {
        mn(c, r, Y);
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
          } catch (Ge) {
            mn(n, n.return, Ge);
          }
          try {
            Vs(5, n, n.return);
          } catch (Ge) {
            mn(n, n.return, Ge);
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
            Re(c, "");
          } catch (Ge) {
            mn(n, n.return, Ge);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, _ = o !== null ? o.memoizedProps : d, w = n.type, L = n.updateQueue;
          if (n.updateQueue = null, L !== null) try {
            w === "input" && d.type === "radio" && d.name != null && Yn(c, d), er(w, _);
            var Y = er(w, d);
            for (_ = 0; _ < L.length; _ += 2) {
              var fe = L[_], ve = L[_ + 1];
              fe === "style" ? on(c, ve) : fe === "dangerouslySetInnerHTML" ? hi(c, ve) : fe === "children" ? Re(c, ve) : _e(c, fe, ve, Y);
            }
            switch (w) {
              case "input":
                qr(c, d);
                break;
              case "textarea":
                qa(c, d);
                break;
              case "select":
                var se = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var je = d.value;
                je != null ? wn(c, !!d.multiple, je, !1) : se !== !!d.multiple && (d.defaultValue != null ? wn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : wn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ms] = d;
          } catch (Ge) {
            mn(n, n.return, Ge);
          }
        }
        break;
      case 6:
        if (si(r, n), ia(n), u & 4) {
          if (n.stateNode === null) throw Error(m(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ge) {
            mn(n, n.return, Ge);
          }
        }
        break;
      case 3:
        if (si(r, n), ia(n), u & 4 && o !== null && o.memoizedState.isDehydrated) try {
          ri(r.containerInfo);
        } catch (Ge) {
          mn(n, n.return, Ge);
        }
        break;
      case 4:
        si(r, n), ia(n);
        break;
      case 13:
        si(r, n), ia(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (rp = _t())), u & 4 && Sh(n);
        break;
      case 22:
        if (fe = o !== null && o.memoizedState !== null, n.mode & 1 ? (xr = (Y = xr) || fe, si(r, n), xr = Y) : si(r, n), ia(n), u & 8192) {
          if (Y = n.memoizedState !== null, (n.stateNode.isHidden = Y) && !fe && (n.mode & 1) !== 0) for (Ve = n, fe = n.child; fe !== null; ) {
            for (ve = Ve = fe; Ve !== null; ) {
              switch (se = Ve, je = se.child, se.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vs(4, se, se.return);
                  break;
                case 1:
                  Ou(se, se.return);
                  var $e = se.stateNode;
                  if (typeof $e.componentWillUnmount == "function") {
                    u = se, o = se.return;
                    try {
                      r = u, $e.props = r.memoizedProps, $e.state = r.memoizedState, $e.componentWillUnmount();
                    } catch (Ge) {
                      mn(u, o, Ge);
                    }
                  }
                  break;
                case 5:
                  Ou(se, se.return);
                  break;
                case 22:
                  if (se.memoizedState !== null) {
                    Bs(ve);
                    continue;
                  }
              }
              je !== null ? (je.return = se, Ve = je) : Bs(ve);
            }
            fe = fe.sibling;
          }
          e: for (fe = null, ve = n; ; ) {
            if (ve.tag === 5) {
              if (fe === null) {
                fe = ve;
                try {
                  c = ve.stateNode, Y ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (w = ve.stateNode, L = ve.memoizedProps.style, _ = L != null && L.hasOwnProperty("display") ? L.display : null, w.style.display = Wt("display", _));
                } catch (Ge) {
                  mn(n, n.return, Ge);
                }
              }
            } else if (ve.tag === 6) {
              if (fe === null) try {
                ve.stateNode.nodeValue = Y ? "" : ve.memoizedProps;
              } catch (Ge) {
                mn(n, n.return, Ge);
              }
            } else if ((ve.tag !== 22 && ve.tag !== 23 || ve.memoizedState === null || ve === n) && ve.child !== null) {
              ve.child.return = ve, ve = ve.child;
              continue;
            }
            if (ve === n) break e;
            for (; ve.sibling === null; ) {
              if (ve.return === null || ve.return === n) break e;
              fe === ve && (fe = null), ve = ve.return;
            }
            fe === ve && (fe = null), ve.sibling.return = ve.return, ve = ve.sibling;
          }
        }
        break;
      case 19:
        si(r, n), ia(n), u & 4 && Sh(n);
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
          throw Error(m(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (Re(c, ""), u.flags &= -33);
            var d = ao(n);
            Mi(n, d, c);
            break;
          case 3:
          case 4:
            var _ = u.stateNode.containerInfo, w = ao(n);
            Ni(n, w, _);
            break;
          default:
            throw Error(m(161));
        }
      } catch (L) {
        mn(n, n.return, L);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Iy(n, r, o) {
    Ve = n, tp(n);
  }
  function tp(n, r, o) {
    for (var u = (n.mode & 1) !== 0; Ve !== null; ) {
      var c = Ve, d = c.child;
      if (c.tag === 22 && u) {
        var _ = c.memoizedState !== null || Fs;
        if (!_) {
          var w = c.alternate, L = w !== null && w.memoizedState !== null || xr;
          w = Fs;
          var Y = xr;
          if (Fs = _, (xr = L) && !Y) for (Ve = c; Ve !== null; ) _ = Ve, L = _.child, _.tag === 22 && _.memoizedState !== null ? np(c) : L !== null ? (L.return = _, Ve = L) : np(c);
          for (; d !== null; ) Ve = d, tp(d), d = d.sibling;
          Ve = c, Fs = w, xr = Y;
        }
        _h(n);
      } else (c.subtreeFlags & 8772) !== 0 && d !== null ? (d.return = c, Ve = d) : _h(n);
    }
  }
  function _h(n) {
    for (; Ve !== null; ) {
      var r = Ve;
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
                var Y = r.alternate;
                if (Y !== null) {
                  var fe = Y.memoizedState;
                  if (fe !== null) {
                    var ve = fe.dehydrated;
                    ve !== null && ri(ve);
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
        } catch (se) {
          mn(r, r.return, se);
        }
      }
      if (r === n) {
        Ve = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, Ve = o;
        break;
      }
      Ve = r.return;
    }
  }
  function Bs(n) {
    for (; Ve !== null; ) {
      var r = Ve;
      if (r === n) {
        Ve = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, Ve = o;
        break;
      }
      Ve = r.return;
    }
  }
  function np(n) {
    for (; Ve !== null; ) {
      var r = Ve;
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
        Ve = null;
        break;
      }
      var w = r.sibling;
      if (w !== null) {
        w.return = r.return, Ve = w;
        break;
      }
      Ve = r.return;
    }
  }
  var By = Math.ceil, Bo = De.ReactCurrentDispatcher, jl = De.ReactCurrentOwner, dr = De.ReactCurrentBatchConfig, Mt = 0, Xn = null, In = null, pr = 0, Ca = 0, Lu = Aa(0), Ln = 0, $s = null, Ai = 0, Nu = 0, gf = 0, Ws = null, oa = null, rp = 0, Mu = 1 / 0, Ea = null, Au = !1, zl = null, $o = null, Sf = !1, io = null, Ys = 0, Wo = 0, Uu = null, Qs = -1, kr = 0;
  function Bn() {
    return (Mt & 6) !== 0 ? _t() : Qs !== -1 ? Qs : Qs = _t();
  }
  function Ui(n) {
    return (n.mode & 1) === 0 ? 1 : (Mt & 2) !== 0 && pr !== 0 ? pr & -pr : Vy.transition !== null ? (kr === 0 && (kr = lu()), kr) : (n = Ft, n !== 0 || (n = window.event, n = n === void 0 ? 16 : vu(n.type)), n);
  }
  function Pr(n, r, o, u) {
    if (50 < Wo) throw Wo = 0, Uu = null, Error(m(185));
    Yi(n, o, u), ((Mt & 2) === 0 || n !== Xn) && (n === Xn && ((Mt & 2) === 0 && (Nu |= o), Ln === 4 && ci(n, pr)), la(n, u), o === 1 && Mt === 0 && (r.mode & 1) === 0 && (Mu = _t() + 500, Tu && xi()));
  }
  function la(n, r) {
    var o = n.callbackNode;
    fl(n, r);
    var u = ni(n, n === Xn ? pr : 0);
    if (u === 0) o !== null && ur(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (o != null && ur(o), r === 1) n.tag === 0 ? Ao(ap.bind(null, n)) : Pc(ap.bind(null, n)), Cu(function() {
        (Mt & 6) === 0 && xi();
      }), o = null;
      else {
        switch (su(u)) {
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
            o = au;
            break;
          default:
            o = cl;
        }
        o = Oh(o, _f.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function _f(n, r) {
    if (Qs = -1, kr = 0, (Mt & 6) !== 0) throw Error(m(327));
    var o = n.callbackNode;
    if (ju() && n.callbackNode !== o) return null;
    var u = ni(n, n === Xn ? pr : 0);
    if (u === 0) return null;
    if ((u & 30) !== 0 || (u & n.expiredLanes) !== 0 || r) r = Cf(n, u);
    else {
      r = u;
      var c = Mt;
      Mt |= 2;
      var d = Eh();
      (Xn !== n || pr !== r) && (Ea = null, Mu = _t() + 500, oo(n, r));
      do
        try {
          Rh();
          break;
        } catch (w) {
          Ch(n, w);
        }
      while (!0);
      Ad(), Bo.current = d, Mt = c, In !== null ? r = 0 : (Xn = null, pr = 0, r = Ln);
    }
    if (r !== 0) {
      if (r === 2 && (c = To(n), c !== 0 && (u = c, r = Gs(n, c))), r === 1) throw o = $s, oo(n, 0), ci(n, u), la(n, _t()), o;
      if (r === 6) ci(n, u);
      else {
        if (c = n.current.alternate, (u & 30) === 0 && !$y(c) && (r = Cf(n, u), r === 2 && (d = To(n), d !== 0 && (u = d, r = Gs(n, d))), r === 1)) throw o = $s, oo(n, 0), ci(n, u), la(n, _t()), o;
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
            if (u = c, u = _t() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * By(u / 1960)) - u, 10 < u) {
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
  function Gs(n, r) {
    var o = Ws;
    return n.current.memoizedState.isDehydrated && (oo(n, r).flags |= 256), n = Cf(n, r), n !== 2 && (r = oa, oa = o, r !== null && Pl(r)), n;
  }
  function Pl(n) {
    oa === null ? oa = n : oa.push.apply(oa, n);
  }
  function $y(n) {
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
    for (r &= ~gf, r &= ~Nu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - Nr(r), u = 1 << o;
      n[o] = -1, r &= ~u;
    }
  }
  function ap(n) {
    if ((Mt & 6) !== 0) throw Error(m(327));
    ju();
    var r = ni(n, 0);
    if ((r & 1) === 0) return la(n, _t()), null;
    var o = Cf(n, r);
    if (n.tag !== 0 && o === 2) {
      var u = To(n);
      u !== 0 && (r = u, o = Gs(n, u));
    }
    if (o === 1) throw o = $s, oo(n, 0), ci(n, r), la(n, _t()), o;
    if (o === 6) throw Error(m(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Vl(n, oa, Ea), la(n, _t()), null;
  }
  function ip(n, r) {
    var o = Mt;
    Mt |= 1;
    try {
      return n(r);
    } finally {
      Mt = o, Mt === 0 && (Mu = _t() + 500, Tu && xi());
    }
  }
  function Fl(n) {
    io !== null && io.tag === 0 && (Mt & 6) === 0 && ju();
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
    Ca = Lu.current, cn(Lu);
  }
  function oo(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Dd(o)), In !== null) for (o = In.return; o !== null; ) {
      var u = o;
      switch (Vc(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && bu();
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
    if (Xn = n, In = n = Yo(n.current, null), pr = Ca = r, Ln = 0, $s = null, gf = Nu = Ai = 0, oa = Ws = null, Tl !== null) {
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
  function Ch(n, r) {
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
        if (en = 0, nr = Fn = Ht = null, Ts = !1, kl = 0, jl.current = null, o === null || o.return === null) {
          Ln = 1, $s = r, In = null;
          break;
        }
        e: {
          var d = n, _ = o.return, w = o, L = r;
          if (r = pr, w.flags |= 32768, L !== null && typeof L == "object" && typeof L.then == "function") {
            var Y = L, fe = w, ve = fe.tag;
            if ((fe.mode & 1) === 0 && (ve === 0 || ve === 11 || ve === 15)) {
              var se = fe.alternate;
              se ? (fe.updateQueue = se.updateQueue, fe.memoizedState = se.memoizedState, fe.lanes = se.lanes) : (fe.updateQueue = null, fe.memoizedState = null);
            }
            var je = uh(_);
            if (je !== null) {
              je.flags &= -257, Io(je, _, w, d, r), je.mode & 1 && Gd(d, Y, r), r = je, L = Y;
              var $e = r.updateQueue;
              if ($e === null) {
                var Ge = /* @__PURE__ */ new Set();
                Ge.add(L), r.updateQueue = Ge;
              } else $e.add(L);
              break e;
            } else {
              if ((r & 1) === 0) {
                Gd(d, Y, r), lp();
                break e;
              }
              L = Error(m(426));
            }
          } else if (hn && w.mode & 1) {
            var Nn = uh(_);
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
                var P = lh(d, L, r);
                nh(d, P);
                break e;
              case 1:
                w = L;
                var A = d.type, I = d.stateNode;
                if ((d.flags & 128) === 0 && (typeof A.getDerivedStateFromError == "function" || I !== null && typeof I.componentDidCatch == "function" && ($o === null || !$o.has(I)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var de = Qd(d, w, r);
                  nh(d, de);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Th(o);
      } catch (We) {
        r = We, In === o && o !== null && (In = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Eh() {
    var n = Bo.current;
    return Bo.current = Ml, n === null ? Ml : n;
  }
  function lp() {
    (Ln === 0 || Ln === 3 || Ln === 2) && (Ln = 4), Xn === null || (Ai & 268435455) === 0 && (Nu & 268435455) === 0 || ci(Xn, pr);
  }
  function Cf(n, r) {
    var o = Mt;
    Mt |= 2;
    var u = Eh();
    (Xn !== n || pr !== r) && (Ea = null, oo(n, r));
    do
      try {
        Wy();
        break;
      } catch (c) {
        Ch(n, c);
      }
    while (!0);
    if (Ad(), Mt = o, Bo.current = u, In !== null) throw Error(m(261));
    return Xn = null, pr = 0, Ln;
  }
  function Wy() {
    for (; In !== null; ) bh(In);
  }
  function Rh() {
    for (; In !== null && !Ja(); ) bh(In);
  }
  function bh(n) {
    var r = Dh(n.alternate, n, Ca);
    n.memoizedProps = n.pendingProps, r === null ? Th(n) : In = r, jl.current = null;
  }
  function Th(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (o = hh(o, r, Ca), o !== null) {
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
      dr.transition = null, Ft = 1, Yy(n, r, o, u);
    } finally {
      dr.transition = c, Ft = u;
    }
    return null;
  }
  function Yy(n, r, o, u) {
    do
      ju();
    while (io !== null);
    if ((Mt & 6) !== 0) throw Error(m(327));
    o = n.finishedWork;
    var c = n.finishedLanes;
    if (o === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(m(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = o.lanes | o.childLanes;
    if (ud(n, d), n === Xn && (In = Xn = null, pr = 0), (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || Sf || (Sf = !0, Oh(cl, function() {
      return ju(), null;
    })), d = (o.flags & 15990) !== 0, (o.subtreeFlags & 15990) !== 0 || d) {
      d = dr.transition, dr.transition = null;
      var _ = Ft;
      Ft = 1;
      var w = Mt;
      Mt |= 4, jl.current = null, yh(n, o), ep(o, n), yu(_l), La = !!hs, _l = hs = null, n.current = o, Iy(o), Za(), Mt = w, Ft = _, dr.transition = d;
    } else n.current = o;
    if (Sf && (Sf = !1, io = n, Ys = c), d = n.pendingLanes, d === 0 && ($o = null), ts(o.stateNode), la(n, _t()), r !== null) for (u = n.onRecoverableError, o = 0; o < r.length; o++) c = r[o], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (Au) throw Au = !1, n = zl, zl = null, n;
    return (Ys & 1) !== 0 && n.tag !== 0 && ju(), d = n.pendingLanes, (d & 1) !== 0 ? n === Uu ? Wo++ : (Wo = 0, Uu = n) : Wo = 0, xi(), null;
  }
  function ju() {
    if (io !== null) {
      var n = su(Ys), r = dr.transition, o = Ft;
      try {
        if (dr.transition = null, Ft = 16 > n ? 16 : n, io === null) var u = !1;
        else {
          if (n = io, io = null, Ys = 0, (Mt & 6) !== 0) throw Error(m(331));
          var c = Mt;
          for (Mt |= 4, Ve = n.current; Ve !== null; ) {
            var d = Ve, _ = d.child;
            if ((Ve.flags & 16) !== 0) {
              var w = d.deletions;
              if (w !== null) {
                for (var L = 0; L < w.length; L++) {
                  var Y = w[L];
                  for (Ve = Y; Ve !== null; ) {
                    var fe = Ve;
                    switch (fe.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Vs(8, fe, d);
                    }
                    var ve = fe.child;
                    if (ve !== null) ve.return = fe, Ve = ve;
                    else for (; Ve !== null; ) {
                      fe = Ve;
                      var se = fe.sibling, je = fe.return;
                      if (yf(fe), fe === Y) {
                        Ve = null;
                        break;
                      }
                      if (se !== null) {
                        se.return = je, Ve = se;
                        break;
                      }
                      Ve = je;
                    }
                  }
                }
                var $e = d.alternate;
                if ($e !== null) {
                  var Ge = $e.child;
                  if (Ge !== null) {
                    $e.child = null;
                    do {
                      var Nn = Ge.sibling;
                      Ge.sibling = null, Ge = Nn;
                    } while (Ge !== null);
                  }
                }
                Ve = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && _ !== null) _.return = d, Ve = _;
            else e: for (; Ve !== null; ) {
              if (d = Ve, (d.flags & 2048) !== 0) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Vs(9, d, d.return);
              }
              var P = d.sibling;
              if (P !== null) {
                P.return = d.return, Ve = P;
                break e;
              }
              Ve = d.return;
            }
          }
          var A = n.current;
          for (Ve = A; Ve !== null; ) {
            _ = Ve;
            var I = _.child;
            if ((_.subtreeFlags & 2064) !== 0 && I !== null) I.return = _, Ve = I;
            else e: for (_ = A; Ve !== null; ) {
              if (w = Ve, (w.flags & 2048) !== 0) try {
                switch (w.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Hs(9, w);
                }
              } catch (We) {
                mn(w, w.return, We);
              }
              if (w === _) {
                Ve = null;
                break e;
              }
              var de = w.sibling;
              if (de !== null) {
                de.return = w.return, Ve = de;
                break e;
              }
              Ve = w.return;
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
  function wh(n, r, o) {
    r = Al(o, r), r = lh(n, r, 1), n = Fo(n, r, 1), r = Bn(), n !== null && (Yi(n, 1, r), la(n, r));
  }
  function mn(n, r, o) {
    if (n.tag === 3) wh(n, n, o);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        wh(r, n, o);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && ($o === null || !$o.has(u))) {
          n = Al(o, n), n = Qd(r, n, 1), r = Fo(r, n, 1), n = Bn(), r !== null && (Yi(r, 1, n), la(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Qy(n, r, o) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = Bn(), n.pingedLanes |= n.suspendedLanes & o, Xn === n && (pr & o) === o && (Ln === 4 || Ln === 3 && (pr & 130023424) === pr && 500 > _t() - rp ? oo(n, 0) : gf |= o), la(n, r);
  }
  function xh(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = ma, ma <<= 1, (ma & 130023424) === 0 && (ma = 4194304)));
    var o = Bn();
    n = Sa(n, r), n !== null && (Yi(n, r, o), la(n, o));
  }
  function Gy(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), xh(n, o);
  }
  function kh(n, r) {
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
    u !== null && u.delete(r), xh(n, o);
  }
  var Dh;
  Dh = function(n, r, o) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || qn.current) Vn = !0;
    else {
      if ((n.lanes & o) === 0 && (r.flags & 128) === 0) return Vn = !1, zs(n, r, o);
      Vn = (n.flags & 131072) !== 0;
    }
    else Vn = !1, hn && (r.flags & 1048576) !== 0 && Jv(r, eo, r.index);
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
          switch (Pa(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = Ky(u), n = ui(u, n), c) {
            case 0:
              r = sh(null, r, u, n, o);
              break e;
            case 1:
              r = ch(null, r, u, n, o);
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
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ui(u, c), sh(n, r, u, c, o);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ui(u, c), ch(n, r, u, c, o);
      case 3:
        e: {
          if (Du(r), n === null) throw Error(m(387));
          u = r.pendingProps, d = r.memoizedState, c = d.element, th(n, r), _s(r, u, null, o);
          var _ = r.memoizedState;
          if (u = _.element, d.isDehydrated) if (d = { element: u, isDehydrated: !1, cache: _.cache, pendingSuspenseBoundaries: _.pendingSuspenseBoundaries, transitions: _.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Al(Error(m(423)), r), r = fh(n, r, u, o, c);
            break e;
          } else if (u !== c) {
            c = Al(Error(m(424)), r), r = fh(n, r, u, o, c);
            break e;
          } else for (ta = bi(r.stateNode.containerInfo.firstChild), ea = r, hn = !0, ja = null, o = Le(r, null, u, o), r.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
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
        return rh(r), n === null && Nd(r), u = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, _ = c.children, Ac(u, c) ? _ = null : d !== null && Ac(u, d) && (r.flags |= 32), qd(n, r), fr(n, r, _, o), r.child;
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
          if (u = r.type._context, c = r.pendingProps, d = r.memoizedProps, _ = c.value, Xe(ga, u._currentValue), u._currentValue = _, d !== null) if (ii(d.value, _)) {
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
                    var Y = d.updateQueue;
                    if (Y !== null) {
                      Y = Y.shared;
                      var fe = Y.pending;
                      fe === null ? L.next = L : (L.next = fe.next, fe.next = L), Y.pending = L;
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
              if (_ = d.return, _ === null) throw Error(m(341));
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
        return Ct(n, r, r.type, r.pendingProps, o);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ui(u, c), Pa(n, r), r.tag = 1, zn(u) ? (n = !0, tr(r)) : n = !1, _n(r, o), ff(r, u, c), Ns(r, u, c, o), Us(null, r, u, !0, n, o);
      case 19:
        return Li(n, r, o);
      case 22:
        return As(n, r, o);
    }
    throw Error(m(156, r.tag));
  };
  function Oh(n, r) {
    return dn(n, r);
  }
  function qy(n, r, o, u) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ha(n, r, o, u) {
    return new qy(n, r, o, u);
  }
  function up(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Ky(n) {
    if (typeof n == "function") return up(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === W) return 11;
      if (n === He) return 14;
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
      case Oe:
        return lo(o.children, c, d, r);
      case Qe:
        _ = 8, c |= 8;
        break;
      case Je:
        return n = Ha(12, o, r, c | 2), n.elementType = Je, n.lanes = d, n;
      case K:
        return n = Ha(13, o, r, c), n.elementType = K, n.lanes = d, n;
      case Ee:
        return n = Ha(19, o, r, c), n.elementType = Ee, n.lanes = d, n;
      case Ce:
        return Qo(o, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case nt:
            _ = 10;
            break e;
          case me:
            _ = 9;
            break e;
          case W:
            _ = 11;
            break e;
          case He:
            _ = 14;
            break e;
          case xe:
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
    return n = Ha(22, n, u, r), n.elementType = Ce, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function sp(n, r, o) {
    return n = Ha(6, n, null, r), n.lanes = o, n;
  }
  function Ef(n, r, o) {
    return r = Ha(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Lh(n, r, o, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = uu(0), this.expirationTimes = uu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = uu(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Rf(n, r, o, u, c, d, _, w, L) {
    return n = new Lh(n, r, o, w, L), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ha(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: u, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Fd(d), n;
  }
  function Xy(n, r, o) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Be, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: o };
  }
  function cp(n) {
    if (!n) return Tr;
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
            if (zn(r.type)) {
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
      if (zn(o)) return gs(n, o, r);
    }
    return r;
  }
  function Nh(n, r, o, u, c, d, _, w, L) {
    return n = Rf(o, u, !0, n, c, d, _, w, L), n.context = cp(null), o = n.current, u = Bn(), c = Ui(o), d = no(u, c), d.callback = r ?? null, Fo(o, d, c), n.current.lanes = c, Yi(n, c, u), la(n, u), n;
  }
  function bf(n, r, o, u) {
    var c = r.current, d = Bn(), _ = Ui(c);
    return o = cp(o), r.context === null ? r.context = o : r.pendingContext = o, r = no(d, _), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Fo(c, r, _), n !== null && (Pr(n, c, _, d), Bc(n, c, _)), _;
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
  function wf(n, r) {
    fp(n, r), (n = n.alternate) && fp(n, r);
  }
  function Mh() {
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
    if (r === null) throw Error(m(409));
    bf(n, r, null, null);
  }, xf.prototype.unmount = dp.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Fl(function() {
        bf(null, n, null, null);
      }), r[Ji] = null;
    }
  };
  function xf(n) {
    this._internalRoot = n;
  }
  xf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = vt();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Gn.length && r !== 0 && r < Gn[o].priority; o++) ;
      Gn.splice(o, 0, n), o === 0 && as(n);
    }
  };
  function pp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function kf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Ah() {
  }
  function Jy(n, r, o, u, c) {
    if (c) {
      if (typeof u == "function") {
        var d = u;
        u = function() {
          var Y = Tf(_);
          d.call(Y);
        };
      }
      var _ = Nh(r, u, n, 0, null, !1, !1, "", Ah);
      return n._reactRootContainer = _, n[Ji] = _.current, Su(n.nodeType === 8 ? n.parentNode : n), Fl(), _;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof u == "function") {
      var w = u;
      u = function() {
        var Y = Tf(L);
        w.call(Y);
      };
    }
    var L = Rf(n, 0, !1, null, null, !1, !1, "", Ah);
    return n._reactRootContainer = L, n[Ji] = L.current, Su(n.nodeType === 8 ? n.parentNode : n), Fl(function() {
      bf(r, L, o, u);
    }), L;
  }
  function Ks(n, r, o, u, c) {
    var d = o._reactRootContainer;
    if (d) {
      var _ = d;
      if (typeof c == "function") {
        var w = c;
        c = function() {
          var L = Tf(_);
          w.call(L);
        };
      }
      bf(r, _, n, c);
    } else _ = Jy(o, r, n, c, u);
    return Tf(_);
  }
  jt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = ti(r.pendingLanes);
          o !== 0 && (Qi(r, o | 1), la(r, _t()), (Mt & 6) === 0 && (Mu = _t() + 500, xi()));
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
  }, vt = function() {
    return Ft;
  }, cu = function(n, r) {
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
              if (!c) throw Error(m(90));
              Dr(u), qr(u, c);
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
  var Zy = { usingClientEntryPoint: !1, Events: [et, oi, Sn, Wi, ol, ip] }, Xs = { findFiberByHostInstance: Cl, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Uh = { bundleType: Xs.bundleType, version: Xs.version, rendererPackageName: Xs.rendererPackageName, rendererConfig: Xs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: De.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = xn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Xs.findFiberByHostInstance || Mh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Go = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Go.isDisabled && Go.supportsFiber) try {
      Ro = Go.inject(Uh), Kr = Go;
    } catch {
    }
  }
  return Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zy, Qa.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!pp(r)) throw Error(m(200));
    return Xy(n, r, null, o);
  }, Qa.createRoot = function(n, r) {
    if (!pp(n)) throw Error(m(299));
    var o = !1, u = "", c = Hl;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Rf(n, 1, !1, null, null, o, !1, u, c), n[Ji] = r.current, Su(n.nodeType === 8 ? n.parentNode : n), new dp(r);
  }, Qa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(m(188)) : (n = Object.keys(n).join(","), Error(m(268, n)));
    return n = xn(r), n = n === null ? null : n.stateNode, n;
  }, Qa.flushSync = function(n) {
    return Fl(n);
  }, Qa.hydrate = function(n, r, o) {
    if (!kf(r)) throw Error(m(200));
    return Ks(null, n, r, !0, o);
  }, Qa.hydrateRoot = function(n, r, o) {
    if (!pp(n)) throw Error(m(405));
    var u = o != null && o.hydratedSources || null, c = !1, d = "", _ = Hl;
    if (o != null && (o.unstable_strictMode === !0 && (c = !0), o.identifierPrefix !== void 0 && (d = o.identifierPrefix), o.onRecoverableError !== void 0 && (_ = o.onRecoverableError)), r = Nh(r, null, n, 1, o ?? null, c, !1, d, _), n[Ji] = r.current, Su(n), u) for (n = 0; n < u.length; n++) o = u[n], c = o._getVersion, c = c(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, c] : r.mutableSourceEagerHydrationData.push(
      o,
      c
    );
    return new xf(r);
  }, Qa.render = function(n, r, o) {
    if (!kf(r)) throw Error(m(200));
    return Ks(null, n, r, !1, o);
  }, Qa.unmountComponentAtNode = function(n) {
    if (!kf(n)) throw Error(m(40));
    return n._reactRootContainer ? (Fl(function() {
      Ks(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ji] = null;
      });
    }), !0) : !1;
  }, Qa.unstable_batchedUpdates = ip, Qa.unstable_renderSubtreeIntoContainer = function(n, r, o, u) {
    if (!kf(o)) throw Error(m(200));
    if (n == null || n._reactInternals === void 0) throw Error(m(38));
    return Ks(n, r, o, !1, u);
  }, Qa.version = "18.3.1-next-f1338f8080-20240426", Qa;
}
var Ga = {};
var l2;
function kO() {
  return l2 || (l2 = 1, process.env.NODE_ENV !== "production" && (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var p = Sv(), h = x2(), m = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, E = !1;
    function x(e) {
      E = e;
    }
    function b(e) {
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
        var i = m.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var k = 0, T = 1, z = 2, H = 3, q = 4, G = 5, pe = 6, ie = 7, ce = 8, be = 9, ge = 10, _e = 11, De = 12, ne = 13, Be = 14, Oe = 15, Qe = 16, Je = 17, nt = 18, me = 19, W = 21, K = 22, Ee = 23, He = 24, xe = 25, Ce = !0, re = !1, Me = !1, ye = !1, j = !1, J = !0, Ze = !0, Pe = !0, ht = !0, rt = /* @__PURE__ */ new Set(), Ae = {}, st = {};
    function dt(e, t) {
      Gt(e, t), Gt(e + "Capture", t);
    }
    function Gt(e, t) {
      Ae[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ae[e] = t;
      {
        var a = e.toLowerCase();
        st[a] = e, e === "onDoubleClick" && (st.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        rt.add(t[i]);
    }
    var An = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Dr = Object.prototype.hasOwnProperty;
    function Tn(e) {
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
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Tn(e)), Wn(e);
    }
    function qr(e) {
      if (or(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Tn(e)), Wn(e);
    }
    function vi(e, t) {
      if (or(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Tn(e)), Wn(e);
    }
    function pa(e, t) {
      if (or(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Tn(e)), Wn(e);
    }
    function Zn(e) {
      if (or(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Tn(e)), Wn(e);
    }
    function wn(e) {
      if (or(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Tn(e)), Wn(e);
    }
    var Qn = 0, Er = 1, qa = 2, Un = 3, Rr = 4, va = 5, Ka = 6, hi = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Re = hi + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", qe = new RegExp("^[" + hi + "][" + Re + "]*$"), Rt = {}, Wt = {};
    function on(e) {
      return Dr.call(Wt, e) ? !0 : Dr.call(Rt, e) ? !1 : qe.test(e) ? (Wt[e] = !0, !0) : (Rt[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function yn(e, t, a) {
      return t !== null ? t.type === Qn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function fn(e, t, a, i) {
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
            var v = e.getAttribute(s);
            return v === "" ? !0 : er(t, a, i, !1) ? v : v === "" + a ? a : v;
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
    function Or(e, t, a, i) {
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
          var v = l.propertyName;
          if (a === null) {
            var g = l.type;
            e[v] = g === Un ? !1 : "";
          } else
            e[v] = a;
          return;
        }
        var C = l.attributeName, R = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(C);
        else {
          var U = l.type, M;
          U === Un || U === Rr && a === !0 ? M = "" : (Yn(a, C), M = "" + a, l.sanitizeURL && _o(M.toString())), R ? e.setAttributeNS(R, C, M) : e.setAttribute(C, M);
        }
      }
    }
    var Lr = /* @__PURE__ */ Symbol.for("react.element"), lr = /* @__PURE__ */ Symbol.for("react.portal"), mi = /* @__PURE__ */ Symbol.for("react.fragment"), Xa = /* @__PURE__ */ Symbol.for("react.strict_mode"), yi = /* @__PURE__ */ Symbol.for("react.profiler"), gi = /* @__PURE__ */ Symbol.for("react.provider"), O = /* @__PURE__ */ Symbol.for("react.context"), oe = /* @__PURE__ */ Symbol.for("react.forward_ref"), ke = /* @__PURE__ */ Symbol.for("react.suspense"), Ie = /* @__PURE__ */ Symbol.for("react.suspense_list"), St = /* @__PURE__ */ Symbol.for("react.memo"), mt = /* @__PURE__ */ Symbol.for("react.lazy"), kt = /* @__PURE__ */ Symbol.for("react.scope"), wt = /* @__PURE__ */ Symbol.for("react.debug_trace_mode"), xn = /* @__PURE__ */ Symbol.for("react.offscreen"), un = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), dn = /* @__PURE__ */ Symbol.for("react.cache"), ur = /* @__PURE__ */ Symbol.for("react.tracing_marker"), Ja = Symbol.iterator, Za = "@@iterator";
    function _t(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ja && e[Ja] || e[Za];
      return typeof t == "function" ? t : null;
    }
    var Et = Object.assign, ei = 0, sl, cl, Eo, au, Ro, Kr, ts;
    function Nr() {
    }
    Nr.__reactDisabledLog = !0;
    function Sc() {
      {
        if (ei === 0) {
          sl = console.log, cl = console.info, Eo = console.warn, au = console.error, Ro = console.group, Kr = console.groupCollapsed, ts = console.groupEnd;
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
            log: Et({}, e, {
              value: sl
            }),
            info: Et({}, e, {
              value: cl
            }),
            warn: Et({}, e, {
              value: Eo
            }),
            error: Et({}, e, {
              value: au
            }),
            group: Et({}, e, {
              value: Ro
            }),
            groupCollapsed: Et({}, e, {
              value: Kr
            }),
            groupEnd: Et({}, e, {
              value: ts
            })
          });
        }
        ei < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var iu = m.ReactCurrentDispatcher, bo;
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
      var ou = typeof WeakMap == "function" ? WeakMap : Map;
      ni = new ou();
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
      s = iu.current, iu.current = null, Sc();
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
            } catch (Q) {
              i = Q;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (Q) {
              i = Q;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Q) {
            i = Q;
          }
          e();
        }
      } catch (Q) {
        if (Q && i && typeof Q.stack == "string") {
          for (var v = Q.stack.split(`
`), g = i.stack.split(`
`), C = v.length - 1, R = g.length - 1; C >= 1 && R >= 0 && v[C] !== g[R]; )
            R--;
          for (; C >= 1 && R >= 0; C--, R--)
            if (v[C] !== g[R]) {
              if (C !== 1 || R !== 1)
                do
                  if (C--, R--, R < 0 || v[C] !== g[R]) {
                    var U = `
` + v[C].replace(" at new ", " at ");
                    return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), typeof e == "function" && ni.set(e, U), U;
                  }
                while (C >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        ti = !1, iu.current = s, _c(), Error.prepareStackTrace = l;
      }
      var M = e ? e.displayName || e.name : "", B = M ? ma(M) : "";
      return typeof e == "function" && ni.set(e, B), B;
    }
    function To(e, t, a) {
      return fl(e, !0);
    }
    function lu(e, t, a) {
      return fl(e, !1);
    }
    function uu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Yi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fl(e, uu(e));
      if (typeof e == "string")
        return ma(e);
      switch (e) {
        case ke:
          return ma("Suspense");
        case Ie:
          return ma("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case oe:
            return lu(e.render);
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
        case Qe:
          return ma("Lazy");
        case ne:
          return ma("Suspense");
        case me:
          return ma("SuspenseList");
        case k:
        case z:
        case Oe:
          return lu(e.type);
        case _e:
          return lu(e.type.render);
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
    function Ft(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function su(e) {
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
        case ke:
          return "Suspense";
        case Ie:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case O:
            var t = e;
            return su(t) + ".Consumer";
          case gi:
            var a = e;
            return su(a._context) + ".Provider";
          case oe:
            return Ft(e, e.render, "ForwardRef");
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
    function ns(e, t, a) {
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
        case be:
          var i = a;
          return Si(i) + ".Consumer";
        case ge:
          var l = a;
          return Si(l._context) + ".Provider";
        case nt:
          return "DehydratedFragment";
        case _e:
          return ns(a, a.render, "ForwardRef");
        case ie:
          return "Fragment";
        case G:
          return a;
        case q:
          return "Portal";
        case H:
          return "Root";
        case pe:
          return "Text";
        case Qe:
          return jt(a);
        case ce:
          return a === Xa ? "StrictMode" : "Mode";
        case K:
          return "Offscreen";
        case De:
          return "Profiler";
        case W:
          return "Scope";
        case ne:
          return "Suspense";
        case me:
          return "SuspenseList";
        case xe:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case T:
        case k:
        case Je:
        case z:
        case Be:
        case Oe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var cu = m.ReactDebugCurrentFrame, sr = null, _i = !1;
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
    function pn() {
      cu.getCurrentStack = null, sr = null, _i = !1;
    }
    function Xt(e) {
      cu.getCurrentStack = e === null ? null : Ci, sr = e, _i = !1;
    }
    function wo() {
      return sr;
    }
    function Gn(e) {
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
    function Oa(e) {
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
          set: function(v) {
            wn(v), i = "" + v, s.call(this, v);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(v) {
            wn(v), i = "" + v;
          },
          stopTracking: function() {
            pl(e), delete e[t];
          }
        };
        return f;
      }
    }
    function ri(e) {
      xo(e) || (e._valueTracker = Oa(e));
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
    var fu = !1, du = !1, ko = !1, vl = !1;
    function pu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function vu(e, t) {
      var a = e, i = t.checked, l = Et({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function ai(e, t) {
      rs("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !du && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component", t.type), du = !0), t.value !== void 0 && t.defaultValue !== void 0 && !fu && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component", t.type), fu = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Da(t.value != null ? t.value : i),
        controlled: pu(t)
      };
    }
    function S(e, t) {
      var a = e, i = t.checked;
      i != null && Or(a, "checked", i, !1);
    }
    function D(e, t) {
      var a = e;
      {
        var i = pu(t);
        !a._wrapperState.controlled && i && !vl && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), vl = !0), a._wrapperState.controlled && !i && !ko && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ko = !0);
      }
      S(e, t);
      var l = Da(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = Ar(l)) : a.value !== Ar(l) && (a.value = Ar(l));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? at(a, t.type, l) : t.hasOwnProperty("defaultValue") && at(a, t.type, Da(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function $(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, s = l === "submit" || l === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Ar(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var v = i.name;
      v !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, v !== "" && (i.name = v);
    }
    function X(e, t) {
      var a = e;
      D(a, t), Se(a, t);
    }
    function Se(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Yn(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var f = l[s];
          if (!(f === e || f.form !== e.form)) {
            var v = Zh(f);
            if (!v)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Ei(f), D(f, v);
          }
        }
      }
    }
    function at(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || La(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Ar(e._wrapperState.initialValue) : e.defaultValue !== Ar(a) && (e.defaultValue = Ar(a)));
    }
    var we = !1, lt = !1, Dt = !1;
    function zt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? p.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || lt || (lt = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Dt || (Dt = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !we && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), we = !0);
    }
    function sn(e, t) {
      t.value != null && e.setAttribute("value", Ar(Da(t.value)));
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
    var Do = ["value", "defaultValue"];
    function is(e) {
      {
        rs("select", e);
        for (var t = 0; t < Do.length; t++) {
          var a = Do[t];
          if (e[a] != null) {
            var i = bt(e[a]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, gn()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, gn());
          }
        }
      }
    }
    function Gi(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var s = a, f = {}, v = 0; v < s.length; v++)
          f["$" + s[v]] = !0;
        for (var g = 0; g < l.length; g++) {
          var C = f.hasOwnProperty("$" + l[g].value);
          l[g].selected !== C && (l[g].selected = C), C && i && (l[g].defaultSelected = !0);
        }
      } else {
        for (var R = Ar(Da(a)), U = null, M = 0; M < l.length; M++) {
          if (l[M].value === R) {
            l[M].selected = !0, i && (l[M].defaultSelected = !0);
            return;
          }
          U === null && !l[M].disabled && (U = l[M]);
        }
        U !== null && (U.selected = !0);
      }
    }
    function os(e, t) {
      return Et({}, t, {
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
    var Ev = !1;
    function dd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Et({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Ar(a._wrapperState.initialValue)
      });
      return i;
    }
    function pd(e, t) {
      var a = e;
      rs("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Ev && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component"), Ev = !0);
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
        initialValue: Da(i)
      };
    }
    function Rv(e, t) {
      var a = e, i = Da(t.value), l = Da(t.defaultValue);
      if (i != null) {
        var s = Ar(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = Ar(l));
    }
    function bv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function ky(e, t) {
      Rv(e, t);
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
    var Tv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, Ec, wv = Tv(function(e, t) {
      if (e.namespaceURI === hd && !("innerHTML" in e)) {
        Ec = Ec || document.createElement("div"), Ec.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Ec.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Xr = 1, Ki = 3, jn = 8, Xi = 9, gd = 11, hu = function(e, t) {
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
    function xv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var kv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(us).forEach(function(e) {
      kv.forEach(function(t) {
        us[xv(t, e)] = us[e];
      });
    });
    function Rc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(us.hasOwnProperty(e) && us[e]) ? t + "px" : (pa(t, e), ("" + t).trim());
    }
    var Dv = /([A-Z])/g, Ov = /^ms-/;
    function mu(e) {
      return e.replace(Dv, "-$1").toLowerCase().replace(Ov, "-ms-");
    }
    var Lv = function() {
    };
    {
      var Dy = /^(?:webkit|moz|o)[A-Z]/, Oy = /^-ms-/, Nv = /-(.)/g, Sd = /;\s*$/, Ri = {}, ml = {}, Mv = !1, ss = !1, Ly = function(e) {
        return e.replace(Nv, function(t, a) {
          return a.toUpperCase();
        });
      }, Av = function(e) {
        Ri.hasOwnProperty(e) && Ri[e] || (Ri[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ly(e.replace(Oy, "ms-"))
        ));
      }, _d = function(e) {
        Ri.hasOwnProperty(e) && Ri[e] || (Ri[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Cd = function(e, t) {
        ml.hasOwnProperty(t) && ml[t] || (ml[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Sd, "")));
      }, Uv = function(e, t) {
        Mv || (Mv = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, jv = function(e, t) {
        ss || (ss = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Lv = function(e, t) {
        e.indexOf("-") > -1 ? Av(e) : Dy.test(e) ? _d(e) : Sd.test(t) && Cd(e, t), typeof t == "number" && (isNaN(t) ? Uv(e, t) : isFinite(t) || jv(e, t));
      };
    }
    var zv = Lv;
    function Ny(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : mu(i)) + ":", t += Rc(i, l, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Pv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || zv(i, t[i]);
          var s = Rc(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function My(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Fv(e) {
      var t = {};
      for (var a in e)
        for (var i = ls[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function Ay(e, t) {
      {
        if (!t)
          return;
        var a = Fv(e), i = Fv(t), l = {};
        for (var s in a) {
          var f = a[s], v = i[s];
          if (v && f !== v) {
            var g = f + "," + v;
            if (l[g])
              continue;
            l[g] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", My(e[f]) ? "Removing" : "Updating", f, v);
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
    }, cs = Et({
      menuitem: !0
    }, ii), Vv = "__html";
    function bc(e, t) {
      if (t) {
        if (cs[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Vv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
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
    }, yu = {}, Uy = new RegExp("^(aria)-[" + Re + "]*$"), gu = new RegExp("^(aria)[A-Z][" + Re + "]*$");
    function Ed(e, t) {
      {
        if (Dr.call(yu, t) && yu[t])
          return !0;
        if (gu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Tc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), yu[t] = !0, !0;
          if (t !== i)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), yu[t] = !0, !0;
        }
        if (Uy.test(t)) {
          var l = t.toLowerCase(), s = Tc.hasOwnProperty(l) ? l : null;
          if (s == null)
            return yu[t] = !0, !1;
          if (t !== s)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), yu[t] = !0, !0;
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
      Oo(e, t) || ds(e, t);
    }
    var bd = !1;
    function wc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !bd && (bd = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var yl = function() {
    };
    {
      var cr = {}, Td = /^on./, xc = /^on[^A-Z]/, Hv = new RegExp("^(aria)-[" + Re + "]*$"), Iv = new RegExp("^(aria)[A-Z][" + Re + "]*$");
      yl = function(e, t, a, i) {
        if (Dr.call(cr, t) && cr[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), cr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var v = f.hasOwnProperty(l) ? f[l] : null;
          if (v != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, v), cr[t] = !0, !0;
          if (Td.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), cr[t] = !0, !0;
        } else if (Td.test(t))
          return xc.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), cr[t] = !0, !0;
        if (Hv.test(t) || Iv.test(t))
          return !0;
        if (l === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), cr[t] = !0, !0;
        if (l === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), cr[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), cr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), cr[t] = !0, !0;
        var g = ln(t), C = g !== null && g.type === Qn;
        if (fs.hasOwnProperty(l)) {
          var R = fs[l];
          if (R !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, R), cr[t] = !0, !0;
        } else if (!C && t !== l)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), cr[t] = !0, !0;
        return typeof a == "boolean" && fn(t, a, g, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), cr[t] = !0, !0) : C ? !0 : fn(t, a, g, !1) ? (cr[t] = !0, !1) : ((a === "false" || a === "true") && g !== null && g.type === Un && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), cr[t] = !0), !0);
      };
    }
    var Bv = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var s = yl(e, l, t[l], a);
          s || i.push(l);
        }
        var f = i.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        i.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function $v(e, t, a) {
      Oo(e, t) || Bv(e, t, a);
    }
    var wd = 1, kc = 2, Na = 4, xd = wd | kc | Na, gl = null;
    function jy(e) {
      gl !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), gl = e;
    }
    function zy() {
      gl === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), gl = null;
    }
    function ps(e) {
      return e === gl;
    }
    function kd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ki ? t.parentNode : t;
    }
    var Dc = null, Sl = null, Yt = null;
    function Oc(e) {
      var t = Fu(e);
      if (t) {
        if (typeof Dc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Zh(a);
          Dc(t.stateNode, t.type, i);
        }
      }
    }
    function Lc(e) {
      Dc = e;
    }
    function Su(e) {
      Sl ? Yt ? Yt.push(e) : Yt = [e] : Sl = e;
    }
    function Wv() {
      return Sl !== null || Yt !== null;
    }
    function Nc() {
      if (Sl) {
        var e = Sl, t = Yt;
        if (Sl = null, Yt = null, Oc(e), t)
          for (var a = 0; a < t.length; a++)
            Oc(t[a]);
      }
    }
    var _u = function(e, t) {
      return e(t);
    }, vs = function() {
    }, Lo = !1;
    function Yv() {
      var e = Wv();
      e && (vs(), Nc());
    }
    function Qv(e, t, a) {
      if (Lo)
        return e(t, a);
      Lo = !0;
      try {
        return _u(e, t, a);
      } finally {
        Lo = !1, Yv();
      }
    }
    function Py(e, t, a) {
      _u = e, vs = a;
    }
    function Gv(e) {
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
          return !!(a.disabled && Gv(t));
        default:
          return !1;
      }
    }
    function No(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Zh(a);
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
    function Ac(e, t, a, i, l, s, f, v, g) {
      var C = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, C);
      } catch (R) {
        this.onError(R);
      }
    }
    var Uc = Ac;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Dd = document.createElement("react");
      Uc = function(t, a, i, l, s, f, v, g, C) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var R = document.createEvent("Event"), U = !1, M = !0, B = window.event, Q = Object.getOwnPropertyDescriptor(window, "event");
        function ee() {
          Dd.removeEventListener(te, it, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = B);
        }
        var Ne = Array.prototype.slice.call(arguments, 3);
        function it() {
          U = !0, ee(), a.apply(i, Ne), M = !1;
        }
        var Ke, Ut = !1, Ot = !1;
        function F(V) {
          if (Ke = V.error, Ut = !0, Ke === null && V.colno === 0 && V.lineno === 0 && (Ot = !0), V.defaultPrevented && Ke != null && typeof Ke == "object")
            try {
              Ke._suppressLogging = !0;
            } catch {
            }
        }
        var te = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", F), Dd.addEventListener(te, it, !1), R.initEvent(te, !1, !1), Dd.dispatchEvent(R), Q && Object.defineProperty(window, "event", Q), U && M && (Ut ? Ot && (Ke = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ke = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ke)), window.removeEventListener("error", F), !U)
          return ee(), Ac.apply(this, arguments);
      };
    }
    var qv = Uc, Cu = !1, jc = null, Eu = !1, bi = null, Kv = {
      onError: function(e) {
        Cu = !0, jc = e;
      }
    };
    function Mo(e, t, a, i, l, s, f, v, g) {
      Cu = !1, jc = null, qv.apply(Kv, arguments);
    }
    function Ti(e, t, a, i, l, s, f, v, g) {
      if (Mo.apply(this, arguments), Cu) {
        var C = ys();
        Eu || (Eu = !0, bi = C);
      }
    }
    function ms() {
      if (Eu) {
        var e = bi;
        throw Eu = !1, bi = null, e;
      }
    }
    function Ji() {
      return Cu;
    }
    function ys() {
      if (Cu) {
        var e = jc;
        return Cu = !1, jc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ru(e) {
      return e._reactInternals;
    }
    function Fy(e) {
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
    ), Xe = (
      /*                   */
      128
    ), Tr = (
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
    ), bu = (
      /*             */
      16384
    ), Xv = (
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
    ), jo = Sn | Nt | Ma | Aa | Rn | Zr | zn, zo = Nt | cn | Rn | zn, eo = Jr | Ma, Pn = Zi | Pc | Tu, Ua = m.ReactCurrentOwner;
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
      return t.tag === H ? a : null;
    }
    function ki(e) {
      if (e.tag === ne) {
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
      return e.tag === H ? e.stateNode.containerInfo : null;
    }
    function El(e) {
      return ya(e) === e;
    }
    function Jv(e) {
      {
        var t = Ua.current;
        if (t !== null && t.tag === T) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", vt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = Ru(e);
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
          var v = s.return;
          if (v !== null) {
            i = l = v;
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
      if (i.tag !== H)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ea(e) {
      var t = Vc(e);
      return t !== null ? ta(t) : null;
    }
    function ta(e) {
      if (e.tag === G || e.tag === pe)
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
      if (e.tag === G || e.tag === pe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== q) {
          var a = ja(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Od = h.unstable_scheduleCallback, Zv = h.unstable_cancelCallback, Ld = h.unstable_shouldYield, Nd = h.unstable_requestPaint, Kn = h.unstable_now, Hc = h.unstable_getCurrentPriorityLevel, Ss = h.unstable_ImmediatePriority, Po = h.unstable_UserBlockingPriority, to = h.unstable_NormalPriority, Vy = h.unstable_LowPriority, Rl = h.unstable_IdlePriority, Ic = h.unstable_yieldValue, eh = h.unstable_setDisableYieldValue, bl = null, kn = null, Le = null, ga = !1, na = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function wu(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ze && (e = Et({}, e, {
          getLaneLabelMap: Tl,
          injectProfilingHooks: za
        })), bl = t.inject(e), kn = t;
      } catch (a) {
        y("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Md(e, t) {
      if (kn && typeof kn.onScheduleFiberRoot == "function")
        try {
          kn.onScheduleFiberRoot(bl, e, t);
        } catch (a) {
          ga || (ga = !0, y("React instrumentation encountered an error: %s", a));
        }
    }
    function Ad(e, t) {
      if (kn && typeof kn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Xe) === Xe;
          if (Pe) {
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
            kn.onCommitFiberRoot(bl, e, i, a);
          }
        } catch (l) {
          ga || (ga = !0, y("React instrumentation encountered an error: %s", l));
        }
    }
    function Ud(e) {
      if (kn && typeof kn.onPostCommitFiberRoot == "function")
        try {
          kn.onPostCommitFiberRoot(bl, e);
        } catch (t) {
          ga || (ga = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function jd(e) {
      if (kn && typeof kn.onCommitFiberUnmount == "function")
        try {
          kn.onCommitFiberUnmount(bl, e);
        } catch (t) {
          ga || (ga = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function _n(e) {
      if (typeof Ic == "function" && (eh(e), x(e)), kn && typeof kn.setStrictMode == "function")
        try {
          kn.setStrictMode(bl, e);
        } catch (t) {
          ga || (ga = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function za(e) {
      Le = e;
    }
    function Tl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < kl; a++) {
          var i = ah(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function zd(e) {
      Le !== null && typeof Le.markCommitStarted == "function" && Le.markCommitStarted(e);
    }
    function Pd() {
      Le !== null && typeof Le.markCommitStopped == "function" && Le.markCommitStopped();
    }
    function Sa(e) {
      Le !== null && typeof Le.markComponentRenderStarted == "function" && Le.markComponentRenderStarted(e);
    }
    function _a() {
      Le !== null && typeof Le.markComponentRenderStopped == "function" && Le.markComponentRenderStopped();
    }
    function Fd(e) {
      Le !== null && typeof Le.markComponentPassiveEffectMountStarted == "function" && Le.markComponentPassiveEffectMountStarted(e);
    }
    function th() {
      Le !== null && typeof Le.markComponentPassiveEffectMountStopped == "function" && Le.markComponentPassiveEffectMountStopped();
    }
    function no(e) {
      Le !== null && typeof Le.markComponentPassiveEffectUnmountStarted == "function" && Le.markComponentPassiveEffectUnmountStarted(e);
    }
    function Fo() {
      Le !== null && typeof Le.markComponentPassiveEffectUnmountStopped == "function" && Le.markComponentPassiveEffectUnmountStopped();
    }
    function Bc(e) {
      Le !== null && typeof Le.markComponentLayoutEffectMountStarted == "function" && Le.markComponentLayoutEffectMountStarted(e);
    }
    function nh() {
      Le !== null && typeof Le.markComponentLayoutEffectMountStopped == "function" && Le.markComponentLayoutEffectMountStopped();
    }
    function _s(e) {
      Le !== null && typeof Le.markComponentLayoutEffectUnmountStarted == "function" && Le.markComponentLayoutEffectUnmountStarted(e);
    }
    function Vd() {
      Le !== null && typeof Le.markComponentLayoutEffectUnmountStopped == "function" && Le.markComponentLayoutEffectUnmountStopped();
    }
    function Cs(e, t, a) {
      Le !== null && typeof Le.markComponentErrored == "function" && Le.markComponentErrored(e, t, a);
    }
    function Oi(e, t, a) {
      Le !== null && typeof Le.markComponentSuspended == "function" && Le.markComponentSuspended(e, t, a);
    }
    function Es(e) {
      Le !== null && typeof Le.markLayoutEffectsStarted == "function" && Le.markLayoutEffectsStarted(e);
    }
    function Rs() {
      Le !== null && typeof Le.markLayoutEffectsStopped == "function" && Le.markLayoutEffectsStopped();
    }
    function wl(e) {
      Le !== null && typeof Le.markPassiveEffectsStarted == "function" && Le.markPassiveEffectsStarted(e);
    }
    function Hd() {
      Le !== null && typeof Le.markPassiveEffectsStopped == "function" && Le.markPassiveEffectsStopped();
    }
    function xl(e) {
      Le !== null && typeof Le.markRenderStarted == "function" && Le.markRenderStarted(e);
    }
    function rh() {
      Le !== null && typeof Le.markRenderYielded == "function" && Le.markRenderYielded();
    }
    function $c() {
      Le !== null && typeof Le.markRenderStopped == "function" && Le.markRenderStopped();
    }
    function Cn(e) {
      Le !== null && typeof Le.markRenderScheduled == "function" && Le.markRenderScheduled(e);
    }
    function Wc(e, t) {
      Le !== null && typeof Le.markForceUpdateScheduled == "function" && Le.markForceUpdateScheduled(e, t);
    }
    function bs(e, t) {
      Le !== null && typeof Le.markStateUpdateScheduled == "function" && Le.markStateUpdateScheduled(e, t);
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
    ), Fn = Math.clz32 ? Math.clz32 : Ts, nr = Math.log, Yc = Math.LN2;
    function Ts(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (nr(t) / Yc | 0) | 0;
    }
    var kl = 31, le = (
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
    ), Dn = (
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
    ), xu = (
      /*                       */
      131072
    ), ku = (
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
    ), Id = Ll, Ds = (
      /*          */
      134217728
    ), Bd = (
      /*                          */
      268435455
    ), Os = (
      /*               */
      268435456
    ), Nl = (
      /*                        */
      536870912
    ), ra = (
      /*                   */
      1073741824
    );
    function ah(e) {
      {
        if (e & ct)
          return "Sync";
        if (e & Vo)
          return "InputContinuousHydration";
        if (e & li)
          return "InputContinuous";
        if (e & wr)
          return "DefaultHydration";
        if (e & Dn)
          return "Default";
        if (e & ro)
          return "TransitionHydration";
        if (e & Ho)
          return "Transition";
        if (e & xs)
          return "Retry";
        if (e & Ds)
          return "SelectiveHydration";
        if (e & Os)
          return "IdleHydration";
        if (e & Nl)
          return "Idle";
        if (e & ra)
          return "Offscreen";
      }
    }
    var an = -1, Ml = Dl, uf = Ll;
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
        case Dn:
          return Dn;
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
        case xu:
        case ku:
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
        case Ds:
          return Ds;
        case Os:
          return Os;
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
      if (a === le)
        return le;
      var i = le, l = e.suspendedLanes, s = e.pingedLanes, f = a & Bd;
      if (f !== le) {
        var v = f & ~l;
        if (v !== le)
          i = Ls(v);
        else {
          var g = f & s;
          g !== le && (i = Ls(g));
        }
      } else {
        var C = a & ~l;
        C !== le ? i = Ls(C) : s !== le && (i = Ls(s));
      }
      if (i === le)
        return le;
      if (t !== le && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === le) {
        var R = Io(i), U = Io(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          R >= U || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          R === Dn && (U & Ho) !== le
        )
          return t;
      }
      (i & li) !== le && (i |= a & Dn);
      var M = e.entangledLanes;
      if (M !== le)
        for (var B = e.entanglements, Q = i & M; Q > 0; ) {
          var ee = Vn(Q), Ne = 1 << ee;
          i |= B[ee], Q &= ~Ne;
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
        case Dn:
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
        case xu:
        case ku:
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
        case Ds:
        case Os:
        case Nl:
        case ra:
          return an;
        default:
          return y("Should have found matching lanes. This is a bug in React."), an;
      }
    }
    function cf(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var v = Vn(f), g = 1 << v, C = s[v];
        C === an ? ((g & i) === le || (g & l) !== le) && (s[v] = $d(g, t)) : C <= t && (e.expiredLanes |= g), f &= ~g;
      }
    }
    function ih(e) {
      return Ls(e.pendingLanes);
    }
    function ff(e) {
      var t = e.pendingLanes & ~ra;
      return t !== le ? t : t & ra ? ra : le;
    }
    function oh(e) {
      return (e & ct) !== le;
    }
    function Ns(e) {
      return (e & Bd) !== le;
    }
    function Al(e) {
      return (e & xs) === e;
    }
    function Wd(e) {
      var t = ct | li | Dn;
      return (e & t) === le;
    }
    function Yd(e) {
      return (e & Ho) === e;
    }
    function df(e, t) {
      var a = Vo | li | wr | Dn;
      return (t & a) !== le;
    }
    function lh(e, t) {
      return (t & e.expiredLanes) !== le;
    }
    function Qd(e) {
      return (e & Ho) !== le;
    }
    function Gd() {
      var e = Ml;
      return Ml <<= 1, (Ml & Ho) === le && (Ml = Dl), e;
    }
    function uh() {
      var e = uf;
      return uf <<= 1, (uf & xs) === le && (uf = Ll), e;
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
      return (e & t) !== le;
    }
    function Ul(e, t) {
      return (e & t) === t;
    }
    function Ct(e, t) {
      return e | t;
    }
    function As(e, t) {
      return e & ~t;
    }
    function qd(e, t) {
      return e & t;
    }
    function sh(e) {
      return e;
    }
    function ch(e, t) {
      return e !== Pt && e < t ? e : t;
    }
    function Us(e) {
      for (var t = [], a = 0; a < kl; a++)
        t.push(e);
      return t;
    }
    function Du(e, t, a) {
      e.pendingLanes |= t, t !== Nl && (e.suspendedLanes = le, e.pingedLanes = le);
      var i = e.eventTimes, l = fr(t);
      i[l] = a;
    }
    function fh(e, t) {
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
      e.pendingLanes = t, e.suspendedLanes = le, e.pingedLanes = le, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var v = Vn(f), g = 1 << v;
        i[v] = le, l[v] = an, s[v] = an, f &= ~g;
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
        case Dn:
          i = wr;
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
        case xu:
        case ku:
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
          i = Os;
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
    function dh(e, t) {
      if (na)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = fr(t), s = 1 << l, f = a[l];
          f.size > 0 && (f.forEach(function(v) {
            var g = v.alternate;
            (g === null || !i.has(g)) && i.add(v);
          }), f.clear()), t &= ~s;
        }
    }
    function Jd(e, t) {
      return null;
    }
    var Ur = ct, Li = li, Pa = Dn, Fa = Nl, zs = Pt;
    function Va() {
      return zs;
    }
    function Hn(e) {
      zs = e;
    }
    function ph(e, t) {
      var a = zs;
      try {
        return zs = e, t();
      } finally {
        zs = a;
      }
    }
    function vh(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Ps(e, t) {
      return e > t ? e : t;
    }
    function rr(e, t) {
      return e !== 0 && e < t;
    }
    function hh(e) {
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
    function Hy(e) {
      Fs(e);
    }
    var Ve;
    function Ou(e) {
      Ve = e;
    }
    var mf;
    function mh(e) {
      mf = e;
    }
    var yh;
    function Vs(e) {
      yh = e;
    }
    var Hs;
    function Zd(e) {
      Hs = e;
    }
    var yf = !1, Is = [], ao = null, Ni = null, Mi = null, On = /* @__PURE__ */ new Map(), jr = /* @__PURE__ */ new Map(), zr = [], gh = [
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
    function Sh(e) {
      return gh.indexOf(e) > -1;
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
          On.delete(a);
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
          var v = Fu(t);
          v !== null && Ve(v);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var g = e.targetContainers;
      return l !== null && g.indexOf(l) === -1 && g.push(l), e;
    }
    function Iy(e, t, a, i, l) {
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
          var v = l;
          return Mi = ia(Mi, e, t, a, i, v), !0;
        }
        case "pointerover": {
          var g = l, C = g.pointerId;
          return On.set(C, ia(On.get(C) || null, e, t, a, i, g)), !0;
        }
        case "gotpointercapture": {
          var R = l, U = R.pointerId;
          return jr.set(U, ia(jr.get(U) || null, e, t, a, i, R)), !0;
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
          if (i === ne) {
            var l = ki(a);
            if (l !== null) {
              e.blockedOn = l, Hs(e.priority, function() {
                mf(a);
              });
              return;
            }
          } else if (i === H) {
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
    function _h(e) {
      for (var t = yh(), a = {
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
        var a = t[0], i = Nu(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          jy(s), l.target.dispatchEvent(s), zy();
        } else {
          var f = Fu(i);
          return f !== null && Ve(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function np(e, t, a) {
      Bs(e) && a.delete(t);
    }
    function By() {
      yf = !1, ao !== null && Bs(ao) && (ao = null), Ni !== null && Bs(Ni) && (Ni = null), Mi !== null && Bs(Mi) && (Mi = null), On.forEach(np), jr.forEach(np);
    }
    function Bo(e, t) {
      e.blockedOn === t && (e.blockedOn = null, yf || (yf = !0, h.unstable_scheduleCallback(h.unstable_NormalPriority, By)));
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
      var i = function(v) {
        return Bo(v, e);
      };
      On.forEach(i), jr.forEach(i);
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
    var dr = m.ReactCurrentBatchConfig, Mt = !0;
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
          l = Lu;
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
    function Lu(e, t, a, i) {
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
      var l = Nu(e, t, a, i);
      if (l === null) {
        og(e, t, i, Ai, a), ep(e, i);
        return;
      }
      if (Iy(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (ep(e, i), t & Na && Sh(e)) {
        for (; l !== null; ) {
          var s = Fu(l);
          s !== null && Hy(s);
          var f = Nu(e, t, a, i);
          if (f === null && og(e, t, i, Ai, a), f === l)
            break;
          l = f;
        }
        l !== null && i.stopPropagation();
        return;
      }
      og(e, t, i, null, a);
    }
    var Ai = null;
    function Nu(e, t, a, i) {
      Ai = null;
      var l = kd(i), s = ec(l);
      if (s !== null) {
        var f = ya(s);
        if (f === null)
          s = null;
        else {
          var v = f.tag;
          if (v === ne) {
            var g = ki(f);
            if (g !== null)
              return g;
            s = null;
          } else if (v === H) {
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
            case Vy:
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
    function Mu(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Ea = null, Au = null, zl = null;
    function $o(e) {
      return Ea = e, Au = Ys(), !0;
    }
    function Sf() {
      Ea = null, Au = null, zl = null;
    }
    function io() {
      if (zl)
        return zl;
      var e, t = Au, a = t.length, i, l = Ys(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === l[s - i]; i++)
        ;
      var v = i > 1 ? 1 - i : void 0;
      return zl = l.slice(e, v), zl;
    }
    function Ys() {
      return "value" in Ea ? Ea.value : Ea.textContent;
    }
    function Wo(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Uu() {
      return !0;
    }
    function Qs() {
      return !1;
    }
    function kr(e) {
      function t(a, i, l, s, f) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var v in e)
          if (e.hasOwnProperty(v)) {
            var g = e[v];
            g ? this[v] = g(s) : this[v] = s[v];
          }
        var C = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return C ? this.isDefaultPrevented = Uu : this.isDefaultPrevented = Qs, this.isPropagationStopped = Qs, this;
      }
      return Et(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Uu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Uu);
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
        isPersistent: Uu
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
    }, Ui = kr(Bn), Pr = Et({}, Bn, {
      view: 0,
      detail: 0
    }), la = kr(Pr), _f, Gs, Pl;
    function $y(e) {
      e !== Pl && (Pl && e.type === "mousemove" ? (_f = e.screenX - Pl.screenX, Gs = e.screenY - Pl.screenY) : (_f = 0, Gs = 0), Pl = e);
    }
    var ci = Et({}, Pr, {
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
        return "movementX" in e ? e.movementX : ($y(e), _f);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Gs;
      }
    }), ap = kr(ci), ip = Et({}, ci, {
      dataTransfer: 0
    }), Fl = kr(ip), op = Et({}, Pr, {
      relatedTarget: 0
    }), oo = kr(op), Ch = Et({}, Bn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Eh = kr(Ch), lp = Et({}, Bn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Cf = kr(lp), Wy = Et({}, Bn, {
      data: 0
    }), Rh = kr(Wy), bh = Rh, Th = {
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
    function Yy(e) {
      if (e.key) {
        var t = Th[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Wo(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Vl[e.keyCode] || "Unidentified" : "";
    }
    var ju = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function wh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = ju[e];
      return i ? !!a[i] : !1;
    }
    function mn(e) {
      return wh;
    }
    var Qy = Et({}, Pr, {
      key: Yy,
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
    }), xh = kr(Qy), Gy = Et({}, ci, {
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
    }), kh = kr(Gy), Dh = Et({}, Pr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: mn
    }), Oh = kr(Dh), qy = Et({}, Bn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ha = kr(qy), up = Et({}, ci, {
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
    }), Ky = kr(up), Yo = [9, 13, 27, 32], qs = 229, lo = An && "CompositionEvent" in window, Qo = null;
    An && "documentMode" in document && (Qo = document.documentMode);
    var sp = An && "TextEvent" in window && !Qo, Ef = An && (!lo || Qo && Qo > 8 && Qo <= 11), Lh = 32, Rf = String.fromCharCode(Lh);
    function Xy() {
      dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), dt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), dt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), dt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var cp = !1;
    function Nh(e) {
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
    function Mh(e) {
      return e.locale === "ko";
    }
    var Hl = !1;
    function dp(e, t, a, i, l) {
      var s, f;
      if (lo ? s = bf(t) : Hl ? fp(t, i) && (s = "onCompositionEnd") : Tf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Ef && !Mh(i) && (!Hl && s === "onCompositionStart" ? Hl = $o(l) : s === "onCompositionEnd" && Hl && (f = io()));
      var v = Vh(a, s);
      if (v.length > 0) {
        var g = new Rh(s, t, null, i, l);
        if (e.push({
          event: g,
          listeners: v
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
          return a !== Lh ? null : (cp = !0, Rf);
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
          if (!Nh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Ef && !Mh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function kf(e, t, a, i, l) {
      var s;
      if (sp ? s = xf(t, i) : s = pp(t, i), !s)
        return null;
      var f = Vh(a, "onBeforeInput");
      if (f.length > 0) {
        var v = new bh("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: v,
          listeners: f
        }), v.data = s;
      }
    }
    function Ah(e, t, a, i, l, s, f) {
      dp(e, t, a, i, l), kf(e, t, a, i, l);
    }
    var Jy = {
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
      return t === "input" ? !!Jy[e.type] : t === "textarea";
    }
    function Zy(e) {
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
    function Uh(e, t, a, i) {
      Su(i);
      var l = Vh(t, "onChange");
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
      Uh(t, n, e, kd(e)), Qv(u, t);
    }
    function u(e) {
      m_(e, 0);
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
    An && (_ = Zy("input") && (!document.documentMode || document.documentMode > 9));
    function w(e, t) {
      Go = e, n = t, Go.attachEvent("onpropertychange", Y);
    }
    function L() {
      Go && (Go.detachEvent("onpropertychange", Y), Go = null, n = null);
    }
    function Y(e) {
      e.propertyName === "value" && c(n) && o(e);
    }
    function fe(e, t, a) {
      e === "focusin" ? (L(), w(t, a)) : e === "focusout" && L();
    }
    function ve(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function se(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function je(e, t) {
      if (e === "click")
        return c(t);
    }
    function $e(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Ge(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || at(e, "number", e.value);
    }
    function Nn(e, t, a, i, l, s, f) {
      var v = a ? Af(a) : window, g, C;
      if (r(v) ? g = d : Ks(v) ? _ ? g = $e : (g = ve, C = fe) : se(v) && (g = je), g) {
        var R = g(t, a);
        if (R) {
          Uh(e, R, i, l);
          return;
        }
      }
      C && C(t, v, a), t === "focusout" && Ge(v);
    }
    function P() {
      Gt("onMouseEnter", ["mouseout", "mouseover"]), Gt("onMouseLeave", ["mouseout", "mouseover"]), Gt("onPointerEnter", ["pointerout", "pointerover"]), Gt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function A(e, t, a, i, l, s, f) {
      var v = t === "mouseover" || t === "pointerover", g = t === "mouseout" || t === "pointerout";
      if (v && !ps(i)) {
        var C = i.relatedTarget || i.fromElement;
        if (C && (ec(C) || xp(C)))
          return;
      }
      if (!(!g && !v)) {
        var R;
        if (l.window === l)
          R = l;
        else {
          var U = l.ownerDocument;
          U ? R = U.defaultView || U.parentWindow : R = window;
        }
        var M, B;
        if (g) {
          var Q = i.relatedTarget || i.toElement;
          if (M = a, B = Q ? ec(Q) : null, B !== null) {
            var ee = ya(B);
            (B !== ee || B.tag !== G && B.tag !== pe) && (B = null);
          }
        } else
          M = null, B = a;
        if (M !== B) {
          var Ne = ap, it = "onMouseLeave", Ke = "onMouseEnter", Ut = "mouse";
          (t === "pointerout" || t === "pointerover") && (Ne = kh, it = "onPointerLeave", Ke = "onPointerEnter", Ut = "pointer");
          var Ot = M == null ? R : Af(M), F = B == null ? R : Af(B), te = new Ne(it, Ut + "leave", M, i, l);
          te.target = Ot, te.relatedTarget = F;
          var V = null, he = ec(l);
          if (he === a) {
            var Fe = new Ne(Ke, Ut + "enter", B, i, l);
            Fe.target = F, Fe.relatedTarget = Ot, V = Fe;
          }
          aR(e, te, V, M, B);
        }
      }
    }
    function I(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var de = typeof Object.is == "function" ? Object.is : I;
    function We(e, t) {
      if (de(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!Dr.call(t, s) || !de(e[s], t[s]))
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
      var l = i.anchorNode, s = i.anchorOffset, f = i.focusNode, v = i.focusOffset;
      try {
        l.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return It(e, l, s, f, v);
    }
    function It(e, t, a, i, l) {
      var s = 0, f = -1, v = -1, g = 0, C = 0, R = e, U = null;
      e: for (; ; ) {
        for (var M = null; R === t && (a === 0 || R.nodeType === Ki) && (f = s + a), R === i && (l === 0 || R.nodeType === Ki) && (v = s + l), R.nodeType === Ki && (s += R.nodeValue.length), (M = R.firstChild) !== null; )
          U = R, R = M;
        for (; ; ) {
          if (R === e)
            break e;
          if (U === t && ++g === a && (f = s), U === i && ++C === l && (v = s), (M = R.nextSibling) !== null)
            break;
          R = U, U = R.parentNode;
        }
        R = M;
      }
      return f === -1 || v === -1 ? null : {
        start: f,
        end: v
      };
    }
    function qo(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), v = t.end === void 0 ? f : Math.min(t.end, s);
        if (!l.extend && f > v) {
          var g = v;
          v = f, f = g;
        }
        var C = pt(e, f), R = pt(e, v);
        if (C && R) {
          if (l.rangeCount === 1 && l.anchorNode === C.node && l.anchorOffset === C.offset && l.focusNode === R.node && l.focusOffset === R.offset)
            return;
          var U = a.createRange();
          U.setStart(C.node, C.offset), l.removeAllRanges(), f > v ? (l.addRange(U), l.extend(R.node, R.offset)) : (U.setEnd(R.node, R.offset), l.addRange(U));
        }
      }
    }
    function jh(e) {
      return e && e.nodeType === Ki;
    }
    function i_(e, t) {
      return !e || !t ? !1 : e === t ? !0 : jh(e) ? !1 : jh(t) ? i_(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function V2(e) {
      return e && e.ownerDocument && i_(e.ownerDocument.documentElement, e);
    }
    function H2(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function o_() {
      for (var e = window, t = La(); t instanceof e.HTMLIFrameElement; ) {
        if (H2(t))
          e = t.contentWindow;
        else
          return t;
        t = La(e.document);
      }
      return t;
    }
    function eg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function I2() {
      var e = o_();
      return {
        focusedElem: e,
        selectionRange: eg(e) ? $2(e) : null
      };
    }
    function B2(e) {
      var t = o_(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && V2(a)) {
        i !== null && eg(a) && W2(a, i);
        for (var l = [], s = a; s = s.parentNode; )
          s.nodeType === Xr && l.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < l.length; f++) {
          var v = l[f];
          v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
        }
      }
    }
    function $2(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = ar(e), t || {
        start: 0,
        end: 0
      };
    }
    function W2(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : qo(e, t);
    }
    var Y2 = An && "documentMode" in document && document.documentMode <= 11;
    function Q2() {
      dt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Df = null, tg = null, vp = null, ng = !1;
    function G2(e) {
      if ("selectionStart" in e && eg(e))
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
    function q2(e) {
      return e.window === e ? e.document : e.nodeType === Xi ? e : e.ownerDocument;
    }
    function l_(e, t, a) {
      var i = q2(a);
      if (!(ng || Df == null || Df !== La(i))) {
        var l = G2(Df);
        if (!vp || !We(vp, l)) {
          vp = l;
          var s = Vh(tg, "onSelect");
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
    function K2(e, t, a, i, l, s, f) {
      var v = a ? Af(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (Ks(v) || v.contentEditable === "true") && (Df = v, tg = a, vp = null);
          break;
        case "focusout":
          Df = null, tg = null, vp = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          ng = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ng = !1, l_(e, i, l);
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
          if (Y2)
            break;
        // falls through
        case "keydown":
        case "keyup":
          l_(e, i, l);
      }
    }
    function zh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Of = {
      animationend: zh("Animation", "AnimationEnd"),
      animationiteration: zh("Animation", "AnimationIteration"),
      animationstart: zh("Animation", "AnimationStart"),
      transitionend: zh("Transition", "TransitionEnd")
    }, rg = {}, u_ = {};
    An && (u_ = document.createElement("div").style, "AnimationEvent" in window || (delete Of.animationend.animation, delete Of.animationiteration.animation, delete Of.animationstart.animation), "TransitionEvent" in window || delete Of.transitionend.transition);
    function Ph(e) {
      if (rg[e])
        return rg[e];
      if (!Of[e])
        return e;
      var t = Of[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in u_)
          return rg[e] = t[a];
      return e;
    }
    var s_ = Ph("animationend"), c_ = Ph("animationiteration"), f_ = Ph("animationstart"), d_ = Ph("transitionend"), p_ = /* @__PURE__ */ new Map(), v_ = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function zu(e, t) {
      p_.set(e, t), dt(t, [e]);
    }
    function X2() {
      for (var e = 0; e < v_.length; e++) {
        var t = v_[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        zu(a, "on" + i);
      }
      zu(s_, "onAnimationEnd"), zu(c_, "onAnimationIteration"), zu(f_, "onAnimationStart"), zu("dblclick", "onDoubleClick"), zu("focusin", "onFocus"), zu("focusout", "onBlur"), zu(d_, "onTransitionEnd");
    }
    function J2(e, t, a, i, l, s, f) {
      var v = p_.get(t);
      if (v !== void 0) {
        var g = Ui, C = t;
        switch (t) {
          case "keypress":
            if (Wo(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            g = xh;
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
            g = Oh;
            break;
          case s_:
          case c_:
          case f_:
            g = Eh;
            break;
          case d_:
            g = Ha;
            break;
          case "scroll":
            g = la;
            break;
          case "wheel":
            g = Ky;
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
            g = kh;
            break;
        }
        var R = (s & Na) !== 0;
        {
          var U = !R && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", M = nR(a, v, i.type, R, U);
          if (M.length > 0) {
            var B = new g(v, C, null, i, l);
            e.push({
              event: B,
              listeners: M
            });
          }
        }
      }
    }
    X2(), P(), Xs(), Q2(), Xy();
    function Z2(e, t, a, i, l, s, f) {
      J2(e, t, a, i, l, s);
      var v = (s & xd) === 0;
      v && (A(e, t, a, i, l), Nn(e, t, a, i, l), K2(e, t, a, i, l), Ah(e, t, a, i, l));
    }
    var hp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], ag = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(hp));
    function h_(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ti(i, t, void 0, e), e.currentTarget = null;
    }
    function eR(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], f = s.instance, v = s.currentTarget, g = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          h_(e, g, v), i = f;
        }
      else
        for (var C = 0; C < t.length; C++) {
          var R = t[C], U = R.instance, M = R.currentTarget, B = R.listener;
          if (U !== i && e.isPropagationStopped())
            return;
          h_(e, B, M), i = U;
        }
    }
    function m_(e, t) {
      for (var a = (t & Na) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, f = l.listeners;
        eR(s, f, a);
      }
      ms();
    }
    function tR(e, t, a, i, l) {
      var s = kd(a), f = [];
      Z2(f, e, i, a, s, t), m_(f, t);
    }
    function En(e, t) {
      ag.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = Lb(t), l = iR(e);
      i.has(l) || (y_(t, e, kc, a), i.add(l));
    }
    function ig(e, t, a) {
      ag.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Na), y_(a, e, i, t);
    }
    var Fh = "_reactListening" + Math.random().toString(36).slice(2);
    function mp(e) {
      if (!e[Fh]) {
        e[Fh] = !0, rt.forEach(function(a) {
          a !== "selectionchange" && (ag.has(a) || ig(a, !1, e), ig(a, !0, e));
        });
        var t = e.nodeType === Xi ? e : e.ownerDocument;
        t !== null && (t[Fh] || (t[Fh] = !0, ig("selectionchange", !1, t)));
      }
    }
    function y_(e, t, a, i, l) {
      var s = pr(e, t, a), f = void 0;
      hs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? rp(e, t, s, f) : oa(e, t, s) : f !== void 0 ? Mu(e, t, s, f) : Ws(e, t, s);
    }
    function g_(e, t) {
      return e === t || e.nodeType === jn && e.parentNode === t;
    }
    function og(e, t, a, i, l) {
      var s = i;
      if ((t & wd) === 0 && (t & kc) === 0) {
        var f = l;
        if (i !== null) {
          var v = i;
          e: for (; ; ) {
            if (v === null)
              return;
            var g = v.tag;
            if (g === H || g === q) {
              var C = v.stateNode.containerInfo;
              if (g_(C, f))
                break;
              if (g === q)
                for (var R = v.return; R !== null; ) {
                  var U = R.tag;
                  if (U === H || U === q) {
                    var M = R.stateNode.containerInfo;
                    if (g_(M, f))
                      return;
                  }
                  R = R.return;
                }
              for (; C !== null; ) {
                var B = ec(C);
                if (B === null)
                  return;
                var Q = B.tag;
                if (Q === G || Q === pe) {
                  v = s = B;
                  continue e;
                }
                C = C.parentNode;
              }
            }
            v = v.return;
          }
        }
      }
      Qv(function() {
        return tR(e, t, a, s);
      });
    }
    function yp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function nR(e, t, a, i, l, s) {
      for (var f = t !== null ? t + "Capture" : null, v = i ? f : t, g = [], C = e, R = null; C !== null; ) {
        var U = C, M = U.stateNode, B = U.tag;
        if (B === G && M !== null && (R = M, v !== null)) {
          var Q = No(C, v);
          Q != null && g.push(yp(C, Q, R));
        }
        if (l)
          break;
        C = C.return;
      }
      return g;
    }
    function Vh(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, f = s.stateNode, v = s.tag;
        if (v === G && f !== null) {
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
      while (e && e.tag !== G);
      return e || null;
    }
    function rR(e, t) {
      for (var a = e, i = t, l = 0, s = a; s; s = Lf(s))
        l++;
      for (var f = 0, v = i; v; v = Lf(v))
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
    function S_(e, t, a, i, l) {
      for (var s = t._reactName, f = [], v = a; v !== null && v !== i; ) {
        var g = v, C = g.alternate, R = g.stateNode, U = g.tag;
        if (C !== null && C === i)
          break;
        if (U === G && R !== null) {
          var M = R;
          if (l) {
            var B = No(v, s);
            B != null && f.unshift(yp(v, B, M));
          } else if (!l) {
            var Q = No(v, s);
            Q != null && f.push(yp(v, Q, M));
          }
        }
        v = v.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function aR(e, t, a, i, l) {
      var s = i && l ? rR(i, l) : null;
      i !== null && S_(e, t, i, s, !1), l !== null && a !== null && S_(e, a, l, s, !0);
    }
    function iR(e, t) {
      return e + "__bubble";
    }
    var Ia = !1, gp = "dangerouslySetInnerHTML", Hh = "suppressContentEditableWarning", Pu = "suppressHydrationWarning", __ = "autoFocus", Js = "children", Zs = "style", Ih = "__html", lg, Bh, Sp, C_, $h, E_, R_;
    lg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Bh = function(e, t) {
      Rd(e, t), wc(e, t), $v(e, t, {
        registrationNameDependencies: Ae,
        possibleRegistrationNames: st
      });
    }, E_ = An && !document.documentMode, Sp = function(e, t, a) {
      if (!Ia) {
        var i = Wh(a), l = Wh(t);
        l !== i && (Ia = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, C_ = function(e) {
      if (!Ia) {
        Ia = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, $h = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, R_ = function(e, t) {
      var a = e.namespaceURI === qi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var oR = /\r\n?/g, lR = /\u0000|\uFFFD/g;
    function Wh(e) {
      Zn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(oR, `
`).replace(lR, "");
    }
    function Yh(e, t, a, i) {
      var l = Wh(t), s = Wh(e);
      if (s !== l && (i && (Ia || (Ia = !0, y('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && Ce))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function b_(e) {
      return e.nodeType === Xi ? e : e.ownerDocument;
    }
    function uR() {
    }
    function Qh(e) {
      e.onclick = uR;
    }
    function sR(e, t, a, i, l) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Zs)
            f && Object.freeze(f), Pv(t, f);
          else if (s === gp) {
            var v = f ? f[Ih] : void 0;
            v != null && wv(t, v);
          } else if (s === Js)
            if (typeof f == "string") {
              var g = e !== "textarea" || f !== "";
              g && hu(t, f);
            } else typeof f == "number" && hu(t, "" + f);
          else s === Hh || s === Pu || s === __ || (Ae.hasOwnProperty(s) ? f != null && (typeof f != "function" && $h(s, f), s === "onScroll" && En("scroll", t)) : f != null && Or(t, s, f, l));
        }
    }
    function cR(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], f = t[l + 1];
        s === Zs ? Pv(e, f) : s === gp ? wv(e, f) : s === Js ? hu(e, f) : Or(e, s, f, i);
      }
    }
    function fR(e, t, a, i) {
      var l, s = b_(a), f, v = i;
      if (v === qi && (v = md(e)), v === qi) {
        if (l = Oo(e, t), !l && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
        f = s.createElementNS(v, e);
      return v === qi && !l && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Dr.call(lg, e) && (lg[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function dR(e, t) {
      return b_(t).createTextNode(e);
    }
    function pR(e, t, a, i) {
      var l = Oo(t, a);
      Bh(t, a);
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
          ai(e, a), s = vu(e, a), En("invalid", e);
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
      switch (bc(t, s), sR(t, e, i, s, l), t) {
        case "input":
          ri(e), $(e, a, !1);
          break;
        case "textarea":
          ri(e), bv(e);
          break;
        case "option":
          sn(e, a);
          break;
        case "select":
          cd(e, a);
          break;
        default:
          typeof s.onClick == "function" && Qh(e);
          break;
      }
    }
    function vR(e, t, a, i, l) {
      Bh(t, i);
      var s = null, f, v;
      switch (t) {
        case "input":
          f = vu(e, a), v = vu(e, i), s = [];
          break;
        case "select":
          f = os(e, a), v = os(e, i), s = [];
          break;
        case "textarea":
          f = dd(e, a), v = dd(e, i), s = [];
          break;
        default:
          f = a, v = i, typeof f.onClick != "function" && typeof v.onClick == "function" && Qh(e);
          break;
      }
      bc(t, v);
      var g, C, R = null;
      for (g in f)
        if (!(v.hasOwnProperty(g) || !f.hasOwnProperty(g) || f[g] == null))
          if (g === Zs) {
            var U = f[g];
            for (C in U)
              U.hasOwnProperty(C) && (R || (R = {}), R[C] = "");
          } else g === gp || g === Js || g === Hh || g === Pu || g === __ || (Ae.hasOwnProperty(g) ? s || (s = []) : (s = s || []).push(g, null));
      for (g in v) {
        var M = v[g], B = f?.[g];
        if (!(!v.hasOwnProperty(g) || M === B || M == null && B == null))
          if (g === Zs)
            if (M && Object.freeze(M), B) {
              for (C in B)
                B.hasOwnProperty(C) && (!M || !M.hasOwnProperty(C)) && (R || (R = {}), R[C] = "");
              for (C in M)
                M.hasOwnProperty(C) && B[C] !== M[C] && (R || (R = {}), R[C] = M[C]);
            } else
              R || (s || (s = []), s.push(g, R)), R = M;
          else if (g === gp) {
            var Q = M ? M[Ih] : void 0, ee = B ? B[Ih] : void 0;
            Q != null && ee !== Q && (s = s || []).push(g, Q);
          } else g === Js ? (typeof M == "string" || typeof M == "number") && (s = s || []).push(g, "" + M) : g === Hh || g === Pu || (Ae.hasOwnProperty(g) ? (M != null && (typeof M != "function" && $h(g, M), g === "onScroll" && En("scroll", e)), !s && B !== M && (s = [])) : (s = s || []).push(g, M));
      }
      return R && (Ay(R, v[Zs]), (s = s || []).push(Zs, R)), s;
    }
    function hR(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && S(e, l);
      var s = Oo(a, i), f = Oo(a, l);
      switch (cR(e, t, s, f), a) {
        case "input":
          D(e, l);
          break;
        case "textarea":
          Rv(e, l);
          break;
        case "select":
          Cc(e, l);
          break;
      }
    }
    function mR(e) {
      {
        var t = e.toLowerCase();
        return fs.hasOwnProperty(t) && fs[t] || null;
      }
    }
    function yR(e, t, a, i, l, s, f) {
      var v, g;
      switch (v = Oo(t, a), Bh(t, a), t) {
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
      bc(t, a);
      {
        g = /* @__PURE__ */ new Set();
        for (var R = e.attributes, U = 0; U < R.length; U++) {
          var M = R[U].name.toLowerCase();
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
              g.add(R[U].name);
          }
        }
      }
      var B = null;
      for (var Q in a)
        if (a.hasOwnProperty(Q)) {
          var ee = a[Q];
          if (Q === Js)
            typeof ee == "string" ? e.textContent !== ee && (a[Pu] !== !0 && Yh(e.textContent, ee, s, f), B = [Js, ee]) : typeof ee == "number" && e.textContent !== "" + ee && (a[Pu] !== !0 && Yh(e.textContent, ee, s, f), B = [Js, "" + ee]);
          else if (Ae.hasOwnProperty(Q))
            ee != null && (typeof ee != "function" && $h(Q, ee), Q === "onScroll" && En("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof v == "boolean") {
            var Ne = void 0, it = ln(Q);
            if (a[Pu] !== !0) {
              if (!(Q === Hh || Q === Pu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Q === "value" || Q === "checked" || Q === "selected")) {
                if (Q === gp) {
                  var Ke = e.innerHTML, Ut = ee ? ee[Ih] : void 0;
                  if (Ut != null) {
                    var Ot = R_(e, Ut);
                    Ot !== Ke && Sp(Q, Ke, Ot);
                  }
                } else if (Q === Zs) {
                  if (g.delete(Q), E_) {
                    var F = Ny(ee);
                    Ne = e.getAttribute("style"), F !== Ne && Sp(Q, Ne, F);
                  }
                } else if (v && !j)
                  g.delete(Q.toLowerCase()), Ne = ul(e, Q, ee), ee !== Ne && Sp(Q, Ne, ee);
                else if (!yn(Q, it, v) && !er(Q, ee, it, v)) {
                  var te = !1;
                  if (it !== null)
                    g.delete(it.attributeName), Ne = Co(e, Q, ee, it);
                  else {
                    var V = i;
                    if (V === qi && (V = md(t)), V === qi)
                      g.delete(Q.toLowerCase());
                    else {
                      var he = mR(Q);
                      he !== null && he !== Q && (te = !0, g.delete(he)), g.delete(Q);
                    }
                    Ne = ul(e, Q, ee);
                  }
                  var Fe = j;
                  !Fe && ee !== Ne && !te && Sp(Q, Ne, ee);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      g.size > 0 && a[Pu] !== !0 && C_(g), t) {
        case "input":
          ri(e), $(e, a, !0);
          break;
        case "textarea":
          ri(e), bv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Qh(e);
          break;
      }
      return B;
    }
    function gR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ug(e, t) {
      {
        if (Ia)
          return;
        Ia = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function sg(e, t) {
      {
        if (Ia)
          return;
        Ia = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function cg(e, t, a) {
      {
        if (Ia)
          return;
        Ia = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function fg(e, t) {
      {
        if (t === "" || Ia)
          return;
        Ia = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function SR(e, t, a) {
      switch (t) {
        case "input":
          X(e, a);
          return;
        case "textarea":
          ky(e, a);
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
      var _R = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], T_ = [
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
      ], CR = T_.concat(["button"]), ER = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], w_ = {
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
        var a = Et({}, e || w_), i = {
          tag: t
        };
        return T_.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), CR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), _R.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var RR = function(e, t) {
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
            return ER.indexOf(t) === -1;
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
      }, bR = function(e, t) {
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
      }, x_ = {};
      _p = function(e, t, a) {
        a = a || w_;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = RR(e, l) ? null : i, f = s ? null : bR(e, a), v = s || f;
        if (v) {
          var g = v.tag, C = !!s + "|" + e + "|" + g;
          if (!x_[C]) {
            x_[C] = !0;
            var R = e, U = "";
            if (e === "#text" ? /\S/.test(t) ? R = "Text nodes" : (R = "Whitespace text nodes", U = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : R = "<" + e + ">", s) {
              var M = "";
              g === "table" && e === "tr" && (M += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", R, g, U, M);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", R, g);
          }
        }
      };
    }
    var Gh = "suppressHydrationWarning", qh = "$", Kh = "/$", Ep = "$?", Rp = "$!", TR = "style", dg = null, pg = null;
    function wR(e) {
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
        var v = t.toLowerCase(), g = Cp(null, v);
        return {
          namespace: a,
          ancestorInfo: g
        };
      }
    }
    function xR(e, t, a) {
      {
        var i = e, l = yd(i.namespace, t), s = Cp(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function h3(e) {
      return e;
    }
    function kR(e) {
      dg = In(), pg = I2();
      var t = null;
      return Xn(!1), t;
    }
    function DR(e) {
      B2(pg), Xn(dg), dg = null, pg = null;
    }
    function OR(e, t, a, i, l) {
      var s;
      {
        var f = i;
        if (_p(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var v = "" + t.children, g = Cp(f.ancestorInfo, e);
          _p(null, v, g);
        }
        s = f.namespace;
      }
      var C = fR(e, t, a, s);
      return wp(l, C), Cg(C, t), C;
    }
    function LR(e, t) {
      e.appendChild(t);
    }
    function NR(e, t, a, i, l) {
      switch (pR(e, t, a, i), t) {
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
    function MR(e, t, a, i, l, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var v = "" + i.children, g = Cp(f.ancestorInfo, t);
          _p(null, v, g);
        }
      }
      return vR(e, t, a, i);
    }
    function vg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function AR(e, t, a, i) {
      {
        var l = a;
        _p(null, e, l.ancestorInfo);
      }
      var s = dR(e, t);
      return wp(i, s), s;
    }
    function UR() {
      var e = window.event;
      return e === void 0 ? Pa : gf(e.type);
    }
    var hg = typeof setTimeout == "function" ? setTimeout : void 0, jR = typeof clearTimeout == "function" ? clearTimeout : void 0, mg = -1, k_ = typeof Promise == "function" ? Promise : void 0, zR = typeof queueMicrotask == "function" ? queueMicrotask : typeof k_ < "u" ? function(e) {
      return k_.resolve(null).then(e).catch(PR);
    } : hg;
    function PR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function FR(e, t, a, i) {
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
    function VR(e, t, a, i, l, s) {
      hR(e, t, a, i, l), Cg(e, l);
    }
    function D_(e) {
      hu(e, "");
    }
    function HR(e, t, a) {
      e.nodeValue = a;
    }
    function IR(e, t) {
      e.appendChild(t);
    }
    function BR(e, t) {
      var a;
      e.nodeType === jn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Qh(a);
    }
    function $R(e, t, a) {
      e.insertBefore(t, a);
    }
    function WR(e, t, a) {
      e.nodeType === jn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function YR(e, t) {
      e.removeChild(t);
    }
    function QR(e, t) {
      e.nodeType === jn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function yg(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === jn) {
          var s = l.data;
          if (s === Kh)
            if (i === 0) {
              e.removeChild(l), jl(t);
              return;
            } else
              i--;
          else (s === qh || s === Ep || s === Rp) && i++;
        }
        a = l;
      } while (a);
      jl(t);
    }
    function GR(e, t) {
      e.nodeType === jn ? yg(e.parentNode, t) : e.nodeType === Xr && yg(e, t), jl(e);
    }
    function qR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function KR(e) {
      e.nodeValue = "";
    }
    function XR(e, t) {
      e = e;
      var a = t[TR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Rc("display", i);
    }
    function JR(e, t) {
      e.nodeValue = t;
    }
    function ZR(e) {
      e.nodeType === Xr ? e.textContent = "" : e.nodeType === Xi && e.documentElement && e.removeChild(e.documentElement);
    }
    function eb(e, t, a) {
      return e.nodeType !== Xr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function tb(e, t) {
      return t === "" || e.nodeType !== Ki ? null : e;
    }
    function nb(e) {
      return e.nodeType !== jn ? null : e;
    }
    function O_(e) {
      return e.data === Ep;
    }
    function gg(e) {
      return e.data === Rp;
    }
    function rb(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function ab(e, t) {
      e._reactRetry = t;
    }
    function Xh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Xr || t === Ki)
          break;
        if (t === jn) {
          var a = e.data;
          if (a === qh || a === Rp || a === Ep)
            break;
          if (a === Kh)
            return null;
        }
      }
      return e;
    }
    function bp(e) {
      return Xh(e.nextSibling);
    }
    function ib(e) {
      return Xh(e.firstChild);
    }
    function ob(e) {
      return Xh(e.firstChild);
    }
    function lb(e) {
      return Xh(e.nextSibling);
    }
    function ub(e, t, a, i, l, s, f) {
      wp(s, e), Cg(e, a);
      var v;
      {
        var g = l;
        v = g.namespace;
      }
      var C = (s.mode & xt) !== tt;
      return yR(e, t, a, v, i, C, f);
    }
    function sb(e, t, a, i) {
      return wp(a, e), a.mode & xt, gR(e, t);
    }
    function cb(e, t) {
      wp(t, e);
    }
    function fb(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === jn) {
          var i = t.data;
          if (i === Kh) {
            if (a === 0)
              return bp(t);
            a--;
          } else (i === qh || i === Rp || i === Ep) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function L_(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === jn) {
          var i = t.data;
          if (i === qh || i === Rp || i === Ep) {
            if (a === 0)
              return t;
            a--;
          } else i === Kh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function db(e) {
      jl(e);
    }
    function pb(e) {
      jl(e);
    }
    function vb(e) {
      return e !== "head" && e !== "body";
    }
    function hb(e, t, a, i) {
      var l = !0;
      Yh(t.nodeValue, a, i, l);
    }
    function mb(e, t, a, i, l, s) {
      if (t[Gh] !== !0) {
        var f = !0;
        Yh(i.nodeValue, l, s, f);
      }
    }
    function yb(e, t) {
      t.nodeType === Xr ? ug(e, t) : t.nodeType === jn || sg(e, t);
    }
    function gb(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Xr ? ug(a, t) : t.nodeType === jn || sg(a, t));
      }
    }
    function Sb(e, t, a, i, l) {
      (l || t[Gh] !== !0) && (i.nodeType === Xr ? ug(a, i) : i.nodeType === jn || sg(a, i));
    }
    function _b(e, t, a) {
      cg(e, t);
    }
    function Cb(e, t) {
      fg(e, t);
    }
    function Eb(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && cg(i, t);
      }
    }
    function Rb(e, t) {
      {
        var a = e.parentNode;
        a !== null && fg(a, t);
      }
    }
    function bb(e, t, a, i, l, s) {
      (s || t[Gh] !== !0) && cg(a, i);
    }
    function Tb(e, t, a, i, l) {
      (l || t[Gh] !== !0) && fg(a, i);
    }
    function wb(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function xb(e) {
      mp(e);
    }
    var Nf = Math.random().toString(36).slice(2), Mf = "__reactFiber$" + Nf, Sg = "__reactProps$" + Nf, Tp = "__reactContainer$" + Nf, _g = "__reactEvents$" + Nf, kb = "__reactListeners$" + Nf, Db = "__reactHandles$" + Nf;
    function Ob(e) {
      delete e[Mf], delete e[Sg], delete e[_g], delete e[kb], delete e[Db];
    }
    function wp(e, t) {
      t[Mf] = e;
    }
    function Jh(e, t) {
      t[Tp] = e;
    }
    function N_(e) {
      e[Tp] = null;
    }
    function xp(e) {
      return !!e[Tp];
    }
    function ec(e) {
      var t = e[Mf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Tp] || a[Mf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = L_(e); l !== null; ) {
              var s = l[Mf];
              if (s)
                return s;
              l = L_(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Fu(e) {
      var t = e[Mf] || e[Tp];
      return t && (t.tag === G || t.tag === pe || t.tag === ne || t.tag === H) ? t : null;
    }
    function Af(e) {
      if (e.tag === G || e.tag === pe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Zh(e) {
      return e[Sg] || null;
    }
    function Cg(e, t) {
      e[Sg] = t;
    }
    function Lb(e) {
      var t = e[_g];
      return t === void 0 && (t = e[_g] = /* @__PURE__ */ new Set()), t;
    }
    var M_ = {}, A_ = m.ReactDebugCurrentFrame;
    function em(e) {
      if (e) {
        var t = e._owner, a = Yi(e.type, e._source, t ? t.type : null);
        A_.setExtraStackFrame(a);
      } else
        A_.setExtraStackFrame(null);
    }
    function uo(e, t, a, i, l) {
      {
        var s = Function.call.bind(Dr);
        for (var f in e)
          if (s(e, f)) {
            var v = void 0;
            try {
              if (typeof e[f] != "function") {
                var g = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              v = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              v = C;
            }
            v && !(v instanceof Error) && (em(l), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof v), em(null)), v instanceof Error && !(v.message in M_) && (M_[v.message] = !0, em(l), y("Failed %s type: %s", a, v.message), em(null));
          }
      }
    }
    var Eg = [], tm;
    tm = [];
    var Il = -1;
    function Vu(e) {
      return {
        current: e
      };
    }
    function ua(e, t) {
      if (Il < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== tm[Il] && y("Unexpected Fiber popped."), e.current = Eg[Il], Eg[Il] = null, tm[Il] = null, Il--;
    }
    function sa(e, t, a) {
      Il++, Eg[Il] = e.current, tm[Il] = a, e.current = t;
    }
    var Rg;
    Rg = {};
    var fi = {};
    Object.freeze(fi);
    var Bl = Vu(fi), Ko = Vu(!1), bg = fi;
    function Uf(e, t, a) {
      return a && Xo(t) ? bg : Bl.current;
    }
    function U_(e, t, a) {
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
          var v = vt(e) || "Unknown";
          uo(i, s, "context", v);
        }
        return l && U_(e, t, s), s;
      }
    }
    function nm() {
      return Ko.current;
    }
    function Xo(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function rm(e) {
      ua(Ko, e), ua(Bl, e);
    }
    function Tg(e) {
      ua(Ko, e), ua(Bl, e);
    }
    function j_(e, t, a) {
      {
        if (Bl.current !== fi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        sa(Bl, t, e), sa(Ko, a, e);
      }
    }
    function z_(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = vt(e) || "Unknown";
            Rg[s] || (Rg[s] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var v in f)
          if (!(v in l))
            throw new Error((vt(e) || "Unknown") + '.getChildContext(): key "' + v + '" is not defined in childContextTypes.');
        {
          var g = vt(e) || "Unknown";
          uo(l, f, "child context", g);
        }
        return Et({}, a, f);
      }
    }
    function am(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || fi;
        return bg = Bl.current, sa(Bl, a, e), sa(Ko, Ko.current, e), !0;
      }
    }
    function P_(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = z_(e, t, bg);
          i.__reactInternalMemoizedMergedChildContext = l, ua(Ko, e), ua(Bl, e), sa(Bl, l, e), sa(Ko, a, e);
        } else
          ua(Ko, e), sa(Ko, a, e);
      }
    }
    function Nb(e) {
      {
        if (!El(e) || e.tag !== T)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case H:
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
    var Hu = 0, im = 1, $l = null, wg = !1, xg = !1;
    function F_(e) {
      $l === null ? $l = [e] : $l.push(e);
    }
    function Mb(e) {
      wg = !0, F_(e);
    }
    function V_() {
      wg && Iu();
    }
    function Iu() {
      if (!xg && $l !== null) {
        xg = !0;
        var e = 0, t = Va();
        try {
          var a = !0, i = $l;
          for (Hn(Ur); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          $l = null, wg = !1;
        } catch (s) {
          throw $l !== null && ($l = $l.slice(e + 1)), Od(Ss, Iu), s;
        } finally {
          Hn(t), xg = !1;
        }
      }
      return null;
    }
    var zf = [], Pf = 0, om = null, lm = 0, ji = [], zi = 0, tc = null, Wl = 1, Yl = "";
    function Ab(e) {
      return rc(), (e.flags & wi) !== et;
    }
    function Ub(e) {
      return rc(), lm;
    }
    function jb() {
      var e = Yl, t = Wl, a = t & ~zb(t);
      return a.toString(32) + e;
    }
    function nc(e, t) {
      rc(), zf[Pf++] = lm, zf[Pf++] = om, om = e, lm = t;
    }
    function H_(e, t, a) {
      rc(), ji[zi++] = Wl, ji[zi++] = Yl, ji[zi++] = tc, tc = e;
      var i = Wl, l = Yl, s = um(i) - 1, f = i & ~(1 << s), v = a + 1, g = um(t) + s;
      if (g > 30) {
        var C = s - s % 5, R = (1 << C) - 1, U = (f & R).toString(32), M = f >> C, B = s - C, Q = um(t) + B, ee = v << B, Ne = ee | M, it = U + l;
        Wl = 1 << Q | Ne, Yl = it;
      } else {
        var Ke = v << s, Ut = Ke | f, Ot = l;
        Wl = 1 << g | Ut, Yl = Ot;
      }
    }
    function kg(e) {
      rc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        nc(e, a), H_(e, a, i);
      }
    }
    function um(e) {
      return 32 - Fn(e);
    }
    function zb(e) {
      return 1 << um(e) - 1;
    }
    function Dg(e) {
      for (; e === om; )
        om = zf[--Pf], zf[Pf] = null, lm = zf[--Pf], zf[Pf] = null;
      for (; e === tc; )
        tc = ji[--zi], ji[zi] = null, Yl = ji[--zi], ji[zi] = null, Wl = ji[--zi], ji[zi] = null;
    }
    function Pb() {
      return rc(), tc !== null ? {
        id: Wl,
        overflow: Yl
      } : null;
    }
    function Fb(e, t) {
      rc(), ji[zi++] = Wl, ji[zi++] = Yl, ji[zi++] = tc, Wl = t.id, Yl = t.overflow, tc = e;
    }
    function rc() {
      Vr() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Fr = null, Pi = null, so = !1, ac = !1, Bu = null;
    function Vb() {
      so && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function I_() {
      ac = !0;
    }
    function Hb() {
      return ac;
    }
    function Ib(e) {
      var t = e.stateNode.containerInfo;
      return Pi = ob(t), Fr = e, so = !0, Bu = null, ac = !1, !0;
    }
    function Bb(e, t, a) {
      return Pi = lb(t), Fr = e, so = !0, Bu = null, ac = !1, a !== null && Fb(e, a), !0;
    }
    function B_(e, t) {
      switch (e.tag) {
        case H: {
          yb(e.stateNode.containerInfo, t);
          break;
        }
        case G: {
          var a = (e.mode & xt) !== tt;
          Sb(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case ne: {
          var i = e.memoizedState;
          i.dehydrated !== null && gb(i.dehydrated, t);
          break;
        }
      }
    }
    function $_(e, t) {
      B_(e, t);
      var a = Qx();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ma) : i.push(a);
    }
    function Og(e, t) {
      {
        if (ac)
          return;
        switch (e.tag) {
          case H: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case G:
                var i = t.type;
                t.pendingProps, _b(a, i);
                break;
              case pe:
                var l = t.pendingProps;
                Cb(a, l);
                break;
            }
            break;
          }
          case G: {
            var s = e.type, f = e.memoizedProps, v = e.stateNode;
            switch (t.tag) {
              case G: {
                var g = t.type, C = t.pendingProps, R = (e.mode & xt) !== tt;
                bb(
                  s,
                  f,
                  v,
                  g,
                  C,
                  // TODO: Delete this argument when we remove the legacy root API.
                  R
                );
                break;
              }
              case pe: {
                var U = t.pendingProps, M = (e.mode & xt) !== tt;
                Tb(
                  s,
                  f,
                  v,
                  U,
                  // TODO: Delete this argument when we remove the legacy root API.
                  M
                );
                break;
              }
            }
            break;
          }
          case ne: {
            var B = e.memoizedState, Q = B.dehydrated;
            if (Q !== null) switch (t.tag) {
              case G:
                var ee = t.type;
                t.pendingProps, Eb(Q, ee);
                break;
              case pe:
                var Ne = t.pendingProps;
                Rb(Q, Ne);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function W_(e, t) {
      t.flags = t.flags & ~Zr | Sn, Og(e, t);
    }
    function Y_(e, t) {
      switch (e.tag) {
        case G: {
          var a = e.type;
          e.pendingProps;
          var i = eb(t, a);
          return i !== null ? (e.stateNode = i, Fr = e, Pi = ib(i), !0) : !1;
        }
        case pe: {
          var l = e.pendingProps, s = tb(t, l);
          return s !== null ? (e.stateNode = s, Fr = e, Pi = null, !0) : !1;
        }
        case ne: {
          var f = nb(t);
          if (f !== null) {
            var v = {
              dehydrated: f,
              treeContext: Pb(),
              retryLane: ra
            };
            e.memoizedState = v;
            var g = Gx(f);
            return g.return = e, e.child = g, Fr = e, Pi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Lg(e) {
      return (e.mode & xt) !== tt && (e.flags & Xe) === et;
    }
    function Ng(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Mg(e) {
      if (so) {
        var t = Pi;
        if (!t) {
          Lg(e) && (Og(Fr, e), Ng()), W_(Fr, e), so = !1, Fr = e;
          return;
        }
        var a = t;
        if (!Y_(e, t)) {
          Lg(e) && (Og(Fr, e), Ng()), t = bp(a);
          var i = Fr;
          if (!t || !Y_(e, t)) {
            W_(Fr, e), so = !1, Fr = e;
            return;
          }
          $_(i, a);
        }
      }
    }
    function $b(e, t, a) {
      var i = e.stateNode, l = !ac, s = ub(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function Wb(e) {
      var t = e.stateNode, a = e.memoizedProps, i = sb(t, a, e);
      if (i) {
        var l = Fr;
        if (l !== null)
          switch (l.tag) {
            case H: {
              var s = l.stateNode.containerInfo, f = (l.mode & xt) !== tt;
              hb(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case G: {
              var v = l.type, g = l.memoizedProps, C = l.stateNode, R = (l.mode & xt) !== tt;
              mb(
                v,
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
    function Yb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      cb(a, e);
    }
    function Qb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return fb(a);
    }
    function Q_(e) {
      for (var t = e.return; t !== null && t.tag !== G && t.tag !== H && t.tag !== ne; )
        t = t.return;
      Fr = t;
    }
    function sm(e) {
      if (e !== Fr)
        return !1;
      if (!so)
        return Q_(e), so = !0, !1;
      if (e.tag !== H && (e.tag !== G || vb(e.type) && !vg(e.type, e.memoizedProps))) {
        var t = Pi;
        if (t)
          if (Lg(e))
            G_(e), Ng();
          else
            for (; t; )
              $_(e, t), t = bp(t);
      }
      return Q_(e), e.tag === ne ? Pi = Qb(e) : Pi = Fr ? bp(e.stateNode) : null, !0;
    }
    function Gb() {
      return so && Pi !== null;
    }
    function G_(e) {
      for (var t = Pi; t; )
        B_(e, t), t = bp(t);
    }
    function Ff() {
      Fr = null, Pi = null, so = !1, ac = !1;
    }
    function q_() {
      Bu !== null && (I1(Bu), Bu = null);
    }
    function Vr() {
      return so;
    }
    function Ag(e) {
      Bu === null ? Bu = [e] : Bu.push(e);
    }
    var qb = m.ReactCurrentBatchConfig, Kb = null;
    function Xb() {
      return qb.transition;
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
      var Jb = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & en && (t = a), a = a.return;
        return t;
      }, ic = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, kp = [], Dp = [], Op = [], Lp = [], Np = [], Mp = [], oc = /* @__PURE__ */ new Set();
      co.recordUnsafeLifecycleWarnings = function(e, t) {
        oc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && kp.push(e), e.mode & en && typeof t.UNSAFE_componentWillMount == "function" && Dp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Op.push(e), e.mode & en && typeof t.UNSAFE_componentWillReceiveProps == "function" && Lp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Np.push(e), e.mode & en && typeof t.UNSAFE_componentWillUpdate == "function" && Mp.push(e));
      }, co.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        kp.length > 0 && (kp.forEach(function(M) {
          e.add(vt(M) || "Component"), oc.add(M.type);
        }), kp = []);
        var t = /* @__PURE__ */ new Set();
        Dp.length > 0 && (Dp.forEach(function(M) {
          t.add(vt(M) || "Component"), oc.add(M.type);
        }), Dp = []);
        var a = /* @__PURE__ */ new Set();
        Op.length > 0 && (Op.forEach(function(M) {
          a.add(vt(M) || "Component"), oc.add(M.type);
        }), Op = []);
        var i = /* @__PURE__ */ new Set();
        Lp.length > 0 && (Lp.forEach(function(M) {
          i.add(vt(M) || "Component"), oc.add(M.type);
        }), Lp = []);
        var l = /* @__PURE__ */ new Set();
        Np.length > 0 && (Np.forEach(function(M) {
          l.add(vt(M) || "Component"), oc.add(M.type);
        }), Np = []);
        var s = /* @__PURE__ */ new Set();
        if (Mp.length > 0 && (Mp.forEach(function(M) {
          s.add(vt(M) || "Component"), oc.add(M.type);
        }), Mp = []), t.size > 0) {
          var f = ic(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var v = ic(i);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, v);
        }
        if (s.size > 0) {
          var g = ic(s);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, g);
        }
        if (e.size > 0) {
          var C = ic(e);
          b(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (a.size > 0) {
          var R = ic(a);
          b(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (l.size > 0) {
          var U = ic(l);
          b(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, U);
        }
      };
      var cm = /* @__PURE__ */ new Map(), K_ = /* @__PURE__ */ new Set();
      co.recordLegacyContextWarning = function(e, t) {
        var a = Jb(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!K_.has(e.type)) {
          var i = cm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], cm.set(a, i)), i.push(e));
        }
      }, co.flushLegacyContextWarning = function() {
        cm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(vt(s) || "Component"), K_.add(s.type);
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
        kp = [], Dp = [], Op = [], Lp = [], Np = [], Mp = [], cm = /* @__PURE__ */ new Map();
      };
    }
    var Ug, jg, zg, Pg, Fg, X_ = function(e, t) {
    };
    Ug = !1, jg = !1, zg = {}, Pg = {}, Fg = {}, X_ = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = vt(t) || "Component";
        Pg[a] || (Pg[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Zb(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Ap(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & en || J) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== T) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Zb(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var l = vt(e) || "Component";
          zg[l] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, i), zg[l] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var v = s;
            if (v.tag !== T)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = v.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var g = f;
          vi(i, "ref");
          var C = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === C)
            return t.ref;
          var R = function(U) {
            var M = g.refs;
            U === null ? delete M[C] : M[C] = U;
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
    function fm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function dm(e) {
      {
        var t = vt(e) || "Component";
        if (Fg[t])
          return;
        Fg[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function J_(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function Z_(e) {
      function t(F, te) {
        if (e) {
          var V = F.deletions;
          V === null ? (F.deletions = [te], F.flags |= Ma) : V.push(te);
        }
      }
      function a(F, te) {
        if (!e)
          return null;
        for (var V = te; V !== null; )
          t(F, V), V = V.sibling;
        return null;
      }
      function i(F, te) {
        for (var V = /* @__PURE__ */ new Map(), he = te; he !== null; )
          he.key !== null ? V.set(he.key, he) : V.set(he.index, he), he = he.sibling;
        return V;
      }
      function l(F, te) {
        var V = hc(F, te);
        return V.index = 0, V.sibling = null, V;
      }
      function s(F, te, V) {
        if (F.index = V, !e)
          return F.flags |= wi, te;
        var he = F.alternate;
        if (he !== null) {
          var Fe = he.index;
          return Fe < te ? (F.flags |= Sn, te) : Fe;
        } else
          return F.flags |= Sn, te;
      }
      function f(F) {
        return e && F.alternate === null && (F.flags |= Sn), F;
      }
      function v(F, te, V, he) {
        if (te === null || te.tag !== pe) {
          var Fe = AS(V, F.mode, he);
          return Fe.return = F, Fe;
        } else {
          var Ue = l(te, V);
          return Ue.return = F, Ue;
        }
      }
      function g(F, te, V, he) {
        var Fe = V.type;
        if (Fe === mi)
          return R(F, te, V.props.children, he, V.key);
        if (te !== null && (te.elementType === Fe || // Keep this check inline so it only runs on the false path:
        aE(te, V) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Fe == "object" && Fe !== null && Fe.$$typeof === mt && J_(Fe) === te.type)) {
          var Ue = l(te, V.props);
          return Ue.ref = Ap(F, te, V), Ue.return = F, Ue._debugSource = V._source, Ue._debugOwner = V._owner, Ue;
        }
        var ft = MS(V, F.mode, he);
        return ft.ref = Ap(F, te, V), ft.return = F, ft;
      }
      function C(F, te, V, he) {
        if (te === null || te.tag !== q || te.stateNode.containerInfo !== V.containerInfo || te.stateNode.implementation !== V.implementation) {
          var Fe = US(V, F.mode, he);
          return Fe.return = F, Fe;
        } else {
          var Ue = l(te, V.children || []);
          return Ue.return = F, Ue;
        }
      }
      function R(F, te, V, he, Fe) {
        if (te === null || te.tag !== ie) {
          var Ue = es(V, F.mode, he, Fe);
          return Ue.return = F, Ue;
        } else {
          var ft = l(te, V);
          return ft.return = F, ft;
        }
      }
      function U(F, te, V) {
        if (typeof te == "string" && te !== "" || typeof te == "number") {
          var he = AS("" + te, F.mode, V);
          return he.return = F, he;
        }
        if (typeof te == "object" && te !== null) {
          switch (te.$$typeof) {
            case Lr: {
              var Fe = MS(te, F.mode, V);
              return Fe.ref = Ap(F, null, te), Fe.return = F, Fe;
            }
            case lr: {
              var Ue = US(te, F.mode, V);
              return Ue.return = F, Ue;
            }
            case mt: {
              var ft = te._payload, gt = te._init;
              return U(F, gt(ft), V);
            }
          }
          if (bt(te) || _t(te)) {
            var nn = es(te, F.mode, V, null);
            return nn.return = F, nn;
          }
          fm(F, te);
        }
        return typeof te == "function" && dm(F), null;
      }
      function M(F, te, V, he) {
        var Fe = te !== null ? te.key : null;
        if (typeof V == "string" && V !== "" || typeof V == "number")
          return Fe !== null ? null : v(F, te, "" + V, he);
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case Lr:
              return V.key === Fe ? g(F, te, V, he) : null;
            case lr:
              return V.key === Fe ? C(F, te, V, he) : null;
            case mt: {
              var Ue = V._payload, ft = V._init;
              return M(F, te, ft(Ue), he);
            }
          }
          if (bt(V) || _t(V))
            return Fe !== null ? null : R(F, te, V, he, null);
          fm(F, V);
        }
        return typeof V == "function" && dm(F), null;
      }
      function B(F, te, V, he, Fe) {
        if (typeof he == "string" && he !== "" || typeof he == "number") {
          var Ue = F.get(V) || null;
          return v(te, Ue, "" + he, Fe);
        }
        if (typeof he == "object" && he !== null) {
          switch (he.$$typeof) {
            case Lr: {
              var ft = F.get(he.key === null ? V : he.key) || null;
              return g(te, ft, he, Fe);
            }
            case lr: {
              var gt = F.get(he.key === null ? V : he.key) || null;
              return C(te, gt, he, Fe);
            }
            case mt:
              var nn = he._payload, Bt = he._init;
              return B(F, te, V, Bt(nn), Fe);
          }
          if (bt(he) || _t(he)) {
            var Jn = F.get(V) || null;
            return R(te, Jn, he, Fe, null);
          }
          fm(te, he);
        }
        return typeof he == "function" && dm(te), null;
      }
      function Q(F, te, V) {
        {
          if (typeof F != "object" || F === null)
            return te;
          switch (F.$$typeof) {
            case Lr:
            case lr:
              X_(F, V);
              var he = F.key;
              if (typeof he != "string")
                break;
              if (te === null) {
                te = /* @__PURE__ */ new Set(), te.add(he);
                break;
              }
              if (!te.has(he)) {
                te.add(he);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", he);
              break;
            case mt:
              var Fe = F._payload, Ue = F._init;
              Q(Ue(Fe), te, V);
              break;
          }
        }
        return te;
      }
      function ee(F, te, V, he) {
        for (var Fe = null, Ue = 0; Ue < V.length; Ue++) {
          var ft = V[Ue];
          Fe = Q(ft, Fe, F);
        }
        for (var gt = null, nn = null, Bt = te, Jn = 0, $t = 0, $n = null; Bt !== null && $t < V.length; $t++) {
          Bt.index > $t ? ($n = Bt, Bt = null) : $n = Bt.sibling;
          var fa = M(F, Bt, V[$t], he);
          if (fa === null) {
            Bt === null && (Bt = $n);
            break;
          }
          e && Bt && fa.alternate === null && t(F, Bt), Jn = s(fa, Jn, $t), nn === null ? gt = fa : nn.sibling = fa, nn = fa, Bt = $n;
        }
        if ($t === V.length) {
          if (a(F, Bt), Vr()) {
            var Qr = $t;
            nc(F, Qr);
          }
          return gt;
        }
        if (Bt === null) {
          for (; $t < V.length; $t++) {
            var pi = U(F, V[$t], he);
            pi !== null && (Jn = s(pi, Jn, $t), nn === null ? gt = pi : nn.sibling = pi, nn = pi);
          }
          if (Vr()) {
            var wa = $t;
            nc(F, wa);
          }
          return gt;
        }
        for (var xa = i(F, Bt); $t < V.length; $t++) {
          var da = B(xa, F, $t, V[$t], he);
          da !== null && (e && da.alternate !== null && xa.delete(da.key === null ? $t : da.key), Jn = s(da, Jn, $t), nn === null ? gt = da : nn.sibling = da, nn = da);
        }
        if (e && xa.forEach(function(ad) {
          return t(F, ad);
        }), Vr()) {
          var Zl = $t;
          nc(F, Zl);
        }
        return gt;
      }
      function Ne(F, te, V, he) {
        var Fe = _t(V);
        if (typeof Fe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          V[Symbol.toStringTag] === "Generator" && (jg || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), jg = !0), V.entries === Fe && (Ug || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ug = !0);
          var Ue = Fe.call(V);
          if (Ue)
            for (var ft = null, gt = Ue.next(); !gt.done; gt = Ue.next()) {
              var nn = gt.value;
              ft = Q(nn, ft, F);
            }
        }
        var Bt = Fe.call(V);
        if (Bt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Jn = null, $t = null, $n = te, fa = 0, Qr = 0, pi = null, wa = Bt.next(); $n !== null && !wa.done; Qr++, wa = Bt.next()) {
          $n.index > Qr ? (pi = $n, $n = null) : pi = $n.sibling;
          var xa = M(F, $n, wa.value, he);
          if (xa === null) {
            $n === null && ($n = pi);
            break;
          }
          e && $n && xa.alternate === null && t(F, $n), fa = s(xa, fa, Qr), $t === null ? Jn = xa : $t.sibling = xa, $t = xa, $n = pi;
        }
        if (wa.done) {
          if (a(F, $n), Vr()) {
            var da = Qr;
            nc(F, da);
          }
          return Jn;
        }
        if ($n === null) {
          for (; !wa.done; Qr++, wa = Bt.next()) {
            var Zl = U(F, wa.value, he);
            Zl !== null && (fa = s(Zl, fa, Qr), $t === null ? Jn = Zl : $t.sibling = Zl, $t = Zl);
          }
          if (Vr()) {
            var ad = Qr;
            nc(F, ad);
          }
          return Jn;
        }
        for (var dv = i(F, $n); !wa.done; Qr++, wa = Bt.next()) {
          var il = B(dv, F, Qr, wa.value, he);
          il !== null && (e && il.alternate !== null && dv.delete(il.key === null ? Qr : il.key), fa = s(il, fa, Qr), $t === null ? Jn = il : $t.sibling = il, $t = il);
        }
        if (e && dv.forEach(function(Tk) {
          return t(F, Tk);
        }), Vr()) {
          var bk = Qr;
          nc(F, bk);
        }
        return Jn;
      }
      function it(F, te, V, he) {
        if (te !== null && te.tag === pe) {
          a(F, te.sibling);
          var Fe = l(te, V);
          return Fe.return = F, Fe;
        }
        a(F, te);
        var Ue = AS(V, F.mode, he);
        return Ue.return = F, Ue;
      }
      function Ke(F, te, V, he) {
        for (var Fe = V.key, Ue = te; Ue !== null; ) {
          if (Ue.key === Fe) {
            var ft = V.type;
            if (ft === mi) {
              if (Ue.tag === ie) {
                a(F, Ue.sibling);
                var gt = l(Ue, V.props.children);
                return gt.return = F, gt._debugSource = V._source, gt._debugOwner = V._owner, gt;
              }
            } else if (Ue.elementType === ft || // Keep this check inline so it only runs on the false path:
            aE(Ue, V) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ft == "object" && ft !== null && ft.$$typeof === mt && J_(ft) === Ue.type) {
              a(F, Ue.sibling);
              var nn = l(Ue, V.props);
              return nn.ref = Ap(F, Ue, V), nn.return = F, nn._debugSource = V._source, nn._debugOwner = V._owner, nn;
            }
            a(F, Ue);
            break;
          } else
            t(F, Ue);
          Ue = Ue.sibling;
        }
        if (V.type === mi) {
          var Bt = es(V.props.children, F.mode, he, V.key);
          return Bt.return = F, Bt;
        } else {
          var Jn = MS(V, F.mode, he);
          return Jn.ref = Ap(F, te, V), Jn.return = F, Jn;
        }
      }
      function Ut(F, te, V, he) {
        for (var Fe = V.key, Ue = te; Ue !== null; ) {
          if (Ue.key === Fe)
            if (Ue.tag === q && Ue.stateNode.containerInfo === V.containerInfo && Ue.stateNode.implementation === V.implementation) {
              a(F, Ue.sibling);
              var ft = l(Ue, V.children || []);
              return ft.return = F, ft;
            } else {
              a(F, Ue);
              break;
            }
          else
            t(F, Ue);
          Ue = Ue.sibling;
        }
        var gt = US(V, F.mode, he);
        return gt.return = F, gt;
      }
      function Ot(F, te, V, he) {
        var Fe = typeof V == "object" && V !== null && V.type === mi && V.key === null;
        if (Fe && (V = V.props.children), typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case Lr:
              return f(Ke(F, te, V, he));
            case lr:
              return f(Ut(F, te, V, he));
            case mt:
              var Ue = V._payload, ft = V._init;
              return Ot(F, te, ft(Ue), he);
          }
          if (bt(V))
            return ee(F, te, V, he);
          if (_t(V))
            return Ne(F, te, V, he);
          fm(F, V);
        }
        return typeof V == "string" && V !== "" || typeof V == "number" ? f(it(F, te, "" + V, he)) : (typeof V == "function" && dm(F), a(F, te));
      }
      return Ot;
    }
    var Vf = Z_(!0), eC = Z_(!1);
    function eT(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = hc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = hc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function tT(e, t) {
      for (var a = e.child; a !== null; )
        Ix(a, t), a = a.sibling;
    }
    var Vg = Vu(null), Hg;
    Hg = {};
    var pm = null, Hf = null, Ig = null, vm = !1;
    function hm() {
      pm = null, Hf = null, Ig = null, vm = !1;
    }
    function tC() {
      vm = !0;
    }
    function nC() {
      vm = !1;
    }
    function rC(e, t, a) {
      sa(Vg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Hg && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Hg;
    }
    function Bg(e, t) {
      var a = Vg.current;
      ua(Vg, t), e._currentValue = a;
    }
    function $g(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (Ul(i.childLanes, t) ? l !== null && !Ul(l.childLanes, t) && (l.childLanes = Ct(l.childLanes, t)) : (i.childLanes = Ct(i.childLanes, t), l !== null && (l.childLanes = Ct(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function nT(e, t, a) {
      rT(e, t, a);
    }
    function rT(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, s = i.dependencies;
        if (s !== null) {
          l = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === T) {
                var v = Ms(a), g = Ql(an, v);
                g.tag = ym;
                var C = i.updateQueue;
                if (C !== null) {
                  var R = C.shared, U = R.pending;
                  U === null ? g.next = g : (g.next = U.next, U.next = g), R.pending = g;
                }
              }
              i.lanes = Ct(i.lanes, a);
              var M = i.alternate;
              M !== null && (M.lanes = Ct(M.lanes, a)), $g(i.return, a, e), s.lanes = Ct(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === ge)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === nt) {
          var B = i.return;
          if (B === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          B.lanes = Ct(B.lanes, a);
          var Q = B.alternate;
          Q !== null && (Q.lanes = Ct(Q.lanes, a)), $g(B, a, e), l = i.sibling;
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
            var ee = l.sibling;
            if (ee !== null) {
              ee.return = l.return, l = ee;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function If(e, t) {
      pm = e, Hf = null, Ig = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (aa(a.lanes, t) && qp(), a.firstContext = null);
      }
    }
    function ir(e) {
      vm && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Ig !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Hf === null) {
          if (pm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Hf = a, pm.dependencies = {
            lanes: le,
            firstContext: a
          };
        } else
          Hf = Hf.next = a;
      }
      return t;
    }
    var lc = null;
    function Wg(e) {
      lc === null ? lc = [e] : lc.push(e);
    }
    function aT() {
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
    function aC(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Wg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, mm(e, i);
    }
    function iT(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, Wg(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function oT(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Wg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, mm(e, i);
    }
    function Ba(e, t) {
      return mm(e, t);
    }
    var lT = mm;
    function mm(e, t) {
      e.lanes = Ct(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ct(a.lanes, t)), a === null && (e.flags & (Sn | Zr)) !== et && eE(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = Ct(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = Ct(a.childLanes, t) : (l.flags & (Sn | Zr)) !== et && eE(e), i = l, l = l.return;
      if (i.tag === H) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var iC = 0, oC = 1, ym = 2, Yg = 3, gm = !1, Qg, Sm;
    Qg = !1, Sm = null;
    function Gg(e) {
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
    function lC(e, t) {
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
        tag: iC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function $u(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (Sm === l && !Qg && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Qg = !0), ix()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, lT(e, a);
      } else
        return oT(e, l, t, a);
    }
    function _m(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (Qd(a)) {
          var s = l.lanes;
          s = qd(s, e.pendingLanes);
          var f = Ct(s, a);
          l.lanes = f, vf(e, f);
        }
      }
    }
    function qg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var s = null, f = null, v = a.firstBaseUpdate;
          if (v !== null) {
            var g = v;
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
    function uT(e, t, a, i, l, s) {
      switch (a.tag) {
        case oC: {
          var f = a.payload;
          if (typeof f == "function") {
            tC();
            var v = f.call(s, i, l);
            {
              if (e.mode & en) {
                _n(!0);
                try {
                  f.call(s, i, l);
                } finally {
                  _n(!1);
                }
              }
              nC();
            }
            return v;
          }
          return f;
        }
        case Yg:
          e.flags = e.flags & ~tr | Xe;
        // Intentional fallthrough
        case iC: {
          var g = a.payload, C;
          if (typeof g == "function") {
            tC(), C = g.call(s, i, l);
            {
              if (e.mode & en) {
                _n(!0);
                try {
                  g.call(s, i, l);
                } finally {
                  _n(!1);
                }
              }
              nC();
            }
          } else
            C = g;
          return C == null ? i : Et({}, i, C);
        }
        case ym:
          return gm = !0, i;
      }
      return i;
    }
    function Cm(e, t, a, i) {
      var l = e.updateQueue;
      gm = !1, Sm = l.shared;
      var s = l.firstBaseUpdate, f = l.lastBaseUpdate, v = l.shared.pending;
      if (v !== null) {
        l.shared.pending = null;
        var g = v, C = g.next;
        g.next = null, f === null ? s = C : f.next = C, f = g;
        var R = e.alternate;
        if (R !== null) {
          var U = R.updateQueue, M = U.lastBaseUpdate;
          M !== f && (M === null ? U.firstBaseUpdate = C : M.next = C, U.lastBaseUpdate = g);
        }
      }
      if (s !== null) {
        var B = l.baseState, Q = le, ee = null, Ne = null, it = null, Ke = s;
        do {
          var Ut = Ke.lane, Ot = Ke.eventTime;
          if (Ul(i, Ut)) {
            if (it !== null) {
              var te = {
                eventTime: Ot,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Pt,
                tag: Ke.tag,
                payload: Ke.payload,
                callback: Ke.callback,
                next: null
              };
              it = it.next = te;
            }
            B = uT(e, l, Ke, B, t, a);
            var V = Ke.callback;
            if (V !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ke.lane !== Pt) {
              e.flags |= cn;
              var he = l.effects;
              he === null ? l.effects = [Ke] : he.push(Ke);
            }
          } else {
            var F = {
              eventTime: Ot,
              lane: Ut,
              tag: Ke.tag,
              payload: Ke.payload,
              callback: Ke.callback,
              next: null
            };
            it === null ? (Ne = it = F, ee = B) : it = it.next = F, Q = Ct(Q, Ut);
          }
          if (Ke = Ke.next, Ke === null) {
            if (v = l.shared.pending, v === null)
              break;
            var Fe = v, Ue = Fe.next;
            Fe.next = null, Ke = Ue, l.lastBaseUpdate = Fe, l.shared.pending = null;
          }
        } while (!0);
        it === null && (ee = B), l.baseState = ee, l.firstBaseUpdate = Ne, l.lastBaseUpdate = it;
        var ft = l.shared.interleaved;
        if (ft !== null) {
          var gt = ft;
          do
            Q = Ct(Q, gt.lane), gt = gt.next;
          while (gt !== ft);
        } else s === null && (l.shared.lanes = le);
        lv(Q), e.lanes = Q, e.memoizedState = B;
      }
      Sm = null;
    }
    function sT(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function uC() {
      gm = !1;
    }
    function Em() {
      return gm;
    }
    function sC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], f = s.callback;
          f !== null && (s.callback = null, sT(f, a));
        }
    }
    var Up = {}, Wu = Vu(Up), jp = Vu(Up), Rm = Vu(Up);
    function bm(e) {
      if (e === Up)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function cC() {
      var e = bm(Rm.current);
      return e;
    }
    function Kg(e, t) {
      sa(Rm, t, e), sa(jp, e, e), sa(Wu, Up, e);
      var a = wR(t);
      ua(Wu, e), sa(Wu, a, e);
    }
    function Bf(e) {
      ua(Wu, e), ua(jp, e), ua(Rm, e);
    }
    function Xg() {
      var e = bm(Wu.current);
      return e;
    }
    function fC(e) {
      bm(Rm.current);
      var t = bm(Wu.current), a = xR(t, e.type);
      t !== a && (sa(jp, e, e), sa(Wu, a, e));
    }
    function Jg(e) {
      jp.current === e && (ua(Wu, e), ua(jp, e));
    }
    var cT = 0, dC = 1, pC = 1, zp = 2, fo = Vu(cT);
    function Zg(e, t) {
      return (e & t) !== 0;
    }
    function $f(e) {
      return e & dC;
    }
    function e0(e, t) {
      return e & dC | t;
    }
    function fT(e, t) {
      return e | t;
    }
    function Yu(e, t) {
      sa(fo, t, e);
    }
    function Wf(e) {
      ua(fo, e);
    }
    function dT(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Tm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ne) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || O_(i) || gg(i))
              return t;
          }
        } else if (t.tag === me && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & Xe) !== et;
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
    ), t0 = [];
    function n0() {
      for (var e = 0; e < t0.length; e++) {
        var t = t0[e];
        t._workInProgressVersionPrimary = null;
      }
      t0.length = 0;
    }
    function pT(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ze = m.ReactCurrentDispatcher, Pp = m.ReactCurrentBatchConfig, r0, Yf;
    r0 = /* @__PURE__ */ new Set();
    var uc = le, tn = null, mr = null, yr = null, wm = !1, Fp = !1, Vp = 0, vT = 0, hT = 25, ae = null, Fi = null, Qu = -1, a0 = !1;
    function Qt() {
      {
        var e = ae;
        Fi === null ? Fi = [e] : Fi.push(e);
      }
    }
    function Te() {
      {
        var e = ae;
        Fi !== null && (Qu++, Fi[Qu] !== e && mT(e));
      }
    }
    function Qf(e) {
      e != null && !bt(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ae, typeof e);
    }
    function mT(e) {
      {
        var t = vt(tn);
        if (!r0.has(t) && (r0.add(t), Fi !== null)) {
          for (var a = "", i = 30, l = 0; l <= Qu; l++) {
            for (var s = Fi[l], f = l === Qu ? e : s, v = l + 1 + ". " + s; v.length < i; )
              v += " ";
            v += f + `
`, a += v;
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
    function i0(e, t) {
      if (a0)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ae), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ae, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!de(e[a], t[a]))
          return !1;
      return !0;
    }
    function Gf(e, t, a, i, l, s) {
      uc = s, tn = t, Fi = e !== null ? e._debugHookTypes : null, Qu = -1, a0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = le, e !== null && e.memoizedState !== null ? ze.current = UC : Fi !== null ? ze.current = AC : ze.current = MC;
      var f = a(i, l);
      if (Fp) {
        var v = 0;
        do {
          if (Fp = !1, Vp = 0, v >= hT)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          v += 1, a0 = !1, mr = null, yr = null, t.updateQueue = null, Qu = -1, ze.current = jC, f = a(i, l);
        } while (Fp);
      }
      ze.current = Fm, t._debugHookTypes = Fi;
      var g = mr !== null && mr.next !== null;
      if (uc = le, tn = null, mr = null, yr = null, ae = null, Fi = null, Qu = -1, e !== null && (e.flags & Pn) !== (t.flags & Pn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & xt) !== tt && y("Internal React error: Expected static flag was missing. Please notify the React team."), wm = !1, g)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function qf() {
      var e = Vp !== 0;
      return Vp = 0, e;
    }
    function vC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ht) !== tt ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = As(e.lanes, a);
    }
    function hC() {
      if (ze.current = Fm, wm) {
        for (var e = tn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        wm = !1;
      }
      uc = le, tn = null, mr = null, yr = null, Fi = null, Qu = -1, ae = null, kC = !1, Fp = !1, Vp = 0;
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
    function mC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function o0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function l0(e, t, a) {
      var i = Zo(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var s = {
        pending: null,
        interleaved: null,
        lanes: le,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = s;
      var f = s.dispatch = _T.bind(null, tn, s);
      return [i.memoizedState, f];
    }
    function u0(e, t, a) {
      var i = Vi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = mr, f = s.baseQueue, v = l.pending;
      if (v !== null) {
        if (f !== null) {
          var g = f.next, C = v.next;
          f.next = C, v.next = g;
        }
        s.baseQueue !== f && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = v, l.pending = null;
      }
      if (f !== null) {
        var R = f.next, U = s.baseState, M = null, B = null, Q = null, ee = R;
        do {
          var Ne = ee.lane;
          if (Ul(uc, Ne)) {
            if (Q !== null) {
              var Ke = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Pt,
                action: ee.action,
                hasEagerState: ee.hasEagerState,
                eagerState: ee.eagerState,
                next: null
              };
              Q = Q.next = Ke;
            }
            if (ee.hasEagerState)
              U = ee.eagerState;
            else {
              var Ut = ee.action;
              U = e(U, Ut);
            }
          } else {
            var it = {
              lane: Ne,
              action: ee.action,
              hasEagerState: ee.hasEagerState,
              eagerState: ee.eagerState,
              next: null
            };
            Q === null ? (B = Q = it, M = U) : Q = Q.next = it, tn.lanes = Ct(tn.lanes, Ne), lv(Ne);
          }
          ee = ee.next;
        } while (ee !== null && ee !== R);
        Q === null ? M = U : Q.next = B, de(U, i.memoizedState) || qp(), i.memoizedState = U, i.baseState = M, i.baseQueue = Q, l.lastRenderedState = U;
      }
      var Ot = l.interleaved;
      if (Ot !== null) {
        var F = Ot;
        do {
          var te = F.lane;
          tn.lanes = Ct(tn.lanes, te), lv(te), F = F.next;
        } while (F !== Ot);
      } else f === null && (l.lanes = le);
      var V = l.dispatch;
      return [i.memoizedState, V];
    }
    function s0(e, t, a) {
      var i = Vi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, f = l.pending, v = i.memoizedState;
      if (f !== null) {
        l.pending = null;
        var g = f.next, C = g;
        do {
          var R = C.action;
          v = e(v, R), C = C.next;
        } while (C !== g);
        de(v, i.memoizedState) || qp(), i.memoizedState = v, i.baseQueue === null && (i.baseState = v), l.lastRenderedState = v;
      }
      return [v, s];
    }
    function m3(e, t, a) {
    }
    function y3(e, t, a) {
    }
    function c0(e, t, a) {
      var i = tn, l = Zo(), s, f = Vr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Yf || s !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), Yf = !0);
      } else {
        if (s = t(), !Yf) {
          var v = t();
          de(s, v) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Yf = !0);
        }
        var g = ay();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        df(g, uc) || yC(i, t, s);
      }
      l.memoizedState = s;
      var C = {
        value: s,
        getSnapshot: t
      };
      return l.queue = C, Lm(SC.bind(null, i, C, e), [e]), i.flags |= Jr, Hp(vr | Hr, gC.bind(null, i, C, s, t), void 0, null), s;
    }
    function xm(e, t, a) {
      var i = tn, l = Vi(), s = t();
      if (!Yf) {
        var f = t();
        de(s, f) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Yf = !0);
      }
      var v = l.memoizedState, g = !de(v, s);
      g && (l.memoizedState = s, qp());
      var C = l.queue;
      if (Bp(SC.bind(null, i, C, e), [e]), C.getSnapshot !== t || g || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      yr !== null && yr.memoizedState.tag & vr) {
        i.flags |= Jr, Hp(vr | Hr, gC.bind(null, i, C, s, t), void 0, null);
        var R = ay();
        if (R === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        df(R, uc) || yC(i, t, s);
      }
      return s;
    }
    function yC(e, t, a) {
      e.flags |= bu;
      var i = {
        getSnapshot: t,
        value: a
      }, l = tn.updateQueue;
      if (l === null)
        l = mC(), tn.updateQueue = l, l.stores = [i];
      else {
        var s = l.stores;
        s === null ? l.stores = [i] : s.push(i);
      }
    }
    function gC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, _C(t) && CC(e);
    }
    function SC(e, t, a) {
      var i = function() {
        _C(t) && CC(e);
      };
      return a(i);
    }
    function _C(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !de(a, i);
      } catch {
        return !0;
      }
    }
    function CC(e) {
      var t = Ba(e, ct);
      t !== null && Cr(t, e, ct, an);
    }
    function km(e) {
      var t = Zo();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: le,
        dispatch: null,
        lastRenderedReducer: o0,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = CT.bind(null, tn, a);
      return [t.memoizedState, i];
    }
    function f0(e) {
      return u0(o0);
    }
    function d0(e) {
      return s0(o0);
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
        s = mC(), tn.updateQueue = s, s.lastEffect = l.next = l;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = l.next = l;
        else {
          var v = f.next;
          f.next = l, l.next = v, s.lastEffect = l;
        }
      }
      return l;
    }
    function p0(e) {
      var t = Zo();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Dm(e) {
      var t = Vi();
      return t.memoizedState;
    }
    function Ip(e, t, a, i) {
      var l = Zo(), s = i === void 0 ? null : i;
      tn.flags |= e, l.memoizedState = Hp(vr | t, a, void 0, s);
    }
    function Om(e, t, a, i) {
      var l = Vi(), s = i === void 0 ? null : i, f = void 0;
      if (mr !== null) {
        var v = mr.memoizedState;
        if (f = v.destroy, s !== null) {
          var g = v.deps;
          if (i0(s, g)) {
            l.memoizedState = Hp(t, a, f, s);
            return;
          }
        }
      }
      tn.flags |= e, l.memoizedState = Hp(vr | t, a, f, s);
    }
    function Lm(e, t) {
      return (tn.mode & Ht) !== tt ? Ip(xi | Jr | Pc, Hr, e, t) : Ip(Jr | Pc, Hr, e, t);
    }
    function Bp(e, t) {
      return Om(Jr, Hr, e, t);
    }
    function v0(e, t) {
      return Ip(Nt, Jo, e, t);
    }
    function Nm(e, t) {
      return Om(Nt, Jo, e, t);
    }
    function h0(e, t) {
      var a = Nt;
      return a |= Zi, (tn.mode & Ht) !== tt && (a |= Ao), Ip(a, hr, e, t);
    }
    function Mm(e, t) {
      return Om(Nt, hr, e, t);
    }
    function EC(e, t) {
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
    function m0(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = Nt;
      return l |= Zi, (tn.mode & Ht) !== tt && (l |= Ao), Ip(l, hr, EC.bind(null, t, e), i);
    }
    function Am(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Om(Nt, hr, EC.bind(null, t, e), i);
    }
    function yT(e, t) {
    }
    var Um = yT;
    function y0(e, t) {
      var a = Zo(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function jm(e, t) {
      var a = Vi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (i0(i, s))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function g0(e, t) {
      var a = Zo(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function zm(e, t) {
      var a = Vi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (i0(i, s))
          return l[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function S0(e) {
      var t = Zo();
      return t.memoizedState = e, e;
    }
    function RC(e) {
      var t = Vi(), a = mr, i = a.memoizedState;
      return TC(t, i, e);
    }
    function bC(e) {
      var t = Vi();
      if (mr === null)
        return t.memoizedState = e, e;
      var a = mr.memoizedState;
      return TC(t, a, e);
    }
    function TC(e, t, a) {
      var i = !Wd(uc);
      if (i) {
        if (!de(a, t)) {
          var l = Gd();
          tn.lanes = Ct(tn.lanes, l), lv(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, qp()), e.memoizedState = a, a;
    }
    function gT(e, t, a) {
      var i = Va();
      Hn(vh(i, Li)), e(!0);
      var l = Pp.transition;
      Pp.transition = {};
      var s = Pp.transition;
      Pp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Hn(i), Pp.transition = l, l === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && b("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function _0() {
      var e = km(!1), t = e[0], a = e[1], i = gT.bind(null, a), l = Zo();
      return l.memoizedState = i, [t, i];
    }
    function wC() {
      var e = f0(), t = e[0], a = Vi(), i = a.memoizedState;
      return [t, i];
    }
    function xC() {
      var e = d0(), t = e[0], a = Vi(), i = a.memoizedState;
      return [t, i];
    }
    var kC = !1;
    function ST() {
      return kC;
    }
    function C0() {
      var e = Zo(), t = ay(), a = t.identifierPrefix, i;
      if (Vr()) {
        var l = jb();
        i = ":" + a + "R" + l;
        var s = Vp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = vT++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Pm() {
      var e = Vi(), t = e.memoizedState;
      return t;
    }
    function _T(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ju(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (DC(e))
        OC(t, l);
      else {
        var s = aC(e, t, l, i);
        if (s !== null) {
          var f = Ta();
          Cr(s, e, i, f), LC(s, t, i);
        }
      }
      NC(e, i);
    }
    function CT(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ju(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (DC(e))
        OC(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === le && (s === null || s.lanes === le)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var v;
            v = ze.current, ze.current = po;
            try {
              var g = t.lastRenderedState, C = f(g, a);
              if (l.hasEagerState = !0, l.eagerState = C, de(C, g)) {
                iT(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              ze.current = v;
            }
          }
        }
        var R = aC(e, t, l, i);
        if (R !== null) {
          var U = Ta();
          Cr(R, e, i, U), LC(R, t, i);
        }
      }
      NC(e, i);
    }
    function DC(e) {
      var t = e.alternate;
      return e === tn || t !== null && t === tn;
    }
    function OC(e, t) {
      Fp = wm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function LC(e, t, a) {
      if (Qd(a)) {
        var i = t.lanes;
        i = qd(i, e.pendingLanes);
        var l = Ct(i, a);
        t.lanes = l, vf(e, l);
      }
    }
    function NC(e, t, a) {
      bs(e, t);
    }
    var Fm = {
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
      unstable_isNewReconciler: re
    }, MC = null, AC = null, UC = null, jC = null, el = null, po = null, Vm = null;
    {
      var E0 = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, yt = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      MC = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", Qt(), Qf(t), y0(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", Qt(), ir(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", Qt(), Qf(t), Lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", Qt(), Qf(a), m0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", Qt(), Qf(t), v0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", Qt(), Qf(t), h0(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", Qt(), Qf(t);
          var a = ze.current;
          ze.current = el;
          try {
            return g0(e, t);
          } finally {
            ze.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", Qt();
          var i = ze.current;
          ze.current = el;
          try {
            return l0(e, t, a);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", Qt(), p0(e);
        },
        useState: function(e) {
          ae = "useState", Qt();
          var t = ze.current;
          ze.current = el;
          try {
            return km(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", Qt(), void 0;
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", Qt(), S0(e);
        },
        useTransition: function() {
          return ae = "useTransition", Qt(), _0();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", Qt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", Qt(), c0(e, t, a);
        },
        useId: function() {
          return ae = "useId", Qt(), C0();
        },
        unstable_isNewReconciler: re
      }, AC = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", Te(), y0(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", Te(), ir(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", Te(), Lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", Te(), m0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", Te(), v0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", Te(), h0(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", Te();
          var a = ze.current;
          ze.current = el;
          try {
            return g0(e, t);
          } finally {
            ze.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", Te();
          var i = ze.current;
          ze.current = el;
          try {
            return l0(e, t, a);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", Te(), p0(e);
        },
        useState: function(e) {
          ae = "useState", Te();
          var t = ze.current;
          ze.current = el;
          try {
            return km(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", Te(), void 0;
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", Te(), S0(e);
        },
        useTransition: function() {
          return ae = "useTransition", Te(), _0();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", Te(), c0(e, t, a);
        },
        useId: function() {
          return ae = "useId", Te(), C0();
        },
        unstable_isNewReconciler: re
      }, UC = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", Te(), jm(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", Te(), ir(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", Te(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", Te(), Am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", Te(), Nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", Te(), Mm(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", Te();
          var a = ze.current;
          ze.current = po;
          try {
            return zm(e, t);
          } finally {
            ze.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", Te();
          var i = ze.current;
          ze.current = po;
          try {
            return u0(e, t, a);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", Te(), Dm();
        },
        useState: function(e) {
          ae = "useState", Te();
          var t = ze.current;
          ze.current = po;
          try {
            return f0(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", Te(), Um();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", Te(), RC(e);
        },
        useTransition: function() {
          return ae = "useTransition", Te(), wC();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", Te(), xm(e, t);
        },
        useId: function() {
          return ae = "useId", Te(), Pm();
        },
        unstable_isNewReconciler: re
      }, jC = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", Te(), jm(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", Te(), ir(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", Te(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", Te(), Am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", Te(), Nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", Te(), Mm(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", Te();
          var a = ze.current;
          ze.current = Vm;
          try {
            return zm(e, t);
          } finally {
            ze.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", Te();
          var i = ze.current;
          ze.current = Vm;
          try {
            return s0(e, t, a);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", Te(), Dm();
        },
        useState: function(e) {
          ae = "useState", Te();
          var t = ze.current;
          ze.current = Vm;
          try {
            return d0(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", Te(), Um();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", Te(), bC(e);
        },
        useTransition: function() {
          return ae = "useTransition", Te(), xC();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", Te(), xm(e, t);
        },
        useId: function() {
          return ae = "useId", Te(), Pm();
        },
        unstable_isNewReconciler: re
      }, el = {
        readContext: function(e) {
          return E0(), ir(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", yt(), Qt(), y0(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", yt(), Qt(), ir(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", yt(), Qt(), Lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", yt(), Qt(), m0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", yt(), Qt(), v0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", yt(), Qt(), h0(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", yt(), Qt();
          var a = ze.current;
          ze.current = el;
          try {
            return g0(e, t);
          } finally {
            ze.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", yt(), Qt();
          var i = ze.current;
          ze.current = el;
          try {
            return l0(e, t, a);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", yt(), Qt(), p0(e);
        },
        useState: function(e) {
          ae = "useState", yt(), Qt();
          var t = ze.current;
          ze.current = el;
          try {
            return km(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", yt(), Qt(), void 0;
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", yt(), Qt(), S0(e);
        },
        useTransition: function() {
          return ae = "useTransition", yt(), Qt(), _0();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", yt(), Qt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", yt(), Qt(), c0(e, t, a);
        },
        useId: function() {
          return ae = "useId", yt(), Qt(), C0();
        },
        unstable_isNewReconciler: re
      }, po = {
        readContext: function(e) {
          return E0(), ir(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", yt(), Te(), jm(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", yt(), Te(), ir(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", yt(), Te(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", yt(), Te(), Am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", yt(), Te(), Nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", yt(), Te(), Mm(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", yt(), Te();
          var a = ze.current;
          ze.current = po;
          try {
            return zm(e, t);
          } finally {
            ze.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", yt(), Te();
          var i = ze.current;
          ze.current = po;
          try {
            return u0(e, t, a);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", yt(), Te(), Dm();
        },
        useState: function(e) {
          ae = "useState", yt(), Te();
          var t = ze.current;
          ze.current = po;
          try {
            return f0(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", yt(), Te(), Um();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", yt(), Te(), RC(e);
        },
        useTransition: function() {
          return ae = "useTransition", yt(), Te(), wC();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", yt(), Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", yt(), Te(), xm(e, t);
        },
        useId: function() {
          return ae = "useId", yt(), Te(), Pm();
        },
        unstable_isNewReconciler: re
      }, Vm = {
        readContext: function(e) {
          return E0(), ir(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", yt(), Te(), jm(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", yt(), Te(), ir(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", yt(), Te(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", yt(), Te(), Am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", yt(), Te(), Nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", yt(), Te(), Mm(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", yt(), Te();
          var a = ze.current;
          ze.current = po;
          try {
            return zm(e, t);
          } finally {
            ze.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", yt(), Te();
          var i = ze.current;
          ze.current = po;
          try {
            return s0(e, t, a);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", yt(), Te(), Dm();
        },
        useState: function(e) {
          ae = "useState", yt(), Te();
          var t = ze.current;
          ze.current = po;
          try {
            return d0(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", yt(), Te(), Um();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", yt(), Te(), bC(e);
        },
        useTransition: function() {
          return ae = "useTransition", yt(), Te(), xC();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", yt(), Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", yt(), Te(), xm(e, t);
        },
        useId: function() {
          return ae = "useId", yt(), Te(), Pm();
        },
        unstable_isNewReconciler: re
      };
    }
    var Gu = h.unstable_now, zC = 0, Hm = -1, $p = -1, Im = -1, R0 = !1, Bm = !1;
    function PC() {
      return R0;
    }
    function ET() {
      Bm = !0;
    }
    function RT() {
      R0 = !1, Bm = !1;
    }
    function bT() {
      R0 = Bm, Bm = !1;
    }
    function FC() {
      return zC;
    }
    function VC() {
      zC = Gu();
    }
    function b0(e) {
      $p = Gu(), e.actualStartTime < 0 && (e.actualStartTime = Gu());
    }
    function HC(e) {
      $p = -1;
    }
    function $m(e, t) {
      if ($p >= 0) {
        var a = Gu() - $p;
        e.actualDuration += a, t && (e.selfBaseDuration = a), $p = -1;
      }
    }
    function tl(e) {
      if (Hm >= 0) {
        var t = Gu() - Hm;
        Hm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case H:
              var i = a.stateNode;
              i.effectDuration += t;
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
    function T0(e) {
      if (Im >= 0) {
        var t = Gu() - Im;
        Im = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case H:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
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
    function nl() {
      Hm = Gu();
    }
    function w0() {
      Im = Gu();
    }
    function x0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function vo(e, t) {
      if (e && e.defaultProps) {
        var a = Et({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var k0 = {}, D0, O0, L0, N0, M0, IC, Wm, A0, U0, j0, Wp;
    {
      D0 = /* @__PURE__ */ new Set(), O0 = /* @__PURE__ */ new Set(), L0 = /* @__PURE__ */ new Set(), N0 = /* @__PURE__ */ new Set(), A0 = /* @__PURE__ */ new Set(), M0 = /* @__PURE__ */ new Set(), U0 = /* @__PURE__ */ new Set(), j0 = /* @__PURE__ */ new Set(), Wp = /* @__PURE__ */ new Set();
      var BC = /* @__PURE__ */ new Set();
      Wm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          BC.has(a) || (BC.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, IC = function(e, t) {
        if (t === void 0) {
          var a = jt(e) || "Component";
          M0.has(a) || (M0.add(a), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(k0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(k0);
    }
    function z0(e, t, a, i) {
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
        IC(t, s);
      }
      var f = s == null ? l : Et({}, l, s);
      if (e.memoizedState = f, e.lanes === le) {
        var v = e.updateQueue;
        v.baseState = f;
      }
    }
    var P0 = {
      isMounted: Jv,
      enqueueSetState: function(e, t, a) {
        var i = Ru(e), l = Ta(), s = Ju(i), f = Ql(l, s);
        f.payload = t, a != null && (Wm(a, "setState"), f.callback = a);
        var v = $u(i, f, s);
        v !== null && (Cr(v, i, s, l), _m(v, i, s)), bs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Ru(e), l = Ta(), s = Ju(i), f = Ql(l, s);
        f.tag = oC, f.payload = t, a != null && (Wm(a, "replaceState"), f.callback = a);
        var v = $u(i, f, s);
        v !== null && (Cr(v, i, s, l), _m(v, i, s)), bs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ru(e), i = Ta(), l = Ju(a), s = Ql(i, l);
        s.tag = ym, t != null && (Wm(t, "forceUpdate"), s.callback = t);
        var f = $u(a, s, l);
        f !== null && (Cr(f, a, l, i), _m(f, a, l)), Wc(a, l);
      }
    };
    function $C(e, t, a, i, l, s, f) {
      var v = e.stateNode;
      if (typeof v.shouldComponentUpdate == "function") {
        var g = v.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & en) {
            _n(!0);
            try {
              g = v.shouldComponentUpdate(i, s, f);
            } finally {
              _n(!1);
            }
          }
          g === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", jt(t) || "Component");
        }
        return g;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !We(a, i) || !We(l, s) : !0;
    }
    function TT(e, t, a) {
      var i = e.stateNode;
      {
        var l = jt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), t.childContextTypes && !Wp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & en) === tt && (Wp.add(t), y(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), t.contextTypes && !Wp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & en) === tt && (Wp.add(t), y(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !U0.has(t) && (U0.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", jt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var f = i.props !== a;
        i.props !== void 0 && f && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !L0.has(t) && (L0.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", jt(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var v = i.state;
        v && (typeof v != "object" || bt(v)) && y("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function WC(e, t) {
      t.updater = P0, e.stateNode = t, Cl(t, e), t._reactInternalInstance = k0;
    }
    function YC(e, t, a) {
      var i = !1, l = fi, s = fi, f = t.contextType;
      if ("contextType" in t) {
        var v = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === O && f._context === void 0
        );
        if (!v && !j0.has(t)) {
          j0.add(t);
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
      var U = e.memoizedState = R.state !== null && R.state !== void 0 ? R.state : null;
      WC(e, R);
      {
        if (typeof t.getDerivedStateFromProps == "function" && U === null) {
          var M = jt(t) || "Component";
          O0.has(M) || (O0.add(M), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", M, R.state === null ? "null" : "undefined", M));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof R.getSnapshotBeforeUpdate == "function") {
          var B = null, Q = null, ee = null;
          if (typeof R.componentWillMount == "function" && R.componentWillMount.__suppressDeprecationWarning !== !0 ? B = "componentWillMount" : typeof R.UNSAFE_componentWillMount == "function" && (B = "UNSAFE_componentWillMount"), typeof R.componentWillReceiveProps == "function" && R.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Q = "componentWillReceiveProps" : typeof R.UNSAFE_componentWillReceiveProps == "function" && (Q = "UNSAFE_componentWillReceiveProps"), typeof R.componentWillUpdate == "function" && R.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ee = "componentWillUpdate" : typeof R.UNSAFE_componentWillUpdate == "function" && (ee = "UNSAFE_componentWillUpdate"), B !== null || Q !== null || ee !== null) {
            var Ne = jt(t) || "Component", it = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            N0.has(Ne) || (N0.add(Ne), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ne, it, B !== null ? `
  ` + B : "", Q !== null ? `
  ` + Q : "", ee !== null ? `
  ` + ee : ""));
          }
        }
      }
      return i && U_(e, l, s), R;
    }
    function wT(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", vt(e) || "Component"), P0.enqueueReplaceState(t, t.state, null));
    }
    function QC(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var s = vt(e) || "Component";
          D0.has(s) || (D0.add(s), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        P0.enqueueReplaceState(t, t.state, null);
      }
    }
    function F0(e, t, a, i) {
      TT(e, t, a);
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
          var v = jt(t) || "Component";
          A0.has(v) || (A0.add(v), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", v));
        }
        e.mode & en && co.recordLegacyContextWarning(e, l), co.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var g = t.getDerivedStateFromProps;
      if (typeof g == "function" && (z0(e, t, g, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (wT(e, l), Cm(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var C = Nt;
        C |= Zi, (e.mode & Ht) !== tt && (C |= Ao), e.flags |= C;
      }
    }
    function xT(e, t, a, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var f = l.context, v = t.contextType, g = fi;
      if (typeof v == "object" && v !== null)
        g = ir(v);
      else {
        var C = Uf(e, t, !0);
        g = jf(e, C);
      }
      var R = t.getDerivedStateFromProps, U = typeof R == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !U && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || f !== g) && QC(e, l, a, g), uC();
      var M = e.memoizedState, B = l.state = M;
      if (Cm(e, a, l, i), B = e.memoizedState, s === a && M === B && !nm() && !Em()) {
        if (typeof l.componentDidMount == "function") {
          var Q = Nt;
          Q |= Zi, (e.mode & Ht) !== tt && (Q |= Ao), e.flags |= Q;
        }
        return !1;
      }
      typeof R == "function" && (z0(e, t, R, a), B = e.memoizedState);
      var ee = Em() || $C(e, t, s, a, M, B, g);
      if (ee) {
        if (!U && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var Ne = Nt;
          Ne |= Zi, (e.mode & Ht) !== tt && (Ne |= Ao), e.flags |= Ne;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var it = Nt;
          it |= Zi, (e.mode & Ht) !== tt && (it |= Ao), e.flags |= it;
        }
        e.memoizedProps = a, e.memoizedState = B;
      }
      return l.props = a, l.state = B, l.context = g, ee;
    }
    function kT(e, t, a, i, l) {
      var s = t.stateNode;
      lC(e, t);
      var f = t.memoizedProps, v = t.type === t.elementType ? f : vo(t.type, f);
      s.props = v;
      var g = t.pendingProps, C = s.context, R = a.contextType, U = fi;
      if (typeof R == "object" && R !== null)
        U = ir(R);
      else {
        var M = Uf(t, a, !0);
        U = jf(t, M);
      }
      var B = a.getDerivedStateFromProps, Q = typeof B == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !Q && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== g || C !== U) && QC(t, s, i, U), uC();
      var ee = t.memoizedState, Ne = s.state = ee;
      if (Cm(t, i, s, l), Ne = t.memoizedState, f === g && ee === Ne && !nm() && !Em() && !Me)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= Nt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= qn), !1;
      typeof B == "function" && (z0(t, a, B, i), Ne = t.memoizedState);
      var it = Em() || $C(t, a, v, i, ee, Ne, U) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Me;
      return it ? (!Q && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Ne, U), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Ne, U)), typeof s.componentDidUpdate == "function" && (t.flags |= Nt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= qn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= Nt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= qn), t.memoizedProps = i, t.memoizedState = Ne), s.props = i, s.state = Ne, s.context = U, it;
    }
    function sc(e, t) {
      return {
        value: e,
        source: t,
        stack: Qi(t),
        digest: null
      };
    }
    function V0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function DT(e, t) {
      return !0;
    }
    function H0(e, t) {
      try {
        var a = DT(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === T)
            return;
          console.error(i);
        }
        var v = l ? vt(l) : null, g = v ? "The above error occurred in the <" + v + "> component:" : "The above error occurred in one of your React components:", C;
        if (e.tag === H)
          C = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var R = vt(e) || "Anonymous";
          C = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + R + ".");
        }
        var U = g + `
` + f + `

` + ("" + C);
        console.error(U);
      } catch (M) {
        setTimeout(function() {
          throw M;
        });
      }
    }
    var OT = typeof WeakMap == "function" ? WeakMap : Map;
    function GC(e, t, a) {
      var i = Ql(an, a);
      i.tag = Yg, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        Ex(l), H0(e, t);
      }, i;
    }
    function I0(e, t, a) {
      var i = Ql(an, a);
      i.tag = Yg;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        i.payload = function() {
          return l(s);
        }, i.callback = function() {
          iE(e), H0(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        iE(e), H0(e, t), typeof l != "function" && _x(this);
        var g = t.value, C = t.stack;
        this.componentDidCatch(g, {
          componentStack: C !== null ? C : ""
        }), typeof l != "function" && (aa(e.lanes, ct) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", vt(e) || "Unknown"));
      }), i;
    }
    function qC(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new OT(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = Rx.bind(null, e, t, a);
        na && uv(e, a), t.then(s, s);
      }
    }
    function LT(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function NT(e, t) {
      var a = e.tag;
      if ((e.mode & xt) === tt && (a === k || a === _e || a === Oe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function KC(e) {
      var t = e;
      do {
        if (t.tag === ne && dT(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function XC(e, t, a, i, l) {
      if ((e.mode & xt) === tt) {
        if (e === t)
          e.flags |= tr;
        else {
          if (e.flags |= Xe, a.flags |= zc, a.flags &= -52805, a.tag === T) {
            var s = a.alternate;
            if (s === null)
              a.tag = Je;
            else {
              var f = Ql(an, ct);
              f.tag = ym, $u(a, f, ct);
            }
          }
          a.lanes = Ct(a.lanes, ct);
        }
        return e;
      }
      return e.flags |= tr, e.lanes = l, e;
    }
    function MT(e, t, a, i, l) {
      if (a.flags |= gs, na && uv(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        NT(a), Vr() && a.mode & xt && I_();
        var f = KC(t);
        if (f !== null) {
          f.flags &= ~Tr, XC(f, t, a, e, l), f.mode & xt && qC(e, s, l), LT(f, e, s);
          return;
        } else {
          if (!oh(l)) {
            qC(e, s, l), CS();
            return;
          }
          var v = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = v;
        }
      } else if (Vr() && a.mode & xt) {
        I_();
        var g = KC(t);
        if (g !== null) {
          (g.flags & tr) === et && (g.flags |= Tr), XC(g, t, a, e, l), Ag(sc(i, a));
          return;
        }
      }
      i = sc(i, a), dx(i);
      var C = t;
      do {
        switch (C.tag) {
          case H: {
            var R = i;
            C.flags |= tr;
            var U = Ms(l);
            C.lanes = Ct(C.lanes, U);
            var M = GC(C, R, U);
            qg(C, M);
            return;
          }
          case T:
            var B = i, Q = C.type, ee = C.stateNode;
            if ((C.flags & Xe) === et && (typeof Q.getDerivedStateFromError == "function" || ee !== null && typeof ee.componentDidCatch == "function" && !K1(ee))) {
              C.flags |= tr;
              var Ne = Ms(l);
              C.lanes = Ct(C.lanes, Ne);
              var it = I0(C, B, Ne);
              qg(C, it);
              return;
            }
            break;
        }
        C = C.return;
      } while (C !== null);
    }
    function AT() {
      return null;
    }
    var Yp = m.ReactCurrentOwner, ho = !1, B0, Qp, $0, W0, Y0, cc, Q0, Ym, Gp;
    B0 = {}, Qp = {}, $0 = {}, W0 = {}, Y0 = {}, cc = !1, Q0 = {}, Ym = {}, Gp = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = eC(t, null, a, i) : t.child = Vf(t, e.child, a, i);
    }
    function UT(e, t, a, i) {
      t.child = Vf(t, e.child, null, i), t.child = Vf(t, null, a, i);
    }
    function JC(e, t, a, i, l) {
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
      var f = a.render, v = t.ref, g, C;
      If(t, l), Sa(t);
      {
        if (Yp.current = t, Gn(!0), g = Gf(e, t, f, i, v, l), C = qf(), t.mode & en) {
          _n(!0);
          try {
            g = Gf(e, t, f, i, v, l), C = qf();
          } finally {
            _n(!1);
          }
        }
        Gn(!1);
      }
      return _a(), e !== null && !ho ? (vC(e, t, l), Gl(e, t, l)) : (Vr() && C && kg(t), t.flags |= oi, Ra(e, t, g, l), t.child);
    }
    function ZC(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (Vx(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = rd(s), t.tag = Oe, t.type = f, K0(t, s), e1(e, t, f, i, l);
        }
        {
          var v = s.propTypes;
          if (v && uo(
            v,
            i,
            // Resolved props
            "prop",
            jt(s)
          ), a.defaultProps !== void 0) {
            var g = jt(s) || "Unknown";
            Gp[g] || (y("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", g), Gp[g] = !0);
          }
        }
        var C = NS(a.type, null, i, t, t.mode, l);
        return C.ref = t.ref, C.return = t, t.child = C, C;
      }
      {
        var R = a.type, U = R.propTypes;
        U && uo(
          U,
          i,
          // Resolved props
          "prop",
          jt(R)
        );
      }
      var M = e.child, B = nS(e, l);
      if (!B) {
        var Q = M.memoizedProps, ee = a.compare;
        if (ee = ee !== null ? ee : We, ee(Q, i) && e.ref === t.ref)
          return Gl(e, t, l);
      }
      t.flags |= oi;
      var Ne = hc(M, i);
      return Ne.ref = t.ref, Ne.return = t, t.child = Ne, Ne;
    }
    function e1(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === mt) {
          var f = s, v = f._payload, g = f._init;
          try {
            s = g(v);
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
        if (We(R, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ho = !1, t.pendingProps = i = R, nS(e, l))
            (e.flags & zc) !== et && (ho = !0);
          else return t.lanes = e.lanes, Gl(e, t, l);
      }
      return G0(e, t, a, i, l);
    }
    function t1(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ye)
        if ((t.mode & xt) === tt) {
          var f = {
            baseLanes: le,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, iy(t, a);
        } else if (aa(a, ra)) {
          var U = {
            baseLanes: le,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = U;
          var M = s !== null ? s.baseLanes : a;
          iy(t, M);
        } else {
          var v = null, g;
          if (s !== null) {
            var C = s.baseLanes;
            g = Ct(C, a);
          } else
            g = a;
          t.lanes = t.childLanes = ra;
          var R = {
            baseLanes: g,
            cachePool: v,
            transitions: null
          };
          return t.memoizedState = R, t.updateQueue = null, iy(t, g), null;
        }
      else {
        var B;
        s !== null ? (B = Ct(s.baseLanes, a), t.memoizedState = null) : B = a, iy(t, B);
      }
      return Ra(e, t, l, a), t.child;
    }
    function jT(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function zT(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function PT(e, t, a) {
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
    function n1(e, t) {
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
        var v = Uf(t, a, !0);
        f = jf(t, v);
      }
      var g, C;
      If(t, l), Sa(t);
      {
        if (Yp.current = t, Gn(!0), g = Gf(e, t, a, i, f, l), C = qf(), t.mode & en) {
          _n(!0);
          try {
            g = Gf(e, t, a, i, f, l), C = qf();
          } finally {
            _n(!1);
          }
        }
        Gn(!1);
      }
      return _a(), e !== null && !ho ? (vC(e, t, l), Gl(e, t, l)) : (Vr() && C && kg(t), t.flags |= oi, Ra(e, t, g, l), t.child);
    }
    function r1(e, t, a, i, l) {
      {
        switch (tk(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, v = new f(t.memoizedProps, s.context), g = v.state;
            s.updater.enqueueSetState(s, g, null);
            break;
          }
          case !0: {
            t.flags |= Xe, t.flags |= tr;
            var C = new Error("Simulated error coming from DevTools"), R = Ms(l);
            t.lanes = Ct(t.lanes, R);
            var U = I0(t, sc(C, t), R);
            qg(t, U);
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
      var B;
      Xo(a) ? (B = !0, am(t)) : B = !1, If(t, l);
      var Q = t.stateNode, ee;
      Q === null ? (Gm(e, t), YC(t, a, i), F0(t, a, i, l), ee = !0) : e === null ? ee = xT(t, a, i, l) : ee = kT(e, t, a, i, l);
      var Ne = q0(e, t, a, ee, B, l);
      {
        var it = t.stateNode;
        ee && it.props !== i && (cc || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", vt(t) || "a component"), cc = !0);
      }
      return Ne;
    }
    function q0(e, t, a, i, l, s) {
      n1(e, t);
      var f = (t.flags & Xe) !== et;
      if (!i && !f)
        return l && P_(t, a, !1), Gl(e, t, s);
      var v = t.stateNode;
      Yp.current = t;
      var g;
      if (f && typeof a.getDerivedStateFromError != "function")
        g = null, HC();
      else {
        Sa(t);
        {
          if (Gn(!0), g = v.render(), t.mode & en) {
            _n(!0);
            try {
              v.render();
            } finally {
              _n(!1);
            }
          }
          Gn(!1);
        }
        _a();
      }
      return t.flags |= oi, e !== null && f ? UT(e, t, g, s) : Ra(e, t, g, s), t.memoizedState = v.state, l && P_(t, a, !0), t.child;
    }
    function a1(e) {
      var t = e.stateNode;
      t.pendingContext ? j_(e, t.pendingContext, t.pendingContext !== t.context) : t.context && j_(e, t.context, !1), Kg(e, t.containerInfo);
    }
    function FT(e, t, a) {
      if (a1(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      lC(e, t), Cm(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var v = f.element;
      if (l.isDehydrated) {
        var g = {
          element: v,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, C = t.updateQueue;
        if (C.baseState = g, t.memoizedState = g, t.flags & Tr) {
          var R = sc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return i1(e, t, v, a, R);
        } else if (v !== s) {
          var U = sc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return i1(e, t, v, a, U);
        } else {
          Ib(t);
          var M = eC(t, null, v, a);
          t.child = M;
          for (var B = M; B; )
            B.flags = B.flags & ~Sn | Zr, B = B.sibling;
        }
      } else {
        if (Ff(), v === s)
          return Gl(e, t, a);
        Ra(e, t, v, a);
      }
      return t.child;
    }
    function i1(e, t, a, i, l) {
      return Ff(), Ag(l), t.flags |= Tr, Ra(e, t, a, i), t.child;
    }
    function VT(e, t, a) {
      fC(t), e === null && Mg(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = l.children, v = vg(i, l);
      return v ? f = null : s !== null && vg(i, s) && (t.flags |= Aa), n1(e, t), Ra(e, t, f, a), t.child;
    }
    function HT(e, t) {
      return e === null && Mg(t), null;
    }
    function IT(e, t, a, i) {
      Gm(e, t);
      var l = t.pendingProps, s = a, f = s._payload, v = s._init, g = v(f);
      t.type = g;
      var C = t.tag = Hx(g), R = vo(g, l), U;
      switch (C) {
        case k:
          return K0(t, g), t.type = g = rd(g), U = G0(null, t, g, R, i), U;
        case T:
          return t.type = g = wS(g), U = r1(null, t, g, R, i), U;
        case _e:
          return t.type = g = xS(g), U = JC(null, t, g, R, i), U;
        case Be: {
          if (t.type !== t.elementType) {
            var M = g.propTypes;
            M && uo(
              M,
              R,
              // Resolved for outer only
              "prop",
              jt(g)
            );
          }
          return U = ZC(
            null,
            t,
            g,
            vo(g.type, R),
            // The inner type can have defaults too
            i
          ), U;
        }
      }
      var B = "";
      throw g !== null && typeof g == "object" && g.$$typeof === mt && (B = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + g + ". " + ("Lazy element type must resolve to a class or function." + B));
    }
    function BT(e, t, a, i, l) {
      Gm(e, t), t.tag = T;
      var s;
      return Xo(a) ? (s = !0, am(t)) : s = !1, If(t, l), YC(t, a, i), F0(t, a, i, l), q0(null, t, a, !0, s, l);
    }
    function $T(e, t, a, i) {
      Gm(e, t);
      var l = t.pendingProps, s;
      {
        var f = Uf(t, a, !1);
        s = jf(t, f);
      }
      If(t, i);
      var v, g;
      Sa(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var C = jt(a) || "Unknown";
          B0[C] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", C, C), B0[C] = !0);
        }
        t.mode & en && co.recordLegacyContextWarning(t, null), Gn(!0), Yp.current = t, v = Gf(null, t, a, l, s, i), g = qf(), Gn(!1);
      }
      if (_a(), t.flags |= oi, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0) {
        var R = jt(a) || "Unknown";
        Qp[R] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), Qp[R] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0
      ) {
        {
          var U = jt(a) || "Unknown";
          Qp[U] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", U, U, U), Qp[U] = !0);
        }
        t.tag = T, t.memoizedState = null, t.updateQueue = null;
        var M = !1;
        return Xo(a) ? (M = !0, am(t)) : M = !1, t.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, Gg(t), WC(t, v), F0(t, a, l, i), q0(null, t, a, !0, M, i);
      } else {
        if (t.tag = k, t.mode & en) {
          _n(!0);
          try {
            v = Gf(null, t, a, l, s, i), g = qf();
          } finally {
            _n(!1);
          }
        }
        return Vr() && g && kg(t), Ra(null, t, v, i), K0(t, a), t.child;
      }
    }
    function K0(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Mr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), Y0[l] || (Y0[l] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = jt(t) || "Unknown";
          Gp[f] || (y("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Gp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var v = jt(t) || "Unknown";
          W0[v] || (y("%s: Function components do not support getDerivedStateFromProps.", v), W0[v] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var g = jt(t) || "Unknown";
          $0[g] || (y("%s: Function components do not support contextType.", g), $0[g] = !0);
        }
      }
    }
    var X0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: Pt
    };
    function J0(e) {
      return {
        baseLanes: e,
        cachePool: AT(),
        transitions: null
      };
    }
    function WT(e, t) {
      var a = null;
      return {
        baseLanes: Ct(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function YT(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return Zg(e, zp);
    }
    function QT(e, t) {
      return As(e.childLanes, t);
    }
    function o1(e, t, a) {
      var i = t.pendingProps;
      nk(t) && (t.flags |= Xe);
      var l = fo.current, s = !1, f = (t.flags & Xe) !== et;
      if (f || YT(l, e) ? (s = !0, t.flags &= ~Xe) : (e === null || e.memoizedState !== null) && (l = fT(l, pC)), l = $f(l), Yu(t, l), e === null) {
        Mg(t);
        var v = t.memoizedState;
        if (v !== null) {
          var g = v.dehydrated;
          if (g !== null)
            return JT(t, g);
        }
        var C = i.children, R = i.fallback;
        if (s) {
          var U = GT(t, C, R, a), M = t.child;
          return M.memoizedState = J0(a), t.memoizedState = X0, U;
        } else
          return Z0(t, C);
      } else {
        var B = e.memoizedState;
        if (B !== null) {
          var Q = B.dehydrated;
          if (Q !== null)
            return ZT(e, t, f, i, Q, B, a);
        }
        if (s) {
          var ee = i.fallback, Ne = i.children, it = KT(e, t, Ne, ee, a), Ke = t.child, Ut = e.child.memoizedState;
          return Ke.memoizedState = Ut === null ? J0(a) : WT(Ut, a), Ke.childLanes = QT(e, a), t.memoizedState = X0, it;
        } else {
          var Ot = i.children, F = qT(e, t, Ot, a);
          return t.memoizedState = null, F;
        }
      }
    }
    function Z0(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, s = eS(l, i);
      return s.return = e, e.child = s, s;
    }
    function GT(e, t, a, i) {
      var l = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, v, g;
      return (l & xt) === tt && s !== null ? (v = s, v.childLanes = le, v.pendingProps = f, e.mode & Vt && (v.actualDuration = 0, v.actualStartTime = -1, v.selfBaseDuration = 0, v.treeBaseDuration = 0), g = es(a, l, i, null)) : (v = eS(f, l), g = es(a, l, i, null)), v.return = e, g.return = e, v.sibling = g, e.child = v, g;
    }
    function eS(e, t, a) {
      return lE(e, t, le, null);
    }
    function l1(e, t) {
      return hc(e, t);
    }
    function qT(e, t, a, i) {
      var l = e.child, s = l.sibling, f = l1(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & xt) === tt && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var v = t.deletions;
        v === null ? (t.deletions = [s], t.flags |= Ma) : v.push(s);
      }
      return t.child = f, f;
    }
    function KT(e, t, a, i, l) {
      var s = t.mode, f = e.child, v = f.sibling, g = {
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
        C = R, C.childLanes = le, C.pendingProps = g, t.mode & Vt && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = f.selfBaseDuration, C.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        C = l1(f, g), C.subtreeFlags = f.subtreeFlags & Pn;
      var U;
      return v !== null ? U = hc(v, i) : (U = es(i, s, l, null), U.flags |= Sn), U.return = t, C.return = t, C.sibling = U, t.child = C, U;
    }
    function Qm(e, t, a, i) {
      i !== null && Ag(i), Vf(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, f = Z0(t, s);
      return f.flags |= Sn, t.memoizedState = null, f;
    }
    function XT(e, t, a, i, l) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, v = eS(f, s), g = es(i, s, l, null);
      return g.flags |= Sn, v.return = t, g.return = t, v.sibling = g, t.child = v, (t.mode & xt) !== tt && Vf(t, e.child, null, l), g;
    }
    function JT(e, t, a) {
      return (e.mode & xt) === tt ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ct) : gg(t) ? e.lanes = wr : e.lanes = ra, null;
    }
    function ZT(e, t, a, i, l, s, f) {
      if (a)
        if (t.flags & Tr) {
          t.flags &= ~Tr;
          var F = V0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Qm(e, t, f, F);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Xe, null;
          var te = i.children, V = i.fallback, he = XT(e, t, te, V, f), Fe = t.child;
          return Fe.memoizedState = J0(f), t.memoizedState = X0, he;
        }
      else {
        if (Vb(), (t.mode & xt) === tt)
          return Qm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (gg(l)) {
          var v, g, C;
          {
            var R = rb(l);
            v = R.digest, g = R.message, C = R.stack;
          }
          var U;
          g ? U = new Error(g) : U = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var M = V0(U, v, C);
          return Qm(e, t, f, M);
        }
        var B = aa(f, e.childLanes);
        if (ho || B) {
          var Q = ay();
          if (Q !== null) {
            var ee = Xd(Q, f);
            if (ee !== Pt && ee !== s.retryLane) {
              s.retryLane = ee;
              var Ne = an;
              Ba(e, ee), Cr(Q, e, ee, Ne);
            }
          }
          CS();
          var it = V0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Qm(e, t, f, it);
        } else if (O_(l)) {
          t.flags |= Xe, t.child = e.child;
          var Ke = bx.bind(null, e);
          return ab(l, Ke), null;
        } else {
          Bb(t, l, s.treeContext);
          var Ut = i.children, Ot = Z0(t, Ut);
          return Ot.flags |= Zr, Ot;
        }
      }
    }
    function u1(e, t, a) {
      e.lanes = Ct(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ct(i.lanes, t)), $g(e.return, t, a);
    }
    function ew(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === ne) {
          var l = i.memoizedState;
          l !== null && u1(i, a, e);
        } else if (i.tag === me)
          u1(i, a, e);
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
    function tw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Tm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function nw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !Q0[e])
        if (Q0[e] = !0, typeof e == "string")
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
    function rw(e, t) {
      e !== void 0 && !Ym[e] && (e !== "collapsed" && e !== "hidden" ? (Ym[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Ym[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function s1(e, t) {
      {
        var a = bt(e), i = !a && typeof _t(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function aw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (bt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!s1(e[a], a))
              return;
        } else {
          var i = _t(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var s = l.next(), f = 0; !s.done; s = l.next()) {
                if (!s1(s.value, f))
                  return;
                f++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function tS(e, t, a, i, l) {
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
    function c1(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, s = i.tail, f = i.children;
      nw(l), rw(s, l), aw(f, l), Ra(e, t, f, a);
      var v = fo.current, g = Zg(v, zp);
      if (g)
        v = e0(v, zp), t.flags |= Xe;
      else {
        var C = e !== null && (e.flags & Xe) !== et;
        C && ew(t, t.child, a), v = $f(v);
      }
      if (Yu(t, v), (t.mode & xt) === tt)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var R = tw(t.child), U;
            R === null ? (U = t.child, t.child = null) : (U = R.sibling, R.sibling = null), tS(
              t,
              !1,
              // isBackwards
              U,
              R,
              s
            );
            break;
          }
          case "backwards": {
            var M = null, B = t.child;
            for (t.child = null; B !== null; ) {
              var Q = B.alternate;
              if (Q !== null && Tm(Q) === null) {
                t.child = B;
                break;
              }
              var ee = B.sibling;
              B.sibling = M, M = B, B = ee;
            }
            tS(
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
            tS(
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
    function iw(e, t, a) {
      Kg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Vf(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var f1 = !1;
    function ow(e, t, a) {
      var i = t.type, l = i._context, s = t.pendingProps, f = t.memoizedProps, v = s.value;
      {
        "value" in s || f1 || (f1 = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var g = t.type.propTypes;
        g && uo(g, s, "prop", "Context.Provider");
      }
      if (rC(t, l, v), f !== null) {
        var C = f.value;
        if (de(C, v)) {
          if (f.children === s.children && !nm())
            return Gl(e, t, a);
        } else
          nT(t, l, a);
      }
      var R = s.children;
      return Ra(e, t, R, a), t.child;
    }
    var d1 = !1;
    function lw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (d1 || (d1 = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), If(t, a);
      var f = ir(i);
      Sa(t);
      var v;
      return Yp.current = t, Gn(!0), v = s(f), Gn(!1), _a(), t.flags |= oi, Ra(e, t, v, a), t.child;
    }
    function qp() {
      ho = !0;
    }
    function Gm(e, t) {
      (t.mode & xt) === tt && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Sn);
    }
    function Gl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), HC(), lv(t.lanes), aa(a, t.childLanes) ? (eT(e, t), t.child) : null;
    }
    function uw(e, t, a) {
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
    function nS(e, t) {
      var a = e.lanes;
      return !!aa(a, t);
    }
    function sw(e, t, a) {
      switch (t.tag) {
        case H:
          a1(t), t.stateNode, Ff();
          break;
        case G:
          fC(t);
          break;
        case T: {
          var i = t.type;
          Xo(i) && am(t);
          break;
        }
        case q:
          Kg(t, t.stateNode.containerInfo);
          break;
        case ge: {
          var l = t.memoizedProps.value, s = t.type._context;
          rC(t, s, l);
          break;
        }
        case De:
          {
            var f = aa(a, t.childLanes);
            f && (t.flags |= Nt);
            {
              var v = t.stateNode;
              v.effectDuration = 0, v.passiveEffectDuration = 0;
            }
          }
          break;
        case ne: {
          var g = t.memoizedState;
          if (g !== null) {
            if (g.dehydrated !== null)
              return Yu(t, $f(fo.current)), t.flags |= Xe, null;
            var C = t.child, R = C.childLanes;
            if (aa(a, R))
              return o1(e, t, a);
            Yu(t, $f(fo.current));
            var U = Gl(e, t, a);
            return U !== null ? U.sibling : null;
          } else
            Yu(t, $f(fo.current));
          break;
        }
        case me: {
          var M = (e.flags & Xe) !== et, B = aa(a, t.childLanes);
          if (M) {
            if (B)
              return c1(e, t, a);
            t.flags |= Xe;
          }
          var Q = t.memoizedState;
          if (Q !== null && (Q.rendering = null, Q.tail = null, Q.lastEffect = null), Yu(t, fo.current), B)
            break;
          return null;
        }
        case K:
        case Ee:
          return t.lanes = le, t1(e, t, a);
      }
      return Gl(e, t, a);
    }
    function p1(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return uw(e, t, NS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || nm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ho = !0;
        else {
          var s = nS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Xe) === et)
            return ho = !1, sw(e, t, a);
          (e.flags & zc) !== et ? ho = !0 : ho = !1;
        }
      } else if (ho = !1, Vr() && Ab(t)) {
        var f = t.index, v = Ub();
        H_(t, v, f);
      }
      switch (t.lanes = le, t.tag) {
        case z:
          return $T(e, t, t.type, a);
        case Qe: {
          var g = t.elementType;
          return IT(e, t, g, a);
        }
        case k: {
          var C = t.type, R = t.pendingProps, U = t.elementType === C ? R : vo(C, R);
          return G0(e, t, C, U, a);
        }
        case T: {
          var M = t.type, B = t.pendingProps, Q = t.elementType === M ? B : vo(M, B);
          return r1(e, t, M, Q, a);
        }
        case H:
          return FT(e, t, a);
        case G:
          return VT(e, t, a);
        case pe:
          return HT(e, t);
        case ne:
          return o1(e, t, a);
        case q:
          return iw(e, t, a);
        case _e: {
          var ee = t.type, Ne = t.pendingProps, it = t.elementType === ee ? Ne : vo(ee, Ne);
          return JC(e, t, ee, it, a);
        }
        case ie:
          return jT(e, t, a);
        case ce:
          return zT(e, t, a);
        case De:
          return PT(e, t, a);
        case ge:
          return ow(e, t, a);
        case be:
          return lw(e, t, a);
        case Be: {
          var Ke = t.type, Ut = t.pendingProps, Ot = vo(Ke, Ut);
          if (t.type !== t.elementType) {
            var F = Ke.propTypes;
            F && uo(
              F,
              Ot,
              // Resolved for outer only
              "prop",
              jt(Ke)
            );
          }
          return Ot = vo(Ke.type, Ot), ZC(e, t, Ke, Ot, a);
        }
        case Oe:
          return e1(e, t, t.type, t.pendingProps, a);
        case Je: {
          var te = t.type, V = t.pendingProps, he = t.elementType === te ? V : vo(te, V);
          return BT(e, t, te, he, a);
        }
        case me:
          return c1(e, t, a);
        case W:
          break;
        case K:
          return t1(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Kf(e) {
      e.flags |= Nt;
    }
    function v1(e) {
      e.flags |= Rn, e.flags |= Tu;
    }
    var h1, rS, m1, y1;
    h1 = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === G || l.tag === pe)
          LR(e, l.stateNode);
        else if (l.tag !== q) {
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
    }, rS = function(e, t) {
    }, m1 = function(e, t, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, v = Xg(), g = MR(f, a, s, i, l, v);
        t.updateQueue = g, g && Kf(t);
      }
    }, y1 = function(e, t, a, i) {
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = le, i = et;
      if (t) {
        if ((e.mode & Vt) !== tt) {
          for (var g = e.selfBaseDuration, C = e.child; C !== null; )
            a = Ct(a, Ct(C.lanes, C.childLanes)), i |= C.subtreeFlags & Pn, i |= C.flags & Pn, g += C.treeBaseDuration, C = C.sibling;
          e.treeBaseDuration = g;
        } else
          for (var R = e.child; R !== null; )
            a = Ct(a, Ct(R.lanes, R.childLanes)), i |= R.subtreeFlags & Pn, i |= R.flags & Pn, R.return = e, R = R.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Vt) !== tt) {
          for (var l = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ct(a, Ct(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, l += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = l, e.treeBaseDuration = s;
        } else
          for (var v = e.child; v !== null; )
            a = Ct(a, Ct(v.lanes, v.childLanes)), i |= v.subtreeFlags, i |= v.flags, v.return = e, v = v.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function cw(e, t, a) {
      if (Gb() && (t.mode & xt) !== tt && (t.flags & Xe) === et)
        return G_(t), Ff(), t.flags |= Tr | gs | tr, !1;
      var i = sm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Yb(t), Ir(t), (t.mode & Vt) !== tt) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Ff(), (t.flags & Xe) === et && (t.memoizedState = null), t.flags |= Nt, Ir(t), (t.mode & Vt) !== tt) {
            var f = a !== null;
            if (f) {
              var v = t.child;
              v !== null && (t.treeBaseDuration -= v.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return q_(), !0;
    }
    function g1(e, t, a) {
      var i = t.pendingProps;
      switch (Dg(t), t.tag) {
        case z:
        case Qe:
        case Oe:
        case k:
        case _e:
        case ie:
        case ce:
        case De:
        case be:
        case Be:
          return Ir(t), null;
        case T: {
          var l = t.type;
          return Xo(l) && rm(t), Ir(t), null;
        }
        case H: {
          var s = t.stateNode;
          if (Bf(t), Tg(t), n0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = sm(t);
            if (f)
              Kf(t);
            else if (e !== null) {
              var v = e.memoizedState;
              // Check if this is a client root
              (!v.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Tr) !== et) && (t.flags |= qn, q_());
            }
          }
          return rS(e, t), Ir(t), null;
        }
        case G: {
          Jg(t);
          var g = cC(), C = t.type;
          if (e !== null && t.stateNode != null)
            m1(e, t, C, i, g), e.ref !== t.ref && v1(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Ir(t), null;
            }
            var R = Xg(), U = sm(t);
            if (U)
              $b(t, g, R) && Kf(t);
            else {
              var M = OR(C, i, g, R, t);
              h1(M, t, !1, !1), t.stateNode = M, NR(M, C, i, g) && Kf(t);
            }
            t.ref !== null && v1(t);
          }
          return Ir(t), null;
        }
        case pe: {
          var B = i;
          if (e && t.stateNode != null) {
            var Q = e.memoizedProps;
            y1(e, t, Q, B);
          } else {
            if (typeof B != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var ee = cC(), Ne = Xg(), it = sm(t);
            it ? Wb(t) && Kf(t) : t.stateNode = AR(B, ee, Ne, t);
          }
          return Ir(t), null;
        }
        case ne: {
          Wf(t);
          var Ke = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ut = cw(e, t, Ke);
            if (!Ut)
              return t.flags & tr ? t : null;
          }
          if ((t.flags & Xe) !== et)
            return t.lanes = a, (t.mode & Vt) !== tt && x0(t), t;
          var Ot = Ke !== null, F = e !== null && e.memoizedState !== null;
          if (Ot !== F && Ot) {
            var te = t.child;
            if (te.flags |= zn, (t.mode & xt) !== tt) {
              var V = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              V || Zg(fo.current, pC) ? fx() : CS();
            }
          }
          var he = t.updateQueue;
          if (he !== null && (t.flags |= Nt), Ir(t), (t.mode & Vt) !== tt && Ot) {
            var Fe = t.child;
            Fe !== null && (t.treeBaseDuration -= Fe.treeBaseDuration);
          }
          return null;
        }
        case q:
          return Bf(t), rS(e, t), e === null && xb(t.stateNode.containerInfo), Ir(t), null;
        case ge:
          var Ue = t.type._context;
          return Bg(Ue, t), Ir(t), null;
        case Je: {
          var ft = t.type;
          return Xo(ft) && rm(t), Ir(t), null;
        }
        case me: {
          Wf(t);
          var gt = t.memoizedState;
          if (gt === null)
            return Ir(t), null;
          var nn = (t.flags & Xe) !== et, Bt = gt.rendering;
          if (Bt === null)
            if (nn)
              Kp(gt, !1);
            else {
              var Jn = px() && (e === null || (e.flags & Xe) === et);
              if (!Jn)
                for (var $t = t.child; $t !== null; ) {
                  var $n = Tm($t);
                  if ($n !== null) {
                    nn = !0, t.flags |= Xe, Kp(gt, !1);
                    var fa = $n.updateQueue;
                    return fa !== null && (t.updateQueue = fa, t.flags |= Nt), t.subtreeFlags = et, tT(t, a), Yu(t, e0(fo.current, zp)), t.child;
                  }
                  $t = $t.sibling;
                }
              gt.tail !== null && Kn() > F1() && (t.flags |= Xe, nn = !0, Kp(gt, !1), t.lanes = Id);
            }
          else {
            if (!nn) {
              var Qr = Tm(Bt);
              if (Qr !== null) {
                t.flags |= Xe, nn = !0;
                var pi = Qr.updateQueue;
                if (pi !== null && (t.updateQueue = pi, t.flags |= Nt), Kp(gt, !0), gt.tail === null && gt.tailMode === "hidden" && !Bt.alternate && !Vr())
                  return Ir(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Kn() * 2 - gt.renderingStartTime > F1() && a !== ra && (t.flags |= Xe, nn = !0, Kp(gt, !1), t.lanes = Id);
            }
            if (gt.isBackwards)
              Bt.sibling = t.child, t.child = Bt;
            else {
              var wa = gt.last;
              wa !== null ? wa.sibling = Bt : t.child = Bt, gt.last = Bt;
            }
          }
          if (gt.tail !== null) {
            var xa = gt.tail;
            gt.rendering = xa, gt.tail = xa.sibling, gt.renderingStartTime = Kn(), xa.sibling = null;
            var da = fo.current;
            return nn ? da = e0(da, zp) : da = $f(da), Yu(t, da), xa;
          }
          return Ir(t), null;
        }
        case W:
          break;
        case K:
        case Ee: {
          _S(t);
          var Zl = t.memoizedState, ad = Zl !== null;
          if (e !== null) {
            var dv = e.memoizedState, il = dv !== null;
            il !== ad && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ye && (t.flags |= zn);
          }
          return !ad || (t.mode & xt) === tt ? Ir(t) : aa(al, ra) && (Ir(t), t.subtreeFlags & (Sn | Nt) && (t.flags |= zn)), null;
        }
        case He:
          return null;
        case xe:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function fw(e, t, a) {
      switch (Dg(t), t.tag) {
        case T: {
          var i = t.type;
          Xo(i) && rm(t);
          var l = t.flags;
          return l & tr ? (t.flags = l & ~tr | Xe, (t.mode & Vt) !== tt && x0(t), t) : null;
        }
        case H: {
          t.stateNode, Bf(t), Tg(t), n0();
          var s = t.flags;
          return (s & tr) !== et && (s & Xe) === et ? (t.flags = s & ~tr | Xe, t) : null;
        }
        case G:
          return Jg(t), null;
        case ne: {
          Wf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Ff();
          }
          var v = t.flags;
          return v & tr ? (t.flags = v & ~tr | Xe, (t.mode & Vt) !== tt && x0(t), t) : null;
        }
        case me:
          return Wf(t), null;
        case q:
          return Bf(t), null;
        case ge:
          var g = t.type._context;
          return Bg(g, t), null;
        case K:
        case Ee:
          return _S(t), null;
        case He:
          return null;
        default:
          return null;
      }
    }
    function S1(e, t, a) {
      switch (Dg(t), t.tag) {
        case T: {
          var i = t.type.childContextTypes;
          i != null && rm(t);
          break;
        }
        case H: {
          t.stateNode, Bf(t), Tg(t), n0();
          break;
        }
        case G: {
          Jg(t);
          break;
        }
        case q:
          Bf(t);
          break;
        case ne:
          Wf(t);
          break;
        case me:
          Wf(t);
          break;
        case ge:
          var l = t.type._context;
          Bg(l, t);
          break;
        case K:
        case Ee:
          _S(t);
          break;
      }
    }
    var _1 = null;
    _1 = /* @__PURE__ */ new Set();
    var qm = !1, Br = !1, dw = typeof WeakSet == "function" ? WeakSet : Set, Ye = null, Xf = null, Jf = null;
    function pw(e) {
      Mo(null, function() {
        throw e;
      }), ys();
    }
    var vw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Vt)
        try {
          nl(), t.componentWillUnmount();
        } finally {
          tl(e);
        }
      else
        t.componentWillUnmount();
    };
    function C1(e, t) {
      try {
        qu(hr, e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function aS(e, t, a) {
      try {
        vw(e, a);
      } catch (i) {
        vn(e, t, i);
      }
    }
    function hw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        vn(e, t, i);
      }
    }
    function E1(e, t) {
      try {
        b1(e);
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
            if (Pe && ht && e.mode & Vt)
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
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", vt(e));
        } else
          a.current = null;
    }
    function Km(e, t, a) {
      try {
        a();
      } catch (i) {
        vn(e, t, i);
      }
    }
    var R1 = !1;
    function mw(e, t) {
      kR(e.containerInfo), Ye = t, yw();
      var a = R1;
      return R1 = !1, a;
    }
    function yw() {
      for (; Ye !== null; ) {
        var e = Ye, t = e.child;
        (e.subtreeFlags & Uo) !== et && t !== null ? (t.return = e, Ye = t) : gw();
      }
    }
    function gw() {
      for (; Ye !== null; ) {
        var e = Ye;
        Xt(e);
        try {
          Sw(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        pn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ye = t;
          return;
        }
        Ye = e.return;
      }
    }
    function Sw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & qn) !== et) {
        switch (Xt(e), e.tag) {
          case k:
          case _e:
          case Oe:
            break;
          case T: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !cc && (s.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", vt(e) || "instance"), s.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", vt(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : vo(e.type, i), l);
              {
                var v = _1;
                f === void 0 && !v.has(e.type) && (v.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", vt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case H: {
            {
              var g = e.stateNode;
              ZR(g.containerInfo);
            }
            break;
          }
          case G:
          case pe:
          case q:
          case Je:
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
            var v = f.destroy;
            f.destroy = void 0, v !== void 0 && ((e & Hr) !== $a ? no(t) : (e & hr) !== $a && _s(t), (e & Jo) !== $a && sv(!0), Km(t, a, v), (e & Jo) !== $a && sv(!1), (e & Hr) !== $a ? Fo() : (e & hr) !== $a && Vd());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function qu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & Hr) !== $a ? Fd(t) : (e & hr) !== $a && Bc(t);
            var f = s.create;
            (e & Jo) !== $a && sv(!0), s.destroy = f(), (e & Jo) !== $a && sv(!1), (e & Hr) !== $a ? th() : (e & hr) !== $a && nh();
            {
              var v = s.destroy;
              if (v !== void 0 && typeof v != "function") {
                var g = void 0;
                (s.tag & hr) !== et ? g = "useLayoutEffect" : (s.tag & Jo) !== et ? g = "useInsertionEffect" : g = "useEffect";
                var C = void 0;
                v === null ? C = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof v.then == "function" ? C = `

It looks like you wrote ` + g + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + g + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : C = " You returned: " + v, y("%s must not return anything besides a function, which is used for clean-up.%s", g, C);
              }
            }
          }
          s = s.next;
        } while (s !== l);
      }
    }
    function _w(e, t) {
      if ((t.flags & Nt) !== et)
        switch (t.tag) {
          case De: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, f = FC(), v = t.alternate === null ? "mount" : "update";
            PC() && (v = "nested-update"), typeof s == "function" && s(l, v, a, f);
            var g = t.return;
            e: for (; g !== null; ) {
              switch (g.tag) {
                case H:
                  var C = g.stateNode;
                  C.passiveEffectDuration += a;
                  break e;
                case De:
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
    function Cw(e, t, a, i) {
      if ((a.flags & zo) !== et)
        switch (a.tag) {
          case k:
          case _e:
          case Oe: {
            if (!Br)
              if (a.mode & Vt)
                try {
                  nl(), qu(hr | vr, a);
                } finally {
                  tl(a);
                }
              else
                qu(hr | vr, a);
            break;
          }
          case T: {
            var l = a.stateNode;
            if (a.flags & Nt && !Br)
              if (t === null)
                if (a.type === a.elementType && !cc && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", vt(a) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", vt(a) || "instance")), a.mode & Vt)
                  try {
                    nl(), l.componentDidMount();
                  } finally {
                    tl(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : vo(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !cc && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", vt(a) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", vt(a) || "instance")), a.mode & Vt)
                  try {
                    nl(), l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    tl(a);
                  }
                else
                  l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
              }
            var v = a.updateQueue;
            v !== null && (a.type === a.elementType && !cc && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", vt(a) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", vt(a) || "instance")), sC(a, v, l));
            break;
          }
          case H: {
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
              sC(a, g, C);
            }
            break;
          }
          case G: {
            var R = a.stateNode;
            if (t === null && a.flags & Nt) {
              var U = a.type, M = a.memoizedProps;
              FR(R, U, M);
            }
            break;
          }
          case pe:
            break;
          case q:
            break;
          case De: {
            {
              var B = a.memoizedProps, Q = B.onCommit, ee = B.onRender, Ne = a.stateNode.effectDuration, it = FC(), Ke = t === null ? "mount" : "update";
              PC() && (Ke = "nested-update"), typeof ee == "function" && ee(a.memoizedProps.id, Ke, a.actualDuration, a.treeBaseDuration, a.actualStartTime, it);
              {
                typeof Q == "function" && Q(a.memoizedProps.id, Ke, Ne, it), gx(a);
                var Ut = a.return;
                e: for (; Ut !== null; ) {
                  switch (Ut.tag) {
                    case H:
                      var Ot = Ut.stateNode;
                      Ot.effectDuration += Ne;
                      break e;
                    case De:
                      var F = Ut.stateNode;
                      F.effectDuration += Ne;
                      break e;
                  }
                  Ut = Ut.return;
                }
              }
            }
            break;
          }
          case ne: {
            Dw(e, a);
            break;
          }
          case me:
          case Je:
          case W:
          case K:
          case Ee:
          case xe:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Br || a.flags & Rn && b1(a);
    }
    function Ew(e) {
      switch (e.tag) {
        case k:
        case _e:
        case Oe: {
          if (e.mode & Vt)
            try {
              nl(), C1(e, e.return);
            } finally {
              tl(e);
            }
          else
            C1(e, e.return);
          break;
        }
        case T: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && hw(e, e.return, t), E1(e, e.return);
          break;
        }
        case G: {
          E1(e, e.return);
          break;
        }
      }
    }
    function Rw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === G) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? qR(l) : XR(i.stateNode, i.memoizedProps);
            } catch (f) {
              vn(e, e.return, f);
            }
          }
        } else if (i.tag === pe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? KR(s) : JR(s, i.memoizedProps);
            } catch (f) {
              vn(e, e.return, f);
            }
        } else if (!((i.tag === K || i.tag === Ee) && i.memoizedState !== null && i !== e)) {
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
    function b1(e) {
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
          typeof l == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", vt(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", vt(e)), t.current = i;
      }
    }
    function bw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function T1(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, T1(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === G) {
          var a = e.stateNode;
          a !== null && Ob(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Tw(e) {
      for (var t = e.return; t !== null; ) {
        if (w1(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function w1(e) {
      return e.tag === G || e.tag === H || e.tag === q;
    }
    function x1(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || w1(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== G && t.tag !== pe && t.tag !== nt; ) {
          if (t.flags & Sn || t.child === null || t.tag === q)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Sn))
          return t.stateNode;
      }
    }
    function ww(e) {
      var t = Tw(e);
      switch (t.tag) {
        case G: {
          var a = t.stateNode;
          t.flags & Aa && (D_(a), t.flags &= ~Aa);
          var i = x1(e);
          oS(e, i, a);
          break;
        }
        case H:
        case q: {
          var l = t.stateNode.containerInfo, s = x1(e);
          iS(e, s, l);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function iS(e, t, a) {
      var i = e.tag, l = i === G || i === pe;
      if (l) {
        var s = e.stateNode;
        t ? WR(a, s, t) : BR(a, s);
      } else if (i !== q) {
        var f = e.child;
        if (f !== null) {
          iS(f, t, a);
          for (var v = f.sibling; v !== null; )
            iS(v, t, a), v = v.sibling;
        }
      }
    }
    function oS(e, t, a) {
      var i = e.tag, l = i === G || i === pe;
      if (l) {
        var s = e.stateNode;
        t ? $R(a, s, t) : IR(a, s);
      } else if (i !== q) {
        var f = e.child;
        if (f !== null) {
          oS(f, t, a);
          for (var v = f.sibling; v !== null; )
            oS(v, t, a), v = v.sibling;
        }
      }
    }
    var $r = null, yo = !1;
    function xw(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case G: {
              $r = i.stateNode, yo = !1;
              break e;
            }
            case H: {
              $r = i.stateNode.containerInfo, yo = !0;
              break e;
            }
            case q: {
              $r = i.stateNode.containerInfo, yo = !0;
              break e;
            }
          }
          i = i.return;
        }
        if ($r === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        k1(e, t, a), $r = null, yo = !1;
      }
      bw(a);
    }
    function Ku(e, t, a) {
      for (var i = a.child; i !== null; )
        k1(e, t, i), i = i.sibling;
    }
    function k1(e, t, a) {
      switch (jd(a), a.tag) {
        case G:
          Br || Zf(a, t);
        // eslint-disable-next-line-no-fallthrough
        case pe: {
          {
            var i = $r, l = yo;
            $r = null, Ku(e, t, a), $r = i, yo = l, $r !== null && (yo ? QR($r, a.stateNode) : YR($r, a.stateNode));
          }
          return;
        }
        case nt: {
          $r !== null && (yo ? GR($r, a.stateNode) : yg($r, a.stateNode));
          return;
        }
        case q: {
          {
            var s = $r, f = yo;
            $r = a.stateNode.containerInfo, yo = !0, Ku(e, t, a), $r = s, yo = f;
          }
          return;
        }
        case k:
        case _e:
        case Be:
        case Oe: {
          if (!Br) {
            var v = a.updateQueue;
            if (v !== null) {
              var g = v.lastEffect;
              if (g !== null) {
                var C = g.next, R = C;
                do {
                  var U = R, M = U.destroy, B = U.tag;
                  M !== void 0 && ((B & Jo) !== $a ? Km(a, t, M) : (B & hr) !== $a && (_s(a), a.mode & Vt ? (nl(), Km(a, t, M), tl(a)) : Km(a, t, M), Vd())), R = R.next;
                } while (R !== C);
              }
            }
          }
          Ku(e, t, a);
          return;
        }
        case T: {
          if (!Br) {
            Zf(a, t);
            var Q = a.stateNode;
            typeof Q.componentWillUnmount == "function" && aS(a, t, Q);
          }
          Ku(e, t, a);
          return;
        }
        case W: {
          Ku(e, t, a);
          return;
        }
        case K: {
          if (
            // TODO: Remove this dead flag
            a.mode & xt
          ) {
            var ee = Br;
            Br = ee || a.memoizedState !== null, Ku(e, t, a), Br = ee;
          } else
            Ku(e, t, a);
          break;
        }
        default: {
          Ku(e, t, a);
          return;
        }
      }
    }
    function kw(e) {
      e.memoizedState;
    }
    function Dw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && pb(s);
          }
        }
      }
    }
    function D1(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new dw()), t.forEach(function(i) {
          var l = Tx.bind(null, e, i);
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
    function Ow(e, t, a) {
      Xf = a, Jf = e, Xt(t), O1(t, e), Xt(t), Xf = null, Jf = null;
    }
    function go(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          try {
            xw(e, t, s);
          } catch (g) {
            vn(s, t, g);
          }
        }
      var f = wo();
      if (t.subtreeFlags & jo)
        for (var v = t.child; v !== null; )
          Xt(v), O1(v, e), v = v.sibling;
      Xt(f);
    }
    function O1(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case k:
        case _e:
        case Be:
        case Oe: {
          if (go(t, e), rl(e), l & Nt) {
            try {
              mo(Jo | vr, e, e.return), qu(Jo | vr, e);
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
        case T: {
          go(t, e), rl(e), l & Rn && i !== null && Zf(i, i.return);
          return;
        }
        case G: {
          go(t, e), rl(e), l & Rn && i !== null && Zf(i, i.return);
          {
            if (e.flags & Aa) {
              var s = e.stateNode;
              try {
                D_(s);
              } catch (ft) {
                vn(e, e.return, ft);
              }
            }
            if (l & Nt) {
              var f = e.stateNode;
              if (f != null) {
                var v = e.memoizedProps, g = i !== null ? i.memoizedProps : v, C = e.type, R = e.updateQueue;
                if (e.updateQueue = null, R !== null)
                  try {
                    VR(f, R, C, g, v, e);
                  } catch (ft) {
                    vn(e, e.return, ft);
                  }
              }
            }
          }
          return;
        }
        case pe: {
          if (go(t, e), rl(e), l & Nt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var U = e.stateNode, M = e.memoizedProps, B = i !== null ? i.memoizedProps : M;
            try {
              HR(U, B, M);
            } catch (ft) {
              vn(e, e.return, ft);
            }
          }
          return;
        }
        case H: {
          if (go(t, e), rl(e), l & Nt && i !== null) {
            var Q = i.memoizedState;
            if (Q.isDehydrated)
              try {
                db(t.containerInfo);
              } catch (ft) {
                vn(e, e.return, ft);
              }
          }
          return;
        }
        case q: {
          go(t, e), rl(e);
          return;
        }
        case ne: {
          go(t, e), rl(e);
          var ee = e.child;
          if (ee.flags & zn) {
            var Ne = ee.stateNode, it = ee.memoizedState, Ke = it !== null;
            if (Ne.isHidden = Ke, Ke) {
              var Ut = ee.alternate !== null && ee.alternate.memoizedState !== null;
              Ut || cx();
            }
          }
          if (l & Nt) {
            try {
              kw(e);
            } catch (ft) {
              vn(e, e.return, ft);
            }
            D1(e);
          }
          return;
        }
        case K: {
          var Ot = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & xt
          ) {
            var F = Br;
            Br = F || Ot, go(t, e), Br = F;
          } else
            go(t, e);
          if (rl(e), l & zn) {
            var te = e.stateNode, V = e.memoizedState, he = V !== null, Fe = e;
            if (te.isHidden = he, he && !Ot && (Fe.mode & xt) !== tt) {
              Ye = Fe;
              for (var Ue = Fe.child; Ue !== null; )
                Ye = Ue, Nw(Ue), Ue = Ue.sibling;
            }
            Rw(Fe, he);
          }
          return;
        }
        case me: {
          go(t, e), rl(e), l & Nt && D1(e);
          return;
        }
        case W:
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
          ww(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        e.flags &= ~Sn;
      }
      t & Zr && (e.flags &= ~Zr);
    }
    function Lw(e, t, a) {
      Xf = a, Jf = t, Ye = e, L1(e, t, a), Xf = null, Jf = null;
    }
    function L1(e, t, a) {
      for (var i = (e.mode & xt) !== tt; Ye !== null; ) {
        var l = Ye, s = l.child;
        if (l.tag === K && i) {
          var f = l.memoizedState !== null, v = f || qm;
          if (v) {
            lS(e, t, a);
            continue;
          } else {
            var g = l.alternate, C = g !== null && g.memoizedState !== null, R = C || Br, U = qm, M = Br;
            qm = v, Br = R, Br && !M && (Ye = l, Mw(l));
            for (var B = s; B !== null; )
              Ye = B, L1(
                B,
                // New root; bubble back up to here and stop.
                t,
                a
              ), B = B.sibling;
            Ye = l, qm = U, Br = M, lS(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & zo) !== et && s !== null ? (s.return = l, Ye = s) : lS(e, t, a);
      }
    }
    function lS(e, t, a) {
      for (; Ye !== null; ) {
        var i = Ye;
        if ((i.flags & zo) !== et) {
          var l = i.alternate;
          Xt(i);
          try {
            Cw(t, l, i, a);
          } catch (f) {
            vn(i, i.return, f);
          }
          pn();
        }
        if (i === e) {
          Ye = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ye = s;
          return;
        }
        Ye = i.return;
      }
    }
    function Nw(e) {
      for (; Ye !== null; ) {
        var t = Ye, a = t.child;
        switch (t.tag) {
          case k:
          case _e:
          case Be:
          case Oe: {
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
          case T: {
            Zf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && aS(t, t.return, i);
            break;
          }
          case G: {
            Zf(t, t.return);
            break;
          }
          case K: {
            var l = t.memoizedState !== null;
            if (l) {
              N1(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ye = a) : N1(e);
      }
    }
    function N1(e) {
      for (; Ye !== null; ) {
        var t = Ye;
        if (t === e) {
          Ye = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ye = a;
          return;
        }
        Ye = t.return;
      }
    }
    function Mw(e) {
      for (; Ye !== null; ) {
        var t = Ye, a = t.child;
        if (t.tag === K) {
          var i = t.memoizedState !== null;
          if (i) {
            M1(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ye = a) : M1(e);
      }
    }
    function M1(e) {
      for (; Ye !== null; ) {
        var t = Ye;
        Xt(t);
        try {
          Ew(t);
        } catch (i) {
          vn(t, t.return, i);
        }
        if (pn(), t === e) {
          Ye = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ye = a;
          return;
        }
        Ye = t.return;
      }
    }
    function Aw(e, t, a, i) {
      Ye = t, Uw(t, e, a, i);
    }
    function Uw(e, t, a, i) {
      for (; Ye !== null; ) {
        var l = Ye, s = l.child;
        (l.subtreeFlags & eo) !== et && s !== null ? (s.return = l, Ye = s) : jw(e, t, a, i);
      }
    }
    function jw(e, t, a, i) {
      for (; Ye !== null; ) {
        var l = Ye;
        if ((l.flags & Jr) !== et) {
          Xt(l);
          try {
            zw(t, l, a, i);
          } catch (f) {
            vn(l, l.return, f);
          }
          pn();
        }
        if (l === e) {
          Ye = null;
          return;
        }
        var s = l.sibling;
        if (s !== null) {
          s.return = l.return, Ye = s;
          return;
        }
        Ye = l.return;
      }
    }
    function zw(e, t, a, i) {
      switch (t.tag) {
        case k:
        case _e:
        case Oe: {
          if (t.mode & Vt) {
            w0();
            try {
              qu(Hr | vr, t);
            } finally {
              T0(t);
            }
          } else
            qu(Hr | vr, t);
          break;
        }
      }
    }
    function Pw(e) {
      Ye = e, Fw();
    }
    function Fw() {
      for (; Ye !== null; ) {
        var e = Ye, t = e.child;
        if ((Ye.flags & Ma) !== et) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              Ye = l, Iw(l, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var v = f.sibling;
                    f.sibling = null, f = v;
                  } while (f !== null);
                }
              }
            }
            Ye = e;
          }
        }
        (e.subtreeFlags & eo) !== et && t !== null ? (t.return = e, Ye = t) : Vw();
      }
    }
    function Vw() {
      for (; Ye !== null; ) {
        var e = Ye;
        (e.flags & Jr) !== et && (Xt(e), Hw(e), pn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ye = t;
          return;
        }
        Ye = e.return;
      }
    }
    function Hw(e) {
      switch (e.tag) {
        case k:
        case _e:
        case Oe: {
          e.mode & Vt ? (w0(), mo(Hr | vr, e, e.return), T0(e)) : mo(Hr | vr, e, e.return);
          break;
        }
      }
    }
    function Iw(e, t) {
      for (; Ye !== null; ) {
        var a = Ye;
        Xt(a), $w(a, t), pn();
        var i = a.child;
        i !== null ? (i.return = a, Ye = i) : Bw(e);
      }
    }
    function Bw(e) {
      for (; Ye !== null; ) {
        var t = Ye, a = t.sibling, i = t.return;
        if (T1(t), t === e) {
          Ye = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ye = a;
          return;
        }
        Ye = i;
      }
    }
    function $w(e, t) {
      switch (e.tag) {
        case k:
        case _e:
        case Oe: {
          e.mode & Vt ? (w0(), mo(Hr, e, t), T0(e)) : mo(Hr, e, t);
          break;
        }
      }
    }
    function Ww(e) {
      switch (e.tag) {
        case k:
        case _e:
        case Oe: {
          try {
            qu(hr | vr, e);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case T: {
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
    function Yw(e) {
      switch (e.tag) {
        case k:
        case _e:
        case Oe: {
          try {
            qu(Hr | vr, e);
          } catch (t) {
            vn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Qw(e) {
      switch (e.tag) {
        case k:
        case _e:
        case Oe: {
          try {
            mo(hr | vr, e, e.return);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case T: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && aS(e, e.return, t);
          break;
        }
      }
    }
    function Gw(e) {
      switch (e.tag) {
        case k:
        case _e:
        case Oe:
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
    var qw = [];
    function Kw() {
      qw.forEach(function(e) {
        return e();
      });
    }
    var Xw = m.ReactCurrentActQueue;
    function Jw(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function A1() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Xw.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Zw = Math.ceil, uS = m.ReactCurrentDispatcher, sS = m.ReactCurrentOwner, Wr = m.ReactCurrentBatchConfig, So = m.ReactCurrentActQueue, gr = (
      /*             */
      0
    ), U1 = (
      /*               */
      1
    ), Yr = (
      /*                */
      2
    ), Hi = (
      /*                */
      4
    ), ql = 0, Jp = 1, fc = 2, Xm = 3, Zp = 4, j1 = 5, cS = 6, At = gr, ba = null, Mn = null, Sr = le, al = le, fS = Vu(le), _r = ql, ev = null, Jm = le, tv = le, Zm = le, nv = null, Wa = null, dS = 0, z1 = 500, P1 = 1 / 0, ex = 500, Kl = null;
    function rv() {
      P1 = Kn() + ex;
    }
    function F1() {
      return P1;
    }
    var ey = !1, pS = null, ed = null, dc = !1, Xu = null, av = le, vS = [], hS = null, tx = 50, iv = 0, mS = null, yS = !1, ty = !1, nx = 50, td = 0, ny = null, ov = an, ry = le, V1 = !1;
    function ay() {
      return ba;
    }
    function Ta() {
      return (At & (Yr | Hi)) !== gr ? Kn() : (ov !== an || (ov = Kn()), ov);
    }
    function Ju(e) {
      var t = e.mode;
      if ((t & xt) === tt)
        return ct;
      if ((At & Yr) !== gr && Sr !== le)
        return Ms(Sr);
      var a = Xb() !== Kb;
      if (a) {
        if (Wr.transition !== null) {
          var i = Wr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return ry === Pt && (ry = Gd()), ry;
      }
      var l = Va();
      if (l !== Pt)
        return l;
      var s = UR();
      return s;
    }
    function rx(e) {
      var t = e.mode;
      return (t & xt) === tt ? ct : uh();
    }
    function Cr(e, t, a, i) {
      xx(), V1 && y("useInsertionEffect must not schedule updates."), yS && (ty = !0), Du(e, a, i), (At & Yr) !== le && e === ba ? Ox(t) : (na && js(e, t, a), Lx(t), e === ba && ((At & Yr) === gr && (tv = Ct(tv, a)), _r === Zp && Zu(e, Sr)), Ya(e, i), a === ct && At === gr && (t.mode & xt) === tt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !So.isBatchingLegacy && (rv(), V_()));
    }
    function ax(e, t, a) {
      var i = e.current;
      i.lanes = t, Du(e, t, a), Ya(e, a);
    }
    function ix(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (At & Yr) !== gr
      );
    }
    function Ya(e, t) {
      var a = e.callbackNode;
      cf(e, t);
      var i = sf(e, e === ba ? Sr : le);
      if (i === le) {
        a !== null && nE(a), e.callbackNode = null, e.callbackPriority = Pt;
        return;
      }
      var l = Io(i), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(So.current !== null && a !== bS)) {
        a == null && s !== ct && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && nE(a);
      var f;
      if (l === ct)
        e.tag === Hu ? (So.isBatchingLegacy !== null && (So.didScheduleLegacyUpdate = !0), Mb(B1.bind(null, e))) : F_(B1.bind(null, e)), So.current !== null ? So.current.push(Iu) : zR(function() {
          (At & (Yr | Hi)) === gr && Iu();
        }), f = null;
      else {
        var v;
        switch (hh(i)) {
          case Ur:
            v = Ss;
            break;
          case Li:
            v = Po;
            break;
          case Pa:
            v = to;
            break;
          case Fa:
            v = Rl;
            break;
          default:
            v = to;
            break;
        }
        f = TS(v, H1.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = f;
    }
    function H1(e, t) {
      if (RT(), ov = an, ry = le, (At & (Yr | Hi)) !== gr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Jl();
      if (i && e.callbackNode !== a)
        return null;
      var l = sf(e, e === ba ? Sr : le);
      if (l === le)
        return null;
      var s = !df(e, l) && !lh(e, l) && !t, f = s ? hx(e, l) : oy(e, l);
      if (f !== ql) {
        if (f === fc) {
          var v = ff(e);
          v !== le && (l = v, f = gS(e, v));
        }
        if (f === Jp) {
          var g = ev;
          throw pc(e, le), Zu(e, l), Ya(e, Kn()), g;
        }
        if (f === cS)
          Zu(e, l);
        else {
          var C = !df(e, l), R = e.current.alternate;
          if (C && !lx(R)) {
            if (f = oy(e, l), f === fc) {
              var U = ff(e);
              U !== le && (l = U, f = gS(e, U));
            }
            if (f === Jp) {
              var M = ev;
              throw pc(e, le), Zu(e, l), Ya(e, Kn()), M;
            }
          }
          e.finishedWork = R, e.finishedLanes = l, ox(e, f, l);
        }
      }
      return Ya(e, Kn()), e.callbackNode === a ? H1.bind(null, e) : null;
    }
    function gS(e, t) {
      var a = nv;
      if (hf(e)) {
        var i = pc(e, t);
        i.flags |= Tr, wb(e.containerInfo);
      }
      var l = oy(e, t);
      if (l !== fc) {
        var s = Wa;
        Wa = a, s !== null && I1(s);
      }
      return l;
    }
    function I1(e) {
      Wa === null ? Wa = e : Wa.push.apply(Wa, e);
    }
    function ox(e, t, a) {
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
        case Xm: {
          if (Zu(e, a), Al(a) && // do not delay if we're inside an act() scope
          !rE()) {
            var i = dS + z1 - Kn();
            if (i > 10) {
              var l = sf(e, le);
              if (l !== le)
                break;
              var s = e.suspendedLanes;
              if (!Ul(s, a)) {
                Ta(), pf(e, s);
                break;
              }
              e.timeoutHandle = hg(vc.bind(null, e, Wa, Kl), i);
              break;
            }
          }
          vc(e, Wa, Kl);
          break;
        }
        case Zp: {
          if (Zu(e, a), Yd(a))
            break;
          if (!rE()) {
            var f = ui(e, a), v = f, g = Kn() - v, C = wx(g) - g;
            if (C > 10) {
              e.timeoutHandle = hg(vc.bind(null, e, Wa, Kl), C);
              break;
            }
          }
          vc(e, Wa, Kl);
          break;
        }
        case j1: {
          vc(e, Wa, Kl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function lx(e) {
      for (var t = e; ; ) {
        if (t.flags & bu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var s = i[l], f = s.getSnapshot, v = s.value;
                try {
                  if (!de(f(), v))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var g = t.child;
        if (t.subtreeFlags & bu && g !== null) {
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
    function Zu(e, t) {
      t = As(t, Zm), t = As(t, tv), fh(e, t);
    }
    function B1(e) {
      if (bT(), (At & (Yr | Hi)) !== gr)
        throw new Error("Should not already be working.");
      Jl();
      var t = sf(e, le);
      if (!aa(t, ct))
        return Ya(e, Kn()), null;
      var a = oy(e, t);
      if (e.tag !== Hu && a === fc) {
        var i = ff(e);
        i !== le && (t = i, a = gS(e, i));
      }
      if (a === Jp) {
        var l = ev;
        throw pc(e, le), Zu(e, t), Ya(e, Kn()), l;
      }
      if (a === cS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, vc(e, Wa, Kl), Ya(e, Kn()), null;
    }
    function ux(e, t) {
      t !== le && (vf(e, Ct(t, ct)), Ya(e, Kn()), (At & (Yr | Hi)) === gr && (rv(), Iu()));
    }
    function SS(e, t) {
      var a = At;
      At |= U1;
      try {
        return e(t);
      } finally {
        At = a, At === gr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !So.isBatchingLegacy && (rv(), V_());
      }
    }
    function sx(e, t, a, i, l) {
      var s = Va(), f = Wr.transition;
      try {
        return Wr.transition = null, Hn(Ur), e(t, a, i, l);
      } finally {
        Hn(s), Wr.transition = f, At === gr && rv();
      }
    }
    function Xl(e) {
      Xu !== null && Xu.tag === Hu && (At & (Yr | Hi)) === gr && Jl();
      var t = At;
      At |= U1;
      var a = Wr.transition, i = Va();
      try {
        return Wr.transition = null, Hn(Ur), e ? e() : void 0;
      } finally {
        Hn(i), Wr.transition = a, At = t, (At & (Yr | Hi)) === gr && Iu();
      }
    }
    function $1() {
      return (At & (Yr | Hi)) !== gr;
    }
    function iy(e, t) {
      sa(fS, al, e), al = Ct(al, t);
    }
    function _S(e) {
      al = fS.current, ua(fS, e);
    }
    function pc(e, t) {
      e.finishedWork = null, e.finishedLanes = le;
      var a = e.timeoutHandle;
      if (a !== mg && (e.timeoutHandle = mg, jR(a)), Mn !== null)
        for (var i = Mn.return; i !== null; ) {
          var l = i.alternate;
          S1(l, i), i = i.return;
        }
      ba = e;
      var s = hc(e.current, null);
      return Mn = s, Sr = al = t, _r = ql, ev = null, Jm = le, tv = le, Zm = le, nv = null, Wa = null, aT(), co.discardPendingWarnings(), s;
    }
    function W1(e, t) {
      do {
        var a = Mn;
        try {
          if (hm(), hC(), pn(), sS.current = null, a === null || a.return === null) {
            _r = Jp, ev = t, Mn = null;
            return;
          }
          if (Pe && a.mode & Vt && $m(a, !0), Ze)
            if (_a(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Oi(a, i, Sr);
            } else
              Cs(a, t, Sr);
          MT(e, a.return, a, t, Sr), q1(a);
        } catch (l) {
          t = l, Mn === a && a !== null ? (a = a.return, Mn = a) : a = Mn;
          continue;
        }
        return;
      } while (!0);
    }
    function Y1() {
      var e = uS.current;
      return uS.current = Fm, e === null ? Fm : e;
    }
    function Q1(e) {
      uS.current = e;
    }
    function cx() {
      dS = Kn();
    }
    function lv(e) {
      Jm = Ct(e, Jm);
    }
    function fx() {
      _r === ql && (_r = Xm);
    }
    function CS() {
      (_r === ql || _r === Xm || _r === fc) && (_r = Zp), ba !== null && (Ns(Jm) || Ns(tv)) && Zu(ba, Sr);
    }
    function dx(e) {
      _r !== Zp && (_r = fc), nv === null ? nv = [e] : nv.push(e);
    }
    function px() {
      return _r === ql;
    }
    function oy(e, t) {
      var a = At;
      At |= Yr;
      var i = Y1();
      if (ba !== e || Sr !== t) {
        if (na) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (uv(e, Sr), l.clear()), dh(e, t);
        }
        Kl = Jd(), pc(e, t);
      }
      xl(t);
      do
        try {
          vx();
          break;
        } catch (s) {
          W1(e, s);
        }
      while (!0);
      if (hm(), At = a, Q1(i), Mn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return $c(), ba = null, Sr = le, _r;
    }
    function vx() {
      for (; Mn !== null; )
        G1(Mn);
    }
    function hx(e, t) {
      var a = At;
      At |= Yr;
      var i = Y1();
      if (ba !== e || Sr !== t) {
        if (na) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (uv(e, Sr), l.clear()), dh(e, t);
        }
        Kl = Jd(), rv(), pc(e, t);
      }
      xl(t);
      do
        try {
          mx();
          break;
        } catch (s) {
          W1(e, s);
        }
      while (!0);
      return hm(), Q1(i), At = a, Mn !== null ? (rh(), ql) : ($c(), ba = null, Sr = le, _r);
    }
    function mx() {
      for (; Mn !== null && !Ld(); )
        G1(Mn);
    }
    function G1(e) {
      var t = e.alternate;
      Xt(e);
      var a;
      (e.mode & Vt) !== tt ? (b0(e), a = ES(t, e, al), $m(e, !0)) : a = ES(t, e, al), pn(), e.memoizedProps = e.pendingProps, a === null ? q1(e) : Mn = a, sS.current = null;
    }
    function q1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & gs) === et) {
          Xt(t);
          var l = void 0;
          if ((t.mode & Vt) === tt ? l = g1(a, t, al) : (b0(t), l = g1(a, t, al), $m(t, !1)), pn(), l !== null) {
            Mn = l;
            return;
          }
        } else {
          var s = fw(a, t);
          if (s !== null) {
            s.flags &= Xv, Mn = s;
            return;
          }
          if ((t.mode & Vt) !== tt) {
            $m(t, !1);
            for (var f = t.actualDuration, v = t.child; v !== null; )
              f += v.actualDuration, v = v.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= gs, i.subtreeFlags = et, i.deletions = null;
          else {
            _r = cS, Mn = null;
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
      _r === ql && (_r = j1);
    }
    function vc(e, t, a) {
      var i = Va(), l = Wr.transition;
      try {
        Wr.transition = null, Hn(Ur), yx(e, t, a, i);
      } finally {
        Wr.transition = l, Hn(i);
      }
      return null;
    }
    function yx(e, t, a, i) {
      do
        Jl();
      while (Xu !== null);
      if (kx(), (At & (Yr | Hi)) !== gr)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (zd(s), l === null)
        return Pd(), null;
      if (s === le && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = le, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Pt;
      var f = Ct(l.lanes, l.childLanes);
      Kd(e, f), e === ba && (ba = null, Mn = null, Sr = le), ((l.subtreeFlags & eo) !== et || (l.flags & eo) !== et) && (dc || (dc = !0, hS = a, TS(to, function() {
        return Jl(), null;
      })));
      var v = (l.subtreeFlags & (Uo | jo | zo | eo)) !== et, g = (l.flags & (Uo | jo | zo | eo)) !== et;
      if (v || g) {
        var C = Wr.transition;
        Wr.transition = null;
        var R = Va();
        Hn(Ur);
        var U = At;
        At |= Hi, sS.current = null, mw(e, l), VC(), Ow(e, l, s), DR(e.containerInfo), e.current = l, Es(s), Lw(l, e, s), Rs(), Nd(), At = U, Hn(R), Wr.transition = C;
      } else
        e.current = l, VC();
      var M = dc;
      if (dc ? (dc = !1, Xu = e, av = s) : (td = 0, ny = null), f = e.pendingLanes, f === le && (ed = null), M || Z1(e.current, !1), Ad(l.stateNode, i), na && e.memoizedUpdaters.clear(), Kw(), Ya(e, Kn()), t !== null)
        for (var B = e.onRecoverableError, Q = 0; Q < t.length; Q++) {
          var ee = t[Q], Ne = ee.stack, it = ee.digest;
          B(ee.value, {
            componentStack: Ne,
            digest: it
          });
        }
      if (ey) {
        ey = !1;
        var Ke = pS;
        throw pS = null, Ke;
      }
      return aa(av, ct) && e.tag !== Hu && Jl(), f = e.pendingLanes, aa(f, ct) ? (ET(), e === mS ? iv++ : (iv = 0, mS = e)) : iv = 0, Iu(), Pd(), null;
    }
    function Jl() {
      if (Xu !== null) {
        var e = hh(av), t = Ps(Pa, e), a = Wr.transition, i = Va();
        try {
          return Wr.transition = null, Hn(t), Sx();
        } finally {
          Hn(i), Wr.transition = a;
        }
      }
      return !1;
    }
    function gx(e) {
      vS.push(e), dc || (dc = !0, TS(to, function() {
        return Jl(), null;
      }));
    }
    function Sx() {
      if (Xu === null)
        return !1;
      var e = hS;
      hS = null;
      var t = Xu, a = av;
      if (Xu = null, av = le, (At & (Yr | Hi)) !== gr)
        throw new Error("Cannot flush passive effects while already rendering.");
      yS = !0, ty = !1, wl(a);
      var i = At;
      At |= Hi, Pw(t.current), Aw(t, t.current, a, e);
      {
        var l = vS;
        vS = [];
        for (var s = 0; s < l.length; s++) {
          var f = l[s];
          _w(t, f);
        }
      }
      Hd(), Z1(t.current, !0), At = i, Iu(), ty ? t === ny ? td++ : (td = 0, ny = t) : td = 0, yS = !1, ty = !1, Ud(t);
      {
        var v = t.current.stateNode;
        v.effectDuration = 0, v.passiveEffectDuration = 0;
      }
      return !0;
    }
    function K1(e) {
      return ed !== null && ed.has(e);
    }
    function _x(e) {
      ed === null ? ed = /* @__PURE__ */ new Set([e]) : ed.add(e);
    }
    function Cx(e) {
      ey || (ey = !0, pS = e);
    }
    var Ex = Cx;
    function X1(e, t, a) {
      var i = sc(a, t), l = GC(e, i, ct), s = $u(e, l, ct), f = Ta();
      s !== null && (Du(s, ct, f), Ya(s, f));
    }
    function vn(e, t, a) {
      if (pw(a), sv(!1), e.tag === H) {
        X1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === H) {
          X1(i, e, a);
          return;
        } else if (i.tag === T) {
          var l = i.type, s = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !K1(s)) {
            var f = sc(a, e), v = I0(i, f, ct), g = $u(i, v, ct), C = Ta();
            g !== null && (Du(g, ct, C), Ya(g, C));
            return;
          }
        }
        i = i.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Rx(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = Ta();
      pf(e, a), Nx(e), ba === e && Ul(Sr, a) && (_r === Zp || _r === Xm && Al(Sr) && Kn() - dS < z1 ? pc(e, le) : Zm = Ct(Zm, a)), Ya(e, l);
    }
    function J1(e, t) {
      t === Pt && (t = rx(e));
      var a = Ta(), i = Ba(e, t);
      i !== null && (Du(i, t, a), Ya(i, a));
    }
    function bx(e) {
      var t = e.memoizedState, a = Pt;
      t !== null && (a = t.retryLane), J1(e, a);
    }
    function Tx(e, t) {
      var a = Pt, i;
      switch (e.tag) {
        case ne:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case me:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), J1(e, a);
    }
    function wx(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Zw(e / 1960) * 1960;
    }
    function xx() {
      if (iv > tx)
        throw iv = 0, mS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      td > nx && (td = 0, ny = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function kx() {
      co.flushLegacyContextWarning(), co.flushPendingUnsafeLifecycleWarnings();
    }
    function Z1(e, t) {
      Xt(e), ly(e, Ao, Qw), t && ly(e, xi, Gw), ly(e, Ao, Ww), t && ly(e, xi, Yw), pn();
    }
    function ly(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== et ? i = i.child : ((i.flags & t) !== et && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var uy = null;
    function eE(e) {
      {
        if ((At & Yr) !== gr || !(e.mode & xt))
          return;
        var t = e.tag;
        if (t !== z && t !== H && t !== T && t !== k && t !== _e && t !== Be && t !== Oe)
          return;
        var a = vt(e) || "ReactComponent";
        if (uy !== null) {
          if (uy.has(a))
            return;
          uy.add(a);
        } else
          uy = /* @__PURE__ */ new Set([a]);
        var i = sr;
        try {
          Xt(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Xt(e) : pn();
        }
      }
    }
    var ES;
    {
      var Dx = null;
      ES = function(e, t, a) {
        var i = uE(Dx, t);
        try {
          return p1(e, t, a);
        } catch (s) {
          if (Hb() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (hm(), hC(), S1(e, t), uE(t, i), t.mode & Vt && b0(t), Mo(null, p1, null, e, t, a), Ji()) {
            var l = ys();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var tE = !1, RS;
    RS = /* @__PURE__ */ new Set();
    function Ox(e) {
      if (_i && !ST())
        switch (e.tag) {
          case k:
          case _e:
          case Oe: {
            var t = Mn && vt(Mn) || "Unknown", a = t;
            if (!RS.has(a)) {
              RS.add(a);
              var i = vt(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case T: {
            tE || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), tE = !0);
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
    var bS = {};
    function TS(e, t) {
      {
        var a = So.current;
        return a !== null ? (a.push(t), bS) : Od(e, t);
      }
    }
    function nE(e) {
      if (e !== bS)
        return Zv(e);
    }
    function rE() {
      return So.current !== null;
    }
    function Lx(e) {
      {
        if (e.mode & xt) {
          if (!A1())
            return;
        } else if (!Jw() || At !== gr || e.tag !== k && e.tag !== _e && e.tag !== Oe)
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

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, vt(e));
          } finally {
            t ? Xt(e) : pn();
          }
        }
      }
    }
    function Nx(e) {
      e.tag !== Hu && A1() && So.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function sv(e) {
      V1 = e;
    }
    var Ii = null, nd = null, Mx = function(e) {
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
    function wS(e) {
      return rd(e);
    }
    function xS(e) {
      {
        if (Ii === null)
          return e;
        var t = Ii(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = rd(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: oe,
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
    function aE(e, t) {
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
          case _e: {
            (s === oe || s === mt) && (l = !0);
            break;
          }
          case Be:
          case Oe: {
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
    function iE(e) {
      {
        if (Ii === null || typeof WeakSet != "function")
          return;
        nd === null && (nd = /* @__PURE__ */ new WeakSet()), nd.add(e);
      }
    }
    var Ax = function(e, t) {
      {
        if (Ii === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Jl(), Xl(function() {
          kS(e.current, i, a);
        });
      }
    }, Ux = function(e, t) {
      {
        if (e.context !== fi)
          return;
        Jl(), Xl(function() {
          cv(t, e, null, null);
        });
      }
    };
    function kS(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, f = e.tag, v = e.type, g = null;
        switch (f) {
          case k:
          case Oe:
          case T:
            g = v;
            break;
          case _e:
            g = v.render;
            break;
        }
        if (Ii === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var C = !1, R = !1;
        if (g !== null) {
          var U = Ii(g);
          U !== void 0 && (a.has(U) ? R = !0 : t.has(U) && (f === T ? R = !0 : C = !0));
        }
        if (nd !== null && (nd.has(e) || i !== null && nd.has(i)) && (R = !0), R && (e._debugNeedsRemount = !0), R || C) {
          var M = Ba(e, ct);
          M !== null && Cr(M, e, ct, an);
        }
        l !== null && !R && kS(l, t, a), s !== null && kS(s, t, a);
      }
    }
    var jx = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return DS(e.current, i, a), a;
      }
    };
    function DS(e, t, a) {
      {
        var i = e.child, l = e.sibling, s = e.tag, f = e.type, v = null;
        switch (s) {
          case k:
          case Oe:
          case T:
            v = f;
            break;
          case _e:
            v = f.render;
            break;
        }
        var g = !1;
        v !== null && t.has(v) && (g = !0), g ? zx(e, a) : i !== null && DS(i, t, a), l !== null && DS(l, t, a);
      }
    }
    function zx(e, t) {
      {
        var a = Px(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case G:
              t.add(i.stateNode);
              return;
            case q:
              t.add(i.stateNode.containerInfo);
              return;
            case H:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function Px(e, t) {
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
    var OS;
    {
      OS = !1;
      try {
        var oE = Object.preventExtensions({});
      } catch {
        OS = !0;
      }
    }
    function Fx(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = et, this.subtreeFlags = et, this.deletions = null, this.lanes = le, this.childLanes = le, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !OS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var di = function(e, t, a, i) {
      return new Fx(e, t, a, i);
    };
    function LS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Vx(e) {
      return typeof e == "function" && !LS(e) && e.defaultProps === void 0;
    }
    function Hx(e) {
      if (typeof e == "function")
        return LS(e) ? T : k;
      if (e != null) {
        var t = e.$$typeof;
        if (t === oe)
          return _e;
        if (t === St)
          return Be;
      }
      return z;
    }
    function hc(e, t) {
      var a = e.alternate;
      a === null ? (a = di(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = et, a.subtreeFlags = et, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Pn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case z:
        case k:
        case Oe:
          a.type = rd(e.type);
          break;
        case T:
          a.type = wS(e.type);
          break;
        case _e:
          a.type = xS(e.type);
          break;
      }
      return a;
    }
    function Ix(e, t) {
      e.flags &= Pn | Sn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = le, e.lanes = t, e.child = null, e.subtreeFlags = et, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
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
    function Bx(e, t, a) {
      var i;
      return e === im ? (i = xt, t === !0 && (i |= en, i |= Ht)) : i = tt, na && (i |= Vt), di(H, null, null, i);
    }
    function NS(e, t, a, i, l, s) {
      var f = z, v = e;
      if (typeof e == "function")
        LS(e) ? (f = T, v = wS(v)) : v = rd(v);
      else if (typeof e == "string")
        f = G;
      else
        e: switch (e) {
          case mi:
            return es(a.children, l, s, t);
          case Xa:
            f = ce, l |= en, (l & xt) !== tt && (l |= Ht);
            break;
          case yi:
            return $x(a, l, s, t);
          case ke:
            return Wx(a, l, s, t);
          case Ie:
            return Yx(a, l, s, t);
          case xn:
            return lE(a, l, s, t);
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
                  f = ge;
                  break e;
                case O:
                  f = be;
                  break e;
                case oe:
                  f = _e, v = xS(v);
                  break e;
                case St:
                  f = Be;
                  break e;
                case mt:
                  f = Qe, v = null;
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
      var R = di(f, a, t, l);
      return R.elementType = e, R.type = v, R.lanes = s, R._debugOwner = i, R;
    }
    function MS(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, f = e.props, v = NS(l, s, f, i, t, a);
      return v._debugSource = e._source, v._debugOwner = e._owner, v;
    }
    function es(e, t, a, i) {
      var l = di(ie, e, i, t);
      return l.lanes = a, l;
    }
    function $x(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = di(De, e, i, t | Vt);
      return l.elementType = yi, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function Wx(e, t, a, i) {
      var l = di(ne, e, i, t);
      return l.elementType = ke, l.lanes = a, l;
    }
    function Yx(e, t, a, i) {
      var l = di(me, e, i, t);
      return l.elementType = Ie, l.lanes = a, l;
    }
    function lE(e, t, a, i) {
      var l = di(K, e, i, t);
      l.elementType = xn, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function AS(e, t, a) {
      var i = di(pe, e, null, t);
      return i.lanes = a, i;
    }
    function Qx() {
      var e = di(G, null, null, tt);
      return e.elementType = "DELETED", e;
    }
    function Gx(e) {
      var t = di(nt, null, null, tt);
      return t.stateNode = e, t;
    }
    function US(e, t, a) {
      var i = e.children !== null ? e.children : [], l = di(q, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function uE(e, t) {
      return e === null && (e = di(z, null, null, tt)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function qx(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = mg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Pt, this.eventTimes = Us(le), this.expirationTimes = Us(an), this.pendingLanes = le, this.suspendedLanes = le, this.pingedLanes = le, this.expiredLanes = le, this.mutableReadLanes = le, this.finishedLanes = le, this.entangledLanes = le, this.entanglements = Us(le), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < kl; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case im:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Hu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function sE(e, t, a, i, l, s, f, v, g, C) {
      var R = new qx(e, t, a, v, g), U = Bx(t, s);
      R.current = U, U.stateNode = R;
      {
        var M = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        U.memoizedState = M;
      }
      return Gg(U), R;
    }
    var jS = "18.3.1";
    function Kx(e, t, a) {
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
    var zS, PS;
    zS = !1, PS = {};
    function cE(e) {
      if (!e)
        return fi;
      var t = Ru(e), a = Nb(t);
      if (t.tag === T) {
        var i = t.type;
        if (Xo(i))
          return z_(t, i, a);
      }
      return a;
    }
    function Xx(e, t) {
      {
        var a = Ru(e);
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
          if (!PS[s]) {
            PS[s] = !0;
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
    function fE(e, t, a, i, l, s, f, v) {
      var g = !1, C = null;
      return sE(e, t, g, C, a, i, l, s, f);
    }
    function dE(e, t, a, i, l, s, f, v, g, C) {
      var R = !0, U = sE(a, i, R, e, l, s, f, v, g);
      U.context = cE(null);
      var M = U.current, B = Ta(), Q = Ju(M), ee = Ql(B, Q);
      return ee.callback = t ?? null, $u(M, ee, Q), ax(U, Q, B), U;
    }
    function cv(e, t, a, i) {
      Md(t, e);
      var l = t.current, s = Ta(), f = Ju(l);
      Cn(f);
      var v = cE(a);
      t.context === null ? t.context = v : t.pendingContext = v, _i && sr !== null && !zS && (zS = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, vt(sr) || "Unknown"));
      var g = Ql(s, f);
      g.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), g.callback = i);
      var C = $u(l, g, f);
      return C !== null && (Cr(C, l, f, s), _m(C, l, f)), f;
    }
    function sy(e) {
      var t = e.current;
      return t.child ? t.child.tag === G ? t.child.stateNode : t.child.stateNode : null;
    }
    function Jx(e) {
      switch (e.tag) {
        case H: {
          var t = e.stateNode;
          if (hf(t)) {
            var a = ih(t);
            ux(t, a);
          }
          break;
        }
        case ne: {
          Xl(function() {
            var l = Ba(e, ct);
            if (l !== null) {
              var s = Ta();
              Cr(l, e, ct, s);
            }
          });
          var i = ct;
          FS(e, i);
          break;
        }
      }
    }
    function pE(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = ch(a.retryLane, t));
    }
    function FS(e, t) {
      pE(e, t);
      var a = e.alternate;
      a && pE(a, t);
    }
    function Zx(e) {
      if (e.tag === ne) {
        var t = Ds, a = Ba(e, t);
        if (a !== null) {
          var i = Ta();
          Cr(a, e, t, i);
        }
        FS(e, t);
      }
    }
    function ek(e) {
      if (e.tag === ne) {
        var t = Ju(e), a = Ba(e, t);
        if (a !== null) {
          var i = Ta();
          Cr(a, e, t, i);
        }
        FS(e, t);
      }
    }
    function vE(e) {
      var t = hn(e);
      return t === null ? null : t.stateNode;
    }
    var hE = function(e) {
      return null;
    };
    function tk(e) {
      return hE(e);
    }
    var mE = function(e) {
      return !1;
    };
    function nk(e) {
      return mE(e);
    }
    var yE = null, gE = null, SE = null, _E = null, CE = null, EE = null, RE = null, bE = null, TE = null;
    {
      var wE = function(e, t, a) {
        var i = t[a], l = bt(e) ? e.slice() : Et({}, e);
        return a + 1 === t.length ? (bt(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = wE(e[i], t, a + 1), l);
      }, xE = function(e, t) {
        return wE(e, t, 0);
      }, kE = function(e, t, a, i) {
        var l = t[i], s = bt(e) ? e.slice() : Et({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[l], bt(s) ? s.splice(l, 1) : delete s[l];
        } else
          s[l] = kE(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return s;
      }, DE = function(e, t, a) {
        if (t.length !== a.length) {
          b("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              b("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return kE(e, t, a, 0);
      }, OE = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], s = bt(e) ? e.slice() : Et({}, e);
        return s[l] = OE(e[l], t, a + 1, i), s;
      }, LE = function(e, t, a) {
        return OE(e, t, 0, a);
      }, VS = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      yE = function(e, t, a, i) {
        var l = VS(e, t);
        if (l !== null) {
          var s = LE(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = Et({}, e.memoizedProps);
          var f = Ba(e, ct);
          f !== null && Cr(f, e, ct, an);
        }
      }, gE = function(e, t, a) {
        var i = VS(e, t);
        if (i !== null) {
          var l = xE(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = Et({}, e.memoizedProps);
          var s = Ba(e, ct);
          s !== null && Cr(s, e, ct, an);
        }
      }, SE = function(e, t, a, i) {
        var l = VS(e, t);
        if (l !== null) {
          var s = DE(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = Et({}, e.memoizedProps);
          var f = Ba(e, ct);
          f !== null && Cr(f, e, ct, an);
        }
      }, _E = function(e, t, a) {
        e.pendingProps = LE(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, ct);
        i !== null && Cr(i, e, ct, an);
      }, CE = function(e, t) {
        e.pendingProps = xE(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ba(e, ct);
        a !== null && Cr(a, e, ct, an);
      }, EE = function(e, t, a) {
        e.pendingProps = DE(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, ct);
        i !== null && Cr(i, e, ct, an);
      }, RE = function(e) {
        var t = Ba(e, ct);
        t !== null && Cr(t, e, ct, an);
      }, bE = function(e) {
        hE = e;
      }, TE = function(e) {
        mE = e;
      };
    }
    function rk(e) {
      var t = ea(e);
      return t === null ? null : t.stateNode;
    }
    function ak(e) {
      return null;
    }
    function ik() {
      return sr;
    }
    function ok(e) {
      var t = e.findFiberByHostInstance, a = m.ReactCurrentDispatcher;
      return wu({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: yE,
        overrideHookStateDeletePath: gE,
        overrideHookStateRenamePath: SE,
        overrideProps: _E,
        overridePropsDeletePath: CE,
        overridePropsRenamePath: EE,
        setErrorHandler: bE,
        setSuspenseHandler: TE,
        scheduleUpdate: RE,
        currentDispatcherRef: a,
        findHostInstanceByFiber: rk,
        findFiberByHostInstance: t || ak,
        // React Refresh
        findHostInstancesForRefresh: jx,
        scheduleRefresh: Ax,
        scheduleRoot: Ux,
        setRefreshHandler: Mx,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: ik,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: jS
      });
    }
    var NE = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function HS(e) {
      this._internalRoot = e;
    }
    cy.prototype.render = HS.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : fy(arguments[1]) ? y("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && y("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== jn) {
          var i = vE(t.current);
          i && i.parentNode !== a && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      cv(e, t, null, null);
    }, cy.prototype.unmount = HS.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        $1() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Xl(function() {
          cv(null, e, null, null);
        }), N_(t);
      }
    };
    function lk(e, t) {
      if (!fy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      ME(e);
      var a = !1, i = !1, l = "", s = NE;
      t != null && (t.hydrate ? b("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Lr && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = fE(e, im, null, a, i, l, s);
      Jh(f.current, e);
      var v = e.nodeType === jn ? e.parentNode : e;
      return mp(v), new HS(f);
    }
    function cy(e) {
      this._internalRoot = e;
    }
    function uk(e) {
      e && _h(e);
    }
    cy.prototype.unstable_scheduleHydration = uk;
    function sk(e, t, a) {
      if (!fy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      ME(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, s = !1, f = !1, v = "", g = NE;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (v = a.identifierPrefix), a.onRecoverableError !== void 0 && (g = a.onRecoverableError));
      var C = dE(t, null, e, im, i, s, f, v, g);
      if (Jh(C.current, e), mp(e), l)
        for (var R = 0; R < l.length; R++) {
          var U = l[R];
          pT(C, U);
        }
      return new cy(C);
    }
    function fy(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === Xi || e.nodeType === gd));
    }
    function fv(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === Xi || e.nodeType === gd || e.nodeType === jn && e.nodeValue === " react-mount-point-unstable "));
    }
    function ME(e) {
      e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), xp(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var ck = m.ReactCurrentOwner, AE;
    AE = function(e) {
      if (e._reactRootContainer && e.nodeType !== jn) {
        var t = vE(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = IS(e), l = !!(i && Fu(i));
      l && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function IS(e) {
      return e ? e.nodeType === Xi ? e.documentElement : e.firstChild : null;
    }
    function UE() {
    }
    function fk(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var M = sy(f);
            s.call(M);
          };
        }
        var f = dE(
          t,
          i,
          e,
          Hu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          UE
        );
        e._reactRootContainer = f, Jh(f.current, e);
        var v = e.nodeType === jn ? e.parentNode : e;
        return mp(v), Xl(), f;
      } else {
        for (var g; g = e.lastChild; )
          e.removeChild(g);
        if (typeof i == "function") {
          var C = i;
          i = function() {
            var M = sy(R);
            C.call(M);
          };
        }
        var R = fE(
          e,
          Hu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          UE
        );
        e._reactRootContainer = R, Jh(R.current, e);
        var U = e.nodeType === jn ? e.parentNode : e;
        return mp(U), Xl(function() {
          cv(t, R, a, i);
        }), R;
      }
    }
    function dk(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function dy(e, t, a, i, l) {
      AE(a), dk(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = fk(a, t, e, l, i);
      else {
        if (f = s, typeof l == "function") {
          var v = l;
          l = function() {
            var g = sy(f);
            v.call(g);
          };
        }
        cv(t, f, e, l);
      }
      return sy(f);
    }
    var jE = !1;
    function pk(e) {
      {
        jE || (jE = !0, y("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = ck.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", jt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Xr ? e : Xx(e, "findDOMNode");
    }
    function vk(e, t, a) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !fv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = xp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return dy(null, e, t, !0, a);
    }
    function hk(e, t, a) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !fv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = xp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return dy(null, e, t, !1, a);
    }
    function mk(e, t, a, i) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !fv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Fy(e))
        throw new Error("parentComponent must be a valid React Component");
      return dy(e, t, a, !1, i);
    }
    var zE = !1;
    function yk(e) {
      if (zE || (zE = !0, y("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !fv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = xp(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = IS(e), i = a && !Fu(a);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Xl(function() {
          dy(null, null, e, !1, function() {
            e._reactRootContainer = null, N_(e);
          });
        }), !0;
      } else {
        {
          var l = IS(e), s = !!(l && Fu(l)), f = e.nodeType === Xr && fv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    xr(Jx), Ou(Zx), mh(ek), Vs(Va), Zd(ph), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Lc(SR), Py(SS, sx, Xl);
    function gk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!fy(t))
        throw new Error("Target container is not a DOM element.");
      return Kx(e, t, null, a);
    }
    function Sk(e, t, a, i) {
      return mk(e, t, a, i);
    }
    var BS = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Fu, Af, Zh, Su, Nc, SS]
    };
    function _k(e, t) {
      return BS.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), lk(e, t);
    }
    function Ck(e, t, a) {
      return BS.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), sk(e, t, a);
    }
    function Ek(e) {
      return $1() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Xl(e);
    }
    var Rk = ok({
      findFiberByHostInstance: ec,
      bundleType: 1,
      version: jS,
      rendererPackageName: "react-dom"
    });
    if (!Rk && An && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var PE = window.location.protocol;
      /^(https?|file):$/.test(PE) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (PE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ga.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = BS, Ga.createPortal = gk, Ga.createRoot = _k, Ga.findDOMNode = pk, Ga.flushSync = Ek, Ga.hydrate = vk, Ga.hydrateRoot = Ck, Ga.render = hk, Ga.unmountComponentAtNode = yk, Ga.unstable_batchedUpdates = SS, Ga.unstable_renderSubtreeIntoContainer = Sk, Ga.version = jS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })()), Ga;
}
var u2;
function DO() {
  if (u2) return gy.exports;
  u2 = 1;
  function p() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p);
      } catch (h) {
        console.error(h);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (p(), gy.exports = xO()) : gy.exports = kO(), gy.exports;
}
var r_ = DO();
const hv = /* @__PURE__ */ R2(r_);
function qS(p, h) {
  (h == null || h > p.length) && (h = p.length);
  for (var m = 0, E = Array(h); m < h; m++) E[m] = p[m];
  return E;
}
function OO(p) {
  if (Array.isArray(p)) return p;
}
function LO(p) {
  if (Array.isArray(p)) return qS(p);
}
function NO(p) {
  if (p === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return p;
}
function s2(p, h, m, E, x, b, y) {
  try {
    var N = p[b](y), k = N.value;
  } catch (T) {
    return void m(T);
  }
  N.done ? h(k) : Promise.resolve(k).then(E, x);
}
function MO(p) {
  return function() {
    var h = this, m = arguments;
    return new Promise(function(E, x) {
      var b = p.apply(h, m);
      function y(k) {
        s2(b, E, x, y, N, "next", k);
      }
      function N(k) {
        s2(b, E, x, y, N, "throw", k);
      }
      y(void 0);
    });
  };
}
function Ey(p, h, m) {
  return h = KS(h), FO(p, k2() ? Reflect.construct(h, m || [], KS(p).constructor) : h.apply(p, m));
}
function _v(p, h) {
  if (!(p instanceof h)) throw new TypeError("Cannot call a class as a function");
}
function c2(p, h) {
  for (var m = 0; m < h.length; m++) {
    var E = h[m];
    E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(p, Cy(E.key), E);
  }
}
function Cv(p, h, m) {
  return h && c2(p.prototype, h), m && c2(p, m), Object.defineProperty(p, "prototype", { writable: !1 }), p;
}
function ld(p, h, m) {
  return (h = Cy(h)) in p ? Object.defineProperty(p, h, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : p[h] = m, p;
}
function gc() {
  return (gc = Object.assign ? Object.assign.bind() : function(p) {
    for (var h = 1; h < arguments.length; h++) {
      var m, E = arguments[h];
      for (m in E) !{}.hasOwnProperty.call(E, m) || (p[m] = E[m]);
    }
    return p;
  }).apply(null, arguments);
}
function KS(p) {
  return (KS = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(h) {
    return h.__proto__ || Object.getPrototypeOf(h);
  })(p);
}
function Ry(p, h) {
  if (typeof h != "function" && h !== null) throw new TypeError("Super expression must either be null or a function");
  p.prototype = Object.create(h && h.prototype, { constructor: { value: p, writable: !0, configurable: !0 } }), Object.defineProperty(p, "prototype", { writable: !1 }), h && D2(p, h);
}
function k2() {
  try {
    var p = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (k2 = function() {
    return !!p;
  })();
}
function AO(p) {
  if (typeof Symbol < "u" && p[Symbol.iterator] != null || p["@@iterator"] != null) return Array.from(p);
}
function UO(p, h) {
  var m = p == null ? null : typeof Symbol < "u" && p[Symbol.iterator] || p["@@iterator"];
  if (m != null) {
    var E, x, b, y, N = [], k = !0, T = !1;
    try {
      if (b = (m = m.call(p)).next, h !== 0) for (; !(k = (E = b.call(m)).done) && (N.push(E.value), N.length !== h); k = !0) ;
    } catch (z) {
      T = !0, x = z;
    } finally {
      try {
        if (!k && m.return != null && (y = m.return(), Object(y) !== y)) return;
      } finally {
        if (T) throw x;
      }
    }
    return N;
  }
}
function jO() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zO() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function f2(p, h) {
  var m, E = Object.keys(p);
  return Object.getOwnPropertySymbols && (m = Object.getOwnPropertySymbols(p), h && (m = m.filter(function(x) {
    return Object.getOwnPropertyDescriptor(p, x).enumerable;
  })), E.push.apply(E, m)), E;
}
function ue(p) {
  for (var h = 1; h < arguments.length; h++) {
    var m = arguments[h] != null ? arguments[h] : {};
    h % 2 ? f2(Object(m), !0).forEach(function(E) {
      ld(p, E, m[E]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(m)) : f2(Object(m)).forEach(function(E) {
      Object.defineProperty(p, E, Object.getOwnPropertyDescriptor(m, E));
    });
  }
  return p;
}
function $i(p, h) {
  if (p == null) return {};
  var m, E = PO(p, h);
  if (Object.getOwnPropertySymbols) for (var x = Object.getOwnPropertySymbols(p), b = 0; b < x.length; b++) m = x[b], h.includes(m) || {}.propertyIsEnumerable.call(p, m) && (E[m] = p[m]);
  return E;
}
function PO(p, h) {
  if (p == null) return {};
  var m, E = {};
  for (m in p) if ({}.hasOwnProperty.call(p, m)) {
    if (h.includes(m)) continue;
    E[m] = p[m];
  }
  return E;
}
function FO(p, h) {
  if (h && (typeof h == "object" || typeof h == "function")) return h;
  if (h !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return NO(p);
}
function id() {
  id = function() {
    return h;
  };
  var p, h = {}, m = Object.prototype, E = m.hasOwnProperty, x = Object.defineProperty || function(W, K, Ee) {
    W[K] = Ee.value;
  }, _e = typeof Symbol == "function" ? Symbol : {}, b = _e.iterator || "@@iterator", y = _e.asyncIterator || "@@asyncIterator", N = _e.toStringTag || "@@toStringTag";
  function k(W, K, Ee) {
    return Object.defineProperty(W, K, { value: Ee, enumerable: !0, configurable: !0, writable: !0 }), W[K];
  }
  try {
    k({}, "");
  } catch {
    k = function(K, Ee, He) {
      return K[Ee] = He;
    };
  }
  function T(W, ye, Ee, j) {
    var xe, Ce, re, Me, ye = ye && ye.prototype instanceof ce ? ye : ce, ye = Object.create(ye.prototype), j = new nt(j || []);
    return x(ye, "_invoke", { value: (xe = W, Ce = Ee, re = j, Me = H, function(J, Ze) {
      if (Me === G) throw Error("Generator is already running");
      if (Me === pe) {
        if (J === "throw") throw Ze;
        return { value: p, done: !0 };
      }
      for (re.method = J, re.arg = Ze; ; ) {
        var Pe = re.delegate;
        if (Pe && (Pe = (function ht(rt, Ae) {
          var st = Ae.method, dt = rt.iterator[st];
          return dt === p ? (Ae.delegate = null, st === "throw" && rt.iterator.return && (Ae.method = "return", Ae.arg = p, ht(rt, Ae), Ae.method === "throw") || st !== "return" && (Ae.method = "throw", Ae.arg = new TypeError("The iterator does not provide a '" + st + "' method")), ie) : (st = z(dt, rt.iterator, Ae.arg), st.type === "throw" ? (Ae.method = "throw", Ae.arg = st.arg, Ae.delegate = null, ie) : (dt = st.arg, dt ? dt.done ? (Ae[rt.resultName] = dt.value, Ae.next = rt.nextLoc, Ae.method !== "return" && (Ae.method = "next", Ae.arg = p), Ae.delegate = null, ie) : dt : (Ae.method = "throw", Ae.arg = new TypeError("iterator result is not an object"), Ae.delegate = null, ie)));
        })(Pe, re), Pe)) {
          if (Pe === ie) continue;
          return Pe;
        }
        if (re.method === "next") re.sent = re._sent = re.arg;
        else if (re.method === "throw") {
          if (Me === H) throw Me = pe, re.arg;
          re.dispatchException(re.arg);
        } else re.method === "return" && re.abrupt("return", re.arg);
        if (Me = G, Pe = z(xe, Ce, re), Pe.type === "normal") {
          if (Me = re.done ? pe : q, Pe.arg === ie) continue;
          return { value: Pe.arg, done: re.done };
        }
        Pe.type === "throw" && (Me = pe, re.method = "throw", re.arg = Pe.arg);
      }
    }) }), ye;
  }
  function z(W, K, Ee) {
    try {
      return { type: "normal", arg: W.call(K, Ee) };
    } catch (He) {
      return { type: "throw", arg: He };
    }
  }
  h.wrap = T;
  var H = "suspendedStart", q = "suspendedYield", G = "executing", pe = "completed", ie = {};
  function ce() {
  }
  function be() {
  }
  function ge() {
  }
  var _e = {}, De = (k(_e, b, function() {
    return this;
  }), Object.getPrototypeOf), De = De && De(De(me([]))), ne = (De && De !== m && E.call(De, b) && (_e = De), ge.prototype = ce.prototype = Object.create(_e));
  function Be(W) {
    ["next", "throw", "return"].forEach(function(K) {
      k(W, K, function(Ee) {
        return this._invoke(K, Ee);
      });
    });
  }
  function Oe(W, K) {
    var Ee;
    x(this, "_invoke", { value: function(He, xe) {
      function Ce() {
        return new K(function(re, Me) {
          (function ye(rt, J, Ze, Pe) {
            var ht, rt = z(W[rt], W, J);
            if (rt.type !== "throw") return (J = (ht = rt.arg).value) && typeof J == "object" && E.call(J, "__await") ? K.resolve(J.__await).then(function(Ae) {
              ye("next", Ae, Ze, Pe);
            }, function(Ae) {
              ye("throw", Ae, Ze, Pe);
            }) : K.resolve(J).then(function(Ae) {
              ht.value = Ae, Ze(ht);
            }, function(Ae) {
              return ye("throw", Ae, Ze, Pe);
            });
            Pe(rt.arg);
          })(He, xe, re, Me);
        });
      }
      return Ee = Ee ? Ee.then(Ce, Ce) : Ce();
    } });
  }
  function Qe(W) {
    var K = { tryLoc: W[0] };
    1 in W && (K.catchLoc = W[1]), 2 in W && (K.finallyLoc = W[2], K.afterLoc = W[3]), this.tryEntries.push(K);
  }
  function Je(W) {
    var K = W.completion || {};
    K.type = "normal", delete K.arg, W.completion = K;
  }
  function nt(W) {
    this.tryEntries = [{ tryLoc: "root" }], W.forEach(Qe, this), this.reset(!0);
  }
  function me(W) {
    if (W || W === "") {
      var K, Ee = W[b];
      if (Ee) return Ee.call(W);
      if (typeof W.next == "function") return W;
      if (!isNaN(W.length)) return K = -1, (Ee = function He() {
        for (; ++K < W.length; ) if (E.call(W, K)) return He.value = W[K], He.done = !1, He;
        return He.value = p, He.done = !0, He;
      }).next = Ee;
    }
    throw new TypeError(typeof W + " is not iterable");
  }
  return x(ne, "constructor", { value: be.prototype = ge, configurable: !0 }), x(ge, "constructor", { value: be, configurable: !0 }), be.displayName = k(ge, N, "GeneratorFunction"), h.isGeneratorFunction = function(W) {
    return W = typeof W == "function" && W.constructor, !!W && (W === be || (W.displayName || W.name) === "GeneratorFunction");
  }, h.mark = function(W) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(W, ge) : (W.__proto__ = ge, k(W, N, "GeneratorFunction")), W.prototype = Object.create(ne), W;
  }, h.awrap = function(W) {
    return { __await: W };
  }, Be(Oe.prototype), k(Oe.prototype, y, function() {
    return this;
  }), h.AsyncIterator = Oe, h.async = function(W, K, Ee, He, xe) {
    xe === void 0 && (xe = Promise);
    var Ce = new Oe(T(W, K, Ee, He), xe);
    return h.isGeneratorFunction(K) ? Ce : Ce.next().then(function(re) {
      return re.done ? re.value : Ce.next();
    });
  }, Be(ne), k(ne, N, "Generator"), k(ne, b, function() {
    return this;
  }), k(ne, "toString", function() {
    return "[object Generator]";
  }), h.keys = function(W) {
    var K, Ee = Object(W), He = [];
    for (K in Ee) He.push(K);
    return He.reverse(), function xe() {
      for (; He.length; ) {
        var Ce = He.pop();
        if (Ce in Ee) return xe.value = Ce, xe.done = !1, xe;
      }
      return xe.done = !0, xe;
    };
  }, h.values = me, nt.prototype = { constructor: nt, reset: function(W) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = p, this.done = !1, this.delegate = null, this.method = "next", this.arg = p, this.tryEntries.forEach(Je), !W) for (var K in this) K.charAt(0) === "t" && E.call(this, K) && !isNaN(+K.slice(1)) && (this[K] = p);
  }, stop: function() {
    this.done = !0;
    var W = this.tryEntries[0].completion;
    if (W.type === "throw") throw W.arg;
    return this.rval;
  }, dispatchException: function(W) {
    if (this.done) throw W;
    var K = this;
    function Ee(ye, j) {
      return Ce.type = "throw", Ce.arg = W, K.next = ye, j && (K.method = "next", K.arg = p), !!j;
    }
    for (var He = this.tryEntries.length - 1; 0 <= He; --He) {
      var xe = this.tryEntries[He], Ce = xe.completion;
      if (xe.tryLoc === "root") return Ee("end");
      if (xe.tryLoc <= this.prev) {
        var re = E.call(xe, "catchLoc"), Me = E.call(xe, "finallyLoc");
        if (re && Me) {
          if (this.prev < xe.catchLoc) return Ee(xe.catchLoc, !0);
          if (this.prev < xe.finallyLoc) return Ee(xe.finallyLoc);
        } else if (re) {
          if (this.prev < xe.catchLoc) return Ee(xe.catchLoc, !0);
        } else {
          if (!Me) throw Error("try statement without catch or finally");
          if (this.prev < xe.finallyLoc) return Ee(xe.finallyLoc);
        }
      }
    }
  }, abrupt: function(W, K) {
    for (var Ee = this.tryEntries.length - 1; 0 <= Ee; --Ee) {
      var He = this.tryEntries[Ee];
      if (He.tryLoc <= this.prev && E.call(He, "finallyLoc") && this.prev < He.finallyLoc) {
        var xe = He;
        break;
      }
    }
    var Ce = (xe = xe && (W === "break" || W === "continue") && xe.tryLoc <= K && K <= xe.finallyLoc ? null : xe) ? xe.completion : {};
    return Ce.type = W, Ce.arg = K, xe ? (this.method = "next", this.next = xe.finallyLoc, ie) : this.complete(Ce);
  }, complete: function(W, K) {
    if (W.type === "throw") throw W.arg;
    return W.type === "break" || W.type === "continue" ? this.next = W.arg : W.type === "return" ? (this.rval = this.arg = W.arg, this.method = "return", this.next = "end") : W.type === "normal" && K && (this.next = K), ie;
  }, finish: function(W) {
    for (var K = this.tryEntries.length - 1; 0 <= K; --K) {
      var Ee = this.tryEntries[K];
      if (Ee.finallyLoc === W) return this.complete(Ee.completion, Ee.afterLoc), Je(Ee), ie;
    }
  }, catch: function(W) {
    for (var K = this.tryEntries.length - 1; 0 <= K; --K) {
      var Ee, He, xe = this.tryEntries[K];
      if (xe.tryLoc === W) return (Ee = xe.completion).type === "throw" && (He = Ee.arg, Je(xe)), He;
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(W, K, Ee) {
    return this.delegate = { iterator: me(W), resultName: K, nextLoc: Ee }, this.method === "next" && (this.arg = p), ie;
  } }, h;
}
function D2(p, h) {
  return (D2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(m, E) {
    return m.__proto__ = E, m;
  })(p, h);
}
function d2(p, h) {
  return OO(p) || UO(p, h) || O2(p, h) || jO();
}
function by(p) {
  return LO(p) || AO(p) || O2(p) || zO();
}
function VO(p, h) {
  if (typeof p != "object" || !p) return p;
  var m = p[Symbol.toPrimitive];
  if (m === void 0) return (h === "string" ? String : Number)(p);
  if (m = m.call(p, h), typeof m != "object") return m;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
function Cy(p) {
  return p = VO(p, "string"), typeof p == "symbol" ? p : p + "";
}
function Gr(p) {
  return (Gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(h) {
    return typeof h;
  } : function(h) {
    return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h;
  })(p);
}
function O2(p, h) {
  var m;
  if (p) return typeof p == "string" ? qS(p, h) : (m = (m = {}.toString.call(p).slice(8, -1)) === "Object" && p.constructor ? p.constructor.name : m) === "Map" || m === "Set" ? Array.from(p) : m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m) ? qS(p, h) : void 0;
}
var L2 = { react: { componentWrap: "div", slotWrap: "div", componentWrapAttrs: { __use_react_component_wrap: "", style: { all: "unset" } }, slotWrapAttrs: { __use_react_slot_wrap: "", style: { all: "unset" } }, vueNamedSlotsKey: ["node:"] }, vue: { componentWrapHOC: function(p) {
  return function() {
    var h = (0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}).portals;
    return Tt.createElement(Tt.Fragment, null, p, (h === void 0 ? [] : h).map(function(m) {
      var E = m.Portal;
      return Tt.createElement(E, { key: m.key });
    }));
  };
}, componentWrapAttrs: { "data-use-vue-component-wrap": "", style: { all: "unset" } }, slotWrapAttrs: { "data-use-vue-slot-wrap": "", style: { all: "unset" } } } };
function N2() {
  var p = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : { react: {}, vue: {} }, m = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : L2, h = 2 < arguments.length ? arguments[2] : void 0, m = (p.vue || (p.vue = {}), p.react || (p.react = {}), [m, ue(ue({}, p), {}, { react: ue(ue(ue({}, m.react), p.react), {}, { componentWrapAttrs: ue(ue({}, m.react.componentWrapAttrs), p.react.componentWrapAttrs), slotWrapAttrs: ue(ue({}, m.react.slotWrapAttrs), p.react.slotWrapAttrs) }), vue: ue(ue(ue({}, m.vue), p.vue), {}, { componentWrapAttrs: ue(ue({}, m.vue.componentWrapAttrs), p.vue.componentWrapAttrs), slotWrapAttrs: ue(ue({}, m.vue.slotWrapAttrs), p.vue.slotWrapAttrs) }) })]);
  return h && m.unshift({}), Object.assign.apply(this, m);
}
var M2 = ["getElementById", "getElementsByClassName", "getElementsByTagName", "getElementsByTagNameNS", "querySelector", "querySelectorAll"], od = { Document: {}, Element: {} };
function HO(p) {
  Object.keys(od).forEach(function(h) {
    M2.forEach(function(m) {
      var E = od[h][m] || window[h].prototype[m];
      E && (od[h][m] = E, window[h].prototype[m] = function() {
        for (var x = arguments.length, b = new Array(x), y = 0; y < x; y++) b[y] = arguments[y];
        var N = E.apply(this, b);
        return N && (N.constructor !== NodeList || N.constructor === NodeList && 0 < N.length) ? N : ((N = m) === "getElementById" && (N = "querySelector", b = ["#" + b[0]]), (od.Element[N] || Element.prototype[N]).apply(p, b));
      });
    });
  });
}
function IO() {
  Object.keys(od).forEach(function(p) {
    M2.forEach(function(h) {
      window[p].prototype[h] = od[p][h];
    });
  });
}
var BO = ["ref"], $O = ["key"], WO = ["hashList"], QS = parseInt(r_.version);
var YO = (() => {
  function p(h) {
    return _v(this, p), Ey(this, p, [h]);
  }
  return Ry(p, Tt.Component), Cv(p, [{ key: "render", value: function() {
    var h = this.props.component, m = this.props.passedProps, m = (m.ref, $i(m, BO));
    return Tt.createElement(h, m, this.props.children);
  } }]);
})(), QO = function(p, h, m) {
  var E = (() => {
    function x(b) {
      var y;
      return _v(this, x), (y = Ey(this, x, [b])).state = ue(ue({}, b), h.isSlots ? { children: p } : {}), y.setRef = y.setRef.bind(y), y.vueInReactCall = y.vueInReactCall.bind(y), (y.__veauryVueWrapperRef__ = m).__veauryVueInReactCall__ = y.vueInReactCall, y;
    }
    return Ry(x, Tt.Component), Cv(x, [{ key: "reactPropsLinkToVueInstance", value: function(b) {
      Object.keys(b).forEach(function(y) {
        m[y] || (m[y] = b[y]);
      }), Object.getOwnPropertyNames(b.__proto__).filter(function(y) {
        return ["constructor", "render"].indexOf(y) < 0;
      }).forEach(function(y) {
        m[y] || (m[y] = b[y]);
      });
    } }, { key: "setRef", value: function(b) {
      var y = this;
      b && (m.__veauryReactRef__ = b, this.reactPropsLinkToVueInstance(b), Promise.resolve().then(function() {
        return y.reactPropsLinkToVueInstance(b);
      }), (this.setRef.current = b).__veauryVueWrapperRef__ = m);
    } }, { key: "createSlot", value: function(b) {
      return { originVNode: b, inheritAttrs: !1, __fromReactSlot: !0, render: function() {
        var y, N;
        return ((y = b = (b = ((N = this.$slots) == null || (y = N.default) == null ? void 0 : y.call(N)) || b) instanceof Function ? b(this) : b) == null ? void 0 : y.length) === 1 && (N = b[0]) != null && N.data && ((y = this.$attrs).key, N = $i(y, $O), b[0].props = ue(ue({}, N), b[0].props)), b;
      } };
    } }, { key: "componentWillUnmount", value: function() {
      m.__veauryReactRef__ && (m.__veauryReactRef__.__veauryVueWrapperRef__ = null, m.__veauryReactRef__ = null);
    } }, { key: "vueInReactCall", value: function(b) {
      var y = this, N = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
      return 2 < arguments.length && arguments[2] && b && b[0] ? b.map(function(k, T) {
        return _y(y.createSlot(k instanceof Function ? k : [k]), ue(ue(ue({}, h), N), {}, { isSlots: !0, wrapInstance: m })).render({ key: k?.key || void 0 });
      }) : _y(this.createSlot(b), ue(ue(ue({}, h), N), {}, { isSlots: !0, wrapInstance: m })).render();
    } }, { key: "render", value: function() {
      var b, y, N, k = this, ie = this.state, T = ie.hashList, z = $i(ie, WO), H = {}, q = {};
      for (b in z) y = b, N = void 0, z.hasOwnProperty(y) && z[y] != null && (z[y].__slot ? (z[y].reactSlot ? z[y] = z[y].reactSlot : (N = z[y], h.defaultSlotsFormatter && z[y].__trueChildren ? (z[y].__trueChildren.__top__ = k.__veauryVueWrapperRef__, z[y] = h.defaultSlotsFormatter(z[y].__trueChildren, k.vueInReactCall, T), z[y] instanceof Array ? z[y] = by(z[y]) : -1 < ["string", "number"].indexOf(Gr(z[y])) ? z[y] = [z[y]] : Gr(z[y]) === "object" && (z[y] = ue({}, z[y]))) : z[y] = ue({}, _y(k.createSlot(z[y]), ue(ue({}, h), {}, { isSlots: !0, wrapInstance: m })).render()), z[y].vueFunction = N), H[y] = z[y]) : z[y].__scopedSlot && (z[y] = z[y](k.createSlot), q[y] = z[y]));
      var G, pe, ie = {};
      return ie.ref = this.setRef, h.isSlots ? this.state.children || this.props.children : (G = z, p.__syncUpdateForPureReactInVue && Object.keys(p.__syncUpdateForPureReactInVue).map(function(ce) {
        var be, ge;
        G[ce] && typeof G[ce] == "function" && (be = k.__veauryVueWrapperRef__, ge = G[ce], G[ce] = function() {
          for (var _e = arguments.length, De = new Array(_e), ne = 0; ne < _e; ne++) De[ne] = arguments[ne];
          be.__veaurySyncUpdateProps__(p.__syncUpdateForPureReactInVue[ce].apply(this, De)), ge.apply(this, De), be.macroTaskUpdate = !0, be.__veauryMountReactComponent__(!0, !0, {});
        });
      }), pe = ue(ue(ue({}, G = h.defaultPropsFormatter ? h.defaultPropsFormatter.call(this, G, this.vueInReactCall, T) : G), H), q), Object.getPrototypeOf(p) !== Function.prototype && (Gr(p) !== "object" || p.render) || x.catchVueRefs() ? (Object.getPrototypeOf(p) === Function.prototype && delete ie.ref, Tt.createElement(p, gc({}, pe, ie))) : Tt.createElement(YO, gc({ passedProps: pe, component: p }, ie), pe.children));
    } }], [{ key: "catchVueRefs", value: function() {
      if (m.$parent) {
        for (var b in m.$parent.$refs) if (m.$parent.$refs[b] === m) return !0;
      }
      return !1;
    } }]);
  })();
  return ld(E, "displayName", "applyReact_".concat(p.displayName || p.name || "Component")), E;
};
function a_(p) {
  var h = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
  return p.__esModule && p.default && (p = p.default), h.isSlots && (p = p()), h = N2(h, void 0, !0), { originReactComponent: p, setup: function(m, E) {
    var x, b, y, N;
    if (!h.isSlots) return x = {}, b = wk({}), y = xk(), typeof (N = h.useInjectPropsFromWrapper || p.__veauryInjectPropsFromWrapper__) == "function" && (typeof (N = N.call(y.proxy, m)) != "function" ? (Object.assign(b, N), x.__veauryInjectedProps__ = b) : y.proxy.__veauryInjectedComputed__ = N), x;
  }, data: function() {
    return { VEAURY_Portals: [] };
  }, created: function() {
    this.__veauryPortalKeyPool__ = [], this.__veauryMaxPortalCount__ = 0;
  }, computed: { __veauryInjectedProps__: function() {
    var m;
    return (m = this.__veauryInjectedComputed__) == null ? void 0 : m.call(this);
  } }, render: function() {
    var m = nu(h.react.componentWrap, ue({ ref: "react" }, h.react.componentWrapAttrs || {}), this.VEAURY_Portals.map(function(E) {
      return (0, E.Portal)(nu, E.key);
    }));
    return this.__veauryCheckReactSlot__(this.$slots), m;
  }, methods: { __veauryCheckReactSlot__: function(m) {
    var E = this;
    function x(b, y, N) {
      return y[N] && (b[N] = y[N], 1);
    }
    Gr(m) === "object" && m != null && (m instanceof Array ? m.forEach(function(b) {
      E.__veauryCheckReactSlot__(b.children);
    }) : Object.keys(m).forEach(function(k) {
      var y, N, k = m[k];
      if (typeof k == "function") {
        try {
          y = k.apply(E, k.__reactArgs || [{}]);
        } catch {
          return;
        }
        (k.__trueChildren = y).forEach(function(T) {
          T.children && E.__veauryCheckReactSlot__(T.children);
        }), y.length !== 1 || x(k, y = y[0], "reactSlot") || x(k, y, "reactFunction") || y.type !== E2 || ((N = y.children) == null ? void 0 : N.length) !== 1 || x(k, N = y.children[0], "reactSlot") || x(k, N, "reactFunction");
      }
    }));
  }, __veauryPushVuePortal__: function(m) {
    var E = this.__veauryPortalKeyPool__.shift() || this.__veauryMaxPortalCount__++;
    this.VEAURY_Portals.push({ Portal: m, key: E });
  }, __veauryRemoveVuePortal__: function(m) {
    var E, x = this.VEAURY_Portals.find(function(b, y) {
      if (b.Portal === m) return E = y, !0;
    });
    this.__veauryPortalKeyPool__.push(x.key), this.VEAURY_Portals.splice(E, 1);
  }, __veauryGetScopeSlot__: function(m, E, x) {
    var b = this;
    function y(N) {
      function k() {
        for (var T, z = this, H = arguments.length, q = new Array(H), G = 0; G < H; G++) q[G] = arguments[G];
        return m.reactFunction ? m.reactFunction.apply(this, q) : h.defaultSlotsFormatter ? ((T = m.apply(this, q)).__top__ = b, (T = h.defaultSlotsFormatter(T, b.__veauryVueInReactCall__, E)) instanceof Array || -1 < Gr(T).indexOf("string", "number") ? T = by(T) : Gr(T) === "object" && (T = ue({}, T)), T) : _y(N(function() {
          return m.apply(z, q);
        }), ue(ue({}, h), {}, { isSlots: !0, wrapInstance: b })).render();
      }
      return h.pureTransformer && x ? k.vueFunction = x : k.vueFunction = m, k;
    }
    return y.__scopedSlot = !0, y;
  }, __veaurySyncUpdateProps__: function(m) {
    this.__veauryReactInstance__ && this.__veauryReactInstance__.setState(m);
  }, __veauryMountReactComponent__: function(m, E) {
    var x = arguments, b = this;
    return MO(id().mark(function y() {
      var N, k, T, z, H, q, G, pe, ie, ce, be, ge, _e, De, ne, Be, Oe;
      return id().wrap(function(Qe) {
        for (; ; ) switch (Qe.prev = Qe.next) {
          case 0:
            if (N = 2 < x.length && x[2] !== void 0 ? x[2] : {}, k = {}, T = [], (pe = b.$.vnode.scopeId) && (k[pe] = "", T.push(pe)), z = {}, H = {}, m && (E == null || !E.slot)) {
              Qe.next = 18;
              break;
            }
            G = id().mark(function Je(nt) {
              var me;
              return id().wrap(function(W) {
                for (; ; ) switch (W.prev = W.next) {
                  case 0:
                    if (b.$slots.hasOwnProperty(nt) && b.$slots[nt] != null) {
                      W.next = 2;
                      break;
                    }
                    return W.abrupt("return", 0);
                  case 2:
                    if ((me = h.react.vueNamedSlotsKey.find(function(K) {
                      return nt.indexOf(K) === 0;
                    })) || nt === "default") return me = nt.replace(new RegExp("^".concat(me)), ""), z[me] = b.$slots[nt], z[me].__slot = !0, W.abrupt("return", 0);
                    W.next = 8;
                    break;
                  case 8:
                    H[nt] = b.__veauryGetScopeSlot__(b.$slots[nt], T, (me = b.$.vnode) == null || (me = me.children) == null ? void 0 : me[nt]);
                  case 9:
                  case "end":
                    return W.stop();
                }
              }, Je);
            }), Qe.t0 = id().keys(b.$slots || {});
          case 10:
            if ((Qe.t1 = Qe.t0()).done) {
              Qe.next = 18;
              break;
            }
            return pe = Qe.t1.value, Qe.delegateYield(G(pe), "t2", 13);
          case 13:
            if (Qe.t2 === 0) return Qe.abrupt("continue", 10);
            Qe.next = 16;
            break;
          case 16:
            Qe.next = 10;
            break;
          case 18:
            if ((!m || E != null && E.slot) && (ie = ue({}, z), q = ie.default, delete ie.default), b.__veauryLast__ = b.__veauryLast__ || {}, b.__veauryLast__.slot = b.__veauryLast__.slot || {}, b.__veauryLast__.attrs = b.__veauryLast__.attrs || {}, ce = { slot: function() {
              b.__veauryLast__.slot = ue(ue(ue({}, q ? { children: q } : { children: null }), ie), H);
            }, attrs: function() {
              b.__veauryLast__.attrs = b.$attrs;
            } }, E && Object.keys(E).forEach(function(Je) {
              return ce[Je]();
            }), m) {
              Qe.next = 64;
              break;
            }
            if (b.__reactBoundedPromise__ = new Promise(function(Je) {
              be = Je;
            }), b.__reactBoundedPromise__.resolve = be, ce.slot(), ce.attrs(), De = QO(p, h, b), ge = Tt.createElement(De, gc({}, b.$attrs, b.__veauryInjectedProps__, { children: q }, ie, H, b.$attrs.class ? { className: b.$attrs.class } : {}, k, { hashList: T }, b.$attrs.style ? { style: b.$attrs.style } : {}, { ref: function(Je) {
              b.__veauryReactInstance__ = Je, b.__reactBoundedPromise__.resolve(!0);
            } })), _e = b.$refs.react, De = h.wrapInstance) {
              Qe.next = 47;
              break;
            }
            ne = b.$parent;
          case 35:
            if (ne) {
              if (ne.parentReactWrapperRef) return De = ne.parentReactWrapperRef, Qe.abrupt("break", 45);
              Qe.next = 39;
            } else Qe.next = 45;
            break;
          case 39:
            if (ne.reactWrapperRef) return De = ne.reactWrapperRef, Qe.abrupt("break", 45);
            Qe.next = 42;
            break;
          case 42:
            ne = ne.$parent, Qe.next = 35;
            break;
          case 45:
            Qe.next = 49;
            break;
          case 47:
            (De = h.wrapInstance).__veauryVueWrapperRef__ = b;
          case 49:
            if (De) return b.parentReactWrapperRef = De, b.reactPortal = function() {
              return r_.createPortal(ge, _e);
            }, De.pushReactPortal(b.reactPortal), Qe.abrupt("return");
            Qe.next = 54;
            break;
          case 54:
            if (17 < QS) return hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED !== void 0 && (hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = !0), Be = h.react.createRoot || hv.createRoot, 18 < QS && !Be && console.warn("'react-dom 19' no longer supports dynamically determining whether to use 'render' or 'createRoot'. In order to be compatible with 'react-dom 17' and previous versions, you need to manually configure 'createRoot' in the veaury configuration."), b.__veauryReactApp__ = Be(_e), b.__veauryReactApp__.render(ge), Qe.abrupt("return");
            Qe.next = 61;
            break;
          case 61:
            hv.render(ge, _e), Qe.next = 71;
            break;
          case 64:
            return Qe.next = 66, b.__reactBoundedPromise__;
          case 66:
            Oe = function() {
              b.__veauryReactInstance__.setState(function(Je) {
                return Object.keys(Je).forEach(function(nt) {
                  h.isSlots && nt === "children" || delete Je[nt];
                }), ue(ue(ue(ue({}, b.__veauryCache__), b.__veauryInjectedProps__), !h.isSlots && b.__veauryLast__.slot), b.__veauryLast__.attrs);
              }), b.__veauryCache__ = null;
            }, !b.microTaskUpdate || b.__veauryCache__ || b.$nextTick(function() {
              Oe(), b.microTaskUpdate = !1;
            }), b.macroTaskUpdate && (clearTimeout(b.updateTimer), b.updateTimer = setTimeout(function() {
              clearTimeout(b.updateTimer), Oe(), b.macroTaskUpdate = !1;
            })), b.__veauryCache__ = ue(ue({}, b.__veauryCache__ || {}), ue(ue(ue(ue({}, N), b.$attrs.class ? { className: b.$attrs.class } : {}), ue({}, k)), {}, { hashList: T }, b.$attrs.style ? { style: b.$attrs.style } : {})), b.macroTaskUpdate || b.microTaskUpdate || Oe();
          case 71:
          case "end":
            return Qe.stop();
        }
      }, y);
    }))();
  } }, mounted: function() {
    var m = this;
    this.__VEAURY_IGNORE_STRANGE_UPDATE__ = !0, Promise.resolve().then(function() {
      m.__VEAURY_IGNORE_STRANGE_UPDATE__ = !1;
    }), clearTimeout(this.updateTimer), this.__veauryMountReactComponent__();
  }, beforeUnmount: function() {
    var m;
    clearTimeout(this.updateTimer), HO(this.$refs.react), this.reactPortal ? (m = this.parentReactWrapperRef) != null && m.removeReactPortal(this.reactPortal) : 17 < QS ? (m = this.__veauryReactApp__) != null && m.unmount() : hv.unmountComponentAtNode(this.$refs.react), IO();
  }, updated: function() {
    this.__VEAURY_IGNORE_STRANGE_UPDATE__ || this.__veauryMountReactComponent__(!0, { slot: !0 });
  }, inheritAttrs: !1, watch: { $attrs: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 }, __veauryInjectedProps__: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 } } };
}
var GO = /* @__PURE__ */ new Set(["onClick", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onChange", "onInput", "onInvalid", "onReset", "onSubmit", "onError", "onLoad", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onGotPointerCapture", "onLostPointerCapture", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onSelect", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onScroll", "onWheel", "onAbort", "onCanPlay", "onCanPlayThrough", "onDurationChange", "onEmptied", "onEncrypted", "onEnded", "onError", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onPause", "onPlay", "onPlaying", "onProgress", "onRateChange", "onSeeked", "onSeeking", "onStalled", "onSuspend", "onTimeUpdate", "onVolumeChange", "onWaiting", "onLoad", "onError", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionEnd", "onToggle"]);
function qO(p, h) {
  for (var m = (p = h = p?._reactInternals || p?._reactInternalFiber || h) == null ? void 0 : p.return; m; ) {
    var E = m.stateNode;
    if (E = E?.parentVueWrapperRef || E?.__veauryVueWrapperRef__) return E;
    m = m.return;
  }
}
function p2(p, h, m) {
  var E = {};
  return m.forEach(function(x) {
    E[x] = !0;
  }), p[(h === "modelValue" ? "model" : h) + "Modifiers"] = E;
}
function v2(p, h, m) {
  var E = this, x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : "v-model";
  if (!(h instanceof Array)) throw Error("[error:veaury] Parameter type error from '".concat(x, "', a single v-model is an array, such as [val, setter, argumentKey, modifiers] or [val, setter, modifiers]"));
  if (typeof h[1] != "function") throw Error("[error:veaury] Parameter type error from '".concat(x, "', a single v-model is an array, the second element of the array must be a setter function"));
  var b = h[1], y = (typeof h[2] == "string" ? (m = h[2], h[3] instanceof Array && p2(p, m, h[3])) : h[2] instanceof Array && p2(p, m, h[2]), p["onUpdate:" + m]);
  p["onUpdate:" + m] = typeof y == "function" ? function() {
    for (var N = arguments.length, k = new Array(N), T = 0; T < N; T++) k[T] = arguments[T];
    y.apply(E, k), b.apply(E, k);
  } : b, p[m] = h[0];
}
function XS(p) {
  var h = this, m = {}, E = ue({}, p);
  return Object.keys(p).forEach(function(x) {
    var b, y = x.match(/^onUpdate-([^-]+)/);
    if (y) delete E[x], b = m["onUpdate:".concat(y[1])], m["onUpdate:".concat(y[1])] = typeof b == "function" ? function() {
      for (var k = arguments.length, T = new Array(k), z = 0; z < k; z++) T[z] = arguments[z];
      b.apply(h, T), p[x].apply(h, T);
    } : p[x];
    else if (y = x.match(/^v-model($|:([^:]+)|-([^:]+))/)) y = y[2] || y[3] || "modelValue", v2(m, p[x], y), delete E[x];
    else if (x === "v-models") {
      if (Gr(p[x]) !== "object" || p[x] instanceof Array) throw Error("[error:veaury] The parameter 'v-models' must be an object type, such as {[argumentKey]: singleVModel}");
      var N = p[x];
      Object.keys(N).forEach(function(k) {
        v2(m, N[k], k, "v-models");
      }), delete E[x];
    }
  }), ue(ue({}, E), m);
}
var Ty = Cv(function p() {
  _v(this, p), ld(this, "pool", /* @__PURE__ */ new Set());
}, [{ key: "getRandomId", value: function(p) {
  var h = p + (Math.random() + "").substr(2);
  return this.pool.has(h) ? this.getRandomId(p) : (this.pool.add(h), h);
} }]);
function A2(E, h) {
  var m, E = E.node;
  if (typeof E == "function" && (E = E()), (m = h) != null && m.current || typeof h == "function" || (m = h) != null && m.toString().match(/^function/) || (h = null), -1 < ["string", "number"].indexOf(Gr(E))) return E;
  if (E instanceof Array) {
    if (E.length !== 1) return E;
    E = E[0];
  }
  return ue(ue({}, E), {}, { ref: h });
}
var KO = a_(A2);
function JS(p) {
  return nu(KO, { node: function() {
    return p.node;
  } });
}
JS.originReactComponent = Tt.forwardRef(A2);
var XO = ["component", "node"], JO = ["component", "$slots", "children", "class", "style"], ZO = ["className", "classname"], yc = "veaury-options", h2 = new Ty();
function e3(p, h) {
  var m;
  return p = typeof p == "string" && h ? (h = h.$) == null || (h = h.appContext) == null || (h = h.app) == null || (m = h.component) == null ? void 0 : m.call(h, p) : p;
}
function m2(p) {
  if (p) return Object.keys(p).forEach(function(h) {
    var m = p[h];
    m != null && (typeof m == "function" ? (p[h] = m, p[h].reactFunction = m) : (p[h] = function() {
      return m;
    }, p[h].reactSlot = m), m.vueFunction) && (p[h].vueFunction = m.vueFunction);
  }), p;
}
function t3(p) {
  var h;
  return (h = p.node) == null ? void 0 : h.call(p);
}
var ZS = Tt.forwardRef(function(x, h) {
  var m, y = x.component, E = x.node, x = $i(x, XO);
  if (y == null && E == null) return null;
  if (E != null) {
    if (E.$$typeof || typeof E == "string" || typeof E == "number") return E;
    typeof E != "function" && (m = E, E = function() {
      return m;
    });
  }
  var b, y = y || t3, N = N2(x[yc] || {}, void 0, !0), k = N.useInjectPropsFromWrapper || y.__veauryInjectPropsFromWrapper__;
  return N.isSlots || typeof k == "function" && (b = k(x)), Tt.createElement(n3, gc({}, ue(ue(ue(ue({ component: y }, E ? { node: E } : {}), x), b), {}, ld({}, yc, N)), { ref: h }));
}), n3 = (() => {
  function p(h) {
    var m;
    return _v(this, p), (m = Ey(this, p, [h])).state = { portals: [] }, m.__veauryPortalKeyPool__ = [], m.__veauryMaxPortalCount__ = 0, m.__veauryCurrentVueComponent__ = h.component, m.__veauryCreateVueInstance__ = m.__veauryCreateVueInstance__.bind(m), m.__veauryVueComponentContainer__ = m.createVueComponentContainer(), m;
  }
  return Ry(p, Tt.Component), Cv(p, [{ key: "pushReactPortal", value: function(h) {
    var m = this.state.portals, E = this.__veauryPortalKeyPool__.shift() || this.__veauryMaxPortalCount__++;
    m.push({ Portal: h, key: E }), this.setState({ portals: m });
  } }, { key: "removeReactPortal", value: function(h) {
    var m, E = this.state.portals, x = E.find(function(b, y) {
      if (b.Portal === h) return m = y, !0;
    });
    this.__veauryPortalKeyPool__.push(x.key), E.splice(m, 1), this.__veauryVueRef__ && this.setState({ portals: E });
  } }, { key: "createVueComponentContainer", value: function() {
    var h = this, m = {}, E = this.props[yc];
    return E.isSlots ? (Object.keys(this.props).forEach(function(x) {
      GO.has(x) && typeof h.props[x] == "function" && (m[x] = h.props[x]);
    }), E.vue.slotWrapAttrs && (m = ue(ue({}, m), E.vue.slotWrapAttrs))) : E.vue.componentWrapAttrs && (m = ue(ue({}, m), E.vue.componentWrapAttrs)), E.vue.componentWrapHOC(Tt.createElement("div", gc({}, E.vue.componentWrapAttrs, { ref: this.__veauryCreateVueInstance__, key: null })), m);
  } }, { key: "shouldComponentUpdate", value: function(h, m, E) {
    var x, b, y, N, k = this;
    return h === this.props || (x = h.component, b = (b = h["v-slots"]) === void 0 ? null : b, y = h.children, h = $i(h, ["component", yc, "v-slots", "children"].map(Cy)), this.__veauryCurrentVueComponent__ !== x && this.updateVueComponent(x), x.__fromReactSlot) || this.__veauryVueInstance__ && (y && (b = b || {}, Gr(y) !== "object" || y instanceof Array || y.$$typeof ? b.default = y : b = y), (N = this.__veauryVueInstance__.$data.$slots) && Object.keys(N).forEach(function(T) {
      delete N[T];
    }), b && (N || (this.__veauryVueInstance__.$data.$slots = {}), Object.assign(this.__veauryVueInstance__.$data.$slots, m2(b))), Object.keys(this.__veauryVueInstance__.$data).forEach(function(T) {
      T !== "$slots" && delete k.__veauryVueInstance__.$data[T];
    }), this.__veauryVueInstance__) && Object.assign(this.__veauryVueInstance__.$data, XS(h)), !0;
  } }, { key: "componentWillUnmount", value: function() {
    this.vuePortal ? this.parentVueWrapperRef.__veauryRemoveVuePortal__(this.vuePortal) : (this.__veauryVueInstance__ && this.__veauryVueInstance__.$.appContext.app.unmount(), h2.pool.delete(this.__veauryVueTargetId__), this.vueCreated = !1);
  } }, { key: "componentDidMount", value: function() {
    this.__veauryCreateVueInstance__(this.vueContainerElement);
  } }, { key: "__veauryCreateVueInstance__", value: function(h) {
    var m, E, x, b, y, N, k, T, z = this;
    function H(q) {
      this.__veauryVueInstance__ || (this.__veauryVueInstance__ = q);
    }
    this.vueCreated || (this.vueCreated = !0, (m = this).vueContainerElement = h, (x = this.props).component, E = x[yc], k = x.children, T = (T = x["v-slots"]) === void 0 ? {} : T, x = $i(x, ["component", yc, "children", "v-slots"].map(Cy)), k && (Gr(k) !== "object" || k instanceof Array || k.$$typeof ? T.default = k : T = k), (T = m2(T)) && (x.$slots = T), H = H.bind(this), b = ue({}, XS(x)), y = { data: function() {
      return E.isSlots ? { children: m.__veauryCurrentVueComponent__.originVNode } : b;
    }, created: function() {
      this.reactWrapperRef = m, H(this);
    }, methods: { reactInVueCall: function(q) {
      return 2 < arguments.length && arguments[2] && q && q[0] ? q.map(function(G, pe) {
        return nu(JS, { node: G, key: (G == null || (G = G.data) == null ? void 0 : G.key) || pe });
      }) : nu(JS, { node: q });
    }, getScopedSlots: function(q, G) {
      var pe, ie = this, ce = (this.getScopedSlots.__scopeSlots || (this.getScopedSlots.__scopeSlots = {}), ue({}, G));
      for (pe in ce) ((be) => {
        var ge, _e;
        !ce.hasOwnProperty(be) || (ge = ce[be]) == null || (ce[be] = (_e = ge, function() {
          for (var De, ne, Be, Oe, Qe = arguments.length, Je = new Array(Qe), nt = 0; nt < Qe; nt++) Je[nt] = arguments[nt];
          return _e.vueFunction ? _e.vueFunction.apply(ie, Je) : (Be = _e.reactFunction, Be = _e.reactSlot || Be?.apply(ie, Je), Oe = E.defaultSlotsFormatter, (De = ie.getScopedSlots.__scopeSlots[be]) != null && (De = De.component) != null && (De = De.ctx) != null && De.__veauryReactInstance__ ? (ne = ie.getScopedSlots.__scopeSlots[be], Promise.resolve().then(function() {
            var me;
            (me = ne) != null && (me = me.component) != null && (me = me.ctx) != null && (me = me.__veauryReactInstance__) != null && me.setState({ children: _e.apply(ie, Je) });
          })) : (ne = Oe && Be ? [Oe(Be, ie.reactInVueCall)] : q(a_(function() {
            return _e.apply(ie, Je);
          }, ue(ue({}, E), {}, { isSlots: !0, wrapInstance: m }))), ie.getScopedSlots.__scopeSlots[be] = ne), _e.reactFunction ? ne.reactFunction = _e.reactFunction : _e.reactSlot && (ne.reactSlot = _e.reactSlot), ne);
        }), ce[be].reactFunction = ge);
      })(pe);
      return ce;
    } }, mounted: function() {
      h.removeAttribute("id"), m.__veauryVueRef__ = this.$refs.use_vue_wrapper, this.$refs.use_vue_wrapper.reactWrapperRef = m;
    }, beforeUnmount: function() {
      m.__veauryVueRef__ = null, this.$refs.use_vue_wrapper.reactWrapperRef = null;
    }, render: function() {
      var q = this, ge = this.$data, ce = (ge.component, ge.$slots), G = ge.class, pe = ge.style, ge = $i(ge, JO), ie = this.getScopedSlots(nu, ue({}, ce)), ce = ge.className, be = ge.classname, ge = $i(ge, ZO), _e = {};
      return Object.keys(ie).forEach(function(De) {
        var ne = ie[De];
        _e[De] = typeof ne == "function" ? ne : function() {
          return ne;
        };
      }), nu(e3(m.__veauryCurrentVueComponent__, this), ue(ue(ue(ue({}, ge), G || ce || be ? { class: G || ce || be } : {}), pe ? { style: pe } : {}), {}, { ref: "use_vue_wrapper" }), ue({}, E.isSlots && this.children ? { default: typeof this.children == "function" ? this.children : function() {
        return q.children;
      } } : ue({}, _e)));
    } }, h && (N = h2.getRandomId("__vue_wrapper_container_"), h.id = N, this.__veauryVueTargetId__ = N, (k = E.wrapInstance) ? (k = E.wrapInstance).reactWrapperRef = m : k = qO(this), k && document.getElementById(N) ? (this.parentVueWrapperRef = k, this.vuePortal = function(q, G) {
      return q(kk, { to: "#" + N, key: N }, [q(Object.assign(y, { router: z._router }))]);
    }, k.__veauryPushVuePortal__(this.vuePortal)) : (T = Dk(y), typeof E.beforeVueAppMount == "function" && E.beforeVueAppMount(T), this.__veauryVueInstance__ = T.mount(h))));
  } }, { key: "updateVueComponent", value: function(h) {
    this.__veauryVueInstance__ && (h.__fromReactSlot ? this.__veauryVueInstance__.children = typeof h.originVNode == "function" ? h.originVNode : function() {
      return h.originVNode;
    } : (this.__veauryCurrentVueComponent__ = h, this.__veauryVueInstance__.$forceUpdate()));
  } }, { key: "render", value: function() {
    return Tt.createElement(this.__veauryVueComponentContainer__, { portals: this.state.portals });
  } }]);
})();
function _y(p) {
  var h = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, m = (p || console.warn("Component must be passed in applyVueInReact!"), p.__esModule && p.default && (p = p.default), Tt.forwardRef(function(E, x) {
    return Tt.createElement(ZS, gc({}, E, { component: p, ref: x }, ld({}, yc, h)));
  }));
  return m.originVueComponent = p, m;
}
new Ty();
function r3(p) {
  var h = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, m = h.globalName, E = a_(p, h.combinedOption || {});
  return E.install = function(x) {
    var b = (1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}).globalName;
    return m && x.component(b || m, E), E;
  }, E;
}
function y2(p) {
  return p.replace(/-(\w)/g, function(h, m) {
    return m.toUpperCase();
  });
}
function wy(p) {
  var h;
  return p ? typeof p == "string" ? (p = p.trim()).split(/\s*;\s*/).reduce(function(m, E) {
    return E && (E = E.split(/\s*:\s*/)).length === 2 && Object.assign(m, ld({}, y2(E[0]), E[1])), m;
  }, {}) : Gr(p) === "object" ? (h = {}, Object.keys(p).forEach(function(m) {
    h[y2(m)] = p[m];
  }), h) : {} : {};
}
function xy(p) {
  return p ? p instanceof Array ? p : typeof p == "string" ? (p = p.trim()).split(/\s+/) : Gr(p) === "object" ? Object.keys(p).filter(function(h) {
    return !!p[h];
  }) : [] : [];
}
var a3 = ["ref"];
function i3(p, h, m, E, x) {
  var b = p.props || {}, b = (b.ref, $i(b, a3)), y = {}, N = (Object.keys(p.children || {}).forEach(function(z) {
    var H = p.children[z], q = L2.react.vueNamedSlotsKey.find(function(G) {
      return z.indexOf(G) === 0;
    });
    q || z === "default" ? (q = z.replace(new RegExp("^".concat(q)), "").replace(/^default$/, "children"), y[q] = E.call(p.__top__, H(), m, x)) : typeof H == "function" && (y[z] = function() {
      for (var G = arguments.length, pe = new Array(G), ie = 0; ie < G; ie++) pe[ie] = arguments[ie];
      return H.__reactArgs = pe, E(H.apply(this, pe), m, x);
    });
  }), {}), k = wy(b.style), T = Array.from(new Set(xy(b.class))).join(" ");
  return 0 < Object.keys(k).length && (N.style = k), T !== "" && (N.className = T), Object.assign(b, ue(ue({}, N), y)), delete b.class, typeof b.ref_for == "boolean" && delete b.ref_for, b;
}
function g2(p) {
  return p.type === Lk;
}
new Ty();
function U2(p, h) {
  var m;
  return 0 < ((m = p.dirs) == null ? void 0 : m.length) ? Tt.createElement(o3, { vnode: p }, h) : h;
}
var o3 = (() => {
  function p(h) {
    var m;
    return _v(this, p), (m = Ey(this, p, [h])).state = { prevVnode: null, savedDirectives: [], ref: null, prevProps: h }, m;
  }
  return Ry(p, Tt.Component), Cv(p, [{ key: "findDirectiveName", value: function(h) {
    var m = h.dir, E = -1;
    return [this.state.savedDirectives.find(function(x, b) {
      if (x.dir === m) return E = b, !0;
    }), E];
  } }, { key: "doDirective", value: function() {
    var h = this, b = this.state, m = b.savedDirectives;
    if (!(E = b.ref)) {
      for (var E = (this._reactInternals || this._reactInternalFiber).child; E && E.tag !== 5; ) E = E.child;
      if (!E) return;
      E = E.stateNode;
    }
    var x = this.props.vnode, b = x.dirs;
    b && (b.forEach(function(y) {
      var N, k, T, z, H, q, G;
      y && (G = (N = d2(h.findDirectiveName(y), 2))[0], N = N[1], k = (H = y.dir).created, T = H.beforeMount, z = H.mounted, q = H.beforeUpdate, H = H.updated, G ? (m[N] = ue(ue(ue({}, G), y), {}, { oldValue: G.oldValue }), G = [E, m[N], x, h.state.prevVnode], q?.apply(null, G), H?.apply(null, G), m[N].oldValue = y.value) : (m.push(y), q = [E, y, x, null], k?.apply(null, q), T?.apply(null, q), z?.apply(null, q), y.oldValue = y.value));
    }), this.setState({ prevVnode: ue({}, x), savedDirectives: m, ref: E }));
  } }, { key: "componentDidMount", value: function() {
    this.doDirective();
  } }, { key: "componentDidUpdate", value: function(h) {
    h.vnode !== this.props.vnode && this.doDirective();
  } }, { key: "componentWillUnmount", value: function() {
    var h = this, m = this.props.vnode, y = this.state, E = y.savedDirectives, x = y.ref, b = y.prevVnode, y = m.dirs;
    y && (y.forEach(function(N) {
      var k, T, z, H;
      N && (k = (H = d2(h.findDirectiveName(N), 2))[0]) && (T = (z = N.dir).beforeUnmount, z = z.unmounted, E[H[1]] = ue(ue({}, k), N), H = [x, k, m, b], T?.apply(null, H), z != null) && z.apply(null, H);
    }), this.setState({ prevVnode: ue({}, m), savedDirectives: E }));
  } }, { key: "render", value: function() {
    var h = this.props;
    return h.vnode, h.children;
  } }]);
})();
function l3(p, h) {
  var m;
  return typeof p == "function" && (m = p.toString(), p.prototype !== void 0) && p.prototype.constructor === p && (m.slice(0, 5) == "class" || 2 <= Object.getOwnPropertyNames(p.prototype).length || !/^function\s+\(|^function\s+anonymous\(/.test(m) && (!(!h || !/^function\s+[A-Z]/.test(m)) || !!/\b\(this\b|\bthis[\.\[]\b/.test(m) && (!(h && !/classCallCheck\(this/.test(m)) || /^function\sdefault_\d+\s*\(/.test(m))));
}
function j2(p, h) {
  var m, E, x, b;
  return typeof ((x = p.type) == null ? void 0 : x.originReactComponent) != "function" || l3((x = p.type) == null ? void 0 : x.originReactComponent) ? ((x = p.ref) != null && x.k ? (m = (x = p.ref) == null ? void 0 : x.k, E = (x = p.ref) == null ? void 0 : x.r) : m = (x = p.ref) == null ? void 0 : x.r, m && typeof m == "string" && (b = m, m = function(y) {
    var N;
    (N = p.ref) != null && (N = N.i) != null && N.refs && ((N = ue({}, p.ref.i.refs))[b] = y, p.ref.i.refs = N), E ? E.value = y : p.ref.i.setupState && b in p.ref.i.setupState && (p.ref.i.setupState[b] = y), y && (y.__syncUpdateProps = function() {
      h.__top__ && (p.__extraData = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, h.__top__.__syncUpdateProps({}));
    });
  }, m = new Proxy(m, { get: function(y, N) {
    return y[N];
  }, set: function(y, N, k) {
    var T;
    return (T = p.ref) != null && (T = T.i) != null && T.refs && b in ((T = p.ref) == null || (T = T.i) == null ? void 0 : T.refs) && ((T = ue({}, p.ref.i.refs))[N] = k, p.ref.i.refs = T), k;
  } })), m) : null;
}
function e_(p, h) {
  return !h || h instanceof Array && h.length === 0 || (typeof h == "string" && (h = [h]), (p = ue({}, p)).props = ue({}, p.props), h.forEach(function(m) {
    p.props[m] = "";
  })), p;
}
var u3 = ["style", "class"];
function S2(p, h, m, E, x, b, y) {
  var N, k, T;
  return h === "all" || h instanceof Array || (h = h ? [h] : []), p.type === E2 ? x.call(y, p.children, m, b) : typeof p.type == "string" && (h === "all" || -1 < h.indexOf(p.type)) ? (h = j2(p), T = (k = p.props || {}).style, N = k.class, k = ue(ue({}, $i(k, u3)), {}, { style: wy(T), className: Array.from(new Set(xy(N))).join(" ") }, h ? { ref: h } : {}), (T = p.children || k.children) && ((T = -1 < ["string", "number"].indexOf(Gr(T)) ? [T] : by(T)).__top__ = y), U2(p, e_(ru.createElement(p.type, k, x.call(y, T, m, b)), p.scopeId))) : m([p], null, E);
}
function s3() {
  var p = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, h = 1 < arguments.length ? arguments[1] : void 0, m = 2 < arguments.length ? arguments[2] : void 0;
  return m.__syncUpdateForPureReactInVue && Object.keys(m.__syncUpdateForPureReactInVue).map(function(E) {
    var x;
    p[E] && typeof p[E] == "function" && h.__top__ && (x = p[E], p[E] = function() {
      for (var b = arguments.length, y = new Array(b), N = 0; N < b; N++) y[N] = arguments[N];
      h.__extraData = m.__syncUpdateForPureReactInVue[E].apply(this, y), h.__top__.__veaurySyncUpdateProps__({}), h.__top__.macroTaskUpdate = !0, x.apply(this, y), h.__top__ && Promise.resolve().then(function() {
        h.__extraData = null, h.__top__.__veauryMountReactComponent__(!0);
      });
    });
  }), p;
}
function _2(p, h, m) {
  return !((p = p instanceof Array && p.length === 1 ? p[0] : p) instanceof Array) && p.key == null && 1 < h.length && ((p = ue({}, p)).key = "_key_".concat(m)), p;
}
function z2(E) {
  var h = E.reactComponents, m = E.domTags, E = E.division, x = E === void 0 || E;
  return function b(y, N, k) {
    var T;
    return y && y.forEach ? (y.__top__ || (y.__top__ = this), T = [], y.forEach(function(z, H) {
      if (z && z.type !== Ok) {
        if ((pe = z.type) == null || !pe.originReactComponent) return z.$$typeof || typeof z == "string" || typeof z == "number" ? void T.push(z) : g2(z) ? void (z.children.trim() !== "" && T.push(z.children.trim())) : void (z.type && (e_(pe = _2(S2(z, m, N, x, b, k, y.__top__), y, H), z.scopeId), T.push(pe)));
        var q, G, pe = z.type.originReactComponent;
        e_(q = _2(q = (h = h === "all" || h instanceof Array ? h : [h]) === "all" || -1 < h.indexOf(pe) ? (z.__top__ = y.__top__, q = i3(z, "_key_".concat(H), N, b, k), G = j2(z, y), z.children && (z.children.__top__ = y.__top__), U2(z, ru.createElement(pe, ue(ue(ue({}, s3(q, z, pe)), z.__extraData || {}), G ? { ref: G } : {})))) : g2(z) ? z.text : S2(z, m, N, x, b, k), y, H), z.scopeId), T.push(q);
      }
    }), T.length === 1 ? T[0] : T) : y;
  };
}
var GS = z2({ reactComponents: "all", domTags: "all" });
function c3(p, h) {
  return r3(p, { combinedOption: ue({ pureTransformer: !0, defaultSlotsFormatter: GS, defaultPropsFormatter: function(m, E, x) {
    var b = {};
    return Object.keys(m).forEach(function(y) {
      var N = m[y];
      N && (N.vueFunction ? (b[y] = function() {
        for (var k = arguments.length, T = new Array(k), z = 0; z < k; z++) T[z] = arguments[z];
        return GS(N.vueFunction.apply(this, T), E, x);
      }, Object.defineProperty(b[y], "length", { get: function() {
        return N.vueFunction.length;
      } })) : N.vueSlot && (b[y] = GS(N.vueSlot, E, x)));
    }), Object.assign(m, b);
  } }, h) });
}
z2({ reactComponents: "all", domTags: "all" });
var f3 = ["ref", "children", "v-slots"];
function d3(k, h, m, E, x) {
  var k = k.props || {}, T = (k.ref, k.children), y = k["v-slots"], b = y === void 0 ? {} : y, y = $i(k, f3), N = (T && (Gr(T) !== "object" || T instanceof Array || T.$$typeof ? b.default = T : b = T), null), k = (Object.keys(b || {}).forEach(function(H) {
    var q = b[H];
    (N = N || {})[H] = function() {
      if (typeof q == "function") {
        for (var G = arguments.length, pe = new Array(G), ie = 0; ie < G; ie++) pe[ie] = arguments[ie];
        q = q.apply(this, pe);
      }
      return E(q, m, x);
    };
  }), {}), T = wy(y.style), z = Array.from(new Set(xy(y.className))).join(" ");
  return 0 < Object.keys(T).length && (k.style = T), z !== "" && (k.class = z), Object.assign(y, ue({}, k)), delete y.className, { props: y = XS(y), slots: N };
}
function P2(p) {
  var h = p.ref;
  if (h) return Gr(h) === "object" ? function(m) {
    p.ref.current = m;
  } : typeof h == "function" ? h : void 0;
}
var p3 = ["style", "class", "children"];
function C2(p, h, m, E, x, b) {
  var y, N, k, T;
  return h === "all" || h instanceof Array || (h = h ? [h] : []), p.type === Tt.Fragment ? x((y = p.props) == null ? void 0 : y.children, m) : typeof p.type == "string" && (h === "all" || -1 < h.indexOf(p.type)) ? (y = P2(p), T = (h = p.props || {}).style, k = h.class, N = h.children, h = $i(h, p3), k = Array.from(new Set(xy(k))).join(" "), T = wy(T), h = ue(ue(ue(ue({}, h), Object.keys(T).length === 0 ? {} : { style: T }), k ? { className: k } : {}), y ? { ref: y } : {}), Object.keys(h).length === 0 && (h = null), (T = N) && ((T = -1 < ["string", "number"].indexOf(Gr(T)) ? [T] : T instanceof Array ? by(T) : ue({}, T)).__top__ = b), nu(p.type, h, x(T, m))) : m([p], null, E);
}
function F2(E) {
  var h = E.vueComponents, m = E.domTags, E = E.division, x = E === void 0 || E;
  return function b(y, N) {
    if (y == null) return y;
    y instanceof Array || (y = [y]);
    var k = [];
    return y.forEach(function(T, z) {
      if (((H = T.type) == null || !H.originVueComponent) && T.type !== ZS) return T.__v_isVNode || typeof T == "string" || typeof T == "number" ? void k.push(T) : void (T.type && (H = C2(T, m, N, x, b, y.__top__), k.push(H)));
      var H = T.type.originVueComponent;
      if (T.type === ZS) {
        if (!T.props.component) return void k.push(T.props.node);
        H = T.props.component, T = ue({}, T);
        var q = ue({}, T.props);
        delete q.component, T.props = q;
      }
      H = (h = h === "all" || h instanceof Array ? h : [h]) === "all" || -1 < h.indexOf(H) ? ((T = ue({}, T)).__top__ = y.__top__, z = (q = d3(T, "_key_".concat(z), N, b)).props, q = q.slots, P2(T), T.children && (T.children.__top__ = y.__top__), nu(H, ue({}, z), q)) : C2(T, m, N, x, b), k.push(H);
    }), (k = k.flat(1 / 0)).length === 1 ? k[0] : k;
  };
}
F2({ vueComponents: "all", domTags: "all" });
F2({ reactComponents: "all", domTags: "all" });
new Ty();
const v3 = /* @__PURE__ */ Nk({
  __name: "CopilotApp",
  setup(p) {
    const h = c3(bO);
    return (m, E) => (Ak(), Mk(Uk(h)));
  }
}), S3 = {
  install(p) {
    p.component("CopilotApp", v3);
  }
};
export {
  v3 as CopilotApp,
  S3 as default
};
