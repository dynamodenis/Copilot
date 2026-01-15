import { Fragment as DE, h as ou, reactive as PT, getCurrentInstance as FT, Teleport as IT, createApp as VT, Comment as HT, Text as $T, defineComponent as BT, createBlock as qT, openBlock as WT, unref as YT } from "vue";
function NE(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var yy = { exports: {} }, gv = {}, gy = { exports: {} }, Mt = {};
var YC;
function GT() {
  if (YC) return Mt;
  YC = 1;
  var c = /* @__PURE__ */ Symbol.for("react.element"), v = /* @__PURE__ */ Symbol.for("react.portal"), p = /* @__PURE__ */ Symbol.for("react.fragment"), S = /* @__PURE__ */ Symbol.for("react.strict_mode"), x = /* @__PURE__ */ Symbol.for("react.profiler"), E = /* @__PURE__ */ Symbol.for("react.provider"), h = /* @__PURE__ */ Symbol.for("react.context"), R = /* @__PURE__ */ Symbol.for("react.forward_ref"), k = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), O = /* @__PURE__ */ Symbol.for("react.lazy"), A = Symbol.iterator;
  function I(F) {
    return F === null || typeof F != "object" ? null : (F = A && F[A] || F["@@iterator"], typeof F == "function" ? F : null);
  }
  var q = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, oe = Object.assign, ie = {};
  function we(F, ee, Je) {
    this.props = F, this.context = ee, this.refs = ie, this.updater = Je || q;
  }
  we.prototype.isReactComponent = {}, we.prototype.setState = function(F, ee) {
    if (typeof F != "object" && typeof F != "function" && F != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, F, ee, "setState");
  }, we.prototype.forceUpdate = function(F) {
    this.updater.enqueueForceUpdate(this, F, "forceUpdate");
  };
  function pe() {
  }
  pe.prototype = we.prototype;
  function ve(F, ee, Je) {
    this.props = F, this.context = ee, this.refs = ie, this.updater = Je || q;
  }
  var _e = ve.prototype = new pe();
  _e.constructor = ve, oe(_e, we.prototype), _e.isPureReactComponent = !0;
  var Re = Array.isArray, he = Object.prototype.hasOwnProperty, Ye = { current: null }, Ve = { key: !0, ref: !0, __self: !0, __source: !0 };
  function We(F, ee, Je) {
    var ze, ht = {}, nt = null, Ae = null;
    if (ee != null) for (ze in ee.ref !== void 0 && (Ae = ee.ref), ee.key !== void 0 && (nt = "" + ee.key), ee) he.call(ee, ze) && !Ve.hasOwnProperty(ze) && (ht[ze] = ee[ze]);
    var dt = arguments.length - 2;
    if (dt === 1) ht.children = Je;
    else if (1 < dt) {
      for (var mt = Array(dt), Xt = 0; Xt < dt; Xt++) mt[Xt] = arguments[Xt + 2];
      ht.children = mt;
    }
    if (F && F.defaultProps) for (ze in dt = F.defaultProps, dt) ht[ze] === void 0 && (ht[ze] = dt[ze]);
    return { $$typeof: c, type: F, key: nt, ref: Ae, props: ht, _owner: Ye.current };
  }
  function it(F, ee) {
    return { $$typeof: c, type: F.type, key: ee, ref: F.ref, props: F.props, _owner: F._owner };
  }
  function ut(F) {
    return typeof F == "object" && F !== null && F.$$typeof === c;
  }
  function X(F) {
    var ee = { "=": "=0", ":": "=2" };
    return "$" + F.replace(/[=:]/g, function(Je) {
      return ee[Je];
    });
  }
  var V = /\/+/g;
  function J(F, ee) {
    return typeof F == "object" && F !== null && F.key != null ? X("" + F.key) : ee.toString(36);
  }
  function Ee(F, ee, Je, ze, ht) {
    var nt = typeof F;
    (nt === "undefined" || nt === "boolean") && (F = null);
    var Ae = !1;
    if (F === null) Ae = !0;
    else switch (nt) {
      case "string":
      case "number":
        Ae = !0;
        break;
      case "object":
        switch (F.$$typeof) {
          case c:
          case v:
            Ae = !0;
        }
    }
    if (Ae) return Ae = F, ht = ht(Ae), F = ze === "" ? "." + J(Ae, 0) : ze, Re(ht) ? (Je = "", F != null && (Je = F.replace(V, "$&/") + "/"), Ee(ht, ee, Je, "", function(Xt) {
      return Xt;
    })) : ht != null && (ut(ht) && (ht = it(ht, Je + (!ht.key || Ae && Ae.key === ht.key ? "" : ("" + ht.key).replace(V, "$&/") + "/") + F)), ee.push(ht)), 1;
    if (Ae = 0, ze = ze === "" ? "." : ze + ":", Re(F)) for (var dt = 0; dt < F.length; dt++) {
      nt = F[dt];
      var mt = ze + J(nt, dt);
      Ae += Ee(nt, ee, Je, mt, ht);
    }
    else if (mt = I(F), typeof mt == "function") for (F = mt.call(F), dt = 0; !(nt = F.next()).done; ) nt = nt.value, mt = ze + J(nt, dt++), Ae += Ee(nt, ee, Je, mt, ht);
    else if (nt === "object") throw ee = String(F), Error("Objects are not valid as a React child (found: " + (ee === "[object Object]" ? "object with keys {" + Object.keys(F).join(", ") + "}" : ee) + "). If you meant to render a collection of children, use an array instead.");
    return Ae;
  }
  function He(F, ee, Je) {
    if (F == null) return F;
    var ze = [], ht = 0;
    return Ee(F, ze, "", "", function(nt) {
      return ee.call(Je, nt, ht++);
    }), ze;
  }
  function Ne(F) {
    if (F._status === -1) {
      var ee = F._result;
      ee = ee(), ee.then(function(Je) {
        (F._status === 0 || F._status === -1) && (F._status = 1, F._result = Je);
      }, function(Je) {
        (F._status === 0 || F._status === -1) && (F._status = 2, F._result = Je);
      }), F._status === -1 && (F._status = 0, F._result = ee);
    }
    if (F._status === 1) return F._result.default;
    throw F._result;
  }
  var xe = { current: null }, re = { transition: null }, De = { ReactCurrentDispatcher: xe, ReactCurrentBatchConfig: re, ReactCurrentOwner: Ye };
  function ge() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Mt.Children = { map: He, forEach: function(F, ee, Je) {
    He(F, function() {
      ee.apply(this, arguments);
    }, Je);
  }, count: function(F) {
    var ee = 0;
    return He(F, function() {
      ee++;
    }), ee;
  }, toArray: function(F) {
    return He(F, function(ee) {
      return ee;
    }) || [];
  }, only: function(F) {
    if (!ut(F)) throw Error("React.Children.only expected to receive a single React element child.");
    return F;
  } }, Mt.Component = we, Mt.Fragment = p, Mt.Profiler = x, Mt.PureComponent = ve, Mt.StrictMode = S, Mt.Suspense = k, Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = De, Mt.act = ge, Mt.cloneElement = function(F, ee, Je) {
    if (F == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + F + ".");
    var ze = oe({}, F.props), ht = F.key, nt = F.ref, Ae = F._owner;
    if (ee != null) {
      if (ee.ref !== void 0 && (nt = ee.ref, Ae = Ye.current), ee.key !== void 0 && (ht = "" + ee.key), F.type && F.type.defaultProps) var dt = F.type.defaultProps;
      for (mt in ee) he.call(ee, mt) && !Ve.hasOwnProperty(mt) && (ze[mt] = ee[mt] === void 0 && dt !== void 0 ? dt[mt] : ee[mt]);
    }
    var mt = arguments.length - 2;
    if (mt === 1) ze.children = Je;
    else if (1 < mt) {
      dt = Array(mt);
      for (var Xt = 0; Xt < mt; Xt++) dt[Xt] = arguments[Xt + 2];
      ze.children = dt;
    }
    return { $$typeof: c, type: F.type, key: ht, ref: nt, props: ze, _owner: Ae };
  }, Mt.createContext = function(F) {
    return F = { $$typeof: h, _currentValue: F, _currentValue2: F, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, F.Provider = { $$typeof: E, _context: F }, F.Consumer = F;
  }, Mt.createElement = We, Mt.createFactory = function(F) {
    var ee = We.bind(null, F);
    return ee.type = F, ee;
  }, Mt.createRef = function() {
    return { current: null };
  }, Mt.forwardRef = function(F) {
    return { $$typeof: R, render: F };
  }, Mt.isValidElement = ut, Mt.lazy = function(F) {
    return { $$typeof: O, _payload: { _status: -1, _result: F }, _init: Ne };
  }, Mt.memo = function(F, ee) {
    return { $$typeof: b, type: F, compare: ee === void 0 ? null : ee };
  }, Mt.startTransition = function(F) {
    var ee = re.transition;
    re.transition = {};
    try {
      F();
    } finally {
      re.transition = ee;
    }
  }, Mt.unstable_act = ge, Mt.useCallback = function(F, ee) {
    return xe.current.useCallback(F, ee);
  }, Mt.useContext = function(F) {
    return xe.current.useContext(F);
  }, Mt.useDebugValue = function() {
  }, Mt.useDeferredValue = function(F) {
    return xe.current.useDeferredValue(F);
  }, Mt.useEffect = function(F, ee) {
    return xe.current.useEffect(F, ee);
  }, Mt.useId = function() {
    return xe.current.useId();
  }, Mt.useImperativeHandle = function(F, ee, Je) {
    return xe.current.useImperativeHandle(F, ee, Je);
  }, Mt.useInsertionEffect = function(F, ee) {
    return xe.current.useInsertionEffect(F, ee);
  }, Mt.useLayoutEffect = function(F, ee) {
    return xe.current.useLayoutEffect(F, ee);
  }, Mt.useMemo = function(F, ee) {
    return xe.current.useMemo(F, ee);
  }, Mt.useReducer = function(F, ee, Je) {
    return xe.current.useReducer(F, ee, Je);
  }, Mt.useRef = function(F) {
    return xe.current.useRef(F);
  }, Mt.useState = function(F) {
    return xe.current.useState(F);
  }, Mt.useSyncExternalStore = function(F, ee, Je) {
    return xe.current.useSyncExternalStore(F, ee, Je);
  }, Mt.useTransition = function() {
    return xe.current.useTransition();
  }, Mt.version = "18.3.1", Mt;
}
var Cv = { exports: {} };
Cv.exports;
var GC;
function QT() {
  return GC || (GC = 1, (function(c, v) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = "18.3.1", S = /* @__PURE__ */ Symbol.for("react.element"), x = /* @__PURE__ */ Symbol.for("react.portal"), E = /* @__PURE__ */ Symbol.for("react.fragment"), h = /* @__PURE__ */ Symbol.for("react.strict_mode"), R = /* @__PURE__ */ Symbol.for("react.profiler"), k = /* @__PURE__ */ Symbol.for("react.provider"), b = /* @__PURE__ */ Symbol.for("react.context"), O = /* @__PURE__ */ Symbol.for("react.forward_ref"), A = /* @__PURE__ */ Symbol.for("react.suspense"), I = /* @__PURE__ */ Symbol.for("react.suspense_list"), q = /* @__PURE__ */ Symbol.for("react.memo"), oe = /* @__PURE__ */ Symbol.for("react.lazy"), ie = /* @__PURE__ */ Symbol.for("react.offscreen"), we = Symbol.iterator, pe = "@@iterator";
      function ve(_) {
        if (_ === null || typeof _ != "object")
          return null;
        var L = we && _[we] || _[pe];
        return typeof L == "function" ? L : null;
      }
      var _e = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Re = {
        transition: null
      }, he = {
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
      }, Ve = {}, We = null;
      function it(_) {
        We = _;
      }
      Ve.setExtraStackFrame = function(_) {
        We = _;
      }, Ve.getCurrentStack = null, Ve.getStackAddendum = function() {
        var _ = "";
        We && (_ += We);
        var L = Ve.getCurrentStack;
        return L && (_ += L() || ""), _;
      };
      var ut = !1, X = !1, V = !1, J = !1, Ee = !1, He = {
        ReactCurrentDispatcher: _e,
        ReactCurrentBatchConfig: Re,
        ReactCurrentOwner: Ye
      };
      He.ReactDebugCurrentFrame = Ve, He.ReactCurrentActQueue = he;
      function Ne(_) {
        {
          for (var L = arguments.length, G = new Array(L > 1 ? L - 1 : 0), Z = 1; Z < L; Z++)
            G[Z - 1] = arguments[Z];
          re("warn", _, G);
        }
      }
      function xe(_) {
        {
          for (var L = arguments.length, G = new Array(L > 1 ? L - 1 : 0), Z = 1; Z < L; Z++)
            G[Z - 1] = arguments[Z];
          re("error", _, G);
        }
      }
      function re(_, L, G) {
        {
          var Z = He.ReactDebugCurrentFrame, Se = Z.getStackAddendum();
          Se !== "" && (L += "%s", G = G.concat([Se]));
          var ot = G.map(function(Te) {
            return String(Te);
          });
          ot.unshift("Warning: " + L), Function.prototype.apply.call(console[_], console, ot);
        }
      }
      var De = {};
      function ge(_, L) {
        {
          var G = _.constructor, Z = G && (G.displayName || G.name) || "ReactClass", Se = Z + "." + L;
          if (De[Se])
            return;
          xe("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", L, Z), De[Se] = !0;
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
        enqueueForceUpdate: function(_, L, G) {
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
        enqueueReplaceState: function(_, L, G, Z) {
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
        enqueueSetState: function(_, L, G, Z) {
          ge(_, "setState");
        }
      }, ee = Object.assign, Je = {};
      Object.freeze(Je);
      function ze(_, L, G) {
        this.props = _, this.context = L, this.refs = Je, this.updater = G || F;
      }
      ze.prototype.isReactComponent = {}, ze.prototype.setState = function(_, L) {
        if (typeof _ != "object" && typeof _ != "function" && _ != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, _, L, "setState");
      }, ze.prototype.forceUpdate = function(_) {
        this.updater.enqueueForceUpdate(this, _, "forceUpdate");
      };
      {
        var ht = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, nt = function(_, L) {
          Object.defineProperty(ze.prototype, _, {
            get: function() {
              Ne("%s(...) is deprecated in plain JavaScript React classes. %s", L[0], L[1]);
            }
          });
        };
        for (var Ae in ht)
          ht.hasOwnProperty(Ae) && nt(Ae, ht[Ae]);
      }
      function dt() {
      }
      dt.prototype = ze.prototype;
      function mt(_, L, G) {
        this.props = _, this.context = L, this.refs = Je, this.updater = G || F;
      }
      var Xt = mt.prototype = new dt();
      Xt.constructor = mt, ee(Xt, ze.prototype), Xt.isPureReactComponent = !0;
      function Un() {
        var _ = {
          current: null
        };
        return Object.seal(_), _;
      }
      var Or = Array.isArray;
      function kn(_) {
        return Or(_);
      }
      function ur(_) {
        {
          var L = typeof Symbol == "function" && Symbol.toStringTag, G = L && _[Symbol.toStringTag] || _.constructor.name || "Object";
          return G;
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
      function gi(_, L, G) {
        var Z = _.displayName;
        if (Z)
          return Z;
        var Se = L.displayName || L.name || "";
        return Se !== "" ? G + "(" + Se + ")" : G;
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
          case R:
            return "Profiler";
          case h:
            return "StrictMode";
          case A:
            return "Suspense";
          case I:
            return "SuspenseList";
        }
        if (typeof _ == "object")
          switch (_.$$typeof) {
            case b:
              var L = _;
              return ma(L) + ".Consumer";
            case k:
              var G = _;
              return ma(G._context) + ".Provider";
            case O:
              return gi(_, _.render, "ForwardRef");
            case q:
              var Z = _.displayName || null;
              return Z !== null ? Z : tr(_.type) || "Memo";
            case oe: {
              var Se = _, ot = Se._payload, Te = Se._init;
              try {
                return tr(Te(ot));
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
      }, wr, Za, zn;
      zn = {};
      function br(_) {
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
        var G = function() {
          wr || (wr = !0, xe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        G.isReactWarning = !0, Object.defineProperty(_, "key", {
          get: G,
          configurable: !0
        });
      }
      function _i(_, L) {
        var G = function() {
          Za || (Za = !0, xe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        G.isReactWarning = !0, Object.defineProperty(_, "ref", {
          get: G,
          configurable: !0
        });
      }
      function be(_) {
        if (typeof _.ref == "string" && Ye.current && _.__self && Ye.current.stateNode !== _.__self) {
          var L = tr(Ye.current.type);
          zn[L] || (xe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L, _.ref), zn[L] = !0);
        }
      }
      var Ze = function(_, L, G, Z, Se, ot, Te) {
        var ct = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: S,
          // Built-in properties that belong on the element
          type: _,
          key: L,
          ref: G,
          props: Te,
          // Record the component responsible for creating this element.
          _owner: ot
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
          value: Se
        }), Object.freeze && (Object.freeze(ct.props), Object.freeze(ct)), ct;
      };
      function Rt(_, L, G) {
        var Z, Se = {}, ot = null, Te = null, ct = null, Ot = null;
        if (L != null) {
          br(L) && (Te = L.ref, be(L)), ya(L) && (Jr(L.key), ot = "" + L.key), ct = L.__self === void 0 ? null : L.__self, Ot = L.__source === void 0 ? null : L.__source;
          for (Z in L)
            Tn.call(L, Z) && !Qn.hasOwnProperty(Z) && (Se[Z] = L[Z]);
        }
        var It = arguments.length - 2;
        if (It === 1)
          Se.children = G;
        else if (It > 1) {
          for (var fn = Array(It), tn = 0; tn < It; tn++)
            fn[tn] = arguments[tn + 2];
          Object.freeze && Object.freeze(fn), Se.children = fn;
        }
        if (_ && _.defaultProps) {
          var kt = _.defaultProps;
          for (Z in kt)
            Se[Z] === void 0 && (Se[Z] = kt[Z]);
        }
        if (ot || Te) {
          var nn = typeof _ == "function" ? _.displayName || _.name || "Unknown" : _;
          ot && ei(Se, nn), Te && _i(Se, nn);
        }
        return Ze(_, ot, Te, ct, Ot, Ye.current, Se);
      }
      function Gt(_, L) {
        var G = Ze(_.type, L, _.ref, _._self, _._source, _._owner, _.props);
        return G;
      }
      function un(_, L, G) {
        if (_ == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
        var Z, Se = ee({}, _.props), ot = _.key, Te = _.ref, ct = _._self, Ot = _._source, It = _._owner;
        if (L != null) {
          br(L) && (Te = L.ref, It = Ye.current), ya(L) && (Jr(L.key), ot = "" + L.key);
          var fn;
          _.type && _.type.defaultProps && (fn = _.type.defaultProps);
          for (Z in L)
            Tn.call(L, Z) && !Qn.hasOwnProperty(Z) && (L[Z] === void 0 && fn !== void 0 ? Se[Z] = fn[Z] : Se[Z] = L[Z]);
        }
        var tn = arguments.length - 2;
        if (tn === 1)
          Se.children = G;
        else if (tn > 1) {
          for (var kt = Array(tn), nn = 0; nn < tn; nn++)
            kt[nn] = arguments[nn + 2];
          Se.children = kt;
        }
        return Ze(_.type, ot, Te, ct, Ot, It, Se);
      }
      function _n(_) {
        return typeof _ == "object" && _ !== null && _.$$typeof === S;
      }
      var pn = ".", nr = ":";
      function sn(_) {
        var L = /[=:]/g, G = {
          "=": "=0",
          ":": "=2"
        }, Z = _.replace(L, function(Se) {
          return G[Se];
        });
        return "$" + Z;
      }
      var Jt = !1, Zt = /\/+/g;
      function ga(_) {
        return _.replace(Zt, "$&/");
      }
      function Rr(_, L) {
        return typeof _ == "object" && _ !== null && _.key != null ? (Jr(_.key), sn("" + _.key)) : L.toString(36);
      }
      function Oa(_, L, G, Z, Se) {
        var ot = typeof _;
        (ot === "undefined" || ot === "boolean") && (_ = null);
        var Te = !1;
        if (_ === null)
          Te = !0;
        else
          switch (ot) {
            case "string":
            case "number":
              Te = !0;
              break;
            case "object":
              switch (_.$$typeof) {
                case S:
                case x:
                  Te = !0;
              }
          }
        if (Te) {
          var ct = _, Ot = Se(ct), It = Z === "" ? pn + Rr(ct, 0) : Z;
          if (kn(Ot)) {
            var fn = "";
            It != null && (fn = ga(It) + "/"), Oa(Ot, L, fn, "", function(md) {
              return md;
            });
          } else Ot != null && (_n(Ot) && (Ot.key && (!ct || ct.key !== Ot.key) && Jr(Ot.key), Ot = Gt(
            Ot,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            G + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Ot.key && (!ct || ct.key !== Ot.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ga("" + Ot.key) + "/"
            ) : "") + It
          )), L.push(Ot));
          return 1;
        }
        var tn, kt, nn = 0, Sn = Z === "" ? pn : Z + nr;
        if (kn(_))
          for (var Mo = 0; Mo < _.length; Mo++)
            tn = _[Mo], kt = Sn + Rr(tn, Mo), nn += Oa(tn, L, G, kt, Se);
        else {
          var us = ve(_);
          if (typeof us == "function") {
            var Ji = _;
            us === Ji.entries && (Jt || Ne("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Jt = !0);
            for (var ss = us.call(Ji), _l, hd = 0; !(_l = ss.next()).done; )
              tn = _l.value, kt = Sn + Rr(tn, hd++), nn += Oa(tn, L, G, kt, Se);
          } else if (ot === "object") {
            var wc = String(_);
            throw new Error("Objects are not valid as a React child (found: " + (wc === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : wc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return nn;
      }
      function Qi(_, L, G) {
        if (_ == null)
          return _;
        var Z = [], Se = 0;
        return Oa(_, Z, "", "", function(ot) {
          return L.call(G, ot, Se++);
        }), Z;
      }
      function cl(_) {
        var L = 0;
        return Qi(_, function() {
          L++;
        }), L;
      }
      function fl(_, L, G) {
        Qi(_, function() {
          L.apply(this, arguments);
        }, G);
      }
      function wo(_) {
        return Qi(_, function(L) {
          return L;
        }) || [];
      }
      function bo(_) {
        if (!_n(_))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return _;
      }
      function dl(_) {
        var L = {
          $$typeof: b,
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
          $$typeof: k,
          _context: L
        };
        var G = !1, Z = !1, Se = !1;
        {
          var ot = {
            $$typeof: b,
            _context: L
          };
          Object.defineProperties(ot, {
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
                Se || (Ne("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Te), Se = !0);
              }
            }
          }), L.Consumer = ot;
        }
        return L._currentRenderer = null, L._currentRenderer2 = null, L;
      }
      var Lr = -1, Mr = 0, sr = 1, Si = 2;
      function ti(_) {
        if (_._status === Lr) {
          var L = _._result, G = L();
          if (G.then(function(ot) {
            if (_._status === Mr || _._status === Lr) {
              var Te = _;
              Te._status = sr, Te._result = ot;
            }
          }, function(ot) {
            if (_._status === Mr || _._status === Lr) {
              var Te = _;
              Te._status = Si, Te._result = ot;
            }
          }), _._status === Lr) {
            var Z = _;
            Z._status = Mr, Z._result = G;
          }
        }
        if (_._status === sr) {
          var Se = _._result;
          return Se === void 0 && xe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Se), "default" in Se || xe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Se), Se.default;
        } else
          throw _._result;
      }
      function Ci(_) {
        var L = {
          // We use these fields to store the result.
          _status: Lr,
          _result: _
        }, G = {
          $$typeof: oe,
          _payload: L,
          _init: ti
        };
        {
          var Z, Se;
          Object.defineProperties(G, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return Z;
              },
              set: function(ot) {
                xe("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Z = ot, Object.defineProperty(G, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Se;
              },
              set: function(ot) {
                xe("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Se = ot, Object.defineProperty(G, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return G;
      }
      function Ei(_) {
        _ != null && _.$$typeof === q ? xe("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof _ != "function" ? xe("forwardRef requires a render function but was given %s.", _ === null ? "null" : typeof _) : _.length !== 0 && _.length !== 2 && xe("forwardRef render functions accept exactly two parameters: props and ref. %s", _.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), _ != null && (_.defaultProps != null || _.propTypes != null) && xe("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var L = {
          $$typeof: O,
          render: _
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
              G = Z, !_.name && !_.displayName && (_.displayName = Z);
            }
          });
        }
        return L;
      }
      var M;
      M = /* @__PURE__ */ Symbol.for("react.module.reference");
      function le(_) {
        return !!(typeof _ == "string" || typeof _ == "function" || _ === E || _ === R || Ee || _ === h || _ === A || _ === I || J || _ === ie || ut || X || V || typeof _ == "object" && _ !== null && (_.$$typeof === oe || _.$$typeof === q || _.$$typeof === k || _.$$typeof === b || _.$$typeof === O || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        _.$$typeof === M || _.getModuleId !== void 0));
      }
      function Oe(_, L) {
        le(_) || xe("memo: The first argument must be a component. Instead received: %s", _ === null ? "null" : typeof _);
        var G = {
          $$typeof: q,
          type: _,
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
            set: function(Se) {
              Z = Se, !_.name && !_.displayName && (_.displayName = Se);
            }
          });
        }
        return G;
      }
      function qe() {
        var _ = _e.current;
        return _ === null && xe(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), _;
      }
      function Et(_) {
        var L = qe();
        if (_._context !== void 0) {
          var G = _._context;
          G.Consumer === _ ? xe("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : G.Provider === _ && xe("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return L.useContext(_);
      }
      function _t(_) {
        var L = qe();
        return L.useState(_);
      }
      function Nt(_, L, G) {
        var Z = qe();
        return Z.useReducer(_, L, G);
      }
      function Tt(_) {
        var L = qe();
        return L.useRef(_);
      }
      function Dn(_, L) {
        var G = qe();
        return G.useEffect(_, L);
      }
      function cn(_, L) {
        var G = qe();
        return G.useInsertionEffect(_, L);
      }
      function vn(_, L) {
        var G = qe();
        return G.useLayoutEffect(_, L);
      }
      function cr(_, L) {
        var G = qe();
        return G.useCallback(_, L);
      }
      function ni(_, L) {
        var G = qe();
        return G.useMemo(_, L);
      }
      function ri(_, L, G) {
        var Z = qe();
        return Z.useImperativeHandle(_, L, G);
      }
      function xt(_, L) {
        {
          var G = qe();
          return G.useDebugValue(_, L);
        }
      }
      function bt() {
        var _ = qe();
        return _.useTransition();
      }
      function ai(_) {
        var L = qe();
        return L.useDeferredValue(_);
      }
      function pl() {
        var _ = qe();
        return _.useId();
      }
      function vl(_, L, G) {
        var Z = qe();
        return Z.useSyncExternalStore(_, L, G);
      }
      var Ro = 0, lu, ko, Zr, as, jr, Ec, xc;
      function uu() {
      }
      uu.__reactDisabledLog = !0;
      function To() {
        {
          if (Ro === 0) {
            lu = console.log, ko = console.info, Zr = console.warn, as = console.error, jr = console.group, Ec = console.groupCollapsed, xc = console.groupEnd;
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
                value: Ec
              }),
              groupEnd: ee({}, _, {
                value: xc
              })
            });
          }
          Ro < 0 && xe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ii = He.ReactCurrentDispatcher, oi;
      function su(_, L, G) {
        {
          if (oi === void 0)
            try {
              throw Error();
            } catch (Se) {
              var Z = Se.stack.trim().match(/\n( *(at )?)/);
              oi = Z && Z[1] || "";
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
          var G = Do.get(_);
          if (G !== void 0)
            return G;
        }
        var Z;
        hl = !0;
        var Se = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ot;
        ot = ii.current, ii.current = null, To();
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
              Reflect.construct(_, [], Te);
            } else {
              try {
                Te.call();
              } catch (Sn) {
                Z = Sn;
              }
              _.call(Te.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Sn) {
              Z = Sn;
            }
            _();
          }
        } catch (Sn) {
          if (Sn && Z && typeof Sn.stack == "string") {
            for (var ct = Sn.stack.split(`
`), Ot = Z.stack.split(`
`), It = ct.length - 1, fn = Ot.length - 1; It >= 1 && fn >= 0 && ct[It] !== Ot[fn]; )
              fn--;
            for (; It >= 1 && fn >= 0; It--, fn--)
              if (ct[It] !== Ot[fn]) {
                if (It !== 1 || fn !== 1)
                  do
                    if (It--, fn--, fn < 0 || ct[It] !== Ot[fn]) {
                      var tn = `
` + ct[It].replace(" at new ", " at ");
                      return _.displayName && tn.includes("<anonymous>") && (tn = tn.replace("<anonymous>", _.displayName)), typeof _ == "function" && Do.set(_, tn), tn;
                    }
                  while (It >= 1 && fn >= 0);
                break;
              }
          }
        } finally {
          hl = !1, ii.current = ot, _a(), Error.prepareStackTrace = Se;
        }
        var kt = _ ? _.displayName || _.name : "", nn = kt ? su(kt) : "";
        return typeof _ == "function" && Do.set(_, nn), nn;
      }
      function Ki(_, L, G) {
        return fu(_, !1);
      }
      function pd(_) {
        var L = _.prototype;
        return !!(L && L.isReactComponent);
      }
      function Xi(_, L, G) {
        if (_ == null)
          return "";
        if (typeof _ == "function")
          return fu(_, pd(_));
        if (typeof _ == "string")
          return su(_);
        switch (_) {
          case A:
            return su("Suspense");
          case I:
            return su("SuspenseList");
        }
        if (typeof _ == "object")
          switch (_.$$typeof) {
            case O:
              return Ki(_.render);
            case q:
              return Xi(_.type, L, G);
            case oe: {
              var Z = _, Se = Z._payload, ot = Z._init;
              try {
                return Xi(ot(Se), L, G);
              } catch {
              }
            }
          }
        return "";
      }
      var Ht = {}, du = He.ReactDebugCurrentFrame;
      function Ft(_) {
        if (_) {
          var L = _._owner, G = Xi(_.type, _._source, L ? L.type : null);
          du.setExtraStackFrame(G);
        } else
          du.setExtraStackFrame(null);
      }
      function is(_, L, G, Z, Se) {
        {
          var ot = Function.call.bind(Tn);
          for (var Te in _)
            if (ot(_, Te)) {
              var ct = void 0;
              try {
                if (typeof _[Te] != "function") {
                  var Ot = Error((Z || "React class") + ": " + G + " type `" + Te + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof _[Te] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Ot.name = "Invariant Violation", Ot;
                }
                ct = _[Te](L, Te, Z, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (It) {
                ct = It;
              }
              ct && !(ct instanceof Error) && (Ft(Se), xe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Z || "React class", G, Te, typeof ct), Ft(null)), ct instanceof Error && !(ct.message in Ht) && (Ht[ct.message] = !0, Ft(Se), xe("Failed %s type: %s", G, ct.message), Ft(null));
            }
        }
      }
      function xi(_) {
        if (_) {
          var L = _._owner, G = Xi(_.type, _._source, L ? L.type : null);
          it(G);
        } else
          it(null);
      }
      var gt;
      gt = !1;
      function pu() {
        if (Ye.current) {
          var _ = tr(Ye.current.type);
          if (_)
            return `

Check the render method of \`` + _ + "`.";
        }
        return "";
      }
      function fr(_) {
        if (_ !== void 0) {
          var L = _.fileName.replace(/^.*[\\\/]/, ""), G = _.lineNumber;
          return `

Check your code at ` + L + ":" + G + ".";
        }
        return "";
      }
      function wi(_) {
        return _ != null ? fr(_.__source) : "";
      }
      var Ar = {};
      function bi(_) {
        var L = pu();
        if (!L) {
          var G = typeof _ == "string" ? _ : _.displayName || _.name;
          G && (L = `

Check the top-level render call using <` + G + ">.");
        }
        return L;
      }
      function hn(_, L) {
        if (!(!_._store || _._store.validated || _.key != null)) {
          _._store.validated = !0;
          var G = bi(L);
          if (!Ar[G]) {
            Ar[G] = !0;
            var Z = "";
            _ && _._owner && _._owner !== Ye.current && (Z = " It was passed a child from " + tr(_._owner.type) + "."), xi(_), xe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, Z), xi(null);
          }
        }
      }
      function en(_, L) {
        if (typeof _ == "object") {
          if (kn(_))
            for (var G = 0; G < _.length; G++) {
              var Z = _[G];
              _n(Z) && hn(Z, L);
            }
          else if (_n(_))
            _._store && (_._store.validated = !0);
          else if (_) {
            var Se = ve(_);
            if (typeof Se == "function" && Se !== _.entries)
              for (var ot = Se.call(_), Te; !(Te = ot.next()).done; )
                _n(Te.value) && hn(Te.value, L);
          }
        }
      }
      function No(_) {
        {
          var L = _.type;
          if (L == null || typeof L == "string")
            return;
          var G;
          if (typeof L == "function")
            G = L.propTypes;
          else if (typeof L == "object" && (L.$$typeof === O || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          L.$$typeof === q))
            G = L.propTypes;
          else
            return;
          if (G) {
            var Z = tr(L);
            is(G, _.props, "prop", Z, _);
          } else if (L.PropTypes !== void 0 && !gt) {
            gt = !0;
            var Se = tr(L);
            xe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Se || "Unknown");
          }
          typeof L.getDefaultProps == "function" && !L.getDefaultProps.isReactClassApproved && xe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Kn(_) {
        {
          for (var L = Object.keys(_.props), G = 0; G < L.length; G++) {
            var Z = L[G];
            if (Z !== "children" && Z !== "key") {
              xi(_), xe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Z), xi(null);
              break;
            }
          }
          _.ref !== null && (xi(_), xe("Invalid attribute `ref` supplied to `React.Fragment`."), xi(null));
        }
      }
      function Ur(_, L, G) {
        var Z = le(_);
        if (!Z) {
          var Se = "";
          (_ === void 0 || typeof _ == "object" && _ !== null && Object.keys(_).length === 0) && (Se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ot = wi(L);
          ot ? Se += ot : Se += pu();
          var Te;
          _ === null ? Te = "null" : kn(_) ? Te = "array" : _ !== void 0 && _.$$typeof === S ? (Te = "<" + (tr(_.type) || "Unknown") + " />", Se = " Did you accidentally export a JSX literal instead of a component?") : Te = typeof _, xe("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Te, Se);
        }
        var ct = Rt.apply(this, arguments);
        if (ct == null)
          return ct;
        if (Z)
          for (var Ot = 2; Ot < arguments.length; Ot++)
            en(arguments[Ot], _);
        return _ === E ? Kn(ct) : No(ct), ct;
      }
      var La = !1;
      function ml(_) {
        var L = Ur.bind(null, _);
        return L.type = _, La || (La = !0, Ne("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(L, "type", {
          enumerable: !1,
          get: function() {
            return Ne("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: _
            }), _;
          }
        }), L;
      }
      function os(_, L, G) {
        for (var Z = un.apply(this, arguments), Se = 2; Se < arguments.length; Se++)
          en(arguments[Se], Z.type);
        return No(Z), Z;
      }
      function ls(_, L) {
        var G = Re.transition;
        Re.transition = {};
        var Z = Re.transition;
        Re.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          _();
        } finally {
          if (Re.transition = G, G === null && Z._updatedFibers) {
            var Se = Z._updatedFibers.size;
            Se > 10 && Ne("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), Z._updatedFibers.clear();
          }
        }
      }
      var Oo = !1, yl = null;
      function vd(_) {
        if (yl === null)
          try {
            var L = ("require" + Math.random()).slice(0, 7), G = c && c[L];
            yl = G.call(c, "timers").setImmediate;
          } catch {
            yl = function(Se) {
              Oo === !1 && (Oo = !0, typeof MessageChannel > "u" && xe("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var ot = new MessageChannel();
              ot.port1.onmessage = Se, ot.port2.postMessage(void 0);
            };
          }
        return yl(_);
      }
      var Ma = 0, li = !1;
      function Ri(_) {
        {
          var L = Ma;
          Ma++, he.current === null && (he.current = []);
          var G = he.isBatchingLegacy, Z;
          try {
            if (he.isBatchingLegacy = !0, Z = _(), !G && he.didScheduleLegacyUpdate) {
              var Se = he.current;
              Se !== null && (he.didScheduleLegacyUpdate = !1, Lo(Se));
            }
          } catch (kt) {
            throw ja(L), kt;
          } finally {
            he.isBatchingLegacy = G;
          }
          if (Z !== null && typeof Z == "object" && typeof Z.then == "function") {
            var ot = Z, Te = !1, ct = {
              then: function(kt, nn) {
                Te = !0, ot.then(function(Sn) {
                  ja(L), Ma === 0 ? vu(Sn, kt, nn) : kt(Sn);
                }, function(Sn) {
                  ja(L), nn(Sn);
                });
              }
            };
            return !li && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Te || (li = !0, xe("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), ct;
          } else {
            var Ot = Z;
            if (ja(L), Ma === 0) {
              var It = he.current;
              It !== null && (Lo(It), he.current = null);
              var fn = {
                then: function(kt, nn) {
                  he.current === null ? (he.current = [], vu(Ot, kt, nn)) : kt(Ot);
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
      function ja(_) {
        _ !== Ma - 1 && xe("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ma = _;
      }
      function vu(_, L, G) {
        {
          var Z = he.current;
          if (Z !== null)
            try {
              Lo(Z), vd(function() {
                Z.length === 0 ? (he.current = null, L(_)) : vu(_, L, G);
              });
            } catch (Se) {
              G(Se);
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
              var G = _[L];
              do
                G = G(!0);
              while (G !== null);
            }
            _.length = 0;
          } catch (Z) {
            throw _ = _.slice(L + 1), Z;
          } finally {
            hu = !1;
          }
        }
      }
      var gl = Ur, mu = os, yu = ml, ui = {
        map: Qi,
        forEach: fl,
        count: cl,
        toArray: wo,
        only: bo
      };
      v.Children = ui, v.Component = ze, v.Fragment = E, v.Profiler = R, v.PureComponent = mt, v.StrictMode = h, v.Suspense = A, v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = He, v.act = Ri, v.cloneElement = mu, v.createContext = dl, v.createElement = gl, v.createFactory = yu, v.createRef = Un, v.forwardRef = Ei, v.isValidElement = _n, v.lazy = Ci, v.memo = Oe, v.startTransition = ls, v.unstable_act = Ri, v.useCallback = cr, v.useContext = Et, v.useDebugValue = xt, v.useDeferredValue = ai, v.useEffect = Dn, v.useId = pl, v.useImperativeHandle = ri, v.useInsertionEffect = cn, v.useLayoutEffect = vn, v.useMemo = ni, v.useReducer = Nt, v.useRef = Tt, v.useState = _t, v.useSyncExternalStore = vl, v.useTransition = bt, v.version = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(Cv, Cv.exports)), Cv.exports;
}
var QC;
function xv() {
  return QC || (QC = 1, process.env.NODE_ENV === "production" ? gy.exports = GT() : gy.exports = QT()), gy.exports;
}
var KC;
function KT() {
  if (KC) return gv;
  KC = 1;
  var c = xv(), v = /* @__PURE__ */ Symbol.for("react.element"), p = /* @__PURE__ */ Symbol.for("react.fragment"), S = Object.prototype.hasOwnProperty, x = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(R, k, b) {
    var O, A = {}, I = null, q = null;
    b !== void 0 && (I = "" + b), k.key !== void 0 && (I = "" + k.key), k.ref !== void 0 && (q = k.ref);
    for (O in k) S.call(k, O) && !E.hasOwnProperty(O) && (A[O] = k[O]);
    if (R && R.defaultProps) for (O in k = R.defaultProps, k) A[O] === void 0 && (A[O] = k[O]);
    return { $$typeof: v, type: R, key: I, ref: q, props: A, _owner: x.current };
  }
  return gv.Fragment = p, gv.jsx = h, gv.jsxs = h, gv;
}
var _v = {};
var XC;
function XT() {
  return XC || (XC = 1, process.env.NODE_ENV !== "production" && (function() {
    var c = xv(), v = /* @__PURE__ */ Symbol.for("react.element"), p = /* @__PURE__ */ Symbol.for("react.portal"), S = /* @__PURE__ */ Symbol.for("react.fragment"), x = /* @__PURE__ */ Symbol.for("react.strict_mode"), E = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), R = /* @__PURE__ */ Symbol.for("react.context"), k = /* @__PURE__ */ Symbol.for("react.forward_ref"), b = /* @__PURE__ */ Symbol.for("react.suspense"), O = /* @__PURE__ */ Symbol.for("react.suspense_list"), A = /* @__PURE__ */ Symbol.for("react.memo"), I = /* @__PURE__ */ Symbol.for("react.lazy"), q = /* @__PURE__ */ Symbol.for("react.offscreen"), oe = Symbol.iterator, ie = "@@iterator";
    function we(M) {
      if (M === null || typeof M != "object")
        return null;
      var le = oe && M[oe] || M[ie];
      return typeof le == "function" ? le : null;
    }
    var pe = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ve(M) {
      {
        for (var le = arguments.length, Oe = new Array(le > 1 ? le - 1 : 0), qe = 1; qe < le; qe++)
          Oe[qe - 1] = arguments[qe];
        _e("error", M, Oe);
      }
    }
    function _e(M, le, Oe) {
      {
        var qe = pe.ReactDebugCurrentFrame, Et = qe.getStackAddendum();
        Et !== "" && (le += "%s", Oe = Oe.concat([Et]));
        var _t = Oe.map(function(Nt) {
          return String(Nt);
        });
        _t.unshift("Warning: " + le), Function.prototype.apply.call(console[M], console, _t);
      }
    }
    var Re = !1, he = !1, Ye = !1, Ve = !1, We = !1, it;
    it = /* @__PURE__ */ Symbol.for("react.module.reference");
    function ut(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === S || M === E || We || M === x || M === b || M === O || Ve || M === q || Re || he || Ye || typeof M == "object" && M !== null && (M.$$typeof === I || M.$$typeof === A || M.$$typeof === h || M.$$typeof === R || M.$$typeof === k || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === it || M.getModuleId !== void 0));
    }
    function X(M, le, Oe) {
      var qe = M.displayName;
      if (qe)
        return qe;
      var Et = le.displayName || le.name || "";
      return Et !== "" ? Oe + "(" + Et + ")" : Oe;
    }
    function V(M) {
      return M.displayName || "Context";
    }
    function J(M) {
      if (M == null)
        return null;
      if (typeof M.tag == "number" && ve("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof M == "function")
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
        case b:
          return "Suspense";
        case O:
          return "SuspenseList";
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case R:
            var le = M;
            return V(le) + ".Consumer";
          case h:
            var Oe = M;
            return V(Oe._context) + ".Provider";
          case k:
            return X(M, M.render, "ForwardRef");
          case A:
            var qe = M.displayName || null;
            return qe !== null ? qe : J(M.type) || "Memo";
          case I: {
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
    var Ee = Object.assign, He = 0, Ne, xe, re, De, ge, F, ee;
    function Je() {
    }
    Je.__reactDisabledLog = !0;
    function ze() {
      {
        if (He === 0) {
          Ne = console.log, xe = console.info, re = console.warn, De = console.error, ge = console.group, F = console.groupCollapsed, ee = console.groupEnd;
          var M = {
            configurable: !0,
            enumerable: !0,
            value: Je,
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
    function ht() {
      {
        if (He--, He === 0) {
          var M = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ee({}, M, {
              value: Ne
            }),
            info: Ee({}, M, {
              value: xe
            }),
            warn: Ee({}, M, {
              value: re
            }),
            error: Ee({}, M, {
              value: De
            }),
            group: Ee({}, M, {
              value: ge
            }),
            groupCollapsed: Ee({}, M, {
              value: F
            }),
            groupEnd: Ee({}, M, {
              value: ee
            })
          });
        }
        He < 0 && ve("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var nt = pe.ReactCurrentDispatcher, Ae;
    function dt(M, le, Oe) {
      {
        if (Ae === void 0)
          try {
            throw Error();
          } catch (Et) {
            var qe = Et.stack.trim().match(/\n( *(at )?)/);
            Ae = qe && qe[1] || "";
          }
        return `
` + Ae + M;
      }
    }
    var mt = !1, Xt;
    {
      var Un = typeof WeakMap == "function" ? WeakMap : Map;
      Xt = new Un();
    }
    function Or(M, le) {
      if (!M || mt)
        return "";
      {
        var Oe = Xt.get(M);
        if (Oe !== void 0)
          return Oe;
      }
      var qe;
      mt = !0;
      var Et = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _t;
      _t = nt.current, nt.current = null, ze();
      try {
        if (le) {
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
        mt = !1, nt.current = _t, ht(), Error.prepareStackTrace = Et;
      }
      var ni = M ? M.displayName || M.name : "", ri = ni ? dt(ni) : "";
      return typeof M == "function" && Xt.set(M, ri), ri;
    }
    function kn(M, le, Oe) {
      return Or(M, !1);
    }
    function ur(M) {
      var le = M.prototype;
      return !!(le && le.isReactComponent);
    }
    function Yn(M, le, Oe) {
      if (M == null)
        return "";
      if (typeof M == "function")
        return Or(M, ur(M));
      if (typeof M == "string")
        return dt(M);
      switch (M) {
        case b:
          return dt("Suspense");
        case O:
          return dt("SuspenseList");
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case k:
            return kn(M.render);
          case A:
            return Yn(M.type, le, Oe);
          case I: {
            var qe = M, Et = qe._payload, _t = qe._init;
            try {
              return Yn(_t(Et), le, Oe);
            } catch {
            }
          }
        }
      return "";
    }
    var Gn = Object.prototype.hasOwnProperty, Jr = {}, gi = pe.ReactDebugCurrentFrame;
    function ma(M) {
      if (M) {
        var le = M._owner, Oe = Yn(M.type, M._source, le ? le.type : null);
        gi.setExtraStackFrame(Oe);
      } else
        gi.setExtraStackFrame(null);
    }
    function tr(M, le, Oe, qe, Et) {
      {
        var _t = Function.call.bind(Gn);
        for (var Nt in M)
          if (_t(M, Nt)) {
            var Tt = void 0;
            try {
              if (typeof M[Nt] != "function") {
                var Dn = Error((qe || "React class") + ": " + Oe + " type `" + Nt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof M[Nt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Dn.name = "Invariant Violation", Dn;
              }
              Tt = M[Nt](le, Nt, qe, Oe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (cn) {
              Tt = cn;
            }
            Tt && !(Tt instanceof Error) && (ma(Et), ve("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", qe || "React class", Oe, Nt, typeof Tt), ma(null)), Tt instanceof Error && !(Tt.message in Jr) && (Jr[Tt.message] = !0, ma(Et), ve("Failed %s type: %s", Oe, Tt.message), ma(null));
          }
      }
    }
    var Tn = Array.isArray;
    function Qn(M) {
      return Tn(M);
    }
    function wr(M) {
      {
        var le = typeof Symbol == "function" && Symbol.toStringTag, Oe = le && M[Symbol.toStringTag] || M.constructor.name || "Object";
        return Oe;
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
    function br(M) {
      if (Za(M))
        return ve("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wr(M)), zn(M);
    }
    var ya = pe.ReactCurrentOwner, ei = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _i, be;
    function Ze(M) {
      if (Gn.call(M, "ref")) {
        var le = Object.getOwnPropertyDescriptor(M, "ref").get;
        if (le && le.isReactWarning)
          return !1;
      }
      return M.ref !== void 0;
    }
    function Rt(M) {
      if (Gn.call(M, "key")) {
        var le = Object.getOwnPropertyDescriptor(M, "key").get;
        if (le && le.isReactWarning)
          return !1;
      }
      return M.key !== void 0;
    }
    function Gt(M, le) {
      typeof M.ref == "string" && ya.current;
    }
    function un(M, le) {
      {
        var Oe = function() {
          _i || (_i = !0, ve("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", le));
        };
        Oe.isReactWarning = !0, Object.defineProperty(M, "key", {
          get: Oe,
          configurable: !0
        });
      }
    }
    function _n(M, le) {
      {
        var Oe = function() {
          be || (be = !0, ve("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", le));
        };
        Oe.isReactWarning = !0, Object.defineProperty(M, "ref", {
          get: Oe,
          configurable: !0
        });
      }
    }
    var pn = function(M, le, Oe, qe, Et, _t, Nt) {
      var Tt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: M,
        key: le,
        ref: Oe,
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
    function nr(M, le, Oe, qe, Et) {
      {
        var _t, Nt = {}, Tt = null, Dn = null;
        Oe !== void 0 && (br(Oe), Tt = "" + Oe), Rt(le) && (br(le.key), Tt = "" + le.key), Ze(le) && (Dn = le.ref, Gt(le, Et));
        for (_t in le)
          Gn.call(le, _t) && !ei.hasOwnProperty(_t) && (Nt[_t] = le[_t]);
        if (M && M.defaultProps) {
          var cn = M.defaultProps;
          for (_t in cn)
            Nt[_t] === void 0 && (Nt[_t] = cn[_t]);
        }
        if (Tt || Dn) {
          var vn = typeof M == "function" ? M.displayName || M.name || "Unknown" : M;
          Tt && un(Nt, vn), Dn && _n(Nt, vn);
        }
        return pn(M, Tt, Dn, Et, qe, ya.current, Nt);
      }
    }
    var sn = pe.ReactCurrentOwner, Jt = pe.ReactDebugCurrentFrame;
    function Zt(M) {
      if (M) {
        var le = M._owner, Oe = Yn(M.type, M._source, le ? le.type : null);
        Jt.setExtraStackFrame(Oe);
      } else
        Jt.setExtraStackFrame(null);
    }
    var ga;
    ga = !1;
    function Rr(M) {
      return typeof M == "object" && M !== null && M.$$typeof === v;
    }
    function Oa() {
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
    function Qi(M) {
      return "";
    }
    var cl = {};
    function fl(M) {
      {
        var le = Oa();
        if (!le) {
          var Oe = typeof M == "string" ? M : M.displayName || M.name;
          Oe && (le = `

Check the top-level render call using <` + Oe + ">.");
        }
        return le;
      }
    }
    function wo(M, le) {
      {
        if (!M._store || M._store.validated || M.key != null)
          return;
        M._store.validated = !0;
        var Oe = fl(le);
        if (cl[Oe])
          return;
        cl[Oe] = !0;
        var qe = "";
        M && M._owner && M._owner !== sn.current && (qe = " It was passed a child from " + J(M._owner.type) + "."), Zt(M), ve('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Oe, qe), Zt(null);
      }
    }
    function bo(M, le) {
      {
        if (typeof M != "object")
          return;
        if (Qn(M))
          for (var Oe = 0; Oe < M.length; Oe++) {
            var qe = M[Oe];
            Rr(qe) && wo(qe, le);
          }
        else if (Rr(M))
          M._store && (M._store.validated = !0);
        else if (M) {
          var Et = we(M);
          if (typeof Et == "function" && Et !== M.entries)
            for (var _t = Et.call(M), Nt; !(Nt = _t.next()).done; )
              Rr(Nt.value) && wo(Nt.value, le);
        }
      }
    }
    function dl(M) {
      {
        var le = M.type;
        if (le == null || typeof le == "string")
          return;
        var Oe;
        if (typeof le == "function")
          Oe = le.propTypes;
        else if (typeof le == "object" && (le.$$typeof === k || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        le.$$typeof === A))
          Oe = le.propTypes;
        else
          return;
        if (Oe) {
          var qe = J(le);
          tr(Oe, M.props, "prop", qe, M);
        } else if (le.PropTypes !== void 0 && !ga) {
          ga = !0;
          var Et = J(le);
          ve("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Et || "Unknown");
        }
        typeof le.getDefaultProps == "function" && !le.getDefaultProps.isReactClassApproved && ve("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Lr(M) {
      {
        for (var le = Object.keys(M.props), Oe = 0; Oe < le.length; Oe++) {
          var qe = le[Oe];
          if (qe !== "children" && qe !== "key") {
            Zt(M), ve("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", qe), Zt(null);
            break;
          }
        }
        M.ref !== null && (Zt(M), ve("Invalid attribute `ref` supplied to `React.Fragment`."), Zt(null));
      }
    }
    var Mr = {};
    function sr(M, le, Oe, qe, Et, _t) {
      {
        var Nt = ut(M);
        if (!Nt) {
          var Tt = "";
          (M === void 0 || typeof M == "object" && M !== null && Object.keys(M).length === 0) && (Tt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Dn = Qi();
          Dn ? Tt += Dn : Tt += Oa();
          var cn;
          M === null ? cn = "null" : Qn(M) ? cn = "array" : M !== void 0 && M.$$typeof === v ? (cn = "<" + (J(M.type) || "Unknown") + " />", Tt = " Did you accidentally export a JSX literal instead of a component?") : cn = typeof M, ve("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", cn, Tt);
        }
        var vn = nr(M, le, Oe, Et, _t);
        if (vn == null)
          return vn;
        if (Nt) {
          var cr = le.children;
          if (cr !== void 0)
            if (qe)
              if (Qn(cr)) {
                for (var ni = 0; ni < cr.length; ni++)
                  bo(cr[ni], M);
                Object.freeze && Object.freeze(cr);
              } else
                ve("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              bo(cr, M);
        }
        if (Gn.call(le, "key")) {
          var ri = J(M), xt = Object.keys(le).filter(function(pl) {
            return pl !== "key";
          }), bt = xt.length > 0 ? "{key: someKey, " + xt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Mr[ri + bt]) {
            var ai = xt.length > 0 ? "{" + xt.join(": ..., ") + ": ...}" : "{}";
            ve(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, bt, ri, ai, ri), Mr[ri + bt] = !0;
          }
        }
        return M === S ? Lr(vn) : dl(vn), vn;
      }
    }
    function Si(M, le, Oe) {
      return sr(M, le, Oe, !0);
    }
    function ti(M, le, Oe) {
      return sr(M, le, Oe, !1);
    }
    var Ci = ti, Ei = Si;
    _v.Fragment = S, _v.jsx = Ci, _v.jsxs = Ei;
  })()), _v;
}
var JC;
function JT() {
  return JC || (JC = 1, process.env.NODE_ENV === "production" ? yy.exports = KT() : yy.exports = XT()), yy.exports;
}
var D = JT(), Ie = xv();
const Ja = /* @__PURE__ */ NE(Ie), ZC = (c) => Symbol.iterator in c, eE = (c) => (
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
function Sc(c) {
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
}, p3 = "_expandedContent_pymls_2", v3 = "_searchWrapper_pymls_17", h3 = "_searchContainer_pymls_23", m3 = "_searchDropdown_pymls_33", y3 = "_dropdownItem_pymls_69", g3 = "_selected_pymls_84", _3 = "_personAvatar_pymls_97", S3 = "_avatarPlaceholder_pymls_111", C3 = "_personInfo_pymls_123", E3 = "_personName_pymls_131", x3 = "_personTitle_pymls_140", w3 = "_dropdownEmpty_pymls_148", b3 = "_searchIcon_pymls_155", R3 = "_searchInput_pymls_160", k3 = "_suggestionsList_pymls_172", T3 = "_suggestionItemWrapper_pymls_191", D3 = "_suggestionItem_pymls_191", N3 = "_statusIcon_pymls_219", O3 = "_moreButton_pymls_222", L3 = "_childItem_pymls_225", M3 = "_loadingState_pymls_299", j3 = "_loadingSpinner_pymls_309", A3 = "_emptyState_pymls_323", U3 = "_errorState_pymls_330", Pt = {
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
  dropdownEmpty: w3,
  searchIcon: b3,
  searchInput: R3,
  suggestionsList: k3,
  suggestionItemWrapper: T3,
  suggestionItem: D3,
  statusIcon: N3,
  moreButton: O3,
  childItem: L3,
  loadingState: M3,
  loadingSpinner: j3,
  emptyState: A3,
  errorState: U3
}, nE = (c) => {
  let v;
  const p = /* @__PURE__ */ new Set(), S = (b, O) => {
    const A = typeof b == "function" ? b(v) : b;
    if (!Object.is(A, v)) {
      const I = v;
      v = O ?? (typeof A != "object" || A === null) ? A : Object.assign({}, v, A), p.forEach((q) => q(v, I));
    }
  }, x = () => v, R = { setState: S, getState: x, getInitialState: () => k, subscribe: (b) => (p.add(b), () => p.delete(b)) }, k = v = c(S, x, R);
  return R;
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
}, OE = ((c) => c ? rE(c) : rE), aE = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_API_TOKEN: "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.c-lnqanU55Zj18TnRc0GwokKWVT_5DYTGB7421BMgiVS44AF1lWLtBnCI38BalI_soZPgcG3dQ1epqdFGlyFrtvZi9OJooQk.eruexPDbSnmAwKRH-FatYg.QUiDoNgqYmUhS3o4EtQVhQhnRRaCdLzvImMIwKhgIf6AFAG5w3fDgb99fB9moTtOa5AhNGmgY-FQ7figaeevXl6Fizicpa8gq7-7dU5WA63pZNj2zTJiivtzLfXqq0bYkjhXVD7DspBqaffeSZkFgRoqhemQx9LR-EwJ0JTuRX8.IIPV8yFhxv8U3WtHqNYek54ufxcXBbRt68vKD_EgOuo", VITE_API_URL: "https://xh2o-yths-38lt.n7c.xano.io/api", VITE_DATA_SOURCE: "staging", VITE_LLM_ENDPOINT: "http://localhost:3001" }, Ev = /* @__PURE__ */ new Map(), _y = (c) => {
  const v = Ev.get(c);
  return v ? Object.fromEntries(
    Object.entries(v.stores).map(([p, S]) => [p, S.getState()])
  ) : {};
}, I3 = (c, v, p) => {
  if (c === void 0)
    return {
      type: "untracked",
      connection: v.connect(p)
    };
  const S = Ev.get(p.name);
  if (S)
    return { type: "tracked", store: c, ...S };
  const x = {
    connection: v.connect(p),
    stores: {}
  };
  return Ev.set(p.name, x), { type: "tracked", store: c, ...x };
}, V3 = (c, v) => {
  if (v === void 0) return;
  const p = Ev.get(c);
  p && (delete p.stores[v], Object.keys(p.stores).length === 0 && Ev.delete(c));
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
  const { enabled: E, anonymousActionType: h, store: R, ...k } = v;
  let b;
  try {
    b = (E ?? (aE ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch {
  }
  if (!b)
    return c(p, S, x);
  const { connection: O, ...A } = I3(R, b, k);
  let I = !0;
  x.setState = ((ie, we, pe) => {
    const ve = p(ie, we);
    if (!I) return ve;
    const _e = pe === void 0 ? {
      type: h || H3(new Error().stack) || "anonymous"
    } : typeof pe == "string" ? { type: pe } : pe;
    return R === void 0 ? (O?.send(_e, S()), ve) : (O?.send(
      {
        ..._e,
        type: `${R}/${_e.type}`
      },
      {
        ..._y(k.name),
        [R]: x.getState()
      }
    ), ve);
  }), x.devtools = {
    cleanup: () => {
      O && typeof O.unsubscribe == "function" && O.unsubscribe(), V3(k.name, R);
    }
  };
  const q = (...ie) => {
    const we = I;
    I = !1, p(...ie), I = we;
  }, oe = c(x.setState, S, x);
  if (A.type === "untracked" ? O?.init(oe) : (A.stores[A.store] = x, O?.init(
    Object.fromEntries(
      Object.entries(A.stores).map(([ie, we]) => [
        ie,
        ie === A.store ? oe : we.getState()
      ])
    )
  )), x.dispatchFromDevtools && typeof x.dispatch == "function") {
    let ie = !1;
    const we = x.dispatch;
    x.dispatch = (...pe) => {
      (aE ? "production" : void 0) !== "production" && pe[0].type === "__setState" && !ie && (console.warn(
        '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
      ), ie = !0), we(...pe);
    };
  }
  return O.subscribe((ie) => {
    var we;
    switch (ie.type) {
      case "ACTION":
        if (typeof ie.payload != "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return G1(
          ie.payload,
          (pe) => {
            if (pe.type === "__setState") {
              if (R === void 0) {
                q(pe.state);
                return;
              }
              Object.keys(pe.state).length !== 1 && console.error(
                `
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `
              );
              const ve = pe.state[R];
              if (ve == null)
                return;
              JSON.stringify(x.getState()) !== JSON.stringify(ve) && q(ve);
              return;
            }
            x.dispatchFromDevtools && typeof x.dispatch == "function" && x.dispatch(pe);
          }
        );
      case "DISPATCH":
        switch (ie.payload.type) {
          case "RESET":
            return q(oe), R === void 0 ? O?.init(x.getState()) : O?.init(_y(k.name));
          case "COMMIT":
            if (R === void 0) {
              O?.init(x.getState());
              return;
            }
            return O?.init(_y(k.name));
          case "ROLLBACK":
            return G1(ie.state, (pe) => {
              if (R === void 0) {
                q(pe), O?.init(x.getState());
                return;
              }
              q(pe[R]), O?.init(_y(k.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return G1(ie.state, (pe) => {
              if (R === void 0) {
                q(pe);
                return;
              }
              JSON.stringify(x.getState()) !== JSON.stringify(pe[R]) && q(pe[R]);
            });
          case "IMPORT_STATE": {
            const { nextLiftedState: pe } = ie.payload, ve = (we = pe.computedStates.slice(-1)[0]) == null ? void 0 : we.state;
            if (!ve) return;
            q(R === void 0 ? ve : ve[R]), O?.send(
              null,
              // FIXME no-any
              pe
            );
            return;
          }
          case "PAUSE_RECORDING":
            return I = !I;
        }
        return;
    }
  }), oe;
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
}, Q1 = "https://xh2o-yths-38lt.n7c.xano.io/api", K1 = "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.c-lnqanU55Zj18TnRc0GwokKWVT_5DYTGB7421BMgiVS44AF1lWLtBnCI38BalI_soZPgcG3dQ1epqdFGlyFrtvZi9OJooQk.eruexPDbSnmAwKRH-FatYg.QUiDoNgqYmUhS3o4EtQVhQhnRRaCdLzvImMIwKhgIf6AFAG5w3fDgb99fB9moTtOa5AhNGmgY-FQ7figaeevXl6Fizicpa8gq7-7dU5WA63pZNj2zTJiivtzLfXqq0bYkjhXVD7DspBqaffeSZkFgRoqhemQx9LR-EwJ0JTuRX8.IIPV8yFhxv8U3WtHqNYek54ufxcXBbRt68vKD_EgOuo", X1 = "staging", wy = OE()(LE((c, v) => ({
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
  const [R, k] = Ie.useState(/* @__PURE__ */ new Set()), [b, O] = Ie.useState(""), [A, I] = Ie.useState(!1), q = Ie.useRef(null), { suggestionRequests: oe, leverageLoops: ie, isLoadingPersons: we, isLoadingSuggestionRequests: pe, personsError: ve, suggestionRequestsError: _e } = wy(
    Sc((X) => ({
      suggestionRequests: X.suggestionRequests,
      leverageLoops: X.leverageLoops,
      isLoadingPersons: X.isLoadingPersons,
      isLoadingSuggestionRequests: X.isLoadingSuggestionRequests,
      personsError: X.personsError,
      suggestionRequestsError: X.suggestionRequestsError
    }))
  );
  Ie.useEffect(() => {
    const X = (V) => {
      q.current && !q.current.contains(V.target) && I(!1);
    };
    return document.addEventListener("mousedown", X), () => document.removeEventListener("mousedown", X);
  }, []);
  const Re = (X) => {
    k((V) => {
      const J = new Set(V);
      return J.has(X) ? J.delete(X) : J.add(X), J;
    });
  }, he = (X, V) => V ? X.filter(
    (J) => J.full_name?.toLowerCase().includes(V.toLowerCase()) || J.master_person.name?.toLowerCase().includes(V.toLowerCase()) || J.master_person.current_title?.toLowerCase().includes(V.toLowerCase()) || J.master_person.bio?.toLowerCase().includes(V.toLowerCase()) || J.master_person.master_company?.company_name?.toLowerCase().includes(V.toLowerCase())
  ) : [], Ye = (X) => {
    const V = X.target.value;
    O(V), I(V.length > 0);
  }, Ve = (X) => {
    S(X), O(""), I(!1);
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
  }, it = (X, V = !1) => {
    const J = E?.id === X.id;
    return /* @__PURE__ */ D.jsx("div", { className: Pt.suggestionItemWrapper, children: /* @__PURE__ */ D.jsxs(
      "button",
      {
        className: `${Pt.suggestionItem} ${V ? Pt.childItem : ""} ${J ? Pt.selected : ""}`,
        onClick: () => {
          Re(X.request_header_title), h(X);
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
          /* @__PURE__ */ D.jsx(B3, { status: X.status }),
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
  }, ut = he(ie.length > 0 ? ie : v, b);
  return /* @__PURE__ */ D.jsxs("div", { className: Pt.expandedContent, children: [
    /* @__PURE__ */ D.jsxs("div", { className: Pt.searchWrapper, ref: q, children: [
      /* @__PURE__ */ D.jsxs("div", { className: Pt.searchContainer, children: [
        /* @__PURE__ */ D.jsx("span", { className: Pt.searchIcon, children: "🔍" }),
        /* @__PURE__ */ D.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search persons...",
            className: Pt.searchInput,
            value: b,
            onChange: Ye,
            onFocus: () => b.length > 0 && I(!0)
          }
        )
      ] }),
      A && /* @__PURE__ */ D.jsx("div", { className: Pt.searchDropdown, children: we ? /* @__PURE__ */ D.jsxs("div", { className: Pt.dropdownLoading, children: [
        /* @__PURE__ */ D.jsx("span", { className: Pt.loadingSpinner }),
        "Loading persons..."
      ] }) : ve ? /* @__PURE__ */ D.jsx("div", { className: Pt.dropdownError, children: ve }) : ut.length === 0 ? /* @__PURE__ */ D.jsxs("div", { className: Pt.dropdownEmpty, children: [
        'No persons found for "',
        b,
        '"'
      ] }) : ut.map((X) => We(X)) })
    ] }),
    /* @__PURE__ */ D.jsx("div", { className: Pt.suggestionsList, children: pe ? /* @__PURE__ */ D.jsxs("div", { className: Pt.loadingState, children: [
      /* @__PURE__ */ D.jsx("span", { className: Pt.loadingSpinner }),
      "Loading suggestion requests..."
    ] }) : _e ? /* @__PURE__ */ D.jsx("div", { className: Pt.errorState, children: _e }) : oe.length === 0 ? /* @__PURE__ */ D.jsx("div", { className: Pt.emptyState, children: x }) : oe.map((X) => it(X)) })
  ] });
}, ud = (c) => ({
  messages: [],
  threadId: `thread-${c}-${Date.now()}`,
  isLoading: !1
}), W3 = {
  messages: [],
  threadId: "thread-empty",
  isLoading: !1
}, fd = OE()(
  LE((c, v) => ({
    activeContext: "copilot",
    selectedPerson: null,
    selectedSuggestionRequest: null,
    leverageLoopSummaries: [],
    copilotChat: ud("copilot"),
    outcomesChat: ud("outcomes"),
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
        const R = x || E.getCurrentLeverageLoopKey();
        if (!R) return E;
        const k = E.leverageLoopChats[R] || ud(`leverage-loop-${R}`);
        return {
          leverageLoopChats: {
            ...E.leverageLoopChats,
            [R]: {
              ...k,
              messages: [...k.messages, S]
            }
          }
        };
      }
      const h = Sy(p);
      return {
        [h]: {
          ...E[h],
          messages: [...E[h].messages, S]
        }
      };
    }),
    updateMessage: (p, S, x, E, h) => c((R) => {
      if (p === "leverage-loops") {
        const b = h || R.getCurrentLeverageLoopKey();
        if (!b) return R;
        const O = R.leverageLoopChats[b];
        return O ? {
          leverageLoopChats: {
            ...R.leverageLoopChats,
            [b]: {
              ...O,
              messages: O.messages.map(
                (A) => A.id === S ? { ...A, content: x, isStreaming: E ?? A.isStreaming } : A
              )
            }
          }
        } : R;
      }
      const k = Sy(p);
      return {
        [k]: {
          ...R[k],
          messages: R[k].messages.map(
            (b) => b.id === S ? { ...b, content: x, isStreaming: E ?? b.isStreaming } : b
          )
        }
      };
    }),
    setIsLoading: (p, S, x) => c((E) => {
      if (p === "leverage-loops") {
        const R = x || E.getCurrentLeverageLoopKey();
        if (!R) return E;
        const k = E.leverageLoopChats[R] || ud(`leverage-loop-${R}`);
        return {
          leverageLoopChats: {
            ...E.leverageLoopChats,
            [R]: {
              ...k,
              isLoading: S
            }
          }
        };
      }
      const h = Sy(p);
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
            [h]: ud(`leverage-loop-${h}`)
          }
        } : x;
      }
      return {
        [Sy(p)]: ud(p)
      };
    }),
    upsertLeverageLoopSummary: (p) => c((S) => S.leverageLoopSummaries.findIndex((E) => E.id === p.id) >= 0 ? {
      leverageLoopSummaries: S.leverageLoopSummaries.map((E) => E.id === p.id ? p : E)
    } : {
      leverageLoopSummaries: [...S.leverageLoopSummaries, p]
    })
  }))
);
function Sy(c) {
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
  const [x, E] = Ie.useState(S), h = Ie.useRef(null);
  Ie.useEffect(() => {
    S && (E(S), setTimeout(() => h.current?.focus(), 0));
  }, [S]), Ie.useEffect(() => {
    const b = h.current;
    b && (b.style.height = "auto", b.style.height = `${Math.min(b.scrollHeight, 200)}px`);
  }, [x]);
  const R = (b) => {
    b?.preventDefault(), x.trim() && !v && (c(x.trim()), E(""));
  }, k = (b) => {
    b.key === "Enter" && !b.shiftKey && (b.preventDefault(), R());
  };
  return /* @__PURE__ */ D.jsx("div", { className: Yi.composerContainer, children: /* @__PURE__ */ D.jsxs("form", { onSubmit: R, className: Yi.composer, children: [
    /* @__PURE__ */ D.jsx("div", { className: Yi.inputWrapper, children: /* @__PURE__ */ D.jsx(
      "textarea",
      {
        ref: h,
        value: x,
        onChange: (b) => E(b.target.value),
        onKeyDown: k,
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
const h4 = Ie.forwardRef(
  ({
    color: c = "currentColor",
    size: v = 24,
    strokeWidth: p = 2,
    absoluteStrokeWidth: S,
    className: x = "",
    children: E,
    iconNode: h,
    ...R
  }, k) => Ie.createElement(
    "svg",
    {
      ref: k,
      ...v4,
      width: v,
      height: v,
      stroke: c,
      strokeWidth: S ? Number(p) * 24 / Number(v) : p,
      className: ME("lucide", x),
      ...!E && !p4(R) && { "aria-hidden": "true" },
      ...R
    },
    [
      ...h.map(([b, O]) => Ie.createElement(b, O)),
      ...Array.isArray(E) ? E : [E]
    ]
  )
);
const Ce = (c, v) => {
  const p = Ie.forwardRef(
    ({ className: S, ...x }, E) => Ie.createElement(h4, {
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
], y4 = Ce("activity", m4);
const g4 = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], _4 = Ce("arrow-down", g4);
const S4 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], C4 = Ce("arrow-left", S4);
const E4 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], x4 = Ce("arrow-right", E4);
const w4 = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], b4 = Ce("arrow-up", w4);
const R4 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
], k4 = Ce("award", R4);
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
], D4 = Ce("bell-off", T4);
const N4 = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], O4 = Ce("bell", N4);
const L4 = [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }]
], M4 = Ce("bookmark", L4);
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
], A4 = Ce("boxes", j4);
const U4 = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
], z4 = Ce("briefcase", U4);
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
], F4 = Ce("building", P4);
const I4 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], V4 = Ce("calendar", I4);
const H4 = [
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
], $4 = Ce("car", H4);
const B4 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }]
], q4 = Ce("chart-line", B4);
const W4 = [
  ["path", { d: "M5 21v-6", key: "1hz6c0" }],
  ["path", { d: "M12 21V9", key: "uvy0l4" }],
  ["path", { d: "M19 21V3", key: "11j9sm" }]
], Y4 = Ce("chart-no-axes-column-increasing", W4);
const G4 = [
  [
    "path",
    {
      d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",
      key: "pzmjnu"
    }
  ],
  ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83", key: "k2fpak" }]
], Q4 = Ce("chart-pie", G4);
const K4 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], X4 = Ce("check", K4);
const J4 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], jE = Ce("chevron-down", J4);
const Z4 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], e5 = Ce("chevron-left", Z4);
const t5 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], n5 = Ce("chevron-right", t5);
const r5 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], a5 = Ce("chevron-up", r5);
const i5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], o5 = Ce("circle-alert", i5);
const l5 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], u5 = Ce("circle-check-big", l5);
const s5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], c5 = Ce("circle-question-mark", s5);
const f5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], d5 = Ce("circle-x", f5);
const p5 = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], v5 = Ce("clock", p5);
const h5 = [
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
], m5 = Ce("coffee", h5);
const y5 = [
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], g5 = Ce("compass", y5);
const _5 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], S5 = Ce("copy", _5);
const C5 = [
  [
    "path",
    {
      d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
      key: "1vdc57"
    }
  ],
  ["path", { d: "M5 21h14", key: "11awu3" }]
], E5 = Ce("crown", C5);
const x5 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], w5 = Ce("download", x5);
const b5 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], R5 = Ce("external-link", b5);
const k5 = [
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
], T5 = Ce("eye-off", k5);
const D5 = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], N5 = Ce("eye", D5);
const O5 = [
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
], L5 = Ce("file-text", O5);
const M5 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]
], j5 = Ce("file", M5);
const A5 = [
  [
    "path",
    {
      d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
      key: "1jaruq"
    }
  ]
], U5 = Ce("flag", A5);
const z5 = [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
], P5 = Ce("folder-open", z5);
const F5 = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
], I5 = Ce("folder", F5);
const V5 = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
], H5 = Ce("funnel", V5);
const $5 = [
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
], B5 = Ce("gift", $5);
const q5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], W5 = Ce("globe", q5);
const Y5 = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
], G5 = Ce("heart", Y5);
const Q5 = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], K5 = Ce("house", Q5);
const X5 = [
  ["path", { d: "M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8", key: "18ogeb" }]
], J5 = Ce("infinity", X5);
const Z5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], eD = Ce("info", Z5);
const tD = [
  ["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }],
  ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
  ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }]
], nD = Ce("key", tD);
const rD = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
], aD = Ce("lightbulb", rD);
const iD = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], oD = Ce("link", iD);
const lD = [
  ["path", { d: "M13 5h8", key: "a7qcls" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 19h8", key: "c3s6r1" }],
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }]
], uD = Ce("list-checks", lD);
const sD = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
], cD = Ce("lock-open", sD);
const fD = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], dD = Ce("lock", fD);
const pD = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], vD = Ce("mail", pD);
const hD = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], mD = Ce("map-pin", hD);
const yD = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
], gD = Ce("message-circle", yD);
const _D = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
], SD = Ce("message-square", _D);
const CD = [["path", { d: "M5 12h14", key: "1ays0h" }]], ED = Ce("minus", CD);
const xD = [
  ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]
], wD = Ce("navigation", xD);
const bD = [
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
      key: "1miecu"
    }
  ]
], RD = Ce("paperclip", bD);
const kD = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], TD = Ce("pause", kD);
const DD = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], ND = Ce("phone", DD);
const OD = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], LD = Ce("play", OD);
const MD = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], jD = Ce("plus", MD);
const AD = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], UD = Ce("refresh-cw", AD);
const zD = [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }]
], PD = Ce("repeat", zD);
const FD = [
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
], ID = Ce("rocket", FD);
const VD = [
  ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
], HD = Ce("rotate-cw", VD);
const $D = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], BD = Ce("search", $D);
const qD = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], WD = Ce("send", qD);
const YD = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], GD = Ce("settings", YD);
const QD = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
], KD = Ce("share-2", QD);
const XD = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], JD = Ce("shield-check", XD);
const ZD = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
], eN = Ce("shield", ZD);
const tN = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
], nN = Ce("square-pen", tN);
const rN = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], aN = Ce("star", rN);
const iN = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], oN = Ce("target", iN);
const lN = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], uN = Ce("timer", lN);
const sN = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], cN = Ce("trash-2", sN);
const fN = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
], dN = Ce("trending-down", fN);
const pN = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
], vN = Ce("trending-up", pN);
const hN = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], mN = Ce("triangle-alert", hN);
const yN = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], gN = Ce("upload", yN);
const _N = [
  ["path", { d: "m16 11 2 2 4-4", key: "9rsbq5" }],
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
], SN = Ce("user-check", _N);
const CN = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
], EN = Ce("user-plus", CN);
const xN = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], wN = Ce("user", xN);
const bN = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
], RN = Ce("users", bN);
const kN = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
], TN = Ce("workflow", kN);
const DN = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], NN = Ce("x", DN);
const ON = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
], LN = Ce("zap", ON), MN = "_card_rp8wf_1", jN = "_sources_rp8wf_11", AN = "_sourcesHeader_rp8wf_17", UN = "_sourcesList_rp8wf_26", zN = "_sourceItem_rp8wf_32", PN = "_sourceIndex_rp8wf_45", FN = "_sourceTitle_rp8wf_51", IN = "_sourceName_rp8wf_55", VN = "_header_rp8wf_60", HN = "_headerTitle_rp8wf_60", $N = "_headerSubtitle_rp8wf_65", BN = "_textContent_rp8wf_70", qN = "_button_rp8wf_93", WN = "_primary_rp8wf_106", YN = "_secondary_rp8wf_117", GN = "_ghost_rp8wf_125", QN = "_buttonGroup_rp8wf_137", KN = "_horizontal_rp8wf_141", XN = "_vertical_rp8wf_144", JN = "_form_rp8wf_148", ZN = "_formField_rp8wf_154", eO = "_fieldLabel_rp8wf_159", tO = "_fieldHint_rp8wf_164", nO = "_input_rp8wf_169", rO = "_textarea_rp8wf_170", aO = "_select_rp8wf_171", iO = "_error_rp8wf_193", oO = "_checkboxWrapper_rp8wf_213", lO = "_radioWrapper_rp8wf_214", uO = "_radioGroup_rp8wf_234", sO = "_checkboxGroup_rp8wf_240", cO = "_list_rp8wf_246", fO = "_listHeading_rp8wf_246", dO = "_listItems_rp8wf_254", pO = "_listItem_rp8wf_254", vO = "_listItemIcon_rp8wf_274", hO = "_listItemContent_rp8wf_284", mO = "_listItemTitle_rp8wf_287", yO = "_listItemSubtitle_rp8wf_293", gO = "_listItemAction_rp8wf_298", _O = "_actionButton_rp8wf_298", SO = "_stats_rp8wf_317", CO = "_statsNumber_rp8wf_320", EO = "_statsLabel_rp8wf_326", xO = "_profileTile_rp8wf_332", wO = "_profileIcon_rp8wf_337", bO = "_profileContent_rp8wf_347", RO = "_profileTitle_rp8wf_347", kO = "_profileLabel_rp8wf_353", TO = "_miniCard_rp8wf_359", DO = "_miniCardBlock_rp8wf_369", NO = "_steps_rp8wf_375", OO = "_stepsItem_rp8wf_392", LO = "_stepsTitle_rp8wf_407", MO = "_stepsDetails_rp8wf_413", jO = "_sectionBlock_rp8wf_418", AO = "_section_rp8wf_418", UO = "_expanded_rp8wf_429", zO = "_sectionTrigger_rp8wf_429", PO = "_triggerIcon_rp8wf_450", FO = "_rotated_rp8wf_453", IO = "_sectionContent_rp8wf_457", VO = "_icon_rp8wf_464", HO = "_streamingContainer_rp8wf_470", $O = "_streamingIndicator_rp8wf_475", BO = "_pulse_rp8wf_1", qO = "_skeletonLoader_rp8wf_487", WO = "_skeletonShimmer_rp8wf_502", YO = "_shimmer_rp8wf_1", je = {
  card: MN,
  sources: jN,
  sourcesHeader: AN,
  sourcesList: UN,
  sourceItem: zN,
  sourceIndex: PN,
  sourceTitle: FN,
  sourceName: IN,
  header: VN,
  headerTitle: HN,
  headerSubtitle: $N,
  textContent: BN,
  button: qN,
  primary: WN,
  secondary: YN,
  ghost: GN,
  buttonGroup: QN,
  horizontal: KN,
  vertical: XN,
  form: JN,
  formField: ZN,
  fieldLabel: eO,
  fieldHint: tO,
  input: nO,
  textarea: rO,
  select: aO,
  error: iO,
  checkboxWrapper: oO,
  radioWrapper: lO,
  radioGroup: uO,
  checkboxGroup: sO,
  list: cO,
  listHeading: fO,
  listItems: dO,
  listItem: pO,
  listItemIcon: vO,
  listItemContent: hO,
  listItemTitle: mO,
  listItemSubtitle: yO,
  listItemAction: gO,
  actionButton: _O,
  stats: SO,
  statsNumber: CO,
  statsLabel: EO,
  profileTile: xO,
  profileIcon: wO,
  profileContent: bO,
  profileTitle: RO,
  profileLabel: kO,
  miniCard: TO,
  miniCardBlock: DO,
  steps: NO,
  stepsItem: OO,
  stepsTitle: LO,
  stepsDetails: MO,
  sectionBlock: jO,
  section: AO,
  expanded: UO,
  sectionTrigger: zO,
  triggerIcon: PO,
  rotated: FO,
  sectionContent: IO,
  icon: VO,
  streamingContainer: HO,
  streamingIndicator: $O,
  pulse: BO,
  skeletonLoader: qO,
  skeletonShimmer: WO,
  shimmer: YO
}, GO = {
  // Arrows & Navigation
  target: oN,
  "arrow-right": x4,
  "arrow-left": C4,
  "arrow-up": b4,
  "arrow-down": _4,
  "chevron-down": jE,
  "chevron-right": n5,
  "chevron-left": e5,
  "chevron-up": a5,
  repeat: PD,
  "refresh-cw": UD,
  "rotate-cw": HD,
  navigation: wD,
  compass: g5,
  // Multimedia
  play: LD,
  pause: TD,
  // Text & Lists
  "list-checks": uD,
  // Development
  workflow: TN,
  // Time
  timer: uN,
  clock: v5,
  calendar: V4,
  // Shopping & Business
  boxes: A4,
  briefcase: z4,
  building: F4,
  // Math & Charts
  infinity: J5,
  plus: jD,
  minus: ED,
  "line-chart": q4,
  "bar-chart": Y4,
  "pie-chart": Q4,
  "trending-up": vN,
  "trending-down": dN,
  activity: y4,
  // Actions
  check: X4,
  x: NN,
  edit: nN,
  trash: cN,
  copy: S5,
  share: KD,
  "external-link": R5,
  search: BD,
  filter: H5,
  settings: GD,
  download: w5,
  upload: gN,
  send: WD,
  zap: LN,
  // Users
  user: wN,
  users: RN,
  "user-plus": EN,
  "user-check": SN,
  // Communication
  mail: vD,
  phone: ND,
  "message-circle": gD,
  "message-square": SD,
  bell: O4,
  "bell-off": D4,
  // Status & Favorites
  star: aN,
  heart: G5,
  bookmark: M4,
  flag: U5,
  award: k4,
  gift: B5,
  crown: E5,
  // Info & Alerts
  "help-circle": c5,
  info: eD,
  "alert-circle": o5,
  "alert-triangle": mN,
  "check-circle": u5,
  "x-circle": d5,
  // View
  eye: N5,
  "eye-off": T5,
  // Security
  lock: dD,
  unlock: cD,
  key: nD,
  shield: eN,
  "shield-check": JD,
  // Links & Files
  link: oD,
  paperclip: RD,
  "file-text": L5,
  file: j5,
  folder: I5,
  "folder-open": P5,
  // Location
  home: K5,
  "map-pin": mD,
  globe: W5,
  // Transportation
  car: $4,
  // Ideas & Energy
  lightbulb: aD,
  rocket: ID,
  coffee: m5
}, AE = ({ name: c, size: v = 18 }) => {
  const p = GO[c.toLowerCase()];
  return p ? /* @__PURE__ */ D.jsx("span", { className: je.icon, children: /* @__PURE__ */ D.jsx(p, { size: v }) }) : (console.warn(`Icon "${c}" not found in registry`), /* @__PURE__ */ D.jsx("span", { className: je.icon, style: { width: v, height: v }, children: "•" }));
}, QO = ({ title: c, subtitle: v }) => /* @__PURE__ */ D.jsxs("div", { className: je.header, children: [
  /* @__PURE__ */ D.jsx("h3", { className: je.headerTitle, children: c }),
  v && /* @__PURE__ */ D.jsx("p", { className: je.headerSubtitle, children: v })
] });
function KO(c) {
  return c.split(/\n\n+/).map((p, S) => {
    let x = p;
    const E = /\*\*(.*?)\*\*/g, h = p.split(E);
    h.length > 1 && (x = h.map((k, b) => b % 2 === 1 ? /* @__PURE__ */ D.jsx("strong", { children: k }, b) : k));
    const R = /`(.*?)`/g;
    return typeof x == "string" && x.match(R) && (x = x.split(R).map((b, O) => O % 2 === 1 ? /* @__PURE__ */ D.jsx("code", { children: b }, O) : b)), /* @__PURE__ */ D.jsx("p", { children: x }, S);
  });
}
const XO = ({ textMarkdown: c }) => /* @__PURE__ */ D.jsx("div", { className: je.textContent, children: KO(c) }), JO = ({
  children: c,
  name: v,
  variant: p = "primary",
  disabled: S = !1,
  action: x,
  onAction: E
}) => {
  const h = () => {
    x && E && E(x);
  }, R = ["submit", "save", "confirm", "set", "create", "send", "apply"], k = (v || "").toLowerCase(), b = (typeof c == "string" ? c : "").toLowerCase(), O = x?.type === "submit_form" || R.some((A) => k.includes(A)) || R.some((A) => b.includes(A));
  return /* @__PURE__ */ D.jsx(
    "button",
    {
      className: `${je.button} ${je[p]}`,
      disabled: S,
      onClick: h,
      type: O ? "submit" : "button",
      children: c
    }
  );
}, ZO = ({
  variant: c = "horizontal",
  children: v,
  renderComponent: p
}) => /* @__PURE__ */ D.jsx("div", { className: `${je.buttonGroup} ${je[c]}`, children: v.map((S, x) => /* @__PURE__ */ D.jsx(Ja.Fragment, { children: p(S) }, x)) }), eL = ({ children: c, sources: v, renderComponent: p }) => !c || !Array.isArray(c) ? /* @__PURE__ */ D.jsx("div", { className: je.card }) : /* @__PURE__ */ D.jsxs("div", { className: je.card, children: [
  c.map((S, x) => /* @__PURE__ */ D.jsx(Ja.Fragment, { children: p(S) }, x)),
  v && v.length > 0 && /* @__PURE__ */ D.jsxs("div", { className: je.sources, children: [
    /* @__PURE__ */ D.jsx("div", { className: je.sourcesHeader, children: "Sources" }),
    /* @__PURE__ */ D.jsx("div", { className: je.sourcesList, children: v.map((S, x) => /* @__PURE__ */ D.jsxs(
      "a",
      {
        href: S.url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: je.sourceItem,
        children: [
          /* @__PURE__ */ D.jsxs("span", { className: je.sourceIndex, children: [
            "[",
            x + 1,
            "]"
          ] }),
          /* @__PURE__ */ D.jsx("span", { className: je.sourceTitle, children: S.title }),
          S.sourceName && /* @__PURE__ */ D.jsxs("span", { className: je.sourceName, children: [
            " - ",
            S.sourceName
          ] })
        ]
      },
      x
    )) })
  ] })
] }), tL = ({ heading: c, items: v, onAction: p }) => /* @__PURE__ */ D.jsxs("div", { className: je.list, children: [
  c && /* @__PURE__ */ D.jsx("h4", { className: je.listHeading, children: c }),
  /* @__PURE__ */ D.jsx("div", { className: je.listItems, children: v.map((S, x) => /* @__PURE__ */ D.jsxs("div", { className: je.listItem, children: [
    S.iconName && /* @__PURE__ */ D.jsx("div", { className: je.listItemIcon, children: /* @__PURE__ */ D.jsx(AE, { name: S.iconName, size: 18 }) }),
    /* @__PURE__ */ D.jsxs("div", { className: je.listItemContent, children: [
      /* @__PURE__ */ D.jsx("p", { className: je.listItemTitle, children: S.title }),
      S.subtitle && /* @__PURE__ */ D.jsx("p", { className: je.listItemSubtitle, children: S.subtitle })
    ] }),
    S.itemAction && /* @__PURE__ */ D.jsx("div", { className: je.listItemAction, children: /* @__PURE__ */ D.jsx(
      "button",
      {
        className: je.actionButton,
        onClick: () => p?.(S.itemAction.action),
        children: S.itemAction.label
      }
    ) })
  ] }, x)) })
] }), nL = ({ number: c, label: v }) => /* @__PURE__ */ D.jsxs("div", { className: je.stats, children: [
  /* @__PURE__ */ D.jsx("p", { className: je.statsNumber, children: c }),
  /* @__PURE__ */ D.jsx("p", { className: je.statsLabel, children: v })
] }), rL = ({
  title: c,
  label: v,
  child: p,
  renderComponent: S
}) => /* @__PURE__ */ D.jsxs("div", { className: je.profileTile, children: [
  p && /* @__PURE__ */ D.jsx("div", { className: je.profileIcon, children: S(p) }),
  /* @__PURE__ */ D.jsxs("div", { className: je.profileContent, children: [
    /* @__PURE__ */ D.jsx("p", { className: je.profileTitle, children: c }),
    v && /* @__PURE__ */ D.jsx("p", { className: je.profileLabel, children: v })
  ] })
] }), aL = ({
  lhs: c,
  rhs: v,
  renderComponent: p
}) => /* @__PURE__ */ D.jsxs("div", { className: je.miniCard, children: [
  /* @__PURE__ */ D.jsx("div", { className: je.miniCardLhs, children: p(c) }),
  v && /* @__PURE__ */ D.jsx("div", { className: je.miniCardRhs, children: p(v) })
] }), iL = ({
  children: c,
  renderComponent: v
}) => /* @__PURE__ */ D.jsx("div", { className: je.miniCardBlock, children: c.map((p, S) => /* @__PURE__ */ D.jsx(Ja.Fragment, { children: v(p) }, S)) }), oL = ({
  title: c,
  details: v,
  renderComponent: p
}) => /* @__PURE__ */ D.jsxs("div", { className: je.stepsItem, children: [
  /* @__PURE__ */ D.jsx("h4", { className: je.stepsTitle, children: c }),
  v && /* @__PURE__ */ D.jsx("div", { className: je.stepsDetails, children: p(v) })
] }), lL = ({
  children: c,
  renderComponent: v
}) => /* @__PURE__ */ D.jsx("div", { className: je.steps, children: c.map((p, S) => /* @__PURE__ */ D.jsx(Ja.Fragment, { children: v(p) }, S)) }), uL = ({
  isFoldable: c = !0,
  sections: v,
  renderComponent: p
}) => {
  const [S, x] = Ie.useState(
    // If not foldable, expand all sections by default
    new Set(c ? [] : v.map((h) => h.value))
  ), E = (h) => {
    c && x((R) => {
      const k = new Set(R);
      return k.has(h) ? k.delete(h) : k.add(h), k;
    });
  };
  return /* @__PURE__ */ D.jsx("div", { className: je.sectionBlock, children: v.map((h) => {
    const R = S.has(h.value);
    return /* @__PURE__ */ D.jsxs(
      "div",
      {
        className: `${je.section} ${R ? je.expanded : ""}`,
        children: [
          /* @__PURE__ */ D.jsxs(
            "button",
            {
              className: je.sectionTrigger,
              onClick: () => E(h.value),
              type: "button",
              children: [
                /* @__PURE__ */ D.jsx("span", { children: h.trigger }),
                c && /* @__PURE__ */ D.jsx("span", { className: `${je.triggerIcon} ${R ? je.rotated : ""}`, children: /* @__PURE__ */ D.jsx(jE, { size: 16 }) })
              ]
            }
          ),
          (R || !c) && /* @__PURE__ */ D.jsx("div", { className: je.sectionContent, children: h.content.map((k, b) => /* @__PURE__ */ D.jsx(Ja.Fragment, { children: p(k) }, b)) })
        ]
      },
      h.value
    );
  }) });
}, sL = ({
  name: c,
  placeholder: v,
  value: p = "",
  type: S = "text",
  rules: x,
  onChange: E
}) => {
  const [h, R] = Ie.useState(p), [k, b] = Ie.useState(null), O = (A) => {
    const I = A.target.value;
    R(I), x?.required && !I ? b("This field is required") : x?.minLength && I.length < x.minLength ? b(`Minimum ${x.minLength} characters required`) : b(null), E?.(c, I);
  };
  return /* @__PURE__ */ D.jsx(
    "input",
    {
      type: S,
      name: c,
      placeholder: v,
      value: h,
      onChange: O,
      className: `${je.input} ${k ? je.error : ""}`
    }
  );
}, cL = ({
  name: c,
  placeholder: v,
  value: p = "",
  rows: S = 3,
  rules: x,
  onChange: E
}) => {
  const [h, R] = Ie.useState(p), [k, b] = Ie.useState(null), O = (A) => {
    const I = A.target.value;
    R(I), x?.required && !I ? b("This field is required") : x?.minLength && I.length < x.minLength ? b(`Minimum ${x.minLength} characters required`) : b(null), E?.(c, I);
  };
  return /* @__PURE__ */ D.jsx(
    "textarea",
    {
      name: c,
      placeholder: v,
      value: h,
      rows: S,
      onChange: O,
      className: `${je.textarea} ${k ? je.error : ""}`
    }
  );
}, fL = ({
  name: c,
  placeholder: v,
  value: p = "",
  options: S = [],
  onChange: x
}) => {
  const [E, h] = Ie.useState(p), R = (b) => {
    const O = b.target.value;
    h(O), x?.(c, O);
  }, k = S && Array.isArray(S) ? S : [];
  return /* @__PURE__ */ D.jsxs(
    "select",
    {
      name: c,
      value: E,
      onChange: R,
      className: je.select,
      children: [
        v && /* @__PURE__ */ D.jsx("option", { value: "", children: v }),
        k.map((b) => /* @__PURE__ */ D.jsx("option", { value: b.value, children: b.label }, b.value))
      ]
    }
  );
}, dL = ({
  name: c,
  label: v,
  checked: p = !1,
  onChange: S
}) => {
  const [x, E] = Ie.useState(p), h = (R) => {
    const k = R.target.checked;
    E(k), S?.(c, k);
  };
  return /* @__PURE__ */ D.jsxs("div", { className: je.checkboxWrapper, children: [
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
}, pL = ({
  name: c,
  options: v = [],
  value: p = "",
  onChange: S
}) => {
  const [x, E] = Ie.useState(p), h = (R) => {
    const k = R.target.value;
    E(k), S?.(c, k);
  };
  return !v || !Array.isArray(v) || v.length === 0 ? /* @__PURE__ */ D.jsx("div", { className: je.radioGroup, children: "No options available" }) : /* @__PURE__ */ D.jsx("div", { className: je.radioGroup, children: v.map((R) => /* @__PURE__ */ D.jsxs("div", { className: je.radioWrapper, children: [
    /* @__PURE__ */ D.jsx(
      "input",
      {
        type: "radio",
        id: `${c}-${R.value}`,
        name: c,
        value: R.value,
        checked: x === R.value,
        onChange: h
      }
    ),
    /* @__PURE__ */ D.jsx("label", { htmlFor: `${c}-${R.value}`, children: R.label })
  ] }, R.value)) });
}, vL = ({
  name: c,
  options: v = [],
  values: p = [],
  onChange: S
}) => {
  const [x, E] = Ie.useState(p), h = (R, k) => {
    const b = k ? [...x, R] : x.filter((O) => O !== R);
    E(b), S?.(c, b);
  };
  return !v || !Array.isArray(v) || v.length === 0 ? /* @__PURE__ */ D.jsx("div", { className: je.checkboxGroup, children: "No options available" }) : /* @__PURE__ */ D.jsx("div", { className: je.checkboxGroup, children: v.map((R) => /* @__PURE__ */ D.jsxs("div", { className: je.checkboxWrapper, children: [
    /* @__PURE__ */ D.jsx(
      "input",
      {
        type: "checkbox",
        id: `${c}-${R.value}`,
        name: c,
        value: R.value,
        checked: x.includes(R.value),
        onChange: (k) => h(R.value, k.target.checked)
      }
    ),
    /* @__PURE__ */ D.jsx("label", { htmlFor: `${c}-${R.value}`, children: R.label })
  ] }, R.value)) });
}, hL = ({
  name: c,
  placeholder: v,
  value: p = "",
  min: S,
  max: x,
  onChange: E
}) => {
  const [h, R] = Ie.useState(p), k = (b) => {
    const O = b.target.value;
    R(O), E?.(c, O);
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
      onChange: k,
      className: je.input
    }
  );
}, mL = ({
  label: c,
  hint: v,
  children: p,
  renderComponent: S
}) => /* @__PURE__ */ D.jsxs("div", { className: je.formField, children: [
  c && /* @__PURE__ */ D.jsx("label", { className: je.fieldLabel, children: c }),
  S(p),
  v && /* @__PURE__ */ D.jsx("span", { className: je.fieldHint, children: v })
] }), yL = ({
  name: c,
  children: v,
  buttons: p,
  onAction: S,
  renderComponent: x
}) => {
  const [E, h] = Ie.useState({}), R = Ie.useCallback((b, O) => {
    h((A) => ({ ...A, [b]: O }));
  }, []), k = (b) => {
    b.preventDefault(), S ? S({ type: "submit_form", props: { formName: c, formData: E } }, E) : console.warn("Form onAction is not defined");
  };
  return /* @__PURE__ */ D.jsxs("form", { className: je.form, onSubmit: k, name: c, children: [
    v.map((b, O) => /* @__PURE__ */ D.jsx(
      mL,
      {
        label: b.label,
        hint: b.hint,
        children: {
          ...b.children,
          props: {
            ...b.children.props,
            onChange: R
          }
        },
        renderComponent: x
      },
      O
    )),
    p && x(p)
  ] });
}, gL = ({
  name: c = "radio",
  value: v,
  label: p,
  checked: S = !1,
  onChange: x
}) => {
  const [E, h] = Ie.useState(S), R = (k) => {
    const b = k.target.checked;
    h(b), b && x && x(c, v);
  };
  return /* @__PURE__ */ D.jsxs("div", { className: je.radioWrapper, children: [
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
}, _L = ({
  name: c = "checkbox",
  value: v,
  label: p,
  checked: S = !1,
  onChange: x
}) => {
  const [E, h] = Ie.useState(S), R = (k) => {
    const b = k.target.checked;
    h(b), x && x(c, v, b);
  };
  return /* @__PURE__ */ D.jsxs("div", { className: je.checkboxWrapper, children: [
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
}, UE = ({
  component: c,
  onAction: v
}) => {
  const p = Ie.useCallback((S) => {
    if (!S || !S.component)
      return console.warn("Invalid component definition:", S), null;
    const { component: x, props: E } = S, h = { ...E, onAction: v };
    switch (x) {
      // Basic Components
      case "Icon":
        return /* @__PURE__ */ D.jsx(AE, { ...h });
      case "Header":
        return /* @__PURE__ */ D.jsx(QO, { ...h });
      case "TextContent":
        return /* @__PURE__ */ D.jsx(XO, { ...h });
      // Button Components
      case "Button":
        return /* @__PURE__ */ D.jsx(JO, { ...h });
      case "ButtonGroup":
        return /* @__PURE__ */ D.jsx(
          ZO,
          {
            ...h,
            renderComponent: p
          }
        );
      // Layout Components
      case "Card":
        return /* @__PURE__ */ D.jsx(
          eL,
          {
            ...h,
            renderComponent: p
          }
        );
      // List Component
      case "List":
        return /* @__PURE__ */ D.jsx(tL, { ...h });
      // Stats Component
      case "Stats":
        return /* @__PURE__ */ D.jsx(nL, { ...h });
      // ProfileTile Component
      case "ProfileTile":
        return /* @__PURE__ */ D.jsx(
          rL,
          {
            ...h,
            renderComponent: p
          }
        );
      // MiniCard Components
      case "MiniCard":
        return /* @__PURE__ */ D.jsx(
          aL,
          {
            ...h,
            renderComponent: p
          }
        );
      case "MiniCardBlock":
        return /* @__PURE__ */ D.jsx(
          iL,
          {
            ...h,
            renderComponent: p
          }
        );
      // Steps Components
      case "Steps":
        return /* @__PURE__ */ D.jsx(
          lL,
          {
            ...h,
            renderComponent: p
          }
        );
      case "StepsItem":
        return /* @__PURE__ */ D.jsx(
          oL,
          {
            ...h,
            renderComponent: p
          }
        );
      // Section Components
      case "SectionBlock":
        return /* @__PURE__ */ D.jsx(
          uL,
          {
            ...h,
            renderComponent: p
          }
        );
      // Form Components
      case "Form":
        return /* @__PURE__ */ D.jsx(
          yL,
          {
            ...h,
            renderComponent: p
          }
        );
      case "Input":
        return /* @__PURE__ */ D.jsx(sL, { ...h });
      case "TextArea":
        return /* @__PURE__ */ D.jsx(cL, { ...h });
      case "Select":
        return /* @__PURE__ */ D.jsx(fL, { ...h });
      case "Checkbox":
        return /* @__PURE__ */ D.jsx(dL, { ...h });
      case "RadioGroup":
        return /* @__PURE__ */ D.jsx(pL, { ...h });
      case "CheckBoxGroup":
        return /* @__PURE__ */ D.jsx(vL, { ...h });
      case "DatePicker":
        return /* @__PURE__ */ D.jsx(hL, { ...h });
      case "RadioItem":
        return /* @__PURE__ */ D.jsx(gL, { ...h });
      case "CheckBoxItem":
        return /* @__PURE__ */ D.jsx(_L, { ...h });
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
      return SL(x);
    }
    return oE(c);
  } catch (v) {
    return console.error("parseStreamingGenUI - Error:", v), null;
  }
}
function SL(c) {
  let v = null, p = -1, S = -1;
  const x = /"component"\s*:\s*"([^"]+)"/g;
  let E;
  for (; (E = x.exec(c)) !== null; ) {
    const h = c.substring(0, E.index), R = (h.match(/\{/g) || []).length - (h.match(/\}/g) || []).length;
    R >= 1 && R > S && (v = E, p = E.index, S = R);
  }
  if (v && v[1]) {
    const h = v[1], k = c.substring(p + v[0].length).match(/"props"\s*:\s*\{([\s\S]*?)(\}|$)/);
    let b = {};
    if (k && k[1]) {
      const O = k[1], A = /"([^"]+)"\s*:\s*"([^"]*)"|"([^"]+)"\s*:\s*(\d+|true|false|null)/g;
      let I;
      for (; (I = A.exec(O)) !== null; ) {
        const q = I[1] || I[3], oe = I[2] || I[4];
        q && (b[q] = oe === "true" ? !0 : oe === "false" ? !1 : oe === "null" ? null : oe);
      }
      O.includes('"children"') && O.includes("[") && (b.children = []);
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
const CL = ({
  content: c,
  isStreaming: v,
  onAction: p
}) => {
  const [S, x] = Ie.useState(null);
  return Ie.useEffect(() => {
    if (!c) {
      x(null);
      return;
    }
    const E = zE(c);
    if (E?.component) {
      const h = E.component;
      if (h && typeof h == "object" && "component" in h) {
        const R = h.component, k = h.props || {};
        typeof R == "string" ? x({
          component: R,
          props: k
        }) : R && typeof R == "object" && "component" in R && x(R);
      }
    }
  }, [c]), S ? /* @__PURE__ */ D.jsxs("div", { className: je.streamingContainer, children: [
    v && /* @__PURE__ */ D.jsx("div", { className: je.streamingIndicator, children: /* @__PURE__ */ D.jsx("span", { children: "Building interface..." }) }),
    /* @__PURE__ */ D.jsx(UE, { component: S, onAction: p })
  ] }) : v ? /* @__PURE__ */ D.jsx("div", { className: je.streamingContainer, children: /* @__PURE__ */ D.jsxs("div", { className: je.skeletonLoader, children: [
    /* @__PURE__ */ D.jsx("div", { className: je.skeletonShimmer }),
    /* @__PURE__ */ D.jsx("span", { children: "Generating interface..." })
  ] }) }) : null;
};
function EL(c) {
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
function xL(c) {
  try {
    const v = c.match(/<content\s+thesys="true">([\s\S]*?)<\/content>/);
    if (v && v[1]) {
      const p = EL(v[1].trim());
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
function wL(c) {
  return !!(c.includes('<content thesys="true">') || c.trim().startsWith("{") && c.includes('"component"'));
}
function bL(c) {
  const v = c.indexOf('<content thesys="true">');
  return v > 0 ? c.substring(0, v).trim() : "";
}
const RL = ({
  message: c,
  onAction: v,
  onUpdateMessage: p
}) => {
  const S = c.role === "user", x = c.role === "assistant", E = Ie.useMemo(() => c.content ? wL(c.content) : !1, [c.content]), h = Ie.useMemo(() => {
    if (!c.content) return null;
    if (E) {
      if (c.isStreaming) {
        const O = zE(c.content);
        return O?.component ? O : null;
      }
      return xL(c.content);
    }
    return null;
  }, [c.content, c.isStreaming, E]), R = Ie.useMemo(() => c.content ? bL(c.content) : "", [c.content]), k = Ie.useCallback((O, A) => {
    if (!v) return;
    const I = {
      type: O.type,
      params: {
        ...O.props,
        formData: A
      }
    };
    console.log("event", I), console.log("formData", A), v(I);
  }, [v]), b = () => E ? /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
    R && /* @__PURE__ */ D.jsx("div", { className: au.textContent, children: R }),
    /* @__PURE__ */ D.jsx(
      CL,
      {
        content: c.content,
        isStreaming: c.isStreaming || !1,
        onAction: k
      }
    )
  ] }) : h?.component ? /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
    R && /* @__PURE__ */ D.jsx("div", { className: au.textContent, children: R }),
    /* @__PURE__ */ D.jsx(
      UE,
      {
        component: h.component,
        onAction: k
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
        b()
      ] }) : null
    }
  );
}, kL = "_overlay_271nu_1", TL = "_modal_271nu_21", DL = "_header_271nu_42", NL = "_closeButton_271nu_55", OL = "_selectedInfo_271nu_77", LL = "_inputGroup_271nu_99", ML = "_actions_271nu_130", jL = "_cancelBtn_271nu_136", AL = "_confirmBtn_271nu_137", iu = {
  overlay: kL,
  modal: TL,
  header: DL,
  closeButton: NL,
  selectedInfo: OL,
  inputGroup: LL,
  actions: ML,
  cancelBtn: jL,
  confirmBtn: AL
}, UL = ({
  isOpen: c,
  onClose: v,
  humanFriendlyMessage: p,
  llmFriendlyMessage: S,
  onConfirm: x
}) => {
  const [E, h] = Ie.useState(S);
  if (Ie.useEffect(() => {
    h(S);
  }, [S]), Ie.useEffect(() => {
    const k = (b) => {
      b.key === "Escape" && v();
    };
    if (c)
      return window.addEventListener("keydown", k), () => window.removeEventListener("keydown", k);
  }, [c, v]), !c) return null;
  const R = (k) => {
    k.preventDefault(), E.trim() && x(E.trim());
  };
  return /* @__PURE__ */ D.jsx("div", { className: iu.overlay, onClick: v, children: /* @__PURE__ */ D.jsxs("div", { className: iu.modal, onClick: (k) => k.stopPropagation(), children: [
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
    /* @__PURE__ */ D.jsxs("form", { onSubmit: R, children: [
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
            onChange: (k) => h(k.target.value),
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
}, J1 = (c) => `<content thesys="true">${JSON.stringify({ component: c, error: null })}</content>`, lE = () => `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, zL = (c) => {
  const { sendMessage: v, setPendingAction: p, setIsModalOpen: S, context: x, addMessage: E, updateMessage: h } = c;
  return (R) => {
    switch (console.log("Action received:", R), R.type) {
      case "continue_conversation":
        if (R.params) {
          const { humanFriendlyMessage: k, llmFriendlyMessage: b, prompt: O } = R.params;
          O ? v(O) : k && b && (p({
            humanFriendlyMessage: k,
            llmFriendlyMessage: b
          }), S(!0));
        }
        break;
      case "open_url":
        R.params?.url && window.open(R.params.url, "_blank", "noopener,noreferrer");
        break;
      case "submit_form":
        if (R.params?.formData) {
          const k = R.params.formData, b = R.params.formName || "form", O = Object.entries(k).filter(([I, q]) => q !== void 0 && q !== "").map(([I, q]) => `${I.replace(/_/g, " ")}: ${q}`).join(`
`), A = `Form submitted: ${b}

${O}`;
          console.log("Sending form data to LLM:", A), v(A);
        }
        break;
      case "add_assistant_message":
        if (R.params?.content || R.params?.componentData) {
          const k = lE(), b = R.params.chatKey;
          let O;
          R.params.componentData ? O = `<content thesys="true">${JSON.stringify(R.params.componentData)}</content>` : O = R.params.content, E(x, {
            id: k,
            role: "assistant",
            content: O,
            timestamp: /* @__PURE__ */ new Date(),
            isStreaming: !1
          }, b);
        }
        break;
      case "create_suggestion_request":
        if (R.params) {
          const { personName: k, personTitle: b, companyName: O, masterPersonId: A, chatKey: I } = R.params, q = {
            request_panel_title: `Suggestion Request for ${k}`,
            request_header_title: `People to introduce to ${k}`,
            request_context: `Find people from my network to introduce to ${k}, who is ${b} at ${O}`,
            status: "suggestion",
            user_id: 3,
            copilot_mode: "loop",
            master_person_id: A
          }, oe = lE();
          E(x, {
            id: oe,
            role: "assistant",
            content: J1({
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
          }, I), wy.getState().createSuggestionRequest(q).then(() => {
            const { createSuggestionRequestError: ie } = wy.getState(), we = J1(ie ? {
              component: "Card",
              props: {
                children: [{
                  component: "TextContent",
                  props: { textMarkdown: `❌ Failed: ${ie}` }
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
            if (h(x, oe, we, !1, I), !ie) {
              const { setSelectedPerson: pe, setSelectedSuggestionRequest: ve } = fd.getState();
              pe(null), ve(null);
            }
          });
        }
        break;
      default:
        console.log("Unhandled action type:", R.type);
    }
  };
}, PL = {
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
}, FL = () => Object.entries(PL).filter(([c, v]) => v.allowed).map(([c]) => c), IL = () => `You can use these GenUI components: ${FL().join(", ")}. Do not use any other components. Keep the interface simple and avoid unnecessary complexity.`, VL = "_chatContainer_fwjlu_1", HL = "_header_fwjlu_9", $L = "_subtitle_fwjlu_24", BL = "_messagesContainer_fwjlu_31", qL = "_emptyState_fwjlu_50", WL = "_emptyStateMessage_fwjlu_61", YL = "_leverageLoopSummary_fwjlu_74", GL = "_summaryCard_fwjlu_79", QL = "_summaryCardHeader_fwjlu_90", KL = "_summaryCardTitle_fwjlu_97", XL = "_summaryCardInput_fwjlu_117", JL = "_summaryTextarea_fwjlu_122", ZL = "_summaryCardButton_fwjlu_145", eM = "_playIcon_fwjlu_173", Kr = {
  chatContainer: VL,
  header: HL,
  subtitle: $L,
  messagesContainer: BL,
  emptyState: qL,
  emptyStateMessage: WL,
  leverageLoopSummary: YL,
  summaryCard: GL,
  summaryCardHeader: QL,
  summaryCardTitle: KL,
  summaryCardInput: XL,
  summaryTextarea: JL,
  summaryCardButton: ZL,
  playIcon: eM
}, tM = ({
  onSendMessage: c,
  isLoading: v
}) => {
  const [p, S] = Ie.useState(""), { selectedPerson: x, selectedSuggestionRequest: E, leverageLoopSummaries: h, upsertLeverageLoopSummary: R } = fd(
    Sc((A) => ({
      selectedPerson: A.selectedPerson,
      selectedSuggestionRequest: A.selectedSuggestionRequest,
      leverageLoopSummaries: A.leverageLoopSummaries,
      upsertLeverageLoopSummary: A.upsertLeverageLoopSummary
    }))
  );
  Ie.useEffect(() => {
    let A = null;
    if (x ? A = x.full_name : E && (A = E.request_header_title), A) {
      const I = h.find((q) => q.id === A);
      S(I?.content || "");
    } else
      S("");
  }, [x, E, h]);
  const k = () => x ? `Leverage loop summary for ${x.full_name}` : E ? E.request_header_title : "Leverage Loops", b = () => {
    p.trim() && (c(p.trim()), S(""));
  }, O = (A) => {
    S(A.target.value), x && R({ id: x.full_name, content: A.target.value, timestamp: /* @__PURE__ */ new Date() }), E && R({ id: E.request_header_title, content: A.target.value, timestamp: /* @__PURE__ */ new Date() });
  };
  return /* @__PURE__ */ D.jsx("div", { className: Kr.leverageLoopSummary, children: /* @__PURE__ */ D.jsxs("div", { className: Kr.summaryCard, children: [
    /* @__PURE__ */ D.jsxs("div", { className: Kr.summaryCardHeader, children: [
      /* @__PURE__ */ D.jsx("p", { className: Kr.summaryCardTitle, children: k() }),
      /* @__PURE__ */ D.jsx(
        "button",
        {
          className: Kr.summaryCardButton,
          onClick: b,
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
        onChange: (A) => O(A),
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
    setIsLoading: R,
    upsertLeverageLoopSummary: k,
    selectedPerson: b,
    selectedSuggestionRequest: O
  } = fd(
    Sc((X) => c === "leverage-loops" ? {
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
      return J && c === "leverage-loops" && I(J), V || (Ee = X), {
        cleanContent: Ee
      };
    }
    return {
      cleanContent: X
    };
  }
  const I = Ie.useCallback((X) => {
    if (c !== "leverage-loops") return;
    let V = null;
    b ? V = b.full_name : O && (V = O.request_header_title), V && X && k({
      id: V,
      content: X,
      timestamp: /* @__PURE__ */ new Date()
    });
  }, [c, b, O, k]), { messages: q, threadId: oe, isLoading: ie } = x, we = c === "leverage-loops" && q.length > 1, [pe, ve] = Ja.useState(!1), [_e, Re] = Ja.useState(null), he = Ie.useRef(null);
  Ie.useEffect(() => {
    he.current?.scrollIntoView({ behavior: "smooth" });
  }, [q]);
  const Ye = Ie.useCallback(
    async (X) => {
      if (!X.trim() || ie) return;
      const V = {
        id: r_(),
        role: "user",
        content: X.trim(),
        timestamp: /* @__PURE__ */ new Date()
      };
      E(c, V), R(c, !0);
      const J = r_();
      E(c, {
        id: J,
        role: "assistant",
        content: "",
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !0
      });
      try {
        const He = IL(), xe = `${S || "You are a helpful AI assistant."}

${He}

User: ${X.trim()}`, re = await fetch(`${PE}/api/chat`, {
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
            threadId: oe,
            responseId: J,
            context: c
            // Pass context to backend if needed
          })
        });
        if (!re.ok)
          throw new Error(`API error: ${re.status}`);
        const De = re.body?.getReader(), ge = new TextDecoder();
        let F = "";
        if (De)
          for (; ; ) {
            const { done: Je, value: ze } = await De.read();
            if (Je) break;
            const ht = ge.decode(ze, { stream: !0 });
            F += ht;
            const { cleanContent: nt } = A(F);
            h(c, J, nt || F, !0);
          }
        const { cleanContent: ee } = A(F);
        h(c, J, ee, !1);
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
    [ie, oe, c, S, E, h, R, A, I]
  ), Ve = Ie.useCallback(
    (X) => {
      zL({
        sendMessage: Ye,
        setPendingAction: Re,
        setIsModalOpen: ve,
        context: c,
        addMessage: E,
        updateMessage: h
      })(X);
    },
    [Ye, Re, ve, c, E, h]
  ), We = Ie.useCallback(
    (X, V) => {
      h(c, X, V);
    },
    [c, h]
  ), it = Ie.useCallback(
    (X) => {
      ve(!1), Re(null), Ye(X);
    },
    [Ye]
  ), ut = Ie.useCallback(() => {
    ve(!1), Re(null);
  }, []);
  return /* @__PURE__ */ D.jsxs("div", { className: Kr.chatContainer, children: [
    /* @__PURE__ */ D.jsxs("div", { className: Kr.header, children: [
      /* @__PURE__ */ D.jsx("h1", { children: v }),
      p && /* @__PURE__ */ D.jsx("p", { className: Kr.subtitle, children: p })
    ] }),
    we && /* @__PURE__ */ D.jsx(
      tM,
      {
        onSendMessage: Ye,
        isLoading: ie
      }
    ),
    /* @__PURE__ */ D.jsxs("div", { className: Kr.messagesContainer, children: [
      q.length === 0 ? /* @__PURE__ */ D.jsx("div", { className: Kr.emptyState, children: /* @__PURE__ */ D.jsx("p", { children: "Start a conversation" }) }) : q.map((X) => /* @__PURE__ */ D.jsx(
        RL,
        {
          message: X,
          onAction: Ve,
          onUpdateMessage: (V) => We(X.id, V)
        },
        X.id
      )),
      /* @__PURE__ */ D.jsx("div", { ref: he })
    ] }),
    /* @__PURE__ */ D.jsx(r4, { onSend: Ye, disabled: ie }),
    _e && /* @__PURE__ */ D.jsx(
      UL,
      {
        isOpen: pe,
        onClose: ut,
        humanFriendlyMessage: _e.humanFriendlyMessage,
        llmFriendlyMessage: _e.llmFriendlyMessage,
        onConfirm: it
      }
    )
  ] });
}, nM = (c) => ({
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
}), rM = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.15816%2015.5394C4.42185%2015.8099%203.64142%2015.9909%202.82808%2016.0678C2.75965%2016.0739%202.69009%2016.0784%202.62129%2016.081C2.05326%2016.1048%201.47513%2015.9215%201.00732%2015.5213C0.154714%2014.7923%20-0.052828%2013.5813%200.443029%2012.6226C0.448638%2012.6116%200.453874%2012.6011%200.459857%2012.5898L3.41481%206.77869C2.08654%209.73401%202.83855%2013.3286%205.16339%2015.5372L5.15816%2015.5391V15.5394Z'%20fill='url(%23paint0_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8419%204.46013C15.5782%204.18972%2016.3587%204.00906%2017.172%203.93175C17.2401%203.92571%2017.31%203.92119%2017.3788%203.91855C17.9468%203.89479%2018.525%204.07808%2018.9928%204.47823C19.845%205.20726%2020.0529%206.41828%2019.5571%207.37699C19.5515%207.3883%2019.5458%207.39886%2019.5402%207.4098L16.5853%2013.2205C17.9132%2010.2648%2017.1615%206.67059%2014.8367%204.46202L14.8419%204.46013Z'%20fill='url(%23paint1_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10%202.61975C11.8545%202.61975%2013.547%203.31559%2014.8367%204.46211C12.464%205.51888%2010.8283%207.5913%2010.1904%2010.0563C9.55242%2012.5214%207.60302%2014.6787%205.16338%2015.5378C3.66459%2014.2306%202.68222%2012.2057%202.68222%2010.0001C2.68259%205.92394%205.95877%202.61975%2010%202.61975Z'%20fill='url(%23paint2_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8367%204.46167C16.358%205.81412%2017.3179%207.79376%2017.3179%209.99932C17.3179%2014.0751%2014.0417%2017.3793%2010.0001%2017.3793C8.14604%2017.3793%206.45317%2016.6835%205.16342%2015.537C7.59222%2014.5651%209.36213%2012.4644%2010.0001%209.99932C10.638%207.53429%2012.4079%205.4332%2014.8367%204.46167Z'%20fill='url(%23paint3_linear_23492_1459)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_23492_1459'%20x1='1.41231'%20y1='10.771'%20x2='6.31346'%20y2='13.2684'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFAE00'%20stop-opacity='0.12'/%3e%3cstop%20offset='1'%20stop-color='%23FFAE00'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_23492_1459'%20x1='13.6991'%20y1='6.69473'%20x2='18.6306'%20y2='9.20746'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2313F562'/%3e%3cstop%20offset='1'%20stop-color='%2313F562'%20stop-opacity='0.09'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_23492_1459'%20x1='4.21878'%20y1='14.805'%20x2='10.8001'%20y2='2.68539'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FD5743'/%3e%3cstop%20offset='0.21'%20stop-color='%23D13D58'/%3e%3cstop%20offset='0.4'%20stop-color='%23AB2868'/%3e%3cstop%20offset='0.6'%20stop-color='%238C1B6F'/%3e%3cstop%20offset='1'%20stop-color='%23280553'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_23492_1459'%20x1='9.19834'%20y1='17.5257'%20x2='15.8611'%20y2='5.25654'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23130F56'/%3e%3cstop%20offset='0.41'%20stop-color='%23105D8E'/%3e%3cstop%20offset='0.6'%20stop-color='%23107995'/%3e%3cstop%20offset='0.79'%20stop-color='%2311A39E'/%3e%3cstop%20offset='1'%20stop-color='%2313EBAF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", aM = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%205.83329C9.17592%205.83329%208.37034%206.07766%207.68514%206.5355C6.99993%206.99334%206.46588%207.64408%206.15051%208.40544C5.83515%209.1668%205.75264%2010.0046%205.91341%2010.8128C6.07418%2011.6211%206.47102%2012.3635%207.05373%2012.9462C7.63645%2013.529%208.37888%2013.9258%209.18714%2014.0866C9.99539%2014.2473%2010.8332%2014.1648%2011.5945%2013.8495C12.3559%2013.5341%2013.0066%2013%2013.4645%2012.3148C13.9223%2011.6296%2014.1667%2010.824%2014.1667%209.99995M10.8333%202.54579C9.28839%202.37246%207.72776%202.68352%206.36733%203.43593C5.0069%204.18834%203.9139%205.34492%203.23953%206.74567C2.56516%208.14643%202.34274%209.72213%202.60305%2011.2548C2.86335%2012.7875%203.59352%2014.2014%204.69253%2015.301C5.79155%2016.4006%207.2051%2017.1314%208.73766%2017.3925C10.2702%2017.6536%2011.846%2017.432%2013.2471%2016.7583C14.6482%2016.0846%2015.8053%2014.9922%2016.5584%2013.6322C17.3115%2012.2721%2017.6234%2010.7117%2017.4508%209.16662M12.5%207.49995V4.99995L15%202.49995V4.99995H17.5L15%207.49995H12.5ZM12.5%207.49995L10%209.99995M9.16668%209.99995C9.16668%2010.221%209.25447%2010.4329%209.41076%2010.5892C9.56704%2010.7455%209.779%2010.8333%2010%2010.8333C10.221%2010.8333%2010.433%2010.7455%2010.5893%2010.5892C10.7455%2010.4329%2010.8333%2010.221%2010.8333%209.99995C10.8333%209.77894%2010.7455%209.56698%2010.5893%209.4107C10.433%209.25442%2010.221%209.16662%2010%209.16662C9.779%209.16662%209.56704%209.25442%209.41076%209.4107C9.25447%209.56698%209.16668%209.77894%209.16668%209.99995Z'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", iM = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.5533%205.43171C14.1448%204.53303%2013.4793%203.77539%2012.6409%203.2543C11.8024%202.73321%2010.8285%202.47198%209.84179%202.50353C8.8551%202.53509%207.89984%202.85802%207.09639%203.43162C6.29294%204.00523%205.67727%204.80383%205.32698%205.72679C4.97669%206.64974%204.90745%207.65573%205.12798%208.61798C5.34852%209.58022%205.84897%2010.4556%206.56625%2011.1339C7.28353%2011.8122%208.18555%2012.263%209.15861%2012.4294C10.1317%2012.5958%2011.1322%2012.4705%2012.0342%2012.0692'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.5683%2014.5533C15.467%2014.1448%2016.2246%2013.4793%2016.7457%2012.6409C17.2668%2011.8024%2017.5281%2010.8284%2017.4965%209.84176C17.4649%208.85507%2017.142%207.89981%2016.5684%207.09636C15.9948%206.29291%2015.1962%205.67724%2014.2732%205.32695C13.3503%204.97666%2012.3443%204.90742%2011.3821%205.12795C10.4198%205.34849%209.54439%205.84894%208.86612%206.56622C8.18784%207.2835%207.73708%208.18552%207.57064%209.15858C7.40419%2010.1316%207.52952%2011.1322%207.93083%2012.0341'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.45001%2014.5684C5.8585%2015.467%206.52387%2016.2247%207.36227%2016.7459C8.20067%2017.267%209.17458%2017.5283%2010.1613%2017.4969C11.1479%2017.4654%2012.1032%2017.1425%2012.9067%2016.569C13.7102%2015.9955%2014.3259%2015.197%2014.6763%2014.2741C15.0267%2013.3512%2015.0961%2012.3452%2014.8756%2011.383C14.6552%2010.4207%2014.1549%209.54526%2013.4377%208.8669C12.7205%208.18855%2011.8186%207.73767%2010.8456%207.57109C9.87256%207.40451%208.872%207.52969%207.97001%207.93085'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.43168%205.44995C4.53299%205.85844%203.77532%206.52381%203.25417%207.36221C2.73302%208.20061%202.47171%209.17452%202.50318%2010.1612C2.53465%2011.1479%202.85749%2012.1031%203.431%2012.9066C4.00451%2013.7101%204.80304%2014.3259%205.72594%2014.6763C6.64884%2015.0266%207.6548%2015.096%208.61706%2014.8756C9.57931%2014.6552%2010.4548%2014.1548%2011.1331%2013.4376C11.8115%2012.7205%2012.2624%2011.8185%2012.4289%2010.8455C12.5955%209.8725%2012.4703%208.87194%2012.0692%207.96995'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", oM = ({
  activeSection: c,
  onSectionChange: v,
  onSectionChangeConfiguration: p
}) => {
  const { leverageLoops: S, fetchNetworkPersons: x, fetchSuggestionRequests: E } = wy(
    Sc((pe) => ({
      leverageLoops: pe.leverageLoops,
      fetchNetworkPersons: pe.fetchNetworkPersons,
      fetchSuggestionRequests: pe.fetchSuggestionRequests
    }))
  ), {
    selectedPerson: h,
    selectedSuggestionRequest: R,
    setSelectedPerson: k,
    setSelectedSuggestionRequest: b,
    addMessage: O,
    leverageLoopChats: A
  } = fd(
    Sc((pe) => ({
      selectedPerson: pe.selectedPerson,
      selectedSuggestionRequest: pe.selectedSuggestionRequest,
      setSelectedPerson: pe.setSelectedPerson,
      setSelectedSuggestionRequest: pe.setSelectedSuggestionRequest,
      addMessage: pe.addMessage,
      leverageLoopChats: pe.leverageLoopChats
    }))
  ), [I, q] = Ie.useState(/* @__PURE__ */ new Set()), oe = (pe) => {
    q((ve) => {
      const _e = new Set(ve);
      return _e.has(pe) ? _e.delete(pe) : _e.add(pe), _e;
    });
  }, ie = (pe) => {
    k(pe), v("leverage-loops");
    const ve = pe.full_name;
    if (!(A[ve]?.messages?.[0]?.role === "assistant")) {
      const he = "leverage-loops", Ye = r_(), Ve = `<content thesys="true">${JSON.stringify(nM(pe))}</content>`;
      O(he, {
        id: Ye,
        role: "assistant",
        content: Ve,
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !1
      }, ve);
    }
  }, we = (pe) => {
    b(pe), v("leverage-loops");
  };
  return Ie.useEffect(() => {
    x(), E();
  }, []), /* @__PURE__ */ D.jsx("div", { className: Rn.sidebar, children: /* @__PURE__ */ D.jsxs("nav", { className: Rn.sidebarNav, children: [
    /* @__PURE__ */ D.jsxs(
      "button",
      {
        className: `${Rn.sidebarItem} ${c === "copilot" ? Rn.active : ""}`,
        onClick: () => v("copilot"),
        "aria-label": "Orbiter.io Copilot",
        children: [
          /* @__PURE__ */ D.jsx("span", { className: Rn.sidebarIcon, children: /* @__PURE__ */ D.jsx("img", { src: rM, alt: "Orbiter", width: 18, height: 18 }) }),
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
            /* @__PURE__ */ D.jsx("span", { className: Rn.sidebarIcon, children: /* @__PURE__ */ D.jsx("img", { src: aM, alt: "Outcomes", width: 18, height: 18 }) }),
            /* @__PURE__ */ D.jsx("span", { className: Rn.sidebarLabel, children: "Outcomes" })
          ]
        }
      ),
      /* @__PURE__ */ D.jsx(
        "button",
        {
          className: Rn.plusButton,
          onClick: () => oe("outcomes"),
          "aria-label": "Expand Outcomes",
          children: /* @__PURE__ */ D.jsx("span", { className: `${Rn.plusIcon} ${I.has("outcomes") ? Rn.rotated : ""}`, children: "+" })
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
              /* @__PURE__ */ D.jsx("span", { className: Rn.sidebarIcon, children: /* @__PURE__ */ D.jsx("img", { src: iM, alt: "Leverage Loops", width: 18, height: 18 }) }),
              /* @__PURE__ */ D.jsx("span", { className: Rn.sidebarLabel, children: "Leverage Loops" })
            ]
          }
        ),
        /* @__PURE__ */ D.jsx(
          "button",
          {
            className: Rn.plusButton,
            onClick: () => oe("leverage-loops"),
            "aria-label": "Expand Leverage Loops",
            children: /* @__PURE__ */ D.jsx("span", { className: `${Rn.plusIcon} ${I.has("leverage-loops") ? Rn.rotated : ""}`, children: "+" })
          }
        )
      ] }),
      I.has("leverage-loops") && /* @__PURE__ */ D.jsx(
        q3,
        {
          contentType: "leverage-loops",
          items: S,
          selectedItem: h,
          selectedSuggestionRequest: R,
          onItemSelect: ie,
          onSuggestionRequestSelect: we
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
), lM = () => /* @__PURE__ */ D.jsx(
  c_,
  {
    context: "outcomes",
    title: "Outcomes",
    systemPrompt: "You are helping the user track and achieve their professional outcomes and goals."
  }
), uM = () => {
  const { selectedPerson: c, selectedSuggestionRequest: v } = fd(
    Sc((x) => ({
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
    /* @__PURE__ */ D.jsx("div", { className: Kr.messagesContainer, children: /* @__PURE__ */ D.jsx("div", { className: Kr.emptyStateMessage, children: /* @__PURE__ */ D.jsx("p", { children: "Select a person or suggestion request from the Leverage Loops sidebar to help a person with their leverage loop" }) }) })
  ] }) : /* @__PURE__ */ D.jsx(D.Fragment, { children: /* @__PURE__ */ D.jsx(
    c_,
    {
      context: "leverage-loops",
      title: "Leverage Loops",
      subtitle: S(),
      systemPrompt: p()
    }
  ) });
}, sM = "_app_rj7hb_1", cM = "_mainContent_rj7hb_11", sE = {
  app: sM,
  mainContent: cM
}, fM = ({
  agentName: c = "Copilot",
  token: v,
  dataSource: p,
  baseUrl: S
}) => {
  const [x, E] = Ie.useState("copilot"), { setSelectedPerson: h, setSelectedSuggestionRequest: R } = fd(
    Sc((O) => ({
      setSelectedPerson: O.setSelectedPerson,
      setSelectedSuggestionRequest: O.setSelectedSuggestionRequest
    }))
  ), k = (O) => {
    E(O), O === "leverage-loops" && (h(null), R(null));
  }, b = () => {
    switch (x) {
      case "copilot":
        return /* @__PURE__ */ D.jsx(uE, { agentName: c });
      case "outcomes":
        return /* @__PURE__ */ D.jsx(lM, {});
      case "leverage-loops":
        return /* @__PURE__ */ D.jsx(uM, {});
      default:
        return /* @__PURE__ */ D.jsx(uE, { agentName: c });
    }
  };
  return /* @__PURE__ */ D.jsxs("div", { className: sE.app, children: [
    /* @__PURE__ */ D.jsx(
      oM,
      {
        activeSection: x,
        onSectionChange: E,
        onSectionChangeConfiguration: k
      }
    ),
    /* @__PURE__ */ D.jsx("main", { className: sE.mainContent, children: b() })
  ] });
};
var Cy = { exports: {} }, Ka = {}, Ey = { exports: {} }, Z1 = {};
var cE;
function dM() {
  return cE || (cE = 1, (function(c) {
    function v(re, De) {
      var ge = re.length;
      re.push(De);
      e: for (; 0 < ge; ) {
        var F = ge - 1 >>> 1, ee = re[F];
        if (0 < x(ee, De)) re[F] = De, re[ge] = ee, ge = F;
        else break e;
      }
    }
    function p(re) {
      return re.length === 0 ? null : re[0];
    }
    function S(re) {
      if (re.length === 0) return null;
      var De = re[0], ge = re.pop();
      if (ge !== De) {
        re[0] = ge;
        e: for (var F = 0, ee = re.length, Je = ee >>> 1; F < Je; ) {
          var ze = 2 * (F + 1) - 1, ht = re[ze], nt = ze + 1, Ae = re[nt];
          if (0 > x(ht, ge)) nt < ee && 0 > x(Ae, ht) ? (re[F] = Ae, re[nt] = ge, F = nt) : (re[F] = ht, re[ze] = ge, F = ze);
          else if (nt < ee && 0 > x(Ae, ge)) re[F] = Ae, re[nt] = ge, F = nt;
          else break e;
        }
      }
      return De;
    }
    function x(re, De) {
      var ge = re.sortIndex - De.sortIndex;
      return ge !== 0 ? ge : re.id - De.id;
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
    var k = [], b = [], O = 1, A = null, I = 3, q = !1, oe = !1, ie = !1, we = typeof setTimeout == "function" ? setTimeout : null, pe = typeof clearTimeout == "function" ? clearTimeout : null, ve = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function _e(re) {
      for (var De = p(b); De !== null; ) {
        if (De.callback === null) S(b);
        else if (De.startTime <= re) S(b), De.sortIndex = De.expirationTime, v(k, De);
        else break;
        De = p(b);
      }
    }
    function Re(re) {
      if (ie = !1, _e(re), !oe) if (p(k) !== null) oe = !0, Ne(he);
      else {
        var De = p(b);
        De !== null && xe(Re, De.startTime - re);
      }
    }
    function he(re, De) {
      oe = !1, ie && (ie = !1, pe(We), We = -1), q = !0;
      var ge = I;
      try {
        for (_e(De), A = p(k); A !== null && (!(A.expirationTime > De) || re && !X()); ) {
          var F = A.callback;
          if (typeof F == "function") {
            A.callback = null, I = A.priorityLevel;
            var ee = F(A.expirationTime <= De);
            De = c.unstable_now(), typeof ee == "function" ? A.callback = ee : A === p(k) && S(k), _e(De);
          } else S(k);
          A = p(k);
        }
        if (A !== null) var Je = !0;
        else {
          var ze = p(b);
          ze !== null && xe(Re, ze.startTime - De), Je = !1;
        }
        return Je;
      } finally {
        A = null, I = ge, q = !1;
      }
    }
    var Ye = !1, Ve = null, We = -1, it = 5, ut = -1;
    function X() {
      return !(c.unstable_now() - ut < it);
    }
    function V() {
      if (Ve !== null) {
        var re = c.unstable_now();
        ut = re;
        var De = !0;
        try {
          De = Ve(!0, re);
        } finally {
          De ? J() : (Ye = !1, Ve = null);
        }
      } else Ye = !1;
    }
    var J;
    if (typeof ve == "function") J = function() {
      ve(V);
    };
    else if (typeof MessageChannel < "u") {
      var Ee = new MessageChannel(), He = Ee.port2;
      Ee.port1.onmessage = V, J = function() {
        He.postMessage(null);
      };
    } else J = function() {
      we(V, 0);
    };
    function Ne(re) {
      Ve = re, Ye || (Ye = !0, J());
    }
    function xe(re, De) {
      We = we(function() {
        re(c.unstable_now());
      }, De);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(re) {
      re.callback = null;
    }, c.unstable_continueExecution = function() {
      oe || q || (oe = !0, Ne(he));
    }, c.unstable_forceFrameRate = function(re) {
      0 > re || 125 < re ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : it = 0 < re ? Math.floor(1e3 / re) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return I;
    }, c.unstable_getFirstCallbackNode = function() {
      return p(k);
    }, c.unstable_next = function(re) {
      switch (I) {
        case 1:
        case 2:
        case 3:
          var De = 3;
          break;
        default:
          De = I;
      }
      var ge = I;
      I = De;
      try {
        return re();
      } finally {
        I = ge;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(re, De) {
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
      var ge = I;
      I = re;
      try {
        return De();
      } finally {
        I = ge;
      }
    }, c.unstable_scheduleCallback = function(re, De, ge) {
      var F = c.unstable_now();
      switch (typeof ge == "object" && ge !== null ? (ge = ge.delay, ge = typeof ge == "number" && 0 < ge ? F + ge : F) : ge = F, re) {
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
      return ee = ge + ee, re = { id: O++, callback: De, priorityLevel: re, startTime: ge, expirationTime: ee, sortIndex: -1 }, ge > F ? (re.sortIndex = ge, v(b, re), p(k) === null && re === p(b) && (ie ? (pe(We), We = -1) : ie = !0, xe(Re, ge - F))) : (re.sortIndex = ee, v(k, re), oe || q || (oe = !0, Ne(he))), re;
    }, c.unstable_shouldYield = X, c.unstable_wrapCallback = function(re) {
      var De = I;
      return function() {
        var ge = I;
        I = De;
        try {
          return re.apply(this, arguments);
        } finally {
          I = ge;
        }
      };
    };
  })(Z1)), Z1;
}
var e_ = {};
var fE;
function pM() {
  return fE || (fE = 1, (function(c) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var v = !1, p = 5;
      function S(be, Ze) {
        var Rt = be.length;
        be.push(Ze), h(be, Ze, Rt);
      }
      function x(be) {
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
      var b = 1, O = 2, A = 3, I = 4, q = 5;
      function oe(be, Ze) {
      }
      var ie = typeof performance == "object" && typeof performance.now == "function";
      if (ie) {
        var we = performance;
        c.unstable_now = function() {
          return we.now();
        };
      } else {
        var pe = Date, ve = pe.now();
        c.unstable_now = function() {
          return pe.now() - ve;
        };
      }
      var _e = 1073741823, Re = -1, he = 250, Ye = 5e3, Ve = 1e4, We = _e, it = [], ut = [], X = 1, V = null, J = A, Ee = !1, He = !1, Ne = !1, xe = typeof setTimeout == "function" ? setTimeout : null, re = typeof clearTimeout == "function" ? clearTimeout : null, De = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ge(be) {
        for (var Ze = x(ut); Ze !== null; ) {
          if (Ze.callback === null)
            E(ut);
          else if (Ze.startTime <= be)
            E(ut), Ze.sortIndex = Ze.expirationTime, S(it, Ze);
          else
            return;
          Ze = x(ut);
        }
      }
      function F(be) {
        if (Ne = !1, ge(be), !He)
          if (x(it) !== null)
            He = !0, zn(ee);
          else {
            var Ze = x(ut);
            Ze !== null && br(F, Ze.startTime - be);
          }
      }
      function ee(be, Ze) {
        He = !1, Ne && (Ne = !1, ya()), Ee = !0;
        var Rt = J;
        try {
          var Gt;
          if (!v) return Je(be, Ze);
        } finally {
          V = null, J = Rt, Ee = !1;
        }
      }
      function Je(be, Ze) {
        var Rt = Ze;
        for (ge(Rt), V = x(it); V !== null && !(V.expirationTime > Rt && (!be || gi())); ) {
          var Gt = V.callback;
          if (typeof Gt == "function") {
            V.callback = null, J = V.priorityLevel;
            var un = V.expirationTime <= Rt, _n = Gt(un);
            Rt = c.unstable_now(), typeof _n == "function" ? V.callback = _n : V === x(it) && E(it), ge(Rt);
          } else
            E(it);
          V = x(it);
        }
        if (V !== null)
          return !0;
        var pn = x(ut);
        return pn !== null && br(F, pn.startTime - Rt), !1;
      }
      function ze(be, Ze) {
        switch (be) {
          case b:
          case O:
          case A:
          case I:
          case q:
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
      function ht(be) {
        var Ze;
        switch (J) {
          case b:
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
      function nt(be) {
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
      function Ae(be, Ze, Rt) {
        var Gt = c.unstable_now(), un;
        if (typeof Rt == "object" && Rt !== null) {
          var _n = Rt.delay;
          typeof _n == "number" && _n > 0 ? un = Gt + _n : un = Gt;
        } else
          un = Gt;
        var pn;
        switch (be) {
          case b:
            pn = Re;
            break;
          case O:
            pn = he;
            break;
          case q:
            pn = We;
            break;
          case I:
            pn = Ve;
            break;
          case A:
          default:
            pn = Ye;
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
        return un > Gt ? (sn.sortIndex = un, S(ut, sn), x(it) === null && sn === x(ut) && (Ne ? ya() : Ne = !0, br(F, un - Gt))) : (sn.sortIndex = nr, S(it, sn), !He && !Ee && (He = !0, zn(ee))), sn;
      }
      function dt() {
      }
      function mt() {
        !He && !Ee && (He = !0, zn(ee));
      }
      function Xt() {
        return x(it);
      }
      function Un(be) {
        be.callback = null;
      }
      function Or() {
        return J;
      }
      var kn = !1, ur = null, Yn = -1, Gn = p, Jr = -1;
      function gi() {
        var be = c.unstable_now() - Jr;
        return !(be < Gn);
      }
      function ma() {
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
          Jr = be;
          var Ze = !0, Rt = !0;
          try {
            Rt = ur(Ze, be);
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
        var wr = new MessageChannel(), Za = wr.port2;
        wr.port1.onmessage = Tn, Qn = function() {
          Za.postMessage(null);
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
      function ya() {
        re(Yn), Yn = -1;
      }
      var ei = ma, _i = null;
      c.unstable_IdlePriority = q, c.unstable_ImmediatePriority = b, c.unstable_LowPriority = I, c.unstable_NormalPriority = A, c.unstable_Profiling = _i, c.unstable_UserBlockingPriority = O, c.unstable_cancelCallback = Un, c.unstable_continueExecution = mt, c.unstable_forceFrameRate = tr, c.unstable_getCurrentPriorityLevel = Or, c.unstable_getFirstCallbackNode = Xt, c.unstable_next = ht, c.unstable_pauseExecution = dt, c.unstable_requestPaint = ei, c.unstable_runWithPriority = ze, c.unstable_scheduleCallback = Ae, c.unstable_shouldYield = gi, c.unstable_wrapCallback = nt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(e_)), e_;
}
var dE;
function FE() {
  return dE || (dE = 1, process.env.NODE_ENV === "production" ? Ey.exports = dM() : Ey.exports = pM()), Ey.exports;
}
var pE;
function vM() {
  if (pE) return Ka;
  pE = 1;
  var c = xv(), v = FE();
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
  var R = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), k = Object.prototype.hasOwnProperty, b = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, O = {}, A = {};
  function I(n) {
    return k.call(A, n) ? !0 : k.call(O, n) ? !1 : b.test(n) ? A[n] = !0 : (O[n] = !0, !1);
  }
  function q(n, r, o, u) {
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
  function oe(n, r, o, u) {
    if (r === null || typeof r > "u" || q(n, r, o, u)) return !0;
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
  var we = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    we[n] = new ie(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    we[r] = new ie(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    we[n] = new ie(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    we[n] = new ie(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    we[n] = new ie(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    we[n] = new ie(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    we[n] = new ie(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    we[n] = new ie(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    we[n] = new ie(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var pe = /[\-:]([a-z])/g;
  function ve(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      pe,
      ve
    );
    we[r] = new ie(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(pe, ve);
    we[r] = new ie(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(pe, ve);
    we[r] = new ie(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    we[n] = new ie(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), we.xlinkHref = new ie("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    we[n] = new ie(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function _e(n, r, o, u) {
    var f = we.hasOwnProperty(r) ? we[r] : null;
    (f !== null ? f.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (oe(r, o, f, u) && (o = null), u || f === null ? I(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : f.mustUseProperty ? n[f.propertyName] = o === null ? f.type === 3 ? !1 : "" : o : (r = f.attributeName, u = f.attributeNamespace, o === null ? n.removeAttribute(r) : (f = f.type, o = f === 3 || f === 4 && o === !0 ? "" : "" + o, u ? n.setAttributeNS(u, r, o) : n.setAttribute(r, o))));
  }
  var Re = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, he = /* @__PURE__ */ Symbol.for("react.element"), Ye = /* @__PURE__ */ Symbol.for("react.portal"), Ve = /* @__PURE__ */ Symbol.for("react.fragment"), We = /* @__PURE__ */ Symbol.for("react.strict_mode"), it = /* @__PURE__ */ Symbol.for("react.profiler"), ut = /* @__PURE__ */ Symbol.for("react.provider"), X = /* @__PURE__ */ Symbol.for("react.context"), V = /* @__PURE__ */ Symbol.for("react.forward_ref"), J = /* @__PURE__ */ Symbol.for("react.suspense"), Ee = /* @__PURE__ */ Symbol.for("react.suspense_list"), He = /* @__PURE__ */ Symbol.for("react.memo"), Ne = /* @__PURE__ */ Symbol.for("react.lazy"), xe = /* @__PURE__ */ Symbol.for("react.offscreen"), re = Symbol.iterator;
  function De(n) {
    return n === null || typeof n != "object" ? null : (n = re && n[re] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ge = Object.assign, F;
  function ee(n) {
    if (F === void 0) try {
      throw Error();
    } catch (o) {
      var r = o.stack.trim().match(/\n( *(at )?)/);
      F = r && r[1] || "";
    }
    return `
` + F + n;
  }
  var Je = !1;
  function ze(n, r) {
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
      Je = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? ee(n) : "";
  }
  function ht(n) {
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
        return n = ze(n.type, !1), n;
      case 11:
        return n = ze(n.type.render, !1), n;
      case 1:
        return n = ze(n.type, !0), n;
      default:
        return "";
    }
  }
  function nt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Ve:
        return "Fragment";
      case Ye:
        return "Portal";
      case it:
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
      case ut:
        return (n._context.displayName || "Context") + ".Provider";
      case V:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case He:
        return r = n.displayName || null, r !== null ? r : nt(n.type) || "Memo";
      case Ne:
        r = n._payload, n = n._init;
        try {
          return nt(n(r));
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
        return nt(r);
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
  function Xt(n) {
    var r = mt(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
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
    return n && (u = mt(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== o ? (r.setValue(n), !0) : !1;
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
    r = r.checked, r != null && _e(n, "checked", r, !1);
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
  function Oa(n) {
    if (n = rt(n)) {
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
      if (Rr = ga = null, Oa(n), r) for (n = 0; n < r.length; n++) Oa(r[n]);
    }
  }
  function fl(n, r) {
    return n(r);
  }
  function wo() {
  }
  var bo = !1;
  function dl(n, r, o) {
    if (bo) return n(r, o);
    bo = !0;
    try {
      return fl(n, r, o);
    } finally {
      bo = !1, (ga !== null || Rr !== null) && (wo(), cl());
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
  function Si(n, r, o, u, f, m, C, N, j) {
    var Q = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, Q);
    } catch (fe) {
      this.onError(fe);
    }
  }
  var ti = !1, Ci = null, Ei = !1, M = null, le = { onError: function(n) {
    ti = !0, Ci = n;
  } };
  function Oe(n, r, o, u, f, m, C, N, j) {
    ti = !1, Ci = null, Si.apply(le, arguments);
  }
  function qe(n, r, o, u, f, m, C, N, j) {
    if (Oe.apply(this, arguments), ti) {
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
  var vn = v.unstable_scheduleCallback, cr = v.unstable_cancelCallback, ni = v.unstable_shouldYield, ri = v.unstable_requestPaint, xt = v.unstable_now, bt = v.unstable_getCurrentPriorityLevel, ai = v.unstable_ImmediatePriority, pl = v.unstable_UserBlockingPriority, vl = v.unstable_NormalPriority, Ro = v.unstable_LowPriority, lu = v.unstable_IdlePriority, ko = null, Zr = null;
  function as(n) {
    if (Zr && typeof Zr.onCommitFiberRoot == "function") try {
      Zr.onCommitFiberRoot(ko, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var jr = Math.clz32 ? Math.clz32 : uu, Ec = Math.log, xc = Math.LN2;
  function uu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Ec(n) / xc | 0) | 0;
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
      var N = C & ~f;
      N !== 0 ? u = ii(N) : (m &= C, m !== 0 && (u = ii(m)));
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
      var C = 31 - jr(m), N = 1 << C, j = f[C];
      j === -1 ? ((N & o) === 0 || (N & u) !== 0) && (f[C] = su(N, r)) : j <= r && (n.expiredLanes |= N), m &= ~N;
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
  function pd(n, r) {
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
  var Ft, is, xi, gt, pu, fr = !1, wi = [], Ar = null, bi = null, hn = null, en = /* @__PURE__ */ new Map(), No = /* @__PURE__ */ new Map(), Kn = [], Ur = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function La(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Ar = null;
        break;
      case "dragenter":
      case "dragleave":
        bi = null;
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
        No.delete(r.pointerId);
    }
  }
  function ml(n, r, o, u, f, m) {
    return n === null || n.nativeEvent !== m ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: u, nativeEvent: m, targetContainers: [f] }, r !== null && (r = rt(r), r !== null && is(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, f !== null && r.indexOf(f) === -1 && r.push(f), n);
  }
  function os(n, r, o, u, f) {
    switch (r) {
      case "focusin":
        return Ar = ml(Ar, n, r, o, u, f), !0;
      case "dragenter":
        return bi = ml(bi, n, r, o, u, f), !0;
      case "mouseover":
        return hn = ml(hn, n, r, o, u, f), !0;
      case "pointerover":
        var m = f.pointerId;
        return en.set(m, ml(en.get(m) || null, n, r, o, u, f)), !0;
      case "gotpointercapture":
        return m = f.pointerId, No.set(m, ml(No.get(m) || null, n, r, o, u, f)), !0;
    }
    return !1;
  }
  function ls(n) {
    var r = bl(n.target);
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
  function Oo(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = mu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var u = new o.constructor(o.type, o);
        sn = u, o.target.dispatchEvent(u), sn = null;
      } else return r = rt(o), r !== null && is(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function yl(n, r, o) {
    Oo(n) && o.delete(r);
  }
  function vd() {
    fr = !1, Ar !== null && Oo(Ar) && (Ar = null), bi !== null && Oo(bi) && (bi = null), hn !== null && Oo(hn) && (hn = null), en.forEach(yl), No.forEach(yl);
  }
  function Ma(n, r) {
    n.blockedOn === r && (n.blockedOn = null, fr || (fr = !0, v.unstable_scheduleCallback(v.unstable_NormalPriority, vd)));
  }
  function li(n) {
    function r(f) {
      return Ma(f, n);
    }
    if (0 < wi.length) {
      Ma(wi[0], n);
      for (var o = 1; o < wi.length; o++) {
        var u = wi[o];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (Ar !== null && Ma(Ar, n), bi !== null && Ma(bi, n), hn !== null && Ma(hn, n), en.forEach(r), No.forEach(r), o = 0; o < Kn.length; o++) u = Kn[o], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < Kn.length && (o = Kn[0], o.blockedOn === null); ) ls(o), o.blockedOn === null && Kn.shift();
  }
  var Ri = Re.ReactCurrentBatchConfig, ja = !0;
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
      if (f === null) Ac(n, r, u, gl, o), La(n, u);
      else if (os(f, n, r, o, u)) u.stopPropagation();
      else if (La(n, u), r & 4 && -1 < Ur.indexOf(n)) {
        for (; f !== null; ) {
          var m = rt(f);
          if (m !== null && Ft(m), m = mu(n, r, o, u), m === null && Ac(n, r, u, gl, o), m === f) break;
          f = m;
        }
        f !== null && u.stopPropagation();
      } else Ac(n, r, u, null, o);
    }
  }
  var gl = null;
  function mu(n, r, o, u) {
    if (gl = null, n = Jt(u), n = bl(n), n !== null) if (r = Et(n), r === null) n = null;
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
        switch (bt()) {
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
  function G() {
    if (L) return L;
    var n, r = _, o = r.length, u, f = "value" in ui ? ui.value : ui.textContent, m = f.length;
    for (n = 0; n < o && r[n] === f[n]; n++) ;
    var C = o - n;
    for (u = 1; u <= C && r[o - u] === f[m - u]; u++) ;
    return L = f.slice(n, 1 < u ? 1 - u : void 0);
  }
  function Z(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Se() {
    return !0;
  }
  function ot() {
    return !1;
  }
  function Te(n) {
    function r(o, u, f, m, C) {
      this._reactName = o, this._targetInst = f, this.type = u, this.nativeEvent = m, this.target = C, this.currentTarget = null;
      for (var N in n) n.hasOwnProperty(N) && (o = n[N], this[N] = o ? o(m) : m[N]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? Se : ot, this.isPropagationStopped = ot, this;
    }
    return ge(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = Se);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = Se);
    }, persist: function() {
    }, isPersistent: Se }), r;
  }
  var ct = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ot = Te(ct), It = ge({}, ct, { view: 0, detail: 0 }), fn = Te(It), tn, kt, nn, Sn = ge({}, It, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: _d, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== nn && (nn && n.type === "mousemove" ? (tn = n.screenX - nn.screenX, kt = n.screenY - nn.screenY) : kt = tn = 0, nn = n), tn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : kt;
  } }), Mo = Te(Sn), us = ge({}, Sn, { dataTransfer: 0 }), Ji = Te(us), ss = ge({}, It, { relatedTarget: 0 }), _l = Te(ss), hd = ge({}, ct, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), wc = Te(hd), md = ge({}, ct, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Rv = Te(md), yd = ge({}, ct, { data: 0 }), gd = Te(yd), kv = {
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
  }, Tv = {
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
  function _d() {
    return Zi;
  }
  var Sd = ge({}, It, { key: function(n) {
    if (n.key) {
      var r = kv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = Z(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Tv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: _d, charCode: function(n) {
    return n.type === "keypress" ? Z(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Z(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Cd = Te(Sd), Ed = ge({}, Sn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Dv = Te(Ed), bc = ge({}, It, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: _d }), Nv = Te(bc), ea = ge({}, ct, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), eo = Te(ea), Pn = ge({}, Sn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), to = Te(Pn), xd = [9, 13, 27, 32], gu = R && "CompositionEvent" in window, cs = null;
  R && "documentMode" in document && (cs = document.documentMode);
  var fs = R && "TextEvent" in window && !cs, Ov = R && (!gu || cs && 8 < cs && 11 >= cs), Lv = " ", Rc = !1;
  function Mv(n, r) {
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
  function jv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var _u = !1;
  function Av(n, r) {
    switch (n) {
      case "compositionend":
        return jv(r);
      case "keypress":
        return r.which !== 32 ? null : (Rc = !0, Lv);
      case "textInput":
        return n = r.data, n === Lv && Rc ? null : n;
      default:
        return null;
    }
  }
  function My(n, r) {
    if (_u) return n === "compositionend" || !gu && Mv(n, r) ? (n = G(), L = _ = ui = null, _u = !1, n) : null;
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
  function Uv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!jy[n.type] : r === "textarea";
  }
  function wd(n, r, o, u) {
    Qi(u), r = ys(r, "onChange"), 0 < r.length && (o = new Ot("onChange", "change", null, o, u), n.push({ event: o, listeners: r }));
  }
  var ki = null, Sl = null;
  function zv(n) {
    xl(n, 0);
  }
  function ds(n) {
    var r = ci(n);
    if (Or(r)) return n;
  }
  function Ay(n, r) {
    if (n === "change") return r;
  }
  var Pv = !1;
  if (R) {
    var bd;
    if (R) {
      var Rd = "oninput" in document;
      if (!Rd) {
        var Fv = document.createElement("div");
        Fv.setAttribute("oninput", "return;"), Rd = typeof Fv.oninput == "function";
      }
      bd = Rd;
    } else bd = !1;
    Pv = bd && (!document.documentMode || 9 < document.documentMode);
  }
  function Iv() {
    ki && (ki.detachEvent("onpropertychange", Vv), Sl = ki = null);
  }
  function Vv(n) {
    if (n.propertyName === "value" && ds(Sl)) {
      var r = [];
      wd(r, Sl, n, Jt(n)), dl(zv, r);
    }
  }
  function Uy(n, r, o) {
    n === "focusin" ? (Iv(), ki = r, Sl = o, ki.attachEvent("onpropertychange", Vv)) : n === "focusout" && Iv();
  }
  function Hv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return ds(Sl);
  }
  function zy(n, r) {
    if (n === "click") return ds(r);
  }
  function $v(n, r) {
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
      if (!k.call(r, f) || !si(n[f], r[f])) return !1;
    }
    return !0;
  }
  function Bv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function kc(n, r) {
    var o = Bv(n);
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
      o = Bv(o);
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
  function Tc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Su(n) {
    var r = vs(), o = n.focusedElem, u = n.selectionRange;
    if (r !== o && o && o.ownerDocument && jo(o.ownerDocument.documentElement, o)) {
      if (u !== null && Tc(o)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in o) o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var f = o.textContent.length, m = Math.min(u.start, f);
          u = u.end === void 0 ? m : Math.min(u.end, f), !n.extend && m > u && (f = u, u = m, m = f), f = kc(o, m);
          var C = kc(
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
  var Fy = R && "documentMode" in document && 11 >= document.documentMode, Cu = null, kd = null, hs = null, Td = !1;
  function Dd(n, r, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Td || Cu == null || Cu !== kn(u) || (u = Cu, "selectionStart" in u && Tc(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), hs && ps(hs, u) || (hs = u, u = ys(kd, "onSelect"), 0 < u.length && (r = new Ot("onSelect", "select", null, r, o), n.push({ event: r, listeners: u }), r.target = Cu)));
  }
  function Dc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var Cl = { animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd") }, dr = {}, Nd = {};
  R && (Nd = document.createElement("div").style, "AnimationEvent" in window || (delete Cl.animationend.animation, delete Cl.animationiteration.animation, delete Cl.animationstart.animation), "TransitionEvent" in window || delete Cl.transitionend.transition);
  function Nc(n) {
    if (dr[n]) return dr[n];
    if (!Cl[n]) return n;
    var r = Cl[n], o;
    for (o in r) if (r.hasOwnProperty(o) && o in Nd) return dr[n] = r[o];
    return n;
  }
  var qv = Nc("animationend"), Wv = Nc("animationiteration"), Yv = Nc("animationstart"), Gv = Nc("transitionend"), Od = /* @__PURE__ */ new Map(), Oc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Aa(n, r) {
    Od.set(n, r), E(r, [n]);
  }
  for (var Ld = 0; Ld < Oc.length; Ld++) {
    var El = Oc[Ld], Iy = El.toLowerCase(), Vy = El[0].toUpperCase() + El.slice(1);
    Aa(Iy, "on" + Vy);
  }
  Aa(qv, "onAnimationEnd"), Aa(Wv, "onAnimationIteration"), Aa(Yv, "onAnimationStart"), Aa("dblclick", "onDoubleClick"), Aa("focusin", "onFocus"), Aa("focusout", "onBlur"), Aa(Gv, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), E("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), E("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), E("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), E("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ms = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Md = new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));
  function Lc(n, r, o) {
    var u = n.type || "unknown-event";
    n.currentTarget = o, qe(u, r, void 0, n), n.currentTarget = null;
  }
  function xl(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var u = n[o], f = u.event;
      u = u.listeners;
      e: {
        var m = void 0;
        if (r) for (var C = u.length - 1; 0 <= C; C--) {
          var N = u[C], j = N.instance, Q = N.currentTarget;
          if (N = N.listener, j !== m && f.isPropagationStopped()) break e;
          Lc(f, N, Q), m = j;
        }
        else for (C = 0; C < u.length; C++) {
          if (N = u[C], j = N.instance, Q = N.currentTarget, N = N.listener, j !== m && f.isPropagationStopped()) break e;
          Lc(f, N, Q), m = j;
        }
      }
    }
    if (Ei) throw n = M, Ei = !1, M = null, n;
  }
  function Qt(n, r) {
    var o = r[Ss];
    o === void 0 && (o = r[Ss] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    o.has(u) || (Qv(r, n, 2, !1), o.add(u));
  }
  function Mc(n, r, o) {
    var u = 0;
    r && (u |= 4), Qv(o, n, u, r);
  }
  var jc = "_reactListening" + Math.random().toString(36).slice(2);
  function Eu(n) {
    if (!n[jc]) {
      n[jc] = !0, S.forEach(function(o) {
        o !== "selectionchange" && (Md.has(o) || Mc(o, !1, n), Mc(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[jc] || (r[jc] = !0, Mc("selectionchange", !1, r));
    }
  }
  function Qv(n, r, o, u) {
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
  function Ac(n, r, o, u, f) {
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
          if (C = bl(N), C === null) return;
          if (j = C.tag, j === 5 || j === 6) {
            u = m = C;
            continue e;
          }
          N = N.parentNode;
        }
      }
      u = u.return;
    }
    dl(function() {
      var Q = m, fe = Jt(o), me = [];
      e: {
        var ce = Od.get(n);
        if (ce !== void 0) {
          var Pe = Ot, Ge = n;
          switch (n) {
            case "keypress":
              if (Z(o) === 0) break e;
            case "keydown":
            case "keyup":
              Pe = Cd;
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
              Pe = Nv;
              break;
            case qv:
            case Wv:
            case Yv:
              Pe = wc;
              break;
            case Gv:
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
              Pe = Rv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Pe = Dv;
          }
          var Xe = (r & 4) !== 0, jn = !Xe && n === "scroll", H = Xe ? ce !== null ? ce + "Capture" : null : ce;
          Xe = [];
          for (var z = Q, W; z !== null; ) {
            W = z;
            var de = W.stateNode;
            if (W.tag === 5 && de !== null && (W = de, H !== null && (de = Lr(z, H), de != null && Xe.push(xu(z, de, W)))), jn) break;
            z = z.return;
          }
          0 < Xe.length && (ce = new Pe(ce, Ge, null, o, fe), me.push({ event: ce, listeners: Xe }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (ce = n === "mouseover" || n === "pointerover", Pe = n === "mouseout" || n === "pointerout", ce && o !== sn && (Ge = o.relatedTarget || o.fromElement) && (bl(Ge) || Ge[no])) break e;
          if ((Pe || ce) && (ce = fe.window === fe ? fe : (ce = fe.ownerDocument) ? ce.defaultView || ce.parentWindow : window, Pe ? (Ge = o.relatedTarget || o.toElement, Pe = Q, Ge = Ge ? bl(Ge) : null, Ge !== null && (jn = Et(Ge), Ge !== jn || Ge.tag !== 5 && Ge.tag !== 6) && (Ge = null)) : (Pe = null, Ge = Q), Pe !== Ge)) {
            if (Xe = Mo, de = "onMouseLeave", H = "onMouseEnter", z = "mouse", (n === "pointerout" || n === "pointerover") && (Xe = Dv, de = "onPointerLeave", H = "onPointerEnter", z = "pointer"), jn = Pe == null ? ce : ci(Pe), W = Ge == null ? ce : ci(Ge), ce = new Xe(de, z + "leave", Pe, o, fe), ce.target = jn, ce.relatedTarget = W, de = null, bl(fe) === Q && (Xe = new Xe(H, z + "enter", Ge, o, fe), Xe.target = W, Xe.relatedTarget = jn, de = Xe), jn = de, Pe && Ge) t: {
              for (Xe = Pe, H = Ge, z = 0, W = Xe; W; W = Ao(W)) z++;
              for (W = 0, de = H; de; de = Ao(de)) W++;
              for (; 0 < z - W; ) Xe = Ao(Xe), z--;
              for (; 0 < W - z; ) H = Ao(H), W--;
              for (; z--; ) {
                if (Xe === H || H !== null && Xe === H.alternate) break t;
                Xe = Ao(Xe), H = Ao(H);
              }
              Xe = null;
            }
            else Xe = null;
            Pe !== null && Kv(me, ce, Pe, Xe, !1), Ge !== null && jn !== null && Kv(me, jn, Ge, Xe, !0);
          }
        }
        e: {
          if (ce = Q ? ci(Q) : window, Pe = ce.nodeName && ce.nodeName.toLowerCase(), Pe === "select" || Pe === "input" && ce.type === "file") var Qe = Ay;
          else if (Uv(ce)) if (Pv) Qe = $v;
          else {
            Qe = Hv;
            var st = Uy;
          }
          else (Pe = ce.nodeName) && Pe.toLowerCase() === "input" && (ce.type === "checkbox" || ce.type === "radio") && (Qe = zy);
          if (Qe && (Qe = Qe(n, Q))) {
            wd(me, Qe, o, fe);
            break e;
          }
          st && st(n, ce, Q), n === "focusout" && (st = ce._wrapperState) && st.controlled && ce.type === "number" && ma(ce, "number", ce.value);
        }
        switch (st = Q ? ci(Q) : window, n) {
          case "focusin":
            (Uv(st) || st.contentEditable === "true") && (Cu = st, kd = Q, hs = null);
            break;
          case "focusout":
            hs = kd = Cu = null;
            break;
          case "mousedown":
            Td = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Td = !1, Dd(me, o, fe);
            break;
          case "selectionchange":
            if (Fy) break;
          case "keydown":
          case "keyup":
            Dd(me, o, fe);
        }
        var ft;
        if (gu) e: {
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
        else _u ? Mv(n, o) && (yt = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (yt = "onCompositionStart");
        yt && (Ov && o.locale !== "ko" && (_u || yt !== "onCompositionStart" ? yt === "onCompositionEnd" && _u && (ft = G()) : (ui = fe, _ = "value" in ui ? ui.value : ui.textContent, _u = !0)), st = ys(Q, yt), 0 < st.length && (yt = new gd(yt, n, null, o, fe), me.push({ event: yt, listeners: st }), ft ? yt.data = ft : (ft = jv(o), ft !== null && (yt.data = ft)))), (ft = fs ? Av(n, o) : My(n, o)) && (Q = ys(Q, "onBeforeInput"), 0 < Q.length && (fe = new gd("onBeforeInput", "beforeinput", null, o, fe), me.push({ event: fe, listeners: Q }), fe.data = ft));
      }
      xl(me, r);
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
  function Kv(n, r, o, u, f) {
    for (var m = r._reactName, C = []; o !== null && o !== u; ) {
      var N = o, j = N.alternate, Q = N.stateNode;
      if (j !== null && j === u) break;
      N.tag === 5 && Q !== null && (N = Q, f ? (j = Lr(o, m), j != null && C.unshift(xu(o, j, N))) : f || (j = Lr(o, m), j != null && C.push(xu(o, j, N)))), o = o.return;
    }
    C.length !== 0 && n.push({ event: r, listeners: C });
  }
  var Xv = /\r\n?/g, Hy = /\u0000|\uFFFD/g;
  function Jv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Xv, `
`).replace(Hy, "");
  }
  function Uc(n, r, o) {
    if (r = Jv(r), Jv(n) !== r && o) throw Error(p(425));
  }
  function Uo() {
  }
  var gs = null, wl = null;
  function zc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Pc = typeof setTimeout == "function" ? setTimeout : void 0, jd = typeof clearTimeout == "function" ? clearTimeout : void 0, Zv = typeof Promise == "function" ? Promise : void 0, wu = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zv < "u" ? function(n) {
    return Zv.resolve(null).then(n).catch(Fc);
  } : Pc;
  function Fc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function bu(n, r) {
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
  function eh(n) {
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
  function bl(n) {
    var r = n[Di];
    if (r) return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[no] || o[Di]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null) for (n = eh(n); n !== null; ) {
          if (o = n[Di]) return o;
          n = eh(n);
        }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function rt(n) {
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
  function tt(n, r) {
    Ua++, jt[Ua] = n.current, n.current = r;
  }
  var kr = {}, bn = za(kr), Xn = za(!1), ta = kr;
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
    dn(Xn), dn(bn);
  }
  function th(n, r, o) {
    if (bn.current !== kr) throw Error(p(168));
    tt(bn, r), tt(Xn, o);
  }
  function Cs(n, r, o) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return o;
    u = u.getChildContext();
    for (var f in u) if (!(f in r)) throw Error(p(108, Ae(n) || "Unknown", f));
    return ge({}, o, u);
  }
  function rr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || kr, ta = bn.current, tt(bn, n), tt(Xn, Xn.current), !0;
  }
  function Ic(n, r, o) {
    var u = n.stateNode;
    if (!u) throw Error(p(169));
    o ? (n = Cs(n, r, ta), u.__reactInternalMemoizedMergedChildContext = n, dn(Xn), dn(bn), tt(bn, n)) : dn(Xn), tt(Xn, o);
  }
  var Ni = null, Tu = !1, ro = !1;
  function Vc(n) {
    Ni === null ? Ni = [n] : Ni.push(n);
  }
  function Po(n) {
    Tu = !0, Vc(n);
  }
  function Oi() {
    if (!ro && Ni !== null) {
      ro = !0;
      var n = 0, r = Ht;
      try {
        var o = Ni;
        for (Ht = 1; n < o.length; n++) {
          var u = o[n];
          do
            u = u(!0);
          while (u !== null);
        }
        Ni = null, Tu = !1;
      } catch (f) {
        throw Ni !== null && (Ni = Ni.slice(n + 1)), vn(ai, Oi), f;
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
  function nh(n, r, o) {
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
  function Hc(n) {
    n.return !== null && (Rl(n, 1), nh(n, 1, 0));
  }
  function $c(n) {
    for (; n === Vo; ) Vo = Fo[--Io], Fo[Io] = null, ao = Fo[--Io], Fo[Io] = null;
    for (; n === Sa; ) Sa = In[--Pa], In[Pa] = null, Mi = In[--Pa], In[Pa] = null, Li = In[--Pa], In[Pa] = null;
  }
  var ra = null, aa = null, yn = !1, Fa = null;
  function Ad(n, r) {
    var o = Ba(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function rh(n, r) {
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
  function Ud(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function zd(n) {
    if (yn) {
      var r = aa;
      if (r) {
        var o = r;
        if (!rh(n, r)) {
          if (Ud(n)) throw Error(p(418));
          r = Ti(o.nextSibling);
          var u = ra;
          r && rh(n, r) ? Ad(u, o) : (n.flags = n.flags & -4097 | 2, yn = !1, ra = n);
        }
      } else {
        if (Ud(n)) throw Error(p(418));
        n.flags = n.flags & -4097 | 2, yn = !1, ra = n;
      }
    }
  }
  function Jn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    ra = n;
  }
  function Bc(n) {
    if (n !== ra) return !1;
    if (!yn) return Jn(n), yn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !zc(n.type, n.memoizedProps)), r && (r = aa)) {
      if (Ud(n)) throw Es(), Error(p(418));
      for (; r; ) Ad(n, r), r = Ti(r.nextSibling);
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
  var By = Re.ReactCurrentBatchConfig;
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
          var N = f.refs;
          C === null ? delete N[m] : N[m] = C;
        }, r._stringRef = m, r);
      }
      if (typeof n != "string") throw Error(p(284));
      if (!o._owner) throw Error(p(290, n));
    }
    return n;
  }
  function qc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(p(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function ah(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Tl(n) {
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
      return H = Ko(H, z), H.index = 0, H.sibling = null, H;
    }
    function m(H, z, W) {
      return H.index = W, n ? (W = H.alternate, W !== null ? (W = W.index, W < z ? (H.flags |= 2, z) : W) : (H.flags |= 2, z)) : (H.flags |= 1048576, z);
    }
    function C(H) {
      return n && H.alternate === null && (H.flags |= 2), H;
    }
    function N(H, z, W, de) {
      return z === null || z.tag !== 6 ? (z = vp(W, H.mode, de), z.return = H, z) : (z = f(z, W), z.return = H, z);
    }
    function j(H, z, W, de) {
      var Qe = W.type;
      return Qe === Ve ? fe(H, z, W.props.children, de, W.key) : z !== null && (z.elementType === Qe || typeof Qe == "object" && Qe !== null && Qe.$$typeof === Ne && ah(Qe) === z.type) ? (de = f(z, W.props), de.ref = kl(H, z, W), de.return = H, de) : (de = Js(W.type, W.key, W.props, null, H.mode, de), de.ref = kl(H, z, W), de.return = H, de);
    }
    function Q(H, z, W, de) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== W.containerInfo || z.stateNode.implementation !== W.implementation ? (z = bf(W, H.mode, de), z.return = H, z) : (z = f(z, W.children || []), z.return = H, z);
    }
    function fe(H, z, W, de, Qe) {
      return z === null || z.tag !== 7 ? (z = fo(W, H.mode, de, Qe), z.return = H, z) : (z = f(z, W), z.return = H, z);
    }
    function me(H, z, W) {
      if (typeof z == "string" && z !== "" || typeof z == "number") return z = vp("" + z, H.mode, W), z.return = H, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case he:
            return W = Js(z.type, z.key, z.props, null, H.mode, W), W.ref = kl(H, null, z), W.return = H, W;
          case Ye:
            return z = bf(z, H.mode, W), z.return = H, z;
          case Ne:
            var de = z._init;
            return me(H, de(z._payload), W);
        }
        if (tr(z) || De(z)) return z = fo(z, H.mode, W, null), z.return = H, z;
        qc(H, z);
      }
      return null;
    }
    function ce(H, z, W, de) {
      var Qe = z !== null ? z.key : null;
      if (typeof W == "string" && W !== "" || typeof W == "number") return Qe !== null ? null : N(H, z, "" + W, de);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case he:
            return W.key === Qe ? j(H, z, W, de) : null;
          case Ye:
            return W.key === Qe ? Q(H, z, W, de) : null;
          case Ne:
            return Qe = W._init, ce(
              H,
              z,
              Qe(W._payload),
              de
            );
        }
        if (tr(W) || De(W)) return Qe !== null ? null : fe(H, z, W, de, null);
        qc(H, W);
      }
      return null;
    }
    function Pe(H, z, W, de, Qe) {
      if (typeof de == "string" && de !== "" || typeof de == "number") return H = H.get(W) || null, N(z, H, "" + de, Qe);
      if (typeof de == "object" && de !== null) {
        switch (de.$$typeof) {
          case he:
            return H = H.get(de.key === null ? W : de.key) || null, j(z, H, de, Qe);
          case Ye:
            return H = H.get(de.key === null ? W : de.key) || null, Q(z, H, de, Qe);
          case Ne:
            var st = de._init;
            return Pe(H, z, W, st(de._payload), Qe);
        }
        if (tr(de) || De(de)) return H = H.get(W) || null, fe(z, H, de, Qe, null);
        qc(z, de);
      }
      return null;
    }
    function Ge(H, z, W, de) {
      for (var Qe = null, st = null, ft = z, yt = z = 0, or = null; ft !== null && yt < W.length; yt++) {
        ft.index > yt ? (or = ft, ft = null) : or = ft.sibling;
        var qt = ce(H, ft, W[yt], de);
        if (qt === null) {
          ft === null && (ft = or);
          break;
        }
        n && ft && qt.alternate === null && r(H, ft), z = m(qt, z, yt), st === null ? Qe = qt : st.sibling = qt, st = qt, ft = or;
      }
      if (yt === W.length) return o(H, ft), yn && Rl(H, yt), Qe;
      if (ft === null) {
        for (; yt < W.length; yt++) ft = me(H, W[yt], de), ft !== null && (z = m(ft, z, yt), st === null ? Qe = ft : st.sibling = ft, st = ft);
        return yn && Rl(H, yt), Qe;
      }
      for (ft = u(H, ft); yt < W.length; yt++) or = Pe(ft, H, yt, W[yt], de), or !== null && (n && or.alternate !== null && ft.delete(or.key === null ? yt : or.key), z = m(or, z, yt), st === null ? Qe = or : st.sibling = or, st = or);
      return n && ft.forEach(function(Zo) {
        return r(H, Zo);
      }), yn && Rl(H, yt), Qe;
    }
    function Xe(H, z, W, de) {
      var Qe = De(W);
      if (typeof Qe != "function") throw Error(p(150));
      if (W = Qe.call(W), W == null) throw Error(p(151));
      for (var st = Qe = null, ft = z, yt = z = 0, or = null, qt = W.next(); ft !== null && !qt.done; yt++, qt = W.next()) {
        ft.index > yt ? (or = ft, ft = null) : or = ft.sibling;
        var Zo = ce(H, ft, qt.value, de);
        if (Zo === null) {
          ft === null && (ft = or);
          break;
        }
        n && ft && Zo.alternate === null && r(H, ft), z = m(Zo, z, yt), st === null ? Qe = Zo : st.sibling = Zo, st = Zo, ft = or;
      }
      if (qt.done) return o(
        H,
        ft
      ), yn && Rl(H, yt), Qe;
      if (ft === null) {
        for (; !qt.done; yt++, qt = W.next()) qt = me(H, qt.value, de), qt !== null && (z = m(qt, z, yt), st === null ? Qe = qt : st.sibling = qt, st = qt);
        return yn && Rl(H, yt), Qe;
      }
      for (ft = u(H, ft); !qt.done; yt++, qt = W.next()) qt = Pe(ft, H, yt, qt.value, de), qt !== null && (n && qt.alternate !== null && ft.delete(qt.key === null ? yt : qt.key), z = m(qt, z, yt), st === null ? Qe = qt : st.sibling = qt, st = qt);
      return n && ft.forEach(function(Ih) {
        return r(H, Ih);
      }), yn && Rl(H, yt), Qe;
    }
    function jn(H, z, W, de) {
      if (typeof W == "object" && W !== null && W.type === Ve && W.key === null && (W = W.props.children), typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case he:
            e: {
              for (var Qe = W.key, st = z; st !== null; ) {
                if (st.key === Qe) {
                  if (Qe = W.type, Qe === Ve) {
                    if (st.tag === 7) {
                      o(H, st.sibling), z = f(st, W.props.children), z.return = H, H = z;
                      break e;
                    }
                  } else if (st.elementType === Qe || typeof Qe == "object" && Qe !== null && Qe.$$typeof === Ne && ah(Qe) === st.type) {
                    o(H, st.sibling), z = f(st, W.props), z.ref = kl(H, st, W), z.return = H, H = z;
                    break e;
                  }
                  o(H, st);
                  break;
                } else r(H, st);
                st = st.sibling;
              }
              W.type === Ve ? (z = fo(W.props.children, H.mode, de, W.key), z.return = H, H = z) : (de = Js(W.type, W.key, W.props, null, H.mode, de), de.ref = kl(H, z, W), de.return = H, H = de);
            }
            return C(H);
          case Ye:
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
              z = bf(W, H.mode, de), z.return = H, H = z;
            }
            return C(H);
          case Ne:
            return st = W._init, jn(H, z, st(W._payload), de);
        }
        if (tr(W)) return Ge(H, z, W, de);
        if (De(W)) return Xe(H, z, W, de);
        qc(H, W);
      }
      return typeof W == "string" && W !== "" || typeof W == "number" ? (W = "" + W, z !== null && z.tag === 6 ? (o(H, z.sibling), z = f(z, W), z.return = H, H = z) : (o(H, z), z = vp(W, H.mode, de), z.return = H, H = z), C(H)) : o(H, z);
    }
    return jn;
  }
  var Nn = Tl(!0), Le = Tl(!1), Ca = za(null), ia = null, Du = null, Pd = null;
  function Fd() {
    Pd = Du = ia = null;
  }
  function Id(n) {
    var r = Ca.current;
    dn(Ca), n._currentValue = r;
  }
  function Vd(n, r, o) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === o) break;
      n = n.return;
    }
  }
  function En(n, r) {
    ia = n, Pd = Du = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (Hn = !0), n.firstContext = null);
  }
  function Ia(n) {
    var r = n._currentValue;
    if (Pd !== n) if (n = { context: n, memoizedValue: r, next: null }, Du === null) {
      if (ia === null) throw Error(p(308));
      Du = n, ia.dependencies = { lanes: 0, firstContext: n };
    } else Du = Du.next = n;
    return r;
  }
  var Dl = null;
  function Hd(n) {
    Dl === null ? Dl = [n] : Dl.push(n);
  }
  function $d(n, r, o, u) {
    var f = r.interleaved;
    return f === null ? (o.next = o, Hd(r)) : (o.next = f.next, f.next = o), r.interleaved = o, Ea(n, u);
  }
  function Ea(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; ) n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var xa = !1;
  function Bd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ih(n, r) {
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
    return f = u.interleaved, f === null ? (r.next = r, Hd(u)) : (r.next = f.next, f.next = r), u.interleaved = r, Ea(n, o);
  }
  function Wc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Xi(n, o);
    }
  }
  function oh(n, r) {
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
    var m = f.firstBaseUpdate, C = f.lastBaseUpdate, N = f.shared.pending;
    if (N !== null) {
      f.shared.pending = null;
      var j = N, Q = j.next;
      j.next = null, C === null ? m = Q : C.next = Q, C = j;
      var fe = n.alternate;
      fe !== null && (fe = fe.updateQueue, N = fe.lastBaseUpdate, N !== C && (N === null ? fe.firstBaseUpdate = Q : N.next = Q, fe.lastBaseUpdate = j));
    }
    if (m !== null) {
      var me = f.baseState;
      C = 0, fe = Q = j = null, N = m;
      do {
        var ce = N.lane, Pe = N.eventTime;
        if ((u & ce) === ce) {
          fe !== null && (fe = fe.next = {
            eventTime: Pe,
            lane: 0,
            tag: N.tag,
            payload: N.payload,
            callback: N.callback,
            next: null
          });
          e: {
            var Ge = n, Xe = N;
            switch (ce = r, Pe = o, Xe.tag) {
              case 1:
                if (Ge = Xe.payload, typeof Ge == "function") {
                  me = Ge.call(Pe, me, ce);
                  break e;
                }
                me = Ge;
                break e;
              case 3:
                Ge.flags = Ge.flags & -65537 | 128;
              case 0:
                if (Ge = Xe.payload, ce = typeof Ge == "function" ? Ge.call(Pe, me, ce) : Ge, ce == null) break e;
                me = ge({}, me, ce);
                break e;
              case 2:
                xa = !0;
            }
          }
          N.callback !== null && N.lane !== 0 && (n.flags |= 64, ce = f.effects, ce === null ? f.effects = [N] : ce.push(N));
        } else Pe = { eventTime: Pe, lane: ce, tag: N.tag, payload: N.payload, callback: N.callback, next: null }, fe === null ? (Q = fe = Pe, j = me) : fe = fe.next = Pe, C |= ce;
        if (N = N.next, N === null) {
          if (N = f.shared.pending, N === null) break;
          ce = N, N = ce.next, ce.next = null, f.lastBaseUpdate = ce, f.shared.pending = null;
        }
      } while (!0);
      if (fe === null && (j = me), f.baseState = j, f.firstBaseUpdate = Q, f.lastBaseUpdate = fe, r = f.shared.interleaved, r !== null) {
        f = r;
        do
          C |= f.lane, f = f.next;
        while (f !== r);
      } else m === null && (f.shared.lanes = 0);
      Pi |= C, n.lanes = C, n.memoizedState = me;
    }
  }
  function qd(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], f = u.callback;
      if (f !== null) {
        if (u.callback = null, u = o, typeof f != "function") throw Error(p(191, f));
        f.call(u);
      }
    }
  }
  var ws = {}, ji = za(ws), bs = za(ws), Rs = za(ws);
  function Nl(n) {
    if (n === ws) throw Error(p(174));
    return n;
  }
  function Wd(n, r) {
    switch (tt(Rs, r), tt(bs, n), tt(ji, ws), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ya(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ya(r, n);
    }
    dn(ji), tt(ji, r);
  }
  function Ol() {
    dn(ji), dn(bs), dn(Rs);
  }
  function lh(n) {
    Nl(Rs.current);
    var r = Nl(ji.current), o = ya(r, n.type);
    r !== o && (tt(bs, n), tt(ji, o));
  }
  function Yc(n) {
    bs.current === n && (dn(ji), dn(bs));
  }
  var xn = za(0);
  function Gc(n) {
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
  function at() {
    for (var n = 0; n < ks.length; n++) ks[n]._workInProgressVersionPrimary = null;
    ks.length = 0;
  }
  var Dt = Re.ReactCurrentDispatcher, $t = Re.ReactCurrentBatchConfig, rn = 0, Bt = null, Vn = null, ar = null, Qc = !1, Ts = !1, Ll = 0, ue = 0;
  function Vt() {
    throw Error(p(321));
  }
  function pt(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++) if (!si(n[o], r[o])) return !1;
    return !0;
  }
  function Bo(n, r, o, u, f, m) {
    if (rn = m, Bt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Dt.current = n === null || n.memoizedState === null ? ff : js, n = o(u, f), Ts) {
      m = 0;
      do {
        if (Ts = !1, Ll = 0, 25 <= m) throw Error(p(301));
        m += 1, ar = Vn = null, r.updateQueue = null, Dt.current = df, n = o(u, f);
      } while (Ts);
    }
    if (Dt.current = zl, r = Vn !== null && Vn.next !== null, rn = 0, ar = Vn = Bt = null, Qc = !1, r) throw Error(p(300));
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
  function lo(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function qo(n) {
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
        var fe = Q.lane;
        if ((rn & fe) === fe) j !== null && (j = j.next = { lane: 0, action: Q.action, hasEagerState: Q.hasEagerState, eagerState: Q.eagerState, next: null }), u = Q.hasEagerState ? Q.eagerState : n(u, Q.action);
        else {
          var me = {
            lane: fe,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null
          };
          j === null ? (N = j = me, C = u) : j = j.next = me, Bt.lanes |= fe, Pi |= fe;
        }
        Q = Q.next;
      } while (Q !== null && Q !== m);
      j === null ? C = u : j.next = N, si(u, r.memoizedState) || (Hn = !0), r.memoizedState = u, r.baseState = C, r.baseQueue = j, o.lastRenderedState = u;
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
      si(m, r.memoizedState) || (Hn = !0), r.memoizedState = m, r.baseQueue === null && (r.baseState = m), o.lastRenderedState = m;
    }
    return [m, u];
  }
  function Kc() {
  }
  function Xc(n, r) {
    var o = Bt, u = On(), f = r(), m = !si(u.memoizedState, f);
    if (m && (u.memoizedState = f, Hn = !0), u = u.queue, Ds(ef.bind(null, o, u, n), [n]), u.getSnapshot !== r || m || ar !== null && ar.memoizedState.tag & 1) {
      if (o.flags |= 2048, jl(9, Zc.bind(null, o, u, f, r), void 0, null), Zn === null) throw Error(p(349));
      (rn & 30) !== 0 || Jc(o, r, f);
    }
    return f;
  }
  function Jc(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = Bt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Bt.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function Zc(n, r, o, u) {
    r.value = o, r.getSnapshot = u, tf(r) && nf(n);
  }
  function ef(n, r, o) {
    return o(function() {
      tf(r) && nf(n);
    });
  }
  function tf(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !si(n, o);
    } catch {
      return !0;
    }
  }
  function nf(n) {
    var r = Ea(n, 1);
    r !== null && Ir(r, n, 1, -1);
  }
  function rf(n) {
    var r = Tr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: lo, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ul.bind(null, Bt, n), [r.memoizedState, n];
  }
  function jl(n, r, o, u) {
    return n = { tag: n, create: r, destroy: o, deps: u, next: null }, r = Bt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Bt.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (u = o.next, o.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function af() {
    return On().memoizedState;
  }
  function Nu(n, r, o, u) {
    var f = Tr();
    Bt.flags |= n, f.memoizedState = jl(1 | r, o, void 0, u === void 0 ? null : u);
  }
  function Ou(n, r, o, u) {
    var f = On();
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
  function of(n, r) {
    return Nu(8390656, 8, n, r);
  }
  function Ds(n, r) {
    return Ou(2048, 8, n, r);
  }
  function lf(n, r) {
    return Ou(4, 2, n, r);
  }
  function Ns(n, r) {
    return Ou(4, 4, n, r);
  }
  function Al(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function uf(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Ou(4, 4, Al.bind(null, r, n), o);
  }
  function Os() {
  }
  function sf(n, r) {
    var o = On();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && pt(r, u[1]) ? u[0] : (o.memoizedState = [n, r], n);
  }
  function cf(n, r) {
    var o = On();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && pt(r, u[1]) ? u[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function Yd(n, r, o) {
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
  function Gd() {
    return On().memoizedState;
  }
  function Ms(n, r, o) {
    var u = Fi(n);
    if (o = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null }, oa(n)) uh(r, o);
    else if (o = $d(n, r, o, u), o !== null) {
      var f = qn();
      Ir(o, n, u, f), ln(o, r, u);
    }
  }
  function Ul(n, r, o) {
    var u = Fi(n), f = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (oa(n)) uh(r, f);
    else {
      var m = n.alternate;
      if (n.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer, m !== null)) try {
        var C = r.lastRenderedState, N = m(C, o);
        if (f.hasEagerState = !0, f.eagerState = N, si(N, C)) {
          var j = r.interleaved;
          j === null ? (f.next = f, Hd(r)) : (f.next = j.next, j.next = f), r.interleaved = f;
          return;
        }
      } catch {
      }
      o = $d(n, r, f, u), o !== null && (f = qn(), Ir(o, n, u, f), ln(o, r, u));
    }
  }
  function oa(n) {
    var r = n.alternate;
    return n === Bt || r !== null && r === Bt;
  }
  function uh(n, r) {
    Ts = Qc = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function ln(n, r, o) {
    if ((o & 4194240) !== 0) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Xi(n, o);
    }
  }
  var zl = { readContext: Ia, useCallback: Vt, useContext: Vt, useEffect: Vt, useImperativeHandle: Vt, useInsertionEffect: Vt, useLayoutEffect: Vt, useMemo: Vt, useReducer: Vt, useRef: Vt, useState: Vt, useDebugValue: Vt, useDeferredValue: Vt, useTransition: Vt, useMutableSource: Vt, useSyncExternalStore: Vt, useId: Vt, unstable_isNewReconciler: !1 }, ff = { readContext: Ia, useCallback: function(n, r) {
    return Tr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ia, useEffect: of, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Nu(
      4194308,
      4,
      Al.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return Nu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Nu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = Tr();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var u = Tr();
    return r = o !== void 0 ? o(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = Ms.bind(null, Bt, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = Tr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: rf, useDebugValue: Os, useDeferredValue: function(n) {
    return Tr().memoizedState = n;
  }, useTransition: function() {
    var n = rf(!1), r = n[0];
    return n = Ls.bind(null, n[1]), Tr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var u = Bt, f = Tr();
    if (yn) {
      if (o === void 0) throw Error(p(407));
      o = o();
    } else {
      if (o = r(), Zn === null) throw Error(p(349));
      (rn & 30) !== 0 || Jc(u, r, o);
    }
    f.memoizedState = o;
    var m = { value: o, getSnapshot: r };
    return f.queue = m, of(ef.bind(
      null,
      u,
      m,
      n
    ), [n]), u.flags |= 2048, jl(9, Zc.bind(null, u, m, o, r), void 0, null), o;
  }, useId: function() {
    var n = Tr(), r = Zn.identifierPrefix;
    if (yn) {
      var o = Mi, u = Li;
      o = (u & ~(1 << 32 - jr(u) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = Ll++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else o = ue++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, js = {
    readContext: Ia,
    useCallback: sf,
    useContext: Ia,
    useEffect: Ds,
    useImperativeHandle: uf,
    useInsertionEffect: lf,
    useLayoutEffect: Ns,
    useMemo: cf,
    useReducer: qo,
    useRef: af,
    useState: function() {
      return qo(lo);
    },
    useDebugValue: Os,
    useDeferredValue: function(n) {
      var r = On();
      return Yd(r, Vn.memoizedState, n);
    },
    useTransition: function() {
      var n = qo(lo)[0], r = On().memoizedState;
      return [n, r];
    },
    useMutableSource: Kc,
    useSyncExternalStore: Xc,
    useId: Gd,
    unstable_isNewReconciler: !1
  }, df = { readContext: Ia, useCallback: sf, useContext: Ia, useEffect: Ds, useImperativeHandle: uf, useInsertionEffect: lf, useLayoutEffect: Ns, useMemo: cf, useReducer: Ml, useRef: af, useState: function() {
    return Ml(lo);
  }, useDebugValue: Os, useDeferredValue: function(n) {
    var r = On();
    return Vn === null ? r.memoizedState = n : Yd(r, Vn.memoizedState, n);
  }, useTransition: function() {
    var n = Ml(lo)[0], r = On().memoizedState;
    return [n, r];
  }, useMutableSource: Kc, useSyncExternalStore: Xc, useId: Gd, unstable_isNewReconciler: !1 };
  function di(n, r) {
    if (n && n.defaultProps) {
      r = ge({}, r), n = n.defaultProps;
      for (var o in n) r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  function Qd(n, r, o, u) {
    r = n.memoizedState, o = o(u, r), o = o == null ? r : ge({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var pf = { isMounted: function(n) {
    return (n = n._reactInternals) ? Et(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var u = qn(), f = Fi(n), m = oo(u, f);
    m.payload = r, o != null && (m.callback = o), r = $o(n, m, f), r !== null && (Ir(r, n, f, u), Wc(r, n, f));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var u = qn(), f = Fi(n), m = oo(u, f);
    m.tag = 1, m.payload = r, o != null && (m.callback = o), r = $o(n, m, f), r !== null && (Ir(r, n, f, u), Wc(r, n, f));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = qn(), u = Fi(n), f = oo(o, u);
    f.tag = 2, r != null && (f.callback = r), r = $o(n, f, u), r !== null && (Ir(r, n, u, o), Wc(r, n, u));
  } };
  function sh(n, r, o, u, f, m, C) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, m, C) : r.prototype && r.prototype.isPureReactComponent ? !ps(o, u) || !ps(f, m) : !0;
  }
  function vf(n, r, o) {
    var u = !1, f = kr, m = r.contextType;
    return typeof m == "object" && m !== null ? m = Ia(m) : (f = Fn(r) ? ta : bn.current, u = r.contextTypes, m = (u = u != null) ? na(n, f) : kr), r = new r(o, m), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = pf, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = f, n.__reactInternalMemoizedMaskedChildContext = m), r;
  }
  function ch(n, r, o, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, u), r.state !== n && pf.enqueueReplaceState(r, r.state, null);
  }
  function As(n, r, o, u) {
    var f = n.stateNode;
    f.props = o, f.state = n.memoizedState, f.refs = {}, Bd(n);
    var m = r.contextType;
    typeof m == "object" && m !== null ? f.context = Ia(m) : (m = Fn(r) ? ta : bn.current, f.context = na(n, m)), f.state = n.memoizedState, m = r.getDerivedStateFromProps, typeof m == "function" && (Qd(n, r, m, o), f.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (r = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), r !== f.state && pf.enqueueReplaceState(f, f.state, null), xs(n, o, f, u), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Pl(n, r) {
    try {
      var o = "", u = r;
      do
        o += ht(u), u = u.return;
      while (u);
      var f = o;
    } catch (m) {
      f = `
Error generating stack: ` + m.message + `
` + m.stack;
    }
    return { value: n, source: r, stack: f, digest: null };
  }
  function Kd(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function Xd(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var hf = typeof WeakMap == "function" ? WeakMap : Map;
  function fh(n, r, o) {
    o = oo(-1, o), o.tag = 3, o.payload = { element: null };
    var u = r.value;
    return o.callback = function() {
      zu || (zu = !0, Vl = u), Xd(n, r);
    }, o;
  }
  function Jd(n, r, o) {
    o = oo(-1, o), o.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var f = r.value;
      o.payload = function() {
        return u(f);
      }, o.callback = function() {
        Xd(n, r);
      };
    }
    var m = n.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (o.callback = function() {
      Xd(n, r), typeof u != "function" && (Go === null ? Go = /* @__PURE__ */ new Set([this]) : Go.add(this));
      var C = r.stack;
      this.componentDidCatch(r.value, { componentStack: C !== null ? C : "" });
    }), o;
  }
  function Zd(n, r, o) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new hf();
      var f = /* @__PURE__ */ new Set();
      u.set(r, f);
    } else f = u.get(r), f === void 0 && (f = /* @__PURE__ */ new Set(), u.set(r, f));
    f.has(o) || (f.add(o), n = Xy.bind(null, n, r, o), r.then(n, n));
  }
  function dh(n) {
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
  var Us = Re.ReactCurrentOwner, Hn = !1;
  function pr(n, r, o, u) {
    r.child = n === null ? Le(r, null, o, u) : Nn(r, n.child, o, u);
  }
  function la(n, r, o, u, f) {
    o = o.render;
    var m = r.ref;
    return En(r, f), u = Bo(n, r, o, u, m, f), o = fi(), n !== null && !Hn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, Ha(n, r, f)) : (yn && o && Hc(r), r.flags |= 1, pr(n, r, u, f), r.child);
  }
  function Fl(n, r, o, u, f) {
    if (n === null) {
      var m = o.type;
      return typeof m == "function" && !pp(m) && m.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = m, wt(n, r, m, u, f)) : (n = Js(o.type, null, u, r, r.mode, f), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (m = n.child, (n.lanes & f) === 0) {
      var C = m.memoizedProps;
      if (o = o.compare, o = o !== null ? o : ps, o(C, u) && n.ref === r.ref) return Ha(n, r, f);
    }
    return r.flags |= 1, n = Ko(m, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function wt(n, r, o, u, f) {
    if (n !== null) {
      var m = n.memoizedProps;
      if (ps(m, u) && n.ref === r.ref) if (Hn = !1, r.pendingProps = u = m, (n.lanes & f) !== 0) (n.flags & 131072) !== 0 && (Hn = !0);
      else return r.lanes = n.lanes, Ha(n, r, f);
    }
    return ph(n, r, o, u, f);
  }
  function zs(n, r, o) {
    var u = r.pendingProps, f = u.children, m = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, tt(ju, wa), wa |= o;
    else {
      if ((o & 1073741824) === 0) return n = m !== null ? m.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, tt(ju, wa), wa |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = m !== null ? m.baseLanes : o, tt(ju, wa), wa |= u;
    }
    else m !== null ? (u = m.baseLanes | o, r.memoizedState = null) : u = o, tt(ju, wa), wa |= u;
    return pr(n, r, f, o), r.child;
  }
  function ep(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function ph(n, r, o, u, f) {
    var m = Fn(o) ? ta : bn.current;
    return m = na(r, m), En(r, f), o = Bo(n, r, o, u, m, f), u = fi(), n !== null && !Hn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, Ha(n, r, f)) : (yn && u && Hc(r), r.flags |= 1, pr(n, r, o, f), r.child);
  }
  function vh(n, r, o, u, f) {
    if (Fn(o)) {
      var m = !0;
      rr(r);
    } else m = !1;
    if (En(r, f), r.stateNode === null) Va(n, r), vf(r, o, u), As(r, o, u, f), u = !0;
    else if (n === null) {
      var C = r.stateNode, N = r.memoizedProps;
      C.props = N;
      var j = C.context, Q = o.contextType;
      typeof Q == "object" && Q !== null ? Q = Ia(Q) : (Q = Fn(o) ? ta : bn.current, Q = na(r, Q));
      var fe = o.getDerivedStateFromProps, me = typeof fe == "function" || typeof C.getSnapshotBeforeUpdate == "function";
      me || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (N !== u || j !== Q) && ch(r, C, u, Q), xa = !1;
      var ce = r.memoizedState;
      C.state = ce, xs(r, u, C, f), j = r.memoizedState, N !== u || ce !== j || Xn.current || xa ? (typeof fe == "function" && (Qd(r, o, fe, u), j = r.memoizedState), (N = xa || sh(r, o, N, u, ce, j, Q)) ? (me || typeof C.UNSAFE_componentWillMount != "function" && typeof C.componentWillMount != "function" || (typeof C.componentWillMount == "function" && C.componentWillMount(), typeof C.UNSAFE_componentWillMount == "function" && C.UNSAFE_componentWillMount()), typeof C.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = j), C.props = u, C.state = j, C.context = Q, u = N) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      C = r.stateNode, ih(n, r), N = r.memoizedProps, Q = r.type === r.elementType ? N : di(r.type, N), C.props = Q, me = r.pendingProps, ce = C.context, j = o.contextType, typeof j == "object" && j !== null ? j = Ia(j) : (j = Fn(o) ? ta : bn.current, j = na(r, j));
      var Pe = o.getDerivedStateFromProps;
      (fe = typeof Pe == "function" || typeof C.getSnapshotBeforeUpdate == "function") || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (N !== me || ce !== j) && ch(r, C, u, j), xa = !1, ce = r.memoizedState, C.state = ce, xs(r, u, C, f);
      var Ge = r.memoizedState;
      N !== me || ce !== Ge || Xn.current || xa ? (typeof Pe == "function" && (Qd(r, o, Pe, u), Ge = r.memoizedState), (Q = xa || sh(r, o, Q, u, ce, Ge, j) || !1) ? (fe || typeof C.UNSAFE_componentWillUpdate != "function" && typeof C.componentWillUpdate != "function" || (typeof C.componentWillUpdate == "function" && C.componentWillUpdate(u, Ge, j), typeof C.UNSAFE_componentWillUpdate == "function" && C.UNSAFE_componentWillUpdate(u, Ge, j)), typeof C.componentDidUpdate == "function" && (r.flags |= 4), typeof C.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof C.componentDidUpdate != "function" || N === n.memoizedProps && ce === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || N === n.memoizedProps && ce === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Ge), C.props = u, C.state = Ge, C.context = j, u = Q) : (typeof C.componentDidUpdate != "function" || N === n.memoizedProps && ce === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || N === n.memoizedProps && ce === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return Ps(n, r, o, u, m, f);
  }
  function Ps(n, r, o, u, f, m) {
    ep(n, r);
    var C = (r.flags & 128) !== 0;
    if (!u && !C) return f && Ic(r, o, !1), Ha(n, r, m);
    u = r.stateNode, Us.current = r;
    var N = C && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && C ? (r.child = Nn(r, n.child, null, m), r.child = Nn(r, null, N, m)) : pr(n, r, N, m), r.memoizedState = u.state, f && Ic(r, o, !0), r.child;
  }
  function Lu(n) {
    var r = n.stateNode;
    r.pendingContext ? th(n, r.pendingContext, r.pendingContext !== r.context) : r.context && th(n, r.context, !1), Wd(n, r.containerInfo);
  }
  function hh(n, r, o, u, f) {
    return Ho(), io(f), r.flags |= 256, pr(n, r, o, u), r.child;
  }
  var mf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function tp(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function yf(n, r, o) {
    var u = r.pendingProps, f = xn.current, m = !1, C = (r.flags & 128) !== 0, N;
    if ((N = C) || (N = n !== null && n.memoizedState === null ? !1 : (f & 2) !== 0), N ? (m = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (f |= 1), tt(xn, f & 1), n === null)
      return zd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (C = u.children, n = u.fallback, m ? (u = r.mode, m = r.child, C = { mode: "hidden", children: C }, (u & 1) === 0 && m !== null ? (m.childLanes = 0, m.pendingProps = C) : m = Xo(C, u, 0, null), n = fo(n, u, o, null), m.return = r, n.return = r, m.sibling = n, r.child = m, r.child.memoizedState = tp(o), r.memoizedState = mf, n) : np(r, C));
    if (f = n.memoizedState, f !== null && (N = f.dehydrated, N !== null)) return mh(n, r, C, u, N, f, o);
    if (m) {
      m = u.fallback, C = r.mode, f = n.child, N = f.sibling;
      var j = { mode: "hidden", children: u.children };
      return (C & 1) === 0 && r.child !== f ? (u = r.child, u.childLanes = 0, u.pendingProps = j, r.deletions = null) : (u = Ko(f, j), u.subtreeFlags = f.subtreeFlags & 14680064), N !== null ? m = Ko(N, m) : (m = fo(m, C, o, null), m.flags |= 2), m.return = r, u.return = r, u.sibling = m, r.child = u, u = m, m = r.child, C = n.child.memoizedState, C = C === null ? tp(o) : { baseLanes: C.baseLanes | o, cachePool: null, transitions: C.transitions }, m.memoizedState = C, m.childLanes = n.childLanes & ~o, r.memoizedState = mf, u;
    }
    return m = n.child, n = m.sibling, u = Ko(m, { mode: "visible", children: u.children }), (r.mode & 1) === 0 && (u.lanes = o), u.return = r, u.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function np(n, r) {
    return r = Xo({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Fs(n, r, o, u) {
    return u !== null && io(u), Nn(r, n.child, null, o), n = np(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function mh(n, r, o, u, f, m, C) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, u = Kd(Error(p(422))), Fs(n, r, C, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (m = u.fallback, f = r.mode, u = Xo({ mode: "visible", children: u.children }, f, 0, null), m = fo(m, f, C, null), m.flags |= 2, u.return = r, m.return = r, u.sibling = m, r.child = u, (r.mode & 1) !== 0 && Nn(r, n.child, null, C), r.child.memoizedState = tp(C), r.memoizedState = mf, m);
    if ((r.mode & 1) === 0) return Fs(n, r, C, null);
    if (f.data === "$!") {
      if (u = f.nextSibling && f.nextSibling.dataset, u) var N = u.dgst;
      return u = N, m = Error(p(419)), u = Kd(m, u, void 0), Fs(n, r, C, u);
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
        f = (f & (u.suspendedLanes | C)) !== 0 ? 0 : f, f !== 0 && f !== m.retryLane && (m.retryLane = f, Ea(n, f), Ir(u, n, f, -1));
      }
      return dp(), u = Kd(Error(p(421))), Fs(n, r, C, u);
    }
    return f.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Jy.bind(null, n), f._reactRetry = r, null) : (n = m.treeContext, aa = Ti(f.nextSibling), ra = r, yn = !0, Fa = null, n !== null && (In[Pa++] = Li, In[Pa++] = Mi, In[Pa++] = Sa, Li = n.id, Mi = n.overflow, Sa = r), r = np(r, u.children), r.flags |= 4096, r);
  }
  function rp(n, r, o) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), Vd(n.return, r, o);
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
        if (n.tag === 13) n.memoizedState !== null && rp(n, o, r);
        else if (n.tag === 19) rp(n, o, r);
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
        for (o = r.child, f = null; o !== null; ) n = o.alternate, n !== null && Gc(n) === null && (f = o), o = o.sibling;
        o = f, o === null ? (f = r.child, r.child = null) : (f = o.sibling, o.sibling = null), zr(r, !1, f, o, m);
        break;
      case "backwards":
        for (o = null, f = r.child, r.child = null; f !== null; ) {
          if (n = f.alternate, n !== null && Gc(n) === null) {
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
        lh(r);
        break;
      case 1:
        Fn(r.type) && rr(r);
        break;
      case 4:
        Wd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, f = r.memoizedProps.value;
        tt(Ca, u._currentValue), u._currentValue = f;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (tt(xn, xn.current & 1), r.flags |= 128, null) : (o & r.child.childLanes) !== 0 ? yf(n, r, o) : (tt(xn, xn.current & 1), n = Ha(n, r, o), n !== null ? n.sibling : null);
        tt(xn, xn.current & 1);
        break;
      case 19:
        if (u = (o & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (u) return Ai(n, r, o);
          r.flags |= 128;
        }
        if (f = r.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), tt(xn, xn.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, zs(n, r, o);
    }
    return Ha(n, r, o);
  }
  var $a, $n, yh, gh;
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
  }, yh = function(n, r, o, u) {
    var f = n.memoizedProps;
    if (f !== u) {
      n = r.stateNode, Nl(ji.current);
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
        var N = f[Q];
        for (C in N) N.hasOwnProperty(C) && (o || (o = {}), o[C] = "");
      } else Q !== "dangerouslySetInnerHTML" && Q !== "children" && Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && Q !== "autoFocus" && (x.hasOwnProperty(Q) ? m || (m = []) : (m = m || []).push(Q, null));
      for (Q in u) {
        var j = u[Q];
        if (N = f?.[Q], u.hasOwnProperty(Q) && j !== N && (j != null || N != null)) if (Q === "style") if (N) {
          for (C in N) !N.hasOwnProperty(C) || j && j.hasOwnProperty(C) || (o || (o = {}), o[C] = "");
          for (C in j) j.hasOwnProperty(C) && N[C] !== j[C] && (o || (o = {}), o[C] = j[C]);
        } else o || (m || (m = []), m.push(
          Q,
          o
        )), o = j;
        else Q === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, N = N ? N.__html : void 0, j != null && N !== j && (m = m || []).push(Q, j)) : Q === "children" ? typeof j != "string" && typeof j != "number" || (m = m || []).push(Q, "" + j) : Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && (x.hasOwnProperty(Q) ? (j != null && Q === "onScroll" && Qt("scroll", n), m || N === j || (m = [])) : (m = m || []).push(Q, j));
      }
      o && (m = m || []).push("style", o);
      var Q = m;
      (r.updateQueue = Q) && (r.flags |= 4);
    }
  }, gh = function(n, r, o, u) {
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
  function _h(n, r, o) {
    var u = r.pendingProps;
    switch ($c(r), r.tag) {
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
        return u = r.stateNode, Ol(), dn(Xn), dn(bn), at(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Bc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, Fa !== null && (Hl(Fa), Fa = null))), $n(n, r), ir(r), null;
      case 5:
        Yc(r);
        var f = Nl(Rs.current);
        if (o = r.type, n !== null && r.stateNode != null) yh(n, r, o, u, f), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(p(166));
            return ir(r), null;
          }
          if (n = Nl(ji.current), Bc(r)) {
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
                wr(u, m), Qt("invalid", u);
            }
            pn(o, m), f = null;
            for (var C in m) if (m.hasOwnProperty(C)) {
              var N = m[C];
              C === "children" ? typeof N == "string" ? u.textContent !== N && (m.suppressHydrationWarning !== !0 && Uc(u.textContent, N, n), f = ["children", N]) : typeof N == "number" && u.textContent !== "" + N && (m.suppressHydrationWarning !== !0 && Uc(
                u.textContent,
                N,
                n
              ), f = ["children", "" + N]) : x.hasOwnProperty(C) && N != null && C === "onScroll" && Qt("scroll", u);
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
            C = f.nodeType === 9 ? f : f.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = br(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = C.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = C.createElement(o, { is: u.is }) : (n = C.createElement(o), o === "select" && (C = n, u.multiple ? C.multiple = !0 : u.size && (C.size = u.size))) : n = C.createElementNS(n, o), n[Di] = r, n[_s] = u, $a(n, r, !1, !1), r.stateNode = n;
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
                  wr(n, u), f = Qn(n, u), Qt("invalid", n);
                  break;
                default:
                  f = u;
              }
              pn(o, f), N = f;
              for (m in N) if (N.hasOwnProperty(m)) {
                var j = N[m];
                m === "style" ? un(n, j) : m === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, j != null && _i(n, j)) : m === "children" ? typeof j == "string" ? (o !== "textarea" || j !== "") && be(n, j) : typeof j == "number" && be(n, "" + j) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (x.hasOwnProperty(m) ? j != null && m === "onScroll" && Qt("scroll", n) : j != null && _e(n, m, j, C));
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
        if (n && r.stateNode != null) gh(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(p(166));
          if (o = Nl(Rs.current), Nl(ji.current), Bc(r)) {
            if (u = r.stateNode, o = r.memoizedProps, u[Di] = r, (m = u.nodeValue !== o) && (n = ra, n !== null)) switch (n.tag) {
              case 3:
                Uc(u.nodeValue, o, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Uc(u.nodeValue, o, (n.mode & 1) !== 0);
            }
            m && (r.flags |= 4);
          } else u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), u[Di] = r, r.stateNode = u;
        }
        return ir(r), null;
      case 13:
        if (dn(xn), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (yn && aa !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) Es(), Ho(), r.flags |= 98560, m = !1;
          else if (m = Bc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!m) throw Error(p(318));
              if (m = r.memoizedState, m = m !== null ? m.dehydrated : null, !m) throw Error(p(317));
              m[Di] = r;
            } else Ho(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            ir(r), m = !1;
          } else Fa !== null && (Hl(Fa), Fa = null), m = !0;
          if (!m) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = o, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (xn.current & 1) !== 0 ? Mn === 0 && (Mn = 3) : dp())), r.updateQueue !== null && (r.flags |= 4), ir(r), null);
      case 4:
        return Ol(), $n(n, r), n === null && Eu(r.stateNode.containerInfo), ir(r), null;
      case 10:
        return Id(r.type._context), ir(r), null;
      case 17:
        return Fn(r.type) && ku(), ir(r), null;
      case 19:
        if (dn(xn), m = r.memoizedState, m === null) return ir(r), null;
        if (u = (r.flags & 128) !== 0, C = m.rendering, C === null) if (u) Vs(m, !1);
        else {
          if (Mn !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (C = Gc(n), C !== null) {
              for (r.flags |= 128, Vs(m, !1), u = C.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = o, o = r.child; o !== null; ) m = o, n = u, m.flags &= 14680066, C = m.alternate, C === null ? (m.childLanes = 0, m.lanes = n, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = C.childLanes, m.lanes = C.lanes, m.child = C.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = C.memoizedProps, m.memoizedState = C.memoizedState, m.updateQueue = C.updateQueue, m.type = C.type, n = C.dependencies, m.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
              return tt(xn, xn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          m.tail !== null && xt() > Uu && (r.flags |= 128, u = !0, Vs(m, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = Gc(C), n !== null) {
            if (r.flags |= 128, u = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), Vs(m, !0), m.tail === null && m.tailMode === "hidden" && !C.alternate && !yn) return ir(r), null;
          } else 2 * xt() - m.renderingStartTime > Uu && o !== 1073741824 && (r.flags |= 128, u = !0, Vs(m, !1), r.lanes = 4194304);
          m.isBackwards ? (C.sibling = r.child, r.child = C) : (o = m.last, o !== null ? o.sibling = C : r.child = C, m.last = C);
        }
        return m.tail !== null ? (r = m.tail, m.rendering = r, m.tail = r.sibling, m.renderingStartTime = xt(), r.sibling = null, o = xn.current, tt(xn, u ? o & 1 | 2 : o & 1), r) : (ir(r), null);
      case 22:
      case 23:
        return fp(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && (r.mode & 1) !== 0 ? (wa & 1073741824) !== 0 && (ir(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : ir(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, r.tag));
  }
  function gf(n, r) {
    switch ($c(r), r.tag) {
      case 1:
        return Fn(r.type) && ku(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Ol(), dn(Xn), dn(bn), at(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Yc(r), null;
      case 13:
        if (dn(xn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(p(340));
          Ho();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return dn(xn), null;
      case 4:
        return Ol(), null;
      case 10:
        return Id(r.type._context), null;
      case 22:
      case 23:
        return fp(), null;
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
  function _f(n, r, o) {
    try {
      o();
    } catch (u) {
      gn(n, r, u);
    }
  }
  var Sh = !1;
  function Ch(n, r) {
    if (gs = ja, n = vs(), Tc(n)) {
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
          var C = 0, N = -1, j = -1, Q = 0, fe = 0, me = n, ce = null;
          t: for (; ; ) {
            for (var Pe; me !== o || f !== 0 && me.nodeType !== 3 || (N = C + f), me !== m || u !== 0 && me.nodeType !== 3 || (j = C + u), me.nodeType === 3 && (C += me.nodeValue.length), (Pe = me.firstChild) !== null; )
              ce = me, me = Pe;
            for (; ; ) {
              if (me === n) break t;
              if (ce === o && ++Q === f && (N = C), ce === m && ++fe === u && (j = C), (Pe = me.nextSibling) !== null) break;
              me = ce, ce = me.parentNode;
            }
            me = Pe;
          }
          o = N === -1 || j === -1 ? null : { start: N, end: j };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (wl = { focusedElem: n, selectionRange: o }, ja = !1, Be = r; Be !== null; ) if (r = Be, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Be = n;
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
              var Xe = Ge.memoizedProps, jn = Ge.memoizedState, H = r.stateNode, z = H.getSnapshotBeforeUpdate(r.elementType === r.type ? Xe : di(r.type, Xe), jn);
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
      } catch (de) {
        gn(r, r.return, de);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Be = n;
        break;
      }
      Be = r.return;
    }
    return Ge = Sh, Sh = !1, Ge;
  }
  function $s(n, r, o) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var f = u = u.next;
      do {
        if ((f.tag & n) === n) {
          var m = f.destroy;
          f.destroy = void 0, m !== void 0 && _f(r, o, m);
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
  function ap(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      n.tag, n = o, typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Sf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Sf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Di], delete r[_s], delete r[Ss], delete r[Ru], delete r[$y])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
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
    for (o = o.child; o !== null; ) Eh(n, r, o), o = o.sibling;
  }
  function Eh(n, r, o) {
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
        Ln !== null && (Pr ? (n = Ln, o = o.stateNode, n.nodeType === 8 ? bu(n.parentNode, o) : n.nodeType === 1 && bu(n, o), li(n)) : bu(Ln, o.stateNode));
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
            m = m.tag, C !== void 0 && ((m & 2) !== 0 || (m & 4) !== 0) && _f(o, r, C), f = f.next;
          } while (f !== u);
        }
        Fr(n, r, o);
        break;
      case 1:
        if (!Dr && (Mu(o, r), u = o.stateNode, typeof u.componentWillUnmount == "function")) try {
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
      o === null && (o = n.stateNode = new qy()), r.forEach(function(u) {
        var f = Lh.bind(null, n, u);
        o.has(u) || (o.add(u), u.then(f, f));
      });
    }
  }
  function pi(n, r) {
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
        Eh(m, C, f), Ln = null, Pr = !1;
        var j = f.alternate;
        j !== null && (j.return = null), f.return = null;
      } catch (Q) {
        gn(f, r, Q);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) ip(r, n), r = r.sibling;
  }
  function ip(n, r) {
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
            be(f, "");
          } catch (Xe) {
            gn(n, n.return, Xe);
          }
        }
        if (u & 4 && (f = n.stateNode, f != null)) {
          var m = n.memoizedProps, C = o !== null ? o.memoizedProps : m, N = n.type, j = n.updateQueue;
          if (n.updateQueue = null, j !== null) try {
            N === "input" && m.type === "radio" && m.name != null && Gn(f, m), nr(N, C);
            var Q = nr(N, m);
            for (C = 0; C < j.length; C += 2) {
              var fe = j[C], me = j[C + 1];
              fe === "style" ? un(f, me) : fe === "dangerouslySetInnerHTML" ? _i(f, me) : fe === "children" ? be(f, me) : _e(f, fe, me, Q);
            }
            switch (N) {
              case "input":
                Jr(f, m);
                break;
              case "textarea":
                Za(f, m);
                break;
              case "select":
                var ce = f._wrapperState.wasMultiple;
                f._wrapperState.wasMultiple = !!m.multiple;
                var Pe = m.value;
                Pe != null ? Tn(f, !!m.multiple, Pe, !1) : ce !== !!m.multiple && (m.defaultValue != null ? Tn(
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
        pi(r, n), ua(n), f = n.child, f.flags & 8192 && (m = f.memoizedState !== null, f.stateNode.isHidden = m, !m || f.alternate !== null && f.alternate.memoizedState !== null || (up = xt())), u & 4 && xh(n);
        break;
      case 22:
        if (fe = o !== null && o.memoizedState !== null, n.mode & 1 ? (Dr = (Q = Dr) || fe, pi(r, n), Dr = Q) : pi(r, n), ua(n), u & 8192) {
          if (Q = n.memoizedState !== null, (n.stateNode.isHidden = Q) && !fe && (n.mode & 1) !== 0) for (Be = n, fe = n.child; fe !== null; ) {
            for (me = Be = fe; Be !== null; ) {
              switch (ce = Be, Pe = ce.child, ce.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  $s(4, ce, ce.return);
                  break;
                case 1:
                  Mu(ce, ce.return);
                  var Ge = ce.stateNode;
                  if (typeof Ge.componentWillUnmount == "function") {
                    u = ce, o = ce.return;
                    try {
                      r = u, Ge.props = r.memoizedProps, Ge.state = r.memoizedState, Ge.componentWillUnmount();
                    } catch (Xe) {
                      gn(u, o, Xe);
                    }
                  }
                  break;
                case 5:
                  Mu(ce, ce.return);
                  break;
                case 22:
                  if (ce.memoizedState !== null) {
                    Ws(me);
                    continue;
                  }
              }
              Pe !== null ? (Pe.return = ce, Be = Pe) : Ws(me);
            }
            fe = fe.sibling;
          }
          e: for (fe = null, me = n; ; ) {
            if (me.tag === 5) {
              if (fe === null) {
                fe = me;
                try {
                  f = me.stateNode, Q ? (m = f.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (N = me.stateNode, j = me.memoizedProps.style, C = j != null && j.hasOwnProperty("display") ? j.display : null, N.style.display = Gt("display", C));
                } catch (Xe) {
                  gn(n, n.return, Xe);
                }
              }
            } else if (me.tag === 6) {
              if (fe === null) try {
                me.stateNode.nodeValue = Q ? "" : me.memoizedProps;
              } catch (Xe) {
                gn(n, n.return, Xe);
              }
            } else if ((me.tag !== 22 && me.tag !== 23 || me.memoizedState === null || me === n) && me.child !== null) {
              me.child.return = me, me = me.child;
              continue;
            }
            if (me === n) break e;
            for (; me.sibling === null; ) {
              if (me.return === null || me.return === n) break e;
              fe === me && (fe = null), me = me.return;
            }
            fe === me && (fe = null), me.sibling.return = me.return, me = me.sibling;
          }
        }
        break;
      case 19:
        pi(r, n), ua(n), u & 4 && xh(n);
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
            u.flags & 32 && (be(f, ""), u.flags &= -33);
            var m = uo(n);
            zi(n, m, f);
            break;
          case 3:
          case 4:
            var C = u.stateNode.containerInfo, N = uo(n);
            Ui(n, N, C);
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
    Be = n, op(n);
  }
  function op(n, r, o) {
    for (var u = (n.mode & 1) !== 0; Be !== null; ) {
      var f = Be, m = f.child;
      if (f.tag === 22 && u) {
        var C = f.memoizedState !== null || Hs;
        if (!C) {
          var N = f.alternate, j = N !== null && N.memoizedState !== null || Dr;
          N = Hs;
          var Q = Dr;
          if (Hs = C, (Dr = j) && !Q) for (Be = f; Be !== null; ) C = Be, j = C.child, C.tag === 22 && C.memoizedState !== null ? lp(f) : j !== null ? (j.return = C, Be = j) : lp(f);
          for (; m !== null; ) Be = m, op(m), m = m.sibling;
          Be = f, Hs = N, Dr = Q;
        }
        wh(n);
      } else (f.subtreeFlags & 8772) !== 0 && m !== null ? (m.return = f, Be = m) : wh(n);
    }
  }
  function wh(n) {
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
              m !== null && qd(r, m, u);
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
                qd(r, C, o);
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
                  var fe = Q.memoizedState;
                  if (fe !== null) {
                    var me = fe.dehydrated;
                    me !== null && li(me);
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
          Dr || r.flags & 512 && ap(r);
        } catch (ce) {
          gn(r, r.return, ce);
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
  function lp(n) {
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
              ap(r);
            } catch (j) {
              gn(r, m, j);
            }
            break;
          case 5:
            var C = r.return;
            try {
              ap(r);
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
  var Yy = Math.ceil, Yo = Re.ReactCurrentDispatcher, Il = Re.ReactCurrentOwner, vr = Re.ReactCurrentBatchConfig, At = 0, Zn = null, Bn = null, hr = 0, wa = 0, ju = za(0), Mn = 0, Ys = null, Pi = 0, Au = 0, Cf = 0, Gs = null, sa = null, up = 0, Uu = 1 / 0, ba = null, zu = !1, Vl = null, Go = null, Ef = !1, so = null, Qs = 0, Qo = 0, Pu = null, Ks = -1, Nr = 0;
  function qn() {
    return (At & 6) !== 0 ? xt() : Ks !== -1 ? Ks : Ks = xt();
  }
  function Fi(n) {
    return (n.mode & 1) === 0 ? 1 : (At & 2) !== 0 && hr !== 0 ? hr & -hr : By.transition !== null ? (Nr === 0 && (Nr = cu()), Nr) : (n = Ht, n !== 0 || (n = window.event, n = n === void 0 ? 16 : yu(n.type)), n);
  }
  function Ir(n, r, o, u) {
    if (50 < Qo) throw Qo = 0, Pu = null, Error(p(185));
    Ki(n, o, u), ((At & 2) === 0 || n !== Zn) && (n === Zn && ((At & 2) === 0 && (Au |= o), Mn === 4 && vi(n, hr)), ca(n, u), o === 1 && At === 0 && (r.mode & 1) === 0 && (Uu = xt() + 500, Tu && Oi()));
  }
  function ca(n, r) {
    var o = n.callbackNode;
    hl(n, r);
    var u = oi(n, n === Zn ? hr : 0);
    if (u === 0) o !== null && cr(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (o != null && cr(o), r === 1) n.tag === 0 ? Po(sp.bind(null, n)) : Vc(sp.bind(null, n)), wu(function() {
        (At & 6) === 0 && Oi();
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
        o = jh(o, xf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function xf(n, r) {
    if (Ks = -1, Nr = 0, (At & 6) !== 0) throw Error(p(327));
    var o = n.callbackNode;
    if (Fu() && n.callbackNode !== o) return null;
    var u = oi(n, n === Zn ? hr : 0);
    if (u === 0) return null;
    if ((u & 30) !== 0 || (u & n.expiredLanes) !== 0 || r) r = wf(n, u);
    else {
      r = u;
      var f = At;
      At |= 2;
      var m = Rh();
      (Zn !== n || hr !== r) && (ba = null, Uu = xt() + 500, co(n, r));
      do
        try {
          kh();
          break;
        } catch (N) {
          bh(n, N);
        }
      while (!0);
      Fd(), Yo.current = m, At = f, Bn !== null ? r = 0 : (Zn = null, hr = 0, r = Mn);
    }
    if (r !== 0) {
      if (r === 2 && (f = Do(n), f !== 0 && (u = f, r = Xs(n, f))), r === 1) throw o = Ys, co(n, 0), vi(n, u), ca(n, xt()), o;
      if (r === 6) vi(n, u);
      else {
        if (f = n.current.alternate, (u & 30) === 0 && !Gy(f) && (r = wf(n, u), r === 2 && (m = Do(n), m !== 0 && (u = m, r = Xs(n, m))), r === 1)) throw o = Ys, co(n, 0), vi(n, u), ca(n, xt()), o;
        switch (n.finishedWork = f, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            Bl(n, sa, ba);
            break;
          case 3:
            if (vi(n, u), (u & 130023424) === u && (r = up + 500 - xt(), 10 < r)) {
              if (oi(n, 0) !== 0) break;
              if (f = n.suspendedLanes, (f & u) !== u) {
                qn(), n.pingedLanes |= n.suspendedLanes & f;
                break;
              }
              n.timeoutHandle = Pc(Bl.bind(null, n, sa, ba), r);
              break;
            }
            Bl(n, sa, ba);
            break;
          case 4:
            if (vi(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, f = -1; 0 < u; ) {
              var C = 31 - jr(u);
              m = 1 << C, C = r[C], C > f && (f = C), u &= ~m;
            }
            if (u = f, u = xt() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Yy(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = Pc(Bl.bind(null, n, sa, ba), u);
              break;
            }
            Bl(n, sa, ba);
            break;
          case 5:
            Bl(n, sa, ba);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    return ca(n, xt()), n.callbackNode === o ? xf.bind(null, n) : null;
  }
  function Xs(n, r) {
    var o = Gs;
    return n.current.memoizedState.isDehydrated && (co(n, r).flags |= 256), n = wf(n, r), n !== 2 && (r = sa, sa = o, r !== null && Hl(r)), n;
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
    for (r &= ~Cf, r &= ~Au, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - jr(r), u = 1 << o;
      n[o] = -1, r &= ~u;
    }
  }
  function sp(n) {
    if ((At & 6) !== 0) throw Error(p(327));
    Fu();
    var r = oi(n, 0);
    if ((r & 1) === 0) return ca(n, xt()), null;
    var o = wf(n, r);
    if (n.tag !== 0 && o === 2) {
      var u = Do(n);
      u !== 0 && (r = u, o = Xs(n, u));
    }
    if (o === 1) throw o = Ys, co(n, 0), vi(n, r), ca(n, xt()), o;
    if (o === 6) throw Error(p(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Bl(n, sa, ba), ca(n, xt()), null;
  }
  function cp(n, r) {
    var o = At;
    At |= 1;
    try {
      return n(r);
    } finally {
      At = o, At === 0 && (Uu = xt() + 500, Tu && Oi());
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
      Ht = u, vr.transition = o, At = r, (At & 6) === 0 && Oi();
    }
  }
  function fp() {
    wa = ju.current, dn(ju);
  }
  function co(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, jd(o)), Bn !== null) for (o = Bn.return; o !== null; ) {
      var u = o;
      switch ($c(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && ku();
          break;
        case 3:
          Ol(), dn(Xn), dn(bn), at();
          break;
        case 5:
          Yc(u);
          break;
        case 4:
          Ol();
          break;
        case 13:
          dn(xn);
          break;
        case 19:
          dn(xn);
          break;
        case 10:
          Id(u.type._context);
          break;
        case 22:
        case 23:
          fp();
      }
      o = o.return;
    }
    if (Zn = n, Bn = n = Ko(n.current, null), hr = wa = r, Mn = 0, Ys = null, Cf = Au = Pi = 0, sa = Gs = null, Dl !== null) {
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
        if (Fd(), Dt.current = zl, Qc) {
          for (var u = Bt.memoizedState; u !== null; ) {
            var f = u.queue;
            f !== null && (f.pending = null), u = u.next;
          }
          Qc = !1;
        }
        if (rn = 0, ar = Vn = Bt = null, Ts = !1, Ll = 0, Il.current = null, o === null || o.return === null) {
          Mn = 1, Ys = r, Bn = null;
          break;
        }
        e: {
          var m = n, C = o.return, N = o, j = r;
          if (r = hr, N.flags |= 32768, j !== null && typeof j == "object" && typeof j.then == "function") {
            var Q = j, fe = N, me = fe.tag;
            if ((fe.mode & 1) === 0 && (me === 0 || me === 11 || me === 15)) {
              var ce = fe.alternate;
              ce ? (fe.updateQueue = ce.updateQueue, fe.memoizedState = ce.memoizedState, fe.lanes = ce.lanes) : (fe.updateQueue = null, fe.memoizedState = null);
            }
            var Pe = dh(C);
            if (Pe !== null) {
              Pe.flags &= -257, Wo(Pe, C, N, m, r), Pe.mode & 1 && Zd(m, Q, r), r = Pe, j = Q;
              var Ge = r.updateQueue;
              if (Ge === null) {
                var Xe = /* @__PURE__ */ new Set();
                Xe.add(j), r.updateQueue = Xe;
              } else Ge.add(j);
              break e;
            } else {
              if ((r & 1) === 0) {
                Zd(m, Q, r), dp();
                break e;
              }
              j = Error(p(426));
            }
          } else if (yn && N.mode & 1) {
            var jn = dh(C);
            if (jn !== null) {
              (jn.flags & 65536) === 0 && (jn.flags |= 256), Wo(jn, C, N, m, r), io(Pl(j, N));
              break e;
            }
          }
          m = j = Pl(j, N), Mn !== 4 && (Mn = 2), Gs === null ? Gs = [m] : Gs.push(m), m = C;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, r &= -r, m.lanes |= r;
                var H = fh(m, j, r);
                oh(m, H);
                break e;
              case 1:
                N = j;
                var z = m.type, W = m.stateNode;
                if ((m.flags & 128) === 0 && (typeof z.getDerivedStateFromError == "function" || W !== null && typeof W.componentDidCatch == "function" && (Go === null || !Go.has(W)))) {
                  m.flags |= 65536, r &= -r, m.lanes |= r;
                  var de = Jd(m, N, r);
                  oh(m, de);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        Dh(o);
      } catch (Qe) {
        r = Qe, Bn === o && o !== null && (Bn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Rh() {
    var n = Yo.current;
    return Yo.current = zl, n === null ? zl : n;
  }
  function dp() {
    (Mn === 0 || Mn === 3 || Mn === 2) && (Mn = 4), Zn === null || (Pi & 268435455) === 0 && (Au & 268435455) === 0 || vi(Zn, hr);
  }
  function wf(n, r) {
    var o = At;
    At |= 2;
    var u = Rh();
    (Zn !== n || hr !== r) && (ba = null, co(n, r));
    do
      try {
        Qy();
        break;
      } catch (f) {
        bh(n, f);
      }
    while (!0);
    if (Fd(), At = o, Yo.current = u, Bn !== null) throw Error(p(261));
    return Zn = null, hr = 0, Mn;
  }
  function Qy() {
    for (; Bn !== null; ) Th(Bn);
  }
  function kh() {
    for (; Bn !== null && !ni(); ) Th(Bn);
  }
  function Th(n) {
    var r = Mh(n.alternate, n, wa);
    n.memoizedProps = n.pendingProps, r === null ? Dh(n) : Bn = r, Il.current = null;
  }
  function Dh(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (o = _h(o, r, wa), o !== null) {
          Bn = o;
          return;
        }
      } else {
        if (o = gf(o, r), o !== null) {
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
    if (pd(n, m), n === Zn && (Bn = Zn = null, hr = 0), (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || Ef || (Ef = !0, jh(vl, function() {
      return Fu(), null;
    })), m = (o.flags & 15990) !== 0, (o.subtreeFlags & 15990) !== 0 || m) {
      m = vr.transition, vr.transition = null;
      var C = Ht;
      Ht = 1;
      var N = At;
      At |= 4, Il.current = null, Ch(n, o), ip(o, n), Su(wl), ja = !!gs, wl = gs = null, n.current = o, Wy(o), ri(), At = N, Ht = C, vr.transition = m;
    } else n.current = o;
    if (Ef && (Ef = !1, so = n, Qs = f), m = n.pendingLanes, m === 0 && (Go = null), as(o.stateNode), ca(n, xt()), r !== null) for (u = n.onRecoverableError, o = 0; o < r.length; o++) f = r[o], u(f.value, { componentStack: f.stack, digest: f.digest });
    if (zu) throw zu = !1, n = Vl, Vl = null, n;
    return (Qs & 1) !== 0 && n.tag !== 0 && Fu(), m = n.pendingLanes, (m & 1) !== 0 ? n === Pu ? Qo++ : (Qo = 0, Pu = n) : Qo = 0, Oi(), null;
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
              var N = m.deletions;
              if (N !== null) {
                for (var j = 0; j < N.length; j++) {
                  var Q = N[j];
                  for (Be = Q; Be !== null; ) {
                    var fe = Be;
                    switch (fe.tag) {
                      case 0:
                      case 11:
                      case 15:
                        $s(8, fe, m);
                    }
                    var me = fe.child;
                    if (me !== null) me.return = fe, Be = me;
                    else for (; Be !== null; ) {
                      fe = Be;
                      var ce = fe.sibling, Pe = fe.return;
                      if (Sf(fe), fe === Q) {
                        Be = null;
                        break;
                      }
                      if (ce !== null) {
                        ce.return = Pe, Be = ce;
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
                    Bs(9, N);
                }
              } catch (Qe) {
                gn(N, N.return, Qe);
              }
              if (N === C) {
                Be = null;
                break e;
              }
              var de = N.sibling;
              if (de !== null) {
                de.return = N.return, Be = de;
                break e;
              }
              Be = N.return;
            }
          }
          if (At = f, Oi(), Zr && typeof Zr.onPostCommitFiberRoot == "function") try {
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
  function Nh(n, r, o) {
    r = Pl(o, r), r = fh(n, r, 1), n = $o(n, r, 1), r = qn(), n !== null && (Ki(n, 1, r), ca(n, r));
  }
  function gn(n, r, o) {
    if (n.tag === 3) Nh(n, n, o);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Nh(r, n, o);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Go === null || !Go.has(u))) {
          n = Pl(o, n), n = Jd(r, n, 1), r = $o(r, n, 1), n = qn(), r !== null && (Ki(r, 1, n), ca(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Xy(n, r, o) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = qn(), n.pingedLanes |= n.suspendedLanes & o, Zn === n && (hr & o) === o && (Mn === 4 || Mn === 3 && (hr & 130023424) === hr && 500 > xt() - up ? co(n, 0) : Cf |= o), ca(n, r);
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
  function Lh(n, r) {
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
  var Mh;
  Mh = function(n, r, o) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Xn.current) Hn = !0;
    else {
      if ((n.lanes & o) === 0 && (r.flags & 128) === 0) return Hn = !1, Is(n, r, o);
      Hn = (n.flags & 131072) !== 0;
    }
    else Hn = !1, yn && (r.flags & 1048576) !== 0 && nh(r, ao, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Va(n, r), n = r.pendingProps;
        var f = na(r, bn.current);
        En(r, o), f = Bo(null, r, u, n, f, o);
        var m = fi();
        return r.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Fn(u) ? (m = !0, rr(r)) : m = !1, r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, Bd(r), f.updater = pf, r.stateNode = f, f._reactInternals = r, As(r, u, n, o), r = Ps(null, r, u, !0, m, o)) : (r.tag = 0, yn && m && Hc(r), pr(null, r, f, o), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Va(n, r), n = r.pendingProps, f = u._init, u = f(u._payload), r.type = u, f = r.tag = eg(u), n = di(u, n), f) {
            case 0:
              r = ph(null, r, u, n, o);
              break e;
            case 1:
              r = vh(null, r, u, n, o);
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
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : di(u, f), ph(n, r, u, f, o);
      case 1:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : di(u, f), vh(n, r, u, f, o);
      case 3:
        e: {
          if (Lu(r), n === null) throw Error(p(387));
          u = r.pendingProps, m = r.memoizedState, f = m.element, ih(n, r), xs(r, u, null, o);
          var C = r.memoizedState;
          if (u = C.element, m.isDehydrated) if (m = { element: u, isDehydrated: !1, cache: C.cache, pendingSuspenseBoundaries: C.pendingSuspenseBoundaries, transitions: C.transitions }, r.updateQueue.baseState = m, r.memoizedState = m, r.flags & 256) {
            f = Pl(Error(p(423)), r), r = hh(n, r, u, o, f);
            break e;
          } else if (u !== f) {
            f = Pl(Error(p(424)), r), r = hh(n, r, u, o, f);
            break e;
          } else for (aa = Ti(r.stateNode.containerInfo.firstChild), ra = r, yn = !0, Fa = null, o = Le(r, null, u, o), r.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
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
        return lh(r), n === null && zd(r), u = r.type, f = r.pendingProps, m = n !== null ? n.memoizedProps : null, C = f.children, zc(u, f) ? C = null : m !== null && zc(u, m) && (r.flags |= 32), ep(n, r), pr(n, r, C, o), r.child;
      case 6:
        return n === null && zd(r), null;
      case 13:
        return yf(n, r, o);
      case 4:
        return Wd(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = Nn(r, null, u, o) : pr(n, r, u, o), r.child;
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
          if (u = r.type._context, f = r.pendingProps, m = r.memoizedProps, C = f.value, tt(Ca, u._currentValue), u._currentValue = C, m !== null) if (si(m.value, C)) {
            if (m.children === f.children && !Xn.current) {
              r = Ha(n, r, o);
              break e;
            }
          } else for (m = r.child, m !== null && (m.return = r); m !== null; ) {
            var N = m.dependencies;
            if (N !== null) {
              C = m.child;
              for (var j = N.firstContext; j !== null; ) {
                if (j.context === u) {
                  if (m.tag === 1) {
                    j = oo(-1, o & -o), j.tag = 2;
                    var Q = m.updateQueue;
                    if (Q !== null) {
                      Q = Q.shared;
                      var fe = Q.pending;
                      fe === null ? j.next = j : (j.next = fe.next, fe.next = j), Q.pending = j;
                    }
                  }
                  m.lanes |= o, j = m.alternate, j !== null && (j.lanes |= o), Vd(
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
              C.lanes |= o, N = C.alternate, N !== null && (N.lanes |= o), Vd(C, o, r), C = m.sibling;
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
        return wt(n, r, r.type, r.pendingProps, o);
      case 17:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : di(u, f), Va(n, r), r.tag = 1, Fn(u) ? (n = !0, rr(r)) : n = !1, En(r, o), vf(r, u, f), As(r, u, f, o), Ps(null, r, u, !0, n, o);
      case 19:
        return Ai(n, r, o);
      case 22:
        return zs(n, r, o);
    }
    throw Error(p(156, r.tag));
  };
  function jh(n, r) {
    return vn(n, r);
  }
  function Zy(n, r, o, u) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ba(n, r, o, u) {
    return new Zy(n, r, o, u);
  }
  function pp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function eg(n) {
    if (typeof n == "function") return pp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === V) return 11;
      if (n === He) return 14;
    }
    return 2;
  }
  function Ko(n, r) {
    var o = n.alternate;
    return o === null ? (o = Ba(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Js(n, r, o, u, f, m) {
    var C = 2;
    if (u = n, typeof n == "function") pp(n) && (C = 1);
    else if (typeof n == "string") C = 5;
    else e: switch (n) {
      case Ve:
        return fo(o.children, f, m, r);
      case We:
        C = 8, f |= 8;
        break;
      case it:
        return n = Ba(12, o, r, f | 2), n.elementType = it, n.lanes = m, n;
      case J:
        return n = Ba(13, o, r, f), n.elementType = J, n.lanes = m, n;
      case Ee:
        return n = Ba(19, o, r, f), n.elementType = Ee, n.lanes = m, n;
      case xe:
        return Xo(o, f, m, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case ut:
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
          case Ne:
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
  function vp(n, r, o) {
    return n = Ba(6, n, null, r), n.lanes = o, n;
  }
  function bf(n, r, o) {
    return r = Ba(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Ah(n, r, o, u, f) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = fu(0), this.expirationTimes = fu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = fu(0), this.identifierPrefix = u, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null;
  }
  function Rf(n, r, o, u, f, m, C, N, j) {
    return n = new Ah(n, r, o, N, j), r === 1 ? (r = 1, m === !0 && (r |= 8)) : r = 0, m = Ba(3, null, null, r), n.current = m, m.stateNode = n, m.memoizedState = { element: u, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Bd(m), n;
  }
  function tg(n, r, o) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ye, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: o };
  }
  function hp(n) {
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
  function Uh(n, r, o, u, f, m, C, N, j) {
    return n = Rf(o, u, !0, n, f, m, C, N, j), n.context = hp(null), o = n.current, u = qn(), f = Fi(o), m = oo(u, f), m.callback = r ?? null, $o(o, m, f), n.current.lanes = f, Ki(n, f, u), ca(n, u), n;
  }
  function kf(n, r, o, u) {
    var f = r.current, m = qn(), C = Fi(f);
    return o = hp(o), r.context === null ? r.context = o : r.pendingContext = o, r = oo(m, C), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = $o(f, r, C), n !== null && (Ir(n, f, C, m), Wc(n, f, C)), C;
  }
  function Tf(n) {
    return n = n.current, n.child ? (n.child.tag === 5, n.child.stateNode) : null;
  }
  function mp(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function Df(n, r) {
    mp(n, r), (n = n.alternate) && mp(n, r);
  }
  function zh() {
    return null;
  }
  var ql = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function yp(n) {
    this._internalRoot = n;
  }
  Nf.prototype.render = yp.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(p(409));
    kf(n, r, null, null);
  }, Nf.prototype.unmount = yp.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      $l(function() {
        kf(null, n, null, null);
      }), r[no] = null;
    }
  };
  function Nf(n) {
    this._internalRoot = n;
  }
  Nf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = gt();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Kn.length && r !== 0 && r < Kn[o].priority; o++) ;
      Kn.splice(o, 0, n), o === 0 && ls(n);
    }
  };
  function gp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Of(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Ph() {
  }
  function ng(n, r, o, u, f) {
    if (f) {
      if (typeof u == "function") {
        var m = u;
        u = function() {
          var Q = Tf(C);
          m.call(Q);
        };
      }
      var C = Uh(r, u, n, 0, null, !1, !1, "", Ph);
      return n._reactRootContainer = C, n[no] = C.current, Eu(n.nodeType === 8 ? n.parentNode : n), $l(), C;
    }
    for (; f = n.lastChild; ) n.removeChild(f);
    if (typeof u == "function") {
      var N = u;
      u = function() {
        var Q = Tf(j);
        N.call(Q);
      };
    }
    var j = Rf(n, 0, !1, null, null, !1, !1, "", Ph);
    return n._reactRootContainer = j, n[no] = j.current, Eu(n.nodeType === 8 ? n.parentNode : n), $l(function() {
      kf(r, j, o, u);
    }), j;
  }
  function Zs(n, r, o, u, f) {
    var m = o._reactRootContainer;
    if (m) {
      var C = m;
      if (typeof f == "function") {
        var N = f;
        f = function() {
          var j = Tf(C);
          N.call(j);
        };
      }
      kf(r, C, n, f);
    } else C = ng(o, r, n, f, u);
    return Tf(C);
  }
  Ft = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = ii(r.pendingLanes);
          o !== 0 && (Xi(r, o | 1), ca(r, xt()), (At & 6) === 0 && (Uu = xt() + 500, Oi()));
        }
        break;
      case 13:
        $l(function() {
          var u = Ea(n, 1);
          if (u !== null) {
            var f = qn();
            Ir(u, n, 1, f);
          }
        }), Df(n, 1);
    }
  }, is = function(n) {
    if (n.tag === 13) {
      var r = Ea(n, 134217728);
      if (r !== null) {
        var o = qn();
        Ir(r, n, 134217728, o);
      }
      Df(n, 134217728);
    }
  }, xi = function(n) {
    if (n.tag === 13) {
      var r = Fi(n), o = Ea(n, r);
      if (o !== null) {
        var u = qn();
        Ir(o, n, r, u);
      }
      Df(n, r);
    }
  }, gt = function() {
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
              Or(u), Jr(u, f);
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
  }, fl = cp, wo = $l;
  var rg = { usingClientEntryPoint: !1, Events: [rt, ci, Cn, Qi, cl, cp] }, ec = { findFiberByHostInstance: bl, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Fh = { bundleType: ec.bundleType, version: ec.version, rendererPackageName: ec.rendererPackageName, rendererConfig: ec.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Re.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Dn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: ec.findFiberByHostInstance || zh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Jo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jo.isDisabled && Jo.supportsFiber) try {
      ko = Jo.inject(Fh), Zr = Jo;
    } catch {
    }
  }
  return Ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rg, Ka.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!gp(r)) throw Error(p(200));
    return tg(n, r, null, o);
  }, Ka.createRoot = function(n, r) {
    if (!gp(n)) throw Error(p(299));
    var o = !1, u = "", f = ql;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (f = r.onRecoverableError)), r = Rf(n, 1, !1, null, null, o, !1, u, f), n[no] = r.current, Eu(n.nodeType === 8 ? n.parentNode : n), new yp(r);
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
    if (!gp(n)) throw Error(p(405));
    var u = o != null && o.hydratedSources || null, f = !1, m = "", C = ql;
    if (o != null && (o.unstable_strictMode === !0 && (f = !0), o.identifierPrefix !== void 0 && (m = o.identifierPrefix), o.onRecoverableError !== void 0 && (C = o.onRecoverableError)), r = Uh(r, null, n, 1, o ?? null, f, !1, m, C), n[no] = r.current, Eu(n), u) for (n = 0; n < u.length; n++) o = u[n], f = o._getVersion, f = f(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, f] : r.mutableSourceEagerHydrationData.push(
      o,
      f
    );
    return new Nf(r);
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
  }, Ka.unstable_batchedUpdates = cp, Ka.unstable_renderSubtreeIntoContainer = function(n, r, o, u) {
    if (!Of(o)) throw Error(p(200));
    if (n == null || n._reactInternals === void 0) throw Error(p(38));
    return Zs(n, r, o, !1, u);
  }, Ka.version = "18.3.1-next-f1338f8080-20240426", Ka;
}
var Xa = {};
var vE;
function hM() {
  return vE || (vE = 1, process.env.NODE_ENV !== "production" && (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = xv(), v = FE(), p = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, S = !1;
    function x(e) {
      S = e;
    }
    function E(e) {
      if (!S) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        R("warn", e, a);
      }
    }
    function h(e) {
      if (!S) {
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
    var k = 0, b = 1, O = 2, A = 3, I = 4, q = 5, oe = 6, ie = 7, we = 8, pe = 9, ve = 10, _e = 11, Re = 12, he = 13, Ye = 14, Ve = 15, We = 16, it = 17, ut = 18, X = 19, V = 21, J = 22, Ee = 23, He = 24, Ne = 25, xe = !0, re = !1, De = !1, ge = !1, F = !1, ee = !0, Je = !0, ze = !0, ht = !0, nt = /* @__PURE__ */ new Set(), Ae = {}, dt = {};
    function mt(e, t) {
      Xt(e, t), Xt(e + "Capture", t);
    }
    function Xt(e, t) {
      Ae[e] && h("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ae[e] = t;
      {
        var a = e.toLowerCase();
        dt[a] = e, e === "onDoubleClick" && (dt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        nt.add(t[i]);
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
    var Qn = 0, wr = 1, Za = 2, zn = 3, br = 4, ya = 5, ei = 6, _i = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", be = _i + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ze = new RegExp("^[" + _i + "][" + be + "]*$"), Rt = {}, Gt = {};
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
      this.acceptsBooleans = t === Za || t === zn || t === br, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = d;
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
    var Rr = /[\-\:]([a-z])/g, Oa = function(e) {
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
      var t = e.replace(Rr, Oa);
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
      var t = e.replace(Rr, Oa);
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
      var t = e.replace(Rr, Oa);
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
    var Qi = "xlinkHref";
    Zt[Qi] = new Jt(
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
    var cl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, fl = !1;
    function wo(e) {
      !fl && cl.test(e) && (fl = !0, h("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function bo(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        Gn(a, t), i.sanitizeURL && wo("" + a);
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
        var w = l.attributeName, T = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(w);
        else {
          var P = l.type, U;
          P === zn || P === br && a === !0 ? U = "" : (Gn(a, w), U = "" + a, l.sanitizeURL && wo(U.toString())), T ? e.setAttributeNS(T, w, U) : e.setAttribute(w, U);
        }
      }
    }
    var Mr = /* @__PURE__ */ Symbol.for("react.element"), sr = /* @__PURE__ */ Symbol.for("react.portal"), Si = /* @__PURE__ */ Symbol.for("react.fragment"), ti = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ci = /* @__PURE__ */ Symbol.for("react.profiler"), Ei = /* @__PURE__ */ Symbol.for("react.provider"), M = /* @__PURE__ */ Symbol.for("react.context"), le = /* @__PURE__ */ Symbol.for("react.forward_ref"), Oe = /* @__PURE__ */ Symbol.for("react.suspense"), qe = /* @__PURE__ */ Symbol.for("react.suspense_list"), Et = /* @__PURE__ */ Symbol.for("react.memo"), _t = /* @__PURE__ */ Symbol.for("react.lazy"), Nt = /* @__PURE__ */ Symbol.for("react.scope"), Tt = /* @__PURE__ */ Symbol.for("react.debug_trace_mode"), Dn = /* @__PURE__ */ Symbol.for("react.offscreen"), cn = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), vn = /* @__PURE__ */ Symbol.for("react.cache"), cr = /* @__PURE__ */ Symbol.for("react.tracing_marker"), ni = Symbol.iterator, ri = "@@iterator";
    function xt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ni && e[ni] || e[ri];
      return typeof t == "function" ? t : null;
    }
    var bt = Object.assign, ai = 0, pl, vl, Ro, lu, ko, Zr, as;
    function jr() {
    }
    jr.__reactDisabledLog = !0;
    function Ec() {
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
    function xc() {
      {
        if (ai--, ai === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: bt({}, e, {
              value: pl
            }),
            info: bt({}, e, {
              value: vl
            }),
            warn: bt({}, e, {
              value: Ro
            }),
            error: bt({}, e, {
              value: lu
            }),
            group: bt({}, e, {
              value: ko
            }),
            groupCollapsed: bt({}, e, {
              value: Zr
            }),
            groupEnd: bt({}, e, {
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
      s = uu.current, uu.current = null, Ec();
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
`), w = y.length - 1, T = g.length - 1; w >= 1 && T >= 0 && y[w] !== g[T]; )
            T--;
          for (; w >= 1 && T >= 0; w--, T--)
            if (y[w] !== g[T]) {
              if (w !== 1 || T !== 1)
                do
                  if (w--, T--, T < 0 || y[w] !== g[T]) {
                    var P = `
` + y[w].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && oi.set(e, P), P;
                  }
                while (w >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        ii = !1, uu.current = s, xc(), Error.prepareStackTrace = l;
      }
      var U = e ? e.displayName || e.name : "", Y = U ? _a(U) : "";
      return typeof e == "function" && oi.set(e, Y), Y;
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
        case qe:
          return _a("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case le:
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
    function pd(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case q:
          return _a(e.type);
        case We:
          return _a("Lazy");
        case he:
          return _a("Suspense");
        case X:
          return _a("SuspenseList");
        case k:
        case O:
        case Ve:
          return cu(e.type);
        case _e:
          return cu(e.type.render);
        case b:
          return Do(e.type);
        default:
          return "";
      }
    }
    function Xi(e) {
      try {
        var t = "", a = e;
        do
          t += pd(a), a = a.return;
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
        case Oe:
          return "Suspense";
        case qe:
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
          case le:
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
    function gt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case He:
          return "Cache";
        case pe:
          var i = a;
          return xi(i) + ".Consumer";
        case ve:
          var l = a;
          return xi(l._context) + ".Provider";
        case ut:
          return "DehydratedFragment";
        case _e:
          return is(a, a.render, "ForwardRef");
        case ie:
          return "Fragment";
        case q:
          return a;
        case I:
          return "Portal";
        case A:
          return "Root";
        case oe:
          return "Text";
        case We:
          return Ft(a);
        case we:
          return a === ti ? "StrictMode" : "Mode";
        case J:
          return "Offscreen";
        case Re:
          return "Profiler";
        case V:
          return "Scope";
        case he:
          return "Suspense";
        case X:
          return "SuspenseList";
        case Ne:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case b:
        case k:
        case it:
        case O:
        case Ye:
        case Ve:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var pu = p.ReactDebugCurrentFrame, fr = null, wi = !1;
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
    function bi() {
      return fr === null ? "" : Xi(fr);
    }
    function hn() {
      pu.getCurrentStack = null, fr = null, wi = !1;
    }
    function en(e) {
      pu.getCurrentStack = e === null ? null : bi, fr = e, wi = !1;
    }
    function No() {
      return fr;
    }
    function Kn(e) {
      wi = e;
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
    function Oo(e) {
      return e._valueTracker;
    }
    function yl(e) {
      e._valueTracker = null;
    }
    function vd(e) {
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
      Oo(e) || (e._valueTracker = Ma(e));
    }
    function Ri(e) {
      if (!e)
        return !1;
      var t = Oo(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = vd(e);
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
      var a = e, i = t.checked, l = bt({}, t, {
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
      t.hasOwnProperty("value") ? ot(a, t.type, l) : t.hasOwnProperty("defaultValue") && ot(a, t.type, La(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
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
      L(a, t), Se(a, t);
    }
    function Se(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Gn(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var d = l[s];
          if (!(d === e || d.form !== e.form)) {
            var y = rm(d);
            if (!y)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Ri(d), L(d, y);
          }
        }
      }
    }
    function ot(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ja(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Ur(e._wrapperState.initialValue) : e.defaultValue !== Ur(a) && (e.defaultValue = Ur(a)));
    }
    var Te = !1, ct = !1, Ot = !1;
    function It(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? c.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || ct || (ct = !0, h("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Ot || (Ot = !0, h("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Te && (h("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Te = !0);
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
          var w = d.hasOwnProperty("$" + l[g].value);
          l[g].selected !== w && (l[g].selected = w), w && i && (l[g].defaultSelected = !0);
        }
      } else {
        for (var T = Ur(La(a)), P = null, U = 0; U < l.length; U++) {
          if (l[U].value === T) {
            l[U].selected = !0, i && (l[U].defaultSelected = !0);
            return;
          }
          P === null && !l[U].disabled && (P = l[U]);
        }
        P !== null && (P.selected = !0);
      }
    }
    function ss(e, t) {
      return bt({}, t, {
        value: void 0
      });
    }
    function _l(e, t) {
      var a = e;
      us(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !nn && (h("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), nn = !0);
    }
    function hd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Ji(a, !!t.multiple, i, !1) : t.defaultValue != null && Ji(a, !!t.multiple, t.defaultValue, !0);
    }
    function wc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? Ji(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? Ji(a, !!t.multiple, t.defaultValue, !0) : Ji(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function md(e, t) {
      var a = e, i = t.value;
      i != null && Ji(a, !!t.multiple, i, !1);
    }
    var Rv = !1;
    function yd(e, t) {
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
    function gd(e, t) {
      var a = e;
      os("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Rv && (h("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ar() || "A component"), Rv = !0);
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
    function kv(e, t) {
      var a = e, i = La(t.value), l = La(t.defaultValue);
      if (i != null) {
        var s = Ur(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = Ur(l));
    }
    function Tv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Ly(e, t) {
      kv(e, t);
    }
    var Zi = "http://www.w3.org/1999/xhtml", _d = "http://www.w3.org/1998/Math/MathML", Sd = "http://www.w3.org/2000/svg";
    function Cd(e) {
      switch (e) {
        case "svg":
          return Sd;
        case "math":
          return _d;
        default:
          return Zi;
      }
    }
    function Ed(e, t) {
      return e == null || e === Zi ? Cd(t) : e === Sd && t === "foreignObject" ? Zi : e;
    }
    var Dv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, bc, Nv = Dv(function(e, t) {
      if (e.namespaceURI === Sd && !("innerHTML" in e)) {
        bc = bc || document.createElement("div"), bc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = bc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ea = 1, eo = 3, Pn = 8, to = 9, xd = 11, gu = function(e, t) {
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
    var Lv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(fs).forEach(function(e) {
      Lv.forEach(function(t) {
        fs[Ov(t, e)] = fs[e];
      });
    });
    function Rc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(fs.hasOwnProperty(e) && fs[e]) ? t + "px" : (ma(t, e), ("" + t).trim());
    }
    var Mv = /([A-Z])/g, jv = /^ms-/;
    function _u(e) {
      return e.replace(Mv, "-$1").toLowerCase().replace(jv, "-ms-");
    }
    var Av = function() {
    };
    {
      var My = /^(?:webkit|moz|o)[A-Z]/, jy = /^-ms-/, Uv = /-(.)/g, wd = /;\s*$/, ki = {}, Sl = {}, zv = !1, ds = !1, Ay = function(e) {
        return e.replace(Uv, function(t, a) {
          return a.toUpperCase();
        });
      }, Pv = function(e) {
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
      }, Rd = function(e, t) {
        Sl.hasOwnProperty(t) && Sl[t] || (Sl[t] = !0, h(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(wd, "")));
      }, Fv = function(e, t) {
        zv || (zv = !0, h("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Iv = function(e, t) {
        ds || (ds = !0, h("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Av = function(e, t) {
        e.indexOf("-") > -1 ? Pv(e) : My.test(e) ? bd(e) : wd.test(t) && Rd(e, t), typeof t == "number" && (isNaN(t) ? Fv(e, t) : isFinite(t) || Iv(e, t));
      };
    }
    var Vv = Av;
    function Uy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : _u(i)) + ":", t += Rc(i, l, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Hv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || Vv(i, t[i]);
          var s = Rc(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function zy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function $v(e) {
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
        var a = $v(e), i = $v(t), l = {};
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
    }, ps = bt({
      menuitem: !0
    }, si), Bv = "__html";
    function kc(e, t) {
      if (t) {
        if (ps[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Bv in t.dangerouslySetInnerHTML))
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
    }, Su = {}, Fy = new RegExp("^(aria)-[" + be + "]*$"), Cu = new RegExp("^(aria)[A-Z][" + be + "]*$");
    function kd(e, t) {
      {
        if (Or.call(Su, t) && Su[t])
          return !0;
        if (Cu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Tc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return h("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Su[t] = !0, !0;
          if (t !== i)
            return h("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Su[t] = !0, !0;
        }
        if (Fy.test(t)) {
          var l = t.toLowerCase(), s = Tc.hasOwnProperty(l) ? l : null;
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
          var l = kd(e, i);
          l || a.push(i);
        }
        var s = a.map(function(d) {
          return "`" + d + "`";
        }).join(", ");
        a.length === 1 ? h("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && h("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Td(e, t) {
      jo(e, t) || hs(e, t);
    }
    var Dd = !1;
    function Dc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Dd && (Dd = !0, e === "select" && t.multiple ? h("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : h("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Cl = function() {
    };
    {
      var dr = {}, Nd = /^on./, Nc = /^on[^A-Z]/, qv = new RegExp("^(aria)-[" + be + "]*$"), Wv = new RegExp("^(aria)[A-Z][" + be + "]*$");
      Cl = function(e, t, a, i) {
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
          if (Nd.test(t))
            return h("Unknown event handler property `%s`. It will be ignored.", t), dr[t] = !0, !0;
        } else if (Nd.test(t))
          return Nc.test(t) && h("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), dr[t] = !0, !0;
        if (qv.test(t) || Wv.test(t))
          return !0;
        if (l === "innerhtml")
          return h("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), dr[t] = !0, !0;
        if (l === "aria")
          return h("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), dr[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return h("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), dr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return h("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), dr[t] = !0, !0;
        var g = sn(t), w = g !== null && g.type === Qn;
        if (vs.hasOwnProperty(l)) {
          var T = vs[l];
          if (T !== t)
            return h("Invalid DOM property `%s`. Did you mean `%s`?", t, T), dr[t] = !0, !0;
        } else if (!w && t !== l)
          return h("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), dr[t] = !0, !0;
        return typeof a == "boolean" && pn(t, a, g, !1) ? (a ? h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), dr[t] = !0, !0) : w ? !0 : pn(t, a, g, !1) ? (dr[t] = !0, !1) : ((a === "false" || a === "true") && g !== null && g.type === zn && (h("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), dr[t] = !0), !0);
      };
    }
    var Yv = function(e, t, a) {
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
    function Gv(e, t, a) {
      jo(e, t) || Yv(e, t, a);
    }
    var Od = 1, Oc = 2, Aa = 4, Ld = Od | Oc | Aa, El = null;
    function Iy(e) {
      El !== null && h("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), El = e;
    }
    function Vy() {
      El === null && h("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), El = null;
    }
    function ms(e) {
      return e === El;
    }
    function Md(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === eo ? t.parentNode : t;
    }
    var Lc = null, xl = null, Qt = null;
    function Mc(e) {
      var t = Hu(e);
      if (t) {
        if (typeof Lc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = rm(a);
          Lc(t.stateNode, t.type, i);
        }
      }
    }
    function jc(e) {
      Lc = e;
    }
    function Eu(e) {
      xl ? Qt ? Qt.push(e) : Qt = [e] : xl = e;
    }
    function Qv() {
      return xl !== null || Qt !== null;
    }
    function Ac() {
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
    function Kv() {
      var e = Qv();
      e && (ys(), Ac());
    }
    function Xv(e, t, a) {
      if (Ao)
        return e(t, a);
      Ao = !0;
      try {
        return xu(e, t, a);
      } finally {
        Ao = !1, Kv();
      }
    }
    function Hy(e, t, a) {
      xu = e, ys = a;
    }
    function Jv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Uc(e, t, a) {
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
          return !!(a.disabled && Jv(t));
        default:
          return !1;
      }
    }
    function Uo(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = rm(a);
      if (i === null)
        return null;
      var l = i[t];
      if (Uc(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var gs = !1;
    if (Un)
      try {
        var wl = {};
        Object.defineProperty(wl, "passive", {
          get: function() {
            gs = !0;
          }
        }), window.addEventListener("test", wl, wl), window.removeEventListener("test", wl, wl);
      } catch {
        gs = !1;
      }
    function zc(e, t, a, i, l, s, d, y, g) {
      var w = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, w);
      } catch (T) {
        this.onError(T);
      }
    }
    var Pc = zc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var jd = document.createElement("react");
      Pc = function(t, a, i, l, s, d, y, g, w) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var T = document.createEvent("Event"), P = !1, U = !0, Y = window.event, K = Object.getOwnPropertyDescriptor(window, "event");
        function te() {
          jd.removeEventListener(ne, lt, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = Y);
        }
        var Me = Array.prototype.slice.call(arguments, 3);
        function lt() {
          P = !0, te(), a.apply(i, Me), U = !1;
        }
        var et, zt = !1, Lt = !1;
        function $(B) {
          if (et = B.error, zt = !0, et === null && B.colno === 0 && B.lineno === 0 && (Lt = !0), B.defaultPrevented && et != null && typeof et == "object")
            try {
              et._suppressLogging = !0;
            } catch {
            }
        }
        var ne = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", $), jd.addEventListener(ne, lt, !1), T.initEvent(ne, !1, !1), jd.dispatchEvent(T), K && Object.defineProperty(window, "event", K), P && U && (zt ? Lt && (et = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : et = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(et)), window.removeEventListener("error", $), !P)
          return te(), zc.apply(this, arguments);
      };
    }
    var Zv = Pc, wu = !1, Fc = null, bu = !1, Ti = null, eh = {
      onError: function(e) {
        wu = !0, Fc = e;
      }
    };
    function zo(e, t, a, i, l, s, d, y, g) {
      wu = !1, Fc = null, Zv.apply(eh, arguments);
    }
    function Di(e, t, a, i, l, s, d, y, g) {
      if (zo.apply(this, arguments), wu) {
        var w = Ss();
        bu || (bu = !0, Ti = w);
      }
    }
    function _s() {
      if (bu) {
        var e = Ti;
        throw bu = !1, Ti = null, e;
      }
    }
    function no() {
      return wu;
    }
    function Ss() {
      if (wu) {
        var e = Fc;
        return wu = !1, Fc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ru(e) {
      return e._reactInternals;
    }
    function $y(e) {
      return e._reactInternals !== void 0;
    }
    function bl(e, t) {
      e._reactInternals = t;
    }
    var rt = (
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
    ), Fn = (
      /*                   */
      8192
    ), ku = (
      /*             */
      16384
    ), th = (
      /*               */
      32767
    ), Cs = (
      /*                   */
      32768
    ), rr = (
      /*                */
      65536
    ), Ic = (
      /* */
      131072
    ), Ni = (
      /*                       */
      1048576
    ), Tu = (
      /*                    */
      2097152
    ), ro = (
      /*                 */
      4194304
    ), Vc = (
      /*                */
      8388608
    ), Po = (
      /*               */
      16777216
    ), Oi = (
      /*              */
      33554432
    ), Fo = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      jt | Xn | 0
    ), Io = Cn | jt | Ua | za | bn | na | Fn, Vo = jt | dn | bn | Fn, ao = ta | Ua, In = ro | Vc | Tu, Pa = p.ReactCurrentOwner;
    function Sa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Cn | na)) !== rt && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === A ? a : null;
    }
    function Li(e) {
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
    function Mi(e) {
      return e.tag === A ? e.stateNode.containerInfo : null;
    }
    function Rl(e) {
      return Sa(e) === e;
    }
    function nh(e) {
      {
        var t = Pa.current;
        if (t !== null && t.tag === b) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || h("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", gt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = Ru(e);
      return l ? Sa(l) === l : !1;
    }
    function Hc(e) {
      if (Sa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function $c(e) {
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
              return Hc(s), e;
            if (g === l)
              return Hc(s), t;
            g = g.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = s, l = d;
        else {
          for (var w = !1, T = s.child; T; ) {
            if (T === i) {
              w = !0, i = s, l = d;
              break;
            }
            if (T === l) {
              w = !0, l = s, i = d;
              break;
            }
            T = T.sibling;
          }
          if (!w) {
            for (T = d.child; T; ) {
              if (T === i) {
                w = !0, i = d, l = s;
                break;
              }
              if (T === l) {
                w = !0, l = d, i = s;
                break;
              }
              T = T.sibling;
            }
            if (!w)
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
      var t = $c(e);
      return t !== null ? aa(t) : null;
    }
    function aa(e) {
      if (e.tag === q || e.tag === oe)
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
      var t = $c(e);
      return t !== null ? Fa(t) : null;
    }
    function Fa(e) {
      if (e.tag === q || e.tag === oe)
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
    var Ad = v.unstable_scheduleCallback, rh = v.unstable_cancelCallback, Ud = v.unstable_shouldYield, zd = v.unstable_requestPaint, Jn = v.unstable_now, Bc = v.unstable_getCurrentPriorityLevel, Es = v.unstable_ImmediatePriority, Ho = v.unstable_UserBlockingPriority, io = v.unstable_NormalPriority, By = v.unstable_LowPriority, kl = v.unstable_IdlePriority, qc = v.unstable_yieldValue, ah = v.unstable_setDisableYieldValue, Tl = null, Nn = null, Le = null, Ca = !1, ia = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Du(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return h("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Je && (e = bt({}, e, {
          getLaneLabelMap: Dl,
          injectProfilingHooks: Ia
        })), Tl = t.inject(e), Nn = t;
      } catch (a) {
        h("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Pd(e, t) {
      if (Nn && typeof Nn.onScheduleFiberRoot == "function")
        try {
          Nn.onScheduleFiberRoot(Tl, e, t);
        } catch (a) {
          Ca || (Ca = !0, h("React instrumentation encountered an error: %s", a));
        }
    }
    function Fd(e, t) {
      if (Nn && typeof Nn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & tt) === tt;
          if (ze) {
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
            Nn.onCommitFiberRoot(Tl, e, i, a);
          }
        } catch (l) {
          Ca || (Ca = !0, h("React instrumentation encountered an error: %s", l));
        }
    }
    function Id(e) {
      if (Nn && typeof Nn.onPostCommitFiberRoot == "function")
        try {
          Nn.onPostCommitFiberRoot(Tl, e);
        } catch (t) {
          Ca || (Ca = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function Vd(e) {
      if (Nn && typeof Nn.onCommitFiberUnmount == "function")
        try {
          Nn.onCommitFiberUnmount(Tl, e);
        } catch (t) {
          Ca || (Ca = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function En(e) {
      if (typeof qc == "function" && (ah(e), x(e)), Nn && typeof Nn.setStrictMode == "function")
        try {
          Nn.setStrictMode(Tl, e);
        } catch (t) {
          Ca || (Ca = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function Ia(e) {
      Le = e;
    }
    function Dl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Ll; a++) {
          var i = uh(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Hd(e) {
      Le !== null && typeof Le.markCommitStarted == "function" && Le.markCommitStarted(e);
    }
    function $d() {
      Le !== null && typeof Le.markCommitStopped == "function" && Le.markCommitStopped();
    }
    function Ea(e) {
      Le !== null && typeof Le.markComponentRenderStarted == "function" && Le.markComponentRenderStarted(e);
    }
    function xa() {
      Le !== null && typeof Le.markComponentRenderStopped == "function" && Le.markComponentRenderStopped();
    }
    function Bd(e) {
      Le !== null && typeof Le.markComponentPassiveEffectMountStarted == "function" && Le.markComponentPassiveEffectMountStarted(e);
    }
    function ih() {
      Le !== null && typeof Le.markComponentPassiveEffectMountStopped == "function" && Le.markComponentPassiveEffectMountStopped();
    }
    function oo(e) {
      Le !== null && typeof Le.markComponentPassiveEffectUnmountStarted == "function" && Le.markComponentPassiveEffectUnmountStarted(e);
    }
    function $o() {
      Le !== null && typeof Le.markComponentPassiveEffectUnmountStopped == "function" && Le.markComponentPassiveEffectUnmountStopped();
    }
    function Wc(e) {
      Le !== null && typeof Le.markComponentLayoutEffectMountStarted == "function" && Le.markComponentLayoutEffectMountStarted(e);
    }
    function oh() {
      Le !== null && typeof Le.markComponentLayoutEffectMountStopped == "function" && Le.markComponentLayoutEffectMountStopped();
    }
    function xs(e) {
      Le !== null && typeof Le.markComponentLayoutEffectUnmountStarted == "function" && Le.markComponentLayoutEffectUnmountStarted(e);
    }
    function qd() {
      Le !== null && typeof Le.markComponentLayoutEffectUnmountStopped == "function" && Le.markComponentLayoutEffectUnmountStopped();
    }
    function ws(e, t, a) {
      Le !== null && typeof Le.markComponentErrored == "function" && Le.markComponentErrored(e, t, a);
    }
    function ji(e, t, a) {
      Le !== null && typeof Le.markComponentSuspended == "function" && Le.markComponentSuspended(e, t, a);
    }
    function bs(e) {
      Le !== null && typeof Le.markLayoutEffectsStarted == "function" && Le.markLayoutEffectsStarted(e);
    }
    function Rs() {
      Le !== null && typeof Le.markLayoutEffectsStopped == "function" && Le.markLayoutEffectsStopped();
    }
    function Nl(e) {
      Le !== null && typeof Le.markPassiveEffectsStarted == "function" && Le.markPassiveEffectsStarted(e);
    }
    function Wd() {
      Le !== null && typeof Le.markPassiveEffectsStopped == "function" && Le.markPassiveEffectsStopped();
    }
    function Ol(e) {
      Le !== null && typeof Le.markRenderStarted == "function" && Le.markRenderStarted(e);
    }
    function lh() {
      Le !== null && typeof Le.markRenderYielded == "function" && Le.markRenderYielded();
    }
    function Yc() {
      Le !== null && typeof Le.markRenderStopped == "function" && Le.markRenderStopped();
    }
    function xn(e) {
      Le !== null && typeof Le.markRenderScheduled == "function" && Le.markRenderScheduled(e);
    }
    function Gc(e, t) {
      Le !== null && typeof Le.markForceUpdateScheduled == "function" && Le.markForceUpdateScheduled(e, t);
    }
    function ks(e, t) {
      Le !== null && typeof Le.markStateUpdateScheduled == "function" && Le.markStateUpdateScheduled(e, t);
    }
    var at = (
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
    ), Vn = Math.clz32 ? Math.clz32 : Ts, ar = Math.log, Qc = Math.LN2;
    function Ts(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (ar(t) / Qc | 0) | 0;
    }
    var Ll = 31, ue = (
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
    ), On = (
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
    ), Kc = (
      /*                        */
      128
    ), Xc = (
      /*                        */
      256
    ), Jc = (
      /*                        */
      512
    ), Zc = (
      /*                        */
      1024
    ), ef = (
      /*                        */
      2048
    ), tf = (
      /*                        */
      4096
    ), nf = (
      /*                        */
      8192
    ), rf = (
      /*                        */
      16384
    ), jl = (
      /*                       */
      32768
    ), af = (
      /*                       */
      65536
    ), Nu = (
      /*                       */
      131072
    ), Ou = (
      /*                       */
      262144
    ), of = (
      /*                       */
      524288
    ), Ds = (
      /*                       */
      1048576
    ), lf = (
      /*                       */
      2097152
    ), Ns = (
      /*                            */
      130023424
    ), Al = (
      /*                             */
      4194304
    ), uf = (
      /*                             */
      8388608
    ), Os = (
      /*                             */
      16777216
    ), sf = (
      /*                             */
      33554432
    ), cf = (
      /*                             */
      67108864
    ), Yd = Al, Ls = (
      /*          */
      134217728
    ), Gd = (
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
    function uh(e) {
      {
        if (e & pt)
          return "Sync";
        if (e & Bo)
          return "InputContinuousHydration";
        if (e & fi)
          return "InputContinuous";
        if (e & Tr)
          return "DefaultHydration";
        if (e & On)
          return "Default";
        if (e & lo)
          return "TransitionHydration";
        if (e & qo)
          return "Transition";
        if (e & Ns)
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
    var ln = -1, zl = Ml, ff = Al;
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
        case On:
          return On;
        case lo:
          return lo;
        case Ml:
        case Kc:
        case Xc:
        case Jc:
        case Zc:
        case ef:
        case tf:
        case nf:
        case rf:
        case jl:
        case af:
        case Nu:
        case Ou:
        case of:
        case Ds:
        case lf:
          return e & qo;
        case Al:
        case uf:
        case Os:
        case sf:
        case cf:
          return e & Ns;
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
    function df(e, t) {
      var a = e.pendingLanes;
      if (a === ue)
        return ue;
      var i = ue, l = e.suspendedLanes, s = e.pingedLanes, d = a & Gd;
      if (d !== ue) {
        var y = d & ~l;
        if (y !== ue)
          i = js(y);
        else {
          var g = d & s;
          g !== ue && (i = js(g));
        }
      } else {
        var w = a & ~l;
        w !== ue ? i = js(w) : s !== ue && (i = js(s));
      }
      if (i === ue)
        return ue;
      if (t !== ue && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === ue) {
        var T = Wo(i), P = Wo(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= P || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === On && (P & qo) !== ue
        )
          return t;
      }
      (i & fi) !== ue && (i |= a & On);
      var U = e.entangledLanes;
      if (U !== ue)
        for (var Y = e.entanglements, K = i & U; K > 0; ) {
          var te = Hn(K), Me = 1 << te;
          i |= Y[te], K &= ~Me;
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
    function Qd(e, t) {
      switch (e) {
        case pt:
        case Bo:
        case fi:
          return t + 250;
        case Tr:
        case On:
        case lo:
        case Ml:
        case Kc:
        case Xc:
        case Jc:
        case Zc:
        case ef:
        case tf:
        case nf:
        case rf:
        case jl:
        case af:
        case Nu:
        case Ou:
        case of:
        case Ds:
        case lf:
          return t + 5e3;
        case Al:
        case uf:
        case Os:
        case sf:
        case cf:
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
    function pf(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, d = a; d > 0; ) {
        var y = Hn(d), g = 1 << y, w = s[y];
        w === ln ? ((g & i) === ue || (g & l) !== ue) && (s[y] = Qd(g, t)) : w <= t && (e.expiredLanes |= g), d &= ~g;
      }
    }
    function sh(e) {
      return js(e.pendingLanes);
    }
    function vf(e) {
      var t = e.pendingLanes & ~oa;
      return t !== ue ? t : t & oa ? oa : ue;
    }
    function ch(e) {
      return (e & pt) !== ue;
    }
    function As(e) {
      return (e & Gd) !== ue;
    }
    function Pl(e) {
      return (e & Ns) === e;
    }
    function Kd(e) {
      var t = pt | fi | On;
      return (e & t) === ue;
    }
    function Xd(e) {
      return (e & qo) === e;
    }
    function hf(e, t) {
      var a = Bo | fi | Tr | On;
      return (t & a) !== ue;
    }
    function fh(e, t) {
      return (t & e.expiredLanes) !== ue;
    }
    function Jd(e) {
      return (e & qo) !== ue;
    }
    function Zd() {
      var e = zl;
      return zl <<= 1, (zl & qo) === ue && (zl = Ml), e;
    }
    function dh() {
      var e = ff;
      return ff <<= 1, (ff & Ns) === ue && (ff = Al), e;
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
      return (e & t) !== ue;
    }
    function Fl(e, t) {
      return (e & t) === t;
    }
    function wt(e, t) {
      return e | t;
    }
    function zs(e, t) {
      return e & ~t;
    }
    function ep(e, t) {
      return e & t;
    }
    function ph(e) {
      return e;
    }
    function vh(e, t) {
      return e !== Vt && e < t ? e : t;
    }
    function Ps(e) {
      for (var t = [], a = 0; a < Ll; a++)
        t.push(e);
      return t;
    }
    function Lu(e, t, a) {
      e.pendingLanes |= t, t !== Ul && (e.suspendedLanes = ue, e.pingedLanes = ue);
      var i = e.eventTimes, l = pr(t);
      i[l] = a;
    }
    function hh(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = Hn(i), s = 1 << l;
        a[l] = ln, i &= ~s;
      }
    }
    function mf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function tp(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ue, e.pingedLanes = ue, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, d = a; d > 0; ) {
        var y = Hn(d), g = 1 << y;
        i[y] = ue, l[y] = ln, s[y] = ln, d &= ~g;
      }
    }
    function yf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var s = Hn(l), d = 1 << s;
        // Is this one of the newly entangled lanes?
        d & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), l &= ~d;
      }
    }
    function np(e, t) {
      var a = Wo(t), i;
      switch (a) {
        case fi:
          i = Bo;
          break;
        case On:
          i = Tr;
          break;
        case Ml:
        case Kc:
        case Xc:
        case Jc:
        case Zc:
        case ef:
        case tf:
        case nf:
        case rf:
        case jl:
        case af:
        case Nu:
        case Ou:
        case of:
        case Ds:
        case lf:
        case Al:
        case uf:
        case Os:
        case sf:
        case cf:
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
    function mh(e, t) {
      if (ia)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = pr(t), s = 1 << l, d = a[l];
          d.size > 0 && (d.forEach(function(y) {
            var g = y.alternate;
            (g === null || !i.has(g)) && i.add(y);
          }), d.clear()), t &= ~s;
        }
    }
    function rp(e, t) {
      return null;
    }
    var zr = pt, Ai = fi, Va = On, Ha = Ul, Is = Vt;
    function $a() {
      return Is;
    }
    function $n(e) {
      Is = e;
    }
    function yh(e, t) {
      var a = Is;
      try {
        return Is = e, t();
      } finally {
        Is = a;
      }
    }
    function gh(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Vs(e, t) {
      return e > t ? e : t;
    }
    function ir(e, t) {
      return e !== 0 && e < t;
    }
    function _h(e) {
      var t = Wo(e);
      return ir(zr, t) ? ir(Ai, t) ? As(t) ? Va : Ha : Ai : zr;
    }
    function gf(e) {
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
    var _f;
    function Sh(e) {
      _f = e;
    }
    var Ch;
    function $s(e) {
      Ch = e;
    }
    var Bs;
    function ap(e) {
      Bs = e;
    }
    var Sf = !1, qs = [], uo = null, Ui = null, zi = null, Ln = /* @__PURE__ */ new Map(), Pr = /* @__PURE__ */ new Map(), Fr = [], Eh = [
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
      return Eh.indexOf(e) > -1;
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
    function ip(e, t) {
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
          var g = l, w = g.pointerId;
          return Ln.set(w, ua(Ln.get(w) || null, e, t, a, i, g)), !0;
        }
        case "gotpointercapture": {
          var T = l, P = T.pointerId;
          return Pr.set(P, ua(Pr.get(P) || null, e, t, a, i, T)), !0;
        }
      }
      return !1;
    }
    function op(e) {
      var t = rc(e.target);
      if (t !== null) {
        var a = Sa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === he) {
            var l = Li(a);
            if (l !== null) {
              e.blockedOn = l, Bs(e.priority, function() {
                _f(a);
              });
              return;
            }
          } else if (i === A) {
            var s = a.stateNode;
            if (gf(s)) {
              e.blockedOn = Mi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function wh(e) {
      for (var t = Ch(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Fr.length && ir(t, Fr[i].priority); i++)
        ;
      Fr.splice(i, 0, a), i === 0 && op(a);
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
    function lp(e, t, a) {
      Ws(e) && a.delete(t);
    }
    function Yy() {
      Sf = !1, uo !== null && Ws(uo) && (uo = null), Ui !== null && Ws(Ui) && (Ui = null), zi !== null && Ws(zi) && (zi = null), Ln.forEach(lp), Pr.forEach(lp);
    }
    function Yo(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Sf || (Sf = !0, v.unstable_scheduleCallback(v.unstable_NormalPriority, Yy)));
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
        op(d), d.blockedOn === null && Fr.shift();
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
      var i = Cf(t), l;
      switch (i) {
        case zr:
          l = wa;
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
    function wa(e, t, a, i) {
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
        cg(e, t, i, Pi, a), ip(e, i);
        return;
      }
      if (Wy(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (ip(e, i), t & Aa && xh(e)) {
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
      var l = Md(i), s = rc(l);
      if (s !== null) {
        var d = Sa(s);
        if (d === null)
          s = null;
        else {
          var y = d.tag;
          if (y === he) {
            var g = Li(d);
            if (g !== null)
              return g;
            s = null;
          } else if (y === A) {
            var w = d.stateNode;
            if (gf(w))
              return Mi(d);
            s = null;
          } else d !== s && (s = null);
        }
      }
      return Pi = s, null;
    }
    function Cf(e) {
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
          var t = Bc();
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
    function up(e, t, a, i) {
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
    var ba = null, zu = null, Vl = null;
    function Go(e) {
      return ba = e, zu = Qs(), !0;
    }
    function Ef() {
      ba = null, zu = null, Vl = null;
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
      return "value" in ba ? ba.value : ba.textContent;
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
    function Nr(e) {
      function t(a, i, l, s, d) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = d, this.currentTarget = null;
        for (var y in e)
          if (e.hasOwnProperty(y)) {
            var g = e[y];
            g ? this[y] = g(s) : this[y] = s[y];
          }
        var w = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return w ? this.isDefaultPrevented = Pu : this.isDefaultPrevented = Ks, this.isPropagationStopped = Ks, this;
      }
      return bt(t.prototype, {
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
    }, Fi = Nr(qn), Ir = bt({}, qn, {
      view: 0,
      detail: 0
    }), ca = Nr(Ir), xf, Xs, Hl;
    function Gy(e) {
      e !== Hl && (Hl && e.type === "mousemove" ? (xf = e.screenX - Hl.screenX, Xs = e.screenY - Hl.screenY) : (xf = 0, Xs = 0), Hl = e);
    }
    var vi = bt({}, Ir, {
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
        return "movementX" in e ? e.movementX : (Gy(e), xf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Xs;
      }
    }), sp = Nr(vi), cp = bt({}, vi, {
      dataTransfer: 0
    }), $l = Nr(cp), fp = bt({}, Ir, {
      relatedTarget: 0
    }), co = Nr(fp), bh = bt({}, qn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Rh = Nr(bh), dp = bt({}, qn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), wf = Nr(dp), Qy = bt({}, qn, {
      data: 0
    }), kh = Nr(Qy), Th = kh, Dh = {
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
        var t = Dh[e.key] || e.key;
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
    function Nh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Fu[e];
      return i ? !!a[i] : !1;
    }
    function gn(e) {
      return Nh;
    }
    var Xy = bt({}, Ir, {
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
    }), Oh = Nr(Xy), Jy = bt({}, vi, {
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
    }), Lh = Nr(Jy), Mh = bt({}, Ir, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: gn
    }), jh = Nr(Mh), Zy = bt({}, qn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ba = Nr(Zy), pp = bt({}, vi, {
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
    }), eg = Nr(pp), Ko = [9, 13, 27, 32], Js = 229, fo = Un && "CompositionEvent" in window, Xo = null;
    Un && "documentMode" in document && (Xo = document.documentMode);
    var vp = Un && "TextEvent" in window && !Xo, bf = Un && (!fo || Xo && Xo > 8 && Xo <= 11), Ah = 32, Rf = String.fromCharCode(Ah);
    function tg() {
      mt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), mt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), mt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), mt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var hp = !1;
    function Uh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function kf(e) {
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
      return e === "keydown" && t.keyCode === Js;
    }
    function mp(e, t) {
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
    function Df(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function zh(e) {
      return e.locale === "ko";
    }
    var ql = !1;
    function yp(e, t, a, i, l) {
      var s, d;
      if (fo ? s = kf(t) : ql ? mp(t, i) && (s = "onCompositionEnd") : Tf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      bf && !zh(i) && (!ql && s === "onCompositionStart" ? ql = Go(l) : s === "onCompositionEnd" && ql && (d = so()));
      var y = Bh(a, s);
      if (y.length > 0) {
        var g = new kh(s, t, null, i, l);
        if (e.push({
          event: g,
          listeners: y
        }), d)
          g.data = d;
        else {
          var w = Df(i);
          w !== null && (g.data = w);
        }
      }
    }
    function Nf(e, t) {
      switch (e) {
        case "compositionend":
          return Df(t);
        case "keypress":
          var a = t.which;
          return a !== Ah ? null : (hp = !0, Rf);
        case "textInput":
          var i = t.data;
          return i === Rf && hp ? null : i;
        default:
          return null;
      }
    }
    function gp(e, t) {
      if (ql) {
        if (e === "compositionend" || !fo && mp(e, t)) {
          var a = so();
          return Ef(), ql = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Uh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return bf && !zh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Of(e, t, a, i, l) {
      var s;
      if (vp ? s = Nf(t, i) : s = gp(t, i), !s)
        return null;
      var d = Bh(a, "onBeforeInput");
      if (d.length > 0) {
        var y = new Th("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: y,
          listeners: d
        }), y.data = s;
      }
    }
    function Ph(e, t, a, i, l, s, d) {
      yp(e, t, a, i, l), Of(e, t, a, i, l);
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
      mt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Fh(e, t, a, i) {
      Eu(i);
      var l = Bh(t, "onChange");
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
      Fh(t, n, e, Md(e)), Xv(u, t);
    }
    function u(e) {
      w_(e, 0);
    }
    function f(e) {
      var t = zf(e);
      if (Ri(t))
        return e;
    }
    function m(e, t) {
      if (e === "change")
        return t;
    }
    var C = !1;
    Un && (C = rg("input") && (!document.documentMode || document.documentMode > 9));
    function N(e, t) {
      Jo = e, n = t, Jo.attachEvent("onpropertychange", Q);
    }
    function j() {
      Jo && (Jo.detachEvent("onpropertychange", Q), Jo = null, n = null);
    }
    function Q(e) {
      e.propertyName === "value" && f(n) && o(e);
    }
    function fe(e, t, a) {
      e === "focusin" ? (j(), N(t, a)) : e === "focusout" && j();
    }
    function me(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return f(n);
    }
    function ce(e) {
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
      !t || !t.controlled || e.type !== "number" || ot(e, "number", e.value);
    }
    function jn(e, t, a, i, l, s, d) {
      var y = a ? zf(a) : window, g, w;
      if (r(y) ? g = m : Zs(y) ? C ? g = Ge : (g = me, w = fe) : ce(y) && (g = Pe), g) {
        var T = g(t, a);
        if (T) {
          Fh(e, T, i, l);
          return;
        }
      }
      w && w(t, y, a), t === "focusout" && Xe(y);
    }
    function H() {
      Xt("onMouseEnter", ["mouseout", "mouseover"]), Xt("onMouseLeave", ["mouseout", "mouseover"]), Xt("onPointerEnter", ["pointerout", "pointerover"]), Xt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function z(e, t, a, i, l, s, d) {
      var y = t === "mouseover" || t === "pointerover", g = t === "mouseout" || t === "pointerout";
      if (y && !ms(i)) {
        var w = i.relatedTarget || i.fromElement;
        if (w && (rc(w) || Lp(w)))
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
          if (U = a, Y = K ? rc(K) : null, Y !== null) {
            var te = Sa(Y);
            (Y !== te || Y.tag !== q && Y.tag !== oe) && (Y = null);
          }
        } else
          U = null, Y = a;
        if (U !== Y) {
          var Me = sp, lt = "onMouseLeave", et = "onMouseEnter", zt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Me = Lh, lt = "onPointerLeave", et = "onPointerEnter", zt = "pointer");
          var Lt = U == null ? T : zf(U), $ = Y == null ? T : zf(Y), ne = new Me(lt, zt + "leave", U, i, l);
          ne.target = Lt, ne.relatedTarget = $;
          var B = null, ye = rc(l);
          if (ye === a) {
            var $e = new Me(et, zt + "enter", Y, i, l);
            $e.target = $, $e.relatedTarget = Lt, B = $e;
          }
          mx(e, ne, B, U, Y);
        }
      }
    }
    function W(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var de = typeof Object.is == "function" ? Object.is : W;
    function Qe(e, t) {
      if (de(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!Or.call(t, s) || !de(e[s], t[s]))
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
      var s = 0, d = -1, y = -1, g = 0, w = 0, T = e, P = null;
      e: for (; ; ) {
        for (var U = null; T === t && (a === 0 || T.nodeType === eo) && (d = s + a), T === i && (l === 0 || T.nodeType === eo) && (y = s + l), T.nodeType === eo && (s += T.nodeValue.length), (U = T.firstChild) !== null; )
          P = T, T = U;
        for (; ; ) {
          if (T === e)
            break e;
          if (P === t && ++g === a && (d = s), P === i && ++w === l && (y = s), (U = T.nextSibling) !== null)
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
    function Zo(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), s = e.textContent.length, d = Math.min(t.start, s), y = t.end === void 0 ? d : Math.min(t.end, s);
        if (!l.extend && d > y) {
          var g = y;
          y = d, d = g;
        }
        var w = yt(e, d), T = yt(e, y);
        if (w && T) {
          if (l.rangeCount === 1 && l.anchorNode === w.node && l.anchorOffset === w.offset && l.focusNode === T.node && l.focusOffset === T.offset)
            return;
          var P = a.createRange();
          P.setStart(w.node, w.offset), l.removeAllRanges(), d > y ? (l.addRange(P), l.extend(T.node, T.offset)) : (P.setEnd(T.node, T.offset), l.addRange(P));
        }
      }
    }
    function Ih(e) {
      return e && e.nodeType === eo;
    }
    function p_(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Ih(e) ? !1 : Ih(t) ? p_(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
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
      mt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Lf = null, ig = null, _p = null, og = !1;
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
      if (!(og || Lf == null || Lf !== ja(i))) {
        var l = ox(Lf);
        if (!_p || !Qe(_p, l)) {
          _p = l;
          var s = Bh(ig, "onSelect");
          if (s.length > 0) {
            var d = new Fi("onSelect", "select", null, t, a);
            e.push({
              event: d,
              listeners: s
            }), d.target = Lf;
          }
        }
      }
    }
    function ux(e, t, a, i, l, s, d) {
      var y = a ? zf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (Zs(y) || y.contentEditable === "true") && (Lf = y, ig = a, _p = null);
          break;
        case "focusout":
          Lf = null, ig = null, _p = null;
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
    function Vh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Mf = {
      animationend: Vh("Animation", "AnimationEnd"),
      animationiteration: Vh("Animation", "AnimationIteration"),
      animationstart: Vh("Animation", "AnimationStart"),
      transitionend: Vh("Transition", "TransitionEnd")
    }, lg = {}, m_ = {};
    Un && (m_ = document.createElement("div").style, "AnimationEvent" in window || (delete Mf.animationend.animation, delete Mf.animationiteration.animation, delete Mf.animationstart.animation), "TransitionEvent" in window || delete Mf.transitionend.transition);
    function Hh(e) {
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
    var y_ = Hh("animationend"), g_ = Hh("animationiteration"), __ = Hh("animationstart"), S_ = Hh("transitionend"), C_ = /* @__PURE__ */ new Map(), E_ = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Iu(e, t) {
      C_.set(e, t), mt(t, [e]);
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
        var g = Fi, w = t;
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
            w = "focus", g = co;
            break;
          case "focusout":
            w = "blur", g = co;
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
            g = sp;
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
            g = jh;
            break;
          case y_:
          case g_:
          case __:
            g = Rh;
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
            g = wf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Lh;
            break;
        }
        var T = (s & Aa) !== 0;
        {
          var P = !T && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", U = vx(a, y, i.type, T, P);
          if (U.length > 0) {
            var Y = new g(y, w, null, i, l);
            e.push({
              event: Y,
              listeners: U
            });
          }
        }
      }
    }
    sx(), H(), ec(), ix(), tg();
    function fx(e, t, a, i, l, s, d) {
      cx(e, t, a, i, l, s);
      var y = (s & Ld) === 0;
      y && (z(e, t, a, i, l), jn(e, t, a, i, l), ux(e, t, a, i, l), Ph(e, t, a, i, l));
    }
    var Sp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], ug = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Sp));
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
        for (var w = 0; w < t.length; w++) {
          var T = t[w], P = T.instance, U = T.currentTarget, Y = T.listener;
          if (P !== i && e.isPropagationStopped())
            return;
          x_(e, Y, U), i = P;
        }
    }
    function w_(e, t) {
      for (var a = (t & Aa) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, d = l.listeners;
        dx(s, d, a);
      }
      _s();
    }
    function px(e, t, a, i, l) {
      var s = Md(a), d = [];
      fx(d, e, i, a, s, t), w_(d, t);
    }
    function wn(e, t) {
      ug.has(e) || h('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = $w(t), l = yx(e);
      i.has(l) || (b_(t, e, Oc, a), i.add(l));
    }
    function sg(e, t, a) {
      ug.has(e) && !t && h('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Aa), b_(a, e, i, t);
    }
    var $h = "_reactListening" + Math.random().toString(36).slice(2);
    function Cp(e) {
      if (!e[$h]) {
        e[$h] = !0, nt.forEach(function(a) {
          a !== "selectionchange" && (ug.has(a) || sg(a, !1, e), sg(a, !0, e));
        });
        var t = e.nodeType === to ? e : e.ownerDocument;
        t !== null && (t[$h] || (t[$h] = !0, sg("selectionchange", !1, t)));
      }
    }
    function b_(e, t, a, i, l) {
      var s = hr(e, t, a), d = void 0;
      gs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (d = !0), e = e, i ? d !== void 0 ? up(e, t, s, d) : sa(e, t, s) : d !== void 0 ? Uu(e, t, s, d) : Gs(e, t, s);
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
            if (g === A || g === I) {
              var w = y.stateNode.containerInfo;
              if (R_(w, d))
                break;
              if (g === I)
                for (var T = y.return; T !== null; ) {
                  var P = T.tag;
                  if (P === A || P === I) {
                    var U = T.stateNode.containerInfo;
                    if (R_(U, d))
                      return;
                  }
                  T = T.return;
                }
              for (; w !== null; ) {
                var Y = rc(w);
                if (Y === null)
                  return;
                var K = Y.tag;
                if (K === q || K === oe) {
                  y = s = Y;
                  continue e;
                }
                w = w.parentNode;
              }
            }
            y = y.return;
          }
        }
      }
      Xv(function() {
        return px(e, t, a, s);
      });
    }
    function Ep(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function vx(e, t, a, i, l, s) {
      for (var d = t !== null ? t + "Capture" : null, y = i ? d : t, g = [], w = e, T = null; w !== null; ) {
        var P = w, U = P.stateNode, Y = P.tag;
        if (Y === q && U !== null && (T = U, y !== null)) {
          var K = Uo(w, y);
          K != null && g.push(Ep(w, K, T));
        }
        if (l)
          break;
        w = w.return;
      }
      return g;
    }
    function Bh(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, d = s.stateNode, y = s.tag;
        if (y === q && d !== null) {
          var g = d, w = Uo(l, a);
          w != null && i.unshift(Ep(l, w, g));
          var T = Uo(l, t);
          T != null && i.push(Ep(l, T, g));
        }
        l = l.return;
      }
      return i;
    }
    function jf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== q);
      return e || null;
    }
    function hx(e, t) {
      for (var a = e, i = t, l = 0, s = a; s; s = jf(s))
        l++;
      for (var d = 0, y = i; y; y = jf(y))
        d++;
      for (; l - d > 0; )
        a = jf(a), l--;
      for (; d - l > 0; )
        i = jf(i), d--;
      for (var g = l; g--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = jf(a), i = jf(i);
      }
      return null;
    }
    function k_(e, t, a, i, l) {
      for (var s = t._reactName, d = [], y = a; y !== null && y !== i; ) {
        var g = y, w = g.alternate, T = g.stateNode, P = g.tag;
        if (w !== null && w === i)
          break;
        if (P === q && T !== null) {
          var U = T;
          if (l) {
            var Y = Uo(y, s);
            Y != null && d.unshift(Ep(y, Y, U));
          } else if (!l) {
            var K = Uo(y, s);
            K != null && d.push(Ep(y, K, U));
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
    var qa = !1, xp = "dangerouslySetInnerHTML", qh = "suppressContentEditableWarning", Vu = "suppressHydrationWarning", T_ = "autoFocus", tc = "children", nc = "style", Wh = "__html", fg, Yh, wp, D_, Gh, N_, O_;
    fg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Yh = function(e, t) {
      Td(e, t), Dc(e, t), Gv(e, t, {
        registrationNameDependencies: Ae,
        possibleRegistrationNames: dt
      });
    }, N_ = Un && !document.documentMode, wp = function(e, t, a) {
      if (!qa) {
        var i = Qh(a), l = Qh(t);
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
    }, Gh = function(e, t) {
      t === !1 ? h("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : h("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, O_ = function(e, t) {
      var a = e.namespaceURI === Zi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var gx = /\r\n?/g, _x = /\u0000|\uFFFD/g;
    function Qh(e) {
      tr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(gx, `
`).replace(_x, "");
    }
    function Kh(e, t, a, i) {
      var l = Qh(t), s = Qh(e);
      if (s !== l && (i && (qa || (qa = !0, h('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && xe))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function L_(e) {
      return e.nodeType === to ? e : e.ownerDocument;
    }
    function Sx() {
    }
    function Xh(e) {
      e.onclick = Sx;
    }
    function Cx(e, t, a, i, l) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var d = i[s];
          if (s === nc)
            d && Object.freeze(d), Hv(t, d);
          else if (s === xp) {
            var y = d ? d[Wh] : void 0;
            y != null && Nv(t, y);
          } else if (s === tc)
            if (typeof d == "string") {
              var g = e !== "textarea" || d !== "";
              g && gu(t, d);
            } else typeof d == "number" && gu(t, "" + d);
          else s === qh || s === Vu || s === T_ || (Ae.hasOwnProperty(s) ? d != null && (typeof d != "function" && Gh(s, d), s === "onScroll" && wn("scroll", t)) : d != null && Lr(t, s, d, l));
        }
    }
    function Ex(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], d = t[l + 1];
        s === nc ? Hv(e, d) : s === xp ? Nv(e, d) : s === tc ? gu(e, d) : Lr(e, s, d, i);
      }
    }
    function xx(e, t, a, i) {
      var l, s = L_(a), d, y = i;
      if (y === Zi && (y = Cd(e)), y === Zi) {
        if (l = jo(e, t), !l && e !== e.toLowerCase() && h("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var g = s.createElement("div");
          g.innerHTML = "<script><\/script>";
          var w = g.firstChild;
          d = g.removeChild(w);
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
      return y === Zi && !l && Object.prototype.toString.call(d) === "[object HTMLUnknownElement]" && !Or.call(fg, e) && (fg[e] = !0, h("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), d;
    }
    function wx(e, t) {
      return L_(t).createTextNode(e);
    }
    function bx(e, t, a, i) {
      var l = jo(t, a);
      Yh(t, a);
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
          for (var d = 0; d < Sp.length; d++)
            wn(Sp[d], e);
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
          ui(e, a), s = yu(e, a), wn("invalid", e);
          break;
        case "option":
          It(e, a), s = a;
          break;
        case "select":
          _l(e, a), s = ss(e, a), wn("invalid", e);
          break;
        case "textarea":
          gd(e, a), s = yd(e, a), wn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (kc(t, s), Cx(t, e, i, s, l), t) {
        case "input":
          li(e), G(e, a, !1);
          break;
        case "textarea":
          li(e), Tv(e);
          break;
        case "option":
          fn(e, a);
          break;
        case "select":
          hd(e, a);
          break;
        default:
          typeof s.onClick == "function" && Xh(e);
          break;
      }
    }
    function Rx(e, t, a, i, l) {
      Yh(t, i);
      var s = null, d, y;
      switch (t) {
        case "input":
          d = yu(e, a), y = yu(e, i), s = [];
          break;
        case "select":
          d = ss(e, a), y = ss(e, i), s = [];
          break;
        case "textarea":
          d = yd(e, a), y = yd(e, i), s = [];
          break;
        default:
          d = a, y = i, typeof d.onClick != "function" && typeof y.onClick == "function" && Xh(e);
          break;
      }
      kc(t, y);
      var g, w, T = null;
      for (g in d)
        if (!(y.hasOwnProperty(g) || !d.hasOwnProperty(g) || d[g] == null))
          if (g === nc) {
            var P = d[g];
            for (w in P)
              P.hasOwnProperty(w) && (T || (T = {}), T[w] = "");
          } else g === xp || g === tc || g === qh || g === Vu || g === T_ || (Ae.hasOwnProperty(g) ? s || (s = []) : (s = s || []).push(g, null));
      for (g in y) {
        var U = y[g], Y = d?.[g];
        if (!(!y.hasOwnProperty(g) || U === Y || U == null && Y == null))
          if (g === nc)
            if (U && Object.freeze(U), Y) {
              for (w in Y)
                Y.hasOwnProperty(w) && (!U || !U.hasOwnProperty(w)) && (T || (T = {}), T[w] = "");
              for (w in U)
                U.hasOwnProperty(w) && Y[w] !== U[w] && (T || (T = {}), T[w] = U[w]);
            } else
              T || (s || (s = []), s.push(g, T)), T = U;
          else if (g === xp) {
            var K = U ? U[Wh] : void 0, te = Y ? Y[Wh] : void 0;
            K != null && te !== K && (s = s || []).push(g, K);
          } else g === tc ? (typeof U == "string" || typeof U == "number") && (s = s || []).push(g, "" + U) : g === qh || g === Vu || (Ae.hasOwnProperty(g) ? (U != null && (typeof U != "function" && Gh(g, U), g === "onScroll" && wn("scroll", e)), !s && Y !== U && (s = [])) : (s = s || []).push(g, U));
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
          kv(e, l);
          break;
        case "select":
          wc(e, l);
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
      switch (y = jo(t, a), Yh(t, a), t) {
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
          for (var w = 0; w < Sp.length; w++)
            wn(Sp[w], e);
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
          ui(e, a), wn("invalid", e);
          break;
        case "option":
          It(e, a);
          break;
        case "select":
          _l(e, a), wn("invalid", e);
          break;
        case "textarea":
          gd(e, a), wn("invalid", e);
          break;
      }
      kc(t, a);
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
          if (K === tc)
            typeof te == "string" ? e.textContent !== te && (a[Vu] !== !0 && Kh(e.textContent, te, s, d), Y = [tc, te]) : typeof te == "number" && e.textContent !== "" + te && (a[Vu] !== !0 && Kh(e.textContent, te, s, d), Y = [tc, "" + te]);
          else if (Ae.hasOwnProperty(K))
            te != null && (typeof te != "function" && Gh(K, te), K === "onScroll" && wn("scroll", e));
          else if (d && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof y == "boolean") {
            var Me = void 0, lt = sn(K);
            if (a[Vu] !== !0) {
              if (!(K === qh || K === Vu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              K === "value" || K === "checked" || K === "selected")) {
                if (K === xp) {
                  var et = e.innerHTML, zt = te ? te[Wh] : void 0;
                  if (zt != null) {
                    var Lt = O_(e, zt);
                    Lt !== et && wp(K, et, Lt);
                  }
                } else if (K === nc) {
                  if (g.delete(K), N_) {
                    var $ = Uy(te);
                    Me = e.getAttribute("style"), $ !== Me && wp(K, Me, $);
                  }
                } else if (y && !F)
                  g.delete(K.toLowerCase()), Me = dl(e, K, te), te !== Me && wp(K, Me, te);
                else if (!_n(K, lt, y) && !nr(K, te, lt, y)) {
                  var ne = !1;
                  if (lt !== null)
                    g.delete(lt.attributeName), Me = bo(e, K, te, lt);
                  else {
                    var B = i;
                    if (B === Zi && (B = Cd(t)), B === Zi)
                      g.delete(K.toLowerCase());
                    else {
                      var ye = Tx(K);
                      ye !== null && ye !== K && (ne = !0, g.delete(ye)), g.delete(K);
                    }
                    Me = dl(e, K, te);
                  }
                  var $e = F;
                  !$e && te !== Me && !ne && wp(K, Me, te);
                }
              }
            }
          }
        }
      switch (d && // $FlowFixMe - Should be inferred as not undefined.
      g.size > 0 && a[Vu] !== !0 && D_(g), t) {
        case "input":
          li(e), G(e, a, !0);
          break;
        case "textarea":
          li(e), Tv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Xh(e);
          break;
      }
      return Y;
    }
    function Nx(e, t, a) {
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
    function Ox(e, t, a) {
      switch (t) {
        case "input":
          Z(e, a);
          return;
        case "textarea":
          Ly(e, a);
          return;
        case "select":
          md(e, a);
          return;
      }
    }
    var bp = function() {
    }, Rp = function() {
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
      Rp = function(e, t) {
        var a = bt({}, e || j_), i = {
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
          var g = y.tag, w = !!s + "|" + e + "|" + g;
          if (!A_[w]) {
            A_[w] = !0;
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
    var Jh = "suppressHydrationWarning", Zh = "$", em = "/$", kp = "$?", Tp = "$!", zx = "style", mg = null, yg = null;
    function Px(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case to:
        case xd: {
          t = i === to ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : Ed(null, "");
          break;
        }
        default: {
          var s = i === Pn ? e.parentNode : e, d = s.namespaceURI || null;
          t = s.tagName, a = Ed(d, t);
          break;
        }
      }
      {
        var y = t.toLowerCase(), g = Rp(null, y);
        return {
          namespace: a,
          ancestorInfo: g
        };
      }
    }
    function Fx(e, t, a) {
      {
        var i = e, l = Ed(i.namespace, t), s = Rp(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function n8(e) {
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
          var y = "" + t.children, g = Rp(d.ancestorInfo, e);
          bp(null, y, g);
        }
        s = d.namespace;
      }
      var w = xx(e, t, a, s);
      return Op(l, w), bg(w, t), w;
    }
    function $x(e, t) {
      e.appendChild(t);
    }
    function Bx(e, t, a, i, l) {
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
    function qx(e, t, a, i, l, s) {
      {
        var d = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var y = "" + i.children, g = Rp(d.ancestorInfo, t);
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
      var s = wx(e, t);
      return Op(i, s), s;
    }
    function Yx() {
      var e = window.event;
      return e === void 0 ? Va : Cf(e.type);
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
      kx(e, t, a, i, l), bg(e, l);
    }
    function z_(e) {
      gu(e, "");
    }
    function Zx(e, t, a) {
      e.nodeValue = a;
    }
    function ew(e, t) {
      e.appendChild(t);
    }
    function tw(e, t) {
      var a;
      e.nodeType === Pn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Xh(a);
    }
    function nw(e, t, a) {
      e.insertBefore(t, a);
    }
    function rw(e, t, a) {
      e.nodeType === Pn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function aw(e, t) {
      e.removeChild(t);
    }
    function iw(e, t) {
      e.nodeType === Pn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Cg(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === Pn) {
          var s = l.data;
          if (s === em)
            if (i === 0) {
              e.removeChild(l), Il(t);
              return;
            } else
              i--;
          else (s === Zh || s === kp || s === Tp) && i++;
        }
        a = l;
      } while (a);
      Il(t);
    }
    function ow(e, t) {
      e.nodeType === Pn ? Cg(e.parentNode, t) : e.nodeType === ea && Cg(e, t), Il(e);
    }
    function lw(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function uw(e) {
      e.nodeValue = "";
    }
    function sw(e, t) {
      e = e;
      var a = t[zx], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Rc("display", i);
    }
    function cw(e, t) {
      e.nodeValue = t;
    }
    function fw(e) {
      e.nodeType === ea ? e.textContent = "" : e.nodeType === to && e.documentElement && e.removeChild(e.documentElement);
    }
    function dw(e, t, a) {
      return e.nodeType !== ea || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function pw(e, t) {
      return t === "" || e.nodeType !== eo ? null : e;
    }
    function vw(e) {
      return e.nodeType !== Pn ? null : e;
    }
    function P_(e) {
      return e.data === kp;
    }
    function Eg(e) {
      return e.data === Tp;
    }
    function hw(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function mw(e, t) {
      e._reactRetry = t;
    }
    function tm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ea || t === eo)
          break;
        if (t === Pn) {
          var a = e.data;
          if (a === Zh || a === Tp || a === kp)
            break;
          if (a === em)
            return null;
        }
      }
      return e;
    }
    function Dp(e) {
      return tm(e.nextSibling);
    }
    function yw(e) {
      return tm(e.firstChild);
    }
    function gw(e) {
      return tm(e.firstChild);
    }
    function _w(e) {
      return tm(e.nextSibling);
    }
    function Sw(e, t, a, i, l, s, d) {
      Op(s, e), bg(e, a);
      var y;
      {
        var g = l;
        y = g.namespace;
      }
      var w = (s.mode & Dt) !== at;
      return Dx(e, t, a, y, i, w, d);
    }
    function Cw(e, t, a, i) {
      return Op(a, e), a.mode & Dt, Nx(e, t);
    }
    function Ew(e, t) {
      Op(t, e);
    }
    function xw(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Pn) {
          var i = t.data;
          if (i === em) {
            if (a === 0)
              return Dp(t);
            a--;
          } else (i === Zh || i === Tp || i === kp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function F_(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Pn) {
          var i = t.data;
          if (i === Zh || i === Tp || i === kp) {
            if (a === 0)
              return t;
            a--;
          } else i === em && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function ww(e) {
      Il(e);
    }
    function bw(e) {
      Il(e);
    }
    function Rw(e) {
      return e !== "head" && e !== "body";
    }
    function kw(e, t, a, i) {
      var l = !0;
      Kh(t.nodeValue, a, i, l);
    }
    function Tw(e, t, a, i, l, s) {
      if (t[Jh] !== !0) {
        var d = !0;
        Kh(i.nodeValue, l, s, d);
      }
    }
    function Dw(e, t) {
      t.nodeType === ea ? dg(e, t) : t.nodeType === Pn || pg(e, t);
    }
    function Nw(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === ea ? dg(a, t) : t.nodeType === Pn || pg(a, t));
      }
    }
    function Ow(e, t, a, i, l) {
      (l || t[Jh] !== !0) && (i.nodeType === ea ? dg(a, i) : i.nodeType === Pn || pg(a, i));
    }
    function Lw(e, t, a) {
      vg(e, t);
    }
    function Mw(e, t) {
      hg(e, t);
    }
    function jw(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && vg(i, t);
      }
    }
    function Aw(e, t) {
      {
        var a = e.parentNode;
        a !== null && hg(a, t);
      }
    }
    function Uw(e, t, a, i, l, s) {
      (s || t[Jh] !== !0) && vg(a, i);
    }
    function zw(e, t, a, i, l) {
      (l || t[Jh] !== !0) && hg(a, i);
    }
    function Pw(e) {
      h("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Fw(e) {
      Cp(e);
    }
    var Af = Math.random().toString(36).slice(2), Uf = "__reactFiber$" + Af, xg = "__reactProps$" + Af, Np = "__reactContainer$" + Af, wg = "__reactEvents$" + Af, Iw = "__reactListeners$" + Af, Vw = "__reactHandles$" + Af;
    function Hw(e) {
      delete e[Uf], delete e[xg], delete e[wg], delete e[Iw], delete e[Vw];
    }
    function Op(e, t) {
      t[Uf] = e;
    }
    function nm(e, t) {
      t[Np] = e;
    }
    function I_(e) {
      e[Np] = null;
    }
    function Lp(e) {
      return !!e[Np];
    }
    function rc(e) {
      var t = e[Uf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Np] || a[Uf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = F_(e); l !== null; ) {
              var s = l[Uf];
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
      var t = e[Uf] || e[Np];
      return t && (t.tag === q || t.tag === oe || t.tag === he || t.tag === A) ? t : null;
    }
    function zf(e) {
      if (e.tag === q || e.tag === oe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function rm(e) {
      return e[xg] || null;
    }
    function bg(e, t) {
      e[xg] = t;
    }
    function $w(e) {
      var t = e[wg];
      return t === void 0 && (t = e[wg] = /* @__PURE__ */ new Set()), t;
    }
    var V_ = {}, H_ = p.ReactDebugCurrentFrame;
    function am(e) {
      if (e) {
        var t = e._owner, a = Ki(e.type, e._source, t ? t.type : null);
        H_.setExtraStackFrame(a);
      } else
        H_.setExtraStackFrame(null);
    }
    function po(e, t, a, i, l) {
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
            } catch (w) {
              y = w;
            }
            y && !(y instanceof Error) && (am(l), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, d, typeof y), am(null)), y instanceof Error && !(y.message in V_) && (V_[y.message] = !0, am(l), h("Failed %s type: %s", a, y.message), am(null));
          }
      }
    }
    var Rg = [], im;
    im = [];
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
      t !== im[Wl] && h("Unexpected Fiber popped."), e.current = Rg[Wl], Rg[Wl] = null, im[Wl] = null, Wl--;
    }
    function da(e, t, a) {
      Wl++, Rg[Wl] = e.current, im[Wl] = a, e.current = t;
    }
    var kg;
    kg = {};
    var hi = {};
    Object.freeze(hi);
    var Yl = $u(hi), el = $u(!1), Tg = hi;
    function Pf(e, t, a) {
      return a && tl(t) ? Tg : Yl.current;
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
          return hi;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var d in i)
          s[d] = t[d];
        {
          var y = gt(e) || "Unknown";
          po(i, s, "context", y);
        }
        return l && $_(e, t, s), s;
      }
    }
    function om() {
      return el.current;
    }
    function tl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function lm(e) {
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
            var s = gt(e) || "Unknown";
            kg[s] || (kg[s] = !0, h("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var d = i.getChildContext();
        for (var y in d)
          if (!(y in l))
            throw new Error((gt(e) || "Unknown") + '.getChildContext(): key "' + y + '" is not defined in childContextTypes.');
        {
          var g = gt(e) || "Unknown";
          po(l, d, "child context", g);
        }
        return bt({}, a, d);
      }
    }
    function um(e) {
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
    function Bw(e) {
      {
        if (!Rl(e) || e.tag !== b)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case A:
              return t.stateNode.context;
            case b: {
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
    var Bu = 0, sm = 1, Gl = null, Ng = !1, Og = !1;
    function Y_(e) {
      Gl === null ? Gl = [e] : Gl.push(e);
    }
    function qw(e) {
      Ng = !0, Y_(e);
    }
    function G_() {
      Ng && qu();
    }
    function qu() {
      if (!Og && Gl !== null) {
        Og = !0;
        var e = 0, t = $a();
        try {
          var a = !0, i = Gl;
          for ($n(zr); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          Gl = null, Ng = !1;
        } catch (s) {
          throw Gl !== null && (Gl = Gl.slice(e + 1)), Ad(Es, qu), s;
        } finally {
          $n(t), Og = !1;
        }
      }
      return null;
    }
    var If = [], Vf = 0, cm = null, fm = 0, Ii = [], Vi = 0, ac = null, Ql = 1, Kl = "";
    function Ww(e) {
      return oc(), (e.flags & Ni) !== rt;
    }
    function Yw(e) {
      return oc(), fm;
    }
    function Gw() {
      var e = Kl, t = Ql, a = t & ~Qw(t);
      return a.toString(32) + e;
    }
    function ic(e, t) {
      oc(), If[Vf++] = fm, If[Vf++] = cm, cm = e, fm = t;
    }
    function Q_(e, t, a) {
      oc(), Ii[Vi++] = Ql, Ii[Vi++] = Kl, Ii[Vi++] = ac, ac = e;
      var i = Ql, l = Kl, s = dm(i) - 1, d = i & ~(1 << s), y = a + 1, g = dm(t) + s;
      if (g > 30) {
        var w = s - s % 5, T = (1 << w) - 1, P = (d & T).toString(32), U = d >> w, Y = s - w, K = dm(t) + Y, te = y << Y, Me = te | U, lt = P + l;
        Ql = 1 << K | Me, Kl = lt;
      } else {
        var et = y << s, zt = et | d, Lt = l;
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
    function dm(e) {
      return 32 - Vn(e);
    }
    function Qw(e) {
      return 1 << dm(e) - 1;
    }
    function Mg(e) {
      for (; e === cm; )
        cm = If[--Vf], If[Vf] = null, fm = If[--Vf], If[Vf] = null;
      for (; e === ac; )
        ac = Ii[--Vi], Ii[Vi] = null, Kl = Ii[--Vi], Ii[Vi] = null, Ql = Ii[--Vi], Ii[Vi] = null;
    }
    function Kw() {
      return oc(), ac !== null ? {
        id: Ql,
        overflow: Kl
      } : null;
    }
    function Xw(e, t) {
      oc(), Ii[Vi++] = Ql, Ii[Vi++] = Kl, Ii[Vi++] = ac, Ql = t.id, Kl = t.overflow, ac = e;
    }
    function oc() {
      Hr() || h("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Vr = null, Hi = null, vo = !1, lc = !1, Wu = null;
    function Jw() {
      vo && h("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function K_() {
      lc = !0;
    }
    function Zw() {
      return lc;
    }
    function eb(e) {
      var t = e.stateNode.containerInfo;
      return Hi = gw(t), Vr = e, vo = !0, Wu = null, lc = !1, !0;
    }
    function tb(e, t, a) {
      return Hi = _w(t), Vr = e, vo = !0, Wu = null, lc = !1, a !== null && Xw(e, a), !0;
    }
    function X_(e, t) {
      switch (e.tag) {
        case A: {
          Dw(e.stateNode.containerInfo, t);
          break;
        }
        case q: {
          var a = (e.mode & Dt) !== at;
          Ow(
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
          i.dehydrated !== null && Nw(i.dehydrated, t);
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
          case A: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case q:
                var i = t.type;
                t.pendingProps, Lw(a, i);
                break;
              case oe:
                var l = t.pendingProps;
                Mw(a, l);
                break;
            }
            break;
          }
          case q: {
            var s = e.type, d = e.memoizedProps, y = e.stateNode;
            switch (t.tag) {
              case q: {
                var g = t.type, w = t.pendingProps, T = (e.mode & Dt) !== at;
                Uw(
                  s,
                  d,
                  y,
                  g,
                  w,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
              case oe: {
                var P = t.pendingProps, U = (e.mode & Dt) !== at;
                zw(
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
          case he: {
            var Y = e.memoizedState, K = Y.dehydrated;
            if (K !== null) switch (t.tag) {
              case q:
                var te = t.type;
                t.pendingProps, jw(K, te);
                break;
              case oe:
                var Me = t.pendingProps;
                Aw(K, Me);
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
        case q: {
          var a = e.type;
          e.pendingProps;
          var i = dw(t, a);
          return i !== null ? (e.stateNode = i, Vr = e, Hi = yw(i), !0) : !1;
        }
        case oe: {
          var l = e.pendingProps, s = pw(t, l);
          return s !== null ? (e.stateNode = s, Vr = e, Hi = null, !0) : !1;
        }
        case he: {
          var d = vw(t);
          if (d !== null) {
            var y = {
              dehydrated: d,
              treeContext: Kw(),
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
      return (e.mode & Dt) !== at && (e.flags & tt) === rt;
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
          Ag(e) && (jg(Vr, e), Ug()), t = Dp(a);
          var i = Vr;
          if (!t || !e2(e, t)) {
            Z_(Vr, e), vo = !1, Vr = e;
            return;
          }
          J_(i, a);
        }
      }
    }
    function nb(e, t, a) {
      var i = e.stateNode, l = !lc, s = Sw(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function rb(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Cw(t, a, e);
      if (i) {
        var l = Vr;
        if (l !== null)
          switch (l.tag) {
            case A: {
              var s = l.stateNode.containerInfo, d = (l.mode & Dt) !== at;
              kw(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                d
              );
              break;
            }
            case q: {
              var y = l.type, g = l.memoizedProps, w = l.stateNode, T = (l.mode & Dt) !== at;
              Tw(
                y,
                g,
                w,
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
    function ab(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Ew(a, e);
    }
    function ib(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return xw(a);
    }
    function t2(e) {
      for (var t = e.return; t !== null && t.tag !== q && t.tag !== A && t.tag !== he; )
        t = t.return;
      Vr = t;
    }
    function pm(e) {
      if (e !== Vr)
        return !1;
      if (!vo)
        return t2(e), vo = !0, !1;
      if (e.tag !== A && (e.tag !== q || Rw(e.type) && !gg(e.type, e.memoizedProps))) {
        var t = Hi;
        if (t)
          if (Ag(e))
            n2(e), Ug();
          else
            for (; t; )
              J_(e, t), t = Dp(t);
      }
      return t2(e), e.tag === he ? Hi = ib(e) : Hi = Vr ? Dp(e.stateNode) : null, !0;
    }
    function ob() {
      return vo && Hi !== null;
    }
    function n2(e) {
      for (var t = Hi; t; )
        X_(e, t), t = Dp(t);
    }
    function Hf() {
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
    var lb = p.ReactCurrentBatchConfig, ub = null;
    function sb() {
      return lb.transition;
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
      var cb = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & rn && (t = a), a = a.return;
        return t;
      }, uc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Mp = [], jp = [], Ap = [], Up = [], zp = [], Pp = [], sc = /* @__PURE__ */ new Set();
      ho.recordUnsafeLifecycleWarnings = function(e, t) {
        sc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Mp.push(e), e.mode & rn && typeof t.UNSAFE_componentWillMount == "function" && jp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ap.push(e), e.mode & rn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Up.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && zp.push(e), e.mode & rn && typeof t.UNSAFE_componentWillUpdate == "function" && Pp.push(e));
      }, ho.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Mp.length > 0 && (Mp.forEach(function(U) {
          e.add(gt(U) || "Component"), sc.add(U.type);
        }), Mp = []);
        var t = /* @__PURE__ */ new Set();
        jp.length > 0 && (jp.forEach(function(U) {
          t.add(gt(U) || "Component"), sc.add(U.type);
        }), jp = []);
        var a = /* @__PURE__ */ new Set();
        Ap.length > 0 && (Ap.forEach(function(U) {
          a.add(gt(U) || "Component"), sc.add(U.type);
        }), Ap = []);
        var i = /* @__PURE__ */ new Set();
        Up.length > 0 && (Up.forEach(function(U) {
          i.add(gt(U) || "Component"), sc.add(U.type);
        }), Up = []);
        var l = /* @__PURE__ */ new Set();
        zp.length > 0 && (zp.forEach(function(U) {
          l.add(gt(U) || "Component"), sc.add(U.type);
        }), zp = []);
        var s = /* @__PURE__ */ new Set();
        if (Pp.length > 0 && (Pp.forEach(function(U) {
          s.add(gt(U) || "Component"), sc.add(U.type);
        }), Pp = []), t.size > 0) {
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
          var w = uc(e);
          E(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, w);
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
          var P = uc(l);
          E(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, P);
        }
      };
      var vm = /* @__PURE__ */ new Map(), a2 = /* @__PURE__ */ new Set();
      ho.recordLegacyContextWarning = function(e, t) {
        var a = cb(e);
        if (a === null) {
          h("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!a2.has(e.type)) {
          var i = vm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], vm.set(a, i)), i.push(e));
        }
      }, ho.flushLegacyContextWarning = function() {
        vm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(gt(s) || "Component"), a2.add(s.type);
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
        Mp = [], jp = [], Ap = [], Up = [], zp = [], Pp = [], vm = /* @__PURE__ */ new Map();
      };
    }
    var Fg, Ig, Vg, Hg, $g, i2 = function(e, t) {
    };
    Fg = !1, Ig = !1, Vg = {}, Hg = {}, $g = {}, i2 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = gt(t) || "Component";
        Hg[a] || (Hg[a] = !0, h('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function fb(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Fp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & rn || ee) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== b) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !fb(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var l = gt(e) || "Component";
          Vg[l] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, i), Vg[l] = !0);
        }
        if (a._owner) {
          var s = a._owner, d;
          if (s) {
            var y = s;
            if (y.tag !== b)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            d = y.stateNode;
          }
          if (!d)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var g = d;
          gi(i, "ref");
          var w = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === w)
            return t.ref;
          var T = function(P) {
            var U = g.refs;
            P === null ? delete U[w] : U[w] = P;
          };
          return T._stringRef = w, T;
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
    function hm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function mm(e) {
      {
        var t = gt(e) || "Component";
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
      function t($, ne) {
        if (e) {
          var B = $.deletions;
          B === null ? ($.deletions = [ne], $.flags |= Ua) : B.push(ne);
        }
      }
      function a($, ne) {
        if (!e)
          return null;
        for (var B = ne; B !== null; )
          t($, B), B = B.sibling;
        return null;
      }
      function i($, ne) {
        for (var B = /* @__PURE__ */ new Map(), ye = ne; ye !== null; )
          ye.key !== null ? B.set(ye.key, ye) : B.set(ye.index, ye), ye = ye.sibling;
        return B;
      }
      function l($, ne) {
        var B = gc($, ne);
        return B.index = 0, B.sibling = null, B;
      }
      function s($, ne, B) {
        if ($.index = B, !e)
          return $.flags |= Ni, ne;
        var ye = $.alternate;
        if (ye !== null) {
          var $e = ye.index;
          return $e < ne ? ($.flags |= Cn, ne) : $e;
        } else
          return $.flags |= Cn, ne;
      }
      function d($) {
        return e && $.alternate === null && ($.flags |= Cn), $;
      }
      function y($, ne, B, ye) {
        if (ne === null || ne.tag !== oe) {
          var $e = P1(B, $.mode, ye);
          return $e.return = $, $e;
        } else {
          var Ue = l(ne, B);
          return Ue.return = $, Ue;
        }
      }
      function g($, ne, B, ye) {
        var $e = B.type;
        if ($e === Si)
          return T($, ne, B.props.children, ye, B.key);
        if (ne !== null && (ne.elementType === $e || // Keep this check inline so it only runs on the false path:
        dC(ne, B) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof $e == "object" && $e !== null && $e.$$typeof === _t && o2($e) === ne.type)) {
          var Ue = l(ne, B.props);
          return Ue.ref = Fp($, ne, B), Ue.return = $, Ue._debugSource = B._source, Ue._debugOwner = B._owner, Ue;
        }
        var vt = z1(B, $.mode, ye);
        return vt.ref = Fp($, ne, B), vt.return = $, vt;
      }
      function w($, ne, B, ye) {
        if (ne === null || ne.tag !== I || ne.stateNode.containerInfo !== B.containerInfo || ne.stateNode.implementation !== B.implementation) {
          var $e = F1(B, $.mode, ye);
          return $e.return = $, $e;
        } else {
          var Ue = l(ne, B.children || []);
          return Ue.return = $, Ue;
        }
      }
      function T($, ne, B, ye, $e) {
        if (ne === null || ne.tag !== ie) {
          var Ue = rs(B, $.mode, ye, $e);
          return Ue.return = $, Ue;
        } else {
          var vt = l(ne, B);
          return vt.return = $, vt;
        }
      }
      function P($, ne, B) {
        if (typeof ne == "string" && ne !== "" || typeof ne == "number") {
          var ye = P1("" + ne, $.mode, B);
          return ye.return = $, ye;
        }
        if (typeof ne == "object" && ne !== null) {
          switch (ne.$$typeof) {
            case Mr: {
              var $e = z1(ne, $.mode, B);
              return $e.ref = Fp($, null, ne), $e.return = $, $e;
            }
            case sr: {
              var Ue = F1(ne, $.mode, B);
              return Ue.return = $, Ue;
            }
            case _t: {
              var vt = ne._payload, Ct = ne._init;
              return P($, Ct(vt), B);
            }
          }
          if (kt(ne) || xt(ne)) {
            var on = rs(ne, $.mode, B, null);
            return on.return = $, on;
          }
          hm($, ne);
        }
        return typeof ne == "function" && mm($), null;
      }
      function U($, ne, B, ye) {
        var $e = ne !== null ? ne.key : null;
        if (typeof B == "string" && B !== "" || typeof B == "number")
          return $e !== null ? null : y($, ne, "" + B, ye);
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case Mr:
              return B.key === $e ? g($, ne, B, ye) : null;
            case sr:
              return B.key === $e ? w($, ne, B, ye) : null;
            case _t: {
              var Ue = B._payload, vt = B._init;
              return U($, ne, vt(Ue), ye);
            }
          }
          if (kt(B) || xt(B))
            return $e !== null ? null : T($, ne, B, ye, null);
          hm($, B);
        }
        return typeof B == "function" && mm($), null;
      }
      function Y($, ne, B, ye, $e) {
        if (typeof ye == "string" && ye !== "" || typeof ye == "number") {
          var Ue = $.get(B) || null;
          return y(ne, Ue, "" + ye, $e);
        }
        if (typeof ye == "object" && ye !== null) {
          switch (ye.$$typeof) {
            case Mr: {
              var vt = $.get(ye.key === null ? B : ye.key) || null;
              return g(ne, vt, ye, $e);
            }
            case sr: {
              var Ct = $.get(ye.key === null ? B : ye.key) || null;
              return w(ne, Ct, ye, $e);
            }
            case _t:
              var on = ye._payload, Wt = ye._init;
              return Y($, ne, B, Wt(on), $e);
          }
          if (kt(ye) || xt(ye)) {
            var er = $.get(B) || null;
            return T(ne, er, ye, $e, null);
          }
          hm(ne, ye);
        }
        return typeof ye == "function" && mm(ne), null;
      }
      function K($, ne, B) {
        {
          if (typeof $ != "object" || $ === null)
            return ne;
          switch ($.$$typeof) {
            case Mr:
            case sr:
              i2($, B);
              var ye = $.key;
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
              var $e = $._payload, Ue = $._init;
              K(Ue($e), ne, B);
              break;
          }
        }
        return ne;
      }
      function te($, ne, B, ye) {
        for (var $e = null, Ue = 0; Ue < B.length; Ue++) {
          var vt = B[Ue];
          $e = K(vt, $e, $);
        }
        for (var Ct = null, on = null, Wt = ne, er = 0, Yt = 0, Wn = null; Wt !== null && Yt < B.length; Yt++) {
          Wt.index > Yt ? (Wn = Wt, Wt = null) : Wn = Wt.sibling;
          var va = U($, Wt, B[Yt], ye);
          if (va === null) {
            Wt === null && (Wt = Wn);
            break;
          }
          e && Wt && va.alternate === null && t($, Wt), er = s(va, er, Yt), on === null ? Ct = va : on.sibling = va, on = va, Wt = Wn;
        }
        if (Yt === B.length) {
          if (a($, Wt), Hr()) {
            var Qr = Yt;
            ic($, Qr);
          }
          return Ct;
        }
        if (Wt === null) {
          for (; Yt < B.length; Yt++) {
            var yi = P($, B[Yt], ye);
            yi !== null && (er = s(yi, er, Yt), on === null ? Ct = yi : on.sibling = yi, on = yi);
          }
          if (Hr()) {
            var Da = Yt;
            ic($, Da);
          }
          return Ct;
        }
        for (var Na = i($, Wt); Yt < B.length; Yt++) {
          var ha = Y(Na, $, Yt, B[Yt], ye);
          ha !== null && (e && ha.alternate !== null && Na.delete(ha.key === null ? Yt : ha.key), er = s(ha, er, Yt), on === null ? Ct = ha : on.sibling = ha, on = ha);
        }
        if (e && Na.forEach(function(ld) {
          return t($, ld);
        }), Hr()) {
          var ru = Yt;
          ic($, ru);
        }
        return Ct;
      }
      function Me($, ne, B, ye) {
        var $e = xt(B);
        if (typeof $e != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          B[Symbol.toStringTag] === "Generator" && (Ig || h("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Ig = !0), B.entries === $e && (Fg || h("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Fg = !0);
          var Ue = $e.call(B);
          if (Ue)
            for (var vt = null, Ct = Ue.next(); !Ct.done; Ct = Ue.next()) {
              var on = Ct.value;
              vt = K(on, vt, $);
            }
        }
        var Wt = $e.call(B);
        if (Wt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var er = null, Yt = null, Wn = ne, va = 0, Qr = 0, yi = null, Da = Wt.next(); Wn !== null && !Da.done; Qr++, Da = Wt.next()) {
          Wn.index > Qr ? (yi = Wn, Wn = null) : yi = Wn.sibling;
          var Na = U($, Wn, Da.value, ye);
          if (Na === null) {
            Wn === null && (Wn = yi);
            break;
          }
          e && Wn && Na.alternate === null && t($, Wn), va = s(Na, va, Qr), Yt === null ? er = Na : Yt.sibling = Na, Yt = Na, Wn = yi;
        }
        if (Da.done) {
          if (a($, Wn), Hr()) {
            var ha = Qr;
            ic($, ha);
          }
          return er;
        }
        if (Wn === null) {
          for (; !Da.done; Qr++, Da = Wt.next()) {
            var ru = P($, Da.value, ye);
            ru !== null && (va = s(ru, va, Qr), Yt === null ? er = ru : Yt.sibling = ru, Yt = ru);
          }
          if (Hr()) {
            var ld = Qr;
            ic($, ld);
          }
          return er;
        }
        for (var yv = i($, Wn); !Da.done; Qr++, Da = Wt.next()) {
          var sl = Y(yv, $, Qr, Da.value, ye);
          sl !== null && (e && sl.alternate !== null && yv.delete(sl.key === null ? Qr : sl.key), va = s(sl, va, Qr), Yt === null ? er = sl : Yt.sibling = sl, Yt = sl);
        }
        if (e && yv.forEach(function(zT) {
          return t($, zT);
        }), Hr()) {
          var UT = Qr;
          ic($, UT);
        }
        return er;
      }
      function lt($, ne, B, ye) {
        if (ne !== null && ne.tag === oe) {
          a($, ne.sibling);
          var $e = l(ne, B);
          return $e.return = $, $e;
        }
        a($, ne);
        var Ue = P1(B, $.mode, ye);
        return Ue.return = $, Ue;
      }
      function et($, ne, B, ye) {
        for (var $e = B.key, Ue = ne; Ue !== null; ) {
          if (Ue.key === $e) {
            var vt = B.type;
            if (vt === Si) {
              if (Ue.tag === ie) {
                a($, Ue.sibling);
                var Ct = l(Ue, B.props.children);
                return Ct.return = $, Ct._debugSource = B._source, Ct._debugOwner = B._owner, Ct;
              }
            } else if (Ue.elementType === vt || // Keep this check inline so it only runs on the false path:
            dC(Ue, B) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof vt == "object" && vt !== null && vt.$$typeof === _t && o2(vt) === Ue.type) {
              a($, Ue.sibling);
              var on = l(Ue, B.props);
              return on.ref = Fp($, Ue, B), on.return = $, on._debugSource = B._source, on._debugOwner = B._owner, on;
            }
            a($, Ue);
            break;
          } else
            t($, Ue);
          Ue = Ue.sibling;
        }
        if (B.type === Si) {
          var Wt = rs(B.props.children, $.mode, ye, B.key);
          return Wt.return = $, Wt;
        } else {
          var er = z1(B, $.mode, ye);
          return er.ref = Fp($, ne, B), er.return = $, er;
        }
      }
      function zt($, ne, B, ye) {
        for (var $e = B.key, Ue = ne; Ue !== null; ) {
          if (Ue.key === $e)
            if (Ue.tag === I && Ue.stateNode.containerInfo === B.containerInfo && Ue.stateNode.implementation === B.implementation) {
              a($, Ue.sibling);
              var vt = l(Ue, B.children || []);
              return vt.return = $, vt;
            } else {
              a($, Ue);
              break;
            }
          else
            t($, Ue);
          Ue = Ue.sibling;
        }
        var Ct = F1(B, $.mode, ye);
        return Ct.return = $, Ct;
      }
      function Lt($, ne, B, ye) {
        var $e = typeof B == "object" && B !== null && B.type === Si && B.key === null;
        if ($e && (B = B.props.children), typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case Mr:
              return d(et($, ne, B, ye));
            case sr:
              return d(zt($, ne, B, ye));
            case _t:
              var Ue = B._payload, vt = B._init;
              return Lt($, ne, vt(Ue), ye);
          }
          if (kt(B))
            return te($, ne, B, ye);
          if (xt(B))
            return Me($, ne, B, ye);
          hm($, B);
        }
        return typeof B == "string" && B !== "" || typeof B == "number" ? d(lt($, ne, "" + B, ye)) : (typeof B == "function" && mm($), a($, ne));
      }
      return Lt;
    }
    var $f = l2(!0), u2 = l2(!1);
    function db(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = gc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = gc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function pb(e, t) {
      for (var a = e.child; a !== null; )
        eT(a, t), a = a.sibling;
    }
    var Bg = $u(null), qg;
    qg = {};
    var ym = null, Bf = null, Wg = null, gm = !1;
    function _m() {
      ym = null, Bf = null, Wg = null, gm = !1;
    }
    function s2() {
      gm = !0;
    }
    function c2() {
      gm = !1;
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
        if (Fl(i.childLanes, t) ? l !== null && !Fl(l.childLanes, t) && (l.childLanes = wt(l.childLanes, t)) : (i.childLanes = wt(i.childLanes, t), l !== null && (l.childLanes = wt(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && h("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function vb(e, t, a) {
      hb(e, t, a);
    }
    function hb(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, s = i.dependencies;
        if (s !== null) {
          l = i.child;
          for (var d = s.firstContext; d !== null; ) {
            if (d.context === t) {
              if (i.tag === b) {
                var y = Us(a), g = Xl(ln, y);
                g.tag = Cm;
                var w = i.updateQueue;
                if (w !== null) {
                  var T = w.shared, P = T.pending;
                  P === null ? g.next = g : (g.next = P.next, P.next = g), T.pending = g;
                }
              }
              i.lanes = wt(i.lanes, a);
              var U = i.alternate;
              U !== null && (U.lanes = wt(U.lanes, a)), Gg(i.return, a, e), s.lanes = wt(s.lanes, a);
              break;
            }
            d = d.next;
          }
        } else if (i.tag === ve)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === ut) {
          var Y = i.return;
          if (Y === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          Y.lanes = wt(Y.lanes, a);
          var K = Y.alternate;
          K !== null && (K.lanes = wt(K.lanes, a)), Gg(Y, a, e), l = i.sibling;
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
    function qf(e, t) {
      ym = e, Bf = null, Wg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (la(a.lanes, t) && ev(), a.firstContext = null);
      }
    }
    function lr(e) {
      gm && h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Wg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Bf === null) {
          if (ym === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Bf = a, ym.dependencies = {
            lanes: ue,
            firstContext: a
          };
        } else
          Bf = Bf.next = a;
      }
      return t;
    }
    var cc = null;
    function Qg(e) {
      cc === null ? cc = [e] : cc.push(e);
    }
    function mb() {
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
      return l === null ? (a.next = a, Qg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, Sm(e, i);
    }
    function yb(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, Qg(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function gb(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Qg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, Sm(e, i);
    }
    function Wa(e, t) {
      return Sm(e, t);
    }
    var _b = Sm;
    function Sm(e, t) {
      e.lanes = wt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = wt(a.lanes, t)), a === null && (e.flags & (Cn | na)) !== rt && uC(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = wt(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = wt(a.childLanes, t) : (l.flags & (Cn | na)) !== rt && uC(e), i = l, l = l.return;
      if (i.tag === A) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var p2 = 0, v2 = 1, Cm = 2, Kg = 3, Em = !1, Xg, xm;
    Xg = !1, xm = null;
    function Jg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ue
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
      if (xm === l && !Xg && (h("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Xg = !0), yk()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, _b(e, a);
      } else
        return gb(e, l, t, a);
    }
    function wm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (Jd(a)) {
          var s = l.lanes;
          s = ep(s, e.pendingLanes);
          var d = wt(s, a);
          l.lanes = d, yf(e, d);
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
              var w = {
                eventTime: g.eventTime,
                lane: g.lane,
                tag: g.tag,
                payload: g.payload,
                callback: g.callback,
                next: null
              };
              d === null ? s = d = w : (d.next = w, d = w), g = g.next;
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
    function Sb(e, t, a, i, l, s) {
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
          e.flags = e.flags & ~rr | tt;
        // Intentional fallthrough
        case p2: {
          var g = a.payload, w;
          if (typeof g == "function") {
            s2(), w = g.call(s, i, l);
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
            w = g;
          return w == null ? i : bt({}, i, w);
        }
        case Cm:
          return Em = !0, i;
      }
      return i;
    }
    function bm(e, t, a, i) {
      var l = e.updateQueue;
      Em = !1, xm = l.shared;
      var s = l.firstBaseUpdate, d = l.lastBaseUpdate, y = l.shared.pending;
      if (y !== null) {
        l.shared.pending = null;
        var g = y, w = g.next;
        g.next = null, d === null ? s = w : d.next = w, d = g;
        var T = e.alternate;
        if (T !== null) {
          var P = T.updateQueue, U = P.lastBaseUpdate;
          U !== d && (U === null ? P.firstBaseUpdate = w : U.next = w, P.lastBaseUpdate = g);
        }
      }
      if (s !== null) {
        var Y = l.baseState, K = ue, te = null, Me = null, lt = null, et = s;
        do {
          var zt = et.lane, Lt = et.eventTime;
          if (Fl(i, zt)) {
            if (lt !== null) {
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
              lt = lt.next = ne;
            }
            Y = Sb(e, l, et, Y, t, a);
            var B = et.callback;
            if (B !== null && // If the update was already committed, we should not queue its
            // callback again.
            et.lane !== Vt) {
              e.flags |= dn;
              var ye = l.effects;
              ye === null ? l.effects = [et] : ye.push(et);
            }
          } else {
            var $ = {
              eventTime: Lt,
              lane: zt,
              tag: et.tag,
              payload: et.payload,
              callback: et.callback,
              next: null
            };
            lt === null ? (Me = lt = $, te = Y) : lt = lt.next = $, K = wt(K, zt);
          }
          if (et = et.next, et === null) {
            if (y = l.shared.pending, y === null)
              break;
            var $e = y, Ue = $e.next;
            $e.next = null, et = Ue, l.lastBaseUpdate = $e, l.shared.pending = null;
          }
        } while (!0);
        lt === null && (te = Y), l.baseState = te, l.firstBaseUpdate = Me, l.lastBaseUpdate = lt;
        var vt = l.shared.interleaved;
        if (vt !== null) {
          var Ct = vt;
          do
            K = wt(K, Ct.lane), Ct = Ct.next;
          while (Ct !== vt);
        } else s === null && (l.shared.lanes = ue);
        dv(K), e.lanes = K, e.memoizedState = Y;
      }
      xm = null;
    }
    function Cb(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function m2() {
      Em = !1;
    }
    function Rm() {
      return Em;
    }
    function y2(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], d = s.callback;
          d !== null && (s.callback = null, Cb(d, a));
        }
    }
    var Ip = {}, Gu = $u(Ip), Vp = $u(Ip), km = $u(Ip);
    function Tm(e) {
      if (e === Ip)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function g2() {
      var e = Tm(km.current);
      return e;
    }
    function e0(e, t) {
      da(km, t, e), da(Vp, e, e), da(Gu, Ip, e);
      var a = Px(t);
      fa(Gu, e), da(Gu, a, e);
    }
    function Wf(e) {
      fa(Gu, e), fa(Vp, e), fa(km, e);
    }
    function t0() {
      var e = Tm(Gu.current);
      return e;
    }
    function _2(e) {
      Tm(km.current);
      var t = Tm(Gu.current), a = Fx(t, e.type);
      t !== a && (da(Vp, e, e), da(Gu, a, e));
    }
    function n0(e) {
      Vp.current === e && (fa(Gu, e), fa(Vp, e));
    }
    var Eb = 0, S2 = 1, C2 = 1, Hp = 2, mo = $u(Eb);
    function r0(e, t) {
      return (e & t) !== 0;
    }
    function Yf(e) {
      return e & S2;
    }
    function a0(e, t) {
      return e & S2 | t;
    }
    function xb(e, t) {
      return e | t;
    }
    function Qu(e, t) {
      da(mo, t, e);
    }
    function Gf(e) {
      fa(mo, e);
    }
    function wb(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Dm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === he) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || P_(i) || Eg(i))
              return t;
          }
        } else if (t.tag === X && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & tt) !== rt;
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
    function bb(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Fe = p.ReactCurrentDispatcher, $p = p.ReactCurrentBatchConfig, l0, Qf;
    l0 = /* @__PURE__ */ new Set();
    var fc = ue, an = null, gr = null, _r = null, Nm = !1, Bp = !1, qp = 0, Rb = 0, kb = 25, ae = null, $i = null, Ku = -1, u0 = !1;
    function Kt() {
      {
        var e = ae;
        $i === null ? $i = [e] : $i.push(e);
      }
    }
    function ke() {
      {
        var e = ae;
        $i !== null && (Ku++, $i[Ku] !== e && Tb(e));
      }
    }
    function Kf(e) {
      e != null && !kt(e) && h("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ae, typeof e);
    }
    function Tb(e) {
      {
        var t = gt(an);
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
        return h("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ae), !1;
      e.length !== t.length && h(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ae, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!de(e[a], t[a]))
          return !1;
      return !0;
    }
    function Xf(e, t, a, i, l, s) {
      fc = s, an = t, $i = e !== null ? e._debugHookTypes : null, Ku = -1, u0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ue, e !== null && e.memoizedState !== null ? Fe.current = $2 : $i !== null ? Fe.current = H2 : Fe.current = V2;
      var d = a(i, l);
      if (Bp) {
        var y = 0;
        do {
          if (Bp = !1, qp = 0, y >= kb)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          y += 1, u0 = !1, gr = null, _r = null, t.updateQueue = null, Ku = -1, Fe.current = B2, d = a(i, l);
        } while (Bp);
      }
      Fe.current = $m, t._debugHookTypes = $i;
      var g = gr !== null && gr.next !== null;
      if (fc = ue, an = null, gr = null, _r = null, ae = null, $i = null, Ku = -1, e !== null && (e.flags & In) !== (t.flags & In) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Dt) !== at && h("Internal React error: Expected static flag was missing. Please notify the React team."), Nm = !1, g)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return d;
    }
    function Jf() {
      var e = qp !== 0;
      return qp = 0, e;
    }
    function E2(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Bt) !== at ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = zs(e.lanes, a);
    }
    function x2() {
      if (Fe.current = $m, Nm) {
        for (var e = an.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Nm = !1;
      }
      fc = ue, an = null, gr = null, _r = null, $i = null, Ku = -1, ae = null, U2 = !1, Bp = !1, qp = 0;
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
    function w2() {
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
        lanes: ue,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = s;
      var d = s.dispatch = Lb.bind(null, an, s);
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
          var g = d.next, w = y.next;
          d.next = w, y.next = g;
        }
        s.baseQueue !== d && h("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = d = y, l.pending = null;
      }
      if (d !== null) {
        var T = d.next, P = s.baseState, U = null, Y = null, K = null, te = T;
        do {
          var Me = te.lane;
          if (Fl(fc, Me)) {
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
            var lt = {
              lane: Me,
              action: te.action,
              hasEagerState: te.hasEagerState,
              eagerState: te.eagerState,
              next: null
            };
            K === null ? (Y = K = lt, U = P) : K = K.next = lt, an.lanes = wt(an.lanes, Me), dv(Me);
          }
          te = te.next;
        } while (te !== null && te !== T);
        K === null ? U = P : K.next = Y, de(P, i.memoizedState) || ev(), i.memoizedState = P, i.baseState = U, i.baseQueue = K, l.lastRenderedState = P;
      }
      var Lt = l.interleaved;
      if (Lt !== null) {
        var $ = Lt;
        do {
          var ne = $.lane;
          an.lanes = wt(an.lanes, ne), dv(ne), $ = $.next;
        } while ($ !== Lt);
      } else d === null && (l.lanes = ue);
      var B = l.dispatch;
      return [i.memoizedState, B];
    }
    function p0(e, t, a) {
      var i = Bi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, d = l.pending, y = i.memoizedState;
      if (d !== null) {
        l.pending = null;
        var g = d.next, w = g;
        do {
          var T = w.action;
          y = e(y, T), w = w.next;
        } while (w !== g);
        de(y, i.memoizedState) || ev(), i.memoizedState = y, i.baseQueue === null && (i.baseState = y), l.lastRenderedState = y;
      }
      return [y, s];
    }
    function r8(e, t, a) {
    }
    function a8(e, t, a) {
    }
    function v0(e, t, a) {
      var i = an, l = rl(), s, d = Hr();
      if (d) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Qf || s !== a() && (h("The result of getServerSnapshot should be cached to avoid an infinite loop"), Qf = !0);
      } else {
        if (s = t(), !Qf) {
          var y = t();
          de(s, y) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), Qf = !0);
        }
        var g = uy();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        hf(g, fc) || b2(i, t, s);
      }
      l.memoizedState = s;
      var w = {
        value: s,
        getSnapshot: t
      };
      return l.queue = w, Am(k2.bind(null, i, w, e), [e]), i.flags |= ta, Wp(mr | $r, R2.bind(null, i, w, s, t), void 0, null), s;
    }
    function Om(e, t, a) {
      var i = an, l = Bi(), s = t();
      if (!Qf) {
        var d = t();
        de(s, d) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), Qf = !0);
      }
      var y = l.memoizedState, g = !de(y, s);
      g && (l.memoizedState = s, ev());
      var w = l.queue;
      if (Gp(k2.bind(null, i, w, e), [e]), w.getSnapshot !== t || g || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      _r !== null && _r.memoizedState.tag & mr) {
        i.flags |= ta, Wp(mr | $r, R2.bind(null, i, w, s, t), void 0, null);
        var T = uy();
        if (T === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        hf(T, fc) || b2(i, t, s);
      }
      return s;
    }
    function b2(e, t, a) {
      e.flags |= ku;
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
        return !de(a, i);
      } catch {
        return !0;
      }
    }
    function D2(e) {
      var t = Wa(e, pt);
      t !== null && xr(t, e, pt, ln);
    }
    function Lm(e) {
      var t = rl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ue,
        dispatch: null,
        lastRenderedReducer: c0,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Mb.bind(null, an, a);
      return [t.memoizedState, i];
    }
    function h0(e) {
      return d0(c0);
    }
    function m0(e) {
      return p0(c0);
    }
    function Wp(e, t, a, i) {
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
    function y0(e) {
      var t = rl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Mm(e) {
      var t = Bi();
      return t.memoizedState;
    }
    function Yp(e, t, a, i) {
      var l = rl(), s = i === void 0 ? null : i;
      an.flags |= e, l.memoizedState = Wp(mr | t, a, void 0, s);
    }
    function jm(e, t, a, i) {
      var l = Bi(), s = i === void 0 ? null : i, d = void 0;
      if (gr !== null) {
        var y = gr.memoizedState;
        if (d = y.destroy, s !== null) {
          var g = y.deps;
          if (s0(s, g)) {
            l.memoizedState = Wp(t, a, d, s);
            return;
          }
        }
      }
      an.flags |= e, l.memoizedState = Wp(mr | t, a, d, s);
    }
    function Am(e, t) {
      return (an.mode & Bt) !== at ? Yp(Oi | ta | Vc, $r, e, t) : Yp(ta | Vc, $r, e, t);
    }
    function Gp(e, t) {
      return jm(ta, $r, e, t);
    }
    function g0(e, t) {
      return Yp(jt, nl, e, t);
    }
    function Um(e, t) {
      return jm(jt, nl, e, t);
    }
    function _0(e, t) {
      var a = jt;
      return a |= ro, (an.mode & Bt) !== at && (a |= Po), Yp(a, yr, e, t);
    }
    function zm(e, t) {
      return jm(jt, yr, e, t);
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
    function S0(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = jt;
      return l |= ro, (an.mode & Bt) !== at && (l |= Po), Yp(l, yr, N2.bind(null, t, e), i);
    }
    function Pm(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return jm(jt, yr, N2.bind(null, t, e), i);
    }
    function Db(e, t) {
    }
    var Fm = Db;
    function C0(e, t) {
      var a = rl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Im(e, t) {
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
    function Vm(e, t) {
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
    function O2(e) {
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
      var i = !Kd(fc);
      if (i) {
        if (!de(a, t)) {
          var l = Zd();
          an.lanes = wt(an.lanes, l), dv(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, ev()), e.memoizedState = a, a;
    }
    function Nb(e, t, a) {
      var i = $a();
      $n(gh(i, Ai)), e(!0);
      var l = $p.transition;
      $p.transition = {};
      var s = $p.transition;
      $p.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if ($n(i), $p.transition = l, l === null && s._updatedFibers) {
          var d = s._updatedFibers.size;
          d > 10 && E("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function w0() {
      var e = Lm(!1), t = e[0], a = e[1], i = Nb.bind(null, a), l = rl();
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
    function Ob() {
      return U2;
    }
    function b0() {
      var e = rl(), t = uy(), a = t.identifierPrefix, i;
      if (Hr()) {
        var l = Gw();
        i = ":" + a + "R" + l;
        var s = qp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var d = Rb++;
        i = ":" + a + "r" + d.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Hm() {
      var e = Bi(), t = e.memoizedState;
      return t;
    }
    function Lb(e, t, a) {
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
    function Mb(e, t, a) {
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
        if (e.lanes === ue && (s === null || s.lanes === ue)) {
          var d = t.lastRenderedReducer;
          if (d !== null) {
            var y;
            y = Fe.current, Fe.current = yo;
            try {
              var g = t.lastRenderedState, w = d(g, a);
              if (l.hasEagerState = !0, l.eagerState = w, de(w, g)) {
                yb(e, t, l, i);
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
          var P = Ta();
          xr(T, e, i, P), F2(T, t, i);
        }
      }
      I2(e, i);
    }
    function z2(e) {
      var t = e.alternate;
      return e === an || t !== null && t === an;
    }
    function P2(e, t) {
      Bp = Nm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function F2(e, t, a) {
      if (Jd(a)) {
        var i = t.lanes;
        i = ep(i, e.pendingLanes);
        var l = wt(i, a);
        t.lanes = l, yf(e, l);
      }
    }
    function I2(e, t, a) {
      ks(e, t);
    }
    var $m = {
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
    }, V2 = null, H2 = null, $2 = null, B2 = null, al = null, yo = null, Bm = null;
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
          return ae = "useCallback", Kt(), Kf(t), C0(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", Kt(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", Kt(), Kf(t), Am(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", Kt(), Kf(a), S0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", Kt(), Kf(t), g0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", Kt(), Kf(t), _0(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", Kt(), Kf(t);
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
            return Lm(e);
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
          return ae = "useTransition", Kt(), w0();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", Kt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", Kt(), v0(e, t, a);
        },
        useId: function() {
          return ae = "useId", Kt(), b0();
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
          return ae = "useEffect", ke(), Am(e, t);
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
            return Lm(e);
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
          return ae = "useTransition", ke(), w0();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", ke(), v0(e, t, a);
        },
        useId: function() {
          return ae = "useId", ke(), b0();
        },
        unstable_isNewReconciler: re
      }, $2 = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", ke(), Im(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", ke(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", ke(), Gp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", ke(), Pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", ke(), Um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", ke(), zm(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", ke();
          var a = Fe.current;
          Fe.current = yo;
          try {
            return Vm(e, t);
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
          return ae = "useRef", ke(), Mm();
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
          return ae = "useSyncExternalStore", ke(), Om(e, t);
        },
        useId: function() {
          return ae = "useId", ke(), Hm();
        },
        unstable_isNewReconciler: re
      }, B2 = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", ke(), Im(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", ke(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", ke(), Gp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", ke(), Pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", ke(), Um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", ke(), zm(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", ke();
          var a = Fe.current;
          Fe.current = Bm;
          try {
            return Vm(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", ke();
          var i = Fe.current;
          Fe.current = Bm;
          try {
            return p0(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", ke(), Mm();
        },
        useState: function(e) {
          ae = "useState", ke();
          var t = Fe.current;
          Fe.current = Bm;
          try {
            return m0(e);
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
          return ae = "useSyncExternalStore", ke(), Om(e, t);
        },
        useId: function() {
          return ae = "useId", ke(), Hm();
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
          return ae = "useEffect", St(), Kt(), Am(e, t);
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
            return Lm(e);
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
          return ae = "useTransition", St(), Kt(), w0();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", St(), Kt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", St(), Kt(), v0(e, t, a);
        },
        useId: function() {
          return ae = "useId", St(), Kt(), b0();
        },
        unstable_isNewReconciler: re
      }, yo = {
        readContext: function(e) {
          return R0(), lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", St(), ke(), Im(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", St(), ke(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", St(), ke(), Gp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", St(), ke(), Pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", St(), ke(), Um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", St(), ke(), zm(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", St(), ke();
          var a = Fe.current;
          Fe.current = yo;
          try {
            return Vm(e, t);
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
          return ae = "useRef", St(), ke(), Mm();
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
          return ae = "useSyncExternalStore", St(), ke(), Om(e, t);
        },
        useId: function() {
          return ae = "useId", St(), ke(), Hm();
        },
        unstable_isNewReconciler: re
      }, Bm = {
        readContext: function(e) {
          return R0(), lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", St(), ke(), Im(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", St(), ke(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", St(), ke(), Gp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", St(), ke(), Pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", St(), ke(), Um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", St(), ke(), zm(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", St(), ke();
          var a = Fe.current;
          Fe.current = yo;
          try {
            return Vm(e, t);
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
          return ae = "useRef", St(), ke(), Mm();
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
          return ae = "useSyncExternalStore", St(), ke(), Om(e, t);
        },
        useId: function() {
          return ae = "useId", St(), ke(), Hm();
        },
        unstable_isNewReconciler: re
      };
    }
    var Xu = v.unstable_now, q2 = 0, qm = -1, Qp = -1, Wm = -1, k0 = !1, Ym = !1;
    function W2() {
      return k0;
    }
    function jb() {
      Ym = !0;
    }
    function Ab() {
      k0 = !1, Ym = !1;
    }
    function Ub() {
      k0 = Ym, Ym = !1;
    }
    function Y2() {
      return q2;
    }
    function G2() {
      q2 = Xu();
    }
    function T0(e) {
      Qp = Xu(), e.actualStartTime < 0 && (e.actualStartTime = Xu());
    }
    function Q2(e) {
      Qp = -1;
    }
    function Gm(e, t) {
      if (Qp >= 0) {
        var a = Xu() - Qp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Qp = -1;
      }
    }
    function il(e) {
      if (qm >= 0) {
        var t = Xu() - qm;
        qm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case A:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Re:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function D0(e) {
      if (Wm >= 0) {
        var t = Xu() - Wm;
        Wm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case A:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Re:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function ol() {
      qm = Xu();
    }
    function N0() {
      Wm = Xu();
    }
    function O0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function go(e, t) {
      if (e && e.defaultProps) {
        var a = bt({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var L0 = {}, M0, j0, A0, U0, z0, K2, Qm, P0, F0, I0, Kp;
    {
      M0 = /* @__PURE__ */ new Set(), j0 = /* @__PURE__ */ new Set(), A0 = /* @__PURE__ */ new Set(), U0 = /* @__PURE__ */ new Set(), P0 = /* @__PURE__ */ new Set(), z0 = /* @__PURE__ */ new Set(), F0 = /* @__PURE__ */ new Set(), I0 = /* @__PURE__ */ new Set(), Kp = /* @__PURE__ */ new Set();
      var X2 = /* @__PURE__ */ new Set();
      Qm = function(e, t) {
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
      var d = s == null ? l : bt({}, l, s);
      if (e.memoizedState = d, e.lanes === ue) {
        var y = e.updateQueue;
        y.baseState = d;
      }
    }
    var H0 = {
      isMounted: nh,
      enqueueSetState: function(e, t, a) {
        var i = Ru(e), l = Ta(), s = ts(i), d = Xl(l, s);
        d.payload = t, a != null && (Qm(a, "setState"), d.callback = a);
        var y = Yu(i, d, s);
        y !== null && (xr(y, i, s, l), wm(y, i, s)), ks(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Ru(e), l = Ta(), s = ts(i), d = Xl(l, s);
        d.tag = v2, d.payload = t, a != null && (Qm(a, "replaceState"), d.callback = a);
        var y = Yu(i, d, s);
        y !== null && (xr(y, i, s, l), wm(y, i, s)), ks(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ru(e), i = Ta(), l = ts(a), s = Xl(i, l);
        s.tag = Cm, t != null && (Qm(t, "forceUpdate"), s.callback = t);
        var d = Yu(a, s, l);
        d !== null && (xr(d, a, l, i), wm(d, a, l)), Gc(a, l);
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
    function zb(e, t, a) {
      var i = e.stateNode;
      {
        var l = Ft(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? h("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : h("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && h("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && h("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && h("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && h("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), t.childContextTypes && !Kp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & rn) === at && (Kp.add(t), h(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), t.contextTypes && !Kp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & rn) === at && (Kp.add(t), h(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), i.contextTypes && h("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !F0.has(t) && (F0.add(t), h("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && h("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && h("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ft(t) || "A pure component"), typeof i.componentDidUnmount == "function" && h("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && h("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && h("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && h("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var d = i.props !== a;
        i.props !== void 0 && d && h("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && h("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !A0.has(t) && (A0.add(t), h("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ft(t))), typeof i.getDerivedStateFromProps == "function" && h("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && h("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && h("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var y = i.state;
        y && (typeof y != "object" || kt(y)) && h("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && h("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function Z2(e, t) {
      t.updater = H0, e.stateNode = t, bl(t, e), t._reactInternalInstance = L0;
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
        l = Pf(e, t, !0);
        var w = t.contextTypes;
        i = w != null, s = i ? Ff(e, l) : hi;
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
          var U = Ft(t) || "Component";
          j0.has(U) || (j0.add(U), h("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", U, T.state === null ? "null" : "undefined", U));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var Y = null, K = null, te = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? Y = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && (Y = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? K = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (K = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? te = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && (te = "UNSAFE_componentWillUpdate"), Y !== null || K !== null || te !== null) {
            var Me = Ft(t) || "Component", lt = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            U0.has(Me) || (U0.add(Me), h(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Me, lt, Y !== null ? `
  ` + Y : "", K !== null ? `
  ` + K : "", te !== null ? `
  ` + te : ""));
          }
        }
      }
      return i && $_(e, l, s), T;
    }
    function Pb(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (h("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", gt(e) || "Component"), H0.enqueueReplaceState(t, t.state, null));
    }
    function tS(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var s = gt(e) || "Component";
          M0.has(s) || (M0.add(s), h("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        H0.enqueueReplaceState(t, t.state, null);
      }
    }
    function $0(e, t, a, i) {
      zb(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = {}, Jg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = lr(s);
      else {
        var d = Pf(e, t, !0);
        l.context = Ff(e, d);
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
      if (typeof g == "function" && (V0(e, t, g, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (Pb(e, l), bm(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var w = jt;
        w |= ro, (e.mode & Bt) !== at && (w |= Po), e.flags |= w;
      }
    }
    function Fb(e, t, a, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var d = l.context, y = t.contextType, g = hi;
      if (typeof y == "object" && y !== null)
        g = lr(y);
      else {
        var w = Pf(e, t, !0);
        g = Ff(e, w);
      }
      var T = t.getDerivedStateFromProps, P = typeof T == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !P && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || d !== g) && tS(e, l, a, g), m2();
      var U = e.memoizedState, Y = l.state = U;
      if (bm(e, a, l, i), Y = e.memoizedState, s === a && U === Y && !om() && !Rm()) {
        if (typeof l.componentDidMount == "function") {
          var K = jt;
          K |= ro, (e.mode & Bt) !== at && (K |= Po), e.flags |= K;
        }
        return !1;
      }
      typeof T == "function" && (V0(e, t, T, a), Y = e.memoizedState);
      var te = Rm() || J2(e, t, s, a, U, Y, g);
      if (te) {
        if (!P && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var Me = jt;
          Me |= ro, (e.mode & Bt) !== at && (Me |= Po), e.flags |= Me;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var lt = jt;
          lt |= ro, (e.mode & Bt) !== at && (lt |= Po), e.flags |= lt;
        }
        e.memoizedProps = a, e.memoizedState = Y;
      }
      return l.props = a, l.state = Y, l.context = g, te;
    }
    function Ib(e, t, a, i, l) {
      var s = t.stateNode;
      h2(e, t);
      var d = t.memoizedProps, y = t.type === t.elementType ? d : go(t.type, d);
      s.props = y;
      var g = t.pendingProps, w = s.context, T = a.contextType, P = hi;
      if (typeof T == "object" && T !== null)
        P = lr(T);
      else {
        var U = Pf(t, a, !0);
        P = Ff(t, U);
      }
      var Y = a.getDerivedStateFromProps, K = typeof Y == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !K && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (d !== g || w !== P) && tS(t, s, i, P), m2();
      var te = t.memoizedState, Me = s.state = te;
      if (bm(t, i, s, l), Me = t.memoizedState, d === g && te === Me && !om() && !Rm() && !De)
        return typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= jt), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= Xn), !1;
      typeof Y == "function" && (V0(t, a, Y, i), Me = t.memoizedState);
      var lt = Rm() || J2(t, a, y, i, te, Me, P) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      De;
      return lt ? (!K && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Me, P), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Me, P)), typeof s.componentDidUpdate == "function" && (t.flags |= jt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Xn)) : (typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= jt), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= Xn), t.memoizedProps = i, t.memoizedState = Me), s.props = i, s.state = Me, s.context = P, lt;
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
    function Vb(e, t) {
      return !0;
    }
    function q0(e, t) {
      try {
        var a = Vb(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, d = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === b)
            return;
          console.error(i);
        }
        var y = l ? gt(l) : null, g = y ? "The above error occurred in the <" + y + "> component:" : "The above error occurred in one of your React components:", w;
        if (e.tag === A)
          w = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var T = gt(e) || "Anonymous";
          w = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + T + ".");
        }
        var P = g + `
` + d + `

` + ("" + w);
        console.error(P);
      } catch (U) {
        setTimeout(function() {
          throw U;
        });
      }
    }
    var Hb = typeof WeakMap == "function" ? WeakMap : Map;
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
        var g = t.value, w = t.stack;
        this.componentDidCatch(g, {
          componentStack: w !== null ? w : ""
        }), typeof l != "function" && (la(e.lanes, pt) || h("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", gt(e) || "Unknown"));
      }), i;
    }
    function rS(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new Hb(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = Ak.bind(null, e, t, a);
        ia && pv(e, a), t.then(s, s);
      }
    }
    function $b(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function Bb(e, t) {
      var a = e.tag;
      if ((e.mode & Dt) === at && (a === k || a === _e || a === Ve)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function aS(e) {
      var t = e;
      do {
        if (t.tag === he && wb(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function iS(e, t, a, i, l) {
      if ((e.mode & Dt) === at) {
        if (e === t)
          e.flags |= rr;
        else {
          if (e.flags |= tt, a.flags |= Ic, a.flags &= -52805, a.tag === b) {
            var s = a.alternate;
            if (s === null)
              a.tag = it;
            else {
              var d = Xl(ln, pt);
              d.tag = Cm, Yu(a, d, pt);
            }
          }
          a.lanes = wt(a.lanes, pt);
        }
        return e;
      }
      return e.flags |= rr, e.lanes = l, e;
    }
    function qb(e, t, a, i, l) {
      if (a.flags |= Cs, ia && pv(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Bb(a), Hr() && a.mode & Dt && K_();
        var d = aS(t);
        if (d !== null) {
          d.flags &= ~kr, iS(d, t, a, e, l), d.mode & Dt && rS(e, s, l), $b(d, e, s);
          return;
        } else {
          if (!ch(l)) {
            rS(e, s, l), b1();
            return;
          }
          var y = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = y;
        }
      } else if (Hr() && a.mode & Dt) {
        K_();
        var g = aS(t);
        if (g !== null) {
          (g.flags & rr) === rt && (g.flags |= kr), iS(g, t, a, e, l), Pg(dc(i, a));
          return;
        }
      }
      i = dc(i, a), wk(i);
      var w = t;
      do {
        switch (w.tag) {
          case A: {
            var T = i;
            w.flags |= rr;
            var P = Us(l);
            w.lanes = wt(w.lanes, P);
            var U = nS(w, T, P);
            Zg(w, U);
            return;
          }
          case b:
            var Y = i, K = w.type, te = w.stateNode;
            if ((w.flags & tt) === rt && (typeof K.getDerivedStateFromError == "function" || te !== null && typeof te.componentDidCatch == "function" && !aC(te))) {
              w.flags |= rr;
              var Me = Us(l);
              w.lanes = wt(w.lanes, Me);
              var lt = W0(w, Y, Me);
              Zg(w, lt);
              return;
            }
            break;
        }
        w = w.return;
      } while (w !== null);
    }
    function Wb() {
      return null;
    }
    var Xp = p.ReactCurrentOwner, _o = !1, Y0, Jp, G0, Q0, K0, pc, X0, Km, Zp;
    Y0 = {}, Jp = {}, G0 = {}, Q0 = {}, K0 = {}, pc = !1, X0 = {}, Km = {}, Zp = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = u2(t, null, a, i) : t.child = $f(t, e.child, a, i);
    }
    function Yb(e, t, a, i) {
      t.child = $f(t, e.child, null, i), t.child = $f(t, null, a, i);
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
      var d = a.render, y = t.ref, g, w;
      qf(t, l), Ea(t);
      {
        if (Xp.current = t, Kn(!0), g = Xf(e, t, d, i, y, l), w = Jf(), t.mode & rn) {
          En(!0);
          try {
            g = Xf(e, t, d, i, y, l), w = Jf();
          } finally {
            En(!1);
          }
        }
        Kn(!1);
      }
      return xa(), e !== null && !_o ? (E2(e, t, l), Jl(e, t, l)) : (Hr() && w && Lg(t), t.flags |= ci, Ra(e, t, g, l), t.child);
    }
    function lS(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (Jk(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var d = s;
          return d = od(s), t.tag = Ve, t.type = d, e1(t, s), uS(e, t, d, i, l);
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
            Zp[g] || (h("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", g), Zp[g] = !0);
          }
        }
        var w = U1(a.type, null, i, t, t.mode, l);
        return w.ref = t.ref, w.return = t, t.child = w, w;
      }
      {
        var T = a.type, P = T.propTypes;
        P && po(
          P,
          i,
          // Resolved props
          "prop",
          Ft(T)
        );
      }
      var U = e.child, Y = o1(e, l);
      if (!Y) {
        var K = U.memoizedProps, te = a.compare;
        if (te = te !== null ? te : Qe, te(K, i) && e.ref === t.ref)
          return Jl(e, t, l);
      }
      t.flags |= ci;
      var Me = gc(U, i);
      return Me.ref = t.ref, Me.return = t, t.child = Me, Me;
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
          var w = s && s.propTypes;
          w && po(
            w,
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
            (e.flags & Ic) !== rt && (_o = !0);
          else return t.lanes = e.lanes, Jl(e, t, l);
      }
      return J0(e, t, a, i, l);
    }
    function sS(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ge)
        if ((t.mode & Dt) === at) {
          var d = {
            baseLanes: ue,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = d, sy(t, a);
        } else if (la(a, oa)) {
          var P = {
            baseLanes: ue,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = P;
          var U = s !== null ? s.baseLanes : a;
          sy(t, U);
        } else {
          var y = null, g;
          if (s !== null) {
            var w = s.baseLanes;
            g = wt(w, a);
          } else
            g = a;
          t.lanes = t.childLanes = oa;
          var T = {
            baseLanes: g,
            cachePool: y,
            transitions: null
          };
          return t.memoizedState = T, t.updateQueue = null, sy(t, g), null;
        }
      else {
        var Y;
        s !== null ? (Y = wt(s.baseLanes, a), t.memoizedState = null) : Y = a, sy(t, Y);
      }
      return Ra(e, t, l, a), t.child;
    }
    function Gb(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function Qb(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function Kb(e, t, a) {
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
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= bn, t.flags |= Tu);
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
        var y = Pf(t, a, !0);
        d = Ff(t, y);
      }
      var g, w;
      qf(t, l), Ea(t);
      {
        if (Xp.current = t, Kn(!0), g = Xf(e, t, a, i, d, l), w = Jf(), t.mode & rn) {
          En(!0);
          try {
            g = Xf(e, t, a, i, d, l), w = Jf();
          } finally {
            En(!1);
          }
        }
        Kn(!1);
      }
      return xa(), e !== null && !_o ? (E2(e, t, l), Jl(e, t, l)) : (Hr() && w && Lg(t), t.flags |= ci, Ra(e, t, g, l), t.child);
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
            t.flags |= tt, t.flags |= rr;
            var w = new Error("Simulated error coming from DevTools"), T = Us(l);
            t.lanes = wt(t.lanes, T);
            var P = W0(t, dc(w, t), T);
            Zg(t, P);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var U = a.propTypes;
          U && po(
            U,
            i,
            // Resolved props
            "prop",
            Ft(a)
          );
        }
      }
      var Y;
      tl(a) ? (Y = !0, um(t)) : Y = !1, qf(t, l);
      var K = t.stateNode, te;
      K === null ? (Jm(e, t), eS(t, a, i), $0(t, a, i, l), te = !0) : e === null ? te = Fb(t, a, i, l) : te = Ib(e, t, a, i, l);
      var Me = Z0(e, t, a, te, Y, l);
      {
        var lt = t.stateNode;
        te && lt.props !== i && (pc || h("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", gt(t) || "a component"), pc = !0);
      }
      return Me;
    }
    function Z0(e, t, a, i, l, s) {
      cS(e, t);
      var d = (t.flags & tt) !== rt;
      if (!i && !d)
        return l && W_(t, a, !1), Jl(e, t, s);
      var y = t.stateNode;
      Xp.current = t;
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
      return t.flags |= ci, e !== null && d ? Yb(e, t, g, s) : Ra(e, t, g, s), t.memoizedState = y.state, l && W_(t, a, !0), t.child;
    }
    function dS(e) {
      var t = e.stateNode;
      t.pendingContext ? B_(e, t.pendingContext, t.pendingContext !== t.context) : t.context && B_(e, t.context, !1), e0(e, t.containerInfo);
    }
    function Xb(e, t, a) {
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
        }, w = t.updateQueue;
        if (w.baseState = g, t.memoizedState = g, t.flags & kr) {
          var T = dc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return pS(e, t, y, a, T);
        } else if (y !== s) {
          var P = dc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return pS(e, t, y, a, P);
        } else {
          eb(t);
          var U = u2(t, null, y, a);
          t.child = U;
          for (var Y = U; Y; )
            Y.flags = Y.flags & ~Cn | na, Y = Y.sibling;
        }
      } else {
        if (Hf(), y === s)
          return Jl(e, t, a);
        Ra(e, t, y, a);
      }
      return t.child;
    }
    function pS(e, t, a, i, l) {
      return Hf(), Pg(l), t.flags |= kr, Ra(e, t, a, i), t.child;
    }
    function Jb(e, t, a) {
      _2(t), e === null && zg(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, d = l.children, y = gg(i, l);
      return y ? d = null : s !== null && gg(i, s) && (t.flags |= za), cS(e, t), Ra(e, t, d, a), t.child;
    }
    function Zb(e, t) {
      return e === null && zg(t), null;
    }
    function eR(e, t, a, i) {
      Jm(e, t);
      var l = t.pendingProps, s = a, d = s._payload, y = s._init, g = y(d);
      t.type = g;
      var w = t.tag = Zk(g), T = go(g, l), P;
      switch (w) {
        case k:
          return e1(t, g), t.type = g = od(g), P = J0(null, t, g, T, i), P;
        case b:
          return t.type = g = N1(g), P = fS(null, t, g, T, i), P;
        case _e:
          return t.type = g = O1(g), P = oS(null, t, g, T, i), P;
        case Ye: {
          if (t.type !== t.elementType) {
            var U = g.propTypes;
            U && po(
              U,
              T,
              // Resolved for outer only
              "prop",
              Ft(g)
            );
          }
          return P = lS(
            null,
            t,
            g,
            go(g.type, T),
            // The inner type can have defaults too
            i
          ), P;
        }
      }
      var Y = "";
      throw g !== null && typeof g == "object" && g.$$typeof === _t && (Y = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + g + ". " + ("Lazy element type must resolve to a class or function." + Y));
    }
    function tR(e, t, a, i, l) {
      Jm(e, t), t.tag = b;
      var s;
      return tl(a) ? (s = !0, um(t)) : s = !1, qf(t, l), eS(t, a, i), $0(t, a, i, l), Z0(null, t, a, !0, s, l);
    }
    function nR(e, t, a, i) {
      Jm(e, t);
      var l = t.pendingProps, s;
      {
        var d = Pf(t, a, !1);
        s = Ff(t, d);
      }
      qf(t, i);
      var y, g;
      Ea(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var w = Ft(a) || "Unknown";
          Y0[w] || (h("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", w, w), Y0[w] = !0);
        }
        t.mode & rn && ho.recordLegacyContextWarning(t, null), Kn(!0), Xp.current = t, y = Xf(null, t, a, l, s, i), g = Jf(), Kn(!1);
      }
      if (xa(), t.flags |= ci, typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0) {
        var T = Ft(a) || "Unknown";
        Jp[T] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), Jp[T] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0
      ) {
        {
          var P = Ft(a) || "Unknown";
          Jp[P] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", P, P, P), Jp[P] = !0);
        }
        t.tag = b, t.memoizedState = null, t.updateQueue = null;
        var U = !1;
        return tl(a) ? (U = !0, um(t)) : U = !1, t.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, Jg(t), Z2(t, y), $0(t, a, l, i), Z0(null, t, a, !0, U, i);
      } else {
        if (t.tag = k, t.mode & rn) {
          En(!0);
          try {
            y = Xf(null, t, a, l, s, i), g = Jf();
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
          Zp[d] || (h("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", d), Zp[d] = !0);
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
        cachePool: Wb(),
        transitions: null
      };
    }
    function rR(e, t) {
      var a = null;
      return {
        baseLanes: wt(e.baseLanes, t),
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
      return r0(e, Hp);
    }
    function iR(e, t) {
      return zs(e.childLanes, t);
    }
    function vS(e, t, a) {
      var i = t.pendingProps;
      vT(t) && (t.flags |= tt);
      var l = mo.current, s = !1, d = (t.flags & tt) !== rt;
      if (d || aR(l, e) ? (s = !0, t.flags &= ~tt) : (e === null || e.memoizedState !== null) && (l = xb(l, C2)), l = Yf(l), Qu(t, l), e === null) {
        zg(t);
        var y = t.memoizedState;
        if (y !== null) {
          var g = y.dehydrated;
          if (g !== null)
            return cR(t, g);
        }
        var w = i.children, T = i.fallback;
        if (s) {
          var P = oR(t, w, T, a), U = t.child;
          return U.memoizedState = n1(a), t.memoizedState = t1, P;
        } else
          return r1(t, w);
      } else {
        var Y = e.memoizedState;
        if (Y !== null) {
          var K = Y.dehydrated;
          if (K !== null)
            return fR(e, t, d, i, K, Y, a);
        }
        if (s) {
          var te = i.fallback, Me = i.children, lt = uR(e, t, Me, te, a), et = t.child, zt = e.child.memoizedState;
          return et.memoizedState = zt === null ? n1(a) : rR(zt, a), et.childLanes = iR(e, a), t.memoizedState = t1, lt;
        } else {
          var Lt = i.children, $ = lR(e, t, Lt, a);
          return t.memoizedState = null, $;
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
      return (l & Dt) === at && s !== null ? (y = s, y.childLanes = ue, y.pendingProps = d, e.mode & $t && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = 0, y.treeBaseDuration = 0), g = rs(a, l, i, null)) : (y = a1(d, l), g = rs(a, l, i, null)), y.return = e, g.return = e, y.sibling = g, e.child = y, g;
    }
    function a1(e, t, a) {
      return hC(e, t, ue, null);
    }
    function hS(e, t) {
      return gc(e, t);
    }
    function lR(e, t, a, i) {
      var l = e.child, s = l.sibling, d = hS(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Dt) === at && (d.lanes = i), d.return = t, d.sibling = null, s !== null) {
        var y = t.deletions;
        y === null ? (t.deletions = [s], t.flags |= Ua) : y.push(s);
      }
      return t.child = d, d;
    }
    function uR(e, t, a, i, l) {
      var s = t.mode, d = e.child, y = d.sibling, g = {
        mode: "hidden",
        children: a
      }, w;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Dt) === at && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== d
      ) {
        var T = t.child;
        w = T, w.childLanes = ue, w.pendingProps = g, t.mode & $t && (w.actualDuration = 0, w.actualStartTime = -1, w.selfBaseDuration = d.selfBaseDuration, w.treeBaseDuration = d.treeBaseDuration), t.deletions = null;
      } else
        w = hS(d, g), w.subtreeFlags = d.subtreeFlags & In;
      var P;
      return y !== null ? P = gc(y, i) : (P = rs(i, s, l, null), P.flags |= Cn), P.return = t, w.return = t, w.sibling = P, t.child = w, P;
    }
    function Xm(e, t, a, i) {
      i !== null && Pg(i), $f(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, d = r1(t, s);
      return d.flags |= Cn, t.memoizedState = null, d;
    }
    function sR(e, t, a, i, l) {
      var s = t.mode, d = {
        mode: "visible",
        children: a
      }, y = a1(d, s), g = rs(i, s, l, null);
      return g.flags |= Cn, y.return = t, g.return = t, y.sibling = g, t.child = y, (t.mode & Dt) !== at && $f(t, e.child, null, l), g;
    }
    function cR(e, t, a) {
      return (e.mode & Dt) === at ? (h("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = pt) : Eg(t) ? e.lanes = Tr : e.lanes = oa, null;
    }
    function fR(e, t, a, i, l, s, d) {
      if (a)
        if (t.flags & kr) {
          t.flags &= ~kr;
          var $ = B0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Xm(e, t, d, $);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= tt, null;
          var ne = i.children, B = i.fallback, ye = sR(e, t, ne, B, d), $e = t.child;
          return $e.memoizedState = n1(d), t.memoizedState = t1, ye;
        }
      else {
        if (Jw(), (t.mode & Dt) === at)
          return Xm(
            e,
            t,
            d,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Eg(l)) {
          var y, g, w;
          {
            var T = hw(l);
            y = T.digest, g = T.message, w = T.stack;
          }
          var P;
          g ? P = new Error(g) : P = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var U = B0(P, y, w);
          return Xm(e, t, d, U);
        }
        var Y = la(d, e.childLanes);
        if (_o || Y) {
          var K = uy();
          if (K !== null) {
            var te = np(K, d);
            if (te !== Vt && te !== s.retryLane) {
              s.retryLane = te;
              var Me = ln;
              Wa(e, te), xr(K, e, te, Me);
            }
          }
          b1();
          var lt = B0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Xm(e, t, d, lt);
        } else if (P_(l)) {
          t.flags |= tt, t.child = e.child;
          var et = Uk.bind(null, e);
          return mw(l, et), null;
        } else {
          tb(t, l, s.treeContext);
          var zt = i.children, Lt = r1(t, zt);
          return Lt.flags |= na, Lt;
        }
      }
    }
    function mS(e, t, a) {
      e.lanes = wt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = wt(i.lanes, t)), Gg(e.return, t, a);
    }
    function dR(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === he) {
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
    function pR(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Dm(i) === null && (a = t), t = t.sibling;
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
      e !== void 0 && !Km[e] && (e !== "collapsed" && e !== "hidden" ? (Km[e] = !0, h('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Km[e] = !0, h('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
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
      var y = mo.current, g = r0(y, Hp);
      if (g)
        y = a0(y, Hp), t.flags |= tt;
      else {
        var w = e !== null && (e.flags & tt) !== rt;
        w && dR(t, t.child, a), y = Yf(y);
      }
      if (Qu(t, y), (t.mode & Dt) === at)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var T = pR(t.child), P;
            T === null ? (P = t.child, t.child = null) : (P = T.sibling, T.sibling = null), i1(
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
              if (K !== null && Dm(K) === null) {
                t.child = Y;
                break;
              }
              var te = Y.sibling;
              Y.sibling = U, U = Y, Y = te;
            }
            i1(
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
      return e === null ? t.child = $f(t, null, i, a) : Ra(e, t, i, a), t.child;
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
        var w = d.value;
        if (de(w, y)) {
          if (d.children === s.children && !om())
            return Jl(e, t, a);
        } else
          vb(t, l, a);
      }
      var T = s.children;
      return Ra(e, t, T, a), t.child;
    }
    var SS = !1;
    function _R(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (SS || (SS = !0, h("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && h("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), qf(t, a);
      var d = lr(i);
      Ea(t);
      var y;
      return Xp.current = t, Kn(!0), y = s(d), Kn(!1), xa(), t.flags |= ci, Ra(e, t, y, a), t.child;
    }
    function ev() {
      _o = !0;
    }
    function Jm(e, t) {
      (t.mode & Dt) === at && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Cn);
    }
    function Jl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), Q2(), dv(t.lanes), la(a, t.childLanes) ? (db(e, t), t.child) : null;
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
        case A:
          dS(t), t.stateNode, Hf();
          break;
        case q:
          _2(t);
          break;
        case b: {
          var i = t.type;
          tl(i) && um(t);
          break;
        }
        case I:
          e0(t, t.stateNode.containerInfo);
          break;
        case ve: {
          var l = t.memoizedProps.value, s = t.type._context;
          f2(t, s, l);
          break;
        }
        case Re:
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
              return Qu(t, Yf(mo.current)), t.flags |= tt, null;
            var w = t.child, T = w.childLanes;
            if (la(a, T))
              return vS(e, t, a);
            Qu(t, Yf(mo.current));
            var P = Jl(e, t, a);
            return P !== null ? P.sibling : null;
          } else
            Qu(t, Yf(mo.current));
          break;
        }
        case X: {
          var U = (e.flags & tt) !== rt, Y = la(a, t.childLanes);
          if (U) {
            if (Y)
              return gS(e, t, a);
            t.flags |= tt;
          }
          var K = t.memoizedState;
          if (K !== null && (K.rendering = null, K.tail = null, K.lastEffect = null), Qu(t, mo.current), Y)
            break;
          return null;
        }
        case J:
        case Ee:
          return t.lanes = ue, sS(e, t, a);
      }
      return Jl(e, t, a);
    }
    function CS(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return SR(e, t, U1(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || om() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          _o = !0;
        else {
          var s = o1(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & tt) === rt)
            return _o = !1, CR(e, t, a);
          (e.flags & Ic) !== rt ? _o = !0 : _o = !1;
        }
      } else if (_o = !1, Hr() && Ww(t)) {
        var d = t.index, y = Yw();
        Q_(t, y, d);
      }
      switch (t.lanes = ue, t.tag) {
        case O:
          return nR(e, t, t.type, a);
        case We: {
          var g = t.elementType;
          return eR(e, t, g, a);
        }
        case k: {
          var w = t.type, T = t.pendingProps, P = t.elementType === w ? T : go(w, T);
          return J0(e, t, w, P, a);
        }
        case b: {
          var U = t.type, Y = t.pendingProps, K = t.elementType === U ? Y : go(U, Y);
          return fS(e, t, U, K, a);
        }
        case A:
          return Xb(e, t, a);
        case q:
          return Jb(e, t, a);
        case oe:
          return Zb(e, t);
        case he:
          return vS(e, t, a);
        case I:
          return yR(e, t, a);
        case _e: {
          var te = t.type, Me = t.pendingProps, lt = t.elementType === te ? Me : go(te, Me);
          return oS(e, t, te, lt, a);
        }
        case ie:
          return Gb(e, t, a);
        case we:
          return Qb(e, t, a);
        case Re:
          return Kb(e, t, a);
        case ve:
          return gR(e, t, a);
        case pe:
          return _R(e, t, a);
        case Ye: {
          var et = t.type, zt = t.pendingProps, Lt = go(et, zt);
          if (t.type !== t.elementType) {
            var $ = et.propTypes;
            $ && po(
              $,
              Lt,
              // Resolved for outer only
              "prop",
              Ft(et)
            );
          }
          return Lt = go(et.type, Lt), lS(e, t, et, Lt, a);
        }
        case Ve:
          return uS(e, t, t.type, t.pendingProps, a);
        case it: {
          var ne = t.type, B = t.pendingProps, ye = t.elementType === ne ? B : go(ne, B);
          return tR(e, t, ne, ye, a);
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
    function Zf(e) {
      e.flags |= jt;
    }
    function ES(e) {
      e.flags |= bn, e.flags |= Tu;
    }
    var xS, l1, wS, bS;
    xS = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === q || l.tag === oe)
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
    }, wS = function(e, t, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var d = t.stateNode, y = t0(), g = qx(d, a, s, i, l, y);
        t.updateQueue = g, g && Zf(t);
      }
    }, bS = function(e, t, a, i) {
      a !== i && Zf(t);
    };
    function tv(e, t) {
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = ue, i = rt;
      if (t) {
        if ((e.mode & $t) !== at) {
          for (var g = e.selfBaseDuration, w = e.child; w !== null; )
            a = wt(a, wt(w.lanes, w.childLanes)), i |= w.subtreeFlags & In, i |= w.flags & In, g += w.treeBaseDuration, w = w.sibling;
          e.treeBaseDuration = g;
        } else
          for (var T = e.child; T !== null; )
            a = wt(a, wt(T.lanes, T.childLanes)), i |= T.subtreeFlags & In, i |= T.flags & In, T.return = e, T = T.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & $t) !== at) {
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
    function ER(e, t, a) {
      if (ob() && (t.mode & Dt) !== at && (t.flags & tt) === rt)
        return n2(t), Hf(), t.flags |= kr | Cs | rr, !1;
      var i = pm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (ab(t), Br(t), (t.mode & $t) !== at) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Hf(), (t.flags & tt) === rt && (t.memoizedState = null), t.flags |= jt, Br(t), (t.mode & $t) !== at) {
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
        case O:
        case We:
        case Ve:
        case k:
        case _e:
        case ie:
        case we:
        case Re:
        case pe:
        case Ye:
          return Br(t), null;
        case b: {
          var l = t.type;
          return tl(l) && lm(t), Br(t), null;
        }
        case A: {
          var s = t.stateNode;
          if (Wf(t), Dg(t), o0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var d = pm(t);
            if (d)
              Zf(t);
            else if (e !== null) {
              var y = e.memoizedState;
              // Check if this is a client root
              (!y.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & kr) !== rt) && (t.flags |= Xn, r2());
            }
          }
          return l1(e, t), Br(t), null;
        }
        case q: {
          n0(t);
          var g = g2(), w = t.type;
          if (e !== null && t.stateNode != null)
            wS(e, t, w, i, g), e.ref !== t.ref && ES(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Br(t), null;
            }
            var T = t0(), P = pm(t);
            if (P)
              nb(t, g, T) && Zf(t);
            else {
              var U = Hx(w, i, g, T, t);
              xS(U, t, !1, !1), t.stateNode = U, Bx(U, w, i, g) && Zf(t);
            }
            t.ref !== null && ES(t);
          }
          return Br(t), null;
        }
        case oe: {
          var Y = i;
          if (e && t.stateNode != null) {
            var K = e.memoizedProps;
            bS(e, t, K, Y);
          } else {
            if (typeof Y != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var te = g2(), Me = t0(), lt = pm(t);
            lt ? rb(t) && Zf(t) : t.stateNode = Wx(Y, te, Me, t);
          }
          return Br(t), null;
        }
        case he: {
          Gf(t);
          var et = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var zt = ER(e, t, et);
            if (!zt)
              return t.flags & rr ? t : null;
          }
          if ((t.flags & tt) !== rt)
            return t.lanes = a, (t.mode & $t) !== at && O0(t), t;
          var Lt = et !== null, $ = e !== null && e.memoizedState !== null;
          if (Lt !== $ && Lt) {
            var ne = t.child;
            if (ne.flags |= Fn, (t.mode & Dt) !== at) {
              var B = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              B || r0(mo.current, C2) ? xk() : b1();
            }
          }
          var ye = t.updateQueue;
          if (ye !== null && (t.flags |= jt), Br(t), (t.mode & $t) !== at && Lt) {
            var $e = t.child;
            $e !== null && (t.treeBaseDuration -= $e.treeBaseDuration);
          }
          return null;
        }
        case I:
          return Wf(t), l1(e, t), e === null && Fw(t.stateNode.containerInfo), Br(t), null;
        case ve:
          var Ue = t.type._context;
          return Yg(Ue, t), Br(t), null;
        case it: {
          var vt = t.type;
          return tl(vt) && lm(t), Br(t), null;
        }
        case X: {
          Gf(t);
          var Ct = t.memoizedState;
          if (Ct === null)
            return Br(t), null;
          var on = (t.flags & tt) !== rt, Wt = Ct.rendering;
          if (Wt === null)
            if (on)
              tv(Ct, !1);
            else {
              var er = bk() && (e === null || (e.flags & tt) === rt);
              if (!er)
                for (var Yt = t.child; Yt !== null; ) {
                  var Wn = Dm(Yt);
                  if (Wn !== null) {
                    on = !0, t.flags |= tt, tv(Ct, !1);
                    var va = Wn.updateQueue;
                    return va !== null && (t.updateQueue = va, t.flags |= jt), t.subtreeFlags = rt, pb(t, a), Qu(t, a0(mo.current, Hp)), t.child;
                  }
                  Yt = Yt.sibling;
                }
              Ct.tail !== null && Jn() > YS() && (t.flags |= tt, on = !0, tv(Ct, !1), t.lanes = Yd);
            }
          else {
            if (!on) {
              var Qr = Dm(Wt);
              if (Qr !== null) {
                t.flags |= tt, on = !0;
                var yi = Qr.updateQueue;
                if (yi !== null && (t.updateQueue = yi, t.flags |= jt), tv(Ct, !0), Ct.tail === null && Ct.tailMode === "hidden" && !Wt.alternate && !Hr())
                  return Br(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Jn() * 2 - Ct.renderingStartTime > YS() && a !== oa && (t.flags |= tt, on = !0, tv(Ct, !1), t.lanes = Yd);
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
            var ha = mo.current;
            return on ? ha = a0(ha, Hp) : ha = Yf(ha), Qu(t, ha), Na;
          }
          return Br(t), null;
        }
        case V:
          break;
        case J:
        case Ee: {
          w1(t);
          var ru = t.memoizedState, ld = ru !== null;
          if (e !== null) {
            var yv = e.memoizedState, sl = yv !== null;
            sl !== ld && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ge && (t.flags |= Fn);
          }
          return !ld || (t.mode & Dt) === at ? Br(t) : la(ul, oa) && (Br(t), t.subtreeFlags & (Cn | jt) && (t.flags |= Fn)), null;
        }
        case He:
          return null;
        case Ne:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function xR(e, t, a) {
      switch (Mg(t), t.tag) {
        case b: {
          var i = t.type;
          tl(i) && lm(t);
          var l = t.flags;
          return l & rr ? (t.flags = l & ~rr | tt, (t.mode & $t) !== at && O0(t), t) : null;
        }
        case A: {
          t.stateNode, Wf(t), Dg(t), o0();
          var s = t.flags;
          return (s & rr) !== rt && (s & tt) === rt ? (t.flags = s & ~rr | tt, t) : null;
        }
        case q:
          return n0(t), null;
        case he: {
          Gf(t);
          var d = t.memoizedState;
          if (d !== null && d.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Hf();
          }
          var y = t.flags;
          return y & rr ? (t.flags = y & ~rr | tt, (t.mode & $t) !== at && O0(t), t) : null;
        }
        case X:
          return Gf(t), null;
        case I:
          return Wf(t), null;
        case ve:
          var g = t.type._context;
          return Yg(g, t), null;
        case J:
        case Ee:
          return w1(t), null;
        case He:
          return null;
        default:
          return null;
      }
    }
    function kS(e, t, a) {
      switch (Mg(t), t.tag) {
        case b: {
          var i = t.type.childContextTypes;
          i != null && lm(t);
          break;
        }
        case A: {
          t.stateNode, Wf(t), Dg(t), o0();
          break;
        }
        case q: {
          n0(t);
          break;
        }
        case I:
          Wf(t);
          break;
        case he:
          Gf(t);
          break;
        case X:
          Gf(t);
          break;
        case ve:
          var l = t.type._context;
          Yg(l, t);
          break;
        case J:
        case Ee:
          w1(t);
          break;
      }
    }
    var TS = null;
    TS = /* @__PURE__ */ new Set();
    var Zm = !1, qr = !1, wR = typeof WeakSet == "function" ? WeakSet : Set, Ke = null, ed = null, td = null;
    function bR(e) {
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
    function NS(e, t) {
      try {
        LS(e);
      } catch (a) {
        mn(e, t, a);
      }
    }
    function nd(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (ze && ht && e.mode & $t)
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
          typeof i == "function" && h("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", gt(e));
        } else
          a.current = null;
    }
    function ey(e, t, a) {
      try {
        a();
      } catch (i) {
        mn(e, t, i);
      }
    }
    var OS = !1;
    function TR(e, t) {
      Ix(e.containerInfo), Ke = t, DR();
      var a = OS;
      return OS = !1, a;
    }
    function DR() {
      for (; Ke !== null; ) {
        var e = Ke, t = e.child;
        (e.subtreeFlags & Fo) !== rt && t !== null ? (t.return = e, Ke = t) : NR();
      }
    }
    function NR() {
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
      if ((a & Xn) !== rt) {
        switch (en(e), e.tag) {
          case k:
          case _e:
          case Ve:
            break;
          case b: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !pc && (s.props !== e.memoizedProps && h("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(e) || "instance"), s.state !== e.memoizedState && h("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(e) || "instance"));
              var d = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : go(e.type, i), l);
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
              fw(g.containerInfo);
            }
            break;
          }
          case q:
          case oe:
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
            d.destroy = void 0, y !== void 0 && ((e & $r) !== Ya ? oo(t) : (e & yr) !== Ya && xs(t), (e & nl) !== Ya && vv(!0), ey(t, a, y), (e & nl) !== Ya && vv(!1), (e & $r) !== Ya ? $o() : (e & yr) !== Ya && qd());
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
            (e & $r) !== Ya ? Bd(t) : (e & yr) !== Ya && Wc(t);
            var d = s.create;
            (e & nl) !== Ya && vv(!0), s.destroy = d(), (e & nl) !== Ya && vv(!1), (e & $r) !== Ya ? ih() : (e & yr) !== Ya && oh();
            {
              var y = s.destroy;
              if (y !== void 0 && typeof y != "function") {
                var g = void 0;
                (s.tag & yr) !== rt ? g = "useLayoutEffect" : (s.tag & nl) !== rt ? g = "useInsertionEffect" : g = "useEffect";
                var w = void 0;
                y === null ? w = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof y.then == "function" ? w = `

It looks like you wrote ` + g + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + g + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : w = " You returned: " + y, h("%s must not return anything besides a function, which is used for clean-up.%s", g, w);
              }
            }
          }
          s = s.next;
        } while (s !== l);
      }
    }
    function LR(e, t) {
      if ((t.flags & jt) !== rt)
        switch (t.tag) {
          case Re: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, d = Y2(), y = t.alternate === null ? "mount" : "update";
            W2() && (y = "nested-update"), typeof s == "function" && s(l, y, a, d);
            var g = t.return;
            e: for (; g !== null; ) {
              switch (g.tag) {
                case A:
                  var w = g.stateNode;
                  w.passiveEffectDuration += a;
                  break e;
                case Re:
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
      if ((a.flags & Vo) !== rt)
        switch (a.tag) {
          case k:
          case _e:
          case Ve: {
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
          case b: {
            var l = a.stateNode;
            if (a.flags & jt && !qr)
              if (t === null)
                if (a.type === a.elementType && !pc && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(a) || "instance")), a.mode & $t)
                  try {
                    ol(), l.componentDidMount();
                  } finally {
                    il(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : go(a.type, t.memoizedProps), d = t.memoizedState;
                if (a.type === a.elementType && !pc && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(a) || "instance")), a.mode & $t)
                  try {
                    ol(), l.componentDidUpdate(s, d, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    il(a);
                  }
                else
                  l.componentDidUpdate(s, d, l.__reactInternalSnapshotBeforeUpdate);
              }
            var y = a.updateQueue;
            y !== null && (a.type === a.elementType && !pc && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(a) || "instance")), y2(a, y, l));
            break;
          }
          case A: {
            var g = a.updateQueue;
            if (g !== null) {
              var w = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case q:
                    w = a.child.stateNode;
                    break;
                  case b:
                    w = a.child.stateNode;
                    break;
                }
              y2(a, g, w);
            }
            break;
          }
          case q: {
            var T = a.stateNode;
            if (t === null && a.flags & jt) {
              var P = a.type, U = a.memoizedProps;
              Xx(T, P, U);
            }
            break;
          }
          case oe:
            break;
          case I:
            break;
          case Re: {
            {
              var Y = a.memoizedProps, K = Y.onCommit, te = Y.onRender, Me = a.stateNode.effectDuration, lt = Y2(), et = t === null ? "mount" : "update";
              W2() && (et = "nested-update"), typeof te == "function" && te(a.memoizedProps.id, et, a.actualDuration, a.treeBaseDuration, a.actualStartTime, lt);
              {
                typeof K == "function" && K(a.memoizedProps.id, et, Me, lt), Nk(a);
                var zt = a.return;
                e: for (; zt !== null; ) {
                  switch (zt.tag) {
                    case A:
                      var Lt = zt.stateNode;
                      Lt.effectDuration += Me;
                      break e;
                    case Re:
                      var $ = zt.stateNode;
                      $.effectDuration += Me;
                      break e;
                  }
                  zt = zt.return;
                }
              }
            }
            break;
          }
          case he: {
            VR(e, a);
            break;
          }
          case X:
          case it:
          case V:
          case J:
          case Ee:
          case Ne:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      qr || a.flags & bn && LS(a);
    }
    function jR(e) {
      switch (e.tag) {
        case k:
        case _e:
        case Ve: {
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
        case b: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && kR(e, e.return, t), NS(e, e.return);
          break;
        }
        case q: {
          NS(e, e.return);
          break;
        }
      }
    }
    function AR(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === q) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? lw(l) : sw(i.stateNode, i.memoizedProps);
            } catch (d) {
              mn(e, e.return, d);
            }
          }
        } else if (i.tag === oe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? uw(s) : cw(s, i.memoizedProps);
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
        if (e.tag === q ? i = a : i = a, typeof t == "function") {
          var l;
          if (e.mode & $t)
            try {
              ol(), l = t(i);
            } finally {
              il(e);
            }
          else
            l = t(i);
          typeof l == "function" && h("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", gt(e));
        } else
          t.hasOwnProperty("current") || h("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", gt(e)), t.current = i;
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
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === q) {
          var a = e.stateNode;
          a !== null && Hw(a);
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
      return e.tag === q || e.tag === A || e.tag === I;
    }
    function AS(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || jS(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== q && t.tag !== oe && t.tag !== ut; ) {
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
        case q: {
          var a = t.stateNode;
          t.flags & za && (z_(a), t.flags &= ~za);
          var i = AS(e);
          c1(e, i, a);
          break;
        }
        case A:
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
      var i = e.tag, l = i === q || i === oe;
      if (l) {
        var s = e.stateNode;
        t ? rw(a, s, t) : tw(a, s);
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
      var i = e.tag, l = i === q || i === oe;
      if (l) {
        var s = e.stateNode;
        t ? nw(a, s, t) : ew(a, s);
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
            case q: {
              Wr = i.stateNode, Co = !1;
              break e;
            }
            case A: {
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
      switch (Vd(a), a.tag) {
        case q:
          qr || nd(a, t);
        // eslint-disable-next-line-no-fallthrough
        case oe: {
          {
            var i = Wr, l = Co;
            Wr = null, Zu(e, t, a), Wr = i, Co = l, Wr !== null && (Co ? iw(Wr, a.stateNode) : aw(Wr, a.stateNode));
          }
          return;
        }
        case ut: {
          Wr !== null && (Co ? ow(Wr, a.stateNode) : Cg(Wr, a.stateNode));
          return;
        }
        case I: {
          {
            var s = Wr, d = Co;
            Wr = a.stateNode.containerInfo, Co = !0, Zu(e, t, a), Wr = s, Co = d;
          }
          return;
        }
        case k:
        case _e:
        case Ye:
        case Ve: {
          if (!qr) {
            var y = a.updateQueue;
            if (y !== null) {
              var g = y.lastEffect;
              if (g !== null) {
                var w = g.next, T = w;
                do {
                  var P = T, U = P.destroy, Y = P.tag;
                  U !== void 0 && ((Y & nl) !== Ya ? ey(a, t, U) : (Y & yr) !== Ya && (xs(a), a.mode & $t ? (ol(), ey(a, t, U), il(a)) : ey(a, t, U), qd())), T = T.next;
                } while (T !== w);
              }
            }
          }
          Zu(e, t, a);
          return;
        }
        case b: {
          if (!qr) {
            nd(a, t);
            var K = a.stateNode;
            typeof K.componentWillUnmount == "function" && u1(a, t, K);
          }
          Zu(e, t, a);
          return;
        }
        case V: {
          Zu(e, t, a);
          return;
        }
        case J: {
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
            s !== null && bw(s);
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
          var l = zk.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ia)
              if (ed !== null && td !== null)
                pv(td, ed);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function HR(e, t, a) {
      ed = a, td = e, en(t), PS(t, e), en(t), ed = null, td = null;
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
      var d = No();
      if (t.subtreeFlags & Io)
        for (var y = t.child; y !== null; )
          en(y), PS(y, e), y = y.sibling;
      en(d);
    }
    function PS(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case k:
        case _e:
        case Ye:
        case Ve: {
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
        case b: {
          Eo(t, e), ll(e), l & bn && i !== null && nd(i, i.return);
          return;
        }
        case q: {
          Eo(t, e), ll(e), l & bn && i !== null && nd(i, i.return);
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
                var y = e.memoizedProps, g = i !== null ? i.memoizedProps : y, w = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    Jx(d, T, w, g, y, e);
                  } catch (vt) {
                    mn(e, e.return, vt);
                  }
              }
            }
          }
          return;
        }
        case oe: {
          if (Eo(t, e), ll(e), l & jt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var P = e.stateNode, U = e.memoizedProps, Y = i !== null ? i.memoizedProps : U;
            try {
              Zx(P, Y, U);
            } catch (vt) {
              mn(e, e.return, vt);
            }
          }
          return;
        }
        case A: {
          if (Eo(t, e), ll(e), l & jt && i !== null) {
            var K = i.memoizedState;
            if (K.isDehydrated)
              try {
                ww(t.containerInfo);
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
            var Me = te.stateNode, lt = te.memoizedState, et = lt !== null;
            if (Me.isHidden = et, et) {
              var zt = te.alternate !== null && te.alternate.memoizedState !== null;
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
        case J: {
          var Lt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Dt
          ) {
            var $ = qr;
            qr = $ || Lt, Eo(t, e), qr = $;
          } else
            Eo(t, e);
          if (ll(e), l & Fn) {
            var ne = e.stateNode, B = e.memoizedState, ye = B !== null, $e = e;
            if (ne.isHidden = ye, ye && !Lt && ($e.mode & Dt) !== at) {
              Ke = $e;
              for (var Ue = $e.child; Ue !== null; )
                Ke = Ue, BR(Ue), Ue = Ue.sibling;
            }
            AR($e, ye);
          }
          return;
        }
        case X: {
          Eo(t, e), ll(e), l & jt && zS(e);
          return;
        }
        case V:
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
      ed = a, td = t, Ke = e, FS(e, t, a), ed = null, td = null;
    }
    function FS(e, t, a) {
      for (var i = (e.mode & Dt) !== at; Ke !== null; ) {
        var l = Ke, s = l.child;
        if (l.tag === J && i) {
          var d = l.memoizedState !== null, y = d || Zm;
          if (y) {
            f1(e, t, a);
            continue;
          } else {
            var g = l.alternate, w = g !== null && g.memoizedState !== null, T = w || qr, P = Zm, U = qr;
            Zm = y, qr = T, qr && !U && (Ke = l, qR(l));
            for (var Y = s; Y !== null; )
              Ke = Y, FS(
                Y,
                // New root; bubble back up to here and stop.
                t,
                a
              ), Y = Y.sibling;
            Ke = l, Zm = P, qr = U, f1(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & Vo) !== rt && s !== null ? (s.return = l, Ke = s) : f1(e, t, a);
      }
    }
    function f1(e, t, a) {
      for (; Ke !== null; ) {
        var i = Ke;
        if ((i.flags & Vo) !== rt) {
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
          case k:
          case _e:
          case Ye:
          case Ve: {
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
          case b: {
            nd(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && u1(t, t.return, i);
            break;
          }
          case q: {
            nd(t, t.return);
            break;
          }
          case J: {
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
        if (t.tag === J) {
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
        (l.subtreeFlags & ao) !== rt && s !== null ? (s.return = l, Ke = s) : GR(e, t, a, i);
      }
    }
    function GR(e, t, a, i) {
      for (; Ke !== null; ) {
        var l = Ke;
        if ((l.flags & ta) !== rt) {
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
        case k:
        case _e:
        case Ve: {
          if (t.mode & $t) {
            N0();
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
        if ((Ke.flags & Ua) !== rt) {
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
        (e.subtreeFlags & ao) !== rt && t !== null ? (t.return = e, Ke = t) : JR();
      }
    }
    function JR() {
      for (; Ke !== null; ) {
        var e = Ke;
        (e.flags & ta) !== rt && (en(e), ZR(e), hn());
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
        case k:
        case _e:
        case Ve: {
          e.mode & $t ? (N0(), So($r | mr, e, e.return), D0(e)) : So($r | mr, e, e.return);
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
        case k:
        case _e:
        case Ve: {
          e.mode & $t ? (N0(), So($r, e, t), D0(e)) : So($r, e, t);
          break;
        }
      }
    }
    function rk(e) {
      switch (e.tag) {
        case k:
        case _e:
        case Ve: {
          try {
            Ju(yr | mr, e);
          } catch (a) {
            mn(e, e.return, a);
          }
          break;
        }
        case b: {
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
        case k:
        case _e:
        case Ve: {
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
        case k:
        case _e:
        case Ve: {
          try {
            So(yr | mr, e, e.return);
          } catch (a) {
            mn(e, e.return, a);
          }
          break;
        }
        case b: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && u1(e, e.return, t);
          break;
        }
      }
    }
    function ok(e) {
      switch (e.tag) {
        case k:
        case _e:
        case Ve:
          try {
            So($r | mr, e, e.return);
          } catch (t) {
            mn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var nv = Symbol.for;
      nv("selector.component"), nv("selector.has_pseudo_class"), nv("selector.role"), nv("selector.test_id"), nv("selector.text");
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
    ), Zl = 0, rv = 1, vc = 2, ty = 3, av = 4, BS = 5, v1 = 6, Ut = Sr, ka = null, An = null, Cr = ue, ul = ue, h1 = $u(ue), Er = Zl, iv = null, ny = ue, ov = ue, ry = ue, lv = null, Ga = null, m1 = 0, qS = 500, WS = 1 / 0, dk = 500, eu = null;
    function uv() {
      WS = Jn() + dk;
    }
    function YS() {
      return WS;
    }
    var ay = !1, y1 = null, rd = null, hc = !1, es = null, sv = ue, g1 = [], _1 = null, pk = 50, cv = 0, S1 = null, C1 = !1, iy = !1, vk = 50, ad = 0, oy = null, fv = ln, ly = ue, GS = !1;
    function uy() {
      return ka;
    }
    function Ta() {
      return (Ut & (Gr | qi)) !== Sr ? Jn() : (fv !== ln || (fv = Jn()), fv);
    }
    function ts(e) {
      var t = e.mode;
      if ((t & Dt) === at)
        return pt;
      if ((Ut & Gr) !== Sr && Cr !== ue)
        return Us(Cr);
      var a = sb() !== ub;
      if (a) {
        if (Yr.transition !== null) {
          var i = Yr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return ly === Vt && (ly = Zd()), ly;
      }
      var l = $a();
      if (l !== Vt)
        return l;
      var s = Yx();
      return s;
    }
    function hk(e) {
      var t = e.mode;
      return (t & Dt) === at ? pt : dh();
    }
    function xr(e, t, a, i) {
      Fk(), GS && h("useInsertionEffect must not schedule updates."), C1 && (iy = !0), Lu(e, a, i), (Ut & Gr) !== ue && e === ka ? Hk(t) : (ia && Fs(e, t, a), $k(t), e === ka && ((Ut & Gr) === Sr && (ov = wt(ov, a)), Er === av && ns(e, Cr)), Qa(e, i), a === pt && Ut === Sr && (t.mode & Dt) === at && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !xo.isBatchingLegacy && (uv(), G_()));
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
      pf(e, t);
      var i = df(e, e === ka ? Cr : ue);
      if (i === ue) {
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
        e.tag === Bu ? (xo.isBatchingLegacy !== null && (xo.didScheduleLegacyUpdate = !0), qw(XS.bind(null, e))) : Y_(XS.bind(null, e)), xo.current !== null ? xo.current.push(qu) : Qx(function() {
          (Ut & (Gr | qi)) === Sr && qu();
        }), d = null;
      else {
        var y;
        switch (_h(i)) {
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
      if (Ab(), fv = ln, ly = ue, (Ut & (Gr | qi)) !== Sr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = nu();
      if (i && e.callbackNode !== a)
        return null;
      var l = df(e, e === ka ? Cr : ue);
      if (l === ue)
        return null;
      var s = !hf(e, l) && !fh(e, l) && !t, d = s ? kk(e, l) : cy(e, l);
      if (d !== Zl) {
        if (d === vc) {
          var y = vf(e);
          y !== ue && (l = y, d = E1(e, y));
        }
        if (d === rv) {
          var g = iv;
          throw mc(e, ue), ns(e, l), Qa(e, Jn()), g;
        }
        if (d === v1)
          ns(e, l);
        else {
          var w = !hf(e, l), T = e.current.alternate;
          if (w && !_k(T)) {
            if (d = cy(e, l), d === vc) {
              var P = vf(e);
              P !== ue && (l = P, d = E1(e, P));
            }
            if (d === rv) {
              var U = iv;
              throw mc(e, ue), ns(e, l), Qa(e, Jn()), U;
            }
          }
          e.finishedWork = T, e.finishedLanes = l, gk(e, d, l);
        }
      }
      return Qa(e, Jn()), e.callbackNode === a ? QS.bind(null, e) : null;
    }
    function E1(e, t) {
      var a = lv;
      if (gf(e)) {
        var i = mc(e, t);
        i.flags |= kr, Pw(e.containerInfo);
      }
      var l = cy(e, t);
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
        case rv:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case vc: {
          yc(e, Ga, eu);
          break;
        }
        case ty: {
          if (ns(e, a), Pl(a) && // do not delay if we're inside an act() scope
          !fC()) {
            var i = m1 + qS - Jn();
            if (i > 10) {
              var l = df(e, ue);
              if (l !== ue)
                break;
              var s = e.suspendedLanes;
              if (!Fl(s, a)) {
                Ta(), mf(e, s);
                break;
              }
              e.timeoutHandle = _g(yc.bind(null, e, Ga, eu), i);
              break;
            }
          }
          yc(e, Ga, eu);
          break;
        }
        case av: {
          if (ns(e, a), Xd(a))
            break;
          if (!fC()) {
            var d = di(e, a), y = d, g = Jn() - y, w = Pk(g) - g;
            if (w > 10) {
              e.timeoutHandle = _g(yc.bind(null, e, Ga, eu), w);
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
                  if (!de(d(), y))
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
      t = zs(t, ry), t = zs(t, ov), hh(e, t);
    }
    function XS(e) {
      if (Ub(), (Ut & (Gr | qi)) !== Sr)
        throw new Error("Should not already be working.");
      nu();
      var t = df(e, ue);
      if (!la(t, pt))
        return Qa(e, Jn()), null;
      var a = cy(e, t);
      if (e.tag !== Bu && a === vc) {
        var i = vf(e);
        i !== ue && (t = i, a = E1(e, i));
      }
      if (a === rv) {
        var l = iv;
        throw mc(e, ue), ns(e, t), Qa(e, Jn()), l;
      }
      if (a === v1)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, yc(e, Ga, eu), Qa(e, Jn()), null;
    }
    function Sk(e, t) {
      t !== ue && (yf(e, wt(t, pt)), Qa(e, Jn()), (Ut & (Gr | qi)) === Sr && (uv(), qu()));
    }
    function x1(e, t) {
      var a = Ut;
      Ut |= $S;
      try {
        return e(t);
      } finally {
        Ut = a, Ut === Sr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !xo.isBatchingLegacy && (uv(), G_());
      }
    }
    function Ck(e, t, a, i, l) {
      var s = $a(), d = Yr.transition;
      try {
        return Yr.transition = null, $n(zr), e(t, a, i, l);
      } finally {
        $n(s), Yr.transition = d, Ut === Sr && uv();
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
    function sy(e, t) {
      da(h1, ul, e), ul = wt(ul, t);
    }
    function w1(e) {
      ul = h1.current, fa(h1, e);
    }
    function mc(e, t) {
      e.finishedWork = null, e.finishedLanes = ue;
      var a = e.timeoutHandle;
      if (a !== Sg && (e.timeoutHandle = Sg, Gx(a)), An !== null)
        for (var i = An.return; i !== null; ) {
          var l = i.alternate;
          kS(l, i), i = i.return;
        }
      ka = e;
      var s = gc(e.current, null);
      return An = s, Cr = ul = t, Er = Zl, iv = null, ny = ue, ov = ue, ry = ue, lv = null, Ga = null, mb(), ho.discardPendingWarnings(), s;
    }
    function ZS(e, t) {
      do {
        var a = An;
        try {
          if (_m(), x2(), hn(), p1.current = null, a === null || a.return === null) {
            Er = rv, iv = t, An = null;
            return;
          }
          if (ze && a.mode & $t && Gm(a, !0), Je)
            if (xa(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              ji(a, i, Cr);
            } else
              ws(a, t, Cr);
          qb(e, a.return, a, t, Cr), rC(a);
        } catch (l) {
          t = l, An === a && a !== null ? (a = a.return, An = a) : a = An;
          continue;
        }
        return;
      } while (!0);
    }
    function eC() {
      var e = d1.current;
      return d1.current = $m, e === null ? $m : e;
    }
    function tC(e) {
      d1.current = e;
    }
    function Ek() {
      m1 = Jn();
    }
    function dv(e) {
      ny = wt(e, ny);
    }
    function xk() {
      Er === Zl && (Er = ty);
    }
    function b1() {
      (Er === Zl || Er === ty || Er === vc) && (Er = av), ka !== null && (As(ny) || As(ov)) && ns(ka, Cr);
    }
    function wk(e) {
      Er !== av && (Er = vc), lv === null ? lv = [e] : lv.push(e);
    }
    function bk() {
      return Er === Zl;
    }
    function cy(e, t) {
      var a = Ut;
      Ut |= Gr;
      var i = eC();
      if (ka !== e || Cr !== t) {
        if (ia) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (pv(e, Cr), l.clear()), mh(e, t);
        }
        eu = rp(), mc(e, t);
      }
      Ol(t);
      do
        try {
          Rk();
          break;
        } catch (s) {
          ZS(e, s);
        }
      while (!0);
      if (_m(), Ut = a, tC(i), An !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Yc(), ka = null, Cr = ue, Er;
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
          l.size > 0 && (pv(e, Cr), l.clear()), mh(e, t);
        }
        eu = rp(), uv(), mc(e, t);
      }
      Ol(t);
      do
        try {
          Tk();
          break;
        } catch (s) {
          ZS(e, s);
        }
      while (!0);
      return _m(), tC(i), Ut = a, An !== null ? (lh(), Zl) : (Yc(), ka = null, Cr = ue, Er);
    }
    function Tk() {
      for (; An !== null && !Ud(); )
        nC(An);
    }
    function nC(e) {
      var t = e.alternate;
      en(e);
      var a;
      (e.mode & $t) !== at ? (T0(e), a = R1(t, e, ul), Gm(e, !0)) : a = R1(t, e, ul), hn(), e.memoizedProps = e.pendingProps, a === null ? rC(e) : An = a, p1.current = null;
    }
    function rC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Cs) === rt) {
          en(t);
          var l = void 0;
          if ((t.mode & $t) === at ? l = RS(a, t, ul) : (T0(t), l = RS(a, t, ul), Gm(t, !1)), hn(), l !== null) {
            An = l;
            return;
          }
        } else {
          var s = xR(a, t);
          if (s !== null) {
            s.flags &= th, An = s;
            return;
          }
          if ((t.mode & $t) !== at) {
            Gm(t, !1);
            for (var d = t.actualDuration, y = t.child; y !== null; )
              d += y.actualDuration, y = y.sibling;
            t.actualDuration = d;
          }
          if (i !== null)
            i.flags |= Cs, i.subtreeFlags = rt, i.deletions = null;
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
      if (Hd(s), l === null)
        return $d(), null;
      if (s === ue && h("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ue, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Vt;
      var d = wt(l.lanes, l.childLanes);
      tp(e, d), e === ka && (ka = null, An = null, Cr = ue), ((l.subtreeFlags & ao) !== rt || (l.flags & ao) !== rt) && (hc || (hc = !0, _1 = a, D1(io, function() {
        return nu(), null;
      })));
      var y = (l.subtreeFlags & (Fo | Io | Vo | ao)) !== rt, g = (l.flags & (Fo | Io | Vo | ao)) !== rt;
      if (y || g) {
        var w = Yr.transition;
        Yr.transition = null;
        var T = $a();
        $n(zr);
        var P = Ut;
        Ut |= qi, p1.current = null, TR(e, l), G2(), HR(e, l, s), Vx(e.containerInfo), e.current = l, bs(s), $R(l, e, s), Rs(), zd(), Ut = P, $n(T), Yr.transition = w;
      } else
        e.current = l, G2();
      var U = hc;
      if (hc ? (hc = !1, es = e, sv = s) : (ad = 0, oy = null), d = e.pendingLanes, d === ue && (rd = null), U || lC(e.current, !1), Fd(l.stateNode, i), ia && e.memoizedUpdaters.clear(), uk(), Qa(e, Jn()), t !== null)
        for (var Y = e.onRecoverableError, K = 0; K < t.length; K++) {
          var te = t[K], Me = te.stack, lt = te.digest;
          Y(te.value, {
            componentStack: Me,
            digest: lt
          });
        }
      if (ay) {
        ay = !1;
        var et = y1;
        throw y1 = null, et;
      }
      return la(sv, pt) && e.tag !== Bu && nu(), d = e.pendingLanes, la(d, pt) ? (jb(), e === S1 ? cv++ : (cv = 0, S1 = e)) : cv = 0, qu(), $d(), null;
    }
    function nu() {
      if (es !== null) {
        var e = _h(sv), t = Vs(Va, e), a = Yr.transition, i = $a();
        try {
          return Yr.transition = null, $n(t), Ok();
        } finally {
          $n(i), Yr.transition = a;
        }
      }
      return !1;
    }
    function Nk(e) {
      g1.push(e), hc || (hc = !0, D1(io, function() {
        return nu(), null;
      }));
    }
    function Ok() {
      if (es === null)
        return !1;
      var e = _1;
      _1 = null;
      var t = es, a = sv;
      if (es = null, sv = ue, (Ut & (Gr | qi)) !== Sr)
        throw new Error("Cannot flush passive effects while already rendering.");
      C1 = !0, iy = !1, Nl(a);
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
      Wd(), lC(t.current, !0), Ut = i, qu(), iy ? t === oy ? ad++ : (ad = 0, oy = t) : ad = 0, C1 = !1, iy = !1, Id(t);
      {
        var y = t.current.stateNode;
        y.effectDuration = 0, y.passiveEffectDuration = 0;
      }
      return !0;
    }
    function aC(e) {
      return rd !== null && rd.has(e);
    }
    function Lk(e) {
      rd === null ? rd = /* @__PURE__ */ new Set([e]) : rd.add(e);
    }
    function Mk(e) {
      ay || (ay = !0, y1 = e);
    }
    var jk = Mk;
    function iC(e, t, a) {
      var i = dc(a, t), l = nS(e, i, pt), s = Yu(e, l, pt), d = Ta();
      s !== null && (Lu(s, pt, d), Qa(s, d));
    }
    function mn(e, t, a) {
      if (bR(a), vv(!1), e.tag === A) {
        iC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === A) {
          iC(i, e, a);
          return;
        } else if (i.tag === b) {
          var l = i.type, s = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !aC(s)) {
            var d = dc(a, e), y = W0(i, d, pt), g = Yu(i, y, pt), w = Ta();
            g !== null && (Lu(g, pt, w), Qa(g, w));
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
      mf(e, a), Bk(e), ka === e && Fl(Cr, a) && (Er === av || Er === ty && Pl(Cr) && Jn() - m1 < qS ? mc(e, ue) : ry = wt(ry, a)), Qa(e, l);
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
        case he:
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
    function Pk(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : fk(e / 1960) * 1960;
    }
    function Fk() {
      if (cv > pk)
        throw cv = 0, S1 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      ad > vk && (ad = 0, oy = null, h("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Ik() {
      ho.flushLegacyContextWarning(), ho.flushPendingUnsafeLifecycleWarnings();
    }
    function lC(e, t) {
      en(e), fy(e, Po, ik), t && fy(e, Oi, ok), fy(e, Po, rk), t && fy(e, Oi, ak), hn();
    }
    function fy(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== rt ? i = i.child : ((i.flags & t) !== rt && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var dy = null;
    function uC(e) {
      {
        if ((Ut & Gr) !== Sr || !(e.mode & Dt))
          return;
        var t = e.tag;
        if (t !== O && t !== A && t !== b && t !== k && t !== _e && t !== Ye && t !== Ve)
          return;
        var a = gt(e) || "ReactComponent";
        if (dy !== null) {
          if (dy.has(a))
            return;
          dy.add(a);
        } else
          dy = /* @__PURE__ */ new Set([a]);
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
          if (Zw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (_m(), x2(), kS(e, t), mC(t, i), t.mode & $t && T0(t), zo(null, CS, null, e, t, a), no()) {
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
      if (wi && !Ob())
        switch (e.tag) {
          case k:
          case _e:
          case Ve: {
            var t = An && gt(An) || "Unknown", a = t;
            if (!k1.has(a)) {
              k1.add(a);
              var i = gt(e) || "Unknown";
              h("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case b: {
            sC || (h("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), sC = !0);
            break;
          }
        }
    }
    function pv(e, t) {
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
        return a !== null ? (a.push(t), T1) : Ad(e, t);
      }
    }
    function cC(e) {
      if (e !== T1)
        return rh(e);
    }
    function fC() {
      return xo.current !== null;
    }
    function $k(e) {
      {
        if (e.mode & Dt) {
          if (!HS())
            return;
        } else if (!ck() || Ut !== Sr || e.tag !== k && e.tag !== _e && e.tag !== Ve)
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
    function Bk(e) {
      e.tag !== Bu && HS() && xo.current === null && h(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function vv(e) {
      GS = e;
    }
    var Wi = null, id = null, qk = function(e) {
      Wi = e;
    };
    function od(e) {
      {
        if (Wi === null)
          return e;
        var t = Wi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function N1(e) {
      return od(e);
    }
    function O1(e) {
      {
        if (Wi === null)
          return e;
        var t = Wi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = od(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: le,
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
          case b: {
            typeof i == "function" && (l = !0);
            break;
          }
          case k: {
            (typeof i == "function" || s === _t) && (l = !0);
            break;
          }
          case _e: {
            (s === le || s === _t) && (l = !0);
            break;
          }
          case Ye:
          case Ve: {
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
        id === null && (id = /* @__PURE__ */ new WeakSet()), id.add(e);
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
          hv(t, e, null, null);
        });
      }
    };
    function L1(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, d = e.tag, y = e.type, g = null;
        switch (d) {
          case k:
          case Ve:
          case b:
            g = y;
            break;
          case _e:
            g = y.render;
            break;
        }
        if (Wi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var w = !1, T = !1;
        if (g !== null) {
          var P = Wi(g);
          P !== void 0 && (a.has(P) ? T = !0 : t.has(P) && (d === b ? T = !0 : w = !0));
        }
        if (id !== null && (id.has(e) || i !== null && id.has(i)) && (T = !0), T && (e._debugNeedsRemount = !0), T || w) {
          var U = Wa(e, pt);
          U !== null && xr(U, e, pt, ln);
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
          case k:
          case Ve:
          case b:
            y = d;
            break;
          case _e:
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
            case q:
              t.add(i.stateNode);
              return;
            case I:
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
    function Kk(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === q)
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
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = rt, this.subtreeFlags = rt, this.deletions = null, this.lanes = ue, this.childLanes = ue, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !j1 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
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
        return A1(e) ? b : k;
      if (e != null) {
        var t = e.$$typeof;
        if (t === le)
          return _e;
        if (t === Et)
          return Ye;
      }
      return O;
    }
    function gc(e, t) {
      var a = e.alternate;
      a === null ? (a = mi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = rt, a.subtreeFlags = rt, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & In, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case O:
        case k:
        case Ve:
          a.type = od(e.type);
          break;
        case b:
          a.type = N1(e.type);
          break;
        case _e:
          a.type = O1(e.type);
          break;
      }
      return a;
    }
    function eT(e, t) {
      e.flags &= In | Cn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ue, e.lanes = t, e.child = null, e.subtreeFlags = rt, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = rt, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
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
      return e === sm ? (i = Dt, t === !0 && (i |= rn, i |= Bt)) : i = at, ia && (i |= $t), mi(A, null, null, i);
    }
    function U1(e, t, a, i, l, s) {
      var d = O, y = e;
      if (typeof e == "function")
        A1(e) ? (d = b, y = N1(y)) : y = od(y);
      else if (typeof e == "string")
        d = q;
      else
        e: switch (e) {
          case Si:
            return rs(a.children, l, s, t);
          case ti:
            d = we, l |= rn, (l & Dt) !== at && (l |= Bt);
            break;
          case Ci:
            return nT(a, l, s, t);
          case Oe:
            return rT(a, l, s, t);
          case qe:
            return aT(a, l, s, t);
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
                case Ei:
                  d = ve;
                  break e;
                case M:
                  d = pe;
                  break e;
                case le:
                  d = _e, y = O1(y);
                  break e;
                case Et:
                  d = Ye;
                  break e;
                case _t:
                  d = We, y = null;
                  break e;
              }
            var g = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var w = i ? gt(i) : null;
              w && (g += `

Check the render method of \`` + w + "`.");
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
      var l = mi(ie, e, i, t);
      return l.lanes = a, l;
    }
    function nT(e, t, a, i) {
      typeof e.id != "string" && h('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = mi(Re, e, i, t | $t);
      return l.elementType = Ci, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function rT(e, t, a, i) {
      var l = mi(he, e, i, t);
      return l.elementType = Oe, l.lanes = a, l;
    }
    function aT(e, t, a, i) {
      var l = mi(X, e, i, t);
      return l.elementType = qe, l.lanes = a, l;
    }
    function hC(e, t, a, i) {
      var l = mi(J, e, i, t);
      l.elementType = Dn, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function P1(e, t, a) {
      var i = mi(oe, e, null, t);
      return i.lanes = a, i;
    }
    function iT() {
      var e = mi(q, null, null, at);
      return e.elementType = "DELETED", e;
    }
    function oT(e) {
      var t = mi(ut, null, null, at);
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
      return e === null && (e = mi(O, null, null, at)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function lT(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Sg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Vt, this.eventTimes = Ps(ue), this.expirationTimes = Ps(ln), this.pendingLanes = ue, this.suspendedLanes = ue, this.pingedLanes = ue, this.expiredLanes = ue, this.mutableReadLanes = ue, this.finishedLanes = ue, this.entangledLanes = ue, this.entanglements = Ps(ue), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], d = 0; d < Ll; d++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case sm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Bu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function yC(e, t, a, i, l, s, d, y, g, w) {
      var T = new lT(e, t, a, y, g), P = tT(t, s);
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
      return Jg(P), T;
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
      var t = Ru(e), a = Bw(t);
      if (t.tag === b) {
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
          var s = gt(a) || "Component";
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
      var g = !1, w = null;
      return yC(e, t, g, w, a, i, l, s, d);
    }
    function SC(e, t, a, i, l, s, d, y, g, w) {
      var T = !0, P = yC(a, i, T, e, l, s, d, y, g);
      P.context = gC(null);
      var U = P.current, Y = Ta(), K = ts(U), te = Xl(Y, K);
      return te.callback = t ?? null, Yu(U, te, K), mk(P, K, Y), P;
    }
    function hv(e, t, a, i) {
      Pd(t, e);
      var l = t.current, s = Ta(), d = ts(l);
      xn(d);
      var y = gC(a);
      t.context === null ? t.context = y : t.pendingContext = y, wi && fr !== null && !V1 && (V1 = !0, h(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, gt(fr) || "Unknown"));
      var g = Xl(s, d);
      g.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && h("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), g.callback = i);
      var w = Yu(l, g, d);
      return w !== null && (xr(w, l, d, s), wm(w, l, d)), d;
    }
    function py(e) {
      var t = e.current;
      return t.child ? t.child.tag === q ? t.child.stateNode : t.child.stateNode : null;
    }
    function cT(e) {
      switch (e.tag) {
        case A: {
          var t = e.stateNode;
          if (gf(t)) {
            var a = sh(t);
            Sk(t, a);
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
      a !== null && a.dehydrated !== null && (a.retryLane = vh(a.retryLane, t));
    }
    function $1(e, t) {
      CC(e, t);
      var a = e.alternate;
      a && CC(a, t);
    }
    function fT(e) {
      if (e.tag === he) {
        var t = Ls, a = Wa(e, t);
        if (a !== null) {
          var i = Ta();
          xr(a, e, t, i);
        }
        $1(e, t);
      }
    }
    function dT(e) {
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
    function pT(e) {
      return xC(e);
    }
    var wC = function(e) {
      return !1;
    };
    function vT(e) {
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
      }, FC = function(e, t, a) {
        return PC(e, t, 0, a);
      }, B1 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      bC = function(e, t, a, i) {
        var l = B1(e, t);
        if (l !== null) {
          var s = FC(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = bt({}, e.memoizedProps);
          var d = Wa(e, pt);
          d !== null && xr(d, e, pt, ln);
        }
      }, RC = function(e, t, a) {
        var i = B1(e, t);
        if (i !== null) {
          var l = AC(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = bt({}, e.memoizedProps);
          var s = Wa(e, pt);
          s !== null && xr(s, e, pt, ln);
        }
      }, kC = function(e, t, a, i) {
        var l = B1(e, t);
        if (l !== null) {
          var s = zC(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = bt({}, e.memoizedProps);
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
      }, NC = function(e, t, a) {
        e.pendingProps = zC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Wa(e, pt);
        i !== null && xr(i, e, pt, ln);
      }, OC = function(e) {
        var t = Wa(e, pt);
        t !== null && xr(t, e, pt, ln);
      }, LC = function(e) {
        xC = e;
      }, MC = function(e) {
        wC = e;
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
    vy.prototype.render = q1.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? h("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : hy(arguments[1]) ? h("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && h("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Pn) {
          var i = EC(t.current);
          i && i.parentNode !== a && h("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      hv(e, t, null, null);
    }, vy.prototype.unmount = q1.prototype.unmount = function() {
      typeof arguments[0] == "function" && h("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        JS() && h("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), tu(function() {
          hv(null, e, null, null);
        }), I_(t);
      }
    };
    function _T(e, t) {
      if (!hy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      VC(e);
      var a = !1, i = !1, l = "", s = IC;
      t != null && (t.hydrate ? E("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Mr && h(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var d = _C(e, sm, null, a, i, l, s);
      nm(d.current, e);
      var y = e.nodeType === Pn ? e.parentNode : e;
      return Cp(y), new q1(d);
    }
    function vy(e) {
      this._internalRoot = e;
    }
    function ST(e) {
      e && wh(e);
    }
    vy.prototype.unstable_scheduleHydration = ST;
    function CT(e, t, a) {
      if (!hy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      VC(e), t === void 0 && h("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, s = !1, d = !1, y = "", g = IC;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (y = a.identifierPrefix), a.onRecoverableError !== void 0 && (g = a.onRecoverableError));
      var w = SC(t, null, e, sm, i, s, d, y, g);
      if (nm(w.current, e), Cp(e), l)
        for (var T = 0; T < l.length; T++) {
          var P = l[T];
          bb(w, P);
        }
      return new vy(w);
    }
    function hy(e) {
      return !!(e && (e.nodeType === ea || e.nodeType === to || e.nodeType === xd));
    }
    function mv(e) {
      return !!(e && (e.nodeType === ea || e.nodeType === to || e.nodeType === xd || e.nodeType === Pn && e.nodeValue === " react-mount-point-unstable "));
    }
    function VC(e) {
      e.nodeType === ea && e.tagName && e.tagName.toUpperCase() === "BODY" && h("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Lp(e) && (e._reactRootContainer ? h("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : h("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
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
            var U = py(d);
            s.call(U);
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
        e._reactRootContainer = d, nm(d.current, e);
        var y = e.nodeType === Pn ? e.parentNode : e;
        return Cp(y), tu(), d;
      } else {
        for (var g; g = e.lastChild; )
          e.removeChild(g);
        if (typeof i == "function") {
          var w = i;
          i = function() {
            var U = py(T);
            w.call(U);
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
        e._reactRootContainer = T, nm(T.current, e);
        var P = e.nodeType === Pn ? e.parentNode : e;
        return Cp(P), tu(function() {
          hv(t, T, a, i);
        }), T;
      }
    }
    function wT(e, t) {
      e !== null && typeof e != "function" && h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function my(e, t, a, i, l) {
      HC(a), wT(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, d;
      if (!s)
        d = xT(a, t, e, l, i);
      else {
        if (d = s, typeof l == "function") {
          var y = l;
          l = function() {
            var g = py(d);
            y.call(g);
          };
        }
        hv(t, d, e, l);
      }
      return py(d);
    }
    var BC = !1;
    function bT(e) {
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
      if (h("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !mv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Lp(t) && t._reactRootContainer === void 0;
        i && h("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return my(null, e, t, !0, a);
    }
    function kT(e, t, a) {
      if (h("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !mv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Lp(t) && t._reactRootContainer === void 0;
        i && h("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return my(null, e, t, !1, a);
    }
    function TT(e, t, a, i) {
      if (h("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !mv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !$y(e))
        throw new Error("parentComponent must be a valid React Component");
      return my(e, t, a, !1, i);
    }
    var qC = !1;
    function DT(e) {
      if (qC || (qC = !0, h("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !mv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Lp(e) && e._reactRootContainer === void 0;
        t && h("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = W1(e), i = a && !Hu(a);
          i && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return tu(function() {
          my(null, null, e, !1, function() {
            e._reactRootContainer = null, I_(e);
          });
        }), !0;
      } else {
        {
          var l = W1(e), s = !!(l && Hu(l)), d = e.nodeType === ea && mv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", d ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Dr(cT), Mu(fT), Sh(dT), $s($a), ap(yh), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && h("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), jc(Ox), Hy(x1, Ck, tu);
    function NT(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!hy(t))
        throw new Error("Target container is not a DOM element.");
      return uT(e, t, null, a);
    }
    function OT(e, t, a, i) {
      return TT(e, t, a, i);
    }
    var Y1 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Hu, zf, rm, Eu, Ac, x1]
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
    Xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y1, Xa.createPortal = NT, Xa.createRoot = LT, Xa.findDOMNode = bT, Xa.flushSync = jT, Xa.hydrate = RT, Xa.hydrateRoot = MT, Xa.render = kT, Xa.unmountComponentAtNode = DT, Xa.unstable_batchedUpdates = x1, Xa.unstable_renderSubtreeIntoContainer = OT, Xa.version = I1, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })()), Xa;
}
var hE;
function mM() {
  if (hE) return Cy.exports;
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
  return process.env.NODE_ENV === "production" ? (c(), Cy.exports = vM()) : Cy.exports = hM(), Cy.exports;
}
var f_ = mM();
const Sv = /* @__PURE__ */ NE(f_);
function a_(c, v) {
  (v == null || v > c.length) && (v = c.length);
  for (var p = 0, S = Array(v); p < v; p++) S[p] = c[p];
  return S;
}
function yM(c) {
  if (Array.isArray(c)) return c;
}
function gM(c) {
  if (Array.isArray(c)) return a_(c);
}
function _M(c) {
  if (c === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return c;
}
function mE(c, v, p, S, x, E, h) {
  try {
    var R = c[E](h), k = R.value;
  } catch (b) {
    return void p(b);
  }
  R.done ? v(k) : Promise.resolve(k).then(S, x);
}
function SM(c) {
  return function() {
    var v = this, p = arguments;
    return new Promise(function(S, x) {
      var E = c.apply(v, p);
      function h(k) {
        mE(E, S, x, h, R, "next", k);
      }
      function R(k) {
        mE(E, S, x, h, R, "throw", k);
      }
      h(void 0);
    });
  };
}
function Ry(c, v, p) {
  return v = i_(v), RM(c, IE() ? Reflect.construct(v, p || [], i_(c).constructor) : v.apply(c, p));
}
function wv(c, v) {
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
function dd(c, v, p) {
  return (v = by(v)) in c ? Object.defineProperty(c, v, { value: p, enumerable: !0, configurable: !0, writable: !0 }) : c[v] = p, c;
}
function Cc() {
  return (Cc = Object.assign ? Object.assign.bind() : function(c) {
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
function CM(c) {
  if (typeof Symbol < "u" && c[Symbol.iterator] != null || c["@@iterator"] != null) return Array.from(c);
}
function EM(c, v) {
  var p = c == null ? null : typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
  if (p != null) {
    var S, x, E, h, R = [], k = !0, b = !1;
    try {
      if (E = (p = p.call(c)).next, v !== 0) for (; !(k = (S = E.call(p)).done) && (R.push(S.value), R.length !== v); k = !0) ;
    } catch (O) {
      b = !0, x = O;
    } finally {
      try {
        if (!k && p.return != null && (h = p.return(), Object(h) !== h)) return;
      } finally {
        if (b) throw x;
      }
    }
    return R;
  }
}
function xM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wM() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gE(c, v) {
  var p, S = Object.keys(c);
  return Object.getOwnPropertySymbols && (p = Object.getOwnPropertySymbols(c), v && (p = p.filter(function(x) {
    return Object.getOwnPropertyDescriptor(c, x).enumerable;
  })), S.push.apply(S, p)), S;
}
function se(c) {
  for (var v = 1; v < arguments.length; v++) {
    var p = arguments[v] != null ? arguments[v] : {};
    v % 2 ? gE(Object(p), !0).forEach(function(S) {
      dd(c, S, p[S]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(p)) : gE(Object(p)).forEach(function(S) {
      Object.defineProperty(c, S, Object.getOwnPropertyDescriptor(p, S));
    });
  }
  return c;
}
function Gi(c, v) {
  if (c == null) return {};
  var p, S = bM(c, v);
  if (Object.getOwnPropertySymbols) for (var x = Object.getOwnPropertySymbols(c), E = 0; E < x.length; E++) p = x[E], v.includes(p) || {}.propertyIsEnumerable.call(c, p) && (S[p] = c[p]);
  return S;
}
function bM(c, v) {
  if (c == null) return {};
  var p, S = {};
  for (p in c) if ({}.hasOwnProperty.call(c, p)) {
    if (v.includes(p)) continue;
    S[p] = c[p];
  }
  return S;
}
function RM(c, v) {
  if (v && (typeof v == "object" || typeof v == "function")) return v;
  if (v !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return _M(c);
}
function sd() {
  sd = function() {
    return v;
  };
  var c, v = {}, p = Object.prototype, S = p.hasOwnProperty, x = Object.defineProperty || function(V, J, Ee) {
    V[J] = Ee.value;
  }, _e = typeof Symbol == "function" ? Symbol : {}, E = _e.iterator || "@@iterator", h = _e.asyncIterator || "@@asyncIterator", R = _e.toStringTag || "@@toStringTag";
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
  function b(V, ge, Ee, F) {
    var Ne, xe, re, De, ge = ge && ge.prototype instanceof we ? ge : we, ge = Object.create(ge.prototype), F = new ut(F || []);
    return x(ge, "_invoke", { value: (Ne = V, xe = Ee, re = F, De = A, function(ee, Je) {
      if (De === q) throw Error("Generator is already running");
      if (De === oe) {
        if (ee === "throw") throw Je;
        return { value: c, done: !0 };
      }
      for (re.method = ee, re.arg = Je; ; ) {
        var ze = re.delegate;
        if (ze && (ze = (function ht(nt, Ae) {
          var dt = Ae.method, mt = nt.iterator[dt];
          return mt === c ? (Ae.delegate = null, dt === "throw" && nt.iterator.return && (Ae.method = "return", Ae.arg = c, ht(nt, Ae), Ae.method === "throw") || dt !== "return" && (Ae.method = "throw", Ae.arg = new TypeError("The iterator does not provide a '" + dt + "' method")), ie) : (dt = O(mt, nt.iterator, Ae.arg), dt.type === "throw" ? (Ae.method = "throw", Ae.arg = dt.arg, Ae.delegate = null, ie) : (mt = dt.arg, mt ? mt.done ? (Ae[nt.resultName] = mt.value, Ae.next = nt.nextLoc, Ae.method !== "return" && (Ae.method = "next", Ae.arg = c), Ae.delegate = null, ie) : mt : (Ae.method = "throw", Ae.arg = new TypeError("iterator result is not an object"), Ae.delegate = null, ie)));
        })(ze, re), ze)) {
          if (ze === ie) continue;
          return ze;
        }
        if (re.method === "next") re.sent = re._sent = re.arg;
        else if (re.method === "throw") {
          if (De === A) throw De = oe, re.arg;
          re.dispatchException(re.arg);
        } else re.method === "return" && re.abrupt("return", re.arg);
        if (De = q, ze = O(Ne, xe, re), ze.type === "normal") {
          if (De = re.done ? oe : I, ze.arg === ie) continue;
          return { value: ze.arg, done: re.done };
        }
        ze.type === "throw" && (De = oe, re.method = "throw", re.arg = ze.arg);
      }
    }) }), ge;
  }
  function O(V, J, Ee) {
    try {
      return { type: "normal", arg: V.call(J, Ee) };
    } catch (He) {
      return { type: "throw", arg: He };
    }
  }
  v.wrap = b;
  var A = "suspendedStart", I = "suspendedYield", q = "executing", oe = "completed", ie = {};
  function we() {
  }
  function pe() {
  }
  function ve() {
  }
  var _e = {}, Re = (k(_e, E, function() {
    return this;
  }), Object.getPrototypeOf), Re = Re && Re(Re(X([]))), he = (Re && Re !== p && S.call(Re, E) && (_e = Re), ve.prototype = we.prototype = Object.create(_e));
  function Ye(V) {
    ["next", "throw", "return"].forEach(function(J) {
      k(V, J, function(Ee) {
        return this._invoke(J, Ee);
      });
    });
  }
  function Ve(V, J) {
    var Ee;
    x(this, "_invoke", { value: function(He, Ne) {
      function xe() {
        return new J(function(re, De) {
          (function ge(nt, ee, Je, ze) {
            var ht, nt = O(V[nt], V, ee);
            if (nt.type !== "throw") return (ee = (ht = nt.arg).value) && typeof ee == "object" && S.call(ee, "__await") ? J.resolve(ee.__await).then(function(Ae) {
              ge("next", Ae, Je, ze);
            }, function(Ae) {
              ge("throw", Ae, Je, ze);
            }) : J.resolve(ee).then(function(Ae) {
              ht.value = Ae, Je(ht);
            }, function(Ae) {
              return ge("throw", Ae, Je, ze);
            });
            ze(nt.arg);
          })(He, Ne, re, De);
        });
      }
      return Ee = Ee ? Ee.then(xe, xe) : xe();
    } });
  }
  function We(V) {
    var J = { tryLoc: V[0] };
    1 in V && (J.catchLoc = V[1]), 2 in V && (J.finallyLoc = V[2], J.afterLoc = V[3]), this.tryEntries.push(J);
  }
  function it(V) {
    var J = V.completion || {};
    J.type = "normal", delete J.arg, V.completion = J;
  }
  function ut(V) {
    this.tryEntries = [{ tryLoc: "root" }], V.forEach(We, this), this.reset(!0);
  }
  function X(V) {
    if (V || V === "") {
      var J, Ee = V[E];
      if (Ee) return Ee.call(V);
      if (typeof V.next == "function") return V;
      if (!isNaN(V.length)) return J = -1, (Ee = function He() {
        for (; ++J < V.length; ) if (S.call(V, J)) return He.value = V[J], He.done = !1, He;
        return He.value = c, He.done = !0, He;
      }).next = Ee;
    }
    throw new TypeError(typeof V + " is not iterable");
  }
  return x(he, "constructor", { value: pe.prototype = ve, configurable: !0 }), x(ve, "constructor", { value: pe, configurable: !0 }), pe.displayName = k(ve, R, "GeneratorFunction"), v.isGeneratorFunction = function(V) {
    return V = typeof V == "function" && V.constructor, !!V && (V === pe || (V.displayName || V.name) === "GeneratorFunction");
  }, v.mark = function(V) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(V, ve) : (V.__proto__ = ve, k(V, R, "GeneratorFunction")), V.prototype = Object.create(he), V;
  }, v.awrap = function(V) {
    return { __await: V };
  }, Ye(Ve.prototype), k(Ve.prototype, h, function() {
    return this;
  }), v.AsyncIterator = Ve, v.async = function(V, J, Ee, He, Ne) {
    Ne === void 0 && (Ne = Promise);
    var xe = new Ve(b(V, J, Ee, He), Ne);
    return v.isGeneratorFunction(J) ? xe : xe.next().then(function(re) {
      return re.done ? re.value : xe.next();
    });
  }, Ye(he), k(he, R, "Generator"), k(he, E, function() {
    return this;
  }), k(he, "toString", function() {
    return "[object Generator]";
  }), v.keys = function(V) {
    var J, Ee = Object(V), He = [];
    for (J in Ee) He.push(J);
    return He.reverse(), function Ne() {
      for (; He.length; ) {
        var xe = He.pop();
        if (xe in Ee) return Ne.value = xe, Ne.done = !1, Ne;
      }
      return Ne.done = !0, Ne;
    };
  }, v.values = X, ut.prototype = { constructor: ut, reset: function(V) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = c, this.done = !1, this.delegate = null, this.method = "next", this.arg = c, this.tryEntries.forEach(it), !V) for (var J in this) J.charAt(0) === "t" && S.call(this, J) && !isNaN(+J.slice(1)) && (this[J] = c);
  }, stop: function() {
    this.done = !0;
    var V = this.tryEntries[0].completion;
    if (V.type === "throw") throw V.arg;
    return this.rval;
  }, dispatchException: function(V) {
    if (this.done) throw V;
    var J = this;
    function Ee(ge, F) {
      return xe.type = "throw", xe.arg = V, J.next = ge, F && (J.method = "next", J.arg = c), !!F;
    }
    for (var He = this.tryEntries.length - 1; 0 <= He; --He) {
      var Ne = this.tryEntries[He], xe = Ne.completion;
      if (Ne.tryLoc === "root") return Ee("end");
      if (Ne.tryLoc <= this.prev) {
        var re = S.call(Ne, "catchLoc"), De = S.call(Ne, "finallyLoc");
        if (re && De) {
          if (this.prev < Ne.catchLoc) return Ee(Ne.catchLoc, !0);
          if (this.prev < Ne.finallyLoc) return Ee(Ne.finallyLoc);
        } else if (re) {
          if (this.prev < Ne.catchLoc) return Ee(Ne.catchLoc, !0);
        } else {
          if (!De) throw Error("try statement without catch or finally");
          if (this.prev < Ne.finallyLoc) return Ee(Ne.finallyLoc);
        }
      }
    }
  }, abrupt: function(V, J) {
    for (var Ee = this.tryEntries.length - 1; 0 <= Ee; --Ee) {
      var He = this.tryEntries[Ee];
      if (He.tryLoc <= this.prev && S.call(He, "finallyLoc") && this.prev < He.finallyLoc) {
        var Ne = He;
        break;
      }
    }
    var xe = (Ne = Ne && (V === "break" || V === "continue") && Ne.tryLoc <= J && J <= Ne.finallyLoc ? null : Ne) ? Ne.completion : {};
    return xe.type = V, xe.arg = J, Ne ? (this.method = "next", this.next = Ne.finallyLoc, ie) : this.complete(xe);
  }, complete: function(V, J) {
    if (V.type === "throw") throw V.arg;
    return V.type === "break" || V.type === "continue" ? this.next = V.arg : V.type === "return" ? (this.rval = this.arg = V.arg, this.method = "return", this.next = "end") : V.type === "normal" && J && (this.next = J), ie;
  }, finish: function(V) {
    for (var J = this.tryEntries.length - 1; 0 <= J; --J) {
      var Ee = this.tryEntries[J];
      if (Ee.finallyLoc === V) return this.complete(Ee.completion, Ee.afterLoc), it(Ee), ie;
    }
  }, catch: function(V) {
    for (var J = this.tryEntries.length - 1; 0 <= J; --J) {
      var Ee, He, Ne = this.tryEntries[J];
      if (Ne.tryLoc === V) return (Ee = Ne.completion).type === "throw" && (He = Ee.arg, it(Ne)), He;
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(V, J, Ee) {
    return this.delegate = { iterator: X(V), resultName: J, nextLoc: Ee }, this.method === "next" && (this.arg = c), ie;
  } }, v;
}
function VE(c, v) {
  return (VE = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(p, S) {
    return p.__proto__ = S, p;
  })(c, v);
}
function _E(c, v) {
  return yM(c) || EM(c, v) || HE(c, v) || xM();
}
function Ty(c) {
  return gM(c) || CM(c) || HE(c) || wM();
}
function kM(c, v) {
  if (typeof c != "object" || !c) return c;
  var p = c[Symbol.toPrimitive];
  if (p === void 0) return (v === "string" ? String : Number)(c);
  if (p = p.call(c, v), typeof p != "object") return p;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
function by(c) {
  return c = kM(c, "string"), typeof c == "symbol" ? c : c + "";
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
    return Ie.createElement(Ie.Fragment, null, c, (v === void 0 ? [] : v).map(function(p) {
      var S = p.Portal;
      return Ie.createElement(S, { key: p.key });
    }));
  };
}, componentWrapAttrs: { "data-use-vue-component-wrap": "", style: { all: "unset" } }, slotWrapAttrs: { "data-use-vue-slot-wrap": "", style: { all: "unset" } } } };
function BE() {
  var c = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : { react: {}, vue: {} }, p = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : $E, v = 2 < arguments.length ? arguments[2] : void 0, p = (c.vue || (c.vue = {}), c.react || (c.react = {}), [p, se(se({}, c), {}, { react: se(se(se({}, p.react), c.react), {}, { componentWrapAttrs: se(se({}, p.react.componentWrapAttrs), c.react.componentWrapAttrs), slotWrapAttrs: se(se({}, p.react.slotWrapAttrs), c.react.slotWrapAttrs) }), vue: se(se(se({}, p.vue), c.vue), {}, { componentWrapAttrs: se(se({}, p.vue.componentWrapAttrs), c.vue.componentWrapAttrs), slotWrapAttrs: se(se({}, p.vue.slotWrapAttrs), c.vue.slotWrapAttrs) }) })]);
  return v && p.unshift({}), Object.assign.apply(this, p);
}
var qE = ["getElementById", "getElementsByClassName", "getElementsByTagName", "getElementsByTagNameNS", "querySelector", "querySelectorAll"], cd = { Document: {}, Element: {} };
function TM(c) {
  Object.keys(cd).forEach(function(v) {
    qE.forEach(function(p) {
      var S = cd[v][p] || window[v].prototype[p];
      S && (cd[v][p] = S, window[v].prototype[p] = function() {
        for (var x = arguments.length, E = new Array(x), h = 0; h < x; h++) E[h] = arguments[h];
        var R = S.apply(this, E);
        return R && (R.constructor !== NodeList || R.constructor === NodeList && 0 < R.length) ? R : ((R = p) === "getElementById" && (R = "querySelector", E = ["#" + E[0]]), (cd.Element[R] || Element.prototype[R]).apply(c, E));
      });
    });
  });
}
function DM() {
  Object.keys(cd).forEach(function(c) {
    qE.forEach(function(v) {
      window[c].prototype[v] = cd[c][v];
    });
  });
}
var NM = ["ref"], OM = ["key"], LM = ["hashList"], t_ = parseInt(f_.version);
var MM = (() => {
  function c(v) {
    return wv(this, c), Ry(this, c, [v]);
  }
  return ky(c, Ie.Component), bv(c, [{ key: "render", value: function() {
    var v = this.props.component, p = this.props.passedProps, p = (p.ref, Gi(p, NM));
    return Ie.createElement(v, p, this.props.children);
  } }]);
})(), jM = function(c, v, p) {
  var S = (() => {
    function x(E) {
      var h;
      return wv(this, x), (h = Ry(this, x, [E])).state = se(se({}, E), v.isSlots ? { children: c } : {}), h.setRef = h.setRef.bind(h), h.vueInReactCall = h.vueInReactCall.bind(h), (h.__veauryVueWrapperRef__ = p).__veauryVueInReactCall__ = h.vueInReactCall, h;
    }
    return ky(x, Ie.Component), bv(x, [{ key: "reactPropsLinkToVueInstance", value: function(E) {
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
        return ((h = E = (E = ((R = this.$slots) == null || (h = R.default) == null ? void 0 : h.call(R)) || E) instanceof Function ? E(this) : E) == null ? void 0 : h.length) === 1 && (R = E[0]) != null && R.data && ((h = this.$attrs).key, R = Gi(h, OM), E[0].props = se(se({}, R), E[0].props)), E;
      } };
    } }, { key: "componentWillUnmount", value: function() {
      p.__veauryReactRef__ && (p.__veauryReactRef__.__veauryVueWrapperRef__ = null, p.__veauryReactRef__ = null);
    } }, { key: "vueInReactCall", value: function(E) {
      var h = this, R = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
      return 2 < arguments.length && arguments[2] && E && E[0] ? E.map(function(k, b) {
        return xy(h.createSlot(k instanceof Function ? k : [k]), se(se(se({}, v), R), {}, { isSlots: !0, wrapInstance: p })).render({ key: k?.key || void 0 });
      }) : xy(this.createSlot(E), se(se(se({}, v), R), {}, { isSlots: !0, wrapInstance: p })).render();
    } }, { key: "render", value: function() {
      var E, h, R, k = this, ie = this.state, b = ie.hashList, O = Gi(ie, LM), A = {}, I = {};
      for (E in O) h = E, R = void 0, O.hasOwnProperty(h) && O[h] != null && (O[h].__slot ? (O[h].reactSlot ? O[h] = O[h].reactSlot : (R = O[h], v.defaultSlotsFormatter && O[h].__trueChildren ? (O[h].__trueChildren.__top__ = k.__veauryVueWrapperRef__, O[h] = v.defaultSlotsFormatter(O[h].__trueChildren, k.vueInReactCall, b), O[h] instanceof Array ? O[h] = Ty(O[h]) : -1 < ["string", "number"].indexOf(Xr(O[h])) ? O[h] = [O[h]] : Xr(O[h]) === "object" && (O[h] = se({}, O[h]))) : O[h] = se({}, xy(k.createSlot(O[h]), se(se({}, v), {}, { isSlots: !0, wrapInstance: p })).render()), O[h].vueFunction = R), A[h] = O[h]) : O[h].__scopedSlot && (O[h] = O[h](k.createSlot), I[h] = O[h]));
      var q, oe, ie = {};
      return ie.ref = this.setRef, v.isSlots ? this.state.children || this.props.children : (q = O, c.__syncUpdateForPureReactInVue && Object.keys(c.__syncUpdateForPureReactInVue).map(function(we) {
        var pe, ve;
        q[we] && typeof q[we] == "function" && (pe = k.__veauryVueWrapperRef__, ve = q[we], q[we] = function() {
          for (var _e = arguments.length, Re = new Array(_e), he = 0; he < _e; he++) Re[he] = arguments[he];
          pe.__veaurySyncUpdateProps__(c.__syncUpdateForPureReactInVue[we].apply(this, Re)), ve.apply(this, Re), pe.macroTaskUpdate = !0, pe.__veauryMountReactComponent__(!0, !0, {});
        });
      }), oe = se(se(se({}, q = v.defaultPropsFormatter ? v.defaultPropsFormatter.call(this, q, this.vueInReactCall, b) : q), A), I), Object.getPrototypeOf(c) !== Function.prototype && (Xr(c) !== "object" || c.render) || x.catchVueRefs() ? (Object.getPrototypeOf(c) === Function.prototype && delete ie.ref, Ie.createElement(c, Cc({}, oe, ie))) : Ie.createElement(MM, Cc({ passedProps: oe, component: c }, ie), oe.children));
    } }], [{ key: "catchVueRefs", value: function() {
      if (p.$parent) {
        for (var E in p.$parent.$refs) if (p.$parent.$refs[E] === p) return !0;
      }
      return !1;
    } }]);
  })();
  return dd(S, "displayName", "applyReact_".concat(c.displayName || c.name || "Component")), S;
};
function d_(c) {
  var v = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
  return c.__esModule && c.default && (c = c.default), v.isSlots && (c = c()), v = BE(v, void 0, !0), { originReactComponent: c, setup: function(p, S) {
    var x, E, h, R;
    if (!v.isSlots) return x = {}, E = PT({}), h = FT(), typeof (R = v.useInjectPropsFromWrapper || c.__veauryInjectPropsFromWrapper__) == "function" && (typeof (R = R.call(h.proxy, p)) != "function" ? (Object.assign(E, R), x.__veauryInjectedProps__ = E) : h.proxy.__veauryInjectedComputed__ = R), x;
  }, data: function() {
    return { VEAURY_Portals: [] };
  }, created: function() {
    this.__veauryPortalKeyPool__ = [], this.__veauryMaxPortalCount__ = 0;
  }, computed: { __veauryInjectedProps__: function() {
    var p;
    return (p = this.__veauryInjectedComputed__) == null ? void 0 : p.call(this);
  } }, render: function() {
    var p = ou(v.react.componentWrap, se({ ref: "react" }, v.react.componentWrapAttrs || {}), this.VEAURY_Portals.map(function(S) {
      return (0, S.Portal)(ou, S.key);
    }));
    return this.__veauryCheckReactSlot__(this.$slots), p;
  }, methods: { __veauryCheckReactSlot__: function(p) {
    var S = this;
    function x(E, h, R) {
      return h[R] && (E[R] = h[R], 1);
    }
    Xr(p) === "object" && p != null && (p instanceof Array ? p.forEach(function(E) {
      S.__veauryCheckReactSlot__(E.children);
    }) : Object.keys(p).forEach(function(k) {
      var h, R, k = p[k];
      if (typeof k == "function") {
        try {
          h = k.apply(S, k.__reactArgs || [{}]);
        } catch {
          return;
        }
        (k.__trueChildren = h).forEach(function(b) {
          b.children && S.__veauryCheckReactSlot__(b.children);
        }), h.length !== 1 || x(k, h = h[0], "reactSlot") || x(k, h, "reactFunction") || h.type !== DE || ((R = h.children) == null ? void 0 : R.length) !== 1 || x(k, R = h.children[0], "reactSlot") || x(k, R, "reactFunction");
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
    function h(R) {
      function k() {
        for (var b, O = this, A = arguments.length, I = new Array(A), q = 0; q < A; q++) I[q] = arguments[q];
        return p.reactFunction ? p.reactFunction.apply(this, I) : v.defaultSlotsFormatter ? ((b = p.apply(this, I)).__top__ = E, (b = v.defaultSlotsFormatter(b, E.__veauryVueInReactCall__, S)) instanceof Array || -1 < Xr(b).indexOf("string", "number") ? b = Ty(b) : Xr(b) === "object" && (b = se({}, b)), b) : xy(R(function() {
          return p.apply(O, I);
        }), se(se({}, v), {}, { isSlots: !0, wrapInstance: E })).render();
      }
      return v.pureTransformer && x ? k.vueFunction = x : k.vueFunction = p, k;
    }
    return h.__scopedSlot = !0, h;
  }, __veaurySyncUpdateProps__: function(p) {
    this.__veauryReactInstance__ && this.__veauryReactInstance__.setState(p);
  }, __veauryMountReactComponent__: function(p, S) {
    var x = arguments, E = this;
    return SM(sd().mark(function h() {
      var R, k, b, O, A, I, q, oe, ie, we, pe, ve, _e, Re, he, Ye, Ve;
      return sd().wrap(function(We) {
        for (; ; ) switch (We.prev = We.next) {
          case 0:
            if (R = 2 < x.length && x[2] !== void 0 ? x[2] : {}, k = {}, b = [], (oe = E.$.vnode.scopeId) && (k[oe] = "", b.push(oe)), O = {}, A = {}, p && (S == null || !S.slot)) {
              We.next = 18;
              break;
            }
            q = sd().mark(function it(ut) {
              var X;
              return sd().wrap(function(V) {
                for (; ; ) switch (V.prev = V.next) {
                  case 0:
                    if (E.$slots.hasOwnProperty(ut) && E.$slots[ut] != null) {
                      V.next = 2;
                      break;
                    }
                    return V.abrupt("return", 0);
                  case 2:
                    if ((X = v.react.vueNamedSlotsKey.find(function(J) {
                      return ut.indexOf(J) === 0;
                    })) || ut === "default") return X = ut.replace(new RegExp("^".concat(X)), ""), O[X] = E.$slots[ut], O[X].__slot = !0, V.abrupt("return", 0);
                    V.next = 8;
                    break;
                  case 8:
                    A[ut] = E.__veauryGetScopeSlot__(E.$slots[ut], b, (X = E.$.vnode) == null || (X = X.children) == null ? void 0 : X[ut]);
                  case 9:
                  case "end":
                    return V.stop();
                }
              }, it);
            }), We.t0 = sd().keys(E.$slots || {});
          case 10:
            if ((We.t1 = We.t0()).done) {
              We.next = 18;
              break;
            }
            return oe = We.t1.value, We.delegateYield(q(oe), "t2", 13);
          case 13:
            if (We.t2 === 0) return We.abrupt("continue", 10);
            We.next = 16;
            break;
          case 16:
            We.next = 10;
            break;
          case 18:
            if ((!p || S != null && S.slot) && (ie = se({}, O), I = ie.default, delete ie.default), E.__veauryLast__ = E.__veauryLast__ || {}, E.__veauryLast__.slot = E.__veauryLast__.slot || {}, E.__veauryLast__.attrs = E.__veauryLast__.attrs || {}, we = { slot: function() {
              E.__veauryLast__.slot = se(se(se({}, I ? { children: I } : { children: null }), ie), A);
            }, attrs: function() {
              E.__veauryLast__.attrs = E.$attrs;
            } }, S && Object.keys(S).forEach(function(it) {
              return we[it]();
            }), p) {
              We.next = 64;
              break;
            }
            if (E.__reactBoundedPromise__ = new Promise(function(it) {
              pe = it;
            }), E.__reactBoundedPromise__.resolve = pe, we.slot(), we.attrs(), Re = jM(c, v, E), ve = Ie.createElement(Re, Cc({}, E.$attrs, E.__veauryInjectedProps__, { children: I }, ie, A, E.$attrs.class ? { className: E.$attrs.class } : {}, k, { hashList: b }, E.$attrs.style ? { style: E.$attrs.style } : {}, { ref: function(it) {
              E.__veauryReactInstance__ = it, E.__reactBoundedPromise__.resolve(!0);
            } })), _e = E.$refs.react, Re = v.wrapInstance) {
              We.next = 47;
              break;
            }
            he = E.$parent;
          case 35:
            if (he) {
              if (he.parentReactWrapperRef) return Re = he.parentReactWrapperRef, We.abrupt("break", 45);
              We.next = 39;
            } else We.next = 45;
            break;
          case 39:
            if (he.reactWrapperRef) return Re = he.reactWrapperRef, We.abrupt("break", 45);
            We.next = 42;
            break;
          case 42:
            he = he.$parent, We.next = 35;
            break;
          case 45:
            We.next = 49;
            break;
          case 47:
            (Re = v.wrapInstance).__veauryVueWrapperRef__ = E;
          case 49:
            if (Re) return E.parentReactWrapperRef = Re, E.reactPortal = function() {
              return f_.createPortal(ve, _e);
            }, Re.pushReactPortal(E.reactPortal), We.abrupt("return");
            We.next = 54;
            break;
          case 54:
            if (17 < t_) return Sv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED !== void 0 && (Sv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = !0), Ye = v.react.createRoot || Sv.createRoot, 18 < t_ && !Ye && console.warn("'react-dom 19' no longer supports dynamically determining whether to use 'render' or 'createRoot'. In order to be compatible with 'react-dom 17' and previous versions, you need to manually configure 'createRoot' in the veaury configuration."), E.__veauryReactApp__ = Ye(_e), E.__veauryReactApp__.render(ve), We.abrupt("return");
            We.next = 61;
            break;
          case 61:
            Sv.render(ve, _e), We.next = 71;
            break;
          case 64:
            return We.next = 66, E.__reactBoundedPromise__;
          case 66:
            Ve = function() {
              E.__veauryReactInstance__.setState(function(it) {
                return Object.keys(it).forEach(function(ut) {
                  v.isSlots && ut === "children" || delete it[ut];
                }), se(se(se(se({}, E.__veauryCache__), E.__veauryInjectedProps__), !v.isSlots && E.__veauryLast__.slot), E.__veauryLast__.attrs);
              }), E.__veauryCache__ = null;
            }, !E.microTaskUpdate || E.__veauryCache__ || E.$nextTick(function() {
              Ve(), E.microTaskUpdate = !1;
            }), E.macroTaskUpdate && (clearTimeout(E.updateTimer), E.updateTimer = setTimeout(function() {
              clearTimeout(E.updateTimer), Ve(), E.macroTaskUpdate = !1;
            })), E.__veauryCache__ = se(se({}, E.__veauryCache__ || {}), se(se(se(se({}, R), E.$attrs.class ? { className: E.$attrs.class } : {}), se({}, k)), {}, { hashList: b }, E.$attrs.style ? { style: E.$attrs.style } : {})), E.macroTaskUpdate || E.microTaskUpdate || Ve();
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
    clearTimeout(this.updateTimer), TM(this.$refs.react), this.reactPortal ? (p = this.parentReactWrapperRef) != null && p.removeReactPortal(this.reactPortal) : 17 < t_ ? (p = this.__veauryReactApp__) != null && p.unmount() : Sv.unmountComponentAtNode(this.$refs.react), DM();
  }, updated: function() {
    this.__VEAURY_IGNORE_STRANGE_UPDATE__ || this.__veauryMountReactComponent__(!0, { slot: !0 });
  }, inheritAttrs: !1, watch: { $attrs: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 }, __veauryInjectedProps__: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 } } };
}
var AM = /* @__PURE__ */ new Set(["onClick", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onChange", "onInput", "onInvalid", "onReset", "onSubmit", "onError", "onLoad", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onGotPointerCapture", "onLostPointerCapture", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onSelect", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onScroll", "onWheel", "onAbort", "onCanPlay", "onCanPlayThrough", "onDurationChange", "onEmptied", "onEncrypted", "onEnded", "onError", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onPause", "onPlay", "onPlaying", "onProgress", "onRateChange", "onSeeked", "onSeeking", "onStalled", "onSuspend", "onTimeUpdate", "onVolumeChange", "onWaiting", "onLoad", "onError", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionEnd", "onToggle"]);
function UM(c, v) {
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
    for (var R = arguments.length, k = new Array(R), b = 0; b < R; b++) k[b] = arguments[b];
    h.apply(S, k), E.apply(S, k);
  } : E, c[p] = v[0];
}
function o_(c) {
  var v = this, p = {}, S = se({}, c);
  return Object.keys(c).forEach(function(x) {
    var E, h = x.match(/^onUpdate-([^-]+)/);
    if (h) delete S[x], E = p["onUpdate:".concat(h[1])], p["onUpdate:".concat(h[1])] = typeof E == "function" ? function() {
      for (var k = arguments.length, b = new Array(k), O = 0; O < k; O++) b[O] = arguments[O];
      E.apply(v, b), c[x].apply(v, b);
    } : c[x];
    else if (h = x.match(/^v-model($|:([^:]+)|-([^:]+))/)) h = h[2] || h[3] || "modelValue", CE(p, c[x], h), delete S[x];
    else if (x === "v-models") {
      if (Xr(c[x]) !== "object" || c[x] instanceof Array) throw Error("[error:veaury] The parameter 'v-models' must be an object type, such as {[argumentKey]: singleVModel}");
      var R = c[x];
      Object.keys(R).forEach(function(k) {
        CE(p, R[k], k, "v-models");
      }), delete S[x];
    }
  }), se(se({}, S), p);
}
var Dy = bv(function c() {
  wv(this, c), dd(this, "pool", /* @__PURE__ */ new Set());
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
  return se(se({}, S), {}, { ref: v });
}
var zM = d_(WE);
function l_(c) {
  return ou(zM, { node: function() {
    return c.node;
  } });
}
l_.originReactComponent = Ie.forwardRef(WE);
var PM = ["component", "node"], FM = ["component", "$slots", "children", "class", "style"], IM = ["className", "classname"], _c = "veaury-options", EE = new Dy();
function VM(c, v) {
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
function HM(c) {
  var v;
  return (v = c.node) == null ? void 0 : v.call(c);
}
var u_ = Ie.forwardRef(function(x, v) {
  var p, h = x.component, S = x.node, x = Gi(x, PM);
  if (h == null && S == null) return null;
  if (S != null) {
    if (S.$$typeof || typeof S == "string" || typeof S == "number") return S;
    typeof S != "function" && (p = S, S = function() {
      return p;
    });
  }
  var E, h = h || HM, R = BE(x[_c] || {}, void 0, !0), k = R.useInjectPropsFromWrapper || h.__veauryInjectPropsFromWrapper__;
  return R.isSlots || typeof k == "function" && (E = k(x)), Ie.createElement($M, Cc({}, se(se(se(se({ component: h }, S ? { node: S } : {}), x), E), {}, dd({}, _c, R)), { ref: v }));
}), $M = (() => {
  function c(v) {
    var p;
    return wv(this, c), (p = Ry(this, c, [v])).state = { portals: [] }, p.__veauryPortalKeyPool__ = [], p.__veauryMaxPortalCount__ = 0, p.__veauryCurrentVueComponent__ = v.component, p.__veauryCreateVueInstance__ = p.__veauryCreateVueInstance__.bind(p), p.__veauryVueComponentContainer__ = p.createVueComponentContainer(), p;
  }
  return ky(c, Ie.Component), bv(c, [{ key: "pushReactPortal", value: function(v) {
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
      AM.has(x) && typeof v.props[x] == "function" && (p[x] = v.props[x]);
    }), S.vue.slotWrapAttrs && (p = se(se({}, p), S.vue.slotWrapAttrs))) : S.vue.componentWrapAttrs && (p = se(se({}, p), S.vue.componentWrapAttrs)), S.vue.componentWrapHOC(Ie.createElement("div", Cc({}, S.vue.componentWrapAttrs, { ref: this.__veauryCreateVueInstance__, key: null })), p);
  } }, { key: "shouldComponentUpdate", value: function(v, p, S) {
    var x, E, h, R, k = this;
    return v === this.props || (x = v.component, E = (E = v["v-slots"]) === void 0 ? null : E, h = v.children, v = Gi(v, ["component", _c, "v-slots", "children"].map(by)), this.__veauryCurrentVueComponent__ !== x && this.updateVueComponent(x), x.__fromReactSlot) || this.__veauryVueInstance__ && (h && (E = E || {}, Xr(h) !== "object" || h instanceof Array || h.$$typeof ? E.default = h : E = h), (R = this.__veauryVueInstance__.$data.$slots) && Object.keys(R).forEach(function(b) {
      delete R[b];
    }), E && (R || (this.__veauryVueInstance__.$data.$slots = {}), Object.assign(this.__veauryVueInstance__.$data.$slots, xE(E))), Object.keys(this.__veauryVueInstance__.$data).forEach(function(b) {
      b !== "$slots" && delete k.__veauryVueInstance__.$data[b];
    }), this.__veauryVueInstance__) && Object.assign(this.__veauryVueInstance__.$data, o_(v)), !0;
  } }, { key: "componentWillUnmount", value: function() {
    this.vuePortal ? this.parentVueWrapperRef.__veauryRemoveVuePortal__(this.vuePortal) : (this.__veauryVueInstance__ && this.__veauryVueInstance__.$.appContext.app.unmount(), EE.pool.delete(this.__veauryVueTargetId__), this.vueCreated = !1);
  } }, { key: "componentDidMount", value: function() {
    this.__veauryCreateVueInstance__(this.vueContainerElement);
  } }, { key: "__veauryCreateVueInstance__", value: function(v) {
    var p, S, x, E, h, R, k, b, O = this;
    function A(I) {
      this.__veauryVueInstance__ || (this.__veauryVueInstance__ = I);
    }
    this.vueCreated || (this.vueCreated = !0, (p = this).vueContainerElement = v, (x = this.props).component, S = x[_c], k = x.children, b = (b = x["v-slots"]) === void 0 ? {} : b, x = Gi(x, ["component", _c, "children", "v-slots"].map(by)), k && (Xr(k) !== "object" || k instanceof Array || k.$$typeof ? b.default = k : b = k), (b = xE(b)) && (x.$slots = b), A = A.bind(this), E = se({}, o_(x)), h = { data: function() {
      return S.isSlots ? { children: p.__veauryCurrentVueComponent__.originVNode } : E;
    }, created: function() {
      this.reactWrapperRef = p, A(this);
    }, methods: { reactInVueCall: function(I) {
      return 2 < arguments.length && arguments[2] && I && I[0] ? I.map(function(q, oe) {
        return ou(l_, { node: q, key: (q == null || (q = q.data) == null ? void 0 : q.key) || oe });
      }) : ou(l_, { node: I });
    }, getScopedSlots: function(I, q) {
      var oe, ie = this, we = (this.getScopedSlots.__scopeSlots || (this.getScopedSlots.__scopeSlots = {}), se({}, q));
      for (oe in we) ((pe) => {
        var ve, _e;
        !we.hasOwnProperty(pe) || (ve = we[pe]) == null || (we[pe] = (_e = ve, function() {
          for (var Re, he, Ye, Ve, We = arguments.length, it = new Array(We), ut = 0; ut < We; ut++) it[ut] = arguments[ut];
          return _e.vueFunction ? _e.vueFunction.apply(ie, it) : (Ye = _e.reactFunction, Ye = _e.reactSlot || Ye?.apply(ie, it), Ve = S.defaultSlotsFormatter, (Re = ie.getScopedSlots.__scopeSlots[pe]) != null && (Re = Re.component) != null && (Re = Re.ctx) != null && Re.__veauryReactInstance__ ? (he = ie.getScopedSlots.__scopeSlots[pe], Promise.resolve().then(function() {
            var X;
            (X = he) != null && (X = X.component) != null && (X = X.ctx) != null && (X = X.__veauryReactInstance__) != null && X.setState({ children: _e.apply(ie, it) });
          })) : (he = Ve && Ye ? [Ve(Ye, ie.reactInVueCall)] : I(d_(function() {
            return _e.apply(ie, it);
          }, se(se({}, S), {}, { isSlots: !0, wrapInstance: p }))), ie.getScopedSlots.__scopeSlots[pe] = he), _e.reactFunction ? he.reactFunction = _e.reactFunction : _e.reactSlot && (he.reactSlot = _e.reactSlot), he);
        }), we[pe].reactFunction = ve);
      })(oe);
      return we;
    } }, mounted: function() {
      v.removeAttribute("id"), p.__veauryVueRef__ = this.$refs.use_vue_wrapper, this.$refs.use_vue_wrapper.reactWrapperRef = p;
    }, beforeUnmount: function() {
      p.__veauryVueRef__ = null, this.$refs.use_vue_wrapper.reactWrapperRef = null;
    }, render: function() {
      var I = this, ve = this.$data, we = (ve.component, ve.$slots), q = ve.class, oe = ve.style, ve = Gi(ve, FM), ie = this.getScopedSlots(ou, se({}, we)), we = ve.className, pe = ve.classname, ve = Gi(ve, IM), _e = {};
      return Object.keys(ie).forEach(function(Re) {
        var he = ie[Re];
        _e[Re] = typeof he == "function" ? he : function() {
          return he;
        };
      }), ou(VM(p.__veauryCurrentVueComponent__, this), se(se(se(se({}, ve), q || we || pe ? { class: q || we || pe } : {}), oe ? { style: oe } : {}), {}, { ref: "use_vue_wrapper" }), se({}, S.isSlots && this.children ? { default: typeof this.children == "function" ? this.children : function() {
        return I.children;
      } } : se({}, _e)));
    } }, v && (R = EE.getRandomId("__vue_wrapper_container_"), v.id = R, this.__veauryVueTargetId__ = R, (k = S.wrapInstance) ? (k = S.wrapInstance).reactWrapperRef = p : k = UM(this), k && document.getElementById(R) ? (this.parentVueWrapperRef = k, this.vuePortal = function(I, q) {
      return I(IT, { to: "#" + R, key: R }, [I(Object.assign(h, { router: O._router }))]);
    }, k.__veauryPushVuePortal__(this.vuePortal)) : (b = VT(h), typeof S.beforeVueAppMount == "function" && S.beforeVueAppMount(b), this.__veauryVueInstance__ = b.mount(v))));
  } }, { key: "updateVueComponent", value: function(v) {
    this.__veauryVueInstance__ && (v.__fromReactSlot ? this.__veauryVueInstance__.children = typeof v.originVNode == "function" ? v.originVNode : function() {
      return v.originVNode;
    } : (this.__veauryCurrentVueComponent__ = v, this.__veauryVueInstance__.$forceUpdate()));
  } }, { key: "render", value: function() {
    return Ie.createElement(this.__veauryVueComponentContainer__, { portals: this.state.portals });
  } }]);
})();
function xy(c) {
  var v = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, p = (c || console.warn("Component must be passed in applyVueInReact!"), c.__esModule && c.default && (c = c.default), Ie.forwardRef(function(S, x) {
    return Ie.createElement(u_, Cc({}, S, { component: c, ref: x }, dd({}, _c, v)));
  }));
  return p.originVueComponent = c, p;
}
new Dy();
function BM(c) {
  var v = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, p = v.globalName, S = d_(c, v.combinedOption || {});
  return S.install = function(x) {
    var E = (1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}).globalName;
    return p && x.component(E || p, S), S;
  }, S;
}
function wE(c) {
  return c.replace(/-(\w)/g, function(v, p) {
    return p.toUpperCase();
  });
}
function Ny(c) {
  var v;
  return c ? typeof c == "string" ? (c = c.trim()).split(/\s*;\s*/).reduce(function(p, S) {
    return S && (S = S.split(/\s*:\s*/)).length === 2 && Object.assign(p, dd({}, wE(S[0]), S[1])), p;
  }, {}) : Xr(c) === "object" ? (v = {}, Object.keys(c).forEach(function(p) {
    v[wE(p)] = c[p];
  }), v) : {} : {};
}
function Oy(c) {
  return c ? c instanceof Array ? c : typeof c == "string" ? (c = c.trim()).split(/\s+/) : Xr(c) === "object" ? Object.keys(c).filter(function(v) {
    return !!c[v];
  }) : [] : [];
}
var qM = ["ref"];
function WM(c, v, p, S, x) {
  var E = c.props || {}, E = (E.ref, Gi(E, qM)), h = {}, R = (Object.keys(c.children || {}).forEach(function(O) {
    var A = c.children[O], I = $E.react.vueNamedSlotsKey.find(function(q) {
      return O.indexOf(q) === 0;
    });
    I || O === "default" ? (I = O.replace(new RegExp("^".concat(I)), "").replace(/^default$/, "children"), h[I] = S.call(c.__top__, A(), p, x)) : typeof A == "function" && (h[O] = function() {
      for (var q = arguments.length, oe = new Array(q), ie = 0; ie < q; ie++) oe[ie] = arguments[ie];
      return A.__reactArgs = oe, S(A.apply(this, oe), p, x);
    });
  }), {}), k = Ny(E.style), b = Array.from(new Set(Oy(E.class))).join(" ");
  return 0 < Object.keys(k).length && (R.style = k), b !== "" && (R.className = b), Object.assign(E, se(se({}, R), h)), delete E.class, typeof E.ref_for == "boolean" && delete E.ref_for, E;
}
function bE(c) {
  return c.type === $T;
}
new Dy();
function YE(c, v) {
  var p;
  return 0 < ((p = c.dirs) == null ? void 0 : p.length) ? Ie.createElement(YM, { vnode: c }, v) : v;
}
var YM = (() => {
  function c(v) {
    var p;
    return wv(this, c), (p = Ry(this, c, [v])).state = { prevVnode: null, savedDirectives: [], ref: null, prevProps: v }, p;
  }
  return ky(c, Ie.Component), bv(c, [{ key: "findDirectiveName", value: function(v) {
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
      var R, k, b, O, A, I, q;
      h && (q = (R = _E(v.findDirectiveName(h), 2))[0], R = R[1], k = (A = h.dir).created, b = A.beforeMount, O = A.mounted, I = A.beforeUpdate, A = A.updated, q ? (p[R] = se(se(se({}, q), h), {}, { oldValue: q.oldValue }), q = [S, p[R], x, v.state.prevVnode], I?.apply(null, q), A?.apply(null, q), p[R].oldValue = h.value) : (p.push(h), I = [S, h, x, null], k?.apply(null, I), b?.apply(null, I), O?.apply(null, I), h.oldValue = h.value));
    }), this.setState({ prevVnode: se({}, x), savedDirectives: p, ref: S }));
  } }, { key: "componentDidMount", value: function() {
    this.doDirective();
  } }, { key: "componentDidUpdate", value: function(v) {
    v.vnode !== this.props.vnode && this.doDirective();
  } }, { key: "componentWillUnmount", value: function() {
    var v = this, p = this.props.vnode, h = this.state, S = h.savedDirectives, x = h.ref, E = h.prevVnode, h = p.dirs;
    h && (h.forEach(function(R) {
      var k, b, O, A;
      R && (k = (A = _E(v.findDirectiveName(R), 2))[0]) && (b = (O = R.dir).beforeUnmount, O = O.unmounted, S[A[1]] = se(se({}, k), R), A = [x, k, p, E], b?.apply(null, A), O != null) && O.apply(null, A);
    }), this.setState({ prevVnode: se({}, p), savedDirectives: S }));
  } }, { key: "render", value: function() {
    var v = this.props;
    return v.vnode, v.children;
  } }]);
})();
function GM(c, v) {
  var p;
  return typeof c == "function" && (p = c.toString(), c.prototype !== void 0) && c.prototype.constructor === c && (p.slice(0, 5) == "class" || 2 <= Object.getOwnPropertyNames(c.prototype).length || !/^function\s+\(|^function\s+anonymous\(/.test(p) && (!(!v || !/^function\s+[A-Z]/.test(p)) || !!/\b\(this\b|\bthis[\.\[]\b/.test(p) && (!(v && !/classCallCheck\(this/.test(p)) || /^function\sdefault_\d+\s*\(/.test(p))));
}
function GE(c, v) {
  var p, S, x, E;
  return typeof ((x = c.type) == null ? void 0 : x.originReactComponent) != "function" || GM((x = c.type) == null ? void 0 : x.originReactComponent) ? ((x = c.ref) != null && x.k ? (p = (x = c.ref) == null ? void 0 : x.k, S = (x = c.ref) == null ? void 0 : x.r) : p = (x = c.ref) == null ? void 0 : x.r, p && typeof p == "string" && (E = p, p = function(h) {
    var R;
    (R = c.ref) != null && (R = R.i) != null && R.refs && ((R = se({}, c.ref.i.refs))[E] = h, c.ref.i.refs = R), S ? S.value = h : c.ref.i.setupState && E in c.ref.i.setupState && (c.ref.i.setupState[E] = h), h && (h.__syncUpdateProps = function() {
      v.__top__ && (c.__extraData = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, v.__top__.__syncUpdateProps({}));
    });
  }, p = new Proxy(p, { get: function(h, R) {
    return h[R];
  }, set: function(h, R, k) {
    var b;
    return (b = c.ref) != null && (b = b.i) != null && b.refs && E in ((b = c.ref) == null || (b = b.i) == null ? void 0 : b.refs) && ((b = se({}, c.ref.i.refs))[R] = k, c.ref.i.refs = b), k;
  } })), p) : null;
}
function s_(c, v) {
  return !v || v instanceof Array && v.length === 0 || (typeof v == "string" && (v = [v]), (c = se({}, c)).props = se({}, c.props), v.forEach(function(p) {
    c.props[p] = "";
  })), c;
}
var QM = ["style", "class"];
function RE(c, v, p, S, x, E, h) {
  var R, k, b;
  return v === "all" || v instanceof Array || (v = v ? [v] : []), c.type === DE ? x.call(h, c.children, p, E) : typeof c.type == "string" && (v === "all" || -1 < v.indexOf(c.type)) ? (v = GE(c), b = (k = c.props || {}).style, R = k.class, k = se(se({}, Gi(k, QM)), {}, { style: Ny(b), className: Array.from(new Set(Oy(R))).join(" ") }, v ? { ref: v } : {}), (b = c.children || k.children) && ((b = -1 < ["string", "number"].indexOf(Xr(b)) ? [b] : Ty(b)).__top__ = h), YE(c, s_(Ja.createElement(c.type, k, x.call(h, b, p, E)), c.scopeId))) : p([c], null, S);
}
function KM() {
  var c = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, v = 1 < arguments.length ? arguments[1] : void 0, p = 2 < arguments.length ? arguments[2] : void 0;
  return p.__syncUpdateForPureReactInVue && Object.keys(p.__syncUpdateForPureReactInVue).map(function(S) {
    var x;
    c[S] && typeof c[S] == "function" && v.__top__ && (x = c[S], c[S] = function() {
      for (var E = arguments.length, h = new Array(E), R = 0; R < E; R++) h[R] = arguments[R];
      v.__extraData = p.__syncUpdateForPureReactInVue[S].apply(this, h), v.__top__.__veaurySyncUpdateProps__({}), v.__top__.macroTaskUpdate = !0, x.apply(this, h), v.__top__ && Promise.resolve().then(function() {
        v.__extraData = null, v.__top__.__veauryMountReactComponent__(!0);
      });
    });
  }), c;
}
function kE(c, v, p) {
  return !((c = c instanceof Array && c.length === 1 ? c[0] : c) instanceof Array) && c.key == null && 1 < v.length && ((c = se({}, c)).key = "_key_".concat(p)), c;
}
function QE(S) {
  var v = S.reactComponents, p = S.domTags, S = S.division, x = S === void 0 || S;
  return function E(h, R, k) {
    var b;
    return h && h.forEach ? (h.__top__ || (h.__top__ = this), b = [], h.forEach(function(O, A) {
      if (O && O.type !== HT) {
        if ((oe = O.type) == null || !oe.originReactComponent) return O.$$typeof || typeof O == "string" || typeof O == "number" ? void b.push(O) : bE(O) ? void (O.children.trim() !== "" && b.push(O.children.trim())) : void (O.type && (s_(oe = kE(RE(O, p, R, x, E, k, h.__top__), h, A), O.scopeId), b.push(oe)));
        var I, q, oe = O.type.originReactComponent;
        s_(I = kE(I = (v = v === "all" || v instanceof Array ? v : [v]) === "all" || -1 < v.indexOf(oe) ? (O.__top__ = h.__top__, I = WM(O, "_key_".concat(A), R, E, k), q = GE(O, h), O.children && (O.children.__top__ = h.__top__), YE(O, Ja.createElement(oe, se(se(se({}, KM(I, O, oe)), O.__extraData || {}), q ? { ref: q } : {})))) : bE(O) ? O.text : RE(O, p, R, x, E, k), h, A), O.scopeId), b.push(I);
      }
    }), b.length === 1 ? b[0] : b) : h;
  };
}
var n_ = QE({ reactComponents: "all", domTags: "all" });
function XM(c, v) {
  return BM(c, { combinedOption: se({ pureTransformer: !0, defaultSlotsFormatter: n_, defaultPropsFormatter: function(p, S, x) {
    var E = {};
    return Object.keys(p).forEach(function(h) {
      var R = p[h];
      R && (R.vueFunction ? (E[h] = function() {
        for (var k = arguments.length, b = new Array(k), O = 0; O < k; O++) b[O] = arguments[O];
        return n_(R.vueFunction.apply(this, b), S, x);
      }, Object.defineProperty(E[h], "length", { get: function() {
        return R.vueFunction.length;
      } })) : R.vueSlot && (E[h] = n_(R.vueSlot, S, x)));
    }), Object.assign(p, E);
  } }, v) });
}
QE({ reactComponents: "all", domTags: "all" });
var JM = ["ref", "children", "v-slots"];
function ZM(k, v, p, S, x) {
  var k = k.props || {}, b = (k.ref, k.children), h = k["v-slots"], E = h === void 0 ? {} : h, h = Gi(k, JM), R = (b && (Xr(b) !== "object" || b instanceof Array || b.$$typeof ? E.default = b : E = b), null), k = (Object.keys(E || {}).forEach(function(A) {
    var I = E[A];
    (R = R || {})[A] = function() {
      if (typeof I == "function") {
        for (var q = arguments.length, oe = new Array(q), ie = 0; ie < q; ie++) oe[ie] = arguments[ie];
        I = I.apply(this, oe);
      }
      return S(I, p, x);
    };
  }), {}), b = Ny(h.style), O = Array.from(new Set(Oy(h.className))).join(" ");
  return 0 < Object.keys(b).length && (k.style = b), O !== "" && (k.class = O), Object.assign(h, se({}, k)), delete h.className, { props: h = o_(h), slots: R };
}
function KE(c) {
  var v = c.ref;
  if (v) return Xr(v) === "object" ? function(p) {
    c.ref.current = p;
  } : typeof v == "function" ? v : void 0;
}
var e8 = ["style", "class", "children"];
function TE(c, v, p, S, x, E) {
  var h, R, k, b;
  return v === "all" || v instanceof Array || (v = v ? [v] : []), c.type === Ie.Fragment ? x((h = c.props) == null ? void 0 : h.children, p) : typeof c.type == "string" && (v === "all" || -1 < v.indexOf(c.type)) ? (h = KE(c), b = (v = c.props || {}).style, k = v.class, R = v.children, v = Gi(v, e8), k = Array.from(new Set(Oy(k))).join(" "), b = Ny(b), v = se(se(se(se({}, v), Object.keys(b).length === 0 ? {} : { style: b }), k ? { className: k } : {}), h ? { ref: h } : {}), Object.keys(v).length === 0 && (v = null), (b = R) && ((b = -1 < ["string", "number"].indexOf(Xr(b)) ? [b] : b instanceof Array ? Ty(b) : se({}, b)).__top__ = E), ou(c.type, v, x(b, p))) : p([c], null, S);
}
function XE(S) {
  var v = S.vueComponents, p = S.domTags, S = S.division, x = S === void 0 || S;
  return function E(h, R) {
    if (h == null) return h;
    h instanceof Array || (h = [h]);
    var k = [];
    return h.forEach(function(b, O) {
      if (((A = b.type) == null || !A.originVueComponent) && b.type !== u_) return b.__v_isVNode || typeof b == "string" || typeof b == "number" ? void k.push(b) : void (b.type && (A = TE(b, p, R, x, E, h.__top__), k.push(A)));
      var A = b.type.originVueComponent;
      if (b.type === u_) {
        if (!b.props.component) return void k.push(b.props.node);
        A = b.props.component, b = se({}, b);
        var I = se({}, b.props);
        delete I.component, b.props = I;
      }
      A = (v = v === "all" || v instanceof Array ? v : [v]) === "all" || -1 < v.indexOf(A) ? ((b = se({}, b)).__top__ = h.__top__, O = (I = ZM(b, "_key_".concat(O), R, E)).props, I = I.slots, KE(b), b.children && (b.children.__top__ = h.__top__), ou(A, se({}, O), I)) : TE(b, p, R, x, E), k.push(A);
    }), (k = k.flat(1 / 0)).length === 1 ? k[0] : k;
  };
}
XE({ vueComponents: "all", domTags: "all" });
XE({ reactComponents: "all", domTags: "all" });
new Dy();
const t8 = /* @__PURE__ */ BT({
  __name: "CopilotApp",
  props: {
    token: {},
    dataSource: {},
    baseUrl: {}
  },
  setup(c) {
    const v = XM(fM);
    return (p, S) => (WT(), qT(YT(v), {
      token: c.token,
      dataSource: c.dataSource,
      baseUrl: c.baseUrl
    }, null, 8, ["token", "dataSource", "baseUrl"]));
  }
}), o8 = {
  install(c) {
    c.component("CopilotApp", t8);
  }
};
export {
  t8 as CopilotApp,
  o8 as default
};
