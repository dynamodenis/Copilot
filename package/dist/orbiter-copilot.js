import { Fragment as DE, h as ou, reactive as PT, getCurrentInstance as FT, Teleport as IT, createApp as VT, Comment as HT, Text as $T, defineComponent as BT, createBlock as qT, openBlock as WT, unref as YT } from "vue";
function OE(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var my = { exports: {} }, yv = {}, yy = { exports: {} }, Mt = {};
var YC;
function GT() {
  if (YC) return Mt;
  YC = 1;
  var c = /* @__PURE__ */ Symbol.for("react.element"), v = /* @__PURE__ */ Symbol.for("react.portal"), p = /* @__PURE__ */ Symbol.for("react.fragment"), S = /* @__PURE__ */ Symbol.for("react.strict_mode"), x = /* @__PURE__ */ Symbol.for("react.profiler"), E = /* @__PURE__ */ Symbol.for("react.provider"), h = /* @__PURE__ */ Symbol.for("react.context"), k = /* @__PURE__ */ Symbol.for("react.forward_ref"), R = /* @__PURE__ */ Symbol.for("react.suspense"), w = /* @__PURE__ */ Symbol.for("react.memo"), N = /* @__PURE__ */ Symbol.for("react.lazy"), F = Symbol.iterator;
  function I(P) {
    return P === null || typeof P != "object" ? null : (P = F && P[F] || P["@@iterator"], typeof P == "function" ? P : null);
  }
  var B = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ie = Object.assign, ae = {};
  function oe(P, Z, tt) {
    this.props = P, this.context = Z, this.refs = ae, this.updater = tt || B;
  }
  oe.prototype.isReactComponent = {}, oe.prototype.setState = function(P, Z) {
    if (typeof P != "object" && typeof P != "function" && P != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, P, Z, "setState");
  }, oe.prototype.forceUpdate = function(P) {
    this.updater.enqueueForceUpdate(this, P, "forceUpdate");
  };
  function Se() {
  }
  Se.prototype = oe.prototype;
  function de(P, Z, tt) {
    this.props = P, this.context = Z, this.refs = ae, this.updater = tt || B;
  }
  var Ce = de.prototype = new Se();
  Ce.constructor = de, ie(Ce, oe.prototype), Ce.isPureReactComponent = !0;
  var Oe = Array.isArray, ye = Object.prototype.hasOwnProperty, Re = { current: null }, Ne = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $e(P, Z, tt) {
    var Ie, gt = {}, ot = null, Ue = null;
    if (Z != null) for (Ie in Z.ref !== void 0 && (Ue = Z.ref), Z.key !== void 0 && (ot = "" + Z.key), Z) ye.call(Z, Ie) && !Ne.hasOwnProperty(Ie) && (gt[Ie] = Z[Ie]);
    var dt = arguments.length - 2;
    if (dt === 1) gt.children = tt;
    else if (1 < dt) {
      for (var ht = Array(dt), Xt = 0; Xt < dt; Xt++) ht[Xt] = arguments[Xt + 2];
      gt.children = ht;
    }
    if (P && P.defaultProps) for (Ie in dt = P.defaultProps, dt) gt[Ie] === void 0 && (gt[Ie] = dt[Ie]);
    return { $$typeof: c, type: P, key: ot, ref: Ue, props: gt, _owner: Re.current };
  }
  function it(P, Z) {
    return { $$typeof: c, type: P.type, key: Z, ref: P.ref, props: P.props, _owner: P._owner };
  }
  function at(P) {
    return typeof P == "object" && P !== null && P.$$typeof === c;
  }
  function le(P) {
    var Z = { "=": "=0", ":": "=2" };
    return "$" + P.replace(/[=:]/g, function(tt) {
      return Z[tt];
    });
  }
  var G = /\/+/g;
  function X(P, Z) {
    return typeof P == "object" && P !== null && P.key != null ? le("" + P.key) : Z.toString(36);
  }
  function be(P, Z, tt, Ie, gt) {
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
          case c:
          case v:
            Ue = !0;
        }
    }
    if (Ue) return Ue = P, gt = gt(Ue), P = Ie === "" ? "." + X(Ue, 0) : Ie, Oe(gt) ? (tt = "", P != null && (tt = P.replace(G, "$&/") + "/"), be(gt, Z, tt, "", function(Xt) {
      return Xt;
    })) : gt != null && (at(gt) && (gt = it(gt, tt + (!gt.key || Ue && Ue.key === gt.key ? "" : ("" + gt.key).replace(G, "$&/") + "/") + P)), Z.push(gt)), 1;
    if (Ue = 0, Ie = Ie === "" ? "." : Ie + ":", Oe(P)) for (var dt = 0; dt < P.length; dt++) {
      ot = P[dt];
      var ht = Ie + X(ot, dt);
      Ue += be(ot, Z, tt, ht, gt);
    }
    else if (ht = I(P), typeof ht == "function") for (P = ht.call(P), dt = 0; !(ot = P.next()).done; ) ot = ot.value, ht = Ie + X(ot, dt++), Ue += be(ot, Z, tt, ht, gt);
    else if (ot === "object") throw Z = String(P), Error("Objects are not valid as a React child (found: " + (Z === "[object Object]" ? "object with keys {" + Object.keys(P).join(", ") + "}" : Z) + "). If you meant to render a collection of children, use an array instead.");
    return Ue;
  }
  function qe(P, Z, tt) {
    if (P == null) return P;
    var Ie = [], gt = 0;
    return be(P, Ie, "", "", function(ot) {
      return Z.call(tt, ot, gt++);
    }), Ie;
  }
  function ke(P) {
    if (P._status === -1) {
      var Z = P._result;
      Z = Z(), Z.then(function(tt) {
        (P._status === 0 || P._status === -1) && (P._status = 1, P._result = tt);
      }, function(tt) {
        (P._status === 0 || P._status === -1) && (P._status = 2, P._result = tt);
      }), P._status === -1 && (P._status = 0, P._result = Z);
    }
    if (P._status === 1) return P._result.default;
    throw P._result;
  }
  var xe = { current: null }, ne = { transition: null }, Le = { ReactCurrentDispatcher: xe, ReactCurrentBatchConfig: ne, ReactCurrentOwner: Re };
  function ge() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Mt.Children = { map: qe, forEach: function(P, Z, tt) {
    qe(P, function() {
      Z.apply(this, arguments);
    }, tt);
  }, count: function(P) {
    var Z = 0;
    return qe(P, function() {
      Z++;
    }), Z;
  }, toArray: function(P) {
    return qe(P, function(Z) {
      return Z;
    }) || [];
  }, only: function(P) {
    if (!at(P)) throw Error("React.Children.only expected to receive a single React element child.");
    return P;
  } }, Mt.Component = oe, Mt.Fragment = p, Mt.Profiler = x, Mt.PureComponent = de, Mt.StrictMode = S, Mt.Suspense = R, Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Le, Mt.act = ge, Mt.cloneElement = function(P, Z, tt) {
    if (P == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + P + ".");
    var Ie = ie({}, P.props), gt = P.key, ot = P.ref, Ue = P._owner;
    if (Z != null) {
      if (Z.ref !== void 0 && (ot = Z.ref, Ue = Re.current), Z.key !== void 0 && (gt = "" + Z.key), P.type && P.type.defaultProps) var dt = P.type.defaultProps;
      for (ht in Z) ye.call(Z, ht) && !Ne.hasOwnProperty(ht) && (Ie[ht] = Z[ht] === void 0 && dt !== void 0 ? dt[ht] : Z[ht]);
    }
    var ht = arguments.length - 2;
    if (ht === 1) Ie.children = tt;
    else if (1 < ht) {
      dt = Array(ht);
      for (var Xt = 0; Xt < ht; Xt++) dt[Xt] = arguments[Xt + 2];
      Ie.children = dt;
    }
    return { $$typeof: c, type: P.type, key: gt, ref: ot, props: Ie, _owner: Ue };
  }, Mt.createContext = function(P) {
    return P = { $$typeof: h, _currentValue: P, _currentValue2: P, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, P.Provider = { $$typeof: E, _context: P }, P.Consumer = P;
  }, Mt.createElement = $e, Mt.createFactory = function(P) {
    var Z = $e.bind(null, P);
    return Z.type = P, Z;
  }, Mt.createRef = function() {
    return { current: null };
  }, Mt.forwardRef = function(P) {
    return { $$typeof: k, render: P };
  }, Mt.isValidElement = at, Mt.lazy = function(P) {
    return { $$typeof: N, _payload: { _status: -1, _result: P }, _init: ke };
  }, Mt.memo = function(P, Z) {
    return { $$typeof: w, type: P, compare: Z === void 0 ? null : Z };
  }, Mt.startTransition = function(P) {
    var Z = ne.transition;
    ne.transition = {};
    try {
      P();
    } finally {
      ne.transition = Z;
    }
  }, Mt.unstable_act = ge, Mt.useCallback = function(P, Z) {
    return xe.current.useCallback(P, Z);
  }, Mt.useContext = function(P) {
    return xe.current.useContext(P);
  }, Mt.useDebugValue = function() {
  }, Mt.useDeferredValue = function(P) {
    return xe.current.useDeferredValue(P);
  }, Mt.useEffect = function(P, Z) {
    return xe.current.useEffect(P, Z);
  }, Mt.useId = function() {
    return xe.current.useId();
  }, Mt.useImperativeHandle = function(P, Z, tt) {
    return xe.current.useImperativeHandle(P, Z, tt);
  }, Mt.useInsertionEffect = function(P, Z) {
    return xe.current.useInsertionEffect(P, Z);
  }, Mt.useLayoutEffect = function(P, Z) {
    return xe.current.useLayoutEffect(P, Z);
  }, Mt.useMemo = function(P, Z) {
    return xe.current.useMemo(P, Z);
  }, Mt.useReducer = function(P, Z, tt) {
    return xe.current.useReducer(P, Z, tt);
  }, Mt.useRef = function(P) {
    return xe.current.useRef(P);
  }, Mt.useState = function(P) {
    return xe.current.useState(P);
  }, Mt.useSyncExternalStore = function(P, Z, tt) {
    return xe.current.useSyncExternalStore(P, Z, tt);
  }, Mt.useTransition = function() {
    return xe.current.useTransition();
  }, Mt.version = "18.3.1", Mt;
}
var Sv = { exports: {} };
Sv.exports;
var GC;
function QT() {
  return GC || (GC = 1, (function(c, v) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = "18.3.1", S = /* @__PURE__ */ Symbol.for("react.element"), x = /* @__PURE__ */ Symbol.for("react.portal"), E = /* @__PURE__ */ Symbol.for("react.fragment"), h = /* @__PURE__ */ Symbol.for("react.strict_mode"), k = /* @__PURE__ */ Symbol.for("react.profiler"), R = /* @__PURE__ */ Symbol.for("react.provider"), w = /* @__PURE__ */ Symbol.for("react.context"), N = /* @__PURE__ */ Symbol.for("react.forward_ref"), F = /* @__PURE__ */ Symbol.for("react.suspense"), I = /* @__PURE__ */ Symbol.for("react.suspense_list"), B = /* @__PURE__ */ Symbol.for("react.memo"), ie = /* @__PURE__ */ Symbol.for("react.lazy"), ae = /* @__PURE__ */ Symbol.for("react.offscreen"), oe = Symbol.iterator, Se = "@@iterator";
      function de(_) {
        if (_ === null || typeof _ != "object")
          return null;
        var L = oe && _[oe] || _[Se];
        return typeof L == "function" ? L : null;
      }
      var Ce = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Oe = {
        transition: null
      }, ye = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Re = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ne = {}, $e = null;
      function it(_) {
        $e = _;
      }
      Ne.setExtraStackFrame = function(_) {
        $e = _;
      }, Ne.getCurrentStack = null, Ne.getStackAddendum = function() {
        var _ = "";
        $e && (_ += $e);
        var L = Ne.getCurrentStack;
        return L && (_ += L() || ""), _;
      };
      var at = !1, le = !1, G = !1, X = !1, be = !1, qe = {
        ReactCurrentDispatcher: Ce,
        ReactCurrentBatchConfig: Oe,
        ReactCurrentOwner: Re
      };
      qe.ReactDebugCurrentFrame = Ne, qe.ReactCurrentActQueue = ye;
      function ke(_) {
        {
          for (var L = arguments.length, Y = new Array(L > 1 ? L - 1 : 0), J = 1; J < L; J++)
            Y[J - 1] = arguments[J];
          ne("warn", _, Y);
        }
      }
      function xe(_) {
        {
          for (var L = arguments.length, Y = new Array(L > 1 ? L - 1 : 0), J = 1; J < L; J++)
            Y[J - 1] = arguments[J];
          ne("error", _, Y);
        }
      }
      function ne(_, L, Y) {
        {
          var J = qe.ReactDebugCurrentFrame, _e = J.getStackAddendum();
          _e !== "" && (L += "%s", Y = Y.concat([_e]));
          var lt = Y.map(function(De) {
            return String(De);
          });
          lt.unshift("Warning: " + L), Function.prototype.apply.call(console[_], console, lt);
        }
      }
      var Le = {};
      function ge(_, L) {
        {
          var Y = _.constructor, J = Y && (Y.displayName || Y.name) || "ReactClass", _e = J + "." + L;
          if (Le[_e])
            return;
          xe("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", L, J), Le[_e] = !0;
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
        enqueueForceUpdate: function(_, L, Y) {
          ge(_, "forceUpdate");
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
        enqueueReplaceState: function(_, L, Y, J) {
          ge(_, "replaceState");
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
        enqueueSetState: function(_, L, Y, J) {
          ge(_, "setState");
        }
      }, Z = Object.assign, tt = {};
      Object.freeze(tt);
      function Ie(_, L, Y) {
        this.props = _, this.context = L, this.refs = tt, this.updater = Y || P;
      }
      Ie.prototype.isReactComponent = {}, Ie.prototype.setState = function(_, L) {
        if (typeof _ != "object" && typeof _ != "function" && _ != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, _, L, "setState");
      }, Ie.prototype.forceUpdate = function(_) {
        this.updater.enqueueForceUpdate(this, _, "forceUpdate");
      };
      {
        var gt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ot = function(_, L) {
          Object.defineProperty(Ie.prototype, _, {
            get: function() {
              ke("%s(...) is deprecated in plain JavaScript React classes. %s", L[0], L[1]);
            }
          });
        };
        for (var Ue in gt)
          gt.hasOwnProperty(Ue) && ot(Ue, gt[Ue]);
      }
      function dt() {
      }
      dt.prototype = Ie.prototype;
      function ht(_, L, Y) {
        this.props = _, this.context = L, this.refs = tt, this.updater = Y || P;
      }
      var Xt = ht.prototype = new dt();
      Xt.constructor = ht, Z(Xt, Ie.prototype), Xt.isPureReactComponent = !0;
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
          var L = typeof Symbol == "function" && Symbol.toStringTag, Y = L && _[Symbol.toStringTag] || _.constructor.name || "Object";
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
      function gi(_, L, Y) {
        var J = _.displayName;
        if (J)
          return J;
        var _e = L.displayName || L.name || "";
        return _e !== "" ? Y + "(" + _e + ")" : Y;
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
          case x:
            return "Portal";
          case k:
            return "Profiler";
          case h:
            return "StrictMode";
          case F:
            return "Suspense";
          case I:
            return "SuspenseList";
        }
        if (typeof _ == "object")
          switch (_.$$typeof) {
            case w:
              var L = _;
              return ma(L) + ".Consumer";
            case R:
              var Y = _;
              return ma(Y._context) + ".Provider";
            case N:
              return gi(_, _.render, "ForwardRef");
            case B:
              var J = _.displayName || null;
              return J !== null ? J : tr(_.type) || "Memo";
            case ie: {
              var _e = _, lt = _e._payload, De = _e._init;
              try {
                return tr(De(lt));
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
          var L = Object.getOwnPropertyDescriptor(_, "ref").get;
          if (L && L.isReactWarning)
            return !1;
        }
        return _.ref !== void 0;
      }
      function ya(_) {
        if (Tn.call(_, "key")) {
          var L = Object.getOwnPropertyDescriptor(_, "key").get;
          if (L && L.isReactWarning)
            return !1;
        }
        return _.key !== void 0;
      }
      function ei(_, L) {
        var Y = function() {
          br || (br = !0, xe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        Y.isReactWarning = !0, Object.defineProperty(_, "key", {
          get: Y,
          configurable: !0
        });
      }
      function _i(_, L) {
        var Y = function() {
          Za || (Za = !0, xe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        Y.isReactWarning = !0, Object.defineProperty(_, "ref", {
          get: Y,
          configurable: !0
        });
      }
      function we(_) {
        if (typeof _.ref == "string" && Re.current && _.__self && Re.current.stateNode !== _.__self) {
          var L = tr(Re.current.type);
          zn[L] || (xe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L, _.ref), zn[L] = !0);
        }
      }
      var Je = function(_, L, Y, J, _e, lt, De) {
        var ct = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: S,
          // Built-in properties that belong on the element
          type: _,
          key: L,
          ref: Y,
          props: De,
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
          value: _e
        }), Object.freeze && (Object.freeze(ct.props), Object.freeze(ct)), ct;
      };
      function Rt(_, L, Y) {
        var J, _e = {}, lt = null, De = null, ct = null, Nt = null;
        if (L != null) {
          wr(L) && (De = L.ref, we(L)), ya(L) && (Jr(L.key), lt = "" + L.key), ct = L.__self === void 0 ? null : L.__self, Nt = L.__source === void 0 ? null : L.__source;
          for (J in L)
            Tn.call(L, J) && !Qn.hasOwnProperty(J) && (_e[J] = L[J]);
        }
        var It = arguments.length - 2;
        if (It === 1)
          _e.children = Y;
        else if (It > 1) {
          for (var fn = Array(It), tn = 0; tn < It; tn++)
            fn[tn] = arguments[tn + 2];
          Object.freeze && Object.freeze(fn), _e.children = fn;
        }
        if (_ && _.defaultProps) {
          var kt = _.defaultProps;
          for (J in kt)
            _e[J] === void 0 && (_e[J] = kt[J]);
        }
        if (lt || De) {
          var nn = typeof _ == "function" ? _.displayName || _.name || "Unknown" : _;
          lt && ei(_e, nn), De && _i(_e, nn);
        }
        return Je(_, lt, De, ct, Nt, Re.current, _e);
      }
      function Gt(_, L) {
        var Y = Je(_.type, L, _.ref, _._self, _._source, _._owner, _.props);
        return Y;
      }
      function un(_, L, Y) {
        if (_ == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
        var J, _e = Z({}, _.props), lt = _.key, De = _.ref, ct = _._self, Nt = _._source, It = _._owner;
        if (L != null) {
          wr(L) && (De = L.ref, It = Re.current), ya(L) && (Jr(L.key), lt = "" + L.key);
          var fn;
          _.type && _.type.defaultProps && (fn = _.type.defaultProps);
          for (J in L)
            Tn.call(L, J) && !Qn.hasOwnProperty(J) && (L[J] === void 0 && fn !== void 0 ? _e[J] = fn[J] : _e[J] = L[J]);
        }
        var tn = arguments.length - 2;
        if (tn === 1)
          _e.children = Y;
        else if (tn > 1) {
          for (var kt = Array(tn), nn = 0; nn < tn; nn++)
            kt[nn] = arguments[nn + 2];
          _e.children = kt;
        }
        return Je(_.type, lt, De, ct, Nt, It, _e);
      }
      function _n(_) {
        return typeof _ == "object" && _ !== null && _.$$typeof === S;
      }
      var pn = ".", nr = ":";
      function sn(_) {
        var L = /[=:]/g, Y = {
          "=": "=0",
          ":": "=2"
        }, J = _.replace(L, function(_e) {
          return Y[_e];
        });
        return "$" + J;
      }
      var Jt = !1, Zt = /\/+/g;
      function ga(_) {
        return _.replace(Zt, "$&/");
      }
      function Rr(_, L) {
        return typeof _ == "object" && _ !== null && _.key != null ? (Jr(_.key), sn("" + _.key)) : L.toString(36);
      }
      function Na(_, L, Y, J, _e) {
        var lt = typeof _;
        (lt === "undefined" || lt === "boolean") && (_ = null);
        var De = !1;
        if (_ === null)
          De = !0;
        else
          switch (lt) {
            case "string":
            case "number":
              De = !0;
              break;
            case "object":
              switch (_.$$typeof) {
                case S:
                case x:
                  De = !0;
              }
          }
        if (De) {
          var ct = _, Nt = _e(ct), It = J === "" ? pn + Rr(ct, 0) : J;
          if (kn(Nt)) {
            var fn = "";
            It != null && (fn = ga(It) + "/"), Na(Nt, L, fn, "", function(hd) {
              return hd;
            });
          } else Nt != null && (_n(Nt) && (Nt.key && (!ct || ct.key !== Nt.key) && Jr(Nt.key), Nt = Gt(
            Nt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            Y + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Nt.key && (!ct || ct.key !== Nt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ga("" + Nt.key) + "/"
            ) : "") + It
          )), L.push(Nt));
          return 1;
        }
        var tn, kt, nn = 0, Sn = J === "" ? pn : J + nr;
        if (kn(_))
          for (var Mo = 0; Mo < _.length; Mo++)
            tn = _[Mo], kt = Sn + Rr(tn, Mo), nn += Na(tn, L, Y, kt, _e);
        else {
          var us = de(_);
          if (typeof us == "function") {
            var Ji = _;
            us === Ji.entries && (Jt || ke("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Jt = !0);
            for (var ss = us.call(Ji), _l, vd = 0; !(_l = ss.next()).done; )
              tn = _l.value, kt = Sn + Rr(tn, vd++), nn += Na(tn, L, Y, kt, _e);
          } else if (lt === "object") {
            var xc = String(_);
            throw new Error("Objects are not valid as a React child (found: " + (xc === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : xc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return nn;
      }
      function Qi(_, L, Y) {
        if (_ == null)
          return _;
        var J = [], _e = 0;
        return Na(_, J, "", "", function(lt) {
          return L.call(Y, lt, _e++);
        }), J;
      }
      function cl(_) {
        var L = 0;
        return Qi(_, function() {
          L++;
        }), L;
      }
      function fl(_, L, Y) {
        Qi(_, function() {
          L.apply(this, arguments);
        }, Y);
      }
      function bo(_) {
        return Qi(_, function(L) {
          return L;
        }) || [];
      }
      function wo(_) {
        if (!_n(_))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return _;
      }
      function dl(_) {
        var L = {
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
        L.Provider = {
          $$typeof: R,
          _context: L
        };
        var Y = !1, J = !1, _e = !1;
        {
          var lt = {
            $$typeof: w,
            _context: L
          };
          Object.defineProperties(lt, {
            Provider: {
              get: function() {
                return J || (J = !0, xe("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), L.Provider;
              },
              set: function(De) {
                L.Provider = De;
              }
            },
            _currentValue: {
              get: function() {
                return L._currentValue;
              },
              set: function(De) {
                L._currentValue = De;
              }
            },
            _currentValue2: {
              get: function() {
                return L._currentValue2;
              },
              set: function(De) {
                L._currentValue2 = De;
              }
            },
            _threadCount: {
              get: function() {
                return L._threadCount;
              },
              set: function(De) {
                L._threadCount = De;
              }
            },
            Consumer: {
              get: function() {
                return Y || (Y = !0, xe("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), L.Consumer;
              }
            },
            displayName: {
              get: function() {
                return L.displayName;
              },
              set: function(De) {
                _e || (ke("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", De), _e = !0);
              }
            }
          }), L.Consumer = lt;
        }
        return L._currentRenderer = null, L._currentRenderer2 = null, L;
      }
      var Lr = -1, Mr = 0, sr = 1, Si = 2;
      function ti(_) {
        if (_._status === Lr) {
          var L = _._result, Y = L();
          if (Y.then(function(lt) {
            if (_._status === Mr || _._status === Lr) {
              var De = _;
              De._status = sr, De._result = lt;
            }
          }, function(lt) {
            if (_._status === Mr || _._status === Lr) {
              var De = _;
              De._status = Si, De._result = lt;
            }
          }), _._status === Lr) {
            var J = _;
            J._status = Mr, J._result = Y;
          }
        }
        if (_._status === sr) {
          var _e = _._result;
          return _e === void 0 && xe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, _e), "default" in _e || xe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, _e), _e.default;
        } else
          throw _._result;
      }
      function Ci(_) {
        var L = {
          // We use these fields to store the result.
          _status: Lr,
          _result: _
        }, Y = {
          $$typeof: ie,
          _payload: L,
          _init: ti
        };
        {
          var J, _e;
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
                return _e;
              },
              set: function(lt) {
                xe("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), _e = lt, Object.defineProperty(Y, "propTypes", {
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
        var L = {
          $$typeof: N,
          render: _
        };
        {
          var Y;
          Object.defineProperty(L, "displayName", {
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
        return L;
      }
      var M;
      M = /* @__PURE__ */ Symbol.for("react.module.reference");
      function ue(_) {
        return !!(typeof _ == "string" || typeof _ == "function" || _ === E || _ === k || be || _ === h || _ === F || _ === I || X || _ === ae || at || le || G || typeof _ == "object" && _ !== null && (_.$$typeof === ie || _.$$typeof === B || _.$$typeof === R || _.$$typeof === w || _.$$typeof === N || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        _.$$typeof === M || _.getModuleId !== void 0));
      }
      function Me(_, L) {
        ue(_) || xe("memo: The first argument must be a component. Instead received: %s", _ === null ? "null" : typeof _);
        var Y = {
          $$typeof: B,
          type: _,
          compare: L === void 0 ? null : L
        };
        {
          var J;
          Object.defineProperty(Y, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return J;
            },
            set: function(_e) {
              J = _e, !_.name && !_.displayName && (_.displayName = _e);
            }
          });
        }
        return Y;
      }
      function We() {
        var _ = Ce.current;
        return _ === null && xe(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), _;
      }
      function Et(_) {
        var L = We();
        if (_._context !== void 0) {
          var Y = _._context;
          Y.Consumer === _ ? xe("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : Y.Provider === _ && xe("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return L.useContext(_);
      }
      function _t(_) {
        var L = We();
        return L.useState(_);
      }
      function Ot(_, L, Y) {
        var J = We();
        return J.useReducer(_, L, Y);
      }
      function Tt(_) {
        var L = We();
        return L.useRef(_);
      }
      function Dn(_, L) {
        var Y = We();
        return Y.useEffect(_, L);
      }
      function cn(_, L) {
        var Y = We();
        return Y.useInsertionEffect(_, L);
      }
      function vn(_, L) {
        var Y = We();
        return Y.useLayoutEffect(_, L);
      }
      function cr(_, L) {
        var Y = We();
        return Y.useCallback(_, L);
      }
      function ni(_, L) {
        var Y = We();
        return Y.useMemo(_, L);
      }
      function ri(_, L, Y) {
        var J = We();
        return J.useImperativeHandle(_, L, Y);
      }
      function xt(_, L) {
        {
          var Y = We();
          return Y.useDebugValue(_, L);
        }
      }
      function wt() {
        var _ = We();
        return _.useTransition();
      }
      function ai(_) {
        var L = We();
        return L.useDeferredValue(_);
      }
      function pl() {
        var _ = We();
        return _.useId();
      }
      function vl(_, L, Y) {
        var J = We();
        return J.useSyncExternalStore(_, L, Y);
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
              log: Z({}, _, {
                value: lu
              }),
              info: Z({}, _, {
                value: ko
              }),
              warn: Z({}, _, {
                value: Zr
              }),
              error: Z({}, _, {
                value: as
              }),
              group: Z({}, _, {
                value: jr
              }),
              groupCollapsed: Z({}, _, {
                value: Cc
              }),
              groupEnd: Z({}, _, {
                value: Ec
              })
            });
          }
          Ro < 0 && xe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ii = qe.ReactCurrentDispatcher, oi;
      function su(_, L, Y) {
        {
          if (oi === void 0)
            try {
              throw Error();
            } catch (_e) {
              var J = _e.stack.trim().match(/\n( *(at )?)/);
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
      function fu(_, L) {
        if (!_ || hl)
          return "";
        {
          var Y = Do.get(_);
          if (Y !== void 0)
            return Y;
        }
        var J;
        hl = !0;
        var _e = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var lt;
        lt = ii.current, ii.current = null, To();
        try {
          if (L) {
            var De = function() {
              throw Error();
            };
            if (Object.defineProperty(De.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(De, []);
              } catch (Sn) {
                J = Sn;
              }
              Reflect.construct(_, [], De);
            } else {
              try {
                De.call();
              } catch (Sn) {
                J = Sn;
              }
              _.call(De.prototype);
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
`), It = ct.length - 1, fn = Nt.length - 1; It >= 1 && fn >= 0 && ct[It] !== Nt[fn]; )
              fn--;
            for (; It >= 1 && fn >= 0; It--, fn--)
              if (ct[It] !== Nt[fn]) {
                if (It !== 1 || fn !== 1)
                  do
                    if (It--, fn--, fn < 0 || ct[It] !== Nt[fn]) {
                      var tn = `
` + ct[It].replace(" at new ", " at ");
                      return _.displayName && tn.includes("<anonymous>") && (tn = tn.replace("<anonymous>", _.displayName)), typeof _ == "function" && Do.set(_, tn), tn;
                    }
                  while (It >= 1 && fn >= 0);
                break;
              }
          }
        } finally {
          hl = !1, ii.current = lt, _a(), Error.prepareStackTrace = _e;
        }
        var kt = _ ? _.displayName || _.name : "", nn = kt ? su(kt) : "";
        return typeof _ == "function" && Do.set(_, nn), nn;
      }
      function Ki(_, L, Y) {
        return fu(_, !1);
      }
      function dd(_) {
        var L = _.prototype;
        return !!(L && L.isReactComponent);
      }
      function Xi(_, L, Y) {
        if (_ == null)
          return "";
        if (typeof _ == "function")
          return fu(_, dd(_));
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
            case N:
              return Ki(_.render);
            case B:
              return Xi(_.type, L, Y);
            case ie: {
              var J = _, _e = J._payload, lt = J._init;
              try {
                return Xi(lt(_e), L, Y);
              } catch {
              }
            }
          }
        return "";
      }
      var Ht = {}, du = qe.ReactDebugCurrentFrame;
      function Ft(_) {
        if (_) {
          var L = _._owner, Y = Xi(_.type, _._source, L ? L.type : null);
          du.setExtraStackFrame(Y);
        } else
          du.setExtraStackFrame(null);
      }
      function is(_, L, Y, J, _e) {
        {
          var lt = Function.call.bind(Tn);
          for (var De in _)
            if (lt(_, De)) {
              var ct = void 0;
              try {
                if (typeof _[De] != "function") {
                  var Nt = Error((J || "React class") + ": " + Y + " type `" + De + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof _[De] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Nt.name = "Invariant Violation", Nt;
                }
                ct = _[De](L, De, J, Y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (It) {
                ct = It;
              }
              ct && !(ct instanceof Error) && (Ft(_e), xe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", J || "React class", Y, De, typeof ct), Ft(null)), ct instanceof Error && !(ct.message in Ht) && (Ht[ct.message] = !0, Ft(_e), xe("Failed %s type: %s", Y, ct.message), Ft(null));
            }
        }
      }
      function xi(_) {
        if (_) {
          var L = _._owner, Y = Xi(_.type, _._source, L ? L.type : null);
          it(Y);
        } else
          it(null);
      }
      var yt;
      yt = !1;
      function pu() {
        if (Re.current) {
          var _ = tr(Re.current.type);
          if (_)
            return `

Check the render method of \`` + _ + "`.";
        }
        return "";
      }
      function fr(_) {
        if (_ !== void 0) {
          var L = _.fileName.replace(/^.*[\\\/]/, ""), Y = _.lineNumber;
          return `

Check your code at ` + L + ":" + Y + ".";
        }
        return "";
      }
      function bi(_) {
        return _ != null ? fr(_.__source) : "";
      }
      var Ar = {};
      function wi(_) {
        var L = pu();
        if (!L) {
          var Y = typeof _ == "string" ? _ : _.displayName || _.name;
          Y && (L = `

Check the top-level render call using <` + Y + ">.");
        }
        return L;
      }
      function hn(_, L) {
        if (!(!_._store || _._store.validated || _.key != null)) {
          _._store.validated = !0;
          var Y = wi(L);
          if (!Ar[Y]) {
            Ar[Y] = !0;
            var J = "";
            _ && _._owner && _._owner !== Re.current && (J = " It was passed a child from " + tr(_._owner.type) + "."), xi(_), xe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Y, J), xi(null);
          }
        }
      }
      function en(_, L) {
        if (typeof _ == "object") {
          if (kn(_))
            for (var Y = 0; Y < _.length; Y++) {
              var J = _[Y];
              _n(J) && hn(J, L);
            }
          else if (_n(_))
            _._store && (_._store.validated = !0);
          else if (_) {
            var _e = de(_);
            if (typeof _e == "function" && _e !== _.entries)
              for (var lt = _e.call(_), De; !(De = lt.next()).done; )
                _n(De.value) && hn(De.value, L);
          }
        }
      }
      function Oo(_) {
        {
          var L = _.type;
          if (L == null || typeof L == "string")
            return;
          var Y;
          if (typeof L == "function")
            Y = L.propTypes;
          else if (typeof L == "object" && (L.$$typeof === N || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          L.$$typeof === B))
            Y = L.propTypes;
          else
            return;
          if (Y) {
            var J = tr(L);
            is(Y, _.props, "prop", J, _);
          } else if (L.PropTypes !== void 0 && !yt) {
            yt = !0;
            var _e = tr(L);
            xe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _e || "Unknown");
          }
          typeof L.getDefaultProps == "function" && !L.getDefaultProps.isReactClassApproved && xe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Kn(_) {
        {
          for (var L = Object.keys(_.props), Y = 0; Y < L.length; Y++) {
            var J = L[Y];
            if (J !== "children" && J !== "key") {
              xi(_), xe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", J), xi(null);
              break;
            }
          }
          _.ref !== null && (xi(_), xe("Invalid attribute `ref` supplied to `React.Fragment`."), xi(null));
        }
      }
      function Ur(_, L, Y) {
        var J = ue(_);
        if (!J) {
          var _e = "";
          (_ === void 0 || typeof _ == "object" && _ !== null && Object.keys(_).length === 0) && (_e += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var lt = bi(L);
          lt ? _e += lt : _e += pu();
          var De;
          _ === null ? De = "null" : kn(_) ? De = "array" : _ !== void 0 && _.$$typeof === S ? (De = "<" + (tr(_.type) || "Unknown") + " />", _e = " Did you accidentally export a JSX literal instead of a component?") : De = typeof _, xe("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", De, _e);
        }
        var ct = Rt.apply(this, arguments);
        if (ct == null)
          return ct;
        if (J)
          for (var Nt = 2; Nt < arguments.length; Nt++)
            en(arguments[Nt], _);
        return _ === E ? Kn(ct) : Oo(ct), ct;
      }
      var La = !1;
      function ml(_) {
        var L = Ur.bind(null, _);
        return L.type = _, La || (La = !0, ke("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(L, "type", {
          enumerable: !1,
          get: function() {
            return ke("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: _
            }), _;
          }
        }), L;
      }
      function os(_, L, Y) {
        for (var J = un.apply(this, arguments), _e = 2; _e < arguments.length; _e++)
          en(arguments[_e], J.type);
        return Oo(J), J;
      }
      function ls(_, L) {
        var Y = Oe.transition;
        Oe.transition = {};
        var J = Oe.transition;
        Oe.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          _();
        } finally {
          if (Oe.transition = Y, Y === null && J._updatedFibers) {
            var _e = J._updatedFibers.size;
            _e > 10 && ke("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), J._updatedFibers.clear();
          }
        }
      }
      var No = !1, yl = null;
      function pd(_) {
        if (yl === null)
          try {
            var L = ("require" + Math.random()).slice(0, 7), Y = c && c[L];
            yl = Y.call(c, "timers").setImmediate;
          } catch {
            yl = function(_e) {
              No === !1 && (No = !0, typeof MessageChannel > "u" && xe("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var lt = new MessageChannel();
              lt.port1.onmessage = _e, lt.port2.postMessage(void 0);
            };
          }
        return yl(_);
      }
      var Ma = 0, li = !1;
      function Ri(_) {
        {
          var L = Ma;
          Ma++, ye.current === null && (ye.current = []);
          var Y = ye.isBatchingLegacy, J;
          try {
            if (ye.isBatchingLegacy = !0, J = _(), !Y && ye.didScheduleLegacyUpdate) {
              var _e = ye.current;
              _e !== null && (ye.didScheduleLegacyUpdate = !1, Lo(_e));
            }
          } catch (kt) {
            throw ja(L), kt;
          } finally {
            ye.isBatchingLegacy = Y;
          }
          if (J !== null && typeof J == "object" && typeof J.then == "function") {
            var lt = J, De = !1, ct = {
              then: function(kt, nn) {
                De = !0, lt.then(function(Sn) {
                  ja(L), Ma === 0 ? vu(Sn, kt, nn) : kt(Sn);
                }, function(Sn) {
                  ja(L), nn(Sn);
                });
              }
            };
            return !li && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              De || (li = !0, xe("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), ct;
          } else {
            var Nt = J;
            if (ja(L), Ma === 0) {
              var It = ye.current;
              It !== null && (Lo(It), ye.current = null);
              var fn = {
                then: function(kt, nn) {
                  ye.current === null ? (ye.current = [], vu(Nt, kt, nn)) : kt(Nt);
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
        _ !== Ma - 1 && xe("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ma = _;
      }
      function vu(_, L, Y) {
        {
          var J = ye.current;
          if (J !== null)
            try {
              Lo(J), pd(function() {
                J.length === 0 ? (ye.current = null, L(_)) : vu(_, L, Y);
              });
            } catch (_e) {
              Y(_e);
            }
          else
            L(_);
        }
      }
      var hu = !1;
      function Lo(_) {
        if (!hu) {
          hu = !0;
          var L = 0;
          try {
            for (; L < _.length; L++) {
              var Y = _[L];
              do
                Y = Y(!0);
              while (Y !== null);
            }
            _.length = 0;
          } catch (J) {
            throw _ = _.slice(L + 1), J;
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
      v.Children = ui, v.Component = Ie, v.Fragment = E, v.Profiler = k, v.PureComponent = ht, v.StrictMode = h, v.Suspense = F, v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qe, v.act = Ri, v.cloneElement = mu, v.createContext = dl, v.createElement = gl, v.createFactory = yu, v.createRef = Un, v.forwardRef = Ei, v.isValidElement = _n, v.lazy = Ci, v.memo = Me, v.startTransition = ls, v.unstable_act = Ri, v.useCallback = cr, v.useContext = Et, v.useDebugValue = xt, v.useDeferredValue = ai, v.useEffect = Dn, v.useId = pl, v.useImperativeHandle = ri, v.useInsertionEffect = cn, v.useLayoutEffect = vn, v.useMemo = ni, v.useReducer = Ot, v.useRef = Tt, v.useState = _t, v.useSyncExternalStore = vl, v.useTransition = wt, v.version = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(Sv, Sv.exports)), Sv.exports;
}
var QC;
function Ev() {
  return QC || (QC = 1, process.env.NODE_ENV === "production" ? yy.exports = GT() : yy.exports = QT()), yy.exports;
}
var KC;
function KT() {
  if (KC) return yv;
  KC = 1;
  var c = Ev(), v = /* @__PURE__ */ Symbol.for("react.element"), p = /* @__PURE__ */ Symbol.for("react.fragment"), S = Object.prototype.hasOwnProperty, x = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(k, R, w) {
    var N, F = {}, I = null, B = null;
    w !== void 0 && (I = "" + w), R.key !== void 0 && (I = "" + R.key), R.ref !== void 0 && (B = R.ref);
    for (N in R) S.call(R, N) && !E.hasOwnProperty(N) && (F[N] = R[N]);
    if (k && k.defaultProps) for (N in R = k.defaultProps, R) F[N] === void 0 && (F[N] = R[N]);
    return { $$typeof: v, type: k, key: I, ref: B, props: F, _owner: x.current };
  }
  return yv.Fragment = p, yv.jsx = h, yv.jsxs = h, yv;
}
var gv = {};
var XC;
function XT() {
  return XC || (XC = 1, process.env.NODE_ENV !== "production" && (function() {
    var c = Ev(), v = /* @__PURE__ */ Symbol.for("react.element"), p = /* @__PURE__ */ Symbol.for("react.portal"), S = /* @__PURE__ */ Symbol.for("react.fragment"), x = /* @__PURE__ */ Symbol.for("react.strict_mode"), E = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), k = /* @__PURE__ */ Symbol.for("react.context"), R = /* @__PURE__ */ Symbol.for("react.forward_ref"), w = /* @__PURE__ */ Symbol.for("react.suspense"), N = /* @__PURE__ */ Symbol.for("react.suspense_list"), F = /* @__PURE__ */ Symbol.for("react.memo"), I = /* @__PURE__ */ Symbol.for("react.lazy"), B = /* @__PURE__ */ Symbol.for("react.offscreen"), ie = Symbol.iterator, ae = "@@iterator";
    function oe(M) {
      if (M === null || typeof M != "object")
        return null;
      var ue = ie && M[ie] || M[ae];
      return typeof ue == "function" ? ue : null;
    }
    var Se = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function de(M) {
      {
        for (var ue = arguments.length, Me = new Array(ue > 1 ? ue - 1 : 0), We = 1; We < ue; We++)
          Me[We - 1] = arguments[We];
        Ce("error", M, Me);
      }
    }
    function Ce(M, ue, Me) {
      {
        var We = Se.ReactDebugCurrentFrame, Et = We.getStackAddendum();
        Et !== "" && (ue += "%s", Me = Me.concat([Et]));
        var _t = Me.map(function(Ot) {
          return String(Ot);
        });
        _t.unshift("Warning: " + ue), Function.prototype.apply.call(console[M], console, _t);
      }
    }
    var Oe = !1, ye = !1, Re = !1, Ne = !1, $e = !1, it;
    it = /* @__PURE__ */ Symbol.for("react.module.reference");
    function at(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === S || M === E || $e || M === x || M === w || M === N || Ne || M === B || Oe || ye || Re || typeof M == "object" && M !== null && (M.$$typeof === I || M.$$typeof === F || M.$$typeof === h || M.$$typeof === k || M.$$typeof === R || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === it || M.getModuleId !== void 0));
    }
    function le(M, ue, Me) {
      var We = M.displayName;
      if (We)
        return We;
      var Et = ue.displayName || ue.name || "";
      return Et !== "" ? Me + "(" + Et + ")" : Me;
    }
    function G(M) {
      return M.displayName || "Context";
    }
    function X(M) {
      if (M == null)
        return null;
      if (typeof M.tag == "number" && de("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof M == "function")
        return M.displayName || M.name || null;
      if (typeof M == "string")
        return M;
      switch (M) {
        case S:
          return "Fragment";
        case p:
          return "Portal";
        case E:
          return "Profiler";
        case x:
          return "StrictMode";
        case w:
          return "Suspense";
        case N:
          return "SuspenseList";
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case k:
            var ue = M;
            return G(ue) + ".Consumer";
          case h:
            var Me = M;
            return G(Me._context) + ".Provider";
          case R:
            return le(M, M.render, "ForwardRef");
          case F:
            var We = M.displayName || null;
            return We !== null ? We : X(M.type) || "Memo";
          case I: {
            var Et = M, _t = Et._payload, Ot = Et._init;
            try {
              return X(Ot(_t));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var be = Object.assign, qe = 0, ke, xe, ne, Le, ge, P, Z;
    function tt() {
    }
    tt.__reactDisabledLog = !0;
    function Ie() {
      {
        if (qe === 0) {
          ke = console.log, xe = console.info, ne = console.warn, Le = console.error, ge = console.group, P = console.groupCollapsed, Z = console.groupEnd;
          var M = {
            configurable: !0,
            enumerable: !0,
            value: tt,
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
        qe++;
      }
    }
    function gt() {
      {
        if (qe--, qe === 0) {
          var M = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: be({}, M, {
              value: ke
            }),
            info: be({}, M, {
              value: xe
            }),
            warn: be({}, M, {
              value: ne
            }),
            error: be({}, M, {
              value: Le
            }),
            group: be({}, M, {
              value: ge
            }),
            groupCollapsed: be({}, M, {
              value: P
            }),
            groupEnd: be({}, M, {
              value: Z
            })
          });
        }
        qe < 0 && de("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ot = Se.ReactCurrentDispatcher, Ue;
    function dt(M, ue, Me) {
      {
        if (Ue === void 0)
          try {
            throw Error();
          } catch (Et) {
            var We = Et.stack.trim().match(/\n( *(at )?)/);
            Ue = We && We[1] || "";
          }
        return `
` + Ue + M;
      }
    }
    var ht = !1, Xt;
    {
      var Un = typeof WeakMap == "function" ? WeakMap : Map;
      Xt = new Un();
    }
    function Nr(M, ue) {
      if (!M || ht)
        return "";
      {
        var Me = Xt.get(M);
        if (Me !== void 0)
          return Me;
      }
      var We;
      ht = !0;
      var Et = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _t;
      _t = ot.current, ot.current = null, Ie();
      try {
        if (ue) {
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
            Reflect.construct(M, [], Ot);
          } else {
            try {
              Ot.call();
            } catch (xt) {
              We = xt;
            }
            M.call(Ot.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xt) {
            We = xt;
          }
          M();
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
                    return M.displayName && cr.includes("<anonymous>") && (cr = cr.replace("<anonymous>", M.displayName)), typeof M == "function" && Xt.set(M, cr), cr;
                  }
                while (cn >= 1 && vn >= 0);
              break;
            }
        }
      } finally {
        ht = !1, ot.current = _t, gt(), Error.prepareStackTrace = Et;
      }
      var ni = M ? M.displayName || M.name : "", ri = ni ? dt(ni) : "";
      return typeof M == "function" && Xt.set(M, ri), ri;
    }
    function kn(M, ue, Me) {
      return Nr(M, !1);
    }
    function ur(M) {
      var ue = M.prototype;
      return !!(ue && ue.isReactComponent);
    }
    function Yn(M, ue, Me) {
      if (M == null)
        return "";
      if (typeof M == "function")
        return Nr(M, ur(M));
      if (typeof M == "string")
        return dt(M);
      switch (M) {
        case w:
          return dt("Suspense");
        case N:
          return dt("SuspenseList");
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case R:
            return kn(M.render);
          case F:
            return Yn(M.type, ue, Me);
          case I: {
            var We = M, Et = We._payload, _t = We._init;
            try {
              return Yn(_t(Et), ue, Me);
            } catch {
            }
          }
        }
      return "";
    }
    var Gn = Object.prototype.hasOwnProperty, Jr = {}, gi = Se.ReactDebugCurrentFrame;
    function ma(M) {
      if (M) {
        var ue = M._owner, Me = Yn(M.type, M._source, ue ? ue.type : null);
        gi.setExtraStackFrame(Me);
      } else
        gi.setExtraStackFrame(null);
    }
    function tr(M, ue, Me, We, Et) {
      {
        var _t = Function.call.bind(Gn);
        for (var Ot in M)
          if (_t(M, Ot)) {
            var Tt = void 0;
            try {
              if (typeof M[Ot] != "function") {
                var Dn = Error((We || "React class") + ": " + Me + " type `" + Ot + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof M[Ot] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Dn.name = "Invariant Violation", Dn;
              }
              Tt = M[Ot](ue, Ot, We, Me, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (cn) {
              Tt = cn;
            }
            Tt && !(Tt instanceof Error) && (ma(Et), de("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", We || "React class", Me, Ot, typeof Tt), ma(null)), Tt instanceof Error && !(Tt.message in Jr) && (Jr[Tt.message] = !0, ma(Et), de("Failed %s type: %s", Me, Tt.message), ma(null));
          }
      }
    }
    var Tn = Array.isArray;
    function Qn(M) {
      return Tn(M);
    }
    function br(M) {
      {
        var ue = typeof Symbol == "function" && Symbol.toStringTag, Me = ue && M[Symbol.toStringTag] || M.constructor.name || "Object";
        return Me;
      }
    }
    function Za(M) {
      try {
        return zn(M), !1;
      } catch {
        return !0;
      }
    }
    function zn(M) {
      return "" + M;
    }
    function wr(M) {
      if (Za(M))
        return de("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", br(M)), zn(M);
    }
    var ya = Se.ReactCurrentOwner, ei = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _i, we;
    function Je(M) {
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
      typeof M.ref == "string" && ya.current;
    }
    function un(M, ue) {
      {
        var Me = function() {
          _i || (_i = !0, de("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ue));
        };
        Me.isReactWarning = !0, Object.defineProperty(M, "key", {
          get: Me,
          configurable: !0
        });
      }
    }
    function _n(M, ue) {
      {
        var Me = function() {
          we || (we = !0, de("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ue));
        };
        Me.isReactWarning = !0, Object.defineProperty(M, "ref", {
          get: Me,
          configurable: !0
        });
      }
    }
    var pn = function(M, ue, Me, We, Et, _t, Ot) {
      var Tt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: M,
        key: ue,
        ref: Me,
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
    function nr(M, ue, Me, We, Et) {
      {
        var _t, Ot = {}, Tt = null, Dn = null;
        Me !== void 0 && (wr(Me), Tt = "" + Me), Rt(ue) && (wr(ue.key), Tt = "" + ue.key), Je(ue) && (Dn = ue.ref, Gt(ue, Et));
        for (_t in ue)
          Gn.call(ue, _t) && !ei.hasOwnProperty(_t) && (Ot[_t] = ue[_t]);
        if (M && M.defaultProps) {
          var cn = M.defaultProps;
          for (_t in cn)
            Ot[_t] === void 0 && (Ot[_t] = cn[_t]);
        }
        if (Tt || Dn) {
          var vn = typeof M == "function" ? M.displayName || M.name || "Unknown" : M;
          Tt && un(Ot, vn), Dn && _n(Ot, vn);
        }
        return pn(M, Tt, Dn, Et, We, ya.current, Ot);
      }
    }
    var sn = Se.ReactCurrentOwner, Jt = Se.ReactDebugCurrentFrame;
    function Zt(M) {
      if (M) {
        var ue = M._owner, Me = Yn(M.type, M._source, ue ? ue.type : null);
        Jt.setExtraStackFrame(Me);
      } else
        Jt.setExtraStackFrame(null);
    }
    var ga;
    ga = !1;
    function Rr(M) {
      return typeof M == "object" && M !== null && M.$$typeof === v;
    }
    function Na() {
      {
        if (sn.current) {
          var M = X(sn.current.type);
          if (M)
            return `

Check the render method of \`` + M + "`.";
        }
        return "";
      }
    }
    function Qi(M) {
      return "";
    }
    var cl = {};
    function fl(M) {
      {
        var ue = Na();
        if (!ue) {
          var Me = typeof M == "string" ? M : M.displayName || M.name;
          Me && (ue = `

Check the top-level render call using <` + Me + ">.");
        }
        return ue;
      }
    }
    function bo(M, ue) {
      {
        if (!M._store || M._store.validated || M.key != null)
          return;
        M._store.validated = !0;
        var Me = fl(ue);
        if (cl[Me])
          return;
        cl[Me] = !0;
        var We = "";
        M && M._owner && M._owner !== sn.current && (We = " It was passed a child from " + X(M._owner.type) + "."), Zt(M), de('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Me, We), Zt(null);
      }
    }
    function wo(M, ue) {
      {
        if (typeof M != "object")
          return;
        if (Qn(M))
          for (var Me = 0; Me < M.length; Me++) {
            var We = M[Me];
            Rr(We) && bo(We, ue);
          }
        else if (Rr(M))
          M._store && (M._store.validated = !0);
        else if (M) {
          var Et = oe(M);
          if (typeof Et == "function" && Et !== M.entries)
            for (var _t = Et.call(M), Ot; !(Ot = _t.next()).done; )
              Rr(Ot.value) && bo(Ot.value, ue);
        }
      }
    }
    function dl(M) {
      {
        var ue = M.type;
        if (ue == null || typeof ue == "string")
          return;
        var Me;
        if (typeof ue == "function")
          Me = ue.propTypes;
        else if (typeof ue == "object" && (ue.$$typeof === R || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ue.$$typeof === F))
          Me = ue.propTypes;
        else
          return;
        if (Me) {
          var We = X(ue);
          tr(Me, M.props, "prop", We, M);
        } else if (ue.PropTypes !== void 0 && !ga) {
          ga = !0;
          var Et = X(ue);
          de("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Et || "Unknown");
        }
        typeof ue.getDefaultProps == "function" && !ue.getDefaultProps.isReactClassApproved && de("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Lr(M) {
      {
        for (var ue = Object.keys(M.props), Me = 0; Me < ue.length; Me++) {
          var We = ue[Me];
          if (We !== "children" && We !== "key") {
            Zt(M), de("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", We), Zt(null);
            break;
          }
        }
        M.ref !== null && (Zt(M), de("Invalid attribute `ref` supplied to `React.Fragment`."), Zt(null));
      }
    }
    var Mr = {};
    function sr(M, ue, Me, We, Et, _t) {
      {
        var Ot = at(M);
        if (!Ot) {
          var Tt = "";
          (M === void 0 || typeof M == "object" && M !== null && Object.keys(M).length === 0) && (Tt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Dn = Qi();
          Dn ? Tt += Dn : Tt += Na();
          var cn;
          M === null ? cn = "null" : Qn(M) ? cn = "array" : M !== void 0 && M.$$typeof === v ? (cn = "<" + (X(M.type) || "Unknown") + " />", Tt = " Did you accidentally export a JSX literal instead of a component?") : cn = typeof M, de("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", cn, Tt);
        }
        var vn = nr(M, ue, Me, Et, _t);
        if (vn == null)
          return vn;
        if (Ot) {
          var cr = ue.children;
          if (cr !== void 0)
            if (We)
              if (Qn(cr)) {
                for (var ni = 0; ni < cr.length; ni++)
                  wo(cr[ni], M);
                Object.freeze && Object.freeze(cr);
              } else
                de("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              wo(cr, M);
        }
        if (Gn.call(ue, "key")) {
          var ri = X(M), xt = Object.keys(ue).filter(function(pl) {
            return pl !== "key";
          }), wt = xt.length > 0 ? "{key: someKey, " + xt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Mr[ri + wt]) {
            var ai = xt.length > 0 ? "{" + xt.join(": ..., ") + ": ...}" : "{}";
            de(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, wt, ri, ai, ri), Mr[ri + wt] = !0;
          }
        }
        return M === S ? Lr(vn) : dl(vn), vn;
      }
    }
    function Si(M, ue, Me) {
      return sr(M, ue, Me, !0);
    }
    function ti(M, ue, Me) {
      return sr(M, ue, Me, !1);
    }
    var Ci = ti, Ei = Si;
    gv.Fragment = S, gv.jsx = Ci, gv.jsxs = Ei;
  })()), gv;
}
var JC;
function JT() {
  return JC || (JC = 1, process.env.NODE_ENV === "production" ? my.exports = KT() : my.exports = XT()), my.exports;
}
var D = JT(), He = Ev();
const Ja = /* @__PURE__ */ OE(He), ZC = (c) => Symbol.iterator in c, eE = (c) => (
  // HACK: avoid checking entries type
  "entries" in c
), tE = (c, v) => {
  const p = c instanceof Map ? c : new Map(c.entries()), S = v instanceof Map ? v : new Map(v.entries());
  if (p.size !== S.size)
    return !1;
  for (const [x, E] of p)
    if (!S.has(x) || !Object.is(E, S.get(x)))
      return !1;
  return !0;
}, ZT = (c, v) => {
  const p = c[Symbol.iterator](), S = v[Symbol.iterator]();
  let x = p.next(), E = S.next();
  for (; !x.done && !E.done; ) {
    if (!Object.is(x.value, E.value))
      return !1;
    x = p.next(), E = S.next();
  }
  return !!x.done && !!E.done;
};
function e3(c, v) {
  return Object.is(c, v) ? !0 : typeof c != "object" || c === null || typeof v != "object" || v === null || Object.getPrototypeOf(c) !== Object.getPrototypeOf(v) ? !1 : ZC(c) && ZC(v) ? eE(c) && eE(v) ? tE(c, v) : ZT(c, v) : tE(
    { entries: () => Object.entries(c) },
    { entries: () => Object.entries(v) }
  );
}
function cd(c) {
  const v = Ja.useRef(void 0);
  return (p) => {
    const S = c(p);
    return e3(v.current, S) ? v.current : v.current = S;
  };
}
const t3 = "_sidebar_gxqe0_1", n3 = "_sidebarNav_gxqe0_24", r3 = "_sectionWrapper_gxqe0_32", a3 = "_sectionHeader_gxqe0_37", i3 = "_active_gxqe0_48", o3 = "_sidebarItemInHeader_gxqe0_68", l3 = "_plusButton_gxqe0_71", u3 = "_sidebarItem_gxqe0_68", s3 = "_sidebarIcon_gxqe0_138", c3 = "_sidebarLabel_gxqe0_148", f3 = "_plusIcon_gxqe0_173", d3 = "_rotated_gxqe0_178", Rn = {
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
}, p3 = "_expandedContent_pymls_2", v3 = "_searchWrapper_pymls_17", h3 = "_searchContainer_pymls_23", m3 = "_searchDropdown_pymls_33", y3 = "_dropdownItem_pymls_69", g3 = "_selected_pymls_84", _3 = "_personAvatar_pymls_97", S3 = "_avatarPlaceholder_pymls_111", C3 = "_personInfo_pymls_123", E3 = "_personName_pymls_131", x3 = "_personTitle_pymls_140", b3 = "_dropdownEmpty_pymls_148", w3 = "_searchIcon_pymls_155", R3 = "_searchInput_pymls_160", k3 = "_suggestionsList_pymls_172", T3 = "_suggestionItemWrapper_pymls_191", D3 = "_suggestionItem_pymls_191", O3 = "_statusIcon_pymls_219", N3 = "_moreButton_pymls_222", L3 = "_childItem_pymls_225", M3 = "_loadingState_pymls_299", j3 = "_loadingSpinner_pymls_309", A3 = "_emptyState_pymls_323", U3 = "_errorState_pymls_330", Pt = {
  expandedContent: p3,
  searchWrapper: v3,
  searchContainer: h3,
  searchDropdown: m3,
  dropdownItem: y3,
  selected: g3,
  personAvatar: _3,
  avatarPlaceholder: S3,
  personInfo: C3,
  personName: E3,
  personTitle: x3,
  dropdownEmpty: b3,
  searchIcon: w3,
  searchInput: R3,
  suggestionsList: k3,
  suggestionItemWrapper: T3,
  suggestionItem: D3,
  statusIcon: O3,
  moreButton: N3,
  childItem: L3,
  loadingState: M3,
  loadingSpinner: j3,
  emptyState: A3,
  errorState: U3
}, nE = (c) => {
  let v;
  const p = /* @__PURE__ */ new Set(), S = (w, N) => {
    const F = typeof w == "function" ? w(v) : w;
    if (!Object.is(F, v)) {
      const I = v;
      v = N ?? (typeof F != "object" || F === null) ? F : Object.assign({}, v, F), p.forEach((B) => B(v, I));
    }
  }, x = () => v, k = { setState: S, getState: x, getInitialState: () => R, subscribe: (w) => (p.add(w), () => p.delete(w)) }, R = v = c(S, x, k);
  return k;
}, z3 = ((c) => c ? nE(c) : nE), P3 = (c) => c;
function F3(c, v = P3) {
  const p = Ja.useSyncExternalStore(
    c.subscribe,
    Ja.useCallback(() => v(c.getState()), [c, v]),
    Ja.useCallback(() => v(c.getInitialState()), [c, v])
  );
  return Ja.useDebugValue(p), p;
}
const rE = (c) => {
  const v = z3(c), p = (S) => F3(v, S);
  return Object.assign(p, v), p;
}, NE = ((c) => c ? rE(c) : rE), aE = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 }, Cv = /* @__PURE__ */ new Map(), gy = (c) => {
  const v = Cv.get(c);
  return v ? Object.fromEntries(
    Object.entries(v.stores).map(([p, S]) => [p, S.getState()])
  ) : {};
}, I3 = (c, v, p) => {
  if (c === void 0)
    return {
      type: "untracked",
      connection: v.connect(p)
    };
  const S = Cv.get(p.name);
  if (S)
    return { type: "tracked", store: c, ...S };
  const x = {
    connection: v.connect(p),
    stores: {}
  };
  return Cv.set(p.name, x), { type: "tracked", store: c, ...x };
}, V3 = (c, v) => {
  if (v === void 0) return;
  const p = Cv.get(c);
  p && (delete p.stores[v], Object.keys(p.stores).length === 0 && Cv.delete(c));
}, H3 = (c) => {
  var v, p;
  if (!c) return;
  const S = c.split(`
`), x = S.findIndex(
    (h) => h.includes("api.setState")
  );
  if (x < 0) return;
  const E = ((v = S[x + 1]) == null ? void 0 : v.trim()) || "";
  return (p = /.+ (.+) .+/.exec(E)) == null ? void 0 : p[1];
}, $3 = (c, v = {}) => (p, S, x) => {
  const { enabled: E, anonymousActionType: h, store: k, ...R } = v;
  let w;
  try {
    w = (E ?? (aE ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch {
  }
  if (!w)
    return c(p, S, x);
  const { connection: N, ...F } = I3(k, w, R);
  let I = !0;
  x.setState = ((ae, oe, Se) => {
    const de = p(ae, oe);
    if (!I) return de;
    const Ce = Se === void 0 ? {
      type: h || H3(new Error().stack) || "anonymous"
    } : typeof Se == "string" ? { type: Se } : Se;
    return k === void 0 ? (N?.send(Ce, S()), de) : (N?.send(
      {
        ...Ce,
        type: `${k}/${Ce.type}`
      },
      {
        ...gy(R.name),
        [k]: x.getState()
      }
    ), de);
  }), x.devtools = {
    cleanup: () => {
      N && typeof N.unsubscribe == "function" && N.unsubscribe(), V3(R.name, k);
    }
  };
  const B = (...ae) => {
    const oe = I;
    I = !1, p(...ae), I = oe;
  }, ie = c(x.setState, S, x);
  if (F.type === "untracked" ? N?.init(ie) : (F.stores[F.store] = x, N?.init(
    Object.fromEntries(
      Object.entries(F.stores).map(([ae, oe]) => [
        ae,
        ae === F.store ? ie : oe.getState()
      ])
    )
  )), x.dispatchFromDevtools && typeof x.dispatch == "function") {
    let ae = !1;
    const oe = x.dispatch;
    x.dispatch = (...Se) => {
      (aE ? "production" : void 0) !== "production" && Se[0].type === "__setState" && !ae && (console.warn(
        '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
      ), ae = !0), oe(...Se);
    };
  }
  return N.subscribe((ae) => {
    var oe;
    switch (ae.type) {
      case "ACTION":
        if (typeof ae.payload != "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return G1(
          ae.payload,
          (Se) => {
            if (Se.type === "__setState") {
              if (k === void 0) {
                B(Se.state);
                return;
              }
              Object.keys(Se.state).length !== 1 && console.error(
                `
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `
              );
              const de = Se.state[k];
              if (de == null)
                return;
              JSON.stringify(x.getState()) !== JSON.stringify(de) && B(de);
              return;
            }
            x.dispatchFromDevtools && typeof x.dispatch == "function" && x.dispatch(Se);
          }
        );
      case "DISPATCH":
        switch (ae.payload.type) {
          case "RESET":
            return B(ie), k === void 0 ? N?.init(x.getState()) : N?.init(gy(R.name));
          case "COMMIT":
            if (k === void 0) {
              N?.init(x.getState());
              return;
            }
            return N?.init(gy(R.name));
          case "ROLLBACK":
            return G1(ae.state, (Se) => {
              if (k === void 0) {
                B(Se), N?.init(x.getState());
                return;
              }
              B(Se[k]), N?.init(gy(R.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return G1(ae.state, (Se) => {
              if (k === void 0) {
                B(Se);
                return;
              }
              JSON.stringify(x.getState()) !== JSON.stringify(Se[k]) && B(Se[k]);
            });
          case "IMPORT_STATE": {
            const { nextLiftedState: Se } = ae.payload, de = (oe = Se.computedStates.slice(-1)[0]) == null ? void 0 : oe.state;
            if (!de) return;
            B(k === void 0 ? de : de[k]), N?.send(
              null,
              // FIXME no-any
              Se
            );
            return;
          }
          case "PAUSE_RECORDING":
            return I = !I;
        }
        return;
    }
  }), ie;
}, LE = $3, G1 = (c, v) => {
  let p;
  try {
    p = JSON.parse(c);
  } catch (S) {
    console.error(
      "[zustand devtools middleware] Could not parse the received json",
      S
    );
  }
  p !== void 0 && v(p);
}, Q1 = void 0, K1 = void 0, X1 = void 0;
console.error("VITE_API_URL is not defined in environment variables");
console.error("VITE_API_TOKEN is not defined in environment variables");
const xy = NE()(LE((c, v) => ({
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
      const p = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${K1}`,
        "x-data-source": X1
      }, S = await fetch(`${Q1}:Et3oQAtI/my-persons`, { headers: p }), x = await S.json();
      if (!S.ok) {
        const E = x?.message || x?.error || "Failed to fetch loops", h = `HTTP ${S.status}: ${E}`;
        throw new Error(h);
      }
      c({ leverageLoops: x, isLoadingPersons: !1 });
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
      const p = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${K1}`,
        "x-data-source": X1
      }, S = await fetch(`${Q1}:MkA4QsNh/suggestion-requests?copilot_mode=loop`, { headers: p }), x = await S.json();
      if (!S.ok) {
        const E = x?.message || x?.error || "Failed to fetch suggestion requests", h = `HTTP ${S.status}: ${E}`;
        throw new Error(h);
      }
      c({ suggestionRequests: x?.items ?? [], isLoadingSuggestionRequests: !1 });
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
      const S = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${K1}`,
        "x-data-source": X1
      }, x = await fetch(
        `${Q1}:MkA4QsNh/suggestion-requests`,
        { headers: S, method: "POST", body: JSON.stringify(p) }
      ), E = await x.json();
      if (!x.ok) {
        const h = E?.message || E?.error || "Failed to create suggestion request";
        throw new Error(`HTTP ${x.status}: ${h}`);
      }
      c({ suggestionRequests: [...v().suggestionRequests, E], isCreatingSuggestionRequest: !1 });
    } catch (S) {
      c({
        createSuggestionRequestError: S instanceof Error ? S.message : "Unknown error",
        isCreatingSuggestionRequest: !1
      });
    }
  },
  setLeverageLoops: (p) => c({ leverageLoops: p }),
  addLeverageLoops: (p) => c((S) => ({ leverageLoops: [...S.leverageLoops, ...p] }))
}))), B3 = ({ status: c }) => {
  switch (c) {
    case "draft":
      return /* @__PURE__ */ D.jsx("span", { className: Pt.statusIcon, "data-status": "draft", children: "📝" });
    case "suggestion":
      return /* @__PURE__ */ D.jsx("span", { className: Pt.statusIcon, "data-status": "suggestion", children: "💡" });
    case "processing":
      return /* @__PURE__ */ D.jsx("span", { className: Pt.statusIcon, "data-status": "processing", children: "⏳" });
    case "archived":
      return /* @__PURE__ */ D.jsx("span", { className: Pt.statusIcon, "data-status": "archived", children: "📦" });
    default:
      return /* @__PURE__ */ D.jsx("span", { className: Pt.statusIcon, "data-status": "unknown", children: "❓" });
  }
}, q3 = ({
  contentType: c,
  items: v,
  selectedItem: p,
  onItemSelect: S,
  emptyMessage: x = "No items found",
  selectedSuggestionRequest: E,
  onSuggestionRequestSelect: h
}) => {
  const [k, R] = He.useState(/* @__PURE__ */ new Set()), [w, N] = He.useState(""), [F, I] = He.useState(!1), B = He.useRef(null), { suggestionRequests: ie, leverageLoops: ae, isLoadingPersons: oe, isLoadingSuggestionRequests: Se, personsError: de, suggestionRequestsError: Ce } = xy(
    cd((le) => ({
      suggestionRequests: le.suggestionRequests,
      leverageLoops: le.leverageLoops,
      isLoadingPersons: le.isLoadingPersons,
      isLoadingSuggestionRequests: le.isLoadingSuggestionRequests,
      personsError: le.personsError,
      suggestionRequestsError: le.suggestionRequestsError
    }))
  );
  He.useEffect(() => {
    const le = (G) => {
      B.current && !B.current.contains(G.target) && I(!1);
    };
    return document.addEventListener("mousedown", le), () => document.removeEventListener("mousedown", le);
  }, []);
  const Oe = (le) => {
    R((G) => {
      const X = new Set(G);
      return X.has(le) ? X.delete(le) : X.add(le), X;
    });
  }, ye = (le, G) => G ? le.filter(
    (X) => X.full_name?.toLowerCase().includes(G.toLowerCase()) || X.master_person.name?.toLowerCase().includes(G.toLowerCase()) || X.master_person.current_title?.toLowerCase().includes(G.toLowerCase()) || X.master_person.bio?.toLowerCase().includes(G.toLowerCase()) || X.master_person.master_company?.company_name?.toLowerCase().includes(G.toLowerCase())
  ) : [], Re = (le) => {
    const G = le.target.value;
    N(G), I(G.length > 0);
  }, Ne = (le) => {
    S(le), N(""), I(!1);
  }, $e = (le) => {
    const G = p?.id === le.id;
    return /* @__PURE__ */ D.jsxs(
      "button",
      {
        className: `${Pt.dropdownItem} ${G ? Pt.selected : ""}`,
        onClick: () => Ne(le),
        children: [
          /* @__PURE__ */ D.jsx("div", { className: Pt.personAvatar, children: le.master_person.avatar ? /* @__PURE__ */ D.jsx("img", { src: le.master_person.avatar, alt: le.full_name }) : /* @__PURE__ */ D.jsx("span", { className: Pt.avatarPlaceholder, children: le.full_name?.charAt(0) || "?" }) }),
          /* @__PURE__ */ D.jsxs("div", { className: Pt.personInfo, children: [
            /* @__PURE__ */ D.jsx("span", { className: Pt.personName, children: le.full_name || le.master_person.name }),
            le.master_person.current_title && /* @__PURE__ */ D.jsxs("span", { className: Pt.personTitle, children: [
              le.master_person.current_title,
              le.master_person.master_company?.company_name && /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
                " at ",
                le.master_person.master_company.company_name
              ] })
            ] })
          ] })
        ]
      },
      le.id
    );
  }, it = (le, G = !1) => {
    const X = E?.id === le.id;
    return /* @__PURE__ */ D.jsx("div", { className: Pt.suggestionItemWrapper, children: /* @__PURE__ */ D.jsxs(
      "button",
      {
        className: `${Pt.suggestionItem} ${G ? Pt.childItem : ""} ${X ? Pt.selected : ""}`,
        onClick: () => {
          Oe(le.request_header_title), h(le);
        },
        children: [
          /* @__PURE__ */ D.jsx("div", { className: Pt.personAvatar, children: le.master_person?.avatar ? /* @__PURE__ */ D.jsx("img", { src: le.master_person.avatar, alt: le.master_person.name || "Person" }) : /* @__PURE__ */ D.jsx("span", { className: Pt.avatarPlaceholder, children: le.master_person?.name?.charAt(0) || "?" }) }),
          /* @__PURE__ */ D.jsxs("div", { className: Pt.personInfo, children: [
            /* @__PURE__ */ D.jsx("span", { className: Pt.personName, children: le.master_person?.name || le.request_header_title }),
            (le.master_person?.current_title || le.master_person?.company_name) && /* @__PURE__ */ D.jsxs("span", { className: Pt.personTitle, children: [
              le.master_person?.current_title,
              le.master_person?.current_title && le.master_person?.company_name && " at ",
              le.master_person?.company_name
            ] })
          ] }),
          /* @__PURE__ */ D.jsx(B3, { status: le.status }),
          /* @__PURE__ */ D.jsx("button", { className: Pt.moreButton, onClick: (be) => be.stopPropagation(), children: "⋮" })
        ]
      }
    ) }, le.id);
  }, at = ye(ae.length > 0 ? ae : v, w);
  return /* @__PURE__ */ D.jsxs("div", { className: Pt.expandedContent, children: [
    /* @__PURE__ */ D.jsxs("div", { className: Pt.searchWrapper, ref: B, children: [
      /* @__PURE__ */ D.jsxs("div", { className: Pt.searchContainer, children: [
        /* @__PURE__ */ D.jsx("span", { className: Pt.searchIcon, children: "🔍" }),
        /* @__PURE__ */ D.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search persons...",
            className: Pt.searchInput,
            value: w,
            onChange: Re,
            onFocus: () => w.length > 0 && I(!0)
          }
        )
      ] }),
      F && /* @__PURE__ */ D.jsx("div", { className: Pt.searchDropdown, children: oe ? /* @__PURE__ */ D.jsxs("div", { className: Pt.dropdownLoading, children: [
        /* @__PURE__ */ D.jsx("span", { className: Pt.loadingSpinner }),
        "Loading persons..."
      ] }) : de ? /* @__PURE__ */ D.jsx("div", { className: Pt.dropdownError, children: de }) : at.length === 0 ? /* @__PURE__ */ D.jsxs("div", { className: Pt.dropdownEmpty, children: [
        'No persons found for "',
        w,
        '"'
      ] }) : at.map((le) => $e(le)) })
    ] }),
    /* @__PURE__ */ D.jsx("div", { className: Pt.suggestionsList, children: Se ? /* @__PURE__ */ D.jsxs("div", { className: Pt.loadingState, children: [
      /* @__PURE__ */ D.jsx("span", { className: Pt.loadingSpinner }),
      "Loading suggestion requests..."
    ] }) : Ce ? /* @__PURE__ */ D.jsx("div", { className: Pt.errorState, children: Ce }) : ie.length === 0 ? /* @__PURE__ */ D.jsx("div", { className: Pt.emptyState, children: x }) : ie.map((le) => it(le)) })
  ] });
}, ld = (c) => ({
  messages: [],
  threadId: `thread-${c}-${Date.now()}`,
  isLoading: !1
}), W3 = {
  messages: [],
  threadId: "thread-empty",
  isLoading: !1
}, wy = NE()(
  LE((c, v) => ({
    activeContext: "copilot",
    selectedPerson: null,
    selectedSuggestionRequest: null,
    leverageLoopSummaries: [],
    copilotChat: ld("copilot"),
    outcomesChat: ld("outcomes"),
    leverageLoopChats: {},
    setActiveContext: (p) => c({ activeContext: p }),
    setSelectedPerson: (p) => c((S) => ({
      selectedPerson: p,
      selectedSuggestionRequest: p ? null : S.selectedSuggestionRequest,
      activeContext: "leverage-loops"
    })),
    setSelectedSuggestionRequest: (p) => c((S) => ({
      selectedSuggestionRequest: p,
      selectedPerson: p ? null : S.selectedPerson,
      activeContext: "leverage-loops"
    })),
    // Helper to get current leverage loop chat key based on selection
    getCurrentLeverageLoopKey: () => {
      const p = v();
      return p.selectedPerson ? p.selectedPerson.full_name : p.selectedSuggestionRequest ? p.selectedSuggestionRequest.request_panel_title : null;
    },
    // Helper to get current leverage loop chat state
    getCurrentLeverageLoopChat: () => {
      const p = v(), S = p.getCurrentLeverageLoopKey();
      return S && p.leverageLoopChats[S] ? p.leverageLoopChats[S] : W3;
    },
    addMessage: (p, S, x) => c((E) => {
      if (p === "leverage-loops") {
        const k = x || E.getCurrentLeverageLoopKey();
        if (!k) return E;
        const R = E.leverageLoopChats[k] || ld(`leverage-loop-${k}`);
        return {
          leverageLoopChats: {
            ...E.leverageLoopChats,
            [k]: {
              ...R,
              messages: [...R.messages, S]
            }
          }
        };
      }
      const h = _y(p);
      return {
        [h]: {
          ...E[h],
          messages: [...E[h].messages, S]
        }
      };
    }),
    updateMessage: (p, S, x, E, h) => c((k) => {
      if (p === "leverage-loops") {
        const w = h || k.getCurrentLeverageLoopKey();
        if (!w) return k;
        const N = k.leverageLoopChats[w];
        return N ? {
          leverageLoopChats: {
            ...k.leverageLoopChats,
            [w]: {
              ...N,
              messages: N.messages.map(
                (F) => F.id === S ? { ...F, content: x, isStreaming: E ?? F.isStreaming } : F
              )
            }
          }
        } : k;
      }
      const R = _y(p);
      return {
        [R]: {
          ...k[R],
          messages: k[R].messages.map(
            (w) => w.id === S ? { ...w, content: x, isStreaming: E ?? w.isStreaming } : w
          )
        }
      };
    }),
    setIsLoading: (p, S, x) => c((E) => {
      if (p === "leverage-loops") {
        const k = x || E.getCurrentLeverageLoopKey();
        if (!k) return E;
        const R = E.leverageLoopChats[k] || ld(`leverage-loop-${k}`);
        return {
          leverageLoopChats: {
            ...E.leverageLoopChats,
            [k]: {
              ...R,
              isLoading: S
            }
          }
        };
      }
      const h = _y(p);
      return {
        [h]: {
          ...E[h],
          isLoading: S
        }
      };
    }),
    clearChat: (p, S) => c((x) => {
      if (p === "leverage-loops") {
        const h = S || x.getCurrentLeverageLoopKey();
        return h ? {
          leverageLoopChats: {
            ...x.leverageLoopChats,
            [h]: ld(`leverage-loop-${h}`)
          }
        } : x;
      }
      return {
        [_y(p)]: ld(p)
      };
    }),
    upsertLeverageLoopSummary: (p) => c((S) => S.leverageLoopSummaries.findIndex((E) => E.id === p.id) >= 0 ? {
      leverageLoopSummaries: S.leverageLoopSummaries.map((E) => E.id === p.id ? p : E)
    } : {
      leverageLoopSummaries: [...S.leverageLoopSummaries, p]
    })
  }))
);
function _y(c) {
  switch (c) {
    case "copilot":
      return "copilotChat";
    case "outcomes":
      return "outcomesChat";
    default:
      return "copilotChat";
  }
}
const Y3 = "_composerContainer_1dqbd_1", G3 = "_composer_1dqbd_1", Q3 = "_inputWrapper_1dqbd_15", K3 = "_input_1dqbd_15", X3 = "_actions_1dqbd_40", J3 = "_leftActions_1dqbd_47", Z3 = "_rightActions_1dqbd_48", e4 = "_actionButton_1dqbd_54", t4 = "_sendButton_1dqbd_75", n4 = "_active_1dqbd_92", Yi = {
  composerContainer: Y3,
  composer: G3,
  inputWrapper: Q3,
  input: K3,
  actions: X3,
  leftActions: J3,
  rightActions: Z3,
  actionButton: e4,
  sendButton: t4,
  active: n4
}, r4 = ({
  onSend: c,
  disabled: v = !1,
  placeholder: p = "Ask anything..",
  initialValue: S = ""
}) => {
  const [x, E] = He.useState(S), h = He.useRef(null);
  He.useEffect(() => {
    S && (E(S), setTimeout(() => h.current?.focus(), 0));
  }, [S]), He.useEffect(() => {
    const w = h.current;
    w && (w.style.height = "auto", w.style.height = `${Math.min(w.scrollHeight, 200)}px`);
  }, [x]);
  const k = (w) => {
    w?.preventDefault(), x.trim() && !v && (c(x.trim()), E(""));
  }, R = (w) => {
    w.key === "Enter" && !w.shiftKey && (w.preventDefault(), k());
  };
  return /* @__PURE__ */ D.jsx("div", { className: Yi.composerContainer, children: /* @__PURE__ */ D.jsxs("form", { onSubmit: k, className: Yi.composer, children: [
    /* @__PURE__ */ D.jsx("div", { className: Yi.inputWrapper, children: /* @__PURE__ */ D.jsx(
      "textarea",
      {
        ref: h,
        value: x,
        onChange: (w) => E(w.target.value),
        onKeyDown: R,
        placeholder: p,
        disabled: v,
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
            className: `${Yi.sendButton} ${x.trim() && !v ? Yi.active : ""}`,
            disabled: !x.trim() || v,
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
}, a4 = "_messageContainer_1t8ij_1", i4 = "_user_1t8ij_6", o4 = "_assistant_1t8ij_9", l4 = "_userMessage_1t8ij_23", u4 = "_assistantMessage_1t8ij_38", s4 = "_textContent_1t8ij_45", c4 = "_streamingIndicator_1t8ij_50", au = {
  messageContainer: a4,
  user: i4,
  assistant: o4,
  userMessage: l4,
  assistantMessage: u4,
  textContent: s4,
  streamingIndicator: c4
};
const f4 = (c) => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), d4 = (c) => c.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (v, p, S) => S ? S.toUpperCase() : p.toLowerCase()
), iE = (c) => {
  const v = d4(c);
  return v.charAt(0).toUpperCase() + v.slice(1);
}, ME = (...c) => c.filter((v, p, S) => !!v && v.trim() !== "" && S.indexOf(v) === p).join(" ").trim(), p4 = (c) => {
  for (const v in c)
    if (v.startsWith("aria-") || v === "role" || v === "title")
      return !0;
};
var v4 = {
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
const h4 = He.forwardRef(
  ({
    color: c = "currentColor",
    size: v = 24,
    strokeWidth: p = 2,
    absoluteStrokeWidth: S,
    className: x = "",
    children: E,
    iconNode: h,
    ...k
  }, R) => He.createElement(
    "svg",
    {
      ref: R,
      ...v4,
      width: v,
      height: v,
      stroke: c,
      strokeWidth: S ? Number(p) * 24 / Number(v) : p,
      className: ME("lucide", x),
      ...!E && !p4(k) && { "aria-hidden": "true" },
      ...k
    },
    [
      ...h.map(([w, N]) => He.createElement(w, N)),
      ...Array.isArray(E) ? E : [E]
    ]
  )
);
const Ee = (c, v) => {
  const p = He.forwardRef(
    ({ className: S, ...x }, E) => He.createElement(h4, {
      ref: E,
      iconNode: v,
      className: ME(
        `lucide-${f4(iE(c))}`,
        `lucide-${c}`,
        S
      ),
      ...x
    })
  );
  return p.displayName = iE(c), p;
};
const m4 = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
], y4 = Ee("activity", m4);
const g4 = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], _4 = Ee("arrow-down", g4);
const S4 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], C4 = Ee("arrow-left", S4);
const E4 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], x4 = Ee("arrow-right", E4);
const b4 = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], w4 = Ee("arrow-up", b4);
const R4 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
], k4 = Ee("award", R4);
const T4 = [
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
], D4 = Ee("bell-off", T4);
const O4 = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], N4 = Ee("bell", O4);
const L4 = [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }]
], M4 = Ee("bookmark", L4);
const j4 = [
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
], A4 = Ee("boxes", j4);
const U4 = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
], z4 = Ee("briefcase", U4);
const P4 = [
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
], F4 = Ee("building", P4);
const I4 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], V4 = Ee("calendar", I4);
const H4 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }]
], $4 = Ee("chart-line", H4);
const B4 = [
  ["path", { d: "M5 21v-6", key: "1hz6c0" }],
  ["path", { d: "M12 21V9", key: "uvy0l4" }],
  ["path", { d: "M19 21V3", key: "11j9sm" }]
], q4 = Ee("chart-no-axes-column-increasing", B4);
const W4 = [
  [
    "path",
    {
      d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",
      key: "pzmjnu"
    }
  ],
  ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83", key: "k2fpak" }]
], Y4 = Ee("chart-pie", W4);
const G4 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Q4 = Ee("check", G4);
const K4 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], jE = Ee("chevron-down", K4);
const X4 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], J4 = Ee("chevron-left", X4);
const Z4 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], e5 = Ee("chevron-right", Z4);
const t5 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], n5 = Ee("chevron-up", t5);
const r5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], a5 = Ee("circle-alert", r5);
const i5 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], o5 = Ee("circle-check-big", i5);
const l5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], u5 = Ee("circle-question-mark", l5);
const s5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], c5 = Ee("circle-x", s5);
const f5 = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], d5 = Ee("clock", f5);
const p5 = [
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
], v5 = Ee("coffee", p5);
const h5 = [
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], m5 = Ee("compass", h5);
const y5 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], g5 = Ee("copy", y5);
const _5 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], S5 = Ee("download", _5);
const C5 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], E5 = Ee("external-link", C5);
const x5 = [
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
], b5 = Ee("eye-off", x5);
const w5 = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], R5 = Ee("eye", w5);
const k5 = [
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
], T5 = Ee("file-text", k5);
const D5 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]
], O5 = Ee("file", D5);
const N5 = [
  [
    "path",
    {
      d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
      key: "1jaruq"
    }
  ]
], L5 = Ee("flag", N5);
const M5 = [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
], j5 = Ee("folder-open", M5);
const A5 = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
], U5 = Ee("folder", A5);
const z5 = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
], P5 = Ee("funnel", z5);
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
], I5 = Ee("gift", F5);
const V5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], H5 = Ee("globe", V5);
const $5 = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
], B5 = Ee("heart", $5);
const q5 = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], W5 = Ee("house", q5);
const Y5 = [
  ["path", { d: "M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8", key: "18ogeb" }]
], G5 = Ee("infinity", Y5);
const Q5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], K5 = Ee("info", Q5);
const X5 = [
  ["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }],
  ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
  ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }]
], J5 = Ee("key", X5);
const Z5 = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
], eD = Ee("lightbulb", Z5);
const tD = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], nD = Ee("link", tD);
const rD = [
  ["path", { d: "M13 5h8", key: "a7qcls" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 19h8", key: "c3s6r1" }],
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }]
], aD = Ee("list-checks", rD);
const iD = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
], oD = Ee("lock-open", iD);
const lD = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], uD = Ee("lock", lD);
const sD = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], cD = Ee("mail", sD);
const fD = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], dD = Ee("map-pin", fD);
const pD = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
], vD = Ee("message-circle", pD);
const hD = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
], mD = Ee("message-square", hD);
const yD = [["path", { d: "M5 12h14", key: "1ays0h" }]], gD = Ee("minus", yD);
const _D = [
  ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]
], SD = Ee("navigation", _D);
const CD = [
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
      key: "1miecu"
    }
  ]
], ED = Ee("paperclip", CD);
const xD = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], bD = Ee("pause", xD);
const wD = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], RD = Ee("phone", wD);
const kD = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], TD = Ee("play", kD);
const DD = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], OD = Ee("plus", DD);
const ND = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], LD = Ee("refresh-cw", ND);
const MD = [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }]
], jD = Ee("repeat", MD);
const AD = [
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
], UD = Ee("rocket", AD);
const zD = [
  ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
], PD = Ee("rotate-cw", zD);
const FD = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], ID = Ee("search", FD);
const VD = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], HD = Ee("send", VD);
const $D = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], BD = Ee("settings", $D);
const qD = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
], WD = Ee("share-2", qD);
const YD = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
], GD = Ee("shield", YD);
const QD = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
], KD = Ee("square-pen", QD);
const XD = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], JD = Ee("star", XD);
const ZD = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], eO = Ee("target", ZD);
const tO = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], nO = Ee("timer", tO);
const rO = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], aO = Ee("trash-2", rO);
const iO = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
], oO = Ee("trending-down", iO);
const lO = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
], uO = Ee("trending-up", lO);
const sO = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], cO = Ee("triangle-alert", sO);
const fO = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], dO = Ee("upload", fO);
const pO = [
  ["path", { d: "m16 11 2 2 4-4", key: "9rsbq5" }],
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
], vO = Ee("user-check", pO);
const hO = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
], mO = Ee("user-plus", hO);
const yO = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], gO = Ee("user", yO);
const _O = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
], SO = Ee("users", _O);
const CO = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
], EO = Ee("workflow", CO);
const xO = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], bO = Ee("x", xO);
const wO = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
], RO = Ee("zap", wO), kO = "_card_1aafq_1", TO = "_header_1aafq_11", DO = "_headerTitle_1aafq_11", OO = "_headerSubtitle_1aafq_16", NO = "_textContent_1aafq_21", LO = "_button_1aafq_44", MO = "_primary_1aafq_57", jO = "_secondary_1aafq_68", AO = "_ghost_1aafq_76", UO = "_buttonGroup_1aafq_88", zO = "_horizontal_1aafq_92", PO = "_vertical_1aafq_95", FO = "_form_1aafq_99", IO = "_formField_1aafq_105", VO = "_fieldLabel_1aafq_110", HO = "_fieldHint_1aafq_115", $O = "_input_1aafq_120", BO = "_textarea_1aafq_121", qO = "_select_1aafq_122", WO = "_error_1aafq_144", YO = "_checkboxWrapper_1aafq_164", GO = "_radioWrapper_1aafq_165", QO = "_radioGroup_1aafq_185", KO = "_checkboxGroup_1aafq_191", XO = "_list_1aafq_197", JO = "_listHeading_1aafq_197", ZO = "_listItems_1aafq_205", eN = "_listItem_1aafq_205", tN = "_listItemIcon_1aafq_225", nN = "_listItemContent_1aafq_235", rN = "_listItemTitle_1aafq_238", aN = "_listItemSubtitle_1aafq_244", iN = "_listItemAction_1aafq_249", oN = "_actionButton_1aafq_249", lN = "_stats_1aafq_268", uN = "_statsNumber_1aafq_271", sN = "_statsLabel_1aafq_277", cN = "_profileTile_1aafq_283", fN = "_profileIcon_1aafq_288", dN = "_profileContent_1aafq_298", pN = "_profileTitle_1aafq_298", vN = "_profileLabel_1aafq_304", hN = "_miniCard_1aafq_310", mN = "_miniCardBlock_1aafq_320", yN = "_steps_1aafq_326", gN = "_stepsItem_1aafq_343", _N = "_stepsTitle_1aafq_358", SN = "_stepsDetails_1aafq_364", CN = "_sectionBlock_1aafq_369", EN = "_section_1aafq_369", xN = "_expanded_1aafq_380", bN = "_sectionTrigger_1aafq_380", wN = "_triggerIcon_1aafq_401", RN = "_rotated_1aafq_404", kN = "_sectionContent_1aafq_408", TN = "_icon_1aafq_415", DN = "_streamingContainer_1aafq_421", ON = "_streamingIndicator_1aafq_426", NN = "_pulse_1aafq_1", LN = "_skeletonLoader_1aafq_438", MN = "_skeletonShimmer_1aafq_453", jN = "_shimmer_1aafq_1", Ye = {
  card: kO,
  header: TO,
  headerTitle: DO,
  headerSubtitle: OO,
  textContent: NO,
  button: LO,
  primary: MO,
  secondary: jO,
  ghost: AO,
  buttonGroup: UO,
  horizontal: zO,
  vertical: PO,
  form: FO,
  formField: IO,
  fieldLabel: VO,
  fieldHint: HO,
  input: $O,
  textarea: BO,
  select: qO,
  error: WO,
  checkboxWrapper: YO,
  radioWrapper: GO,
  radioGroup: QO,
  checkboxGroup: KO,
  list: XO,
  listHeading: JO,
  listItems: ZO,
  listItem: eN,
  listItemIcon: tN,
  listItemContent: nN,
  listItemTitle: rN,
  listItemSubtitle: aN,
  listItemAction: iN,
  actionButton: oN,
  stats: lN,
  statsNumber: uN,
  statsLabel: sN,
  profileTile: cN,
  profileIcon: fN,
  profileContent: dN,
  profileTitle: pN,
  profileLabel: vN,
  miniCard: hN,
  miniCardBlock: mN,
  steps: yN,
  stepsItem: gN,
  stepsTitle: _N,
  stepsDetails: SN,
  sectionBlock: CN,
  section: EN,
  expanded: xN,
  sectionTrigger: bN,
  triggerIcon: wN,
  rotated: RN,
  sectionContent: kN,
  icon: TN,
  streamingContainer: DN,
  streamingIndicator: ON,
  pulse: NN,
  skeletonLoader: LN,
  skeletonShimmer: MN,
  shimmer: jN
}, AN = {
  // Arrows & Navigation
  target: eO,
  "arrow-right": x4,
  "arrow-left": C4,
  "arrow-up": w4,
  "arrow-down": _4,
  "chevron-down": jE,
  "chevron-right": e5,
  "chevron-left": J4,
  "chevron-up": n5,
  repeat: jD,
  "refresh-cw": LD,
  "rotate-cw": PD,
  navigation: SD,
  compass: m5,
  // Multimedia
  play: TD,
  pause: bD,
  // Text & Lists
  "list-checks": aD,
  // Development
  workflow: EO,
  // Time
  timer: nO,
  clock: d5,
  calendar: V4,
  // Shopping & Business
  boxes: A4,
  briefcase: z4,
  building: F4,
  // Math & Charts
  infinity: G5,
  plus: OD,
  minus: gD,
  "line-chart": $4,
  "bar-chart": q4,
  "pie-chart": Y4,
  "trending-up": uO,
  "trending-down": oO,
  activity: y4,
  // Actions
  check: Q4,
  x: bO,
  edit: KD,
  trash: aO,
  copy: g5,
  share: WD,
  "external-link": E5,
  search: ID,
  filter: P5,
  settings: BD,
  download: S5,
  upload: dO,
  send: HD,
  zap: RO,
  // Users
  user: gO,
  users: SO,
  "user-plus": mO,
  "user-check": vO,
  // Communication
  mail: cD,
  phone: RD,
  "message-circle": vD,
  "message-square": mD,
  bell: N4,
  "bell-off": D4,
  // Status & Favorites
  star: JD,
  heart: B5,
  bookmark: M4,
  flag: L5,
  award: k4,
  gift: I5,
  // Info & Alerts
  "help-circle": u5,
  info: K5,
  "alert-circle": a5,
  "alert-triangle": cO,
  "check-circle": o5,
  "x-circle": c5,
  // View
  eye: R5,
  "eye-off": b5,
  // Security
  lock: uD,
  unlock: oD,
  key: J5,
  shield: GD,
  // Links & Files
  link: nD,
  paperclip: ED,
  "file-text": T5,
  file: O5,
  folder: U5,
  "folder-open": j5,
  // Location
  home: W5,
  "map-pin": dD,
  globe: H5,
  // Ideas & Energy
  lightbulb: eD,
  rocket: UD,
  coffee: v5
}, AE = ({ name: c, size: v = 18 }) => {
  const p = AN[c.toLowerCase()];
  return p ? /* @__PURE__ */ D.jsx("span", { className: Ye.icon, children: /* @__PURE__ */ D.jsx(p, { size: v }) }) : (console.warn(`Icon "${c}" not found in registry`), /* @__PURE__ */ D.jsx("span", { className: Ye.icon, style: { width: v, height: v }, children: "•" }));
}, UN = ({ title: c, subtitle: v }) => /* @__PURE__ */ D.jsxs("div", { className: Ye.header, children: [
  /* @__PURE__ */ D.jsx("h3", { className: Ye.headerTitle, children: c }),
  v && /* @__PURE__ */ D.jsx("p", { className: Ye.headerSubtitle, children: v })
] });
function zN(c) {
  return c.split(/\n\n+/).map((p, S) => {
    let x = p;
    const E = /\*\*(.*?)\*\*/g, h = p.split(E);
    h.length > 1 && (x = h.map((R, w) => w % 2 === 1 ? /* @__PURE__ */ D.jsx("strong", { children: R }, w) : R));
    const k = /`(.*?)`/g;
    return typeof x == "string" && x.match(k) && (x = x.split(k).map((w, N) => N % 2 === 1 ? /* @__PURE__ */ D.jsx("code", { children: w }, N) : w)), /* @__PURE__ */ D.jsx("p", { children: x }, S);
  });
}
const PN = ({ textMarkdown: c }) => /* @__PURE__ */ D.jsx("div", { className: Ye.textContent, children: zN(c) }), FN = ({
  children: c,
  name: v,
  variant: p = "primary",
  disabled: S = !1,
  action: x,
  onAction: E
}) => {
  const h = () => {
    x && E && E(x);
  }, k = ["submit", "save", "confirm", "set", "create", "send", "apply"], R = (v || "").toLowerCase(), w = (typeof c == "string" ? c : "").toLowerCase(), N = x?.type === "submit_form" || k.some((F) => R.includes(F)) || k.some((F) => w.includes(F));
  return /* @__PURE__ */ D.jsx(
    "button",
    {
      className: `${Ye.button} ${Ye[p]}`,
      disabled: S,
      onClick: h,
      type: N ? "submit" : "button",
      children: c
    }
  );
}, IN = ({
  variant: c = "horizontal",
  children: v,
  renderComponent: p
}) => /* @__PURE__ */ D.jsx("div", { className: `${Ye.buttonGroup} ${Ye[c]}`, children: v.map((S, x) => /* @__PURE__ */ D.jsx(Ja.Fragment, { children: p(S) }, x)) }), VN = ({ children: c, renderComponent: v }) => !c || !Array.isArray(c) ? /* @__PURE__ */ D.jsx("div", { className: Ye.card }) : /* @__PURE__ */ D.jsx("div", { className: Ye.card, children: c.map((p, S) => /* @__PURE__ */ D.jsx(Ja.Fragment, { children: v(p) }, S)) }), HN = ({ heading: c, items: v, onAction: p }) => /* @__PURE__ */ D.jsxs("div", { className: Ye.list, children: [
  c && /* @__PURE__ */ D.jsx("h4", { className: Ye.listHeading, children: c }),
  /* @__PURE__ */ D.jsx("div", { className: Ye.listItems, children: v.map((S, x) => /* @__PURE__ */ D.jsxs("div", { className: Ye.listItem, children: [
    S.iconName && /* @__PURE__ */ D.jsx("div", { className: Ye.listItemIcon, children: /* @__PURE__ */ D.jsx(AE, { name: S.iconName, size: 18 }) }),
    /* @__PURE__ */ D.jsxs("div", { className: Ye.listItemContent, children: [
      /* @__PURE__ */ D.jsx("p", { className: Ye.listItemTitle, children: S.title }),
      S.subtitle && /* @__PURE__ */ D.jsx("p", { className: Ye.listItemSubtitle, children: S.subtitle })
    ] }),
    S.itemAction && /* @__PURE__ */ D.jsx("div", { className: Ye.listItemAction, children: /* @__PURE__ */ D.jsx(
      "button",
      {
        className: Ye.actionButton,
        onClick: () => p?.(S.itemAction.action),
        children: S.itemAction.label
      }
    ) })
  ] }, x)) })
] }), $N = ({ number: c, label: v }) => /* @__PURE__ */ D.jsxs("div", { className: Ye.stats, children: [
  /* @__PURE__ */ D.jsx("p", { className: Ye.statsNumber, children: c }),
  /* @__PURE__ */ D.jsx("p", { className: Ye.statsLabel, children: v })
] }), BN = ({
  title: c,
  label: v,
  child: p,
  renderComponent: S
}) => /* @__PURE__ */ D.jsxs("div", { className: Ye.profileTile, children: [
  p && /* @__PURE__ */ D.jsx("div", { className: Ye.profileIcon, children: S(p) }),
  /* @__PURE__ */ D.jsxs("div", { className: Ye.profileContent, children: [
    /* @__PURE__ */ D.jsx("p", { className: Ye.profileTitle, children: c }),
    v && /* @__PURE__ */ D.jsx("p", { className: Ye.profileLabel, children: v })
  ] })
] }), qN = ({
  lhs: c,
  rhs: v,
  renderComponent: p
}) => /* @__PURE__ */ D.jsxs("div", { className: Ye.miniCard, children: [
  /* @__PURE__ */ D.jsx("div", { className: Ye.miniCardLhs, children: p(c) }),
  v && /* @__PURE__ */ D.jsx("div", { className: Ye.miniCardRhs, children: p(v) })
] }), WN = ({
  children: c,
  renderComponent: v
}) => /* @__PURE__ */ D.jsx("div", { className: Ye.miniCardBlock, children: c.map((p, S) => /* @__PURE__ */ D.jsx(Ja.Fragment, { children: v(p) }, S)) }), YN = ({
  title: c,
  details: v,
  renderComponent: p
}) => /* @__PURE__ */ D.jsxs("div", { className: Ye.stepsItem, children: [
  /* @__PURE__ */ D.jsx("h4", { className: Ye.stepsTitle, children: c }),
  v && /* @__PURE__ */ D.jsx("div", { className: Ye.stepsDetails, children: p(v) })
] }), GN = ({
  children: c,
  renderComponent: v
}) => /* @__PURE__ */ D.jsx("div", { className: Ye.steps, children: c.map((p, S) => /* @__PURE__ */ D.jsx(Ja.Fragment, { children: v(p) }, S)) }), QN = ({
  isFoldable: c = !0,
  sections: v,
  renderComponent: p
}) => {
  const [S, x] = He.useState(
    // If not foldable, expand all sections by default
    new Set(c ? [] : v.map((h) => h.value))
  ), E = (h) => {
    c && x((k) => {
      const R = new Set(k);
      return R.has(h) ? R.delete(h) : R.add(h), R;
    });
  };
  return /* @__PURE__ */ D.jsx("div", { className: Ye.sectionBlock, children: v.map((h) => {
    const k = S.has(h.value);
    return /* @__PURE__ */ D.jsxs(
      "div",
      {
        className: `${Ye.section} ${k ? Ye.expanded : ""}`,
        children: [
          /* @__PURE__ */ D.jsxs(
            "button",
            {
              className: Ye.sectionTrigger,
              onClick: () => E(h.value),
              type: "button",
              children: [
                /* @__PURE__ */ D.jsx("span", { children: h.trigger }),
                c && /* @__PURE__ */ D.jsx("span", { className: `${Ye.triggerIcon} ${k ? Ye.rotated : ""}`, children: /* @__PURE__ */ D.jsx(jE, { size: 16 }) })
              ]
            }
          ),
          (k || !c) && /* @__PURE__ */ D.jsx("div", { className: Ye.sectionContent, children: h.content.map((R, w) => /* @__PURE__ */ D.jsx(Ja.Fragment, { children: p(R) }, w)) })
        ]
      },
      h.value
    );
  }) });
}, KN = ({
  name: c,
  placeholder: v,
  value: p = "",
  type: S = "text",
  rules: x,
  onChange: E
}) => {
  const [h, k] = He.useState(p), [R, w] = He.useState(null), N = (F) => {
    const I = F.target.value;
    k(I), x?.required && !I ? w("This field is required") : x?.minLength && I.length < x.minLength ? w(`Minimum ${x.minLength} characters required`) : w(null), E?.(c, I);
  };
  return /* @__PURE__ */ D.jsx(
    "input",
    {
      type: S,
      name: c,
      placeholder: v,
      value: h,
      onChange: N,
      className: `${Ye.input} ${R ? Ye.error : ""}`
    }
  );
}, XN = ({
  name: c,
  placeholder: v,
  value: p = "",
  rows: S = 3,
  rules: x,
  onChange: E
}) => {
  const [h, k] = He.useState(p), [R, w] = He.useState(null), N = (F) => {
    const I = F.target.value;
    k(I), x?.required && !I ? w("This field is required") : x?.minLength && I.length < x.minLength ? w(`Minimum ${x.minLength} characters required`) : w(null), E?.(c, I);
  };
  return /* @__PURE__ */ D.jsx(
    "textarea",
    {
      name: c,
      placeholder: v,
      value: h,
      rows: S,
      onChange: N,
      className: `${Ye.textarea} ${R ? Ye.error : ""}`
    }
  );
}, JN = ({
  name: c,
  placeholder: v,
  value: p = "",
  options: S = [],
  onChange: x
}) => {
  const [E, h] = He.useState(p), k = (w) => {
    const N = w.target.value;
    h(N), x?.(c, N);
  }, R = S && Array.isArray(S) ? S : [];
  return /* @__PURE__ */ D.jsxs(
    "select",
    {
      name: c,
      value: E,
      onChange: k,
      className: Ye.select,
      children: [
        v && /* @__PURE__ */ D.jsx("option", { value: "", children: v }),
        R.map((w) => /* @__PURE__ */ D.jsx("option", { value: w.value, children: w.label }, w.value))
      ]
    }
  );
}, ZN = ({
  name: c,
  label: v,
  checked: p = !1,
  onChange: S
}) => {
  const [x, E] = He.useState(p), h = (k) => {
    const R = k.target.checked;
    E(R), S?.(c, R);
  };
  return /* @__PURE__ */ D.jsxs("div", { className: Ye.checkboxWrapper, children: [
    /* @__PURE__ */ D.jsx(
      "input",
      {
        type: "checkbox",
        id: c,
        name: c,
        checked: x,
        onChange: h
      }
    ),
    /* @__PURE__ */ D.jsx("label", { htmlFor: c, children: v })
  ] });
}, eL = ({
  name: c,
  options: v = [],
  value: p = "",
  onChange: S
}) => {
  const [x, E] = He.useState(p), h = (k) => {
    const R = k.target.value;
    E(R), S?.(c, R);
  };
  return !v || !Array.isArray(v) || v.length === 0 ? /* @__PURE__ */ D.jsx("div", { className: Ye.radioGroup, children: "No options available" }) : /* @__PURE__ */ D.jsx("div", { className: Ye.radioGroup, children: v.map((k) => /* @__PURE__ */ D.jsxs("div", { className: Ye.radioWrapper, children: [
    /* @__PURE__ */ D.jsx(
      "input",
      {
        type: "radio",
        id: `${c}-${k.value}`,
        name: c,
        value: k.value,
        checked: x === k.value,
        onChange: h
      }
    ),
    /* @__PURE__ */ D.jsx("label", { htmlFor: `${c}-${k.value}`, children: k.label })
  ] }, k.value)) });
}, tL = ({
  name: c,
  options: v = [],
  values: p = [],
  onChange: S
}) => {
  const [x, E] = He.useState(p), h = (k, R) => {
    const w = R ? [...x, k] : x.filter((N) => N !== k);
    E(w), S?.(c, w);
  };
  return !v || !Array.isArray(v) || v.length === 0 ? /* @__PURE__ */ D.jsx("div", { className: Ye.checkboxGroup, children: "No options available" }) : /* @__PURE__ */ D.jsx("div", { className: Ye.checkboxGroup, children: v.map((k) => /* @__PURE__ */ D.jsxs("div", { className: Ye.checkboxWrapper, children: [
    /* @__PURE__ */ D.jsx(
      "input",
      {
        type: "checkbox",
        id: `${c}-${k.value}`,
        name: c,
        value: k.value,
        checked: x.includes(k.value),
        onChange: (R) => h(k.value, R.target.checked)
      }
    ),
    /* @__PURE__ */ D.jsx("label", { htmlFor: `${c}-${k.value}`, children: k.label })
  ] }, k.value)) });
}, nL = ({
  name: c,
  placeholder: v,
  value: p = "",
  min: S,
  max: x,
  onChange: E
}) => {
  const [h, k] = He.useState(p), R = (w) => {
    const N = w.target.value;
    k(N), E?.(c, N);
  };
  return /* @__PURE__ */ D.jsx(
    "input",
    {
      type: "date",
      name: c,
      placeholder: v,
      value: h,
      min: S,
      max: x,
      onChange: R,
      className: Ye.input
    }
  );
}, rL = ({
  label: c,
  hint: v,
  children: p,
  renderComponent: S
}) => /* @__PURE__ */ D.jsxs("div", { className: Ye.formField, children: [
  c && /* @__PURE__ */ D.jsx("label", { className: Ye.fieldLabel, children: c }),
  S(p),
  v && /* @__PURE__ */ D.jsx("span", { className: Ye.fieldHint, children: v })
] }), aL = ({
  name: c,
  children: v,
  buttons: p,
  onAction: S,
  renderComponent: x
}) => {
  const [E, h] = He.useState({}), k = He.useCallback((w, N) => {
    h((F) => ({ ...F, [w]: N }));
  }, []), R = (w) => {
    w.preventDefault(), S ? S({ type: "submit_form", props: { formName: c, formData: E } }, E) : console.warn("Form onAction is not defined");
  };
  return /* @__PURE__ */ D.jsxs("form", { className: Ye.form, onSubmit: R, name: c, children: [
    v.map((w, N) => /* @__PURE__ */ D.jsx(
      rL,
      {
        label: w.label,
        hint: w.hint,
        children: {
          ...w.children,
          props: {
            ...w.children.props,
            onChange: k
          }
        },
        renderComponent: x
      },
      N
    )),
    p && x(p)
  ] });
}, iL = ({
  name: c = "radio",
  value: v,
  label: p,
  checked: S = !1,
  onChange: x
}) => {
  const [E, h] = He.useState(S), k = (R) => {
    const w = R.target.checked;
    h(w), w && x && x(c, v);
  };
  return /* @__PURE__ */ D.jsxs("div", { className: Ye.radioWrapper, children: [
    /* @__PURE__ */ D.jsx(
      "input",
      {
        type: "radio",
        id: `${c}-${v}`,
        name: c,
        value: v,
        checked: E,
        onChange: k
      }
    ),
    /* @__PURE__ */ D.jsx("label", { htmlFor: `${c}-${v}`, children: p })
  ] });
}, oL = ({
  name: c = "checkbox",
  value: v,
  label: p,
  checked: S = !1,
  onChange: x
}) => {
  const [E, h] = He.useState(S), k = (R) => {
    const w = R.target.checked;
    h(w), x && x(c, v, w);
  };
  return /* @__PURE__ */ D.jsxs("div", { className: Ye.checkboxWrapper, children: [
    /* @__PURE__ */ D.jsx(
      "input",
      {
        type: "checkbox",
        id: `${c}-${v}`,
        name: c,
        value: v,
        checked: E,
        onChange: k
      }
    ),
    /* @__PURE__ */ D.jsx("label", { htmlFor: `${c}-${v}`, children: p })
  ] });
}, UE = ({
  component: c,
  onAction: v
}) => {
  const p = He.useCallback((S) => {
    if (!S || !S.component)
      return console.warn("Invalid component definition:", S), null;
    const { component: x, props: E } = S, h = { ...E, onAction: v };
    switch (x) {
      // Basic Components
      case "Icon":
        return /* @__PURE__ */ D.jsx(AE, { ...h });
      case "Header":
        return /* @__PURE__ */ D.jsx(UN, { ...h });
      case "TextContent":
        return /* @__PURE__ */ D.jsx(PN, { ...h });
      // Button Components
      case "Button":
        return /* @__PURE__ */ D.jsx(FN, { ...h });
      case "ButtonGroup":
        return /* @__PURE__ */ D.jsx(
          IN,
          {
            ...h,
            renderComponent: p
          }
        );
      // Layout Components
      case "Card":
        return /* @__PURE__ */ D.jsx(
          VN,
          {
            ...h,
            renderComponent: p
          }
        );
      // List Component
      case "List":
        return /* @__PURE__ */ D.jsx(HN, { ...h });
      // Stats Component
      case "Stats":
        return /* @__PURE__ */ D.jsx($N, { ...h });
      // ProfileTile Component
      case "ProfileTile":
        return /* @__PURE__ */ D.jsx(
          BN,
          {
            ...h,
            renderComponent: p
          }
        );
      // MiniCard Components
      case "MiniCard":
        return /* @__PURE__ */ D.jsx(
          qN,
          {
            ...h,
            renderComponent: p
          }
        );
      case "MiniCardBlock":
        return /* @__PURE__ */ D.jsx(
          WN,
          {
            ...h,
            renderComponent: p
          }
        );
      // Steps Components
      case "Steps":
        return /* @__PURE__ */ D.jsx(
          GN,
          {
            ...h,
            renderComponent: p
          }
        );
      case "StepsItem":
        return /* @__PURE__ */ D.jsx(
          YN,
          {
            ...h,
            renderComponent: p
          }
        );
      // Section Components
      case "SectionBlock":
        return /* @__PURE__ */ D.jsx(
          QN,
          {
            ...h,
            renderComponent: p
          }
        );
      // Form Components
      case "Form":
        return /* @__PURE__ */ D.jsx(
          aL,
          {
            ...h,
            renderComponent: p
          }
        );
      case "Input":
        return /* @__PURE__ */ D.jsx(KN, { ...h });
      case "TextArea":
        return /* @__PURE__ */ D.jsx(XN, { ...h });
      case "Select":
        return /* @__PURE__ */ D.jsx(JN, { ...h });
      case "Checkbox":
        return /* @__PURE__ */ D.jsx(ZN, { ...h });
      case "RadioGroup":
        return /* @__PURE__ */ D.jsx(eL, { ...h });
      case "CheckBoxGroup":
        return /* @__PURE__ */ D.jsx(tL, { ...h });
      case "DatePicker":
        return /* @__PURE__ */ D.jsx(nL, { ...h });
      case "RadioItem":
        return /* @__PURE__ */ D.jsx(iL, { ...h });
      case "CheckBoxItem":
        return /* @__PURE__ */ D.jsx(oL, { ...h });
      default:
        return console.warn(`Unknown component: ${x}`), /* @__PURE__ */ D.jsxs("div", { style: {
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
  }, [v]);
  return /* @__PURE__ */ D.jsx(D.Fragment, { children: p(c) });
};
function zE(c) {
  try {
    const v = c.indexOf('<content thesys="true">');
    if (v === -1)
      return oE(c);
    const p = c.substring(v + 23), S = p.indexOf("</content>");
    let x = S !== -1 ? p.substring(0, S).trim() : p.trim();
    x = x.replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39;/g, "'").replace(/&apos;/g, "'");
    try {
      const E = JSON.parse(x);
      if (E.component)
        return E;
    } catch {
      return lL(x);
    }
    return oE(c);
  } catch (v) {
    return console.error("parseStreamingGenUI - Error:", v), null;
  }
}
function lL(c) {
  let v = null, p = -1, S = -1;
  const x = /"component"\s*:\s*"([^"]+)"/g;
  let E;
  for (; (E = x.exec(c)) !== null; ) {
    const h = c.substring(0, E.index), k = (h.match(/\{/g) || []).length - (h.match(/\}/g) || []).length;
    k >= 1 && k > S && (v = E, p = E.index, S = k);
  }
  if (v && v[1]) {
    const h = v[1], R = c.substring(p + v[0].length).match(/"props"\s*:\s*\{([\s\S]*?)(\}|$)/);
    let w = {};
    if (R && R[1]) {
      const N = R[1], F = /"([^"]+)"\s*:\s*"([^"]*)"|"([^"]+)"\s*:\s*(\d+|true|false|null)/g;
      let I;
      for (; (I = F.exec(N)) !== null; ) {
        const B = I[1] || I[3], ie = I[2] || I[4];
        B && (w[B] = ie === "true" ? !0 : ie === "false" ? !1 : ie === "null" ? null : ie);
      }
      N.includes('"children"') && N.includes("[") && (w.children = []);
    }
    return {
      component: {
        component: h,
        props: w
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
const uL = ({
  content: c,
  isStreaming: v,
  onAction: p
}) => {
  const [S, x] = He.useState(null);
  return He.useEffect(() => {
    if (!c) {
      x(null);
      return;
    }
    const E = zE(c);
    if (E?.component) {
      const h = E.component;
      if (h && typeof h == "object" && "component" in h) {
        const k = h.component, R = h.props || {};
        typeof k == "string" ? x({
          component: k,
          props: R
        }) : k && typeof k == "object" && "component" in k && x(k);
      }
    }
  }, [c]), S ? /* @__PURE__ */ D.jsxs("div", { className: Ye.streamingContainer, children: [
    v && /* @__PURE__ */ D.jsx("div", { className: Ye.streamingIndicator, children: /* @__PURE__ */ D.jsx("span", { children: "Building interface..." }) }),
    /* @__PURE__ */ D.jsx(UE, { component: S, onAction: p })
  ] }) : v ? /* @__PURE__ */ D.jsx("div", { className: Ye.streamingContainer, children: /* @__PURE__ */ D.jsxs("div", { className: Ye.skeletonLoader, children: [
    /* @__PURE__ */ D.jsx("div", { className: Ye.skeletonShimmer }),
    /* @__PURE__ */ D.jsx("span", { children: "Generating interface..." })
  ] }) }) : null;
};
function sL(c) {
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
function cL(c) {
  try {
    const v = c.match(/<content\s+thesys="true">([\s\S]*?)<\/content>/);
    if (v && v[1]) {
      const p = sL(v[1].trim());
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
function fL(c) {
  return !!(c.includes('<content thesys="true">') || c.trim().startsWith("{") && c.includes('"component"'));
}
function dL(c) {
  const v = c.indexOf('<content thesys="true">');
  return v > 0 ? c.substring(0, v).trim() : "";
}
const pL = ({
  message: c,
  onAction: v,
  onUpdateMessage: p
}) => {
  const S = c.role === "user", x = c.role === "assistant", E = He.useMemo(() => c.content ? fL(c.content) : !1, [c.content]), h = He.useMemo(() => {
    if (!c.content) return null;
    if (E) {
      if (c.isStreaming) {
        const N = zE(c.content);
        return N?.component ? N : null;
      }
      return cL(c.content);
    }
    return null;
  }, [c.content, c.isStreaming, E]), k = He.useMemo(() => c.content ? dL(c.content) : "", [c.content]), R = He.useCallback((N, F) => {
    if (!v) return;
    const I = {
      type: N.type,
      params: {
        ...N.props,
        formData: F
      }
    };
    console.log("event", I), console.log("formData", F), v(I);
  }, [v]), w = () => E ? /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
    k && /* @__PURE__ */ D.jsx("div", { className: au.textContent, children: k }),
    /* @__PURE__ */ D.jsx(
      uL,
      {
        content: c.content,
        isStreaming: c.isStreaming || !1,
        onAction: R
      }
    )
  ] }) : h?.component ? /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
    k && /* @__PURE__ */ D.jsx("div", { className: au.textContent, children: k }),
    /* @__PURE__ */ D.jsx(
      UE,
      {
        component: h.component,
        onAction: R
      }
    )
  ] }) : /* @__PURE__ */ D.jsx("div", { className: au.textContent, children: c.content || (c.isStreaming ? "" : "No response") });
  return /* @__PURE__ */ D.jsx(
    "div",
    {
      className: `${au.messageContainer} ${S ? au.user : au.assistant}`,
      children: S ? /* @__PURE__ */ D.jsx("div", { className: au.userMessage, children: /* @__PURE__ */ D.jsx("p", { children: c.content }) }) : x ? /* @__PURE__ */ D.jsxs("div", { className: au.assistantMessage, children: [
        c.isStreaming && !c.content && /* @__PURE__ */ D.jsxs("div", { className: au.streamingIndicator, children: [
          /* @__PURE__ */ D.jsx("span", {}),
          /* @__PURE__ */ D.jsx("span", {}),
          /* @__PURE__ */ D.jsx("span", {})
        ] }),
        w()
      ] }) : null
    }
  );
}, vL = "_overlay_271nu_1", hL = "_modal_271nu_21", mL = "_header_271nu_42", yL = "_closeButton_271nu_55", gL = "_selectedInfo_271nu_77", _L = "_inputGroup_271nu_99", SL = "_actions_271nu_130", CL = "_cancelBtn_271nu_136", EL = "_confirmBtn_271nu_137", iu = {
  overlay: vL,
  modal: hL,
  header: mL,
  closeButton: yL,
  selectedInfo: gL,
  inputGroup: _L,
  actions: SL,
  cancelBtn: CL,
  confirmBtn: EL
}, xL = ({
  isOpen: c,
  onClose: v,
  humanFriendlyMessage: p,
  llmFriendlyMessage: S,
  onConfirm: x
}) => {
  const [E, h] = He.useState(S);
  if (He.useEffect(() => {
    h(S);
  }, [S]), He.useEffect(() => {
    const R = (w) => {
      w.key === "Escape" && v();
    };
    if (c)
      return window.addEventListener("keydown", R), () => window.removeEventListener("keydown", R);
  }, [c, v]), !c) return null;
  const k = (R) => {
    R.preventDefault(), E.trim() && x(E.trim());
  };
  return /* @__PURE__ */ D.jsx("div", { className: iu.overlay, onClick: v, children: /* @__PURE__ */ D.jsxs("div", { className: iu.modal, onClick: (R) => R.stopPropagation(), children: [
    /* @__PURE__ */ D.jsxs("div", { className: iu.header, children: [
      /* @__PURE__ */ D.jsx("h2", { children: "Edit Your Response" }),
      /* @__PURE__ */ D.jsx("button", { className: iu.closeButton, onClick: v, children: /* @__PURE__ */ D.jsx(
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
    /* @__PURE__ */ D.jsxs("form", { onSubmit: k, children: [
      /* @__PURE__ */ D.jsxs("div", { className: iu.selectedInfo, children: [
        /* @__PURE__ */ D.jsx("label", { children: "Your Selection" }),
        /* @__PURE__ */ D.jsx("p", { children: p })
      ] }),
      /* @__PURE__ */ D.jsxs("div", { className: iu.inputGroup, children: [
        /* @__PURE__ */ D.jsx("label", { htmlFor: "editMessage", children: "Edit message before sending:" }),
        /* @__PURE__ */ D.jsx(
          "textarea",
          {
            id: "editMessage",
            value: E,
            onChange: (R) => h(R.target.value),
            placeholder: "Edit your message...",
            rows: 4,
            autoFocus: !0
          }
        )
      ] }),
      /* @__PURE__ */ D.jsxs("div", { className: iu.actions, children: [
        /* @__PURE__ */ D.jsx("button", { type: "button", className: iu.cancelBtn, onClick: v, children: "Cancel" }),
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
}, J1 = (c) => `<content thesys="true">${JSON.stringify({ component: c, error: null })}</content>`, lE = () => `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, bL = (c) => {
  const { sendMessage: v, setPendingAction: p, setIsModalOpen: S, context: x, addMessage: E, updateMessage: h } = c;
  return (k) => {
    switch (console.log("Action received:", k), k.type) {
      case "continue_conversation":
        if (k.params) {
          const { humanFriendlyMessage: R, llmFriendlyMessage: w, prompt: N } = k.params;
          N ? v(N) : R && w && (p({
            humanFriendlyMessage: R,
            llmFriendlyMessage: w
          }), S(!0));
        }
        break;
      case "open_url":
        k.params?.url && window.open(k.params.url, "_blank", "noopener,noreferrer");
        break;
      case "submit_form":
        if (k.params?.formData) {
          const R = k.params.formData, w = k.params.formName || "form", N = Object.entries(R).filter(([I, B]) => B !== void 0 && B !== "").map(([I, B]) => `${I.replace(/_/g, " ")}: ${B}`).join(`
`), F = `Form submitted: ${w}

${N}`;
          console.log("Sending form data to LLM:", F), v(F);
        }
        break;
      case "add_assistant_message":
        if (k.params?.content || k.params?.componentData) {
          const R = lE(), w = k.params.chatKey;
          let N;
          k.params.componentData ? N = `<content thesys="true">${JSON.stringify(k.params.componentData)}</content>` : N = k.params.content, E(x, {
            id: R,
            role: "assistant",
            content: N,
            timestamp: /* @__PURE__ */ new Date(),
            isStreaming: !1
          }, w);
        }
        break;
      case "create_suggestion_request":
        if (k.params) {
          const { personName: R, personTitle: w, companyName: N, masterPersonId: F, chatKey: I } = k.params, B = {
            request_panel_title: `Suggestion Request for ${R}`,
            request_header_title: `People to introduce to ${R}`,
            request_context: `Find people from my network to introduce to ${R}, who is ${w} at ${N}`,
            status: "suggestion",
            user_id: 3,
            copilot_mode: "loop",
            master_person_id: F
          }, ie = lE();
          E(x, {
            id: ie,
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
          }, I), xy.getState().createSuggestionRequest(B).then(() => {
            const { createSuggestionRequestError: ae } = xy.getState(), oe = J1(ae ? {
              component: "Card",
              props: {
                children: [{
                  component: "TextContent",
                  props: { textMarkdown: `❌ Failed: ${ae}` }
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
            h(x, ie, oe, !1, I);
          });
        }
        break;
      default:
        console.log("Unhandled action type:", k.type);
    }
  };
}, wL = {
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
}, RL = () => Object.entries(wL).filter(([c, v]) => v.allowed).map(([c]) => c), kL = () => `You can use these GenUI components: ${RL().join(", ")}. Do not use any other components. Keep the interface simple and avoid unnecessary complexity.`, TL = "_chatContainer_1domf_1", DL = "_header_1domf_9", OL = "_subtitle_1domf_24", NL = "_messagesContainer_1domf_31", LL = "_emptyState_1domf_50", ML = "_leverageLoopSummary_1domf_61", jL = "_summaryCard_1domf_66", AL = "_summaryCardHeader_1domf_77", UL = "_summaryCardTitle_1domf_84", zL = "_summaryCardInput_1domf_104", PL = "_summaryTextarea_1domf_109", FL = "_summaryCardButton_1domf_132", IL = "_playIcon_1domf_160", Kr = {
  chatContainer: TL,
  header: DL,
  subtitle: OL,
  messagesContainer: NL,
  emptyState: LL,
  leverageLoopSummary: ML,
  summaryCard: jL,
  summaryCardHeader: AL,
  summaryCardTitle: UL,
  summaryCardInput: zL,
  summaryTextarea: PL,
  summaryCardButton: FL,
  playIcon: IL
}, VL = ({
  onSendMessage: c,
  isLoading: v
}) => {
  const [p, S] = He.useState(""), { selectedPerson: x, selectedSuggestionRequest: E, leverageLoopSummaries: h, upsertLeverageLoopSummary: k, currentLeverageLoopChat: R } = wy(
    cd((I) => ({
      selectedPerson: I.selectedPerson,
      selectedSuggestionRequest: I.selectedSuggestionRequest,
      leverageLoopSummaries: I.leverageLoopSummaries,
      upsertLeverageLoopSummary: I.upsertLeverageLoopSummary,
      currentLeverageLoopChat: I.getCurrentLeverageLoopChat()
    }))
  );
  He.useEffect(() => {
    let I = null;
    if (x ? I = x.full_name : E && (I = E.request_header_title), I) {
      const ie = h.find((de) => de.id === I)?.content || "", ae = R.messages.filter((de) => de.role === "user").map((de) => de.content.trim()).filter((de) => de.length > 0), oe = [];
      ie.trim() && oe.push(ie.trim()), oe.push(...ae);
      const Se = oe.join(", ");
      S(Se);
    } else
      S("");
  }, [x, E, h, R.messages]);
  const w = () => x ? `Levergae loop summary for ${x.full_name}` : E ? E.request_header_title : "Leverage Loops", N = () => {
    p.trim() && (c(p.trim()), S(""));
  }, F = (I) => {
    S(I.target.value), x && k({ id: x.full_name, content: I.target.value, timestamp: /* @__PURE__ */ new Date() }), E && k({ id: E.request_header_title, content: I.target.value, timestamp: /* @__PURE__ */ new Date() });
  };
  return /* @__PURE__ */ D.jsx("div", { className: Kr.leverageLoopSummary, children: /* @__PURE__ */ D.jsxs("div", { className: Kr.summaryCard, children: [
    /* @__PURE__ */ D.jsxs("div", { className: Kr.summaryCardHeader, children: [
      /* @__PURE__ */ D.jsx("p", { className: Kr.summaryCardTitle, children: w() }),
      /* @__PURE__ */ D.jsx(
        "button",
        {
          className: Kr.summaryCardButton,
          onClick: N,
          disabled: !p.trim() || v,
          children: /* @__PURE__ */ D.jsx("span", { className: Kr.playIcon, children: "▶" })
        }
      )
    ] }),
    /* @__PURE__ */ D.jsx("div", { className: Kr.summaryCardInput, children: /* @__PURE__ */ D.jsx(
      "textarea",
      {
        className: Kr.summaryTextarea,
        placeholder: "Summary of what I can help you with...",
        value: p,
        onChange: (I) => F(I),
        rows: 2
      }
    ) })
  ] }) });
}, PE = "http://localhost:3001";
console.log("API_BASE_URL", PE);
const r_ = () => `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, c_ = ({
  context: c,
  title: v,
  subtitle: p,
  systemPrompt: S
}) => {
  const {
    chatState: x,
    addMessage: E,
    updateMessage: h,
    setIsLoading: k
  } = wy(
    cd((Re) => c === "leverage-loops" ? {
      chatState: Re.getCurrentLeverageLoopChat(),
      addMessage: Re.addMessage,
      updateMessage: Re.updateMessage,
      setIsLoading: Re.setIsLoading
    } : {
      chatState: Re[c === "copilot" ? "copilotChat" : "outcomesChat"],
      addMessage: Re.addMessage,
      updateMessage: Re.updateMessage,
      setIsLoading: Re.setIsLoading
    })
  ), { messages: R, threadId: w, isLoading: N } = x, F = c === "leverage-loops" && R.length > 0, [I, B] = Ja.useState(!1), [ie, ae] = Ja.useState(null), oe = He.useRef(null);
  He.useEffect(() => {
    oe.current?.scrollIntoView({ behavior: "smooth" });
  }, [R]);
  const Se = He.useCallback(
    async (Re) => {
      if (!Re.trim() || N) return;
      const Ne = {
        id: r_(),
        role: "user",
        content: Re.trim(),
        timestamp: /* @__PURE__ */ new Date()
      };
      E(c, Ne), k(c, !0);
      const $e = r_();
      E(c, {
        id: $e,
        role: "assistant",
        content: "",
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !0
      });
      try {
        const at = kL(), G = `${S || "You are a helpful AI assistant."}

${at}

User: ${Re.trim()}`, X = await fetch(`${PE}/api/chat`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            prompt: {
              role: "user",
              content: G,
              id: Ne.id
            },
            threadId: w,
            responseId: $e,
            context: c
            // Pass context to backend if needed
          })
        });
        if (!X.ok)
          throw new Error(`API error: ${X.status}`);
        const be = X.body?.getReader(), qe = new TextDecoder();
        let ke = "";
        if (be)
          for (; ; ) {
            const { done: xe, value: ne } = await be.read();
            if (xe) break;
            const Le = qe.decode(ne, { stream: !0 });
            ke += Le, h(c, $e, ke, !0);
          }
        h(c, $e, ke, !1);
      } catch (at) {
        console.error("Failed to send message:", at), h(
          c,
          $e,
          "Sorry, there was an error processing your request.",
          !1
        );
      } finally {
        k(c, !1);
      }
    },
    [N, w, c, S, E, h, k]
  ), de = He.useCallback(
    (Re) => {
      bL({
        sendMessage: Se,
        setPendingAction: ae,
        setIsModalOpen: B,
        context: c,
        addMessage: E,
        updateMessage: h
      })(Re);
    },
    [Se, ae, B, c, E, h]
  ), Ce = He.useCallback(
    (Re, Ne) => {
      h(c, Re, Ne);
    },
    [c, h]
  ), Oe = He.useCallback(
    (Re) => {
      B(!1), ae(null), Se(Re);
    },
    [Se]
  ), ye = He.useCallback(() => {
    B(!1), ae(null);
  }, []);
  return /* @__PURE__ */ D.jsxs("div", { className: Kr.chatContainer, children: [
    /* @__PURE__ */ D.jsxs("div", { className: Kr.header, children: [
      /* @__PURE__ */ D.jsx("h1", { children: v }),
      p && /* @__PURE__ */ D.jsx("p", { className: Kr.subtitle, children: p })
    ] }),
    F && /* @__PURE__ */ D.jsx(
      VL,
      {
        onSendMessage: Se,
        isLoading: N
      }
    ),
    /* @__PURE__ */ D.jsxs("div", { className: Kr.messagesContainer, children: [
      R.length === 0 ? /* @__PURE__ */ D.jsx("div", { className: Kr.emptyState, children: /* @__PURE__ */ D.jsx("p", { children: "Start a conversation" }) }) : R.map((Re) => /* @__PURE__ */ D.jsx(
        pL,
        {
          message: Re,
          onAction: de,
          onUpdateMessage: (Ne) => Ce(Re.id, Ne)
        },
        Re.id
      )),
      /* @__PURE__ */ D.jsx("div", { ref: oe })
    ] }),
    /* @__PURE__ */ D.jsx(r4, { onSend: Se, disabled: N }),
    ie && /* @__PURE__ */ D.jsx(
      xL,
      {
        isOpen: I,
        onClose: ye,
        humanFriendlyMessage: ie.humanFriendlyMessage,
        llmFriendlyMessage: ie.llmFriendlyMessage,
        onConfirm: Oe
      }
    )
  ] });
}, HL = (c) => ({
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
}), $L = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.15816%2015.5394C4.42185%2015.8099%203.64142%2015.9909%202.82808%2016.0678C2.75965%2016.0739%202.69009%2016.0784%202.62129%2016.081C2.05326%2016.1048%201.47513%2015.9215%201.00732%2015.5213C0.154714%2014.7923%20-0.052828%2013.5813%200.443029%2012.6226C0.448638%2012.6116%200.453874%2012.6011%200.459857%2012.5898L3.41481%206.77869C2.08654%209.73401%202.83855%2013.3286%205.16339%2015.5372L5.15816%2015.5391V15.5394Z'%20fill='url(%23paint0_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8419%204.46013C15.5782%204.18972%2016.3587%204.00906%2017.172%203.93175C17.2401%203.92571%2017.31%203.92119%2017.3788%203.91855C17.9468%203.89479%2018.525%204.07808%2018.9928%204.47823C19.845%205.20726%2020.0529%206.41828%2019.5571%207.37699C19.5515%207.3883%2019.5458%207.39886%2019.5402%207.4098L16.5853%2013.2205C17.9132%2010.2648%2017.1615%206.67059%2014.8367%204.46202L14.8419%204.46013Z'%20fill='url(%23paint1_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10%202.61975C11.8545%202.61975%2013.547%203.31559%2014.8367%204.46211C12.464%205.51888%2010.8283%207.5913%2010.1904%2010.0563C9.55242%2012.5214%207.60302%2014.6787%205.16338%2015.5378C3.66459%2014.2306%202.68222%2012.2057%202.68222%2010.0001C2.68259%205.92394%205.95877%202.61975%2010%202.61975Z'%20fill='url(%23paint2_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8367%204.46167C16.358%205.81412%2017.3179%207.79376%2017.3179%209.99932C17.3179%2014.0751%2014.0417%2017.3793%2010.0001%2017.3793C8.14604%2017.3793%206.45317%2016.6835%205.16342%2015.537C7.59222%2014.5651%209.36213%2012.4644%2010.0001%209.99932C10.638%207.53429%2012.4079%205.4332%2014.8367%204.46167Z'%20fill='url(%23paint3_linear_23492_1459)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_23492_1459'%20x1='1.41231'%20y1='10.771'%20x2='6.31346'%20y2='13.2684'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFAE00'%20stop-opacity='0.12'/%3e%3cstop%20offset='1'%20stop-color='%23FFAE00'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_23492_1459'%20x1='13.6991'%20y1='6.69473'%20x2='18.6306'%20y2='9.20746'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2313F562'/%3e%3cstop%20offset='1'%20stop-color='%2313F562'%20stop-opacity='0.09'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_23492_1459'%20x1='4.21878'%20y1='14.805'%20x2='10.8001'%20y2='2.68539'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FD5743'/%3e%3cstop%20offset='0.21'%20stop-color='%23D13D58'/%3e%3cstop%20offset='0.4'%20stop-color='%23AB2868'/%3e%3cstop%20offset='0.6'%20stop-color='%238C1B6F'/%3e%3cstop%20offset='1'%20stop-color='%23280553'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_23492_1459'%20x1='9.19834'%20y1='17.5257'%20x2='15.8611'%20y2='5.25654'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23130F56'/%3e%3cstop%20offset='0.41'%20stop-color='%23105D8E'/%3e%3cstop%20offset='0.6'%20stop-color='%23107995'/%3e%3cstop%20offset='0.79'%20stop-color='%2311A39E'/%3e%3cstop%20offset='1'%20stop-color='%2313EBAF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", BL = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%205.83329C9.17592%205.83329%208.37034%206.07766%207.68514%206.5355C6.99993%206.99334%206.46588%207.64408%206.15051%208.40544C5.83515%209.1668%205.75264%2010.0046%205.91341%2010.8128C6.07418%2011.6211%206.47102%2012.3635%207.05373%2012.9462C7.63645%2013.529%208.37888%2013.9258%209.18714%2014.0866C9.99539%2014.2473%2010.8332%2014.1648%2011.5945%2013.8495C12.3559%2013.5341%2013.0066%2013%2013.4645%2012.3148C13.9223%2011.6296%2014.1667%2010.824%2014.1667%209.99995M10.8333%202.54579C9.28839%202.37246%207.72776%202.68352%206.36733%203.43593C5.0069%204.18834%203.9139%205.34492%203.23953%206.74567C2.56516%208.14643%202.34274%209.72213%202.60305%2011.2548C2.86335%2012.7875%203.59352%2014.2014%204.69253%2015.301C5.79155%2016.4006%207.2051%2017.1314%208.73766%2017.3925C10.2702%2017.6536%2011.846%2017.432%2013.2471%2016.7583C14.6482%2016.0846%2015.8053%2014.9922%2016.5584%2013.6322C17.3115%2012.2721%2017.6234%2010.7117%2017.4508%209.16662M12.5%207.49995V4.99995L15%202.49995V4.99995H17.5L15%207.49995H12.5ZM12.5%207.49995L10%209.99995M9.16668%209.99995C9.16668%2010.221%209.25447%2010.4329%209.41076%2010.5892C9.56704%2010.7455%209.779%2010.8333%2010%2010.8333C10.221%2010.8333%2010.433%2010.7455%2010.5893%2010.5892C10.7455%2010.4329%2010.8333%2010.221%2010.8333%209.99995C10.8333%209.77894%2010.7455%209.56698%2010.5893%209.4107C10.433%209.25442%2010.221%209.16662%2010%209.16662C9.779%209.16662%209.56704%209.25442%209.41076%209.4107C9.25447%209.56698%209.16668%209.77894%209.16668%209.99995Z'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", qL = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.5533%205.43171C14.1448%204.53303%2013.4793%203.77539%2012.6409%203.2543C11.8024%202.73321%2010.8285%202.47198%209.84179%202.50353C8.8551%202.53509%207.89984%202.85802%207.09639%203.43162C6.29294%204.00523%205.67727%204.80383%205.32698%205.72679C4.97669%206.64974%204.90745%207.65573%205.12798%208.61798C5.34852%209.58022%205.84897%2010.4556%206.56625%2011.1339C7.28353%2011.8122%208.18555%2012.263%209.15861%2012.4294C10.1317%2012.5958%2011.1322%2012.4705%2012.0342%2012.0692'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.5683%2014.5533C15.467%2014.1448%2016.2246%2013.4793%2016.7457%2012.6409C17.2668%2011.8024%2017.5281%2010.8284%2017.4965%209.84176C17.4649%208.85507%2017.142%207.89981%2016.5684%207.09636C15.9948%206.29291%2015.1962%205.67724%2014.2732%205.32695C13.3503%204.97666%2012.3443%204.90742%2011.3821%205.12795C10.4198%205.34849%209.54439%205.84894%208.86612%206.56622C8.18784%207.2835%207.73708%208.18552%207.57064%209.15858C7.40419%2010.1316%207.52952%2011.1322%207.93083%2012.0341'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.45001%2014.5684C5.8585%2015.467%206.52387%2016.2247%207.36227%2016.7459C8.20067%2017.267%209.17458%2017.5283%2010.1613%2017.4969C11.1479%2017.4654%2012.1032%2017.1425%2012.9067%2016.569C13.7102%2015.9955%2014.3259%2015.197%2014.6763%2014.2741C15.0267%2013.3512%2015.0961%2012.3452%2014.8756%2011.383C14.6552%2010.4207%2014.1549%209.54526%2013.4377%208.8669C12.7205%208.18855%2011.8186%207.73767%2010.8456%207.57109C9.87256%207.40451%208.872%207.52969%207.97001%207.93085'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.43168%205.44995C4.53299%205.85844%203.77532%206.52381%203.25417%207.36221C2.73302%208.20061%202.47171%209.17452%202.50318%2010.1612C2.53465%2011.1479%202.85749%2012.1031%203.431%2012.9066C4.00451%2013.7101%204.80304%2014.3259%205.72594%2014.6763C6.64884%2015.0266%207.6548%2015.096%208.61706%2014.8756C9.57931%2014.6552%2010.4548%2014.1548%2011.1331%2013.4376C11.8115%2012.7205%2012.2624%2011.8185%2012.4289%2010.8455C12.5955%209.8725%2012.4703%208.87194%2012.0692%207.96995'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", WL = ({
  activeSection: c,
  onSectionChange: v
}) => {
  const { leverageLoops: p, fetchNetworkPersons: S, fetchSuggestionRequests: x } = xy(
    cd((oe) => ({
      leverageLoops: oe.leverageLoops,
      fetchNetworkPersons: oe.fetchNetworkPersons,
      fetchSuggestionRequests: oe.fetchSuggestionRequests
    }))
  ), {
    selectedPerson: E,
    selectedSuggestionRequest: h,
    setSelectedPerson: k,
    setSelectedSuggestionRequest: R,
    addMessage: w,
    leverageLoopChats: N
  } = wy(
    cd((oe) => ({
      selectedPerson: oe.selectedPerson,
      selectedSuggestionRequest: oe.selectedSuggestionRequest,
      setSelectedPerson: oe.setSelectedPerson,
      setSelectedSuggestionRequest: oe.setSelectedSuggestionRequest,
      addMessage: oe.addMessage,
      leverageLoopChats: oe.leverageLoopChats
    }))
  ), [F, I] = He.useState(/* @__PURE__ */ new Set()), B = (oe) => {
    v(oe), I((Se) => {
      const de = new Set(Se);
      return de.has(oe) ? de.delete(oe) : de.add(oe), de;
    });
  }, ie = (oe) => {
    k(oe), v("leverage-loops");
    const Se = oe.full_name;
    if (!(N[Se]?.messages?.[0]?.role === "assistant")) {
      const Oe = "leverage-loops", ye = r_(), Re = `<content thesys="true">${JSON.stringify(HL(oe))}</content>`;
      w(Oe, {
        id: ye,
        role: "assistant",
        content: Re,
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !1
      }, Se);
    }
  }, ae = (oe) => {
    R(oe), v("leverage-loops");
  };
  return He.useEffect(() => {
    S(), x();
  }, []), /* @__PURE__ */ D.jsx("div", { className: Rn.sidebar, children: /* @__PURE__ */ D.jsxs("nav", { className: Rn.sidebarNav, children: [
    /* @__PURE__ */ D.jsxs(
      "button",
      {
        className: `${Rn.sidebarItem} ${c === "copilot" ? Rn.active : ""}`,
        onClick: () => v("copilot"),
        "aria-label": "Orbiter.io Copilot",
        children: [
          /* @__PURE__ */ D.jsx("span", { className: Rn.sidebarIcon, children: /* @__PURE__ */ D.jsx("img", { src: $L, alt: "Orbiter", width: 18, height: 18 }) }),
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
            /* @__PURE__ */ D.jsx("span", { className: Rn.sidebarIcon, children: /* @__PURE__ */ D.jsx("img", { src: BL, alt: "Outcomes", width: 18, height: 18 }) }),
            /* @__PURE__ */ D.jsx("span", { className: Rn.sidebarLabel, children: "Outcomes" })
          ]
        }
      ),
      /* @__PURE__ */ D.jsx(
        "button",
        {
          className: Rn.plusButton,
          onClick: () => B("outcomes"),
          "aria-label": "Expand Outcomes",
          children: /* @__PURE__ */ D.jsx("span", { className: `${Rn.plusIcon} ${F.has("outcomes") ? Rn.rotated : ""}`, children: "+" })
        }
      )
    ] }) }),
    /* @__PURE__ */ D.jsxs("div", { className: Rn.sectionWrapper, children: [
      /* @__PURE__ */ D.jsxs("div", { className: `${Rn.sectionHeader} ${c === "leverage-loops" ? Rn.active : ""}`, children: [
        /* @__PURE__ */ D.jsxs(
          "button",
          {
            className: Rn.sidebarItemInHeader,
            onClick: () => v("leverage-loops"),
            "aria-label": "Leverage Loops",
            children: [
              /* @__PURE__ */ D.jsx("span", { className: Rn.sidebarIcon, children: /* @__PURE__ */ D.jsx("img", { src: qL, alt: "Leverage Loops", width: 18, height: 18 }) }),
              /* @__PURE__ */ D.jsx("span", { className: Rn.sidebarLabel, children: "Leverage Loops" })
            ]
          }
        ),
        /* @__PURE__ */ D.jsx(
          "button",
          {
            className: Rn.plusButton,
            onClick: () => B("leverage-loops"),
            "aria-label": "Expand Leverage Loops",
            children: /* @__PURE__ */ D.jsx("span", { className: `${Rn.plusIcon} ${F.has("leverage-loops") ? Rn.rotated : ""}`, children: "+" })
          }
        )
      ] }),
      F.has("leverage-loops") && /* @__PURE__ */ D.jsx(
        q3,
        {
          contentType: "leverage-loops",
          items: p,
          selectedItem: E,
          selectedSuggestionRequest: h,
          onItemSelect: ie,
          onSuggestionRequestSelect: ae
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
), YL = () => /* @__PURE__ */ D.jsx(
  c_,
  {
    context: "outcomes",
    title: "Outcomes",
    systemPrompt: "You are helping the user track and achieve their professional outcomes and goals."
  }
), GL = () => {
  const { selectedPerson: c, selectedSuggestionRequest: v } = wy(
    cd((x) => ({
      selectedPerson: x.selectedPerson,
      selectedSuggestionRequest: x.selectedSuggestionRequest
    }))
  ), p = () => c ? `You are helping with a leverage loop for ${c.full_name} from ${c.master_person?.master_company?.company_name || "Unknown Company"}. Their title is ${c.master_person?.current_title || "Unknown"}.` : v ? `You are helping with the leverage loop suggestion request: "${v.request_header_title}". Context: ${v.request_context}` : "You are helping the user manage their leverage loops and professional network.", S = () => {
    if (c)
      return `${c.full_name} • ${c.master_person?.master_company?.company_name || ""}`;
    if (v)
      return v.request_header_title;
  };
  return !c && !v ? /* @__PURE__ */ D.jsxs("div", { className: Kr.chatContainer, children: [
    /* @__PURE__ */ D.jsx("div", { className: Kr.header, children: /* @__PURE__ */ D.jsx("h1", { children: "Leverage Loops" }) }),
    /* @__PURE__ */ D.jsx("div", { className: Kr.messagesContainer, children: /* @__PURE__ */ D.jsx("div", { className: Kr.emptyState, children: /* @__PURE__ */ D.jsx("p", { children: "Select a person or suggestion request from the sidebar to start a conversation" }) }) })
  ] }) : /* @__PURE__ */ D.jsx(D.Fragment, { children: /* @__PURE__ */ D.jsx(
    c_,
    {
      context: "leverage-loops",
      title: "Leverage Loops",
      subtitle: S(),
      systemPrompt: p()
    }
  ) });
}, QL = "_app_4u5b6_5", KL = "_mainContent_4u5b6_15", sE = {
  app: QL,
  mainContent: KL
}, XL = ({
  agentName: c = "Copilot"
}) => {
  const [v, p] = He.useState("copilot"), S = () => {
    switch (v) {
      case "copilot":
        return /* @__PURE__ */ D.jsx(uE, { agentName: c });
      case "outcomes":
        return /* @__PURE__ */ D.jsx(YL, {});
      case "leverage-loops":
        return /* @__PURE__ */ D.jsx(GL, {});
      default:
        return /* @__PURE__ */ D.jsx(uE, { agentName: c });
    }
  };
  return /* @__PURE__ */ D.jsxs("div", { className: sE.app, children: [
    /* @__PURE__ */ D.jsx(
      WL,
      {
        activeSection: v,
        onSectionChange: p
      }
    ),
    /* @__PURE__ */ D.jsx("main", { className: sE.mainContent, children: S() })
  ] });
};
var Sy = { exports: {} }, Ka = {}, Cy = { exports: {} }, Z1 = {};
var cE;
function JL() {
  return cE || (cE = 1, (function(c) {
    function v(ne, Le) {
      var ge = ne.length;
      ne.push(Le);
      e: for (; 0 < ge; ) {
        var P = ge - 1 >>> 1, Z = ne[P];
        if (0 < x(Z, Le)) ne[P] = Le, ne[ge] = Z, ge = P;
        else break e;
      }
    }
    function p(ne) {
      return ne.length === 0 ? null : ne[0];
    }
    function S(ne) {
      if (ne.length === 0) return null;
      var Le = ne[0], ge = ne.pop();
      if (ge !== Le) {
        ne[0] = ge;
        e: for (var P = 0, Z = ne.length, tt = Z >>> 1; P < tt; ) {
          var Ie = 2 * (P + 1) - 1, gt = ne[Ie], ot = Ie + 1, Ue = ne[ot];
          if (0 > x(gt, ge)) ot < Z && 0 > x(Ue, gt) ? (ne[P] = Ue, ne[ot] = ge, P = ot) : (ne[P] = gt, ne[Ie] = ge, P = Ie);
          else if (ot < Z && 0 > x(Ue, ge)) ne[P] = Ue, ne[ot] = ge, P = ot;
          else break e;
        }
      }
      return Le;
    }
    function x(ne, Le) {
      var ge = ne.sortIndex - Le.sortIndex;
      return ge !== 0 ? ge : ne.id - Le.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var E = performance;
      c.unstable_now = function() {
        return E.now();
      };
    } else {
      var h = Date, k = h.now();
      c.unstable_now = function() {
        return h.now() - k;
      };
    }
    var R = [], w = [], N = 1, F = null, I = 3, B = !1, ie = !1, ae = !1, oe = typeof setTimeout == "function" ? setTimeout : null, Se = typeof clearTimeout == "function" ? clearTimeout : null, de = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ce(ne) {
      for (var Le = p(w); Le !== null; ) {
        if (Le.callback === null) S(w);
        else if (Le.startTime <= ne) S(w), Le.sortIndex = Le.expirationTime, v(R, Le);
        else break;
        Le = p(w);
      }
    }
    function Oe(ne) {
      if (ae = !1, Ce(ne), !ie) if (p(R) !== null) ie = !0, ke(ye);
      else {
        var Le = p(w);
        Le !== null && xe(Oe, Le.startTime - ne);
      }
    }
    function ye(ne, Le) {
      ie = !1, ae && (ae = !1, Se($e), $e = -1), B = !0;
      var ge = I;
      try {
        for (Ce(Le), F = p(R); F !== null && (!(F.expirationTime > Le) || ne && !le()); ) {
          var P = F.callback;
          if (typeof P == "function") {
            F.callback = null, I = F.priorityLevel;
            var Z = P(F.expirationTime <= Le);
            Le = c.unstable_now(), typeof Z == "function" ? F.callback = Z : F === p(R) && S(R), Ce(Le);
          } else S(R);
          F = p(R);
        }
        if (F !== null) var tt = !0;
        else {
          var Ie = p(w);
          Ie !== null && xe(Oe, Ie.startTime - Le), tt = !1;
        }
        return tt;
      } finally {
        F = null, I = ge, B = !1;
      }
    }
    var Re = !1, Ne = null, $e = -1, it = 5, at = -1;
    function le() {
      return !(c.unstable_now() - at < it);
    }
    function G() {
      if (Ne !== null) {
        var ne = c.unstable_now();
        at = ne;
        var Le = !0;
        try {
          Le = Ne(!0, ne);
        } finally {
          Le ? X() : (Re = !1, Ne = null);
        }
      } else Re = !1;
    }
    var X;
    if (typeof de == "function") X = function() {
      de(G);
    };
    else if (typeof MessageChannel < "u") {
      var be = new MessageChannel(), qe = be.port2;
      be.port1.onmessage = G, X = function() {
        qe.postMessage(null);
      };
    } else X = function() {
      oe(G, 0);
    };
    function ke(ne) {
      Ne = ne, Re || (Re = !0, X());
    }
    function xe(ne, Le) {
      $e = oe(function() {
        ne(c.unstable_now());
      }, Le);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(ne) {
      ne.callback = null;
    }, c.unstable_continueExecution = function() {
      ie || B || (ie = !0, ke(ye));
    }, c.unstable_forceFrameRate = function(ne) {
      0 > ne || 125 < ne ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : it = 0 < ne ? Math.floor(1e3 / ne) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return I;
    }, c.unstable_getFirstCallbackNode = function() {
      return p(R);
    }, c.unstable_next = function(ne) {
      switch (I) {
        case 1:
        case 2:
        case 3:
          var Le = 3;
          break;
        default:
          Le = I;
      }
      var ge = I;
      I = Le;
      try {
        return ne();
      } finally {
        I = ge;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(ne, Le) {
      switch (ne) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ne = 3;
      }
      var ge = I;
      I = ne;
      try {
        return Le();
      } finally {
        I = ge;
      }
    }, c.unstable_scheduleCallback = function(ne, Le, ge) {
      var P = c.unstable_now();
      switch (typeof ge == "object" && ge !== null ? (ge = ge.delay, ge = typeof ge == "number" && 0 < ge ? P + ge : P) : ge = P, ne) {
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
      return Z = ge + Z, ne = { id: N++, callback: Le, priorityLevel: ne, startTime: ge, expirationTime: Z, sortIndex: -1 }, ge > P ? (ne.sortIndex = ge, v(w, ne), p(R) === null && ne === p(w) && (ae ? (Se($e), $e = -1) : ae = !0, xe(Oe, ge - P))) : (ne.sortIndex = Z, v(R, ne), ie || B || (ie = !0, ke(ye))), ne;
    }, c.unstable_shouldYield = le, c.unstable_wrapCallback = function(ne) {
      var Le = I;
      return function() {
        var ge = I;
        I = Le;
        try {
          return ne.apply(this, arguments);
        } finally {
          I = ge;
        }
      };
    };
  })(Z1)), Z1;
}
var e_ = {};
var fE;
function ZL() {
  return fE || (fE = 1, (function(c) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var v = !1, p = 5;
      function S(we, Je) {
        var Rt = we.length;
        we.push(Je), h(we, Je, Rt);
      }
      function x(we) {
        return we.length === 0 ? null : we[0];
      }
      function E(we) {
        if (we.length === 0)
          return null;
        var Je = we[0], Rt = we.pop();
        return Rt !== Je && (we[0] = Rt, k(we, Rt, 0)), Je;
      }
      function h(we, Je, Rt) {
        for (var Gt = Rt; Gt > 0; ) {
          var un = Gt - 1 >>> 1, _n = we[un];
          if (R(_n, Je) > 0)
            we[un] = Je, we[Gt] = _n, Gt = un;
          else
            return;
        }
      }
      function k(we, Je, Rt) {
        for (var Gt = Rt, un = we.length, _n = un >>> 1; Gt < _n; ) {
          var pn = (Gt + 1) * 2 - 1, nr = we[pn], sn = pn + 1, Jt = we[sn];
          if (R(nr, Je) < 0)
            sn < un && R(Jt, nr) < 0 ? (we[Gt] = Jt, we[sn] = Je, Gt = sn) : (we[Gt] = nr, we[pn] = Je, Gt = pn);
          else if (sn < un && R(Jt, Je) < 0)
            we[Gt] = Jt, we[sn] = Je, Gt = sn;
          else
            return;
        }
      }
      function R(we, Je) {
        var Rt = we.sortIndex - Je.sortIndex;
        return Rt !== 0 ? Rt : we.id - Je.id;
      }
      var w = 1, N = 2, F = 3, I = 4, B = 5;
      function ie(we, Je) {
      }
      var ae = typeof performance == "object" && typeof performance.now == "function";
      if (ae) {
        var oe = performance;
        c.unstable_now = function() {
          return oe.now();
        };
      } else {
        var Se = Date, de = Se.now();
        c.unstable_now = function() {
          return Se.now() - de;
        };
      }
      var Ce = 1073741823, Oe = -1, ye = 250, Re = 5e3, Ne = 1e4, $e = Ce, it = [], at = [], le = 1, G = null, X = F, be = !1, qe = !1, ke = !1, xe = typeof setTimeout == "function" ? setTimeout : null, ne = typeof clearTimeout == "function" ? clearTimeout : null, Le = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ge(we) {
        for (var Je = x(at); Je !== null; ) {
          if (Je.callback === null)
            E(at);
          else if (Je.startTime <= we)
            E(at), Je.sortIndex = Je.expirationTime, S(it, Je);
          else
            return;
          Je = x(at);
        }
      }
      function P(we) {
        if (ke = !1, ge(we), !qe)
          if (x(it) !== null)
            qe = !0, zn(Z);
          else {
            var Je = x(at);
            Je !== null && wr(P, Je.startTime - we);
          }
      }
      function Z(we, Je) {
        qe = !1, ke && (ke = !1, ya()), be = !0;
        var Rt = X;
        try {
          var Gt;
          if (!v) return tt(we, Je);
        } finally {
          G = null, X = Rt, be = !1;
        }
      }
      function tt(we, Je) {
        var Rt = Je;
        for (ge(Rt), G = x(it); G !== null && !(G.expirationTime > Rt && (!we || gi())); ) {
          var Gt = G.callback;
          if (typeof Gt == "function") {
            G.callback = null, X = G.priorityLevel;
            var un = G.expirationTime <= Rt, _n = Gt(un);
            Rt = c.unstable_now(), typeof _n == "function" ? G.callback = _n : G === x(it) && E(it), ge(Rt);
          } else
            E(it);
          G = x(it);
        }
        if (G !== null)
          return !0;
        var pn = x(at);
        return pn !== null && wr(P, pn.startTime - Rt), !1;
      }
      function Ie(we, Je) {
        switch (we) {
          case w:
          case N:
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
          case N:
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
        var Gt = c.unstable_now(), un;
        if (typeof Rt == "object" && Rt !== null) {
          var _n = Rt.delay;
          typeof _n == "number" && _n > 0 ? un = Gt + _n : un = Gt;
        } else
          un = Gt;
        var pn;
        switch (we) {
          case w:
            pn = Oe;
            break;
          case N:
            pn = ye;
            break;
          case B:
            pn = $e;
            break;
          case I:
            pn = Ne;
            break;
          case F:
          default:
            pn = Re;
            break;
        }
        var nr = un + pn, sn = {
          id: le++,
          callback: Je,
          priorityLevel: we,
          startTime: un,
          expirationTime: nr,
          sortIndex: -1
        };
        return un > Gt ? (sn.sortIndex = un, S(at, sn), x(it) === null && sn === x(at) && (ke ? ya() : ke = !0, wr(P, un - Gt))) : (sn.sortIndex = nr, S(it, sn), !qe && !be && (qe = !0, zn(Z))), sn;
      }
      function dt() {
      }
      function ht() {
        !qe && !be && (qe = !0, zn(Z));
      }
      function Xt() {
        return x(it);
      }
      function Un(we) {
        we.callback = null;
      }
      function Nr() {
        return X;
      }
      var kn = !1, ur = null, Yn = -1, Gn = p, Jr = -1;
      function gi() {
        var we = c.unstable_now() - Jr;
        return !(we < Gn);
      }
      function ma() {
      }
      function tr(we) {
        if (we < 0 || we > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        we > 0 ? Gn = Math.floor(1e3 / we) : Gn = p;
      }
      var Tn = function() {
        if (ur !== null) {
          var we = c.unstable_now();
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
      if (typeof Le == "function")
        Qn = function() {
          Le(Tn);
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
          we(c.unstable_now());
        }, Je);
      }
      function ya() {
        ne(Yn), Yn = -1;
      }
      var ei = ma, _i = null;
      c.unstable_IdlePriority = B, c.unstable_ImmediatePriority = w, c.unstable_LowPriority = I, c.unstable_NormalPriority = F, c.unstable_Profiling = _i, c.unstable_UserBlockingPriority = N, c.unstable_cancelCallback = Un, c.unstable_continueExecution = ht, c.unstable_forceFrameRate = tr, c.unstable_getCurrentPriorityLevel = Nr, c.unstable_getFirstCallbackNode = Xt, c.unstable_next = gt, c.unstable_pauseExecution = dt, c.unstable_requestPaint = ei, c.unstable_runWithPriority = Ie, c.unstable_scheduleCallback = Ue, c.unstable_shouldYield = gi, c.unstable_wrapCallback = ot, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(e_)), e_;
}
var dE;
function FE() {
  return dE || (dE = 1, process.env.NODE_ENV === "production" ? Cy.exports = JL() : Cy.exports = ZL()), Cy.exports;
}
var pE;
function eM() {
  if (pE) return Ka;
  pE = 1;
  var c = Ev(), v = FE();
  function p(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var S = /* @__PURE__ */ new Set(), x = {};
  function E(n, r) {
    h(n, r), h(n + "Capture", r);
  }
  function h(n, r) {
    for (x[n] = r, n = 0; n < r.length; n++) S.add(r[n]);
  }
  var k = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), R = Object.prototype.hasOwnProperty, w = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, N = {}, F = {};
  function I(n) {
    return R.call(F, n) ? !0 : R.call(N, n) ? !1 : w.test(n) ? F[n] = !0 : (N[n] = !0, !1);
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
  function ae(n, r, o, u, f, m, C) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = f, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = m, this.removeEmptyString = C;
  }
  var oe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    oe[n] = new ae(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    oe[r] = new ae(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    oe[n] = new ae(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    oe[n] = new ae(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    oe[n] = new ae(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    oe[n] = new ae(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    oe[n] = new ae(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    oe[n] = new ae(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    oe[n] = new ae(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Se = /[\-:]([a-z])/g;
  function de(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Se,
      de
    );
    oe[r] = new ae(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Se, de);
    oe[r] = new ae(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Se, de);
    oe[r] = new ae(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    oe[n] = new ae(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), oe.xlinkHref = new ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    oe[n] = new ae(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ce(n, r, o, u) {
    var f = oe.hasOwnProperty(r) ? oe[r] : null;
    (f !== null ? f.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ie(r, o, f, u) && (o = null), u || f === null ? I(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : f.mustUseProperty ? n[f.propertyName] = o === null ? f.type === 3 ? !1 : "" : o : (r = f.attributeName, u = f.attributeNamespace, o === null ? n.removeAttribute(r) : (f = f.type, o = f === 3 || f === 4 && o === !0 ? "" : "" + o, u ? n.setAttributeNS(u, r, o) : n.setAttribute(r, o))));
  }
  var Oe = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ye = /* @__PURE__ */ Symbol.for("react.element"), Re = /* @__PURE__ */ Symbol.for("react.portal"), Ne = /* @__PURE__ */ Symbol.for("react.fragment"), $e = /* @__PURE__ */ Symbol.for("react.strict_mode"), it = /* @__PURE__ */ Symbol.for("react.profiler"), at = /* @__PURE__ */ Symbol.for("react.provider"), le = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), be = /* @__PURE__ */ Symbol.for("react.suspense_list"), qe = /* @__PURE__ */ Symbol.for("react.memo"), ke = /* @__PURE__ */ Symbol.for("react.lazy"), xe = /* @__PURE__ */ Symbol.for("react.offscreen"), ne = Symbol.iterator;
  function Le(n) {
    return n === null || typeof n != "object" ? null : (n = ne && n[ne] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ge = Object.assign, P;
  function Z(n) {
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
        for (var f = Q.stack.split(`
`), m = u.stack.split(`
`), C = f.length - 1, O = m.length - 1; 1 <= C && 0 <= O && f[C] !== m[O]; ) O--;
        for (; 1 <= C && 0 <= O; C--, O--) if (f[C] !== m[O]) {
          if (C !== 1 || O !== 1)
            do
              if (C--, O--, 0 > O || f[C] !== m[O]) {
                var j = `
` + f[C].replace(" at new ", " at ");
                return n.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", n.displayName)), j;
              }
            while (1 <= C && 0 <= O);
          break;
        }
      }
    } finally {
      tt = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? Z(n) : "";
  }
  function gt(n) {
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
      case Ne:
        return "Fragment";
      case Re:
        return "Portal";
      case it:
        return "Profiler";
      case $e:
        return "StrictMode";
      case X:
        return "Suspense";
      case be:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case le:
        return (n.displayName || "Context") + ".Consumer";
      case at:
        return (n._context.displayName || "Context") + ".Provider";
      case G:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case qe:
        return r = n.displayName || null, r !== null ? r : ot(n.type) || "Memo";
      case ke:
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
        return r === $e ? "StrictMode" : "Mode";
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
    return ge({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function Yn(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    o = dt(r.value != null ? r.value : o), n._wrapperState = { initialChecked: u, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Gn(n, r) {
    r = r.checked, r != null && Ce(n, "checked", r, !1);
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
      for (var f = 0; f < o.length; f++) r["$" + o[f]] = !0;
      for (o = 0; o < n.length; o++) f = r.hasOwnProperty("$" + n[o].value), n[o].selected !== f && (n[o].selected = f), f && u && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + dt(o), r = null, f = 0; f < n.length; f++) {
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
    return ge({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function br(n, r) {
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
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, u, f) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, u, f);
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
  function Gt(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || Je.hasOwnProperty(n) && Je[n] ? ("" + r).trim() : r + "px";
  }
  function un(n, r) {
    n = n.style;
    for (var o in r) if (r.hasOwnProperty(o)) {
      var u = o.indexOf("--") === 0, f = Gt(o, r[o], u);
      o === "float" && (o = "cssFloat"), u ? n.setProperty(o, f) : n[o] = f;
    }
  }
  var _n = ge({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
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
  var Zt = null, ga = null, Rr = null;
  function Na(n) {
    if (n = nt(n)) {
      if (typeof Zt != "function") throw Error(p(280));
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
  if (k) try {
    var sr = {};
    Object.defineProperty(sr, "passive", { get: function() {
      Mr = !0;
    } }), window.addEventListener("test", sr, sr), window.removeEventListener("test", sr, sr);
  } catch {
    Mr = !1;
  }
  function Si(n, r, o, u, f, m, C, O, j) {
    var Q = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, Q);
    } catch (pe) {
      this.onError(pe);
    }
  }
  var ti = !1, Ci = null, Ei = !1, M = null, ue = { onError: function(n) {
    ti = !0, Ci = n;
  } };
  function Me(n, r, o, u, f, m, C, O, j) {
    ti = !1, Ci = null, Si.apply(ue, arguments);
  }
  function We(n, r, o, u, f, m, C, O, j) {
    if (Me.apply(this, arguments), ti) {
      if (ti) {
        var Q = Ci;
        ti = !1, Ci = null;
      } else throw Error(p(198));
      Ei || (Ei = !0, M = Q);
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
          if (m === o) return Ot(f), n;
          if (m === u) return Ot(f), r;
          m = m.sibling;
        }
        throw Error(p(188));
      }
      if (o.return !== u.return) o = f, u = m;
      else {
        for (var C = !1, O = f.child; O; ) {
          if (O === o) {
            C = !0, o = f, u = m;
            break;
          }
          if (O === u) {
            C = !0, u = f, o = m;
            break;
          }
          O = O.sibling;
        }
        if (!C) {
          for (O = m.child; O; ) {
            if (O === o) {
              C = !0, o = m, u = f;
              break;
            }
            if (O === u) {
              C = !0, u = m, o = f;
              break;
            }
            O = O.sibling;
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
  var vn = v.unstable_scheduleCallback, cr = v.unstable_cancelCallback, ni = v.unstable_shouldYield, ri = v.unstable_requestPaint, xt = v.unstable_now, wt = v.unstable_getCurrentPriorityLevel, ai = v.unstable_ImmediatePriority, pl = v.unstable_UserBlockingPriority, vl = v.unstable_NormalPriority, Ro = v.unstable_LowPriority, lu = v.unstable_IdlePriority, ko = null, Zr = null;
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
    var u = 0, f = n.suspendedLanes, m = n.pingedLanes, C = o & 268435455;
    if (C !== 0) {
      var O = C & ~f;
      O !== 0 ? u = ii(O) : (m &= C, m !== 0 && (u = ii(m)));
    } else C = o & ~f, C !== 0 ? u = ii(C) : m !== 0 && (u = ii(m));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && (r & f) === 0 && (f = u & -u, m = r & -r, f >= m || f === 16 && (m & 4194240) !== 0)) return r;
    if ((u & 4) !== 0 && (u |= o & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) o = 31 - jr(r), f = 1 << o, u |= n[o], r &= ~f;
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
    for (var o = n.suspendedLanes, u = n.pingedLanes, f = n.expirationTimes, m = n.pendingLanes; 0 < m; ) {
      var C = 31 - jr(m), O = 1 << C, j = f[C];
      j === -1 ? ((O & o) === 0 || (O & u) !== 0) && (f[C] = su(O, r)) : j <= r && (n.expiredLanes |= O), m &= ~O;
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
  function dd(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var f = 31 - jr(o), m = 1 << f;
      r[f] = 0, u[f] = -1, n[f] = -1, o &= ~m;
    }
  }
  function Xi(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var u = 31 - jr(o), f = 1 << u;
      f & r | n[u] & r && (n[u] |= r), o &= ~f;
    }
  }
  var Ht = 0;
  function du(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Ft, is, xi, yt, pu, fr = !1, bi = [], Ar = null, wi = null, hn = null, en = /* @__PURE__ */ new Map(), Oo = /* @__PURE__ */ new Map(), Kn = [], Ur = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function La(n, r) {
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
  function ml(n, r, o, u, f, m) {
    return n === null || n.nativeEvent !== m ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: u, nativeEvent: m, targetContainers: [f] }, r !== null && (r = nt(r), r !== null && is(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, f !== null && r.indexOf(f) === -1 && r.push(f), n);
  }
  function os(n, r, o, u, f) {
    switch (r) {
      case "focusin":
        return Ar = ml(Ar, n, r, o, u, f), !0;
      case "dragenter":
        return wi = ml(wi, n, r, o, u, f), !0;
      case "mouseover":
        return hn = ml(hn, n, r, o, u, f), !0;
      case "pointerover":
        var m = f.pointerId;
        return en.set(m, ml(en.get(m) || null, n, r, o, u, f)), !0;
      case "gotpointercapture":
        return m = f.pointerId, Oo.set(m, ml(Oo.get(m) || null, n, r, o, u, f)), !0;
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
  function pd() {
    fr = !1, Ar !== null && No(Ar) && (Ar = null), wi !== null && No(wi) && (wi = null), hn !== null && No(hn) && (hn = null), en.forEach(yl), Oo.forEach(yl);
  }
  function Ma(n, r) {
    n.blockedOn === r && (n.blockedOn = null, fr || (fr = !0, v.unstable_scheduleCallback(v.unstable_NormalPriority, pd)));
  }
  function li(n) {
    function r(f) {
      return Ma(f, n);
    }
    if (0 < bi.length) {
      Ma(bi[0], n);
      for (var o = 1; o < bi.length; o++) {
        var u = bi[o];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (Ar !== null && Ma(Ar, n), wi !== null && Ma(wi, n), hn !== null && Ma(hn, n), en.forEach(r), Oo.forEach(r), o = 0; o < Kn.length; o++) u = Kn[o], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < Kn.length && (o = Kn[0], o.blockedOn === null); ) ls(o), o.blockedOn === null && Kn.shift();
  }
  var Ri = Oe.ReactCurrentBatchConfig, ja = !0;
  function vu(n, r, o, u) {
    var f = Ht, m = Ri.transition;
    Ri.transition = null;
    try {
      Ht = 1, Lo(n, r, o, u);
    } finally {
      Ht = f, Ri.transition = m;
    }
  }
  function hu(n, r, o, u) {
    var f = Ht, m = Ri.transition;
    Ri.transition = null;
    try {
      Ht = 4, Lo(n, r, o, u);
    } finally {
      Ht = f, Ri.transition = m;
    }
  }
  function Lo(n, r, o, u) {
    if (ja) {
      var f = mu(n, r, o, u);
      if (f === null) jc(n, r, u, gl, o), La(n, u);
      else if (os(f, n, r, o, u)) u.stopPropagation();
      else if (La(n, u), r & 4 && -1 < Ur.indexOf(n)) {
        for (; f !== null; ) {
          var m = nt(f);
          if (m !== null && Ft(m), m = mu(n, r, o, u), m === null && jc(n, r, u, gl, o), m === f) break;
          f = m;
        }
        f !== null && u.stopPropagation();
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
  var ui = null, _ = null, L = null;
  function Y() {
    if (L) return L;
    var n, r = _, o = r.length, u, f = "value" in ui ? ui.value : ui.textContent, m = f.length;
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
  function lt() {
    return !1;
  }
  function De(n) {
    function r(o, u, f, m, C) {
      this._reactName = o, this._targetInst = f, this.type = u, this.nativeEvent = m, this.target = C, this.currentTarget = null;
      for (var O in n) n.hasOwnProperty(O) && (o = n[O], this[O] = o ? o(m) : m[O]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? _e : lt, this.isPropagationStopped = lt, this;
    }
    return ge(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = _e);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = _e);
    }, persist: function() {
    }, isPersistent: _e }), r;
  }
  var ct = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Nt = De(ct), It = ge({}, ct, { view: 0, detail: 0 }), fn = De(It), tn, kt, nn, Sn = ge({}, It, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: gd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== nn && (nn && n.type === "mousemove" ? (tn = n.screenX - nn.screenX, kt = n.screenY - nn.screenY) : kt = tn = 0, nn = n), tn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : kt;
  } }), Mo = De(Sn), us = ge({}, Sn, { dataTransfer: 0 }), Ji = De(us), ss = ge({}, It, { relatedTarget: 0 }), _l = De(ss), vd = ge({}, ct, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), xc = De(vd), hd = ge({}, ct, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), wv = De(hd), md = ge({}, ct, { data: 0 }), yd = De(md), Rv = {
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
  }, kv = {
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
  }, Ly = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Zi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Ly[n]) ? !!r[n] : !1;
  }
  function gd() {
    return Zi;
  }
  var _d = ge({}, It, { key: function(n) {
    if (n.key) {
      var r = Rv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = J(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? kv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: gd, charCode: function(n) {
    return n.type === "keypress" ? J(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? J(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Sd = De(_d), Cd = ge({}, Sn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Tv = De(Cd), bc = ge({}, It, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: gd }), Dv = De(bc), ea = ge({}, ct, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), eo = De(ea), Pn = ge({}, Sn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), to = De(Pn), Ed = [9, 13, 27, 32], gu = k && "CompositionEvent" in window, cs = null;
  k && "documentMode" in document && (cs = document.documentMode);
  var fs = k && "TextEvent" in window && !cs, Ov = k && (!gu || cs && 8 < cs && 11 >= cs), Nv = " ", wc = !1;
  function Lv(n, r) {
    switch (n) {
      case "keyup":
        return Ed.indexOf(r.keyCode) !== -1;
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
  function jv(n, r) {
    switch (n) {
      case "compositionend":
        return Mv(r);
      case "keypress":
        return r.which !== 32 ? null : (wc = !0, Nv);
      case "textInput":
        return n = r.data, n === Nv && wc ? null : n;
      default:
        return null;
    }
  }
  function My(n, r) {
    if (_u) return n === "compositionend" || !gu && Lv(n, r) ? (n = Y(), L = _ = ui = null, _u = !1, n) : null;
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
        return Ov && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var jy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Av(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!jy[n.type] : r === "textarea";
  }
  function xd(n, r, o, u) {
    Qi(u), r = ys(r, "onChange"), 0 < r.length && (o = new Nt("onChange", "change", null, o, u), n.push({ event: o, listeners: r }));
  }
  var ki = null, Sl = null;
  function Uv(n) {
    xl(n, 0);
  }
  function ds(n) {
    var r = ci(n);
    if (Nr(r)) return n;
  }
  function Ay(n, r) {
    if (n === "change") return r;
  }
  var zv = !1;
  if (k) {
    var bd;
    if (k) {
      var wd = "oninput" in document;
      if (!wd) {
        var Pv = document.createElement("div");
        Pv.setAttribute("oninput", "return;"), wd = typeof Pv.oninput == "function";
      }
      bd = wd;
    } else bd = !1;
    zv = bd && (!document.documentMode || 9 < document.documentMode);
  }
  function Fv() {
    ki && (ki.detachEvent("onpropertychange", Iv), Sl = ki = null);
  }
  function Iv(n) {
    if (n.propertyName === "value" && ds(Sl)) {
      var r = [];
      xd(r, Sl, n, Jt(n)), dl(Uv, r);
    }
  }
  function Uy(n, r, o) {
    n === "focusin" ? (Fv(), ki = r, Sl = o, ki.attachEvent("onpropertychange", Iv)) : n === "focusout" && Fv();
  }
  function Vv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return ds(Sl);
  }
  function zy(n, r) {
    if (n === "click") return ds(r);
  }
  function Hv(n, r) {
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
      var f = o[u];
      if (!R.call(r, f) || !si(n[f], r[f])) return !1;
    }
    return !0;
  }
  function $v(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Rc(n, r) {
    var o = $v(n);
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
      o = $v(o);
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
          var f = o.textContent.length, m = Math.min(u.start, f);
          u = u.end === void 0 ? m : Math.min(u.end, f), !n.extend && m > u && (f = u, u = m, m = f), f = Rc(o, m);
          var C = Rc(
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
  var Fy = k && "documentMode" in document && 11 >= document.documentMode, Cu = null, Rd = null, hs = null, kd = !1;
  function Td(n, r, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    kd || Cu == null || Cu !== kn(u) || (u = Cu, "selectionStart" in u && kc(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), hs && ps(hs, u) || (hs = u, u = ys(Rd, "onSelect"), 0 < u.length && (r = new Nt("onSelect", "select", null, r, o), n.push({ event: r, listeners: u }), r.target = Cu)));
  }
  function Tc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var Cl = { animationend: Tc("Animation", "AnimationEnd"), animationiteration: Tc("Animation", "AnimationIteration"), animationstart: Tc("Animation", "AnimationStart"), transitionend: Tc("Transition", "TransitionEnd") }, dr = {}, Dd = {};
  k && (Dd = document.createElement("div").style, "AnimationEvent" in window || (delete Cl.animationend.animation, delete Cl.animationiteration.animation, delete Cl.animationstart.animation), "TransitionEvent" in window || delete Cl.transitionend.transition);
  function Dc(n) {
    if (dr[n]) return dr[n];
    if (!Cl[n]) return n;
    var r = Cl[n], o;
    for (o in r) if (r.hasOwnProperty(o) && o in Dd) return dr[n] = r[o];
    return n;
  }
  var Bv = Dc("animationend"), qv = Dc("animationiteration"), Wv = Dc("animationstart"), Yv = Dc("transitionend"), Od = /* @__PURE__ */ new Map(), Oc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Aa(n, r) {
    Od.set(n, r), E(r, [n]);
  }
  for (var Nd = 0; Nd < Oc.length; Nd++) {
    var El = Oc[Nd], Iy = El.toLowerCase(), Vy = El[0].toUpperCase() + El.slice(1);
    Aa(Iy, "on" + Vy);
  }
  Aa(Bv, "onAnimationEnd"), Aa(qv, "onAnimationIteration"), Aa(Wv, "onAnimationStart"), Aa("dblclick", "onDoubleClick"), Aa("focusin", "onFocus"), Aa("focusout", "onBlur"), Aa(Yv, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), E("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), E("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), E("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), E("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ms = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ld = new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));
  function Nc(n, r, o) {
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
          var O = u[C], j = O.instance, Q = O.currentTarget;
          if (O = O.listener, j !== m && f.isPropagationStopped()) break e;
          Nc(f, O, Q), m = j;
        }
        else for (C = 0; C < u.length; C++) {
          if (O = u[C], j = O.instance, Q = O.currentTarget, O = O.listener, j !== m && f.isPropagationStopped()) break e;
          Nc(f, O, Q), m = j;
        }
      }
    }
    if (Ei) throw n = M, Ei = !1, M = null, n;
  }
  function Qt(n, r) {
    var o = r[Ss];
    o === void 0 && (o = r[Ss] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    o.has(u) || (Gv(r, n, 2, !1), o.add(u));
  }
  function Lc(n, r, o) {
    var u = 0;
    r && (u |= 4), Gv(o, n, u, r);
  }
  var Mc = "_reactListening" + Math.random().toString(36).slice(2);
  function Eu(n) {
    if (!n[Mc]) {
      n[Mc] = !0, S.forEach(function(o) {
        o !== "selectionchange" && (Ld.has(o) || Lc(o, !1, n), Lc(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Mc] || (r[Mc] = !0, Lc("selectionchange", !1, r));
    }
  }
  function Gv(n, r, o, u) {
    switch (yu(r)) {
      case 1:
        var f = vu;
        break;
      case 4:
        f = hu;
        break;
      default:
        f = Lo;
    }
    o = f.bind(null, r, o, n), f = void 0, !Mr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (f = !0), u ? f !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: f }) : n.addEventListener(r, o, !0) : f !== void 0 ? n.addEventListener(r, o, { passive: f }) : n.addEventListener(r, o, !1);
  }
  function jc(n, r, o, u, f) {
    var m = u;
    if ((r & 1) === 0 && (r & 2) === 0 && u !== null) e: for (; ; ) {
      if (u === null) return;
      var C = u.tag;
      if (C === 3 || C === 4) {
        var O = u.stateNode.containerInfo;
        if (O === f || O.nodeType === 8 && O.parentNode === f) break;
        if (C === 4) for (C = u.return; C !== null; ) {
          var j = C.tag;
          if ((j === 3 || j === 4) && (j = C.stateNode.containerInfo, j === f || j.nodeType === 8 && j.parentNode === f)) return;
          C = C.return;
        }
        for (; O !== null; ) {
          if (C = wl(O), C === null) return;
          if (j = C.tag, j === 5 || j === 6) {
            u = m = C;
            continue e;
          }
          O = O.parentNode;
        }
      }
      u = u.return;
    }
    dl(function() {
      var Q = m, pe = Jt(o), he = [];
      e: {
        var fe = Od.get(n);
        if (fe !== void 0) {
          var Pe = Nt, Ge = n;
          switch (n) {
            case "keypress":
              if (J(o) === 0) break e;
            case "keydown":
            case "keyup":
              Pe = Sd;
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
              Pe = Mo;
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
              Pe = Dv;
              break;
            case Bv:
            case qv:
            case Wv:
              Pe = xc;
              break;
            case Yv:
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
              Pe = wv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Pe = Tv;
          }
          var Xe = (r & 4) !== 0, jn = !Xe && n === "scroll", V = Xe ? fe !== null ? fe + "Capture" : null : fe;
          Xe = [];
          for (var U = Q, q; U !== null; ) {
            q = U;
            var ve = q.stateNode;
            if (q.tag === 5 && ve !== null && (q = ve, V !== null && (ve = Lr(U, V), ve != null && Xe.push(xu(U, ve, q)))), jn) break;
            U = U.return;
          }
          0 < Xe.length && (fe = new Pe(fe, Ge, null, o, pe), he.push({ event: fe, listeners: Xe }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (fe = n === "mouseover" || n === "pointerover", Pe = n === "mouseout" || n === "pointerout", fe && o !== sn && (Ge = o.relatedTarget || o.fromElement) && (wl(Ge) || Ge[no])) break e;
          if ((Pe || fe) && (fe = pe.window === pe ? pe : (fe = pe.ownerDocument) ? fe.defaultView || fe.parentWindow : window, Pe ? (Ge = o.relatedTarget || o.toElement, Pe = Q, Ge = Ge ? wl(Ge) : null, Ge !== null && (jn = Et(Ge), Ge !== jn || Ge.tag !== 5 && Ge.tag !== 6) && (Ge = null)) : (Pe = null, Ge = Q), Pe !== Ge)) {
            if (Xe = Mo, ve = "onMouseLeave", V = "onMouseEnter", U = "mouse", (n === "pointerout" || n === "pointerover") && (Xe = Tv, ve = "onPointerLeave", V = "onPointerEnter", U = "pointer"), jn = Pe == null ? fe : ci(Pe), q = Ge == null ? fe : ci(Ge), fe = new Xe(ve, U + "leave", Pe, o, pe), fe.target = jn, fe.relatedTarget = q, ve = null, wl(pe) === Q && (Xe = new Xe(V, U + "enter", Ge, o, pe), Xe.target = q, Xe.relatedTarget = jn, ve = Xe), jn = ve, Pe && Ge) t: {
              for (Xe = Pe, V = Ge, U = 0, q = Xe; q; q = Ao(q)) U++;
              for (q = 0, ve = V; ve; ve = Ao(ve)) q++;
              for (; 0 < U - q; ) Xe = Ao(Xe), U--;
              for (; 0 < q - U; ) V = Ao(V), q--;
              for (; U--; ) {
                if (Xe === V || V !== null && Xe === V.alternate) break t;
                Xe = Ao(Xe), V = Ao(V);
              }
              Xe = null;
            }
            else Xe = null;
            Pe !== null && Qv(he, fe, Pe, Xe, !1), Ge !== null && jn !== null && Qv(he, jn, Ge, Xe, !0);
          }
        }
        e: {
          if (fe = Q ? ci(Q) : window, Pe = fe.nodeName && fe.nodeName.toLowerCase(), Pe === "select" || Pe === "input" && fe.type === "file") var Qe = Ay;
          else if (Av(fe)) if (zv) Qe = Hv;
          else {
            Qe = Vv;
            var st = Uy;
          }
          else (Pe = fe.nodeName) && Pe.toLowerCase() === "input" && (fe.type === "checkbox" || fe.type === "radio") && (Qe = zy);
          if (Qe && (Qe = Qe(n, Q))) {
            xd(he, Qe, o, pe);
            break e;
          }
          st && st(n, fe, Q), n === "focusout" && (st = fe._wrapperState) && st.controlled && fe.type === "number" && ma(fe, "number", fe.value);
        }
        switch (st = Q ? ci(Q) : window, n) {
          case "focusin":
            (Av(st) || st.contentEditable === "true") && (Cu = st, Rd = Q, hs = null);
            break;
          case "focusout":
            hs = Rd = Cu = null;
            break;
          case "mousedown":
            kd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            kd = !1, Td(he, o, pe);
            break;
          case "selectionchange":
            if (Fy) break;
          case "keydown":
          case "keyup":
            Td(he, o, pe);
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
        else _u ? Lv(n, o) && (mt = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (mt = "onCompositionStart");
        mt && (Ov && o.locale !== "ko" && (_u || mt !== "onCompositionStart" ? mt === "onCompositionEnd" && _u && (ft = Y()) : (ui = pe, _ = "value" in ui ? ui.value : ui.textContent, _u = !0)), st = ys(Q, mt), 0 < st.length && (mt = new yd(mt, n, null, o, pe), he.push({ event: mt, listeners: st }), ft ? mt.data = ft : (ft = Mv(o), ft !== null && (mt.data = ft)))), (ft = fs ? jv(n, o) : My(n, o)) && (Q = ys(Q, "onBeforeInput"), 0 < Q.length && (pe = new yd("onBeforeInput", "beforeinput", null, o, pe), he.push({ event: pe, listeners: Q }), pe.data = ft));
      }
      xl(he, r);
    });
  }
  function xu(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function ys(n, r) {
    for (var o = r + "Capture", u = []; n !== null; ) {
      var f = n, m = f.stateNode;
      f.tag === 5 && m !== null && (f = m, m = Lr(n, o), m != null && u.unshift(xu(n, m, f)), m = Lr(n, r), m != null && u.push(xu(n, m, f))), n = n.return;
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
  function Qv(n, r, o, u, f) {
    for (var m = r._reactName, C = []; o !== null && o !== u; ) {
      var O = o, j = O.alternate, Q = O.stateNode;
      if (j !== null && j === u) break;
      O.tag === 5 && Q !== null && (O = Q, f ? (j = Lr(o, m), j != null && C.unshift(xu(o, j, O))) : f || (j = Lr(o, m), j != null && C.push(xu(o, j, O)))), o = o.return;
    }
    C.length !== 0 && n.push({ event: r, listeners: C });
  }
  var Kv = /\r\n?/g, Hy = /\u0000|\uFFFD/g;
  function Xv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Kv, `
`).replace(Hy, "");
  }
  function Ac(n, r, o) {
    if (r = Xv(r), Xv(n) !== r && o) throw Error(p(425));
  }
  function Uo() {
  }
  var gs = null, bl = null;
  function Uc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var zc = typeof setTimeout == "function" ? setTimeout : void 0, Md = typeof clearTimeout == "function" ? clearTimeout : void 0, Jv = typeof Promise == "function" ? Promise : void 0, bu = typeof queueMicrotask == "function" ? queueMicrotask : typeof Jv < "u" ? function(n) {
    return Jv.resolve(null).then(n).catch(Pc);
  } : zc;
  function Pc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function wu(n, r) {
    var o = r, u = 0;
    do {
      var f = o.nextSibling;
      if (n.removeChild(o), f && f.nodeType === 8) if (o = f.data, o === "/$") {
        if (u === 0) {
          n.removeChild(f), li(r);
          return;
        }
        u--;
      } else o !== "$" && o !== "$?" && o !== "$!" || u++;
      o = f;
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
  function Zv(n) {
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
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null) for (n = Zv(n); n !== null; ) {
          if (o = n[Di]) return o;
          n = Zv(n);
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
    throw Error(p(33));
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
    var f = {}, m;
    for (m in o) f[m] = r[m];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = f), f;
  }
  function Fn(n) {
    return n = n.childContextTypes, n != null;
  }
  function ku() {
    dn(Xn), dn(wn);
  }
  function eh(n, r, o) {
    if (wn.current !== kr) throw Error(p(168));
    et(wn, r), et(Xn, o);
  }
  function Cs(n, r, o) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return o;
    u = u.getChildContext();
    for (var f in u) if (!(f in r)) throw Error(p(108, Ue(n) || "Unknown", f));
    return ge({}, o, u);
  }
  function rr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || kr, ta = wn.current, et(wn, n), et(Xn, Xn.current), !0;
  }
  function Fc(n, r, o) {
    var u = n.stateNode;
    if (!u) throw Error(p(169));
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
      var n = 0, r = Ht;
      try {
        var o = Oi;
        for (Ht = 1; n < o.length; n++) {
          var u = o[n];
          do
            u = u(!0);
          while (u !== null);
        }
        Oi = null, Tu = !1;
      } catch (f) {
        throw Oi !== null && (Oi = Oi.slice(n + 1)), vn(ai, Ni), f;
      } finally {
        Ht = r, ro = !1;
      }
    }
    return null;
  }
  var Fo = [], Io = 0, Vo = null, ao = 0, In = [], Pa = 0, Sa = null, Li = 1, Mi = "";
  function Rl(n, r) {
    Fo[Io++] = ao, Fo[Io++] = Vo, Vo = n, ao = r;
  }
  function th(n, r, o) {
    In[Pa++] = Li, In[Pa++] = Mi, In[Pa++] = Sa, Sa = n;
    var u = Li;
    n = Mi;
    var f = 32 - jr(u) - 1;
    u &= ~(1 << f), o += 1;
    var m = 32 - jr(r) + f;
    if (30 < m) {
      var C = f - f % 5;
      m = (u & (1 << C) - 1).toString(32), u >>= C, f -= C, Li = 1 << 32 - jr(r) + f | o << f | u, Mi = m + n;
    } else Li = 1 << m | o << f | u, Mi = n;
  }
  function Vc(n) {
    n.return !== null && (Rl(n, 1), th(n, 1, 0));
  }
  function Hc(n) {
    for (; n === Vo; ) Vo = Fo[--Io], Fo[Io] = null, ao = Fo[--Io], Fo[Io] = null;
    for (; n === Sa; ) Sa = In[--Pa], In[Pa] = null, Mi = In[--Pa], In[Pa] = null, Li = In[--Pa], In[Pa] = null;
  }
  var ra = null, aa = null, yn = !1, Fa = null;
  function jd(n, r) {
    var o = Ba(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function nh(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ra = n, aa = Ti(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ra = n, aa = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = Sa !== null ? { id: Li, overflow: Mi } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = Ba(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, ra = n, aa = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ad(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Ud(n) {
    if (yn) {
      var r = aa;
      if (r) {
        var o = r;
        if (!nh(n, r)) {
          if (Ad(n)) throw Error(p(418));
          r = Ti(o.nextSibling);
          var u = ra;
          r && nh(n, r) ? jd(u, o) : (n.flags = n.flags & -4097 | 2, yn = !1, ra = n);
        }
      } else {
        if (Ad(n)) throw Error(p(418));
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
      if (Ad(n)) throw Es(), Error(p(418));
      for (; r; ) jd(n, r), r = Ti(r.nextSibling);
    }
    if (Jn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(p(317));
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
  var By = Oe.ReactCurrentBatchConfig;
  function kl(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1) throw Error(p(309));
          var u = o.stateNode;
        }
        if (!u) throw Error(p(147, n));
        var f = u, m = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(C) {
          var O = f.refs;
          C === null ? delete O[m] : O[m] = C;
        }, r._stringRef = m, r);
      }
      if (typeof n != "string") throw Error(p(284));
      if (!o._owner) throw Error(p(290, n));
    }
    return n;
  }
  function Bc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(p(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function rh(n) {
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
    function f(V, U) {
      return V = Ko(V, U), V.index = 0, V.sibling = null, V;
    }
    function m(V, U, q) {
      return V.index = q, n ? (q = V.alternate, q !== null ? (q = q.index, q < U ? (V.flags |= 2, U) : q) : (V.flags |= 2, U)) : (V.flags |= 1048576, U);
    }
    function C(V) {
      return n && V.alternate === null && (V.flags |= 2), V;
    }
    function O(V, U, q, ve) {
      return U === null || U.tag !== 6 ? (U = pp(q, V.mode, ve), U.return = V, U) : (U = f(U, q), U.return = V, U);
    }
    function j(V, U, q, ve) {
      var Qe = q.type;
      return Qe === Ne ? pe(V, U, q.props.children, ve, q.key) : U !== null && (U.elementType === Qe || typeof Qe == "object" && Qe !== null && Qe.$$typeof === ke && rh(Qe) === U.type) ? (ve = f(U, q.props), ve.ref = kl(V, U, q), ve.return = V, ve) : (ve = Js(q.type, q.key, q.props, null, V.mode, ve), ve.ref = kl(V, U, q), ve.return = V, ve);
    }
    function Q(V, U, q, ve) {
      return U === null || U.tag !== 4 || U.stateNode.containerInfo !== q.containerInfo || U.stateNode.implementation !== q.implementation ? (U = bf(q, V.mode, ve), U.return = V, U) : (U = f(U, q.children || []), U.return = V, U);
    }
    function pe(V, U, q, ve, Qe) {
      return U === null || U.tag !== 7 ? (U = fo(q, V.mode, ve, Qe), U.return = V, U) : (U = f(U, q), U.return = V, U);
    }
    function he(V, U, q) {
      if (typeof U == "string" && U !== "" || typeof U == "number") return U = pp("" + U, V.mode, q), U.return = V, U;
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case ye:
            return q = Js(U.type, U.key, U.props, null, V.mode, q), q.ref = kl(V, null, U), q.return = V, q;
          case Re:
            return U = bf(U, V.mode, q), U.return = V, U;
          case ke:
            var ve = U._init;
            return he(V, ve(U._payload), q);
        }
        if (tr(U) || Le(U)) return U = fo(U, V.mode, q, null), U.return = V, U;
        Bc(V, U);
      }
      return null;
    }
    function fe(V, U, q, ve) {
      var Qe = U !== null ? U.key : null;
      if (typeof q == "string" && q !== "" || typeof q == "number") return Qe !== null ? null : O(V, U, "" + q, ve);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case ye:
            return q.key === Qe ? j(V, U, q, ve) : null;
          case Re:
            return q.key === Qe ? Q(V, U, q, ve) : null;
          case ke:
            return Qe = q._init, fe(
              V,
              U,
              Qe(q._payload),
              ve
            );
        }
        if (tr(q) || Le(q)) return Qe !== null ? null : pe(V, U, q, ve, null);
        Bc(V, q);
      }
      return null;
    }
    function Pe(V, U, q, ve, Qe) {
      if (typeof ve == "string" && ve !== "" || typeof ve == "number") return V = V.get(q) || null, O(U, V, "" + ve, Qe);
      if (typeof ve == "object" && ve !== null) {
        switch (ve.$$typeof) {
          case ye:
            return V = V.get(ve.key === null ? q : ve.key) || null, j(U, V, ve, Qe);
          case Re:
            return V = V.get(ve.key === null ? q : ve.key) || null, Q(U, V, ve, Qe);
          case ke:
            var st = ve._init;
            return Pe(V, U, q, st(ve._payload), Qe);
        }
        if (tr(ve) || Le(ve)) return V = V.get(q) || null, pe(U, V, ve, Qe, null);
        Bc(U, ve);
      }
      return null;
    }
    function Ge(V, U, q, ve) {
      for (var Qe = null, st = null, ft = U, mt = U = 0, or = null; ft !== null && mt < q.length; mt++) {
        ft.index > mt ? (or = ft, ft = null) : or = ft.sibling;
        var qt = fe(V, ft, q[mt], ve);
        if (qt === null) {
          ft === null && (ft = or);
          break;
        }
        n && ft && qt.alternate === null && r(V, ft), U = m(qt, U, mt), st === null ? Qe = qt : st.sibling = qt, st = qt, ft = or;
      }
      if (mt === q.length) return o(V, ft), yn && Rl(V, mt), Qe;
      if (ft === null) {
        for (; mt < q.length; mt++) ft = he(V, q[mt], ve), ft !== null && (U = m(ft, U, mt), st === null ? Qe = ft : st.sibling = ft, st = ft);
        return yn && Rl(V, mt), Qe;
      }
      for (ft = u(V, ft); mt < q.length; mt++) or = Pe(ft, V, mt, q[mt], ve), or !== null && (n && or.alternate !== null && ft.delete(or.key === null ? mt : or.key), U = m(or, U, mt), st === null ? Qe = or : st.sibling = or, st = or);
      return n && ft.forEach(function(Zo) {
        return r(V, Zo);
      }), yn && Rl(V, mt), Qe;
    }
    function Xe(V, U, q, ve) {
      var Qe = Le(q);
      if (typeof Qe != "function") throw Error(p(150));
      if (q = Qe.call(q), q == null) throw Error(p(151));
      for (var st = Qe = null, ft = U, mt = U = 0, or = null, qt = q.next(); ft !== null && !qt.done; mt++, qt = q.next()) {
        ft.index > mt ? (or = ft, ft = null) : or = ft.sibling;
        var Zo = fe(V, ft, qt.value, ve);
        if (Zo === null) {
          ft === null && (ft = or);
          break;
        }
        n && ft && Zo.alternate === null && r(V, ft), U = m(Zo, U, mt), st === null ? Qe = Zo : st.sibling = Zo, st = Zo, ft = or;
      }
      if (qt.done) return o(
        V,
        ft
      ), yn && Rl(V, mt), Qe;
      if (ft === null) {
        for (; !qt.done; mt++, qt = q.next()) qt = he(V, qt.value, ve), qt !== null && (U = m(qt, U, mt), st === null ? Qe = qt : st.sibling = qt, st = qt);
        return yn && Rl(V, mt), Qe;
      }
      for (ft = u(V, ft); !qt.done; mt++, qt = q.next()) qt = Pe(ft, V, mt, qt.value, ve), qt !== null && (n && qt.alternate !== null && ft.delete(qt.key === null ? mt : qt.key), U = m(qt, U, mt), st === null ? Qe = qt : st.sibling = qt, st = qt);
      return n && ft.forEach(function(Fh) {
        return r(V, Fh);
      }), yn && Rl(V, mt), Qe;
    }
    function jn(V, U, q, ve) {
      if (typeof q == "object" && q !== null && q.type === Ne && q.key === null && (q = q.props.children), typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case ye:
            e: {
              for (var Qe = q.key, st = U; st !== null; ) {
                if (st.key === Qe) {
                  if (Qe = q.type, Qe === Ne) {
                    if (st.tag === 7) {
                      o(V, st.sibling), U = f(st, q.props.children), U.return = V, V = U;
                      break e;
                    }
                  } else if (st.elementType === Qe || typeof Qe == "object" && Qe !== null && Qe.$$typeof === ke && rh(Qe) === st.type) {
                    o(V, st.sibling), U = f(st, q.props), U.ref = kl(V, st, q), U.return = V, V = U;
                    break e;
                  }
                  o(V, st);
                  break;
                } else r(V, st);
                st = st.sibling;
              }
              q.type === Ne ? (U = fo(q.props.children, V.mode, ve, q.key), U.return = V, V = U) : (ve = Js(q.type, q.key, q.props, null, V.mode, ve), ve.ref = kl(V, U, q), ve.return = V, V = ve);
            }
            return C(V);
          case Re:
            e: {
              for (st = q.key; U !== null; ) {
                if (U.key === st) if (U.tag === 4 && U.stateNode.containerInfo === q.containerInfo && U.stateNode.implementation === q.implementation) {
                  o(V, U.sibling), U = f(U, q.children || []), U.return = V, V = U;
                  break e;
                } else {
                  o(V, U);
                  break;
                }
                else r(V, U);
                U = U.sibling;
              }
              U = bf(q, V.mode, ve), U.return = V, V = U;
            }
            return C(V);
          case ke:
            return st = q._init, jn(V, U, st(q._payload), ve);
        }
        if (tr(q)) return Ge(V, U, q, ve);
        if (Le(q)) return Xe(V, U, q, ve);
        Bc(V, q);
      }
      return typeof q == "string" && q !== "" || typeof q == "number" ? (q = "" + q, U !== null && U.tag === 6 ? (o(V, U.sibling), U = f(U, q), U.return = V, V = U) : (o(V, U), U = pp(q, V.mode, ve), U.return = V, V = U), C(V)) : o(V, U);
    }
    return jn;
  }
  var On = Tl(!0), je = Tl(!1), Ca = za(null), ia = null, Du = null, zd = null;
  function Pd() {
    zd = Du = ia = null;
  }
  function Fd(n) {
    var r = Ca.current;
    dn(Ca), n._currentValue = r;
  }
  function Id(n, r, o) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === o) break;
      n = n.return;
    }
  }
  function En(n, r) {
    ia = n, zd = Du = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (Hn = !0), n.firstContext = null);
  }
  function Ia(n) {
    var r = n._currentValue;
    if (zd !== n) if (n = { context: n, memoizedValue: r, next: null }, Du === null) {
      if (ia === null) throw Error(p(308));
      Du = n, ia.dependencies = { lanes: 0, firstContext: n };
    } else Du = Du.next = n;
    return r;
  }
  var Dl = null;
  function Vd(n) {
    Dl === null ? Dl = [n] : Dl.push(n);
  }
  function Hd(n, r, o, u) {
    var f = r.interleaved;
    return f === null ? (o.next = o, Vd(r)) : (o.next = f.next, f.next = o), r.interleaved = o, Ea(n, u);
  }
  function Ea(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; ) n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var xa = !1;
  function $d(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ah(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function oo(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function $o(n, r, o) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (At & 2) !== 0) {
      var f = u.pending;
      return f === null ? r.next = r : (r.next = f.next, f.next = r), u.pending = r, Ea(n, o);
    }
    return f = u.interleaved, f === null ? (r.next = r, Vd(u)) : (r.next = f.next, f.next = r), u.interleaved = r, Ea(n, o);
  }
  function qc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Xi(n, o);
    }
  }
  function ih(n, r) {
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
  function xs(n, r, o, u) {
    var f = n.updateQueue;
    xa = !1;
    var m = f.firstBaseUpdate, C = f.lastBaseUpdate, O = f.shared.pending;
    if (O !== null) {
      f.shared.pending = null;
      var j = O, Q = j.next;
      j.next = null, C === null ? m = Q : C.next = Q, C = j;
      var pe = n.alternate;
      pe !== null && (pe = pe.updateQueue, O = pe.lastBaseUpdate, O !== C && (O === null ? pe.firstBaseUpdate = Q : O.next = Q, pe.lastBaseUpdate = j));
    }
    if (m !== null) {
      var he = f.baseState;
      C = 0, pe = Q = j = null, O = m;
      do {
        var fe = O.lane, Pe = O.eventTime;
        if ((u & fe) === fe) {
          pe !== null && (pe = pe.next = {
            eventTime: Pe,
            lane: 0,
            tag: O.tag,
            payload: O.payload,
            callback: O.callback,
            next: null
          });
          e: {
            var Ge = n, Xe = O;
            switch (fe = r, Pe = o, Xe.tag) {
              case 1:
                if (Ge = Xe.payload, typeof Ge == "function") {
                  he = Ge.call(Pe, he, fe);
                  break e;
                }
                he = Ge;
                break e;
              case 3:
                Ge.flags = Ge.flags & -65537 | 128;
              case 0:
                if (Ge = Xe.payload, fe = typeof Ge == "function" ? Ge.call(Pe, he, fe) : Ge, fe == null) break e;
                he = ge({}, he, fe);
                break e;
              case 2:
                xa = !0;
            }
          }
          O.callback !== null && O.lane !== 0 && (n.flags |= 64, fe = f.effects, fe === null ? f.effects = [O] : fe.push(O));
        } else Pe = { eventTime: Pe, lane: fe, tag: O.tag, payload: O.payload, callback: O.callback, next: null }, pe === null ? (Q = pe = Pe, j = he) : pe = pe.next = Pe, C |= fe;
        if (O = O.next, O === null) {
          if (O = f.shared.pending, O === null) break;
          fe = O, O = fe.next, fe.next = null, f.lastBaseUpdate = fe, f.shared.pending = null;
        }
      } while (!0);
      if (pe === null && (j = he), f.baseState = j, f.firstBaseUpdate = Q, f.lastBaseUpdate = pe, r = f.shared.interleaved, r !== null) {
        f = r;
        do
          C |= f.lane, f = f.next;
        while (f !== r);
      } else m === null && (f.shared.lanes = 0);
      Pi |= C, n.lanes = C, n.memoizedState = he;
    }
  }
  function Bd(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], f = u.callback;
      if (f !== null) {
        if (u.callback = null, u = o, typeof f != "function") throw Error(p(191, f));
        f.call(u);
      }
    }
  }
  var bs = {}, ji = za(bs), ws = za(bs), Rs = za(bs);
  function Ol(n) {
    if (n === bs) throw Error(p(174));
    return n;
  }
  function qd(n, r) {
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
  function oh(n) {
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
  var Dt = Oe.ReactCurrentDispatcher, $t = Oe.ReactCurrentBatchConfig, rn = 0, Bt = null, Vn = null, ar = null, Gc = !1, Ts = !1, Ll = 0, se = 0;
  function Vt() {
    throw Error(p(321));
  }
  function pt(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++) if (!si(n[o], r[o])) return !1;
    return !0;
  }
  function Bo(n, r, o, u, f, m) {
    if (rn = m, Bt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Dt.current = n === null || n.memoizedState === null ? cf : js, n = o(u, f), Ts) {
      m = 0;
      do {
        if (Ts = !1, Ll = 0, 25 <= m) throw Error(p(301));
        m += 1, ar = Vn = null, r.updateQueue = null, Dt.current = ff, n = o(u, f);
      } while (Ts);
    }
    if (Dt.current = zl, r = Vn !== null && Vn.next !== null, rn = 0, ar = Vn = Bt = null, Gc = !1, r) throw Error(p(300));
    return n;
  }
  function fi() {
    var n = Ll !== 0;
    return Ll = 0, n;
  }
  function Tr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ar === null ? Bt.memoizedState = ar = n : ar = ar.next = n, ar;
  }
  function Nn() {
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
  function lo(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function qo(n) {
    var r = Nn(), o = r.queue;
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
      var O = C = null, j = null, Q = m;
      do {
        var pe = Q.lane;
        if ((rn & pe) === pe) j !== null && (j = j.next = { lane: 0, action: Q.action, hasEagerState: Q.hasEagerState, eagerState: Q.eagerState, next: null }), u = Q.hasEagerState ? Q.eagerState : n(u, Q.action);
        else {
          var he = {
            lane: pe,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null
          };
          j === null ? (O = j = he, C = u) : j = j.next = he, Bt.lanes |= pe, Pi |= pe;
        }
        Q = Q.next;
      } while (Q !== null && Q !== m);
      j === null ? C = u : j.next = O, si(u, r.memoizedState) || (Hn = !0), r.memoizedState = u, r.baseState = C, r.baseQueue = j, o.lastRenderedState = u;
    }
    if (n = o.interleaved, n !== null) {
      f = n;
      do
        m = f.lane, Bt.lanes |= m, Pi |= m, f = f.next;
      while (f !== n);
    } else f === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function Ml(n) {
    var r = Nn(), o = r.queue;
    if (o === null) throw Error(p(311));
    o.lastRenderedReducer = n;
    var u = o.dispatch, f = o.pending, m = r.memoizedState;
    if (f !== null) {
      o.pending = null;
      var C = f = f.next;
      do
        m = n(m, C.action), C = C.next;
      while (C !== f);
      si(m, r.memoizedState) || (Hn = !0), r.memoizedState = m, r.baseQueue === null && (r.baseState = m), o.lastRenderedState = m;
    }
    return [m, u];
  }
  function Qc() {
  }
  function Kc(n, r) {
    var o = Bt, u = Nn(), f = r(), m = !si(u.memoizedState, f);
    if (m && (u.memoizedState = f, Hn = !0), u = u.queue, Ds(Zc.bind(null, o, u, n), [n]), u.getSnapshot !== r || m || ar !== null && ar.memoizedState.tag & 1) {
      if (o.flags |= 2048, jl(9, Jc.bind(null, o, u, f, r), void 0, null), Zn === null) throw Error(p(349));
      (rn & 30) !== 0 || Xc(o, r, f);
    }
    return f;
  }
  function Xc(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = Bt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Bt.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
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
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: lo, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ul.bind(null, Bt, n), [r.memoizedState, n];
  }
  function jl(n, r, o, u) {
    return n = { tag: n, create: r, destroy: o, deps: u, next: null }, r = Bt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Bt.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (u = o.next, o.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function rf() {
    return Nn().memoizedState;
  }
  function Ou(n, r, o, u) {
    var f = Tr();
    Bt.flags |= n, f.memoizedState = jl(1 | r, o, void 0, u === void 0 ? null : u);
  }
  function Nu(n, r, o, u) {
    var f = Nn();
    u = u === void 0 ? null : u;
    var m = void 0;
    if (Vn !== null) {
      var C = Vn.memoizedState;
      if (m = C.destroy, u !== null && pt(u, C.deps)) {
        f.memoizedState = jl(r, o, m, u);
        return;
      }
    }
    Bt.flags |= n, f.memoizedState = jl(1 | r, o, m, u);
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
  function Wd(n, r, o) {
    return (rn & 21) === 0 ? (n.baseState && (n.baseState = !1, Hn = !0), n.memoizedState = o) : (si(o, r) || (o = cu(), Bt.lanes |= o, Pi |= o, n.baseState = !0), r);
  }
  function Ls(n, r) {
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
  function Yd() {
    return Nn().memoizedState;
  }
  function Ms(n, r, o) {
    var u = Fi(n);
    if (o = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null }, oa(n)) lh(r, o);
    else if (o = Hd(n, r, o, u), o !== null) {
      var f = qn();
      Ir(o, n, u, f), ln(o, r, u);
    }
  }
  function Ul(n, r, o) {
    var u = Fi(n), f = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (oa(n)) lh(r, f);
    else {
      var m = n.alternate;
      if (n.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer, m !== null)) try {
        var C = r.lastRenderedState, O = m(C, o);
        if (f.hasEagerState = !0, f.eagerState = O, si(O, C)) {
          var j = r.interleaved;
          j === null ? (f.next = f, Vd(r)) : (f.next = j.next, j.next = f), r.interleaved = f;
          return;
        }
      } catch {
      }
      o = Hd(n, r, f, u), o !== null && (f = qn(), Ir(o, n, u, f), ln(o, r, u));
    }
  }
  function oa(n) {
    var r = n.alternate;
    return n === Bt || r !== null && r === Bt;
  }
  function lh(n, r) {
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
  var zl = { readContext: Ia, useCallback: Vt, useContext: Vt, useEffect: Vt, useImperativeHandle: Vt, useInsertionEffect: Vt, useLayoutEffect: Vt, useMemo: Vt, useReducer: Vt, useRef: Vt, useState: Vt, useDebugValue: Vt, useDeferredValue: Vt, useTransition: Vt, useMutableSource: Vt, useSyncExternalStore: Vt, useId: Vt, unstable_isNewReconciler: !1 }, cf = { readContext: Ia, useCallback: function(n, r) {
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
    return r = o !== void 0 ? o(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = Ms.bind(null, Bt, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = Tr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: nf, useDebugValue: Ns, useDeferredValue: function(n) {
    return Tr().memoizedState = n;
  }, useTransition: function() {
    var n = nf(!1), r = n[0];
    return n = Ls.bind(null, n[1]), Tr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var u = Bt, f = Tr();
    if (yn) {
      if (o === void 0) throw Error(p(407));
      o = o();
    } else {
      if (o = r(), Zn === null) throw Error(p(349));
      (rn & 30) !== 0 || Xc(u, r, o);
    }
    f.memoizedState = o;
    var m = { value: o, getSnapshot: r };
    return f.queue = m, af(Zc.bind(
      null,
      u,
      m,
      n
    ), [n]), u.flags |= 2048, jl(9, Jc.bind(null, u, m, o, r), void 0, null), o;
  }, useId: function() {
    var n = Tr(), r = Zn.identifierPrefix;
    if (yn) {
      var o = Mi, u = Li;
      o = (u & ~(1 << 32 - jr(u) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = Ll++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else o = se++, r = ":" + r + "r" + o.toString(32) + ":";
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
      return Wd(r, Vn.memoizedState, n);
    },
    useTransition: function() {
      var n = qo(lo)[0], r = Nn().memoizedState;
      return [n, r];
    },
    useMutableSource: Qc,
    useSyncExternalStore: Kc,
    useId: Yd,
    unstable_isNewReconciler: !1
  }, ff = { readContext: Ia, useCallback: uf, useContext: Ia, useEffect: Ds, useImperativeHandle: lf, useInsertionEffect: of, useLayoutEffect: Os, useMemo: sf, useReducer: Ml, useRef: rf, useState: function() {
    return Ml(lo);
  }, useDebugValue: Ns, useDeferredValue: function(n) {
    var r = Nn();
    return Vn === null ? r.memoizedState = n : Wd(r, Vn.memoizedState, n);
  }, useTransition: function() {
    var n = Ml(lo)[0], r = Nn().memoizedState;
    return [n, r];
  }, useMutableSource: Qc, useSyncExternalStore: Kc, useId: Yd, unstable_isNewReconciler: !1 };
  function di(n, r) {
    if (n && n.defaultProps) {
      r = ge({}, r), n = n.defaultProps;
      for (var o in n) r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  function Gd(n, r, o, u) {
    r = n.memoizedState, o = o(u, r), o = o == null ? r : ge({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var df = { isMounted: function(n) {
    return (n = n._reactInternals) ? Et(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var u = qn(), f = Fi(n), m = oo(u, f);
    m.payload = r, o != null && (m.callback = o), r = $o(n, m, f), r !== null && (Ir(r, n, f, u), qc(r, n, f));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var u = qn(), f = Fi(n), m = oo(u, f);
    m.tag = 1, m.payload = r, o != null && (m.callback = o), r = $o(n, m, f), r !== null && (Ir(r, n, f, u), qc(r, n, f));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = qn(), u = Fi(n), f = oo(o, u);
    f.tag = 2, r != null && (f.callback = r), r = $o(n, f, u), r !== null && (Ir(r, n, u, o), qc(r, n, u));
  } };
  function uh(n, r, o, u, f, m, C) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, m, C) : r.prototype && r.prototype.isPureReactComponent ? !ps(o, u) || !ps(f, m) : !0;
  }
  function pf(n, r, o) {
    var u = !1, f = kr, m = r.contextType;
    return typeof m == "object" && m !== null ? m = Ia(m) : (f = Fn(r) ? ta : wn.current, u = r.contextTypes, m = (u = u != null) ? na(n, f) : kr), r = new r(o, m), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = df, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = f, n.__reactInternalMemoizedMaskedChildContext = m), r;
  }
  function sh(n, r, o, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, u), r.state !== n && df.enqueueReplaceState(r, r.state, null);
  }
  function As(n, r, o, u) {
    var f = n.stateNode;
    f.props = o, f.state = n.memoizedState, f.refs = {}, $d(n);
    var m = r.contextType;
    typeof m == "object" && m !== null ? f.context = Ia(m) : (m = Fn(r) ? ta : wn.current, f.context = na(n, m)), f.state = n.memoizedState, m = r.getDerivedStateFromProps, typeof m == "function" && (Gd(n, r, m, o), f.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (r = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), r !== f.state && df.enqueueReplaceState(f, f.state, null), xs(n, o, f, u), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Pl(n, r) {
    try {
      var o = "", u = r;
      do
        o += gt(u), u = u.return;
      while (u);
      var f = o;
    } catch (m) {
      f = `
Error generating stack: ` + m.message + `
` + m.stack;
    }
    return { value: n, source: r, stack: f, digest: null };
  }
  function Qd(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function Kd(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var vf = typeof WeakMap == "function" ? WeakMap : Map;
  function ch(n, r, o) {
    o = oo(-1, o), o.tag = 3, o.payload = { element: null };
    var u = r.value;
    return o.callback = function() {
      zu || (zu = !0, Vl = u), Kd(n, r);
    }, o;
  }
  function Xd(n, r, o) {
    o = oo(-1, o), o.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var f = r.value;
      o.payload = function() {
        return u(f);
      }, o.callback = function() {
        Kd(n, r);
      };
    }
    var m = n.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (o.callback = function() {
      Kd(n, r), typeof u != "function" && (Go === null ? Go = /* @__PURE__ */ new Set([this]) : Go.add(this));
      var C = r.stack;
      this.componentDidCatch(r.value, { componentStack: C !== null ? C : "" });
    }), o;
  }
  function Jd(n, r, o) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new vf();
      var f = /* @__PURE__ */ new Set();
      u.set(r, f);
    } else f = u.get(r), f === void 0 && (f = /* @__PURE__ */ new Set(), u.set(r, f));
    f.has(o) || (f.add(o), n = Xy.bind(null, n, r, o), r.then(n, n));
  }
  function fh(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Wo(n, r, o, u, f) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = oo(-1, 1), r.tag = 2, $o(o, r, 1))), o.lanes |= 1), n) : (n.flags |= 65536, n.lanes = f, n);
  }
  var Us = Oe.ReactCurrentOwner, Hn = !1;
  function pr(n, r, o, u) {
    r.child = n === null ? je(r, null, o, u) : On(r, n.child, o, u);
  }
  function la(n, r, o, u, f) {
    o = o.render;
    var m = r.ref;
    return En(r, f), u = Bo(n, r, o, u, m, f), o = fi(), n !== null && !Hn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, Ha(n, r, f)) : (yn && o && Vc(r), r.flags |= 1, pr(n, r, u, f), r.child);
  }
  function Fl(n, r, o, u, f) {
    if (n === null) {
      var m = o.type;
      return typeof m == "function" && !dp(m) && m.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = m, bt(n, r, m, u, f)) : (n = Js(o.type, null, u, r, r.mode, f), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (m = n.child, (n.lanes & f) === 0) {
      var C = m.memoizedProps;
      if (o = o.compare, o = o !== null ? o : ps, o(C, u) && n.ref === r.ref) return Ha(n, r, f);
    }
    return r.flags |= 1, n = Ko(m, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function bt(n, r, o, u, f) {
    if (n !== null) {
      var m = n.memoizedProps;
      if (ps(m, u) && n.ref === r.ref) if (Hn = !1, r.pendingProps = u = m, (n.lanes & f) !== 0) (n.flags & 131072) !== 0 && (Hn = !0);
      else return r.lanes = n.lanes, Ha(n, r, f);
    }
    return dh(n, r, o, u, f);
  }
  function zs(n, r, o) {
    var u = r.pendingProps, f = u.children, m = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, et(ju, ba), ba |= o;
    else {
      if ((o & 1073741824) === 0) return n = m !== null ? m.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, et(ju, ba), ba |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = m !== null ? m.baseLanes : o, et(ju, ba), ba |= u;
    }
    else m !== null ? (u = m.baseLanes | o, r.memoizedState = null) : u = o, et(ju, ba), ba |= u;
    return pr(n, r, f, o), r.child;
  }
  function Zd(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function dh(n, r, o, u, f) {
    var m = Fn(o) ? ta : wn.current;
    return m = na(r, m), En(r, f), o = Bo(n, r, o, u, m, f), u = fi(), n !== null && !Hn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, Ha(n, r, f)) : (yn && u && Vc(r), r.flags |= 1, pr(n, r, o, f), r.child);
  }
  function ph(n, r, o, u, f) {
    if (Fn(o)) {
      var m = !0;
      rr(r);
    } else m = !1;
    if (En(r, f), r.stateNode === null) Va(n, r), pf(r, o, u), As(r, o, u, f), u = !0;
    else if (n === null) {
      var C = r.stateNode, O = r.memoizedProps;
      C.props = O;
      var j = C.context, Q = o.contextType;
      typeof Q == "object" && Q !== null ? Q = Ia(Q) : (Q = Fn(o) ? ta : wn.current, Q = na(r, Q));
      var pe = o.getDerivedStateFromProps, he = typeof pe == "function" || typeof C.getSnapshotBeforeUpdate == "function";
      he || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (O !== u || j !== Q) && sh(r, C, u, Q), xa = !1;
      var fe = r.memoizedState;
      C.state = fe, xs(r, u, C, f), j = r.memoizedState, O !== u || fe !== j || Xn.current || xa ? (typeof pe == "function" && (Gd(r, o, pe, u), j = r.memoizedState), (O = xa || uh(r, o, O, u, fe, j, Q)) ? (he || typeof C.UNSAFE_componentWillMount != "function" && typeof C.componentWillMount != "function" || (typeof C.componentWillMount == "function" && C.componentWillMount(), typeof C.UNSAFE_componentWillMount == "function" && C.UNSAFE_componentWillMount()), typeof C.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = j), C.props = u, C.state = j, C.context = Q, u = O) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      C = r.stateNode, ah(n, r), O = r.memoizedProps, Q = r.type === r.elementType ? O : di(r.type, O), C.props = Q, he = r.pendingProps, fe = C.context, j = o.contextType, typeof j == "object" && j !== null ? j = Ia(j) : (j = Fn(o) ? ta : wn.current, j = na(r, j));
      var Pe = o.getDerivedStateFromProps;
      (pe = typeof Pe == "function" || typeof C.getSnapshotBeforeUpdate == "function") || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (O !== he || fe !== j) && sh(r, C, u, j), xa = !1, fe = r.memoizedState, C.state = fe, xs(r, u, C, f);
      var Ge = r.memoizedState;
      O !== he || fe !== Ge || Xn.current || xa ? (typeof Pe == "function" && (Gd(r, o, Pe, u), Ge = r.memoizedState), (Q = xa || uh(r, o, Q, u, fe, Ge, j) || !1) ? (pe || typeof C.UNSAFE_componentWillUpdate != "function" && typeof C.componentWillUpdate != "function" || (typeof C.componentWillUpdate == "function" && C.componentWillUpdate(u, Ge, j), typeof C.UNSAFE_componentWillUpdate == "function" && C.UNSAFE_componentWillUpdate(u, Ge, j)), typeof C.componentDidUpdate == "function" && (r.flags |= 4), typeof C.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof C.componentDidUpdate != "function" || O === n.memoizedProps && fe === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || O === n.memoizedProps && fe === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Ge), C.props = u, C.state = Ge, C.context = j, u = Q) : (typeof C.componentDidUpdate != "function" || O === n.memoizedProps && fe === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || O === n.memoizedProps && fe === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return Ps(n, r, o, u, m, f);
  }
  function Ps(n, r, o, u, f, m) {
    Zd(n, r);
    var C = (r.flags & 128) !== 0;
    if (!u && !C) return f && Fc(r, o, !1), Ha(n, r, m);
    u = r.stateNode, Us.current = r;
    var O = C && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && C ? (r.child = On(r, n.child, null, m), r.child = On(r, null, O, m)) : pr(n, r, O, m), r.memoizedState = u.state, f && Fc(r, o, !0), r.child;
  }
  function Lu(n) {
    var r = n.stateNode;
    r.pendingContext ? eh(n, r.pendingContext, r.pendingContext !== r.context) : r.context && eh(n, r.context, !1), qd(n, r.containerInfo);
  }
  function vh(n, r, o, u, f) {
    return Ho(), io(f), r.flags |= 256, pr(n, r, o, u), r.child;
  }
  var hf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ep(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function mf(n, r, o) {
    var u = r.pendingProps, f = xn.current, m = !1, C = (r.flags & 128) !== 0, O;
    if ((O = C) || (O = n !== null && n.memoizedState === null ? !1 : (f & 2) !== 0), O ? (m = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (f |= 1), et(xn, f & 1), n === null)
      return Ud(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (C = u.children, n = u.fallback, m ? (u = r.mode, m = r.child, C = { mode: "hidden", children: C }, (u & 1) === 0 && m !== null ? (m.childLanes = 0, m.pendingProps = C) : m = Xo(C, u, 0, null), n = fo(n, u, o, null), m.return = r, n.return = r, m.sibling = n, r.child = m, r.child.memoizedState = ep(o), r.memoizedState = hf, n) : tp(r, C));
    if (f = n.memoizedState, f !== null && (O = f.dehydrated, O !== null)) return hh(n, r, C, u, O, f, o);
    if (m) {
      m = u.fallback, C = r.mode, f = n.child, O = f.sibling;
      var j = { mode: "hidden", children: u.children };
      return (C & 1) === 0 && r.child !== f ? (u = r.child, u.childLanes = 0, u.pendingProps = j, r.deletions = null) : (u = Ko(f, j), u.subtreeFlags = f.subtreeFlags & 14680064), O !== null ? m = Ko(O, m) : (m = fo(m, C, o, null), m.flags |= 2), m.return = r, u.return = r, u.sibling = m, r.child = u, u = m, m = r.child, C = n.child.memoizedState, C = C === null ? ep(o) : { baseLanes: C.baseLanes | o, cachePool: null, transitions: C.transitions }, m.memoizedState = C, m.childLanes = n.childLanes & ~o, r.memoizedState = hf, u;
    }
    return m = n.child, n = m.sibling, u = Ko(m, { mode: "visible", children: u.children }), (r.mode & 1) === 0 && (u.lanes = o), u.return = r, u.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function tp(n, r) {
    return r = Xo({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Fs(n, r, o, u) {
    return u !== null && io(u), On(r, n.child, null, o), n = tp(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function hh(n, r, o, u, f, m, C) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, u = Qd(Error(p(422))), Fs(n, r, C, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (m = u.fallback, f = r.mode, u = Xo({ mode: "visible", children: u.children }, f, 0, null), m = fo(m, f, C, null), m.flags |= 2, u.return = r, m.return = r, u.sibling = m, r.child = u, (r.mode & 1) !== 0 && On(r, n.child, null, C), r.child.memoizedState = ep(C), r.memoizedState = hf, m);
    if ((r.mode & 1) === 0) return Fs(n, r, C, null);
    if (f.data === "$!") {
      if (u = f.nextSibling && f.nextSibling.dataset, u) var O = u.dgst;
      return u = O, m = Error(p(419)), u = Qd(m, u, void 0), Fs(n, r, C, u);
    }
    if (O = (C & n.childLanes) !== 0, Hn || O) {
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
        f = (f & (u.suspendedLanes | C)) !== 0 ? 0 : f, f !== 0 && f !== m.retryLane && (m.retryLane = f, Ea(n, f), Ir(u, n, f, -1));
      }
      return fp(), u = Qd(Error(p(421))), Fs(n, r, C, u);
    }
    return f.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Jy.bind(null, n), f._reactRetry = r, null) : (n = m.treeContext, aa = Ti(f.nextSibling), ra = r, yn = !0, Fa = null, n !== null && (In[Pa++] = Li, In[Pa++] = Mi, In[Pa++] = Sa, Li = n.id, Mi = n.overflow, Sa = r), r = tp(r, u.children), r.flags |= 4096, r);
  }
  function np(n, r, o) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), Id(n.return, r, o);
  }
  function zr(n, r, o, u, f) {
    var m = n.memoizedState;
    m === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: o, tailMode: f } : (m.isBackwards = r, m.rendering = null, m.renderingStartTime = 0, m.last = u, m.tail = o, m.tailMode = f);
  }
  function Ai(n, r, o) {
    var u = r.pendingProps, f = u.revealOrder, m = u.tail;
    if (pr(n, r, u.children, o), u = xn.current, (u & 2) !== 0) u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && np(n, o, r);
        else if (n.tag === 19) np(n, o, r);
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
    else switch (f) {
      case "forwards":
        for (o = r.child, f = null; o !== null; ) n = o.alternate, n !== null && Yc(n) === null && (f = o), o = o.sibling;
        o = f, o === null ? (f = r.child, r.child = null) : (f = o.sibling, o.sibling = null), zr(r, !1, f, o, m);
        break;
      case "backwards":
        for (o = null, f = r.child, r.child = null; f !== null; ) {
          if (n = f.alternate, n !== null && Yc(n) === null) {
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
  function Va(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ha(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), Pi |= r.lanes, (o & r.childLanes) === 0) return null;
    if (n !== null && r.child !== n.child) throw Error(p(153));
    if (r.child !== null) {
      for (n = r.child, o = Ko(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; ) n = n.sibling, o = o.sibling = Ko(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function Is(n, r, o) {
    switch (r.tag) {
      case 3:
        Lu(r), Ho();
        break;
      case 5:
        oh(r);
        break;
      case 1:
        Fn(r.type) && rr(r);
        break;
      case 4:
        qd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, f = r.memoizedProps.value;
        et(Ca, u._currentValue), u._currentValue = f;
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
        if (f = r.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), et(xn, xn.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, zs(n, r, o);
    }
    return Ha(n, r, o);
  }
  var $a, $n, mh, yh;
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
  }, mh = function(n, r, o, u) {
    var f = n.memoizedProps;
    if (f !== u) {
      n = r.stateNode, Ol(ji.current);
      var m = null;
      switch (o) {
        case "input":
          f = ur(n, f), u = ur(n, u), m = [];
          break;
        case "select":
          f = ge({}, f, { value: void 0 }), u = ge({}, u, { value: void 0 }), m = [];
          break;
        case "textarea":
          f = Qn(n, f), u = Qn(n, u), m = [];
          break;
        default:
          typeof f.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Uo);
      }
      pn(o, u);
      var C;
      o = null;
      for (Q in f) if (!u.hasOwnProperty(Q) && f.hasOwnProperty(Q) && f[Q] != null) if (Q === "style") {
        var O = f[Q];
        for (C in O) O.hasOwnProperty(C) && (o || (o = {}), o[C] = "");
      } else Q !== "dangerouslySetInnerHTML" && Q !== "children" && Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && Q !== "autoFocus" && (x.hasOwnProperty(Q) ? m || (m = []) : (m = m || []).push(Q, null));
      for (Q in u) {
        var j = u[Q];
        if (O = f?.[Q], u.hasOwnProperty(Q) && j !== O && (j != null || O != null)) if (Q === "style") if (O) {
          for (C in O) !O.hasOwnProperty(C) || j && j.hasOwnProperty(C) || (o || (o = {}), o[C] = "");
          for (C in j) j.hasOwnProperty(C) && O[C] !== j[C] && (o || (o = {}), o[C] = j[C]);
        } else o || (m || (m = []), m.push(
          Q,
          o
        )), o = j;
        else Q === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, O = O ? O.__html : void 0, j != null && O !== j && (m = m || []).push(Q, j)) : Q === "children" ? typeof j != "string" && typeof j != "number" || (m = m || []).push(Q, "" + j) : Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && (x.hasOwnProperty(Q) ? (j != null && Q === "onScroll" && Qt("scroll", n), m || O === j || (m = [])) : (m = m || []).push(Q, j));
      }
      o && (m = m || []).push("style", o);
      var Q = m;
      (r.updateQueue = Q) && (r.flags |= 4);
    }
  }, yh = function(n, r, o, u) {
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
    if (r) for (var f = n.child; f !== null; ) o |= f.lanes | f.childLanes, u |= f.subtreeFlags & 14680064, u |= f.flags & 14680064, f.return = n, f = f.sibling;
    else for (f = n.child; f !== null; ) o |= f.lanes | f.childLanes, u |= f.subtreeFlags, u |= f.flags, f.return = n, f = f.sibling;
    return n.subtreeFlags |= u, n.childLanes = o, r;
  }
  function gh(n, r, o) {
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
        var f = Ol(Rs.current);
        if (o = r.type, n !== null && r.stateNode != null) mh(n, r, o, u, f), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(p(166));
            return ir(r), null;
          }
          if (n = Ol(ji.current), $c(r)) {
            u = r.stateNode, o = r.type;
            var m = r.memoizedProps;
            switch (u[Di] = r, u[_s] = m, n = (r.mode & 1) !== 0, o) {
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
                for (f = 0; f < ms.length; f++) Qt(ms[f], u);
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
                br(u, m), Qt("invalid", u);
            }
            pn(o, m), f = null;
            for (var C in m) if (m.hasOwnProperty(C)) {
              var O = m[C];
              C === "children" ? typeof O == "string" ? u.textContent !== O && (m.suppressHydrationWarning !== !0 && Ac(u.textContent, O, n), f = ["children", O]) : typeof O == "number" && u.textContent !== "" + O && (m.suppressHydrationWarning !== !0 && Ac(
                u.textContent,
                O,
                n
              ), f = ["children", "" + O]) : x.hasOwnProperty(C) && O != null && C === "onScroll" && Qt("scroll", u);
            }
            switch (o) {
              case "input":
                Un(u), gi(u, m, !0);
                break;
              case "textarea":
                Un(u), zn(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof m.onClick == "function" && (u.onclick = Uo);
            }
            u = f, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            C = f.nodeType === 9 ? f : f.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = wr(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = C.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = C.createElement(o, { is: u.is }) : (n = C.createElement(o), o === "select" && (C = n, u.multiple ? C.multiple = !0 : u.size && (C.size = u.size))) : n = C.createElementNS(n, o), n[Di] = r, n[_s] = u, $a(n, r, !1, !1), r.stateNode = n;
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
                  for (f = 0; f < ms.length; f++) Qt(ms[f], n);
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
                  n._wrapperState = { wasMultiple: !!u.multiple }, f = ge({}, u, { value: void 0 }), Qt("invalid", n);
                  break;
                case "textarea":
                  br(n, u), f = Qn(n, u), Qt("invalid", n);
                  break;
                default:
                  f = u;
              }
              pn(o, f), O = f;
              for (m in O) if (O.hasOwnProperty(m)) {
                var j = O[m];
                m === "style" ? un(n, j) : m === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, j != null && _i(n, j)) : m === "children" ? typeof j == "string" ? (o !== "textarea" || j !== "") && we(n, j) : typeof j == "number" && we(n, "" + j) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (x.hasOwnProperty(m) ? j != null && m === "onScroll" && Qt("scroll", n) : j != null && Ce(n, m, j, C));
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
                  n.multiple = !!u.multiple, m = u.value, m != null ? Tn(n, !!u.multiple, m, !1) : u.defaultValue != null && Tn(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof f.onClick == "function" && (n.onclick = Uo);
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
        if (n && r.stateNode != null) yh(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(p(166));
          if (o = Ol(Rs.current), Ol(ji.current), $c(r)) {
            if (u = r.stateNode, o = r.memoizedProps, u[Di] = r, (m = u.nodeValue !== o) && (n = ra, n !== null)) switch (n.tag) {
              case 3:
                Ac(u.nodeValue, o, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Ac(u.nodeValue, o, (n.mode & 1) !== 0);
            }
            m && (r.flags |= 4);
          } else u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), u[Di] = r, r.stateNode = u;
        }
        return ir(r), null;
      case 13:
        if (dn(xn), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (yn && aa !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) Es(), Ho(), r.flags |= 98560, m = !1;
          else if (m = $c(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!m) throw Error(p(318));
              if (m = r.memoizedState, m = m !== null ? m.dehydrated : null, !m) throw Error(p(317));
              m[Di] = r;
            } else Ho(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            ir(r), m = !1;
          } else Fa !== null && (Hl(Fa), Fa = null), m = !0;
          if (!m) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = o, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (xn.current & 1) !== 0 ? Mn === 0 && (Mn = 3) : fp())), r.updateQueue !== null && (r.flags |= 4), ir(r), null);
      case 4:
        return Nl(), $n(n, r), n === null && Eu(r.stateNode.containerInfo), ir(r), null;
      case 10:
        return Fd(r.type._context), ir(r), null;
      case 17:
        return Fn(r.type) && ku(), ir(r), null;
      case 19:
        if (dn(xn), m = r.memoizedState, m === null) return ir(r), null;
        if (u = (r.flags & 128) !== 0, C = m.rendering, C === null) if (u) Vs(m, !1);
        else {
          if (Mn !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (C = Yc(n), C !== null) {
              for (r.flags |= 128, Vs(m, !1), u = C.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = o, o = r.child; o !== null; ) m = o, n = u, m.flags &= 14680066, C = m.alternate, C === null ? (m.childLanes = 0, m.lanes = n, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = C.childLanes, m.lanes = C.lanes, m.child = C.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = C.memoizedProps, m.memoizedState = C.memoizedState, m.updateQueue = C.updateQueue, m.type = C.type, n = C.dependencies, m.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
              return et(xn, xn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          m.tail !== null && xt() > Uu && (r.flags |= 128, u = !0, Vs(m, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = Yc(C), n !== null) {
            if (r.flags |= 128, u = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), Vs(m, !0), m.tail === null && m.tailMode === "hidden" && !C.alternate && !yn) return ir(r), null;
          } else 2 * xt() - m.renderingStartTime > Uu && o !== 1073741824 && (r.flags |= 128, u = !0, Vs(m, !1), r.lanes = 4194304);
          m.isBackwards ? (C.sibling = r.child, r.child = C) : (o = m.last, o !== null ? o.sibling = C : r.child = C, m.last = C);
        }
        return m.tail !== null ? (r = m.tail, m.rendering = r, m.tail = r.sibling, m.renderingStartTime = xt(), r.sibling = null, o = xn.current, et(xn, u ? o & 1 | 2 : o & 1), r) : (ir(r), null);
      case 22:
      case 23:
        return cp(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && (r.mode & 1) !== 0 ? (ba & 1073741824) !== 0 && (ir(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : ir(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, r.tag));
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
          if (r.alternate === null) throw Error(p(340));
          Ho();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return dn(xn), null;
      case 4:
        return Nl(), null;
      case 10:
        return Fd(r.type._context), null;
      case 22:
      case 23:
        return cp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Hs = !1, Dr = !1, qy = typeof WeakSet == "function" ? WeakSet : Set, Be = null;
  function Mu(n, r) {
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
  var _h = !1;
  function Sh(n, r) {
    if (gs = ja, n = vs(), kc(n)) {
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
          var C = 0, O = -1, j = -1, Q = 0, pe = 0, he = n, fe = null;
          t: for (; ; ) {
            for (var Pe; he !== o || f !== 0 && he.nodeType !== 3 || (O = C + f), he !== m || u !== 0 && he.nodeType !== 3 || (j = C + u), he.nodeType === 3 && (C += he.nodeValue.length), (Pe = he.firstChild) !== null; )
              fe = he, he = Pe;
            for (; ; ) {
              if (he === n) break t;
              if (fe === o && ++Q === f && (O = C), fe === m && ++pe === u && (j = C), (Pe = he.nextSibling) !== null) break;
              he = fe, fe = he.parentNode;
            }
            he = Pe;
          }
          o = O === -1 || j === -1 ? null : { start: O, end: j };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (bl = { focusedElem: n, selectionRange: o }, ja = !1, Be = r; Be !== null; ) if (r = Be, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Be = n;
    else for (; Be !== null; ) {
      r = Be;
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
            throw Error(p(163));
        }
      } catch (ve) {
        gn(r, r.return, ve);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Be = n;
        break;
      }
      Be = r.return;
    }
    return Ge = _h, _h = !1, Ge;
  }
  function $s(n, r, o) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var f = u = u.next;
      do {
        if ((f.tag & n) === n) {
          var m = f.destroy;
          f.destroy = void 0, m !== void 0 && gf(r, o, m);
        }
        f = f.next;
      } while (f !== u);
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
  function rp(n) {
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
  var Ln = null, Pr = !1;
  function Fr(n, r, o) {
    for (o = o.child; o !== null; ) Ch(n, r, o), o = o.sibling;
  }
  function Ch(n, r, o) {
    if (Zr && typeof Zr.onCommitFiberUnmount == "function") try {
      Zr.onCommitFiberUnmount(ko, o);
    } catch {
    }
    switch (o.tag) {
      case 5:
        Dr || Mu(o, r);
      case 6:
        var u = Ln, f = Pr;
        Ln = null, Fr(n, r, o), Ln = u, Pr = f, Ln !== null && (Pr ? (n = Ln, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : Ln.removeChild(o.stateNode));
        break;
      case 18:
        Ln !== null && (Pr ? (n = Ln, o = o.stateNode, n.nodeType === 8 ? wu(n.parentNode, o) : n.nodeType === 1 && wu(n, o), li(n)) : wu(Ln, o.stateNode));
        break;
      case 4:
        u = Ln, f = Pr, Ln = o.stateNode.containerInfo, Pr = !0, Fr(n, r, o), Ln = u, Pr = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Dr && (u = o.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          f = u = u.next;
          do {
            var m = f, C = m.destroy;
            m = m.tag, C !== void 0 && ((m & 2) !== 0 || (m & 4) !== 0) && gf(o, r, C), f = f.next;
          } while (f !== u);
        }
        Fr(n, r, o);
        break;
      case 1:
        if (!Dr && (Mu(o, r), u = o.stateNode, typeof u.componentWillUnmount == "function")) try {
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
  function Eh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new qy()), r.forEach(function(u) {
        var f = Nh.bind(null, n, u);
        o.has(u) || (o.add(u), u.then(f, f));
      });
    }
  }
  function pi(n, r) {
    var o = r.deletions;
    if (o !== null) for (var u = 0; u < o.length; u++) {
      var f = o[u];
      try {
        var m = n, C = r, O = C;
        e: for (; O !== null; ) {
          switch (O.tag) {
            case 5:
              Ln = O.stateNode, Pr = !1;
              break e;
            case 3:
              Ln = O.stateNode.containerInfo, Pr = !0;
              break e;
            case 4:
              Ln = O.stateNode.containerInfo, Pr = !0;
              break e;
          }
          O = O.return;
        }
        if (Ln === null) throw Error(p(160));
        Ch(m, C, f), Ln = null, Pr = !1;
        var j = f.alternate;
        j !== null && (j.return = null), f.return = null;
      } catch (Q) {
        gn(f, r, Q);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) ap(r, n), r = r.sibling;
  }
  function ap(n, r) {
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
        pi(r, n), ua(n), u & 512 && o !== null && Mu(o, o.return);
        break;
      case 5:
        if (pi(r, n), ua(n), u & 512 && o !== null && Mu(o, o.return), n.flags & 32) {
          var f = n.stateNode;
          try {
            we(f, "");
          } catch (Xe) {
            gn(n, n.return, Xe);
          }
        }
        if (u & 4 && (f = n.stateNode, f != null)) {
          var m = n.memoizedProps, C = o !== null ? o.memoizedProps : m, O = n.type, j = n.updateQueue;
          if (n.updateQueue = null, j !== null) try {
            O === "input" && m.type === "radio" && m.name != null && Gn(f, m), nr(O, C);
            var Q = nr(O, m);
            for (C = 0; C < j.length; C += 2) {
              var pe = j[C], he = j[C + 1];
              pe === "style" ? un(f, he) : pe === "dangerouslySetInnerHTML" ? _i(f, he) : pe === "children" ? we(f, he) : Ce(f, pe, he, Q);
            }
            switch (O) {
              case "input":
                Jr(f, m);
                break;
              case "textarea":
                Za(f, m);
                break;
              case "select":
                var fe = f._wrapperState.wasMultiple;
                f._wrapperState.wasMultiple = !!m.multiple;
                var Pe = m.value;
                Pe != null ? Tn(f, !!m.multiple, Pe, !1) : fe !== !!m.multiple && (m.defaultValue != null ? Tn(
                  f,
                  !!m.multiple,
                  m.defaultValue,
                  !0
                ) : Tn(f, !!m.multiple, m.multiple ? [] : "", !1));
            }
            f[_s] = m;
          } catch (Xe) {
            gn(n, n.return, Xe);
          }
        }
        break;
      case 6:
        if (pi(r, n), ua(n), u & 4) {
          if (n.stateNode === null) throw Error(p(162));
          f = n.stateNode, m = n.memoizedProps;
          try {
            f.nodeValue = m;
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
        pi(r, n), ua(n), f = n.child, f.flags & 8192 && (m = f.memoizedState !== null, f.stateNode.isHidden = m, !m || f.alternate !== null && f.alternate.memoizedState !== null || (lp = xt())), u & 4 && Eh(n);
        break;
      case 22:
        if (pe = o !== null && o.memoizedState !== null, n.mode & 1 ? (Dr = (Q = Dr) || pe, pi(r, n), Dr = Q) : pi(r, n), ua(n), u & 8192) {
          if (Q = n.memoizedState !== null, (n.stateNode.isHidden = Q) && !pe && (n.mode & 1) !== 0) for (Be = n, pe = n.child; pe !== null; ) {
            for (he = Be = pe; Be !== null; ) {
              switch (fe = Be, Pe = fe.child, fe.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  $s(4, fe, fe.return);
                  break;
                case 1:
                  Mu(fe, fe.return);
                  var Ge = fe.stateNode;
                  if (typeof Ge.componentWillUnmount == "function") {
                    u = fe, o = fe.return;
                    try {
                      r = u, Ge.props = r.memoizedProps, Ge.state = r.memoizedState, Ge.componentWillUnmount();
                    } catch (Xe) {
                      gn(u, o, Xe);
                    }
                  }
                  break;
                case 5:
                  Mu(fe, fe.return);
                  break;
                case 22:
                  if (fe.memoizedState !== null) {
                    Ws(he);
                    continue;
                  }
              }
              Pe !== null ? (Pe.return = fe, Be = Pe) : Ws(he);
            }
            pe = pe.sibling;
          }
          e: for (pe = null, he = n; ; ) {
            if (he.tag === 5) {
              if (pe === null) {
                pe = he;
                try {
                  f = he.stateNode, Q ? (m = f.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (O = he.stateNode, j = he.memoizedProps.style, C = j != null && j.hasOwnProperty("display") ? j.display : null, O.style.display = Gt("display", C));
                } catch (Xe) {
                  gn(n, n.return, Xe);
                }
              }
            } else if (he.tag === 6) {
              if (pe === null) try {
                he.stateNode.nodeValue = Q ? "" : he.memoizedProps;
              } catch (Xe) {
                gn(n, n.return, Xe);
              }
            } else if ((he.tag !== 22 && he.tag !== 23 || he.memoizedState === null || he === n) && he.child !== null) {
              he.child.return = he, he = he.child;
              continue;
            }
            if (he === n) break e;
            for (; he.sibling === null; ) {
              if (he.return === null || he.return === n) break e;
              pe === he && (pe = null), he = he.return;
            }
            pe === he && (pe = null), he.sibling.return = he.return, he = he.sibling;
          }
        }
        break;
      case 19:
        pi(r, n), ua(n), u & 4 && Eh(n);
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
          throw Error(p(160));
        }
        switch (u.tag) {
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (we(f, ""), u.flags &= -33);
            var m = uo(n);
            zi(n, m, f);
            break;
          case 3:
          case 4:
            var C = u.stateNode.containerInfo, O = uo(n);
            Ui(n, O, C);
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
  function Wy(n, r, o) {
    Be = n, ip(n);
  }
  function ip(n, r, o) {
    for (var u = (n.mode & 1) !== 0; Be !== null; ) {
      var f = Be, m = f.child;
      if (f.tag === 22 && u) {
        var C = f.memoizedState !== null || Hs;
        if (!C) {
          var O = f.alternate, j = O !== null && O.memoizedState !== null || Dr;
          O = Hs;
          var Q = Dr;
          if (Hs = C, (Dr = j) && !Q) for (Be = f; Be !== null; ) C = Be, j = C.child, C.tag === 22 && C.memoizedState !== null ? op(f) : j !== null ? (j.return = C, Be = j) : op(f);
          for (; m !== null; ) Be = m, ip(m), m = m.sibling;
          Be = f, Hs = O, Dr = Q;
        }
        xh(n);
      } else (f.subtreeFlags & 8772) !== 0 && m !== null ? (m.return = f, Be = m) : xh(n);
    }
  }
  function xh(n) {
    for (; Be !== null; ) {
      var r = Be;
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
                var f = r.elementType === r.type ? o.memoizedProps : di(r.type, o.memoizedProps);
                u.componentDidUpdate(f, o.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var m = r.updateQueue;
              m !== null && Bd(r, m, u);
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
                Bd(r, C, o);
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
                  var pe = Q.memoizedState;
                  if (pe !== null) {
                    var he = pe.dehydrated;
                    he !== null && li(he);
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
          Dr || r.flags & 512 && rp(r);
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
  function Ws(n) {
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
  function op(n) {
    for (; Be !== null; ) {
      var r = Be;
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
              var f = r.return;
              try {
                u.componentDidMount();
              } catch (j) {
                gn(r, f, j);
              }
            }
            var m = r.return;
            try {
              rp(r);
            } catch (j) {
              gn(r, m, j);
            }
            break;
          case 5:
            var C = r.return;
            try {
              rp(r);
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
      var O = r.sibling;
      if (O !== null) {
        O.return = r.return, Be = O;
        break;
      }
      Be = r.return;
    }
  }
  var Yy = Math.ceil, Yo = Oe.ReactCurrentDispatcher, Il = Oe.ReactCurrentOwner, vr = Oe.ReactCurrentBatchConfig, At = 0, Zn = null, Bn = null, hr = 0, ba = 0, ju = za(0), Mn = 0, Ys = null, Pi = 0, Au = 0, Sf = 0, Gs = null, sa = null, lp = 0, Uu = 1 / 0, wa = null, zu = !1, Vl = null, Go = null, Cf = !1, so = null, Qs = 0, Qo = 0, Pu = null, Ks = -1, Or = 0;
  function qn() {
    return (At & 6) !== 0 ? xt() : Ks !== -1 ? Ks : Ks = xt();
  }
  function Fi(n) {
    return (n.mode & 1) === 0 ? 1 : (At & 2) !== 0 && hr !== 0 ? hr & -hr : By.transition !== null ? (Or === 0 && (Or = cu()), Or) : (n = Ht, n !== 0 || (n = window.event, n = n === void 0 ? 16 : yu(n.type)), n);
  }
  function Ir(n, r, o, u) {
    if (50 < Qo) throw Qo = 0, Pu = null, Error(p(185));
    Ki(n, o, u), ((At & 2) === 0 || n !== Zn) && (n === Zn && ((At & 2) === 0 && (Au |= o), Mn === 4 && vi(n, hr)), ca(n, u), o === 1 && At === 0 && (r.mode & 1) === 0 && (Uu = xt() + 500, Tu && Ni()));
  }
  function ca(n, r) {
    var o = n.callbackNode;
    hl(n, r);
    var u = oi(n, n === Zn ? hr : 0);
    if (u === 0) o !== null && cr(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (o != null && cr(o), r === 1) n.tag === 0 ? Po(up.bind(null, n)) : Ic(up.bind(null, n)), bu(function() {
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
    if (Ks = -1, Or = 0, (At & 6) !== 0) throw Error(p(327));
    var o = n.callbackNode;
    if (Fu() && n.callbackNode !== o) return null;
    var u = oi(n, n === Zn ? hr : 0);
    if (u === 0) return null;
    if ((u & 30) !== 0 || (u & n.expiredLanes) !== 0 || r) r = xf(n, u);
    else {
      r = u;
      var f = At;
      At |= 2;
      var m = wh();
      (Zn !== n || hr !== r) && (wa = null, Uu = xt() + 500, co(n, r));
      do
        try {
          Rh();
          break;
        } catch (O) {
          bh(n, O);
        }
      while (!0);
      Pd(), Yo.current = m, At = f, Bn !== null ? r = 0 : (Zn = null, hr = 0, r = Mn);
    }
    if (r !== 0) {
      if (r === 2 && (f = Do(n), f !== 0 && (u = f, r = Xs(n, f))), r === 1) throw o = Ys, co(n, 0), vi(n, u), ca(n, xt()), o;
      if (r === 6) vi(n, u);
      else {
        if (f = n.current.alternate, (u & 30) === 0 && !Gy(f) && (r = xf(n, u), r === 2 && (m = Do(n), m !== 0 && (u = m, r = Xs(n, m))), r === 1)) throw o = Ys, co(n, 0), vi(n, u), ca(n, xt()), o;
        switch (n.finishedWork = f, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            Bl(n, sa, wa);
            break;
          case 3:
            if (vi(n, u), (u & 130023424) === u && (r = lp + 500 - xt(), 10 < r)) {
              if (oi(n, 0) !== 0) break;
              if (f = n.suspendedLanes, (f & u) !== u) {
                qn(), n.pingedLanes |= n.suspendedLanes & f;
                break;
              }
              n.timeoutHandle = zc(Bl.bind(null, n, sa, wa), r);
              break;
            }
            Bl(n, sa, wa);
            break;
          case 4:
            if (vi(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, f = -1; 0 < u; ) {
              var C = 31 - jr(u);
              m = 1 << C, C = r[C], C > f && (f = C), u &= ~m;
            }
            if (u = f, u = xt() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Yy(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = zc(Bl.bind(null, n, sa, wa), u);
              break;
            }
            Bl(n, sa, wa);
            break;
          case 5:
            Bl(n, sa, wa);
            break;
          default:
            throw Error(p(329));
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
          var f = o[u], m = f.getSnapshot;
          f = f.value;
          try {
            if (!si(m(), f)) return !1;
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
  function up(n) {
    if ((At & 6) !== 0) throw Error(p(327));
    Fu();
    var r = oi(n, 0);
    if ((r & 1) === 0) return ca(n, xt()), null;
    var o = xf(n, r);
    if (n.tag !== 0 && o === 2) {
      var u = Do(n);
      u !== 0 && (r = u, o = Xs(n, u));
    }
    if (o === 1) throw o = Ys, co(n, 0), vi(n, r), ca(n, xt()), o;
    if (o === 6) throw Error(p(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Bl(n, sa, wa), ca(n, xt()), null;
  }
  function sp(n, r) {
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
    var o = vr.transition, u = Ht;
    try {
      if (vr.transition = null, Ht = 1, n) return n();
    } finally {
      Ht = u, vr.transition = o, At = r, (At & 6) === 0 && Ni();
    }
  }
  function cp() {
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
          Fd(u.type._context);
          break;
        case 22:
        case 23:
          cp();
      }
      o = o.return;
    }
    if (Zn = n, Bn = n = Ko(n.current, null), hr = ba = r, Mn = 0, Ys = null, Sf = Au = Pi = 0, sa = Gs = null, Dl !== null) {
      for (r = 0; r < Dl.length; r++) if (o = Dl[r], u = o.interleaved, u !== null) {
        o.interleaved = null;
        var f = u.next, m = o.pending;
        if (m !== null) {
          var C = m.next;
          m.next = f, u.next = C;
        }
        o.pending = u;
      }
      Dl = null;
    }
    return n;
  }
  function bh(n, r) {
    do {
      var o = Bn;
      try {
        if (Pd(), Dt.current = zl, Gc) {
          for (var u = Bt.memoizedState; u !== null; ) {
            var f = u.queue;
            f !== null && (f.pending = null), u = u.next;
          }
          Gc = !1;
        }
        if (rn = 0, ar = Vn = Bt = null, Ts = !1, Ll = 0, Il.current = null, o === null || o.return === null) {
          Mn = 1, Ys = r, Bn = null;
          break;
        }
        e: {
          var m = n, C = o.return, O = o, j = r;
          if (r = hr, O.flags |= 32768, j !== null && typeof j == "object" && typeof j.then == "function") {
            var Q = j, pe = O, he = pe.tag;
            if ((pe.mode & 1) === 0 && (he === 0 || he === 11 || he === 15)) {
              var fe = pe.alternate;
              fe ? (pe.updateQueue = fe.updateQueue, pe.memoizedState = fe.memoizedState, pe.lanes = fe.lanes) : (pe.updateQueue = null, pe.memoizedState = null);
            }
            var Pe = fh(C);
            if (Pe !== null) {
              Pe.flags &= -257, Wo(Pe, C, O, m, r), Pe.mode & 1 && Jd(m, Q, r), r = Pe, j = Q;
              var Ge = r.updateQueue;
              if (Ge === null) {
                var Xe = /* @__PURE__ */ new Set();
                Xe.add(j), r.updateQueue = Xe;
              } else Ge.add(j);
              break e;
            } else {
              if ((r & 1) === 0) {
                Jd(m, Q, r), fp();
                break e;
              }
              j = Error(p(426));
            }
          } else if (yn && O.mode & 1) {
            var jn = fh(C);
            if (jn !== null) {
              (jn.flags & 65536) === 0 && (jn.flags |= 256), Wo(jn, C, O, m, r), io(Pl(j, O));
              break e;
            }
          }
          m = j = Pl(j, O), Mn !== 4 && (Mn = 2), Gs === null ? Gs = [m] : Gs.push(m), m = C;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, r &= -r, m.lanes |= r;
                var V = ch(m, j, r);
                ih(m, V);
                break e;
              case 1:
                O = j;
                var U = m.type, q = m.stateNode;
                if ((m.flags & 128) === 0 && (typeof U.getDerivedStateFromError == "function" || q !== null && typeof q.componentDidCatch == "function" && (Go === null || !Go.has(q)))) {
                  m.flags |= 65536, r &= -r, m.lanes |= r;
                  var ve = Xd(m, O, r);
                  ih(m, ve);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        Th(o);
      } catch (Qe) {
        r = Qe, Bn === o && o !== null && (Bn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function wh() {
    var n = Yo.current;
    return Yo.current = zl, n === null ? zl : n;
  }
  function fp() {
    (Mn === 0 || Mn === 3 || Mn === 2) && (Mn = 4), Zn === null || (Pi & 268435455) === 0 && (Au & 268435455) === 0 || vi(Zn, hr);
  }
  function xf(n, r) {
    var o = At;
    At |= 2;
    var u = wh();
    (Zn !== n || hr !== r) && (wa = null, co(n, r));
    do
      try {
        Qy();
        break;
      } catch (f) {
        bh(n, f);
      }
    while (!0);
    if (Pd(), At = o, Yo.current = u, Bn !== null) throw Error(p(261));
    return Zn = null, hr = 0, Mn;
  }
  function Qy() {
    for (; Bn !== null; ) kh(Bn);
  }
  function Rh() {
    for (; Bn !== null && !ni(); ) kh(Bn);
  }
  function kh(n) {
    var r = Lh(n.alternate, n, ba);
    n.memoizedProps = n.pendingProps, r === null ? Th(n) : Bn = r, Il.current = null;
  }
  function Th(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (o = gh(o, r, ba), o !== null) {
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
  function Bl(n, r, o) {
    var u = Ht, f = vr.transition;
    try {
      vr.transition = null, Ht = 1, Ky(n, r, o, u);
    } finally {
      vr.transition = f, Ht = u;
    }
    return null;
  }
  function Ky(n, r, o, u) {
    do
      Fu();
    while (so !== null);
    if ((At & 6) !== 0) throw Error(p(327));
    o = n.finishedWork;
    var f = n.finishedLanes;
    if (o === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(p(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var m = o.lanes | o.childLanes;
    if (dd(n, m), n === Zn && (Bn = Zn = null, hr = 0), (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || Cf || (Cf = !0, Mh(vl, function() {
      return Fu(), null;
    })), m = (o.flags & 15990) !== 0, (o.subtreeFlags & 15990) !== 0 || m) {
      m = vr.transition, vr.transition = null;
      var C = Ht;
      Ht = 1;
      var O = At;
      At |= 4, Il.current = null, Sh(n, o), ap(o, n), Su(bl), ja = !!gs, bl = gs = null, n.current = o, Wy(o), ri(), At = O, Ht = C, vr.transition = m;
    } else n.current = o;
    if (Cf && (Cf = !1, so = n, Qs = f), m = n.pendingLanes, m === 0 && (Go = null), as(o.stateNode), ca(n, xt()), r !== null) for (u = n.onRecoverableError, o = 0; o < r.length; o++) f = r[o], u(f.value, { componentStack: f.stack, digest: f.digest });
    if (zu) throw zu = !1, n = Vl, Vl = null, n;
    return (Qs & 1) !== 0 && n.tag !== 0 && Fu(), m = n.pendingLanes, (m & 1) !== 0 ? n === Pu ? Qo++ : (Qo = 0, Pu = n) : Qo = 0, Ni(), null;
  }
  function Fu() {
    if (so !== null) {
      var n = du(Qs), r = vr.transition, o = Ht;
      try {
        if (vr.transition = null, Ht = 16 > n ? 16 : n, so === null) var u = !1;
        else {
          if (n = so, so = null, Qs = 0, (At & 6) !== 0) throw Error(p(331));
          var f = At;
          for (At |= 4, Be = n.current; Be !== null; ) {
            var m = Be, C = m.child;
            if ((Be.flags & 16) !== 0) {
              var O = m.deletions;
              if (O !== null) {
                for (var j = 0; j < O.length; j++) {
                  var Q = O[j];
                  for (Be = Q; Be !== null; ) {
                    var pe = Be;
                    switch (pe.tag) {
                      case 0:
                      case 11:
                      case 15:
                        $s(8, pe, m);
                    }
                    var he = pe.child;
                    if (he !== null) he.return = pe, Be = he;
                    else for (; Be !== null; ) {
                      pe = Be;
                      var fe = pe.sibling, Pe = pe.return;
                      if (_f(pe), pe === Q) {
                        Be = null;
                        break;
                      }
                      if (fe !== null) {
                        fe.return = Pe, Be = fe;
                        break;
                      }
                      Be = Pe;
                    }
                  }
                }
                var Ge = m.alternate;
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
                Be = m;
              }
            }
            if ((m.subtreeFlags & 2064) !== 0 && C !== null) C.return = m, Be = C;
            else e: for (; Be !== null; ) {
              if (m = Be, (m.flags & 2048) !== 0) switch (m.tag) {
                case 0:
                case 11:
                case 15:
                  $s(9, m, m.return);
              }
              var V = m.sibling;
              if (V !== null) {
                V.return = m.return, Be = V;
                break e;
              }
              Be = m.return;
            }
          }
          var U = n.current;
          for (Be = U; Be !== null; ) {
            C = Be;
            var q = C.child;
            if ((C.subtreeFlags & 2064) !== 0 && q !== null) q.return = C, Be = q;
            else e: for (C = U; Be !== null; ) {
              if (O = Be, (O.flags & 2048) !== 0) try {
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
                Be = null;
                break e;
              }
              var ve = O.sibling;
              if (ve !== null) {
                ve.return = O.return, Be = ve;
                break e;
              }
              Be = O.return;
            }
          }
          if (At = f, Ni(), Zr && typeof Zr.onPostCommitFiberRoot == "function") try {
            Zr.onPostCommitFiberRoot(ko, n);
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
  function Dh(n, r, o) {
    r = Pl(o, r), r = ch(n, r, 1), n = $o(n, r, 1), r = qn(), n !== null && (Ki(n, 1, r), ca(n, r));
  }
  function gn(n, r, o) {
    if (n.tag === 3) Dh(n, n, o);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Dh(r, n, o);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Go === null || !Go.has(u))) {
          n = Pl(o, n), n = Xd(r, n, 1), r = $o(r, n, 1), n = qn(), r !== null && (Ki(r, 1, n), ca(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Xy(n, r, o) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = qn(), n.pingedLanes |= n.suspendedLanes & o, Zn === n && (hr & o) === o && (Mn === 4 || Mn === 3 && (hr & 130023424) === hr && 500 > xt() - lp ? co(n, 0) : Sf |= o), ca(n, r);
  }
  function Oh(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = _a, _a <<= 1, (_a & 130023424) === 0 && (_a = 4194304)));
    var o = qn();
    n = Ea(n, r), n !== null && (Ki(n, r, o), ca(n, o));
  }
  function Jy(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), Oh(n, o);
  }
  function Nh(n, r) {
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
    u !== null && u.delete(r), Oh(n, o);
  }
  var Lh;
  Lh = function(n, r, o) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Xn.current) Hn = !0;
    else {
      if ((n.lanes & o) === 0 && (r.flags & 128) === 0) return Hn = !1, Is(n, r, o);
      Hn = (n.flags & 131072) !== 0;
    }
    else Hn = !1, yn && (r.flags & 1048576) !== 0 && th(r, ao, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Va(n, r), n = r.pendingProps;
        var f = na(r, wn.current);
        En(r, o), f = Bo(null, r, u, n, f, o);
        var m = fi();
        return r.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Fn(u) ? (m = !0, rr(r)) : m = !1, r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, $d(r), f.updater = df, r.stateNode = f, f._reactInternals = r, As(r, u, n, o), r = Ps(null, r, u, !0, m, o)) : (r.tag = 0, yn && m && Vc(r), pr(null, r, f, o), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Va(n, r), n = r.pendingProps, f = u._init, u = f(u._payload), r.type = u, f = r.tag = eg(u), n = di(u, n), f) {
            case 0:
              r = dh(null, r, u, n, o);
              break e;
            case 1:
              r = ph(null, r, u, n, o);
              break e;
            case 11:
              r = la(null, r, u, n, o);
              break e;
            case 14:
              r = Fl(null, r, u, di(u.type, n), o);
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
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : di(u, f), dh(n, r, u, f, o);
      case 1:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : di(u, f), ph(n, r, u, f, o);
      case 3:
        e: {
          if (Lu(r), n === null) throw Error(p(387));
          u = r.pendingProps, m = r.memoizedState, f = m.element, ah(n, r), xs(r, u, null, o);
          var C = r.memoizedState;
          if (u = C.element, m.isDehydrated) if (m = { element: u, isDehydrated: !1, cache: C.cache, pendingSuspenseBoundaries: C.pendingSuspenseBoundaries, transitions: C.transitions }, r.updateQueue.baseState = m, r.memoizedState = m, r.flags & 256) {
            f = Pl(Error(p(423)), r), r = vh(n, r, u, o, f);
            break e;
          } else if (u !== f) {
            f = Pl(Error(p(424)), r), r = vh(n, r, u, o, f);
            break e;
          } else for (aa = Ti(r.stateNode.containerInfo.firstChild), ra = r, yn = !0, Fa = null, o = je(r, null, u, o), r.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (Ho(), u === f) {
              r = Ha(n, r, o);
              break e;
            }
            pr(n, r, u, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return oh(r), n === null && Ud(r), u = r.type, f = r.pendingProps, m = n !== null ? n.memoizedProps : null, C = f.children, Uc(u, f) ? C = null : m !== null && Uc(u, m) && (r.flags |= 32), Zd(n, r), pr(n, r, C, o), r.child;
      case 6:
        return n === null && Ud(r), null;
      case 13:
        return mf(n, r, o);
      case 4:
        return qd(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = On(r, null, u, o) : pr(n, r, u, o), r.child;
      case 11:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : di(u, f), la(n, r, u, f, o);
      case 7:
        return pr(n, r, r.pendingProps, o), r.child;
      case 8:
        return pr(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return pr(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (u = r.type._context, f = r.pendingProps, m = r.memoizedProps, C = f.value, et(Ca, u._currentValue), u._currentValue = C, m !== null) if (si(m.value, C)) {
            if (m.children === f.children && !Xn.current) {
              r = Ha(n, r, o);
              break e;
            }
          } else for (m = r.child, m !== null && (m.return = r); m !== null; ) {
            var O = m.dependencies;
            if (O !== null) {
              C = m.child;
              for (var j = O.firstContext; j !== null; ) {
                if (j.context === u) {
                  if (m.tag === 1) {
                    j = oo(-1, o & -o), j.tag = 2;
                    var Q = m.updateQueue;
                    if (Q !== null) {
                      Q = Q.shared;
                      var pe = Q.pending;
                      pe === null ? j.next = j : (j.next = pe.next, pe.next = j), Q.pending = j;
                    }
                  }
                  m.lanes |= o, j = m.alternate, j !== null && (j.lanes |= o), Id(
                    m.return,
                    o,
                    r
                  ), O.lanes |= o;
                  break;
                }
                j = j.next;
              }
            } else if (m.tag === 10) C = m.type === r.type ? null : m.child;
            else if (m.tag === 18) {
              if (C = m.return, C === null) throw Error(p(341));
              C.lanes |= o, O = C.alternate, O !== null && (O.lanes |= o), Id(C, o, r), C = m.sibling;
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
        return u = r.type, f = di(u, r.pendingProps), f = di(u.type, f), Fl(n, r, u, f, o);
      case 15:
        return bt(n, r, r.type, r.pendingProps, o);
      case 17:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : di(u, f), Va(n, r), r.tag = 1, Fn(u) ? (n = !0, rr(r)) : n = !1, En(r, o), pf(r, u, f), As(r, u, f, o), Ps(null, r, u, !0, n, o);
      case 19:
        return Ai(n, r, o);
      case 22:
        return zs(n, r, o);
    }
    throw Error(p(156, r.tag));
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
  function dp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function eg(n) {
    if (typeof n == "function") return dp(n) ? 1 : 0;
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
  function Js(n, r, o, u, f, m) {
    var C = 2;
    if (u = n, typeof n == "function") dp(n) && (C = 1);
    else if (typeof n == "string") C = 5;
    else e: switch (n) {
      case Ne:
        return fo(o.children, f, m, r);
      case $e:
        C = 8, f |= 8;
        break;
      case it:
        return n = Ba(12, o, r, f | 2), n.elementType = it, n.lanes = m, n;
      case X:
        return n = Ba(13, o, r, f), n.elementType = X, n.lanes = m, n;
      case be:
        return n = Ba(19, o, r, f), n.elementType = be, n.lanes = m, n;
      case xe:
        return Xo(o, f, m, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case at:
            C = 10;
            break e;
          case le:
            C = 9;
            break e;
          case G:
            C = 11;
            break e;
          case qe:
            C = 14;
            break e;
          case ke:
            C = 16, u = null;
            break e;
        }
        throw Error(p(130, n == null ? n : typeof n, ""));
    }
    return r = Ba(C, o, r, f), r.elementType = n, r.type = u, r.lanes = m, r;
  }
  function fo(n, r, o, u) {
    return n = Ba(7, n, u, r), n.lanes = o, n;
  }
  function Xo(n, r, o, u) {
    return n = Ba(22, n, u, r), n.elementType = xe, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function pp(n, r, o) {
    return n = Ba(6, n, null, r), n.lanes = o, n;
  }
  function bf(n, r, o) {
    return r = Ba(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function jh(n, r, o, u, f) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = fu(0), this.expirationTimes = fu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = fu(0), this.identifierPrefix = u, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null;
  }
  function wf(n, r, o, u, f, m, C, O, j) {
    return n = new jh(n, r, o, O, j), r === 1 ? (r = 1, m === !0 && (r |= 8)) : r = 0, m = Ba(3, null, null, r), n.current = m, m.stateNode = n, m.memoizedState = { element: u, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, $d(m), n;
  }
  function tg(n, r, o) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Re, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: o };
  }
  function vp(n) {
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
      var o = n.type;
      if (Fn(o)) return Cs(n, o, r);
    }
    return r;
  }
  function Ah(n, r, o, u, f, m, C, O, j) {
    return n = wf(o, u, !0, n, f, m, C, O, j), n.context = vp(null), o = n.current, u = qn(), f = Fi(o), m = oo(u, f), m.callback = r ?? null, $o(o, m, f), n.current.lanes = f, Ki(n, f, u), ca(n, u), n;
  }
  function Rf(n, r, o, u) {
    var f = r.current, m = qn(), C = Fi(f);
    return o = vp(o), r.context === null ? r.context = o : r.pendingContext = o, r = oo(m, C), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = $o(f, r, C), n !== null && (Ir(n, f, C, m), qc(n, f, C)), C;
  }
  function kf(n) {
    return n = n.current, n.child ? (n.child.tag === 5, n.child.stateNode) : null;
  }
  function hp(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function Tf(n, r) {
    hp(n, r), (n = n.alternate) && hp(n, r);
  }
  function Uh() {
    return null;
  }
  var ql = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function mp(n) {
    this._internalRoot = n;
  }
  Df.prototype.render = mp.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(p(409));
    Rf(n, r, null, null);
  }, Df.prototype.unmount = mp.prototype.unmount = function() {
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
  function yp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Of(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function zh() {
  }
  function ng(n, r, o, u, f) {
    if (f) {
      if (typeof u == "function") {
        var m = u;
        u = function() {
          var Q = kf(C);
          m.call(Q);
        };
      }
      var C = Ah(r, u, n, 0, null, !1, !1, "", zh);
      return n._reactRootContainer = C, n[no] = C.current, Eu(n.nodeType === 8 ? n.parentNode : n), $l(), C;
    }
    for (; f = n.lastChild; ) n.removeChild(f);
    if (typeof u == "function") {
      var O = u;
      u = function() {
        var Q = kf(j);
        O.call(Q);
      };
    }
    var j = wf(n, 0, !1, null, null, !1, !1, "", zh);
    return n._reactRootContainer = j, n[no] = j.current, Eu(n.nodeType === 8 ? n.parentNode : n), $l(function() {
      Rf(r, j, o, u);
    }), j;
  }
  function Zs(n, r, o, u, f) {
    var m = o._reactRootContainer;
    if (m) {
      var C = m;
      if (typeof f == "function") {
        var O = f;
        f = function() {
          var j = kf(C);
          O.call(j);
        };
      }
      Rf(r, C, n, f);
    } else C = ng(o, r, n, f, u);
    return kf(C);
  }
  Ft = function(n) {
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
            var f = qn();
            Ir(u, n, 1, f);
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
    return Ht;
  }, pu = function(n, r) {
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
              if (!f) throw Error(p(90));
              Nr(u), Jr(u, f);
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
  }, fl = sp, bo = $l;
  var rg = { usingClientEntryPoint: !1, Events: [nt, ci, Cn, Qi, cl, sp] }, ec = { findFiberByHostInstance: wl, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Ph = { bundleType: ec.bundleType, version: ec.version, rendererPackageName: ec.rendererPackageName, rendererConfig: ec.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Oe.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Dn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: ec.findFiberByHostInstance || Uh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Jo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jo.isDisabled && Jo.supportsFiber) try {
      ko = Jo.inject(Ph), Zr = Jo;
    } catch {
    }
  }
  return Ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rg, Ka.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!yp(r)) throw Error(p(200));
    return tg(n, r, null, o);
  }, Ka.createRoot = function(n, r) {
    if (!yp(n)) throw Error(p(299));
    var o = !1, u = "", f = ql;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (f = r.onRecoverableError)), r = wf(n, 1, !1, null, null, o, !1, u, f), n[no] = r.current, Eu(n.nodeType === 8 ? n.parentNode : n), new mp(r);
  }, Ka.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(p(188)) : (n = Object.keys(n).join(","), Error(p(268, n)));
    return n = Dn(r), n = n === null ? null : n.stateNode, n;
  }, Ka.flushSync = function(n) {
    return $l(n);
  }, Ka.hydrate = function(n, r, o) {
    if (!Of(r)) throw Error(p(200));
    return Zs(null, n, r, !0, o);
  }, Ka.hydrateRoot = function(n, r, o) {
    if (!yp(n)) throw Error(p(405));
    var u = o != null && o.hydratedSources || null, f = !1, m = "", C = ql;
    if (o != null && (o.unstable_strictMode === !0 && (f = !0), o.identifierPrefix !== void 0 && (m = o.identifierPrefix), o.onRecoverableError !== void 0 && (C = o.onRecoverableError)), r = Ah(r, null, n, 1, o ?? null, f, !1, m, C), n[no] = r.current, Eu(n), u) for (n = 0; n < u.length; n++) o = u[n], f = o._getVersion, f = f(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, f] : r.mutableSourceEagerHydrationData.push(
      o,
      f
    );
    return new Df(r);
  }, Ka.render = function(n, r, o) {
    if (!Of(r)) throw Error(p(200));
    return Zs(null, n, r, !1, o);
  }, Ka.unmountComponentAtNode = function(n) {
    if (!Of(n)) throw Error(p(40));
    return n._reactRootContainer ? ($l(function() {
      Zs(null, null, n, !1, function() {
        n._reactRootContainer = null, n[no] = null;
      });
    }), !0) : !1;
  }, Ka.unstable_batchedUpdates = sp, Ka.unstable_renderSubtreeIntoContainer = function(n, r, o, u) {
    if (!Of(o)) throw Error(p(200));
    if (n == null || n._reactInternals === void 0) throw Error(p(38));
    return Zs(n, r, o, !1, u);
  }, Ka.version = "18.3.1-next-f1338f8080-20240426", Ka;
}
var Xa = {};
var vE;
function tM() {
  return vE || (vE = 1, process.env.NODE_ENV !== "production" && (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = Ev(), v = FE(), p = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, S = !1;
    function x(e) {
      S = e;
    }
    function E(e) {
      if (!S) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        k("warn", e, a);
      }
    }
    function h(e) {
      if (!S) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        k("error", e, a);
      }
    }
    function k(e, t, a) {
      {
        var i = p.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(d) {
          return String(d);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var R = 0, w = 1, N = 2, F = 3, I = 4, B = 5, ie = 6, ae = 7, oe = 8, Se = 9, de = 10, Ce = 11, Oe = 12, ye = 13, Re = 14, Ne = 15, $e = 16, it = 17, at = 18, le = 19, G = 21, X = 22, be = 23, qe = 24, ke = 25, xe = !0, ne = !1, Le = !1, ge = !1, P = !1, Z = !0, tt = !0, Ie = !0, gt = !0, ot = /* @__PURE__ */ new Set(), Ue = {}, dt = {};
    function ht(e, t) {
      Xt(e, t), Xt(e + "Capture", t);
    }
    function Xt(e, t) {
      Ue[e] && h("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ue[e] = t;
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
        return h("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, kn(e)), Yn(e);
    }
    function Jr(e) {
      if (ur(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", kn(e)), Yn(e);
    }
    function gi(e, t) {
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
    var Qn = 0, br = 1, Za = 2, zn = 3, wr = 4, ya = 5, ei = 6, _i = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", we = _i + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Je = new RegExp("^[" + _i + "][" + we + "]*$"), Rt = {}, Gt = {};
    function un(e) {
      return Nr.call(Gt, e) ? !0 : Nr.call(Rt, e) ? !1 : Je.test(e) ? (Gt[e] = !0, !0) : (Rt[e] = !0, h("Invalid attribute name: `%s`", e), !1);
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
      !fl && cl.test(e) && (fl = !0, h("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
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
          var z = l.type, A;
          z === zn || z === wr && a === !0 ? A = "" : (Gn(a, b), A = "" + a, l.sanitizeURL && bo(A.toString())), T ? e.setAttributeNS(T, b, A) : e.setAttribute(b, A);
        }
      }
    }
    var Mr = /* @__PURE__ */ Symbol.for("react.element"), sr = /* @__PURE__ */ Symbol.for("react.portal"), Si = /* @__PURE__ */ Symbol.for("react.fragment"), ti = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ci = /* @__PURE__ */ Symbol.for("react.profiler"), Ei = /* @__PURE__ */ Symbol.for("react.provider"), M = /* @__PURE__ */ Symbol.for("react.context"), ue = /* @__PURE__ */ Symbol.for("react.forward_ref"), Me = /* @__PURE__ */ Symbol.for("react.suspense"), We = /* @__PURE__ */ Symbol.for("react.suspense_list"), Et = /* @__PURE__ */ Symbol.for("react.memo"), _t = /* @__PURE__ */ Symbol.for("react.lazy"), Ot = /* @__PURE__ */ Symbol.for("react.scope"), Tt = /* @__PURE__ */ Symbol.for("react.debug_trace_mode"), Dn = /* @__PURE__ */ Symbol.for("react.offscreen"), cn = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), vn = /* @__PURE__ */ Symbol.for("react.cache"), cr = /* @__PURE__ */ Symbol.for("react.tracing_marker"), ni = Symbol.iterator, ri = "@@iterator";
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
        ai < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var uu = p.ReactCurrentDispatcher, To;
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
`), b = y.length - 1, T = g.length - 1; b >= 1 && T >= 0 && y[b] !== g[T]; )
            T--;
          for (; b >= 1 && T >= 0; b--, T--)
            if (y[b] !== g[T]) {
              if (b !== 1 || T !== 1)
                do
                  if (b--, T--, T < 0 || y[b] !== g[T]) {
                    var z = `
` + y[b].replace(" at new ", " at ");
                    return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), typeof e == "function" && oi.set(e, z), z;
                  }
                while (b >= 1 && T >= 0);
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
        case Me:
          return _a("Suspense");
        case We:
          return _a("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ue:
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
    function dd(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case B:
          return _a(e.type);
        case $e:
          return _a("Lazy");
        case ye:
          return _a("Suspense");
        case le:
          return _a("SuspenseList");
        case R:
        case N:
        case Ne:
          return cu(e.type);
        case Ce:
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
          t += dd(a), a = a.return;
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
    function du(e) {
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
        case Si:
          return "Fragment";
        case sr:
          return "Portal";
        case Ci:
          return "Profiler";
        case ti:
          return "StrictMode";
        case Me:
          return "Suspense";
        case We:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case M:
            var t = e;
            return du(t) + ".Consumer";
          case Ei:
            var a = e;
            return du(a._context) + ".Provider";
          case ue:
            return Ht(e, e.render, "ForwardRef");
          case Et:
            var i = e.displayName || null;
            return i !== null ? i : Ft(e.type) || "Memo";
          case _t: {
            var l = e, s = l._payload, d = l._init;
            try {
              return Ft(d(s));
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
        case Se:
          var i = a;
          return xi(i) + ".Consumer";
        case de:
          var l = a;
          return xi(l._context) + ".Provider";
        case at:
          return "DehydratedFragment";
        case Ce:
          return is(a, a.render, "ForwardRef");
        case ae:
          return "Fragment";
        case B:
          return a;
        case I:
          return "Portal";
        case F:
          return "Root";
        case ie:
          return "Text";
        case $e:
          return Ft(a);
        case oe:
          return a === ti ? "StrictMode" : "Mode";
        case X:
          return "Offscreen";
        case Oe:
          return "Profiler";
        case G:
          return "Scope";
        case ye:
          return "Suspense";
        case le:
          return "SuspenseList";
        case ke:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case w:
        case R:
        case it:
        case N:
        case Re:
        case Ne:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var pu = p.ReactDebugCurrentFrame, fr = null, bi = !1;
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
    function La(e) {
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
      ml[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || h("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || h("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
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
    function pd(e) {
      var t = "";
      return e && (ls(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Ma(e) {
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
      No(e) || (e._valueTracker = Ma(e));
    }
    function Ri(e) {
      if (!e)
        return !1;
      var t = No(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = pd(e);
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
    var vu = !1, hu = !1, Lo = !1, gl = !1;
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
      os("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !hu && (h("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ar() || "A component", t.type), hu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !vu && (h("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ar() || "A component", t.type), vu = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: La(t.value != null ? t.value : i),
        controlled: mu(t)
      };
    }
    function _(e, t) {
      var a = e, i = t.checked;
      i != null && Lr(a, "checked", i, !1);
    }
    function L(e, t) {
      var a = e;
      {
        var i = mu(t);
        !a._wrapperState.controlled && i && !gl && (h("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), gl = !0), a._wrapperState.controlled && !i && !Lo && (h("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Lo = !0);
      }
      _(e, t);
      var l = La(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = Ur(l)) : a.value !== Ur(l) && (a.value = Ur(l));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? lt(a, t.type, l) : t.hasOwnProperty("defaultValue") && lt(a, t.type, La(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
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
            var y = nm(d);
            if (!y)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Ri(d), L(d, y);
          }
        }
      }
    }
    function lt(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ja(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Ur(e._wrapperState.initialValue) : e.defaultValue !== Ur(a) && (e.defaultValue = Ur(a)));
    }
    var De = !1, ct = !1, Nt = !1;
    function It(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? c.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || ct || (ct = !0, h("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Nt || (Nt = !0, h("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !De && (h("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), De = !0);
    }
    function fn(e, t) {
      t.value != null && e.setAttribute("value", Ur(La(t.value)));
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
    var Mo = ["value", "defaultValue"];
    function us(e) {
      {
        os("select", e);
        for (var t = 0; t < Mo.length; t++) {
          var a = Mo[t];
          if (e[a] != null) {
            var i = kt(e[a]);
            e.multiple && !i ? h("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Sn()) : !e.multiple && i && h("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Sn());
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
          var b = d.hasOwnProperty("$" + l[g].value);
          l[g].selected !== b && (l[g].selected = b), b && i && (l[g].defaultSelected = !0);
        }
      } else {
        for (var T = Ur(La(a)), z = null, A = 0; A < l.length; A++) {
          if (l[A].value === T) {
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
      }, t.value !== void 0 && t.defaultValue !== void 0 && !nn && (h("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), nn = !0);
    }
    function vd(e, t) {
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
    function hd(e, t) {
      var a = e, i = t.value;
      i != null && Ji(a, !!t.multiple, i, !1);
    }
    var wv = !1;
    function md(e, t) {
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
    function yd(e, t) {
      var a = e;
      os("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !wv && (h("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ar() || "A component"), wv = !0);
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
        initialValue: La(i)
      };
    }
    function Rv(e, t) {
      var a = e, i = La(t.value), l = La(t.defaultValue);
      if (i != null) {
        var s = Ur(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = Ur(l));
    }
    function kv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Ly(e, t) {
      Rv(e, t);
    }
    var Zi = "http://www.w3.org/1999/xhtml", gd = "http://www.w3.org/1998/Math/MathML", _d = "http://www.w3.org/2000/svg";
    function Sd(e) {
      switch (e) {
        case "svg":
          return _d;
        case "math":
          return gd;
        default:
          return Zi;
      }
    }
    function Cd(e, t) {
      return e == null || e === Zi ? Sd(t) : e === _d && t === "foreignObject" ? Zi : e;
    }
    var Tv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, bc, Dv = Tv(function(e, t) {
      if (e.namespaceURI === _d && !("innerHTML" in e)) {
        bc = bc || document.createElement("div"), bc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = bc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ea = 1, eo = 3, Pn = 8, to = 9, Ed = 11, gu = function(e, t) {
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
    function Ov(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Nv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(fs).forEach(function(e) {
      Nv.forEach(function(t) {
        fs[Ov(t, e)] = fs[e];
      });
    });
    function wc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(fs.hasOwnProperty(e) && fs[e]) ? t + "px" : (ma(t, e), ("" + t).trim());
    }
    var Lv = /([A-Z])/g, Mv = /^ms-/;
    function _u(e) {
      return e.replace(Lv, "-$1").toLowerCase().replace(Mv, "-ms-");
    }
    var jv = function() {
    };
    {
      var My = /^(?:webkit|moz|o)[A-Z]/, jy = /^-ms-/, Av = /-(.)/g, xd = /;\s*$/, ki = {}, Sl = {}, Uv = !1, ds = !1, Ay = function(e) {
        return e.replace(Av, function(t, a) {
          return a.toUpperCase();
        });
      }, zv = function(e) {
        ki.hasOwnProperty(e) && ki[e] || (ki[e] = !0, h(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ay(e.replace(jy, "ms-"))
        ));
      }, bd = function(e) {
        ki.hasOwnProperty(e) && ki[e] || (ki[e] = !0, h("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, wd = function(e, t) {
        Sl.hasOwnProperty(t) && Sl[t] || (Sl[t] = !0, h(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(xd, "")));
      }, Pv = function(e, t) {
        Uv || (Uv = !0, h("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Fv = function(e, t) {
        ds || (ds = !0, h("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      jv = function(e, t) {
        e.indexOf("-") > -1 ? zv(e) : My.test(e) ? bd(e) : xd.test(t) && wd(e, t), typeof t == "number" && (isNaN(t) ? Pv(e, t) : isFinite(t) || Fv(e, t));
      };
    }
    var Iv = jv;
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
    function Vv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || Iv(i, t[i]);
          var s = wc(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function zy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Hv(e) {
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
        var a = Hv(e), i = Hv(t), l = {};
        for (var s in a) {
          var d = a[s], y = i[s];
          if (y && d !== y) {
            var g = d + "," + y;
            if (l[g])
              continue;
            l[g] = !0, h("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", zy(e[d]) ? "Removing" : "Updating", d, y);
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
    }, si), $v = "__html";
    function Rc(e, t) {
      if (t) {
        if (ps[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !($v in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && h("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
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
    function Rd(e, t) {
      {
        if (Nr.call(Su, t) && Su[t])
          return !0;
        if (Cu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = kc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return h("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Su[t] = !0, !0;
          if (t !== i)
            return h("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Su[t] = !0, !0;
        }
        if (Fy.test(t)) {
          var l = t.toLowerCase(), s = kc.hasOwnProperty(l) ? l : null;
          if (s == null)
            return Su[t] = !0, !1;
          if (t !== s)
            return h("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Su[t] = !0, !0;
        }
      }
      return !0;
    }
    function hs(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = Rd(e, i);
          l || a.push(i);
        }
        var s = a.map(function(d) {
          return "`" + d + "`";
        }).join(", ");
        a.length === 1 ? h("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && h("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function kd(e, t) {
      jo(e, t) || hs(e, t);
    }
    var Td = !1;
    function Tc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Td && (Td = !0, e === "select" && t.multiple ? h("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : h("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Cl = function() {
    };
    {
      var dr = {}, Dd = /^on./, Dc = /^on[^A-Z]/, Bv = new RegExp("^(aria)-[" + we + "]*$"), qv = new RegExp("^(aria)[A-Z][" + we + "]*$");
      Cl = function(e, t, a, i) {
        if (Nr.call(dr, t) && dr[t])
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
          if (Dd.test(t))
            return h("Unknown event handler property `%s`. It will be ignored.", t), dr[t] = !0, !0;
        } else if (Dd.test(t))
          return Dc.test(t) && h("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), dr[t] = !0, !0;
        if (Bv.test(t) || qv.test(t))
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
        if (vs.hasOwnProperty(l)) {
          var T = vs[l];
          if (T !== t)
            return h("Invalid DOM property `%s`. Did you mean `%s`?", t, T), dr[t] = !0, !0;
        } else if (!b && t !== l)
          return h("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), dr[t] = !0, !0;
        return typeof a == "boolean" && pn(t, a, g, !1) ? (a ? h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), dr[t] = !0, !0) : b ? !0 : pn(t, a, g, !1) ? (dr[t] = !0, !1) : ((a === "false" || a === "true") && g !== null && g.type === zn && (h("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), dr[t] = !0), !0);
      };
    }
    var Wv = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var s = Cl(e, l, t[l], a);
          s || i.push(l);
        }
        var d = i.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        i.length === 1 ? h("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e) : i.length > 1 && h("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e);
      }
    };
    function Yv(e, t, a) {
      jo(e, t) || Wv(e, t, a);
    }
    var Od = 1, Oc = 2, Aa = 4, Nd = Od | Oc | Aa, El = null;
    function Iy(e) {
      El !== null && h("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), El = e;
    }
    function Vy() {
      El === null && h("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), El = null;
    }
    function ms(e) {
      return e === El;
    }
    function Ld(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === eo ? t.parentNode : t;
    }
    var Nc = null, xl = null, Qt = null;
    function Lc(e) {
      var t = Hu(e);
      if (t) {
        if (typeof Nc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = nm(a);
          Nc(t.stateNode, t.type, i);
        }
      }
    }
    function Mc(e) {
      Nc = e;
    }
    function Eu(e) {
      xl ? Qt ? Qt.push(e) : Qt = [e] : xl = e;
    }
    function Gv() {
      return xl !== null || Qt !== null;
    }
    function jc() {
      if (xl) {
        var e = xl, t = Qt;
        if (xl = null, Qt = null, Lc(e), t)
          for (var a = 0; a < t.length; a++)
            Lc(t[a]);
      }
    }
    var xu = function(e, t) {
      return e(t);
    }, ys = function() {
    }, Ao = !1;
    function Qv() {
      var e = Gv();
      e && (ys(), jc());
    }
    function Kv(e, t, a) {
      if (Ao)
        return e(t, a);
      Ao = !0;
      try {
        return xu(e, t, a);
      } finally {
        Ao = !1, Qv();
      }
    }
    function Hy(e, t, a) {
      xu = e, ys = a;
    }
    function Xv(e) {
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
          return !!(a.disabled && Xv(t));
        default:
          return !1;
      }
    }
    function Uo(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = nm(a);
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
      var b = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, b);
      } catch (T) {
        this.onError(T);
      }
    }
    var zc = Uc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Md = document.createElement("react");
      zc = function(t, a, i, l, s, d, y, g, b) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var T = document.createEvent("Event"), z = !1, A = !0, W = window.event, K = Object.getOwnPropertyDescriptor(window, "event");
        function ee() {
          Md.removeEventListener(te, ut, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = W);
        }
        var Ae = Array.prototype.slice.call(arguments, 3);
        function ut() {
          z = !0, ee(), a.apply(i, Ae), A = !1;
        }
        var Ze, zt = !1, Lt = !1;
        function H($) {
          if (Ze = $.error, zt = !0, Ze === null && $.colno === 0 && $.lineno === 0 && (Lt = !0), $.defaultPrevented && Ze != null && typeof Ze == "object")
            try {
              Ze._suppressLogging = !0;
            } catch {
            }
        }
        var te = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", H), Md.addEventListener(te, ut, !1), T.initEvent(te, !1, !1), Md.dispatchEvent(T), K && Object.defineProperty(window, "event", K), z && A && (zt ? Lt && (Ze = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ze = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ze)), window.removeEventListener("error", H), !z)
          return ee(), Uc.apply(this, arguments);
      };
    }
    var Jv = zc, bu = !1, Pc = null, wu = !1, Ti = null, Zv = {
      onError: function(e) {
        bu = !0, Pc = e;
      }
    };
    function zo(e, t, a, i, l, s, d, y, g) {
      bu = !1, Pc = null, Jv.apply(Zv, arguments);
    }
    function Di(e, t, a, i, l, s, d, y, g) {
      if (zo.apply(this, arguments), bu) {
        var b = Ss();
        wu || (wu = !0, Ti = b);
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
    ), eh = (
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
    ), Io = Cn | jt | Ua | za | wn | na | Fn, Vo = jt | dn | wn | Fn, ao = ta | Ua, In = ro | Ic | Tu, Pa = p.ReactCurrentOwner;
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
    function Li(e) {
      if (e.tag === ye) {
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
    function Mi(e) {
      return e.tag === F ? e.stateNode.containerInfo : null;
    }
    function Rl(e) {
      return Sa(e) === e;
    }
    function th(e) {
      {
        var t = Pa.current;
        if (t !== null && t.tag === w) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || h("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", yt(a) || "A component"), i._warnedAboutRefsInRender = !0;
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
    var jd = v.unstable_scheduleCallback, nh = v.unstable_cancelCallback, Ad = v.unstable_shouldYield, Ud = v.unstable_requestPaint, Jn = v.unstable_now, $c = v.unstable_getCurrentPriorityLevel, Es = v.unstable_ImmediatePriority, Ho = v.unstable_UserBlockingPriority, io = v.unstable_NormalPriority, By = v.unstable_LowPriority, kl = v.unstable_IdlePriority, Bc = v.unstable_yieldValue, rh = v.unstable_setDisableYieldValue, Tl = null, On = null, je = null, Ca = !1, ia = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Du(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return h("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        tt && (e = wt({}, e, {
          getLaneLabelMap: Dl,
          injectProfilingHooks: Ia
        })), Tl = t.inject(e), On = t;
      } catch (a) {
        h("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function zd(e, t) {
      if (On && typeof On.onScheduleFiberRoot == "function")
        try {
          On.onScheduleFiberRoot(Tl, e, t);
        } catch (a) {
          Ca || (Ca = !0, h("React instrumentation encountered an error: %s", a));
        }
    }
    function Pd(e, t) {
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
          Ca || (Ca = !0, h("React instrumentation encountered an error: %s", l));
        }
    }
    function Fd(e) {
      if (On && typeof On.onPostCommitFiberRoot == "function")
        try {
          On.onPostCommitFiberRoot(Tl, e);
        } catch (t) {
          Ca || (Ca = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function Id(e) {
      if (On && typeof On.onCommitFiberUnmount == "function")
        try {
          On.onCommitFiberUnmount(Tl, e);
        } catch (t) {
          Ca || (Ca = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function En(e) {
      if (typeof Bc == "function" && (rh(e), x(e)), On && typeof On.setStrictMode == "function")
        try {
          On.setStrictMode(Tl, e);
        } catch (t) {
          Ca || (Ca = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function Ia(e) {
      je = e;
    }
    function Dl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Ll; a++) {
          var i = lh(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Vd(e) {
      je !== null && typeof je.markCommitStarted == "function" && je.markCommitStarted(e);
    }
    function Hd() {
      je !== null && typeof je.markCommitStopped == "function" && je.markCommitStopped();
    }
    function Ea(e) {
      je !== null && typeof je.markComponentRenderStarted == "function" && je.markComponentRenderStarted(e);
    }
    function xa() {
      je !== null && typeof je.markComponentRenderStopped == "function" && je.markComponentRenderStopped();
    }
    function $d(e) {
      je !== null && typeof je.markComponentPassiveEffectMountStarted == "function" && je.markComponentPassiveEffectMountStarted(e);
    }
    function ah() {
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
    function ih() {
      je !== null && typeof je.markComponentLayoutEffectMountStopped == "function" && je.markComponentLayoutEffectMountStopped();
    }
    function xs(e) {
      je !== null && typeof je.markComponentLayoutEffectUnmountStarted == "function" && je.markComponentLayoutEffectUnmountStarted(e);
    }
    function Bd() {
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
    function qd() {
      je !== null && typeof je.markPassiveEffectsStopped == "function" && je.markPassiveEffectsStopped();
    }
    function Nl(e) {
      je !== null && typeof je.markRenderStarted == "function" && je.markRenderStarted(e);
    }
    function oh() {
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
    ), $t = (
      /*                    */
      2
    ), rn = (
      /*               */
      8
    ), Bt = (
      /*              */
      16
    ), Vn = Math.clz32 ? Math.clz32 : Ts, ar = Math.log, Gc = Math.LN2;
    function Ts(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (ar(t) / Gc | 0) | 0;
    }
    var Ll = 31, se = (
      /*                        */
      0
    ), Vt = (
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
    ), Ml = (
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
    ), Wd = Al, Ls = (
      /*          */
      134217728
    ), Yd = (
      /*                          */
      268435455
    ), Ms = (
      /*               */
      268435456
    ), Ul = (
      /*                        */
      536870912
    ), oa = (
      /*                   */
      1073741824
    );
    function lh(e) {
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
        if (e & Ls)
          return "SelectiveHydration";
        if (e & Ms)
          return "IdleHydration";
        if (e & Ul)
          return "Idle";
        if (e & oa)
          return "Offscreen";
      }
    }
    var ln = -1, zl = Ml, cf = Al;
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
        case Ml:
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
        case Ls:
          return Ls;
        case Ms:
          return Ms;
        case Ul:
          return Ul;
        case oa:
          return oa;
        default:
          return h("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ff(e, t) {
      var a = e.pendingLanes;
      if (a === se)
        return se;
      var i = se, l = e.suspendedLanes, s = e.pingedLanes, d = a & Yd;
      if (d !== se) {
        var y = d & ~l;
        if (y !== se)
          i = js(y);
        else {
          var g = d & s;
          g !== se && (i = js(g));
        }
      } else {
        var b = a & ~l;
        b !== se ? i = js(b) : s !== se && (i = js(s));
      }
      if (i === se)
        return se;
      if (t !== se && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === se) {
        var T = Wo(i), z = Wo(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= z || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === Nn && (z & qo) !== se
        )
          return t;
      }
      (i & fi) !== se && (i |= a & Nn);
      var A = e.entangledLanes;
      if (A !== se)
        for (var W = e.entanglements, K = i & A; K > 0; ) {
          var ee = Hn(K), Ae = 1 << ee;
          i |= W[ee], K &= ~Ae;
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
    function Gd(e, t) {
      switch (e) {
        case pt:
        case Bo:
        case fi:
          return t + 250;
        case Tr:
        case Nn:
        case lo:
        case Ml:
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
        case Ls:
        case Ms:
        case Ul:
        case oa:
          return ln;
        default:
          return h("Should have found matching lanes. This is a bug in React."), ln;
      }
    }
    function df(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, d = a; d > 0; ) {
        var y = Hn(d), g = 1 << y, b = s[y];
        b === ln ? ((g & i) === se || (g & l) !== se) && (s[y] = Gd(g, t)) : b <= t && (e.expiredLanes |= g), d &= ~g;
      }
    }
    function uh(e) {
      return js(e.pendingLanes);
    }
    function pf(e) {
      var t = e.pendingLanes & ~oa;
      return t !== se ? t : t & oa ? oa : se;
    }
    function sh(e) {
      return (e & pt) !== se;
    }
    function As(e) {
      return (e & Yd) !== se;
    }
    function Pl(e) {
      return (e & Os) === e;
    }
    function Qd(e) {
      var t = pt | fi | Nn;
      return (e & t) === se;
    }
    function Kd(e) {
      return (e & qo) === e;
    }
    function vf(e, t) {
      var a = Bo | fi | Tr | Nn;
      return (t & a) !== se;
    }
    function ch(e, t) {
      return (t & e.expiredLanes) !== se;
    }
    function Xd(e) {
      return (e & qo) !== se;
    }
    function Jd() {
      var e = zl;
      return zl <<= 1, (zl & qo) === se && (zl = Ml), e;
    }
    function fh() {
      var e = cf;
      return cf <<= 1, (cf & Os) === se && (cf = Al), e;
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
      return (e & t) !== se;
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
    function Zd(e, t) {
      return e & t;
    }
    function dh(e) {
      return e;
    }
    function ph(e, t) {
      return e !== Vt && e < t ? e : t;
    }
    function Ps(e) {
      for (var t = [], a = 0; a < Ll; a++)
        t.push(e);
      return t;
    }
    function Lu(e, t, a) {
      e.pendingLanes |= t, t !== Ul && (e.suspendedLanes = se, e.pingedLanes = se);
      var i = e.eventTimes, l = pr(t);
      i[l] = a;
    }
    function vh(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = Hn(i), s = 1 << l;
        a[l] = ln, i &= ~s;
      }
    }
    function hf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function ep(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = se, e.pingedLanes = se, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, d = a; d > 0; ) {
        var y = Hn(d), g = 1 << y;
        i[y] = se, l[y] = ln, s[y] = ln, d &= ~g;
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
    function tp(e, t) {
      var a = Wo(t), i;
      switch (a) {
        case fi:
          i = Bo;
          break;
        case Nn:
          i = Tr;
          break;
        case Ml:
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
          i = Ms;
          break;
        default:
          i = Vt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Vt ? Vt : i;
    }
    function Fs(e, t, a) {
      if (ia)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = pr(a), s = 1 << l, d = i[l];
          d.add(t), a &= ~s;
        }
    }
    function hh(e, t) {
      if (ia)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = pr(t), s = 1 << l, d = a[l];
          d.size > 0 && (d.forEach(function(y) {
            var g = y.alternate;
            (g === null || !i.has(g)) && i.add(y);
          }), d.clear()), t &= ~s;
        }
    }
    function np(e, t) {
      return null;
    }
    var zr = pt, Ai = fi, Va = Nn, Ha = Ul, Is = Vt;
    function $a() {
      return Is;
    }
    function $n(e) {
      Is = e;
    }
    function mh(e, t) {
      var a = Is;
      try {
        return Is = e, t();
      } finally {
        Is = a;
      }
    }
    function yh(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Vs(e, t) {
      return e > t ? e : t;
    }
    function ir(e, t) {
      return e !== 0 && e < t;
    }
    function gh(e) {
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
    var Be;
    function Mu(e) {
      Be = e;
    }
    var gf;
    function _h(e) {
      gf = e;
    }
    var Sh;
    function $s(e) {
      Sh = e;
    }
    var Bs;
    function rp(e) {
      Bs = e;
    }
    var _f = !1, qs = [], uo = null, Ui = null, zi = null, Ln = /* @__PURE__ */ new Map(), Pr = /* @__PURE__ */ new Map(), Fr = [], Ch = [
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
    function Eh(e) {
      return Ch.indexOf(e) > -1;
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
    function ap(e, t) {
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
    function ua(e, t, a, i, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var d = pi(t, a, i, l, s);
        if (t !== null) {
          var y = Hu(t);
          y !== null && Be(y);
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
          var g = l, b = g.pointerId;
          return Ln.set(b, ua(Ln.get(b) || null, e, t, a, i, g)), !0;
        }
        case "gotpointercapture": {
          var T = l, z = T.pointerId;
          return Pr.set(z, ua(Pr.get(z) || null, e, t, a, i, T)), !0;
        }
      }
      return !1;
    }
    function ip(e) {
      var t = rc(e.target);
      if (t !== null) {
        var a = Sa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === ye) {
            var l = Li(a);
            if (l !== null) {
              e.blockedOn = l, Bs(e.priority, function() {
                gf(a);
              });
              return;
            }
          } else if (i === F) {
            var s = a.stateNode;
            if (yf(s)) {
              e.blockedOn = Mi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function xh(e) {
      for (var t = Sh(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Fr.length && ir(t, Fr[i].priority); i++)
        ;
      Fr.splice(i, 0, a), i === 0 && ip(a);
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
          return d !== null && Be(d), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function op(e, t, a) {
      Ws(e) && a.delete(t);
    }
    function Yy() {
      _f = !1, uo !== null && Ws(uo) && (uo = null), Ui !== null && Ws(Ui) && (Ui = null), zi !== null && Ws(zi) && (zi = null), Ln.forEach(op), Pr.forEach(op);
    }
    function Yo(e, t) {
      e.blockedOn === t && (e.blockedOn = null, _f || (_f = !0, v.unstable_scheduleCallback(v.unstable_NormalPriority, Yy)));
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
      Ln.forEach(i), Pr.forEach(i);
      for (var l = 0; l < Fr.length; l++) {
        var s = Fr[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Fr.length > 0; ) {
        var d = Fr[0];
        if (d.blockedOn !== null)
          break;
        ip(d), d.blockedOn === null && Fr.shift();
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
          l = Mn;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function ba(e, t, a, i) {
      var l = $a(), s = vr.transition;
      vr.transition = null;
      try {
        $n(zr), Mn(e, t, a, i);
      } finally {
        $n(l), vr.transition = s;
      }
    }
    function ju(e, t, a, i) {
      var l = $a(), s = vr.transition;
      vr.transition = null;
      try {
        $n(Ai), Mn(e, t, a, i);
      } finally {
        $n(l), vr.transition = s;
      }
    }
    function Mn(e, t, a, i) {
      At && Ys(e, t, a, i);
    }
    function Ys(e, t, a, i) {
      var l = Au(e, t, a, i);
      if (l === null) {
        cg(e, t, i, Pi, a), ap(e, i);
        return;
      }
      if (Wy(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (ap(e, i), t & Aa && Eh(e)) {
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
      var l = Ld(i), s = rc(l);
      if (s !== null) {
        var d = Sa(s);
        if (d === null)
          s = null;
        else {
          var y = d.tag;
          if (y === ye) {
            var g = Li(d);
            if (g !== null)
              return g;
            s = null;
          } else if (y === F) {
            var b = d.stateNode;
            if (yf(b))
              return Mi(d);
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
    function lp(e, t, a, i) {
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
        var b = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return b ? this.isDefaultPrevented = Pu : this.isDefaultPrevented = Ks, this.isPropagationStopped = Ks, this;
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
    }), up = Or(vi), sp = wt({}, vi, {
      dataTransfer: 0
    }), $l = Or(sp), cp = wt({}, Ir, {
      relatedTarget: 0
    }), co = Or(cp), bh = wt({}, qn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), wh = Or(bh), fp = wt({}, qn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), xf = Or(fp), Qy = wt({}, qn, {
      data: 0
    }), Rh = Or(Qy), kh = Rh, Th = {
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
        var t = Th[e.key] || e.key;
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
    function Dh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Fu[e];
      return i ? !!a[i] : !1;
    }
    function gn(e) {
      return Dh;
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
    }), Oh = Or(Xy), Jy = wt({}, vi, {
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
    }), Nh = Or(Jy), Lh = wt({}, Ir, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: gn
    }), Mh = Or(Lh), Zy = wt({}, qn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ba = Or(Zy), dp = wt({}, vi, {
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
    }), eg = Or(dp), Ko = [9, 13, 27, 32], Js = 229, fo = Un && "CompositionEvent" in window, Xo = null;
    Un && "documentMode" in document && (Xo = document.documentMode);
    var pp = Un && "TextEvent" in window && !Xo, bf = Un && (!fo || Xo && Xo > 8 && Xo <= 11), jh = 32, wf = String.fromCharCode(jh);
    function tg() {
      ht("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ht("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ht("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ht("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var vp = !1;
    function Ah(e) {
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
    function hp(e, t) {
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
    function Uh(e) {
      return e.locale === "ko";
    }
    var ql = !1;
    function mp(e, t, a, i, l) {
      var s, d;
      if (fo ? s = Rf(t) : ql ? hp(t, i) && (s = "onCompositionEnd") : kf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      bf && !Uh(i) && (!ql && s === "onCompositionStart" ? ql = Go(l) : s === "onCompositionEnd" && ql && (d = so()));
      var y = $h(a, s);
      if (y.length > 0) {
        var g = new Rh(s, t, null, i, l);
        if (e.push({
          event: g,
          listeners: y
        }), d)
          g.data = d;
        else {
          var b = Tf(i);
          b !== null && (g.data = b);
        }
      }
    }
    function Df(e, t) {
      switch (e) {
        case "compositionend":
          return Tf(t);
        case "keypress":
          var a = t.which;
          return a !== jh ? null : (vp = !0, wf);
        case "textInput":
          var i = t.data;
          return i === wf && vp ? null : i;
        default:
          return null;
      }
    }
    function yp(e, t) {
      if (ql) {
        if (e === "compositionend" || !fo && hp(e, t)) {
          var a = so();
          return Cf(), ql = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Ah(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return bf && !Uh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Of(e, t, a, i, l) {
      var s;
      if (pp ? s = Df(t, i) : s = yp(t, i), !s)
        return null;
      var d = $h(a, "onBeforeInput");
      if (d.length > 0) {
        var y = new kh("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: y,
          listeners: d
        }), y.data = s;
      }
    }
    function zh(e, t, a, i, l, s, d) {
      mp(e, t, a, i, l), Of(e, t, a, i, l);
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
    function Ph(e, t, a, i) {
      Eu(i);
      var l = $h(t, "onChange");
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
      Ph(t, n, e, Ld(e)), Kv(u, t);
    }
    function u(e) {
      b_(e, 0);
    }
    function f(e) {
      var t = Uf(e);
      if (Ri(t))
        return e;
    }
    function m(e, t) {
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
      e.propertyName === "value" && f(n) && o(e);
    }
    function pe(e, t, a) {
      e === "focusin" ? (j(), O(t, a)) : e === "focusout" && j();
    }
    function he(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return f(n);
    }
    function fe(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Pe(e, t) {
      if (e === "click")
        return f(t);
    }
    function Ge(e, t) {
      if (e === "input" || e === "change")
        return f(t);
    }
    function Xe(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || lt(e, "number", e.value);
    }
    function jn(e, t, a, i, l, s, d) {
      var y = a ? Uf(a) : window, g, b;
      if (r(y) ? g = m : Zs(y) ? C ? g = Ge : (g = he, b = pe) : fe(y) && (g = Pe), g) {
        var T = g(t, a);
        if (T) {
          Ph(e, T, i, l);
          return;
        }
      }
      b && b(t, y, a), t === "focusout" && Xe(y);
    }
    function V() {
      Xt("onMouseEnter", ["mouseout", "mouseover"]), Xt("onMouseLeave", ["mouseout", "mouseover"]), Xt("onPointerEnter", ["pointerout", "pointerover"]), Xt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function U(e, t, a, i, l, s, d) {
      var y = t === "mouseover" || t === "pointerover", g = t === "mouseout" || t === "pointerout";
      if (y && !ms(i)) {
        var b = i.relatedTarget || i.fromElement;
        if (b && (rc(b) || Np(b)))
          return;
      }
      if (!(!g && !y)) {
        var T;
        if (l.window === l)
          T = l;
        else {
          var z = l.ownerDocument;
          z ? T = z.defaultView || z.parentWindow : T = window;
        }
        var A, W;
        if (g) {
          var K = i.relatedTarget || i.toElement;
          if (A = a, W = K ? rc(K) : null, W !== null) {
            var ee = Sa(W);
            (W !== ee || W.tag !== B && W.tag !== ie) && (W = null);
          }
        } else
          A = null, W = a;
        if (A !== W) {
          var Ae = up, ut = "onMouseLeave", Ze = "onMouseEnter", zt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Ae = Nh, ut = "onPointerLeave", Ze = "onPointerEnter", zt = "pointer");
          var Lt = A == null ? T : Uf(A), H = W == null ? T : Uf(W), te = new Ae(ut, zt + "leave", A, i, l);
          te.target = Lt, te.relatedTarget = H;
          var $ = null, me = rc(l);
          if (me === a) {
            var Ve = new Ae(Ze, zt + "enter", W, i, l);
            Ve.target = H, Ve.relatedTarget = Lt, $ = Ve;
          }
          mx(e, te, $, A, W);
        }
      }
    }
    function q(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ve = typeof Object.is == "function" ? Object.is : q;
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
        if (!Nr.call(t, s) || !ve(e[s], t[s]))
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
      return qt(e, l, s, d, y);
    }
    function qt(e, t, a, i, l) {
      var s = 0, d = -1, y = -1, g = 0, b = 0, T = e, z = null;
      e: for (; ; ) {
        for (var A = null; T === t && (a === 0 || T.nodeType === eo) && (d = s + a), T === i && (l === 0 || T.nodeType === eo) && (y = s + l), T.nodeType === eo && (s += T.nodeValue.length), (A = T.firstChild) !== null; )
          z = T, T = A;
        for (; ; ) {
          if (T === e)
            break e;
          if (z === t && ++g === a && (d = s), z === i && ++b === l && (y = s), (A = T.nextSibling) !== null)
            break;
          T = z, z = T.parentNode;
        }
        T = A;
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
        var b = mt(e, d), T = mt(e, y);
        if (b && T) {
          if (l.rangeCount === 1 && l.anchorNode === b.node && l.anchorOffset === b.offset && l.focusNode === T.node && l.focusOffset === T.offset)
            return;
          var z = a.createRange();
          z.setStart(b.node, b.offset), l.removeAllRanges(), d > y ? (l.addRange(z), l.extend(T.node, T.offset)) : (z.setEnd(T.node, T.offset), l.addRange(z));
        }
      }
    }
    function Fh(e) {
      return e && e.nodeType === eo;
    }
    function p_(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Fh(e) ? !1 : Fh(t) ? p_(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function JE(e) {
      return e && e.ownerDocument && p_(e.ownerDocument.documentElement, e);
    }
    function ZE(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function v_() {
      for (var e = window, t = ja(); t instanceof e.HTMLIFrameElement; ) {
        if (ZE(t))
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
    function ex() {
      var e = v_();
      return {
        focusedElem: e,
        selectionRange: ag(e) ? nx(e) : null
      };
    }
    function tx(e) {
      var t = v_(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && JE(a)) {
        i !== null && ag(a) && rx(a, i);
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
    function nx(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = or(e), t || {
        start: 0,
        end: 0
      };
    }
    function rx(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Zo(e, t);
    }
    var ax = Un && "documentMode" in document && document.documentMode <= 11;
    function ix() {
      ht("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Nf = null, ig = null, gp = null, og = !1;
    function ox(e) {
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
    function lx(e) {
      return e.window === e ? e.document : e.nodeType === to ? e : e.ownerDocument;
    }
    function h_(e, t, a) {
      var i = lx(a);
      if (!(og || Nf == null || Nf !== ja(i))) {
        var l = ox(Nf);
        if (!gp || !Qe(gp, l)) {
          gp = l;
          var s = $h(ig, "onSelect");
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
    function ux(e, t, a, i, l, s, d) {
      var y = a ? Uf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (Zs(y) || y.contentEditable === "true") && (Nf = y, ig = a, gp = null);
          break;
        case "focusout":
          Nf = null, ig = null, gp = null;
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
          if (ax)
            break;
        // falls through
        case "keydown":
        case "keyup":
          h_(e, i, l);
      }
    }
    function Ih(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Lf = {
      animationend: Ih("Animation", "AnimationEnd"),
      animationiteration: Ih("Animation", "AnimationIteration"),
      animationstart: Ih("Animation", "AnimationStart"),
      transitionend: Ih("Transition", "TransitionEnd")
    }, lg = {}, m_ = {};
    Un && (m_ = document.createElement("div").style, "AnimationEvent" in window || (delete Lf.animationend.animation, delete Lf.animationiteration.animation, delete Lf.animationstart.animation), "TransitionEvent" in window || delete Lf.transitionend.transition);
    function Vh(e) {
      if (lg[e])
        return lg[e];
      if (!Lf[e])
        return e;
      var t = Lf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in m_)
          return lg[e] = t[a];
      return e;
    }
    var y_ = Vh("animationend"), g_ = Vh("animationiteration"), __ = Vh("animationstart"), S_ = Vh("transitionend"), C_ = /* @__PURE__ */ new Map(), E_ = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Iu(e, t) {
      C_.set(e, t), ht(t, [e]);
    }
    function sx() {
      for (var e = 0; e < E_.length; e++) {
        var t = E_[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Iu(a, "on" + i);
      }
      Iu(y_, "onAnimationEnd"), Iu(g_, "onAnimationIteration"), Iu(__, "onAnimationStart"), Iu("dblclick", "onDoubleClick"), Iu("focusin", "onFocus"), Iu("focusout", "onBlur"), Iu(S_, "onTransitionEnd");
    }
    function cx(e, t, a, i, l, s, d) {
      var y = C_.get(t);
      if (y !== void 0) {
        var g = Fi, b = t;
        switch (t) {
          case "keypress":
            if (Qo(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            g = Oh;
            break;
          case "focusin":
            b = "focus", g = co;
            break;
          case "focusout":
            b = "blur", g = co;
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
            g = up;
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
            g = wh;
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
            g = Nh;
            break;
        }
        var T = (s & Aa) !== 0;
        {
          var z = !T && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", A = vx(a, y, i.type, T, z);
          if (A.length > 0) {
            var W = new g(y, b, null, i, l);
            e.push({
              event: W,
              listeners: A
            });
          }
        }
      }
    }
    sx(), V(), ec(), ix(), tg();
    function fx(e, t, a, i, l, s, d) {
      cx(e, t, a, i, l, s);
      var y = (s & Nd) === 0;
      y && (U(e, t, a, i, l), jn(e, t, a, i, l), ux(e, t, a, i, l), zh(e, t, a, i, l));
    }
    var _p = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], ug = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(_p));
    function x_(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Di(i, t, void 0, e), e.currentTarget = null;
    }
    function dx(e, t, a) {
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
          var T = t[b], z = T.instance, A = T.currentTarget, W = T.listener;
          if (z !== i && e.isPropagationStopped())
            return;
          x_(e, W, A), i = z;
        }
    }
    function b_(e, t) {
      for (var a = (t & Aa) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, d = l.listeners;
        dx(s, d, a);
      }
      _s();
    }
    function px(e, t, a, i, l) {
      var s = Ld(a), d = [];
      fx(d, e, i, a, s, t), b_(d, t);
    }
    function bn(e, t) {
      ug.has(e) || h('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = $b(t), l = yx(e);
      i.has(l) || (w_(t, e, Oc, a), i.add(l));
    }
    function sg(e, t, a) {
      ug.has(e) && !t && h('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Aa), w_(a, e, i, t);
    }
    var Hh = "_reactListening" + Math.random().toString(36).slice(2);
    function Sp(e) {
      if (!e[Hh]) {
        e[Hh] = !0, ot.forEach(function(a) {
          a !== "selectionchange" && (ug.has(a) || sg(a, !1, e), sg(a, !0, e));
        });
        var t = e.nodeType === to ? e : e.ownerDocument;
        t !== null && (t[Hh] || (t[Hh] = !0, sg("selectionchange", !1, t)));
      }
    }
    function w_(e, t, a, i, l) {
      var s = hr(e, t, a), d = void 0;
      gs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (d = !0), e = e, i ? d !== void 0 ? lp(e, t, s, d) : sa(e, t, s) : d !== void 0 ? Uu(e, t, s, d) : Gs(e, t, s);
    }
    function R_(e, t) {
      return e === t || e.nodeType === Pn && e.parentNode === t;
    }
    function cg(e, t, a, i, l) {
      var s = i;
      if ((t & Od) === 0 && (t & Oc) === 0) {
        var d = l;
        if (i !== null) {
          var y = i;
          e: for (; ; ) {
            if (y === null)
              return;
            var g = y.tag;
            if (g === F || g === I) {
              var b = y.stateNode.containerInfo;
              if (R_(b, d))
                break;
              if (g === I)
                for (var T = y.return; T !== null; ) {
                  var z = T.tag;
                  if (z === F || z === I) {
                    var A = T.stateNode.containerInfo;
                    if (R_(A, d))
                      return;
                  }
                  T = T.return;
                }
              for (; b !== null; ) {
                var W = rc(b);
                if (W === null)
                  return;
                var K = W.tag;
                if (K === B || K === ie) {
                  y = s = W;
                  continue e;
                }
                b = b.parentNode;
              }
            }
            y = y.return;
          }
        }
      }
      Kv(function() {
        return px(e, t, a, s);
      });
    }
    function Cp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function vx(e, t, a, i, l, s) {
      for (var d = t !== null ? t + "Capture" : null, y = i ? d : t, g = [], b = e, T = null; b !== null; ) {
        var z = b, A = z.stateNode, W = z.tag;
        if (W === B && A !== null && (T = A, y !== null)) {
          var K = Uo(b, y);
          K != null && g.push(Cp(b, K, T));
        }
        if (l)
          break;
        b = b.return;
      }
      return g;
    }
    function $h(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, d = s.stateNode, y = s.tag;
        if (y === B && d !== null) {
          var g = d, b = Uo(l, a);
          b != null && i.unshift(Cp(l, b, g));
          var T = Uo(l, t);
          T != null && i.push(Cp(l, T, g));
        }
        l = l.return;
      }
      return i;
    }
    function Mf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== B);
      return e || null;
    }
    function hx(e, t) {
      for (var a = e, i = t, l = 0, s = a; s; s = Mf(s))
        l++;
      for (var d = 0, y = i; y; y = Mf(y))
        d++;
      for (; l - d > 0; )
        a = Mf(a), l--;
      for (; d - l > 0; )
        i = Mf(i), d--;
      for (var g = l; g--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Mf(a), i = Mf(i);
      }
      return null;
    }
    function k_(e, t, a, i, l) {
      for (var s = t._reactName, d = [], y = a; y !== null && y !== i; ) {
        var g = y, b = g.alternate, T = g.stateNode, z = g.tag;
        if (b !== null && b === i)
          break;
        if (z === B && T !== null) {
          var A = T;
          if (l) {
            var W = Uo(y, s);
            W != null && d.unshift(Cp(y, W, A));
          } else if (!l) {
            var K = Uo(y, s);
            K != null && d.push(Cp(y, K, A));
          }
        }
        y = y.return;
      }
      d.length !== 0 && e.push({
        event: t,
        listeners: d
      });
    }
    function mx(e, t, a, i, l) {
      var s = i && l ? hx(i, l) : null;
      i !== null && k_(e, t, i, s, !1), l !== null && a !== null && k_(e, a, l, s, !0);
    }
    function yx(e, t) {
      return e + "__bubble";
    }
    var qa = !1, Ep = "dangerouslySetInnerHTML", Bh = "suppressContentEditableWarning", Vu = "suppressHydrationWarning", T_ = "autoFocus", tc = "children", nc = "style", qh = "__html", fg, Wh, xp, D_, Yh, O_, N_;
    fg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Wh = function(e, t) {
      kd(e, t), Tc(e, t), Yv(e, t, {
        registrationNameDependencies: Ue,
        possibleRegistrationNames: dt
      });
    }, O_ = Un && !document.documentMode, xp = function(e, t, a) {
      if (!qa) {
        var i = Gh(a), l = Gh(t);
        l !== i && (qa = !0, h("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, D_ = function(e) {
      if (!qa) {
        qa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), h("Extra attributes from the server: %s", t);
      }
    }, Yh = function(e, t) {
      t === !1 ? h("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : h("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, N_ = function(e, t) {
      var a = e.namespaceURI === Zi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var gx = /\r\n?/g, _x = /\u0000|\uFFFD/g;
    function Gh(e) {
      tr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(gx, `
`).replace(_x, "");
    }
    function Qh(e, t, a, i) {
      var l = Gh(t), s = Gh(e);
      if (s !== l && (i && (qa || (qa = !0, h('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && xe))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function L_(e) {
      return e.nodeType === to ? e : e.ownerDocument;
    }
    function Sx() {
    }
    function Kh(e) {
      e.onclick = Sx;
    }
    function Cx(e, t, a, i, l) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var d = i[s];
          if (s === nc)
            d && Object.freeze(d), Vv(t, d);
          else if (s === Ep) {
            var y = d ? d[qh] : void 0;
            y != null && Dv(t, y);
          } else if (s === tc)
            if (typeof d == "string") {
              var g = e !== "textarea" || d !== "";
              g && gu(t, d);
            } else typeof d == "number" && gu(t, "" + d);
          else s === Bh || s === Vu || s === T_ || (Ue.hasOwnProperty(s) ? d != null && (typeof d != "function" && Yh(s, d), s === "onScroll" && bn("scroll", t)) : d != null && Lr(t, s, d, l));
        }
    }
    function Ex(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], d = t[l + 1];
        s === nc ? Vv(e, d) : s === Ep ? Dv(e, d) : s === tc ? gu(e, d) : Lr(e, s, d, i);
      }
    }
    function xx(e, t, a, i) {
      var l, s = L_(a), d, y = i;
      if (y === Zi && (y = Sd(e)), y === Zi) {
        if (l = jo(e, t), !l && e !== e.toLowerCase() && h("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return y === Zi && !l && Object.prototype.toString.call(d) === "[object HTMLUnknownElement]" && !Nr.call(fg, e) && (fg[e] = !0, h("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), d;
    }
    function bx(e, t) {
      return L_(t).createTextNode(e);
    }
    function wx(e, t, a, i) {
      var l = jo(t, a);
      Wh(t, a);
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
          for (var d = 0; d < _p.length; d++)
            bn(_p[d], e);
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
          It(e, a), s = a;
          break;
        case "select":
          _l(e, a), s = ss(e, a), bn("invalid", e);
          break;
        case "textarea":
          yd(e, a), s = md(e, a), bn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Rc(t, s), Cx(t, e, i, s, l), t) {
        case "input":
          li(e), Y(e, a, !1);
          break;
        case "textarea":
          li(e), kv(e);
          break;
        case "option":
          fn(e, a);
          break;
        case "select":
          vd(e, a);
          break;
        default:
          typeof s.onClick == "function" && Kh(e);
          break;
      }
    }
    function Rx(e, t, a, i, l) {
      Wh(t, i);
      var s = null, d, y;
      switch (t) {
        case "input":
          d = yu(e, a), y = yu(e, i), s = [];
          break;
        case "select":
          d = ss(e, a), y = ss(e, i), s = [];
          break;
        case "textarea":
          d = md(e, a), y = md(e, i), s = [];
          break;
        default:
          d = a, y = i, typeof d.onClick != "function" && typeof y.onClick == "function" && Kh(e);
          break;
      }
      Rc(t, y);
      var g, b, T = null;
      for (g in d)
        if (!(y.hasOwnProperty(g) || !d.hasOwnProperty(g) || d[g] == null))
          if (g === nc) {
            var z = d[g];
            for (b in z)
              z.hasOwnProperty(b) && (T || (T = {}), T[b] = "");
          } else g === Ep || g === tc || g === Bh || g === Vu || g === T_ || (Ue.hasOwnProperty(g) ? s || (s = []) : (s = s || []).push(g, null));
      for (g in y) {
        var A = y[g], W = d?.[g];
        if (!(!y.hasOwnProperty(g) || A === W || A == null && W == null))
          if (g === nc)
            if (A && Object.freeze(A), W) {
              for (b in W)
                W.hasOwnProperty(b) && (!A || !A.hasOwnProperty(b)) && (T || (T = {}), T[b] = "");
              for (b in A)
                A.hasOwnProperty(b) && W[b] !== A[b] && (T || (T = {}), T[b] = A[b]);
            } else
              T || (s || (s = []), s.push(g, T)), T = A;
          else if (g === Ep) {
            var K = A ? A[qh] : void 0, ee = W ? W[qh] : void 0;
            K != null && ee !== K && (s = s || []).push(g, K);
          } else g === tc ? (typeof A == "string" || typeof A == "number") && (s = s || []).push(g, "" + A) : g === Bh || g === Vu || (Ue.hasOwnProperty(g) ? (A != null && (typeof A != "function" && Yh(g, A), g === "onScroll" && bn("scroll", e)), !s && W !== A && (s = [])) : (s = s || []).push(g, A));
      }
      return T && (Py(T, y[nc]), (s = s || []).push(nc, T)), s;
    }
    function kx(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && _(e, l);
      var s = jo(a, i), d = jo(a, l);
      switch (Ex(e, t, s, d), a) {
        case "input":
          L(e, l);
          break;
        case "textarea":
          Rv(e, l);
          break;
        case "select":
          xc(e, l);
          break;
      }
    }
    function Tx(e) {
      {
        var t = e.toLowerCase();
        return vs.hasOwnProperty(t) && vs[t] || null;
      }
    }
    function Dx(e, t, a, i, l, s, d) {
      var y, g;
      switch (y = jo(t, a), Wh(t, a), t) {
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
          for (var b = 0; b < _p.length; b++)
            bn(_p[b], e);
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
          It(e, a);
          break;
        case "select":
          _l(e, a), bn("invalid", e);
          break;
        case "textarea":
          yd(e, a), bn("invalid", e);
          break;
      }
      Rc(t, a);
      {
        g = /* @__PURE__ */ new Set();
        for (var T = e.attributes, z = 0; z < T.length; z++) {
          var A = T[z].name.toLowerCase();
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
              g.add(T[z].name);
          }
        }
      }
      var W = null;
      for (var K in a)
        if (a.hasOwnProperty(K)) {
          var ee = a[K];
          if (K === tc)
            typeof ee == "string" ? e.textContent !== ee && (a[Vu] !== !0 && Qh(e.textContent, ee, s, d), W = [tc, ee]) : typeof ee == "number" && e.textContent !== "" + ee && (a[Vu] !== !0 && Qh(e.textContent, ee, s, d), W = [tc, "" + ee]);
          else if (Ue.hasOwnProperty(K))
            ee != null && (typeof ee != "function" && Yh(K, ee), K === "onScroll" && bn("scroll", e));
          else if (d && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof y == "boolean") {
            var Ae = void 0, ut = sn(K);
            if (a[Vu] !== !0) {
              if (!(K === Bh || K === Vu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              K === "value" || K === "checked" || K === "selected")) {
                if (K === Ep) {
                  var Ze = e.innerHTML, zt = ee ? ee[qh] : void 0;
                  if (zt != null) {
                    var Lt = N_(e, zt);
                    Lt !== Ze && xp(K, Ze, Lt);
                  }
                } else if (K === nc) {
                  if (g.delete(K), O_) {
                    var H = Uy(ee);
                    Ae = e.getAttribute("style"), H !== Ae && xp(K, Ae, H);
                  }
                } else if (y && !P)
                  g.delete(K.toLowerCase()), Ae = dl(e, K, ee), ee !== Ae && xp(K, Ae, ee);
                else if (!_n(K, ut, y) && !nr(K, ee, ut, y)) {
                  var te = !1;
                  if (ut !== null)
                    g.delete(ut.attributeName), Ae = wo(e, K, ee, ut);
                  else {
                    var $ = i;
                    if ($ === Zi && ($ = Sd(t)), $ === Zi)
                      g.delete(K.toLowerCase());
                    else {
                      var me = Tx(K);
                      me !== null && me !== K && (te = !0, g.delete(me)), g.delete(K);
                    }
                    Ae = dl(e, K, ee);
                  }
                  var Ve = P;
                  !Ve && ee !== Ae && !te && xp(K, Ae, ee);
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
          li(e), kv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Kh(e);
          break;
      }
      return W;
    }
    function Ox(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function dg(e, t) {
      {
        if (qa)
          return;
        qa = !0, h("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function pg(e, t) {
      {
        if (qa)
          return;
        qa = !0, h('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function vg(e, t, a) {
      {
        if (qa)
          return;
        qa = !0, h("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function hg(e, t) {
      {
        if (t === "" || qa)
          return;
        qa = !0, h('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function Nx(e, t, a) {
      switch (t) {
        case "input":
          J(e, a);
          return;
        case "textarea":
          Ly(e, a);
          return;
        case "select":
          hd(e, a);
          return;
      }
    }
    var bp = function() {
    }, wp = function() {
    };
    {
      var Lx = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], M_ = [
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
      ], Mx = M_.concat(["button"]), jx = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], j_ = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      wp = function(e, t) {
        var a = wt({}, e || j_), i = {
          tag: t
        };
        return M_.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Mx.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Lx.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var Ax = function(e, t) {
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
            return jx.indexOf(t) === -1;
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
      }, Ux = function(e, t) {
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
      bp = function(e, t, a) {
        a = a || j_;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && h("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = Ax(e, l) ? null : i, d = s ? null : Ux(e, a), y = s || d;
        if (y) {
          var g = y.tag, b = !!s + "|" + e + "|" + g;
          if (!A_[b]) {
            A_[b] = !0;
            var T = e, z = "";
            if (e === "#text" ? /\S/.test(t) ? T = "Text nodes" : (T = "Whitespace text nodes", z = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : T = "<" + e + ">", s) {
              var A = "";
              g === "table" && e === "tr" && (A += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), h("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", T, g, z, A);
            } else
              h("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", T, g);
          }
        }
      };
    }
    var Xh = "suppressHydrationWarning", Jh = "$", Zh = "/$", Rp = "$?", kp = "$!", zx = "style", mg = null, yg = null;
    function Px(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case to:
        case Ed: {
          t = i === to ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : Cd(null, "");
          break;
        }
        default: {
          var s = i === Pn ? e.parentNode : e, d = s.namespaceURI || null;
          t = s.tagName, a = Cd(d, t);
          break;
        }
      }
      {
        var y = t.toLowerCase(), g = wp(null, y);
        return {
          namespace: a,
          ancestorInfo: g
        };
      }
    }
    function Fx(e, t, a) {
      {
        var i = e, l = Cd(i.namespace, t), s = wp(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function HM(e) {
      return e;
    }
    function Ix(e) {
      mg = Bn(), yg = ex();
      var t = null;
      return Zn(!1), t;
    }
    function Vx(e) {
      tx(yg), Zn(mg), mg = null, yg = null;
    }
    function Hx(e, t, a, i, l) {
      var s;
      {
        var d = i;
        if (bp(e, null, d.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var y = "" + t.children, g = wp(d.ancestorInfo, e);
          bp(null, y, g);
        }
        s = d.namespace;
      }
      var b = xx(e, t, a, s);
      return Op(l, b), wg(b, t), b;
    }
    function $x(e, t) {
      e.appendChild(t);
    }
    function Bx(e, t, a, i, l) {
      switch (wx(e, t, a, i), t) {
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
    function qx(e, t, a, i, l, s) {
      {
        var d = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var y = "" + i.children, g = wp(d.ancestorInfo, t);
          bp(null, y, g);
        }
      }
      return Rx(e, t, a, i);
    }
    function gg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Wx(e, t, a, i) {
      {
        var l = a;
        bp(null, e, l.ancestorInfo);
      }
      var s = bx(e, t);
      return Op(i, s), s;
    }
    function Yx() {
      var e = window.event;
      return e === void 0 ? Va : Sf(e.type);
    }
    var _g = typeof setTimeout == "function" ? setTimeout : void 0, Gx = typeof clearTimeout == "function" ? clearTimeout : void 0, Sg = -1, U_ = typeof Promise == "function" ? Promise : void 0, Qx = typeof queueMicrotask == "function" ? queueMicrotask : typeof U_ < "u" ? function(e) {
      return U_.resolve(null).then(e).catch(Kx);
    } : _g;
    function Kx(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Xx(e, t, a, i) {
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
    function Jx(e, t, a, i, l, s) {
      kx(e, t, a, i, l), wg(e, l);
    }
    function z_(e) {
      gu(e, "");
    }
    function Zx(e, t, a) {
      e.nodeValue = a;
    }
    function eb(e, t) {
      e.appendChild(t);
    }
    function tb(e, t) {
      var a;
      e.nodeType === Pn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Kh(a);
    }
    function nb(e, t, a) {
      e.insertBefore(t, a);
    }
    function rb(e, t, a) {
      e.nodeType === Pn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function ab(e, t) {
      e.removeChild(t);
    }
    function ib(e, t) {
      e.nodeType === Pn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Cg(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === Pn) {
          var s = l.data;
          if (s === Zh)
            if (i === 0) {
              e.removeChild(l), Il(t);
              return;
            } else
              i--;
          else (s === Jh || s === Rp || s === kp) && i++;
        }
        a = l;
      } while (a);
      Il(t);
    }
    function ob(e, t) {
      e.nodeType === Pn ? Cg(e.parentNode, t) : e.nodeType === ea && Cg(e, t), Il(e);
    }
    function lb(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function ub(e) {
      e.nodeValue = "";
    }
    function sb(e, t) {
      e = e;
      var a = t[zx], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = wc("display", i);
    }
    function cb(e, t) {
      e.nodeValue = t;
    }
    function fb(e) {
      e.nodeType === ea ? e.textContent = "" : e.nodeType === to && e.documentElement && e.removeChild(e.documentElement);
    }
    function db(e, t, a) {
      return e.nodeType !== ea || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function pb(e, t) {
      return t === "" || e.nodeType !== eo ? null : e;
    }
    function vb(e) {
      return e.nodeType !== Pn ? null : e;
    }
    function P_(e) {
      return e.data === Rp;
    }
    function Eg(e) {
      return e.data === kp;
    }
    function hb(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function mb(e, t) {
      e._reactRetry = t;
    }
    function em(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ea || t === eo)
          break;
        if (t === Pn) {
          var a = e.data;
          if (a === Jh || a === kp || a === Rp)
            break;
          if (a === Zh)
            return null;
        }
      }
      return e;
    }
    function Tp(e) {
      return em(e.nextSibling);
    }
    function yb(e) {
      return em(e.firstChild);
    }
    function gb(e) {
      return em(e.firstChild);
    }
    function _b(e) {
      return em(e.nextSibling);
    }
    function Sb(e, t, a, i, l, s, d) {
      Op(s, e), wg(e, a);
      var y;
      {
        var g = l;
        y = g.namespace;
      }
      var b = (s.mode & Dt) !== rt;
      return Dx(e, t, a, y, i, b, d);
    }
    function Cb(e, t, a, i) {
      return Op(a, e), a.mode & Dt, Ox(e, t);
    }
    function Eb(e, t) {
      Op(t, e);
    }
    function xb(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Pn) {
          var i = t.data;
          if (i === Zh) {
            if (a === 0)
              return Tp(t);
            a--;
          } else (i === Jh || i === kp || i === Rp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function F_(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Pn) {
          var i = t.data;
          if (i === Jh || i === kp || i === Rp) {
            if (a === 0)
              return t;
            a--;
          } else i === Zh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function bb(e) {
      Il(e);
    }
    function wb(e) {
      Il(e);
    }
    function Rb(e) {
      return e !== "head" && e !== "body";
    }
    function kb(e, t, a, i) {
      var l = !0;
      Qh(t.nodeValue, a, i, l);
    }
    function Tb(e, t, a, i, l, s) {
      if (t[Xh] !== !0) {
        var d = !0;
        Qh(i.nodeValue, l, s, d);
      }
    }
    function Db(e, t) {
      t.nodeType === ea ? dg(e, t) : t.nodeType === Pn || pg(e, t);
    }
    function Ob(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === ea ? dg(a, t) : t.nodeType === Pn || pg(a, t));
      }
    }
    function Nb(e, t, a, i, l) {
      (l || t[Xh] !== !0) && (i.nodeType === ea ? dg(a, i) : i.nodeType === Pn || pg(a, i));
    }
    function Lb(e, t, a) {
      vg(e, t);
    }
    function Mb(e, t) {
      hg(e, t);
    }
    function jb(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && vg(i, t);
      }
    }
    function Ab(e, t) {
      {
        var a = e.parentNode;
        a !== null && hg(a, t);
      }
    }
    function Ub(e, t, a, i, l, s) {
      (s || t[Xh] !== !0) && vg(a, i);
    }
    function zb(e, t, a, i, l) {
      (l || t[Xh] !== !0) && hg(a, i);
    }
    function Pb(e) {
      h("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Fb(e) {
      Sp(e);
    }
    var jf = Math.random().toString(36).slice(2), Af = "__reactFiber$" + jf, xg = "__reactProps$" + jf, Dp = "__reactContainer$" + jf, bg = "__reactEvents$" + jf, Ib = "__reactListeners$" + jf, Vb = "__reactHandles$" + jf;
    function Hb(e) {
      delete e[Af], delete e[xg], delete e[bg], delete e[Ib], delete e[Vb];
    }
    function Op(e, t) {
      t[Af] = e;
    }
    function tm(e, t) {
      t[Dp] = e;
    }
    function I_(e) {
      e[Dp] = null;
    }
    function Np(e) {
      return !!e[Dp];
    }
    function rc(e) {
      var t = e[Af];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Dp] || a[Af], t) {
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
      var t = e[Af] || e[Dp];
      return t && (t.tag === B || t.tag === ie || t.tag === ye || t.tag === F) ? t : null;
    }
    function Uf(e) {
      if (e.tag === B || e.tag === ie)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function nm(e) {
      return e[xg] || null;
    }
    function wg(e, t) {
      e[xg] = t;
    }
    function $b(e) {
      var t = e[bg];
      return t === void 0 && (t = e[bg] = /* @__PURE__ */ new Set()), t;
    }
    var V_ = {}, H_ = p.ReactDebugCurrentFrame;
    function rm(e) {
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
            } catch (b) {
              y = b;
            }
            y && !(y instanceof Error) && (rm(l), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, d, typeof y), rm(null)), y instanceof Error && !(y.message in V_) && (V_[y.message] = !0, rm(l), h("Failed %s type: %s", a, y.message), rm(null));
          }
      }
    }
    var Rg = [], am;
    am = [];
    var Wl = -1;
    function $u(e) {
      return {
        current: e
      };
    }
    function fa(e, t) {
      if (Wl < 0) {
        h("Unexpected pop.");
        return;
      }
      t !== am[Wl] && h("Unexpected Fiber popped."), e.current = Rg[Wl], Rg[Wl] = null, am[Wl] = null, Wl--;
    }
    function da(e, t, a) {
      Wl++, Rg[Wl] = e.current, am[Wl] = a, e.current = t;
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
    function im() {
      return el.current;
    }
    function tl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function om(e) {
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
            kg[s] || (kg[s] = !0, h("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
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
    function lm(e) {
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
    function Bb(e) {
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
    var Bu = 0, um = 1, Gl = null, Og = !1, Ng = !1;
    function Y_(e) {
      Gl === null ? Gl = [e] : Gl.push(e);
    }
    function qb(e) {
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
          throw Gl !== null && (Gl = Gl.slice(e + 1)), jd(Es, qu), s;
        } finally {
          $n(t), Ng = !1;
        }
      }
      return null;
    }
    var Ff = [], If = 0, sm = null, cm = 0, Ii = [], Vi = 0, ac = null, Ql = 1, Kl = "";
    function Wb(e) {
      return oc(), (e.flags & Oi) !== nt;
    }
    function Yb(e) {
      return oc(), cm;
    }
    function Gb() {
      var e = Kl, t = Ql, a = t & ~Qb(t);
      return a.toString(32) + e;
    }
    function ic(e, t) {
      oc(), Ff[If++] = cm, Ff[If++] = sm, sm = e, cm = t;
    }
    function Q_(e, t, a) {
      oc(), Ii[Vi++] = Ql, Ii[Vi++] = Kl, Ii[Vi++] = ac, ac = e;
      var i = Ql, l = Kl, s = fm(i) - 1, d = i & ~(1 << s), y = a + 1, g = fm(t) + s;
      if (g > 30) {
        var b = s - s % 5, T = (1 << b) - 1, z = (d & T).toString(32), A = d >> b, W = s - b, K = fm(t) + W, ee = y << W, Ae = ee | A, ut = z + l;
        Ql = 1 << K | Ae, Kl = ut;
      } else {
        var Ze = y << s, zt = Ze | d, Lt = l;
        Ql = 1 << g | zt, Kl = Lt;
      }
    }
    function Lg(e) {
      oc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        ic(e, a), Q_(e, a, i);
      }
    }
    function fm(e) {
      return 32 - Vn(e);
    }
    function Qb(e) {
      return 1 << fm(e) - 1;
    }
    function Mg(e) {
      for (; e === sm; )
        sm = Ff[--If], Ff[If] = null, cm = Ff[--If], Ff[If] = null;
      for (; e === ac; )
        ac = Ii[--Vi], Ii[Vi] = null, Kl = Ii[--Vi], Ii[Vi] = null, Ql = Ii[--Vi], Ii[Vi] = null;
    }
    function Kb() {
      return oc(), ac !== null ? {
        id: Ql,
        overflow: Kl
      } : null;
    }
    function Xb(e, t) {
      oc(), Ii[Vi++] = Ql, Ii[Vi++] = Kl, Ii[Vi++] = ac, Ql = t.id, Kl = t.overflow, ac = e;
    }
    function oc() {
      Hr() || h("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Vr = null, Hi = null, vo = !1, lc = !1, Wu = null;
    function Jb() {
      vo && h("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function K_() {
      lc = !0;
    }
    function Zb() {
      return lc;
    }
    function ew(e) {
      var t = e.stateNode.containerInfo;
      return Hi = gb(t), Vr = e, vo = !0, Wu = null, lc = !1, !0;
    }
    function tw(e, t, a) {
      return Hi = _b(t), Vr = e, vo = !0, Wu = null, lc = !1, a !== null && Xb(e, a), !0;
    }
    function X_(e, t) {
      switch (e.tag) {
        case F: {
          Db(e.stateNode.containerInfo, t);
          break;
        }
        case B: {
          var a = (e.mode & Dt) !== rt;
          Nb(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case ye: {
          var i = e.memoizedState;
          i.dehydrated !== null && Ob(i.dehydrated, t);
          break;
        }
      }
    }
    function J_(e, t) {
      X_(e, t);
      var a = iT();
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
                t.pendingProps, Lb(a, i);
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
                var g = t.type, b = t.pendingProps, T = (e.mode & Dt) !== rt;
                Ub(
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
                var z = t.pendingProps, A = (e.mode & Dt) !== rt;
                zb(
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
          case ye: {
            var W = e.memoizedState, K = W.dehydrated;
            if (K !== null) switch (t.tag) {
              case B:
                var ee = t.type;
                t.pendingProps, jb(K, ee);
                break;
              case ie:
                var Ae = t.pendingProps;
                Ab(K, Ae);
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
          var i = db(t, a);
          return i !== null ? (e.stateNode = i, Vr = e, Hi = yb(i), !0) : !1;
        }
        case ie: {
          var l = e.pendingProps, s = pb(t, l);
          return s !== null ? (e.stateNode = s, Vr = e, Hi = null, !0) : !1;
        }
        case ye: {
          var d = vb(t);
          if (d !== null) {
            var y = {
              dehydrated: d,
              treeContext: Kb(),
              retryLane: oa
            };
            e.memoizedState = y;
            var g = oT(d);
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
          Ag(e) && (jg(Vr, e), Ug()), t = Tp(a);
          var i = Vr;
          if (!t || !e2(e, t)) {
            Z_(Vr, e), vo = !1, Vr = e;
            return;
          }
          J_(i, a);
        }
      }
    }
    function nw(e, t, a) {
      var i = e.stateNode, l = !lc, s = Sb(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function rw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Cb(t, a, e);
      if (i) {
        var l = Vr;
        if (l !== null)
          switch (l.tag) {
            case F: {
              var s = l.stateNode.containerInfo, d = (l.mode & Dt) !== rt;
              kb(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                d
              );
              break;
            }
            case B: {
              var y = l.type, g = l.memoizedProps, b = l.stateNode, T = (l.mode & Dt) !== rt;
              Tb(
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
    function aw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Eb(a, e);
    }
    function iw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return xb(a);
    }
    function t2(e) {
      for (var t = e.return; t !== null && t.tag !== B && t.tag !== F && t.tag !== ye; )
        t = t.return;
      Vr = t;
    }
    function dm(e) {
      if (e !== Vr)
        return !1;
      if (!vo)
        return t2(e), vo = !0, !1;
      if (e.tag !== F && (e.tag !== B || Rb(e.type) && !gg(e.type, e.memoizedProps))) {
        var t = Hi;
        if (t)
          if (Ag(e))
            n2(e), Ug();
          else
            for (; t; )
              J_(e, t), t = Tp(t);
      }
      return t2(e), e.tag === ye ? Hi = iw(e) : Hi = Vr ? Tp(e.stateNode) : null, !0;
    }
    function ow() {
      return vo && Hi !== null;
    }
    function n2(e) {
      for (var t = Hi; t; )
        X_(e, t), t = Tp(t);
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
    var lw = p.ReactCurrentBatchConfig, uw = null;
    function sw() {
      return lw.transition;
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
      var cw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & rn && (t = a), a = a.return;
        return t;
      }, uc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Lp = [], Mp = [], jp = [], Ap = [], Up = [], zp = [], sc = /* @__PURE__ */ new Set();
      ho.recordUnsafeLifecycleWarnings = function(e, t) {
        sc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Lp.push(e), e.mode & rn && typeof t.UNSAFE_componentWillMount == "function" && Mp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && jp.push(e), e.mode & rn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Ap.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Up.push(e), e.mode & rn && typeof t.UNSAFE_componentWillUpdate == "function" && zp.push(e));
      }, ho.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Lp.length > 0 && (Lp.forEach(function(A) {
          e.add(yt(A) || "Component"), sc.add(A.type);
        }), Lp = []);
        var t = /* @__PURE__ */ new Set();
        Mp.length > 0 && (Mp.forEach(function(A) {
          t.add(yt(A) || "Component"), sc.add(A.type);
        }), Mp = []);
        var a = /* @__PURE__ */ new Set();
        jp.length > 0 && (jp.forEach(function(A) {
          a.add(yt(A) || "Component"), sc.add(A.type);
        }), jp = []);
        var i = /* @__PURE__ */ new Set();
        Ap.length > 0 && (Ap.forEach(function(A) {
          i.add(yt(A) || "Component"), sc.add(A.type);
        }), Ap = []);
        var l = /* @__PURE__ */ new Set();
        Up.length > 0 && (Up.forEach(function(A) {
          l.add(yt(A) || "Component"), sc.add(A.type);
        }), Up = []);
        var s = /* @__PURE__ */ new Set();
        if (zp.length > 0 && (zp.forEach(function(A) {
          s.add(yt(A) || "Component"), sc.add(A.type);
        }), zp = []), t.size > 0) {
          var d = uc(t);
          h(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, d);
        }
        if (i.size > 0) {
          var y = uc(i);
          h(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, y);
        }
        if (s.size > 0) {
          var g = uc(s);
          h(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, g);
        }
        if (e.size > 0) {
          var b = uc(e);
          E(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
        if (a.size > 0) {
          var T = uc(a);
          E(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (l.size > 0) {
          var z = uc(l);
          E(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, z);
        }
      };
      var pm = /* @__PURE__ */ new Map(), a2 = /* @__PURE__ */ new Set();
      ho.recordLegacyContextWarning = function(e, t) {
        var a = cw(e);
        if (a === null) {
          h("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!a2.has(e.type)) {
          var i = pm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], pm.set(a, i)), i.push(e));
        }
      }, ho.flushLegacyContextWarning = function() {
        pm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(yt(s) || "Component"), a2.add(s.type);
            });
            var l = uc(i);
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
      }, ho.discardPendingWarnings = function() {
        Lp = [], Mp = [], jp = [], Ap = [], Up = [], zp = [], pm = /* @__PURE__ */ new Map();
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
        Hg[a] || (Hg[a] = !0, h('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function fw(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Pp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & rn || Z) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== w) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !fw(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var l = yt(e) || "Component";
          Vg[l] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, i), Vg[l] = !0);
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
          var b = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === b)
            return t.ref;
          var T = function(z) {
            var A = g.refs;
            z === null ? delete A[b] : A[b] = z;
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
    function vm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function hm(e) {
      {
        var t = yt(e) || "Component";
        if ($g[t])
          return;
        $g[t] = !0, h("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function o2(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function l2(e) {
      function t(H, te) {
        if (e) {
          var $ = H.deletions;
          $ === null ? (H.deletions = [te], H.flags |= Ua) : $.push(te);
        }
      }
      function a(H, te) {
        if (!e)
          return null;
        for (var $ = te; $ !== null; )
          t(H, $), $ = $.sibling;
        return null;
      }
      function i(H, te) {
        for (var $ = /* @__PURE__ */ new Map(), me = te; me !== null; )
          me.key !== null ? $.set(me.key, me) : $.set(me.index, me), me = me.sibling;
        return $;
      }
      function l(H, te) {
        var $ = gc(H, te);
        return $.index = 0, $.sibling = null, $;
      }
      function s(H, te, $) {
        if (H.index = $, !e)
          return H.flags |= Oi, te;
        var me = H.alternate;
        if (me !== null) {
          var Ve = me.index;
          return Ve < te ? (H.flags |= Cn, te) : Ve;
        } else
          return H.flags |= Cn, te;
      }
      function d(H) {
        return e && H.alternate === null && (H.flags |= Cn), H;
      }
      function y(H, te, $, me) {
        if (te === null || te.tag !== ie) {
          var Ve = P1($, H.mode, me);
          return Ve.return = H, Ve;
        } else {
          var ze = l(te, $);
          return ze.return = H, ze;
        }
      }
      function g(H, te, $, me) {
        var Ve = $.type;
        if (Ve === Si)
          return T(H, te, $.props.children, me, $.key);
        if (te !== null && (te.elementType === Ve || // Keep this check inline so it only runs on the false path:
        dC(te, $) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ve == "object" && Ve !== null && Ve.$$typeof === _t && o2(Ve) === te.type)) {
          var ze = l(te, $.props);
          return ze.ref = Pp(H, te, $), ze.return = H, ze._debugSource = $._source, ze._debugOwner = $._owner, ze;
        }
        var vt = z1($, H.mode, me);
        return vt.ref = Pp(H, te, $), vt.return = H, vt;
      }
      function b(H, te, $, me) {
        if (te === null || te.tag !== I || te.stateNode.containerInfo !== $.containerInfo || te.stateNode.implementation !== $.implementation) {
          var Ve = F1($, H.mode, me);
          return Ve.return = H, Ve;
        } else {
          var ze = l(te, $.children || []);
          return ze.return = H, ze;
        }
      }
      function T(H, te, $, me, Ve) {
        if (te === null || te.tag !== ae) {
          var ze = rs($, H.mode, me, Ve);
          return ze.return = H, ze;
        } else {
          var vt = l(te, $);
          return vt.return = H, vt;
        }
      }
      function z(H, te, $) {
        if (typeof te == "string" && te !== "" || typeof te == "number") {
          var me = P1("" + te, H.mode, $);
          return me.return = H, me;
        }
        if (typeof te == "object" && te !== null) {
          switch (te.$$typeof) {
            case Mr: {
              var Ve = z1(te, H.mode, $);
              return Ve.ref = Pp(H, null, te), Ve.return = H, Ve;
            }
            case sr: {
              var ze = F1(te, H.mode, $);
              return ze.return = H, ze;
            }
            case _t: {
              var vt = te._payload, Ct = te._init;
              return z(H, Ct(vt), $);
            }
          }
          if (kt(te) || xt(te)) {
            var on = rs(te, H.mode, $, null);
            return on.return = H, on;
          }
          vm(H, te);
        }
        return typeof te == "function" && hm(H), null;
      }
      function A(H, te, $, me) {
        var Ve = te !== null ? te.key : null;
        if (typeof $ == "string" && $ !== "" || typeof $ == "number")
          return Ve !== null ? null : y(H, te, "" + $, me);
        if (typeof $ == "object" && $ !== null) {
          switch ($.$$typeof) {
            case Mr:
              return $.key === Ve ? g(H, te, $, me) : null;
            case sr:
              return $.key === Ve ? b(H, te, $, me) : null;
            case _t: {
              var ze = $._payload, vt = $._init;
              return A(H, te, vt(ze), me);
            }
          }
          if (kt($) || xt($))
            return Ve !== null ? null : T(H, te, $, me, null);
          vm(H, $);
        }
        return typeof $ == "function" && hm(H), null;
      }
      function W(H, te, $, me, Ve) {
        if (typeof me == "string" && me !== "" || typeof me == "number") {
          var ze = H.get($) || null;
          return y(te, ze, "" + me, Ve);
        }
        if (typeof me == "object" && me !== null) {
          switch (me.$$typeof) {
            case Mr: {
              var vt = H.get(me.key === null ? $ : me.key) || null;
              return g(te, vt, me, Ve);
            }
            case sr: {
              var Ct = H.get(me.key === null ? $ : me.key) || null;
              return b(te, Ct, me, Ve);
            }
            case _t:
              var on = me._payload, Wt = me._init;
              return W(H, te, $, Wt(on), Ve);
          }
          if (kt(me) || xt(me)) {
            var er = H.get($) || null;
            return T(te, er, me, Ve, null);
          }
          vm(te, me);
        }
        return typeof me == "function" && hm(te), null;
      }
      function K(H, te, $) {
        {
          if (typeof H != "object" || H === null)
            return te;
          switch (H.$$typeof) {
            case Mr:
            case sr:
              i2(H, $);
              var me = H.key;
              if (typeof me != "string")
                break;
              if (te === null) {
                te = /* @__PURE__ */ new Set(), te.add(me);
                break;
              }
              if (!te.has(me)) {
                te.add(me);
                break;
              }
              h("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", me);
              break;
            case _t:
              var Ve = H._payload, ze = H._init;
              K(ze(Ve), te, $);
              break;
          }
        }
        return te;
      }
      function ee(H, te, $, me) {
        for (var Ve = null, ze = 0; ze < $.length; ze++) {
          var vt = $[ze];
          Ve = K(vt, Ve, H);
        }
        for (var Ct = null, on = null, Wt = te, er = 0, Yt = 0, Wn = null; Wt !== null && Yt < $.length; Yt++) {
          Wt.index > Yt ? (Wn = Wt, Wt = null) : Wn = Wt.sibling;
          var va = A(H, Wt, $[Yt], me);
          if (va === null) {
            Wt === null && (Wt = Wn);
            break;
          }
          e && Wt && va.alternate === null && t(H, Wt), er = s(va, er, Yt), on === null ? Ct = va : on.sibling = va, on = va, Wt = Wn;
        }
        if (Yt === $.length) {
          if (a(H, Wt), Hr()) {
            var Qr = Yt;
            ic(H, Qr);
          }
          return Ct;
        }
        if (Wt === null) {
          for (; Yt < $.length; Yt++) {
            var yi = z(H, $[Yt], me);
            yi !== null && (er = s(yi, er, Yt), on === null ? Ct = yi : on.sibling = yi, on = yi);
          }
          if (Hr()) {
            var Da = Yt;
            ic(H, Da);
          }
          return Ct;
        }
        for (var Oa = i(H, Wt); Yt < $.length; Yt++) {
          var ha = W(Oa, H, Yt, $[Yt], me);
          ha !== null && (e && ha.alternate !== null && Oa.delete(ha.key === null ? Yt : ha.key), er = s(ha, er, Yt), on === null ? Ct = ha : on.sibling = ha, on = ha);
        }
        if (e && Oa.forEach(function(od) {
          return t(H, od);
        }), Hr()) {
          var ru = Yt;
          ic(H, ru);
        }
        return Ct;
      }
      function Ae(H, te, $, me) {
        var Ve = xt($);
        if (typeof Ve != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          $[Symbol.toStringTag] === "Generator" && (Ig || h("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Ig = !0), $.entries === Ve && (Fg || h("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Fg = !0);
          var ze = Ve.call($);
          if (ze)
            for (var vt = null, Ct = ze.next(); !Ct.done; Ct = ze.next()) {
              var on = Ct.value;
              vt = K(on, vt, H);
            }
        }
        var Wt = Ve.call($);
        if (Wt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var er = null, Yt = null, Wn = te, va = 0, Qr = 0, yi = null, Da = Wt.next(); Wn !== null && !Da.done; Qr++, Da = Wt.next()) {
          Wn.index > Qr ? (yi = Wn, Wn = null) : yi = Wn.sibling;
          var Oa = A(H, Wn, Da.value, me);
          if (Oa === null) {
            Wn === null && (Wn = yi);
            break;
          }
          e && Wn && Oa.alternate === null && t(H, Wn), va = s(Oa, va, Qr), Yt === null ? er = Oa : Yt.sibling = Oa, Yt = Oa, Wn = yi;
        }
        if (Da.done) {
          if (a(H, Wn), Hr()) {
            var ha = Qr;
            ic(H, ha);
          }
          return er;
        }
        if (Wn === null) {
          for (; !Da.done; Qr++, Da = Wt.next()) {
            var ru = z(H, Da.value, me);
            ru !== null && (va = s(ru, va, Qr), Yt === null ? er = ru : Yt.sibling = ru, Yt = ru);
          }
          if (Hr()) {
            var od = Qr;
            ic(H, od);
          }
          return er;
        }
        for (var mv = i(H, Wn); !Da.done; Qr++, Da = Wt.next()) {
          var sl = W(mv, H, Qr, Da.value, me);
          sl !== null && (e && sl.alternate !== null && mv.delete(sl.key === null ? Qr : sl.key), va = s(sl, va, Qr), Yt === null ? er = sl : Yt.sibling = sl, Yt = sl);
        }
        if (e && mv.forEach(function(zT) {
          return t(H, zT);
        }), Hr()) {
          var UT = Qr;
          ic(H, UT);
        }
        return er;
      }
      function ut(H, te, $, me) {
        if (te !== null && te.tag === ie) {
          a(H, te.sibling);
          var Ve = l(te, $);
          return Ve.return = H, Ve;
        }
        a(H, te);
        var ze = P1($, H.mode, me);
        return ze.return = H, ze;
      }
      function Ze(H, te, $, me) {
        for (var Ve = $.key, ze = te; ze !== null; ) {
          if (ze.key === Ve) {
            var vt = $.type;
            if (vt === Si) {
              if (ze.tag === ae) {
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
              return on.ref = Pp(H, ze, $), on.return = H, on._debugSource = $._source, on._debugOwner = $._owner, on;
            }
            a(H, ze);
            break;
          } else
            t(H, ze);
          ze = ze.sibling;
        }
        if ($.type === Si) {
          var Wt = rs($.props.children, H.mode, me, $.key);
          return Wt.return = H, Wt;
        } else {
          var er = z1($, H.mode, me);
          return er.ref = Pp(H, te, $), er.return = H, er;
        }
      }
      function zt(H, te, $, me) {
        for (var Ve = $.key, ze = te; ze !== null; ) {
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
        var Ct = F1($, H.mode, me);
        return Ct.return = H, Ct;
      }
      function Lt(H, te, $, me) {
        var Ve = typeof $ == "object" && $ !== null && $.type === Si && $.key === null;
        if (Ve && ($ = $.props.children), typeof $ == "object" && $ !== null) {
          switch ($.$$typeof) {
            case Mr:
              return d(Ze(H, te, $, me));
            case sr:
              return d(zt(H, te, $, me));
            case _t:
              var ze = $._payload, vt = $._init;
              return Lt(H, te, vt(ze), me);
          }
          if (kt($))
            return ee(H, te, $, me);
          if (xt($))
            return Ae(H, te, $, me);
          vm(H, $);
        }
        return typeof $ == "string" && $ !== "" || typeof $ == "number" ? d(ut(H, te, "" + $, me)) : (typeof $ == "function" && hm(H), a(H, te));
      }
      return Lt;
    }
    var Hf = l2(!0), u2 = l2(!1);
    function dw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = gc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = gc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function pw(e, t) {
      for (var a = e.child; a !== null; )
        eT(a, t), a = a.sibling;
    }
    var Bg = $u(null), qg;
    qg = {};
    var mm = null, $f = null, Wg = null, ym = !1;
    function gm() {
      mm = null, $f = null, Wg = null, ym = !1;
    }
    function s2() {
      ym = !0;
    }
    function c2() {
      ym = !1;
    }
    function f2(e, t, a) {
      da(Bg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== qg && h("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = qg;
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
      i !== a && h("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function vw(e, t, a) {
      hw(e, t, a);
    }
    function hw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, s = i.dependencies;
        if (s !== null) {
          l = i.child;
          for (var d = s.firstContext; d !== null; ) {
            if (d.context === t) {
              if (i.tag === w) {
                var y = Us(a), g = Xl(ln, y);
                g.tag = Sm;
                var b = i.updateQueue;
                if (b !== null) {
                  var T = b.shared, z = T.pending;
                  z === null ? g.next = g : (g.next = z.next, z.next = g), T.pending = g;
                }
              }
              i.lanes = bt(i.lanes, a);
              var A = i.alternate;
              A !== null && (A.lanes = bt(A.lanes, a)), Gg(i.return, a, e), s.lanes = bt(s.lanes, a);
              break;
            }
            d = d.next;
          }
        } else if (i.tag === de)
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
    function Bf(e, t) {
      mm = e, $f = null, Wg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (la(a.lanes, t) && Zp(), a.firstContext = null);
      }
    }
    function lr(e) {
      ym && h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Wg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if ($f === null) {
          if (mm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          $f = a, mm.dependencies = {
            lanes: se,
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
    function mw() {
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
      return l === null ? (a.next = a, Qg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, _m(e, i);
    }
    function yw(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, Qg(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function gw(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Qg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, _m(e, i);
    }
    function Wa(e, t) {
      return _m(e, t);
    }
    var _w = _m;
    function _m(e, t) {
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
    var p2 = 0, v2 = 1, Sm = 2, Kg = 3, Cm = !1, Xg, Em;
    Xg = !1, Em = null;
    function Jg(e) {
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
      if (Em === l && !Xg && (h("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Xg = !0), yk()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, _w(e, a);
      } else
        return gw(e, l, t, a);
    }
    function xm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (Xd(a)) {
          var s = l.lanes;
          s = Zd(s, e.pendingLanes);
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
    function Sw(e, t, a, i, l, s) {
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
          return b == null ? i : wt({}, i, b);
        }
        case Sm:
          return Cm = !0, i;
      }
      return i;
    }
    function bm(e, t, a, i) {
      var l = e.updateQueue;
      Cm = !1, Em = l.shared;
      var s = l.firstBaseUpdate, d = l.lastBaseUpdate, y = l.shared.pending;
      if (y !== null) {
        l.shared.pending = null;
        var g = y, b = g.next;
        g.next = null, d === null ? s = b : d.next = b, d = g;
        var T = e.alternate;
        if (T !== null) {
          var z = T.updateQueue, A = z.lastBaseUpdate;
          A !== d && (A === null ? z.firstBaseUpdate = b : A.next = b, z.lastBaseUpdate = g);
        }
      }
      if (s !== null) {
        var W = l.baseState, K = se, ee = null, Ae = null, ut = null, Ze = s;
        do {
          var zt = Ze.lane, Lt = Ze.eventTime;
          if (Fl(i, zt)) {
            if (ut !== null) {
              var te = {
                eventTime: Lt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Vt,
                tag: Ze.tag,
                payload: Ze.payload,
                callback: Ze.callback,
                next: null
              };
              ut = ut.next = te;
            }
            W = Sw(e, l, Ze, W, t, a);
            var $ = Ze.callback;
            if ($ !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ze.lane !== Vt) {
              e.flags |= dn;
              var me = l.effects;
              me === null ? l.effects = [Ze] : me.push(Ze);
            }
          } else {
            var H = {
              eventTime: Lt,
              lane: zt,
              tag: Ze.tag,
              payload: Ze.payload,
              callback: Ze.callback,
              next: null
            };
            ut === null ? (Ae = ut = H, ee = W) : ut = ut.next = H, K = bt(K, zt);
          }
          if (Ze = Ze.next, Ze === null) {
            if (y = l.shared.pending, y === null)
              break;
            var Ve = y, ze = Ve.next;
            Ve.next = null, Ze = ze, l.lastBaseUpdate = Ve, l.shared.pending = null;
          }
        } while (!0);
        ut === null && (ee = W), l.baseState = ee, l.firstBaseUpdate = Ae, l.lastBaseUpdate = ut;
        var vt = l.shared.interleaved;
        if (vt !== null) {
          var Ct = vt;
          do
            K = bt(K, Ct.lane), Ct = Ct.next;
          while (Ct !== vt);
        } else s === null && (l.shared.lanes = se);
        fv(K), e.lanes = K, e.memoizedState = W;
      }
      Em = null;
    }
    function Cw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function m2() {
      Cm = !1;
    }
    function wm() {
      return Cm;
    }
    function y2(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], d = s.callback;
          d !== null && (s.callback = null, Cw(d, a));
        }
    }
    var Fp = {}, Gu = $u(Fp), Ip = $u(Fp), Rm = $u(Fp);
    function km(e) {
      if (e === Fp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function g2() {
      var e = km(Rm.current);
      return e;
    }
    function e0(e, t) {
      da(Rm, t, e), da(Ip, e, e), da(Gu, Fp, e);
      var a = Px(t);
      fa(Gu, e), da(Gu, a, e);
    }
    function qf(e) {
      fa(Gu, e), fa(Ip, e), fa(Rm, e);
    }
    function t0() {
      var e = km(Gu.current);
      return e;
    }
    function _2(e) {
      km(Rm.current);
      var t = km(Gu.current), a = Fx(t, e.type);
      t !== a && (da(Ip, e, e), da(Gu, a, e));
    }
    function n0(e) {
      Ip.current === e && (fa(Gu, e), fa(Ip, e));
    }
    var Ew = 0, S2 = 1, C2 = 1, Vp = 2, mo = $u(Ew);
    function r0(e, t) {
      return (e & t) !== 0;
    }
    function Wf(e) {
      return e & S2;
    }
    function a0(e, t) {
      return e & S2 | t;
    }
    function xw(e, t) {
      return e | t;
    }
    function Qu(e, t) {
      da(mo, t, e);
    }
    function Yf(e) {
      fa(mo, e);
    }
    function bw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Tm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ye) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || P_(i) || Eg(i))
              return t;
          }
        } else if (t.tag === le && // revealOrder undefined can't be trusted because it don't
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
    function ww(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Fe = p.ReactCurrentDispatcher, Hp = p.ReactCurrentBatchConfig, l0, Gf;
    l0 = /* @__PURE__ */ new Set();
    var fc = se, an = null, gr = null, _r = null, Dm = !1, $p = !1, Bp = 0, Rw = 0, kw = 25, re = null, $i = null, Ku = -1, u0 = !1;
    function Kt() {
      {
        var e = re;
        $i === null ? $i = [e] : $i.push(e);
      }
    }
    function Te() {
      {
        var e = re;
        $i !== null && (Ku++, $i[Ku] !== e && Tw(e));
      }
    }
    function Qf(e) {
      e != null && !kt(e) && h("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", re, typeof e);
    }
    function Tw(e) {
      {
        var t = yt(an);
        if (!l0.has(t) && (l0.add(t), $i !== null)) {
          for (var a = "", i = 30, l = 0; l <= Ku; l++) {
            for (var s = $i[l], d = l === Ku ? e : s, y = l + 1 + ". " + s; y.length < i; )
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
        return h("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", re), !1;
      e.length !== t.length && h(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, re, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ve(e[a], t[a]))
          return !1;
      return !0;
    }
    function Kf(e, t, a, i, l, s) {
      fc = s, an = t, $i = e !== null ? e._debugHookTypes : null, Ku = -1, u0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = se, e !== null && e.memoizedState !== null ? Fe.current = $2 : $i !== null ? Fe.current = H2 : Fe.current = V2;
      var d = a(i, l);
      if ($p) {
        var y = 0;
        do {
          if ($p = !1, Bp = 0, y >= kw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          y += 1, u0 = !1, gr = null, _r = null, t.updateQueue = null, Ku = -1, Fe.current = B2, d = a(i, l);
        } while ($p);
      }
      Fe.current = Hm, t._debugHookTypes = $i;
      var g = gr !== null && gr.next !== null;
      if (fc = se, an = null, gr = null, _r = null, re = null, $i = null, Ku = -1, e !== null && (e.flags & In) !== (t.flags & In) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Dt) !== rt && h("Internal React error: Expected static flag was missing. Please notify the React team."), Dm = !1, g)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return d;
    }
    function Xf() {
      var e = Bp !== 0;
      return Bp = 0, e;
    }
    function E2(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Bt) !== rt ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = zs(e.lanes, a);
    }
    function x2() {
      if (Fe.current = Hm, Dm) {
        for (var e = an.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Dm = !1;
      }
      fc = se, an = null, gr = null, _r = null, $i = null, Ku = -1, re = null, U2 = !1, $p = !1, Bp = 0;
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
        lanes: se,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = s;
      var d = s.dispatch = Lw.bind(null, an, s);
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
          var g = d.next, b = y.next;
          d.next = b, y.next = g;
        }
        s.baseQueue !== d && h("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = d = y, l.pending = null;
      }
      if (d !== null) {
        var T = d.next, z = s.baseState, A = null, W = null, K = null, ee = T;
        do {
          var Ae = ee.lane;
          if (Fl(fc, Ae)) {
            if (K !== null) {
              var Ze = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Vt,
                action: ee.action,
                hasEagerState: ee.hasEagerState,
                eagerState: ee.eagerState,
                next: null
              };
              K = K.next = Ze;
            }
            if (ee.hasEagerState)
              z = ee.eagerState;
            else {
              var zt = ee.action;
              z = e(z, zt);
            }
          } else {
            var ut = {
              lane: Ae,
              action: ee.action,
              hasEagerState: ee.hasEagerState,
              eagerState: ee.eagerState,
              next: null
            };
            K === null ? (W = K = ut, A = z) : K = K.next = ut, an.lanes = bt(an.lanes, Ae), fv(Ae);
          }
          ee = ee.next;
        } while (ee !== null && ee !== T);
        K === null ? A = z : K.next = W, ve(z, i.memoizedState) || Zp(), i.memoizedState = z, i.baseState = A, i.baseQueue = K, l.lastRenderedState = z;
      }
      var Lt = l.interleaved;
      if (Lt !== null) {
        var H = Lt;
        do {
          var te = H.lane;
          an.lanes = bt(an.lanes, te), fv(te), H = H.next;
        } while (H !== Lt);
      } else d === null && (l.lanes = se);
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
        var g = d.next, b = g;
        do {
          var T = b.action;
          y = e(y, T), b = b.next;
        } while (b !== g);
        ve(y, i.memoizedState) || Zp(), i.memoizedState = y, i.baseQueue === null && (i.baseState = y), l.lastRenderedState = y;
      }
      return [y, s];
    }
    function $M(e, t, a) {
    }
    function BM(e, t, a) {
    }
    function v0(e, t, a) {
      var i = an, l = rl(), s, d = Hr();
      if (d) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Gf || s !== a() && (h("The result of getServerSnapshot should be cached to avoid an infinite loop"), Gf = !0);
      } else {
        if (s = t(), !Gf) {
          var y = t();
          ve(s, y) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), Gf = !0);
        }
        var g = ly();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        vf(g, fc) || w2(i, t, s);
      }
      l.memoizedState = s;
      var b = {
        value: s,
        getSnapshot: t
      };
      return l.queue = b, jm(k2.bind(null, i, b, e), [e]), i.flags |= ta, qp(mr | $r, R2.bind(null, i, b, s, t), void 0, null), s;
    }
    function Om(e, t, a) {
      var i = an, l = Bi(), s = t();
      if (!Gf) {
        var d = t();
        ve(s, d) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), Gf = !0);
      }
      var y = l.memoizedState, g = !ve(y, s);
      g && (l.memoizedState = s, Zp());
      var b = l.queue;
      if (Yp(k2.bind(null, i, b, e), [e]), b.getSnapshot !== t || g || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      _r !== null && _r.memoizedState.tag & mr) {
        i.flags |= ta, qp(mr | $r, R2.bind(null, i, b, s, t), void 0, null);
        var T = ly();
        if (T === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        vf(T, fc) || w2(i, t, s);
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
        return !ve(a, i);
      } catch {
        return !0;
      }
    }
    function D2(e) {
      var t = Wa(e, pt);
      t !== null && xr(t, e, pt, ln);
    }
    function Nm(e) {
      var t = rl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: se,
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
    function qp(e, t, a, i) {
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
    function Lm(e) {
      var t = Bi();
      return t.memoizedState;
    }
    function Wp(e, t, a, i) {
      var l = rl(), s = i === void 0 ? null : i;
      an.flags |= e, l.memoizedState = qp(mr | t, a, void 0, s);
    }
    function Mm(e, t, a, i) {
      var l = Bi(), s = i === void 0 ? null : i, d = void 0;
      if (gr !== null) {
        var y = gr.memoizedState;
        if (d = y.destroy, s !== null) {
          var g = y.deps;
          if (s0(s, g)) {
            l.memoizedState = qp(t, a, d, s);
            return;
          }
        }
      }
      an.flags |= e, l.memoizedState = qp(mr | t, a, d, s);
    }
    function jm(e, t) {
      return (an.mode & Bt) !== rt ? Wp(Ni | ta | Ic, $r, e, t) : Wp(ta | Ic, $r, e, t);
    }
    function Yp(e, t) {
      return Mm(ta, $r, e, t);
    }
    function g0(e, t) {
      return Wp(jt, nl, e, t);
    }
    function Am(e, t) {
      return Mm(jt, nl, e, t);
    }
    function _0(e, t) {
      var a = jt;
      return a |= ro, (an.mode & Bt) !== rt && (a |= Po), Wp(a, yr, e, t);
    }
    function Um(e, t) {
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
        l.hasOwnProperty("current") || h("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var s = e();
        return l.current = s, function() {
          l.current = null;
        };
      }
    }
    function S0(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = jt;
      return l |= ro, (an.mode & Bt) !== rt && (l |= Po), Wp(l, yr, O2.bind(null, t, e), i);
    }
    function zm(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Mm(jt, yr, O2.bind(null, t, e), i);
    }
    function Dw(e, t) {
    }
    var Pm = Dw;
    function C0(e, t) {
      var a = rl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Fm(e, t) {
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
    function Im(e, t) {
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
      return M2(t, i, e);
    }
    function L2(e) {
      var t = Bi();
      if (gr === null)
        return t.memoizedState = e, e;
      var a = gr.memoizedState;
      return M2(t, a, e);
    }
    function M2(e, t, a) {
      var i = !Qd(fc);
      if (i) {
        if (!ve(a, t)) {
          var l = Jd();
          an.lanes = bt(an.lanes, l), fv(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Zp()), e.memoizedState = a, a;
    }
    function Ow(e, t, a) {
      var i = $a();
      $n(yh(i, Ai)), e(!0);
      var l = Hp.transition;
      Hp.transition = {};
      var s = Hp.transition;
      Hp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if ($n(i), Hp.transition = l, l === null && s._updatedFibers) {
          var d = s._updatedFibers.size;
          d > 10 && E("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function b0() {
      var e = Nm(!1), t = e[0], a = e[1], i = Ow.bind(null, a), l = rl();
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
    function Nw() {
      return U2;
    }
    function w0() {
      var e = rl(), t = ly(), a = t.identifierPrefix, i;
      if (Hr()) {
        var l = Gb();
        i = ":" + a + "R" + l;
        var s = Bp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var d = Rw++;
        i = ":" + a + "r" + d.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Vm() {
      var e = Bi(), t = e.memoizedState;
      return t;
    }
    function Lw(e, t, a) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
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
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
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
        if (e.lanes === se && (s === null || s.lanes === se)) {
          var d = t.lastRenderedReducer;
          if (d !== null) {
            var y;
            y = Fe.current, Fe.current = yo;
            try {
              var g = t.lastRenderedState, b = d(g, a);
              if (l.hasEagerState = !0, l.eagerState = b, ve(b, g)) {
                yw(e, t, l, i);
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
          var z = Ta();
          xr(T, e, i, z), F2(T, t, i);
        }
      }
      I2(e, i);
    }
    function z2(e) {
      var t = e.alternate;
      return e === an || t !== null && t === an;
    }
    function P2(e, t) {
      $p = Dm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function F2(e, t, a) {
      if (Xd(a)) {
        var i = t.lanes;
        i = Zd(i, e.pendingLanes);
        var l = bt(i, a);
        t.lanes = l, mf(e, l);
      }
    }
    function I2(e, t, a) {
      ks(e, t);
    }
    var Hm = {
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
      unstable_isNewReconciler: ne
    }, V2 = null, H2 = null, $2 = null, B2 = null, al = null, yo = null, $m = null;
    {
      var R0 = function() {
        h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, St = function() {
        h("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      V2 = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", Kt(), Qf(t), C0(e, t);
        },
        useContext: function(e) {
          return re = "useContext", Kt(), lr(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", Kt(), Qf(t), jm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", Kt(), Qf(a), S0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", Kt(), Qf(t), g0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", Kt(), Qf(t), _0(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", Kt(), Qf(t);
          var a = Fe.current;
          Fe.current = al;
          try {
            return E0(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", Kt();
          var i = Fe.current;
          Fe.current = al;
          try {
            return f0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", Kt(), y0(e);
        },
        useState: function(e) {
          re = "useState", Kt();
          var t = Fe.current;
          Fe.current = al;
          try {
            return Nm(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", Kt(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Kt(), x0(e);
        },
        useTransition: function() {
          return re = "useTransition", Kt(), b0();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", Kt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", Kt(), v0(e, t, a);
        },
        useId: function() {
          return re = "useId", Kt(), w0();
        },
        unstable_isNewReconciler: ne
      }, H2 = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", Te(), C0(e, t);
        },
        useContext: function(e) {
          return re = "useContext", Te(), lr(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", Te(), jm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", Te(), S0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", Te(), g0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", Te(), _0(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", Te();
          var a = Fe.current;
          Fe.current = al;
          try {
            return E0(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", Te();
          var i = Fe.current;
          Fe.current = al;
          try {
            return f0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", Te(), y0(e);
        },
        useState: function(e) {
          re = "useState", Te();
          var t = Fe.current;
          Fe.current = al;
          try {
            return Nm(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", Te(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Te(), x0(e);
        },
        useTransition: function() {
          return re = "useTransition", Te(), b0();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", Te(), v0(e, t, a);
        },
        useId: function() {
          return re = "useId", Te(), w0();
        },
        unstable_isNewReconciler: ne
      }, $2 = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", Te(), Fm(e, t);
        },
        useContext: function(e) {
          return re = "useContext", Te(), lr(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", Te(), Yp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", Te(), zm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", Te(), Am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", Te(), Um(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", Te();
          var a = Fe.current;
          Fe.current = yo;
          try {
            return Im(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", Te();
          var i = Fe.current;
          Fe.current = yo;
          try {
            return d0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", Te(), Lm();
        },
        useState: function(e) {
          re = "useState", Te();
          var t = Fe.current;
          Fe.current = yo;
          try {
            return h0(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", Te(), Pm();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Te(), N2(e);
        },
        useTransition: function() {
          return re = "useTransition", Te(), j2();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", Te(), Om(e, t);
        },
        useId: function() {
          return re = "useId", Te(), Vm();
        },
        unstable_isNewReconciler: ne
      }, B2 = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", Te(), Fm(e, t);
        },
        useContext: function(e) {
          return re = "useContext", Te(), lr(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", Te(), Yp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", Te(), zm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", Te(), Am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", Te(), Um(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", Te();
          var a = Fe.current;
          Fe.current = $m;
          try {
            return Im(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", Te();
          var i = Fe.current;
          Fe.current = $m;
          try {
            return p0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", Te(), Lm();
        },
        useState: function(e) {
          re = "useState", Te();
          var t = Fe.current;
          Fe.current = $m;
          try {
            return m0(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", Te(), Pm();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Te(), L2(e);
        },
        useTransition: function() {
          return re = "useTransition", Te(), A2();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", Te(), Om(e, t);
        },
        useId: function() {
          return re = "useId", Te(), Vm();
        },
        unstable_isNewReconciler: ne
      }, al = {
        readContext: function(e) {
          return R0(), lr(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", St(), Kt(), C0(e, t);
        },
        useContext: function(e) {
          return re = "useContext", St(), Kt(), lr(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", St(), Kt(), jm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", St(), Kt(), S0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", St(), Kt(), g0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", St(), Kt(), _0(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", St(), Kt();
          var a = Fe.current;
          Fe.current = al;
          try {
            return E0(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", St(), Kt();
          var i = Fe.current;
          Fe.current = al;
          try {
            return f0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", St(), Kt(), y0(e);
        },
        useState: function(e) {
          re = "useState", St(), Kt();
          var t = Fe.current;
          Fe.current = al;
          try {
            return Nm(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", St(), Kt(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", St(), Kt(), x0(e);
        },
        useTransition: function() {
          return re = "useTransition", St(), Kt(), b0();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", St(), Kt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", St(), Kt(), v0(e, t, a);
        },
        useId: function() {
          return re = "useId", St(), Kt(), w0();
        },
        unstable_isNewReconciler: ne
      }, yo = {
        readContext: function(e) {
          return R0(), lr(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", St(), Te(), Fm(e, t);
        },
        useContext: function(e) {
          return re = "useContext", St(), Te(), lr(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", St(), Te(), Yp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", St(), Te(), zm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", St(), Te(), Am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", St(), Te(), Um(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", St(), Te();
          var a = Fe.current;
          Fe.current = yo;
          try {
            return Im(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", St(), Te();
          var i = Fe.current;
          Fe.current = yo;
          try {
            return d0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", St(), Te(), Lm();
        },
        useState: function(e) {
          re = "useState", St(), Te();
          var t = Fe.current;
          Fe.current = yo;
          try {
            return h0(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", St(), Te(), Pm();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", St(), Te(), N2(e);
        },
        useTransition: function() {
          return re = "useTransition", St(), Te(), j2();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", St(), Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", St(), Te(), Om(e, t);
        },
        useId: function() {
          return re = "useId", St(), Te(), Vm();
        },
        unstable_isNewReconciler: ne
      }, $m = {
        readContext: function(e) {
          return R0(), lr(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", St(), Te(), Fm(e, t);
        },
        useContext: function(e) {
          return re = "useContext", St(), Te(), lr(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", St(), Te(), Yp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", St(), Te(), zm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", St(), Te(), Am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", St(), Te(), Um(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", St(), Te();
          var a = Fe.current;
          Fe.current = yo;
          try {
            return Im(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", St(), Te();
          var i = Fe.current;
          Fe.current = yo;
          try {
            return p0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", St(), Te(), Lm();
        },
        useState: function(e) {
          re = "useState", St(), Te();
          var t = Fe.current;
          Fe.current = yo;
          try {
            return m0(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", St(), Te(), Pm();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", St(), Te(), L2(e);
        },
        useTransition: function() {
          return re = "useTransition", St(), Te(), A2();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", St(), Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", St(), Te(), Om(e, t);
        },
        useId: function() {
          return re = "useId", St(), Te(), Vm();
        },
        unstable_isNewReconciler: ne
      };
    }
    var Xu = v.unstable_now, q2 = 0, Bm = -1, Gp = -1, qm = -1, k0 = !1, Wm = !1;
    function W2() {
      return k0;
    }
    function jw() {
      Wm = !0;
    }
    function Aw() {
      k0 = !1, Wm = !1;
    }
    function Uw() {
      k0 = Wm, Wm = !1;
    }
    function Y2() {
      return q2;
    }
    function G2() {
      q2 = Xu();
    }
    function T0(e) {
      Gp = Xu(), e.actualStartTime < 0 && (e.actualStartTime = Xu());
    }
    function Q2(e) {
      Gp = -1;
    }
    function Ym(e, t) {
      if (Gp >= 0) {
        var a = Xu() - Gp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Gp = -1;
      }
    }
    function il(e) {
      if (Bm >= 0) {
        var t = Xu() - Bm;
        Bm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case F:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Oe:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function D0(e) {
      if (qm >= 0) {
        var t = Xu() - qm;
        qm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case F:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Oe:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function ol() {
      Bm = Xu();
    }
    function O0() {
      qm = Xu();
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
    var L0 = {}, M0, j0, A0, U0, z0, K2, Gm, P0, F0, I0, Qp;
    {
      M0 = /* @__PURE__ */ new Set(), j0 = /* @__PURE__ */ new Set(), A0 = /* @__PURE__ */ new Set(), U0 = /* @__PURE__ */ new Set(), P0 = /* @__PURE__ */ new Set(), z0 = /* @__PURE__ */ new Set(), F0 = /* @__PURE__ */ new Set(), I0 = /* @__PURE__ */ new Set(), Qp = /* @__PURE__ */ new Set();
      var X2 = /* @__PURE__ */ new Set();
      Gm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          X2.has(a) || (X2.add(a), h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, K2 = function(e, t) {
        if (t === void 0) {
          var a = Ft(e) || "Component";
          z0.has(a) || (z0.add(a), h("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(L0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(L0);
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
      if (e.memoizedState = d, e.lanes === se) {
        var y = e.updateQueue;
        y.baseState = d;
      }
    }
    var H0 = {
      isMounted: th,
      enqueueSetState: function(e, t, a) {
        var i = Ru(e), l = Ta(), s = ts(i), d = Xl(l, s);
        d.payload = t, a != null && (Gm(a, "setState"), d.callback = a);
        var y = Yu(i, d, s);
        y !== null && (xr(y, i, s, l), xm(y, i, s)), ks(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Ru(e), l = Ta(), s = ts(i), d = Xl(l, s);
        d.tag = v2, d.payload = t, a != null && (Gm(a, "replaceState"), d.callback = a);
        var y = Yu(i, d, s);
        y !== null && (xr(y, i, s, l), xm(y, i, s)), ks(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ru(e), i = Ta(), l = ts(a), s = Xl(i, l);
        s.tag = Sm, t != null && (Gm(t, "forceUpdate"), s.callback = t);
        var d = Yu(a, s, l);
        d !== null && (xr(d, a, l, i), xm(d, a, l)), Yc(a, l);
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
          g === void 0 && h("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ft(t) || "Component");
        }
        return g;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Qe(a, i) || !Qe(l, s) : !0;
    }
    function zw(e, t, a) {
      var i = e.stateNode;
      {
        var l = Ft(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? h("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : h("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && h("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && h("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && h("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && h("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), t.childContextTypes && !Qp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & rn) === rt && (Qp.add(t), h(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), t.contextTypes && !Qp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & rn) === rt && (Qp.add(t), h(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), i.contextTypes && h("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !F0.has(t) && (F0.add(t), h("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && h("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && h("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ft(t) || "A pure component"), typeof i.componentDidUnmount == "function" && h("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && h("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && h("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && h("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var d = i.props !== a;
        i.props !== void 0 && d && h("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && h("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !A0.has(t) && (A0.add(t), h("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ft(t))), typeof i.getDerivedStateFromProps == "function" && h("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && h("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && h("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var y = i.state;
        y && (typeof y != "object" || kt(y)) && h("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && h("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function Z2(e, t) {
      t.updater = H0, e.stateNode = t, wl(t, e), t._reactInternalInstance = L0;
    }
    function eS(e, t, a) {
      var i = !1, l = hi, s = hi, d = t.contextType;
      if ("contextType" in t) {
        var y = (
          // Allow null for conditional declaration
          d === null || d !== void 0 && d.$$typeof === M && d._context === void 0
        );
        if (!y && !I0.has(t)) {
          I0.add(t);
          var g = "";
          d === void 0 ? g = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof d != "object" ? g = " However, it is set to a " + typeof d + "." : d.$$typeof === Ei ? g = " Did you accidentally pass the Context.Provider instead?" : d._context !== void 0 ? g = " Did you accidentally pass the Context.Consumer instead?" : g = " However, it is set to an object with keys {" + Object.keys(d).join(", ") + "}.", h("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ft(t) || "Component", g);
        }
      }
      if (typeof d == "object" && d !== null)
        s = lr(d);
      else {
        l = zf(e, t, !0);
        var b = t.contextTypes;
        i = b != null, s = i ? Pf(e, l) : hi;
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
      var z = e.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null;
      Z2(e, T);
      {
        if (typeof t.getDerivedStateFromProps == "function" && z === null) {
          var A = Ft(t) || "Component";
          j0.has(A) || (j0.add(A), h("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", A, T.state === null ? "null" : "undefined", A));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var W = null, K = null, ee = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? W = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && (W = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? K = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (K = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ee = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && (ee = "UNSAFE_componentWillUpdate"), W !== null || K !== null || ee !== null) {
            var Ae = Ft(t) || "Component", ut = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            U0.has(Ae) || (U0.add(Ae), h(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ae, ut, W !== null ? `
  ` + W : "", K !== null ? `
  ` + K : "", ee !== null ? `
  ` + ee : ""));
          }
        }
      }
      return i && $_(e, l, s), T;
    }
    function Pw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (h("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", yt(e) || "Component"), H0.enqueueReplaceState(t, t.state, null));
    }
    function tS(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var s = yt(e) || "Component";
          M0.has(s) || (M0.add(s), h("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        H0.enqueueReplaceState(t, t.state, null);
      }
    }
    function $0(e, t, a, i) {
      zw(e, t, a);
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
          var y = Ft(t) || "Component";
          P0.has(y) || (P0.add(y), h("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", y));
        }
        e.mode & rn && ho.recordLegacyContextWarning(e, l), ho.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var g = t.getDerivedStateFromProps;
      if (typeof g == "function" && (V0(e, t, g, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (Pw(e, l), bm(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var b = jt;
        b |= ro, (e.mode & Bt) !== rt && (b |= Po), e.flags |= b;
      }
    }
    function Fw(e, t, a, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var d = l.context, y = t.contextType, g = hi;
      if (typeof y == "object" && y !== null)
        g = lr(y);
      else {
        var b = zf(e, t, !0);
        g = Pf(e, b);
      }
      var T = t.getDerivedStateFromProps, z = typeof T == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !z && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || d !== g) && tS(e, l, a, g), m2();
      var A = e.memoizedState, W = l.state = A;
      if (bm(e, a, l, i), W = e.memoizedState, s === a && A === W && !im() && !wm()) {
        if (typeof l.componentDidMount == "function") {
          var K = jt;
          K |= ro, (e.mode & Bt) !== rt && (K |= Po), e.flags |= K;
        }
        return !1;
      }
      typeof T == "function" && (V0(e, t, T, a), W = e.memoizedState);
      var ee = wm() || J2(e, t, s, a, A, W, g);
      if (ee) {
        if (!z && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var Ae = jt;
          Ae |= ro, (e.mode & Bt) !== rt && (Ae |= Po), e.flags |= Ae;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var ut = jt;
          ut |= ro, (e.mode & Bt) !== rt && (ut |= Po), e.flags |= ut;
        }
        e.memoizedProps = a, e.memoizedState = W;
      }
      return l.props = a, l.state = W, l.context = g, ee;
    }
    function Iw(e, t, a, i, l) {
      var s = t.stateNode;
      h2(e, t);
      var d = t.memoizedProps, y = t.type === t.elementType ? d : go(t.type, d);
      s.props = y;
      var g = t.pendingProps, b = s.context, T = a.contextType, z = hi;
      if (typeof T == "object" && T !== null)
        z = lr(T);
      else {
        var A = zf(t, a, !0);
        z = Pf(t, A);
      }
      var W = a.getDerivedStateFromProps, K = typeof W == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !K && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (d !== g || b !== z) && tS(t, s, i, z), m2();
      var ee = t.memoizedState, Ae = s.state = ee;
      if (bm(t, i, s, l), Ae = t.memoizedState, d === g && ee === Ae && !im() && !wm() && !Le)
        return typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= jt), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= Xn), !1;
      typeof W == "function" && (V0(t, a, W, i), Ae = t.memoizedState);
      var ut = wm() || J2(t, a, y, i, ee, Ae, z) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Le;
      return ut ? (!K && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Ae, z), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Ae, z)), typeof s.componentDidUpdate == "function" && (t.flags |= jt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Xn)) : (typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= jt), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= Xn), t.memoizedProps = i, t.memoizedState = Ae), s.props = i, s.state = Ae, s.context = z, ut;
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
    function Vw(e, t) {
      return !0;
    }
    function q0(e, t) {
      try {
        var a = Vw(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, d = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === w)
            return;
          console.error(i);
        }
        var y = l ? yt(l) : null, g = y ? "The above error occurred in the <" + y + "> component:" : "The above error occurred in one of your React components:", b;
        if (e.tag === F)
          b = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var T = yt(e) || "Anonymous";
          b = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + T + ".");
        }
        var z = g + `
` + d + `

` + ("" + b);
        console.error(z);
      } catch (A) {
        setTimeout(function() {
          throw A;
        });
      }
    }
    var Hw = typeof WeakMap == "function" ? WeakMap : Map;
    function nS(e, t, a) {
      var i = Xl(ln, a);
      i.tag = Kg, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        jk(l), q0(e, t);
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
        pC(e), q0(e, t), typeof l != "function" && Lk(this);
        var g = t.value, b = t.stack;
        this.componentDidCatch(g, {
          componentStack: b !== null ? b : ""
        }), typeof l != "function" && (la(e.lanes, pt) || h("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", yt(e) || "Unknown"));
      }), i;
    }
    function rS(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new Hw(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = Ak.bind(null, e, t, a);
        ia && dv(e, a), t.then(s, s);
      }
    }
    function $w(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function Bw(e, t) {
      var a = e.tag;
      if ((e.mode & Dt) === rt && (a === R || a === Ce || a === Ne)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function aS(e) {
      var t = e;
      do {
        if (t.tag === ye && bw(t))
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
              d.tag = Sm, Yu(a, d, pt);
            }
          }
          a.lanes = bt(a.lanes, pt);
        }
        return e;
      }
      return e.flags |= rr, e.lanes = l, e;
    }
    function qw(e, t, a, i, l) {
      if (a.flags |= Cs, ia && dv(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Bw(a), Hr() && a.mode & Dt && K_();
        var d = aS(t);
        if (d !== null) {
          d.flags &= ~kr, iS(d, t, a, e, l), d.mode & Dt && rS(e, s, l), $w(d, e, s);
          return;
        } else {
          if (!sh(l)) {
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
      i = dc(i, a), bk(i);
      var b = t;
      do {
        switch (b.tag) {
          case F: {
            var T = i;
            b.flags |= rr;
            var z = Us(l);
            b.lanes = bt(b.lanes, z);
            var A = nS(b, T, z);
            Zg(b, A);
            return;
          }
          case w:
            var W = i, K = b.type, ee = b.stateNode;
            if ((b.flags & et) === nt && (typeof K.getDerivedStateFromError == "function" || ee !== null && typeof ee.componentDidCatch == "function" && !aC(ee))) {
              b.flags |= rr;
              var Ae = Us(l);
              b.lanes = bt(b.lanes, Ae);
              var ut = W0(b, W, Ae);
              Zg(b, ut);
              return;
            }
            break;
        }
        b = b.return;
      } while (b !== null);
    }
    function Ww() {
      return null;
    }
    var Kp = p.ReactCurrentOwner, _o = !1, Y0, Xp, G0, Q0, K0, pc, X0, Qm, Jp;
    Y0 = {}, Xp = {}, G0 = {}, Q0 = {}, K0 = {}, pc = !1, X0 = {}, Qm = {}, Jp = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = u2(t, null, a, i) : t.child = Hf(t, e.child, a, i);
    }
    function Yw(e, t, a, i) {
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
          Ft(a)
        );
      }
      var d = a.render, y = t.ref, g, b;
      Bf(t, l), Ea(t);
      {
        if (Kp.current = t, Kn(!0), g = Kf(e, t, d, i, y, l), b = Xf(), t.mode & rn) {
          En(!0);
          try {
            g = Kf(e, t, d, i, y, l), b = Xf();
          } finally {
            En(!1);
          }
        }
        Kn(!1);
      }
      return xa(), e !== null && !_o ? (E2(e, t, l), Jl(e, t, l)) : (Hr() && b && Lg(t), t.flags |= ci, Ra(e, t, g, l), t.child);
    }
    function lS(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (Jk(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var d = s;
          return d = id(s), t.tag = Ne, t.type = d, e1(t, s), uS(e, t, d, i, l);
        }
        {
          var y = s.propTypes;
          if (y && po(
            y,
            i,
            // Resolved props
            "prop",
            Ft(s)
          ), a.defaultProps !== void 0) {
            var g = Ft(s) || "Unknown";
            Jp[g] || (h("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", g), Jp[g] = !0);
          }
        }
        var b = U1(a.type, null, i, t, t.mode, l);
        return b.ref = t.ref, b.return = t, t.child = b, b;
      }
      {
        var T = a.type, z = T.propTypes;
        z && po(
          z,
          i,
          // Resolved props
          "prop",
          Ft(T)
        );
      }
      var A = e.child, W = o1(e, l);
      if (!W) {
        var K = A.memoizedProps, ee = a.compare;
        if (ee = ee !== null ? ee : Qe, ee(K, i) && e.ref === t.ref)
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
          var b = s && s.propTypes;
          b && po(
            b,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Ft(s)
          );
        }
      }
      if (e !== null) {
        var T = e.memoizedProps;
        if (Qe(T, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (_o = !1, t.pendingProps = i = T, o1(e, l))
            (e.flags & Fc) !== nt && (_o = !0);
          else return t.lanes = e.lanes, Jl(e, t, l);
      }
      return J0(e, t, a, i, l);
    }
    function sS(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ge)
        if ((t.mode & Dt) === rt) {
          var d = {
            baseLanes: se,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = d, uy(t, a);
        } else if (la(a, oa)) {
          var z = {
            baseLanes: se,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = z;
          var A = s !== null ? s.baseLanes : a;
          uy(t, A);
        } else {
          var y = null, g;
          if (s !== null) {
            var b = s.baseLanes;
            g = bt(b, a);
          } else
            g = a;
          t.lanes = t.childLanes = oa;
          var T = {
            baseLanes: g,
            cachePool: y,
            transitions: null
          };
          return t.memoizedState = T, t.updateQueue = null, uy(t, g), null;
        }
      else {
        var W;
        s !== null ? (W = bt(s.baseLanes, a), t.memoizedState = null) : W = a, uy(t, W);
      }
      return Ra(e, t, l, a), t.child;
    }
    function Gw(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function Qw(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function Kw(e, t, a) {
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
          Ft(a)
        );
      }
      var d;
      {
        var y = zf(t, a, !0);
        d = Pf(t, y);
      }
      var g, b;
      Bf(t, l), Ea(t);
      {
        if (Kp.current = t, Kn(!0), g = Kf(e, t, a, i, d, l), b = Xf(), t.mode & rn) {
          En(!0);
          try {
            g = Kf(e, t, a, i, d, l), b = Xf();
          } finally {
            En(!1);
          }
        }
        Kn(!1);
      }
      return xa(), e !== null && !_o ? (E2(e, t, l), Jl(e, t, l)) : (Hr() && b && Lg(t), t.flags |= ci, Ra(e, t, g, l), t.child);
    }
    function fS(e, t, a, i, l) {
      {
        switch (pT(t)) {
          case !1: {
            var s = t.stateNode, d = t.type, y = new d(t.memoizedProps, s.context), g = y.state;
            s.updater.enqueueSetState(s, g, null);
            break;
          }
          case !0: {
            t.flags |= et, t.flags |= rr;
            var b = new Error("Simulated error coming from DevTools"), T = Us(l);
            t.lanes = bt(t.lanes, T);
            var z = W0(t, dc(b, t), T);
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
            Ft(a)
          );
        }
      }
      var W;
      tl(a) ? (W = !0, lm(t)) : W = !1, Bf(t, l);
      var K = t.stateNode, ee;
      K === null ? (Xm(e, t), eS(t, a, i), $0(t, a, i, l), ee = !0) : e === null ? ee = Fw(t, a, i, l) : ee = Iw(e, t, a, i, l);
      var Ae = Z0(e, t, a, ee, W, l);
      {
        var ut = t.stateNode;
        ee && ut.props !== i && (pc || h("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", yt(t) || "a component"), pc = !0);
      }
      return Ae;
    }
    function Z0(e, t, a, i, l, s) {
      cS(e, t);
      var d = (t.flags & et) !== nt;
      if (!i && !d)
        return l && W_(t, a, !1), Jl(e, t, s);
      var y = t.stateNode;
      Kp.current = t;
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
      return t.flags |= ci, e !== null && d ? Yw(e, t, g, s) : Ra(e, t, g, s), t.memoizedState = y.state, l && W_(t, a, !0), t.child;
    }
    function dS(e) {
      var t = e.stateNode;
      t.pendingContext ? B_(e, t.pendingContext, t.pendingContext !== t.context) : t.context && B_(e, t.context, !1), e0(e, t.containerInfo);
    }
    function Xw(e, t, a) {
      if (dS(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      h2(e, t), bm(t, i, null, a);
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
          var T = dc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return pS(e, t, y, a, T);
        } else if (y !== s) {
          var z = dc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return pS(e, t, y, a, z);
        } else {
          ew(t);
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
    function Jw(e, t, a) {
      _2(t), e === null && zg(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, d = l.children, y = gg(i, l);
      return y ? d = null : s !== null && gg(i, s) && (t.flags |= za), cS(e, t), Ra(e, t, d, a), t.child;
    }
    function Zw(e, t) {
      return e === null && zg(t), null;
    }
    function eR(e, t, a, i) {
      Xm(e, t);
      var l = t.pendingProps, s = a, d = s._payload, y = s._init, g = y(d);
      t.type = g;
      var b = t.tag = Zk(g), T = go(g, l), z;
      switch (b) {
        case R:
          return e1(t, g), t.type = g = id(g), z = J0(null, t, g, T, i), z;
        case w:
          return t.type = g = O1(g), z = fS(null, t, g, T, i), z;
        case Ce:
          return t.type = g = N1(g), z = oS(null, t, g, T, i), z;
        case Re: {
          if (t.type !== t.elementType) {
            var A = g.propTypes;
            A && po(
              A,
              T,
              // Resolved for outer only
              "prop",
              Ft(g)
            );
          }
          return z = lS(
            null,
            t,
            g,
            go(g.type, T),
            // The inner type can have defaults too
            i
          ), z;
        }
      }
      var W = "";
      throw g !== null && typeof g == "object" && g.$$typeof === _t && (W = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + g + ". " + ("Lazy element type must resolve to a class or function." + W));
    }
    function tR(e, t, a, i, l) {
      Xm(e, t), t.tag = w;
      var s;
      return tl(a) ? (s = !0, lm(t)) : s = !1, Bf(t, l), eS(t, a, i), $0(t, a, i, l), Z0(null, t, a, !0, s, l);
    }
    function nR(e, t, a, i) {
      Xm(e, t);
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
          var b = Ft(a) || "Unknown";
          Y0[b] || (h("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", b, b), Y0[b] = !0);
        }
        t.mode & rn && ho.recordLegacyContextWarning(t, null), Kn(!0), Kp.current = t, y = Kf(null, t, a, l, s, i), g = Xf(), Kn(!1);
      }
      if (xa(), t.flags |= ci, typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0) {
        var T = Ft(a) || "Unknown";
        Xp[T] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), Xp[T] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0
      ) {
        {
          var z = Ft(a) || "Unknown";
          Xp[z] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", z, z, z), Xp[z] = !0);
        }
        t.tag = w, t.memoizedState = null, t.updateQueue = null;
        var A = !1;
        return tl(a) ? (A = !0, lm(t)) : A = !1, t.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, Jg(t), Z2(t, y), $0(t, a, l, i), Z0(null, t, a, !0, A, i);
      } else {
        if (t.tag = R, t.mode & rn) {
          En(!0);
          try {
            y = Kf(null, t, a, l, s, i), g = Xf();
          } finally {
            En(!1);
          }
        }
        return Hr() && g && Lg(t), Ra(null, t, y, i), e1(t, a), t.child;
      }
    }
    function e1(e, t) {
      {
        if (t && t.childContextTypes && h("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Ar();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), K0[l] || (K0[l] = !0, h("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var d = Ft(t) || "Unknown";
          Jp[d] || (h("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", d), Jp[d] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var y = Ft(t) || "Unknown";
          Q0[y] || (h("%s: Function components do not support getDerivedStateFromProps.", y), Q0[y] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var g = Ft(t) || "Unknown";
          G0[g] || (h("%s: Function components do not support contextType.", g), G0[g] = !0);
        }
      }
    }
    var t1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: Vt
    };
    function n1(e) {
      return {
        baseLanes: e,
        cachePool: Ww(),
        transitions: null
      };
    }
    function rR(e, t) {
      var a = null;
      return {
        baseLanes: bt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function aR(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return r0(e, Vp);
    }
    function iR(e, t) {
      return zs(e.childLanes, t);
    }
    function vS(e, t, a) {
      var i = t.pendingProps;
      vT(t) && (t.flags |= et);
      var l = mo.current, s = !1, d = (t.flags & et) !== nt;
      if (d || aR(l, e) ? (s = !0, t.flags &= ~et) : (e === null || e.memoizedState !== null) && (l = xw(l, C2)), l = Wf(l), Qu(t, l), e === null) {
        zg(t);
        var y = t.memoizedState;
        if (y !== null) {
          var g = y.dehydrated;
          if (g !== null)
            return cR(t, g);
        }
        var b = i.children, T = i.fallback;
        if (s) {
          var z = oR(t, b, T, a), A = t.child;
          return A.memoizedState = n1(a), t.memoizedState = t1, z;
        } else
          return r1(t, b);
      } else {
        var W = e.memoizedState;
        if (W !== null) {
          var K = W.dehydrated;
          if (K !== null)
            return fR(e, t, d, i, K, W, a);
        }
        if (s) {
          var ee = i.fallback, Ae = i.children, ut = uR(e, t, Ae, ee, a), Ze = t.child, zt = e.child.memoizedState;
          return Ze.memoizedState = zt === null ? n1(a) : rR(zt, a), Ze.childLanes = iR(e, a), t.memoizedState = t1, ut;
        } else {
          var Lt = i.children, H = lR(e, t, Lt, a);
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
    function oR(e, t, a, i) {
      var l = e.mode, s = e.child, d = {
        mode: "hidden",
        children: t
      }, y, g;
      return (l & Dt) === rt && s !== null ? (y = s, y.childLanes = se, y.pendingProps = d, e.mode & $t && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = 0, y.treeBaseDuration = 0), g = rs(a, l, i, null)) : (y = a1(d, l), g = rs(a, l, i, null)), y.return = e, g.return = e, y.sibling = g, e.child = y, g;
    }
    function a1(e, t, a) {
      return hC(e, t, se, null);
    }
    function hS(e, t) {
      return gc(e, t);
    }
    function lR(e, t, a, i) {
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
    function uR(e, t, a, i, l) {
      var s = t.mode, d = e.child, y = d.sibling, g = {
        mode: "hidden",
        children: a
      }, b;
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
        var T = t.child;
        b = T, b.childLanes = se, b.pendingProps = g, t.mode & $t && (b.actualDuration = 0, b.actualStartTime = -1, b.selfBaseDuration = d.selfBaseDuration, b.treeBaseDuration = d.treeBaseDuration), t.deletions = null;
      } else
        b = hS(d, g), b.subtreeFlags = d.subtreeFlags & In;
      var z;
      return y !== null ? z = gc(y, i) : (z = rs(i, s, l, null), z.flags |= Cn), z.return = t, b.return = t, b.sibling = z, t.child = b, z;
    }
    function Km(e, t, a, i) {
      i !== null && Pg(i), Hf(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, d = r1(t, s);
      return d.flags |= Cn, t.memoizedState = null, d;
    }
    function sR(e, t, a, i, l) {
      var s = t.mode, d = {
        mode: "visible",
        children: a
      }, y = a1(d, s), g = rs(i, s, l, null);
      return g.flags |= Cn, y.return = t, g.return = t, y.sibling = g, t.child = y, (t.mode & Dt) !== rt && Hf(t, e.child, null, l), g;
    }
    function cR(e, t, a) {
      return (e.mode & Dt) === rt ? (h("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = pt) : Eg(t) ? e.lanes = Tr : e.lanes = oa, null;
    }
    function fR(e, t, a, i, l, s, d) {
      if (a)
        if (t.flags & kr) {
          t.flags &= ~kr;
          var H = B0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Km(e, t, d, H);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= et, null;
          var te = i.children, $ = i.fallback, me = sR(e, t, te, $, d), Ve = t.child;
          return Ve.memoizedState = n1(d), t.memoizedState = t1, me;
        }
      else {
        if (Jb(), (t.mode & Dt) === rt)
          return Km(
            e,
            t,
            d,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Eg(l)) {
          var y, g, b;
          {
            var T = hb(l);
            y = T.digest, g = T.message, b = T.stack;
          }
          var z;
          g ? z = new Error(g) : z = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var A = B0(z, y, b);
          return Km(e, t, d, A);
        }
        var W = la(d, e.childLanes);
        if (_o || W) {
          var K = ly();
          if (K !== null) {
            var ee = tp(K, d);
            if (ee !== Vt && ee !== s.retryLane) {
              s.retryLane = ee;
              var Ae = ln;
              Wa(e, ee), xr(K, e, ee, Ae);
            }
          }
          w1();
          var ut = B0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Km(e, t, d, ut);
        } else if (P_(l)) {
          t.flags |= et, t.child = e.child;
          var Ze = Uk.bind(null, e);
          return mb(l, Ze), null;
        } else {
          tw(t, l, s.treeContext);
          var zt = i.children, Lt = r1(t, zt);
          return Lt.flags |= na, Lt;
        }
      }
    }
    function mS(e, t, a) {
      e.lanes = bt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = bt(i.lanes, t)), Gg(e.return, t, a);
    }
    function dR(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === ye) {
          var l = i.memoizedState;
          l !== null && mS(i, a, e);
        } else if (i.tag === le)
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
    function pR(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Tm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function vR(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !X0[e])
        if (X0[e] = !0, typeof e == "string")
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
    function hR(e, t) {
      e !== void 0 && !Qm[e] && (e !== "collapsed" && e !== "hidden" ? (Qm[e] = !0, h('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Qm[e] = !0, h('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
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
    function mR(e, t) {
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
      vR(l), hR(s, l), mR(d, l), Ra(e, t, d, a);
      var y = mo.current, g = r0(y, Vp);
      if (g)
        y = a0(y, Vp), t.flags |= et;
      else {
        var b = e !== null && (e.flags & et) !== nt;
        b && dR(t, t.child, a), y = Wf(y);
      }
      if (Qu(t, y), (t.mode & Dt) === rt)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var T = pR(t.child), z;
            T === null ? (z = t.child, t.child = null) : (z = T.sibling, T.sibling = null), i1(
              t,
              !1,
              // isBackwards
              z,
              T,
              s
            );
            break;
          }
          case "backwards": {
            var A = null, W = t.child;
            for (t.child = null; W !== null; ) {
              var K = W.alternate;
              if (K !== null && Tm(K) === null) {
                t.child = W;
                break;
              }
              var ee = W.sibling;
              W.sibling = A, A = W, W = ee;
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
    function yR(e, t, a) {
      e0(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Hf(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var _S = !1;
    function gR(e, t, a) {
      var i = t.type, l = i._context, s = t.pendingProps, d = t.memoizedProps, y = s.value;
      {
        "value" in s || _S || (_S = !0, h("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var g = t.type.propTypes;
        g && po(g, s, "prop", "Context.Provider");
      }
      if (f2(t, l, y), d !== null) {
        var b = d.value;
        if (ve(b, y)) {
          if (d.children === s.children && !im())
            return Jl(e, t, a);
        } else
          vw(t, l, a);
      }
      var T = s.children;
      return Ra(e, t, T, a), t.child;
    }
    var SS = !1;
    function _R(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (SS || (SS = !0, h("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && h("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Bf(t, a);
      var d = lr(i);
      Ea(t);
      var y;
      return Kp.current = t, Kn(!0), y = s(d), Kn(!1), xa(), t.flags |= ci, Ra(e, t, y, a), t.child;
    }
    function Zp() {
      _o = !0;
    }
    function Xm(e, t) {
      (t.mode & Dt) === rt && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Cn);
    }
    function Jl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), Q2(), fv(t.lanes), la(a, t.childLanes) ? (dw(e, t), t.child) : null;
    }
    function SR(e, t, a) {
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
    function CR(e, t, a) {
      switch (t.tag) {
        case F:
          dS(t), t.stateNode, Vf();
          break;
        case B:
          _2(t);
          break;
        case w: {
          var i = t.type;
          tl(i) && lm(t);
          break;
        }
        case I:
          e0(t, t.stateNode.containerInfo);
          break;
        case de: {
          var l = t.memoizedProps.value, s = t.type._context;
          f2(t, s, l);
          break;
        }
        case Oe:
          {
            var d = la(a, t.childLanes);
            d && (t.flags |= jt);
            {
              var y = t.stateNode;
              y.effectDuration = 0, y.passiveEffectDuration = 0;
            }
          }
          break;
        case ye: {
          var g = t.memoizedState;
          if (g !== null) {
            if (g.dehydrated !== null)
              return Qu(t, Wf(mo.current)), t.flags |= et, null;
            var b = t.child, T = b.childLanes;
            if (la(a, T))
              return vS(e, t, a);
            Qu(t, Wf(mo.current));
            var z = Jl(e, t, a);
            return z !== null ? z.sibling : null;
          } else
            Qu(t, Wf(mo.current));
          break;
        }
        case le: {
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
          return t.lanes = se, sS(e, t, a);
      }
      return Jl(e, t, a);
    }
    function CS(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return SR(e, t, U1(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || im() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          _o = !0;
        else {
          var s = o1(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & et) === nt)
            return _o = !1, CR(e, t, a);
          (e.flags & Fc) !== nt ? _o = !0 : _o = !1;
        }
      } else if (_o = !1, Hr() && Wb(t)) {
        var d = t.index, y = Yb();
        Q_(t, y, d);
      }
      switch (t.lanes = se, t.tag) {
        case N:
          return nR(e, t, t.type, a);
        case $e: {
          var g = t.elementType;
          return eR(e, t, g, a);
        }
        case R: {
          var b = t.type, T = t.pendingProps, z = t.elementType === b ? T : go(b, T);
          return J0(e, t, b, z, a);
        }
        case w: {
          var A = t.type, W = t.pendingProps, K = t.elementType === A ? W : go(A, W);
          return fS(e, t, A, K, a);
        }
        case F:
          return Xw(e, t, a);
        case B:
          return Jw(e, t, a);
        case ie:
          return Zw(e, t);
        case ye:
          return vS(e, t, a);
        case I:
          return yR(e, t, a);
        case Ce: {
          var ee = t.type, Ae = t.pendingProps, ut = t.elementType === ee ? Ae : go(ee, Ae);
          return oS(e, t, ee, ut, a);
        }
        case ae:
          return Gw(e, t, a);
        case oe:
          return Qw(e, t, a);
        case Oe:
          return Kw(e, t, a);
        case de:
          return gR(e, t, a);
        case Se:
          return _R(e, t, a);
        case Re: {
          var Ze = t.type, zt = t.pendingProps, Lt = go(Ze, zt);
          if (t.type !== t.elementType) {
            var H = Ze.propTypes;
            H && po(
              H,
              Lt,
              // Resolved for outer only
              "prop",
              Ft(Ze)
            );
          }
          return Lt = go(Ze.type, Lt), lS(e, t, Ze, Lt, a);
        }
        case Ne:
          return uS(e, t, t.type, t.pendingProps, a);
        case it: {
          var te = t.type, $ = t.pendingProps, me = t.elementType === te ? $ : go(te, $);
          return tR(e, t, te, me, a);
        }
        case le:
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
          $x(e, l.stateNode);
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
        var d = t.stateNode, y = t0(), g = qx(d, a, s, i, l, y);
        t.updateQueue = g, g && Jf(t);
      }
    }, wS = function(e, t, a, i) {
      a !== i && Jf(t);
    };
    function ev(e, t) {
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = se, i = nt;
      if (t) {
        if ((e.mode & $t) !== rt) {
          for (var g = e.selfBaseDuration, b = e.child; b !== null; )
            a = bt(a, bt(b.lanes, b.childLanes)), i |= b.subtreeFlags & In, i |= b.flags & In, g += b.treeBaseDuration, b = b.sibling;
          e.treeBaseDuration = g;
        } else
          for (var T = e.child; T !== null; )
            a = bt(a, bt(T.lanes, T.childLanes)), i |= T.subtreeFlags & In, i |= T.flags & In, T.return = e, T = T.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & $t) !== rt) {
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
    function ER(e, t, a) {
      if (ow() && (t.mode & Dt) !== rt && (t.flags & et) === nt)
        return n2(t), Vf(), t.flags |= kr | Cs | rr, !1;
      var i = dm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (aw(t), Br(t), (t.mode & $t) !== rt) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Vf(), (t.flags & et) === nt && (t.memoizedState = null), t.flags |= jt, Br(t), (t.mode & $t) !== rt) {
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
      switch (Mg(t), t.tag) {
        case N:
        case $e:
        case Ne:
        case R:
        case Ce:
        case ae:
        case oe:
        case Oe:
        case Se:
        case Re:
          return Br(t), null;
        case w: {
          var l = t.type;
          return tl(l) && om(t), Br(t), null;
        }
        case F: {
          var s = t.stateNode;
          if (qf(t), Dg(t), o0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var d = dm(t);
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
          var g = g2(), b = t.type;
          if (e !== null && t.stateNode != null)
            bS(e, t, b, i, g), e.ref !== t.ref && ES(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Br(t), null;
            }
            var T = t0(), z = dm(t);
            if (z)
              nw(t, g, T) && Jf(t);
            else {
              var A = Hx(b, i, g, T, t);
              xS(A, t, !1, !1), t.stateNode = A, Bx(A, b, i, g) && Jf(t);
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
            var ee = g2(), Ae = t0(), ut = dm(t);
            ut ? rw(t) && Jf(t) : t.stateNode = Wx(W, ee, Ae, t);
          }
          return Br(t), null;
        }
        case ye: {
          Yf(t);
          var Ze = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var zt = ER(e, t, Ze);
            if (!zt)
              return t.flags & rr ? t : null;
          }
          if ((t.flags & et) !== nt)
            return t.lanes = a, (t.mode & $t) !== rt && N0(t), t;
          var Lt = Ze !== null, H = e !== null && e.memoizedState !== null;
          if (Lt !== H && Lt) {
            var te = t.child;
            if (te.flags |= Fn, (t.mode & Dt) !== rt) {
              var $ = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              $ || r0(mo.current, C2) ? xk() : w1();
            }
          }
          var me = t.updateQueue;
          if (me !== null && (t.flags |= jt), Br(t), (t.mode & $t) !== rt && Lt) {
            var Ve = t.child;
            Ve !== null && (t.treeBaseDuration -= Ve.treeBaseDuration);
          }
          return null;
        }
        case I:
          return qf(t), l1(e, t), e === null && Fb(t.stateNode.containerInfo), Br(t), null;
        case de:
          var ze = t.type._context;
          return Yg(ze, t), Br(t), null;
        case it: {
          var vt = t.type;
          return tl(vt) && om(t), Br(t), null;
        }
        case le: {
          Yf(t);
          var Ct = t.memoizedState;
          if (Ct === null)
            return Br(t), null;
          var on = (t.flags & et) !== nt, Wt = Ct.rendering;
          if (Wt === null)
            if (on)
              ev(Ct, !1);
            else {
              var er = wk() && (e === null || (e.flags & et) === nt);
              if (!er)
                for (var Yt = t.child; Yt !== null; ) {
                  var Wn = Tm(Yt);
                  if (Wn !== null) {
                    on = !0, t.flags |= et, ev(Ct, !1);
                    var va = Wn.updateQueue;
                    return va !== null && (t.updateQueue = va, t.flags |= jt), t.subtreeFlags = nt, pw(t, a), Qu(t, a0(mo.current, Vp)), t.child;
                  }
                  Yt = Yt.sibling;
                }
              Ct.tail !== null && Jn() > YS() && (t.flags |= et, on = !0, ev(Ct, !1), t.lanes = Wd);
            }
          else {
            if (!on) {
              var Qr = Tm(Wt);
              if (Qr !== null) {
                t.flags |= et, on = !0;
                var yi = Qr.updateQueue;
                if (yi !== null && (t.updateQueue = yi, t.flags |= jt), ev(Ct, !0), Ct.tail === null && Ct.tailMode === "hidden" && !Wt.alternate && !Hr())
                  return Br(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Jn() * 2 - Ct.renderingStartTime > YS() && a !== oa && (t.flags |= et, on = !0, ev(Ct, !1), t.lanes = Wd);
            }
            if (Ct.isBackwards)
              Wt.sibling = t.child, t.child = Wt;
            else {
              var Da = Ct.last;
              Da !== null ? Da.sibling = Wt : t.child = Wt, Ct.last = Wt;
            }
          }
          if (Ct.tail !== null) {
            var Oa = Ct.tail;
            Ct.rendering = Oa, Ct.tail = Oa.sibling, Ct.renderingStartTime = Jn(), Oa.sibling = null;
            var ha = mo.current;
            return on ? ha = a0(ha, Vp) : ha = Wf(ha), Qu(t, ha), Oa;
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
            var mv = e.memoizedState, sl = mv !== null;
            sl !== od && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ge && (t.flags |= Fn);
          }
          return !od || (t.mode & Dt) === rt ? Br(t) : la(ul, oa) && (Br(t), t.subtreeFlags & (Cn | jt) && (t.flags |= Fn)), null;
        }
        case qe:
          return null;
        case ke:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function xR(e, t, a) {
      switch (Mg(t), t.tag) {
        case w: {
          var i = t.type;
          tl(i) && om(t);
          var l = t.flags;
          return l & rr ? (t.flags = l & ~rr | et, (t.mode & $t) !== rt && N0(t), t) : null;
        }
        case F: {
          t.stateNode, qf(t), Dg(t), o0();
          var s = t.flags;
          return (s & rr) !== nt && (s & et) === nt ? (t.flags = s & ~rr | et, t) : null;
        }
        case B:
          return n0(t), null;
        case ye: {
          Yf(t);
          var d = t.memoizedState;
          if (d !== null && d.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Vf();
          }
          var y = t.flags;
          return y & rr ? (t.flags = y & ~rr | et, (t.mode & $t) !== rt && N0(t), t) : null;
        }
        case le:
          return Yf(t), null;
        case I:
          return qf(t), null;
        case de:
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
      switch (Mg(t), t.tag) {
        case w: {
          var i = t.type.childContextTypes;
          i != null && om(t);
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
        case ye:
          Yf(t);
          break;
        case le:
          Yf(t);
          break;
        case de:
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
    var Jm = !1, qr = !1, bR = typeof WeakSet == "function" ? WeakSet : Set, Ke = null, Zf = null, ed = null;
    function wR(e) {
      zo(null, function() {
        throw e;
      }), Ss();
    }
    var RR = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & $t)
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
        RR(e, a);
      } catch (i) {
        mn(e, t, i);
      }
    }
    function kR(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        mn(e, t, i);
      }
    }
    function OS(e, t) {
      try {
        LS(e);
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
            if (Ie && gt && e.mode & $t)
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
          typeof i == "function" && h("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", yt(e));
        } else
          a.current = null;
    }
    function Zm(e, t, a) {
      try {
        a();
      } catch (i) {
        mn(e, t, i);
      }
    }
    var NS = !1;
    function TR(e, t) {
      Ix(e.containerInfo), Ke = t, DR();
      var a = NS;
      return NS = !1, a;
    }
    function DR() {
      for (; Ke !== null; ) {
        var e = Ke, t = e.child;
        (e.subtreeFlags & Fo) !== nt && t !== null ? (t.return = e, Ke = t) : OR();
      }
    }
    function OR() {
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
      if ((a & Xn) !== nt) {
        switch (en(e), e.tag) {
          case R:
          case Ce:
          case Ne:
            break;
          case w: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !pc && (s.props !== e.memoizedProps && h("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", yt(e) || "instance"), s.state !== e.memoizedState && h("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", yt(e) || "instance"));
              var d = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : go(e.type, i), l);
              {
                var y = TS;
                d === void 0 && !y.has(e.type) && (y.add(e.type), h("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", yt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = d;
            }
            break;
          }
          case F: {
            {
              var g = e.stateNode;
              fb(g.containerInfo);
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
            d.destroy = void 0, y !== void 0 && ((e & $r) !== Ya ? oo(t) : (e & yr) !== Ya && xs(t), (e & nl) !== Ya && pv(!0), Zm(t, a, y), (e & nl) !== Ya && pv(!1), (e & $r) !== Ya ? $o() : (e & yr) !== Ya && Bd());
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
            (e & $r) !== Ya ? $d(t) : (e & yr) !== Ya && qc(t);
            var d = s.create;
            (e & nl) !== Ya && pv(!0), s.destroy = d(), (e & nl) !== Ya && pv(!1), (e & $r) !== Ya ? ah() : (e & yr) !== Ya && ih();
            {
              var y = s.destroy;
              if (y !== void 0 && typeof y != "function") {
                var g = void 0;
                (s.tag & yr) !== nt ? g = "useLayoutEffect" : (s.tag & nl) !== nt ? g = "useInsertionEffect" : g = "useEffect";
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
    function LR(e, t) {
      if ((t.flags & jt) !== nt)
        switch (t.tag) {
          case Oe: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, d = Y2(), y = t.alternate === null ? "mount" : "update";
            W2() && (y = "nested-update"), typeof s == "function" && s(l, y, a, d);
            var g = t.return;
            e: for (; g !== null; ) {
              switch (g.tag) {
                case F:
                  var b = g.stateNode;
                  b.passiveEffectDuration += a;
                  break e;
                case Oe:
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
    function MR(e, t, a, i) {
      if ((a.flags & Vo) !== nt)
        switch (a.tag) {
          case R:
          case Ce:
          case Ne: {
            if (!qr)
              if (a.mode & $t)
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
                if (a.type === a.elementType && !pc && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", yt(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", yt(a) || "instance")), a.mode & $t)
                  try {
                    ol(), l.componentDidMount();
                  } finally {
                    il(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : go(a.type, t.memoizedProps), d = t.memoizedState;
                if (a.type === a.elementType && !pc && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", yt(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", yt(a) || "instance")), a.mode & $t)
                  try {
                    ol(), l.componentDidUpdate(s, d, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    il(a);
                  }
                else
                  l.componentDidUpdate(s, d, l.__reactInternalSnapshotBeforeUpdate);
              }
            var y = a.updateQueue;
            y !== null && (a.type === a.elementType && !pc && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", yt(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", yt(a) || "instance")), y2(a, y, l));
            break;
          }
          case F: {
            var g = a.updateQueue;
            if (g !== null) {
              var b = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case B:
                    b = a.child.stateNode;
                    break;
                  case w:
                    b = a.child.stateNode;
                    break;
                }
              y2(a, g, b);
            }
            break;
          }
          case B: {
            var T = a.stateNode;
            if (t === null && a.flags & jt) {
              var z = a.type, A = a.memoizedProps;
              Xx(T, z, A);
            }
            break;
          }
          case ie:
            break;
          case I:
            break;
          case Oe: {
            {
              var W = a.memoizedProps, K = W.onCommit, ee = W.onRender, Ae = a.stateNode.effectDuration, ut = Y2(), Ze = t === null ? "mount" : "update";
              W2() && (Ze = "nested-update"), typeof ee == "function" && ee(a.memoizedProps.id, Ze, a.actualDuration, a.treeBaseDuration, a.actualStartTime, ut);
              {
                typeof K == "function" && K(a.memoizedProps.id, Ze, Ae, ut), Ok(a);
                var zt = a.return;
                e: for (; zt !== null; ) {
                  switch (zt.tag) {
                    case F:
                      var Lt = zt.stateNode;
                      Lt.effectDuration += Ae;
                      break e;
                    case Oe:
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
          case ye: {
            VR(e, a);
            break;
          }
          case le:
          case it:
          case G:
          case X:
          case be:
          case ke:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      qr || a.flags & wn && LS(a);
    }
    function jR(e) {
      switch (e.tag) {
        case R:
        case Ce:
        case Ne: {
          if (e.mode & $t)
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
          typeof t.componentDidMount == "function" && kR(e, e.return, t), OS(e, e.return);
          break;
        }
        case B: {
          OS(e, e.return);
          break;
        }
      }
    }
    function AR(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === B) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? lb(l) : sb(i.stateNode, i.memoizedProps);
            } catch (d) {
              mn(e, e.return, d);
            }
          }
        } else if (i.tag === ie) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? ub(s) : cb(s, i.memoizedProps);
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
    function LS(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        if (e.tag === B ? i = a : i = a, typeof t == "function") {
          var l;
          if (e.mode & $t)
            try {
              ol(), l = t(i);
            } finally {
              il(e);
            }
          else
            l = t(i);
          typeof l == "function" && h("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", yt(e));
        } else
          t.hasOwnProperty("current") || h("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", yt(e)), t.current = i;
      }
    }
    function UR(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function MS(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, MS(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === B) {
          var a = e.stateNode;
          a !== null && Hb(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function zR(e) {
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
    function PR(e) {
      var t = zR(e);
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
        t ? rb(a, s, t) : tb(a, s);
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
        t ? nb(a, s, t) : eb(a, s);
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
    function FR(e, t, a) {
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
      UR(a);
    }
    function Zu(e, t, a) {
      for (var i = a.child; i !== null; )
        US(e, t, i), i = i.sibling;
    }
    function US(e, t, a) {
      switch (Id(a), a.tag) {
        case B:
          qr || td(a, t);
        // eslint-disable-next-line-no-fallthrough
        case ie: {
          {
            var i = Wr, l = Co;
            Wr = null, Zu(e, t, a), Wr = i, Co = l, Wr !== null && (Co ? ib(Wr, a.stateNode) : ab(Wr, a.stateNode));
          }
          return;
        }
        case at: {
          Wr !== null && (Co ? ob(Wr, a.stateNode) : Cg(Wr, a.stateNode));
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
        case Ce:
        case Re:
        case Ne: {
          if (!qr) {
            var y = a.updateQueue;
            if (y !== null) {
              var g = y.lastEffect;
              if (g !== null) {
                var b = g.next, T = b;
                do {
                  var z = T, A = z.destroy, W = z.tag;
                  A !== void 0 && ((W & nl) !== Ya ? Zm(a, t, A) : (W & yr) !== Ya && (xs(a), a.mode & $t ? (ol(), Zm(a, t, A), il(a)) : Zm(a, t, A), Bd())), T = T.next;
                } while (T !== b);
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
            var ee = qr;
            qr = ee || a.memoizedState !== null, Zu(e, t, a), qr = ee;
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
    function IR(e) {
      e.memoizedState;
    }
    function VR(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && wb(s);
          }
        }
      }
    }
    function zS(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new bR()), t.forEach(function(i) {
          var l = zk.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ia)
              if (Zf !== null && ed !== null)
                dv(ed, Zf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function HR(e, t, a) {
      Zf = a, ed = e, en(t), PS(t, e), en(t), Zf = null, ed = null;
    }
    function Eo(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          try {
            FR(e, t, s);
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
        case Ce:
        case Re:
        case Ne: {
          if (Eo(t, e), ll(e), l & jt) {
            try {
              So(nl | mr, e, e.return), Ju(nl | mr, e);
            } catch (vt) {
              mn(e, e.return, vt);
            }
            if (e.mode & $t) {
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
                var y = e.memoizedProps, g = i !== null ? i.memoizedProps : y, b = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    Jx(d, T, b, g, y, e);
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
              Zx(z, W, A);
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
                bb(t.containerInfo);
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
        case ye: {
          Eo(t, e), ll(e);
          var ee = e.child;
          if (ee.flags & Fn) {
            var Ae = ee.stateNode, ut = ee.memoizedState, Ze = ut !== null;
            if (Ae.isHidden = Ze, Ze) {
              var zt = ee.alternate !== null && ee.alternate.memoizedState !== null;
              zt || Ek();
            }
          }
          if (l & jt) {
            try {
              IR(e);
            } catch (vt) {
              mn(e, e.return, vt);
            }
            zS(e);
          }
          return;
        }
        case X: {
          var Lt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Dt
          ) {
            var H = qr;
            qr = H || Lt, Eo(t, e), qr = H;
          } else
            Eo(t, e);
          if (ll(e), l & Fn) {
            var te = e.stateNode, $ = e.memoizedState, me = $ !== null, Ve = e;
            if (te.isHidden = me, me && !Lt && (Ve.mode & Dt) !== rt) {
              Ke = Ve;
              for (var ze = Ve.child; ze !== null; )
                Ke = ze, BR(ze), ze = ze.sibling;
            }
            AR(Ve, me);
          }
          return;
        }
        case le: {
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
          PR(e);
        } catch (a) {
          mn(e, e.return, a);
        }
        e.flags &= ~Cn;
      }
      t & na && (e.flags &= ~na);
    }
    function $R(e, t, a) {
      Zf = a, ed = t, Ke = e, FS(e, t, a), Zf = null, ed = null;
    }
    function FS(e, t, a) {
      for (var i = (e.mode & Dt) !== rt; Ke !== null; ) {
        var l = Ke, s = l.child;
        if (l.tag === X && i) {
          var d = l.memoizedState !== null, y = d || Jm;
          if (y) {
            f1(e, t, a);
            continue;
          } else {
            var g = l.alternate, b = g !== null && g.memoizedState !== null, T = b || qr, z = Jm, A = qr;
            Jm = y, qr = T, qr && !A && (Ke = l, qR(l));
            for (var W = s; W !== null; )
              Ke = W, FS(
                W,
                // New root; bubble back up to here and stop.
                t,
                a
              ), W = W.sibling;
            Ke = l, Jm = z, qr = A, f1(e, t, a);
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
    function BR(e) {
      for (; Ke !== null; ) {
        var t = Ke, a = t.child;
        switch (t.tag) {
          case R:
          case Ce:
          case Re:
          case Ne: {
            if (t.mode & $t)
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
    function qR(e) {
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
          jR(t);
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
    function WR(e, t, a, i) {
      Ke = t, YR(t, e, a, i);
    }
    function YR(e, t, a, i) {
      for (; Ke !== null; ) {
        var l = Ke, s = l.child;
        (l.subtreeFlags & ao) !== nt && s !== null ? (s.return = l, Ke = s) : GR(e, t, a, i);
      }
    }
    function GR(e, t, a, i) {
      for (; Ke !== null; ) {
        var l = Ke;
        if ((l.flags & ta) !== nt) {
          en(l);
          try {
            QR(t, l, a, i);
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
    function QR(e, t, a, i) {
      switch (t.tag) {
        case R:
        case Ce:
        case Ne: {
          if (t.mode & $t) {
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
    function KR(e) {
      Ke = e, XR();
    }
    function XR() {
      for (; Ke !== null; ) {
        var e = Ke, t = e.child;
        if ((Ke.flags & Ua) !== nt) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              Ke = l, ek(l, e);
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
        (e.subtreeFlags & ao) !== nt && t !== null ? (t.return = e, Ke = t) : JR();
      }
    }
    function JR() {
      for (; Ke !== null; ) {
        var e = Ke;
        (e.flags & ta) !== nt && (en(e), ZR(e), hn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ke = t;
          return;
        }
        Ke = e.return;
      }
    }
    function ZR(e) {
      switch (e.tag) {
        case R:
        case Ce:
        case Ne: {
          e.mode & $t ? (O0(), So($r | mr, e, e.return), D0(e)) : So($r | mr, e, e.return);
          break;
        }
      }
    }
    function ek(e, t) {
      for (; Ke !== null; ) {
        var a = Ke;
        en(a), nk(a, t), hn();
        var i = a.child;
        i !== null ? (i.return = a, Ke = i) : tk(e);
      }
    }
    function tk(e) {
      for (; Ke !== null; ) {
        var t = Ke, a = t.sibling, i = t.return;
        if (MS(t), t === e) {
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
    function nk(e, t) {
      switch (e.tag) {
        case R:
        case Ce:
        case Ne: {
          e.mode & $t ? (O0(), So($r, e, t), D0(e)) : So($r, e, t);
          break;
        }
      }
    }
    function rk(e) {
      switch (e.tag) {
        case R:
        case Ce:
        case Ne: {
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
    function ak(e) {
      switch (e.tag) {
        case R:
        case Ce:
        case Ne: {
          try {
            Ju($r | mr, e);
          } catch (t) {
            mn(e, e.return, t);
          }
          break;
        }
      }
    }
    function ik(e) {
      switch (e.tag) {
        case R:
        case Ce:
        case Ne: {
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
    function ok(e) {
      switch (e.tag) {
        case R:
        case Ce:
        case Ne:
          try {
            So($r | mr, e, e.return);
          } catch (t) {
            mn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var tv = Symbol.for;
      tv("selector.component"), tv("selector.has_pseudo_class"), tv("selector.role"), tv("selector.test_id"), tv("selector.text");
    }
    var lk = [];
    function uk() {
      lk.forEach(function(e) {
        return e();
      });
    }
    var sk = p.ReactCurrentActQueue;
    function ck(e) {
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
        return !e && sk.current !== null && h("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var fk = Math.ceil, d1 = p.ReactCurrentDispatcher, p1 = p.ReactCurrentOwner, Yr = p.ReactCurrentBatchConfig, xo = p.ReactCurrentActQueue, Sr = (
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
    ), Zl = 0, nv = 1, vc = 2, ey = 3, rv = 4, BS = 5, v1 = 6, Ut = Sr, ka = null, An = null, Cr = se, ul = se, h1 = $u(se), Er = Zl, av = null, ty = se, iv = se, ny = se, ov = null, Ga = null, m1 = 0, qS = 500, WS = 1 / 0, dk = 500, eu = null;
    function lv() {
      WS = Jn() + dk;
    }
    function YS() {
      return WS;
    }
    var ry = !1, y1 = null, nd = null, hc = !1, es = null, uv = se, g1 = [], _1 = null, pk = 50, sv = 0, S1 = null, C1 = !1, ay = !1, vk = 50, rd = 0, iy = null, cv = ln, oy = se, GS = !1;
    function ly() {
      return ka;
    }
    function Ta() {
      return (Ut & (Gr | qi)) !== Sr ? Jn() : (cv !== ln || (cv = Jn()), cv);
    }
    function ts(e) {
      var t = e.mode;
      if ((t & Dt) === rt)
        return pt;
      if ((Ut & Gr) !== Sr && Cr !== se)
        return Us(Cr);
      var a = sw() !== uw;
      if (a) {
        if (Yr.transition !== null) {
          var i = Yr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return oy === Vt && (oy = Jd()), oy;
      }
      var l = $a();
      if (l !== Vt)
        return l;
      var s = Yx();
      return s;
    }
    function hk(e) {
      var t = e.mode;
      return (t & Dt) === rt ? pt : fh();
    }
    function xr(e, t, a, i) {
      Fk(), GS && h("useInsertionEffect must not schedule updates."), C1 && (ay = !0), Lu(e, a, i), (Ut & Gr) !== se && e === ka ? Hk(t) : (ia && Fs(e, t, a), $k(t), e === ka && ((Ut & Gr) === Sr && (iv = bt(iv, a)), Er === rv && ns(e, Cr)), Qa(e, i), a === pt && Ut === Sr && (t.mode & Dt) === rt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !xo.isBatchingLegacy && (lv(), G_()));
    }
    function mk(e, t, a) {
      var i = e.current;
      i.lanes = t, Lu(e, t, a), Qa(e, a);
    }
    function yk(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ut & Gr) !== Sr
      );
    }
    function Qa(e, t) {
      var a = e.callbackNode;
      df(e, t);
      var i = ff(e, e === ka ? Cr : se);
      if (i === se) {
        a !== null && cC(a), e.callbackNode = null, e.callbackPriority = Vt;
        return;
      }
      var l = Wo(i), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(xo.current !== null && a !== T1)) {
        a == null && s !== pt && h("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && cC(a);
      var d;
      if (l === pt)
        e.tag === Bu ? (xo.isBatchingLegacy !== null && (xo.didScheduleLegacyUpdate = !0), qb(XS.bind(null, e))) : Y_(XS.bind(null, e)), xo.current !== null ? xo.current.push(qu) : Qx(function() {
          (Ut & (Gr | qi)) === Sr && qu();
        }), d = null;
      else {
        var y;
        switch (gh(i)) {
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
      if (Aw(), cv = ln, oy = se, (Ut & (Gr | qi)) !== Sr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = nu();
      if (i && e.callbackNode !== a)
        return null;
      var l = ff(e, e === ka ? Cr : se);
      if (l === se)
        return null;
      var s = !vf(e, l) && !ch(e, l) && !t, d = s ? kk(e, l) : sy(e, l);
      if (d !== Zl) {
        if (d === vc) {
          var y = pf(e);
          y !== se && (l = y, d = E1(e, y));
        }
        if (d === nv) {
          var g = av;
          throw mc(e, se), ns(e, l), Qa(e, Jn()), g;
        }
        if (d === v1)
          ns(e, l);
        else {
          var b = !vf(e, l), T = e.current.alternate;
          if (b && !_k(T)) {
            if (d = sy(e, l), d === vc) {
              var z = pf(e);
              z !== se && (l = z, d = E1(e, z));
            }
            if (d === nv) {
              var A = av;
              throw mc(e, se), ns(e, l), Qa(e, Jn()), A;
            }
          }
          e.finishedWork = T, e.finishedLanes = l, gk(e, d, l);
        }
      }
      return Qa(e, Jn()), e.callbackNode === a ? QS.bind(null, e) : null;
    }
    function E1(e, t) {
      var a = ov;
      if (yf(e)) {
        var i = mc(e, t);
        i.flags |= kr, Pb(e.containerInfo);
      }
      var l = sy(e, t);
      if (l !== vc) {
        var s = Ga;
        Ga = a, s !== null && KS(s);
      }
      return l;
    }
    function KS(e) {
      Ga === null ? Ga = e : Ga.push.apply(Ga, e);
    }
    function gk(e, t, a) {
      switch (t) {
        case Zl:
        case nv:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case vc: {
          yc(e, Ga, eu);
          break;
        }
        case ey: {
          if (ns(e, a), Pl(a) && // do not delay if we're inside an act() scope
          !fC()) {
            var i = m1 + qS - Jn();
            if (i > 10) {
              var l = ff(e, se);
              if (l !== se)
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
        case rv: {
          if (ns(e, a), Kd(a))
            break;
          if (!fC()) {
            var d = di(e, a), y = d, g = Jn() - y, b = Pk(g) - g;
            if (b > 10) {
              e.timeoutHandle = _g(yc.bind(null, e, Ga, eu), b);
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
    function _k(e) {
      for (var t = e; ; ) {
        if (t.flags & ku) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var s = i[l], d = s.getSnapshot, y = s.value;
                try {
                  if (!ve(d(), y))
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
      t = zs(t, ny), t = zs(t, iv), vh(e, t);
    }
    function XS(e) {
      if (Uw(), (Ut & (Gr | qi)) !== Sr)
        throw new Error("Should not already be working.");
      nu();
      var t = ff(e, se);
      if (!la(t, pt))
        return Qa(e, Jn()), null;
      var a = sy(e, t);
      if (e.tag !== Bu && a === vc) {
        var i = pf(e);
        i !== se && (t = i, a = E1(e, i));
      }
      if (a === nv) {
        var l = av;
        throw mc(e, se), ns(e, t), Qa(e, Jn()), l;
      }
      if (a === v1)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, yc(e, Ga, eu), Qa(e, Jn()), null;
    }
    function Sk(e, t) {
      t !== se && (mf(e, bt(t, pt)), Qa(e, Jn()), (Ut & (Gr | qi)) === Sr && (lv(), qu()));
    }
    function x1(e, t) {
      var a = Ut;
      Ut |= $S;
      try {
        return e(t);
      } finally {
        Ut = a, Ut === Sr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !xo.isBatchingLegacy && (lv(), G_());
      }
    }
    function Ck(e, t, a, i, l) {
      var s = $a(), d = Yr.transition;
      try {
        return Yr.transition = null, $n(zr), e(t, a, i, l);
      } finally {
        $n(s), Yr.transition = d, Ut === Sr && lv();
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
    function uy(e, t) {
      da(h1, ul, e), ul = bt(ul, t);
    }
    function b1(e) {
      ul = h1.current, fa(h1, e);
    }
    function mc(e, t) {
      e.finishedWork = null, e.finishedLanes = se;
      var a = e.timeoutHandle;
      if (a !== Sg && (e.timeoutHandle = Sg, Gx(a)), An !== null)
        for (var i = An.return; i !== null; ) {
          var l = i.alternate;
          kS(l, i), i = i.return;
        }
      ka = e;
      var s = gc(e.current, null);
      return An = s, Cr = ul = t, Er = Zl, av = null, ty = se, iv = se, ny = se, ov = null, Ga = null, mw(), ho.discardPendingWarnings(), s;
    }
    function ZS(e, t) {
      do {
        var a = An;
        try {
          if (gm(), x2(), hn(), p1.current = null, a === null || a.return === null) {
            Er = nv, av = t, An = null;
            return;
          }
          if (Ie && a.mode & $t && Ym(a, !0), tt)
            if (xa(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              ji(a, i, Cr);
            } else
              bs(a, t, Cr);
          qw(e, a.return, a, t, Cr), rC(a);
        } catch (l) {
          t = l, An === a && a !== null ? (a = a.return, An = a) : a = An;
          continue;
        }
        return;
      } while (!0);
    }
    function eC() {
      var e = d1.current;
      return d1.current = Hm, e === null ? Hm : e;
    }
    function tC(e) {
      d1.current = e;
    }
    function Ek() {
      m1 = Jn();
    }
    function fv(e) {
      ty = bt(e, ty);
    }
    function xk() {
      Er === Zl && (Er = ey);
    }
    function w1() {
      (Er === Zl || Er === ey || Er === vc) && (Er = rv), ka !== null && (As(ty) || As(iv)) && ns(ka, Cr);
    }
    function bk(e) {
      Er !== rv && (Er = vc), ov === null ? ov = [e] : ov.push(e);
    }
    function wk() {
      return Er === Zl;
    }
    function sy(e, t) {
      var a = Ut;
      Ut |= Gr;
      var i = eC();
      if (ka !== e || Cr !== t) {
        if (ia) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (dv(e, Cr), l.clear()), hh(e, t);
        }
        eu = np(), mc(e, t);
      }
      Nl(t);
      do
        try {
          Rk();
          break;
        } catch (s) {
          ZS(e, s);
        }
      while (!0);
      if (gm(), Ut = a, tC(i), An !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Wc(), ka = null, Cr = se, Er;
    }
    function Rk() {
      for (; An !== null; )
        nC(An);
    }
    function kk(e, t) {
      var a = Ut;
      Ut |= Gr;
      var i = eC();
      if (ka !== e || Cr !== t) {
        if (ia) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (dv(e, Cr), l.clear()), hh(e, t);
        }
        eu = np(), lv(), mc(e, t);
      }
      Nl(t);
      do
        try {
          Tk();
          break;
        } catch (s) {
          ZS(e, s);
        }
      while (!0);
      return gm(), tC(i), Ut = a, An !== null ? (oh(), Zl) : (Wc(), ka = null, Cr = se, Er);
    }
    function Tk() {
      for (; An !== null && !Ad(); )
        nC(An);
    }
    function nC(e) {
      var t = e.alternate;
      en(e);
      var a;
      (e.mode & $t) !== rt ? (T0(e), a = R1(t, e, ul), Ym(e, !0)) : a = R1(t, e, ul), hn(), e.memoizedProps = e.pendingProps, a === null ? rC(e) : An = a, p1.current = null;
    }
    function rC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Cs) === nt) {
          en(t);
          var l = void 0;
          if ((t.mode & $t) === rt ? l = RS(a, t, ul) : (T0(t), l = RS(a, t, ul), Ym(t, !1)), hn(), l !== null) {
            An = l;
            return;
          }
        } else {
          var s = xR(a, t);
          if (s !== null) {
            s.flags &= eh, An = s;
            return;
          }
          if ((t.mode & $t) !== rt) {
            Ym(t, !1);
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
        Yr.transition = null, $n(zr), Dk(e, t, a, i);
      } finally {
        Yr.transition = l, $n(i);
      }
      return null;
    }
    function Dk(e, t, a, i) {
      do
        nu();
      while (es !== null);
      if (Ik(), (Ut & (Gr | qi)) !== Sr)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (Vd(s), l === null)
        return Hd(), null;
      if (s === se && h("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = se, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Vt;
      var d = bt(l.lanes, l.childLanes);
      ep(e, d), e === ka && (ka = null, An = null, Cr = se), ((l.subtreeFlags & ao) !== nt || (l.flags & ao) !== nt) && (hc || (hc = !0, _1 = a, D1(io, function() {
        return nu(), null;
      })));
      var y = (l.subtreeFlags & (Fo | Io | Vo | ao)) !== nt, g = (l.flags & (Fo | Io | Vo | ao)) !== nt;
      if (y || g) {
        var b = Yr.transition;
        Yr.transition = null;
        var T = $a();
        $n(zr);
        var z = Ut;
        Ut |= qi, p1.current = null, TR(e, l), G2(), HR(e, l, s), Vx(e.containerInfo), e.current = l, ws(s), $R(l, e, s), Rs(), Ud(), Ut = z, $n(T), Yr.transition = b;
      } else
        e.current = l, G2();
      var A = hc;
      if (hc ? (hc = !1, es = e, uv = s) : (rd = 0, iy = null), d = e.pendingLanes, d === se && (nd = null), A || lC(e.current, !1), Pd(l.stateNode, i), ia && e.memoizedUpdaters.clear(), uk(), Qa(e, Jn()), t !== null)
        for (var W = e.onRecoverableError, K = 0; K < t.length; K++) {
          var ee = t[K], Ae = ee.stack, ut = ee.digest;
          W(ee.value, {
            componentStack: Ae,
            digest: ut
          });
        }
      if (ry) {
        ry = !1;
        var Ze = y1;
        throw y1 = null, Ze;
      }
      return la(uv, pt) && e.tag !== Bu && nu(), d = e.pendingLanes, la(d, pt) ? (jw(), e === S1 ? sv++ : (sv = 0, S1 = e)) : sv = 0, qu(), Hd(), null;
    }
    function nu() {
      if (es !== null) {
        var e = gh(uv), t = Vs(Va, e), a = Yr.transition, i = $a();
        try {
          return Yr.transition = null, $n(t), Nk();
        } finally {
          $n(i), Yr.transition = a;
        }
      }
      return !1;
    }
    function Ok(e) {
      g1.push(e), hc || (hc = !0, D1(io, function() {
        return nu(), null;
      }));
    }
    function Nk() {
      if (es === null)
        return !1;
      var e = _1;
      _1 = null;
      var t = es, a = uv;
      if (es = null, uv = se, (Ut & (Gr | qi)) !== Sr)
        throw new Error("Cannot flush passive effects while already rendering.");
      C1 = !0, ay = !1, Ol(a);
      var i = Ut;
      Ut |= qi, KR(t.current), WR(t, t.current, a, e);
      {
        var l = g1;
        g1 = [];
        for (var s = 0; s < l.length; s++) {
          var d = l[s];
          LR(t, d);
        }
      }
      qd(), lC(t.current, !0), Ut = i, qu(), ay ? t === iy ? rd++ : (rd = 0, iy = t) : rd = 0, C1 = !1, ay = !1, Fd(t);
      {
        var y = t.current.stateNode;
        y.effectDuration = 0, y.passiveEffectDuration = 0;
      }
      return !0;
    }
    function aC(e) {
      return nd !== null && nd.has(e);
    }
    function Lk(e) {
      nd === null ? nd = /* @__PURE__ */ new Set([e]) : nd.add(e);
    }
    function Mk(e) {
      ry || (ry = !0, y1 = e);
    }
    var jk = Mk;
    function iC(e, t, a) {
      var i = dc(a, t), l = nS(e, i, pt), s = Yu(e, l, pt), d = Ta();
      s !== null && (Lu(s, pt, d), Qa(s, d));
    }
    function mn(e, t, a) {
      if (wR(a), pv(!1), e.tag === F) {
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
            var d = dc(a, e), y = W0(i, d, pt), g = Yu(i, y, pt), b = Ta();
            g !== null && (Lu(g, pt, b), Qa(g, b));
            return;
          }
        }
        i = i.return;
      }
      h(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Ak(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = Ta();
      hf(e, a), Bk(e), ka === e && Fl(Cr, a) && (Er === rv || Er === ey && Pl(Cr) && Jn() - m1 < qS ? mc(e, se) : ny = bt(ny, a)), Qa(e, l);
    }
    function oC(e, t) {
      t === Vt && (t = hk(e));
      var a = Ta(), i = Wa(e, t);
      i !== null && (Lu(i, t, a), Qa(i, a));
    }
    function Uk(e) {
      var t = e.memoizedState, a = Vt;
      t !== null && (a = t.retryLane), oC(e, a);
    }
    function zk(e, t) {
      var a = Vt, i;
      switch (e.tag) {
        case ye:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case le:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), oC(e, a);
    }
    function Pk(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : fk(e / 1960) * 1960;
    }
    function Fk() {
      if (sv > pk)
        throw sv = 0, S1 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      rd > vk && (rd = 0, iy = null, h("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Ik() {
      ho.flushLegacyContextWarning(), ho.flushPendingUnsafeLifecycleWarnings();
    }
    function lC(e, t) {
      en(e), cy(e, Po, ik), t && cy(e, Ni, ok), cy(e, Po, rk), t && cy(e, Ni, ak), hn();
    }
    function cy(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== nt ? i = i.child : ((i.flags & t) !== nt && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var fy = null;
    function uC(e) {
      {
        if ((Ut & Gr) !== Sr || !(e.mode & Dt))
          return;
        var t = e.tag;
        if (t !== N && t !== F && t !== w && t !== R && t !== Ce && t !== Re && t !== Ne)
          return;
        var a = yt(e) || "ReactComponent";
        if (fy !== null) {
          if (fy.has(a))
            return;
          fy.add(a);
        } else
          fy = /* @__PURE__ */ new Set([a]);
        var i = fr;
        try {
          en(e), h("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? en(e) : hn();
        }
      }
    }
    var R1;
    {
      var Vk = null;
      R1 = function(e, t, a) {
        var i = mC(Vk, t);
        try {
          return CS(e, t, a);
        } catch (s) {
          if (Zb() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (gm(), x2(), kS(e, t), mC(t, i), t.mode & $t && T0(t), zo(null, CS, null, e, t, a), no()) {
            var l = Ss();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var sC = !1, k1;
    k1 = /* @__PURE__ */ new Set();
    function Hk(e) {
      if (bi && !Nw())
        switch (e.tag) {
          case R:
          case Ce:
          case Ne: {
            var t = An && yt(An) || "Unknown", a = t;
            if (!k1.has(a)) {
              k1.add(a);
              var i = yt(e) || "Unknown";
              h("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case w: {
            sC || (h("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), sC = !0);
            break;
          }
        }
    }
    function dv(e, t) {
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
        return a !== null ? (a.push(t), T1) : jd(e, t);
      }
    }
    function cC(e) {
      if (e !== T1)
        return nh(e);
    }
    function fC() {
      return xo.current !== null;
    }
    function $k(e) {
      {
        if (e.mode & Dt) {
          if (!HS())
            return;
        } else if (!ck() || Ut !== Sr || e.tag !== R && e.tag !== Ce && e.tag !== Ne)
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

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, yt(e));
          } finally {
            t ? en(e) : hn();
          }
        }
      }
    }
    function Bk(e) {
      e.tag !== Bu && HS() && xo.current === null && h(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function pv(e) {
      GS = e;
    }
    var Wi = null, ad = null, qk = function(e) {
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
          case Ce: {
            (s === ue || s === _t) && (l = !0);
            break;
          }
          case Re:
          case Ne: {
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
    var Wk = function(e, t) {
      {
        if (Wi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        nu(), tu(function() {
          L1(e.current, i, a);
        });
      }
    }, Yk = function(e, t) {
      {
        if (e.context !== hi)
          return;
        nu(), tu(function() {
          vv(t, e, null, null);
        });
      }
    };
    function L1(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, d = e.tag, y = e.type, g = null;
        switch (d) {
          case R:
          case Ne:
          case w:
            g = y;
            break;
          case Ce:
            g = y.render;
            break;
        }
        if (Wi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var b = !1, T = !1;
        if (g !== null) {
          var z = Wi(g);
          z !== void 0 && (a.has(z) ? T = !0 : t.has(z) && (d === w ? T = !0 : b = !0));
        }
        if (ad !== null && (ad.has(e) || i !== null && ad.has(i)) && (T = !0), T && (e._debugNeedsRemount = !0), T || b) {
          var A = Wa(e, pt);
          A !== null && xr(A, e, pt, ln);
        }
        l !== null && !T && L1(l, t, a), s !== null && L1(s, t, a);
      }
    }
    var Gk = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return M1(e.current, i, a), a;
      }
    };
    function M1(e, t, a) {
      {
        var i = e.child, l = e.sibling, s = e.tag, d = e.type, y = null;
        switch (s) {
          case R:
          case Ne:
          case w:
            y = d;
            break;
          case Ce:
            y = d.render;
            break;
        }
        var g = !1;
        y !== null && t.has(y) && (g = !0), g ? Qk(e, a) : i !== null && M1(i, t, a), l !== null && M1(l, t, a);
      }
    }
    function Qk(e, t) {
      {
        var a = Kk(e, t);
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
    function Kk(e, t) {
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
    function Xk(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = nt, this.subtreeFlags = nt, this.deletions = null, this.lanes = se, this.childLanes = se, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !j1 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var mi = function(e, t, a, i) {
      return new Xk(e, t, a, i);
    };
    function A1(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Jk(e) {
      return typeof e == "function" && !A1(e) && e.defaultProps === void 0;
    }
    function Zk(e) {
      if (typeof e == "function")
        return A1(e) ? w : R;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ue)
          return Ce;
        if (t === Et)
          return Re;
      }
      return N;
    }
    function gc(e, t) {
      var a = e.alternate;
      a === null ? (a = mi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = nt, a.subtreeFlags = nt, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & In, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case N:
        case R:
        case Ne:
          a.type = id(e.type);
          break;
        case w:
          a.type = O1(e.type);
          break;
        case Ce:
          a.type = N1(e.type);
          break;
      }
      return a;
    }
    function eT(e, t) {
      e.flags &= In | Cn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = se, e.lanes = t, e.child = null, e.subtreeFlags = nt, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
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
    function tT(e, t, a) {
      var i;
      return e === um ? (i = Dt, t === !0 && (i |= rn, i |= Bt)) : i = rt, ia && (i |= $t), mi(F, null, null, i);
    }
    function U1(e, t, a, i, l, s) {
      var d = N, y = e;
      if (typeof e == "function")
        A1(e) ? (d = w, y = O1(y)) : y = id(y);
      else if (typeof e == "string")
        d = B;
      else
        e: switch (e) {
          case Si:
            return rs(a.children, l, s, t);
          case ti:
            d = oe, l |= rn, (l & Dt) !== rt && (l |= Bt);
            break;
          case Ci:
            return nT(a, l, s, t);
          case Me:
            return rT(a, l, s, t);
          case We:
            return aT(a, l, s, t);
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
                  d = de;
                  break e;
                case M:
                  d = Se;
                  break e;
                case ue:
                  d = Ce, y = N1(y);
                  break e;
                case Et:
                  d = Re;
                  break e;
                case _t:
                  d = $e, y = null;
                  break e;
              }
            var g = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var b = i ? yt(i) : null;
              b && (g += `

Check the render method of \`` + b + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + g));
          }
        }
      var T = mi(d, a, t, l);
      return T.elementType = e, T.type = y, T.lanes = s, T._debugOwner = i, T;
    }
    function z1(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, d = e.props, y = U1(l, s, d, i, t, a);
      return y._debugSource = e._source, y._debugOwner = e._owner, y;
    }
    function rs(e, t, a, i) {
      var l = mi(ae, e, i, t);
      return l.lanes = a, l;
    }
    function nT(e, t, a, i) {
      typeof e.id != "string" && h('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = mi(Oe, e, i, t | $t);
      return l.elementType = Ci, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function rT(e, t, a, i) {
      var l = mi(ye, e, i, t);
      return l.elementType = Me, l.lanes = a, l;
    }
    function aT(e, t, a, i) {
      var l = mi(le, e, i, t);
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
    function iT() {
      var e = mi(B, null, null, rt);
      return e.elementType = "DELETED", e;
    }
    function oT(e) {
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
      return e === null && (e = mi(N, null, null, rt)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function lT(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Sg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Vt, this.eventTimes = Ps(se), this.expirationTimes = Ps(ln), this.pendingLanes = se, this.suspendedLanes = se, this.pingedLanes = se, this.expiredLanes = se, this.mutableReadLanes = se, this.finishedLanes = se, this.entangledLanes = se, this.entanglements = Ps(se), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], d = 0; d < Ll; d++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case um:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Bu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function yC(e, t, a, i, l, s, d, y, g, b) {
      var T = new lT(e, t, a, y, g), z = tT(t, s);
      T.current = z, z.stateNode = T;
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
      return Jg(z), T;
    }
    var I1 = "18.3.1";
    function uT(e, t, a) {
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
      var t = Ru(e), a = Bb(t);
      if (t.tag === w) {
        var i = t.type;
        if (tl(i))
          return q_(t, i, a);
      }
      return a;
    }
    function sT(e, t) {
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
      var T = !0, z = yC(a, i, T, e, l, s, d, y, g);
      z.context = gC(null);
      var A = z.current, W = Ta(), K = ts(A), ee = Xl(W, K);
      return ee.callback = t ?? null, Yu(A, ee, K), mk(z, K, W), z;
    }
    function vv(e, t, a, i) {
      zd(t, e);
      var l = t.current, s = Ta(), d = ts(l);
      xn(d);
      var y = gC(a);
      t.context === null ? t.context = y : t.pendingContext = y, bi && fr !== null && !V1 && (V1 = !0, h(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, yt(fr) || "Unknown"));
      var g = Xl(s, d);
      g.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && h("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), g.callback = i);
      var b = Yu(l, g, d);
      return b !== null && (xr(b, l, d, s), xm(b, l, d)), d;
    }
    function dy(e) {
      var t = e.current;
      return t.child ? t.child.tag === B ? t.child.stateNode : t.child.stateNode : null;
    }
    function cT(e) {
      switch (e.tag) {
        case F: {
          var t = e.stateNode;
          if (yf(t)) {
            var a = uh(t);
            Sk(t, a);
          }
          break;
        }
        case ye: {
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
      a !== null && a.dehydrated !== null && (a.retryLane = ph(a.retryLane, t));
    }
    function $1(e, t) {
      CC(e, t);
      var a = e.alternate;
      a && CC(a, t);
    }
    function fT(e) {
      if (e.tag === ye) {
        var t = Ls, a = Wa(e, t);
        if (a !== null) {
          var i = Ta();
          xr(a, e, t, i);
        }
        $1(e, t);
      }
    }
    function dT(e) {
      if (e.tag === ye) {
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
    function pT(e) {
      return xC(e);
    }
    var bC = function(e) {
      return !1;
    };
    function vT(e) {
      return bC(e);
    }
    var wC = null, RC = null, kC = null, TC = null, DC = null, OC = null, NC = null, LC = null, MC = null;
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
      }, LC = function(e) {
        xC = e;
      }, MC = function(e) {
        bC = e;
      };
    }
    function hT(e) {
      var t = ra(e);
      return t === null ? null : t.stateNode;
    }
    function mT(e) {
      return null;
    }
    function yT() {
      return fr;
    }
    function gT(e) {
      var t = e.findFiberByHostInstance, a = p.ReactCurrentDispatcher;
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
        setErrorHandler: LC,
        setSuspenseHandler: MC,
        scheduleUpdate: NC,
        currentDispatcherRef: a,
        findHostInstanceByFiber: hT,
        findFiberByHostInstance: t || mT,
        // React Refresh
        findHostInstancesForRefresh: Gk,
        scheduleRefresh: Wk,
        scheduleRoot: Yk,
        setRefreshHandler: qk,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: yT,
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
    py.prototype.render = q1.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? h("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : vy(arguments[1]) ? h("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && h("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Pn) {
          var i = EC(t.current);
          i && i.parentNode !== a && h("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      vv(e, t, null, null);
    }, py.prototype.unmount = q1.prototype.unmount = function() {
      typeof arguments[0] == "function" && h("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        JS() && h("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), tu(function() {
          vv(null, e, null, null);
        }), I_(t);
      }
    };
    function _T(e, t) {
      if (!vy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      VC(e);
      var a = !1, i = !1, l = "", s = IC;
      t != null && (t.hydrate ? E("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Mr && h(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var d = _C(e, um, null, a, i, l, s);
      tm(d.current, e);
      var y = e.nodeType === Pn ? e.parentNode : e;
      return Sp(y), new q1(d);
    }
    function py(e) {
      this._internalRoot = e;
    }
    function ST(e) {
      e && xh(e);
    }
    py.prototype.unstable_scheduleHydration = ST;
    function CT(e, t, a) {
      if (!vy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      VC(e), t === void 0 && h("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, s = !1, d = !1, y = "", g = IC;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (y = a.identifierPrefix), a.onRecoverableError !== void 0 && (g = a.onRecoverableError));
      var b = SC(t, null, e, um, i, s, d, y, g);
      if (tm(b.current, e), Sp(e), l)
        for (var T = 0; T < l.length; T++) {
          var z = l[T];
          ww(b, z);
        }
      return new py(b);
    }
    function vy(e) {
      return !!(e && (e.nodeType === ea || e.nodeType === to || e.nodeType === Ed));
    }
    function hv(e) {
      return !!(e && (e.nodeType === ea || e.nodeType === to || e.nodeType === Ed || e.nodeType === Pn && e.nodeValue === " react-mount-point-unstable "));
    }
    function VC(e) {
      e.nodeType === ea && e.tagName && e.tagName.toUpperCase() === "BODY" && h("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Np(e) && (e._reactRootContainer ? h("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : h("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var ET = p.ReactCurrentOwner, HC;
    HC = function(e) {
      if (e._reactRootContainer && e.nodeType !== Pn) {
        var t = EC(e._reactRootContainer.current);
        t && t.parentNode !== e && h("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = W1(e), l = !!(i && Hu(i));
      l && !a && h("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ea && e.tagName && e.tagName.toUpperCase() === "BODY" && h("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function W1(e) {
      return e ? e.nodeType === to ? e.documentElement : e.firstChild : null;
    }
    function $C() {
    }
    function xT(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var A = dy(d);
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
        e._reactRootContainer = d, tm(d.current, e);
        var y = e.nodeType === Pn ? e.parentNode : e;
        return Sp(y), tu(), d;
      } else {
        for (var g; g = e.lastChild; )
          e.removeChild(g);
        if (typeof i == "function") {
          var b = i;
          i = function() {
            var A = dy(T);
            b.call(A);
          };
        }
        var T = _C(
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
        e._reactRootContainer = T, tm(T.current, e);
        var z = e.nodeType === Pn ? e.parentNode : e;
        return Sp(z), tu(function() {
          vv(t, T, a, i);
        }), T;
      }
    }
    function bT(e, t) {
      e !== null && typeof e != "function" && h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function hy(e, t, a, i, l) {
      HC(a), bT(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, d;
      if (!s)
        d = xT(a, t, e, l, i);
      else {
        if (d = s, typeof l == "function") {
          var y = l;
          l = function() {
            var g = dy(d);
            y.call(g);
          };
        }
        vv(t, d, e, l);
      }
      return dy(d);
    }
    var BC = !1;
    function wT(e) {
      {
        BC || (BC = !0, h("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = ET.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || h("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ft(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ea ? e : sT(e, "findDOMNode");
    }
    function RT(e, t, a) {
      if (h("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !hv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Np(t) && t._reactRootContainer === void 0;
        i && h("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return hy(null, e, t, !0, a);
    }
    function kT(e, t, a) {
      if (h("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !hv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Np(t) && t._reactRootContainer === void 0;
        i && h("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return hy(null, e, t, !1, a);
    }
    function TT(e, t, a, i) {
      if (h("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !hv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !$y(e))
        throw new Error("parentComponent must be a valid React Component");
      return hy(e, t, a, !1, i);
    }
    var qC = !1;
    function DT(e) {
      if (qC || (qC = !0, h("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !hv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Np(e) && e._reactRootContainer === void 0;
        t && h("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = W1(e), i = a && !Hu(a);
          i && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return tu(function() {
          hy(null, null, e, !1, function() {
            e._reactRootContainer = null, I_(e);
          });
        }), !0;
      } else {
        {
          var l = W1(e), s = !!(l && Hu(l)), d = e.nodeType === ea && hv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", d ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Dr(cT), Mu(fT), _h(dT), $s($a), rp(mh), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && h("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Mc(Nx), Hy(x1, Ck, tu);
    function OT(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!vy(t))
        throw new Error("Target container is not a DOM element.");
      return uT(e, t, null, a);
    }
    function NT(e, t, a, i) {
      return TT(e, t, a, i);
    }
    var Y1 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Hu, Uf, nm, Eu, jc, x1]
    };
    function LT(e, t) {
      return Y1.usingClientEntryPoint || h('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), _T(e, t);
    }
    function MT(e, t, a) {
      return Y1.usingClientEntryPoint || h('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), CT(e, t, a);
    }
    function jT(e) {
      return JS() && h("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), tu(e);
    }
    var AT = gT({
      findFiberByHostInstance: rc,
      bundleType: 1,
      version: I1,
      rendererPackageName: "react-dom"
    });
    if (!AT && Un && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var WC = window.location.protocol;
      /^(https?|file):$/.test(WC) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (WC === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y1, Xa.createPortal = OT, Xa.createRoot = LT, Xa.findDOMNode = wT, Xa.flushSync = jT, Xa.hydrate = RT, Xa.hydrateRoot = MT, Xa.render = kT, Xa.unmountComponentAtNode = DT, Xa.unstable_batchedUpdates = x1, Xa.unstable_renderSubtreeIntoContainer = NT, Xa.version = I1, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })()), Xa;
}
var hE;
function nM() {
  if (hE) return Sy.exports;
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
  return process.env.NODE_ENV === "production" ? (c(), Sy.exports = eM()) : Sy.exports = tM(), Sy.exports;
}
var f_ = nM();
const _v = /* @__PURE__ */ OE(f_);
function a_(c, v) {
  (v == null || v > c.length) && (v = c.length);
  for (var p = 0, S = Array(v); p < v; p++) S[p] = c[p];
  return S;
}
function rM(c) {
  if (Array.isArray(c)) return c;
}
function aM(c) {
  if (Array.isArray(c)) return a_(c);
}
function iM(c) {
  if (c === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return c;
}
function mE(c, v, p, S, x, E, h) {
  try {
    var k = c[E](h), R = k.value;
  } catch (w) {
    return void p(w);
  }
  k.done ? v(R) : Promise.resolve(R).then(S, x);
}
function oM(c) {
  return function() {
    var v = this, p = arguments;
    return new Promise(function(S, x) {
      var E = c.apply(v, p);
      function h(R) {
        mE(E, S, x, h, k, "next", R);
      }
      function k(R) {
        mE(E, S, x, h, k, "throw", R);
      }
      h(void 0);
    });
  };
}
function Ry(c, v, p) {
  return v = i_(v), dM(c, IE() ? Reflect.construct(v, p || [], i_(c).constructor) : v.apply(c, p));
}
function xv(c, v) {
  if (!(c instanceof v)) throw new TypeError("Cannot call a class as a function");
}
function yE(c, v) {
  for (var p = 0; p < v.length; p++) {
    var S = v[p];
    S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(c, by(S.key), S);
  }
}
function bv(c, v, p) {
  return v && yE(c.prototype, v), p && yE(c, p), Object.defineProperty(c, "prototype", { writable: !1 }), c;
}
function fd(c, v, p) {
  return (v = by(v)) in c ? Object.defineProperty(c, v, { value: p, enumerable: !0, configurable: !0, writable: !0 }) : c[v] = p, c;
}
function Sc() {
  return (Sc = Object.assign ? Object.assign.bind() : function(c) {
    for (var v = 1; v < arguments.length; v++) {
      var p, S = arguments[v];
      for (p in S) !{}.hasOwnProperty.call(S, p) || (c[p] = S[p]);
    }
    return c;
  }).apply(null, arguments);
}
function i_(c) {
  return (i_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(v) {
    return v.__proto__ || Object.getPrototypeOf(v);
  })(c);
}
function ky(c, v) {
  if (typeof v != "function" && v !== null) throw new TypeError("Super expression must either be null or a function");
  c.prototype = Object.create(v && v.prototype, { constructor: { value: c, writable: !0, configurable: !0 } }), Object.defineProperty(c, "prototype", { writable: !1 }), v && VE(c, v);
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
function lM(c) {
  if (typeof Symbol < "u" && c[Symbol.iterator] != null || c["@@iterator"] != null) return Array.from(c);
}
function uM(c, v) {
  var p = c == null ? null : typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
  if (p != null) {
    var S, x, E, h, k = [], R = !0, w = !1;
    try {
      if (E = (p = p.call(c)).next, v !== 0) for (; !(R = (S = E.call(p)).done) && (k.push(S.value), k.length !== v); R = !0) ;
    } catch (N) {
      w = !0, x = N;
    } finally {
      try {
        if (!R && p.return != null && (h = p.return(), Object(h) !== h)) return;
      } finally {
        if (w) throw x;
      }
    }
    return k;
  }
}
function sM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cM() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gE(c, v) {
  var p, S = Object.keys(c);
  return Object.getOwnPropertySymbols && (p = Object.getOwnPropertySymbols(c), v && (p = p.filter(function(x) {
    return Object.getOwnPropertyDescriptor(c, x).enumerable;
  })), S.push.apply(S, p)), S;
}
function ce(c) {
  for (var v = 1; v < arguments.length; v++) {
    var p = arguments[v] != null ? arguments[v] : {};
    v % 2 ? gE(Object(p), !0).forEach(function(S) {
      fd(c, S, p[S]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(p)) : gE(Object(p)).forEach(function(S) {
      Object.defineProperty(c, S, Object.getOwnPropertyDescriptor(p, S));
    });
  }
  return c;
}
function Gi(c, v) {
  if (c == null) return {};
  var p, S = fM(c, v);
  if (Object.getOwnPropertySymbols) for (var x = Object.getOwnPropertySymbols(c), E = 0; E < x.length; E++) p = x[E], v.includes(p) || {}.propertyIsEnumerable.call(c, p) && (S[p] = c[p]);
  return S;
}
function fM(c, v) {
  if (c == null) return {};
  var p, S = {};
  for (p in c) if ({}.hasOwnProperty.call(c, p)) {
    if (v.includes(p)) continue;
    S[p] = c[p];
  }
  return S;
}
function dM(c, v) {
  if (v && (typeof v == "object" || typeof v == "function")) return v;
  if (v !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return iM(c);
}
function ud() {
  ud = function() {
    return v;
  };
  var c, v = {}, p = Object.prototype, S = p.hasOwnProperty, x = Object.defineProperty || function(G, X, be) {
    G[X] = be.value;
  }, Ce = typeof Symbol == "function" ? Symbol : {}, E = Ce.iterator || "@@iterator", h = Ce.asyncIterator || "@@asyncIterator", k = Ce.toStringTag || "@@toStringTag";
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
  function w(G, ge, be, P) {
    var ke, xe, ne, Le, ge = ge && ge.prototype instanceof oe ? ge : oe, ge = Object.create(ge.prototype), P = new at(P || []);
    return x(ge, "_invoke", { value: (ke = G, xe = be, ne = P, Le = F, function(Z, tt) {
      if (Le === B) throw Error("Generator is already running");
      if (Le === ie) {
        if (Z === "throw") throw tt;
        return { value: c, done: !0 };
      }
      for (ne.method = Z, ne.arg = tt; ; ) {
        var Ie = ne.delegate;
        if (Ie && (Ie = (function gt(ot, Ue) {
          var dt = Ue.method, ht = ot.iterator[dt];
          return ht === c ? (Ue.delegate = null, dt === "throw" && ot.iterator.return && (Ue.method = "return", Ue.arg = c, gt(ot, Ue), Ue.method === "throw") || dt !== "return" && (Ue.method = "throw", Ue.arg = new TypeError("The iterator does not provide a '" + dt + "' method")), ae) : (dt = N(ht, ot.iterator, Ue.arg), dt.type === "throw" ? (Ue.method = "throw", Ue.arg = dt.arg, Ue.delegate = null, ae) : (ht = dt.arg, ht ? ht.done ? (Ue[ot.resultName] = ht.value, Ue.next = ot.nextLoc, Ue.method !== "return" && (Ue.method = "next", Ue.arg = c), Ue.delegate = null, ae) : ht : (Ue.method = "throw", Ue.arg = new TypeError("iterator result is not an object"), Ue.delegate = null, ae)));
        })(Ie, ne), Ie)) {
          if (Ie === ae) continue;
          return Ie;
        }
        if (ne.method === "next") ne.sent = ne._sent = ne.arg;
        else if (ne.method === "throw") {
          if (Le === F) throw Le = ie, ne.arg;
          ne.dispatchException(ne.arg);
        } else ne.method === "return" && ne.abrupt("return", ne.arg);
        if (Le = B, Ie = N(ke, xe, ne), Ie.type === "normal") {
          if (Le = ne.done ? ie : I, Ie.arg === ae) continue;
          return { value: Ie.arg, done: ne.done };
        }
        Ie.type === "throw" && (Le = ie, ne.method = "throw", ne.arg = Ie.arg);
      }
    }) }), ge;
  }
  function N(G, X, be) {
    try {
      return { type: "normal", arg: G.call(X, be) };
    } catch (qe) {
      return { type: "throw", arg: qe };
    }
  }
  v.wrap = w;
  var F = "suspendedStart", I = "suspendedYield", B = "executing", ie = "completed", ae = {};
  function oe() {
  }
  function Se() {
  }
  function de() {
  }
  var Ce = {}, Oe = (R(Ce, E, function() {
    return this;
  }), Object.getPrototypeOf), Oe = Oe && Oe(Oe(le([]))), ye = (Oe && Oe !== p && S.call(Oe, E) && (Ce = Oe), de.prototype = oe.prototype = Object.create(Ce));
  function Re(G) {
    ["next", "throw", "return"].forEach(function(X) {
      R(G, X, function(be) {
        return this._invoke(X, be);
      });
    });
  }
  function Ne(G, X) {
    var be;
    x(this, "_invoke", { value: function(qe, ke) {
      function xe() {
        return new X(function(ne, Le) {
          (function ge(ot, Z, tt, Ie) {
            var gt, ot = N(G[ot], G, Z);
            if (ot.type !== "throw") return (Z = (gt = ot.arg).value) && typeof Z == "object" && S.call(Z, "__await") ? X.resolve(Z.__await).then(function(Ue) {
              ge("next", Ue, tt, Ie);
            }, function(Ue) {
              ge("throw", Ue, tt, Ie);
            }) : X.resolve(Z).then(function(Ue) {
              gt.value = Ue, tt(gt);
            }, function(Ue) {
              return ge("throw", Ue, tt, Ie);
            });
            Ie(ot.arg);
          })(qe, ke, ne, Le);
        });
      }
      return be = be ? be.then(xe, xe) : xe();
    } });
  }
  function $e(G) {
    var X = { tryLoc: G[0] };
    1 in G && (X.catchLoc = G[1]), 2 in G && (X.finallyLoc = G[2], X.afterLoc = G[3]), this.tryEntries.push(X);
  }
  function it(G) {
    var X = G.completion || {};
    X.type = "normal", delete X.arg, G.completion = X;
  }
  function at(G) {
    this.tryEntries = [{ tryLoc: "root" }], G.forEach($e, this), this.reset(!0);
  }
  function le(G) {
    if (G || G === "") {
      var X, be = G[E];
      if (be) return be.call(G);
      if (typeof G.next == "function") return G;
      if (!isNaN(G.length)) return X = -1, (be = function qe() {
        for (; ++X < G.length; ) if (S.call(G, X)) return qe.value = G[X], qe.done = !1, qe;
        return qe.value = c, qe.done = !0, qe;
      }).next = be;
    }
    throw new TypeError(typeof G + " is not iterable");
  }
  return x(ye, "constructor", { value: Se.prototype = de, configurable: !0 }), x(de, "constructor", { value: Se, configurable: !0 }), Se.displayName = R(de, k, "GeneratorFunction"), v.isGeneratorFunction = function(G) {
    return G = typeof G == "function" && G.constructor, !!G && (G === Se || (G.displayName || G.name) === "GeneratorFunction");
  }, v.mark = function(G) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(G, de) : (G.__proto__ = de, R(G, k, "GeneratorFunction")), G.prototype = Object.create(ye), G;
  }, v.awrap = function(G) {
    return { __await: G };
  }, Re(Ne.prototype), R(Ne.prototype, h, function() {
    return this;
  }), v.AsyncIterator = Ne, v.async = function(G, X, be, qe, ke) {
    ke === void 0 && (ke = Promise);
    var xe = new Ne(w(G, X, be, qe), ke);
    return v.isGeneratorFunction(X) ? xe : xe.next().then(function(ne) {
      return ne.done ? ne.value : xe.next();
    });
  }, Re(ye), R(ye, k, "Generator"), R(ye, E, function() {
    return this;
  }), R(ye, "toString", function() {
    return "[object Generator]";
  }), v.keys = function(G) {
    var X, be = Object(G), qe = [];
    for (X in be) qe.push(X);
    return qe.reverse(), function ke() {
      for (; qe.length; ) {
        var xe = qe.pop();
        if (xe in be) return ke.value = xe, ke.done = !1, ke;
      }
      return ke.done = !0, ke;
    };
  }, v.values = le, at.prototype = { constructor: at, reset: function(G) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = c, this.done = !1, this.delegate = null, this.method = "next", this.arg = c, this.tryEntries.forEach(it), !G) for (var X in this) X.charAt(0) === "t" && S.call(this, X) && !isNaN(+X.slice(1)) && (this[X] = c);
  }, stop: function() {
    this.done = !0;
    var G = this.tryEntries[0].completion;
    if (G.type === "throw") throw G.arg;
    return this.rval;
  }, dispatchException: function(G) {
    if (this.done) throw G;
    var X = this;
    function be(ge, P) {
      return xe.type = "throw", xe.arg = G, X.next = ge, P && (X.method = "next", X.arg = c), !!P;
    }
    for (var qe = this.tryEntries.length - 1; 0 <= qe; --qe) {
      var ke = this.tryEntries[qe], xe = ke.completion;
      if (ke.tryLoc === "root") return be("end");
      if (ke.tryLoc <= this.prev) {
        var ne = S.call(ke, "catchLoc"), Le = S.call(ke, "finallyLoc");
        if (ne && Le) {
          if (this.prev < ke.catchLoc) return be(ke.catchLoc, !0);
          if (this.prev < ke.finallyLoc) return be(ke.finallyLoc);
        } else if (ne) {
          if (this.prev < ke.catchLoc) return be(ke.catchLoc, !0);
        } else {
          if (!Le) throw Error("try statement without catch or finally");
          if (this.prev < ke.finallyLoc) return be(ke.finallyLoc);
        }
      }
    }
  }, abrupt: function(G, X) {
    for (var be = this.tryEntries.length - 1; 0 <= be; --be) {
      var qe = this.tryEntries[be];
      if (qe.tryLoc <= this.prev && S.call(qe, "finallyLoc") && this.prev < qe.finallyLoc) {
        var ke = qe;
        break;
      }
    }
    var xe = (ke = ke && (G === "break" || G === "continue") && ke.tryLoc <= X && X <= ke.finallyLoc ? null : ke) ? ke.completion : {};
    return xe.type = G, xe.arg = X, ke ? (this.method = "next", this.next = ke.finallyLoc, ae) : this.complete(xe);
  }, complete: function(G, X) {
    if (G.type === "throw") throw G.arg;
    return G.type === "break" || G.type === "continue" ? this.next = G.arg : G.type === "return" ? (this.rval = this.arg = G.arg, this.method = "return", this.next = "end") : G.type === "normal" && X && (this.next = X), ae;
  }, finish: function(G) {
    for (var X = this.tryEntries.length - 1; 0 <= X; --X) {
      var be = this.tryEntries[X];
      if (be.finallyLoc === G) return this.complete(be.completion, be.afterLoc), it(be), ae;
    }
  }, catch: function(G) {
    for (var X = this.tryEntries.length - 1; 0 <= X; --X) {
      var be, qe, ke = this.tryEntries[X];
      if (ke.tryLoc === G) return (be = ke.completion).type === "throw" && (qe = be.arg, it(ke)), qe;
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(G, X, be) {
    return this.delegate = { iterator: le(G), resultName: X, nextLoc: be }, this.method === "next" && (this.arg = c), ae;
  } }, v;
}
function VE(c, v) {
  return (VE = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(p, S) {
    return p.__proto__ = S, p;
  })(c, v);
}
function _E(c, v) {
  return rM(c) || uM(c, v) || HE(c, v) || sM();
}
function Ty(c) {
  return aM(c) || lM(c) || HE(c) || cM();
}
function pM(c, v) {
  if (typeof c != "object" || !c) return c;
  var p = c[Symbol.toPrimitive];
  if (p === void 0) return (v === "string" ? String : Number)(c);
  if (p = p.call(c, v), typeof p != "object") return p;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
function by(c) {
  return c = pM(c, "string"), typeof c == "symbol" ? c : c + "";
}
function Xr(c) {
  return (Xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(v) {
    return typeof v;
  } : function(v) {
    return v && typeof Symbol == "function" && v.constructor === Symbol && v !== Symbol.prototype ? "symbol" : typeof v;
  })(c);
}
function HE(c, v) {
  var p;
  if (c) return typeof c == "string" ? a_(c, v) : (p = (p = {}.toString.call(c).slice(8, -1)) === "Object" && c.constructor ? c.constructor.name : p) === "Map" || p === "Set" ? Array.from(c) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? a_(c, v) : void 0;
}
var $E = { react: { componentWrap: "div", slotWrap: "div", componentWrapAttrs: { __use_react_component_wrap: "", style: { all: "unset" } }, slotWrapAttrs: { __use_react_slot_wrap: "", style: { all: "unset" } }, vueNamedSlotsKey: ["node:"] }, vue: { componentWrapHOC: function(c) {
  return function() {
    var v = (0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}).portals;
    return He.createElement(He.Fragment, null, c, (v === void 0 ? [] : v).map(function(p) {
      var S = p.Portal;
      return He.createElement(S, { key: p.key });
    }));
  };
}, componentWrapAttrs: { "data-use-vue-component-wrap": "", style: { all: "unset" } }, slotWrapAttrs: { "data-use-vue-slot-wrap": "", style: { all: "unset" } } } };
function BE() {
  var c = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : { react: {}, vue: {} }, p = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : $E, v = 2 < arguments.length ? arguments[2] : void 0, p = (c.vue || (c.vue = {}), c.react || (c.react = {}), [p, ce(ce({}, c), {}, { react: ce(ce(ce({}, p.react), c.react), {}, { componentWrapAttrs: ce(ce({}, p.react.componentWrapAttrs), c.react.componentWrapAttrs), slotWrapAttrs: ce(ce({}, p.react.slotWrapAttrs), c.react.slotWrapAttrs) }), vue: ce(ce(ce({}, p.vue), c.vue), {}, { componentWrapAttrs: ce(ce({}, p.vue.componentWrapAttrs), c.vue.componentWrapAttrs), slotWrapAttrs: ce(ce({}, p.vue.slotWrapAttrs), c.vue.slotWrapAttrs) }) })]);
  return v && p.unshift({}), Object.assign.apply(this, p);
}
var qE = ["getElementById", "getElementsByClassName", "getElementsByTagName", "getElementsByTagNameNS", "querySelector", "querySelectorAll"], sd = { Document: {}, Element: {} };
function vM(c) {
  Object.keys(sd).forEach(function(v) {
    qE.forEach(function(p) {
      var S = sd[v][p] || window[v].prototype[p];
      S && (sd[v][p] = S, window[v].prototype[p] = function() {
        for (var x = arguments.length, E = new Array(x), h = 0; h < x; h++) E[h] = arguments[h];
        var k = S.apply(this, E);
        return k && (k.constructor !== NodeList || k.constructor === NodeList && 0 < k.length) ? k : ((k = p) === "getElementById" && (k = "querySelector", E = ["#" + E[0]]), (sd.Element[k] || Element.prototype[k]).apply(c, E));
      });
    });
  });
}
function hM() {
  Object.keys(sd).forEach(function(c) {
    qE.forEach(function(v) {
      window[c].prototype[v] = sd[c][v];
    });
  });
}
var mM = ["ref"], yM = ["key"], gM = ["hashList"], t_ = parseInt(f_.version);
var _M = (() => {
  function c(v) {
    return xv(this, c), Ry(this, c, [v]);
  }
  return ky(c, He.Component), bv(c, [{ key: "render", value: function() {
    var v = this.props.component, p = this.props.passedProps, p = (p.ref, Gi(p, mM));
    return He.createElement(v, p, this.props.children);
  } }]);
})(), SM = function(c, v, p) {
  var S = (() => {
    function x(E) {
      var h;
      return xv(this, x), (h = Ry(this, x, [E])).state = ce(ce({}, E), v.isSlots ? { children: c } : {}), h.setRef = h.setRef.bind(h), h.vueInReactCall = h.vueInReactCall.bind(h), (h.__veauryVueWrapperRef__ = p).__veauryVueInReactCall__ = h.vueInReactCall, h;
    }
    return ky(x, He.Component), bv(x, [{ key: "reactPropsLinkToVueInstance", value: function(E) {
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
        var h, k;
        return ((h = E = (E = ((k = this.$slots) == null || (h = k.default) == null ? void 0 : h.call(k)) || E) instanceof Function ? E(this) : E) == null ? void 0 : h.length) === 1 && (k = E[0]) != null && k.data && ((h = this.$attrs).key, k = Gi(h, yM), E[0].props = ce(ce({}, k), E[0].props)), E;
      } };
    } }, { key: "componentWillUnmount", value: function() {
      p.__veauryReactRef__ && (p.__veauryReactRef__.__veauryVueWrapperRef__ = null, p.__veauryReactRef__ = null);
    } }, { key: "vueInReactCall", value: function(E) {
      var h = this, k = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
      return 2 < arguments.length && arguments[2] && E && E[0] ? E.map(function(R, w) {
        return Ey(h.createSlot(R instanceof Function ? R : [R]), ce(ce(ce({}, v), k), {}, { isSlots: !0, wrapInstance: p })).render({ key: R?.key || void 0 });
      }) : Ey(this.createSlot(E), ce(ce(ce({}, v), k), {}, { isSlots: !0, wrapInstance: p })).render();
    } }, { key: "render", value: function() {
      var E, h, k, R = this, ae = this.state, w = ae.hashList, N = Gi(ae, gM), F = {}, I = {};
      for (E in N) h = E, k = void 0, N.hasOwnProperty(h) && N[h] != null && (N[h].__slot ? (N[h].reactSlot ? N[h] = N[h].reactSlot : (k = N[h], v.defaultSlotsFormatter && N[h].__trueChildren ? (N[h].__trueChildren.__top__ = R.__veauryVueWrapperRef__, N[h] = v.defaultSlotsFormatter(N[h].__trueChildren, R.vueInReactCall, w), N[h] instanceof Array ? N[h] = Ty(N[h]) : -1 < ["string", "number"].indexOf(Xr(N[h])) ? N[h] = [N[h]] : Xr(N[h]) === "object" && (N[h] = ce({}, N[h]))) : N[h] = ce({}, Ey(R.createSlot(N[h]), ce(ce({}, v), {}, { isSlots: !0, wrapInstance: p })).render()), N[h].vueFunction = k), F[h] = N[h]) : N[h].__scopedSlot && (N[h] = N[h](R.createSlot), I[h] = N[h]));
      var B, ie, ae = {};
      return ae.ref = this.setRef, v.isSlots ? this.state.children || this.props.children : (B = N, c.__syncUpdateForPureReactInVue && Object.keys(c.__syncUpdateForPureReactInVue).map(function(oe) {
        var Se, de;
        B[oe] && typeof B[oe] == "function" && (Se = R.__veauryVueWrapperRef__, de = B[oe], B[oe] = function() {
          for (var Ce = arguments.length, Oe = new Array(Ce), ye = 0; ye < Ce; ye++) Oe[ye] = arguments[ye];
          Se.__veaurySyncUpdateProps__(c.__syncUpdateForPureReactInVue[oe].apply(this, Oe)), de.apply(this, Oe), Se.macroTaskUpdate = !0, Se.__veauryMountReactComponent__(!0, !0, {});
        });
      }), ie = ce(ce(ce({}, B = v.defaultPropsFormatter ? v.defaultPropsFormatter.call(this, B, this.vueInReactCall, w) : B), F), I), Object.getPrototypeOf(c) !== Function.prototype && (Xr(c) !== "object" || c.render) || x.catchVueRefs() ? (Object.getPrototypeOf(c) === Function.prototype && delete ae.ref, He.createElement(c, Sc({}, ie, ae))) : He.createElement(_M, Sc({ passedProps: ie, component: c }, ae), ie.children));
    } }], [{ key: "catchVueRefs", value: function() {
      if (p.$parent) {
        for (var E in p.$parent.$refs) if (p.$parent.$refs[E] === p) return !0;
      }
      return !1;
    } }]);
  })();
  return fd(S, "displayName", "applyReact_".concat(c.displayName || c.name || "Component")), S;
};
function d_(c) {
  var v = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
  return c.__esModule && c.default && (c = c.default), v.isSlots && (c = c()), v = BE(v, void 0, !0), { originReactComponent: c, setup: function(p, S) {
    var x, E, h, k;
    if (!v.isSlots) return x = {}, E = PT({}), h = FT(), typeof (k = v.useInjectPropsFromWrapper || c.__veauryInjectPropsFromWrapper__) == "function" && (typeof (k = k.call(h.proxy, p)) != "function" ? (Object.assign(E, k), x.__veauryInjectedProps__ = E) : h.proxy.__veauryInjectedComputed__ = k), x;
  }, data: function() {
    return { VEAURY_Portals: [] };
  }, created: function() {
    this.__veauryPortalKeyPool__ = [], this.__veauryMaxPortalCount__ = 0;
  }, computed: { __veauryInjectedProps__: function() {
    var p;
    return (p = this.__veauryInjectedComputed__) == null ? void 0 : p.call(this);
  } }, render: function() {
    var p = ou(v.react.componentWrap, ce({ ref: "react" }, v.react.componentWrapAttrs || {}), this.VEAURY_Portals.map(function(S) {
      return (0, S.Portal)(ou, S.key);
    }));
    return this.__veauryCheckReactSlot__(this.$slots), p;
  }, methods: { __veauryCheckReactSlot__: function(p) {
    var S = this;
    function x(E, h, k) {
      return h[k] && (E[k] = h[k], 1);
    }
    Xr(p) === "object" && p != null && (p instanceof Array ? p.forEach(function(E) {
      S.__veauryCheckReactSlot__(E.children);
    }) : Object.keys(p).forEach(function(R) {
      var h, k, R = p[R];
      if (typeof R == "function") {
        try {
          h = R.apply(S, R.__reactArgs || [{}]);
        } catch {
          return;
        }
        (R.__trueChildren = h).forEach(function(w) {
          w.children && S.__veauryCheckReactSlot__(w.children);
        }), h.length !== 1 || x(R, h = h[0], "reactSlot") || x(R, h, "reactFunction") || h.type !== DE || ((k = h.children) == null ? void 0 : k.length) !== 1 || x(R, k = h.children[0], "reactSlot") || x(R, k, "reactFunction");
      }
    }));
  }, __veauryPushVuePortal__: function(p) {
    var S = this.__veauryPortalKeyPool__.shift() || this.__veauryMaxPortalCount__++;
    this.VEAURY_Portals.push({ Portal: p, key: S });
  }, __veauryRemoveVuePortal__: function(p) {
    var S, x = this.VEAURY_Portals.find(function(E, h) {
      if (E.Portal === p) return S = h, !0;
    });
    this.__veauryPortalKeyPool__.push(x.key), this.VEAURY_Portals.splice(S, 1);
  }, __veauryGetScopeSlot__: function(p, S, x) {
    var E = this;
    function h(k) {
      function R() {
        for (var w, N = this, F = arguments.length, I = new Array(F), B = 0; B < F; B++) I[B] = arguments[B];
        return p.reactFunction ? p.reactFunction.apply(this, I) : v.defaultSlotsFormatter ? ((w = p.apply(this, I)).__top__ = E, (w = v.defaultSlotsFormatter(w, E.__veauryVueInReactCall__, S)) instanceof Array || -1 < Xr(w).indexOf("string", "number") ? w = Ty(w) : Xr(w) === "object" && (w = ce({}, w)), w) : Ey(k(function() {
          return p.apply(N, I);
        }), ce(ce({}, v), {}, { isSlots: !0, wrapInstance: E })).render();
      }
      return v.pureTransformer && x ? R.vueFunction = x : R.vueFunction = p, R;
    }
    return h.__scopedSlot = !0, h;
  }, __veaurySyncUpdateProps__: function(p) {
    this.__veauryReactInstance__ && this.__veauryReactInstance__.setState(p);
  }, __veauryMountReactComponent__: function(p, S) {
    var x = arguments, E = this;
    return oM(ud().mark(function h() {
      var k, R, w, N, F, I, B, ie, ae, oe, Se, de, Ce, Oe, ye, Re, Ne;
      return ud().wrap(function($e) {
        for (; ; ) switch ($e.prev = $e.next) {
          case 0:
            if (k = 2 < x.length && x[2] !== void 0 ? x[2] : {}, R = {}, w = [], (ie = E.$.vnode.scopeId) && (R[ie] = "", w.push(ie)), N = {}, F = {}, p && (S == null || !S.slot)) {
              $e.next = 18;
              break;
            }
            B = ud().mark(function it(at) {
              var le;
              return ud().wrap(function(G) {
                for (; ; ) switch (G.prev = G.next) {
                  case 0:
                    if (E.$slots.hasOwnProperty(at) && E.$slots[at] != null) {
                      G.next = 2;
                      break;
                    }
                    return G.abrupt("return", 0);
                  case 2:
                    if ((le = v.react.vueNamedSlotsKey.find(function(X) {
                      return at.indexOf(X) === 0;
                    })) || at === "default") return le = at.replace(new RegExp("^".concat(le)), ""), N[le] = E.$slots[at], N[le].__slot = !0, G.abrupt("return", 0);
                    G.next = 8;
                    break;
                  case 8:
                    F[at] = E.__veauryGetScopeSlot__(E.$slots[at], w, (le = E.$.vnode) == null || (le = le.children) == null ? void 0 : le[at]);
                  case 9:
                  case "end":
                    return G.stop();
                }
              }, it);
            }), $e.t0 = ud().keys(E.$slots || {});
          case 10:
            if (($e.t1 = $e.t0()).done) {
              $e.next = 18;
              break;
            }
            return ie = $e.t1.value, $e.delegateYield(B(ie), "t2", 13);
          case 13:
            if ($e.t2 === 0) return $e.abrupt("continue", 10);
            $e.next = 16;
            break;
          case 16:
            $e.next = 10;
            break;
          case 18:
            if ((!p || S != null && S.slot) && (ae = ce({}, N), I = ae.default, delete ae.default), E.__veauryLast__ = E.__veauryLast__ || {}, E.__veauryLast__.slot = E.__veauryLast__.slot || {}, E.__veauryLast__.attrs = E.__veauryLast__.attrs || {}, oe = { slot: function() {
              E.__veauryLast__.slot = ce(ce(ce({}, I ? { children: I } : { children: null }), ae), F);
            }, attrs: function() {
              E.__veauryLast__.attrs = E.$attrs;
            } }, S && Object.keys(S).forEach(function(it) {
              return oe[it]();
            }), p) {
              $e.next = 64;
              break;
            }
            if (E.__reactBoundedPromise__ = new Promise(function(it) {
              Se = it;
            }), E.__reactBoundedPromise__.resolve = Se, oe.slot(), oe.attrs(), Oe = SM(c, v, E), de = He.createElement(Oe, Sc({}, E.$attrs, E.__veauryInjectedProps__, { children: I }, ae, F, E.$attrs.class ? { className: E.$attrs.class } : {}, R, { hashList: w }, E.$attrs.style ? { style: E.$attrs.style } : {}, { ref: function(it) {
              E.__veauryReactInstance__ = it, E.__reactBoundedPromise__.resolve(!0);
            } })), Ce = E.$refs.react, Oe = v.wrapInstance) {
              $e.next = 47;
              break;
            }
            ye = E.$parent;
          case 35:
            if (ye) {
              if (ye.parentReactWrapperRef) return Oe = ye.parentReactWrapperRef, $e.abrupt("break", 45);
              $e.next = 39;
            } else $e.next = 45;
            break;
          case 39:
            if (ye.reactWrapperRef) return Oe = ye.reactWrapperRef, $e.abrupt("break", 45);
            $e.next = 42;
            break;
          case 42:
            ye = ye.$parent, $e.next = 35;
            break;
          case 45:
            $e.next = 49;
            break;
          case 47:
            (Oe = v.wrapInstance).__veauryVueWrapperRef__ = E;
          case 49:
            if (Oe) return E.parentReactWrapperRef = Oe, E.reactPortal = function() {
              return f_.createPortal(de, Ce);
            }, Oe.pushReactPortal(E.reactPortal), $e.abrupt("return");
            $e.next = 54;
            break;
          case 54:
            if (17 < t_) return _v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED !== void 0 && (_v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = !0), Re = v.react.createRoot || _v.createRoot, 18 < t_ && !Re && console.warn("'react-dom 19' no longer supports dynamically determining whether to use 'render' or 'createRoot'. In order to be compatible with 'react-dom 17' and previous versions, you need to manually configure 'createRoot' in the veaury configuration."), E.__veauryReactApp__ = Re(Ce), E.__veauryReactApp__.render(de), $e.abrupt("return");
            $e.next = 61;
            break;
          case 61:
            _v.render(de, Ce), $e.next = 71;
            break;
          case 64:
            return $e.next = 66, E.__reactBoundedPromise__;
          case 66:
            Ne = function() {
              E.__veauryReactInstance__.setState(function(it) {
                return Object.keys(it).forEach(function(at) {
                  v.isSlots && at === "children" || delete it[at];
                }), ce(ce(ce(ce({}, E.__veauryCache__), E.__veauryInjectedProps__), !v.isSlots && E.__veauryLast__.slot), E.__veauryLast__.attrs);
              }), E.__veauryCache__ = null;
            }, !E.microTaskUpdate || E.__veauryCache__ || E.$nextTick(function() {
              Ne(), E.microTaskUpdate = !1;
            }), E.macroTaskUpdate && (clearTimeout(E.updateTimer), E.updateTimer = setTimeout(function() {
              clearTimeout(E.updateTimer), Ne(), E.macroTaskUpdate = !1;
            })), E.__veauryCache__ = ce(ce({}, E.__veauryCache__ || {}), ce(ce(ce(ce({}, k), E.$attrs.class ? { className: E.$attrs.class } : {}), ce({}, R)), {}, { hashList: w }, E.$attrs.style ? { style: E.$attrs.style } : {})), E.macroTaskUpdate || E.microTaskUpdate || Ne();
          case 71:
          case "end":
            return $e.stop();
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
    clearTimeout(this.updateTimer), vM(this.$refs.react), this.reactPortal ? (p = this.parentReactWrapperRef) != null && p.removeReactPortal(this.reactPortal) : 17 < t_ ? (p = this.__veauryReactApp__) != null && p.unmount() : _v.unmountComponentAtNode(this.$refs.react), hM();
  }, updated: function() {
    this.__VEAURY_IGNORE_STRANGE_UPDATE__ || this.__veauryMountReactComponent__(!0, { slot: !0 });
  }, inheritAttrs: !1, watch: { $attrs: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 }, __veauryInjectedProps__: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 } } };
}
var CM = /* @__PURE__ */ new Set(["onClick", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onChange", "onInput", "onInvalid", "onReset", "onSubmit", "onError", "onLoad", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onGotPointerCapture", "onLostPointerCapture", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onSelect", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onScroll", "onWheel", "onAbort", "onCanPlay", "onCanPlayThrough", "onDurationChange", "onEmptied", "onEncrypted", "onEnded", "onError", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onPause", "onPlay", "onPlaying", "onProgress", "onRateChange", "onSeeked", "onSeeking", "onStalled", "onSuspend", "onTimeUpdate", "onVolumeChange", "onWaiting", "onLoad", "onError", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionEnd", "onToggle"]);
function EM(c, v) {
  for (var p = (c = v = c?._reactInternals || c?._reactInternalFiber || v) == null ? void 0 : c.return; p; ) {
    var S = p.stateNode;
    if (S = S?.parentVueWrapperRef || S?.__veauryVueWrapperRef__) return S;
    p = p.return;
  }
}
function SE(c, v, p) {
  var S = {};
  return p.forEach(function(x) {
    S[x] = !0;
  }), c[(v === "modelValue" ? "model" : v) + "Modifiers"] = S;
}
function CE(c, v, p) {
  var S = this, x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : "v-model";
  if (!(v instanceof Array)) throw Error("[error:veaury] Parameter type error from '".concat(x, "', a single v-model is an array, such as [val, setter, argumentKey, modifiers] or [val, setter, modifiers]"));
  if (typeof v[1] != "function") throw Error("[error:veaury] Parameter type error from '".concat(x, "', a single v-model is an array, the second element of the array must be a setter function"));
  var E = v[1], h = (typeof v[2] == "string" ? (p = v[2], v[3] instanceof Array && SE(c, p, v[3])) : v[2] instanceof Array && SE(c, p, v[2]), c["onUpdate:" + p]);
  c["onUpdate:" + p] = typeof h == "function" ? function() {
    for (var k = arguments.length, R = new Array(k), w = 0; w < k; w++) R[w] = arguments[w];
    h.apply(S, R), E.apply(S, R);
  } : E, c[p] = v[0];
}
function o_(c) {
  var v = this, p = {}, S = ce({}, c);
  return Object.keys(c).forEach(function(x) {
    var E, h = x.match(/^onUpdate-([^-]+)/);
    if (h) delete S[x], E = p["onUpdate:".concat(h[1])], p["onUpdate:".concat(h[1])] = typeof E == "function" ? function() {
      for (var R = arguments.length, w = new Array(R), N = 0; N < R; N++) w[N] = arguments[N];
      E.apply(v, w), c[x].apply(v, w);
    } : c[x];
    else if (h = x.match(/^v-model($|:([^:]+)|-([^:]+))/)) h = h[2] || h[3] || "modelValue", CE(p, c[x], h), delete S[x];
    else if (x === "v-models") {
      if (Xr(c[x]) !== "object" || c[x] instanceof Array) throw Error("[error:veaury] The parameter 'v-models' must be an object type, such as {[argumentKey]: singleVModel}");
      var k = c[x];
      Object.keys(k).forEach(function(R) {
        CE(p, k[R], R, "v-models");
      }), delete S[x];
    }
  }), ce(ce({}, S), p);
}
var Dy = bv(function c() {
  xv(this, c), fd(this, "pool", /* @__PURE__ */ new Set());
}, [{ key: "getRandomId", value: function(c) {
  var v = c + (Math.random() + "").substr(2);
  return this.pool.has(v) ? this.getRandomId(c) : (this.pool.add(v), v);
} }]);
function WE(S, v) {
  var p, S = S.node;
  if (typeof S == "function" && (S = S()), (p = v) != null && p.current || typeof v == "function" || (p = v) != null && p.toString().match(/^function/) || (v = null), -1 < ["string", "number"].indexOf(Xr(S))) return S;
  if (S instanceof Array) {
    if (S.length !== 1) return S;
    S = S[0];
  }
  return ce(ce({}, S), {}, { ref: v });
}
var xM = d_(WE);
function l_(c) {
  return ou(xM, { node: function() {
    return c.node;
  } });
}
l_.originReactComponent = He.forwardRef(WE);
var bM = ["component", "node"], wM = ["component", "$slots", "children", "class", "style"], RM = ["className", "classname"], _c = "veaury-options", EE = new Dy();
function kM(c, v) {
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
function TM(c) {
  var v;
  return (v = c.node) == null ? void 0 : v.call(c);
}
var u_ = He.forwardRef(function(x, v) {
  var p, h = x.component, S = x.node, x = Gi(x, bM);
  if (h == null && S == null) return null;
  if (S != null) {
    if (S.$$typeof || typeof S == "string" || typeof S == "number") return S;
    typeof S != "function" && (p = S, S = function() {
      return p;
    });
  }
  var E, h = h || TM, k = BE(x[_c] || {}, void 0, !0), R = k.useInjectPropsFromWrapper || h.__veauryInjectPropsFromWrapper__;
  return k.isSlots || typeof R == "function" && (E = R(x)), He.createElement(DM, Sc({}, ce(ce(ce(ce({ component: h }, S ? { node: S } : {}), x), E), {}, fd({}, _c, k)), { ref: v }));
}), DM = (() => {
  function c(v) {
    var p;
    return xv(this, c), (p = Ry(this, c, [v])).state = { portals: [] }, p.__veauryPortalKeyPool__ = [], p.__veauryMaxPortalCount__ = 0, p.__veauryCurrentVueComponent__ = v.component, p.__veauryCreateVueInstance__ = p.__veauryCreateVueInstance__.bind(p), p.__veauryVueComponentContainer__ = p.createVueComponentContainer(), p;
  }
  return ky(c, He.Component), bv(c, [{ key: "pushReactPortal", value: function(v) {
    var p = this.state.portals, S = this.__veauryPortalKeyPool__.shift() || this.__veauryMaxPortalCount__++;
    p.push({ Portal: v, key: S }), this.setState({ portals: p });
  } }, { key: "removeReactPortal", value: function(v) {
    var p, S = this.state.portals, x = S.find(function(E, h) {
      if (E.Portal === v) return p = h, !0;
    });
    this.__veauryPortalKeyPool__.push(x.key), S.splice(p, 1), this.__veauryVueRef__ && this.setState({ portals: S });
  } }, { key: "createVueComponentContainer", value: function() {
    var v = this, p = {}, S = this.props[_c];
    return S.isSlots ? (Object.keys(this.props).forEach(function(x) {
      CM.has(x) && typeof v.props[x] == "function" && (p[x] = v.props[x]);
    }), S.vue.slotWrapAttrs && (p = ce(ce({}, p), S.vue.slotWrapAttrs))) : S.vue.componentWrapAttrs && (p = ce(ce({}, p), S.vue.componentWrapAttrs)), S.vue.componentWrapHOC(He.createElement("div", Sc({}, S.vue.componentWrapAttrs, { ref: this.__veauryCreateVueInstance__, key: null })), p);
  } }, { key: "shouldComponentUpdate", value: function(v, p, S) {
    var x, E, h, k, R = this;
    return v === this.props || (x = v.component, E = (E = v["v-slots"]) === void 0 ? null : E, h = v.children, v = Gi(v, ["component", _c, "v-slots", "children"].map(by)), this.__veauryCurrentVueComponent__ !== x && this.updateVueComponent(x), x.__fromReactSlot) || this.__veauryVueInstance__ && (h && (E = E || {}, Xr(h) !== "object" || h instanceof Array || h.$$typeof ? E.default = h : E = h), (k = this.__veauryVueInstance__.$data.$slots) && Object.keys(k).forEach(function(w) {
      delete k[w];
    }), E && (k || (this.__veauryVueInstance__.$data.$slots = {}), Object.assign(this.__veauryVueInstance__.$data.$slots, xE(E))), Object.keys(this.__veauryVueInstance__.$data).forEach(function(w) {
      w !== "$slots" && delete R.__veauryVueInstance__.$data[w];
    }), this.__veauryVueInstance__) && Object.assign(this.__veauryVueInstance__.$data, o_(v)), !0;
  } }, { key: "componentWillUnmount", value: function() {
    this.vuePortal ? this.parentVueWrapperRef.__veauryRemoveVuePortal__(this.vuePortal) : (this.__veauryVueInstance__ && this.__veauryVueInstance__.$.appContext.app.unmount(), EE.pool.delete(this.__veauryVueTargetId__), this.vueCreated = !1);
  } }, { key: "componentDidMount", value: function() {
    this.__veauryCreateVueInstance__(this.vueContainerElement);
  } }, { key: "__veauryCreateVueInstance__", value: function(v) {
    var p, S, x, E, h, k, R, w, N = this;
    function F(I) {
      this.__veauryVueInstance__ || (this.__veauryVueInstance__ = I);
    }
    this.vueCreated || (this.vueCreated = !0, (p = this).vueContainerElement = v, (x = this.props).component, S = x[_c], R = x.children, w = (w = x["v-slots"]) === void 0 ? {} : w, x = Gi(x, ["component", _c, "children", "v-slots"].map(by)), R && (Xr(R) !== "object" || R instanceof Array || R.$$typeof ? w.default = R : w = R), (w = xE(w)) && (x.$slots = w), F = F.bind(this), E = ce({}, o_(x)), h = { data: function() {
      return S.isSlots ? { children: p.__veauryCurrentVueComponent__.originVNode } : E;
    }, created: function() {
      this.reactWrapperRef = p, F(this);
    }, methods: { reactInVueCall: function(I) {
      return 2 < arguments.length && arguments[2] && I && I[0] ? I.map(function(B, ie) {
        return ou(l_, { node: B, key: (B == null || (B = B.data) == null ? void 0 : B.key) || ie });
      }) : ou(l_, { node: I });
    }, getScopedSlots: function(I, B) {
      var ie, ae = this, oe = (this.getScopedSlots.__scopeSlots || (this.getScopedSlots.__scopeSlots = {}), ce({}, B));
      for (ie in oe) ((Se) => {
        var de, Ce;
        !oe.hasOwnProperty(Se) || (de = oe[Se]) == null || (oe[Se] = (Ce = de, function() {
          for (var Oe, ye, Re, Ne, $e = arguments.length, it = new Array($e), at = 0; at < $e; at++) it[at] = arguments[at];
          return Ce.vueFunction ? Ce.vueFunction.apply(ae, it) : (Re = Ce.reactFunction, Re = Ce.reactSlot || Re?.apply(ae, it), Ne = S.defaultSlotsFormatter, (Oe = ae.getScopedSlots.__scopeSlots[Se]) != null && (Oe = Oe.component) != null && (Oe = Oe.ctx) != null && Oe.__veauryReactInstance__ ? (ye = ae.getScopedSlots.__scopeSlots[Se], Promise.resolve().then(function() {
            var le;
            (le = ye) != null && (le = le.component) != null && (le = le.ctx) != null && (le = le.__veauryReactInstance__) != null && le.setState({ children: Ce.apply(ae, it) });
          })) : (ye = Ne && Re ? [Ne(Re, ae.reactInVueCall)] : I(d_(function() {
            return Ce.apply(ae, it);
          }, ce(ce({}, S), {}, { isSlots: !0, wrapInstance: p }))), ae.getScopedSlots.__scopeSlots[Se] = ye), Ce.reactFunction ? ye.reactFunction = Ce.reactFunction : Ce.reactSlot && (ye.reactSlot = Ce.reactSlot), ye);
        }), oe[Se].reactFunction = de);
      })(ie);
      return oe;
    } }, mounted: function() {
      v.removeAttribute("id"), p.__veauryVueRef__ = this.$refs.use_vue_wrapper, this.$refs.use_vue_wrapper.reactWrapperRef = p;
    }, beforeUnmount: function() {
      p.__veauryVueRef__ = null, this.$refs.use_vue_wrapper.reactWrapperRef = null;
    }, render: function() {
      var I = this, de = this.$data, oe = (de.component, de.$slots), B = de.class, ie = de.style, de = Gi(de, wM), ae = this.getScopedSlots(ou, ce({}, oe)), oe = de.className, Se = de.classname, de = Gi(de, RM), Ce = {};
      return Object.keys(ae).forEach(function(Oe) {
        var ye = ae[Oe];
        Ce[Oe] = typeof ye == "function" ? ye : function() {
          return ye;
        };
      }), ou(kM(p.__veauryCurrentVueComponent__, this), ce(ce(ce(ce({}, de), B || oe || Se ? { class: B || oe || Se } : {}), ie ? { style: ie } : {}), {}, { ref: "use_vue_wrapper" }), ce({}, S.isSlots && this.children ? { default: typeof this.children == "function" ? this.children : function() {
        return I.children;
      } } : ce({}, Ce)));
    } }, v && (k = EE.getRandomId("__vue_wrapper_container_"), v.id = k, this.__veauryVueTargetId__ = k, (R = S.wrapInstance) ? (R = S.wrapInstance).reactWrapperRef = p : R = EM(this), R && document.getElementById(k) ? (this.parentVueWrapperRef = R, this.vuePortal = function(I, B) {
      return I(IT, { to: "#" + k, key: k }, [I(Object.assign(h, { router: N._router }))]);
    }, R.__veauryPushVuePortal__(this.vuePortal)) : (w = VT(h), typeof S.beforeVueAppMount == "function" && S.beforeVueAppMount(w), this.__veauryVueInstance__ = w.mount(v))));
  } }, { key: "updateVueComponent", value: function(v) {
    this.__veauryVueInstance__ && (v.__fromReactSlot ? this.__veauryVueInstance__.children = typeof v.originVNode == "function" ? v.originVNode : function() {
      return v.originVNode;
    } : (this.__veauryCurrentVueComponent__ = v, this.__veauryVueInstance__.$forceUpdate()));
  } }, { key: "render", value: function() {
    return He.createElement(this.__veauryVueComponentContainer__, { portals: this.state.portals });
  } }]);
})();
function Ey(c) {
  var v = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, p = (c || console.warn("Component must be passed in applyVueInReact!"), c.__esModule && c.default && (c = c.default), He.forwardRef(function(S, x) {
    return He.createElement(u_, Sc({}, S, { component: c, ref: x }, fd({}, _c, v)));
  }));
  return p.originVueComponent = c, p;
}
new Dy();
function OM(c) {
  var v = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, p = v.globalName, S = d_(c, v.combinedOption || {});
  return S.install = function(x) {
    var E = (1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}).globalName;
    return p && x.component(E || p, S), S;
  }, S;
}
function bE(c) {
  return c.replace(/-(\w)/g, function(v, p) {
    return p.toUpperCase();
  });
}
function Oy(c) {
  var v;
  return c ? typeof c == "string" ? (c = c.trim()).split(/\s*;\s*/).reduce(function(p, S) {
    return S && (S = S.split(/\s*:\s*/)).length === 2 && Object.assign(p, fd({}, bE(S[0]), S[1])), p;
  }, {}) : Xr(c) === "object" ? (v = {}, Object.keys(c).forEach(function(p) {
    v[bE(p)] = c[p];
  }), v) : {} : {};
}
function Ny(c) {
  return c ? c instanceof Array ? c : typeof c == "string" ? (c = c.trim()).split(/\s+/) : Xr(c) === "object" ? Object.keys(c).filter(function(v) {
    return !!c[v];
  }) : [] : [];
}
var NM = ["ref"];
function LM(c, v, p, S, x) {
  var E = c.props || {}, E = (E.ref, Gi(E, NM)), h = {}, k = (Object.keys(c.children || {}).forEach(function(N) {
    var F = c.children[N], I = $E.react.vueNamedSlotsKey.find(function(B) {
      return N.indexOf(B) === 0;
    });
    I || N === "default" ? (I = N.replace(new RegExp("^".concat(I)), "").replace(/^default$/, "children"), h[I] = S.call(c.__top__, F(), p, x)) : typeof F == "function" && (h[N] = function() {
      for (var B = arguments.length, ie = new Array(B), ae = 0; ae < B; ae++) ie[ae] = arguments[ae];
      return F.__reactArgs = ie, S(F.apply(this, ie), p, x);
    });
  }), {}), R = Oy(E.style), w = Array.from(new Set(Ny(E.class))).join(" ");
  return 0 < Object.keys(R).length && (k.style = R), w !== "" && (k.className = w), Object.assign(E, ce(ce({}, k), h)), delete E.class, typeof E.ref_for == "boolean" && delete E.ref_for, E;
}
function wE(c) {
  return c.type === $T;
}
new Dy();
function YE(c, v) {
  var p;
  return 0 < ((p = c.dirs) == null ? void 0 : p.length) ? He.createElement(MM, { vnode: c }, v) : v;
}
var MM = (() => {
  function c(v) {
    var p;
    return xv(this, c), (p = Ry(this, c, [v])).state = { prevVnode: null, savedDirectives: [], ref: null, prevProps: v }, p;
  }
  return ky(c, He.Component), bv(c, [{ key: "findDirectiveName", value: function(v) {
    var p = v.dir, S = -1;
    return [this.state.savedDirectives.find(function(x, E) {
      if (x.dir === p) return S = E, !0;
    }), S];
  } }, { key: "doDirective", value: function() {
    var v = this, E = this.state, p = E.savedDirectives;
    if (!(S = E.ref)) {
      for (var S = (this._reactInternals || this._reactInternalFiber).child; S && S.tag !== 5; ) S = S.child;
      if (!S) return;
      S = S.stateNode;
    }
    var x = this.props.vnode, E = x.dirs;
    E && (E.forEach(function(h) {
      var k, R, w, N, F, I, B;
      h && (B = (k = _E(v.findDirectiveName(h), 2))[0], k = k[1], R = (F = h.dir).created, w = F.beforeMount, N = F.mounted, I = F.beforeUpdate, F = F.updated, B ? (p[k] = ce(ce(ce({}, B), h), {}, { oldValue: B.oldValue }), B = [S, p[k], x, v.state.prevVnode], I?.apply(null, B), F?.apply(null, B), p[k].oldValue = h.value) : (p.push(h), I = [S, h, x, null], R?.apply(null, I), w?.apply(null, I), N?.apply(null, I), h.oldValue = h.value));
    }), this.setState({ prevVnode: ce({}, x), savedDirectives: p, ref: S }));
  } }, { key: "componentDidMount", value: function() {
    this.doDirective();
  } }, { key: "componentDidUpdate", value: function(v) {
    v.vnode !== this.props.vnode && this.doDirective();
  } }, { key: "componentWillUnmount", value: function() {
    var v = this, p = this.props.vnode, h = this.state, S = h.savedDirectives, x = h.ref, E = h.prevVnode, h = p.dirs;
    h && (h.forEach(function(k) {
      var R, w, N, F;
      k && (R = (F = _E(v.findDirectiveName(k), 2))[0]) && (w = (N = k.dir).beforeUnmount, N = N.unmounted, S[F[1]] = ce(ce({}, R), k), F = [x, R, p, E], w?.apply(null, F), N != null) && N.apply(null, F);
    }), this.setState({ prevVnode: ce({}, p), savedDirectives: S }));
  } }, { key: "render", value: function() {
    var v = this.props;
    return v.vnode, v.children;
  } }]);
})();
function jM(c, v) {
  var p;
  return typeof c == "function" && (p = c.toString(), c.prototype !== void 0) && c.prototype.constructor === c && (p.slice(0, 5) == "class" || 2 <= Object.getOwnPropertyNames(c.prototype).length || !/^function\s+\(|^function\s+anonymous\(/.test(p) && (!(!v || !/^function\s+[A-Z]/.test(p)) || !!/\b\(this\b|\bthis[\.\[]\b/.test(p) && (!(v && !/classCallCheck\(this/.test(p)) || /^function\sdefault_\d+\s*\(/.test(p))));
}
function GE(c, v) {
  var p, S, x, E;
  return typeof ((x = c.type) == null ? void 0 : x.originReactComponent) != "function" || jM((x = c.type) == null ? void 0 : x.originReactComponent) ? ((x = c.ref) != null && x.k ? (p = (x = c.ref) == null ? void 0 : x.k, S = (x = c.ref) == null ? void 0 : x.r) : p = (x = c.ref) == null ? void 0 : x.r, p && typeof p == "string" && (E = p, p = function(h) {
    var k;
    (k = c.ref) != null && (k = k.i) != null && k.refs && ((k = ce({}, c.ref.i.refs))[E] = h, c.ref.i.refs = k), S ? S.value = h : c.ref.i.setupState && E in c.ref.i.setupState && (c.ref.i.setupState[E] = h), h && (h.__syncUpdateProps = function() {
      v.__top__ && (c.__extraData = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, v.__top__.__syncUpdateProps({}));
    });
  }, p = new Proxy(p, { get: function(h, k) {
    return h[k];
  }, set: function(h, k, R) {
    var w;
    return (w = c.ref) != null && (w = w.i) != null && w.refs && E in ((w = c.ref) == null || (w = w.i) == null ? void 0 : w.refs) && ((w = ce({}, c.ref.i.refs))[k] = R, c.ref.i.refs = w), R;
  } })), p) : null;
}
function s_(c, v) {
  return !v || v instanceof Array && v.length === 0 || (typeof v == "string" && (v = [v]), (c = ce({}, c)).props = ce({}, c.props), v.forEach(function(p) {
    c.props[p] = "";
  })), c;
}
var AM = ["style", "class"];
function RE(c, v, p, S, x, E, h) {
  var k, R, w;
  return v === "all" || v instanceof Array || (v = v ? [v] : []), c.type === DE ? x.call(h, c.children, p, E) : typeof c.type == "string" && (v === "all" || -1 < v.indexOf(c.type)) ? (v = GE(c), w = (R = c.props || {}).style, k = R.class, R = ce(ce({}, Gi(R, AM)), {}, { style: Oy(w), className: Array.from(new Set(Ny(k))).join(" ") }, v ? { ref: v } : {}), (w = c.children || R.children) && ((w = -1 < ["string", "number"].indexOf(Xr(w)) ? [w] : Ty(w)).__top__ = h), YE(c, s_(Ja.createElement(c.type, R, x.call(h, w, p, E)), c.scopeId))) : p([c], null, S);
}
function UM() {
  var c = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, v = 1 < arguments.length ? arguments[1] : void 0, p = 2 < arguments.length ? arguments[2] : void 0;
  return p.__syncUpdateForPureReactInVue && Object.keys(p.__syncUpdateForPureReactInVue).map(function(S) {
    var x;
    c[S] && typeof c[S] == "function" && v.__top__ && (x = c[S], c[S] = function() {
      for (var E = arguments.length, h = new Array(E), k = 0; k < E; k++) h[k] = arguments[k];
      v.__extraData = p.__syncUpdateForPureReactInVue[S].apply(this, h), v.__top__.__veaurySyncUpdateProps__({}), v.__top__.macroTaskUpdate = !0, x.apply(this, h), v.__top__ && Promise.resolve().then(function() {
        v.__extraData = null, v.__top__.__veauryMountReactComponent__(!0);
      });
    });
  }), c;
}
function kE(c, v, p) {
  return !((c = c instanceof Array && c.length === 1 ? c[0] : c) instanceof Array) && c.key == null && 1 < v.length && ((c = ce({}, c)).key = "_key_".concat(p)), c;
}
function QE(S) {
  var v = S.reactComponents, p = S.domTags, S = S.division, x = S === void 0 || S;
  return function E(h, k, R) {
    var w;
    return h && h.forEach ? (h.__top__ || (h.__top__ = this), w = [], h.forEach(function(N, F) {
      if (N && N.type !== HT) {
        if ((ie = N.type) == null || !ie.originReactComponent) return N.$$typeof || typeof N == "string" || typeof N == "number" ? void w.push(N) : wE(N) ? void (N.children.trim() !== "" && w.push(N.children.trim())) : void (N.type && (s_(ie = kE(RE(N, p, k, x, E, R, h.__top__), h, F), N.scopeId), w.push(ie)));
        var I, B, ie = N.type.originReactComponent;
        s_(I = kE(I = (v = v === "all" || v instanceof Array ? v : [v]) === "all" || -1 < v.indexOf(ie) ? (N.__top__ = h.__top__, I = LM(N, "_key_".concat(F), k, E, R), B = GE(N, h), N.children && (N.children.__top__ = h.__top__), YE(N, Ja.createElement(ie, ce(ce(ce({}, UM(I, N, ie)), N.__extraData || {}), B ? { ref: B } : {})))) : wE(N) ? N.text : RE(N, p, k, x, E, R), h, F), N.scopeId), w.push(I);
      }
    }), w.length === 1 ? w[0] : w) : h;
  };
}
var n_ = QE({ reactComponents: "all", domTags: "all" });
function zM(c, v) {
  return OM(c, { combinedOption: ce({ pureTransformer: !0, defaultSlotsFormatter: n_, defaultPropsFormatter: function(p, S, x) {
    var E = {};
    return Object.keys(p).forEach(function(h) {
      var k = p[h];
      k && (k.vueFunction ? (E[h] = function() {
        for (var R = arguments.length, w = new Array(R), N = 0; N < R; N++) w[N] = arguments[N];
        return n_(k.vueFunction.apply(this, w), S, x);
      }, Object.defineProperty(E[h], "length", { get: function() {
        return k.vueFunction.length;
      } })) : k.vueSlot && (E[h] = n_(k.vueSlot, S, x)));
    }), Object.assign(p, E);
  } }, v) });
}
QE({ reactComponents: "all", domTags: "all" });
var PM = ["ref", "children", "v-slots"];
function FM(R, v, p, S, x) {
  var R = R.props || {}, w = (R.ref, R.children), h = R["v-slots"], E = h === void 0 ? {} : h, h = Gi(R, PM), k = (w && (Xr(w) !== "object" || w instanceof Array || w.$$typeof ? E.default = w : E = w), null), R = (Object.keys(E || {}).forEach(function(F) {
    var I = E[F];
    (k = k || {})[F] = function() {
      if (typeof I == "function") {
        for (var B = arguments.length, ie = new Array(B), ae = 0; ae < B; ae++) ie[ae] = arguments[ae];
        I = I.apply(this, ie);
      }
      return S(I, p, x);
    };
  }), {}), w = Oy(h.style), N = Array.from(new Set(Ny(h.className))).join(" ");
  return 0 < Object.keys(w).length && (R.style = w), N !== "" && (R.class = N), Object.assign(h, ce({}, R)), delete h.className, { props: h = o_(h), slots: k };
}
function KE(c) {
  var v = c.ref;
  if (v) return Xr(v) === "object" ? function(p) {
    c.ref.current = p;
  } : typeof v == "function" ? v : void 0;
}
var IM = ["style", "class", "children"];
function TE(c, v, p, S, x, E) {
  var h, k, R, w;
  return v === "all" || v instanceof Array || (v = v ? [v] : []), c.type === He.Fragment ? x((h = c.props) == null ? void 0 : h.children, p) : typeof c.type == "string" && (v === "all" || -1 < v.indexOf(c.type)) ? (h = KE(c), w = (v = c.props || {}).style, R = v.class, k = v.children, v = Gi(v, IM), R = Array.from(new Set(Ny(R))).join(" "), w = Oy(w), v = ce(ce(ce(ce({}, v), Object.keys(w).length === 0 ? {} : { style: w }), R ? { className: R } : {}), h ? { ref: h } : {}), Object.keys(v).length === 0 && (v = null), (w = k) && ((w = -1 < ["string", "number"].indexOf(Xr(w)) ? [w] : w instanceof Array ? Ty(w) : ce({}, w)).__top__ = E), ou(c.type, v, x(w, p))) : p([c], null, S);
}
function XE(S) {
  var v = S.vueComponents, p = S.domTags, S = S.division, x = S === void 0 || S;
  return function E(h, k) {
    if (h == null) return h;
    h instanceof Array || (h = [h]);
    var R = [];
    return h.forEach(function(w, N) {
      if (((F = w.type) == null || !F.originVueComponent) && w.type !== u_) return w.__v_isVNode || typeof w == "string" || typeof w == "number" ? void R.push(w) : void (w.type && (F = TE(w, p, k, x, E, h.__top__), R.push(F)));
      var F = w.type.originVueComponent;
      if (w.type === u_) {
        if (!w.props.component) return void R.push(w.props.node);
        F = w.props.component, w = ce({}, w);
        var I = ce({}, w.props);
        delete I.component, w.props = I;
      }
      F = (v = v === "all" || v instanceof Array ? v : [v]) === "all" || -1 < v.indexOf(F) ? ((w = ce({}, w)).__top__ = h.__top__, N = (I = FM(w, "_key_".concat(N), k, E)).props, I = I.slots, KE(w), w.children && (w.children.__top__ = h.__top__), ou(F, ce({}, N), I)) : TE(w, p, k, x, E), R.push(F);
    }), (R = R.flat(1 / 0)).length === 1 ? R[0] : R;
  };
}
XE({ vueComponents: "all", domTags: "all" });
XE({ reactComponents: "all", domTags: "all" });
new Dy();
const VM = /* @__PURE__ */ BT({
  __name: "CopilotApp",
  props: {
    token: {},
    dataSource: {},
    baseUrl: {}
  },
  setup(c) {
    const v = zM(XL);
    return (p, S) => (WT(), qT(YT(v), {
      token: c.token,
      dataSource: c.dataSource,
      baseUrl: c.baseUrl,
      style: { height: "100%", width: "100%" }
    }, null, 8, ["token", "dataSource", "baseUrl"]));
  }
}), WM = {
  install(c) {
    c.component("CopilotApp", VM);
  }
};
export {
  VM as CopilotApp,
  WM as default
};
