import { Fragment as TE, h as ou, reactive as zT, getCurrentInstance as PT, Teleport as FT, createApp as IT, Comment as VT, Text as HT, defineComponent as $T, createBlock as BT, openBlock as qT, unref as WT } from "vue";
function DE(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var hy = { exports: {} }, mv = {}, my = { exports: {} }, Lt = {};
var YC;
function YT() {
  if (YC) return Lt;
  YC = 1;
  var f = /* @__PURE__ */ Symbol.for("react.element"), p = /* @__PURE__ */ Symbol.for("react.portal"), v = /* @__PURE__ */ Symbol.for("react.fragment"), S = /* @__PURE__ */ Symbol.for("react.strict_mode"), b = /* @__PURE__ */ Symbol.for("react.profiler"), E = /* @__PURE__ */ Symbol.for("react.provider"), m = /* @__PURE__ */ Symbol.for("react.context"), T = /* @__PURE__ */ Symbol.for("react.forward_ref"), R = /* @__PURE__ */ Symbol.for("react.suspense"), w = /* @__PURE__ */ Symbol.for("react.memo"), M = /* @__PURE__ */ Symbol.for("react.lazy"), F = Symbol.iterator;
  function I(P) {
    return P === null || typeof P != "object" ? null : (P = F && P[F] || P["@@iterator"], typeof P == "function" ? P : null);
  }
  var B = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ie = Object.assign, Z = {};
  function Ee(P, ee, tt) {
    this.props = P, this.context = ee, this.refs = Z, this.updater = tt || B;
  }
  Ee.prototype.isReactComponent = {}, Ee.prototype.setState = function(P, ee) {
    if (typeof P != "object" && typeof P != "function" && P != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, P, ee, "setState");
  }, Ee.prototype.forceUpdate = function(P) {
    this.updater.enqueueForceUpdate(this, P, "forceUpdate");
  };
  function _e() {
  }
  _e.prototype = Ee.prototype;
  function ge(P, ee, tt) {
    this.props = P, this.context = ee, this.refs = Z, this.updater = tt || B;
  }
  var Se = ge.prototype = new _e();
  Se.constructor = ge, ie(Se, Ee.prototype), Se.isPureReactComponent = !0;
  var Ne = Array.isArray, he = Object.prototype.hasOwnProperty, Me = { current: null }, Le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function He(P, ee, tt) {
    var Ie, gt = {}, ot = null, Ue = null;
    if (ee != null) for (Ie in ee.ref !== void 0 && (Ue = ee.ref), ee.key !== void 0 && (ot = "" + ee.key), ee) he.call(ee, Ie) && !Le.hasOwnProperty(Ie) && (gt[Ie] = ee[Ie]);
    var dt = arguments.length - 2;
    if (dt === 1) gt.children = tt;
    else if (1 < dt) {
      for (var ht = Array(dt), Xt = 0; Xt < dt; Xt++) ht[Xt] = arguments[Xt + 2];
      gt.children = ht;
    }
    if (P && P.defaultProps) for (Ie in dt = P.defaultProps, dt) gt[Ie] === void 0 && (gt[Ie] = dt[Ie]);
    return { $$typeof: f, type: P, key: ot, ref: Ue, props: gt, _owner: Me.current };
  }
  function it(P, ee) {
    return { $$typeof: f, type: P.type, key: ee, ref: P.ref, props: P.props, _owner: P._owner };
  }
  function at(P) {
    return typeof P == "object" && P !== null && P.$$typeof === f;
  }
  function ve(P) {
    var ee = { "=": "=0", ":": "=2" };
    return "$" + P.replace(/[=:]/g, function(tt) {
      return ee[tt];
    });
  }
  var G = /\/+/g;
  function X(P, ee) {
    return typeof P == "object" && P !== null && P.key != null ? ve("" + P.key) : ee.toString(36);
  }
  function be(P, ee, tt, Ie, gt) {
    var ot = typeof P;
    (ot === "undefined" || ot === "boolean") && (P = null);
    var Ue = !1;
    if (P === null) Ue = !0;
    else switch (ot) {
      case "string":
      case "number":
        Ue = !0;
        break;
      case "object":
        switch (P.$$typeof) {
          case f:
          case p:
            Ue = !0;
        }
    }
    if (Ue) return Ue = P, gt = gt(Ue), P = Ie === "" ? "." + X(Ue, 0) : Ie, Ne(gt) ? (tt = "", P != null && (tt = P.replace(G, "$&/") + "/"), be(gt, ee, tt, "", function(Xt) {
      return Xt;
    })) : gt != null && (at(gt) && (gt = it(gt, tt + (!gt.key || Ue && Ue.key === gt.key ? "" : ("" + gt.key).replace(G, "$&/") + "/") + P)), ee.push(gt)), 1;
    if (Ue = 0, Ie = Ie === "" ? "." : Ie + ":", Ne(P)) for (var dt = 0; dt < P.length; dt++) {
      ot = P[dt];
      var ht = Ie + X(ot, dt);
      Ue += be(ot, ee, tt, ht, gt);
    }
    else if (ht = I(P), typeof ht == "function") for (P = ht.call(P), dt = 0; !(ot = P.next()).done; ) ot = ot.value, ht = Ie + X(ot, dt++), Ue += be(ot, ee, tt, ht, gt);
    else if (ot === "object") throw ee = String(P), Error("Objects are not valid as a React child (found: " + (ee === "[object Object]" ? "object with keys {" + Object.keys(P).join(", ") + "}" : ee) + "). If you meant to render a collection of children, use an array instead.");
    return Ue;
  }
  function qe(P, ee, tt) {
    if (P == null) return P;
    var Ie = [], gt = 0;
    return be(P, Ie, "", "", function(ot) {
      return ee.call(tt, ot, gt++);
    }), Ie;
  }
  function Re(P) {
    if (P._status === -1) {
      var ee = P._result;
      ee = ee(), ee.then(function(tt) {
        (P._status === 0 || P._status === -1) && (P._status = 1, P._result = tt);
      }, function(tt) {
        (P._status === 0 || P._status === -1) && (P._status = 2, P._result = tt);
      }), P._status === -1 && (P._status = 0, P._result = ee);
    }
    if (P._status === 1) return P._result.default;
    throw P._result;
  }
  var xe = { current: null }, re = { transition: null }, De = { ReactCurrentDispatcher: xe, ReactCurrentBatchConfig: re, ReactCurrentOwner: Me };
  function me() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Lt.Children = { map: qe, forEach: function(P, ee, tt) {
    qe(P, function() {
      ee.apply(this, arguments);
    }, tt);
  }, count: function(P) {
    var ee = 0;
    return qe(P, function() {
      ee++;
    }), ee;
  }, toArray: function(P) {
    return qe(P, function(ee) {
      return ee;
    }) || [];
  }, only: function(P) {
    if (!at(P)) throw Error("React.Children.only expected to receive a single React element child.");
    return P;
  } }, Lt.Component = Ee, Lt.Fragment = v, Lt.Profiler = b, Lt.PureComponent = ge, Lt.StrictMode = S, Lt.Suspense = R, Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = De, Lt.act = me, Lt.cloneElement = function(P, ee, tt) {
    if (P == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + P + ".");
    var Ie = ie({}, P.props), gt = P.key, ot = P.ref, Ue = P._owner;
    if (ee != null) {
      if (ee.ref !== void 0 && (ot = ee.ref, Ue = Me.current), ee.key !== void 0 && (gt = "" + ee.key), P.type && P.type.defaultProps) var dt = P.type.defaultProps;
      for (ht in ee) he.call(ee, ht) && !Le.hasOwnProperty(ht) && (Ie[ht] = ee[ht] === void 0 && dt !== void 0 ? dt[ht] : ee[ht]);
    }
    var ht = arguments.length - 2;
    if (ht === 1) Ie.children = tt;
    else if (1 < ht) {
      dt = Array(ht);
      for (var Xt = 0; Xt < ht; Xt++) dt[Xt] = arguments[Xt + 2];
      Ie.children = dt;
    }
    return { $$typeof: f, type: P.type, key: gt, ref: ot, props: Ie, _owner: Ue };
  }, Lt.createContext = function(P) {
    return P = { $$typeof: m, _currentValue: P, _currentValue2: P, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, P.Provider = { $$typeof: E, _context: P }, P.Consumer = P;
  }, Lt.createElement = He, Lt.createFactory = function(P) {
    var ee = He.bind(null, P);
    return ee.type = P, ee;
  }, Lt.createRef = function() {
    return { current: null };
  }, Lt.forwardRef = function(P) {
    return { $$typeof: T, render: P };
  }, Lt.isValidElement = at, Lt.lazy = function(P) {
    return { $$typeof: M, _payload: { _status: -1, _result: P }, _init: Re };
  }, Lt.memo = function(P, ee) {
    return { $$typeof: w, type: P, compare: ee === void 0 ? null : ee };
  }, Lt.startTransition = function(P) {
    var ee = re.transition;
    re.transition = {};
    try {
      P();
    } finally {
      re.transition = ee;
    }
  }, Lt.unstable_act = me, Lt.useCallback = function(P, ee) {
    return xe.current.useCallback(P, ee);
  }, Lt.useContext = function(P) {
    return xe.current.useContext(P);
  }, Lt.useDebugValue = function() {
  }, Lt.useDeferredValue = function(P) {
    return xe.current.useDeferredValue(P);
  }, Lt.useEffect = function(P, ee) {
    return xe.current.useEffect(P, ee);
  }, Lt.useId = function() {
    return xe.current.useId();
  }, Lt.useImperativeHandle = function(P, ee, tt) {
    return xe.current.useImperativeHandle(P, ee, tt);
  }, Lt.useInsertionEffect = function(P, ee) {
    return xe.current.useInsertionEffect(P, ee);
  }, Lt.useLayoutEffect = function(P, ee) {
    return xe.current.useLayoutEffect(P, ee);
  }, Lt.useMemo = function(P, ee) {
    return xe.current.useMemo(P, ee);
  }, Lt.useReducer = function(P, ee, tt) {
    return xe.current.useReducer(P, ee, tt);
  }, Lt.useRef = function(P) {
    return xe.current.useRef(P);
  }, Lt.useState = function(P) {
    return xe.current.useState(P);
  }, Lt.useSyncExternalStore = function(P, ee, tt) {
    return xe.current.useSyncExternalStore(P, ee, tt);
  }, Lt.useTransition = function() {
    return xe.current.useTransition();
  }, Lt.version = "18.3.1", Lt;
}
var _v = { exports: {} };
_v.exports;
var GC;
function GT() {
  return GC || (GC = 1, (function(f, p) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var v = "18.3.1", S = /* @__PURE__ */ Symbol.for("react.element"), b = /* @__PURE__ */ Symbol.for("react.portal"), E = /* @__PURE__ */ Symbol.for("react.fragment"), m = /* @__PURE__ */ Symbol.for("react.strict_mode"), T = /* @__PURE__ */ Symbol.for("react.profiler"), R = /* @__PURE__ */ Symbol.for("react.provider"), w = /* @__PURE__ */ Symbol.for("react.context"), M = /* @__PURE__ */ Symbol.for("react.forward_ref"), F = /* @__PURE__ */ Symbol.for("react.suspense"), I = /* @__PURE__ */ Symbol.for("react.suspense_list"), B = /* @__PURE__ */ Symbol.for("react.memo"), ie = /* @__PURE__ */ Symbol.for("react.lazy"), Z = /* @__PURE__ */ Symbol.for("react.offscreen"), Ee = Symbol.iterator, _e = "@@iterator";
      function ge(_) {
        if (_ === null || typeof _ != "object")
          return null;
        var N = Ee && _[Ee] || _[_e];
        return typeof N == "function" ? N : null;
      }
      var Se = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ne = {
        transition: null
      }, he = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Me = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Le = {}, He = null;
      function it(_) {
        He = _;
      }
      Le.setExtraStackFrame = function(_) {
        He = _;
      }, Le.getCurrentStack = null, Le.getStackAddendum = function() {
        var _ = "";
        He && (_ += He);
        var N = Le.getCurrentStack;
        return N && (_ += N() || ""), _;
      };
      var at = !1, ve = !1, G = !1, X = !1, be = !1, qe = {
        ReactCurrentDispatcher: Se,
        ReactCurrentBatchConfig: Ne,
        ReactCurrentOwner: Me
      };
      qe.ReactDebugCurrentFrame = Le, qe.ReactCurrentActQueue = he;
      function Re(_) {
        {
          for (var N = arguments.length, Y = new Array(N > 1 ? N - 1 : 0), J = 1; J < N; J++)
            Y[J - 1] = arguments[J];
          re("warn", _, Y);
        }
      }
      function xe(_) {
        {
          for (var N = arguments.length, Y = new Array(N > 1 ? N - 1 : 0), J = 1; J < N; J++)
            Y[J - 1] = arguments[J];
          re("error", _, Y);
        }
      }
      function re(_, N, Y) {
        {
          var J = qe.ReactDebugCurrentFrame, ye = J.getStackAddendum();
          ye !== "" && (N += "%s", Y = Y.concat([ye]));
          var lt = Y.map(function(Te) {
            return String(Te);
          });
          lt.unshift("Warning: " + N), Function.prototype.apply.call(console[_], console, lt);
        }
      }
      var De = {};
      function me(_, N) {
        {
          var Y = _.constructor, J = Y && (Y.displayName || Y.name) || "ReactClass", ye = J + "." + N;
          if (De[ye])
            return;
          xe("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", N, J), De[ye] = !0;
        }
      }
      var P = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(_) {
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
        enqueueForceUpdate: function(_, N, Y) {
          me(_, "forceUpdate");
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
        enqueueReplaceState: function(_, N, Y, J) {
          me(_, "replaceState");
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
        enqueueSetState: function(_, N, Y, J) {
          me(_, "setState");
        }
      }, ee = Object.assign, tt = {};
      Object.freeze(tt);
      function Ie(_, N, Y) {
        this.props = _, this.context = N, this.refs = tt, this.updater = Y || P;
      }
      Ie.prototype.isReactComponent = {}, Ie.prototype.setState = function(_, N) {
        if (typeof _ != "object" && typeof _ != "function" && _ != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, _, N, "setState");
      }, Ie.prototype.forceUpdate = function(_) {
        this.updater.enqueueForceUpdate(this, _, "forceUpdate");
      };
      {
        var gt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ot = function(_, N) {
          Object.defineProperty(Ie.prototype, _, {
            get: function() {
              Re("%s(...) is deprecated in plain JavaScript React classes. %s", N[0], N[1]);
            }
          });
        };
        for (var Ue in gt)
          gt.hasOwnProperty(Ue) && ot(Ue, gt[Ue]);
      }
      function dt() {
      }
      dt.prototype = Ie.prototype;
      function ht(_, N, Y) {
        this.props = _, this.context = N, this.refs = tt, this.updater = Y || P;
      }
      var Xt = ht.prototype = new dt();
      Xt.constructor = ht, ee(Xt, Ie.prototype), Xt.isPureReactComponent = !0;
      function Un() {
        var _ = {
          current: null
        };
        return Object.seal(_), _;
      }
      var Nr = Array.isArray;
      function kn(_) {
        return Nr(_);
      }
      function ur(_) {
        {
          var N = typeof Symbol == "function" && Symbol.toStringTag, Y = N && _[Symbol.toStringTag] || _.constructor.name || "Object";
          return Y;
        }
      }
      function Yn(_) {
        try {
          return Gn(_), !1;
        } catch {
          return !0;
        }
      }
      function Gn(_) {
        return "" + _;
      }
      function Jr(_) {
        if (Yn(_))
          return xe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ur(_)), Gn(_);
      }
      function gi(_, N, Y) {
        var J = _.displayName;
        if (J)
          return J;
        var ye = N.displayName || N.name || "";
        return ye !== "" ? Y + "(" + ye + ")" : Y;
      }
      function ma(_) {
        return _.displayName || "Context";
      }
      function tr(_) {
        if (_ == null)
          return null;
        if (typeof _.tag == "number" && xe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof _ == "function")
          return _.displayName || _.name || null;
        if (typeof _ == "string")
          return _;
        switch (_) {
          case E:
            return "Fragment";
          case b:
            return "Portal";
          case T:
            return "Profiler";
          case m:
            return "StrictMode";
          case F:
            return "Suspense";
          case I:
            return "SuspenseList";
        }
        if (typeof _ == "object")
          switch (_.$$typeof) {
            case w:
              var N = _;
              return ma(N) + ".Consumer";
            case R:
              var Y = _;
              return ma(Y._context) + ".Provider";
            case M:
              return gi(_, _.render, "ForwardRef");
            case B:
              var J = _.displayName || null;
              return J !== null ? J : tr(_.type) || "Memo";
            case ie: {
              var ye = _, lt = ye._payload, Te = ye._init;
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
      }, br, Za, zn;
      zn = {};
      function wr(_) {
        if (Tn.call(_, "ref")) {
          var N = Object.getOwnPropertyDescriptor(_, "ref").get;
          if (N && N.isReactWarning)
            return !1;
        }
        return _.ref !== void 0;
      }
      function ya(_) {
        if (Tn.call(_, "key")) {
          var N = Object.getOwnPropertyDescriptor(_, "key").get;
          if (N && N.isReactWarning)
            return !1;
        }
        return _.key !== void 0;
      }
      function ei(_, N) {
        var Y = function() {
          br || (br = !0, xe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        Y.isReactWarning = !0, Object.defineProperty(_, "key", {
          get: Y,
          configurable: !0
        });
      }
      function _i(_, N) {
        var Y = function() {
          Za || (Za = !0, xe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        Y.isReactWarning = !0, Object.defineProperty(_, "ref", {
          get: Y,
          configurable: !0
        });
      }
      function we(_) {
        if (typeof _.ref == "string" && Me.current && _.__self && Me.current.stateNode !== _.__self) {
          var N = tr(Me.current.type);
          zn[N] || (xe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N, _.ref), zn[N] = !0);
        }
      }
      var Je = function(_, N, Y, J, ye, lt, Te) {
        var ct = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: S,
          // Built-in properties that belong on the element
          type: _,
          key: N,
          ref: Y,
          props: Te,
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
          value: J
        }), Object.defineProperty(ct, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ye
        }), Object.freeze && (Object.freeze(ct.props), Object.freeze(ct)), ct;
      };
      function Rt(_, N, Y) {
        var J, ye = {}, lt = null, Te = null, ct = null, Nt = null;
        if (N != null) {
          wr(N) && (Te = N.ref, we(N)), ya(N) && (Jr(N.key), lt = "" + N.key), ct = N.__self === void 0 ? null : N.__self, Nt = N.__source === void 0 ? null : N.__source;
          for (J in N)
            Tn.call(N, J) && !Qn.hasOwnProperty(J) && (ye[J] = N[J]);
        }
        var Ft = arguments.length - 2;
        if (Ft === 1)
          ye.children = Y;
        else if (Ft > 1) {
          for (var fn = Array(Ft), tn = 0; tn < Ft; tn++)
            fn[tn] = arguments[tn + 2];
          Object.freeze && Object.freeze(fn), ye.children = fn;
        }
        if (_ && _.defaultProps) {
          var kt = _.defaultProps;
          for (J in kt)
            ye[J] === void 0 && (ye[J] = kt[J]);
        }
        if (lt || Te) {
          var nn = typeof _ == "function" ? _.displayName || _.name || "Unknown" : _;
          lt && ei(ye, nn), Te && _i(ye, nn);
        }
        return Je(_, lt, Te, ct, Nt, Me.current, ye);
      }
      function Yt(_, N) {
        var Y = Je(_.type, N, _.ref, _._self, _._source, _._owner, _.props);
        return Y;
      }
      function un(_, N, Y) {
        if (_ == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
        var J, ye = ee({}, _.props), lt = _.key, Te = _.ref, ct = _._self, Nt = _._source, Ft = _._owner;
        if (N != null) {
          wr(N) && (Te = N.ref, Ft = Me.current), ya(N) && (Jr(N.key), lt = "" + N.key);
          var fn;
          _.type && _.type.defaultProps && (fn = _.type.defaultProps);
          for (J in N)
            Tn.call(N, J) && !Qn.hasOwnProperty(J) && (N[J] === void 0 && fn !== void 0 ? ye[J] = fn[J] : ye[J] = N[J]);
        }
        var tn = arguments.length - 2;
        if (tn === 1)
          ye.children = Y;
        else if (tn > 1) {
          for (var kt = Array(tn), nn = 0; nn < tn; nn++)
            kt[nn] = arguments[nn + 2];
          ye.children = kt;
        }
        return Je(_.type, lt, Te, ct, Nt, Ft, ye);
      }
      function _n(_) {
        return typeof _ == "object" && _ !== null && _.$$typeof === S;
      }
      var pn = ".", nr = ":";
      function sn(_) {
        var N = /[=:]/g, Y = {
          "=": "=0",
          ":": "=2"
        }, J = _.replace(N, function(ye) {
          return Y[ye];
        });
        return "$" + J;
      }
      var Jt = !1, Zt = /\/+/g;
      function ga(_) {
        return _.replace(Zt, "$&/");
      }
      function Rr(_, N) {
        return typeof _ == "object" && _ !== null && _.key != null ? (Jr(_.key), sn("" + _.key)) : N.toString(36);
      }
      function Na(_, N, Y, J, ye) {
        var lt = typeof _;
        (lt === "undefined" || lt === "boolean") && (_ = null);
        var Te = !1;
        if (_ === null)
          Te = !0;
        else
          switch (lt) {
            case "string":
            case "number":
              Te = !0;
              break;
            case "object":
              switch (_.$$typeof) {
                case S:
                case b:
                  Te = !0;
              }
          }
        if (Te) {
          var ct = _, Nt = ye(ct), Ft = J === "" ? pn + Rr(ct, 0) : J;
          if (kn(Nt)) {
            var fn = "";
            Ft != null && (fn = ga(Ft) + "/"), Na(Nt, N, fn, "", function(vd) {
              return vd;
            });
          } else Nt != null && (_n(Nt) && (Nt.key && (!ct || ct.key !== Nt.key) && Jr(Nt.key), Nt = Yt(
            Nt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            Y + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Nt.key && (!ct || ct.key !== Nt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ga("" + Nt.key) + "/"
            ) : "") + Ft
          )), N.push(Nt));
          return 1;
        }
        var tn, kt, nn = 0, Sn = J === "" ? pn : J + nr;
        if (kn(_))
          for (var Lo = 0; Lo < _.length; Lo++)
            tn = _[Lo], kt = Sn + Rr(tn, Lo), nn += Na(tn, N, Y, kt, ye);
        else {
          var us = ge(_);
          if (typeof us == "function") {
            var Ji = _;
            us === Ji.entries && (Jt || Re("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Jt = !0);
            for (var ss = us.call(Ji), _l, pd = 0; !(_l = ss.next()).done; )
              tn = _l.value, kt = Sn + Rr(tn, pd++), nn += Na(tn, N, Y, kt, ye);
          } else if (lt === "object") {
            var xc = String(_);
            throw new Error("Objects are not valid as a React child (found: " + (xc === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : xc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return nn;
      }
      function Qi(_, N, Y) {
        if (_ == null)
          return _;
        var J = [], ye = 0;
        return Na(_, J, "", "", function(lt) {
          return N.call(Y, lt, ye++);
        }), J;
      }
      function cl(_) {
        var N = 0;
        return Qi(_, function() {
          N++;
        }), N;
      }
      function fl(_, N, Y) {
        Qi(_, function() {
          N.apply(this, arguments);
        }, Y);
      }
      function bo(_) {
        return Qi(_, function(N) {
          return N;
        }) || [];
      }
      function wo(_) {
        if (!_n(_))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return _;
      }
      function dl(_) {
        var N = {
          $$typeof: w,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: _,
          _currentValue2: _,
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
        N.Provider = {
          $$typeof: R,
          _context: N
        };
        var Y = !1, J = !1, ye = !1;
        {
          var lt = {
            $$typeof: w,
            _context: N
          };
          Object.defineProperties(lt, {
            Provider: {
              get: function() {
                return J || (J = !0, xe("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), N.Provider;
              },
              set: function(Te) {
                N.Provider = Te;
              }
            },
            _currentValue: {
              get: function() {
                return N._currentValue;
              },
              set: function(Te) {
                N._currentValue = Te;
              }
            },
            _currentValue2: {
              get: function() {
                return N._currentValue2;
              },
              set: function(Te) {
                N._currentValue2 = Te;
              }
            },
            _threadCount: {
              get: function() {
                return N._threadCount;
              },
              set: function(Te) {
                N._threadCount = Te;
              }
            },
            Consumer: {
              get: function() {
                return Y || (Y = !0, xe("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), N.Consumer;
              }
            },
            displayName: {
              get: function() {
                return N.displayName;
              },
              set: function(Te) {
                ye || (Re("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Te), ye = !0);
              }
            }
          }), N.Consumer = lt;
        }
        return N._currentRenderer = null, N._currentRenderer2 = null, N;
      }
      var Mr = -1, Lr = 0, sr = 1, Si = 2;
      function ti(_) {
        if (_._status === Mr) {
          var N = _._result, Y = N();
          if (Y.then(function(lt) {
            if (_._status === Lr || _._status === Mr) {
              var Te = _;
              Te._status = sr, Te._result = lt;
            }
          }, function(lt) {
            if (_._status === Lr || _._status === Mr) {
              var Te = _;
              Te._status = Si, Te._result = lt;
            }
          }), _._status === Mr) {
            var J = _;
            J._status = Lr, J._result = Y;
          }
        }
        if (_._status === sr) {
          var ye = _._result;
          return ye === void 0 && xe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ye), "default" in ye || xe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ye), ye.default;
        } else
          throw _._result;
      }
      function Ci(_) {
        var N = {
          // We use these fields to store the result.
          _status: Mr,
          _result: _
        }, Y = {
          $$typeof: ie,
          _payload: N,
          _init: ti
        };
        {
          var J, ye;
          Object.defineProperties(Y, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return J;
              },
              set: function(lt) {
                xe("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), J = lt, Object.defineProperty(Y, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ye;
              },
              set: function(lt) {
                xe("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ye = lt, Object.defineProperty(Y, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return Y;
      }
      function Ei(_) {
        _ != null && _.$$typeof === B ? xe("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof _ != "function" ? xe("forwardRef requires a render function but was given %s.", _ === null ? "null" : typeof _) : _.length !== 0 && _.length !== 2 && xe("forwardRef render functions accept exactly two parameters: props and ref. %s", _.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), _ != null && (_.defaultProps != null || _.propTypes != null) && xe("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var N = {
          $$typeof: M,
          render: _
        };
        {
          var Y;
          Object.defineProperty(N, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return Y;
            },
            set: function(J) {
              Y = J, !_.name && !_.displayName && (_.displayName = J);
            }
          });
        }
        return N;
      }
      var L;
      L = /* @__PURE__ */ Symbol.for("react.module.reference");
      function oe(_) {
        return !!(typeof _ == "string" || typeof _ == "function" || _ === E || _ === T || be || _ === m || _ === F || _ === I || X || _ === Z || at || ve || G || typeof _ == "object" && _ !== null && (_.$$typeof === ie || _.$$typeof === B || _.$$typeof === R || _.$$typeof === w || _.$$typeof === M || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        _.$$typeof === L || _.getModuleId !== void 0));
      }
      function Oe(_, N) {
        oe(_) || xe("memo: The first argument must be a component. Instead received: %s", _ === null ? "null" : typeof _);
        var Y = {
          $$typeof: B,
          type: _,
          compare: N === void 0 ? null : N
        };
        {
          var J;
          Object.defineProperty(Y, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return J;
            },
            set: function(ye) {
              J = ye, !_.name && !_.displayName && (_.displayName = ye);
            }
          });
        }
        return Y;
      }
      function We() {
        var _ = Se.current;
        return _ === null && xe(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), _;
      }
      function Et(_) {
        var N = We();
        if (_._context !== void 0) {
          var Y = _._context;
          Y.Consumer === _ ? xe("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : Y.Provider === _ && xe("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return N.useContext(_);
      }
      function _t(_) {
        var N = We();
        return N.useState(_);
      }
      function Ot(_, N, Y) {
        var J = We();
        return J.useReducer(_, N, Y);
      }
      function Tt(_) {
        var N = We();
        return N.useRef(_);
      }
      function Dn(_, N) {
        var Y = We();
        return Y.useEffect(_, N);
      }
      function cn(_, N) {
        var Y = We();
        return Y.useInsertionEffect(_, N);
      }
      function vn(_, N) {
        var Y = We();
        return Y.useLayoutEffect(_, N);
      }
      function cr(_, N) {
        var Y = We();
        return Y.useCallback(_, N);
      }
      function ni(_, N) {
        var Y = We();
        return Y.useMemo(_, N);
      }
      function ri(_, N, Y) {
        var J = We();
        return J.useImperativeHandle(_, N, Y);
      }
      function xt(_, N) {
        {
          var Y = We();
          return Y.useDebugValue(_, N);
        }
      }
      function wt() {
        var _ = We();
        return _.useTransition();
      }
      function ai(_) {
        var N = We();
        return N.useDeferredValue(_);
      }
      function pl() {
        var _ = We();
        return _.useId();
      }
      function vl(_, N, Y) {
        var J = We();
        return J.useSyncExternalStore(_, N, Y);
      }
      var Ro = 0, lu, ko, Zr, as, jr, Cc, Ec;
      function uu() {
      }
      uu.__reactDisabledLog = !0;
      function To() {
        {
          if (Ro === 0) {
            lu = console.log, ko = console.info, Zr = console.warn, as = console.error, jr = console.group, Cc = console.groupCollapsed, Ec = console.groupEnd;
            var _ = {
              configurable: !0,
              enumerable: !0,
              value: uu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: _,
              log: _,
              warn: _,
              error: _,
              group: _,
              groupCollapsed: _,
              groupEnd: _
            });
          }
          Ro++;
        }
      }
      function _a() {
        {
          if (Ro--, Ro === 0) {
            var _ = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: ee({}, _, {
                value: lu
              }),
              info: ee({}, _, {
                value: ko
              }),
              warn: ee({}, _, {
                value: Zr
              }),
              error: ee({}, _, {
                value: as
              }),
              group: ee({}, _, {
                value: jr
              }),
              groupCollapsed: ee({}, _, {
                value: Cc
              }),
              groupEnd: ee({}, _, {
                value: Ec
              })
            });
          }
          Ro < 0 && xe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ii = qe.ReactCurrentDispatcher, oi;
      function su(_, N, Y) {
        {
          if (oi === void 0)
            try {
              throw Error();
            } catch (ye) {
              var J = ye.stack.trim().match(/\n( *(at )?)/);
              oi = J && J[1] || "";
            }
          return `
` + oi + _;
        }
      }
      var hl = !1, Do;
      {
        var cu = typeof WeakMap == "function" ? WeakMap : Map;
        Do = new cu();
      }
      function fu(_, N) {
        if (!_ || hl)
          return "";
        {
          var Y = Do.get(_);
          if (Y !== void 0)
            return Y;
        }
        var J;
        hl = !0;
        var ye = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var lt;
        lt = ii.current, ii.current = null, To();
        try {
          if (N) {
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
                J = Sn;
              }
              Reflect.construct(_, [], Te);
            } else {
              try {
                Te.call();
              } catch (Sn) {
                J = Sn;
              }
              _.call(Te.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Sn) {
              J = Sn;
            }
            _();
          }
        } catch (Sn) {
          if (Sn && J && typeof Sn.stack == "string") {
            for (var ct = Sn.stack.split(`
`), Nt = J.stack.split(`
`), Ft = ct.length - 1, fn = Nt.length - 1; Ft >= 1 && fn >= 0 && ct[Ft] !== Nt[fn]; )
              fn--;
            for (; Ft >= 1 && fn >= 0; Ft--, fn--)
              if (ct[Ft] !== Nt[fn]) {
                if (Ft !== 1 || fn !== 1)
                  do
                    if (Ft--, fn--, fn < 0 || ct[Ft] !== Nt[fn]) {
                      var tn = `
` + ct[Ft].replace(" at new ", " at ");
                      return _.displayName && tn.includes("<anonymous>") && (tn = tn.replace("<anonymous>", _.displayName)), typeof _ == "function" && Do.set(_, tn), tn;
                    }
                  while (Ft >= 1 && fn >= 0);
                break;
              }
          }
        } finally {
          hl = !1, ii.current = lt, _a(), Error.prepareStackTrace = ye;
        }
        var kt = _ ? _.displayName || _.name : "", nn = kt ? su(kt) : "";
        return typeof _ == "function" && Do.set(_, nn), nn;
      }
      function Ki(_, N, Y) {
        return fu(_, !1);
      }
      function fd(_) {
        var N = _.prototype;
        return !!(N && N.isReactComponent);
      }
      function Xi(_, N, Y) {
        if (_ == null)
          return "";
        if (typeof _ == "function")
          return fu(_, fd(_));
        if (typeof _ == "string")
          return su(_);
        switch (_) {
          case F:
            return su("Suspense");
          case I:
            return su("SuspenseList");
        }
        if (typeof _ == "object")
          switch (_.$$typeof) {
            case M:
              return Ki(_.render);
            case B:
              return Xi(_.type, N, Y);
            case ie: {
              var J = _, ye = J._payload, lt = J._init;
              try {
                return Xi(lt(ye), N, Y);
              } catch {
              }
            }
          }
        return "";
      }
      var Vt = {}, du = qe.ReactDebugCurrentFrame;
      function Pt(_) {
        if (_) {
          var N = _._owner, Y = Xi(_.type, _._source, N ? N.type : null);
          du.setExtraStackFrame(Y);
        } else
          du.setExtraStackFrame(null);
      }
      function is(_, N, Y, J, ye) {
        {
          var lt = Function.call.bind(Tn);
          for (var Te in _)
            if (lt(_, Te)) {
              var ct = void 0;
              try {
                if (typeof _[Te] != "function") {
                  var Nt = Error((J || "React class") + ": " + Y + " type `" + Te + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof _[Te] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Nt.name = "Invariant Violation", Nt;
                }
                ct = _[Te](N, Te, J, Y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ft) {
                ct = Ft;
              }
              ct && !(ct instanceof Error) && (Pt(ye), xe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", J || "React class", Y, Te, typeof ct), Pt(null)), ct instanceof Error && !(ct.message in Vt) && (Vt[ct.message] = !0, Pt(ye), xe("Failed %s type: %s", Y, ct.message), Pt(null));
            }
        }
      }
      function xi(_) {
        if (_) {
          var N = _._owner, Y = Xi(_.type, _._source, N ? N.type : null);
          it(Y);
        } else
          it(null);
      }
      var yt;
      yt = !1;
      function pu() {
        if (Me.current) {
          var _ = tr(Me.current.type);
          if (_)
            return `

Check the render method of \`` + _ + "`.";
        }
        return "";
      }
      function fr(_) {
        if (_ !== void 0) {
          var N = _.fileName.replace(/^.*[\\\/]/, ""), Y = _.lineNumber;
          return `

Check your code at ` + N + ":" + Y + ".";
        }
        return "";
      }
      function bi(_) {
        return _ != null ? fr(_.__source) : "";
      }
      var Ar = {};
      function wi(_) {
        var N = pu();
        if (!N) {
          var Y = typeof _ == "string" ? _ : _.displayName || _.name;
          Y && (N = `

Check the top-level render call using <` + Y + ">.");
        }
        return N;
      }
      function hn(_, N) {
        if (!(!_._store || _._store.validated || _.key != null)) {
          _._store.validated = !0;
          var Y = wi(N);
          if (!Ar[Y]) {
            Ar[Y] = !0;
            var J = "";
            _ && _._owner && _._owner !== Me.current && (J = " It was passed a child from " + tr(_._owner.type) + "."), xi(_), xe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Y, J), xi(null);
          }
        }
      }
      function en(_, N) {
        if (typeof _ == "object") {
          if (kn(_))
            for (var Y = 0; Y < _.length; Y++) {
              var J = _[Y];
              _n(J) && hn(J, N);
            }
          else if (_n(_))
            _._store && (_._store.validated = !0);
          else if (_) {
            var ye = ge(_);
            if (typeof ye == "function" && ye !== _.entries)
              for (var lt = ye.call(_), Te; !(Te = lt.next()).done; )
                _n(Te.value) && hn(Te.value, N);
          }
        }
      }
      function Oo(_) {
        {
          var N = _.type;
          if (N == null || typeof N == "string")
            return;
          var Y;
          if (typeof N == "function")
            Y = N.propTypes;
          else if (typeof N == "object" && (N.$$typeof === M || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          N.$$typeof === B))
            Y = N.propTypes;
          else
            return;
          if (Y) {
            var J = tr(N);
            is(Y, _.props, "prop", J, _);
          } else if (N.PropTypes !== void 0 && !yt) {
            yt = !0;
            var ye = tr(N);
            xe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ye || "Unknown");
          }
          typeof N.getDefaultProps == "function" && !N.getDefaultProps.isReactClassApproved && xe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Kn(_) {
        {
          for (var N = Object.keys(_.props), Y = 0; Y < N.length; Y++) {
            var J = N[Y];
            if (J !== "children" && J !== "key") {
              xi(_), xe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", J), xi(null);
              break;
            }
          }
          _.ref !== null && (xi(_), xe("Invalid attribute `ref` supplied to `React.Fragment`."), xi(null));
        }
      }
      function Ur(_, N, Y) {
        var J = oe(_);
        if (!J) {
          var ye = "";
          (_ === void 0 || typeof _ == "object" && _ !== null && Object.keys(_).length === 0) && (ye += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var lt = bi(N);
          lt ? ye += lt : ye += pu();
          var Te;
          _ === null ? Te = "null" : kn(_) ? Te = "array" : _ !== void 0 && _.$$typeof === S ? (Te = "<" + (tr(_.type) || "Unknown") + " />", ye = " Did you accidentally export a JSX literal instead of a component?") : Te = typeof _, xe("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Te, ye);
        }
        var ct = Rt.apply(this, arguments);
        if (ct == null)
          return ct;
        if (J)
          for (var Nt = 2; Nt < arguments.length; Nt++)
            en(arguments[Nt], _);
        return _ === E ? Kn(ct) : Oo(ct), ct;
      }
      var Ma = !1;
      function ml(_) {
        var N = Ur.bind(null, _);
        return N.type = _, Ma || (Ma = !0, Re("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(N, "type", {
          enumerable: !1,
          get: function() {
            return Re("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: _
            }), _;
          }
        }), N;
      }
      function os(_, N, Y) {
        for (var J = un.apply(this, arguments), ye = 2; ye < arguments.length; ye++)
          en(arguments[ye], J.type);
        return Oo(J), J;
      }
      function ls(_, N) {
        var Y = Ne.transition;
        Ne.transition = {};
        var J = Ne.transition;
        Ne.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          _();
        } finally {
          if (Ne.transition = Y, Y === null && J._updatedFibers) {
            var ye = J._updatedFibers.size;
            ye > 10 && Re("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), J._updatedFibers.clear();
          }
        }
      }
      var No = !1, yl = null;
      function dd(_) {
        if (yl === null)
          try {
            var N = ("require" + Math.random()).slice(0, 7), Y = f && f[N];
            yl = Y.call(f, "timers").setImmediate;
          } catch {
            yl = function(ye) {
              No === !1 && (No = !0, typeof MessageChannel > "u" && xe("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var lt = new MessageChannel();
              lt.port1.onmessage = ye, lt.port2.postMessage(void 0);
            };
          }
        return yl(_);
      }
      var La = 0, li = !1;
      function Ri(_) {
        {
          var N = La;
          La++, he.current === null && (he.current = []);
          var Y = he.isBatchingLegacy, J;
          try {
            if (he.isBatchingLegacy = !0, J = _(), !Y && he.didScheduleLegacyUpdate) {
              var ye = he.current;
              ye !== null && (he.didScheduleLegacyUpdate = !1, Mo(ye));
            }
          } catch (kt) {
            throw ja(N), kt;
          } finally {
            he.isBatchingLegacy = Y;
          }
          if (J !== null && typeof J == "object" && typeof J.then == "function") {
            var lt = J, Te = !1, ct = {
              then: function(kt, nn) {
                Te = !0, lt.then(function(Sn) {
                  ja(N), La === 0 ? vu(Sn, kt, nn) : kt(Sn);
                }, function(Sn) {
                  ja(N), nn(Sn);
                });
              }
            };
            return !li && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Te || (li = !0, xe("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), ct;
          } else {
            var Nt = J;
            if (ja(N), La === 0) {
              var Ft = he.current;
              Ft !== null && (Mo(Ft), he.current = null);
              var fn = {
                then: function(kt, nn) {
                  he.current === null ? (he.current = [], vu(Nt, kt, nn)) : kt(Nt);
                }
              };
              return fn;
            } else {
              var tn = {
                then: function(kt, nn) {
                  kt(Nt);
                }
              };
              return tn;
            }
          }
        }
      }
      function ja(_) {
        _ !== La - 1 && xe("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), La = _;
      }
      function vu(_, N, Y) {
        {
          var J = he.current;
          if (J !== null)
            try {
              Mo(J), dd(function() {
                J.length === 0 ? (he.current = null, N(_)) : vu(_, N, Y);
              });
            } catch (ye) {
              Y(ye);
            }
          else
            N(_);
        }
      }
      var hu = !1;
      function Mo(_) {
        if (!hu) {
          hu = !0;
          var N = 0;
          try {
            for (; N < _.length; N++) {
              var Y = _[N];
              do
                Y = Y(!0);
              while (Y !== null);
            }
            _.length = 0;
          } catch (J) {
            throw _ = _.slice(N + 1), J;
          } finally {
            hu = !1;
          }
        }
      }
      var gl = Ur, mu = os, yu = ml, ui = {
        map: Qi,
        forEach: fl,
        count: cl,
        toArray: bo,
        only: wo
      };
      p.Children = ui, p.Component = Ie, p.Fragment = E, p.Profiler = T, p.PureComponent = ht, p.StrictMode = m, p.Suspense = F, p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qe, p.act = Ri, p.cloneElement = mu, p.createContext = dl, p.createElement = gl, p.createFactory = yu, p.createRef = Un, p.forwardRef = Ei, p.isValidElement = _n, p.lazy = Ci, p.memo = Oe, p.startTransition = ls, p.unstable_act = Ri, p.useCallback = cr, p.useContext = Et, p.useDebugValue = xt, p.useDeferredValue = ai, p.useEffect = Dn, p.useId = pl, p.useImperativeHandle = ri, p.useInsertionEffect = cn, p.useLayoutEffect = vn, p.useMemo = ni, p.useReducer = Ot, p.useRef = Tt, p.useState = _t, p.useSyncExternalStore = vl, p.useTransition = wt, p.version = v, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(_v, _v.exports)), _v.exports;
}
var QC;
function Cv() {
  return QC || (QC = 1, process.env.NODE_ENV === "production" ? my.exports = YT() : my.exports = GT()), my.exports;
}
var KC;
function QT() {
  if (KC) return mv;
  KC = 1;
  var f = Cv(), p = /* @__PURE__ */ Symbol.for("react.element"), v = /* @__PURE__ */ Symbol.for("react.fragment"), S = Object.prototype.hasOwnProperty, b = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(T, R, w) {
    var M, F = {}, I = null, B = null;
    w !== void 0 && (I = "" + w), R.key !== void 0 && (I = "" + R.key), R.ref !== void 0 && (B = R.ref);
    for (M in R) S.call(R, M) && !E.hasOwnProperty(M) && (F[M] = R[M]);
    if (T && T.defaultProps) for (M in R = T.defaultProps, R) F[M] === void 0 && (F[M] = R[M]);
    return { $$typeof: p, type: T, key: I, ref: B, props: F, _owner: b.current };
  }
  return mv.Fragment = v, mv.jsx = m, mv.jsxs = m, mv;
}
var yv = {};
var XC;
function KT() {
  return XC || (XC = 1, process.env.NODE_ENV !== "production" && (function() {
    var f = Cv(), p = /* @__PURE__ */ Symbol.for("react.element"), v = /* @__PURE__ */ Symbol.for("react.portal"), S = /* @__PURE__ */ Symbol.for("react.fragment"), b = /* @__PURE__ */ Symbol.for("react.strict_mode"), E = /* @__PURE__ */ Symbol.for("react.profiler"), m = /* @__PURE__ */ Symbol.for("react.provider"), T = /* @__PURE__ */ Symbol.for("react.context"), R = /* @__PURE__ */ Symbol.for("react.forward_ref"), w = /* @__PURE__ */ Symbol.for("react.suspense"), M = /* @__PURE__ */ Symbol.for("react.suspense_list"), F = /* @__PURE__ */ Symbol.for("react.memo"), I = /* @__PURE__ */ Symbol.for("react.lazy"), B = /* @__PURE__ */ Symbol.for("react.offscreen"), ie = Symbol.iterator, Z = "@@iterator";
    function Ee(L) {
      if (L === null || typeof L != "object")
        return null;
      var oe = ie && L[ie] || L[Z];
      return typeof oe == "function" ? oe : null;
    }
    var _e = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ge(L) {
      {
        for (var oe = arguments.length, Oe = new Array(oe > 1 ? oe - 1 : 0), We = 1; We < oe; We++)
          Oe[We - 1] = arguments[We];
        Se("error", L, Oe);
      }
    }
    function Se(L, oe, Oe) {
      {
        var We = _e.ReactDebugCurrentFrame, Et = We.getStackAddendum();
        Et !== "" && (oe += "%s", Oe = Oe.concat([Et]));
        var _t = Oe.map(function(Ot) {
          return String(Ot);
        });
        _t.unshift("Warning: " + oe), Function.prototype.apply.call(console[L], console, _t);
      }
    }
    var Ne = !1, he = !1, Me = !1, Le = !1, He = !1, it;
    it = /* @__PURE__ */ Symbol.for("react.module.reference");
    function at(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === S || L === E || He || L === b || L === w || L === M || Le || L === B || Ne || he || Me || typeof L == "object" && L !== null && (L.$$typeof === I || L.$$typeof === F || L.$$typeof === m || L.$$typeof === T || L.$$typeof === R || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === it || L.getModuleId !== void 0));
    }
    function ve(L, oe, Oe) {
      var We = L.displayName;
      if (We)
        return We;
      var Et = oe.displayName || oe.name || "";
      return Et !== "" ? Oe + "(" + Et + ")" : Oe;
    }
    function G(L) {
      return L.displayName || "Context";
    }
    function X(L) {
      if (L == null)
        return null;
      if (typeof L.tag == "number" && ge("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof L == "function")
        return L.displayName || L.name || null;
      if (typeof L == "string")
        return L;
      switch (L) {
        case S:
          return "Fragment";
        case v:
          return "Portal";
        case E:
          return "Profiler";
        case b:
          return "StrictMode";
        case w:
          return "Suspense";
        case M:
          return "SuspenseList";
      }
      if (typeof L == "object")
        switch (L.$$typeof) {
          case T:
            var oe = L;
            return G(oe) + ".Consumer";
          case m:
            var Oe = L;
            return G(Oe._context) + ".Provider";
          case R:
            return ve(L, L.render, "ForwardRef");
          case F:
            var We = L.displayName || null;
            return We !== null ? We : X(L.type) || "Memo";
          case I: {
            var Et = L, _t = Et._payload, Ot = Et._init;
            try {
              return X(Ot(_t));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var be = Object.assign, qe = 0, Re, xe, re, De, me, P, ee;
    function tt() {
    }
    tt.__reactDisabledLog = !0;
    function Ie() {
      {
        if (qe === 0) {
          Re = console.log, xe = console.info, re = console.warn, De = console.error, me = console.group, P = console.groupCollapsed, ee = console.groupEnd;
          var L = {
            configurable: !0,
            enumerable: !0,
            value: tt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: L,
            log: L,
            warn: L,
            error: L,
            group: L,
            groupCollapsed: L,
            groupEnd: L
          });
        }
        qe++;
      }
    }
    function gt() {
      {
        if (qe--, qe === 0) {
          var L = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: be({}, L, {
              value: Re
            }),
            info: be({}, L, {
              value: xe
            }),
            warn: be({}, L, {
              value: re
            }),
            error: be({}, L, {
              value: De
            }),
            group: be({}, L, {
              value: me
            }),
            groupCollapsed: be({}, L, {
              value: P
            }),
            groupEnd: be({}, L, {
              value: ee
            })
          });
        }
        qe < 0 && ge("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ot = _e.ReactCurrentDispatcher, Ue;
    function dt(L, oe, Oe) {
      {
        if (Ue === void 0)
          try {
            throw Error();
          } catch (Et) {
            var We = Et.stack.trim().match(/\n( *(at )?)/);
            Ue = We && We[1] || "";
          }
        return `
` + Ue + L;
      }
    }
    var ht = !1, Xt;
    {
      var Un = typeof WeakMap == "function" ? WeakMap : Map;
      Xt = new Un();
    }
    function Nr(L, oe) {
      if (!L || ht)
        return "";
      {
        var Oe = Xt.get(L);
        if (Oe !== void 0)
          return Oe;
      }
      var We;
      ht = !0;
      var Et = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _t;
      _t = ot.current, ot.current = null, Ie();
      try {
        if (oe) {
          var Ot = function() {
            throw Error();
          };
          if (Object.defineProperty(Ot.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ot, []);
            } catch (xt) {
              We = xt;
            }
            Reflect.construct(L, [], Ot);
          } else {
            try {
              Ot.call();
            } catch (xt) {
              We = xt;
            }
            L.call(Ot.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xt) {
            We = xt;
          }
          L();
        }
      } catch (xt) {
        if (xt && We && typeof xt.stack == "string") {
          for (var Tt = xt.stack.split(`
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
                    return L.displayName && cr.includes("<anonymous>") && (cr = cr.replace("<anonymous>", L.displayName)), typeof L == "function" && Xt.set(L, cr), cr;
                  }
                while (cn >= 1 && vn >= 0);
              break;
            }
        }
      } finally {
        ht = !1, ot.current = _t, gt(), Error.prepareStackTrace = Et;
      }
      var ni = L ? L.displayName || L.name : "", ri = ni ? dt(ni) : "";
      return typeof L == "function" && Xt.set(L, ri), ri;
    }
    function kn(L, oe, Oe) {
      return Nr(L, !1);
    }
    function ur(L) {
      var oe = L.prototype;
      return !!(oe && oe.isReactComponent);
    }
    function Yn(L, oe, Oe) {
      if (L == null)
        return "";
      if (typeof L == "function")
        return Nr(L, ur(L));
      if (typeof L == "string")
        return dt(L);
      switch (L) {
        case w:
          return dt("Suspense");
        case M:
          return dt("SuspenseList");
      }
      if (typeof L == "object")
        switch (L.$$typeof) {
          case R:
            return kn(L.render);
          case F:
            return Yn(L.type, oe, Oe);
          case I: {
            var We = L, Et = We._payload, _t = We._init;
            try {
              return Yn(_t(Et), oe, Oe);
            } catch {
            }
          }
        }
      return "";
    }
    var Gn = Object.prototype.hasOwnProperty, Jr = {}, gi = _e.ReactDebugCurrentFrame;
    function ma(L) {
      if (L) {
        var oe = L._owner, Oe = Yn(L.type, L._source, oe ? oe.type : null);
        gi.setExtraStackFrame(Oe);
      } else
        gi.setExtraStackFrame(null);
    }
    function tr(L, oe, Oe, We, Et) {
      {
        var _t = Function.call.bind(Gn);
        for (var Ot in L)
          if (_t(L, Ot)) {
            var Tt = void 0;
            try {
              if (typeof L[Ot] != "function") {
                var Dn = Error((We || "React class") + ": " + Oe + " type `" + Ot + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof L[Ot] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Dn.name = "Invariant Violation", Dn;
              }
              Tt = L[Ot](oe, Ot, We, Oe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (cn) {
              Tt = cn;
            }
            Tt && !(Tt instanceof Error) && (ma(Et), ge("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", We || "React class", Oe, Ot, typeof Tt), ma(null)), Tt instanceof Error && !(Tt.message in Jr) && (Jr[Tt.message] = !0, ma(Et), ge("Failed %s type: %s", Oe, Tt.message), ma(null));
          }
      }
    }
    var Tn = Array.isArray;
    function Qn(L) {
      return Tn(L);
    }
    function br(L) {
      {
        var oe = typeof Symbol == "function" && Symbol.toStringTag, Oe = oe && L[Symbol.toStringTag] || L.constructor.name || "Object";
        return Oe;
      }
    }
    function Za(L) {
      try {
        return zn(L), !1;
      } catch {
        return !0;
      }
    }
    function zn(L) {
      return "" + L;
    }
    function wr(L) {
      if (Za(L))
        return ge("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", br(L)), zn(L);
    }
    var ya = _e.ReactCurrentOwner, ei = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _i, we;
    function Je(L) {
      if (Gn.call(L, "ref")) {
        var oe = Object.getOwnPropertyDescriptor(L, "ref").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return L.ref !== void 0;
    }
    function Rt(L) {
      if (Gn.call(L, "key")) {
        var oe = Object.getOwnPropertyDescriptor(L, "key").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return L.key !== void 0;
    }
    function Yt(L, oe) {
      typeof L.ref == "string" && ya.current;
    }
    function un(L, oe) {
      {
        var Oe = function() {
          _i || (_i = !0, ge("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        Oe.isReactWarning = !0, Object.defineProperty(L, "key", {
          get: Oe,
          configurable: !0
        });
      }
    }
    function _n(L, oe) {
      {
        var Oe = function() {
          we || (we = !0, ge("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        Oe.isReactWarning = !0, Object.defineProperty(L, "ref", {
          get: Oe,
          configurable: !0
        });
      }
    }
    var pn = function(L, oe, Oe, We, Et, _t, Ot) {
      var Tt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: L,
        key: oe,
        ref: Oe,
        props: Ot,
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
    function nr(L, oe, Oe, We, Et) {
      {
        var _t, Ot = {}, Tt = null, Dn = null;
        Oe !== void 0 && (wr(Oe), Tt = "" + Oe), Rt(oe) && (wr(oe.key), Tt = "" + oe.key), Je(oe) && (Dn = oe.ref, Yt(oe, Et));
        for (_t in oe)
          Gn.call(oe, _t) && !ei.hasOwnProperty(_t) && (Ot[_t] = oe[_t]);
        if (L && L.defaultProps) {
          var cn = L.defaultProps;
          for (_t in cn)
            Ot[_t] === void 0 && (Ot[_t] = cn[_t]);
        }
        if (Tt || Dn) {
          var vn = typeof L == "function" ? L.displayName || L.name || "Unknown" : L;
          Tt && un(Ot, vn), Dn && _n(Ot, vn);
        }
        return pn(L, Tt, Dn, Et, We, ya.current, Ot);
      }
    }
    var sn = _e.ReactCurrentOwner, Jt = _e.ReactDebugCurrentFrame;
    function Zt(L) {
      if (L) {
        var oe = L._owner, Oe = Yn(L.type, L._source, oe ? oe.type : null);
        Jt.setExtraStackFrame(Oe);
      } else
        Jt.setExtraStackFrame(null);
    }
    var ga;
    ga = !1;
    function Rr(L) {
      return typeof L == "object" && L !== null && L.$$typeof === p;
    }
    function Na() {
      {
        if (sn.current) {
          var L = X(sn.current.type);
          if (L)
            return `

Check the render method of \`` + L + "`.";
        }
        return "";
      }
    }
    function Qi(L) {
      return "";
    }
    var cl = {};
    function fl(L) {
      {
        var oe = Na();
        if (!oe) {
          var Oe = typeof L == "string" ? L : L.displayName || L.name;
          Oe && (oe = `

Check the top-level render call using <` + Oe + ">.");
        }
        return oe;
      }
    }
    function bo(L, oe) {
      {
        if (!L._store || L._store.validated || L.key != null)
          return;
        L._store.validated = !0;
        var Oe = fl(oe);
        if (cl[Oe])
          return;
        cl[Oe] = !0;
        var We = "";
        L && L._owner && L._owner !== sn.current && (We = " It was passed a child from " + X(L._owner.type) + "."), Zt(L), ge('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Oe, We), Zt(null);
      }
    }
    function wo(L, oe) {
      {
        if (typeof L != "object")
          return;
        if (Qn(L))
          for (var Oe = 0; Oe < L.length; Oe++) {
            var We = L[Oe];
            Rr(We) && bo(We, oe);
          }
        else if (Rr(L))
          L._store && (L._store.validated = !0);
        else if (L) {
          var Et = Ee(L);
          if (typeof Et == "function" && Et !== L.entries)
            for (var _t = Et.call(L), Ot; !(Ot = _t.next()).done; )
              Rr(Ot.value) && bo(Ot.value, oe);
        }
      }
    }
    function dl(L) {
      {
        var oe = L.type;
        if (oe == null || typeof oe == "string")
          return;
        var Oe;
        if (typeof oe == "function")
          Oe = oe.propTypes;
        else if (typeof oe == "object" && (oe.$$typeof === R || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        oe.$$typeof === F))
          Oe = oe.propTypes;
        else
          return;
        if (Oe) {
          var We = X(oe);
          tr(Oe, L.props, "prop", We, L);
        } else if (oe.PropTypes !== void 0 && !ga) {
          ga = !0;
          var Et = X(oe);
          ge("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Et || "Unknown");
        }
        typeof oe.getDefaultProps == "function" && !oe.getDefaultProps.isReactClassApproved && ge("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Mr(L) {
      {
        for (var oe = Object.keys(L.props), Oe = 0; Oe < oe.length; Oe++) {
          var We = oe[Oe];
          if (We !== "children" && We !== "key") {
            Zt(L), ge("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", We), Zt(null);
            break;
          }
        }
        L.ref !== null && (Zt(L), ge("Invalid attribute `ref` supplied to `React.Fragment`."), Zt(null));
      }
    }
    var Lr = {};
    function sr(L, oe, Oe, We, Et, _t) {
      {
        var Ot = at(L);
        if (!Ot) {
          var Tt = "";
          (L === void 0 || typeof L == "object" && L !== null && Object.keys(L).length === 0) && (Tt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Dn = Qi();
          Dn ? Tt += Dn : Tt += Na();
          var cn;
          L === null ? cn = "null" : Qn(L) ? cn = "array" : L !== void 0 && L.$$typeof === p ? (cn = "<" + (X(L.type) || "Unknown") + " />", Tt = " Did you accidentally export a JSX literal instead of a component?") : cn = typeof L, ge("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", cn, Tt);
        }
        var vn = nr(L, oe, Oe, Et, _t);
        if (vn == null)
          return vn;
        if (Ot) {
          var cr = oe.children;
          if (cr !== void 0)
            if (We)
              if (Qn(cr)) {
                for (var ni = 0; ni < cr.length; ni++)
                  wo(cr[ni], L);
                Object.freeze && Object.freeze(cr);
              } else
                ge("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              wo(cr, L);
        }
        if (Gn.call(oe, "key")) {
          var ri = X(L), xt = Object.keys(oe).filter(function(pl) {
            return pl !== "key";
          }), wt = xt.length > 0 ? "{key: someKey, " + xt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Lr[ri + wt]) {
            var ai = xt.length > 0 ? "{" + xt.join(": ..., ") + ": ...}" : "{}";
            ge(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, wt, ri, ai, ri), Lr[ri + wt] = !0;
          }
        }
        return L === S ? Mr(vn) : dl(vn), vn;
      }
    }
    function Si(L, oe, Oe) {
      return sr(L, oe, Oe, !0);
    }
    function ti(L, oe, Oe) {
      return sr(L, oe, Oe, !1);
    }
    var Ci = ti, Ei = Si;
    yv.Fragment = S, yv.jsx = Ci, yv.jsxs = Ei;
  })()), yv;
}
var JC;
function XT() {
  return JC || (JC = 1, process.env.NODE_ENV === "production" ? hy.exports = QT() : hy.exports = KT()), hy.exports;
}
var D = XT(), Be = Cv();
const Ja = /* @__PURE__ */ DE(Be), ZC = (f) => Symbol.iterator in f, eE = (f) => (
  // HACK: avoid checking entries type
  "entries" in f
), tE = (f, p) => {
  const v = f instanceof Map ? f : new Map(f.entries()), S = p instanceof Map ? p : new Map(p.entries());
  if (v.size !== S.size)
    return !1;
  for (const [b, E] of v)
    if (!S.has(b) || !Object.is(E, S.get(b)))
      return !1;
  return !0;
}, JT = (f, p) => {
  const v = f[Symbol.iterator](), S = p[Symbol.iterator]();
  let b = v.next(), E = S.next();
  for (; !b.done && !E.done; ) {
    if (!Object.is(b.value, E.value))
      return !1;
    b = v.next(), E = S.next();
  }
  return !!b.done && !!E.done;
};
function ZT(f, p) {
  return Object.is(f, p) ? !0 : typeof f != "object" || f === null || typeof p != "object" || p === null || Object.getPrototypeOf(f) !== Object.getPrototypeOf(p) ? !1 : ZC(f) && ZC(p) ? eE(f) && eE(p) ? tE(f, p) : JT(f, p) : tE(
    { entries: () => Object.entries(f) },
    { entries: () => Object.entries(p) }
  );
}
function sd(f) {
  const p = Ja.useRef(void 0);
  return (v) => {
    const S = f(v);
    return ZT(p.current, S) ? p.current : p.current = S;
  };
}
const e3 = "_sidebar_gxqe0_1", t3 = "_sidebarNav_gxqe0_24", n3 = "_sectionWrapper_gxqe0_32", r3 = "_sectionHeader_gxqe0_37", a3 = "_active_gxqe0_48", i3 = "_sidebarItemInHeader_gxqe0_68", o3 = "_plusButton_gxqe0_71", l3 = "_sidebarItem_gxqe0_68", u3 = "_sidebarIcon_gxqe0_138", s3 = "_sidebarLabel_gxqe0_148", c3 = "_plusIcon_gxqe0_173", f3 = "_rotated_gxqe0_178", Rn = {
  sidebar: e3,
  sidebarNav: t3,
  sectionWrapper: n3,
  sectionHeader: r3,
  active: a3,
  sidebarItemInHeader: i3,
  plusButton: o3,
  sidebarItem: l3,
  sidebarIcon: u3,
  sidebarLabel: s3,
  plusIcon: c3,
  rotated: f3
}, d3 = "_expandedContent_pymls_2", p3 = "_searchWrapper_pymls_17", v3 = "_searchContainer_pymls_23", h3 = "_searchDropdown_pymls_33", m3 = "_dropdownItem_pymls_69", y3 = "_selected_pymls_84", g3 = "_personAvatar_pymls_97", _3 = "_avatarPlaceholder_pymls_111", S3 = "_personInfo_pymls_123", C3 = "_personName_pymls_131", E3 = "_personTitle_pymls_140", x3 = "_dropdownEmpty_pymls_148", b3 = "_searchIcon_pymls_155", w3 = "_searchInput_pymls_160", R3 = "_suggestionsList_pymls_172", k3 = "_suggestionItemWrapper_pymls_191", T3 = "_suggestionItem_pymls_191", D3 = "_statusIcon_pymls_219", O3 = "_moreButton_pymls_222", N3 = "_childItem_pymls_225", M3 = "_suggestionLabel_pymls_254", L3 = "_loadingState_pymls_299", j3 = "_loadingSpinner_pymls_309", A3 = "_emptyState_pymls_323", U3 = "_errorState_pymls_330", Gt = {
  expandedContent: d3,
  searchWrapper: p3,
  searchContainer: v3,
  searchDropdown: h3,
  dropdownItem: m3,
  selected: y3,
  personAvatar: g3,
  avatarPlaceholder: _3,
  personInfo: S3,
  personName: C3,
  personTitle: E3,
  dropdownEmpty: x3,
  searchIcon: b3,
  searchInput: w3,
  suggestionsList: R3,
  suggestionItemWrapper: k3,
  suggestionItem: T3,
  statusIcon: D3,
  moreButton: O3,
  childItem: N3,
  suggestionLabel: M3,
  loadingState: L3,
  loadingSpinner: j3,
  emptyState: A3,
  errorState: U3
}, nE = (f) => {
  let p;
  const v = /* @__PURE__ */ new Set(), S = (w, M) => {
    const F = typeof w == "function" ? w(p) : w;
    if (!Object.is(F, p)) {
      const I = p;
      p = M ?? (typeof F != "object" || F === null) ? F : Object.assign({}, p, F), v.forEach((B) => B(p, I));
    }
  }, b = () => p, T = { setState: S, getState: b, getInitialState: () => R, subscribe: (w) => (v.add(w), () => v.delete(w)) }, R = p = f(S, b, T);
  return T;
}, z3 = ((f) => f ? nE(f) : nE), P3 = (f) => f;
function F3(f, p = P3) {
  const v = Ja.useSyncExternalStore(
    f.subscribe,
    Ja.useCallback(() => p(f.getState()), [f, p]),
    Ja.useCallback(() => p(f.getInitialState()), [f, p])
  );
  return Ja.useDebugValue(v), v;
}
const rE = (f) => {
  const p = z3(f), v = (S) => F3(p, S);
  return Object.assign(v, p), v;
}, OE = ((f) => f ? rE(f) : rE), aE = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_API_TOKEN: "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.vZSm6dKFoT5q7svfMSXaftuah2jfowH98Gawf85T06k16IWN4nSr1t_rXA4tP03YEG2rTtxHF8PLdQRY4FokJqJdB9r5ZRce.Ea-xJMdubBliIhmviAsSzA.JzZv1KOj_owPAm6m72iru5bk8G9dzNIxkwxOjot5jCF6yRXWewoiDunpmd0sHMmA6Vx92PVKqZ3xaSTUQ2o66j1A5xNu45PK49rdP4lM_vAkMDLEnwM3GWjHYceooELWqTZEhraIS_-14IygiZEg_zhDz4FTpxNHZNkVvImRmjA.FHuLXIcNkF2bmuQI0azja4-sn2vHEAOc_VnyTXIMfh4", VITE_API_URL: "https://xh2o-yths-38lt.n7c.xano.io/api", VITE_DATA_SOURCE: "staging", VITE_LLM_ENDPOINT: "https://copilot-thesys-api.fly.dev" }, Sv = /* @__PURE__ */ new Map(), yy = (f) => {
  const p = Sv.get(f);
  return p ? Object.fromEntries(
    Object.entries(p.stores).map(([v, S]) => [v, S.getState()])
  ) : {};
}, I3 = (f, p, v) => {
  if (f === void 0)
    return {
      type: "untracked",
      connection: p.connect(v)
    };
  const S = Sv.get(v.name);
  if (S)
    return { type: "tracked", store: f, ...S };
  const b = {
    connection: p.connect(v),
    stores: {}
  };
  return Sv.set(v.name, b), { type: "tracked", store: f, ...b };
}, V3 = (f, p) => {
  if (p === void 0) return;
  const v = Sv.get(f);
  v && (delete v.stores[p], Object.keys(v.stores).length === 0 && Sv.delete(f));
}, H3 = (f) => {
  var p, v;
  if (!f) return;
  const S = f.split(`
`), b = S.findIndex(
    (m) => m.includes("api.setState")
  );
  if (b < 0) return;
  const E = ((p = S[b + 1]) == null ? void 0 : p.trim()) || "";
  return (v = /.+ (.+) .+/.exec(E)) == null ? void 0 : v[1];
}, $3 = (f, p = {}) => (v, S, b) => {
  const { enabled: E, anonymousActionType: m, store: T, ...R } = p;
  let w;
  try {
    w = (E ?? (aE ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch {
  }
  if (!w)
    return f(v, S, b);
  const { connection: M, ...F } = I3(T, w, R);
  let I = !0;
  b.setState = ((Z, Ee, _e) => {
    const ge = v(Z, Ee);
    if (!I) return ge;
    const Se = _e === void 0 ? {
      type: m || H3(new Error().stack) || "anonymous"
    } : typeof _e == "string" ? { type: _e } : _e;
    return T === void 0 ? (M?.send(Se, S()), ge) : (M?.send(
      {
        ...Se,
        type: `${T}/${Se.type}`
      },
      {
        ...yy(R.name),
        [T]: b.getState()
      }
    ), ge);
  }), b.devtools = {
    cleanup: () => {
      M && typeof M.unsubscribe == "function" && M.unsubscribe(), V3(R.name, T);
    }
  };
  const B = (...Z) => {
    const Ee = I;
    I = !1, v(...Z), I = Ee;
  }, ie = f(b.setState, S, b);
  if (F.type === "untracked" ? M?.init(ie) : (F.stores[F.store] = b, M?.init(
    Object.fromEntries(
      Object.entries(F.stores).map(([Z, Ee]) => [
        Z,
        Z === F.store ? ie : Ee.getState()
      ])
    )
  )), b.dispatchFromDevtools && typeof b.dispatch == "function") {
    let Z = !1;
    const Ee = b.dispatch;
    b.dispatch = (..._e) => {
      (aE ? "production" : void 0) !== "production" && _e[0].type === "__setState" && !Z && (console.warn(
        '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
      ), Z = !0), Ee(..._e);
    };
  }
  return M.subscribe((Z) => {
    var Ee;
    switch (Z.type) {
      case "ACTION":
        if (typeof Z.payload != "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return G1(
          Z.payload,
          (_e) => {
            if (_e.type === "__setState") {
              if (T === void 0) {
                B(_e.state);
                return;
              }
              Object.keys(_e.state).length !== 1 && console.error(
                `
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `
              );
              const ge = _e.state[T];
              if (ge == null)
                return;
              JSON.stringify(b.getState()) !== JSON.stringify(ge) && B(ge);
              return;
            }
            b.dispatchFromDevtools && typeof b.dispatch == "function" && b.dispatch(_e);
          }
        );
      case "DISPATCH":
        switch (Z.payload.type) {
          case "RESET":
            return B(ie), T === void 0 ? M?.init(b.getState()) : M?.init(yy(R.name));
          case "COMMIT":
            if (T === void 0) {
              M?.init(b.getState());
              return;
            }
            return M?.init(yy(R.name));
          case "ROLLBACK":
            return G1(Z.state, (_e) => {
              if (T === void 0) {
                B(_e), M?.init(b.getState());
                return;
              }
              B(_e[T]), M?.init(yy(R.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return G1(Z.state, (_e) => {
              if (T === void 0) {
                B(_e);
                return;
              }
              JSON.stringify(b.getState()) !== JSON.stringify(_e[T]) && B(_e[T]);
            });
          case "IMPORT_STATE": {
            const { nextLiftedState: _e } = Z.payload, ge = (Ee = _e.computedStates.slice(-1)[0]) == null ? void 0 : Ee.state;
            if (!ge) return;
            B(T === void 0 ? ge : ge[T]), M?.send(
              null,
              // FIXME no-any
              _e
            );
            return;
          }
          case "PAUSE_RECORDING":
            return I = !I;
        }
        return;
    }
  }), ie;
}, NE = $3, G1 = (f, p) => {
  let v;
  try {
    v = JSON.parse(f);
  } catch (S) {
    console.error(
      "[zustand devtools middleware] Could not parse the received json",
      S
    );
  }
  v !== void 0 && p(v);
}, Q1 = "https://xh2o-yths-38lt.n7c.xano.io/api", K1 = "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.vZSm6dKFoT5q7svfMSXaftuah2jfowH98Gawf85T06k16IWN4nSr1t_rXA4tP03YEG2rTtxHF8PLdQRY4FokJqJdB9r5ZRce.Ea-xJMdubBliIhmviAsSzA.JzZv1KOj_owPAm6m72iru5bk8G9dzNIxkwxOjot5jCF6yRXWewoiDunpmd0sHMmA6Vx92PVKqZ3xaSTUQ2o66j1A5xNu45PK49rdP4lM_vAkMDLEnwM3GWjHYceooELWqTZEhraIS_-14IygiZEg_zhDz4FTpxNHZNkVvImRmjA.FHuLXIcNkF2bmuQI0azja4-sn2vHEAOc_VnyTXIMfh4", X1 = "staging", xy = OE()(NE((f, p) => ({
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
    f({ isLoadingPersons: !0, personsError: null });
    try {
      const v = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${K1}`,
        "x-data-source": X1
      }, S = await fetch(`${Q1}:Et3oQAtI/my-persons`, { headers: v }), b = await S.json();
      if (!S.ok) {
        const E = b?.message || b?.error || "Failed to fetch loops", m = `HTTP ${S.status}: ${E}`;
        throw new Error(m);
      }
      f({ leverageLoops: b, isLoadingPersons: !1 });
    } catch (v) {
      f({
        personsError: v instanceof Error ? v.message : "Unknown error",
        isLoadingPersons: !1
      });
    }
  },
  fetchSuggestionRequests: async () => {
    f({ isLoadingSuggestionRequests: !0, suggestionRequestsError: null });
    try {
      const v = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${K1}`,
        "x-data-source": X1
      }, S = await fetch(`${Q1}:MkA4QsNh/suggestion-requests?copilot_mode=loop`, { headers: v }), b = await S.json();
      if (!S.ok) {
        const E = b?.message || b?.error || "Failed to fetch suggestion requests", m = `HTTP ${S.status}: ${E}`;
        throw new Error(m);
      }
      f({ suggestionRequests: b?.items ?? [], isLoadingSuggestionRequests: !1 });
    } catch (v) {
      f({
        suggestionRequestsError: v instanceof Error ? v.message : "Unknown error",
        isLoadingSuggestionRequests: !1
      });
    }
  },
  createSuggestionRequest: async (v) => {
    f({ isCreatingSuggestionRequest: !0, createSuggestionRequestError: null });
    try {
      const S = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${K1}`,
        "x-data-source": X1
      }, b = await fetch(
        `${Q1}:MkA4QsNh/suggestion-requests`,
        { headers: S, method: "POST", body: JSON.stringify(v) }
      ), E = await b.json();
      if (!b.ok) {
        const m = E?.message || E?.error || "Failed to create suggestion request";
        throw new Error(`HTTP ${b.status}: ${m}`);
      }
      f({ suggestionRequests: [...p().suggestionRequests, E], isCreatingSuggestionRequest: !1 });
    } catch (S) {
      f({
        createSuggestionRequestError: S instanceof Error ? S.message : "Unknown error",
        isCreatingSuggestionRequest: !1
      });
    }
  },
  setLeverageLoops: (v) => f({ leverageLoops: v }),
  addLeverageLoops: (v) => f((S) => ({ leverageLoops: [...S.leverageLoops, ...v] }))
}))), B3 = ({ status: f }) => {
  switch (f) {
    case "draft":
      return /* @__PURE__ */ D.jsx("span", { className: Gt.statusIcon, "data-status": "draft", children: "📝" });
    case "suggestion":
      return /* @__PURE__ */ D.jsx("span", { className: Gt.statusIcon, "data-status": "suggestion", children: "💡" });
    case "processing":
      return /* @__PURE__ */ D.jsx("span", { className: Gt.statusIcon, "data-status": "processing", children: "⏳" });
    case "archived":
      return /* @__PURE__ */ D.jsx("span", { className: Gt.statusIcon, "data-status": "archived", children: "📦" });
    default:
      return /* @__PURE__ */ D.jsx("span", { className: Gt.statusIcon, "data-status": "unknown", children: "❓" });
  }
}, q3 = ({
  contentType: f,
  items: p,
  selectedItem: v,
  onItemSelect: S,
  emptyMessage: b = "No items found",
  selectedSuggestionRequest: E,
  onSuggestionRequestSelect: m
}) => {
  const [T, R] = Be.useState(/* @__PURE__ */ new Set()), [w, M] = Be.useState(""), [F, I] = Be.useState(!1), B = Be.useRef(null), { suggestionRequests: ie, leverageLoops: Z, isLoadingPersons: Ee, isLoadingSuggestionRequests: _e, personsError: ge, suggestionRequestsError: Se } = xy(
    sd((ve) => ({
      suggestionRequests: ve.suggestionRequests,
      leverageLoops: ve.leverageLoops,
      isLoadingPersons: ve.isLoadingPersons,
      isLoadingSuggestionRequests: ve.isLoadingSuggestionRequests,
      personsError: ve.personsError,
      suggestionRequestsError: ve.suggestionRequestsError
    }))
  );
  Be.useEffect(() => {
    const ve = (G) => {
      B.current && !B.current.contains(G.target) && I(!1);
    };
    return document.addEventListener("mousedown", ve), () => document.removeEventListener("mousedown", ve);
  }, []);
  const Ne = (ve) => {
    R((G) => {
      const X = new Set(G);
      return X.has(ve) ? X.delete(ve) : X.add(ve), X;
    });
  }, he = (ve, G) => G ? ve.filter(
    (X) => X.full_name?.toLowerCase().includes(G.toLowerCase()) || X.master_person.name?.toLowerCase().includes(G.toLowerCase()) || X.master_person.current_title?.toLowerCase().includes(G.toLowerCase()) || X.master_person.bio?.toLowerCase().includes(G.toLowerCase()) || X.master_person.master_company?.company_name?.toLowerCase().includes(G.toLowerCase())
  ) : [], Me = (ve) => {
    const G = ve.target.value;
    M(G), I(G.length > 0);
  }, Le = (ve) => {
    S(ve), M(""), I(!1);
  }, He = (ve) => {
    const G = v?.id === ve.id;
    return /* @__PURE__ */ D.jsxs(
      "button",
      {
        className: `${Gt.dropdownItem} ${G ? Gt.selected : ""}`,
        onClick: () => Le(ve),
        children: [
          /* @__PURE__ */ D.jsx("div", { className: Gt.personAvatar, children: ve.master_person.avatar ? /* @__PURE__ */ D.jsx("img", { src: ve.master_person.avatar, alt: ve.full_name }) : /* @__PURE__ */ D.jsx("span", { className: Gt.avatarPlaceholder, children: ve.full_name?.charAt(0) || "?" }) }),
          /* @__PURE__ */ D.jsxs("div", { className: Gt.personInfo, children: [
            /* @__PURE__ */ D.jsx("span", { className: Gt.personName, children: ve.full_name || ve.master_person.name }),
            ve.master_person.current_title && /* @__PURE__ */ D.jsxs("span", { className: Gt.personTitle, children: [
              ve.master_person.current_title,
              ve.master_person.master_company?.company_name && /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
                " at ",
                ve.master_person.master_company.company_name
              ] })
            ] })
          ] })
        ]
      },
      ve.id
    );
  }, it = (ve, G = !1) => {
    const X = E?.request_header_title === ve.request_header_title;
    return /* @__PURE__ */ D.jsx("div", { className: Gt.suggestionItemWrapper, children: /* @__PURE__ */ D.jsxs(
      "button",
      {
        className: `${Gt.suggestionItem} ${G ? Gt.childItem : ""} ${X ? Gt.selected : ""}`,
        onClick: () => {
          Ne(ve.request_header_title), m(ve);
        },
        children: [
          /* @__PURE__ */ D.jsx(B3, { status: ve.status }),
          /* @__PURE__ */ D.jsx("span", { className: Gt.suggestionLabel, children: ve.request_header_title }),
          /* @__PURE__ */ D.jsx("button", { className: Gt.moreButton, onClick: (be) => be.stopPropagation(), children: "⋮" })
        ]
      }
    ) }, ve.id);
  }, at = he(Z.length > 0 ? Z : p, w);
  return /* @__PURE__ */ D.jsxs("div", { className: Gt.expandedContent, children: [
    /* @__PURE__ */ D.jsxs("div", { className: Gt.searchWrapper, ref: B, children: [
      /* @__PURE__ */ D.jsxs("div", { className: Gt.searchContainer, children: [
        /* @__PURE__ */ D.jsx("span", { className: Gt.searchIcon, children: "🔍" }),
        /* @__PURE__ */ D.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search persons...",
            className: Gt.searchInput,
            value: w,
            onChange: Me,
            onFocus: () => w.length > 0 && I(!0)
          }
        )
      ] }),
      F && /* @__PURE__ */ D.jsx("div", { className: Gt.searchDropdown, children: Ee ? /* @__PURE__ */ D.jsxs("div", { className: Gt.dropdownLoading, children: [
        /* @__PURE__ */ D.jsx("span", { className: Gt.loadingSpinner }),
        "Loading persons..."
      ] }) : ge ? /* @__PURE__ */ D.jsx("div", { className: Gt.dropdownError, children: ge }) : at.length === 0 ? /* @__PURE__ */ D.jsxs("div", { className: Gt.dropdownEmpty, children: [
        'No persons found for "',
        w,
        '"'
      ] }) : at.map((ve) => He(ve)) })
    ] }),
    /* @__PURE__ */ D.jsx("div", { className: Gt.suggestionsList, children: _e ? /* @__PURE__ */ D.jsxs("div", { className: Gt.loadingState, children: [
      /* @__PURE__ */ D.jsx("span", { className: Gt.loadingSpinner }),
      "Loading suggestion requests..."
    ] }) : Se ? /* @__PURE__ */ D.jsx("div", { className: Gt.errorState, children: Se }) : ie.length === 0 ? /* @__PURE__ */ D.jsx("div", { className: Gt.emptyState, children: b }) : ie.map((ve) => it(ve)) })
  ] });
}, gy = (f) => ({
  messages: [],
  threadId: `thread-${f}-${Date.now()}`,
  isLoading: !1
}), wy = OE()(
  NE((f) => ({
    activeContext: "copilot",
    selectedPerson: null,
    selectedSuggestionRequest: null,
    copilotChat: gy("copilot"),
    outcomesChat: gy("outcomes"),
    leverageLoopsChat: gy("leverage-loops"),
    setActiveContext: (p) => f({ activeContext: p }),
    setSelectedPerson: (p) => f((v) => ({
      selectedPerson: p,
      selectedSuggestionRequest: p ? null : v.selectedSuggestionRequest,
      activeContext: "leverage-loops"
    })),
    setSelectedSuggestionRequest: (p) => f((v) => ({
      selectedSuggestionRequest: p,
      selectedPerson: p ? null : v.selectedPerson,
      activeContext: "leverage-loops"
    })),
    addMessage: (p, v) => f((S) => {
      const b = _y(p);
      return {
        [b]: {
          ...S[b],
          messages: [...S[b].messages, v]
        }
      };
    }),
    updateMessage: (p, v, S, b) => f((E) => {
      const m = _y(p);
      return {
        [m]: {
          ...E[m],
          messages: E[m].messages.map(
            (T) => T.id === v ? { ...T, content: S, isStreaming: b ?? T.isStreaming } : T
          )
        }
      };
    }),
    setIsLoading: (p, v) => f((S) => {
      const b = _y(p);
      return {
        [b]: {
          ...S[b],
          isLoading: v
        }
      };
    }),
    clearChat: (p) => f(() => ({
      [_y(p)]: gy(p)
    }))
  }))
);
function _y(f) {
  switch (f) {
    case "copilot":
      return "copilotChat";
    case "outcomes":
      return "outcomesChat";
    case "leverage-loops":
      return "leverageLoopsChat";
  }
}
const W3 = "_composerContainer_1dqbd_1", Y3 = "_composer_1dqbd_1", G3 = "_inputWrapper_1dqbd_15", Q3 = "_input_1dqbd_15", K3 = "_actions_1dqbd_40", X3 = "_leftActions_1dqbd_47", J3 = "_rightActions_1dqbd_48", Z3 = "_actionButton_1dqbd_54", e4 = "_sendButton_1dqbd_75", t4 = "_active_1dqbd_92", Yi = {
  composerContainer: W3,
  composer: Y3,
  inputWrapper: G3,
  input: Q3,
  actions: K3,
  leftActions: X3,
  rightActions: J3,
  actionButton: Z3,
  sendButton: e4,
  active: t4
}, n4 = ({
  onSend: f,
  disabled: p = !1,
  placeholder: v = "Ask anything..",
  initialValue: S = ""
}) => {
  const [b, E] = Be.useState(S), m = Be.useRef(null);
  Be.useEffect(() => {
    S && (E(S), setTimeout(() => m.current?.focus(), 0));
  }, [S]), Be.useEffect(() => {
    const w = m.current;
    w && (w.style.height = "auto", w.style.height = `${Math.min(w.scrollHeight, 200)}px`);
  }, [b]);
  const T = (w) => {
    w?.preventDefault(), b.trim() && !p && (f(b.trim()), E(""));
  }, R = (w) => {
    w.key === "Enter" && !w.shiftKey && (w.preventDefault(), T());
  };
  return /* @__PURE__ */ D.jsx("div", { className: Yi.composerContainer, children: /* @__PURE__ */ D.jsxs("form", { onSubmit: T, className: Yi.composer, children: [
    /* @__PURE__ */ D.jsx("div", { className: Yi.inputWrapper, children: /* @__PURE__ */ D.jsx(
      "textarea",
      {
        ref: m,
        value: b,
        onChange: (w) => E(w.target.value),
        onKeyDown: R,
        placeholder: v,
        disabled: p,
        className: Yi.input,
        rows: 1
      }
    ) }),
    /* @__PURE__ */ D.jsxs("div", { className: Yi.actions, children: [
      /* @__PURE__ */ D.jsxs("div", { className: Yi.leftActions, children: [
        /* @__PURE__ */ D.jsx(
          "button",
          {
            type: "button",
            className: Yi.actionButton,
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
            className: Yi.actionButton,
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
      /* @__PURE__ */ D.jsxs("div", { className: Yi.rightActions, children: [
        /* @__PURE__ */ D.jsx(
          "button",
          {
            type: "button",
            className: Yi.actionButton,
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
            className: `${Yi.sendButton} ${b.trim() && !p ? Yi.active : ""}`,
            disabled: !b.trim() || p,
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
}, r4 = "_messageContainer_1t8ij_1", a4 = "_user_1t8ij_6", i4 = "_assistant_1t8ij_9", o4 = "_userMessage_1t8ij_23", l4 = "_assistantMessage_1t8ij_38", u4 = "_textContent_1t8ij_45", s4 = "_streamingIndicator_1t8ij_50", au = {
  messageContainer: r4,
  user: a4,
  assistant: i4,
  userMessage: o4,
  assistantMessage: l4,
  textContent: u4,
  streamingIndicator: s4
};
const c4 = (f) => f.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), f4 = (f) => f.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (p, v, S) => S ? S.toUpperCase() : v.toLowerCase()
), iE = (f) => {
  const p = f4(f);
  return p.charAt(0).toUpperCase() + p.slice(1);
}, ME = (...f) => f.filter((p, v, S) => !!p && p.trim() !== "" && S.indexOf(p) === v).join(" ").trim(), d4 = (f) => {
  for (const p in f)
    if (p.startsWith("aria-") || p === "role" || p === "title")
      return !0;
};
var p4 = {
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
const v4 = Be.forwardRef(
  ({
    color: f = "currentColor",
    size: p = 24,
    strokeWidth: v = 2,
    absoluteStrokeWidth: S,
    className: b = "",
    children: E,
    iconNode: m,
    ...T
  }, R) => Be.createElement(
    "svg",
    {
      ref: R,
      ...p4,
      width: p,
      height: p,
      stroke: f,
      strokeWidth: S ? Number(v) * 24 / Number(p) : v,
      className: ME("lucide", b),
      ...!E && !d4(T) && { "aria-hidden": "true" },
      ...T
    },
    [
      ...m.map(([w, M]) => Be.createElement(w, M)),
      ...Array.isArray(E) ? E : [E]
    ]
  )
);
const Ce = (f, p) => {
  const v = Be.forwardRef(
    ({ className: S, ...b }, E) => Be.createElement(v4, {
      ref: E,
      iconNode: p,
      className: ME(
        `lucide-${c4(iE(f))}`,
        `lucide-${f}`,
        S
      ),
      ...b
    })
  );
  return v.displayName = iE(f), v;
};
const h4 = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
], m4 = Ce("activity", h4);
const y4 = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], g4 = Ce("arrow-down", y4);
const _4 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], S4 = Ce("arrow-left", _4);
const C4 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], E4 = Ce("arrow-right", C4);
const x4 = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], b4 = Ce("arrow-up", x4);
const w4 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
], R4 = Ce("award", w4);
const k4 = [
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
], T4 = Ce("bell-off", k4);
const D4 = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], O4 = Ce("bell", D4);
const N4 = [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }]
], M4 = Ce("bookmark", N4);
const L4 = [
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
], j4 = Ce("boxes", L4);
const A4 = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
], U4 = Ce("briefcase", A4);
const z4 = [
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
], P4 = Ce("building", z4);
const F4 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], I4 = Ce("calendar", F4);
const V4 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }]
], H4 = Ce("chart-line", V4);
const $4 = [
  ["path", { d: "M5 21v-6", key: "1hz6c0" }],
  ["path", { d: "M12 21V9", key: "uvy0l4" }],
  ["path", { d: "M19 21V3", key: "11j9sm" }]
], B4 = Ce("chart-no-axes-column-increasing", $4);
const q4 = [
  [
    "path",
    {
      d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",
      key: "pzmjnu"
    }
  ],
  ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83", key: "k2fpak" }]
], W4 = Ce("chart-pie", q4);
const Y4 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], G4 = Ce("check", Y4);
const Q4 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], LE = Ce("chevron-down", Q4);
const K4 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], X4 = Ce("chevron-left", K4);
const J4 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Z4 = Ce("chevron-right", J4);
const e5 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], t5 = Ce("chevron-up", e5);
const n5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], r5 = Ce("circle-alert", n5);
const a5 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], i5 = Ce("circle-check-big", a5);
const o5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], l5 = Ce("circle-question-mark", o5);
const u5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], s5 = Ce("circle-x", u5);
const c5 = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], f5 = Ce("clock", c5);
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
], p5 = Ce("coffee", d5);
const v5 = [
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], h5 = Ce("compass", v5);
const m5 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], y5 = Ce("copy", m5);
const g5 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], _5 = Ce("download", g5);
const S5 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], C5 = Ce("external-link", S5);
const E5 = [
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
], x5 = Ce("eye-off", E5);
const b5 = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], w5 = Ce("eye", b5);
const R5 = [
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
], k5 = Ce("file-text", R5);
const T5 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]
], D5 = Ce("file", T5);
const O5 = [
  [
    "path",
    {
      d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
      key: "1jaruq"
    }
  ]
], N5 = Ce("flag", O5);
const M5 = [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
], L5 = Ce("folder-open", M5);
const j5 = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
], A5 = Ce("folder", j5);
const U5 = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
], z5 = Ce("funnel", U5);
const P5 = [
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
], F5 = Ce("gift", P5);
const I5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], V5 = Ce("globe", I5);
const H5 = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
], $5 = Ce("heart", H5);
const B5 = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], q5 = Ce("house", B5);
const W5 = [
  ["path", { d: "M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8", key: "18ogeb" }]
], Y5 = Ce("infinity", W5);
const G5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], Q5 = Ce("info", G5);
const K5 = [
  ["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }],
  ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
  ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }]
], X5 = Ce("key", K5);
const J5 = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
], Z5 = Ce("lightbulb", J5);
const eD = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], tD = Ce("link", eD);
const nD = [
  ["path", { d: "M13 5h8", key: "a7qcls" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 19h8", key: "c3s6r1" }],
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }]
], rD = Ce("list-checks", nD);
const aD = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
], iD = Ce("lock-open", aD);
const oD = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], lD = Ce("lock", oD);
const uD = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], sD = Ce("mail", uD);
const cD = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], fD = Ce("map-pin", cD);
const dD = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
], pD = Ce("message-circle", dD);
const vD = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
], hD = Ce("message-square", vD);
const mD = [["path", { d: "M5 12h14", key: "1ays0h" }]], yD = Ce("minus", mD);
const gD = [
  ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]
], _D = Ce("navigation", gD);
const SD = [
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
      key: "1miecu"
    }
  ]
], CD = Ce("paperclip", SD);
const ED = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], xD = Ce("pause", ED);
const bD = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], wD = Ce("phone", bD);
const RD = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], kD = Ce("play", RD);
const TD = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], DD = Ce("plus", TD);
const OD = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], ND = Ce("refresh-cw", OD);
const MD = [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }]
], LD = Ce("repeat", MD);
const jD = [
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
], AD = Ce("rocket", jD);
const UD = [
  ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
], zD = Ce("rotate-cw", UD);
const PD = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], FD = Ce("search", PD);
const ID = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], VD = Ce("send", ID);
const HD = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], $D = Ce("settings", HD);
const BD = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
], qD = Ce("share-2", BD);
const WD = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
], YD = Ce("shield", WD);
const GD = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
], QD = Ce("square-pen", GD);
const KD = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], XD = Ce("star", KD);
const JD = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], ZD = Ce("target", JD);
const eO = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], tO = Ce("timer", eO);
const nO = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], rO = Ce("trash-2", nO);
const aO = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
], iO = Ce("trending-down", aO);
const oO = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
], lO = Ce("trending-up", oO);
const uO = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], sO = Ce("triangle-alert", uO);
const cO = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], fO = Ce("upload", cO);
const dO = [
  ["path", { d: "m16 11 2 2 4-4", key: "9rsbq5" }],
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
], pO = Ce("user-check", dO);
const vO = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
], hO = Ce("user-plus", vO);
const mO = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], yO = Ce("user", mO);
const gO = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
], _O = Ce("users", gO);
const SO = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
], CO = Ce("workflow", SO);
const EO = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], xO = Ce("x", EO);
const bO = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
], wO = Ce("zap", bO), RO = "_card_1aafq_1", kO = "_header_1aafq_11", TO = "_headerTitle_1aafq_11", DO = "_headerSubtitle_1aafq_16", OO = "_textContent_1aafq_21", NO = "_button_1aafq_44", MO = "_primary_1aafq_57", LO = "_secondary_1aafq_68", jO = "_ghost_1aafq_76", AO = "_buttonGroup_1aafq_88", UO = "_horizontal_1aafq_92", zO = "_vertical_1aafq_95", PO = "_form_1aafq_99", FO = "_formField_1aafq_105", IO = "_fieldLabel_1aafq_110", VO = "_fieldHint_1aafq_115", HO = "_input_1aafq_120", $O = "_textarea_1aafq_121", BO = "_select_1aafq_122", qO = "_error_1aafq_144", WO = "_checkboxWrapper_1aafq_164", YO = "_radioWrapper_1aafq_165", GO = "_radioGroup_1aafq_185", QO = "_checkboxGroup_1aafq_191", KO = "_list_1aafq_197", XO = "_listHeading_1aafq_197", JO = "_listItems_1aafq_205", ZO = "_listItem_1aafq_205", eN = "_listItemIcon_1aafq_225", tN = "_listItemContent_1aafq_235", nN = "_listItemTitle_1aafq_238", rN = "_listItemSubtitle_1aafq_244", aN = "_listItemAction_1aafq_249", iN = "_actionButton_1aafq_249", oN = "_stats_1aafq_268", lN = "_statsNumber_1aafq_271", uN = "_statsLabel_1aafq_277", sN = "_profileTile_1aafq_283", cN = "_profileIcon_1aafq_288", fN = "_profileContent_1aafq_298", dN = "_profileTitle_1aafq_298", pN = "_profileLabel_1aafq_304", vN = "_miniCard_1aafq_310", hN = "_miniCardBlock_1aafq_320", mN = "_steps_1aafq_326", yN = "_stepsItem_1aafq_343", gN = "_stepsTitle_1aafq_358", _N = "_stepsDetails_1aafq_364", SN = "_sectionBlock_1aafq_369", CN = "_section_1aafq_369", EN = "_expanded_1aafq_380", xN = "_sectionTrigger_1aafq_380", bN = "_triggerIcon_1aafq_401", wN = "_rotated_1aafq_404", RN = "_sectionContent_1aafq_408", kN = "_icon_1aafq_415", TN = "_streamingContainer_1aafq_421", DN = "_streamingIndicator_1aafq_426", ON = "_pulse_1aafq_1", NN = "_skeletonLoader_1aafq_438", MN = "_skeletonShimmer_1aafq_453", LN = "_shimmer_1aafq_1", Ye = {
  card: RO,
  header: kO,
  headerTitle: TO,
  headerSubtitle: DO,
  textContent: OO,
  button: NO,
  primary: MO,
  secondary: LO,
  ghost: jO,
  buttonGroup: AO,
  horizontal: UO,
  vertical: zO,
  form: PO,
  formField: FO,
  fieldLabel: IO,
  fieldHint: VO,
  input: HO,
  textarea: $O,
  select: BO,
  error: qO,
  checkboxWrapper: WO,
  radioWrapper: YO,
  radioGroup: GO,
  checkboxGroup: QO,
  list: KO,
  listHeading: XO,
  listItems: JO,
  listItem: ZO,
  listItemIcon: eN,
  listItemContent: tN,
  listItemTitle: nN,
  listItemSubtitle: rN,
  listItemAction: aN,
  actionButton: iN,
  stats: oN,
  statsNumber: lN,
  statsLabel: uN,
  profileTile: sN,
  profileIcon: cN,
  profileContent: fN,
  profileTitle: dN,
  profileLabel: pN,
  miniCard: vN,
  miniCardBlock: hN,
  steps: mN,
  stepsItem: yN,
  stepsTitle: gN,
  stepsDetails: _N,
  sectionBlock: SN,
  section: CN,
  expanded: EN,
  sectionTrigger: xN,
  triggerIcon: bN,
  rotated: wN,
  sectionContent: RN,
  icon: kN,
  streamingContainer: TN,
  streamingIndicator: DN,
  pulse: ON,
  skeletonLoader: NN,
  skeletonShimmer: MN,
  shimmer: LN
}, jN = {
  // Arrows & Navigation
  target: ZD,
  "arrow-right": E4,
  "arrow-left": S4,
  "arrow-up": b4,
  "arrow-down": g4,
  "chevron-down": LE,
  "chevron-right": Z4,
  "chevron-left": X4,
  "chevron-up": t5,
  repeat: LD,
  "refresh-cw": ND,
  "rotate-cw": zD,
  navigation: _D,
  compass: h5,
  // Multimedia
  play: kD,
  pause: xD,
  // Text & Lists
  "list-checks": rD,
  // Development
  workflow: CO,
  // Time
  timer: tO,
  clock: f5,
  calendar: I4,
  // Shopping & Business
  boxes: j4,
  briefcase: U4,
  building: P4,
  // Math & Charts
  infinity: Y5,
  plus: DD,
  minus: yD,
  "line-chart": H4,
  "bar-chart": B4,
  "pie-chart": W4,
  "trending-up": lO,
  "trending-down": iO,
  activity: m4,
  // Actions
  check: G4,
  x: xO,
  edit: QD,
  trash: rO,
  copy: y5,
  share: qD,
  "external-link": C5,
  search: FD,
  filter: z5,
  settings: $D,
  download: _5,
  upload: fO,
  send: VD,
  zap: wO,
  // Users
  user: yO,
  users: _O,
  "user-plus": hO,
  "user-check": pO,
  // Communication
  mail: sD,
  phone: wD,
  "message-circle": pD,
  "message-square": hD,
  bell: O4,
  "bell-off": T4,
  // Status & Favorites
  star: XD,
  heart: $5,
  bookmark: M4,
  flag: N5,
  award: R4,
  gift: F5,
  // Info & Alerts
  "help-circle": l5,
  info: Q5,
  "alert-circle": r5,
  "alert-triangle": sO,
  "check-circle": i5,
  "x-circle": s5,
  // View
  eye: w5,
  "eye-off": x5,
  // Security
  lock: lD,
  unlock: iD,
  key: X5,
  shield: YD,
  // Links & Files
  link: tD,
  paperclip: CD,
  "file-text": k5,
  file: D5,
  folder: A5,
  "folder-open": L5,
  // Location
  home: q5,
  "map-pin": fD,
  globe: V5,
  // Ideas & Energy
  lightbulb: Z5,
  rocket: AD,
  coffee: p5
}, jE = ({ name: f, size: p = 18 }) => {
  const v = jN[f.toLowerCase()];
  return v ? /* @__PURE__ */ D.jsx("span", { className: Ye.icon, children: /* @__PURE__ */ D.jsx(v, { size: p }) }) : (console.warn(`Icon "${f}" not found in registry`), /* @__PURE__ */ D.jsx("span", { className: Ye.icon, style: { width: p, height: p }, children: "•" }));
}, AN = ({ title: f, subtitle: p }) => /* @__PURE__ */ D.jsxs("div", { className: Ye.header, children: [
  /* @__PURE__ */ D.jsx("h3", { className: Ye.headerTitle, children: f }),
  p && /* @__PURE__ */ D.jsx("p", { className: Ye.headerSubtitle, children: p })
] });
function UN(f) {
  return f.split(/\n\n+/).map((v, S) => {
    let b = v;
    const E = /\*\*(.*?)\*\*/g, m = v.split(E);
    m.length > 1 && (b = m.map((R, w) => w % 2 === 1 ? /* @__PURE__ */ D.jsx("strong", { children: R }, w) : R));
    const T = /`(.*?)`/g;
    return typeof b == "string" && b.match(T) && (b = b.split(T).map((w, M) => M % 2 === 1 ? /* @__PURE__ */ D.jsx("code", { children: w }, M) : w)), /* @__PURE__ */ D.jsx("p", { children: b }, S);
  });
}
const zN = ({ textMarkdown: f }) => /* @__PURE__ */ D.jsx("div", { className: Ye.textContent, children: UN(f) }), PN = ({
  children: f,
  name: p,
  variant: v = "primary",
  disabled: S = !1,
  action: b,
  onAction: E
}) => {
  const m = () => {
    b && E && E(b);
  }, T = ["submit", "save", "confirm", "set", "create", "send", "apply"], R = (p || "").toLowerCase(), w = (typeof f == "string" ? f : "").toLowerCase(), M = b?.type === "submit_form" || T.some((F) => R.includes(F)) || T.some((F) => w.includes(F));
  return /* @__PURE__ */ D.jsx(
    "button",
    {
      className: `${Ye.button} ${Ye[v]}`,
      disabled: S,
      onClick: m,
      type: M ? "submit" : "button",
      children: f
    }
  );
}, FN = ({
  variant: f = "horizontal",
  children: p,
  renderComponent: v
}) => /* @__PURE__ */ D.jsx("div", { className: `${Ye.buttonGroup} ${Ye[f]}`, children: p.map((S, b) => /* @__PURE__ */ D.jsx(Ja.Fragment, { children: v(S) }, b)) }), IN = ({ children: f, renderComponent: p }) => !f || !Array.isArray(f) ? /* @__PURE__ */ D.jsx("div", { className: Ye.card }) : /* @__PURE__ */ D.jsx("div", { className: Ye.card, children: f.map((v, S) => /* @__PURE__ */ D.jsx(Ja.Fragment, { children: p(v) }, S)) }), VN = ({ heading: f, items: p, onAction: v }) => /* @__PURE__ */ D.jsxs("div", { className: Ye.list, children: [
  f && /* @__PURE__ */ D.jsx("h4", { className: Ye.listHeading, children: f }),
  /* @__PURE__ */ D.jsx("div", { className: Ye.listItems, children: p.map((S, b) => /* @__PURE__ */ D.jsxs("div", { className: Ye.listItem, children: [
    S.iconName && /* @__PURE__ */ D.jsx("div", { className: Ye.listItemIcon, children: /* @__PURE__ */ D.jsx(jE, { name: S.iconName, size: 18 }) }),
    /* @__PURE__ */ D.jsxs("div", { className: Ye.listItemContent, children: [
      /* @__PURE__ */ D.jsx("p", { className: Ye.listItemTitle, children: S.title }),
      S.subtitle && /* @__PURE__ */ D.jsx("p", { className: Ye.listItemSubtitle, children: S.subtitle })
    ] }),
    S.itemAction && /* @__PURE__ */ D.jsx("div", { className: Ye.listItemAction, children: /* @__PURE__ */ D.jsx(
      "button",
      {
        className: Ye.actionButton,
        onClick: () => v?.(S.itemAction.action),
        children: S.itemAction.label
      }
    ) })
  ] }, b)) })
] }), HN = ({ number: f, label: p }) => /* @__PURE__ */ D.jsxs("div", { className: Ye.stats, children: [
  /* @__PURE__ */ D.jsx("p", { className: Ye.statsNumber, children: f }),
  /* @__PURE__ */ D.jsx("p", { className: Ye.statsLabel, children: p })
] }), $N = ({
  title: f,
  label: p,
  child: v,
  renderComponent: S
}) => /* @__PURE__ */ D.jsxs("div", { className: Ye.profileTile, children: [
  v && /* @__PURE__ */ D.jsx("div", { className: Ye.profileIcon, children: S(v) }),
  /* @__PURE__ */ D.jsxs("div", { className: Ye.profileContent, children: [
    /* @__PURE__ */ D.jsx("p", { className: Ye.profileTitle, children: f }),
    p && /* @__PURE__ */ D.jsx("p", { className: Ye.profileLabel, children: p })
  ] })
] }), BN = ({
  lhs: f,
  rhs: p,
  renderComponent: v
}) => /* @__PURE__ */ D.jsxs("div", { className: Ye.miniCard, children: [
  /* @__PURE__ */ D.jsx("div", { className: Ye.miniCardLhs, children: v(f) }),
  p && /* @__PURE__ */ D.jsx("div", { className: Ye.miniCardRhs, children: v(p) })
] }), qN = ({
  children: f,
  renderComponent: p
}) => /* @__PURE__ */ D.jsx("div", { className: Ye.miniCardBlock, children: f.map((v, S) => /* @__PURE__ */ D.jsx(Ja.Fragment, { children: p(v) }, S)) }), WN = ({
  title: f,
  details: p,
  renderComponent: v
}) => /* @__PURE__ */ D.jsxs("div", { className: Ye.stepsItem, children: [
  /* @__PURE__ */ D.jsx("h4", { className: Ye.stepsTitle, children: f }),
  p && /* @__PURE__ */ D.jsx("div", { className: Ye.stepsDetails, children: v(p) })
] }), YN = ({
  children: f,
  renderComponent: p
}) => /* @__PURE__ */ D.jsx("div", { className: Ye.steps, children: f.map((v, S) => /* @__PURE__ */ D.jsx(Ja.Fragment, { children: p(v) }, S)) }), GN = ({
  isFoldable: f = !0,
  sections: p,
  renderComponent: v
}) => {
  const [S, b] = Be.useState(
    // If not foldable, expand all sections by default
    new Set(f ? [] : p.map((m) => m.value))
  ), E = (m) => {
    f && b((T) => {
      const R = new Set(T);
      return R.has(m) ? R.delete(m) : R.add(m), R;
    });
  };
  return /* @__PURE__ */ D.jsx("div", { className: Ye.sectionBlock, children: p.map((m) => {
    const T = S.has(m.value);
    return /* @__PURE__ */ D.jsxs(
      "div",
      {
        className: `${Ye.section} ${T ? Ye.expanded : ""}`,
        children: [
          /* @__PURE__ */ D.jsxs(
            "button",
            {
              className: Ye.sectionTrigger,
              onClick: () => E(m.value),
              type: "button",
              children: [
                /* @__PURE__ */ D.jsx("span", { children: m.trigger }),
                f && /* @__PURE__ */ D.jsx("span", { className: `${Ye.triggerIcon} ${T ? Ye.rotated : ""}`, children: /* @__PURE__ */ D.jsx(LE, { size: 16 }) })
              ]
            }
          ),
          (T || !f) && /* @__PURE__ */ D.jsx("div", { className: Ye.sectionContent, children: m.content.map((R, w) => /* @__PURE__ */ D.jsx(Ja.Fragment, { children: v(R) }, w)) })
        ]
      },
      m.value
    );
  }) });
}, QN = ({
  name: f,
  placeholder: p,
  value: v = "",
  type: S = "text",
  rules: b,
  onChange: E
}) => {
  const [m, T] = Be.useState(v), [R, w] = Be.useState(null), M = (F) => {
    const I = F.target.value;
    T(I), b?.required && !I ? w("This field is required") : b?.minLength && I.length < b.minLength ? w(`Minimum ${b.minLength} characters required`) : w(null), E?.(f, I);
  };
  return /* @__PURE__ */ D.jsx(
    "input",
    {
      type: S,
      name: f,
      placeholder: p,
      value: m,
      onChange: M,
      className: `${Ye.input} ${R ? Ye.error : ""}`
    }
  );
}, KN = ({
  name: f,
  placeholder: p,
  value: v = "",
  rows: S = 3,
  rules: b,
  onChange: E
}) => {
  const [m, T] = Be.useState(v), [R, w] = Be.useState(null), M = (F) => {
    const I = F.target.value;
    T(I), b?.required && !I ? w("This field is required") : b?.minLength && I.length < b.minLength ? w(`Minimum ${b.minLength} characters required`) : w(null), E?.(f, I);
  };
  return /* @__PURE__ */ D.jsx(
    "textarea",
    {
      name: f,
      placeholder: p,
      value: m,
      rows: S,
      onChange: M,
      className: `${Ye.textarea} ${R ? Ye.error : ""}`
    }
  );
}, XN = ({
  name: f,
  placeholder: p,
  value: v = "",
  options: S = [],
  onChange: b
}) => {
  const [E, m] = Be.useState(v), T = (w) => {
    const M = w.target.value;
    m(M), b?.(f, M);
  }, R = S && Array.isArray(S) ? S : [];
  return /* @__PURE__ */ D.jsxs(
    "select",
    {
      name: f,
      value: E,
      onChange: T,
      className: Ye.select,
      children: [
        p && /* @__PURE__ */ D.jsx("option", { value: "", children: p }),
        R.map((w) => /* @__PURE__ */ D.jsx("option", { value: w.value, children: w.label }, w.value))
      ]
    }
  );
}, JN = ({
  name: f,
  label: p,
  checked: v = !1,
  onChange: S
}) => {
  const [b, E] = Be.useState(v), m = (T) => {
    const R = T.target.checked;
    E(R), S?.(f, R);
  };
  return /* @__PURE__ */ D.jsxs("div", { className: Ye.checkboxWrapper, children: [
    /* @__PURE__ */ D.jsx(
      "input",
      {
        type: "checkbox",
        id: f,
        name: f,
        checked: b,
        onChange: m
      }
    ),
    /* @__PURE__ */ D.jsx("label", { htmlFor: f, children: p })
  ] });
}, ZN = ({
  name: f,
  options: p = [],
  value: v = "",
  onChange: S
}) => {
  const [b, E] = Be.useState(v), m = (T) => {
    const R = T.target.value;
    E(R), S?.(f, R);
  };
  return !p || !Array.isArray(p) || p.length === 0 ? /* @__PURE__ */ D.jsx("div", { className: Ye.radioGroup, children: "No options available" }) : /* @__PURE__ */ D.jsx("div", { className: Ye.radioGroup, children: p.map((T) => /* @__PURE__ */ D.jsxs("div", { className: Ye.radioWrapper, children: [
    /* @__PURE__ */ D.jsx(
      "input",
      {
        type: "radio",
        id: `${f}-${T.value}`,
        name: f,
        value: T.value,
        checked: b === T.value,
        onChange: m
      }
    ),
    /* @__PURE__ */ D.jsx("label", { htmlFor: `${f}-${T.value}`, children: T.label })
  ] }, T.value)) });
}, eM = ({
  name: f,
  options: p = [],
  values: v = [],
  onChange: S
}) => {
  const [b, E] = Be.useState(v), m = (T, R) => {
    const w = R ? [...b, T] : b.filter((M) => M !== T);
    E(w), S?.(f, w);
  };
  return !p || !Array.isArray(p) || p.length === 0 ? /* @__PURE__ */ D.jsx("div", { className: Ye.checkboxGroup, children: "No options available" }) : /* @__PURE__ */ D.jsx("div", { className: Ye.checkboxGroup, children: p.map((T) => /* @__PURE__ */ D.jsxs("div", { className: Ye.checkboxWrapper, children: [
    /* @__PURE__ */ D.jsx(
      "input",
      {
        type: "checkbox",
        id: `${f}-${T.value}`,
        name: f,
        value: T.value,
        checked: b.includes(T.value),
        onChange: (R) => m(T.value, R.target.checked)
      }
    ),
    /* @__PURE__ */ D.jsx("label", { htmlFor: `${f}-${T.value}`, children: T.label })
  ] }, T.value)) });
}, tM = ({
  name: f,
  placeholder: p,
  value: v = "",
  min: S,
  max: b,
  onChange: E
}) => {
  const [m, T] = Be.useState(v), R = (w) => {
    const M = w.target.value;
    T(M), E?.(f, M);
  };
  return /* @__PURE__ */ D.jsx(
    "input",
    {
      type: "date",
      name: f,
      placeholder: p,
      value: m,
      min: S,
      max: b,
      onChange: R,
      className: Ye.input
    }
  );
}, nM = ({
  label: f,
  hint: p,
  children: v,
  renderComponent: S
}) => /* @__PURE__ */ D.jsxs("div", { className: Ye.formField, children: [
  f && /* @__PURE__ */ D.jsx("label", { className: Ye.fieldLabel, children: f }),
  S(v),
  p && /* @__PURE__ */ D.jsx("span", { className: Ye.fieldHint, children: p })
] }), rM = ({
  name: f,
  children: p,
  buttons: v,
  onAction: S,
  renderComponent: b
}) => {
  const [E, m] = Be.useState({}), T = Be.useCallback((w, M) => {
    m((F) => ({ ...F, [w]: M }));
  }, []), R = (w) => {
    w.preventDefault(), S ? S({ type: "submit_form", props: { formName: f, formData: E } }, E) : console.warn("Form onAction is not defined");
  };
  return /* @__PURE__ */ D.jsxs("form", { className: Ye.form, onSubmit: R, name: f, children: [
    p.map((w, M) => /* @__PURE__ */ D.jsx(
      nM,
      {
        label: w.label,
        hint: w.hint,
        children: {
          ...w.children,
          props: {
            ...w.children.props,
            onChange: T
          }
        },
        renderComponent: b
      },
      M
    )),
    v && b(v)
  ] });
}, aM = ({
  name: f = "radio",
  value: p,
  label: v,
  checked: S = !1,
  onChange: b
}) => {
  const [E, m] = Be.useState(S), T = (R) => {
    const w = R.target.checked;
    m(w), w && b && b(f, p);
  };
  return /* @__PURE__ */ D.jsxs("div", { className: Ye.radioWrapper, children: [
    /* @__PURE__ */ D.jsx(
      "input",
      {
        type: "radio",
        id: `${f}-${p}`,
        name: f,
        value: p,
        checked: E,
        onChange: T
      }
    ),
    /* @__PURE__ */ D.jsx("label", { htmlFor: `${f}-${p}`, children: v })
  ] });
}, iM = ({
  name: f = "checkbox",
  value: p,
  label: v,
  checked: S = !1,
  onChange: b
}) => {
  const [E, m] = Be.useState(S), T = (R) => {
    const w = R.target.checked;
    m(w), b && b(f, p, w);
  };
  return /* @__PURE__ */ D.jsxs("div", { className: Ye.checkboxWrapper, children: [
    /* @__PURE__ */ D.jsx(
      "input",
      {
        type: "checkbox",
        id: `${f}-${p}`,
        name: f,
        value: p,
        checked: E,
        onChange: T
      }
    ),
    /* @__PURE__ */ D.jsx("label", { htmlFor: `${f}-${p}`, children: v })
  ] });
}, AE = ({
  component: f,
  onAction: p
}) => {
  const v = Be.useCallback((S) => {
    if (!S || !S.component)
      return console.warn("Invalid component definition:", S), null;
    const { component: b, props: E } = S, m = { ...E, onAction: p };
    switch (b) {
      // Basic Components
      case "Icon":
        return /* @__PURE__ */ D.jsx(jE, { ...m });
      case "Header":
        return /* @__PURE__ */ D.jsx(AN, { ...m });
      case "TextContent":
        return /* @__PURE__ */ D.jsx(zN, { ...m });
      // Button Components
      case "Button":
        return /* @__PURE__ */ D.jsx(PN, { ...m });
      case "ButtonGroup":
        return /* @__PURE__ */ D.jsx(
          FN,
          {
            ...m,
            renderComponent: v
          }
        );
      // Layout Components
      case "Card":
        return /* @__PURE__ */ D.jsx(
          IN,
          {
            ...m,
            renderComponent: v
          }
        );
      // List Component
      case "List":
        return /* @__PURE__ */ D.jsx(VN, { ...m });
      // Stats Component
      case "Stats":
        return /* @__PURE__ */ D.jsx(HN, { ...m });
      // ProfileTile Component
      case "ProfileTile":
        return /* @__PURE__ */ D.jsx(
          $N,
          {
            ...m,
            renderComponent: v
          }
        );
      // MiniCard Components
      case "MiniCard":
        return /* @__PURE__ */ D.jsx(
          BN,
          {
            ...m,
            renderComponent: v
          }
        );
      case "MiniCardBlock":
        return /* @__PURE__ */ D.jsx(
          qN,
          {
            ...m,
            renderComponent: v
          }
        );
      // Steps Components
      case "Steps":
        return /* @__PURE__ */ D.jsx(
          YN,
          {
            ...m,
            renderComponent: v
          }
        );
      case "StepsItem":
        return /* @__PURE__ */ D.jsx(
          WN,
          {
            ...m,
            renderComponent: v
          }
        );
      // Section Components
      case "SectionBlock":
        return /* @__PURE__ */ D.jsx(
          GN,
          {
            ...m,
            renderComponent: v
          }
        );
      // Form Components
      case "Form":
        return /* @__PURE__ */ D.jsx(
          rM,
          {
            ...m,
            renderComponent: v
          }
        );
      case "Input":
        return /* @__PURE__ */ D.jsx(QN, { ...m });
      case "TextArea":
        return /* @__PURE__ */ D.jsx(KN, { ...m });
      case "Select":
        return /* @__PURE__ */ D.jsx(XN, { ...m });
      case "Checkbox":
        return /* @__PURE__ */ D.jsx(JN, { ...m });
      case "RadioGroup":
        return /* @__PURE__ */ D.jsx(ZN, { ...m });
      case "CheckBoxGroup":
        return /* @__PURE__ */ D.jsx(eM, { ...m });
      case "DatePicker":
        return /* @__PURE__ */ D.jsx(tM, { ...m });
      case "RadioItem":
        return /* @__PURE__ */ D.jsx(aM, { ...m });
      case "CheckBoxItem":
        return /* @__PURE__ */ D.jsx(iM, { ...m });
      default:
        return console.warn(`Unknown component: ${b}`), /* @__PURE__ */ D.jsxs("div", { style: {
          padding: "8px",
          background: "rgba(255,0,0,0.1)",
          borderRadius: "4px",
          fontSize: "12px",
          color: "#ff6b6b"
        }, children: [
          "Unknown component: ",
          b
        ] });
    }
  }, [p]);
  return /* @__PURE__ */ D.jsx(D.Fragment, { children: v(f) });
};
function UE(f) {
  try {
    const p = f.indexOf('<content thesys="true">');
    if (p === -1)
      return oE(f);
    const v = f.substring(p + 23), S = v.indexOf("</content>");
    let b = S !== -1 ? v.substring(0, S).trim() : v.trim();
    b = b.replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39;/g, "'").replace(/&apos;/g, "'");
    try {
      const E = JSON.parse(b);
      if (E.component)
        return E;
    } catch {
      return oM(b);
    }
    return oE(f);
  } catch (p) {
    return console.error("parseStreamingGenUI - Error:", p), null;
  }
}
function oM(f) {
  let p = null, v = -1, S = -1;
  const b = /"component"\s*:\s*"([^"]+)"/g;
  let E;
  for (; (E = b.exec(f)) !== null; ) {
    const m = f.substring(0, E.index), T = (m.match(/\{/g) || []).length - (m.match(/\}/g) || []).length;
    T >= 1 && T > S && (p = E, v = E.index, S = T);
  }
  if (p && p[1]) {
    const m = p[1], R = f.substring(v + p[0].length).match(/"props"\s*:\s*\{([\s\S]*?)(\}|$)/);
    let w = {};
    if (R && R[1]) {
      const M = R[1], F = /"([^"]+)"\s*:\s*"([^"]*)"|"([^"]+)"\s*:\s*(\d+|true|false|null)/g;
      let I;
      for (; (I = F.exec(M)) !== null; ) {
        const B = I[1] || I[3], ie = I[2] || I[4];
        B && (w[B] = ie === "true" ? !0 : ie === "false" ? !1 : ie === "null" ? null : ie);
      }
      M.includes('"children"') && M.includes("[") && (w.children = []);
    }
    return {
      component: {
        component: m,
        props: w
      },
      error: null
    };
  }
  return null;
}
function oE(f) {
  if (f.trim().startsWith("{"))
    try {
      const p = JSON.parse(f);
      if (p.component)
        return p;
    } catch {
      const v = f.match(/"component"\s*:\s*"([^"]+)"/);
      return v && v[1] ? {
        component: {
          component: v[1],
          props: {}
        },
        error: null
      } : null;
    }
  return null;
}
const lM = ({
  content: f,
  isStreaming: p,
  onAction: v
}) => {
  const [S, b] = Be.useState(null);
  return Be.useEffect(() => {
    if (!f) {
      b(null);
      return;
    }
    const E = UE(f);
    if (E?.component) {
      const m = E.component;
      if (m && typeof m == "object" && "component" in m) {
        const T = m.component, R = m.props || {};
        typeof T == "string" ? b({
          component: T,
          props: R
        }) : T && typeof T == "object" && "component" in T && b(T);
      }
    }
  }, [f]), S ? /* @__PURE__ */ D.jsxs("div", { className: Ye.streamingContainer, children: [
    p && /* @__PURE__ */ D.jsx("div", { className: Ye.streamingIndicator, children: /* @__PURE__ */ D.jsx("span", { children: "Building interface..." }) }),
    /* @__PURE__ */ D.jsx(AE, { component: S, onAction: v })
  ] }) : p ? /* @__PURE__ */ D.jsx("div", { className: Ye.streamingContainer, children: /* @__PURE__ */ D.jsxs("div", { className: Ye.skeletonLoader, children: [
    /* @__PURE__ */ D.jsx("div", { className: Ye.skeletonShimmer }),
    /* @__PURE__ */ D.jsx("span", { children: "Generating interface..." })
  ] }) }) : null;
};
function uM(f) {
  const p = {
    "&quot;": '"',
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&nbsp;": " "
  };
  return f.replace(/&(?:quot|amp|lt|gt|apos|#39|nbsp);/g, (v) => p[v] || v);
}
function sM(f) {
  try {
    const p = f.match(/<content\s+thesys="true">([\s\S]*?)<\/content>/);
    if (p && p[1]) {
      const v = uM(p[1].trim());
      return JSON.parse(v);
    }
    if (f.trim().startsWith("{")) {
      const v = JSON.parse(f);
      if (v.component)
        return v;
    }
    return null;
  } catch (p) {
    return console.error("Failed to parse GenUI response:", p), null;
  }
}
function cM(f) {
  return !!(f.includes('<content thesys="true">') || f.trim().startsWith("{") && f.includes('"component"'));
}
function fM(f) {
  const p = f.indexOf('<content thesys="true">');
  return p > 0 ? f.substring(0, p).trim() : "";
}
const dM = ({
  message: f,
  onAction: p,
  onUpdateMessage: v
}) => {
  const S = f.role === "user", b = f.role === "assistant", E = Be.useMemo(() => f.content ? cM(f.content) : !1, [f.content]), m = Be.useMemo(() => {
    if (!f.content) return null;
    if (E) {
      if (f.isStreaming) {
        const M = UE(f.content);
        return M?.component ? M : null;
      }
      return sM(f.content);
    }
    return null;
  }, [f.content, f.isStreaming, E]), T = Be.useMemo(() => f.content ? fM(f.content) : "", [f.content]), R = Be.useCallback((M, F) => {
    if (!p) return;
    const I = {
      type: M.type,
      params: {
        ...M.props,
        formData: F
      }
    };
    console.log("event", I), console.log("formData", F), p(I);
  }, [p]), w = () => E ? /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
    T && /* @__PURE__ */ D.jsx("div", { className: au.textContent, children: T }),
    /* @__PURE__ */ D.jsx(
      lM,
      {
        content: f.content,
        isStreaming: f.isStreaming || !1,
        onAction: R
      }
    )
  ] }) : m?.component ? /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
    T && /* @__PURE__ */ D.jsx("div", { className: au.textContent, children: T }),
    /* @__PURE__ */ D.jsx(
      AE,
      {
        component: m.component,
        onAction: R
      }
    )
  ] }) : /* @__PURE__ */ D.jsx("div", { className: au.textContent, children: f.content || (f.isStreaming ? "" : "No response") });
  return /* @__PURE__ */ D.jsx(
    "div",
    {
      className: `${au.messageContainer} ${S ? au.user : au.assistant}`,
      children: S ? /* @__PURE__ */ D.jsx("div", { className: au.userMessage, children: /* @__PURE__ */ D.jsx("p", { children: f.content }) }) : b ? /* @__PURE__ */ D.jsxs("div", { className: au.assistantMessage, children: [
        f.isStreaming && !f.content && /* @__PURE__ */ D.jsxs("div", { className: au.streamingIndicator, children: [
          /* @__PURE__ */ D.jsx("span", {}),
          /* @__PURE__ */ D.jsx("span", {}),
          /* @__PURE__ */ D.jsx("span", {})
        ] }),
        w()
      ] }) : null
    }
  );
}, pM = "_overlay_271nu_1", vM = "_modal_271nu_21", hM = "_header_271nu_42", mM = "_closeButton_271nu_55", yM = "_selectedInfo_271nu_77", gM = "_inputGroup_271nu_99", _M = "_actions_271nu_130", SM = "_cancelBtn_271nu_136", CM = "_confirmBtn_271nu_137", iu = {
  overlay: pM,
  modal: vM,
  header: hM,
  closeButton: mM,
  selectedInfo: yM,
  inputGroup: gM,
  actions: _M,
  cancelBtn: SM,
  confirmBtn: CM
}, EM = ({
  isOpen: f,
  onClose: p,
  humanFriendlyMessage: v,
  llmFriendlyMessage: S,
  onConfirm: b
}) => {
  const [E, m] = Be.useState(S);
  if (Be.useEffect(() => {
    m(S);
  }, [S]), Be.useEffect(() => {
    const R = (w) => {
      w.key === "Escape" && p();
    };
    if (f)
      return window.addEventListener("keydown", R), () => window.removeEventListener("keydown", R);
  }, [f, p]), !f) return null;
  const T = (R) => {
    R.preventDefault(), E.trim() && b(E.trim());
  };
  return /* @__PURE__ */ D.jsx("div", { className: iu.overlay, onClick: p, children: /* @__PURE__ */ D.jsxs("div", { className: iu.modal, onClick: (R) => R.stopPropagation(), children: [
    /* @__PURE__ */ D.jsxs("div", { className: iu.header, children: [
      /* @__PURE__ */ D.jsx("h2", { children: "Edit Your Response" }),
      /* @__PURE__ */ D.jsx("button", { className: iu.closeButton, onClick: p, children: /* @__PURE__ */ D.jsx(
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
    /* @__PURE__ */ D.jsxs("form", { onSubmit: T, children: [
      /* @__PURE__ */ D.jsxs("div", { className: iu.selectedInfo, children: [
        /* @__PURE__ */ D.jsx("label", { children: "Your Selection" }),
        /* @__PURE__ */ D.jsx("p", { children: v })
      ] }),
      /* @__PURE__ */ D.jsxs("div", { className: iu.inputGroup, children: [
        /* @__PURE__ */ D.jsx("label", { htmlFor: "editMessage", children: "Edit message before sending:" }),
        /* @__PURE__ */ D.jsx(
          "textarea",
          {
            id: "editMessage",
            value: E,
            onChange: (R) => m(R.target.value),
            placeholder: "Edit your message...",
            rows: 4,
            autoFocus: !0
          }
        )
      ] }),
      /* @__PURE__ */ D.jsxs("div", { className: iu.actions, children: [
        /* @__PURE__ */ D.jsx("button", { type: "button", className: iu.cancelBtn, onClick: p, children: "Cancel" }),
        /* @__PURE__ */ D.jsx(
          "button",
          {
            type: "submit",
            className: iu.confirmBtn,
            disabled: !E.trim(),
            children: "Send Message"
          }
        )
      ] })
    ] })
  ] }) });
}, J1 = (f) => `<content thesys="true">${JSON.stringify({ component: f, error: null })}</content>`, xM = () => `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, bM = (f) => {
  const { sendMessage: p, setPendingAction: v, setIsModalOpen: S, context: b, addMessage: E, updateMessage: m } = f;
  return (T) => {
    switch (console.log("Action received:", T), T.type) {
      case "continue_conversation":
        if (T.params) {
          const { humanFriendlyMessage: R, llmFriendlyMessage: w, prompt: M } = T.params;
          M ? p(M) : R && w && (v({
            humanFriendlyMessage: R,
            llmFriendlyMessage: w
          }), S(!0));
        }
        break;
      case "open_url":
        T.params?.url && window.open(T.params.url, "_blank", "noopener,noreferrer");
        break;
      case "submit_form":
        if (T.params?.formData) {
          const R = T.params.formData, w = T.params.formName || "form", M = Object.entries(R).filter(([I, B]) => B !== void 0 && B !== "").map(([I, B]) => `${I.replace(/_/g, " ")}: ${B}`).join(`
`), F = `Form submitted: ${w}

${M}`;
          console.log("Sending form data to LLM:", F), p(F);
        }
        break;
      case "create_suggestion_request":
        if (T.params) {
          const { personName: R, personTitle: w, companyName: M } = T.params, F = {
            request_panel_title: `Suggestion Request for ${R}`,
            request_header_title: `People to introduce to ${R}`,
            request_context: `Find people from my network to introduce to ${R}, who is ${w} at ${M}`,
            status: "suggestion",
            user_id: 3,
            copilot_mode: "loop"
          }, I = xM();
          E(b, {
            id: I,
            role: "assistant",
            content: J1({
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
          }), xy.getState().createSuggestionRequest(F).then(() => {
            const { createSuggestionRequestError: B } = xy.getState(), ie = J1(B ? {
              component: "Card",
              props: {
                children: [{
                  component: "TextContent",
                  props: { textMarkdown: `❌ Failed: ${B}` }
                }]
              }
            } : {
              component: "Card",
              props: {
                children: [
                  {
                    component: "Header",
                    props: { title: "✅ Suggestion Request Created", subtitle: `For ${R}` }
                  },
                  {
                    component: "TextContent",
                    props: { textMarkdown: "Your suggestion request has been created successfully! You can view it in the sidebar under Leverage Loops." }
                  }
                ]
              }
            });
            m(b, I, ie, !1);
          });
        }
        break;
      default:
        console.log("Unhandled action type:", T.type);
    }
  };
}, wM = {
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
}, RM = () => Object.entries(wM).filter(([f, p]) => p.allowed).map(([f]) => f), kM = () => `You can use these GenUI components: ${RM().join(", ")}. Do not use any other components. Keep the interface simple and avoid unnecessary complexity.`, TM = "_chatContainer_1domf_1", DM = "_header_1domf_9", OM = "_subtitle_1domf_24", NM = "_messagesContainer_1domf_31", MM = "_emptyState_1domf_50", LM = "_leverageLoopSummary_1domf_61", jM = "_summaryCard_1domf_66", AM = "_summaryCardHeader_1domf_77", UM = "_summaryCardTitle_1domf_84", zM = "_summaryCardInput_1domf_104", PM = "_summaryTextarea_1domf_109", FM = "_summaryCardButton_1domf_132", IM = "_playIcon_1domf_160", Kr = {
  chatContainer: TM,
  header: DM,
  subtitle: OM,
  messagesContainer: NM,
  emptyState: MM,
  leverageLoopSummary: LM,
  summaryCard: jM,
  summaryCardHeader: AM,
  summaryCardTitle: UM,
  summaryCardInput: zM,
  summaryTextarea: PM,
  summaryCardButton: FM,
  playIcon: IM
}, VM = ({
  onSendMessage: f,
  isLoading: p
}) => {
  const [v, S] = Be.useState(""), { selectedPerson: b, selectedSuggestionRequest: E } = wy(
    sd((R) => ({
      selectedPerson: R.selectedPerson,
      selectedSuggestionRequest: R.selectedSuggestionRequest
    }))
  ), m = () => b ? `Levergae loop summary for${b.full_name}` : E ? E.request_header_title : "Leverage Loops", T = () => {
    v.trim() && (f(v.trim()), S(""));
  };
  return /* @__PURE__ */ D.jsx("div", { className: Kr.leverageLoopSummary, children: /* @__PURE__ */ D.jsxs("div", { className: Kr.summaryCard, children: [
    /* @__PURE__ */ D.jsxs("div", { className: Kr.summaryCardHeader, children: [
      /* @__PURE__ */ D.jsx("p", { className: Kr.summaryCardTitle, children: m() }),
      /* @__PURE__ */ D.jsx(
        "button",
        {
          className: Kr.summaryCardButton,
          onClick: T,
          disabled: !v.trim() || p,
          children: /* @__PURE__ */ D.jsx("span", { className: Kr.playIcon, children: "▶" })
        }
      )
    ] }),
    /* @__PURE__ */ D.jsx("div", { className: Kr.summaryCardInput, children: /* @__PURE__ */ D.jsx(
      "textarea",
      {
        className: Kr.summaryTextarea,
        placeholder: "Summary of what I can help you with...",
        value: v,
        onChange: (R) => S(R.target.value),
        rows: 2
      }
    ) })
  ] }) });
}, zE = "https://copilot-thesys-api.fly.dev";
console.log("API_BASE_URL", zE);
const r_ = () => `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, c_ = ({
  context: f,
  title: p,
  subtitle: v,
  systemPrompt: S
}) => {
  const {
    chatState: b,
    addMessage: E,
    updateMessage: m,
    setIsLoading: T
  } = wy(
    sd((Me) => ({
      chatState: Me[f === "copilot" ? "copilotChat" : f === "outcomes" ? "outcomesChat" : "leverageLoopsChat"],
      addMessage: Me.addMessage,
      updateMessage: Me.updateMessage,
      setIsLoading: Me.setIsLoading
    }))
  ), { messages: R, threadId: w, isLoading: M } = b, F = f === "leverage-loops" && R.length > 0, [I, B] = Ja.useState(!1), [ie, Z] = Ja.useState(null), Ee = Be.useRef(null);
  Be.useEffect(() => {
    Ee.current?.scrollIntoView({ behavior: "smooth" });
  }, [R]);
  const _e = Be.useCallback(
    async (Me) => {
      if (!Me.trim() || M) return;
      const Le = {
        id: r_(),
        role: "user",
        content: Me.trim(),
        timestamp: /* @__PURE__ */ new Date()
      };
      E(f, Le), T(f, !0);
      const He = r_();
      E(f, {
        id: He,
        role: "assistant",
        content: "",
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !0
      });
      try {
        const at = kM(), G = `${S || "You are a helpful AI assistant."}

${at}

User: ${Me.trim()}`, X = await fetch(`${zE}/api/chat`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            prompt: {
              role: "user",
              content: G,
              id: Le.id
            },
            threadId: w,
            responseId: He,
            context: f
            // Pass context to backend if needed
          })
        });
        if (!X.ok)
          throw new Error(`API error: ${X.status}`);
        const be = X.body?.getReader(), qe = new TextDecoder();
        let Re = "";
        if (be)
          for (; ; ) {
            const { done: xe, value: re } = await be.read();
            if (xe) break;
            const De = qe.decode(re, { stream: !0 });
            Re += De, m(f, He, Re, !0);
          }
        m(f, He, Re, !1);
      } catch (at) {
        console.error("Failed to send message:", at), m(
          f,
          He,
          "Sorry, there was an error processing your request.",
          !1
        );
      } finally {
        T(f, !1);
      }
    },
    [M, w, f, S, E, m, T]
  ), ge = Be.useCallback(
    (Me) => {
      bM({
        sendMessage: _e,
        setPendingAction: Z,
        setIsModalOpen: B,
        context: f,
        addMessage: E,
        updateMessage: m
      })(Me);
    },
    [_e, Z, B, f, E, m]
  ), Se = Be.useCallback(
    (Me, Le) => {
      m(f, Me, Le);
    },
    [f, m]
  ), Ne = Be.useCallback(
    (Me) => {
      B(!1), Z(null), _e(Me);
    },
    [_e]
  ), he = Be.useCallback(() => {
    B(!1), Z(null);
  }, []);
  return /* @__PURE__ */ D.jsxs("div", { className: Kr.chatContainer, children: [
    /* @__PURE__ */ D.jsxs("div", { className: Kr.header, children: [
      /* @__PURE__ */ D.jsx("h1", { children: p }),
      v && /* @__PURE__ */ D.jsx("p", { className: Kr.subtitle, children: v })
    ] }),
    F && /* @__PURE__ */ D.jsx(
      VM,
      {
        onSendMessage: _e,
        isLoading: M
      }
    ),
    /* @__PURE__ */ D.jsxs("div", { className: Kr.messagesContainer, children: [
      R.length === 0 ? /* @__PURE__ */ D.jsx("div", { className: Kr.emptyState, children: /* @__PURE__ */ D.jsx("p", { children: "Start a conversation" }) }) : R.map((Me) => /* @__PURE__ */ D.jsx(
        dM,
        {
          message: Me,
          onAction: ge,
          onUpdateMessage: (Le) => Se(Me.id, Le)
        },
        Me.id
      )),
      /* @__PURE__ */ D.jsx("div", { ref: Ee })
    ] }),
    /* @__PURE__ */ D.jsx(n4, { onSend: _e, disabled: M }),
    ie && /* @__PURE__ */ D.jsx(
      EM,
      {
        isOpen: I,
        onClose: he,
        humanFriendlyMessage: ie.humanFriendlyMessage,
        llmFriendlyMessage: ie.llmFriendlyMessage,
        onConfirm: Ne
      }
    )
  ] });
}, HM = (f) => ({
  component: {
    component: "Card",
    props: {
      children: [
        {
          component: "Header",
          props: {
            title: `Leverage your network to benefit ${f.full_name}`,
            subtitle: f.master_person?.current_title ? `${f.master_person.current_title} · ${f.master_person?.master_company?.company_name || ""}` : ""
          }
        },
        {
          component: "TextContent",
          props: {
            textMarkdown: `I'm here to help you make the most of your connection with **${f.full_name}**. What would you like to do?`
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
                  children: "Suggest people to introduce to " + f.full_name,
                  variant: "secondary",
                  action: {
                    type: "create_suggestion_request",
                    props: {
                      personId: f.id,
                      personName: f.full_name,
                      personTitle: f.master_person?.current_title || "a professional",
                      companyName: f.master_person?.master_company?.company_name || "their company",
                      prompt: `Please suggest people from my network that I should introduce to ${f.full_name}. Consider their role as ${f.master_person?.current_title || "a professional"} at ${f.master_person?.master_company?.company_name || "their company"} and identify connections who could provide mutual value.`
                    }
                  }
                }
              },
              {
                component: "Button",
                props: {
                  children: "Help " + f.full_name + " with a specific task",
                  variant: "secondary",
                  action: {
                    type: "continue_conversation",
                    props: {
                      prompt: `I want to help ${f.full_name} with a specific task. Based on their role as ${f.master_person?.current_title || "a professional"} at ${f.master_person?.master_company?.company_name || "their company"}, what are some ways I could provide value or assistance to them?`
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
}), $M = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.15816%2015.5394C4.42185%2015.8099%203.64142%2015.9909%202.82808%2016.0678C2.75965%2016.0739%202.69009%2016.0784%202.62129%2016.081C2.05326%2016.1048%201.47513%2015.9215%201.00732%2015.5213C0.154714%2014.7923%20-0.052828%2013.5813%200.443029%2012.6226C0.448638%2012.6116%200.453874%2012.6011%200.459857%2012.5898L3.41481%206.77869C2.08654%209.73401%202.83855%2013.3286%205.16339%2015.5372L5.15816%2015.5391V15.5394Z'%20fill='url(%23paint0_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8419%204.46013C15.5782%204.18972%2016.3587%204.00906%2017.172%203.93175C17.2401%203.92571%2017.31%203.92119%2017.3788%203.91855C17.9468%203.89479%2018.525%204.07808%2018.9928%204.47823C19.845%205.20726%2020.0529%206.41828%2019.5571%207.37699C19.5515%207.3883%2019.5458%207.39886%2019.5402%207.4098L16.5853%2013.2205C17.9132%2010.2648%2017.1615%206.67059%2014.8367%204.46202L14.8419%204.46013Z'%20fill='url(%23paint1_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10%202.61975C11.8545%202.61975%2013.547%203.31559%2014.8367%204.46211C12.464%205.51888%2010.8283%207.5913%2010.1904%2010.0563C9.55242%2012.5214%207.60302%2014.6787%205.16338%2015.5378C3.66459%2014.2306%202.68222%2012.2057%202.68222%2010.0001C2.68259%205.92394%205.95877%202.61975%2010%202.61975Z'%20fill='url(%23paint2_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8367%204.46167C16.358%205.81412%2017.3179%207.79376%2017.3179%209.99932C17.3179%2014.0751%2014.0417%2017.3793%2010.0001%2017.3793C8.14604%2017.3793%206.45317%2016.6835%205.16342%2015.537C7.59222%2014.5651%209.36213%2012.4644%2010.0001%209.99932C10.638%207.53429%2012.4079%205.4332%2014.8367%204.46167Z'%20fill='url(%23paint3_linear_23492_1459)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_23492_1459'%20x1='1.41231'%20y1='10.771'%20x2='6.31346'%20y2='13.2684'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFAE00'%20stop-opacity='0.12'/%3e%3cstop%20offset='1'%20stop-color='%23FFAE00'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_23492_1459'%20x1='13.6991'%20y1='6.69473'%20x2='18.6306'%20y2='9.20746'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2313F562'/%3e%3cstop%20offset='1'%20stop-color='%2313F562'%20stop-opacity='0.09'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_23492_1459'%20x1='4.21878'%20y1='14.805'%20x2='10.8001'%20y2='2.68539'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FD5743'/%3e%3cstop%20offset='0.21'%20stop-color='%23D13D58'/%3e%3cstop%20offset='0.4'%20stop-color='%23AB2868'/%3e%3cstop%20offset='0.6'%20stop-color='%238C1B6F'/%3e%3cstop%20offset='1'%20stop-color='%23280553'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_23492_1459'%20x1='9.19834'%20y1='17.5257'%20x2='15.8611'%20y2='5.25654'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23130F56'/%3e%3cstop%20offset='0.41'%20stop-color='%23105D8E'/%3e%3cstop%20offset='0.6'%20stop-color='%23107995'/%3e%3cstop%20offset='0.79'%20stop-color='%2311A39E'/%3e%3cstop%20offset='1'%20stop-color='%2313EBAF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", BM = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%205.83329C9.17592%205.83329%208.37034%206.07766%207.68514%206.5355C6.99993%206.99334%206.46588%207.64408%206.15051%208.40544C5.83515%209.1668%205.75264%2010.0046%205.91341%2010.8128C6.07418%2011.6211%206.47102%2012.3635%207.05373%2012.9462C7.63645%2013.529%208.37888%2013.9258%209.18714%2014.0866C9.99539%2014.2473%2010.8332%2014.1648%2011.5945%2013.8495C12.3559%2013.5341%2013.0066%2013%2013.4645%2012.3148C13.9223%2011.6296%2014.1667%2010.824%2014.1667%209.99995M10.8333%202.54579C9.28839%202.37246%207.72776%202.68352%206.36733%203.43593C5.0069%204.18834%203.9139%205.34492%203.23953%206.74567C2.56516%208.14643%202.34274%209.72213%202.60305%2011.2548C2.86335%2012.7875%203.59352%2014.2014%204.69253%2015.301C5.79155%2016.4006%207.2051%2017.1314%208.73766%2017.3925C10.2702%2017.6536%2011.846%2017.432%2013.2471%2016.7583C14.6482%2016.0846%2015.8053%2014.9922%2016.5584%2013.6322C17.3115%2012.2721%2017.6234%2010.7117%2017.4508%209.16662M12.5%207.49995V4.99995L15%202.49995V4.99995H17.5L15%207.49995H12.5ZM12.5%207.49995L10%209.99995M9.16668%209.99995C9.16668%2010.221%209.25447%2010.4329%209.41076%2010.5892C9.56704%2010.7455%209.779%2010.8333%2010%2010.8333C10.221%2010.8333%2010.433%2010.7455%2010.5893%2010.5892C10.7455%2010.4329%2010.8333%2010.221%2010.8333%209.99995C10.8333%209.77894%2010.7455%209.56698%2010.5893%209.4107C10.433%209.25442%2010.221%209.16662%2010%209.16662C9.779%209.16662%209.56704%209.25442%209.41076%209.4107C9.25447%209.56698%209.16668%209.77894%209.16668%209.99995Z'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", qM = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.5533%205.43171C14.1448%204.53303%2013.4793%203.77539%2012.6409%203.2543C11.8024%202.73321%2010.8285%202.47198%209.84179%202.50353C8.8551%202.53509%207.89984%202.85802%207.09639%203.43162C6.29294%204.00523%205.67727%204.80383%205.32698%205.72679C4.97669%206.64974%204.90745%207.65573%205.12798%208.61798C5.34852%209.58022%205.84897%2010.4556%206.56625%2011.1339C7.28353%2011.8122%208.18555%2012.263%209.15861%2012.4294C10.1317%2012.5958%2011.1322%2012.4705%2012.0342%2012.0692'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.5683%2014.5533C15.467%2014.1448%2016.2246%2013.4793%2016.7457%2012.6409C17.2668%2011.8024%2017.5281%2010.8284%2017.4965%209.84176C17.4649%208.85507%2017.142%207.89981%2016.5684%207.09636C15.9948%206.29291%2015.1962%205.67724%2014.2732%205.32695C13.3503%204.97666%2012.3443%204.90742%2011.3821%205.12795C10.4198%205.34849%209.54439%205.84894%208.86612%206.56622C8.18784%207.2835%207.73708%208.18552%207.57064%209.15858C7.40419%2010.1316%207.52952%2011.1322%207.93083%2012.0341'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.45001%2014.5684C5.8585%2015.467%206.52387%2016.2247%207.36227%2016.7459C8.20067%2017.267%209.17458%2017.5283%2010.1613%2017.4969C11.1479%2017.4654%2012.1032%2017.1425%2012.9067%2016.569C13.7102%2015.9955%2014.3259%2015.197%2014.6763%2014.2741C15.0267%2013.3512%2015.0961%2012.3452%2014.8756%2011.383C14.6552%2010.4207%2014.1549%209.54526%2013.4377%208.8669C12.7205%208.18855%2011.8186%207.73767%2010.8456%207.57109C9.87256%207.40451%208.872%207.52969%207.97001%207.93085'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.43168%205.44995C4.53299%205.85844%203.77532%206.52381%203.25417%207.36221C2.73302%208.20061%202.47171%209.17452%202.50318%2010.1612C2.53465%2011.1479%202.85749%2012.1031%203.431%2012.9066C4.00451%2013.7101%204.80304%2014.3259%205.72594%2014.6763C6.64884%2015.0266%207.6548%2015.096%208.61706%2014.8756C9.57931%2014.6552%2010.4548%2014.1548%2011.1331%2013.4376C11.8115%2012.7205%2012.2624%2011.8185%2012.4289%2010.8455C12.5955%209.8725%2012.4703%208.87194%2012.0692%207.96995'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", WM = ({
  activeSection: f,
  onSectionChange: p
}) => {
  const { leverageLoops: v, fetchNetworkPersons: S, fetchSuggestionRequests: b } = xy(
    sd((Z) => ({
      leverageLoops: Z.leverageLoops,
      fetchNetworkPersons: Z.fetchNetworkPersons,
      fetchSuggestionRequests: Z.fetchSuggestionRequests
    }))
  ), {
    selectedPerson: E,
    selectedSuggestionRequest: m,
    setSelectedPerson: T,
    setSelectedSuggestionRequest: R,
    addMessage: w
  } = wy(
    sd((Z) => ({
      selectedPerson: Z.selectedPerson,
      selectedSuggestionRequest: Z.selectedSuggestionRequest,
      setSelectedPerson: Z.setSelectedPerson,
      setSelectedSuggestionRequest: Z.setSelectedSuggestionRequest,
      addMessage: Z.addMessage
    }))
  ), [M, F] = Be.useState(/* @__PURE__ */ new Set()), I = (Z) => {
    p(Z), F((Ee) => {
      const _e = new Set(Ee);
      return _e.has(Z) ? _e.delete(Z) : _e.add(Z), _e;
    });
  }, B = (Z) => {
    T(Z), p("leverage-loops");
    const Ee = "leverage-loops", _e = r_(), ge = `<content thesys="true">${JSON.stringify(HM(Z))}</content>`;
    w(Ee, {
      id: _e,
      role: "assistant",
      content: ge,
      timestamp: /* @__PURE__ */ new Date(),
      isStreaming: !1
    });
  }, ie = (Z) => {
    R(Z), p("leverage-loops");
  };
  return Be.useEffect(() => {
    S(), b();
  }, []), /* @__PURE__ */ D.jsx("div", { className: Rn.sidebar, children: /* @__PURE__ */ D.jsxs("nav", { className: Rn.sidebarNav, children: [
    /* @__PURE__ */ D.jsxs(
      "button",
      {
        className: `${Rn.sidebarItem} ${f === "copilot" ? Rn.active : ""}`,
        onClick: () => p("copilot"),
        "aria-label": "Orbiter.io Copilot",
        children: [
          /* @__PURE__ */ D.jsx("span", { className: Rn.sidebarIcon, children: /* @__PURE__ */ D.jsx("img", { src: $M, alt: "Orbiter", width: 18, height: 18 }) }),
          /* @__PURE__ */ D.jsx("span", { className: Rn.sidebarLabel, children: "Orbiter.io Copilot" })
        ]
      }
    ),
    /* @__PURE__ */ D.jsx("div", { className: Rn.sectionWrapper, children: /* @__PURE__ */ D.jsxs("div", { className: `${Rn.sectionHeader} ${f === "outcomes" ? Rn.active : ""}`, children: [
      /* @__PURE__ */ D.jsxs(
        "button",
        {
          className: Rn.sidebarItemInHeader,
          onClick: () => p("outcomes"),
          "aria-label": "Outcomes",
          children: [
            /* @__PURE__ */ D.jsx("span", { className: Rn.sidebarIcon, children: /* @__PURE__ */ D.jsx("img", { src: BM, alt: "Outcomes", width: 18, height: 18 }) }),
            /* @__PURE__ */ D.jsx("span", { className: Rn.sidebarLabel, children: "Outcomes" })
          ]
        }
      ),
      /* @__PURE__ */ D.jsx(
        "button",
        {
          className: Rn.plusButton,
          onClick: () => I("outcomes"),
          "aria-label": "Expand Outcomes",
          children: /* @__PURE__ */ D.jsx("span", { className: `${Rn.plusIcon} ${M.has("outcomes") ? Rn.rotated : ""}`, children: "+" })
        }
      )
    ] }) }),
    /* @__PURE__ */ D.jsxs("div", { className: Rn.sectionWrapper, children: [
      /* @__PURE__ */ D.jsxs("div", { className: `${Rn.sectionHeader} ${f === "leverage-loops" ? Rn.active : ""}`, children: [
        /* @__PURE__ */ D.jsxs(
          "button",
          {
            className: Rn.sidebarItemInHeader,
            onClick: () => p("leverage-loops"),
            "aria-label": "Leverage Loops",
            children: [
              /* @__PURE__ */ D.jsx("span", { className: Rn.sidebarIcon, children: /* @__PURE__ */ D.jsx("img", { src: qM, alt: "Leverage Loops", width: 18, height: 18 }) }),
              /* @__PURE__ */ D.jsx("span", { className: Rn.sidebarLabel, children: "Leverage Loops" })
            ]
          }
        ),
        /* @__PURE__ */ D.jsx(
          "button",
          {
            className: Rn.plusButton,
            onClick: () => I("leverage-loops"),
            "aria-label": "Expand Leverage Loops",
            children: /* @__PURE__ */ D.jsx("span", { className: `${Rn.plusIcon} ${M.has("leverage-loops") ? Rn.rotated : ""}`, children: "+" })
          }
        )
      ] }),
      M.has("leverage-loops") && /* @__PURE__ */ D.jsx(
        q3,
        {
          contentType: "leverage-loops",
          items: v,
          selectedItem: E,
          selectedSuggestionRequest: m,
          onItemSelect: B,
          onSuggestionRequestSelect: ie
        }
      )
    ] })
  ] }) });
}, lE = ({
  agentName: f = "Orbiter.io Copilot"
}) => /* @__PURE__ */ D.jsx(
  c_,
  {
    context: "copilot",
    title: f,
    systemPrompt: "You are Orbiter.io Copilot, a helpful AI assistant for professional networking and relationship management."
  }
), YM = () => /* @__PURE__ */ D.jsx(
  c_,
  {
    context: "outcomes",
    title: "Outcomes",
    systemPrompt: "You are helping the user track and achieve their professional outcomes and goals."
  }
), GM = () => {
  const { selectedPerson: f, selectedSuggestionRequest: p } = wy(
    sd((b) => ({
      selectedPerson: b.selectedPerson,
      selectedSuggestionRequest: b.selectedSuggestionRequest
    }))
  ), v = () => f ? `You are helping with a leverage loop for ${f.full_name} from ${f.master_person?.master_company?.company_name || "Unknown Company"}. Their title is ${f.master_person?.current_title || "Unknown"}.` : p ? `You are helping with the leverage loop suggestion request: "${p.request_header_title}". Context: ${p.request_context}` : "You are helping the user manage their leverage loops and professional network.", S = () => {
    if (f)
      return `${f.full_name} • ${f.master_person?.master_company?.company_name || ""}`;
    if (p)
      return p.request_header_title;
  };
  return !f && !p ? /* @__PURE__ */ D.jsxs("div", { className: Kr.chatContainer, children: [
    /* @__PURE__ */ D.jsx("div", { className: Kr.header, children: /* @__PURE__ */ D.jsx("h1", { children: "Leverage Loops" }) }),
    /* @__PURE__ */ D.jsx("div", { className: Kr.messagesContainer, children: /* @__PURE__ */ D.jsx("div", { className: Kr.emptyState, children: /* @__PURE__ */ D.jsx("p", { children: "Select a person or suggestion request from the sidebar to start a conversation" }) }) })
  ] }) : /* @__PURE__ */ D.jsx(D.Fragment, { children: /* @__PURE__ */ D.jsx(
    c_,
    {
      context: "leverage-loops",
      title: "Leverage Loops",
      subtitle: S(),
      systemPrompt: v()
    }
  ) });
}, QM = "_app_rj7hb_1", KM = "_mainContent_rj7hb_11", uE = {
  app: QM,
  mainContent: KM
}, XM = ({
  agentName: f = "Copilot"
}) => {
  const [p, v] = Be.useState("copilot"), S = () => {
    switch (p) {
      case "copilot":
        return /* @__PURE__ */ D.jsx(lE, { agentName: f });
      case "outcomes":
        return /* @__PURE__ */ D.jsx(YM, {});
      case "leverage-loops":
        return /* @__PURE__ */ D.jsx(GM, {});
      default:
        return /* @__PURE__ */ D.jsx(lE, { agentName: f });
    }
  };
  return /* @__PURE__ */ D.jsxs("div", { className: uE.app, children: [
    /* @__PURE__ */ D.jsx(
      WM,
      {
        activeSection: p,
        onSectionChange: v
      }
    ),
    /* @__PURE__ */ D.jsx("main", { className: uE.mainContent, children: S() })
  ] });
};
var Sy = { exports: {} }, Ka = {}, Cy = { exports: {} }, Z1 = {};
var sE;
function JM() {
  return sE || (sE = 1, (function(f) {
    function p(re, De) {
      var me = re.length;
      re.push(De);
      e: for (; 0 < me; ) {
        var P = me - 1 >>> 1, ee = re[P];
        if (0 < b(ee, De)) re[P] = De, re[me] = ee, me = P;
        else break e;
      }
    }
    function v(re) {
      return re.length === 0 ? null : re[0];
    }
    function S(re) {
      if (re.length === 0) return null;
      var De = re[0], me = re.pop();
      if (me !== De) {
        re[0] = me;
        e: for (var P = 0, ee = re.length, tt = ee >>> 1; P < tt; ) {
          var Ie = 2 * (P + 1) - 1, gt = re[Ie], ot = Ie + 1, Ue = re[ot];
          if (0 > b(gt, me)) ot < ee && 0 > b(Ue, gt) ? (re[P] = Ue, re[ot] = me, P = ot) : (re[P] = gt, re[Ie] = me, P = Ie);
          else if (ot < ee && 0 > b(Ue, me)) re[P] = Ue, re[ot] = me, P = ot;
          else break e;
        }
      }
      return De;
    }
    function b(re, De) {
      var me = re.sortIndex - De.sortIndex;
      return me !== 0 ? me : re.id - De.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var E = performance;
      f.unstable_now = function() {
        return E.now();
      };
    } else {
      var m = Date, T = m.now();
      f.unstable_now = function() {
        return m.now() - T;
      };
    }
    var R = [], w = [], M = 1, F = null, I = 3, B = !1, ie = !1, Z = !1, Ee = typeof setTimeout == "function" ? setTimeout : null, _e = typeof clearTimeout == "function" ? clearTimeout : null, ge = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Se(re) {
      for (var De = v(w); De !== null; ) {
        if (De.callback === null) S(w);
        else if (De.startTime <= re) S(w), De.sortIndex = De.expirationTime, p(R, De);
        else break;
        De = v(w);
      }
    }
    function Ne(re) {
      if (Z = !1, Se(re), !ie) if (v(R) !== null) ie = !0, Re(he);
      else {
        var De = v(w);
        De !== null && xe(Ne, De.startTime - re);
      }
    }
    function he(re, De) {
      ie = !1, Z && (Z = !1, _e(He), He = -1), B = !0;
      var me = I;
      try {
        for (Se(De), F = v(R); F !== null && (!(F.expirationTime > De) || re && !ve()); ) {
          var P = F.callback;
          if (typeof P == "function") {
            F.callback = null, I = F.priorityLevel;
            var ee = P(F.expirationTime <= De);
            De = f.unstable_now(), typeof ee == "function" ? F.callback = ee : F === v(R) && S(R), Se(De);
          } else S(R);
          F = v(R);
        }
        if (F !== null) var tt = !0;
        else {
          var Ie = v(w);
          Ie !== null && xe(Ne, Ie.startTime - De), tt = !1;
        }
        return tt;
      } finally {
        F = null, I = me, B = !1;
      }
    }
    var Me = !1, Le = null, He = -1, it = 5, at = -1;
    function ve() {
      return !(f.unstable_now() - at < it);
    }
    function G() {
      if (Le !== null) {
        var re = f.unstable_now();
        at = re;
        var De = !0;
        try {
          De = Le(!0, re);
        } finally {
          De ? X() : (Me = !1, Le = null);
        }
      } else Me = !1;
    }
    var X;
    if (typeof ge == "function") X = function() {
      ge(G);
    };
    else if (typeof MessageChannel < "u") {
      var be = new MessageChannel(), qe = be.port2;
      be.port1.onmessage = G, X = function() {
        qe.postMessage(null);
      };
    } else X = function() {
      Ee(G, 0);
    };
    function Re(re) {
      Le = re, Me || (Me = !0, X());
    }
    function xe(re, De) {
      He = Ee(function() {
        re(f.unstable_now());
      }, De);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(re) {
      re.callback = null;
    }, f.unstable_continueExecution = function() {
      ie || B || (ie = !0, Re(he));
    }, f.unstable_forceFrameRate = function(re) {
      0 > re || 125 < re ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : it = 0 < re ? Math.floor(1e3 / re) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return I;
    }, f.unstable_getFirstCallbackNode = function() {
      return v(R);
    }, f.unstable_next = function(re) {
      switch (I) {
        case 1:
        case 2:
        case 3:
          var De = 3;
          break;
        default:
          De = I;
      }
      var me = I;
      I = De;
      try {
        return re();
      } finally {
        I = me;
      }
    }, f.unstable_pauseExecution = function() {
    }, f.unstable_requestPaint = function() {
    }, f.unstable_runWithPriority = function(re, De) {
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
      var me = I;
      I = re;
      try {
        return De();
      } finally {
        I = me;
      }
    }, f.unstable_scheduleCallback = function(re, De, me) {
      var P = f.unstable_now();
      switch (typeof me == "object" && me !== null ? (me = me.delay, me = typeof me == "number" && 0 < me ? P + me : P) : me = P, re) {
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
      return ee = me + ee, re = { id: M++, callback: De, priorityLevel: re, startTime: me, expirationTime: ee, sortIndex: -1 }, me > P ? (re.sortIndex = me, p(w, re), v(R) === null && re === v(w) && (Z ? (_e(He), He = -1) : Z = !0, xe(Ne, me - P))) : (re.sortIndex = ee, p(R, re), ie || B || (ie = !0, Re(he))), re;
    }, f.unstable_shouldYield = ve, f.unstable_wrapCallback = function(re) {
      var De = I;
      return function() {
        var me = I;
        I = De;
        try {
          return re.apply(this, arguments);
        } finally {
          I = me;
        }
      };
    };
  })(Z1)), Z1;
}
var e_ = {};
var cE;
function ZM() {
  return cE || (cE = 1, (function(f) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = !1, v = 5;
      function S(we, Je) {
        var Rt = we.length;
        we.push(Je), m(we, Je, Rt);
      }
      function b(we) {
        return we.length === 0 ? null : we[0];
      }
      function E(we) {
        if (we.length === 0)
          return null;
        var Je = we[0], Rt = we.pop();
        return Rt !== Je && (we[0] = Rt, T(we, Rt, 0)), Je;
      }
      function m(we, Je, Rt) {
        for (var Yt = Rt; Yt > 0; ) {
          var un = Yt - 1 >>> 1, _n = we[un];
          if (R(_n, Je) > 0)
            we[un] = Je, we[Yt] = _n, Yt = un;
          else
            return;
        }
      }
      function T(we, Je, Rt) {
        for (var Yt = Rt, un = we.length, _n = un >>> 1; Yt < _n; ) {
          var pn = (Yt + 1) * 2 - 1, nr = we[pn], sn = pn + 1, Jt = we[sn];
          if (R(nr, Je) < 0)
            sn < un && R(Jt, nr) < 0 ? (we[Yt] = Jt, we[sn] = Je, Yt = sn) : (we[Yt] = nr, we[pn] = Je, Yt = pn);
          else if (sn < un && R(Jt, Je) < 0)
            we[Yt] = Jt, we[sn] = Je, Yt = sn;
          else
            return;
        }
      }
      function R(we, Je) {
        var Rt = we.sortIndex - Je.sortIndex;
        return Rt !== 0 ? Rt : we.id - Je.id;
      }
      var w = 1, M = 2, F = 3, I = 4, B = 5;
      function ie(we, Je) {
      }
      var Z = typeof performance == "object" && typeof performance.now == "function";
      if (Z) {
        var Ee = performance;
        f.unstable_now = function() {
          return Ee.now();
        };
      } else {
        var _e = Date, ge = _e.now();
        f.unstable_now = function() {
          return _e.now() - ge;
        };
      }
      var Se = 1073741823, Ne = -1, he = 250, Me = 5e3, Le = 1e4, He = Se, it = [], at = [], ve = 1, G = null, X = F, be = !1, qe = !1, Re = !1, xe = typeof setTimeout == "function" ? setTimeout : null, re = typeof clearTimeout == "function" ? clearTimeout : null, De = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function me(we) {
        for (var Je = b(at); Je !== null; ) {
          if (Je.callback === null)
            E(at);
          else if (Je.startTime <= we)
            E(at), Je.sortIndex = Je.expirationTime, S(it, Je);
          else
            return;
          Je = b(at);
        }
      }
      function P(we) {
        if (Re = !1, me(we), !qe)
          if (b(it) !== null)
            qe = !0, zn(ee);
          else {
            var Je = b(at);
            Je !== null && wr(P, Je.startTime - we);
          }
      }
      function ee(we, Je) {
        qe = !1, Re && (Re = !1, ya()), be = !0;
        var Rt = X;
        try {
          var Yt;
          if (!p) return tt(we, Je);
        } finally {
          G = null, X = Rt, be = !1;
        }
      }
      function tt(we, Je) {
        var Rt = Je;
        for (me(Rt), G = b(it); G !== null && !(G.expirationTime > Rt && (!we || gi())); ) {
          var Yt = G.callback;
          if (typeof Yt == "function") {
            G.callback = null, X = G.priorityLevel;
            var un = G.expirationTime <= Rt, _n = Yt(un);
            Rt = f.unstable_now(), typeof _n == "function" ? G.callback = _n : G === b(it) && E(it), me(Rt);
          } else
            E(it);
          G = b(it);
        }
        if (G !== null)
          return !0;
        var pn = b(at);
        return pn !== null && wr(P, pn.startTime - Rt), !1;
      }
      function Ie(we, Je) {
        switch (we) {
          case w:
          case M:
          case F:
          case I:
          case B:
            break;
          default:
            we = F;
        }
        var Rt = X;
        X = we;
        try {
          return Je();
        } finally {
          X = Rt;
        }
      }
      function gt(we) {
        var Je;
        switch (X) {
          case w:
          case M:
          case F:
            Je = F;
            break;
          default:
            Je = X;
            break;
        }
        var Rt = X;
        X = Je;
        try {
          return we();
        } finally {
          X = Rt;
        }
      }
      function ot(we) {
        var Je = X;
        return function() {
          var Rt = X;
          X = Je;
          try {
            return we.apply(this, arguments);
          } finally {
            X = Rt;
          }
        };
      }
      function Ue(we, Je, Rt) {
        var Yt = f.unstable_now(), un;
        if (typeof Rt == "object" && Rt !== null) {
          var _n = Rt.delay;
          typeof _n == "number" && _n > 0 ? un = Yt + _n : un = Yt;
        } else
          un = Yt;
        var pn;
        switch (we) {
          case w:
            pn = Ne;
            break;
          case M:
            pn = he;
            break;
          case B:
            pn = He;
            break;
          case I:
            pn = Le;
            break;
          case F:
          default:
            pn = Me;
            break;
        }
        var nr = un + pn, sn = {
          id: ve++,
          callback: Je,
          priorityLevel: we,
          startTime: un,
          expirationTime: nr,
          sortIndex: -1
        };
        return un > Yt ? (sn.sortIndex = un, S(at, sn), b(it) === null && sn === b(at) && (Re ? ya() : Re = !0, wr(P, un - Yt))) : (sn.sortIndex = nr, S(it, sn), !qe && !be && (qe = !0, zn(ee))), sn;
      }
      function dt() {
      }
      function ht() {
        !qe && !be && (qe = !0, zn(ee));
      }
      function Xt() {
        return b(it);
      }
      function Un(we) {
        we.callback = null;
      }
      function Nr() {
        return X;
      }
      var kn = !1, ur = null, Yn = -1, Gn = v, Jr = -1;
      function gi() {
        var we = f.unstable_now() - Jr;
        return !(we < Gn);
      }
      function ma() {
      }
      function tr(we) {
        if (we < 0 || we > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        we > 0 ? Gn = Math.floor(1e3 / we) : Gn = v;
      }
      var Tn = function() {
        if (ur !== null) {
          var we = f.unstable_now();
          Jr = we;
          var Je = !0, Rt = !0;
          try {
            Rt = ur(Je, we);
          } finally {
            Rt ? Qn() : (kn = !1, ur = null);
          }
        } else
          kn = !1;
      }, Qn;
      if (typeof De == "function")
        Qn = function() {
          De(Tn);
        };
      else if (typeof MessageChannel < "u") {
        var br = new MessageChannel(), Za = br.port2;
        br.port1.onmessage = Tn, Qn = function() {
          Za.postMessage(null);
        };
      } else
        Qn = function() {
          xe(Tn, 0);
        };
      function zn(we) {
        ur = we, kn || (kn = !0, Qn());
      }
      function wr(we, Je) {
        Yn = xe(function() {
          we(f.unstable_now());
        }, Je);
      }
      function ya() {
        re(Yn), Yn = -1;
      }
      var ei = ma, _i = null;
      f.unstable_IdlePriority = B, f.unstable_ImmediatePriority = w, f.unstable_LowPriority = I, f.unstable_NormalPriority = F, f.unstable_Profiling = _i, f.unstable_UserBlockingPriority = M, f.unstable_cancelCallback = Un, f.unstable_continueExecution = ht, f.unstable_forceFrameRate = tr, f.unstable_getCurrentPriorityLevel = Nr, f.unstable_getFirstCallbackNode = Xt, f.unstable_next = gt, f.unstable_pauseExecution = dt, f.unstable_requestPaint = ei, f.unstable_runWithPriority = Ie, f.unstable_scheduleCallback = Ue, f.unstable_shouldYield = gi, f.unstable_wrapCallback = ot, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(e_)), e_;
}
var fE;
function PE() {
  return fE || (fE = 1, process.env.NODE_ENV === "production" ? Cy.exports = JM() : Cy.exports = ZM()), Cy.exports;
}
var dE;
function eL() {
  if (dE) return Ka;
  dE = 1;
  var f = Cv(), p = PE();
  function v(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var S = /* @__PURE__ */ new Set(), b = {};
  function E(n, r) {
    m(n, r), m(n + "Capture", r);
  }
  function m(n, r) {
    for (b[n] = r, n = 0; n < r.length; n++) S.add(r[n]);
  }
  var T = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), R = Object.prototype.hasOwnProperty, w = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, M = {}, F = {};
  function I(n) {
    return R.call(F, n) ? !0 : R.call(M, n) ? !1 : w.test(n) ? F[n] = !0 : (M[n] = !0, !1);
  }
  function B(n, r, o, u) {
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
    if (r === null || typeof r > "u" || B(n, r, o, u)) return !0;
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
  function Z(n, r, o, u, c, h, C) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = h, this.removeEmptyString = C;
  }
  var Ee = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Ee[n] = new Z(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Ee[r] = new Z(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Ee[n] = new Z(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Ee[n] = new Z(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Ee[n] = new Z(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Ee[n] = new Z(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Ee[n] = new Z(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Ee[n] = new Z(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Ee[n] = new Z(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var _e = /[\-:]([a-z])/g;
  function ge(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      _e,
      ge
    );
    Ee[r] = new Z(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(_e, ge);
    Ee[r] = new Z(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(_e, ge);
    Ee[r] = new Z(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Ee[n] = new Z(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Ee.xlinkHref = new Z("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Ee[n] = new Z(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Se(n, r, o, u) {
    var c = Ee.hasOwnProperty(r) ? Ee[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ie(r, o, c, u) && (o = null), u || c === null ? I(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : c.mustUseProperty ? n[c.propertyName] = o === null ? c.type === 3 ? !1 : "" : o : (r = c.attributeName, u = c.attributeNamespace, o === null ? n.removeAttribute(r) : (c = c.type, o = c === 3 || c === 4 && o === !0 ? "" : "" + o, u ? n.setAttributeNS(u, r, o) : n.setAttribute(r, o))));
  }
  var Ne = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, he = /* @__PURE__ */ Symbol.for("react.element"), Me = /* @__PURE__ */ Symbol.for("react.portal"), Le = /* @__PURE__ */ Symbol.for("react.fragment"), He = /* @__PURE__ */ Symbol.for("react.strict_mode"), it = /* @__PURE__ */ Symbol.for("react.profiler"), at = /* @__PURE__ */ Symbol.for("react.provider"), ve = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), be = /* @__PURE__ */ Symbol.for("react.suspense_list"), qe = /* @__PURE__ */ Symbol.for("react.memo"), Re = /* @__PURE__ */ Symbol.for("react.lazy"), xe = /* @__PURE__ */ Symbol.for("react.offscreen"), re = Symbol.iterator;
  function De(n) {
    return n === null || typeof n != "object" ? null : (n = re && n[re] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var me = Object.assign, P;
  function ee(n) {
    if (P === void 0) try {
      throw Error();
    } catch (o) {
      var r = o.stack.trim().match(/\n( *(at )?)/);
      P = r && r[1] || "";
    }
    return `
` + P + n;
  }
  var tt = !1;
  function Ie(n, r) {
    if (!n || tt) return "";
    tt = !0;
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
`), h = u.stack.split(`
`), C = c.length - 1, O = h.length - 1; 1 <= C && 0 <= O && c[C] !== h[O]; ) O--;
        for (; 1 <= C && 0 <= O; C--, O--) if (c[C] !== h[O]) {
          if (C !== 1 || O !== 1)
            do
              if (C--, O--, 0 > O || c[C] !== h[O]) {
                var j = `
` + c[C].replace(" at new ", " at ");
                return n.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", n.displayName)), j;
              }
            while (1 <= C && 0 <= O);
          break;
        }
      }
    } finally {
      tt = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? ee(n) : "";
  }
  function gt(n) {
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
  function ot(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Le:
        return "Fragment";
      case Me:
        return "Portal";
      case it:
        return "Profiler";
      case He:
        return "StrictMode";
      case X:
        return "Suspense";
      case be:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case ve:
        return (n.displayName || "Context") + ".Consumer";
      case at:
        return (n._context.displayName || "Context") + ".Provider";
      case G:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case qe:
        return r = n.displayName || null, r !== null ? r : ot(n.type) || "Memo";
      case Re:
        r = n._payload, n = n._init;
        try {
          return ot(n(r));
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
        return ot(r);
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
  function ht(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Xt(n) {
    var r = ht(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var c = o.get, h = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(C) {
        u = "" + C, h.call(this, C);
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
  function Nr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var o = r.getValue(), u = "";
    return n && (u = ht(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== o ? (r.setValue(n), !0) : !1;
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
    return me({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function Yn(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    o = dt(r.value != null ? r.value : o), n._wrapperState = { initialChecked: u, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Gn(n, r) {
    r = r.checked, r != null && Se(n, "checked", r, !1);
  }
  function Jr(n, r) {
    Gn(n, r);
    var o = dt(r.value), u = r.type;
    if (o != null) u === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? ma(n, r.type, o) : r.hasOwnProperty("defaultValue") && ma(n, r.type, dt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function gi(n, r, o) {
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
      for (var c = 0; c < o.length; c++) r["$" + o[c]] = !0;
      for (o = 0; o < n.length; o++) c = r.hasOwnProperty("$" + n[o].value), n[o].selected !== c && (n[o].selected = c), c && u && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + dt(o), r = null, c = 0; c < n.length; c++) {
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
    if (r.dangerouslySetInnerHTML != null) throw Error(v(91));
    return me({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function br(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null) throw Error(v(92));
        if (tr(o)) {
          if (1 < o.length) throw Error(v(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: dt(o) };
  }
  function Za(n, r) {
    var o = dt(r.value), u = dt(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), u != null && (n.defaultValue = "" + u);
  }
  function zn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function wr(n) {
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
    return n == null || n === "http://www.w3.org/1999/xhtml" ? wr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var ei, _i = (function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, u, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, u, c);
      });
    } : n;
  })(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (ei = ei || document.createElement("div"), ei.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = ei.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
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
  var Je = {
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
  Object.keys(Je).forEach(function(n) {
    Rt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Je[r] = Je[n];
    });
  });
  function Yt(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || Je.hasOwnProperty(n) && Je[n] ? ("" + r).trim() : r + "px";
  }
  function un(n, r) {
    n = n.style;
    for (var o in r) if (r.hasOwnProperty(o)) {
      var u = o.indexOf("--") === 0, c = Yt(o, r[o], u);
      o === "float" && (o = "cssFloat"), u ? n.setProperty(o, c) : n[o] = c;
    }
  }
  var _n = me({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function pn(n, r) {
    if (r) {
      if (_n[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(v(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(v(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(v(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(v(62));
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
  function Na(n) {
    if (n = nt(n)) {
      if (typeof Zt != "function") throw Error(v(280));
      var r = n.stateNode;
      r && (r = Cn(r), Zt(n.stateNode, n.type, r));
    }
  }
  function Qi(n) {
    ga ? Rr ? Rr.push(n) : Rr = [n] : ga = n;
  }
  function cl() {
    if (ga) {
      var n = ga, r = Rr;
      if (Rr = ga = null, Na(n), r) for (n = 0; n < r.length; n++) Na(r[n]);
    }
  }
  function fl(n, r) {
    return n(r);
  }
  function bo() {
  }
  var wo = !1;
  function dl(n, r, o) {
    if (wo) return n(r, o);
    wo = !0;
    try {
      return fl(n, r, o);
    } finally {
      wo = !1, (ga !== null || Rr !== null) && (bo(), cl());
    }
  }
  function Mr(n, r) {
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
    if (o && typeof o != "function") throw Error(v(231, r, typeof o));
    return o;
  }
  var Lr = !1;
  if (T) try {
    var sr = {};
    Object.defineProperty(sr, "passive", { get: function() {
      Lr = !0;
    } }), window.addEventListener("test", sr, sr), window.removeEventListener("test", sr, sr);
  } catch {
    Lr = !1;
  }
  function Si(n, r, o, u, c, h, C, O, j) {
    var Q = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, Q);
    } catch (ce) {
      this.onError(ce);
    }
  }
  var ti = !1, Ci = null, Ei = !1, L = null, oe = { onError: function(n) {
    ti = !0, Ci = n;
  } };
  function Oe(n, r, o, u, c, h, C, O, j) {
    ti = !1, Ci = null, Si.apply(oe, arguments);
  }
  function We(n, r, o, u, c, h, C, O, j) {
    if (Oe.apply(this, arguments), ti) {
      if (ti) {
        var Q = Ci;
        ti = !1, Ci = null;
      } else throw Error(v(198));
      Ei || (Ei = !0, L = Q);
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
  function Ot(n) {
    if (Et(n) !== n) throw Error(v(188));
  }
  function Tt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Et(n), r === null) throw Error(v(188));
      return r !== n ? null : n;
    }
    for (var o = n, u = r; ; ) {
      var c = o.return;
      if (c === null) break;
      var h = c.alternate;
      if (h === null) {
        if (u = c.return, u !== null) {
          o = u;
          continue;
        }
        break;
      }
      if (c.child === h.child) {
        for (h = c.child; h; ) {
          if (h === o) return Ot(c), n;
          if (h === u) return Ot(c), r;
          h = h.sibling;
        }
        throw Error(v(188));
      }
      if (o.return !== u.return) o = c, u = h;
      else {
        for (var C = !1, O = c.child; O; ) {
          if (O === o) {
            C = !0, o = c, u = h;
            break;
          }
          if (O === u) {
            C = !0, u = c, o = h;
            break;
          }
          O = O.sibling;
        }
        if (!C) {
          for (O = h.child; O; ) {
            if (O === o) {
              C = !0, o = h, u = c;
              break;
            }
            if (O === u) {
              C = !0, u = h, o = c;
              break;
            }
            O = O.sibling;
          }
          if (!C) throw Error(v(189));
        }
      }
      if (o.alternate !== u) throw Error(v(190));
    }
    if (o.tag !== 3) throw Error(v(188));
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
  var vn = p.unstable_scheduleCallback, cr = p.unstable_cancelCallback, ni = p.unstable_shouldYield, ri = p.unstable_requestPaint, xt = p.unstable_now, wt = p.unstable_getCurrentPriorityLevel, ai = p.unstable_ImmediatePriority, pl = p.unstable_UserBlockingPriority, vl = p.unstable_NormalPriority, Ro = p.unstable_LowPriority, lu = p.unstable_IdlePriority, ko = null, Zr = null;
  function as(n) {
    if (Zr && typeof Zr.onCommitFiberRoot == "function") try {
      Zr.onCommitFiberRoot(ko, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var jr = Math.clz32 ? Math.clz32 : uu, Cc = Math.log, Ec = Math.LN2;
  function uu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Cc(n) / Ec | 0) | 0;
  }
  var To = 64, _a = 4194304;
  function ii(n) {
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
  function oi(n, r) {
    var o = n.pendingLanes;
    if (o === 0) return 0;
    var u = 0, c = n.suspendedLanes, h = n.pingedLanes, C = o & 268435455;
    if (C !== 0) {
      var O = C & ~c;
      O !== 0 ? u = ii(O) : (h &= C, h !== 0 && (u = ii(h)));
    } else C = o & ~c, C !== 0 ? u = ii(C) : h !== 0 && (u = ii(h));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && (r & c) === 0 && (c = u & -u, h = r & -r, c >= h || c === 16 && (h & 4194240) !== 0)) return r;
    if ((u & 4) !== 0 && (u |= o & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) o = 31 - jr(r), c = 1 << o, u |= n[o], r &= ~c;
    return u;
  }
  function su(n, r) {
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
  function hl(n, r) {
    for (var o = n.suspendedLanes, u = n.pingedLanes, c = n.expirationTimes, h = n.pendingLanes; 0 < h; ) {
      var C = 31 - jr(h), O = 1 << C, j = c[C];
      j === -1 ? ((O & o) === 0 || (O & u) !== 0) && (c[C] = su(O, r)) : j <= r && (n.expiredLanes |= O), h &= ~O;
    }
  }
  function Do(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function cu() {
    var n = To;
    return To <<= 1, (To & 4194240) === 0 && (To = 64), n;
  }
  function fu(n) {
    for (var r = [], o = 0; 31 > o; o++) r.push(n);
    return r;
  }
  function Ki(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - jr(r), n[r] = o;
  }
  function fd(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var c = 31 - jr(o), h = 1 << c;
      r[c] = 0, u[c] = -1, n[c] = -1, o &= ~h;
    }
  }
  function Xi(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var u = 31 - jr(o), c = 1 << u;
      c & r | n[u] & r && (n[u] |= r), o &= ~c;
    }
  }
  var Vt = 0;
  function du(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Pt, is, xi, yt, pu, fr = !1, bi = [], Ar = null, wi = null, hn = null, en = /* @__PURE__ */ new Map(), Oo = /* @__PURE__ */ new Map(), Kn = [], Ur = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ma(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Ar = null;
        break;
      case "dragenter":
      case "dragleave":
        wi = null;
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
  function ml(n, r, o, u, c, h) {
    return n === null || n.nativeEvent !== h ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: u, nativeEvent: h, targetContainers: [c] }, r !== null && (r = nt(r), r !== null && is(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function os(n, r, o, u, c) {
    switch (r) {
      case "focusin":
        return Ar = ml(Ar, n, r, o, u, c), !0;
      case "dragenter":
        return wi = ml(wi, n, r, o, u, c), !0;
      case "mouseover":
        return hn = ml(hn, n, r, o, u, c), !0;
      case "pointerover":
        var h = c.pointerId;
        return en.set(h, ml(en.get(h) || null, n, r, o, u, c)), !0;
      case "gotpointercapture":
        return h = c.pointerId, Oo.set(h, ml(Oo.get(h) || null, n, r, o, u, c)), !0;
    }
    return !1;
  }
  function ls(n) {
    var r = wl(n.target);
    if (r !== null) {
      var o = Et(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = _t(o), r !== null) {
            n.blockedOn = r, pu(n.priority, function() {
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
  function No(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = mu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var u = new o.constructor(o.type, o);
        sn = u, o.target.dispatchEvent(u), sn = null;
      } else return r = nt(o), r !== null && is(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function yl(n, r, o) {
    No(n) && o.delete(r);
  }
  function dd() {
    fr = !1, Ar !== null && No(Ar) && (Ar = null), wi !== null && No(wi) && (wi = null), hn !== null && No(hn) && (hn = null), en.forEach(yl), Oo.forEach(yl);
  }
  function La(n, r) {
    n.blockedOn === r && (n.blockedOn = null, fr || (fr = !0, p.unstable_scheduleCallback(p.unstable_NormalPriority, dd)));
  }
  function li(n) {
    function r(c) {
      return La(c, n);
    }
    if (0 < bi.length) {
      La(bi[0], n);
      for (var o = 1; o < bi.length; o++) {
        var u = bi[o];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (Ar !== null && La(Ar, n), wi !== null && La(wi, n), hn !== null && La(hn, n), en.forEach(r), Oo.forEach(r), o = 0; o < Kn.length; o++) u = Kn[o], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < Kn.length && (o = Kn[0], o.blockedOn === null); ) ls(o), o.blockedOn === null && Kn.shift();
  }
  var Ri = Ne.ReactCurrentBatchConfig, ja = !0;
  function vu(n, r, o, u) {
    var c = Vt, h = Ri.transition;
    Ri.transition = null;
    try {
      Vt = 1, Mo(n, r, o, u);
    } finally {
      Vt = c, Ri.transition = h;
    }
  }
  function hu(n, r, o, u) {
    var c = Vt, h = Ri.transition;
    Ri.transition = null;
    try {
      Vt = 4, Mo(n, r, o, u);
    } finally {
      Vt = c, Ri.transition = h;
    }
  }
  function Mo(n, r, o, u) {
    if (ja) {
      var c = mu(n, r, o, u);
      if (c === null) jc(n, r, u, gl, o), Ma(n, u);
      else if (os(c, n, r, o, u)) u.stopPropagation();
      else if (Ma(n, u), r & 4 && -1 < Ur.indexOf(n)) {
        for (; c !== null; ) {
          var h = nt(c);
          if (h !== null && Pt(h), h = mu(n, r, o, u), h === null && jc(n, r, u, gl, o), h === c) break;
          c = h;
        }
        c !== null && u.stopPropagation();
      } else jc(n, r, u, null, o);
    }
  }
  var gl = null;
  function mu(n, r, o, u) {
    if (gl = null, n = Jt(u), n = wl(n), n !== null) if (r = Et(n), r === null) n = null;
    else if (o = r.tag, o === 13) {
      if (n = _t(r), n !== null) return n;
      n = null;
    } else if (o === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return gl = n, null;
  }
  function yu(n) {
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
          case ai:
            return 1;
          case pl:
            return 4;
          case vl:
          case Ro:
            return 16;
          case lu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ui = null, _ = null, N = null;
  function Y() {
    if (N) return N;
    var n, r = _, o = r.length, u, c = "value" in ui ? ui.value : ui.textContent, h = c.length;
    for (n = 0; n < o && r[n] === c[n]; n++) ;
    var C = o - n;
    for (u = 1; u <= C && r[o - u] === c[h - u]; u++) ;
    return N = c.slice(n, 1 < u ? 1 - u : void 0);
  }
  function J(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ye() {
    return !0;
  }
  function lt() {
    return !1;
  }
  function Te(n) {
    function r(o, u, c, h, C) {
      this._reactName = o, this._targetInst = c, this.type = u, this.nativeEvent = h, this.target = C, this.currentTarget = null;
      for (var O in n) n.hasOwnProperty(O) && (o = n[O], this[O] = o ? o(h) : h[O]);
      return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? ye : lt, this.isPropagationStopped = lt, this;
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
  var ct = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Nt = Te(ct), Ft = me({}, ct, { view: 0, detail: 0 }), fn = Te(Ft), tn, kt, nn, Sn = me({}, Ft, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: yd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== nn && (nn && n.type === "mousemove" ? (tn = n.screenX - nn.screenX, kt = n.screenY - nn.screenY) : kt = tn = 0, nn = n), tn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : kt;
  } }), Lo = Te(Sn), us = me({}, Sn, { dataTransfer: 0 }), Ji = Te(us), ss = me({}, Ft, { relatedTarget: 0 }), _l = Te(ss), pd = me({}, ct, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), xc = Te(pd), vd = me({}, ct, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), bv = Te(vd), hd = me({}, ct, { data: 0 }), md = Te(hd), wv = {
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
  }, Rv = {
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
  }, My = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Zi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = My[n]) ? !!r[n] : !1;
  }
  function yd() {
    return Zi;
  }
  var gd = me({}, Ft, { key: function(n) {
    if (n.key) {
      var r = wv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = J(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Rv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: yd, charCode: function(n) {
    return n.type === "keypress" ? J(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? J(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), _d = Te(gd), Sd = me({}, Sn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), kv = Te(Sd), bc = me({}, Ft, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: yd }), Tv = Te(bc), ea = me({}, ct, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), eo = Te(ea), Pn = me({}, Sn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), to = Te(Pn), Cd = [9, 13, 27, 32], gu = T && "CompositionEvent" in window, cs = null;
  T && "documentMode" in document && (cs = document.documentMode);
  var fs = T && "TextEvent" in window && !cs, Dv = T && (!gu || cs && 8 < cs && 11 >= cs), Ov = " ", wc = !1;
  function Nv(n, r) {
    switch (n) {
      case "keyup":
        return Cd.indexOf(r.keyCode) !== -1;
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
  function Mv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var _u = !1;
  function Lv(n, r) {
    switch (n) {
      case "compositionend":
        return Mv(r);
      case "keypress":
        return r.which !== 32 ? null : (wc = !0, Ov);
      case "textInput":
        return n = r.data, n === Ov && wc ? null : n;
      default:
        return null;
    }
  }
  function Ly(n, r) {
    if (_u) return n === "compositionend" || !gu && Nv(n, r) ? (n = Y(), N = _ = ui = null, _u = !1, n) : null;
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
        return Dv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var jy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function jv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!jy[n.type] : r === "textarea";
  }
  function Ed(n, r, o, u) {
    Qi(u), r = ys(r, "onChange"), 0 < r.length && (o = new Nt("onChange", "change", null, o, u), n.push({ event: o, listeners: r }));
  }
  var ki = null, Sl = null;
  function Av(n) {
    xl(n, 0);
  }
  function ds(n) {
    var r = ci(n);
    if (Nr(r)) return n;
  }
  function Ay(n, r) {
    if (n === "change") return r;
  }
  var Uv = !1;
  if (T) {
    var xd;
    if (T) {
      var bd = "oninput" in document;
      if (!bd) {
        var zv = document.createElement("div");
        zv.setAttribute("oninput", "return;"), bd = typeof zv.oninput == "function";
      }
      xd = bd;
    } else xd = !1;
    Uv = xd && (!document.documentMode || 9 < document.documentMode);
  }
  function Pv() {
    ki && (ki.detachEvent("onpropertychange", Fv), Sl = ki = null);
  }
  function Fv(n) {
    if (n.propertyName === "value" && ds(Sl)) {
      var r = [];
      Ed(r, Sl, n, Jt(n)), dl(Av, r);
    }
  }
  function Uy(n, r, o) {
    n === "focusin" ? (Pv(), ki = r, Sl = o, ki.attachEvent("onpropertychange", Fv)) : n === "focusout" && Pv();
  }
  function Iv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return ds(Sl);
  }
  function zy(n, r) {
    if (n === "click") return ds(r);
  }
  function Vv(n, r) {
    if (n === "input" || n === "change") return ds(r);
  }
  function Py(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var si = typeof Object.is == "function" ? Object.is : Py;
  function ps(n, r) {
    if (si(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var o = Object.keys(n), u = Object.keys(r);
    if (o.length !== u.length) return !1;
    for (u = 0; u < o.length; u++) {
      var c = o[u];
      if (!R.call(r, c) || !si(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Hv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Rc(n, r) {
    var o = Hv(n);
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
      o = Hv(o);
    }
  }
  function jo(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? jo(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function vs() {
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
  function kc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Su(n) {
    var r = vs(), o = n.focusedElem, u = n.selectionRange;
    if (r !== o && o && o.ownerDocument && jo(o.ownerDocument.documentElement, o)) {
      if (u !== null && kc(o)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in o) o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = o.textContent.length, h = Math.min(u.start, c);
          u = u.end === void 0 ? h : Math.min(u.end, c), !n.extend && h > u && (c = u, u = h, h = c), c = Rc(o, h);
          var C = Rc(
            o,
            u
          );
          c && C && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== C.node || n.focusOffset !== C.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), h > u ? (n.addRange(r), n.extend(C.node, C.offset)) : (r.setEnd(C.node, C.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++) n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Fy = T && "documentMode" in document && 11 >= document.documentMode, Cu = null, wd = null, hs = null, Rd = !1;
  function kd(n, r, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Rd || Cu == null || Cu !== kn(u) || (u = Cu, "selectionStart" in u && kc(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), hs && ps(hs, u) || (hs = u, u = ys(wd, "onSelect"), 0 < u.length && (r = new Nt("onSelect", "select", null, r, o), n.push({ event: r, listeners: u }), r.target = Cu)));
  }
  function Tc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var Cl = { animationend: Tc("Animation", "AnimationEnd"), animationiteration: Tc("Animation", "AnimationIteration"), animationstart: Tc("Animation", "AnimationStart"), transitionend: Tc("Transition", "TransitionEnd") }, dr = {}, Td = {};
  T && (Td = document.createElement("div").style, "AnimationEvent" in window || (delete Cl.animationend.animation, delete Cl.animationiteration.animation, delete Cl.animationstart.animation), "TransitionEvent" in window || delete Cl.transitionend.transition);
  function Dc(n) {
    if (dr[n]) return dr[n];
    if (!Cl[n]) return n;
    var r = Cl[n], o;
    for (o in r) if (r.hasOwnProperty(o) && o in Td) return dr[n] = r[o];
    return n;
  }
  var $v = Dc("animationend"), Bv = Dc("animationiteration"), qv = Dc("animationstart"), Wv = Dc("transitionend"), Dd = /* @__PURE__ */ new Map(), Oc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Aa(n, r) {
    Dd.set(n, r), E(r, [n]);
  }
  for (var Od = 0; Od < Oc.length; Od++) {
    var El = Oc[Od], Iy = El.toLowerCase(), Vy = El[0].toUpperCase() + El.slice(1);
    Aa(Iy, "on" + Vy);
  }
  Aa($v, "onAnimationEnd"), Aa(Bv, "onAnimationIteration"), Aa(qv, "onAnimationStart"), Aa("dblclick", "onDoubleClick"), Aa("focusin", "onFocus"), Aa("focusout", "onBlur"), Aa(Wv, "onTransitionEnd"), m("onMouseEnter", ["mouseout", "mouseover"]), m("onMouseLeave", ["mouseout", "mouseover"]), m("onPointerEnter", ["pointerout", "pointerover"]), m("onPointerLeave", ["pointerout", "pointerover"]), E("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), E("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), E("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), E("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ms = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Nd = new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));
  function Nc(n, r, o) {
    var u = n.type || "unknown-event";
    n.currentTarget = o, We(u, r, void 0, n), n.currentTarget = null;
  }
  function xl(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var u = n[o], c = u.event;
      u = u.listeners;
      e: {
        var h = void 0;
        if (r) for (var C = u.length - 1; 0 <= C; C--) {
          var O = u[C], j = O.instance, Q = O.currentTarget;
          if (O = O.listener, j !== h && c.isPropagationStopped()) break e;
          Nc(c, O, Q), h = j;
        }
        else for (C = 0; C < u.length; C++) {
          if (O = u[C], j = O.instance, Q = O.currentTarget, O = O.listener, j !== h && c.isPropagationStopped()) break e;
          Nc(c, O, Q), h = j;
        }
      }
    }
    if (Ei) throw n = L, Ei = !1, L = null, n;
  }
  function Qt(n, r) {
    var o = r[Ss];
    o === void 0 && (o = r[Ss] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    o.has(u) || (Yv(r, n, 2, !1), o.add(u));
  }
  function Mc(n, r, o) {
    var u = 0;
    r && (u |= 4), Yv(o, n, u, r);
  }
  var Lc = "_reactListening" + Math.random().toString(36).slice(2);
  function Eu(n) {
    if (!n[Lc]) {
      n[Lc] = !0, S.forEach(function(o) {
        o !== "selectionchange" && (Nd.has(o) || Mc(o, !1, n), Mc(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Lc] || (r[Lc] = !0, Mc("selectionchange", !1, r));
    }
  }
  function Yv(n, r, o, u) {
    switch (yu(r)) {
      case 1:
        var c = vu;
        break;
      case 4:
        c = hu;
        break;
      default:
        c = Mo;
    }
    o = c.bind(null, r, o, n), c = void 0, !Lr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), u ? c !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: c }) : n.addEventListener(r, o, !0) : c !== void 0 ? n.addEventListener(r, o, { passive: c }) : n.addEventListener(r, o, !1);
  }
  function jc(n, r, o, u, c) {
    var h = u;
    if ((r & 1) === 0 && (r & 2) === 0 && u !== null) e: for (; ; ) {
      if (u === null) return;
      var C = u.tag;
      if (C === 3 || C === 4) {
        var O = u.stateNode.containerInfo;
        if (O === c || O.nodeType === 8 && O.parentNode === c) break;
        if (C === 4) for (C = u.return; C !== null; ) {
          var j = C.tag;
          if ((j === 3 || j === 4) && (j = C.stateNode.containerInfo, j === c || j.nodeType === 8 && j.parentNode === c)) return;
          C = C.return;
        }
        for (; O !== null; ) {
          if (C = wl(O), C === null) return;
          if (j = C.tag, j === 5 || j === 6) {
            u = h = C;
            continue e;
          }
          O = O.parentNode;
        }
      }
      u = u.return;
    }
    dl(function() {
      var Q = h, ce = Jt(o), de = [];
      e: {
        var se = Dd.get(n);
        if (se !== void 0) {
          var Pe = Nt, Ge = n;
          switch (n) {
            case "keypress":
              if (J(o) === 0) break e;
            case "keydown":
            case "keyup":
              Pe = _d;
              break;
            case "focusin":
              Ge = "focus", Pe = _l;
              break;
            case "focusout":
              Ge = "blur", Pe = _l;
              break;
            case "beforeblur":
            case "afterblur":
              Pe = _l;
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
              Pe = Lo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Pe = Ji;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Pe = Tv;
              break;
            case $v:
            case Bv:
            case qv:
              Pe = xc;
              break;
            case Wv:
              Pe = eo;
              break;
            case "scroll":
              Pe = fn;
              break;
            case "wheel":
              Pe = to;
              break;
            case "copy":
            case "cut":
            case "paste":
              Pe = bv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Pe = kv;
          }
          var Xe = (r & 4) !== 0, jn = !Xe && n === "scroll", V = Xe ? se !== null ? se + "Capture" : null : se;
          Xe = [];
          for (var U = Q, q; U !== null; ) {
            q = U;
            var fe = q.stateNode;
            if (q.tag === 5 && fe !== null && (q = fe, V !== null && (fe = Mr(U, V), fe != null && Xe.push(xu(U, fe, q)))), jn) break;
            U = U.return;
          }
          0 < Xe.length && (se = new Pe(se, Ge, null, o, ce), de.push({ event: se, listeners: Xe }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (se = n === "mouseover" || n === "pointerover", Pe = n === "mouseout" || n === "pointerout", se && o !== sn && (Ge = o.relatedTarget || o.fromElement) && (wl(Ge) || Ge[no])) break e;
          if ((Pe || se) && (se = ce.window === ce ? ce : (se = ce.ownerDocument) ? se.defaultView || se.parentWindow : window, Pe ? (Ge = o.relatedTarget || o.toElement, Pe = Q, Ge = Ge ? wl(Ge) : null, Ge !== null && (jn = Et(Ge), Ge !== jn || Ge.tag !== 5 && Ge.tag !== 6) && (Ge = null)) : (Pe = null, Ge = Q), Pe !== Ge)) {
            if (Xe = Lo, fe = "onMouseLeave", V = "onMouseEnter", U = "mouse", (n === "pointerout" || n === "pointerover") && (Xe = kv, fe = "onPointerLeave", V = "onPointerEnter", U = "pointer"), jn = Pe == null ? se : ci(Pe), q = Ge == null ? se : ci(Ge), se = new Xe(fe, U + "leave", Pe, o, ce), se.target = jn, se.relatedTarget = q, fe = null, wl(ce) === Q && (Xe = new Xe(V, U + "enter", Ge, o, ce), Xe.target = q, Xe.relatedTarget = jn, fe = Xe), jn = fe, Pe && Ge) t: {
              for (Xe = Pe, V = Ge, U = 0, q = Xe; q; q = Ao(q)) U++;
              for (q = 0, fe = V; fe; fe = Ao(fe)) q++;
              for (; 0 < U - q; ) Xe = Ao(Xe), U--;
              for (; 0 < q - U; ) V = Ao(V), q--;
              for (; U--; ) {
                if (Xe === V || V !== null && Xe === V.alternate) break t;
                Xe = Ao(Xe), V = Ao(V);
              }
              Xe = null;
            }
            else Xe = null;
            Pe !== null && Gv(de, se, Pe, Xe, !1), Ge !== null && jn !== null && Gv(de, jn, Ge, Xe, !0);
          }
        }
        e: {
          if (se = Q ? ci(Q) : window, Pe = se.nodeName && se.nodeName.toLowerCase(), Pe === "select" || Pe === "input" && se.type === "file") var Qe = Ay;
          else if (jv(se)) if (Uv) Qe = Vv;
          else {
            Qe = Iv;
            var st = Uy;
          }
          else (Pe = se.nodeName) && Pe.toLowerCase() === "input" && (se.type === "checkbox" || se.type === "radio") && (Qe = zy);
          if (Qe && (Qe = Qe(n, Q))) {
            Ed(de, Qe, o, ce);
            break e;
          }
          st && st(n, se, Q), n === "focusout" && (st = se._wrapperState) && st.controlled && se.type === "number" && ma(se, "number", se.value);
        }
        switch (st = Q ? ci(Q) : window, n) {
          case "focusin":
            (jv(st) || st.contentEditable === "true") && (Cu = st, wd = Q, hs = null);
            break;
          case "focusout":
            hs = wd = Cu = null;
            break;
          case "mousedown":
            Rd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Rd = !1, kd(de, o, ce);
            break;
          case "selectionchange":
            if (Fy) break;
          case "keydown":
          case "keyup":
            kd(de, o, ce);
        }
        var ft;
        if (gu) e: {
          switch (n) {
            case "compositionstart":
              var mt = "onCompositionStart";
              break e;
            case "compositionend":
              mt = "onCompositionEnd";
              break e;
            case "compositionupdate":
              mt = "onCompositionUpdate";
              break e;
          }
          mt = void 0;
        }
        else _u ? Nv(n, o) && (mt = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (mt = "onCompositionStart");
        mt && (Dv && o.locale !== "ko" && (_u || mt !== "onCompositionStart" ? mt === "onCompositionEnd" && _u && (ft = Y()) : (ui = ce, _ = "value" in ui ? ui.value : ui.textContent, _u = !0)), st = ys(Q, mt), 0 < st.length && (mt = new md(mt, n, null, o, ce), de.push({ event: mt, listeners: st }), ft ? mt.data = ft : (ft = Mv(o), ft !== null && (mt.data = ft)))), (ft = fs ? Lv(n, o) : Ly(n, o)) && (Q = ys(Q, "onBeforeInput"), 0 < Q.length && (ce = new md("onBeforeInput", "beforeinput", null, o, ce), de.push({ event: ce, listeners: Q }), ce.data = ft));
      }
      xl(de, r);
    });
  }
  function xu(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function ys(n, r) {
    for (var o = r + "Capture", u = []; n !== null; ) {
      var c = n, h = c.stateNode;
      c.tag === 5 && h !== null && (c = h, h = Mr(n, o), h != null && u.unshift(xu(n, h, c)), h = Mr(n, r), h != null && u.push(xu(n, h, c))), n = n.return;
    }
    return u;
  }
  function Ao(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Gv(n, r, o, u, c) {
    for (var h = r._reactName, C = []; o !== null && o !== u; ) {
      var O = o, j = O.alternate, Q = O.stateNode;
      if (j !== null && j === u) break;
      O.tag === 5 && Q !== null && (O = Q, c ? (j = Mr(o, h), j != null && C.unshift(xu(o, j, O))) : c || (j = Mr(o, h), j != null && C.push(xu(o, j, O)))), o = o.return;
    }
    C.length !== 0 && n.push({ event: r, listeners: C });
  }
  var Qv = /\r\n?/g, Hy = /\u0000|\uFFFD/g;
  function Kv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Qv, `
`).replace(Hy, "");
  }
  function Ac(n, r, o) {
    if (r = Kv(r), Kv(n) !== r && o) throw Error(v(425));
  }
  function Uo() {
  }
  var gs = null, bl = null;
  function Uc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var zc = typeof setTimeout == "function" ? setTimeout : void 0, Md = typeof clearTimeout == "function" ? clearTimeout : void 0, Xv = typeof Promise == "function" ? Promise : void 0, bu = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xv < "u" ? function(n) {
    return Xv.resolve(null).then(n).catch(Pc);
  } : zc;
  function Pc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function wu(n, r) {
    var o = r, u = 0;
    do {
      var c = o.nextSibling;
      if (n.removeChild(o), c && c.nodeType === 8) if (o = c.data, o === "/$") {
        if (u === 0) {
          n.removeChild(c), li(r);
          return;
        }
        u--;
      } else o !== "$" && o !== "$?" && o !== "$!" || u++;
      o = c;
    } while (o);
    li(r);
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
  function Jv(n) {
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
  var zo = Math.random().toString(36).slice(2), Di = "__reactFiber$" + zo, _s = "__reactProps$" + zo, no = "__reactContainer$" + zo, Ss = "__reactEvents$" + zo, Ru = "__reactListeners$" + zo, $y = "__reactHandles$" + zo;
  function wl(n) {
    var r = n[Di];
    if (r) return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[no] || o[Di]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null) for (n = Jv(n); n !== null; ) {
          if (o = n[Di]) return o;
          n = Jv(n);
        }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function nt(n) {
    return n = n[Di] || n[no], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ci(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(v(33));
  }
  function Cn(n) {
    return n[_s] || null;
  }
  var jt = [], Ua = -1;
  function za(n) {
    return { current: n };
  }
  function dn(n) {
    0 > Ua || (n.current = jt[Ua], jt[Ua] = null, Ua--);
  }
  function et(n, r) {
    Ua++, jt[Ua] = n.current, n.current = r;
  }
  var kr = {}, wn = za(kr), Xn = za(!1), ta = kr;
  function na(n, r) {
    var o = n.type.contextTypes;
    if (!o) return kr;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, h;
    for (h in o) c[h] = r[h];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Fn(n) {
    return n = n.childContextTypes, n != null;
  }
  function ku() {
    dn(Xn), dn(wn);
  }
  function Zv(n, r, o) {
    if (wn.current !== kr) throw Error(v(168));
    et(wn, r), et(Xn, o);
  }
  function Cs(n, r, o) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return o;
    u = u.getChildContext();
    for (var c in u) if (!(c in r)) throw Error(v(108, Ue(n) || "Unknown", c));
    return me({}, o, u);
  }
  function rr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || kr, ta = wn.current, et(wn, n), et(Xn, Xn.current), !0;
  }
  function Fc(n, r, o) {
    var u = n.stateNode;
    if (!u) throw Error(v(169));
    o ? (n = Cs(n, r, ta), u.__reactInternalMemoizedMergedChildContext = n, dn(Xn), dn(wn), et(wn, n)) : dn(Xn), et(Xn, o);
  }
  var Oi = null, Tu = !1, ro = !1;
  function Ic(n) {
    Oi === null ? Oi = [n] : Oi.push(n);
  }
  function Po(n) {
    Tu = !0, Ic(n);
  }
  function Ni() {
    if (!ro && Oi !== null) {
      ro = !0;
      var n = 0, r = Vt;
      try {
        var o = Oi;
        for (Vt = 1; n < o.length; n++) {
          var u = o[n];
          do
            u = u(!0);
          while (u !== null);
        }
        Oi = null, Tu = !1;
      } catch (c) {
        throw Oi !== null && (Oi = Oi.slice(n + 1)), vn(ai, Ni), c;
      } finally {
        Vt = r, ro = !1;
      }
    }
    return null;
  }
  var Fo = [], Io = 0, Vo = null, ao = 0, In = [], Pa = 0, Sa = null, Mi = 1, Li = "";
  function Rl(n, r) {
    Fo[Io++] = ao, Fo[Io++] = Vo, Vo = n, ao = r;
  }
  function eh(n, r, o) {
    In[Pa++] = Mi, In[Pa++] = Li, In[Pa++] = Sa, Sa = n;
    var u = Mi;
    n = Li;
    var c = 32 - jr(u) - 1;
    u &= ~(1 << c), o += 1;
    var h = 32 - jr(r) + c;
    if (30 < h) {
      var C = c - c % 5;
      h = (u & (1 << C) - 1).toString(32), u >>= C, c -= C, Mi = 1 << 32 - jr(r) + c | o << c | u, Li = h + n;
    } else Mi = 1 << h | o << c | u, Li = n;
  }
  function Vc(n) {
    n.return !== null && (Rl(n, 1), eh(n, 1, 0));
  }
  function Hc(n) {
    for (; n === Vo; ) Vo = Fo[--Io], Fo[Io] = null, ao = Fo[--Io], Fo[Io] = null;
    for (; n === Sa; ) Sa = In[--Pa], In[Pa] = null, Li = In[--Pa], In[Pa] = null, Mi = In[--Pa], In[Pa] = null;
  }
  var ra = null, aa = null, yn = !1, Fa = null;
  function Ld(n, r) {
    var o = Ba(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function th(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ra = n, aa = Ti(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ra = n, aa = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = Sa !== null ? { id: Mi, overflow: Li } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = Ba(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, ra = n, aa = null, !0) : !1;
      default:
        return !1;
    }
  }
  function jd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Ad(n) {
    if (yn) {
      var r = aa;
      if (r) {
        var o = r;
        if (!th(n, r)) {
          if (jd(n)) throw Error(v(418));
          r = Ti(o.nextSibling);
          var u = ra;
          r && th(n, r) ? Ld(u, o) : (n.flags = n.flags & -4097 | 2, yn = !1, ra = n);
        }
      } else {
        if (jd(n)) throw Error(v(418));
        n.flags = n.flags & -4097 | 2, yn = !1, ra = n;
      }
    }
  }
  function Jn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    ra = n;
  }
  function $c(n) {
    if (n !== ra) return !1;
    if (!yn) return Jn(n), yn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Uc(n.type, n.memoizedProps)), r && (r = aa)) {
      if (jd(n)) throw Es(), Error(v(418));
      for (; r; ) Ld(n, r), r = Ti(r.nextSibling);
    }
    if (Jn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(v(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                aa = Ti(n.nextSibling);
                break e;
              }
              r--;
            } else o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        aa = null;
      }
    } else aa = ra ? Ti(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Es() {
    for (var n = aa; n; ) n = Ti(n.nextSibling);
  }
  function Ho() {
    aa = ra = null, yn = !1;
  }
  function io(n) {
    Fa === null ? Fa = [n] : Fa.push(n);
  }
  var By = Ne.ReactCurrentBatchConfig;
  function kl(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1) throw Error(v(309));
          var u = o.stateNode;
        }
        if (!u) throw Error(v(147, n));
        var c = u, h = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === h ? r.ref : (r = function(C) {
          var O = c.refs;
          C === null ? delete O[h] : O[h] = C;
        }, r._stringRef = h, r);
      }
      if (typeof n != "string") throw Error(v(284));
      if (!o._owner) throw Error(v(290, n));
    }
    return n;
  }
  function Bc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(v(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function nh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Tl(n) {
    function r(V, U) {
      if (n) {
        var q = V.deletions;
        q === null ? (V.deletions = [U], V.flags |= 16) : q.push(U);
      }
    }
    function o(V, U) {
      if (!n) return null;
      for (; U !== null; ) r(V, U), U = U.sibling;
      return null;
    }
    function u(V, U) {
      for (V = /* @__PURE__ */ new Map(); U !== null; ) U.key !== null ? V.set(U.key, U) : V.set(U.index, U), U = U.sibling;
      return V;
    }
    function c(V, U) {
      return V = Ko(V, U), V.index = 0, V.sibling = null, V;
    }
    function h(V, U, q) {
      return V.index = q, n ? (q = V.alternate, q !== null ? (q = q.index, q < U ? (V.flags |= 2, U) : q) : (V.flags |= 2, U)) : (V.flags |= 1048576, U);
    }
    function C(V) {
      return n && V.alternate === null && (V.flags |= 2), V;
    }
    function O(V, U, q, fe) {
      return U === null || U.tag !== 6 ? (U = dp(q, V.mode, fe), U.return = V, U) : (U = c(U, q), U.return = V, U);
    }
    function j(V, U, q, fe) {
      var Qe = q.type;
      return Qe === Le ? ce(V, U, q.props.children, fe, q.key) : U !== null && (U.elementType === Qe || typeof Qe == "object" && Qe !== null && Qe.$$typeof === Re && nh(Qe) === U.type) ? (fe = c(U, q.props), fe.ref = kl(V, U, q), fe.return = V, fe) : (fe = Js(q.type, q.key, q.props, null, V.mode, fe), fe.ref = kl(V, U, q), fe.return = V, fe);
    }
    function Q(V, U, q, fe) {
      return U === null || U.tag !== 4 || U.stateNode.containerInfo !== q.containerInfo || U.stateNode.implementation !== q.implementation ? (U = bf(q, V.mode, fe), U.return = V, U) : (U = c(U, q.children || []), U.return = V, U);
    }
    function ce(V, U, q, fe, Qe) {
      return U === null || U.tag !== 7 ? (U = fo(q, V.mode, fe, Qe), U.return = V, U) : (U = c(U, q), U.return = V, U);
    }
    function de(V, U, q) {
      if (typeof U == "string" && U !== "" || typeof U == "number") return U = dp("" + U, V.mode, q), U.return = V, U;
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case he:
            return q = Js(U.type, U.key, U.props, null, V.mode, q), q.ref = kl(V, null, U), q.return = V, q;
          case Me:
            return U = bf(U, V.mode, q), U.return = V, U;
          case Re:
            var fe = U._init;
            return de(V, fe(U._payload), q);
        }
        if (tr(U) || De(U)) return U = fo(U, V.mode, q, null), U.return = V, U;
        Bc(V, U);
      }
      return null;
    }
    function se(V, U, q, fe) {
      var Qe = U !== null ? U.key : null;
      if (typeof q == "string" && q !== "" || typeof q == "number") return Qe !== null ? null : O(V, U, "" + q, fe);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case he:
            return q.key === Qe ? j(V, U, q, fe) : null;
          case Me:
            return q.key === Qe ? Q(V, U, q, fe) : null;
          case Re:
            return Qe = q._init, se(
              V,
              U,
              Qe(q._payload),
              fe
            );
        }
        if (tr(q) || De(q)) return Qe !== null ? null : ce(V, U, q, fe, null);
        Bc(V, q);
      }
      return null;
    }
    function Pe(V, U, q, fe, Qe) {
      if (typeof fe == "string" && fe !== "" || typeof fe == "number") return V = V.get(q) || null, O(U, V, "" + fe, Qe);
      if (typeof fe == "object" && fe !== null) {
        switch (fe.$$typeof) {
          case he:
            return V = V.get(fe.key === null ? q : fe.key) || null, j(U, V, fe, Qe);
          case Me:
            return V = V.get(fe.key === null ? q : fe.key) || null, Q(U, V, fe, Qe);
          case Re:
            var st = fe._init;
            return Pe(V, U, q, st(fe._payload), Qe);
        }
        if (tr(fe) || De(fe)) return V = V.get(q) || null, ce(U, V, fe, Qe, null);
        Bc(U, fe);
      }
      return null;
    }
    function Ge(V, U, q, fe) {
      for (var Qe = null, st = null, ft = U, mt = U = 0, or = null; ft !== null && mt < q.length; mt++) {
        ft.index > mt ? (or = ft, ft = null) : or = ft.sibling;
        var Bt = se(V, ft, q[mt], fe);
        if (Bt === null) {
          ft === null && (ft = or);
          break;
        }
        n && ft && Bt.alternate === null && r(V, ft), U = h(Bt, U, mt), st === null ? Qe = Bt : st.sibling = Bt, st = Bt, ft = or;
      }
      if (mt === q.length) return o(V, ft), yn && Rl(V, mt), Qe;
      if (ft === null) {
        for (; mt < q.length; mt++) ft = de(V, q[mt], fe), ft !== null && (U = h(ft, U, mt), st === null ? Qe = ft : st.sibling = ft, st = ft);
        return yn && Rl(V, mt), Qe;
      }
      for (ft = u(V, ft); mt < q.length; mt++) or = Pe(ft, V, mt, q[mt], fe), or !== null && (n && or.alternate !== null && ft.delete(or.key === null ? mt : or.key), U = h(or, U, mt), st === null ? Qe = or : st.sibling = or, st = or);
      return n && ft.forEach(function(Zo) {
        return r(V, Zo);
      }), yn && Rl(V, mt), Qe;
    }
    function Xe(V, U, q, fe) {
      var Qe = De(q);
      if (typeof Qe != "function") throw Error(v(150));
      if (q = Qe.call(q), q == null) throw Error(v(151));
      for (var st = Qe = null, ft = U, mt = U = 0, or = null, Bt = q.next(); ft !== null && !Bt.done; mt++, Bt = q.next()) {
        ft.index > mt ? (or = ft, ft = null) : or = ft.sibling;
        var Zo = se(V, ft, Bt.value, fe);
        if (Zo === null) {
          ft === null && (ft = or);
          break;
        }
        n && ft && Zo.alternate === null && r(V, ft), U = h(Zo, U, mt), st === null ? Qe = Zo : st.sibling = Zo, st = Zo, ft = or;
      }
      if (Bt.done) return o(
        V,
        ft
      ), yn && Rl(V, mt), Qe;
      if (ft === null) {
        for (; !Bt.done; mt++, Bt = q.next()) Bt = de(V, Bt.value, fe), Bt !== null && (U = h(Bt, U, mt), st === null ? Qe = Bt : st.sibling = Bt, st = Bt);
        return yn && Rl(V, mt), Qe;
      }
      for (ft = u(V, ft); !Bt.done; mt++, Bt = q.next()) Bt = Pe(ft, V, mt, Bt.value, fe), Bt !== null && (n && Bt.alternate !== null && ft.delete(Bt.key === null ? mt : Bt.key), U = h(Bt, U, mt), st === null ? Qe = Bt : st.sibling = Bt, st = Bt);
      return n && ft.forEach(function(Ph) {
        return r(V, Ph);
      }), yn && Rl(V, mt), Qe;
    }
    function jn(V, U, q, fe) {
      if (typeof q == "object" && q !== null && q.type === Le && q.key === null && (q = q.props.children), typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case he:
            e: {
              for (var Qe = q.key, st = U; st !== null; ) {
                if (st.key === Qe) {
                  if (Qe = q.type, Qe === Le) {
                    if (st.tag === 7) {
                      o(V, st.sibling), U = c(st, q.props.children), U.return = V, V = U;
                      break e;
                    }
                  } else if (st.elementType === Qe || typeof Qe == "object" && Qe !== null && Qe.$$typeof === Re && nh(Qe) === st.type) {
                    o(V, st.sibling), U = c(st, q.props), U.ref = kl(V, st, q), U.return = V, V = U;
                    break e;
                  }
                  o(V, st);
                  break;
                } else r(V, st);
                st = st.sibling;
              }
              q.type === Le ? (U = fo(q.props.children, V.mode, fe, q.key), U.return = V, V = U) : (fe = Js(q.type, q.key, q.props, null, V.mode, fe), fe.ref = kl(V, U, q), fe.return = V, V = fe);
            }
            return C(V);
          case Me:
            e: {
              for (st = q.key; U !== null; ) {
                if (U.key === st) if (U.tag === 4 && U.stateNode.containerInfo === q.containerInfo && U.stateNode.implementation === q.implementation) {
                  o(V, U.sibling), U = c(U, q.children || []), U.return = V, V = U;
                  break e;
                } else {
                  o(V, U);
                  break;
                }
                else r(V, U);
                U = U.sibling;
              }
              U = bf(q, V.mode, fe), U.return = V, V = U;
            }
            return C(V);
          case Re:
            return st = q._init, jn(V, U, st(q._payload), fe);
        }
        if (tr(q)) return Ge(V, U, q, fe);
        if (De(q)) return Xe(V, U, q, fe);
        Bc(V, q);
      }
      return typeof q == "string" && q !== "" || typeof q == "number" ? (q = "" + q, U !== null && U.tag === 6 ? (o(V, U.sibling), U = c(U, q), U.return = V, V = U) : (o(V, U), U = dp(q, V.mode, fe), U.return = V, V = U), C(V)) : o(V, U);
    }
    return jn;
  }
  var On = Tl(!0), je = Tl(!1), Ca = za(null), ia = null, Du = null, Ud = null;
  function zd() {
    Ud = Du = ia = null;
  }
  function Pd(n) {
    var r = Ca.current;
    dn(Ca), n._currentValue = r;
  }
  function Fd(n, r, o) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === o) break;
      n = n.return;
    }
  }
  function En(n, r) {
    ia = n, Ud = Du = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (Hn = !0), n.firstContext = null);
  }
  function Ia(n) {
    var r = n._currentValue;
    if (Ud !== n) if (n = { context: n, memoizedValue: r, next: null }, Du === null) {
      if (ia === null) throw Error(v(308));
      Du = n, ia.dependencies = { lanes: 0, firstContext: n };
    } else Du = Du.next = n;
    return r;
  }
  var Dl = null;
  function Id(n) {
    Dl === null ? Dl = [n] : Dl.push(n);
  }
  function Vd(n, r, o, u) {
    var c = r.interleaved;
    return c === null ? (o.next = o, Id(r)) : (o.next = c.next, c.next = o), r.interleaved = o, Ea(n, u);
  }
  function Ea(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; ) n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var xa = !1;
  function Hd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function rh(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function oo(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function $o(n, r, o) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (At & 2) !== 0) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, Ea(n, o);
    }
    return c = u.interleaved, c === null ? (r.next = r, Id(u)) : (r.next = c.next, c.next = r), u.interleaved = r, Ea(n, o);
  }
  function qc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Xi(n, o);
    }
  }
  function ah(n, r) {
    var o = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, o === u)) {
      var c = null, h = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var C = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          h === null ? c = h = C : h = h.next = C, o = o.next;
        } while (o !== null);
        h === null ? c = h = r : h = h.next = r;
      } else c = h = r;
      o = { baseState: u.baseState, firstBaseUpdate: c, lastBaseUpdate: h, shared: u.shared, effects: u.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function xs(n, r, o, u) {
    var c = n.updateQueue;
    xa = !1;
    var h = c.firstBaseUpdate, C = c.lastBaseUpdate, O = c.shared.pending;
    if (O !== null) {
      c.shared.pending = null;
      var j = O, Q = j.next;
      j.next = null, C === null ? h = Q : C.next = Q, C = j;
      var ce = n.alternate;
      ce !== null && (ce = ce.updateQueue, O = ce.lastBaseUpdate, O !== C && (O === null ? ce.firstBaseUpdate = Q : O.next = Q, ce.lastBaseUpdate = j));
    }
    if (h !== null) {
      var de = c.baseState;
      C = 0, ce = Q = j = null, O = h;
      do {
        var se = O.lane, Pe = O.eventTime;
        if ((u & se) === se) {
          ce !== null && (ce = ce.next = {
            eventTime: Pe,
            lane: 0,
            tag: O.tag,
            payload: O.payload,
            callback: O.callback,
            next: null
          });
          e: {
            var Ge = n, Xe = O;
            switch (se = r, Pe = o, Xe.tag) {
              case 1:
                if (Ge = Xe.payload, typeof Ge == "function") {
                  de = Ge.call(Pe, de, se);
                  break e;
                }
                de = Ge;
                break e;
              case 3:
                Ge.flags = Ge.flags & -65537 | 128;
              case 0:
                if (Ge = Xe.payload, se = typeof Ge == "function" ? Ge.call(Pe, de, se) : Ge, se == null) break e;
                de = me({}, de, se);
                break e;
              case 2:
                xa = !0;
            }
          }
          O.callback !== null && O.lane !== 0 && (n.flags |= 64, se = c.effects, se === null ? c.effects = [O] : se.push(O));
        } else Pe = { eventTime: Pe, lane: se, tag: O.tag, payload: O.payload, callback: O.callback, next: null }, ce === null ? (Q = ce = Pe, j = de) : ce = ce.next = Pe, C |= se;
        if (O = O.next, O === null) {
          if (O = c.shared.pending, O === null) break;
          se = O, O = se.next, se.next = null, c.lastBaseUpdate = se, c.shared.pending = null;
        }
      } while (!0);
      if (ce === null && (j = de), c.baseState = j, c.firstBaseUpdate = Q, c.lastBaseUpdate = ce, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          C |= c.lane, c = c.next;
        while (c !== r);
      } else h === null && (c.shared.lanes = 0);
      Pi |= C, n.lanes = C, n.memoizedState = de;
    }
  }
  function $d(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], c = u.callback;
      if (c !== null) {
        if (u.callback = null, u = o, typeof c != "function") throw Error(v(191, c));
        c.call(u);
      }
    }
  }
  var bs = {}, ji = za(bs), ws = za(bs), Rs = za(bs);
  function Ol(n) {
    if (n === bs) throw Error(v(174));
    return n;
  }
  function Bd(n, r) {
    switch (et(Rs, r), et(ws, n), et(ji, bs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ya(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ya(r, n);
    }
    dn(ji), et(ji, r);
  }
  function Nl() {
    dn(ji), dn(ws), dn(Rs);
  }
  function ih(n) {
    Ol(Rs.current);
    var r = Ol(ji.current), o = ya(r, n.type);
    r !== o && (et(ws, n), et(ji, o));
  }
  function Wc(n) {
    ws.current === n && (dn(ji), dn(ws));
  }
  var xn = za(0);
  function Yc(n) {
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
  var ks = [];
  function rt() {
    for (var n = 0; n < ks.length; n++) ks[n]._workInProgressVersionPrimary = null;
    ks.length = 0;
  }
  var Dt = Ne.ReactCurrentDispatcher, Ht = Ne.ReactCurrentBatchConfig, rn = 0, $t = null, Vn = null, ar = null, Gc = !1, Ts = !1, Ml = 0, le = 0;
  function It() {
    throw Error(v(321));
  }
  function pt(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++) if (!si(n[o], r[o])) return !1;
    return !0;
  }
  function Bo(n, r, o, u, c, h) {
    if (rn = h, $t = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Dt.current = n === null || n.memoizedState === null ? cf : js, n = o(u, c), Ts) {
      h = 0;
      do {
        if (Ts = !1, Ml = 0, 25 <= h) throw Error(v(301));
        h += 1, ar = Vn = null, r.updateQueue = null, Dt.current = ff, n = o(u, c);
      } while (Ts);
    }
    if (Dt.current = zl, r = Vn !== null && Vn.next !== null, rn = 0, ar = Vn = $t = null, Gc = !1, r) throw Error(v(300));
    return n;
  }
  function fi() {
    var n = Ml !== 0;
    return Ml = 0, n;
  }
  function Tr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ar === null ? $t.memoizedState = ar = n : ar = ar.next = n, ar;
  }
  function Nn() {
    if (Vn === null) {
      var n = $t.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Vn.next;
    var r = ar === null ? $t.memoizedState : ar.next;
    if (r !== null) ar = r, Vn = n;
    else {
      if (n === null) throw Error(v(310));
      Vn = n, n = { memoizedState: Vn.memoizedState, baseState: Vn.baseState, baseQueue: Vn.baseQueue, queue: Vn.queue, next: null }, ar === null ? $t.memoizedState = ar = n : ar = ar.next = n;
    }
    return ar;
  }
  function lo(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function qo(n) {
    var r = Nn(), o = r.queue;
    if (o === null) throw Error(v(311));
    o.lastRenderedReducer = n;
    var u = Vn, c = u.baseQueue, h = o.pending;
    if (h !== null) {
      if (c !== null) {
        var C = c.next;
        c.next = h.next, h.next = C;
      }
      u.baseQueue = c = h, o.pending = null;
    }
    if (c !== null) {
      h = c.next, u = u.baseState;
      var O = C = null, j = null, Q = h;
      do {
        var ce = Q.lane;
        if ((rn & ce) === ce) j !== null && (j = j.next = { lane: 0, action: Q.action, hasEagerState: Q.hasEagerState, eagerState: Q.eagerState, next: null }), u = Q.hasEagerState ? Q.eagerState : n(u, Q.action);
        else {
          var de = {
            lane: ce,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null
          };
          j === null ? (O = j = de, C = u) : j = j.next = de, $t.lanes |= ce, Pi |= ce;
        }
        Q = Q.next;
      } while (Q !== null && Q !== h);
      j === null ? C = u : j.next = O, si(u, r.memoizedState) || (Hn = !0), r.memoizedState = u, r.baseState = C, r.baseQueue = j, o.lastRenderedState = u;
    }
    if (n = o.interleaved, n !== null) {
      c = n;
      do
        h = c.lane, $t.lanes |= h, Pi |= h, c = c.next;
      while (c !== n);
    } else c === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function Ll(n) {
    var r = Nn(), o = r.queue;
    if (o === null) throw Error(v(311));
    o.lastRenderedReducer = n;
    var u = o.dispatch, c = o.pending, h = r.memoizedState;
    if (c !== null) {
      o.pending = null;
      var C = c = c.next;
      do
        h = n(h, C.action), C = C.next;
      while (C !== c);
      si(h, r.memoizedState) || (Hn = !0), r.memoizedState = h, r.baseQueue === null && (r.baseState = h), o.lastRenderedState = h;
    }
    return [h, u];
  }
  function Qc() {
  }
  function Kc(n, r) {
    var o = $t, u = Nn(), c = r(), h = !si(u.memoizedState, c);
    if (h && (u.memoizedState = c, Hn = !0), u = u.queue, Ds(Zc.bind(null, o, u, n), [n]), u.getSnapshot !== r || h || ar !== null && ar.memoizedState.tag & 1) {
      if (o.flags |= 2048, jl(9, Jc.bind(null, o, u, c, r), void 0, null), Zn === null) throw Error(v(349));
      (rn & 30) !== 0 || Xc(o, r, c);
    }
    return c;
  }
  function Xc(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = $t.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, $t.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function Jc(n, r, o, u) {
    r.value = o, r.getSnapshot = u, ef(r) && tf(n);
  }
  function Zc(n, r, o) {
    return o(function() {
      ef(r) && tf(n);
    });
  }
  function ef(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !si(n, o);
    } catch {
      return !0;
    }
  }
  function tf(n) {
    var r = Ea(n, 1);
    r !== null && Ir(r, n, 1, -1);
  }
  function nf(n) {
    var r = Tr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: lo, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ul.bind(null, $t, n), [r.memoizedState, n];
  }
  function jl(n, r, o, u) {
    return n = { tag: n, create: r, destroy: o, deps: u, next: null }, r = $t.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, $t.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (u = o.next, o.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function rf() {
    return Nn().memoizedState;
  }
  function Ou(n, r, o, u) {
    var c = Tr();
    $t.flags |= n, c.memoizedState = jl(1 | r, o, void 0, u === void 0 ? null : u);
  }
  function Nu(n, r, o, u) {
    var c = Nn();
    u = u === void 0 ? null : u;
    var h = void 0;
    if (Vn !== null) {
      var C = Vn.memoizedState;
      if (h = C.destroy, u !== null && pt(u, C.deps)) {
        c.memoizedState = jl(r, o, h, u);
        return;
      }
    }
    $t.flags |= n, c.memoizedState = jl(1 | r, o, h, u);
  }
  function af(n, r) {
    return Ou(8390656, 8, n, r);
  }
  function Ds(n, r) {
    return Nu(2048, 8, n, r);
  }
  function of(n, r) {
    return Nu(4, 2, n, r);
  }
  function Os(n, r) {
    return Nu(4, 4, n, r);
  }
  function Al(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function lf(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Nu(4, 4, Al.bind(null, r, n), o);
  }
  function Ns() {
  }
  function uf(n, r) {
    var o = Nn();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && pt(r, u[1]) ? u[0] : (o.memoizedState = [n, r], n);
  }
  function sf(n, r) {
    var o = Nn();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && pt(r, u[1]) ? u[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function qd(n, r, o) {
    return (rn & 21) === 0 ? (n.baseState && (n.baseState = !1, Hn = !0), n.memoizedState = o) : (si(o, r) || (o = cu(), $t.lanes |= o, Pi |= o, n.baseState = !0), r);
  }
  function Ms(n, r) {
    var o = Vt;
    Vt = o !== 0 && 4 > o ? o : 4, n(!0);
    var u = Ht.transition;
    Ht.transition = {};
    try {
      n(!1), r();
    } finally {
      Vt = o, Ht.transition = u;
    }
  }
  function Wd() {
    return Nn().memoizedState;
  }
  function Ls(n, r, o) {
    var u = Fi(n);
    if (o = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null }, oa(n)) oh(r, o);
    else if (o = Vd(n, r, o, u), o !== null) {
      var c = qn();
      Ir(o, n, u, c), ln(o, r, u);
    }
  }
  function Ul(n, r, o) {
    var u = Fi(n), c = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (oa(n)) oh(r, c);
    else {
      var h = n.alternate;
      if (n.lanes === 0 && (h === null || h.lanes === 0) && (h = r.lastRenderedReducer, h !== null)) try {
        var C = r.lastRenderedState, O = h(C, o);
        if (c.hasEagerState = !0, c.eagerState = O, si(O, C)) {
          var j = r.interleaved;
          j === null ? (c.next = c, Id(r)) : (c.next = j.next, j.next = c), r.interleaved = c;
          return;
        }
      } catch {
      }
      o = Vd(n, r, c, u), o !== null && (c = qn(), Ir(o, n, u, c), ln(o, r, u));
    }
  }
  function oa(n) {
    var r = n.alternate;
    return n === $t || r !== null && r === $t;
  }
  function oh(n, r) {
    Ts = Gc = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function ln(n, r, o) {
    if ((o & 4194240) !== 0) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Xi(n, o);
    }
  }
  var zl = { readContext: Ia, useCallback: It, useContext: It, useEffect: It, useImperativeHandle: It, useInsertionEffect: It, useLayoutEffect: It, useMemo: It, useReducer: It, useRef: It, useState: It, useDebugValue: It, useDeferredValue: It, useTransition: It, useMutableSource: It, useSyncExternalStore: It, useId: It, unstable_isNewReconciler: !1 }, cf = { readContext: Ia, useCallback: function(n, r) {
    return Tr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ia, useEffect: af, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Ou(
      4194308,
      4,
      Al.bind(null, r, n),
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
    return r = o !== void 0 ? o(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = Ls.bind(null, $t, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = Tr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: nf, useDebugValue: Ns, useDeferredValue: function(n) {
    return Tr().memoizedState = n;
  }, useTransition: function() {
    var n = nf(!1), r = n[0];
    return n = Ms.bind(null, n[1]), Tr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var u = $t, c = Tr();
    if (yn) {
      if (o === void 0) throw Error(v(407));
      o = o();
    } else {
      if (o = r(), Zn === null) throw Error(v(349));
      (rn & 30) !== 0 || Xc(u, r, o);
    }
    c.memoizedState = o;
    var h = { value: o, getSnapshot: r };
    return c.queue = h, af(Zc.bind(
      null,
      u,
      h,
      n
    ), [n]), u.flags |= 2048, jl(9, Jc.bind(null, u, h, o, r), void 0, null), o;
  }, useId: function() {
    var n = Tr(), r = Zn.identifierPrefix;
    if (yn) {
      var o = Li, u = Mi;
      o = (u & ~(1 << 32 - jr(u) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = Ml++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else o = le++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, js = {
    readContext: Ia,
    useCallback: uf,
    useContext: Ia,
    useEffect: Ds,
    useImperativeHandle: lf,
    useInsertionEffect: of,
    useLayoutEffect: Os,
    useMemo: sf,
    useReducer: qo,
    useRef: rf,
    useState: function() {
      return qo(lo);
    },
    useDebugValue: Ns,
    useDeferredValue: function(n) {
      var r = Nn();
      return qd(r, Vn.memoizedState, n);
    },
    useTransition: function() {
      var n = qo(lo)[0], r = Nn().memoizedState;
      return [n, r];
    },
    useMutableSource: Qc,
    useSyncExternalStore: Kc,
    useId: Wd,
    unstable_isNewReconciler: !1
  }, ff = { readContext: Ia, useCallback: uf, useContext: Ia, useEffect: Ds, useImperativeHandle: lf, useInsertionEffect: of, useLayoutEffect: Os, useMemo: sf, useReducer: Ll, useRef: rf, useState: function() {
    return Ll(lo);
  }, useDebugValue: Ns, useDeferredValue: function(n) {
    var r = Nn();
    return Vn === null ? r.memoizedState = n : qd(r, Vn.memoizedState, n);
  }, useTransition: function() {
    var n = Ll(lo)[0], r = Nn().memoizedState;
    return [n, r];
  }, useMutableSource: Qc, useSyncExternalStore: Kc, useId: Wd, unstable_isNewReconciler: !1 };
  function di(n, r) {
    if (n && n.defaultProps) {
      r = me({}, r), n = n.defaultProps;
      for (var o in n) r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  function Yd(n, r, o, u) {
    r = n.memoizedState, o = o(u, r), o = o == null ? r : me({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var df = { isMounted: function(n) {
    return (n = n._reactInternals) ? Et(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var u = qn(), c = Fi(n), h = oo(u, c);
    h.payload = r, o != null && (h.callback = o), r = $o(n, h, c), r !== null && (Ir(r, n, c, u), qc(r, n, c));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var u = qn(), c = Fi(n), h = oo(u, c);
    h.tag = 1, h.payload = r, o != null && (h.callback = o), r = $o(n, h, c), r !== null && (Ir(r, n, c, u), qc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = qn(), u = Fi(n), c = oo(o, u);
    c.tag = 2, r != null && (c.callback = r), r = $o(n, c, u), r !== null && (Ir(r, n, u, o), qc(r, n, u));
  } };
  function lh(n, r, o, u, c, h, C) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, h, C) : r.prototype && r.prototype.isPureReactComponent ? !ps(o, u) || !ps(c, h) : !0;
  }
  function pf(n, r, o) {
    var u = !1, c = kr, h = r.contextType;
    return typeof h == "object" && h !== null ? h = Ia(h) : (c = Fn(r) ? ta : wn.current, u = r.contextTypes, h = (u = u != null) ? na(n, c) : kr), r = new r(o, h), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = df, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = h), r;
  }
  function uh(n, r, o, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, u), r.state !== n && df.enqueueReplaceState(r, r.state, null);
  }
  function As(n, r, o, u) {
    var c = n.stateNode;
    c.props = o, c.state = n.memoizedState, c.refs = {}, Hd(n);
    var h = r.contextType;
    typeof h == "object" && h !== null ? c.context = Ia(h) : (h = Fn(r) ? ta : wn.current, c.context = na(n, h)), c.state = n.memoizedState, h = r.getDerivedStateFromProps, typeof h == "function" && (Yd(n, r, h, o), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && df.enqueueReplaceState(c, c.state, null), xs(n, o, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Pl(n, r) {
    try {
      var o = "", u = r;
      do
        o += gt(u), u = u.return;
      while (u);
      var c = o;
    } catch (h) {
      c = `
Error generating stack: ` + h.message + `
` + h.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Gd(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function Qd(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var vf = typeof WeakMap == "function" ? WeakMap : Map;
  function sh(n, r, o) {
    o = oo(-1, o), o.tag = 3, o.payload = { element: null };
    var u = r.value;
    return o.callback = function() {
      zu || (zu = !0, Vl = u), Qd(n, r);
    }, o;
  }
  function Kd(n, r, o) {
    o = oo(-1, o), o.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      o.payload = function() {
        return u(c);
      }, o.callback = function() {
        Qd(n, r);
      };
    }
    var h = n.stateNode;
    return h !== null && typeof h.componentDidCatch == "function" && (o.callback = function() {
      Qd(n, r), typeof u != "function" && (Go === null ? Go = /* @__PURE__ */ new Set([this]) : Go.add(this));
      var C = r.stack;
      this.componentDidCatch(r.value, { componentStack: C !== null ? C : "" });
    }), o;
  }
  function Xd(n, r, o) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new vf();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else c = u.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(o) || (c.add(o), n = Xy.bind(null, n, r, o), r.then(n, n));
  }
  function ch(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Wo(n, r, o, u, c) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = oo(-1, 1), r.tag = 2, $o(o, r, 1))), o.lanes |= 1), n) : (n.flags |= 65536, n.lanes = c, n);
  }
  var Us = Ne.ReactCurrentOwner, Hn = !1;
  function pr(n, r, o, u) {
    r.child = n === null ? je(r, null, o, u) : On(r, n.child, o, u);
  }
  function la(n, r, o, u, c) {
    o = o.render;
    var h = r.ref;
    return En(r, c), u = Bo(n, r, o, u, h, c), o = fi(), n !== null && !Hn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ha(n, r, c)) : (yn && o && Vc(r), r.flags |= 1, pr(n, r, u, c), r.child);
  }
  function Fl(n, r, o, u, c) {
    if (n === null) {
      var h = o.type;
      return typeof h == "function" && !fp(h) && h.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = h, bt(n, r, h, u, c)) : (n = Js(o.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (h = n.child, (n.lanes & c) === 0) {
      var C = h.memoizedProps;
      if (o = o.compare, o = o !== null ? o : ps, o(C, u) && n.ref === r.ref) return Ha(n, r, c);
    }
    return r.flags |= 1, n = Ko(h, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function bt(n, r, o, u, c) {
    if (n !== null) {
      var h = n.memoizedProps;
      if (ps(h, u) && n.ref === r.ref) if (Hn = !1, r.pendingProps = u = h, (n.lanes & c) !== 0) (n.flags & 131072) !== 0 && (Hn = !0);
      else return r.lanes = n.lanes, Ha(n, r, c);
    }
    return fh(n, r, o, u, c);
  }
  function zs(n, r, o) {
    var u = r.pendingProps, c = u.children, h = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, et(ju, ba), ba |= o;
    else {
      if ((o & 1073741824) === 0) return n = h !== null ? h.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, et(ju, ba), ba |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = h !== null ? h.baseLanes : o, et(ju, ba), ba |= u;
    }
    else h !== null ? (u = h.baseLanes | o, r.memoizedState = null) : u = o, et(ju, ba), ba |= u;
    return pr(n, r, c, o), r.child;
  }
  function Jd(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function fh(n, r, o, u, c) {
    var h = Fn(o) ? ta : wn.current;
    return h = na(r, h), En(r, c), o = Bo(n, r, o, u, h, c), u = fi(), n !== null && !Hn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ha(n, r, c)) : (yn && u && Vc(r), r.flags |= 1, pr(n, r, o, c), r.child);
  }
  function dh(n, r, o, u, c) {
    if (Fn(o)) {
      var h = !0;
      rr(r);
    } else h = !1;
    if (En(r, c), r.stateNode === null) Va(n, r), pf(r, o, u), As(r, o, u, c), u = !0;
    else if (n === null) {
      var C = r.stateNode, O = r.memoizedProps;
      C.props = O;
      var j = C.context, Q = o.contextType;
      typeof Q == "object" && Q !== null ? Q = Ia(Q) : (Q = Fn(o) ? ta : wn.current, Q = na(r, Q));
      var ce = o.getDerivedStateFromProps, de = typeof ce == "function" || typeof C.getSnapshotBeforeUpdate == "function";
      de || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (O !== u || j !== Q) && uh(r, C, u, Q), xa = !1;
      var se = r.memoizedState;
      C.state = se, xs(r, u, C, c), j = r.memoizedState, O !== u || se !== j || Xn.current || xa ? (typeof ce == "function" && (Yd(r, o, ce, u), j = r.memoizedState), (O = xa || lh(r, o, O, u, se, j, Q)) ? (de || typeof C.UNSAFE_componentWillMount != "function" && typeof C.componentWillMount != "function" || (typeof C.componentWillMount == "function" && C.componentWillMount(), typeof C.UNSAFE_componentWillMount == "function" && C.UNSAFE_componentWillMount()), typeof C.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = j), C.props = u, C.state = j, C.context = Q, u = O) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      C = r.stateNode, rh(n, r), O = r.memoizedProps, Q = r.type === r.elementType ? O : di(r.type, O), C.props = Q, de = r.pendingProps, se = C.context, j = o.contextType, typeof j == "object" && j !== null ? j = Ia(j) : (j = Fn(o) ? ta : wn.current, j = na(r, j));
      var Pe = o.getDerivedStateFromProps;
      (ce = typeof Pe == "function" || typeof C.getSnapshotBeforeUpdate == "function") || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (O !== de || se !== j) && uh(r, C, u, j), xa = !1, se = r.memoizedState, C.state = se, xs(r, u, C, c);
      var Ge = r.memoizedState;
      O !== de || se !== Ge || Xn.current || xa ? (typeof Pe == "function" && (Yd(r, o, Pe, u), Ge = r.memoizedState), (Q = xa || lh(r, o, Q, u, se, Ge, j) || !1) ? (ce || typeof C.UNSAFE_componentWillUpdate != "function" && typeof C.componentWillUpdate != "function" || (typeof C.componentWillUpdate == "function" && C.componentWillUpdate(u, Ge, j), typeof C.UNSAFE_componentWillUpdate == "function" && C.UNSAFE_componentWillUpdate(u, Ge, j)), typeof C.componentDidUpdate == "function" && (r.flags |= 4), typeof C.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof C.componentDidUpdate != "function" || O === n.memoizedProps && se === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || O === n.memoizedProps && se === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Ge), C.props = u, C.state = Ge, C.context = j, u = Q) : (typeof C.componentDidUpdate != "function" || O === n.memoizedProps && se === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || O === n.memoizedProps && se === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return Ps(n, r, o, u, h, c);
  }
  function Ps(n, r, o, u, c, h) {
    Jd(n, r);
    var C = (r.flags & 128) !== 0;
    if (!u && !C) return c && Fc(r, o, !1), Ha(n, r, h);
    u = r.stateNode, Us.current = r;
    var O = C && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && C ? (r.child = On(r, n.child, null, h), r.child = On(r, null, O, h)) : pr(n, r, O, h), r.memoizedState = u.state, c && Fc(r, o, !0), r.child;
  }
  function Mu(n) {
    var r = n.stateNode;
    r.pendingContext ? Zv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Zv(n, r.context, !1), Bd(n, r.containerInfo);
  }
  function ph(n, r, o, u, c) {
    return Ho(), io(c), r.flags |= 256, pr(n, r, o, u), r.child;
  }
  var hf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Zd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function mf(n, r, o) {
    var u = r.pendingProps, c = xn.current, h = !1, C = (r.flags & 128) !== 0, O;
    if ((O = C) || (O = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), O ? (h = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), et(xn, c & 1), n === null)
      return Ad(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (C = u.children, n = u.fallback, h ? (u = r.mode, h = r.child, C = { mode: "hidden", children: C }, (u & 1) === 0 && h !== null ? (h.childLanes = 0, h.pendingProps = C) : h = Xo(C, u, 0, null), n = fo(n, u, o, null), h.return = r, n.return = r, h.sibling = n, r.child = h, r.child.memoizedState = Zd(o), r.memoizedState = hf, n) : ep(r, C));
    if (c = n.memoizedState, c !== null && (O = c.dehydrated, O !== null)) return vh(n, r, C, u, O, c, o);
    if (h) {
      h = u.fallback, C = r.mode, c = n.child, O = c.sibling;
      var j = { mode: "hidden", children: u.children };
      return (C & 1) === 0 && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = j, r.deletions = null) : (u = Ko(c, j), u.subtreeFlags = c.subtreeFlags & 14680064), O !== null ? h = Ko(O, h) : (h = fo(h, C, o, null), h.flags |= 2), h.return = r, u.return = r, u.sibling = h, r.child = u, u = h, h = r.child, C = n.child.memoizedState, C = C === null ? Zd(o) : { baseLanes: C.baseLanes | o, cachePool: null, transitions: C.transitions }, h.memoizedState = C, h.childLanes = n.childLanes & ~o, r.memoizedState = hf, u;
    }
    return h = n.child, n = h.sibling, u = Ko(h, { mode: "visible", children: u.children }), (r.mode & 1) === 0 && (u.lanes = o), u.return = r, u.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function ep(n, r) {
    return r = Xo({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Fs(n, r, o, u) {
    return u !== null && io(u), On(r, n.child, null, o), n = ep(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function vh(n, r, o, u, c, h, C) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, u = Gd(Error(v(422))), Fs(n, r, C, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (h = u.fallback, c = r.mode, u = Xo({ mode: "visible", children: u.children }, c, 0, null), h = fo(h, c, C, null), h.flags |= 2, u.return = r, h.return = r, u.sibling = h, r.child = u, (r.mode & 1) !== 0 && On(r, n.child, null, C), r.child.memoizedState = Zd(C), r.memoizedState = hf, h);
    if ((r.mode & 1) === 0) return Fs(n, r, C, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u) var O = u.dgst;
      return u = O, h = Error(v(419)), u = Gd(h, u, void 0), Fs(n, r, C, u);
    }
    if (O = (C & n.childLanes) !== 0, Hn || O) {
      if (u = Zn, u !== null) {
        switch (C & -C) {
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
        c = (c & (u.suspendedLanes | C)) !== 0 ? 0 : c, c !== 0 && c !== h.retryLane && (h.retryLane = c, Ea(n, c), Ir(u, n, c, -1));
      }
      return cp(), u = Gd(Error(v(421))), Fs(n, r, C, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Jy.bind(null, n), c._reactRetry = r, null) : (n = h.treeContext, aa = Ti(c.nextSibling), ra = r, yn = !0, Fa = null, n !== null && (In[Pa++] = Mi, In[Pa++] = Li, In[Pa++] = Sa, Mi = n.id, Li = n.overflow, Sa = r), r = ep(r, u.children), r.flags |= 4096, r);
  }
  function tp(n, r, o) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), Fd(n.return, r, o);
  }
  function zr(n, r, o, u, c) {
    var h = n.memoizedState;
    h === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: o, tailMode: c } : (h.isBackwards = r, h.rendering = null, h.renderingStartTime = 0, h.last = u, h.tail = o, h.tailMode = c);
  }
  function Ai(n, r, o) {
    var u = r.pendingProps, c = u.revealOrder, h = u.tail;
    if (pr(n, r, u.children, o), u = xn.current, (u & 2) !== 0) u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && tp(n, o, r);
        else if (n.tag === 19) tp(n, o, r);
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
    if (et(xn, u), (r.mode & 1) === 0) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (o = r.child, c = null; o !== null; ) n = o.alternate, n !== null && Yc(n) === null && (c = o), o = o.sibling;
        o = c, o === null ? (c = r.child, r.child = null) : (c = o.sibling, o.sibling = null), zr(r, !1, c, o, h);
        break;
      case "backwards":
        for (o = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Yc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = o, o = c, c = n;
        }
        zr(r, !0, o, null, h);
        break;
      case "together":
        zr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Va(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ha(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), Pi |= r.lanes, (o & r.childLanes) === 0) return null;
    if (n !== null && r.child !== n.child) throw Error(v(153));
    if (r.child !== null) {
      for (n = r.child, o = Ko(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; ) n = n.sibling, o = o.sibling = Ko(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function Is(n, r, o) {
    switch (r.tag) {
      case 3:
        Mu(r), Ho();
        break;
      case 5:
        ih(r);
        break;
      case 1:
        Fn(r.type) && rr(r);
        break;
      case 4:
        Bd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, c = r.memoizedProps.value;
        et(Ca, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (et(xn, xn.current & 1), r.flags |= 128, null) : (o & r.child.childLanes) !== 0 ? mf(n, r, o) : (et(xn, xn.current & 1), n = Ha(n, r, o), n !== null ? n.sibling : null);
        et(xn, xn.current & 1);
        break;
      case 19:
        if (u = (o & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (u) return Ai(n, r, o);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), et(xn, xn.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, zs(n, r, o);
    }
    return Ha(n, r, o);
  }
  var $a, $n, hh, mh;
  $a = function(n, r) {
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
  }, hh = function(n, r, o, u) {
    var c = n.memoizedProps;
    if (c !== u) {
      n = r.stateNode, Ol(ji.current);
      var h = null;
      switch (o) {
        case "input":
          c = ur(n, c), u = ur(n, u), h = [];
          break;
        case "select":
          c = me({}, c, { value: void 0 }), u = me({}, u, { value: void 0 }), h = [];
          break;
        case "textarea":
          c = Qn(n, c), u = Qn(n, u), h = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Uo);
      }
      pn(o, u);
      var C;
      o = null;
      for (Q in c) if (!u.hasOwnProperty(Q) && c.hasOwnProperty(Q) && c[Q] != null) if (Q === "style") {
        var O = c[Q];
        for (C in O) O.hasOwnProperty(C) && (o || (o = {}), o[C] = "");
      } else Q !== "dangerouslySetInnerHTML" && Q !== "children" && Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && Q !== "autoFocus" && (b.hasOwnProperty(Q) ? h || (h = []) : (h = h || []).push(Q, null));
      for (Q in u) {
        var j = u[Q];
        if (O = c?.[Q], u.hasOwnProperty(Q) && j !== O && (j != null || O != null)) if (Q === "style") if (O) {
          for (C in O) !O.hasOwnProperty(C) || j && j.hasOwnProperty(C) || (o || (o = {}), o[C] = "");
          for (C in j) j.hasOwnProperty(C) && O[C] !== j[C] && (o || (o = {}), o[C] = j[C]);
        } else o || (h || (h = []), h.push(
          Q,
          o
        )), o = j;
        else Q === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, O = O ? O.__html : void 0, j != null && O !== j && (h = h || []).push(Q, j)) : Q === "children" ? typeof j != "string" && typeof j != "number" || (h = h || []).push(Q, "" + j) : Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && (b.hasOwnProperty(Q) ? (j != null && Q === "onScroll" && Qt("scroll", n), h || O === j || (h = [])) : (h = h || []).push(Q, j));
      }
      o && (h = h || []).push("style", o);
      var Q = h;
      (r.updateQueue = Q) && (r.flags |= 4);
    }
  }, mh = function(n, r, o, u) {
    o !== u && (r.flags |= 4);
  };
  function Vs(n, r) {
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
    if (r) for (var c = n.child; c !== null; ) o |= c.lanes | c.childLanes, u |= c.subtreeFlags & 14680064, u |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) o |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= u, n.childLanes = o, r;
  }
  function yh(n, r, o) {
    var u = r.pendingProps;
    switch (Hc(r), r.tag) {
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
        return Fn(r.type) && ku(), ir(r), null;
      case 3:
        return u = r.stateNode, Nl(), dn(Xn), dn(wn), rt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && ($c(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, Fa !== null && (Hl(Fa), Fa = null))), $n(n, r), ir(r), null;
      case 5:
        Wc(r);
        var c = Ol(Rs.current);
        if (o = r.type, n !== null && r.stateNode != null) hh(n, r, o, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(v(166));
            return ir(r), null;
          }
          if (n = Ol(ji.current), $c(r)) {
            u = r.stateNode, o = r.type;
            var h = r.memoizedProps;
            switch (u[Di] = r, u[_s] = h, n = (r.mode & 1) !== 0, o) {
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
                for (c = 0; c < ms.length; c++) Qt(ms[c], u);
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
                Yn(u, h), Qt("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!h.multiple }, Qt("invalid", u);
                break;
              case "textarea":
                br(u, h), Qt("invalid", u);
            }
            pn(o, h), c = null;
            for (var C in h) if (h.hasOwnProperty(C)) {
              var O = h[C];
              C === "children" ? typeof O == "string" ? u.textContent !== O && (h.suppressHydrationWarning !== !0 && Ac(u.textContent, O, n), c = ["children", O]) : typeof O == "number" && u.textContent !== "" + O && (h.suppressHydrationWarning !== !0 && Ac(
                u.textContent,
                O,
                n
              ), c = ["children", "" + O]) : b.hasOwnProperty(C) && O != null && C === "onScroll" && Qt("scroll", u);
            }
            switch (o) {
              case "input":
                Un(u), gi(u, h, !0);
                break;
              case "textarea":
                Un(u), zn(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof h.onClick == "function" && (u.onclick = Uo);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            C = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = wr(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = C.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = C.createElement(o, { is: u.is }) : (n = C.createElement(o), o === "select" && (C = n, u.multiple ? C.multiple = !0 : u.size && (C.size = u.size))) : n = C.createElementNS(n, o), n[Di] = r, n[_s] = u, $a(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (C = nr(o, u), o) {
                case "dialog":
                  Qt("cancel", n), Qt("close", n), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Qt("load", n), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ms.length; c++) Qt(ms[c], n);
                  c = u;
                  break;
                case "source":
                  Qt("error", n), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  Qt(
                    "error",
                    n
                  ), Qt("load", n), c = u;
                  break;
                case "details":
                  Qt("toggle", n), c = u;
                  break;
                case "input":
                  Yn(n, u), c = ur(n, u), Qt("invalid", n);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = me({}, u, { value: void 0 }), Qt("invalid", n);
                  break;
                case "textarea":
                  br(n, u), c = Qn(n, u), Qt("invalid", n);
                  break;
                default:
                  c = u;
              }
              pn(o, c), O = c;
              for (h in O) if (O.hasOwnProperty(h)) {
                var j = O[h];
                h === "style" ? un(n, j) : h === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, j != null && _i(n, j)) : h === "children" ? typeof j == "string" ? (o !== "textarea" || j !== "") && we(n, j) : typeof j == "number" && we(n, "" + j) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (b.hasOwnProperty(h) ? j != null && h === "onScroll" && Qt("scroll", n) : j != null && Se(n, h, j, C));
              }
              switch (o) {
                case "input":
                  Un(n), gi(n, u, !1);
                  break;
                case "textarea":
                  Un(n), zn(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + dt(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, h = u.value, h != null ? Tn(n, !!u.multiple, h, !1) : u.defaultValue != null && Tn(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Uo);
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
        if (n && r.stateNode != null) mh(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(v(166));
          if (o = Ol(Rs.current), Ol(ji.current), $c(r)) {
            if (u = r.stateNode, o = r.memoizedProps, u[Di] = r, (h = u.nodeValue !== o) && (n = ra, n !== null)) switch (n.tag) {
              case 3:
                Ac(u.nodeValue, o, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Ac(u.nodeValue, o, (n.mode & 1) !== 0);
            }
            h && (r.flags |= 4);
          } else u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), u[Di] = r, r.stateNode = u;
        }
        return ir(r), null;
      case 13:
        if (dn(xn), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (yn && aa !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) Es(), Ho(), r.flags |= 98560, h = !1;
          else if (h = $c(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!h) throw Error(v(318));
              if (h = r.memoizedState, h = h !== null ? h.dehydrated : null, !h) throw Error(v(317));
              h[Di] = r;
            } else Ho(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            ir(r), h = !1;
          } else Fa !== null && (Hl(Fa), Fa = null), h = !0;
          if (!h) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = o, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (xn.current & 1) !== 0 ? Ln === 0 && (Ln = 3) : cp())), r.updateQueue !== null && (r.flags |= 4), ir(r), null);
      case 4:
        return Nl(), $n(n, r), n === null && Eu(r.stateNode.containerInfo), ir(r), null;
      case 10:
        return Pd(r.type._context), ir(r), null;
      case 17:
        return Fn(r.type) && ku(), ir(r), null;
      case 19:
        if (dn(xn), h = r.memoizedState, h === null) return ir(r), null;
        if (u = (r.flags & 128) !== 0, C = h.rendering, C === null) if (u) Vs(h, !1);
        else {
          if (Ln !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (C = Yc(n), C !== null) {
              for (r.flags |= 128, Vs(h, !1), u = C.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = o, o = r.child; o !== null; ) h = o, n = u, h.flags &= 14680066, C = h.alternate, C === null ? (h.childLanes = 0, h.lanes = n, h.child = null, h.subtreeFlags = 0, h.memoizedProps = null, h.memoizedState = null, h.updateQueue = null, h.dependencies = null, h.stateNode = null) : (h.childLanes = C.childLanes, h.lanes = C.lanes, h.child = C.child, h.subtreeFlags = 0, h.deletions = null, h.memoizedProps = C.memoizedProps, h.memoizedState = C.memoizedState, h.updateQueue = C.updateQueue, h.type = C.type, n = C.dependencies, h.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
              return et(xn, xn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          h.tail !== null && xt() > Uu && (r.flags |= 128, u = !0, Vs(h, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = Yc(C), n !== null) {
            if (r.flags |= 128, u = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), Vs(h, !0), h.tail === null && h.tailMode === "hidden" && !C.alternate && !yn) return ir(r), null;
          } else 2 * xt() - h.renderingStartTime > Uu && o !== 1073741824 && (r.flags |= 128, u = !0, Vs(h, !1), r.lanes = 4194304);
          h.isBackwards ? (C.sibling = r.child, r.child = C) : (o = h.last, o !== null ? o.sibling = C : r.child = C, h.last = C);
        }
        return h.tail !== null ? (r = h.tail, h.rendering = r, h.tail = r.sibling, h.renderingStartTime = xt(), r.sibling = null, o = xn.current, et(xn, u ? o & 1 | 2 : o & 1), r) : (ir(r), null);
      case 22:
      case 23:
        return sp(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && (r.mode & 1) !== 0 ? (ba & 1073741824) !== 0 && (ir(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : ir(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(v(156, r.tag));
  }
  function yf(n, r) {
    switch (Hc(r), r.tag) {
      case 1:
        return Fn(r.type) && ku(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Nl(), dn(Xn), dn(wn), rt(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Wc(r), null;
      case 13:
        if (dn(xn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(v(340));
          Ho();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return dn(xn), null;
      case 4:
        return Nl(), null;
      case 10:
        return Pd(r.type._context), null;
      case 22:
      case 23:
        return sp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Hs = !1, Dr = !1, qy = typeof WeakSet == "function" ? WeakSet : Set, $e = null;
  function Lu(n, r) {
    var o = n.ref;
    if (o !== null) if (typeof o == "function") try {
      o(null);
    } catch (u) {
      gn(n, r, u);
    }
    else o.current = null;
  }
  function gf(n, r, o) {
    try {
      o();
    } catch (u) {
      gn(n, r, u);
    }
  }
  var gh = !1;
  function _h(n, r) {
    if (gs = ja, n = vs(), kc(n)) {
      if ("selectionStart" in n) var o = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        o = (o = n.ownerDocument) && o.defaultView || window;
        var u = o.getSelection && o.getSelection();
        if (u && u.rangeCount !== 0) {
          o = u.anchorNode;
          var c = u.anchorOffset, h = u.focusNode;
          u = u.focusOffset;
          try {
            o.nodeType, h.nodeType;
          } catch {
            o = null;
            break e;
          }
          var C = 0, O = -1, j = -1, Q = 0, ce = 0, de = n, se = null;
          t: for (; ; ) {
            for (var Pe; de !== o || c !== 0 && de.nodeType !== 3 || (O = C + c), de !== h || u !== 0 && de.nodeType !== 3 || (j = C + u), de.nodeType === 3 && (C += de.nodeValue.length), (Pe = de.firstChild) !== null; )
              se = de, de = Pe;
            for (; ; ) {
              if (de === n) break t;
              if (se === o && ++Q === c && (O = C), se === h && ++ce === u && (j = C), (Pe = de.nextSibling) !== null) break;
              de = se, se = de.parentNode;
            }
            de = Pe;
          }
          o = O === -1 || j === -1 ? null : { start: O, end: j };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (bl = { focusedElem: n, selectionRange: o }, ja = !1, $e = r; $e !== null; ) if (r = $e, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, $e = n;
    else for (; $e !== null; ) {
      r = $e;
      try {
        var Ge = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Ge !== null) {
              var Xe = Ge.memoizedProps, jn = Ge.memoizedState, V = r.stateNode, U = V.getSnapshotBeforeUpdate(r.elementType === r.type ? Xe : di(r.type, Xe), jn);
              V.__reactInternalSnapshotBeforeUpdate = U;
            }
            break;
          case 3:
            var q = r.stateNode.containerInfo;
            q.nodeType === 1 ? q.textContent = "" : q.nodeType === 9 && q.documentElement && q.removeChild(q.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(v(163));
        }
      } catch (fe) {
        gn(r, r.return, fe);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, $e = n;
        break;
      }
      $e = r.return;
    }
    return Ge = gh, gh = !1, Ge;
  }
  function $s(n, r, o) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & n) === n) {
          var h = c.destroy;
          c.destroy = void 0, h !== void 0 && gf(r, o, h);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function Bs(n, r) {
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
  function np(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      n.tag, n = o, typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function _f(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, _f(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Di], delete r[_s], delete r[Ss], delete r[Ru], delete r[$y])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function qs(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function uo(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || qs(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Ui(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Uo));
    else if (u !== 4 && (n = n.child, n !== null)) for (Ui(n, r, o), n = n.sibling; n !== null; ) Ui(n, r, o), n = n.sibling;
  }
  function zi(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null)) for (zi(n, r, o), n = n.sibling; n !== null; ) zi(n, r, o), n = n.sibling;
  }
  var Mn = null, Pr = !1;
  function Fr(n, r, o) {
    for (o = o.child; o !== null; ) Sh(n, r, o), o = o.sibling;
  }
  function Sh(n, r, o) {
    if (Zr && typeof Zr.onCommitFiberUnmount == "function") try {
      Zr.onCommitFiberUnmount(ko, o);
    } catch {
    }
    switch (o.tag) {
      case 5:
        Dr || Lu(o, r);
      case 6:
        var u = Mn, c = Pr;
        Mn = null, Fr(n, r, o), Mn = u, Pr = c, Mn !== null && (Pr ? (n = Mn, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : Mn.removeChild(o.stateNode));
        break;
      case 18:
        Mn !== null && (Pr ? (n = Mn, o = o.stateNode, n.nodeType === 8 ? wu(n.parentNode, o) : n.nodeType === 1 && wu(n, o), li(n)) : wu(Mn, o.stateNode));
        break;
      case 4:
        u = Mn, c = Pr, Mn = o.stateNode.containerInfo, Pr = !0, Fr(n, r, o), Mn = u, Pr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Dr && (u = o.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var h = c, C = h.destroy;
            h = h.tag, C !== void 0 && ((h & 2) !== 0 || (h & 4) !== 0) && gf(o, r, C), c = c.next;
          } while (c !== u);
        }
        Fr(n, r, o);
        break;
      case 1:
        if (!Dr && (Lu(o, r), u = o.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = o.memoizedProps, u.state = o.memoizedState, u.componentWillUnmount();
        } catch (O) {
          gn(o, r, O);
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
  function Ch(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new qy()), r.forEach(function(u) {
        var c = Oh.bind(null, n, u);
        o.has(u) || (o.add(u), u.then(c, c));
      });
    }
  }
  function pi(n, r) {
    var o = r.deletions;
    if (o !== null) for (var u = 0; u < o.length; u++) {
      var c = o[u];
      try {
        var h = n, C = r, O = C;
        e: for (; O !== null; ) {
          switch (O.tag) {
            case 5:
              Mn = O.stateNode, Pr = !1;
              break e;
            case 3:
              Mn = O.stateNode.containerInfo, Pr = !0;
              break e;
            case 4:
              Mn = O.stateNode.containerInfo, Pr = !0;
              break e;
          }
          O = O.return;
        }
        if (Mn === null) throw Error(v(160));
        Sh(h, C, c), Mn = null, Pr = !1;
        var j = c.alternate;
        j !== null && (j.return = null), c.return = null;
      } catch (Q) {
        gn(c, r, Q);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) rp(r, n), r = r.sibling;
  }
  function rp(n, r) {
    var o = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (pi(r, n), ua(n), u & 4) {
          try {
            $s(3, n, n.return), Bs(3, n);
          } catch (Xe) {
            gn(n, n.return, Xe);
          }
          try {
            $s(5, n, n.return);
          } catch (Xe) {
            gn(n, n.return, Xe);
          }
        }
        break;
      case 1:
        pi(r, n), ua(n), u & 512 && o !== null && Lu(o, o.return);
        break;
      case 5:
        if (pi(r, n), ua(n), u & 512 && o !== null && Lu(o, o.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            we(c, "");
          } catch (Xe) {
            gn(n, n.return, Xe);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var h = n.memoizedProps, C = o !== null ? o.memoizedProps : h, O = n.type, j = n.updateQueue;
          if (n.updateQueue = null, j !== null) try {
            O === "input" && h.type === "radio" && h.name != null && Gn(c, h), nr(O, C);
            var Q = nr(O, h);
            for (C = 0; C < j.length; C += 2) {
              var ce = j[C], de = j[C + 1];
              ce === "style" ? un(c, de) : ce === "dangerouslySetInnerHTML" ? _i(c, de) : ce === "children" ? we(c, de) : Se(c, ce, de, Q);
            }
            switch (O) {
              case "input":
                Jr(c, h);
                break;
              case "textarea":
                Za(c, h);
                break;
              case "select":
                var se = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!h.multiple;
                var Pe = h.value;
                Pe != null ? Tn(c, !!h.multiple, Pe, !1) : se !== !!h.multiple && (h.defaultValue != null ? Tn(
                  c,
                  !!h.multiple,
                  h.defaultValue,
                  !0
                ) : Tn(c, !!h.multiple, h.multiple ? [] : "", !1));
            }
            c[_s] = h;
          } catch (Xe) {
            gn(n, n.return, Xe);
          }
        }
        break;
      case 6:
        if (pi(r, n), ua(n), u & 4) {
          if (n.stateNode === null) throw Error(v(162));
          c = n.stateNode, h = n.memoizedProps;
          try {
            c.nodeValue = h;
          } catch (Xe) {
            gn(n, n.return, Xe);
          }
        }
        break;
      case 3:
        if (pi(r, n), ua(n), u & 4 && o !== null && o.memoizedState.isDehydrated) try {
          li(r.containerInfo);
        } catch (Xe) {
          gn(n, n.return, Xe);
        }
        break;
      case 4:
        pi(r, n), ua(n);
        break;
      case 13:
        pi(r, n), ua(n), c = n.child, c.flags & 8192 && (h = c.memoizedState !== null, c.stateNode.isHidden = h, !h || c.alternate !== null && c.alternate.memoizedState !== null || (op = xt())), u & 4 && Ch(n);
        break;
      case 22:
        if (ce = o !== null && o.memoizedState !== null, n.mode & 1 ? (Dr = (Q = Dr) || ce, pi(r, n), Dr = Q) : pi(r, n), ua(n), u & 8192) {
          if (Q = n.memoizedState !== null, (n.stateNode.isHidden = Q) && !ce && (n.mode & 1) !== 0) for ($e = n, ce = n.child; ce !== null; ) {
            for (de = $e = ce; $e !== null; ) {
              switch (se = $e, Pe = se.child, se.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  $s(4, se, se.return);
                  break;
                case 1:
                  Lu(se, se.return);
                  var Ge = se.stateNode;
                  if (typeof Ge.componentWillUnmount == "function") {
                    u = se, o = se.return;
                    try {
                      r = u, Ge.props = r.memoizedProps, Ge.state = r.memoizedState, Ge.componentWillUnmount();
                    } catch (Xe) {
                      gn(u, o, Xe);
                    }
                  }
                  break;
                case 5:
                  Lu(se, se.return);
                  break;
                case 22:
                  if (se.memoizedState !== null) {
                    Ws(de);
                    continue;
                  }
              }
              Pe !== null ? (Pe.return = se, $e = Pe) : Ws(de);
            }
            ce = ce.sibling;
          }
          e: for (ce = null, de = n; ; ) {
            if (de.tag === 5) {
              if (ce === null) {
                ce = de;
                try {
                  c = de.stateNode, Q ? (h = c.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none") : (O = de.stateNode, j = de.memoizedProps.style, C = j != null && j.hasOwnProperty("display") ? j.display : null, O.style.display = Yt("display", C));
                } catch (Xe) {
                  gn(n, n.return, Xe);
                }
              }
            } else if (de.tag === 6) {
              if (ce === null) try {
                de.stateNode.nodeValue = Q ? "" : de.memoizedProps;
              } catch (Xe) {
                gn(n, n.return, Xe);
              }
            } else if ((de.tag !== 22 && de.tag !== 23 || de.memoizedState === null || de === n) && de.child !== null) {
              de.child.return = de, de = de.child;
              continue;
            }
            if (de === n) break e;
            for (; de.sibling === null; ) {
              if (de.return === null || de.return === n) break e;
              ce === de && (ce = null), de = de.return;
            }
            ce === de && (ce = null), de.sibling.return = de.return, de = de.sibling;
          }
        }
        break;
      case 19:
        pi(r, n), ua(n), u & 4 && Ch(n);
        break;
      case 21:
        break;
      default:
        pi(
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
            if (qs(o)) {
              var u = o;
              break e;
            }
            o = o.return;
          }
          throw Error(v(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (we(c, ""), u.flags &= -33);
            var h = uo(n);
            zi(n, h, c);
            break;
          case 3:
          case 4:
            var C = u.stateNode.containerInfo, O = uo(n);
            Ui(n, O, C);
            break;
          default:
            throw Error(v(161));
        }
      } catch (j) {
        gn(n, n.return, j);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Wy(n, r, o) {
    $e = n, ap(n);
  }
  function ap(n, r, o) {
    for (var u = (n.mode & 1) !== 0; $e !== null; ) {
      var c = $e, h = c.child;
      if (c.tag === 22 && u) {
        var C = c.memoizedState !== null || Hs;
        if (!C) {
          var O = c.alternate, j = O !== null && O.memoizedState !== null || Dr;
          O = Hs;
          var Q = Dr;
          if (Hs = C, (Dr = j) && !Q) for ($e = c; $e !== null; ) C = $e, j = C.child, C.tag === 22 && C.memoizedState !== null ? ip(c) : j !== null ? (j.return = C, $e = j) : ip(c);
          for (; h !== null; ) $e = h, ap(h), h = h.sibling;
          $e = c, Hs = O, Dr = Q;
        }
        Eh(n);
      } else (c.subtreeFlags & 8772) !== 0 && h !== null ? (h.return = c, $e = h) : Eh(n);
    }
  }
  function Eh(n) {
    for (; $e !== null; ) {
      var r = $e;
      if ((r.flags & 8772) !== 0) {
        var o = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Dr || Bs(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !Dr) if (o === null) u.componentDidMount();
              else {
                var c = r.elementType === r.type ? o.memoizedProps : di(r.type, o.memoizedProps);
                u.componentDidUpdate(c, o.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var h = r.updateQueue;
              h !== null && $d(r, h, u);
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
                $d(r, C, o);
              }
              break;
            case 5:
              var O = r.stateNode;
              if (o === null && r.flags & 4) {
                o = O;
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
                  var ce = Q.memoizedState;
                  if (ce !== null) {
                    var de = ce.dehydrated;
                    de !== null && li(de);
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
              throw Error(v(163));
          }
          Dr || r.flags & 512 && np(r);
        } catch (se) {
          gn(r, r.return, se);
        }
      }
      if (r === n) {
        $e = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, $e = o;
        break;
      }
      $e = r.return;
    }
  }
  function Ws(n) {
    for (; $e !== null; ) {
      var r = $e;
      if (r === n) {
        $e = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, $e = o;
        break;
      }
      $e = r.return;
    }
  }
  function ip(n) {
    for (; $e !== null; ) {
      var r = $e;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              Bs(4, r);
            } catch (j) {
              gn(r, o, j);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = r.return;
              try {
                u.componentDidMount();
              } catch (j) {
                gn(r, c, j);
              }
            }
            var h = r.return;
            try {
              np(r);
            } catch (j) {
              gn(r, h, j);
            }
            break;
          case 5:
            var C = r.return;
            try {
              np(r);
            } catch (j) {
              gn(r, C, j);
            }
        }
      } catch (j) {
        gn(r, r.return, j);
      }
      if (r === n) {
        $e = null;
        break;
      }
      var O = r.sibling;
      if (O !== null) {
        O.return = r.return, $e = O;
        break;
      }
      $e = r.return;
    }
  }
  var Yy = Math.ceil, Yo = Ne.ReactCurrentDispatcher, Il = Ne.ReactCurrentOwner, vr = Ne.ReactCurrentBatchConfig, At = 0, Zn = null, Bn = null, hr = 0, ba = 0, ju = za(0), Ln = 0, Ys = null, Pi = 0, Au = 0, Sf = 0, Gs = null, sa = null, op = 0, Uu = 1 / 0, wa = null, zu = !1, Vl = null, Go = null, Cf = !1, so = null, Qs = 0, Qo = 0, Pu = null, Ks = -1, Or = 0;
  function qn() {
    return (At & 6) !== 0 ? xt() : Ks !== -1 ? Ks : Ks = xt();
  }
  function Fi(n) {
    return (n.mode & 1) === 0 ? 1 : (At & 2) !== 0 && hr !== 0 ? hr & -hr : By.transition !== null ? (Or === 0 && (Or = cu()), Or) : (n = Vt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : yu(n.type)), n);
  }
  function Ir(n, r, o, u) {
    if (50 < Qo) throw Qo = 0, Pu = null, Error(v(185));
    Ki(n, o, u), ((At & 2) === 0 || n !== Zn) && (n === Zn && ((At & 2) === 0 && (Au |= o), Ln === 4 && vi(n, hr)), ca(n, u), o === 1 && At === 0 && (r.mode & 1) === 0 && (Uu = xt() + 500, Tu && Ni()));
  }
  function ca(n, r) {
    var o = n.callbackNode;
    hl(n, r);
    var u = oi(n, n === Zn ? hr : 0);
    if (u === 0) o !== null && cr(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (o != null && cr(o), r === 1) n.tag === 0 ? Po(lp.bind(null, n)) : Ic(lp.bind(null, n)), bu(function() {
        (At & 6) === 0 && Ni();
      }), o = null;
      else {
        switch (du(u)) {
          case 1:
            o = ai;
            break;
          case 4:
            o = pl;
            break;
          case 16:
            o = vl;
            break;
          case 536870912:
            o = lu;
            break;
          default:
            o = vl;
        }
        o = Mh(o, Ef.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function Ef(n, r) {
    if (Ks = -1, Or = 0, (At & 6) !== 0) throw Error(v(327));
    var o = n.callbackNode;
    if (Fu() && n.callbackNode !== o) return null;
    var u = oi(n, n === Zn ? hr : 0);
    if (u === 0) return null;
    if ((u & 30) !== 0 || (u & n.expiredLanes) !== 0 || r) r = xf(n, u);
    else {
      r = u;
      var c = At;
      At |= 2;
      var h = bh();
      (Zn !== n || hr !== r) && (wa = null, Uu = xt() + 500, co(n, r));
      do
        try {
          wh();
          break;
        } catch (O) {
          xh(n, O);
        }
      while (!0);
      zd(), Yo.current = h, At = c, Bn !== null ? r = 0 : (Zn = null, hr = 0, r = Ln);
    }
    if (r !== 0) {
      if (r === 2 && (c = Do(n), c !== 0 && (u = c, r = Xs(n, c))), r === 1) throw o = Ys, co(n, 0), vi(n, u), ca(n, xt()), o;
      if (r === 6) vi(n, u);
      else {
        if (c = n.current.alternate, (u & 30) === 0 && !Gy(c) && (r = xf(n, u), r === 2 && (h = Do(n), h !== 0 && (u = h, r = Xs(n, h))), r === 1)) throw o = Ys, co(n, 0), vi(n, u), ca(n, xt()), o;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(v(345));
          case 2:
            Bl(n, sa, wa);
            break;
          case 3:
            if (vi(n, u), (u & 130023424) === u && (r = op + 500 - xt(), 10 < r)) {
              if (oi(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                qn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = zc(Bl.bind(null, n, sa, wa), r);
              break;
            }
            Bl(n, sa, wa);
            break;
          case 4:
            if (vi(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, c = -1; 0 < u; ) {
              var C = 31 - jr(u);
              h = 1 << C, C = r[C], C > c && (c = C), u &= ~h;
            }
            if (u = c, u = xt() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Yy(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = zc(Bl.bind(null, n, sa, wa), u);
              break;
            }
            Bl(n, sa, wa);
            break;
          case 5:
            Bl(n, sa, wa);
            break;
          default:
            throw Error(v(329));
        }
      }
    }
    return ca(n, xt()), n.callbackNode === o ? Ef.bind(null, n) : null;
  }
  function Xs(n, r) {
    var o = Gs;
    return n.current.memoizedState.isDehydrated && (co(n, r).flags |= 256), n = xf(n, r), n !== 2 && (r = sa, sa = o, r !== null && Hl(r)), n;
  }
  function Hl(n) {
    sa === null ? sa = n : sa.push.apply(sa, n);
  }
  function Gy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null)) for (var u = 0; u < o.length; u++) {
          var c = o[u], h = c.getSnapshot;
          c = c.value;
          try {
            if (!si(h(), c)) return !1;
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
  function vi(n, r) {
    for (r &= ~Sf, r &= ~Au, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - jr(r), u = 1 << o;
      n[o] = -1, r &= ~u;
    }
  }
  function lp(n) {
    if ((At & 6) !== 0) throw Error(v(327));
    Fu();
    var r = oi(n, 0);
    if ((r & 1) === 0) return ca(n, xt()), null;
    var o = xf(n, r);
    if (n.tag !== 0 && o === 2) {
      var u = Do(n);
      u !== 0 && (r = u, o = Xs(n, u));
    }
    if (o === 1) throw o = Ys, co(n, 0), vi(n, r), ca(n, xt()), o;
    if (o === 6) throw Error(v(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Bl(n, sa, wa), ca(n, xt()), null;
  }
  function up(n, r) {
    var o = At;
    At |= 1;
    try {
      return n(r);
    } finally {
      At = o, At === 0 && (Uu = xt() + 500, Tu && Ni());
    }
  }
  function $l(n) {
    so !== null && so.tag === 0 && (At & 6) === 0 && Fu();
    var r = At;
    At |= 1;
    var o = vr.transition, u = Vt;
    try {
      if (vr.transition = null, Vt = 1, n) return n();
    } finally {
      Vt = u, vr.transition = o, At = r, (At & 6) === 0 && Ni();
    }
  }
  function sp() {
    ba = ju.current, dn(ju);
  }
  function co(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Md(o)), Bn !== null) for (o = Bn.return; o !== null; ) {
      var u = o;
      switch (Hc(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && ku();
          break;
        case 3:
          Nl(), dn(Xn), dn(wn), rt();
          break;
        case 5:
          Wc(u);
          break;
        case 4:
          Nl();
          break;
        case 13:
          dn(xn);
          break;
        case 19:
          dn(xn);
          break;
        case 10:
          Pd(u.type._context);
          break;
        case 22:
        case 23:
          sp();
      }
      o = o.return;
    }
    if (Zn = n, Bn = n = Ko(n.current, null), hr = ba = r, Ln = 0, Ys = null, Sf = Au = Pi = 0, sa = Gs = null, Dl !== null) {
      for (r = 0; r < Dl.length; r++) if (o = Dl[r], u = o.interleaved, u !== null) {
        o.interleaved = null;
        var c = u.next, h = o.pending;
        if (h !== null) {
          var C = h.next;
          h.next = c, u.next = C;
        }
        o.pending = u;
      }
      Dl = null;
    }
    return n;
  }
  function xh(n, r) {
    do {
      var o = Bn;
      try {
        if (zd(), Dt.current = zl, Gc) {
          for (var u = $t.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          Gc = !1;
        }
        if (rn = 0, ar = Vn = $t = null, Ts = !1, Ml = 0, Il.current = null, o === null || o.return === null) {
          Ln = 1, Ys = r, Bn = null;
          break;
        }
        e: {
          var h = n, C = o.return, O = o, j = r;
          if (r = hr, O.flags |= 32768, j !== null && typeof j == "object" && typeof j.then == "function") {
            var Q = j, ce = O, de = ce.tag;
            if ((ce.mode & 1) === 0 && (de === 0 || de === 11 || de === 15)) {
              var se = ce.alternate;
              se ? (ce.updateQueue = se.updateQueue, ce.memoizedState = se.memoizedState, ce.lanes = se.lanes) : (ce.updateQueue = null, ce.memoizedState = null);
            }
            var Pe = ch(C);
            if (Pe !== null) {
              Pe.flags &= -257, Wo(Pe, C, O, h, r), Pe.mode & 1 && Xd(h, Q, r), r = Pe, j = Q;
              var Ge = r.updateQueue;
              if (Ge === null) {
                var Xe = /* @__PURE__ */ new Set();
                Xe.add(j), r.updateQueue = Xe;
              } else Ge.add(j);
              break e;
            } else {
              if ((r & 1) === 0) {
                Xd(h, Q, r), cp();
                break e;
              }
              j = Error(v(426));
            }
          } else if (yn && O.mode & 1) {
            var jn = ch(C);
            if (jn !== null) {
              (jn.flags & 65536) === 0 && (jn.flags |= 256), Wo(jn, C, O, h, r), io(Pl(j, O));
              break e;
            }
          }
          h = j = Pl(j, O), Ln !== 4 && (Ln = 2), Gs === null ? Gs = [h] : Gs.push(h), h = C;
          do {
            switch (h.tag) {
              case 3:
                h.flags |= 65536, r &= -r, h.lanes |= r;
                var V = sh(h, j, r);
                ah(h, V);
                break e;
              case 1:
                O = j;
                var U = h.type, q = h.stateNode;
                if ((h.flags & 128) === 0 && (typeof U.getDerivedStateFromError == "function" || q !== null && typeof q.componentDidCatch == "function" && (Go === null || !Go.has(q)))) {
                  h.flags |= 65536, r &= -r, h.lanes |= r;
                  var fe = Kd(h, O, r);
                  ah(h, fe);
                  break e;
                }
            }
            h = h.return;
          } while (h !== null);
        }
        kh(o);
      } catch (Qe) {
        r = Qe, Bn === o && o !== null && (Bn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function bh() {
    var n = Yo.current;
    return Yo.current = zl, n === null ? zl : n;
  }
  function cp() {
    (Ln === 0 || Ln === 3 || Ln === 2) && (Ln = 4), Zn === null || (Pi & 268435455) === 0 && (Au & 268435455) === 0 || vi(Zn, hr);
  }
  function xf(n, r) {
    var o = At;
    At |= 2;
    var u = bh();
    (Zn !== n || hr !== r) && (wa = null, co(n, r));
    do
      try {
        Qy();
        break;
      } catch (c) {
        xh(n, c);
      }
    while (!0);
    if (zd(), At = o, Yo.current = u, Bn !== null) throw Error(v(261));
    return Zn = null, hr = 0, Ln;
  }
  function Qy() {
    for (; Bn !== null; ) Rh(Bn);
  }
  function wh() {
    for (; Bn !== null && !ni(); ) Rh(Bn);
  }
  function Rh(n) {
    var r = Nh(n.alternate, n, ba);
    n.memoizedProps = n.pendingProps, r === null ? kh(n) : Bn = r, Il.current = null;
  }
  function kh(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (o = yh(o, r, ba), o !== null) {
          Bn = o;
          return;
        }
      } else {
        if (o = yf(o, r), o !== null) {
          o.flags &= 32767, Bn = o;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Ln = 6, Bn = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        Bn = r;
        return;
      }
      Bn = r = n;
    } while (r !== null);
    Ln === 0 && (Ln = 5);
  }
  function Bl(n, r, o) {
    var u = Vt, c = vr.transition;
    try {
      vr.transition = null, Vt = 1, Ky(n, r, o, u);
    } finally {
      vr.transition = c, Vt = u;
    }
    return null;
  }
  function Ky(n, r, o, u) {
    do
      Fu();
    while (so !== null);
    if ((At & 6) !== 0) throw Error(v(327));
    o = n.finishedWork;
    var c = n.finishedLanes;
    if (o === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(v(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var h = o.lanes | o.childLanes;
    if (fd(n, h), n === Zn && (Bn = Zn = null, hr = 0), (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || Cf || (Cf = !0, Mh(vl, function() {
      return Fu(), null;
    })), h = (o.flags & 15990) !== 0, (o.subtreeFlags & 15990) !== 0 || h) {
      h = vr.transition, vr.transition = null;
      var C = Vt;
      Vt = 1;
      var O = At;
      At |= 4, Il.current = null, _h(n, o), rp(o, n), Su(bl), ja = !!gs, bl = gs = null, n.current = o, Wy(o), ri(), At = O, Vt = C, vr.transition = h;
    } else n.current = o;
    if (Cf && (Cf = !1, so = n, Qs = c), h = n.pendingLanes, h === 0 && (Go = null), as(o.stateNode), ca(n, xt()), r !== null) for (u = n.onRecoverableError, o = 0; o < r.length; o++) c = r[o], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (zu) throw zu = !1, n = Vl, Vl = null, n;
    return (Qs & 1) !== 0 && n.tag !== 0 && Fu(), h = n.pendingLanes, (h & 1) !== 0 ? n === Pu ? Qo++ : (Qo = 0, Pu = n) : Qo = 0, Ni(), null;
  }
  function Fu() {
    if (so !== null) {
      var n = du(Qs), r = vr.transition, o = Vt;
      try {
        if (vr.transition = null, Vt = 16 > n ? 16 : n, so === null) var u = !1;
        else {
          if (n = so, so = null, Qs = 0, (At & 6) !== 0) throw Error(v(331));
          var c = At;
          for (At |= 4, $e = n.current; $e !== null; ) {
            var h = $e, C = h.child;
            if (($e.flags & 16) !== 0) {
              var O = h.deletions;
              if (O !== null) {
                for (var j = 0; j < O.length; j++) {
                  var Q = O[j];
                  for ($e = Q; $e !== null; ) {
                    var ce = $e;
                    switch (ce.tag) {
                      case 0:
                      case 11:
                      case 15:
                        $s(8, ce, h);
                    }
                    var de = ce.child;
                    if (de !== null) de.return = ce, $e = de;
                    else for (; $e !== null; ) {
                      ce = $e;
                      var se = ce.sibling, Pe = ce.return;
                      if (_f(ce), ce === Q) {
                        $e = null;
                        break;
                      }
                      if (se !== null) {
                        se.return = Pe, $e = se;
                        break;
                      }
                      $e = Pe;
                    }
                  }
                }
                var Ge = h.alternate;
                if (Ge !== null) {
                  var Xe = Ge.child;
                  if (Xe !== null) {
                    Ge.child = null;
                    do {
                      var jn = Xe.sibling;
                      Xe.sibling = null, Xe = jn;
                    } while (Xe !== null);
                  }
                }
                $e = h;
              }
            }
            if ((h.subtreeFlags & 2064) !== 0 && C !== null) C.return = h, $e = C;
            else e: for (; $e !== null; ) {
              if (h = $e, (h.flags & 2048) !== 0) switch (h.tag) {
                case 0:
                case 11:
                case 15:
                  $s(9, h, h.return);
              }
              var V = h.sibling;
              if (V !== null) {
                V.return = h.return, $e = V;
                break e;
              }
              $e = h.return;
            }
          }
          var U = n.current;
          for ($e = U; $e !== null; ) {
            C = $e;
            var q = C.child;
            if ((C.subtreeFlags & 2064) !== 0 && q !== null) q.return = C, $e = q;
            else e: for (C = U; $e !== null; ) {
              if (O = $e, (O.flags & 2048) !== 0) try {
                switch (O.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Bs(9, O);
                }
              } catch (Qe) {
                gn(O, O.return, Qe);
              }
              if (O === C) {
                $e = null;
                break e;
              }
              var fe = O.sibling;
              if (fe !== null) {
                fe.return = O.return, $e = fe;
                break e;
              }
              $e = O.return;
            }
          }
          if (At = c, Ni(), Zr && typeof Zr.onPostCommitFiberRoot == "function") try {
            Zr.onPostCommitFiberRoot(ko, n);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        Vt = o, vr.transition = r;
      }
    }
    return !1;
  }
  function Th(n, r, o) {
    r = Pl(o, r), r = sh(n, r, 1), n = $o(n, r, 1), r = qn(), n !== null && (Ki(n, 1, r), ca(n, r));
  }
  function gn(n, r, o) {
    if (n.tag === 3) Th(n, n, o);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Th(r, n, o);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Go === null || !Go.has(u))) {
          n = Pl(o, n), n = Kd(r, n, 1), r = $o(r, n, 1), n = qn(), r !== null && (Ki(r, 1, n), ca(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Xy(n, r, o) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = qn(), n.pingedLanes |= n.suspendedLanes & o, Zn === n && (hr & o) === o && (Ln === 4 || Ln === 3 && (hr & 130023424) === hr && 500 > xt() - op ? co(n, 0) : Sf |= o), ca(n, r);
  }
  function Dh(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = _a, _a <<= 1, (_a & 130023424) === 0 && (_a = 4194304)));
    var o = qn();
    n = Ea(n, r), n !== null && (Ki(n, r, o), ca(n, o));
  }
  function Jy(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), Dh(n, o);
  }
  function Oh(n, r) {
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
        throw Error(v(314));
    }
    u !== null && u.delete(r), Dh(n, o);
  }
  var Nh;
  Nh = function(n, r, o) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Xn.current) Hn = !0;
    else {
      if ((n.lanes & o) === 0 && (r.flags & 128) === 0) return Hn = !1, Is(n, r, o);
      Hn = (n.flags & 131072) !== 0;
    }
    else Hn = !1, yn && (r.flags & 1048576) !== 0 && eh(r, ao, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Va(n, r), n = r.pendingProps;
        var c = na(r, wn.current);
        En(r, o), c = Bo(null, r, u, n, c, o);
        var h = fi();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Fn(u) ? (h = !0, rr(r)) : h = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Hd(r), c.updater = df, r.stateNode = c, c._reactInternals = r, As(r, u, n, o), r = Ps(null, r, u, !0, h, o)) : (r.tag = 0, yn && h && Vc(r), pr(null, r, c, o), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Va(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = eg(u), n = di(u, n), c) {
            case 0:
              r = fh(null, r, u, n, o);
              break e;
            case 1:
              r = dh(null, r, u, n, o);
              break e;
            case 11:
              r = la(null, r, u, n, o);
              break e;
            case 14:
              r = Fl(null, r, u, di(u.type, n), o);
              break e;
          }
          throw Error(v(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : di(u, c), fh(n, r, u, c, o);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : di(u, c), dh(n, r, u, c, o);
      case 3:
        e: {
          if (Mu(r), n === null) throw Error(v(387));
          u = r.pendingProps, h = r.memoizedState, c = h.element, rh(n, r), xs(r, u, null, o);
          var C = r.memoizedState;
          if (u = C.element, h.isDehydrated) if (h = { element: u, isDehydrated: !1, cache: C.cache, pendingSuspenseBoundaries: C.pendingSuspenseBoundaries, transitions: C.transitions }, r.updateQueue.baseState = h, r.memoizedState = h, r.flags & 256) {
            c = Pl(Error(v(423)), r), r = ph(n, r, u, o, c);
            break e;
          } else if (u !== c) {
            c = Pl(Error(v(424)), r), r = ph(n, r, u, o, c);
            break e;
          } else for (aa = Ti(r.stateNode.containerInfo.firstChild), ra = r, yn = !0, Fa = null, o = je(r, null, u, o), r.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (Ho(), u === c) {
              r = Ha(n, r, o);
              break e;
            }
            pr(n, r, u, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return ih(r), n === null && Ad(r), u = r.type, c = r.pendingProps, h = n !== null ? n.memoizedProps : null, C = c.children, Uc(u, c) ? C = null : h !== null && Uc(u, h) && (r.flags |= 32), Jd(n, r), pr(n, r, C, o), r.child;
      case 6:
        return n === null && Ad(r), null;
      case 13:
        return mf(n, r, o);
      case 4:
        return Bd(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = On(r, null, u, o) : pr(n, r, u, o), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : di(u, c), la(n, r, u, c, o);
      case 7:
        return pr(n, r, r.pendingProps, o), r.child;
      case 8:
        return pr(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return pr(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, h = r.memoizedProps, C = c.value, et(Ca, u._currentValue), u._currentValue = C, h !== null) if (si(h.value, C)) {
            if (h.children === c.children && !Xn.current) {
              r = Ha(n, r, o);
              break e;
            }
          } else for (h = r.child, h !== null && (h.return = r); h !== null; ) {
            var O = h.dependencies;
            if (O !== null) {
              C = h.child;
              for (var j = O.firstContext; j !== null; ) {
                if (j.context === u) {
                  if (h.tag === 1) {
                    j = oo(-1, o & -o), j.tag = 2;
                    var Q = h.updateQueue;
                    if (Q !== null) {
                      Q = Q.shared;
                      var ce = Q.pending;
                      ce === null ? j.next = j : (j.next = ce.next, ce.next = j), Q.pending = j;
                    }
                  }
                  h.lanes |= o, j = h.alternate, j !== null && (j.lanes |= o), Fd(
                    h.return,
                    o,
                    r
                  ), O.lanes |= o;
                  break;
                }
                j = j.next;
              }
            } else if (h.tag === 10) C = h.type === r.type ? null : h.child;
            else if (h.tag === 18) {
              if (C = h.return, C === null) throw Error(v(341));
              C.lanes |= o, O = C.alternate, O !== null && (O.lanes |= o), Fd(C, o, r), C = h.sibling;
            } else C = h.child;
            if (C !== null) C.return = h;
            else for (C = h; C !== null; ) {
              if (C === r) {
                C = null;
                break;
              }
              if (h = C.sibling, h !== null) {
                h.return = C.return, C = h;
                break;
              }
              C = C.return;
            }
            h = C;
          }
          pr(n, r, c.children, o), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, u = r.pendingProps.children, En(r, o), c = Ia(c), u = u(c), r.flags |= 1, pr(n, r, u, o), r.child;
      case 14:
        return u = r.type, c = di(u, r.pendingProps), c = di(u.type, c), Fl(n, r, u, c, o);
      case 15:
        return bt(n, r, r.type, r.pendingProps, o);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : di(u, c), Va(n, r), r.tag = 1, Fn(u) ? (n = !0, rr(r)) : n = !1, En(r, o), pf(r, u, c), As(r, u, c, o), Ps(null, r, u, !0, n, o);
      case 19:
        return Ai(n, r, o);
      case 22:
        return zs(n, r, o);
    }
    throw Error(v(156, r.tag));
  };
  function Mh(n, r) {
    return vn(n, r);
  }
  function Zy(n, r, o, u) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ba(n, r, o, u) {
    return new Zy(n, r, o, u);
  }
  function fp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function eg(n) {
    if (typeof n == "function") return fp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === G) return 11;
      if (n === qe) return 14;
    }
    return 2;
  }
  function Ko(n, r) {
    var o = n.alternate;
    return o === null ? (o = Ba(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Js(n, r, o, u, c, h) {
    var C = 2;
    if (u = n, typeof n == "function") fp(n) && (C = 1);
    else if (typeof n == "string") C = 5;
    else e: switch (n) {
      case Le:
        return fo(o.children, c, h, r);
      case He:
        C = 8, c |= 8;
        break;
      case it:
        return n = Ba(12, o, r, c | 2), n.elementType = it, n.lanes = h, n;
      case X:
        return n = Ba(13, o, r, c), n.elementType = X, n.lanes = h, n;
      case be:
        return n = Ba(19, o, r, c), n.elementType = be, n.lanes = h, n;
      case xe:
        return Xo(o, c, h, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case at:
            C = 10;
            break e;
          case ve:
            C = 9;
            break e;
          case G:
            C = 11;
            break e;
          case qe:
            C = 14;
            break e;
          case Re:
            C = 16, u = null;
            break e;
        }
        throw Error(v(130, n == null ? n : typeof n, ""));
    }
    return r = Ba(C, o, r, c), r.elementType = n, r.type = u, r.lanes = h, r;
  }
  function fo(n, r, o, u) {
    return n = Ba(7, n, u, r), n.lanes = o, n;
  }
  function Xo(n, r, o, u) {
    return n = Ba(22, n, u, r), n.elementType = xe, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function dp(n, r, o) {
    return n = Ba(6, n, null, r), n.lanes = o, n;
  }
  function bf(n, r, o) {
    return r = Ba(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Lh(n, r, o, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = fu(0), this.expirationTimes = fu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = fu(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function wf(n, r, o, u, c, h, C, O, j) {
    return n = new Lh(n, r, o, O, j), r === 1 ? (r = 1, h === !0 && (r |= 8)) : r = 0, h = Ba(3, null, null, r), n.current = h, h.stateNode = n, h.memoizedState = { element: u, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Hd(h), n;
  }
  function tg(n, r, o) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Me, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: o };
  }
  function pp(n) {
    if (!n) return kr;
    n = n._reactInternals;
    e: {
      if (Et(n) !== n || n.tag !== 1) throw Error(v(170));
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
      throw Error(v(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (Fn(o)) return Cs(n, o, r);
    }
    return r;
  }
  function jh(n, r, o, u, c, h, C, O, j) {
    return n = wf(o, u, !0, n, c, h, C, O, j), n.context = pp(null), o = n.current, u = qn(), c = Fi(o), h = oo(u, c), h.callback = r ?? null, $o(o, h, c), n.current.lanes = c, Ki(n, c, u), ca(n, u), n;
  }
  function Rf(n, r, o, u) {
    var c = r.current, h = qn(), C = Fi(c);
    return o = pp(o), r.context === null ? r.context = o : r.pendingContext = o, r = oo(h, C), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = $o(c, r, C), n !== null && (Ir(n, c, C, h), qc(n, c, C)), C;
  }
  function kf(n) {
    return n = n.current, n.child ? (n.child.tag === 5, n.child.stateNode) : null;
  }
  function vp(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function Tf(n, r) {
    vp(n, r), (n = n.alternate) && vp(n, r);
  }
  function Ah() {
    return null;
  }
  var ql = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function hp(n) {
    this._internalRoot = n;
  }
  Df.prototype.render = hp.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(v(409));
    Rf(n, r, null, null);
  }, Df.prototype.unmount = hp.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      $l(function() {
        Rf(null, n, null, null);
      }), r[no] = null;
    }
  };
  function Df(n) {
    this._internalRoot = n;
  }
  Df.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = yt();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Kn.length && r !== 0 && r < Kn[o].priority; o++) ;
      Kn.splice(o, 0, n), o === 0 && ls(n);
    }
  };
  function mp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Of(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Uh() {
  }
  function ng(n, r, o, u, c) {
    if (c) {
      if (typeof u == "function") {
        var h = u;
        u = function() {
          var Q = kf(C);
          h.call(Q);
        };
      }
      var C = jh(r, u, n, 0, null, !1, !1, "", Uh);
      return n._reactRootContainer = C, n[no] = C.current, Eu(n.nodeType === 8 ? n.parentNode : n), $l(), C;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof u == "function") {
      var O = u;
      u = function() {
        var Q = kf(j);
        O.call(Q);
      };
    }
    var j = wf(n, 0, !1, null, null, !1, !1, "", Uh);
    return n._reactRootContainer = j, n[no] = j.current, Eu(n.nodeType === 8 ? n.parentNode : n), $l(function() {
      Rf(r, j, o, u);
    }), j;
  }
  function Zs(n, r, o, u, c) {
    var h = o._reactRootContainer;
    if (h) {
      var C = h;
      if (typeof c == "function") {
        var O = c;
        c = function() {
          var j = kf(C);
          O.call(j);
        };
      }
      Rf(r, C, n, c);
    } else C = ng(o, r, n, c, u);
    return kf(C);
  }
  Pt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = ii(r.pendingLanes);
          o !== 0 && (Xi(r, o | 1), ca(r, xt()), (At & 6) === 0 && (Uu = xt() + 500, Ni()));
        }
        break;
      case 13:
        $l(function() {
          var u = Ea(n, 1);
          if (u !== null) {
            var c = qn();
            Ir(u, n, 1, c);
          }
        }), Tf(n, 1);
    }
  }, is = function(n) {
    if (n.tag === 13) {
      var r = Ea(n, 134217728);
      if (r !== null) {
        var o = qn();
        Ir(r, n, 134217728, o);
      }
      Tf(n, 134217728);
    }
  }, xi = function(n) {
    if (n.tag === 13) {
      var r = Fi(n), o = Ea(n, r);
      if (o !== null) {
        var u = qn();
        Ir(o, n, r, u);
      }
      Tf(n, r);
    }
  }, yt = function() {
    return Vt;
  }, pu = function(n, r) {
    var o = Vt;
    try {
      return Vt = n, r();
    } finally {
      Vt = o;
    }
  }, Zt = function(n, r, o) {
    switch (r) {
      case "input":
        if (Jr(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; ) o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var u = o[r];
            if (u !== n && u.form === n.form) {
              var c = Cn(u);
              if (!c) throw Error(v(90));
              Nr(u), Jr(u, c);
            }
          }
        }
        break;
      case "textarea":
        Za(n, o);
        break;
      case "select":
        r = o.value, r != null && Tn(n, !!o.multiple, r, !1);
    }
  }, fl = up, bo = $l;
  var rg = { usingClientEntryPoint: !1, Events: [nt, ci, Cn, Qi, cl, up] }, ec = { findFiberByHostInstance: wl, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, zh = { bundleType: ec.bundleType, version: ec.version, rendererPackageName: ec.rendererPackageName, rendererConfig: ec.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ne.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Dn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: ec.findFiberByHostInstance || Ah, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Jo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jo.isDisabled && Jo.supportsFiber) try {
      ko = Jo.inject(zh), Zr = Jo;
    } catch {
    }
  }
  return Ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rg, Ka.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!mp(r)) throw Error(v(200));
    return tg(n, r, null, o);
  }, Ka.createRoot = function(n, r) {
    if (!mp(n)) throw Error(v(299));
    var o = !1, u = "", c = ql;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = wf(n, 1, !1, null, null, o, !1, u, c), n[no] = r.current, Eu(n.nodeType === 8 ? n.parentNode : n), new hp(r);
  }, Ka.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(v(188)) : (n = Object.keys(n).join(","), Error(v(268, n)));
    return n = Dn(r), n = n === null ? null : n.stateNode, n;
  }, Ka.flushSync = function(n) {
    return $l(n);
  }, Ka.hydrate = function(n, r, o) {
    if (!Of(r)) throw Error(v(200));
    return Zs(null, n, r, !0, o);
  }, Ka.hydrateRoot = function(n, r, o) {
    if (!mp(n)) throw Error(v(405));
    var u = o != null && o.hydratedSources || null, c = !1, h = "", C = ql;
    if (o != null && (o.unstable_strictMode === !0 && (c = !0), o.identifierPrefix !== void 0 && (h = o.identifierPrefix), o.onRecoverableError !== void 0 && (C = o.onRecoverableError)), r = jh(r, null, n, 1, o ?? null, c, !1, h, C), n[no] = r.current, Eu(n), u) for (n = 0; n < u.length; n++) o = u[n], c = o._getVersion, c = c(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, c] : r.mutableSourceEagerHydrationData.push(
      o,
      c
    );
    return new Df(r);
  }, Ka.render = function(n, r, o) {
    if (!Of(r)) throw Error(v(200));
    return Zs(null, n, r, !1, o);
  }, Ka.unmountComponentAtNode = function(n) {
    if (!Of(n)) throw Error(v(40));
    return n._reactRootContainer ? ($l(function() {
      Zs(null, null, n, !1, function() {
        n._reactRootContainer = null, n[no] = null;
      });
    }), !0) : !1;
  }, Ka.unstable_batchedUpdates = up, Ka.unstable_renderSubtreeIntoContainer = function(n, r, o, u) {
    if (!Of(o)) throw Error(v(200));
    if (n == null || n._reactInternals === void 0) throw Error(v(38));
    return Zs(n, r, o, !1, u);
  }, Ka.version = "18.3.1-next-f1338f8080-20240426", Ka;
}
var Xa = {};
var pE;
function tL() {
  return pE || (pE = 1, process.env.NODE_ENV !== "production" && (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var f = Cv(), p = PE(), v = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, S = !1;
    function b(e) {
      S = e;
    }
    function E(e) {
      if (!S) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        T("warn", e, a);
      }
    }
    function m(e) {
      if (!S) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        T("error", e, a);
      }
    }
    function T(e, t, a) {
      {
        var i = v.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(d) {
          return String(d);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var R = 0, w = 1, M = 2, F = 3, I = 4, B = 5, ie = 6, Z = 7, Ee = 8, _e = 9, ge = 10, Se = 11, Ne = 12, he = 13, Me = 14, Le = 15, He = 16, it = 17, at = 18, ve = 19, G = 21, X = 22, be = 23, qe = 24, Re = 25, xe = !0, re = !1, De = !1, me = !1, P = !1, ee = !0, tt = !0, Ie = !0, gt = !0, ot = /* @__PURE__ */ new Set(), Ue = {}, dt = {};
    function ht(e, t) {
      Xt(e, t), Xt(e + "Capture", t);
    }
    function Xt(e, t) {
      Ue[e] && m("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ue[e] = t;
      {
        var a = e.toLowerCase();
        dt[a] = e, e === "onDoubleClick" && (dt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        ot.add(t[i]);
    }
    var Un = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Nr = Object.prototype.hasOwnProperty;
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
        return m("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, kn(e)), Yn(e);
    }
    function Jr(e) {
      if (ur(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", kn(e)), Yn(e);
    }
    function gi(e, t) {
      if (ur(e))
        return m("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, kn(e)), Yn(e);
    }
    function ma(e, t) {
      if (ur(e))
        return m("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, kn(e)), Yn(e);
    }
    function tr(e) {
      if (ur(e))
        return m("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", kn(e)), Yn(e);
    }
    function Tn(e) {
      if (ur(e))
        return m("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", kn(e)), Yn(e);
    }
    var Qn = 0, br = 1, Za = 2, zn = 3, wr = 4, ya = 5, ei = 6, _i = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", we = _i + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Je = new RegExp("^[" + _i + "][" + we + "]*$"), Rt = {}, Yt = {};
    function un(e) {
      return Nr.call(Yt, e) ? !0 : Nr.call(Rt, e) ? !1 : Je.test(e) ? (Yt[e] = !0, !0) : (Rt[e] = !0, m("Invalid attribute name: `%s`", e), !1);
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
          case wr:
            return t === !1;
          case ya:
            return isNaN(t);
          case ei:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function sn(e) {
      return Zt.hasOwnProperty(e) ? Zt[e] : null;
    }
    function Jt(e, t, a, i, l, s, d) {
      this.acceptsBooleans = t === Za || t === zn || t === wr, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = d;
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
      Zt[e] = new Jt(
        e,
        Za,
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
        wr,
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
      var t = e.replace(Rr, Na);
      Zt[t] = new Jt(
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
      var t = e.replace(Rr, Na);
      Zt[t] = new Jt(
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
      Zt[e] = new Jt(
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
    var Qi = "xlinkHref";
    Zt[Qi] = new Jt(
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
      Zt[e] = new Jt(
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
    var cl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, fl = !1;
    function bo(e) {
      !fl && cl.test(e) && (fl = !0, m("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function wo(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        Gn(a, t), i.sanitizeURL && bo("" + a);
        var s = i.attributeName, d = null;
        if (i.type === wr) {
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
    function dl(e, t, a, i) {
      {
        if (!un(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return Gn(a, t), l === "" + a ? a : l;
      }
    }
    function Mr(e, t, a, i) {
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
        var x = l.attributeName, k = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(x);
        else {
          var z = l.type, A;
          z === zn || z === wr && a === !0 ? A = "" : (Gn(a, x), A = "" + a, l.sanitizeURL && bo(A.toString())), k ? e.setAttributeNS(k, x, A) : e.setAttribute(x, A);
        }
      }
    }
    var Lr = /* @__PURE__ */ Symbol.for("react.element"), sr = /* @__PURE__ */ Symbol.for("react.portal"), Si = /* @__PURE__ */ Symbol.for("react.fragment"), ti = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ci = /* @__PURE__ */ Symbol.for("react.profiler"), Ei = /* @__PURE__ */ Symbol.for("react.provider"), L = /* @__PURE__ */ Symbol.for("react.context"), oe = /* @__PURE__ */ Symbol.for("react.forward_ref"), Oe = /* @__PURE__ */ Symbol.for("react.suspense"), We = /* @__PURE__ */ Symbol.for("react.suspense_list"), Et = /* @__PURE__ */ Symbol.for("react.memo"), _t = /* @__PURE__ */ Symbol.for("react.lazy"), Ot = /* @__PURE__ */ Symbol.for("react.scope"), Tt = /* @__PURE__ */ Symbol.for("react.debug_trace_mode"), Dn = /* @__PURE__ */ Symbol.for("react.offscreen"), cn = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), vn = /* @__PURE__ */ Symbol.for("react.cache"), cr = /* @__PURE__ */ Symbol.for("react.tracing_marker"), ni = Symbol.iterator, ri = "@@iterator";
    function xt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ni && e[ni] || e[ri];
      return typeof t == "function" ? t : null;
    }
    var wt = Object.assign, ai = 0, pl, vl, Ro, lu, ko, Zr, as;
    function jr() {
    }
    jr.__reactDisabledLog = !0;
    function Cc() {
      {
        if (ai === 0) {
          pl = console.log, vl = console.info, Ro = console.warn, lu = console.error, ko = console.group, Zr = console.groupCollapsed, as = console.groupEnd;
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
        ai++;
      }
    }
    function Ec() {
      {
        if (ai--, ai === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: wt({}, e, {
              value: pl
            }),
            info: wt({}, e, {
              value: vl
            }),
            warn: wt({}, e, {
              value: Ro
            }),
            error: wt({}, e, {
              value: lu
            }),
            group: wt({}, e, {
              value: ko
            }),
            groupCollapsed: wt({}, e, {
              value: Zr
            }),
            groupEnd: wt({}, e, {
              value: as
            })
          });
        }
        ai < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var uu = v.ReactCurrentDispatcher, To;
    function _a(e, t, a) {
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
    var ii = !1, oi;
    {
      var su = typeof WeakMap == "function" ? WeakMap : Map;
      oi = new su();
    }
    function hl(e, t) {
      if (!e || ii)
        return "";
      {
        var a = oi.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      ii = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = uu.current, uu.current = null, Cc();
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
`), x = y.length - 1, k = g.length - 1; x >= 1 && k >= 0 && y[x] !== g[k]; )
            k--;
          for (; x >= 1 && k >= 0; x--, k--)
            if (y[x] !== g[k]) {
              if (x !== 1 || k !== 1)
                do
                  if (x--, k--, k < 0 || y[x] !== g[k]) {
                    var z = `
` + y[x].replace(" at new ", " at ");
                    return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), typeof e == "function" && oi.set(e, z), z;
                  }
                while (x >= 1 && k >= 0);
              break;
            }
        }
      } finally {
        ii = !1, uu.current = s, Ec(), Error.prepareStackTrace = l;
      }
      var A = e ? e.displayName || e.name : "", W = A ? _a(A) : "";
      return typeof e == "function" && oi.set(e, W), W;
    }
    function Do(e, t, a) {
      return hl(e, !0);
    }
    function cu(e, t, a) {
      return hl(e, !1);
    }
    function fu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ki(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return hl(e, fu(e));
      if (typeof e == "string")
        return _a(e);
      switch (e) {
        case Oe:
          return _a("Suspense");
        case We:
          return _a("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case oe:
            return cu(e.render);
          case Et:
            return Ki(e.type, t, a);
          case _t: {
            var i = e, l = i._payload, s = i._init;
            try {
              return Ki(s(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function fd(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case B:
          return _a(e.type);
        case He:
          return _a("Lazy");
        case he:
          return _a("Suspense");
        case ve:
          return _a("SuspenseList");
        case R:
        case M:
        case Le:
          return cu(e.type);
        case Se:
          return cu(e.type.render);
        case w:
          return Do(e.type);
        default:
          return "";
      }
    }
    function Xi(e) {
      try {
        var t = "", a = e;
        do
          t += fd(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Vt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function du(e) {
      return e.displayName || "Context";
    }
    function Pt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Si:
          return "Fragment";
        case sr:
          return "Portal";
        case Ci:
          return "Profiler";
        case ti:
          return "StrictMode";
        case Oe:
          return "Suspense";
        case We:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case L:
            var t = e;
            return du(t) + ".Consumer";
          case Ei:
            var a = e;
            return du(a._context) + ".Provider";
          case oe:
            return Vt(e, e.render, "ForwardRef");
          case Et:
            var i = e.displayName || null;
            return i !== null ? i : Pt(e.type) || "Memo";
          case _t: {
            var l = e, s = l._payload, d = l._init;
            try {
              return Pt(d(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function is(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function xi(e) {
      return e.displayName || "Context";
    }
    function yt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case qe:
          return "Cache";
        case _e:
          var i = a;
          return xi(i) + ".Consumer";
        case ge:
          var l = a;
          return xi(l._context) + ".Provider";
        case at:
          return "DehydratedFragment";
        case Se:
          return is(a, a.render, "ForwardRef");
        case Z:
          return "Fragment";
        case B:
          return a;
        case I:
          return "Portal";
        case F:
          return "Root";
        case ie:
          return "Text";
        case He:
          return Pt(a);
        case Ee:
          return a === ti ? "StrictMode" : "Mode";
        case X:
          return "Offscreen";
        case Ne:
          return "Profiler";
        case G:
          return "Scope";
        case he:
          return "Suspense";
        case ve:
          return "SuspenseList";
        case Re:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case w:
        case R:
        case it:
        case M:
        case Me:
        case Le:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var pu = v.ReactDebugCurrentFrame, fr = null, bi = !1;
    function Ar() {
      {
        if (fr === null)
          return null;
        var e = fr._debugOwner;
        if (e !== null && typeof e < "u")
          return yt(e);
      }
      return null;
    }
    function wi() {
      return fr === null ? "" : Xi(fr);
    }
    function hn() {
      pu.getCurrentStack = null, fr = null, bi = !1;
    }
    function en(e) {
      pu.getCurrentStack = e === null ? null : wi, fr = e, bi = !1;
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
    function Ma(e) {
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
    var ml = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function os(e, t) {
      ml[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || m("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || m("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function ls(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function No(e) {
      return e._valueTracker;
    }
    function yl(e) {
      e._valueTracker = null;
    }
    function dd(e) {
      var t = "";
      return e && (ls(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function La(e) {
      var t = ls(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
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
            yl(e), delete e[t];
          }
        };
        return d;
      }
    }
    function li(e) {
      No(e) || (e._valueTracker = La(e));
    }
    function Ri(e) {
      if (!e)
        return !1;
      var t = No(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = dd(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function ja(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var vu = !1, hu = !1, Mo = !1, gl = !1;
    function mu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function yu(e, t) {
      var a = e, i = t.checked, l = wt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function ui(e, t) {
      os("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !hu && (m("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ar() || "A component", t.type), hu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !vu && (m("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ar() || "A component", t.type), vu = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ma(t.value != null ? t.value : i),
        controlled: mu(t)
      };
    }
    function _(e, t) {
      var a = e, i = t.checked;
      i != null && Mr(a, "checked", i, !1);
    }
    function N(e, t) {
      var a = e;
      {
        var i = mu(t);
        !a._wrapperState.controlled && i && !gl && (m("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), gl = !0), a._wrapperState.controlled && !i && !Mo && (m("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Mo = !0);
      }
      _(e, t);
      var l = Ma(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = Ur(l)) : a.value !== Ur(l) && (a.value = Ur(l));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? lt(a, t.type, l) : t.hasOwnProperty("defaultValue") && lt(a, t.type, Ma(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Y(e, t, a) {
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
    function J(e, t) {
      var a = e;
      N(a, t), ye(a, t);
    }
    function ye(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Gn(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var d = l[s];
          if (!(d === e || d.form !== e.form)) {
            var y = tm(d);
            if (!y)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Ri(d), N(d, y);
          }
        }
      }
    }
    function lt(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ja(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Ur(e._wrapperState.initialValue) : e.defaultValue !== Ur(a) && (e.defaultValue = Ur(a)));
    }
    var Te = !1, ct = !1, Nt = !1;
    function Ft(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? f.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || ct || (ct = !0, m("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Nt || (Nt = !0, m("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Te && (m("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Te = !0);
    }
    function fn(e, t) {
      t.value != null && e.setAttribute("value", Ur(Ma(t.value)));
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
    var Lo = ["value", "defaultValue"];
    function us(e) {
      {
        os("select", e);
        for (var t = 0; t < Lo.length; t++) {
          var a = Lo[t];
          if (e[a] != null) {
            var i = kt(e[a]);
            e.multiple && !i ? m("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Sn()) : !e.multiple && i && m("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Sn());
          }
        }
      }
    }
    function Ji(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var s = a, d = {}, y = 0; y < s.length; y++)
          d["$" + s[y]] = !0;
        for (var g = 0; g < l.length; g++) {
          var x = d.hasOwnProperty("$" + l[g].value);
          l[g].selected !== x && (l[g].selected = x), x && i && (l[g].defaultSelected = !0);
        }
      } else {
        for (var k = Ur(Ma(a)), z = null, A = 0; A < l.length; A++) {
          if (l[A].value === k) {
            l[A].selected = !0, i && (l[A].defaultSelected = !0);
            return;
          }
          z === null && !l[A].disabled && (z = l[A]);
        }
        z !== null && (z.selected = !0);
      }
    }
    function ss(e, t) {
      return wt({}, t, {
        value: void 0
      });
    }
    function _l(e, t) {
      var a = e;
      us(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !nn && (m("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), nn = !0);
    }
    function pd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Ji(a, !!t.multiple, i, !1) : t.defaultValue != null && Ji(a, !!t.multiple, t.defaultValue, !0);
    }
    function xc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? Ji(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? Ji(a, !!t.multiple, t.defaultValue, !0) : Ji(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function vd(e, t) {
      var a = e, i = t.value;
      i != null && Ji(a, !!t.multiple, i, !1);
    }
    var bv = !1;
    function hd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = wt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Ur(a._wrapperState.initialValue)
      });
      return i;
    }
    function md(e, t) {
      var a = e;
      os("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !bv && (m("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ar() || "A component"), bv = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, s = t.defaultValue;
        if (l != null) {
          m("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
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
        initialValue: Ma(i)
      };
    }
    function wv(e, t) {
      var a = e, i = Ma(t.value), l = Ma(t.defaultValue);
      if (i != null) {
        var s = Ur(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = Ur(l));
    }
    function Rv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function My(e, t) {
      wv(e, t);
    }
    var Zi = "http://www.w3.org/1999/xhtml", yd = "http://www.w3.org/1998/Math/MathML", gd = "http://www.w3.org/2000/svg";
    function _d(e) {
      switch (e) {
        case "svg":
          return gd;
        case "math":
          return yd;
        default:
          return Zi;
      }
    }
    function Sd(e, t) {
      return e == null || e === Zi ? _d(t) : e === gd && t === "foreignObject" ? Zi : e;
    }
    var kv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, bc, Tv = kv(function(e, t) {
      if (e.namespaceURI === gd && !("innerHTML" in e)) {
        bc = bc || document.createElement("div"), bc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = bc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ea = 1, eo = 3, Pn = 8, to = 9, Cd = 11, gu = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === eo) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, cs = {
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
    }, fs = {
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
    function Dv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Ov = ["Webkit", "ms", "Moz", "O"];
    Object.keys(fs).forEach(function(e) {
      Ov.forEach(function(t) {
        fs[Dv(t, e)] = fs[e];
      });
    });
    function wc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(fs.hasOwnProperty(e) && fs[e]) ? t + "px" : (ma(t, e), ("" + t).trim());
    }
    var Nv = /([A-Z])/g, Mv = /^ms-/;
    function _u(e) {
      return e.replace(Nv, "-$1").toLowerCase().replace(Mv, "-ms-");
    }
    var Lv = function() {
    };
    {
      var Ly = /^(?:webkit|moz|o)[A-Z]/, jy = /^-ms-/, jv = /-(.)/g, Ed = /;\s*$/, ki = {}, Sl = {}, Av = !1, ds = !1, Ay = function(e) {
        return e.replace(jv, function(t, a) {
          return a.toUpperCase();
        });
      }, Uv = function(e) {
        ki.hasOwnProperty(e) && ki[e] || (ki[e] = !0, m(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ay(e.replace(jy, "ms-"))
        ));
      }, xd = function(e) {
        ki.hasOwnProperty(e) && ki[e] || (ki[e] = !0, m("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, bd = function(e, t) {
        Sl.hasOwnProperty(t) && Sl[t] || (Sl[t] = !0, m(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Ed, "")));
      }, zv = function(e, t) {
        Av || (Av = !0, m("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Pv = function(e, t) {
        ds || (ds = !0, m("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Lv = function(e, t) {
        e.indexOf("-") > -1 ? Uv(e) : Ly.test(e) ? xd(e) : Ed.test(t) && bd(e, t), typeof t == "number" && (isNaN(t) ? zv(e, t) : isFinite(t) || Pv(e, t));
      };
    }
    var Fv = Lv;
    function Uy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : _u(i)) + ":", t += wc(i, l, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Iv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || Fv(i, t[i]);
          var s = wc(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function zy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Vv(e) {
      var t = {};
      for (var a in e)
        for (var i = cs[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function Py(e, t) {
      {
        if (!t)
          return;
        var a = Vv(e), i = Vv(t), l = {};
        for (var s in a) {
          var d = a[s], y = i[s];
          if (y && d !== y) {
            var g = d + "," + y;
            if (l[g])
              continue;
            l[g] = !0, m("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", zy(e[d]) ? "Removing" : "Updating", d, y);
          }
        }
      }
    }
    var si = {
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
    }, ps = wt({
      menuitem: !0
    }, si), Hv = "__html";
    function Rc(e, t) {
      if (t) {
        if (ps[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Hv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && m("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function jo(e, t) {
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
    var vs = {
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
    }, kc = {
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
    }, Su = {}, Fy = new RegExp("^(aria)-[" + we + "]*$"), Cu = new RegExp("^(aria)[A-Z][" + we + "]*$");
    function wd(e, t) {
      {
        if (Nr.call(Su, t) && Su[t])
          return !0;
        if (Cu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = kc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return m("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Su[t] = !0, !0;
          if (t !== i)
            return m("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Su[t] = !0, !0;
        }
        if (Fy.test(t)) {
          var l = t.toLowerCase(), s = kc.hasOwnProperty(l) ? l : null;
          if (s == null)
            return Su[t] = !0, !1;
          if (t !== s)
            return m("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Su[t] = !0, !0;
        }
      }
      return !0;
    }
    function hs(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = wd(e, i);
          l || a.push(i);
        }
        var s = a.map(function(d) {
          return "`" + d + "`";
        }).join(", ");
        a.length === 1 ? m("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && m("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Rd(e, t) {
      jo(e, t) || hs(e, t);
    }
    var kd = !1;
    function Tc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !kd && (kd = !0, e === "select" && t.multiple ? m("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : m("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Cl = function() {
    };
    {
      var dr = {}, Td = /^on./, Dc = /^on[^A-Z]/, $v = new RegExp("^(aria)-[" + we + "]*$"), Bv = new RegExp("^(aria)[A-Z][" + we + "]*$");
      Cl = function(e, t, a, i) {
        if (Nr.call(dr, t) && dr[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return m("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), dr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, d = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var y = d.hasOwnProperty(l) ? d[l] : null;
          if (y != null)
            return m("Invalid event handler property `%s`. Did you mean `%s`?", t, y), dr[t] = !0, !0;
          if (Td.test(t))
            return m("Unknown event handler property `%s`. It will be ignored.", t), dr[t] = !0, !0;
        } else if (Td.test(t))
          return Dc.test(t) && m("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), dr[t] = !0, !0;
        if ($v.test(t) || Bv.test(t))
          return !0;
        if (l === "innerhtml")
          return m("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), dr[t] = !0, !0;
        if (l === "aria")
          return m("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), dr[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return m("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), dr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return m("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), dr[t] = !0, !0;
        var g = sn(t), x = g !== null && g.type === Qn;
        if (vs.hasOwnProperty(l)) {
          var k = vs[l];
          if (k !== t)
            return m("Invalid DOM property `%s`. Did you mean `%s`?", t, k), dr[t] = !0, !0;
        } else if (!x && t !== l)
          return m("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), dr[t] = !0, !0;
        return typeof a == "boolean" && pn(t, a, g, !1) ? (a ? m('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : m('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), dr[t] = !0, !0) : x ? !0 : pn(t, a, g, !1) ? (dr[t] = !0, !1) : ((a === "false" || a === "true") && g !== null && g.type === zn && (m("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), dr[t] = !0), !0);
      };
    }
    var qv = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var s = Cl(e, l, t[l], a);
          s || i.push(l);
        }
        var d = i.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        i.length === 1 ? m("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e) : i.length > 1 && m("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e);
      }
    };
    function Wv(e, t, a) {
      jo(e, t) || qv(e, t, a);
    }
    var Dd = 1, Oc = 2, Aa = 4, Od = Dd | Oc | Aa, El = null;
    function Iy(e) {
      El !== null && m("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), El = e;
    }
    function Vy() {
      El === null && m("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), El = null;
    }
    function ms(e) {
      return e === El;
    }
    function Nd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === eo ? t.parentNode : t;
    }
    var Nc = null, xl = null, Qt = null;
    function Mc(e) {
      var t = Hu(e);
      if (t) {
        if (typeof Nc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = tm(a);
          Nc(t.stateNode, t.type, i);
        }
      }
    }
    function Lc(e) {
      Nc = e;
    }
    function Eu(e) {
      xl ? Qt ? Qt.push(e) : Qt = [e] : xl = e;
    }
    function Yv() {
      return xl !== null || Qt !== null;
    }
    function jc() {
      if (xl) {
        var e = xl, t = Qt;
        if (xl = null, Qt = null, Mc(e), t)
          for (var a = 0; a < t.length; a++)
            Mc(t[a]);
      }
    }
    var xu = function(e, t) {
      return e(t);
    }, ys = function() {
    }, Ao = !1;
    function Gv() {
      var e = Yv();
      e && (ys(), jc());
    }
    function Qv(e, t, a) {
      if (Ao)
        return e(t, a);
      Ao = !0;
      try {
        return xu(e, t, a);
      } finally {
        Ao = !1, Gv();
      }
    }
    function Hy(e, t, a) {
      xu = e, ys = a;
    }
    function Kv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Ac(e, t, a) {
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
          return !!(a.disabled && Kv(t));
        default:
          return !1;
      }
    }
    function Uo(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = tm(a);
      if (i === null)
        return null;
      var l = i[t];
      if (Ac(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var gs = !1;
    if (Un)
      try {
        var bl = {};
        Object.defineProperty(bl, "passive", {
          get: function() {
            gs = !0;
          }
        }), window.addEventListener("test", bl, bl), window.removeEventListener("test", bl, bl);
      } catch {
        gs = !1;
      }
    function Uc(e, t, a, i, l, s, d, y, g) {
      var x = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, x);
      } catch (k) {
        this.onError(k);
      }
    }
    var zc = Uc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Md = document.createElement("react");
      zc = function(t, a, i, l, s, d, y, g, x) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var k = document.createEvent("Event"), z = !1, A = !0, W = window.event, K = Object.getOwnPropertyDescriptor(window, "event");
        function te() {
          Md.removeEventListener(ne, ut, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = W);
        }
        var Ae = Array.prototype.slice.call(arguments, 3);
        function ut() {
          z = !0, te(), a.apply(i, Ae), A = !1;
        }
        var Ze, zt = !1, Mt = !1;
        function H($) {
          if (Ze = $.error, zt = !0, Ze === null && $.colno === 0 && $.lineno === 0 && (Mt = !0), $.defaultPrevented && Ze != null && typeof Ze == "object")
            try {
              Ze._suppressLogging = !0;
            } catch {
            }
        }
        var ne = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", H), Md.addEventListener(ne, ut, !1), k.initEvent(ne, !1, !1), Md.dispatchEvent(k), K && Object.defineProperty(window, "event", K), z && A && (zt ? Mt && (Ze = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ze = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ze)), window.removeEventListener("error", H), !z)
          return te(), Uc.apply(this, arguments);
      };
    }
    var Xv = zc, bu = !1, Pc = null, wu = !1, Ti = null, Jv = {
      onError: function(e) {
        bu = !0, Pc = e;
      }
    };
    function zo(e, t, a, i, l, s, d, y, g) {
      bu = !1, Pc = null, Xv.apply(Jv, arguments);
    }
    function Di(e, t, a, i, l, s, d, y, g) {
      if (zo.apply(this, arguments), bu) {
        var x = Ss();
        wu || (wu = !0, Ti = x);
      }
    }
    function _s() {
      if (wu) {
        var e = Ti;
        throw wu = !1, Ti = null, e;
      }
    }
    function no() {
      return bu;
    }
    function Ss() {
      if (bu) {
        var e = Pc;
        return bu = !1, Pc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ru(e) {
      return e._reactInternals;
    }
    function $y(e) {
      return e._reactInternals !== void 0;
    }
    function wl(e, t) {
      e._reactInternals = t;
    }
    var nt = (
      /*                      */
      0
    ), ci = (
      /*                */
      1
    ), Cn = (
      /*                    */
      2
    ), jt = (
      /*                       */
      4
    ), Ua = (
      /*                */
      16
    ), za = (
      /*                 */
      32
    ), dn = (
      /*                     */
      64
    ), et = (
      /*                   */
      128
    ), kr = (
      /*            */
      256
    ), wn = (
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
    ), Fn = (
      /*                   */
      8192
    ), ku = (
      /*             */
      16384
    ), Zv = (
      /*               */
      32767
    ), Cs = (
      /*                   */
      32768
    ), rr = (
      /*                */
      65536
    ), Fc = (
      /* */
      131072
    ), Oi = (
      /*                       */
      1048576
    ), Tu = (
      /*                    */
      2097152
    ), ro = (
      /*                 */
      4194304
    ), Ic = (
      /*                */
      8388608
    ), Po = (
      /*               */
      16777216
    ), Ni = (
      /*              */
      33554432
    ), Fo = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      jt | Xn | 0
    ), Io = Cn | jt | Ua | za | wn | na | Fn, Vo = jt | dn | wn | Fn, ao = ta | Ua, In = ro | Ic | Tu, Pa = v.ReactCurrentOwner;
    function Sa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Cn | na)) !== nt && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === F ? a : null;
    }
    function Mi(e) {
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
    function Li(e) {
      return e.tag === F ? e.stateNode.containerInfo : null;
    }
    function Rl(e) {
      return Sa(e) === e;
    }
    function eh(e) {
      {
        var t = Pa.current;
        if (t !== null && t.tag === w) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || m("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", yt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = Ru(e);
      return l ? Sa(l) === l : !1;
    }
    function Vc(e) {
      if (Sa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Hc(e) {
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
              return Vc(s), e;
            if (g === l)
              return Vc(s), t;
            g = g.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = s, l = d;
        else {
          for (var x = !1, k = s.child; k; ) {
            if (k === i) {
              x = !0, i = s, l = d;
              break;
            }
            if (k === l) {
              x = !0, l = s, i = d;
              break;
            }
            k = k.sibling;
          }
          if (!x) {
            for (k = d.child; k; ) {
              if (k === i) {
                x = !0, i = d, l = s;
                break;
              }
              if (k === l) {
                x = !0, l = d, i = s;
                break;
              }
              k = k.sibling;
            }
            if (!x)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== F)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ra(e) {
      var t = Hc(e);
      return t !== null ? aa(t) : null;
    }
    function aa(e) {
      if (e.tag === B || e.tag === ie)
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
      var t = Hc(e);
      return t !== null ? Fa(t) : null;
    }
    function Fa(e) {
      if (e.tag === B || e.tag === ie)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== I) {
          var a = Fa(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Ld = p.unstable_scheduleCallback, th = p.unstable_cancelCallback, jd = p.unstable_shouldYield, Ad = p.unstable_requestPaint, Jn = p.unstable_now, $c = p.unstable_getCurrentPriorityLevel, Es = p.unstable_ImmediatePriority, Ho = p.unstable_UserBlockingPriority, io = p.unstable_NormalPriority, By = p.unstable_LowPriority, kl = p.unstable_IdlePriority, Bc = p.unstable_yieldValue, nh = p.unstable_setDisableYieldValue, Tl = null, On = null, je = null, Ca = !1, ia = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Du(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return m("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        tt && (e = wt({}, e, {
          getLaneLabelMap: Dl,
          injectProfilingHooks: Ia
        })), Tl = t.inject(e), On = t;
      } catch (a) {
        m("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Ud(e, t) {
      if (On && typeof On.onScheduleFiberRoot == "function")
        try {
          On.onScheduleFiberRoot(Tl, e, t);
        } catch (a) {
          Ca || (Ca = !0, m("React instrumentation encountered an error: %s", a));
        }
    }
    function zd(e, t) {
      if (On && typeof On.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & et) === et;
          if (Ie) {
            var i;
            switch (t) {
              case zr:
                i = Es;
                break;
              case Ai:
                i = Ho;
                break;
              case Va:
                i = io;
                break;
              case Ha:
                i = kl;
                break;
              default:
                i = io;
                break;
            }
            On.onCommitFiberRoot(Tl, e, i, a);
          }
        } catch (l) {
          Ca || (Ca = !0, m("React instrumentation encountered an error: %s", l));
        }
    }
    function Pd(e) {
      if (On && typeof On.onPostCommitFiberRoot == "function")
        try {
          On.onPostCommitFiberRoot(Tl, e);
        } catch (t) {
          Ca || (Ca = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function Fd(e) {
      if (On && typeof On.onCommitFiberUnmount == "function")
        try {
          On.onCommitFiberUnmount(Tl, e);
        } catch (t) {
          Ca || (Ca = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function En(e) {
      if (typeof Bc == "function" && (nh(e), b(e)), On && typeof On.setStrictMode == "function")
        try {
          On.setStrictMode(Tl, e);
        } catch (t) {
          Ca || (Ca = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function Ia(e) {
      je = e;
    }
    function Dl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Ml; a++) {
          var i = oh(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Id(e) {
      je !== null && typeof je.markCommitStarted == "function" && je.markCommitStarted(e);
    }
    function Vd() {
      je !== null && typeof je.markCommitStopped == "function" && je.markCommitStopped();
    }
    function Ea(e) {
      je !== null && typeof je.markComponentRenderStarted == "function" && je.markComponentRenderStarted(e);
    }
    function xa() {
      je !== null && typeof je.markComponentRenderStopped == "function" && je.markComponentRenderStopped();
    }
    function Hd(e) {
      je !== null && typeof je.markComponentPassiveEffectMountStarted == "function" && je.markComponentPassiveEffectMountStarted(e);
    }
    function rh() {
      je !== null && typeof je.markComponentPassiveEffectMountStopped == "function" && je.markComponentPassiveEffectMountStopped();
    }
    function oo(e) {
      je !== null && typeof je.markComponentPassiveEffectUnmountStarted == "function" && je.markComponentPassiveEffectUnmountStarted(e);
    }
    function $o() {
      je !== null && typeof je.markComponentPassiveEffectUnmountStopped == "function" && je.markComponentPassiveEffectUnmountStopped();
    }
    function qc(e) {
      je !== null && typeof je.markComponentLayoutEffectMountStarted == "function" && je.markComponentLayoutEffectMountStarted(e);
    }
    function ah() {
      je !== null && typeof je.markComponentLayoutEffectMountStopped == "function" && je.markComponentLayoutEffectMountStopped();
    }
    function xs(e) {
      je !== null && typeof je.markComponentLayoutEffectUnmountStarted == "function" && je.markComponentLayoutEffectUnmountStarted(e);
    }
    function $d() {
      je !== null && typeof je.markComponentLayoutEffectUnmountStopped == "function" && je.markComponentLayoutEffectUnmountStopped();
    }
    function bs(e, t, a) {
      je !== null && typeof je.markComponentErrored == "function" && je.markComponentErrored(e, t, a);
    }
    function ji(e, t, a) {
      je !== null && typeof je.markComponentSuspended == "function" && je.markComponentSuspended(e, t, a);
    }
    function ws(e) {
      je !== null && typeof je.markLayoutEffectsStarted == "function" && je.markLayoutEffectsStarted(e);
    }
    function Rs() {
      je !== null && typeof je.markLayoutEffectsStopped == "function" && je.markLayoutEffectsStopped();
    }
    function Ol(e) {
      je !== null && typeof je.markPassiveEffectsStarted == "function" && je.markPassiveEffectsStarted(e);
    }
    function Bd() {
      je !== null && typeof je.markPassiveEffectsStopped == "function" && je.markPassiveEffectsStopped();
    }
    function Nl(e) {
      je !== null && typeof je.markRenderStarted == "function" && je.markRenderStarted(e);
    }
    function ih() {
      je !== null && typeof je.markRenderYielded == "function" && je.markRenderYielded();
    }
    function Wc() {
      je !== null && typeof je.markRenderStopped == "function" && je.markRenderStopped();
    }
    function xn(e) {
      je !== null && typeof je.markRenderScheduled == "function" && je.markRenderScheduled(e);
    }
    function Yc(e, t) {
      je !== null && typeof je.markForceUpdateScheduled == "function" && je.markForceUpdateScheduled(e, t);
    }
    function ks(e, t) {
      je !== null && typeof je.markStateUpdateScheduled == "function" && je.markStateUpdateScheduled(e, t);
    }
    var rt = (
      /*                         */
      0
    ), Dt = (
      /*                 */
      1
    ), Ht = (
      /*                    */
      2
    ), rn = (
      /*               */
      8
    ), $t = (
      /*              */
      16
    ), Vn = Math.clz32 ? Math.clz32 : Ts, ar = Math.log, Gc = Math.LN2;
    function Ts(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (ar(t) / Gc | 0) | 0;
    }
    var Ml = 31, le = (
      /*                        */
      0
    ), It = (
      /*                          */
      0
    ), pt = (
      /*                        */
      1
    ), Bo = (
      /*    */
      2
    ), fi = (
      /*             */
      4
    ), Tr = (
      /*            */
      8
    ), Nn = (
      /*                     */
      16
    ), lo = (
      /*                */
      32
    ), qo = (
      /*                       */
      4194240
    ), Ll = (
      /*                        */
      64
    ), Qc = (
      /*                        */
      128
    ), Kc = (
      /*                        */
      256
    ), Xc = (
      /*                        */
      512
    ), Jc = (
      /*                        */
      1024
    ), Zc = (
      /*                        */
      2048
    ), ef = (
      /*                        */
      4096
    ), tf = (
      /*                        */
      8192
    ), nf = (
      /*                        */
      16384
    ), jl = (
      /*                       */
      32768
    ), rf = (
      /*                       */
      65536
    ), Ou = (
      /*                       */
      131072
    ), Nu = (
      /*                       */
      262144
    ), af = (
      /*                       */
      524288
    ), Ds = (
      /*                       */
      1048576
    ), of = (
      /*                       */
      2097152
    ), Os = (
      /*                            */
      130023424
    ), Al = (
      /*                             */
      4194304
    ), lf = (
      /*                             */
      8388608
    ), Ns = (
      /*                             */
      16777216
    ), uf = (
      /*                             */
      33554432
    ), sf = (
      /*                             */
      67108864
    ), qd = Al, Ms = (
      /*          */
      134217728
    ), Wd = (
      /*                          */
      268435455
    ), Ls = (
      /*               */
      268435456
    ), Ul = (
      /*                        */
      536870912
    ), oa = (
      /*                   */
      1073741824
    );
    function oh(e) {
      {
        if (e & pt)
          return "Sync";
        if (e & Bo)
          return "InputContinuousHydration";
        if (e & fi)
          return "InputContinuous";
        if (e & Tr)
          return "DefaultHydration";
        if (e & Nn)
          return "Default";
        if (e & lo)
          return "TransitionHydration";
        if (e & qo)
          return "Transition";
        if (e & Os)
          return "Retry";
        if (e & Ms)
          return "SelectiveHydration";
        if (e & Ls)
          return "IdleHydration";
        if (e & Ul)
          return "Idle";
        if (e & oa)
          return "Offscreen";
      }
    }
    var ln = -1, zl = Ll, cf = Al;
    function js(e) {
      switch (Wo(e)) {
        case pt:
          return pt;
        case Bo:
          return Bo;
        case fi:
          return fi;
        case Tr:
          return Tr;
        case Nn:
          return Nn;
        case lo:
          return lo;
        case Ll:
        case Qc:
        case Kc:
        case Xc:
        case Jc:
        case Zc:
        case ef:
        case tf:
        case nf:
        case jl:
        case rf:
        case Ou:
        case Nu:
        case af:
        case Ds:
        case of:
          return e & qo;
        case Al:
        case lf:
        case Ns:
        case uf:
        case sf:
          return e & Os;
        case Ms:
          return Ms;
        case Ls:
          return Ls;
        case Ul:
          return Ul;
        case oa:
          return oa;
        default:
          return m("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ff(e, t) {
      var a = e.pendingLanes;
      if (a === le)
        return le;
      var i = le, l = e.suspendedLanes, s = e.pingedLanes, d = a & Wd;
      if (d !== le) {
        var y = d & ~l;
        if (y !== le)
          i = js(y);
        else {
          var g = d & s;
          g !== le && (i = js(g));
        }
      } else {
        var x = a & ~l;
        x !== le ? i = js(x) : s !== le && (i = js(s));
      }
      if (i === le)
        return le;
      if (t !== le && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === le) {
        var k = Wo(i), z = Wo(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          k >= z || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          k === Nn && (z & qo) !== le
        )
          return t;
      }
      (i & fi) !== le && (i |= a & Nn);
      var A = e.entangledLanes;
      if (A !== le)
        for (var W = e.entanglements, K = i & A; K > 0; ) {
          var te = Hn(K), Ae = 1 << te;
          i |= W[te], K &= ~Ae;
        }
      return i;
    }
    function di(e, t) {
      for (var a = e.eventTimes, i = ln; t > 0; ) {
        var l = Hn(t), s = 1 << l, d = a[l];
        d > i && (i = d), t &= ~s;
      }
      return i;
    }
    function Yd(e, t) {
      switch (e) {
        case pt:
        case Bo:
        case fi:
          return t + 250;
        case Tr:
        case Nn:
        case lo:
        case Ll:
        case Qc:
        case Kc:
        case Xc:
        case Jc:
        case Zc:
        case ef:
        case tf:
        case nf:
        case jl:
        case rf:
        case Ou:
        case Nu:
        case af:
        case Ds:
        case of:
          return t + 5e3;
        case Al:
        case lf:
        case Ns:
        case uf:
        case sf:
          return ln;
        case Ms:
        case Ls:
        case Ul:
        case oa:
          return ln;
        default:
          return m("Should have found matching lanes. This is a bug in React."), ln;
      }
    }
    function df(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, d = a; d > 0; ) {
        var y = Hn(d), g = 1 << y, x = s[y];
        x === ln ? ((g & i) === le || (g & l) !== le) && (s[y] = Yd(g, t)) : x <= t && (e.expiredLanes |= g), d &= ~g;
      }
    }
    function lh(e) {
      return js(e.pendingLanes);
    }
    function pf(e) {
      var t = e.pendingLanes & ~oa;
      return t !== le ? t : t & oa ? oa : le;
    }
    function uh(e) {
      return (e & pt) !== le;
    }
    function As(e) {
      return (e & Wd) !== le;
    }
    function Pl(e) {
      return (e & Os) === e;
    }
    function Gd(e) {
      var t = pt | fi | Nn;
      return (e & t) === le;
    }
    function Qd(e) {
      return (e & qo) === e;
    }
    function vf(e, t) {
      var a = Bo | fi | Tr | Nn;
      return (t & a) !== le;
    }
    function sh(e, t) {
      return (t & e.expiredLanes) !== le;
    }
    function Kd(e) {
      return (e & qo) !== le;
    }
    function Xd() {
      var e = zl;
      return zl <<= 1, (zl & qo) === le && (zl = Ll), e;
    }
    function ch() {
      var e = cf;
      return cf <<= 1, (cf & Os) === le && (cf = Al), e;
    }
    function Wo(e) {
      return e & -e;
    }
    function Us(e) {
      return Wo(e);
    }
    function Hn(e) {
      return 31 - Vn(e);
    }
    function pr(e) {
      return Hn(e);
    }
    function la(e, t) {
      return (e & t) !== le;
    }
    function Fl(e, t) {
      return (e & t) === t;
    }
    function bt(e, t) {
      return e | t;
    }
    function zs(e, t) {
      return e & ~t;
    }
    function Jd(e, t) {
      return e & t;
    }
    function fh(e) {
      return e;
    }
    function dh(e, t) {
      return e !== It && e < t ? e : t;
    }
    function Ps(e) {
      for (var t = [], a = 0; a < Ml; a++)
        t.push(e);
      return t;
    }
    function Mu(e, t, a) {
      e.pendingLanes |= t, t !== Ul && (e.suspendedLanes = le, e.pingedLanes = le);
      var i = e.eventTimes, l = pr(t);
      i[l] = a;
    }
    function ph(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = Hn(i), s = 1 << l;
        a[l] = ln, i &= ~s;
      }
    }
    function hf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Zd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = le, e.pingedLanes = le, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, d = a; d > 0; ) {
        var y = Hn(d), g = 1 << y;
        i[y] = le, l[y] = ln, s[y] = ln, d &= ~g;
      }
    }
    function mf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var s = Hn(l), d = 1 << s;
        // Is this one of the newly entangled lanes?
        d & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), l &= ~d;
      }
    }
    function ep(e, t) {
      var a = Wo(t), i;
      switch (a) {
        case fi:
          i = Bo;
          break;
        case Nn:
          i = Tr;
          break;
        case Ll:
        case Qc:
        case Kc:
        case Xc:
        case Jc:
        case Zc:
        case ef:
        case tf:
        case nf:
        case jl:
        case rf:
        case Ou:
        case Nu:
        case af:
        case Ds:
        case of:
        case Al:
        case lf:
        case Ns:
        case uf:
        case sf:
          i = lo;
          break;
        case Ul:
          i = Ls;
          break;
        default:
          i = It;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== It ? It : i;
    }
    function Fs(e, t, a) {
      if (ia)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = pr(a), s = 1 << l, d = i[l];
          d.add(t), a &= ~s;
        }
    }
    function vh(e, t) {
      if (ia)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = pr(t), s = 1 << l, d = a[l];
          d.size > 0 && (d.forEach(function(y) {
            var g = y.alternate;
            (g === null || !i.has(g)) && i.add(y);
          }), d.clear()), t &= ~s;
        }
    }
    function tp(e, t) {
      return null;
    }
    var zr = pt, Ai = fi, Va = Nn, Ha = Ul, Is = It;
    function $a() {
      return Is;
    }
    function $n(e) {
      Is = e;
    }
    function hh(e, t) {
      var a = Is;
      try {
        return Is = e, t();
      } finally {
        Is = a;
      }
    }
    function mh(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Vs(e, t) {
      return e > t ? e : t;
    }
    function ir(e, t) {
      return e !== 0 && e < t;
    }
    function yh(e) {
      var t = Wo(e);
      return ir(zr, t) ? ir(Ai, t) ? As(t) ? Va : Ha : Ai : zr;
    }
    function yf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Hs;
    function Dr(e) {
      Hs = e;
    }
    function qy(e) {
      Hs(e);
    }
    var $e;
    function Lu(e) {
      $e = e;
    }
    var gf;
    function gh(e) {
      gf = e;
    }
    var _h;
    function $s(e) {
      _h = e;
    }
    var Bs;
    function np(e) {
      Bs = e;
    }
    var _f = !1, qs = [], uo = null, Ui = null, zi = null, Mn = /* @__PURE__ */ new Map(), Pr = /* @__PURE__ */ new Map(), Fr = [], Sh = [
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
    function Ch(e) {
      return Sh.indexOf(e) > -1;
    }
    function pi(e, t, a, i, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: l,
        targetContainers: [i]
      };
    }
    function rp(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          uo = null;
          break;
        case "dragenter":
        case "dragleave":
          Ui = null;
          break;
        case "mouseover":
        case "mouseout":
          zi = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Mn.delete(a);
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
    function ua(e, t, a, i, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var d = pi(t, a, i, l, s);
        if (t !== null) {
          var y = Hu(t);
          y !== null && $e(y);
        }
        return d;
      }
      e.eventSystemFlags |= i;
      var g = e.targetContainers;
      return l !== null && g.indexOf(l) === -1 && g.push(l), e;
    }
    function Wy(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return uo = ua(uo, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var d = l;
          return Ui = ua(Ui, e, t, a, i, d), !0;
        }
        case "mouseover": {
          var y = l;
          return zi = ua(zi, e, t, a, i, y), !0;
        }
        case "pointerover": {
          var g = l, x = g.pointerId;
          return Mn.set(x, ua(Mn.get(x) || null, e, t, a, i, g)), !0;
        }
        case "gotpointercapture": {
          var k = l, z = k.pointerId;
          return Pr.set(z, ua(Pr.get(z) || null, e, t, a, i, k)), !0;
        }
      }
      return !1;
    }
    function ap(e) {
      var t = rc(e.target);
      if (t !== null) {
        var a = Sa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === he) {
            var l = Mi(a);
            if (l !== null) {
              e.blockedOn = l, Bs(e.priority, function() {
                gf(a);
              });
              return;
            }
          } else if (i === F) {
            var s = a.stateNode;
            if (yf(s)) {
              e.blockedOn = Li(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Eh(e) {
      for (var t = _h(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Fr.length && ir(t, Fr[i].priority); i++)
        ;
      Fr.splice(i, 0, a), i === 0 && ap(a);
    }
    function Ws(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Au(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          Iy(s), l.target.dispatchEvent(s), Vy();
        } else {
          var d = Hu(i);
          return d !== null && $e(d), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function ip(e, t, a) {
      Ws(e) && a.delete(t);
    }
    function Yy() {
      _f = !1, uo !== null && Ws(uo) && (uo = null), Ui !== null && Ws(Ui) && (Ui = null), zi !== null && Ws(zi) && (zi = null), Mn.forEach(ip), Pr.forEach(ip);
    }
    function Yo(e, t) {
      e.blockedOn === t && (e.blockedOn = null, _f || (_f = !0, p.unstable_scheduleCallback(p.unstable_NormalPriority, Yy)));
    }
    function Il(e) {
      if (qs.length > 0) {
        Yo(qs[0], e);
        for (var t = 1; t < qs.length; t++) {
          var a = qs[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      uo !== null && Yo(uo, e), Ui !== null && Yo(Ui, e), zi !== null && Yo(zi, e);
      var i = function(y) {
        return Yo(y, e);
      };
      Mn.forEach(i), Pr.forEach(i);
      for (var l = 0; l < Fr.length; l++) {
        var s = Fr[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Fr.length > 0; ) {
        var d = Fr[0];
        if (d.blockedOn !== null)
          break;
        ap(d), d.blockedOn === null && Fr.shift();
      }
    }
    var vr = v.ReactCurrentBatchConfig, At = !0;
    function Zn(e) {
      At = !!e;
    }
    function Bn() {
      return At;
    }
    function hr(e, t, a) {
      var i = Sf(t), l;
      switch (i) {
        case zr:
          l = ba;
          break;
        case Ai:
          l = ju;
          break;
        case Va:
        default:
          l = Ln;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function ba(e, t, a, i) {
      var l = $a(), s = vr.transition;
      vr.transition = null;
      try {
        $n(zr), Ln(e, t, a, i);
      } finally {
        $n(l), vr.transition = s;
      }
    }
    function ju(e, t, a, i) {
      var l = $a(), s = vr.transition;
      vr.transition = null;
      try {
        $n(Ai), Ln(e, t, a, i);
      } finally {
        $n(l), vr.transition = s;
      }
    }
    function Ln(e, t, a, i) {
      At && Ys(e, t, a, i);
    }
    function Ys(e, t, a, i) {
      var l = Au(e, t, a, i);
      if (l === null) {
        cg(e, t, i, Pi, a), rp(e, i);
        return;
      }
      if (Wy(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (rp(e, i), t & Aa && Ch(e)) {
        for (; l !== null; ) {
          var s = Hu(l);
          s !== null && qy(s);
          var d = Au(e, t, a, i);
          if (d === null && cg(e, t, i, Pi, a), d === l)
            break;
          l = d;
        }
        l !== null && i.stopPropagation();
        return;
      }
      cg(e, t, i, null, a);
    }
    var Pi = null;
    function Au(e, t, a, i) {
      Pi = null;
      var l = Nd(i), s = rc(l);
      if (s !== null) {
        var d = Sa(s);
        if (d === null)
          s = null;
        else {
          var y = d.tag;
          if (y === he) {
            var g = Mi(d);
            if (g !== null)
              return g;
            s = null;
          } else if (y === F) {
            var x = d.stateNode;
            if (yf(x))
              return Li(d);
            s = null;
          } else d !== s && (s = null);
        }
      }
      return Pi = s, null;
    }
    function Sf(e) {
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
          return Ai;
        case "message": {
          var t = $c();
          switch (t) {
            case Es:
              return zr;
            case Ho:
              return Ai;
            case io:
            case By:
              return Va;
            case kl:
              return Ha;
            default:
              return Va;
          }
        }
        default:
          return Va;
      }
    }
    function Gs(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function sa(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function op(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Uu(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var wa = null, zu = null, Vl = null;
    function Go(e) {
      return wa = e, zu = Qs(), !0;
    }
    function Cf() {
      wa = null, zu = null, Vl = null;
    }
    function so() {
      if (Vl)
        return Vl;
      var e, t = zu, a = t.length, i, l = Qs(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === l[s - i]; i++)
        ;
      var y = i > 1 ? 1 - i : void 0;
      return Vl = l.slice(e, y), Vl;
    }
    function Qs() {
      return "value" in wa ? wa.value : wa.textContent;
    }
    function Qo(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Pu() {
      return !0;
    }
    function Ks() {
      return !1;
    }
    function Or(e) {
      function t(a, i, l, s, d) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = d, this.currentTarget = null;
        for (var y in e)
          if (e.hasOwnProperty(y)) {
            var g = e[y];
            g ? this[y] = g(s) : this[y] = s[y];
          }
        var x = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return x ? this.isDefaultPrevented = Pu : this.isDefaultPrevented = Ks, this.isPropagationStopped = Ks, this;
      }
      return wt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Pu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Pu);
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
        isPersistent: Pu
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
    }, Fi = Or(qn), Ir = wt({}, qn, {
      view: 0,
      detail: 0
    }), ca = Or(Ir), Ef, Xs, Hl;
    function Gy(e) {
      e !== Hl && (Hl && e.type === "mousemove" ? (Ef = e.screenX - Hl.screenX, Xs = e.screenY - Hl.screenY) : (Ef = 0, Xs = 0), Hl = e);
    }
    var vi = wt({}, Ir, {
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
        return "movementX" in e ? e.movementX : (Gy(e), Ef);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Xs;
      }
    }), lp = Or(vi), up = wt({}, vi, {
      dataTransfer: 0
    }), $l = Or(up), sp = wt({}, Ir, {
      relatedTarget: 0
    }), co = Or(sp), xh = wt({}, qn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), bh = Or(xh), cp = wt({}, qn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), xf = Or(cp), Qy = wt({}, qn, {
      data: 0
    }), wh = Or(Qy), Rh = wh, kh = {
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
    }, Bl = {
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
    function Ky(e) {
      if (e.key) {
        var t = kh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Qo(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Bl[e.keyCode] || "Unidentified" : "";
    }
    var Fu = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Th(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Fu[e];
      return i ? !!a[i] : !1;
    }
    function gn(e) {
      return Th;
    }
    var Xy = wt({}, Ir, {
      key: Ky,
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
        return e.type === "keypress" ? Qo(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Qo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Dh = Or(Xy), Jy = wt({}, vi, {
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
    }), Oh = Or(Jy), Nh = wt({}, Ir, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: gn
    }), Mh = Or(Nh), Zy = wt({}, qn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ba = Or(Zy), fp = wt({}, vi, {
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
    }), eg = Or(fp), Ko = [9, 13, 27, 32], Js = 229, fo = Un && "CompositionEvent" in window, Xo = null;
    Un && "documentMode" in document && (Xo = document.documentMode);
    var dp = Un && "TextEvent" in window && !Xo, bf = Un && (!fo || Xo && Xo > 8 && Xo <= 11), Lh = 32, wf = String.fromCharCode(Lh);
    function tg() {
      ht("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ht("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ht("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ht("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var pp = !1;
    function jh(e) {
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
    function kf(e, t) {
      return e === "keydown" && t.keyCode === Js;
    }
    function vp(e, t) {
      switch (e) {
        case "keyup":
          return Ko.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Js;
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
    function Ah(e) {
      return e.locale === "ko";
    }
    var ql = !1;
    function hp(e, t, a, i, l) {
      var s, d;
      if (fo ? s = Rf(t) : ql ? vp(t, i) && (s = "onCompositionEnd") : kf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      bf && !Ah(i) && (!ql && s === "onCompositionStart" ? ql = Go(l) : s === "onCompositionEnd" && ql && (d = so()));
      var y = Hh(a, s);
      if (y.length > 0) {
        var g = new wh(s, t, null, i, l);
        if (e.push({
          event: g,
          listeners: y
        }), d)
          g.data = d;
        else {
          var x = Tf(i);
          x !== null && (g.data = x);
        }
      }
    }
    function Df(e, t) {
      switch (e) {
        case "compositionend":
          return Tf(t);
        case "keypress":
          var a = t.which;
          return a !== Lh ? null : (pp = !0, wf);
        case "textInput":
          var i = t.data;
          return i === wf && pp ? null : i;
        default:
          return null;
      }
    }
    function mp(e, t) {
      if (ql) {
        if (e === "compositionend" || !fo && vp(e, t)) {
          var a = so();
          return Cf(), ql = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!jh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return bf && !Ah(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Of(e, t, a, i, l) {
      var s;
      if (dp ? s = Df(t, i) : s = mp(t, i), !s)
        return null;
      var d = Hh(a, "onBeforeInput");
      if (d.length > 0) {
        var y = new Rh("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: y,
          listeners: d
        }), y.data = s;
      }
    }
    function Uh(e, t, a, i, l, s, d) {
      hp(e, t, a, i, l), Of(e, t, a, i, l);
    }
    var ng = {
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
    function Zs(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!ng[e.type] : t === "textarea";
    }
    function rg(e) {
      if (!Un)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function ec() {
      ht("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function zh(e, t, a, i) {
      Eu(i);
      var l = Hh(t, "onChange");
      if (l.length > 0) {
        var s = new Fi("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: l
        });
      }
    }
    var Jo = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function o(e) {
      var t = [];
      zh(t, n, e, Nd(e)), Qv(u, t);
    }
    function u(e) {
      b_(e, 0);
    }
    function c(e) {
      var t = Uf(e);
      if (Ri(t))
        return e;
    }
    function h(e, t) {
      if (e === "change")
        return t;
    }
    var C = !1;
    Un && (C = rg("input") && (!document.documentMode || document.documentMode > 9));
    function O(e, t) {
      Jo = e, n = t, Jo.attachEvent("onpropertychange", Q);
    }
    function j() {
      Jo && (Jo.detachEvent("onpropertychange", Q), Jo = null, n = null);
    }
    function Q(e) {
      e.propertyName === "value" && c(n) && o(e);
    }
    function ce(e, t, a) {
      e === "focusin" ? (j(), O(t, a)) : e === "focusout" && j();
    }
    function de(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function se(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Pe(e, t) {
      if (e === "click")
        return c(t);
    }
    function Ge(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Xe(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || lt(e, "number", e.value);
    }
    function jn(e, t, a, i, l, s, d) {
      var y = a ? Uf(a) : window, g, x;
      if (r(y) ? g = h : Zs(y) ? C ? g = Ge : (g = de, x = ce) : se(y) && (g = Pe), g) {
        var k = g(t, a);
        if (k) {
          zh(e, k, i, l);
          return;
        }
      }
      x && x(t, y, a), t === "focusout" && Xe(y);
    }
    function V() {
      Xt("onMouseEnter", ["mouseout", "mouseover"]), Xt("onMouseLeave", ["mouseout", "mouseover"]), Xt("onPointerEnter", ["pointerout", "pointerover"]), Xt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function U(e, t, a, i, l, s, d) {
      var y = t === "mouseover" || t === "pointerover", g = t === "mouseout" || t === "pointerout";
      if (y && !ms(i)) {
        var x = i.relatedTarget || i.fromElement;
        if (x && (rc(x) || Op(x)))
          return;
      }
      if (!(!g && !y)) {
        var k;
        if (l.window === l)
          k = l;
        else {
          var z = l.ownerDocument;
          z ? k = z.defaultView || z.parentWindow : k = window;
        }
        var A, W;
        if (g) {
          var K = i.relatedTarget || i.toElement;
          if (A = a, W = K ? rc(K) : null, W !== null) {
            var te = Sa(W);
            (W !== te || W.tag !== B && W.tag !== ie) && (W = null);
          }
        } else
          A = null, W = a;
        if (A !== W) {
          var Ae = lp, ut = "onMouseLeave", Ze = "onMouseEnter", zt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Ae = Oh, ut = "onPointerLeave", Ze = "onPointerEnter", zt = "pointer");
          var Mt = A == null ? k : Uf(A), H = W == null ? k : Uf(W), ne = new Ae(ut, zt + "leave", A, i, l);
          ne.target = Mt, ne.relatedTarget = H;
          var $ = null, pe = rc(l);
          if (pe === a) {
            var Ve = new Ae(Ze, zt + "enter", W, i, l);
            Ve.target = H, Ve.relatedTarget = Mt, $ = Ve;
          }
          hx(e, ne, $, A, W);
        }
      }
    }
    function q(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var fe = typeof Object.is == "function" ? Object.is : q;
    function Qe(e, t) {
      if (fe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!Nr.call(t, s) || !fe(e[s], t[s]))
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
    function mt(e, t) {
      for (var a = st(e), i = 0, l = 0; a; ) {
        if (a.nodeType === eo) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return {
              node: a,
              offset: t - i
            };
          i = l;
        }
        a = st(ft(a));
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
      return Bt(e, l, s, d, y);
    }
    function Bt(e, t, a, i, l) {
      var s = 0, d = -1, y = -1, g = 0, x = 0, k = e, z = null;
      e: for (; ; ) {
        for (var A = null; k === t && (a === 0 || k.nodeType === eo) && (d = s + a), k === i && (l === 0 || k.nodeType === eo) && (y = s + l), k.nodeType === eo && (s += k.nodeValue.length), (A = k.firstChild) !== null; )
          z = k, k = A;
        for (; ; ) {
          if (k === e)
            break e;
          if (z === t && ++g === a && (d = s), z === i && ++x === l && (y = s), (A = k.nextSibling) !== null)
            break;
          k = z, z = k.parentNode;
        }
        k = A;
      }
      return d === -1 || y === -1 ? null : {
        start: d,
        end: y
      };
    }
    function Zo(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), s = e.textContent.length, d = Math.min(t.start, s), y = t.end === void 0 ? d : Math.min(t.end, s);
        if (!l.extend && d > y) {
          var g = y;
          y = d, d = g;
        }
        var x = mt(e, d), k = mt(e, y);
        if (x && k) {
          if (l.rangeCount === 1 && l.anchorNode === x.node && l.anchorOffset === x.offset && l.focusNode === k.node && l.focusOffset === k.offset)
            return;
          var z = a.createRange();
          z.setStart(x.node, x.offset), l.removeAllRanges(), d > y ? (l.addRange(z), l.extend(k.node, k.offset)) : (z.setEnd(k.node, k.offset), l.addRange(z));
        }
      }
    }
    function Ph(e) {
      return e && e.nodeType === eo;
    }
    function p_(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Ph(e) ? !1 : Ph(t) ? p_(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
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
      for (var e = window, t = ja(); t instanceof e.HTMLIFrameElement; ) {
        if (JE(t))
          e = t.contentWindow;
        else
          return t;
        t = ja(e.document);
      }
      return t;
    }
    function ag(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function ZE() {
      var e = v_();
      return {
        focusedElem: e,
        selectionRange: ag(e) ? tx(e) : null
      };
    }
    function ex(e) {
      var t = v_(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && XE(a)) {
        i !== null && ag(a) && nx(a, i);
        for (var l = [], s = a; s = s.parentNode; )
          s.nodeType === ea && l.push({
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
    function tx(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = or(e), t || {
        start: 0,
        end: 0
      };
    }
    function nx(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Zo(e, t);
    }
    var rx = Un && "documentMode" in document && document.documentMode <= 11;
    function ax() {
      ht("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Nf = null, ig = null, yp = null, og = !1;
    function ix(e) {
      if ("selectionStart" in e && ag(e))
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
    function ox(e) {
      return e.window === e ? e.document : e.nodeType === to ? e : e.ownerDocument;
    }
    function h_(e, t, a) {
      var i = ox(a);
      if (!(og || Nf == null || Nf !== ja(i))) {
        var l = ix(Nf);
        if (!yp || !Qe(yp, l)) {
          yp = l;
          var s = Hh(ig, "onSelect");
          if (s.length > 0) {
            var d = new Fi("onSelect", "select", null, t, a);
            e.push({
              event: d,
              listeners: s
            }), d.target = Nf;
          }
        }
      }
    }
    function lx(e, t, a, i, l, s, d) {
      var y = a ? Uf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (Zs(y) || y.contentEditable === "true") && (Nf = y, ig = a, yp = null);
          break;
        case "focusout":
          Nf = null, ig = null, yp = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          og = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          og = !1, h_(e, i, l);
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
          if (rx)
            break;
        // falls through
        case "keydown":
        case "keyup":
          h_(e, i, l);
      }
    }
    function Fh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Mf = {
      animationend: Fh("Animation", "AnimationEnd"),
      animationiteration: Fh("Animation", "AnimationIteration"),
      animationstart: Fh("Animation", "AnimationStart"),
      transitionend: Fh("Transition", "TransitionEnd")
    }, lg = {}, m_ = {};
    Un && (m_ = document.createElement("div").style, "AnimationEvent" in window || (delete Mf.animationend.animation, delete Mf.animationiteration.animation, delete Mf.animationstart.animation), "TransitionEvent" in window || delete Mf.transitionend.transition);
    function Ih(e) {
      if (lg[e])
        return lg[e];
      if (!Mf[e])
        return e;
      var t = Mf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in m_)
          return lg[e] = t[a];
      return e;
    }
    var y_ = Ih("animationend"), g_ = Ih("animationiteration"), __ = Ih("animationstart"), S_ = Ih("transitionend"), C_ = /* @__PURE__ */ new Map(), E_ = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Iu(e, t) {
      C_.set(e, t), ht(t, [e]);
    }
    function ux() {
      for (var e = 0; e < E_.length; e++) {
        var t = E_[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Iu(a, "on" + i);
      }
      Iu(y_, "onAnimationEnd"), Iu(g_, "onAnimationIteration"), Iu(__, "onAnimationStart"), Iu("dblclick", "onDoubleClick"), Iu("focusin", "onFocus"), Iu("focusout", "onBlur"), Iu(S_, "onTransitionEnd");
    }
    function sx(e, t, a, i, l, s, d) {
      var y = C_.get(t);
      if (y !== void 0) {
        var g = Fi, x = t;
        switch (t) {
          case "keypress":
            if (Qo(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            g = Dh;
            break;
          case "focusin":
            x = "focus", g = co;
            break;
          case "focusout":
            x = "blur", g = co;
            break;
          case "beforeblur":
          case "afterblur":
            g = co;
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
            g = lp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = $l;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Mh;
            break;
          case y_:
          case g_:
          case __:
            g = bh;
            break;
          case S_:
            g = Ba;
            break;
          case "scroll":
            g = ca;
            break;
          case "wheel":
            g = eg;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = xf;
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
        var k = (s & Aa) !== 0;
        {
          var z = !k && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", A = px(a, y, i.type, k, z);
          if (A.length > 0) {
            var W = new g(y, x, null, i, l);
            e.push({
              event: W,
              listeners: A
            });
          }
        }
      }
    }
    ux(), V(), ec(), ax(), tg();
    function cx(e, t, a, i, l, s, d) {
      sx(e, t, a, i, l, s);
      var y = (s & Od) === 0;
      y && (U(e, t, a, i, l), jn(e, t, a, i, l), lx(e, t, a, i, l), Uh(e, t, a, i, l));
    }
    var gp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], ug = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(gp));
    function x_(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Di(i, t, void 0, e), e.currentTarget = null;
    }
    function fx(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], d = s.instance, y = s.currentTarget, g = s.listener;
          if (d !== i && e.isPropagationStopped())
            return;
          x_(e, g, y), i = d;
        }
      else
        for (var x = 0; x < t.length; x++) {
          var k = t[x], z = k.instance, A = k.currentTarget, W = k.listener;
          if (z !== i && e.isPropagationStopped())
            return;
          x_(e, W, A), i = z;
        }
    }
    function b_(e, t) {
      for (var a = (t & Aa) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, d = l.listeners;
        fx(s, d, a);
      }
      _s();
    }
    function dx(e, t, a, i, l) {
      var s = Nd(a), d = [];
      cx(d, e, i, a, s, t), b_(d, t);
    }
    function bn(e, t) {
      ug.has(e) || m('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = Hb(t), l = mx(e);
      i.has(l) || (w_(t, e, Oc, a), i.add(l));
    }
    function sg(e, t, a) {
      ug.has(e) && !t && m('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Aa), w_(a, e, i, t);
    }
    var Vh = "_reactListening" + Math.random().toString(36).slice(2);
    function _p(e) {
      if (!e[Vh]) {
        e[Vh] = !0, ot.forEach(function(a) {
          a !== "selectionchange" && (ug.has(a) || sg(a, !1, e), sg(a, !0, e));
        });
        var t = e.nodeType === to ? e : e.ownerDocument;
        t !== null && (t[Vh] || (t[Vh] = !0, sg("selectionchange", !1, t)));
      }
    }
    function w_(e, t, a, i, l) {
      var s = hr(e, t, a), d = void 0;
      gs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (d = !0), e = e, i ? d !== void 0 ? op(e, t, s, d) : sa(e, t, s) : d !== void 0 ? Uu(e, t, s, d) : Gs(e, t, s);
    }
    function R_(e, t) {
      return e === t || e.nodeType === Pn && e.parentNode === t;
    }
    function cg(e, t, a, i, l) {
      var s = i;
      if ((t & Dd) === 0 && (t & Oc) === 0) {
        var d = l;
        if (i !== null) {
          var y = i;
          e: for (; ; ) {
            if (y === null)
              return;
            var g = y.tag;
            if (g === F || g === I) {
              var x = y.stateNode.containerInfo;
              if (R_(x, d))
                break;
              if (g === I)
                for (var k = y.return; k !== null; ) {
                  var z = k.tag;
                  if (z === F || z === I) {
                    var A = k.stateNode.containerInfo;
                    if (R_(A, d))
                      return;
                  }
                  k = k.return;
                }
              for (; x !== null; ) {
                var W = rc(x);
                if (W === null)
                  return;
                var K = W.tag;
                if (K === B || K === ie) {
                  y = s = W;
                  continue e;
                }
                x = x.parentNode;
              }
            }
            y = y.return;
          }
        }
      }
      Qv(function() {
        return dx(e, t, a, s);
      });
    }
    function Sp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function px(e, t, a, i, l, s) {
      for (var d = t !== null ? t + "Capture" : null, y = i ? d : t, g = [], x = e, k = null; x !== null; ) {
        var z = x, A = z.stateNode, W = z.tag;
        if (W === B && A !== null && (k = A, y !== null)) {
          var K = Uo(x, y);
          K != null && g.push(Sp(x, K, k));
        }
        if (l)
          break;
        x = x.return;
      }
      return g;
    }
    function Hh(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, d = s.stateNode, y = s.tag;
        if (y === B && d !== null) {
          var g = d, x = Uo(l, a);
          x != null && i.unshift(Sp(l, x, g));
          var k = Uo(l, t);
          k != null && i.push(Sp(l, k, g));
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
      while (e && e.tag !== B);
      return e || null;
    }
    function vx(e, t) {
      for (var a = e, i = t, l = 0, s = a; s; s = Lf(s))
        l++;
      for (var d = 0, y = i; y; y = Lf(y))
        d++;
      for (; l - d > 0; )
        a = Lf(a), l--;
      for (; d - l > 0; )
        i = Lf(i), d--;
      for (var g = l; g--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Lf(a), i = Lf(i);
      }
      return null;
    }
    function k_(e, t, a, i, l) {
      for (var s = t._reactName, d = [], y = a; y !== null && y !== i; ) {
        var g = y, x = g.alternate, k = g.stateNode, z = g.tag;
        if (x !== null && x === i)
          break;
        if (z === B && k !== null) {
          var A = k;
          if (l) {
            var W = Uo(y, s);
            W != null && d.unshift(Sp(y, W, A));
          } else if (!l) {
            var K = Uo(y, s);
            K != null && d.push(Sp(y, K, A));
          }
        }
        y = y.return;
      }
      d.length !== 0 && e.push({
        event: t,
        listeners: d
      });
    }
    function hx(e, t, a, i, l) {
      var s = i && l ? vx(i, l) : null;
      i !== null && k_(e, t, i, s, !1), l !== null && a !== null && k_(e, a, l, s, !0);
    }
    function mx(e, t) {
      return e + "__bubble";
    }
    var qa = !1, Cp = "dangerouslySetInnerHTML", $h = "suppressContentEditableWarning", Vu = "suppressHydrationWarning", T_ = "autoFocus", tc = "children", nc = "style", Bh = "__html", fg, qh, Ep, D_, Wh, O_, N_;
    fg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, qh = function(e, t) {
      Rd(e, t), Tc(e, t), Wv(e, t, {
        registrationNameDependencies: Ue,
        possibleRegistrationNames: dt
      });
    }, O_ = Un && !document.documentMode, Ep = function(e, t, a) {
      if (!qa) {
        var i = Yh(a), l = Yh(t);
        l !== i && (qa = !0, m("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, D_ = function(e) {
      if (!qa) {
        qa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), m("Extra attributes from the server: %s", t);
      }
    }, Wh = function(e, t) {
      t === !1 ? m("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : m("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, N_ = function(e, t) {
      var a = e.namespaceURI === Zi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var yx = /\r\n?/g, gx = /\u0000|\uFFFD/g;
    function Yh(e) {
      tr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(yx, `
`).replace(gx, "");
    }
    function Gh(e, t, a, i) {
      var l = Yh(t), s = Yh(e);
      if (s !== l && (i && (qa || (qa = !0, m('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && xe))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function M_(e) {
      return e.nodeType === to ? e : e.ownerDocument;
    }
    function _x() {
    }
    function Qh(e) {
      e.onclick = _x;
    }
    function Sx(e, t, a, i, l) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var d = i[s];
          if (s === nc)
            d && Object.freeze(d), Iv(t, d);
          else if (s === Cp) {
            var y = d ? d[Bh] : void 0;
            y != null && Tv(t, y);
          } else if (s === tc)
            if (typeof d == "string") {
              var g = e !== "textarea" || d !== "";
              g && gu(t, d);
            } else typeof d == "number" && gu(t, "" + d);
          else s === $h || s === Vu || s === T_ || (Ue.hasOwnProperty(s) ? d != null && (typeof d != "function" && Wh(s, d), s === "onScroll" && bn("scroll", t)) : d != null && Mr(t, s, d, l));
        }
    }
    function Cx(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], d = t[l + 1];
        s === nc ? Iv(e, d) : s === Cp ? Tv(e, d) : s === tc ? gu(e, d) : Mr(e, s, d, i);
      }
    }
    function Ex(e, t, a, i) {
      var l, s = M_(a), d, y = i;
      if (y === Zi && (y = _d(e)), y === Zi) {
        if (l = jo(e, t), !l && e !== e.toLowerCase() && m("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var g = s.createElement("div");
          g.innerHTML = "<script><\/script>";
          var x = g.firstChild;
          d = g.removeChild(x);
        } else if (typeof t.is == "string")
          d = s.createElement(e, {
            is: t.is
          });
        else if (d = s.createElement(e), e === "select") {
          var k = d;
          t.multiple ? k.multiple = !0 : t.size && (k.size = t.size);
        }
      } else
        d = s.createElementNS(y, e);
      return y === Zi && !l && Object.prototype.toString.call(d) === "[object HTMLUnknownElement]" && !Nr.call(fg, e) && (fg[e] = !0, m("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), d;
    }
    function xx(e, t) {
      return M_(t).createTextNode(e);
    }
    function bx(e, t, a, i) {
      var l = jo(t, a);
      qh(t, a);
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
          for (var d = 0; d < gp.length; d++)
            bn(gp[d], e);
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
          ui(e, a), s = yu(e, a), bn("invalid", e);
          break;
        case "option":
          Ft(e, a), s = a;
          break;
        case "select":
          _l(e, a), s = ss(e, a), bn("invalid", e);
          break;
        case "textarea":
          md(e, a), s = hd(e, a), bn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Rc(t, s), Sx(t, e, i, s, l), t) {
        case "input":
          li(e), Y(e, a, !1);
          break;
        case "textarea":
          li(e), Rv(e);
          break;
        case "option":
          fn(e, a);
          break;
        case "select":
          pd(e, a);
          break;
        default:
          typeof s.onClick == "function" && Qh(e);
          break;
      }
    }
    function wx(e, t, a, i, l) {
      qh(t, i);
      var s = null, d, y;
      switch (t) {
        case "input":
          d = yu(e, a), y = yu(e, i), s = [];
          break;
        case "select":
          d = ss(e, a), y = ss(e, i), s = [];
          break;
        case "textarea":
          d = hd(e, a), y = hd(e, i), s = [];
          break;
        default:
          d = a, y = i, typeof d.onClick != "function" && typeof y.onClick == "function" && Qh(e);
          break;
      }
      Rc(t, y);
      var g, x, k = null;
      for (g in d)
        if (!(y.hasOwnProperty(g) || !d.hasOwnProperty(g) || d[g] == null))
          if (g === nc) {
            var z = d[g];
            for (x in z)
              z.hasOwnProperty(x) && (k || (k = {}), k[x] = "");
          } else g === Cp || g === tc || g === $h || g === Vu || g === T_ || (Ue.hasOwnProperty(g) ? s || (s = []) : (s = s || []).push(g, null));
      for (g in y) {
        var A = y[g], W = d?.[g];
        if (!(!y.hasOwnProperty(g) || A === W || A == null && W == null))
          if (g === nc)
            if (A && Object.freeze(A), W) {
              for (x in W)
                W.hasOwnProperty(x) && (!A || !A.hasOwnProperty(x)) && (k || (k = {}), k[x] = "");
              for (x in A)
                A.hasOwnProperty(x) && W[x] !== A[x] && (k || (k = {}), k[x] = A[x]);
            } else
              k || (s || (s = []), s.push(g, k)), k = A;
          else if (g === Cp) {
            var K = A ? A[Bh] : void 0, te = W ? W[Bh] : void 0;
            K != null && te !== K && (s = s || []).push(g, K);
          } else g === tc ? (typeof A == "string" || typeof A == "number") && (s = s || []).push(g, "" + A) : g === $h || g === Vu || (Ue.hasOwnProperty(g) ? (A != null && (typeof A != "function" && Wh(g, A), g === "onScroll" && bn("scroll", e)), !s && W !== A && (s = [])) : (s = s || []).push(g, A));
      }
      return k && (Py(k, y[nc]), (s = s || []).push(nc, k)), s;
    }
    function Rx(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && _(e, l);
      var s = jo(a, i), d = jo(a, l);
      switch (Cx(e, t, s, d), a) {
        case "input":
          N(e, l);
          break;
        case "textarea":
          wv(e, l);
          break;
        case "select":
          xc(e, l);
          break;
      }
    }
    function kx(e) {
      {
        var t = e.toLowerCase();
        return vs.hasOwnProperty(t) && vs[t] || null;
      }
    }
    function Tx(e, t, a, i, l, s, d) {
      var y, g;
      switch (y = jo(t, a), qh(t, a), t) {
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
          for (var x = 0; x < gp.length; x++)
            bn(gp[x], e);
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
          ui(e, a), bn("invalid", e);
          break;
        case "option":
          Ft(e, a);
          break;
        case "select":
          _l(e, a), bn("invalid", e);
          break;
        case "textarea":
          md(e, a), bn("invalid", e);
          break;
      }
      Rc(t, a);
      {
        g = /* @__PURE__ */ new Set();
        for (var k = e.attributes, z = 0; z < k.length; z++) {
          var A = k[z].name.toLowerCase();
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
              g.add(k[z].name);
          }
        }
      }
      var W = null;
      for (var K in a)
        if (a.hasOwnProperty(K)) {
          var te = a[K];
          if (K === tc)
            typeof te == "string" ? e.textContent !== te && (a[Vu] !== !0 && Gh(e.textContent, te, s, d), W = [tc, te]) : typeof te == "number" && e.textContent !== "" + te && (a[Vu] !== !0 && Gh(e.textContent, te, s, d), W = [tc, "" + te]);
          else if (Ue.hasOwnProperty(K))
            te != null && (typeof te != "function" && Wh(K, te), K === "onScroll" && bn("scroll", e));
          else if (d && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof y == "boolean") {
            var Ae = void 0, ut = sn(K);
            if (a[Vu] !== !0) {
              if (!(K === $h || K === Vu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              K === "value" || K === "checked" || K === "selected")) {
                if (K === Cp) {
                  var Ze = e.innerHTML, zt = te ? te[Bh] : void 0;
                  if (zt != null) {
                    var Mt = N_(e, zt);
                    Mt !== Ze && Ep(K, Ze, Mt);
                  }
                } else if (K === nc) {
                  if (g.delete(K), O_) {
                    var H = Uy(te);
                    Ae = e.getAttribute("style"), H !== Ae && Ep(K, Ae, H);
                  }
                } else if (y && !P)
                  g.delete(K.toLowerCase()), Ae = dl(e, K, te), te !== Ae && Ep(K, Ae, te);
                else if (!_n(K, ut, y) && !nr(K, te, ut, y)) {
                  var ne = !1;
                  if (ut !== null)
                    g.delete(ut.attributeName), Ae = wo(e, K, te, ut);
                  else {
                    var $ = i;
                    if ($ === Zi && ($ = _d(t)), $ === Zi)
                      g.delete(K.toLowerCase());
                    else {
                      var pe = kx(K);
                      pe !== null && pe !== K && (ne = !0, g.delete(pe)), g.delete(K);
                    }
                    Ae = dl(e, K, te);
                  }
                  var Ve = P;
                  !Ve && te !== Ae && !ne && Ep(K, Ae, te);
                }
              }
            }
          }
        }
      switch (d && // $FlowFixMe - Should be inferred as not undefined.
      g.size > 0 && a[Vu] !== !0 && D_(g), t) {
        case "input":
          li(e), Y(e, a, !0);
          break;
        case "textarea":
          li(e), Rv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Qh(e);
          break;
      }
      return W;
    }
    function Dx(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function dg(e, t) {
      {
        if (qa)
          return;
        qa = !0, m("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function pg(e, t) {
      {
        if (qa)
          return;
        qa = !0, m('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function vg(e, t, a) {
      {
        if (qa)
          return;
        qa = !0, m("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function hg(e, t) {
      {
        if (t === "" || qa)
          return;
        qa = !0, m('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function Ox(e, t, a) {
      switch (t) {
        case "input":
          J(e, a);
          return;
        case "textarea":
          My(e, a);
          return;
        case "select":
          vd(e, a);
          return;
      }
    }
    var xp = function() {
    }, bp = function() {
    };
    {
      var Nx = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], L_ = [
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
      ], Mx = L_.concat(["button"]), Lx = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], j_ = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      bp = function(e, t) {
        var a = wt({}, e || j_), i = {
          tag: t
        };
        return L_.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Mx.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Nx.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var jx = function(e, t) {
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
            return Lx.indexOf(t) === -1;
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
      }, Ax = function(e, t) {
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
      xp = function(e, t, a) {
        a = a || j_;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && m("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = jx(e, l) ? null : i, d = s ? null : Ax(e, a), y = s || d;
        if (y) {
          var g = y.tag, x = !!s + "|" + e + "|" + g;
          if (!A_[x]) {
            A_[x] = !0;
            var k = e, z = "";
            if (e === "#text" ? /\S/.test(t) ? k = "Text nodes" : (k = "Whitespace text nodes", z = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : k = "<" + e + ">", s) {
              var A = "";
              g === "table" && e === "tr" && (A += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), m("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", k, g, z, A);
            } else
              m("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", k, g);
          }
        }
      };
    }
    var Kh = "suppressHydrationWarning", Xh = "$", Jh = "/$", wp = "$?", Rp = "$!", Ux = "style", mg = null, yg = null;
    function zx(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case to:
        case Cd: {
          t = i === to ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : Sd(null, "");
          break;
        }
        default: {
          var s = i === Pn ? e.parentNode : e, d = s.namespaceURI || null;
          t = s.tagName, a = Sd(d, t);
          break;
        }
      }
      {
        var y = t.toLowerCase(), g = bp(null, y);
        return {
          namespace: a,
          ancestorInfo: g
        };
      }
    }
    function Px(e, t, a) {
      {
        var i = e, l = Sd(i.namespace, t), s = bp(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function HL(e) {
      return e;
    }
    function Fx(e) {
      mg = Bn(), yg = ZE();
      var t = null;
      return Zn(!1), t;
    }
    function Ix(e) {
      ex(yg), Zn(mg), mg = null, yg = null;
    }
    function Vx(e, t, a, i, l) {
      var s;
      {
        var d = i;
        if (xp(e, null, d.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var y = "" + t.children, g = bp(d.ancestorInfo, e);
          xp(null, y, g);
        }
        s = d.namespace;
      }
      var x = Ex(e, t, a, s);
      return Dp(l, x), wg(x, t), x;
    }
    function Hx(e, t) {
      e.appendChild(t);
    }
    function $x(e, t, a, i, l) {
      switch (bx(e, t, a, i), t) {
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
    function Bx(e, t, a, i, l, s) {
      {
        var d = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var y = "" + i.children, g = bp(d.ancestorInfo, t);
          xp(null, y, g);
        }
      }
      return wx(e, t, a, i);
    }
    function gg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function qx(e, t, a, i) {
      {
        var l = a;
        xp(null, e, l.ancestorInfo);
      }
      var s = xx(e, t);
      return Dp(i, s), s;
    }
    function Wx() {
      var e = window.event;
      return e === void 0 ? Va : Sf(e.type);
    }
    var _g = typeof setTimeout == "function" ? setTimeout : void 0, Yx = typeof clearTimeout == "function" ? clearTimeout : void 0, Sg = -1, U_ = typeof Promise == "function" ? Promise : void 0, Gx = typeof queueMicrotask == "function" ? queueMicrotask : typeof U_ < "u" ? function(e) {
      return U_.resolve(null).then(e).catch(Qx);
    } : _g;
    function Qx(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Kx(e, t, a, i) {
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
    function Xx(e, t, a, i, l, s) {
      Rx(e, t, a, i, l), wg(e, l);
    }
    function z_(e) {
      gu(e, "");
    }
    function Jx(e, t, a) {
      e.nodeValue = a;
    }
    function Zx(e, t) {
      e.appendChild(t);
    }
    function eb(e, t) {
      var a;
      e.nodeType === Pn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Qh(a);
    }
    function tb(e, t, a) {
      e.insertBefore(t, a);
    }
    function nb(e, t, a) {
      e.nodeType === Pn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function rb(e, t) {
      e.removeChild(t);
    }
    function ab(e, t) {
      e.nodeType === Pn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Cg(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === Pn) {
          var s = l.data;
          if (s === Jh)
            if (i === 0) {
              e.removeChild(l), Il(t);
              return;
            } else
              i--;
          else (s === Xh || s === wp || s === Rp) && i++;
        }
        a = l;
      } while (a);
      Il(t);
    }
    function ib(e, t) {
      e.nodeType === Pn ? Cg(e.parentNode, t) : e.nodeType === ea && Cg(e, t), Il(e);
    }
    function ob(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function lb(e) {
      e.nodeValue = "";
    }
    function ub(e, t) {
      e = e;
      var a = t[Ux], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = wc("display", i);
    }
    function sb(e, t) {
      e.nodeValue = t;
    }
    function cb(e) {
      e.nodeType === ea ? e.textContent = "" : e.nodeType === to && e.documentElement && e.removeChild(e.documentElement);
    }
    function fb(e, t, a) {
      return e.nodeType !== ea || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function db(e, t) {
      return t === "" || e.nodeType !== eo ? null : e;
    }
    function pb(e) {
      return e.nodeType !== Pn ? null : e;
    }
    function P_(e) {
      return e.data === wp;
    }
    function Eg(e) {
      return e.data === Rp;
    }
    function vb(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function hb(e, t) {
      e._reactRetry = t;
    }
    function Zh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ea || t === eo)
          break;
        if (t === Pn) {
          var a = e.data;
          if (a === Xh || a === Rp || a === wp)
            break;
          if (a === Jh)
            return null;
        }
      }
      return e;
    }
    function kp(e) {
      return Zh(e.nextSibling);
    }
    function mb(e) {
      return Zh(e.firstChild);
    }
    function yb(e) {
      return Zh(e.firstChild);
    }
    function gb(e) {
      return Zh(e.nextSibling);
    }
    function _b(e, t, a, i, l, s, d) {
      Dp(s, e), wg(e, a);
      var y;
      {
        var g = l;
        y = g.namespace;
      }
      var x = (s.mode & Dt) !== rt;
      return Tx(e, t, a, y, i, x, d);
    }
    function Sb(e, t, a, i) {
      return Dp(a, e), a.mode & Dt, Dx(e, t);
    }
    function Cb(e, t) {
      Dp(t, e);
    }
    function Eb(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Pn) {
          var i = t.data;
          if (i === Jh) {
            if (a === 0)
              return kp(t);
            a--;
          } else (i === Xh || i === Rp || i === wp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function F_(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Pn) {
          var i = t.data;
          if (i === Xh || i === Rp || i === wp) {
            if (a === 0)
              return t;
            a--;
          } else i === Jh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function xb(e) {
      Il(e);
    }
    function bb(e) {
      Il(e);
    }
    function wb(e) {
      return e !== "head" && e !== "body";
    }
    function Rb(e, t, a, i) {
      var l = !0;
      Gh(t.nodeValue, a, i, l);
    }
    function kb(e, t, a, i, l, s) {
      if (t[Kh] !== !0) {
        var d = !0;
        Gh(i.nodeValue, l, s, d);
      }
    }
    function Tb(e, t) {
      t.nodeType === ea ? dg(e, t) : t.nodeType === Pn || pg(e, t);
    }
    function Db(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === ea ? dg(a, t) : t.nodeType === Pn || pg(a, t));
      }
    }
    function Ob(e, t, a, i, l) {
      (l || t[Kh] !== !0) && (i.nodeType === ea ? dg(a, i) : i.nodeType === Pn || pg(a, i));
    }
    function Nb(e, t, a) {
      vg(e, t);
    }
    function Mb(e, t) {
      hg(e, t);
    }
    function Lb(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && vg(i, t);
      }
    }
    function jb(e, t) {
      {
        var a = e.parentNode;
        a !== null && hg(a, t);
      }
    }
    function Ab(e, t, a, i, l, s) {
      (s || t[Kh] !== !0) && vg(a, i);
    }
    function Ub(e, t, a, i, l) {
      (l || t[Kh] !== !0) && hg(a, i);
    }
    function zb(e) {
      m("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Pb(e) {
      _p(e);
    }
    var jf = Math.random().toString(36).slice(2), Af = "__reactFiber$" + jf, xg = "__reactProps$" + jf, Tp = "__reactContainer$" + jf, bg = "__reactEvents$" + jf, Fb = "__reactListeners$" + jf, Ib = "__reactHandles$" + jf;
    function Vb(e) {
      delete e[Af], delete e[xg], delete e[bg], delete e[Fb], delete e[Ib];
    }
    function Dp(e, t) {
      t[Af] = e;
    }
    function em(e, t) {
      t[Tp] = e;
    }
    function I_(e) {
      e[Tp] = null;
    }
    function Op(e) {
      return !!e[Tp];
    }
    function rc(e) {
      var t = e[Af];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Tp] || a[Af], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = F_(e); l !== null; ) {
              var s = l[Af];
              if (s)
                return s;
              l = F_(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Hu(e) {
      var t = e[Af] || e[Tp];
      return t && (t.tag === B || t.tag === ie || t.tag === he || t.tag === F) ? t : null;
    }
    function Uf(e) {
      if (e.tag === B || e.tag === ie)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function tm(e) {
      return e[xg] || null;
    }
    function wg(e, t) {
      e[xg] = t;
    }
    function Hb(e) {
      var t = e[bg];
      return t === void 0 && (t = e[bg] = /* @__PURE__ */ new Set()), t;
    }
    var V_ = {}, H_ = v.ReactDebugCurrentFrame;
    function nm(e) {
      if (e) {
        var t = e._owner, a = Ki(e.type, e._source, t ? t.type : null);
        H_.setExtraStackFrame(a);
      } else
        H_.setExtraStackFrame(null);
    }
    function po(e, t, a, i, l) {
      {
        var s = Function.call.bind(Nr);
        for (var d in e)
          if (s(e, d)) {
            var y = void 0;
            try {
              if (typeof e[d] != "function") {
                var g = Error((i || "React class") + ": " + a + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              y = e[d](t, d, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              y = x;
            }
            y && !(y instanceof Error) && (nm(l), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, d, typeof y), nm(null)), y instanceof Error && !(y.message in V_) && (V_[y.message] = !0, nm(l), m("Failed %s type: %s", a, y.message), nm(null));
          }
      }
    }
    var Rg = [], rm;
    rm = [];
    var Wl = -1;
    function $u(e) {
      return {
        current: e
      };
    }
    function fa(e, t) {
      if (Wl < 0) {
        m("Unexpected pop.");
        return;
      }
      t !== rm[Wl] && m("Unexpected Fiber popped."), e.current = Rg[Wl], Rg[Wl] = null, rm[Wl] = null, Wl--;
    }
    function da(e, t, a) {
      Wl++, Rg[Wl] = e.current, rm[Wl] = a, e.current = t;
    }
    var kg;
    kg = {};
    var hi = {};
    Object.freeze(hi);
    var Yl = $u(hi), el = $u(!1), Tg = hi;
    function zf(e, t, a) {
      return a && tl(t) ? Tg : Yl.current;
    }
    function $_(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Pf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return hi;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var d in i)
          s[d] = t[d];
        {
          var y = yt(e) || "Unknown";
          po(i, s, "context", y);
        }
        return l && $_(e, t, s), s;
      }
    }
    function am() {
      return el.current;
    }
    function tl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function im(e) {
      fa(el, e), fa(Yl, e);
    }
    function Dg(e) {
      fa(el, e), fa(Yl, e);
    }
    function B_(e, t, a) {
      {
        if (Yl.current !== hi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        da(Yl, t, e), da(el, a, e);
      }
    }
    function q_(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = yt(e) || "Unknown";
            kg[s] || (kg[s] = !0, m("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var d = i.getChildContext();
        for (var y in d)
          if (!(y in l))
            throw new Error((yt(e) || "Unknown") + '.getChildContext(): key "' + y + '" is not defined in childContextTypes.');
        {
          var g = yt(e) || "Unknown";
          po(l, d, "child context", g);
        }
        return wt({}, a, d);
      }
    }
    function om(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || hi;
        return Tg = Yl.current, da(Yl, a, e), da(el, el.current, e), !0;
      }
    }
    function W_(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = q_(e, t, Tg);
          i.__reactInternalMemoizedMergedChildContext = l, fa(el, e), fa(Yl, e), da(Yl, l, e), da(el, a, e);
        } else
          fa(el, e), da(el, a, e);
      }
    }
    function $b(e) {
      {
        if (!Rl(e) || e.tag !== w)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case F:
              return t.stateNode.context;
            case w: {
              var a = t.type;
              if (tl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Bu = 0, lm = 1, Gl = null, Og = !1, Ng = !1;
    function Y_(e) {
      Gl === null ? Gl = [e] : Gl.push(e);
    }
    function Bb(e) {
      Og = !0, Y_(e);
    }
    function G_() {
      Og && qu();
    }
    function qu() {
      if (!Ng && Gl !== null) {
        Ng = !0;
        var e = 0, t = $a();
        try {
          var a = !0, i = Gl;
          for ($n(zr); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          Gl = null, Og = !1;
        } catch (s) {
          throw Gl !== null && (Gl = Gl.slice(e + 1)), Ld(Es, qu), s;
        } finally {
          $n(t), Ng = !1;
        }
      }
      return null;
    }
    var Ff = [], If = 0, um = null, sm = 0, Ii = [], Vi = 0, ac = null, Ql = 1, Kl = "";
    function qb(e) {
      return oc(), (e.flags & Oi) !== nt;
    }
    function Wb(e) {
      return oc(), sm;
    }
    function Yb() {
      var e = Kl, t = Ql, a = t & ~Gb(t);
      return a.toString(32) + e;
    }
    function ic(e, t) {
      oc(), Ff[If++] = sm, Ff[If++] = um, um = e, sm = t;
    }
    function Q_(e, t, a) {
      oc(), Ii[Vi++] = Ql, Ii[Vi++] = Kl, Ii[Vi++] = ac, ac = e;
      var i = Ql, l = Kl, s = cm(i) - 1, d = i & ~(1 << s), y = a + 1, g = cm(t) + s;
      if (g > 30) {
        var x = s - s % 5, k = (1 << x) - 1, z = (d & k).toString(32), A = d >> x, W = s - x, K = cm(t) + W, te = y << W, Ae = te | A, ut = z + l;
        Ql = 1 << K | Ae, Kl = ut;
      } else {
        var Ze = y << s, zt = Ze | d, Mt = l;
        Ql = 1 << g | zt, Kl = Mt;
      }
    }
    function Mg(e) {
      oc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        ic(e, a), Q_(e, a, i);
      }
    }
    function cm(e) {
      return 32 - Vn(e);
    }
    function Gb(e) {
      return 1 << cm(e) - 1;
    }
    function Lg(e) {
      for (; e === um; )
        um = Ff[--If], Ff[If] = null, sm = Ff[--If], Ff[If] = null;
      for (; e === ac; )
        ac = Ii[--Vi], Ii[Vi] = null, Kl = Ii[--Vi], Ii[Vi] = null, Ql = Ii[--Vi], Ii[Vi] = null;
    }
    function Qb() {
      return oc(), ac !== null ? {
        id: Ql,
        overflow: Kl
      } : null;
    }
    function Kb(e, t) {
      oc(), Ii[Vi++] = Ql, Ii[Vi++] = Kl, Ii[Vi++] = ac, Ql = t.id, Kl = t.overflow, ac = e;
    }
    function oc() {
      Hr() || m("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Vr = null, Hi = null, vo = !1, lc = !1, Wu = null;
    function Xb() {
      vo && m("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function K_() {
      lc = !0;
    }
    function Jb() {
      return lc;
    }
    function Zb(e) {
      var t = e.stateNode.containerInfo;
      return Hi = yb(t), Vr = e, vo = !0, Wu = null, lc = !1, !0;
    }
    function ew(e, t, a) {
      return Hi = gb(t), Vr = e, vo = !0, Wu = null, lc = !1, a !== null && Kb(e, a), !0;
    }
    function X_(e, t) {
      switch (e.tag) {
        case F: {
          Tb(e.stateNode.containerInfo, t);
          break;
        }
        case B: {
          var a = (e.mode & Dt) !== rt;
          Ob(
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
          i.dehydrated !== null && Db(i.dehydrated, t);
          break;
        }
      }
    }
    function J_(e, t) {
      X_(e, t);
      var a = aT();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ua) : i.push(a);
    }
    function jg(e, t) {
      {
        if (lc)
          return;
        switch (e.tag) {
          case F: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case B:
                var i = t.type;
                t.pendingProps, Nb(a, i);
                break;
              case ie:
                var l = t.pendingProps;
                Mb(a, l);
                break;
            }
            break;
          }
          case B: {
            var s = e.type, d = e.memoizedProps, y = e.stateNode;
            switch (t.tag) {
              case B: {
                var g = t.type, x = t.pendingProps, k = (e.mode & Dt) !== rt;
                Ab(
                  s,
                  d,
                  y,
                  g,
                  x,
                  // TODO: Delete this argument when we remove the legacy root API.
                  k
                );
                break;
              }
              case ie: {
                var z = t.pendingProps, A = (e.mode & Dt) !== rt;
                Ub(
                  s,
                  d,
                  y,
                  z,
                  // TODO: Delete this argument when we remove the legacy root API.
                  A
                );
                break;
              }
            }
            break;
          }
          case he: {
            var W = e.memoizedState, K = W.dehydrated;
            if (K !== null) switch (t.tag) {
              case B:
                var te = t.type;
                t.pendingProps, Lb(K, te);
                break;
              case ie:
                var Ae = t.pendingProps;
                jb(K, Ae);
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
      t.flags = t.flags & ~na | Cn, jg(e, t);
    }
    function e2(e, t) {
      switch (e.tag) {
        case B: {
          var a = e.type;
          e.pendingProps;
          var i = fb(t, a);
          return i !== null ? (e.stateNode = i, Vr = e, Hi = mb(i), !0) : !1;
        }
        case ie: {
          var l = e.pendingProps, s = db(t, l);
          return s !== null ? (e.stateNode = s, Vr = e, Hi = null, !0) : !1;
        }
        case he: {
          var d = pb(t);
          if (d !== null) {
            var y = {
              dehydrated: d,
              treeContext: Qb(),
              retryLane: oa
            };
            e.memoizedState = y;
            var g = iT(d);
            return g.return = e, e.child = g, Vr = e, Hi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Ag(e) {
      return (e.mode & Dt) !== rt && (e.flags & et) === nt;
    }
    function Ug(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function zg(e) {
      if (vo) {
        var t = Hi;
        if (!t) {
          Ag(e) && (jg(Vr, e), Ug()), Z_(Vr, e), vo = !1, Vr = e;
          return;
        }
        var a = t;
        if (!e2(e, t)) {
          Ag(e) && (jg(Vr, e), Ug()), t = kp(a);
          var i = Vr;
          if (!t || !e2(e, t)) {
            Z_(Vr, e), vo = !1, Vr = e;
            return;
          }
          J_(i, a);
        }
      }
    }
    function tw(e, t, a) {
      var i = e.stateNode, l = !lc, s = _b(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function nw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Sb(t, a, e);
      if (i) {
        var l = Vr;
        if (l !== null)
          switch (l.tag) {
            case F: {
              var s = l.stateNode.containerInfo, d = (l.mode & Dt) !== rt;
              Rb(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                d
              );
              break;
            }
            case B: {
              var y = l.type, g = l.memoizedProps, x = l.stateNode, k = (l.mode & Dt) !== rt;
              kb(
                y,
                g,
                x,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                k
              );
              break;
            }
          }
      }
      return i;
    }
    function rw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Cb(a, e);
    }
    function aw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Eb(a);
    }
    function t2(e) {
      for (var t = e.return; t !== null && t.tag !== B && t.tag !== F && t.tag !== he; )
        t = t.return;
      Vr = t;
    }
    function fm(e) {
      if (e !== Vr)
        return !1;
      if (!vo)
        return t2(e), vo = !0, !1;
      if (e.tag !== F && (e.tag !== B || wb(e.type) && !gg(e.type, e.memoizedProps))) {
        var t = Hi;
        if (t)
          if (Ag(e))
            n2(e), Ug();
          else
            for (; t; )
              J_(e, t), t = kp(t);
      }
      return t2(e), e.tag === he ? Hi = aw(e) : Hi = Vr ? kp(e.stateNode) : null, !0;
    }
    function iw() {
      return vo && Hi !== null;
    }
    function n2(e) {
      for (var t = Hi; t; )
        X_(e, t), t = kp(t);
    }
    function Vf() {
      Vr = null, Hi = null, vo = !1, lc = !1;
    }
    function r2() {
      Wu !== null && (KS(Wu), Wu = null);
    }
    function Hr() {
      return vo;
    }
    function Pg(e) {
      Wu === null ? Wu = [e] : Wu.push(e);
    }
    var ow = v.ReactCurrentBatchConfig, lw = null;
    function uw() {
      return ow.transition;
    }
    var ho = {
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
      var sw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & rn && (t = a), a = a.return;
        return t;
      }, uc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Np = [], Mp = [], Lp = [], jp = [], Ap = [], Up = [], sc = /* @__PURE__ */ new Set();
      ho.recordUnsafeLifecycleWarnings = function(e, t) {
        sc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Np.push(e), e.mode & rn && typeof t.UNSAFE_componentWillMount == "function" && Mp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Lp.push(e), e.mode & rn && typeof t.UNSAFE_componentWillReceiveProps == "function" && jp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Ap.push(e), e.mode & rn && typeof t.UNSAFE_componentWillUpdate == "function" && Up.push(e));
      }, ho.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Np.length > 0 && (Np.forEach(function(A) {
          e.add(yt(A) || "Component"), sc.add(A.type);
        }), Np = []);
        var t = /* @__PURE__ */ new Set();
        Mp.length > 0 && (Mp.forEach(function(A) {
          t.add(yt(A) || "Component"), sc.add(A.type);
        }), Mp = []);
        var a = /* @__PURE__ */ new Set();
        Lp.length > 0 && (Lp.forEach(function(A) {
          a.add(yt(A) || "Component"), sc.add(A.type);
        }), Lp = []);
        var i = /* @__PURE__ */ new Set();
        jp.length > 0 && (jp.forEach(function(A) {
          i.add(yt(A) || "Component"), sc.add(A.type);
        }), jp = []);
        var l = /* @__PURE__ */ new Set();
        Ap.length > 0 && (Ap.forEach(function(A) {
          l.add(yt(A) || "Component"), sc.add(A.type);
        }), Ap = []);
        var s = /* @__PURE__ */ new Set();
        if (Up.length > 0 && (Up.forEach(function(A) {
          s.add(yt(A) || "Component"), sc.add(A.type);
        }), Up = []), t.size > 0) {
          var d = uc(t);
          m(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, d);
        }
        if (i.size > 0) {
          var y = uc(i);
          m(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, y);
        }
        if (s.size > 0) {
          var g = uc(s);
          m(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, g);
        }
        if (e.size > 0) {
          var x = uc(e);
          E(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
        if (a.size > 0) {
          var k = uc(a);
          E(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, k);
        }
        if (l.size > 0) {
          var z = uc(l);
          E(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, z);
        }
      };
      var dm = /* @__PURE__ */ new Map(), a2 = /* @__PURE__ */ new Set();
      ho.recordLegacyContextWarning = function(e, t) {
        var a = sw(e);
        if (a === null) {
          m("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!a2.has(e.type)) {
          var i = dm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], dm.set(a, i)), i.push(e));
        }
      }, ho.flushLegacyContextWarning = function() {
        dm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(yt(s) || "Component"), a2.add(s.type);
            });
            var l = uc(i);
            try {
              en(a), m(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              hn();
            }
          }
        });
      }, ho.discardPendingWarnings = function() {
        Np = [], Mp = [], Lp = [], jp = [], Ap = [], Up = [], dm = /* @__PURE__ */ new Map();
      };
    }
    var Fg, Ig, Vg, Hg, $g, i2 = function(e, t) {
    };
    Fg = !1, Ig = !1, Vg = {}, Hg = {}, $g = {}, i2 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = yt(t) || "Component";
        Hg[a] || (Hg[a] = !0, m('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function cw(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function zp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & rn || ee) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== w) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !cw(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var l = yt(e) || "Component";
          Vg[l] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, i), Vg[l] = !0);
        }
        if (a._owner) {
          var s = a._owner, d;
          if (s) {
            var y = s;
            if (y.tag !== w)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            d = y.stateNode;
          }
          if (!d)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var g = d;
          gi(i, "ref");
          var x = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === x)
            return t.ref;
          var k = function(z) {
            var A = g.refs;
            z === null ? delete A[x] : A[x] = z;
          };
          return k._stringRef = x, k;
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
    function pm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function vm(e) {
      {
        var t = yt(e) || "Component";
        if ($g[t])
          return;
        $g[t] = !0, m("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function o2(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function l2(e) {
      function t(H, ne) {
        if (e) {
          var $ = H.deletions;
          $ === null ? (H.deletions = [ne], H.flags |= Ua) : $.push(ne);
        }
      }
      function a(H, ne) {
        if (!e)
          return null;
        for (var $ = ne; $ !== null; )
          t(H, $), $ = $.sibling;
        return null;
      }
      function i(H, ne) {
        for (var $ = /* @__PURE__ */ new Map(), pe = ne; pe !== null; )
          pe.key !== null ? $.set(pe.key, pe) : $.set(pe.index, pe), pe = pe.sibling;
        return $;
      }
      function l(H, ne) {
        var $ = gc(H, ne);
        return $.index = 0, $.sibling = null, $;
      }
      function s(H, ne, $) {
        if (H.index = $, !e)
          return H.flags |= Oi, ne;
        var pe = H.alternate;
        if (pe !== null) {
          var Ve = pe.index;
          return Ve < ne ? (H.flags |= Cn, ne) : Ve;
        } else
          return H.flags |= Cn, ne;
      }
      function d(H) {
        return e && H.alternate === null && (H.flags |= Cn), H;
      }
      function y(H, ne, $, pe) {
        if (ne === null || ne.tag !== ie) {
          var Ve = P1($, H.mode, pe);
          return Ve.return = H, Ve;
        } else {
          var ze = l(ne, $);
          return ze.return = H, ze;
        }
      }
      function g(H, ne, $, pe) {
        var Ve = $.type;
        if (Ve === Si)
          return k(H, ne, $.props.children, pe, $.key);
        if (ne !== null && (ne.elementType === Ve || // Keep this check inline so it only runs on the false path:
        dC(ne, $) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ve == "object" && Ve !== null && Ve.$$typeof === _t && o2(Ve) === ne.type)) {
          var ze = l(ne, $.props);
          return ze.ref = zp(H, ne, $), ze.return = H, ze._debugSource = $._source, ze._debugOwner = $._owner, ze;
        }
        var vt = z1($, H.mode, pe);
        return vt.ref = zp(H, ne, $), vt.return = H, vt;
      }
      function x(H, ne, $, pe) {
        if (ne === null || ne.tag !== I || ne.stateNode.containerInfo !== $.containerInfo || ne.stateNode.implementation !== $.implementation) {
          var Ve = F1($, H.mode, pe);
          return Ve.return = H, Ve;
        } else {
          var ze = l(ne, $.children || []);
          return ze.return = H, ze;
        }
      }
      function k(H, ne, $, pe, Ve) {
        if (ne === null || ne.tag !== Z) {
          var ze = rs($, H.mode, pe, Ve);
          return ze.return = H, ze;
        } else {
          var vt = l(ne, $);
          return vt.return = H, vt;
        }
      }
      function z(H, ne, $) {
        if (typeof ne == "string" && ne !== "" || typeof ne == "number") {
          var pe = P1("" + ne, H.mode, $);
          return pe.return = H, pe;
        }
        if (typeof ne == "object" && ne !== null) {
          switch (ne.$$typeof) {
            case Lr: {
              var Ve = z1(ne, H.mode, $);
              return Ve.ref = zp(H, null, ne), Ve.return = H, Ve;
            }
            case sr: {
              var ze = F1(ne, H.mode, $);
              return ze.return = H, ze;
            }
            case _t: {
              var vt = ne._payload, Ct = ne._init;
              return z(H, Ct(vt), $);
            }
          }
          if (kt(ne) || xt(ne)) {
            var on = rs(ne, H.mode, $, null);
            return on.return = H, on;
          }
          pm(H, ne);
        }
        return typeof ne == "function" && vm(H), null;
      }
      function A(H, ne, $, pe) {
        var Ve = ne !== null ? ne.key : null;
        if (typeof $ == "string" && $ !== "" || typeof $ == "number")
          return Ve !== null ? null : y(H, ne, "" + $, pe);
        if (typeof $ == "object" && $ !== null) {
          switch ($.$$typeof) {
            case Lr:
              return $.key === Ve ? g(H, ne, $, pe) : null;
            case sr:
              return $.key === Ve ? x(H, ne, $, pe) : null;
            case _t: {
              var ze = $._payload, vt = $._init;
              return A(H, ne, vt(ze), pe);
            }
          }
          if (kt($) || xt($))
            return Ve !== null ? null : k(H, ne, $, pe, null);
          pm(H, $);
        }
        return typeof $ == "function" && vm(H), null;
      }
      function W(H, ne, $, pe, Ve) {
        if (typeof pe == "string" && pe !== "" || typeof pe == "number") {
          var ze = H.get($) || null;
          return y(ne, ze, "" + pe, Ve);
        }
        if (typeof pe == "object" && pe !== null) {
          switch (pe.$$typeof) {
            case Lr: {
              var vt = H.get(pe.key === null ? $ : pe.key) || null;
              return g(ne, vt, pe, Ve);
            }
            case sr: {
              var Ct = H.get(pe.key === null ? $ : pe.key) || null;
              return x(ne, Ct, pe, Ve);
            }
            case _t:
              var on = pe._payload, qt = pe._init;
              return W(H, ne, $, qt(on), Ve);
          }
          if (kt(pe) || xt(pe)) {
            var er = H.get($) || null;
            return k(ne, er, pe, Ve, null);
          }
          pm(ne, pe);
        }
        return typeof pe == "function" && vm(ne), null;
      }
      function K(H, ne, $) {
        {
          if (typeof H != "object" || H === null)
            return ne;
          switch (H.$$typeof) {
            case Lr:
            case sr:
              i2(H, $);
              var pe = H.key;
              if (typeof pe != "string")
                break;
              if (ne === null) {
                ne = /* @__PURE__ */ new Set(), ne.add(pe);
                break;
              }
              if (!ne.has(pe)) {
                ne.add(pe);
                break;
              }
              m("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", pe);
              break;
            case _t:
              var Ve = H._payload, ze = H._init;
              K(ze(Ve), ne, $);
              break;
          }
        }
        return ne;
      }
      function te(H, ne, $, pe) {
        for (var Ve = null, ze = 0; ze < $.length; ze++) {
          var vt = $[ze];
          Ve = K(vt, Ve, H);
        }
        for (var Ct = null, on = null, qt = ne, er = 0, Wt = 0, Wn = null; qt !== null && Wt < $.length; Wt++) {
          qt.index > Wt ? (Wn = qt, qt = null) : Wn = qt.sibling;
          var va = A(H, qt, $[Wt], pe);
          if (va === null) {
            qt === null && (qt = Wn);
            break;
          }
          e && qt && va.alternate === null && t(H, qt), er = s(va, er, Wt), on === null ? Ct = va : on.sibling = va, on = va, qt = Wn;
        }
        if (Wt === $.length) {
          if (a(H, qt), Hr()) {
            var Qr = Wt;
            ic(H, Qr);
          }
          return Ct;
        }
        if (qt === null) {
          for (; Wt < $.length; Wt++) {
            var yi = z(H, $[Wt], pe);
            yi !== null && (er = s(yi, er, Wt), on === null ? Ct = yi : on.sibling = yi, on = yi);
          }
          if (Hr()) {
            var Da = Wt;
            ic(H, Da);
          }
          return Ct;
        }
        for (var Oa = i(H, qt); Wt < $.length; Wt++) {
          var ha = W(Oa, H, Wt, $[Wt], pe);
          ha !== null && (e && ha.alternate !== null && Oa.delete(ha.key === null ? Wt : ha.key), er = s(ha, er, Wt), on === null ? Ct = ha : on.sibling = ha, on = ha);
        }
        if (e && Oa.forEach(function(od) {
          return t(H, od);
        }), Hr()) {
          var ru = Wt;
          ic(H, ru);
        }
        return Ct;
      }
      function Ae(H, ne, $, pe) {
        var Ve = xt($);
        if (typeof Ve != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          $[Symbol.toStringTag] === "Generator" && (Ig || m("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Ig = !0), $.entries === Ve && (Fg || m("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Fg = !0);
          var ze = Ve.call($);
          if (ze)
            for (var vt = null, Ct = ze.next(); !Ct.done; Ct = ze.next()) {
              var on = Ct.value;
              vt = K(on, vt, H);
            }
        }
        var qt = Ve.call($);
        if (qt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var er = null, Wt = null, Wn = ne, va = 0, Qr = 0, yi = null, Da = qt.next(); Wn !== null && !Da.done; Qr++, Da = qt.next()) {
          Wn.index > Qr ? (yi = Wn, Wn = null) : yi = Wn.sibling;
          var Oa = A(H, Wn, Da.value, pe);
          if (Oa === null) {
            Wn === null && (Wn = yi);
            break;
          }
          e && Wn && Oa.alternate === null && t(H, Wn), va = s(Oa, va, Qr), Wt === null ? er = Oa : Wt.sibling = Oa, Wt = Oa, Wn = yi;
        }
        if (Da.done) {
          if (a(H, Wn), Hr()) {
            var ha = Qr;
            ic(H, ha);
          }
          return er;
        }
        if (Wn === null) {
          for (; !Da.done; Qr++, Da = qt.next()) {
            var ru = z(H, Da.value, pe);
            ru !== null && (va = s(ru, va, Qr), Wt === null ? er = ru : Wt.sibling = ru, Wt = ru);
          }
          if (Hr()) {
            var od = Qr;
            ic(H, od);
          }
          return er;
        }
        for (var hv = i(H, Wn); !Da.done; Qr++, Da = qt.next()) {
          var sl = W(hv, H, Qr, Da.value, pe);
          sl !== null && (e && sl.alternate !== null && hv.delete(sl.key === null ? Qr : sl.key), va = s(sl, va, Qr), Wt === null ? er = sl : Wt.sibling = sl, Wt = sl);
        }
        if (e && hv.forEach(function(UT) {
          return t(H, UT);
        }), Hr()) {
          var AT = Qr;
          ic(H, AT);
        }
        return er;
      }
      function ut(H, ne, $, pe) {
        if (ne !== null && ne.tag === ie) {
          a(H, ne.sibling);
          var Ve = l(ne, $);
          return Ve.return = H, Ve;
        }
        a(H, ne);
        var ze = P1($, H.mode, pe);
        return ze.return = H, ze;
      }
      function Ze(H, ne, $, pe) {
        for (var Ve = $.key, ze = ne; ze !== null; ) {
          if (ze.key === Ve) {
            var vt = $.type;
            if (vt === Si) {
              if (ze.tag === Z) {
                a(H, ze.sibling);
                var Ct = l(ze, $.props.children);
                return Ct.return = H, Ct._debugSource = $._source, Ct._debugOwner = $._owner, Ct;
              }
            } else if (ze.elementType === vt || // Keep this check inline so it only runs on the false path:
            dC(ze, $) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof vt == "object" && vt !== null && vt.$$typeof === _t && o2(vt) === ze.type) {
              a(H, ze.sibling);
              var on = l(ze, $.props);
              return on.ref = zp(H, ze, $), on.return = H, on._debugSource = $._source, on._debugOwner = $._owner, on;
            }
            a(H, ze);
            break;
          } else
            t(H, ze);
          ze = ze.sibling;
        }
        if ($.type === Si) {
          var qt = rs($.props.children, H.mode, pe, $.key);
          return qt.return = H, qt;
        } else {
          var er = z1($, H.mode, pe);
          return er.ref = zp(H, ne, $), er.return = H, er;
        }
      }
      function zt(H, ne, $, pe) {
        for (var Ve = $.key, ze = ne; ze !== null; ) {
          if (ze.key === Ve)
            if (ze.tag === I && ze.stateNode.containerInfo === $.containerInfo && ze.stateNode.implementation === $.implementation) {
              a(H, ze.sibling);
              var vt = l(ze, $.children || []);
              return vt.return = H, vt;
            } else {
              a(H, ze);
              break;
            }
          else
            t(H, ze);
          ze = ze.sibling;
        }
        var Ct = F1($, H.mode, pe);
        return Ct.return = H, Ct;
      }
      function Mt(H, ne, $, pe) {
        var Ve = typeof $ == "object" && $ !== null && $.type === Si && $.key === null;
        if (Ve && ($ = $.props.children), typeof $ == "object" && $ !== null) {
          switch ($.$$typeof) {
            case Lr:
              return d(Ze(H, ne, $, pe));
            case sr:
              return d(zt(H, ne, $, pe));
            case _t:
              var ze = $._payload, vt = $._init;
              return Mt(H, ne, vt(ze), pe);
          }
          if (kt($))
            return te(H, ne, $, pe);
          if (xt($))
            return Ae(H, ne, $, pe);
          pm(H, $);
        }
        return typeof $ == "string" && $ !== "" || typeof $ == "number" ? d(ut(H, ne, "" + $, pe)) : (typeof $ == "function" && vm(H), a(H, ne));
      }
      return Mt;
    }
    var Hf = l2(!0), u2 = l2(!1);
    function fw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = gc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = gc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function dw(e, t) {
      for (var a = e.child; a !== null; )
        Zk(a, t), a = a.sibling;
    }
    var Bg = $u(null), qg;
    qg = {};
    var hm = null, $f = null, Wg = null, mm = !1;
    function ym() {
      hm = null, $f = null, Wg = null, mm = !1;
    }
    function s2() {
      mm = !0;
    }
    function c2() {
      mm = !1;
    }
    function f2(e, t, a) {
      da(Bg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== qg && m("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = qg;
    }
    function Yg(e, t) {
      var a = Bg.current;
      fa(Bg, t), e._currentValue = a;
    }
    function Gg(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (Fl(i.childLanes, t) ? l !== null && !Fl(l.childLanes, t) && (l.childLanes = bt(l.childLanes, t)) : (i.childLanes = bt(i.childLanes, t), l !== null && (l.childLanes = bt(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && m("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function pw(e, t, a) {
      vw(e, t, a);
    }
    function vw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, s = i.dependencies;
        if (s !== null) {
          l = i.child;
          for (var d = s.firstContext; d !== null; ) {
            if (d.context === t) {
              if (i.tag === w) {
                var y = Us(a), g = Xl(ln, y);
                g.tag = _m;
                var x = i.updateQueue;
                if (x !== null) {
                  var k = x.shared, z = k.pending;
                  z === null ? g.next = g : (g.next = z.next, z.next = g), k.pending = g;
                }
              }
              i.lanes = bt(i.lanes, a);
              var A = i.alternate;
              A !== null && (A.lanes = bt(A.lanes, a)), Gg(i.return, a, e), s.lanes = bt(s.lanes, a);
              break;
            }
            d = d.next;
          }
        } else if (i.tag === ge)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === at) {
          var W = i.return;
          if (W === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          W.lanes = bt(W.lanes, a);
          var K = W.alternate;
          K !== null && (K.lanes = bt(K.lanes, a)), Gg(W, a, e), l = i.sibling;
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
    function Bf(e, t) {
      hm = e, $f = null, Wg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (la(a.lanes, t) && Jp(), a.firstContext = null);
      }
    }
    function lr(e) {
      mm && m("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Wg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if ($f === null) {
          if (hm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          $f = a, hm.dependencies = {
            lanes: le,
            firstContext: a
          };
        } else
          $f = $f.next = a;
      }
      return t;
    }
    var cc = null;
    function Qg(e) {
      cc === null ? cc = [e] : cc.push(e);
    }
    function hw() {
      if (cc !== null) {
        for (var e = 0; e < cc.length; e++) {
          var t = cc[e], a = t.interleaved;
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
        cc = null;
      }
    }
    function d2(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Qg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, gm(e, i);
    }
    function mw(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, Qg(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function yw(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Qg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, gm(e, i);
    }
    function Wa(e, t) {
      return gm(e, t);
    }
    var gw = gm;
    function gm(e, t) {
      e.lanes = bt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = bt(a.lanes, t)), a === null && (e.flags & (Cn | na)) !== nt && uC(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = bt(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = bt(a.childLanes, t) : (l.flags & (Cn | na)) !== nt && uC(e), i = l, l = l.return;
      if (i.tag === F) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var p2 = 0, v2 = 1, _m = 2, Kg = 3, Sm = !1, Xg, Cm;
    Xg = !1, Cm = null;
    function Jg(e) {
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
    function Xl(e, t) {
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
    function Yu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (Cm === l && !Xg && (m("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Xg = !0), mk()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, gw(e, a);
      } else
        return yw(e, l, t, a);
    }
    function Em(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (Kd(a)) {
          var s = l.lanes;
          s = Jd(s, e.pendingLanes);
          var d = bt(s, a);
          l.lanes = d, mf(e, d);
        }
      }
    }
    function Zg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var s = null, d = null, y = a.firstBaseUpdate;
          if (y !== null) {
            var g = y;
            do {
              var x = {
                eventTime: g.eventTime,
                lane: g.lane,
                tag: g.tag,
                payload: g.payload,
                callback: g.callback,
                next: null
              };
              d === null ? s = d = x : (d.next = x, d = x), g = g.next;
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
      var k = a.lastBaseUpdate;
      k === null ? a.firstBaseUpdate = t : k.next = t, a.lastBaseUpdate = t;
    }
    function _w(e, t, a, i, l, s) {
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
        case Kg:
          e.flags = e.flags & ~rr | et;
        // Intentional fallthrough
        case p2: {
          var g = a.payload, x;
          if (typeof g == "function") {
            s2(), x = g.call(s, i, l);
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
            x = g;
          return x == null ? i : wt({}, i, x);
        }
        case _m:
          return Sm = !0, i;
      }
      return i;
    }
    function xm(e, t, a, i) {
      var l = e.updateQueue;
      Sm = !1, Cm = l.shared;
      var s = l.firstBaseUpdate, d = l.lastBaseUpdate, y = l.shared.pending;
      if (y !== null) {
        l.shared.pending = null;
        var g = y, x = g.next;
        g.next = null, d === null ? s = x : d.next = x, d = g;
        var k = e.alternate;
        if (k !== null) {
          var z = k.updateQueue, A = z.lastBaseUpdate;
          A !== d && (A === null ? z.firstBaseUpdate = x : A.next = x, z.lastBaseUpdate = g);
        }
      }
      if (s !== null) {
        var W = l.baseState, K = le, te = null, Ae = null, ut = null, Ze = s;
        do {
          var zt = Ze.lane, Mt = Ze.eventTime;
          if (Fl(i, zt)) {
            if (ut !== null) {
              var ne = {
                eventTime: Mt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: It,
                tag: Ze.tag,
                payload: Ze.payload,
                callback: Ze.callback,
                next: null
              };
              ut = ut.next = ne;
            }
            W = _w(e, l, Ze, W, t, a);
            var $ = Ze.callback;
            if ($ !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ze.lane !== It) {
              e.flags |= dn;
              var pe = l.effects;
              pe === null ? l.effects = [Ze] : pe.push(Ze);
            }
          } else {
            var H = {
              eventTime: Mt,
              lane: zt,
              tag: Ze.tag,
              payload: Ze.payload,
              callback: Ze.callback,
              next: null
            };
            ut === null ? (Ae = ut = H, te = W) : ut = ut.next = H, K = bt(K, zt);
          }
          if (Ze = Ze.next, Ze === null) {
            if (y = l.shared.pending, y === null)
              break;
            var Ve = y, ze = Ve.next;
            Ve.next = null, Ze = ze, l.lastBaseUpdate = Ve, l.shared.pending = null;
          }
        } while (!0);
        ut === null && (te = W), l.baseState = te, l.firstBaseUpdate = Ae, l.lastBaseUpdate = ut;
        var vt = l.shared.interleaved;
        if (vt !== null) {
          var Ct = vt;
          do
            K = bt(K, Ct.lane), Ct = Ct.next;
          while (Ct !== vt);
        } else s === null && (l.shared.lanes = le);
        cv(K), e.lanes = K, e.memoizedState = W;
      }
      Cm = null;
    }
    function Sw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function m2() {
      Sm = !1;
    }
    function bm() {
      return Sm;
    }
    function y2(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], d = s.callback;
          d !== null && (s.callback = null, Sw(d, a));
        }
    }
    var Pp = {}, Gu = $u(Pp), Fp = $u(Pp), wm = $u(Pp);
    function Rm(e) {
      if (e === Pp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function g2() {
      var e = Rm(wm.current);
      return e;
    }
    function e0(e, t) {
      da(wm, t, e), da(Fp, e, e), da(Gu, Pp, e);
      var a = zx(t);
      fa(Gu, e), da(Gu, a, e);
    }
    function qf(e) {
      fa(Gu, e), fa(Fp, e), fa(wm, e);
    }
    function t0() {
      var e = Rm(Gu.current);
      return e;
    }
    function _2(e) {
      Rm(wm.current);
      var t = Rm(Gu.current), a = Px(t, e.type);
      t !== a && (da(Fp, e, e), da(Gu, a, e));
    }
    function n0(e) {
      Fp.current === e && (fa(Gu, e), fa(Fp, e));
    }
    var Cw = 0, S2 = 1, C2 = 1, Ip = 2, mo = $u(Cw);
    function r0(e, t) {
      return (e & t) !== 0;
    }
    function Wf(e) {
      return e & S2;
    }
    function a0(e, t) {
      return e & S2 | t;
    }
    function Ew(e, t) {
      return e | t;
    }
    function Qu(e, t) {
      da(mo, t, e);
    }
    function Yf(e) {
      fa(mo, e);
    }
    function xw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function km(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === he) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || P_(i) || Eg(i))
              return t;
          }
        } else if (t.tag === ve && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & et) !== nt;
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
    var Ya = (
      /*   */
      0
    ), mr = (
      /* */
      1
    ), nl = (
      /*  */
      2
    ), yr = (
      /*    */
      4
    ), $r = (
      /*   */
      8
    ), i0 = [];
    function o0() {
      for (var e = 0; e < i0.length; e++) {
        var t = i0[e];
        t._workInProgressVersionPrimary = null;
      }
      i0.length = 0;
    }
    function bw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Fe = v.ReactCurrentDispatcher, Vp = v.ReactCurrentBatchConfig, l0, Gf;
    l0 = /* @__PURE__ */ new Set();
    var fc = le, an = null, gr = null, _r = null, Tm = !1, Hp = !1, $p = 0, ww = 0, Rw = 25, ae = null, $i = null, Ku = -1, u0 = !1;
    function Kt() {
      {
        var e = ae;
        $i === null ? $i = [e] : $i.push(e);
      }
    }
    function ke() {
      {
        var e = ae;
        $i !== null && (Ku++, $i[Ku] !== e && kw(e));
      }
    }
    function Qf(e) {
      e != null && !kt(e) && m("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ae, typeof e);
    }
    function kw(e) {
      {
        var t = yt(an);
        if (!l0.has(t) && (l0.add(t), $i !== null)) {
          for (var a = "", i = 30, l = 0; l <= Ku; l++) {
            for (var s = $i[l], d = l === Ku ? e : s, y = l + 1 + ". " + s; y.length < i; )
              y += " ";
            y += d + `
`, a += y;
          }
          m(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

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
    function s0(e, t) {
      if (u0)
        return !1;
      if (t === null)
        return m("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ae), !1;
      e.length !== t.length && m(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ae, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!fe(e[a], t[a]))
          return !1;
      return !0;
    }
    function Kf(e, t, a, i, l, s) {
      fc = s, an = t, $i = e !== null ? e._debugHookTypes : null, Ku = -1, u0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = le, e !== null && e.memoizedState !== null ? Fe.current = $2 : $i !== null ? Fe.current = H2 : Fe.current = V2;
      var d = a(i, l);
      if (Hp) {
        var y = 0;
        do {
          if (Hp = !1, $p = 0, y >= Rw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          y += 1, u0 = !1, gr = null, _r = null, t.updateQueue = null, Ku = -1, Fe.current = B2, d = a(i, l);
        } while (Hp);
      }
      Fe.current = Vm, t._debugHookTypes = $i;
      var g = gr !== null && gr.next !== null;
      if (fc = le, an = null, gr = null, _r = null, ae = null, $i = null, Ku = -1, e !== null && (e.flags & In) !== (t.flags & In) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Dt) !== rt && m("Internal React error: Expected static flag was missing. Please notify the React team."), Tm = !1, g)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return d;
    }
    function Xf() {
      var e = $p !== 0;
      return $p = 0, e;
    }
    function E2(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & $t) !== rt ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = zs(e.lanes, a);
    }
    function x2() {
      if (Fe.current = Vm, Tm) {
        for (var e = an.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Tm = !1;
      }
      fc = le, an = null, gr = null, _r = null, $i = null, Ku = -1, ae = null, U2 = !1, Hp = !1, $p = 0;
    }
    function rl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return _r === null ? an.memoizedState = _r = e : _r = _r.next = e, _r;
    }
    function Bi() {
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
    function b2() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function c0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function f0(e, t, a) {
      var i = rl(), l;
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
      var d = s.dispatch = Nw.bind(null, an, s);
      return [i.memoizedState, d];
    }
    function d0(e, t, a) {
      var i = Bi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = gr, d = s.baseQueue, y = l.pending;
      if (y !== null) {
        if (d !== null) {
          var g = d.next, x = y.next;
          d.next = x, y.next = g;
        }
        s.baseQueue !== d && m("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = d = y, l.pending = null;
      }
      if (d !== null) {
        var k = d.next, z = s.baseState, A = null, W = null, K = null, te = k;
        do {
          var Ae = te.lane;
          if (Fl(fc, Ae)) {
            if (K !== null) {
              var Ze = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: It,
                action: te.action,
                hasEagerState: te.hasEagerState,
                eagerState: te.eagerState,
                next: null
              };
              K = K.next = Ze;
            }
            if (te.hasEagerState)
              z = te.eagerState;
            else {
              var zt = te.action;
              z = e(z, zt);
            }
          } else {
            var ut = {
              lane: Ae,
              action: te.action,
              hasEagerState: te.hasEagerState,
              eagerState: te.eagerState,
              next: null
            };
            K === null ? (W = K = ut, A = z) : K = K.next = ut, an.lanes = bt(an.lanes, Ae), cv(Ae);
          }
          te = te.next;
        } while (te !== null && te !== k);
        K === null ? A = z : K.next = W, fe(z, i.memoizedState) || Jp(), i.memoizedState = z, i.baseState = A, i.baseQueue = K, l.lastRenderedState = z;
      }
      var Mt = l.interleaved;
      if (Mt !== null) {
        var H = Mt;
        do {
          var ne = H.lane;
          an.lanes = bt(an.lanes, ne), cv(ne), H = H.next;
        } while (H !== Mt);
      } else d === null && (l.lanes = le);
      var $ = l.dispatch;
      return [i.memoizedState, $];
    }
    function p0(e, t, a) {
      var i = Bi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, d = l.pending, y = i.memoizedState;
      if (d !== null) {
        l.pending = null;
        var g = d.next, x = g;
        do {
          var k = x.action;
          y = e(y, k), x = x.next;
        } while (x !== g);
        fe(y, i.memoizedState) || Jp(), i.memoizedState = y, i.baseQueue === null && (i.baseState = y), l.lastRenderedState = y;
      }
      return [y, s];
    }
    function $L(e, t, a) {
    }
    function BL(e, t, a) {
    }
    function v0(e, t, a) {
      var i = an, l = rl(), s, d = Hr();
      if (d) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Gf || s !== a() && (m("The result of getServerSnapshot should be cached to avoid an infinite loop"), Gf = !0);
      } else {
        if (s = t(), !Gf) {
          var y = t();
          fe(s, y) || (m("The result of getSnapshot should be cached to avoid an infinite loop"), Gf = !0);
        }
        var g = oy();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        vf(g, fc) || w2(i, t, s);
      }
      l.memoizedState = s;
      var x = {
        value: s,
        getSnapshot: t
      };
      return l.queue = x, Lm(k2.bind(null, i, x, e), [e]), i.flags |= ta, Bp(mr | $r, R2.bind(null, i, x, s, t), void 0, null), s;
    }
    function Dm(e, t, a) {
      var i = an, l = Bi(), s = t();
      if (!Gf) {
        var d = t();
        fe(s, d) || (m("The result of getSnapshot should be cached to avoid an infinite loop"), Gf = !0);
      }
      var y = l.memoizedState, g = !fe(y, s);
      g && (l.memoizedState = s, Jp());
      var x = l.queue;
      if (Wp(k2.bind(null, i, x, e), [e]), x.getSnapshot !== t || g || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      _r !== null && _r.memoizedState.tag & mr) {
        i.flags |= ta, Bp(mr | $r, R2.bind(null, i, x, s, t), void 0, null);
        var k = oy();
        if (k === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        vf(k, fc) || w2(i, t, s);
      }
      return s;
    }
    function w2(e, t, a) {
      e.flags |= ku;
      var i = {
        getSnapshot: t,
        value: a
      }, l = an.updateQueue;
      if (l === null)
        l = b2(), an.updateQueue = l, l.stores = [i];
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
        return !fe(a, i);
      } catch {
        return !0;
      }
    }
    function D2(e) {
      var t = Wa(e, pt);
      t !== null && xr(t, e, pt, ln);
    }
    function Om(e) {
      var t = rl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: le,
        dispatch: null,
        lastRenderedReducer: c0,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Mw.bind(null, an, a);
      return [t.memoizedState, i];
    }
    function h0(e) {
      return d0(c0);
    }
    function m0(e) {
      return p0(c0);
    }
    function Bp(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = an.updateQueue;
      if (s === null)
        s = b2(), an.updateQueue = s, s.lastEffect = l.next = l;
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
    function y0(e) {
      var t = rl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Nm(e) {
      var t = Bi();
      return t.memoizedState;
    }
    function qp(e, t, a, i) {
      var l = rl(), s = i === void 0 ? null : i;
      an.flags |= e, l.memoizedState = Bp(mr | t, a, void 0, s);
    }
    function Mm(e, t, a, i) {
      var l = Bi(), s = i === void 0 ? null : i, d = void 0;
      if (gr !== null) {
        var y = gr.memoizedState;
        if (d = y.destroy, s !== null) {
          var g = y.deps;
          if (s0(s, g)) {
            l.memoizedState = Bp(t, a, d, s);
            return;
          }
        }
      }
      an.flags |= e, l.memoizedState = Bp(mr | t, a, d, s);
    }
    function Lm(e, t) {
      return (an.mode & $t) !== rt ? qp(Ni | ta | Ic, $r, e, t) : qp(ta | Ic, $r, e, t);
    }
    function Wp(e, t) {
      return Mm(ta, $r, e, t);
    }
    function g0(e, t) {
      return qp(jt, nl, e, t);
    }
    function jm(e, t) {
      return Mm(jt, nl, e, t);
    }
    function _0(e, t) {
      var a = jt;
      return a |= ro, (an.mode & $t) !== rt && (a |= Po), qp(a, yr, e, t);
    }
    function Am(e, t) {
      return Mm(jt, yr, e, t);
    }
    function O2(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || m("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var s = e();
        return l.current = s, function() {
          l.current = null;
        };
      }
    }
    function S0(e, t, a) {
      typeof t != "function" && m("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = jt;
      return l |= ro, (an.mode & $t) !== rt && (l |= Po), qp(l, yr, O2.bind(null, t, e), i);
    }
    function Um(e, t, a) {
      typeof t != "function" && m("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Mm(jt, yr, O2.bind(null, t, e), i);
    }
    function Tw(e, t) {
    }
    var zm = Tw;
    function C0(e, t) {
      var a = rl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Pm(e, t) {
      var a = Bi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (s0(i, s))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function E0(e, t) {
      var a = rl(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function Fm(e, t) {
      var a = Bi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (s0(i, s))
          return l[0];
      }
      var d = e();
      return a.memoizedState = [d, i], d;
    }
    function x0(e) {
      var t = rl();
      return t.memoizedState = e, e;
    }
    function N2(e) {
      var t = Bi(), a = gr, i = a.memoizedState;
      return L2(t, i, e);
    }
    function M2(e) {
      var t = Bi();
      if (gr === null)
        return t.memoizedState = e, e;
      var a = gr.memoizedState;
      return L2(t, a, e);
    }
    function L2(e, t, a) {
      var i = !Gd(fc);
      if (i) {
        if (!fe(a, t)) {
          var l = Xd();
          an.lanes = bt(an.lanes, l), cv(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Jp()), e.memoizedState = a, a;
    }
    function Dw(e, t, a) {
      var i = $a();
      $n(mh(i, Ai)), e(!0);
      var l = Vp.transition;
      Vp.transition = {};
      var s = Vp.transition;
      Vp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if ($n(i), Vp.transition = l, l === null && s._updatedFibers) {
          var d = s._updatedFibers.size;
          d > 10 && E("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function b0() {
      var e = Om(!1), t = e[0], a = e[1], i = Dw.bind(null, a), l = rl();
      return l.memoizedState = i, [t, i];
    }
    function j2() {
      var e = h0(), t = e[0], a = Bi(), i = a.memoizedState;
      return [t, i];
    }
    function A2() {
      var e = m0(), t = e[0], a = Bi(), i = a.memoizedState;
      return [t, i];
    }
    var U2 = !1;
    function Ow() {
      return U2;
    }
    function w0() {
      var e = rl(), t = oy(), a = t.identifierPrefix, i;
      if (Hr()) {
        var l = Yb();
        i = ":" + a + "R" + l;
        var s = $p++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var d = ww++;
        i = ":" + a + "r" + d.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Im() {
      var e = Bi(), t = e.memoizedState;
      return t;
    }
    function Nw(e, t, a) {
      typeof arguments[3] == "function" && m("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ts(e), l = {
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
          var d = Ta();
          xr(s, e, i, d), F2(s, t, i);
        }
      }
      I2(e, i);
    }
    function Mw(e, t, a) {
      typeof arguments[3] == "function" && m("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ts(e), l = {
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
        if (e.lanes === le && (s === null || s.lanes === le)) {
          var d = t.lastRenderedReducer;
          if (d !== null) {
            var y;
            y = Fe.current, Fe.current = yo;
            try {
              var g = t.lastRenderedState, x = d(g, a);
              if (l.hasEagerState = !0, l.eagerState = x, fe(x, g)) {
                mw(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              Fe.current = y;
            }
          }
        }
        var k = d2(e, t, l, i);
        if (k !== null) {
          var z = Ta();
          xr(k, e, i, z), F2(k, t, i);
        }
      }
      I2(e, i);
    }
    function z2(e) {
      var t = e.alternate;
      return e === an || t !== null && t === an;
    }
    function P2(e, t) {
      Hp = Tm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function F2(e, t, a) {
      if (Kd(a)) {
        var i = t.lanes;
        i = Jd(i, e.pendingLanes);
        var l = bt(i, a);
        t.lanes = l, mf(e, l);
      }
    }
    function I2(e, t, a) {
      ks(e, t);
    }
    var Vm = {
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
      unstable_isNewReconciler: re
    }, V2 = null, H2 = null, $2 = null, B2 = null, al = null, yo = null, Hm = null;
    {
      var R0 = function() {
        m("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, St = function() {
        m("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      V2 = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", Kt(), Qf(t), C0(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", Kt(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", Kt(), Qf(t), Lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", Kt(), Qf(a), S0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", Kt(), Qf(t), g0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", Kt(), Qf(t), _0(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", Kt(), Qf(t);
          var a = Fe.current;
          Fe.current = al;
          try {
            return E0(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", Kt();
          var i = Fe.current;
          Fe.current = al;
          try {
            return f0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", Kt(), y0(e);
        },
        useState: function(e) {
          ae = "useState", Kt();
          var t = Fe.current;
          Fe.current = al;
          try {
            return Om(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", Kt(), void 0;
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", Kt(), x0(e);
        },
        useTransition: function() {
          return ae = "useTransition", Kt(), b0();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", Kt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", Kt(), v0(e, t, a);
        },
        useId: function() {
          return ae = "useId", Kt(), w0();
        },
        unstable_isNewReconciler: re
      }, H2 = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", ke(), C0(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", ke(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", ke(), Lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", ke(), S0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", ke(), g0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", ke(), _0(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", ke();
          var a = Fe.current;
          Fe.current = al;
          try {
            return E0(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", ke();
          var i = Fe.current;
          Fe.current = al;
          try {
            return f0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", ke(), y0(e);
        },
        useState: function(e) {
          ae = "useState", ke();
          var t = Fe.current;
          Fe.current = al;
          try {
            return Om(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", ke(), void 0;
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", ke(), x0(e);
        },
        useTransition: function() {
          return ae = "useTransition", ke(), b0();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", ke(), v0(e, t, a);
        },
        useId: function() {
          return ae = "useId", ke(), w0();
        },
        unstable_isNewReconciler: re
      }, $2 = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", ke(), Pm(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", ke(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", ke(), Wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", ke(), Um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", ke(), jm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", ke(), Am(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", ke();
          var a = Fe.current;
          Fe.current = yo;
          try {
            return Fm(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", ke();
          var i = Fe.current;
          Fe.current = yo;
          try {
            return d0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", ke(), Nm();
        },
        useState: function(e) {
          ae = "useState", ke();
          var t = Fe.current;
          Fe.current = yo;
          try {
            return h0(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", ke(), zm();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", ke(), N2(e);
        },
        useTransition: function() {
          return ae = "useTransition", ke(), j2();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", ke(), Dm(e, t);
        },
        useId: function() {
          return ae = "useId", ke(), Im();
        },
        unstable_isNewReconciler: re
      }, B2 = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", ke(), Pm(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", ke(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", ke(), Wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", ke(), Um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", ke(), jm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", ke(), Am(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", ke();
          var a = Fe.current;
          Fe.current = Hm;
          try {
            return Fm(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", ke();
          var i = Fe.current;
          Fe.current = Hm;
          try {
            return p0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", ke(), Nm();
        },
        useState: function(e) {
          ae = "useState", ke();
          var t = Fe.current;
          Fe.current = Hm;
          try {
            return m0(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", ke(), zm();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", ke(), M2(e);
        },
        useTransition: function() {
          return ae = "useTransition", ke(), A2();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", ke(), Dm(e, t);
        },
        useId: function() {
          return ae = "useId", ke(), Im();
        },
        unstable_isNewReconciler: re
      }, al = {
        readContext: function(e) {
          return R0(), lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", St(), Kt(), C0(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", St(), Kt(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", St(), Kt(), Lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", St(), Kt(), S0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", St(), Kt(), g0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", St(), Kt(), _0(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", St(), Kt();
          var a = Fe.current;
          Fe.current = al;
          try {
            return E0(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", St(), Kt();
          var i = Fe.current;
          Fe.current = al;
          try {
            return f0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", St(), Kt(), y0(e);
        },
        useState: function(e) {
          ae = "useState", St(), Kt();
          var t = Fe.current;
          Fe.current = al;
          try {
            return Om(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", St(), Kt(), void 0;
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", St(), Kt(), x0(e);
        },
        useTransition: function() {
          return ae = "useTransition", St(), Kt(), b0();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", St(), Kt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", St(), Kt(), v0(e, t, a);
        },
        useId: function() {
          return ae = "useId", St(), Kt(), w0();
        },
        unstable_isNewReconciler: re
      }, yo = {
        readContext: function(e) {
          return R0(), lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", St(), ke(), Pm(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", St(), ke(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", St(), ke(), Wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", St(), ke(), Um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", St(), ke(), jm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", St(), ke(), Am(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", St(), ke();
          var a = Fe.current;
          Fe.current = yo;
          try {
            return Fm(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", St(), ke();
          var i = Fe.current;
          Fe.current = yo;
          try {
            return d0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", St(), ke(), Nm();
        },
        useState: function(e) {
          ae = "useState", St(), ke();
          var t = Fe.current;
          Fe.current = yo;
          try {
            return h0(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", St(), ke(), zm();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", St(), ke(), N2(e);
        },
        useTransition: function() {
          return ae = "useTransition", St(), ke(), j2();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", St(), ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", St(), ke(), Dm(e, t);
        },
        useId: function() {
          return ae = "useId", St(), ke(), Im();
        },
        unstable_isNewReconciler: re
      }, Hm = {
        readContext: function(e) {
          return R0(), lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", St(), ke(), Pm(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", St(), ke(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", St(), ke(), Wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", St(), ke(), Um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", St(), ke(), jm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", St(), ke(), Am(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", St(), ke();
          var a = Fe.current;
          Fe.current = yo;
          try {
            return Fm(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", St(), ke();
          var i = Fe.current;
          Fe.current = yo;
          try {
            return p0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", St(), ke(), Nm();
        },
        useState: function(e) {
          ae = "useState", St(), ke();
          var t = Fe.current;
          Fe.current = yo;
          try {
            return m0(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", St(), ke(), zm();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", St(), ke(), M2(e);
        },
        useTransition: function() {
          return ae = "useTransition", St(), ke(), A2();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", St(), ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", St(), ke(), Dm(e, t);
        },
        useId: function() {
          return ae = "useId", St(), ke(), Im();
        },
        unstable_isNewReconciler: re
      };
    }
    var Xu = p.unstable_now, q2 = 0, $m = -1, Yp = -1, Bm = -1, k0 = !1, qm = !1;
    function W2() {
      return k0;
    }
    function Lw() {
      qm = !0;
    }
    function jw() {
      k0 = !1, qm = !1;
    }
    function Aw() {
      k0 = qm, qm = !1;
    }
    function Y2() {
      return q2;
    }
    function G2() {
      q2 = Xu();
    }
    function T0(e) {
      Yp = Xu(), e.actualStartTime < 0 && (e.actualStartTime = Xu());
    }
    function Q2(e) {
      Yp = -1;
    }
    function Wm(e, t) {
      if (Yp >= 0) {
        var a = Xu() - Yp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Yp = -1;
      }
    }
    function il(e) {
      if ($m >= 0) {
        var t = Xu() - $m;
        $m = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case F:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Ne:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function D0(e) {
      if (Bm >= 0) {
        var t = Xu() - Bm;
        Bm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case F:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Ne:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function ol() {
      $m = Xu();
    }
    function O0() {
      Bm = Xu();
    }
    function N0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function go(e, t) {
      if (e && e.defaultProps) {
        var a = wt({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var M0 = {}, L0, j0, A0, U0, z0, K2, Ym, P0, F0, I0, Gp;
    {
      L0 = /* @__PURE__ */ new Set(), j0 = /* @__PURE__ */ new Set(), A0 = /* @__PURE__ */ new Set(), U0 = /* @__PURE__ */ new Set(), P0 = /* @__PURE__ */ new Set(), z0 = /* @__PURE__ */ new Set(), F0 = /* @__PURE__ */ new Set(), I0 = /* @__PURE__ */ new Set(), Gp = /* @__PURE__ */ new Set();
      var X2 = /* @__PURE__ */ new Set();
      Ym = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          X2.has(a) || (X2.add(a), m("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, K2 = function(e, t) {
        if (t === void 0) {
          var a = Pt(e) || "Component";
          z0.has(a) || (z0.add(a), m("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(M0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(M0);
    }
    function V0(e, t, a, i) {
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
      var d = s == null ? l : wt({}, l, s);
      if (e.memoizedState = d, e.lanes === le) {
        var y = e.updateQueue;
        y.baseState = d;
      }
    }
    var H0 = {
      isMounted: eh,
      enqueueSetState: function(e, t, a) {
        var i = Ru(e), l = Ta(), s = ts(i), d = Xl(l, s);
        d.payload = t, a != null && (Ym(a, "setState"), d.callback = a);
        var y = Yu(i, d, s);
        y !== null && (xr(y, i, s, l), Em(y, i, s)), ks(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Ru(e), l = Ta(), s = ts(i), d = Xl(l, s);
        d.tag = v2, d.payload = t, a != null && (Ym(a, "replaceState"), d.callback = a);
        var y = Yu(i, d, s);
        y !== null && (xr(y, i, s, l), Em(y, i, s)), ks(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ru(e), i = Ta(), l = ts(a), s = Xl(i, l);
        s.tag = _m, t != null && (Ym(t, "forceUpdate"), s.callback = t);
        var d = Yu(a, s, l);
        d !== null && (xr(d, a, l, i), Em(d, a, l)), Yc(a, l);
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
          g === void 0 && m("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Pt(t) || "Component");
        }
        return g;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Qe(a, i) || !Qe(l, s) : !0;
    }
    function Uw(e, t, a) {
      var i = e.stateNode;
      {
        var l = Pt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? m("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : m("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && m("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && m("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && m("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && m("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), t.childContextTypes && !Gp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & rn) === rt && (Gp.add(t), m(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), t.contextTypes && !Gp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & rn) === rt && (Gp.add(t), m(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), i.contextTypes && m("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !F0.has(t) && (F0.add(t), m("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && m("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && m("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Pt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && m("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && m("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && m("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && m("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var d = i.props !== a;
        i.props !== void 0 && d && m("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && m("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !A0.has(t) && (A0.add(t), m("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Pt(t))), typeof i.getDerivedStateFromProps == "function" && m("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && m("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && m("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var y = i.state;
        y && (typeof y != "object" || kt(y)) && m("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && m("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function Z2(e, t) {
      t.updater = H0, e.stateNode = t, wl(t, e), t._reactInternalInstance = M0;
    }
    function eS(e, t, a) {
      var i = !1, l = hi, s = hi, d = t.contextType;
      if ("contextType" in t) {
        var y = (
          // Allow null for conditional declaration
          d === null || d !== void 0 && d.$$typeof === L && d._context === void 0
        );
        if (!y && !I0.has(t)) {
          I0.add(t);
          var g = "";
          d === void 0 ? g = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof d != "object" ? g = " However, it is set to a " + typeof d + "." : d.$$typeof === Ei ? g = " Did you accidentally pass the Context.Provider instead?" : d._context !== void 0 ? g = " Did you accidentally pass the Context.Consumer instead?" : g = " However, it is set to an object with keys {" + Object.keys(d).join(", ") + "}.", m("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Pt(t) || "Component", g);
        }
      }
      if (typeof d == "object" && d !== null)
        s = lr(d);
      else {
        l = zf(e, t, !0);
        var x = t.contextTypes;
        i = x != null, s = i ? Pf(e, l) : hi;
      }
      var k = new t(a, s);
      if (e.mode & rn) {
        En(!0);
        try {
          k = new t(a, s);
        } finally {
          En(!1);
        }
      }
      var z = e.memoizedState = k.state !== null && k.state !== void 0 ? k.state : null;
      Z2(e, k);
      {
        if (typeof t.getDerivedStateFromProps == "function" && z === null) {
          var A = Pt(t) || "Component";
          j0.has(A) || (j0.add(A), m("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", A, k.state === null ? "null" : "undefined", A));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof k.getSnapshotBeforeUpdate == "function") {
          var W = null, K = null, te = null;
          if (typeof k.componentWillMount == "function" && k.componentWillMount.__suppressDeprecationWarning !== !0 ? W = "componentWillMount" : typeof k.UNSAFE_componentWillMount == "function" && (W = "UNSAFE_componentWillMount"), typeof k.componentWillReceiveProps == "function" && k.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? K = "componentWillReceiveProps" : typeof k.UNSAFE_componentWillReceiveProps == "function" && (K = "UNSAFE_componentWillReceiveProps"), typeof k.componentWillUpdate == "function" && k.componentWillUpdate.__suppressDeprecationWarning !== !0 ? te = "componentWillUpdate" : typeof k.UNSAFE_componentWillUpdate == "function" && (te = "UNSAFE_componentWillUpdate"), W !== null || K !== null || te !== null) {
            var Ae = Pt(t) || "Component", ut = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            U0.has(Ae) || (U0.add(Ae), m(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ae, ut, W !== null ? `
  ` + W : "", K !== null ? `
  ` + K : "", te !== null ? `
  ` + te : ""));
          }
        }
      }
      return i && $_(e, l, s), k;
    }
    function zw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (m("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", yt(e) || "Component"), H0.enqueueReplaceState(t, t.state, null));
    }
    function tS(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var s = yt(e) || "Component";
          L0.has(s) || (L0.add(s), m("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        H0.enqueueReplaceState(t, t.state, null);
      }
    }
    function $0(e, t, a, i) {
      Uw(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = {}, Jg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = lr(s);
      else {
        var d = zf(e, t, !0);
        l.context = Pf(e, d);
      }
      {
        if (l.state === a) {
          var y = Pt(t) || "Component";
          P0.has(y) || (P0.add(y), m("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", y));
        }
        e.mode & rn && ho.recordLegacyContextWarning(e, l), ho.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var g = t.getDerivedStateFromProps;
      if (typeof g == "function" && (V0(e, t, g, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (zw(e, l), xm(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var x = jt;
        x |= ro, (e.mode & $t) !== rt && (x |= Po), e.flags |= x;
      }
    }
    function Pw(e, t, a, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var d = l.context, y = t.contextType, g = hi;
      if (typeof y == "object" && y !== null)
        g = lr(y);
      else {
        var x = zf(e, t, !0);
        g = Pf(e, x);
      }
      var k = t.getDerivedStateFromProps, z = typeof k == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !z && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || d !== g) && tS(e, l, a, g), m2();
      var A = e.memoizedState, W = l.state = A;
      if (xm(e, a, l, i), W = e.memoizedState, s === a && A === W && !am() && !bm()) {
        if (typeof l.componentDidMount == "function") {
          var K = jt;
          K |= ro, (e.mode & $t) !== rt && (K |= Po), e.flags |= K;
        }
        return !1;
      }
      typeof k == "function" && (V0(e, t, k, a), W = e.memoizedState);
      var te = bm() || J2(e, t, s, a, A, W, g);
      if (te) {
        if (!z && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var Ae = jt;
          Ae |= ro, (e.mode & $t) !== rt && (Ae |= Po), e.flags |= Ae;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var ut = jt;
          ut |= ro, (e.mode & $t) !== rt && (ut |= Po), e.flags |= ut;
        }
        e.memoizedProps = a, e.memoizedState = W;
      }
      return l.props = a, l.state = W, l.context = g, te;
    }
    function Fw(e, t, a, i, l) {
      var s = t.stateNode;
      h2(e, t);
      var d = t.memoizedProps, y = t.type === t.elementType ? d : go(t.type, d);
      s.props = y;
      var g = t.pendingProps, x = s.context, k = a.contextType, z = hi;
      if (typeof k == "object" && k !== null)
        z = lr(k);
      else {
        var A = zf(t, a, !0);
        z = Pf(t, A);
      }
      var W = a.getDerivedStateFromProps, K = typeof W == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !K && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (d !== g || x !== z) && tS(t, s, i, z), m2();
      var te = t.memoizedState, Ae = s.state = te;
      if (xm(t, i, s, l), Ae = t.memoizedState, d === g && te === Ae && !am() && !bm() && !De)
        return typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= jt), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= Xn), !1;
      typeof W == "function" && (V0(t, a, W, i), Ae = t.memoizedState);
      var ut = bm() || J2(t, a, y, i, te, Ae, z) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      De;
      return ut ? (!K && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Ae, z), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Ae, z)), typeof s.componentDidUpdate == "function" && (t.flags |= jt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Xn)) : (typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= jt), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= Xn), t.memoizedProps = i, t.memoizedState = Ae), s.props = i, s.state = Ae, s.context = z, ut;
    }
    function dc(e, t) {
      return {
        value: e,
        source: t,
        stack: Xi(t),
        digest: null
      };
    }
    function B0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Iw(e, t) {
      return !0;
    }
    function q0(e, t) {
      try {
        var a = Iw(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, d = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === w)
            return;
          console.error(i);
        }
        var y = l ? yt(l) : null, g = y ? "The above error occurred in the <" + y + "> component:" : "The above error occurred in one of your React components:", x;
        if (e.tag === F)
          x = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var k = yt(e) || "Anonymous";
          x = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + k + ".");
        }
        var z = g + `
` + d + `

` + ("" + x);
        console.error(z);
      } catch (A) {
        setTimeout(function() {
          throw A;
        });
      }
    }
    var Vw = typeof WeakMap == "function" ? WeakMap : Map;
    function nS(e, t, a) {
      var i = Xl(ln, a);
      i.tag = Kg, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        Lk(l), q0(e, t);
      }, i;
    }
    function W0(e, t, a) {
      var i = Xl(ln, a);
      i.tag = Kg;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        i.payload = function() {
          return l(s);
        }, i.callback = function() {
          pC(e), q0(e, t);
        };
      }
      var d = e.stateNode;
      return d !== null && typeof d.componentDidCatch == "function" && (i.callback = function() {
        pC(e), q0(e, t), typeof l != "function" && Nk(this);
        var g = t.value, x = t.stack;
        this.componentDidCatch(g, {
          componentStack: x !== null ? x : ""
        }), typeof l != "function" && (la(e.lanes, pt) || m("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", yt(e) || "Unknown"));
      }), i;
    }
    function rS(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new Vw(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = jk.bind(null, e, t, a);
        ia && fv(e, a), t.then(s, s);
      }
    }
    function Hw(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function $w(e, t) {
      var a = e.tag;
      if ((e.mode & Dt) === rt && (a === R || a === Se || a === Le)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function aS(e) {
      var t = e;
      do {
        if (t.tag === he && xw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function iS(e, t, a, i, l) {
      if ((e.mode & Dt) === rt) {
        if (e === t)
          e.flags |= rr;
        else {
          if (e.flags |= et, a.flags |= Fc, a.flags &= -52805, a.tag === w) {
            var s = a.alternate;
            if (s === null)
              a.tag = it;
            else {
              var d = Xl(ln, pt);
              d.tag = _m, Yu(a, d, pt);
            }
          }
          a.lanes = bt(a.lanes, pt);
        }
        return e;
      }
      return e.flags |= rr, e.lanes = l, e;
    }
    function Bw(e, t, a, i, l) {
      if (a.flags |= Cs, ia && fv(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        $w(a), Hr() && a.mode & Dt && K_();
        var d = aS(t);
        if (d !== null) {
          d.flags &= ~kr, iS(d, t, a, e, l), d.mode & Dt && rS(e, s, l), Hw(d, e, s);
          return;
        } else {
          if (!uh(l)) {
            rS(e, s, l), w1();
            return;
          }
          var y = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = y;
        }
      } else if (Hr() && a.mode & Dt) {
        K_();
        var g = aS(t);
        if (g !== null) {
          (g.flags & rr) === nt && (g.flags |= kr), iS(g, t, a, e, l), Pg(dc(i, a));
          return;
        }
      }
      i = dc(i, a), xk(i);
      var x = t;
      do {
        switch (x.tag) {
          case F: {
            var k = i;
            x.flags |= rr;
            var z = Us(l);
            x.lanes = bt(x.lanes, z);
            var A = nS(x, k, z);
            Zg(x, A);
            return;
          }
          case w:
            var W = i, K = x.type, te = x.stateNode;
            if ((x.flags & et) === nt && (typeof K.getDerivedStateFromError == "function" || te !== null && typeof te.componentDidCatch == "function" && !aC(te))) {
              x.flags |= rr;
              var Ae = Us(l);
              x.lanes = bt(x.lanes, Ae);
              var ut = W0(x, W, Ae);
              Zg(x, ut);
              return;
            }
            break;
        }
        x = x.return;
      } while (x !== null);
    }
    function qw() {
      return null;
    }
    var Qp = v.ReactCurrentOwner, _o = !1, Y0, Kp, G0, Q0, K0, pc, X0, Gm, Xp;
    Y0 = {}, Kp = {}, G0 = {}, Q0 = {}, K0 = {}, pc = !1, X0 = {}, Gm = {}, Xp = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = u2(t, null, a, i) : t.child = Hf(t, e.child, a, i);
    }
    function Ww(e, t, a, i) {
      t.child = Hf(t, e.child, null, i), t.child = Hf(t, null, a, i);
    }
    function oS(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && po(
          s,
          i,
          // Resolved props
          "prop",
          Pt(a)
        );
      }
      var d = a.render, y = t.ref, g, x;
      Bf(t, l), Ea(t);
      {
        if (Qp.current = t, Kn(!0), g = Kf(e, t, d, i, y, l), x = Xf(), t.mode & rn) {
          En(!0);
          try {
            g = Kf(e, t, d, i, y, l), x = Xf();
          } finally {
            En(!1);
          }
        }
        Kn(!1);
      }
      return xa(), e !== null && !_o ? (E2(e, t, l), Jl(e, t, l)) : (Hr() && x && Mg(t), t.flags |= ci, Ra(e, t, g, l), t.child);
    }
    function lS(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (Xk(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var d = s;
          return d = id(s), t.tag = Le, t.type = d, e1(t, s), uS(e, t, d, i, l);
        }
        {
          var y = s.propTypes;
          if (y && po(
            y,
            i,
            // Resolved props
            "prop",
            Pt(s)
          ), a.defaultProps !== void 0) {
            var g = Pt(s) || "Unknown";
            Xp[g] || (m("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", g), Xp[g] = !0);
          }
        }
        var x = U1(a.type, null, i, t, t.mode, l);
        return x.ref = t.ref, x.return = t, t.child = x, x;
      }
      {
        var k = a.type, z = k.propTypes;
        z && po(
          z,
          i,
          // Resolved props
          "prop",
          Pt(k)
        );
      }
      var A = e.child, W = o1(e, l);
      if (!W) {
        var K = A.memoizedProps, te = a.compare;
        if (te = te !== null ? te : Qe, te(K, i) && e.ref === t.ref)
          return Jl(e, t, l);
      }
      t.flags |= ci;
      var Ae = gc(A, i);
      return Ae.ref = t.ref, Ae.return = t, t.child = Ae, Ae;
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
          var x = s && s.propTypes;
          x && po(
            x,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Pt(s)
          );
        }
      }
      if (e !== null) {
        var k = e.memoizedProps;
        if (Qe(k, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (_o = !1, t.pendingProps = i = k, o1(e, l))
            (e.flags & Fc) !== nt && (_o = !0);
          else return t.lanes = e.lanes, Jl(e, t, l);
      }
      return J0(e, t, a, i, l);
    }
    function sS(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || me)
        if ((t.mode & Dt) === rt) {
          var d = {
            baseLanes: le,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = d, ly(t, a);
        } else if (la(a, oa)) {
          var z = {
            baseLanes: le,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = z;
          var A = s !== null ? s.baseLanes : a;
          ly(t, A);
        } else {
          var y = null, g;
          if (s !== null) {
            var x = s.baseLanes;
            g = bt(x, a);
          } else
            g = a;
          t.lanes = t.childLanes = oa;
          var k = {
            baseLanes: g,
            cachePool: y,
            transitions: null
          };
          return t.memoizedState = k, t.updateQueue = null, ly(t, g), null;
        }
      else {
        var W;
        s !== null ? (W = bt(s.baseLanes, a), t.memoizedState = null) : W = a, ly(t, W);
      }
      return Ra(e, t, l, a), t.child;
    }
    function Yw(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function Gw(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function Qw(e, t, a) {
      {
        t.flags |= jt;
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
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= wn, t.flags |= Tu);
    }
    function J0(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && po(
          s,
          i,
          // Resolved props
          "prop",
          Pt(a)
        );
      }
      var d;
      {
        var y = zf(t, a, !0);
        d = Pf(t, y);
      }
      var g, x;
      Bf(t, l), Ea(t);
      {
        if (Qp.current = t, Kn(!0), g = Kf(e, t, a, i, d, l), x = Xf(), t.mode & rn) {
          En(!0);
          try {
            g = Kf(e, t, a, i, d, l), x = Xf();
          } finally {
            En(!1);
          }
        }
        Kn(!1);
      }
      return xa(), e !== null && !_o ? (E2(e, t, l), Jl(e, t, l)) : (Hr() && x && Mg(t), t.flags |= ci, Ra(e, t, g, l), t.child);
    }
    function fS(e, t, a, i, l) {
      {
        switch (dT(t)) {
          case !1: {
            var s = t.stateNode, d = t.type, y = new d(t.memoizedProps, s.context), g = y.state;
            s.updater.enqueueSetState(s, g, null);
            break;
          }
          case !0: {
            t.flags |= et, t.flags |= rr;
            var x = new Error("Simulated error coming from DevTools"), k = Us(l);
            t.lanes = bt(t.lanes, k);
            var z = W0(t, dc(x, t), k);
            Zg(t, z);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var A = a.propTypes;
          A && po(
            A,
            i,
            // Resolved props
            "prop",
            Pt(a)
          );
        }
      }
      var W;
      tl(a) ? (W = !0, om(t)) : W = !1, Bf(t, l);
      var K = t.stateNode, te;
      K === null ? (Km(e, t), eS(t, a, i), $0(t, a, i, l), te = !0) : e === null ? te = Pw(t, a, i, l) : te = Fw(e, t, a, i, l);
      var Ae = Z0(e, t, a, te, W, l);
      {
        var ut = t.stateNode;
        te && ut.props !== i && (pc || m("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", yt(t) || "a component"), pc = !0);
      }
      return Ae;
    }
    function Z0(e, t, a, i, l, s) {
      cS(e, t);
      var d = (t.flags & et) !== nt;
      if (!i && !d)
        return l && W_(t, a, !1), Jl(e, t, s);
      var y = t.stateNode;
      Qp.current = t;
      var g;
      if (d && typeof a.getDerivedStateFromError != "function")
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
        xa();
      }
      return t.flags |= ci, e !== null && d ? Ww(e, t, g, s) : Ra(e, t, g, s), t.memoizedState = y.state, l && W_(t, a, !0), t.child;
    }
    function dS(e) {
      var t = e.stateNode;
      t.pendingContext ? B_(e, t.pendingContext, t.pendingContext !== t.context) : t.context && B_(e, t.context, !1), e0(e, t.containerInfo);
    }
    function Kw(e, t, a) {
      if (dS(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      h2(e, t), xm(t, i, null, a);
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
        }, x = t.updateQueue;
        if (x.baseState = g, t.memoizedState = g, t.flags & kr) {
          var k = dc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return pS(e, t, y, a, k);
        } else if (y !== s) {
          var z = dc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return pS(e, t, y, a, z);
        } else {
          Zb(t);
          var A = u2(t, null, y, a);
          t.child = A;
          for (var W = A; W; )
            W.flags = W.flags & ~Cn | na, W = W.sibling;
        }
      } else {
        if (Vf(), y === s)
          return Jl(e, t, a);
        Ra(e, t, y, a);
      }
      return t.child;
    }
    function pS(e, t, a, i, l) {
      return Vf(), Pg(l), t.flags |= kr, Ra(e, t, a, i), t.child;
    }
    function Xw(e, t, a) {
      _2(t), e === null && zg(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, d = l.children, y = gg(i, l);
      return y ? d = null : s !== null && gg(i, s) && (t.flags |= za), cS(e, t), Ra(e, t, d, a), t.child;
    }
    function Jw(e, t) {
      return e === null && zg(t), null;
    }
    function Zw(e, t, a, i) {
      Km(e, t);
      var l = t.pendingProps, s = a, d = s._payload, y = s._init, g = y(d);
      t.type = g;
      var x = t.tag = Jk(g), k = go(g, l), z;
      switch (x) {
        case R:
          return e1(t, g), t.type = g = id(g), z = J0(null, t, g, k, i), z;
        case w:
          return t.type = g = O1(g), z = fS(null, t, g, k, i), z;
        case Se:
          return t.type = g = N1(g), z = oS(null, t, g, k, i), z;
        case Me: {
          if (t.type !== t.elementType) {
            var A = g.propTypes;
            A && po(
              A,
              k,
              // Resolved for outer only
              "prop",
              Pt(g)
            );
          }
          return z = lS(
            null,
            t,
            g,
            go(g.type, k),
            // The inner type can have defaults too
            i
          ), z;
        }
      }
      var W = "";
      throw g !== null && typeof g == "object" && g.$$typeof === _t && (W = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + g + ". " + ("Lazy element type must resolve to a class or function." + W));
    }
    function eR(e, t, a, i, l) {
      Km(e, t), t.tag = w;
      var s;
      return tl(a) ? (s = !0, om(t)) : s = !1, Bf(t, l), eS(t, a, i), $0(t, a, i, l), Z0(null, t, a, !0, s, l);
    }
    function tR(e, t, a, i) {
      Km(e, t);
      var l = t.pendingProps, s;
      {
        var d = zf(t, a, !1);
        s = Pf(t, d);
      }
      Bf(t, i);
      var y, g;
      Ea(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var x = Pt(a) || "Unknown";
          Y0[x] || (m("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", x, x), Y0[x] = !0);
        }
        t.mode & rn && ho.recordLegacyContextWarning(t, null), Kn(!0), Qp.current = t, y = Kf(null, t, a, l, s, i), g = Xf(), Kn(!1);
      }
      if (xa(), t.flags |= ci, typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0) {
        var k = Pt(a) || "Unknown";
        Kp[k] || (m("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", k, k, k), Kp[k] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0
      ) {
        {
          var z = Pt(a) || "Unknown";
          Kp[z] || (m("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", z, z, z), Kp[z] = !0);
        }
        t.tag = w, t.memoizedState = null, t.updateQueue = null;
        var A = !1;
        return tl(a) ? (A = !0, om(t)) : A = !1, t.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, Jg(t), Z2(t, y), $0(t, a, l, i), Z0(null, t, a, !0, A, i);
      } else {
        if (t.tag = R, t.mode & rn) {
          En(!0);
          try {
            y = Kf(null, t, a, l, s, i), g = Xf();
          } finally {
            En(!1);
          }
        }
        return Hr() && g && Mg(t), Ra(null, t, y, i), e1(t, a), t.child;
      }
    }
    function e1(e, t) {
      {
        if (t && t.childContextTypes && m("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Ar();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), K0[l] || (K0[l] = !0, m("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var d = Pt(t) || "Unknown";
          Xp[d] || (m("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", d), Xp[d] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var y = Pt(t) || "Unknown";
          Q0[y] || (m("%s: Function components do not support getDerivedStateFromProps.", y), Q0[y] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var g = Pt(t) || "Unknown";
          G0[g] || (m("%s: Function components do not support contextType.", g), G0[g] = !0);
        }
      }
    }
    var t1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: It
    };
    function n1(e) {
      return {
        baseLanes: e,
        cachePool: qw(),
        transitions: null
      };
    }
    function nR(e, t) {
      var a = null;
      return {
        baseLanes: bt(e.baseLanes, t),
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
      return r0(e, Ip);
    }
    function aR(e, t) {
      return zs(e.childLanes, t);
    }
    function vS(e, t, a) {
      var i = t.pendingProps;
      pT(t) && (t.flags |= et);
      var l = mo.current, s = !1, d = (t.flags & et) !== nt;
      if (d || rR(l, e) ? (s = !0, t.flags &= ~et) : (e === null || e.memoizedState !== null) && (l = Ew(l, C2)), l = Wf(l), Qu(t, l), e === null) {
        zg(t);
        var y = t.memoizedState;
        if (y !== null) {
          var g = y.dehydrated;
          if (g !== null)
            return sR(t, g);
        }
        var x = i.children, k = i.fallback;
        if (s) {
          var z = iR(t, x, k, a), A = t.child;
          return A.memoizedState = n1(a), t.memoizedState = t1, z;
        } else
          return r1(t, x);
      } else {
        var W = e.memoizedState;
        if (W !== null) {
          var K = W.dehydrated;
          if (K !== null)
            return cR(e, t, d, i, K, W, a);
        }
        if (s) {
          var te = i.fallback, Ae = i.children, ut = lR(e, t, Ae, te, a), Ze = t.child, zt = e.child.memoizedState;
          return Ze.memoizedState = zt === null ? n1(a) : nR(zt, a), Ze.childLanes = aR(e, a), t.memoizedState = t1, ut;
        } else {
          var Mt = i.children, H = oR(e, t, Mt, a);
          return t.memoizedState = null, H;
        }
      }
    }
    function r1(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, s = a1(l, i);
      return s.return = e, e.child = s, s;
    }
    function iR(e, t, a, i) {
      var l = e.mode, s = e.child, d = {
        mode: "hidden",
        children: t
      }, y, g;
      return (l & Dt) === rt && s !== null ? (y = s, y.childLanes = le, y.pendingProps = d, e.mode & Ht && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = 0, y.treeBaseDuration = 0), g = rs(a, l, i, null)) : (y = a1(d, l), g = rs(a, l, i, null)), y.return = e, g.return = e, y.sibling = g, e.child = y, g;
    }
    function a1(e, t, a) {
      return hC(e, t, le, null);
    }
    function hS(e, t) {
      return gc(e, t);
    }
    function oR(e, t, a, i) {
      var l = e.child, s = l.sibling, d = hS(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Dt) === rt && (d.lanes = i), d.return = t, d.sibling = null, s !== null) {
        var y = t.deletions;
        y === null ? (t.deletions = [s], t.flags |= Ua) : y.push(s);
      }
      return t.child = d, d;
    }
    function lR(e, t, a, i, l) {
      var s = t.mode, d = e.child, y = d.sibling, g = {
        mode: "hidden",
        children: a
      }, x;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Dt) === rt && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== d
      ) {
        var k = t.child;
        x = k, x.childLanes = le, x.pendingProps = g, t.mode & Ht && (x.actualDuration = 0, x.actualStartTime = -1, x.selfBaseDuration = d.selfBaseDuration, x.treeBaseDuration = d.treeBaseDuration), t.deletions = null;
      } else
        x = hS(d, g), x.subtreeFlags = d.subtreeFlags & In;
      var z;
      return y !== null ? z = gc(y, i) : (z = rs(i, s, l, null), z.flags |= Cn), z.return = t, x.return = t, x.sibling = z, t.child = x, z;
    }
    function Qm(e, t, a, i) {
      i !== null && Pg(i), Hf(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, d = r1(t, s);
      return d.flags |= Cn, t.memoizedState = null, d;
    }
    function uR(e, t, a, i, l) {
      var s = t.mode, d = {
        mode: "visible",
        children: a
      }, y = a1(d, s), g = rs(i, s, l, null);
      return g.flags |= Cn, y.return = t, g.return = t, y.sibling = g, t.child = y, (t.mode & Dt) !== rt && Hf(t, e.child, null, l), g;
    }
    function sR(e, t, a) {
      return (e.mode & Dt) === rt ? (m("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = pt) : Eg(t) ? e.lanes = Tr : e.lanes = oa, null;
    }
    function cR(e, t, a, i, l, s, d) {
      if (a)
        if (t.flags & kr) {
          t.flags &= ~kr;
          var H = B0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Qm(e, t, d, H);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= et, null;
          var ne = i.children, $ = i.fallback, pe = uR(e, t, ne, $, d), Ve = t.child;
          return Ve.memoizedState = n1(d), t.memoizedState = t1, pe;
        }
      else {
        if (Xb(), (t.mode & Dt) === rt)
          return Qm(
            e,
            t,
            d,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Eg(l)) {
          var y, g, x;
          {
            var k = vb(l);
            y = k.digest, g = k.message, x = k.stack;
          }
          var z;
          g ? z = new Error(g) : z = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var A = B0(z, y, x);
          return Qm(e, t, d, A);
        }
        var W = la(d, e.childLanes);
        if (_o || W) {
          var K = oy();
          if (K !== null) {
            var te = ep(K, d);
            if (te !== It && te !== s.retryLane) {
              s.retryLane = te;
              var Ae = ln;
              Wa(e, te), xr(K, e, te, Ae);
            }
          }
          w1();
          var ut = B0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Qm(e, t, d, ut);
        } else if (P_(l)) {
          t.flags |= et, t.child = e.child;
          var Ze = Ak.bind(null, e);
          return hb(l, Ze), null;
        } else {
          ew(t, l, s.treeContext);
          var zt = i.children, Mt = r1(t, zt);
          return Mt.flags |= na, Mt;
        }
      }
    }
    function mS(e, t, a) {
      e.lanes = bt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = bt(i.lanes, t)), Gg(e.return, t, a);
    }
    function fR(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === he) {
          var l = i.memoizedState;
          l !== null && mS(i, a, e);
        } else if (i.tag === ve)
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
        i !== null && km(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function pR(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !X0[e])
        if (X0[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              m('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              m('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              m('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          m('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function vR(e, t) {
      e !== void 0 && !Gm[e] && (e !== "collapsed" && e !== "hidden" ? (Gm[e] = !0, m('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Gm[e] = !0, m('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function yS(e, t) {
      {
        var a = kt(e), i = !a && typeof xt(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return m("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
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
            m('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function i1(e, t, a, i, l) {
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
      pR(l), vR(s, l), hR(d, l), Ra(e, t, d, a);
      var y = mo.current, g = r0(y, Ip);
      if (g)
        y = a0(y, Ip), t.flags |= et;
      else {
        var x = e !== null && (e.flags & et) !== nt;
        x && fR(t, t.child, a), y = Wf(y);
      }
      if (Qu(t, y), (t.mode & Dt) === rt)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var k = dR(t.child), z;
            k === null ? (z = t.child, t.child = null) : (z = k.sibling, k.sibling = null), i1(
              t,
              !1,
              // isBackwards
              z,
              k,
              s
            );
            break;
          }
          case "backwards": {
            var A = null, W = t.child;
            for (t.child = null; W !== null; ) {
              var K = W.alternate;
              if (K !== null && km(K) === null) {
                t.child = W;
                break;
              }
              var te = W.sibling;
              W.sibling = A, A = W, W = te;
            }
            i1(
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
            i1(
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
      e0(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Hf(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var _S = !1;
    function yR(e, t, a) {
      var i = t.type, l = i._context, s = t.pendingProps, d = t.memoizedProps, y = s.value;
      {
        "value" in s || _S || (_S = !0, m("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var g = t.type.propTypes;
        g && po(g, s, "prop", "Context.Provider");
      }
      if (f2(t, l, y), d !== null) {
        var x = d.value;
        if (fe(x, y)) {
          if (d.children === s.children && !am())
            return Jl(e, t, a);
        } else
          pw(t, l, a);
      }
      var k = s.children;
      return Ra(e, t, k, a), t.child;
    }
    var SS = !1;
    function gR(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (SS || (SS = !0, m("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && m("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Bf(t, a);
      var d = lr(i);
      Ea(t);
      var y;
      return Qp.current = t, Kn(!0), y = s(d), Kn(!1), xa(), t.flags |= ci, Ra(e, t, y, a), t.child;
    }
    function Jp() {
      _o = !0;
    }
    function Km(e, t) {
      (t.mode & Dt) === rt && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Cn);
    }
    function Jl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), Q2(), cv(t.lanes), la(a, t.childLanes) ? (fw(e, t), t.child) : null;
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
        return s === null ? (i.deletions = [e], i.flags |= Ua) : s.push(e), a.flags |= Cn, a;
      }
    }
    function o1(e, t) {
      var a = e.lanes;
      return !!la(a, t);
    }
    function SR(e, t, a) {
      switch (t.tag) {
        case F:
          dS(t), t.stateNode, Vf();
          break;
        case B:
          _2(t);
          break;
        case w: {
          var i = t.type;
          tl(i) && om(t);
          break;
        }
        case I:
          e0(t, t.stateNode.containerInfo);
          break;
        case ge: {
          var l = t.memoizedProps.value, s = t.type._context;
          f2(t, s, l);
          break;
        }
        case Ne:
          {
            var d = la(a, t.childLanes);
            d && (t.flags |= jt);
            {
              var y = t.stateNode;
              y.effectDuration = 0, y.passiveEffectDuration = 0;
            }
          }
          break;
        case he: {
          var g = t.memoizedState;
          if (g !== null) {
            if (g.dehydrated !== null)
              return Qu(t, Wf(mo.current)), t.flags |= et, null;
            var x = t.child, k = x.childLanes;
            if (la(a, k))
              return vS(e, t, a);
            Qu(t, Wf(mo.current));
            var z = Jl(e, t, a);
            return z !== null ? z.sibling : null;
          } else
            Qu(t, Wf(mo.current));
          break;
        }
        case ve: {
          var A = (e.flags & et) !== nt, W = la(a, t.childLanes);
          if (A) {
            if (W)
              return gS(e, t, a);
            t.flags |= et;
          }
          var K = t.memoizedState;
          if (K !== null && (K.rendering = null, K.tail = null, K.lastEffect = null), Qu(t, mo.current), W)
            break;
          return null;
        }
        case X:
        case be:
          return t.lanes = le, sS(e, t, a);
      }
      return Jl(e, t, a);
    }
    function CS(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return _R(e, t, U1(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || am() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          _o = !0;
        else {
          var s = o1(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & et) === nt)
            return _o = !1, SR(e, t, a);
          (e.flags & Fc) !== nt ? _o = !0 : _o = !1;
        }
      } else if (_o = !1, Hr() && qb(t)) {
        var d = t.index, y = Wb();
        Q_(t, y, d);
      }
      switch (t.lanes = le, t.tag) {
        case M:
          return tR(e, t, t.type, a);
        case He: {
          var g = t.elementType;
          return Zw(e, t, g, a);
        }
        case R: {
          var x = t.type, k = t.pendingProps, z = t.elementType === x ? k : go(x, k);
          return J0(e, t, x, z, a);
        }
        case w: {
          var A = t.type, W = t.pendingProps, K = t.elementType === A ? W : go(A, W);
          return fS(e, t, A, K, a);
        }
        case F:
          return Kw(e, t, a);
        case B:
          return Xw(e, t, a);
        case ie:
          return Jw(e, t);
        case he:
          return vS(e, t, a);
        case I:
          return mR(e, t, a);
        case Se: {
          var te = t.type, Ae = t.pendingProps, ut = t.elementType === te ? Ae : go(te, Ae);
          return oS(e, t, te, ut, a);
        }
        case Z:
          return Yw(e, t, a);
        case Ee:
          return Gw(e, t, a);
        case Ne:
          return Qw(e, t, a);
        case ge:
          return yR(e, t, a);
        case _e:
          return gR(e, t, a);
        case Me: {
          var Ze = t.type, zt = t.pendingProps, Mt = go(Ze, zt);
          if (t.type !== t.elementType) {
            var H = Ze.propTypes;
            H && po(
              H,
              Mt,
              // Resolved for outer only
              "prop",
              Pt(Ze)
            );
          }
          return Mt = go(Ze.type, Mt), lS(e, t, Ze, Mt, a);
        }
        case Le:
          return uS(e, t, t.type, t.pendingProps, a);
        case it: {
          var ne = t.type, $ = t.pendingProps, pe = t.elementType === ne ? $ : go(ne, $);
          return eR(e, t, ne, pe, a);
        }
        case ve:
          return gS(e, t, a);
        case G:
          break;
        case X:
          return sS(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Jf(e) {
      e.flags |= jt;
    }
    function ES(e) {
      e.flags |= wn, e.flags |= Tu;
    }
    var xS, l1, bS, wS;
    xS = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === B || l.tag === ie)
          Hx(e, l.stateNode);
        else if (l.tag !== I) {
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
    }, l1 = function(e, t) {
    }, bS = function(e, t, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var d = t.stateNode, y = t0(), g = Bx(d, a, s, i, l, y);
        t.updateQueue = g, g && Jf(t);
      }
    }, wS = function(e, t, a, i) {
      a !== i && Jf(t);
    };
    function Zp(e, t) {
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = le, i = nt;
      if (t) {
        if ((e.mode & Ht) !== rt) {
          for (var g = e.selfBaseDuration, x = e.child; x !== null; )
            a = bt(a, bt(x.lanes, x.childLanes)), i |= x.subtreeFlags & In, i |= x.flags & In, g += x.treeBaseDuration, x = x.sibling;
          e.treeBaseDuration = g;
        } else
          for (var k = e.child; k !== null; )
            a = bt(a, bt(k.lanes, k.childLanes)), i |= k.subtreeFlags & In, i |= k.flags & In, k.return = e, k = k.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ht) !== rt) {
          for (var l = e.actualDuration, s = e.selfBaseDuration, d = e.child; d !== null; )
            a = bt(a, bt(d.lanes, d.childLanes)), i |= d.subtreeFlags, i |= d.flags, l += d.actualDuration, s += d.treeBaseDuration, d = d.sibling;
          e.actualDuration = l, e.treeBaseDuration = s;
        } else
          for (var y = e.child; y !== null; )
            a = bt(a, bt(y.lanes, y.childLanes)), i |= y.subtreeFlags, i |= y.flags, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function CR(e, t, a) {
      if (iw() && (t.mode & Dt) !== rt && (t.flags & et) === nt)
        return n2(t), Vf(), t.flags |= kr | Cs | rr, !1;
      var i = fm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (rw(t), Br(t), (t.mode & Ht) !== rt) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Vf(), (t.flags & et) === nt && (t.memoizedState = null), t.flags |= jt, Br(t), (t.mode & Ht) !== rt) {
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
      switch (Lg(t), t.tag) {
        case M:
        case He:
        case Le:
        case R:
        case Se:
        case Z:
        case Ee:
        case Ne:
        case _e:
        case Me:
          return Br(t), null;
        case w: {
          var l = t.type;
          return tl(l) && im(t), Br(t), null;
        }
        case F: {
          var s = t.stateNode;
          if (qf(t), Dg(t), o0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var d = fm(t);
            if (d)
              Jf(t);
            else if (e !== null) {
              var y = e.memoizedState;
              // Check if this is a client root
              (!y.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & kr) !== nt) && (t.flags |= Xn, r2());
            }
          }
          return l1(e, t), Br(t), null;
        }
        case B: {
          n0(t);
          var g = g2(), x = t.type;
          if (e !== null && t.stateNode != null)
            bS(e, t, x, i, g), e.ref !== t.ref && ES(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Br(t), null;
            }
            var k = t0(), z = fm(t);
            if (z)
              tw(t, g, k) && Jf(t);
            else {
              var A = Vx(x, i, g, k, t);
              xS(A, t, !1, !1), t.stateNode = A, $x(A, x, i, g) && Jf(t);
            }
            t.ref !== null && ES(t);
          }
          return Br(t), null;
        }
        case ie: {
          var W = i;
          if (e && t.stateNode != null) {
            var K = e.memoizedProps;
            wS(e, t, K, W);
          } else {
            if (typeof W != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var te = g2(), Ae = t0(), ut = fm(t);
            ut ? nw(t) && Jf(t) : t.stateNode = qx(W, te, Ae, t);
          }
          return Br(t), null;
        }
        case he: {
          Yf(t);
          var Ze = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var zt = CR(e, t, Ze);
            if (!zt)
              return t.flags & rr ? t : null;
          }
          if ((t.flags & et) !== nt)
            return t.lanes = a, (t.mode & Ht) !== rt && N0(t), t;
          var Mt = Ze !== null, H = e !== null && e.memoizedState !== null;
          if (Mt !== H && Mt) {
            var ne = t.child;
            if (ne.flags |= Fn, (t.mode & Dt) !== rt) {
              var $ = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              $ || r0(mo.current, C2) ? Ek() : w1();
            }
          }
          var pe = t.updateQueue;
          if (pe !== null && (t.flags |= jt), Br(t), (t.mode & Ht) !== rt && Mt) {
            var Ve = t.child;
            Ve !== null && (t.treeBaseDuration -= Ve.treeBaseDuration);
          }
          return null;
        }
        case I:
          return qf(t), l1(e, t), e === null && Pb(t.stateNode.containerInfo), Br(t), null;
        case ge:
          var ze = t.type._context;
          return Yg(ze, t), Br(t), null;
        case it: {
          var vt = t.type;
          return tl(vt) && im(t), Br(t), null;
        }
        case ve: {
          Yf(t);
          var Ct = t.memoizedState;
          if (Ct === null)
            return Br(t), null;
          var on = (t.flags & et) !== nt, qt = Ct.rendering;
          if (qt === null)
            if (on)
              Zp(Ct, !1);
            else {
              var er = bk() && (e === null || (e.flags & et) === nt);
              if (!er)
                for (var Wt = t.child; Wt !== null; ) {
                  var Wn = km(Wt);
                  if (Wn !== null) {
                    on = !0, t.flags |= et, Zp(Ct, !1);
                    var va = Wn.updateQueue;
                    return va !== null && (t.updateQueue = va, t.flags |= jt), t.subtreeFlags = nt, dw(t, a), Qu(t, a0(mo.current, Ip)), t.child;
                  }
                  Wt = Wt.sibling;
                }
              Ct.tail !== null && Jn() > YS() && (t.flags |= et, on = !0, Zp(Ct, !1), t.lanes = qd);
            }
          else {
            if (!on) {
              var Qr = km(qt);
              if (Qr !== null) {
                t.flags |= et, on = !0;
                var yi = Qr.updateQueue;
                if (yi !== null && (t.updateQueue = yi, t.flags |= jt), Zp(Ct, !0), Ct.tail === null && Ct.tailMode === "hidden" && !qt.alternate && !Hr())
                  return Br(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Jn() * 2 - Ct.renderingStartTime > YS() && a !== oa && (t.flags |= et, on = !0, Zp(Ct, !1), t.lanes = qd);
            }
            if (Ct.isBackwards)
              qt.sibling = t.child, t.child = qt;
            else {
              var Da = Ct.last;
              Da !== null ? Da.sibling = qt : t.child = qt, Ct.last = qt;
            }
          }
          if (Ct.tail !== null) {
            var Oa = Ct.tail;
            Ct.rendering = Oa, Ct.tail = Oa.sibling, Ct.renderingStartTime = Jn(), Oa.sibling = null;
            var ha = mo.current;
            return on ? ha = a0(ha, Ip) : ha = Wf(ha), Qu(t, ha), Oa;
          }
          return Br(t), null;
        }
        case G:
          break;
        case X:
        case be: {
          b1(t);
          var ru = t.memoizedState, od = ru !== null;
          if (e !== null) {
            var hv = e.memoizedState, sl = hv !== null;
            sl !== od && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !me && (t.flags |= Fn);
          }
          return !od || (t.mode & Dt) === rt ? Br(t) : la(ul, oa) && (Br(t), t.subtreeFlags & (Cn | jt) && (t.flags |= Fn)), null;
        }
        case qe:
          return null;
        case Re:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function ER(e, t, a) {
      switch (Lg(t), t.tag) {
        case w: {
          var i = t.type;
          tl(i) && im(t);
          var l = t.flags;
          return l & rr ? (t.flags = l & ~rr | et, (t.mode & Ht) !== rt && N0(t), t) : null;
        }
        case F: {
          t.stateNode, qf(t), Dg(t), o0();
          var s = t.flags;
          return (s & rr) !== nt && (s & et) === nt ? (t.flags = s & ~rr | et, t) : null;
        }
        case B:
          return n0(t), null;
        case he: {
          Yf(t);
          var d = t.memoizedState;
          if (d !== null && d.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Vf();
          }
          var y = t.flags;
          return y & rr ? (t.flags = y & ~rr | et, (t.mode & Ht) !== rt && N0(t), t) : null;
        }
        case ve:
          return Yf(t), null;
        case I:
          return qf(t), null;
        case ge:
          var g = t.type._context;
          return Yg(g, t), null;
        case X:
        case be:
          return b1(t), null;
        case qe:
          return null;
        default:
          return null;
      }
    }
    function kS(e, t, a) {
      switch (Lg(t), t.tag) {
        case w: {
          var i = t.type.childContextTypes;
          i != null && im(t);
          break;
        }
        case F: {
          t.stateNode, qf(t), Dg(t), o0();
          break;
        }
        case B: {
          n0(t);
          break;
        }
        case I:
          qf(t);
          break;
        case he:
          Yf(t);
          break;
        case ve:
          Yf(t);
          break;
        case ge:
          var l = t.type._context;
          Yg(l, t);
          break;
        case X:
        case be:
          b1(t);
          break;
      }
    }
    var TS = null;
    TS = /* @__PURE__ */ new Set();
    var Xm = !1, qr = !1, xR = typeof WeakSet == "function" ? WeakSet : Set, Ke = null, Zf = null, ed = null;
    function bR(e) {
      zo(null, function() {
        throw e;
      }), Ss();
    }
    var wR = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ht)
        try {
          ol(), t.componentWillUnmount();
        } finally {
          il(e);
        }
      else
        t.componentWillUnmount();
    };
    function DS(e, t) {
      try {
        Ju(yr, e);
      } catch (a) {
        mn(e, t, a);
      }
    }
    function u1(e, t, a) {
      try {
        wR(e, a);
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
    function OS(e, t) {
      try {
        MS(e);
      } catch (a) {
        mn(e, t, a);
      }
    }
    function td(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ie && gt && e.mode & Ht)
              try {
                ol(), i = a(null);
              } finally {
                il(e);
              }
            else
              i = a(null);
          } catch (l) {
            mn(e, t, l);
          }
          typeof i == "function" && m("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", yt(e));
        } else
          a.current = null;
    }
    function Jm(e, t, a) {
      try {
        a();
      } catch (i) {
        mn(e, t, i);
      }
    }
    var NS = !1;
    function kR(e, t) {
      Fx(e.containerInfo), Ke = t, TR();
      var a = NS;
      return NS = !1, a;
    }
    function TR() {
      for (; Ke !== null; ) {
        var e = Ke, t = e.child;
        (e.subtreeFlags & Fo) !== nt && t !== null ? (t.return = e, Ke = t) : DR();
      }
    }
    function DR() {
      for (; Ke !== null; ) {
        var e = Ke;
        en(e);
        try {
          OR(e);
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
    function OR(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Xn) !== nt) {
        switch (en(e), e.tag) {
          case R:
          case Se:
          case Le:
            break;
          case w: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !pc && (s.props !== e.memoizedProps && m("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", yt(e) || "instance"), s.state !== e.memoizedState && m("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", yt(e) || "instance"));
              var d = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : go(e.type, i), l);
              {
                var y = TS;
                d === void 0 && !y.has(e.type) && (y.add(e.type), m("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", yt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = d;
            }
            break;
          }
          case F: {
            {
              var g = e.stateNode;
              cb(g.containerInfo);
            }
            break;
          }
          case B:
          case ie:
          case I:
          case it:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        hn();
      }
    }
    function So(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var s = l.next, d = s;
        do {
          if ((d.tag & e) === e) {
            var y = d.destroy;
            d.destroy = void 0, y !== void 0 && ((e & $r) !== Ya ? oo(t) : (e & yr) !== Ya && xs(t), (e & nl) !== Ya && dv(!0), Jm(t, a, y), (e & nl) !== Ya && dv(!1), (e & $r) !== Ya ? $o() : (e & yr) !== Ya && $d());
          }
          d = d.next;
        } while (d !== s);
      }
    }
    function Ju(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & $r) !== Ya ? Hd(t) : (e & yr) !== Ya && qc(t);
            var d = s.create;
            (e & nl) !== Ya && dv(!0), s.destroy = d(), (e & nl) !== Ya && dv(!1), (e & $r) !== Ya ? rh() : (e & yr) !== Ya && ah();
            {
              var y = s.destroy;
              if (y !== void 0 && typeof y != "function") {
                var g = void 0;
                (s.tag & yr) !== nt ? g = "useLayoutEffect" : (s.tag & nl) !== nt ? g = "useInsertionEffect" : g = "useEffect";
                var x = void 0;
                y === null ? x = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof y.then == "function" ? x = `

It looks like you wrote ` + g + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + g + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : x = " You returned: " + y, m("%s must not return anything besides a function, which is used for clean-up.%s", g, x);
              }
            }
          }
          s = s.next;
        } while (s !== l);
      }
    }
    function NR(e, t) {
      if ((t.flags & jt) !== nt)
        switch (t.tag) {
          case Ne: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, d = Y2(), y = t.alternate === null ? "mount" : "update";
            W2() && (y = "nested-update"), typeof s == "function" && s(l, y, a, d);
            var g = t.return;
            e: for (; g !== null; ) {
              switch (g.tag) {
                case F:
                  var x = g.stateNode;
                  x.passiveEffectDuration += a;
                  break e;
                case Ne:
                  var k = g.stateNode;
                  k.passiveEffectDuration += a;
                  break e;
              }
              g = g.return;
            }
            break;
          }
        }
    }
    function MR(e, t, a, i) {
      if ((a.flags & Vo) !== nt)
        switch (a.tag) {
          case R:
          case Se:
          case Le: {
            if (!qr)
              if (a.mode & Ht)
                try {
                  ol(), Ju(yr | mr, a);
                } finally {
                  il(a);
                }
              else
                Ju(yr | mr, a);
            break;
          }
          case w: {
            var l = a.stateNode;
            if (a.flags & jt && !qr)
              if (t === null)
                if (a.type === a.elementType && !pc && (l.props !== a.memoizedProps && m("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", yt(a) || "instance"), l.state !== a.memoizedState && m("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", yt(a) || "instance")), a.mode & Ht)
                  try {
                    ol(), l.componentDidMount();
                  } finally {
                    il(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : go(a.type, t.memoizedProps), d = t.memoizedState;
                if (a.type === a.elementType && !pc && (l.props !== a.memoizedProps && m("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", yt(a) || "instance"), l.state !== a.memoizedState && m("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", yt(a) || "instance")), a.mode & Ht)
                  try {
                    ol(), l.componentDidUpdate(s, d, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    il(a);
                  }
                else
                  l.componentDidUpdate(s, d, l.__reactInternalSnapshotBeforeUpdate);
              }
            var y = a.updateQueue;
            y !== null && (a.type === a.elementType && !pc && (l.props !== a.memoizedProps && m("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", yt(a) || "instance"), l.state !== a.memoizedState && m("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", yt(a) || "instance")), y2(a, y, l));
            break;
          }
          case F: {
            var g = a.updateQueue;
            if (g !== null) {
              var x = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case B:
                    x = a.child.stateNode;
                    break;
                  case w:
                    x = a.child.stateNode;
                    break;
                }
              y2(a, g, x);
            }
            break;
          }
          case B: {
            var k = a.stateNode;
            if (t === null && a.flags & jt) {
              var z = a.type, A = a.memoizedProps;
              Kx(k, z, A);
            }
            break;
          }
          case ie:
            break;
          case I:
            break;
          case Ne: {
            {
              var W = a.memoizedProps, K = W.onCommit, te = W.onRender, Ae = a.stateNode.effectDuration, ut = Y2(), Ze = t === null ? "mount" : "update";
              W2() && (Ze = "nested-update"), typeof te == "function" && te(a.memoizedProps.id, Ze, a.actualDuration, a.treeBaseDuration, a.actualStartTime, ut);
              {
                typeof K == "function" && K(a.memoizedProps.id, Ze, Ae, ut), Dk(a);
                var zt = a.return;
                e: for (; zt !== null; ) {
                  switch (zt.tag) {
                    case F:
                      var Mt = zt.stateNode;
                      Mt.effectDuration += Ae;
                      break e;
                    case Ne:
                      var H = zt.stateNode;
                      H.effectDuration += Ae;
                      break e;
                  }
                  zt = zt.return;
                }
              }
            }
            break;
          }
          case he: {
            IR(e, a);
            break;
          }
          case ve:
          case it:
          case G:
          case X:
          case be:
          case Re:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      qr || a.flags & wn && MS(a);
    }
    function LR(e) {
      switch (e.tag) {
        case R:
        case Se:
        case Le: {
          if (e.mode & Ht)
            try {
              ol(), DS(e, e.return);
            } finally {
              il(e);
            }
          else
            DS(e, e.return);
          break;
        }
        case w: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && RR(e, e.return, t), OS(e, e.return);
          break;
        }
        case B: {
          OS(e, e.return);
          break;
        }
      }
    }
    function jR(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === B) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? ob(l) : ub(i.stateNode, i.memoizedProps);
            } catch (d) {
              mn(e, e.return, d);
            }
          }
        } else if (i.tag === ie) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? lb(s) : sb(s, i.memoizedProps);
            } catch (d) {
              mn(e, e.return, d);
            }
        } else if (!((i.tag === X || i.tag === be) && i.memoizedState !== null && i !== e)) {
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
    function MS(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        if (e.tag === B ? i = a : i = a, typeof t == "function") {
          var l;
          if (e.mode & Ht)
            try {
              ol(), l = t(i);
            } finally {
              il(e);
            }
          else
            l = t(i);
          typeof l == "function" && m("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", yt(e));
        } else
          t.hasOwnProperty("current") || m("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", yt(e)), t.current = i;
      }
    }
    function AR(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function LS(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, LS(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === B) {
          var a = e.stateNode;
          a !== null && Vb(a);
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
      return e.tag === B || e.tag === F || e.tag === I;
    }
    function AS(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || jS(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== B && t.tag !== ie && t.tag !== at; ) {
          if (t.flags & Cn || t.child === null || t.tag === I)
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
        case B: {
          var a = t.stateNode;
          t.flags & za && (z_(a), t.flags &= ~za);
          var i = AS(e);
          c1(e, i, a);
          break;
        }
        case F:
        case I: {
          var l = t.stateNode.containerInfo, s = AS(e);
          s1(e, s, l);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function s1(e, t, a) {
      var i = e.tag, l = i === B || i === ie;
      if (l) {
        var s = e.stateNode;
        t ? nb(a, s, t) : eb(a, s);
      } else if (i !== I) {
        var d = e.child;
        if (d !== null) {
          s1(d, t, a);
          for (var y = d.sibling; y !== null; )
            s1(y, t, a), y = y.sibling;
        }
      }
    }
    function c1(e, t, a) {
      var i = e.tag, l = i === B || i === ie;
      if (l) {
        var s = e.stateNode;
        t ? tb(a, s, t) : Zx(a, s);
      } else if (i !== I) {
        var d = e.child;
        if (d !== null) {
          c1(d, t, a);
          for (var y = d.sibling; y !== null; )
            c1(y, t, a), y = y.sibling;
        }
      }
    }
    var Wr = null, Co = !1;
    function PR(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case B: {
              Wr = i.stateNode, Co = !1;
              break e;
            }
            case F: {
              Wr = i.stateNode.containerInfo, Co = !0;
              break e;
            }
            case I: {
              Wr = i.stateNode.containerInfo, Co = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Wr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        US(e, t, a), Wr = null, Co = !1;
      }
      AR(a);
    }
    function Zu(e, t, a) {
      for (var i = a.child; i !== null; )
        US(e, t, i), i = i.sibling;
    }
    function US(e, t, a) {
      switch (Fd(a), a.tag) {
        case B:
          qr || td(a, t);
        // eslint-disable-next-line-no-fallthrough
        case ie: {
          {
            var i = Wr, l = Co;
            Wr = null, Zu(e, t, a), Wr = i, Co = l, Wr !== null && (Co ? ab(Wr, a.stateNode) : rb(Wr, a.stateNode));
          }
          return;
        }
        case at: {
          Wr !== null && (Co ? ib(Wr, a.stateNode) : Cg(Wr, a.stateNode));
          return;
        }
        case I: {
          {
            var s = Wr, d = Co;
            Wr = a.stateNode.containerInfo, Co = !0, Zu(e, t, a), Wr = s, Co = d;
          }
          return;
        }
        case R:
        case Se:
        case Me:
        case Le: {
          if (!qr) {
            var y = a.updateQueue;
            if (y !== null) {
              var g = y.lastEffect;
              if (g !== null) {
                var x = g.next, k = x;
                do {
                  var z = k, A = z.destroy, W = z.tag;
                  A !== void 0 && ((W & nl) !== Ya ? Jm(a, t, A) : (W & yr) !== Ya && (xs(a), a.mode & Ht ? (ol(), Jm(a, t, A), il(a)) : Jm(a, t, A), $d())), k = k.next;
                } while (k !== x);
              }
            }
          }
          Zu(e, t, a);
          return;
        }
        case w: {
          if (!qr) {
            td(a, t);
            var K = a.stateNode;
            typeof K.componentWillUnmount == "function" && u1(a, t, K);
          }
          Zu(e, t, a);
          return;
        }
        case G: {
          Zu(e, t, a);
          return;
        }
        case X: {
          if (
            // TODO: Remove this dead flag
            a.mode & Dt
          ) {
            var te = qr;
            qr = te || a.memoizedState !== null, Zu(e, t, a), qr = te;
          } else
            Zu(e, t, a);
          break;
        }
        default: {
          Zu(e, t, a);
          return;
        }
      }
    }
    function FR(e) {
      e.memoizedState;
    }
    function IR(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && bb(s);
          }
        }
      }
    }
    function zS(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new xR()), t.forEach(function(i) {
          var l = Uk.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ia)
              if (Zf !== null && ed !== null)
                fv(ed, Zf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function VR(e, t, a) {
      Zf = a, ed = e, en(t), PS(t, e), en(t), Zf = null, ed = null;
    }
    function Eo(e, t, a) {
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
      var d = Oo();
      if (t.subtreeFlags & Io)
        for (var y = t.child; y !== null; )
          en(y), PS(y, e), y = y.sibling;
      en(d);
    }
    function PS(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case R:
        case Se:
        case Me:
        case Le: {
          if (Eo(t, e), ll(e), l & jt) {
            try {
              So(nl | mr, e, e.return), Ju(nl | mr, e);
            } catch (vt) {
              mn(e, e.return, vt);
            }
            if (e.mode & Ht) {
              try {
                ol(), So(yr | mr, e, e.return);
              } catch (vt) {
                mn(e, e.return, vt);
              }
              il(e);
            } else
              try {
                So(yr | mr, e, e.return);
              } catch (vt) {
                mn(e, e.return, vt);
              }
          }
          return;
        }
        case w: {
          Eo(t, e), ll(e), l & wn && i !== null && td(i, i.return);
          return;
        }
        case B: {
          Eo(t, e), ll(e), l & wn && i !== null && td(i, i.return);
          {
            if (e.flags & za) {
              var s = e.stateNode;
              try {
                z_(s);
              } catch (vt) {
                mn(e, e.return, vt);
              }
            }
            if (l & jt) {
              var d = e.stateNode;
              if (d != null) {
                var y = e.memoizedProps, g = i !== null ? i.memoizedProps : y, x = e.type, k = e.updateQueue;
                if (e.updateQueue = null, k !== null)
                  try {
                    Xx(d, k, x, g, y, e);
                  } catch (vt) {
                    mn(e, e.return, vt);
                  }
              }
            }
          }
          return;
        }
        case ie: {
          if (Eo(t, e), ll(e), l & jt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var z = e.stateNode, A = e.memoizedProps, W = i !== null ? i.memoizedProps : A;
            try {
              Jx(z, W, A);
            } catch (vt) {
              mn(e, e.return, vt);
            }
          }
          return;
        }
        case F: {
          if (Eo(t, e), ll(e), l & jt && i !== null) {
            var K = i.memoizedState;
            if (K.isDehydrated)
              try {
                xb(t.containerInfo);
              } catch (vt) {
                mn(e, e.return, vt);
              }
          }
          return;
        }
        case I: {
          Eo(t, e), ll(e);
          return;
        }
        case he: {
          Eo(t, e), ll(e);
          var te = e.child;
          if (te.flags & Fn) {
            var Ae = te.stateNode, ut = te.memoizedState, Ze = ut !== null;
            if (Ae.isHidden = Ze, Ze) {
              var zt = te.alternate !== null && te.alternate.memoizedState !== null;
              zt || Ck();
            }
          }
          if (l & jt) {
            try {
              FR(e);
            } catch (vt) {
              mn(e, e.return, vt);
            }
            zS(e);
          }
          return;
        }
        case X: {
          var Mt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Dt
          ) {
            var H = qr;
            qr = H || Mt, Eo(t, e), qr = H;
          } else
            Eo(t, e);
          if (ll(e), l & Fn) {
            var ne = e.stateNode, $ = e.memoizedState, pe = $ !== null, Ve = e;
            if (ne.isHidden = pe, pe && !Mt && (Ve.mode & Dt) !== rt) {
              Ke = Ve;
              for (var ze = Ve.child; ze !== null; )
                Ke = ze, $R(ze), ze = ze.sibling;
            }
            jR(Ve, pe);
          }
          return;
        }
        case ve: {
          Eo(t, e), ll(e), l & jt && zS(e);
          return;
        }
        case G:
          return;
        default: {
          Eo(t, e), ll(e);
          return;
        }
      }
    }
    function ll(e) {
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
      Zf = a, ed = t, Ke = e, FS(e, t, a), Zf = null, ed = null;
    }
    function FS(e, t, a) {
      for (var i = (e.mode & Dt) !== rt; Ke !== null; ) {
        var l = Ke, s = l.child;
        if (l.tag === X && i) {
          var d = l.memoizedState !== null, y = d || Xm;
          if (y) {
            f1(e, t, a);
            continue;
          } else {
            var g = l.alternate, x = g !== null && g.memoizedState !== null, k = x || qr, z = Xm, A = qr;
            Xm = y, qr = k, qr && !A && (Ke = l, BR(l));
            for (var W = s; W !== null; )
              Ke = W, FS(
                W,
                // New root; bubble back up to here and stop.
                t,
                a
              ), W = W.sibling;
            Ke = l, Xm = z, qr = A, f1(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & Vo) !== nt && s !== null ? (s.return = l, Ke = s) : f1(e, t, a);
      }
    }
    function f1(e, t, a) {
      for (; Ke !== null; ) {
        var i = Ke;
        if ((i.flags & Vo) !== nt) {
          var l = i.alternate;
          en(i);
          try {
            MR(t, l, i, a);
          } catch (d) {
            mn(i, i.return, d);
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
          case R:
          case Se:
          case Me:
          case Le: {
            if (t.mode & Ht)
              try {
                ol(), So(yr, t, t.return);
              } finally {
                il(t);
              }
            else
              So(yr, t, t.return);
            break;
          }
          case w: {
            td(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && u1(t, t.return, i);
            break;
          }
          case B: {
            td(t, t.return);
            break;
          }
          case X: {
            var l = t.memoizedState !== null;
            if (l) {
              IS(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ke = a) : IS(e);
      }
    }
    function IS(e) {
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
        if (t.tag === X) {
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
          LR(t);
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
        (l.subtreeFlags & ao) !== nt && s !== null ? (s.return = l, Ke = s) : YR(e, t, a, i);
      }
    }
    function YR(e, t, a, i) {
      for (; Ke !== null; ) {
        var l = Ke;
        if ((l.flags & ta) !== nt) {
          en(l);
          try {
            GR(t, l, a, i);
          } catch (d) {
            mn(l, l.return, d);
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
        case R:
        case Se:
        case Le: {
          if (t.mode & Ht) {
            O0();
            try {
              Ju($r | mr, t);
            } finally {
              D0(t);
            }
          } else
            Ju($r | mr, t);
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
        if ((Ke.flags & Ua) !== nt) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              Ke = l, ZR(l, e);
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
            Ke = e;
          }
        }
        (e.subtreeFlags & ao) !== nt && t !== null ? (t.return = e, Ke = t) : XR();
      }
    }
    function XR() {
      for (; Ke !== null; ) {
        var e = Ke;
        (e.flags & ta) !== nt && (en(e), JR(e), hn());
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
        case R:
        case Se:
        case Le: {
          e.mode & Ht ? (O0(), So($r | mr, e, e.return), D0(e)) : So($r | mr, e, e.return);
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
        if (LS(t), t === e) {
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
        case R:
        case Se:
        case Le: {
          e.mode & Ht ? (O0(), So($r, e, t), D0(e)) : So($r, e, t);
          break;
        }
      }
    }
    function nk(e) {
      switch (e.tag) {
        case R:
        case Se:
        case Le: {
          try {
            Ju(yr | mr, e);
          } catch (a) {
            mn(e, e.return, a);
          }
          break;
        }
        case w: {
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
        case R:
        case Se:
        case Le: {
          try {
            Ju($r | mr, e);
          } catch (t) {
            mn(e, e.return, t);
          }
          break;
        }
      }
    }
    function ak(e) {
      switch (e.tag) {
        case R:
        case Se:
        case Le: {
          try {
            So(yr | mr, e, e.return);
          } catch (a) {
            mn(e, e.return, a);
          }
          break;
        }
        case w: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && u1(e, e.return, t);
          break;
        }
      }
    }
    function ik(e) {
      switch (e.tag) {
        case R:
        case Se:
        case Le:
          try {
            So($r | mr, e, e.return);
          } catch (t) {
            mn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var ev = Symbol.for;
      ev("selector.component"), ev("selector.has_pseudo_class"), ev("selector.role"), ev("selector.test_id"), ev("selector.text");
    }
    var ok = [];
    function lk() {
      ok.forEach(function(e) {
        return e();
      });
    }
    var uk = v.ReactCurrentActQueue;
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
        return !e && uk.current !== null && m("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var ck = Math.ceil, d1 = v.ReactCurrentDispatcher, p1 = v.ReactCurrentOwner, Yr = v.ReactCurrentBatchConfig, xo = v.ReactCurrentActQueue, Sr = (
      /*             */
      0
    ), $S = (
      /*               */
      1
    ), Gr = (
      /*                */
      2
    ), qi = (
      /*                */
      4
    ), Zl = 0, tv = 1, vc = 2, Zm = 3, nv = 4, BS = 5, v1 = 6, Ut = Sr, ka = null, An = null, Cr = le, ul = le, h1 = $u(le), Er = Zl, rv = null, ey = le, av = le, ty = le, iv = null, Ga = null, m1 = 0, qS = 500, WS = 1 / 0, fk = 500, eu = null;
    function ov() {
      WS = Jn() + fk;
    }
    function YS() {
      return WS;
    }
    var ny = !1, y1 = null, nd = null, hc = !1, es = null, lv = le, g1 = [], _1 = null, dk = 50, uv = 0, S1 = null, C1 = !1, ry = !1, pk = 50, rd = 0, ay = null, sv = ln, iy = le, GS = !1;
    function oy() {
      return ka;
    }
    function Ta() {
      return (Ut & (Gr | qi)) !== Sr ? Jn() : (sv !== ln || (sv = Jn()), sv);
    }
    function ts(e) {
      var t = e.mode;
      if ((t & Dt) === rt)
        return pt;
      if ((Ut & Gr) !== Sr && Cr !== le)
        return Us(Cr);
      var a = uw() !== lw;
      if (a) {
        if (Yr.transition !== null) {
          var i = Yr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return iy === It && (iy = Xd()), iy;
      }
      var l = $a();
      if (l !== It)
        return l;
      var s = Wx();
      return s;
    }
    function vk(e) {
      var t = e.mode;
      return (t & Dt) === rt ? pt : ch();
    }
    function xr(e, t, a, i) {
      Pk(), GS && m("useInsertionEffect must not schedule updates."), C1 && (ry = !0), Mu(e, a, i), (Ut & Gr) !== le && e === ka ? Vk(t) : (ia && Fs(e, t, a), Hk(t), e === ka && ((Ut & Gr) === Sr && (av = bt(av, a)), Er === nv && ns(e, Cr)), Qa(e, i), a === pt && Ut === Sr && (t.mode & Dt) === rt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !xo.isBatchingLegacy && (ov(), G_()));
    }
    function hk(e, t, a) {
      var i = e.current;
      i.lanes = t, Mu(e, t, a), Qa(e, a);
    }
    function mk(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ut & Gr) !== Sr
      );
    }
    function Qa(e, t) {
      var a = e.callbackNode;
      df(e, t);
      var i = ff(e, e === ka ? Cr : le);
      if (i === le) {
        a !== null && cC(a), e.callbackNode = null, e.callbackPriority = It;
        return;
      }
      var l = Wo(i), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(xo.current !== null && a !== T1)) {
        a == null && s !== pt && m("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && cC(a);
      var d;
      if (l === pt)
        e.tag === Bu ? (xo.isBatchingLegacy !== null && (xo.didScheduleLegacyUpdate = !0), Bb(XS.bind(null, e))) : Y_(XS.bind(null, e)), xo.current !== null ? xo.current.push(qu) : Gx(function() {
          (Ut & (Gr | qi)) === Sr && qu();
        }), d = null;
      else {
        var y;
        switch (yh(i)) {
          case zr:
            y = Es;
            break;
          case Ai:
            y = Ho;
            break;
          case Va:
            y = io;
            break;
          case Ha:
            y = kl;
            break;
          default:
            y = io;
            break;
        }
        d = D1(y, QS.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = d;
    }
    function QS(e, t) {
      if (jw(), sv = ln, iy = le, (Ut & (Gr | qi)) !== Sr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = nu();
      if (i && e.callbackNode !== a)
        return null;
      var l = ff(e, e === ka ? Cr : le);
      if (l === le)
        return null;
      var s = !vf(e, l) && !sh(e, l) && !t, d = s ? Rk(e, l) : uy(e, l);
      if (d !== Zl) {
        if (d === vc) {
          var y = pf(e);
          y !== le && (l = y, d = E1(e, y));
        }
        if (d === tv) {
          var g = rv;
          throw mc(e, le), ns(e, l), Qa(e, Jn()), g;
        }
        if (d === v1)
          ns(e, l);
        else {
          var x = !vf(e, l), k = e.current.alternate;
          if (x && !gk(k)) {
            if (d = uy(e, l), d === vc) {
              var z = pf(e);
              z !== le && (l = z, d = E1(e, z));
            }
            if (d === tv) {
              var A = rv;
              throw mc(e, le), ns(e, l), Qa(e, Jn()), A;
            }
          }
          e.finishedWork = k, e.finishedLanes = l, yk(e, d, l);
        }
      }
      return Qa(e, Jn()), e.callbackNode === a ? QS.bind(null, e) : null;
    }
    function E1(e, t) {
      var a = iv;
      if (yf(e)) {
        var i = mc(e, t);
        i.flags |= kr, zb(e.containerInfo);
      }
      var l = uy(e, t);
      if (l !== vc) {
        var s = Ga;
        Ga = a, s !== null && KS(s);
      }
      return l;
    }
    function KS(e) {
      Ga === null ? Ga = e : Ga.push.apply(Ga, e);
    }
    function yk(e, t, a) {
      switch (t) {
        case Zl:
        case tv:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case vc: {
          yc(e, Ga, eu);
          break;
        }
        case Zm: {
          if (ns(e, a), Pl(a) && // do not delay if we're inside an act() scope
          !fC()) {
            var i = m1 + qS - Jn();
            if (i > 10) {
              var l = ff(e, le);
              if (l !== le)
                break;
              var s = e.suspendedLanes;
              if (!Fl(s, a)) {
                Ta(), hf(e, s);
                break;
              }
              e.timeoutHandle = _g(yc.bind(null, e, Ga, eu), i);
              break;
            }
          }
          yc(e, Ga, eu);
          break;
        }
        case nv: {
          if (ns(e, a), Qd(a))
            break;
          if (!fC()) {
            var d = di(e, a), y = d, g = Jn() - y, x = zk(g) - g;
            if (x > 10) {
              e.timeoutHandle = _g(yc.bind(null, e, Ga, eu), x);
              break;
            }
          }
          yc(e, Ga, eu);
          break;
        }
        case BS: {
          yc(e, Ga, eu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function gk(e) {
      for (var t = e; ; ) {
        if (t.flags & ku) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var s = i[l], d = s.getSnapshot, y = s.value;
                try {
                  if (!fe(d(), y))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var g = t.child;
        if (t.subtreeFlags & ku && g !== null) {
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
    function ns(e, t) {
      t = zs(t, ty), t = zs(t, av), ph(e, t);
    }
    function XS(e) {
      if (Aw(), (Ut & (Gr | qi)) !== Sr)
        throw new Error("Should not already be working.");
      nu();
      var t = ff(e, le);
      if (!la(t, pt))
        return Qa(e, Jn()), null;
      var a = uy(e, t);
      if (e.tag !== Bu && a === vc) {
        var i = pf(e);
        i !== le && (t = i, a = E1(e, i));
      }
      if (a === tv) {
        var l = rv;
        throw mc(e, le), ns(e, t), Qa(e, Jn()), l;
      }
      if (a === v1)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, yc(e, Ga, eu), Qa(e, Jn()), null;
    }
    function _k(e, t) {
      t !== le && (mf(e, bt(t, pt)), Qa(e, Jn()), (Ut & (Gr | qi)) === Sr && (ov(), qu()));
    }
    function x1(e, t) {
      var a = Ut;
      Ut |= $S;
      try {
        return e(t);
      } finally {
        Ut = a, Ut === Sr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !xo.isBatchingLegacy && (ov(), G_());
      }
    }
    function Sk(e, t, a, i, l) {
      var s = $a(), d = Yr.transition;
      try {
        return Yr.transition = null, $n(zr), e(t, a, i, l);
      } finally {
        $n(s), Yr.transition = d, Ut === Sr && ov();
      }
    }
    function tu(e) {
      es !== null && es.tag === Bu && (Ut & (Gr | qi)) === Sr && nu();
      var t = Ut;
      Ut |= $S;
      var a = Yr.transition, i = $a();
      try {
        return Yr.transition = null, $n(zr), e ? e() : void 0;
      } finally {
        $n(i), Yr.transition = a, Ut = t, (Ut & (Gr | qi)) === Sr && qu();
      }
    }
    function JS() {
      return (Ut & (Gr | qi)) !== Sr;
    }
    function ly(e, t) {
      da(h1, ul, e), ul = bt(ul, t);
    }
    function b1(e) {
      ul = h1.current, fa(h1, e);
    }
    function mc(e, t) {
      e.finishedWork = null, e.finishedLanes = le;
      var a = e.timeoutHandle;
      if (a !== Sg && (e.timeoutHandle = Sg, Yx(a)), An !== null)
        for (var i = An.return; i !== null; ) {
          var l = i.alternate;
          kS(l, i), i = i.return;
        }
      ka = e;
      var s = gc(e.current, null);
      return An = s, Cr = ul = t, Er = Zl, rv = null, ey = le, av = le, ty = le, iv = null, Ga = null, hw(), ho.discardPendingWarnings(), s;
    }
    function ZS(e, t) {
      do {
        var a = An;
        try {
          if (ym(), x2(), hn(), p1.current = null, a === null || a.return === null) {
            Er = tv, rv = t, An = null;
            return;
          }
          if (Ie && a.mode & Ht && Wm(a, !0), tt)
            if (xa(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              ji(a, i, Cr);
            } else
              bs(a, t, Cr);
          Bw(e, a.return, a, t, Cr), rC(a);
        } catch (l) {
          t = l, An === a && a !== null ? (a = a.return, An = a) : a = An;
          continue;
        }
        return;
      } while (!0);
    }
    function eC() {
      var e = d1.current;
      return d1.current = Vm, e === null ? Vm : e;
    }
    function tC(e) {
      d1.current = e;
    }
    function Ck() {
      m1 = Jn();
    }
    function cv(e) {
      ey = bt(e, ey);
    }
    function Ek() {
      Er === Zl && (Er = Zm);
    }
    function w1() {
      (Er === Zl || Er === Zm || Er === vc) && (Er = nv), ka !== null && (As(ey) || As(av)) && ns(ka, Cr);
    }
    function xk(e) {
      Er !== nv && (Er = vc), iv === null ? iv = [e] : iv.push(e);
    }
    function bk() {
      return Er === Zl;
    }
    function uy(e, t) {
      var a = Ut;
      Ut |= Gr;
      var i = eC();
      if (ka !== e || Cr !== t) {
        if (ia) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (fv(e, Cr), l.clear()), vh(e, t);
        }
        eu = tp(), mc(e, t);
      }
      Nl(t);
      do
        try {
          wk();
          break;
        } catch (s) {
          ZS(e, s);
        }
      while (!0);
      if (ym(), Ut = a, tC(i), An !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Wc(), ka = null, Cr = le, Er;
    }
    function wk() {
      for (; An !== null; )
        nC(An);
    }
    function Rk(e, t) {
      var a = Ut;
      Ut |= Gr;
      var i = eC();
      if (ka !== e || Cr !== t) {
        if (ia) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (fv(e, Cr), l.clear()), vh(e, t);
        }
        eu = tp(), ov(), mc(e, t);
      }
      Nl(t);
      do
        try {
          kk();
          break;
        } catch (s) {
          ZS(e, s);
        }
      while (!0);
      return ym(), tC(i), Ut = a, An !== null ? (ih(), Zl) : (Wc(), ka = null, Cr = le, Er);
    }
    function kk() {
      for (; An !== null && !jd(); )
        nC(An);
    }
    function nC(e) {
      var t = e.alternate;
      en(e);
      var a;
      (e.mode & Ht) !== rt ? (T0(e), a = R1(t, e, ul), Wm(e, !0)) : a = R1(t, e, ul), hn(), e.memoizedProps = e.pendingProps, a === null ? rC(e) : An = a, p1.current = null;
    }
    function rC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Cs) === nt) {
          en(t);
          var l = void 0;
          if ((t.mode & Ht) === rt ? l = RS(a, t, ul) : (T0(t), l = RS(a, t, ul), Wm(t, !1)), hn(), l !== null) {
            An = l;
            return;
          }
        } else {
          var s = ER(a, t);
          if (s !== null) {
            s.flags &= Zv, An = s;
            return;
          }
          if ((t.mode & Ht) !== rt) {
            Wm(t, !1);
            for (var d = t.actualDuration, y = t.child; y !== null; )
              d += y.actualDuration, y = y.sibling;
            t.actualDuration = d;
          }
          if (i !== null)
            i.flags |= Cs, i.subtreeFlags = nt, i.deletions = null;
          else {
            Er = v1, An = null;
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
      Er === Zl && (Er = BS);
    }
    function yc(e, t, a) {
      var i = $a(), l = Yr.transition;
      try {
        Yr.transition = null, $n(zr), Tk(e, t, a, i);
      } finally {
        Yr.transition = l, $n(i);
      }
      return null;
    }
    function Tk(e, t, a, i) {
      do
        nu();
      while (es !== null);
      if (Fk(), (Ut & (Gr | qi)) !== Sr)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (Id(s), l === null)
        return Vd(), null;
      if (s === le && m("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = le, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = It;
      var d = bt(l.lanes, l.childLanes);
      Zd(e, d), e === ka && (ka = null, An = null, Cr = le), ((l.subtreeFlags & ao) !== nt || (l.flags & ao) !== nt) && (hc || (hc = !0, _1 = a, D1(io, function() {
        return nu(), null;
      })));
      var y = (l.subtreeFlags & (Fo | Io | Vo | ao)) !== nt, g = (l.flags & (Fo | Io | Vo | ao)) !== nt;
      if (y || g) {
        var x = Yr.transition;
        Yr.transition = null;
        var k = $a();
        $n(zr);
        var z = Ut;
        Ut |= qi, p1.current = null, kR(e, l), G2(), VR(e, l, s), Ix(e.containerInfo), e.current = l, ws(s), HR(l, e, s), Rs(), Ad(), Ut = z, $n(k), Yr.transition = x;
      } else
        e.current = l, G2();
      var A = hc;
      if (hc ? (hc = !1, es = e, lv = s) : (rd = 0, ay = null), d = e.pendingLanes, d === le && (nd = null), A || lC(e.current, !1), zd(l.stateNode, i), ia && e.memoizedUpdaters.clear(), lk(), Qa(e, Jn()), t !== null)
        for (var W = e.onRecoverableError, K = 0; K < t.length; K++) {
          var te = t[K], Ae = te.stack, ut = te.digest;
          W(te.value, {
            componentStack: Ae,
            digest: ut
          });
        }
      if (ny) {
        ny = !1;
        var Ze = y1;
        throw y1 = null, Ze;
      }
      return la(lv, pt) && e.tag !== Bu && nu(), d = e.pendingLanes, la(d, pt) ? (Lw(), e === S1 ? uv++ : (uv = 0, S1 = e)) : uv = 0, qu(), Vd(), null;
    }
    function nu() {
      if (es !== null) {
        var e = yh(lv), t = Vs(Va, e), a = Yr.transition, i = $a();
        try {
          return Yr.transition = null, $n(t), Ok();
        } finally {
          $n(i), Yr.transition = a;
        }
      }
      return !1;
    }
    function Dk(e) {
      g1.push(e), hc || (hc = !0, D1(io, function() {
        return nu(), null;
      }));
    }
    function Ok() {
      if (es === null)
        return !1;
      var e = _1;
      _1 = null;
      var t = es, a = lv;
      if (es = null, lv = le, (Ut & (Gr | qi)) !== Sr)
        throw new Error("Cannot flush passive effects while already rendering.");
      C1 = !0, ry = !1, Ol(a);
      var i = Ut;
      Ut |= qi, QR(t.current), qR(t, t.current, a, e);
      {
        var l = g1;
        g1 = [];
        for (var s = 0; s < l.length; s++) {
          var d = l[s];
          NR(t, d);
        }
      }
      Bd(), lC(t.current, !0), Ut = i, qu(), ry ? t === ay ? rd++ : (rd = 0, ay = t) : rd = 0, C1 = !1, ry = !1, Pd(t);
      {
        var y = t.current.stateNode;
        y.effectDuration = 0, y.passiveEffectDuration = 0;
      }
      return !0;
    }
    function aC(e) {
      return nd !== null && nd.has(e);
    }
    function Nk(e) {
      nd === null ? nd = /* @__PURE__ */ new Set([e]) : nd.add(e);
    }
    function Mk(e) {
      ny || (ny = !0, y1 = e);
    }
    var Lk = Mk;
    function iC(e, t, a) {
      var i = dc(a, t), l = nS(e, i, pt), s = Yu(e, l, pt), d = Ta();
      s !== null && (Mu(s, pt, d), Qa(s, d));
    }
    function mn(e, t, a) {
      if (bR(a), dv(!1), e.tag === F) {
        iC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === F) {
          iC(i, e, a);
          return;
        } else if (i.tag === w) {
          var l = i.type, s = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !aC(s)) {
            var d = dc(a, e), y = W0(i, d, pt), g = Yu(i, y, pt), x = Ta();
            g !== null && (Mu(g, pt, x), Qa(g, x));
            return;
          }
        }
        i = i.return;
      }
      m(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function jk(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = Ta();
      hf(e, a), $k(e), ka === e && Fl(Cr, a) && (Er === nv || Er === Zm && Pl(Cr) && Jn() - m1 < qS ? mc(e, le) : ty = bt(ty, a)), Qa(e, l);
    }
    function oC(e, t) {
      t === It && (t = vk(e));
      var a = Ta(), i = Wa(e, t);
      i !== null && (Mu(i, t, a), Qa(i, a));
    }
    function Ak(e) {
      var t = e.memoizedState, a = It;
      t !== null && (a = t.retryLane), oC(e, a);
    }
    function Uk(e, t) {
      var a = It, i;
      switch (e.tag) {
        case he:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case ve:
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
      if (uv > dk)
        throw uv = 0, S1 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      rd > pk && (rd = 0, ay = null, m("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Fk() {
      ho.flushLegacyContextWarning(), ho.flushPendingUnsafeLifecycleWarnings();
    }
    function lC(e, t) {
      en(e), sy(e, Po, ak), t && sy(e, Ni, ik), sy(e, Po, nk), t && sy(e, Ni, rk), hn();
    }
    function sy(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== nt ? i = i.child : ((i.flags & t) !== nt && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var cy = null;
    function uC(e) {
      {
        if ((Ut & Gr) !== Sr || !(e.mode & Dt))
          return;
        var t = e.tag;
        if (t !== M && t !== F && t !== w && t !== R && t !== Se && t !== Me && t !== Le)
          return;
        var a = yt(e) || "ReactComponent";
        if (cy !== null) {
          if (cy.has(a))
            return;
          cy.add(a);
        } else
          cy = /* @__PURE__ */ new Set([a]);
        var i = fr;
        try {
          en(e), m("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? en(e) : hn();
        }
      }
    }
    var R1;
    {
      var Ik = null;
      R1 = function(e, t, a) {
        var i = mC(Ik, t);
        try {
          return CS(e, t, a);
        } catch (s) {
          if (Jb() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (ym(), x2(), kS(e, t), mC(t, i), t.mode & Ht && T0(t), zo(null, CS, null, e, t, a), no()) {
            var l = Ss();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var sC = !1, k1;
    k1 = /* @__PURE__ */ new Set();
    function Vk(e) {
      if (bi && !Ow())
        switch (e.tag) {
          case R:
          case Se:
          case Le: {
            var t = An && yt(An) || "Unknown", a = t;
            if (!k1.has(a)) {
              k1.add(a);
              var i = yt(e) || "Unknown";
              m("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case w: {
            sC || (m("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), sC = !0);
            break;
          }
        }
    }
    function fv(e, t) {
      if (ia) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Fs(e, i, t);
        });
      }
    }
    var T1 = {};
    function D1(e, t) {
      {
        var a = xo.current;
        return a !== null ? (a.push(t), T1) : Ld(e, t);
      }
    }
    function cC(e) {
      if (e !== T1)
        return th(e);
    }
    function fC() {
      return xo.current !== null;
    }
    function Hk(e) {
      {
        if (e.mode & Dt) {
          if (!HS())
            return;
        } else if (!sk() || Ut !== Sr || e.tag !== R && e.tag !== Se && e.tag !== Le)
          return;
        if (xo.current === null) {
          var t = fr;
          try {
            en(e), m(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, yt(e));
          } finally {
            t ? en(e) : hn();
          }
        }
      }
    }
    function $k(e) {
      e.tag !== Bu && HS() && xo.current === null && m(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function dv(e) {
      GS = e;
    }
    var Wi = null, ad = null, Bk = function(e) {
      Wi = e;
    };
    function id(e) {
      {
        if (Wi === null)
          return e;
        var t = Wi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function O1(e) {
      return id(e);
    }
    function N1(e) {
      {
        if (Wi === null)
          return e;
        var t = Wi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = id(e.render);
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
    function dC(e, t) {
      {
        if (Wi === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case w: {
            typeof i == "function" && (l = !0);
            break;
          }
          case R: {
            (typeof i == "function" || s === _t) && (l = !0);
            break;
          }
          case Se: {
            (s === oe || s === _t) && (l = !0);
            break;
          }
          case Me:
          case Le: {
            (s === Et || s === _t) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var d = Wi(a);
          if (d !== void 0 && d === Wi(i))
            return !0;
        }
        return !1;
      }
    }
    function pC(e) {
      {
        if (Wi === null || typeof WeakSet != "function")
          return;
        ad === null && (ad = /* @__PURE__ */ new WeakSet()), ad.add(e);
      }
    }
    var qk = function(e, t) {
      {
        if (Wi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        nu(), tu(function() {
          M1(e.current, i, a);
        });
      }
    }, Wk = function(e, t) {
      {
        if (e.context !== hi)
          return;
        nu(), tu(function() {
          pv(t, e, null, null);
        });
      }
    };
    function M1(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, d = e.tag, y = e.type, g = null;
        switch (d) {
          case R:
          case Le:
          case w:
            g = y;
            break;
          case Se:
            g = y.render;
            break;
        }
        if (Wi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var x = !1, k = !1;
        if (g !== null) {
          var z = Wi(g);
          z !== void 0 && (a.has(z) ? k = !0 : t.has(z) && (d === w ? k = !0 : x = !0));
        }
        if (ad !== null && (ad.has(e) || i !== null && ad.has(i)) && (k = !0), k && (e._debugNeedsRemount = !0), k || x) {
          var A = Wa(e, pt);
          A !== null && xr(A, e, pt, ln);
        }
        l !== null && !k && M1(l, t, a), s !== null && M1(s, t, a);
      }
    }
    var Yk = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return L1(e.current, i, a), a;
      }
    };
    function L1(e, t, a) {
      {
        var i = e.child, l = e.sibling, s = e.tag, d = e.type, y = null;
        switch (s) {
          case R:
          case Le:
          case w:
            y = d;
            break;
          case Se:
            y = d.render;
            break;
        }
        var g = !1;
        y !== null && t.has(y) && (g = !0), g ? Gk(e, a) : i !== null && L1(i, t, a), l !== null && L1(l, t, a);
      }
    }
    function Gk(e, t) {
      {
        var a = Qk(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case B:
              t.add(i.stateNode);
              return;
            case I:
              t.add(i.stateNode.containerInfo);
              return;
            case F:
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
        if (a.tag === B)
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
    var j1;
    {
      j1 = !1;
      try {
        var vC = Object.preventExtensions({});
      } catch {
        j1 = !0;
      }
    }
    function Kk(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = nt, this.subtreeFlags = nt, this.deletions = null, this.lanes = le, this.childLanes = le, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !j1 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var mi = function(e, t, a, i) {
      return new Kk(e, t, a, i);
    };
    function A1(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Xk(e) {
      return typeof e == "function" && !A1(e) && e.defaultProps === void 0;
    }
    function Jk(e) {
      if (typeof e == "function")
        return A1(e) ? w : R;
      if (e != null) {
        var t = e.$$typeof;
        if (t === oe)
          return Se;
        if (t === Et)
          return Me;
      }
      return M;
    }
    function gc(e, t) {
      var a = e.alternate;
      a === null ? (a = mi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = nt, a.subtreeFlags = nt, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & In, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case M:
        case R:
        case Le:
          a.type = id(e.type);
          break;
        case w:
          a.type = O1(e.type);
          break;
        case Se:
          a.type = N1(e.type);
          break;
      }
      return a;
    }
    function Zk(e, t) {
      e.flags &= In | Cn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = le, e.lanes = t, e.child = null, e.subtreeFlags = nt, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = nt, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
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
      return e === lm ? (i = Dt, t === !0 && (i |= rn, i |= $t)) : i = rt, ia && (i |= Ht), mi(F, null, null, i);
    }
    function U1(e, t, a, i, l, s) {
      var d = M, y = e;
      if (typeof e == "function")
        A1(e) ? (d = w, y = O1(y)) : y = id(y);
      else if (typeof e == "string")
        d = B;
      else
        e: switch (e) {
          case Si:
            return rs(a.children, l, s, t);
          case ti:
            d = Ee, l |= rn, (l & Dt) !== rt && (l |= $t);
            break;
          case Ci:
            return tT(a, l, s, t);
          case Oe:
            return nT(a, l, s, t);
          case We:
            return rT(a, l, s, t);
          case Dn:
            return hC(a, l, s, t);
          case cn:
          // eslint-disable-next-line no-fallthrough
          case Ot:
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
                case Ei:
                  d = ge;
                  break e;
                case L:
                  d = _e;
                  break e;
                case oe:
                  d = Se, y = N1(y);
                  break e;
                case Et:
                  d = Me;
                  break e;
                case _t:
                  d = He, y = null;
                  break e;
              }
            var g = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var x = i ? yt(i) : null;
              x && (g += `

Check the render method of \`` + x + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + g));
          }
        }
      var k = mi(d, a, t, l);
      return k.elementType = e, k.type = y, k.lanes = s, k._debugOwner = i, k;
    }
    function z1(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, d = e.props, y = U1(l, s, d, i, t, a);
      return y._debugSource = e._source, y._debugOwner = e._owner, y;
    }
    function rs(e, t, a, i) {
      var l = mi(Z, e, i, t);
      return l.lanes = a, l;
    }
    function tT(e, t, a, i) {
      typeof e.id != "string" && m('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = mi(Ne, e, i, t | Ht);
      return l.elementType = Ci, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function nT(e, t, a, i) {
      var l = mi(he, e, i, t);
      return l.elementType = Oe, l.lanes = a, l;
    }
    function rT(e, t, a, i) {
      var l = mi(ve, e, i, t);
      return l.elementType = We, l.lanes = a, l;
    }
    function hC(e, t, a, i) {
      var l = mi(X, e, i, t);
      l.elementType = Dn, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function P1(e, t, a) {
      var i = mi(ie, e, null, t);
      return i.lanes = a, i;
    }
    function aT() {
      var e = mi(B, null, null, rt);
      return e.elementType = "DELETED", e;
    }
    function iT(e) {
      var t = mi(at, null, null, rt);
      return t.stateNode = e, t;
    }
    function F1(e, t, a) {
      var i = e.children !== null ? e.children : [], l = mi(I, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function mC(e, t) {
      return e === null && (e = mi(M, null, null, rt)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function oT(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Sg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = It, this.eventTimes = Ps(le), this.expirationTimes = Ps(ln), this.pendingLanes = le, this.suspendedLanes = le, this.pingedLanes = le, this.expiredLanes = le, this.mutableReadLanes = le, this.finishedLanes = le, this.entangledLanes = le, this.entanglements = Ps(le), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], d = 0; d < Ml; d++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case lm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Bu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function yC(e, t, a, i, l, s, d, y, g, x) {
      var k = new oT(e, t, a, y, g), z = eT(t, s);
      k.current = z, z.stateNode = k;
      {
        var A = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        z.memoizedState = A;
      }
      return Jg(z), k;
    }
    var I1 = "18.3.1";
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
    var V1, H1;
    V1 = !1, H1 = {};
    function gC(e) {
      if (!e)
        return hi;
      var t = Ru(e), a = $b(t);
      if (t.tag === w) {
        var i = t.type;
        if (tl(i))
          return q_(t, i, a);
      }
      return a;
    }
    function uT(e, t) {
      {
        var a = Ru(e);
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
          var s = yt(a) || "Component";
          if (!H1[s]) {
            H1[s] = !0;
            var d = fr;
            try {
              en(l), a.mode & rn ? m("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : m("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              d ? en(d) : hn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function _C(e, t, a, i, l, s, d, y) {
      var g = !1, x = null;
      return yC(e, t, g, x, a, i, l, s, d);
    }
    function SC(e, t, a, i, l, s, d, y, g, x) {
      var k = !0, z = yC(a, i, k, e, l, s, d, y, g);
      z.context = gC(null);
      var A = z.current, W = Ta(), K = ts(A), te = Xl(W, K);
      return te.callback = t ?? null, Yu(A, te, K), hk(z, K, W), z;
    }
    function pv(e, t, a, i) {
      Ud(t, e);
      var l = t.current, s = Ta(), d = ts(l);
      xn(d);
      var y = gC(a);
      t.context === null ? t.context = y : t.pendingContext = y, bi && fr !== null && !V1 && (V1 = !0, m(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, yt(fr) || "Unknown"));
      var g = Xl(s, d);
      g.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && m("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), g.callback = i);
      var x = Yu(l, g, d);
      return x !== null && (xr(x, l, d, s), Em(x, l, d)), d;
    }
    function fy(e) {
      var t = e.current;
      return t.child ? t.child.tag === B ? t.child.stateNode : t.child.stateNode : null;
    }
    function sT(e) {
      switch (e.tag) {
        case F: {
          var t = e.stateNode;
          if (yf(t)) {
            var a = lh(t);
            _k(t, a);
          }
          break;
        }
        case he: {
          tu(function() {
            var l = Wa(e, pt);
            if (l !== null) {
              var s = Ta();
              xr(l, e, pt, s);
            }
          });
          var i = pt;
          $1(e, i);
          break;
        }
      }
    }
    function CC(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = dh(a.retryLane, t));
    }
    function $1(e, t) {
      CC(e, t);
      var a = e.alternate;
      a && CC(a, t);
    }
    function cT(e) {
      if (e.tag === he) {
        var t = Ms, a = Wa(e, t);
        if (a !== null) {
          var i = Ta();
          xr(a, e, t, i);
        }
        $1(e, t);
      }
    }
    function fT(e) {
      if (e.tag === he) {
        var t = ts(e), a = Wa(e, t);
        if (a !== null) {
          var i = Ta();
          xr(a, e, t, i);
        }
        $1(e, t);
      }
    }
    function EC(e) {
      var t = yn(e);
      return t === null ? null : t.stateNode;
    }
    var xC = function(e) {
      return null;
    };
    function dT(e) {
      return xC(e);
    }
    var bC = function(e) {
      return !1;
    };
    function pT(e) {
      return bC(e);
    }
    var wC = null, RC = null, kC = null, TC = null, DC = null, OC = null, NC = null, MC = null, LC = null;
    {
      var jC = function(e, t, a) {
        var i = t[a], l = kt(e) ? e.slice() : wt({}, e);
        return a + 1 === t.length ? (kt(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = jC(e[i], t, a + 1), l);
      }, AC = function(e, t) {
        return jC(e, t, 0);
      }, UC = function(e, t, a, i) {
        var l = t[i], s = kt(e) ? e.slice() : wt({}, e);
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
        var l = t[a], s = kt(e) ? e.slice() : wt({}, e);
        return s[l] = PC(e[l], t, a + 1, i), s;
      }, FC = function(e, t, a) {
        return PC(e, t, 0, a);
      }, B1 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      wC = function(e, t, a, i) {
        var l = B1(e, t);
        if (l !== null) {
          var s = FC(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = wt({}, e.memoizedProps);
          var d = Wa(e, pt);
          d !== null && xr(d, e, pt, ln);
        }
      }, RC = function(e, t, a) {
        var i = B1(e, t);
        if (i !== null) {
          var l = AC(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = wt({}, e.memoizedProps);
          var s = Wa(e, pt);
          s !== null && xr(s, e, pt, ln);
        }
      }, kC = function(e, t, a, i) {
        var l = B1(e, t);
        if (l !== null) {
          var s = zC(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = wt({}, e.memoizedProps);
          var d = Wa(e, pt);
          d !== null && xr(d, e, pt, ln);
        }
      }, TC = function(e, t, a) {
        e.pendingProps = FC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Wa(e, pt);
        i !== null && xr(i, e, pt, ln);
      }, DC = function(e, t) {
        e.pendingProps = AC(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Wa(e, pt);
        a !== null && xr(a, e, pt, ln);
      }, OC = function(e, t, a) {
        e.pendingProps = zC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Wa(e, pt);
        i !== null && xr(i, e, pt, ln);
      }, NC = function(e) {
        var t = Wa(e, pt);
        t !== null && xr(t, e, pt, ln);
      }, MC = function(e) {
        xC = e;
      }, LC = function(e) {
        bC = e;
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
      var t = e.findFiberByHostInstance, a = v.ReactCurrentDispatcher;
      return Du({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: wC,
        overrideHookStateDeletePath: RC,
        overrideHookStateRenamePath: kC,
        overrideProps: TC,
        overridePropsDeletePath: DC,
        overridePropsRenamePath: OC,
        setErrorHandler: MC,
        setSuspenseHandler: LC,
        scheduleUpdate: NC,
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
        reconcilerVersion: I1
      });
    }
    var IC = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function q1(e) {
      this._internalRoot = e;
    }
    dy.prototype.render = q1.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? m("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : py(arguments[1]) ? m("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && m("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Pn) {
          var i = EC(t.current);
          i && i.parentNode !== a && m("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      pv(e, t, null, null);
    }, dy.prototype.unmount = q1.prototype.unmount = function() {
      typeof arguments[0] == "function" && m("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        JS() && m("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), tu(function() {
          pv(null, e, null, null);
        }), I_(t);
      }
    };
    function gT(e, t) {
      if (!py(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      VC(e);
      var a = !1, i = !1, l = "", s = IC;
      t != null && (t.hydrate ? E("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Lr && m(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var d = _C(e, lm, null, a, i, l, s);
      em(d.current, e);
      var y = e.nodeType === Pn ? e.parentNode : e;
      return _p(y), new q1(d);
    }
    function dy(e) {
      this._internalRoot = e;
    }
    function _T(e) {
      e && Eh(e);
    }
    dy.prototype.unstable_scheduleHydration = _T;
    function ST(e, t, a) {
      if (!py(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      VC(e), t === void 0 && m("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, s = !1, d = !1, y = "", g = IC;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (y = a.identifierPrefix), a.onRecoverableError !== void 0 && (g = a.onRecoverableError));
      var x = SC(t, null, e, lm, i, s, d, y, g);
      if (em(x.current, e), _p(e), l)
        for (var k = 0; k < l.length; k++) {
          var z = l[k];
          bw(x, z);
        }
      return new dy(x);
    }
    function py(e) {
      return !!(e && (e.nodeType === ea || e.nodeType === to || e.nodeType === Cd));
    }
    function vv(e) {
      return !!(e && (e.nodeType === ea || e.nodeType === to || e.nodeType === Cd || e.nodeType === Pn && e.nodeValue === " react-mount-point-unstable "));
    }
    function VC(e) {
      e.nodeType === ea && e.tagName && e.tagName.toUpperCase() === "BODY" && m("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Op(e) && (e._reactRootContainer ? m("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : m("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var CT = v.ReactCurrentOwner, HC;
    HC = function(e) {
      if (e._reactRootContainer && e.nodeType !== Pn) {
        var t = EC(e._reactRootContainer.current);
        t && t.parentNode !== e && m("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = W1(e), l = !!(i && Hu(i));
      l && !a && m("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ea && e.tagName && e.tagName.toUpperCase() === "BODY" && m("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function W1(e) {
      return e ? e.nodeType === to ? e.documentElement : e.firstChild : null;
    }
    function $C() {
    }
    function ET(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var A = fy(d);
            s.call(A);
          };
        }
        var d = SC(
          t,
          i,
          e,
          Bu,
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
        e._reactRootContainer = d, em(d.current, e);
        var y = e.nodeType === Pn ? e.parentNode : e;
        return _p(y), tu(), d;
      } else {
        for (var g; g = e.lastChild; )
          e.removeChild(g);
        if (typeof i == "function") {
          var x = i;
          i = function() {
            var A = fy(k);
            x.call(A);
          };
        }
        var k = _C(
          e,
          Bu,
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
        e._reactRootContainer = k, em(k.current, e);
        var z = e.nodeType === Pn ? e.parentNode : e;
        return _p(z), tu(function() {
          pv(t, k, a, i);
        }), k;
      }
    }
    function xT(e, t) {
      e !== null && typeof e != "function" && m("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function vy(e, t, a, i, l) {
      HC(a), xT(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, d;
      if (!s)
        d = ET(a, t, e, l, i);
      else {
        if (d = s, typeof l == "function") {
          var y = l;
          l = function() {
            var g = fy(d);
            y.call(g);
          };
        }
        pv(t, d, e, l);
      }
      return fy(d);
    }
    var BC = !1;
    function bT(e) {
      {
        BC || (BC = !0, m("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = CT.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || m("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Pt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ea ? e : uT(e, "findDOMNode");
    }
    function wT(e, t, a) {
      if (m("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !vv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Op(t) && t._reactRootContainer === void 0;
        i && m("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return vy(null, e, t, !0, a);
    }
    function RT(e, t, a) {
      if (m("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !vv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Op(t) && t._reactRootContainer === void 0;
        i && m("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return vy(null, e, t, !1, a);
    }
    function kT(e, t, a, i) {
      if (m("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !vv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !$y(e))
        throw new Error("parentComponent must be a valid React Component");
      return vy(e, t, a, !1, i);
    }
    var qC = !1;
    function TT(e) {
      if (qC || (qC = !0, m("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !vv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Op(e) && e._reactRootContainer === void 0;
        t && m("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = W1(e), i = a && !Hu(a);
          i && m("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return tu(function() {
          vy(null, null, e, !1, function() {
            e._reactRootContainer = null, I_(e);
          });
        }), !0;
      } else {
        {
          var l = W1(e), s = !!(l && Hu(l)), d = e.nodeType === ea && vv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && m("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", d ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Dr(sT), Lu(cT), gh(fT), $s($a), np(hh), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && m("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Lc(Ox), Hy(x1, Sk, tu);
    function DT(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!py(t))
        throw new Error("Target container is not a DOM element.");
      return lT(e, t, null, a);
    }
    function OT(e, t, a, i) {
      return kT(e, t, a, i);
    }
    var Y1 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Hu, Uf, tm, Eu, jc, x1]
    };
    function NT(e, t) {
      return Y1.usingClientEntryPoint || m('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), gT(e, t);
    }
    function MT(e, t, a) {
      return Y1.usingClientEntryPoint || m('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), ST(e, t, a);
    }
    function LT(e) {
      return JS() && m("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), tu(e);
    }
    var jT = yT({
      findFiberByHostInstance: rc,
      bundleType: 1,
      version: I1,
      rendererPackageName: "react-dom"
    });
    if (!jT && Un && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var WC = window.location.protocol;
      /^(https?|file):$/.test(WC) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (WC === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y1, Xa.createPortal = DT, Xa.createRoot = NT, Xa.findDOMNode = bT, Xa.flushSync = LT, Xa.hydrate = wT, Xa.hydrateRoot = MT, Xa.render = RT, Xa.unmountComponentAtNode = TT, Xa.unstable_batchedUpdates = x1, Xa.unstable_renderSubtreeIntoContainer = OT, Xa.version = I1, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })()), Xa;
}
var vE;
function nL() {
  if (vE) return Sy.exports;
  vE = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (p) {
        console.error(p);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (f(), Sy.exports = eL()) : Sy.exports = tL(), Sy.exports;
}
var f_ = nL();
const gv = /* @__PURE__ */ DE(f_);
function a_(f, p) {
  (p == null || p > f.length) && (p = f.length);
  for (var v = 0, S = Array(p); v < p; v++) S[v] = f[v];
  return S;
}
function rL(f) {
  if (Array.isArray(f)) return f;
}
function aL(f) {
  if (Array.isArray(f)) return a_(f);
}
function iL(f) {
  if (f === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return f;
}
function hE(f, p, v, S, b, E, m) {
  try {
    var T = f[E](m), R = T.value;
  } catch (w) {
    return void v(w);
  }
  T.done ? p(R) : Promise.resolve(R).then(S, b);
}
function oL(f) {
  return function() {
    var p = this, v = arguments;
    return new Promise(function(S, b) {
      var E = f.apply(p, v);
      function m(R) {
        hE(E, S, b, m, T, "next", R);
      }
      function T(R) {
        hE(E, S, b, m, T, "throw", R);
      }
      m(void 0);
    });
  };
}
function Ry(f, p, v) {
  return p = i_(p), dL(f, FE() ? Reflect.construct(p, v || [], i_(f).constructor) : p.apply(f, v));
}
function Ev(f, p) {
  if (!(f instanceof p)) throw new TypeError("Cannot call a class as a function");
}
function mE(f, p) {
  for (var v = 0; v < p.length; v++) {
    var S = p[v];
    S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(f, by(S.key), S);
  }
}
function xv(f, p, v) {
  return p && mE(f.prototype, p), v && mE(f, v), Object.defineProperty(f, "prototype", { writable: !1 }), f;
}
function cd(f, p, v) {
  return (p = by(p)) in f ? Object.defineProperty(f, p, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : f[p] = v, f;
}
function Sc() {
  return (Sc = Object.assign ? Object.assign.bind() : function(f) {
    for (var p = 1; p < arguments.length; p++) {
      var v, S = arguments[p];
      for (v in S) !{}.hasOwnProperty.call(S, v) || (f[v] = S[v]);
    }
    return f;
  }).apply(null, arguments);
}
function i_(f) {
  return (i_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(p) {
    return p.__proto__ || Object.getPrototypeOf(p);
  })(f);
}
function ky(f, p) {
  if (typeof p != "function" && p !== null) throw new TypeError("Super expression must either be null or a function");
  f.prototype = Object.create(p && p.prototype, { constructor: { value: f, writable: !0, configurable: !0 } }), Object.defineProperty(f, "prototype", { writable: !1 }), p && IE(f, p);
}
function FE() {
  try {
    var f = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (FE = function() {
    return !!f;
  })();
}
function lL(f) {
  if (typeof Symbol < "u" && f[Symbol.iterator] != null || f["@@iterator"] != null) return Array.from(f);
}
function uL(f, p) {
  var v = f == null ? null : typeof Symbol < "u" && f[Symbol.iterator] || f["@@iterator"];
  if (v != null) {
    var S, b, E, m, T = [], R = !0, w = !1;
    try {
      if (E = (v = v.call(f)).next, p !== 0) for (; !(R = (S = E.call(v)).done) && (T.push(S.value), T.length !== p); R = !0) ;
    } catch (M) {
      w = !0, b = M;
    } finally {
      try {
        if (!R && v.return != null && (m = v.return(), Object(m) !== m)) return;
      } finally {
        if (w) throw b;
      }
    }
    return T;
  }
}
function sL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yE(f, p) {
  var v, S = Object.keys(f);
  return Object.getOwnPropertySymbols && (v = Object.getOwnPropertySymbols(f), p && (v = v.filter(function(b) {
    return Object.getOwnPropertyDescriptor(f, b).enumerable;
  })), S.push.apply(S, v)), S;
}
function ue(f) {
  for (var p = 1; p < arguments.length; p++) {
    var v = arguments[p] != null ? arguments[p] : {};
    p % 2 ? yE(Object(v), !0).forEach(function(S) {
      cd(f, S, v[S]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(v)) : yE(Object(v)).forEach(function(S) {
      Object.defineProperty(f, S, Object.getOwnPropertyDescriptor(v, S));
    });
  }
  return f;
}
function Gi(f, p) {
  if (f == null) return {};
  var v, S = fL(f, p);
  if (Object.getOwnPropertySymbols) for (var b = Object.getOwnPropertySymbols(f), E = 0; E < b.length; E++) v = b[E], p.includes(v) || {}.propertyIsEnumerable.call(f, v) && (S[v] = f[v]);
  return S;
}
function fL(f, p) {
  if (f == null) return {};
  var v, S = {};
  for (v in f) if ({}.hasOwnProperty.call(f, v)) {
    if (p.includes(v)) continue;
    S[v] = f[v];
  }
  return S;
}
function dL(f, p) {
  if (p && (typeof p == "object" || typeof p == "function")) return p;
  if (p !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return iL(f);
}
function ld() {
  ld = function() {
    return p;
  };
  var f, p = {}, v = Object.prototype, S = v.hasOwnProperty, b = Object.defineProperty || function(G, X, be) {
    G[X] = be.value;
  }, Se = typeof Symbol == "function" ? Symbol : {}, E = Se.iterator || "@@iterator", m = Se.asyncIterator || "@@asyncIterator", T = Se.toStringTag || "@@toStringTag";
  function R(G, X, be) {
    return Object.defineProperty(G, X, { value: be, enumerable: !0, configurable: !0, writable: !0 }), G[X];
  }
  try {
    R({}, "");
  } catch {
    R = function(X, be, qe) {
      return X[be] = qe;
    };
  }
  function w(G, me, be, P) {
    var Re, xe, re, De, me = me && me.prototype instanceof Ee ? me : Ee, me = Object.create(me.prototype), P = new at(P || []);
    return b(me, "_invoke", { value: (Re = G, xe = be, re = P, De = F, function(ee, tt) {
      if (De === B) throw Error("Generator is already running");
      if (De === ie) {
        if (ee === "throw") throw tt;
        return { value: f, done: !0 };
      }
      for (re.method = ee, re.arg = tt; ; ) {
        var Ie = re.delegate;
        if (Ie && (Ie = (function gt(ot, Ue) {
          var dt = Ue.method, ht = ot.iterator[dt];
          return ht === f ? (Ue.delegate = null, dt === "throw" && ot.iterator.return && (Ue.method = "return", Ue.arg = f, gt(ot, Ue), Ue.method === "throw") || dt !== "return" && (Ue.method = "throw", Ue.arg = new TypeError("The iterator does not provide a '" + dt + "' method")), Z) : (dt = M(ht, ot.iterator, Ue.arg), dt.type === "throw" ? (Ue.method = "throw", Ue.arg = dt.arg, Ue.delegate = null, Z) : (ht = dt.arg, ht ? ht.done ? (Ue[ot.resultName] = ht.value, Ue.next = ot.nextLoc, Ue.method !== "return" && (Ue.method = "next", Ue.arg = f), Ue.delegate = null, Z) : ht : (Ue.method = "throw", Ue.arg = new TypeError("iterator result is not an object"), Ue.delegate = null, Z)));
        })(Ie, re), Ie)) {
          if (Ie === Z) continue;
          return Ie;
        }
        if (re.method === "next") re.sent = re._sent = re.arg;
        else if (re.method === "throw") {
          if (De === F) throw De = ie, re.arg;
          re.dispatchException(re.arg);
        } else re.method === "return" && re.abrupt("return", re.arg);
        if (De = B, Ie = M(Re, xe, re), Ie.type === "normal") {
          if (De = re.done ? ie : I, Ie.arg === Z) continue;
          return { value: Ie.arg, done: re.done };
        }
        Ie.type === "throw" && (De = ie, re.method = "throw", re.arg = Ie.arg);
      }
    }) }), me;
  }
  function M(G, X, be) {
    try {
      return { type: "normal", arg: G.call(X, be) };
    } catch (qe) {
      return { type: "throw", arg: qe };
    }
  }
  p.wrap = w;
  var F = "suspendedStart", I = "suspendedYield", B = "executing", ie = "completed", Z = {};
  function Ee() {
  }
  function _e() {
  }
  function ge() {
  }
  var Se = {}, Ne = (R(Se, E, function() {
    return this;
  }), Object.getPrototypeOf), Ne = Ne && Ne(Ne(ve([]))), he = (Ne && Ne !== v && S.call(Ne, E) && (Se = Ne), ge.prototype = Ee.prototype = Object.create(Se));
  function Me(G) {
    ["next", "throw", "return"].forEach(function(X) {
      R(G, X, function(be) {
        return this._invoke(X, be);
      });
    });
  }
  function Le(G, X) {
    var be;
    b(this, "_invoke", { value: function(qe, Re) {
      function xe() {
        return new X(function(re, De) {
          (function me(ot, ee, tt, Ie) {
            var gt, ot = M(G[ot], G, ee);
            if (ot.type !== "throw") return (ee = (gt = ot.arg).value) && typeof ee == "object" && S.call(ee, "__await") ? X.resolve(ee.__await).then(function(Ue) {
              me("next", Ue, tt, Ie);
            }, function(Ue) {
              me("throw", Ue, tt, Ie);
            }) : X.resolve(ee).then(function(Ue) {
              gt.value = Ue, tt(gt);
            }, function(Ue) {
              return me("throw", Ue, tt, Ie);
            });
            Ie(ot.arg);
          })(qe, Re, re, De);
        });
      }
      return be = be ? be.then(xe, xe) : xe();
    } });
  }
  function He(G) {
    var X = { tryLoc: G[0] };
    1 in G && (X.catchLoc = G[1]), 2 in G && (X.finallyLoc = G[2], X.afterLoc = G[3]), this.tryEntries.push(X);
  }
  function it(G) {
    var X = G.completion || {};
    X.type = "normal", delete X.arg, G.completion = X;
  }
  function at(G) {
    this.tryEntries = [{ tryLoc: "root" }], G.forEach(He, this), this.reset(!0);
  }
  function ve(G) {
    if (G || G === "") {
      var X, be = G[E];
      if (be) return be.call(G);
      if (typeof G.next == "function") return G;
      if (!isNaN(G.length)) return X = -1, (be = function qe() {
        for (; ++X < G.length; ) if (S.call(G, X)) return qe.value = G[X], qe.done = !1, qe;
        return qe.value = f, qe.done = !0, qe;
      }).next = be;
    }
    throw new TypeError(typeof G + " is not iterable");
  }
  return b(he, "constructor", { value: _e.prototype = ge, configurable: !0 }), b(ge, "constructor", { value: _e, configurable: !0 }), _e.displayName = R(ge, T, "GeneratorFunction"), p.isGeneratorFunction = function(G) {
    return G = typeof G == "function" && G.constructor, !!G && (G === _e || (G.displayName || G.name) === "GeneratorFunction");
  }, p.mark = function(G) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(G, ge) : (G.__proto__ = ge, R(G, T, "GeneratorFunction")), G.prototype = Object.create(he), G;
  }, p.awrap = function(G) {
    return { __await: G };
  }, Me(Le.prototype), R(Le.prototype, m, function() {
    return this;
  }), p.AsyncIterator = Le, p.async = function(G, X, be, qe, Re) {
    Re === void 0 && (Re = Promise);
    var xe = new Le(w(G, X, be, qe), Re);
    return p.isGeneratorFunction(X) ? xe : xe.next().then(function(re) {
      return re.done ? re.value : xe.next();
    });
  }, Me(he), R(he, T, "Generator"), R(he, E, function() {
    return this;
  }), R(he, "toString", function() {
    return "[object Generator]";
  }), p.keys = function(G) {
    var X, be = Object(G), qe = [];
    for (X in be) qe.push(X);
    return qe.reverse(), function Re() {
      for (; qe.length; ) {
        var xe = qe.pop();
        if (xe in be) return Re.value = xe, Re.done = !1, Re;
      }
      return Re.done = !0, Re;
    };
  }, p.values = ve, at.prototype = { constructor: at, reset: function(G) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = f, this.done = !1, this.delegate = null, this.method = "next", this.arg = f, this.tryEntries.forEach(it), !G) for (var X in this) X.charAt(0) === "t" && S.call(this, X) && !isNaN(+X.slice(1)) && (this[X] = f);
  }, stop: function() {
    this.done = !0;
    var G = this.tryEntries[0].completion;
    if (G.type === "throw") throw G.arg;
    return this.rval;
  }, dispatchException: function(G) {
    if (this.done) throw G;
    var X = this;
    function be(me, P) {
      return xe.type = "throw", xe.arg = G, X.next = me, P && (X.method = "next", X.arg = f), !!P;
    }
    for (var qe = this.tryEntries.length - 1; 0 <= qe; --qe) {
      var Re = this.tryEntries[qe], xe = Re.completion;
      if (Re.tryLoc === "root") return be("end");
      if (Re.tryLoc <= this.prev) {
        var re = S.call(Re, "catchLoc"), De = S.call(Re, "finallyLoc");
        if (re && De) {
          if (this.prev < Re.catchLoc) return be(Re.catchLoc, !0);
          if (this.prev < Re.finallyLoc) return be(Re.finallyLoc);
        } else if (re) {
          if (this.prev < Re.catchLoc) return be(Re.catchLoc, !0);
        } else {
          if (!De) throw Error("try statement without catch or finally");
          if (this.prev < Re.finallyLoc) return be(Re.finallyLoc);
        }
      }
    }
  }, abrupt: function(G, X) {
    for (var be = this.tryEntries.length - 1; 0 <= be; --be) {
      var qe = this.tryEntries[be];
      if (qe.tryLoc <= this.prev && S.call(qe, "finallyLoc") && this.prev < qe.finallyLoc) {
        var Re = qe;
        break;
      }
    }
    var xe = (Re = Re && (G === "break" || G === "continue") && Re.tryLoc <= X && X <= Re.finallyLoc ? null : Re) ? Re.completion : {};
    return xe.type = G, xe.arg = X, Re ? (this.method = "next", this.next = Re.finallyLoc, Z) : this.complete(xe);
  }, complete: function(G, X) {
    if (G.type === "throw") throw G.arg;
    return G.type === "break" || G.type === "continue" ? this.next = G.arg : G.type === "return" ? (this.rval = this.arg = G.arg, this.method = "return", this.next = "end") : G.type === "normal" && X && (this.next = X), Z;
  }, finish: function(G) {
    for (var X = this.tryEntries.length - 1; 0 <= X; --X) {
      var be = this.tryEntries[X];
      if (be.finallyLoc === G) return this.complete(be.completion, be.afterLoc), it(be), Z;
    }
  }, catch: function(G) {
    for (var X = this.tryEntries.length - 1; 0 <= X; --X) {
      var be, qe, Re = this.tryEntries[X];
      if (Re.tryLoc === G) return (be = Re.completion).type === "throw" && (qe = be.arg, it(Re)), qe;
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(G, X, be) {
    return this.delegate = { iterator: ve(G), resultName: X, nextLoc: be }, this.method === "next" && (this.arg = f), Z;
  } }, p;
}
function IE(f, p) {
  return (IE = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(v, S) {
    return v.__proto__ = S, v;
  })(f, p);
}
function gE(f, p) {
  return rL(f) || uL(f, p) || VE(f, p) || sL();
}
function Ty(f) {
  return aL(f) || lL(f) || VE(f) || cL();
}
function pL(f, p) {
  if (typeof f != "object" || !f) return f;
  var v = f[Symbol.toPrimitive];
  if (v === void 0) return (p === "string" ? String : Number)(f);
  if (v = v.call(f, p), typeof v != "object") return v;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
function by(f) {
  return f = pL(f, "string"), typeof f == "symbol" ? f : f + "";
}
function Xr(f) {
  return (Xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(p) {
    return typeof p;
  } : function(p) {
    return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
  })(f);
}
function VE(f, p) {
  var v;
  if (f) return typeof f == "string" ? a_(f, p) : (v = (v = {}.toString.call(f).slice(8, -1)) === "Object" && f.constructor ? f.constructor.name : v) === "Map" || v === "Set" ? Array.from(f) : v === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v) ? a_(f, p) : void 0;
}
var HE = { react: { componentWrap: "div", slotWrap: "div", componentWrapAttrs: { __use_react_component_wrap: "", style: { all: "unset" } }, slotWrapAttrs: { __use_react_slot_wrap: "", style: { all: "unset" } }, vueNamedSlotsKey: ["node:"] }, vue: { componentWrapHOC: function(f) {
  return function() {
    var p = (0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}).portals;
    return Be.createElement(Be.Fragment, null, f, (p === void 0 ? [] : p).map(function(v) {
      var S = v.Portal;
      return Be.createElement(S, { key: v.key });
    }));
  };
}, componentWrapAttrs: { "data-use-vue-component-wrap": "", style: { all: "unset" } }, slotWrapAttrs: { "data-use-vue-slot-wrap": "", style: { all: "unset" } } } };
function $E() {
  var f = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : { react: {}, vue: {} }, v = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : HE, p = 2 < arguments.length ? arguments[2] : void 0, v = (f.vue || (f.vue = {}), f.react || (f.react = {}), [v, ue(ue({}, f), {}, { react: ue(ue(ue({}, v.react), f.react), {}, { componentWrapAttrs: ue(ue({}, v.react.componentWrapAttrs), f.react.componentWrapAttrs), slotWrapAttrs: ue(ue({}, v.react.slotWrapAttrs), f.react.slotWrapAttrs) }), vue: ue(ue(ue({}, v.vue), f.vue), {}, { componentWrapAttrs: ue(ue({}, v.vue.componentWrapAttrs), f.vue.componentWrapAttrs), slotWrapAttrs: ue(ue({}, v.vue.slotWrapAttrs), f.vue.slotWrapAttrs) }) })]);
  return p && v.unshift({}), Object.assign.apply(this, v);
}
var BE = ["getElementById", "getElementsByClassName", "getElementsByTagName", "getElementsByTagNameNS", "querySelector", "querySelectorAll"], ud = { Document: {}, Element: {} };
function vL(f) {
  Object.keys(ud).forEach(function(p) {
    BE.forEach(function(v) {
      var S = ud[p][v] || window[p].prototype[v];
      S && (ud[p][v] = S, window[p].prototype[v] = function() {
        for (var b = arguments.length, E = new Array(b), m = 0; m < b; m++) E[m] = arguments[m];
        var T = S.apply(this, E);
        return T && (T.constructor !== NodeList || T.constructor === NodeList && 0 < T.length) ? T : ((T = v) === "getElementById" && (T = "querySelector", E = ["#" + E[0]]), (ud.Element[T] || Element.prototype[T]).apply(f, E));
      });
    });
  });
}
function hL() {
  Object.keys(ud).forEach(function(f) {
    BE.forEach(function(p) {
      window[f].prototype[p] = ud[f][p];
    });
  });
}
var mL = ["ref"], yL = ["key"], gL = ["hashList"], t_ = parseInt(f_.version);
var _L = (() => {
  function f(p) {
    return Ev(this, f), Ry(this, f, [p]);
  }
  return ky(f, Be.Component), xv(f, [{ key: "render", value: function() {
    var p = this.props.component, v = this.props.passedProps, v = (v.ref, Gi(v, mL));
    return Be.createElement(p, v, this.props.children);
  } }]);
})(), SL = function(f, p, v) {
  var S = (() => {
    function b(E) {
      var m;
      return Ev(this, b), (m = Ry(this, b, [E])).state = ue(ue({}, E), p.isSlots ? { children: f } : {}), m.setRef = m.setRef.bind(m), m.vueInReactCall = m.vueInReactCall.bind(m), (m.__veauryVueWrapperRef__ = v).__veauryVueInReactCall__ = m.vueInReactCall, m;
    }
    return ky(b, Be.Component), xv(b, [{ key: "reactPropsLinkToVueInstance", value: function(E) {
      Object.keys(E).forEach(function(m) {
        v[m] || (v[m] = E[m]);
      }), Object.getOwnPropertyNames(E.__proto__).filter(function(m) {
        return ["constructor", "render"].indexOf(m) < 0;
      }).forEach(function(m) {
        v[m] || (v[m] = E[m]);
      });
    } }, { key: "setRef", value: function(E) {
      var m = this;
      E && (v.__veauryReactRef__ = E, this.reactPropsLinkToVueInstance(E), Promise.resolve().then(function() {
        return m.reactPropsLinkToVueInstance(E);
      }), (this.setRef.current = E).__veauryVueWrapperRef__ = v);
    } }, { key: "createSlot", value: function(E) {
      return { originVNode: E, inheritAttrs: !1, __fromReactSlot: !0, render: function() {
        var m, T;
        return ((m = E = (E = ((T = this.$slots) == null || (m = T.default) == null ? void 0 : m.call(T)) || E) instanceof Function ? E(this) : E) == null ? void 0 : m.length) === 1 && (T = E[0]) != null && T.data && ((m = this.$attrs).key, T = Gi(m, yL), E[0].props = ue(ue({}, T), E[0].props)), E;
      } };
    } }, { key: "componentWillUnmount", value: function() {
      v.__veauryReactRef__ && (v.__veauryReactRef__.__veauryVueWrapperRef__ = null, v.__veauryReactRef__ = null);
    } }, { key: "vueInReactCall", value: function(E) {
      var m = this, T = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
      return 2 < arguments.length && arguments[2] && E && E[0] ? E.map(function(R, w) {
        return Ey(m.createSlot(R instanceof Function ? R : [R]), ue(ue(ue({}, p), T), {}, { isSlots: !0, wrapInstance: v })).render({ key: R?.key || void 0 });
      }) : Ey(this.createSlot(E), ue(ue(ue({}, p), T), {}, { isSlots: !0, wrapInstance: v })).render();
    } }, { key: "render", value: function() {
      var E, m, T, R = this, Z = this.state, w = Z.hashList, M = Gi(Z, gL), F = {}, I = {};
      for (E in M) m = E, T = void 0, M.hasOwnProperty(m) && M[m] != null && (M[m].__slot ? (M[m].reactSlot ? M[m] = M[m].reactSlot : (T = M[m], p.defaultSlotsFormatter && M[m].__trueChildren ? (M[m].__trueChildren.__top__ = R.__veauryVueWrapperRef__, M[m] = p.defaultSlotsFormatter(M[m].__trueChildren, R.vueInReactCall, w), M[m] instanceof Array ? M[m] = Ty(M[m]) : -1 < ["string", "number"].indexOf(Xr(M[m])) ? M[m] = [M[m]] : Xr(M[m]) === "object" && (M[m] = ue({}, M[m]))) : M[m] = ue({}, Ey(R.createSlot(M[m]), ue(ue({}, p), {}, { isSlots: !0, wrapInstance: v })).render()), M[m].vueFunction = T), F[m] = M[m]) : M[m].__scopedSlot && (M[m] = M[m](R.createSlot), I[m] = M[m]));
      var B, ie, Z = {};
      return Z.ref = this.setRef, p.isSlots ? this.state.children || this.props.children : (B = M, f.__syncUpdateForPureReactInVue && Object.keys(f.__syncUpdateForPureReactInVue).map(function(Ee) {
        var _e, ge;
        B[Ee] && typeof B[Ee] == "function" && (_e = R.__veauryVueWrapperRef__, ge = B[Ee], B[Ee] = function() {
          for (var Se = arguments.length, Ne = new Array(Se), he = 0; he < Se; he++) Ne[he] = arguments[he];
          _e.__veaurySyncUpdateProps__(f.__syncUpdateForPureReactInVue[Ee].apply(this, Ne)), ge.apply(this, Ne), _e.macroTaskUpdate = !0, _e.__veauryMountReactComponent__(!0, !0, {});
        });
      }), ie = ue(ue(ue({}, B = p.defaultPropsFormatter ? p.defaultPropsFormatter.call(this, B, this.vueInReactCall, w) : B), F), I), Object.getPrototypeOf(f) !== Function.prototype && (Xr(f) !== "object" || f.render) || b.catchVueRefs() ? (Object.getPrototypeOf(f) === Function.prototype && delete Z.ref, Be.createElement(f, Sc({}, ie, Z))) : Be.createElement(_L, Sc({ passedProps: ie, component: f }, Z), ie.children));
    } }], [{ key: "catchVueRefs", value: function() {
      if (v.$parent) {
        for (var E in v.$parent.$refs) if (v.$parent.$refs[E] === v) return !0;
      }
      return !1;
    } }]);
  })();
  return cd(S, "displayName", "applyReact_".concat(f.displayName || f.name || "Component")), S;
};
function d_(f) {
  var p = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
  return f.__esModule && f.default && (f = f.default), p.isSlots && (f = f()), p = $E(p, void 0, !0), { originReactComponent: f, setup: function(v, S) {
    var b, E, m, T;
    if (!p.isSlots) return b = {}, E = zT({}), m = PT(), typeof (T = p.useInjectPropsFromWrapper || f.__veauryInjectPropsFromWrapper__) == "function" && (typeof (T = T.call(m.proxy, v)) != "function" ? (Object.assign(E, T), b.__veauryInjectedProps__ = E) : m.proxy.__veauryInjectedComputed__ = T), b;
  }, data: function() {
    return { VEAURY_Portals: [] };
  }, created: function() {
    this.__veauryPortalKeyPool__ = [], this.__veauryMaxPortalCount__ = 0;
  }, computed: { __veauryInjectedProps__: function() {
    var v;
    return (v = this.__veauryInjectedComputed__) == null ? void 0 : v.call(this);
  } }, render: function() {
    var v = ou(p.react.componentWrap, ue({ ref: "react" }, p.react.componentWrapAttrs || {}), this.VEAURY_Portals.map(function(S) {
      return (0, S.Portal)(ou, S.key);
    }));
    return this.__veauryCheckReactSlot__(this.$slots), v;
  }, methods: { __veauryCheckReactSlot__: function(v) {
    var S = this;
    function b(E, m, T) {
      return m[T] && (E[T] = m[T], 1);
    }
    Xr(v) === "object" && v != null && (v instanceof Array ? v.forEach(function(E) {
      S.__veauryCheckReactSlot__(E.children);
    }) : Object.keys(v).forEach(function(R) {
      var m, T, R = v[R];
      if (typeof R == "function") {
        try {
          m = R.apply(S, R.__reactArgs || [{}]);
        } catch {
          return;
        }
        (R.__trueChildren = m).forEach(function(w) {
          w.children && S.__veauryCheckReactSlot__(w.children);
        }), m.length !== 1 || b(R, m = m[0], "reactSlot") || b(R, m, "reactFunction") || m.type !== TE || ((T = m.children) == null ? void 0 : T.length) !== 1 || b(R, T = m.children[0], "reactSlot") || b(R, T, "reactFunction");
      }
    }));
  }, __veauryPushVuePortal__: function(v) {
    var S = this.__veauryPortalKeyPool__.shift() || this.__veauryMaxPortalCount__++;
    this.VEAURY_Portals.push({ Portal: v, key: S });
  }, __veauryRemoveVuePortal__: function(v) {
    var S, b = this.VEAURY_Portals.find(function(E, m) {
      if (E.Portal === v) return S = m, !0;
    });
    this.__veauryPortalKeyPool__.push(b.key), this.VEAURY_Portals.splice(S, 1);
  }, __veauryGetScopeSlot__: function(v, S, b) {
    var E = this;
    function m(T) {
      function R() {
        for (var w, M = this, F = arguments.length, I = new Array(F), B = 0; B < F; B++) I[B] = arguments[B];
        return v.reactFunction ? v.reactFunction.apply(this, I) : p.defaultSlotsFormatter ? ((w = v.apply(this, I)).__top__ = E, (w = p.defaultSlotsFormatter(w, E.__veauryVueInReactCall__, S)) instanceof Array || -1 < Xr(w).indexOf("string", "number") ? w = Ty(w) : Xr(w) === "object" && (w = ue({}, w)), w) : Ey(T(function() {
          return v.apply(M, I);
        }), ue(ue({}, p), {}, { isSlots: !0, wrapInstance: E })).render();
      }
      return p.pureTransformer && b ? R.vueFunction = b : R.vueFunction = v, R;
    }
    return m.__scopedSlot = !0, m;
  }, __veaurySyncUpdateProps__: function(v) {
    this.__veauryReactInstance__ && this.__veauryReactInstance__.setState(v);
  }, __veauryMountReactComponent__: function(v, S) {
    var b = arguments, E = this;
    return oL(ld().mark(function m() {
      var T, R, w, M, F, I, B, ie, Z, Ee, _e, ge, Se, Ne, he, Me, Le;
      return ld().wrap(function(He) {
        for (; ; ) switch (He.prev = He.next) {
          case 0:
            if (T = 2 < b.length && b[2] !== void 0 ? b[2] : {}, R = {}, w = [], (ie = E.$.vnode.scopeId) && (R[ie] = "", w.push(ie)), M = {}, F = {}, v && (S == null || !S.slot)) {
              He.next = 18;
              break;
            }
            B = ld().mark(function it(at) {
              var ve;
              return ld().wrap(function(G) {
                for (; ; ) switch (G.prev = G.next) {
                  case 0:
                    if (E.$slots.hasOwnProperty(at) && E.$slots[at] != null) {
                      G.next = 2;
                      break;
                    }
                    return G.abrupt("return", 0);
                  case 2:
                    if ((ve = p.react.vueNamedSlotsKey.find(function(X) {
                      return at.indexOf(X) === 0;
                    })) || at === "default") return ve = at.replace(new RegExp("^".concat(ve)), ""), M[ve] = E.$slots[at], M[ve].__slot = !0, G.abrupt("return", 0);
                    G.next = 8;
                    break;
                  case 8:
                    F[at] = E.__veauryGetScopeSlot__(E.$slots[at], w, (ve = E.$.vnode) == null || (ve = ve.children) == null ? void 0 : ve[at]);
                  case 9:
                  case "end":
                    return G.stop();
                }
              }, it);
            }), He.t0 = ld().keys(E.$slots || {});
          case 10:
            if ((He.t1 = He.t0()).done) {
              He.next = 18;
              break;
            }
            return ie = He.t1.value, He.delegateYield(B(ie), "t2", 13);
          case 13:
            if (He.t2 === 0) return He.abrupt("continue", 10);
            He.next = 16;
            break;
          case 16:
            He.next = 10;
            break;
          case 18:
            if ((!v || S != null && S.slot) && (Z = ue({}, M), I = Z.default, delete Z.default), E.__veauryLast__ = E.__veauryLast__ || {}, E.__veauryLast__.slot = E.__veauryLast__.slot || {}, E.__veauryLast__.attrs = E.__veauryLast__.attrs || {}, Ee = { slot: function() {
              E.__veauryLast__.slot = ue(ue(ue({}, I ? { children: I } : { children: null }), Z), F);
            }, attrs: function() {
              E.__veauryLast__.attrs = E.$attrs;
            } }, S && Object.keys(S).forEach(function(it) {
              return Ee[it]();
            }), v) {
              He.next = 64;
              break;
            }
            if (E.__reactBoundedPromise__ = new Promise(function(it) {
              _e = it;
            }), E.__reactBoundedPromise__.resolve = _e, Ee.slot(), Ee.attrs(), Ne = SL(f, p, E), ge = Be.createElement(Ne, Sc({}, E.$attrs, E.__veauryInjectedProps__, { children: I }, Z, F, E.$attrs.class ? { className: E.$attrs.class } : {}, R, { hashList: w }, E.$attrs.style ? { style: E.$attrs.style } : {}, { ref: function(it) {
              E.__veauryReactInstance__ = it, E.__reactBoundedPromise__.resolve(!0);
            } })), Se = E.$refs.react, Ne = p.wrapInstance) {
              He.next = 47;
              break;
            }
            he = E.$parent;
          case 35:
            if (he) {
              if (he.parentReactWrapperRef) return Ne = he.parentReactWrapperRef, He.abrupt("break", 45);
              He.next = 39;
            } else He.next = 45;
            break;
          case 39:
            if (he.reactWrapperRef) return Ne = he.reactWrapperRef, He.abrupt("break", 45);
            He.next = 42;
            break;
          case 42:
            he = he.$parent, He.next = 35;
            break;
          case 45:
            He.next = 49;
            break;
          case 47:
            (Ne = p.wrapInstance).__veauryVueWrapperRef__ = E;
          case 49:
            if (Ne) return E.parentReactWrapperRef = Ne, E.reactPortal = function() {
              return f_.createPortal(ge, Se);
            }, Ne.pushReactPortal(E.reactPortal), He.abrupt("return");
            He.next = 54;
            break;
          case 54:
            if (17 < t_) return gv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED !== void 0 && (gv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = !0), Me = p.react.createRoot || gv.createRoot, 18 < t_ && !Me && console.warn("'react-dom 19' no longer supports dynamically determining whether to use 'render' or 'createRoot'. In order to be compatible with 'react-dom 17' and previous versions, you need to manually configure 'createRoot' in the veaury configuration."), E.__veauryReactApp__ = Me(Se), E.__veauryReactApp__.render(ge), He.abrupt("return");
            He.next = 61;
            break;
          case 61:
            gv.render(ge, Se), He.next = 71;
            break;
          case 64:
            return He.next = 66, E.__reactBoundedPromise__;
          case 66:
            Le = function() {
              E.__veauryReactInstance__.setState(function(it) {
                return Object.keys(it).forEach(function(at) {
                  p.isSlots && at === "children" || delete it[at];
                }), ue(ue(ue(ue({}, E.__veauryCache__), E.__veauryInjectedProps__), !p.isSlots && E.__veauryLast__.slot), E.__veauryLast__.attrs);
              }), E.__veauryCache__ = null;
            }, !E.microTaskUpdate || E.__veauryCache__ || E.$nextTick(function() {
              Le(), E.microTaskUpdate = !1;
            }), E.macroTaskUpdate && (clearTimeout(E.updateTimer), E.updateTimer = setTimeout(function() {
              clearTimeout(E.updateTimer), Le(), E.macroTaskUpdate = !1;
            })), E.__veauryCache__ = ue(ue({}, E.__veauryCache__ || {}), ue(ue(ue(ue({}, T), E.$attrs.class ? { className: E.$attrs.class } : {}), ue({}, R)), {}, { hashList: w }, E.$attrs.style ? { style: E.$attrs.style } : {})), E.macroTaskUpdate || E.microTaskUpdate || Le();
          case 71:
          case "end":
            return He.stop();
        }
      }, m);
    }))();
  } }, mounted: function() {
    var v = this;
    this.__VEAURY_IGNORE_STRANGE_UPDATE__ = !0, Promise.resolve().then(function() {
      v.__VEAURY_IGNORE_STRANGE_UPDATE__ = !1;
    }), clearTimeout(this.updateTimer), this.__veauryMountReactComponent__();
  }, beforeUnmount: function() {
    var v;
    clearTimeout(this.updateTimer), vL(this.$refs.react), this.reactPortal ? (v = this.parentReactWrapperRef) != null && v.removeReactPortal(this.reactPortal) : 17 < t_ ? (v = this.__veauryReactApp__) != null && v.unmount() : gv.unmountComponentAtNode(this.$refs.react), hL();
  }, updated: function() {
    this.__VEAURY_IGNORE_STRANGE_UPDATE__ || this.__veauryMountReactComponent__(!0, { slot: !0 });
  }, inheritAttrs: !1, watch: { $attrs: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 }, __veauryInjectedProps__: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 } } };
}
var CL = /* @__PURE__ */ new Set(["onClick", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onChange", "onInput", "onInvalid", "onReset", "onSubmit", "onError", "onLoad", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onGotPointerCapture", "onLostPointerCapture", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onSelect", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onScroll", "onWheel", "onAbort", "onCanPlay", "onCanPlayThrough", "onDurationChange", "onEmptied", "onEncrypted", "onEnded", "onError", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onPause", "onPlay", "onPlaying", "onProgress", "onRateChange", "onSeeked", "onSeeking", "onStalled", "onSuspend", "onTimeUpdate", "onVolumeChange", "onWaiting", "onLoad", "onError", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionEnd", "onToggle"]);
function EL(f, p) {
  for (var v = (f = p = f?._reactInternals || f?._reactInternalFiber || p) == null ? void 0 : f.return; v; ) {
    var S = v.stateNode;
    if (S = S?.parentVueWrapperRef || S?.__veauryVueWrapperRef__) return S;
    v = v.return;
  }
}
function _E(f, p, v) {
  var S = {};
  return v.forEach(function(b) {
    S[b] = !0;
  }), f[(p === "modelValue" ? "model" : p) + "Modifiers"] = S;
}
function SE(f, p, v) {
  var S = this, b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : "v-model";
  if (!(p instanceof Array)) throw Error("[error:veaury] Parameter type error from '".concat(b, "', a single v-model is an array, such as [val, setter, argumentKey, modifiers] or [val, setter, modifiers]"));
  if (typeof p[1] != "function") throw Error("[error:veaury] Parameter type error from '".concat(b, "', a single v-model is an array, the second element of the array must be a setter function"));
  var E = p[1], m = (typeof p[2] == "string" ? (v = p[2], p[3] instanceof Array && _E(f, v, p[3])) : p[2] instanceof Array && _E(f, v, p[2]), f["onUpdate:" + v]);
  f["onUpdate:" + v] = typeof m == "function" ? function() {
    for (var T = arguments.length, R = new Array(T), w = 0; w < T; w++) R[w] = arguments[w];
    m.apply(S, R), E.apply(S, R);
  } : E, f[v] = p[0];
}
function o_(f) {
  var p = this, v = {}, S = ue({}, f);
  return Object.keys(f).forEach(function(b) {
    var E, m = b.match(/^onUpdate-([^-]+)/);
    if (m) delete S[b], E = v["onUpdate:".concat(m[1])], v["onUpdate:".concat(m[1])] = typeof E == "function" ? function() {
      for (var R = arguments.length, w = new Array(R), M = 0; M < R; M++) w[M] = arguments[M];
      E.apply(p, w), f[b].apply(p, w);
    } : f[b];
    else if (m = b.match(/^v-model($|:([^:]+)|-([^:]+))/)) m = m[2] || m[3] || "modelValue", SE(v, f[b], m), delete S[b];
    else if (b === "v-models") {
      if (Xr(f[b]) !== "object" || f[b] instanceof Array) throw Error("[error:veaury] The parameter 'v-models' must be an object type, such as {[argumentKey]: singleVModel}");
      var T = f[b];
      Object.keys(T).forEach(function(R) {
        SE(v, T[R], R, "v-models");
      }), delete S[b];
    }
  }), ue(ue({}, S), v);
}
var Dy = xv(function f() {
  Ev(this, f), cd(this, "pool", /* @__PURE__ */ new Set());
}, [{ key: "getRandomId", value: function(f) {
  var p = f + (Math.random() + "").substr(2);
  return this.pool.has(p) ? this.getRandomId(f) : (this.pool.add(p), p);
} }]);
function qE(S, p) {
  var v, S = S.node;
  if (typeof S == "function" && (S = S()), (v = p) != null && v.current || typeof p == "function" || (v = p) != null && v.toString().match(/^function/) || (p = null), -1 < ["string", "number"].indexOf(Xr(S))) return S;
  if (S instanceof Array) {
    if (S.length !== 1) return S;
    S = S[0];
  }
  return ue(ue({}, S), {}, { ref: p });
}
var xL = d_(qE);
function l_(f) {
  return ou(xL, { node: function() {
    return f.node;
  } });
}
l_.originReactComponent = Be.forwardRef(qE);
var bL = ["component", "node"], wL = ["component", "$slots", "children", "class", "style"], RL = ["className", "classname"], _c = "veaury-options", CE = new Dy();
function kL(f, p) {
  var v;
  return f = typeof f == "string" && p ? (p = p.$) == null || (p = p.appContext) == null || (p = p.app) == null || (v = p.component) == null ? void 0 : v.call(p, f) : f;
}
function EE(f) {
  if (f) return Object.keys(f).forEach(function(p) {
    var v = f[p];
    v != null && (typeof v == "function" ? (f[p] = v, f[p].reactFunction = v) : (f[p] = function() {
      return v;
    }, f[p].reactSlot = v), v.vueFunction) && (f[p].vueFunction = v.vueFunction);
  }), f;
}
function TL(f) {
  var p;
  return (p = f.node) == null ? void 0 : p.call(f);
}
var u_ = Be.forwardRef(function(b, p) {
  var v, m = b.component, S = b.node, b = Gi(b, bL);
  if (m == null && S == null) return null;
  if (S != null) {
    if (S.$$typeof || typeof S == "string" || typeof S == "number") return S;
    typeof S != "function" && (v = S, S = function() {
      return v;
    });
  }
  var E, m = m || TL, T = $E(b[_c] || {}, void 0, !0), R = T.useInjectPropsFromWrapper || m.__veauryInjectPropsFromWrapper__;
  return T.isSlots || typeof R == "function" && (E = R(b)), Be.createElement(DL, Sc({}, ue(ue(ue(ue({ component: m }, S ? { node: S } : {}), b), E), {}, cd({}, _c, T)), { ref: p }));
}), DL = (() => {
  function f(p) {
    var v;
    return Ev(this, f), (v = Ry(this, f, [p])).state = { portals: [] }, v.__veauryPortalKeyPool__ = [], v.__veauryMaxPortalCount__ = 0, v.__veauryCurrentVueComponent__ = p.component, v.__veauryCreateVueInstance__ = v.__veauryCreateVueInstance__.bind(v), v.__veauryVueComponentContainer__ = v.createVueComponentContainer(), v;
  }
  return ky(f, Be.Component), xv(f, [{ key: "pushReactPortal", value: function(p) {
    var v = this.state.portals, S = this.__veauryPortalKeyPool__.shift() || this.__veauryMaxPortalCount__++;
    v.push({ Portal: p, key: S }), this.setState({ portals: v });
  } }, { key: "removeReactPortal", value: function(p) {
    var v, S = this.state.portals, b = S.find(function(E, m) {
      if (E.Portal === p) return v = m, !0;
    });
    this.__veauryPortalKeyPool__.push(b.key), S.splice(v, 1), this.__veauryVueRef__ && this.setState({ portals: S });
  } }, { key: "createVueComponentContainer", value: function() {
    var p = this, v = {}, S = this.props[_c];
    return S.isSlots ? (Object.keys(this.props).forEach(function(b) {
      CL.has(b) && typeof p.props[b] == "function" && (v[b] = p.props[b]);
    }), S.vue.slotWrapAttrs && (v = ue(ue({}, v), S.vue.slotWrapAttrs))) : S.vue.componentWrapAttrs && (v = ue(ue({}, v), S.vue.componentWrapAttrs)), S.vue.componentWrapHOC(Be.createElement("div", Sc({}, S.vue.componentWrapAttrs, { ref: this.__veauryCreateVueInstance__, key: null })), v);
  } }, { key: "shouldComponentUpdate", value: function(p, v, S) {
    var b, E, m, T, R = this;
    return p === this.props || (b = p.component, E = (E = p["v-slots"]) === void 0 ? null : E, m = p.children, p = Gi(p, ["component", _c, "v-slots", "children"].map(by)), this.__veauryCurrentVueComponent__ !== b && this.updateVueComponent(b), b.__fromReactSlot) || this.__veauryVueInstance__ && (m && (E = E || {}, Xr(m) !== "object" || m instanceof Array || m.$$typeof ? E.default = m : E = m), (T = this.__veauryVueInstance__.$data.$slots) && Object.keys(T).forEach(function(w) {
      delete T[w];
    }), E && (T || (this.__veauryVueInstance__.$data.$slots = {}), Object.assign(this.__veauryVueInstance__.$data.$slots, EE(E))), Object.keys(this.__veauryVueInstance__.$data).forEach(function(w) {
      w !== "$slots" && delete R.__veauryVueInstance__.$data[w];
    }), this.__veauryVueInstance__) && Object.assign(this.__veauryVueInstance__.$data, o_(p)), !0;
  } }, { key: "componentWillUnmount", value: function() {
    this.vuePortal ? this.parentVueWrapperRef.__veauryRemoveVuePortal__(this.vuePortal) : (this.__veauryVueInstance__ && this.__veauryVueInstance__.$.appContext.app.unmount(), CE.pool.delete(this.__veauryVueTargetId__), this.vueCreated = !1);
  } }, { key: "componentDidMount", value: function() {
    this.__veauryCreateVueInstance__(this.vueContainerElement);
  } }, { key: "__veauryCreateVueInstance__", value: function(p) {
    var v, S, b, E, m, T, R, w, M = this;
    function F(I) {
      this.__veauryVueInstance__ || (this.__veauryVueInstance__ = I);
    }
    this.vueCreated || (this.vueCreated = !0, (v = this).vueContainerElement = p, (b = this.props).component, S = b[_c], R = b.children, w = (w = b["v-slots"]) === void 0 ? {} : w, b = Gi(b, ["component", _c, "children", "v-slots"].map(by)), R && (Xr(R) !== "object" || R instanceof Array || R.$$typeof ? w.default = R : w = R), (w = EE(w)) && (b.$slots = w), F = F.bind(this), E = ue({}, o_(b)), m = { data: function() {
      return S.isSlots ? { children: v.__veauryCurrentVueComponent__.originVNode } : E;
    }, created: function() {
      this.reactWrapperRef = v, F(this);
    }, methods: { reactInVueCall: function(I) {
      return 2 < arguments.length && arguments[2] && I && I[0] ? I.map(function(B, ie) {
        return ou(l_, { node: B, key: (B == null || (B = B.data) == null ? void 0 : B.key) || ie });
      }) : ou(l_, { node: I });
    }, getScopedSlots: function(I, B) {
      var ie, Z = this, Ee = (this.getScopedSlots.__scopeSlots || (this.getScopedSlots.__scopeSlots = {}), ue({}, B));
      for (ie in Ee) ((_e) => {
        var ge, Se;
        !Ee.hasOwnProperty(_e) || (ge = Ee[_e]) == null || (Ee[_e] = (Se = ge, function() {
          for (var Ne, he, Me, Le, He = arguments.length, it = new Array(He), at = 0; at < He; at++) it[at] = arguments[at];
          return Se.vueFunction ? Se.vueFunction.apply(Z, it) : (Me = Se.reactFunction, Me = Se.reactSlot || Me?.apply(Z, it), Le = S.defaultSlotsFormatter, (Ne = Z.getScopedSlots.__scopeSlots[_e]) != null && (Ne = Ne.component) != null && (Ne = Ne.ctx) != null && Ne.__veauryReactInstance__ ? (he = Z.getScopedSlots.__scopeSlots[_e], Promise.resolve().then(function() {
            var ve;
            (ve = he) != null && (ve = ve.component) != null && (ve = ve.ctx) != null && (ve = ve.__veauryReactInstance__) != null && ve.setState({ children: Se.apply(Z, it) });
          })) : (he = Le && Me ? [Le(Me, Z.reactInVueCall)] : I(d_(function() {
            return Se.apply(Z, it);
          }, ue(ue({}, S), {}, { isSlots: !0, wrapInstance: v }))), Z.getScopedSlots.__scopeSlots[_e] = he), Se.reactFunction ? he.reactFunction = Se.reactFunction : Se.reactSlot && (he.reactSlot = Se.reactSlot), he);
        }), Ee[_e].reactFunction = ge);
      })(ie);
      return Ee;
    } }, mounted: function() {
      p.removeAttribute("id"), v.__veauryVueRef__ = this.$refs.use_vue_wrapper, this.$refs.use_vue_wrapper.reactWrapperRef = v;
    }, beforeUnmount: function() {
      v.__veauryVueRef__ = null, this.$refs.use_vue_wrapper.reactWrapperRef = null;
    }, render: function() {
      var I = this, ge = this.$data, Ee = (ge.component, ge.$slots), B = ge.class, ie = ge.style, ge = Gi(ge, wL), Z = this.getScopedSlots(ou, ue({}, Ee)), Ee = ge.className, _e = ge.classname, ge = Gi(ge, RL), Se = {};
      return Object.keys(Z).forEach(function(Ne) {
        var he = Z[Ne];
        Se[Ne] = typeof he == "function" ? he : function() {
          return he;
        };
      }), ou(kL(v.__veauryCurrentVueComponent__, this), ue(ue(ue(ue({}, ge), B || Ee || _e ? { class: B || Ee || _e } : {}), ie ? { style: ie } : {}), {}, { ref: "use_vue_wrapper" }), ue({}, S.isSlots && this.children ? { default: typeof this.children == "function" ? this.children : function() {
        return I.children;
      } } : ue({}, Se)));
    } }, p && (T = CE.getRandomId("__vue_wrapper_container_"), p.id = T, this.__veauryVueTargetId__ = T, (R = S.wrapInstance) ? (R = S.wrapInstance).reactWrapperRef = v : R = EL(this), R && document.getElementById(T) ? (this.parentVueWrapperRef = R, this.vuePortal = function(I, B) {
      return I(FT, { to: "#" + T, key: T }, [I(Object.assign(m, { router: M._router }))]);
    }, R.__veauryPushVuePortal__(this.vuePortal)) : (w = IT(m), typeof S.beforeVueAppMount == "function" && S.beforeVueAppMount(w), this.__veauryVueInstance__ = w.mount(p))));
  } }, { key: "updateVueComponent", value: function(p) {
    this.__veauryVueInstance__ && (p.__fromReactSlot ? this.__veauryVueInstance__.children = typeof p.originVNode == "function" ? p.originVNode : function() {
      return p.originVNode;
    } : (this.__veauryCurrentVueComponent__ = p, this.__veauryVueInstance__.$forceUpdate()));
  } }, { key: "render", value: function() {
    return Be.createElement(this.__veauryVueComponentContainer__, { portals: this.state.portals });
  } }]);
})();
function Ey(f) {
  var p = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, v = (f || console.warn("Component must be passed in applyVueInReact!"), f.__esModule && f.default && (f = f.default), Be.forwardRef(function(S, b) {
    return Be.createElement(u_, Sc({}, S, { component: f, ref: b }, cd({}, _c, p)));
  }));
  return v.originVueComponent = f, v;
}
new Dy();
function OL(f) {
  var p = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, v = p.globalName, S = d_(f, p.combinedOption || {});
  return S.install = function(b) {
    var E = (1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}).globalName;
    return v && b.component(E || v, S), S;
  }, S;
}
function xE(f) {
  return f.replace(/-(\w)/g, function(p, v) {
    return v.toUpperCase();
  });
}
function Oy(f) {
  var p;
  return f ? typeof f == "string" ? (f = f.trim()).split(/\s*;\s*/).reduce(function(v, S) {
    return S && (S = S.split(/\s*:\s*/)).length === 2 && Object.assign(v, cd({}, xE(S[0]), S[1])), v;
  }, {}) : Xr(f) === "object" ? (p = {}, Object.keys(f).forEach(function(v) {
    p[xE(v)] = f[v];
  }), p) : {} : {};
}
function Ny(f) {
  return f ? f instanceof Array ? f : typeof f == "string" ? (f = f.trim()).split(/\s+/) : Xr(f) === "object" ? Object.keys(f).filter(function(p) {
    return !!f[p];
  }) : [] : [];
}
var NL = ["ref"];
function ML(f, p, v, S, b) {
  var E = f.props || {}, E = (E.ref, Gi(E, NL)), m = {}, T = (Object.keys(f.children || {}).forEach(function(M) {
    var F = f.children[M], I = HE.react.vueNamedSlotsKey.find(function(B) {
      return M.indexOf(B) === 0;
    });
    I || M === "default" ? (I = M.replace(new RegExp("^".concat(I)), "").replace(/^default$/, "children"), m[I] = S.call(f.__top__, F(), v, b)) : typeof F == "function" && (m[M] = function() {
      for (var B = arguments.length, ie = new Array(B), Z = 0; Z < B; Z++) ie[Z] = arguments[Z];
      return F.__reactArgs = ie, S(F.apply(this, ie), v, b);
    });
  }), {}), R = Oy(E.style), w = Array.from(new Set(Ny(E.class))).join(" ");
  return 0 < Object.keys(R).length && (T.style = R), w !== "" && (T.className = w), Object.assign(E, ue(ue({}, T), m)), delete E.class, typeof E.ref_for == "boolean" && delete E.ref_for, E;
}
function bE(f) {
  return f.type === HT;
}
new Dy();
function WE(f, p) {
  var v;
  return 0 < ((v = f.dirs) == null ? void 0 : v.length) ? Be.createElement(LL, { vnode: f }, p) : p;
}
var LL = (() => {
  function f(p) {
    var v;
    return Ev(this, f), (v = Ry(this, f, [p])).state = { prevVnode: null, savedDirectives: [], ref: null, prevProps: p }, v;
  }
  return ky(f, Be.Component), xv(f, [{ key: "findDirectiveName", value: function(p) {
    var v = p.dir, S = -1;
    return [this.state.savedDirectives.find(function(b, E) {
      if (b.dir === v) return S = E, !0;
    }), S];
  } }, { key: "doDirective", value: function() {
    var p = this, E = this.state, v = E.savedDirectives;
    if (!(S = E.ref)) {
      for (var S = (this._reactInternals || this._reactInternalFiber).child; S && S.tag !== 5; ) S = S.child;
      if (!S) return;
      S = S.stateNode;
    }
    var b = this.props.vnode, E = b.dirs;
    E && (E.forEach(function(m) {
      var T, R, w, M, F, I, B;
      m && (B = (T = gE(p.findDirectiveName(m), 2))[0], T = T[1], R = (F = m.dir).created, w = F.beforeMount, M = F.mounted, I = F.beforeUpdate, F = F.updated, B ? (v[T] = ue(ue(ue({}, B), m), {}, { oldValue: B.oldValue }), B = [S, v[T], b, p.state.prevVnode], I?.apply(null, B), F?.apply(null, B), v[T].oldValue = m.value) : (v.push(m), I = [S, m, b, null], R?.apply(null, I), w?.apply(null, I), M?.apply(null, I), m.oldValue = m.value));
    }), this.setState({ prevVnode: ue({}, b), savedDirectives: v, ref: S }));
  } }, { key: "componentDidMount", value: function() {
    this.doDirective();
  } }, { key: "componentDidUpdate", value: function(p) {
    p.vnode !== this.props.vnode && this.doDirective();
  } }, { key: "componentWillUnmount", value: function() {
    var p = this, v = this.props.vnode, m = this.state, S = m.savedDirectives, b = m.ref, E = m.prevVnode, m = v.dirs;
    m && (m.forEach(function(T) {
      var R, w, M, F;
      T && (R = (F = gE(p.findDirectiveName(T), 2))[0]) && (w = (M = T.dir).beforeUnmount, M = M.unmounted, S[F[1]] = ue(ue({}, R), T), F = [b, R, v, E], w?.apply(null, F), M != null) && M.apply(null, F);
    }), this.setState({ prevVnode: ue({}, v), savedDirectives: S }));
  } }, { key: "render", value: function() {
    var p = this.props;
    return p.vnode, p.children;
  } }]);
})();
function jL(f, p) {
  var v;
  return typeof f == "function" && (v = f.toString(), f.prototype !== void 0) && f.prototype.constructor === f && (v.slice(0, 5) == "class" || 2 <= Object.getOwnPropertyNames(f.prototype).length || !/^function\s+\(|^function\s+anonymous\(/.test(v) && (!(!p || !/^function\s+[A-Z]/.test(v)) || !!/\b\(this\b|\bthis[\.\[]\b/.test(v) && (!(p && !/classCallCheck\(this/.test(v)) || /^function\sdefault_\d+\s*\(/.test(v))));
}
function YE(f, p) {
  var v, S, b, E;
  return typeof ((b = f.type) == null ? void 0 : b.originReactComponent) != "function" || jL((b = f.type) == null ? void 0 : b.originReactComponent) ? ((b = f.ref) != null && b.k ? (v = (b = f.ref) == null ? void 0 : b.k, S = (b = f.ref) == null ? void 0 : b.r) : v = (b = f.ref) == null ? void 0 : b.r, v && typeof v == "string" && (E = v, v = function(m) {
    var T;
    (T = f.ref) != null && (T = T.i) != null && T.refs && ((T = ue({}, f.ref.i.refs))[E] = m, f.ref.i.refs = T), S ? S.value = m : f.ref.i.setupState && E in f.ref.i.setupState && (f.ref.i.setupState[E] = m), m && (m.__syncUpdateProps = function() {
      p.__top__ && (f.__extraData = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, p.__top__.__syncUpdateProps({}));
    });
  }, v = new Proxy(v, { get: function(m, T) {
    return m[T];
  }, set: function(m, T, R) {
    var w;
    return (w = f.ref) != null && (w = w.i) != null && w.refs && E in ((w = f.ref) == null || (w = w.i) == null ? void 0 : w.refs) && ((w = ue({}, f.ref.i.refs))[T] = R, f.ref.i.refs = w), R;
  } })), v) : null;
}
function s_(f, p) {
  return !p || p instanceof Array && p.length === 0 || (typeof p == "string" && (p = [p]), (f = ue({}, f)).props = ue({}, f.props), p.forEach(function(v) {
    f.props[v] = "";
  })), f;
}
var AL = ["style", "class"];
function wE(f, p, v, S, b, E, m) {
  var T, R, w;
  return p === "all" || p instanceof Array || (p = p ? [p] : []), f.type === TE ? b.call(m, f.children, v, E) : typeof f.type == "string" && (p === "all" || -1 < p.indexOf(f.type)) ? (p = YE(f), w = (R = f.props || {}).style, T = R.class, R = ue(ue({}, Gi(R, AL)), {}, { style: Oy(w), className: Array.from(new Set(Ny(T))).join(" ") }, p ? { ref: p } : {}), (w = f.children || R.children) && ((w = -1 < ["string", "number"].indexOf(Xr(w)) ? [w] : Ty(w)).__top__ = m), WE(f, s_(Ja.createElement(f.type, R, b.call(m, w, v, E)), f.scopeId))) : v([f], null, S);
}
function UL() {
  var f = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, p = 1 < arguments.length ? arguments[1] : void 0, v = 2 < arguments.length ? arguments[2] : void 0;
  return v.__syncUpdateForPureReactInVue && Object.keys(v.__syncUpdateForPureReactInVue).map(function(S) {
    var b;
    f[S] && typeof f[S] == "function" && p.__top__ && (b = f[S], f[S] = function() {
      for (var E = arguments.length, m = new Array(E), T = 0; T < E; T++) m[T] = arguments[T];
      p.__extraData = v.__syncUpdateForPureReactInVue[S].apply(this, m), p.__top__.__veaurySyncUpdateProps__({}), p.__top__.macroTaskUpdate = !0, b.apply(this, m), p.__top__ && Promise.resolve().then(function() {
        p.__extraData = null, p.__top__.__veauryMountReactComponent__(!0);
      });
    });
  }), f;
}
function RE(f, p, v) {
  return !((f = f instanceof Array && f.length === 1 ? f[0] : f) instanceof Array) && f.key == null && 1 < p.length && ((f = ue({}, f)).key = "_key_".concat(v)), f;
}
function GE(S) {
  var p = S.reactComponents, v = S.domTags, S = S.division, b = S === void 0 || S;
  return function E(m, T, R) {
    var w;
    return m && m.forEach ? (m.__top__ || (m.__top__ = this), w = [], m.forEach(function(M, F) {
      if (M && M.type !== VT) {
        if ((ie = M.type) == null || !ie.originReactComponent) return M.$$typeof || typeof M == "string" || typeof M == "number" ? void w.push(M) : bE(M) ? void (M.children.trim() !== "" && w.push(M.children.trim())) : void (M.type && (s_(ie = RE(wE(M, v, T, b, E, R, m.__top__), m, F), M.scopeId), w.push(ie)));
        var I, B, ie = M.type.originReactComponent;
        s_(I = RE(I = (p = p === "all" || p instanceof Array ? p : [p]) === "all" || -1 < p.indexOf(ie) ? (M.__top__ = m.__top__, I = ML(M, "_key_".concat(F), T, E, R), B = YE(M, m), M.children && (M.children.__top__ = m.__top__), WE(M, Ja.createElement(ie, ue(ue(ue({}, UL(I, M, ie)), M.__extraData || {}), B ? { ref: B } : {})))) : bE(M) ? M.text : wE(M, v, T, b, E, R), m, F), M.scopeId), w.push(I);
      }
    }), w.length === 1 ? w[0] : w) : m;
  };
}
var n_ = GE({ reactComponents: "all", domTags: "all" });
function zL(f, p) {
  return OL(f, { combinedOption: ue({ pureTransformer: !0, defaultSlotsFormatter: n_, defaultPropsFormatter: function(v, S, b) {
    var E = {};
    return Object.keys(v).forEach(function(m) {
      var T = v[m];
      T && (T.vueFunction ? (E[m] = function() {
        for (var R = arguments.length, w = new Array(R), M = 0; M < R; M++) w[M] = arguments[M];
        return n_(T.vueFunction.apply(this, w), S, b);
      }, Object.defineProperty(E[m], "length", { get: function() {
        return T.vueFunction.length;
      } })) : T.vueSlot && (E[m] = n_(T.vueSlot, S, b)));
    }), Object.assign(v, E);
  } }, p) });
}
GE({ reactComponents: "all", domTags: "all" });
var PL = ["ref", "children", "v-slots"];
function FL(R, p, v, S, b) {
  var R = R.props || {}, w = (R.ref, R.children), m = R["v-slots"], E = m === void 0 ? {} : m, m = Gi(R, PL), T = (w && (Xr(w) !== "object" || w instanceof Array || w.$$typeof ? E.default = w : E = w), null), R = (Object.keys(E || {}).forEach(function(F) {
    var I = E[F];
    (T = T || {})[F] = function() {
      if (typeof I == "function") {
        for (var B = arguments.length, ie = new Array(B), Z = 0; Z < B; Z++) ie[Z] = arguments[Z];
        I = I.apply(this, ie);
      }
      return S(I, v, b);
    };
  }), {}), w = Oy(m.style), M = Array.from(new Set(Ny(m.className))).join(" ");
  return 0 < Object.keys(w).length && (R.style = w), M !== "" && (R.class = M), Object.assign(m, ue({}, R)), delete m.className, { props: m = o_(m), slots: T };
}
function QE(f) {
  var p = f.ref;
  if (p) return Xr(p) === "object" ? function(v) {
    f.ref.current = v;
  } : typeof p == "function" ? p : void 0;
}
var IL = ["style", "class", "children"];
function kE(f, p, v, S, b, E) {
  var m, T, R, w;
  return p === "all" || p instanceof Array || (p = p ? [p] : []), f.type === Be.Fragment ? b((m = f.props) == null ? void 0 : m.children, v) : typeof f.type == "string" && (p === "all" || -1 < p.indexOf(f.type)) ? (m = QE(f), w = (p = f.props || {}).style, R = p.class, T = p.children, p = Gi(p, IL), R = Array.from(new Set(Ny(R))).join(" "), w = Oy(w), p = ue(ue(ue(ue({}, p), Object.keys(w).length === 0 ? {} : { style: w }), R ? { className: R } : {}), m ? { ref: m } : {}), Object.keys(p).length === 0 && (p = null), (w = T) && ((w = -1 < ["string", "number"].indexOf(Xr(w)) ? [w] : w instanceof Array ? Ty(w) : ue({}, w)).__top__ = E), ou(f.type, p, b(w, v))) : v([f], null, S);
}
function KE(S) {
  var p = S.vueComponents, v = S.domTags, S = S.division, b = S === void 0 || S;
  return function E(m, T) {
    if (m == null) return m;
    m instanceof Array || (m = [m]);
    var R = [];
    return m.forEach(function(w, M) {
      if (((F = w.type) == null || !F.originVueComponent) && w.type !== u_) return w.__v_isVNode || typeof w == "string" || typeof w == "number" ? void R.push(w) : void (w.type && (F = kE(w, v, T, b, E, m.__top__), R.push(F)));
      var F = w.type.originVueComponent;
      if (w.type === u_) {
        if (!w.props.component) return void R.push(w.props.node);
        F = w.props.component, w = ue({}, w);
        var I = ue({}, w.props);
        delete I.component, w.props = I;
      }
      F = (p = p === "all" || p instanceof Array ? p : [p]) === "all" || -1 < p.indexOf(F) ? ((w = ue({}, w)).__top__ = m.__top__, M = (I = FL(w, "_key_".concat(M), T, E)).props, I = I.slots, QE(w), w.children && (w.children.__top__ = m.__top__), ou(F, ue({}, M), I)) : kE(w, v, T, b, E), R.push(F);
    }), (R = R.flat(1 / 0)).length === 1 ? R[0] : R;
  };
}
KE({ vueComponents: "all", domTags: "all" });
KE({ reactComponents: "all", domTags: "all" });
new Dy();
const VL = /* @__PURE__ */ $T({
  __name: "CopilotApp",
  setup(f) {
    const p = zL(XM);
    return (v, S) => (qT(), BT(WT(p)));
  }
}), WL = {
  install(f) {
    f.component("CopilotApp", VL);
  }
};
export {
  VL as CopilotApp,
  WL as default
};
