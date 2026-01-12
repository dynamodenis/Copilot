import { Fragment as g2, h as tu, reactive as Ck, getCurrentInstance as Ek, Teleport as Rk, createApp as bk, Comment as wk, Text as Tk, defineComponent as xk, createBlock as kk, openBlock as Dk, unref as Ok } from "vue";
function S2(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
var dy = { exports: {} }, pv = {}, py = { exports: {} }, Lt = {};
var UE;
function Lk() {
  if (UE) return Lt;
  UE = 1;
  var h = /* @__PURE__ */ Symbol.for("react.element"), m = /* @__PURE__ */ Symbol.for("react.portal"), v = /* @__PURE__ */ Symbol.for("react.fragment"), E = /* @__PURE__ */ Symbol.for("react.strict_mode"), k = /* @__PURE__ */ Symbol.for("react.profiler"), b = /* @__PURE__ */ Symbol.for("react.provider"), y = /* @__PURE__ */ Symbol.for("react.context"), N = /* @__PURE__ */ Symbol.for("react.forward_ref"), x = /* @__PURE__ */ Symbol.for("react.suspense"), w = /* @__PURE__ */ Symbol.for("react.memo"), z = /* @__PURE__ */ Symbol.for("react.lazy"), H = Symbol.iterator;
  function q(j) {
    return j === null || typeof j != "object" ? null : (j = H && j[H] || j["@@iterator"], typeof j == "function" ? j : null);
  }
  var G = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, pe = Object.assign, ae = {};
  function de(j, J, Ze) {
    this.props = j, this.context = J, this.refs = ae, this.updater = Ze || G;
  }
  de.prototype.isReactComponent = {}, de.prototype.setState = function(j, J) {
    if (typeof j != "object" && typeof j != "function" && j != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, j, J, "setState");
  }, de.prototype.forceUpdate = function(j) {
    this.updater.enqueueForceUpdate(this, j, "forceUpdate");
  };
  function se() {
  }
  se.prototype = de.prototype;
  function ve(j, J, Ze) {
    this.props = j, this.context = J, this.refs = ae, this.updater = Ze || G;
  }
  var Se = ve.prototype = new se();
  Se.constructor = ve, pe(Se, de.prototype), Se.isPureReactComponent = !0;
  var Ee = Array.isArray, he = Object.prototype.hasOwnProperty, Ge = { current: null }, Fe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ie(j, J, Ze) {
    var ze, mt = {}, nt = null, Me = null;
    if (J != null) for (ze in J.ref !== void 0 && (Me = J.ref), J.key !== void 0 && (nt = "" + J.key), J) he.call(J, ze) && !Fe.hasOwnProperty(ze) && (mt[ze] = J[ze]);
    var st = arguments.length - 2;
    if (st === 1) mt.children = Ze;
    else if (1 < st) {
      for (var dt = Array(st), Gt = 0; Gt < st; Gt++) dt[Gt] = arguments[Gt + 2];
      mt.children = dt;
    }
    if (j && j.defaultProps) for (ze in st = j.defaultProps, st) mt[ze] === void 0 && (mt[ze] = st[ze]);
    return { $$typeof: h, type: j, key: nt, ref: Me, props: mt, _owner: Ge.current };
  }
  function qe(j, J) {
    return { $$typeof: h, type: j.type, key: J, ref: j.ref, props: j.props, _owner: j._owner };
  }
  function it(j) {
    return typeof j == "object" && j !== null && j.$$typeof === h;
  }
  function ge(j) {
    var J = { "=": "=0", ":": "=2" };
    return "$" + j.replace(/[=:]/g, function(Ze) {
      return J[Ze];
    });
  }
  var $ = /\/+/g;
  function X(j, J) {
    return typeof j == "object" && j !== null && j.key != null ? ge("" + j.key) : J.toString(36);
  }
  function we(j, J, Ze, ze, mt) {
    var nt = typeof j;
    (nt === "undefined" || nt === "boolean") && (j = null);
    var Me = !1;
    if (j === null) Me = !0;
    else switch (nt) {
      case "string":
      case "number":
        Me = !0;
        break;
      case "object":
        switch (j.$$typeof) {
          case h:
          case m:
            Me = !0;
        }
    }
    if (Me) return Me = j, mt = mt(Me), j = ze === "" ? "." + X(Me, 0) : ze, Ee(mt) ? (Ze = "", j != null && (Ze = j.replace($, "$&/") + "/"), we(mt, J, Ze, "", function(Gt) {
      return Gt;
    })) : mt != null && (it(mt) && (mt = qe(mt, Ze + (!mt.key || Me && Me.key === mt.key ? "" : ("" + mt.key).replace($, "$&/") + "/") + j)), J.push(mt)), 1;
    if (Me = 0, ze = ze === "" ? "." : ze + ":", Ee(j)) for (var st = 0; st < j.length; st++) {
      nt = j[st];
      var dt = ze + X(nt, st);
      Me += we(nt, J, Ze, dt, mt);
    }
    else if (dt = q(j), typeof dt == "function") for (j = dt.call(j), st = 0; !(nt = j.next()).done; ) nt = nt.value, dt = ze + X(nt, st++), Me += we(nt, J, Ze, dt, mt);
    else if (nt === "object") throw J = String(j), Error("Objects are not valid as a React child (found: " + (J === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : J) + "). If you meant to render a collection of children, use an array instead.");
    return Me;
  }
  function Be(j, J, Ze) {
    if (j == null) return j;
    var ze = [], mt = 0;
    return we(j, ze, "", "", function(nt) {
      return J.call(Ze, nt, mt++);
    }), ze;
  }
  function De(j) {
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
  var Re = { current: null }, ne = { transition: null }, Ne = { ReactCurrentDispatcher: Re, ReactCurrentBatchConfig: ne, ReactCurrentOwner: Ge };
  function _e() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Lt.Children = { map: Be, forEach: function(j, J, Ze) {
    Be(j, function() {
      J.apply(this, arguments);
    }, Ze);
  }, count: function(j) {
    var J = 0;
    return Be(j, function() {
      J++;
    }), J;
  }, toArray: function(j) {
    return Be(j, function(J) {
      return J;
    }) || [];
  }, only: function(j) {
    if (!it(j)) throw Error("React.Children.only expected to receive a single React element child.");
    return j;
  } }, Lt.Component = de, Lt.Fragment = v, Lt.Profiler = k, Lt.PureComponent = ve, Lt.StrictMode = E, Lt.Suspense = x, Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ne, Lt.act = _e, Lt.cloneElement = function(j, J, Ze) {
    if (j == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + j + ".");
    var ze = pe({}, j.props), mt = j.key, nt = j.ref, Me = j._owner;
    if (J != null) {
      if (J.ref !== void 0 && (nt = J.ref, Me = Ge.current), J.key !== void 0 && (mt = "" + J.key), j.type && j.type.defaultProps) var st = j.type.defaultProps;
      for (dt in J) he.call(J, dt) && !Fe.hasOwnProperty(dt) && (ze[dt] = J[dt] === void 0 && st !== void 0 ? st[dt] : J[dt]);
    }
    var dt = arguments.length - 2;
    if (dt === 1) ze.children = Ze;
    else if (1 < dt) {
      st = Array(dt);
      for (var Gt = 0; Gt < dt; Gt++) st[Gt] = arguments[Gt + 2];
      ze.children = st;
    }
    return { $$typeof: h, type: j.type, key: mt, ref: nt, props: ze, _owner: Me };
  }, Lt.createContext = function(j) {
    return j = { $$typeof: y, _currentValue: j, _currentValue2: j, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, j.Provider = { $$typeof: b, _context: j }, j.Consumer = j;
  }, Lt.createElement = Ie, Lt.createFactory = function(j) {
    var J = Ie.bind(null, j);
    return J.type = j, J;
  }, Lt.createRef = function() {
    return { current: null };
  }, Lt.forwardRef = function(j) {
    return { $$typeof: N, render: j };
  }, Lt.isValidElement = it, Lt.lazy = function(j) {
    return { $$typeof: z, _payload: { _status: -1, _result: j }, _init: De };
  }, Lt.memo = function(j, J) {
    return { $$typeof: w, type: j, compare: J === void 0 ? null : J };
  }, Lt.startTransition = function(j) {
    var J = ne.transition;
    ne.transition = {};
    try {
      j();
    } finally {
      ne.transition = J;
    }
  }, Lt.unstable_act = _e, Lt.useCallback = function(j, J) {
    return Re.current.useCallback(j, J);
  }, Lt.useContext = function(j) {
    return Re.current.useContext(j);
  }, Lt.useDebugValue = function() {
  }, Lt.useDeferredValue = function(j) {
    return Re.current.useDeferredValue(j);
  }, Lt.useEffect = function(j, J) {
    return Re.current.useEffect(j, J);
  }, Lt.useId = function() {
    return Re.current.useId();
  }, Lt.useImperativeHandle = function(j, J, Ze) {
    return Re.current.useImperativeHandle(j, J, Ze);
  }, Lt.useInsertionEffect = function(j, J) {
    return Re.current.useInsertionEffect(j, J);
  }, Lt.useLayoutEffect = function(j, J) {
    return Re.current.useLayoutEffect(j, J);
  }, Lt.useMemo = function(j, J) {
    return Re.current.useMemo(j, J);
  }, Lt.useReducer = function(j, J, Ze) {
    return Re.current.useReducer(j, J, Ze);
  }, Lt.useRef = function(j) {
    return Re.current.useRef(j);
  }, Lt.useState = function(j) {
    return Re.current.useState(j);
  }, Lt.useSyncExternalStore = function(j, J, Ze) {
    return Re.current.useSyncExternalStore(j, J, Ze);
  }, Lt.useTransition = function() {
    return Re.current.useTransition();
  }, Lt.version = "18.3.1", Lt;
}
var mv = { exports: {} };
mv.exports;
var jE;
function Nk() {
  return jE || (jE = 1, (function(h, m) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var v = "18.3.1", E = /* @__PURE__ */ Symbol.for("react.element"), k = /* @__PURE__ */ Symbol.for("react.portal"), b = /* @__PURE__ */ Symbol.for("react.fragment"), y = /* @__PURE__ */ Symbol.for("react.strict_mode"), N = /* @__PURE__ */ Symbol.for("react.profiler"), x = /* @__PURE__ */ Symbol.for("react.provider"), w = /* @__PURE__ */ Symbol.for("react.context"), z = /* @__PURE__ */ Symbol.for("react.forward_ref"), H = /* @__PURE__ */ Symbol.for("react.suspense"), q = /* @__PURE__ */ Symbol.for("react.suspense_list"), G = /* @__PURE__ */ Symbol.for("react.memo"), pe = /* @__PURE__ */ Symbol.for("react.lazy"), ae = /* @__PURE__ */ Symbol.for("react.offscreen"), de = Symbol.iterator, se = "@@iterator";
      function ve(S) {
        if (S === null || typeof S != "object")
          return null;
        var D = de && S[de] || S[se];
        return typeof D == "function" ? D : null;
      }
      var Se = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ee = {
        transition: null
      }, he = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Ge = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Fe = {}, Ie = null;
      function qe(S) {
        Ie = S;
      }
      Fe.setExtraStackFrame = function(S) {
        Ie = S;
      }, Fe.getCurrentStack = null, Fe.getStackAddendum = function() {
        var S = "";
        Ie && (S += Ie);
        var D = Fe.getCurrentStack;
        return D && (S += D() || ""), S;
      };
      var it = !1, ge = !1, $ = !1, X = !1, we = !1, Be = {
        ReactCurrentDispatcher: Se,
        ReactCurrentBatchConfig: Ee,
        ReactCurrentOwner: Ge
      };
      Be.ReactDebugCurrentFrame = Fe, Be.ReactCurrentActQueue = he;
      function De(S) {
        {
          for (var D = arguments.length, W = new Array(D > 1 ? D - 1 : 0), K = 1; K < D; K++)
            W[K - 1] = arguments[K];
          ne("warn", S, W);
        }
      }
      function Re(S) {
        {
          for (var D = arguments.length, W = new Array(D > 1 ? D - 1 : 0), K = 1; K < D; K++)
            W[K - 1] = arguments[K];
          ne("error", S, W);
        }
      }
      function ne(S, D, W) {
        {
          var K = Be.ReactDebugCurrentFrame, Ce = K.getStackAddendum();
          Ce !== "" && (D += "%s", W = W.concat([Ce]));
          var rt = W.map(function(xe) {
            return String(xe);
          });
          rt.unshift("Warning: " + D), Function.prototype.apply.call(console[S], console, rt);
        }
      }
      var Ne = {};
      function _e(S, D) {
        {
          var W = S.constructor, K = W && (W.displayName || W.name) || "ReactClass", Ce = K + "." + D;
          if (Ne[Ce])
            return;
          Re("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", D, K), Ne[Ce] = !0;
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
        enqueueForceUpdate: function(S, D, W) {
          _e(S, "forceUpdate");
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
        enqueueReplaceState: function(S, D, W, K) {
          _e(S, "replaceState");
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
        enqueueSetState: function(S, D, W, K) {
          _e(S, "setState");
        }
      }, J = Object.assign, Ze = {};
      Object.freeze(Ze);
      function ze(S, D, W) {
        this.props = S, this.context = D, this.refs = Ze, this.updater = W || j;
      }
      ze.prototype.isReactComponent = {}, ze.prototype.setState = function(S, D) {
        if (typeof S != "object" && typeof S != "function" && S != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, D, "setState");
      }, ze.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate");
      };
      {
        var mt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, nt = function(S, D) {
          Object.defineProperty(ze.prototype, S, {
            get: function() {
              De("%s(...) is deprecated in plain JavaScript React classes. %s", D[0], D[1]);
            }
          });
        };
        for (var Me in mt)
          mt.hasOwnProperty(Me) && nt(Me, mt[Me]);
      }
      function st() {
      }
      st.prototype = ze.prototype;
      function dt(S, D, W) {
        this.props = S, this.context = D, this.refs = Ze, this.updater = W || j;
      }
      var Gt = dt.prototype = new st();
      Gt.constructor = dt, J(Gt, ze.prototype), Gt.isPureReactComponent = !0;
      function An() {
        var S = {
          current: null
        };
        return Object.seal(S), S;
      }
      var Dr = Array.isArray;
      function wn(S) {
        return Dr(S);
      }
      function or(S) {
        {
          var D = typeof Symbol == "function" && Symbol.toStringTag, W = D && S[Symbol.toStringTag] || S.constructor.name || "Object";
          return W;
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
          return Re("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", or(S)), Yn(S);
      }
      function vi(S, D, W) {
        var K = S.displayName;
        if (K)
          return K;
        var Ce = D.displayName || D.name || "";
        return Ce !== "" ? W + "(" + Ce + ")" : W;
      }
      function pa(S) {
        return S.displayName || "Context";
      }
      function Zn(S) {
        if (S == null)
          return null;
        if (typeof S.tag == "number" && Re("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
          return S.displayName || S.name || null;
        if (typeof S == "string")
          return S;
        switch (S) {
          case b:
            return "Fragment";
          case k:
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
            case w:
              var D = S;
              return pa(D) + ".Consumer";
            case x:
              var W = S;
              return pa(W._context) + ".Provider";
            case z:
              return vi(S, S.render, "ForwardRef");
            case G:
              var K = S.displayName || null;
              return K !== null ? K : Zn(S.type) || "Memo";
            case pe: {
              var Ce = S, rt = Ce._payload, xe = Ce._init;
              try {
                return Zn(xe(rt));
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
      }, Er, qa, Un;
      Un = {};
      function Rr(S) {
        if (Tn.call(S, "ref")) {
          var D = Object.getOwnPropertyDescriptor(S, "ref").get;
          if (D && D.isReactWarning)
            return !1;
        }
        return S.ref !== void 0;
      }
      function va(S) {
        if (Tn.call(S, "key")) {
          var D = Object.getOwnPropertyDescriptor(S, "key").get;
          if (D && D.isReactWarning)
            return !1;
        }
        return S.key !== void 0;
      }
      function Ka(S, D) {
        var W = function() {
          Er || (Er = !0, Re("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        W.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: W,
          configurable: !0
        });
      }
      function hi(S, D) {
        var W = function() {
          qa || (qa = !0, Re("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        W.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: W,
          configurable: !0
        });
      }
      function be(S) {
        if (typeof S.ref == "string" && Ge.current && S.__self && Ge.current.stateNode !== S.__self) {
          var D = Zn(Ge.current.type);
          Un[D] || (Re('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D, S.ref), Un[D] = !0);
        }
      }
      var Ke = function(S, D, W, K, Ce, rt, xe) {
        var lt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: E,
          // Built-in properties that belong on the element
          type: S,
          key: D,
          ref: W,
          props: xe,
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
          value: K
        }), Object.defineProperty(lt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Ce
        }), Object.freeze && (Object.freeze(lt.props), Object.freeze(lt)), lt;
      };
      function bt(S, D, W) {
        var K, Ce = {}, rt = null, xe = null, lt = null, Dt = null;
        if (D != null) {
          Rr(D) && (xe = D.ref, be(D)), va(D) && (qr(D.key), rt = "" + D.key), lt = D.__self === void 0 ? null : D.__self, Dt = D.__source === void 0 ? null : D.__source;
          for (K in D)
            Tn.call(D, K) && !Qn.hasOwnProperty(K) && (Ce[K] = D[K]);
        }
        var zt = arguments.length - 2;
        if (zt === 1)
          Ce.children = W;
        else if (zt > 1) {
          for (var sn = Array(zt), Jt = 0; Jt < zt; Jt++)
            sn[Jt] = arguments[Jt + 2];
          Object.freeze && Object.freeze(sn), Ce.children = sn;
        }
        if (S && S.defaultProps) {
          var wt = S.defaultProps;
          for (K in wt)
            Ce[K] === void 0 && (Ce[K] = wt[K]);
        }
        if (rt || xe) {
          var Zt = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          rt && Ka(Ce, Zt), xe && hi(Ce, Zt);
        }
        return Ke(S, rt, xe, lt, Dt, Ge.current, Ce);
      }
      function Wt(S, D) {
        var W = Ke(S.type, D, S.ref, S._self, S._source, S._owner, S.props);
        return W;
      }
      function on(S, D, W) {
        if (S == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
        var K, Ce = J({}, S.props), rt = S.key, xe = S.ref, lt = S._self, Dt = S._source, zt = S._owner;
        if (D != null) {
          Rr(D) && (xe = D.ref, zt = Ge.current), va(D) && (qr(D.key), rt = "" + D.key);
          var sn;
          S.type && S.type.defaultProps && (sn = S.type.defaultProps);
          for (K in D)
            Tn.call(D, K) && !Qn.hasOwnProperty(K) && (D[K] === void 0 && sn !== void 0 ? Ce[K] = sn[K] : Ce[K] = D[K]);
        }
        var Jt = arguments.length - 2;
        if (Jt === 1)
          Ce.children = W;
        else if (Jt > 1) {
          for (var wt = Array(Jt), Zt = 0; Zt < Jt; Zt++)
            wt[Zt] = arguments[Zt + 2];
          Ce.children = wt;
        }
        return Ke(S.type, rt, xe, lt, Dt, zt, Ce);
      }
      function yn(S) {
        return typeof S == "object" && S !== null && S.$$typeof === E;
      }
      var fn = ".", er = ":";
      function ln(S) {
        var D = /[=:]/g, W = {
          "=": "=0",
          ":": "=2"
        }, K = S.replace(D, function(Ce) {
          return W[Ce];
        });
        return "$" + K;
      }
      var qt = !1, Kt = /\/+/g;
      function ha(S) {
        return S.replace(Kt, "$&/");
      }
      function br(S, D) {
        return typeof S == "object" && S !== null && S.key != null ? (qr(S.key), ln("" + S.key)) : D.toString(36);
      }
      function ka(S, D, W, K, Ce) {
        var rt = typeof S;
        (rt === "undefined" || rt === "boolean") && (S = null);
        var xe = !1;
        if (S === null)
          xe = !0;
        else
          switch (rt) {
            case "string":
            case "number":
              xe = !0;
              break;
            case "object":
              switch (S.$$typeof) {
                case E:
                case k:
                  xe = !0;
              }
          }
        if (xe) {
          var lt = S, Dt = Ce(lt), zt = K === "" ? fn + br(lt, 0) : K;
          if (wn(Dt)) {
            var sn = "";
            zt != null && (sn = ha(zt) + "/"), ka(Dt, D, sn, "", function(fd) {
              return fd;
            });
          } else Dt != null && (yn(Dt) && (Dt.key && (!lt || lt.key !== Dt.key) && qr(Dt.key), Dt = Wt(
            Dt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            W + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Dt.key && (!lt || lt.key !== Dt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ha("" + Dt.key) + "/"
            ) : "") + zt
          )), D.push(Dt));
          return 1;
        }
        var Jt, wt, Zt = 0, gn = K === "" ? fn : K + er;
        if (wn(S))
          for (var Do = 0; Do < S.length; Do++)
            Jt = S[Do], wt = gn + br(Jt, Do), Zt += ka(Jt, D, W, wt, Ce);
        else {
          var as = ve(S);
          if (typeof as == "function") {
            var Gi = S;
            as === Gi.entries && (qt || De("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), qt = !0);
            for (var is = as.call(Gi), hl, cd = 0; !(hl = is.next()).done; )
              Jt = hl.value, wt = gn + br(Jt, cd++), Zt += ka(Jt, D, W, wt, Ce);
          } else if (rt === "object") {
            var Cc = String(S);
            throw new Error("Objects are not valid as a React child (found: " + (Cc === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : Cc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Zt;
      }
      function Wi(S, D, W) {
        if (S == null)
          return S;
        var K = [], Ce = 0;
        return ka(S, K, "", "", function(rt) {
          return D.call(W, rt, Ce++);
        }), K;
      }
      function ol(S) {
        var D = 0;
        return Wi(S, function() {
          D++;
        }), D;
      }
      function ll(S, D, W) {
        Wi(S, function() {
          D.apply(this, arguments);
        }, W);
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
          $$typeof: w,
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
        var W = !1, K = !1, Ce = !1;
        {
          var rt = {
            $$typeof: w,
            _context: D
          };
          Object.defineProperties(rt, {
            Provider: {
              get: function() {
                return K || (K = !0, Re("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), D.Provider;
              },
              set: function(xe) {
                D.Provider = xe;
              }
            },
            _currentValue: {
              get: function() {
                return D._currentValue;
              },
              set: function(xe) {
                D._currentValue = xe;
              }
            },
            _currentValue2: {
              get: function() {
                return D._currentValue2;
              },
              set: function(xe) {
                D._currentValue2 = xe;
              }
            },
            _threadCount: {
              get: function() {
                return D._threadCount;
              },
              set: function(xe) {
                D._threadCount = xe;
              }
            },
            Consumer: {
              get: function() {
                return W || (W = !0, Re("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), D.Consumer;
              }
            },
            displayName: {
              get: function() {
                return D.displayName;
              },
              set: function(xe) {
                Ce || (De("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", xe), Ce = !0);
              }
            }
          }), D.Consumer = rt;
        }
        return D._currentRenderer = null, D._currentRenderer2 = null, D;
      }
      var Or = -1, Lr = 0, lr = 1, mi = 2;
      function Xa(S) {
        if (S._status === Or) {
          var D = S._result, W = D();
          if (W.then(function(rt) {
            if (S._status === Lr || S._status === Or) {
              var xe = S;
              xe._status = lr, xe._result = rt;
            }
          }, function(rt) {
            if (S._status === Lr || S._status === Or) {
              var xe = S;
              xe._status = mi, xe._result = rt;
            }
          }), S._status === Or) {
            var K = S;
            K._status = Lr, K._result = W;
          }
        }
        if (S._status === lr) {
          var Ce = S._result;
          return Ce === void 0 && Re(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Ce), "default" in Ce || Re(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Ce), Ce.default;
        } else
          throw S._result;
      }
      function yi(S) {
        var D = {
          // We use these fields to store the result.
          _status: Or,
          _result: S
        }, W = {
          $$typeof: pe,
          _payload: D,
          _init: Xa
        };
        {
          var K, Ce;
          Object.defineProperties(W, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return K;
              },
              set: function(rt) {
                Re("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), K = rt, Object.defineProperty(W, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Ce;
              },
              set: function(rt) {
                Re("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Ce = rt, Object.defineProperty(W, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return W;
      }
      function gi(S) {
        S != null && S.$$typeof === G ? Re("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof S != "function" ? Re("forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S) : S.length !== 0 && S.length !== 2 && Re("forwardRef render functions accept exactly two parameters: props and ref. %s", S.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), S != null && (S.defaultProps != null || S.propTypes != null) && Re("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var D = {
          $$typeof: z,
          render: S
        };
        {
          var W;
          Object.defineProperty(D, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return W;
            },
            set: function(K) {
              W = K, !S.name && !S.displayName && (S.displayName = K);
            }
          });
        }
        return D;
      }
      var O;
      O = /* @__PURE__ */ Symbol.for("react.module.reference");
      function ie(S) {
        return !!(typeof S == "string" || typeof S == "function" || S === b || S === N || we || S === y || S === H || S === q || X || S === ae || it || ge || $ || typeof S == "object" && S !== null && (S.$$typeof === pe || S.$$typeof === G || S.$$typeof === x || S.$$typeof === w || S.$$typeof === z || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        S.$$typeof === O || S.getModuleId !== void 0));
      }
      function ke(S, D) {
        ie(S) || Re("memo: The first argument must be a component. Instead received: %s", S === null ? "null" : typeof S);
        var W = {
          $$typeof: G,
          type: S,
          compare: D === void 0 ? null : D
        };
        {
          var K;
          Object.defineProperty(W, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return K;
            },
            set: function(Ce) {
              K = Ce, !S.name && !S.displayName && (S.displayName = Ce);
            }
          });
        }
        return W;
      }
      function He() {
        var S = Se.current;
        return S === null && Re(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), S;
      }
      function _t(S) {
        var D = He();
        if (S._context !== void 0) {
          var W = S._context;
          W.Consumer === S ? Re("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : W.Provider === S && Re("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return D.useContext(S);
      }
      function yt(S) {
        var D = He();
        return D.useState(S);
      }
      function kt(S, D, W) {
        var K = He();
        return K.useReducer(S, D, W);
      }
      function Tt(S) {
        var D = He();
        return D.useRef(S);
      }
      function xn(S, D) {
        var W = He();
        return W.useEffect(S, D);
      }
      function un(S, D) {
        var W = He();
        return W.useInsertionEffect(S, D);
      }
      function dn(S, D) {
        var W = He();
        return W.useLayoutEffect(S, D);
      }
      function ur(S, D) {
        var W = He();
        return W.useCallback(S, D);
      }
      function Ja(S, D) {
        var W = He();
        return W.useMemo(S, D);
      }
      function Za(S, D, W) {
        var K = He();
        return K.useImperativeHandle(S, D, W);
      }
      function Ct(S, D) {
        {
          var W = He();
          return W.useDebugValue(S, D);
        }
      }
      function Rt() {
        var S = He();
        return S.useTransition();
      }
      function ei(S) {
        var D = He();
        return D.useDeferredValue(S);
      }
      function sl() {
        var S = He();
        return S.useId();
      }
      function cl(S, D, W) {
        var K = He();
        return K.useSyncExternalStore(S, D, W);
      }
      var Eo = 0, nu, Ro, Kr, es, Nr, Sc, _c;
      function ru() {
      }
      ru.__reactDisabledLog = !0;
      function bo() {
        {
          if (Eo === 0) {
            nu = console.log, Ro = console.info, Kr = console.warn, es = console.error, Nr = console.group, Sc = console.groupCollapsed, _c = console.groupEnd;
            var S = {
              configurable: !0,
              enumerable: !0,
              value: ru,
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
                value: nu
              }),
              info: J({}, S, {
                value: Ro
              }),
              warn: J({}, S, {
                value: Kr
              }),
              error: J({}, S, {
                value: es
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
          Eo < 0 && Re("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ti = Be.ReactCurrentDispatcher, ni;
      function au(S, D, W) {
        {
          if (ni === void 0)
            try {
              throw Error();
            } catch (Ce) {
              var K = Ce.stack.trim().match(/\n( *(at )?)/);
              ni = K && K[1] || "";
            }
          return `
` + ni + S;
        }
      }
      var fl = !1, wo;
      {
        var iu = typeof WeakMap == "function" ? WeakMap : Map;
        wo = new iu();
      }
      function ou(S, D) {
        if (!S || fl)
          return "";
        {
          var W = wo.get(S);
          if (W !== void 0)
            return W;
        }
        var K;
        fl = !0;
        var Ce = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var rt;
        rt = ti.current, ti.current = null, bo();
        try {
          if (D) {
            var xe = function() {
              throw Error();
            };
            if (Object.defineProperty(xe.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(xe, []);
              } catch (gn) {
                K = gn;
              }
              Reflect.construct(S, [], xe);
            } else {
              try {
                xe.call();
              } catch (gn) {
                K = gn;
              }
              S.call(xe.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (gn) {
              K = gn;
            }
            S();
          }
        } catch (gn) {
          if (gn && K && typeof gn.stack == "string") {
            for (var lt = gn.stack.split(`
`), Dt = K.stack.split(`
`), zt = lt.length - 1, sn = Dt.length - 1; zt >= 1 && sn >= 0 && lt[zt] !== Dt[sn]; )
              sn--;
            for (; zt >= 1 && sn >= 0; zt--, sn--)
              if (lt[zt] !== Dt[sn]) {
                if (zt !== 1 || sn !== 1)
                  do
                    if (zt--, sn--, sn < 0 || lt[zt] !== Dt[sn]) {
                      var Jt = `
` + lt[zt].replace(" at new ", " at ");
                      return S.displayName && Jt.includes("<anonymous>") && (Jt = Jt.replace("<anonymous>", S.displayName)), typeof S == "function" && wo.set(S, Jt), Jt;
                    }
                  while (zt >= 1 && sn >= 0);
                break;
              }
          }
        } finally {
          fl = !1, ti.current = rt, ma(), Error.prepareStackTrace = Ce;
        }
        var wt = S ? S.displayName || S.name : "", Zt = wt ? au(wt) : "";
        return typeof S == "function" && wo.set(S, Zt), Zt;
      }
      function Yi(S, D, W) {
        return ou(S, !1);
      }
      function ud(S) {
        var D = S.prototype;
        return !!(D && D.isReactComponent);
      }
      function Qi(S, D, W) {
        if (S == null)
          return "";
        if (typeof S == "function")
          return ou(S, ud(S));
        if (typeof S == "string")
          return au(S);
        switch (S) {
          case H:
            return au("Suspense");
          case q:
            return au("SuspenseList");
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case z:
              return Yi(S.render);
            case G:
              return Qi(S.type, D, W);
            case pe: {
              var K = S, Ce = K._payload, rt = K._init;
              try {
                return Qi(rt(Ce), D, W);
              } catch {
              }
            }
          }
        return "";
      }
      var Ft = {}, lu = Be.ReactDebugCurrentFrame;
      function jt(S) {
        if (S) {
          var D = S._owner, W = Qi(S.type, S._source, D ? D.type : null);
          lu.setExtraStackFrame(W);
        } else
          lu.setExtraStackFrame(null);
      }
      function ts(S, D, W, K, Ce) {
        {
          var rt = Function.call.bind(Tn);
          for (var xe in S)
            if (rt(S, xe)) {
              var lt = void 0;
              try {
                if (typeof S[xe] != "function") {
                  var Dt = Error((K || "React class") + ": " + W + " type `" + xe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[xe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Dt.name = "Invariant Violation", Dt;
                }
                lt = S[xe](D, xe, K, W, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (zt) {
                lt = zt;
              }
              lt && !(lt instanceof Error) && (jt(Ce), Re("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", K || "React class", W, xe, typeof lt), jt(null)), lt instanceof Error && !(lt.message in Ft) && (Ft[lt.message] = !0, jt(Ce), Re("Failed %s type: %s", W, lt.message), jt(null));
            }
        }
      }
      function Si(S) {
        if (S) {
          var D = S._owner, W = Qi(S.type, S._source, D ? D.type : null);
          qe(W);
        } else
          qe(null);
      }
      var ht;
      ht = !1;
      function uu() {
        if (Ge.current) {
          var S = Zn(Ge.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
      function sr(S) {
        if (S !== void 0) {
          var D = S.fileName.replace(/^.*[\\\/]/, ""), W = S.lineNumber;
          return `

Check your code at ` + D + ":" + W + ".";
        }
        return "";
      }
      function _i(S) {
        return S != null ? sr(S.__source) : "";
      }
      var Mr = {};
      function Ci(S) {
        var D = uu();
        if (!D) {
          var W = typeof S == "string" ? S : S.displayName || S.name;
          W && (D = `

Check the top-level render call using <` + W + ">.");
        }
        return D;
      }
      function pn(S, D) {
        if (!(!S._store || S._store.validated || S.key != null)) {
          S._store.validated = !0;
          var W = Ci(D);
          if (!Mr[W]) {
            Mr[W] = !0;
            var K = "";
            S && S._owner && S._owner !== Ge.current && (K = " It was passed a child from " + Zn(S._owner.type) + "."), Si(S), Re('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', W, K), Si(null);
          }
        }
      }
      function Xt(S, D) {
        if (typeof S == "object") {
          if (wn(S))
            for (var W = 0; W < S.length; W++) {
              var K = S[W];
              yn(K) && pn(K, D);
            }
          else if (yn(S))
            S._store && (S._store.validated = !0);
          else if (S) {
            var Ce = ve(S);
            if (typeof Ce == "function" && Ce !== S.entries)
              for (var rt = Ce.call(S), xe; !(xe = rt.next()).done; )
                yn(xe.value) && pn(xe.value, D);
          }
        }
      }
      function To(S) {
        {
          var D = S.type;
          if (D == null || typeof D == "string")
            return;
          var W;
          if (typeof D == "function")
            W = D.propTypes;
          else if (typeof D == "object" && (D.$$typeof === z || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          D.$$typeof === G))
            W = D.propTypes;
          else
            return;
          if (W) {
            var K = Zn(D);
            ts(W, S.props, "prop", K, S);
          } else if (D.PropTypes !== void 0 && !ht) {
            ht = !0;
            var Ce = Zn(D);
            Re("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ce || "Unknown");
          }
          typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && Re("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Gn(S) {
        {
          for (var D = Object.keys(S.props), W = 0; W < D.length; W++) {
            var K = D[W];
            if (K !== "children" && K !== "key") {
              Si(S), Re("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", K), Si(null);
              break;
            }
          }
          S.ref !== null && (Si(S), Re("Invalid attribute `ref` supplied to `React.Fragment`."), Si(null));
        }
      }
      function Ar(S, D, W) {
        var K = ie(S);
        if (!K) {
          var Ce = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (Ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var rt = _i(D);
          rt ? Ce += rt : Ce += uu();
          var xe;
          S === null ? xe = "null" : wn(S) ? xe = "array" : S !== void 0 && S.$$typeof === E ? (xe = "<" + (Zn(S.type) || "Unknown") + " />", Ce = " Did you accidentally export a JSX literal instead of a component?") : xe = typeof S, Re("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", xe, Ce);
        }
        var lt = bt.apply(this, arguments);
        if (lt == null)
          return lt;
        if (K)
          for (var Dt = 2; Dt < arguments.length; Dt++)
            Xt(arguments[Dt], S);
        return S === b ? Gn(lt) : To(lt), lt;
      }
      var Da = !1;
      function dl(S) {
        var D = Ar.bind(null, S);
        return D.type = S, Da || (Da = !0, De("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(D, "type", {
          enumerable: !1,
          get: function() {
            return De("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: S
            }), S;
          }
        }), D;
      }
      function ns(S, D, W) {
        for (var K = on.apply(this, arguments), Ce = 2; Ce < arguments.length; Ce++)
          Xt(arguments[Ce], K.type);
        return To(K), K;
      }
      function rs(S, D) {
        var W = Ee.transition;
        Ee.transition = {};
        var K = Ee.transition;
        Ee.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          S();
        } finally {
          if (Ee.transition = W, W === null && K._updatedFibers) {
            var Ce = K._updatedFibers.size;
            Ce > 10 && De("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), K._updatedFibers.clear();
          }
        }
      }
      var xo = !1, pl = null;
      function sd(S) {
        if (pl === null)
          try {
            var D = ("require" + Math.random()).slice(0, 7), W = h && h[D];
            pl = W.call(h, "timers").setImmediate;
          } catch {
            pl = function(Ce) {
              xo === !1 && (xo = !0, typeof MessageChannel > "u" && Re("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var rt = new MessageChannel();
              rt.port1.onmessage = Ce, rt.port2.postMessage(void 0);
            };
          }
        return pl(S);
      }
      var Oa = 0, ri = !1;
      function Ei(S) {
        {
          var D = Oa;
          Oa++, he.current === null && (he.current = []);
          var W = he.isBatchingLegacy, K;
          try {
            if (he.isBatchingLegacy = !0, K = S(), !W && he.didScheduleLegacyUpdate) {
              var Ce = he.current;
              Ce !== null && (he.didScheduleLegacyUpdate = !1, ko(Ce));
            }
          } catch (wt) {
            throw La(D), wt;
          } finally {
            he.isBatchingLegacy = W;
          }
          if (K !== null && typeof K == "object" && typeof K.then == "function") {
            var rt = K, xe = !1, lt = {
              then: function(wt, Zt) {
                xe = !0, rt.then(function(gn) {
                  La(D), Oa === 0 ? su(gn, wt, Zt) : wt(gn);
                }, function(gn) {
                  La(D), Zt(gn);
                });
              }
            };
            return !ri && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              xe || (ri = !0, Re("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), lt;
          } else {
            var Dt = K;
            if (La(D), Oa === 0) {
              var zt = he.current;
              zt !== null && (ko(zt), he.current = null);
              var sn = {
                then: function(wt, Zt) {
                  he.current === null ? (he.current = [], su(Dt, wt, Zt)) : wt(Dt);
                }
              };
              return sn;
            } else {
              var Jt = {
                then: function(wt, Zt) {
                  wt(Dt);
                }
              };
              return Jt;
            }
          }
        }
      }
      function La(S) {
        S !== Oa - 1 && Re("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Oa = S;
      }
      function su(S, D, W) {
        {
          var K = he.current;
          if (K !== null)
            try {
              ko(K), sd(function() {
                K.length === 0 ? (he.current = null, D(S)) : su(S, D, W);
              });
            } catch (Ce) {
              W(Ce);
            }
          else
            D(S);
        }
      }
      var cu = !1;
      function ko(S) {
        if (!cu) {
          cu = !0;
          var D = 0;
          try {
            for (; D < S.length; D++) {
              var W = S[D];
              do
                W = W(!0);
              while (W !== null);
            }
            S.length = 0;
          } catch (K) {
            throw S = S.slice(D + 1), K;
          } finally {
            cu = !1;
          }
        }
      }
      var vl = Ar, fu = ns, du = dl, ai = {
        map: Wi,
        forEach: ll,
        count: ol,
        toArray: _o,
        only: Co
      };
      m.Children = ai, m.Component = ze, m.Fragment = b, m.Profiler = N, m.PureComponent = dt, m.StrictMode = y, m.Suspense = H, m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Be, m.act = Ei, m.cloneElement = fu, m.createContext = ul, m.createElement = vl, m.createFactory = du, m.createRef = An, m.forwardRef = gi, m.isValidElement = yn, m.lazy = yi, m.memo = ke, m.startTransition = rs, m.unstable_act = Ei, m.useCallback = ur, m.useContext = _t, m.useDebugValue = Ct, m.useDeferredValue = ei, m.useEffect = xn, m.useId = sl, m.useImperativeHandle = Za, m.useInsertionEffect = un, m.useLayoutEffect = dn, m.useMemo = Ja, m.useReducer = kt, m.useRef = Tt, m.useState = yt, m.useSyncExternalStore = cl, m.useTransition = Rt, m.version = v, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(mv, mv.exports)), mv.exports;
}
var zE;
function gv() {
  return zE || (zE = 1, process.env.NODE_ENV === "production" ? py.exports = Lk() : py.exports = Nk()), py.exports;
}
var PE;
function Mk() {
  if (PE) return pv;
  PE = 1;
  var h = gv(), m = /* @__PURE__ */ Symbol.for("react.element"), v = /* @__PURE__ */ Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, k = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(N, x, w) {
    var z, H = {}, q = null, G = null;
    w !== void 0 && (q = "" + w), x.key !== void 0 && (q = "" + x.key), x.ref !== void 0 && (G = x.ref);
    for (z in x) E.call(x, z) && !b.hasOwnProperty(z) && (H[z] = x[z]);
    if (N && N.defaultProps) for (z in x = N.defaultProps, x) H[z] === void 0 && (H[z] = x[z]);
    return { $$typeof: m, type: N, key: q, ref: G, props: H, _owner: k.current };
  }
  return pv.Fragment = v, pv.jsx = y, pv.jsxs = y, pv;
}
var vv = {};
var FE;
function Ak() {
  return FE || (FE = 1, process.env.NODE_ENV !== "production" && (function() {
    var h = gv(), m = /* @__PURE__ */ Symbol.for("react.element"), v = /* @__PURE__ */ Symbol.for("react.portal"), E = /* @__PURE__ */ Symbol.for("react.fragment"), k = /* @__PURE__ */ Symbol.for("react.strict_mode"), b = /* @__PURE__ */ Symbol.for("react.profiler"), y = /* @__PURE__ */ Symbol.for("react.provider"), N = /* @__PURE__ */ Symbol.for("react.context"), x = /* @__PURE__ */ Symbol.for("react.forward_ref"), w = /* @__PURE__ */ Symbol.for("react.suspense"), z = /* @__PURE__ */ Symbol.for("react.suspense_list"), H = /* @__PURE__ */ Symbol.for("react.memo"), q = /* @__PURE__ */ Symbol.for("react.lazy"), G = /* @__PURE__ */ Symbol.for("react.offscreen"), pe = Symbol.iterator, ae = "@@iterator";
    function de(O) {
      if (O === null || typeof O != "object")
        return null;
      var ie = pe && O[pe] || O[ae];
      return typeof ie == "function" ? ie : null;
    }
    var se = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ve(O) {
      {
        for (var ie = arguments.length, ke = new Array(ie > 1 ? ie - 1 : 0), He = 1; He < ie; He++)
          ke[He - 1] = arguments[He];
        Se("error", O, ke);
      }
    }
    function Se(O, ie, ke) {
      {
        var He = se.ReactDebugCurrentFrame, _t = He.getStackAddendum();
        _t !== "" && (ie += "%s", ke = ke.concat([_t]));
        var yt = ke.map(function(kt) {
          return String(kt);
        });
        yt.unshift("Warning: " + ie), Function.prototype.apply.call(console[O], console, yt);
      }
    }
    var Ee = !1, he = !1, Ge = !1, Fe = !1, Ie = !1, qe;
    qe = /* @__PURE__ */ Symbol.for("react.module.reference");
    function it(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === E || O === b || Ie || O === k || O === w || O === z || Fe || O === G || Ee || he || Ge || typeof O == "object" && O !== null && (O.$$typeof === q || O.$$typeof === H || O.$$typeof === y || O.$$typeof === N || O.$$typeof === x || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === qe || O.getModuleId !== void 0));
    }
    function ge(O, ie, ke) {
      var He = O.displayName;
      if (He)
        return He;
      var _t = ie.displayName || ie.name || "";
      return _t !== "" ? ke + "(" + _t + ")" : ke;
    }
    function $(O) {
      return O.displayName || "Context";
    }
    function X(O) {
      if (O == null)
        return null;
      if (typeof O.tag == "number" && ve("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof O == "function")
        return O.displayName || O.name || null;
      if (typeof O == "string")
        return O;
      switch (O) {
        case E:
          return "Fragment";
        case v:
          return "Portal";
        case b:
          return "Profiler";
        case k:
          return "StrictMode";
        case w:
          return "Suspense";
        case z:
          return "SuspenseList";
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case N:
            var ie = O;
            return $(ie) + ".Consumer";
          case y:
            var ke = O;
            return $(ke._context) + ".Provider";
          case x:
            return ge(O, O.render, "ForwardRef");
          case H:
            var He = O.displayName || null;
            return He !== null ? He : X(O.type) || "Memo";
          case q: {
            var _t = O, yt = _t._payload, kt = _t._init;
            try {
              return X(kt(yt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var we = Object.assign, Be = 0, De, Re, ne, Ne, _e, j, J;
    function Ze() {
    }
    Ze.__reactDisabledLog = !0;
    function ze() {
      {
        if (Be === 0) {
          De = console.log, Re = console.info, ne = console.warn, Ne = console.error, _e = console.group, j = console.groupCollapsed, J = console.groupEnd;
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
        Be++;
      }
    }
    function mt() {
      {
        if (Be--, Be === 0) {
          var O = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: we({}, O, {
              value: De
            }),
            info: we({}, O, {
              value: Re
            }),
            warn: we({}, O, {
              value: ne
            }),
            error: we({}, O, {
              value: Ne
            }),
            group: we({}, O, {
              value: _e
            }),
            groupCollapsed: we({}, O, {
              value: j
            }),
            groupEnd: we({}, O, {
              value: J
            })
          });
        }
        Be < 0 && ve("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var nt = se.ReactCurrentDispatcher, Me;
    function st(O, ie, ke) {
      {
        if (Me === void 0)
          try {
            throw Error();
          } catch (_t) {
            var He = _t.stack.trim().match(/\n( *(at )?)/);
            Me = He && He[1] || "";
          }
        return `
` + Me + O;
      }
    }
    var dt = !1, Gt;
    {
      var An = typeof WeakMap == "function" ? WeakMap : Map;
      Gt = new An();
    }
    function Dr(O, ie) {
      if (!O || dt)
        return "";
      {
        var ke = Gt.get(O);
        if (ke !== void 0)
          return ke;
      }
      var He;
      dt = !0;
      var _t = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var yt;
      yt = nt.current, nt.current = null, ze();
      try {
        if (ie) {
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
              He = Ct;
            }
            Reflect.construct(O, [], kt);
          } else {
            try {
              kt.call();
            } catch (Ct) {
              He = Ct;
            }
            O.call(kt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ct) {
            He = Ct;
          }
          O();
        }
      } catch (Ct) {
        if (Ct && He && typeof Ct.stack == "string") {
          for (var Tt = Ct.stack.split(`
`), xn = He.stack.split(`
`), un = Tt.length - 1, dn = xn.length - 1; un >= 1 && dn >= 0 && Tt[un] !== xn[dn]; )
            dn--;
          for (; un >= 1 && dn >= 0; un--, dn--)
            if (Tt[un] !== xn[dn]) {
              if (un !== 1 || dn !== 1)
                do
                  if (un--, dn--, dn < 0 || Tt[un] !== xn[dn]) {
                    var ur = `
` + Tt[un].replace(" at new ", " at ");
                    return O.displayName && ur.includes("<anonymous>") && (ur = ur.replace("<anonymous>", O.displayName)), typeof O == "function" && Gt.set(O, ur), ur;
                  }
                while (un >= 1 && dn >= 0);
              break;
            }
        }
      } finally {
        dt = !1, nt.current = yt, mt(), Error.prepareStackTrace = _t;
      }
      var Ja = O ? O.displayName || O.name : "", Za = Ja ? st(Ja) : "";
      return typeof O == "function" && Gt.set(O, Za), Za;
    }
    function wn(O, ie, ke) {
      return Dr(O, !1);
    }
    function or(O) {
      var ie = O.prototype;
      return !!(ie && ie.isReactComponent);
    }
    function Wn(O, ie, ke) {
      if (O == null)
        return "";
      if (typeof O == "function")
        return Dr(O, or(O));
      if (typeof O == "string")
        return st(O);
      switch (O) {
        case w:
          return st("Suspense");
        case z:
          return st("SuspenseList");
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case x:
            return wn(O.render);
          case H:
            return Wn(O.type, ie, ke);
          case q: {
            var He = O, _t = He._payload, yt = He._init;
            try {
              return Wn(yt(_t), ie, ke);
            } catch {
            }
          }
        }
      return "";
    }
    var Yn = Object.prototype.hasOwnProperty, qr = {}, vi = se.ReactDebugCurrentFrame;
    function pa(O) {
      if (O) {
        var ie = O._owner, ke = Wn(O.type, O._source, ie ? ie.type : null);
        vi.setExtraStackFrame(ke);
      } else
        vi.setExtraStackFrame(null);
    }
    function Zn(O, ie, ke, He, _t) {
      {
        var yt = Function.call.bind(Yn);
        for (var kt in O)
          if (yt(O, kt)) {
            var Tt = void 0;
            try {
              if (typeof O[kt] != "function") {
                var xn = Error((He || "React class") + ": " + ke + " type `" + kt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[kt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw xn.name = "Invariant Violation", xn;
              }
              Tt = O[kt](ie, kt, He, ke, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (un) {
              Tt = un;
            }
            Tt && !(Tt instanceof Error) && (pa(_t), ve("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", He || "React class", ke, kt, typeof Tt), pa(null)), Tt instanceof Error && !(Tt.message in qr) && (qr[Tt.message] = !0, pa(_t), ve("Failed %s type: %s", ke, Tt.message), pa(null));
          }
      }
    }
    var Tn = Array.isArray;
    function Qn(O) {
      return Tn(O);
    }
    function Er(O) {
      {
        var ie = typeof Symbol == "function" && Symbol.toStringTag, ke = ie && O[Symbol.toStringTag] || O.constructor.name || "Object";
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
        return ve("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(O)), Un(O);
    }
    var va = se.ReactCurrentOwner, Ka = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, hi, be;
    function Ke(O) {
      if (Yn.call(O, "ref")) {
        var ie = Object.getOwnPropertyDescriptor(O, "ref").get;
        if (ie && ie.isReactWarning)
          return !1;
      }
      return O.ref !== void 0;
    }
    function bt(O) {
      if (Yn.call(O, "key")) {
        var ie = Object.getOwnPropertyDescriptor(O, "key").get;
        if (ie && ie.isReactWarning)
          return !1;
      }
      return O.key !== void 0;
    }
    function Wt(O, ie) {
      typeof O.ref == "string" && va.current;
    }
    function on(O, ie) {
      {
        var ke = function() {
          hi || (hi = !0, ve("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        ke.isReactWarning = !0, Object.defineProperty(O, "key", {
          get: ke,
          configurable: !0
        });
      }
    }
    function yn(O, ie) {
      {
        var ke = function() {
          be || (be = !0, ve("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        ke.isReactWarning = !0, Object.defineProperty(O, "ref", {
          get: ke,
          configurable: !0
        });
      }
    }
    var fn = function(O, ie, ke, He, _t, yt, kt) {
      var Tt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: m,
        // Built-in properties that belong on the element
        type: O,
        key: ie,
        ref: ke,
        props: kt,
        // Record the component responsible for creating this element.
        _owner: yt
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
        value: He
      }), Object.defineProperty(Tt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _t
      }), Object.freeze && (Object.freeze(Tt.props), Object.freeze(Tt)), Tt;
    };
    function er(O, ie, ke, He, _t) {
      {
        var yt, kt = {}, Tt = null, xn = null;
        ke !== void 0 && (Rr(ke), Tt = "" + ke), bt(ie) && (Rr(ie.key), Tt = "" + ie.key), Ke(ie) && (xn = ie.ref, Wt(ie, _t));
        for (yt in ie)
          Yn.call(ie, yt) && !Ka.hasOwnProperty(yt) && (kt[yt] = ie[yt]);
        if (O && O.defaultProps) {
          var un = O.defaultProps;
          for (yt in un)
            kt[yt] === void 0 && (kt[yt] = un[yt]);
        }
        if (Tt || xn) {
          var dn = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
          Tt && on(kt, dn), xn && yn(kt, dn);
        }
        return fn(O, Tt, xn, _t, He, va.current, kt);
      }
    }
    var ln = se.ReactCurrentOwner, qt = se.ReactDebugCurrentFrame;
    function Kt(O) {
      if (O) {
        var ie = O._owner, ke = Wn(O.type, O._source, ie ? ie.type : null);
        qt.setExtraStackFrame(ke);
      } else
        qt.setExtraStackFrame(null);
    }
    var ha;
    ha = !1;
    function br(O) {
      return typeof O == "object" && O !== null && O.$$typeof === m;
    }
    function ka() {
      {
        if (ln.current) {
          var O = X(ln.current.type);
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
        var ie = ka();
        if (!ie) {
          var ke = typeof O == "string" ? O : O.displayName || O.name;
          ke && (ie = `

Check the top-level render call using <` + ke + ">.");
        }
        return ie;
      }
    }
    function _o(O, ie) {
      {
        if (!O._store || O._store.validated || O.key != null)
          return;
        O._store.validated = !0;
        var ke = ll(ie);
        if (ol[ke])
          return;
        ol[ke] = !0;
        var He = "";
        O && O._owner && O._owner !== ln.current && (He = " It was passed a child from " + X(O._owner.type) + "."), Kt(O), ve('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ke, He), Kt(null);
      }
    }
    function Co(O, ie) {
      {
        if (typeof O != "object")
          return;
        if (Qn(O))
          for (var ke = 0; ke < O.length; ke++) {
            var He = O[ke];
            br(He) && _o(He, ie);
          }
        else if (br(O))
          O._store && (O._store.validated = !0);
        else if (O) {
          var _t = de(O);
          if (typeof _t == "function" && _t !== O.entries)
            for (var yt = _t.call(O), kt; !(kt = yt.next()).done; )
              br(kt.value) && _o(kt.value, ie);
        }
      }
    }
    function ul(O) {
      {
        var ie = O.type;
        if (ie == null || typeof ie == "string")
          return;
        var ke;
        if (typeof ie == "function")
          ke = ie.propTypes;
        else if (typeof ie == "object" && (ie.$$typeof === x || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ie.$$typeof === H))
          ke = ie.propTypes;
        else
          return;
        if (ke) {
          var He = X(ie);
          Zn(ke, O.props, "prop", He, O);
        } else if (ie.PropTypes !== void 0 && !ha) {
          ha = !0;
          var _t = X(ie);
          ve("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _t || "Unknown");
        }
        typeof ie.getDefaultProps == "function" && !ie.getDefaultProps.isReactClassApproved && ve("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Or(O) {
      {
        for (var ie = Object.keys(O.props), ke = 0; ke < ie.length; ke++) {
          var He = ie[ke];
          if (He !== "children" && He !== "key") {
            Kt(O), ve("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", He), Kt(null);
            break;
          }
        }
        O.ref !== null && (Kt(O), ve("Invalid attribute `ref` supplied to `React.Fragment`."), Kt(null));
      }
    }
    var Lr = {};
    function lr(O, ie, ke, He, _t, yt) {
      {
        var kt = it(O);
        if (!kt) {
          var Tt = "";
          (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (Tt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var xn = Wi();
          xn ? Tt += xn : Tt += ka();
          var un;
          O === null ? un = "null" : Qn(O) ? un = "array" : O !== void 0 && O.$$typeof === m ? (un = "<" + (X(O.type) || "Unknown") + " />", Tt = " Did you accidentally export a JSX literal instead of a component?") : un = typeof O, ve("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", un, Tt);
        }
        var dn = er(O, ie, ke, _t, yt);
        if (dn == null)
          return dn;
        if (kt) {
          var ur = ie.children;
          if (ur !== void 0)
            if (He)
              if (Qn(ur)) {
                for (var Ja = 0; Ja < ur.length; Ja++)
                  Co(ur[Ja], O);
                Object.freeze && Object.freeze(ur);
              } else
                ve("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Co(ur, O);
        }
        if (Yn.call(ie, "key")) {
          var Za = X(O), Ct = Object.keys(ie).filter(function(sl) {
            return sl !== "key";
          }), Rt = Ct.length > 0 ? "{key: someKey, " + Ct.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Lr[Za + Rt]) {
            var ei = Ct.length > 0 ? "{" + Ct.join(": ..., ") + ": ...}" : "{}";
            ve(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Rt, Za, ei, Za), Lr[Za + Rt] = !0;
          }
        }
        return O === E ? Or(dn) : ul(dn), dn;
      }
    }
    function mi(O, ie, ke) {
      return lr(O, ie, ke, !0);
    }
    function Xa(O, ie, ke) {
      return lr(O, ie, ke, !1);
    }
    var yi = Xa, gi = mi;
    vv.Fragment = E, vv.jsx = yi, vv.jsxs = gi;
  })()), vv;
}
var VE;
function Uk() {
  return VE || (VE = 1, process.env.NODE_ENV === "production" ? dy.exports = Mk() : dy.exports = Ak()), dy.exports;
}
var te = Uk(), vt = gv();
const mc = /* @__PURE__ */ S2(vt), HE = (h) => Symbol.iterator in h, IE = (h) => (
  // HACK: avoid checking entries type
  "entries" in h
), BE = (h, m) => {
  const v = h instanceof Map ? h : new Map(h.entries()), E = m instanceof Map ? m : new Map(m.entries());
  if (v.size !== E.size)
    return !1;
  for (const [k, b] of v)
    if (!E.has(k) || !Object.is(b, E.get(k)))
      return !1;
  return !0;
}, jk = (h, m) => {
  const v = h[Symbol.iterator](), E = m[Symbol.iterator]();
  let k = v.next(), b = E.next();
  for (; !k.done && !b.done; ) {
    if (!Object.is(k.value, b.value))
      return !1;
    k = v.next(), b = E.next();
  }
  return !!k.done && !!b.done;
};
function zk(h, m) {
  return Object.is(h, m) ? !0 : typeof h != "object" || h === null || typeof m != "object" || m === null || Object.getPrototypeOf(h) !== Object.getPrototypeOf(m) ? !1 : HE(h) && HE(m) ? IE(h) && IE(m) ? BE(h, m) : jk(h, m) : BE(
    { entries: () => Object.entries(h) },
    { entries: () => Object.entries(m) }
  );
}
function _2(h) {
  const m = mc.useRef(void 0);
  return (v) => {
    const E = h(v);
    return zk(m.current, E) ? m.current : m.current = E;
  };
}
const Pk = "_sidebar_gxqe0_1", Fk = "_sidebarNav_gxqe0_24", Vk = "_sectionWrapper_gxqe0_32", Hk = "_sectionHeader_gxqe0_37", Ik = "_active_gxqe0_48", Bk = "_sidebarItemInHeader_gxqe0_68", $k = "_plusButton_gxqe0_71", Wk = "_sidebarItem_gxqe0_68", Yk = "_sidebarIcon_gxqe0_138", Qk = "_sidebarLabel_gxqe0_148", Gk = "_plusIcon_gxqe0_173", qk = "_rotated_gxqe0_178", bn = {
  sidebar: Pk,
  sidebarNav: Fk,
  sectionWrapper: Vk,
  sectionHeader: Hk,
  active: Ik,
  sidebarItemInHeader: Bk,
  plusButton: $k,
  sidebarItem: Wk,
  sidebarIcon: Yk,
  sidebarLabel: Qk,
  plusIcon: Gk,
  rotated: qk
}, Kk = "_expandedContent_pymls_2", Xk = "_searchWrapper_pymls_17", Jk = "_searchContainer_pymls_23", Zk = "_searchDropdown_pymls_33", eD = "_dropdownItem_pymls_69", tD = "_selected_pymls_84", nD = "_personAvatar_pymls_97", rD = "_avatarPlaceholder_pymls_111", aD = "_personInfo_pymls_123", iD = "_personName_pymls_131", oD = "_personTitle_pymls_140", lD = "_dropdownEmpty_pymls_148", uD = "_searchIcon_pymls_155", sD = "_searchInput_pymls_160", cD = "_suggestionsList_pymls_172", fD = "_suggestionItemWrapper_pymls_191", dD = "_suggestionItem_pymls_191", pD = "_statusIcon_pymls_219", vD = "_moreButton_pymls_222", hD = "_childItem_pymls_225", mD = "_suggestionLabel_pymls_254", yD = "_loadingState_pymls_299", gD = "_loadingSpinner_pymls_309", SD = "_emptyState_pymls_323", _D = "_errorState_pymls_330", rn = {
  expandedContent: Kk,
  searchWrapper: Xk,
  searchContainer: Jk,
  searchDropdown: Zk,
  dropdownItem: eD,
  selected: tD,
  personAvatar: nD,
  avatarPlaceholder: rD,
  personInfo: aD,
  personName: iD,
  personTitle: oD,
  dropdownEmpty: lD,
  searchIcon: uD,
  searchInput: sD,
  suggestionsList: cD,
  suggestionItemWrapper: fD,
  suggestionItem: dD,
  statusIcon: pD,
  moreButton: vD,
  childItem: hD,
  suggestionLabel: mD,
  loadingState: yD,
  loadingSpinner: gD,
  emptyState: SD,
  errorState: _D
}, $E = (h) => {
  let m;
  const v = /* @__PURE__ */ new Set(), E = (w, z) => {
    const H = typeof w == "function" ? w(m) : w;
    if (!Object.is(H, m)) {
      const q = m;
      m = z ?? (typeof H != "object" || H === null) ? H : Object.assign({}, m, H), v.forEach((G) => G(m, q));
    }
  }, k = () => m, N = { setState: E, getState: k, getInitialState: () => x, subscribe: (w) => (v.add(w), () => v.delete(w)) }, x = m = h(E, k, N);
  return N;
}, CD = ((h) => h ? $E(h) : $E), ED = (h) => h;
function RD(h, m = ED) {
  const v = mc.useSyncExternalStore(
    h.subscribe,
    mc.useCallback(() => m(h.getState()), [h, m]),
    mc.useCallback(() => m(h.getInitialState()), [h, m])
  );
  return mc.useDebugValue(v), v;
}
const WE = (h) => {
  const m = CD(h), v = (E) => RD(m, E);
  return Object.assign(v, m), v;
}, bD = ((h) => h ? WE(h) : WE), YE = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_API_TOKEN: "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.HaW2NmuPKtPOmSIKb6FRvM6K99vWG3WQAF0dV__D9a-fsTNiULEyU0H7Mb-1fEyWQzngZPpqJdr23BqHBiueFSHXsv4LvcXd.ySimixIU0x918yFAtIPnpg.-_IwoJgcEGvzYxqJAY4At5xgNswpJ4tdxY8ipD8OnYsyiStgL6gLgX3k1Ly8Jd6oScz1hl0cKqglsubWEVXN8t7Pis-w4iXXpXZq6nzNu9rOhUwhye3siQr8xcWsDFHy7LyKjPyKtb2sWIKO8g7e-FrEfF0yGyRUtvPemPtuSGc.QRnyAlx3FjwQotw4yQUa-ssktqZPAM679uwiG54wOlI", VITE_API_URL: "https://xh2o-yths-38lt.n7c.xano.io/api", VITE_API_URL2: "https://xh2o-yths-38lt.n7c.xano.io/api:MkA4QsNh", VITE_DATA_SOURCE: "staging", VITE_LLM_ENDPOINT: "http://localhost:3001" }, yv = /* @__PURE__ */ new Map(), vy = (h) => {
  const m = yv.get(h);
  return m ? Object.fromEntries(
    Object.entries(m.stores).map(([v, E]) => [v, E.getState()])
  ) : {};
}, wD = (h, m, v) => {
  if (h === void 0)
    return {
      type: "untracked",
      connection: m.connect(v)
    };
  const E = yv.get(v.name);
  if (E)
    return { type: "tracked", store: h, ...E };
  const k = {
    connection: m.connect(v),
    stores: {}
  };
  return yv.set(v.name, k), { type: "tracked", store: h, ...k };
}, TD = (h, m) => {
  if (m === void 0) return;
  const v = yv.get(h);
  v && (delete v.stores[m], Object.keys(v.stores).length === 0 && yv.delete(h));
}, xD = (h) => {
  var m, v;
  if (!h) return;
  const E = h.split(`
`), k = E.findIndex(
    (y) => y.includes("api.setState")
  );
  if (k < 0) return;
  const b = ((m = E[k + 1]) == null ? void 0 : m.trim()) || "";
  return (v = /.+ (.+) .+/.exec(b)) == null ? void 0 : v[1];
}, kD = (h, m = {}) => (v, E, k) => {
  const { enabled: b, anonymousActionType: y, store: N, ...x } = m;
  let w;
  try {
    w = (b ?? (YE ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch {
  }
  if (!w)
    return h(v, E, k);
  const { connection: z, ...H } = wD(N, w, x);
  let q = !0;
  k.setState = ((ae, de, se) => {
    const ve = v(ae, de);
    if (!q) return ve;
    const Se = se === void 0 ? {
      type: y || xD(new Error().stack) || "anonymous"
    } : typeof se == "string" ? { type: se } : se;
    return N === void 0 ? (z?.send(Se, E()), ve) : (z?.send(
      {
        ...Se,
        type: `${N}/${Se.type}`
      },
      {
        ...vy(x.name),
        [N]: k.getState()
      }
    ), ve);
  }), k.devtools = {
    cleanup: () => {
      z && typeof z.unsubscribe == "function" && z.unsubscribe(), TD(x.name, N);
    }
  };
  const G = (...ae) => {
    const de = q;
    q = !1, v(...ae), q = de;
  }, pe = h(k.setState, E, k);
  if (H.type === "untracked" ? z?.init(pe) : (H.stores[H.store] = k, z?.init(
    Object.fromEntries(
      Object.entries(H.stores).map(([ae, de]) => [
        ae,
        ae === H.store ? pe : de.getState()
      ])
    )
  )), k.dispatchFromDevtools && typeof k.dispatch == "function") {
    let ae = !1;
    const de = k.dispatch;
    k.dispatch = (...se) => {
      (YE ? "production" : void 0) !== "production" && se[0].type === "__setState" && !ae && (console.warn(
        '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
      ), ae = !0), de(...se);
    };
  }
  return z.subscribe((ae) => {
    var de;
    switch (ae.type) {
      case "ACTION":
        if (typeof ae.payload != "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return IS(
          ae.payload,
          (se) => {
            if (se.type === "__setState") {
              if (N === void 0) {
                G(se.state);
                return;
              }
              Object.keys(se.state).length !== 1 && console.error(
                `
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `
              );
              const ve = se.state[N];
              if (ve == null)
                return;
              JSON.stringify(k.getState()) !== JSON.stringify(ve) && G(ve);
              return;
            }
            k.dispatchFromDevtools && typeof k.dispatch == "function" && k.dispatch(se);
          }
        );
      case "DISPATCH":
        switch (ae.payload.type) {
          case "RESET":
            return G(pe), N === void 0 ? z?.init(k.getState()) : z?.init(vy(x.name));
          case "COMMIT":
            if (N === void 0) {
              z?.init(k.getState());
              return;
            }
            return z?.init(vy(x.name));
          case "ROLLBACK":
            return IS(ae.state, (se) => {
              if (N === void 0) {
                G(se), z?.init(k.getState());
                return;
              }
              G(se[N]), z?.init(vy(x.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return IS(ae.state, (se) => {
              if (N === void 0) {
                G(se);
                return;
              }
              JSON.stringify(k.getState()) !== JSON.stringify(se[N]) && G(se[N]);
            });
          case "IMPORT_STATE": {
            const { nextLiftedState: se } = ae.payload, ve = (de = se.computedStates.slice(-1)[0]) == null ? void 0 : de.state;
            if (!ve) return;
            G(N === void 0 ? ve : ve[N]), z?.send(
              null,
              // FIXME no-any
              se
            );
            return;
          }
          case "PAUSE_RECORDING":
            return q = !q;
        }
        return;
    }
  }), pe;
}, DD = kD, IS = (h, m) => {
  let v;
  try {
    v = JSON.parse(h);
  } catch (E) {
    console.error(
      "[zustand devtools middleware] Could not parse the received json",
      E
    );
  }
  v !== void 0 && m(v);
}, QE = "https://xh2o-yths-38lt.n7c.xano.io/api", GE = "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.HaW2NmuPKtPOmSIKb6FRvM6K99vWG3WQAF0dV__D9a-fsTNiULEyU0H7Mb-1fEyWQzngZPpqJdr23BqHBiueFSHXsv4LvcXd.ySimixIU0x918yFAtIPnpg.-_IwoJgcEGvzYxqJAY4At5xgNswpJ4tdxY8ipD8OnYsyiStgL6gLgX3k1Ly8Jd6oScz1hl0cKqglsubWEVXN8t7Pis-w4iXXpXZq6nzNu9rOhUwhye3siQr8xcWsDFHy7LyKjPyKtb2sWIKO8g7e-FrEfF0yGyRUtvPemPtuSGc.QRnyAlx3FjwQotw4yQUa-ssktqZPAM679uwiG54wOlI", qE = "staging", C2 = bD()(DD((h) => ({
  leverageLoops: [],
  suggestionRequests: [],
  isLoading: !1,
  error: null,
  fetchNetworkPersons: async () => {
    h({ isLoading: !0, error: null });
    try {
      const m = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GE}`,
        "x-data-source": qE
      }, v = await fetch(`${QE}:Et3oQAtI/my-persons`, { headers: m }), E = await v.json();
      if (!v.ok) {
        const k = E?.message || E?.error || "Failed to fetch loops", b = `HTTP ${v.status}: ${k}`;
        throw new Error(b);
      }
      h({ leverageLoops: E, isLoading: !1 });
    } catch (m) {
      h({
        error: m instanceof Error ? m.message : "Unknown error",
        isLoading: !1
      });
    }
  },
  fetchSuggestionRequests: async () => {
    h({ isLoading: !0, error: null });
    try {
      const m = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GE}`,
        "x-data-source": qE
      }, v = await fetch(`${QE}:MkA4QsNh/suggestion-requests?copilot_mode=loop`, { headers: m }), E = await v.json();
      if (!v.ok) {
        const k = E?.message || E?.error || "Failed to fetch suggestion requests", b = `HTTP ${v.status}: ${k}`;
        throw new Error(b);
      }
      h({ suggestionRequests: E?.items ?? [], isLoading: !1 });
    } catch (m) {
      h({
        error: m instanceof Error ? m.message : "Unknown error",
        isLoading: !1
      });
    }
  },
  setLeverageLoops: (m) => h({ leverageLoops: m }),
  addLeverageLoops: (m) => h((v) => ({ leverageLoops: [...v.leverageLoops, ...m] }))
}))), OD = ({ status: h }) => {
  switch (h) {
    case "draft":
      return /* @__PURE__ */ te.jsx("span", { className: rn.statusIcon, "data-status": "draft", children: "✗" });
    case "activated":
      return /* @__PURE__ */ te.jsx("span", { className: rn.statusIcon, "data-status": "activated", children: "✗" });
    case "processsing":
      return /* @__PURE__ */ te.jsx("span", { className: rn.statusIcon, "data-status": "processsing", children: "✗" });
    case "suggestion_made":
      return /* @__PURE__ */ te.jsx("span", { className: rn.statusIcon, "data-status": "suggestion_made", children: "✗" });
  }
  return /* @__PURE__ */ te.jsx("span", { className: rn.statusIcon, "data-status": "completed", children: "✓" });
}, LD = ({
  contentType: h,
  items: m,
  selectedItem: v,
  onItemSelect: E,
  isLoading: k = !1,
  emptyMessage: b = "No items found",
  error: y = null,
  selectedSuggestionRequest: N,
  onSuggestionRequestSelect: x
}) => {
  const [w, z] = vt.useState(/* @__PURE__ */ new Set()), [H, q] = vt.useState(""), [G, pe] = vt.useState(!1), ae = vt.useRef(null), { suggestionRequests: de, leverageLoops: se, isLoading: ve, error: Se } = C2(
    _2((ge) => ({
      suggestionRequests: ge.suggestionRequests,
      leverageLoops: ge.leverageLoops,
      isLoading: ge.isLoading,
      error: ge.error
    }))
  );
  vt.useEffect(() => {
    const ge = ($) => {
      ae.current && !ae.current.contains($.target) && pe(!1);
    };
    return document.addEventListener("mousedown", ge), () => document.removeEventListener("mousedown", ge);
  }, []);
  const Ee = (ge) => {
    z(($) => {
      const X = new Set($);
      return X.has(ge) ? X.delete(ge) : X.add(ge), X;
    });
  }, he = (ge, $) => (console.log("persons in filterLeverageLoopPersons", ge), $ ? ge.filter(
    (X) => X.full_name?.toLowerCase().includes($.toLowerCase()) || X.master_person.name?.toLowerCase().includes($.toLowerCase()) || X.master_person.current_title?.toLowerCase().includes($.toLowerCase()) || X.master_person.bio?.toLowerCase().includes($.toLowerCase()) || X.master_person.master_company?.company_name?.toLowerCase().includes($.toLowerCase())
  ) : []), Ge = (ge) => {
    const $ = ge.target.value;
    q($), pe($.length > 0);
  }, Fe = (ge) => {
    E(ge), q(""), pe(!1);
  }, Ie = (ge) => {
    const $ = v?.id === ge.id;
    return /* @__PURE__ */ te.jsxs(
      "button",
      {
        className: `${rn.dropdownItem} ${$ ? rn.selected : ""}`,
        onClick: () => Fe(ge),
        children: [
          /* @__PURE__ */ te.jsx("div", { className: rn.personAvatar, children: ge.master_person.avatar ? /* @__PURE__ */ te.jsx("img", { src: ge.master_person.avatar, alt: ge.full_name }) : /* @__PURE__ */ te.jsx("span", { className: rn.avatarPlaceholder, children: ge.full_name?.charAt(0) || "?" }) }),
          /* @__PURE__ */ te.jsxs("div", { className: rn.personInfo, children: [
            /* @__PURE__ */ te.jsx("span", { className: rn.personName, children: ge.full_name || ge.master_person.name }),
            ge.master_person.current_title && /* @__PURE__ */ te.jsxs("span", { className: rn.personTitle, children: [
              ge.master_person.current_title,
              ge.master_person.master_company?.company_name && /* @__PURE__ */ te.jsxs(te.Fragment, { children: [
                " at ",
                ge.master_person.master_company.company_name
              ] })
            ] })
          ] })
        ]
      },
      ge.id
    );
  }, qe = (ge, $ = !1) => {
    const X = N?.request_header_title === ge.request_header_title;
    return /* @__PURE__ */ te.jsx("div", { className: rn.suggestionItemWrapper, children: /* @__PURE__ */ te.jsxs(
      "button",
      {
        className: `${rn.suggestionItem} ${$ ? rn.childItem : ""} ${X ? rn.selected : ""}`,
        onClick: () => {
          Ee(ge.request_header_title), x(ge);
        },
        children: [
          /* @__PURE__ */ te.jsx(OD, { status: ge.status }),
          /* @__PURE__ */ te.jsx("span", { className: rn.suggestionLabel, children: ge.request_header_title }),
          /* @__PURE__ */ te.jsx("button", { className: rn.moreButton, onClick: (we) => we.stopPropagation(), children: "⋮" })
        ]
      }
    ) }, ge.id);
  }, it = he(se.length > 0 ? se : m, H);
  return /* @__PURE__ */ te.jsxs("div", { className: rn.expandedContent, children: [
    /* @__PURE__ */ te.jsxs("div", { className: rn.searchWrapper, ref: ae, children: [
      /* @__PURE__ */ te.jsxs("div", { className: rn.searchContainer, children: [
        /* @__PURE__ */ te.jsx("span", { className: rn.searchIcon, children: "🔍" }),
        /* @__PURE__ */ te.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search persons...",
            className: rn.searchInput,
            value: H,
            onChange: Ge,
            onFocus: () => H.length > 0 && pe(!0)
          }
        )
      ] }),
      G && /* @__PURE__ */ te.jsx("div", { className: rn.searchDropdown, children: it.length === 0 ? /* @__PURE__ */ te.jsxs("div", { className: rn.dropdownEmpty, children: [
        'No persons found for "',
        H,
        '"'
      ] }) : it.map((ge) => Ie(ge)) })
    ] }),
    /* @__PURE__ */ te.jsx("div", { className: rn.suggestionsList, children: k ? /* @__PURE__ */ te.jsxs("div", { className: rn.loadingState, children: [
      /* @__PURE__ */ te.jsx("span", { className: rn.loadingSpinner }),
      "Loading..."
    ] }) : de.length === 0 ? /* @__PURE__ */ te.jsx("div", { className: rn.emptyState, children: b }) : y ? /* @__PURE__ */ te.jsx("div", { className: rn.errorState, children: y }) : de.map((ge) => qe(ge)) })
  ] });
}, ND = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.15816%2015.5394C4.42185%2015.8099%203.64142%2015.9909%202.82808%2016.0678C2.75965%2016.0739%202.69009%2016.0784%202.62129%2016.081C2.05326%2016.1048%201.47513%2015.9215%201.00732%2015.5213C0.154714%2014.7923%20-0.052828%2013.5813%200.443029%2012.6226C0.448638%2012.6116%200.453874%2012.6011%200.459857%2012.5898L3.41481%206.77869C2.08654%209.73401%202.83855%2013.3286%205.16339%2015.5372L5.15816%2015.5391V15.5394Z'%20fill='url(%23paint0_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8419%204.46013C15.5782%204.18972%2016.3587%204.00906%2017.172%203.93175C17.2401%203.92571%2017.31%203.92119%2017.3788%203.91855C17.9468%203.89479%2018.525%204.07808%2018.9928%204.47823C19.845%205.20726%2020.0529%206.41828%2019.5571%207.37699C19.5515%207.3883%2019.5458%207.39886%2019.5402%207.4098L16.5853%2013.2205C17.9132%2010.2648%2017.1615%206.67059%2014.8367%204.46202L14.8419%204.46013Z'%20fill='url(%23paint1_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10%202.61975C11.8545%202.61975%2013.547%203.31559%2014.8367%204.46211C12.464%205.51888%2010.8283%207.5913%2010.1904%2010.0563C9.55242%2012.5214%207.60302%2014.6787%205.16338%2015.5378C3.66459%2014.2306%202.68222%2012.2057%202.68222%2010.0001C2.68259%205.92394%205.95877%202.61975%2010%202.61975Z'%20fill='url(%23paint2_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8367%204.46167C16.358%205.81412%2017.3179%207.79376%2017.3179%209.99932C17.3179%2014.0751%2014.0417%2017.3793%2010.0001%2017.3793C8.14604%2017.3793%206.45317%2016.6835%205.16342%2015.537C7.59222%2014.5651%209.36213%2012.4644%2010.0001%209.99932C10.638%207.53429%2012.4079%205.4332%2014.8367%204.46167Z'%20fill='url(%23paint3_linear_23492_1459)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_23492_1459'%20x1='1.41231'%20y1='10.771'%20x2='6.31346'%20y2='13.2684'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFAE00'%20stop-opacity='0.12'/%3e%3cstop%20offset='1'%20stop-color='%23FFAE00'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_23492_1459'%20x1='13.6991'%20y1='6.69473'%20x2='18.6306'%20y2='9.20746'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2313F562'/%3e%3cstop%20offset='1'%20stop-color='%2313F562'%20stop-opacity='0.09'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_23492_1459'%20x1='4.21878'%20y1='14.805'%20x2='10.8001'%20y2='2.68539'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FD5743'/%3e%3cstop%20offset='0.21'%20stop-color='%23D13D58'/%3e%3cstop%20offset='0.4'%20stop-color='%23AB2868'/%3e%3cstop%20offset='0.6'%20stop-color='%238C1B6F'/%3e%3cstop%20offset='1'%20stop-color='%23280553'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_23492_1459'%20x1='9.19834'%20y1='17.5257'%20x2='15.8611'%20y2='5.25654'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23130F56'/%3e%3cstop%20offset='0.41'%20stop-color='%23105D8E'/%3e%3cstop%20offset='0.6'%20stop-color='%23107995'/%3e%3cstop%20offset='0.79'%20stop-color='%2311A39E'/%3e%3cstop%20offset='1'%20stop-color='%2313EBAF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", MD = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%205.83329C9.17592%205.83329%208.37034%206.07766%207.68514%206.5355C6.99993%206.99334%206.46588%207.64408%206.15051%208.40544C5.83515%209.1668%205.75264%2010.0046%205.91341%2010.8128C6.07418%2011.6211%206.47102%2012.3635%207.05373%2012.9462C7.63645%2013.529%208.37888%2013.9258%209.18714%2014.0866C9.99539%2014.2473%2010.8332%2014.1648%2011.5945%2013.8495C12.3559%2013.5341%2013.0066%2013%2013.4645%2012.3148C13.9223%2011.6296%2014.1667%2010.824%2014.1667%209.99995M10.8333%202.54579C9.28839%202.37246%207.72776%202.68352%206.36733%203.43593C5.0069%204.18834%203.9139%205.34492%203.23953%206.74567C2.56516%208.14643%202.34274%209.72213%202.60305%2011.2548C2.86335%2012.7875%203.59352%2014.2014%204.69253%2015.301C5.79155%2016.4006%207.2051%2017.1314%208.73766%2017.3925C10.2702%2017.6536%2011.846%2017.432%2013.2471%2016.7583C14.6482%2016.0846%2015.8053%2014.9922%2016.5584%2013.6322C17.3115%2012.2721%2017.6234%2010.7117%2017.4508%209.16662M12.5%207.49995V4.99995L15%202.49995V4.99995H17.5L15%207.49995H12.5ZM12.5%207.49995L10%209.99995M9.16668%209.99995C9.16668%2010.221%209.25447%2010.4329%209.41076%2010.5892C9.56704%2010.7455%209.779%2010.8333%2010%2010.8333C10.221%2010.8333%2010.433%2010.7455%2010.5893%2010.5892C10.7455%2010.4329%2010.8333%2010.221%2010.8333%209.99995C10.8333%209.77894%2010.7455%209.56698%2010.5893%209.4107C10.433%209.25442%2010.221%209.16662%2010%209.16662C9.779%209.16662%209.56704%209.25442%209.41076%209.4107C9.25447%209.56698%209.16668%209.77894%209.16668%209.99995Z'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", AD = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.5533%205.43171C14.1448%204.53303%2013.4793%203.77539%2012.6409%203.2543C11.8024%202.73321%2010.8285%202.47198%209.84179%202.50353C8.8551%202.53509%207.89984%202.85802%207.09639%203.43162C6.29294%204.00523%205.67727%204.80383%205.32698%205.72679C4.97669%206.64974%204.90745%207.65573%205.12798%208.61798C5.34852%209.58022%205.84897%2010.4556%206.56625%2011.1339C7.28353%2011.8122%208.18555%2012.263%209.15861%2012.4294C10.1317%2012.5958%2011.1322%2012.4705%2012.0342%2012.0692'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.5683%2014.5533C15.467%2014.1448%2016.2246%2013.4793%2016.7457%2012.6409C17.2668%2011.8024%2017.5281%2010.8284%2017.4965%209.84176C17.4649%208.85507%2017.142%207.89981%2016.5684%207.09636C15.9948%206.29291%2015.1962%205.67724%2014.2732%205.32695C13.3503%204.97666%2012.3443%204.90742%2011.3821%205.12795C10.4198%205.34849%209.54439%205.84894%208.86612%206.56622C8.18784%207.2835%207.73708%208.18552%207.57064%209.15858C7.40419%2010.1316%207.52952%2011.1322%207.93083%2012.0341'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.45001%2014.5684C5.8585%2015.467%206.52387%2016.2247%207.36227%2016.7459C8.20067%2017.267%209.17458%2017.5283%2010.1613%2017.4969C11.1479%2017.4654%2012.1032%2017.1425%2012.9067%2016.569C13.7102%2015.9955%2014.3259%2015.197%2014.6763%2014.2741C15.0267%2013.3512%2015.0961%2012.3452%2014.8756%2011.383C14.6552%2010.4207%2014.1549%209.54526%2013.4377%208.8669C12.7205%208.18855%2011.8186%207.73767%2010.8456%207.57109C9.87256%207.40451%208.872%207.52969%207.97001%207.93085'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.43168%205.44995C4.53299%205.85844%203.77532%206.52381%203.25417%207.36221C2.73302%208.20061%202.47171%209.17452%202.50318%2010.1612C2.53465%2011.1479%202.85749%2012.1031%203.431%2012.9066C4.00451%2013.7101%204.80304%2014.3259%205.72594%2014.6763C6.64884%2015.0266%207.6548%2015.096%208.61706%2014.8756C9.57931%2014.6552%2010.4548%2014.1548%2011.1331%2013.4376C11.8115%2012.7205%2012.2624%2011.8185%2012.4289%2010.8455C12.5955%209.8725%2012.4703%208.87194%2012.0692%207.96995'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", UD = ({
  activeSection: h,
  onSectionChange: m
}) => {
  const { leverageLoops: v, suggestionRequests: E, fetchNetworkPersons: k, fetchSuggestionRequests: b, isLoading: y, error: N } = C2(
    _2((se) => ({
      leverageLoops: se.leverageLoops,
      suggestionRequests: se.suggestionRequests,
      fetchNetworkPersons: se.fetchNetworkPersons,
      fetchSuggestionRequests: se.fetchSuggestionRequests,
      isLoading: se.isLoading,
      error: se.error
    }))
  ), [x, w] = vt.useState(/* @__PURE__ */ new Set()), [z, H] = vt.useState(null), [q, G] = vt.useState(null), pe = (se) => {
    m(se), w((ve) => {
      const Se = new Set(ve);
      return Se.has(se) ? Se.delete(se) : Se.add(se), Se;
    });
  }, ae = (se) => {
    G(se), H(null), m("copilot");
  }, de = (se) => {
    H(se), G(null), m("copilot");
  };
  return vt.useEffect(() => {
    k(), b();
  }, []), /* @__PURE__ */ te.jsx("div", { className: bn.sidebar, children: /* @__PURE__ */ te.jsxs("nav", { className: bn.sidebarNav, children: [
    /* @__PURE__ */ te.jsxs(
      "button",
      {
        className: `${bn.sidebarItem} ${h === "copilot" ? bn.active : ""}`,
        onClick: () => m("copilot"),
        "aria-label": "Orbiter.io Copilot",
        children: [
          /* @__PURE__ */ te.jsx("span", { className: bn.sidebarIcon, children: /* @__PURE__ */ te.jsx("img", { src: ND, alt: "Orbiter", width: 18, height: 18 }) }),
          /* @__PURE__ */ te.jsx("span", { className: bn.sidebarLabel, children: "Orbiter.io Copilot" })
        ]
      }
    ),
    /* @__PURE__ */ te.jsx("div", { className: bn.sectionWrapper, children: /* @__PURE__ */ te.jsxs("div", { className: `${bn.sectionHeader} ${h === "outcomes" ? bn.active : ""}`, children: [
      /* @__PURE__ */ te.jsxs(
        "button",
        {
          className: bn.sidebarItemInHeader,
          onClick: () => m("outcomes"),
          "aria-label": "Outcomes",
          children: [
            /* @__PURE__ */ te.jsx("span", { className: bn.sidebarIcon, children: /* @__PURE__ */ te.jsx("img", { src: MD, alt: "Outcomes", width: 18, height: 18 }) }),
            /* @__PURE__ */ te.jsx("span", { className: bn.sidebarLabel, children: "Outcomes" })
          ]
        }
      ),
      /* @__PURE__ */ te.jsx(
        "button",
        {
          className: bn.plusButton,
          onClick: () => pe("outcomes"),
          "aria-label": "Expand Outcomes",
          children: /* @__PURE__ */ te.jsx("span", { className: `${bn.plusIcon} ${x.has("outcomes") ? bn.rotated : ""}`, children: "+" })
        }
      )
    ] }) }),
    /* @__PURE__ */ te.jsxs("div", { className: bn.sectionWrapper, children: [
      /* @__PURE__ */ te.jsxs("div", { className: `${bn.sectionHeader} ${h === "leverage-loops" ? bn.active : ""}`, children: [
        /* @__PURE__ */ te.jsxs(
          "button",
          {
            className: bn.sidebarItemInHeader,
            onClick: () => m("leverage-loops"),
            "aria-label": "Leverage Loops",
            children: [
              /* @__PURE__ */ te.jsx("span", { className: bn.sidebarIcon, children: /* @__PURE__ */ te.jsx("img", { src: AD, alt: "Leverage Loops", width: 18, height: 18 }) }),
              /* @__PURE__ */ te.jsx("span", { className: bn.sidebarLabel, children: "Leverage Loops" })
            ]
          }
        ),
        /* @__PURE__ */ te.jsx(
          "button",
          {
            className: bn.plusButton,
            onClick: () => pe("leverage-loops"),
            "aria-label": "Expand Leverage Loops",
            children: /* @__PURE__ */ te.jsx("span", { className: `${bn.plusIcon} ${x.has("leverage-loops") ? bn.rotated : ""}`, children: "+" })
          }
        )
      ] }),
      x.has("leverage-loops") && /* @__PURE__ */ te.jsx(
        LD,
        {
          contentType: "leverage-loops",
          items: v,
          selectedItem: q ?? null,
          selectedSuggestionRequest: z ?? null,
          onItemSelect: ae,
          onSuggestionRequestSelect: de,
          isLoading: y,
          error: N
        }
      )
    ] })
  ] }) });
}, jD = "_composerContainer_1dqbd_1", zD = "_composer_1dqbd_1", PD = "_inputWrapper_1dqbd_15", FD = "_input_1dqbd_15", VD = "_actions_1dqbd_40", HD = "_leftActions_1dqbd_47", ID = "_rightActions_1dqbd_48", BD = "_actionButton_1dqbd_54", $D = "_sendButton_1dqbd_75", WD = "_active_1dqbd_92", Bi = {
  composerContainer: jD,
  composer: zD,
  inputWrapper: PD,
  input: FD,
  actions: VD,
  leftActions: HD,
  rightActions: ID,
  actionButton: BD,
  sendButton: $D,
  active: WD
}, YD = ({
  onSend: h,
  disabled: m = !1,
  placeholder: v = "Ask anything..",
  initialValue: E = ""
}) => {
  const [k, b] = vt.useState(E), y = vt.useRef(null);
  vt.useEffect(() => {
    E && (b(E), setTimeout(() => y.current?.focus(), 0));
  }, [E]), vt.useEffect(() => {
    const w = y.current;
    w && (w.style.height = "auto", w.style.height = `${Math.min(w.scrollHeight, 200)}px`);
  }, [k]);
  const N = (w) => {
    w?.preventDefault(), k.trim() && !m && (h(k.trim()), b(""));
  }, x = (w) => {
    w.key === "Enter" && !w.shiftKey && (w.preventDefault(), N());
  };
  return /* @__PURE__ */ te.jsx("div", { className: Bi.composerContainer, children: /* @__PURE__ */ te.jsxs("form", { onSubmit: N, className: Bi.composer, children: [
    /* @__PURE__ */ te.jsx("div", { className: Bi.inputWrapper, children: /* @__PURE__ */ te.jsx(
      "textarea",
      {
        ref: y,
        value: k,
        onChange: (w) => b(w.target.value),
        onKeyDown: x,
        placeholder: v,
        disabled: m,
        className: Bi.input,
        rows: 1
      }
    ) }),
    /* @__PURE__ */ te.jsxs("div", { className: Bi.actions, children: [
      /* @__PURE__ */ te.jsxs("div", { className: Bi.leftActions, children: [
        /* @__PURE__ */ te.jsx(
          "button",
          {
            type: "button",
            className: Bi.actionButton,
            title: "Attach file",
            children: /* @__PURE__ */ te.jsx(
              "svg",
              {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /* @__PURE__ */ te.jsx("path", { d: "M12 5v14M5 12h14" })
              }
            )
          }
        ),
        /* @__PURE__ */ te.jsx(
          "button",
          {
            type: "button",
            className: Bi.actionButton,
            title: "Settings",
            children: /* @__PURE__ */ te.jsx(
              "svg",
              {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /* @__PURE__ */ te.jsx("path", { d: "M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" })
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ te.jsxs("div", { className: Bi.rightActions, children: [
        /* @__PURE__ */ te.jsx(
          "button",
          {
            type: "button",
            className: Bi.actionButton,
            title: "Voice input",
            children: /* @__PURE__ */ te.jsxs(
              "svg",
              {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: [
                  /* @__PURE__ */ te.jsx("path", { d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" }),
                  /* @__PURE__ */ te.jsx("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }),
                  /* @__PURE__ */ te.jsx("line", { x1: "12", y1: "19", x2: "12", y2: "23" }),
                  /* @__PURE__ */ te.jsx("line", { x1: "8", y1: "23", x2: "16", y2: "23" })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ te.jsx(
          "button",
          {
            type: "submit",
            className: `${Bi.sendButton} ${k.trim() && !m ? Bi.active : ""}`,
            disabled: !k.trim() || m,
            title: "Send message",
            children: /* @__PURE__ */ te.jsx(
              "svg",
              {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /* @__PURE__ */ te.jsx("path", { d: "M12 19V5M5 12l7-7 7 7" })
              }
            )
          }
        )
      ] })
    ] })
  ] }) });
}, QD = "_messageContainer_tnxih_1", GD = "_user_tnxih_6", qD = "_assistant_tnxih_9", KD = "_userMessage_tnxih_23", XD = "_assistantMessage_tnxih_38", JD = "_textContent_tnxih_45", ZD = "_streamingIndicator_tnxih_50", hc = {
  messageContainer: QD,
  user: GD,
  assistant: qD,
  userMessage: KD,
  assistantMessage: XD,
  textContent: JD,
  streamingIndicator: ZD
}, eO = ({
  message: h,
  // These props are available for custom Gen UI components
  onAction: m,
  onUpdateMessage: v
}) => {
  const E = h.role === "user", k = h.role === "assistant", b = () => /* @__PURE__ */ te.jsx("div", { className: hc.textContent, children: h.content || (h.isStreaming ? "" : "No response") });
  return /* @__PURE__ */ te.jsx(
    "div",
    {
      className: `${hc.messageContainer} ${E ? hc.user : hc.assistant}`,
      children: E ? /* @__PURE__ */ te.jsx("div", { className: hc.userMessage, children: /* @__PURE__ */ te.jsx("p", { children: h.content }) }) : k ? /* @__PURE__ */ te.jsxs("div", { className: hc.assistantMessage, children: [
        h.isStreaming && !h.content && /* @__PURE__ */ te.jsxs("div", { className: hc.streamingIndicator, children: [
          /* @__PURE__ */ te.jsx("span", {}),
          /* @__PURE__ */ te.jsx("span", {}),
          /* @__PURE__ */ te.jsx("span", {})
        ] }),
        b()
      ] }) : null
    }
  );
}, tO = "_overlay_271nu_1", nO = "_modal_271nu_21", rO = "_header_271nu_42", aO = "_closeButton_271nu_55", iO = "_selectedInfo_271nu_77", oO = "_inputGroup_271nu_99", lO = "_actions_271nu_130", uO = "_cancelBtn_271nu_136", sO = "_confirmBtn_271nu_137", eu = {
  overlay: tO,
  modal: nO,
  header: rO,
  closeButton: aO,
  selectedInfo: iO,
  inputGroup: oO,
  actions: lO,
  cancelBtn: uO,
  confirmBtn: sO
}, cO = ({
  isOpen: h,
  onClose: m,
  humanFriendlyMessage: v,
  llmFriendlyMessage: E,
  onConfirm: k
}) => {
  const [b, y] = vt.useState(E);
  if (vt.useEffect(() => {
    y(E);
  }, [E]), vt.useEffect(() => {
    const x = (w) => {
      w.key === "Escape" && m();
    };
    if (h)
      return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [h, m]), !h) return null;
  const N = (x) => {
    x.preventDefault(), b.trim() && k(b.trim());
  };
  return /* @__PURE__ */ te.jsx("div", { className: eu.overlay, onClick: m, children: /* @__PURE__ */ te.jsxs("div", { className: eu.modal, onClick: (x) => x.stopPropagation(), children: [
    /* @__PURE__ */ te.jsxs("div", { className: eu.header, children: [
      /* @__PURE__ */ te.jsx("h2", { children: "Edit Your Response" }),
      /* @__PURE__ */ te.jsx("button", { className: eu.closeButton, onClick: m, children: /* @__PURE__ */ te.jsx(
        "svg",
        {
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          children: /* @__PURE__ */ te.jsx("path", { d: "M18 6L6 18M6 6l12 12" })
        }
      ) })
    ] }),
    /* @__PURE__ */ te.jsxs("form", { onSubmit: N, children: [
      /* @__PURE__ */ te.jsxs("div", { className: eu.selectedInfo, children: [
        /* @__PURE__ */ te.jsx("label", { children: "Your Selection" }),
        /* @__PURE__ */ te.jsx("p", { children: v })
      ] }),
      /* @__PURE__ */ te.jsxs("div", { className: eu.inputGroup, children: [
        /* @__PURE__ */ te.jsx("label", { htmlFor: "editMessage", children: "Edit message before sending:" }),
        /* @__PURE__ */ te.jsx(
          "textarea",
          {
            id: "editMessage",
            value: b,
            onChange: (x) => y(x.target.value),
            placeholder: "Edit your message...",
            rows: 4,
            autoFocus: !0
          }
        )
      ] }),
      /* @__PURE__ */ te.jsxs("div", { className: eu.actions, children: [
        /* @__PURE__ */ te.jsx("button", { type: "button", className: eu.cancelBtn, onClick: m, children: "Cancel" }),
        /* @__PURE__ */ te.jsx(
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
}, fO = "_chatContainer_1fe7s_1", dO = "_header_1fe7s_9", pO = "_messagesContainer_1fe7s_23", vO = "_emptyState_1fe7s_42", hy = {
  chatContainer: fO,
  header: dO,
  messagesContainer: pO,
  emptyState: vO
}, hO = "https://xh2o-yths-38lt.n7c.xano.io/api", KE = () => `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, XE = ({
  agentName: h = "Copilot"
}) => {
  const [m, v] = vt.useState([]), [E, k] = vt.useState(!1), [b] = vt.useState(() => `thread-${Date.now()}`), [y, N] = vt.useState(!1), [x, w] = vt.useState(null), z = vt.useRef(null);
  vt.useEffect(() => {
    z.current?.scrollIntoView({ behavior: "smooth" });
  }, [m]);
  const H = vt.useCallback(
    async (de) => {
      if (!de.trim() || E) return;
      const se = {
        id: KE(),
        role: "user",
        content: de.trim(),
        timestamp: /* @__PURE__ */ new Date()
      };
      v((Ee) => [...Ee, se]), k(!0);
      const ve = KE(), Se = {
        id: ve,
        role: "assistant",
        content: "",
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !0
      };
      v((Ee) => [...Ee, Se]);
      try {
        const Ee = await fetch(`${hO}/api/chat`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            prompt: {
              role: "user",
              content: de.trim(),
              id: se.id
            },
            threadId: b,
            responseId: ve
          })
        });
        if (!Ee.ok)
          throw new Error(`API error: ${Ee.status}`);
        const he = Ee.body?.getReader(), Ge = new TextDecoder();
        let Fe = "";
        if (he)
          for (; ; ) {
            const { done: Ie, value: qe } = await he.read();
            if (Ie) break;
            const it = Ge.decode(qe, { stream: !0 });
            Fe += it, v(
              (ge) => ge.map(
                ($) => $.id === ve ? { ...$, content: Fe } : $
              )
            );
          }
        v(
          (Ie) => Ie.map(
            (qe) => qe.id === ve ? { ...qe, isStreaming: !1 } : qe
          )
        );
      } catch (Ee) {
        console.error("Failed to send message:", Ee), v(
          (he) => he.map(
            (Ge) => Ge.id === ve ? {
              ...Ge,
              content: "Sorry, there was an error processing your request.",
              isStreaming: !1
            } : Ge
          )
        );
      } finally {
        k(!1);
      }
    },
    [E, b]
  ), q = vt.useCallback(
    (de) => {
      switch (console.log("Action received:", de), de.type) {
        case "continue_conversation":
          if (de.params) {
            const { humanFriendlyMessage: se, llmFriendlyMessage: ve } = de.params;
            se && ve && (w({
              humanFriendlyMessage: se,
              llmFriendlyMessage: ve
            }), N(!0));
          }
          break;
        case "open_url":
          de.params?.url && window.open(de.params.url, "_blank", "noopener,noreferrer");
          break;
        default:
          console.log("Unhandled action type:", de.type);
      }
    },
    []
  ), G = vt.useCallback((de, se) => {
    v(
      (ve) => ve.map((Se) => Se.id === de ? { ...Se, content: se } : Se)
    );
  }, []), pe = vt.useCallback(
    (de) => {
      N(!1), w(null), H(de);
    },
    [H]
  ), ae = vt.useCallback(() => {
    N(!1), w(null);
  }, []);
  return /* @__PURE__ */ te.jsxs("div", { className: hy.chatContainer, children: [
    /* @__PURE__ */ te.jsx("div", { className: hy.header, children: /* @__PURE__ */ te.jsx("h1", { children: h }) }),
    /* @__PURE__ */ te.jsxs("div", { className: hy.messagesContainer, children: [
      m.length === 0 ? /* @__PURE__ */ te.jsx("div", { className: hy.emptyState, children: /* @__PURE__ */ te.jsxs("p", { children: [
        "Start a conversation with ",
        h
      ] }) }) : m.map((de) => /* @__PURE__ */ te.jsx(
        eO,
        {
          message: de,
          onAction: q,
          onUpdateMessage: (se) => G(de.id, se)
        },
        de.id
      )),
      /* @__PURE__ */ te.jsx("div", { ref: z })
    ] }),
    /* @__PURE__ */ te.jsx(YD, { onSend: H, disabled: E }),
    x && /* @__PURE__ */ te.jsx(
      cO,
      {
        isOpen: y,
        onClose: ae,
        humanFriendlyMessage: x.humanFriendlyMessage,
        llmFriendlyMessage: x.llmFriendlyMessage,
        onConfirm: pe
      }
    )
  ] });
}, mO = "_container_83jbb_1", yO = "_content_83jbb_10", gO = "_title_83jbb_15", SO = "_description_83jbb_22", Zu = {
  container: mO,
  content: yO,
  title: gO,
  description: SO
}, _O = () => /* @__PURE__ */ te.jsx("div", { className: Zu.container, children: /* @__PURE__ */ te.jsxs("div", { className: Zu.content, children: [
  /* @__PURE__ */ te.jsx("h1", { className: Zu.title, children: "Outcomes" }),
  /* @__PURE__ */ te.jsx("p", { className: Zu.description, children: "Manage and track your project outcomes here." })
] }) }), CO = () => /* @__PURE__ */ te.jsx("div", { className: Zu.container, children: /* @__PURE__ */ te.jsxs("div", { className: Zu.content, children: [
  /* @__PURE__ */ te.jsx("h1", { className: Zu.title, children: "Leverage Loops" }),
  /* @__PURE__ */ te.jsx("p", { className: Zu.description, children: "Create and manage leverage loops for your workflow." })
] }) }), EO = "_app_rj7hb_1", RO = "_mainContent_rj7hb_11", JE = {
  app: EO,
  mainContent: RO
}, bO = ({
  agentName: h = "Copilot",
  logoUrl: m
}) => {
  const [v, E] = vt.useState("copilot"), k = () => {
    switch (v) {
      case "copilot":
        return /* @__PURE__ */ te.jsx(XE, { agentName: h, logoUrl: m });
      case "outcomes":
        return /* @__PURE__ */ te.jsx(_O, {});
      case "leverage-loops":
        return /* @__PURE__ */ te.jsx(CO, {});
      default:
        return /* @__PURE__ */ te.jsx(XE, { agentName: h, logoUrl: m });
    }
  };
  return /* @__PURE__ */ te.jsxs("div", { className: JE.app, children: [
    /* @__PURE__ */ te.jsx(
      UD,
      {
        activeSection: v,
        onSectionChange: E
      }
    ),
    /* @__PURE__ */ te.jsx("main", { className: JE.mainContent, children: k() })
  ] });
};
var my = { exports: {} }, Qa = {}, yy = { exports: {} }, BS = {};
var ZE;
function wO() {
  return ZE || (ZE = 1, (function(h) {
    function m(ne, Ne) {
      var _e = ne.length;
      ne.push(Ne);
      e: for (; 0 < _e; ) {
        var j = _e - 1 >>> 1, J = ne[j];
        if (0 < k(J, Ne)) ne[j] = Ne, ne[_e] = J, _e = j;
        else break e;
      }
    }
    function v(ne) {
      return ne.length === 0 ? null : ne[0];
    }
    function E(ne) {
      if (ne.length === 0) return null;
      var Ne = ne[0], _e = ne.pop();
      if (_e !== Ne) {
        ne[0] = _e;
        e: for (var j = 0, J = ne.length, Ze = J >>> 1; j < Ze; ) {
          var ze = 2 * (j + 1) - 1, mt = ne[ze], nt = ze + 1, Me = ne[nt];
          if (0 > k(mt, _e)) nt < J && 0 > k(Me, mt) ? (ne[j] = Me, ne[nt] = _e, j = nt) : (ne[j] = mt, ne[ze] = _e, j = ze);
          else if (nt < J && 0 > k(Me, _e)) ne[j] = Me, ne[nt] = _e, j = nt;
          else break e;
        }
      }
      return Ne;
    }
    function k(ne, Ne) {
      var _e = ne.sortIndex - Ne.sortIndex;
      return _e !== 0 ? _e : ne.id - Ne.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var b = performance;
      h.unstable_now = function() {
        return b.now();
      };
    } else {
      var y = Date, N = y.now();
      h.unstable_now = function() {
        return y.now() - N;
      };
    }
    var x = [], w = [], z = 1, H = null, q = 3, G = !1, pe = !1, ae = !1, de = typeof setTimeout == "function" ? setTimeout : null, se = typeof clearTimeout == "function" ? clearTimeout : null, ve = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Se(ne) {
      for (var Ne = v(w); Ne !== null; ) {
        if (Ne.callback === null) E(w);
        else if (Ne.startTime <= ne) E(w), Ne.sortIndex = Ne.expirationTime, m(x, Ne);
        else break;
        Ne = v(w);
      }
    }
    function Ee(ne) {
      if (ae = !1, Se(ne), !pe) if (v(x) !== null) pe = !0, De(he);
      else {
        var Ne = v(w);
        Ne !== null && Re(Ee, Ne.startTime - ne);
      }
    }
    function he(ne, Ne) {
      pe = !1, ae && (ae = !1, se(Ie), Ie = -1), G = !0;
      var _e = q;
      try {
        for (Se(Ne), H = v(x); H !== null && (!(H.expirationTime > Ne) || ne && !ge()); ) {
          var j = H.callback;
          if (typeof j == "function") {
            H.callback = null, q = H.priorityLevel;
            var J = j(H.expirationTime <= Ne);
            Ne = h.unstable_now(), typeof J == "function" ? H.callback = J : H === v(x) && E(x), Se(Ne);
          } else E(x);
          H = v(x);
        }
        if (H !== null) var Ze = !0;
        else {
          var ze = v(w);
          ze !== null && Re(Ee, ze.startTime - Ne), Ze = !1;
        }
        return Ze;
      } finally {
        H = null, q = _e, G = !1;
      }
    }
    var Ge = !1, Fe = null, Ie = -1, qe = 5, it = -1;
    function ge() {
      return !(h.unstable_now() - it < qe);
    }
    function $() {
      if (Fe !== null) {
        var ne = h.unstable_now();
        it = ne;
        var Ne = !0;
        try {
          Ne = Fe(!0, ne);
        } finally {
          Ne ? X() : (Ge = !1, Fe = null);
        }
      } else Ge = !1;
    }
    var X;
    if (typeof ve == "function") X = function() {
      ve($);
    };
    else if (typeof MessageChannel < "u") {
      var we = new MessageChannel(), Be = we.port2;
      we.port1.onmessage = $, X = function() {
        Be.postMessage(null);
      };
    } else X = function() {
      de($, 0);
    };
    function De(ne) {
      Fe = ne, Ge || (Ge = !0, X());
    }
    function Re(ne, Ne) {
      Ie = de(function() {
        ne(h.unstable_now());
      }, Ne);
    }
    h.unstable_IdlePriority = 5, h.unstable_ImmediatePriority = 1, h.unstable_LowPriority = 4, h.unstable_NormalPriority = 3, h.unstable_Profiling = null, h.unstable_UserBlockingPriority = 2, h.unstable_cancelCallback = function(ne) {
      ne.callback = null;
    }, h.unstable_continueExecution = function() {
      pe || G || (pe = !0, De(he));
    }, h.unstable_forceFrameRate = function(ne) {
      0 > ne || 125 < ne ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : qe = 0 < ne ? Math.floor(1e3 / ne) : 5;
    }, h.unstable_getCurrentPriorityLevel = function() {
      return q;
    }, h.unstable_getFirstCallbackNode = function() {
      return v(x);
    }, h.unstable_next = function(ne) {
      switch (q) {
        case 1:
        case 2:
        case 3:
          var Ne = 3;
          break;
        default:
          Ne = q;
      }
      var _e = q;
      q = Ne;
      try {
        return ne();
      } finally {
        q = _e;
      }
    }, h.unstable_pauseExecution = function() {
    }, h.unstable_requestPaint = function() {
    }, h.unstable_runWithPriority = function(ne, Ne) {
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
      var _e = q;
      q = ne;
      try {
        return Ne();
      } finally {
        q = _e;
      }
    }, h.unstable_scheduleCallback = function(ne, Ne, _e) {
      var j = h.unstable_now();
      switch (typeof _e == "object" && _e !== null ? (_e = _e.delay, _e = typeof _e == "number" && 0 < _e ? j + _e : j) : _e = j, ne) {
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
      return J = _e + J, ne = { id: z++, callback: Ne, priorityLevel: ne, startTime: _e, expirationTime: J, sortIndex: -1 }, _e > j ? (ne.sortIndex = _e, m(w, ne), v(x) === null && ne === v(w) && (ae ? (se(Ie), Ie = -1) : ae = !0, Re(Ee, _e - j))) : (ne.sortIndex = J, m(x, ne), pe || G || (pe = !0, De(he))), ne;
    }, h.unstable_shouldYield = ge, h.unstable_wrapCallback = function(ne) {
      var Ne = q;
      return function() {
        var _e = q;
        q = Ne;
        try {
          return ne.apply(this, arguments);
        } finally {
          q = _e;
        }
      };
    };
  })(BS)), BS;
}
var $S = {};
var e2;
function TO() {
  return e2 || (e2 = 1, (function(h) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var m = !1, v = 5;
      function E(be, Ke) {
        var bt = be.length;
        be.push(Ke), y(be, Ke, bt);
      }
      function k(be) {
        return be.length === 0 ? null : be[0];
      }
      function b(be) {
        if (be.length === 0)
          return null;
        var Ke = be[0], bt = be.pop();
        return bt !== Ke && (be[0] = bt, N(be, bt, 0)), Ke;
      }
      function y(be, Ke, bt) {
        for (var Wt = bt; Wt > 0; ) {
          var on = Wt - 1 >>> 1, yn = be[on];
          if (x(yn, Ke) > 0)
            be[on] = Ke, be[Wt] = yn, Wt = on;
          else
            return;
        }
      }
      function N(be, Ke, bt) {
        for (var Wt = bt, on = be.length, yn = on >>> 1; Wt < yn; ) {
          var fn = (Wt + 1) * 2 - 1, er = be[fn], ln = fn + 1, qt = be[ln];
          if (x(er, Ke) < 0)
            ln < on && x(qt, er) < 0 ? (be[Wt] = qt, be[ln] = Ke, Wt = ln) : (be[Wt] = er, be[fn] = Ke, Wt = fn);
          else if (ln < on && x(qt, Ke) < 0)
            be[Wt] = qt, be[ln] = Ke, Wt = ln;
          else
            return;
        }
      }
      function x(be, Ke) {
        var bt = be.sortIndex - Ke.sortIndex;
        return bt !== 0 ? bt : be.id - Ke.id;
      }
      var w = 1, z = 2, H = 3, q = 4, G = 5;
      function pe(be, Ke) {
      }
      var ae = typeof performance == "object" && typeof performance.now == "function";
      if (ae) {
        var de = performance;
        h.unstable_now = function() {
          return de.now();
        };
      } else {
        var se = Date, ve = se.now();
        h.unstable_now = function() {
          return se.now() - ve;
        };
      }
      var Se = 1073741823, Ee = -1, he = 250, Ge = 5e3, Fe = 1e4, Ie = Se, qe = [], it = [], ge = 1, $ = null, X = H, we = !1, Be = !1, De = !1, Re = typeof setTimeout == "function" ? setTimeout : null, ne = typeof clearTimeout == "function" ? clearTimeout : null, Ne = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function _e(be) {
        for (var Ke = k(it); Ke !== null; ) {
          if (Ke.callback === null)
            b(it);
          else if (Ke.startTime <= be)
            b(it), Ke.sortIndex = Ke.expirationTime, E(qe, Ke);
          else
            return;
          Ke = k(it);
        }
      }
      function j(be) {
        if (De = !1, _e(be), !Be)
          if (k(qe) !== null)
            Be = !0, Un(J);
          else {
            var Ke = k(it);
            Ke !== null && Rr(j, Ke.startTime - be);
          }
      }
      function J(be, Ke) {
        Be = !1, De && (De = !1, va()), we = !0;
        var bt = X;
        try {
          var Wt;
          if (!m) return Ze(be, Ke);
        } finally {
          $ = null, X = bt, we = !1;
        }
      }
      function Ze(be, Ke) {
        var bt = Ke;
        for (_e(bt), $ = k(qe); $ !== null && !($.expirationTime > bt && (!be || vi())); ) {
          var Wt = $.callback;
          if (typeof Wt == "function") {
            $.callback = null, X = $.priorityLevel;
            var on = $.expirationTime <= bt, yn = Wt(on);
            bt = h.unstable_now(), typeof yn == "function" ? $.callback = yn : $ === k(qe) && b(qe), _e(bt);
          } else
            b(qe);
          $ = k(qe);
        }
        if ($ !== null)
          return !0;
        var fn = k(it);
        return fn !== null && Rr(j, fn.startTime - bt), !1;
      }
      function ze(be, Ke) {
        switch (be) {
          case w:
          case z:
          case H:
          case q:
          case G:
            break;
          default:
            be = H;
        }
        var bt = X;
        X = be;
        try {
          return Ke();
        } finally {
          X = bt;
        }
      }
      function mt(be) {
        var Ke;
        switch (X) {
          case w:
          case z:
          case H:
            Ke = H;
            break;
          default:
            Ke = X;
            break;
        }
        var bt = X;
        X = Ke;
        try {
          return be();
        } finally {
          X = bt;
        }
      }
      function nt(be) {
        var Ke = X;
        return function() {
          var bt = X;
          X = Ke;
          try {
            return be.apply(this, arguments);
          } finally {
            X = bt;
          }
        };
      }
      function Me(be, Ke, bt) {
        var Wt = h.unstable_now(), on;
        if (typeof bt == "object" && bt !== null) {
          var yn = bt.delay;
          typeof yn == "number" && yn > 0 ? on = Wt + yn : on = Wt;
        } else
          on = Wt;
        var fn;
        switch (be) {
          case w:
            fn = Ee;
            break;
          case z:
            fn = he;
            break;
          case G:
            fn = Ie;
            break;
          case q:
            fn = Fe;
            break;
          case H:
          default:
            fn = Ge;
            break;
        }
        var er = on + fn, ln = {
          id: ge++,
          callback: Ke,
          priorityLevel: be,
          startTime: on,
          expirationTime: er,
          sortIndex: -1
        };
        return on > Wt ? (ln.sortIndex = on, E(it, ln), k(qe) === null && ln === k(it) && (De ? va() : De = !0, Rr(j, on - Wt))) : (ln.sortIndex = er, E(qe, ln), !Be && !we && (Be = !0, Un(J))), ln;
      }
      function st() {
      }
      function dt() {
        !Be && !we && (Be = !0, Un(J));
      }
      function Gt() {
        return k(qe);
      }
      function An(be) {
        be.callback = null;
      }
      function Dr() {
        return X;
      }
      var wn = !1, or = null, Wn = -1, Yn = v, qr = -1;
      function vi() {
        var be = h.unstable_now() - qr;
        return !(be < Yn);
      }
      function pa() {
      }
      function Zn(be) {
        if (be < 0 || be > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        be > 0 ? Yn = Math.floor(1e3 / be) : Yn = v;
      }
      var Tn = function() {
        if (or !== null) {
          var be = h.unstable_now();
          qr = be;
          var Ke = !0, bt = !0;
          try {
            bt = or(Ke, be);
          } finally {
            bt ? Qn() : (wn = !1, or = null);
          }
        } else
          wn = !1;
      }, Qn;
      if (typeof Ne == "function")
        Qn = function() {
          Ne(Tn);
        };
      else if (typeof MessageChannel < "u") {
        var Er = new MessageChannel(), qa = Er.port2;
        Er.port1.onmessage = Tn, Qn = function() {
          qa.postMessage(null);
        };
      } else
        Qn = function() {
          Re(Tn, 0);
        };
      function Un(be) {
        or = be, wn || (wn = !0, Qn());
      }
      function Rr(be, Ke) {
        Wn = Re(function() {
          be(h.unstable_now());
        }, Ke);
      }
      function va() {
        ne(Wn), Wn = -1;
      }
      var Ka = pa, hi = null;
      h.unstable_IdlePriority = G, h.unstable_ImmediatePriority = w, h.unstable_LowPriority = q, h.unstable_NormalPriority = H, h.unstable_Profiling = hi, h.unstable_UserBlockingPriority = z, h.unstable_cancelCallback = An, h.unstable_continueExecution = dt, h.unstable_forceFrameRate = Zn, h.unstable_getCurrentPriorityLevel = Dr, h.unstable_getFirstCallbackNode = Gt, h.unstable_next = mt, h.unstable_pauseExecution = st, h.unstable_requestPaint = Ka, h.unstable_runWithPriority = ze, h.unstable_scheduleCallback = Me, h.unstable_shouldYield = vi, h.unstable_wrapCallback = nt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })($S)), $S;
}
var t2;
function E2() {
  return t2 || (t2 = 1, process.env.NODE_ENV === "production" ? yy.exports = wO() : yy.exports = TO()), yy.exports;
}
var n2;
function xO() {
  if (n2) return Qa;
  n2 = 1;
  var h = gv(), m = E2();
  function v(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var E = /* @__PURE__ */ new Set(), k = {};
  function b(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (k[n] = r, n = 0; n < r.length; n++) E.add(r[n]);
  }
  var N = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), x = Object.prototype.hasOwnProperty, w = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, z = {}, H = {};
  function q(n) {
    return x.call(H, n) ? !0 : x.call(z, n) ? !1 : w.test(n) ? H[n] = !0 : (z[n] = !0, !1);
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
  function ae(n, r, o, u, c, d, _) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = _;
  }
  var de = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    de[n] = new ae(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    de[r] = new ae(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    de[n] = new ae(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    de[n] = new ae(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    de[n] = new ae(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    de[n] = new ae(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    de[n] = new ae(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    de[n] = new ae(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    de[n] = new ae(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var se = /[\-:]([a-z])/g;
  function ve(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      se,
      ve
    );
    de[r] = new ae(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(se, ve);
    de[r] = new ae(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(se, ve);
    de[r] = new ae(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    de[n] = new ae(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), de.xlinkHref = new ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    de[n] = new ae(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Se(n, r, o, u) {
    var c = de.hasOwnProperty(r) ? de[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (pe(r, o, c, u) && (o = null), u || c === null ? q(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : c.mustUseProperty ? n[c.propertyName] = o === null ? c.type === 3 ? !1 : "" : o : (r = c.attributeName, u = c.attributeNamespace, o === null ? n.removeAttribute(r) : (c = c.type, o = c === 3 || c === 4 && o === !0 ? "" : "" + o, u ? n.setAttributeNS(u, r, o) : n.setAttribute(r, o))));
  }
  var Ee = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, he = /* @__PURE__ */ Symbol.for("react.element"), Ge = /* @__PURE__ */ Symbol.for("react.portal"), Fe = /* @__PURE__ */ Symbol.for("react.fragment"), Ie = /* @__PURE__ */ Symbol.for("react.strict_mode"), qe = /* @__PURE__ */ Symbol.for("react.profiler"), it = /* @__PURE__ */ Symbol.for("react.provider"), ge = /* @__PURE__ */ Symbol.for("react.context"), $ = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), we = /* @__PURE__ */ Symbol.for("react.suspense_list"), Be = /* @__PURE__ */ Symbol.for("react.memo"), De = /* @__PURE__ */ Symbol.for("react.lazy"), Re = /* @__PURE__ */ Symbol.for("react.offscreen"), ne = Symbol.iterator;
  function Ne(n) {
    return n === null || typeof n != "object" ? null : (n = ne && n[ne] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var _e = Object.assign, j;
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
  function ze(n, r) {
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
`), _ = c.length - 1, T = d.length - 1; 1 <= _ && 0 <= T && c[_] !== d[T]; ) T--;
        for (; 1 <= _ && 0 <= T; _--, T--) if (c[_] !== d[T]) {
          if (_ !== 1 || T !== 1)
            do
              if (_--, T--, 0 > T || c[_] !== d[T]) {
                var L = `
` + c[_].replace(" at new ", " at ");
                return n.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", n.displayName)), L;
              }
            while (1 <= _ && 0 <= T);
          break;
        }
      }
    } finally {
      Ze = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? J(n) : "";
  }
  function mt(n) {
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
      case Fe:
        return "Fragment";
      case Ge:
        return "Portal";
      case qe:
        return "Profiler";
      case Ie:
        return "StrictMode";
      case X:
        return "Suspense";
      case we:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case ge:
        return (n.displayName || "Context") + ".Consumer";
      case it:
        return (n._context.displayName || "Context") + ".Provider";
      case $:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Be:
        return r = n.displayName || null, r !== null ? r : nt(n.type) || "Memo";
      case De:
        r = n._payload, n = n._init;
        try {
          return nt(n(r));
        } catch {
        }
    }
    return null;
  }
  function Me(n) {
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
        return r === Ie ? "StrictMode" : "Mode";
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
  function wn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function or(n, r) {
    var o = r.checked;
    return _e({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function Wn(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    o = st(r.value != null ? r.value : o), n._wrapperState = { initialChecked: u, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Yn(n, r) {
    r = r.checked, r != null && Se(n, "checked", r, !1);
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
    (r !== "number" || wn(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var Zn = Array.isArray;
  function Tn(n, r, o, u) {
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
    if (r.dangerouslySetInnerHTML != null) throw Error(v(91));
    return _e({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Er(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null) throw Error(v(92));
        if (Zn(o)) {
          if (1 < o.length) throw Error(v(93));
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
  }, bt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ke).forEach(function(n) {
    bt.forEach(function(r) {
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
  var yn = _e({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function fn(n, r) {
    if (r) {
      if (yn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(v(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(v(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(v(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(v(62));
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
      if (typeof Kt != "function") throw Error(v(280));
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
    if (o && typeof o != "function") throw Error(v(231, r, typeof o));
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
  function mi(n, r, o, u, c, d, _, T, L) {
    var Y = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, Y);
    } catch (ce) {
      this.onError(ce);
    }
  }
  var Xa = !1, yi = null, gi = !1, O = null, ie = { onError: function(n) {
    Xa = !0, yi = n;
  } };
  function ke(n, r, o, u, c, d, _, T, L) {
    Xa = !1, yi = null, mi.apply(ie, arguments);
  }
  function He(n, r, o, u, c, d, _, T, L) {
    if (ke.apply(this, arguments), Xa) {
      if (Xa) {
        var Y = yi;
        Xa = !1, yi = null;
      } else throw Error(v(198));
      gi || (gi = !0, O = Y);
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
    if (_t(n) !== n) throw Error(v(188));
  }
  function Tt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = _t(n), r === null) throw Error(v(188));
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
        throw Error(v(188));
      }
      if (o.return !== u.return) o = c, u = d;
      else {
        for (var _ = !1, T = c.child; T; ) {
          if (T === o) {
            _ = !0, o = c, u = d;
            break;
          }
          if (T === u) {
            _ = !0, u = c, o = d;
            break;
          }
          T = T.sibling;
        }
        if (!_) {
          for (T = d.child; T; ) {
            if (T === o) {
              _ = !0, o = d, u = c;
              break;
            }
            if (T === u) {
              _ = !0, u = d, o = c;
              break;
            }
            T = T.sibling;
          }
          if (!_) throw Error(v(189));
        }
      }
      if (o.alternate !== u) throw Error(v(190));
    }
    if (o.tag !== 3) throw Error(v(188));
    return o.stateNode.current === o ? n : r;
  }
  function xn(n) {
    return n = Tt(n), n !== null ? un(n) : null;
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
  var dn = m.unstable_scheduleCallback, ur = m.unstable_cancelCallback, Ja = m.unstable_shouldYield, Za = m.unstable_requestPaint, Ct = m.unstable_now, Rt = m.unstable_getCurrentPriorityLevel, ei = m.unstable_ImmediatePriority, sl = m.unstable_UserBlockingPriority, cl = m.unstable_NormalPriority, Eo = m.unstable_LowPriority, nu = m.unstable_IdlePriority, Ro = null, Kr = null;
  function es(n) {
    if (Kr && typeof Kr.onCommitFiberRoot == "function") try {
      Kr.onCommitFiberRoot(Ro, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Nr = Math.clz32 ? Math.clz32 : ru, Sc = Math.log, _c = Math.LN2;
  function ru(n) {
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
      var T = _ & ~c;
      T !== 0 ? u = ti(T) : (d &= _, d !== 0 && (u = ti(d)));
    } else _ = o & ~c, _ !== 0 ? u = ti(_) : d !== 0 && (u = ti(d));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && (r & c) === 0 && (c = u & -u, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if ((u & 4) !== 0 && (u |= o & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) o = 31 - Nr(r), c = 1 << o, u |= n[o], r &= ~c;
    return u;
  }
  function au(n, r) {
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
      var _ = 31 - Nr(d), T = 1 << _, L = c[_];
      L === -1 ? ((T & o) === 0 || (T & u) !== 0) && (c[_] = au(T, r)) : L <= r && (n.expiredLanes |= T), d &= ~T;
    }
  }
  function wo(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function iu() {
    var n = bo;
    return bo <<= 1, (bo & 4194240) === 0 && (bo = 64), n;
  }
  function ou(n) {
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
  function lu(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var jt, ts, Si, ht, uu, sr = !1, _i = [], Mr = null, Ci = null, pn = null, Xt = /* @__PURE__ */ new Map(), To = /* @__PURE__ */ new Map(), Gn = [], Ar = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        To.delete(r.pointerId);
    }
  }
  function dl(n, r, o, u, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: u, nativeEvent: d, targetContainers: [c] }, r !== null && (r = et(r), r !== null && ts(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function ns(n, r, o, u, c) {
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
        return d = c.pointerId, To.set(d, dl(To.get(d) || null, n, r, o, u, c)), !0;
    }
    return !1;
  }
  function rs(n) {
    var r = Cl(n.target);
    if (r !== null) {
      var o = _t(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = yt(o), r !== null) {
            n.blockedOn = r, uu(n.priority, function() {
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
      var o = fu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var u = new o.constructor(o.type, o);
        ln = u, o.target.dispatchEvent(u), ln = null;
      } else return r = et(o), r !== null && ts(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function pl(n, r, o) {
    xo(n) && o.delete(r);
  }
  function sd() {
    sr = !1, Mr !== null && xo(Mr) && (Mr = null), Ci !== null && xo(Ci) && (Ci = null), pn !== null && xo(pn) && (pn = null), Xt.forEach(pl), To.forEach(pl);
  }
  function Oa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, sr || (sr = !0, m.unstable_scheduleCallback(m.unstable_NormalPriority, sd)));
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
    for (Mr !== null && Oa(Mr, n), Ci !== null && Oa(Ci, n), pn !== null && Oa(pn, n), Xt.forEach(r), To.forEach(r), o = 0; o < Gn.length; o++) u = Gn[o], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < Gn.length && (o = Gn[0], o.blockedOn === null); ) rs(o), o.blockedOn === null && Gn.shift();
  }
  var Ei = Ee.ReactCurrentBatchConfig, La = !0;
  function su(n, r, o, u) {
    var c = Ft, d = Ei.transition;
    Ei.transition = null;
    try {
      Ft = 1, ko(n, r, o, u);
    } finally {
      Ft = c, Ei.transition = d;
    }
  }
  function cu(n, r, o, u) {
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
      var c = fu(n, r, o, u);
      if (c === null) Nc(n, r, u, vl, o), Da(n, u);
      else if (ns(c, n, r, o, u)) u.stopPropagation();
      else if (Da(n, u), r & 4 && -1 < Ar.indexOf(n)) {
        for (; c !== null; ) {
          var d = et(c);
          if (d !== null && jt(d), d = fu(n, r, o, u), d === null && Nc(n, r, u, vl, o), d === c) break;
          c = d;
        }
        c !== null && u.stopPropagation();
      } else Nc(n, r, u, null, o);
    }
  }
  var vl = null;
  function fu(n, r, o, u) {
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
  function du(n) {
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
          case nu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ai = null, S = null, D = null;
  function W() {
    if (D) return D;
    var n, r = S, o = r.length, u, c = "value" in ai ? ai.value : ai.textContent, d = c.length;
    for (n = 0; n < o && r[n] === c[n]; n++) ;
    var _ = o - n;
    for (u = 1; u <= _ && r[o - u] === c[d - u]; u++) ;
    return D = c.slice(n, 1 < u ? 1 - u : void 0);
  }
  function K(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Ce() {
    return !0;
  }
  function rt() {
    return !1;
  }
  function xe(n) {
    function r(o, u, c, d, _) {
      this._reactName = o, this._targetInst = c, this.type = u, this.nativeEvent = d, this.target = _, this.currentTarget = null;
      for (var T in n) n.hasOwnProperty(T) && (o = n[T], this[T] = o ? o(d) : d[T]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Ce : rt, this.isPropagationStopped = rt, this;
    }
    return _e(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = Ce);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = Ce);
    }, persist: function() {
    }, isPersistent: Ce }), r;
  }
  var lt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Dt = xe(lt), zt = _e({}, lt, { view: 0, detail: 0 }), sn = xe(zt), Jt, wt, Zt, gn = _e({}, zt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: vd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Zt && (Zt && n.type === "mousemove" ? (Jt = n.screenX - Zt.screenX, wt = n.screenY - Zt.screenY) : wt = Jt = 0, Zt = n), Jt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : wt;
  } }), Do = xe(gn), as = _e({}, gn, { dataTransfer: 0 }), Gi = xe(as), is = _e({}, zt, { relatedTarget: 0 }), hl = xe(is), cd = _e({}, lt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Cc = xe(cd), fd = _e({}, lt, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Cv = xe(fd), dd = _e({}, lt, { data: 0 }), pd = xe(dd), Ev = {
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
  }, Ty = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function qi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Ty[n]) ? !!r[n] : !1;
  }
  function vd() {
    return qi;
  }
  var hd = _e({}, zt, { key: function(n) {
    if (n.key) {
      var r = Ev[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = K(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Rv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: vd, charCode: function(n) {
    return n.type === "keypress" ? K(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? K(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), md = xe(hd), yd = _e({}, gn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), bv = xe(yd), Ec = _e({}, zt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: vd }), wv = xe(Ec), Xr = _e({}, lt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ki = xe(Xr), jn = _e({}, gn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Xi = xe(jn), gd = [9, 13, 27, 32], pu = N && "CompositionEvent" in window, os = null;
  N && "documentMode" in document && (os = document.documentMode);
  var ls = N && "TextEvent" in window && !os, Tv = N && (!pu || os && 8 < os && 11 >= os), xv = " ", Rc = !1;
  function kv(n, r) {
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
  function Dv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var vu = !1;
  function Ov(n, r) {
    switch (n) {
      case "compositionend":
        return Dv(r);
      case "keypress":
        return r.which !== 32 ? null : (Rc = !0, xv);
      case "textInput":
        return n = r.data, n === xv && Rc ? null : n;
      default:
        return null;
    }
  }
  function xy(n, r) {
    if (vu) return n === "compositionend" || !pu && kv(n, r) ? (n = W(), D = S = ai = null, vu = !1, n) : null;
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
  var ky = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Lv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!ky[n.type] : r === "textarea";
  }
  function Sd(n, r, o, u) {
    Wi(u), r = ps(r, "onChange"), 0 < r.length && (o = new Dt("onChange", "change", null, o, u), n.push({ event: o, listeners: r }));
  }
  var Ri = null, ml = null;
  function Nv(n) {
    Sl(n, 0);
  }
  function us(n) {
    var r = oi(n);
    if (Dr(r)) return n;
  }
  function Dy(n, r) {
    if (n === "change") return r;
  }
  var Mv = !1;
  if (N) {
    var _d;
    if (N) {
      var Cd = "oninput" in document;
      if (!Cd) {
        var Av = document.createElement("div");
        Av.setAttribute("oninput", "return;"), Cd = typeof Av.oninput == "function";
      }
      _d = Cd;
    } else _d = !1;
    Mv = _d && (!document.documentMode || 9 < document.documentMode);
  }
  function Uv() {
    Ri && (Ri.detachEvent("onpropertychange", jv), ml = Ri = null);
  }
  function jv(n) {
    if (n.propertyName === "value" && us(ml)) {
      var r = [];
      Sd(r, ml, n, qt(n)), ul(Nv, r);
    }
  }
  function Oy(n, r, o) {
    n === "focusin" ? (Uv(), Ri = r, ml = o, Ri.attachEvent("onpropertychange", jv)) : n === "focusout" && Uv();
  }
  function zv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return us(ml);
  }
  function Ly(n, r) {
    if (n === "click") return us(r);
  }
  function Pv(n, r) {
    if (n === "input" || n === "change") return us(r);
  }
  function Ny(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ii = typeof Object.is == "function" ? Object.is : Ny;
  function ss(n, r) {
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
  function Fv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function bc(n, r) {
    var o = Fv(n);
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
      o = Fv(o);
    }
  }
  function Oo(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Oo(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function cs() {
    for (var n = window, r = wn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) n = r.contentWindow;
      else break;
      r = wn(n.document);
    }
    return r;
  }
  function wc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function hu(n) {
    var r = cs(), o = n.focusedElem, u = n.selectionRange;
    if (r !== o && o && o.ownerDocument && Oo(o.ownerDocument.documentElement, o)) {
      if (u !== null && wc(o)) {
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
  var My = N && "documentMode" in document && 11 >= document.documentMode, mu = null, Ed = null, fs = null, Rd = !1;
  function bd(n, r, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Rd || mu == null || mu !== wn(u) || (u = mu, "selectionStart" in u && wc(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), fs && ss(fs, u) || (fs = u, u = ps(Ed, "onSelect"), 0 < u.length && (r = new Dt("onSelect", "select", null, r, o), n.push({ event: r, listeners: u }), r.target = mu)));
  }
  function Tc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var yl = { animationend: Tc("Animation", "AnimationEnd"), animationiteration: Tc("Animation", "AnimationIteration"), animationstart: Tc("Animation", "AnimationStart"), transitionend: Tc("Transition", "TransitionEnd") }, cr = {}, wd = {};
  N && (wd = document.createElement("div").style, "AnimationEvent" in window || (delete yl.animationend.animation, delete yl.animationiteration.animation, delete yl.animationstart.animation), "TransitionEvent" in window || delete yl.transitionend.transition);
  function xc(n) {
    if (cr[n]) return cr[n];
    if (!yl[n]) return n;
    var r = yl[n], o;
    for (o in r) if (r.hasOwnProperty(o) && o in wd) return cr[n] = r[o];
    return n;
  }
  var Vv = xc("animationend"), Hv = xc("animationiteration"), Iv = xc("animationstart"), Bv = xc("transitionend"), Td = /* @__PURE__ */ new Map(), kc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Na(n, r) {
    Td.set(n, r), b(r, [n]);
  }
  for (var xd = 0; xd < kc.length; xd++) {
    var gl = kc[xd], Ay = gl.toLowerCase(), Uy = gl[0].toUpperCase() + gl.slice(1);
    Na(Ay, "on" + Uy);
  }
  Na(Vv, "onAnimationEnd"), Na(Hv, "onAnimationIteration"), Na(Iv, "onAnimationStart"), Na("dblclick", "onDoubleClick"), Na("focusin", "onFocus"), Na("focusout", "onBlur"), Na(Bv, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), b("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), b("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), b("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), b("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), b("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), b("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ds = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), kd = new Set("cancel close invalid load scroll toggle".split(" ").concat(ds));
  function Dc(n, r, o) {
    var u = n.type || "unknown-event";
    n.currentTarget = o, He(u, r, void 0, n), n.currentTarget = null;
  }
  function Sl(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var u = n[o], c = u.event;
      u = u.listeners;
      e: {
        var d = void 0;
        if (r) for (var _ = u.length - 1; 0 <= _; _--) {
          var T = u[_], L = T.instance, Y = T.currentTarget;
          if (T = T.listener, L !== d && c.isPropagationStopped()) break e;
          Dc(c, T, Y), d = L;
        }
        else for (_ = 0; _ < u.length; _++) {
          if (T = u[_], L = T.instance, Y = T.currentTarget, T = T.listener, L !== d && c.isPropagationStopped()) break e;
          Dc(c, T, Y), d = L;
        }
      }
    }
    if (gi) throw n = O, gi = !1, O = null, n;
  }
  function Yt(n, r) {
    var o = r[ms];
    o === void 0 && (o = r[ms] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    o.has(u) || ($v(r, n, 2, !1), o.add(u));
  }
  function Oc(n, r, o) {
    var u = 0;
    r && (u |= 4), $v(o, n, u, r);
  }
  var Lc = "_reactListening" + Math.random().toString(36).slice(2);
  function yu(n) {
    if (!n[Lc]) {
      n[Lc] = !0, E.forEach(function(o) {
        o !== "selectionchange" && (kd.has(o) || Oc(o, !1, n), Oc(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Lc] || (r[Lc] = !0, Oc("selectionchange", !1, r));
    }
  }
  function $v(n, r, o, u) {
    switch (du(r)) {
      case 1:
        var c = su;
        break;
      case 4:
        c = cu;
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
        var T = u.stateNode.containerInfo;
        if (T === c || T.nodeType === 8 && T.parentNode === c) break;
        if (_ === 4) for (_ = u.return; _ !== null; ) {
          var L = _.tag;
          if ((L === 3 || L === 4) && (L = _.stateNode.containerInfo, L === c || L.nodeType === 8 && L.parentNode === c)) return;
          _ = _.return;
        }
        for (; T !== null; ) {
          if (_ = Cl(T), _ === null) return;
          if (L = _.tag, L === 5 || L === 6) {
            u = d = _;
            continue e;
          }
          T = T.parentNode;
        }
      }
      u = u.return;
    }
    ul(function() {
      var Y = d, ce = qt(o), me = [];
      e: {
        var ue = Td.get(n);
        if (ue !== void 0) {
          var Ue = Dt, $e = n;
          switch (n) {
            case "keypress":
              if (K(o) === 0) break e;
            case "keydown":
            case "keyup":
              Ue = md;
              break;
            case "focusin":
              $e = "focus", Ue = hl;
              break;
            case "focusout":
              $e = "blur", Ue = hl;
              break;
            case "beforeblur":
            case "afterblur":
              Ue = hl;
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
              Ue = Do;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Ue = Gi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ue = wv;
              break;
            case Vv:
            case Hv:
            case Iv:
              Ue = Cc;
              break;
            case Bv:
              Ue = Ki;
              break;
            case "scroll":
              Ue = sn;
              break;
            case "wheel":
              Ue = Xi;
              break;
            case "copy":
            case "cut":
            case "paste":
              Ue = Cv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Ue = bv;
          }
          var Qe = (r & 4) !== 0, Nn = !Qe && n === "scroll", P = Qe ? ue !== null ? ue + "Capture" : null : ue;
          Qe = [];
          for (var A = Y, I; A !== null; ) {
            I = A;
            var fe = I.stateNode;
            if (I.tag === 5 && fe !== null && (I = fe, P !== null && (fe = Or(A, P), fe != null && Qe.push(gu(A, fe, I)))), Nn) break;
            A = A.return;
          }
          0 < Qe.length && (ue = new Ue(ue, $e, null, o, ce), me.push({ event: ue, listeners: Qe }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (ue = n === "mouseover" || n === "pointerover", Ue = n === "mouseout" || n === "pointerout", ue && o !== ln && ($e = o.relatedTarget || o.fromElement) && (Cl($e) || $e[Ji])) break e;
          if ((Ue || ue) && (ue = ce.window === ce ? ce : (ue = ce.ownerDocument) ? ue.defaultView || ue.parentWindow : window, Ue ? ($e = o.relatedTarget || o.toElement, Ue = Y, $e = $e ? Cl($e) : null, $e !== null && (Nn = _t($e), $e !== Nn || $e.tag !== 5 && $e.tag !== 6) && ($e = null)) : (Ue = null, $e = Y), Ue !== $e)) {
            if (Qe = Do, fe = "onMouseLeave", P = "onMouseEnter", A = "mouse", (n === "pointerout" || n === "pointerover") && (Qe = bv, fe = "onPointerLeave", P = "onPointerEnter", A = "pointer"), Nn = Ue == null ? ue : oi(Ue), I = $e == null ? ue : oi($e), ue = new Qe(fe, A + "leave", Ue, o, ce), ue.target = Nn, ue.relatedTarget = I, fe = null, Cl(ce) === Y && (Qe = new Qe(P, A + "enter", $e, o, ce), Qe.target = I, Qe.relatedTarget = Nn, fe = Qe), Nn = fe, Ue && $e) t: {
              for (Qe = Ue, P = $e, A = 0, I = Qe; I; I = Lo(I)) A++;
              for (I = 0, fe = P; fe; fe = Lo(fe)) I++;
              for (; 0 < A - I; ) Qe = Lo(Qe), A--;
              for (; 0 < I - A; ) P = Lo(P), I--;
              for (; A--; ) {
                if (Qe === P || P !== null && Qe === P.alternate) break t;
                Qe = Lo(Qe), P = Lo(P);
              }
              Qe = null;
            }
            else Qe = null;
            Ue !== null && Wv(me, ue, Ue, Qe, !1), $e !== null && Nn !== null && Wv(me, Nn, $e, Qe, !0);
          }
        }
        e: {
          if (ue = Y ? oi(Y) : window, Ue = ue.nodeName && ue.nodeName.toLowerCase(), Ue === "select" || Ue === "input" && ue.type === "file") var We = Dy;
          else if (Lv(ue)) if (Mv) We = Pv;
          else {
            We = zv;
            var ot = Oy;
          }
          else (Ue = ue.nodeName) && Ue.toLowerCase() === "input" && (ue.type === "checkbox" || ue.type === "radio") && (We = Ly);
          if (We && (We = We(n, Y))) {
            Sd(me, We, o, ce);
            break e;
          }
          ot && ot(n, ue, Y), n === "focusout" && (ot = ue._wrapperState) && ot.controlled && ue.type === "number" && pa(ue, "number", ue.value);
        }
        switch (ot = Y ? oi(Y) : window, n) {
          case "focusin":
            (Lv(ot) || ot.contentEditable === "true") && (mu = ot, Ed = Y, fs = null);
            break;
          case "focusout":
            fs = Ed = mu = null;
            break;
          case "mousedown":
            Rd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Rd = !1, bd(me, o, ce);
            break;
          case "selectionchange":
            if (My) break;
          case "keydown":
          case "keyup":
            bd(me, o, ce);
        }
        var ut;
        if (pu) e: {
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
        else vu ? kv(n, o) && (pt = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (pt = "onCompositionStart");
        pt && (Tv && o.locale !== "ko" && (vu || pt !== "onCompositionStart" ? pt === "onCompositionEnd" && vu && (ut = W()) : (ai = ce, S = "value" in ai ? ai.value : ai.textContent, vu = !0)), ot = ps(Y, pt), 0 < ot.length && (pt = new pd(pt, n, null, o, ce), me.push({ event: pt, listeners: ot }), ut ? pt.data = ut : (ut = Dv(o), ut !== null && (pt.data = ut)))), (ut = ls ? Ov(n, o) : xy(n, o)) && (Y = ps(Y, "onBeforeInput"), 0 < Y.length && (ce = new pd("onBeforeInput", "beforeinput", null, o, ce), me.push({ event: ce, listeners: Y }), ce.data = ut));
      }
      Sl(me, r);
    });
  }
  function gu(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function ps(n, r) {
    for (var o = r + "Capture", u = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Or(n, o), d != null && u.unshift(gu(n, d, c)), d = Or(n, r), d != null && u.push(gu(n, d, c))), n = n.return;
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
  function Wv(n, r, o, u, c) {
    for (var d = r._reactName, _ = []; o !== null && o !== u; ) {
      var T = o, L = T.alternate, Y = T.stateNode;
      if (L !== null && L === u) break;
      T.tag === 5 && Y !== null && (T = Y, c ? (L = Or(o, d), L != null && _.unshift(gu(o, L, T))) : c || (L = Or(o, d), L != null && _.push(gu(o, L, T)))), o = o.return;
    }
    _.length !== 0 && n.push({ event: r, listeners: _ });
  }
  var Yv = /\r\n?/g, jy = /\u0000|\uFFFD/g;
  function Qv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Yv, `
`).replace(jy, "");
  }
  function Mc(n, r, o) {
    if (r = Qv(r), Qv(n) !== r && o) throw Error(v(425));
  }
  function No() {
  }
  var vs = null, _l = null;
  function Ac(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Uc = typeof setTimeout == "function" ? setTimeout : void 0, Dd = typeof clearTimeout == "function" ? clearTimeout : void 0, Gv = typeof Promise == "function" ? Promise : void 0, Su = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gv < "u" ? function(n) {
    return Gv.resolve(null).then(n).catch(jc);
  } : Uc;
  function jc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function _u(n, r) {
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
  function qv(n) {
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
  var Mo = Math.random().toString(36).slice(2), wi = "__reactFiber$" + Mo, hs = "__reactProps$" + Mo, Ji = "__reactContainer$" + Mo, ms = "__reactEvents$" + Mo, Cu = "__reactListeners$" + Mo, zy = "__reactHandles$" + Mo;
  function Cl(n) {
    var r = n[wi];
    if (r) return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[Ji] || o[wi]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null) for (n = qv(n); n !== null; ) {
          if (o = n[wi]) return o;
          n = qv(n);
        }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function et(n) {
    return n = n[wi] || n[Ji], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function oi(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(v(33));
  }
  function Sn(n) {
    return n[hs] || null;
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
  var wr = {}, Rn = Aa(wr), qn = Aa(!1), Jr = wr;
  function Zr(n, r) {
    var o = n.type.contextTypes;
    if (!o) return wr;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in o) c[d] = r[d];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function zn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Eu() {
    cn(qn), cn(Rn);
  }
  function Kv(n, r, o) {
    if (Rn.current !== wr) throw Error(v(168));
    Je(Rn, r), Je(qn, o);
  }
  function ys(n, r, o) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return o;
    u = u.getChildContext();
    for (var c in u) if (!(c in r)) throw Error(v(108, Me(n) || "Unknown", c));
    return _e({}, o, u);
  }
  function tr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || wr, Jr = Rn.current, Je(Rn, n), Je(qn, qn.current), !0;
  }
  function zc(n, r, o) {
    var u = n.stateNode;
    if (!u) throw Error(v(169));
    o ? (n = ys(n, r, Jr), u.__reactInternalMemoizedMergedChildContext = n, cn(qn), cn(Rn), Je(Rn, n)) : cn(qn), Je(qn, o);
  }
  var Ti = null, Ru = !1, Zi = !1;
  function Pc(n) {
    Ti === null ? Ti = [n] : Ti.push(n);
  }
  function Ao(n) {
    Ru = !0, Pc(n);
  }
  function xi() {
    if (!Zi && Ti !== null) {
      Zi = !0;
      var n = 0, r = Ft;
      try {
        var o = Ti;
        for (Ft = 1; n < o.length; n++) {
          var u = o[n];
          do
            u = u(!0);
          while (u !== null);
        }
        Ti = null, Ru = !1;
      } catch (c) {
        throw Ti !== null && (Ti = Ti.slice(n + 1)), dn(ei, xi), c;
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
  function Xv(n, r, o) {
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
    n.return !== null && (El(n, 1), Xv(n, 1, 0));
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
  function Jv(n, r) {
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
        if (!Jv(n, r)) {
          if (Ld(n)) throw Error(v(418));
          r = bi(o.nextSibling);
          var u = ea;
          r && Jv(n, r) ? Od(u, o) : (n.flags = n.flags & -4097 | 2, hn = !1, ea = n);
        }
      } else {
        if (Ld(n)) throw Error(v(418));
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
      if (Ld(n)) throw gs(), Error(v(418));
      for (; r; ) Od(n, r), r = bi(r.nextSibling);
    }
    if (Kn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(v(317));
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
  function gs() {
    for (var n = ta; n; ) n = bi(n.nextSibling);
  }
  function Po() {
    ta = ea = null, hn = !1;
  }
  function to(n) {
    ja === null ? ja = [n] : ja.push(n);
  }
  var Py = Ee.ReactCurrentBatchConfig;
  function Rl(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1) throw Error(v(309));
          var u = o.stateNode;
        }
        if (!u) throw Error(v(147, n));
        var c = u, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(_) {
          var T = c.refs;
          _ === null ? delete T[d] : T[d] = _;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(v(284));
      if (!o._owner) throw Error(v(290, n));
    }
    return n;
  }
  function Ic(n, r) {
    throw n = Object.prototype.toString.call(r), Error(v(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Zv(n) {
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
    function T(P, A, I, fe) {
      return A === null || A.tag !== 6 ? (A = sp(I, P.mode, fe), A.return = P, A) : (A = c(A, I), A.return = P, A);
    }
    function L(P, A, I, fe) {
      var We = I.type;
      return We === Fe ? ce(P, A, I.props.children, fe, I.key) : A !== null && (A.elementType === We || typeof We == "object" && We !== null && We.$$typeof === De && Zv(We) === A.type) ? (fe = c(A, I.props), fe.ref = Rl(P, A, I), fe.return = P, fe) : (fe = Gs(I.type, I.key, I.props, null, P.mode, fe), fe.ref = Rl(P, A, I), fe.return = P, fe);
    }
    function Y(P, A, I, fe) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== I.containerInfo || A.stateNode.implementation !== I.implementation ? (A = Ef(I, P.mode, fe), A.return = P, A) : (A = c(A, I.children || []), A.return = P, A);
    }
    function ce(P, A, I, fe, We) {
      return A === null || A.tag !== 7 ? (A = lo(I, P.mode, fe, We), A.return = P, A) : (A = c(A, I), A.return = P, A);
    }
    function me(P, A, I) {
      if (typeof A == "string" && A !== "" || typeof A == "number") return A = sp("" + A, P.mode, I), A.return = P, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case he:
            return I = Gs(A.type, A.key, A.props, null, P.mode, I), I.ref = Rl(P, null, A), I.return = P, I;
          case Ge:
            return A = Ef(A, P.mode, I), A.return = P, A;
          case De:
            var fe = A._init;
            return me(P, fe(A._payload), I);
        }
        if (Zn(A) || Ne(A)) return A = lo(A, P.mode, I, null), A.return = P, A;
        Ic(P, A);
      }
      return null;
    }
    function ue(P, A, I, fe) {
      var We = A !== null ? A.key : null;
      if (typeof I == "string" && I !== "" || typeof I == "number") return We !== null ? null : T(P, A, "" + I, fe);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case he:
            return I.key === We ? L(P, A, I, fe) : null;
          case Ge:
            return I.key === We ? Y(P, A, I, fe) : null;
          case De:
            return We = I._init, ue(
              P,
              A,
              We(I._payload),
              fe
            );
        }
        if (Zn(I) || Ne(I)) return We !== null ? null : ce(P, A, I, fe, null);
        Ic(P, I);
      }
      return null;
    }
    function Ue(P, A, I, fe, We) {
      if (typeof fe == "string" && fe !== "" || typeof fe == "number") return P = P.get(I) || null, T(A, P, "" + fe, We);
      if (typeof fe == "object" && fe !== null) {
        switch (fe.$$typeof) {
          case he:
            return P = P.get(fe.key === null ? I : fe.key) || null, L(A, P, fe, We);
          case Ge:
            return P = P.get(fe.key === null ? I : fe.key) || null, Y(A, P, fe, We);
          case De:
            var ot = fe._init;
            return Ue(P, A, I, ot(fe._payload), We);
        }
        if (Zn(fe) || Ne(fe)) return P = P.get(I) || null, ce(A, P, fe, We, null);
        Ic(A, fe);
      }
      return null;
    }
    function $e(P, A, I, fe) {
      for (var We = null, ot = null, ut = A, pt = A = 0, ar = null; ut !== null && pt < I.length; pt++) {
        ut.index > pt ? (ar = ut, ut = null) : ar = ut.sibling;
        var It = ue(P, ut, I[pt], fe);
        if (It === null) {
          ut === null && (ut = ar);
          break;
        }
        n && ut && It.alternate === null && r(P, ut), A = d(It, A, pt), ot === null ? We = It : ot.sibling = It, ot = It, ut = ar;
      }
      if (pt === I.length) return o(P, ut), hn && El(P, pt), We;
      if (ut === null) {
        for (; pt < I.length; pt++) ut = me(P, I[pt], fe), ut !== null && (A = d(ut, A, pt), ot === null ? We = ut : ot.sibling = ut, ot = ut);
        return hn && El(P, pt), We;
      }
      for (ut = u(P, ut); pt < I.length; pt++) ar = Ue(ut, P, pt, I[pt], fe), ar !== null && (n && ar.alternate !== null && ut.delete(ar.key === null ? pt : ar.key), A = d(ar, A, pt), ot === null ? We = ar : ot.sibling = ar, ot = ar);
      return n && ut.forEach(function(qo) {
        return r(P, qo);
      }), hn && El(P, pt), We;
    }
    function Qe(P, A, I, fe) {
      var We = Ne(I);
      if (typeof We != "function") throw Error(v(150));
      if (I = We.call(I), I == null) throw Error(v(151));
      for (var ot = We = null, ut = A, pt = A = 0, ar = null, It = I.next(); ut !== null && !It.done; pt++, It = I.next()) {
        ut.index > pt ? (ar = ut, ut = null) : ar = ut.sibling;
        var qo = ue(P, ut, It.value, fe);
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
        for (; !It.done; pt++, It = I.next()) It = me(P, It.value, fe), It !== null && (A = d(It, A, pt), ot === null ? We = It : ot.sibling = It, ot = It);
        return hn && El(P, pt), We;
      }
      for (ut = u(P, ut); !It.done; pt++, It = I.next()) It = Ue(ut, P, pt, It.value, fe), It !== null && (n && It.alternate !== null && ut.delete(It.key === null ? pt : It.key), A = d(It, A, pt), ot === null ? We = It : ot.sibling = It, ot = It);
      return n && ut.forEach(function(Uh) {
        return r(P, Uh);
      }), hn && El(P, pt), We;
    }
    function Nn(P, A, I, fe) {
      if (typeof I == "object" && I !== null && I.type === Fe && I.key === null && (I = I.props.children), typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case he:
            e: {
              for (var We = I.key, ot = A; ot !== null; ) {
                if (ot.key === We) {
                  if (We = I.type, We === Fe) {
                    if (ot.tag === 7) {
                      o(P, ot.sibling), A = c(ot, I.props.children), A.return = P, P = A;
                      break e;
                    }
                  } else if (ot.elementType === We || typeof We == "object" && We !== null && We.$$typeof === De && Zv(We) === ot.type) {
                    o(P, ot.sibling), A = c(ot, I.props), A.ref = Rl(P, ot, I), A.return = P, P = A;
                    break e;
                  }
                  o(P, ot);
                  break;
                } else r(P, ot);
                ot = ot.sibling;
              }
              I.type === Fe ? (A = lo(I.props.children, P.mode, fe, I.key), A.return = P, P = A) : (fe = Gs(I.type, I.key, I.props, null, P.mode, fe), fe.ref = Rl(P, A, I), fe.return = P, P = fe);
            }
            return _(P);
          case Ge:
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
              A = Ef(I, P.mode, fe), A.return = P, P = A;
            }
            return _(P);
          case De:
            return ot = I._init, Nn(P, A, ot(I._payload), fe);
        }
        if (Zn(I)) return $e(P, A, I, fe);
        if (Ne(I)) return Qe(P, A, I, fe);
        Ic(P, I);
      }
      return typeof I == "string" && I !== "" || typeof I == "number" ? (I = "" + I, A !== null && A.tag === 6 ? (o(P, A.sibling), A = c(A, I), A.return = P, P = A) : (o(P, A), A = sp(I, P.mode, fe), A.return = P, P = A), _(P)) : o(P, A);
    }
    return Nn;
  }
  var kn = bl(!0), Oe = bl(!1), ga = Aa(null), na = null, bu = null, Md = null;
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
      if (na === null) throw Error(v(308));
      bu = n, na.dependencies = { lanes: 0, firstContext: n };
    } else bu = bu.next = n;
    return r;
  }
  var wl = null;
  function zd(n) {
    wl === null ? wl = [n] : wl.push(n);
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
  function eh(n, r) {
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
  function th(n, r) {
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
  function Ss(n, r, o, u) {
    var c = n.updateQueue;
    _a = !1;
    var d = c.firstBaseUpdate, _ = c.lastBaseUpdate, T = c.shared.pending;
    if (T !== null) {
      c.shared.pending = null;
      var L = T, Y = L.next;
      L.next = null, _ === null ? d = Y : _.next = Y, _ = L;
      var ce = n.alternate;
      ce !== null && (ce = ce.updateQueue, T = ce.lastBaseUpdate, T !== _ && (T === null ? ce.firstBaseUpdate = Y : T.next = Y, ce.lastBaseUpdate = L));
    }
    if (d !== null) {
      var me = c.baseState;
      _ = 0, ce = Y = L = null, T = d;
      do {
        var ue = T.lane, Ue = T.eventTime;
        if ((u & ue) === ue) {
          ce !== null && (ce = ce.next = {
            eventTime: Ue,
            lane: 0,
            tag: T.tag,
            payload: T.payload,
            callback: T.callback,
            next: null
          });
          e: {
            var $e = n, Qe = T;
            switch (ue = r, Ue = o, Qe.tag) {
              case 1:
                if ($e = Qe.payload, typeof $e == "function") {
                  me = $e.call(Ue, me, ue);
                  break e;
                }
                me = $e;
                break e;
              case 3:
                $e.flags = $e.flags & -65537 | 128;
              case 0:
                if ($e = Qe.payload, ue = typeof $e == "function" ? $e.call(Ue, me, ue) : $e, ue == null) break e;
                me = _e({}, me, ue);
                break e;
              case 2:
                _a = !0;
            }
          }
          T.callback !== null && T.lane !== 0 && (n.flags |= 64, ue = c.effects, ue === null ? c.effects = [T] : ue.push(T));
        } else Ue = { eventTime: Ue, lane: ue, tag: T.tag, payload: T.payload, callback: T.callback, next: null }, ce === null ? (Y = ce = Ue, L = me) : ce = ce.next = Ue, _ |= ue;
        if (T = T.next, T === null) {
          if (T = c.shared.pending, T === null) break;
          ue = T, T = ue.next, ue.next = null, c.lastBaseUpdate = ue, c.shared.pending = null;
        }
      } while (!0);
      if (ce === null && (L = me), c.baseState = L, c.firstBaseUpdate = Y, c.lastBaseUpdate = ce, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          _ |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Ai |= _, n.lanes = _, n.memoizedState = me;
    }
  }
  function Vd(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], c = u.callback;
      if (c !== null) {
        if (u.callback = null, u = o, typeof c != "function") throw Error(v(191, c));
        c.call(u);
      }
    }
  }
  var _s = {}, Oi = Aa(_s), Cs = Aa(_s), Es = Aa(_s);
  function Tl(n) {
    if (n === _s) throw Error(v(174));
    return n;
  }
  function Hd(n, r) {
    switch (Je(Es, r), Je(Cs, n), Je(Oi, _s), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : va(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = va(r, n);
    }
    cn(Oi), Je(Oi, r);
  }
  function xl() {
    cn(Oi), cn(Cs), cn(Es);
  }
  function nh(n) {
    Tl(Es.current);
    var r = Tl(Oi.current), o = va(r, n.type);
    r !== o && (Je(Cs, n), Je(Oi, o));
  }
  function $c(n) {
    Cs.current === n && (cn(Oi), cn(Cs));
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
  var Rs = [];
  function tt() {
    for (var n = 0; n < Rs.length; n++) Rs[n]._workInProgressVersionPrimary = null;
    Rs.length = 0;
  }
  var xt = Ee.ReactCurrentDispatcher, Vt = Ee.ReactCurrentBatchConfig, en = 0, Ht = null, Fn = null, nr = null, Yc = !1, bs = !1, kl = 0, oe = 0;
  function Pt() {
    throw Error(v(321));
  }
  function ct(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++) if (!ii(n[o], r[o])) return !1;
    return !0;
  }
  function Vo(n, r, o, u, c, d) {
    if (en = d, Ht = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, xt.current = n === null || n.memoizedState === null ? uf : Os, n = o(u, c), bs) {
      d = 0;
      do {
        if (bs = !1, kl = 0, 25 <= d) throw Error(v(301));
        d += 1, nr = Fn = null, r.updateQueue = null, xt.current = sf, n = o(u, c);
      } while (bs);
    }
    if (xt.current = Ml, r = Fn !== null && Fn.next !== null, en = 0, nr = Fn = Ht = null, Yc = !1, r) throw Error(v(300));
    return n;
  }
  function li() {
    var n = kl !== 0;
    return kl = 0, n;
  }
  function Tr() {
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
      if (n === null) throw Error(v(310));
      Fn = n, n = { memoizedState: Fn.memoizedState, baseState: Fn.baseState, baseQueue: Fn.baseQueue, queue: Fn.queue, next: null }, nr === null ? Ht.memoizedState = nr = n : nr = nr.next = n;
    }
    return nr;
  }
  function ro(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ho(n) {
    var r = Dn(), o = r.queue;
    if (o === null) throw Error(v(311));
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
      var T = _ = null, L = null, Y = d;
      do {
        var ce = Y.lane;
        if ((en & ce) === ce) L !== null && (L = L.next = { lane: 0, action: Y.action, hasEagerState: Y.hasEagerState, eagerState: Y.eagerState, next: null }), u = Y.hasEagerState ? Y.eagerState : n(u, Y.action);
        else {
          var me = {
            lane: ce,
            action: Y.action,
            hasEagerState: Y.hasEagerState,
            eagerState: Y.eagerState,
            next: null
          };
          L === null ? (T = L = me, _ = u) : L = L.next = me, Ht.lanes |= ce, Ai |= ce;
        }
        Y = Y.next;
      } while (Y !== null && Y !== d);
      L === null ? _ = u : L.next = T, ii(u, r.memoizedState) || (Vn = !0), r.memoizedState = u, r.baseState = _, r.baseQueue = L, o.lastRenderedState = u;
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
    if (o === null) throw Error(v(311));
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
      if (o.flags |= 2048, Ol(9, Kc.bind(null, o, u, c, r), void 0, null), Xn === null) throw Error(v(349));
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
    var r = Tr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ro, lastRenderedState: n }, r.queue = n, n = n.dispatch = Nl.bind(null, Ht, n), [r.memoizedState, n];
  }
  function Ol(n, r, o, u) {
    return n = { tag: n, create: r, destroy: o, deps: u, next: null }, r = Ht.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ht.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (u = o.next, o.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function tf() {
    return Dn().memoizedState;
  }
  function wu(n, r, o, u) {
    var c = Tr();
    Ht.flags |= n, c.memoizedState = Ol(1 | r, o, void 0, u === void 0 ? null : u);
  }
  function Tu(n, r, o, u) {
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
    return wu(8390656, 8, n, r);
  }
  function ws(n, r) {
    return Tu(2048, 8, n, r);
  }
  function rf(n, r) {
    return Tu(4, 2, n, r);
  }
  function Ts(n, r) {
    return Tu(4, 4, n, r);
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
    return o = o != null ? o.concat([n]) : null, Tu(4, 4, Ll.bind(null, r, n), o);
  }
  function xs() {
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
    return (en & 21) === 0 ? (n.baseState && (n.baseState = !1, Vn = !0), n.memoizedState = o) : (ii(o, r) || (o = iu(), Ht.lanes |= o, Ai |= o, n.baseState = !0), r);
  }
  function ks(n, r) {
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
  function Ds(n, r, o) {
    var u = Ui(n);
    if (o = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null }, ra(n)) rh(r, o);
    else if (o = Pd(n, r, o, u), o !== null) {
      var c = Bn();
      Pr(o, n, u, c), an(o, r, u);
    }
  }
  function Nl(n, r, o) {
    var u = Ui(n), c = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (ra(n)) rh(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var _ = r.lastRenderedState, T = d(_, o);
        if (c.hasEagerState = !0, c.eagerState = T, ii(T, _)) {
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
  function rh(n, r) {
    bs = Yc = !0;
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
    return Tr().memoizedState = [n, r === void 0 ? null : r], n;
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
    var o = Tr();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var u = Tr();
    return r = o !== void 0 ? o(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = Ds.bind(null, Ht, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = Tr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: ef, useDebugValue: xs, useDeferredValue: function(n) {
    return Tr().memoizedState = n;
  }, useTransition: function() {
    var n = ef(!1), r = n[0];
    return n = ks.bind(null, n[1]), Tr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var u = Ht, c = Tr();
    if (hn) {
      if (o === void 0) throw Error(v(407));
      o = o();
    } else {
      if (o = r(), Xn === null) throw Error(v(349));
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
    var n = Tr(), r = Xn.identifierPrefix;
    if (hn) {
      var o = Di, u = ki;
      o = (u & ~(1 << 32 - Nr(u) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = kl++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else o = oe++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Os = {
    readContext: za,
    useCallback: of,
    useContext: za,
    useEffect: ws,
    useImperativeHandle: af,
    useInsertionEffect: rf,
    useLayoutEffect: Ts,
    useMemo: lf,
    useReducer: Ho,
    useRef: tf,
    useState: function() {
      return Ho(ro);
    },
    useDebugValue: xs,
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
  }, sf = { readContext: za, useCallback: of, useContext: za, useEffect: ws, useImperativeHandle: af, useInsertionEffect: rf, useLayoutEffect: Ts, useMemo: lf, useReducer: Dl, useRef: tf, useState: function() {
    return Dl(ro);
  }, useDebugValue: xs, useDeferredValue: function(n) {
    var r = Dn();
    return Fn === null ? r.memoizedState = n : Id(r, Fn.memoizedState, n);
  }, useTransition: function() {
    var n = Dl(ro)[0], r = Dn().memoizedState;
    return [n, r];
  }, useMutableSource: Qc, useSyncExternalStore: Gc, useId: Bd, unstable_isNewReconciler: !1 };
  function ui(n, r) {
    if (n && n.defaultProps) {
      r = _e({}, r), n = n.defaultProps;
      for (var o in n) r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  function $d(n, r, o, u) {
    r = n.memoizedState, o = o(u, r), o = o == null ? r : _e({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
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
  function ah(n, r, o, u, c, d, _) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, d, _) : r.prototype && r.prototype.isPureReactComponent ? !ss(o, u) || !ss(c, d) : !0;
  }
  function ff(n, r, o) {
    var u = !1, c = wr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = za(d) : (c = zn(r) ? Jr : Rn.current, u = r.contextTypes, d = (u = u != null) ? Zr(n, c) : wr), r = new r(o, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = cf, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function ih(n, r, o, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, u), r.state !== n && cf.enqueueReplaceState(r, r.state, null);
  }
  function Ls(n, r, o, u) {
    var c = n.stateNode;
    c.props = o, c.state = n.memoizedState, c.refs = {}, Fd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = za(d) : (d = zn(r) ? Jr : Rn.current, c.context = Zr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && ($d(n, r, d, o), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && cf.enqueueReplaceState(c, c.state, null), Ss(n, o, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
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
  function oh(n, r, o) {
    o = no(-1, o), o.tag = 3, o.payload = { element: null };
    var u = r.value;
    return o.callback = function() {
      Nu || (Nu = !0, zl = u), Yd(n, r);
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
    c.has(o) || (c.add(o), n = Wy.bind(null, n, r, o), r.then(n, n));
  }
  function lh(n) {
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
  var Ns = Ee.ReactCurrentOwner, Vn = !1;
  function fr(n, r, o, u) {
    r.child = n === null ? Oe(r, null, o, u) : kn(r, n.child, o, u);
  }
  function aa(n, r, o, u, c) {
    o = o.render;
    var d = r.ref;
    return _n(r, c), u = Vo(n, r, o, u, d, c), o = li(), n !== null && !Vn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Fa(n, r, c)) : (hn && o && Fc(r), r.flags |= 1, fr(n, r, u, c), r.child);
  }
  function Ul(n, r, o, u, c) {
    if (n === null) {
      var d = o.type;
      return typeof d == "function" && !up(d) && d.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = d, Et(n, r, d, u, c)) : (n = Gs(o.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, (n.lanes & c) === 0) {
      var _ = d.memoizedProps;
      if (o = o.compare, o = o !== null ? o : ss, o(_, u) && n.ref === r.ref) return Fa(n, r, c);
    }
    return r.flags |= 1, n = Yo(d, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Et(n, r, o, u, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ss(d, u) && n.ref === r.ref) if (Vn = !1, r.pendingProps = u = d, (n.lanes & c) !== 0) (n.flags & 131072) !== 0 && (Vn = !0);
      else return r.lanes = n.lanes, Fa(n, r, c);
    }
    return uh(n, r, o, u, c);
  }
  function Ms(n, r, o) {
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
  function uh(n, r, o, u, c) {
    var d = zn(o) ? Jr : Rn.current;
    return d = Zr(r, d), _n(r, c), o = Vo(n, r, o, u, d, c), u = li(), n !== null && !Vn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Fa(n, r, c)) : (hn && u && Fc(r), r.flags |= 1, fr(n, r, o, c), r.child);
  }
  function sh(n, r, o, u, c) {
    if (zn(o)) {
      var d = !0;
      tr(r);
    } else d = !1;
    if (_n(r, c), r.stateNode === null) Pa(n, r), ff(r, o, u), Ls(r, o, u, c), u = !0;
    else if (n === null) {
      var _ = r.stateNode, T = r.memoizedProps;
      _.props = T;
      var L = _.context, Y = o.contextType;
      typeof Y == "object" && Y !== null ? Y = za(Y) : (Y = zn(o) ? Jr : Rn.current, Y = Zr(r, Y));
      var ce = o.getDerivedStateFromProps, me = typeof ce == "function" || typeof _.getSnapshotBeforeUpdate == "function";
      me || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (T !== u || L !== Y) && ih(r, _, u, Y), _a = !1;
      var ue = r.memoizedState;
      _.state = ue, Ss(r, u, _, c), L = r.memoizedState, T !== u || ue !== L || qn.current || _a ? (typeof ce == "function" && ($d(r, o, ce, u), L = r.memoizedState), (T = _a || ah(r, o, T, u, ue, L, Y)) ? (me || typeof _.UNSAFE_componentWillMount != "function" && typeof _.componentWillMount != "function" || (typeof _.componentWillMount == "function" && _.componentWillMount(), typeof _.UNSAFE_componentWillMount == "function" && _.UNSAFE_componentWillMount()), typeof _.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = L), _.props = u, _.state = L, _.context = Y, u = T) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      _ = r.stateNode, eh(n, r), T = r.memoizedProps, Y = r.type === r.elementType ? T : ui(r.type, T), _.props = Y, me = r.pendingProps, ue = _.context, L = o.contextType, typeof L == "object" && L !== null ? L = za(L) : (L = zn(o) ? Jr : Rn.current, L = Zr(r, L));
      var Ue = o.getDerivedStateFromProps;
      (ce = typeof Ue == "function" || typeof _.getSnapshotBeforeUpdate == "function") || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (T !== me || ue !== L) && ih(r, _, u, L), _a = !1, ue = r.memoizedState, _.state = ue, Ss(r, u, _, c);
      var $e = r.memoizedState;
      T !== me || ue !== $e || qn.current || _a ? (typeof Ue == "function" && ($d(r, o, Ue, u), $e = r.memoizedState), (Y = _a || ah(r, o, Y, u, ue, $e, L) || !1) ? (ce || typeof _.UNSAFE_componentWillUpdate != "function" && typeof _.componentWillUpdate != "function" || (typeof _.componentWillUpdate == "function" && _.componentWillUpdate(u, $e, L), typeof _.UNSAFE_componentWillUpdate == "function" && _.UNSAFE_componentWillUpdate(u, $e, L)), typeof _.componentDidUpdate == "function" && (r.flags |= 4), typeof _.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof _.componentDidUpdate != "function" || T === n.memoizedProps && ue === n.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && ue === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = $e), _.props = u, _.state = $e, _.context = L, u = Y) : (typeof _.componentDidUpdate != "function" || T === n.memoizedProps && ue === n.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && ue === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return As(n, r, o, u, d, c);
  }
  function As(n, r, o, u, c, d) {
    qd(n, r);
    var _ = (r.flags & 128) !== 0;
    if (!u && !_) return c && zc(r, o, !1), Fa(n, r, d);
    u = r.stateNode, Ns.current = r;
    var T = _ && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && _ ? (r.child = kn(r, n.child, null, d), r.child = kn(r, null, T, d)) : fr(n, r, T, d), r.memoizedState = u.state, c && zc(r, o, !0), r.child;
  }
  function xu(n) {
    var r = n.stateNode;
    r.pendingContext ? Kv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Kv(n, r.context, !1), Hd(n, r.containerInfo);
  }
  function ch(n, r, o, u, c) {
    return Po(), to(c), r.flags |= 256, fr(n, r, o, u), r.child;
  }
  var pf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Kd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function vf(n, r, o) {
    var u = r.pendingProps, c = Cn.current, d = !1, _ = (r.flags & 128) !== 0, T;
    if ((T = _) || (T = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), T ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Je(Cn, c & 1), n === null)
      return Nd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (_ = u.children, n = u.fallback, d ? (u = r.mode, d = r.child, _ = { mode: "hidden", children: _ }, (u & 1) === 0 && d !== null ? (d.childLanes = 0, d.pendingProps = _) : d = Qo(_, u, 0, null), n = lo(n, u, o, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Kd(o), r.memoizedState = pf, n) : Xd(r, _));
    if (c = n.memoizedState, c !== null && (T = c.dehydrated, T !== null)) return fh(n, r, _, u, T, c, o);
    if (d) {
      d = u.fallback, _ = r.mode, c = n.child, T = c.sibling;
      var L = { mode: "hidden", children: u.children };
      return (_ & 1) === 0 && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = L, r.deletions = null) : (u = Yo(c, L), u.subtreeFlags = c.subtreeFlags & 14680064), T !== null ? d = Yo(T, d) : (d = lo(d, _, o, null), d.flags |= 2), d.return = r, u.return = r, u.sibling = d, r.child = u, u = d, d = r.child, _ = n.child.memoizedState, _ = _ === null ? Kd(o) : { baseLanes: _.baseLanes | o, cachePool: null, transitions: _.transitions }, d.memoizedState = _, d.childLanes = n.childLanes & ~o, r.memoizedState = pf, u;
    }
    return d = n.child, n = d.sibling, u = Yo(d, { mode: "visible", children: u.children }), (r.mode & 1) === 0 && (u.lanes = o), u.return = r, u.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function Xd(n, r) {
    return r = Qo({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Us(n, r, o, u) {
    return u !== null && to(u), kn(r, n.child, null, o), n = Xd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function fh(n, r, o, u, c, d, _) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, u = Wd(Error(v(422))), Us(n, r, _, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = u.fallback, c = r.mode, u = Qo({ mode: "visible", children: u.children }, c, 0, null), d = lo(d, c, _, null), d.flags |= 2, u.return = r, d.return = r, u.sibling = d, r.child = u, (r.mode & 1) !== 0 && kn(r, n.child, null, _), r.child.memoizedState = Kd(_), r.memoizedState = pf, d);
    if ((r.mode & 1) === 0) return Us(n, r, _, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u) var T = u.dgst;
      return u = T, d = Error(v(419)), u = Wd(d, u, void 0), Us(n, r, _, u);
    }
    if (T = (_ & n.childLanes) !== 0, Vn || T) {
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
      return lp(), u = Wd(Error(v(421))), Us(n, r, _, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Yy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ta = bi(c.nextSibling), ea = r, hn = !0, ja = null, n !== null && (Pn[Ua++] = ki, Pn[Ua++] = Di, Pn[Ua++] = ya, ki = n.id, Di = n.overflow, ya = r), r = Xd(r, u.children), r.flags |= 4096, r);
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
    if (n !== null && r.child !== n.child) throw Error(v(153));
    if (r.child !== null) {
      for (n = r.child, o = Yo(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; ) n = n.sibling, o = o.sibling = Yo(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function js(n, r, o) {
    switch (r.tag) {
      case 3:
        xu(r), Po();
        break;
      case 5:
        nh(r);
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
        return r.lanes = 0, Ms(n, r, o);
    }
    return Fa(n, r, o);
  }
  var Va, Hn, dh, ph;
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
  }, dh = function(n, r, o, u) {
    var c = n.memoizedProps;
    if (c !== u) {
      n = r.stateNode, Tl(Oi.current);
      var d = null;
      switch (o) {
        case "input":
          c = or(n, c), u = or(n, u), d = [];
          break;
        case "select":
          c = _e({}, c, { value: void 0 }), u = _e({}, u, { value: void 0 }), d = [];
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
        var T = c[Y];
        for (_ in T) T.hasOwnProperty(_) && (o || (o = {}), o[_] = "");
      } else Y !== "dangerouslySetInnerHTML" && Y !== "children" && Y !== "suppressContentEditableWarning" && Y !== "suppressHydrationWarning" && Y !== "autoFocus" && (k.hasOwnProperty(Y) ? d || (d = []) : (d = d || []).push(Y, null));
      for (Y in u) {
        var L = u[Y];
        if (T = c?.[Y], u.hasOwnProperty(Y) && L !== T && (L != null || T != null)) if (Y === "style") if (T) {
          for (_ in T) !T.hasOwnProperty(_) || L && L.hasOwnProperty(_) || (o || (o = {}), o[_] = "");
          for (_ in L) L.hasOwnProperty(_) && T[_] !== L[_] && (o || (o = {}), o[_] = L[_]);
        } else o || (d || (d = []), d.push(
          Y,
          o
        )), o = L;
        else Y === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, T = T ? T.__html : void 0, L != null && T !== L && (d = d || []).push(Y, L)) : Y === "children" ? typeof L != "string" && typeof L != "number" || (d = d || []).push(Y, "" + L) : Y !== "suppressContentEditableWarning" && Y !== "suppressHydrationWarning" && (k.hasOwnProperty(Y) ? (L != null && Y === "onScroll" && Yt("scroll", n), d || T === L || (d = [])) : (d = d || []).push(Y, L));
      }
      o && (d = d || []).push("style", o);
      var Y = d;
      (r.updateQueue = Y) && (r.flags |= 4);
    }
  }, ph = function(n, r, o, u) {
    o !== u && (r.flags |= 4);
  };
  function zs(n, r) {
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
  function vh(n, r, o) {
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
        return zn(r.type) && Eu(), rr(r), null;
      case 3:
        return u = r.stateNode, xl(), cn(qn), cn(Rn), tt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Hc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, ja !== null && (Pl(ja), ja = null))), Hn(n, r), rr(r), null;
      case 5:
        $c(r);
        var c = Tl(Es.current);
        if (o = r.type, n !== null && r.stateNode != null) dh(n, r, o, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(v(166));
            return rr(r), null;
          }
          if (n = Tl(Oi.current), Hc(r)) {
            u = r.stateNode, o = r.type;
            var d = r.memoizedProps;
            switch (u[wi] = r, u[hs] = d, n = (r.mode & 1) !== 0, o) {
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
                for (c = 0; c < ds.length; c++) Yt(ds[c], u);
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
              var T = d[_];
              _ === "children" ? typeof T == "string" ? u.textContent !== T && (d.suppressHydrationWarning !== !0 && Mc(u.textContent, T, n), c = ["children", T]) : typeof T == "number" && u.textContent !== "" + T && (d.suppressHydrationWarning !== !0 && Mc(
                u.textContent,
                T,
                n
              ), c = ["children", "" + T]) : k.hasOwnProperty(_) && T != null && _ === "onScroll" && Yt("scroll", u);
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
            _ = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Rr(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = _.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = _.createElement(o, { is: u.is }) : (n = _.createElement(o), o === "select" && (_ = n, u.multiple ? _.multiple = !0 : u.size && (_.size = u.size))) : n = _.createElementNS(n, o), n[wi] = r, n[hs] = u, Va(n, r, !1, !1), r.stateNode = n;
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
                  for (c = 0; c < ds.length; c++) Yt(ds[c], n);
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
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = _e({}, u, { value: void 0 }), Yt("invalid", n);
                  break;
                case "textarea":
                  Er(n, u), c = Qn(n, u), Yt("invalid", n);
                  break;
                default:
                  c = u;
              }
              fn(o, c), T = c;
              for (d in T) if (T.hasOwnProperty(d)) {
                var L = T[d];
                d === "style" ? on(n, L) : d === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, L != null && hi(n, L)) : d === "children" ? typeof L == "string" ? (o !== "textarea" || L !== "") && be(n, L) : typeof L == "number" && be(n, "" + L) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (k.hasOwnProperty(d) ? L != null && d === "onScroll" && Yt("scroll", n) : L != null && Se(n, d, L, _));
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
                  n.multiple = !!u.multiple, d = u.value, d != null ? Tn(n, !!u.multiple, d, !1) : u.defaultValue != null && Tn(
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
        if (n && r.stateNode != null) ph(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(v(166));
          if (o = Tl(Es.current), Tl(Oi.current), Hc(r)) {
            if (u = r.stateNode, o = r.memoizedProps, u[wi] = r, (d = u.nodeValue !== o) && (n = ea, n !== null)) switch (n.tag) {
              case 3:
                Mc(u.nodeValue, o, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Mc(u.nodeValue, o, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), u[wi] = r, r.stateNode = u;
        }
        return rr(r), null;
      case 13:
        if (cn(Cn), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (hn && ta !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) gs(), Po(), r.flags |= 98560, d = !1;
          else if (d = Hc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(v(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(v(317));
              d[wi] = r;
            } else Po(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            rr(r), d = !1;
          } else ja !== null && (Pl(ja), ja = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = o, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (Cn.current & 1) !== 0 ? Ln === 0 && (Ln = 3) : lp())), r.updateQueue !== null && (r.flags |= 4), rr(r), null);
      case 4:
        return xl(), Hn(n, r), n === null && yu(r.stateNode.containerInfo), rr(r), null;
      case 10:
        return Ud(r.type._context), rr(r), null;
      case 17:
        return zn(r.type) && Eu(), rr(r), null;
      case 19:
        if (cn(Cn), d = r.memoizedState, d === null) return rr(r), null;
        if (u = (r.flags & 128) !== 0, _ = d.rendering, _ === null) if (u) zs(d, !1);
        else {
          if (Ln !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (_ = Wc(n), _ !== null) {
              for (r.flags |= 128, zs(d, !1), u = _.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = o, o = r.child; o !== null; ) d = o, n = u, d.flags &= 14680066, _ = d.alternate, _ === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = _.childLanes, d.lanes = _.lanes, d.child = _.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = _.memoizedProps, d.memoizedState = _.memoizedState, d.updateQueue = _.updateQueue, d.type = _.type, n = _.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
              return Je(Cn, Cn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Ct() > Lu && (r.flags |= 128, u = !0, zs(d, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = Wc(_), n !== null) {
            if (r.flags |= 128, u = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), zs(d, !0), d.tail === null && d.tailMode === "hidden" && !_.alternate && !hn) return rr(r), null;
          } else 2 * Ct() - d.renderingStartTime > Lu && o !== 1073741824 && (r.flags |= 128, u = !0, zs(d, !1), r.lanes = 4194304);
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
    throw Error(v(156, r.tag));
  }
  function hf(n, r) {
    switch (Vc(r), r.tag) {
      case 1:
        return zn(r.type) && Eu(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return xl(), cn(qn), cn(Rn), tt(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return $c(r), null;
      case 13:
        if (cn(Cn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(v(340));
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
  var Ps = !1, xr = !1, Fy = typeof WeakSet == "function" ? WeakSet : Set, Ve = null;
  function ku(n, r) {
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
  var hh = !1;
  function mh(n, r) {
    if (vs = La, n = cs(), wc(n)) {
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
          var _ = 0, T = -1, L = -1, Y = 0, ce = 0, me = n, ue = null;
          t: for (; ; ) {
            for (var Ue; me !== o || c !== 0 && me.nodeType !== 3 || (T = _ + c), me !== d || u !== 0 && me.nodeType !== 3 || (L = _ + u), me.nodeType === 3 && (_ += me.nodeValue.length), (Ue = me.firstChild) !== null; )
              ue = me, me = Ue;
            for (; ; ) {
              if (me === n) break t;
              if (ue === o && ++Y === c && (T = _), ue === d && ++ce === u && (L = _), (Ue = me.nextSibling) !== null) break;
              me = ue, ue = me.parentNode;
            }
            me = Ue;
          }
          o = T === -1 || L === -1 ? null : { start: T, end: L };
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
              var Qe = $e.memoizedProps, Nn = $e.memoizedState, P = r.stateNode, A = P.getSnapshotBeforeUpdate(r.elementType === r.type ? Qe : ui(r.type, Qe), Nn);
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
            throw Error(v(163));
        }
      } catch (fe) {
        mn(r, r.return, fe);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Ve = n;
        break;
      }
      Ve = r.return;
    }
    return $e = hh, hh = !1, $e;
  }
  function Fs(n, r, o) {
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
  function Vs(n, r) {
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
    r !== null && (n.alternate = null, yf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[wi], delete r[hs], delete r[ms], delete r[Cu], delete r[zy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Hs(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function ao(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Hs(n.return)) return null;
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
    for (o = o.child; o !== null; ) yh(n, r, o), o = o.sibling;
  }
  function yh(n, r, o) {
    if (Kr && typeof Kr.onCommitFiberUnmount == "function") try {
      Kr.onCommitFiberUnmount(Ro, o);
    } catch {
    }
    switch (o.tag) {
      case 5:
        xr || ku(o, r);
      case 6:
        var u = On, c = jr;
        On = null, zr(n, r, o), On = u, jr = c, On !== null && (jr ? (n = On, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : On.removeChild(o.stateNode));
        break;
      case 18:
        On !== null && (jr ? (n = On, o = o.stateNode, n.nodeType === 8 ? _u(n.parentNode, o) : n.nodeType === 1 && _u(n, o), ri(n)) : _u(On, o.stateNode));
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
        if (!xr && (ku(o, r), u = o.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = o.memoizedProps, u.state = o.memoizedState, u.componentWillUnmount();
        } catch (T) {
          mn(o, r, T);
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
  function gh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new Fy()), r.forEach(function(u) {
        var c = xh.bind(null, n, u);
        o.has(u) || (o.add(u), u.then(c, c));
      });
    }
  }
  function si(n, r) {
    var o = r.deletions;
    if (o !== null) for (var u = 0; u < o.length; u++) {
      var c = o[u];
      try {
        var d = n, _ = r, T = _;
        e: for (; T !== null; ) {
          switch (T.tag) {
            case 5:
              On = T.stateNode, jr = !1;
              break e;
            case 3:
              On = T.stateNode.containerInfo, jr = !0;
              break e;
            case 4:
              On = T.stateNode.containerInfo, jr = !0;
              break e;
          }
          T = T.return;
        }
        if (On === null) throw Error(v(160));
        yh(d, _, c), On = null, jr = !1;
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
            Fs(3, n, n.return), Vs(3, n);
          } catch (Qe) {
            mn(n, n.return, Qe);
          }
          try {
            Fs(5, n, n.return);
          } catch (Qe) {
            mn(n, n.return, Qe);
          }
        }
        break;
      case 1:
        si(r, n), ia(n), u & 512 && o !== null && ku(o, o.return);
        break;
      case 5:
        if (si(r, n), ia(n), u & 512 && o !== null && ku(o, o.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            be(c, "");
          } catch (Qe) {
            mn(n, n.return, Qe);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, _ = o !== null ? o.memoizedProps : d, T = n.type, L = n.updateQueue;
          if (n.updateQueue = null, L !== null) try {
            T === "input" && d.type === "radio" && d.name != null && Yn(c, d), er(T, _);
            var Y = er(T, d);
            for (_ = 0; _ < L.length; _ += 2) {
              var ce = L[_], me = L[_ + 1];
              ce === "style" ? on(c, me) : ce === "dangerouslySetInnerHTML" ? hi(c, me) : ce === "children" ? be(c, me) : Se(c, ce, me, Y);
            }
            switch (T) {
              case "input":
                qr(c, d);
                break;
              case "textarea":
                qa(c, d);
                break;
              case "select":
                var ue = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var Ue = d.value;
                Ue != null ? Tn(c, !!d.multiple, Ue, !1) : ue !== !!d.multiple && (d.defaultValue != null ? Tn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Tn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[hs] = d;
          } catch (Qe) {
            mn(n, n.return, Qe);
          }
        }
        break;
      case 6:
        if (si(r, n), ia(n), u & 4) {
          if (n.stateNode === null) throw Error(v(162));
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
        si(r, n), ia(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (rp = Ct())), u & 4 && gh(n);
        break;
      case 22:
        if (ce = o !== null && o.memoizedState !== null, n.mode & 1 ? (xr = (Y = xr) || ce, si(r, n), xr = Y) : si(r, n), ia(n), u & 8192) {
          if (Y = n.memoizedState !== null, (n.stateNode.isHidden = Y) && !ce && (n.mode & 1) !== 0) for (Ve = n, ce = n.child; ce !== null; ) {
            for (me = Ve = ce; Ve !== null; ) {
              switch (ue = Ve, Ue = ue.child, ue.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Fs(4, ue, ue.return);
                  break;
                case 1:
                  ku(ue, ue.return);
                  var $e = ue.stateNode;
                  if (typeof $e.componentWillUnmount == "function") {
                    u = ue, o = ue.return;
                    try {
                      r = u, $e.props = r.memoizedProps, $e.state = r.memoizedState, $e.componentWillUnmount();
                    } catch (Qe) {
                      mn(u, o, Qe);
                    }
                  }
                  break;
                case 5:
                  ku(ue, ue.return);
                  break;
                case 22:
                  if (ue.memoizedState !== null) {
                    Is(me);
                    continue;
                  }
              }
              Ue !== null ? (Ue.return = ue, Ve = Ue) : Is(me);
            }
            ce = ce.sibling;
          }
          e: for (ce = null, me = n; ; ) {
            if (me.tag === 5) {
              if (ce === null) {
                ce = me;
                try {
                  c = me.stateNode, Y ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (T = me.stateNode, L = me.memoizedProps.style, _ = L != null && L.hasOwnProperty("display") ? L.display : null, T.style.display = Wt("display", _));
                } catch (Qe) {
                  mn(n, n.return, Qe);
                }
              }
            } else if (me.tag === 6) {
              if (ce === null) try {
                me.stateNode.nodeValue = Y ? "" : me.memoizedProps;
              } catch (Qe) {
                mn(n, n.return, Qe);
              }
            } else if ((me.tag !== 22 && me.tag !== 23 || me.memoizedState === null || me === n) && me.child !== null) {
              me.child.return = me, me = me.child;
              continue;
            }
            if (me === n) break e;
            for (; me.sibling === null; ) {
              if (me.return === null || me.return === n) break e;
              ce === me && (ce = null), me = me.return;
            }
            ce === me && (ce = null), me.sibling.return = me.return, me = me.sibling;
          }
        }
        break;
      case 19:
        si(r, n), ia(n), u & 4 && gh(n);
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
            if (Hs(o)) {
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
            u.flags & 32 && (be(c, ""), u.flags &= -33);
            var d = ao(n);
            Mi(n, d, c);
            break;
          case 3:
          case 4:
            var _ = u.stateNode.containerInfo, T = ao(n);
            Ni(n, T, _);
            break;
          default:
            throw Error(v(161));
        }
      } catch (L) {
        mn(n, n.return, L);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Vy(n, r, o) {
    Ve = n, tp(n);
  }
  function tp(n, r, o) {
    for (var u = (n.mode & 1) !== 0; Ve !== null; ) {
      var c = Ve, d = c.child;
      if (c.tag === 22 && u) {
        var _ = c.memoizedState !== null || Ps;
        if (!_) {
          var T = c.alternate, L = T !== null && T.memoizedState !== null || xr;
          T = Ps;
          var Y = xr;
          if (Ps = _, (xr = L) && !Y) for (Ve = c; Ve !== null; ) _ = Ve, L = _.child, _.tag === 22 && _.memoizedState !== null ? np(c) : L !== null ? (L.return = _, Ve = L) : np(c);
          for (; d !== null; ) Ve = d, tp(d), d = d.sibling;
          Ve = c, Ps = T, xr = Y;
        }
        Sh(n);
      } else (c.subtreeFlags & 8772) !== 0 && d !== null ? (d.return = c, Ve = d) : Sh(n);
    }
  }
  function Sh(n) {
    for (; Ve !== null; ) {
      var r = Ve;
      if ((r.flags & 8772) !== 0) {
        var o = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              xr || Vs(5, r);
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
              var T = r.stateNode;
              if (o === null && r.flags & 4) {
                o = T;
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
                  var ce = Y.memoizedState;
                  if (ce !== null) {
                    var me = ce.dehydrated;
                    me !== null && ri(me);
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
          xr || r.flags & 512 && Zd(r);
        } catch (ue) {
          mn(r, r.return, ue);
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
  function Is(n) {
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
              Vs(4, r);
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
      var T = r.sibling;
      if (T !== null) {
        T.return = r.return, Ve = T;
        break;
      }
      Ve = r.return;
    }
  }
  var Hy = Math.ceil, Bo = Ee.ReactCurrentDispatcher, jl = Ee.ReactCurrentOwner, dr = Ee.ReactCurrentBatchConfig, Mt = 0, Xn = null, In = null, pr = 0, Ca = 0, Du = Aa(0), Ln = 0, Bs = null, Ai = 0, Ou = 0, gf = 0, $s = null, oa = null, rp = 0, Lu = 1 / 0, Ea = null, Nu = !1, zl = null, $o = null, Sf = !1, io = null, Ws = 0, Wo = 0, Mu = null, Ys = -1, kr = 0;
  function Bn() {
    return (Mt & 6) !== 0 ? Ct() : Ys !== -1 ? Ys : Ys = Ct();
  }
  function Ui(n) {
    return (n.mode & 1) === 0 ? 1 : (Mt & 2) !== 0 && pr !== 0 ? pr & -pr : Py.transition !== null ? (kr === 0 && (kr = iu()), kr) : (n = Ft, n !== 0 || (n = window.event, n = n === void 0 ? 16 : du(n.type)), n);
  }
  function Pr(n, r, o, u) {
    if (50 < Wo) throw Wo = 0, Mu = null, Error(v(185));
    Yi(n, o, u), ((Mt & 2) === 0 || n !== Xn) && (n === Xn && ((Mt & 2) === 0 && (Ou |= o), Ln === 4 && ci(n, pr)), la(n, u), o === 1 && Mt === 0 && (r.mode & 1) === 0 && (Lu = Ct() + 500, Ru && xi()));
  }
  function la(n, r) {
    var o = n.callbackNode;
    fl(n, r);
    var u = ni(n, n === Xn ? pr : 0);
    if (u === 0) o !== null && ur(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (o != null && ur(o), r === 1) n.tag === 0 ? Ao(ap.bind(null, n)) : Pc(ap.bind(null, n)), Su(function() {
        (Mt & 6) === 0 && xi();
      }), o = null;
      else {
        switch (lu(u)) {
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
            o = nu;
            break;
          default:
            o = cl;
        }
        o = Dh(o, _f.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function _f(n, r) {
    if (Ys = -1, kr = 0, (Mt & 6) !== 0) throw Error(v(327));
    var o = n.callbackNode;
    if (Au() && n.callbackNode !== o) return null;
    var u = ni(n, n === Xn ? pr : 0);
    if (u === 0) return null;
    if ((u & 30) !== 0 || (u & n.expiredLanes) !== 0 || r) r = Cf(n, u);
    else {
      r = u;
      var c = Mt;
      Mt |= 2;
      var d = Ch();
      (Xn !== n || pr !== r) && (Ea = null, Lu = Ct() + 500, oo(n, r));
      do
        try {
          Eh();
          break;
        } catch (T) {
          _h(n, T);
        }
      while (!0);
      Ad(), Bo.current = d, Mt = c, In !== null ? r = 0 : (Xn = null, pr = 0, r = Ln);
    }
    if (r !== 0) {
      if (r === 2 && (c = wo(n), c !== 0 && (u = c, r = Qs(n, c))), r === 1) throw o = Bs, oo(n, 0), ci(n, u), la(n, Ct()), o;
      if (r === 6) ci(n, u);
      else {
        if (c = n.current.alternate, (u & 30) === 0 && !Iy(c) && (r = Cf(n, u), r === 2 && (d = wo(n), d !== 0 && (u = d, r = Qs(n, d))), r === 1)) throw o = Bs, oo(n, 0), ci(n, u), la(n, Ct()), o;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(v(345));
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
            if (u = c, u = Ct() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Hy(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = Uc(Vl.bind(null, n, oa, Ea), u);
              break;
            }
            Vl(n, oa, Ea);
            break;
          case 5:
            Vl(n, oa, Ea);
            break;
          default:
            throw Error(v(329));
        }
      }
    }
    return la(n, Ct()), n.callbackNode === o ? _f.bind(null, n) : null;
  }
  function Qs(n, r) {
    var o = $s;
    return n.current.memoizedState.isDehydrated && (oo(n, r).flags |= 256), n = Cf(n, r), n !== 2 && (r = oa, oa = o, r !== null && Pl(r)), n;
  }
  function Pl(n) {
    oa === null ? oa = n : oa.push.apply(oa, n);
  }
  function Iy(n) {
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
    for (r &= ~gf, r &= ~Ou, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - Nr(r), u = 1 << o;
      n[o] = -1, r &= ~u;
    }
  }
  function ap(n) {
    if ((Mt & 6) !== 0) throw Error(v(327));
    Au();
    var r = ni(n, 0);
    if ((r & 1) === 0) return la(n, Ct()), null;
    var o = Cf(n, r);
    if (n.tag !== 0 && o === 2) {
      var u = wo(n);
      u !== 0 && (r = u, o = Qs(n, u));
    }
    if (o === 1) throw o = Bs, oo(n, 0), ci(n, r), la(n, Ct()), o;
    if (o === 6) throw Error(v(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Vl(n, oa, Ea), la(n, Ct()), null;
  }
  function ip(n, r) {
    var o = Mt;
    Mt |= 1;
    try {
      return n(r);
    } finally {
      Mt = o, Mt === 0 && (Lu = Ct() + 500, Ru && xi());
    }
  }
  function Fl(n) {
    io !== null && io.tag === 0 && (Mt & 6) === 0 && Au();
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
    if (o !== -1 && (n.timeoutHandle = -1, Dd(o)), In !== null) for (o = In.return; o !== null; ) {
      var u = o;
      switch (Vc(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && Eu();
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
    if (Xn = n, In = n = Yo(n.current, null), pr = Ca = r, Ln = 0, Bs = null, gf = Ou = Ai = 0, oa = $s = null, wl !== null) {
      for (r = 0; r < wl.length; r++) if (o = wl[r], u = o.interleaved, u !== null) {
        o.interleaved = null;
        var c = u.next, d = o.pending;
        if (d !== null) {
          var _ = d.next;
          d.next = c, u.next = _;
        }
        o.pending = u;
      }
      wl = null;
    }
    return n;
  }
  function _h(n, r) {
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
          Ln = 1, Bs = r, In = null;
          break;
        }
        e: {
          var d = n, _ = o.return, T = o, L = r;
          if (r = pr, T.flags |= 32768, L !== null && typeof L == "object" && typeof L.then == "function") {
            var Y = L, ce = T, me = ce.tag;
            if ((ce.mode & 1) === 0 && (me === 0 || me === 11 || me === 15)) {
              var ue = ce.alternate;
              ue ? (ce.updateQueue = ue.updateQueue, ce.memoizedState = ue.memoizedState, ce.lanes = ue.lanes) : (ce.updateQueue = null, ce.memoizedState = null);
            }
            var Ue = lh(_);
            if (Ue !== null) {
              Ue.flags &= -257, Io(Ue, _, T, d, r), Ue.mode & 1 && Gd(d, Y, r), r = Ue, L = Y;
              var $e = r.updateQueue;
              if ($e === null) {
                var Qe = /* @__PURE__ */ new Set();
                Qe.add(L), r.updateQueue = Qe;
              } else $e.add(L);
              break e;
            } else {
              if ((r & 1) === 0) {
                Gd(d, Y, r), lp();
                break e;
              }
              L = Error(v(426));
            }
          } else if (hn && T.mode & 1) {
            var Nn = lh(_);
            if (Nn !== null) {
              (Nn.flags & 65536) === 0 && (Nn.flags |= 256), Io(Nn, _, T, d, r), to(Al(L, T));
              break e;
            }
          }
          d = L = Al(L, T), Ln !== 4 && (Ln = 2), $s === null ? $s = [d] : $s.push(d), d = _;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var P = oh(d, L, r);
                th(d, P);
                break e;
              case 1:
                T = L;
                var A = d.type, I = d.stateNode;
                if ((d.flags & 128) === 0 && (typeof A.getDerivedStateFromError == "function" || I !== null && typeof I.componentDidCatch == "function" && ($o === null || !$o.has(I)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var fe = Qd(d, T, r);
                  th(d, fe);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        bh(o);
      } catch (We) {
        r = We, In === o && o !== null && (In = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ch() {
    var n = Bo.current;
    return Bo.current = Ml, n === null ? Ml : n;
  }
  function lp() {
    (Ln === 0 || Ln === 3 || Ln === 2) && (Ln = 4), Xn === null || (Ai & 268435455) === 0 && (Ou & 268435455) === 0 || ci(Xn, pr);
  }
  function Cf(n, r) {
    var o = Mt;
    Mt |= 2;
    var u = Ch();
    (Xn !== n || pr !== r) && (Ea = null, oo(n, r));
    do
      try {
        By();
        break;
      } catch (c) {
        _h(n, c);
      }
    while (!0);
    if (Ad(), Mt = o, Bo.current = u, In !== null) throw Error(v(261));
    return Xn = null, pr = 0, Ln;
  }
  function By() {
    for (; In !== null; ) Rh(In);
  }
  function Eh() {
    for (; In !== null && !Ja(); ) Rh(In);
  }
  function Rh(n) {
    var r = kh(n.alternate, n, Ca);
    n.memoizedProps = n.pendingProps, r === null ? bh(n) : In = r, jl.current = null;
  }
  function bh(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (o = vh(o, r, Ca), o !== null) {
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
      dr.transition = null, Ft = 1, $y(n, r, o, u);
    } finally {
      dr.transition = c, Ft = u;
    }
    return null;
  }
  function $y(n, r, o, u) {
    do
      Au();
    while (io !== null);
    if ((Mt & 6) !== 0) throw Error(v(327));
    o = n.finishedWork;
    var c = n.finishedLanes;
    if (o === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(v(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = o.lanes | o.childLanes;
    if (ud(n, d), n === Xn && (In = Xn = null, pr = 0), (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || Sf || (Sf = !0, Dh(cl, function() {
      return Au(), null;
    })), d = (o.flags & 15990) !== 0, (o.subtreeFlags & 15990) !== 0 || d) {
      d = dr.transition, dr.transition = null;
      var _ = Ft;
      Ft = 1;
      var T = Mt;
      Mt |= 4, jl.current = null, mh(n, o), ep(o, n), hu(_l), La = !!vs, _l = vs = null, n.current = o, Vy(o), Za(), Mt = T, Ft = _, dr.transition = d;
    } else n.current = o;
    if (Sf && (Sf = !1, io = n, Ws = c), d = n.pendingLanes, d === 0 && ($o = null), es(o.stateNode), la(n, Ct()), r !== null) for (u = n.onRecoverableError, o = 0; o < r.length; o++) c = r[o], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (Nu) throw Nu = !1, n = zl, zl = null, n;
    return (Ws & 1) !== 0 && n.tag !== 0 && Au(), d = n.pendingLanes, (d & 1) !== 0 ? n === Mu ? Wo++ : (Wo = 0, Mu = n) : Wo = 0, xi(), null;
  }
  function Au() {
    if (io !== null) {
      var n = lu(Ws), r = dr.transition, o = Ft;
      try {
        if (dr.transition = null, Ft = 16 > n ? 16 : n, io === null) var u = !1;
        else {
          if (n = io, io = null, Ws = 0, (Mt & 6) !== 0) throw Error(v(331));
          var c = Mt;
          for (Mt |= 4, Ve = n.current; Ve !== null; ) {
            var d = Ve, _ = d.child;
            if ((Ve.flags & 16) !== 0) {
              var T = d.deletions;
              if (T !== null) {
                for (var L = 0; L < T.length; L++) {
                  var Y = T[L];
                  for (Ve = Y; Ve !== null; ) {
                    var ce = Ve;
                    switch (ce.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Fs(8, ce, d);
                    }
                    var me = ce.child;
                    if (me !== null) me.return = ce, Ve = me;
                    else for (; Ve !== null; ) {
                      ce = Ve;
                      var ue = ce.sibling, Ue = ce.return;
                      if (yf(ce), ce === Y) {
                        Ve = null;
                        break;
                      }
                      if (ue !== null) {
                        ue.return = Ue, Ve = ue;
                        break;
                      }
                      Ve = Ue;
                    }
                  }
                }
                var $e = d.alternate;
                if ($e !== null) {
                  var Qe = $e.child;
                  if (Qe !== null) {
                    $e.child = null;
                    do {
                      var Nn = Qe.sibling;
                      Qe.sibling = null, Qe = Nn;
                    } while (Qe !== null);
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
                  Fs(9, d, d.return);
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
              if (T = Ve, (T.flags & 2048) !== 0) try {
                switch (T.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vs(9, T);
                }
              } catch (We) {
                mn(T, T.return, We);
              }
              if (T === _) {
                Ve = null;
                break e;
              }
              var fe = T.sibling;
              if (fe !== null) {
                fe.return = T.return, Ve = fe;
                break e;
              }
              Ve = T.return;
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
    r = Al(o, r), r = oh(n, r, 1), n = Fo(n, r, 1), r = Bn(), n !== null && (Yi(n, 1, r), la(n, r));
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
  function Wy(n, r, o) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = Bn(), n.pingedLanes |= n.suspendedLanes & o, Xn === n && (pr & o) === o && (Ln === 4 || Ln === 3 && (pr & 130023424) === pr && 500 > Ct() - rp ? oo(n, 0) : gf |= o), la(n, r);
  }
  function Th(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = ma, ma <<= 1, (ma & 130023424) === 0 && (ma = 4194304)));
    var o = Bn();
    n = Sa(n, r), n !== null && (Yi(n, r, o), la(n, o));
  }
  function Yy(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), Th(n, o);
  }
  function xh(n, r) {
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
    u !== null && u.delete(r), Th(n, o);
  }
  var kh;
  kh = function(n, r, o) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || qn.current) Vn = !0;
    else {
      if ((n.lanes & o) === 0 && (r.flags & 128) === 0) return Vn = !1, js(n, r, o);
      Vn = (n.flags & 131072) !== 0;
    }
    else Vn = !1, hn && (r.flags & 1048576) !== 0 && Xv(r, eo, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Pa(n, r), n = r.pendingProps;
        var c = Zr(r, Rn.current);
        _n(r, o), c = Vo(null, r, u, n, c, o);
        var d = li();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, zn(u) ? (d = !0, tr(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Fd(r), c.updater = cf, r.stateNode = c, c._reactInternals = r, Ls(r, u, n, o), r = As(null, r, u, !0, d, o)) : (r.tag = 0, hn && d && Fc(r), fr(null, r, c, o), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Pa(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = Gy(u), n = ui(u, n), c) {
            case 0:
              r = uh(null, r, u, n, o);
              break e;
            case 1:
              r = sh(null, r, u, n, o);
              break e;
            case 11:
              r = aa(null, r, u, n, o);
              break e;
            case 14:
              r = Ul(null, r, u, ui(u.type, n), o);
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
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ui(u, c), uh(n, r, u, c, o);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ui(u, c), sh(n, r, u, c, o);
      case 3:
        e: {
          if (xu(r), n === null) throw Error(v(387));
          u = r.pendingProps, d = r.memoizedState, c = d.element, eh(n, r), Ss(r, u, null, o);
          var _ = r.memoizedState;
          if (u = _.element, d.isDehydrated) if (d = { element: u, isDehydrated: !1, cache: _.cache, pendingSuspenseBoundaries: _.pendingSuspenseBoundaries, transitions: _.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Al(Error(v(423)), r), r = ch(n, r, u, o, c);
            break e;
          } else if (u !== c) {
            c = Al(Error(v(424)), r), r = ch(n, r, u, o, c);
            break e;
          } else for (ta = bi(r.stateNode.containerInfo.firstChild), ea = r, hn = !0, ja = null, o = Oe(r, null, u, o), r.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
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
        return nh(r), n === null && Nd(r), u = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, _ = c.children, Ac(u, c) ? _ = null : d !== null && Ac(u, d) && (r.flags |= 32), qd(n, r), fr(n, r, _, o), r.child;
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
            var T = d.dependencies;
            if (T !== null) {
              _ = d.child;
              for (var L = T.firstContext; L !== null; ) {
                if (L.context === u) {
                  if (d.tag === 1) {
                    L = no(-1, o & -o), L.tag = 2;
                    var Y = d.updateQueue;
                    if (Y !== null) {
                      Y = Y.shared;
                      var ce = Y.pending;
                      ce === null ? L.next = L : (L.next = ce.next, ce.next = L), Y.pending = L;
                    }
                  }
                  d.lanes |= o, L = d.alternate, L !== null && (L.lanes |= o), jd(
                    d.return,
                    o,
                    r
                  ), T.lanes |= o;
                  break;
                }
                L = L.next;
              }
            } else if (d.tag === 10) _ = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (_ = d.return, _ === null) throw Error(v(341));
              _.lanes |= o, T = _.alternate, T !== null && (T.lanes |= o), jd(_, o, r), _ = d.sibling;
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
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ui(u, c), Pa(n, r), r.tag = 1, zn(u) ? (n = !0, tr(r)) : n = !1, _n(r, o), ff(r, u, c), Ls(r, u, c, o), As(null, r, u, !0, n, o);
      case 19:
        return Li(n, r, o);
      case 22:
        return Ms(n, r, o);
    }
    throw Error(v(156, r.tag));
  };
  function Dh(n, r) {
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
  function Gy(n) {
    if (typeof n == "function") return up(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === $) return 11;
      if (n === Be) return 14;
    }
    return 2;
  }
  function Yo(n, r) {
    var o = n.alternate;
    return o === null ? (o = Ha(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Gs(n, r, o, u, c, d) {
    var _ = 2;
    if (u = n, typeof n == "function") up(n) && (_ = 1);
    else if (typeof n == "string") _ = 5;
    else e: switch (n) {
      case Fe:
        return lo(o.children, c, d, r);
      case Ie:
        _ = 8, c |= 8;
        break;
      case qe:
        return n = Ha(12, o, r, c | 2), n.elementType = qe, n.lanes = d, n;
      case X:
        return n = Ha(13, o, r, c), n.elementType = X, n.lanes = d, n;
      case we:
        return n = Ha(19, o, r, c), n.elementType = we, n.lanes = d, n;
      case Re:
        return Qo(o, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case it:
            _ = 10;
            break e;
          case ge:
            _ = 9;
            break e;
          case $:
            _ = 11;
            break e;
          case Be:
            _ = 14;
            break e;
          case De:
            _ = 16, u = null;
            break e;
        }
        throw Error(v(130, n == null ? n : typeof n, ""));
    }
    return r = Ha(_, o, r, c), r.elementType = n, r.type = u, r.lanes = d, r;
  }
  function lo(n, r, o, u) {
    return n = Ha(7, n, u, r), n.lanes = o, n;
  }
  function Qo(n, r, o, u) {
    return n = Ha(22, n, u, r), n.elementType = Re, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function sp(n, r, o) {
    return n = Ha(6, n, null, r), n.lanes = o, n;
  }
  function Ef(n, r, o) {
    return r = Ha(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Oh(n, r, o, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ou(0), this.expirationTimes = ou(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ou(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Rf(n, r, o, u, c, d, _, T, L) {
    return n = new Oh(n, r, o, T, L), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ha(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: u, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Fd(d), n;
  }
  function qy(n, r, o) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ge, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: o };
  }
  function cp(n) {
    if (!n) return wr;
    n = n._reactInternals;
    e: {
      if (_t(n) !== n || n.tag !== 1) throw Error(v(170));
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
      throw Error(v(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (zn(o)) return ys(n, o, r);
    }
    return r;
  }
  function Lh(n, r, o, u, c, d, _, T, L) {
    return n = Rf(o, u, !0, n, c, d, _, T, L), n.context = cp(null), o = n.current, u = Bn(), c = Ui(o), d = no(u, c), d.callback = r ?? null, Fo(o, d, c), n.current.lanes = c, Yi(n, c, u), la(n, u), n;
  }
  function bf(n, r, o, u) {
    var c = r.current, d = Bn(), _ = Ui(c);
    return o = cp(o), r.context === null ? r.context = o : r.pendingContext = o, r = no(d, _), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Fo(c, r, _), n !== null && (Pr(n, c, _, d), Bc(n, c, _)), _;
  }
  function wf(n) {
    return n = n.current, n.child ? (n.child.tag === 5, n.child.stateNode) : null;
  }
  function fp(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function Tf(n, r) {
    fp(n, r), (n = n.alternate) && fp(n, r);
  }
  function Nh() {
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
    if (r === null) throw Error(v(409));
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
      var r = ht();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Gn.length && r !== 0 && r < Gn[o].priority; o++) ;
      Gn.splice(o, 0, n), o === 0 && rs(n);
    }
  };
  function pp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function kf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Mh() {
  }
  function Ky(n, r, o, u, c) {
    if (c) {
      if (typeof u == "function") {
        var d = u;
        u = function() {
          var Y = wf(_);
          d.call(Y);
        };
      }
      var _ = Lh(r, u, n, 0, null, !1, !1, "", Mh);
      return n._reactRootContainer = _, n[Ji] = _.current, yu(n.nodeType === 8 ? n.parentNode : n), Fl(), _;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof u == "function") {
      var T = u;
      u = function() {
        var Y = wf(L);
        T.call(Y);
      };
    }
    var L = Rf(n, 0, !1, null, null, !1, !1, "", Mh);
    return n._reactRootContainer = L, n[Ji] = L.current, yu(n.nodeType === 8 ? n.parentNode : n), Fl(function() {
      bf(r, L, o, u);
    }), L;
  }
  function qs(n, r, o, u, c) {
    var d = o._reactRootContainer;
    if (d) {
      var _ = d;
      if (typeof c == "function") {
        var T = c;
        c = function() {
          var L = wf(_);
          T.call(L);
        };
      }
      bf(r, _, n, c);
    } else _ = Ky(o, r, n, c, u);
    return wf(_);
  }
  jt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = ti(r.pendingLanes);
          o !== 0 && (Qi(r, o | 1), la(r, Ct()), (Mt & 6) === 0 && (Lu = Ct() + 500, xi()));
        }
        break;
      case 13:
        Fl(function() {
          var u = Sa(n, 1);
          if (u !== null) {
            var c = Bn();
            Pr(u, n, 1, c);
          }
        }), Tf(n, 1);
    }
  }, ts = function(n) {
    if (n.tag === 13) {
      var r = Sa(n, 134217728);
      if (r !== null) {
        var o = Bn();
        Pr(r, n, 134217728, o);
      }
      Tf(n, 134217728);
    }
  }, Si = function(n) {
    if (n.tag === 13) {
      var r = Ui(n), o = Sa(n, r);
      if (o !== null) {
        var u = Bn();
        Pr(o, n, r, u);
      }
      Tf(n, r);
    }
  }, ht = function() {
    return Ft;
  }, uu = function(n, r) {
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
              if (!c) throw Error(v(90));
              Dr(u), qr(u, c);
            }
          }
        }
        break;
      case "textarea":
        qa(n, o);
        break;
      case "select":
        r = o.value, r != null && Tn(n, !!o.multiple, r, !1);
    }
  }, ll = ip, _o = Fl;
  var Xy = { usingClientEntryPoint: !1, Events: [et, oi, Sn, Wi, ol, ip] }, Ks = { findFiberByHostInstance: Cl, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Ah = { bundleType: Ks.bundleType, version: Ks.version, rendererPackageName: Ks.rendererPackageName, rendererConfig: Ks.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ee.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = xn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ks.findFiberByHostInstance || Nh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Go = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Go.isDisabled && Go.supportsFiber) try {
      Ro = Go.inject(Ah), Kr = Go;
    } catch {
    }
  }
  return Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xy, Qa.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!pp(r)) throw Error(v(200));
    return qy(n, r, null, o);
  }, Qa.createRoot = function(n, r) {
    if (!pp(n)) throw Error(v(299));
    var o = !1, u = "", c = Hl;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Rf(n, 1, !1, null, null, o, !1, u, c), n[Ji] = r.current, yu(n.nodeType === 8 ? n.parentNode : n), new dp(r);
  }, Qa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(v(188)) : (n = Object.keys(n).join(","), Error(v(268, n)));
    return n = xn(r), n = n === null ? null : n.stateNode, n;
  }, Qa.flushSync = function(n) {
    return Fl(n);
  }, Qa.hydrate = function(n, r, o) {
    if (!kf(r)) throw Error(v(200));
    return qs(null, n, r, !0, o);
  }, Qa.hydrateRoot = function(n, r, o) {
    if (!pp(n)) throw Error(v(405));
    var u = o != null && o.hydratedSources || null, c = !1, d = "", _ = Hl;
    if (o != null && (o.unstable_strictMode === !0 && (c = !0), o.identifierPrefix !== void 0 && (d = o.identifierPrefix), o.onRecoverableError !== void 0 && (_ = o.onRecoverableError)), r = Lh(r, null, n, 1, o ?? null, c, !1, d, _), n[Ji] = r.current, yu(n), u) for (n = 0; n < u.length; n++) o = u[n], c = o._getVersion, c = c(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, c] : r.mutableSourceEagerHydrationData.push(
      o,
      c
    );
    return new xf(r);
  }, Qa.render = function(n, r, o) {
    if (!kf(r)) throw Error(v(200));
    return qs(null, n, r, !1, o);
  }, Qa.unmountComponentAtNode = function(n) {
    if (!kf(n)) throw Error(v(40));
    return n._reactRootContainer ? (Fl(function() {
      qs(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ji] = null;
      });
    }), !0) : !1;
  }, Qa.unstable_batchedUpdates = ip, Qa.unstable_renderSubtreeIntoContainer = function(n, r, o, u) {
    if (!kf(o)) throw Error(v(200));
    if (n == null || n._reactInternals === void 0) throw Error(v(38));
    return qs(n, r, o, !1, u);
  }, Qa.version = "18.3.1-next-f1338f8080-20240426", Qa;
}
var Ga = {};
var r2;
function kO() {
  return r2 || (r2 = 1, process.env.NODE_ENV !== "production" && (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var h = gv(), m = E2(), v = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, E = !1;
    function k(e) {
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
        var i = v.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var x = 0, w = 1, z = 2, H = 3, q = 4, G = 5, pe = 6, ae = 7, de = 8, se = 9, ve = 10, Se = 11, Ee = 12, he = 13, Ge = 14, Fe = 15, Ie = 16, qe = 17, it = 18, ge = 19, $ = 21, X = 22, we = 23, Be = 24, De = 25, Re = !0, ne = !1, Ne = !1, _e = !1, j = !1, J = !0, Ze = !0, ze = !0, mt = !0, nt = /* @__PURE__ */ new Set(), Me = {}, st = {};
    function dt(e, t) {
      Gt(e, t), Gt(e + "Capture", t);
    }
    function Gt(e, t) {
      Me[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Me[e] = t;
      {
        var a = e.toLowerCase();
        st[a] = e, e === "onDoubleClick" && (st.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        nt.add(t[i]);
    }
    var An = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Dr = Object.prototype.hasOwnProperty;
    function wn(e) {
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
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, wn(e)), Wn(e);
    }
    function qr(e) {
      if (or(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wn(e)), Wn(e);
    }
    function vi(e, t) {
      if (or(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, wn(e)), Wn(e);
    }
    function pa(e, t) {
      if (or(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, wn(e)), Wn(e);
    }
    function Zn(e) {
      if (or(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", wn(e)), Wn(e);
    }
    function Tn(e) {
      if (or(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", wn(e)), Wn(e);
    }
    var Qn = 0, Er = 1, qa = 2, Un = 3, Rr = 4, va = 5, Ka = 6, hi = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", be = hi + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ke = new RegExp("^[" + hi + "][" + be + "]*$"), bt = {}, Wt = {};
    function on(e) {
      return Dr.call(Wt, e) ? !0 : Dr.call(bt, e) ? !1 : Ke.test(e) ? (Wt[e] = !0, !0) : (bt[e] = !0, y("Invalid attribute name: `%s`", e), !1);
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
          var U = l.type, M;
          U === Un || U === Rr && a === !0 ? M = "" : (Yn(a, C), M = "" + a, l.sanitizeURL && _o(M.toString())), R ? e.setAttributeNS(R, C, M) : e.setAttribute(C, M);
        }
      }
    }
    var Lr = /* @__PURE__ */ Symbol.for("react.element"), lr = /* @__PURE__ */ Symbol.for("react.portal"), mi = /* @__PURE__ */ Symbol.for("react.fragment"), Xa = /* @__PURE__ */ Symbol.for("react.strict_mode"), yi = /* @__PURE__ */ Symbol.for("react.profiler"), gi = /* @__PURE__ */ Symbol.for("react.provider"), O = /* @__PURE__ */ Symbol.for("react.context"), ie = /* @__PURE__ */ Symbol.for("react.forward_ref"), ke = /* @__PURE__ */ Symbol.for("react.suspense"), He = /* @__PURE__ */ Symbol.for("react.suspense_list"), _t = /* @__PURE__ */ Symbol.for("react.memo"), yt = /* @__PURE__ */ Symbol.for("react.lazy"), kt = /* @__PURE__ */ Symbol.for("react.scope"), Tt = /* @__PURE__ */ Symbol.for("react.debug_trace_mode"), xn = /* @__PURE__ */ Symbol.for("react.offscreen"), un = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), dn = /* @__PURE__ */ Symbol.for("react.cache"), ur = /* @__PURE__ */ Symbol.for("react.tracing_marker"), Ja = Symbol.iterator, Za = "@@iterator";
    function Ct(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ja && e[Ja] || e[Za];
      return typeof t == "function" ? t : null;
    }
    var Rt = Object.assign, ei = 0, sl, cl, Eo, nu, Ro, Kr, es;
    function Nr() {
    }
    Nr.__reactDisabledLog = !0;
    function Sc() {
      {
        if (ei === 0) {
          sl = console.log, cl = console.info, Eo = console.warn, nu = console.error, Ro = console.group, Kr = console.groupCollapsed, es = console.groupEnd;
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
              value: nu
            }),
            group: Rt({}, e, {
              value: Ro
            }),
            groupCollapsed: Rt({}, e, {
              value: Kr
            }),
            groupEnd: Rt({}, e, {
              value: es
            })
          });
        }
        ei < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ru = v.ReactCurrentDispatcher, bo;
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
      var au = typeof WeakMap == "function" ? WeakMap : Map;
      ni = new au();
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
      s = ru.current, ru.current = null, Sc();
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
          for (var p = Q.stack.split(`
`), g = i.stack.split(`
`), C = p.length - 1, R = g.length - 1; C >= 1 && R >= 0 && p[C] !== g[R]; )
            R--;
          for (; C >= 1 && R >= 0; C--, R--)
            if (p[C] !== g[R]) {
              if (C !== 1 || R !== 1)
                do
                  if (C--, R--, R < 0 || p[C] !== g[R]) {
                    var U = `
` + p[C].replace(" at new ", " at ");
                    return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), typeof e == "function" && ni.set(e, U), U;
                  }
                while (C >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        ti = !1, ru.current = s, _c(), Error.prepareStackTrace = l;
      }
      var M = e ? e.displayName || e.name : "", B = M ? ma(M) : "";
      return typeof e == "function" && ni.set(e, B), B;
    }
    function wo(e, t, a) {
      return fl(e, !0);
    }
    function iu(e, t, a) {
      return fl(e, !1);
    }
    function ou(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Yi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fl(e, ou(e));
      if (typeof e == "string")
        return ma(e);
      switch (e) {
        case ke:
          return ma("Suspense");
        case He:
          return ma("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ie:
            return iu(e.render);
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
        case G:
          return ma(e.type);
        case Ie:
          return ma("Lazy");
        case he:
          return ma("Suspense");
        case ge:
          return ma("SuspenseList");
        case x:
        case z:
        case Fe:
          return iu(e.type);
        case Se:
          return iu(e.type.render);
        case w:
          return wo(e.type);
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
    function lu(e) {
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
        case He:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case O:
            var t = e;
            return lu(t) + ".Consumer";
          case gi:
            var a = e;
            return lu(a._context) + ".Provider";
          case ie:
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
    function ts(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Si(e) {
      return e.displayName || "Context";
    }
    function ht(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Be:
          return "Cache";
        case se:
          var i = a;
          return Si(i) + ".Consumer";
        case ve:
          var l = a;
          return Si(l._context) + ".Provider";
        case it:
          return "DehydratedFragment";
        case Se:
          return ts(a, a.render, "ForwardRef");
        case ae:
          return "Fragment";
        case G:
          return a;
        case q:
          return "Portal";
        case H:
          return "Root";
        case pe:
          return "Text";
        case Ie:
          return jt(a);
        case de:
          return a === Xa ? "StrictMode" : "Mode";
        case X:
          return "Offscreen";
        case Ee:
          return "Profiler";
        case $:
          return "Scope";
        case he:
          return "Suspense";
        case ge:
          return "SuspenseList";
        case De:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case w:
        case x:
        case qe:
        case z:
        case Ge:
        case Fe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var uu = v.ReactDebugCurrentFrame, sr = null, _i = !1;
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
      return sr === null ? "" : Qi(sr);
    }
    function pn() {
      uu.getCurrentStack = null, sr = null, _i = !1;
    }
    function Xt(e) {
      uu.getCurrentStack = e === null ? null : Ci, sr = e, _i = !1;
    }
    function To() {
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
          return Tn(e), e;
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
    function ns(e, t) {
      dl[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function rs(e) {
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
      return e && (rs(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Oa(e) {
      var t = rs(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Tn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(p) {
            Tn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Tn(p), i = "" + p;
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
    var su = !1, cu = !1, ko = !1, vl = !1;
    function fu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function du(e, t) {
      var a = e, i = t.checked, l = Rt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function ai(e, t) {
      ns("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !cu && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component", t.type), cu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !su && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component", t.type), su = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Da(t.value != null ? t.value : i),
        controlled: fu(t)
      };
    }
    function S(e, t) {
      var a = e, i = t.checked;
      i != null && Or(a, "checked", i, !1);
    }
    function D(e, t) {
      var a = e;
      {
        var i = fu(t);
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
      t.hasOwnProperty("value") ? rt(a, t.type, l) : t.hasOwnProperty("defaultValue") && rt(a, t.type, Da(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function W(e, t, a) {
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
    function K(e, t) {
      var a = e;
      D(a, t), Ce(a, t);
    }
    function Ce(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Yn(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var f = l[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Jh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Ei(f), D(f, p);
          }
        }
      }
    }
    function rt(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || La(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Ar(e._wrapperState.initialValue) : e.defaultValue !== Ar(a) && (e.defaultValue = Ar(a)));
    }
    var xe = !1, lt = !1, Dt = !1;
    function zt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? h.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || lt || (lt = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Dt || (Dt = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !xe && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), xe = !0);
    }
    function sn(e, t) {
      t.value != null && e.setAttribute("value", Ar(Da(t.value)));
    }
    var Jt = Array.isArray;
    function wt(e) {
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
    function as(e) {
      {
        ns("select", e);
        for (var t = 0; t < Do.length; t++) {
          var a = Do[t];
          if (e[a] != null) {
            var i = wt(e[a]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, gn()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, gn());
          }
        }
      }
    }
    function Gi(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
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
    function is(e, t) {
      return Rt({}, t, {
        value: void 0
      });
    }
    function hl(e, t) {
      var a = e;
      as(t), a._wrapperState = {
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
    var Cv = !1;
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
      ns("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Cv && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component"), Cv = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, s = t.defaultValue;
        if (l != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (wt(l)) {
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
    function Ev(e, t) {
      var a = e, i = Da(t.value), l = Da(t.defaultValue);
      if (i != null) {
        var s = Ar(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = Ar(l));
    }
    function Rv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Ty(e, t) {
      Ev(e, t);
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
    var bv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, Ec, wv = bv(function(e, t) {
      if (e.namespaceURI === hd && !("innerHTML" in e)) {
        Ec = Ec || document.createElement("div"), Ec.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Ec.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Xr = 1, Ki = 3, jn = 8, Xi = 9, gd = 11, pu = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ki) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, os = {
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
    }, ls = {
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
    var xv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ls).forEach(function(e) {
      xv.forEach(function(t) {
        ls[Tv(t, e)] = ls[e];
      });
    });
    function Rc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(ls.hasOwnProperty(e) && ls[e]) ? t + "px" : (pa(t, e), ("" + t).trim());
    }
    var kv = /([A-Z])/g, Dv = /^ms-/;
    function vu(e) {
      return e.replace(kv, "-$1").toLowerCase().replace(Dv, "-ms-");
    }
    var Ov = function() {
    };
    {
      var xy = /^(?:webkit|moz|o)[A-Z]/, ky = /^-ms-/, Lv = /-(.)/g, Sd = /;\s*$/, Ri = {}, ml = {}, Nv = !1, us = !1, Dy = function(e) {
        return e.replace(Lv, function(t, a) {
          return a.toUpperCase();
        });
      }, Mv = function(e) {
        Ri.hasOwnProperty(e) && Ri[e] || (Ri[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Dy(e.replace(ky, "ms-"))
        ));
      }, _d = function(e) {
        Ri.hasOwnProperty(e) && Ri[e] || (Ri[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Cd = function(e, t) {
        ml.hasOwnProperty(t) && ml[t] || (ml[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Sd, "")));
      }, Av = function(e, t) {
        Nv || (Nv = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Uv = function(e, t) {
        us || (us = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Ov = function(e, t) {
        e.indexOf("-") > -1 ? Mv(e) : xy.test(e) ? _d(e) : Sd.test(t) && Cd(e, t), typeof t == "number" && (isNaN(t) ? Av(e, t) : isFinite(t) || Uv(e, t));
      };
    }
    var jv = Ov;
    function Oy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : vu(i)) + ":", t += Rc(i, l, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function zv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || jv(i, t[i]);
          var s = Rc(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Ly(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Pv(e) {
      var t = {};
      for (var a in e)
        for (var i = os[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function Ny(e, t) {
      {
        if (!t)
          return;
        var a = Pv(e), i = Pv(t), l = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var g = f + "," + p;
            if (l[g])
              continue;
            l[g] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Ly(e[f]) ? "Removing" : "Updating", f, p);
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
    }, ss = Rt({
      menuitem: !0
    }, ii), Fv = "__html";
    function bc(e, t) {
      if (t) {
        if (ss[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Fv in t.dangerouslySetInnerHTML))
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
    var cs = {
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
    }, wc = {
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
    }, hu = {}, My = new RegExp("^(aria)-[" + be + "]*$"), mu = new RegExp("^(aria)[A-Z][" + be + "]*$");
    function Ed(e, t) {
      {
        if (Dr.call(hu, t) && hu[t])
          return !0;
        if (mu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = wc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), hu[t] = !0, !0;
          if (t !== i)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), hu[t] = !0, !0;
        }
        if (My.test(t)) {
          var l = t.toLowerCase(), s = wc.hasOwnProperty(l) ? l : null;
          if (s == null)
            return hu[t] = !0, !1;
          if (t !== s)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), hu[t] = !0, !0;
        }
      }
      return !0;
    }
    function fs(e, t) {
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
      Oo(e, t) || fs(e, t);
    }
    var bd = !1;
    function Tc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !bd && (bd = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var yl = function() {
    };
    {
      var cr = {}, wd = /^on./, xc = /^on[^A-Z]/, Vv = new RegExp("^(aria)-[" + be + "]*$"), Hv = new RegExp("^(aria)[A-Z][" + be + "]*$");
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
          var p = f.hasOwnProperty(l) ? f[l] : null;
          if (p != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, p), cr[t] = !0, !0;
          if (wd.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), cr[t] = !0, !0;
        } else if (wd.test(t))
          return xc.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), cr[t] = !0, !0;
        if (Vv.test(t) || Hv.test(t))
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
        if (cs.hasOwnProperty(l)) {
          var R = cs[l];
          if (R !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, R), cr[t] = !0, !0;
        } else if (!C && t !== l)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), cr[t] = !0, !0;
        return typeof a == "boolean" && fn(t, a, g, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), cr[t] = !0, !0) : C ? !0 : fn(t, a, g, !1) ? (cr[t] = !0, !1) : ((a === "false" || a === "true") && g !== null && g.type === Un && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), cr[t] = !0), !0);
      };
    }
    var Iv = function(e, t, a) {
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
    function Bv(e, t, a) {
      Oo(e, t) || Iv(e, t, a);
    }
    var Td = 1, kc = 2, Na = 4, xd = Td | kc | Na, gl = null;
    function Ay(e) {
      gl !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), gl = e;
    }
    function Uy() {
      gl === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), gl = null;
    }
    function ds(e) {
      return e === gl;
    }
    function kd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ki ? t.parentNode : t;
    }
    var Dc = null, Sl = null, Yt = null;
    function Oc(e) {
      var t = zu(e);
      if (t) {
        if (typeof Dc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Jh(a);
          Dc(t.stateNode, t.type, i);
        }
      }
    }
    function Lc(e) {
      Dc = e;
    }
    function yu(e) {
      Sl ? Yt ? Yt.push(e) : Yt = [e] : Sl = e;
    }
    function $v() {
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
    var gu = function(e, t) {
      return e(t);
    }, ps = function() {
    }, Lo = !1;
    function Wv() {
      var e = $v();
      e && (ps(), Nc());
    }
    function Yv(e, t, a) {
      if (Lo)
        return e(t, a);
      Lo = !0;
      try {
        return gu(e, t, a);
      } finally {
        Lo = !1, Wv();
      }
    }
    function jy(e, t, a) {
      gu = e, ps = a;
    }
    function Qv(e) {
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
          return !!(a.disabled && Qv(t));
        default:
          return !1;
      }
    }
    function No(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Jh(a);
      if (i === null)
        return null;
      var l = i[t];
      if (Mc(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var vs = !1;
    if (An)
      try {
        var _l = {};
        Object.defineProperty(_l, "passive", {
          get: function() {
            vs = !0;
          }
        }), window.addEventListener("test", _l, _l), window.removeEventListener("test", _l, _l);
      } catch {
        vs = !1;
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
      var Dd = document.createElement("react");
      Uc = function(t, a, i, l, s, f, p, g, C) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var R = document.createEvent("Event"), U = !1, M = !0, B = window.event, Q = Object.getOwnPropertyDescriptor(window, "event");
        function Z() {
          Dd.removeEventListener(ee, at, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = B);
        }
        var Le = Array.prototype.slice.call(arguments, 3);
        function at() {
          U = !0, Z(), a.apply(i, Le), M = !1;
        }
        var Xe, Ut = !1, Ot = !1;
        function F(V) {
          if (Xe = V.error, Ut = !0, Xe === null && V.colno === 0 && V.lineno === 0 && (Ot = !0), V.defaultPrevented && Xe != null && typeof Xe == "object")
            try {
              Xe._suppressLogging = !0;
            } catch {
            }
        }
        var ee = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", F), Dd.addEventListener(ee, at, !1), R.initEvent(ee, !1, !1), Dd.dispatchEvent(R), Q && Object.defineProperty(window, "event", Q), U && M && (Ut ? Ot && (Xe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Xe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Xe)), window.removeEventListener("error", F), !U)
          return Z(), Ac.apply(this, arguments);
      };
    }
    var Gv = Uc, Su = !1, jc = null, _u = !1, bi = null, qv = {
      onError: function(e) {
        Su = !0, jc = e;
      }
    };
    function Mo(e, t, a, i, l, s, f, p, g) {
      Su = !1, jc = null, Gv.apply(qv, arguments);
    }
    function wi(e, t, a, i, l, s, f, p, g) {
      if (Mo.apply(this, arguments), Su) {
        var C = ms();
        _u || (_u = !0, bi = C);
      }
    }
    function hs() {
      if (_u) {
        var e = bi;
        throw _u = !1, bi = null, e;
      }
    }
    function Ji() {
      return Su;
    }
    function ms() {
      if (Su) {
        var e = jc;
        return Su = !1, jc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Cu(e) {
      return e._reactInternals;
    }
    function zy(e) {
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
    ), wr = (
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
    ), Eu = (
      /*             */
      16384
    ), Kv = (
      /*               */
      32767
    ), ys = (
      /*                   */
      32768
    ), tr = (
      /*                */
      65536
    ), zc = (
      /* */
      131072
    ), Ti = (
      /*                       */
      1048576
    ), Ru = (
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
    ), jo = Sn | Nt | Ma | Aa | Rn | Zr | zn, zo = Nt | cn | Rn | zn, eo = Jr | Ma, Pn = Zi | Pc | Ru, Ua = v.ReactCurrentOwner;
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
    function Di(e) {
      return e.tag === H ? e.stateNode.containerInfo : null;
    }
    function El(e) {
      return ya(e) === e;
    }
    function Xv(e) {
      {
        var t = Ua.current;
        if (t !== null && t.tag === w) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ht(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = Cu(e);
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
    var Od = m.unstable_scheduleCallback, Jv = m.unstable_cancelCallback, Ld = m.unstable_shouldYield, Nd = m.unstable_requestPaint, Kn = m.unstable_now, Hc = m.unstable_getCurrentPriorityLevel, gs = m.unstable_ImmediatePriority, Po = m.unstable_UserBlockingPriority, to = m.unstable_NormalPriority, Py = m.unstable_LowPriority, Rl = m.unstable_IdlePriority, Ic = m.unstable_yieldValue, Zv = m.unstable_setDisableYieldValue, bl = null, kn = null, Oe = null, ga = !1, na = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
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
          getLaneLabelMap: wl,
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
          var a = (e.current.flags & Je) === Je;
          if (ze) {
            var i;
            switch (t) {
              case Ur:
                i = gs;
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
      if (typeof Ic == "function" && (Zv(e), k(e)), kn && typeof kn.setStrictMode == "function")
        try {
          kn.setStrictMode(bl, e);
        } catch (t) {
          ga || (ga = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function za(e) {
      Oe = e;
    }
    function wl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < kl; a++) {
          var i = rh(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function zd(e) {
      Oe !== null && typeof Oe.markCommitStarted == "function" && Oe.markCommitStarted(e);
    }
    function Pd() {
      Oe !== null && typeof Oe.markCommitStopped == "function" && Oe.markCommitStopped();
    }
    function Sa(e) {
      Oe !== null && typeof Oe.markComponentRenderStarted == "function" && Oe.markComponentRenderStarted(e);
    }
    function _a() {
      Oe !== null && typeof Oe.markComponentRenderStopped == "function" && Oe.markComponentRenderStopped();
    }
    function Fd(e) {
      Oe !== null && typeof Oe.markComponentPassiveEffectMountStarted == "function" && Oe.markComponentPassiveEffectMountStarted(e);
    }
    function eh() {
      Oe !== null && typeof Oe.markComponentPassiveEffectMountStopped == "function" && Oe.markComponentPassiveEffectMountStopped();
    }
    function no(e) {
      Oe !== null && typeof Oe.markComponentPassiveEffectUnmountStarted == "function" && Oe.markComponentPassiveEffectUnmountStarted(e);
    }
    function Fo() {
      Oe !== null && typeof Oe.markComponentPassiveEffectUnmountStopped == "function" && Oe.markComponentPassiveEffectUnmountStopped();
    }
    function Bc(e) {
      Oe !== null && typeof Oe.markComponentLayoutEffectMountStarted == "function" && Oe.markComponentLayoutEffectMountStarted(e);
    }
    function th() {
      Oe !== null && typeof Oe.markComponentLayoutEffectMountStopped == "function" && Oe.markComponentLayoutEffectMountStopped();
    }
    function Ss(e) {
      Oe !== null && typeof Oe.markComponentLayoutEffectUnmountStarted == "function" && Oe.markComponentLayoutEffectUnmountStarted(e);
    }
    function Vd() {
      Oe !== null && typeof Oe.markComponentLayoutEffectUnmountStopped == "function" && Oe.markComponentLayoutEffectUnmountStopped();
    }
    function _s(e, t, a) {
      Oe !== null && typeof Oe.markComponentErrored == "function" && Oe.markComponentErrored(e, t, a);
    }
    function Oi(e, t, a) {
      Oe !== null && typeof Oe.markComponentSuspended == "function" && Oe.markComponentSuspended(e, t, a);
    }
    function Cs(e) {
      Oe !== null && typeof Oe.markLayoutEffectsStarted == "function" && Oe.markLayoutEffectsStarted(e);
    }
    function Es() {
      Oe !== null && typeof Oe.markLayoutEffectsStopped == "function" && Oe.markLayoutEffectsStopped();
    }
    function Tl(e) {
      Oe !== null && typeof Oe.markPassiveEffectsStarted == "function" && Oe.markPassiveEffectsStarted(e);
    }
    function Hd() {
      Oe !== null && typeof Oe.markPassiveEffectsStopped == "function" && Oe.markPassiveEffectsStopped();
    }
    function xl(e) {
      Oe !== null && typeof Oe.markRenderStarted == "function" && Oe.markRenderStarted(e);
    }
    function nh() {
      Oe !== null && typeof Oe.markRenderYielded == "function" && Oe.markRenderYielded();
    }
    function $c() {
      Oe !== null && typeof Oe.markRenderStopped == "function" && Oe.markRenderStopped();
    }
    function Cn(e) {
      Oe !== null && typeof Oe.markRenderScheduled == "function" && Oe.markRenderScheduled(e);
    }
    function Wc(e, t) {
      Oe !== null && typeof Oe.markForceUpdateScheduled == "function" && Oe.markForceUpdateScheduled(e, t);
    }
    function Rs(e, t) {
      Oe !== null && typeof Oe.markStateUpdateScheduled == "function" && Oe.markStateUpdateScheduled(e, t);
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
    var kl = 31, oe = (
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
    ), Tr = (
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
    ), wu = (
      /*                       */
      131072
    ), Tu = (
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
    ), Ts = (
      /*                            */
      130023424
    ), Ll = (
      /*                             */
      4194304
    ), af = (
      /*                             */
      8388608
    ), xs = (
      /*                             */
      16777216
    ), of = (
      /*                             */
      33554432
    ), lf = (
      /*                             */
      67108864
    ), Id = Ll, ks = (
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
    function rh(e) {
      {
        if (e & ct)
          return "Sync";
        if (e & Vo)
          return "InputContinuousHydration";
        if (e & li)
          return "InputContinuous";
        if (e & Tr)
          return "DefaultHydration";
        if (e & Dn)
          return "Default";
        if (e & ro)
          return "TransitionHydration";
        if (e & Ho)
          return "Transition";
        if (e & Ts)
          return "Retry";
        if (e & ks)
          return "SelectiveHydration";
        if (e & Ds)
          return "IdleHydration";
        if (e & Nl)
          return "Idle";
        if (e & ra)
          return "Offscreen";
      }
    }
    var an = -1, Ml = Dl, uf = Ll;
    function Os(e) {
      switch (Io(e)) {
        case ct:
          return ct;
        case Vo:
          return Vo;
        case li:
          return li;
        case Tr:
          return Tr;
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
        case wu:
        case Tu:
        case nf:
        case ws:
        case rf:
          return e & Ho;
        case Ll:
        case af:
        case xs:
        case of:
        case lf:
          return e & Ts;
        case ks:
          return ks;
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
      if (a === oe)
        return oe;
      var i = oe, l = e.suspendedLanes, s = e.pingedLanes, f = a & Bd;
      if (f !== oe) {
        var p = f & ~l;
        if (p !== oe)
          i = Os(p);
        else {
          var g = f & s;
          g !== oe && (i = Os(g));
        }
      } else {
        var C = a & ~l;
        C !== oe ? i = Os(C) : s !== oe && (i = Os(s));
      }
      if (i === oe)
        return oe;
      if (t !== oe && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === oe) {
        var R = Io(i), U = Io(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          R >= U || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          R === Dn && (U & Ho) !== oe
        )
          return t;
      }
      (i & li) !== oe && (i |= a & Dn);
      var M = e.entangledLanes;
      if (M !== oe)
        for (var B = e.entanglements, Q = i & M; Q > 0; ) {
          var Z = Vn(Q), Le = 1 << Z;
          i |= B[Z], Q &= ~Le;
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
        case Tr:
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
        case wu:
        case Tu:
        case nf:
        case ws:
        case rf:
          return t + 5e3;
        case Ll:
        case af:
        case xs:
        case of:
        case lf:
          return an;
        case ks:
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
        C === an ? ((g & i) === oe || (g & l) !== oe) && (s[p] = $d(g, t)) : C <= t && (e.expiredLanes |= g), f &= ~g;
      }
    }
    function ah(e) {
      return Os(e.pendingLanes);
    }
    function ff(e) {
      var t = e.pendingLanes & ~ra;
      return t !== oe ? t : t & ra ? ra : oe;
    }
    function ih(e) {
      return (e & ct) !== oe;
    }
    function Ls(e) {
      return (e & Bd) !== oe;
    }
    function Al(e) {
      return (e & Ts) === e;
    }
    function Wd(e) {
      var t = ct | li | Dn;
      return (e & t) === oe;
    }
    function Yd(e) {
      return (e & Ho) === e;
    }
    function df(e, t) {
      var a = Vo | li | Tr | Dn;
      return (t & a) !== oe;
    }
    function oh(e, t) {
      return (t & e.expiredLanes) !== oe;
    }
    function Qd(e) {
      return (e & Ho) !== oe;
    }
    function Gd() {
      var e = Ml;
      return Ml <<= 1, (Ml & Ho) === oe && (Ml = Dl), e;
    }
    function lh() {
      var e = uf;
      return uf <<= 1, (uf & Ts) === oe && (uf = Ll), e;
    }
    function Io(e) {
      return e & -e;
    }
    function Ns(e) {
      return Io(e);
    }
    function Vn(e) {
      return 31 - Fn(e);
    }
    function fr(e) {
      return Vn(e);
    }
    function aa(e, t) {
      return (e & t) !== oe;
    }
    function Ul(e, t) {
      return (e & t) === t;
    }
    function Et(e, t) {
      return e | t;
    }
    function Ms(e, t) {
      return e & ~t;
    }
    function qd(e, t) {
      return e & t;
    }
    function uh(e) {
      return e;
    }
    function sh(e, t) {
      return e !== Pt && e < t ? e : t;
    }
    function As(e) {
      for (var t = [], a = 0; a < kl; a++)
        t.push(e);
      return t;
    }
    function xu(e, t, a) {
      e.pendingLanes |= t, t !== Nl && (e.suspendedLanes = oe, e.pingedLanes = oe);
      var i = e.eventTimes, l = fr(t);
      i[l] = a;
    }
    function ch(e, t) {
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
      e.pendingLanes = t, e.suspendedLanes = oe, e.pingedLanes = oe, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Vn(f), g = 1 << p;
        i[p] = oe, l[p] = an, s[p] = an, f &= ~g;
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
          i = Tr;
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
        case wu:
        case Tu:
        case nf:
        case ws:
        case rf:
        case Ll:
        case af:
        case xs:
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
    function Us(e, t, a) {
      if (na)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = fr(a), s = 1 << l, f = i[l];
          f.add(t), a &= ~s;
        }
    }
    function fh(e, t) {
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
    var Ur = ct, Li = li, Pa = Dn, Fa = Nl, js = Pt;
    function Va() {
      return js;
    }
    function Hn(e) {
      js = e;
    }
    function dh(e, t) {
      var a = js;
      try {
        return js = e, t();
      } finally {
        js = a;
      }
    }
    function ph(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function zs(e, t) {
      return e > t ? e : t;
    }
    function rr(e, t) {
      return e !== 0 && e < t;
    }
    function vh(e) {
      var t = Io(e);
      return rr(Ur, t) ? rr(Li, t) ? Ls(t) ? Pa : Fa : Li : Ur;
    }
    function hf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ps;
    function xr(e) {
      Ps = e;
    }
    function Fy(e) {
      Ps(e);
    }
    var Ve;
    function ku(e) {
      Ve = e;
    }
    var mf;
    function hh(e) {
      mf = e;
    }
    var mh;
    function Fs(e) {
      mh = e;
    }
    var Vs;
    function Zd(e) {
      Vs = e;
    }
    var yf = !1, Hs = [], ao = null, Ni = null, Mi = null, On = /* @__PURE__ */ new Map(), jr = /* @__PURE__ */ new Map(), zr = [], yh = [
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
    function gh(e) {
      return yh.indexOf(e) > -1;
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
          var p = zu(t);
          p !== null && Ve(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var g = e.targetContainers;
      return l !== null && g.indexOf(l) === -1 && g.push(l), e;
    }
    function Vy(e, t, a, i, l) {
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
      var t = Zs(e.target);
      if (t !== null) {
        var a = ya(t);
        if (a !== null) {
          var i = a.tag;
          if (i === he) {
            var l = ki(a);
            if (l !== null) {
              e.blockedOn = l, Vs(e.priority, function() {
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
    function Sh(e) {
      for (var t = mh(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < zr.length && rr(t, zr[i].priority); i++)
        ;
      zr.splice(i, 0, a), i === 0 && tp(a);
    }
    function Is(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ou(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          Ay(s), l.target.dispatchEvent(s), Uy();
        } else {
          var f = zu(i);
          return f !== null && Ve(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function np(e, t, a) {
      Is(e) && a.delete(t);
    }
    function Hy() {
      yf = !1, ao !== null && Is(ao) && (ao = null), Ni !== null && Is(Ni) && (Ni = null), Mi !== null && Is(Mi) && (Mi = null), On.forEach(np), jr.forEach(np);
    }
    function Bo(e, t) {
      e.blockedOn === t && (e.blockedOn = null, yf || (yf = !0, m.unstable_scheduleCallback(m.unstable_NormalPriority, Hy)));
    }
    function jl(e) {
      if (Hs.length > 0) {
        Bo(Hs[0], e);
        for (var t = 1; t < Hs.length; t++) {
          var a = Hs[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      ao !== null && Bo(ao, e), Ni !== null && Bo(Ni, e), Mi !== null && Bo(Mi, e);
      var i = function(p) {
        return Bo(p, e);
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
    var dr = v.ReactCurrentBatchConfig, Mt = !0;
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
      Mt && Bs(e, t, a, i);
    }
    function Bs(e, t, a, i) {
      var l = Ou(e, t, a, i);
      if (l === null) {
        ag(e, t, i, Ai, a), ep(e, i);
        return;
      }
      if (Vy(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (ep(e, i), t & Na && gh(e)) {
        for (; l !== null; ) {
          var s = zu(l);
          s !== null && Fy(s);
          var f = Ou(e, t, a, i);
          if (f === null && ag(e, t, i, Ai, a), f === l)
            break;
          l = f;
        }
        l !== null && i.stopPropagation();
        return;
      }
      ag(e, t, i, null, a);
    }
    var Ai = null;
    function Ou(e, t, a, i) {
      Ai = null;
      var l = kd(i), s = Zs(l);
      if (s !== null) {
        var f = ya(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === he) {
            var g = ki(f);
            if (g !== null)
              return g;
            s = null;
          } else if (p === H) {
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
            case gs:
              return Ur;
            case Po:
              return Li;
            case to:
            case Py:
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
    function $s(e, t, a) {
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
    function Lu(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Ea = null, Nu = null, zl = null;
    function $o(e) {
      return Ea = e, Nu = Ws(), !0;
    }
    function Sf() {
      Ea = null, Nu = null, zl = null;
    }
    function io() {
      if (zl)
        return zl;
      var e, t = Nu, a = t.length, i, l = Ws(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === l[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return zl = l.slice(e, p), zl;
    }
    function Ws() {
      return "value" in Ea ? Ea.value : Ea.textContent;
    }
    function Wo(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Mu() {
      return !0;
    }
    function Ys() {
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
        return C ? this.isDefaultPrevented = Mu : this.isDefaultPrevented = Ys, this.isPropagationStopped = Ys, this;
      }
      return Rt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Mu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Mu);
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
        isPersistent: Mu
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
    function Iy(e) {
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
        return "movementX" in e ? e.movementX : (Iy(e), _f);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Qs;
      }
    }), ap = kr(ci), ip = Rt({}, ci, {
      dataTransfer: 0
    }), Fl = kr(ip), op = Rt({}, Pr, {
      relatedTarget: 0
    }), oo = kr(op), _h = Rt({}, Bn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ch = kr(_h), lp = Rt({}, Bn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Cf = kr(lp), By = Rt({}, Bn, {
      data: 0
    }), Eh = kr(By), Rh = Eh, bh = {
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
    function $y(e) {
      if (e.key) {
        var t = bh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Wo(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Vl[e.keyCode] || "Unidentified" : "";
    }
    var Au = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function wh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Au[e];
      return i ? !!a[i] : !1;
    }
    function mn(e) {
      return wh;
    }
    var Wy = Rt({}, Pr, {
      key: $y,
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
    }), Th = kr(Wy), Yy = Rt({}, ci, {
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
    }), xh = kr(Yy), kh = Rt({}, Pr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: mn
    }), Dh = kr(kh), Qy = Rt({}, Bn, {
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
    }), Gy = kr(up), Yo = [9, 13, 27, 32], Gs = 229, lo = An && "CompositionEvent" in window, Qo = null;
    An && "documentMode" in document && (Qo = document.documentMode);
    var sp = An && "TextEvent" in window && !Qo, Ef = An && (!lo || Qo && Qo > 8 && Qo <= 11), Oh = 32, Rf = String.fromCharCode(Oh);
    function qy() {
      dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), dt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), dt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), dt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var cp = !1;
    function Lh(e) {
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
    function wf(e, t) {
      return e === "keydown" && t.keyCode === Gs;
    }
    function fp(e, t) {
      switch (e) {
        case "keyup":
          return Yo.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Gs;
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
    function Nh(e) {
      return e.locale === "ko";
    }
    var Hl = !1;
    function dp(e, t, a, i, l) {
      var s, f;
      if (lo ? s = bf(t) : Hl ? fp(t, i) && (s = "onCompositionEnd") : wf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Ef && !Nh(i) && (!Hl && s === "onCompositionStart" ? Hl = $o(l) : s === "onCompositionEnd" && Hl && (f = io()));
      var p = Fh(a, s);
      if (p.length > 0) {
        var g = new Eh(s, t, null, i, l);
        if (e.push({
          event: g,
          listeners: p
        }), f)
          g.data = f;
        else {
          var C = Tf(i);
          C !== null && (g.data = C);
        }
      }
    }
    function xf(e, t) {
      switch (e) {
        case "compositionend":
          return Tf(t);
        case "keypress":
          var a = t.which;
          return a !== Oh ? null : (cp = !0, Rf);
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
          if (!Lh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Ef && !Nh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function kf(e, t, a, i, l) {
      var s;
      if (sp ? s = xf(t, i) : s = pp(t, i), !s)
        return null;
      var f = Fh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Rh("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Mh(e, t, a, i, l, s, f) {
      dp(e, t, a, i, l), kf(e, t, a, i, l);
    }
    var Ky = {
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
    function qs(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Ky[e.type] : t === "textarea";
    }
    function Xy(e) {
      if (!An)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Ks() {
      dt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Ah(e, t, a, i) {
      yu(i);
      var l = Fh(t, "onChange");
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
      Ah(t, n, e, kd(e)), Yv(u, t);
    }
    function u(e) {
      d_(e, 0);
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
    An && (_ = Xy("input") && (!document.documentMode || document.documentMode > 9));
    function T(e, t) {
      Go = e, n = t, Go.attachEvent("onpropertychange", Y);
    }
    function L() {
      Go && (Go.detachEvent("onpropertychange", Y), Go = null, n = null);
    }
    function Y(e) {
      e.propertyName === "value" && c(n) && o(e);
    }
    function ce(e, t, a) {
      e === "focusin" ? (L(), T(t, a)) : e === "focusout" && L();
    }
    function me(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function ue(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ue(e, t) {
      if (e === "click")
        return c(t);
    }
    function $e(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Qe(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || rt(e, "number", e.value);
    }
    function Nn(e, t, a, i, l, s, f) {
      var p = a ? Af(a) : window, g, C;
      if (r(p) ? g = d : qs(p) ? _ ? g = $e : (g = me, C = ce) : ue(p) && (g = Ue), g) {
        var R = g(t, a);
        if (R) {
          Ah(e, R, i, l);
          return;
        }
      }
      C && C(t, p, a), t === "focusout" && Qe(p);
    }
    function P() {
      Gt("onMouseEnter", ["mouseout", "mouseover"]), Gt("onMouseLeave", ["mouseout", "mouseover"]), Gt("onPointerEnter", ["pointerout", "pointerover"]), Gt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function A(e, t, a, i, l, s, f) {
      var p = t === "mouseover" || t === "pointerover", g = t === "mouseout" || t === "pointerout";
      if (p && !ds(i)) {
        var C = i.relatedTarget || i.fromElement;
        if (C && (Zs(C) || xp(C)))
          return;
      }
      if (!(!g && !p)) {
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
          if (M = a, B = Q ? Zs(Q) : null, B !== null) {
            var Z = ya(B);
            (B !== Z || B.tag !== G && B.tag !== pe) && (B = null);
          }
        } else
          M = null, B = a;
        if (M !== B) {
          var Le = ap, at = "onMouseLeave", Xe = "onMouseEnter", Ut = "mouse";
          (t === "pointerout" || t === "pointerover") && (Le = xh, at = "onPointerLeave", Xe = "onPointerEnter", Ut = "pointer");
          var Ot = M == null ? R : Af(M), F = B == null ? R : Af(B), ee = new Le(at, Ut + "leave", M, i, l);
          ee.target = Ot, ee.relatedTarget = F;
          var V = null, ye = Zs(l);
          if (ye === a) {
            var Pe = new Le(Xe, Ut + "enter", B, i, l);
            Pe.target = F, Pe.relatedTarget = Ot, V = Pe;
          }
          Z2(e, ee, V, M, B);
        }
      }
    }
    function I(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var fe = typeof Object.is == "function" ? Object.is : I;
    function We(e, t) {
      if (fe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!Dr.call(t, s) || !fe(e[s], t[s]))
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
      var s = 0, f = -1, p = -1, g = 0, C = 0, R = e, U = null;
      e: for (; ; ) {
        for (var M = null; R === t && (a === 0 || R.nodeType === Ki) && (f = s + a), R === i && (l === 0 || R.nodeType === Ki) && (p = s + l), R.nodeType === Ki && (s += R.nodeValue.length), (M = R.firstChild) !== null; )
          U = R, R = M;
        for (; ; ) {
          if (R === e)
            break e;
          if (U === t && ++g === a && (f = s), U === i && ++C === l && (p = s), (M = R.nextSibling) !== null)
            break;
          R = U, U = R.parentNode;
        }
        R = M;
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
          var U = a.createRange();
          U.setStart(C.node, C.offset), l.removeAllRanges(), f > p ? (l.addRange(U), l.extend(R.node, R.offset)) : (U.setEnd(R.node, R.offset), l.addRange(U));
        }
      }
    }
    function Uh(e) {
      return e && e.nodeType === Ki;
    }
    function t_(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Uh(e) ? !1 : Uh(t) ? t_(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function U2(e) {
      return e && e.ownerDocument && t_(e.ownerDocument.documentElement, e);
    }
    function j2(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function n_() {
      for (var e = window, t = La(); t instanceof e.HTMLIFrameElement; ) {
        if (j2(t))
          e = t.contentWindow;
        else
          return t;
        t = La(e.document);
      }
      return t;
    }
    function Jy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function z2() {
      var e = n_();
      return {
        focusedElem: e,
        selectionRange: Jy(e) ? F2(e) : null
      };
    }
    function P2(e) {
      var t = n_(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && U2(a)) {
        i !== null && Jy(a) && V2(a, i);
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
    function F2(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = ar(e), t || {
        start: 0,
        end: 0
      };
    }
    function V2(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : qo(e, t);
    }
    var H2 = An && "documentMode" in document && document.documentMode <= 11;
    function I2() {
      dt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Df = null, Zy = null, vp = null, eg = !1;
    function B2(e) {
      if ("selectionStart" in e && Jy(e))
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
    function $2(e) {
      return e.window === e ? e.document : e.nodeType === Xi ? e : e.ownerDocument;
    }
    function r_(e, t, a) {
      var i = $2(a);
      if (!(eg || Df == null || Df !== La(i))) {
        var l = B2(Df);
        if (!vp || !We(vp, l)) {
          vp = l;
          var s = Fh(Zy, "onSelect");
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
    function W2(e, t, a, i, l, s, f) {
      var p = a ? Af(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (qs(p) || p.contentEditable === "true") && (Df = p, Zy = a, vp = null);
          break;
        case "focusout":
          Df = null, Zy = null, vp = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          eg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          eg = !1, r_(e, i, l);
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
          if (H2)
            break;
        // falls through
        case "keydown":
        case "keyup":
          r_(e, i, l);
      }
    }
    function jh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Of = {
      animationend: jh("Animation", "AnimationEnd"),
      animationiteration: jh("Animation", "AnimationIteration"),
      animationstart: jh("Animation", "AnimationStart"),
      transitionend: jh("Transition", "TransitionEnd")
    }, tg = {}, a_ = {};
    An && (a_ = document.createElement("div").style, "AnimationEvent" in window || (delete Of.animationend.animation, delete Of.animationiteration.animation, delete Of.animationstart.animation), "TransitionEvent" in window || delete Of.transitionend.transition);
    function zh(e) {
      if (tg[e])
        return tg[e];
      if (!Of[e])
        return e;
      var t = Of[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in a_)
          return tg[e] = t[a];
      return e;
    }
    var i_ = zh("animationend"), o_ = zh("animationiteration"), l_ = zh("animationstart"), u_ = zh("transitionend"), s_ = /* @__PURE__ */ new Map(), c_ = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Uu(e, t) {
      s_.set(e, t), dt(t, [e]);
    }
    function Y2() {
      for (var e = 0; e < c_.length; e++) {
        var t = c_[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Uu(a, "on" + i);
      }
      Uu(i_, "onAnimationEnd"), Uu(o_, "onAnimationIteration"), Uu(l_, "onAnimationStart"), Uu("dblclick", "onDoubleClick"), Uu("focusin", "onFocus"), Uu("focusout", "onBlur"), Uu(u_, "onTransitionEnd");
    }
    function Q2(e, t, a, i, l, s, f) {
      var p = s_.get(t);
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
            g = Dh;
            break;
          case i_:
          case o_:
          case l_:
            g = Ch;
            break;
          case u_:
            g = Ha;
            break;
          case "scroll":
            g = la;
            break;
          case "wheel":
            g = Gy;
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
            g = xh;
            break;
        }
        var R = (s & Na) !== 0;
        {
          var U = !R && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", M = X2(a, p, i.type, R, U);
          if (M.length > 0) {
            var B = new g(p, C, null, i, l);
            e.push({
              event: B,
              listeners: M
            });
          }
        }
      }
    }
    Y2(), P(), Ks(), I2(), qy();
    function G2(e, t, a, i, l, s, f) {
      Q2(e, t, a, i, l, s);
      var p = (s & xd) === 0;
      p && (A(e, t, a, i, l), Nn(e, t, a, i, l), W2(e, t, a, i, l), Mh(e, t, a, i, l));
    }
    var hp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], ng = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(hp));
    function f_(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, wi(i, t, void 0, e), e.currentTarget = null;
    }
    function q2(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], f = s.instance, p = s.currentTarget, g = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          f_(e, g, p), i = f;
        }
      else
        for (var C = 0; C < t.length; C++) {
          var R = t[C], U = R.instance, M = R.currentTarget, B = R.listener;
          if (U !== i && e.isPropagationStopped())
            return;
          f_(e, B, M), i = U;
        }
    }
    function d_(e, t) {
      for (var a = (t & Na) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, f = l.listeners;
        q2(s, f, a);
      }
      hs();
    }
    function K2(e, t, a, i, l) {
      var s = kd(a), f = [];
      G2(f, e, i, a, s, t), d_(f, t);
    }
    function En(e, t) {
      ng.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = Tb(t), l = eR(e);
      i.has(l) || (p_(t, e, kc, a), i.add(l));
    }
    function rg(e, t, a) {
      ng.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Na), p_(a, e, i, t);
    }
    var Ph = "_reactListening" + Math.random().toString(36).slice(2);
    function mp(e) {
      if (!e[Ph]) {
        e[Ph] = !0, nt.forEach(function(a) {
          a !== "selectionchange" && (ng.has(a) || rg(a, !1, e), rg(a, !0, e));
        });
        var t = e.nodeType === Xi ? e : e.ownerDocument;
        t !== null && (t[Ph] || (t[Ph] = !0, rg("selectionchange", !1, t)));
      }
    }
    function p_(e, t, a, i, l) {
      var s = pr(e, t, a), f = void 0;
      vs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? rp(e, t, s, f) : oa(e, t, s) : f !== void 0 ? Lu(e, t, s, f) : $s(e, t, s);
    }
    function v_(e, t) {
      return e === t || e.nodeType === jn && e.parentNode === t;
    }
    function ag(e, t, a, i, l) {
      var s = i;
      if ((t & Td) === 0 && (t & kc) === 0) {
        var f = l;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var g = p.tag;
            if (g === H || g === q) {
              var C = p.stateNode.containerInfo;
              if (v_(C, f))
                break;
              if (g === q)
                for (var R = p.return; R !== null; ) {
                  var U = R.tag;
                  if (U === H || U === q) {
                    var M = R.stateNode.containerInfo;
                    if (v_(M, f))
                      return;
                  }
                  R = R.return;
                }
              for (; C !== null; ) {
                var B = Zs(C);
                if (B === null)
                  return;
                var Q = B.tag;
                if (Q === G || Q === pe) {
                  p = s = B;
                  continue e;
                }
                C = C.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      Yv(function() {
        return K2(e, t, a, s);
      });
    }
    function yp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function X2(e, t, a, i, l, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, g = [], C = e, R = null; C !== null; ) {
        var U = C, M = U.stateNode, B = U.tag;
        if (B === G && M !== null && (R = M, p !== null)) {
          var Q = No(C, p);
          Q != null && g.push(yp(C, Q, R));
        }
        if (l)
          break;
        C = C.return;
      }
      return g;
    }
    function Fh(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, f = s.stateNode, p = s.tag;
        if (p === G && f !== null) {
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
    function J2(e, t) {
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
    function h_(e, t, a, i, l) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var g = p, C = g.alternate, R = g.stateNode, U = g.tag;
        if (C !== null && C === i)
          break;
        if (U === G && R !== null) {
          var M = R;
          if (l) {
            var B = No(p, s);
            B != null && f.unshift(yp(p, B, M));
          } else if (!l) {
            var Q = No(p, s);
            Q != null && f.push(yp(p, Q, M));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function Z2(e, t, a, i, l) {
      var s = i && l ? J2(i, l) : null;
      i !== null && h_(e, t, i, s, !1), l !== null && a !== null && h_(e, a, l, s, !0);
    }
    function eR(e, t) {
      return e + "__bubble";
    }
    var Ia = !1, gp = "dangerouslySetInnerHTML", Vh = "suppressContentEditableWarning", ju = "suppressHydrationWarning", m_ = "autoFocus", Xs = "children", Js = "style", Hh = "__html", ig, Ih, Sp, y_, Bh, g_, S_;
    ig = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Ih = function(e, t) {
      Rd(e, t), Tc(e, t), Bv(e, t, {
        registrationNameDependencies: Me,
        possibleRegistrationNames: st
      });
    }, g_ = An && !document.documentMode, Sp = function(e, t, a) {
      if (!Ia) {
        var i = $h(a), l = $h(t);
        l !== i && (Ia = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, y_ = function(e) {
      if (!Ia) {
        Ia = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, Bh = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, S_ = function(e, t) {
      var a = e.namespaceURI === qi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var tR = /\r\n?/g, nR = /\u0000|\uFFFD/g;
    function $h(e) {
      Zn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(tR, `
`).replace(nR, "");
    }
    function Wh(e, t, a, i) {
      var l = $h(t), s = $h(e);
      if (s !== l && (i && (Ia || (Ia = !0, y('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && Re))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function __(e) {
      return e.nodeType === Xi ? e : e.ownerDocument;
    }
    function rR() {
    }
    function Yh(e) {
      e.onclick = rR;
    }
    function aR(e, t, a, i, l) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Js)
            f && Object.freeze(f), zv(t, f);
          else if (s === gp) {
            var p = f ? f[Hh] : void 0;
            p != null && wv(t, p);
          } else if (s === Xs)
            if (typeof f == "string") {
              var g = e !== "textarea" || f !== "";
              g && pu(t, f);
            } else typeof f == "number" && pu(t, "" + f);
          else s === Vh || s === ju || s === m_ || (Me.hasOwnProperty(s) ? f != null && (typeof f != "function" && Bh(s, f), s === "onScroll" && En("scroll", t)) : f != null && Or(t, s, f, l));
        }
    }
    function iR(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], f = t[l + 1];
        s === Js ? zv(e, f) : s === gp ? wv(e, f) : s === Xs ? pu(e, f) : Or(e, s, f, i);
      }
    }
    function oR(e, t, a, i) {
      var l, s = __(a), f, p = i;
      if (p === qi && (p = md(e)), p === qi) {
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
        f = s.createElementNS(p, e);
      return p === qi && !l && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Dr.call(ig, e) && (ig[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function lR(e, t) {
      return __(t).createTextNode(e);
    }
    function uR(e, t, a, i) {
      var l = Oo(t, a);
      Ih(t, a);
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
          ai(e, a), s = du(e, a), En("invalid", e);
          break;
        case "option":
          zt(e, a), s = a;
          break;
        case "select":
          hl(e, a), s = is(e, a), En("invalid", e);
          break;
        case "textarea":
          pd(e, a), s = dd(e, a), En("invalid", e);
          break;
        default:
          s = a;
      }
      switch (bc(t, s), aR(t, e, i, s, l), t) {
        case "input":
          ri(e), W(e, a, !1);
          break;
        case "textarea":
          ri(e), Rv(e);
          break;
        case "option":
          sn(e, a);
          break;
        case "select":
          cd(e, a);
          break;
        default:
          typeof s.onClick == "function" && Yh(e);
          break;
      }
    }
    function sR(e, t, a, i, l) {
      Ih(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = du(e, a), p = du(e, i), s = [];
          break;
        case "select":
          f = is(e, a), p = is(e, i), s = [];
          break;
        case "textarea":
          f = dd(e, a), p = dd(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Yh(e);
          break;
      }
      bc(t, p);
      var g, C, R = null;
      for (g in f)
        if (!(p.hasOwnProperty(g) || !f.hasOwnProperty(g) || f[g] == null))
          if (g === Js) {
            var U = f[g];
            for (C in U)
              U.hasOwnProperty(C) && (R || (R = {}), R[C] = "");
          } else g === gp || g === Xs || g === Vh || g === ju || g === m_ || (Me.hasOwnProperty(g) ? s || (s = []) : (s = s || []).push(g, null));
      for (g in p) {
        var M = p[g], B = f?.[g];
        if (!(!p.hasOwnProperty(g) || M === B || M == null && B == null))
          if (g === Js)
            if (M && Object.freeze(M), B) {
              for (C in B)
                B.hasOwnProperty(C) && (!M || !M.hasOwnProperty(C)) && (R || (R = {}), R[C] = "");
              for (C in M)
                M.hasOwnProperty(C) && B[C] !== M[C] && (R || (R = {}), R[C] = M[C]);
            } else
              R || (s || (s = []), s.push(g, R)), R = M;
          else if (g === gp) {
            var Q = M ? M[Hh] : void 0, Z = B ? B[Hh] : void 0;
            Q != null && Z !== Q && (s = s || []).push(g, Q);
          } else g === Xs ? (typeof M == "string" || typeof M == "number") && (s = s || []).push(g, "" + M) : g === Vh || g === ju || (Me.hasOwnProperty(g) ? (M != null && (typeof M != "function" && Bh(g, M), g === "onScroll" && En("scroll", e)), !s && B !== M && (s = [])) : (s = s || []).push(g, M));
      }
      return R && (Ny(R, p[Js]), (s = s || []).push(Js, R)), s;
    }
    function cR(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && S(e, l);
      var s = Oo(a, i), f = Oo(a, l);
      switch (iR(e, t, s, f), a) {
        case "input":
          D(e, l);
          break;
        case "textarea":
          Ev(e, l);
          break;
        case "select":
          Cc(e, l);
          break;
      }
    }
    function fR(e) {
      {
        var t = e.toLowerCase();
        return cs.hasOwnProperty(t) && cs[t] || null;
      }
    }
    function dR(e, t, a, i, l, s, f) {
      var p, g;
      switch (p = Oo(t, a), Ih(t, a), t) {
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
          var Z = a[Q];
          if (Q === Xs)
            typeof Z == "string" ? e.textContent !== Z && (a[ju] !== !0 && Wh(e.textContent, Z, s, f), B = [Xs, Z]) : typeof Z == "number" && e.textContent !== "" + Z && (a[ju] !== !0 && Wh(e.textContent, Z, s, f), B = [Xs, "" + Z]);
          else if (Me.hasOwnProperty(Q))
            Z != null && (typeof Z != "function" && Bh(Q, Z), Q === "onScroll" && En("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var Le = void 0, at = ln(Q);
            if (a[ju] !== !0) {
              if (!(Q === Vh || Q === ju || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Q === "value" || Q === "checked" || Q === "selected")) {
                if (Q === gp) {
                  var Xe = e.innerHTML, Ut = Z ? Z[Hh] : void 0;
                  if (Ut != null) {
                    var Ot = S_(e, Ut);
                    Ot !== Xe && Sp(Q, Xe, Ot);
                  }
                } else if (Q === Js) {
                  if (g.delete(Q), g_) {
                    var F = Oy(Z);
                    Le = e.getAttribute("style"), F !== Le && Sp(Q, Le, F);
                  }
                } else if (p && !j)
                  g.delete(Q.toLowerCase()), Le = ul(e, Q, Z), Z !== Le && Sp(Q, Le, Z);
                else if (!yn(Q, at, p) && !er(Q, Z, at, p)) {
                  var ee = !1;
                  if (at !== null)
                    g.delete(at.attributeName), Le = Co(e, Q, Z, at);
                  else {
                    var V = i;
                    if (V === qi && (V = md(t)), V === qi)
                      g.delete(Q.toLowerCase());
                    else {
                      var ye = fR(Q);
                      ye !== null && ye !== Q && (ee = !0, g.delete(ye)), g.delete(Q);
                    }
                    Le = ul(e, Q, Z);
                  }
                  var Pe = j;
                  !Pe && Z !== Le && !ee && Sp(Q, Le, Z);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      g.size > 0 && a[ju] !== !0 && y_(g), t) {
        case "input":
          ri(e), W(e, a, !0);
          break;
        case "textarea":
          ri(e), Rv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Yh(e);
          break;
      }
      return B;
    }
    function pR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function og(e, t) {
      {
        if (Ia)
          return;
        Ia = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function lg(e, t) {
      {
        if (Ia)
          return;
        Ia = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function ug(e, t, a) {
      {
        if (Ia)
          return;
        Ia = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function sg(e, t) {
      {
        if (t === "" || Ia)
          return;
        Ia = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function vR(e, t, a) {
      switch (t) {
        case "input":
          K(e, a);
          return;
        case "textarea":
          Ty(e, a);
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
      var hR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], C_ = [
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
      ], mR = C_.concat(["button"]), yR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], E_ = {
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
        var a = Rt({}, e || E_), i = {
          tag: t
        };
        return C_.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), mR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), hR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var gR = function(e, t) {
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
            return yR.indexOf(t) === -1;
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
      }, SR = function(e, t) {
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
      }, R_ = {};
      _p = function(e, t, a) {
        a = a || E_;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = gR(e, l) ? null : i, f = s ? null : SR(e, a), p = s || f;
        if (p) {
          var g = p.tag, C = !!s + "|" + e + "|" + g;
          if (!R_[C]) {
            R_[C] = !0;
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
    var Qh = "suppressHydrationWarning", Gh = "$", qh = "/$", Ep = "$?", Rp = "$!", _R = "style", cg = null, fg = null;
    function CR(e) {
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
    function ER(e, t, a) {
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
    function RR(e) {
      cg = In(), fg = z2();
      var t = null;
      return Xn(!1), t;
    }
    function bR(e) {
      P2(fg), Xn(cg), cg = null, fg = null;
    }
    function wR(e, t, a, i, l) {
      var s;
      {
        var f = i;
        if (_p(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, g = Cp(f.ancestorInfo, e);
          _p(null, p, g);
        }
        s = f.namespace;
      }
      var C = oR(e, t, a, s);
      return Tp(l, C), Sg(C, t), C;
    }
    function TR(e, t) {
      e.appendChild(t);
    }
    function xR(e, t, a, i, l) {
      switch (uR(e, t, a, i), t) {
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
    function kR(e, t, a, i, l, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, g = Cp(f.ancestorInfo, t);
          _p(null, p, g);
        }
      }
      return sR(e, t, a, i);
    }
    function dg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function DR(e, t, a, i) {
      {
        var l = a;
        _p(null, e, l.ancestorInfo);
      }
      var s = lR(e, t);
      return Tp(i, s), s;
    }
    function OR() {
      var e = window.event;
      return e === void 0 ? Pa : gf(e.type);
    }
    var pg = typeof setTimeout == "function" ? setTimeout : void 0, LR = typeof clearTimeout == "function" ? clearTimeout : void 0, vg = -1, b_ = typeof Promise == "function" ? Promise : void 0, NR = typeof queueMicrotask == "function" ? queueMicrotask : typeof b_ < "u" ? function(e) {
      return b_.resolve(null).then(e).catch(MR);
    } : pg;
    function MR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function AR(e, t, a, i) {
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
    function UR(e, t, a, i, l, s) {
      cR(e, t, a, i, l), Sg(e, l);
    }
    function w_(e) {
      pu(e, "");
    }
    function jR(e, t, a) {
      e.nodeValue = a;
    }
    function zR(e, t) {
      e.appendChild(t);
    }
    function PR(e, t) {
      var a;
      e.nodeType === jn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Yh(a);
    }
    function FR(e, t, a) {
      e.insertBefore(t, a);
    }
    function VR(e, t, a) {
      e.nodeType === jn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function HR(e, t) {
      e.removeChild(t);
    }
    function IR(e, t) {
      e.nodeType === jn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function hg(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === jn) {
          var s = l.data;
          if (s === qh)
            if (i === 0) {
              e.removeChild(l), jl(t);
              return;
            } else
              i--;
          else (s === Gh || s === Ep || s === Rp) && i++;
        }
        a = l;
      } while (a);
      jl(t);
    }
    function BR(e, t) {
      e.nodeType === jn ? hg(e.parentNode, t) : e.nodeType === Xr && hg(e, t), jl(e);
    }
    function $R(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function WR(e) {
      e.nodeValue = "";
    }
    function YR(e, t) {
      e = e;
      var a = t[_R], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Rc("display", i);
    }
    function QR(e, t) {
      e.nodeValue = t;
    }
    function GR(e) {
      e.nodeType === Xr ? e.textContent = "" : e.nodeType === Xi && e.documentElement && e.removeChild(e.documentElement);
    }
    function qR(e, t, a) {
      return e.nodeType !== Xr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function KR(e, t) {
      return t === "" || e.nodeType !== Ki ? null : e;
    }
    function XR(e) {
      return e.nodeType !== jn ? null : e;
    }
    function T_(e) {
      return e.data === Ep;
    }
    function mg(e) {
      return e.data === Rp;
    }
    function JR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function ZR(e, t) {
      e._reactRetry = t;
    }
    function Kh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Xr || t === Ki)
          break;
        if (t === jn) {
          var a = e.data;
          if (a === Gh || a === Rp || a === Ep)
            break;
          if (a === qh)
            return null;
        }
      }
      return e;
    }
    function bp(e) {
      return Kh(e.nextSibling);
    }
    function eb(e) {
      return Kh(e.firstChild);
    }
    function tb(e) {
      return Kh(e.firstChild);
    }
    function nb(e) {
      return Kh(e.nextSibling);
    }
    function rb(e, t, a, i, l, s, f) {
      Tp(s, e), Sg(e, a);
      var p;
      {
        var g = l;
        p = g.namespace;
      }
      var C = (s.mode & xt) !== tt;
      return dR(e, t, a, p, i, C, f);
    }
    function ab(e, t, a, i) {
      return Tp(a, e), a.mode & xt, pR(e, t);
    }
    function ib(e, t) {
      Tp(t, e);
    }
    function ob(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === jn) {
          var i = t.data;
          if (i === qh) {
            if (a === 0)
              return bp(t);
            a--;
          } else (i === Gh || i === Rp || i === Ep) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function x_(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === jn) {
          var i = t.data;
          if (i === Gh || i === Rp || i === Ep) {
            if (a === 0)
              return t;
            a--;
          } else i === qh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function lb(e) {
      jl(e);
    }
    function ub(e) {
      jl(e);
    }
    function sb(e) {
      return e !== "head" && e !== "body";
    }
    function cb(e, t, a, i) {
      var l = !0;
      Wh(t.nodeValue, a, i, l);
    }
    function fb(e, t, a, i, l, s) {
      if (t[Qh] !== !0) {
        var f = !0;
        Wh(i.nodeValue, l, s, f);
      }
    }
    function db(e, t) {
      t.nodeType === Xr ? og(e, t) : t.nodeType === jn || lg(e, t);
    }
    function pb(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Xr ? og(a, t) : t.nodeType === jn || lg(a, t));
      }
    }
    function vb(e, t, a, i, l) {
      (l || t[Qh] !== !0) && (i.nodeType === Xr ? og(a, i) : i.nodeType === jn || lg(a, i));
    }
    function hb(e, t, a) {
      ug(e, t);
    }
    function mb(e, t) {
      sg(e, t);
    }
    function yb(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && ug(i, t);
      }
    }
    function gb(e, t) {
      {
        var a = e.parentNode;
        a !== null && sg(a, t);
      }
    }
    function Sb(e, t, a, i, l, s) {
      (s || t[Qh] !== !0) && ug(a, i);
    }
    function _b(e, t, a, i, l) {
      (l || t[Qh] !== !0) && sg(a, i);
    }
    function Cb(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Eb(e) {
      mp(e);
    }
    var Nf = Math.random().toString(36).slice(2), Mf = "__reactFiber$" + Nf, yg = "__reactProps$" + Nf, wp = "__reactContainer$" + Nf, gg = "__reactEvents$" + Nf, Rb = "__reactListeners$" + Nf, bb = "__reactHandles$" + Nf;
    function wb(e) {
      delete e[Mf], delete e[yg], delete e[gg], delete e[Rb], delete e[bb];
    }
    function Tp(e, t) {
      t[Mf] = e;
    }
    function Xh(e, t) {
      t[wp] = e;
    }
    function k_(e) {
      e[wp] = null;
    }
    function xp(e) {
      return !!e[wp];
    }
    function Zs(e) {
      var t = e[Mf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[wp] || a[Mf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = x_(e); l !== null; ) {
              var s = l[Mf];
              if (s)
                return s;
              l = x_(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function zu(e) {
      var t = e[Mf] || e[wp];
      return t && (t.tag === G || t.tag === pe || t.tag === he || t.tag === H) ? t : null;
    }
    function Af(e) {
      if (e.tag === G || e.tag === pe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Jh(e) {
      return e[yg] || null;
    }
    function Sg(e, t) {
      e[yg] = t;
    }
    function Tb(e) {
      var t = e[gg];
      return t === void 0 && (t = e[gg] = /* @__PURE__ */ new Set()), t;
    }
    var D_ = {}, O_ = v.ReactDebugCurrentFrame;
    function Zh(e) {
      if (e) {
        var t = e._owner, a = Yi(e.type, e._source, t ? t.type : null);
        O_.setExtraStackFrame(a);
      } else
        O_.setExtraStackFrame(null);
    }
    function uo(e, t, a, i, l) {
      {
        var s = Function.call.bind(Dr);
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
            p && !(p instanceof Error) && (Zh(l), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Zh(null)), p instanceof Error && !(p.message in D_) && (D_[p.message] = !0, Zh(l), y("Failed %s type: %s", a, p.message), Zh(null));
          }
      }
    }
    var _g = [], em;
    em = [];
    var Il = -1;
    function Pu(e) {
      return {
        current: e
      };
    }
    function ua(e, t) {
      if (Il < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== em[Il] && y("Unexpected Fiber popped."), e.current = _g[Il], _g[Il] = null, em[Il] = null, Il--;
    }
    function sa(e, t, a) {
      Il++, _g[Il] = e.current, em[Il] = a, e.current = t;
    }
    var Cg;
    Cg = {};
    var fi = {};
    Object.freeze(fi);
    var Bl = Pu(fi), Ko = Pu(!1), Eg = fi;
    function Uf(e, t, a) {
      return a && Xo(t) ? Eg : Bl.current;
    }
    function L_(e, t, a) {
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
        return l && L_(e, t, s), s;
      }
    }
    function tm() {
      return Ko.current;
    }
    function Xo(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function nm(e) {
      ua(Ko, e), ua(Bl, e);
    }
    function Rg(e) {
      ua(Ko, e), ua(Bl, e);
    }
    function N_(e, t, a) {
      {
        if (Bl.current !== fi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        sa(Bl, t, e), sa(Ko, a, e);
      }
    }
    function M_(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = ht(e) || "Unknown";
            Cg[s] || (Cg[s] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
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
    function rm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || fi;
        return Eg = Bl.current, sa(Bl, a, e), sa(Ko, Ko.current, e), !0;
      }
    }
    function A_(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = M_(e, t, Eg);
          i.__reactInternalMemoizedMergedChildContext = l, ua(Ko, e), ua(Bl, e), sa(Bl, l, e), sa(Ko, a, e);
        } else
          ua(Ko, e), sa(Ko, a, e);
      }
    }
    function xb(e) {
      {
        if (!El(e) || e.tag !== w)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case H:
              return t.stateNode.context;
            case w: {
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
    var Fu = 0, am = 1, $l = null, bg = !1, wg = !1;
    function U_(e) {
      $l === null ? $l = [e] : $l.push(e);
    }
    function kb(e) {
      bg = !0, U_(e);
    }
    function j_() {
      bg && Vu();
    }
    function Vu() {
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
          throw $l !== null && ($l = $l.slice(e + 1)), Od(gs, Vu), s;
        } finally {
          Hn(t), wg = !1;
        }
      }
      return null;
    }
    var zf = [], Pf = 0, im = null, om = 0, ji = [], zi = 0, ec = null, Wl = 1, Yl = "";
    function Db(e) {
      return nc(), (e.flags & Ti) !== et;
    }
    function Ob(e) {
      return nc(), om;
    }
    function Lb() {
      var e = Yl, t = Wl, a = t & ~Nb(t);
      return a.toString(32) + e;
    }
    function tc(e, t) {
      nc(), zf[Pf++] = om, zf[Pf++] = im, im = e, om = t;
    }
    function z_(e, t, a) {
      nc(), ji[zi++] = Wl, ji[zi++] = Yl, ji[zi++] = ec, ec = e;
      var i = Wl, l = Yl, s = lm(i) - 1, f = i & ~(1 << s), p = a + 1, g = lm(t) + s;
      if (g > 30) {
        var C = s - s % 5, R = (1 << C) - 1, U = (f & R).toString(32), M = f >> C, B = s - C, Q = lm(t) + B, Z = p << B, Le = Z | M, at = U + l;
        Wl = 1 << Q | Le, Yl = at;
      } else {
        var Xe = p << s, Ut = Xe | f, Ot = l;
        Wl = 1 << g | Ut, Yl = Ot;
      }
    }
    function Tg(e) {
      nc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        tc(e, a), z_(e, a, i);
      }
    }
    function lm(e) {
      return 32 - Fn(e);
    }
    function Nb(e) {
      return 1 << lm(e) - 1;
    }
    function xg(e) {
      for (; e === im; )
        im = zf[--Pf], zf[Pf] = null, om = zf[--Pf], zf[Pf] = null;
      for (; e === ec; )
        ec = ji[--zi], ji[zi] = null, Yl = ji[--zi], ji[zi] = null, Wl = ji[--zi], ji[zi] = null;
    }
    function Mb() {
      return nc(), ec !== null ? {
        id: Wl,
        overflow: Yl
      } : null;
    }
    function Ab(e, t) {
      nc(), ji[zi++] = Wl, ji[zi++] = Yl, ji[zi++] = ec, Wl = t.id, Yl = t.overflow, ec = e;
    }
    function nc() {
      Vr() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Fr = null, Pi = null, so = !1, rc = !1, Hu = null;
    function Ub() {
      so && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function P_() {
      rc = !0;
    }
    function jb() {
      return rc;
    }
    function zb(e) {
      var t = e.stateNode.containerInfo;
      return Pi = tb(t), Fr = e, so = !0, Hu = null, rc = !1, !0;
    }
    function Pb(e, t, a) {
      return Pi = nb(t), Fr = e, so = !0, Hu = null, rc = !1, a !== null && Ab(e, a), !0;
    }
    function F_(e, t) {
      switch (e.tag) {
        case H: {
          db(e.stateNode.containerInfo, t);
          break;
        }
        case G: {
          var a = (e.mode & xt) !== tt;
          vb(
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
          i.dehydrated !== null && pb(i.dehydrated, t);
          break;
        }
      }
    }
    function V_(e, t) {
      F_(e, t);
      var a = Ix();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ma) : i.push(a);
    }
    function kg(e, t) {
      {
        if (rc)
          return;
        switch (e.tag) {
          case H: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case G:
                var i = t.type;
                t.pendingProps, hb(a, i);
                break;
              case pe:
                var l = t.pendingProps;
                mb(a, l);
                break;
            }
            break;
          }
          case G: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case G: {
                var g = t.type, C = t.pendingProps, R = (e.mode & xt) !== tt;
                Sb(
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
              case pe: {
                var U = t.pendingProps, M = (e.mode & xt) !== tt;
                _b(
                  s,
                  f,
                  p,
                  U,
                  // TODO: Delete this argument when we remove the legacy root API.
                  M
                );
                break;
              }
            }
            break;
          }
          case he: {
            var B = e.memoizedState, Q = B.dehydrated;
            if (Q !== null) switch (t.tag) {
              case G:
                var Z = t.type;
                t.pendingProps, yb(Q, Z);
                break;
              case pe:
                var Le = t.pendingProps;
                gb(Q, Le);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function H_(e, t) {
      t.flags = t.flags & ~Zr | Sn, kg(e, t);
    }
    function I_(e, t) {
      switch (e.tag) {
        case G: {
          var a = e.type;
          e.pendingProps;
          var i = qR(t, a);
          return i !== null ? (e.stateNode = i, Fr = e, Pi = eb(i), !0) : !1;
        }
        case pe: {
          var l = e.pendingProps, s = KR(t, l);
          return s !== null ? (e.stateNode = s, Fr = e, Pi = null, !0) : !1;
        }
        case he: {
          var f = XR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: Mb(),
              retryLane: ra
            };
            e.memoizedState = p;
            var g = Bx(f);
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
    function Og(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Lg(e) {
      if (so) {
        var t = Pi;
        if (!t) {
          Dg(e) && (kg(Fr, e), Og()), H_(Fr, e), so = !1, Fr = e;
          return;
        }
        var a = t;
        if (!I_(e, t)) {
          Dg(e) && (kg(Fr, e), Og()), t = bp(a);
          var i = Fr;
          if (!t || !I_(e, t)) {
            H_(Fr, e), so = !1, Fr = e;
            return;
          }
          V_(i, a);
        }
      }
    }
    function Fb(e, t, a) {
      var i = e.stateNode, l = !rc, s = rb(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function Vb(e) {
      var t = e.stateNode, a = e.memoizedProps, i = ab(t, a, e);
      if (i) {
        var l = Fr;
        if (l !== null)
          switch (l.tag) {
            case H: {
              var s = l.stateNode.containerInfo, f = (l.mode & xt) !== tt;
              cb(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case G: {
              var p = l.type, g = l.memoizedProps, C = l.stateNode, R = (l.mode & xt) !== tt;
              fb(
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
    function Hb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      ib(a, e);
    }
    function Ib(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return ob(a);
    }
    function B_(e) {
      for (var t = e.return; t !== null && t.tag !== G && t.tag !== H && t.tag !== he; )
        t = t.return;
      Fr = t;
    }
    function um(e) {
      if (e !== Fr)
        return !1;
      if (!so)
        return B_(e), so = !0, !1;
      if (e.tag !== H && (e.tag !== G || sb(e.type) && !dg(e.type, e.memoizedProps))) {
        var t = Pi;
        if (t)
          if (Dg(e))
            $_(e), Og();
          else
            for (; t; )
              V_(e, t), t = bp(t);
      }
      return B_(e), e.tag === he ? Pi = Ib(e) : Pi = Fr ? bp(e.stateNode) : null, !0;
    }
    function Bb() {
      return so && Pi !== null;
    }
    function $_(e) {
      for (var t = Pi; t; )
        F_(e, t), t = bp(t);
    }
    function Ff() {
      Fr = null, Pi = null, so = !1, rc = !1;
    }
    function W_() {
      Hu !== null && (PC(Hu), Hu = null);
    }
    function Vr() {
      return so;
    }
    function Ng(e) {
      Hu === null ? Hu = [e] : Hu.push(e);
    }
    var $b = v.ReactCurrentBatchConfig, Wb = null;
    function Yb() {
      return $b.transition;
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
      var Qb = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & en && (t = a), a = a.return;
        return t;
      }, ac = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, kp = [], Dp = [], Op = [], Lp = [], Np = [], Mp = [], ic = /* @__PURE__ */ new Set();
      co.recordUnsafeLifecycleWarnings = function(e, t) {
        ic.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && kp.push(e), e.mode & en && typeof t.UNSAFE_componentWillMount == "function" && Dp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Op.push(e), e.mode & en && typeof t.UNSAFE_componentWillReceiveProps == "function" && Lp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Np.push(e), e.mode & en && typeof t.UNSAFE_componentWillUpdate == "function" && Mp.push(e));
      }, co.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        kp.length > 0 && (kp.forEach(function(M) {
          e.add(ht(M) || "Component"), ic.add(M.type);
        }), kp = []);
        var t = /* @__PURE__ */ new Set();
        Dp.length > 0 && (Dp.forEach(function(M) {
          t.add(ht(M) || "Component"), ic.add(M.type);
        }), Dp = []);
        var a = /* @__PURE__ */ new Set();
        Op.length > 0 && (Op.forEach(function(M) {
          a.add(ht(M) || "Component"), ic.add(M.type);
        }), Op = []);
        var i = /* @__PURE__ */ new Set();
        Lp.length > 0 && (Lp.forEach(function(M) {
          i.add(ht(M) || "Component"), ic.add(M.type);
        }), Lp = []);
        var l = /* @__PURE__ */ new Set();
        Np.length > 0 && (Np.forEach(function(M) {
          l.add(ht(M) || "Component"), ic.add(M.type);
        }), Np = []);
        var s = /* @__PURE__ */ new Set();
        if (Mp.length > 0 && (Mp.forEach(function(M) {
          s.add(ht(M) || "Component"), ic.add(M.type);
        }), Mp = []), t.size > 0) {
          var f = ac(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = ac(i);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var g = ac(s);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, g);
        }
        if (e.size > 0) {
          var C = ac(e);
          b(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (a.size > 0) {
          var R = ac(a);
          b(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (l.size > 0) {
          var U = ac(l);
          b(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, U);
        }
      };
      var sm = /* @__PURE__ */ new Map(), Y_ = /* @__PURE__ */ new Set();
      co.recordLegacyContextWarning = function(e, t) {
        var a = Qb(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!Y_.has(e.type)) {
          var i = sm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], sm.set(a, i)), i.push(e));
        }
      }, co.flushLegacyContextWarning = function() {
        sm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(ht(s) || "Component"), Y_.add(s.type);
            });
            var l = ac(i);
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
        kp = [], Dp = [], Op = [], Lp = [], Np = [], Mp = [], sm = /* @__PURE__ */ new Map();
      };
    }
    var Mg, Ag, Ug, jg, zg, Q_ = function(e, t) {
    };
    Mg = !1, Ag = !1, Ug = {}, jg = {}, zg = {}, Q_ = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = ht(t) || "Component";
        jg[a] || (jg[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Gb(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Ap(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & en || J) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== w) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Gb(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var l = ht(e) || "Component";
          Ug[l] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, i), Ug[l] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== w)
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
    function cm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function fm(e) {
      {
        var t = ht(e) || "Component";
        if (zg[t])
          return;
        zg[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function G_(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function q_(e) {
      function t(F, ee) {
        if (e) {
          var V = F.deletions;
          V === null ? (F.deletions = [ee], F.flags |= Ma) : V.push(ee);
        }
      }
      function a(F, ee) {
        if (!e)
          return null;
        for (var V = ee; V !== null; )
          t(F, V), V = V.sibling;
        return null;
      }
      function i(F, ee) {
        for (var V = /* @__PURE__ */ new Map(), ye = ee; ye !== null; )
          ye.key !== null ? V.set(ye.key, ye) : V.set(ye.index, ye), ye = ye.sibling;
        return V;
      }
      function l(F, ee) {
        var V = vc(F, ee);
        return V.index = 0, V.sibling = null, V;
      }
      function s(F, ee, V) {
        if (F.index = V, !e)
          return F.flags |= Ti, ee;
        var ye = F.alternate;
        if (ye !== null) {
          var Pe = ye.index;
          return Pe < ee ? (F.flags |= Sn, ee) : Pe;
        } else
          return F.flags |= Sn, ee;
      }
      function f(F) {
        return e && F.alternate === null && (F.flags |= Sn), F;
      }
      function p(F, ee, V, ye) {
        if (ee === null || ee.tag !== pe) {
          var Pe = NS(V, F.mode, ye);
          return Pe.return = F, Pe;
        } else {
          var Ae = l(ee, V);
          return Ae.return = F, Ae;
        }
      }
      function g(F, ee, V, ye) {
        var Pe = V.type;
        if (Pe === mi)
          return R(F, ee, V.props.children, ye, V.key);
        if (ee !== null && (ee.elementType === Pe || // Keep this check inline so it only runs on the false path:
        eE(ee, V) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Pe == "object" && Pe !== null && Pe.$$typeof === yt && G_(Pe) === ee.type)) {
          var Ae = l(ee, V.props);
          return Ae.ref = Ap(F, ee, V), Ae.return = F, Ae._debugSource = V._source, Ae._debugOwner = V._owner, Ae;
        }
        var ft = LS(V, F.mode, ye);
        return ft.ref = Ap(F, ee, V), ft.return = F, ft;
      }
      function C(F, ee, V, ye) {
        if (ee === null || ee.tag !== q || ee.stateNode.containerInfo !== V.containerInfo || ee.stateNode.implementation !== V.implementation) {
          var Pe = MS(V, F.mode, ye);
          return Pe.return = F, Pe;
        } else {
          var Ae = l(ee, V.children || []);
          return Ae.return = F, Ae;
        }
      }
      function R(F, ee, V, ye, Pe) {
        if (ee === null || ee.tag !== ae) {
          var Ae = Ju(V, F.mode, ye, Pe);
          return Ae.return = F, Ae;
        } else {
          var ft = l(ee, V);
          return ft.return = F, ft;
        }
      }
      function U(F, ee, V) {
        if (typeof ee == "string" && ee !== "" || typeof ee == "number") {
          var ye = NS("" + ee, F.mode, V);
          return ye.return = F, ye;
        }
        if (typeof ee == "object" && ee !== null) {
          switch (ee.$$typeof) {
            case Lr: {
              var Pe = LS(ee, F.mode, V);
              return Pe.ref = Ap(F, null, ee), Pe.return = F, Pe;
            }
            case lr: {
              var Ae = MS(ee, F.mode, V);
              return Ae.return = F, Ae;
            }
            case yt: {
              var ft = ee._payload, St = ee._init;
              return U(F, St(ft), V);
            }
          }
          if (wt(ee) || Ct(ee)) {
            var nn = Ju(ee, F.mode, V, null);
            return nn.return = F, nn;
          }
          cm(F, ee);
        }
        return typeof ee == "function" && fm(F), null;
      }
      function M(F, ee, V, ye) {
        var Pe = ee !== null ? ee.key : null;
        if (typeof V == "string" && V !== "" || typeof V == "number")
          return Pe !== null ? null : p(F, ee, "" + V, ye);
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case Lr:
              return V.key === Pe ? g(F, ee, V, ye) : null;
            case lr:
              return V.key === Pe ? C(F, ee, V, ye) : null;
            case yt: {
              var Ae = V._payload, ft = V._init;
              return M(F, ee, ft(Ae), ye);
            }
          }
          if (wt(V) || Ct(V))
            return Pe !== null ? null : R(F, ee, V, ye, null);
          cm(F, V);
        }
        return typeof V == "function" && fm(F), null;
      }
      function B(F, ee, V, ye, Pe) {
        if (typeof ye == "string" && ye !== "" || typeof ye == "number") {
          var Ae = F.get(V) || null;
          return p(ee, Ae, "" + ye, Pe);
        }
        if (typeof ye == "object" && ye !== null) {
          switch (ye.$$typeof) {
            case Lr: {
              var ft = F.get(ye.key === null ? V : ye.key) || null;
              return g(ee, ft, ye, Pe);
            }
            case lr: {
              var St = F.get(ye.key === null ? V : ye.key) || null;
              return C(ee, St, ye, Pe);
            }
            case yt:
              var nn = ye._payload, Bt = ye._init;
              return B(F, ee, V, Bt(nn), Pe);
          }
          if (wt(ye) || Ct(ye)) {
            var Jn = F.get(V) || null;
            return R(ee, Jn, ye, Pe, null);
          }
          cm(ee, ye);
        }
        return typeof ye == "function" && fm(ee), null;
      }
      function Q(F, ee, V) {
        {
          if (typeof F != "object" || F === null)
            return ee;
          switch (F.$$typeof) {
            case Lr:
            case lr:
              Q_(F, V);
              var ye = F.key;
              if (typeof ye != "string")
                break;
              if (ee === null) {
                ee = /* @__PURE__ */ new Set(), ee.add(ye);
                break;
              }
              if (!ee.has(ye)) {
                ee.add(ye);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ye);
              break;
            case yt:
              var Pe = F._payload, Ae = F._init;
              Q(Ae(Pe), ee, V);
              break;
          }
        }
        return ee;
      }
      function Z(F, ee, V, ye) {
        for (var Pe = null, Ae = 0; Ae < V.length; Ae++) {
          var ft = V[Ae];
          Pe = Q(ft, Pe, F);
        }
        for (var St = null, nn = null, Bt = ee, Jn = 0, $t = 0, $n = null; Bt !== null && $t < V.length; $t++) {
          Bt.index > $t ? ($n = Bt, Bt = null) : $n = Bt.sibling;
          var fa = M(F, Bt, V[$t], ye);
          if (fa === null) {
            Bt === null && (Bt = $n);
            break;
          }
          e && Bt && fa.alternate === null && t(F, Bt), Jn = s(fa, Jn, $t), nn === null ? St = fa : nn.sibling = fa, nn = fa, Bt = $n;
        }
        if ($t === V.length) {
          if (a(F, Bt), Vr()) {
            var Qr = $t;
            tc(F, Qr);
          }
          return St;
        }
        if (Bt === null) {
          for (; $t < V.length; $t++) {
            var pi = U(F, V[$t], ye);
            pi !== null && (Jn = s(pi, Jn, $t), nn === null ? St = pi : nn.sibling = pi, nn = pi);
          }
          if (Vr()) {
            var Ta = $t;
            tc(F, Ta);
          }
          return St;
        }
        for (var xa = i(F, Bt); $t < V.length; $t++) {
          var da = B(xa, F, $t, V[$t], ye);
          da !== null && (e && da.alternate !== null && xa.delete(da.key === null ? $t : da.key), Jn = s(da, Jn, $t), nn === null ? St = da : nn.sibling = da, nn = da);
        }
        if (e && xa.forEach(function(ad) {
          return t(F, ad);
        }), Vr()) {
          var Zl = $t;
          tc(F, Zl);
        }
        return St;
      }
      function Le(F, ee, V, ye) {
        var Pe = Ct(V);
        if (typeof Pe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          V[Symbol.toStringTag] === "Generator" && (Ag || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Ag = !0), V.entries === Pe && (Mg || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Mg = !0);
          var Ae = Pe.call(V);
          if (Ae)
            for (var ft = null, St = Ae.next(); !St.done; St = Ae.next()) {
              var nn = St.value;
              ft = Q(nn, ft, F);
            }
        }
        var Bt = Pe.call(V);
        if (Bt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Jn = null, $t = null, $n = ee, fa = 0, Qr = 0, pi = null, Ta = Bt.next(); $n !== null && !Ta.done; Qr++, Ta = Bt.next()) {
          $n.index > Qr ? (pi = $n, $n = null) : pi = $n.sibling;
          var xa = M(F, $n, Ta.value, ye);
          if (xa === null) {
            $n === null && ($n = pi);
            break;
          }
          e && $n && xa.alternate === null && t(F, $n), fa = s(xa, fa, Qr), $t === null ? Jn = xa : $t.sibling = xa, $t = xa, $n = pi;
        }
        if (Ta.done) {
          if (a(F, $n), Vr()) {
            var da = Qr;
            tc(F, da);
          }
          return Jn;
        }
        if ($n === null) {
          for (; !Ta.done; Qr++, Ta = Bt.next()) {
            var Zl = U(F, Ta.value, ye);
            Zl !== null && (fa = s(Zl, fa, Qr), $t === null ? Jn = Zl : $t.sibling = Zl, $t = Zl);
          }
          if (Vr()) {
            var ad = Qr;
            tc(F, ad);
          }
          return Jn;
        }
        for (var dv = i(F, $n); !Ta.done; Qr++, Ta = Bt.next()) {
          var il = B(dv, F, Qr, Ta.value, ye);
          il !== null && (e && il.alternate !== null && dv.delete(il.key === null ? Qr : il.key), fa = s(il, fa, Qr), $t === null ? Jn = il : $t.sibling = il, $t = il);
        }
        if (e && dv.forEach(function(_k) {
          return t(F, _k);
        }), Vr()) {
          var Sk = Qr;
          tc(F, Sk);
        }
        return Jn;
      }
      function at(F, ee, V, ye) {
        if (ee !== null && ee.tag === pe) {
          a(F, ee.sibling);
          var Pe = l(ee, V);
          return Pe.return = F, Pe;
        }
        a(F, ee);
        var Ae = NS(V, F.mode, ye);
        return Ae.return = F, Ae;
      }
      function Xe(F, ee, V, ye) {
        for (var Pe = V.key, Ae = ee; Ae !== null; ) {
          if (Ae.key === Pe) {
            var ft = V.type;
            if (ft === mi) {
              if (Ae.tag === ae) {
                a(F, Ae.sibling);
                var St = l(Ae, V.props.children);
                return St.return = F, St._debugSource = V._source, St._debugOwner = V._owner, St;
              }
            } else if (Ae.elementType === ft || // Keep this check inline so it only runs on the false path:
            eE(Ae, V) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ft == "object" && ft !== null && ft.$$typeof === yt && G_(ft) === Ae.type) {
              a(F, Ae.sibling);
              var nn = l(Ae, V.props);
              return nn.ref = Ap(F, Ae, V), nn.return = F, nn._debugSource = V._source, nn._debugOwner = V._owner, nn;
            }
            a(F, Ae);
            break;
          } else
            t(F, Ae);
          Ae = Ae.sibling;
        }
        if (V.type === mi) {
          var Bt = Ju(V.props.children, F.mode, ye, V.key);
          return Bt.return = F, Bt;
        } else {
          var Jn = LS(V, F.mode, ye);
          return Jn.ref = Ap(F, ee, V), Jn.return = F, Jn;
        }
      }
      function Ut(F, ee, V, ye) {
        for (var Pe = V.key, Ae = ee; Ae !== null; ) {
          if (Ae.key === Pe)
            if (Ae.tag === q && Ae.stateNode.containerInfo === V.containerInfo && Ae.stateNode.implementation === V.implementation) {
              a(F, Ae.sibling);
              var ft = l(Ae, V.children || []);
              return ft.return = F, ft;
            } else {
              a(F, Ae);
              break;
            }
          else
            t(F, Ae);
          Ae = Ae.sibling;
        }
        var St = MS(V, F.mode, ye);
        return St.return = F, St;
      }
      function Ot(F, ee, V, ye) {
        var Pe = typeof V == "object" && V !== null && V.type === mi && V.key === null;
        if (Pe && (V = V.props.children), typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case Lr:
              return f(Xe(F, ee, V, ye));
            case lr:
              return f(Ut(F, ee, V, ye));
            case yt:
              var Ae = V._payload, ft = V._init;
              return Ot(F, ee, ft(Ae), ye);
          }
          if (wt(V))
            return Z(F, ee, V, ye);
          if (Ct(V))
            return Le(F, ee, V, ye);
          cm(F, V);
        }
        return typeof V == "string" && V !== "" || typeof V == "number" ? f(at(F, ee, "" + V, ye)) : (typeof V == "function" && fm(F), a(F, ee));
      }
      return Ot;
    }
    var Vf = q_(!0), K_ = q_(!1);
    function qb(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = vc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = vc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Kb(e, t) {
      for (var a = e.child; a !== null; )
        zx(a, t), a = a.sibling;
    }
    var Pg = Pu(null), Fg;
    Fg = {};
    var dm = null, Hf = null, Vg = null, pm = !1;
    function vm() {
      dm = null, Hf = null, Vg = null, pm = !1;
    }
    function X_() {
      pm = !0;
    }
    function J_() {
      pm = !1;
    }
    function Z_(e, t, a) {
      sa(Pg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Fg && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Fg;
    }
    function Hg(e, t) {
      var a = Pg.current;
      ua(Pg, t), e._currentValue = a;
    }
    function Ig(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (Ul(i.childLanes, t) ? l !== null && !Ul(l.childLanes, t) && (l.childLanes = Et(l.childLanes, t)) : (i.childLanes = Et(i.childLanes, t), l !== null && (l.childLanes = Et(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Xb(e, t, a) {
      Jb(e, t, a);
    }
    function Jb(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, s = i.dependencies;
        if (s !== null) {
          l = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === w) {
                var p = Ns(a), g = Ql(an, p);
                g.tag = mm;
                var C = i.updateQueue;
                if (C !== null) {
                  var R = C.shared, U = R.pending;
                  U === null ? g.next = g : (g.next = U.next, U.next = g), R.pending = g;
                }
              }
              i.lanes = Et(i.lanes, a);
              var M = i.alternate;
              M !== null && (M.lanes = Et(M.lanes, a)), Ig(i.return, a, e), s.lanes = Et(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === ve)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === it) {
          var B = i.return;
          if (B === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          B.lanes = Et(B.lanes, a);
          var Q = B.alternate;
          Q !== null && (Q.lanes = Et(Q.lanes, a)), Ig(B, a, e), l = i.sibling;
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
            var Z = l.sibling;
            if (Z !== null) {
              Z.return = l.return, l = Z;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function If(e, t) {
      dm = e, Hf = null, Vg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (aa(a.lanes, t) && qp(), a.firstContext = null);
      }
    }
    function ir(e) {
      pm && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Vg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Hf === null) {
          if (dm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Hf = a, dm.dependencies = {
            lanes: oe,
            firstContext: a
          };
        } else
          Hf = Hf.next = a;
      }
      return t;
    }
    var oc = null;
    function Bg(e) {
      oc === null ? oc = [e] : oc.push(e);
    }
    function Zb() {
      if (oc !== null) {
        for (var e = 0; e < oc.length; e++) {
          var t = oc[e], a = t.interleaved;
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
        oc = null;
      }
    }
    function e1(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Bg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, hm(e, i);
    }
    function ew(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, Bg(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function tw(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Bg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, hm(e, i);
    }
    function Ba(e, t) {
      return hm(e, t);
    }
    var nw = hm;
    function hm(e, t) {
      e.lanes = Et(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Et(a.lanes, t)), a === null && (e.flags & (Sn | Zr)) !== et && KC(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = Et(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = Et(a.childLanes, t) : (l.flags & (Sn | Zr)) !== et && KC(e), i = l, l = l.return;
      if (i.tag === H) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var t1 = 0, n1 = 1, mm = 2, $g = 3, ym = !1, Wg, gm;
    Wg = !1, gm = null;
    function Yg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: oe
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function r1(e, t) {
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
        tag: t1,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Iu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (gm === l && !Wg && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Wg = !0), ex()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, nw(e, a);
      } else
        return tw(e, l, t, a);
    }
    function Sm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (Qd(a)) {
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
    function rw(e, t, a, i, l, s) {
      switch (a.tag) {
        case n1: {
          var f = a.payload;
          if (typeof f == "function") {
            X_();
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
              J_();
            }
            return p;
          }
          return f;
        }
        case $g:
          e.flags = e.flags & ~tr | Je;
        // Intentional fallthrough
        case t1: {
          var g = a.payload, C;
          if (typeof g == "function") {
            X_(), C = g.call(s, i, l);
            {
              if (e.mode & en) {
                _n(!0);
                try {
                  g.call(s, i, l);
                } finally {
                  _n(!1);
                }
              }
              J_();
            }
          } else
            C = g;
          return C == null ? i : Rt({}, i, C);
        }
        case mm:
          return ym = !0, i;
      }
      return i;
    }
    function _m(e, t, a, i) {
      var l = e.updateQueue;
      ym = !1, gm = l.shared;
      var s = l.firstBaseUpdate, f = l.lastBaseUpdate, p = l.shared.pending;
      if (p !== null) {
        l.shared.pending = null;
        var g = p, C = g.next;
        g.next = null, f === null ? s = C : f.next = C, f = g;
        var R = e.alternate;
        if (R !== null) {
          var U = R.updateQueue, M = U.lastBaseUpdate;
          M !== f && (M === null ? U.firstBaseUpdate = C : M.next = C, U.lastBaseUpdate = g);
        }
      }
      if (s !== null) {
        var B = l.baseState, Q = oe, Z = null, Le = null, at = null, Xe = s;
        do {
          var Ut = Xe.lane, Ot = Xe.eventTime;
          if (Ul(i, Ut)) {
            if (at !== null) {
              var ee = {
                eventTime: Ot,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Pt,
                tag: Xe.tag,
                payload: Xe.payload,
                callback: Xe.callback,
                next: null
              };
              at = at.next = ee;
            }
            B = rw(e, l, Xe, B, t, a);
            var V = Xe.callback;
            if (V !== null && // If the update was already committed, we should not queue its
            // callback again.
            Xe.lane !== Pt) {
              e.flags |= cn;
              var ye = l.effects;
              ye === null ? l.effects = [Xe] : ye.push(Xe);
            }
          } else {
            var F = {
              eventTime: Ot,
              lane: Ut,
              tag: Xe.tag,
              payload: Xe.payload,
              callback: Xe.callback,
              next: null
            };
            at === null ? (Le = at = F, Z = B) : at = at.next = F, Q = Et(Q, Ut);
          }
          if (Xe = Xe.next, Xe === null) {
            if (p = l.shared.pending, p === null)
              break;
            var Pe = p, Ae = Pe.next;
            Pe.next = null, Xe = Ae, l.lastBaseUpdate = Pe, l.shared.pending = null;
          }
        } while (!0);
        at === null && (Z = B), l.baseState = Z, l.firstBaseUpdate = Le, l.lastBaseUpdate = at;
        var ft = l.shared.interleaved;
        if (ft !== null) {
          var St = ft;
          do
            Q = Et(Q, St.lane), St = St.next;
          while (St !== ft);
        } else s === null && (l.shared.lanes = oe);
        lv(Q), e.lanes = Q, e.memoizedState = B;
      }
      gm = null;
    }
    function aw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function a1() {
      ym = !1;
    }
    function Cm() {
      return ym;
    }
    function i1(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], f = s.callback;
          f !== null && (s.callback = null, aw(f, a));
        }
    }
    var Up = {}, Bu = Pu(Up), jp = Pu(Up), Em = Pu(Up);
    function Rm(e) {
      if (e === Up)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function o1() {
      var e = Rm(Em.current);
      return e;
    }
    function Gg(e, t) {
      sa(Em, t, e), sa(jp, e, e), sa(Bu, Up, e);
      var a = CR(t);
      ua(Bu, e), sa(Bu, a, e);
    }
    function Bf(e) {
      ua(Bu, e), ua(jp, e), ua(Em, e);
    }
    function qg() {
      var e = Rm(Bu.current);
      return e;
    }
    function l1(e) {
      Rm(Em.current);
      var t = Rm(Bu.current), a = ER(t, e.type);
      t !== a && (sa(jp, e, e), sa(Bu, a, e));
    }
    function Kg(e) {
      jp.current === e && (ua(Bu, e), ua(jp, e));
    }
    var iw = 0, u1 = 1, s1 = 1, zp = 2, fo = Pu(iw);
    function Xg(e, t) {
      return (e & t) !== 0;
    }
    function $f(e) {
      return e & u1;
    }
    function Jg(e, t) {
      return e & u1 | t;
    }
    function ow(e, t) {
      return e | t;
    }
    function $u(e, t) {
      sa(fo, t, e);
    }
    function Wf(e) {
      ua(fo, e);
    }
    function lw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function bm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === he) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || T_(i) || mg(i))
              return t;
          }
        } else if (t.tag === ge && // revealOrder undefined can't be trusted because it don't
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
    ), Zg = [];
    function e0() {
      for (var e = 0; e < Zg.length; e++) {
        var t = Zg[e];
        t._workInProgressVersionPrimary = null;
      }
      Zg.length = 0;
    }
    function uw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var je = v.ReactCurrentDispatcher, Pp = v.ReactCurrentBatchConfig, t0, Yf;
    t0 = /* @__PURE__ */ new Set();
    var lc = oe, tn = null, mr = null, yr = null, wm = !1, Fp = !1, Vp = 0, sw = 0, cw = 25, re = null, Fi = null, Wu = -1, n0 = !1;
    function Qt() {
      {
        var e = re;
        Fi === null ? Fi = [e] : Fi.push(e);
      }
    }
    function Te() {
      {
        var e = re;
        Fi !== null && (Wu++, Fi[Wu] !== e && fw(e));
      }
    }
    function Qf(e) {
      e != null && !wt(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", re, typeof e);
    }
    function fw(e) {
      {
        var t = ht(tn);
        if (!t0.has(t) && (t0.add(t), Fi !== null)) {
          for (var a = "", i = 30, l = 0; l <= Wu; l++) {
            for (var s = Fi[l], f = l === Wu ? e : s, p = l + 1 + ". " + s; p.length < i; )
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
    function r0(e, t) {
      if (n0)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", re), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, re, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!fe(e[a], t[a]))
          return !1;
      return !0;
    }
    function Gf(e, t, a, i, l, s) {
      lc = s, tn = t, Fi = e !== null ? e._debugHookTypes : null, Wu = -1, n0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = oe, e !== null && e.memoizedState !== null ? je.current = L1 : Fi !== null ? je.current = O1 : je.current = D1;
      var f = a(i, l);
      if (Fp) {
        var p = 0;
        do {
          if (Fp = !1, Vp = 0, p >= cw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, n0 = !1, mr = null, yr = null, t.updateQueue = null, Wu = -1, je.current = N1, f = a(i, l);
        } while (Fp);
      }
      je.current = Pm, t._debugHookTypes = Fi;
      var g = mr !== null && mr.next !== null;
      if (lc = oe, tn = null, mr = null, yr = null, re = null, Fi = null, Wu = -1, e !== null && (e.flags & Pn) !== (t.flags & Pn) && // Disable this warning in legacy mode, because legacy Suspense is weird
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
    function c1(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ht) !== tt ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Ms(e.lanes, a);
    }
    function f1() {
      if (je.current = Pm, wm) {
        for (var e = tn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        wm = !1;
      }
      lc = oe, tn = null, mr = null, yr = null, Fi = null, Wu = -1, re = null, b1 = !1, Fp = !1, Vp = 0;
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
    function d1() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function a0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function i0(e, t, a) {
      var i = Zo(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var s = {
        pending: null,
        interleaved: null,
        lanes: oe,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = s;
      var f = s.dispatch = hw.bind(null, tn, s);
      return [i.memoizedState, f];
    }
    function o0(e, t, a) {
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
        var R = f.next, U = s.baseState, M = null, B = null, Q = null, Z = R;
        do {
          var Le = Z.lane;
          if (Ul(lc, Le)) {
            if (Q !== null) {
              var Xe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Pt,
                action: Z.action,
                hasEagerState: Z.hasEagerState,
                eagerState: Z.eagerState,
                next: null
              };
              Q = Q.next = Xe;
            }
            if (Z.hasEagerState)
              U = Z.eagerState;
            else {
              var Ut = Z.action;
              U = e(U, Ut);
            }
          } else {
            var at = {
              lane: Le,
              action: Z.action,
              hasEagerState: Z.hasEagerState,
              eagerState: Z.eagerState,
              next: null
            };
            Q === null ? (B = Q = at, M = U) : Q = Q.next = at, tn.lanes = Et(tn.lanes, Le), lv(Le);
          }
          Z = Z.next;
        } while (Z !== null && Z !== R);
        Q === null ? M = U : Q.next = B, fe(U, i.memoizedState) || qp(), i.memoizedState = U, i.baseState = M, i.baseQueue = Q, l.lastRenderedState = U;
      }
      var Ot = l.interleaved;
      if (Ot !== null) {
        var F = Ot;
        do {
          var ee = F.lane;
          tn.lanes = Et(tn.lanes, ee), lv(ee), F = F.next;
        } while (F !== Ot);
      } else f === null && (l.lanes = oe);
      var V = l.dispatch;
      return [i.memoizedState, V];
    }
    function l0(e, t, a) {
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
        fe(p, i.memoizedState) || qp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), l.lastRenderedState = p;
      }
      return [p, s];
    }
    function m3(e, t, a) {
    }
    function y3(e, t, a) {
    }
    function u0(e, t, a) {
      var i = tn, l = Zo(), s, f = Vr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Yf || s !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), Yf = !0);
      } else {
        if (s = t(), !Yf) {
          var p = t();
          fe(s, p) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Yf = !0);
        }
        var g = ry();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        df(g, lc) || p1(i, t, s);
      }
      l.memoizedState = s;
      var C = {
        value: s,
        getSnapshot: t
      };
      return l.queue = C, Om(h1.bind(null, i, C, e), [e]), i.flags |= Jr, Hp(vr | Hr, v1.bind(null, i, C, s, t), void 0, null), s;
    }
    function Tm(e, t, a) {
      var i = tn, l = Vi(), s = t();
      if (!Yf) {
        var f = t();
        fe(s, f) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Yf = !0);
      }
      var p = l.memoizedState, g = !fe(p, s);
      g && (l.memoizedState = s, qp());
      var C = l.queue;
      if (Bp(h1.bind(null, i, C, e), [e]), C.getSnapshot !== t || g || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      yr !== null && yr.memoizedState.tag & vr) {
        i.flags |= Jr, Hp(vr | Hr, v1.bind(null, i, C, s, t), void 0, null);
        var R = ry();
        if (R === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        df(R, lc) || p1(i, t, s);
      }
      return s;
    }
    function p1(e, t, a) {
      e.flags |= Eu;
      var i = {
        getSnapshot: t,
        value: a
      }, l = tn.updateQueue;
      if (l === null)
        l = d1(), tn.updateQueue = l, l.stores = [i];
      else {
        var s = l.stores;
        s === null ? l.stores = [i] : s.push(i);
      }
    }
    function v1(e, t, a, i) {
      t.value = a, t.getSnapshot = i, m1(t) && y1(e);
    }
    function h1(e, t, a) {
      var i = function() {
        m1(t) && y1(e);
      };
      return a(i);
    }
    function m1(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !fe(a, i);
      } catch {
        return !0;
      }
    }
    function y1(e) {
      var t = Ba(e, ct);
      t !== null && Cr(t, e, ct, an);
    }
    function xm(e) {
      var t = Zo();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: oe,
        dispatch: null,
        lastRenderedReducer: a0,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = mw.bind(null, tn, a);
      return [t.memoizedState, i];
    }
    function s0(e) {
      return o0(a0);
    }
    function c0(e) {
      return l0(a0);
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
        s = d1(), tn.updateQueue = s, s.lastEffect = l.next = l;
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
    function f0(e) {
      var t = Zo();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function km(e) {
      var t = Vi();
      return t.memoizedState;
    }
    function Ip(e, t, a, i) {
      var l = Zo(), s = i === void 0 ? null : i;
      tn.flags |= e, l.memoizedState = Hp(vr | t, a, void 0, s);
    }
    function Dm(e, t, a, i) {
      var l = Vi(), s = i === void 0 ? null : i, f = void 0;
      if (mr !== null) {
        var p = mr.memoizedState;
        if (f = p.destroy, s !== null) {
          var g = p.deps;
          if (r0(s, g)) {
            l.memoizedState = Hp(t, a, f, s);
            return;
          }
        }
      }
      tn.flags |= e, l.memoizedState = Hp(vr | t, a, f, s);
    }
    function Om(e, t) {
      return (tn.mode & Ht) !== tt ? Ip(xi | Jr | Pc, Hr, e, t) : Ip(Jr | Pc, Hr, e, t);
    }
    function Bp(e, t) {
      return Dm(Jr, Hr, e, t);
    }
    function d0(e, t) {
      return Ip(Nt, Jo, e, t);
    }
    function Lm(e, t) {
      return Dm(Nt, Jo, e, t);
    }
    function p0(e, t) {
      var a = Nt;
      return a |= Zi, (tn.mode & Ht) !== tt && (a |= Ao), Ip(a, hr, e, t);
    }
    function Nm(e, t) {
      return Dm(Nt, hr, e, t);
    }
    function g1(e, t) {
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
    function v0(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = Nt;
      return l |= Zi, (tn.mode & Ht) !== tt && (l |= Ao), Ip(l, hr, g1.bind(null, t, e), i);
    }
    function Mm(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Dm(Nt, hr, g1.bind(null, t, e), i);
    }
    function dw(e, t) {
    }
    var Am = dw;
    function h0(e, t) {
      var a = Zo(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Um(e, t) {
      var a = Vi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (r0(i, s))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function m0(e, t) {
      var a = Zo(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function jm(e, t) {
      var a = Vi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (r0(i, s))
          return l[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function y0(e) {
      var t = Zo();
      return t.memoizedState = e, e;
    }
    function S1(e) {
      var t = Vi(), a = mr, i = a.memoizedState;
      return C1(t, i, e);
    }
    function _1(e) {
      var t = Vi();
      if (mr === null)
        return t.memoizedState = e, e;
      var a = mr.memoizedState;
      return C1(t, a, e);
    }
    function C1(e, t, a) {
      var i = !Wd(lc);
      if (i) {
        if (!fe(a, t)) {
          var l = Gd();
          tn.lanes = Et(tn.lanes, l), lv(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, qp()), e.memoizedState = a, a;
    }
    function pw(e, t, a) {
      var i = Va();
      Hn(ph(i, Li)), e(!0);
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
    function g0() {
      var e = xm(!1), t = e[0], a = e[1], i = pw.bind(null, a), l = Zo();
      return l.memoizedState = i, [t, i];
    }
    function E1() {
      var e = s0(), t = e[0], a = Vi(), i = a.memoizedState;
      return [t, i];
    }
    function R1() {
      var e = c0(), t = e[0], a = Vi(), i = a.memoizedState;
      return [t, i];
    }
    var b1 = !1;
    function vw() {
      return b1;
    }
    function S0() {
      var e = Zo(), t = ry(), a = t.identifierPrefix, i;
      if (Vr()) {
        var l = Lb();
        i = ":" + a + "R" + l;
        var s = Vp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = sw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function zm() {
      var e = Vi(), t = e.memoizedState;
      return t;
    }
    function hw(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ku(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (w1(e))
        T1(t, l);
      else {
        var s = e1(e, t, l, i);
        if (s !== null) {
          var f = wa();
          Cr(s, e, i, f), x1(s, t, i);
        }
      }
      k1(e, i);
    }
    function mw(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ku(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (w1(e))
        T1(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === oe && (s === null || s.lanes === oe)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = je.current, je.current = po;
            try {
              var g = t.lastRenderedState, C = f(g, a);
              if (l.hasEagerState = !0, l.eagerState = C, fe(C, g)) {
                ew(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              je.current = p;
            }
          }
        }
        var R = e1(e, t, l, i);
        if (R !== null) {
          var U = wa();
          Cr(R, e, i, U), x1(R, t, i);
        }
      }
      k1(e, i);
    }
    function w1(e) {
      var t = e.alternate;
      return e === tn || t !== null && t === tn;
    }
    function T1(e, t) {
      Fp = wm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function x1(e, t, a) {
      if (Qd(a)) {
        var i = t.lanes;
        i = qd(i, e.pendingLanes);
        var l = Et(i, a);
        t.lanes = l, vf(e, l);
      }
    }
    function k1(e, t, a) {
      Rs(e, t);
    }
    var Pm = {
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
      unstable_isNewReconciler: ne
    }, D1 = null, O1 = null, L1 = null, N1 = null, el = null, po = null, Fm = null;
    {
      var _0 = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, gt = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      D1 = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", Qt(), Qf(t), h0(e, t);
        },
        useContext: function(e) {
          return re = "useContext", Qt(), ir(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", Qt(), Qf(t), Om(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", Qt(), Qf(a), v0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", Qt(), Qf(t), d0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", Qt(), Qf(t), p0(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", Qt(), Qf(t);
          var a = je.current;
          je.current = el;
          try {
            return m0(e, t);
          } finally {
            je.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", Qt();
          var i = je.current;
          je.current = el;
          try {
            return i0(e, t, a);
          } finally {
            je.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", Qt(), f0(e);
        },
        useState: function(e) {
          re = "useState", Qt();
          var t = je.current;
          je.current = el;
          try {
            return xm(e);
          } finally {
            je.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", Qt(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Qt(), y0(e);
        },
        useTransition: function() {
          return re = "useTransition", Qt(), g0();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", Qt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", Qt(), u0(e, t, a);
        },
        useId: function() {
          return re = "useId", Qt(), S0();
        },
        unstable_isNewReconciler: ne
      }, O1 = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", Te(), h0(e, t);
        },
        useContext: function(e) {
          return re = "useContext", Te(), ir(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", Te(), Om(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", Te(), v0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", Te(), d0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", Te(), p0(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", Te();
          var a = je.current;
          je.current = el;
          try {
            return m0(e, t);
          } finally {
            je.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", Te();
          var i = je.current;
          je.current = el;
          try {
            return i0(e, t, a);
          } finally {
            je.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", Te(), f0(e);
        },
        useState: function(e) {
          re = "useState", Te();
          var t = je.current;
          je.current = el;
          try {
            return xm(e);
          } finally {
            je.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", Te(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Te(), y0(e);
        },
        useTransition: function() {
          return re = "useTransition", Te(), g0();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", Te(), u0(e, t, a);
        },
        useId: function() {
          return re = "useId", Te(), S0();
        },
        unstable_isNewReconciler: ne
      }, L1 = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", Te(), Um(e, t);
        },
        useContext: function(e) {
          return re = "useContext", Te(), ir(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", Te(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", Te(), Mm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", Te(), Lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", Te(), Nm(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", Te();
          var a = je.current;
          je.current = po;
          try {
            return jm(e, t);
          } finally {
            je.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", Te();
          var i = je.current;
          je.current = po;
          try {
            return o0(e, t, a);
          } finally {
            je.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", Te(), km();
        },
        useState: function(e) {
          re = "useState", Te();
          var t = je.current;
          je.current = po;
          try {
            return s0(e);
          } finally {
            je.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", Te(), Am();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Te(), S1(e);
        },
        useTransition: function() {
          return re = "useTransition", Te(), E1();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", Te(), Tm(e, t);
        },
        useId: function() {
          return re = "useId", Te(), zm();
        },
        unstable_isNewReconciler: ne
      }, N1 = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", Te(), Um(e, t);
        },
        useContext: function(e) {
          return re = "useContext", Te(), ir(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", Te(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", Te(), Mm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", Te(), Lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", Te(), Nm(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", Te();
          var a = je.current;
          je.current = Fm;
          try {
            return jm(e, t);
          } finally {
            je.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", Te();
          var i = je.current;
          je.current = Fm;
          try {
            return l0(e, t, a);
          } finally {
            je.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", Te(), km();
        },
        useState: function(e) {
          re = "useState", Te();
          var t = je.current;
          je.current = Fm;
          try {
            return c0(e);
          } finally {
            je.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", Te(), Am();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Te(), _1(e);
        },
        useTransition: function() {
          return re = "useTransition", Te(), R1();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", Te(), Tm(e, t);
        },
        useId: function() {
          return re = "useId", Te(), zm();
        },
        unstable_isNewReconciler: ne
      }, el = {
        readContext: function(e) {
          return _0(), ir(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", gt(), Qt(), h0(e, t);
        },
        useContext: function(e) {
          return re = "useContext", gt(), Qt(), ir(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", gt(), Qt(), Om(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", gt(), Qt(), v0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", gt(), Qt(), d0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", gt(), Qt(), p0(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", gt(), Qt();
          var a = je.current;
          je.current = el;
          try {
            return m0(e, t);
          } finally {
            je.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", gt(), Qt();
          var i = je.current;
          je.current = el;
          try {
            return i0(e, t, a);
          } finally {
            je.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", gt(), Qt(), f0(e);
        },
        useState: function(e) {
          re = "useState", gt(), Qt();
          var t = je.current;
          je.current = el;
          try {
            return xm(e);
          } finally {
            je.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", gt(), Qt(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", gt(), Qt(), y0(e);
        },
        useTransition: function() {
          return re = "useTransition", gt(), Qt(), g0();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", gt(), Qt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", gt(), Qt(), u0(e, t, a);
        },
        useId: function() {
          return re = "useId", gt(), Qt(), S0();
        },
        unstable_isNewReconciler: ne
      }, po = {
        readContext: function(e) {
          return _0(), ir(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", gt(), Te(), Um(e, t);
        },
        useContext: function(e) {
          return re = "useContext", gt(), Te(), ir(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", gt(), Te(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", gt(), Te(), Mm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", gt(), Te(), Lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", gt(), Te(), Nm(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", gt(), Te();
          var a = je.current;
          je.current = po;
          try {
            return jm(e, t);
          } finally {
            je.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", gt(), Te();
          var i = je.current;
          je.current = po;
          try {
            return o0(e, t, a);
          } finally {
            je.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", gt(), Te(), km();
        },
        useState: function(e) {
          re = "useState", gt(), Te();
          var t = je.current;
          je.current = po;
          try {
            return s0(e);
          } finally {
            je.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", gt(), Te(), Am();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", gt(), Te(), S1(e);
        },
        useTransition: function() {
          return re = "useTransition", gt(), Te(), E1();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", gt(), Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", gt(), Te(), Tm(e, t);
        },
        useId: function() {
          return re = "useId", gt(), Te(), zm();
        },
        unstable_isNewReconciler: ne
      }, Fm = {
        readContext: function(e) {
          return _0(), ir(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", gt(), Te(), Um(e, t);
        },
        useContext: function(e) {
          return re = "useContext", gt(), Te(), ir(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", gt(), Te(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", gt(), Te(), Mm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", gt(), Te(), Lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", gt(), Te(), Nm(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", gt(), Te();
          var a = je.current;
          je.current = po;
          try {
            return jm(e, t);
          } finally {
            je.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", gt(), Te();
          var i = je.current;
          je.current = po;
          try {
            return l0(e, t, a);
          } finally {
            je.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", gt(), Te(), km();
        },
        useState: function(e) {
          re = "useState", gt(), Te();
          var t = je.current;
          je.current = po;
          try {
            return c0(e);
          } finally {
            je.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", gt(), Te(), Am();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", gt(), Te(), _1(e);
        },
        useTransition: function() {
          return re = "useTransition", gt(), Te(), R1();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", gt(), Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", gt(), Te(), Tm(e, t);
        },
        useId: function() {
          return re = "useId", gt(), Te(), zm();
        },
        unstable_isNewReconciler: ne
      };
    }
    var Yu = m.unstable_now, M1 = 0, Vm = -1, $p = -1, Hm = -1, C0 = !1, Im = !1;
    function A1() {
      return C0;
    }
    function yw() {
      Im = !0;
    }
    function gw() {
      C0 = !1, Im = !1;
    }
    function Sw() {
      C0 = Im, Im = !1;
    }
    function U1() {
      return M1;
    }
    function j1() {
      M1 = Yu();
    }
    function E0(e) {
      $p = Yu(), e.actualStartTime < 0 && (e.actualStartTime = Yu());
    }
    function z1(e) {
      $p = -1;
    }
    function Bm(e, t) {
      if ($p >= 0) {
        var a = Yu() - $p;
        e.actualDuration += a, t && (e.selfBaseDuration = a), $p = -1;
      }
    }
    function tl(e) {
      if (Vm >= 0) {
        var t = Yu() - Vm;
        Vm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case H:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Ee:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function R0(e) {
      if (Hm >= 0) {
        var t = Yu() - Hm;
        Hm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case H:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Ee:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function nl() {
      Vm = Yu();
    }
    function b0() {
      Hm = Yu();
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
    var T0 = {}, x0, k0, D0, O0, L0, P1, $m, N0, M0, A0, Wp;
    {
      x0 = /* @__PURE__ */ new Set(), k0 = /* @__PURE__ */ new Set(), D0 = /* @__PURE__ */ new Set(), O0 = /* @__PURE__ */ new Set(), N0 = /* @__PURE__ */ new Set(), L0 = /* @__PURE__ */ new Set(), M0 = /* @__PURE__ */ new Set(), A0 = /* @__PURE__ */ new Set(), Wp = /* @__PURE__ */ new Set();
      var F1 = /* @__PURE__ */ new Set();
      $m = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          F1.has(a) || (F1.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, P1 = function(e, t) {
        if (t === void 0) {
          var a = jt(e) || "Component";
          L0.has(a) || (L0.add(a), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(T0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(T0);
    }
    function U0(e, t, a, i) {
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
        P1(t, s);
      }
      var f = s == null ? l : Rt({}, l, s);
      if (e.memoizedState = f, e.lanes === oe) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var j0 = {
      isMounted: Xv,
      enqueueSetState: function(e, t, a) {
        var i = Cu(e), l = wa(), s = Ku(i), f = Ql(l, s);
        f.payload = t, a != null && ($m(a, "setState"), f.callback = a);
        var p = Iu(i, f, s);
        p !== null && (Cr(p, i, s, l), Sm(p, i, s)), Rs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Cu(e), l = wa(), s = Ku(i), f = Ql(l, s);
        f.tag = n1, f.payload = t, a != null && ($m(a, "replaceState"), f.callback = a);
        var p = Iu(i, f, s);
        p !== null && (Cr(p, i, s, l), Sm(p, i, s)), Rs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Cu(e), i = wa(), l = Ku(a), s = Ql(i, l);
        s.tag = mm, t != null && ($m(t, "forceUpdate"), s.callback = t);
        var f = Iu(a, s, l);
        f !== null && (Cr(f, a, l, i), Sm(f, a, l)), Wc(a, l);
      }
    };
    function V1(e, t, a, i, l, s, f) {
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
      return t.prototype && t.prototype.isPureReactComponent ? !We(a, i) || !We(l, s) : !0;
    }
    function _w(e, t, a) {
      var i = e.stateNode;
      {
        var l = jt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), t.childContextTypes && !Wp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & en) === tt && (Wp.add(t), y(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), t.contextTypes && !Wp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & en) === tt && (Wp.add(t), y(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !M0.has(t) && (M0.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", jt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var f = i.props !== a;
        i.props !== void 0 && f && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !D0.has(t) && (D0.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", jt(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var p = i.state;
        p && (typeof p != "object" || wt(p)) && y("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function H1(e, t) {
      t.updater = j0, e.stateNode = t, Cl(t, e), t._reactInternalInstance = T0;
    }
    function I1(e, t, a) {
      var i = !1, l = fi, s = fi, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === O && f._context === void 0
        );
        if (!p && !A0.has(t)) {
          A0.add(t);
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
      H1(e, R);
      {
        if (typeof t.getDerivedStateFromProps == "function" && U === null) {
          var M = jt(t) || "Component";
          k0.has(M) || (k0.add(M), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", M, R.state === null ? "null" : "undefined", M));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof R.getSnapshotBeforeUpdate == "function") {
          var B = null, Q = null, Z = null;
          if (typeof R.componentWillMount == "function" && R.componentWillMount.__suppressDeprecationWarning !== !0 ? B = "componentWillMount" : typeof R.UNSAFE_componentWillMount == "function" && (B = "UNSAFE_componentWillMount"), typeof R.componentWillReceiveProps == "function" && R.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Q = "componentWillReceiveProps" : typeof R.UNSAFE_componentWillReceiveProps == "function" && (Q = "UNSAFE_componentWillReceiveProps"), typeof R.componentWillUpdate == "function" && R.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Z = "componentWillUpdate" : typeof R.UNSAFE_componentWillUpdate == "function" && (Z = "UNSAFE_componentWillUpdate"), B !== null || Q !== null || Z !== null) {
            var Le = jt(t) || "Component", at = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            O0.has(Le) || (O0.add(Le), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Le, at, B !== null ? `
  ` + B : "", Q !== null ? `
  ` + Q : "", Z !== null ? `
  ` + Z : ""));
          }
        }
      }
      return i && L_(e, l, s), R;
    }
    function Cw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ht(e) || "Component"), j0.enqueueReplaceState(t, t.state, null));
    }
    function B1(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var s = ht(e) || "Component";
          x0.has(s) || (x0.add(s), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        j0.enqueueReplaceState(t, t.state, null);
      }
    }
    function z0(e, t, a, i) {
      _w(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = {}, Yg(e);
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
          N0.has(p) || (N0.add(p), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & en && co.recordLegacyContextWarning(e, l), co.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var g = t.getDerivedStateFromProps;
      if (typeof g == "function" && (U0(e, t, g, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (Cw(e, l), _m(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var C = Nt;
        C |= Zi, (e.mode & Ht) !== tt && (C |= Ao), e.flags |= C;
      }
    }
    function Ew(e, t, a, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var f = l.context, p = t.contextType, g = fi;
      if (typeof p == "object" && p !== null)
        g = ir(p);
      else {
        var C = Uf(e, t, !0);
        g = jf(e, C);
      }
      var R = t.getDerivedStateFromProps, U = typeof R == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !U && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || f !== g) && B1(e, l, a, g), a1();
      var M = e.memoizedState, B = l.state = M;
      if (_m(e, a, l, i), B = e.memoizedState, s === a && M === B && !tm() && !Cm()) {
        if (typeof l.componentDidMount == "function") {
          var Q = Nt;
          Q |= Zi, (e.mode & Ht) !== tt && (Q |= Ao), e.flags |= Q;
        }
        return !1;
      }
      typeof R == "function" && (U0(e, t, R, a), B = e.memoizedState);
      var Z = Cm() || V1(e, t, s, a, M, B, g);
      if (Z) {
        if (!U && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var Le = Nt;
          Le |= Zi, (e.mode & Ht) !== tt && (Le |= Ao), e.flags |= Le;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var at = Nt;
          at |= Zi, (e.mode & Ht) !== tt && (at |= Ao), e.flags |= at;
        }
        e.memoizedProps = a, e.memoizedState = B;
      }
      return l.props = a, l.state = B, l.context = g, Z;
    }
    function Rw(e, t, a, i, l) {
      var s = t.stateNode;
      r1(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : vo(t.type, f);
      s.props = p;
      var g = t.pendingProps, C = s.context, R = a.contextType, U = fi;
      if (typeof R == "object" && R !== null)
        U = ir(R);
      else {
        var M = Uf(t, a, !0);
        U = jf(t, M);
      }
      var B = a.getDerivedStateFromProps, Q = typeof B == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !Q && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== g || C !== U) && B1(t, s, i, U), a1();
      var Z = t.memoizedState, Le = s.state = Z;
      if (_m(t, i, s, l), Le = t.memoizedState, f === g && Z === Le && !tm() && !Cm() && !Ne)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= Nt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= qn), !1;
      typeof B == "function" && (U0(t, a, B, i), Le = t.memoizedState);
      var at = Cm() || V1(t, a, p, i, Z, Le, U) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ne;
      return at ? (!Q && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Le, U), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Le, U)), typeof s.componentDidUpdate == "function" && (t.flags |= Nt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= qn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= Nt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= qn), t.memoizedProps = i, t.memoizedState = Le), s.props = i, s.state = Le, s.context = U, at;
    }
    function uc(e, t) {
      return {
        value: e,
        source: t,
        stack: Qi(t),
        digest: null
      };
    }
    function P0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function bw(e, t) {
      return !0;
    }
    function F0(e, t) {
      try {
        var a = bw(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === w)
            return;
          console.error(i);
        }
        var p = l ? ht(l) : null, g = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", C;
        if (e.tag === H)
          C = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var R = ht(e) || "Anonymous";
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
    var ww = typeof WeakMap == "function" ? WeakMap : Map;
    function $1(e, t, a) {
      var i = Ql(an, a);
      i.tag = $g, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        yx(l), F0(e, t);
      }, i;
    }
    function V0(e, t, a) {
      var i = Ql(an, a);
      i.tag = $g;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        i.payload = function() {
          return l(s);
        }, i.callback = function() {
          tE(e), F0(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        tE(e), F0(e, t), typeof l != "function" && hx(this);
        var g = t.value, C = t.stack;
        this.componentDidCatch(g, {
          componentStack: C !== null ? C : ""
        }), typeof l != "function" && (aa(e.lanes, ct) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ht(e) || "Unknown"));
      }), i;
    }
    function W1(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new ww(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = gx.bind(null, e, t, a);
        na && uv(e, a), t.then(s, s);
      }
    }
    function Tw(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function xw(e, t) {
      var a = e.tag;
      if ((e.mode & xt) === tt && (a === x || a === Se || a === Fe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function Y1(e) {
      var t = e;
      do {
        if (t.tag === he && lw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function Q1(e, t, a, i, l) {
      if ((e.mode & xt) === tt) {
        if (e === t)
          e.flags |= tr;
        else {
          if (e.flags |= Je, a.flags |= zc, a.flags &= -52805, a.tag === w) {
            var s = a.alternate;
            if (s === null)
              a.tag = qe;
            else {
              var f = Ql(an, ct);
              f.tag = mm, Iu(a, f, ct);
            }
          }
          a.lanes = Et(a.lanes, ct);
        }
        return e;
      }
      return e.flags |= tr, e.lanes = l, e;
    }
    function kw(e, t, a, i, l) {
      if (a.flags |= ys, na && uv(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        xw(a), Vr() && a.mode & xt && P_();
        var f = Y1(t);
        if (f !== null) {
          f.flags &= ~wr, Q1(f, t, a, e, l), f.mode & xt && W1(e, s, l), Tw(f, e, s);
          return;
        } else {
          if (!ih(l)) {
            W1(e, s, l), SS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Vr() && a.mode & xt) {
        P_();
        var g = Y1(t);
        if (g !== null) {
          (g.flags & tr) === et && (g.flags |= wr), Q1(g, t, a, e, l), Ng(uc(i, a));
          return;
        }
      }
      i = uc(i, a), lx(i);
      var C = t;
      do {
        switch (C.tag) {
          case H: {
            var R = i;
            C.flags |= tr;
            var U = Ns(l);
            C.lanes = Et(C.lanes, U);
            var M = $1(C, R, U);
            Qg(C, M);
            return;
          }
          case w:
            var B = i, Q = C.type, Z = C.stateNode;
            if ((C.flags & Je) === et && (typeof Q.getDerivedStateFromError == "function" || Z !== null && typeof Z.componentDidCatch == "function" && !YC(Z))) {
              C.flags |= tr;
              var Le = Ns(l);
              C.lanes = Et(C.lanes, Le);
              var at = V0(C, B, Le);
              Qg(C, at);
              return;
            }
            break;
        }
        C = C.return;
      } while (C !== null);
    }
    function Dw() {
      return null;
    }
    var Yp = v.ReactCurrentOwner, ho = !1, H0, Qp, I0, B0, $0, sc, W0, Wm, Gp;
    H0 = {}, Qp = {}, I0 = {}, B0 = {}, $0 = {}, sc = !1, W0 = {}, Wm = {}, Gp = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = K_(t, null, a, i) : t.child = Vf(t, e.child, a, i);
    }
    function Ow(e, t, a, i) {
      t.child = Vf(t, e.child, null, i), t.child = Vf(t, null, a, i);
    }
    function G1(e, t, a, i, l) {
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
        if (Yp.current = t, Gn(!0), g = Gf(e, t, f, i, p, l), C = qf(), t.mode & en) {
          _n(!0);
          try {
            g = Gf(e, t, f, i, p, l), C = qf();
          } finally {
            _n(!1);
          }
        }
        Gn(!1);
      }
      return _a(), e !== null && !ho ? (c1(e, t, l), Gl(e, t, l)) : (Vr() && C && Tg(t), t.flags |= oi, Ra(e, t, g, l), t.child);
    }
    function q1(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (Ux(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = rd(s), t.tag = Fe, t.type = f, G0(t, s), K1(e, t, f, i, l);
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
            Gp[g] || (y("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", g), Gp[g] = !0);
          }
        }
        var C = OS(a.type, null, i, t, t.mode, l);
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
      var M = e.child, B = eS(e, l);
      if (!B) {
        var Q = M.memoizedProps, Z = a.compare;
        if (Z = Z !== null ? Z : We, Z(Q, i) && e.ref === t.ref)
          return Gl(e, t, l);
      }
      t.flags |= oi;
      var Le = vc(M, i);
      return Le.ref = t.ref, Le.return = t, t.child = Le, Le;
    }
    function K1(e, t, a, i, l) {
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
        if (We(R, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ho = !1, t.pendingProps = i = R, eS(e, l))
            (e.flags & zc) !== et && (ho = !0);
          else return t.lanes = e.lanes, Gl(e, t, l);
      }
      return Y0(e, t, a, i, l);
    }
    function X1(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || _e)
        if ((t.mode & xt) === tt) {
          var f = {
            baseLanes: oe,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, ay(t, a);
        } else if (aa(a, ra)) {
          var U = {
            baseLanes: oe,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = U;
          var M = s !== null ? s.baseLanes : a;
          ay(t, M);
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
          return t.memoizedState = R, t.updateQueue = null, ay(t, g), null;
        }
      else {
        var B;
        s !== null ? (B = Et(s.baseLanes, a), t.memoizedState = null) : B = a, ay(t, B);
      }
      return Ra(e, t, l, a), t.child;
    }
    function Lw(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function Nw(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function Mw(e, t, a) {
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
    function J1(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Rn, t.flags |= Ru);
    }
    function Y0(e, t, a, i, l) {
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
      return _a(), e !== null && !ho ? (c1(e, t, l), Gl(e, t, l)) : (Vr() && C && Tg(t), t.flags |= oi, Ra(e, t, g, l), t.child);
    }
    function Z1(e, t, a, i, l) {
      {
        switch (Kx(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), g = p.state;
            s.updater.enqueueSetState(s, g, null);
            break;
          }
          case !0: {
            t.flags |= Je, t.flags |= tr;
            var C = new Error("Simulated error coming from DevTools"), R = Ns(l);
            t.lanes = Et(t.lanes, R);
            var U = V0(t, uc(C, t), R);
            Qg(t, U);
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
      Xo(a) ? (B = !0, rm(t)) : B = !1, If(t, l);
      var Q = t.stateNode, Z;
      Q === null ? (Qm(e, t), I1(t, a, i), z0(t, a, i, l), Z = !0) : e === null ? Z = Ew(t, a, i, l) : Z = Rw(e, t, a, i, l);
      var Le = Q0(e, t, a, Z, B, l);
      {
        var at = t.stateNode;
        Z && at.props !== i && (sc || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ht(t) || "a component"), sc = !0);
      }
      return Le;
    }
    function Q0(e, t, a, i, l, s) {
      J1(e, t);
      var f = (t.flags & Je) !== et;
      if (!i && !f)
        return l && A_(t, a, !1), Gl(e, t, s);
      var p = t.stateNode;
      Yp.current = t;
      var g;
      if (f && typeof a.getDerivedStateFromError != "function")
        g = null, z1();
      else {
        Sa(t);
        {
          if (Gn(!0), g = p.render(), t.mode & en) {
            _n(!0);
            try {
              p.render();
            } finally {
              _n(!1);
            }
          }
          Gn(!1);
        }
        _a();
      }
      return t.flags |= oi, e !== null && f ? Ow(e, t, g, s) : Ra(e, t, g, s), t.memoizedState = p.state, l && A_(t, a, !0), t.child;
    }
    function eC(e) {
      var t = e.stateNode;
      t.pendingContext ? N_(e, t.pendingContext, t.pendingContext !== t.context) : t.context && N_(e, t.context, !1), Gg(e, t.containerInfo);
    }
    function Aw(e, t, a) {
      if (eC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      r1(e, t), _m(t, i, null, a);
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
        if (C.baseState = g, t.memoizedState = g, t.flags & wr) {
          var R = uc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return tC(e, t, p, a, R);
        } else if (p !== s) {
          var U = uc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return tC(e, t, p, a, U);
        } else {
          zb(t);
          var M = K_(t, null, p, a);
          t.child = M;
          for (var B = M; B; )
            B.flags = B.flags & ~Sn | Zr, B = B.sibling;
        }
      } else {
        if (Ff(), p === s)
          return Gl(e, t, a);
        Ra(e, t, p, a);
      }
      return t.child;
    }
    function tC(e, t, a, i, l) {
      return Ff(), Ng(l), t.flags |= wr, Ra(e, t, a, i), t.child;
    }
    function Uw(e, t, a) {
      l1(t), e === null && Lg(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = l.children, p = dg(i, l);
      return p ? f = null : s !== null && dg(i, s) && (t.flags |= Aa), J1(e, t), Ra(e, t, f, a), t.child;
    }
    function jw(e, t) {
      return e === null && Lg(t), null;
    }
    function zw(e, t, a, i) {
      Qm(e, t);
      var l = t.pendingProps, s = a, f = s._payload, p = s._init, g = p(f);
      t.type = g;
      var C = t.tag = jx(g), R = vo(g, l), U;
      switch (C) {
        case x:
          return G0(t, g), t.type = g = rd(g), U = Y0(null, t, g, R, i), U;
        case w:
          return t.type = g = bS(g), U = Z1(null, t, g, R, i), U;
        case Se:
          return t.type = g = wS(g), U = G1(null, t, g, R, i), U;
        case Ge: {
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
          return U = q1(
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
      throw g !== null && typeof g == "object" && g.$$typeof === yt && (B = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + g + ". " + ("Lazy element type must resolve to a class or function." + B));
    }
    function Pw(e, t, a, i, l) {
      Qm(e, t), t.tag = w;
      var s;
      return Xo(a) ? (s = !0, rm(t)) : s = !1, If(t, l), I1(t, a, i), z0(t, a, i, l), Q0(null, t, a, !0, s, l);
    }
    function Fw(e, t, a, i) {
      Qm(e, t);
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
          H0[C] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", C, C), H0[C] = !0);
        }
        t.mode & en && co.recordLegacyContextWarning(t, null), Gn(!0), Yp.current = t, p = Gf(null, t, a, l, s, i), g = qf(), Gn(!1);
      }
      if (_a(), t.flags |= oi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var R = jt(a) || "Unknown";
        Qp[R] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), Qp[R] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var U = jt(a) || "Unknown";
          Qp[U] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", U, U, U), Qp[U] = !0);
        }
        t.tag = w, t.memoizedState = null, t.updateQueue = null;
        var M = !1;
        return Xo(a) ? (M = !0, rm(t)) : M = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Yg(t), H1(t, p), z0(t, a, l, i), Q0(null, t, a, !0, M, i);
      } else {
        if (t.tag = x, t.mode & en) {
          _n(!0);
          try {
            p = Gf(null, t, a, l, s, i), g = qf();
          } finally {
            _n(!1);
          }
        }
        return Vr() && g && Tg(t), Ra(null, t, p, i), G0(t, a), t.child;
      }
    }
    function G0(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Mr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), $0[l] || ($0[l] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = jt(t) || "Unknown";
          Gp[f] || (y("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Gp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = jt(t) || "Unknown";
          B0[p] || (y("%s: Function components do not support getDerivedStateFromProps.", p), B0[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var g = jt(t) || "Unknown";
          I0[g] || (y("%s: Function components do not support contextType.", g), I0[g] = !0);
        }
      }
    }
    var q0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: Pt
    };
    function K0(e) {
      return {
        baseLanes: e,
        cachePool: Dw(),
        transitions: null
      };
    }
    function Vw(e, t) {
      var a = null;
      return {
        baseLanes: Et(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Hw(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return Xg(e, zp);
    }
    function Iw(e, t) {
      return Ms(e.childLanes, t);
    }
    function nC(e, t, a) {
      var i = t.pendingProps;
      Xx(t) && (t.flags |= Je);
      var l = fo.current, s = !1, f = (t.flags & Je) !== et;
      if (f || Hw(l, e) ? (s = !0, t.flags &= ~Je) : (e === null || e.memoizedState !== null) && (l = ow(l, s1)), l = $f(l), $u(t, l), e === null) {
        Lg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var g = p.dehydrated;
          if (g !== null)
            return Qw(t, g);
        }
        var C = i.children, R = i.fallback;
        if (s) {
          var U = Bw(t, C, R, a), M = t.child;
          return M.memoizedState = K0(a), t.memoizedState = q0, U;
        } else
          return X0(t, C);
      } else {
        var B = e.memoizedState;
        if (B !== null) {
          var Q = B.dehydrated;
          if (Q !== null)
            return Gw(e, t, f, i, Q, B, a);
        }
        if (s) {
          var Z = i.fallback, Le = i.children, at = Ww(e, t, Le, Z, a), Xe = t.child, Ut = e.child.memoizedState;
          return Xe.memoizedState = Ut === null ? K0(a) : Vw(Ut, a), Xe.childLanes = Iw(e, a), t.memoizedState = q0, at;
        } else {
          var Ot = i.children, F = $w(e, t, Ot, a);
          return t.memoizedState = null, F;
        }
      }
    }
    function X0(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, s = J0(l, i);
      return s.return = e, e.child = s, s;
    }
    function Bw(e, t, a, i) {
      var l = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, g;
      return (l & xt) === tt && s !== null ? (p = s, p.childLanes = oe, p.pendingProps = f, e.mode & Vt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), g = Ju(a, l, i, null)) : (p = J0(f, l), g = Ju(a, l, i, null)), p.return = e, g.return = e, p.sibling = g, e.child = p, g;
    }
    function J0(e, t, a) {
      return rE(e, t, oe, null);
    }
    function rC(e, t) {
      return vc(e, t);
    }
    function $w(e, t, a, i) {
      var l = e.child, s = l.sibling, f = rC(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & xt) === tt && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Ma) : p.push(s);
      }
      return t.child = f, f;
    }
    function Ww(e, t, a, i, l) {
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
        C = R, C.childLanes = oe, C.pendingProps = g, t.mode & Vt && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = f.selfBaseDuration, C.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        C = rC(f, g), C.subtreeFlags = f.subtreeFlags & Pn;
      var U;
      return p !== null ? U = vc(p, i) : (U = Ju(i, s, l, null), U.flags |= Sn), U.return = t, C.return = t, C.sibling = U, t.child = C, U;
    }
    function Ym(e, t, a, i) {
      i !== null && Ng(i), Vf(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, f = X0(t, s);
      return f.flags |= Sn, t.memoizedState = null, f;
    }
    function Yw(e, t, a, i, l) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = J0(f, s), g = Ju(i, s, l, null);
      return g.flags |= Sn, p.return = t, g.return = t, p.sibling = g, t.child = p, (t.mode & xt) !== tt && Vf(t, e.child, null, l), g;
    }
    function Qw(e, t, a) {
      return (e.mode & xt) === tt ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ct) : mg(t) ? e.lanes = Tr : e.lanes = ra, null;
    }
    function Gw(e, t, a, i, l, s, f) {
      if (a)
        if (t.flags & wr) {
          t.flags &= ~wr;
          var F = P0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Ym(e, t, f, F);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Je, null;
          var ee = i.children, V = i.fallback, ye = Yw(e, t, ee, V, f), Pe = t.child;
          return Pe.memoizedState = K0(f), t.memoizedState = q0, ye;
        }
      else {
        if (Ub(), (t.mode & xt) === tt)
          return Ym(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (mg(l)) {
          var p, g, C;
          {
            var R = JR(l);
            p = R.digest, g = R.message, C = R.stack;
          }
          var U;
          g ? U = new Error(g) : U = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var M = P0(U, p, C);
          return Ym(e, t, f, M);
        }
        var B = aa(f, e.childLanes);
        if (ho || B) {
          var Q = ry();
          if (Q !== null) {
            var Z = Xd(Q, f);
            if (Z !== Pt && Z !== s.retryLane) {
              s.retryLane = Z;
              var Le = an;
              Ba(e, Z), Cr(Q, e, Z, Le);
            }
          }
          SS();
          var at = P0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Ym(e, t, f, at);
        } else if (T_(l)) {
          t.flags |= Je, t.child = e.child;
          var Xe = Sx.bind(null, e);
          return ZR(l, Xe), null;
        } else {
          Pb(t, l, s.treeContext);
          var Ut = i.children, Ot = X0(t, Ut);
          return Ot.flags |= Zr, Ot;
        }
      }
    }
    function aC(e, t, a) {
      e.lanes = Et(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Et(i.lanes, t)), Ig(e.return, t, a);
    }
    function qw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === he) {
          var l = i.memoizedState;
          l !== null && aC(i, a, e);
        } else if (i.tag === ge)
          aC(i, a, e);
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
    function Kw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && bm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Xw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !W0[e])
        if (W0[e] = !0, typeof e == "string")
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
    function Jw(e, t) {
      e !== void 0 && !Wm[e] && (e !== "collapsed" && e !== "hidden" ? (Wm[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Wm[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function iC(e, t) {
      {
        var a = wt(e), i = !a && typeof Ct(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function Zw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (wt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!iC(e[a], a))
              return;
        } else {
          var i = Ct(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var s = l.next(), f = 0; !s.done; s = l.next()) {
                if (!iC(s.value, f))
                  return;
                f++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function Z0(e, t, a, i, l) {
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
    function oC(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, s = i.tail, f = i.children;
      Xw(l), Jw(s, l), Zw(f, l), Ra(e, t, f, a);
      var p = fo.current, g = Xg(p, zp);
      if (g)
        p = Jg(p, zp), t.flags |= Je;
      else {
        var C = e !== null && (e.flags & Je) !== et;
        C && qw(t, t.child, a), p = $f(p);
      }
      if ($u(t, p), (t.mode & xt) === tt)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var R = Kw(t.child), U;
            R === null ? (U = t.child, t.child = null) : (U = R.sibling, R.sibling = null), Z0(
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
              if (Q !== null && bm(Q) === null) {
                t.child = B;
                break;
              }
              var Z = B.sibling;
              B.sibling = M, M = B, B = Z;
            }
            Z0(
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
            Z0(
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
    function eT(e, t, a) {
      Gg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Vf(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var lC = !1;
    function tT(e, t, a) {
      var i = t.type, l = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || lC || (lC = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var g = t.type.propTypes;
        g && uo(g, s, "prop", "Context.Provider");
      }
      if (Z_(t, l, p), f !== null) {
        var C = f.value;
        if (fe(C, p)) {
          if (f.children === s.children && !tm())
            return Gl(e, t, a);
        } else
          Xb(t, l, a);
      }
      var R = s.children;
      return Ra(e, t, R, a), t.child;
    }
    var uC = !1;
    function nT(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (uC || (uC = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), If(t, a);
      var f = ir(i);
      Sa(t);
      var p;
      return Yp.current = t, Gn(!0), p = s(f), Gn(!1), _a(), t.flags |= oi, Ra(e, t, p, a), t.child;
    }
    function qp() {
      ho = !0;
    }
    function Qm(e, t) {
      (t.mode & xt) === tt && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Sn);
    }
    function Gl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), z1(), lv(t.lanes), aa(a, t.childLanes) ? (qb(e, t), t.child) : null;
    }
    function rT(e, t, a) {
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
    function eS(e, t) {
      var a = e.lanes;
      return !!aa(a, t);
    }
    function aT(e, t, a) {
      switch (t.tag) {
        case H:
          eC(t), t.stateNode, Ff();
          break;
        case G:
          l1(t);
          break;
        case w: {
          var i = t.type;
          Xo(i) && rm(t);
          break;
        }
        case q:
          Gg(t, t.stateNode.containerInfo);
          break;
        case ve: {
          var l = t.memoizedProps.value, s = t.type._context;
          Z_(t, s, l);
          break;
        }
        case Ee:
          {
            var f = aa(a, t.childLanes);
            f && (t.flags |= Nt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case he: {
          var g = t.memoizedState;
          if (g !== null) {
            if (g.dehydrated !== null)
              return $u(t, $f(fo.current)), t.flags |= Je, null;
            var C = t.child, R = C.childLanes;
            if (aa(a, R))
              return nC(e, t, a);
            $u(t, $f(fo.current));
            var U = Gl(e, t, a);
            return U !== null ? U.sibling : null;
          } else
            $u(t, $f(fo.current));
          break;
        }
        case ge: {
          var M = (e.flags & Je) !== et, B = aa(a, t.childLanes);
          if (M) {
            if (B)
              return oC(e, t, a);
            t.flags |= Je;
          }
          var Q = t.memoizedState;
          if (Q !== null && (Q.rendering = null, Q.tail = null, Q.lastEffect = null), $u(t, fo.current), B)
            break;
          return null;
        }
        case X:
        case we:
          return t.lanes = oe, X1(e, t, a);
      }
      return Gl(e, t, a);
    }
    function sC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return rT(e, t, OS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || tm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ho = !0;
        else {
          var s = eS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Je) === et)
            return ho = !1, aT(e, t, a);
          (e.flags & zc) !== et ? ho = !0 : ho = !1;
        }
      } else if (ho = !1, Vr() && Db(t)) {
        var f = t.index, p = Ob();
        z_(t, p, f);
      }
      switch (t.lanes = oe, t.tag) {
        case z:
          return Fw(e, t, t.type, a);
        case Ie: {
          var g = t.elementType;
          return zw(e, t, g, a);
        }
        case x: {
          var C = t.type, R = t.pendingProps, U = t.elementType === C ? R : vo(C, R);
          return Y0(e, t, C, U, a);
        }
        case w: {
          var M = t.type, B = t.pendingProps, Q = t.elementType === M ? B : vo(M, B);
          return Z1(e, t, M, Q, a);
        }
        case H:
          return Aw(e, t, a);
        case G:
          return Uw(e, t, a);
        case pe:
          return jw(e, t);
        case he:
          return nC(e, t, a);
        case q:
          return eT(e, t, a);
        case Se: {
          var Z = t.type, Le = t.pendingProps, at = t.elementType === Z ? Le : vo(Z, Le);
          return G1(e, t, Z, at, a);
        }
        case ae:
          return Lw(e, t, a);
        case de:
          return Nw(e, t, a);
        case Ee:
          return Mw(e, t, a);
        case ve:
          return tT(e, t, a);
        case se:
          return nT(e, t, a);
        case Ge: {
          var Xe = t.type, Ut = t.pendingProps, Ot = vo(Xe, Ut);
          if (t.type !== t.elementType) {
            var F = Xe.propTypes;
            F && uo(
              F,
              Ot,
              // Resolved for outer only
              "prop",
              jt(Xe)
            );
          }
          return Ot = vo(Xe.type, Ot), q1(e, t, Xe, Ot, a);
        }
        case Fe:
          return K1(e, t, t.type, t.pendingProps, a);
        case qe: {
          var ee = t.type, V = t.pendingProps, ye = t.elementType === ee ? V : vo(ee, V);
          return Pw(e, t, ee, ye, a);
        }
        case ge:
          return oC(e, t, a);
        case $:
          break;
        case X:
          return X1(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Kf(e) {
      e.flags |= Nt;
    }
    function cC(e) {
      e.flags |= Rn, e.flags |= Ru;
    }
    var fC, tS, dC, pC;
    fC = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === G || l.tag === pe)
          TR(e, l.stateNode);
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
    }, tS = function(e, t) {
    }, dC = function(e, t, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = qg(), g = kR(f, a, s, i, l, p);
        t.updateQueue = g, g && Kf(t);
      }
    }, pC = function(e, t, a, i) {
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = oe, i = et;
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
    function iT(e, t, a) {
      if (Bb() && (t.mode & xt) !== tt && (t.flags & Je) === et)
        return $_(t), Ff(), t.flags |= wr | ys | tr, !1;
      var i = um(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Hb(t), Ir(t), (t.mode & Vt) !== tt) {
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
        return W_(), !0;
    }
    function vC(e, t, a) {
      var i = t.pendingProps;
      switch (xg(t), t.tag) {
        case z:
        case Ie:
        case Fe:
        case x:
        case Se:
        case ae:
        case de:
        case Ee:
        case se:
        case Ge:
          return Ir(t), null;
        case w: {
          var l = t.type;
          return Xo(l) && nm(t), Ir(t), null;
        }
        case H: {
          var s = t.stateNode;
          if (Bf(t), Rg(t), e0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = um(t);
            if (f)
              Kf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & wr) !== et) && (t.flags |= qn, W_());
            }
          }
          return tS(e, t), Ir(t), null;
        }
        case G: {
          Kg(t);
          var g = o1(), C = t.type;
          if (e !== null && t.stateNode != null)
            dC(e, t, C, i, g), e.ref !== t.ref && cC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Ir(t), null;
            }
            var R = qg(), U = um(t);
            if (U)
              Fb(t, g, R) && Kf(t);
            else {
              var M = wR(C, i, g, R, t);
              fC(M, t, !1, !1), t.stateNode = M, xR(M, C, i, g) && Kf(t);
            }
            t.ref !== null && cC(t);
          }
          return Ir(t), null;
        }
        case pe: {
          var B = i;
          if (e && t.stateNode != null) {
            var Q = e.memoizedProps;
            pC(e, t, Q, B);
          } else {
            if (typeof B != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var Z = o1(), Le = qg(), at = um(t);
            at ? Vb(t) && Kf(t) : t.stateNode = DR(B, Z, Le, t);
          }
          return Ir(t), null;
        }
        case he: {
          Wf(t);
          var Xe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ut = iT(e, t, Xe);
            if (!Ut)
              return t.flags & tr ? t : null;
          }
          if ((t.flags & Je) !== et)
            return t.lanes = a, (t.mode & Vt) !== tt && w0(t), t;
          var Ot = Xe !== null, F = e !== null && e.memoizedState !== null;
          if (Ot !== F && Ot) {
            var ee = t.child;
            if (ee.flags |= zn, (t.mode & xt) !== tt) {
              var V = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              V || Xg(fo.current, s1) ? ox() : SS();
            }
          }
          var ye = t.updateQueue;
          if (ye !== null && (t.flags |= Nt), Ir(t), (t.mode & Vt) !== tt && Ot) {
            var Pe = t.child;
            Pe !== null && (t.treeBaseDuration -= Pe.treeBaseDuration);
          }
          return null;
        }
        case q:
          return Bf(t), tS(e, t), e === null && Eb(t.stateNode.containerInfo), Ir(t), null;
        case ve:
          var Ae = t.type._context;
          return Hg(Ae, t), Ir(t), null;
        case qe: {
          var ft = t.type;
          return Xo(ft) && nm(t), Ir(t), null;
        }
        case ge: {
          Wf(t);
          var St = t.memoizedState;
          if (St === null)
            return Ir(t), null;
          var nn = (t.flags & Je) !== et, Bt = St.rendering;
          if (Bt === null)
            if (nn)
              Kp(St, !1);
            else {
              var Jn = ux() && (e === null || (e.flags & Je) === et);
              if (!Jn)
                for (var $t = t.child; $t !== null; ) {
                  var $n = bm($t);
                  if ($n !== null) {
                    nn = !0, t.flags |= Je, Kp(St, !1);
                    var fa = $n.updateQueue;
                    return fa !== null && (t.updateQueue = fa, t.flags |= Nt), t.subtreeFlags = et, Kb(t, a), $u(t, Jg(fo.current, zp)), t.child;
                  }
                  $t = $t.sibling;
                }
              St.tail !== null && Kn() > UC() && (t.flags |= Je, nn = !0, Kp(St, !1), t.lanes = Id);
            }
          else {
            if (!nn) {
              var Qr = bm(Bt);
              if (Qr !== null) {
                t.flags |= Je, nn = !0;
                var pi = Qr.updateQueue;
                if (pi !== null && (t.updateQueue = pi, t.flags |= Nt), Kp(St, !0), St.tail === null && St.tailMode === "hidden" && !Bt.alternate && !Vr())
                  return Ir(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Kn() * 2 - St.renderingStartTime > UC() && a !== ra && (t.flags |= Je, nn = !0, Kp(St, !1), t.lanes = Id);
            }
            if (St.isBackwards)
              Bt.sibling = t.child, t.child = Bt;
            else {
              var Ta = St.last;
              Ta !== null ? Ta.sibling = Bt : t.child = Bt, St.last = Bt;
            }
          }
          if (St.tail !== null) {
            var xa = St.tail;
            St.rendering = xa, St.tail = xa.sibling, St.renderingStartTime = Kn(), xa.sibling = null;
            var da = fo.current;
            return nn ? da = Jg(da, zp) : da = $f(da), $u(t, da), xa;
          }
          return Ir(t), null;
        }
        case $:
          break;
        case X:
        case we: {
          gS(t);
          var Zl = t.memoizedState, ad = Zl !== null;
          if (e !== null) {
            var dv = e.memoizedState, il = dv !== null;
            il !== ad && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !_e && (t.flags |= zn);
          }
          return !ad || (t.mode & xt) === tt ? Ir(t) : aa(al, ra) && (Ir(t), t.subtreeFlags & (Sn | Nt) && (t.flags |= zn)), null;
        }
        case Be:
          return null;
        case De:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function oT(e, t, a) {
      switch (xg(t), t.tag) {
        case w: {
          var i = t.type;
          Xo(i) && nm(t);
          var l = t.flags;
          return l & tr ? (t.flags = l & ~tr | Je, (t.mode & Vt) !== tt && w0(t), t) : null;
        }
        case H: {
          t.stateNode, Bf(t), Rg(t), e0();
          var s = t.flags;
          return (s & tr) !== et && (s & Je) === et ? (t.flags = s & ~tr | Je, t) : null;
        }
        case G:
          return Kg(t), null;
        case he: {
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
        case ge:
          return Wf(t), null;
        case q:
          return Bf(t), null;
        case ve:
          var g = t.type._context;
          return Hg(g, t), null;
        case X:
        case we:
          return gS(t), null;
        case Be:
          return null;
        default:
          return null;
      }
    }
    function hC(e, t, a) {
      switch (xg(t), t.tag) {
        case w: {
          var i = t.type.childContextTypes;
          i != null && nm(t);
          break;
        }
        case H: {
          t.stateNode, Bf(t), Rg(t), e0();
          break;
        }
        case G: {
          Kg(t);
          break;
        }
        case q:
          Bf(t);
          break;
        case he:
          Wf(t);
          break;
        case ge:
          Wf(t);
          break;
        case ve:
          var l = t.type._context;
          Hg(l, t);
          break;
        case X:
        case we:
          gS(t);
          break;
      }
    }
    var mC = null;
    mC = /* @__PURE__ */ new Set();
    var Gm = !1, Br = !1, lT = typeof WeakSet == "function" ? WeakSet : Set, Ye = null, Xf = null, Jf = null;
    function uT(e) {
      Mo(null, function() {
        throw e;
      }), ms();
    }
    var sT = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Vt)
        try {
          nl(), t.componentWillUnmount();
        } finally {
          tl(e);
        }
      else
        t.componentWillUnmount();
    };
    function yC(e, t) {
      try {
        Qu(hr, e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function nS(e, t, a) {
      try {
        sT(e, a);
      } catch (i) {
        vn(e, t, i);
      }
    }
    function cT(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        vn(e, t, i);
      }
    }
    function gC(e, t) {
      try {
        _C(e);
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
            if (ze && mt && e.mode & Vt)
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
    function qm(e, t, a) {
      try {
        a();
      } catch (i) {
        vn(e, t, i);
      }
    }
    var SC = !1;
    function fT(e, t) {
      RR(e.containerInfo), Ye = t, dT();
      var a = SC;
      return SC = !1, a;
    }
    function dT() {
      for (; Ye !== null; ) {
        var e = Ye, t = e.child;
        (e.subtreeFlags & Uo) !== et && t !== null ? (t.return = e, Ye = t) : pT();
      }
    }
    function pT() {
      for (; Ye !== null; ) {
        var e = Ye;
        Xt(e);
        try {
          vT(e);
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
    function vT(e) {
      var t = e.alternate, a = e.flags;
      if ((a & qn) !== et) {
        switch (Xt(e), e.tag) {
          case x:
          case Se:
          case Fe:
            break;
          case w: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !sc && (s.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ht(e) || "instance"), s.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ht(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : vo(e.type, i), l);
              {
                var p = mC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ht(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case H: {
            {
              var g = e.stateNode;
              GR(g.containerInfo);
            }
            break;
          }
          case G:
          case pe:
          case q:
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
            f.destroy = void 0, p !== void 0 && ((e & Hr) !== $a ? no(t) : (e & hr) !== $a && Ss(t), (e & Jo) !== $a && sv(!0), qm(t, a, p), (e & Jo) !== $a && sv(!1), (e & Hr) !== $a ? Fo() : (e & hr) !== $a && Vd());
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
            (e & Jo) !== $a && sv(!0), s.destroy = f(), (e & Jo) !== $a && sv(!1), (e & Hr) !== $a ? eh() : (e & hr) !== $a && th();
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
    function hT(e, t) {
      if ((t.flags & Nt) !== et)
        switch (t.tag) {
          case Ee: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, f = U1(), p = t.alternate === null ? "mount" : "update";
            A1() && (p = "nested-update"), typeof s == "function" && s(l, p, a, f);
            var g = t.return;
            e: for (; g !== null; ) {
              switch (g.tag) {
                case H:
                  var C = g.stateNode;
                  C.passiveEffectDuration += a;
                  break e;
                case Ee:
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
    function mT(e, t, a, i) {
      if ((a.flags & zo) !== et)
        switch (a.tag) {
          case x:
          case Se:
          case Fe: {
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
          case w: {
            var l = a.stateNode;
            if (a.flags & Nt && !Br)
              if (t === null)
                if (a.type === a.elementType && !sc && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ht(a) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ht(a) || "instance")), a.mode & Vt)
                  try {
                    nl(), l.componentDidMount();
                  } finally {
                    tl(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : vo(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !sc && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ht(a) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ht(a) || "instance")), a.mode & Vt)
                  try {
                    nl(), l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    tl(a);
                  }
                else
                  l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !sc && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ht(a) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ht(a) || "instance")), i1(a, p, l));
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
                  case w:
                    C = a.child.stateNode;
                    break;
                }
              i1(a, g, C);
            }
            break;
          }
          case G: {
            var R = a.stateNode;
            if (t === null && a.flags & Nt) {
              var U = a.type, M = a.memoizedProps;
              AR(R, U, M);
            }
            break;
          }
          case pe:
            break;
          case q:
            break;
          case Ee: {
            {
              var B = a.memoizedProps, Q = B.onCommit, Z = B.onRender, Le = a.stateNode.effectDuration, at = U1(), Xe = t === null ? "mount" : "update";
              A1() && (Xe = "nested-update"), typeof Z == "function" && Z(a.memoizedProps.id, Xe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, at);
              {
                typeof Q == "function" && Q(a.memoizedProps.id, Xe, Le, at), px(a);
                var Ut = a.return;
                e: for (; Ut !== null; ) {
                  switch (Ut.tag) {
                    case H:
                      var Ot = Ut.stateNode;
                      Ot.effectDuration += Le;
                      break e;
                    case Ee:
                      var F = Ut.stateNode;
                      F.effectDuration += Le;
                      break e;
                  }
                  Ut = Ut.return;
                }
              }
            }
            break;
          }
          case he: {
            bT(e, a);
            break;
          }
          case ge:
          case qe:
          case $:
          case X:
          case we:
          case De:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Br || a.flags & Rn && _C(a);
    }
    function yT(e) {
      switch (e.tag) {
        case x:
        case Se:
        case Fe: {
          if (e.mode & Vt)
            try {
              nl(), yC(e, e.return);
            } finally {
              tl(e);
            }
          else
            yC(e, e.return);
          break;
        }
        case w: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && cT(e, e.return, t), gC(e, e.return);
          break;
        }
        case G: {
          gC(e, e.return);
          break;
        }
      }
    }
    function gT(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === G) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? $R(l) : YR(i.stateNode, i.memoizedProps);
            } catch (f) {
              vn(e, e.return, f);
            }
          }
        } else if (i.tag === pe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? WR(s) : QR(s, i.memoizedProps);
            } catch (f) {
              vn(e, e.return, f);
            }
        } else if (!((i.tag === X || i.tag === we) && i.memoizedState !== null && i !== e)) {
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
    function _C(e) {
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
          typeof l == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ht(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", ht(e)), t.current = i;
      }
    }
    function ST(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function CC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, CC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === G) {
          var a = e.stateNode;
          a !== null && wb(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function _T(e) {
      for (var t = e.return; t !== null; ) {
        if (EC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function EC(e) {
      return e.tag === G || e.tag === H || e.tag === q;
    }
    function RC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || EC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== G && t.tag !== pe && t.tag !== it; ) {
          if (t.flags & Sn || t.child === null || t.tag === q)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Sn))
          return t.stateNode;
      }
    }
    function CT(e) {
      var t = _T(e);
      switch (t.tag) {
        case G: {
          var a = t.stateNode;
          t.flags & Aa && (w_(a), t.flags &= ~Aa);
          var i = RC(e);
          aS(e, i, a);
          break;
        }
        case H:
        case q: {
          var l = t.stateNode.containerInfo, s = RC(e);
          rS(e, s, l);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function rS(e, t, a) {
      var i = e.tag, l = i === G || i === pe;
      if (l) {
        var s = e.stateNode;
        t ? VR(a, s, t) : PR(a, s);
      } else if (i !== q) {
        var f = e.child;
        if (f !== null) {
          rS(f, t, a);
          for (var p = f.sibling; p !== null; )
            rS(p, t, a), p = p.sibling;
        }
      }
    }
    function aS(e, t, a) {
      var i = e.tag, l = i === G || i === pe;
      if (l) {
        var s = e.stateNode;
        t ? FR(a, s, t) : zR(a, s);
      } else if (i !== q) {
        var f = e.child;
        if (f !== null) {
          aS(f, t, a);
          for (var p = f.sibling; p !== null; )
            aS(p, t, a), p = p.sibling;
        }
      }
    }
    var $r = null, yo = !1;
    function ET(e, t, a) {
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
        bC(e, t, a), $r = null, yo = !1;
      }
      ST(a);
    }
    function Gu(e, t, a) {
      for (var i = a.child; i !== null; )
        bC(e, t, i), i = i.sibling;
    }
    function bC(e, t, a) {
      switch (jd(a), a.tag) {
        case G:
          Br || Zf(a, t);
        // eslint-disable-next-line-no-fallthrough
        case pe: {
          {
            var i = $r, l = yo;
            $r = null, Gu(e, t, a), $r = i, yo = l, $r !== null && (yo ? IR($r, a.stateNode) : HR($r, a.stateNode));
          }
          return;
        }
        case it: {
          $r !== null && (yo ? BR($r, a.stateNode) : hg($r, a.stateNode));
          return;
        }
        case q: {
          {
            var s = $r, f = yo;
            $r = a.stateNode.containerInfo, yo = !0, Gu(e, t, a), $r = s, yo = f;
          }
          return;
        }
        case x:
        case Se:
        case Ge:
        case Fe: {
          if (!Br) {
            var p = a.updateQueue;
            if (p !== null) {
              var g = p.lastEffect;
              if (g !== null) {
                var C = g.next, R = C;
                do {
                  var U = R, M = U.destroy, B = U.tag;
                  M !== void 0 && ((B & Jo) !== $a ? qm(a, t, M) : (B & hr) !== $a && (Ss(a), a.mode & Vt ? (nl(), qm(a, t, M), tl(a)) : qm(a, t, M), Vd())), R = R.next;
                } while (R !== C);
              }
            }
          }
          Gu(e, t, a);
          return;
        }
        case w: {
          if (!Br) {
            Zf(a, t);
            var Q = a.stateNode;
            typeof Q.componentWillUnmount == "function" && nS(a, t, Q);
          }
          Gu(e, t, a);
          return;
        }
        case $: {
          Gu(e, t, a);
          return;
        }
        case X: {
          if (
            // TODO: Remove this dead flag
            a.mode & xt
          ) {
            var Z = Br;
            Br = Z || a.memoizedState !== null, Gu(e, t, a), Br = Z;
          } else
            Gu(e, t, a);
          break;
        }
        default: {
          Gu(e, t, a);
          return;
        }
      }
    }
    function RT(e) {
      e.memoizedState;
    }
    function bT(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && ub(s);
          }
        }
      }
    }
    function wC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new lT()), t.forEach(function(i) {
          var l = _x.bind(null, e, i);
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
    function wT(e, t, a) {
      Xf = a, Jf = e, Xt(t), TC(t, e), Xt(t), Xf = null, Jf = null;
    }
    function go(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          try {
            ET(e, t, s);
          } catch (g) {
            vn(s, t, g);
          }
        }
      var f = To();
      if (t.subtreeFlags & jo)
        for (var p = t.child; p !== null; )
          Xt(p), TC(p, e), p = p.sibling;
      Xt(f);
    }
    function TC(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case x:
        case Se:
        case Ge:
        case Fe: {
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
        case w: {
          go(t, e), rl(e), l & Rn && i !== null && Zf(i, i.return);
          return;
        }
        case G: {
          go(t, e), rl(e), l & Rn && i !== null && Zf(i, i.return);
          {
            if (e.flags & Aa) {
              var s = e.stateNode;
              try {
                w_(s);
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
                    UR(f, R, C, g, p, e);
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
              jR(U, B, M);
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
                lb(t.containerInfo);
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
        case he: {
          go(t, e), rl(e);
          var Z = e.child;
          if (Z.flags & zn) {
            var Le = Z.stateNode, at = Z.memoizedState, Xe = at !== null;
            if (Le.isHidden = Xe, Xe) {
              var Ut = Z.alternate !== null && Z.alternate.memoizedState !== null;
              Ut || ix();
            }
          }
          if (l & Nt) {
            try {
              RT(e);
            } catch (ft) {
              vn(e, e.return, ft);
            }
            wC(e);
          }
          return;
        }
        case X: {
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
            var ee = e.stateNode, V = e.memoizedState, ye = V !== null, Pe = e;
            if (ee.isHidden = ye, ye && !Ot && (Pe.mode & xt) !== tt) {
              Ye = Pe;
              for (var Ae = Pe.child; Ae !== null; )
                Ye = Ae, xT(Ae), Ae = Ae.sibling;
            }
            gT(Pe, ye);
          }
          return;
        }
        case ge: {
          go(t, e), rl(e), l & Nt && wC(e);
          return;
        }
        case $:
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
          CT(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        e.flags &= ~Sn;
      }
      t & Zr && (e.flags &= ~Zr);
    }
    function TT(e, t, a) {
      Xf = a, Jf = t, Ye = e, xC(e, t, a), Xf = null, Jf = null;
    }
    function xC(e, t, a) {
      for (var i = (e.mode & xt) !== tt; Ye !== null; ) {
        var l = Ye, s = l.child;
        if (l.tag === X && i) {
          var f = l.memoizedState !== null, p = f || Gm;
          if (p) {
            iS(e, t, a);
            continue;
          } else {
            var g = l.alternate, C = g !== null && g.memoizedState !== null, R = C || Br, U = Gm, M = Br;
            Gm = p, Br = R, Br && !M && (Ye = l, kT(l));
            for (var B = s; B !== null; )
              Ye = B, xC(
                B,
                // New root; bubble back up to here and stop.
                t,
                a
              ), B = B.sibling;
            Ye = l, Gm = U, Br = M, iS(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & zo) !== et && s !== null ? (s.return = l, Ye = s) : iS(e, t, a);
      }
    }
    function iS(e, t, a) {
      for (; Ye !== null; ) {
        var i = Ye;
        if ((i.flags & zo) !== et) {
          var l = i.alternate;
          Xt(i);
          try {
            mT(t, l, i, a);
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
    function xT(e) {
      for (; Ye !== null; ) {
        var t = Ye, a = t.child;
        switch (t.tag) {
          case x:
          case Se:
          case Ge:
          case Fe: {
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
          case w: {
            Zf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && nS(t, t.return, i);
            break;
          }
          case G: {
            Zf(t, t.return);
            break;
          }
          case X: {
            var l = t.memoizedState !== null;
            if (l) {
              kC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ye = a) : kC(e);
      }
    }
    function kC(e) {
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
    function kT(e) {
      for (; Ye !== null; ) {
        var t = Ye, a = t.child;
        if (t.tag === X) {
          var i = t.memoizedState !== null;
          if (i) {
            DC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ye = a) : DC(e);
      }
    }
    function DC(e) {
      for (; Ye !== null; ) {
        var t = Ye;
        Xt(t);
        try {
          yT(t);
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
    function DT(e, t, a, i) {
      Ye = t, OT(t, e, a, i);
    }
    function OT(e, t, a, i) {
      for (; Ye !== null; ) {
        var l = Ye, s = l.child;
        (l.subtreeFlags & eo) !== et && s !== null ? (s.return = l, Ye = s) : LT(e, t, a, i);
      }
    }
    function LT(e, t, a, i) {
      for (; Ye !== null; ) {
        var l = Ye;
        if ((l.flags & Jr) !== et) {
          Xt(l);
          try {
            NT(t, l, a, i);
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
    function NT(e, t, a, i) {
      switch (t.tag) {
        case x:
        case Se:
        case Fe: {
          if (t.mode & Vt) {
            b0();
            try {
              Qu(Hr | vr, t);
            } finally {
              R0(t);
            }
          } else
            Qu(Hr | vr, t);
          break;
        }
      }
    }
    function MT(e) {
      Ye = e, AT();
    }
    function AT() {
      for (; Ye !== null; ) {
        var e = Ye, t = e.child;
        if ((Ye.flags & Ma) !== et) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              Ye = l, zT(l, e);
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
            Ye = e;
          }
        }
        (e.subtreeFlags & eo) !== et && t !== null ? (t.return = e, Ye = t) : UT();
      }
    }
    function UT() {
      for (; Ye !== null; ) {
        var e = Ye;
        (e.flags & Jr) !== et && (Xt(e), jT(e), pn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ye = t;
          return;
        }
        Ye = e.return;
      }
    }
    function jT(e) {
      switch (e.tag) {
        case x:
        case Se:
        case Fe: {
          e.mode & Vt ? (b0(), mo(Hr | vr, e, e.return), R0(e)) : mo(Hr | vr, e, e.return);
          break;
        }
      }
    }
    function zT(e, t) {
      for (; Ye !== null; ) {
        var a = Ye;
        Xt(a), FT(a, t), pn();
        var i = a.child;
        i !== null ? (i.return = a, Ye = i) : PT(e);
      }
    }
    function PT(e) {
      for (; Ye !== null; ) {
        var t = Ye, a = t.sibling, i = t.return;
        if (CC(t), t === e) {
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
    function FT(e, t) {
      switch (e.tag) {
        case x:
        case Se:
        case Fe: {
          e.mode & Vt ? (b0(), mo(Hr, e, t), R0(e)) : mo(Hr, e, t);
          break;
        }
      }
    }
    function VT(e) {
      switch (e.tag) {
        case x:
        case Se:
        case Fe: {
          try {
            Qu(hr | vr, e);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case w: {
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
    function HT(e) {
      switch (e.tag) {
        case x:
        case Se:
        case Fe: {
          try {
            Qu(Hr | vr, e);
          } catch (t) {
            vn(e, e.return, t);
          }
          break;
        }
      }
    }
    function IT(e) {
      switch (e.tag) {
        case x:
        case Se:
        case Fe: {
          try {
            mo(hr | vr, e, e.return);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case w: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && nS(e, e.return, t);
          break;
        }
      }
    }
    function BT(e) {
      switch (e.tag) {
        case x:
        case Se:
        case Fe:
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
    var $T = [];
    function WT() {
      $T.forEach(function(e) {
        return e();
      });
    }
    var YT = v.ReactCurrentActQueue;
    function QT(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function OC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && YT.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var GT = Math.ceil, oS = v.ReactCurrentDispatcher, lS = v.ReactCurrentOwner, Wr = v.ReactCurrentBatchConfig, So = v.ReactCurrentActQueue, gr = (
      /*             */
      0
    ), LC = (
      /*               */
      1
    ), Yr = (
      /*                */
      2
    ), Hi = (
      /*                */
      4
    ), ql = 0, Jp = 1, cc = 2, Km = 3, Zp = 4, NC = 5, uS = 6, At = gr, ba = null, Mn = null, Sr = oe, al = oe, sS = Pu(oe), _r = ql, ev = null, Xm = oe, tv = oe, Jm = oe, nv = null, Wa = null, cS = 0, MC = 500, AC = 1 / 0, qT = 500, Kl = null;
    function rv() {
      AC = Kn() + qT;
    }
    function UC() {
      return AC;
    }
    var Zm = !1, fS = null, ed = null, fc = !1, qu = null, av = oe, dS = [], pS = null, KT = 50, iv = 0, vS = null, hS = !1, ey = !1, XT = 50, td = 0, ty = null, ov = an, ny = oe, jC = !1;
    function ry() {
      return ba;
    }
    function wa() {
      return (At & (Yr | Hi)) !== gr ? Kn() : (ov !== an || (ov = Kn()), ov);
    }
    function Ku(e) {
      var t = e.mode;
      if ((t & xt) === tt)
        return ct;
      if ((At & Yr) !== gr && Sr !== oe)
        return Ns(Sr);
      var a = Yb() !== Wb;
      if (a) {
        if (Wr.transition !== null) {
          var i = Wr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return ny === Pt && (ny = Gd()), ny;
      }
      var l = Va();
      if (l !== Pt)
        return l;
      var s = OR();
      return s;
    }
    function JT(e) {
      var t = e.mode;
      return (t & xt) === tt ? ct : lh();
    }
    function Cr(e, t, a, i) {
      Ex(), jC && y("useInsertionEffect must not schedule updates."), hS && (ey = !0), xu(e, a, i), (At & Yr) !== oe && e === ba ? wx(t) : (na && Us(e, t, a), Tx(t), e === ba && ((At & Yr) === gr && (tv = Et(tv, a)), _r === Zp && Xu(e, Sr)), Ya(e, i), a === ct && At === gr && (t.mode & xt) === tt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !So.isBatchingLegacy && (rv(), j_()));
    }
    function ZT(e, t, a) {
      var i = e.current;
      i.lanes = t, xu(e, t, a), Ya(e, a);
    }
    function ex(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (At & Yr) !== gr
      );
    }
    function Ya(e, t) {
      var a = e.callbackNode;
      cf(e, t);
      var i = sf(e, e === ba ? Sr : oe);
      if (i === oe) {
        a !== null && JC(a), e.callbackNode = null, e.callbackPriority = Pt;
        return;
      }
      var l = Io(i), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(So.current !== null && a !== ES)) {
        a == null && s !== ct && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && JC(a);
      var f;
      if (l === ct)
        e.tag === Fu ? (So.isBatchingLegacy !== null && (So.didScheduleLegacyUpdate = !0), kb(FC.bind(null, e))) : U_(FC.bind(null, e)), So.current !== null ? So.current.push(Vu) : NR(function() {
          (At & (Yr | Hi)) === gr && Vu();
        }), f = null;
      else {
        var p;
        switch (vh(i)) {
          case Ur:
            p = gs;
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
        f = RS(p, zC.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = f;
    }
    function zC(e, t) {
      if (gw(), ov = an, ny = oe, (At & (Yr | Hi)) !== gr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Jl();
      if (i && e.callbackNode !== a)
        return null;
      var l = sf(e, e === ba ? Sr : oe);
      if (l === oe)
        return null;
      var s = !df(e, l) && !oh(e, l) && !t, f = s ? cx(e, l) : iy(e, l);
      if (f !== ql) {
        if (f === cc) {
          var p = ff(e);
          p !== oe && (l = p, f = mS(e, p));
        }
        if (f === Jp) {
          var g = ev;
          throw dc(e, oe), Xu(e, l), Ya(e, Kn()), g;
        }
        if (f === uS)
          Xu(e, l);
        else {
          var C = !df(e, l), R = e.current.alternate;
          if (C && !nx(R)) {
            if (f = iy(e, l), f === cc) {
              var U = ff(e);
              U !== oe && (l = U, f = mS(e, U));
            }
            if (f === Jp) {
              var M = ev;
              throw dc(e, oe), Xu(e, l), Ya(e, Kn()), M;
            }
          }
          e.finishedWork = R, e.finishedLanes = l, tx(e, f, l);
        }
      }
      return Ya(e, Kn()), e.callbackNode === a ? zC.bind(null, e) : null;
    }
    function mS(e, t) {
      var a = nv;
      if (hf(e)) {
        var i = dc(e, t);
        i.flags |= wr, Cb(e.containerInfo);
      }
      var l = iy(e, t);
      if (l !== cc) {
        var s = Wa;
        Wa = a, s !== null && PC(s);
      }
      return l;
    }
    function PC(e) {
      Wa === null ? Wa = e : Wa.push.apply(Wa, e);
    }
    function tx(e, t, a) {
      switch (t) {
        case ql:
        case Jp:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case cc: {
          pc(e, Wa, Kl);
          break;
        }
        case Km: {
          if (Xu(e, a), Al(a) && // do not delay if we're inside an act() scope
          !ZC()) {
            var i = cS + MC - Kn();
            if (i > 10) {
              var l = sf(e, oe);
              if (l !== oe)
                break;
              var s = e.suspendedLanes;
              if (!Ul(s, a)) {
                wa(), pf(e, s);
                break;
              }
              e.timeoutHandle = pg(pc.bind(null, e, Wa, Kl), i);
              break;
            }
          }
          pc(e, Wa, Kl);
          break;
        }
        case Zp: {
          if (Xu(e, a), Yd(a))
            break;
          if (!ZC()) {
            var f = ui(e, a), p = f, g = Kn() - p, C = Cx(g) - g;
            if (C > 10) {
              e.timeoutHandle = pg(pc.bind(null, e, Wa, Kl), C);
              break;
            }
          }
          pc(e, Wa, Kl);
          break;
        }
        case NC: {
          pc(e, Wa, Kl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function nx(e) {
      for (var t = e; ; ) {
        if (t.flags & Eu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var s = i[l], f = s.getSnapshot, p = s.value;
                try {
                  if (!fe(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var g = t.child;
        if (t.subtreeFlags & Eu && g !== null) {
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
    function Xu(e, t) {
      t = Ms(t, Jm), t = Ms(t, tv), ch(e, t);
    }
    function FC(e) {
      if (Sw(), (At & (Yr | Hi)) !== gr)
        throw new Error("Should not already be working.");
      Jl();
      var t = sf(e, oe);
      if (!aa(t, ct))
        return Ya(e, Kn()), null;
      var a = iy(e, t);
      if (e.tag !== Fu && a === cc) {
        var i = ff(e);
        i !== oe && (t = i, a = mS(e, i));
      }
      if (a === Jp) {
        var l = ev;
        throw dc(e, oe), Xu(e, t), Ya(e, Kn()), l;
      }
      if (a === uS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, pc(e, Wa, Kl), Ya(e, Kn()), null;
    }
    function rx(e, t) {
      t !== oe && (vf(e, Et(t, ct)), Ya(e, Kn()), (At & (Yr | Hi)) === gr && (rv(), Vu()));
    }
    function yS(e, t) {
      var a = At;
      At |= LC;
      try {
        return e(t);
      } finally {
        At = a, At === gr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !So.isBatchingLegacy && (rv(), j_());
      }
    }
    function ax(e, t, a, i, l) {
      var s = Va(), f = Wr.transition;
      try {
        return Wr.transition = null, Hn(Ur), e(t, a, i, l);
      } finally {
        Hn(s), Wr.transition = f, At === gr && rv();
      }
    }
    function Xl(e) {
      qu !== null && qu.tag === Fu && (At & (Yr | Hi)) === gr && Jl();
      var t = At;
      At |= LC;
      var a = Wr.transition, i = Va();
      try {
        return Wr.transition = null, Hn(Ur), e ? e() : void 0;
      } finally {
        Hn(i), Wr.transition = a, At = t, (At & (Yr | Hi)) === gr && Vu();
      }
    }
    function VC() {
      return (At & (Yr | Hi)) !== gr;
    }
    function ay(e, t) {
      sa(sS, al, e), al = Et(al, t);
    }
    function gS(e) {
      al = sS.current, ua(sS, e);
    }
    function dc(e, t) {
      e.finishedWork = null, e.finishedLanes = oe;
      var a = e.timeoutHandle;
      if (a !== vg && (e.timeoutHandle = vg, LR(a)), Mn !== null)
        for (var i = Mn.return; i !== null; ) {
          var l = i.alternate;
          hC(l, i), i = i.return;
        }
      ba = e;
      var s = vc(e.current, null);
      return Mn = s, Sr = al = t, _r = ql, ev = null, Xm = oe, tv = oe, Jm = oe, nv = null, Wa = null, Zb(), co.discardPendingWarnings(), s;
    }
    function HC(e, t) {
      do {
        var a = Mn;
        try {
          if (vm(), f1(), pn(), lS.current = null, a === null || a.return === null) {
            _r = Jp, ev = t, Mn = null;
            return;
          }
          if (ze && a.mode & Vt && Bm(a, !0), Ze)
            if (_a(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Oi(a, i, Sr);
            } else
              _s(a, t, Sr);
          kw(e, a.return, a, t, Sr), WC(a);
        } catch (l) {
          t = l, Mn === a && a !== null ? (a = a.return, Mn = a) : a = Mn;
          continue;
        }
        return;
      } while (!0);
    }
    function IC() {
      var e = oS.current;
      return oS.current = Pm, e === null ? Pm : e;
    }
    function BC(e) {
      oS.current = e;
    }
    function ix() {
      cS = Kn();
    }
    function lv(e) {
      Xm = Et(e, Xm);
    }
    function ox() {
      _r === ql && (_r = Km);
    }
    function SS() {
      (_r === ql || _r === Km || _r === cc) && (_r = Zp), ba !== null && (Ls(Xm) || Ls(tv)) && Xu(ba, Sr);
    }
    function lx(e) {
      _r !== Zp && (_r = cc), nv === null ? nv = [e] : nv.push(e);
    }
    function ux() {
      return _r === ql;
    }
    function iy(e, t) {
      var a = At;
      At |= Yr;
      var i = IC();
      if (ba !== e || Sr !== t) {
        if (na) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (uv(e, Sr), l.clear()), fh(e, t);
        }
        Kl = Jd(), dc(e, t);
      }
      xl(t);
      do
        try {
          sx();
          break;
        } catch (s) {
          HC(e, s);
        }
      while (!0);
      if (vm(), At = a, BC(i), Mn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return $c(), ba = null, Sr = oe, _r;
    }
    function sx() {
      for (; Mn !== null; )
        $C(Mn);
    }
    function cx(e, t) {
      var a = At;
      At |= Yr;
      var i = IC();
      if (ba !== e || Sr !== t) {
        if (na) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (uv(e, Sr), l.clear()), fh(e, t);
        }
        Kl = Jd(), rv(), dc(e, t);
      }
      xl(t);
      do
        try {
          fx();
          break;
        } catch (s) {
          HC(e, s);
        }
      while (!0);
      return vm(), BC(i), At = a, Mn !== null ? (nh(), ql) : ($c(), ba = null, Sr = oe, _r);
    }
    function fx() {
      for (; Mn !== null && !Ld(); )
        $C(Mn);
    }
    function $C(e) {
      var t = e.alternate;
      Xt(e);
      var a;
      (e.mode & Vt) !== tt ? (E0(e), a = _S(t, e, al), Bm(e, !0)) : a = _S(t, e, al), pn(), e.memoizedProps = e.pendingProps, a === null ? WC(e) : Mn = a, lS.current = null;
    }
    function WC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ys) === et) {
          Xt(t);
          var l = void 0;
          if ((t.mode & Vt) === tt ? l = vC(a, t, al) : (E0(t), l = vC(a, t, al), Bm(t, !1)), pn(), l !== null) {
            Mn = l;
            return;
          }
        } else {
          var s = oT(a, t);
          if (s !== null) {
            s.flags &= Kv, Mn = s;
            return;
          }
          if ((t.mode & Vt) !== tt) {
            Bm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ys, i.subtreeFlags = et, i.deletions = null;
          else {
            _r = uS, Mn = null;
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
      _r === ql && (_r = NC);
    }
    function pc(e, t, a) {
      var i = Va(), l = Wr.transition;
      try {
        Wr.transition = null, Hn(Ur), dx(e, t, a, i);
      } finally {
        Wr.transition = l, Hn(i);
      }
      return null;
    }
    function dx(e, t, a, i) {
      do
        Jl();
      while (qu !== null);
      if (Rx(), (At & (Yr | Hi)) !== gr)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (zd(s), l === null)
        return Pd(), null;
      if (s === oe && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = oe, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Pt;
      var f = Et(l.lanes, l.childLanes);
      Kd(e, f), e === ba && (ba = null, Mn = null, Sr = oe), ((l.subtreeFlags & eo) !== et || (l.flags & eo) !== et) && (fc || (fc = !0, pS = a, RS(to, function() {
        return Jl(), null;
      })));
      var p = (l.subtreeFlags & (Uo | jo | zo | eo)) !== et, g = (l.flags & (Uo | jo | zo | eo)) !== et;
      if (p || g) {
        var C = Wr.transition;
        Wr.transition = null;
        var R = Va();
        Hn(Ur);
        var U = At;
        At |= Hi, lS.current = null, fT(e, l), j1(), wT(e, l, s), bR(e.containerInfo), e.current = l, Cs(s), TT(l, e, s), Es(), Nd(), At = U, Hn(R), Wr.transition = C;
      } else
        e.current = l, j1();
      var M = fc;
      if (fc ? (fc = !1, qu = e, av = s) : (td = 0, ty = null), f = e.pendingLanes, f === oe && (ed = null), M || qC(e.current, !1), Ad(l.stateNode, i), na && e.memoizedUpdaters.clear(), WT(), Ya(e, Kn()), t !== null)
        for (var B = e.onRecoverableError, Q = 0; Q < t.length; Q++) {
          var Z = t[Q], Le = Z.stack, at = Z.digest;
          B(Z.value, {
            componentStack: Le,
            digest: at
          });
        }
      if (Zm) {
        Zm = !1;
        var Xe = fS;
        throw fS = null, Xe;
      }
      return aa(av, ct) && e.tag !== Fu && Jl(), f = e.pendingLanes, aa(f, ct) ? (yw(), e === vS ? iv++ : (iv = 0, vS = e)) : iv = 0, Vu(), Pd(), null;
    }
    function Jl() {
      if (qu !== null) {
        var e = vh(av), t = zs(Pa, e), a = Wr.transition, i = Va();
        try {
          return Wr.transition = null, Hn(t), vx();
        } finally {
          Hn(i), Wr.transition = a;
        }
      }
      return !1;
    }
    function px(e) {
      dS.push(e), fc || (fc = !0, RS(to, function() {
        return Jl(), null;
      }));
    }
    function vx() {
      if (qu === null)
        return !1;
      var e = pS;
      pS = null;
      var t = qu, a = av;
      if (qu = null, av = oe, (At & (Yr | Hi)) !== gr)
        throw new Error("Cannot flush passive effects while already rendering.");
      hS = !0, ey = !1, Tl(a);
      var i = At;
      At |= Hi, MT(t.current), DT(t, t.current, a, e);
      {
        var l = dS;
        dS = [];
        for (var s = 0; s < l.length; s++) {
          var f = l[s];
          hT(t, f);
        }
      }
      Hd(), qC(t.current, !0), At = i, Vu(), ey ? t === ty ? td++ : (td = 0, ty = t) : td = 0, hS = !1, ey = !1, Ud(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function YC(e) {
      return ed !== null && ed.has(e);
    }
    function hx(e) {
      ed === null ? ed = /* @__PURE__ */ new Set([e]) : ed.add(e);
    }
    function mx(e) {
      Zm || (Zm = !0, fS = e);
    }
    var yx = mx;
    function QC(e, t, a) {
      var i = uc(a, t), l = $1(e, i, ct), s = Iu(e, l, ct), f = wa();
      s !== null && (xu(s, ct, f), Ya(s, f));
    }
    function vn(e, t, a) {
      if (uT(a), sv(!1), e.tag === H) {
        QC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === H) {
          QC(i, e, a);
          return;
        } else if (i.tag === w) {
          var l = i.type, s = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !YC(s)) {
            var f = uc(a, e), p = V0(i, f, ct), g = Iu(i, p, ct), C = wa();
            g !== null && (xu(g, ct, C), Ya(g, C));
            return;
          }
        }
        i = i.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function gx(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = wa();
      pf(e, a), xx(e), ba === e && Ul(Sr, a) && (_r === Zp || _r === Km && Al(Sr) && Kn() - cS < MC ? dc(e, oe) : Jm = Et(Jm, a)), Ya(e, l);
    }
    function GC(e, t) {
      t === Pt && (t = JT(e));
      var a = wa(), i = Ba(e, t);
      i !== null && (xu(i, t, a), Ya(i, a));
    }
    function Sx(e) {
      var t = e.memoizedState, a = Pt;
      t !== null && (a = t.retryLane), GC(e, a);
    }
    function _x(e, t) {
      var a = Pt, i;
      switch (e.tag) {
        case he:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case ge:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), GC(e, a);
    }
    function Cx(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : GT(e / 1960) * 1960;
    }
    function Ex() {
      if (iv > KT)
        throw iv = 0, vS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      td > XT && (td = 0, ty = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Rx() {
      co.flushLegacyContextWarning(), co.flushPendingUnsafeLifecycleWarnings();
    }
    function qC(e, t) {
      Xt(e), oy(e, Ao, IT), t && oy(e, xi, BT), oy(e, Ao, VT), t && oy(e, xi, HT), pn();
    }
    function oy(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== et ? i = i.child : ((i.flags & t) !== et && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var ly = null;
    function KC(e) {
      {
        if ((At & Yr) !== gr || !(e.mode & xt))
          return;
        var t = e.tag;
        if (t !== z && t !== H && t !== w && t !== x && t !== Se && t !== Ge && t !== Fe)
          return;
        var a = ht(e) || "ReactComponent";
        if (ly !== null) {
          if (ly.has(a))
            return;
          ly.add(a);
        } else
          ly = /* @__PURE__ */ new Set([a]);
        var i = sr;
        try {
          Xt(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Xt(e) : pn();
        }
      }
    }
    var _S;
    {
      var bx = null;
      _S = function(e, t, a) {
        var i = aE(bx, t);
        try {
          return sC(e, t, a);
        } catch (s) {
          if (jb() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (vm(), f1(), hC(e, t), aE(t, i), t.mode & Vt && E0(t), Mo(null, sC, null, e, t, a), Ji()) {
            var l = ms();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var XC = !1, CS;
    CS = /* @__PURE__ */ new Set();
    function wx(e) {
      if (_i && !vw())
        switch (e.tag) {
          case x:
          case Se:
          case Fe: {
            var t = Mn && ht(Mn) || "Unknown", a = t;
            if (!CS.has(a)) {
              CS.add(a);
              var i = ht(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case w: {
            XC || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), XC = !0);
            break;
          }
        }
    }
    function uv(e, t) {
      if (na) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Us(e, i, t);
        });
      }
    }
    var ES = {};
    function RS(e, t) {
      {
        var a = So.current;
        return a !== null ? (a.push(t), ES) : Od(e, t);
      }
    }
    function JC(e) {
      if (e !== ES)
        return Jv(e);
    }
    function ZC() {
      return So.current !== null;
    }
    function Tx(e) {
      {
        if (e.mode & xt) {
          if (!OC())
            return;
        } else if (!QT() || At !== gr || e.tag !== x && e.tag !== Se && e.tag !== Fe)
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
    function xx(e) {
      e.tag !== Fu && OC() && So.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function sv(e) {
      jC = e;
    }
    var Ii = null, nd = null, kx = function(e) {
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
                $$typeof: ie,
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
    function eE(e, t) {
      {
        if (Ii === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case w: {
            typeof i == "function" && (l = !0);
            break;
          }
          case x: {
            (typeof i == "function" || s === yt) && (l = !0);
            break;
          }
          case Se: {
            (s === ie || s === yt) && (l = !0);
            break;
          }
          case Ge:
          case Fe: {
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
    function tE(e) {
      {
        if (Ii === null || typeof WeakSet != "function")
          return;
        nd === null && (nd = /* @__PURE__ */ new WeakSet()), nd.add(e);
      }
    }
    var Dx = function(e, t) {
      {
        if (Ii === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Jl(), Xl(function() {
          TS(e.current, i, a);
        });
      }
    }, Ox = function(e, t) {
      {
        if (e.context !== fi)
          return;
        Jl(), Xl(function() {
          cv(t, e, null, null);
        });
      }
    };
    function TS(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, f = e.tag, p = e.type, g = null;
        switch (f) {
          case x:
          case Fe:
          case w:
            g = p;
            break;
          case Se:
            g = p.render;
            break;
        }
        if (Ii === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var C = !1, R = !1;
        if (g !== null) {
          var U = Ii(g);
          U !== void 0 && (a.has(U) ? R = !0 : t.has(U) && (f === w ? R = !0 : C = !0));
        }
        if (nd !== null && (nd.has(e) || i !== null && nd.has(i)) && (R = !0), R && (e._debugNeedsRemount = !0), R || C) {
          var M = Ba(e, ct);
          M !== null && Cr(M, e, ct, an);
        }
        l !== null && !R && TS(l, t, a), s !== null && TS(s, t, a);
      }
    }
    var Lx = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return xS(e.current, i, a), a;
      }
    };
    function xS(e, t, a) {
      {
        var i = e.child, l = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case x:
          case Fe:
          case w:
            p = f;
            break;
          case Se:
            p = f.render;
            break;
        }
        var g = !1;
        p !== null && t.has(p) && (g = !0), g ? Nx(e, a) : i !== null && xS(i, t, a), l !== null && xS(l, t, a);
      }
    }
    function Nx(e, t) {
      {
        var a = Mx(e, t);
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
    function Mx(e, t) {
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
    var kS;
    {
      kS = !1;
      try {
        var nE = Object.preventExtensions({});
      } catch {
        kS = !0;
      }
    }
    function Ax(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = et, this.subtreeFlags = et, this.deletions = null, this.lanes = oe, this.childLanes = oe, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !kS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var di = function(e, t, a, i) {
      return new Ax(e, t, a, i);
    };
    function DS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ux(e) {
      return typeof e == "function" && !DS(e) && e.defaultProps === void 0;
    }
    function jx(e) {
      if (typeof e == "function")
        return DS(e) ? w : x;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ie)
          return Se;
        if (t === _t)
          return Ge;
      }
      return z;
    }
    function vc(e, t) {
      var a = e.alternate;
      a === null ? (a = di(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = et, a.subtreeFlags = et, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Pn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case z:
        case x:
        case Fe:
          a.type = rd(e.type);
          break;
        case w:
          a.type = bS(e.type);
          break;
        case Se:
          a.type = wS(e.type);
          break;
      }
      return a;
    }
    function zx(e, t) {
      e.flags &= Pn | Sn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = oe, e.lanes = t, e.child = null, e.subtreeFlags = et, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
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
    function Px(e, t, a) {
      var i;
      return e === am ? (i = xt, t === !0 && (i |= en, i |= Ht)) : i = tt, na && (i |= Vt), di(H, null, null, i);
    }
    function OS(e, t, a, i, l, s) {
      var f = z, p = e;
      if (typeof e == "function")
        DS(e) ? (f = w, p = bS(p)) : p = rd(p);
      else if (typeof e == "string")
        f = G;
      else
        e: switch (e) {
          case mi:
            return Ju(a.children, l, s, t);
          case Xa:
            f = de, l |= en, (l & xt) !== tt && (l |= Ht);
            break;
          case yi:
            return Fx(a, l, s, t);
          case ke:
            return Vx(a, l, s, t);
          case He:
            return Hx(a, l, s, t);
          case xn:
            return rE(a, l, s, t);
          case un:
          // eslint-disable-next-line no-fallthrough
          case kt:
          // eslint-disable-next-line no-fallthrough
          case dn:
          // eslint-disable-next-line no-fallthrough
          case ur:
          // eslint-disable-next-line no-fallthrough
          case Tt:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case gi:
                  f = ve;
                  break e;
                case O:
                  f = se;
                  break e;
                case ie:
                  f = Se, p = wS(p);
                  break e;
                case _t:
                  f = Ge;
                  break e;
                case yt:
                  f = Ie, p = null;
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
    function LS(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, f = e.props, p = OS(l, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Ju(e, t, a, i) {
      var l = di(ae, e, i, t);
      return l.lanes = a, l;
    }
    function Fx(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = di(Ee, e, i, t | Vt);
      return l.elementType = yi, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function Vx(e, t, a, i) {
      var l = di(he, e, i, t);
      return l.elementType = ke, l.lanes = a, l;
    }
    function Hx(e, t, a, i) {
      var l = di(ge, e, i, t);
      return l.elementType = He, l.lanes = a, l;
    }
    function rE(e, t, a, i) {
      var l = di(X, e, i, t);
      l.elementType = xn, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function NS(e, t, a) {
      var i = di(pe, e, null, t);
      return i.lanes = a, i;
    }
    function Ix() {
      var e = di(G, null, null, tt);
      return e.elementType = "DELETED", e;
    }
    function Bx(e) {
      var t = di(it, null, null, tt);
      return t.stateNode = e, t;
    }
    function MS(e, t, a) {
      var i = e.children !== null ? e.children : [], l = di(q, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function aE(e, t) {
      return e === null && (e = di(z, null, null, tt)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function $x(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = vg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Pt, this.eventTimes = As(oe), this.expirationTimes = As(an), this.pendingLanes = oe, this.suspendedLanes = oe, this.pingedLanes = oe, this.expiredLanes = oe, this.mutableReadLanes = oe, this.finishedLanes = oe, this.entangledLanes = oe, this.entanglements = As(oe), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < kl; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case am:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Fu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function iE(e, t, a, i, l, s, f, p, g, C) {
      var R = new $x(e, t, a, p, g), U = Px(t, s);
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
      return Yg(U), R;
    }
    var AS = "18.3.1";
    function Wx(e, t, a) {
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
    var US, jS;
    US = !1, jS = {};
    function oE(e) {
      if (!e)
        return fi;
      var t = Cu(e), a = xb(t);
      if (t.tag === w) {
        var i = t.type;
        if (Xo(i))
          return M_(t, i, a);
      }
      return a;
    }
    function Yx(e, t) {
      {
        var a = Cu(e);
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
          if (!jS[s]) {
            jS[s] = !0;
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
    function lE(e, t, a, i, l, s, f, p) {
      var g = !1, C = null;
      return iE(e, t, g, C, a, i, l, s, f);
    }
    function uE(e, t, a, i, l, s, f, p, g, C) {
      var R = !0, U = iE(a, i, R, e, l, s, f, p, g);
      U.context = oE(null);
      var M = U.current, B = wa(), Q = Ku(M), Z = Ql(B, Q);
      return Z.callback = t ?? null, Iu(M, Z, Q), ZT(U, Q, B), U;
    }
    function cv(e, t, a, i) {
      Md(t, e);
      var l = t.current, s = wa(), f = Ku(l);
      Cn(f);
      var p = oE(a);
      t.context === null ? t.context = p : t.pendingContext = p, _i && sr !== null && !US && (US = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ht(sr) || "Unknown"));
      var g = Ql(s, f);
      g.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), g.callback = i);
      var C = Iu(l, g, f);
      return C !== null && (Cr(C, l, f, s), Sm(C, l, f)), f;
    }
    function uy(e) {
      var t = e.current;
      return t.child ? t.child.tag === G ? t.child.stateNode : t.child.stateNode : null;
    }
    function Qx(e) {
      switch (e.tag) {
        case H: {
          var t = e.stateNode;
          if (hf(t)) {
            var a = ah(t);
            rx(t, a);
          }
          break;
        }
        case he: {
          Xl(function() {
            var l = Ba(e, ct);
            if (l !== null) {
              var s = wa();
              Cr(l, e, ct, s);
            }
          });
          var i = ct;
          zS(e, i);
          break;
        }
      }
    }
    function sE(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = sh(a.retryLane, t));
    }
    function zS(e, t) {
      sE(e, t);
      var a = e.alternate;
      a && sE(a, t);
    }
    function Gx(e) {
      if (e.tag === he) {
        var t = ks, a = Ba(e, t);
        if (a !== null) {
          var i = wa();
          Cr(a, e, t, i);
        }
        zS(e, t);
      }
    }
    function qx(e) {
      if (e.tag === he) {
        var t = Ku(e), a = Ba(e, t);
        if (a !== null) {
          var i = wa();
          Cr(a, e, t, i);
        }
        zS(e, t);
      }
    }
    function cE(e) {
      var t = hn(e);
      return t === null ? null : t.stateNode;
    }
    var fE = function(e) {
      return null;
    };
    function Kx(e) {
      return fE(e);
    }
    var dE = function(e) {
      return !1;
    };
    function Xx(e) {
      return dE(e);
    }
    var pE = null, vE = null, hE = null, mE = null, yE = null, gE = null, SE = null, _E = null, CE = null;
    {
      var EE = function(e, t, a) {
        var i = t[a], l = wt(e) ? e.slice() : Rt({}, e);
        return a + 1 === t.length ? (wt(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = EE(e[i], t, a + 1), l);
      }, RE = function(e, t) {
        return EE(e, t, 0);
      }, bE = function(e, t, a, i) {
        var l = t[i], s = wt(e) ? e.slice() : Rt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[l], wt(s) ? s.splice(l, 1) : delete s[l];
        } else
          s[l] = bE(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return s;
      }, wE = function(e, t, a) {
        if (t.length !== a.length) {
          b("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              b("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return bE(e, t, a, 0);
      }, TE = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], s = wt(e) ? e.slice() : Rt({}, e);
        return s[l] = TE(e[l], t, a + 1, i), s;
      }, xE = function(e, t, a) {
        return TE(e, t, 0, a);
      }, PS = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      pE = function(e, t, a, i) {
        var l = PS(e, t);
        if (l !== null) {
          var s = xE(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = Rt({}, e.memoizedProps);
          var f = Ba(e, ct);
          f !== null && Cr(f, e, ct, an);
        }
      }, vE = function(e, t, a) {
        var i = PS(e, t);
        if (i !== null) {
          var l = RE(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = Rt({}, e.memoizedProps);
          var s = Ba(e, ct);
          s !== null && Cr(s, e, ct, an);
        }
      }, hE = function(e, t, a, i) {
        var l = PS(e, t);
        if (l !== null) {
          var s = wE(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = Rt({}, e.memoizedProps);
          var f = Ba(e, ct);
          f !== null && Cr(f, e, ct, an);
        }
      }, mE = function(e, t, a) {
        e.pendingProps = xE(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, ct);
        i !== null && Cr(i, e, ct, an);
      }, yE = function(e, t) {
        e.pendingProps = RE(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ba(e, ct);
        a !== null && Cr(a, e, ct, an);
      }, gE = function(e, t, a) {
        e.pendingProps = wE(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, ct);
        i !== null && Cr(i, e, ct, an);
      }, SE = function(e) {
        var t = Ba(e, ct);
        t !== null && Cr(t, e, ct, an);
      }, _E = function(e) {
        fE = e;
      }, CE = function(e) {
        dE = e;
      };
    }
    function Jx(e) {
      var t = ea(e);
      return t === null ? null : t.stateNode;
    }
    function Zx(e) {
      return null;
    }
    function ek() {
      return sr;
    }
    function tk(e) {
      var t = e.findFiberByHostInstance, a = v.ReactCurrentDispatcher;
      return bu({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: pE,
        overrideHookStateDeletePath: vE,
        overrideHookStateRenamePath: hE,
        overrideProps: mE,
        overridePropsDeletePath: yE,
        overridePropsRenamePath: gE,
        setErrorHandler: _E,
        setSuspenseHandler: CE,
        scheduleUpdate: SE,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Jx,
        findFiberByHostInstance: t || Zx,
        // React Refresh
        findHostInstancesForRefresh: Lx,
        scheduleRefresh: Dx,
        scheduleRoot: Ox,
        setRefreshHandler: kx,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: ek,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: AS
      });
    }
    var kE = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function FS(e) {
      this._internalRoot = e;
    }
    sy.prototype.render = FS.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : cy(arguments[1]) ? y("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && y("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== jn) {
          var i = cE(t.current);
          i && i.parentNode !== a && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      cv(e, t, null, null);
    }, sy.prototype.unmount = FS.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        VC() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Xl(function() {
          cv(null, e, null, null);
        }), k_(t);
      }
    };
    function nk(e, t) {
      if (!cy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      DE(e);
      var a = !1, i = !1, l = "", s = kE;
      t != null && (t.hydrate ? b("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Lr && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = lE(e, am, null, a, i, l, s);
      Xh(f.current, e);
      var p = e.nodeType === jn ? e.parentNode : e;
      return mp(p), new FS(f);
    }
    function sy(e) {
      this._internalRoot = e;
    }
    function rk(e) {
      e && Sh(e);
    }
    sy.prototype.unstable_scheduleHydration = rk;
    function ak(e, t, a) {
      if (!cy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      DE(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", g = kE;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (g = a.onRecoverableError));
      var C = uE(t, null, e, am, i, s, f, p, g);
      if (Xh(C.current, e), mp(e), l)
        for (var R = 0; R < l.length; R++) {
          var U = l[R];
          uw(C, U);
        }
      return new sy(C);
    }
    function cy(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === Xi || e.nodeType === gd));
    }
    function fv(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === Xi || e.nodeType === gd || e.nodeType === jn && e.nodeValue === " react-mount-point-unstable "));
    }
    function DE(e) {
      e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), xp(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var ik = v.ReactCurrentOwner, OE;
    OE = function(e) {
      if (e._reactRootContainer && e.nodeType !== jn) {
        var t = cE(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = VS(e), l = !!(i && zu(i));
      l && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function VS(e) {
      return e ? e.nodeType === Xi ? e.documentElement : e.firstChild : null;
    }
    function LE() {
    }
    function ok(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var M = uy(f);
            s.call(M);
          };
        }
        var f = uE(
          t,
          i,
          e,
          Fu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          LE
        );
        e._reactRootContainer = f, Xh(f.current, e);
        var p = e.nodeType === jn ? e.parentNode : e;
        return mp(p), Xl(), f;
      } else {
        for (var g; g = e.lastChild; )
          e.removeChild(g);
        if (typeof i == "function") {
          var C = i;
          i = function() {
            var M = uy(R);
            C.call(M);
          };
        }
        var R = lE(
          e,
          Fu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          LE
        );
        e._reactRootContainer = R, Xh(R.current, e);
        var U = e.nodeType === jn ? e.parentNode : e;
        return mp(U), Xl(function() {
          cv(t, R, a, i);
        }), R;
      }
    }
    function lk(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function fy(e, t, a, i, l) {
      OE(a), lk(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = ok(a, t, e, l, i);
      else {
        if (f = s, typeof l == "function") {
          var p = l;
          l = function() {
            var g = uy(f);
            p.call(g);
          };
        }
        cv(t, f, e, l);
      }
      return uy(f);
    }
    var NE = !1;
    function uk(e) {
      {
        NE || (NE = !0, y("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = ik.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", jt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Xr ? e : Yx(e, "findDOMNode");
    }
    function sk(e, t, a) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !fv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = xp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return fy(null, e, t, !0, a);
    }
    function ck(e, t, a) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !fv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = xp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return fy(null, e, t, !1, a);
    }
    function fk(e, t, a, i) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !fv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !zy(e))
        throw new Error("parentComponent must be a valid React Component");
      return fy(e, t, a, !1, i);
    }
    var ME = !1;
    function dk(e) {
      if (ME || (ME = !0, y("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !fv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = xp(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = VS(e), i = a && !zu(a);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Xl(function() {
          fy(null, null, e, !1, function() {
            e._reactRootContainer = null, k_(e);
          });
        }), !0;
      } else {
        {
          var l = VS(e), s = !!(l && zu(l)), f = e.nodeType === Xr && fv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    xr(Qx), ku(Gx), hh(qx), Fs(Va), Zd(dh), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Lc(vR), jy(yS, ax, Xl);
    function pk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!cy(t))
        throw new Error("Target container is not a DOM element.");
      return Wx(e, t, null, a);
    }
    function vk(e, t, a, i) {
      return fk(e, t, a, i);
    }
    var HS = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [zu, Af, Jh, yu, Nc, yS]
    };
    function hk(e, t) {
      return HS.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), nk(e, t);
    }
    function mk(e, t, a) {
      return HS.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), ak(e, t, a);
    }
    function yk(e) {
      return VC() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Xl(e);
    }
    var gk = tk({
      findFiberByHostInstance: Zs,
      bundleType: 1,
      version: AS,
      rendererPackageName: "react-dom"
    });
    if (!gk && An && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var AE = window.location.protocol;
      /^(https?|file):$/.test(AE) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (AE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ga.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = HS, Ga.createPortal = pk, Ga.createRoot = hk, Ga.findDOMNode = uk, Ga.flushSync = yk, Ga.hydrate = sk, Ga.hydrateRoot = mk, Ga.render = ck, Ga.unmountComponentAtNode = dk, Ga.unstable_batchedUpdates = yS, Ga.unstable_renderSubtreeIntoContainer = vk, Ga.version = AS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })()), Ga;
}
var a2;
function DO() {
  if (a2) return my.exports;
  a2 = 1;
  function h() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h);
      } catch (m) {
        console.error(m);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (h(), my.exports = xO()) : my.exports = kO(), my.exports;
}
var ZS = DO();
const hv = /* @__PURE__ */ S2(ZS);
function QS(h, m) {
  (m == null || m > h.length) && (m = h.length);
  for (var v = 0, E = Array(m); v < m; v++) E[v] = h[v];
  return E;
}
function OO(h) {
  if (Array.isArray(h)) return h;
}
function LO(h) {
  if (Array.isArray(h)) return QS(h);
}
function NO(h) {
  if (h === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return h;
}
function i2(h, m, v, E, k, b, y) {
  try {
    var N = h[b](y), x = N.value;
  } catch (w) {
    return void v(w);
  }
  N.done ? m(x) : Promise.resolve(x).then(E, k);
}
function MO(h) {
  return function() {
    var m = this, v = arguments;
    return new Promise(function(E, k) {
      var b = h.apply(m, v);
      function y(x) {
        i2(b, E, k, y, N, "next", x);
      }
      function N(x) {
        i2(b, E, k, y, N, "throw", x);
      }
      y(void 0);
    });
  };
}
function _y(h, m, v) {
  return m = GS(m), FO(h, R2() ? Reflect.construct(m, v || [], GS(h).constructor) : m.apply(h, v));
}
function Sv(h, m) {
  if (!(h instanceof m)) throw new TypeError("Cannot call a class as a function");
}
function o2(h, m) {
  for (var v = 0; v < m.length; v++) {
    var E = m[v];
    E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(h, Sy(E.key), E);
  }
}
function _v(h, m, v) {
  return m && o2(h.prototype, m), v && o2(h, v), Object.defineProperty(h, "prototype", { writable: !1 }), h;
}
function ld(h, m, v) {
  return (m = Sy(m)) in h ? Object.defineProperty(h, m, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : h[m] = v, h;
}
function gc() {
  return (gc = Object.assign ? Object.assign.bind() : function(h) {
    for (var m = 1; m < arguments.length; m++) {
      var v, E = arguments[m];
      for (v in E) !{}.hasOwnProperty.call(E, v) || (h[v] = E[v]);
    }
    return h;
  }).apply(null, arguments);
}
function GS(h) {
  return (GS = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  })(h);
}
function Cy(h, m) {
  if (typeof m != "function" && m !== null) throw new TypeError("Super expression must either be null or a function");
  h.prototype = Object.create(m && m.prototype, { constructor: { value: h, writable: !0, configurable: !0 } }), Object.defineProperty(h, "prototype", { writable: !1 }), m && b2(h, m);
}
function R2() {
  try {
    var h = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (R2 = function() {
    return !!h;
  })();
}
function AO(h) {
  if (typeof Symbol < "u" && h[Symbol.iterator] != null || h["@@iterator"] != null) return Array.from(h);
}
function UO(h, m) {
  var v = h == null ? null : typeof Symbol < "u" && h[Symbol.iterator] || h["@@iterator"];
  if (v != null) {
    var E, k, b, y, N = [], x = !0, w = !1;
    try {
      if (b = (v = v.call(h)).next, m !== 0) for (; !(x = (E = b.call(v)).done) && (N.push(E.value), N.length !== m); x = !0) ;
    } catch (z) {
      w = !0, k = z;
    } finally {
      try {
        if (!x && v.return != null && (y = v.return(), Object(y) !== y)) return;
      } finally {
        if (w) throw k;
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
function l2(h, m) {
  var v, E = Object.keys(h);
  return Object.getOwnPropertySymbols && (v = Object.getOwnPropertySymbols(h), m && (v = v.filter(function(k) {
    return Object.getOwnPropertyDescriptor(h, k).enumerable;
  })), E.push.apply(E, v)), E;
}
function le(h) {
  for (var m = 1; m < arguments.length; m++) {
    var v = arguments[m] != null ? arguments[m] : {};
    m % 2 ? l2(Object(v), !0).forEach(function(E) {
      ld(h, E, v[E]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(v)) : l2(Object(v)).forEach(function(E) {
      Object.defineProperty(h, E, Object.getOwnPropertyDescriptor(v, E));
    });
  }
  return h;
}
function $i(h, m) {
  if (h == null) return {};
  var v, E = PO(h, m);
  if (Object.getOwnPropertySymbols) for (var k = Object.getOwnPropertySymbols(h), b = 0; b < k.length; b++) v = k[b], m.includes(v) || {}.propertyIsEnumerable.call(h, v) && (E[v] = h[v]);
  return E;
}
function PO(h, m) {
  if (h == null) return {};
  var v, E = {};
  for (v in h) if ({}.hasOwnProperty.call(h, v)) {
    if (m.includes(v)) continue;
    E[v] = h[v];
  }
  return E;
}
function FO(h, m) {
  if (m && (typeof m == "object" || typeof m == "function")) return m;
  if (m !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return NO(h);
}
function id() {
  id = function() {
    return m;
  };
  var h, m = {}, v = Object.prototype, E = v.hasOwnProperty, k = Object.defineProperty || function($, X, we) {
    $[X] = we.value;
  }, Se = typeof Symbol == "function" ? Symbol : {}, b = Se.iterator || "@@iterator", y = Se.asyncIterator || "@@asyncIterator", N = Se.toStringTag || "@@toStringTag";
  function x($, X, we) {
    return Object.defineProperty($, X, { value: we, enumerable: !0, configurable: !0, writable: !0 }), $[X];
  }
  try {
    x({}, "");
  } catch {
    x = function(X, we, Be) {
      return X[we] = Be;
    };
  }
  function w($, _e, we, j) {
    var De, Re, ne, Ne, _e = _e && _e.prototype instanceof de ? _e : de, _e = Object.create(_e.prototype), j = new it(j || []);
    return k(_e, "_invoke", { value: (De = $, Re = we, ne = j, Ne = H, function(J, Ze) {
      if (Ne === G) throw Error("Generator is already running");
      if (Ne === pe) {
        if (J === "throw") throw Ze;
        return { value: h, done: !0 };
      }
      for (ne.method = J, ne.arg = Ze; ; ) {
        var ze = ne.delegate;
        if (ze && (ze = (function mt(nt, Me) {
          var st = Me.method, dt = nt.iterator[st];
          return dt === h ? (Me.delegate = null, st === "throw" && nt.iterator.return && (Me.method = "return", Me.arg = h, mt(nt, Me), Me.method === "throw") || st !== "return" && (Me.method = "throw", Me.arg = new TypeError("The iterator does not provide a '" + st + "' method")), ae) : (st = z(dt, nt.iterator, Me.arg), st.type === "throw" ? (Me.method = "throw", Me.arg = st.arg, Me.delegate = null, ae) : (dt = st.arg, dt ? dt.done ? (Me[nt.resultName] = dt.value, Me.next = nt.nextLoc, Me.method !== "return" && (Me.method = "next", Me.arg = h), Me.delegate = null, ae) : dt : (Me.method = "throw", Me.arg = new TypeError("iterator result is not an object"), Me.delegate = null, ae)));
        })(ze, ne), ze)) {
          if (ze === ae) continue;
          return ze;
        }
        if (ne.method === "next") ne.sent = ne._sent = ne.arg;
        else if (ne.method === "throw") {
          if (Ne === H) throw Ne = pe, ne.arg;
          ne.dispatchException(ne.arg);
        } else ne.method === "return" && ne.abrupt("return", ne.arg);
        if (Ne = G, ze = z(De, Re, ne), ze.type === "normal") {
          if (Ne = ne.done ? pe : q, ze.arg === ae) continue;
          return { value: ze.arg, done: ne.done };
        }
        ze.type === "throw" && (Ne = pe, ne.method = "throw", ne.arg = ze.arg);
      }
    }) }), _e;
  }
  function z($, X, we) {
    try {
      return { type: "normal", arg: $.call(X, we) };
    } catch (Be) {
      return { type: "throw", arg: Be };
    }
  }
  m.wrap = w;
  var H = "suspendedStart", q = "suspendedYield", G = "executing", pe = "completed", ae = {};
  function de() {
  }
  function se() {
  }
  function ve() {
  }
  var Se = {}, Ee = (x(Se, b, function() {
    return this;
  }), Object.getPrototypeOf), Ee = Ee && Ee(Ee(ge([]))), he = (Ee && Ee !== v && E.call(Ee, b) && (Se = Ee), ve.prototype = de.prototype = Object.create(Se));
  function Ge($) {
    ["next", "throw", "return"].forEach(function(X) {
      x($, X, function(we) {
        return this._invoke(X, we);
      });
    });
  }
  function Fe($, X) {
    var we;
    k(this, "_invoke", { value: function(Be, De) {
      function Re() {
        return new X(function(ne, Ne) {
          (function _e(nt, J, Ze, ze) {
            var mt, nt = z($[nt], $, J);
            if (nt.type !== "throw") return (J = (mt = nt.arg).value) && typeof J == "object" && E.call(J, "__await") ? X.resolve(J.__await).then(function(Me) {
              _e("next", Me, Ze, ze);
            }, function(Me) {
              _e("throw", Me, Ze, ze);
            }) : X.resolve(J).then(function(Me) {
              mt.value = Me, Ze(mt);
            }, function(Me) {
              return _e("throw", Me, Ze, ze);
            });
            ze(nt.arg);
          })(Be, De, ne, Ne);
        });
      }
      return we = we ? we.then(Re, Re) : Re();
    } });
  }
  function Ie($) {
    var X = { tryLoc: $[0] };
    1 in $ && (X.catchLoc = $[1]), 2 in $ && (X.finallyLoc = $[2], X.afterLoc = $[3]), this.tryEntries.push(X);
  }
  function qe($) {
    var X = $.completion || {};
    X.type = "normal", delete X.arg, $.completion = X;
  }
  function it($) {
    this.tryEntries = [{ tryLoc: "root" }], $.forEach(Ie, this), this.reset(!0);
  }
  function ge($) {
    if ($ || $ === "") {
      var X, we = $[b];
      if (we) return we.call($);
      if (typeof $.next == "function") return $;
      if (!isNaN($.length)) return X = -1, (we = function Be() {
        for (; ++X < $.length; ) if (E.call($, X)) return Be.value = $[X], Be.done = !1, Be;
        return Be.value = h, Be.done = !0, Be;
      }).next = we;
    }
    throw new TypeError(typeof $ + " is not iterable");
  }
  return k(he, "constructor", { value: se.prototype = ve, configurable: !0 }), k(ve, "constructor", { value: se, configurable: !0 }), se.displayName = x(ve, N, "GeneratorFunction"), m.isGeneratorFunction = function($) {
    return $ = typeof $ == "function" && $.constructor, !!$ && ($ === se || ($.displayName || $.name) === "GeneratorFunction");
  }, m.mark = function($) {
    return Object.setPrototypeOf ? Object.setPrototypeOf($, ve) : ($.__proto__ = ve, x($, N, "GeneratorFunction")), $.prototype = Object.create(he), $;
  }, m.awrap = function($) {
    return { __await: $ };
  }, Ge(Fe.prototype), x(Fe.prototype, y, function() {
    return this;
  }), m.AsyncIterator = Fe, m.async = function($, X, we, Be, De) {
    De === void 0 && (De = Promise);
    var Re = new Fe(w($, X, we, Be), De);
    return m.isGeneratorFunction(X) ? Re : Re.next().then(function(ne) {
      return ne.done ? ne.value : Re.next();
    });
  }, Ge(he), x(he, N, "Generator"), x(he, b, function() {
    return this;
  }), x(he, "toString", function() {
    return "[object Generator]";
  }), m.keys = function($) {
    var X, we = Object($), Be = [];
    for (X in we) Be.push(X);
    return Be.reverse(), function De() {
      for (; Be.length; ) {
        var Re = Be.pop();
        if (Re in we) return De.value = Re, De.done = !1, De;
      }
      return De.done = !0, De;
    };
  }, m.values = ge, it.prototype = { constructor: it, reset: function($) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = h, this.done = !1, this.delegate = null, this.method = "next", this.arg = h, this.tryEntries.forEach(qe), !$) for (var X in this) X.charAt(0) === "t" && E.call(this, X) && !isNaN(+X.slice(1)) && (this[X] = h);
  }, stop: function() {
    this.done = !0;
    var $ = this.tryEntries[0].completion;
    if ($.type === "throw") throw $.arg;
    return this.rval;
  }, dispatchException: function($) {
    if (this.done) throw $;
    var X = this;
    function we(_e, j) {
      return Re.type = "throw", Re.arg = $, X.next = _e, j && (X.method = "next", X.arg = h), !!j;
    }
    for (var Be = this.tryEntries.length - 1; 0 <= Be; --Be) {
      var De = this.tryEntries[Be], Re = De.completion;
      if (De.tryLoc === "root") return we("end");
      if (De.tryLoc <= this.prev) {
        var ne = E.call(De, "catchLoc"), Ne = E.call(De, "finallyLoc");
        if (ne && Ne) {
          if (this.prev < De.catchLoc) return we(De.catchLoc, !0);
          if (this.prev < De.finallyLoc) return we(De.finallyLoc);
        } else if (ne) {
          if (this.prev < De.catchLoc) return we(De.catchLoc, !0);
        } else {
          if (!Ne) throw Error("try statement without catch or finally");
          if (this.prev < De.finallyLoc) return we(De.finallyLoc);
        }
      }
    }
  }, abrupt: function($, X) {
    for (var we = this.tryEntries.length - 1; 0 <= we; --we) {
      var Be = this.tryEntries[we];
      if (Be.tryLoc <= this.prev && E.call(Be, "finallyLoc") && this.prev < Be.finallyLoc) {
        var De = Be;
        break;
      }
    }
    var Re = (De = De && ($ === "break" || $ === "continue") && De.tryLoc <= X && X <= De.finallyLoc ? null : De) ? De.completion : {};
    return Re.type = $, Re.arg = X, De ? (this.method = "next", this.next = De.finallyLoc, ae) : this.complete(Re);
  }, complete: function($, X) {
    if ($.type === "throw") throw $.arg;
    return $.type === "break" || $.type === "continue" ? this.next = $.arg : $.type === "return" ? (this.rval = this.arg = $.arg, this.method = "return", this.next = "end") : $.type === "normal" && X && (this.next = X), ae;
  }, finish: function($) {
    for (var X = this.tryEntries.length - 1; 0 <= X; --X) {
      var we = this.tryEntries[X];
      if (we.finallyLoc === $) return this.complete(we.completion, we.afterLoc), qe(we), ae;
    }
  }, catch: function($) {
    for (var X = this.tryEntries.length - 1; 0 <= X; --X) {
      var we, Be, De = this.tryEntries[X];
      if (De.tryLoc === $) return (we = De.completion).type === "throw" && (Be = we.arg, qe(De)), Be;
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function($, X, we) {
    return this.delegate = { iterator: ge($), resultName: X, nextLoc: we }, this.method === "next" && (this.arg = h), ae;
  } }, m;
}
function b2(h, m) {
  return (b2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(v, E) {
    return v.__proto__ = E, v;
  })(h, m);
}
function u2(h, m) {
  return OO(h) || UO(h, m) || w2(h, m) || jO();
}
function Ey(h) {
  return LO(h) || AO(h) || w2(h) || zO();
}
function VO(h, m) {
  if (typeof h != "object" || !h) return h;
  var v = h[Symbol.toPrimitive];
  if (v === void 0) return (m === "string" ? String : Number)(h);
  if (v = v.call(h, m), typeof v != "object") return v;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
function Sy(h) {
  return h = VO(h, "string"), typeof h == "symbol" ? h : h + "";
}
function Gr(h) {
  return (Gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(m) {
    return typeof m;
  } : function(m) {
    return m && typeof Symbol == "function" && m.constructor === Symbol && m !== Symbol.prototype ? "symbol" : typeof m;
  })(h);
}
function w2(h, m) {
  var v;
  if (h) return typeof h == "string" ? QS(h, m) : (v = (v = {}.toString.call(h).slice(8, -1)) === "Object" && h.constructor ? h.constructor.name : v) === "Map" || v === "Set" ? Array.from(h) : v === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v) ? QS(h, m) : void 0;
}
var T2 = { react: { componentWrap: "div", slotWrap: "div", componentWrapAttrs: { __use_react_component_wrap: "", style: { all: "unset" } }, slotWrapAttrs: { __use_react_slot_wrap: "", style: { all: "unset" } }, vueNamedSlotsKey: ["node:"] }, vue: { componentWrapHOC: function(h) {
  return function() {
    var m = (0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}).portals;
    return vt.createElement(vt.Fragment, null, h, (m === void 0 ? [] : m).map(function(v) {
      var E = v.Portal;
      return vt.createElement(E, { key: v.key });
    }));
  };
}, componentWrapAttrs: { "data-use-vue-component-wrap": "", style: { all: "unset" } }, slotWrapAttrs: { "data-use-vue-slot-wrap": "", style: { all: "unset" } } } };
function x2() {
  var h = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : { react: {}, vue: {} }, v = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : T2, m = 2 < arguments.length ? arguments[2] : void 0, v = (h.vue || (h.vue = {}), h.react || (h.react = {}), [v, le(le({}, h), {}, { react: le(le(le({}, v.react), h.react), {}, { componentWrapAttrs: le(le({}, v.react.componentWrapAttrs), h.react.componentWrapAttrs), slotWrapAttrs: le(le({}, v.react.slotWrapAttrs), h.react.slotWrapAttrs) }), vue: le(le(le({}, v.vue), h.vue), {}, { componentWrapAttrs: le(le({}, v.vue.componentWrapAttrs), h.vue.componentWrapAttrs), slotWrapAttrs: le(le({}, v.vue.slotWrapAttrs), h.vue.slotWrapAttrs) }) })]);
  return m && v.unshift({}), Object.assign.apply(this, v);
}
var k2 = ["getElementById", "getElementsByClassName", "getElementsByTagName", "getElementsByTagNameNS", "querySelector", "querySelectorAll"], od = { Document: {}, Element: {} };
function HO(h) {
  Object.keys(od).forEach(function(m) {
    k2.forEach(function(v) {
      var E = od[m][v] || window[m].prototype[v];
      E && (od[m][v] = E, window[m].prototype[v] = function() {
        for (var k = arguments.length, b = new Array(k), y = 0; y < k; y++) b[y] = arguments[y];
        var N = E.apply(this, b);
        return N && (N.constructor !== NodeList || N.constructor === NodeList && 0 < N.length) ? N : ((N = v) === "getElementById" && (N = "querySelector", b = ["#" + b[0]]), (od.Element[N] || Element.prototype[N]).apply(h, b));
      });
    });
  });
}
function IO() {
  Object.keys(od).forEach(function(h) {
    k2.forEach(function(m) {
      window[h].prototype[m] = od[h][m];
    });
  });
}
var BO = ["ref"], $O = ["key"], WO = ["hashList"], WS = parseInt(ZS.version);
var YO = (() => {
  function h(m) {
    return Sv(this, h), _y(this, h, [m]);
  }
  return Cy(h, vt.Component), _v(h, [{ key: "render", value: function() {
    var m = this.props.component, v = this.props.passedProps, v = (v.ref, $i(v, BO));
    return vt.createElement(m, v, this.props.children);
  } }]);
})(), QO = function(h, m, v) {
  var E = (() => {
    function k(b) {
      var y;
      return Sv(this, k), (y = _y(this, k, [b])).state = le(le({}, b), m.isSlots ? { children: h } : {}), y.setRef = y.setRef.bind(y), y.vueInReactCall = y.vueInReactCall.bind(y), (y.__veauryVueWrapperRef__ = v).__veauryVueInReactCall__ = y.vueInReactCall, y;
    }
    return Cy(k, vt.Component), _v(k, [{ key: "reactPropsLinkToVueInstance", value: function(b) {
      Object.keys(b).forEach(function(y) {
        v[y] || (v[y] = b[y]);
      }), Object.getOwnPropertyNames(b.__proto__).filter(function(y) {
        return ["constructor", "render"].indexOf(y) < 0;
      }).forEach(function(y) {
        v[y] || (v[y] = b[y]);
      });
    } }, { key: "setRef", value: function(b) {
      var y = this;
      b && (v.__veauryReactRef__ = b, this.reactPropsLinkToVueInstance(b), Promise.resolve().then(function() {
        return y.reactPropsLinkToVueInstance(b);
      }), (this.setRef.current = b).__veauryVueWrapperRef__ = v);
    } }, { key: "createSlot", value: function(b) {
      return { originVNode: b, inheritAttrs: !1, __fromReactSlot: !0, render: function() {
        var y, N;
        return ((y = b = (b = ((N = this.$slots) == null || (y = N.default) == null ? void 0 : y.call(N)) || b) instanceof Function ? b(this) : b) == null ? void 0 : y.length) === 1 && (N = b[0]) != null && N.data && ((y = this.$attrs).key, N = $i(y, $O), b[0].props = le(le({}, N), b[0].props)), b;
      } };
    } }, { key: "componentWillUnmount", value: function() {
      v.__veauryReactRef__ && (v.__veauryReactRef__.__veauryVueWrapperRef__ = null, v.__veauryReactRef__ = null);
    } }, { key: "vueInReactCall", value: function(b) {
      var y = this, N = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
      return 2 < arguments.length && arguments[2] && b && b[0] ? b.map(function(x, w) {
        return gy(y.createSlot(x instanceof Function ? x : [x]), le(le(le({}, m), N), {}, { isSlots: !0, wrapInstance: v })).render({ key: x?.key || void 0 });
      }) : gy(this.createSlot(b), le(le(le({}, m), N), {}, { isSlots: !0, wrapInstance: v })).render();
    } }, { key: "render", value: function() {
      var b, y, N, x = this, ae = this.state, w = ae.hashList, z = $i(ae, WO), H = {}, q = {};
      for (b in z) y = b, N = void 0, z.hasOwnProperty(y) && z[y] != null && (z[y].__slot ? (z[y].reactSlot ? z[y] = z[y].reactSlot : (N = z[y], m.defaultSlotsFormatter && z[y].__trueChildren ? (z[y].__trueChildren.__top__ = x.__veauryVueWrapperRef__, z[y] = m.defaultSlotsFormatter(z[y].__trueChildren, x.vueInReactCall, w), z[y] instanceof Array ? z[y] = Ey(z[y]) : -1 < ["string", "number"].indexOf(Gr(z[y])) ? z[y] = [z[y]] : Gr(z[y]) === "object" && (z[y] = le({}, z[y]))) : z[y] = le({}, gy(x.createSlot(z[y]), le(le({}, m), {}, { isSlots: !0, wrapInstance: v })).render()), z[y].vueFunction = N), H[y] = z[y]) : z[y].__scopedSlot && (z[y] = z[y](x.createSlot), q[y] = z[y]));
      var G, pe, ae = {};
      return ae.ref = this.setRef, m.isSlots ? this.state.children || this.props.children : (G = z, h.__syncUpdateForPureReactInVue && Object.keys(h.__syncUpdateForPureReactInVue).map(function(de) {
        var se, ve;
        G[de] && typeof G[de] == "function" && (se = x.__veauryVueWrapperRef__, ve = G[de], G[de] = function() {
          for (var Se = arguments.length, Ee = new Array(Se), he = 0; he < Se; he++) Ee[he] = arguments[he];
          se.__veaurySyncUpdateProps__(h.__syncUpdateForPureReactInVue[de].apply(this, Ee)), ve.apply(this, Ee), se.macroTaskUpdate = !0, se.__veauryMountReactComponent__(!0, !0, {});
        });
      }), pe = le(le(le({}, G = m.defaultPropsFormatter ? m.defaultPropsFormatter.call(this, G, this.vueInReactCall, w) : G), H), q), Object.getPrototypeOf(h) !== Function.prototype && (Gr(h) !== "object" || h.render) || k.catchVueRefs() ? (Object.getPrototypeOf(h) === Function.prototype && delete ae.ref, vt.createElement(h, gc({}, pe, ae))) : vt.createElement(YO, gc({ passedProps: pe, component: h }, ae), pe.children));
    } }], [{ key: "catchVueRefs", value: function() {
      if (v.$parent) {
        for (var b in v.$parent.$refs) if (v.$parent.$refs[b] === v) return !0;
      }
      return !1;
    } }]);
  })();
  return ld(E, "displayName", "applyReact_".concat(h.displayName || h.name || "Component")), E;
};
function e_(h) {
  var m = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
  return h.__esModule && h.default && (h = h.default), m.isSlots && (h = h()), m = x2(m, void 0, !0), { originReactComponent: h, setup: function(v, E) {
    var k, b, y, N;
    if (!m.isSlots) return k = {}, b = Ck({}), y = Ek(), typeof (N = m.useInjectPropsFromWrapper || h.__veauryInjectPropsFromWrapper__) == "function" && (typeof (N = N.call(y.proxy, v)) != "function" ? (Object.assign(b, N), k.__veauryInjectedProps__ = b) : y.proxy.__veauryInjectedComputed__ = N), k;
  }, data: function() {
    return { VEAURY_Portals: [] };
  }, created: function() {
    this.__veauryPortalKeyPool__ = [], this.__veauryMaxPortalCount__ = 0;
  }, computed: { __veauryInjectedProps__: function() {
    var v;
    return (v = this.__veauryInjectedComputed__) == null ? void 0 : v.call(this);
  } }, render: function() {
    var v = tu(m.react.componentWrap, le({ ref: "react" }, m.react.componentWrapAttrs || {}), this.VEAURY_Portals.map(function(E) {
      return (0, E.Portal)(tu, E.key);
    }));
    return this.__veauryCheckReactSlot__(this.$slots), v;
  }, methods: { __veauryCheckReactSlot__: function(v) {
    var E = this;
    function k(b, y, N) {
      return y[N] && (b[N] = y[N], 1);
    }
    Gr(v) === "object" && v != null && (v instanceof Array ? v.forEach(function(b) {
      E.__veauryCheckReactSlot__(b.children);
    }) : Object.keys(v).forEach(function(x) {
      var y, N, x = v[x];
      if (typeof x == "function") {
        try {
          y = x.apply(E, x.__reactArgs || [{}]);
        } catch {
          return;
        }
        (x.__trueChildren = y).forEach(function(w) {
          w.children && E.__veauryCheckReactSlot__(w.children);
        }), y.length !== 1 || k(x, y = y[0], "reactSlot") || k(x, y, "reactFunction") || y.type !== g2 || ((N = y.children) == null ? void 0 : N.length) !== 1 || k(x, N = y.children[0], "reactSlot") || k(x, N, "reactFunction");
      }
    }));
  }, __veauryPushVuePortal__: function(v) {
    var E = this.__veauryPortalKeyPool__.shift() || this.__veauryMaxPortalCount__++;
    this.VEAURY_Portals.push({ Portal: v, key: E });
  }, __veauryRemoveVuePortal__: function(v) {
    var E, k = this.VEAURY_Portals.find(function(b, y) {
      if (b.Portal === v) return E = y, !0;
    });
    this.__veauryPortalKeyPool__.push(k.key), this.VEAURY_Portals.splice(E, 1);
  }, __veauryGetScopeSlot__: function(v, E, k) {
    var b = this;
    function y(N) {
      function x() {
        for (var w, z = this, H = arguments.length, q = new Array(H), G = 0; G < H; G++) q[G] = arguments[G];
        return v.reactFunction ? v.reactFunction.apply(this, q) : m.defaultSlotsFormatter ? ((w = v.apply(this, q)).__top__ = b, (w = m.defaultSlotsFormatter(w, b.__veauryVueInReactCall__, E)) instanceof Array || -1 < Gr(w).indexOf("string", "number") ? w = Ey(w) : Gr(w) === "object" && (w = le({}, w)), w) : gy(N(function() {
          return v.apply(z, q);
        }), le(le({}, m), {}, { isSlots: !0, wrapInstance: b })).render();
      }
      return m.pureTransformer && k ? x.vueFunction = k : x.vueFunction = v, x;
    }
    return y.__scopedSlot = !0, y;
  }, __veaurySyncUpdateProps__: function(v) {
    this.__veauryReactInstance__ && this.__veauryReactInstance__.setState(v);
  }, __veauryMountReactComponent__: function(v, E) {
    var k = arguments, b = this;
    return MO(id().mark(function y() {
      var N, x, w, z, H, q, G, pe, ae, de, se, ve, Se, Ee, he, Ge, Fe;
      return id().wrap(function(Ie) {
        for (; ; ) switch (Ie.prev = Ie.next) {
          case 0:
            if (N = 2 < k.length && k[2] !== void 0 ? k[2] : {}, x = {}, w = [], (pe = b.$.vnode.scopeId) && (x[pe] = "", w.push(pe)), z = {}, H = {}, v && (E == null || !E.slot)) {
              Ie.next = 18;
              break;
            }
            G = id().mark(function qe(it) {
              var ge;
              return id().wrap(function($) {
                for (; ; ) switch ($.prev = $.next) {
                  case 0:
                    if (b.$slots.hasOwnProperty(it) && b.$slots[it] != null) {
                      $.next = 2;
                      break;
                    }
                    return $.abrupt("return", 0);
                  case 2:
                    if ((ge = m.react.vueNamedSlotsKey.find(function(X) {
                      return it.indexOf(X) === 0;
                    })) || it === "default") return ge = it.replace(new RegExp("^".concat(ge)), ""), z[ge] = b.$slots[it], z[ge].__slot = !0, $.abrupt("return", 0);
                    $.next = 8;
                    break;
                  case 8:
                    H[it] = b.__veauryGetScopeSlot__(b.$slots[it], w, (ge = b.$.vnode) == null || (ge = ge.children) == null ? void 0 : ge[it]);
                  case 9:
                  case "end":
                    return $.stop();
                }
              }, qe);
            }), Ie.t0 = id().keys(b.$slots || {});
          case 10:
            if ((Ie.t1 = Ie.t0()).done) {
              Ie.next = 18;
              break;
            }
            return pe = Ie.t1.value, Ie.delegateYield(G(pe), "t2", 13);
          case 13:
            if (Ie.t2 === 0) return Ie.abrupt("continue", 10);
            Ie.next = 16;
            break;
          case 16:
            Ie.next = 10;
            break;
          case 18:
            if ((!v || E != null && E.slot) && (ae = le({}, z), q = ae.default, delete ae.default), b.__veauryLast__ = b.__veauryLast__ || {}, b.__veauryLast__.slot = b.__veauryLast__.slot || {}, b.__veauryLast__.attrs = b.__veauryLast__.attrs || {}, de = { slot: function() {
              b.__veauryLast__.slot = le(le(le({}, q ? { children: q } : { children: null }), ae), H);
            }, attrs: function() {
              b.__veauryLast__.attrs = b.$attrs;
            } }, E && Object.keys(E).forEach(function(qe) {
              return de[qe]();
            }), v) {
              Ie.next = 64;
              break;
            }
            if (b.__reactBoundedPromise__ = new Promise(function(qe) {
              se = qe;
            }), b.__reactBoundedPromise__.resolve = se, de.slot(), de.attrs(), Ee = QO(h, m, b), ve = vt.createElement(Ee, gc({}, b.$attrs, b.__veauryInjectedProps__, { children: q }, ae, H, b.$attrs.class ? { className: b.$attrs.class } : {}, x, { hashList: w }, b.$attrs.style ? { style: b.$attrs.style } : {}, { ref: function(qe) {
              b.__veauryReactInstance__ = qe, b.__reactBoundedPromise__.resolve(!0);
            } })), Se = b.$refs.react, Ee = m.wrapInstance) {
              Ie.next = 47;
              break;
            }
            he = b.$parent;
          case 35:
            if (he) {
              if (he.parentReactWrapperRef) return Ee = he.parentReactWrapperRef, Ie.abrupt("break", 45);
              Ie.next = 39;
            } else Ie.next = 45;
            break;
          case 39:
            if (he.reactWrapperRef) return Ee = he.reactWrapperRef, Ie.abrupt("break", 45);
            Ie.next = 42;
            break;
          case 42:
            he = he.$parent, Ie.next = 35;
            break;
          case 45:
            Ie.next = 49;
            break;
          case 47:
            (Ee = m.wrapInstance).__veauryVueWrapperRef__ = b;
          case 49:
            if (Ee) return b.parentReactWrapperRef = Ee, b.reactPortal = function() {
              return ZS.createPortal(ve, Se);
            }, Ee.pushReactPortal(b.reactPortal), Ie.abrupt("return");
            Ie.next = 54;
            break;
          case 54:
            if (17 < WS) return hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED !== void 0 && (hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = !0), Ge = m.react.createRoot || hv.createRoot, 18 < WS && !Ge && console.warn("'react-dom 19' no longer supports dynamically determining whether to use 'render' or 'createRoot'. In order to be compatible with 'react-dom 17' and previous versions, you need to manually configure 'createRoot' in the veaury configuration."), b.__veauryReactApp__ = Ge(Se), b.__veauryReactApp__.render(ve), Ie.abrupt("return");
            Ie.next = 61;
            break;
          case 61:
            hv.render(ve, Se), Ie.next = 71;
            break;
          case 64:
            return Ie.next = 66, b.__reactBoundedPromise__;
          case 66:
            Fe = function() {
              b.__veauryReactInstance__.setState(function(qe) {
                return Object.keys(qe).forEach(function(it) {
                  m.isSlots && it === "children" || delete qe[it];
                }), le(le(le(le({}, b.__veauryCache__), b.__veauryInjectedProps__), !m.isSlots && b.__veauryLast__.slot), b.__veauryLast__.attrs);
              }), b.__veauryCache__ = null;
            }, !b.microTaskUpdate || b.__veauryCache__ || b.$nextTick(function() {
              Fe(), b.microTaskUpdate = !1;
            }), b.macroTaskUpdate && (clearTimeout(b.updateTimer), b.updateTimer = setTimeout(function() {
              clearTimeout(b.updateTimer), Fe(), b.macroTaskUpdate = !1;
            })), b.__veauryCache__ = le(le({}, b.__veauryCache__ || {}), le(le(le(le({}, N), b.$attrs.class ? { className: b.$attrs.class } : {}), le({}, x)), {}, { hashList: w }, b.$attrs.style ? { style: b.$attrs.style } : {})), b.macroTaskUpdate || b.microTaskUpdate || Fe();
          case 71:
          case "end":
            return Ie.stop();
        }
      }, y);
    }))();
  } }, mounted: function() {
    var v = this;
    this.__VEAURY_IGNORE_STRANGE_UPDATE__ = !0, Promise.resolve().then(function() {
      v.__VEAURY_IGNORE_STRANGE_UPDATE__ = !1;
    }), clearTimeout(this.updateTimer), this.__veauryMountReactComponent__();
  }, beforeUnmount: function() {
    var v;
    clearTimeout(this.updateTimer), HO(this.$refs.react), this.reactPortal ? (v = this.parentReactWrapperRef) != null && v.removeReactPortal(this.reactPortal) : 17 < WS ? (v = this.__veauryReactApp__) != null && v.unmount() : hv.unmountComponentAtNode(this.$refs.react), IO();
  }, updated: function() {
    this.__VEAURY_IGNORE_STRANGE_UPDATE__ || this.__veauryMountReactComponent__(!0, { slot: !0 });
  }, inheritAttrs: !1, watch: { $attrs: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 }, __veauryInjectedProps__: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 } } };
}
var GO = /* @__PURE__ */ new Set(["onClick", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onChange", "onInput", "onInvalid", "onReset", "onSubmit", "onError", "onLoad", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onGotPointerCapture", "onLostPointerCapture", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onSelect", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onScroll", "onWheel", "onAbort", "onCanPlay", "onCanPlayThrough", "onDurationChange", "onEmptied", "onEncrypted", "onEnded", "onError", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onPause", "onPlay", "onPlaying", "onProgress", "onRateChange", "onSeeked", "onSeeking", "onStalled", "onSuspend", "onTimeUpdate", "onVolumeChange", "onWaiting", "onLoad", "onError", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionEnd", "onToggle"]);
function qO(h, m) {
  for (var v = (h = m = h?._reactInternals || h?._reactInternalFiber || m) == null ? void 0 : h.return; v; ) {
    var E = v.stateNode;
    if (E = E?.parentVueWrapperRef || E?.__veauryVueWrapperRef__) return E;
    v = v.return;
  }
}
function s2(h, m, v) {
  var E = {};
  return v.forEach(function(k) {
    E[k] = !0;
  }), h[(m === "modelValue" ? "model" : m) + "Modifiers"] = E;
}
function c2(h, m, v) {
  var E = this, k = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : "v-model";
  if (!(m instanceof Array)) throw Error("[error:veaury] Parameter type error from '".concat(k, "', a single v-model is an array, such as [val, setter, argumentKey, modifiers] or [val, setter, modifiers]"));
  if (typeof m[1] != "function") throw Error("[error:veaury] Parameter type error from '".concat(k, "', a single v-model is an array, the second element of the array must be a setter function"));
  var b = m[1], y = (typeof m[2] == "string" ? (v = m[2], m[3] instanceof Array && s2(h, v, m[3])) : m[2] instanceof Array && s2(h, v, m[2]), h["onUpdate:" + v]);
  h["onUpdate:" + v] = typeof y == "function" ? function() {
    for (var N = arguments.length, x = new Array(N), w = 0; w < N; w++) x[w] = arguments[w];
    y.apply(E, x), b.apply(E, x);
  } : b, h[v] = m[0];
}
function qS(h) {
  var m = this, v = {}, E = le({}, h);
  return Object.keys(h).forEach(function(k) {
    var b, y = k.match(/^onUpdate-([^-]+)/);
    if (y) delete E[k], b = v["onUpdate:".concat(y[1])], v["onUpdate:".concat(y[1])] = typeof b == "function" ? function() {
      for (var x = arguments.length, w = new Array(x), z = 0; z < x; z++) w[z] = arguments[z];
      b.apply(m, w), h[k].apply(m, w);
    } : h[k];
    else if (y = k.match(/^v-model($|:([^:]+)|-([^:]+))/)) y = y[2] || y[3] || "modelValue", c2(v, h[k], y), delete E[k];
    else if (k === "v-models") {
      if (Gr(h[k]) !== "object" || h[k] instanceof Array) throw Error("[error:veaury] The parameter 'v-models' must be an object type, such as {[argumentKey]: singleVModel}");
      var N = h[k];
      Object.keys(N).forEach(function(x) {
        c2(v, N[x], x, "v-models");
      }), delete E[k];
    }
  }), le(le({}, E), v);
}
var Ry = _v(function h() {
  Sv(this, h), ld(this, "pool", /* @__PURE__ */ new Set());
}, [{ key: "getRandomId", value: function(h) {
  var m = h + (Math.random() + "").substr(2);
  return this.pool.has(m) ? this.getRandomId(h) : (this.pool.add(m), m);
} }]);
function D2(E, m) {
  var v, E = E.node;
  if (typeof E == "function" && (E = E()), (v = m) != null && v.current || typeof m == "function" || (v = m) != null && v.toString().match(/^function/) || (m = null), -1 < ["string", "number"].indexOf(Gr(E))) return E;
  if (E instanceof Array) {
    if (E.length !== 1) return E;
    E = E[0];
  }
  return le(le({}, E), {}, { ref: m });
}
var KO = e_(D2);
function KS(h) {
  return tu(KO, { node: function() {
    return h.node;
  } });
}
KS.originReactComponent = vt.forwardRef(D2);
var XO = ["component", "node"], JO = ["component", "$slots", "children", "class", "style"], ZO = ["className", "classname"], yc = "veaury-options", f2 = new Ry();
function e3(h, m) {
  var v;
  return h = typeof h == "string" && m ? (m = m.$) == null || (m = m.appContext) == null || (m = m.app) == null || (v = m.component) == null ? void 0 : v.call(m, h) : h;
}
function d2(h) {
  if (h) return Object.keys(h).forEach(function(m) {
    var v = h[m];
    v != null && (typeof v == "function" ? (h[m] = v, h[m].reactFunction = v) : (h[m] = function() {
      return v;
    }, h[m].reactSlot = v), v.vueFunction) && (h[m].vueFunction = v.vueFunction);
  }), h;
}
function t3(h) {
  var m;
  return (m = h.node) == null ? void 0 : m.call(h);
}
var XS = vt.forwardRef(function(k, m) {
  var v, y = k.component, E = k.node, k = $i(k, XO);
  if (y == null && E == null) return null;
  if (E != null) {
    if (E.$$typeof || typeof E == "string" || typeof E == "number") return E;
    typeof E != "function" && (v = E, E = function() {
      return v;
    });
  }
  var b, y = y || t3, N = x2(k[yc] || {}, void 0, !0), x = N.useInjectPropsFromWrapper || y.__veauryInjectPropsFromWrapper__;
  return N.isSlots || typeof x == "function" && (b = x(k)), vt.createElement(n3, gc({}, le(le(le(le({ component: y }, E ? { node: E } : {}), k), b), {}, ld({}, yc, N)), { ref: m }));
}), n3 = (() => {
  function h(m) {
    var v;
    return Sv(this, h), (v = _y(this, h, [m])).state = { portals: [] }, v.__veauryPortalKeyPool__ = [], v.__veauryMaxPortalCount__ = 0, v.__veauryCurrentVueComponent__ = m.component, v.__veauryCreateVueInstance__ = v.__veauryCreateVueInstance__.bind(v), v.__veauryVueComponentContainer__ = v.createVueComponentContainer(), v;
  }
  return Cy(h, vt.Component), _v(h, [{ key: "pushReactPortal", value: function(m) {
    var v = this.state.portals, E = this.__veauryPortalKeyPool__.shift() || this.__veauryMaxPortalCount__++;
    v.push({ Portal: m, key: E }), this.setState({ portals: v });
  } }, { key: "removeReactPortal", value: function(m) {
    var v, E = this.state.portals, k = E.find(function(b, y) {
      if (b.Portal === m) return v = y, !0;
    });
    this.__veauryPortalKeyPool__.push(k.key), E.splice(v, 1), this.__veauryVueRef__ && this.setState({ portals: E });
  } }, { key: "createVueComponentContainer", value: function() {
    var m = this, v = {}, E = this.props[yc];
    return E.isSlots ? (Object.keys(this.props).forEach(function(k) {
      GO.has(k) && typeof m.props[k] == "function" && (v[k] = m.props[k]);
    }), E.vue.slotWrapAttrs && (v = le(le({}, v), E.vue.slotWrapAttrs))) : E.vue.componentWrapAttrs && (v = le(le({}, v), E.vue.componentWrapAttrs)), E.vue.componentWrapHOC(vt.createElement("div", gc({}, E.vue.componentWrapAttrs, { ref: this.__veauryCreateVueInstance__, key: null })), v);
  } }, { key: "shouldComponentUpdate", value: function(m, v, E) {
    var k, b, y, N, x = this;
    return m === this.props || (k = m.component, b = (b = m["v-slots"]) === void 0 ? null : b, y = m.children, m = $i(m, ["component", yc, "v-slots", "children"].map(Sy)), this.__veauryCurrentVueComponent__ !== k && this.updateVueComponent(k), k.__fromReactSlot) || this.__veauryVueInstance__ && (y && (b = b || {}, Gr(y) !== "object" || y instanceof Array || y.$$typeof ? b.default = y : b = y), (N = this.__veauryVueInstance__.$data.$slots) && Object.keys(N).forEach(function(w) {
      delete N[w];
    }), b && (N || (this.__veauryVueInstance__.$data.$slots = {}), Object.assign(this.__veauryVueInstance__.$data.$slots, d2(b))), Object.keys(this.__veauryVueInstance__.$data).forEach(function(w) {
      w !== "$slots" && delete x.__veauryVueInstance__.$data[w];
    }), this.__veauryVueInstance__) && Object.assign(this.__veauryVueInstance__.$data, qS(m)), !0;
  } }, { key: "componentWillUnmount", value: function() {
    this.vuePortal ? this.parentVueWrapperRef.__veauryRemoveVuePortal__(this.vuePortal) : (this.__veauryVueInstance__ && this.__veauryVueInstance__.$.appContext.app.unmount(), f2.pool.delete(this.__veauryVueTargetId__), this.vueCreated = !1);
  } }, { key: "componentDidMount", value: function() {
    this.__veauryCreateVueInstance__(this.vueContainerElement);
  } }, { key: "__veauryCreateVueInstance__", value: function(m) {
    var v, E, k, b, y, N, x, w, z = this;
    function H(q) {
      this.__veauryVueInstance__ || (this.__veauryVueInstance__ = q);
    }
    this.vueCreated || (this.vueCreated = !0, (v = this).vueContainerElement = m, (k = this.props).component, E = k[yc], x = k.children, w = (w = k["v-slots"]) === void 0 ? {} : w, k = $i(k, ["component", yc, "children", "v-slots"].map(Sy)), x && (Gr(x) !== "object" || x instanceof Array || x.$$typeof ? w.default = x : w = x), (w = d2(w)) && (k.$slots = w), H = H.bind(this), b = le({}, qS(k)), y = { data: function() {
      return E.isSlots ? { children: v.__veauryCurrentVueComponent__.originVNode } : b;
    }, created: function() {
      this.reactWrapperRef = v, H(this);
    }, methods: { reactInVueCall: function(q) {
      return 2 < arguments.length && arguments[2] && q && q[0] ? q.map(function(G, pe) {
        return tu(KS, { node: G, key: (G == null || (G = G.data) == null ? void 0 : G.key) || pe });
      }) : tu(KS, { node: q });
    }, getScopedSlots: function(q, G) {
      var pe, ae = this, de = (this.getScopedSlots.__scopeSlots || (this.getScopedSlots.__scopeSlots = {}), le({}, G));
      for (pe in de) ((se) => {
        var ve, Se;
        !de.hasOwnProperty(se) || (ve = de[se]) == null || (de[se] = (Se = ve, function() {
          for (var Ee, he, Ge, Fe, Ie = arguments.length, qe = new Array(Ie), it = 0; it < Ie; it++) qe[it] = arguments[it];
          return Se.vueFunction ? Se.vueFunction.apply(ae, qe) : (Ge = Se.reactFunction, Ge = Se.reactSlot || Ge?.apply(ae, qe), Fe = E.defaultSlotsFormatter, (Ee = ae.getScopedSlots.__scopeSlots[se]) != null && (Ee = Ee.component) != null && (Ee = Ee.ctx) != null && Ee.__veauryReactInstance__ ? (he = ae.getScopedSlots.__scopeSlots[se], Promise.resolve().then(function() {
            var ge;
            (ge = he) != null && (ge = ge.component) != null && (ge = ge.ctx) != null && (ge = ge.__veauryReactInstance__) != null && ge.setState({ children: Se.apply(ae, qe) });
          })) : (he = Fe && Ge ? [Fe(Ge, ae.reactInVueCall)] : q(e_(function() {
            return Se.apply(ae, qe);
          }, le(le({}, E), {}, { isSlots: !0, wrapInstance: v }))), ae.getScopedSlots.__scopeSlots[se] = he), Se.reactFunction ? he.reactFunction = Se.reactFunction : Se.reactSlot && (he.reactSlot = Se.reactSlot), he);
        }), de[se].reactFunction = ve);
      })(pe);
      return de;
    } }, mounted: function() {
      m.removeAttribute("id"), v.__veauryVueRef__ = this.$refs.use_vue_wrapper, this.$refs.use_vue_wrapper.reactWrapperRef = v;
    }, beforeUnmount: function() {
      v.__veauryVueRef__ = null, this.$refs.use_vue_wrapper.reactWrapperRef = null;
    }, render: function() {
      var q = this, ve = this.$data, de = (ve.component, ve.$slots), G = ve.class, pe = ve.style, ve = $i(ve, JO), ae = this.getScopedSlots(tu, le({}, de)), de = ve.className, se = ve.classname, ve = $i(ve, ZO), Se = {};
      return Object.keys(ae).forEach(function(Ee) {
        var he = ae[Ee];
        Se[Ee] = typeof he == "function" ? he : function() {
          return he;
        };
      }), tu(e3(v.__veauryCurrentVueComponent__, this), le(le(le(le({}, ve), G || de || se ? { class: G || de || se } : {}), pe ? { style: pe } : {}), {}, { ref: "use_vue_wrapper" }), le({}, E.isSlots && this.children ? { default: typeof this.children == "function" ? this.children : function() {
        return q.children;
      } } : le({}, Se)));
    } }, m && (N = f2.getRandomId("__vue_wrapper_container_"), m.id = N, this.__veauryVueTargetId__ = N, (x = E.wrapInstance) ? (x = E.wrapInstance).reactWrapperRef = v : x = qO(this), x && document.getElementById(N) ? (this.parentVueWrapperRef = x, this.vuePortal = function(q, G) {
      return q(Rk, { to: "#" + N, key: N }, [q(Object.assign(y, { router: z._router }))]);
    }, x.__veauryPushVuePortal__(this.vuePortal)) : (w = bk(y), typeof E.beforeVueAppMount == "function" && E.beforeVueAppMount(w), this.__veauryVueInstance__ = w.mount(m))));
  } }, { key: "updateVueComponent", value: function(m) {
    this.__veauryVueInstance__ && (m.__fromReactSlot ? this.__veauryVueInstance__.children = typeof m.originVNode == "function" ? m.originVNode : function() {
      return m.originVNode;
    } : (this.__veauryCurrentVueComponent__ = m, this.__veauryVueInstance__.$forceUpdate()));
  } }, { key: "render", value: function() {
    return vt.createElement(this.__veauryVueComponentContainer__, { portals: this.state.portals });
  } }]);
})();
function gy(h) {
  var m = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, v = (h || console.warn("Component must be passed in applyVueInReact!"), h.__esModule && h.default && (h = h.default), vt.forwardRef(function(E, k) {
    return vt.createElement(XS, gc({}, E, { component: h, ref: k }, ld({}, yc, m)));
  }));
  return v.originVueComponent = h, v;
}
new Ry();
function r3(h) {
  var m = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, v = m.globalName, E = e_(h, m.combinedOption || {});
  return E.install = function(k) {
    var b = (1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}).globalName;
    return v && k.component(b || v, E), E;
  }, E;
}
function p2(h) {
  return h.replace(/-(\w)/g, function(m, v) {
    return v.toUpperCase();
  });
}
function by(h) {
  var m;
  return h ? typeof h == "string" ? (h = h.trim()).split(/\s*;\s*/).reduce(function(v, E) {
    return E && (E = E.split(/\s*:\s*/)).length === 2 && Object.assign(v, ld({}, p2(E[0]), E[1])), v;
  }, {}) : Gr(h) === "object" ? (m = {}, Object.keys(h).forEach(function(v) {
    m[p2(v)] = h[v];
  }), m) : {} : {};
}
function wy(h) {
  return h ? h instanceof Array ? h : typeof h == "string" ? (h = h.trim()).split(/\s+/) : Gr(h) === "object" ? Object.keys(h).filter(function(m) {
    return !!h[m];
  }) : [] : [];
}
var a3 = ["ref"];
function i3(h, m, v, E, k) {
  var b = h.props || {}, b = (b.ref, $i(b, a3)), y = {}, N = (Object.keys(h.children || {}).forEach(function(z) {
    var H = h.children[z], q = T2.react.vueNamedSlotsKey.find(function(G) {
      return z.indexOf(G) === 0;
    });
    q || z === "default" ? (q = z.replace(new RegExp("^".concat(q)), "").replace(/^default$/, "children"), y[q] = E.call(h.__top__, H(), v, k)) : typeof H == "function" && (y[z] = function() {
      for (var G = arguments.length, pe = new Array(G), ae = 0; ae < G; ae++) pe[ae] = arguments[ae];
      return H.__reactArgs = pe, E(H.apply(this, pe), v, k);
    });
  }), {}), x = by(b.style), w = Array.from(new Set(wy(b.class))).join(" ");
  return 0 < Object.keys(x).length && (N.style = x), w !== "" && (N.className = w), Object.assign(b, le(le({}, N), y)), delete b.class, typeof b.ref_for == "boolean" && delete b.ref_for, b;
}
function v2(h) {
  return h.type === Tk;
}
new Ry();
function O2(h, m) {
  var v;
  return 0 < ((v = h.dirs) == null ? void 0 : v.length) ? vt.createElement(o3, { vnode: h }, m) : m;
}
var o3 = (() => {
  function h(m) {
    var v;
    return Sv(this, h), (v = _y(this, h, [m])).state = { prevVnode: null, savedDirectives: [], ref: null, prevProps: m }, v;
  }
  return Cy(h, vt.Component), _v(h, [{ key: "findDirectiveName", value: function(m) {
    var v = m.dir, E = -1;
    return [this.state.savedDirectives.find(function(k, b) {
      if (k.dir === v) return E = b, !0;
    }), E];
  } }, { key: "doDirective", value: function() {
    var m = this, b = this.state, v = b.savedDirectives;
    if (!(E = b.ref)) {
      for (var E = (this._reactInternals || this._reactInternalFiber).child; E && E.tag !== 5; ) E = E.child;
      if (!E) return;
      E = E.stateNode;
    }
    var k = this.props.vnode, b = k.dirs;
    b && (b.forEach(function(y) {
      var N, x, w, z, H, q, G;
      y && (G = (N = u2(m.findDirectiveName(y), 2))[0], N = N[1], x = (H = y.dir).created, w = H.beforeMount, z = H.mounted, q = H.beforeUpdate, H = H.updated, G ? (v[N] = le(le(le({}, G), y), {}, { oldValue: G.oldValue }), G = [E, v[N], k, m.state.prevVnode], q?.apply(null, G), H?.apply(null, G), v[N].oldValue = y.value) : (v.push(y), q = [E, y, k, null], x?.apply(null, q), w?.apply(null, q), z?.apply(null, q), y.oldValue = y.value));
    }), this.setState({ prevVnode: le({}, k), savedDirectives: v, ref: E }));
  } }, { key: "componentDidMount", value: function() {
    this.doDirective();
  } }, { key: "componentDidUpdate", value: function(m) {
    m.vnode !== this.props.vnode && this.doDirective();
  } }, { key: "componentWillUnmount", value: function() {
    var m = this, v = this.props.vnode, y = this.state, E = y.savedDirectives, k = y.ref, b = y.prevVnode, y = v.dirs;
    y && (y.forEach(function(N) {
      var x, w, z, H;
      N && (x = (H = u2(m.findDirectiveName(N), 2))[0]) && (w = (z = N.dir).beforeUnmount, z = z.unmounted, E[H[1]] = le(le({}, x), N), H = [k, x, v, b], w?.apply(null, H), z != null) && z.apply(null, H);
    }), this.setState({ prevVnode: le({}, v), savedDirectives: E }));
  } }, { key: "render", value: function() {
    var m = this.props;
    return m.vnode, m.children;
  } }]);
})();
function l3(h, m) {
  var v;
  return typeof h == "function" && (v = h.toString(), h.prototype !== void 0) && h.prototype.constructor === h && (v.slice(0, 5) == "class" || 2 <= Object.getOwnPropertyNames(h.prototype).length || !/^function\s+\(|^function\s+anonymous\(/.test(v) && (!(!m || !/^function\s+[A-Z]/.test(v)) || !!/\b\(this\b|\bthis[\.\[]\b/.test(v) && (!(m && !/classCallCheck\(this/.test(v)) || /^function\sdefault_\d+\s*\(/.test(v))));
}
function L2(h, m) {
  var v, E, k, b;
  return typeof ((k = h.type) == null ? void 0 : k.originReactComponent) != "function" || l3((k = h.type) == null ? void 0 : k.originReactComponent) ? ((k = h.ref) != null && k.k ? (v = (k = h.ref) == null ? void 0 : k.k, E = (k = h.ref) == null ? void 0 : k.r) : v = (k = h.ref) == null ? void 0 : k.r, v && typeof v == "string" && (b = v, v = function(y) {
    var N;
    (N = h.ref) != null && (N = N.i) != null && N.refs && ((N = le({}, h.ref.i.refs))[b] = y, h.ref.i.refs = N), E ? E.value = y : h.ref.i.setupState && b in h.ref.i.setupState && (h.ref.i.setupState[b] = y), y && (y.__syncUpdateProps = function() {
      m.__top__ && (h.__extraData = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, m.__top__.__syncUpdateProps({}));
    });
  }, v = new Proxy(v, { get: function(y, N) {
    return y[N];
  }, set: function(y, N, x) {
    var w;
    return (w = h.ref) != null && (w = w.i) != null && w.refs && b in ((w = h.ref) == null || (w = w.i) == null ? void 0 : w.refs) && ((w = le({}, h.ref.i.refs))[N] = x, h.ref.i.refs = w), x;
  } })), v) : null;
}
function JS(h, m) {
  return !m || m instanceof Array && m.length === 0 || (typeof m == "string" && (m = [m]), (h = le({}, h)).props = le({}, h.props), m.forEach(function(v) {
    h.props[v] = "";
  })), h;
}
var u3 = ["style", "class"];
function h2(h, m, v, E, k, b, y) {
  var N, x, w;
  return m === "all" || m instanceof Array || (m = m ? [m] : []), h.type === g2 ? k.call(y, h.children, v, b) : typeof h.type == "string" && (m === "all" || -1 < m.indexOf(h.type)) ? (m = L2(h), w = (x = h.props || {}).style, N = x.class, x = le(le({}, $i(x, u3)), {}, { style: by(w), className: Array.from(new Set(wy(N))).join(" ") }, m ? { ref: m } : {}), (w = h.children || x.children) && ((w = -1 < ["string", "number"].indexOf(Gr(w)) ? [w] : Ey(w)).__top__ = y), O2(h, JS(mc.createElement(h.type, x, k.call(y, w, v, b)), h.scopeId))) : v([h], null, E);
}
function s3() {
  var h = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, m = 1 < arguments.length ? arguments[1] : void 0, v = 2 < arguments.length ? arguments[2] : void 0;
  return v.__syncUpdateForPureReactInVue && Object.keys(v.__syncUpdateForPureReactInVue).map(function(E) {
    var k;
    h[E] && typeof h[E] == "function" && m.__top__ && (k = h[E], h[E] = function() {
      for (var b = arguments.length, y = new Array(b), N = 0; N < b; N++) y[N] = arguments[N];
      m.__extraData = v.__syncUpdateForPureReactInVue[E].apply(this, y), m.__top__.__veaurySyncUpdateProps__({}), m.__top__.macroTaskUpdate = !0, k.apply(this, y), m.__top__ && Promise.resolve().then(function() {
        m.__extraData = null, m.__top__.__veauryMountReactComponent__(!0);
      });
    });
  }), h;
}
function m2(h, m, v) {
  return !((h = h instanceof Array && h.length === 1 ? h[0] : h) instanceof Array) && h.key == null && 1 < m.length && ((h = le({}, h)).key = "_key_".concat(v)), h;
}
function N2(E) {
  var m = E.reactComponents, v = E.domTags, E = E.division, k = E === void 0 || E;
  return function b(y, N, x) {
    var w;
    return y && y.forEach ? (y.__top__ || (y.__top__ = this), w = [], y.forEach(function(z, H) {
      if (z && z.type !== wk) {
        if ((pe = z.type) == null || !pe.originReactComponent) return z.$$typeof || typeof z == "string" || typeof z == "number" ? void w.push(z) : v2(z) ? void (z.children.trim() !== "" && w.push(z.children.trim())) : void (z.type && (JS(pe = m2(h2(z, v, N, k, b, x, y.__top__), y, H), z.scopeId), w.push(pe)));
        var q, G, pe = z.type.originReactComponent;
        JS(q = m2(q = (m = m === "all" || m instanceof Array ? m : [m]) === "all" || -1 < m.indexOf(pe) ? (z.__top__ = y.__top__, q = i3(z, "_key_".concat(H), N, b, x), G = L2(z, y), z.children && (z.children.__top__ = y.__top__), O2(z, mc.createElement(pe, le(le(le({}, s3(q, z, pe)), z.__extraData || {}), G ? { ref: G } : {})))) : v2(z) ? z.text : h2(z, v, N, k, b, x), y, H), z.scopeId), w.push(q);
      }
    }), w.length === 1 ? w[0] : w) : y;
  };
}
var YS = N2({ reactComponents: "all", domTags: "all" });
function c3(h, m) {
  return r3(h, { combinedOption: le({ pureTransformer: !0, defaultSlotsFormatter: YS, defaultPropsFormatter: function(v, E, k) {
    var b = {};
    return Object.keys(v).forEach(function(y) {
      var N = v[y];
      N && (N.vueFunction ? (b[y] = function() {
        for (var x = arguments.length, w = new Array(x), z = 0; z < x; z++) w[z] = arguments[z];
        return YS(N.vueFunction.apply(this, w), E, k);
      }, Object.defineProperty(b[y], "length", { get: function() {
        return N.vueFunction.length;
      } })) : N.vueSlot && (b[y] = YS(N.vueSlot, E, k)));
    }), Object.assign(v, b);
  } }, m) });
}
N2({ reactComponents: "all", domTags: "all" });
var f3 = ["ref", "children", "v-slots"];
function d3(x, m, v, E, k) {
  var x = x.props || {}, w = (x.ref, x.children), y = x["v-slots"], b = y === void 0 ? {} : y, y = $i(x, f3), N = (w && (Gr(w) !== "object" || w instanceof Array || w.$$typeof ? b.default = w : b = w), null), x = (Object.keys(b || {}).forEach(function(H) {
    var q = b[H];
    (N = N || {})[H] = function() {
      if (typeof q == "function") {
        for (var G = arguments.length, pe = new Array(G), ae = 0; ae < G; ae++) pe[ae] = arguments[ae];
        q = q.apply(this, pe);
      }
      return E(q, v, k);
    };
  }), {}), w = by(y.style), z = Array.from(new Set(wy(y.className))).join(" ");
  return 0 < Object.keys(w).length && (x.style = w), z !== "" && (x.class = z), Object.assign(y, le({}, x)), delete y.className, { props: y = qS(y), slots: N };
}
function M2(h) {
  var m = h.ref;
  if (m) return Gr(m) === "object" ? function(v) {
    h.ref.current = v;
  } : typeof m == "function" ? m : void 0;
}
var p3 = ["style", "class", "children"];
function y2(h, m, v, E, k, b) {
  var y, N, x, w;
  return m === "all" || m instanceof Array || (m = m ? [m] : []), h.type === vt.Fragment ? k((y = h.props) == null ? void 0 : y.children, v) : typeof h.type == "string" && (m === "all" || -1 < m.indexOf(h.type)) ? (y = M2(h), w = (m = h.props || {}).style, x = m.class, N = m.children, m = $i(m, p3), x = Array.from(new Set(wy(x))).join(" "), w = by(w), m = le(le(le(le({}, m), Object.keys(w).length === 0 ? {} : { style: w }), x ? { className: x } : {}), y ? { ref: y } : {}), Object.keys(m).length === 0 && (m = null), (w = N) && ((w = -1 < ["string", "number"].indexOf(Gr(w)) ? [w] : w instanceof Array ? Ey(w) : le({}, w)).__top__ = b), tu(h.type, m, k(w, v))) : v([h], null, E);
}
function A2(E) {
  var m = E.vueComponents, v = E.domTags, E = E.division, k = E === void 0 || E;
  return function b(y, N) {
    if (y == null) return y;
    y instanceof Array || (y = [y]);
    var x = [];
    return y.forEach(function(w, z) {
      if (((H = w.type) == null || !H.originVueComponent) && w.type !== XS) return w.__v_isVNode || typeof w == "string" || typeof w == "number" ? void x.push(w) : void (w.type && (H = y2(w, v, N, k, b, y.__top__), x.push(H)));
      var H = w.type.originVueComponent;
      if (w.type === XS) {
        if (!w.props.component) return void x.push(w.props.node);
        H = w.props.component, w = le({}, w);
        var q = le({}, w.props);
        delete q.component, w.props = q;
      }
      H = (m = m === "all" || m instanceof Array ? m : [m]) === "all" || -1 < m.indexOf(H) ? ((w = le({}, w)).__top__ = y.__top__, z = (q = d3(w, "_key_".concat(z), N, b)).props, q = q.slots, M2(w), w.children && (w.children.__top__ = y.__top__), tu(H, le({}, z), q)) : y2(w, v, N, k, b), x.push(H);
    }), (x = x.flat(1 / 0)).length === 1 ? x[0] : x;
  };
}
A2({ vueComponents: "all", domTags: "all" });
A2({ reactComponents: "all", domTags: "all" });
new Ry();
const v3 = /* @__PURE__ */ xk({
  __name: "CopilotApp",
  setup(h) {
    const m = c3(bO);
    return (v, E) => (Dk(), kk(Ok(m)));
  }
}), S3 = {
  install(h) {
    h.component("CopilotApp", v3);
  }
};
export {
  v3 as CopilotApp,
  S3 as default
};
